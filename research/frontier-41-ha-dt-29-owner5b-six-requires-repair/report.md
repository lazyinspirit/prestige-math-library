# Six exact Requires closure repairs

Root explicitly delegated these six page/plan/batch-manifest Requires additions to `/root/step5b_completion_g2`. Group1 confirmed batches1/2 idle, group3 confirmed batches7/10 idle, and group6 confirmed batch19 idle before writes. Native writers were drained. Source items and proofs were not edited.

The additions are:

- Batch1 `handle-decompositions-duality-and-rearrangement` → `hurewicz-whitehead-freudenthal-and-cw-approximation`, for cellular approximation in the relative handle/CW lemma.
- Batch2 `intersection-pairings-self-intersection-and-euler-classes` → `chern-weil-theory-and-characteristic-forms`, for the existing smooth-manifold CW-homotopy-type supplier in four Thom/Euler/self-intersection consumers.
- Batch3 `handle-cancellation-slides-and-elementary-moves` → `hurewicz-whitehead-freudenthal-and-cw-approximation`, for relative cellular/singular comparison in the handle-slide remark.
- Batch7 `vector-field-index-euler-characteristic-and-poincare-hopf` → `chern-weil-theory-and-characteristic-forms`, for smooth-manifold CW homotopy type in Euler additivity and tangent Euler-number consumers.
- Batch10 `the-hopf-degree-theorem` → `oriented-and-mod-two-intersection-numbers`, for compact-one-manifold boundary parity in three degree/bordism consumers.
- Batch19 `isotopy-extension-and-embedding-theory-beyond-whitney` → `regular-homotopy-and-sphere-eversion`, for the second homotopy group of SO(3) in the primary-obstruction limitation remark.

All suppliers are earlier already built pages. Exact item mappings and page orders are recorded in `supplier-mappings-and-checks.json`. No new item or build scope was introduced. Each file was freshly read immediately before its write, and the exact previous bytes were archived under `before/`. Only the six JSON Requires fields were changed; all other plan and batch fields compare equal. Page bodies compare byte-for-byte equal. Pages7/19 previously had no Requires frontmatter field, so their existing manifest/plan lists plus the one added supplier were mirrored there. Other page frontmatter was preserved.

Supported `splice-plan --batch N --update` ran once for each of 1,2,3,7,10,19 after mirroring; all six returned 0 and reported both pages already correct with no item splice. Their previous receipts and refusal artifact were archived before replacement. No certification, engine gate, retry or state transition was invoked.

`validate-plan.mjs research/plan-spec.json --run frontier-41-ha-dt-29` returned 0: all six undeclared-prerequisite errors are gone. Current plan/page/manifest Requires consistency, backward order and exact-only field changes pass. Existing redundant-prerequisite warnings remain, including the explicitly authorized direct batch3/7 additions whose suppliers are now also reachable through batch1/2. No unrelated Requires cleanup was performed. Check logs and provenance record actual local checks only, with no gate-passing claim.
