---
page: krylov-subspaces-arnoldi-and-gmres-examples
title: "Krylov Subspaces, Arnoldi and GMRES: Examples and Counterexamples"
status: draft
items: []
examples: [ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial,
           ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain,
           ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space,
           ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run,
           ex-gmres-on-a-small-nonsymmetric-system,
           cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning,
           ex-restarted-gmres-versus-full-gmres-on-the-same-system,
           ex-matrix-free-gmres-for-a-sparse-operator]
---

These examples keep the exact traps visible. Early stabilization is controlled
by the start vector's grade, not by the ambient matrix size; lucky Arnoldi
breakdown is exact invariance, not a finite-precision accident; and GMRES can
have monotone residuals without fast convergence on a nonnormal problem.
