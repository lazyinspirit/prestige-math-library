# Reader 14 — batch 14

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a review; all assigned carriers are draft. This report records review and repairs, not publication or a judge/audit stamp.

## Repairs and evidence

Opened both assigned pages and all five assigned items, after the relevant statements/definitions of their 44 direct external mathematical suppliers. The imported suppliers are published and read-only. No empirical premise occurs in this batch.

Confirmed and repaired:

- `def-em-minkowski-affine-space`, Definition, “Tensors and components”: the original coordinate law `x'=Lx` with new basis `L^-1 u_a` was false for a general old frame. With synthesis map `B xi=sum xi^a u_a`, the correct coordinate law uses `N=B^-1 L B`. Component arrays now have distinct notation from the unchanged geometric vector, covector and form, and all three transformation laws are derived locally. Tensor ranks and the zero-argument scalar case are explicit. The affine space, form, cone, Lorentz-map definition and frame definition are unchanged.
- `lem-em-boost-preserves-metric`, Facts L2: removed the extra factor `a` on the left of `gamma^2=a^-1/2 a^-1/2=1/a`. Proof 2.1: the row addition changes both the first and second entries; the resulting row is explicitly `(0,gamma(1-beta^2),0,0)`. Both corrections follow directly from the opened rational-power laws and determinant-by-row-reduction supplier.
- `lem-em-proper-time-reparametrization`, Proof 2.1: `g=-eta(z',z')` uses coefficients `(1,-1,-1,-1)`, whereas the original final equality used the opposite signs. The continuity argument and all six conclusions are retained.
- `lem-em-antisymmetric-tensor-contraction`, Facts L6: corrected the derivative identity to `(U')^a=(U^a)'`. Its original lower index reversed the time component under this batch's explicit lowering convention. The raised-index force operator and constant/varying-form conclusions are unchanged.

- `ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries`, Verification 1.1–2.2: restored math delimiters and explicit LaTeX notation. The symmetric-form witness now proves uniqueness directly from nondegeneracy rather than appearing to apply the skew-only lemma to a symmetric form. The null witness explicitly has a future causal tangent and a continuous constant derivative. The Example calls the negative value a quadratic value rather than an undefined negative “norm”. All five original checks remain.

Direct-consumer interface review: opened `post-em-minkowski-physical-model`, `lem-em-compact-field-variation`, and `ex-em-variational-mathematical-prerequisites-hypothesis-boundaries`, in addition to the four owned consumers. Their actual uses concern unchanged affine data, cone, standard components, lowering/raising or the frame definition; none uses the incorrect arbitrary-frame coordinate law. No consumer mathematics requires an edit. This is a focused interface review, not an audit of those other-batch items or their unrelated dependencies.



## Exact frame witness and proof checks

Take the old frame basis `(u0,u1,u2,u3)=(e0,e2,-e1,e3)` and the boost along the standard first spatial axis at `beta=3/5`, `gamma=5/4`. For the point `p=u1=e2` with origin zero, old coordinates are `x=e1`. The original alleged law `x'=Lx` gives `(-3/4,5/4,0,0)`. In the stated new basis `L^-1 u_a`, the actual coordinates are `(0,1,0,0)` because `L` fixes `e2`. The repaired `N=B^-1 L B` gives these actual coordinates. Exact rational computation also confirmed `N^T eta N=eta` for this witness; the general component laws are proved in the Definition, not inferred from this one computation.

The boost proof retains the bilinear expansion for arbitrary vectors, explicit two-sided inverse, row-reduction determinant and both future-cone inclusions. The proper-time proof uses the opened continuous-inverse and inverse-derivative statements on a nondegenerate order-convex domain: it supplies continuity, injectivity, positive derivative and both limit-point conditions before the chain rule. Its null clause concerns the zero integral, not a normalized null tangent. The contraction proof obtains the operator from nondegeneracy, uses `eta(Phi(u),w)=F(w,u)` and differentiates only `U`; no field differentiability is required in its varying-form clause. The example preserves the negative time sign and the witness `Phi(e0)=-e1`.

## Opened inventory

Assigned pages, both read in full:

- `library/classical-electromagnetism-mathematics/em-minkowski-mathematical-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-minkowski-mathematical-prerequisites-examples.md` (B).

Assigned items, read in full after supplier context, in supplier-before-consumer order:

- `items/def-em-minkowski-affine-space.md`.
- `items/lem-em-boost-preserves-metric.md`.
- `items/lem-em-proper-time-reparametrization.md`.
- `items/lem-em-antisymmetric-tensor-contraction.md`.
- `items/ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries.md`.

Published external suppliers opened for their exact relevant Definition/Statement clauses; selected integral and zero-derivative proofs were also read. This is supplier-use checking, not a recursive audit of the complete published mathematics library. All 44 local snapshots were checked against `research/math-imports.json` and match their pinned hashes:

- `items/cor-differentiable-implies-continuous.md`.
- `items/cor-operator-determinant-by-row-reduction.md`.
- `items/cor-primitives-of-a-continuous-function.md`.
- `items/cor-zero-derivative-implies-constant.md`.
- `items/def-algebraic-dual-and-linear-functional.md`.
- `items/def-bilinear-symmetric-skew-and-alternating-forms.md`.
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`.
- `items/def-continuity-real.md`.
- `items/def-coordinate-column-and-matrix-of-a-linear-map.md`.
- `items/def-derivative.md`.
- `items/def-determinant-of-a-linear-operator.md`.
- `items/def-euclidean-inner-product.md`.
- `items/def-function-space.md`.
- `items/def-interval.md`.
- `items/def-linear-basis.md`.
- `items/def-linear-isomorphism-and-invertible-linear-map.md`.
- `items/def-linear-map.md`.
- `items/def-matrix-product-and-identity-matrix.md`.
- `items/def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form.md`.
- `items/def-orientation-of-a-finite-dimensional-real-vector-space.md`.
- `items/def-oriented-integral.md`.
- `items/def-rational-power.md`.
- `items/def-real-order.md`.
- `items/def-standard-bilinear-form-on-a-coordinate-space.md`.
- `items/def-transpose-of-a-linear-map.md`.
- `items/def-transpose-of-a-matrix.md`.
- `items/def-vector-space.md`.
- `items/def-vector-valued-derivative-and-integral.md`.
- `items/def-vector-valued-functions-limits-and-continuity.md`.
- `items/lem-of-square-monotone.md`.
- `items/lem-rational-power-laws.md`.
- `items/thm-algebra-of-continuous-functions.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-bilinear-forms-correspond-to-linear-maps-into-the-dual.md`.
- `items/thm-chain-rule.md`.
- `items/thm-change-of-basis-for-a-bilinear-form-is-congruence.md`.
- `items/thm-componentwise-limits-and-continuity.md`.
- `items/thm-composition-of-continuous-functions.md`.
- `items/thm-continuous-inverse.md`.
- `items/thm-derivative-of-an-inverse.md`.
- `items/thm-dimension-of-a-linear-subspace.md`.
- `items/thm-monotonicity-from-the-derivative.md`.
- `items/thm-of-square-roots.md`.
- `items/thm-rank-nullity.md`.

Additional supplier definition opened: `items/def-ck-and-multi-index-notation-in-several-variables.md`, Definition, confirming that scalar C1 includes continuity of the function and its first coordinate derivative. Additional direct consumers opened in full for the focused interface review: `items/post-em-minkowski-physical-model.md`, `items/lem-em-compact-field-variation.md`, and `items/ex-em-variational-mathematical-prerequisites-hypothesis-boundaries.md`.

Other task context opened: `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, `briefs/reader.md`, the exact batch page manifest and batch proof contracts, import receipt metadata and scoped hashes, relevant current owner-direction clauses, and the beginning of batch 14 scaffold notes. The notes and prior contract review entries were treated as historical evidence. No rendered evidence bundle was identified in the current task artifacts; the current carriers were the review entry point.

## Source comparison

Retrieved the primary PDFs and read the relevant displayed arguments:

- [Carroll, Lecture Notes on General Relativity](https://arxiv.org/pdf/gr-qc/9712019), Chapter 1, printed pp. 9–12, equations (1.23)–(1.38): components depend on the basis, the underlying vector is unchanged, and basis/covector laws use inverse transformations. Printed pp. 25–27, equations (1.95)–(1.99), give the negative-time proper-time integral and normalized timelike tangent with c=1. The local inverse-parameter regularity is justified by the opened calculus suppliers rather than presumed from Carroll's informal “good parameter” condition.
- [Tong, Dynamics and Relativity](https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf), section 7.3.2, printed pp. 128–130, equations (7.13)–(7.16), supplies the coordinate Lorentz criterion, explicit boost, determinant and time-orientation classes. Sections 7.4.1–7.4.2, printed pp. 133–135, equations (7.18)–(7.21), give the proper-time and velocity relations. Tong uses the opposite metric signature; the local item explicitly adopts (-,+,+,+), consistent with Carroll, and keeps c instead of setting it to one.

These were selected source sections, not complete textbook audits. No experiment or measured input is used, and no mathematical deduction is asserted to prove physical applicability.

## Contract updates and validation

Updated only `research/physics-em-sr-40-2026-10-08-batch-14.proof-contracts.json`: current derivation claims/inputs and citation-use maps, exact Definition quotes for the four owned consumers, the Definition's empty-product boundary, and the example's boundary wording (a null tangent does not make the metric degenerate). Prior independent `reviewed` records were preserved; their old empty-boundary explanation is historical, superseded by the new explicit checked evidence. No stale `verification.judge` record was present on any of the five items, so none needed removal. No judge/audit/source-review stamp was added.

Executed on every changed item, sequentially:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md`: all five succeeded; the Definition was unchanged by reflow.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`: all four proof-bearing items passed. The Definition reports zero applicable proof checks; its existing precheck n/a remains.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-14.proof-contracts.json --strict`: final result zero errors, zero warnings, 5/5 items checked. An intermediate input-map check identified omitted inline L8/L14/L3 references; these were restored before this final pass.
- `node tools/physics-support/rendercheck.mjs` with the five explicit item paths and both explicit assigned page paths, `--json`: zero errors/warnings, seven carriers checked.
- Final `node tools/physics-support/proof-layout.mjs` with all five changed item paths in one command, after final edits and reflow: five items, 45 steps, zero defects.

These are local format/contract checks, not independent mathematical acceptance gates. No whole-run gate, publication, commit or push was attempted.

## Uneditable follow-up and page verdicts

The Definition repair makes an exact copied supplier quote stale in the other-batch contract `research/physics-em-sr-40-2026-10-08-batch-15.proof-contracts.json`, at `contracts.lem-em-compact-field-variation.citations[0].quote` (fact F1, source `def-em-minkowski-affine-space`, source section Definition). Its 9,128-character original quote contains the old tensor/frame passage and no longer occurs in the current supplier. **The lead/batch-15 owner must refresh this quote before contract gates.** The consumer's actual standard-coordinate argument is unaffected. The other direct mathematical consumer's short metric quote remains current; the physical postulate has a nonproof contract rather than citation records. Neither other-batch contracts nor aggregate run contracts were edited.

This is outstanding consumer contract maintenance caused by the licensed supplier repair. It is outside batch 14 and outside its prerequisite closure, so it cannot be represented as a batch-14 in-run-dependency finding with an assigned consumer. It is recorded here and in the JSON coverage note. No uneditable supplier claim/proof/source defect was confirmed in the reviewed prerequisite closure. One read-only B-page terminology defect remains, recorded below.

- `em-minkowski-mathematical-prerequisites` (A): reader verdict satisfactory after the recorded repairs; the mathematical interface and summary agree. No A-page prose change was needed. Cross-batch copied-quote maintenance remains for the lead.
- `em-minkowski-mathematical-prerequisites-examples` (B): reader verdict repair required in the read-only summary. In its first paragraph, the boost image is described as having “norm $-1$”. The linked example establishes the quadratic value `eta(Lambda_beta e0,Lambda_beta e0)=-1`; neither it nor the Minkowski Definition defines an indefinite use of the word norm. A mathematical norm is nonnegative. Replace the phrase with “quadratic value $\eta(\Lambda_\beta e_0,\Lambda_\beta e_0)=-1$”, or introduce the intended convention explicitly before using it. This is an ill-formed/false literal claim in page prose, not a missing proof step; it remains fatal under the dispatch rule against excusing defective claims as routine omissions. All five formal witnesses are sound after the item repair. B-page prose was read and left unchanged, as required.

No withdrawal is proposed. All five items remain draft and retain their original inventory positions. The JSON findings array contains only the unedited B-page defect and no repaired subjects. Coverage does not claim audits of other-batch mathematics, unrelated source sections, original-source drift, or execution of whole-frontier gates.
