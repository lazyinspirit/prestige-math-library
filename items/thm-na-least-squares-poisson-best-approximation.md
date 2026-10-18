---
id: "thm-na-least-squares-poisson-best-approximation"
kind: "theorem"
title: "The conforming RT0/P1 least-squares Poisson minimizer is unique and best
  approximating"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 8
deps:
  [
    "def-na-least-squares-poisson-first-order",
    "lem-na-least-squares-poisson-space-conformity",
    "lem-na-least-squares-poisson-residual-norm-equivalence",
    "thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem",
    "def-axiom-of-choice",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "ai-altered" }
sources:
  {
    "references":
      [
        {
            "title": "Peter Bochev and Max Gunzburger, Least-squares finite element methods",
            "url": "https://people.sc.fsu.edu/~mgunzburger/files_papers/gunzburger-ls-icm.p\
              df",
            "locator": "Complete 26-page article; §§2.2.1 and 4.1–4.2."
          },
        {
            "title": "J. Bond et al., A First-Order System Least-Squares Finite Element
              Method for the Poisson-Boltzmann Equation",
            "url": "https://lukeo.cs.illinois.edu/files/2010_BoChCyOl_lspbe.pdf",
            "locator": "Complete 11-page article; Theorem 1 and proof; comparative weighted
              model."
          }
      ]
  }
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice and Countable Choice required by the weak Poisson supplier. Let $f\in L^2(\Omega)$ on a bounded connected Lipschitz polygon, and let $(\sigma,u)=(-\nabla u,u)$ be the unique weak Dirichlet solution. The exact functional $J_h$ has a unique minimizer in the conforming RT0/P1 family, and that minimizer is the orthogonal best approximation in the residual inner product. Its scalar component remains in $H^1_0(\Omega)$.

## Facts & Assumptions

**Given:** The exact weak Poisson solution, the finite conforming RT0/P1 family, AC and CC.

[A1] The weak Poisson existence supplier assumes AC and CC and gives a unique $H^1_0$ solution for bounded-domain data. ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]])

[F1] The trial family is a finite-dimensional subspace of $H(div)\times H^1_0$. ([[lem-na-least-squares-poisson-space-conformity]])

[F2] The residual map is injective and its norm is equivalent to the product graph norm. ([[lem-na-least-squares-poisson-residual-norm-equivalence]])

[F3] The residual is $(\sigma+\nabla u,div\sigma-f)$ with the stated homogeneous boundary condition. ([[def-na-least-squares-poisson-first-order]])

## Proof

1.1 The weak solution supplier in [A1] applies because a bounded polygon is open and bounded in one direction, and $v\mapsto(f,v)$ is bounded on $H^1_0$ by Cauchy–Schwarz and Poincare. It gives $u\in H^1_0$; the distributional equation gives $\sigma=-\nabla u\in H(div)$ and $div\sigma=f$. [A1, given, algebra]

2.1 For any $(\sigma_h,u_h)$ in the trial family, the residual of its difference from $(\sigma,u)$ equals $(\sigma_h+\nabla u_h,div\sigma_h-f)$ by [F3]. Thus $J_h=\|R((\sigma_h,u_h)- (\sigma,u))\|^2$. By [F2], $(z,w)_R=(Rz,Rw)_{L^2\times L^2}$ is an inner product on the ambient error space. [F1, F2, F3, step 1.1, algebra]

3.1 By Gram–Schmidt choose an orthonormal basis $e_1,\ldots,e_N$ of $R(X_h)$, and define $Pq=\sum_{j=1}^N(q,e_j)e_j$. Then $q-Pq$ is orthogonal to every $e_j$, so $Pq$ uniquely minimizes distance to $R(X_h)$ by Pythagoras. The finite-dimensional image is closed; injectivity in [F2] pulls $P(R(\sigma,u))$ back to a unique minimizer and the same identity gives best approximation. The scalar component stays in the stated H1_0 trial factor. [F1, F2, step 2.1, algebra] ∎
