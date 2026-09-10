---
id: lem-metric-borel-hierarchy-monotonicity-and-operations
kind: lemma
title: "Metric Borel hierarchy inclusions and fixed-rank operations"
status: published
origin: pipeline
deps: ["def-countable-borel-hierarchy", "def-metric-space", "thm-transfinite-induction", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 2.5(i) and Lemma 2.6(i–iii), printed pp15–16 (PDF pages 15–16); source numbering in previous notes was one page low"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

Assume ZFC and let $X$ be metrizable. For $1\leq\alpha<\beta<\omega_1$,

$$\Sigma^0_\alpha(X)\cup\Pi^0_\alpha(X)\subseteq\Delta^0_\beta(X).$$

At each positive rank, $\Sigma^0_\alpha$ is closed under countable unions and finite intersections; $\Pi^0_\alpha$ under countable intersections and finite unions; and $\Delta^0_\alpha$ under complements, finite unions and finite intersections. The finite operations include the empty family. No countable basis is assumed.

## Facts & Assumptions

[F1] The positive-rank union/complement definitions are [[def-countable-borel-hierarchy]].

[F2] Fix a compatible metric as in [[def-metric-space]].

[F3] Transfinite induction is available by [[thm-transfinite-induction]].

[A1] Assume [[def-axiom-of-choice]]; it will select countably many lower-rank representations.

## Proof

**Given:** A metrizable $X$ and the axiom assumptions above.

1.1 For open $U$ put $F_n=\{x:(\forall y\notin U)\ d(x,y)\geq1/(n+1)\}$. Each $F_n$ is closed: if $d(x,y)<1/(n+1)$ for one $y\notin U$, every point within $1/(n+1)-d(x,y)$ of $x$ has the same strict inequality, by the triangle inequality. Also $F_n\subseteq U$, since $x\notin U$ permits $y=x$. If $x\in U$, some ball of radius $r>0$ about $x$ lies in $U$; take $n$ with $1/(n+1)\leq r$ to get $x\in F_n$. Hence $U=\bigcup_n F_n$. For $U=X$ the universal condition is vacuous and $F_n=X$; for $U=\varnothing$ every $F_n$ is empty. [F2]

1.2 We prove the operations by F3, simultaneously at each positive rank. At rank one, opens are closed under arbitrary unions and finite intersections, and closed sets have the dual operations. Suppose the assertion holds below $\alpha>1$. Given $A_i\in\Sigma^0_\alpha$, A1 chooses sequences $B_{ij}\in\Pi^0_{\beta_{ij}}$, $1\leq\beta_{ij}<\alpha$, with $A_i=\bigcup_j B_{ij}$. The explicit diagonal enumeration of $\mathbb N^2$ turns $\bigcup_i A_i=\bigcup_{i,j}B_{ij}$ into an allowed representation, proving countable-union closure. [F1, F3, A1]

2.1 We first prove the inclusions directly. If $1<\alpha<\beta$, every lower-$\Pi$ representation allowed for $\Sigma^0_\alpha$ is allowed for $\Sigma^0_\beta$. For $\alpha=1<\beta$, step 1.1 supplies a representation using $\Pi^0_1$, so the same inclusion holds. Complementing gives $\Pi^0_\alpha\subseteq\Pi^0_\beta$. A constant sequence represents every $\Pi^0_\alpha$ set as a $\Sigma^0_\beta$ set. Complementing that inclusion gives $\Sigma^0_\alpha\subseteq\Pi^0_\beta$. Together these are the displayed inclusion in $\Delta^0_\beta$. [F1, step 1.1]

3.1 For two such sets, $A_0\cap A_1=\bigcup_{i,j}(B_{0i}\cap B_{1j})$. Put $\gamma=\max(\beta_{0i},\beta_{1j})<\alpha$. Step 2.1 raises both sets to $\Pi^0_\gamma$, and the earlier-rank assertion gives their intersection in $\Pi^0_\gamma$ (repeat either set to view the intersection as countable). Thus the displayed union belongs to $\Sigma^0_\alpha$. Iteration proves finite intersections. The empty intersection is $X$, which is in every class by F1. [F1, step 2.1, step 1.2]

4.1 De Morgan's identities transfer the two $\Sigma$ closure assertions to the two $\Pi$ assertions at the same rank, completing the progressive step of F3. A finite union or intersection of sets in both classes remains in both, by these assertions; complement interchanges their two memberships. The empty finite union is $\varnothing$ and the empty finite intersection is $X$. This proves all claims, including empty $X$, at every positive countable rank. QED. [F1, F3, step 1.2, step 3.1]
