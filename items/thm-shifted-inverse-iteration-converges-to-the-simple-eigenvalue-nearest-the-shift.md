---
id: thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift
kind: theorem
title: "If $\\mu$ is not an eigenvalue and one simple eigenvalue is uniquely nearest to $\\mu$, shifted inverse iteration converges to its eigendirection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-and-shifted-inverse-iteration,
       thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Let $A$ be diagonalisable with eigenpairs $(\lambda_i,v_i)$, let
$\mu\notin\{\lambda_1,\dots,\lambda_n\}$, and suppose one simple eigenvalue
$\lambda_j$ satisfies

$$ |\lambda_j-\mu|<|\lambda_i-\mu| \qquad(i\neq j). $$

If the start vector has nonzero $v_j$-component, then shifted inverse iteration
with shift $\mu$ converges projectively to the eigendirection of $v_j$.

## Facts & Assumptions

**Given:** A diagonalisable matrix $A$, a shift $\mu$ not equal to any eigenvalue, and a start vector with nonzero $v_j$-component.

[L1] Shifted inverse iteration is power iteration for $(A-\mu I)^{-1}$ ([[def-inverse-and-shifted-inverse-iteration]]).

[L2] Power iteration converges projectively under a simple strictly dominant eigenvalue and a nonzero component in its eigendirection ([[thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]]).

## Proof

**Proof technique:** direct.

1.1 The eigenvectors of $(A-\mu I)^{-1}$ are the same $v_i$, and the corresponding eigenvalues are $(\lambda_i-\mu)^{-1}$. The hypothesis $|\lambda_j-\mu|<|\lambda_i-\mu|$ means $$ \left|\frac1{\lambda_j-\mu}\right| > \left|\frac1{\lambda_i-\mu}\right| \qquad(i\neq j). $$ [given, algebra]

2.1 Therefore $(A-\mu I)^{-1}$ has a simple eigenvalue of strictly largest modulus in the eigendirection $v_j$. The start vector has nonzero $v_j$-component by hypothesis, so [L2] applies. [L2, step 1.1]

3.1 Since [L1] identifies shifted inverse iteration with that power iteration, the iterates converge projectively to the eigendirection of $v_j$. [L1, step 2.1] ∎