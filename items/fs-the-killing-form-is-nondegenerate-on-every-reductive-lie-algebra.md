---
id: fs-the-killing-form-is-nondegenerate-on-every-reductive-lie-algebra
kind: false-statement
title: The Killing form is nondegenerate on every reductive Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-killing-form-of-a-finite-dimensional-lie-algebra, thm-equivalent-characterizations-of-reductive-lie-algebras]
landmark: false
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Killing form"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§5.8, Definition 5.50 and Theorem 5.53, printed pp. 83–84"
---

## Statement refuted

The Killing form of every finite-dimensional reductive Lie algebra is
nondegenerate.

## Facts & Assumptions

**Given:** A characteristic-zero field and the one-dimensional abelian algebra used below.

[L1] A Lie algebra is reductive exactly when it is the direct sum of its center and a semisimple ideal ([[thm-equivalent-characterizations-of-reductive-lie-algebras]]).

[L2] The Killing form is the adjoint trace form ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

## Counterexample

**Proof technique:** a central reductive algebra.

1.1 Let $\mathfrak g=k$ be the one-dimensional abelian Lie algebra over a characteristic-zero field. It is reductive because $Z(\mathfrak g)=\mathfrak g$ and $[\mathfrak g,\mathfrak g]=0$, with the zero algebra semisimple. Thus $\mathfrak g$ is reductive by [L1]. [L1, given]

2.1 Every adjoint endomorphism is zero, so [L2] gives $K_{\mathfrak g}=0$. On the nonzero one-dimensional space this form has radical all of $\mathfrak g$ and is degenerate. More generally, every nonzero central element lies in the Killing radical. Thus the displayed $\mathfrak g$ is a complete finite witness. [L2, step 1.1, algebra] ∎