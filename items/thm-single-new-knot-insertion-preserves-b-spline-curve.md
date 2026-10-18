---
id: thm-single-new-knot-insertion-preserves-b-spline-curve
kind: theorem
title: Single new-knot insertion preserves the B-spline curve
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-single-new-b-spline-knot-insertion
  - def-b-spline-space-and-basis
  - lem-b-spline-basis-refinement-under-single-knot-insertion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter XI,
        pp. 135–138
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Gershon Elber, Computer Aided Geometric Design, Chapter 7, Boehm's knot
        insertion
      url: https://class236716.cs.technion.ac.il/wp-content/uploads/2021/04/chapter7.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $t_0\le\cdots\le t_{n+p}$ be a clamped knot vector of degree $p$ as
in [[def-b-spline-space-and-basis]], with $a=t_0$ and $b=t_{n+p}$, and
let $\xi(v)_j=v_{j-1}$ be the one-based version of any zero-based knot
vector $v$. Write $B_{i,q,v}=B_{i+1,q,\xi(v)}$ for the basis in
[[def-b-spline-space-and-basis]]. Let a B-spline curve be
$C(x)=\sum_{i=0}^{n-1}P_iB_{i,p,t}(x)$ with $d\in\mathbb N$ and
$P_i\in\mathbb R^d$. Insert
one new knot $u$ strictly inside a nonempty span by
[[alg-single-new-b-spline-knot-insertion]], obtaining knots $t'$ and
controls $Q_i$. Write $B'_{i,q}=B_{i,q,t'}$. Then, for every $x\in[a,b]$,
$$C(x)=\sum_{i=0}^{n}Q_iB_{i,p,t'}(x).$$

## Facts & Assumptions

**Given:** A clamped degree-$p$ knot vector, controls $P_i$, and a new knot $u$ strictly inside a nonempty span $[t_k,t_{k+1}]$.

[F1] [[def-b-spline-space-and-basis]] defines degree-zero B-splines as half-open interval indicators and defines higher degrees by the Cox–de Boor recurrence with zero-denominator terms set to zero.

[F2] [[alg-single-new-b-spline-knot-insertion]] uses $Q_i=P_i$ for $i\le k-p$, $Q_i=\lambda_iP_i+(1-\lambda_i)P_{i-1}$ for $k-p+1\le i\le k$, and $Q_i=P_{i-1}$ for $i\ge k+1$, where $\lambda_i=(u-t_i)/(t_{i+p}-t_i)$ in the middle range.

[F3] [[lem-b-spline-basis-refinement-under-single-knot-insertion]] gives $B_{i,p,t}=\lambda_i^{(p)}B_{i,p,t'}+(1-\lambda_{i+1}^{(p)})B_{i+1,p,t'}$ for every old degree-$p$ basis index.

[A1] $u$ is strictly inside the nonempty span, so it is not already a knot and every denominator in the middle blend range is strictly positive.

## Proof

1.1 Since the knot vector is clamped and the insertion span is nonempty, $p\le k\le n-1$. For bookkeeping only, set $P_{-1}=P_n=0$ and write $\lambda_j=\lambda_j^{(p)}$. The copy, blend, and shift ranges in [F2] give $Q_j=\lambda_jP_j+(1-\lambda_j)P_{j-1}$ for every $0\le j\le n$: in the copy range $\lambda_j=1$, in the blend range the algorithm's $\alpha_j$ is $\lambda_j$, and in the shift range $\lambda_j=0$. This also covers $p=0$, when the blend range is empty. Therefore the finite refined sum is $\sum_{j=0}^n Q_jB'_{j,p}=\sum_{i=0}^{n-1}P_i[\lambda_iB'_{i,p}+(1-\lambda_{i+1})B'_{i+1,p}]$: the first control sum uses $P_n=0$, and in the second the change of index $i=j-1$ drops the $P_{-1}=0$ term. [A1, F1, F2, F3, algebra, construct]

2.1 By [F3], each bracketed basis combination in step 1.1 equals $B_{i,p,t}$. Substitution in that finite sum gives $\sum_{j=0}^nQ_jB_{j,p,t'}=\sum_{i=0}^{n-1}P_iB_{i,p,t}=C(x)$. The recurrence and control algebra hold at interior knots under the right-cell convention, and at $b$ they hold by the prescribed left limits. Hence the refined expansion equals the original curve for every $x\in[a,b]$. [A1, F1, F3, step 1.1, algebra] ∎
