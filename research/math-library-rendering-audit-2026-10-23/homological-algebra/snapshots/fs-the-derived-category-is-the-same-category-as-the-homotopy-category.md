---
id: "fs-the-derived-category-is-the-same-category-as-the-homotopy-category"
kind: "false-statement"
deps: ["prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic", "fs-every-acyclic-complex-is-contractible"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every abelian category, $Q:K(\mathcal A)\to D(\mathcal A)$ is an equivalence of categories.

## Facts & Assumptions

**Given:** For every abelian category, $Q:K(\mathcal A)\to D(\mathcal A)$ is an equivalence of categories.

[F1] A complex is zero in the derived category iff it is acyclic ([[prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic]]).

## Refutation

1.1 In abelian groups take $X^0=\mathbb Z$, $X^1=\mathbb Z$, $X^2=\mathbb Z/2$, with $d^0=2$, $d^1$ reduction modulo two, and other terms zero. The first map is monic, its image is the kernel of the second, and the second is epic. Thus $X$ is acyclic and $QX=0$. [F1, algebra]

2.1 A contraction would satisfy $1_{X^2}=d^1h^2$, giving a section $h^2:\mathbb Z/2\to\mathbb Z$. Every such homomorphism is zero because $\mathbb Z$ has no nonzero element killed by two. Thus $1_X\ne0$ in $K$, whereas $Q(1_X)=0$ in $D$. The functor is not faithful and cannot be an equivalence. This is a direct verification of the familiar acyclic-but-not-contractible obstruction. [step 1.1, algebra] ∎
