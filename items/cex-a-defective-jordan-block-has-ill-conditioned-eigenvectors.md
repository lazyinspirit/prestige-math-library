---
id: cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors
kind: counterexample
title: "A defective Jordan block shows that tiny perturbations can destroy an eigenvector picture even when eigenvalues barely move"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-eigenpair-residual-realises-the-minimum-norm-backward-error]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references: []
---

## Statement refuted

**Refuted claim:** if eigenvalues move only a little under perturbation, then
the eigenvectors stay well conditioned.

Let

$$ J= \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}, \qquad J_\varepsilon= \begin{bmatrix} 1 & 1\\ 0 & 1+\varepsilon \end{bmatrix} \qquad(\varepsilon\neq0). $$

Then the eigenvalues change only by $\varepsilon$, but an eigenbasis matrix for
$J_\varepsilon$ has condition number of order $|\varepsilon|^{-1}$.

## Facts & Assumptions

**Given:** The defective Jordan block $J$ and its perturbation $J_\varepsilon$.

[L1] Small residuals certify nearby exact eigenpairs only in backward-error terms ([[thm-eigenpair-residual-realises-the-minimum-norm-backward-error]]).

## Counterexample

**Proof technique:** direct.

1.1 The eigenvalues of $J_\varepsilon$ are $1$ and $1+\varepsilon$, so they differ from the repeated eigenvalue of $J$ by at most $|\varepsilon|$. An eigenvector for $1$ is $e_1$, and an eigenvector for $1+\varepsilon$ is $(1,\varepsilon)^T$. [algebra]

2.1 Hence an eigenbasis matrix is $$ X_\varepsilon= \begin{bmatrix} 1 & 1\\ 0 & \varepsilon \end{bmatrix}, \qquad X_\varepsilon^{-1}= \begin{bmatrix} 1 & -\varepsilon^{-1}\\ 0 & \varepsilon^{-1} \end{bmatrix}. $$ So $\|X_\varepsilon^{-1}\|_2$ is of order $|\varepsilon|^{-1}$, and therefore $\kappa_2(X_\varepsilon)$ is also of order $|\varepsilon|^{-1}$. [step 1.1, algebra]

3.1 As $\varepsilon\to0$, the eigenvalues of $J_\varepsilon$ coalesce gently, but the eigenvectors become nearly parallel and the eigenbasis becomes badly conditioned. This refutes the claim and illustrates the warning in [L1]. [L1, step 2.1] ∎