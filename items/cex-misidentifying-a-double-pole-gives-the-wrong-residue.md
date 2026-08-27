---
id: cex-misidentifying-a-double-pole-gives-the-wrong-residue
kind: counterexample
title: "Treating a double pole as simple gives the wrong answer"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-residue-simple-pole,
       thm-residue-pole-derivative-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the simple-pole residue rule can be used unchanged at a pole
of order two.

## Facts & Assumptions

**Given:** The function $f(z)=e^z/(z-1)^2$.

[L1] A simple pole has residue $\lim_{z\to a}(z-a)f(z)$ ([[lem-residue-simple-pole]]).

[L2] A pole of order $2$ has residue $\frac{d}{dz}\bigl((z-a)^2f(z)\bigr)\Big|_{z=a}$ ([[thm-residue-pole-derivative-formula]]).

## Counterexample

**Proof technique:** computation.

1.1 The point $a=1$ is a pole of order $2$ of $f$, and [L2] gives the correct residue $\operatorname{Res}(f,1)=\frac{d}{dz}(e^z)\Big|_{z=1}=e.$ [L2, algebra]

2.1 If one incorrectly applies the simple-pole rule from [L1], one obtains $\lim_{z\to1}(z-1)\frac{e^z}{(z-1)^2} =\lim_{z\to1}\frac{e^z}{z-1},$ which does not exist as a finite complex number. So the simple-pole rule does not recover the residue at a double pole. [L1, step 1.1] ∎
