---
id: ex-log-modulus-is-harmonic-on-the-punctured-plane
kind: example
title: "log|z| is harmonic on the punctured plane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-harmonic-function, thm-logarithm-derivative-and-integral]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Example

On $\mathbb C\setminus\{0\}$, the function

$$u(z)=\log|z|=\frac12\log(x^2+y^2)$$

is harmonic.

## Facts & Assumptions

**Given:** The function $u(x,y)=\frac12\log(x^2+y^2)$ on $(x,y)\ne(0,0)$.

[L1] The real logarithm satisfies $(\log t)'=1/t$ for $t>0$ ([[thm-logarithm-derivative-and-integral]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating with [L1] gives $$u_x=\frac{x}{x^2+y^2},\qquad u_y=\frac{y}{x^2+y^2}.$$ [L1, algebra]

2.1 Differentiating once more gives $$u_{xx}=\frac{y^2-x^2}{(x^2+y^2)^2},\qquad u_{yy}=\frac{x^2-y^2}{(x^2+y^2)^2}.$$ [step 1.1, algebra]

3.1 The sum in step 2.1 is $0$, so $u_{xx}+u_{yy}=0$ on $\mathbb C\setminus\{0\}$; by [[def-plane-harmonic-function]], $u$ is harmonic there. [step 2.1] ∎
