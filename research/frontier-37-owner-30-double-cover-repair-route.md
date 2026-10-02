# Double-cover example repair route

## Scope and final state

This repair touched only `items/ex-riemann-hurwitz-double-cover.md` and this
report. The target is a draft example with no separate `Statement` heading.
Its abstract case remains a degree-two tame cover over any field of
characteristic not two, with the same rational branch-point hypothesis. Its
concrete case remains the model of a monic squarefree degree-`2r` polynomial
over a perfect field of characteristic not two. The proof still gives the
residue-degree count of finite branch points and the two rational unramified
points at infinity.

The `Given` now explicitly includes the Axiom of Choice. This records the
qualification already stated in the example prose and needed by its cited
suppliers; it does not narrow the abstract field hypothesis or change the
concrete perfect-field hypothesis. AC supplies the inherited Dependent Choice
for the Cartier-to-Weil, finite-morphism divisor, and projective-line divisor
suppliers.

The final target SHA-256 is
`cf67d72314898c14ddb8fb53848157186e5e1b03a68a84e54a7b94bccf56189c`.
I did not capture a pre-edit hash before the first authorized write in this
continuation, so I do not assert one. No formal Statement hash applies to this
example. No Statement or Definition of another item changed.

## Mathematical repairs

1. **Local rings.** Fact F9 now says the local ring at a closed point of a
   smooth curve is a DVR, while the generic local ring is its function field,
   hence a field. The order-of-vanishing argument uses only closed-point DVRs.

2. **Relative algebraic closure of constants.** For
   `A = k[x,y]/(y^2-h(x))` and `K = Frac(A)`, squarefreeness gives a simple root
   of `h` over `bar{k}`, so `h` has odd valuation there and is not a square in
   `bar{k}(x)`. Thus `A tensor_k bar{k}` is a domain. Flatness gives an injection
   into `K tensor_k bar{k}`, which is the localization of that domain at the
   nonzero elements of `A`, hence is a domain. If `L = k(alpha)` were a
   nontrivial finite algebraic subextension of `K`, perfectness makes `L/k`
   separable, so `L tensor_k bar{k}` is a product of more than one copy of
   `bar{k}` and is not a domain. Flatness preserves `L -> K`, contradicting
   domainhood of `K tensor_k bar{k}`. This supplies the exact constants premise
   for `thm-curves-function-fields-equivalence` (including its Fact F30 route).

3. **Actual model charts and projectivity.** The proof constructs
   `B_0 = k[x,y]/(y^2-h(x))` and
   `B_infinity = k[s,z]/(z^2-w(s))`, where
   `w(s) = s^(2r) h(1/s)`, and glues them by `s=1/x`, `z=y/x^r`. Each chart is
   free of rank two over its base coordinate ring, so the map to the two
   standard affine charts of `P^1` is finite of degree two. The simple-root
   Jacobian calculation proves smoothness on both charts. After base change to
   `bar{k}`, each chart is a domain and the overlap is nonempty, giving
   geometric integrality. The finite map to proper `P^1` gives properness; the
   projective-embedding corollary then gives projectivity. The function field
   is `K`, and the function-field equivalence identifies this explicit curve
   with the unique smooth proper model.

4. **Relative differentials and ramification.** The actual chart presentations
   are `Omega_(B_0/k[x]) = (B_0/(2y)) dy` and
   `Omega_(B_infinity/k[s]) = (B_infinity/(2z)) dz`. Thus a point with `y`
   invertible is unramified. Above a finite irreducible root `g | h`, the fibre
   is `kappa(g)[y]/(y^2)` with one point and residue field `kappa(g)`. Writing
   `h=g u` with `u` a local unit gives maximal ideal `(g,y)=(y)`, so `y` is a
   uniformizer and `e=ord_p(g)=2`; the tame different length is one. At infinity,
   the fibre is `k[z]/(z^2-1) = k x k`; both rational points have `z` invertible,
   so their relative differential modules vanish and each has ramification
   index one.

5. **The `r=1` case.** The projective equation is the smooth conic
   `Y^2 = X^2-Z^2`, with rational point `[1:0:1]`. Its gradient has no
   projective zero in characteristic not two. The cited conic example's
   projection-from-a-point result supplies the isomorphism with `P^1`. This
   target uses that result only; it does not rely on the conic example's
   separate flagged divisor computation.

## Supplier and contract changes

The target now declares the direct suppliers used for the corrected route:
`def-axiom-of-choice`, `def-algebraic-closure`, `def-dependent-choice`,
`def-perfect-field`, `def-relative-algebraic-closure`,
`prop-modules-over-a-field-are-projective-flat-and-injective`,
`thm-choice-implies-dependent-implies-countable-choice`,
`def-finite-morphism-schemes`,
`def-locally-finite-presentation-morphism`,
`thm-jacobian-criterion-smooth-morphism`,
`cor-jacobian-presentation-differentials`,
`thm-local-ring-smooth-curve-dvr`,
`lem-composite-finite-proper-morphism-proper`,
`cor-projective-embedding-every-smooth-proper-curve`, and
`ex-smooth-conic-is-projective-line-with-point`. It also declares
`thm-affine-domain-dimension-transcendence-degree` for the dimension check.
The earlier mathematical dependencies remain.

The exact interface impact is proof and assumption accounting inside the
example. The two-chart construction makes explicit which finite model is meant;
the projectivity citation justifies the word “projective.” No other consumer's
Statement or Definition needs changing because none of the abstract-cover
claims was altered.

## Local checks

On the final stable target, these selected checks passed:

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-riemann-hurwitz-double-cover.md`
- `node tools/rendercheck.mjs items/ex-riemann-hurwitz-double-cover.md`
- `node tools/citecheck.mjs items/ex-riemann-hurwitz-double-cover.md`

An earlier targeted precheck requested canonical phase numbering after the
new model-construction step was added. I adopted that numbering; the final
precheck passed. These are local format, rendering, and citation-placement
checks, not an independent mathematical audit or a library-wide gate.
