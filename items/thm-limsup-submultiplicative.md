---
id: thm-limsup-submultiplicative
kind: theorem
title: "For bounded nonnegative sequences, $\\limsup(x_k y_k) \\le (\\limsup x_k)(\\limsup y_k)$"
status: published
origin: session
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, lem-extended-reals-complete, prop-of-multiply-inequalities, lem-of-sign-rules, def-bounded-set, def-sequence, def-extended-reals, def-upper-bound, def-partial-order, lem-of-abs-value, lem-of-add-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-product-strict, cex-zero-times-infinity-indeterminate]
aliases: []
landmark: false
short: "$\\limsup$ is submultiplicative"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be **bounded** sequences of reals ([[def-sequence]]) with
$x_k \ge 0$ and $y_k \ge 0$ for every $k \in \mathbb{N}$. Then
$\limsup_k x_k$, $\limsup_k y_k$ and $\limsup_k (x_k y_k)$ are **real numbers**,
all $\ge 0$, and

$$\limsup_{k} (x_k y_k) \;\le\; \Big(\limsup_{k} x_k\Big)\Big(\limsup_{k} y_k\Big).$$

**Both hypotheses are doing work.** Boundedness makes all three quantities real,
so that the product on the right is a product in the field $\mathbb{R}$ and no
extended multiplication is involved; without it the right-hand side could be an
undefined product $0 \cdot (+\infty)$ ([[def-extended-reals]]). Nonnegativity is
what lets two upper estimates be multiplied: for sequences of mixed sign the
inequality is false in the stated form, since a product of two negative numbers
is positive and the estimate would point the wrong way. Strictness is possible,
and a witness is recorded on the companion page.

## Facts & Assumptions

**Given:** Bounded sequences $(x_k)$, $(y_k)$ of reals with $x_k \ge 0$ and $y_k \ge 0$ for every $k$; their termwise product $(x_k y_k)$; and $\Lambda := \limsup_k x_k$, $M := \limsup_k y_k$, $P := \limsup_k(x_k y_k)$ ([[def-limsup-liminf]]).

[L1] Tail ranges $T_n$, extended tail suprema $s_n = \sup T_n$ and $\limsup_k z_k = \inf\{s_n\}$ all exist for every sequence; $s_n$ is the least upper bound of $T_n$ and $\limsup$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, restricts on $\mathbb{R}$ to the order of $\mathbb{R}$, and has $+\infty$ greatest and $-\infty$ least; a member of $\overline{\mathbb{R}}$ lying between two reals is itself real ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation for a real limit superior: for every real $\varepsilon > 0$ one has $z_k < \limsup_k z_k + \varepsilon$ eventually ([[lem-limsup-epsilon-characterisation]]).

[L4] Boundedness of a sequence of reals: there is a real $B$ with $|z_k| \le B$ for every $k$; and $z \le |z|$ always ([[def-sequence]], [[def-bounded-set]], [[lem-of-abs-value]]).

[L5] Products of inequalities: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$, which [[prop-of-multiply-inequalities]] states in exactly this nonstrict form; and multiplication by a positive element preserves the order, [[lem-of-sign-rules]] stating the strict form $a < b \iff ac < bc$ and the nonstrict form following by adjoining the case $a = b$, where the two products are equal.

[L6] Order arithmetic in $\mathbb{R}$: inequalities may be added and translated, and the order is total, so exactly one of $a < b$, $a = b$, $b < a$ holds ([[lem-of-add-order]]).

[L7] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L8] Two properties each holding eventually hold together from the larger of the two thresholds on, the order on $\mathbb{N}$ being total ([[def-sequence]], [[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Both sequences are bounded, so there are reals bounding $|x_k|$ and $|y_k|$; let $B$ be the larger of the two, so that $|x_k| \le B$ and $|y_k| \le B$ for every $k$, and $B \ge |x_0| \ge 0$. With $x_k \ge 0$ and $y_k \ge 0$ this gives $0 \le x_k \le B$ and $0 \le y_k \le B$ for every $k$, hence $0 \le x_k y_k \le B \cdot B$ by [L5]. [given, L4, L5, L6]

2.1 Each of $\Lambda$, $M$, $P$ is a real number $\ge 0$. Indeed, for every $n$ the real $B$ is an upper bound of the $n$-th tail range of $(x_k)$, so $s_n \le B$ and hence $\Lambda \le s_0 \le B$; and $s_n \ge x_n \ge 0$ for every $n$, so $0$ is a lower bound of $\{s_n\}$ and $0 \le \Lambda$. Being between the reals $0$ and $B$, the element $\Lambda$ is real. The same argument gives $0 \le M \le B$, and, using the bound $B \cdot B$ from step 1.1, $0 \le P \le B \cdot B$. [step 1.1, L1, L2]

3.1 Let $\delta > 0$ be an arbitrary real and put $C := \Lambda + M + 1$, a real with $C \ge 1 > 0$. Take a natural $m_1 \ge 1$ with $1/m_1 < 1$ and a natural $m_2 \ge 1$ with $1/m_2 < \delta/C$, let $m$ be the larger of $m_1$ and $m_2$, and set $\varepsilon := 1/m$, so that $0 < \varepsilon < 1$ and $\varepsilon C < \delta$. By [L3] there are thresholds beyond which $x_k < \Lambda + \varepsilon$ and beyond which $y_k < M + \varepsilon$; let $N$ be the larger. For $k \ge N$ we have $0 \le x_k \le \Lambda + \varepsilon$ and $0 \le y_k \le M + \varepsilon$, so $x_k y_k \le (\Lambda + \varepsilon)(M + \varepsilon) = \Lambda M + \varepsilon(\Lambda + M + \varepsilon) \le \Lambda M + \varepsilon C < \Lambda M + \delta$, the middle step because $\Lambda + M + \varepsilon \le C$ and $\varepsilon > 0$. Hence $\Lambda M + \varepsilon C$ is an upper bound of the $N$-th tail range of $(x_k y_k)$, so $P \le \Lambda M + \varepsilon C < \Lambda M + \delta$. [step 2.1, L1, L3, L5, L6, L7, L8, algebra]

4.1 Suppose $P > \Lambda M$. Both are real by step 2.1, so $\delta_0 := P - \Lambda M > 0$, and step 3.1 applied with $\delta = \delta_0$ gives $P < \Lambda M + \delta_0 = P$, which is impossible. By totality $P \le \Lambda M$, which is the asserted inequality. [step 3.1, step 2.1, L2, L6] ∎

## Remarks

- **The estimate is the product of two one-sided estimates, and that is why
  nonnegativity is needed.** Step 3.1 multiplies $x_k \le \Lambda + \varepsilon$
  by $y_k \le M + \varepsilon$, which is legitimate only when all four quantities
  are $\ge 0$ ([[prop-of-multiply-inequalities]]). For sequences of mixed sign the
  same two estimates say nothing about the product; the correct general statement
  in that setting involves absolute values and is not needed on this page.

- **The error term is linear in $\varepsilon$ with a fixed coefficient.**
  Expanding gives $\varepsilon(\Lambda + M + \varepsilon)$, and restricting to
  $\varepsilon < 1$ replaces the varying coefficient by the constant
  $C = \Lambda + M + 1$, after which one choice of $\varepsilon$ makes the whole
  error smaller than the prescribed $\delta$. Both restrictions on $\varepsilon$
  are met at once by taking the larger of two Archimedean choices.

- **The inequality is strict for some bounded nonnegative pairs**, and
  [[cex-limsup-product-strict]] on the companion page is the witness: there the
  product sequence is identically $0$ while the right-hand side is $4$.

- **The bounded hypothesis is not merely for convenience.** Without it $\Lambda$
  could be $+\infty$ and $M$ could be $0$, and then the right-hand side is not an
  element of $\overline{\mathbb{R}}$ at all ([[def-extended-reals]]); the
  behaviour of the products in that situation really is unconstrained, as
  [[cex-zero-times-infinity-indeterminate]] shows.
