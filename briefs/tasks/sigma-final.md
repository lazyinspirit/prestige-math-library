# Final rendering adjudication

Read `research/<run>-render-final.json`, `research/<run>-sigma-initial.json`, and
`research/<run>-tau.json`, then inspect every attached final image independently.
Set `capture_manifest` to `research/<run>-render-final.json`, `phase` to `final`,
and compute the current manifest SHA-256. Approve only if every page is free of
the three rendering/parsing defect classes. Any rejection blocks publication
readiness with all mathematical content preserved.
