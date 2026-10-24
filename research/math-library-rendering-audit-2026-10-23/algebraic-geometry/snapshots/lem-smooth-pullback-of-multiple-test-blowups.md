---
id: "lem-smooth-pullback-of-multiple-test-blowups"
kind: "lemma"
title: "Smooth base change of multiple test blow-ups"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 5
deps:
  - "def-axiom-of-choice"
  - "def-blowup-scheme-along-ideal"
  - "def-exceptional-divisor-blowup"
  - "def-flat-morphism-schemes"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-smooth-morphism-schemes"
  - "def-strict-transform-closed-subscheme"
  - "lem-controlled-transform-is-well-defined"
  - "lem-order-and-snc-under-smooth-morphisms"
  - "thm-blowup-base-change-flat"
  - "thm-blowup-universal-property"
  - "thm-smooth-morphisms-stable-base-change-composition"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the order/SNC and blowup suppliers.

Let $(\mathcal I,E,\mu)$ be a marked ideal on a smooth $K$-scheme $X$, let $(X_i)_{0\le i\le r}$ be a multiple test blow-up defining marked ideals $(\mathcal I_i,E_i,\mu)$ ([[def-multiple-test-blowup-and-controlled-transform]]), and let $\varphi\colon X'\to X$ be a smooth morphism with $X'$ smooth of pure dimension ([[def-smooth-morphism-schemes]]).
Put $X'_i:=X'\times_X X_i$ and $(\mathcal I',E',\mu):=\varphi^*(\mathcal I,E,\mu)$.
Then:
(1) for every $i$ the morphism $\varphi_i\colon X'_i\to X_i$ is smooth;
(2) the induced sequence $(X'_i)_{0\le i\le r}$ is a multiple test blow-up of $(\mathcal I',E',\mu)$ with $\mathcal I'_i=\varphi_i^*\mathcal I_i$ and $E'_i$ the nonempty inverse images of the members of $E_i$ with the induced order (empty members are omitted);
(3) if $(X_i)$ is a resolution of $(\mathcal I,E,\mu)$ then $(X'_i)$ is an extension of a resolution of $(\mathcal I',E',\mu)$.
The blow-up step uses flat base change of blowups ([[thm-blowup-base-change-flat]]): the pullback of $\sigma_{i+1}$ along the smooth, hence flat, morphism $\varphi_i$ is the blowup of the inverse image center when that center is nonempty, and an isomorphism when it is empty.

## Facts & Assumptions

**Given:** Assume AC. A marked ideal $(\mathcal I,E,\mu)$ on a smooth $K$-scheme $X$, a multiple test blow-up $(X_i)_{0\le i\le r}$ defining marked ideals $(\mathcal I_i,E_i,\mu)$, and a smooth morphism $\varphi\colon X'\to X$ with $X'$ smooth of pure dimension.

[A1] [[def-axiom-of-choice]]: AC is inherited through the smooth order/SNC supplier [F3] and the published blowup suppliers.

[F1] [[def-multiple-test-blowup-and-controlled-transform]]: each step $\sigma_{i+1}\colon X_{i+1}\to X_i$ is either an isomorphism or the blowup of a regular center $C_i\subseteq\operatorname{supp}(\mathcal I_i,E_i,\mu)$ in SNC position with $E_i$, and $\mathcal I_{i+1}=\mathcal I(D_{i+1})^{-\mu}\sigma_{i+1}^*\mathcal I_i$, $E_{i+1}=\sigma_{i+1}^{\mathrm c}(E_i)\cup\{D_{i+1}\}$.

[F2] [[thm-blowup-base-change-flat]], [[thm-blowup-universal-property]]: the base change of a blowup along a flat morphism is the blowup of the pulled-back ideal when the pulled-back center is nonempty, and an isomorphism otherwise; the exceptional divisor pulls back to the exceptional divisor, and $\varphi_{i+1}^*\mathcal I(D_{i+1})=\mathcal I(D'_{i+1})$.

[F3] [[lem-order-and-snc-under-smooth-morphisms]]: smooth morphisms preserve the order of an ideal, $\operatorname{ord}_{x'}(\varphi^*\mathcal I)=\operatorname{ord}_{\varphi(x')}(\mathcal I)$, and, on pure-dimensional smooth source schemes, pull back families in simultaneous SNC position to families in simultaneous SNC position.

[F4] [[thm-smooth-morphisms-stable-base-change-composition]], [[def-smooth-morphism-schemes]]: base changes of smooth morphisms along arbitrary morphisms are smooth; the fibre product of $X'$ with a smooth $K$-scheme over $X$ is smooth over $K$.

[F5] [[def-strict-transform-closed-subscheme]], [[def-exceptional-divisor-blowup]]: for a flat base change of a blowup the strict transform of a divisor pulls back to the strict transform of its pullback, because the pullback of the exceptional divisor is the exceptional divisor and pullback is compatible with the open complement and scheme-theoretic closure.

## Proof

1.1 The base case and the invariants of the induction. The pure dimension of $X'$ is preserved by blowing up regular centers: standard charts over positive-codimension centers retain the ambient dimension, whereas whole-component centers simply delete those components. For $i=0$ we have $X'_0=X'\times_XX=X'$ and $(\mathcal I'_0,E'_0,\mu)=\varphi^*(\mathcal I,E,\mu)=(\varphi^*\mathcal I,\varphi^{-1}E,\mu)$ by definition of the pullback of a marked ideal; assertion (1) for $i=0$ is the smoothness of $\varphi$ itself. We prove by induction on $i$ that $\varphi_i\colon X'_i\to X_i$ is smooth, that $(X'_j)_{j\le i}$ is a multiple test blow-up of $(\mathcal I',E',\mu)$, and that $\mathcal I'_j=\varphi_j^*\mathcal I_j$, $E'_j=\varphi_j^{-1}E_j$ with the induced order, omitting empty members. [F1, F4]

1.2 The inductive step: center and blowup. Assume the induction hypothesis for $i$. If $\sigma_{i+1}$ is an inserted isomorphism step, identify $X'_{i+1}$ with $X'_i$ along that step and $\varphi_{i+1}=\varphi_i$; all assertions follow by transport. Otherwise, even if the blowup morphism is an isomorphism, let $C_i\subseteq\operatorname{supp}(\mathcal I_i,E_i,\mu)$ be the center and put $C'_i:=\varphi_i^{-1}(C_i)$. By [F2] the base change $X'_{i+1}:=X'_i\times_{X_i}X_{i+1}\to X'_i$ of the blowup is the blowup of $C'_i$ when $C'_i\ne\varnothing$ and an isomorphism otherwise; it is smooth over $X_{i+1}$ because $\varphi_i$ is smooth and smoothness is stable under base change [F4]. The center $C'_i$ is regular (the fibre product of the smooth morphism $\varphi_i$ with the regular closed subscheme $C_i$ is smooth over $K$ by [F4], hence regular over the characteristic-zero field), and it has SNC with $E'_i=\varphi_i^{-1}E_i$ by [F3]. [A1, F1, F2, F3, F4]

2.1 The inductive step: supports. For $x'\in C'_i$ with $x=\varphi_i(x')$ one has $x\in C_i\subseteq\operatorname{supp}(\mathcal I_i,\mu)$ and hence, by [F3], $\operatorname{ord}_{x'}(\varphi_i^*\mathcal I_i)=\operatorname{ord}_x(\mathcal I_i)\ge\mu$; since $\mathcal I'_i=\varphi_i^*\mathcal I_i$ this says $C'_i\subseteq\operatorname{supp}(\mathcal I'_i,\mu)$, so the pulled-back sequence is admissible at step $i+1$. [A1, F3, step 1.2]

3.1 The inductive step: transform identities. The exceptional divisor $D'_{i+1}$ of the pulled-back blowup is $\varphi_{i+1}^{-1}(D_{i+1})$ and satisfies $\mathcal I(D'_{i+1})=\varphi_{i+1}^*\mathcal I(D_{i+1})$ by [F2]. Therefore $\mathcal I'_{i+1}=\mathcal I(D'_{i+1})^{-\mu}(\sigma'_{i+1})^*\mathcal I'_i=\varphi_{i+1}^*(\mathcal I(D_{i+1})^{-\mu}\sigma_{i+1}^*\mathcal I_i)=\varphi_{i+1}^*\mathcal I_{i+1}$, using the commutativity of pullback with products and with the controlled transform of ideals; and $E'_{i+1}=(\sigma'_{i+1})^{\mathrm c}(E'_i)\cup\{D'_{i+1}\}=\varphi_{i+1}^{-1}\bigl((\sigma_{i+1})^{\mathrm c}(E_i)\cup\{D_{i+1}\}\bigr)=\varphi_{i+1}^{-1}E_{i+1}$ by [F5]; the order is the induced one after omitting empty members. If the pulled-back center is empty, its exceptional inverse image is empty and the step transports the existing boundary; a nonempty Cartier-center blowup retains its nonempty exceptional divisor despite having an isomorphic underlying morphism. This closes the induction and proves assertions (1) and (2). [F2, F5, step 1.2, step 2.1]

4.1 Resolution case. Suppose $(X_i)$ is a resolution of $(\mathcal I,E,\mu)$, so $\operatorname{supp}(\mathcal I_r,\mu)=\varnothing$. By the induction identity $\mathcal I'_r=\varphi_r^*\mathcal I_r$, and by [F3] every point $x'$ of $X'_r$ satisfies $\operatorname{ord}_{x'}(\mathcal I'_r)=\operatorname{ord}_{\varphi_r(x')}(\mathcal I_r)$ if $\varphi_r(x')$ lies in the locus where $\mathcal I_r$ is defined; since $\operatorname{supp}(\mathcal I_r,\mu)=\varnothing$, no point satisfies $\operatorname{ord}\ge\mu$, so $\operatorname{supp}(\mathcal I'_r,\mu)=\varnothing$ as well. Hence the steps of $(X'_i)$ with nonempty centers form a resolution of $(\mathcal I',E',\mu)$, and the full sequence $(X'_i)$ is an extension of it in the sense of [F1], which is assertion (3). [A1, F1, F3, step 3.1] ∎ 