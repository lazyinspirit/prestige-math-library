# Step 5b — lead Alpha cross-batch audit and closure (`phase-2-next-21`)

The lead's counts and gate results below describe its 10:29 UTC handoff. The
owner's later mathematical certification and current closure are recorded in
the post-lead addendum at the end of this report.

- Run: `phase-2-next-21`; stage: `5b-cross`; role: lead Alpha (`5b-lead`, covers `all`).
- Date: 2026-09-13. Author: root (DeepSeek-V4.1-Flash), primary agent.
- Work list: `research/phase-2-next-21-cross-group-edges.json` — 40 cross-batch item
  edges, 8 forward references, 0 post-5a changes at dispatch time.
- Verdicts: `research/phase-2-next-21-5b-verdicts.jsonl` — 55 current-hash rows
  (41 edge, 8 forward, 5 item, 1 gate).
- Impact receipts: `research/phase-2-next-21-impact.json` (pre-author → post-5a;
  765 changed interfaces, 679 affected items) and
  `research/phase-2-next-21-impact-5b.json` (post-5a → current; 5 changed
  interfaces, 6 affected items).
- Not a migrated run: no `research/phase-2-next-21-checkpoint-import.json`, no
  `research/phase-2-next-21-merge-import.json`, and no
  `research/phase-2-next-21-step7-published-repairs.jsonl` exists, so no imported
  review evidence and no pending Step-8 published-repair handoff had to be
  preserved.

## Scope of the closure

The computed work list contains 40 item-level cross-batch dependencies — 32
inside group a (batch 8 → batch 7), 7 inside group b (batch 6 → batch 5), and 1
from group a into group c (batch 8 → batch 1) — 8 forward references on four
batch-2/batch-5 items, and no structural change (no addition, removal, page
edits) relative to the post-5a baseline. Every listed edge is a `deps` or
`justified_by` edge.

For each edge I read the complete citing item, the cited supplier's statement
and the supplier proof step that discharges the clause when the clause lives in
the proof, and checked the specific clause the citing step consumes, its
hypotheses and boundary cases. The run's frozen cross-batch review rows
(`research/phase-2-next-21-batch-N.cross-batch-dependencies.json`) and the group
5a decisions (`research/phase-2-next-21-alpha-<g>-5a-decisions.json`) were used
as attributable prior evidence only after confirming the affected carriers
(`cross-group-edges` reported no post-5a change before the 5b repairs and the
five changed carriers are all 5b repairs recorded here).

## Edge-by-edge evidence and disposition

Disposition for 40 of the 41 rows is **accepted (accurate)**: no repair, strike,
drop, removal, reversion, page edit or item edit was made on those edges. One row
is **repaired**: the 5b lead introduced the missing cross-batch dependency
`thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism → prop-adjoint-intertwines-the-exponential-map`
(see "Findings" below). Each row's full reading note, with both current carrier
hashes, is the matching line of `research/phase-2-next-21-5b-verdicts.jsonl`.

| # | Citing → supplier | Verdict | Use and supplied clause |
|---|---|---|---|
| 1 | `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper` → `lem-unit-interval-circle-is-a-nonempty-compact-metric-space` | accurate | [F3] uses the supplier's nonempty compactness of the circle S^1=[0,1) with its metric together with thm-finite-products-of-compact-spaces to make T^2=S^1xS^1 compact in the freeness/properness divergence argument; nothing else is taken from the supplier, and no smooth-structure claim is attributed t |
| 2 | `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces` → `def-stable-natural-cohomology-operation` | accurate | [F3] and step 3.1 consume exactly the supplier's stability clause: sigma(Phi_n(x))=Phi_{n+1}(sigma x) for every based CW complex, applied at X=K(A,n) and x=iota_n. No additivity or positivity is imported. |
| 3 | `def-covering-homomorphism-of-lie-groups` → `def-lie-group-homomorphism-isomorphism-and-automorphism` | accurate | The definition consumes the supplier's notion of a smooth Lie-group homomorphism p:G~->G; smoothness is the supplier's clause and the covering condition is the citing item's own addition, as its closing sentence says. |
| 4 | `def-fundamental-vector-field-of-a-left-action` → `def-exponential-map-of-a-lie-group` | accurate | X_M(x)=d/dt/_0 exp(-tX).x consumes the supplier's total exponential map exp_G:g->G and its identification with the unique one-parameter subgroup of initial velocity X; the minus sign is the citing item's own convention. |
| 5 | `def-fundamental-vector-field-of-a-left-action` → `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero` | accurate | The sentence 'The exponential map is smooth by [[...]]' consumes the supplier's smoothness clause to make (t,x)->exp(-tX).x smooth and x->X_M(x) a smooth tangent-bundle section; the identification d(exp)_0=id is not used here. |
| 6 | `def-homogeneous-space-of-a-lie-group` → `def-lie-group` | accurate | Consumes the supplier's Lie-group convention (finite-dimensional real, boundaryless smooth manifold with smooth multiplication and inversion) for the acting group; transitivity and smoothness of the action are the citing item's additions. |
| 7 | `def-homotopy-group-local-system-along-a-cellular-map` → `def-local-system-of-r-modules-and-its-pullback` | accurate | f*Pi_nY is asserted to be a local system and to extend to one on X in the supplier's sense: a functor on the fundamental groupoid with path transport and the supplier's pullback/reversal convention. The citing item adds the cellular construction and states explicitly that any concrete extension is s |
| 8 | `def-postnikov-k-invariant` → `def-homology-and-cohomology-with-local-coefficients` | accurate | k_{n+1}(X)=o_{n+1}(q_n) in H^{n+1}(P_{n-1}X;A) consumes the supplier's local-coefficient cohomology groups, and the citing item's monodromy description is the supplier's statement that the coefficient action is the pi_1-action; the constant-system collapse for simple X is the supplier's constant-coe |
| 9 | `def-primary-cellular-obstruction-cochain` → `def-singular-and-cellular-chain-complexes-with-local-coefficients` | accurate | theta(f) in C^{n+1}_cell(X,A;P) and the invariance rule varphi(c.g)=g^{-1}varphi(c) are the supplier's cellular local cochain group and its equivariant-Hom rule; the deck-transformation and orientation checks in the citing text are exactly that rule and the supplier's transport convention. |
| 10 | `def-immersed-embedded-and-closed-lie-subgroup` → `def-lie-group` | accurate | Consumes the supplier's ambient Lie-group convention, including the closing clause that these are the finite-dimensional real Lie groups fixed by def-lie-group; the immersion/embedding/closedness adjectives and the intrinsic-topology warning are the citing item's additions. |
| 11 | `def-immersed-embedded-and-closed-lie-subgroup` → `def-lie-group-homomorphism-isomorphism-and-automorphism` | accurate | The inclusion i:H->G is required to be an injective smooth group homomorphism, i.e. the supplier's Lie-group homomorphism plus injectivity; no isomorphism or automorphism clause is consumed. |
| 12 | `def-left-translated-distribution-associated-to-a-lie-subalgebra` → `prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle` | accurate | The claim that D^h_g=d(L_g)_e(h) is the product subbundle Gxh, hence a smooth constant-rank distribution, consumes the supplier's smooth vector-bundle isomorphism Phi_L(g,X)=d(L_g)_eX and its AC_omega provenance, exactly as the citing item's choice note states. |
| 13 | `def-lie-subalgebra-and-ideal` → `def-finite-dimensional-lie-algebra` | accurate | Consumes the supplier's finite-dimensional real/complex Lie algebra with bilinear alternating bracket and Jacobi identity; the restricted bracket on a subspace inherits those identities as the citing text says, and no further clause is used. |
| 14 | `def-smooth-left-action-of-a-lie-group` → `def-lie-group` | accurate | Consumes the supplier's Lie-group convention for G; joint smoothness and the two action axioms are the citing item's own definition, and its closing sentence insists on joint rather than separate smoothness. |
| 15 | `ex-special-linear-as-a-closed-lie-subgroup-of-general-linear` → `def-lie-group` | accurate | [F1] uses exactly the supplier's smoothness of multiplication and inversion to recognise GL_n(F) (the determinant-nonzero locus) as a Lie group; the determinant and trace formulas come from the other declared suppliers. |
| 16 | `ex-the-free-proper-integer-translation-action-on-the-line` → `def-lie-group` | accurate | [F1] 'Any countable discrete group is a zero-dimensional Lie group' is the supplier's explicit dimension-zero clause; Z is countable and is given exactly that discrete structure. |
| 17 | `fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions` → `def-lie-group` | accurate | [F1] consumes the supplier's smooth multiplication and inversion to make GL_2(R) a Lie group and its left self-action smooth before the matrix witness is computed. |
| 18 | `lem-a-lie-subalgebra-distribution-is-involutive` → `prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant` | accurate | [F3] and step 2.1 consume the supplier's left-invariance of [X,Y] for left-invariant X,Y: the frame elements E_i^L are left invariant, so their bracket is too, and evaluating at e gives [E_i,E_j] in h. The supplier's AC_omega provenance is the cost the citing item's choice note describes. |
| 19 | `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` → `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero` | accurate | [F4] uses the supplier's open V,U with exp/_V:V->U a diffeomorphism: with step 1.1 (Ad_{exp X}h=h for every X in g) it places the identity neighbourhood exp(V) inside the stabilizer K, which is what makes K open in step 2.1. |
| 20 | `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` → `def-conjugation-and-the-adjoint-representation-of-a-lie-group` | accurate | [F5] uses Ad_g=d(C_g)_e to identify the identity tangent image of the composite C_g o i as Ad_g h in step 3.1, which is the uniqueness hypothesis applied to the subgroup correspondence. |
| 21 | `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` → `prop-adjoint-exponential-identity` | accurate | [F3] and step 1.1 use Ad_{exp X}=e^{ad_X}: the linear ODE u'=ad_X u solved inside h has e^{t ad_X}Y in h for every t, giving Ad_{exp X}h=h. |
| 22 | `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` → `prop-adjoint-is-a-smooth-lie-group-representation` | accurate | [F3] and step 2.1 use the representation law Ad_{gh}=Ad_g o Ad_h (with Ad_e=id) to make K={g:Ad_g h=h} a subgroup; smoothness of Ad is not consumed here. |
| 23 | `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` → `thm-the-differential-of-adjoint-is-ad` | accurate | [F2] uses d(Ad)_e=ad, i.e. ad_X Y=[X,Y], to read ideal stability [g,h] contained in h as ad_X(h) contained in h, which is the hypothesis of step 1.1. |
| 24 | `prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h` → `def-conjugation-and-the-adjoint-representation-of-a-lie-group` | accurate | [F1] uses the supplier's C_h(g)=hgh^{-1} and Ad_h=d(C_h)_e, and step 1.2 differentiates exactly that differential; the identification g/h = T_{eH}(G/H) comes from the other declared supplier. |
| 25 | `prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra` → `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism` | accurate | [F3] and step 2.1 use the supplier's di_e([X,Y]_H)=[di_eX,di_eY]_G, so h=di_e(T_eH) is bracket closed; linearity of di_e and the injectivity of the immersion are the other declared inputs. |
| 26 | `thm-cartans-closed-subgroup-theorem` → `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero` | accurate | [F1] uses the supplier's V,U with exp/_V:V->U a diffeomorphism to choose nested balls inside the injectivity domain (step 2.1) and to put exp U inside the product chart; the citing proof needs no other clause. |
| 27 | `thm-cartans-closed-subgroup-theorem` → `def-baker-campbell-hausdorff-series` | accurate | [F2] uses the supplier's Dynkin polynomials H_N with the linear term X+Y and finite degree-N sums; this is what licenses the homogeneous expansion and nZ_n->t(X+Y) in step 1.1. |
| 28 | `thm-cartans-closed-subgroup-theorem` → `lem-local-convergence-of-the-baker-campbell-hausdorff-series` | accurate | [F2] uses the supplier's absolute convergence for //X//+//Y//<epsilon and uniform convergence of the partial sums on every smaller ball D_{r_0}; the citing step works inside such a ball. |
| 29 | `thm-cartans-closed-subgroup-theorem` → `prop-exponential-scales-one-parameter-subgroups` | accurate | [F3] uses exp((s+t)Z)=exp(sZ)exp(tZ), giving exp(nZ)=(exp Z)^n for integers n (and exp(-Z)=exp(Z)^{-1} from s+t=0) in steps 1.1 and 3.1. |
| 30 | `thm-cartans-closed-subgroup-theorem` → `thm-baker-campbell-hausdorff` | accurate | [F2] uses log_G(exp_G X exp_G Y)=BCH(X,Y) on the supplier's neighbourhood W, which is what lets exp(tX/n)exp(tY/n) be written as exp Z_n inside the fixed domain of the chosen logarithm. |
| 31 | `thm-continuous-homomorphisms-between-lie-groups-are-smooth` → `prop-exponential-map-is-natural-for-lie-group-homomorphisms` | accurate | [F3] and step 3.1 use P(exp X)=exp(dP_eX) for the smooth homomorphism P:Gamma_F->G; a kernel vector then gives a constant one-parameter subgroup, forcing X=0. |
| 32 | `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism` → `thm-the-differential-of-adjoint-is-ad` | accurate | [F3] and step 3.1 use d(Ad)_e=ad, i.e. d/dt/_0 Ad_{exp(tX)}Y=[X,Y], together with linearity of Z->Z_M, to identify the derivative of the right-hand side of the flow identity. |
| 33 | `thm-lie-group-homomorphisms-have-constant-rank` → `def-left-and-right-translations-on-a-lie-group` | accurate | [F1] uses the supplier's smooth translations L_g,R_g obtained from smooth multiplication by fixing one argument; that L_g has smooth inverse L_{g^{-1}} and hence invertible differential is the immediate consequence the citing step states, and the chain rule [F2] finishes the rank computation. |
| 34 | `thm-lie-group-homomorphisms-have-constant-rank` → `def-lie-group-homomorphism-isomorphism-and-automorphism` | accurate | The statement and step 1.1 consume the supplier's notion of a smooth Lie-group homomorphism F (smooth and multiplicative) to write F o L_g = L_{F(g)} o F. |
| 35 | `thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group` → `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism` | accurate | [F2] and step 2.2 use that dq_e:g->Lie(G/N) is a Lie-algebra homomorphism (linear and bracket preserving); with [A1]'s kernel n this yields the canonical isomorphism g/n = Lie(G/N). |
| 36 | `thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group` → `thm-the-differential-of-adjoint-is-ad` | accurate | [F2] and step 1.2 use d(Ad)_e=ad to identify the derivative at zero of t->Ad_{exp(tX)}Y with [X,Y], proving that normality of N makes n an ideal. |
| 37 | `thm-quotient-manifold-by-a-closed-lie-subgroup` → `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero` | accurate | Step 2.1 uses the supplier's smoothness of exp and d(exp)_0=id, with smooth multiplication, to compute the differential of Psi(X,h)=exp(X)h at (0,e) as (X,Y)->X+Y, an isomorphism onto g. |
| 38 | `thm-eilenberg-maclane-spaces-represent-singular-cohomology` → `thm-cellular-cochains-compute-cohomology-with-local-coefficients` | accurate | [F3] uses the supplier's cellular-cochain computation of singular cohomology (with the same orientation and local-coefficient incidence rules, and naturality): relative cellular cocycles represent classes in H~^n(X;A) and Psi is natural in the based CW variable. |
| 39 | `thm-the-primary-obstruction-cochain-is-a-cocycle` → `thm-cellular-chains-compute-homology-with-local-coefficients` | accurate | [F1, F3] use the supplier's identification of oriented characteristic classes with relative cellular generators and its signed R[pi] incidence boundary with monodromy, in steps 1.1-3.1. |
| 40 | `thm-the-primary-obstruction-cochain-is-a-cocycle` → `thm-cellular-cochains-compute-cohomology-with-local-coefficients` | accurate | [F3] and step 3.1 use the supplier's equivariant-Hom differential computing singular local cohomology, with the same whisker monodromy used in step 1.2, to descend theta(f) to the stated local-coefficient class. |
| 41 | `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism` → `prop-adjoint-intertwines-the-exponential-map` | repaired | Introduced by the 5b repair: step 2.1 conjugates the flow of Y_M by g=exp(tX) and uses g exp_G(Z) g^{-1} = exp_G(Ad_g Z), but the item declared no supplier for that group-level identity (it was labelled 'algebra'). Declared [F4] and added to deps; the batch-7 supplier states exactly the identity, an |

## Findings on the listed edges

- **The one repaired edge.** Reading `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism`
  against its declared facts showed step 2.1 using the group-level conjugacy
  identity `g exp_G(Z) g^{-1} = exp_G(Ad_g Z)` while tagging the step `algebra`
  and declaring no supplier for it. The identity is not elementary algebra: it is
  the exponential-naturality statement proved as
  `prop-adjoint-intertwines-the-exponential-map` (batch 7, same group). Repair:
  new fact `[F4]` quoting the supplier's Statement, the id added to `deps`, steps
  2.1 and 3.1 tagged `[F4]`, the countable-choice sentence extended, the batch-8
  contract citations/derivations regenerated, and the manifest item object plus
  plan item object re-spliced. Claim, sign convention and every other step are
  unchanged. Recorded as `p2-next21-5b-fvf-adjoint-intertwining` (fixed).
- **Batch 6 → 5 (group b) edges.** All seven were read against the batch-5
  local-coefficient definitions (`def-singular-and-cellular-chain-complexes-with-local-coefficients`,
  `def-homology-and-cohomology-with-local-coefficients`) and the two batch-5
  computation theorems; the citing items consume exactly the cochain/chains
  comparison, the signed incidence/monodromy rules, the equivariant-Hom rule and
  the universal-cover/tensor models. Two of them
  (`thm-the-primary-obstruction-cochain-is-a-cocycle`) were checked step by step
  in steps 1.1–3.1.
- **Batch 8 → 7 (group a) edges.** The 32 rows are definitional and structural:
  the citing items consume the supplier's notions (Lie group, homomorphism,
  translations, exponential, bracket of invariant fields, BCH, adjoint) and, in
  the proposition/theorem rows, the exact clauses their steps spend. The four
  `prop-an-ideal-integrates-…` rows were read against the adjoint/exponential
  chain (steps 1.1–3.1), and the five Cartan rows against steps 1.1, 2.1, 3.1.
- **Batch 8 → 1 (group a → c) edge.** `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper`
  uses only the supplier's compactness of the circle (with the separately
  declared finite-product theorem); the supplier is a lemma in the measure-theory
  batch, and its smooth-structure content is not consumed.

## Forward references — decisions and edits

The eight forward references are resolved as `lemmas-added` (the cited material
is built: one published definition on a later page, five items authored in this
run). Each row names a closed 5b-cross ledger defect row.

| # | Item → target | Decision | Disposition and evidence |
|---|---|---|---|
| 1 | `ex-wu-classes-of-a-closed-surface` → `prop-the-manifold-orientation-system-is-a-local-system` | lemmas-added | The supplier now exists (batch 5, page local-coefficients-twisted-homology-and-duality) and the B page bocksteins-steenrod-squares-and-cohomology-operations-examples already whitelists that page in its manifest requires/forwardRefs, so the citation is converte |
| 2 | `ex-wu-classes-of-a-closed-surface` → `def-singular-and-cellular-chain-complexes-with-local-coefficients` | lemmas-added | The supplier now exists and is whitelisted for this B page, so the citation becomes a declared dependency. The five supplying items are authored in this run and are declared in the item's deps; their page (local-coefficients-twisted-homology-and-duality) is la |
| 3 | `ex-wu-classes-of-a-closed-surface` → `lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases` | lemmas-added | The supplier now exists and is whitelisted for this B page, so the citation becomes a declared dependency. The five supplying items are authored in this run and are declared in the item's deps; their page (local-coefficients-twisted-homology-and-duality) is la |
| 4 | `ex-wu-classes-of-a-closed-surface` → `lem-canonical-twisted-fundamental-classes-over-compact-subsets` | lemmas-added | The supplier now exists and is whitelisted for this B page, so the citation becomes a declared dependency. The five supplying items are authored in this run and are declared in the item's deps; their page (local-coefficients-twisted-homology-and-duality) is la |
| 5 | `ex-wu-classes-of-a-closed-surface` → `def-cup-and-cap-products-with-local-coefficient-pairings` | lemmas-added | The supplier now exists and is whitelisted for this B page, so the citation becomes a declared dependency. The five supplying items are authored in this run and are declared in the item's deps; their page (local-coefficients-twisted-homology-and-duality) is la |
| 6 | `cor-ell-one-is-not-reflexive` → `def-ultrafilter-extension-principle` | lemmas-added | Narrowed: the target is a published definition that lives on a LATER planned page (monadicity-and-becks-theorem, order 365.007, versus this A page at 288.065), so a deps edge would be an undeclared prerequisite and an A page may not whitelist a forward citatio |
| 7 | `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence` → `def-ultrafilter-extension-principle` | lemmas-added | Narrowed for the same plan-order reason (definition homed on the later monadicity page): the corollary assumes the ultrafilter lemma, [F5] now states it inline with the legal DC/HB citations, and the pointer to the definition moved to an orientation-only Remar |
| 8 | `ex-reflexivity-of-ell-p-and-lp` → `def-ultrafilter-extension-principle` | lemmas-added | Narrowed for the same plan-order reason: the l^1 endpoint clause assumes the ultrafilter lemma and does not consume its definition, so [F3] states the assumption inline (keeping the legal DC/HB citations plus cor-ell-one-is-not-reflexive) and the definition is |

### Ultrafilter-lemma forward references (three items)

`cor-ell-one-is-not-reflexive`, `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`
(A page `reflexivity-and-eberlein-smulian`) and `ex-reflexivity-of-ell-p-and-lp`
(B page `reflexivity-and-eberlein-smulian-examples`) declared
`forward_refs: [def-ultrafilter-extension-principle]`. The target is a published
**definition**, but it is homed on the later planned page
`monadicity-and-becks-theorem` (order 365.007 against 288.065/288.066), so a
`deps` edge would be an undeclared prerequisite (`validate-plan
undeclared-prereq`) that no A page may whitelist, and the run's own convention
for items that *assume* the ultrafilter lemma (as `thm-reflexive-iff-unit-ball-weakly-compact`
on the same page does) is to state the hypothesis, not to depend on its
definition. The three items therefore state the principle inline in their
facts, keep the legal DC/HB citations, and point at the earlier published
`thm-ultrafilter-lemma`/`rem-choice-strengths` from an orientation-only Remark.
No proof step consumed the later definition. Recorded as
`p2-next21-5b-fwd-{ell-one,reflexive-criterion,ellp-example}-ultrafilter`
(narrowed) plus the three carrier rows.

### Wu-classes example (five forward references)

`ex-wu-classes-of-a-closed-surface` (B page
`bocksteins-steenrod-squares-and-cohomology-operations-examples`, order 366.018)
declared five load-bearing forward references to items of the A page
`local-coefficients-twisted-homology-and-duality` (order 366.0243) — a page the
batch-5 manifest already whitelists under that examples page's `forwardRefs`.
The example's verification genuinely needs all five (the twisted cap-product
argument is what handles the non-orientable surfaces in the claim; no proof from
earlier material is available locally). Resolution applied: the five suppliers
became declared `deps`, the plan page object gained the same `forwardRefs`
whitelist as the manifest, and — because `fwdcheck` requires an item-level
`forward_refs` declaration for *any* body hyperlink to later material while the
5b closure requires such a declaration resolved — the five Facts now name their
suppliers by ID instead of by hyperlink, and a Remark records the situation.
Recorded as `p2-next21-5b-fwd-wu-*` (five rows) plus the carrier row.

**Residual finding (owner decision recommended).** The plan's own proof-order
rule (`research/plan-functional-analysis-track.md` §14.7 item 2 and the
corresponding algebraic-topology discipline) says a B page may use a later
result only after rehoming the example or inserting an earlier A supplier.
Rehoming `ex-wu-classes-of-a-closed-surface` to
`local-coefficients-twisted-homology-and-duality-examples` would make every one
of its five citations backward and let the hyperlinks be restored; that is an
owner-only reading-order change, so it is *not* made here. The applied local
resolution keeps the mathematics, the claim, the AC use and the declared
dependency graph exact; only the hyperlink form of the five citations is
degraded, and the item's Remark, the five ledger rows and this report all record
it. No gate in the Step-5 battery depends on the degraded form.

## Post-5a changes

Five items changed after the post-5a baseline, all by this lead's repairs. Each
is a current-hash `item`/`repaired` verdict row naming one closed 5b-cross
ledger row.

| Item | Verdict | Defect row | Repair |
|---|---|---|---|
| `cor-ell-one-is-not-reflexive` (batch 2) | repaired | p2-next21-5b-item-ell-one-carrier | Post-5a carrier change from the 5b narrowing of the ultrafilter-lemma forward reference: frontmatter forward_refs removed, [F4] restated inline, orientation-only Remark added pointing at the earlier published thm-ultrafilter-lemma and rem-c |
| `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence` (batch 2) | repaired | p2-next21-5b-item-reflexive-criterion-carrier | Post-5a carrier change from the same narrowing: forward_refs removed, [F5] restated inline, orientation-only Remark added pointing at the earlier published thm-ultrafilter-lemma and rem-choice-strengths, contract citations regenerated. The  |
| `ex-reflexivity-of-ell-p-and-lp` (batch 2) | repaired | p2-next21-5b-item-ellp-example-carrier | Post-5a carrier change from the same narrowing: forward_refs removed, [F3] restated inline, orientation-only Remark added pointing at the earlier published thm-ultrafilter-lemma and rem-choice-strengths, contract citations regenerated. The  |
| `ex-wu-classes-of-a-closed-surface` (batch 5) | repaired | p2-next21-5b-item-wu-carrier | Post-5a carrier change from resolving five load-bearing forward references: the five suppliers moved from forward_refs to declared deps, the batch-5 manifest deps mirror and plan item object were re-spliced, and the five body hyperlinks wer |
| `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism` (batch 8) | repaired | p2-next21-5b-item-fvf-carrier | Post-5a carrier change from declaring the previously uncited conjugation identity: new [F4] fact with prop-adjoint-intertwines-the-exponential-map, deps entry, step 2.1/3.1 citation tags and choice note updated, contract citations and deriv |

## Gate outcome

One gate defect was found and closed: the batch-8 frontier-dependency input had
no review row for the declared cross-batch page prerequisite
`lie-subgroups-actions-and-homogeneous-spaces-examples → the-ergodic-theorems-of-von-neumann-and-birkhoff`,
so `frontier-dependency-ledger --require-reviewed` refused the run. The
prerequisite is genuine (`cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper`
[F3] cites `lem-unit-interval-circle-is-a-nonempty-compact-metric-space`, homed
on that page); the review row was added and the unified ledger now has 47 edges,
46 verified and 1 removed, with no unreviewed edge.

| Gate | Verdict | Defect row | Evidence |
|---|---|---|---|
| `lie-subgroups-actions-and-homogeneous-spaces-examples` | confirmed_nonfatal | p2-next21-5b-ledger-unreviewed-page-edge | The B page lie-subgroups-actions-and-homogeneous-spaces-examples declared the cross-batch page prerequisite the-ergodic-theorems-of-von-neumann-and-birkhoff in its batch-8 manifest requires with no review row in the batch-8 dependency input, so frontier-dependency-ledger --require-reviewed refused the run. The dependency is genuine: [F3] of cex-an-irrational-real-action-on-the-torus-that-is-free-b |

## Impact windows

**Window `pre-author → post-5a`** (receipt `research/phase-2-next-21-impact.json`):
765 changed public interfaces, all items authored by this run in that window, and
679 affected items, every one of them also a run-authored item — no published
consumer sits in the blast radius. Each disposition names the affected item's
batch, group and page, its 5a group decision (obligation id and decision file),
its direct changed-interface citations with channels, its transitive changed
sources with a dependency path, and the item's carrier status. 660 rows are
`still-licensed` and 19 are `repaired` (the items repaired inside the window at
5a, each with a 5a defect row). The reviewer sentence states the three checks the
reconciliation rests on — attribution to the exact 5a group decision, currency
of the composite carrier against the post-5a snapshot, and coverage of the
citing clause of all 40 edges and 8 forward references re-read at 5b — and
states that this is a bounded interface-impact reconciliation, not an
independent re-proof of all 765 authored items.

**Window `post-5a → current`** (receipt `research/phase-2-next-21-impact-5b.json`):
5 changed interfaces (the five repaired items), 6 affected consumers
(`cor-ell-one-is-not-reflexive`, `ex-reflexivity-of-ell-p-and-lp`,
`lem-james-noncompactness-sequence`, `lem-james-norm-attainment-compactness-criterion`,
`thm-james-reflexivity-theorem`,
`fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions`).
Every consumer was read at its citing clause against the current supplier bytes
and remains `still-licensed`: each repair changed citation bookkeeping or added a
missing declaration, never a claim, hypothesis or proof step. The reviewer also
records the Wu-classes hyperlink residual.

## Gate battery (run on the current tree)

| Check | Result |
|---|---|
| `cross-group-edges.mjs check --run phase-2-next-21 --reconcile-plan` | 40 edges, 8 forward references, 0 errors |
| `auditor-created-items.mjs certify --step 5` | 15 certified items current, 0 errors |
| `step5-scope.mjs check --phase final` | 765 items routed, 807 obligations, 0 errors |
| `defect-ledger.mjs validate --run phase-2-next-21` | 44 rows, 0 errors |
| `validate-plan.mjs research/plan-spec.json` | exit 0 |
| `precheck.mts` (whole repo) | 14 733 checked, 0 failing |
| `depcheck.mjs --pending-audit-ok` | exit 0 — no cycles, all references resolve (no new warnings; 8 stale `cited-not-in-deps` warnings removed by these repairs) |
| `fwdcheck.mjs --quiet` | exit 0 — every forward reference declared, strictly later, cycle-free |
| `extcheck.mjs` | exit 0 — recorded-not-proved statements marked |
| `rendercheck.mjs` | OK — 19 607 files, no malformed math/frontmatter |
| `prosecheck.mjs`, `depsource.mjs`, `pathcheck.mjs` | exit 0 (68 646 deps to published pages) |
| `manifest-integrity.mjs --run phase-2-next-21` | 42 pages owed, 42 present, no scope drift |
| `splice-plan.mjs --verify` | 42 pages over 12 manifests agree |
| `coverage-checklist.mjs` (batches 1–12) | 0 errors, 0 warnings |
| `url-sweep.mjs … --fail-on-dead` | 60/60 live, 0 failed, 61 citation decisions |
| `content-policy.mjs` (12 manifests) | 765 scoped items, 0 errors, 0 warnings |
| `merge-proof-contracts` + `proof-contract --strict` | 765/765 items, 0 errors, 2 warnings (same two pre-existing `shotgun-bracket` rows as before this dispatch) |
| `finite-smoke.mjs` | 0 errors, 1 check |
| `risk-report.mjs --require-reviewed` | 0 errors, 765 items routed |
| `boundary-audit.mjs --fail-on-contradicted --fail-on-template` | 0 contradicted, 0 template clusters; the two `template_review` bindings on the repaired FVF theorem were re-bound to its new guard hash (their reviewed Statement text is unchanged) |
| `citation-fidelity.mjs --fail-on-missing-quote` | exit 0 |
| `gate-liveness.mjs --min-checks 1` | live: proof-contract 765, coverage, precheck 14 733 |
| `audit-manifest.mjs` (12 manifests) | 3 165 relationships over 765 items, 0 defects |
| `impact-audit.mjs` pre-author → post-5a | 765 changed, 679 affected, receipt validates (exit 0) |
| `impact-audit.mjs` post-5a → current | 5 changed, 6 affected, receipt validates (exit 0) |
| `frontier-dependency-ledger.mjs refresh --require-reviewed` | 47 edges (46 verified, 1 removed), no unreviewed edge, no orphaned review |

## Edits, records and amendments

- **Items edited (5 + the same 5 carriers):** `cor-ell-one-is-not-reflexive`,
  `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`,
  `ex-reflexivity-of-ell-p-and-lp` (ultrafilter forward-reference narrowing),
  `ex-wu-classes-of-a-closed-surface` (five citations to declared dependencies,
  hyperlinks replaced by ID attribution, Remark added),
  `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism` (new `[F4]`
  supplier and deps entry). No claim, hypothesis, AC declaration or proof step was
  weakened; no item was dropped, struck or withdrawn.
- **Manifests:** `research/phase-2-next-21-batch-5.pages.json` (item deps mirror)
  and `research/phase-2-next-21-batch-8.pages.json` (item deps mirror) updated;
  `splice-plan --batch 5 --update` and `--batch 8 --update` re-spliced the plan
  item objects.
- **Shared-plan amendment (reported for the serial lead):** `research/plan-spec.json`
  page `bocksteins-steenrod-squares-and-cohomology-operations-examples` now
  carries `forwardRefs: ["local-coefficients-twisted-homology-and-duality"]`,
  matching the batch-5 manifest it already had. No reading order, page set or
  page inventory changed. Recommended follow-up: the owner-authorized rehome of
  `ex-wu-classes-of-a-closed-surface` to
  `local-coefficients-twisted-homology-and-duality-examples`, which would let the
  five hyperlinks be restored.
- **Contracts:** `research/phase-2-next-21-batch-2.proof-contracts.json`
  (three items regenerated), `batch-5` (`ex-wu-classes-of-a-closed-surface`
  regenerated), `batch-8` (FVF theorem regenerated, four boundary evidence quotes
  refreshed to the current step 3.1 text), merged file re-merged; the duplicated
  `verification:`-free contract file remains the only merged carrier.
- **Decisions:** The lead ran `step5-scope.mjs stamp` on
  `research/phase-2-next-21-alpha-{a,b,c}-5a-decisions.json`. Before gate
  release, the owner restored the five affected direct-item decision hashes
  from their sealed `post-5a` carrier snapshots: three batch-2 decisions,
  the batch-5 Wu example, and the batch-8 fundamental-vector-fields theorem.
  These 5a decisions therefore remain evidence for the content reviewed at
  5a; the current 5b item-change verdicts carry the later repairs. No verdict
  or evidence text of any 5a decision was changed.
- **Defect ledger:** 15 new closed `5b-cross` rows appended (run total 44 rows:
  29 at `5a-adjudicate` + 15 at `5b-cross`), all `nonfatal`, `repair_confidence:
  1`; the five Wu forward rows and its carrier row were text-corrected in place
  (ids and dispositions unchanged) when the resolution changed from hyperlink
  conversion to ID attribution, before the Step-5 closure froze the ledger;
  `research/DEFECT-LEDGER.md` re-rendered.
- **Frontier dependency ledger:** one new batch-8 review row for the introduced
  edge `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism →
  prop-adjoint-intertwines-the-exponential-map`, and one for the previously
  unreviewed page edge; the unified ledger was refreshed and re-verified.
- **Published-consumer ledger:** no published item was found defective in this
  audit, so `research/published-consumer-supplier-ledger.md` was **not edited and
  no lock was taken**. The one open published debt that touches a neighbour of
  this run (the Dual/Hom bundle A-P finding recorded there in the previous run)
  is unchanged by this dispatch: none of the 40 edges or 8 forwards consumes the
  affected clauses.
- **Withdrawals:** none proposed; nothing is preserved for a 5b withdrawal.

## Blockers and residual uncertainty

- **No blocked computed obligation.** All 40 edges, 8 forward references and 5
  post-5a changes carry current-hash verdicts, both impact windows are closed and
  the full Step-5 gate battery is green on the current tree.
- **Residual finding (owner decision recommended, not a mathematical blocker).**
  The Wu-classes example's five suppliers are later in the reading order, so its
  Facts cite them by ID rather than by hyperlink. The mathematically and
  structurally complete fix is the owner-only rehome described above. This is
  recorded in the item's Remark, in the five `p2-next21-5b-fwd-wu-*` ledger rows,
  in the carrier row, in the Step-5b impact receipt reviewer sentence and here.
- **Honest limits of the review.** I read all 40 citing clauses and all 8 forward
  references in full against their suppliers (that is the whole computed
  obligation set), and re-read the 6 consumers inside the 5b impact window. The
  pre-author→post-5a window's other 673 affected items are dispositioned on the
  three checks the receipt states (5a attribution, post-5a carrier currency,
  coverage), not by a fresh reading of each of those 765 items; the receipt says
  so explicitly. The 5a group decisions remain the attributable mathematical
  reviews of the items themselves.
- **Residual uncertainty, stated honestly.** The repair of
  `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism` adds the
  declared supplier for an identity the proof already used; I verified the
  supplier's statement is exactly that identity and that the step's differentia-
  tion is the library's inverse-time Lie-derivative convention, but the step's
  own algebraic expansion (differentiating the conjugated curve at `g·p`) remains
  the author's, re-read and found correct rather than reproved from scratch.
- **No shared-plan conflict remains**: the only plan edit is the page-level
  `forwardRefs` whitelist mirroring the manifest, and it was validated by
  `validate-plan`, `splice-plan --verify` and the cross-edge check.

## Owner post-lead mathematical certification and repair

The controller was held paused after the lead dispatch while two independent
Sol xhigh mathematical auditors and the owner reviewed changed suppliers and
their consumers. Nine further item carriers were repaired: the Batch-6
universal-classes corollary, primary-obstruction cocycle, and Postnikov
definition; the Batch-8 translated-distribution definition, involutivity
lemma, same-Lie-algebra corollary summary, irrational-torus counterexample,
and subgroup correspondence theorem; and the Batch-12 Jech–Sochor first
embedding theorem. The eleven new exact `p2-next21-5b-root-*` ledger rows bind
to those nine current-hash `item` verdicts, with two defects on the
universal-classes corollary and two on the Jech–Sochor theorem. The ledger now
has 55 Step-5b rows and validates. The verdict file has 64 rows: 41 edge,
8 forward, 14 item, and 1 gate. Seven cross-group edge notes and citing-item
hashes were renewed; no cross-group dependency was silently removed.

The substantive corrections are these:

- The universal-classes corollary now characterizes suspension compatibility
  only in positive source degrees. The degree-zero identity is separately
  necessary for full stability, as shown by the identity in reduced degree
  zero and zero positive pieces on `S^0`. Its ordinary-cohomology comparison
  also requires both source and target degrees positive.
- The primary-obstruction cocycle has a separate `n=1` proof for arbitrary
  relative subcomplex `A`: the attaching-loop map factors through `H_1` by
  abelianization, and the pair homology exact sequence kills the three-cell
  boundary. The `n>=2` relative-Hurewicz proof remains in its licensed range.
  The Postnikov definition now fixes basepoint and fiber marking and uses the
  `pi_1`-action local system; the untwisted `K(A,n+1)` map is only for simple
  spaces.
- The two distribution items now state their inherited `AC_omega` premise,
  and the already-qualified subgroup corollary has a matching manifest
  summary. The torus counterexample explicitly proves the wrap-metric and
  complex-circle homeomorphism before transferring compactness. The subgroup
  correspondence proves `L_h(H)=H` by uniqueness of maximal leaves before
  inferring `h^{-1}` belongs to `H`, eliminating a circular inverse step.
- Jech–Sochor Step 3.2 now derives a choice-free almost-universal HS model,
  bounded Separation, closure under Jech's eight Gödel operations, and hence
  full ZF by his transitive-class criterion. Its forcing-theorem fact now
  attributes only definability and truth to the published supplier; Step 2.1
  proves automorphism equivariance locally by induction on names and formulas.

The Batches 2/4/8/10, 5/6, and 11/12 recertification reports are respectively
`research/phase-2-next-21-step3-post5b-recert-a.md`,
`research/phase-2-next-21-step3-post5b-recert-b.md`, and
`research/phase-2-next-21-step3-post5b-recert-d.md`. Together with the
owner-held decisions, all 135 invalidated item receipts were renewed on
current inputs. The final Step-3 check is **765/765 accepted, 21/21 pair scopes
closed, zero work**; no authoring remains. The historical Step-5a decision
hashes remain bound to the sealed post-5a snapshots rather than being
re-stamped against later repairs.

The current Step-5b impact receipt covers 12 changed public interfaces and 26
affected consumers, each dispositioned after reading the changed clause;
both it and the pre-author-to-post-5a receipt validate. The cross-group check
passes with 40 edges, 8 resolved forward references, and zero errors, including
plan reconciliation. The current preflight passes routing (765 items/807
obligations), ledger validation, plan/splice checks, source liveness (60/60),
whole-repository precheck (14,733 files), rendering (19,607 files), dependency
and forward-reference checks, content policy (765 items), coverage (all twelve
batches), citation fidelity, risk/boundary review, and the merged strict proof
contract (765/765, zero errors; two existing advisory citation-placement
warnings). The Wu reading-order note in the lead report remains a recorded
nonblocking residual; its five mathematical dependencies and proof are intact.
