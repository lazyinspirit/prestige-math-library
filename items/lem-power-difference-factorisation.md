---
id: lem-power-difference-factorisation
kind: lemma
title: "Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate"
status: draft
origin: session
deps: [def-integer-power, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, lem-power-monotone, lem-power-laws, prop-of-multiply-inequalities, lem-of-sign-rules, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: []
landmark: false
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
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$ with $n \ge 1$, with powers
as in [[def-integer-power]] and finite sums as in [[def-finite-sum]]. Then

$$b^n - a^n = (b - a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}.$$

**Lipschitz estimate.** If $0 \le a \le b \le M$ then

$$0 \le b^n - a^n \le n M^{\,n-1} (b - a),$$

where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). This estimate is the form in
which the factorisation is used, later on this page, to prove that $n$-th roots
exist.

## Facts & Assumptions

**Given:** Elements $a, b, M$ of $\mathbb{R}$ and a natural $n \ge 1$. Define $c : \mathbb{N} \to \mathbb{R}$ by $c_k = a^k b^{\,n-k}$ for $k \le n$ and $c_k = a^n$ for $k > n$; only the values $c_0, \dots, c_n$ occur below.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{j+1} = a^j a$.

[L2] Laws of finite sums ([[lem-finite-sum-laws]], themselves proved by induction, [[thm-induction-principle]]): telescoping $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0$; scaling $\sum_{k<n}\lambda d_k = \lambda \sum_{k<n} d_k$ and the constant sum $\sum_{k<n}\lambda = n\lambda$; and monotonicity, $d_k \le e_k$ for all $k < n$ implies $\sum_{k<n} d_k \le \sum_{k<n} e_k$.

[L3] Laws of integer exponents ([[lem-power-laws]]): $M^{k} M^{\,n-1-k} = M^{\,n-1}$ for $k \le n-1$.

[L4] Monotonicity of powers ([[lem-power-monotone]]): $0 \le x \le y$ implies $0 \le x^j \le y^j$.

[L5] Multiplying inequalities of nonnegatives: $0 \le x \le y$ and $0 \le u \le v$ imply $xu \le yv$; and $u \ge v$ with $c \ge 0$ implies $uc \ge vc$ ([[prop-of-multiply-inequalities]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 The consecutive differences of $c$ factor: for $k < n$, $c_{k+1} - c_k = a^{k+1} b^{\,n-k-1} - a^k b^{\,n-k} = a^k b^{\,n-1-k}\,a - a^k b^{\,n-1-k}\,b = a^k b^{\,n-1-k}(a - b)$, using $a^{k+1} = a^k a$ and $b^{\,n-k} = b^{\,n-1-k} b$. [L1, algebra]

1.2 The endpoints of $c$ are $c_0 = a^0 b^{\,n} = b^n$ and $c_n = a^n b^{\,0} = a^n$. [L1, algebra]

1.3 Now assume $0 \le a \le b \le M$; then for every $k < n$, $0 \le a^k \le M^k$ and $0 \le b^{\,n-1-k} \le M^{\,n-1-k}$, so $0 \le a^k b^{\,n-1-k} \le M^k M^{\,n-1-k} = M^{\,n-1}$. [L3, L4, L5]

1.4 Also $b - a \ge 0$ and $M^{\,n-1} \ge 0$, and $b^n - a^n \ge 0$ because $0 \le a \le b$ gives $a^n \le b^n$. [L4, L5]

2.1 Telescoping the differences: $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0 = a^n - b^n$. [step 1.2, L2]

2.2 Pulling the constant factor out of the same sum: $\sum_{k<n}(c_{k+1} - c_k) = \sum_{k<n} a^k b^{\,n-1-k}(a-b) = (a-b)\sum_{k<n} a^k b^{\,n-1-k}$. [step 1.1, L2]

2.3 Summing the bound of step 1.3 over $k < n$ and using monotonicity and the constant sum: $\sum_{k<n} a^k b^{\,n-1-k} \le \sum_{k<n} M^{\,n-1} = n M^{\,n-1}$. [step 1.3, L2]

3.1 Comparing the two evaluations gives $a^n - b^n = (a - b)\sum_{k<n} a^k b^{\,n-1-k}$, and multiplying both sides by $-1$ gives the stated factorisation $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$. [step 2.1, step 2.2, algebra]

4.1 Multiplying the inequality of step 2.3 by the nonnegative factor $b - a$ and substituting into the factorisation gives $b^n - a^n = (b-a)\sum_{k<n} a^k b^{\,n-1-k} \le n M^{\,n-1}(b-a)$, which together with $b^n - a^n \ge 0$ is the Lipschitz estimate. [step 3.1, step 1.4, step 2.3, L5] ∎
