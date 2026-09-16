---
id: thm-moore-spaces-are-subparacompact
kind: theorem
title: "Moore spaces are subparacompact"
status: draft
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

**Given:** A Moore space $X$, a decreasing development $(\mathcal G_n)_{n \in \mathbb N}$ of $X$, and an open cover $\mathcal U = \{U_\alpha : \alpha \in A\}$ of $X$ together with a well-ordering $W$ of $\mathcal U$.

[F1] A Moore space is regular $T_1$ and developable, and a development may be assumed decreasing: every member of $\mathcal G_{m}$ is contained in a member of $\mathcal G_n$ when $n \le m$ ([[def-moore-spaces-and-developments]]).

[F2] A development's stars form a local base: for $x$ and open $D \ni x$ there is $n$ with $\operatorname{St}(x, \mathcal G_n) \subseteq D$; each $\operatorname{St}(x,\mathcal G_n)$ is open and contains $x$ ([[def-moore-spaces-and-developments]], [[def-cover-refinement-and-local-finiteness]]).

[F3] A family is discrete when every point has a neighbourhood meeting at most one member ([[def-discrete-family-and-sigma-bases]]), and a countable union of discrete families is what the conclusion asks for.

[L1] Well-ordering principle: since $W$ well-orders $\mathcal U$, every nonempty subfamily of $\mathcal U$ has a $W$-least element, and "the $W$-least $U$ with a property" is a definable description ([[def-axiom-of-choice]]).

[L2] Point $z$ lies in $\overline{F}$ exactly when every neighbourhood of $z$ meets $F$; consequently an open set disjoint from $F$ is disjoint from $\overline F$ ([[thm-closure-characterisation-top]]).

## Proof

**Proof technique:** direct.

1.1 Fix $(\mathcal G_n)$, $\mathcal U$ and the well-ordering $W$. For $n \in \mathbb N$ and $\alpha \in A$ put $F(\alpha,n) := \{\, x \in X : x \in U_\alpha,\ x \notin U_\beta \text{ for all } \beta < \alpha,\ \operatorname{St}(x, \mathcal G_n) \subseteq U_\alpha \,\}$. [given, F1, L1]

2.1 Every $F(\alpha,n)$ is contained in $U_\alpha$, and $\bigcup_{\alpha,n} F(\alpha,n) = X$: given $x$, let $\alpha$ be the $W$-least index with $x \in U_\alpha$, which exists by [L1] because $\mathcal U$ is a cover, and choose $n$ with $\operatorname{St}(x,\mathcal G_n) \subseteq U_\alpha$ by [F2]; then $x \in F(\alpha,n)$. [step 1.1, F2, L1]

2.2 Every $F(\alpha,n)$ is closed. Let $z \in \overline{F(\alpha,n)}$ and let $G \in \mathcal G_n$ with $z \in G$. By [L2] and openness of $G$ there is $y \in G \cap F(\alpha,n)$; then $z, y \in G \in \mathcal G_n$ and $G \subseteq \operatorname{St}(y,\mathcal G_n) \subseteq U_\alpha$, so every member of $\mathcal G_n$ containing $z$ lies in $U_\alpha$, that is, $\operatorname{St}(z, \mathcal G_n) \subseteq U_\alpha$. Since $z \in \operatorname{St}(z,\mathcal G_n)$ we get $z \in U_\alpha$. Finally, if $\beta < \alpha$ then $U_\beta \cap F(\alpha,n) = \varnothing$ by definition of $F(\alpha,n)$, and $U_\beta$ open with [L2] gives $z \notin U_\beta$. Hence $z \in F(\alpha,n)$ by step 1.1, and the set is closed. [step 1.1, F2, L2]

2.3 For each fixed $n$ the family $\{F(\alpha,n) : \alpha \in A\}$ is discrete. Let $x \in X$, let $\beta$ be the $W$-least index with $x \in U_\beta$ and choose $k \ge n$ with $\operatorname{St}(x, \mathcal G_k) \subseteq U_\beta$ by [F2]. Suppose $y \in \operatorname{St}(x,\mathcal G_k) \cap F(\alpha,n)$: there is $G \in \mathcal G_k$ with $x, y \in G$, and since $\mathcal G_k$ refines $\mathcal G_n$ there is $H \in \mathcal G_n$ with $G \subseteq H$, so $x, y \in H$ and therefore $x \in \operatorname{St}(y,\mathcal G_n) \subseteq U_\alpha$ by $y \in F(\alpha,n)$; hence $\beta \le \alpha$ by minimality of $\beta$. Also $y \in \operatorname{St}(x,\mathcal G_k) \subseteq U_\beta$. If $\beta < \alpha$, then $y \in F(\alpha,n)$ would force $y \notin U_\beta$, a contradiction; so $\alpha = \beta$. Thus the open neighbourhood $\operatorname{St}(x,\mathcal G_k)$ of $x$ meets at most one member of the family, which is discrete by [F3]. [step 1.1, F1, F2, F3]

3.1 The family $\bigcup_{n} \{F(\alpha,n) : \alpha \in A\}$ is a countable union of discrete families of closed sets (steps 2.2 and 2.3), it covers $X$ (step 2.1), and it refines $\mathcal U$ (step 2.1 again, each $F(\alpha,n) \subseteq U_\alpha$). Hence every open cover of the Moore space $X$ has such a refinement, and $X$ is subparacompact. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Where the choice is spent.** The development is a single given sequence and the sets $F(\alpha,n)$ are defined by a formula, but the well-ordering $W$ of the cover is an application of the well-ordering principle and is used in step 2.1 to select the least cover member containing a point. Without it the same construction is not available, which is why the item is stated over $\mathrm{ZFC}$.

- **Discreteness, not just local finiteness.** The argument produces, for each $n$, one open neighbourhood of each point meeting at most one member, which is discreteness and not merely local finiteness; no local-finiteness closure lemma is needed, because closedness of each $F(\alpha,n)$ is proved directly in step 2.2.
