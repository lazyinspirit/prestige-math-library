---
id: ex-one-rational-function-has-three-laurent-series
kind: example
title: "The same rational function has different Laurent series on different annuli"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convergent-complex-laurent-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Example

The rational function

$$f(z)=\frac{1}{z(z-1)}$$

has different Laurent series on different annuli:

$$\frac{1}{z(z-1)}=-\sum_{n\ge0}z^{n-1}\qquad(0<|z|<1),$$

$$\frac{1}{z(z-1)}=\sum_{n\ge0}z^{-n-2}\qquad(|z|>1),$$

and, with $w=z-1$,

$$\frac{1}{z(z-1)}=\sum_{n\ge0}(-1)^n(z-1)^{n-1}\qquad(0<|z-1|<1).$$

Each is a convergent Laurent series on its stated annulus
([[def-convergent-complex-laurent-series]]).

## Facts & Assumptions

**Given:** The function $f(z)=1/(z(z-1))$.

## Verification

**Proof technique:** direct.

1.1 On $0<|z|<1$, $$\frac{1}{z(z-1)}=-\frac{1}{z}\cdot\frac{1}{1-z}=-\sum_{n\ge0}z^{n-1}.$$ [algebra]

1.2 On $|z|>1$, $$\frac{1}{z(z-1)}=\frac{1}{z^2}\cdot\frac{1}{1-z^{-1}}=\sum_{n\ge0}z^{-n-2}.$$ [algebra]

1.3 Writing $w=z-1$, on $0<|w|<1$ one has $$\frac{1}{z(z-1)}=\frac{1}{w(1+w)}=\frac{1}{w}\cdot\frac{1}{1-(-w)}=\sum_{n\ge0}(-1)^nw^{n-1}.$$ [algebra]

2.1 Since the three right-hand sides are different formal Laurent series attached to different annuli, the same rational function really does have different Laurent expansions on different annuli. [step 1.1, step 1.2, step 1.3] ∎
