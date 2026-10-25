---
id: ex-inverse-cdf-near-zero-density
kind: example
title: "A vanishing density prevents a uniform linear spatial inverse bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-of-square-roots
  - alg-certified-bracketed-cdf-inversion
  - thm-certified-bracketed-inverse-error
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter II §2.2, numerical inversion"
      url: "https://luc.devroye.org/chapter_two.pdf"
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, generalized inverse discussion"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~james/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
---

## Example

Let $F(x)=0$ for $x\le0$, $F(x)=x^2$ for $0\le x\le1$, and $F(x)=1$ for $x\ge1$. Its density $f(x)=2x$ on $(0,1)$ has no positive lower bound near zero. At target $u=0$, the endpoint inverse is $Q(0):=0$ by convention; for each $0<\varepsilon\le1$, the point $\widehat x=\sqrt{\varepsilon}$ has CDF residual $\varepsilon$ but spatial error $\sqrt{\varepsilon}$.

## Facts & Assumptions

**Given:** The CDF and points in the Example.

[F1] A nonnegative real $\varepsilon$ has a unique nonnegative square root whose square equals $\varepsilon$. [[thm-of-square-roots]]

[F2] For $u\in(0,1)$, a CDF residual at most $\varepsilon$ yields the spatial bound $|\widehat x-Q(u)|\le\varepsilon/m$ if both points lie in the bracket, $F(y)-F(x)=\int_x^y f(t)\,dt$ there, and $f\ge m>0$ almost everywhere. This is a sufficient condition for a linear bound. [[thm-certified-bracketed-inverse-error]]

## Verification

1.1 For $0<\varepsilon\le1$, [F1] gives $\widehat x=\sqrt\varepsilon\ge0$ and $\widehat x^2=\varepsilon>0$, so $\widehat x>0$. If $\widehat x>1$, then $\widehat x^2>1$, contradicting $\varepsilon\le1$; hence $\widehat x\in[0,1]$ and $F(\widehat x)=\widehat x^2=\varepsilon$. Under the stated endpoint convention, the target is $0$, so the residual is $\varepsilon$ while the spatial error is $\sqrt\varepsilon$. [given, F1, algebra]

2.1 The ratio $\sqrt\varepsilon/\varepsilon=1/\sqrt\varepsilon$ is unbounded as $\varepsilon\downarrow0$: for any $M>0$, take $0<\varepsilon<\min(1,1/(M+1)^2)$, so [F1] gives $\sqrt\varepsilon<1/(M+1)$ by comparing nonnegative squares, and the ratio exceeds $M$. Thus no constant $C$ independent of $\varepsilon$ gives $|\widehat x-Q(0)|\le C\varepsilon$ for these points; their nonlinear error is exactly $\sqrt\varepsilon$. The density $f(x)=2x$ has essential infimum $0$ on every $[0,h]$ with $0<h\le1$, so the sufficient positive-density condition in [F2] fails near zero. The endpoint computation uses the declared convention $Q(0)=0$, independently of [F2]'s interior-target theorem. [F1, F2, step 1.1, algebra] ∎
