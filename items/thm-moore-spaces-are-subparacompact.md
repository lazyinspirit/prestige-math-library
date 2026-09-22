---
id: thm-moore-spaces-are-subparacompact
kind: theorem
title: "Moore spaces are subparacompact"
status: published
origin: pipeline
deps: [def-moore-spaces-and-developments, def-discrete-family-and-sigma-bases, def-axiom-of-choice, def-cover-refinement-and-local-finiteness, thm-closure-characterisation-top, def-topological-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Theorem 2.4 and its proof, printed pp. 2-3"
verification:
  audited: 2026-09-22
---

## Statement

In $\mathrm{ZFC}$ every Moore space is **subparacompact**: every open cover of
the space has a refinement that is a countable union of discrete families of
closed sets and covers the space
([[def-moore-spaces-and-developments]],
[[def-discrete-family-and-sigma-bases]]).

The single use of choice is the well-ordering of the given open cover, which is
why the statement is formulated in $\mathrm{ZFC}$ rather than
$\mathrm{ZF}$ ([[def-axiom-of-choice]]).

## Facts & Assumptions

**Given:** A Moore space $X$, a decreasing development $(\mathcal G_n)_{n \in \mathbb N}$ of $X$, and an open cover $\mathcal U$ of $X$ together with a well-ordering $<_W$ of the set $\mathcal U$ itself.

[F1] A Moore space is regular $T_1$ and developable, and a development may be assumed decreasing: every member of $\mathcal G_{m}$ is contained in a member of $\mathcal G_n$ when $n \le m$ ([[def-moore-spaces-and-developments]]).

[F2] A development's stars form a local base: for $x$ and open $D \ni x$ there is $n$ with $\operatorname{St}(x, \mathcal G_n) \subseteq D$; each $\operatorname{St}(x,\mathcal G_n)$ is open and contains $x$ ([[def-moore-spaces-and-developments]], [[def-cover-refinement-and-local-finiteness]]).

[F3] A family is discrete when every point has a neighbourhood meeting at most one member ([[def-discrete-family-and-sigma-bases]]), and a countable union of discrete families is what the conclusion asks for.

[L1] Well-ordering principle: since $W$ well-orders $\mathcal U$, every nonempty subfamily of $\mathcal U$ has a $W$-least element, and "the $W$-least $U$ with a property" is a definable description ([[def-axiom-of-choice]]).

[L2] Point $z$ lies in $\overline{F}$ exactly when every neighbourhood of $z$ meets $F$; consequently an open set disjoint from $F$ is disjoint from $\overline F$ ([[thm-closure-characterisation-top]]).

## Proof

**Proof technique:** direct.

1.1 Fix $(\mathcal G_n)$, $\mathcal U$ and $<_W$. For $n \in \mathbb N$ and $U \in \mathcal U$ put $F(U,n) := \{\, x \in X : x \in U,\ x \notin V \text{ for every }V<_W U,\ \operatorname{St}(x, \mathcal G_n) \subseteq U \,\}$. [given, F1, L1]

2.1 Every $F(U,n)$ is contained in $U$, and $\bigcup_{U\in\mathcal U,n}F(U,n)=X$: given $x$, let $U$ be the $<_W$-least cover member containing $x$, which exists by [L1], and choose $n$ with $\operatorname{St}(x,\mathcal G_n)\subseteq U$ by [F2]; then $x\in F(U,n)$. [step 1.1, F2, L1]

2.2 Every $F(U,n)$ is closed. Let $z\in\overline{F(U,n)}$ and let $G\in\mathcal G_n$ contain $z$. By [L2] and openness of $G$ there is $y\in G\cap F(U,n)$; then $G\subseteq\operatorname{St}(y,\mathcal G_n)\subseteq U$. Thus every member of $\mathcal G_n$ containing $z$ lies in $U$, so $\operatorname{St}(z,\mathcal G_n)\subseteq U$ and in particular $z\in U$. If $V<_W U$, then $V\cap F(U,n)=\varnothing$ by definition, and openness of $V$ with [L2] gives $z\notin V$. Hence $z\in F(U,n)$ by step 1.1. [step 1.1, F2, L2]

2.3 For fixed $n$ the family $\{F(U,n):U\in\mathcal U\}$ is discrete. Let $x\in X$, let $V$ be the $<_W$-least cover member containing $x$, and choose $k\ge n$ with $\operatorname{St}(x,\mathcal G_k)\subseteq V$. Suppose $y\in\operatorname{St}(x,\mathcal G_k)\cap F(U,n)$. Some $G\in\mathcal G_k$ contains $x,y$; as $\mathcal G_k$ refines $\mathcal G_n$, some $H\in\mathcal G_n$ contains $G$. Hence $x\in\operatorname{St}(y,\mathcal G_n)\subseteq U$, so minimality gives either $V=U$ or $V<_W U$. But $y\in V$, and the second alternative contradicts the defining exclusion in $F(U,n)$. Therefore $U=V$, and the open neighbourhood $\operatorname{St}(x,\mathcal G_k)$ meets at most the one family member $F(V,n)$. [step 1.1, F1, F2, F3, L1]

3.1 The family $\bigcup_n\{F(U,n):U\in\mathcal U\}$ is a countable union of discrete families of closed sets (steps 2.2 and 2.3), covers $X$ (step 2.1), and refines $\mathcal U$ because $F(U,n)\subseteq U$. Hence $X$ is subparacompact. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Where the choice is spent.** The development is a single given sequence and the sets $F(U,n)$ are defined by a formula, but the well-ordering $W$ of the cover is an application of the well-ordering principle and is used in step 2.1 to select the least cover member containing a point. Without it the same construction is not available, which is why the item is stated over $\mathrm{ZFC}$.

- **Discreteness, not just local finiteness.** The argument produces, for each $n$, one open neighbourhood of each point meeting at most one member, which is discreteness and not merely local finiteness; no local-finiteness closure lemma is needed, because closedness of each $F(U,n)$ is proved directly in step 2.2.
