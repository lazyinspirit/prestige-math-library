---
id: cex-am-gm-needs-nonnegative-terms
kind: counterexample
title: "AM-GM fails for negative entries: $(-1,-4)$ has geometric mean $2$ and arithmetic mean $-5/2$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-am-gm, thm-of-square-roots, def-rational-power, cor-of-one-positive, lem-of-sign-rules, lem-of-square-positive, lem-of-mult-neg, fs-negative-has-square-root, thm-nth-roots-exist, lem-of-add-order, lem-of-zero-mult, def-ordered-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (author-hosted complete lecture notes, University of California at Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "Chapter 2 §2.4, Proposition 2.8 and the two-term geometric-mean paragraph whose hypotheses are x, y ≥ 0, printed pp. 26-27"
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 1 §1.2.5, Exercise 1.2.7, stated for two positive real numbers, printed p. 34"
---

## Statement refuted

**Refuted claim:** the conclusion $\sqrt{ab} \le \dfrac{a+b}{2}$ of the
two-term arithmetic-geometric mean inequality holds for arbitrary real
$a, b$, with the square root as in [[thm-of-square-roots]] and the rational
power as in [[def-rational-power]].

Witness: $a := -1$, $b := -4$. The product is $ab = 4$, so the geometric mean
is $4^{1/2} = 2$, while the arithmetic mean is $(-1-4)/2 = -5/2$; thus
$G = 2 > -5/2 = A$ and the inequality fails. The failure is not an accident of
the witness: for any two negative entries $a, b < 0$ the product is positive, so
$G > 0$, while $A < 0$, giving $G > A$. A second failure mode is non-existence:
for $a := -1$, $b := 1$ the product is $-1$, which has no real square root
([[fs-negative-has-square-root]]), so $G$ is not defined at all. By contrast the
equivalent squared form $ab \le A^{2}$ of [[thm-am-gm]] survives for all real
$a, b$, since $A^{2} - ab = (a-b)^{2}/4 \ge 0$; the hypothesis $a, b \ge 0$ is
spent exactly on passing from that squared form to the geometric-mean form,
which needs a nonnegative arithmetic mean and a real geometric mean.

## Facts & Assumptions

**Given:** The real numbers $a := -1$, $b := -4$ for the witness; general real numbers $a, b$ in the systematic discussion, with $A := (a+b)/2$ and $G := (ab)^{1/2}$ whenever the latter is defined.

[L1] Arithmetic-geometric mean ([[thm-am-gm]]): for two nonnegative entries $u, v$ one has $(uv)^{1/2} \le (u+v)/2$, equivalently $uv \le \big((u+v)/2\big)^{2}$, with equality exactly when $u = v$.

[L2] Roots and rational powers ([[thm-nth-roots-exist]], [[thm-of-square-roots]], [[def-rational-power]]): for $c \ge 0$ the symbol $c^{1/2} = \sqrt{c}$ is the unique $s \ge 0$ with $s^{2} = c$, and $s > 0$ when $c > 0$; in particular $4^{1/2} = 2$, because $2 \ge 0$ and $2\cdot 2 = 4$.

[L3] Sign rules ([[lem-of-sign-rules]]): a product of two negative reals is positive and a product of two positive reals is positive; $x < 0$ holds exactly when $-x > 0$; and multiplication by a positive factor preserves the strict order in both directions.

[L4] Order arithmetic ([[lem-of-add-order]], [[def-ordered-field]]): adding a constant preserves the strict order, adding two strict inequalities preserves them, and the order is total and transitive.

[L5] Squares and negatives ([[lem-of-square-positive]], [[lem-of-zero-mult]], [[lem-of-mult-neg]]): $u^{2} > 0$ for every $u \ne 0$, while $0^{2} = 0\cdot 0 = 0$, so $u^{2} \ge 0$ for every real $u$; and $(-u)v = -(uv)$, $(-u)(-v) = uv$.

[L6] Positivity of the identity ([[cor-of-one-positive]]): $1 > 0$, hence $2 = 1+1 > 0$, and by repeated addition every nonzero numeral is positive.

[L7] Negatives have no real square root ([[fs-negative-has-square-root]]): there is no real $y$ with $y^{2} = -1$; the existence theorem [[thm-of-square-roots]] produces square roots only for nonnegative arguments.

## Counterexample

**Proof technique:** direct.

1.1 At the witness: $ab = (-1)(-4) = 4$ by [L5], so $G = 4^{1/2} = 2$ by [L2]; the arithmetic mean is $A = (-1 + (-4))/2 = -5/2$; and $2 > -5/2$, because $-5/2 < 0$ by [L3] (using $2(-5/2) = -5 < 0$ and the equivalence $u < 0 \iff 2u < 0$, where $2, 5 > 0$ by [L6] and [L4]) while $2 > 0$ by [L6], so transitivity in [L4] gives $G = 2 > -5/2 = A$; thus the claimed inequality fails at $(-1,-4)$. [L2, L3, L4, L5, L6, algebra]

1.2 For arbitrary negative entries $a, b < 0$: the product is positive, $ab > 0$, by [L3]; the root $G = (ab)^{1/2}$ is then defined and positive by [L2]; and $a+b < 0$ by adding the inequalities $a < 0$ and $b < 0$ in [L4], so $2A = a+b < 0$, while $A \ge 0$ would give $2A \ge 0$ because a product of nonnegatives is nonnegative by [L3] and [L5]; hence $A < 0$, and transitivity gives $G > A$; so the root form fails for every pair of negative entries, not only at the displayed witness. [L2, L3, L4, L5, algebra]

1.3 The second failure mode: at $a = -1$, $b = 1$ the product is $ab = -1$, so $G = (-1)^{1/2}$ would be a real square root of $-1$, which does not exist by [L7]; the conclusion of the claimed inequality cannot even be stated there. [L7, algebra]

1.4 The squared form survives for all real $a, b$: with $A = (a+b)/2$ one has $A^{2} - ab = \big((a+b)^{2} - 4ab\big)/4 = (a-b)^{2}/4 = \big((a-b)/2\big)^{2} \ge 0$ by [L5]; hence $ab \le A^{2}$ for arbitrary reals, the two-entry squared form of [L1] without any sign hypothesis. [L1, L5, algebra]

2.1 Collecting: the root form of the two-term arithmetic-geometric mean inequality fails outright at the witness (step 1.1, where $G = 2 > -5/2 = A$), fails systematically for every pair of negative entries (step 1.2), and can fail by undefinedness (step 1.3); what the hypothesis $a, b \ge 0$ buys is precisely the passage from the squared form $ab \le A^{2}$, which survives without it (step 1.4), to the root form $G \le A$, which needs $G$ to exist and $A$ to be nonnegative; the hypothesis is therefore load-bearing and cannot be dropped. [step 1.1, step 1.2, step 1.3, step 1.4, L1, L2] ∎
