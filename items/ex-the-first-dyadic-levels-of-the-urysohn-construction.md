---
id: ex-the-first-dyadic-levels-of-the-urysohn-construction
kind: example
title: "The sets $U_0, U_1, U_{1/2}, U_{1/4}, U_{3/4}$ of the Urysohn construction computed for two disjoint closed subsets of $\\mathbb{R}$"
status: draft
origin: session
deps: [thm-urysohn-lemma, def-the-dyadic-rationals-of-the-unit-interval,
       lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       lem-normality-via-shrinking, def-normal-and-t4-spaces,
       thm-metric-spaces-are-completely-normal, def-interval,
       lem-real-line-is-a-metric-space, thm-closure-characterisation-top]
justified_by: []
aliases: []
landmark: false
short: "dyadic levels computed by hand"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Take $A := (-\infty,0]$ and $B := [1,\infty)$ in $\mathbb{R}$, disjoint closed
sets of the normal space $\mathbb{R}$ ([[thm-metric-spaces-are-completely-normal]],
[[def-interval]]). For $r$ a dyadic rational of $[0,1]$ with $r<1$
([[def-the-dyadic-rationals-of-the-unit-interval]]) put

$$U_r \;:=\; \Big(-\infty,\ \tfrac{1+r}{2}\Big), \qquad U_1 := \mathbb{R}.$$

These are open, and satisfy $\overline{U_r} \subseteq U_s$ for every $r<s$ in
$D$ and $U_1 = \mathbb{R}$, so $(U_r)_{r \in D}$ is a legitimate instance of
the family hypothesised in
[[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] and could
arise from the construction inside [[thm-urysohn-lemma]] applied to $A,B$. In
particular:

$$U_0 = \big(-\infty,\ \tfrac12\big), \quad U_{1/4} = \big(-\infty,\ \tfrac58\big), \quad U_{1/2} = \big(-\infty,\ \tfrac34\big), \quad U_{3/4} = \big(-\infty,\ \tfrac78\big), \quad U_1 = \mathbb{R}.$$

## Facts & Assumptions

**Given:** $A = (-\infty,0]$, $B=[1,\infty)$ in $\mathbb{R}$, and $U_r := (-\infty, (1+r)/2)$ for dyadic $r<1$, $U_1 := \mathbb{R}$.

[L1] $\overline{(-\infty,c)} = (-\infty,c]$ for real $c$, and $(-\infty,c) \subseteq (-\infty,c')$ exactly when $c \le c'$. The closure identity is two lines from the cited items: $(-\infty,c]$ is closed, since its complement $(c,\infty)$ contains an interval $(x - r, x + r)$ around each of its points $x$ (take $r = x - c$), which is the open-set criterion of [[lem-real-line-is-a-metric-space]] claim 3; and $c$ lies in the closure of $(-\infty,c)$, since every interval $(c - r, c + r)$ with $r > 0$ meets it, so by [[thm-closure-characterisation-top]] claims 1 and 2 the closure of $(-\infty,c)$ is $(-\infty,c]$ exactly. The inclusion clause is immediate from [[def-interval]] and the order. ([[lem-real-line-is-a-metric-space]], [[thm-closure-characterisation-top]], [[def-interval]])

[L2] $A \subseteq U_0$: every $x \le 0$ satisfies $x < 1/2$.

## Verification

**Proof technique:** direct.

1.1 For dyadic $r<s<1$: $\overline{U_r} = \big(-\infty,\ (1+r)/2\big]$ by [L1], and $(1+r)/2 < (1+s)/2$ since $r<s$, so $\overline{U_r} \subseteq \big(-\infty,\ (1+s)/2\big) = U_s$. [given, L1, algebra]

1.2 For dyadic $r<1$: $\overline{U_r} = \big(-\infty,(1+r)/2\big]$, and $(1+r)/2 < 1$ since $r<1$, so $\overline{U_r} \subseteq (-\infty,1) \subseteq \mathbb{R} = U_1$. [given, L1, algebra]

1.3 $A \subseteq U_0$ by [L2]; and $B \subseteq \mathbb{R} \setminus U_r$ for every dyadic $r<1$, since $(1+r)/2 < 1 \le x$ for $x \in B$, so $x \notin U_r$. [given, L2, algebra]

2.1 By step 1.1 and step 1.2, $\overline{U_r} \subseteq U_s$ for every $r<s$ in $D$, and $U_1 = \mathbb{R}$; so $(U_r)_{r\in D}$ satisfies the hypotheses of [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]], and $f(x) := \inf(\{r\in D : x \in U_r\}\cup\{1\})$ is continuous $\mathbb{R} \to [0,1]$. By step 1.3, $A \subseteq f^{-1}(\{0\})$ (every $r \ge 0$ works for $x\in A$, so $f(x) \le 0$, and $f \ge 0$ always) and $B \subseteq f^{-1}(\{1\})$ (no dyadic $r<1$ works for $x \in B$). [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **The five requested sets are read off the general formula.** $U_0, U_{1/4}, U_{1/2}, U_{3/4}$ are nested, each strictly inside the next by step 1.1, and $U_1 = \mathbb{R}$ is the point at which the family widens all at once, in line with the discussion in [[thm-urysohn-lemma]]'s own Remarks of why the recursion tracks $X \setminus B$ rather than $X$ until the very last step.

- **This is one legitimate family among many.** [[thm-urysohn-lemma]] never claims uniqueness, and the family here is not literally the output of the dependent-choice recursion in that item's proof — it is a hand-picked family satisfying the same two hypotheses, chosen because its members have closed forms.
