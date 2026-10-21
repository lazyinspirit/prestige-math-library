# Step 3a reader report — batch 69

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Verdict: both assigned pages pass after the listed repairs; no unresolved batch-69 mathematical blocker.

## Opened inventory

Assigned pages:

- `three-manifold-surgery-presentations-and-kirby-moves` — `library/knot-theory/three-manifold-surgery-presentations-and-kirby-moves.md`
- `three-manifold-surgery-presentations-and-kirby-moves-examples` — `library/knot-theory/three-manifold-surgery-presentations-and-kirby-moves-examples.md`

Assigned items (all 12 opened):

- `def-heegaard-splitting-of-closed-oriented-three-manifold`
- `def-dehn-twist-on-oriented-surface`
- `thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting`
- `lem-dehn-twist-of-heegaard-gluing-is-integral-surgery`
- `def-integral-framed-link-surgery-diagram`
- `thm-lickorish-wallace-framed-link-presentation`
- `def-kirby-moves-on-integral-framed-links`
- `lem-kirby-moves-preserve-surgery-manifold`
- `lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three`
- `thm-kirby-moves-classify-framed-link-presentations`
- `ex-knot-kt-14-worked-cases`
- `cex-knot-kt-14-boundary-case`

Page prerequisites opened: `knot-exteriors-and-peripheral-systems`, `dehn-surgery-on-knots-and-homology`, and `modular-categories-verlinde-and-tqft`; the B page's A-page prerequisite is the first assigned page above.

Item suppliers opened to check the assigned claims include `def-oriented-smooth-manifold-and-oriented-chart`, `def-smooth-embedding`, `def-axiom-of-choice`, `def-countable-choice`, `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations` (Statement), `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `def-tubular-neighbourhood-of-an-embedded-submanifold`, `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` (Statement), `def-p-surgery-on-a-smooth-m-manifold`, `def-handle-slide-of-one-k-handle-over-another`, `def-surgery-trace-cobordism`, `lem-handle-slides-preserve-the-relative-diffeomorphism-type`, `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold`, `lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations`, `lem-relative-three-bordism-surgery-presentation`, `def-weighted-lagrangian-ribbon-bordism`, `def-oriented-smooth-cobordism`, `lem-knot-normal-circle-bundle-trivialization`, `lem-knot-tubular-exterior-and-boundary`, `lem-knot-exterior-has-peripheral-torus`, `thm-mayer-vietoris-sequence-in-singular-homology` (Statement), `cor-homology-of-spheres` (Statement), `cor-homotopic-maps-induce-the-same-map-on-singular-homology` (Statement), `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `def-oriented-slope-and-knot-dehn-filling`, and `def-lens-space-surgery-orientation-convention`. I also consulted `def-topological-linking-number-by-meridian-coordinate`, `def-framed-knot-self-linking-and-seifert-framing`, and `lem-framed-knot-push-off-self-linking-well-defined` while making the zero-meridian framing calculation explicit; they were not added as new dependency edges.

For the relative-completeness dependency, I also checked the current statement interfaces for the boundary-marked five-bordism, fixed-height relative Morse normalization, equal-index handle attachment, collar-glued handle models, finite-event Morse paths, relative descending paths, parametric index grouping, based handle movies, mixed-handle conversion, and decorated-graph lifting suppliers. The batch-69 proof contracts and cross-batch interface record were read as evidence and compared with current source text; neither was treated as a verdict.

## Review and repairs

- `def-integral-framed-link-surgery-diagram`: the definition previously permitted chosen component tubes to overlap, while its surgery result removes all their interiors and glues along each boundary torus. I made pairwise disjointness an explicit condition. All direct consumers in this batch were checked: the move definition, surgery-preservation lemma, zero-meridian lemma, Lickorish–Wallace theorem, Kirby classification theorem, example, and counterexample are compatible with this condition. The active-source search found no other consumers.
- `thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting`: the title omitted the statement's connectedness, nonemptiness, and AC hypotheses. I changed it to “Heegaard splitting existence for nonempty closed connected oriented smooth three-manifolds under AC.” The current proof's primal/dual graph construction and schematic diagram match the statement.
- `lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three`: I made the meridian's orientation explicit as the positive orientation determined by (K) and (S^3). The proof previously said to “orient” the Hopf components to get linking (+1), which could be read as an unauthorized component reorientation. It now derives (\operatorname{lk}(K,U)=+1) from the positive-meridian convention and states that orientations are transported by the moves. I also defined the linking number used in the framing calculation by the positive-meridian coefficient, connected an integer framing to the ( [\lambda]+a[\mu] ) parallel, and supplied the symmetry argument used for the two cross terms. The proof contract's F1 quotation and 1.1/5.1 derivations were updated.
- `thm-kirby-moves-classify-framed-link-presentations`: after checking the direct consumer of the positive-meridian clarification, I made F4 state that the O3 pair uses the positively oriented meridian and refreshed its proof-contract quotation. Its statement and the rest of the proof remain valid for that conventional O3 move.

No other defect was confirmed in the assigned item statements, definitions, computations, witnesses, proofs, or diagrams. The four assigned TikZ diagrams (Heegaard decomposition, handle slide, worked surgery cases, and empty/(+1) counterexample) agree with their text. The slope and peripheral-torus diagrams in the required page dependencies also match their stated conventions.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts` and `node tools/tsx-run.mjs tools/precheck.mts` were run for each changed item. All reflows reported unchanged formatting; all prechecks passed (the definition had zero proof rows, as expected).
- One final combined `node tools/proof-layout.mjs` run covered the four changed item paths: 4 items, 18 proof steps, 0 defects.
- No stale `verification.judge` record was present on a changed item.

## Page verdicts

- `three-manifold-surgery-presentations-and-kirby-moves` (A): pass. Its frontmatter-only body, item inventory, draft status, compact layout, and three `requires` entries match the manifest.
- `three-manifold-surgery-presentations-and-kirby-moves-examples` (B): pass. Its frontmatter-only body, example inventory, draft status, compact layout, and A-page requirement match the manifest.

## Uneditable findings

Published dependencies in the assigned proof closure still contain hyperlinks inside complete Definition/Statement sections. They are reported in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-69.json`; published content was not edited. The finding locations and assigned consumers are exact there.

## Blocker and coverage limit

There was no operational blocker to completing this reader review; the 13 published-dependency formatting findings remain uneditable here and are routed in the findings file. The live run status showed an unrelated three-times-failed `3a-split` unit for batch 50; batch 69 was not among the missing units listed at that status check, and no prior reader-69 report existed at the required output path. I did not infer acceptance from that status.

I checked the current statements and local arguments needed for the assigned claims, but did not recursively re-prove every transitive published foundation behind the relative-cobordism suppliers. The browser could not open Calegari's cited PDF; the Heegaard result was checked directly from the current proof and its triangulation supplier. Saveliev, *Lectures on the Topology of 3-Manifolds*, Lecture 2 §2.2, Lemma 2.2 and proof (printed pp. 33–34), confirms that twisting a Heegaard gluing is realized by surgery with meridian slope (m\pm\ell). The same section's Theorem 2.1 gives the integral surgery-presentation statement (printed pp. 33–34). Roberts, *Kirby Calculus in Manifolds with Boundary*, Theorem 1 and proof, pp. 1–4, states O1/O2/O3 relative completeness and describes O3; it states the (S^3) O3 reduction but the finite reduction used here is supplied by the current local zero-meridian proof. Saveliev, Lecture 3 §3.2, Theorem 3.1 and K1/K2 definitions (printed pp. 45–46), supports the move conventions and easy direction.
