---
id: lem-principal-divisors-have-vanishing-abel-jacobi-class
kind: lemma
title: Principal divisors have vanishing Abel-Jacobi class
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 23
deps:
  - def-abel-jacobi-map
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-meromorphic-differential-on-a-riemann-surface
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - def-ramification-index-and-branch-value
  - def-riemann-sphere-holomorphic-charts
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - thm-path-lifting-for-covering-maps
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, proof of Theorem 20.7(b), printed pp. 164-165: the preimage of a curve from infinity to zero consists of n curves joining poles to zeros, and the trace of a holomorphic differential vanishes."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, first part of the proof of Theorem 15.5 (Abel): for f with no critical value on [0,infinity), the chain C=f^{-1}([0,infinity)) satisfies int_C omega = int_0^infinity f_*(omega)=0, printed p. 129."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, proof of Proposition 7.5 (Abel): D=f*(0)-f*(infinity) and I(D)=0, printed p. 61."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
Jacobian definition in the final conclusion. Let $X$ be a compact connected
Riemann surface and let $f\ne0$ be a nonconstant meromorphic function on $X$
with principal divisor $(f)=\sum_pn_p[p]$ of degree zero
([[def-divisor-principal-and-canonical-divisor-riemann-surface]]); regard $f$
as a holomorphic map $f:X\to\widehat{\mathbb C}$ of degree $n\ge1$
([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]],
[[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]). Let
$R\subseteq\widehat{\mathbb C}$ be the finite set of branch values of $f$ and
let $\gamma$ be a piecewise smooth curve from $\infty$ to $0$ whose interior
avoids $R$. Then the preimage $c:=f^{-1}(\gamma)$, counted with the $n$ inverse
branches, is a $1$-chain with
$$\partial c=f^{*}(0)-f^{*}(\infty)=(f),$$
and $$\int_c\omega=0\qquad\text{for every }\omega\in\Omega(X).$$
Consequently the period functional of the divisor $(f)$ vanishes and
$u((f))=0$ in $\operatorname{Jac}(X)$, where
$u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ is the Abel-Jacobi
homomorphism of [[def-abel-jacobi-map]]. If $f$ is a nonzero constant then
$(f)=0$ and the conclusion is immediate.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$, a nonconstant meromorphic function $f$ with associated map $f:X\to\widehat{\mathbb C}$, its finite branch locus $R$, and a holomorphic differential $\omega$ on $X$.

[F1] $f:X\to\widehat{\mathbb C}$ is a nonconstant holomorphic map between compact Riemann surfaces, hence proper, with a positive degree $n=\deg f$; every regular value has exactly $n$ distinct preimages ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F2] The branch locus $R$ is finite; away from it, $f$ is a local biholomorphism, and every disk $V\subseteq\widehat{\mathbb C}\setminus R$ is evenly covered by $n$ holomorphic inverse branches $\varphi_1,\ldots,\varphi_n$ ([[def-ramification-index-and-branch-value]], [[lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere]], [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F3] For a holomorphic differential $\omega$ on $X$ the local differentials $\sum_j\varphi_j^*\omega$ patch to a trace $f_*\omega$ on $\widehat{\mathbb C}\setminus R$, which extends uniquely to a holomorphic differential on all of $\widehat{\mathbb C}$ ([[lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F4] The extended trace differential is identically zero ([[lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere]]).

[F5] Path lifting holds for coverings: a path in the base starting at the image of a chosen point lifts uniquely through a covering with the chosen starting point ([[thm-path-lifting-for-covering-maps]]).

[F6] At a point $x$ with $f(x)=y$ there are centred coordinates in which $f=z^{e_x(f)}$; at a zero of the meromorphic function $f$ the order equals the ramification index, and at a pole the order is minus the ramification index ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F7] For a holomorphic differential the path integral along a continuous path is computed by local primitives; it is additive under concatenation, and if $\varphi$ is a local biholomorphism into a chart then $\int_{\varphi\circ\gamma}\omega=\int_\gamma\varphi^*\omega$ ([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]).

[F8] On $\operatorname{Div}^0(X)$ the Abel-Jacobi class $u(D)$ is represented by the functional $\omega\mapsto\int_c\omega$ for any $1$-chain $c$ with $\partial c=D$, is independent of the base point, and is additive ([[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]]).

[F9] The Riemann sphere is $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ with its holomorphic charts, in which $0$ and $\infty$ are the points where the coordinate $z$ vanishes, respectively fails to be finite ([[def-riemann-sphere-holomorphic-charts]]).

[F10] Full AC is inherited from the Jacobian definition used in the final conclusion; the transfer computation itself selects nothing beyond the finite lifting data ([[def-axiom-of-choice]], [[def-abel-jacobi-map]]).

## Proof

**Proof technique:** direct.

1.1 A curve with the stated properties exists: choose a radial ray whose direction is different from the arguments of the finitely many nonzero finite branch values, and connect $\infty$ to $0$ along this ray, parametrized piecewise smoothly in the sphere charts. Its interior avoids $R$. For the rest of the proof use the given curve $\gamma$; the computation applies to every curve whose interior avoids $R$, including curves with repeated image points. [F2, F9, given]

1.2 Fix an interior parameter $t_0\in(0,1)$. By [F2] the map off the branch values is an $n$-sheeted covering. Starting at each of the $n$ points over $\gamma(t_0)$, lift the parametrized path on $(0,1)$ in both parameter directions by [F5], obtaining $c_1,\ldots,c_n$ with $f\circ c_j=\gamma$. At each fixed parameter their values are distinct and exhaust the fibre, since reverse lifting is inverse to forward lifting. They are piecewise smooth on the interior by the local holomorphic inverse branches, but their image subsets need not be disjoint. Near either endpoint, choose pairwise disjoint power-coordinate neighborhoods about the finite endpoint fibre; compactness and properness allow a target disk whose full preimage is contained in their union. A lifted tail is connected and thus remains in one of these neighborhoods, and the local equation $t=z^e$ forces its coordinate to tend to zero as the target approaches the endpoint. Hence every $c_j$ extends continuously to $[0,1]$, giving the chain counted with multiplicities. [F1, F2, F5, F6]

2.1 Restrict the paths to a compact subinterval $[\epsilon,1-\epsilon]\subset(0,1)$ and subdivide it into finitely many intervals whose target images lie in evenly covered disks. On each interval the $n$ lifts use every inverse branch once by step 1.2. By [F7], summing their $\omega$ integrals equals the integral of the sum of inverse-branch pullbacks, namely $f_*\omega$ by [F3]. Summing the intervals gives $\sum_j\int_{c_j|_{[\epsilon,1-\epsilon]}}\omega=\int_{\gamma|_{[\epsilon,1-\epsilon]}}f_*\omega=0$ by [F4]. Near each endpoint, the lifts converge into a coordinate disk with a holomorphic primitive; its endpoint differences show that the omitted tail integrals tend to zero. Thus the continuous-path integrals converge to the full chain integral and $\int_c\omega=0$. This calculation retains multiplicity and uses no global inverse branch along a self-intersecting curve. [F3, F4, F7, step 1.2]



2.2 For a zero $q$ of order $e_q$, the local power model over a sufficiently small target disk has exactly $e_q$ points over each nearby regular value. At an interior parameter sufficiently close to the endpoint, the lifted points exhaust that fibre by step 1.2. Exactly $e_q$ of them lie in the neighborhood of $q$, their connected tails remain there, and they all converge to $q$. Thus exactly $e_q$ lifted paths end at $q$, without an embedded-arc assumption. The same argument in the infinity chart counts $e_p$ paths starting at each pole $p$ of order $e_p$. Summing the endpoint boundaries gives $\partial c=\sum_qe_q[q]-\sum_pe_p[p]=f^*(0)-f^*(\infty)=(f)$ by [F6]. [F1, F2, F6, step 1.2, algebra]

3.1 By steps 2.2 and 2.1 the chain $c$ has $\partial c=(f)$ and $\int_c\omega=0$ for all $\omega\in\Omega(X)$; hence by [F8] the class $u((f))$ is represented by the zero functional modulo the period lattice, that is, $u((f))=0$. If $f$ is a nonzero constant then $(f)=0$ and $u(0)=0$ as well. [F2, F8, step 2.2, step 2.1]

4.1 The two cases together prove that every nonzero meromorphic function has $u((f))=0$: both cases by the chain, endpoint, and class computations above, both under the inherited full AC of [F10]. [F10, step 1.1, step 1.2, step 2.2, step 2.1, step 3.1] ∎

## Source notes

The proof is Forster's proof of Theorem 20.7(b) (*Lectures on Riemann
Surfaces*, printed pp. 164-165): a curve from $\infty$ to $0$ whose interior
avoids the branch values has an $n$-curve preimage joining the poles of $f$ to
its zeros, and the trace of any holomorphic differential vanishes on
$\widehat{\mathbb C}$. McMullen's first direction of Theorem 15.5 (printed
p. 129) gives the same computation $\int_C\omega=\int_0^\infty f_*\omega=0$;
Looijenga's proof of Proposition 7.5 (printed p. 61) draws the same conclusion.
The item supplies the curve and the endpoint multiplicities explicitly, so the
argument does not presuppose that $0$ and $\infty$ are regular values.

The scaffold's edges to `thm-symplectic-period-formula-for-wedge-integrals`,
`lem-holomorphic-differentials-form-a-g-dimensional-space`,
`def-period-pairing-and-period-lattice`,
`lem-period-pairing-is-well-defined-and-computed-by-integration`, and
`def-complex-line-integral-over-a-rectifiable-path` were removed: the proof
uses only the trace differential, the path integral, and the chain
representation of $u$, and does not invoke the wedge-period formula, the
dimension count, or plane contour integrals.
