---
id: ex-chow-technau-bound-at-a-fixed-epsilon
kind: example
title: "Applying the Chow–Technau logarithmic bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-chow-technau-uniform-inhomogeneous-littlewood-type-bound
  - def-convergents-of-regular-continued-fraction
proof_strategy: direct
sources:
  references:
    - title: "Chow–Technau 2024"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "Theorem 1.5 and full proof route in §§1–4"
    - title: "Queffélec–Ramaré 2003"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "Theorem 1.4 and measure construction in §§2–6"
---

## Example

Let $\alpha=(\sqrt5-1)/2$, $\gamma=0$, and $\epsilon=1$. Then $\alpha\in K$, and the Chow–Technau theorem asserts there is a full-Hausdorff-dimension set $G$ of badly approximable $\beta$ such that for every $\delta\in\mathbb R$, infinitely many $n\ge3$ satisfy
$$n\,\|n\alpha\|\,\|n\beta-\delta\|<\frac{(\log\log n)^4}{\log n}.$$



Here $K=\{\alpha\in\mathbb R\setminus\mathbb Q:\sup_j j^{-1}\log q_j(\alpha)<\infty\}$ and $\mathrm{Bad}=\{\beta:\inf_{q\ge1}q\|q\beta\|_{\mathbb R/\mathbb Z}>0\}$.

## Example references

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 1.5 and full proof route in §§1–4.

[Queffélec–Ramaré 2003](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — Theorem 1.4 and measure construction in §§2–6.


## Facts & Assumptions

**Given:** The regular continued fraction of $\alpha=(\sqrt5-1)/2$ and the Chow–Technau theorem.

[F1] Convergent denominators satisfy $q_{j+1}=a_{j+1}q_j+q_{j-1}$. [[def-convergents-of-regular-continued-fraction]]

[F2] The theorem applies to every $\alpha\in K$ and every $\epsilon>0$. [[thm-chow-technau-uniform-inhomogeneous-littlewood-type-bound]]

## Verification

1.1 The number $\sqrt5$ is irrational: if $a^2=5b^2$ for coprime integers $a,b$, then 5 divides both, a contradiction. Thus $\alpha$ is irrational. Since $\alpha^2+\alpha=1$ and $0<\alpha<1$, one has $1/\alpha=1+\alpha$, so the continued-fraction algorithm repeats the digit1 and the same remainder. Thus its expansion is $[0;1,1,1,\ldots]$. Thus [F1] gives $q_{j+1}=q_j+q_{j-1}\le2q_j$, so $q_j\le2^j$ after adjusting the initial index. Hence $\sup_j j^{-1}\log q_j\le\log2$, and $\alpha\in K$. [given, F1, algebra]

2.1 Substitute this $\alpha$, $\gamma=0$, and $\epsilon=1$ into [F2]. Its conclusion is precisely the displayed bound for every $\beta$ in the resulting full-dimensional set $G$ and every target $\delta$. [step 1.1, F2] ∎

