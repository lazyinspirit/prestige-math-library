# Batch 8 remaining items: independent proof audit (C)

**Scope.** Report-only review of the 15 IDs assigned by the run owner. I read
the current item statements, facts, and proofs, plus the direct items used for
the residue, Riemann–Hurwitz, and canonical-map claims. I made no item,
carrier, manifest, plan, ledger, receipt, certification, scope, or gate edits.

**Source basis.** I reused the complete-text evidence recorded in
`research/frontier-37-owner-30-batch-8.coverage.json`: Vakil, *FOAG* (full
2025 PDF; especially §§19.2, 19.5, 29.1–29.4), MIT 18.725 Lectures 24–25,
Fulton, *Algebraic Curves*, Ch. 8, Gao–Zhang, *LAG2*, Ch. 7, and Tate,
“Residues of Differentials on Curves,” §§1–3. The coverage record gives the
full-text locations and read evidence. I did not refetch these sources.

## Dispositions

1. **`cor-unramified-cover-curves-genus-complete` — conclusion correct;
   one proof sentence needs its missing hypothesis.** Étaleness kills
   `Omega_{C/D}`, hence the generic extension is separable, the different is
   zero, and Riemann–Hurwitz gives the stated formula over arbitrary `k`.
   Step 1.1 says that a finite morphism between nonempty connected curves is
   surjective; that assertion is false without more (a closed-point
   inclusion is finite). Here the needed argument is available: an étale map
   is open, a finite map is closed, and its nonempty image in connected `D`
   is therefore all of `D`. Add that reason before using the degree. No
   change to the claim or field scope is needed.

2. **`thm-genus-one-canonical-bundle-trivial` — proof sound over arbitrary
   fields.** The degree-zero/nonzero-section criterion trivializes `omega_C`;
   a nonzero canonical section then has effective zero divisor of degree
   zero, so it has divisor zero. Since all canonical divisors are linearly
   equivalent, each is principal. This does not require a rational point.
   The structure-sheaf assertion used in the facts is more than needed for
   the zero-divisor argument, but is consistent with proper geometric
   integrality. I found no mathematical repair obligation here.

3. **`cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` — the
   section count and embedding are correct; the degree-of-image bridge is
   not proved by its cited facts.** For any degree-three invertible sheaf on
   a genus-one curve, `h^0=3` and the `2g+1` theorem gives an embedding into
   `P^2`; a rational point is only needed to exhibit `O(3p_0)`, not for the
   assertion about an already-given degree-three sheaf. Facts [F6] and steps
   4.1–5.1 assert, but do not derive or source, that the image is a plane
   hypersurface and that its equation degree equals the degree of the
   restricted hyperplane divisor. The passage to `bar k` also needs the
   degree/base-change compatibility if used.

   **Repair route preserving “plane cubic.”** Over `bar k`, the embedded
   geometrically integral curve is a codimension-one subscheme of `P^2`,
   hence is cut out by one irreducible homogeneous form `F`. Prove/cite the
   codimension-one principal-ideal fact and the standard degree calculation
   (e.g. from the hypersurface exact sequence/Hilbert polynomial, or the
   hyperplane-section formula). The degree of the pulled-back hyperplane
   bundle is three and is unchanged by field extension, so `deg F=3`.
   Alternatively add a complete direct proof of that calculation to a
   supplier. The existing divisor-degree and morphism-degree definitions do
   not prove it by themselves.

4. **`rem-general-serre-duality-deferred` — item 3 has the duality groups
   reversed.** Its displayed assertion
   `H^1(C,F)^vee ~= Ext^1(F,omega_C)` is false for general coherent `F` and
   contradicts the target theorem immediately below. The correct pair is
   `Hom(F,omega_C) ~= H^1(C,F)^vee` and
   `Ext^1(F,omega_C) ~= H^0(C,F)^vee`, functorially. Edit the remark to state
   both, with the degrees matched. Its reference to a sufficiently twisted
   two-term locally-free resolution is only an outline; the projective-space
   resolution citation alone does not supply the curve-specific resolution
   or the coherent Ext comparison. The coherent-duality route report owned
   separately must settle those proof inputs before this explanatory sentence
   is treated as evidence for the theorem.

5. **`ex-residue-projective-line` — the closed-point residue formula is
   false as written; the all-differentials computation is also unsupported.**
   At a finite closed point `p=V(g)`, the item expands the *function* `f` in
   `u=g` and asserts `res_p(f dt)=Tr(a_{-1})`. The residue supplier instead
   takes the `u^{-1}du` coefficient of the differential. In general
   `dt = (g'(t))^{-1}du`, and this factor cannot be dropped. For a concrete
   counterexample take `k=Q`, `g=t^2+1`, and `f=1/g`: the asserted function
   coefficient is `a_{-1}=1`, so the item predicts `Tr_{Q(i)/Q}(1)=2`; the
   differential is `u^{-1}(2t)^{-1}du`, whose residue is
   `Tr_{Q(i)/Q}(1/(2i))=0`. This is a perfect-field example, so restricting
   to perfect fields does not fix it.

   **Repair route.** Expand the differential itself as
   `sum b_n u^n du` and take `Tr(b_{-1})`; equivalently include the unit
   `1/g'(t)` in the conversion from `dt` to `du`. The monomial calculations
   at `0` and infinity are fine. Step 3.1's claimed decomposition of every
   rational differential into monomials plus exact differentials is neither
   established nor valid as stated for arbitrary closed-point denominators;
   for this example use the already cited global residue theorem [F7], or
   supply a genuine partial-fraction/trace-residue proof. Step 4.1 has a
   harmless but real sign error at infinity:
   `dt/(t(t-1)) = -1/(1-s) ds`, not `+1/(1-s) ds`; the residue remains zero.
   Its final fixed-trace conclusion is correctly scoped to perfect `k`, but
   depends on the fixed normalization in `rem-duality-trace-normalization`;
   do not infer that normalization from the projective-line computation
   alone.

6. **`ex-serre-duality-projective-line-twists` — Step 2.1 is false as an
   ordinary-differential calculation, while the intended line-bundle
   sections and pairing are correct.** For `m>=0`, `t^m dt` as a rational
   differential has a pole at infinity:
   `t^m dt=-s^{-m-2}ds`. The proof then says regularity requires
   `m+2<=0`, “that is, all `m>=0`,” which reverses the condition. The missing
   factor is the local frame of `L^{-1}=O(d+2)`; the section is not an
   ordinary differential by itself.

   **Repair route.** Use the isomorphism
   `O(d) ~= omega_{P^1} tensor O(d+2)`. The monomial
   `x_0^{d-m}x_1^m` maps on `U_0` to
   `t^m dt tensor x_0^{d+2}`; on `U_1` it is
   `-s^{d-m} ds tensor x_1^{d+2}`, regular for `0<=m<=d`. The existing
   `ex-residue-pairing-one-cocycle` contains the necessary transition-frame
   calculation and can serve as the checked local route. Keep the anti-
   diagonal residue matrix and the fixed-trace normalization, but derive
   them only after identifying these actual global sections.

7. **`ex-full-rr-projective-line` — computation correct.** The ranges
   `h^0(O(d))`, `h^0(O(-d-2))`, and the special-divisor cutoff `d<=-2` give
   the full formula for every integer `d`. This is a valid worked check
   conditional on the cited projective-line cohomology, divisor
   classification, and full Riemann–Roch suppliers; I found no local
   arithmetic or boundary-case error.

8. **`ex-genus-one-rr-degree-positive` — computation correct over arbitrary
   fields.** For degree `n>0`, nonspecial Riemann–Roch gives `h^0=n` and
   `h^1=0`. At `n=1`, a nonzero section has effective zero divisor of degree
   one, hence a single degree-one closed point (a rational point); this is a
   consequence of the assumed degree-one line bundle and does not add a
   rational-point hypothesis. The claim that every degree-one divisor is
   equivalent to that point follows from that section. I found no local
   repair obligation beyond the cited Riemann–Roch/duality suppliers.

9. **`ex-plane-cubic-canonical-trivial` — adjunction conclusion correct;
   final converse sentence is false.** Adjunction gives
   `omega_C ~= O_C` and genus one for a smooth plane cubic in any
   characteristic. The last sentence says smooth plane cubics are “exactly”
   genus-one curves with a rational point. The proof establishes only that a
   genus-one curve *with* a rational point has a plane-cubic model. A smooth
   plane cubic can be a nontrivial genus-one torsor and have no `k`-rational
   point (for example, the classical Selmer cubic over `Q`).

   **Repair route.** Keep the adjunction and rational-point converse claims,
   but replace “exactly” with the one-way statement proved: every genus-one
   curve with a rational point admits such a model; a smooth plane cubic has
   genus one, but need not have a rational point. Do not add a rational point
   as a hypothesis to the plane-cubic adjunction result.

10. **`ex-plane-quartic-canonical-hyperplane` — local computation correct;
    it is a direct consumer of the canonical-map supplier.** Adjunction gives
    `omega_C ~= O_C(1)` and genus three. The restriction exact sequence and
    `H^0(O_{P^2}(-3))=H^1(O_{P^2}(-3))=0` identify the canonical sections with
    plane lines, so the canonical map is the given embedding in every
    characteristic. Its “therefore not hyperelliptic” conclusion uses
    `thm-canonical-map-nonhyperelliptic-curve`; repair that supplier's
    inseparability step as described under ID 11 before treating the
    consumer chain as closed. No separate quartic repair is needed.

11. **`cex-canonical-map-hyperelliptic-not-embedding` — promised
    nonembedding is right, but the characteristic-two branch and its direct
    supplier need a missing argument.** The definition of hyperelliptic map
    used here is any degree-two map; degree alone does not imply two distinct
    geometric points in each generic fibre. In characteristic two a
    purely inseparable degree-two map is radicial. Thus Steps 2.1/8.2's
    “degree two, hence two-to-one on points” needs separability. Step 2.2
    asserts without a supplier that every purely inseparable case is the
    smooth model `y^2=h(x)` with `h` squarefree; it also invokes that model
    only to show a zero differential. The direct supplier
    `thm-canonical-map-nonhyperelliptic-curve` has the same omission in
    Step 8.2, and its Statement repeats the pointwise two-to-one conclusion.

    **Repair route preserving the unqualified claim.** First prove that a
    purely inseparable degree-two map from a smooth proper geometrically
    integral curve to `P^1` cannot occur when the curve has positive genus.
    Base-change to `bar k`. In characteristic two, if
    `L=bar k(C)` is purely inseparable of degree two over `bar k(t)`, then
    `L^2` is an intermediate subfield of `bar k(t)` and has the same genus as
    the Frobenius twist of `C`; Lüroth makes `L^2` rational, forcing genus
    zero, a contradiction. Supply the base-change/Frobenius-genus facts and
    a source or proof of Lüroth for this exact use. Consequently every
    degree-two map in the genus-at-least-two theorem is separable; it is
    geometrically two-to-one, its Veronese composite identifies distinct
    points, and the canonical map is not an immersion. This avoids the
    unsupported squarefree-model assertion. Update the canonical-map
    supplier and this counterexample together; `ex-plane-quartic` directly
    consumes the supplier's embedding criterion. The arbitrary-characteristic
    nonembedding claim itself need not be weakened.

12. **`cex-degree-two-g-minus-one-not-always-basepoint-free` — proof
    correct.** With a rational point `p`, `L=O(K_C+p)` has degree `2g-1`,
    `h^0(L)=g`, and `h^0(L(-p))=h^0(O(K_C))=g`; equality forces `p` to be
    a base point. The argument includes genus one and shows sharpness of the
    `2g` bound. No arbitrary-characteristic or residue-field issue arises.

13. **`cex-degree-two-g-not-always-very-ample` — proof correct under its
    algebraically closed-field hypothesis.** For `L=O(K_C+2p)`, the full
    first-jet evaluation at `p` has one-dimensional image because
    `h^0(L)-h^0(L(-2p))=1`; every base-point-free linear subsystem has image
    at most that dimension, so its map has zero tangent map at `p` and cannot
    be an immersion. The degree-`2g` counterexample and the claimed sharp
    `2g+1` threshold follow. The local jet calculation is characteristic
    free.

14. **`ex-riemann-hurwitz-double-cover` — abstract tame-cover case is
    sound; the concrete `y^2=h(x)` model is not connected to the smooth
    projective model strongly enough to justify its local calculations.** In
    case (i), each rational branch fibre has one point with `e=2` and residue
    degree one; the tame different and Riemann–Hurwitz yield `g=r-1`.
    This works in every characteristic other than two. For case (ii), Step
    1.6 infers vanishing of the local different from `2y dy=0`, and Steps
    2.2–2.3 count branch and infinity fibres, but the cited function-field
    equivalence only gives the unique smooth proper model. It does not show
    that the local rings of that model are the rings in which the displayed
    equation computes `Omega_{C/P^1}`. The relation on the function field
    alone does not identify the local different or the fibre over infinity.

    **Repair route preserving the full formula, including nonsplit roots.**
    Construct and glue the finite charts
    `Spec k[x,y]/(y^2-h(x))` over `U_0` and
    `Spec k[s,z]/(z^2-W(s))` over `U_1`, where
    `W(s)=s^{2r}h(1/s)` and `z=ys^r`; glue by `s=1/x`, `z=y/x^r`.
    They are finite rank-two algebras over the two charts of `P^1`. The
    Jacobian criterion proves smoothness: at finite zeros of `h`, squarefreeness
    gives `h'` a unit, and away from them `2y` is a unit; over infinity,
    `z^2=1` on the fibre and `2z` is a unit. The glued curve is finite over
    `P^1`, hence proper, and its function field is the stated quadratic
    extension; uniqueness identifies it with `C_h`. Now the relative
    differential presentation computes length one at each root prime `g|h`
    (one point, `e=2`, residue field `k[x]/(g)`) and zero elsewhere; the
    infinity chart has two `k`-rational unramified points. This gives
    `deg R=sum_{g|h} deg(g)=2r` and handles non-rational closed branch points
    without pretending they are rational. The finite chart and infinity
    chart, rather than the bare equation in the function field, are the
    missing local bridge.

15. **`ex-residue-pairing-one-cocycle` — explicit pairing is correct; keep
    its frame and fixed-trace dependencies.** The cocycle at the rational
    point `0` pairs with the actual global section of
    `omega tensor O(d+2)`; the anti-diagonal coefficient matrix is correct
    in every characteristic. Its Step 2.1 supplies the chart transition
    needed for global regularity, so it is a suitable repair model for ID 6.
    Since the pole is at a `k`-rational point, no use of `dt` as a differential
    basis at an inseparable closed point occurs. The `d=0` value `1` agrees
    with the fixed trace only through the cited
    `rem-duality-trace-normalization`; preserve that helper's orientation and
    do not select or rescale the trace from this example. The general residue
    supplier remains scoped to perfect `k` here, which is sufficient for this
    example.

## Integration notes

- Mathematical repairs needed before these items can be treated as proved:
  the residue formula/proof and sign in ID 5; the line-bundle frames in ID 6;
  the false converse in ID 9; the missing degree-of-image bridge in ID 3;
  the two-to-one/separability bridge in ID 11 and its direct supplier; the
  local-model construction in ID 14; the reversed duality in ID 4; and the
  finite-étale surjectivity sentence in ID 1.
- IDs 2, 7, 8, 10, 12, 13, and 15 have no independent mathematical defect
  found in their local computation. ID 10 and ID 15 remain conditional on the
  cited canonical-map and fixed-trace suppliers, respectively.
- The scope and interface changes for the canonical-map supplier must be
  coordinated with its direct consumers (`cex-canonical-map-hyperelliptic-not-embedding`
  and `ex-plane-quartic-canonical-hyperplane`). The residue and duality
  examples must continue to use the fixed trace helper rather than define a
  competing normalization.

## Root local correction: plane-cubic converse

Root read the entire example and both actual genus-one theorem/corollary suppliers, corrected the false equivalence in Verification4.1 to the proved one-way rational-point model implication, and synchronized only this B8 claim row (also making its P0 canonical target explicit). Other computations and dependencies unchanged. No item directly consumes this example leaf. The separate plane-cubic image-degree supplier obligation remains open; no audit acceptance or gate was claimed and no format check repeated for the sentence edit. Current item raw SHA256: `fc83dd5a710d8a6c42828eac8f9964e1a23d9ef665ba952018094925eb6296f3`.
