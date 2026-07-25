---
id: lem-null-times-bounded
kind: lemma
title: "A null sequence times a bounded sequence is null"
status: draft
origin: session
deps: [def-real-limit, def-sequence, lem-of-abs-value, lem-of-sign-rules, thm-of-archimedean, lem-rat-embeds-dense, prop-of-multiply-inequalities, lem-of-inverse-positive, lem-of-add-order, cor-of-one-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "null times bounded is null"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]). If $(x_k)$
converges to $0$ ([[def-real-limit]]) and $(y_k)$ is bounded, then the product
sequence $(x_k y_k)$ converges to $0$.

No assumption is made that $(y_k)$ converges. Boundedness alone suffices, and
that is why this lemma is stated on its own rather than folded into the product
rule for limits.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals with $(x_k)$ converging to $0$, and a real $M$ with $|y_k| \le M$ for every $k \in \mathbb{N}$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value: $|uv| = |u|\,|v|$, $|u| \ge 0$, and $|u - 0| = |u|$ ([[lem-of-abs-value]]).

[L3] Products of inequalities: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$; and for $c > 0$, $a < b$ gives $ac < bc$ ([[prop-of-multiply-inequalities]], [[lem-of-sign-rules]]).

[L4] Order arithmetic in $\mathbb{R}$: $0 < 1$, adding a constant preserves the strict order, and $\le$ and $<$ compose transitively ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Inverses: if $c > 0$ then $c^{-1} > 0$, so $\varepsilon/c > 0$ whenever $\varepsilon > 0$ and $c > 0$ ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L6] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$; consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Since $|y_0| \le M$ and $|y_0| \ge 0$, transitivity gives $M \ge 0$; put $C := M + 1$, so that $C > 0$ and $|y_k| \le M \le C$ for every $k$. [L2, L4]

2.1 Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon/C$, which is a real $> 0$ and satisfies $\eta C = \varepsilon$. [step 1.1, L5]

3.1 Since $(x_k)$ converges to $0$, there is $K \in \mathbb{N}$ with $|x_k| = |x_k - 0| < \eta$ for every $k \ge K$. [step 2.1, L1, L2, L6]

4.1 For every $k \ge K$ we get $|x_k y_k - 0| = |x_k|\,|y_k| \le |x_k| \, C < \eta \, C = \varepsilon$, the first inequality from $0 \le |x_k| \le |x_k|$ and $0 \le |y_k| \le C$, the second from $|x_k| < \eta$ and $C > 0$. [step 1.1, step 3.1, L2, L3, L4]

5.1 Since the real $\varepsilon > 0$ was arbitrary, $(x_k y_k)$ converges to $0$. [step 4.1, L1, L6] ∎

## Remarks

- The hypothesis on $(y_k)$ cannot be weakened to "eventually bounded" without comment, but it need not be: by [[lem-limit-of-tail]] a sequence bounded from some index on is bounded outright, since the finitely many earlier terms are absorbed into the bound exactly as in [[lem-convergent-implies-bounded]].

- Boundedness of $(y_k)$ is essential. With $x_k = 1/(k+1)$, which is null, and $y_k = (k+1)^2$, which is unbounded, the product is $k+1$, which is unbounded and certainly not null. The lemma is therefore sharp in the sense that the bounded factor may not be replaced by an arbitrary one.

- The lemma is the workhorse of the product rule: the identity $x_k y_k - xy = x_k(y_k - y) + y(x_k - x)$ exhibits the error as a sum of two products of a null sequence with a bounded one, and boundedness of $(x_k)$ comes from [[lem-convergent-implies-bounded]].
