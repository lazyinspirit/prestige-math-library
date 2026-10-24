---
id: lem-coefficient-ideal-restriction-support
kind: lemma
title: The coefficient ideal controls the support after restriction
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps:
- def-axiom-of-choice
- def-coefficient-ideal
- def-field
- def-ideal-of-derivatives
- def-marked-ideal
- def-multiple-test-blowup-and-controlled-transform
- def-order-of-an-ideal-sheaf-at-a-point
- lem-addition-and-multiplication-of-marked-ideals
- lem-coefficient-ideal-is-equivalent
- lem-restriction-of-marked-ideal-to-a-smooth-subvariety
- lem-derivative-ideals-have-the-same-support
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Statement

Assume AC ([[def-axiom-of-choice]]), $\mu\ge1$, and either $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$ ([[def-field]]). Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order on the smooth $K$-scheme $X$ and let $S\subseteq X$ be a regular closed subscheme with SNC with $E$ and not contained in $\operatorname{supp}(\mathcal I,\mu)$ ([[def-marked-ideal]]).
Then
$$\operatorname{supp}(\mathcal I,\mu)\cap S=\operatorname{supp}\bigl(C(\mathcal I,\mu)|_S\bigr)$$
(the restriction of the coefficient ideal, [[def-coefficient-ideal]]).
Moreover, if $(X_i)$ is a multiple test blow-up of $(\mathcal I,\mu)$ whose centers $C_i$ are contained in the strict transforms $S_i$ of $S$ (or disjoint from them), then the restrictions $\sigma_i|_{S_i}$ define a multiple test blow-up $(S_i)$ of $C(\mathcal I,\mu)|_S$, and
$$\operatorname{supp}(\mathcal I_i,\mu)\cap S_i=\operatorname{supp}\bigl[C(\mathcal I,\mu)|_S\bigr]_i;$$
conversely every multiple test blow-up of $C(\mathcal I,\mu)|_S$ is induced by one of $(\mathcal I,\mu)$ with centers in the strict transforms of $S$.

## Facts & Assumptions

**Given:** Assume AC. Let $K$ be a field, let $\mu\ge1$ with $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$, let $(\mathcal I,E,\mu)$ be a maximal-order marked ideal whose support does not contain a regular closed subscheme $S\subseteq X$ having SNC with $E$, and let $(X_i)$ be a multiple test blow-up with centers contained in the strict transforms $S_i$ of $S$.

[A1] [[def-axiom-of-choice]]: AC is used through the coefficient-equivalence and marked-sum support suppliers [F1] and [F2].

[F1] [[def-coefficient-ideal]]: $C(\mathcal I,\mu)=\sum_{i=0}^{\mu-1}(\mathcal D^i(\mathcal I),\mu-i)$; by [[lem-addition-and-multiplication-of-marked-ideals]] this is the sum operation, so its support is the intersection of the summands' supports and its controlled transforms are the sums of the controlled transforms.

[F2] [[lem-coefficient-ideal-is-equivalent]]: $C(\mathcal I,\mu)\simeq(\mathcal I,\mu)$.

[F3] [[lem-restriction-of-marked-ideal-to-a-smooth-subvariety]]: $\operatorname{supp}(\mathcal I,\mu)\cap S\subseteq\operatorname{supp}((\mathcal I,\mu)|_S)$ and, along a multiple test blow-up with centers in the $S_i$, $[(\mathcal I,\mu)|_S]_i=(\mathcal I_i,\mu)|_{S_i}$ and $\sigma^{\mathrm c}((\mathcal I_i,\mu)|_{S_i})=(\sigma^{\mathrm c}(\mathcal I_i,\mu))|_{S_{i+1}}$.

[F4] [[def-order-of-an-ideal-sheaf-at-a-point]], [[def-ideal-of-derivatives]]: in local coordinates $x_1,\dots,x_k$ defining $S$ and $y_1,\dots,y_{n-k}$ along it, a local section $f=\sum_\alpha c_{\alpha f}(y)x^\alpha$ has $c_{\alpha f}|_S=\frac1{\alpha!}\partial^\alpha f|_S\in\mathcal D^{|\alpha|}(\mathcal I)|_S$; hence $x\in\operatorname{supp}(\mathcal I,\mu)\cap S$ if and only if $\operatorname{ord}_x(c_{\alpha f}|_S)\ge\mu-|\alpha|$ for all $f$ and all $|\alpha|\le\mu$.

[F5] Taylor expansions can be taken after faithful flat completion using the regular-local completed-parameter construction in [[lem-derivative-ideals-have-the-same-support]], [F4]. The coefficients of transverse degree $|\alpha|<\mu$ are $\partial_x^\alpha f/\alpha!$ restricted to $S$, so they belong to $\mathcal D^{|\alpha|}(I)|_S$. Only factorials with $|\alpha|<\mu<p$ occur in positive characteristic.

## Proof

1.1 The two inclusions at the initial stage. The inclusion $\operatorname{supp}(\mathcal I,\mu)\cap S=\operatorname{supp}(C(\mathcal I,\mu))\cap S\subseteq\operatorname{supp}(C(\mathcal I,\mu)|_S)$ is [F2, F3]; note that the summands of $C(\mathcal I,\mu)$ have supports containing $\operatorname{supp}(\mathcal I,\mu)$, and the restriction can only raise orders. Conversely, if $x\in\operatorname{supp}(C(\mathcal I,\mu)|_S)$, then $\operatorname{ord}_x(\mathcal D^i(\mathcal I)|_S)\ge\mu-i$ for all $i\le\mu-1$, so in the notation of [F4] every coefficient $c_{\alpha f}|_S$ has order at least $\mu-|\alpha|$; reading the Taylor development of $f$ along $S$ gives $\operatorname{ord}_x(f)\ge\mu$ for every local section, i.e. $x\in\operatorname{supp}(\mathcal I,\mu)\cap S$. Hence the supports agree. [A1, F1, F2, F3, F4]

2.1 Track the coefficients of the original generators throughout the sequence. Let $J_{r,i}$ be the transform on $S_i$ of $(\mathcal D^r(I)|_S,\mu-r)$, and write a transformed generator as $f_i=\sum_\alpha c_{\alpha,i}x_i^\alpha$ in completed adapted coordinates. Initially $c_{\alpha,0}\in J_{|\alpha|,0}$ by [F5]. In a nonempty restricted blowup chart with exceptional equation $a$, $x_{i+1}=x_i/a$ and $f_{i+1}=a^{-\mu}\sigma^*f_i$, hence $c_{\alpha,i+1}=a^{-(\mu-|\alpha|)}\sigma^*c_{\alpha,i}$. This is exactly the transform with mark $\mu-|\alpha|$, so the coefficient membership persists. At each stage keep the normal generators $x_i$ fixed while adapting the center by a change of parameters along $S_i$ in the completed coefficient ring. This is possible because the center is a regular subscheme of $S_i$. Such a change transports the coefficient ideals and does not alter the stated membership; no change mixing normal and tangent parameters is needed. A point in the support of the transformed coefficient sum lies in every $J_{r,i}$ support by [F1]; the persistent coefficient membership therefore gives $\operatorname{ord}(c_{\alpha,i})\ge\mu-|\alpha|$, and the Taylor expansion gives $\operatorname{ord}(f_i)\ge\mu$. This proves the inclusion from restricted coefficient support to ambient support. Conversely, [F2] gives equality of ambient supports for the transformed $C(I,\mu)$ and $I$; restriction raises order by [F3], so ambient support on $S_i$ lies in the restricted coefficient support. [A1, F1, F2, F3, F4, F5, step 1.1, algebra]


3.1 The converse direction. Conversely, let $(S_i)$ be a multiple test blow-up of $C(\mathcal I,\mu)|_S$ with centers $D_i\subseteq S_i$. Lifting the center $D_i$ to $X_i$ and blowing up $X_i$ there is legitimate because $D_i\subseteq\operatorname{supp}[C(\mathcal I,\mu)|_S]_i=\operatorname{supp}(\mathcal I_i,\mu)\cap S_i\subseteq\operatorname{supp}(\mathcal I_i,\mu)$ by step 2.1, and its SNC position with the restricted boundary, together with the parameter equations defining $S_i$, makes it SNC with the ambient boundary under the omission convention of [F3]; the blow-up of $X_i$ at $D_i$ restricts to the blow-up of $S_i$ at $D_i$ along the strict transform, and the chart computation of [F4] read in this direction shows that the equality of supports of step 2.1 persists at every stage. Hence $(S_i)$ defines a multiple test blow-up $(X_i)$ of $(\mathcal I,\mu)$ with all centers contained in the strict transforms of $S$, which is clause (3). [A1, F3, F4, step 2.1] ∎
