---
id: ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one
kind: example
title: "Near $(0,1)$, the equation $z_1^2+z_2^2=1$ is a holomorphic graph"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-holomorphic-implicit-function-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Example

For

$$f(z_1,z_2)=z_1^2+z_2^2-1,$$

the equation $f(z_1,z_2)=0$ defines $z_2$ as a holomorphic function of $z_1$
near $(0,1)$.

## Facts & Assumptions

**Given:** The holomorphic function $f(z_1,z_2)=z_1^2+z_2^2-1$ and the point $(0,1)$.

[L1] The holomorphic implicit function theorem applies when the derivative in the dependent variable is invertible ([[thm-holomorphic-implicit-function-theorem]]).

## Verification

**Proof technique:** direct.

1.1 One has $f(0,1)=0$ and $$\frac{\partial f}{\partial z_2}(0,1)=2\ne0.$$ [given, algebra]

2.1 Therefore [L1] yields neighbourhoods of $0$ and $1$ and a unique holomorphic function $\varphi$ such that $$f(z_1,\varphi(z_1))=0$$ for all nearby $z_1$. So near $(0,1)$ the zero set is the holomorphic graph $z_2=\varphi(z_1)$. [step 1.1, L1] ∎
