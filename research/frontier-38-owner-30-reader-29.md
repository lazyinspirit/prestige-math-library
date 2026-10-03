# Step 5a independent reader — batch 29

Run: `frontier-38-owner-30`. Dispatch: `reader-29`. The live `.autopilot/frontier-38-owner-30/state.json` reports stage `5a-read`; both edited item carriers are draft and name this run. This review made no judgments, certification stamps, withdrawals, or published-content changes.

## Opened inventory and reading scope

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `briefs/reader.md`. Extracted the complete assigned page/item/dependency inventory from `research/frontier-38-owner-30-batch-29.pages.json`. Opened both assigned pages, all 26 assigned item files in full, and all 26 entries of `research/frontier-38-owner-30-batch-29.proof-contracts.json`. The scaffold notes were consulted as historical evidence in bounded portions, not as acceptance evidence. No rendered evidence bundle was supplied or found at the exact task paths.

Pages:

- `library/scheme-theory/hilbert-functors-and-projective-hilbert-schemes.md` (A).
- `library/scheme-theory/hilbert-functors-and-projective-hilbert-schemes-examples.md` (B).

The assigned items were read in the following supplier-before-consumer order (published immediate supplier statements/definitions were opened first):

1. `items/def-castelnuovo-mumford-regularity.md`
2. `items/lem-hilbert-regularity-propagation.md`
3. `items/lem-hilbert-uniform-regularity-fixed-polynomial.md`
4. `items/lem-hilbert-relative-regularity-and-base-change.md`
5. `items/lem-hilbert-uniform-sections-after-flat-pullback.md`
6. `items/lem-hilbert-rank-flattening-finite-module.md`
7. `items/lem-hilbert-universal-scheme-theoretic-flattening.md`
8. `items/lem-hilbert-family-vanishing-locus.md`
9. `items/def-projective-morphism-coherent-bundle-convention.md`
10. `items/lem-hilbert-euler-polynomial-for-ample-polarization.md`
11. `items/def-hilbert-functor-of-flat-projective-subschemes.md`
12. `items/lem-hilbert-families-fpqc-descent.md`
13. `items/lem-hilbert-relative-grassmannian-quotients.md`
14. `items/lem-hilbert-projective-space-construction.md`
15. `items/lem-hilbert-valuative-flat-closure.md`
16. `items/lem-hilbert-proper-relative-ample-projectivity.md`
17. `items/lem-hilbert-regularity-independent-of-ambient-dimension.md`
18. `items/lem-hilbert-coherent-projective-bundle-construction.md`
19. `items/lem-hilbert-noetherian-base-fixed-polarization.md`
20. `items/thm-hilbert-scheme-represents-projective-flat-families.md`
21. `items/lem-universal-family-and-hilbert-polynomial-strata.md`
22. `items/lem-hilbert-polynomial-finite-scheme-length.md`
23. `items/ex-hilbert-polynomial-of-finite-points-on-p1.md`
24. `items/cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family.md`
25. `items/ex-hilbert-base-change-of-a-fat-point-family.md`
26. `items/ex-full-hilbert-functor-of-p1-has-infinitely-many-strata.md`

Published immediate supplier inventory (33 files; relevant complete Statement/Definition sections, rather than whole dependency-closure audits):

- `items/cor-euler-characteristic-locally-constant-flat-proper-family.md`
- `items/cor-faithfully-flat-descent-of-finite-generation.md`
- `items/def-axiom-of-choice.md`
- `items/def-dependent-choice.md`
- `items/def-projective-morphism-pre-proj.md`
- `items/def-relative-proj-quasi-coherent-graded-algebra.md`
- `items/def-relatively-ample-invertible-sheaf.md`
- `items/lem-ample-pullback-finite-morphism.md`
- `items/lem-euler-characteristic-additive-short-exact.md`
- `items/lem-eventual-global-generation-coherent-twists.md`
- `items/lem-filtered-colimit-flat-fp-sheaf-stage.md`
- `items/lem-generic-freeness-finite-type-algebra-module.md`
- `items/lem-proper-cohomology-field-extension.md`
- `items/lem-proper-flat-fp-cohomology-perfect-complex.md`
- `items/lem-serre-vanishing-induction-hyperplane.md`
- `items/lem-support-dimension-preserved-field-extension.md`
- `items/thm-ample-powers-very-ample-proper-base.md`
- `items/thm-closed-subschemes-projective-space-homogeneous-ideals.md`
- `items/thm-cohomological-dimension-projective-n-space.md`
- `items/thm-cohomology-projective-space-twisting-sheaves.md`
- `items/thm-faithfully-flat-descent-of-flatness.md`
- `items/thm-finiteness-of-associated-primes.md`
- `items/thm-generic-flatness-morphisms.md`
- `items/thm-hilbert-polynomial-coherent-sheaf.md`
- `items/thm-hilbert-polynomial-degree-support-dimension.md`
- `items/thm-nakayama-lemma.md`
- `items/thm-projective-bundle-represents-line-quotients.md`
- `items/thm-proper-pushforward-coherent.md`
- `items/thm-qc-sheaf-affine-higher-cohomology-vanishes.md`
- `items/thm-relative-proj-base-change.md`
- `items/thm-serre-vanishing.md`
- `items/thm-valuative-criterion-properness.md`
- `items/thm-zero-divisors-on-a-module.md`

Additionally opened `items/lem-proj-associated-sheaf-basic-sections.md` in full when investigating the flattening citation. Read the complete Proof of `lem-graded-section-module-finite-projective` to establish exactly what the cited supplier proves. It proves finite generation of section tails, not the recovery assertion used in the original flattening fact.

## Mathematical checks and external evidence

Checked definitions and polarization conventions, all authored statements/facts/proofs, reconstruction in both directions, fibre/base-change quantifiers, regularity endpoints, and all four example computations. In particular:

- The regularity proofs preserve the range $t\ge m-i$. In the uniform bounds, higher cohomology vanishes at $t\ge a-i$, and strict decrease of $h^1$ follows by propagating restriction-surjectivity and then using Serre vanishing. For the dimension-independent quotient bound, the ambient term cancels in $h^1(I(a))\le P(a)$; the resulting recursion depends only on $P$.
- The relative argument splits a fibre-acyclic nonnegative finite projective complex locally to degree zero. The splittings survive every algebra change. The evaluation cokernel is of finite type, so the stated Nakayama argument applies over arbitrary bases.
- The flattening construction imposes the full relation ideals of section-module rank strata. Finite stabilization uses Noetherianity; arbitrary test-scheme factorization uses the uniform presentation bound, rather than only a statement about underlying points.
- The coherent-bundle Grassmannian reconstructs quotients from normalized minors and presentation relations. The valuative closure argument supplies finite presentation even over a non-Noetherian valuation ring by degreewise freeness, saturation in each residue field, and Nakayama for the ideal tail.
- The main theorem's global embedding argument keeps the auxiliary-polarization components separate: over an affine base only finitely many meet the proper fixed-$L$ stratum. Their Plücker lines combine without a uniform power, and complete sections of that line give the global coherent-bundle embedding. This does not substitute local projectivity for global projectivity.

Consulted [Nitsure, Construction of Hilbert and Quot Schemes](https://arxiv.org/pdf/math/0504590): Section 2, Lemma 2.1 and Remark 2.2, printed pp. 9–11; Theorem 2.3 and its complete induction, pp. 11–13; Section 3, Lemmas 3.1–3.2, pp. 13–15; Section 4, Theorem 4.3 and its complete rank-stratum proof, pp. 19–23; and Section 5's projectivity conventions and concluding properness/coherent-source construction, pp. 23–28. Lemma 3.2 is the exact flatness-from-locally-free-section-tail statement relevant to the repaired argument. The source's Noetherian-base results are supporting evidence; the arbitrary-test and non-quasi-compact extensions were checked in the authored proofs. The PDF was opened through the web tool and also downloaded/read locally with PyMuPDF. The unavailable `pdftotext` executable caused no source-reading blocker.

Opened [Grothendieck, Bourbaki 221](https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf) and located Theorem 2.2 and the ensuing proof sketch (PDF pp. 7–11). I did not read that entire paper or use the sketch as an independent complete proof.

## Item repairs

1. `lem-hilbert-universal-scheme-theoretic-flattening`, Facts F3 and Proof 3.1: the original citation to `lem-graded-section-module-finite-projective` did not prove recovery of the sheaf from a high section tail. Replaced it with the already-opened eventual-generation and twist-cohomology suppliers. Added the missing derivation: a finite twist presentation and Serre vanishing for its two coherent kernels give a right-exact sequence of section tails; degree-zero localization recovers the chart modules of the twist sums, hence their cokernel is the chart module of the sheaf. Flatness now follows directly. The statement is unchanged.
2. The same item, Facts F1 and Proof 2.1: interpolation at $n+1$ integers only identifies polynomials of degree at most $n$. For a nonoccurring polynomial of higher degree, the original construction's identification of $W_P$ with its polynomial locus was not justified. Added the empty-stratum case before interpolation, using field-extension invariance of the fibre polynomial. Added that supplier to deps and F1. Updated contract citations, `derivations.d2_1`, and `derivations.d3_1`, including step-input/use maps.
3. `ex-hilbert-base-change-of-a-fat-point-family`, Verification 1.1: made the nonzero-fibre possibilities explicit in characteristic two. At $t=1$ the polynomial is $(x-1)^2$, so this fibre is a double point, not two distinct points. Added the finite-length supplier's tag to the polynomial computation. Updated the contract's first derivation, citation uses/inputs, and its characteristic-two boundary evidence. The Example statement is unchanged.

Neither edited item had a `verification.judge` record to remove; neither has been stamped. No statement or definition was altered, so there is no changed supplier statement requiring a downstream claim change.

## Assigned proof-contract corrections

All corrections below are in `research/frontier-38-owner-30-batch-29.proof-contracts.json`. Existing boundary-status labels were retained; these are corrections of evidence, not new certification. The item bodies for these contract-only corrections were left untouched.

| Subject | Contract locations | Correction and direct evidence |
|---|---|---|
| `def-castelnuovo-mumford-regularity` | `boundaries.one`, `.nonempty-choice` | $m$ is explicitly an integer; the body contains no explicit AC/DC declaration, although the deps declare AC. Removed the contrary assertions. |
| `lem-hilbert-uniform-regularity-fixed-polynomial` | `boundaries.empty` | Proof 1.1 starts induction at $n=0$, not at the zero polynomial. |
| `lem-hilbert-uniform-sections-after-flat-pullback` | `boundaries.empty`, `.degenerate`, `.endpoints`; `derivations.d2_1` | If $F_B=0$, its first kernel is $E_{0,B}$, not necessarily zero. $B$ need not be flat over $A$. The single $N$ is uniform in $B$. Only sections of the twist sums are necessarily finite free; the resulting section bundle is finite locally free. These distinctions are explicit in Statement and Proof 1.1–3.1. |
| `def-projective-morphism-coherent-bundle-convention` | `boundaries.degenerate` | Coherent $E$ is locally finitely generated; a finite global generating system is what need not exist. |
| `lem-hilbert-families-fpqc-descent` | `boundaries.empty` | The empty closed subscheme has ideal $\mathcal O$, not zero. An empty cover covers only an empty base. |
| `lem-hilbert-relative-grassmannian-quotients` | `boundaries.empty` | Separated the rank-zero representative $S$ from the positive-rank empty cases, exactly as Proof 2.2 states. |
| `lem-hilbert-projective-space-construction` | `boundaries.one`, `.endpoints` | Rank-one quotient data are not a universal divisor in arbitrary ambient dimension; rank-zero Grassmannian is $S$, not empty. |
| `lem-hilbert-valuative-flat-closure` | `boundaries.degenerate` | The generic ideal in $K[x]$ is finitely generated by Noetherianity. The non-Noetherian issue concerns its contraction over $R$, addressed in Proof 2.1–3.1. |
| `lem-hilbert-proper-relative-ample-projectivity` | `boundaries.nonempty-choice` | The chosen exponent can change $q_*A^k$; only for fixed $k$ is it canonical. The statement asserts existence, not independence of that exponent. |
| `lem-hilbert-regularity-independent-of-ambient-dimension` | `boundaries.one` | For $p=1$ the kernel is an ideal and $F=\mathcal O/I$ is the quotient, not an ideal sheaf. |
| `lem-hilbert-coherent-projective-bundle-construction` | `boundaries.empty` | When the ambient scheme is empty over nonempty $S$, the zero-polynomial functor is the singleton empty-family functor represented by $S$. |
| `lem-hilbert-noetherian-base-fixed-polarization` | `boundaries.empty` | Likewise, an empty universal family does not mean an empty representative; the zero-polynomial representative is $S$. |
| `thm-hilbert-scheme-represents-projective-flat-families` | `boundaries.empty`, `.degenerate` | Corrected the same empty-family distinction. Over a non-quasi-compact base the fixed-polynomial morphism is still finitely presented, as Statement and Proof 3.1 assert; its total space need not be quasi-compact. |
| `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family` | `boundaries.one`, `.endpoints` | $Z=\operatorname{Spec}k$ is reduced; the nilpotent is in the base. The flattening stratum $\epsilon=0$ is reduced and includes the sole underlying point, which is both generic and closed. |
| `ex-hilbert-base-change-of-a-fat-point-family` | `boundaries.empty`, `.one`; `derivations.d1_1`; F1 use/input maps | A field cannot be the zero ring. The $t=1$ fibre has two distinct points only in characteristic different from two. The empty-algebra base change has vacuous fibre conditions. |

The replacement F3 citations and field-extension citation in the flattening contract are literal excerpts of the opened supplier statements. The strict checker required explicit Statement/Definition anchors on corrected boundary entries and full use maps for multi-supplier facts; those metadata adjustments were made without changing mathematical claims.

## Uneditable finding and page verdicts

**B-page defect (fatal false claim):** `library/scheme-theory/hilbert-functors-and-projective-hilbert-schemes-examples.md`, lines 18–21 of the first summary paragraph, identifies the equations $(X,\epsilon)$ with $Z=\operatorname{Spec}k[\epsilon]/(\epsilon^2)$. On $Y\ne0$, those equations give $A[x]/(x,\epsilon)=k$, hence $Z=\operatorname{Spec}k$. This is the exact computation in the assigned counterexample's Proof 1.1. The claimed algebra $A$ instead defines the base and is flat over itself. Proposed prose repair: name $T=\operatorname{Spec}k[\epsilon]/(\epsilon^2)$ and $Z=\operatorname{Spec}k\subseteq\mathbb P^1_T$ defined by $(X,\epsilon)$. B-page prose is outside this reader's edit authority, so it remains for the lead and is the sole JSON finding.

- **A page:** no unresolved mathematical defect found after the two item proof repairs and assigned contract corrections; its summary accurately reflects the checked construction and conventions. No page-prose edit made.
- **B page:** its four item bodies have no unresolved mathematical defect found after the characteristic-two clarification. The page summary requires the correction above before acceptance.

No proposed withdrawal. The remaining blocker is the B-page prose repair, requiring a licensed editor.

## Validation and handoff limits

- Reflow on each changed item: exit 0, both reported unchanged.
- Precheck on each changed item: exit 0, both PASS. The flattening item was rechecked after its final nonoccurring-polynomial repair.
- Final batched command after all item edits/formatters: `node tools/proof-layout.mjs items/lem-hilbert-universal-scheme-theoretic-flattening.md items/ex-hilbert-base-change-of-a-fat-point-family.md` — exit 0; 2 items, 6 steps, 0 defects.
- Rendercheck on those two files: exit 0; both frontmatter blocks and all math spans parse.
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-29.proof-contracts.json --strict` — final exit 0; 0 errors, 0 warnings, 26/26 items checked. An initial run rejected missing evidence anchors/use maps introduced during contract edits; those were corrected before the successful final run.
- A separate normalized-text comparison found no nonliteral citation quote in the final 26-item contract collection.

Coverage is the assigned mathematics and its necessary immediate supplier interfaces, with the targeted supplier proofs and external passages identified above. This is not a recursive audit of every published proof or a complete audit of either source book. No independent judge, hash certification, run gate, or publication check is claimed. Only the two item files, this batch's proof-contract artifact, and the task-authorized report/findings outputs were written.
