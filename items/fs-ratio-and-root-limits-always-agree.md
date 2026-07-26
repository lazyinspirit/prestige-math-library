---
id: fs-ratio-and-root-limits-always-agree
kind: false-statement
title: "FALSE: $\\limsup a_k^{1/k} = \\limsup a_{k+1}/a_k$ for every positive sequence"
status: published
origin: session
deps: [thm-ratio-root-inequality, def-limsup-liminf, def-rational-power, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, thm-convergence-iff-limsup-equals-liminf, lem-nth-root-of-constant-tends-to-one, thm-nth-roots-exist, lem-rational-power-laws, lem-rational-power-monotone, def-integer-power, lem-power-laws, thm-squeeze, thm-algebra-of-limits, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-real-limit, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-inverse-positive, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain]
aliases: []
landmark: false
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.35, 3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(a_k)$ of reals with $a_k > 0$ for all $k$,

$$\limsup_{k} a_{k+1}^{1/(k+1)} \;=\; \limsup_{k} \frac{a_{k+1}}{a_k},$$

that is, the limit superior of the root sequence equals the limit superior of the
ratio sequence. (The root family is written with the shift of
[[thm-ratio-root-inequality]], since $a_k^{1/k}$ is undefined at $k = 0$;
classically the claim reads $\limsup_n a_n^{1/n} = \limsup_n a_{n+1}/a_n$.)

What is true is the chain
$$\liminf_{k} \frac{a_{k+1}}{a_k} \;\le\; \liminf_{k} a_{k+1}^{1/(k+1)} \;\le\; \limsup_{k} a_{k+1}^{1/(k+1)} \;\le\; \limsup_{k} \frac{a_{k+1}}{a_k}$$
of [[thm-ratio-root-inequality]]. The claim above collapses its right-hand
inequality to an equality, and that fails: the roots can converge while the
ratios oscillate. This is exactly why a root criterion decides cases that a ratio
criterion cannot.

The witness is $a_k = 2^{-k + (-1)^k}$. The computation below establishes all four
quantities for it, namely
$$\liminf_{k} \frac{a_{k+1}}{a_k} = \frac{1}{8}, \qquad \limsup_{k} \frac{a_{k+1}}{a_k} = 2, \qquad \lim_{k} a_{k+1}^{1/(k+1)} = \frac{1}{2},$$
and it is recorded as a named example on the companion page.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequence $t_k$ defined to be $2$ when $s_k = 1$ and $1/2$ when $s_k = -1$; the sequence $a_k := 2^{-k} t_k$; the ratios $q_k := a_{k+1}/a_k$ and the roots $r_k := a_{k+1}^{1/(k+1)}$.

[L1] The alternating sequence: $s_0 = 1$, $s_{k+1} = -s_k$, $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]); a strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L2] Limit superior and limit inferior in $\overline{\mathbb{R}}$, their existence for every sequence, and the least-upper-bound and greatest-lower-bound descriptions of the tail bounds ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-extended-reals]]).

[L3] A sequence converging to a real $c$ has $\limsup = \liminf = c$ ([[thm-convergence-iff-limsup-equals-liminf]]).

[L4] Powers and roots of positive reals: integer powers with $2^{m} 2^{m'} = 2^{m+m'}$ and $2^{-m} = 1/2^{m}$; $(xy)^{1/n} = x^{1/n} y^{1/n}$; the integer power is the rational power at an integer exponent, so $\big(2^{-n}\big)^{1/n} = 2^{-n/n} = 2^{-1}$; roots of positive reals are positive; and $0 < x \le y$ implies $x^{1/n} \le y^{1/n}$ ([[def-integer-power]], [[lem-power-laws]], [[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[thm-nth-roots-exist]]).

[L5] For every real $b > 0$ the sequence $b^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L6] Squeeze theorem and the scalar rule for limits ([[thm-squeeze]], [[thm-algebra-of-limits]], [[def-real-limit]], [[def-sequence]]).

[L7] Absolute value and order: $|t| = 1$ forces $t = 1$ or $t = -1$; $0 < 1$, so $1/2 < 1 < 2$ and $1/8 < 2$, and $1/2 \ne 2$; reciprocals reverse the order; multiplying by a positive preserves it ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L8] The true chain of inequalities relating the four quantities ([[thm-ratio-root-inequality]]).

[L9] The refuted claim: for every sequence of positive reals, $\limsup_k a_{k+1}^{1/(k+1)} = \limsup_k a_{k+1}/a_k$.

## Refutation

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$ because $|s_k| = 1$, so $t_k$ is well defined, with $t_k \in \{2, 1/2\}$ and $t_k > 0$; hence $a_k = 2^{-k} t_k > 0$ for every $k$, and $(a_k)$ is a sequence of positive reals to which the claim applies. This is the sequence usually written $a_k = 2^{-k + (-1)^k}$. [given, L1, L4, L7, L9]

1.2 Since $s_{k+1} = -s_k$ and $1 \ne -1$, exactly one of the two situations "$s_k = 1$ and $s_{k+1} = -1$" and "$s_k = -1$ and $s_{k+1} = 1$" occurs at each index $k$. In the first, $t_k = 2$ and $t_{k+1} = 1/2$; in the second, $t_k = 1/2$ and $t_{k+1} = 2$. [given, L1, L7]

1.3 For every $n$ both values of $s$ occur at an index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$ and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1]

2.1 The ratios are $q_k = a_{k+1}/a_k = \big(2^{-(k+1)} t_{k+1}\big)/\big(2^{-k} t_k\big) = 2^{-1} t_{k+1}/t_k$, which by step 1.2 equals $2^{-1}(1/2)/2 = 1/8$ when $s_k = 1$ and $2^{-1} \cdot 2/(1/2) = 2$ when $s_k = -1$. [step 1.1, step 1.2, L4, L7, algebra]

2.2 The roots are $r_k = \big(2^{-(k+1)} t_{k+1}\big)^{1/(k+1)} = \big(2^{-(k+1)}\big)^{1/(k+1)} t_{k+1}^{1/(k+1)} = 2^{-1} t_{k+1}^{1/(k+1)}$. [step 1.1, L4]

2.3 Since $1/2 \le t_{k+1} \le 2$ for every $k$ and $x \mapsto x^{1/(k+1)}$ is nondecreasing on the positive reals, $(1/2)^{1/(k+1)} \le t_{k+1}^{1/(k+1)} \le 2^{1/(k+1)}$; both bounding sequences converge to $1$ by [L5], so the squeeze theorem gives $t_{k+1}^{1/(k+1)} \to 1$. [step 1.1, L4, L5, L6, L7]

3.1 By steps 1.2 and 1.3 the tail range of $(q_k)$ at every index $n$ is exactly $\{1/8, 2\}$: those are the only values, and each occurs at some index $\ge n$. Its least upper bound in $\overline{\mathbb{R}}$ is $2$ and its greatest lower bound is $1/8$, since $1/8 < 2$ and both belong to the set; hence $\limsup_k q_k$ is the greatest lower bound of $\{2\}$, namely $2$, and $\liminf_k q_k$ is the least upper bound of $\{1/8\}$, namely $1/8$. [step 2.1, step 1.3, L2, L7]

3.2 By steps 2.2 and 2.3 and the scalar rule, $r_k = 2^{-1} t_{k+1}^{1/(k+1)} \to 2^{-1} \cdot 1 = 1/2$, so $\limsup_k r_k = \liminf_k r_k = 1/2$. [step 2.2, step 2.3, L3, L6]

4.1 For this sequence the claim asserts $\limsup_k r_k = \limsup_k q_k$, that is $1/2 = 2$; but $1/2 < 1 < 2$, so the two are different and the claim fails. [step 3.1, step 3.2, L7, L9]

5.1 The claim is therefore false. The true chain [L8] reads here $1/8 \le 1/2 \le 1/2 \le 2$, so both outer inequalities are strict for this witness while the middle one is an equality. [step 4.1, step 3.1, step 3.2, L7, L8, L9] ∎

## Remarks

- **The witness is named on the companion page** as
  [[ex-ratio-fails-root-succeeds]], which quotes the four values computed here.

- **This is the standard witness that the root criterion is strictly stronger.**
  The ratios oscillate between $1/8$ and $2$, so a criterion reading only
  $\limsup_k q_k = 2 > 1$ learns nothing about whether $a_k \to 0$; the roots
  converge to $1/2 < 1$, which settles it. The same sequence reappears wherever
  the ratio and root tests are compared.

- **Why the roots are so much better behaved.** Taking an $n$-th root divides the
  exponent by $n$, so the bounded perturbation $(-1)^k$ in the exponent of
  $2^{-k+(-1)^k}$ contributes $2^{\pm 1/(k+1)}$, which tends to $1$. The ratio, by
  contrast, differences the exponent, and a bounded oscillation does not shrink
  under differencing.

- **Both outer inequalities of [[thm-ratio-root-inequality]] are strict here, but
  the middle one is not.** A witness making all three strict at once is
  [[ex-strict-ratio-root-chain]].
