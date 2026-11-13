---
title: Relative mixing for a small nested set — Lemma 3.8
status: draft
research_item: lem-expander-sync-lem-3-8
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 21, Lemma 3.8 and proof
      statement: For the stated nested small sets, e(X,Y^c) is at least
        (1+c^−−ε)e(X,X)/(2(1+ρ)α).
      hypotheses: The article assumes an (n,d*,α,c−,c+)-expander, positive ε and ρ,
        the displayed nested-set bounds, and defined denominators.
      reading_limits: The supplied article text at Lemma 3.8 and its proof was
        inspected. This reference attributes the claim and method; the proof
        below uses the declared mathematical suppliers.
---

PDF p. 21: ` Lemma 3.8 and proof `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [lem-expander-sync-lem-3-3](item-lem-expander-sync-lem-3-3)
- [lem-expander-sync-lem-3-7](item-lem-expander-sync-lem-3-7)


## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander, with $\alpha\ne0$ and $c^+\ne c^-$, and let $\varepsilon,\rho>0$. Thus $n=|V|>0$; the expander condition includes the centered adjacency bound $\|A-(d^*/n)J\|\le\alpha d^*$ and the two-sided centered Laplacian bounds. For subsets $P,Q\subseteq V$, let $e(P,Q)=\sum_{p\in P}\sum_{q\in Q}A_{pq}$, and let $P^c=V\setminus P$. Put $\delta=\varepsilon/(c^+-c^-)$. If $X\subseteq Y\subseteq V$, $|Y|\le n/2$, $(1+\delta)|X|\ge|Y|$, and $|X|\le\rho\alpha n$, then

$$e(X,Y^c)\ge\frac{1+c^--\varepsilon}{2(1+\rho)\alpha}e(X,X).$$

The count is ordered: an internal non-loop edge contributes twice to $e(X,X)$ and an internal loop contributes once.

## Facts & Assumptions

[F1] The expander definition supplies $n>0$, the centered adjacency norm bound, and the centered Laplacian bounds; it imposes no separate sign restriction on the parameters ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

[F2] The ordered adjacency count is a sum of nonnegative entries, and complements are relative to $V$ ([def-expander-sync-edge-count](item-def-expander-sync-edge-count)).

[F3] For every $X\subseteq V$, internal-edge mixing gives $e(X,X)\le(d^*/n)|X|^2+\alpha d^*|X|$ ([lem-expander-sync-lem-3-3](item-lem-expander-sync-lem-3-3)).

[F4] Under the stated nested-set hypotheses, the lower nearby-set mixing bound is $e(X,Y^c)\ge(1+c^--\varepsilon)(d^*/n)|X||Y^c|$ ([lem-expander-sync-lem-3-7](item-lem-expander-sync-lem-3-7)).

## Proof

**Given:** An expander, parameters and sets satisfying the statement.

**Goal:** Prove the displayed relative mixing bound.

1.1 Since $|X|\ge0$ and $|X|\le\rho\alpha n$, while $\rho,n>0$ and $\alpha\ne0$, necessarily $\alpha>0$. The left side of the norm bound in [F1] is nonnegative, so $d^*\ge0$. The hypothesis $|Y|\le n/2$ gives $|Y^c|\ge n/2$. [given, F1, F2]

2.1 Write $b=1+c^--\varepsilon$. If $b\le0$, the desired right side is nonpositive because $e(X,X)\ge0$ and $2(1+\rho)\alpha>0$. The left side is nonnegative by [F2], proving the claim in this case. [F2, step 1.1]

2.2 Suppose $b>0$. Using [F3], $|X|/n\le\rho\alpha$, and $d^*|X|\ge0$, we obtain $e(X,X)\le d^*|X|(|X|/n+\alpha)\le(1+\rho)\alpha d^*|X|$. This remains valid when $d^*=0$ or $X$ is empty. [given, F3, step 1.1]

3.1 By [F4], step 1.1, and $b d^*|X|\ge0$, $e(X,Y^c)\ge b(d^*/n)|X||Y^c|\ge b d^*|X|/2$. Step 2.2 and positivity of $2(1+\rho)\alpha$ now give $e(X,Y^c)\ge b e(X,X)/(2(1+\rho)\alpha)$, as required. Together with step 2.1, this proves the claim. [F4, step 1.1, step 2.1, step 2.2] ∎

## Source notes

The statement and the combination of the two mixing bounds are attributed to Lemma 3.8 of Expander graphs are globally synchronizing. The proof separates the nonpositive coefficient case and uses the local suppliers; the article is not a proof premise.
