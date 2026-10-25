---
id: ex-qftx-coulomb-chart-linearization
kind: example
title: Coulomb chart linearization and derivative loss
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 7
axiom_base: "ZF plus the full Axiom of Choice inherited through the Banach slice and elliptic Green results."
deps:
  - def-axiom-of-choice
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-gauge-sobolev-calculus
  - lem-qftx-covariant-laplacian-sobolev-splitting
  - thm-qftx-sobolev-smooth-irreducible-gauge-bundle
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-gauge-sobolev-calculus: mathematical-premise
  lem-qftx-covariant-laplacian-sobolev-splitting: mathematical-premise
  thm-qftx-sobolev-smooth-irreducible-gauge-bundle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Thomas Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§5.13.3, PDF pp. 115–117: Coulomb slice and the differential of the gauge-action chart."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§4.4, PDF pp. 31–36: abelian slice operator and elliptic inverse; the SU(N) formula is checked directly here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Use the configuration fixed in the earlier definition **Smooth and Sobolev configuration and reduced gauge spaces**: $M$ is a compact, connected, oriented, boundaryless smooth Riemannian manifold of dimension $d\in\{3,4\}$, $\pi:P\to M$ is a smooth right principal $SU(N)$-bundle with $N\ge2$, and $A_0$ is the fixed smooth reference connection. There $\mathcal A_k=A_0+H^k(T^*M\otimes\operatorname{ad}P)$, $d_A\xi=d\xi+[A,\xi]$, the right action is $B^u=u^{-1}Bu+u^{-1}du$, and $d_A^*$ is the formal adjoint with its stated local coefficient formula. Let $k$ be an integer with $k>d/2+1$ and let $A\in\mathcal A_k^*$, meaning its holonomy representation on $\mathbb C^N$ is irreducible. The differential at $(0,0)$ of the Coulomb-gauge action map

$$\Phi_A:\ker(d_A^*:H^k(T^*M\otimes\operatorname{ad}P)\to H^{k-1}(\operatorname{ad}P))\times H^{k+1}(\operatorname{ad}P)\longrightarrow\mathcal A_k,\qquad (a,\xi)\longmapsto(A+a)^{\exp\xi},$$

is the bounded isomorphism

$$L_A(a,\xi)=a+d_A\xi.$$

Its inverse, for $v\in H^k(T^*M\otimes\operatorname{ad}P)$, is

$$L_A^{-1}v=\bigl(v-d_AG_Ad_A^*v,\ G_Ad_A^*v\bigr),$$

where $G_A=(d_A^*d_A)^{-1}:H^{k-1}(\operatorname{ad}P)\to H^{k+1}(\operatorname{ad}P)$ is the bounded inverse from the preceding covariant-Laplacian result. Thus the connection variation lies in $H^k$, the infinitesimal gauge parameter lies in $H^{k+1}$, and the gauge term $d_A\xi$ loses one derivative. This is a linearized chart statement and asserts no determinant or measure formula.

## Example references

[Walpuski, Coulomb slice and linearized gauge action](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, elliptic slice operator in the abelian case](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** $A\in\mathcal A_k^*$ and the configuration data with $k>d/2+1$.

[A1] Full AC is inherited through the configuration, Sobolev, and elliptic suppliers. [[def-axiom-of-choice]]

[F1] [[def-qftx-smooth-sobolev-gauge-configuration]] fixes the Sobolev spaces and right-action convention. [[lem-qftx-gauge-sobolev-calculus]] gives the differential $D\Phi_A(0,0)(a,\xi)=a+d_A\xi$.

[F2] [[lem-qftx-covariant-laplacian-sobolev-splitting]] gives the bounded inverse $G_A$ and decomposition $H^k=\ker d_A^*\oplus\operatorname{im}d_A$.

[F3] [[thm-qftx-sobolev-smooth-irreducible-gauge-bundle]] identifies this derivative as the tangent map of the local Coulomb-slice principal-bundle chart.

## Proof

**Given:** The hypotheses of the Example.

1.1 The calculus lemma [F1] differentiates the right-action formula at the identity, giving $D\Phi_A(0,0)(a,\xi)=a+d_A\xi$. Its domain is $\ker d_A^*\oplus H^{k+1}(\operatorname{ad}P)$ and its codomain is $H^k(T^*M\otimes\operatorname{ad}P)$. The gauge derivative $d_A:H^{k+1}\to H^k$ explains the one-derivative loss. [A1, F1, algebra]

2.1 Set $Q_A=d_AG_Ad_A^*$, the bounded projection onto $\operatorname{im}d_A$ from [F2]. For any $v\in H^k$, $d_A^*(v-Q_Av)=d_A^*v-d_A^*d_AG_Ad_A^*v=0$ and $L_A(v-Q_Av,G_Ad_A^*v)=v$. Conversely, for $a\in\ker d_A^*$ and $\xi\in H^{k+1}$, applying the proposed inverse to $a+d_A\xi$ gives $G_Ad_A^*(a+d_A\xi)=G_A(d_A^*a+d_A^*d_A\xi)=\xi$ and first component $a$. Both composites are therefore identities with the Sobolev orders supplied by [F2], proving the stated bounded inverse. The chart interpretation is the one established in [F3]. [F2, F3, step 1.1, algebra] ∎
