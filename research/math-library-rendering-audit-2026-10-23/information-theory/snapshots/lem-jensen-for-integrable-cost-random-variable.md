---
id: lem-jensen-for-integrable-cost-random-variable
kind: lemma
title: Jensen's inequality for an integrable cost random variable
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [thm-dedekind-complete, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof constructs a supporting affine function from secant slopes.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.4"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.3.2"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $a\in\mathbb R$, let $f:[a,\infty)\to\mathbb R$ be finite and concave, and let $U$ be an integrable real random variable with $U\ge a$ almost surely and $f(U)$ integrable. Then $\mathbb E f(U)\le f(\mathbb E U)$.

## Facts & Assumptions

**Given:** A real number $a$, a finite concave function $f$ on $[a,\infty)$, and an integrable random variable $U\ge a$ for which $f(U)$ is integrable.

[A1] The domain, concavity, integrability, and lower-bound hypotheses in the Statement.

[F1] [[thm-dedekind-complete]]: every nonempty subset of $\mathbb R$ bounded above has a real supremum.

[F2] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: on any measure space, a nonnegative measurable function has integral zero exactly when it is zero almost everywhere.

## Proof

1.1 Put $m=\mathbb E U\ge a$. If $m=a$, let $V=(U-a)^+$, a nonnegative measurable variable equal to $U-a$ almost surely by [A1]. Thus $\mathbb EV=\mathbb EU-a=0$. Applying [F2] with the probability measure gives $V=0$ almost surely; combined with $U\ge a$ almost surely this implies $U=a$ almost surely. Consequently $\mathbb E f(U)=f(a)=f(m)$. [A1, F2, given, algebra, cases]

1.2 Suppose $m>a$. For $y>m$ define $r(y)=(f(y)-f(m))/(y-m)$. Concavity applied to $a<m<y$ gives $r(y)\le(f(m)-f(a))/(m-a)$, and the right-slope set is nonempty (take $y=m+1$) and bounded above; [F1] supplies its finite supremum $s$. For each $x$ with $a\le x<m$ and each $y>m$, concavity at $x<m<y$ gives $(f(m)-f(x))/(m-x)\ge r(y)$; taking the supremum over $y$ yields $(f(m)-f(x))/(m-x)\ge s$. Therefore every $u\ge a$ satisfies $f(u)\le f(m)+s(u-m)$. [A1, F1, given, algebra]

2.1 The affine upper bound in step 1.2 is integrable because $U$ is integrable. Taking expectations gives $\mathbb E f(U)\le f(m)+s(\mathbb E U-m)=f(m)$. Together with step 1.1 this proves the claim. [A1, step 1.1, step 1.2, algebra, cases] ∎
