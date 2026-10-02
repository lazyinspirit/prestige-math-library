# HLS lower-endpoint renderer repair

Run: `frontier-37-owner-30`; recorded UTC: 2026-10-01T17:21:33.254433+00:00

Read CLAUDE.md and README.md fully. Root confirmed native Step-5a writers drained; process inspection found no remaining dispatch for this run. Exact authority was the renderer failure in the lower-endpoint counterexample from the 17:13 gate snapshot. No wider mathematical review or gate was run.

The root cause was the F5 phrase `for $c\ge0.`: its math span lacked the closing dollar. Changed it to `for $c\ge0$.` by inserting precisely one character. This restores the intended span, leaving its supplier wikilinks outside math and ending the downstream delimiter cascade. All mathematical claims, all displayed/inline formula content, the complete counterexample proof, dependencies and sources are preserved. Statement is unchanged, so no downstream consumer review is opened.

The prior argument proves the tail divergence by dyadic radial lower bounds, so the format edit introduces no inference or supplier change. No contract derivation or citation changed. The existing risk_review and all boundary rows were preserved; no boundary review hash changes are necessary.

Local verification on the exact corrected file: normative precheck passed 1/1; renderer YAML/real KaTeX check passed; strict owning batch-12 contract check passed 1/1 with zero errors and warnings. These are mechanical checks, not independent mathematical adjudication.

Source SHA-256 before: `98acf06e7d1183a25e12fc0e5db74f0d773e871c17aaaff5923c685f2e8e776d`.

Source SHA-256 after: `f9f35e97365eca62a312f613a0bae602f77dcc2f154caa2134a2b08d0d3c195b`.

Current composite Step-5 subject SHA-256: `b405d269870eb916f410105b69c860736d9a178f82b473ef9e231115353a0259` (canonical hash of current item, owning contract entry and manifest metadata, following step5-scope.mjs).

The existing alpha-c decision was already amended_repair; this source edit makes its hash stale. `research/frontier-37-owner-30-hls-endpoint-render-owner-sidecar.json` supplies the current carrier binding, a scoped proposed update to that existing decision and a new fixed-format-defect ledger row for root integration. Shared alpha-c decisions, common defect ledger, risk_review, boundary review, gates and certifications were not modified. Root owns central evidence refresh and gate retry.
