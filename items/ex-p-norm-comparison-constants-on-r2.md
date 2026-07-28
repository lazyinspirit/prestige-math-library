---
id: ex-p-norm-comparison-constants-on-r2
kind: example
title: "The comparison constants between $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ on $\\mathbb{R}^{2}$, and vectors attaining each"
status: draft
origin: session
deps: [def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-norm-and-normed-space, thm-cauchy-schwarz-finite, thm-of-square-roots, lem-of-square-monotone, lem-standard-basis-of-f-n, def-canonical-natural, lem-of-naturals-positive, def-metric-ball, lem-finite-sum-laws, def-finite-sum, lem-finite-set-has-max, def-max-min, def-abs-value, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
pipeline_run: null
---

## Example

On $\mathbb{R}^{2}$ with the norms of [[def-p-norms-on-rn]], the comparison chain
of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3 reads

$$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(2)\,\lVert x\rVert_\infty, \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(2)}\;\lVert x\rVert_2 .$$

**Each of these four constants is attained**, so none can be improved:

- $e_0 = (1,0)$ has $\lVert e_0\rVert_\infty = \lVert e_0\rVert_2 = \lVert e_0\rVert_1 = 1$,
  so the first and second inequalities are equalities there;
- $(1,1)$ has $\lVert(1,1)\rVert_\infty = 1$, $\lVert(1,1)\rVert_2 = \sqrt{\iota(2)}$
  and $\lVert(1,1)\rVert_1 = \iota(2)$, so the third and fourth inequalities are
  equalities there.

The general theorem [[thm-all-norms-on-rn-are-equivalent]] supplies constants but
no attaining vectors; that is what this computation adds.

**Unit balls.** Writing $B_p := \{\, x \in \mathbb{R}^{2} : \lVert x\rVert_p \le 1 \,\}$
for $p \in \{1,2,\infty\}$, the chain gives
$B_1 \subseteq B_2 \subseteq B_\infty$, and both inclusions are strict: $(1,1)$
lies in $B_\infty$ and not in $B_2$, and $\bigl(3/\iota(5)\bigr)(1,1)$ lies in
$B_2$ and not in $B_1$. The scalar has to be chosen strictly between
$1/\iota(2)$ and $1/\sqrt{\iota(2)}$: at the endpoint $1/\iota(2)$ the vector
$(1,1)/\iota(2)$ has $\lVert\cdot\rVert_1 = 1$ and so still lies in $B_1$.

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{2}$ with $\lVert x\rVert_1 = |x_0|+|x_1|$, $\lVert x\rVert_2 = \sqrt{x_0^{2}+x_1^{2}}$ and $\lVert x\rVert_\infty = \max\{|x_0|,|x_1|\}$ ([[def-p-norms-on-rn]], [[lem-finite-sum-laws]], [[def-finite-sum]], [[lem-finite-set-has-max]], [[def-max-min]]); the vectors $e_0 = (1,0)$, $e_1 = (0,1)$ and $u := (1,1)$ ([[lem-standard-basis-of-f-n]]).

[L1] The comparison chain on $\mathbb{R}^{n}$ for $n \ge 1$, at $n = 2$: $\lVert x\rVert_\infty \le \lVert x\rVert_2 \le \lVert x\rVert_1 \le \iota(2)\lVert x\rVert_\infty$ and $\lVert x\rVert_1 \le \sqrt{\iota(2)}\lVert x\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[thm-cauchy-schwarz-finite]]).

[L2] Each of the three is a norm and induces the correspondingly named published metric ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-norm-and-normed-space]], [[def-equivalent-norms]], [[def-metric-ball]]).

[L3] Square roots: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, so $\sqrt{1} = 1$, and squaring is strictly monotone on the nonnegatives ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L4] Canonical naturals: $\iota(1) = 1$, $\iota(2) = 1+1 > 1$, $\iota(2) > 0$, and $\iota$ is strictly increasing ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] Absolute value: $|1| = 1$, $|0| = 0$, $|t| \ge 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

## Verification

**Proof technique:** direct.

1.1 $\lVert e_0\rVert_1 = |1|+|0| = 1$, $\lVert e_0\rVert_2 = \sqrt{1^{2}+0^{2}} = \sqrt{1} = 1$, and $\lVert e_0\rVert_\infty = \max\{1,0\} = 1$. [L3, L5]

1.2 $\lVert u\rVert_1 = |1|+|1| = \iota(2)$, $\lVert u\rVert_2 = \sqrt{1^{2}+1^{2}} = \sqrt{\iota(2)}$, and $\lVert u\rVert_\infty = \max\{1,1\} = 1$. [L3, L4, L5]

1.3 The inclusions $B_1 \subseteq B_2 \subseteq B_\infty$ follow from the chain: $\lVert x\rVert_1 \le 1$ gives $\lVert x\rVert_2 \le 1$, and that gives $\lVert x\rVert_\infty \le 1$. [L1, L2]

2.1 At $x = e_0$ the first inequality of [L1] reads $1 \le 1$ and the second reads $1 \le 1$: both are equalities, so neither $\lVert\cdot\rVert_\infty \le \lVert\cdot\rVert_2$ nor $\lVert\cdot\rVert_2 \le \lVert\cdot\rVert_1$ can be improved by a constant smaller than $1$. [step 1.1, L1]

2.2 At $x = u$ the third inequality of [L1] reads $\iota(2) \le \iota(2)\cdot 1$ and the fourth reads $\iota(2) \le \sqrt{\iota(2)}\cdot\sqrt{\iota(2)} = \iota(2)$: both are equalities, so the constants $\iota(2)$ and $\sqrt{\iota(2)}$ are best possible. [step 1.2, L1, L3]

2.3 The inclusions are strict: $u$ has $\lVert u\rVert_\infty = 1$ and $\lVert u\rVert_2 = \sqrt{\iota(2)} > 1$ since $\iota(2) > 1$, so $u \in B_\infty \setminus B_2$; and $w := \bigl(3/\iota(5)\bigr)u$ has $\lVert w\rVert_1 = \iota(2)\cdot 3/\iota(5) = \iota(6)/\iota(5) > 1$ while $\lVert w\rVert_2 = \sqrt{\iota(2)}\cdot 3/\iota(5)$ satisfies $\lVert w\rVert_2^{2} = \iota(2)\cdot\iota(9)/\iota(25) = \iota(18)/\iota(25) < 1$, so $w \in B_2\setminus B_1$. [step 1.2, L2, L3, L4]

3.1 Steps 2.1 and 2.2 exhibit an attaining vector for each of the four inequalities, and steps 1.3 and 2.3 give the strict inclusions of the unit balls. [step 2.1, step 2.2, step 1.3, step 2.3] ∎

## Remarks

- **Sharpness is not the same as equivalence.** [[thm-all-norms-on-rn-are-equivalent]] asserts that constants exist and produces some; nothing in it says which are smallest. The computation above supplies attaining vectors, and those are what make the constants of the chain best possible on $\mathbb{R}^{2}$.

- **Both attaining vectors are extreme in the expected way.** A vector with a single nonzero coordinate makes all three norms agree; a vector whose two coordinates have equal absolute value spreads the mass as evenly as possible and is where $\lVert\cdot\rVert_1$ is largest relative to the other two. On $\mathbb{R}^{n}$ the same two vectors give equality with $\iota(n)$ and $\sqrt{\iota(n)}$ in place of $\iota(2)$ and $\sqrt{\iota(2)}$; only the case $n = 2$ is verified here.

- **The strictness computation in step 2.3 is arithmetic, not geometry.** The scalar $3/\iota(5)$ was chosen to lie strictly between $1/\iota(2)$ and $1/\sqrt{\iota(2)}$; any scalar in that open interval would serve, and the interval is nonempty exactly because $\sqrt{\iota(2)} < \iota(2)$.
