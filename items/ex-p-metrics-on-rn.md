---
id: ex-p-metrics-on-rn
kind: example
title: "The metrics $d_1$, $d_2$ and $d_\\infty$ on $\\mathbb{R}^n$ are metrics and are Lipschitz equivalent, with explicit constants"
status: draft
origin: session
deps: [def-metric-space, def-equivalent-metrics, thm-metric-equivalence-hierarchy,
       thm-cauchy-schwarz-finite, def-finite-sum, lem-finite-set-has-max,
       lem-metrics-on-rn, lem-finite-sum-laws, thm-of-square-roots,
       lem-of-square-monotone, lem-of-abs-value, def-abs-value, def-max-min,
       lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive,
       def-integer-power, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$d_\\infty \\le d_2 \\le d_1 \\le n\\,d_\\infty$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $n \ge 1$ be a natural number and let $\mathbb{R}^n$ carry the three metrics

$$d_1(x,y) = \sum_{k<n}|x_k-y_k|, \qquad d_2(x,y) = \sqrt{\textstyle\sum_{k<n}(x_k-y_k)^2}, \qquad d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$$

of [[lem-metrics-on-rn]], where $\mathbb{R}^n$ is the set of functions from the
von Neumann natural $n$ to $\mathbb{R}$. All three are metrics
([[def-metric-space]]); that is [[lem-metrics-on-rn]] and is quoted here rather
than reproved. What this example adds is that the three are **Lipschitz
equivalent with explicit constants** ([[def-equivalent-metrics]]): for all
$x, y \in \mathbb{R}^n$,

$$d_\infty(x,y) \;\le\; d_2(x,y) \;\le\; \sqrt{n}\; d_\infty(x,y), \qquad d_\infty(x,y) \;\le\; d_1(x,y) \;\le\; n\; d_\infty(x,y), \qquad d_2(x,y) \;\le\; d_1(x,y) \;\le\; \sqrt{n}\; d_2(x,y).$$

Consequently the three are uniformly equivalent and topologically equivalent
([[thm-metric-equivalence-hierarchy]]), so they determine the same open sets, the
same convergent sequences and the same continuous maps on $\mathbb{R}^n$.

The constants are best possible: taking $x - y$ with a single nonzero coordinate
gives equality in $d_\infty = d_2 = d_1$, and taking all $n$ coordinates equal in
absolute value gives $d_1 = n\, d_\infty$ and $d_2 = \sqrt{n}\, d_\infty$. Those
two remarks are not needed for the equivalence and are not proved below.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, elements $x, y \in \mathbb{R}^n$, the list $u_k := x_k - y_k$ for $k < n$, and the abbreviations $M := d_\infty(x,y)$, $S := d_1(x,y) = \sum_{k<n}|u_k|$ and $Q := \sum_{k<n} u_k^2$, so that $d_2(x,y) = \sqrt{Q}$; the canonical natural $n$ is here read inside $\mathbb{R}$ as $n \cdot 1_{\mathbb{R}}$.

[L1] $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$ ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-finite-sum]]).

[L2] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): monotonicity, scaling, $\sum_{k<n}\lambda = n\lambda$, a sum of nonnegative terms is nonnegative, and each single term is at most such a sum.

[L3] The maximum of a nonempty finite set of reals exists, is one of its elements and bounds the set above ([[lem-finite-set-has-max]], [[def-max-min]]).

[L4] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; hence $\sqrt{t^2} = t$ for $t \ge 0$ and $\sqrt{ab} = \sqrt{a}\sqrt{b}$ for $a,b \ge 0$, both by uniqueness. Squaring is monotone on the nonnegatives, $s \le t \iff s^2 \le t^2$ ([[lem-of-square-monotone]]), so the same holds for square roots.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_kb_k\big| \le \sqrt{\sum_{k<n}a_k^2}\,\sqrt{\sum_{k<n}b_k^2}$.

[L6] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[def-integer-power]]): $|t| \ge 0$, $|t|^2 = t^2$, and $|t| = t$ for $t \ge 0$.

[L7] Order arithmetic: multiplying an inequality by a nonnegative element preserves it and inequalities may be added, in the strict forms of [[lem-of-sign-rules]] and [[lem-of-add-order]] together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L8] Lipschitz equivalence and the hierarchy ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]).

## Verification

**Proof technique:** direct.

1.1 Since $n \ge 1$ the set $\{|u_k| : k<n\}$ is nonempty and finite, so $M$ exists, equals $|u_j|$ for some $j < n$, satisfies $M \ge 0$, and bounds every $|u_k|$ above. [L3, L6]

1.2 The reals $n \cdot 1_{\mathbb{R}}$, $\sqrt{n}$, $Q$ and $S$ are all nonnegative, and $n \cdot 1_{\mathbb{R}} > 0$, so $\sqrt{n} > 0$; also $M^2 = u_j^2$ and $u_k^2 = |u_k|^2$ for every $k$. [L2, L4, L6, L7]

2.1 First chain: $M^2 = u_j^2 \le Q$ because a single nonnegative term is at most the sum, so $M = \sqrt{M^2} \le \sqrt{Q} = d_2(x,y)$; and $Q = \sum_{k<n}u_k^2 \le \sum_{k<n}M^2 = n M^2$ by monotonicity and scaling, so $d_2(x,y) = \sqrt{Q} \le \sqrt{nM^2} = \sqrt{n}\,M$. [step 1.1, step 1.2, L2, L4, L7]

2.2 Second chain: $M = |u_j| \le S$ because a single nonnegative term is at most the sum; and $S = \sum_{k<n}|u_k| \le \sum_{k<n}M = nM$ by monotonicity and scaling. [step 1.1, step 1.2, L2, L7]

2.3 Third chain: for every $k < n$, multiplying $|u_k| \le S$ by the nonnegative $|u_k|$ gives $u_k^2 = |u_k|^2 \le |u_k| S$, so summing and scaling gives $Q \le S \sum_{k<n}|u_k| = S^2$ and hence $d_2(x,y) = \sqrt{Q} \le \sqrt{S^2} = S = d_1(x,y)$; and Cauchy-Schwarz applied to the lists $a_k := |u_k|$ and $b_k := 1$ gives $S = \big|\sum_{k<n}|u_k|\cdot 1\big| \le \sqrt{\sum_{k<n}u_k^2}\ \sqrt{\sum_{k<n}1} = \sqrt{Q}\,\sqrt{n} = \sqrt{n}\, d_2(x,y)$. [step 1.1, step 1.2, L2, L4, L5, L6, L7]

3.1 The three chains are exactly Lipschitz equivalences with positive constants: $1 \cdot d_\infty \le d_2 \le \sqrt{n}\, d_\infty$, $1 \cdot d_\infty \le d_1 \le n\, d_\infty$ and $1 \cdot d_2 \le d_1 \le \sqrt{n}\, d_2$, the constants $1$, $\sqrt{n}$ and $n$ all being positive. [step 2.1, step 2.2, step 2.3, L7, L8]

4.1 Hence any two of $d_1$, $d_2$, $d_\infty$ are Lipschitz equivalent, and therefore uniformly equivalent and topologically equivalent; all three induce the same topology on $\mathbb{R}^n$. [step 3.1, L1, L8] ∎

## Remarks

- **The constants blow up with the dimension, and that is the whole point of the
  distinction.** The comparison $d_1 \le n\, d_\infty$ is Lipschitz for each
  fixed $n$ and useless uniformly in $n$, so no pair of constants serves all
  dimensions at once. Whether an analogue survives on spaces of infinite
  sequences is a question for a later page and is not addressed here.
- **Only $n \ge 1$ is treated**, because $d_\infty$ is a maximum over the index
  set $\{0,\dots,n-1\}$ and that set is empty when $n = 0$
  ([[lem-metrics-on-rn]]). For $n = 0$ the space $\mathbb{R}^0$ is a single
  point and $d_1$, $d_2$ are identically $0$ on it, while $d_\infty$ is not
  defined there at all, so there is nothing to compare.
- **Minkowski is not used here.** The triangle inequalities were settled in
  [[lem-metrics-on-rn]]; what this page needs is only the comparison of the three
  values, and that runs on the finite-sum laws and Cauchy-Schwarz.
