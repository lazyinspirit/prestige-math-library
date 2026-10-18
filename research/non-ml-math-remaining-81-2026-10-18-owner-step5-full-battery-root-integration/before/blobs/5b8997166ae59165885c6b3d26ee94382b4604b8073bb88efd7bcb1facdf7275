---
id: lem-finite-gibbs-inequality
kind: lemma
title: "Nonnegativity of finite relative entropy with a positive reference"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [ def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, cor-mean-value-theorem ]
justified_by: []
proof_strategy: direct
strategy: "Use the mean value theorem and the derivative of the natural logarithm for the tangent inequality, then sum over the support of p."
axiom_use: "No choice axiom is used; all sums are finite."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.4, relative entropy and the entropy lower bound for uniquely decodable codes"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 1–2, finite entropy and expected code length"
---
## Statement

Let $p=(p_i)_{i=1}^m$ and $q=(q_i)_{i=1}^m$ be probability vectors with $q_i>0$ for every $i$. Then $D(p\|q)\ge0$, with equality if and only if $p=q$.

## Facts & Assumptions

**Given:** Probability vectors $p,q$ on $[m]$, with $q_i>0$ for every $i$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $D(p\|q)=\sum_{i:p_i>0}p_i\ln(p_i/q_i)$ when no positive coordinate of $p$ is paired with a zero coordinate of $q$.

[F2] [[def-it-information-units-and-logarithm-base]]: $\ln$ denotes the natural logarithm $\log$ of the library's natural-logarithm definition.

[F3] [[thm-natural-logarithm-laws]]: The natural logarithm is continuous on $(0,\infty)$.

[F4] [[thm-natural-logarithm-laws]]: $\ln1=0$.

[F5] [[thm-logarithm-derivative-and-integral]]: The natural logarithm is differentiable for positive inputs and has derivative $1/t$.

[F6] [[cor-mean-value-theorem]]: A continuous function on $[a,b]$, differentiable on $(a,b)$, has a point where its derivative equals its average rate of change.

[A1] $q_i>0$ for all $i$, so the finite relative entropy in [F1] is defined by its displayed finite sum.

## Proof

1.1 If $t=1$, then $\ln t=t-1=0$. Otherwise let $a=\min\{1,t\}$ and $b=\max\{1,t\}$. By [F2] and [F3], $\ln$ is continuous on $[a,b]$; by [F5], it is differentiable on $(a,b)$ with derivative $1/u$. Applying [F6] gives $c\in(a,b)$ with $\ln t-\ln1=(t-1)/c$, so $\ln t=(t-1)/c$ by [F4]. If $t>1$, then $c>1$; if $0<t<1$, then $0<c<1$ and $t-1<0$. In either case $(t-1)/c<t-1$. Thus $\ln t\le t-1$, with equality only at $t=1$. [F2, F3, F4, F5, F6, given, choose, algebra]

2.1 Let $S=\{i:p_i>0\}$. By [F1], [A1], and step 1.1 applied to $q_i/p_i$ for each $i\in S$, $D(p\|q)=-\sum_{i\in S}p_i\ln(q_i/p_i)\ge\sum_{i\in S}(p_i-q_i)=1-\sum_{i\in S}q_i\ge0$. If $D(p\|q)=0$, both inequalities are equalities. Equality in the last requires $q_i=0$ outside $S$, and [A1] then forces $S=[m]$. Equality in the first requires each nonnegative gap from step 1.1, multiplied by $p_i>0$, to vanish; hence $q_i/p_i=1$ for every $i$. Conversely $p=q$ gives $D(p\|q)=0$ by [F1]. [F1, A1, step 1.1, given, algebra] ∎

