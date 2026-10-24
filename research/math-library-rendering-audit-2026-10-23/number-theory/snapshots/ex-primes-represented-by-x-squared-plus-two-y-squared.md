---
id: ex-primes-represented-by-x-squared-plus-two-y-squared
kind: example
title: "Odd primes congruent to $1$ or $3$ modulo $8$ are represented by $x^2+2y^2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-reduced-forms-of-discriminant-minus-eight, thm-proper-equivalence-preserves-representations, prop-positive-definite-binary-form-criterion, thm-first-supplement-to-quadratic-reciprocity, thm-second-supplement-to-quadratic-reciprocity, thm-legendre-symbol-multiplicativity, def-legendre-symbol, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1h"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Example

An odd prime $p$ is represented by $x^2+2y^2$ if and only if

$$p\equiv1\pmod8\qquad\text{or}\qquad p\equiv3\pmod8.$$

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] The unique reduced primitive form of discriminant $-8$ is $(1,0,2)$, so every primitive positive-definite form of discriminant $-8$ is properly equivalent to $x^2+2y^2$ ([[ex-reduced-forms-of-discriminant-minus-eight]]).

[L2] Properly equivalent binary quadratic forms represent the same integers ([[thm-proper-equivalence-preserves-representations]]).

[L3] An integral binary quadratic form is positive definite exactly when its leading coefficient is positive and its discriminant is negative ([[prop-positive-definite-binary-form-criterion]]).

[L4] For an odd prime $p$, $\left(\frac{-1}{p}\right)=1$ exactly when $p\equiv1\pmod4$, and $\left(\frac{-1}{p}\right)=-1$ exactly when $p\equiv3\pmod4$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[L5] For an odd prime $p$, $\left(\frac2p\right)=1$ exactly when $p\equiv1$ or $7\pmod8$, and $\left(\frac2p\right)=-1$ exactly when $p\equiv3$ or $5\pmod8$ ([[thm-second-supplement-to-quadratic-reciprocity]]).

[L6] For every odd prime $p$ and integers $u,v$, $\left(\frac{uv}{p}\right)=\left(\frac up\right)\left(\frac vp\right)$ ([[thm-legendre-symbol-multiplicativity]]).

[L7] For an odd prime $p$, $\left(\frac ap\right)=1$ exactly when $a$ is a quadratic residue modulo $p$ ([[def-legendre-symbol]]).

## Verification

**Proof technique:** direct.

1.1 If $p=x^2+2y^2$, then reducing modulo $8$ shows $x^2\equiv1\pmod8$ and $2y^2\equiv0$ or $2\pmod8$, because squares modulo $8$ are $0,1,4$ and $p$ is odd. Hence $p\equiv1$ or $3\pmod8$. [given, algebra]

1.2 Conversely, suppose $p\equiv1$ or $3\pmod8$. Then [L4] and [L5] give $\left(\frac{-1}{p}\right)\left(\frac2p\right)=1$, so [L6] yields $\left(\frac{-2}{p}\right)=1$. By [L7], there is an integer $t$ with $t^2\equiv-2\pmod p$. [L4, L5, L6, L7, given, algebra]

2.1 Set $c=(t^2+2)/p$, which is an integer by step 1.2, and define $$ f=(p,2t,c). $$ Then $$ \Delta(f)=(2t)^2-4pc=4t^2-4(t^2+2)=-8, $$ and $f(1,0)=p$, so $f$ represents $p$. If a divisor $d$ of $p$, $2t$, and $c$ were greater than $1$, then $d=p$ because $p$ is prime; but $p\mid2t$ would force $p\mid t$, hence $p\mid t^2+2$, so $p\mid2$, impossible for an odd prime. Thus $f$ is primitive. Since its leading coefficient is $p>0$ and its discriminant is $-8<0$, [L3] makes $f$ positive definite. Therefore [L1] shows that $f$ is properly equivalent to $x^2+2y^2$, and then [L2] shows that $x^2+2y^2$ represents $p$. [L1, L2, L3, step 1.2, given, construct, algebra]

3.1 Steps 1.1 and 2.1 prove the claimed criterion. [step 1.1, step 2.1] ∎
