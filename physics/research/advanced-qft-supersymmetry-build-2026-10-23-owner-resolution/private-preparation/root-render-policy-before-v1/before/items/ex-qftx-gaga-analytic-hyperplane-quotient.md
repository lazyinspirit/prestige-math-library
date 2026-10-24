---
id: ex-qftx-gaga-analytic-hyperplane-quotient
kind: example
title: "A hyperplane-supported coherent quotient on a polydisc"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: "A local complex analytic sheaf example; no physical model or empirical claim is made."
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-analytic-coherent-module
  - thm-qftx-gaga-analytic-oka-coherence
  - def-direct-image-sheaf
  - lem-direct-image-is-sheaf
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-power-series-expansion-in-several-complex-variables
  - cor-uniqueness-of-multivariable-power-series-coefficients
  - thm-dolbeault-lemma-polydisc
  - thm-dolbeault-cohomology-polydisc-vanishes-positive-q
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-exactness-of-sheaves-stalkwise
  - thm-long-exact-sequence-sheaf-cohomology
  - def-sheaf-cohomology-derived-global-sections
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  def-direct-image-sheaf: mathematical-premise
  lem-direct-image-is-sheaf: mathematical-premise
  thm-sheaf-morphism-isomorphism-stalkwise: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-dolbeault-cohomology-polydisc-vanishes-positive-q: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
justified_by: []
forward_refs: []
aliases: [ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter IX §4.A, Proposition 4.1, printed pp. 419–420: scalar acyclicity on strongly 1-complete domains. The quotient identification and global multiplication-sequence proof are verified here."
    - title: "Joachim Wehler, Stein Manifolds"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
      locator: "§5.2, Proposition 5.9, printed p. 171: a sheaf with a finite free resolution on a polydisc is acyclic; the multiplication sequence supplies such a resolution in this example."
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Example

Assume the full Axiom of Choice and let $N\ge1$. Let $D\subseteq\mathbb C^N$
be any coordinate polydisc containing $0$: thus $D=\prod_{j=1}^N B(a_j,r_j)$
with $r_j>0$ and $|a_j|<r_j$ for every $j$. Its coordinate discs need not be
centered at $0$. Define
$$H_D=D\cap\{z_1=0\},\qquad i:H_D\hookrightarrow D,$$
and set $\mathcal Q=\mathcal O_D/(z_1)\mathcal O_D$. Then $\mathcal Q$ is
coherent and restriction to the hyperplane induces an isomorphism
$$\mathcal Q\cong i_*\mathcal O_{H_D}.$$
The multiplication sequence
$$0\longrightarrow\mathcal O_D\xrightarrow{\ \cdot z_1\ }\mathcal O_D\longrightarrow\mathcal Q\longrightarrow0$$
is exact, and
$$\Gamma(D,\mathcal Q)\cong\mathcal O(H_D),\qquad H^q(D,\mathcal Q)=0\quad(q>0).$$
In particular the global sections are the actual quotient
$\mathcal O(D)/z_1\mathcal O(D)$, identified with holomorphic functions on
$H_D$. All cohomology here is ordinary derived global-sections cohomology;
no small-neighborhood restriction or general coherent Stein vanishing is assumed.

## Example references

[Demailly, Chapter IX §4.A, Proposition 4.1, pp. 419–420](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §5.2, Proposition 5.9, p. 171](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** Full AC, $N\ge1$, any coordinate polydisc $D\subseteq\mathbb C^N$
containing $0$, its hyperplane section $H_D$, the closed inclusion $i$, and
$\mathcal Q=\mathcal O_D/(z_1)\mathcal O_D$.

[A1] [[def-axiom-of-choice]]: full AC is assumed, as in the local coherent-acyclicity theorem.

[F1] [[def-qftx-analytic-coherent-module]]: a coherent module is locally of finite type and has locally finite-type relation sheaves.

[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: under full AC, $\mathcal O_D$ is coherent, finite-rank free analytic modules are coherent, and cokernels of morphisms of coherent analytic modules are coherent.

[F3] [[def-direct-image-sheaf]]: for the inclusion $i$, $(i_*\mathcal O_{H_D})(V)=\mathcal O_{H_D}(V\cap H_D)$ for each open $V\subseteq D$; its stalk is the corresponding hyperplane stalk on $H_D$ and zero off $H_D$.

[F4] [[lem-direct-image-is-sheaf]]: direct image under a continuous map sends a sheaf to a sheaf, so the restriction maps define the target sheaf in the restriction morphism.

[F5] [[thm-sheaf-morphism-isomorphism-stalkwise]]: a morphism of sheaves is an isomorphism if its induced map on every stalk is an isomorphism.

[F6] [[thm-power-series-expansion-in-several-complex-variables]] and [[cor-uniqueness-of-multivariable-power-series-coefficients]]: holomorphic germs have convergent multivariable power series with unique coefficients, so vanishing of the restriction to $z_1=0$ removes exactly the terms with zero $z_1$ exponent.

[F7] [[thm-dolbeault-lemma-polydisc]]: the smooth Dolbeault sheaf sequence is locally exact on each coordinate polydisc, and its degree-zero kernel is the holomorphic function sheaf.

[F8] [[thm-smooth-function-module-sheaves-are-acyclic]] and [[thm-acyclic-resolution-theorem-for-right-derived-functors]]: the smooth-form sheaves are acyclic for ordinary global sections, so their exact resolution computes ordinary derived sheaf cohomology.

[F9] [[thm-dolbeault-cohomology-polydisc-vanishes-positive-q]]: on an arbitrary coordinate polydisc, every smooth $\bar\partial$-closed $(0,q)$-form for $1\le q\le N$ has a global smooth $\bar\partial$ primitive. No centering at $0$ or relative compactness in another fixed polydisc is required.

[F10] [[thm-exactness-of-sheaves-stalkwise]]: a sequence of sheaves is exact if and only if its stalk sequences are exact.

[F11] [[thm-long-exact-sequence-sheaf-cohomology]] and [[def-sheaf-cohomology-derived-global-sections]]: a short exact sequence gives the natural long exact sequence in ordinary derived sheaf cohomology, whose degree-zero terms are global sections.

## Proof

**Proof technique:** direct.

1.1 On $D$, multiplication by $z_1$ gives a morphism $\mathcal O_D\to\mathcal O_D$. Restriction of holomorphic functions to $H_D$ is a morphism $\mathcal O_D\to i_*\mathcal O_{H_D}$ by [F3]–[F4], and it kills the image of multiplication by $z_1$. It therefore induces a morphism $\bar r:\mathcal Q\to i_*\mathcal O_{H_D}$. The quotient is coherent by [F1] and closure under cokernels in [F2]. [A1, F1, F2, F3, F4, given, construct]

1.2 At a point $a=(0,a')\in H_D$, a germ $h$ holomorphic on $H_D$ extends to $\widetilde h(z_1,z')=h(z')$, so $\bar r_a$ is surjective by [F3]. If $f$ is a holomorphic germ at $a$ whose restriction to $z_1=0$ vanishes, write its convergent expansion on a smaller product polydisc as $f(z_1,a'+\zeta')=\sum_{k,\alpha'}c_{k,\alpha'}z_1^k(\zeta')^{\alpha'}$. Since the restriction is the zero germ, [F6] implies $c_{0,\alpha'}=0$ for every $\alpha'$. The series $g(z_1,a'+\zeta')=\sum_{k\ge1,\alpha'}c_{k,\alpha'}z_1^{k-1}(\zeta')^{\alpha'}$ still converges on every smaller product polydisc, because shifting each positive $z_1$ exponent down by one preserves the positive radius of convergence. Thus $g$ is holomorphic and $f=z_1g$. The kernel of restriction on this stalk is exactly $(z_1)$, so $\bar r_a$ is an isomorphism. [F3, F6, given, algebra]

1.3 On this arbitrary $D$, [F7] gives the exact smooth Dolbeault sheaf resolution of $\mathcal O_D$. Its terms are modules over smooth real-valued functions; [F8] makes them acyclic and identifies $H^q(D,\mathcal O_D)$ with the cohomology of their global complex. By [F9] that complex has zero cohomology for $1\le q\le N$, and its terms are zero above degree $N$. Hence $H^q(D,\mathcal O_D)=0$ for every $q>0$. [A1, F7, F8, F9, given]

2.1 If $a\in D\setminus H_D$, then $z_1(a)\ne0$, so the germ of $z_1$ is a unit and $\mathcal Q_a=0$. The stalk $(i_*\mathcal O_{H_D})_a$ is zero by [F3]. Together with step 1.2 this proves that $\bar r$ is an isomorphism on every stalk; [F5] gives the sheaf isomorphism. [F3, F5, step 1.2, given]

2.2 Multiplication by $z_1$ is injective on every holomorphic stalk. Away from $H_D$ it multiplies by a unit. At $a=(0,a')\in H_D$, if $z_1f=0$ as a germ, expand $f$ on a sufficiently small product polydisc about $a$ using [F6]. Multiplication shifts every $z_1$ exponent up by one; uniqueness of the power-series coefficients therefore forces all coefficients of $f$ to vanish. Thus $f=0$. By [F10] multiplication is a sheaf monomorphism; its cokernel is $\mathcal Q$ by definition, giving the stated short exact sequence on the whole $D$. [F6, F10, step 1.1, given, algebra]

3.1 Apply [F11] to the short exact sequence of step 2.2. For $q>0$, its segment $H^q(D,\mathcal O_D)\to H^q(D,\mathcal Q)\to H^{q+1}(D,\mathcal O_D)$ has both outer groups zero by step 1.3, so $H^q(D,\mathcal Q)=0$. Its degree-zero segment also makes $\mathcal O(D)\to\Gamma(D,\mathcal Q)$ surjective with kernel $z_1\mathcal O(D)$, because $H^1(D,\mathcal O_D)=0$. Finally the sheaf isomorphism of step 2.1 and the direct-image formula [F3] give $\Gamma(D,\mathcal Q)=\Gamma(D,i_*\mathcal O_{H_D})=\mathcal O(H_D)$. Thus both the global quotient computation and all positive-degree vanishings hold for every coordinate polydisc containing $0$, using only scalar acyclicity and this multiplication sequence. [F3, F11, step 2.1, step 2.2, step 1.3, algebra] ∎
