---
id: thm-boundary-of-spectrum-lies-in-approximate-point-spectrum
kind: theorem
title: Boundary of spectrum lies in approximate point spectrum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-approximate-point-and-compression-spectrum, thm-invertible-group-is-open-and-inversion-is-continuous, def-countable-choice, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-bounded-below-operator, thm-spectrum-is-nonempty-compact-and-norm-bounded]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.1, printed pp. 219–221"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $X$ be a
nonzero complex Banach space and let $T \in \mathcal B(X)$. Then every boundary
point of the spectrum lies in the approximate point spectrum:

$$\partial\sigma(T) \;\subseteq\; \sigma_{ap}(T)$$

(spectrum as in [[def-spectrum-and-resolvent-set-in-a-banach-algebra]],
approximate point spectrum as in
[[def-approximate-point-and-compression-spectrum]]). The boundary is taken in
$\mathbb C$.

## Facts & Assumptions

**Given:** An assumed Axiom of Countable Choice, a nonzero complex Banach space $X$, a bounded $T \in \mathcal B(X)$ and a point $\lambda \in \partial\sigma(T)$.

[L1] $\sigma(T)$ is closed, so $\lambda \in \sigma(T)$; and every neighbourhood of $\lambda$ meets the resolvent set $\rho(T) = \mathbb C\setminus\sigma(T)$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[thm-spectrum-is-nonempty-compact-and-norm-bounded]]).

[L2] For $z \in \rho(T)$ the resolvent $R(z) := (z-T)^{-1}$ is bounded, and $1 = (z-T)R(z) = R(z)(z-T)$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L3] The invertible group of $\mathcal B(X)$ is open: if $\|T - \lambda\| < 1/\|R\|$ for some invertible operator (here $T-\lambda_n$) with inverse $R$, then $T-\lambda$ is invertible ([[thm-invertible-group-is-open-and-inversion-is-continuous]]).

[L4] $\lambda \in \sigma_{ap}(T)$ exactly when $T-\lambda$ is not bounded below; a bounded-below operator satisfies $\|(T-\lambda)x\| \ge c\|x\|$ for all $x$ and some $c > 0$ ([[def-bounded-below-operator]], [[def-approximate-point-and-compression-spectrum]]).

[L5] The Axiom of Countable Choice is the standing hypothesis, used to select the unit vectors below ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Since $\lambda$ is a boundary point, for each $n \ge 1$ the disc $\{|z-\lambda| < 1/n\}$ meets $\rho(T)$; Countable Choice selects $\lambda_n \in \rho(T)$ with $|\lambda_n - \lambda| < 1/n$ for every $n$; in particular $\lambda_n \to \lambda$. [L1, L5, algebra]

1.2 First suppose that the resolvent norms are bounded along this sequence, say $\|R(\lambda_n)\| \le M$ for all $n$, and suppose $M \ge 1$. For $n$ with $|\lambda_n-\lambda| < 1/(2M)$ the operator $T - \lambda = (T - \lambda_n) + (\lambda_n-\lambda) = (T-\lambda_n)\bigl(1 - (\lambda_n-\lambda)R(\lambda_n)\bigr)$ is a product of invertible factors: the displayed identity holds because $(T-\lambda_n)R(\lambda_n) = -1$ by [L2], and the second factor is invertible by the Neumann series since $\|(\lambda_n-\lambda)R(\lambda_n)\| \le 1/2 < 1$. Hence $T-\lambda$ would be invertible and $\lambda \in \rho(T)$, contradicting $\lambda \in \sigma(T)$. [L2, L3, L1, algebra]

2.1 Consequently the norms $\|R(\lambda_n)\|$ are unbounded; passing to a subsequence, which we relabel, we may assume $\|R(\lambda_n)\| \to \infty$. [step 1.1, step 1.2, algebra]

3.1 For each $n$ the set of unit vectors $x$ with $\|R(\lambda_n)x\| \ge \tfrac12\|R(\lambda_n)\|$ is nonempty, because the operator norm is the supremum of $\|R(\lambda_n)x\|$ over the unit sphere; Countable Choice selects such a unit vector $x_n$ for every $n$, and we set $y_n := R(\lambda_n)x_n/\|R(\lambda_n)x_n\|$, a unit vector. [step 2.1, L5, algebra]

4.1 Then $\|(T-\lambda_n)y_n\| = \|x_n\|/\|R(\lambda_n)x_n\| \le 2/\|R(\lambda_n)\| \to 0$ and $|\lambda_n - \lambda|\to 0$, so $\|(T-\lambda)y_n\| \le \|(T-\lambda_n)y_n\| + |\lambda_n-\lambda| \to 0$ along unit vectors. [step 3.1, L2, algebra]

5.1 By [L4] such a sequence rules out $T-\lambda$ being bounded below with any constant $c>0$; hence $\lambda \in \sigma_{ap}(T)$. Since $\lambda \in \partial\sigma(T)$ was arbitrary, $\partial\sigma(T) \subseteq \sigma_{ap}(T)$. [step 4.1, L4] ∎
