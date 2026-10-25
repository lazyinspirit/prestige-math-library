---
id: cor-freudenthal-recursion-terminates-from-the-highest-weight
kind: corollary
title: Freudenthal recursion terminates from the highest weight
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
deps: [def-axiom-of-choice, lem-highest-weight-modules-have-weights-below-the-top-weight, lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight, prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional, thm-freudenthal-weight-multiplicity-recursion, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-height-of-a-root-and-highest-root, def-finite-weyl-root-system-lattice-and-chamber-conventions, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§11.3, printed pp. 80--82 (remark after Theorem 11.7: Freudenthal's formula provides an effective method for calculating multiplicities, illustrated by an A2 table)"
    - title: "R. Borcherds, Berkeley Math 261 course notes, page on the Freudenthal multiplicity formula"
      url: "https://math.berkeley.edu/~reb/courses/261/47.pdf"
      locator: "printed p. 146 (worked E8 example and the remark that the formula gives no information on the extremal Weyl orbit)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\lambda\in\Lambda^+$.

(i) $m_\lambda(\lambda)=1$, and $m_\lambda(\nu)=0$ whenever
$\nu\not\le\lambda$, that is, whenever $\lambda-\nu$ is not a nonnegative
integral combination of the simple roots
([[prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional]],
[[lem-highest-weight-modules-have-weights-below-the-top-weight]]).

(ii) If $\mu$ is a weight of $L(\lambda)$ with $\mu\ne\lambda$, then
$(\mu+\rho,\mu+\rho)<(\lambda+\rho,\lambda+\rho)$
([[lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight]]), so
[[thm-freudenthal-weight-multiplicity-recursion]] solves for
$m_\lambda(\mu)$ from the multiplicities $m_\lambda(\mu+j\alpha)$, $j\ge1$,
of strictly higher weights; since
$\operatorname{ht}(\lambda-(\mu+j\alpha))<\operatorname{ht}(\lambda-\mu)$
and $L(\lambda)$ is finite-dimensional, iterating the recursion from the top
weight and increasing $\operatorname{ht}(\lambda-\mu)$ determines
$m_\lambda(\mu)$ for every weight $\mu\ne\lambda$ from the value
$m_\lambda(\lambda)=1$ of (i). More explicitly, for candidates
$\nu\in\lambda-Q_+$ put $D(\nu)=(\lambda+\rho,\lambda+\rho)-(\nu+\rho,\nu+\rho)$.
For $\nu\ne\lambda$ with $D(\nu)\le0$ set $m_\lambda(\nu)=0$, as (ii)'s
strict inequality excludes such a weight. For $D(\nu)>0$ use the recursion,
including candidates that turn out to have multiplicity zero. A requested
candidate at height $h$ requires only the finitely many candidates of height
at most $h$.

(iii) At $\mu=\lambda$ the recursion reads $0=0$ and determines nothing, so
(i) is used as its base case; if $\nu\not\le\lambda$ then
$\nu+j\alpha\not\le\lambda$ for every $\alpha\in\Phi^+$ and $j\ge1$, and both
sides of the recursion vanish by (i).

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, the finite-dimensional simple module $L(\lambda)$, its multiplicities $m_\lambda(\nu)$, the positive system $\Phi^+$ with heights, and the Weyl vector $\rho$.

[A1] The Axiom of Choice is assumed; it is inherited from the published highest-weight and multiplicity suppliers of [F1] and [F2] ([[def-axiom-of-choice]]).

[F1] $L(\lambda)$ is a finite-dimensional irreducible highest weight module of highest weight $\lambda$, its $\lambda$-weight space is one-dimensional, and every weight $\nu$ of $L(\lambda)$ satisfies $\nu\le\lambda$, that is, $\lambda-\nu\in Q_+$; consequently $m_\lambda(\nu)=0$ for $\nu\not\le\lambda$ ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]]).

[F2] For every weight $\mu\ne\lambda$ of $L(\lambda)$ the recursion
coefficient $(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)$ is strictly
positive ([[lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight]]),
and the recursion of [[thm-freudenthal-weight-multiplicity-recursion]] reads
$$\bigl((\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)\bigr)m_\lambda(\mu)=2\sum_{\alpha\in\Phi^+}\sum_{j\ge1}(\mu+j\alpha,\alpha)m_\lambda(\mu+j\alpha).$$

[F3] Extend root height to $Q$ by $\operatorname{ht}(\sum_i n_i\alpha_i)=\sum_i n_i$. It is additive and positive on $Q_+\setminus\{0\}$, so $\operatorname{ht}(\lambda-(\mu+j\alpha))=\operatorname{ht}(\lambda-\mu)-j\operatorname{ht}(\alpha)<\operatorname{ht}(\lambda-\mu)$ for $j\ge1$ and $\alpha\in\Phi^+$, while adding $j\alpha$ to $\nu$ can only increase it in the root order: if $\nu+j\alpha\le\lambda$ then $\lambda-\nu=(\lambda-\nu-j\alpha)+j\alpha\in Q_+$ ([[def-height-of-a-root-and-highest-root]], [[def-finite-weyl-root-system-lattice-and-chamber-conventions]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the $\lambda$-weight space of $L(\lambda)$ is one-dimensional and every weight of $L(\lambda)$ lies below $\lambda$, so $m_\lambda(\lambda)=1$ and $m_\lambda(\nu)=0$ for every $\nu\not\le\lambda$, which is (i). [F1, algebra, A1]

2.1 For every candidate $\nu\in\lambda-Q_+$ put $h=\operatorname{ht}(\lambda-\nu)$. We determine its actual multiplicity by induction on $h$. At height zero the only candidate is $\lambda$, whose multiplicity is $1$. At positive height, if $D(\nu)\le0$, [F2] excludes $\nu$ from the weight set, so its multiplicity is zero. If $D(\nu)>0$, the recursion, valid for every $\nu$, determines its multiplicity by division by $D(\nu)$. Each term $m_\lambda(\nu+j\alpha)$ either vanishes because $\nu+j\alpha\not\le\lambda$ by [F1], or is a candidate of smaller nonnegative height by [F3] and hence already determined. In the latter case $j\operatorname{ht}(\alpha)\le h$, so only finitely many terms are required. There are finitely many tuples of nonnegative simple-root coefficients of sum at most $h$; thus computing any requested candidate uses finitely many induction stages and candidates. Every actual weight is among these candidates, proving (ii). [F1, F2, F3, step 1.1, algebra]

3.1 For (iii), at $\mu=\lambda$ the coefficient in [F2] vanishes because $\mu=\lambda$, while $\lambda+j\alpha\not\le\lambda$ for $j\ge1$ and $\alpha\in\Phi^+$ since $-j\alpha\notin Q_+$, so every multiplicity on the right vanishes by (i) and the recursion reads $0=0$; for $\nu\not\le\lambda$ and $j\ge1$ one has $\nu+j\alpha\not\le\lambda$ by [F3], so both sides of the recursion vanish by (i). [F1, F2, F3, step 1.1, step 2.1, algebra] ∎ 