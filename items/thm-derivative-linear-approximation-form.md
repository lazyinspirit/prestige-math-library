---
id: thm-derivative-linear-approximation-form
kind: theorem
title: "The linear-approximation form of the derivative: $f$ is differentiable at $c$ with $f'(c) = L$ if and only if the remainder $r(x) = f(x) - f(c) - L(x-c)$ satisfies $\\lim_{x \\to c} r(x)/(x-c) = 0$; at most one $L$ does so, so $x \\mapsto f(c) + L(x-c)$ is the unique affine map approximating $f$ to first order at $c$"
status: draft
origin: session
deps: [def-derivative, def-function-limit, lem-function-limit-unique, def-limit-point-r, lem-of-abs-value]
justified_by: []
aliases: [thm-frechet-form-of-the-derivative]
landmark: true
short: "derivative as first-order approximation"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "Linear approximation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_approximation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}$. Write

$$\alpha_L : A \to \mathbb{R}, \qquad \alpha_L(x) := f(c) + L\,(x - c),$$

for the affine map through $(c, f(c))$ of slope $L$, and let
$r_L := f - \alpha_L$, that is $r_L(x) = f(x) - f(c) - L(x - c)$.

1. $f$ is differentiable at $c$ with $f'(c) = L$ ([[def-derivative]]) if and
   only if
   $$\lim_{x \to c} \frac{r_L(x)}{x - c} \;=\; 0 ,$$
   the quotient being taken as a function on $A \setminus \{c\}$
   ([[def-function-limit]]).
2. At most one real $L$ satisfies the condition of claim 1. Some real satisfies
   it exactly when $f$ is differentiable at $c$, and then that real is $f'(c)$.

So among all affine maps through $(c, f(c))$ there is at most one whose error
$r_L$ is small compared with $x - c$ near $c$; it exists exactly when $f$ is
differentiable at $c$, and its slope is the derivative. This is the sense in
which the derivative is a **first-order approximation** and not merely a
quotient.

**What the statement does not say.** It says nothing about how small $r_L$ is in
absolute terms, and nothing about any $x$ away from $c$. The assertion is only
that the ratio $r_L(x)/(x-c)$ tends to $0$; a second-order estimate on $r_L$
needs hypotheses this page does not have.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, a real $L$, and the functions $\alpha_L$ and $r_L = f - \alpha_L$ of the statement ([[def-limit-point-r]], [[def-derivative]]).

[L1] Differentiability at $c$ ([[def-derivative]]): the difference quotient $q(x) := (f(x) - f(c))/(x - c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $f$ is differentiable at $c$ with $f'(c) = L$ exactly when $\lim_{x \to c} q(x) = L$.

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L3] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); in particular the value $f'(c)$ is a single real.

[L4] Absolute value: $|u - 0| = |u|$, since $u - 0 = u$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For every $x \in A$ with $x \ne c$ the number $x - c$ is nonzero, so the quotient $r_L(x)/(x-c)$ is defined, and $r_L(x)/(x - c) = \bigl(f(x) - f(c)\bigr)/(x-c) - L(x-c)/(x-c) = q(x) - L$. So $x \mapsto r_L(x)/(x-c)$ and $x \mapsto q(x) - L$ are the same function on $A \setminus \{c\}$. [L1, algebra]

2.1 Hence for every $x \in A$ with $x \ne c$ one has $\bigl|r_L(x)/(x-c) - 0\bigr| = |q(x) - L|$. [step 1.1, L4]

3.1 Fix a real $\varepsilon > 0$ and a real $\delta > 0$. By step 2.1 the assertion "every $x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$ satisfies $|r_L(x)/(x-c) - 0| < \varepsilon$" and the assertion "every $x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$ satisfies $|q(x) - L| < \varepsilon$" are the same assertion. Quantifying over $\varepsilon$ and $\delta$, the two limit conditions of [L2] on the common domain $A \setminus \{c\}$, of which $c$ is a limit point by [L1], coincide. [step 2.1, L1, L2]

3.2 Therefore $\lim_{x \to c} r_L(x)/(x-c) = 0$ holds if and only if $\lim_{x \to c} q(x) = L$ holds, which by [L1] is exactly differentiability of $f$ at $c$ with $f'(c) = L$: claim 1. [step 2.1, L1, L2]

4.1 Suppose reals $L$ and $L'$ both satisfy the condition of claim 1. By step 3.2 the function $f$ is differentiable at $c$ with $f'(c) = L$ and with $f'(c) = L'$; the derivative is a single real by [L1] and [L3], so $L = L'$. Conversely, if $f$ is differentiable at $c$ then $L := f'(c)$ satisfies the condition, again by step 3.2. [step 3.1, step 3.2, L1, L3]

5.1 Claims 1 and 2 are proved, the first by step 3.2 and the second by step 4.1; so the affine map $\alpha_L$ with the stated approximation property is unique when it exists, and its slope is $f'(c)$. [step 3.2, step 4.1] ∎

## Remarks

- **Why this is worth stating separately.** The quotient form is what one computes with; the remainder form is what generalises, since it never divides by the increment and so survives verbatim in settings where the increment is not a number one may divide by. Nothing on this page needs that generality, but the equivalence is what licenses the phrase "best linear approximation" used informally elsewhere, and the phrase is otherwise unearned.

- **The two forms are the same $\varepsilon$-$\delta$ condition, not two conditions that happen to agree.** Step 1.1 is an identity of functions on $A \setminus \{c\}$, and everything after it is bookkeeping. In particular the proof spends no limit theorem at all: no algebra of limits, no sequences and no choice principle.

- **Uniqueness is the whole of claim 2, and it is inherited.** It comes from [[lem-function-limit-unique]], the same lemma that lets $f'(c)$ be written at all ([[def-derivative]]). Without a limit point of the domain there is no uniqueness anywhere in sight, and the phrase "the best approximation" would name nothing.
