---
id: lem-integral-powers-of-the-complexified-universal-real-line
kind: lemma
title: Integral powers of the complexified universal real line
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-mod-two-reduction-of-chern-classes, cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion, thm-whitney-sum-formula-for-stiefel-whitney-classes, def-stiefel-whitney-classes-from-the-projective-bundle-relation, def-tautological-degree-one-class-on-a-real-projective-bundle, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the characteristic-class suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Complexification and two-torsion, printed pp.134-137"
---

## Statement

Assume AC. Let $\lambda\to\mathbb{RP}^\infty$ be the universal real line,
put $u=w_1(\lambda)\in H^1(\mathbb{RP}^\infty;\mathbb F_2)$ and
$$a=c_1(\lambda_{\mathbb C})\in H^2(\mathbb{RP}^\infty;\mathbb Z).$$
Then
$$2a=0,\qquad \rho_2(a)=u^2,$$
and for every $k\geq1$ the class $a^k$ is nonzero of exact order two, with
$\rho_2(a^k)=u^{2k}$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the characteristic-class suppliers ([[def-axiom-of-choice]]).

[F1] Complexification is the fiberwise tensor product with $\mathbb C$, and underlying-real bundles and Whitney sums are formed fiberwise ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F2] For a complex bundle $E$ one has $w_{2i}(E_{\mathbb R})=\rho_2c_i(E)$ and $w_{2i+1}(E_{\mathbb R})=0$ ([[thm-mod-two-reduction-of-chern-classes]]).

[F3] Total Stiefel-Whitney classes are multiplicative over Whitney sums ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F4] For the universal real line $w_1(\lambda)=u$ is the tautological degree-one class of the real projective bundle definition, and $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[u]$ is a polynomial ring ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F5] Odd Chern classes of a complexified real bundle are two-torsion: $2c_{2j+1}(E_{\mathbb C})=0$; in particular $2c_1(\lambda_{\mathbb C})=0$ ([[cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the universal real line $\lambda$ over $\mathbb{RP}^\infty$, the class $u=w_1(\lambda)$ and $a=c_1(\lambda_{\mathbb C})$.

1.1 The real-linear map $(\lambda_{\mathbb C})_{\mathbb R}\to\lambda\oplus\lambda$ given fiberwise by $v\otimes(a+ib)\mapsto(av,bv)$ has inverse $(x,y)\mapsto x\otimes1+y\otimes i$ and commutes with the real transition functions, so it is a canonical real-bundle isomorphism by [F1]. Hence [F3] gives $w((\lambda_{\mathbb C})_{\mathbb R})=w(\lambda\oplus\lambda)=w(\lambda)^2=(1+u)^2=1+u^2$ over $\mathbb F_2$, where [F4] identifies $w(\lambda)=1+u$ and $2u=0$ in characteristic two. [F1, F3, F4, algebra]

1.2 Two-torsion: by [F5] with $j=0$ we have $2a=0$; multiplying by $a^{k-1}$ gives $2a^k=0$ for every $k\geq1$. [F5]

2.1 The mod-two reduction of $a$: by [F2] applied to the complex bundle $\lambda_{\mathbb C}$, $\rho_2(a)=w_2((\lambda_{\mathbb C})_{\mathbb R})=w_2(\lambda\oplus\lambda)=u^2$ by step 1.1. [F2, step 1.1]

3.1 The class $a^k$ is nonzero for every $k\geq1$: reduction is a ring homomorphism, so $\rho_2(a^k)=\rho_2(a)^k=u^{2k}$ by step 2.1, and $u^{2k}\neq0$ because $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[u]$ is a polynomial ring by [F4]. [F4, step 2.1]

4.1 Exact order two: by step 3.1 the element $a^k$ is nonzero, and by step 1.2 it satisfies $2a^k=0$, so its additive order is exactly two. [step 3.1, step 1.2]

5.1 Boundary cases. For $k=1$ the statements read $2a=0$, $\rho_2(a)=u^2\neq0$ and $\operatorname{ord}(a)=2$. The trivial real bundle has $u=0$ and $a=0$, consistent with all identities; the universal line itself is nonzero so $u\neq0$ and $u^2\neq0$. The coefficient field $\mathbb F_2$ is nonzero, so the nonzero reduction genuinely certifies nonvanishing over $\mathbb Z$. No orientation of $\lambda$ is used, since $w_1$ and the complexification are orientation-free. AC is used only through [A1]. [A1, F4, step 3.1, step 4.1] ∎

## Source notes

Miller's Lecture 36, printed pp. 134-137, is the source for the two-torsion phenomenon: for the universal real line the complexified first Chern class has order two and nonzero mod-two reduction $u^2$, so all its powers are nonzero of exact order two.
