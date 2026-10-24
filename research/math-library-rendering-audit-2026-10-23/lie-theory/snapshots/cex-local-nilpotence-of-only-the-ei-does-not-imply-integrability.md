---
id: cex-local-nilpotence-of-only-the-ei-does-not-imply-integrability
kind: counterexample
title: Local nilpotence of only the ei does not imply integrability
status: published
origin: pipeline
deps: [cex-a-kac-moody-verma-module-is-not-integrable-in-general, thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
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

## Statement refuted

False claim: for a Kac–Moody weight module, local nilpotence of every simple raising operator $e_i$ implies integrability.

For any finite GCM with at least one simple index, $M_A(\lambda)$ has every $e_i$ locally nilpotent, but no $f_i$ is locally nilpotent on its highest vector. In particular $A=[2]$, $\lambda=0$ gives a weight-module counterexample even at dominant integral highest weight.

## Facts & Assumptions

**Given:** The Verma module for a finite GCM with at least one simple index.

[F1] Every lowering power $f_i^Nv_\lambda$ is nonzero, and the Verma module is not integrable ([[cex-a-kac-moody-verma-module-is-not-integrable-in-general]]).

[F2] The Verma module is a weight module with support in $\lambda-Q^+$ ([[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]]).

## Counterexample

1.1 Let $v$ have weight $\lambda-\beta$ with $\beta=\sum_j b_j\alpha_j\in Q^+$. Applying $e_i^Nv$ gives a vector of weight $\lambda-\beta+N\alpha_i$. For $N=b_i+1$, its difference below $\lambda$ has $i$-coordinate $-1$, so it is not in $Q^+$ by independence of the simple roots. F2 implies that weight space is zero, hence $e_i^{b_i+1}v=0$. Every vector has finitely many weight components; taking one plus the maximum of their $i$-coefficients gives an exponent killing all components. For the zero vector take exponent one. Thus every $e_i$ is locally nilpotent on the entire module. [F2, given]

2.1 F1 supplies the same module's nonzero highest vector on which every power of $f_i$ is nonzero. It therefore fails integrability despite the verified raising condition. In the rank-one example at $\lambda=0$, the vector $f^kv_0$ has weight $-k\alpha$, so step 1.1 gives $e^{k+1}f^kv_0=0$, while $f^Nv_0\ne0$ for every $N$. For $k=0$ the raising bound is one; arbitrary finite sums use the maximum bound, not a global uniform bound. The simple index set must be nonempty for the failed lowering requirement to exist. This calculation is choice-free. [F1, F2, step 1.1] ∎
