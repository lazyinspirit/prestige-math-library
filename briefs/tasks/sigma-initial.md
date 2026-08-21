# Initial rendering adjudication

Read `research/<run>-render-initial.json`, then inspect every attached image.
Cross-check source files as needed. Set `capture_manifest` to
`research/<run>-render-initial.json`, `phase` to `initial`, and compute the
manifest SHA-256 from its current bytes. A rejection is expected to route exact
findings to Tau; it does not authorize removing content.
