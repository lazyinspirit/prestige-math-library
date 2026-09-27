---
id: ex-dot-conjugate-weights-have-the-same-central-character
kind: example
title: "Dot-conjugate type-$A_2$ weights have the same central character"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [cor-central-characters-are-dot-weyl-orbits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
generation:
  role: example
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Example

In type $A_2$, let $\lambda=0$ and let $\mu=s_1\cdot \lambda=-\alpha_1$. Then $\lambda$ and $\mu$ have the same central character. Concretely,

$$\lambda+\rho=(1,0,-1), \qquad \mu+\rho=s_1(1,0,-1)=(0,1,-1),$$

and the basic symmetric invariants take the same values on those two triples.

## Facts & Assumptions

**Given:** Type $A_2$ in the realization $\{(x_1,x_2,x_3)\in \mathbb C^3 : x_1+x_2+x_3=0\}$, the simple reflection $s_1$, and the weight $\lambda=0$.

## Verification

**Proof technique:** direct.

1.1 In the $A_2$ realization, $\rho=(1,0,-1)$ and $s_1$ swaps the first two coordinates. Hence $\mu=s_1\cdot 0=s_1(\rho)-\rho=-\alpha_1$, and $\mu+\rho=s_1(\rho)=(0,1,-1)$. [given, algebra]

2.1 The degree-two and degree-three symmetric invariants from the $A_2$ Cartan take the same values on $\rho$ and $s_1(\rho)$ because those points are in the same ordinary Weyl orbit. Therefore [[cor-central-characters-are-dot-weyl-orbits]] gives $\chi_\mu=\chi_\lambda$. [step 1.1] ∎
