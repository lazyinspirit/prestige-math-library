---
id: thm-lindenstrauss-hecke-eigenfunction-measures-are-p-adically-recurrent
kind: theorem
title: "Hecke eigenfunction measures are p-adically recurrent"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps: [def-quantum-limit-of-hecke-maass-eigenfunctions, def-weight-zero-maass-form-on-gamma0n, def-hecke-operator-on-weight-zero-maass-forms, lem-hecke-tree-adjacency-eigenfunction-mass-growth, def-lindenstrauss-t-space, def-lindenstrauss-recurrence-along-t-leaves]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A."
---

## Statement

Let $p\nmid N$ be prime and let $\mu$ be a microlocal arithmetic quantum limit of joint Laplace and unramified Hecke eigenfunctions on $\Gamma_0(N)\backslash\mathbb H$. On the corresponding standard Hecke-tree space, $\mu$ is recurrent along the $(p+1)$-regular tree leaves in the sense of [[def-lindenstrauss-recurrence-along-t-leaves]]: in each positive-measure Borel set, almost every point returns to that set outside every compact subset of its tree leaf. In particular the weaker return condition $\int_E T_p^n1_E\,d\mu>0$ holds for some $n\ge1$ whenever $\mu(E)>0$, where $T_p$ averages over the $p+1$ neighbors. The substantive assertion is return outside every compact subset, rather than a return obtained by immediate backtracking.

## Statement references

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Lindenstrauss §8 proves the p-adic Hecke-recurrence conclusion using the Hecke-tree estimate and small-ball transfer. [Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

[L2] [[lem-hecke-tree-adjacency-eigenfunction-mass-growth]] proves the finite-tree estimate locally. The passage to quantum limits, including the positive Hecke-compatible microlocal realization and small-ball transfer and then the genuine leafwise recurrence conclusion, is still an explicit proof obligation. The weaker integral return condition alone cannot supply this conclusion: two-step backtracking already makes it hold for every nonzero positive measure.
