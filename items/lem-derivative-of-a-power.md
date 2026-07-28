---
id: lem-derivative-of-a-power
kind: lemma
title: "For a natural $n \\ge 1$ the function $x \\mapsto x^{n}$ is differentiable everywhere with derivative $\\iota(n)\\,x^{\\,n-1}$; for $n = 0$ it is the constant $1$, with derivative $0$; for a natural $n \\ge 1$ the function $x \\mapsto x^{-n}$ is differentiable at every $x \\ne 0$ with derivative $-\\iota(n)\\,x^{-n-1}$; consequently every polynomial function is differentiable at every real, with the derivative computed term by term"
status: draft
origin: session
deps: [def-derivative, thm-algebra-of-derivatives, def-integer-power, lem-power-laws, def-canonical-natural, thm-induction-principle, def-finite-sum, def-function-limit, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: [lem-power-rule]
landmark: true
short: "the power rule"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Powers are those of [[def-integer-power]], and $\iota : \mathbb{N} \to
\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that
$\iota(0) = 0$ and $\iota(m+1) = \iota(m) + 1$. Let $n \in \mathbb{N}$.

1. The function $p_0 : \mathbb{R} \to \mathbb{R}$, $p_0(x) = x^{0}$, is the
   constant function $1$, and it is differentiable at every $c \in \mathbb{R}$
   with $p_0'(c) = 0$ ([[def-derivative]]).
2. For $n \ge 1$ the function $p_n : \mathbb{R} \to \mathbb{R}$,
   $p_n(x) = x^{n}$, is differentiable at every $c \in \mathbb{R}$, and
   $$p_n'(c) \;=\; \iota(n)\,c^{\,n-1} .$$
3. For $n \ge 1$ put $A_0 := \{\, x \in \mathbb{R} : x \ne 0 \,\}$. The function
   $m_n : A_0 \to \mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every
   $c \in A_0$ as a function on $A_0$, and
   $$m_n'(c) \;=\; -\,\iota(n)\,c^{\,-n-1} .$$
4. Let $a : \mathbb{N} \to \mathbb{R}$ with $a_j = 0$ for $j \ge n$, and let
   $P : \mathbb{R} \to \mathbb{R}$ be the polynomial function
   $P(x) = \sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is
   differentiable at every $c \in \mathbb{R}$, and, defining $e : \mathbb{N}
   \to \mathbb{R}$ by $e_0 := 0$ and $e_j := \iota(j)\,a_j\,c^{\,j-1}$ for
   $j \ge 1$,
   $$P'(c) \;=\; \sum_{j<n} e_j .$$

**Claim 2 is stated for $n \ge 1$ and not for $n \ge 0$, and that is not
timidity.** At $n = 0$ its right-hand side reads $\iota(0)\,c^{-1}$, and
$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is
not a statement about the whole line. Claim 1 is what covers $n = 0$, and it
says the derivative is $0$ there, which is what the informal reading
"$0 \cdot c^{-1}$" is reaching for. The same shift is why the term $e_0$ of
claim 4 is defined to be $0$ outright rather than by the formula.

## Facts & Assumptions

**Given:** A natural $n$, a real $c$, and the functions $p_n$, $m_n$ and $P$ of the statement.

[L1] Powers ([[def-integer-power]]): $a^{0} = 1$ and $a^{m+1} = a^{m}a$ for every $a \in \mathbb{R}$ and $m \in \mathbb{N}$; $a^{-m} := (a^{m})^{-1}$ for $a \ne 0$ and $m \ge 1$; and $0^{m} = 0$ for $m \ge 1$.

[L2] Canonical naturals ([[def-canonical-natural]]): $\iota(0) = 0$, $\iota(m+1) = \iota(m) + 1$, and hence $\iota(1) = 1$.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]]): at a limit point $c$ of the common domain, sums, scalar multiples and products of functions differentiable at $c$ are differentiable at $c$ with the four stated formulas, and if the denominator is nonzero at $c$ then the quotient, restricted to the set where the denominator does not vanish, is differentiable at $c$ with the quotient formula; that restricted set has $c$ as a limit point.

[L4] Derivative and difference quotient ([[def-derivative]]): $f$ is differentiable at a limit point $c$ of its domain $D$ exactly when the difference quotient $x \mapsto (f(x)-f(c))/(x-c)$, a function on $D \setminus \{c\}$, has a limit at $c$, and $f'(c)$ is that limit. A constant function $h \equiv K$ on a set having $c$ as a limit point has $\lim_{x \to c} h(x) = K$: given a real $\varepsilon > 0$, any real $\delta > 0$ serves, since $|K - K| = 0 < \varepsilon$ ([[def-function-limit]]).

[L5] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums ([[def-finite-sum]]): $\sum_{j<0} b_j = 0$ and $\sum_{j<m+1} b_j = \bigl(\sum_{j<m} b_j\bigr) + b_m$.

[L7] Integer exponent laws for a nonzero base ([[lem-power-laws]]): $a^{k} \ne 0$ for every $k \in \mathbb{N}$ when $a \ne 0$; and for integers $j, k$ one has $a^{j}a^{k} = a^{j+k}$, $(a^{j})^{k} = a^{jk}$ and $a^{-k} = (a^{k})^{-1}$.

[L8] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods in $\mathbb{R}$ being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** induction.

1.1 **Base case, claim 2 at $n = 1$.** By [L1], $x^{1} = x^{0}x = 1 \cdot x = x$, so $p_1$ is the identity. Fix $c \in \mathbb{R}$; for every $x \ne c$ the difference quotient is $(x - c)/(x - c) = 1$, so it is the constant function $1$ on $\mathbb{R} \setminus \{c\}$, and by [L4] and [L8] its limit at $c$ is $1$. Since $\iota(1)c^{0} = 1 \cdot 1 = 1$ by [L1] and [L2], claim 2 holds at $n = 1$. [base, L1, L2, L4, L8]

1.2 **Inductive hypothesis.** Fix a natural $n \ge 1$ and assume that $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$. [ih]

1.3 **Claim 1.** By [L1] the function $p_0$ is the constant function $1$. Fix $c \in \mathbb{R}$; for every $x \ne c$ its difference quotient is $(1-1)/(x-c) = 0$, the constant function $0$ on $\mathbb{R}\setminus\{c\}$, whose limit at $c$ is $0$ by [L4] and [L8]. So $p_0$ is differentiable at every $c$ with $p_0'(c) = 0$. [L1, L4, L8]

2.1 **Successor step.** Let $c \in \mathbb{R}$. By [L1], $p_{n+1}(x) = x^{n+1} = x^{n}x = p_n(x)\,p_1(x)$ for every $x$. Both factors are differentiable at $c$, by step 1.2 and step 1.1, so the product rule of [L3] gives that $p_{n+1}$ is differentiable at $c$ with $p_{n+1}'(c) = p_n'(c)p_1(c) + p_n(c)p_1'(c) = \iota(n)c^{\,n-1}c + c^{n} \cdot 1$. Now $c^{\,n-1}c = c^{\,(n-1)+1} = c^{n}$ by [L1], so the right-hand side is $\iota(n)c^{n} + c^{n} = \bigl(\iota(n)+1\bigr)c^{n} = \iota(n+1)c^{n}$ by [L2]. [step 1.1, step 1.2, L1, L2, L3]

3.1 **Claim 2.** Steps 1.1 and 2.1 are the base case and the successor step of an induction over the naturals $n \ge 1$, so by [L5] the function $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$, for every natural $n \ge 1$. [step 1.1, step 2.1, L5]

4.1 **Claim 3.** Let $n \ge 1$. The set $\{\, x \in \mathbb{R} : p_n(x) \ne 0 \,\}$ is exactly $A_0$: a nonzero $x$ has $x^{n} \ne 0$ by [L7], and $0^{n} = 0$ by [L1]. Fix $c \in A_0$. The constant function $1$ on $\mathbb{R}$ is differentiable at $c$ with derivative $0$ by step 1.3, and $p_n$ is differentiable at $c$ with derivative $\iota(n)c^{\,n-1}$ by step 3.1, with $p_n(c) = c^{n} \ne 0$. So the quotient rule of [L3] applies: the function $x \mapsto 1/x^{n}$ on $A_0$, which by [L1] and [L7] is $m_n$, is differentiable at $c$ with derivative $\bigl(0 \cdot c^{n} - 1 \cdot \iota(n)c^{\,n-1}\bigr)/(c^{n})^{2} = -\iota(n)\,c^{\,n-1}\bigl(c^{\,2n}\bigr)^{-1} = -\iota(n)\,c^{\,n-1-2n} = -\iota(n)\,c^{\,-n-1}$, where $(c^{n})^{2} = c^{\,2n}$ and $c^{\,n-1}c^{\,-2n} = c^{\,-n-1}$ are [L7]. [step 1.3, step 3.1, L1, L3, L7]

4.2 **Claim 4, by a second induction on $n$.** Fix $c \in \mathbb{R}$ and the sequence $a$. At $n = 0$ the sum $P(x) = \sum_{j<0} a_j x^{j}$ is $0$ for every $x$ by [L6], so $P$ is the constant function $0$ and, as in step 1.3, $P'(c) = 0 = \sum_{j<0} e_j$. Suppose the claim holds at $n$, and let $P_{n+1}(x) := \sum_{j<n+1} a_j x^{j}$. By [L6], $P_{n+1}(x) = P_n(x) + a_n x^{n}$ for every $x$, where $P_n(x) = \sum_{j<n} a_j x^{j}$. The function $x \mapsto a_n x^{n}$ is differentiable at $c$ with derivative $e_n$: for $n = 0$ it is the constant $a_n$, of derivative $0 = e_0$, by step 1.3 and the scalar rule of [L3]; for $n \ge 1$ it is the scalar multiple $a_n p_n$, of derivative $a_n \iota(n)c^{\,n-1} = e_n$, by step 3.1 and the scalar rule of [L3]. The inductive hypothesis gives $P_n'(c) = \sum_{j<n} e_j$, so the sum rule of [L3] gives that $P_{n+1}$ is differentiable at $c$ with $P_{n+1}'(c) = \sum_{j<n} e_j + e_n = \sum_{j<n+1} e_j$ by [L6]. By [L5] claim 4 holds for every $n \in \mathbb{N}$. [step 1.3, step 3.1, L3, L5, L6]

5.1 All four claims are established: claim 1 by step 1.3, claim 2 by step 3.1, claim 3 by step 4.1 and claim 4 by step 4.2. [step 1.3, step 3.1, step 4.1, step 4.2, discharge-induction] ∎

## Remarks

- **Why the induction starts at $n = 1$ and not at $n = 0$.** The successor step multiplies by the identity, and the identity is $p_1$; starting at $n = 0$ would require the formula of claim 2 to hold at $n = 0$, which it does not, since $c^{-1}$ is undefined at $c = 0$. The two statements are therefore kept apart, and claim 1 is proved on its own from the definition. This is the same index care that [[def-canonical-natural]] records for families of reciprocals: $\mathbb{N}$ contains $0$, and a formula written for "$n$" is a claim about $n = 0$ unless it says otherwise.

- **The negative exponents cost nothing extra.** Claim 3 is the quotient rule of [[thm-algebra-of-derivatives]] applied with numerator the constant $1$, and the domain it produces, the set where $x^{n}$ does not vanish, is exactly $\mathbb{R} \setminus \{0\}$; no separate argument and no separate limit is needed. Rational exponents are a different matter, resting on [[thm-nth-roots-exist]], and are treated on the companion page rather than here.

- **Claim 4 is a statement about a finite sum, not about an infinite one.** Nothing here says anything about differentiating a series term by term; that is a separate question, needing hypotheses about convergence that this page does not have and does not assume.
