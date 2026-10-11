# Batch 22 Step 3a adjudication

Run: `frontier-44-special-representation-examples-28-six-step`; group: `batch-22`; scope assignment group remains `n`.

17 touched obligations, no page/reader/refuter obligations; all 18 items require risk review. Exact pre-reader preimages for all 18 items were recovered from `research/frontier-44-special-representation-examples-28-six-step-continuation-inputs/items/` and match the immutable pre snapshot. Every current item initially matches its post snapshot. Reader and refuter reports are evidence only. No historical-byte ambiguity applies.

Review follows the generated dependency order.

## def-parabolic-hecke-module-and-antispherical-standard-basis

Verdict: accepted_repair; repair confidence 1. The scalar assignments satisfy every relation of the full normalized presentation and restrict to H_J. Balanced tensors have the specified right action; length-additive parabolic factorization supplies the indexing. J=empty, J=S and n=1 are admitted. Both signs and all module interfaces are preserved.

Confirmed defect: Hecke character extension lacked a justification for the embedded subalgebra presentation; constructing the map globally closes this nonfatal gap.

## def-singular-integral-category-o-block-and-stabilizer

Verdict: accepted_repair; repair confidence 1. The closed-chamber stabilizer is precisely W_J, and equality of dot labels is equivalent to membership in wW_J in both directions. For integral mu the integral-reflection group is W, so the central summand is one linkage block. Verma weight bounds split the stated standard extensions; swapping sections moves the unique labelled standard to the quotient and gives the higher-standard kernel. Rank zero, J=empty and mu=-rho obey the same argument; inherited AC is explicit.

Confirmed defect: Highest-weight structure asserted the projective-kernel axiom without the flag-reordering justification; the added standard-extension splitting supplies it.

## def-standard-parabolic-and-levi-subalgebras-from-simple-roots

Verdict: amended_repair; repair confidence 1. Nonsingularity of the principal Cartan submatrix splits h. Linearity of Killing duals places all opposite-root brackets in h_J. The intrinsic trace form is positive definite on the real coroot span, and invariance pairs normalized opposite root vectors nondegenerately. The grading and iterated adjoint argument prove nilradical maximality; the quotient by z_J+u_J is semisimple. Empty/full J and zero rank are valid; PBW slices are finite and AC is inherited.

Confirmed defect: The ambient Killing restriction was falsely identified with the intrinsic Levi Killing form; the intrinsic trace computation and normalized coroot pairing repair it.


## def-parabolic-category-o-for-a-standard-parabolic

Verdict: accepted_repair. Finite graded PBW pieces are p-stable because positive radical degree raises the zeta eigenvalue and the degree-zero Levi module is killed. A parabolic Verma quotient factors through the finite cyclic Levi simple, since the radical kills its highest vector and its whole Levi span. Local nilpotence of each f_j is equivalent to Levi local finiteness: the sl2 identity forces each simple factor to have dominant integral Levi weight. PBW with the finite radical span proves p-local finiteness, including extensions. Chevalley duality preserves locally finite Levi direct sums. J=empty gives ordinary O; J=S gives finite-dimensional modules, and the corrected sl2 example has M_p(0)=L(0).

Confirmed defect: The old maximal-degree extraction falsely inferred radical annihilation of a whole finite-dimensional span. Highest-vector annihilation and ideal stability now prove the required assertion.

Confirmed defect: The old local-finiteness converse relied on an unproved integrability-to-finite-dimension inference and a falsely claimed Levi-stable radical span. The sl2 calculation and PBW argument close the proof.

Confirmed defect: The old J=empty example claimed a nonzero kernel although generalized and ordinary Vermas coincide. The full-parabolic sl2, lambda=0 example is a valid counterexample.


## lem-facet-tensor-weight-exclusion

Verdict: reviewed_no_defect. Transporting the tensor-weight equality gives gamma norm at most the translating extremal norm. Dominant distance comparison gives the opposite inequality; equality and regularity force x=(w-prime)^(-1)w into W_J. Thus the two singular labels coincide and the extremal weight has multiplicity one. Tensor flags and central-character orbits supply exactly the claimed factor; the converse weight exists because w(mu-lambda) lies in W nu. mu=-rho and J=empty behave correctly. AC is inherited, with no new infinite selection.


## lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars

Verdict: accepted_repair. The span of H_u for u in W_J is the subalgebra, and the standard basis partitions into a free left H_J basis, proving tensor independence. Adjacent-position swapping can disrupt only one consecutive-value pair inside a J block, giving xs=s_r x with an ascent. All three action branches and both bar-balancing scalar identities follow. Quadratic multiplication expands nonreduced subwords; pair deletion makes their labels reduced subwords below x, so the bar top coefficient is one. J=empty/full and n=1 are valid; no AC.

Confirmed defect: The old basis argument asserted H_s H_u=H_su without a length condition. The free left-module decomposition now proves the basis.

Confirmed defect: F4 and the bar argument falsely declared every subword reduced; s1 s1 occurs in the reduced word s1 s2 s1. Quadratic expansion and deletion fix the argument.

Confirmed defect: The old formula x(x^-1 s x)=xs was false; the corrected left transposition is xsx^-1.

Confirmed defect: The old left-descent fact claimed each individual third-value inversion was unchanged, rather than their total. The corrected total yields the valid descent criterion.

Confirmed defect: The old excluded-order argument claimed r+1 still preceded r after swapping their adjacent positions. The corrected argument excludes that order already in x.


## thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis

Verdict: accepted_repair. On each finite lower ideal bar squared gives R bar(R)=I; unitriangular invertibility gives the reversed product needed by induction. Increasing the length gap constructs coefficients above x first. Anti-invariance makes the constant Laurent coefficient zero and its positive part solves c-bar(c)=a. Maximal-support uniqueness and finite unitriangular inversion prove both bases. The trivial/full parabolic and rank-zero generator cases reduce to the same calculation, without AC or unstated positivity.

Confirmed defect: The old bar-squared calculation labelled the product in the reversed order without justifying invertibility. The corrected finite calculation supplies both inverse identities.

Confirmed defect: The old text descended on the length gap while starting at gap zero. Increasing the gap is the actual terminating induction.


## thm-parabolic-category-o-is-a-highest-weight-category

Verdict: reviewed_no_defect. Every one of the 12 steps was checked. Finite length constructs the least quotient kernel and its reflector; ordinary essential covers remain covers after reflection. Parabolic standard-costandard Hom is obtained with the correct quotient/inclusion arrows, and weight lifts plus Levi splitting prove Ext vanishing in both comparable cases and the incomparable case. Bounded induced projectives represent exact Levi Hom and have actual PBW flags. Their graded N-summands are free by bounded-above graded Nakayama, and removing highest-degree generators constructs standard submodules and terminates at finite rank. Reciprocity counts Hom along flags and composition series; standard-extension swaps put the labelled standard last. Finite triangular matrices give Grothendieck bases and character injectivity. Empty/full J and empty block labels cause no exception; AC is explicitly inherited.


## thm-translation-to-the-wall-on-verma-simple-and-projective-objects

Verdict: accepted_repair. Exact central projection retains the single facet-exclusion standard. Chevalley D(E), distinct from the ordinary adjoint dual E*, commutes with tensor translation and yields costandards. For nonminimal w the reflection beta=-w alpha_s gives a positive integral one-step linkage, and exact translation makes the embedding an endomorphism isomorphism. The standard/costandard sandwich proves simple-or-zero before unique-minimal-coset survival. Orbit lower bounds and Verma upper bounds prove singular antidominant simplicity. Translation of L(-rho) has one flag section per distinct label; the correct E0 dual and adjunction split off P(mu), and root-reflection embeddings force the projective complement to have zero flag. Positive signs remain strict in upper closure. J=empty/S, mu=-rho, and the sl2 wall cases match all three conclusions; AC is inherited.

Confirmed defect: F6 confused the ordinary dual with the Chevalley dual in the tensor identity. The new D(E) identity is weight preserving and g-linear.

Confirmed defect: The cited antidominant corollary assumed strict negative pairings and could not justify singular M(mu) or M(-rho). Current orbit/weight bounds prove their simplicity locally.

Confirmed defect: The former big-projective calculation used the wrong translating dual weight and unsupported linkage assertions. E0*=L(-mu-rho), reflection embeddings, essential-cover splitting and the zero-flag complement now establish it.

Confirmed defect: The old nonminimal proof inferred strong linkage from weight dominance alone. The explicit positive-root reflection and integral pairing supply the actual linkage.

Confirmed defect: The old survival argument assumed unsupported Bruhat composition bounds. The simple-or-zero sandwich and unique minimal coset representative give a complete proof.

Confirmed defect: The old remark substituted ordinary closure for upper closure and falsely included the wall -1 in F_0^+. The corrected strict positive-sign condition agrees with the published definition and Chen Definition 3.9 and Example 3.16.


## def-parabolic-kazhdan-lusztig-basis-and-polynomials

Verdict: reviewed_no_defect. The canonical coefficients are uniquely defined by the two preceding bases. The shifted-polynomial assertion is discharged by the reduction theorem, not assumed by the basis construction: length additivity cancels the extra z length in the antispherical formula, and the spherical formula keeps the original length gap. The source dictionary assigns spherical to Deodhar u=-1 and antispherical to u=q with inverted indices. J=empty recovers ordinary coefficients; J=S gives one diagonal entry. No AC is added.


## thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones

Verdict: amended_repair. The antispherical projection has top coefficient one and lower coefficients in vZ[v], since zy=x is excluded by unique factorization. The integral eigenline recurrence a_su=v^-1 a_u proves C_J spans the simultaneous eigenspace over A, and its top coefficient and bar invariance identify the ordinary longest canonical element. Disjoint cosets prove that Theta has the full integral image and is injective. A reduced subword for left-minimal y cannot begin in the initial J word, proving the preimage has support y<=x; ordinary positivity-in-v then permits canonical uniqueness. Both shifted families lie in Z[q] by the exact length-additive parity calculation. The empty/full parabolic cases and zero off-diagonal coefficients are covered. Libedinsky-Williamson section 2.7 supports both formulas; no AC.

Confirmed defect: F2 reversed ordinary KL ascent/descent cases and F6 read the eigenvalue in the wrong case. Current descent computation has the correct eigenvalue.

Confirmed defect: The old antispherical identification invoked canonical uniqueness without checking vZ[v] coefficients. The new strict zy<x argument checks exactly that condition.

Confirmed defect: The old fraction-field eigenline argument did not prove the full integral eigenmodule image. The recurrence and direct H_J coset decomposition now prove integral surjectivity and injection.

Confirmed defect: The old spherical comparison asserted lower-ideal support and coefficient identification without proof. Disjoint cosets and the reduced-subword argument provide both required facts.

Confirmed defect: Chen Lecture 9 section 3 contains translation theory but no claimed Hecke/KL normalization discussion. Alpha removed this inaccurate source record from the item and owning manifest; the verified section 2.7 source remains.


## cex-spherical-and-antispherical-normalizations-give-different-polynomials

Verdict: accepted_repair. The needed pairs are comparable by reduced subwords, with gaps one or two, so ordinary degree/parity forces the monomials. The two-term antispherical sum is v^2-v*v=0 while spherical reduction gives p_s1,w0=v^2. At one they give 0 and 1, excluding a unit multiple in either direction. The identity and parabolic representatives are valid and no gap-three coefficient is used; the zero is actual cancellation.

Confirmed defect: F2 omitted the immediate reduced-subword comparison s1<s2s1 used in the witness calculation; the reader supplied it.

## ex-parabolic-kl-polynomials-for-s-three-modulo-s-two

Verdict: amended_repair. The S3 ranks are 1,2,2,1, with all four cross-rank intermediate covers; the left minima are e,s2,s2s1. Recomputing the six entries in each family gives N=[[1,v,0],[0,1,v],[0,0,1]] and M=[[1,v,v^2],[0,1,v],[0,0,1]]. The off-support zeros and all diagonals agree with the basis theorem. Gap-one/two ordinary values follow from parity and degree, without assuming a gap-three value or positivity. Specialization at one gives the stated two matrices; no AC.

Confirmed defect: The old F2 described three-edge saturated chains as length two and omitted the cross-rank comparisons actually used by the table. The rank/subword description is correct.

## thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials

Verdict: accepted_repair. Exact translation takes a regular composition series to a singular one; only the unique minimal coset label survives, so no sum over a coset is needed. Switching from the antidominant to dominant base right-multiplies both indices by w0. The current ordinary multiplicity proof (BGG plus the projective-value supplier), its actual dominant-base convention and the projective coefficient-comparison proof were read. Inversion and conjugation-by-w0 preserve the ordinary coefficients. The explicit consecutive-value-block argument shows k(w)=w_J w^-1 w0 is left-minimal, including J=empty/full; spherical reduction then gives exactly the displayed ordinary pair. BGG supplies the projective version. AC is inherited. The historical Open obligation remark and its unresolved receipt status are preserved; this current mathematical review does not refresh or clear that prior owner escalation.

Confirmed nonfatal defect: The prior dictionary asserted the longest/shortest-left conversion without demonstrating it; the explicit position reversal followed by within-block value reversal now supplies the immediate type-A verification.

## ex-translation-to-a-singular-wall-in-type-a-two

Verdict: accepted_repair. The sl2 data (-2,-1) have full stabilizer and a single singular simple/projective. PBW and ef^k v=k(l-k+1)f^(k-1)v prove 0->M(-2)->M(0)->L(0)->0, so BGG gives the two P(-2) flag factors. Exact translation gives two projective P(-1) factors, and their extension splits. For sl3 lambda=-2rho is regular antidominant and mu+rho=-omega2 has stabilizer {1,s1}. The right minima are 1,s2,s1s2 and their products with w0 are w0,s1s2,s2. All needed ordinary gaps are at most two; the resulting lower all-ones matrix, its projective columns, and the stated weight differences were recomputed. Nonminimal s1 and w0 vanish. Inherited AC and zero functor images are explicit.

Confirmed defect: The old sl3 translation example lacked an explicit regular source weight; lambda=-2rho makes the datum definite.

Confirmed defect: The strict-antidominant corollary cannot be applied to -rho. The repaired F2 cites the locally proved most-singular-block theorem.

Confirmed defect: The definition of a Verma module did not justify the old rank-one P(-2) flag citation. The sl2 PBW exact sequence and BGG now derive it.

Confirmed defect: The old F3 attributed all S3 values to an ordinary degree bound that alone does not determine the gap-three case. It now states and proves only the gap-at-most-two values actually used.


## thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials

Verdict: accepted_repair. The Weyl-character theorem is applied to semisimple s_J with the Levi center weight retained. rho-rho_J vanishes on the Levi coroots and is W_J-fixed; converting the outside negative-radical PBW denominator to the full symmetric denominator gives exactly the alternating ordinary Verma character sum. Ordinary simple characters in the finite block are independent by the maximal-highest-weight monomial argument, so this character equality determines simple coefficients. The positive integral pairing criterion is equivalent to left-minimal y by the explicit type-A inversion-position argument. The ordinary dominant-base multiplicity and regular-translation interfaces are current and match the exact uses. Parabolic reciprocity supplies projective flags. Native antidominant labels are yw0, with shortest encoding w_J y w0; transporting both indices gives the stated reversed matrix rather than n_a,b itself. J=empty/full and zero off-support entries work, and no Koszul duality or grading is consumed. Historical escalation receipt status in the Open obligation remark is preserved, not resolved by this local review.

Confirmed defect: F2 incorrectly described the negative-root PBW denominator as the denominator of u_J-free modules. It now names the negative outside radical v_J.

Confirmed defect: The old label proof omitted the elementary root-sign to type-A left-descent calculation. The current inversion-position explanation closes that immediate step.


## thm-parabolic-kazhdan-lusztig-character-formula

Risk-only review; no routed decision. The ordinary dominant regular parabolic conventions give M=N L with standard rows and simple columns. On the finite left-minimal Bruhat poset, U=N-I is nilpotent, so the finite signed product-chain sum gives N^-1 over Z, with support x<=y. Reading rows of N^-1 gives exactly the character formula; its weights remain the dot labels of the chosen base. Relabelling both coordinates by lf is permutation conjugation, so its inverse relabels by the same permutation and the actual antidominant weight is (w_J a).lambda_anti. Empty/full J yield valid finite matrices, including the one-label case. This is a weighted incidence inverse, not an unsupported Mobius or Koszul assertion; inherited AC is explicit. The carrier and contract are untouched apart from this required risk_review, so it owes no decision.

## ex-a-small-parabolic-category-o-character-formula

Verdict: accepted_repair. All four integer products N*N^-1=N^-1*N=A*B=B*A=I were recomputed, with N upper bidiagonal and A the lower all-ones chain. The generalized-standard basis is supplied by the parabolic highest-weight theorem rather than the ordinary Verma basis. The explicit rho=alpha1+alpha2 reflections give weights 0,-alpha2,-alpha1-2alpha2; reading the inverse rows produces precisely the displayed three parabolic characters. The singular inverse gives M(mu), M(s2.mu)-M(mu), M(s1s2.mu)-M(s2.mu). Only the all-ones singular matrix is a zeta incidence matrix, so its Mobius comparison is correctly limited to that chain. The +1 corner of the parabolic inverse differs from the singular zero. No singular/parabolic equivalence or grading is asserted; AC is inherited.

Confirmed nonfatal defect: F4 attributed generalized-standard Grothendieck bases to the ordinary Verma-basis supplier. The new dependency and exact parabolic highest-weight citation support the actual objects.

Source follow-up for `ex-parabolic-kl-polynomials-for-s-three-modulo-s-two`: amended_repair. The source metadata named nonexistent Section 7.7 for Exercise 7(a), printed p.163. The opened book places this in Chapter 5 exercises; Alpha corrected the locator and exact gap-at-most-two statement in the item and owning manifest. The mathematical body and computed table are unchanged.

Level-0 source and ledger follow-up for `def-standard-parabolic-and-levi-subalgebras-from-simple-roots`: amended_repair. The full current structural proof is unchanged. Its independently confirmed pre-reader defects are recorded separately:

- The original root-line argument inferred membership in h_J merely from the vector-space splitting. The repaired linear Killing-dual expansion gives membership and handles coroot rescaling.
- The original text falsely asserted alpha+beta belongs to Phi_J or zero for all subsystem roots. If the sum is neither a root nor zero its root bracket vanishes, as now stated.
- The original grading-element argument falsely asserted outside-simple-root combinations vanish on h_J. Assigning values in the full simple-root dual basis proves zeta exists without that assertion.
- The old nilradical argument did not exhibit a vector in the ideal on which the asserted nonzero eigenvalue persists. The iterated adjoint degree-one component explicitly contradicts ideal nilpotence.
- The metadata attributed triangular decomposition and concrete type-A conventions to Section 2.1 of Shuffling. The source has general semisimple triangular data in Section 2.2; Alpha corrected the locator and limited its claimed support in item and manifest.

## Dependency input reconciliation and outside consumers

The current manifest assigns the regular KL suppliers to batch 21, although the two historical Open obligation remarks refer to batch 14. The six computed cross-group edges (one page and five item uses) were checked as above and recorded in the owned input. The input previously contained 26 records for consumers outside the current batch-22 inventory; those records are preserved verbatim in the appendix below for Step 3b to rehome, rather than treated as reviews by this dispatch. No item, withdrawal or historical escalation receipt was removed.

The only reader Definition delta is the Hecke coset terminology; its W_Jw/wW_J predicates and character/module interfaces are unchanged. The outside direct dependency/reference consumer `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix` was inspected at its Statement, F2, and steps1.1-1.2: it already uses shortest RIGHT w_A modulo K and shortest LEFT d(A)=w_A^-1, with sign coefficients after inversion. Its actual use remains valid; no consumer repair or further Statement/Definition hop is required. The other changed definitions retain their Definition bytes; their repairs are explanatory arguments in Remarks. The repaired finite example source weight is consumed only by the assigned small-character example, already reviewed. Alpha source-metadata edits preserve all mathematical interfaces.

No defective published carrier was confirmed in this focused review, so no published ledger edit or lock was needed. This does not claim an audit of outside consumer proofs or the transitive Hodge/Soergel foundation.

### Preserved prior dependency records for Step 3b

```json
[
  {
    "kind": "item",
    "consumer": "prop-schur-functor-compares-first-level-branching-with-hecke-restriction",
    "supplier": "def-type-a-q-schur-algebra-and-weyl-modules",
    "status": "verified",
    "evidence": "Required claim: the type-A q-Schur algebra S(d,n)=End_H(M) with its dominance-cellular basis, Weyl modules and their nonzero simple heads over a field. Now authored on the batch-20 A page and read on disk on 2026-10-10: the definition matches the required claim (S(d,n)=End_H(M), semistandard basis, Weyl modules W^lambda with simple heads L^lambda, dominance-unitriangular decomposition matrix). Actual use: prop-schur [F1], cited in step 1.1 and carried by the weight idempotent e of weight (1^r) and the first-level comparison; the Weyl-module side of step 2.1 uses [F4] on the same object."
  },
  {
    "kind": "item",
    "consumer": "prop-schur-functor-compares-first-level-branching-with-hecke-restriction",
    "supplier": "def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras",
    "status": "open",
    "evidence": "Required claim: the idempotent e of the (1^r) weight, the corner eS(n,r)e isomorphic to H(r), and the exact Schur functor with left adjoint h. Re-checked on disk on 2026-10-10 22:50: an item file now exists for the supplier but it is unfinished (the definition ends at the right-module Schur functor, with no facts, proof or remarks yet), so the row stays open. Inspection of the partial definition: it supplies e as the projection onto M^omega, eSe = H via left multiplication, and the exact Schur functor in the right-module convention F(X)=Xe, explicitly not using the left-module formula eX; prop-schur needs the exact functor f with left adjoint h on left modules (V -> eV) in its steps 1.1-1.3 and 2.1, so the left/right convention interface must be reconciled when the supplier is completed. Consumer owner: batch-22 alpha; supplier owner: batch-20 alpha."
  },
  {
    "kind": "item",
    "consumer": "prop-schur-functor-compares-first-level-branching-with-hecke-restriction",
    "supplier": "thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules",
    "status": "open",
    "evidence": "Required claim: the Schur functor sends Weyl modules to Specht modules and simple modules to Hecke simples or zero. Consumer prop-schur cites this item as part of [F4] in proof steps 2.1 and 2.2 (transfer of the surviving first-level simples to the Hecke side and the q=1 group case). Supplier is scaffolded on the batch-20 A page (dependency_level 5) and no item file exists yet; the row stays open until the supplier is authored and this use is reconciled. Natural owner: the batch-20 alpha."
  },
  {
    "kind": "item",
    "consumer": "prop-schur-functor-compares-first-level-branching-with-hecke-restriction",
    "supplier": "def-quantum-characteristic-of-an-invertible-hecke-parameter",
    "status": "verified",
    "evidence": "Required claim: the quantum characteristic e of an invertible Hecke parameter, with e=char(F) at q=1 in positive characteristic and e=infinity in characteristic zero. Now authored on the batch-20 A page and read on disk on 2026-10-10: the definition states exactly this (least e>=2 with [e]_q=0, e=char(F) for q=1, e=infinity in characteristic zero). Actual use: the statement of prop-schur (the parameter l governing the Hecke side) and the q=1 specialization [F5] of step 2.2 where l=p."
  },
  {
    "kind": "item",
    "consumer": "prop-schur-functor-compares-first-level-branching-with-hecke-restriction",
    "supplier": "prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one",
    "status": "open",
    "evidence": "Required claim: at q=1 the Hecke Specht theory specializes to the group Specht theory of the symmetric group. Consumer prop-schur cites this item as [F5] in proof step 2.2 (reading the comparison in terms of kS_r-modules so that the Kleshchev first-level multiplicity applies at e=p). Supplier is scaffolded on the batch-20 A page (dependency_level 5) and no item file exists yet; the row stays open until the supplier is authored and this use is reconciled. Natural owner: the batch-20 alpha."
  },
  {
    "kind": "page",
    "consumer": "modular-branching-and-the-good-node-crystal",
    "supplier": "type-a-hecke-specht-modules-and-cellular-bases",
    "status": "open",
    "evidence": "Declared page prerequisite of the canonical plan and of the batch-22 manifest. The actual in-run item uses are the five batch-20 edges recorded above (q-Schur algebra and Weyl modules, Schur idempotent and Schur functor, Weyl/simple transfer, quantum characteristic, and the q=1 specialization); no other batch-20 item is consumed by this pair, and the B page consumes only batch-22 items. Re-checked on disk on 2026-10-10: def-type-a-q-schur-algebra-and-weyl-modules and def-quantum-characteristic-of-an-invertible-hecke-parameter are now authored and their required claims verified, while the other three suppliers of prop-schur remain unauthored, so the page edge stays open until the supplier page is complete and the three open rows are reconciled. No item file for the page exists yet. No cycle arises (batch-20 orders 1569/1575 precede 1573/1574)."
  },
  {
    "kind": "page",
    "consumer": "modular-branching-and-the-good-node-crystal",
    "supplier": "cores-quotients-and-blocks-of-symmetric-groups",
    "status": "open",
    "evidence": "Declared page prerequisite of the canonical plan and of the batch-22 manifest, currently unreferenced at item level: no item of this pair consumes a cores-quotients item, matching the design's SYMR-9 item table, which uses only the residue/signature combinatorics, the modular JM idempotents and the q-Schur comparison. Recorded for owner/Alpha reconciliation of the shared canonical requires list; the declared edge is backward in the plan order (batch-21 orders 1571/1572 precede 1573/1574) so it introduces no cycle."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras",
    "status": "open",
    "evidence": "Indirect use: the proof step 1.1 of thm-kleshchev uses prop-schur [F2] (the Schur-functor comparison), whose own proof steps 1.1, 1.2 and 2.1 use this supplier [F2] for the idempotent e, the isomorphism eS(n,r)e=H(r) and the exact functor f with adjoint h. No separate use beyond the transitive one; the row stays open until the supplier is authored and the comparison reconciled. Owner: batch-20 alpha; consumer owner: batch-22 alpha."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules",
    "status": "open",
    "evidence": "Indirect use: thm-kleshchev proof step 1.1 consumes prop-schur [F2], whose steps 2.1-2.2 use this supplier [F4] (f(W^lambda)=S^lambda and f(L_n(lambda))=D^lambda, exactness) to transfer first-level multiplicities to the Hecke side. Row stays open until the supplier is authored and the transfer reconciled. Owner: batch-20 alpha; consumer owner: batch-22 alpha."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one",
    "status": "open",
    "evidence": "Indirect use: thm-kleshchev proof step 1.1 consumes prop-schur [F2], whose step 2.2 uses this supplier [F5] to specialize the comparison to kS_n/kS_{n-1} at q=1 (e=p), which is the form thm-kleshchev feeds into the Kleshchev 1997 first-level multiplicity. Row stays open until the supplier is authored and the specialization reconciled. Owner: batch-20 alpha; consumer owner: batch-22 alpha."
  },
  {
    "kind": "item",
    "consumer": "thm-conormal-node-composition-multiplicities-under-residue-induction",
    "supplier": "thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 827dac821ea3789a6e2646324231069a2097e94510211a125f54b86819060379 supplier 0ab5cf11a59a6cc31e1049073223530d2220c6752676e94fc9d37364f198a6fa"
  },
  {
    "kind": "item",
    "consumer": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
    "supplier": "def-type-a-q-schur-algebra-and-weyl-modules",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 6c3c556e9225141ebbeeec5e7014aa69178f581fe867acacf29034d35e09bd70 supplier 37c120cf383f18b5a44a1209bd520ee7ab613a75d8ff5e163eb5ed78f4ee6275"
  },
  {
    "kind": "item",
    "consumer": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
    "supplier": "def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 6c3c556e9225141ebbeeec5e7014aa69178f581fe867acacf29034d35e09bd70 supplier be4a123b1197d2f2b230725bf5bd14512298591984a96911433db6cf3e549103"
  },
  {
    "kind": "item",
    "consumer": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
    "supplier": "lem-dj-bridge-murphy-cellular-basis-and-cell-form",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 6c3c556e9225141ebbeeec5e7014aa69178f581fe867acacf29034d35e09bd70 supplier f31c60e6060a12bdc3f1acb5ebf80f7b2e12d7cba4c0531e4635c0e98251ef2a"
  },
  {
    "kind": "item",
    "consumer": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
    "supplier": "thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 6c3c556e9225141ebbeeec5e7014aa69178f581fe867acacf29034d35e09bd70 supplier 0ab5cf11a59a6cc31e1049073223530d2220c6752676e94fc9d37364f198a6fa"
  },
  {
    "kind": "item",
    "consumer": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
    "supplier": "thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 6c3c556e9225141ebbeeec5e7014aa69178f581fe867acacf29034d35e09bd70 supplier d0501b139ae8c9c06a0ff203b21407dc868727130f469b223a9427fc6de9d425"
  },
  {
    "kind": "item",
    "consumer": "prop-schur-functor-compares-first-level-branching-with-hecke-restriction",
    "supplier": "lem-dj-bridge-murphy-cellular-basis-and-cell-form",
    "status": "verified",
    "evidence": "Current supplied clause and literal use checked by the responsible supplier reviewer with whole supplier and consumer holds preserved; research/frontier-44-special-representation-examples-28-owner-supervision-recovery-20261011/repair_cell_head_classification/current20-absent-cross-edge-used-clause-verdicts.json SHA256 8e4a54a2fce0bd9b4d6bb335fe2d21cd3d52e4d00b0ee994225dde74ce8cc83b; consumer 47242e052042cbbea491b2911ed940b9107ee2f3508e9af383617829cc29d7fe supplier f31c60e6060a12bdc3f1acb5ebf80f7b2e12d7cba4c0531e4635c0e98251ef2a"
  },
  {
    "kind": "item",
    "consumer": "lem-type-a-modular-root-interval-essential-subset-basis-and-count",
    "supplier": "def-cellular-algebra-basis-and-cell-module",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: def-cellular-algebra-basis-and-cell-module exports Definition 'Let $R$ be a commutative ring with $1$ and $A$ a unital $R$-algebra ([[def-algebra-over-a-commutative-ring]]) that is free as an $R$-module on a finite set $C=\\{c^{\\lambda}_{st}:\\lambda\\in\\Lambda,\\ s,t\\in T(\\lambda)\\}$, where $(\\Lambda,\\unrhd)$ is a finite poset ([[def-partial-order]]; its strict order is written $\\rhd$) and each $T(\\lamb'; consumed/declaration location items/lem-type-a-modular-root-interval-essential-subset-basis-and-count.md:43 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 33d002073af898e47c401bdfb9eaf7b41a8f0b419299e17c674a1cb3632aa336; supplier SHA256 d021334df619b1d9369f181d97a7300ea8d545dd0c3ee77c6a445fa998a8c9d8. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-lem-type-a-modular-root-interval-essential-subset-basis-and-count.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "lem-type-a-modular-root-interval-essential-subset-basis-and-count",
    "supplier": "def-type-a-q-schur-algebra-and-weyl-modules",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: def-type-a-q-schur-algebra-and-weyl-modules exports Definition 'Let $R$ be a commutative ring, $q\\in R^{\\times}$, $d,n\\ge0$, and $H=H_{R,q}(S_n)$ ([[def-generic-type-a-hecke-algebra]]). Let $\\Lambda(d,n)$ be the set of compositions $\\mu=(\\mu_1,\\dots,\\mu_d)$ of $n$ (so $\\mu_i\\in\\mathbb N$ and $\\sum_i\\mu_i=n$). For $\\mu\\in\\Lambda(d,n)$ let $m_\\mu=\\sum_{w\\in S_\\mu}T_w$ ([[def-murphy-elements-and-murphy-t'; consumed/declaration location items/lem-type-a-modular-root-interval-essential-subset-basis-and-count.md:41 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 33d002073af898e47c401bdfb9eaf7b41a8f0b419299e17c674a1cb3632aa336; supplier SHA256 37c120cf383f18b5a44a1209bd520ee7ab613a75d8ff5e163eb5ed78f4ee6275. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-lem-type-a-modular-root-interval-essential-subset-basis-and-count.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "lem-type-a-modular-root-interval-essential-subset-basis-and-count",
    "supplier": "thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra exports Statement 'Let $F$ be a field and $A$ a finite-dimensional unital cellular $F$-algebra with cellular basis $(C,\\Lambda)$ over the finite poset $\\Lambda$ ([[def-cellular-algebra-basis-and-cell-module]]). For $\\lambda\\in\\Lambda$ put $D^{\\lambda}:=C^{\\lambda}/\\mathrm{rad}\\,C^{\\lambda}$, where $\\mathrm{rad}\\,C^{\\lambda}$ is the radical of the cell form '; consumed/declaration location items/lem-type-a-modular-root-interval-essential-subset-basis-and-count.md:43 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 33d002073af898e47c401bdfb9eaf7b41a8f0b419299e17c674a1cb3632aa336; supplier SHA256 507a57c6b1878bb2e2561e02b47b461d0b3983bdc84b64bdee06b664385c99bd. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-lem-type-a-modular-root-interval-essential-subset-basis-and-count.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "def-type-a-q-schur-algebra-and-weyl-modules",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: def-type-a-q-schur-algebra-and-weyl-modules exports Definition 'Let $R$ be a commutative ring, $q\\in R^{\\times}$, $d,n\\ge0$, and $H=H_{R,q}(S_n)$ ([[def-generic-type-a-hecke-algebra]]). Let $\\Lambda(d,n)$ be the set of compositions $\\mu=(\\mu_1,\\dots,\\mu_d)$ of $n$ (so $\\mu_i\\in\\mathbb N$ and $\\sum_i\\mu_i=n$). For $\\mu\\in\\Lambda(d,n)$ let $m_\\mu=\\sum_{w\\in S_\\mu}T_w$ ([[def-murphy-elements-and-murphy-t'; consumed/declaration location items/thm-kleshchev-first-level-branching-multiplicity.md:57 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 a66df30e7be8e234bb5ba913f58c5bd23dc9a385f8e6e3910dce667f290b2836; supplier SHA256 37c120cf383f18b5a44a1209bd520ee7ab613a75d8ff5e163eb5ed78f4ee6275. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-thm-kleshchev-first-level-branching-multiplicity.json, research/frontier-44-special-representation-examples-28-step3b-review-thm-kleshchev-first-level-branching-multiplicity.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "lem-dj-bridge-murphy-cellular-basis-and-cell-form",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: lem-dj-bridge-murphy-cellular-basis-and-cell-form exports Statement 'For every commutative ring $R$, every $q\\in R^\\times$, and every partition $\\lambda\\vdash n$ with row symmetrizer $m_\\lambda=x_\\lambda$, put $m_{st}:=T_{d(s)}^*m_\\lambda T_{d(t)}$ for standard $\\lambda$-tableaux $s,t$, where $d(t)\\in D_\\lambda$ is the element with $t^\\lambda\\cdot d(t)=t$. Then: 1. $\\{m_{st}:\\lambda\\vdash n,\\ s,t\\in\\operat'; consumed/declaration location items/thm-kleshchev-first-level-branching-multiplicity.md:59 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 a66df30e7be8e234bb5ba913f58c5bd23dc9a385f8e6e3910dce667f290b2836; supplier SHA256 f31c60e6060a12bdc3f1acb5ebf80f7b2e12d7cba4c0531e4635c0e98251ef2a. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-thm-kleshchev-first-level-branching-multiplicity.json, research/frontier-44-special-representation-examples-28-step3b-review-thm-kleshchev-first-level-branching-multiplicity.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell exports Statement 'Let $R$ be a commutative ring, $q\\in R^\\times$ and $\\lambda\\vdash n$, and write $\\mu=\\lambda'$, $L=\\ell(w_\\lambda)$ and $N=\\ell(w_0(S_{\\lambda'}))$. Let $P(\\lambda)=z_\\lambda H$ with its DJ form $\\beta_{P(\\lambda)}$, the cell module $C_{\\mathrm M}(\\lambda')$ with its Murphy form $G_{\\lambda'}$, and the sign automorphism $\\theta$ be as in '; consumed/declaration location items/thm-kleshchev-first-level-branching-multiplicity.md:59 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 a66df30e7be8e234bb5ba913f58c5bd23dc9a385f8e6e3910dce667f290b2836; supplier SHA256 0ab5cf11a59a6cc31e1049073223530d2220c6752676e94fc9d37364f198a6fa. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-thm-kleshchev-first-level-branching-multiplicity.json, research/frontier-44-special-representation-examples-28-step3b-review-thm-kleshchev-first-level-branching-multiplicity.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "thm-kleshchev-first-level-branching-multiplicity",
    "supplier": "thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra exports Statement 'Let $F$ be a field and $A$ a finite-dimensional unital cellular $F$-algebra with cellular basis $(C,\\Lambda)$ over the finite poset $\\Lambda$ ([[def-cellular-algebra-basis-and-cell-module]]). For $\\lambda\\in\\Lambda$ put $D^{\\lambda}:=C^{\\lambda}/\\mathrm{rad}\\,C^{\\lambda}$, where $\\mathrm{rad}\\,C^{\\lambda}$ is the radical of the cell form '; consumed/declaration location items/thm-kleshchev-first-level-branching-multiplicity.md:63 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 a66df30e7be8e234bb5ba913f58c5bd23dc9a385f8e6e3910dce667f290b2836; supplier SHA256 507a57c6b1878bb2e2561e02b47b461d0b3983bdc84b64bdee06b664385c99bd. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-thm-kleshchev-first-level-branching-multiplicity.json, research/frontier-44-special-representation-examples-28-step3b-review-thm-kleshchev-first-level-branching-multiplicity.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "item",
    "consumer": "thm-normal-node-composition-multiplicities-under-residue-restriction",
    "supplier": "thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual exports Statement 'Let $R$ be a commutative ring, $q\\in R^\\times$ and $\\lambda\\vdash n$, and let $C_{\\mathrm M}(\\lambda)$ with its basis $\\{m_t\\}$, $P(\\lambda)=z_\\lambda H$, the permutation form $\\beta$ on $M(\\lambda)$ and the DJ form on $P(\\lambda)$ be as in [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], [[lem-dj-bridge-murphy-cellular-'; consumed/declaration location items/thm-normal-node-composition-multiplicities-under-residue-restriction.md:68 (Facts & Assumptions); exact paragraph and all occurrences bound in edge-bookkeeping-evidence.json. Consumer SHA256 bfb8c8accd73ef0111fa8ac5015bbc2180f93d5cacc2ba2f7e153d538324c84d; supplier SHA256 2be0091b59fed6aa3bbe22db7e9ee4e84916ad263f116b531b6341529431533c. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance research/frontier-44-special-representation-examples-28-step3b-owner-thm-normal-node-composition-multiplicities-under-residue-restriction.json, research/frontier-44-special-representation-examples-28-step3b-review-thm-normal-node-composition-multiplicities-under-residue-restriction.json; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  },
  {
    "kind": "page",
    "consumer": "modular-branching-and-the-good-node-crystal",
    "supplier": "ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison",
    "status": "open",
    "evidence": "Current Step3 cross-batch reconciliation: ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison exports page summary '**Objective.** This page builds the integral comparison between the ordinary Dipper-James polytabloid module $P(\\lambda)=z_\\lambda H$ and the sign-twisted Murphy cell $C_{\\mathrm M}(\\lambda')^\\theta$ over the generic type-$A$ Hecke algebra, with every unit, ideal and form tracked exactly over $A=\\mathbb Z[q^{\\pm1}]$ and after every base c'; consumed/declaration location research/frontier-44-special-representation-examples-28-batch-22.pages.json#requires; no explicit wiki-link use located, exact declared prerequisite retained and its existing review/provenance boundary recorded. Consumer SHA256 80ac7cd44862cdf14828cc7fc8ec063f89557fa4928eddd29cea3da8bde8bbfa; supplier SHA256 2e60d767b7c842d6bd48538e3ab5d83c6a2831065a673c631ca157bdc060c529. Open records the exact authored interface/use and existing provenance only; this constructor did not establish a new mathematical edge check. Existing provenance no item receipt located; native author research/frontier-44-special-representation-examples-28-dispatch/alpha-high-step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788.result.json. Required independent Step5-7 supplier/consumer audits and any existing holds remain unchanged. Root restoration disposition: missing declared-edge record retained as open; no new whole-item or independent mathematical review asserted by this bookkeeping integration."
  }
]
```

## Source checks and limits

The current cited dependency closure was opened at all 95 external declared Definition/Statement interfaces. The assigned proof bodies and explanatory structural arguments were read in full; selected prerequisite proofs included the current ordinary simple-multiplicity and projective coefficient-comparison proofs. This is not a whole-transitive-foundation audit. None of the archived reports was used as a verdict. The pre/post fingerprints and all 18 exact preimages were checked; no historical-delta exception or owner-authorized current-content workaround was needed.

Primary passages consulted:

- [Libedinsky–Williamson](https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf), §§2.3–2.7, printed pp.6–8: induced signs, action branches, canonical bases, normalization dictionary and both reduction formulas. The local proofs establish the integral module claims instead of relying on the paper's summary.
- [Chen, Lecture 9](https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf), §3, printed pp.4–7, particularly Definitions3.8–3.9, Theorem3.12 and its complete sketch, Example3.16, Construction3.17 and Exercise3.18: finite duals, exact tensor translation, strict-positive upper closure, the simple sandwich and big-projective target. This section contains no Hecke normalization assertion.
- [Björner–Brenti](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf), §5.1 Theorem5.1.4, Proposition5.1.5 and Example5.1.6, printed pp.133–135; Chapter5 Exercise7(a), printed p.163. These support the gap-at-most-two calculation and the S3 comparison; the previous Section7.7 locator was incorrect.
- [Mazorchuk–Stroppel](https://www.math.uni-bonn.de/people/stroppel/Shuffling.pdf), §2.2, printed pp.2941–2942, and §7.2/Lemma7.5, printed pp.2964–2965: general semisimple triangular conventions and the spherical Hecke module/action. The projectively presentable category in that paper is not used as the locally parabolic-finite category. Downloaded PDF inspected with PyMuPDF after browser retrieval failed.
- [Soergel](https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps), existing retrieved PDF at `research/frontier-44-special-representation-examples-28-owner-one-time-exhausted-exception-20261011/exception_semiregular_ringel_constructor/sources/CharKippengl.pdf`, printed pp.6–8, Remark2.4 and the bounded induced projective construction in Theorem3.2: compared with the fully local graded-free/flag proof. No tilting classification was imported.
- [Mazorchuk, Lectures on Algebraic Categorification](https://arxiv.org/pdf/1011.0144), §§4.4 and4.6, printed pp.20–21: standard/projective support, locally parabolic-finite category, shortest-left regular labels, reflector and generalized standards; the local proof supplies the structural arguments.
- [Ko–Mazorchuk–Mrden](https://www.diva-portal.org/smash/get/diva2:1680785/FULLTEXT01.pdf), §4.1, printed p.1246: locally U(p)-finite category and its shortest-left principal-block labels; §4.2's separate Koszul-duality statement is not a supplier for this proof.
- [Moreau](https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf), §13.3, Equation18 and Theorem13.11 with the preceding argument, printed pp.98–99: finite-dimensional Weyl character formula and formal denominator. The Levi-center extension is checked locally against the library Weyl-character theorem.

Humphreys entries with null URLs remain title-only secondary bibliography; this dispatch did not obtain that book and does not claim to have read it. The current arguments use local proved suppliers and the primary passages listed above.

## Final dispositions and checks

There are exactly 17 decisions: 11 accepted_repair, 3 amended_repair, and 3 reviewed_no_defect with change_kind audit_enrichment and no defect IDs. The untouched character theorem owes no decision but has its complete risk review. All completed repair decisions have repair_confidence 1. Every independently confirmed defect is referenced to a separate closed ledger row (40 rows total), at caught_at_stage 3a-adjudicate. No mechanical failure received a defect row.

Alpha changed only source metadata in three items and their owning manifest entries: the Levi construction locator, reduction theorem's inaccurate Chen reference, and S3 example exercise locator. All mathematical bodies remain exactly the post-reader bodies. The contract's copied root batch number 15 was normalized to 22; all 18 risk reviews and the three metadata-repair notes are current. Pages, published carriers, other batches, judge records and historical escalation receipts were not edited. No withdrawal is proposed.

Local checks actually run:

- Initial risk-report without --require-reviewed: 18 routed items, 0 errors.
- Reflow on the three Alpha-edited items: all unchanged; exit0.
- Precheck --json on those three: 2 applicable proofs pass, 1 definition not applicable, 0 failures; exit0.
- Rendercheck on those three: all 3 parse and render; exit0.
- proof-contract --strict on the owned contract: 18/18 checked, 0 errors, 0 warnings; exit0.
- risk-report --require-reviewed: all 18 complete, 0 errors; exit0.
- Final single batched proof-layout command after all item edits and reflow: 3 items, 10 steps, 0 defects; exit0:

```bash
node tools/proof-layout.mjs items/def-standard-parabolic-and-levi-subalgebras-from-simple-roots.md items/thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones.md items/ex-parabolic-kl-polynomials-for-s-three-modulo-s-two.md
```

- Exact decision set equals all 17 scope touched obligations; all 18 risk reviews are complete. All three Alpha item changes are the intended metadata amendments; the other 15 raw item hashes still equal the post snapshot.
- Four integer products NN^-1=N^-1N=AA^-1=A^-1A=I checked. Independently enumerated every J and every right-minimal permutation in S_n, n=1..5: all 633 cases satisfy k(w)=w_J w^-1 w0 left-minimal. These finite checks supplement the proofs and do not replace them.
- Read-only autopilot status confirmed the active six-step run, with no worker in flight at that read; no transition/control action was performed.

## Blockers and Step 3b handoff

No substantial mathematical prerequisite remains unmet in this current batch review. The two historical Open obligation remarks retain their original escalation status; only the owner may refresh those historical receipts. Their referenced regular suppliers are now current batch21 content and the present consuming uses were checked independently.

The required dependency-ledger refresh was attempted after updating batch22's six owned records:

```bash
node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28-six-step
```

It exited1 with `frontier-44-special-representation-examples-28-six-step-batch-10.cross-batch-dependencies.json: invalid review or consumer ownership`. This is an outside-scope mechanical blocker. Batch10 owner/Step3b lead must reconcile that input's current ownership and rerun the merge; this dispatch did not edit it or claim merged closure. The 26 displaced historical batch22 input records are preserved above for rehoming by their actual current consumer owners, with IDs, evidence and statuses intact.

No judging, hash stamping, self-certification, agent dispatch, judge cycle or gate battery was initiated. The engine owns current hash stamping, global ledger integration and downstream gates.
