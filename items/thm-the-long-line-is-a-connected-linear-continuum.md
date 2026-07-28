---
id: thm-the-long-line-is-a-connected-linear-continuum
kind: theorem
title: "The long ray is a linear continuum, hence connected; every one of its at most countable subsets is bounded above, assuming countable choice"
status: draft
origin: session
deps: [def-the-long-line, def-order-topology-on-a-linearly-ordered-set,
       thm-a-linear-continuum-is-connected, lem-ordinal-basics, lem-ordinal-trichotomy,
       def-ordinal, def-limit-ordinal, def-first-uncountable-ordinal,
       thm-omega-one-is-the-least-uncountable-ordinal,
       thm-countable-subsets-of-omega-one-are-bounded, def-countable-choice,
       def-countable, lem-countable-iff-surjection-from-n, def-complete-ordered-field,
       lem-sup-unique, def-bounded-set, def-interval, def-upper-bound,
       def-partial-order, def-connected-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Long line (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Long_line_(topology)"
    - title: "Linear continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_continuum"
pipeline_run: null
---

## Statement

Let $R = \omega_1 \times [0,1)$ be the closed long ray with its lexicographic
order and its order topology ([[def-the-long-line]]). Then:

1. **$R$ is a linear continuum**
   ([[def-order-topology-on-a-linearly-ordered-set]]): it has at least two
   elements, it is order-dense, and it has the least upper bound property.
2. **$R$ is connected**, and so is every order-convex subset of $R$; in
   particular every initial segment
   $[0_R, x] = \{\, y \in R : y \le x \,\}$ is connected.
3. **Assuming the Axiom of Countable Choice $\mathrm{AC}_\omega$**
   ([[def-countable-choice]]): every at most countable subset of $R$
   ([[def-countable]]) has an upper bound in $R$; so no at most countable subset
   of $R$ is unbounded above.

Claims 1 and 2 are theorems of ZF. Claim 3 carries the hypothesis because it is
inherited whole from [[thm-countable-subsets-of-omega-one-are-bounded]], whose
own statement carries it, and it is spent at exactly one step below.

**Nothing here says $R$ is path-connected**, and this proof gives no path
between two of its points; that question needs an order isomorphism of each
initial segment with $[0,1]$, which is not constructed on this page.

## Facts & Assumptions

**Given:** The closed long ray $R = \omega_1 \times [0,1)$ with the lexicographic order and its order topology.

[A1] The lexicographic order on $R$ is a total order with least element $0_R = (0,0)$; $(\alpha,s) < (\beta,t)$ means $\alpha < \beta$, or $\alpha = \beta$ and $s < t$; every $s$ occurring satisfies $0 \le s < 1$ ([[def-the-long-line]], [[def-partial-order]], [[def-interval]]).

[A2] For a set $A$ of ordinals, $\bigcup A$ is an ordinal, it is an upper bound of $A$ under $\le$, and it is $\le$ every upper bound of $A$; $\alpha \subseteq \beta$ holds exactly when $\alpha \le \beta$; $\alpha^{+}$ is an ordinal with $\alpha < \alpha^{+}$, and any two ordinals are comparable ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-ordinal]], [[def-upper-bound]]).

[A3] The elements of $\omega_1$ are exactly the at most countable ordinals, and $\omega_1$ is a limit ordinal, so $\alpha \in \omega_1$ implies $\alpha^{+} \in \omega_1$ ([[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-limit-ordinal]]).

[A4] $\mathbb{R}$ has the least upper bound property and least upper bounds in it are unique; for reals $s < t$ one has $s < (s+t)/2 < t$; $0 \le s < 1$ gives $s < (s+1)/2 < 1$ ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[A5] A linear continuum is a linearly ordered set with at least two elements that is order-dense and has the least upper bound property; a linear continuum and each of its order-convex subsets are connected in the order topology ([[def-order-topology-on-a-linearly-ordered-set]], [[thm-a-linear-continuum-is-connected]], [[def-connected-space]]).

[A6] Assuming $\mathrm{AC}_\omega$, every at most countable $A \subseteq \omega_1$ satisfies $\sup A = \bigcup A \in \omega_1$ with $\alpha \le \sup A$ for every $\alpha \in A$ ([[thm-countable-subsets-of-omega-one-are-bounded]], claim (a), [[def-countable-choice]]).

[A7] A nonempty set is at most countable exactly when some surjection $\mathbb{N} \to$ it exists ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 $R$ has at least two elements, namely $(0,0)$ and $(0,1/2)$, which differ and satisfy $(0,0) < (0,1/2)$ by [A1] and [A4]. [A1, A4]

1.2 $R$ is order-dense. Let $(\alpha,s) < (\beta,t)$. If $\alpha = \beta$ then $s < t$ and $(\alpha, (s+t)/2)$ lies strictly between, by [A4]. If $\alpha < \beta$ then $s < (s+1)/2 < 1$ by [A4], so $(\alpha, (s+1)/2) \in R$ lies strictly above $(\alpha,s)$ and strictly below $(\beta,t)$, its first coordinate being $\alpha < \beta$. [A1, A4]

1.3 Let $S \subseteq R$ be nonempty with an upper bound $(\beta_0, t_0)$, and put $A := \{\, \alpha \in \omega_1 : (\alpha, s) \in S \text{ for some } s \,\}$, a nonempty set of ordinals with $\alpha \le \beta_0$ for every $\alpha \in A$; so $\gamma := \bigcup A$ is an ordinal with $\gamma \le \beta_0$, hence $\gamma \in \omega_1$ by [A2] and [A3]. [A1, A2, A3]

1.4 For claim 3 let $D \subseteq R$ be at most countable. If $D = \varnothing$ then $0_R$ is an upper bound of $D$ by [A1] and there is nothing more to prove, so assume $D \ne \varnothing$ and let $A_D := \{\, \alpha : (\alpha,s) \in D \text{ for some } s \,\}$, a nonempty subset of $\omega_1$. [A1, A7]

2.1 Suppose first $\gamma \in A$, and put $T := \{\, s \in [0,1) : (\gamma, s) \in S \,\}$, which is nonempty and bounded above by $1$; let $u := \sup T$ in $\mathbb{R}$, which exists and is unique by [A4], with $0 \le u \le 1$. [step 1.3, A4]

2.2 Suppose instead $\gamma \notin A$; then every $\alpha \in A$ satisfies $\alpha < \gamma$, since $\alpha \le \gamma$ by [A2] and $\alpha \ne \gamma$. [step 1.3, A2]

2.3 $A_D$ is at most countable: by [A7] there is a surjection $f : \mathbb{N} \to D$, and composing it with the first-coordinate map gives a surjection $\mathbb{N} \to A_D$, so [A7] applies again. [step 1.4, A7]

3.1 In the case of step 2.1 with $u < 1$, the element $(\gamma, u) \in R$ is the least upper bound of $S$: it bounds $S$, since $(\alpha,s) \in S$ has $\alpha \le \gamma$ and, when $\alpha = \gamma$, $s \in T$ so $s \le u$; and any upper bound $(\beta,t)$ of $S$ has $\beta \ge \gamma$, because $S$ contains an element with first coordinate $\gamma$, and if $\beta = \gamma$ then $t$ bounds $T$ so $t \ge u$. [step 2.1, A1, A4]

3.2 In the case of step 2.1 with $u = 1$, the element $(\gamma^{+}, 0) \in R$ is the least upper bound of $S$: it bounds $S$, since every $(\alpha,s) \in S$ has $\alpha \le \gamma < \gamma^{+}$; and an upper bound $(\beta,t)$ cannot have $\beta < \gamma$, $S$ containing an element with first coordinate $\gamma$, nor $\beta = \gamma$, since then $t$ would bound $T$ and give $t \ge u = 1$ against $t < 1$; so $\beta > \gamma$, that is $\beta \ge \gamma^{+}$ by [A2], and $(\beta,t) \ge (\gamma^{+},0)$. Here $\gamma^{+} \in \omega_1$ by [A3]. [step 2.1, A1, A2, A3, A4]

3.3 In the case of step 2.2, the element $(\gamma, 0) \in R$ is the least upper bound of $S$: it bounds $S$, since every $(\alpha,s) \in S$ has $\alpha < \gamma$; and if an upper bound $(\beta,t)$ had $\beta < \gamma = \bigcup A$ then $\beta$ would not bound $A$ by [A2], so some $\alpha \in A$ has $\beta < \alpha$ and the corresponding element of $S$ exceeds $(\beta,t)$ — impossible; so $\beta \ge \gamma$ and $(\beta,t) \ge (\gamma,0)$. [step 2.2, A1, A2]

3.4 By [A6] the ordinal $\mu := \sup A_D$ lies in $\omega_1$ and satisfies $\alpha \le \mu$ for every $\alpha \in A_D$; this is the one step at which $\mathrm{AC}_\omega$ is spent. [step 2.3, A6]

4.1 Steps 1.3, 2.1, 2.2, 3.1, 3.2 and 3.3 exhaust the cases and give a least upper bound in each, so $R$ has the least upper bound property; with steps 1.1 and 1.2 this makes $R$ a linear continuum by [A5]. This is claim 1. [step 1.1, step 1.2, step 1.3, step 3.1, step 3.2, step 3.3, A5]

5.1 Claim 2 follows: $R$ is connected and every order-convex subset of $R$ is connected by [A5], and each initial segment $[0_R, x]$ is order-convex, being defined by an inequality closed under passing to intermediate points. [step 4.1, A5]

6.1 Then $\mu^{+} \in \omega_1$ by [A3], and $(\mu^{+}, 0) \in R$ is an upper bound of $D$: every $(\alpha,s) \in D$ has $\alpha \in A_D$, hence $\alpha \le \mu < \mu^{+}$ by [A2] and step 3.4, so $(\alpha,s) < (\mu^{+},0)$. This is claim 3. [step 1.4, step 3.4, A1, A2, A3] ∎

## Remarks

- **Why the least upper bound argument splits into three cases and not two.** The supremum of a set of blocks may be attained in a block, in which case the real supremum inside that block either is attained below $1$ (step 3.1) or escapes to the top of the block (step 3.2), and the escape has to be caught by the *next* block's least element. The third case is that the blocks themselves have no largest member (step 3.3). Each case produces a different element of $R$, and omitting the middle one is the standard slip: it is exactly the configuration in which the naive answer $(\gamma, \sup T)$ is not an element of $R$ at all.

- **What countable choice buys, and what it does not.** It is used at exactly one step, and only through [[thm-countable-subsets-of-omega-one-are-bounded]]. It says nothing about claims 1 and 2, which are proved in ZF, and is not needed to know that $R$ has no greatest element, which is immediate from [[def-the-long-line]].

- **The consequence that makes the long ray useful.** Claim 3 says that approaching the far end of $R$ cannot be done along an at most countable set. That is what separates $R$ from every half-line built earlier: in $[0,\infty)$ the naturals are unbounded, whereas in $R$ no at most countable set is.
