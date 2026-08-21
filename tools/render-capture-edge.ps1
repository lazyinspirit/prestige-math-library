param(
  [Parameter(Mandatory=$true)][int]$Port,
  [Parameter(Mandatory=$true)][string]$InputJson
)
$ErrorActionPreference = 'Stop'

function Wait-Version([int]$DebugPort) {
  $last = $null
  for ($i = 0; $i -lt 120; $i++) {
    try { return Invoke-RestMethod -Uri "http://127.0.0.1:$DebugPort/json/version" -TimeoutSec 2 }
    catch { $last = $_; Start-Sleep -Milliseconds 500 }
  }
  throw "Edge debugging endpoint did not become ready: $last"
}

$script:nextId = 0
$script:socket = $null
function Connect-Cdp([string]$Url) {
  $script:socket = [System.Net.WebSockets.ClientWebSocket]::new()
  $null = $script:socket.ConnectAsync([Uri]$Url, [Threading.CancellationToken]::None).GetAwaiter().GetResult()
}
function Cdp([string]$Method, $Params = @{}, [string]$SessionId = '') {
  $script:nextId += 1
  $request = @{ id = $script:nextId; method = $Method; params = $Params }
  if ($SessionId) { $request.sessionId = $SessionId }
  $bytes = [Text.Encoding]::UTF8.GetBytes(($request | ConvertTo-Json -Compress -Depth 30))
  $segment = [ArraySegment[byte]]::new($bytes)
  $null = $script:socket.SendAsync($segment, [System.Net.WebSockets.WebSocketMessageType]::Text, $true,
    [Threading.CancellationToken]::None).GetAwaiter().GetResult()
  while ($true) {
    $stream = [IO.MemoryStream]::new()
    do {
      $buffer = New-Object byte[] 1048576
      $received = $script:socket.ReceiveAsync([ArraySegment[byte]]::new($buffer),
        [Threading.CancellationToken]::None).GetAwaiter().GetResult()
      $stream.Write($buffer, 0, $received.Count)
    } while (-not $received.EndOfMessage)
    $message = [Text.Encoding]::UTF8.GetString($stream.ToArray()) | ConvertFrom-Json
    if ($message.id -ne $script:nextId) { continue }
    if ($message.error) { throw "CDP $Method failed: $($message.error.message)" }
    return $message.result
  }
}

$version = Wait-Version $Port
Connect-Cdp $version.webSocketDebuggerUrl
$input = Get-Content -Raw -LiteralPath $InputJson | ConvertFrom-Json
$rows = @()
foreach ($page in $input.pages) {
  $target = Cdp 'Target.createTarget' @{ url = 'about:blank' }
  $attached = Cdp 'Target.attachToTarget' @{ targetId = $target.targetId; flatten = $true }
  $session = $attached.sessionId
  Cdp 'Page.enable' @{} $session | Out-Null
  Cdp 'Runtime.enable' @{} $session | Out-Null
  Cdp 'Emulation.setDeviceMetricsOverride' @{ width = 1440; height = 1000; deviceScaleFactor = 1; mobile = $false } $session | Out-Null
  $nav = Cdp 'Page.navigate' @{ url = $page.url } $session
  if ($nav.errorText) { throw "$($page.page): navigation failed: $($nav.errorText)" }
  Start-Sleep -Milliseconds 1800
  $expression = @'
(async () => {
  await document.fonts.ready;
  await new Promise(resolve => setTimeout(resolve, 500));
  const text = document.body?.innerText || '';
  const rect = document.documentElement.getBoundingClientRect();
  const bad = [...document.querySelectorAll('.katex-error, [data-tikz-error], .tikz-error')]
    .map(el => (el.textContent || '').trim()).filter(Boolean);
  return { title: document.title,
    width: Math.ceil(Math.max(document.documentElement.scrollWidth, rect.width)),
    height: Math.ceil(Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0)),
    katex: document.querySelectorAll('.katex').length,
    svg: document.querySelectorAll('svg').length,
    tikzFencesVisible: (text.match(new RegExp(String.fromCharCode(96,96,96) + 'tikz(?:cd)?', 'g')) || []).length,
    proofHeadings: [...document.querySelectorAll('h2')].filter(h => /proof|refutation|counterexample|verification/i.test(h.textContent || '')).length,
    errors: bad,
    notFound: /404|not found/i.test(document.querySelector('h1')?.textContent || '') };
})()
'@
  $inspection = Cdp 'Runtime.evaluate' @{ expression = $expression; awaitPromise = $true; returnByValue = $true } $session
  $dom = $inspection.result.value
  if ($dom.notFound) { throw "$($page.page): renderer returned a not-found page" }
  $shot = Cdp 'Page.captureScreenshot' @{ format = 'png'; fromSurface = $true; captureBeyondViewport = $true } $session
  [IO.File]::WriteAllBytes($page.output, [Convert]::FromBase64String($shot.data))
  $rows += [pscustomobject]@{ page = $page.page; width = $dom.width; height = $dom.height;
    katex = $dom.katex; svg = $dom.svg; tikzFencesVisible = $dom.tikzFencesVisible;
    proofHeadings = $dom.proofHeadings; errors = @($dom.errors) }
  Cdp 'Target.closeTarget' @{ targetId = $target.targetId } | Out-Null
}
$script:socket.Dispose()
$rows | ConvertTo-Json -Compress -Depth 10
