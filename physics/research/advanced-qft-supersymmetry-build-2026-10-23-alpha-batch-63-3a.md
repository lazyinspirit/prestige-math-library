# Batch 63 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-63`; original scope assignment group `u` retained.

## def-qftx-analytic-coherent-module

Verdict: `accepted_repair`. Demailly II3.18 defines an analytic module, not coherence. II3.8 and II3.11 give exactly the two finite local generation conditions stated here. Reader corrected both source labels. The Definition, including rank zero and all open V, is unchanged and sound.

## lem-qftx-coherent-analytic-module-calculus

Verdict: `amended_repair`. Checked all five steps, F1–F4, and all three exact-sequence cases on an arbitrary ringed space. Finite generators admit simultaneous local lifts through a sheaf epimorphism. Projection of ker epsilon surjects onto ker gamma (choose the negative of a lift under delta); images of finite-type sheaves have finite local generators. In the extension case injectivity of i identifies ker delta with the preimage needed to generate ker g. Zero modules and rank-zero free maps satisfy the same arguments. The exact-sequence diagram has correct orientation. Demailly II3.13–3.14 supplies the general ringed-space argument; Wehler Release 5.0 Propositions 4.32/4.34 and Release 4.3 Propositions 4.31/4.33 agree. Citation edition ambiguity amended; no mathematical interface change.

## lem-qftx-gaga-analytic-bounded-degree-relations

Verdict: `accepted_repair`. Checked all four steps and F1–F6. For q=1 the integral-domain argument gives zero. If P_q(x) is a unit, the elementary relations generate with degree at most d. Otherwise translation to (x_prime,w_0) makes P_q regular of order r between 1 and e. Preparation and uniqueness of division show the unit u is a polynomial of degree e-r. Subtracting (t_j/u)(P_q e_j-P_j e_q) leaves remainders of degree below r; multiplying the residual vector by u gives component degrees at most d-1. Division uniqueness forces its last component to be polynomial. This proves the bound at every point, not only at the center. n=1 uses constant base coefficients. Compared with Demailly II3.20 complete proof and Wehler 4.28(iii.2–iii.3); the local proof correctly retains units even where source notation suppresses them. Common-center clarification accepted; the only direct item consumer is the owned Oka theorem, whose preparation step supplies these hypotheses.

## thm-qftx-gaga-analytic-oka-coherence

Verdict: `reviewed_no_defect`. Checked every one of the 12 steps and all 17 cited dependency statements. The supplier definition uses positive complex dimension; C^0 is the auxiliary induction base. Empty tuples, zero germs and unit entries are handled before simultaneous preparation of the nonzero product. The coefficient matrix has q(d+1) columns and 2d+1 rows. A polynomial relation germ at (x_prime,w_0) gives a base coefficient relation because a polynomial vanishing on a product neighborhood has zero coefficients; translation between w and w-w_0 preserves the degree bound. Dimension induction plus the matrix lemma gives one neighborhood generating K. The Noetherian stalk and coherent-cokernel argument in steps 6–7 is valid though more than is needed. Extending coefficient sections to the product and using bounded-degree reduction generates all relation stalks. Free modules are coherent by the matrix lemma; finite repeated coherent kernels give the requested partial resolution, including ell=0, with no left-end exactness claim. AC is retained as adopted ambient scope, not inferred necessary. Demailly II3.19–3.20 and II3.17, and Wehler 4.28, checked. No missing prerequisite or empirical premise.

## ex-qftx-gaga-analytic-relation-kernel

Verdict: `reviewed_no_defect`. Checked all four verification steps and every supplier statement. The nonorigin cases use the correct unit coordinate and signs. At the origin restriction to z_1=0 forces all coefficients c_0n of b to vanish, and the divided convergent series remains holomorphic on a smaller bidisc. Cancellation in the holomorphic germ domain then gives (a,b)=c(-z_2,z_1). Stalkwise equality proves generation of the sheaf on D, without claiming arbitrary global coefficients from stalk data. Oka plus the split extension makes the free source coherent; kernel calculus gives coherence. Inherited AC is explicit; no measurements or global resolution are asserted. Source locator cleanup does not change the claim.

## ex-qftx-gaga-analytic-skyscraper-presentation

Verdict: `reviewed_no_defect`. Checked all seven verification steps and all supplier statements. A nonzero point has a unit coordinate and zero quotient stalk. Grouping absolutely convergent monomials at the origin gives the coordinate maximal ideal and quotient C. Nonorigin relations have the displayed signs; at the origin the induction subtracts lower-coordinate Koszul relations, then coordinate divisibility and domain cancellation give the remaining pairwise relations. For N=1 the kernel is zero and the pairwise family is empty. Stalkwise equality gives sheaf generation on D, and the coherent-cokernel argument retains AC. Sources support coherence context; the explicit coordinate argument is local rather than attributed as a quoted source theorem. No diagram or statistical claim.

## Source and historical evidence

Read the reader report, empty reader-findings array, refuter coverage report with empty flagged array, scope, both hash snapshots, owning manifest/contracts and both current pages. Exactly six touched decisions are owed; no page, reader or refuter finding decision is owed. The unchanged matrix-kernel item receives its required risk review but no invented touched decision.

All seven current item raw hashes initially equaled the post-reader snapshot. `git show HEAD:physics/items/<id>.md` at commit `4c10de5be5ac5a35b63aa54e6e9d743a1894ffce` reproduced every pre-reader raw hash exactly; actual unified differences were reviewed, so no historical-byte uncertainty remains. Only the calculus citation labels were subsequently amended. The reader's original mathematical proofs were preserved.

Primary sources read independently:

- [Demailly, Complex Analytic and Differential Geometry](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf), Chapter II §3.2.1 Definitions 3.8/3.11, Theorems 3.13–3.14 and §3.2.2 through (3.17), then §3.3 Theorem 3.19 and complete Lemma 3.20/proof continuation, printed pp. 87–90. These establish the stated local generation, coherence calculus and dimension-induction context. The local unit-sensitive bounded-degree proof was checked algebraically rather than copied from abbreviated source notation.

- [Wehler, Stein Manifolds, alternate LMU host](https://www.mathematik.uni-muenchen.de/~wehler/20190530_Stein_Manifolds_script.pdf): browser extraction returned cached DRAFT Release 4.3 (2022-09-04), while a direct curl download returned Release 5.0 (2026-10-22). Read the downloaded Definitions 4.25–4.26, complete Theorem 4.28 proof (ii and iii.1–iii.3), and complete Propositions 4.32/4.34, printed pp. 136–145 and 148–154. The earlier cached edition labels the latter 4.31/4.33. The reader's correction was faithful to that cached edition; it was not a mathematical correction of the closure theorem. The amended item now identifies both editions explicitly. Downloaded PDF SHA256: 6bc9faef6f1381d8f5154cbbfa2a34200dc6ba3bd313ada749768df4a1e0616d. Demailly PDF SHA256: d7c7654a7417e8322e5dcf8fe8ec818b4c1a18cf280b41f2df5a871b776d89a1. Temporary retrievals are not durable source archives; these published URLs, editions and locators are the evidence record.

Direct mathematical dependency statements inspected: `def-ringed-space`, `def-module-on-ringed-space`, `def-kernel-cokernel-image-sheaves`, `def-stalk-of-presheaf`, `def-complex-manifolds-and-holomorphic-vector-bundles`, `def-exact-sequence-sheaves`, `thm-exactness-of-sheaves-stalkwise`, `def-axiom-of-choice`, `def-regular-holomorphic-germ`, `def-weierstrass-polynomial`, `thm-weierstrass-preparation-theorem`, `thm-weierstrass-division-theorem`, `thm-power-series-expansion-in-several-complex-variables`, `cor-uniqueness-of-multivariable-power-series-coefficients`, `thm-holomorphic-germ-ring-is-noetherian`, `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular`, and `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`. Their relevant content is recorded in the individual reviews and current contract quotations. Published status is supplier context, not a new audit of their complete transitive proof bases.

## Repairs, consumers and presentation

Accepted the definition citation repair and common-center explication; amended the calculus citation repair to distinguish source editions. Three closed nonfatal defect rows are linked by the repair decisions. The theorem's F4 refinement and removal of edition-sensitive page ranges in it and the examples are sound audit enrichment, with no separate mathematical defect claimed. In particular, some original page ranges agree with Release 5.0; they were not uniformly erroneous as the reader's Release-4.3 report suggests.

Synchronized the bounded-degree Statement and corrected definition/calculus source metadata in the owning batch manifest. No dependency edges, IDs, proof steps, provenance classes or publication status changed. No judge stamp was present to invalidate. Both pages remain frontmatter-only with `page_layout: compact-v1`.

The only item/reference consumer of the bounded-degree lemma is the owned Oka theorem; its step 4.1 prepares all polynomials on a common centered product polydisc and meets the explicit coefficient hypotheses. Its existing reader-updated F4 and contract quotation preserve the exact use. Its Statement is unchanged, so no further consumer hop is triggered. The A-page inventory is unchanged. No affected outside consumer, proposed withdrawal, published defect or published-ledger edit was found. The batch cross-batch input is empty; mathematical imports and root originals remain read-only.

Both TikZ diagrams were adjudicated: the projection triangle in the matrix-kernel lemma commutes, and the calculus short exact sequence has the correct maps and directions. Neither proof relies on its diagram. No additional diagram is mathematically required.

## Local checks and handoff

- Risk routing run before recording reviews: one HIGH and five CRITICAL items; all six now have specific complete risk reviews. Rerun with `--require-reviewed`: seven routed items, zero errors.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-qftx-coherent-analytic-module-calculus.md`: one checked, zero failing. A direct Node invocation of the `.mts` helper initially failed on its extension; the documented tsx wrapper above resolved that invocation issue.
- `node tools/physics-support/rendercheck.mjs items/lem-qftx-coherent-analytic-module-calculus.md --quiet`: one file passed YAML and real KaTeX checks.
- Final `proof-layout.mjs` call batched the six touched paths: six items, 32 steps, zero defects.

No unresolved mathematical blocker or escalation remains. No judgment, decision-hash stamping, acceptance certification, gate battery or stage transition was performed. The engine owns those operations. Outputs are this report and the sibling `-decisions.json` with exactly six decisions.
