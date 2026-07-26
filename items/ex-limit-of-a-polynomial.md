---
id: ex-limit-of-a-polynomial
kind: example
title: "Every polynomial has $\\lim_{x \\to c} p(x) = p(c)$, and rational functions do so away from the zeros of the denominator"
status: draft
origin: session
deps: [thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-finite-sum, def-integer-power, thm-induction-principle, lem-of-abs-value, def-field]
justified_by: []
aliases: []
landmark: false
short: "limits of polynomials"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Polynomial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Polynomial"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

For a list $a_0, \dots, a_{n-1}$ of reals write

$$p(x) \;:=\; \sum_{j < n} a_j x^j$$

for the finite sum of [[def-finite-sum]] applied to the list
$j \mapsto a_j x^j$, with powers as in [[def-integer-power]]. So
$\sum_{j < 0}$ is the empty sum $0$, and $p$ is a function $\mathbb{R} \to
\mathbb{R}$; these are the **polynomial functions**.

**Claim 1.** For every polynomial function $p$ and every $c \in \mathbb{R}$, the
limit of $p$ at $c$ exists and

$$\lim_{x \to c} p(x) \;=\; p(c) .$$

**Claim 2.** Let $p$ and $q$ be polynomial functions and let $c \in \mathbb{R}$
satisfy $q(c) \ne 0$. Put $A_q := \{\, x \in \mathbb{R} : q(x) \ne 0 \,\}$. Then
$c \in A_q$, the point $c$ is a limit point of $A_q$, the quotient $p/q$ is
defined on $A_q$, its limit at $c$ exists, and

$$\lim_{x \to c} (p/q)|_{A_q}(x) \;=\; \frac{p(c)}{q(c)} .$$

Everything is read off from [[thm-algebra-of-function-limits]] once two trivial
limits are in hand: that of a constant function and that of the identity. Note
that claim 1 is exactly the statement that $\lim_{x \to c} p(x) = p(c)$, the
equality that [[fs-limit-equals-value]] shows is *not* automatic; for polynomials
it is a theorem, and the algebra of limits is what proves it.

## Facts & Assumptions

**Given:** A list $a_0, \dots, a_{n-1}$ of reals and the polynomial function $p(x) = \sum_{j<n} a_j x^j$; a second polynomial function $q$; and a real $c$ ([[def-finite-sum]], [[def-integer-power]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Algebra of function limits: at a limit point $c$ of the common domain, the limits of $f + g$, of $\alpha f$ and of $fg$ exist and equal $L + M$, $\alpha L$ and $LM$; and if $M \ne 0$ the limit of $(f/g)$ restricted to $\{g \ne 0\}$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L3] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L4] Finite sums: $\sum_{j<0} a_j = 0$ and $\sum_{j<n+1} a_j = \bigl(\sum_{j<n} a_j\bigr) + a_n$ ([[def-finite-sum]]).

[L5] Powers: $x^0 = 1$ and $x^{j+1} = x^j \cdot x$ for every $x \in \mathbb{R}$ and $j \in \mathbb{N}$ ([[def-integer-power]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] Sign preservation: if the limit of $g$ at $c$ is nonzero then $c$ is a limit point of $\{\, x : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L8] Absolute value: $|0| = 0$; and field arithmetic ([[lem-of-abs-value]], [[def-field]]).

## Verification

**Proof technique:** direct.

1.1 Every $c \in \mathbb{R}$ is a limit point of $\mathbb{R}$, so [L1] and [L2] apply at $c$ to functions defined on $\mathbb{R}$. [L3]

1.2 A constant function $x \mapsto a$ has limit $a$ at $c$: $|a - a| = |0| = 0 < \varepsilon$ for every real $\varepsilon > 0$, any $\delta$ serving. [L1, L8]

1.3 The identity function $x \mapsto x$ has limit $c$ at $c$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; then $0 < |x - c| < \delta$ gives $|x - c| < \varepsilon$. [L1]

2.1 For every $j \in \mathbb{N}$ the function $x \mapsto x^j$ has limit $c^j$ at $c$. This is an induction on $j$ [L6]. For $j = 0$ the function is the constant $1$ by [L5], and step 1.2 applies with $a = 1 = c^0$. If the claim holds for $j$, then $x^{j+1} = x^j \cdot x$ by [L5], and the product rule of [L2] applied to $x \mapsto x^j$ and the identity gives limit $c^j \cdot c = c^{j+1}$. [step 1.2, step 1.3, L2, L5, L6]

3.1 For every $j \in \mathbb{N}$ the function $x \mapsto a_j x^j$ has limit $a_j c^j$ at $c$, by the scalar rule of [L2] applied to step 2.1 with $\alpha = a_j$. [step 2.1, L2]

4.1 For every $n \in \mathbb{N}$ the function $x \mapsto \sum_{j<n} a_j x^j$ has limit $\sum_{j<n} a_j c^j$ at $c$. This is an induction on $n$ [L6]. For $n = 0$ both the function and the asserted limit are the empty sum $0$ by [L4], and step 1.2 applies. If the claim holds for $n$, then $\sum_{j<n+1} a_j x^j = \bigl(\sum_{j<n} a_j x^j\bigr) + a_n x^n$ by [L4], and the sum rule of [L2] applied to the inductive hypothesis and step 3.1 gives limit $\bigl(\sum_{j<n} a_j c^j\bigr) + a_n c^n = \sum_{j<n+1} a_j c^j$. Taking the given $n$, the limit of $p$ at $c$ exists and equals $p(c)$: claim 1. [step 1.2, step 3.1, L2, L4, L6]

5.1 Now let $q$ be a polynomial function with $q(c) \ne 0$ and put $A_q := \{\, x \in \mathbb{R} : q(x) \ne 0 \,\}$. By step 4.1 the limit of $q$ at $c$ exists and equals $q(c) \ne 0$, so [L7] gives that $c$ is a limit point of $A_q$; and $c \in A_q$ because $q(c) \ne 0$. [step 4.1, L7]

6.1 The quotient rule of [L2], applied on $\mathbb{R}$ to $p$ and $q$ with $\lim_{x \to c} q(x) = q(c) \ne 0$, gives that the limit of $(p/q)|_{A_q}$ at $c$ exists and equals $p(c)/q(c)$: claim 2. [step 1.1, step 4.1, step 5.1, L2] ∎

## Remarks

- **Two inductions, and why they are separate.** The first builds the monomials from the identity by repeated multiplication; the second builds the polynomial from the monomials by repeated addition. Each is an induction on the recursion clause of the object it builds ([[def-integer-power]] and [[def-finite-sum]] respectively), and neither can be replaced by dots.

- **Index hygiene.** The sum is written $\sum_{j<n}$, whose first index is $j = 0$ and whose empty case $n = 0$ is the zero function; the base case of step 4.1 is that empty case, and $x^0 = 1$ holds for **every** real $x$ including $0$ ([[def-integer-power]]), so no index or value is left undefined.

- **What claim 2 does not say.** It says nothing at a zero of $q$. There the quotient is undefined, and whether it has a limit depends on $p$ as well. It may have one: on $\{\, x : x \ne 0 \,\}$ the quotient $x^2/x$ equals $x$, whose limit at $0$ is $0$ by step 1.3 and [[lem-limit-is-local]]. It may also fail to have one. Nothing on this page decides such cases in general.
