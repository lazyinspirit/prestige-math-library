---
id: lem-na-extrema-sign-block-polynomial
kind: lemma
title: "A polynomial with the sign pattern of the active extrema"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - cor-of-reverse-triangle
  - def-interval
  - lem-of-triangle-inequality
  - lem-of-abs-value
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed p. 74, the perturbation step in the proof of Theorem 10.1."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §4.4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 20–22, the alternation characterization for T-spaces."
---

## Statement

Let $I=[a,b]$ with $a<b$, let $e:I\to\mathbb R$ be continuous, and let
$E=\|e\|_{\infty,I}>0$. Put
$S_+=\{x\in I:e(x)=E\}$ and $S_-=\{x\in I:e(x)=-E\}$. If there are no
$n+2$ increasing points of $S_+\cup S_-$ with alternating signs, then there
is a real polynomial $h$ of degree at most $n$ such that
$e(x)h(x)>0$ for every $x\in S_+\cup S_-$.

## Facts & Assumptions

**Given:** $I=[a,b]$ with $a<b$, a continuous real function $e$ on $I$, $E=\|e\|_{\infty,I}>0$, and an integer $n\ge0$.

[F1] [[def-interval]]: $I$ is a closed bounded interval in $\mathbb R$.

[F2] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a closed bounded nonempty subset of $\mathbb R^k$ is compact, and every continuous real function on it attains its extrema.

[F3] [[cor-of-reverse-triangle]], [[lem-of-triangle-inequality]], and [[lem-of-abs-value]]: $\bigl||u|-|v|\bigr|\le|u-v|$, $|u+v|\le|u|+|v|$, and $|-u|=|u|$ for real $u,v$.

## Proof

1.1 Continuity and attainment in [F2] show that $S_+\cup S_-$ is nonempty and compact: the maximum of $|e|$ is attained and $E>0$, while each level set is closed in the compact interval [F1]. If one of $S_+$ or $S_-$ is empty, take $h=1$ or $h=-1$ according to the sign of the nonempty set; this has degree zero and the required sign. [given, F1, F2, construct]

1.2 Suppose both sets are nonempty. Their product is a closed bounded subset of $\mathbb R^2$. For $(x,y),(x',y')\in\mathbb R^2$, the reverse and ordinary triangle inequalities in [F3] give $\bigl||x-y|-|x'-y'|\bigr|\le |(x-y)-(x'-y')|\le |x-x'|+|y-y'|\le2\|(x,y)-(x',y')\|_2$, so the distance function is continuous. By [F2] it attains a minimum separation $\delta=\min\{|x-y|:x\in S_+,\,y\in S_-\}$. This minimum is positive because a minimizing pair at distance zero would give a point in both disjoint sets. Starting at the leftmost point of $S_+\cup S_-$, repeatedly take the first point of the opposite-sign set to the right and the last current-sign point before it. These extrema exist because the level sets are compact, and each transition gives an open gap of length at least $\delta$ containing no point of $S_+\cup S_-$. The gaps are pairwise disjoint subintervals of $[a,b]$, so any $k$ transitions satisfy $k\delta\le b-a$; hence there are finitely many transitions, each with a distinct ordered gap. [given, F1, F2, F3, construct, algebra]

2.1 If there were at least $n+1$ transitions, choosing one extremal point from each successive sign run would give $n+2$ ordered alternating points, contrary to the hypothesis. Thus the number $k$ of transitions is at most $n$. Choose one point $\xi_j$ in each transition gap and set $h(x)=c\prod_{j=1}^{k}(x-\xi_j)$, where $c\in\{-1,1\}$ is chosen so that $h$ has the sign of $e$ on the first run. The polynomial has degree $k\le n$, has no zero on $S_+\cup S_-$, and changes sign exactly when the extremal sign changes. Hence $e(x)h(x)>0$ on the entire extremal set. [given, step 1.2, construct, algebra] ∎
