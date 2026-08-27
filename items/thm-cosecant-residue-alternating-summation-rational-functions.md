---
id: thm-cosecant-residue-alternating-summation-rational-functions
kind: theorem
title: "Cosecant residues sum an alternating rational series over the integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-residue-contours,
       thm-residue-theorem-null-homologous-cycle,
       cor-residue-quotient-simple-zero,
       thm-complex-sine-and-cosine-zero-sets,
       cor-complex-trigonometric-and-hyperbolic-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $f$ be a rational function such that $f(n)$ is defined for every
$n\in\mathbb Z$ and $f(z)=O(z^{-2})$ as $|z|\to\infty$. Then

$\sum_{n\in\mathbb Z}(-1)^nf(n) =-\sum_{a\notin\mathbb Z}\operatorname{Res}(\pi\csc(\pi z)f(z),a),$

where the sum on the right is over the nonintegral poles of $f$.

## Facts & Assumptions

**Given:** A rational function $f$ with no integer pole and with $f(z)=O(z^{-2})$ at infinity.

[L1] The zeros of $\sin(\pi z)$ are exactly the integers, and $(\sin(\pi z))'=\pi\cos(\pi z)$ ([[thm-complex-sine-and-cosine-zero-sets]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[L2] Residues at simple zeros are computed by the quotient rule ([[cor-residue-quotient-simple-zero]]).

[L3] The residue theorem applies on expanding rectangles ([[thm-residue-theorem-null-homologous-cycle]]).

## Proof

**Proof technique:** direct.

1.1 Let $F(z)=\pi\csc(\pi z)f(z)$. By [L1], $\sin(\pi z)$ has a simple zero at [L1, L2, algebra] each integer $n$, and gives $\operatorname{Res}(F,n) =\frac{\pi f(n)}{\pi\cos(\pi n)} =(-1)^nf(n).$ [L2]

1.2 On the same rectangles used for the cotangent theorem, the factor $\csc(\pi z)$ is uniformly bounded on the vertical sides because $|\sin(\pi(N+\tfrac12+iy))|=|\cosh(\pi y)|\ge1$, and on the horizontal sides it decays exponentially like $e^{-\pi|N|}$. Since $f(z)=O(z^{-2})$, the boundary integral of $F$ tends to $0$. [given]

2.1 Applying [L3] and letting the rectangle expand gives $\sum_{n\in\mathbb Z}(-1)^nf(n) +\sum_{a\notin\mathbb Z}\operatorname{Res}(\pi\csc(\pi z)f(z),a)=0.$ Rearranging yields the stated alternating summation formula. [step 1.1, step 1.2, L3] ∎
