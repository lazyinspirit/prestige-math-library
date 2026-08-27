---
id: thm-non-negative-square-root-exists-and-is-unique
kind: theorem
title: "A non-negative operator has a unique non-negative square root"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-non-negative-operator-characterisations, thm-of-square-roots]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional real or complex inner product space and let
$T:V\to V$ be non-negative. Then there exists a unique non-negative operator
$R:V\to V$ such that

$$R^2=T.$$

## Facts & Assumptions

**Given:** A finite-dimensional real or complex inner product space $V$ and a non-negative endomorphism $T:V\to V$.

[L1] A non-negative operator has an orthonormal eigenbasis with nonnegative eigenvalues ([[thm-non-negative-operator-characterisations]]).

[L2] Every nonnegative real number has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is an orthonormal basis $(e_1,\dots,e_n)$ of $V$ and numbers $\lambda_1,\dots,\lambda_n\ge0$ such that $Te_j=\lambda_j e_j$. By [L2], each $\lambda_j$ has a nonnegative square root. Define $R$ by $Re_j=\sqrt{\lambda_j}\,e_j$. Then $R^2e_j=\lambda_j e_j=Te_j$ for every $j$, so $R^2=T$; the same basis shows that $R$ is self-adjoint with nonnegative eigenvalues, hence non-negative by [L1]. [L1, L2, algebra]

2.1 Let $Q$ be another non-negative square root of $T$. Because $Q^2=T$, each eigenspace $E_\lambda(T)$ is $Q$-invariant. On $E_\lambda(T)$ one has $Q^2=\lambda I$, and [L1] applied to the non-negative operator $Q|_{E_\lambda(T)}$ shows that all its eigenvalues are nonnegative; by [L2], the only nonnegative number whose square is $\lambda$ is $\sqrt{\lambda}$, so $Q=\sqrt{\lambda}\,I$ on $E_\lambda(T)$. Thus $Q$ acts on every basis vector $e_j$ exactly as $R$ does, and therefore $Q=R$. [L1, L2, step 1.1] ∎
