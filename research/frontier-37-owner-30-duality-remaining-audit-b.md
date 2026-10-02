# Batch 8 independent proof audit: remaining duality and curve claims

Run: `frontier-37-owner-30`

Scope: the 15 IDs assigned for this audit. This is a report only; no item,
carrier, manifest, plan, ledger, receipt, certification, scope decision, or gate
was changed.

## Source basis

I read each target's current statement, facts, proof, and declared suppliers,
then compared the earlier Step 3b review reason with the current supplier files
and their own flagged obligations. I reused the run's recorded full-text
source harvest in `frontier-37-owner-30-batch-8.notes.md` (7/7 sources fetched
and full-text verified): Vakil, *The Rising Sea*, §§18.5, 19.1–19.2/19.5, and
29.1–29.4; Fulton, *Algebraic Curves*, Ch. 8 §§8.4–8.6; MIT 18.725 Lectures
24–25; and the Stacks Project, *Algebraic Curves* (tag 0BRV). No refetch was
needed.

Useful exact Stacks checks in the locally available full text are: Algebraic
Curves Lemma 2.3 (tag 0CCK), for flatness of a nonconstant map to a normal
curve; Lemma 8.4 (0C1A), for `deg(omega)=2g-2`; §9 Lemma 9.3 (0BYD), for the
plane-curve genus; §12 (0C1B), for Riemann–Hurwitz with the different; and
Lemmas 22.3 and 22.5 (0E3C and 0H2V), for global generation and the
`2g+1` very-ampleness threshold. For arbitrary-field Serre duality and its
fixed trace, the applicable supplier is the already-published smooth
projective duality theorem and its Gysin-trace compatibility; the curve
line-bundle theorem's residue-sum clause is only its separate perfect-field
realization.

## Per-item findings

### 1. `thm-serre-duality-curves-vector-bundles`

**Mathematics:** correct as stated for every field and every finite locally
free sheaf on a smooth proper geometrically integral curve. Projectivity is
supplied by `cor-projective-embedding-every-smooth-proper-curve`; specializing
the published smooth-projective theorem to dimension one and `q=1` gives the
perfect pairing. The trace remains the fixed, embedding-independent Gysin
trace. No perfectness assumption and no residue-sum substitution is needed.

**Supplier/review disposition:** the old escalation was specifically the
projective-embedding path through
`cor-existence-rational-function-bounded-pole`, which had no file at the time.
Those files now exist, but the bounded-pole item still flags its Cartier
line-bundle/Riemann–Roch dictionary route. The theorem itself has no identified
mathematical defect; finish or replace that projectivity supplier path before
clearing the escalation.

### 2. `cor-h1-line-bundle-dual-sections`

**Mathematics:** the equality
`h^1(O_C(D)) = h^0(O_C(K_C-D)) = l(K_C-D)` is correct for every divisor `D`
over an arbitrary field, using the fixed Gysin-trace line-bundle duality.
Weighted closed-point degree is not needed for this equality.

**Proof defect:** the statement and final proof sentence also assert the full
Riemann–Roch identity `l(D)-l(K_C-D)=deg(D)+1-g`, but this corollary does not
depend on or apply `thm-riemann-roch-as-l-minus-index`. Add that dependency and
a proof step invoking it, or remove the full-RR sentence from this corollary.
The dual-sections equality alone does not imply full Riemann–Roch.

**Supplier/review disposition:** the earlier escalation named the line-bundle
rational-section dictionary and `def-riemann-roch-space-of-divisor` as absent.
Both files now exist; this item's facts still call them “not yet a file on
disk,” which is stale. Their current texts/closures still need reconciliation:
the Riemann–Roch-space and Cartier/Weil chain contains explicit flagged
obligations.

### 3. `thm-full-riemann-roch-divisor`

**Mathematics:** correct for every divisor, with
`deg_k(D)=sum_x n_x [kappa(x):k]`, over an arbitrary field and in every
characteristic. The proof is exactly Euler-characteristic Riemann–Roch
`l(D)-i(D)=deg_k(D)+1-g` plus the dual-sections identification. The
canonical-divisor replacement step is valid by multiplication by a rational
function.

**Supplier/review disposition:** the old escalation named
`def-invertible-sheaf-of-cartier-divisor`,
`def-riemann-roch-space-of-divisor`, `thm-cartier-weil-divisors-curves-agree`,
and `thm-riemann-roch-as-l-minus-index` as absent. Files now exist, but the
Cartier/Weil and Riemann–Roch suppliers remain drafts with their own flagged
dictionary obligations. This is a supplier-closure issue, not a defect in the
displayed theorem.

### 4. `cor-h0-canonical-differentials-genus`

**Mathematics:** `h^0(omega_C)=h^1(O_C)=g` and `l(K_C)=g` are correct for every
field and characteristic, from line-bundle duality, `H^0(O_C)=k`, and the
definition `g=h^1(O_C)`.

**Proof/review repair:** Fact [F7] and step 2.2 invoke Euler-characteristic
Riemann–Roch to recover `h^1(O_C)=g`, which is already the definition used in
[F3]. Remove [F7], step 2.2, and the unnecessary direct dependency
`thm-riemann-roch-euler-characteristic-curve`. The previous escalation for
that missing supplier is thereby avoidable; it is not needed for this claim.

### 5. `cor-canonical-degree-two-g-minus-two`

**Mathematics:** correct over arbitrary fields and all characteristics:
evaluate full Riemann–Roch at `K_C`, using `l(K_C)=g` and `l(0)=1`, to obtain
`deg_k(K_C)=2g-2`. The proof correctly uses the residue-degree-weighted
divisor degree and shows the same formula for every rational differential.

**Supplier/review disposition:** the former escalation named
`def-riemann-roch-space-of-divisor` as absent; it now exists but remains a
draft with flagged dictionary obligations. The displayed proof only needs the
identification `l(D)=h^0(O_C(D))`, which can be supplied by the existing
`def-little-l-divisor`; trim the extra Riemann–Roch-space dependency if that
avoids importing its unresolved closure. Full Riemann–Roch remains essential.

### 6. `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`

**Mathematics:** correct with the strict hypothesis `deg(L)>2g-2`, over every
field and characteristic. The dual twist has negative degree; a nonzero
section would define an effective divisor, whose weighted degree cannot be
negative. Riemann–Roch as `l-i` then gives
`h^0(L)=deg(L)+1-g`.

**Supplier/review disposition:** the old escalation named the Cartier/Weil
dictionary, the negative-degree section bound, and Riemann–Roch as `l-i` as
missing. These files now exist, but the negative-section bound and `l-i`
theorem still carry flagged divisor-dictionary obligations. No threshold or
field correction is indicated.

### 7. `cor-rr-exact-high-degree-formula`

**Mathematics:** correct for every divisor with `deg_k(D)>2g-2`, including
negative-degree cases where this inequality can occur only in low genus; the
strict threshold and residue-weighted degree are right.

**Proof/review repair:** this conclusion follows directly by applying the
preceding line-bundle vanishing/count to `O_C(D)` and using `l(D)=h^0(O_C(D))`.
The current fact list additionally cites full Riemann–Roch,
`thm-riemann-roch-as-l-minus-index`, and the nonspecial definition, although
they are not needed to prove the displayed formula (retain the definition only
if “nonspecial” remains in the statement). Remove unnecessary edges to reduce
the old escalation surface. The remaining line-bundle/divisor dictionary
still needs its flagged supplier closure.

### 8. `thm-degree-two-g-line-bundle-basepoint-free`

**Mathematics:** the threshold `deg(L)>=2g` is correct over any field and in
every characteristic. The proof after base change is the standard
length-one evaluation argument: over the algebraic closure, `p` is rational,
`deg(L(-p))>=2g-1>2g-2`, so `H^1(L(-p))=0`; faithful-flat descent gives global
generation on `C`. The sharper dimension difference is correctly restricted
to algebraically closed `k`; a non-rational closed point over `k` has fiber
dimension `[kappa(p):k]`, not necessarily one.

**Proof repair:** explicitly justify `deg(L_bar)=deg(L)`, which [F5]
cohomology base change does not itself state. The earlier suggested argument
that closed residue extensions on a smooth curve are separable was false over
an imperfect field: on `A^1_k` in characteristic `p`, an irreducible
polynomial `t^p-a` with `a` not a `p`th power defines a closed point with
purely inseparable residue field. Use scheme-theoretic lengths instead. Write
`L=O_C(D)`. For a closed point `x`, with finite residue extension
`E=κ(x)/k`, its pullback to `C_bar` is the finite Artinian scheme
`Spec(E⊗_k bar k)`, whose `bar k`-dimension is `[E:k]`; it can be nonreduced.
Its associated effective Cartier divisor has coefficient at each geometric
point equal to the local Artin length, so the sum of those coefficients is
`dim_bar k(E⊗_k bar k)=[E:k]`. By additivity this preserves the degree of any
divisor and hence of `L`. Inline the Artinian length decomposition and the
identification of Cartier multiplicities with local lengths, or cite an exact
supplier for them; Stacks Lemma 22.3 (0E3C) is an alternative direct-over-`k`
proof of global generation, but does not by itself document the base-change
degree identity used by this proof.

**Supplier/review disposition:** the old review listed the finite-map
corollary, linear-system definitions, Cartier/Weil dictionary, and map
supplier as absent. They now exist; the finite-map corollary still flags its
fiber/pullback supplier chain. This target cites that corollary only to show
the curve has closed points; replace it with the elementary existence of a
closed point on a nonempty finite-type curve and remove the avoidable edge.

### 9. `thm-degree-two-g-plus-one-line-bundle-very-ample`

**Mathematics:** `deg(L)>=2g+1` is the correct very-ampleness threshold over
arbitrary fields and all characteristics. After base change, the two-point
and doubled-point exact sequences have vanishing `H^1` because the twists have
degree at least `2g-1`; they separate geometric points and first-order tangent
directions.

**Proof repair:** as in item 8, explicitly preserve degree under extension
using the possibly nonreduced finite Artinian pullback and its local lengths.
Also, [F5] states a closed-immersion criterion but its cited suppliers do not
prove the needed implication. Give the scheme-theoretic route: after extension
to an algebraic closure, properness and point separation imply the morphism is
quasi-finite and finite. At each closed point of its scheme-theoretic image,
there is one point upstairs and the same algebraically closed residue field;
tangent injectivity gives a surjection on cotangent spaces. The source local
ring is a DVR, so its maximal ideal is generated by the image of the target
maximal ideal. Apply Nakayama to the finite local algebra to show the target
local ring surjects onto the source local ring. This proves a closed immersion
over the algebraic closure. Then descend the affine ring-map surjectivity by
faithful flatness of the field extension. Inline these local and descent
arguments; the current suppliers establish proper quasi-finite implies finite,
closed immersions are local on target, and the affine quotient description,
but do not state this exact criterion. The current proof's invocation of
`lem-base-change-open-closed-immersions` does not by itself supply descent of
closed immersions.

**Supplier/review disposition:** the earlier escalation named
`thm-base-point-free-linear-system-morphism` as absent; it now exists, though
its own file remains draft/flagged. The closed-immersion criterion above is an
additional proof obligation, not a false threshold.

### 10. `def-hyperelliptic-curve`

**False scope equivalences:** the first sentence defines hyperelliptic as
existence of a degree-two map for every genus, but the next sentence equates
this with gonality two and later with a degree-two line bundle having exactly
two sections. For `C=P^1`, the map `[x:y] -> [x^2:y^2]` has degree two, while
gonality is one and every degree-two line bundle is `O(2)` with `h^0=3`.
Thus the equivalences and the sentence declaring genus-zero curves
“by definition not hyperelliptic” contradict the initial definition.
Restrict the definition/equivalences to `g>=1` (the standard convention
`g>=2` is safer for this page), or preserve the broad map predicate and
explicitly exception-case genus zero and remove the equivalences there.

**Unproved true-route claims:** the algebraically closed sheaf criterion
needs the degree identity `deg(phi^*O(1))=deg(phi)` and, in the map-to-sheaf
direction, the assertion that this degree-two system has exactly two
sections. Add the pullback-degree supplier and prove the section count (for
`g>=2`, e.g. Clifford; for `g=1`, Riemann–Roch). The uniqueness assertion for
`g>=2` is also stated without a proof or supplier. A direct route is to base
change to the algebraic closure: two distinct degree-two maps give a
birational image in `P^1 x P^1` of bidegree `(2,2)`, whose arithmetic genus is
one, contradicting `g>=2`; uniqueness then descends because the resulting
target automorphism is unique and Galois invariant.

**Supplier/review disposition:** the old escalation was through
`lem-function-with-poles-defines-map-p1` to the finite-flat fiber-degree
lemma. Both files now exist, but the latter route remains flagged. The
degree-pullback supplier is also absent from this definition's declared
dependencies and is needed for its degree-two sheaf equivalence.

### 11. `thm-canonical-map-nonhyperelliptic-curve`

**False arbitrary-field criterion:** part (2) says the canonical morphism is a
closed immersion iff `g>=3` and `C` is not hyperelliptic using the
k-defined predicate above. The proof instead assumes `C_bar` is
nonhyperelliptic, which does not follow: a geometrically hyperelliptic curve
can have its quotient a nonsplit genus-zero conic and no k-map to `P^1`.
For example over `R`, take a smooth double cover of a nonsplit real conic
branched along a smooth divisor in `|O_B(4)|` (degree eight); it has genus
three and becomes hyperelliptic over `C`, but has no degree-two map to
`P^1_R`. Its canonical morphism is not a closed immersion. State the criterion
using geometric nonhyperellipticity (after base change to `bar k`), while
leaving part (3) explicitly about a k-defined degree-two map.

**Proof support:** the separating-points/tangents criterion in step 8.1 needs
the same finite/unramified/universally-injective lemma described for item 9.
In step 9.1, genus two gives a basepoint-free canonical map to `P^1`; the proof
then uses an unsupported image-degree product. A simpler repair is
`deg(phi_K)=deg(phi_K^*O(1))=deg(omega_C)=2`, with the pullback-degree lemma
added as a supplier. Step 7.2 likewise needs that lemma to infer
`deg(phi^*O(1))=2`. Finally, describe the factorization as a degree-two map,
or “generically two-to-one”: branched fibers need not have two geometric
points.

**Supplier/review disposition:** the previous escalation listed the
base-point/completeness definitions, linear-system map, and Euler-RR supplier
as absent. They now exist; several remain drafts with flagged divisor
dictionary closure. Those old missing-file reasons do not resolve the false
field scope above.

### 12. `thm-adjunction-smooth-plane-curve`

**Mathematics:** correct over every field and characteristic. For the smooth
codimension-one immersion, `I/I^2=O_C(-d)`; hence the normal line is
`O_C(d)`, and adjunction with `omega_P2=O(-3)` gives
`omega_C=O_C(d-3)`. The canonical-divisor consequence follows from a nonzero
rational section. The proof's hypotheses include `d>=1` and smooth pure
dimension one, enough to rule out the zero equation.

**Review disposition:** this is the only item in this set whose historical
Step 3b review accepted it: the proof-contract check passed with 0 errors and
0 warnings, and all 14 declared suppliers were published on disk. No defect
found.

### 13. `cor-genus-degree-smooth-plane-curve`

**Mathematics:** the formula `(d-1)(d-2)/2` is correct for smooth plane curves
of degree `d>=1`, over every field and characteristic. The degree calculation
uses the closed-point-weighted intersection degree, so it does not assume a
k-rational line intersection point.

**Proof wording repair:** the statement says only “smooth plane curve,” while
Facts [F1]/[F5] and steps 1.1/2.1 invoke a square-free equation and
irreducibility of `F` as if separately assumed. Smoothness of the hypersurface
implies geometric reducedness; together with Bezout (distinct plane
components intersect) it implies geometric integrality. State or prove that
implication before using irreducibility and the hypersurface degree. As a
shorter independent source route, Stacks Algebraic Curves Lemma 9.3 (0BYD)
computes the arithmetic genus directly from the hypersurface exact sequence.

**Supplier/review disposition:** the old review escalated through
`cor-canonical-degree-two-g-minus-two` to the line-bundle dictionary. These
files now exist, but the divisor dictionary/Cartier–Weil chain remains
flagged. The mathematical formula itself is not in doubt.

### 14. `lem-degree-pullback-divisor-finite-morphism-curves`

**Theorem:** the finite-flat conclusion, closed-point formula
`f^*[q]=sum_{p|q} e_p[p]`, and
`deg_k(f^*E)=n deg_k(E)` are correct for nonconstant maps of smooth proper
geometrically integral curves, with no separability or characteristic
restriction. The residue-degree factor `[kappa(p):kappa(q)]` in the fiber
length formula is essential and is present in the proof.

**Concrete proof error:** step 1.2 claims that finiteness of `f` makes the
individual local ring `O_{C,p}` a finite `O_{D,q}`-module. This is generally
false when there are multiple points over `q`: localizing the finite fiber
algebra at one point can invert elements not invertible in the base DVR. For
example over `k=Q`, for `t=x^2` at `q=(t-1)`, `O_{P1,x=1}` contains
`1/(x+1)`, which is not finite over `O_{P1,t=1}`. Replace this step by Stacks Algebraic Curves
Lemma 2.3 (0CCK): the target local ring is a field or DVR; dominance gives an
injection into the source local domain, so `O_{C,p}` is torsion-free over the
DVR and hence flat (finite generation is unnecessary). Alternatively use
the whole finite affine algebra over the target DVR to show finite flatness.
Then the rest of the proof's fiber-length and degree calculation applies.

**Supplier/review disposition:** the former escalation named the Cartier
pullback definition, line-bundle pullback lemma, and Cartier–Weil theorem as
absent. Those files now exist, but the Cartier–Weil supplier explicitly keeps
its own dictionary dependencies escalated. Fix the local proof error before
acceptance; the theorem statement need not be weakened.

### 15. `thm-riemann-hurwitz-complete`

**Mathematics:** correct for finite surjective maps of smooth proper
geometrically integral curves with separable function-field extension. This
includes wild ramification in positive characteristic: use
`length_{O_{C,p}}(Omega_{C/D,p})` as the different coefficient, not the tame
formula `e_p-1`. Degrees are weighted by `[kappa(p):k]`. Inseparable maps must
remain excluded because `Omega_{C/D}` can have generic rank and is not then
the effective torsion different used by the proof.

**Supplier/review disposition:** the earlier escalation named
`thm-canonical-bundle-ramification-formula` and Cartier–Weil suppliers as
absent. The ramification item now exists but itself flags its Cartier
line-bundle, pullback, tensor-addition, and principal-divisor suppliers. The
degree step also depends on item 14, whose local flatness argument needs the
repair above. The formula and the separability restriction are correct; close
these supplier/proof obligations before accepting it.

## Current review reconciliation

All 15 target item files and all their direct dependency files are now present.
The Step 3b JSON decisions are historical snapshots from 2026-09-30; an old
“no file on disk” reason is no longer literally current. File presence does
not settle closure, however: the current drafts named above still contain
explicit “flagged,” “not yet discharged,” or “escalated” Cartier/divisor
supplier language. `thm-adjunction-smooth-plane-curve` has the recorded pass;
the other historical escalations need owner re-review against current text
after supplier and proof repairs. No certification or gate was run for this
report.

## Exact substantive dispositions

- **False claims requiring statement correction:** genus-zero equivalences in
  `def-hyperelliptic-curve`; the arbitrary-k closed-immersion criterion in
  `thm-canonical-map-nonhyperelliptic-curve`.
- **Correct theorem, incorrect proof step:** local finiteness assertion in
  `lem-degree-pullback-divisor-finite-morphism-curves`.
- **Correct claim, missing proof/dependency support:** the extra full-RR claim
  in `cor-h1-line-bundle-dual-sections`; degree preservation after base change
  in items 8–9; the closed-immersion criterion in items 9 and 11; the
  degree-pullback and uniqueness claims in item 10; the degree-pullback
  usages in item 11.
- **No mathematical defect found in the other displayed theorems:** items
  1, 3–8, 12–13, and 15, subject to the stated supplier closures and local
  wording/edge repairs.

## Root exact supplier corrections

Root fully read both corollaries, the complete l-minus-index theorem, genus definition and Cartier tensor/inverse lemma. Added the missing actual l−i RR fact/dependency/invocation to cor-h1-line-bundle-dual-sections, preserving its full RR claim; made the used Cartier tensor/inverse interface explicit and corrected stale file-absence descriptions without certifying draft closure. Removed the redundant Euler-RR fact/dependency/zero-divisor derivation from cor-h0-canonical-differentials-genus; H1=g follows from the genus definition. Root also corrected the tensor supplier overlap transition from uv to its reciprocal on BOTH generators; its Statement is unchanged. Shared B8 selected rows synchronized; no receipts/gates or independent acceptance claimed.

Root selected strict contract validation of the two repaired h1/h0 corollaries passed:0 errors,0 warnings,2/2. Affected boundary prose was corrected to actual final step references before that one check. Actual new/removed in-run dependency edges synchronized. No broad check or receipt refresh.
