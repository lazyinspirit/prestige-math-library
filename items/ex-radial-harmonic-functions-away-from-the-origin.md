---
id: ex-radial-harmonic-functions-away-from-the-origin
kind: example
title: "Radial harmonic functions away from the origin"
status: published
origin: pipeline
deps: [def-laplacian-of-a-c2-function]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
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

Let $n\ge1$ and $U\in C^2((0,\infty))$. The radial function $u:\mathbb R^n\setminus\{0\}\to\mathbb R$ given by $u(x)=U(|x|)$ is harmonic precisely when
$$U''(r)+\frac{n-1}{r}U'(r)=0\qquad(r>0).$$
Thus the families are $U(r)=a+br$ for $n=1$, $U(r)=a+b\log r$ for $n=2$, and $U(r)=a+br^{2-n}$ for $n\ge3$.

## Verification

**Given:** $n\ge1$, $U\in C^2((0,\infty))$, and $r=|x|>0$.

1.1 Direct differentiation gives $\Delta U(r)=U''(r)+(n-1)U'(r)/r$ [given].

2.1 Multiplying by $r^{n-1}$ gives $(r^{n-1}U')'=0$, whose integrations give the listed cases [given, algebra]. ∎
