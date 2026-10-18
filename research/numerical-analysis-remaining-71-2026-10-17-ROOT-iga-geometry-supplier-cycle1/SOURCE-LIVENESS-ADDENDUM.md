# First-cycle source-liveness addendum — Buffa et al.

This is source research during live native batch-69 authoring, not the second/final geometry review. No canonical item/page, coverage/manifest/contract, readiness, runtime, native control, or mathematical claim was changed. All new files are in this cycle-1 directory. The later actual geometry review remains unperformed and must be triggered by root after authentic writer drain.

`CLAUDE.md` was reread. The current Codex config was inspected read-only: `/home/lazyinspirit/.codex/config.toml`, lines 14–15, records `model_auto_compact_token_limit = 500000` and scope `total`. No setting was changed, and this observation does not establish when the present session adopted it.

## Working authoritative same-work full body

Recommended recovery URL: **https://arxiv.org/pdf/2107.02023v2**.

The author-deposited arXiv v2 PDF was fetched directly and completely, with these observed facts:

| Field | Observed value |
|---|---|
| Request started, UTC | 2026-10-17T14:52:13.057146+00:00 |
| Request completed, UTC | 2026-10-17T14:52:20.223326+00:00 |
| Requested and final URL | https://arxiv.org/pdf/2107.02023v2 |
| HTTP and media type | 200; `application/pdf` |
| Redirects | None |
| Body bytes | 6,664,978 |
| SHA-256 | `008fdc5d44645cc27ab1c639530b3d43e6486fae09431c470391e27ae99a4112` |
| PDF extent | 82 pages; first page carries `arXiv:2107.02023v2 [math.NA] 21 Sep 2022`; final page ends the bibliography at reference 215 |
| Local body | `source-liveness/arxiv-v2.pdf` |
| Exact request evidence | `source-liveness/arxiv-v2.fetch.json` |

An independent direct request to the unversioned https://arxiv.org/pdf/2107.02023 completed at 2026-10-17T14:51:54.496403+00:00 with HTTP 200, the same media type, byte length and SHA-256; its body is `source-liveness/arxiv.pdf`. Prefer the versioned URL to preserve the exact author manuscript version.

The official arXiv abstract record was also fetched, not inferred from a search snippet: https://arxiv.org/abs/2107.02023, started 2026-10-17T14:52:20.226044+00:00 and completed 2026-10-17T14:52:20.494567+00:00; HTTP 200, `text/html; charset=utf-8`, 41,280 bytes, SHA-256 `99456f8f2014936bac76c7a38c9b3fc969497b1cda661998a30c70c009a091d0`. The saved `source-liveness/arxiv-record.html` explicitly names the same five authors, title, journal reference, and **DOI 10.1007/s11831-022-09752-5** in `citation_doi`; it identifies the latest revision as v2, 21 September 2022. Its `citation_pdf_url` names the working PDF. This is authoritative same-work identity evidence. The arXiv body is the author manuscript, **not** the publisher's byte-identical version of record.

## Actual context inspected

The full 82-page PDF was downloaded and parsed successfully with PyMuPDF; its complete extract is saved as `source-liveness/arxiv-full.txt`. I read the first/title-and-contents page, the final bibliography page, and the full text of PDF pages **11–19**, covering §§2.1–2.4, §§3.1.1–3.1.3, §§3.2.1–3.2.2 and the beginning of §3.2.3. I do not claim to have read every page of this 82-page article.

The relevant recovered text supplies the same contextual material retained by the current source coverage:

- §2.1 uses p-open/clamped knots, distinguishes interior multiplicity p+1 from continuous multiplicity at most p, states nonnegativity/partition and the derivative formula, and gives local quasi-uniformity dependence for the quoted projector stability.
- §2.2 tensorizes the polynomial spline spaces and states tensor local stability with degree and knot-ratio constants.
- §2.3 defines positive weights, the rational denominator and basis, and the weighted projector `J(W*v)/W`. Its assertion that stability/approximation extends to NURBS refers to other sources for details; it is not a replacement local proof of every energy-rate claim.
- §2.4 defines the NURBS map from rational basis and control points, including rational coordinate numerators.
- §§3.1.1–3.1.2 explicitly assume a bi-Lipschitz homeomorphism and additional elementwise inverse regularity; they give the parameter-box mesh and map/inverse derivative bounds, then matching full interfaces and associated trace/control/weight conditions P1/P2. Positive weights are not presented as a proof of injectivity.
- §§3.2.1–3.2.2 state the elliptic model, conforming Galerkin/Céa context, h/p-refined analysis spaces, homogeneous-boundary basis removal and matching multipatch trace construction. Remark 2 says the main exposition uses nonrational analysis spaces to avoid weight notation and refers the rational analysis to earlier work. This limitation remains visible in the source disposition.

This source reading checks the recovered context and work identity only. It is not a new review of current canonical mathematics, a proof acceptance, or a resolution of the separate boundary-projector/geometry supplier gaps.

## Original URL and recovery evidence

Current batch-69 source history was read without modification and copied as observed at 2026-10-17T14:52:56.759494+00:00 to `source-liveness/native69-coverage-observed.json` (33,143 bytes; SHA-256 `e1182e7630f08e6434562a4ee496aaa972f28711570576a63d20af96a38eac62`). This is an observation during live writing, not a frozen native completion or accepted coverage. Its separate observation record is `source-liveness/native69-coverage-observation.json`.

That history records the original Springer PDF failure plus five retries at 2026-10-17T13:45:14.404Z–13:45:20.861Z, later Springer article failure plus five retries at 14:48:42.509Z–14:48:50.045Z, prior alternative search attempts, and the previously obtained local publisher PDF. These rows remain untouched. They establish particular retrieval failures, not permanent source death.

Fresh source-research requests now returned the following bodies, which are saved with their exact per-request JSON records:

| URL | Completed UTC | HTTP | Bytes / actual body |
|---|---|---:|---|
| https://link.springer.com/article/10.1007/s11831-022-09752-5 | 2026-10-17T14:51:49.705583+00:00 | 200 | 3,038; `text/html`, title **Client Challenge**, not the article |
| https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf | 2026-10-17T14:51:49.776581+00:00 | 200 | 3,038; same challenge HTML, no PDF signature |
| https://link.springer.com/content/pdf/10.1007%2Fs11831-022-09752-5.pdf | 2026-10-17T14:52:20.563040+00:00 | 200 | 3,038; same challenge HTML |
| https://infoscience.epfl.ch/record/287076/files/adaptive_iga.pdf | 2026-10-17T14:51:54.558219+00:00 | 405 | 2,117; HTML, not a PDF |

The three Springer responses have SHA-256 `32ed63159c77e21ee19ca1b9aa3213ccf0218eb59539560b132a8e68ef0e18ea`. The EPFL response has SHA-256 `ca6ef809252234c284f36cb6e9bce15bd0897d3697d4f58aa83007ab343862db`. The actual responses are in `source-liveness/springer-original.html`, `springer-nature-pdf.html`, `springer-alt.html`, and `epfl.html`; each matching `.fetch.json` records start/completion time, requested/final URL, status, content type, byte count, body hash and redirects. The successful arXiv request resolves this session's full-body access issue without declaring those other URLs permanently dead.

## Earlier publisher cache and metadata discrepancy

The previously fetched `/tmp/isogeometric-foundations-2022.pdf` exists and matches the native history's **12,158,836 bytes** and SHA-256 **`470e6594a6b97c3c65e5e09b1a8942c9e1c2d40123bccedae9f5bdbbb6d7ef62`**. Its PDF metadata identifies Springer and the exact DOI. It parses as **77 pages**, printed journal pages **4479–4555**, ending in bibliography reference 215 and the publisher note. The native source row's `93-page` / `pages: 93` statements do not describe this exact hash-bound cache. This is a factual extent discrepancy, not evidence that the PDF lacks its final body.

At 2026-10-17T14:52:43.933764+00:00 I archived an identical durable research copy at `source-liveness/springer-prior-cache.pdf`; the observation is recorded in `springer-prior-cache.observation.json`. **This copy/inspection is not a new publisher fetch, and no original retrieval time is reconstructed.** The first page and last-page ending were inspected. I additionally read publisher PDF pages **8–15** (printed 4486–4493), containing the relevant quasi-interpolation, rational basis/geometry, map assumptions and Galerkin/multipatch context. These portions agree in substance with the recovered arXiv sections listed above; no claim of byte identity or a full article-wide version comparison is made.

## Concrete post-drain repair suggestion for root

After authentic native69 drain, re-read the actual current source record and make a bounded source-location repair:

1. Retain the same work, authors, journal title, DOI, supported items and substantive source dispositions. Use `https://arxiv.org/pdf/2107.02023v2` as its working full-text retrieval URL; label it **author manuscript v2, 21 September 2022, 82 pages**, with the journal DOI as publication identity. The official Springer article URL can remain a secondary bibliographic location.
2. Append this recovery's exact successful URL/request/body evidence and scoped reading extent. Preserve the old Springer PDF/article failure arrays, search history and earlier publisher-cache facts. Do not backdate a successful fetch or turn a 200 challenge response into `fetch_verified: true`. Any native fetch stamp must come from the actual subsequent source-fetch tool on the new URL.
3. Preserve prior author reading claims as historical claims; distinguish this reviewer's actual pp.11–19 arXiv / pp.8–15 publisher inspection. Correct the factual page count of the exact cached publisher PDF to 77 in current metadata while retaining the original 93-page observation in history. Do not replace the 77-page publisher metadata with the 82-page preprint count.
4. Remove or qualify the currently contradictory general sentence 'No source retrieval failed in this batch' when reconciling the record: its own archived failures and this addendum establish recoveries. Do not drop the covered source, supported items, or the actual full-body cache. Limit any source URL mirrors in item citations to this same-work recovery and retain the original source history.

No canonical repair or fresh native source stamp was made here. This addendum does not consume the prospective second/final geometry review cycle and does not authorize advancement or gates.

## Later first-cycle DNB addendum — retain native author's current choice

**This later observation supersedes the earlier suggestion to substitute arXiv.** The live author has selected `https://d-nb.info/1278950273/34`, preserved the Springer failures, corrected the publisher-cache extent to 77 pages, and recorded complete native DNB retrieval evidence. Prefer retaining this already selected library-hosted version of record after drain; arXiv v2 remains an alternative, not a required substitution. No canonical metadata was changed by this reviewer.

The actual current native coverage was observed and archived again at **2026-10-17T15:02:11.261280+00:00** as `source-liveness/native69-coverage-dnb-observed.json` (34,515 bytes; SHA-256 `5b19f222a7bafe7fa467f1dd373f720dc6e18acbb7b5ffd5d447f5a9aaf78030`), with its observation JSON beside it. It names the DNB URL, a complete curl retrieval at 14:51:02.244Z, intermediate socket failures at 14:53:11.172Z and 14:54:05.464Z, and a `full-text body fetched` entry at **14:54:12.160Z**. It also records the native source-fetch stamp and exact body identity below. Those are the author's recorded observations, not this reviewer's freshly generated stamp or a frozen completion; root can authenticate and retain the genuine current native evidence after drain.

### Complete DNB body actually inspected

The native complete cache `/tmp/isogeometric-foundations-dnb.pdf` exists. It was copied without alteration to **`source-liveness/dnb-native-prior-cache.pdf`**; copying does not reconstruct its original fetch time.

| Field | Actual complete cached DNB body |
|---|---|
| URL in native evidence | https://d-nb.info/1278950273/34 |
| Bytes | **12,378,027** |
| SHA-256 | **`3211742664d7720a3420b1f992193397c454c815f26389feb9d37295d30f7513`** |
| Parsed pages | **77**, journal pages **4479–4555** |
| PDF metadata title | *Mathematical Foundations of Adaptive Isogeometric Analysis* |
| PDF metadata subject | *Archives of Computational Methods in Engineering*, exact DOI `https://doi.org/10.1007/s11831-022-09752-5` |
| Creator / producer | Springer / Acrobat Distiller 10.1.8 (Windows) |
| First-page identity | Same five authors, title, DOI, journal volume/pages and publication date as the earlier publisher cache |

This DNB file is **not byte-identical** to the earlier 12,158,836-byte Springer cache with SHA-256 `470e6594a6b97c3c65e5e09b1a8942c9e1c2d40123bccedae9f5bdbbb6d7ef62`. Their metadata dates also differ. The direct parsed-page comparison found that the text-extraction position of each printed journal page-number line differs. A precise mechanical comparison at **2026-10-17T15:01:37.896652+00:00** found all **77/77** pages have identical lists of extracted text lines after **only** trimming each line, removing blank lines, and removing the standalone line equal to that page's printed journal number (`4479 + PDF index`). The full pagewise outcomes, normalization and both body hashes are saved in **`source-liveness/dnb-publisher-text-comparison.json`**.

This is extracted-text equivalence under the stated normalization. It is not PDF-byte identity, a visual/figure comparison, or a fresh reading of all 77 pages. In particular the relevant publisher passages on PDF pages **8–15**, which I actually read earlier, are text-equivalent on the DNB copy under precisely that normalization. No uninspected mathematical proof or different article version is silently claimed as read.

### Fresh DNB network attempts: failures retained separately

Two bounded fresh attempts were made; neither completed the body, so neither grants a successful current full-body liveness assertion by this reviewer:

1. `requests.get` started **2026-10-17T15:00:36.819235+00:00**, finished **15:01:20.010757+00:00**, and failed with `IncompleteRead(646888 bytes read, 11731139 more expected)`. Exact record: **`source-liveness/dnb.fetch.json`**. No complete body was received or hashed as successful by that attempt.
2. One bounded curl request started **2026-10-17T15:01:56.756524+00:00**, finished **15:02:08.588916+00:00**, and returned **exit 56, `Recv failure: Connection reset by peer`** after **138,981 bytes**. Response metadata was HTTP **200**, `application/pdf;charset=base64`, final URL unchanged and no redirects. The incomplete response bytes have SHA-256 **`be93c36043ec80fe3b7e5f740f75c7b3a6cdf8539df766d3558d6a7d46bddad2`** and are retained as **`source-liveness/dnb-curl.pdf`**; despite the extension/signature this is an **incomplete transfer**, not the 77-page complete cache. Exact command outcome and response metadata: **`source-liveness/dnb-curl.fetch.json`**.

These failures do not imply permanent DNB deadness and do not invalidate a separately authenticated successful native retrieval. The complete DNB cache, native source history and successful native source-fetch evidence remain separate from these new partial-transfer observations. No retry loop, metadata rewriting, new stamp, gate, or canonical geometry review was performed.

**Current disposition:** retain the native DNB source URL and full version-of-record body when root authenticates its existing complete-body native evidence after writer drain; retain this addendum's exact failures and the arXiv v2 recovery as alternatives/history. There is no reason here to perform a gratuitous arXiv substitution or invalidate the native author's source choice. The second/final mathematical geometry cycle remains unspent and awaits root's explicit post-drain trigger.
