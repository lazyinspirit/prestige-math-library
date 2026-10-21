# Step 3a reader report — batch 84

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-84`)  
Scope: batch `84`

## Opened inventory

### Assigned pages

- `library/knot-theory/skein-modules-for-links-in-three-manifolds.md` (A page)
- `library/knot-theory/skein-modules-for-links-in-three-manifolds-examples.md` (B page)
- `library/knot-theory/kauffman-bracket-state-sum-and-jones-polynomial.md` (the A page's required page dependency)

### Assigned items, in dependency order

- `lem-framed-link-diagram-calculus`
- `def-kauffman-bracket-skein-module-of-a-three-manifold`
- `lem-kauffman-bracket-module-framing-twist-factor`
- `lem-general-3manifold-skein-quotient-isotopy-and-gluing`
- `lem-kauffman-bracket-evaluation-is-invariant-for-framed-links-in-s-three`
- `lem-annular-kauffman-bracket-state-expansion`
- `thm-skein-module-of-s-three-is-rank-one`
- `thm-skein-module-of-solid-torus-has-core-multicurve-basis`
- `lem-skein-module-isomorphism-respects-framings-and-boundary`
- `cex-knot-kt-31-boundary-case`
- `ex-knot-kt-31-worked-cases`

### Dependencies opened

I read the declared direct suppliers used by these items: `def-countable-choice`, `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `def-oriented-reidemeister-moves`, `def-planar-isotopy-of-link-diagrams`, `thm-oriented-reidemeister-equivalence-theorem`, `lem-every-oriented-link-admits-a-regular-projection`, `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position`, `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times`, `thm-parametric-transversality`, `thm-transverse-preimage-theorem`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-temperley-lieb-diagram-category`, `thm-temperley-lieb-diagram-category-laws`, `lem-temperley-lieb-generators-satisfy-local-relations`, `lem-two-disjoint-circles-in-s-two-cobound-an-annulus`, and `lem-kauffman-bracket-r2-r3-identities`. The last two Kauffman bracket items are current draft suppliers from batch 82. I also opened `thm-morse-sard-for-smooth-manifolds` and `def-smooth-manifold` for the transversality/null-set interface used by the diagram argument.

## Mathematical review and diagram review

The module definition's chart, endpoint pairings, loop value and framed-link quotient agree with the Kauffman bracket convention fixed by its supplier. The positive and negative twist calculations give `-A^3` and `-A^{-3}` with the stated smoothing convention. The diffeomorphism and collar-action proof transports the full framing and uses closed links only.

The S³ evaluation descends through both defining skein relations: the finite state partition gives the crossing relation, the trivial-circle factor is `δ`, and the two curl factors are canceled by the opposite framing-correction changes. The S³ rank-one proof uses crossing resolution for spanning and the normalized evaluation with empty value one for independence. The annular state expansion assigns `δ` to contractible circles and `z` to essential circles; the stated full AC assumption covers the annular-circle classification, while ACω supplies the diagram/general-position branch. The solid-torus proof gives inverse maps `J` and `Ψ`, so the core multicurves are a free basis. The framing-isomorphism lemma's nontriviality calculations follow from the Laurent-polynomial domain and the two free-basis results. The counterexample and worked example correctly apply those results.

I checked all TikZ diagrams in the assigned items and the directly used Kauffman/Temperley–Lieb suppliers. The skein crossing and its A/B smoothings match the verbal chart; the annular picture places one essential core and one contractible curve in the annulus; the one- and two-core picture shows parallel blackboard-framed curves. The `e_1` cup-cap diagram has the stated cap, cup and through strand. I found no incorrect or missing diagram.

The cited source passages I checked were Przytycki, *Fundamentals of Kauffman Bracket Skein Modules*, §2 Definition 2.1, Proposition 2.2(i), Theorem 2.3(a), and §3 Lemmas 3.3 and 3.5, Proposition 3.6, and Theorem 3.1 with its basis argument ([PDF](https://arxiv.org/pdf/math/9809113)); Queffelec, *Reidemeister’s theorem using transversality*, Theorem 1 and the projection/general-position and cusp/tangency/triple-event passages in §§2–3.6 ([PDF](https://arxiv.org/pdf/2406.18203v1)); Le, *The Colored Jones Polynomial and the AJ Conjecture*, §6.1 and §6.2 Proposition 6.2 and Examples 6.4–6.5, PDF pp. 29–30 ([PDF](https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf)); and Pohorence, *3-manifold Invariants and TQFTs*, §3.1 Definition 3.1.1 and the S³/solid-torus examples, PDF pp. 11–12 ([PDF](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)). The Queffelec argument concerns ordinary links; the local assigned proof supplies the framing and annular confinement. Pohorence's definition states the closed-manifold case; Przytycki and Le state the broader oriented-manifold setting used here, and the assigned quotient proof is local.

## Repairs

- In `lem-framed-link-diagram-calculus`, corrected the second `3.1` citation in proof step 5.1 to `3.2`. Step 3.2 proves finiteness of the transverse double-pair set and the regular-annular-diagram conclusion used to select the endpoint diagrams. Updated the batch-84 proof-contract derivation for step 5.1 to match. No edited item contained a stale `verification.judge` record.
- Corrected the source title in the `sources.references` entries in eight A items and the B example `ex-knot-kt-31-worked-cases`: the linked Lê PDF's title page names *The Colored Jones Polynomial and the AJ Conjecture* by Thang T. Q. Lê, rather than *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*. Corrected the visible reference labels where that source is listed.
- Added blank paragraphs between references in `lem-annular-kauffman-bracket-state-expansion`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`, `lem-skein-module-isomorphism-respects-framings-and-boundary`, `cex-knot-kt-31-boundary-case`, and `ex-knot-kt-31-worked-cases`, as required by the statement/reference layout rule.

## Defects not edited

The current `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-84.pages.json`, `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-84.coverage.json`, and batch-84 notes still label the Lê PDF URL as *A Crash Course in Quantum Invariants of Knots and 3-Manifolds* (2016). The PDF title page and the linked sections confirm the corrected title above. These run evidence sidecars are outside the authorized item/A-page prose write scope, so I left them unchanged. No unedited mathematical defect remains in an assigned item, assigned page, or reviewed dependency.

## Page verdicts

- `skein-modules-for-links-in-three-manifolds`: pass. Its A-page inventory matches the nine assigned A items; the required Kauffman bracket page exists and was opened. The page is draft, has `page_layout: compact-v1`, and has no Markdown body or summary.
- `skein-modules-for-links-in-three-manifolds-examples`: pass. Its B-page inventory matches the two assigned example/counterexample items. The page is draft, has `page_layout: compact-v1`, and has no Markdown body or summary. No B-page prose was edited.

## Validation and blocker

- Reflow reported all eleven changed item files unchanged.
- Precheck passed for all ten proof-bearing items; the definition had zero proof checks, as expected.
- Strict proof-contract validation passed: 11/11 items, 0 errors and 0 warnings.
- One batched proof-layout run passed: 11 items, 32 steps, 0 defects.
- The live run remained active at the final status check. Step 3a-read was 78/109, with batch 84 still pending in the engine snapshot. The run-wide Step 3a-split blocker remains batch 71 (`split-71 failed 3x`); it is outside this assignment. No batch-84-specific blocker was found.

## Coverage limits

This review covered both assigned pages, all eleven assigned items, the declared direct suppliers used by their arguments, the additional Sard/manifold context named above, and the cited passages listed above. It was not a recursive audit of every upstream proof in the library or of other run batches. The remaining sidecar title mismatch is recorded above and has no routed item/page subject in the reader findings schema.
