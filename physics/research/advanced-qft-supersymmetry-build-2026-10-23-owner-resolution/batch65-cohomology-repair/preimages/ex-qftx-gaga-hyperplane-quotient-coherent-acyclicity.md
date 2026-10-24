---
id: ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity
kind: example
title: "A hyperplane-supported coherent quotient on a polydisc"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: "A local complex analytic sheaf example; no physical model or empirical claim is made."
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-qftx-analytic-coherent-module
  - thm-qftx-gaga-analytic-oka-coherence
  - def-direct-image-sheaf
  - lem-direct-image-is-sheaf
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-power-series-expansion-in-several-complex-variables
  - cor-uniqueness-of-multivariable-power-series-coefficients
  - thm-qftx-gaga-local-coherent-acyclicity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  def-direct-image-sheaf: mathematical-premise
  lem-direct-image-is-sheaf: mathematical-premise
  thm-sheaf-morphism-isomorphism-stalkwise: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
  thm-qftx-gaga-local-coherent-acyclicity: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Demailly, Analytic Methods in Algebraic Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter IX §4.B, pp. 419–421: local coherent-sheaf vanishing; the quotient identification is checked by stalks here."
    - title: "Joachim Wehler, Stein Manifolds"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
      locator: "§5.2, Theorem 5.14 and Corollary 5.15, printed pp. 174–180: coherent-sheaf vanishing on sufficiently small polydiscs."
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Example

Assume the full Axiom of Choice, let $N\ge1$, and on a neighborhood $U$ of
$0\in\mathbb C^N$ define the coherent quotient
$\mathcal Q_U=\mathcal O_U/(z_1)\mathcal O_U$. Let $W$ be a coordinate polydisc
supplied by the local coherent-acyclicity theorem for $\mathcal Q_U$. Let
$D\subseteq W$ be a
nonempty coordinate polydisc centered at $0$, let
$$H_D=D\cap\{z_1=0\},\qquad i:H_D\hookrightarrow D,$$
and set $\mathcal Q=\mathcal O_D/(z_1)\mathcal O_D$. Then $\mathcal Q$ is
coherent and restriction to the hyperplane induces an isomorphism
$$\mathcal Q\cong i_*\mathcal O_{H_D}.$$
Consequently
$$\Gamma(D,\mathcal Q)\cong\mathcal O(H_D),\qquad
H^q(D,\mathcal Q)=0\quad(q>0).$$

## Example references

[Demailly, Chapter IX §4.B, pp. 419–421](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §5.2, Theorem 5.14 and Corollary 5.15, pp. 174–180](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** Full AC, $N\ge1$, a coordinate polydisc $D\subseteq W\subset\mathbb C^N$ centered at $0$, the analytic hyperplane $H_D=D\cap\{z_1=0\}$, and its closed inclusion $i:H_D\hookrightarrow D$.

[A1] [[def-axiom-of-choice]]: full AC is assumed, as in the local coherent-acyclicity theorem.

[F1] [[def-qftx-analytic-coherent-module]]: a coherent module is locally of finite type and has locally finite-type relation sheaves.

[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: $\mathcal O_D$ is coherent and coherent analytic modules are closed under cokernels. Its full current proof and manifest statement match this use, but its existing `ready` record is hash-stale; its transitive bounded-degree-relations helper record is also stale. This input remains unresolved for readiness.

[F3] [[def-direct-image-sheaf]]: for the inclusion $i$, $(i_*\mathcal O_{H_D})(V)=\mathcal O_{H_D}(V\cap H_D)$ for each open $V\subseteq D$; its stalk is the corresponding hyperplane stalk on $H_D$ and zero off $H_D$.

[F4] [[lem-direct-image-is-sheaf]]: direct image under a continuous map sends a sheaf to a sheaf, so the restriction maps define the target sheaf in the restriction morphism.

[F5] [[thm-sheaf-morphism-isomorphism-stalkwise]]: a morphism of sheaves is an isomorphism if its induced map on every stalk is an isomorphism.

[F6] [[thm-power-series-expansion-in-several-complex-variables]] and [[cor-uniqueness-of-multivariable-power-series-coefficients]]: holomorphic germs have convergent multivariable power series with unique coefficients, so vanishing of the restriction to $z_1=0$ removes exactly the terms with zero $z_1$ exponent.

[F7] [[thm-qftx-gaga-local-coherent-acyclicity]]: on the chosen $W$, every coherent analytic module has zero positive-degree ordinary cohomology on each nonempty coordinate polydisc contained in $W$.

## Proof

**Proof technique:** direct.

1.1 For each $D\subseteq W$, multiplication by $z_1$ gives a morphism $\mathcal O_D\to\mathcal O_D$. Restriction of holomorphic functions to $H_D$ is a morphism $\mathcal O_D\to i_*\mathcal O_{H_D}$ by [F3]–[F4], and it kills the image of multiplication by $z_1$. It therefore induces a morphism $\bar r:\mathcal Q\to i_*\mathcal O_{H_D}$. The quotient is coherent by [F1] and closure under cokernels in [F2]. [A1, F1, F2, F3, F4, given, construct]

1.2 At a point $a=(0,a')\in H_D$, a germ $h$ holomorphic on $H_D$ extends to $\widetilde h(z_1,z')=h(z')$, so $\bar r_a$ is surjective by [F3]. If $f$ is a holomorphic germ at $a$ whose restriction to $z_1=0$ vanishes, write its convergent expansion on a smaller product polydisc as $f(z_1,a'+\zeta')=\sum_{k,\alpha'}c_{k,\alpha'}z_1^k(\zeta')^{\alpha'}$. Since the restriction is the zero germ, [F6] implies $c_{0,\alpha'}=0$ for every $\alpha'$. The series $g(z_1,a'+\zeta')=\sum_{k\ge1,\alpha'}c_{k,\alpha'}z_1^{k-1}(\zeta')^{\alpha'}$ still converges on every smaller product polydisc, because shifting each positive $z_1$ exponent down by one preserves the positive radius of convergence. Thus $g$ is holomorphic and $f=z_1g$. The kernel of restriction on this stalk is exactly $(z_1)$, so $\bar r_a$ is an isomorphism. [F3, F6, given, algebra]

2.1 If $a\in D\setminus H_D$, then $z_1(a)\ne0$, so the germ of $z_1$ is a unit and $\mathcal Q_a=0$. The stalk $(i_*\mathcal O_{H_D})_a$ is zero by [F3]. Together with step 1.2 this proves that $\bar r$ is an isomorphism on every stalk; [F5] gives the sheaf isomorphism. [F3, F5, step 1.2, given]

2.2 By the direct-image section formula [F3], $\Gamma(D,i_*\mathcal O_{H_D})=\mathcal O(H_D)$, so step 2.1 identifies this with $\Gamma(D,\mathcal Q)$. The quotient is coherent by step 1.1 and [F2]; applying [F7] gives $H^q(D,\mathcal Q)=0$ for all $q>0$. [F2, F3, F7, step 1.1, step 2.1] ∎
