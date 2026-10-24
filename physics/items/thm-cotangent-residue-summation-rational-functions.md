---
id: thm-cotangent-residue-summation-rational-functions
kind: theorem
title: "Cotangent residues sum a rational function over the integers"
status: published
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

Let $f$ be a rational function such that $f(n)$ is defined for every
$n\in\mathbb Z$ and $f(z)=O(z^{-2})$ as $|z|\to\infty$. Then

$\sum_{n\in\mathbb Z}f(n)=-\sum_{a\notin\mathbb Z}\operatorname{Res}(\pi\cot(\pi z)f(z),a),$

where the sum on the right is over the nonintegral poles of $f$.

## Facts & Assumptions

**Given:** A rational function $f$ with no integer pole and with $f(z)=O(z^{-2})$ at infinity.

[L1] The zeros of $\sin(\pi z)$ are exactly the integers, and they are simple because $(\sin(\pi z))'=\pi\cos(\pi z)$ does not vanish there ([[thm-complex-sine-and-cosine-zero-sets]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[L2] If $q$ has a simple zero at $a$, then $\operatorname{Res}(p/q,a)=p(a)/q'(a)$ ([[cor-residue-quotient-simple-zero]]).

[L3] The residue theorem applies on expanding rectangles ([[thm-residue-theorem-null-homologous-cycle]]).

## Proof

**Proof technique:** direct.

1.1 Let $F(z)=\pi\cot(\pi z)f(z)$. By [L1], $\sin(\pi z)$ has a simple zero at [L1, L2, algebra] each integer $n$, so applied to $\pi\cos(\pi z)f(z)/\sin(\pi z)$ gives $\operatorname{Res}(F,n) =\frac{\pi\cos(\pi n)f(n)}{\pi\cos(\pi n)}=f(n).$ [L2]

1.2 Integrate $F$ around the rectangle with vertices $N+\tfrac12\pm iN$ and $-N-\tfrac12\pm iN$. On the vertical sides one has $\cot(\pi(x+iy))=\mp i\tanh(\pi y)$ because $x=\pm(N+\tfrac12)$, so $|\cot|$ is uniformly bounded there. On the horizontal sides $\cot(\pi(x\pm iN))$ tends uniformly to $\mp i$ as $N\to\infty$. Since $f(z)=O(z^{-2})$, the integrand is $O(z^{-2})$ on every side, and the boundary integral tends to $0$. [given]

2.1 By [L3], the sum of all residues of $F$ inside the rectangle is therefore $0$. Those residues are the integer residues from step 1.1 together with the nonintegral poles of $f$. Letting $N\to\infty$ yields $\sum_{n\in\mathbb Z}f(n) +\sum_{a\notin\mathbb Z}\operatorname{Res}(\pi\cot(\pi z)f(z),a)=0,$ which is the stated identity. [step 1.1, step 1.2, L3] ∎
