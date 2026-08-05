---
id: thm-monotone-convergence
kind: theorem
title: "A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-sequence, def-sequence, def-real-limit, def-complete-ordered-field, def-bounded-set, lem-sup-epsilon, lem-sup-unique, lem-inf-epsilon, thm-infimum-property, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
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
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3 (Prop. 6.3.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2 (Thm 2.2.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals with range $S = \{x_k : k \in \mathbb{N}\}$, which is nonempty since $x_0 \in S$.

[L1] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded above has a unique supremum, which is an upper bound of it ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).

[L3] Epsilon characterisation of the supremum: if $u$ is an upper bound of a nonempty $S$, then $u = \sup S$ exactly when for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Epsilon characterisation of the infimum: if $\ell$ is a lower bound of a nonempty $T$, then $\ell = \inf T$ exactly when for every $\varepsilon > 0$ there is $t \in T$ with $t < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L5] Monotonicity: nondecreasing means $x_j \le x_k$ whenever $j \le k$, and nonincreasing means $x_j \ge x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

[L7] Absolute value: for $c > 0$, $|t| < c$ exactly when $-c < t < c$ ([[lem-of-abs-value]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(x_k)$ is nondecreasing and $S$ is bounded above. Since $S$ is nonempty, $u := \sup S$ exists, is unique, and is an upper bound of $S$. [given, L1, L8]

1.2 Assume $(y_k)$ is nonincreasing with range $T$ bounded below. Since $T$ is nonempty, $\ell := \inf T$ exists, is unique, and is a lower bound of $T$. [given, L2, L8]

2.1 Every term satisfies $x_k \le u$, because $x_k \in S$ and $u$ is an upper bound of $S$. [step 1.1, L1]

2.2 Every term satisfies $\ell \le y_k$, because $y_k \in T$ and $\ell$ is a lower bound of $T$. [step 1.2, L2]

2.3 Let $\varepsilon > 0$ be an arbitrary real. By [L3] there is $s \in S$ with $u - \varepsilon < s$, and every element of $S$ is a term, so $s = x_K$ for some $K \in \mathbb{N}$. [step 1.1, L3, choose]

2.4 Let $\varepsilon > 0$ be an arbitrary real. By [L4] there is $t \in T$ with $t < \ell + \varepsilon$, and $t = y_L$ for some $L \in \mathbb{N}$. [step 1.2, L4, choose]

3.1 For every $k \ge K$ we have $x_K \le x_k$ by monotonicity, hence $u - \varepsilon < x_K \le x_k$. [step 2.3, L5]

3.2 For every $k \ge L$ we have $y_k \le y_L$ by monotonicity, hence $y_k \le y_L < \ell + \varepsilon$. [step 2.4, L5]

4.1 For every $k \ge K$: subtracting $u$ from $u - \varepsilon < x_k \le u$ gives $-\varepsilon < x_k - u \le 0 < \varepsilon$, so $|x_k - u| < \varepsilon$. [step 2.1, step 3.1, L7, algebra]

4.2 For every $k \ge L$: subtracting $\ell$ from $\ell \le y_k < \ell + \varepsilon$ gives $-\varepsilon < 0 \le y_k - \ell < \varepsilon$, so $|y_k - \ell| < \varepsilon$. [step 2.2, step 3.2, L7, algebra]

5.1 The real $\varepsilon > 0$ was arbitrary and $K$ was produced from it, so $(x_k)$ converges to $u = \sup S$, which is claim 1. [step 4.1, L6]

5.2 The real $\varepsilon > 0$ was arbitrary and $L$ was produced from it, so $(y_k)$ converges to $\ell = \inf T$, which is claim 2. [step 4.2, L6]

6.1 Both claims are established, so a nondecreasing sequence bounded above converges to the supremum of its range and a nonincreasing sequence bounded below converges to the infimum of its range. [step 5.1, step 5.2] ∎

## Remarks

- **Only one half is proved twice.** Claim 2 could instead be deduced from claim
  1 by reflection, since $(-y_k)$ is nondecreasing and bounded above and
  $\inf T = -\sup(-T)$ ([[thm-infimum-property]]). The direct argument is written
  out because it is no longer, and because it puts [[lem-inf-epsilon]] to work in
  the place it was proved for, rather than routing an infimum statement through a
  supremum statement and a sign change.

- **The limit is the supremum of the range, not merely some upper bound.** That
  identification is what [[lem-sup-epsilon]] supplies and it is the useful part
  of the theorem: it is how a limit is *computed* from a monotone construction,
  as in the recursive sequences of the examples page, rather than merely shown to
  exist.

- **Boundedness on the other side is automatic and is not a hypothesis.** A
  nondecreasing sequence is bounded below by $x_0$ ([[def-monotone-sequence]]),
  so "nondecreasing and bounded above" already means "nondecreasing and bounded";
  this is what makes [[cor-monotone-converges-iff-bounded]] an equivalence rather
  than a one-sided statement.

- **Without the hypothesis of boundedness the conclusion fails completely, and
  fails in a describable way**: a nondecreasing sequence that is not bounded
  above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]]), so a
  nondecreasing sequence either converges to the supremum of its range or runs
  away, with no third possibility.
