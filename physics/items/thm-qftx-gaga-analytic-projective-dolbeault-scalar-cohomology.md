---
id: thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
kind: theorem
title: Projective Dolbeault comparison and scalar structure-sheaf cohomology
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-axiom-of-choice
  - def-complex-projective-space-and-holomorphic-charts
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-qftx-gaga-projective-twisting-line-bundles
  - def-bigraded-complex-differential-forms
  - def-sheaf-cohomology-derived-global-sections
  - thm-dolbeault-lemma-polydisc
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-qftx-gaga-projective-cover-laurent-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-qftx-gaga-projective-twisting-line-bundles: mathematical-premise
  def-bigraded-complex-differential-forms: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-cauchy-riemann-characterization-in-several-complex-variables: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  lem-qftx-gaga-projective-cover-laurent-cohomology: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables: A Whirlwind Tour of
        the Subject, version 4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Chapter 4, §4.4, Lemma 4.4.7 and Theorem 4.4.5, printed pp. 142–145:
        local Dolbeault exactness and the vector-valued resolution context; the
        local proof checks the actual bundle-valued interface."
    - title: MIT OpenCourseWare 18.117 Topics in Several Complex Variables, Spring
        2005, lecture notes prepared by Jonathan Campbell
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
      locator: "Lectures 4 and 7–9, PDF pp. 9–12 and 18–23: local Dolbeault
        resolution, projective charts, and Čech/Dolbeault comparison; the local
        proof supplies the complete resolution argument."
    - title: R. Dervan, lectures; Qiangru Kuang, notes, University of Cambridge
        Mathematics Tripos Part III, Complex Manifolds, Lent 2019
      url: https://qk206.user.srcf.net/notes/complex_manifolds.pdf
      locator: "§3.1–3.2 and §4.4–4.5, printed pp. 9–11 and 23–26: Dolbeault and Čech
        comparison via exact resolutions and acyclic smooth-form sheaves."
    - title: Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales
        de l'Institut Fourier 6 (1956), 1–42
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: §13, Lemma 4 and footnote 4, printed pp. 20–21; historical context
        only. Neither GAGA nor the unpublished Laurent computation is used as a
        proof premise.
verification:
  precheck: pending
---

## Statement

Assume the full Axiom of Choice. Let $r\in\{0,1,2,3\}$, let
$X=\mathbb P^r(\mathbb C)=(\mathbb C^{r+1}\setminus\{0\})/\mathbb C^\times$
with its standard quotient complex-manifold structure, and let $E\to X$ be a
holomorphic vector bundle of finite rank.
Write $\mathcal O(E)$ for its sheaf of holomorphic sections, and let
$H^q(X,\mathcal F)$ denote the $q$th right-derived global-sections group of an
abelian sheaf $\mathcal F$ on $X$. For
$0\le q\le r$, let $\mathcal A^{0,q}(E)$ be the sheaf of smooth sections of
$\Lambda^{0,q}T^*X\otimes_{\mathbb C}E$, where $\Lambda^{0,q}T^*X$ is the
$q$th exterior power of the antiholomorphic cotangent subbundle. In a
holomorphic local frame of $E$,
define $\bar\partial_E$ by applying the scalar $\bar\partial$ to each
coefficient form; holomorphic transition matrices make this definition
independent of frame, and $\bar\partial_E^2=0$. Set
$\mathcal A^{0,q}(E)=0$ for $q>r$ and define
$$H^q_{\bar\partial}(X,E):=\frac{\ker\bigl(\bar\partial_E:\Gamma(X,\mathcal A^{0,q}(E))\to\Gamma(X,\mathcal A^{0,q+1}(E))\bigr)}{\operatorname{im}\bigl(\bar\partial_E:\Gamma(X,\mathcal A^{0,q-1}(E))\to\Gamma(X,\mathcal A^{0,q}(E))\bigr)},$$
where $\Gamma(X,\mathcal F)$ denotes the group of sections of $\mathcal F$ over
$X$ and the denominator is zero for $q=0$. For every $q\ge0$, the canonical
comparison induced by the smooth Dolbeault resolution is an isomorphism
$$H^q(X,\mathcal O(E))\cong H^q_{\bar\partial}(X,E).$$
For the trivial line bundle $E=\mathcal O_X$ and $0\le r\le3$, this gives
$$H^0(\mathbb P^r,\mathcal O)=\mathbb C,\qquad H^q(\mathbb P^r,\mathcal O)=0\quad(q>0).$$
The scalar cohomology conclusion is obtained by the direct Laurent–Čech
calculation on the standard projective cover; no GAGA theorem, Kähler Hodge
theorem in dimensions above one, or arbitrary-coherent projective vanishing is
assumed.

## Statement references

[Lebl, *Tasty Bits of Several Complex Variables*, §4.4](https://www.jirka.org/scv/scv.pdf)

[MIT OpenCourseWare 18.117 lecture notes](https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf)

[Dervan–Kuang, *Complex Manifolds*, §§3–4](https://qk206.user.srcf.net/notes/complex_manifolds.pdf)

[Serre, *Géométrie algébrique et géométrie analytique*, §13](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** Full AC; $r\in\{0,1,2,3\}$; the complex manifold $X=\mathbb P^r(\mathbb C)$; a finite-rank holomorphic vector bundle $E\to X$; and an integer $q\ge0$.

[A1] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] For $r\ge1$, $X$ is the quotient of $\mathbb C^{r+1}\setminus\{0\}$ by nonzero scalar multiplication and has standard holomorphic charts $U_i=\{Z_i\ne0\}$ with coordinates $Z_j/Z_i$; $\mathbb P^0$ is a point ([[def-complex-projective-space-and-holomorphic-charts]]).

[F2] A holomorphic vector bundle is locally a product with holomorphic transition matrices, and its holomorphic-section sheaf consists of the local holomorphic sections ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).

[F3] Complex differential forms split into $(p,q)$-types; $\bar\partial$ raises $q$ by one and satisfies $\bar\partial^2=0$ ([[def-bigraded-complex-differential-forms]]).

[F4] On nested polydiscs, a smooth $\bar\partial$-closed $(p,q)$-form with $q>0$ on the larger one has a smooth primitive on the smaller one under full AC ([[thm-dolbeault-lemma-polydisc]]).

[F5] A $C^1$ function on a domain in $\mathbb C^n$ satisfying the coordinate Cauchy–Riemann equations is holomorphic ([[thm-cauchy-riemann-characterization-in-several-complex-variables]]).

[F6] Under AC, any sheaf of modules over the smooth-function sheaf on a smooth manifold is acyclic for global sections on every open subset ([[thm-smooth-function-module-sheaves-are-acyclic]]).

[F7] An exact resolution by $\Gamma$-acyclic objects computes the right-derived functor when the initial object and every resolution cycle lie in the domain of the supplied injective-resolution data; DC is the choice hypothesis ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F8] Under AC, $H^q(X,\mathcal F)$ is the right-derived global-sections group for each abelian sheaf $\mathcal F$ on $X$, using supplied injective-resolution data defined on the category of all such sheaves ([[def-sheaf-cohomology-derived-global-sections]]).

[F9] In ZF, full AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F10] The local twisting-bundle definition identifies $\mathcal O_{\mathbb P^r}(0)$ with the trivial line bundle and its holomorphic-section sheaf with the structure sheaf ([[def-qftx-gaga-projective-twisting-line-bundles]]).

[F11] For $0\le r\le3$, $H^0(\mathbb P^r,\mathcal O)=\mathbb C$ and $H^q(\mathbb P^r,\mathcal O)=0$ for every $q>0$ ([[lem-qftx-gaga-projective-cover-laurent-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 If $r=0$, then $X$ is a point, so a sheaf on $X$ is just its group of sections, global sections is exact, and every positive sheaf-cohomology group vanishes. The degree-zero Dolbeault complex is the identity on the fiber $E$, so the comparison is the identity by the derived-global-sections definition [F8]. Assume now $r\ge1$. On a coordinate polydisc with holomorphic frame $s_1,\ldots,s_n$ of $E$, write an $E$-valued form as $\sum_{a=1}^n\alpha_a\otimes s_a$ and define $\bar\partial_E(\sum_a\alpha_a\otimes s_a)=\sum_a\bar\partial\alpha_a\otimes s_a$. If the frame changes by a holomorphic matrix $G$, then $\bar\partial(G\alpha)=(\bar\partial G)\wedge\alpha+G\bar\partial\alpha=G\bar\partial\alpha$ because every entry of $G$ is holomorphic and hence satisfies the Cauchy–Riemann equations [F5]. Thus the local operators agree on overlaps; by [F3], their square is zero. [A1, F1, F2, F3, F5, F8, given, construct, algebra]

2.1 In a holomorphic frame, under full AC [A1], the local Dolbeault lemma [F4] applies componentwise to every closed form of positive antiholomorphic degree and gives exactness at that degree on a neighborhood of each point. At degree zero, a smooth coefficient killed by $\bar\partial$ satisfies the coordinate Cauchy–Riemann equations, so [F5] makes it holomorphic. Consequently the sheaf resolution $0\longrightarrow\mathcal O(E)\longrightarrow\mathcal A^{0,0}(E) \xrightarrow{\bar\partial_E}\cdots\xrightarrow{\bar\partial_E} \mathcal A^{0,r}(E)\longrightarrow0$ is exact: its degree-zero kernel is exactly the holomorphic-section sheaf, and every positive-degree kernel is locally the preceding image. [A1, F2, F4, F5, step 1.1, construct]

3.1 Each $\mathcal A^{0,j}(E)$ is a sheaf of modules over smooth functions, by pointwise scalar multiplication; hence it is $\Gamma(X,-)$-acyclic by [F6] under [A1]. [A1, F6, step 2.1]

4.1 Every cycle in the exact resolution of step 2.1 is an abelian sheaf on $X$, so it lies in the all-abelian-sheaves domain of the injective-resolution datum in [F8]. By [F9], full AC [A1] supplies the DC required by the acyclic-resolution theorem [F7]. Applying [F7] to that resolution and the global-sections functor gives, canonically, $H^q(X,\mathcal O(E))\cong H^q(\Gamma(X,\mathcal A^{0,\bullet}(E)))=H^q_{\bar\partial}(X,E)$ for every $q\ge0$. [A1, F7, F8, F9, step 2.1, step 3.1, given]

5.1 For $E=\mathcal O_X$, [F10] identifies its holomorphic-section sheaf with $\mathcal O$. Then [F11] supplies $H^0(X,\mathcal O)=\mathbb C$ and $H^q(X,\mathcal O)=0$ for $q>0$ in every stated dimension, as claimed. [F10, F11, given, algebra] ∎
