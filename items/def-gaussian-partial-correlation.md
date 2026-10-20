---
id: def-gaussian-partial-correlation
kind: definition
title: "Gaussian partial correlation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-multivariate-normal-law
  - def-axiom-of-choice
justified_by:
  - thm-gaussian-zero-partial-correlation-is-conditional-independence
proof_strategy: definition
axiom_use: "Assume AC as in the supplied multivariate-normal law. The displayed algebraic definition uses no additional choice."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.2.2"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Lauritzen, Graphical Models lecture notes, §4.1.3, Proposition 4.2, pp. 97–98"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
verification:
  precheck: n/a
---

## Definition

Assume AC. Let $X=(X_1,\ldots,X_p)$ have a nondegenerate multivariate-normal
law with mean $\mu$ and positive-definite covariance matrix $\Sigma$. For
distinct indices $i,j$ and $S\subseteq\{1,\ldots,p\}\setminus\{i,j\}$, define
the conditional covariance block
$$
K_{ij\mid S}=\Sigma_{\{i,j\},\{i,j\}}-\Sigma_{\{i,j\},S}\Sigma_{S,S}^{-1}\Sigma_{S,\{i,j\}},
$$
with $K_{ij\mid\varnothing}=\Sigma_{\{i,j\},\{i,j\}}$. Whenever the diagonal
entries of this block are positive, the **partial correlation** is
$$
\rho_{ij\mid S}=\frac{(K_{ij\mid S})_{12}}{\sqrt{(K_{ij\mid S})_{11}(K_{ij\mid S})_{22}}}.
$$
The nondegenerate Gaussian case makes the conditioning covariance block
invertible; the following theorem proves that $K_{ij\mid S}$ is positive
definite, so this definition applies to every such $i,j,S$.

## Definition references

[[def-multivariate-normal-law]]

[[def-axiom-of-choice]]
