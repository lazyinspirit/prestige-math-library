---
id: alg-na-nonstationary-moment-expansion
kind: algorithm
title: Bounded integration-by-parts expansion for an oscillatory moment
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-na-finite-interval-oscillatory-integral
  - thm-na-nonstationary-oscillatory-integration-by-parts
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(i)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
---

## Definition

Input $a<b$, $\omega\in\mathbb R\setminus\{0\}$, a real phase $g\in C^{r+1}[a,b]$ with $|g'|\ge c>0$, a complex amplitude $p\in C^r[a,b]$, an integer $r\ge1$, and a certified real bound $M\ge\|T_g^rp\|_\infty$. Compute
$$S_r(p)=\sum_{j=0}^{r-1}\frac{(-1)^j}{(i\omega)^{j+1}}\left[\frac{T_g^jp(x)}{g'(x)}e^{i\omega g(x)}\right]_a^b,\qquad \epsilon_r=\frac{(b-a)M}{|\omega|^r}.$$
Return $(S_r(p),\epsilon_r)$. The nonstationary recurrence and the need for the certified derivative bound are specified in [[thm-na-nonstationary-oscillatory-integration-by-parts]]. If exact phase moments are available, they may instead be passed as exact moment data to a Filon rule; this algorithm makes no general closed-form claim for nonlinear phases.
