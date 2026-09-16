---
id: lem-collectionwise-normal-moore-spaces-are-screenable
kind: lemma
title: "Collectionwise normal Moore spaces are screenable"
status: draft
origin: pipeline
deps: [def-moore-spaces-and-developments, def-normalized-families-and-collectionwise-normality, def-axiom-of-choice, def-discrete-family-and-sigma-bases, def-cover-refinement-and-local-finiteness, thm-closure-characterisation-top, def-topological-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of topological spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
      locator: "Theorems 9 and 10 with proofs, printed p. 182"
---

## Statement

In $\mathrm{ZFC}$ every collectionwise normal Moore space is **screenable**:
every open cover of the space has a refinement that is a countable union of
pairwise disjoint families of open sets and covers the space
([[def-moore-spaces-and-developments]],
[[def-normalized-families-and-collectionwise-normality]],
[[def-axiom-of-choice]]).

## Facts & Assumptions

**Given:** A collectionwise normal Moore space $X$ with a decreasing development $(\mathcal G_n)_{n\in\mathbb N}$ ([[def-moore-spaces-and-developments]]) and an open cover $\mathcal H = \{H_\alpha : \alpha \in A\}$ well-ordered by $W$.

[F1] Each $\operatorname{St}(x,\mathcal G_n)$ is open and contains $x$, and for open $D \ni x$ there is $n$ with $\operatorname{St}(x,\mathcal G_n)\subseteq D$; members of $\mathcal G_m$ are contained in members of $\mathcal G_n$ when $n\le m$ ([[def-moore-spaces-and-developments]], [[def-cover-refinement-and-local-finiteness]]).

[F2] Collectionwise normality: every discrete family of closed sets has a pairwise disjoint open expansion ([[def-normalized-families-and-collectionwise-normality]], [[def-discrete-family-and-sigma-bases]]).

[L1] $z\in\overline F$ exactly when every neighbourhood of $z$ meets $F$; hence an open set disjoint from $F$ is disjoint from $\overline F$ ([[thm-closure-characterisation-top]]).

[L2] The well-ordering $W$ provides least elements, so "the $W$-least $H$ with a property" is a definable description ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $(\mathcal G_n)$, $\mathcal H$ and $W$. For $n\in\mathbb N$ and $\alpha\in A$ put $X(\alpha,n) := \{\, x\in X : x\in H_\alpha,\ x\notin H_\beta \text{ for all } \beta<\alpha,\ \text{every } G\in\mathcal G_n \text{ with } x\in G \text{ satisfies } G\subseteq H_\alpha \,\}$. [given, F1, L2]

2.1 $\bigcup_{\alpha,n}X(\alpha,n)=X$, and $X(\alpha,n)\subseteq H_\alpha$ for all $\alpha,n$: given $x$, let $\alpha$ be the $W$-least index with $x\in H_\alpha$ and choose $n$ with $\operatorname{St}(x,\mathcal G_n)\subseteq H_\alpha$; every $G\in\mathcal G_n$ containing $x$ is then contained in $H_\alpha$, so $x\in X(\alpha,n)$. [step 1.1, F1, L2]

2.2 Each $X(\alpha,n)$ is closed. Let $z\in\overline{X(\alpha,n)}$ and $G\in\mathcal G_n$ with $z\in G$. By [L1] there is $y\in G\cap X(\alpha,n)$; then $z,y\in G\in\mathcal G_n$, and since every member of $\mathcal G_n$ containing $y$ lies in $H_\alpha$, we get $G\subseteq H_\alpha$; hence every member of $\mathcal G_n$ containing $z$ lies in $H_\alpha$. Also $z\in\operatorname{St}(z,\mathcal G_n)\subseteq H_\alpha$, and $z\notin H_\beta$ for $\beta<\alpha$ because $H_\beta\cap X(\alpha,n)=\varnothing$ with $H_\beta$ open and [L1]. So $z\in X(\alpha,n)$. [step 1.1, F1, L1]

2.3 For each fixed $n$ the family $\{X(\alpha,n):\alpha\in A\}$ is discrete. Let $x\in X$, let $\beta$ be $W$-least with $x\in H_\beta$ and choose $k\ge n$ with $\operatorname{St}(x,\mathcal G_k)\subseteq H_\beta$. If $y\in\operatorname{St}(x,\mathcal G_k)\cap X(\alpha,n)$, pick $G\in\mathcal G_k$ with $x,y\in G$; since $G$ lies in some $H\in\mathcal G_n$, we have $x\in\operatorname{St}(y,\mathcal G_n)\subseteq H_\alpha$, so $\beta\le\alpha$. Also $y\in\operatorname{St}(x,\mathcal G_k)\subseteq H_\beta$, so if $\beta<\alpha$ then $y\in H_\beta$ contradicts $y\in X(\alpha,n)$; hence $\alpha=\beta$ and the open neighbourhood $\operatorname{St}(x,\mathcal G_k)$ of $x$ meets at most one member. [step 1.1, F1]

3.1 For each $n$, apply [F2] to the discrete family $\{X(\alpha,n):\alpha\in A\}$ of closed sets, obtaining pairwise disjoint open sets $W(\alpha,n)\supseteq X(\alpha,n)$, and put $Y(\alpha,n) := W(\alpha,n)\cap H_\alpha$. Then each $Y(\alpha,n)$ is open, contains $X(\alpha,n)$, lies in $H_\alpha$, and the family $\{Y(\alpha,n):\alpha\in A\}$ is pairwise disjoint. [step 2.2, step 2.3, F2]

4.1 Since $\bigcup_{\alpha,n}X(\alpha,n)=X$ by step 2.1, the family $\bigcup_n\{Y(\alpha,n):\alpha\in A\}$ covers $X$, refines $\mathcal H$ by step 3.1, and is a countable union of pairwise disjoint families of open sets. Hence the arbitrary open cover $\mathcal H$ has such a refinement and $X$ is screenable. [step 2.1, step 2.2] ∎

## Remarks

- **Bing's Theorem 9 is steps 1.1-4.1.** The sets $X(\alpha,n)$ are Bing's $x(h,i)$, each $X_i$ is his discrete family of closed sets, and the well-order of the cover is exactly where choice enters; the proof of closedness follows his displayed argument, with the closure criterion used at the two places where an open set disjoint from a member must remain disjoint from its closure.

- **Collectionwise normality is used once, in step 3.1**, and it is applied to a family of *closed* sets; the expansion is then intersected with the corresponding cover member so that the refinement property survives. A merely normal space would not suffice at this step.
