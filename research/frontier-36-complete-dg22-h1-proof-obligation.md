# DG-22 full H1 local-energy proof obligation

Read-only supervisor note for `frontier-36-complete`, batch 14. This is not an
item decision or a change to the active Jacobi writer's files. The selected
claim in `cor-a-geodesic-segment-before-its-first-conjugate-point-is-locally-energy-minimizing`
is strict local minimality of half-energy among nearby fixed-endpoint H1 curves.
The DG-22 prose says “sufficiently small variations with fixed endpoints”; the
batch manifest makes the H1 topology explicit. Preserve that selected claim.

## Exact statement and local coordinate model

Let `gamma:[a,b] -> M`, `a<b`, be a compact affinely parametrized geodesic in a
finite-dimensional Riemannian manifold. Assume there is no conjugate instant to
`gamma(a)` in `(a,b]`. Fix a parallel orthonormal frame along `gamma` and a
uniform moving exponential tube

    Phi(t,x) = exp_{gamma(t)}(sum_i x_i E_i(t)),  |x| < rho.

For curves in this tube with the same endpoints, put
`alpha_x(t)=Phi(t,x(t))`, where `x` is the continuous representative of a real
vector-valued `H1_0([a,b])` class. The local path topology is `||x||_H1`.
Smooth tube transitions preserve this topology near `x=0`: their derivatives
are uniformly bounded on a smaller compact tube, and their time derivative
vanishes at `x=0` and is `O(|x|)`. There are `epsilon,kappa>0` such that

    ||x||_H1 < epsilon  ==>  E(alpha_x)-E(gamma) >= kappa ||x||_H1^2,

with equality only at `x=0`. This gives the selected strict local-minimum
claim. For a constant geodesic, the separate elementary proof is
`E(alpha)>=0=E(gamma)`, with equality only for the constant curve having the
fixed endpoint; the quadratic argument also works when the dimension is
positive. Dimension zero is vacuous apart from the constant case.

## Interval H1 under Countable Choice

Avoid the existing draft one-dimensional Sobolev AC-representative corollary:
its statement assumes full AC, whereas DG-22 promises only countable choice.
Prove the needed one-dimensional fact locally under countable choice. For a
weak `W^{1,2}(a,b)` class with derivative `g in L2`, set
`h(t)=int_a^t g(s) ds`. Finite interval Cauchy–Schwarz makes `g in L1` and
gives `|h(t)-h(s)| <= ||g||_2 sqrt(|t-s|)`, so `h` extends continuously to the
endpoints and is absolutely continuous. Fubini against a compactly supported
smooth test gives `Dh=g` weakly. The distribution of `u-h` has zero derivative;
the published zero-distribution-derivative theorem makes it a constant, and
injectivity of the regular-distribution embedding identifies `u` almost
everywhere with `h+c`. Conversely every such primitive is in `W^{1,2}` by the
same test calculation. In particular, for zero endpoint traces,

    x(t)=int_a^t x'(s) ds,  ||x||_infinity <= sqrt(b-a) ||x'||_2.

The real/vector case is coordinatewise. Smooth superposition with a moving
tube preserves the AC/L2 class: on the compact tube the map and its first
derivatives are bounded; the AC definition and the ordinary chain rule at
almost every differentiability point give the a.e. derivative formula.

If the energy Hessian is first identified only on smooth fields, extend it to
H1 by density. Extend `x'` by zero outside `[a,b]`, approximate it in L2 by
smooth compactly supported functions, subtract a multiple of one fixed smooth
unit-integral bump to restore integral zero, and integrate from `a`. The
resulting smooth endpoint-zero fields converge to `x` in H1. This uses the
published countable-choice `C_c^infinity(R)`-density theorem; it does not
require full AC.

## Bounded Riccati frame and coercivity

Extend `gamma` a little to the left of `a` by local geodesic ODE existence.
Use a parallel frame on the extended interval and write the Jacobi equation
as `A''+R(t)A=0`, with `R(t)` symmetric. Let `A_s(s)=0`, `A_s'(s)=I` for `s<a`.
The matrix `A_a(t)` is invertible for `a<t<=b` by no conjugacy. As `s` tends
to `a`, smooth ODE dependence gives `A_s -> A_a` uniformly with derivatives;
thus `A_s` is invertible on `[a+eta,b]` for small `a-s`. On `[a,a+eta]`, the
Volterra equation and bounded `R` give, uniformly for `s` near `a`,

    A_s(t)/(t-s) = I + O((t-s)^2).

Choose `eta` and `a-s` small enough to make this invertible too. Fix this
`s`. Now `A=A_s` is invertible on the entire closed interval `[a,b]`.
Wronskian constancy and `A(s)=0` give `A^T A'=(A')^T A`; hence
`B=A'A^{-1}` is symmetric, smooth and bounded on `[a,b]`. Differentiating
and using the Jacobi equation gives the Riccati identity

    B' + B^2 + R = 0.

For an endpoint-zero H1 field `w` in the parallel frame, put `q=w'-Bw`.
The AC product rule (or smooth H1 density) and `w(a)=w(b)=0` yield

    I_gamma(w,w)
      = int_a^b (|w'|^2-<Rw,w>) dt
      = int_a^b |q|^2 dt + [<Bw,w>]_a^b
      = ||q||_2^2.

With `K=sup_[a,b] ||B||` and `L=b-a`, the primitive formula and integral
Gronwall inequality give

    |w(t)| <= int_a^t (|q|+K|w|)
             <= exp(KL) sqrt(L) ||q||_2.

Therefore `||w||_2 <= L exp(KL)||q||_2` and
`||w'||_2 <= (1+K L exp(KL))||q||_2`. Hence

    I_gamma(w,w) >= c ||w||_H1^2

for an explicit positive constant `c` depending on this segment. The
left-shift removes the singular `A_a^{-1}` at `a`, so no Hardy inequality is
needed. This argument also covers constant geodesics; in dimension zero its
field space is zero.

## Uniform energy remainder for all H1 curves

On a smaller uniform tube write the pulled-back half-energy density exactly
as

    L(t,x,v) = 1/2 [v^T G(t,x) v + 2 h(t,x) dot v + k(t,x)],

where `G,h,k` are smooth in `(t,x)` and all needed derivatives are uniformly
bounded on the compact tube. The dependence on `v=x'` is exactly quadratic.
Taylor-expand only the smooth `x` coefficients. The first-order integral
vanishes by the geodesic first-variation formula and fixed endpoints. The
quadratic integral equals `I_gamma(w,w)/2` for smooth fields by the second
variation theorem, and then for all H1 fields by the density argument above.
The unintegrated remainder consists only of terms bounded by a constant times
`|x|(|x|^2+|v|^2)` (including an `O(|x|^2)|v|` term handled by
`2|x||v| <= |x|^2+|v|^2`). Thus

    |E(alpha_x)-E(gamma)-I_gamma(w,w)/2|
      <= C ||x||_infinity ||x||_H1^2
      <= C sqrt(L) ||x||_H1^3.

For `||x||_H1` small enough that the remainder is at most
`c||x||_H1^2/4`, coercivity gives the asserted quadratic energy gap. This
does not assume a global minimizing geodesic and does not use Morse theory.

## Exact supplier and artifact obligations

Useful existing suppliers: `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
`thm-existence-and-uniqueness-of-parallel-sections`,
`thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data`,
`lem-wronskian-of-two-jacobi-fields-is-constant`,
`thm-algebraic-symmetries-of-the-riemann-tensor`,
`thm-gronwall-integral-inequality`, `thm-second-variation-formula-for-energy`,
`thm-first-variation-formula-for-energy`,
`thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`,
`thm-locally-integrable-functions-embed-in-distributions`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`,
`def-domain-and-exponential-map-of-a-connection`, and a smooth local inverse
theorem. Cite exact interfaces actually used; the published sharp AC FTC
requires Dependent Choice and should not silently enter this ACω proof.
The local H1 lemma may introduce the interval weak-derivative definition
directly from published `def-distributional-derivative` and L2 classes. If it
instead cites draft `def-sobolev-space-wkp-and-its-norm`, declare the PDE-11
page edge as well as the item edge; do not silently inherit its separate
one-dimensional AC-representative corollary's stronger full-AC premise.

If the full argument is too large for one item, add and fully author local
DG-22 A-page lemmas for (1) interval/tube H1 coordinates, (2) bounded
Riccati-frame coercivity, and (3) the uniform energy Taylor estimate, before
the corollary. Include any new rows in batch-14 manifest and coverage; sync
item frontmatter, statement, strategy, dependency levels and strict proof
contracts. Record no central receipts until the owner certifies a stable
post-authoring scope.

Two later cut-locus items also need the already-authored
`lem-finite-dimensional-unit-spheres-are-sequentially-compact` directly:
`thm-cut-time-is-positive-and-continuous` for limiting directions of
alternative minimizers, and `thm-cut-locus-of-a-point-is-closed` for a
convergent subsequence of cut directions. Their current scaffold dependency
lists omit it. The continuity proof additionally needs the local-diffeomorphism
clause of `thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic`;
both proofs use continuity of distance and exponential maps. Synchronize
their item dependencies, batch manifest dependencies, and proof-contract
citation/step mappings when authored.
