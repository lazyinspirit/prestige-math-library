---
id: lem-principal-divisors-have-vanishing-abel-jacobi-class
kind: lemma
title: Principal divisors have vanishing Abel-Jacobi class
status: draft
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
  precheck: pending
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

1.1 Choose $\epsilon>0$ small enough that the closed disk of radius $\epsilon$ about $0$ contains no point of $R$ other than possibly $0$, and choose a direction $\theta$ that is not the argument of any point of $R\setminus\{0\}$. Then the radial segment from $\infty$ to $\epsilon e^{i\theta}$ together with the straight segment from $\epsilon e^{i\theta}$ to $0$ is a piecewise smooth path $\gamma$ from $\infty$ to $0$ whose interior avoids $R$: a point $r\in R\setminus\{0\}$ lies on the radial ray only if its argument is $\theta$, and the open disk of radius $\epsilon$ meets $R$ at most at $0$. This proves the stated existence of $\gamma$. [F2, F9]

1.2 Put $\gamma^\circ:=\gamma\bigl((0,1)\bigr)$ and fix a point over its initial value; by [F2] the map $f$ restricted to $X\setminus f^{-1}(R)$ is an $n$-sheeted covering of $\widehat{\mathbb C}\setminus R$, so [F5] lifts $\gamma^\circ$ uniquely through each of the $n$ preimages of that point. The $n$ lifts $c_1,\ldots,c_n:(0,1)\to X$ are smooth, satisfy $f\circ c_j=\gamma^\circ$, are pairwise disjoint, and their images exhaust $f^{-1}(\gamma^\circ)$. By [F6], applied in centred coordinates at each point of $f^{-1}(\infty)$ and $f^{-1}(0)$, each $c_j$ extends continuously to a path on $[0,1]$, with $c_j(0)\in f^{-1}(\infty)$ and $c_j(1)\in f^{-1}(0)$: near a point over $\infty$ or $0$ the local model is $z\mapsto z^{\pm e}$ on a punctured disk, and the lifted branch converges to the centre. [F1, F2, F5, F6]

1.3 We count the endpoints. At a zero $q$ of $f$ of order $e$, the normal form is $f=z^{e}$ in a centered coordinate, and the preimage of a small embedded arc ending at $0$ has exactly $e$ branches approaching $q$ (the $e$-th roots of the parameter), so exactly $e$ of the paths $c_j$ end at $q$; likewise exactly $e$ paths start at a pole $p$ of order $e$, since $f=z^{-e}$ there. Summing the boundaries of the paths gives $\partial c=\sum_q e_q[q]-\sum_p e_p[p]=f^{*}(0)-f^{*}(\infty)$, and by [F6] the multiplicities $e_q,e_p$ are exactly the orders of $f$ at its zeros and (with sign) at its poles, so this divisor is $(f)$; in particular $\deg(f)=0$. [F6]

1.4 Let $\omega\in\Omega(X)$ and let $\varphi_j$ denote the inverse branch of $f$ along which $c_j$ runs, so $c_j=\varphi_j\circ\gamma^\circ$ on the interior. Restricting all paths to the compact subinterval $[\epsilon',1-\epsilon']$ and applying [F7] piecewise in charts along $\gamma^\circ$, $\int_{c_j}\omega=\int_{\gamma^\circ}\varphi_j^*\omega$; summing over $j$ and using the defining patching $f_*\omega=\sum_j\varphi_j^*\omega$ of [F3] gives $\int_c\omega=\int_{\gamma^\circ}f_*\omega$ as a limit over $\epsilon'\to0$, legitimate because both sides are path integrals of differentials holomorphic at the endpoints. Since $f_*\omega$ extends to a holomorphic differential on $\widehat{\mathbb C}$ and is identically zero by [F3], the integral vanishes: $\int_c\omega=0$ for every $\omega\in\Omega(X)$. [F3, F4, F7]

1.5 By steps 1.3 and 1.4 the chain $c$ has $\partial c=(f)$ and $\int_c\omega=0$ for all $\omega\in\Omega(X)$; hence by [F8] the class $u((f))$ is represented by the zero functional modulo the period lattice, that is, $u((f))=0$. If $f$ is a nonzero constant then $(f)=0$ and $u(0)=0$ as well. [F2, F8]

2.1 The two cases together prove that every nonzero meromorphic function has $u((f))=0$: the nonconstant case by steps 1.1-1.5 and the constant case by step 1.5, both under the inherited full AC of [F10]. [F10, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎

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

Unfinished suppliers and exact uses:
`lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`
supplies the trace differential, its patching and its vanishing in steps 1.2
and 1.4, and remains escalated on its Riemann-Roch and finiteness inputs.
`def-abel-jacobi-map` supplies the point map and the chain representation of
$u(D)$ in the statement and step 1.5 and carries no current item receipt yet;
`lem-abel-jacobi-map-is-well-defined-and-base-point-independent` supplies the
chain representation used in step 1.5 and is escalated on the Jacobian and
period suppliers. Keep this lemma escalated until those decisions and uses are
reconciled.

The scaffold's edges to `thm-symplectic-period-formula-for-wedge-integrals`,
`lem-holomorphic-differentials-form-a-g-dimensional-space`,
`def-period-pairing-and-period-lattice`,
`lem-period-pairing-is-well-defined-and-computed-by-integration`, and
`def-complex-line-integral-over-a-rectifiable-path` were removed: the proof
uses only the trace differential, the path integral, and the chain
representation of $u$, and does not invoke the wedge-period formula, the
dimension count, or plane contour integrals.
