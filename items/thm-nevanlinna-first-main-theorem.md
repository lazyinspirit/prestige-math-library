---
id: thm-nevanlinna-first-main-theorem
kind: theorem
title: "Nevanlinna’s First Main Theorem with exact centre constant"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-quantities-well-defined, lem-meromorphic-jensen-formula-with-centre-divisor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §1, equation (2), and §3, equations (9)–(14)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §4, Theorem 4.1 and proof"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

Write $M_r h=(2\pi)^{-1}\int_0^{2\pi}h(re^{it})\,dt$ for a circular mean whenever it exists.

Let $f$ be a nonconstant meromorphic function on $\mathbb C$ and let $a\in\widehat{\mathbb C}$. For every $r>0$,
$$m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a).$$
For $a=\infty$, set $C(f,\infty)=0$. For finite $a$, write the first nonzero Laurent term at the centre as
$$f(z)-a=c_a z^{k_a}+\text{higher Laurent terms},\qquad c_a\ne0,$$
and set $C(f,a)=\tfrac12\log(1+|a|^2)-\log|c_a|$. In particular, the difference $m(r,a;f)+N(r,a;f)-T(r,f)$ is $O_{f,a}(1)$ as $r\to\infty$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$ and a target $a\in\widehat{\mathbb C}$.

[F1] The normalized chordal distance is $\delta(w,a)=|w-a|/(\sqrt{1+|w|^2}\sqrt{1+|a|^2})$ for finite $w,a$, and $\delta(w,\infty)=1/\sqrt{1+|w|^2}$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] $m(r,a;f)$ is the circular mean of $\log(1/\delta(f,a))$, and $T(r,f)=m(r,\infty;f)+N(r,\infty;f)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] For finite $a$, the centre-divisor Jensen identity is $M_r\log|f-a|=\log|c_a|+N(r,a;f)-N(r,\infty;f)$, with divisor-circle means interpreted by continuous radial limits ([[lem-meromorphic-jensen-formula-with-centre-divisor]]).

[F4] The divisor counts are finite on bounded discs and $N(r,a;f)$ and $m(r,a;f)$ are finite and continuous for every $r>0$, including divisor radii ([[thm-nevanlinna-quantities-well-defined]]).

## Proof

**Proof technique:** use the pointwise chordal identity for finite targets, average it on a regular circle, and substitute the centre-divisor Jensen identity; handle infinity directly from the definition.

1.1 Fix finite $a$ and a regular radius $r$ whose circle contains no pole and no $a$-point. From [F1], at every point of that circle, $\log(1/\delta(f,a))=\tfrac12\log(1+|f|^2)+\tfrac12\log(1+|a|^2)-\log|f-a|$. [F1, given]

2.1 Averaging the identity in step 1.1 and using [F2] gives $m(r,a;f)-m(r,\infty;f)=\tfrac12\log(1+|a|^2)-M_r\log|f-a|$. [F2, step 1.1]

3.1 Substitute [F3] into step 2.1 to obtain $m(r,a;f)-m(r,\infty;f)=\tfrac12\log(1+|a|^2)-\log|c_a|-N(r,a;f)+N(r,\infty;f)$. Rearranging and using [F2] yields the claimed formula for finite $a$ at each regular radius. [F2, F3, step 2.1, algebra]

4.1 Regular radii are dense because [F4] makes the divisor sets finite on bounded discs. The finite-target quantities in the formula are continuous by [F4], so the equality from step 3.1 on that dense set extends to every $r>0$. For $a=\infty$, $C(f,\infty)=0$ and the asserted identity is exactly the defining equality in [F2]. [F2, F4, step 3.1]

5.1 For each fixed $f,a$, the constant $C(f,a)$ in step 4.1 is finite and independent of $r$; therefore the difference in the statement is bounded as $r\to\infty$. [step 4.1, algebra] ∎
