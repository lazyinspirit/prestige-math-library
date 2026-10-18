---
id: def-opposite-algebra-in-braided-fusion-category
kind: definition
title: Opposite algebra induced by a braiding
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-braided-monoidal-category
  - def-separable-algebra-and-bimodule-in-fusion-category
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §2.1.1
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Definition

Let $(\mathcal C,\otimes,\mathbf1,c)$ be a braided monoidal category and let $(A,m,\eta)$ be an algebra object ([[def-separable-algebra-and-bimodule-in-fusion-category]]). Define the monoidal opposite $\mathcal C^{\mathrm{mp}}$ to have the same objects and morphisms, tensor product $X\otimes_{\mathrm{mp}}Y:=Y\otimes X$, associator $\alpha^{\mathrm{mp}}_{X,Y,Z}:=\alpha^{-1}_{Z,Y,X}$, and unitors $\lambda^{\mathrm{mp}}_X:=\rho_X$, $\rho^{\mathrm{mp}}_X:=\lambda_X$. The braiding defines a strong monoidal equivalence $J:\mathcal C^{\mathrm{mp}}\to\mathcal C$ that is the identity on the underlying category and has tensorator $c_{Y,X}^{-1}:X\otimes Y\to Y\otimes X$.

Regard $A$ as an algebra in $\mathcal C^{\mathrm{mp}}$ with the same unit and multiplication $m:A\otimes_{\mathrm{mp}}A=A\otimes A\to A$. Its transport along $J$ is the **opposite algebra** $A^{\mathrm{op}}$ in $\mathcal C$; its multiplication is
$$m_{A^{\mathrm{op}}}=m\circ c_{A,A}^{-1}:A\otimes A\to A,$$
and its unit is $\eta$. This convention fixes the braiding direction. The hexagon identities are the tensorator coherence of $J$, and its unit coherence follows from the braiding unit equations.
