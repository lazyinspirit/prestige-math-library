---
id: prop-qftx-loop-cocycle-jacobi
kind: proposition
title: The Schwinger term obeys the Lie cocycle condition
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qftx-loop-current-cocycle
justified_by: []
dependency_roles:
  def-qftx-loop-current-cocycle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Boris Khesin and Robert Wendt, The Geometry of Infinite-Dimensional Groups
      url: https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf
      locator: Chapter II, §1.1, Definition/Proposition 1.3 and its proof, printed pp. 48–49 (PDF pp. 58–60); smooth-loop cocycle and central bracket.
    - title: Ana Ros Camacho, Kac-Moody Algebras
      url: https://www.math.uni-hamburg.de/home/wockel/teaching/data/cohomology_of_lie_algebras_ros_camacho.pdf
      locator: §6, equations (50)–(55), PDF pp. 8–9; residue cocycle on Laurent-polynomial loops and central bracket.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For the finite-dimensional real Lie algebra $\mathfrak g$, invariant symmetric form $\kappa$, smooth loop algebra $\mathcal L\mathfrak g$, and bilinear form $\omega$ defined in [[def-qftx-loop-current-cocycle]], the form $\omega$ is alternating and satisfies
$$\omega([X,Y],Z)+\omega([Y,Z],X)+\omega([Z,X],Y)=0\qquad(X,Y,Z\in\mathcal L\mathfrak g).$$
Consequently the candidate bracket on $\widehat{\mathcal L\mathfrak g}$ is a Lie bracket and gives a one-dimensional central extension of $\mathcal L\mathfrak g$ by $\mathbb R$.

## Statement references

[[def-qftx-loop-current-cocycle]]

## Exact sequence diagram

The arrows are the linear inclusion $i(a)=(0,a)$ and projection $p(X,a)=X$. The proof verifies that these maps are Lie-algebra homomorphisms, that $\ker p=\operatorname{im}i$, and that $\operatorname{im}i$ is central. The diagram records the resulting exact sequence; the proof does not rely on the diagram.

```tikzcd
0 \arrow[r] & \mathbb R \arrow[r,hook,"i"] & \widehat{\mathcal L\mathfrak g} \arrow[r,two heads,"p"] & \mathcal L\mathfrak g \arrow[r] & 0
```

## Facts & Assumptions

**Given:** The finite-dimensional real Lie algebra, periodic smooth loops, invariant symmetric form, cocycle formula, and candidate bracket of [[def-qftx-loop-current-cocycle]].

[F1] [[def-qftx-loop-current-cocycle]]: $\mathcal L\mathfrak g=C^\infty(S^1,\mathfrak g)$ has the pointwise Lie bracket; $\kappa$ is symmetric and satisfies $\kappa([U,V],W)=\kappa(U,[V,W])$; $\omega(X,Y)=(2\pi)^{-1}\int_0^{2\pi}\kappa(X,Y')\,d\theta$; and the candidate bracket on $\mathcal L\mathfrak g\oplus\mathbb R$ is $[(X,a),(Y,b)]=([X,Y],\omega(X,Y))$.

## Proof

**Given:** [F1].

1.1 Bilinearity of $\kappa$ and differentiation makes $\omega$ bilinear. By symmetry and the product rule,
$$\omega(X,Y)+\omega(Y,X)=\frac1{2\pi}\int_0^{2\pi}\bigl(\kappa(X,Y')+\kappa(X',Y)\bigr)\,d\theta=\frac1{2\pi}\bigl[\kappa(X,Y)\bigr]_{0}^{2\pi}=0.$$
The endpoint values agree because $X$ and $Y$ are smooth maps on $S^1$, so $\omega$ is skew-symmetric; over $\mathbb R$, this implies $\omega(X,X)=0$. [given, F1, algebra]

1.2 Invariance and symmetry give
$$\kappa([X,Y],Z')=\kappa(X,[Y,Z']),\quad \kappa([Y,Z],X')=\kappa(X',[Y,Z]),\quad \kappa([Z,X],Y')=\kappa(X,[Y',Z]).$$
The product rule and $[Y,Z]'=[Y',Z]+[Y,Z']$ therefore yield
$$\kappa([X,Y],Z')+\kappa([Y,Z],X')+\kappa([Z,X],Y')=\partial_\theta\kappa(X,[Y,Z]).$$
Integrating over one period makes the right-hand side zero. By the definition of $\omega$, this is the required cyclic cocycle identity. [given, F1, algebra]

2.1 The displayed operation is bilinear and skew-symmetric by the pointwise Lie bracket and step 1.1. The vector component of its Jacobi sum is the pointwise Jacobi sum in $\mathfrak g$, hence vanishes at every $\theta$. Its real component is the cyclic sum in step 1.2, hence also vanishes. Thus the operation satisfies Jacobi and is a Lie bracket. [given, F1, step 1.1, step 1.2, algebra]

3.1 The maps $i(a)=(0,a)$ and $p(X,a)=X$ are Lie-algebra homomorphisms: the bracket of any two elements in $\operatorname{im}i$ is zero, and $p([(X,a),(Y,b)])=[X,Y]$. The projection is surjective because $p(X,0)=X$, and $\ker p=\{(0,a):a\in\mathbb R\}=\operatorname{im}i$. Moreover $[(0,a),(Y,b)]=(0,\omega(0,Y))=(0,0)$ by bilinearity of $\omega$, so the kernel is central. This proves the asserted central extension. [given, F1, step 2.1, algebra] ∎

