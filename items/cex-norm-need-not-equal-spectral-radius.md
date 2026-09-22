---
id: cex-norm-need-not-equal-spectral-radius
kind: counterexample
title: Norm need not equal spectral radius
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectral-radius, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-axiom-of-choice, ex-spectrum-in-a-finite-dimensional-matrix-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.2, printed p. 222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In $M_2(\mathbb C)$ with
the Euclidean operator norm the matrix

$$E_{12} = \begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix}$$

has operator norm $\|E_{12}\| = 1$ and spectral radius $r(E_{12}) = 0$
([[def-spectral-radius]]). So the norm of an element of a unital Banach algebra
need not equal its spectral radius.

## Facts & Assumptions

**Given:** The Axiom of Choice, the algebra $M_2(\mathbb C)$ with the Euclidean operator norm, and the matrix $E_{12}$ acting on column vectors $(x,y) \in \mathbb C^2$.

[L1] In $M_2(\mathbb C)$ the spectrum of a matrix $A$ is $\{\lambda : \det(\lambda I - A) = 0\}$ and the algebra is a unital Banach algebra with the operator norm ([[ex-spectrum-in-a-finite-dimensional-matrix-algebra]]).

[L2] The spectral radius is $r(a) = \max\{|z| : z \in \sigma(a)\}$, and it is defined under the Axiom of Choice ([[def-spectral-radius]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Counterexample

**Proof technique:** direct.

1.1 $E_{12}(x,y) = (y,0)$, so $\|E_{12}(x,y)\| = |y| \le \|(x,y)\|$ for every $(x,y) \in \mathbb C^2$ (operator norm on the Euclidean plane), with equality at $(0,1)$; hence $\|E_{12}\| = 1$. [algebra]

2.1 $E_{12}^2 = 0$, and $\det(\lambda I - E_{12}) = \lambda^2$, whose only zero is $\lambda = 0$; by [L1] the spectrum is $\sigma(E_{12}) = \{0\}$. [step 1.1, L1, algebra]

3.1 By [L2] the spectral radius is $r(E_{12}) = \max\{|z| : z \in \{0\}\} = 0 < 1 = \|E_{12}\|$; hence the two quantities differ for this element. [step 1.1, step 2.1, L2, algebra] ∎

## Remarks

- **The witness is a nonzero nilpotent of minimal size.** $E_{12}$ is the smallest nonzero nilpotent: its square vanishes and its norm is one, so the gap between norm and spectral radius is already visible on the unit sphere of the matrix algebra.

- **The spectral radius formula records the same gap asymptotically.** $\|E_{12}^n\|^{1/n}$ equals $1$ for $n = 1$ and $0$ for $n \ge 2$, and its limit is $0 = r(E_{12})$, in agreement with [[thm-spectral-radius-formula]].
