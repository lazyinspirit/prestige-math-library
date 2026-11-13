---
title: Small-set amplification — Lemma 4.2
status: published
research_item: lem-expander-sync-amp-small
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, Section 2.1; p. 23, Lemma 4.2; pp. 24–25, proof of Lemma 4.2
      statement: Lemma 4.2 gives the displayed lower bound for the size of the gamma
        phase tail under the stated angular separation and expansion hypotheses.
        Section 2.1 assumes connectedness and fixes the first order parameter to
        be real and nonnegative.
      hypotheses: A stable state on the article's two-sided expander, its standing
        connectedness and phase-normalization conventions, positive epsilon and
        rho, and the displayed angle and denominator conditions.
      reading_limits: The cited PDF text was inspected for the standing conventions,
        statement, and proof. The article supplies attribution; the proof below
        uses the declared mathematical suppliers.
---

PDF p. 23: ` Lemma 4.2 `; PDF p. 24: ` Proof of Lemma 4.2 `; PDF p. 25: ` Proof of Lemma 4.2 `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)
- [def-expander-sync-edge-count](item-def-expander-sync-edge-count)
- [lem-expander-sync-kernel-three-regions](item-lem-expander-sync-kernel-three-regions)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [rem-expander-sync-rem-3-9](item-rem-expander-sync-rem-3-9)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a connected $(n,d^*,\alpha,c^-,c^+)$-expander, and let $\theta$ be a stable state. Connected means that every two vertices are joined by a finite path of edges. Choose the phase origin so that $\rho_1=n^{-1}\sum_{x\in V}e^{i\theta_x}$ is real and nonnegative. For $0\le\psi\le\pi$, put $\mathcal C_\psi=\{x\in V:|\theta_x|\ge\psi\}$ using representatives $\theta_x\in(-\pi,\pi]$.

Suppose $c^+\ne c^-$, $0<\varepsilon<1+c^-$, $\rho>0$, and $0<\gamma<\beta\le\pi/2$. If $\sin(\beta-\gamma)\ge 2(1+\rho)\alpha/(1+c^--\varepsilon)$, then

$$|\mathcal C_\gamma|\ge\min\{(1+\varepsilon/(c^+-c^-))|\mathcal C_\beta|,\rho\alpha n,n/2\}.$$

## Facts & Assumptions

[F1] The expander has $n>0$, symmetric binary adjacency matrix $A$, $\|A-(d^*/n)J\|\le\alpha d^*$, and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$ ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

[F2] Stability means local minimality of the graph energy; the phase tails are as displayed, and $\mathcal C_\beta\subseteq\mathcal C_\gamma$ ([def-expander-sync-states](item-def-expander-sync-states), [def-expander-sync-phase-arcs](item-def-expander-sync-phase-arcs)).

[F3] Write $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$, with complements in $V$. The first order parameter satisfies $|\rho_1|\le1$ ([prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)), so the stated real, nonnegative normalization gives $0\le\rho_1\le1$. For the stated normalized stable state and angles, $e(\mathcal C_\beta,\mathcal C_\beta)\ge\sin(\beta-\gamma)e(\mathcal C_\beta,\mathcal C_\gamma^c)$ ([def-expander-sync-edge-count](item-def-expander-sync-edge-count), [lem-expander-sync-kernel-three-regions](item-lem-expander-sync-kernel-three-regions), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F4] If $d^*>0$, $\alpha>0$, $X\subseteq Y$, $|Y|\le n/2$, $|Y|<(1+\varepsilon/(c^+-c^-))|X|$, $|X|\le\rho\alpha n$, and $1+c^--\varepsilon>0$, then $e(X,Y^c)>\frac{1+c^--\varepsilon}{2(1+\rho)\alpha}e(X,X)$ ([rem-expander-sync-rem-3-9](item-rem-expander-sync-rem-3-9)).

## Proof

**Given:** The graph, state, parameters and angles in the Statement.

**Goal:** Prove the displayed lower bound for $|\mathcal C_\gamma|$.

1.1 If $\alpha\le0$, then $\rho\alpha n\le0$, so the minimum in the conclusion is nonpositive and the conclusion follows from nonnegativity of cardinality. Hence suppose $\alpha>0$. The norm bound in [F1] then implies $d^*\ge0$. If $d^*=0$, the same bound gives $A=0$. Connectedness therefore forces $n=1$: a path between distinct vertices would contain an edge. If $\mathcal C_\beta$ is empty, the first quantity in the minimum is zero; otherwise nesting gives $|\mathcal C_\gamma|=1\ge n/2$. Thus the conclusion holds when $d^*=0$. [given, F1, F2, algebra]

2.1 Now suppose $d^*>0$. The two matrix-order bounds in [F1], tested on a nonzero vector, give $c^+\ge c^-$. The assumed inequality $c^+\ne c^-$ therefore gives $c^+-c^->0$. Put $X=\mathcal C_\beta$, $Y=\mathcal C_\gamma$, $k=1+c^--\varepsilon>0$, and $s=\sin(\beta-\gamma)$. Suppose for contradiction that $|Y|$ is smaller than the stated minimum. Then $|Y|<n/2$, $|Y|<(1+\varepsilon/(c^+-c^-))|X|$, and $|Y|<\rho\alpha n$. By nesting, $|X|\le|Y|<\rho\alpha n$. Thus all hypotheses of [F4] hold. [given, F1, F2, step 1.1, algebra, assume-contra]

3.1 The bound and normalization in [F3] verify the order-parameter hypothesis of the three-region kernel inequality. By [F4], $e(X,Y^c)>k e(X,X)/(2(1+\rho)\alpha)$. The angular hypothesis gives $s\ge2(1+\rho)\alpha/k>0$. Multiplying the strict inequality by $s$ and using $e(X,X)\ge0$ yields $s e(X,Y^c)>e(X,X)$. This contradicts the inequality in [F3]. Hence the supposition in step 2.1 is impossible, proving the conclusion in all cases. [given, F3, F4, step 2.1, algebra, discharge-contradiction] ∎

## Source notes

The statement and the three-region amplification method are attributed to Lemma 4.2 of the cited article. The connectedness and phase normalization are its standing conventions from Section 2.1; the nonzero denominator makes the displayed expression meaningful. The proof uses the stated local suppliers, not the article as a proof premise.
