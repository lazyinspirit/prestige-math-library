---
id: cex-bernoulli-needs-x-at-least-minus-one
kind: counterexample
title: "Bernoulli fails for $x < -1$: $x = -4$, $n = 3$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bernoulli-inequality, def-integer-power, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, lem-of-mult-neg]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
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
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 1 §1.2.5, Exercise 1.2.13, printed p. 35: Bernoulli is posed for 1+x > 0, with no proof supplied. The local supplier proves the endpoint x = -1 as well; the failure witness here is verified locally."
---

## Statement refuted

**Refuted claim:** the inequality $(1+x)^{n} \ge 1 + nx$ of
[[lem-bernoulli-inequality]] holds for every real $x$ and every natural $n$,
with powers as in [[def-integer-power]].

Witness: $x := -4$, $n := 3$. Then $(1+x)^{3} = (-3)^{3} = -27$ while
$1 + 3x = -11$, so $(1+x)^{3} < 1 + 3x$ and the inequality fails. Two boundary
remarks sharpen the failure: at $n = 1$ the two sides agree for every $x$, so a
failure needs $n \ge 2$; and at $x = -3$, $n = 3$ the two sides happen to agree
($-8 = -8$), so a witness must be chosen rather than assumed. The hypothesis
$x \ge -1$ of [[lem-bernoulli-inequality]] is therefore load-bearing.

## Facts & Assumptions

**Given:** The real number $x := -4$ and the natural number $n := 3$, with $3$ and $4$ also denoting the canonical naturals in $\mathbb{R}$.

[L1] Definition of powers ([[def-integer-power]]): $a^{0} = 1$ and $a^{j+1} = a^{j} a$ for every real $a$ and every natural $j$.

[L2] Multiplicative sign and positivity rules: $(-u)v = -(uv)$ and $(-u)(-v) = uv$ for all reals $u, v$ ([[lem-of-mult-neg]]); $1 > 0$ ([[cor-of-one-positive]]); and a product of two positive reals is positive ([[lem-of-sign-rules]]).

[L3] Adding a constant preserves the strict order: $x < y$ implies $x + c < y + c$ for all reals $x, y, c$ ([[lem-of-add-order]]).

[L4] Bernoulli's inequality ([[lem-bernoulli-inequality]]): for every real $x \ge -1$ and every natural $n$, $(1+x)^{n} \ge 1 + nx$.

## Counterexample

**Proof technique:** direct.

1.1 At the witness, $1 + x = 1 + (-4) = -3$ and $(-3)^{3} = (-3)^{2}\cdot(-3) = 9\cdot(-3) = -(9\cdot 3) = -27$ by the recursion clause of [L1] and the sign rules of [L2]; so $(1+x)^{3} = -27$. [L1, L2, algebra]

1.2 Also $3x = 3\cdot(-4) = -(3\cdot 4) = -12$ by [L2], and $1 + 3x = 1 + (-12) = -11$ by field arithmetic; so the right-hand side of the claimed inequality is $-11$ at the witness. [L2, algebra]

1.3 Boundary evaluations: at $n = 0$ both sides are $1$; at $n = 1$ the recursion clause gives $(1+x)^{1} = (1+x)^{0}(1+x) = 1 + x = 1 + 1\cdot x$ for every $x$; at $x = -3$, $n = 3$ one gets $(1+x)^{3} = (-2)^{3} = -8$ and $1 + 3x = 1 + (-9) = -8$, so the two sides agree there too, at a point with $x < -1$; and at $x = -1$ with $n \ge 2$ the left side is $0$ while $1 + nx = 1 - n < 0$. [L1, L2, algebra]

2.1 The comparison, using the evaluations of step 1.1 and step 1.2: $0 < 16$, because $1 > 0$ gives $0 < 1$, repeatedly adding constants by [L3] gives $0 < 4$, and $4\cdot 4 = 16 > 0$ is a product of positives by [L2]; adding $c = -27$ to $0 < 16$ by [L3] gives $-27 < 16 + (-27) = -11$. [step 1.1, step 1.2, L2, L3, algebra]

3.1 Hence $(1+x)^{3} = -27 < -11 = 1 + 3x$ at $x = -4$, $n = 3$, so the conclusion of the inequality fails there; since $-4 < -1$, the hypothesis $x \ge -1$ of [L4] cannot be dropped, and the evaluations of step 1.3 show that equality holds at $n = 0$, at $n = 1$, and at the example $x = -3$, $n = 3$; these evaluations do not classify all cases with $x < -1$. [step 1.1, step 1.2, step 1.3, step 2.1, L4] ∎
