# Batch 80 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `satellite-operators-and-knot-concordance-filtrations`  
Role: beta, batch 80. This is an authoring handoff, not an independent review or approval.

## Controlling design, inventory, and conflicts

- The controlling design is the complete KT-27 section of `research/plan-knot-theory-track.md` (current lines 809–837). Its satellite-operator scope, CDR category branches, Cha–Kim hypotheses, proof route, caveats, and terminal open problem govern because the corresponding A/B records in `research/plan-spec.json` (orders 3156–3157) have empty item arrays. The task’s line anchors 802/804 are stale relative to the current file. The prerequisite-map contracts in `research/knot-theory-planning-2026-10-18/prerequisite-map.md` refine dependencies but do not replace the track plan.
- The final inventory is 28 A items and 2 B items, within the 100-item page cap. The A and B page files are YAML frontmatter only with empty Markdown bodies. Page prerequisites remain the six assigned interfaces: twisted Alexander polynomials/Reidemeister torsion, satellite knots/JSJ tori, smooth and topological concordance, algebraic concordance/metabolic forms, Fox–Milnor/slice obstructions, and Freedman/topological sliceness; B requires A.
- The final inventory includes local prerequisites required by actual item bodies: PTFA/Ore terminology, zero surgery, CDR concordance categories and group laws, satellite map well-definedness, an annulus-to-zero-surgery cobordism, connected-sum substitution, strong-winding stability, signature gluing, and the integral half-solutions/L²-signature interface. These are explicit A items; no item was silently omitted to fit the page.
- The detailed prerequisite map contains broad proposed item edges through JSJ uniqueness, algebraic sliceness/Fox–Milnor, Alexander-polynomial-one sliceness, and the published concordance-group theorem. Complete source proofs show these are not logical premises for the corresponding CDR/Cha–Kim arguments. They remain page-level context where declared, but were removed from actual item `deps` when they were not proof inputs. The Alexander-polynomial-one carrier from batch 78 is now present; its proof explicitly remains incomplete and it is not the relative Freedman interface required by CDR.
- The dispatch reports batch dependency level 9 and scheduling SHA-256 `c5b5cd0dc52074c23c124fa5944e4f7346895bb4ac4d894c9bc933c5a80586cc`. The shared generated dependency-levels file records batch 80 as level 8 with input SHA-256 `a027c237a267f58a993feefbeb574159b4021b36f4b477b433b88b801b2c6fdc`. This stale/conflicting shared record was not edited. Recomputed levels of this pair’s current item graph reach 9, agreeing with the dispatch.

## Assigned item levels

Levels below are computed from current within-run supplier edges; item evidence and source locators are in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-80.source-evidence.json`.

- Level 0: `def-poly-torsion-free-abelian-group`.
- Level 1: `thm-ptfa-group-rings-are-ore-domains`.
- Level 2: `def-zero-surgery-on-a-knot`.
- Level 3: `def-cdr-satellite-concordance-categories`.
- Level 4: `def-satellite-induced-concordance-operator`, `lem-cdr-smooth-s4-complement-is-standard-ball`, `lem-concordance-annulus-induces-zero-surgery-cobordism`, `thm-cdr-concordance-categories-form-abelian-groups`.
- Level 5: `def-integral-half-solutions-strebel-and-l2-signatures`, `lem-satellite-connected-sum-substitution`, `lem-satellite-operator-preserves-concordance`, `lem-strong-winding-stable-under-companion-insertion`, `ex-knot-kt-27-worked-cases`, `cex-knot-kt-27-boundary-case`.
- Level 6: `def-blanchfield-pairing-and-higher-order-rho-invariant`, `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-signature-additivity-under-gluing`, `op-cha-kim-smooth-graded-quotients-for-topologically-slice-images`, `thm-amenable-von-neumann-l2-flatness`, `thm-cheeger-gromov-uniform-rho-bound`, `thm-l2-signature-theorem-for-closed-four-manifolds`.
- Level 7: `lem-amenable-D-R-l2-dimension-estimate`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`, `lem-higher-order-blanchfield-pairings-are-nonsingular`, `lem-l2-rho-invariant-bordism-independence`.
- Level 8: `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `thm-cochran-davis-ray-strong-winding-injectivity`.
- Level 9: `thm-cha-kim-winding-zero-iterates-infinite-rank`.

## Source retrieval and reading evidence

`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-80.coverage.json` records the URLs, exact source locators, supported item IDs, and each harvested result’s included/limited disposition. Its 12 source records were fetch-verified; no retrieval failures, retries, or drops were recorded. The final commands returned:

- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-80.coverage.json --stamp` — 12/12 fetch-verified, 0 newly stamped; 12/12 resolved, 0 documented drops.
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-80.coverage.json` — 12/12 fetch-verified; 12/12 resolved, 0 documented drops.

The complete source readings that support the authoring include:

- Cochran–Davis–Ray, `https://arxiv.org/pdf/1205.5058v3`, §§1–5 and full Theorem 5.1 proof; Definitions 1.1/3.1, Propositions 2.3/2.5/3.2, Theorems 4.1/4.3. In particular, nonzero winding gives `C^{1/n}` injectivity; strong winding ±1 gives `C_ex`/`C_top` injectivity; the smooth `C_sm` conclusion is conditional on uniqueness of the smooth structure on `S⁴`. Theorem 5.1 does not assume the original `P(U)` is slice; the proof uses an auxiliary pattern with ribbon closure. Proposition 3.2 supplies only weak injectivity `P(K)=P(U) ⇒ K=U`.
- Cochran–Franklin–Hedden–Horn, `https://arxiv.org/pdf/1102.5730`, Theorem 2.1 and full proof, including the localized Mayer–Vietoris and meridian calculation. Its closure-slice hypothesis is stated in the relevant local module.
- Cha–Kim, `https://arxiv.org/pdf/2402.04629v2`, §§1–6 and Appendix A. Theorems A/B require winding zero and nonzero classical Blanchfield self-pairing; pairwise-coprime Alexander polynomials are Theorem C hypotheses only. Their cited L², rho-bound, Novikov-additivity, and higher-order Blanchfield inputs remain explicit local obligations rather than assumed proofs.
- Cha, `https://arxiv.org/pdf/1010.1058`, Theorem 2.2, Theorem 3.2 and complete proof. Theorem 2.2’s chain-complex and coefficient-acyclicity hypotheses and Theorem 3.2’s `(n+1/2)`-solution, `D(R)` amenability, derived-quotient, extension, and infinite-order meridian conditions are preserved in the local statements.
- Cha–Orr, `https://arxiv.org/pdf/0910.3700`, §§6.1–6.2, Theorems 6.3/6.6 and complete arguments, plus Lemmas 6.4–6.5/6.8. Lück’s dimension-flatness theorem and the needed von Neumann-dimension properties are cited inputs, not locally proved.
- Cochran–Orr–Teichner, `https://arxiv.org/pdf/math/9908117`, §§2–4, Theorems 2.13 and 4.6 proof. Proposition 2.5 cites Bovdi/Lewin for the PTFA Ore step; the full possibly nonsplit extension argument is not local and remains escalated.
- Cheeger–Gromov, `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cheegergr.pdf`, §4; its eta-regularization/variation inputs needed for the uniform rho bound are not proved locally.
- Lück–Schick, `https://arxiv.org/pdf/math/0209161`, §1 and Theorem 1.3 proof; its closed-manifold L²-signature result relies on Atiyah’s L² index theorem and Hilsum analytic inputs.
- Cha–Livingston, `https://arxiv.org/pdf/math/0208225v3`, Theorem 1 construction and Corollary 2.1 statement. The full Corollary 2.1 proof was not read; the local finite-selection argument is kept separate and this source is not treated as its proof.
- Cha, `https://arxiv.org/pdf/0709.2968`, full Lemma 5.6 proof, used for the signature-realization route.
- Livingston, `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf`, full book chapter, including §2.1 Definition 2.1/Theorem 2.2 and concordance context.
- Ray, `https://numdam.org/item/10.5802/wbln.39.pdf`, full lecture notes, including the concordance conventions and satellite discussion; its exercise is corroboration, not substituted for a proof.

## Exact supplier gaps and affected claims

The pair continues authoring through missing cross-batch suppliers, but it does not claim these results or their dependent proofs ready:

- `thm-freedman-contractible-4-manifold-bounded-by-s3-homeomorphic-to-b4` is absent from the current batch-78 manifest/carriers. Required statement: a smooth compact contractible 4-manifold produced by the meridian 2-handle construction, with boundary marked as standard `S³`, is homeomorphic to `B⁴` compatibly with that marking. Proposed placement: Freedman prerequisite A page before `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`. A present batch-78 Alexander-one theorem is a different, explicitly incomplete result.
- `lem-locally-flat-annulus-relative-zero-framed-neighborhood` is absent from the current batch-74 items. Required statement: a locally flat proper concordance annulus has a framed normal disk neighborhood matching the endpoint preferred zero framings. Proposed placement: locally-flat-surfaces prerequisite A page. It affects satellite concordance preservation, the annulus-to-zero-surgery module, and the CDR weak-injectivity reduction.
- `thm-ptfa-group-rings-are-ore-domains`: COT Proposition 2.5 cites external group-ring work for the no-zero-divisor/left-and-right Ore step in possibly nonsplit PTFA extensions. The complete argument is missing. It blocks the skew-field localization and downstream noncommutative Blanchfield modules.
- `lem-signature-additivity-under-gluing` and `thm-l2-signature-theorem-for-closed-four-manifolds`: the ordinary and von Neumann boundary-gluing calculation, and Atiyah/Hilsum closed-manifold analytic theorem, are not proved locally. They block rho bordism-independence and the downstream signature-vanishing theorem.
- The amenable `D(R)` L²-dimension estimate depends on the unproved amenable von Neumann-dimension flatness and exact Cha–Orr chain-homotopy lift. Cha’s signature-vanishing proof remains incomplete even though its exact hypotheses are stated.
- `thm-cheeger-gromov-uniform-rho-bound` needs the analytic eta estimate; the Cha–Kim rho-separation item also needs the signature-realization construction and does not import Theorem C’s pairwise-coprime hypothesis into Theorems A/B.
- The smooth complement item depends on the conditional smooth Schoenflies/S⁴ assertion. Topological/exotic CDR branches retain their separate Freedman, normal-neighborhood, category group-law, and surgery-cobordism obligations.
- The zero-surgery pattern cobordism proof still lacks the explicit relative Mayer–Vietoris groups and degreewise boundary maps for the category-specific closure-slice assumptions. The local annulus-to-zero-surgery and signature-gluing lemmas likewise remain escalated until their full arguments are supplied.

Per-item blocker prose and supplier hypotheses are recorded in the items, source-evidence file, and Step-1 records. There were no source-fetch failures, so no `source_resolution` retry/drop entries were needed.

## Plan-edge reconciliation

The current cross-batch record has 25 rows: 24 direct item edges verified against present supplier bodies and ready Step-1 records, plus one escalated proposed Freedman interface row. The batch source-evidence reconciliation records 151 scaffold edges before body audit, 24 actual cross-batch item edges, and 127 broad map-only edges removed from item `deps`. These count direct item-proof dependencies, not page-level `requires`.

## Scoped validation and blockers

Final scoped checks after the item and source-evidence edits:

- `node tools/content-policy.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-80.pages.json` — passed: 30 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-80.proof-contracts.json --strict` — passed: 30/30 checked, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs <the 30 assigned item files>` — passed: 30 items, 71 numbered proof steps, 0 defects.
- `node tools/rendercheck.mjs <the 2 assigned pages and 30 assigned item files>` — passed: 32 files; math delimiters, KaTeX, YAML and render checks clean.
- The additional uninterrupted-statement audit found no hyperlinks inside any assigned Statement/Definition/Example/other claim section, and both page bodies are empty.
- `node tools/tsx-run.mjs tools/precheck.mts <the 30 assigned item files>` — 23 proof-bearing items checked; 5 passed and 18 failed only the `no-qed` gate. Those 18 items are intentionally not marked ready because their recorded proofs are incomplete/escalated. No false `∎` was added. The seven definition/open-problem items are not proof-bearing precheck cases.
- `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` — reported four level mismatches outside batch 80 (`lem-property-p-instanton-surgery-triangle-and-rank-input`, `thm-property-p-for-nontrivial-knots`, `lem-s-three-filling-detects-the-meridian-slope`, `thm-gordon-luecke-knot-complement-determines-knot`). It reported no batch-80 level mismatch.
- The live `.autopilot/` status was read from disk. The run remains at `1-scaffold`, 102/109 covered, with batches 73, 77, 78, 80, 95, 99, and 109 missing and the Step-1 owner blocker active. No engine state or verdict was edited.

## Readiness handoff

Ten items have complete placement/prerequisites and Step-1 readiness records: `def-poly-torsion-free-abelian-group`, `def-zero-surgery-on-a-knot`, `def-cdr-satellite-concordance-categories`, `def-satellite-induced-concordance-operator`, `def-integral-half-solutions-strebel-and-l2-signatures`, `lem-satellite-connected-sum-substitution`, `lem-strong-winding-stable-under-companion-insertion`, `op-cha-kim-smooth-graded-quotients-for-topologically-slice-images`, `ex-knot-kt-27-worked-cases`, and `cex-knot-kt-27-boundary-case`.

The remaining twenty are recorded `escalated` with their exact missing hypotheses/proofs: `thm-ptfa-group-rings-are-ore-domains`, `lem-cdr-smooth-s4-complement-is-standard-ball`, `lem-concordance-annulus-induces-zero-surgery-cobordism`, `thm-cdr-concordance-categories-form-abelian-groups`, `lem-satellite-operator-preserves-concordance`, `def-blanchfield-pairing-and-higher-order-rho-invariant`, `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-signature-additivity-under-gluing`, `thm-amenable-von-neumann-l2-flatness`, `thm-cheeger-gromov-uniform-rho-bound`, `thm-l2-signature-theorem-for-closed-four-manifolds`, `lem-amenable-D-R-l2-dimension-estimate`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`, `lem-higher-order-blanchfield-pairings-are-nonsingular`, `lem-l2-rho-invariant-bordism-independence`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `thm-cochran-davis-ray-strong-winding-injectivity`, and `thm-cha-kim-winding-zero-iterates-infinite-rank`.
