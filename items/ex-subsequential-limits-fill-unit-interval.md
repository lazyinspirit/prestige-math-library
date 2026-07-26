---
id: ex-subsequential-limits-fill-unit-interval
kind: example
title: "The block sequence $1/1;\\ 1/2, 2/2;\\ 1/3, 2/3, 3/3;\\ \\dots$ has subsequential limit set exactly $[0,1]$"
status: published
origin: session
deps: [def-subsequential-limit, def-interval, def-limsup-liminf, thm-limsup-is-greatest-subsequential-limit, cor-liminf-is-least-subsequential-limit, def-extended-limits, def-extended-reals, lem-limsup-exists, lem-extended-reals-complete, thm-recursion, thm-well-ordering-principle, thm-induction-principle, lem-index-map-grows, lem-limit-preserves-order, lem-convergent-implies-bounded, def-divergence-to-infinity, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-sign-rules, lem-of-add-order, prop-of-multiply-inequalities, lem-of-abs-value, def-abs-value, def-sequence, def-real-limit, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-discrete, def-upper-bound, def-partial-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Example

Write $\iota(n) = n \cdot 1_{\mathbb{R}}$ for the canonical natural. Let
$c : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ be the function supplied by the
recursion theorem ([[thm-recursion]]) from the starting element $(1,1)$ and the
function

$$F(m, j) := (m,\, j+1) \ \text{ if } j < m, \qquad F(m, j) := (m+1,\, 1) \ \text{ if } j = m,$$

write $c_k = (m_k, j_k)$, and define the sequence of reals

$$x_k \;:=\; \frac{\iota(j_k)}{\iota(m_k)} \qquad (k \in \mathbb{N}).$$

Its first terms are

$$\frac{1}{1};\quad \frac{1}{2}, \frac{2}{2};\quad \frac{1}{3}, \frac{2}{3}, \frac{3}{3};\quad \frac{1}{4}, \dots$$

the blocks being the successive values of $m$. Then the subsequential limit set
([[def-subsequential-limit]]) is the whole unit interval ([[def-interval]]),

$$\operatorname{SL}(x) = [0,1],$$

and consequently $\limsup_k x_k = 1$ and $\liminf_k x_k = 0$
([[def-limsup-liminf]]).

**The recursion replaces the block bookkeeping.** Presenting the sequence by the
partial sums $1 + 2 + \dots + (m-1)$ that mark where each block begins would
require inverting that count at every index. Carrying the pair $(m, j)$ along
instead makes each term's block and position immediately available, and the three
facts the argument needs, that $1 \le j_k \le m_k$, that $m_k \le k+1$, and that
every admissible pair occurs, are then three short inductions.

## Facts & Assumptions

**Given:** The recursion $c_k = (m_k, j_k)$ described above, the sequence $x_k = \iota(j_k)/\iota(m_k)$, and a real number $y$ with $0 \le y \le 1$.

[L1] Recursion theorem: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{k+1} = f(g_k)$ ([[thm-recursion]], [[def-natural-numbers]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Index maps: if $n_i < n_{i+1}$ for every $i$ then $n$ is strictly increasing, and then $n_i \ge i$; the composite $(x_{n_i})$ is a subsequence, and $L \in \operatorname{SL}(x)$ means some subsequence converges to $L$ ([[lem-index-map-grows]], [[def-sequence]], [[def-subsequential-limit]], [[def-real-limit]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, $\iota(1) = 1$, and $\iota(n+n') = \iota(n) + \iota(n')$ ([[lem-of-naturals-positive]]).

[L6] Order arithmetic: claim 4 of [[lem-of-sign-rules]], [[lem-of-add-order]] and [[lem-of-inverse-positive]] state the strict forms, that multiplication by a positive element preserves $<$, that inequalities may be translated and added, and that $0 < u < v$ gives $0 < 1/v < 1/u$; adjoining the case of equality, where the two sides coincide, gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order is total ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L8] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a convergent sequence is bounded and a sequence diverging to $\pm\infty$ is unbounded ([[lem-convergent-implies-bounded]], [[def-divergence-to-infinity]]).

[L9] The interval $[0,1] = \{t \in \mathbb{R} : 0 \le t \le 1\}$, with least element $0$ and greatest element $1$ ([[def-interval]]).

[L10] $\limsup_k x_k$ is the greatest and $\liminf_k x_k$ the least element of $\overline{\operatorname{SL}}(x)$, whose real part is $\operatorname{SL}(x)$ ([[thm-limsup-is-greatest-subsequential-limit]], [[cor-liminf-is-least-subsequential-limit]], [[def-extended-limits]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L11] Absolute value: $|t| \le \eta$ if and only if $-\eta \le t \le \eta$; and the order on $\mathbb{N}$ is total with $k < k+1$ ([[lem-of-abs-value]], [[def-abs-value]], [[def-nat-order]], [[thm-nat-linear-order]], [[lem-nat-discrete]]).

## Verification

**Proof technique:** constructive.

1.1 The recursion theorem applied to $A = \mathbb{N} \times \mathbb{N}$, the element $(1,1)$ and the function $F$ gives a unique $c$ with $c_0 = (1,1)$ and $c_{k+1} = F(c_k)$, so $(m_k, j_k)$ and hence $x_k$ are well defined once $m_k \ge 1$ is known. [given, L1]

1.2 For every $k$ one has $1 \le j_k \le m_k$: this holds at $k = 0$, where $(m_0, j_0) = (1,1)$; and if $1 \le j_k \le m_k$ then either $j_k < m_k$, so that $c_{k+1} = (m_k, j_k + 1)$ with $1 \le j_k + 1 \le m_k$, or $j_k = m_k$, so that $c_{k+1} = (m_k + 1, 1)$ with $1 \le 1 \le m_k + 1$. The claim follows by induction on $k$; in particular $m_k \ge 1$ always, so $\iota(m_k) > 0$ and $x_k$ is defined. [given, L2, L5, L11]

1.3 For every $k$ one has $m_k \le k+1$: at $k = 0$, $m_0 = 1$; and $m_{k+1}$ is $m_k$ or $m_k + 1$, so $m_{k+1} \le m_k + 1 \le k+2$. This is again an induction on $k$. [given, L2, L11]

1.4 For every natural $m \ge 1$ and every $j$ with $1 \le j \le m$ there is $k$ with $(m_k, j_k) = (m, j)$. Induct on $m$. For $m = 1$ the only admissible $j$ is $1$, realised at $k = 0$. Assume the claim for $m$ and apply it at $j = m$ to get $k$ with $(m_k, j_k) = (m, m)$; then $c_{k+1} = (m+1, 1)$, and a second induction on $i$ shows $c_{k+1+i} = (m+1, 1+i)$ for every $i \le m$: it holds at $i = 0$, and if it holds at $i < m$ then $1 + i < m + 1$, so $c_{k+2+i} = (m+1, 2+i)$. Hence every $j$ with $1 \le j \le m+1$ is realised in block $m+1$. [given, L1, L2, L11]

1.5 Let $y$ be a real with $0 \le y \le 1$. [given, L9]

2.1 For every $k$ one has $0 < x_k \le 1$: from $1 \le j_k \le m_k$ we get $0 < \iota(j_k) \le \iota(m_k)$, and dividing by $\iota(m_k) > 0$ gives $0 < x_k \le 1$. [step 1.2, L5, L6]

2.2 For every natural $m \ge 1$ the set $\{\, j \in \mathbb{N} : 1 \le j \le m \text{ and } y\,\iota(m) \le \iota(j) \,\}$ is nonempty, since $j = m$ belongs to it because $y \le 1$ gives $y\,\iota(m) \le \iota(m)$; let $J(m)$ be its least element. Then $y \le \iota(J(m))/\iota(m)$, and moreover $\iota(J(m))/\iota(m) \le y + 1/\iota(m)$: if $J(m) = 1$ this reads $1/\iota(m) \le y + 1/\iota(m)$, true because $y \ge 0$; and if $J(m) > 1$ then $j := J(m) - 1$ satisfies $1 \le j \le m$ and $j < J(m)$, so minimality gives $\iota(j) < y\,\iota(m)$, that is $\iota(J(m)) - 1 < y\,\iota(m)$, and dividing by $\iota(m) > 0$ gives the bound. Hence $0 \le \iota(J(m))/\iota(m) - y \le 1/\iota(m)$. [step 1.5, L3, L5, L6, L11]

3.1 For every $L \in \operatorname{SL}(x)$ one has $0 \le L \le 1$, since a subsequence of $(x_k)$ converging to $L$ satisfies $0 \le x_{n_i} \le 1$ at every index by step 2.1, and limits preserve non-strict inequalities. So $\operatorname{SL}(x) \subseteq [0,1]$. [step 2.1, L4, L8, L9]

3.2 For every natural $m \ge 1$ the set $\{\, k \in \mathbb{N} : (m_k, j_k) = (m, J(m)) \,\}$ is nonempty by step 1.4, since $1 \le J(m) \le m$; let $K(m)$ be its least element. Then $x_{K(m)} = \iota(J(m))/\iota(m)$, so $|x_{K(m)} - y| \le 1/\iota(m)$ by step 2.2, and $m = m_{K(m)} \le K(m) + 1$ by step 1.3. [step 1.4, step 1.3, step 2.2, L3, L11]

4.1 Define $f : \mathbb{N} \to \mathbb{N}$ by $f(n) := K(n+2)$; then $f(n) \ge (n+2) - 1 = n+1 > n$ and $|x_{f(n)} - y| \le 1/\iota(n+2)$. The recursion theorem applied to $\mathbb{N}$, the element $K(1)$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = K(1)$ and $n_{i+1} = f(n_i)$; it is strictly increasing, so $n_i \ge i$, and $|x_{n_{i+1}} - y| \le 1/\iota(n_i + 2) \le 1/\iota(i+2)$. [step 3.2, L1, L4, L5, L6, construct]

5.1 The subsequence $(x_{n_i})$ converges to $y$: given a real $\varepsilon > 0$, take a natural $p \ge 1$ with $1/p < \varepsilon$; every $i \ge p$ satisfies $i \ge 1$, so step 4.1 applied at $i-1$ gives $|x_{n_i} - y| \le 1/\iota(i+1)$, and $i + 1 > p$ gives $1/\iota(i+1) < 1/p < \varepsilon$. Hence $y \in \operatorname{SL}(x)$, and since $y$ was an arbitrary element of $[0,1]$, $[0,1] \subseteq \operatorname{SL}(x)$. [step 4.1, step 1.5, L4, L5, L6, L7, L11]

6.1 Therefore $\operatorname{SL}(x) = [0,1]$. The sequence is bounded by step 2.1, so every subsequence of it is bounded and none diverges to $\pm\infty$; hence $\overline{\operatorname{SL}}(x) = \operatorname{SL}(x) = [0,1]$, whose greatest element is $1$ and least element $0$, and [L10] gives $\limsup_k x_k = 1$ and $\liminf_k x_k = 0$. [step 5.1, step 3.1, step 2.1, L8, L9, L10, discharge-construct] ∎

## Remarks

- **Every point of $[0,1]$ is approached, and the rate is the block width.** In
  block $m$ the terms are $1/m, 2/m, \dots, m/m$, spaced $1/m$ apart and covering
  $(0,1]$, so any target in $[0,1]$ has a term of block $m$ within $1/m$ of it.
  Since blocks of every width occur, and occur arbitrarily late, this produces a
  subsequence converging to the target. That is the whole idea; steps 2.2 and 3.2
  only make the choice of term canonical, by taking a least element rather than
  an arbitrary one, so that no choice principle is used.

- **The set is closed, as it must be.** $[0,1]$ contains the limit of every
  convergent sequence of its own points, which is what
  [[thm-subsequential-limit-set-closed]] predicts for any subsequential limit set.
  This example shows the prediction is not vacuous: the set here is an entire
  interval, in contrast with the two-point set of
  [[ex-limsup-of-alternating-sequence]].

- **Neither endpoint is a value of the sequence in the case of $0$.** Every term
  is $> 0$ by step 2.1, so $0 \in \operatorname{SL}(x)$ is a genuine limit and
  not an attained value, while $1$ is attained, once in every block. Subsequential
  limits need not be values, and values need not be subsequential limits.

- **Why the sequence is not written by a closed formula.** The classical
  presentation defines $x_k$ by first solving $m(m-1)/2 \le k < m(m+1)/2$ for $m$,
  which needs a least-element argument at every index and a quadratic estimate to
  get $m \le k+1$. The recursion carries the block and position forward instead,
  and the estimate $m_k \le k+1$ becomes the one-line induction of step 1.3.
