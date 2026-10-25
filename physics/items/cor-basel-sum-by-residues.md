---
id: cor-basel-sum-by-residues
kind: corollary
title: "The Basel sum is pi squared over six by a residue computation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-residue-contours,
       thm-residue-theorem-null-homologous-cycle,
       thm-complex-sine-and-cosine-zero-sets,
       cor-complex-trigonometric-and-hyperbolic-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

$\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}.$

This computation uses $\pi\cot(\pi z)/z^2$ directly. It does not follow by
substituting $f(z)=1/z^2$ into the cotangent summation theorem, because that
theorem excludes integer poles of $f$.

## Facts & Assumptions

**Given:** The meromorphic function $F(z)=\pi\cot(\pi z)/z^2$.

[L1] The zeros of $\sin(\pi z)$ are the integers and are simple ([[thm-complex-sine-and-cosine-zero-sets]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[L2] The residue theorem applies on expanding rectangles, and the same boundary estimate as in the cotangent summation proof makes the rectangle integral of $F$ tend to $0$ ([[thm-residue-theorem-null-homologous-cycle]]).

## Proof

**Proof technique:** direct.

1.1 At every nonzero integer $n$, the function $\pi\cot(\pi z)$ has residue $1$, so $F$ has residue $1/n^2$ there. [L1, algebra]

1.2 Near $0$ one has $\sin(\pi z)=\pi z-\frac{\pi^3z^3}{6}+O(z^5),\qquad \cos(\pi z)=1-\frac{\pi^2z^2}{2}+O(z^4),$ so $\pi\cot(\pi z)=\frac{1}{z}-\frac{\pi^2}{3}z+O(z^3).$ Therefore $F(z)=\frac{1}{z^3}-\frac{\pi^2}{3z}+O(z),$ and the residue of $F$ at $0$ is $-\pi^2/3$. [L1, algebra]

2.1 Integrate $F$ around the rectangles used in the cotangent theorem. By [L2], the boundary integral tends to $0$, so the sum of the enclosed residues tends to $0$. Hence $2\sum_{n=1}^{\infty}\frac{1}{n^2}-\frac{\pi^2}{3}=0,$ which rearranges to the Basel value. [step 1.1, step 1.2, L2] ∎
