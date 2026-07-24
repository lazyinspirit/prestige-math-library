---
id: thm-cauchy-ring
kind: theorem
title: "Cauchy sequences form a commutative ring"
status: published
origin: session
deps: [def-rational-cauchy-sequence, lem-cauchy-bounded, lem-rat-triangle, thm-rat-field, thm-rat-ordered-field]
aliases: []
landmark: true
short: "Cauchy ring"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The set $\mathcal{C}$ of Cauchy sequences of rationals, with termwise
addition and multiplication and the constant sequences $0$ and $1$, is a
commutative ring with identity.

## Facts & Assumptions

**Given:** Cauchy sequences $(a_n), (b_n)$ and a rational $\varepsilon > 0$.

[A1] Cauchy: for every rational $\delta > 0$ there is an index beyond which any two terms differ by less than $\delta$.

[L1] $\mathbb{Q}$ is a field; ring axioms hold termwise ([[thm-rat-field]]).

[L2] Triangle inequality and $|uv| = |u||v|$ ([[lem-rat-triangle]]).

[L3] Cauchy sequences are bounded ([[lem-cauchy-bounded]]).

[L4] Ordered-field arithmetic: $\varepsilon/2$, $\varepsilon/(A+B)$ are positive rationals for $A, B \ge 1$ ([[thm-rat-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Termwise, all ring axioms (associativity, commutativity, identities, inverses for $+$, distributivity) hold in $\mathcal{C}$ because they hold in $\mathbb{Q}$ at every index; the constant sequences $0, 1$ are Cauchy. What needs proof is closure of $\mathcal{C}$ under $+$, negation, and $\cdot$. [L1]

1.2 Fix $N_a$ with $|a_m - a_n| < \varepsilon/2$ for $m,n \ge N_a$ and $N_b$ likewise for $(b_n)$. [A1, L4]

1.3 Fix rational bounds $A, B \ge 1$ with $|a_n| \le A$ and $|b_n| \le B$ for all $n$. [L3]

2.1 Sum: for $m,n \ge \max(N_a, N_b)$, $|(a_m + b_m) - (a_n + b_n)| \le |a_m - a_n| + |b_m - b_n| < \varepsilon$; so $(a_n + b_n)$ is Cauchy. Negation likewise: $|(-a_m) - (-a_n)| = |a_m - a_n|$. [step 1.2, L2]

2.2 Set $\delta = \varepsilon/(A+B) > 0$ and fix $M_a, M_b$ with $|a_m - a_n| < \delta$ for $m,n \ge M_a$ and $|b_m - b_n| < \delta$ for $m,n \ge M_b$. [step 1.3, A1, L4]

3.1 Product: for $m,n \ge \max(M_a, M_b)$, $|a_m b_m - a_n b_n| = |a_m(b_m - b_n) + b_n(a_m - a_n)| \le A|b_m - b_n| + B|a_m - a_n| < (A+B)\delta = \varepsilon$; so $(a_n b_n)$ is Cauchy. [step 1.3, step 2.2, L2]

4.1 $\mathcal{C}$ is closed under addition, negation, and multiplication, contains $0$ and $1$, and satisfies the ring axioms termwise: a commutative ring with identity. [step 1.1, step 2.1, step 3.1] ∎
