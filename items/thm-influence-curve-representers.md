---
id: thm-influence-curve-representers
kind: theorem
title: Influence-curve representers form an affine orthogonal-complement class
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-countable-choice, def-hilbert-space, def-orthogonality-and-orthogonal-complement, thm-orthogonal-decomposition-by-a-closed-subspace]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lectures 1–3 (Springer, 2002)"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Edward H. Kennedy, Semiparametric theory, arXiv:1709.06418v1 (2017)"
      url: "https://arxiv.org/pdf/1709.06418"
---

## Statement

Let $H$ be a real Hilbert space, let $\mathcal T\subseteq H$ be a closed linear subspace, and let $\dot\psi:\mathcal T\to\mathbb R^k$ be continuous linear with an ambient representer $\phi_0\in H^k$, meaning $\dot\psi(s)=\langle\phi_0,s\rangle_H$ coordinatewise for all $s\in\mathcal T$. Assume Countable Choice. Then all ambient representers are exactly

$$\phi_0+(\mathcal T^\perp)^k.$$

The unique representer in $\mathcal T^k$ is $\phi_{\mathrm{can}}=\Pi_{\mathcal T}\phi_0$; when $\dot\psi$ is a statistical path derivative, this is its canonical gradient. Projection is applied coordinatewise.

## Facts & Assumptions

**Given:** The hypotheses above. Here $\mathcal T^\perp=\{h\in H:\langle h,s\rangle_H=0\text{ for every }s\in\mathcal T\}$.

[F1] [[def-hilbert-space]]: a real Hilbert space is a real inner-product space complete in its induced norm.

[F2] [[thm-orthogonal-decomposition-by-a-closed-subspace]]: under Countable Choice, a closed subspace $M$ of a real Hilbert space has the decomposition $H=M\oplus M^\perp$.

[F3] [[def-orthogonality-and-orthogonal-complement]]: $M^\perp$ consists of the vectors whose inner product with every element of $M$ is zero.

[A1] [[def-countable-choice]]: Countable Choice selects a point from each member of a countable family of nonempty sets; it is the axiom assumed by [F2].

## Proof

**Given:** A real Hilbert space $H$, a closed linear subspace $\mathcal T$, a continuous linear map $\dot\psi$, an ambient representer $\phi_0$, and Countable Choice.

1.1 If $\phi\in H^k$ is any other representer, then for every $s\in\mathcal T$ and coordinate $j$, $\langle\phi_j-\phi_{0,j},s\rangle_H=0$, so $\phi_j-\phi_{0,j}\in\mathcal T^\perp$ by [F3]. Thus every representer lies in $\phi_0+(\mathcal T^\perp)^k$. [given, F1, F3]

1.2 Apply [F2] coordinatewise to write $\phi_0=\Pi_{\mathcal T}\phi_0+h$ with $\Pi_{\mathcal T}\phi_0\in\mathcal T^k$ and $h\in(\mathcal T^\perp)^k$. Countable Choice is used only in this projection step through [F2] and [A1]. [given, F1, F2, F3, A1, choose]

2.1 Conversely, if $h\in(\mathcal T^\perp)^k$, then $\langle\phi_0+h,s\rangle_H=\langle\phi_0,s\rangle_H+\langle h,s\rangle_H=\dot\psi(s)$ for every $s\in\mathcal T$, so $\phi_0+h$ is a representer. Hence the full representer set is exactly the stated affine class. [given, F1, F3, step 1.1, algebra]

3.1 By step 1.2, $\Pi_{\mathcal T}\phi_0$ is a representer. If two representers lie in $\mathcal T^k$, step 1.1 places their difference in $(\mathcal T^\perp)^k$ as well; each coordinate then lies in $\mathcal T\cap\mathcal T^\perp$ and has squared norm zero by positive definiteness in [F1], so the difference is zero. This proves existence and uniqueness of the canonical representer. [step 1.1, step 1.2, step 2.1, F1, F3, algebra] ∎

## Remarks

The theorem is a Hilbert-space statement; its only choice use is Countable Choice for the projection decomposition.
