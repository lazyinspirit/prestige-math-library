---
id: ex-the-logarithmic-class-of-the-punctured-line-has-weight-two
kind: example
title: "The punctured line has a weight-two logarithmic class"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-simple-normal-crossings-divisors
  - def-rational-mixed-hodge-structure
  - thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - cor-homology-of-spheres
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publications mathematiques de l IHES 40 (1971), 5-57"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "2.1.16 (the real Tate structure and its twists), 3.1.5 and 3.2.17 (pole-order weight filtration, Gr^W_a on the strata, and W_n = im{H^n(X) -> H^n(U)})"
    - title: "Colleen Robles, Hodge Theory of Complex Projective Varieties, Duke Math 690 course notes, version of May 19 2025"
      url: "https://sites.math.duke.edu/~robles/hw_HT.pdf"
      locator: "Theorem 6.25(ii)-(iv), pp. 100-101: the weight spectral sequence on the stratum intersections, W_l H^k(U) = im H^k(X, W_{l-k} Omega^bullet(log D)), and the range of nonzero Hodge numbers"
---

## Statement

For $U=\mathbb C^\times\subset\mathbb P^1$, $H^1(U,\mathbb Q)=\mathbb Q(-1)$, of weight $2$ and type $(1,1)$. In particular its weight is strictly larger than its cohomological degree.

## Facts & Assumptions

**Given:** The Axiom of Choice; the smooth quasiprojective curve $U=\mathbb C^\times=\mathbb P^1(\mathbb C)\setminus\{0,\infty\}$ with its SNC compactification $j:U\hookrightarrow X=\mathbb P^1$, boundary $D=\{0\}\sqcup\{\infty\}$ ([[def-simple-normal-crossings-divisors]]).

[F1] The strata of the compactification. $D^{[0]}=X=\mathbb P^1$, $D^{[1]}=D$ is the disjoint union of the two points $0$ and $\infty$, and $D^{[a]}=\varnothing$ for $a\ge2$; all are smooth projective complex varieties of pure dimensions $1$ and $0$. The underlying analytic space of $\mathbb P^1$ is the Riemann sphere $S^2$, and $U$ retracts onto the unit circle $S^1$ by $z\mapsto z/|z|$. [given, construct]

[F2] Cohomology of spheres ([[cor-homology-of-spheres]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]). Over $\mathbb Q$, $H_0(S^1)=H_1(S^1)=\mathbb Q$ and $H_n(S^1)=0$ otherwise, and the same pattern holds for $S^2$ in degrees $0$ and $2$; over the field $\mathbb Q$ evaluation identifies $H^n(-;\mathbb Q)$ with the full linear dual of $H_n(-;\mathbb Q)$. Hence $H^0(S^1;\mathbb Q)=H^1(S^1;\mathbb Q)=\mathbb Q$ with higher groups zero, and $H^0(S^2;\mathbb Q)=H^2(S^2;\mathbb Q)=\mathbb Q$ with $H^1(S^2;\mathbb Q)=0$; a point and a two-point space have cohomology $\mathbb Q$ and $\mathbb Q^2$ in degree $0$ and zero in positive degrees.

[F3] The logarithmic mixed Hodge structure ([[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]). For the SNC compactification of [F1] the logarithmic complex endows $H^n(U;\mathbb Q)$ with its weight filtration $W$, of weights at least $n$, satisfying $W_nH^n(U;\mathbb Q)=\operatorname{im}(H^n(X;\mathbb Q)\to H^n(U;\mathbb Q))$, with weight spectral sequence $E_1^{-a,q}=H^{q-2a}(D^{[a]};\mathbb Q)(-a)\Rightarrow H^{q-a}(U;\mathbb Q)$ degenerating at $E_2$ and $\operatorname{Gr}^W_mH^n(U;\mathbb Q)\cong E_2^{n-m,m}$; the local residue normalization of that construction assigns to the closed logarithmic form $dz/z$ on $U$ the rational class $(2\pi i)^{-1}dz/z\in H^1(U;\mathbb Q)$, whose residues at $0$ and at $\infty$ are $1$ and $-1$.

[F4] Tate twist and type ([[def-rational-mixed-hodge-structure]]). The Tate structure $\mathbb Q(-1)$ is the pure rational Hodge structure of weight $2$ and type $(1,1)$, concentrated in $H^{1,1}$; a mixed Hodge structure whose weight-graded pieces are $\operatorname{Gr}^W_2=\mathbb Q(-1)$ and $\operatorname{Gr}^W_m=0$ for $m\ne2$ is pure of weight $2$ and type $(1,1)$.

[A1] AC is assumed and is consumed only through [F3] and its suppliers; the finite computations below are choice-free. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: compute both sides of the weight spectral sequence of the logarithmic complex for $\mathbb P^1$ and identify the surviving degree-one term with the Tate twist.

1.1 The two cohomologies. By [F1] and [F2], $H^0(X;\mathbb Q)=\mathbb Q$, $H^1(X;\mathbb Q)=0$, $H^2(X;\mathbb Q)=\mathbb Q$; $H^0(D^{[1]};\mathbb Q)=\mathbb Q^2$ and $H^1(D^{[1]};\mathbb Q)=0$; and $H^0(U;\mathbb Q)=\mathbb Q$, $H^1(U;\mathbb Q)=\mathbb Q$, $H^2(U;\mathbb Q)=0$, the generator being the meridian class dual to the circle. [F1, F2, given, algebra]

2.1 The logarithmic generator. By the residue normalization of [F3] the class $(2\pi i)^{-1}dz/z$ is a nonzero rational class in $H^1(U;\mathbb Q)$ pairing by $1$ with the positively oriented meridian, so it generates the one-dimensional space $H^1(U;\mathbb Q)$ of step 1.1; its residues at $0$ and $\infty$ are $1$ and $-1$, because in the coordinate $w=1/z$ at infinity the form $dz/z$ equals $-dw/w$. [F3, step 1.1, algebra]

3.1 The weight spectral sequence. In the spectral sequence of [F3] only $a=0$ and $a=1$ contribute. The $a=0$ column is $E_1^{0,q}=H^q(X;\mathbb Q)$: $E_1^{0,0}=\mathbb Q$ (weight $0$), $E_1^{0,1}=0$, $E_1^{0,2}=\mathbb Q$ (weight $2$); the $a=1$ column is $E_1^{-1,q}=H^{q-2}(D^{[1]};\mathbb Q)(-1)$: this is $\mathbb Q(-1)^2$ for $q=2$ (weight $2$) and vanishes for $q\ne2$. The only nonzero differential is $d_1:E_1^{-1,2}=\mathbb Q(-1)^2\to E_1^{0,2}=\mathbb Q$, which is the residue/Gysin map sending the pair of residue coordinates $(r_0,r_\infty)$ to their sum $r_0+r_\infty$, a morphism of pure Hodge structures of weight $2$; its kernel is the one-dimensional subspace $\{(r_0,r_\infty):r_0+r_\infty=0\}=\mathbb Q\cdot(1,-1)\cong\mathbb Q(-1)$, and its image is all of $E_1^{0,2}$. Hence $E_2^{-1,2}=\mathbb Q(-1)$, $E_2^{0,2}=0$, $E_2^{0,0}=\mathbb Q$, the remaining $E_2$-terms vanish, and the sequence degenerates at $E_2$. [F3, step 1.1, step 2.1, algebra]

4.1 The mixed Hodge structure on $H^1(U,\mathbb Q)$. By [F3] the weight-graded piece $\operatorname{Gr}^W_mH^1(U;\mathbb Q)$ is $E_2^{1-m,m}$, so by step 3.1 it is $\mathbb Q(-1)$ for $m=2$ and vanishes for every other $m$; in particular $W_1H^1(U;\mathbb Q)=0$ and $W_2H^1(U;\mathbb Q)=H^1(U;\mathbb Q)$, which also agrees with the weights-at-least-$1$ and image formulas of [F3] and with $H^1(X;\mathbb Q)=0$ from step 1.1. By [F4] the class supported in weight $2$ with $\operatorname{Gr}^W_2=\mathbb Q(-1)$ makes $H^1(U;\mathbb Q)$ pure of weight $2$ and type $(1,1)$, so $H^1(U,\mathbb Q)=\mathbb Q(-1)$; the classical generator $(2\pi i)^{-1}dz/z$ of step 2.1 is a rational class of this structure. [F3, F4, step 2.1, step 3.1, algebra]

5.1 Conclusion and boundaries. The weight of $H^1(U,\mathbb Q)$ is $2$, strictly larger than the cohomological degree $1$, and the only nonzero Hodge number is $h^{1,1}=1$. The space $U$ is nonempty and disconnected cases do not arise; $H^0$ and $H^2$ of $U$ are handled by step 1.1 and carry weights $0$ and at most $2$; the two residue coordinates are the two components of $D$, and the kernel computation is finite linear algebra over $\mathbb Q$; no choice beyond [A1] is used. [A1, F4, step 2.1, step 4.1, given] ∎

## Remarks

- The example is a leaf of the examples page: nothing in the library depends on it, and its only in-run supplier is the logarithmic theorem, so it inherits that theorem's open obligations, in particular the local filtered computation and the Hodge-opposition clause recorded in its remarks; the weight and type conclusions above use only the parts of the supplier that are proved there (the weight spectral sequence, its degeneration and the graded identification) together with the Tate-twist conventions of [F4]. Its decision is therefore left escalated together with the theorem's.

- The sign convention in the residue pair $(1,-1)$ is the one of [F3]: the residue at $0$ of $dz/z$ is $1$ in the coordinate $z$, while at $\infty$, in the coordinate $w=1/z$, the same form is $-dw/w$, giving $-1$.
