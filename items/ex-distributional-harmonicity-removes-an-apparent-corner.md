---
id: ex-distributional-harmonicity-removes-an-apparent-corner
kind: example
title: "Distributional harmonicity removes an apparent interior corner"
status: draft
origin: pipeline
deps: [def-distributional-harmonicity-and-poisson-equation-in-rn, thm-weyl-lemma-for-the-laplacian]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Example

Let $n\ge1$ and define $v:\mathbb R^n\to\mathbb R$ by $v(x)=|x_1|$. This apparent corner is not distributionally harmonic on $\mathbb R^n$; indeed $\Delta v=2\delta_{\{x_1=0\}}$. Thus a distributionally harmonic locally integrable function has a unique smooth harmonic representative; in particular, the actual corner $|x_1|$ cannot be distributionally harmonic on any open set meeting the hyperplane $\{x_1=0\}$.

## Verification

**Given:** $n\ge1$, the domain $\mathbb R^n$, and the distributional derivative convention [[def-distributional-harmonicity-and-poisson-equation-in-rn]].

1.1 In one variable, integrating by parts twice gives $(|t|)''=2\delta_0$; tensoring with the remaining variables gives the stated hyperplane term [given].

2.1 Conversely [[thm-weyl-lemma-for-the-laplacian]] gives every distributionally harmonic distribution a smooth representative [step 1.1]. ∎
