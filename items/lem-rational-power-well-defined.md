---
id: lem-rational-power-well-defined
kind: lemma
title: "Rational powers do not depend on the representative"
status: draft
origin: session
deps: [def-rational-power, thm-nth-roots-exist, lem-power-monotone, lem-power-laws, def-rationals, def-integer-power, lem-of-inverse-positive, def-rat-order, def-int-order, lem-nat-embeds-int]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{R}$ with $a > 0$, and let $m, p \in \mathbb{Z}$ and
$n, q \in \mathbb{N}$ with $n, q \ge 1$ satisfy $m/n = p/q$ in $\mathbb{Q}$
([[def-rationals]]). Then

$$\big(a^{1/n}\big)^{m} = \big(a^{1/q}\big)^{p}.$$

Consequently the value $a^{r}$ of [[def-rational-power]] depends only on the
rational $r$ and not on the representative $m/n$ chosen for it, so
[[def-rational-power]] really does define a function
$(a, r) \mapsto a^{r}$ on $\{a > 0\} \times \mathbb{Q}$. The same conclusion
holds in the supplementary case $a = 0$ with $r > 0$ ([[def-rat-order]]), where
every representative gives the value $0$.

## Facts & Assumptions

**Given:** A real $a > 0$, integers $m, p$, and naturals $n, q \ge 1$ with $m/n = p/q$ in $\mathbb{Q}$.

[L1] Roots ([[thm-nth-roots-exist]]): $a^{1/n}$ is the unique $s \ge 0$ with $s^{n} = a$, and $s > 0$ when $a > 0$; likewise for $q$.

[L2] Laws of integer exponents ([[lem-power-laws]], [[def-integer-power]]): for $x \ne 0$ and integers $j, k$, $(x^{j})^{k} = x^{jk}$ and $x^{j} \ne 0$.

[L3] Injectivity of $x \mapsto x^{N}$ on the nonnegatives for $N \ge 1$ ([[lem-power-monotone]]); and a positive element has positive integer powers, since $x > 0$ gives $x^{k} > 0$ for $k \in \mathbb{N}$ and $x^{-k} = (x^{k})^{-1} > 0$ ([[lem-power-monotone]], [[lem-of-inverse-positive]]).

[L4] Equality of rationals ([[def-rationals]]): $m/n = p/q$ holds exactly when $mq = pn$ in $\mathbb{Z}$.

[L5] Positivity of a rational and of its numerator ([[def-rat-order]], [[def-int-order]], [[lem-nat-embeds-int]]): the order on $\mathbb{Q}$ is read off any representative with positive denominator, and on such a representative $m/n$ one has $m/n > 0$ exactly when $m > 0$ in $\mathbb{Z}$; a positive integer is the image of a unique natural $\ge 1$, so then $m \ge 1$.

## Proof

**Proof technique:** direct.

1.1 Put $u := \big(a^{1/n}\big)^{m}$ and $v := \big(a^{1/q}\big)^{p}$; since $a > 0$ we have $a^{1/n} > 0$ and $a^{1/q} > 0$, hence $u > 0$ and $v > 0$. [L1, L3]

1.2 The hypothesis $m/n = p/q$ says exactly that $mq = pn$ in $\mathbb{Z}$, and $nq \ge 1$. [L4]

2.1 Raising $u$ to the power $nq$ and using the iterated-power law twice: $u^{nq} = \big(\big(a^{1/n}\big)^{m}\big)^{nq} = \big(a^{1/n}\big)^{mnq} = \big(\big(a^{1/n}\big)^{n}\big)^{mq} = a^{mq}$. [step 1.1, L1, L2]

2.2 The same computation for $v$: $v^{nq} = \big(\big(a^{1/q}\big)^{p}\big)^{nq} = \big(a^{1/q}\big)^{pnq} = \big(\big(a^{1/q}\big)^{q}\big)^{pn} = a^{pn}$. [step 1.1, L1, L2]

3.1 Since $mq = pn$, the two right-hand sides agree, so $u^{nq} = a^{mq} = a^{pn} = v^{nq}$. [step 2.1, step 2.2, step 1.2]

4.1 Both $u$ and $v$ are positive and $nq \ge 1$, so injectivity of $x \mapsto x^{nq}$ on the nonnegatives forces $u = v$, which is the displayed identity; hence $a^{r}$ is independent of the representative, and in the supplementary case $a = 0$ with $r > 0$ every representative $m/n$ of $r$ with $n \ge 1$ has $m > 0$ in $\mathbb{Z}$, hence $m \ge 1$, so $\big(0^{1/n}\big)^{m} = 0^{m} = 0$ for all of them. [step 3.1, step 1.1, step 1.2, L1, L3, L5] ∎
