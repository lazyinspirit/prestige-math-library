# Step 5b Heine–Cantor title repair

The published theorem `thm-heine-cantor-r` still titled its proof “from
sequential compactness”, while its current proof uses an open cover and a finite
subcover directly. The theorem's Statement and every proof step were unchanged.
The owner claimed its pre-edit guard
`dd32d169c3a10e2ad9675b0ca7bced772c96e6f3a15beaf9322628356d96cca8`
before editing, then removed only the false proof-method phrase from the title.
The current guard is
`379e357c7b4b8140804147976dcc734b36851642645d85a2f80993deaeb14474`.
The old `research/plan-spec.json` entry also still described a sequential,
choice-using contradiction proof; its title, strategy and dependencies now
match the current direct finite-cover carrier. The home page and theorem
Statement already described that direct proof, so they need no edit.

`tools/precheck.mts` passes the current theorem and `tools/rendercheck.mjs`
passes its render. The changed title does not change the uniform-continuity
claim or its hypotheses. Direct consumer uses are being reconciled to the
current guard in the high-fan-out evidence and the two separately owned
citation-lane records; their final current-hash dispositions remain a closure
prerequisite. No renewed independent judge is claimed.
