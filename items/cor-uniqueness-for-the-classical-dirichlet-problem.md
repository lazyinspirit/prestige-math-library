---
id: cor-uniqueness-for-the-classical-dirichlet-problem
kind: corollary
title: "Uniqueness for the classical dirichlet problem"
status: published
origin: pipeline
deps: [thm-comparison-principle-for-classical-subharmonic-functions]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.18, p.28"
    - title: "Tsogtgerel Gantumur, Harmonic functions (2012)"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§6 Corollary 10, p.9; §11 Theorem 24(a), p.18"
---

## Statement

Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open. Two functions $u,v\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u=\Delta v$ in $\Omega$ and $u=v$ on $\partial\Omega$ agree on $\overline\Omega$. Thus prescribed classical Poisson equation and Dirichlet data have at most one such solution. Moreover, for equal Laplacians,
$$\sup_{\overline\Omega}|u-v|\le\sup_{\partial\Omega}|u-v|.$$
In particular, a sequence of such solutions with a common Laplacian and uniformly convergent boundary traces converges uniformly on the closure.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] On a bounded nonempty open set, $\Delta u\ge\Delta v$ and boundary $u\le v$ imply closure $u\le v$ for $C^2$ interior, continuous-closure functions. ([[thm-comparison-principle-for-classical-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Comparison applied to $(u,v)$ and then $(v,u)$ gives $u\le v$ and $v\le u$, respectively, proving uniqueness. [F1, given]

1.2 For possibly different boundary values put $b=\max_{\partial\Omega}|u-v|$. It is finite because the boundary is nonempty compact and the difference is continuous. Compare $u$ with $v+b$ and $v$ with $u+b$; their Laplacians agree. Hence $|u-v|\le b$ on the closure. [F1, algebra]

2.1 For a sequence with common Laplacian, the bound just proved applies to every pair of terms. Uniformly convergent boundary traces are uniformly Cauchy, so the solutions are uniformly Cauchy on the closure. Completeness of the real numbers supplies the pointwise limit and the same Cauchy bound makes convergence uniform. The limit is continuous there, as follows by combining a uniform error bound with continuity of a fixed term. [step 1.2, algebra] ∎
