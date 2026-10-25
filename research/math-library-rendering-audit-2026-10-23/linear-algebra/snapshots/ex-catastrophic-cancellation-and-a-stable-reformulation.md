---
id: ex-catastrophic-cancellation-and-a-stable-reformulation
kind: example
title: "A cancellation-prone formula can be replaced by a stable reformulation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-relative-floating-point-model-and-unit-roundoff, def-absolute-and-relative-forward-error-for-a-problem-map]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Floating Point and Error Analysis"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html"
    - title: "James Demmel, Math 221 Lecture 2: Floating Point Arithmetic"
      url: "https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html"
---



## Example

Evaluate $f(z)=1-\sqrt{1-z}$ at $z=10^{-8}$ under the standard relative
model with unit roundoff $u$
([[def-standard-relative-floating-point-model-and-unit-roundoff]]). The direct
formula $1-\sqrt{1-z}$ subtracts the nearby numbers $1$ and
$\sqrt{1-z}\approx 1-5\cdot 10^{-9}$ and loses about eight decimal digits;
the algebraically equivalent form

$$f(z)=\frac{z}{1+\sqrt{1-z}}$$

subtracts nothing and evaluates to full accuracy. Cancellation is a property of
the formula, and a stable reformulation removes it without changing the
mathematical function.

## Facts & Assumptions

**Given:** The parameter $z=10^{-8}$, the value $w=\sqrt{1-z}>0$, the unit roundoff $u$ with $0<u<1/2$, and the two formulas $g(z)=1-\sqrt{1-z}$ and $h(z)=z/(1+\sqrt{1-z})$.

[L1] The relative model: each operation obeys $\operatorname{fl}(t)=t(1+\delta)$ with $|\delta|\le u$ when $t$ lies in the normal range ([[def-standard-relative-floating-point-model-and-unit-roundoff]]).

[L2] Relative forward error of a computed value $\widehat y$ for the exact answer $f(z)$ is $|\widehat y-f(z)|/|f(z)|$ ([[def-absolute-and-relative-forward-error-for-a-problem-map]]).

## Verification

**Proof technique:** direct.

1.1 The two formulas agree exactly: $z/(1+w)=(1-w)(1+w)/(1+w)=1-w$, because $z=1-w^{2}$ and $1+w>0$. [algebra]

1.2 For $z=10^{-8}$, the exact value is $f(z)=1-w\approx 5\cdot 10^{-9}$: indeed $(1-5\cdot 10^{-9})^{2}=1-10^{-8}+25\cdot 10^{-18}>1-z$, so $w<1-5\cdot 10^{-9}$, while $(1-6\cdot 10^{-9})^{2}=1-12\cdot 10^{-9}+36\cdot 10^{-18}<1-z$, so $w>1-6\cdot 10^{-9}$; hence $1-w\in(5\cdot 10^{-9},\,6\cdot 10^{-9})$. [algebra]

1.3 The direct formula. By [L1] the computed values are $\operatorname{fl}(w)=w(1+\delta_1)$ and $\operatorname{fl}(1-\operatorname{fl}(w))=\bigl(1-w(1+\delta_1)\bigr)(1+\delta_2)$ with $|\delta_1|,|\delta_2|\le u$; subtracting the exact value $1-w$ leaves an error of absolute value $|\delta_2(1-w)-\delta_1w(1+\delta_2)|\le u(1-w)+uw(1+u)$. [L1, algebra]

1.4 The reformulated formula. By [L1], the computed values are $\operatorname{fl}(1+w)=(1+w)(1+\delta_3)$ for the denominator and $\operatorname{fl}(z/\operatorname{fl}(1+w))=\frac{z}{(1+w)(1+\delta_3)}(1+\delta_4)$ for the quotient, with $|\delta_3|,|\delta_4|\le u$. [L1, algebra]

2.1 By [L2], the relative error of the direct formula is at most $u+u\,w(1+u)/(1-w)$; with $w\approx 1$ and $1-w\approx 5\cdot 10^{-9}$ this is about $u(1+2\cdot 10^{8})$, roughly $2\cdot 10^{8}\,u$: with $u=2^{-53}$ the relative forward error can reach about $2\cdot 10^{-8}$, losing about eight of the roughly sixteen decimal digits of relative precision available in binary64. [L2, step 1.3, algebra]

2.2 By [L2], the relative error of the reformulated value is $|(1+\delta_4)/(1+\delta_3)-1|=|\delta_4-\delta_3|/|1+\delta_3|\le 2u/(1-u)$, which is of order $u$, not of order $10^{8}u$: no subtraction of nearby quantities occurs, and the reformulation evaluates $f$ to full relative accuracy. [L2, step 1.4, algebra]

3.1 Steps 2.1 and 2.2 compare the same function evaluated two ways: the direct formula amplifies roundoff by the cancellation factor $1/(1-w)\approx 2\cdot 10^{8}$, while the rationalized formula keeps the error at order $u$. [step 2.1, step 2.2] ∎
