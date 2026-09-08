---
id: ex-relative-separation-of-a-ball-and-an-exterior-point
kind: example
title: Quantitative separation of a norm ball from an exterior point
status: published
origin: pipeline
deps: [cor-relative-hahn-banach-dual-norming, def-relative-normed-convexity-and-separation]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Example

Assume HB. Let $X$ be a real or complex normed space, $a,z\in X$, and $r\ge0$ with $d=\|z-a\|>r$. There is $f\in X^*$ with $\|f\|=1$ and $f(z-a)=d$. For every $x$ in the closed ball $\|x-a\|\le r$,
$$\operatorname{Re}f(x)\le\operatorname{Re}f(a)+r<\operatorname{Re}f(z).$$
The gap between the displayed upper bound and exterior-point value is $d-r>0$. Its midpoint $b=\operatorname{Re}f(a)+(r+d)/2$ gives uniform margin $\varepsilon=(d-r)/2$. For the open ball with $r>0$, the left bound is strict.

## Facts & Assumptions

[F1] Under HB every nonzero vector $v$ has a norm-one functional with value $\|v\|$ ([[cor-relative-hahn-banach-dual-norming]]).

[F2] Writing $u=\operatorname{Re}f$, a separator with uniform margin $\varepsilon>0$ satisfies $u(x)\le b-\varepsilon<b+\varepsilon\le u(y)$ ([[def-relative-normed-convexity-and-separation]]).

## Verification

**Given:** HB, $a,z\in X$, $r\ge0$, and $d=\|z-a\|>r$.

1.1 Since $d=\|z-a\|>r\ge0$, $z-a\ne0$. Apply dual norming to this vector to get $\|f\|=1$ and $f(z-a)=d$, a positive real. Put $u=\operatorname{Re}f$. Linearity gives $u(z)=u(a)+d$. [given, F1, algebra]

2.1 If $\|x-a\|\le r$, then $u(x)-u(a)=\operatorname{Re}f(x-a)\le |f(x-a)|\le\|f\|\|x-a\|\le r$. Thus $u(x)\le u(a)+r<u(a)+d=u(z)$. If $\|x-a\|<r$ with $r>0$, the same chain gives $u(x)<u(a)+r$. [step 1.1, F2, algebra]

3.1 Set $b=u(a)+(r+d)/2$ and $\varepsilon=(d-r)/2>0$. Direct subtraction and addition give $b-\varepsilon=u(a)+r$ and $b+\varepsilon=u(a)+d=u(z)$. Hence step 2.1 gives $u(x)\le b-\varepsilon<b+\varepsilon=u(z)$, the prescribed uniform margin. For $r=0$, the closed ball is $\{a\}$ by norm definiteness and these formulas give margin $d/2>0$. [step 1.1, step 2.1, F2, algebra]

4.1 For a numerical instance, take $X=\mathbb R$, $a=0$, $r=1$, $z=3$, and $f(t)=t$. Then $\|f\|=\sup_{|t|\le1}|t|=1$, $d=3$, $b=2$, and $\varepsilon=1$. Every $x\in[-1,1]$ satisfies $f(x)=x\le1=b-\varepsilon<3=b+\varepsilon=f(3)$; at $x=1$ the left bound is attained. This explicitly realizes gap two and margin one. [step 3.1, algebra] ∎

## Source notes

Brezis Corollary 1.3 and Theorem 1.7, pp.3,7 (quantitative specialization); Teschl Theorem 4.20 proof and Corollary 5.4, pp.116,140.
