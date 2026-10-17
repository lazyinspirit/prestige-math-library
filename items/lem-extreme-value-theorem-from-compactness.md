---
id: lem-extreme-value-theorem-from-compactness
kind: lemma
title: Continuous functions on a closed interval attain their extrema
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, def-continuity-and-derivative-on-real-interval, lem-archimedean-property-from-completeness, lem-closed-interval-compactness-from-completeness, lem-real-and-complex-modulus-rules]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 16"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec16.pdf"
    - title: "Steven G. Krantz, Foundations of Analysis, §1.1"
      url: "https://api.pageplace.de/preview/DT0400.9781482220759_A37871115/preview-9781482220759_A37871115.pdf"
---

## Statement

If $f:[a,b]\to\mathbb R$ is continuous and $a\le b$, then $f$ is bounded and
attains both a maximum and a minimum on $[a,b]$.

## Facts & Assumptions

**Given:** A Dedekind-complete ordered field, $a\le b$, and continuity as in
[[def-continuity-and-derivative-on-real-interval]].

[L1] [[lem-closed-interval-compactness-from-completeness]]: every relative open
cover of a nondegenerate closed interval has a finite subcover.

[L2] [[lem-archimedean-property-from-completeness]]: the natural numbers are
unbounded above.

[L3] [[def-continuity-and-derivative-on-real-interval]]: continuity is the
relative epsilon-delta condition on $[a,b]$.

[A1] [[def-complete-ordered-real-field]]: every nonempty bounded-above subset
of the field has a least upper bound.

[L4] [[lem-real-and-complex-modulus-rules]]: real absolute value satisfies
$|x+y|\le|x|+|y|$.

## Proof

1.1 If $a=b$, the singleton range consists only of $f(a)$, so the conclusion holds. Suppose $a<b$. For each natural $n\ge1$, put $U_n=\{x\in[a,b]: |f(x)|<n\}$. These sets cover $[a,b]$ by [L2]. Each is relatively open: at any $x\in U_n$, the margin $n-|f(x)|>0$ and [L3] gives a neighborhood where $|f(t)-f(x)|$ is smaller than that margin; [L4] then gives $|f(t)|<n$. By [L1] a finite subcollection covers; taking its largest index shows $|f|$ is bounded. Consequently $M=\sup f([a,b])$ exists by [A1]. [given, L1, L2, L3, L4, A1, construct]

2.1 If $M$ is not attained, for every $n\ge1$ define $V_n=\{x\in[a,b]: f(x)<M-1/n\}$. For each $x$, $M-f(x)>0$; by [L2] choose $n$ with $1/n<M-f(x)$, so the $V_n$ cover. Each $V_n$ is relatively open by [L3] and the positive margin $M-1/n-f(x)$. A finite subcover and its largest index $N$ imply $f(x)<M-1/N$ for all $x$, making $M-1/N$ an upper bound for $f([a,b])$. This contradicts that $M$ is the least upper bound. Thus the maximum is attained. [step 1.1, L2, L3, A1, choose]

3.1 The function $-f$ is continuous because $|(-f(t))-(-f(x))|=|f(t)-f(x)|$. Applying steps 1.1 and 2.1 to $-f$, its attained maximum is the attained minimum of $f$. [step 2.1, algebra] ∎

