---
id: thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules
kind: theorem
title: Integrability criterion for simple highest weight kac moody modules
status: draft
origin: pipeline
deps: [lem-dominance-is-necessary-for-an-integrable-highest-weight-module, lem-simple-root-power-relations-generate-the-integrable-quotient, thm-kac-moody-verma-module-has-a-unique-simple-quotient]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

For every finite GCM over $\mathbb C$ and every $\lambda\in\mathfrak h^*$, the simple highest-weight module $L_A(\lambda)$ is integrable if and only if $\lambda\in P^+$. Symmetrizability is not required.

## Facts & Assumptions

**Given:** The finite GCM and weight $\lambda$.

[F1] Every nonzero integrable highest-weight module has dominant integral highest weight ([[lem-dominance-is-necessary-for-an-integrable-highest-weight-module]]).

[F2] For dominant $\lambda$, the quotient of the Verma module by $N=\sum_i U(\mathfrak g)f_i^{\lambda(h_i)+1}v$ is nonzero, highest weight and integrable ([[lem-simple-root-power-relations-generate-the-integrable-quotient]]).

[F3] The Verma module has a unique maximal proper submodule $N_\lambda$, containing every proper submodule, and $L_A(\lambda)=M_A(\lambda)/N_\lambda$ is nonzero highest weight ([[thm-kac-moody-verma-module-has-a-unique-simple-quotient]]).

## Proof

1.1 If $L_A(\lambda)$ is integrable, its nonzero highest vector is supplied by F3, so F1 gives $\lambda\in P^+$. This implication excludes no boundary label: zero labels are permitted in $P^+$. [F1, F3, given]

1.2 Conversely let $\lambda\in P^+$. F2 makes $N$ proper, so $N\subseteq N_\lambda$ by F3. Consequently the quotient map factors as a surjection $M_A(\lambda)/N\to L_A(\lambda)$. If a simple generator has a power killing a vector upstairs, the same power kills its image. Every vector downstairs has a preimage, so both $e_i$ and $f_i$ act locally nilpotently on $L_A(\lambda)$. [F2, F3, given]

2.1 The quotient also retains a weight decomposition. To see this directly, a submodule of a weight module contains every weight component of each of its elements: for finitely many distinct weights choose a Cartan element separating them and apply its Lagrange interpolation polynomials. Existence follows because finitely many nonzero linear functionals cannot vanish everywhere over the infinite field $\mathbb C$; explicitly their evaluations on $\sum_{a=1}^d t^{a-1}h_a$ in a finite Cartan basis exclude only finitely many $t$. The quotient is therefore the direct sum of quotient weight spaces. Applied to the kernel in 1.2, this supplies the remaining integrability condition. With both nilpotences established there, sufficiency follows. All arguments permit $N=0$, zero labels and one-dimensional quotients. The simple quotient itself is never zero by F3. The empty interpolation product is $1$ when only one weight occurs. No choice principle or symmetrizer is used in either direction. [F2, F3, step 1.2] ∎
