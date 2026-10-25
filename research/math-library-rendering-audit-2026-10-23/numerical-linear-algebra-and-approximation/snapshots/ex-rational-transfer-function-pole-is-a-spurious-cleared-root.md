---
id: ex-rational-transfer-function-pole-is-a-spurious-cleared-root
kind: example
title: "A transfer-function pole becomes a spurious root after denominator clearing"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-rational-matrix-eigenproblem-and-pole-domain
  - prop-clearing-a-common-denominator-away-from-poles
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Timo Betcke, Nicholas J. Higham, Volker Mehrmann, Christian Schröder, and Françoise Tisseur, NLEVP: A Collection of Nonlinear Eigenvalue Problems, §§1 and 2.1"
      url: "https://discovery.ucl.ac.uk/id/eprint/1056500/2/nlevp.pdf"
---

## Example

The rational transfer matrix
$$R(\lambda)=\begin{bmatrix}(\lambda-1)^{-1}&0\\0&1\end{bmatrix}$$
has a pole at $\lambda=1$. Here a finite-dimensional state-space transfer matrix means a rational matrix of the form $C(\lambda I-A)^{-1}B+D$; the displayed $R$ has such a realization with $A=[1]$, $B=[1\ 0]$, $C=[1\ 0]^T$, and $D=\operatorname{diag}(0,1)$. It has no rational eigenpair on its domain, but clearing the common denominator yields a polynomial matrix singular at the excluded pole.

## Facts & Assumptions

**Given:** $R(\lambda)=\operatorname{diag}((\lambda-1)^{-1},1)$ with domain $\Omega=\mathbb C\setminus\{1\}$.

[F1] [[def-rational-matrix-eigenproblem-and-pole-domain]]: rational eigenpairs require a nonzero vector and a parameter in the pole-free domain; a reduced common denominator $q$ gives $N=qR$.

[F2] [[prop-clearing-a-common-denominator-away-from-poles]]: $R(\lambda)x=0$ is equivalent to $N(\lambda)x=0$ only for $\lambda\in\Omega$, and poles are excluded even if $N(\lambda)$ is singular.

## Verification

**Proof technique:** direct calculation.

1.1 A state-space realization is $A=[1]$, $B=[1\ 0]$, $C=[1\ 0]^T$, and $D=\operatorname{diag}(0,1)$, since $C(\lambda I-A)^{-1}B+D=\operatorname{diag}((\lambda-1)^{-1},1)$. Its reduced common denominator is $q(\lambda)=\lambda-1$, so $N(\lambda)=q(\lambda)R(\lambda)=\operatorname{diag}(1,\lambda-1)$. [given, F1, algebra]

2.1 For every $\lambda\ne1$, $\det R(\lambda)=1/(\lambda-1)\ne0$, so no nonzero vector lies in its kernel. At $\lambda=1$, $N(1)=\operatorname{diag}(1,0)$ has kernel $\operatorname{span}\{e_2\}$, but $R(1)$ is undefined because its first entry has a pole. By [F2], the cleared root at $1$ is spurious and must be filtered out. [given, F1, F2, step 1.1, algebra] ∎
