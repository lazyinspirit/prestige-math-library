---
id: cex-quotient-rule-needs-a-nonzero-limit
kind: counterexample
title: "The quotient rule needs a nonzero limit in the denominator: $1\\big/(k+1)^{-1} = k+1$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-the-reciprocal-of-k-plus-one-is-null, lem-reciprocal-of-null-diverges, def-divergence-to-infinity, lem-convergent-implies-bounded, def-sequence, def-real-limit, def-field, def-ordered-field, def-real-order, thm-algebra-of-limits]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§3.4, the paragraph after Theorem 3.26 (printed pp. 46-47): the algebra of limits and its cautions; the quotient hypothesis is the one isolated here"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2 Exercise 2.2.6 (printed p. 71): for x_n = 1/n^2 and y_n = 1/n, the quotient w_n = y_n/x_n is the exact witness that Proposition 2.2.5 does not apply"
---

## Statement refuted

**Refuted claim:** if $x_k \to x$ and $y_k \to y$ and $x_k \ne 0$ for every
$k$, then $y_k/x_k$ converges.

The witnesses are $x_k := (k+1)^{-1}$ and $y_k := 1$: both converge — to $0$ and
to $1$ respectively — and every $x_k$ is nonzero, but $y_k/x_k = k+1$ diverges
to $+\infty$. The quotient clause of [[thm-algebra-of-limits]] requires the
limit of the denominator to be nonzero, and this is the extremal failure of
exactly that hypothesis. It also instantiates the reciprocal bridge of
[[lem-reciprocal-of-null-diverges]].

## Facts & Assumptions

**Given:** The sequences $x_k := (k+1)^{-1}$ and $y_k := 1$, where $k+1 = \sigma(k)$ is read in $\mathbb{R}$ through the canonical-natural embedding ([[def-sequence]]).

[F1] $(x_k)$ converges to $0$ and every $x_k$ is positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F2] Reciprocal bridge: for a sequence $(z_k)$ with $z_k > 0$ for every $k$, $(z_k)$ converges to $0$ if and only if $(1/z_k)$ diverges to $+\infty$ ([[lem-reciprocal-of-null-diverges]]).

[F3] Divergence to $+\infty$: $z_k \to +\infty$ means that for every real $M$ there is $K$ with $z_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[F4] Field arithmetic: every nonzero $u$ has a multiplicative inverse with $u \cdot u^{-1} = 1$ and $(u^{-1})^{-1} = u$, multiplication is commutative, and $u \cdot 1 = u$ ([[def-field]]).

[F5] A sequence diverging to $+\infty$ is unbounded, and an unbounded sequence is not convergent, the latter being the contrapositive of "convergent implies bounded" ([[lem-convergent-implies-bounded]], [[def-divergence-to-infinity]], [[def-sequence]]).

[F6] Quotient clause of the algebra of limits: if $(p_k)$ converges to $p$, $(q_k)$ converges to $q$, and $q \ne 0$ with $q_k \ne 0$ for every $k$, then $p_k/q_k$ converges to $p/q$ ([[thm-algebra-of-limits]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence $(x_k)$ is positive termwise and converges to $0$ by [F1]; the constant sequence $(y_k) = (1)$ has every term equal to $1$. [given, F1]

2.1 By the forward direction of the reciprocal bridge [F2], applied to the positive null sequence $(x_k)$ of step 1.1, the sequence $(1/x_k)$ diverges to $+\infty$ in the sense of [F3]. [step 1.1, F2, F3]

2.2 At every index the quotient equals the reciprocal: $y_k/x_k = 1 \cdot x_k^{-1} = x_k^{-1} = \big((k+1)^{-1}\big)^{-1} = k+1 = 1/x_k$, using $u \cdot 1 = u$ and the involution $(u^{-1})^{-1} = u$ of [F4] at the nonzero element $u = k+1$. [step 1.1, F4]

3.1 Therefore $(y_k/x_k) = (1/x_k)$ diverges to $+\infty$ by step 2.1, so by [F5] the quotient is unbounded and not convergent: the refuted claim fails. The quotient clause [F6] is not contradicted — its denominator-limit hypothesis $q \ne 0$ fails here, since the limit of the denominator is $x = 0$ by step 1.1, while its other hypotheses ($x_k \ne 0$ termwise) do hold. [step 1.1, step 2.1, step 2.2, F5, F6] ∎
