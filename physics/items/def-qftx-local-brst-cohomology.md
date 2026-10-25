---
id: def-qftx-local-brst-cohomology
kind: definition
title: Local BRST Cohomology Modulo Total Derivatives
status: "published"
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
dependency_roles:
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Glenn Barnich, Friedemann Brandt, and Marc Henneaux, Local BRST cohomology in gauge theories"
      url: "https://arxiv.org/pdf/hep-th/0002245"
      locator: "§§2.3 and 4.1–4.5: local functions on finite jet spaces, local forms, the horizontal differential, and the relative cocycle/coboundary equations."
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§4.6 and 8.1: BRST cohomology and its local-functional interpretation, with stated gauge-theory assumptions."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $n\geq1$, let $U\subseteq\mathbb R^n$ be nonempty and open, let $\mathcal F_U$ be the finite-jet local algebra with nilpotent BRST derivation $s$ and commuting total derivatives $D_\mu$, and let $dx^1,\ldots,dx^n$ be anticommuting coordinate one-forms. For $g\in\mathbb Z$ and $0\leq p\leq n$, let $\mathcal A_U^{g,p}$ be the space of local horizontal $p$-forms of ghost number $g$, namely finite sums of $dx^{\mu_1}\wedge\cdots\wedge dx^{\mu_p}$ with coefficients in the ghost-number-$g$ part of $\mathcal F_U$. Define the horizontal differential $d_H:=dx^\mu D_\mu$; its square is $d_H^2a=dx^\mu\wedge dx^\nu D_\mu D_\nu a=\tfrac12dx^\mu\wedge dx^\nu[D_\mu,D_\nu]a=0$. Extend $s$ to horizontal forms by $s(dx^\mu\wedge a)=-dx^\mu\wedge sa$. Since $sD_\mu=D_\mu s$, one has $s(d_Ha)=-dx^\mu\wedge D_\mu(sa)=-d_H(sa)$, hence $sd_H+d_Hs=0$.

For $p=0$, set $\mathcal A_U^{g,-1}=\{0\}$. The local BRST cohomology modulo total derivatives in bidegree $(g,p)$ is

$$H^{g,p}(s\mid d_H):=\frac{\{a\in\mathcal A_U^{g,p}:\text{there is }b\in\mathcal A_U^{g+1,p-1}\text{ with }sa+d_Hb=0\}}{\{sm+d_Hn:m\in\mathcal A_U^{g-1,p},\ n\in\mathcal A_U^{g,p-1}\}}.$$

The denominator is a subspace of the numerator: for $a=sm+d_Hn$, choose $b=sn$ and compute $sa+d_Hb=s^2m+sd_Hn+d_Hsn=0$. For $p=0$, $n=b=0$ and the same verification reduces to $s^2m=0$. This is cohomology of the specified local jet algebra and horizontal differential; it is not cohomology of a physical state space or Hilbert space. Interpreting $d_H$-exact top forms as equal local functionals additionally assumes compact support or boundary conditions that make the corresponding surface term vanish.

## Definition references

[[def-qftx-nonabelian-brst-complex|Finite-jet local algebra and BRST operator]]

[[lem-qftx-nonabelian-brst-nilpotence|Nilpotence and commutation with total derivatives]]

[Barnich, Brandt, and Henneaux, §§2.3 and 4.1–4.5](https://arxiv.org/pdf/hep-th/0002245)

[Gomis, París, and Samuel, §§4.6 and 8.1](https://arxiv.org/pdf/hep-th/9412228)
