---
id: ex-distributional-harmonicity-removes-an-apparent-corner
kind: example
title: "Distributional harmonicity removes an apparent interior corner"
status: published
origin: pipeline
deps: [def-distributional-harmonicity-and-poisson-equation-in-rn]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Example

Let $n\ge1$ and define $v:\mathbb R^n\to\mathbb R$ by $v(x)=|x_1|$. This apparent corner is not distributionally harmonic on $\mathbb R^n$; indeed $\Delta v=2\delta_{\{x_1=0\}}$, where $\delta_{\{x_1=0\}}(\phi)=\int_{\mathbb R^{n-1}}\phi(0,x')\,dx'$ (the evaluation $\phi(0)$ when $n=1$). In particular, $|x_1|$ is not distributionally harmonic on any open set meeting the hyperplane $\{x_1=0\}$.

## Verification

**Given:** $n\ge1$, the domain $\mathbb R^n$, and the distributional derivative convention [[def-distributional-harmonicity-and-poisson-equation-in-rn]].

1.1 In one variable, split the compactly supported test integral at $0$ and integrate by parts twice. The ordinary second derivative vanishes on both half-lines, and the jump of the first derivative from $-1$ to $1$ contributes $2\phi(0)$, so $(|t|)''=2\delta_0$. Applying this calculation at each fixed $x'$ and integrating over the remaining variables gives $\Delta v(\phi)=2\int_{\mathbb R^{n-1}}\phi(0,x')\,dx'$; derivatives in the other coordinates vanish. [given, algebra]

2.1 On any open set meeting the hyperplane, choose a nonnegative smooth test function supported near a meeting point and positive there. Its hyperplane integral is positive, so step 1.1 makes $\Delta v$ nonzero on that open set. Thus the corner fails the distributional harmonicity test there. [step 1.1] ∎
