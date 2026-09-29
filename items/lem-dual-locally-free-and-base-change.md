---
id: lem-dual-locally-free-and-base-change
kind: lemma
title: Dual and base change for finite locally free sheaves
status: draft
origin: pipeline
deps:
  - def-locally-free-sheaf-finite-rank
  - def-sheaf-hom
  - def-module-on-ringed-space
  - def-pullback-module-ringed-spaces
  - thm-pullback-pushforward-module-adjunction
  - def-sheaf-on-topological-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Let $X$ be a scheme and let $\mathcal E$ be a finite locally free
$\mathcal O_X$-module ([[def-locally-free-sheaf-finite-rank]]). Write
$$\mathcal E^\vee:=\mathcal H om_{\mathcal O_X}(\mathcal E,\mathcal O_X)$$
([[def-sheaf-hom]]), so that by construction
$\Gamma(U,\mathcal E^\vee)=\operatorname{Hom}_{\mathcal O_U}(\mathcal E|_U,\mathcal O_U)$
for every open $U\subseteq X$. Then:

1. $\mathcal E^\vee$ is finite locally free, and on every open $U$ on which
   $\mathcal E|_U\cong\mathcal O_U^{\,r}$ one has
   $\mathcal E^\vee|_U\cong\mathcal O_U^{\,r}$; in particular $\mathcal E^\vee$
   has the same rank function as $\mathcal E$.
2. The evaluation morphism
   $$\operatorname{ev}:\mathcal E\longrightarrow\mathcal E^{\vee\vee},\qquad \operatorname{ev}(e)(\varphi)=\varphi(e),$$
   is an isomorphism of $\mathcal O_X$-modules.
3. For every morphism of schemes $f:Y\to X$ there is a canonical isomorphism
   $$f^*(\mathcal E^\vee)\;\cong\;(f^*\mathcal E)^\vee$$
   of $\mathcal O_Y$-modules ([[def-pullback-module-ringed-spaces]]), natural
   in $\mathcal E$.

No choice principle is used.

## Facts & Assumptions

**Given:** A scheme $X$; a finite locally free $\mathcal O_X$-module
$\mathcal E$ with its rank charts; a morphism of schemes $f:Y\to X$.

[F1] $\mathcal E$ is locally free of finite rank: every $x\in X$ has an open
neighbourhood $U$ with an isomorphism $\mathcal E|_U\cong\mathcal O_U^{\,r}$,
$\mathcal O_U^0=0$, $\mathcal O_U^1=\mathcal O_U$, and the rank is well defined
and locally constant ([[def-locally-free-sheaf-finite-rank]]).

[F2] The internal Hom $\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)$ is
the sheaf $U\mapsto\operatorname{Hom}_{\mathcal O_U}(\mathcal F|_U,\mathcal G|_U)$
with restrictions given by restriction of morphisms; it is a sheaf of
$\mathcal O_X$-modules and its restriction to an open $W$ is
$\mathcal H om_{\mathcal O_W}(\mathcal F|_W,\mathcal G|_W)$
([[def-sheaf-hom]], [[def-module-on-ringed-space]]).

[F3] The pullback is $f^*\mathcal G=\mathcal O_Y\otimes_{f^{-1}\mathcal O_X}f^{-1}\mathcal G$,
it is a functor on module sheaves, and for an open $U\subseteq X$ the
restriction to $f^{-1}(U)$ computes the pullback along $f|_{f^{-1}(U)}$
([[def-pullback-module-ringed-spaces]]).

[F4] Pullback is left adjoint to pushforward: for module sheaves $\mathcal G$ on
$X$ and $\mathcal F$ on $Y$ there is a natural bijection
$\operatorname{Hom}_{\mathcal O_Y}(f^*\mathcal G,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_X}(\mathcal G,f_*\mathcal F)$
([[thm-pullback-pushforward-module-adjunction]]).


[F5] Sections over an open set are determined by their restrictions to any open
cover, and compatible families over an open cover glue uniquely
([[def-sheaf-on-topological-space]]).



**Proof technique:** direct; compute the dual and the evaluation map on
trivialising charts of $\mathcal E$, and compare the two sides of the base
change map, defined as the transpose of "pull back a homomorphism", on those
charts.



## Proof

1.1 Cover criterion: if $\varphi:\mathcal F\to\mathcal G$ is a morphism of $\mathcal O_Y$-modules and $Y=\bigcup_iW_i$ is an open cover such that each restriction $\varphi|_{W_i}:\mathcal F|_{W_i}\to\mathcal G|_{W_i}$ is an isomorphism, then $\varphi$ is an isomorphism; indeed injectivity is local by [F5], and for $t\in\mathcal G(V)$ the sections $s_i\in\mathcal F(V\cap W_i)$ with $\varphi(s_i)=t|_{V\cap W_i}$ agree on overlaps because $\varphi(s_i-s_j)=0$ and $\varphi$ is injective on $V\cap W_i\cap W_j$, so they glue by [F5] to $s\in\mathcal F(V)$ with $\varphi(s)=t$ by [F5] again. [F2, F5]


1.2 For every ringed space $(Z,\mathcal O_Z)$ and every $r\ge0$ the morphism $\alpha:\mathcal O_Z^{\,r}\to\mathcal H om_{\mathcal O_Z}(\mathcal O_Z^{\,r},\mathcal O_Z)$ that on sections over $V$ sends $(a_1,\dots,a_r)$ to the homomorphism $(x_1,\dots,x_r)\mapsto\sum_ix_ia_i$ is an isomorphism: its inverse sends $\psi\in\operatorname{Hom}_{\mathcal O_V}(\mathcal O_V^{\,r},\mathcal O_V)$ to $(\psi(e_1),\dots,\psi(e_r))$, where $e_1,\dots,e_r$ are the standard basis sections, and both maps are natural in $V$, so they define mutually inverse isomorphisms of sheaves; for $r=0$ both sides are the zero sheaf, since $\mathcal O_Z^0=0$ and $\operatorname{Hom}(0,\mathcal O_V)=0$, so the case of rank zero is included. [F2]


1.3 Let $\mathcal G$ be an $\mathcal O_X$-module and let $U\subseteq X$ be open, with $f_U:f^{-1}U\to U$ the restriction of $f$. Restricting the defining formula of [F3] to the open $f^{-1}U$ gives a canonical isomorphism $\rho:(f^*\mathcal G)|_{f^{-1}U}\to f_U^*(\mathcal G|_U)$, because $f^{-1}(\mathcal G|_U)=(f^{-1}\mathcal G)|_{f^{-1}U}$ and $\mathcal O_{f^{-1}U}=\mathcal O_Y|_{f^{-1}U}$; the isomorphisms $\rho$ are natural in $\mathcal G$ and in $U$: they are compatible with restrictions to smaller opens and with morphisms $u:\mathcal G\to\mathcal G'$. [F3]


1.4 Let $g:Z\to W$ be a morphism of ringed spaces and $r\ge0$: then there is a canonical isomorphism $g^*(\mathcal O_W^{\,r})\cong\mathcal O_Z^{\,r}$. Indeed, by [F3] $g^*(\mathcal O_W^{\,r})=\mathcal O_Z\otimes_{g^{-1}\mathcal O_W}g^{-1}(\mathcal O_W^{\,r})$; the inverse image of a finite direct sum is the direct sum of the inverse images, because on the colimit presheaf the construction is sectionwise and finite direct sums of presheaves are computed sectionwise, so $g^{-1}(\mathcal O_W^{\,r})=(g^{-1}\mathcal O_W)^r$; tensoring over the ring $g^{-1}\mathcal O_W$ distributes over finite direct sums and $\mathcal O_Z\otimes_{g^{-1}\mathcal O_W}g^{-1}\mathcal O_W\cong\mathcal O_Z$ because $g^{-1}\mathcal O_W\to\mathcal O_Z$ is a ring map making $\mathcal O_Z$ a module over $g^{-1}\mathcal O_W$ and tensoring a module by the ring itself returns the module; hence $g^*(\mathcal O_W^{\,r})\cong(\mathcal O_Z)^r$, with the case $r=0$ giving the zero sheaf. [F3]

2.1 Let $U\subseteq X$ be open with an isomorphism $\theta:\mathcal E|_U\to\mathcal O_U^{\,r}$. Then $\mathcal E^\vee|_U=\mathcal H om_{\mathcal O_X}(\mathcal E,\mathcal O_X)|_U \cong\mathcal H om_{\mathcal O_U}(\mathcal E|_U,\mathcal O_U) \cong\mathcal H om_{\mathcal O_U}(\mathcal O_U^{\,r},\mathcal O_U) \cong\mathcal O_U^{\,r}$, the first isomorphism by [F2], the second induced by $\theta$, and the last by step 1.2; hence $\mathcal E^\vee$ is finite locally free and agrees with $\mathcal E$ in rank on every chart. [F1, F2, step 1.2]


2.2 For each open $U\subseteq X$ define $\Psi_U:\operatorname{Hom}_{\mathcal O_U}(\mathcal E|_U,\mathcal O_U)\to\operatorname{Hom}_{\mathcal O_{f^{-1}U}}(f^*\mathcal E|_{f^{-1}U},\mathcal O_{f^{-1}U})$ by $\varphi\mapsto\rho_{\mathcal O}^{-1}\circ f_U^*(\varphi)\circ\rho_{\mathcal E}$, where $\rho_{\mathcal E},\rho_{\mathcal O}$ are the isomorphisms of step 1.3 for $\mathcal G=\mathcal E$ and $\mathcal G=\mathcal O_X$; the maps $\Psi_U$ are compatible with restrictions in $U$ by the naturality of step 1.3, hence define a morphism of $\mathcal O_X$-modules $\Psi:\mathcal E^\vee\to f_*\mathcal H om_{\mathcal O_Y}(f^*\mathcal E,\mathcal O_Y)$; by the adjunction [F4] the morphism $\Psi$ has a transpose $$c:f^*(\mathcal E^\vee)\longrightarrow(f^*\mathcal E)^\vee,$$ the canonical comparison morphism, natural in $\mathcal E$ and $f$. [F2, F3, F4, step 1.3]


3.1 The evaluation morphism $\operatorname{ev}:\mathcal E\to\mathcal E^{\vee\vee}$ given on sections over $V$ by $e\mapsto(\varphi\mapsto\varphi(e))$ is well defined and $\mathcal O_X$-linear, because $\varphi\in\mathcal E^\vee(V)$ is a homomorphism $\mathcal E|_V\to\mathcal O_V$ by [F2] and the assignment is additive and $\mathcal O_V$-linear in $e$ and compatible with restrictions; on a chart $U$ of step 2.1 with trivialization $\theta$ and basis $e_1,\dots,e_r$ of $\mathcal E|_U$ mapping to the standard basis, the dual basis $\varphi_j=\theta_j$ of $\mathcal E^\vee|_U$ satisfies $\operatorname{ev}(e_j)(\varphi)=\varphi(e_j)$, so under the identifications $\mathcal E^\vee|_U\cong\mathcal O_U^{\,r}$ and $\mathcal E^{\vee\vee}|_U\cong\mathcal O_U^{\,r}$ supplied by step 1.2 the map $\operatorname{ev}|_U$ corresponds to the identity matrix and is an isomorphism; by the cover criterion of step 1.1 applied to a trivialising cover of $X$, $\operatorname{ev}$ is an isomorphism. [F1, F2, step 1.1, step 1.2]


3.2 Let $U\subseteq X$ be a chart of $\mathcal E$ as in step 2.1. On $f^{-1}U$ the morphism $c$ is computed by steps 1.3 and 1.2 as follows: the identifications $f^*(\mathcal E^\vee)|_{f^{-1}U}\cong f_U^*(\mathcal E^\vee|_U) \cong f_U^*(\mathcal O_U^{\,r})\cong\mathcal O_{f^{-1}U}^{\,r}$ and $(f^*\mathcal E)^\vee|_{f^{-1}U}\cong\mathcal H om_{\mathcal O_{f^{-1}U}}(f_U^*(\mathcal E|_U),\mathcal O_{f^{-1}U}) \cong\mathcal H om_{\mathcal O_{f^{-1}U}}(\mathcal O_{f^{-1}U}^{\,r},\mathcal O_{f^{-1}U}) \cong\mathcal O_{f^{-1}U}^{\,r}$ hold by step 1.4 and steps 1.3, 1.2, and the transpose construction of step 2.2 sends the pulled-back $j$-th basis functional $\varphi_j$ — a local section of $f^*(\mathcal E^\vee)$ — to $f_U^*(\varphi_j)$, which under these identifications is the $j$-th coordinate functional of $\mathcal O_{f^{-1}U}^{\,r}$, that is, the $j$-th basis element; therefore $c|_{f^{-1}U}$ corresponds to the identity matrix and is an isomorphism. [step 1.2, step 1.4, step 2.2]


4.1 Choosing a trivialising open cover of $X$, the opens $f^{-1}U$ cover $Y$ and $c$ restricts to an isomorphism on each of them by step 3.2, so $c$ is an isomorphism by the cover criterion of step 1.1: this proves claim 3, while claim 1 is step 2.1 and claim 2 is step 3.1. Every morphism constructed is canonical and all identifications involve only finitely many standard basis elements of a free module of finite rank, so no choice principle is used. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
