---
id: "ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k"
kind: "example"
deps: ["prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The complex $X=(\mathbb Z\xrightarrow2\mathbb Z\to\mathbb Z/2)$ in degrees $0,1,2$ is zero in $D(\mathbf{Ab})$ and is nonzero in $K(\mathbf{Ab})$.

## Facts & Assumptions

**Given:** The complex $X=(\mathbb Z\xrightarrow2\mathbb Z\to\mathbb Z/2)$ in degrees $0,1,2$ is zero in $D(\mathbf{Ab})$ and is nonzero in $K(\mathbf{Ab})$.

[F1] A complex is zero in $D$ iff it is acyclic ([[prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic]]).

## Verification

1.1 Reduction modulo two after multiplication by two is zero. The map two is monic, its image equals the kernel of reduction, and reduction is epic; all other terms are zero. Thus every cohomology group vanishes, and the acyclicity criterion gives $QX=0$. [F1, algebra]

2.1 If $X$ were zero in $K$, its identity would be nullhomotopic. The equation in degree two would give $1_{\mathbb Z/2}=d^1h^2$. But $h^2:\mathbb Z/2\to\mathbb Z$ is zero, so this is impossible. Hence $X$ is nonzero in $K$. [step 1.1, algebra] ∎
