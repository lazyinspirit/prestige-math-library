---
id: lem-gts-deligne-exponential-model-equivalence
kind: lemma
title: Exponential-sequence equivalence of Deligne models
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: direct
deps:
  - def-gts-smooth-deligne-cohomology-model
  - def-smooth-differential-k-form
  - def-quasi-isomorphism
  - def-derived-category-of-an-abelian-category
  - def-right-hyperderived-functor-of-a-complex
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-abelian-sheaves-have-enough-injectives
  - thm-cartan-eilenberg-injective-resolutions-exist
  - lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense
  - prop-morphisms-into-a-homotopically-injective-complex-need-no-roof
  - thm-inverse-direct-image-adjunction
  - lem-stalk-inverse-image-sheaf
  - thm-exactness-of-sheaves-stalkwise
  - thm-a-bounded-below-complex-of-injectives-is-homotopically-injective
dependency_roles:
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-quasi-isomorphism: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-right-hyperderived-functor-of-a-complex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-abelian-sheaves-have-enough-injectives: mathematical-premise
  thm-cartan-eilenberg-injective-resolutions-exist: mathematical-premise
  lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense: mathematical-premise
  prop-morphisms-into-a-homotopically-injective-complex-need-no-roof: mathematical-premise
  thm-inverse-direct-image-adjunction: mathematical-premise
  lem-stalk-inverse-image-sheaf: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-a-bounded-below-complex-of-injectives-is-homotopically-injective: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.2, Deligne complexes E(n), PDF pp. 38–39.
    - title: The Stacks Project, Injective resolutions, Lemmas 13.18.3–13.18.8
      url: https://stacks.math.columbia.edu/tag/013G
    - title: The Stacks Project, Abelian sheaves on a space, Lemma 19.4.1
      url: https://stacks.math.columbia.edu/tag/01DF
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. For the normalized circle sheaf and the real-form convention of the smooth Deligne cohomology model, the integer-form Deligne complex is quasi-isomorphic to the one-degree-shifted smooth $U(1)$-to-forms complex. The induced isomorphism on hypercohomology is natural in smooth pullbacks and cover refinements.

## Statement references

[[def-gts-smooth-deligne-cohomology-model]]

## Facts & Assumptions

**Given:** A manifold and good cover as in [[def-gts-smooth-deligne-cohomology-model]], an integer $k\ge1$, the integer-form complex $\mathcal D$, and the circle-valued complex $\mathcal T$. Put $\mathcal S=\mathcal T[-1]$. Work in a fixed ambient universe containing the sheaves and resolutions under discussion. The Axiom of Choice, already a prerequisite of that model, is used below for injective replacements and their comparisons.

[F1] [[def-gts-smooth-deligne-cohomology-model]] defines $\mathcal U(1)(V)=C^\infty(V,U(1))$ and identifies the exponential map $f\mapsto e^{2\pi i f}$.

[F2] [[def-smooth-differential-k-form]] defines $\Omega^0(V)=C^\infty(V,\mathbb R)$ and the real smooth-form sheaves.

[F3] [[def-quasi-isomorphism]]: a morphism of complexes is a quasi-isomorphism when it induces isomorphisms on every cohomology group.

[F4] [[def-derived-category-of-an-abelian-category]] localizes complexes at quasi-isomorphisms, so every quasi-isomorphism is invertible in the derived category.

[F5] [[def-right-hyperderived-functor-of-a-complex]] defines hyperderived groups relative to a supplied Cartan–Eilenberg resolution $I$ as $H^n(\operatorname{Tot}(\Gamma I))$. It identifies this with $H^n(\Gamma(\operatorname{Tot}I))$ on finite diagonals; independence requires comparison data and is not asserted by that definition alone.

[F6] [[def-axiom-of-choice]] asserts that every family of nonempty sets has a choice function. It implies dependent choice by [[thm-choice-implies-dependent-implies-countable-choice]], supplying the countable successive choices below.

[F7] Under AC, [[thm-abelian-sheaves-have-enough-injectives]] gives enough injectives in the category $\mathrm{Ab}(M)$ of sheaves of abelian groups. By [[thm-cartan-eilenberg-injective-resolutions-exist]], each bounded-below complex in this category admits a Cartan–Eilenberg injective resolution: a commuting bicomplex resolving its terms, cycles, boundaries and cohomology, with split horizontal cycle-boundary sequences. The theorem requires supplied successive choices or dependent choice in the ambient universe, and does not choose resolutions for a proper class of complexes.

[F8] [[lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense]] makes the augmentation $j:K\to J=\operatorname{Tot}I$ a quasi-isomorphism with $J$ bounded below and termwise injective; under dependent choice it is K-injective by [[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]], meaning that every map from an acyclic complex to any shift of $J$ is null-homotopic. By [[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]], maps into $J$ in the derived category are represented uniquely by cochain-homotopy classes. In particular, precomposition by a quasi-isomorphism induces a bijection on homotopy classes of maps into $J$.

[F9] For a continuous map $f:N\to M$, direct image is $(f_*\mathcal F)(V)=\mathcal F(f^{-1}V)$, and inverse image $f^{-1}$ is its left adjoint by [[thm-inverse-direct-image-adjunction]]. The stalk formula $(f^{-1}\mathcal G)_x=\mathcal G_{f(x)}$ of [[lem-stalk-inverse-image-sheaf]] and [[thm-exactness-of-sheaves-stalkwise]] show that inverse image of abelian sheaves is exact. Consequently $f_*$ preserves injectives: extending a map into $f_*J$ across a monomorphism is, by adjunction, extending its adjoint into $J$ across the inverse-image monomorphism.

## Proof

1.1 On every sufficiently small open set $V$, a smooth map $g:V\to U(1)$ has a smooth real logarithm because its image is contained locally in an arc on which the exponential map is a diffeomorphism. Thus $0\to\mathbb Z\to\Omega^0\to\mathcal U(1)\to0$ is exact as a sequence of sheaves: the kernel consists exactly of locally constant integer functions and the last map is locally surjective. [F1, F2, given]

2.1 Define the morphism from the integer-form complex to the shifted circle-valued complex by sending $\mathbb Z$ in degree zero to zero, sending $f\in\Omega^0$ to $e^{2\pi if}\in\mathcal U(1)$ in degree one, and sending $\alpha\in\Omega^j$ to $(-1)^j\alpha$ for $1\le j<k$. Here the circle complex has $\mathcal U(1)$ in degree zero and $\Omega^j$ in degree $j$, and its shift $[-1]$ has differential $-d_{\mathcal T}$ or $-d$. Thus the degree-one identity is $-d_{\mathcal T}(e^{2\pi if})=-df$, equal to the image of $df$ in the $\Omega^1$ term; in each higher degree, $-d((-1)^j\alpha)=(-1)^{j+1}d\alpha$. The integer inclusion maps to the circle identity, so the degree-zero square also commutes. For $k=1$ there is no outgoing circle differential. At each stalk, degree-zero cohomology of the integer-form complex is zero because $\mathbb Z\to\Omega^0$ is injective. For $k=1$, both complexes terminate in degree one, and their degree-one cohomology groups are respectively all smooth real germs modulo integer germs and all smooth circle-valued germs; exponentiation identifies them by step 1.1. For $k\ge2$, degree-one cohomology instead consists of locally constant real germs modulo integer germs, identified with locally constant $U(1)$ germs. In degree two, when present, the kernels of the outgoing differentials agree (the outgoing differential is zero at the last term), and the incoming image sheaves agree by the local logarithms of step 1.1. In every later degree the alternating-sign isomorphisms identify the kernels and images, since each differential differs by exactly the sign just checked. Thus the map induces an isomorphism on every cohomology sheaf and is a quasi-isomorphism by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 Choose Cartan–Eilenberg resolutions $I_{\mathcal D}$ and $I_{\mathcal S}$ by [F6]–[F7], and retain them as data. Their total augmentations $j_{\mathcal D}:\mathcal D\to J_{\mathcal D}$ and $j_{\mathcal S}:\mathcal S\to J_{\mathcal S}$ satisfy [F8]. Thus $\mathbb H^n(M,\mathcal D)=H^n(\Gamma(M,J_{\mathcal D}))$ and similarly for $\mathcal S$ by [F5]. Write $q:\mathcal D\to\mathcal S$ for step 2.1. Applying the precomposition bijection of [F8] to $j_{\mathcal D}$ and target $J_{\mathcal S}$ supplies a unique homotopy class $\bar q:J_{\mathcal D}\to J_{\mathcal S}$ with $\bar qj_{\mathcal D}\simeq j_{\mathcal S}q$. [F5, F6, F7, F8, step 2.1, choose]

4.1 In the derived category, $Q(\bar q)=Q(j_{\mathcal S})Q(q)Q(j_{\mathcal D})^{-1}$ is invertible by [F4]. Its inverse has a representative $r:J_{\mathcal S}\to J_{\mathcal D}$ by [F8]. The uniqueness in [F8] gives $r\bar q\simeq1$ and $\bar q r\simeq1$. Applying the additive global-sections functor preserves these homotopy equations, so $H^n(\Gamma\bar q)$ is an isomorphism in every degree. Replacing either chosen resolution and using the same construction over its identity gives a unique comparison homotopy class; compositions agree by uniqueness. Hence these isomorphisms are independent of the resolutions under precisely these canonical identifications. Since $\mathcal S=\mathcal T[-1]$, they identify $\mathbb H^n(M,\mathcal D)$ with $\mathbb H^{n-1}(M,\mathcal T)$. [F4, F5, F8, step 3.1, algebra]

5.1 For a smooth map $f:N\to M$, pullback of functions and forms defines cochain maps $u_K:K_M\to f_*K_N$, for $K=\mathcal D,\mathcal S$, and $u_{\mathcal S}q_M=(f_*q_N)u_{\mathcal D}$ because exponentiation and exterior derivative commute with pullback. By [F9], $f_*J_{K_N}$ is bounded below and termwise injective, hence K-injective by [F8]'s bounded-below injective criterion. The precomposition bijection of [F8] therefore gives a unique homotopy class $b_K:J_{K_M}\to f_*J_{K_N}$ with $b_Kj_{K_M}\simeq(f_*j_{K_N})u_K$. On global sections this defines pullback. The two maps $b_{\mathcal S}\bar q_M$ and $(f_*\bar q_N)b_{\mathcal D}$ have homotopic composites with $j_{\mathcal D_M}$ by the displayed identities; [F8] makes them homotopic. Their maps on cohomology agree. The same uniqueness proves compatibility with identity maps, composition and changes of resolution. This does not assume that $f_*j_{K_N}$ is a quasi-isomorphism. [F1, F2, F6, F8, F9, step 2.1, step 3.1, step 4.1]

6.1 Cover refinement commutes with $q$ on the model's Cech total complexes, since its components commute with restrictions and alternating reindexing. One can check invertibility there directly: on each nonempty good-cover intersection $W$, any $g:W\to U(1)$ has a smooth logarithm. Indeed, for a supplied smooth contraction $H:[0,1]\times W\to W$ from $x_0$ to the identity and $e^{2\pi ia}=g(x_0)$, set $\ell(x)=a+\int_0^1(2\pi i)^{-1}(g\circ H)^{-1}\partial_t(g\circ H)\,dt$. Differentiating $e^{-2\pi i\int_0^t(2\pi i)^{-1}(g\circ H)^{-1}\partial_s(g\circ H)\,ds}g(H(t,x))$ in $t$ proves $e^{2\pi i\ell}=g$. Thus the Cech map induced by $q$ is degreewise surjective; AC permits the simultaneous component lifts. Its kernel is the Cech total complex of $\mathbb Z\xrightarrow{1}\mathbb Z$ in sheaf degrees zero and one. The vertical contraction from degree one to zero, multiplied by $(-1)^p$ on Cech degree $p$, satisfies $Dh+hD=1$, so the kernel is contractible and the quotient map induces an isomorphism on cohomology. Therefore the refinement squares and, by invertibility, their inverse squares commute. Together with step 5.1 this proves both claimed naturalities. [F1, F6, step 2.1, step 4.1, step 5.1, algebra] ∎
