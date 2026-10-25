---
id: def-product-total-complex-of-a-double-complex
kind: definition
title: Product total complex of a double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-homological-double-complex, def-products-and-coproducts]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, Chapter 5, totalisation conventions"
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Definition

For a [[def-homological-double-complex|homological double complex]] $C$ in
an abelian category, suppose each diagonal [[def-products-and-coproducts|product]]
exists. Write
$$P_n=\operatorname{Tot}^{\Pi}_n(C)=\prod_{p+q=n}C_{p,q},\qquad \pi^n_{p,q}:P_n\to C_{p,q}.$$
Define $d_n:P_n\to P_{n-1}$ by the equations
$$\pi^{n-1}_{a,b}d_n=h_{a+1,b}\pi^n_{a+1,b}+v_{a,b+1}\pi^n_{a,b+1}\quad(a+b=n-1).$$
The product universal property gives a unique arrow from this family of
two-term sums; no support condition is imposed on product coordinates.

Here the chain condition can be checked directly. For $a+b=n-2$, composing
the coordinate formula twice gives
$$\pi^{n-2}_{a,b}d_{n-1}d_n=h_{a+1,b}h_{a+2,b}\pi^n_{a+2,b}+(h_{a+1,b}v_{a+1,b+1}+v_{a,b+1}h_{a+1,b+1})\pi^n_{a+1,b+1}+v_{a,b+1}v_{a,b+2}\pi^n_{a,b+2}=0.$$
The three coefficients vanish respectively by $h^2=0$, anticommutation at
$(a+1,b+1)$ and $v^2=0$. Product uniqueness implies $d_{n-1}d_n=0$.

Thus $(P,d)$ is the **product total complex**. An all-zero diagonal gives the
zero product, and a single nonzero component gives that component. The
construction and calculation apply in these cases too. Existence of the
specified products is retained as a hypothesis; neither product exactness nor
any choice of lifts is needed.
