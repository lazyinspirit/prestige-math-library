# Batch 8 duality consumers: current six-item audit

## Scope and method

This is a report-only independent audit of the current bodies and loadbearing
repository supplier interfaces for:

- `ex-full-rr-projective-line`
- `ex-genus-one-rr-degree-positive`
- `ex-plane-cubic-canonical-trivial`
- `cex-degree-two-g-minus-one-not-always-basepoint-free`
- `cex-degree-two-g-not-always-very-ample`
- `ex-riemann-hurwitz-double-cover`

I read the complete six target files and checked the current statements and
relevant proof steps of their loadbearing repository suppliers, including the
projective-line divisor/Picard and cohomology interfaces; genus-one canonical
bundle and degree-zero section interfaces; the high-degree Riemann--Roch,
duality and section-vanishing interfaces; the degree-threshold theorems; the
function-field model, finite-map, pullback-degree, different and
Riemann--Hurwitz interfaces; and the projective-curve/conic interfaces
mentioned below. I reused the earlier
batch-8 audit report for context but checked the current target text directly.
I did not fetch external full texts during this six-item pass; the checked
questions had complete repository interfaces or an explicit local proof gap.
I made no item, carrier, receipt, ledger, scope, certification or gate edits,
and ran no checks.

## Dispositions

### `ex-full-rr-projective-line` — computation sound; contract omits Choice

The degree reduction to `d[∞]`, the identification `O([∞]) ≅ O(1)`, and both
section-space computations give the asserted formula in all three degree
ranges: `d ≥ 0`, `d = −1`, and `d ≤ −2`. In particular `h⁰(O(−d−2))` is
`−d−1` exactly for `d ≤ −2`; the special-divisor cutoff and index of
speciality are correct. The two displayed dimensions themselves verify the
Riemann--Roch identity in every integer degree.

The loadbearing interfaces are present: the projective-line divisor lemma
classifies divisors by degree, `cor-picard-projective-line-integers` identifies
the twist degree, the published projective-space cohomology theorem gives the
section dimensions, and the canonical-degree/full-Riemann--Roch suppliers
give the canonical and comparison statements. These suppliers explicitly
assume the Axiom of Choice. The target's `Given` does not. Add the inherited
Choice assumption to its contract; no field or degree restriction is needed.

### `ex-genus-one-rr-degree-positive` — formula sound without a rational point

For any field and any degree-`n ≥ 1` invertible sheaf on a genus-one curve,
`n > 2g−2 = 0`, so the high-degree formula gives `h⁰=n` and `h¹=0`. Serre
duality gives the same vanishing because the inverse twist has negative
degree. For `n=1`, a nonzero section has an effective zero divisor of degree
one; the degree convention forces it to be a single degree-one closed point,
which is `k`-rational. Thus the rational point is a consequence of the
given degree-one sheaf, not an extra assumption on `C`. The statement that
every degree-one divisor is equivalent to such a point follows from the same
section argument. The genus-one canonical supplier explicitly requires no
rational point.

The used high-degree, Serre-duality, negative-degree-section, and complete
linear-system suppliers are Choice-qualified, while the target `Given` is
not. State Choice in the consumer contract without adding a rational-point
assumption. Some of the direct supplier files still contain old prose saying
their batch-5 dictionary inputs were “not yet authored”; those named files
are now present. That text is stale as a missing-file report, though supplier
acceptance remains separate from file presence (see the status note below).

### `ex-plane-cubic-canonical-trivial` — forward result and corrected converse hold

For a smooth plane cubic over an arbitrary field and in arbitrary
characteristic, adjunction gives `ω_C ≅ O_C`, while the genus formula gives
`g=1`. Thus `h⁰(ω_C)=1`, the canonical system has dimension zero, and the
canonical class is trivial. The forward argument does not require a rational
point. Its converse is correctly limited to a genus-one curve with a
`k`-rational point `p₀`: `O_C(3p₀)` then has degree three and the cited
degree-three embedding result gives a plane-cubic model. The current Step 4.1
explicitly says that the forward conclusion does not imply every smooth
plane cubic has a rational point. This retains the earlier repair of the
overbroad “exactly” wording; the historical escalation saying that the
current converse is false no longer describes this file.

There is no mathematical need for the degree-zero-section criterion in the
forward calculation, since adjunction already identifies the canonical
bundle with the structure sheaf. Its use to restate principality is valid
through the Cartier/Weil dictionary. The criterion's old “not yet authored”
supplier note is stale as a statement about file presence: the rational
section/divisor, degree-descent, effective-divisor and Cartier/Weil files are
on disk and their interfaces support that use. Those suppliers are still
drafts pending the appropriate closure. As with the other consumers, the
actual cited adjunction/duality/degree suppliers are Choice-qualified, but
the target's `Given` does not state Choice; add it without adding a point to
the forward hypothesis.

### `cex-degree-two-g-minus-one-not-always-basepoint-free` — construction sound; keep `p`

For the stated `k`-rational point `p`, `L=O_C(K_C+p)` has degree `2g−1` and
`h⁰(L)=g`. The inclusion `H⁰(L(−p))=H⁰(ω_C) ⊂ H⁰(L)` has dimension `g` on
both sides, so every section vanishes at `p`. This works over arbitrary
fields and in arbitrary characteristic, subject to the explicit rational
point hypothesis. That hypothesis is essential to this construction and
must remain in any retelling.

The only subsidiary assertion needing a clearer proof/source is the genus-one
aside in Step 5.1, which says `K_C` is principal. It follows without a
rational point from `thm-genus-one-canonical-bundle-trivial` (or directly
from `deg K=0`, a nonzero canonical section, and the effective degree-zero
divisor criterion), but that theorem is not in this target's dependencies or
Facts. Add that supplier/use or write the short divisor argument. The
main base-point counterexample proof does not depend on this aside. The
Riemann--Roch/duality suppliers used by the main proof assume Choice; the
target `Given` omits it, so state Choice while retaining arbitrary `k` and
the rational `p` condition.

### `cex-degree-two-g-not-always-very-ample` — jet obstruction sound; add exact side interfaces

Over the stated algebraically closed field, each closed point is rational.
For `L=O_C(K_C+2p)`, Riemann--Roch gives `h⁰(L)=g+1`, and each
`L(−q)` has `h⁰=g`, so the complete system is base-point-free. At `p`,
`L(−2p)≅ω_C` has `h⁰=g`; hence the full first-jet evaluation has
one-dimensional image in the two-dimensional first-jet space. Any
base-point-free subsystem defining a map with pullback `O(1)=L` has the same
one-dimensional image there, so its tangent map at `p` is zero. This rules
out every immersion with that pullback and proves the degree-`2g`
counterexample in arbitrary characteristic. The given algebraic closure,
which makes `p` rational, must be retained.

Two ancillary proof details need explicit closure. First, Step 3.2 asserts
that `L_p/m_p²L_p` has dimension two and that the evaluation kernel is
`H⁰(L(−2p))`; spell this out from a local frame, the smooth-curve
one-dimensional cotangent space, and the exact sequence
`0 → m_p/m_p² → O_{C,p}/m_p² → κ(p) → 0`. Second, the genus-one aside in
Step 7.1 needs the same genus-one canonical-bundle supplier noted above.
To retain its “degree-two presentation” wording, also make the morphism
degree explicit: two independent sections give a nonconstant map to
`P¹`, and the pullback-degree formula applied to `O(1)` gives degree
`deg L=2`. Do not infer two distinct generic geometric points in
characteristic two; the current assertion need only be a degree-two
morphism. Step 5.1 cites nonexistent Step 3.3; correct that reference to
the actual base-point and jet steps. These are side-proof/interface repairs,
not defects in the jet obstruction. The threshold/cohomology suppliers
assume Choice; add that premise to the target contract.

### `ex-riemann-hurwitz-double-cover` — abstract case sound; concrete model lacks local identification

In case (i), the fibre-degree sum gives `e_p f_p=2` at each closed target
point. Since the characteristic is not two, degree-at-most-two residue
extensions are separable and indices `1,2` are tame. Over each of the
`2r` stipulated rational branch points there is exactly one point, with
`e=2` and residue degree one. The tame different then has degree `2r`, and
the stated Riemann--Hurwitz supplier gives `g(C)=r−1`. The rationality of
these branch points is used; this calculation does not silently apply to
arbitrary closed branch points.

For case (ii), the field extension and the function-field equivalence do
produce the smooth proper model and the degree-two morphism. The target then
uses `y²=h(x)` as though it identified the model's affine charts: Step 1.6
computes `Ω_{C_h/P¹,p}` from that equation, and Steps 2.2–2.3 read the root
and infinity fibres from it. But the cited
`lem-proper-normal-curve-rational-function-map` explicitly allows the
coordinate algebra of a chart preimage to be larger than the subalgebra
generated by the chart coordinate. The function-field equation alone does
not identify the local ring or relative differential module. This is a
current proof gap, not merely a stale escalation.

**Repair route preserving nonsplit roots and the full formula.** Work with
the local base DVRs. At a finite closed point `q=V(g)`, put
`R=k[x]_(g)` and `A=R[Y]/(Y²−h) ⊂ K=k(x,y)`. The order identity
`2 ord_p(y)=e_p ord_q(h)` first shows `y` is regular at every point over a
finite `q`, so the relevant residue of `y` defines a maximal ideal of this
finite `R`-algebra. If `g∤h`, then `2Y` is a unit there and the maximal ideal
is generated by `g`; if `g|h`, squarefreeness gives `h=g u` with `u` a unit,
and the relation makes the maximal ideal generated by `Y` (`g=Y²/u`). Since
the algebra is finite integral over the one-dimensional base DVR, it is
Noetherian and one-dimensional. Its local maximal ideal is generated by one
nonzero element, hence the local ring is regular; regular-local normality and
the one-dimensional normal-local-ring criterion identify it as a DVR. Its
fraction field is `K`, so
properness extends the generic map `Spec K → C_h` to a center `p` over `q`;
the map to `P¹` has that same center because the two maps agree generically
and `P¹` is separated. Conversely, a point over `q` determines one of these
residue maximal ideals. The induced local inclusion of chart and curve DVRs
has the same fraction field `K`; a strict dominating overring would invert
the first DVR's uniformizer, contradicting contraction of its maximal ideal,
so the local rings are equal. This identifies the actual local ring and lets
`Ω` be computed from the displayed presentation: length one at a root, zero
away from the roots.

At infinity use `s=1/x`, `z=ys^r`, and
`W(s)=s^{2r}h(1/s)`, so `z²=W(s)` and `W(0)=1`. Every point over infinity
has `ord_p(z)=0` and residue `z=+1` or `−1`. The local rings of
`k[s]_(s)[z]/(z²−W(s))` at the two residue roots are DVRs with uniformizer
`s`: there `z+ε` is a unit and
`(z−ε)(z+ε)=W(s)−1 ∈ (s)`, so the maximal ideal is `(s)`. Each of these
DVRs gives a valuative diagram for the proper model with
generic point `Spec K`; the properness criterion supplies a center on the
model. The maps to `P¹` agree generically, so separatedness makes the center
lie over infinity; the residue of the regular function `z` at that center is
the corresponding sign. The two centers are distinct because those residues
differ. At
each center the local inclusion from the displayed chart DVR has fraction
field `K`, so the same overring argument identifies the local rings. Thus
the two infinity points are unramified, one over each sign. The root points
contribute
`Σ_{g|h} deg(g)=deg(h)=2r`; Riemann--Hurwitz gives the full formula. An
equivalent route is to glue these two finite charts, prove the glued finite
cover smooth, and invoke uniqueness of the smooth proper model. The current
`thm-curves-function-fields-equivalence` interface alone supplies neither
route; the first uses `thm-valuative-criterion-properness` for centers on the
proper model, `cor-dimension-preserved-by-integral-extensions` for the
one-dimensional finite chart algebras, `thm-regular-local-rings-are-normal`,
and `thm-equivalent-characterisations-of-a-dvr` for the DVR conclusion.

The concrete paragraph also calls the model projective, whereas the cited
function-field theorem states smooth and proper. The existing
`cor-projective-embedding-every-smooth-proper-curve` supplies the missing
projectivity claim under Choice; cite it if retaining “projective.” The
`r=1` aside similarly says the model is a smooth conic and hence `P¹`
without identifying it with that conic or citing the rational-point
genus-zero theorem. Identify it with the smooth projective closure
`Y²=X²−Z²` by the function-field uniqueness theorem, then use
`thm-genus-zero-point-implies-projective-line` (or the explicit
`ex-smooth-conic-is-projective-line-with-point`). Alternatively derive
`C_h ≅ P¹` from its genus-zero result and the rational point over `x=1`.
This aside is ancillary to the general genus formula. The `r=2` Legendre
example is squarefree under the stated `char(k)≠2`, `c≠0,1` assumptions,
and the `r=3` statement keeps
closed roots weighted by their residue degrees.

The abstract and concrete branches both use Choice-qualified finite-map,
divisor and Riemann--Hurwitz suppliers. The item's prose records inherited
Choice but does not put it in `Given`; make it an explicit contract
assumption. Preserve the abstract `char(k)≠2` hypothesis, the concrete
perfect-field condition, and the split-root qualification before identifying
case (ii) with case (i).

## Supplier and escalation status

`lem-projective-line-divisors-classified-by-degree`,
`cor-degree-zero-line-bundle-section-trivial`, and
`thm-degree-positive-line-bundle-sections-zero-bound` still contain
historical sentences asserting that named Cartier/degree suppliers were not
yet authored. The referenced files are now on disk, and their current
interfaces state the needed degree descent, effective-divisor, and
section-divisor claims. Those sentences are stale as claims about file
presence; they do not create an absent-file proof gap in these consumers.
The current `cor-picard-projective-line-integers` text has already replaced
its former missing-supplier placeholder with the actual dictionary interfaces.
The suppliers remain drafts and the announced B5/B6/B7 closure is pending, so
this report does not treat file presence as acceptance or clear any
historical owner-held status. The concrete hyperelliptic-model/local-ring
bridge above is different: it is absent from the actual current proof and
has the explicit repair route given here.

No current target computation needs a field-characteristic restriction
beyond the one in its statement. Preserve: no rational-point hypothesis for
the plane-cubic forward result or the genus-one positive-degree formula; the
rational point in the degree-`2g−1` counterexample; algebraic closure in the
degree-`2g` very-ampleness counterexample; and rational branch points only
in the abstract `2r` branch-count calculation.
