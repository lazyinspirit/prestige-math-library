---
id: lem-affine-morphism-structure-sheaf-pushforward-localizes
kind: lemma
title: Affine pushforward algebra localizes
status: published
origin: pipeline
deps:
  - def-affine-morphism-schemes
  - def-affine-local-quasi-coherent-algebra
  - def-affine-scheme-spectrum
  - def-direct-image-sheaf
  - def-morphism-ringed-spaces
  - def-restriction-sheaf-open-subspace
  - thm-affine-scheme-ring-anti-equivalence
  - def-morphism-affine-schemes-from-ring-map
  - lem-spectrum-localization-open-immersion
  - thm-sections-basic-open-affine-scheme
  - def-sheaf-on-topological-space
  - def-scheme
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.11 Lemma 29.11.3"
      url: https://stacks.math.columbia.edu/tag/01S8
    - title: "Stacks Project, Schemes, §26.5 Definition 26.5.3 and Lemma 26.5.4"
      url: https://stacks.math.columbia.edu/tag/01HR
---

## Statement

Let $f:X\to S$ be an affine morphism. For every affine open
$U=\operatorname{Spec}R\subseteq S$, write
$f^{-1}(U)=\operatorname{Spec}B$ and let $\varphi:R\to B$ be the ring map
induced by $f$ on this chart. Then there is a canonical isomorphism of
$\mathcal O_U$-algebras
$$
(f_*\mathcal O_X)|_U\cong\widetilde B,
$$
where $\widetilde B$ is the sheaf associated to the $R$-module $B$ on
$\operatorname{Spec}R$. For every $r\in R$ its sections on the principal open
$D(r)$ are canonically
$$
\Gamma\bigl(D(r),(f_*\mathcal O_X)|_U\bigr)\cong B_{\varphi(r)},
$$
and for $D(s)\subseteq D(r)$ the restriction map is the canonical localization
$B_{\varphi(r)}\to B_{\varphi(s)}$. Consequently $f_*\mathcal O_X$ is
affine-locally module-associated in the sense of
[[def-affine-local-quasi-coherent-algebra]].

## Facts & Assumptions

**Given:** A scheme morphism $f:X\to S$ that is affine, an affine open $U=\operatorname{Spec}R\subseteq S$, and an affine presentation $f^{-1}(U)=\operatorname{Spec}B$.

[F1] An affine morphism is one whose inverse image of every affine open of the target is affine; the empty scheme is affine ([[def-affine-morphism-schemes]]).

[F2] A scheme is a locally ringed space, so its structure sheaf is a sheaf ([[def-scheme]]).

[F3] Direct image is defined on an open $V$ by $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$, with restrictions induced by those of $\mathcal F$ ([[def-direct-image-sheaf]]).

[F4] If $j:U\hookrightarrow S$ is open, then for an open $V\subseteq U$ the sections of a restricted sheaf satisfy $(\mathcal F|_U)(V)=\mathcal F(V)$ ([[def-restriction-sheaf-open-subspace]]).

[F5] A morphism of ringed spaces includes the structure-sheaf map $f^\sharp:\mathcal O_S\to f_*\mathcal O_X$ ([[def-morphism-ringed-spaces]]).

[F6] On $\operatorname{Spec}R$, the sets $D(r)$ are a basis of open sets, and $D(r)\cap D(s)=D(rs)$ ([[def-affine-scheme-spectrum]]).

[F7] Every morphism between affine schemes is induced by a unique ring map in the opposite direction ([[thm-affine-scheme-ring-anti-equivalence]]).

[F8] For a ring map $\varphi:R\to B$, the induced spectrum map sends $\mathfrak q$ to $\varphi^{-1}(\mathfrak q)$ and its structure-sheaf map on $D(r)$ is $R_r\to B_{\varphi(r)}$ ([[def-morphism-affine-schemes-from-ring-map]]).

[F9] The canonical map $\operatorname{Spec}(B_{\varphi(r)})\to D_B(\varphi(r))$ is an isomorphism of locally ringed spaces ([[lem-spectrum-localization-open-immersion]]).

[F10] For an affine spectrum, sections on a principal open are the corresponding localization, and restriction between principal opens is the canonical localization map ([[thm-sections-basic-open-affine-scheme]]).

[F11] A sheaf has unique gluing for compatible sections on every open cover, including the empty cover ([[def-sheaf-on-topological-space]]).

[F12] For an $R$-algebra $B$ with structure map $\varphi:R\to B$, the standard associated module sheaf on $\operatorname{Spec}R$ has sections $B[\varphi(r)^{-1}]$ on $D(r)$ and the canonical localization restrictions; the affine-local module-associated condition uses these identifications ([[def-affine-local-quasi-coherent-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Fix one affine open $U=\operatorname{Spec}R\subseteq S$. By [F1], its inverse image is affine; choose an affine presentation $f^{-1}(U)=\operatorname{Spec}B$. The restricted morphism is therefore a morphism between affine schemes, so [F7] gives its unique ring map $\varphi:R\to B$. This argument fixes one chart at a time and makes no simultaneous choice of presentations over a cover. [F1, F7]

1.2 For $r\in R$ and $\mathfrak q\in\operatorname{Spec}B$, [F8] gives $$ \mathfrak q\in f^{-1}(D_R(r)) \iff r\notin\varphi^{-1}(\mathfrak q) \iff \varphi(r)\notin\mathfrak q. $$ Thus $f^{-1}(D_R(r))=D_B(\varphi(r))$. By [F9], this open is identified with $\operatorname{Spec}(B_{\varphi(r)})$. [F6, F8, F9]

2.1 By [F3] and [F4], the direct-image sheaf restricted to $U$ has sections $$ \Gamma\bigl(D_R(r),(f_*\mathcal O_X)|_U\bigr)=\Gamma\bigl(f^{-1}(D_R(r)),\mathcal O_X\bigr). $$ Using the affine presentation and step 1.2, [F10] identifies this ring with $B_{\varphi(r)}$. The structure map from $\mathcal O_U$ is, on these sections, the localization of $\varphi$ from $R_r$ to $B_{\varphi(r)}$ by [F5] and [F8]. Hence this isomorphism respects the $\mathcal O_U$-algebra structures. [F3, F4, F5, F8, F10, step 1.2]

2.2 If $U=\varnothing$, then $D_R(1)=\varnothing$ and [F10] gives $R=\Gamma(\varnothing,\mathcal O_U)=0$. If $f^{-1}(U)=\varnothing$, then $D_B(1)=\varnothing$ and [F10] gives $B=\Gamma(\varnothing,\mathcal O_X)=0$. For $r=0$, $D_R(r)=\varnothing$, $\varphi(r)=0$, and step 1.2 identifies its inverse image with $D_B(0)=\varnothing$; [F10] and [F12] give the zero ring on both sides. For $r=1$, $D_R(r)=U$, $\varphi(r)=1$, and both sides give $B$ by [F10] and [F12]. No injectivity, flatness, reducedness, or finite-type condition on $\varphi$ is used. [F3, F6, F8, F10, F12, step 1.2]

3.1 If $D_R(s)\subseteq D_R(r)$, [F12] says that restriction on the associated module sheaf is $B_{\varphi(r)}\to B_{\varphi(s)}$ by localization. For the direct image, [F3] identifies the restriction with that of $\mathcal O_X$ along $f^{-1}(D_R(s))\subseteq f^{-1}(D_R(r))$; [F10] makes this the same localization map under the identifications in step 2.1. Therefore the principal-open identifications commute with every restriction. [F3, F10, F12, step 1.2, step 2.1]

4.1 Because $\mathcal O_X$ is a sheaf by [F2], [F3] and [F11] show that $f_*\mathcal O_X$ is a sheaf: an open cover pulls back to an open cover, and compatible sections glue uniquely on the inverse image. The standard associated module sheaf in [F12] is also a sheaf. The principal opens form a basis by [F6]. Therefore the compatible isomorphisms of steps 2.1 and 3.1 determine an isomorphism on every open subset of $U$: restrict sections to all principal opens contained in that subset, identify the resulting compatible families, and glue uniquely in both sheaves by [F11]. Thus $(f_*\mathcal O_X)|_U\cong\widetilde B$ as $\mathcal O_U$-algebras. [F2, F3, F6, F11, F12, step 2.1, step 3.1]

5.1 Since $U$ was arbitrary, this chartwise description and its principal-open localization maps are exactly the condition in [F12]. Hence $f_*\mathcal O_X$ is affine-locally module-associated. [F12, step 4.1]

6.1 The argument is choice-free: step 1.1 fixes one affine chart at a time, and the sheaf gluing in step 4.1 is unique. [F1, F11, step 1.1, step 4.1] ∎
