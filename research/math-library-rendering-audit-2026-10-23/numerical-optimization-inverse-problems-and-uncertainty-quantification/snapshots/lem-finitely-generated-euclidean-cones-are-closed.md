---
id: lem-finitely-generated-euclidean-cones-are-closed
kind: lemma
title: A finitely generated cone in Euclidean space is closed
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-finite-dimensional-subspaces-are-closed
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.3, printed pp. 339–341; the KKT multiplier proof requires closedness of a finitely generated gradient cone.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 2, Section 2.5.1, printed pp. 50–51; Euclidean projection and separation for closed convex sets.
---

## Statement

For any finite list $a_1,\ldots,a_m\in\mathbb R^n$, including the empty
list, the cone
$$
K=\left\{\sum_{j=1}^m t_j a_j:t_j\ge0\right\}
$$
is a closed convex subset of $\mathbb R^n$.

## Facts & Assumptions

**Given:** The vectors and cone in the Statement, with the Euclidean
inner product of [[def-euclidean-inner-product]].

[F1] Every finite-dimensional normed subspace is closed in its ambient normed
space, including the zero subspace
([[cor-finite-dimensional-subspaces-are-closed]]).

[F2] For finite real vectors $u,v$, $|u^Tv|\le\|u\|_2\|v\|_2$
([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 Every $y\in K$ has a representation whose positive-coefficient vectors are linearly independent. Start with any nonnegative coefficient list and discard its zero coefficients. If its remaining vectors are dependent, take a nonzero relation $\sum_j c_j a_j=0$ and change its sign so some $c_j>0$. For the current positive coefficients $t_j$, put $s=\min_{c_j>0}t_j/c_j$. Replacing each $t_j$ by $t_j-sc_j$ preserves the represented vector, leaves every coefficient nonnegative, and makes at least one positive coefficient zero. Repeating at most $m$ times leaves an independent positive support. [given, choose, algebra]

1.2 Fix an independent index set $J$ and let $A_J$ have columns $a_j$, $j\in J$. Its Gram matrix $G_J=A_J^TA_J$ is invertible: for every nonzero $v$, $v^TG_Jv=\|A_Jv\|_2^2>0$ by independence. Put $B_J=G_J^{-1}A_J^T$, define $R_J(y)=B_Jy$ on $\mathbb R^n$, and set $L_J=(\sum_{r=1}^{|J|}\sum_{s=1}^n(B_J)_{rs}^2)^{1/2}$. Applying [F2] to each row gives $\|R_J(y)-R_J(y')\|_2^2\le L_J^2\|y-y'\|_2^2$, so $R_J$ is Lipschitz with finite constant $L_J$, hence continuous. On the closed subspace $S_J=\operatorname{span}\{a_j:j\in J\}$ it satisfies $A_JR_J(y)=y$. Hence $A_J(\mathbb R_{\ge0}^{|J|})= S_J\cap R_J^{-1}(\mathbb R_{\ge0}^{|J|})$ is closed: $S_J$ is closed by [F1], the nonnegative orthant is closed, and $R_J$ is continuous. For $J=\varnothing$ this cone is $\{0\}$, also closed. [given, F1, F2, algebra]

2.1 By step 1.1, $K$ is the union of the cones in step 1.2 over independent subsets $J\subseteq\{1,\ldots,m\}$. There are only finitely many such subsets, so this union is closed. Each component is a convex cone, and directly taking nonnegative combinations shows $K$ is convex. [step 1.1, step 1.2, algebra] ∎
