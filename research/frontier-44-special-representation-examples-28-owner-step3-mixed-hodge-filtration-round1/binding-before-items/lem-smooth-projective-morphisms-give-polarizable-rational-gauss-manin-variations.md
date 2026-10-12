---
id: lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations
kind: lemma
title: "Geometric Gauss-Manin Hodge variations and integral lattices"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-geometric-polarizable-hodge-variation,
       thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms,
       thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties,
       thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses,
       lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex,
       thm-jacobian-criterion-smooth-morphism,
       def-local-system-of-r-modules-and-its-pullback,
       lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
       def-axiom-of-choice,
       thm-projective-morphism-proper,
       lem-smooth-projective-analytification-has-rational-kahler-polarization,
       thm-holomorphic-implicit-function-theorem,
       thm-fundamental-theorem-for-nonautonomous-smooth-odes,
       thm-smooth-dependence-of-ode-solutions-on-parameters,
       prop-the-maximal-solution-domain-is-open,
       thm-smooth-partitions-of-unity-exist-on-manifolds,
       thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; Theoreme 4.1.1 and SS4.2.1-4.2.5, printed pp. 40-45 (Leray degeneration and the construction of the algebraic category of variations)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision); SS3.1-3.2, printed pp. 36-41 (Leray degeneration and the local systems of a smooth projective family)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For a smooth projective morphism
$f:X\to S$ of smooth quasiprojective complex varieties, $R^mf_*\mathbb Q$ is a
finite-rank local system ([[def-local-system-of-r-modules-and-its-pullback]]),
with full monodromy-stable integral lattice obtained from
$R^mf_*\mathbb Z$ modulo torsion, and with a continuous pure Hodge
decomposition of weight $m$ ([[def-geometric-polarizable-hodge-variation]]). A
relatively ample line bundle supplies flat Lefschetz operators and a flat
rational polarization of this variation. Products, sums, Tate twists, exterior
powers and Hodge direct summands have the corresponding geometric realizations
and full integral lattices. Pullbacks of algebraic maps between smooth
projective fibers preserve rational Hodge structures.

## Facts & Assumptions

**Given:** AC, smooth quasiprojective complex varieties $X,S$ and a smooth
projective morphism $f:X\to S$, with the Hodge types and the polarization
conventions fixed by [[def-geometric-polarizable-hodge-variation]] and the
polydisc normal form available from the holomorphic implicit function theorem.

[F1] A projective morphism is proper
([[thm-projective-morphism-proper]]); the closed points of a smooth projective
complex scheme $X$ of pure dimension $n$ form a compact Hausdorff second-countable
smooth complex manifold $X^{\mathrm{an}}$, every standard smooth algebraic chart
becomes a holomorphic chart, every morphism of smooth complex schemes analytifies
to a holomorphic map, and every ample invertible sheaf has a smooth positive
closed real $(1,1)$-form whose de Rham class is the real image of a rational
class ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]]).

[F2] A morphism locally of finite presentation that is smooth at a point admits
there a presentation whose Jacobian has an invertible minor
([[thm-jacobian-criterion-smooth-morphism]]), and the holomorphic implicit
function theorem turns such a presentation into local holomorphic product
coordinates ([[thm-holomorphic-implicit-function-theorem]]).

[F3] For a smooth first-order ODE near any base data there are a compact time
interval and a neighbourhood on which the solution exists and is smooth in the
initial state and parameters
([[thm-fundamental-theorem-for-nonautonomous-smooth-odes]],
[[thm-smooth-dependence-of-ode-solutions-on-parameters]]), and the maximal
solution domain of a smooth vector field is open
([[prop-the-maximal-solution-domain-is-open]]).

[F4] A closed smooth manifold has the homotopy type of a finite CW complex, so
its integral cohomology is finitely generated in each degree
([[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]]);
on a metric space with a neighbourhood basis of contractible open sets, derived
constant-sheaf cohomology is singular cohomology and a nonempty contractible
such space has cohomology $k$ in degree zero and zero otherwise
([[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]).

[F5] On the proved bounded constructible subcategory, the analytic six operations
include ordinary proper base change, which identifies the cohomology sheaf
$R^mf_*\mathbb Q$ with the fibre cohomology, and the product projection formula
$R\mathrm{pr}_*\mathrm{pr}^*B\simeq B\otimes_kC^*(F;k)$ for a locally trivial
product projection with finite-type smooth fibre
([[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]]).

[F6] For a compact Kähler manifold every de Rham class has a unique smooth
harmonic representative and $H^k(X;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X)$ with
$\overline{H^{p,q}}=H^{q,p}$, the decomposition is independent of the Kähler
metric, pullback by holomorphic maps and cup product preserve Hodge type, and
$H^k(X;\mathbb Q)$ carries the resulting functorial rational pure Hodge
structure ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).
The elliptic parametrix and Fredholm theory for a formally self-adjoint elliptic
operator on a compact manifold give the finite-dimensional harmonic space, the
resolvent bounds $H^k\to H^{k+2}$ and the smoothing of its spectral projection
([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]).

[F7] On the primitive part $P^k$ of a compact Kähler $n$-fold the form
$Q_k(a,b)=\epsilon(k)\int_Xa\wedge b\wedge\omega^{n-k}$ is $(-1)^k$-symmetric,
pairs $P^{p,q}$ only with $P^{q,p}$, is positive on $i^{p-q}Q_k(a,\bar a)$, and
is rational when the Kähler class is rational; full cohomology is polarized by
the sign-adjusted orthogonal Lefschetz decomposition, and the construction
applies to smooth projective varieties through their smooth projective
analytifications ([[thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties]]).

[F9] Under $\mathrm{AC}_\omega$ every open cover of a smooth manifold admits a
subordinate smooth partition of unity
([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F8] The cohomological Künneth cross product is an isomorphism
$\bigoplus_{p+q=n}H^p(X;R)\otimes_RH^q(Y;R)\to H^n(X\times Y;R)$ for a PID $R$
when the relevant homology is finite free
([[thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses]]), and a
local system on $S$ is exactly a functor from the fundamental groupoid of $S$ to
$R$-modules with transport isomorphisms
([[def-local-system-of-r-modules-and-its-pullback]]).

## Proof

**Proof technique:** direct.

1.1 Local product structure. The analytification $f^{\mathrm{an}}$ is a proper holomorphic map, because $f$ is projective by hypothesis and projective morphisms are proper by [F1]; its fibres are closed complex submanifolds, compact by properness. At every point of $X$ the smooth algebraic morphism $f$ admits the presentation of [F2], and the holomorphic implicit function theorem of [F2] exhibits holomorphic charts in which $f^{\mathrm{an}}$ is the linear projection of a product of polydiscs; consequently each fibre is a compact complex manifold. In particular, for every $s\in S$ the fibre $f^{-1}(s)$ is compact and, by [F1] applied fibrewise, carries a Kähler structure. [F1, F2, given]

2.1 Transport and the cohomology local systems. Choose a smooth horizontal complement to $\ker df^{\mathrm{an}}$ on $X^{\mathrm{an}}$ (locally the product charts of step 1.1 provide one; glue the local choices with a smooth partition of unity on the manifold $X^{\mathrm{an}}$ [F9]). For a path $\gamma:[0,1]\to S$ and a point $x\in f^{-1}(\gamma(0))$, the horizontal ODE $\dot x(t)\in H_{x(t)}$ with $f(x(t))=\gamma(t)$ has a unique maximal solution by [F3]; because $f$ is proper, the lifted solution stays in the compact set $f^{-1}(K)$ for a compact neighbourhood $K$ of $\gamma([0,1])$, so by the openness of the maximal solution domain in [F3] it exists on all of $[0,1]$. The resulting transport map $\tau_\gamma:f^{-1}(\gamma(0))\to f^{-1}(\gamma(1))$ is a diffeomorphism, smooth in the initial point by the smooth dependence on initial data in [F3], and it depends only on the endpoint-fixed homotopy class of $\gamma$: a homotopy of paths lifts, by the smooth dependence on parameters in [F3], to a smooth homotopy of horizontal lifts with the same initial points, and uniqueness of solutions to the ODE gives the same terminal points. The assignments $x\mapsto H^m(f^{-1}(x);R)$ for $R=\mathbb Z,\mathbb Q$, together with the isomorphisms $\tau_\gamma^*$, therefore define functors on the fundamental groupoid of $S$, that is, $R$-module local systems in the sense of [F8]; this is the local system $R^mf^{\mathrm{an}}_*\underline R$ of the family. [F3, F8, F9, step 1.1, construct]

3.1 Identification with the sheaves and integral lattices. On each fibre, and on each product chart of step 1.1, the space is a metric space with a neighbourhood basis of contractible open sets, so [F4] identifies singular cohomology with constant-sheaf cohomology there. The proper base change clause of [F5] identifies the sheaf $R^mf_*\mathbb Q$ with the fibrewise cohomology of the local system of step 2.1; the same identification for $\mathbb Z$-coefficients gives the local system $R^mf_*\mathbb Z$. Each fibre is a closed smooth manifold, so its integral cohomology is finitely generated by [F4]; hence the quotient of $H^m(f^{-1}(x);\mathbb Z)$ by its torsion group is a full finitely generated free lattice in $H^m(f^{-1}(x);\mathbb Q)$, and the transport isomorphisms of step 2.1 preserve the torsion subgroups and these lattices. Passing to the quotient by torsion therefore produces the full monodromy-stable integral lattice of the variation. [F4, F5, step 2.1, algebra]

3.2 Continuous pure Hodge decomposition. Fix $s\in S$ and a product chart $B\times F\cong f^{-1}(B)$ near $s$ as in step 1.1, with $F$ the fibre over $s$. The restrictions of a smooth family of Kähler metrics — for instance the pullback along the projective embedding of the positive closed forms supplied in [F1] — give a smooth family $\Delta_t$, $t\in B$, of formally self-adjoint elliptic Laplacians on the fixed compact manifold $F$, with the same principal symbol; here the smooth family of metrics is obtained from the projective embedding into $S\times\mathbb P^N$ by restricting the Fubini-Study form, and the identification of the fibres with $F$ is the product chart. By the elliptic parametrix and Fredholm theory of [F6], the kernel of $\Delta_{t_0}$ is finite dimensional and the resolvent is bounded from $L^2$ to $H^2$; a fixed contour around $0$ separating the zero spectrum gives, for $t$ near $t_0$, convergent Neumann series for $(\Delta_t-\lambda)^{-1}$ and hence a continuously varying finite-rank projection onto the kernel of $\Delta_t$, compare [F6]. Its rank equals $\dim\ker\Delta_{t_0}$ for $t$ near $t_0$ and the projection is smoothing, so it projects exactly onto the harmonic space; applying the same continuously varying projections to the type projections of the forms yields continuously varying subspaces $H^{p,q}_t$ of the harmonic representatives. Since the decomposition is independent of the metric and functorial by [F6], the resulting family of decompositions of $H^m(f^{-1}(t);\mathbb C)$ is a continuous pure Hodge decomposition of weight $m$ of the local system $R^mf_*\mathbb Q$ in the sense of the definition. [F1, F6, step 2.1, construct, algebra]

4.1 Flat Lefschetz operators and polarization. Let $L$ be a relatively ample line bundle on $X$. Its first Chern class is a class in $H^2(X;\mathbb Q)$, and by [F1] a positive closed form representing it restricts on each fibre to a Kähler form with rational class; in the product chart the restrictions to the fibres induce one and the same class on the fixed model $F$ under the identifications $\tau_\gamma$ of step 2.1, because those identifications are induced by the homotopic family of inclusions of the fibres into $X$ and cohomology is homotopy invariant; explicitly, if $\psi_t:F\to f^{-1}(t)$ are the product-chart identifications, then the maps $(t,x)\mapsto\psi_t(x)$ exhibit the composites $i_t\circ\psi_t$ as homotopic to $i_s\circ\psi_s$, so $\psi_t^*(c_1(L)|_{f^{-1}(t)})=\psi_s^*(c_1(L)|_{f^{-1}(s)})$. Cup product and integration are compatible with the transport isomorphisms, so the map $a\mapsto c_1(L)\smile a$ is a flat Lefschetz operator, and the hard-Lefschetz decomposition of [F6] is flat. The forms $Q_k$ of [F7] applied to the primitive pieces give a flat rational bilinear form, since their defining integrals involve only cup products, the flat powers of the Kähler class just described, and the constant sign $\epsilon(k)$; the positivity clause of [F7] holds on every fibre, and the full polarization is the sign-adjusted orthogonal sum along the flat Lefschetz decomposition, hence also flat, rational and positive. This supplies the flat rational polarization required in the definition. [F1, F6, F7, step 2.1, step 3.2, algebra]

5.1 Geometric closures and full lattices. All assertions are made over a fixed open piece of the base, and may be pulled back along a base change to any smooth $S'$ by change of the parameter. Products: for smooth projective $f_i:X_i\to S$, $i=1,2$, the product family $X_1\times_SX_2\to S$ is smooth projective, and the cohomological Künneth isomorphism of [F8] identifies $R^{m}(f_1\times_Sf_2)_*\mathbb Q$ with the direct sum of tensor products $R^pf_{1*}\mathbb Q\otimes R^{q}f_{2*}\mathbb Q$, $p+q=m$, compatible with Hodge type because pullback and wedge of $(p,q)$ forms preserve bidegree by [F6]; the integral version follows from the finite-freeness in each degree and the same cross-product identification, so the tensor products and their full lattices are geometric. Direct sums are realized by disjoint unions of families over $S$. The Tate twist $\mathbb Q(1)$ is realized by the constant family $\mathbb P^1\times S\to S$ in degree two, so its tensor powers $(r\ge0)$ and their form-dual inverses $(r<0)$ realize all integers $r$; Tate twisting scales the Hodge types as in the definition. Exterior powers are Hodge direct summands of tensor powers cut out by the rational alternating idempotent, which is flat and a Hodge morphism on every fibre; more generally a prescribed flat rational idempotent that is a Hodge morphism on every fibre cuts out a geometric Hodge direct summand of a realized variation. Intersecting such a rational direct summand with the full ambient lattice of step 3.1 gives its full monodromy-stable lattice: a rational basis of the summand can be cleared to integral vectors of the ambient lattice, and flatness of the summand makes the intersection monodromy-stable. Finally, for a morphism $g:X'\to X$ of smooth projective complex varieties, $g^*:H^m(X;\mathbb Q)\to H^m(X';\mathbb Q)$ preserves Hodge types by the pullback functoriality clause of [F6], so rational pullbacks between smooth projective fibres are morphisms of pure Hodge structures. This proves every closure and lattice clause of the statement concerning a single smooth projective family; the Gauss-Manin family itself is geometric and polarizable by steps 2.1-5.1. [F1, F5, F6, F8, step 3.1, step 4.1, construct, algebra]

6.1 Conclusion. Steps 2.1 and 3.1 produce the finite-rank rational and integral local systems with full monodromy-stable lattices, step 3.2 the continuous pure Hodge decomposition, step 4.1 the flat Lefschetz operators and the flat rational polarization, and step 5.1 the remaining closure, lattice and pullback clauses. Hence $R^mf_*\mathbb Q$ is a geometric polarizable rational Hodge variation in the sense of the definition, with the stated additional properties. No analytic-variation theorem or Gauss-Manin semisimplicity theorem is imported; the argument is the fibre-bundle, harmonic and Künneth construction of the family categories. [step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, given, algebra] ∎

## Remarks

The proof above is complete relative to its typed suppliers, three of which belong to sibling pairs of this same run and are recorded as open obligations: the compact Kähler decomposition theorem, the Kähler-identity hard-Lefschetz and Hodge-Riemann package, and the analytic six-operation base-change theorem. The horizontal-lifting and product-chart arguments use only the published ODE smooth-dependence, implicit-function and properness suppliers. The compact Kähler supplier's author is constructing the rational comparison and elliptic bounds separately, and this lemma consumes exactly the clauses quoted in [F5] and [F6].
