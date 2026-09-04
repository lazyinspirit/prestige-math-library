---
id: thm-reversing-the-tensor-product-exchanges-left-and-right-duals
kind: theorem
title: "Reversing the tensor product exchanges left and right duals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-dual-and-right-dual-object, def-the-reverse-and-the-opposite-of-a-monoidal-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Section 2.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $\mathcal C^{\mathrm{rev}}$ be the reverse monoidal category of
$\mathcal C$. An object is a left dual of $X$ in $\mathcal C^{\mathrm{rev}}$ if
and only if it is a right dual of $X$ in $\mathcal C$, and similarly with
"left" and "right" interchanged.

## Facts & Assumptions

**Given:** A monoidal category $\mathcal C$ and an object $X$ of $\mathcal C$.

[L1] In the reverse monoidal category, the tensor order is reversed and the
unitors are swapped: $\lambda_X^{\mathrm{rev}}=\rho_X$ and
$\rho_X^{\mathrm{rev}}=\lambda_X$
([[def-the-reverse-and-the-opposite-of-a-monoidal-category]]).

[L2] Left and right duality are defined by the explicit zig-zag composites in
[[def-left-dual-and-right-dual-object]].

## Proof

**Proof technique:** direct.

1.1 Suppose $Y$ is a left dual of $X$ in $\mathcal C^{\mathrm{rev}}$, with evaluation $Y\otimes^{\mathrm{rev}}X=X\otimes Y\to\mathbf 1$ and coevaluation $\mathbf 1\to X\otimes^{\mathrm{rev}}Y=Y\otimes X$. [given, L1, L2]

2.1 Writing the two left-dual zig-zag composites in $\mathcal C^{\mathrm{rev}}$ and then translating them with [L1] replaces $\otimes^{\mathrm{rev}}$ by reversed tensor order, $\alpha^{\mathrm{rev}}$ by $\alpha^{-1}$, and the reverse unitors by the ordinary opposite ones. The result is exactly the pair of right-dual zig-zag composites for $Y$ as a right dual of $X$ in $\mathcal C$. [step 1.1, L1, L2]

3.1 Therefore the left-dual axioms in $\mathcal C^{\mathrm{rev}}$ are equivalent to the right-dual axioms in $\mathcal C$. The converse and the left/right-swapped statement are the same calculation in reverse. [step 2.1] ∎
