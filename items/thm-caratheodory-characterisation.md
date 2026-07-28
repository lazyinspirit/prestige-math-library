---
id: thm-caratheodory-characterisation
kind: theorem
title: "Carathéodory's characterisation: $f$ is differentiable at $c$ if and only if there is $\\varphi : A \\to \\mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \\varphi(x)(x - c)$ for every $x \\in A$, and then $\\varphi$ is unique and $\\varphi(c) = f'(c)$"
status: draft
origin: session
deps: [def-derivative, def-continuity-real, def-function-limit, lem-function-limit-unique, def-limit-point-r, lem-limit-is-local]
justified_by: []
aliases: [thm-caratheodory-derivative]
landmark: true
short: "Carathéodory's characterisation"
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
    - title: "Carathéodory's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_theorem"
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "S. Kuhn, The Derivative à la Carathéodory, Amer. Math. Monthly 98 (1991)"
      url: "https://en.wikipedia.org/wiki/Constantin_Carath%C3%A9odory"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). The following are equivalent.

1. $f$ is differentiable at $c$ ([[def-derivative]]).
2. There is a function $\varphi : A \to \mathbb{R}$, continuous at $c$
   ([[def-continuity-real]]), with
   $$f(x) - f(c) \;=\; \varphi(x)\,(x - c) \qquad \text{for every } x \in A .$$

When they hold, the function $\varphi$ of claim 2 is **unique** and satisfies
$\varphi(c) = f'(c)$.

**What the reformulation buys.** Claim 2 contains no quotient and no limit: it
is an algebraic identity plus a continuity hypothesis at one point. Every
differentiation rule on this page is proved by exhibiting the factor $\varphi$
for the new function and reading its continuity off the algebra and composition
theorems for continuous functions. In particular the chain rule becomes a
one-line substitution, with none of the case analysis that the
difference-quotient proof needs where the inner increment vanishes.

**The hypothesis that $c$ is a limit point of $A$ is used in both directions.**
It is what makes $f'(c)$ a defined symbol at all ([[def-derivative]]), and it is
what makes continuity of $\varphi$ at $c$ equivalent to a statement about the
limit of $\varphi$ there ([[def-continuity-real]], clause 1). At an isolated
point of $A$ claim 2 holds for *every* $f$, with $\varphi$ arbitrary off $c$,
because every function is continuous at an isolated point; claim 1 is not even a
statement there.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ ([[def-limit-point-r]]).

[L1] Differentiability at $c$ ([[def-derivative]]): the difference quotient $q(x) := (f(x) - f(c))/(x - c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $f$ is differentiable at $c$ exactly when $\lim_{x \to c} q(x)$ exists, its value then being $f'(c)$; moreover, for any $Q : A \to \mathbb{R}$ agreeing with $q$ on $A \setminus \{c\}$ and any real $L$, the conditions $\lim_{x \to c} Q(x) = L$ and $\lim_{x \to c} q(x) = L$ are the same condition, since the clause $0 < |x - c|$ removes $x = c$ from both quantifiers.

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L3] Continuity at a limit point ([[def-continuity-real]], clause 1): for $c \in A$ a limit point of $A$, a function $\psi : A \to \mathbb{R}$ is continuous at $c$ if and only if $\lim_{x \to c} \psi(x)$ exists and equals $\psi(c)$.

[L4] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]).

[L5] Locality (claim 1 of [[lem-limit-is-local]]): if two functions on $A$ agree at every $x \in A$ with $0 < |x - c| < \eta$ for some real $\eta > 0$, then for every real $L$ one has $\lim_{x \to c} = L$ for the first exactly when it holds for the second.

## Proof

**Proof technique:** direct.

1.1 **Claim 1 implies claim 2: the factor.** Assume $f$ is differentiable at $c$, and define $\varphi : A \to \mathbb{R}$ by $\varphi(x) := (f(x) - f(c))/(x - c)$ for $x \in A$ with $x \ne c$, and $\varphi(c) := f'(c)$. This is a function on the whole of $A$, since every $x \in A$ falls under exactly one of the two clauses and the division is by a nonzero number. [L1, construct]

1.2 **Claim 2 implies claim 1: the hypothesis.** Assume instead that some $\varphi : A \to \mathbb{R}$ is continuous at $c$ and satisfies $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [assume-hyp]

1.3 **Uniqueness.** Let $\varphi$ and $\psi$ both be as in claim 2. For $x \in A$ with $x \ne c$ the identity gives $\varphi(x)(x - c) = f(x) - f(c) = \psi(x)(x - c)$, and dividing by $x - c \ne 0$ gives $\varphi(x) = \psi(x)$; so the two agree on $A \setminus \{c\}$, hence at every $x \in A$ with $0 < |x - c| < 1$. By [L3] each has a limit at $c$, equal to its own value there; by [L5] those two limits are limits of functions agreeing near $c$, so by [L4] they are equal, that is $\varphi(c) = \psi(c)$. Hence $\varphi = \psi$. [L3, L4, L5]

2.1 **The identity holds for the factor built in step 1.1.** For $x \in A$ with $x \ne c$, multiplying the defining equation $\varphi(x) = (f(x) - f(c))/(x - c)$ by $x - c$ gives $\varphi(x)(x - c) = f(x) - f(c)$; and at $x = c$ both sides are $0$, since $f(c) - f(c) = 0$ and $\varphi(c)(c - c) = 0$. So the identity of claim 2 holds for every $x \in A$. [step 1.1]

2.2 **The factor built in step 1.1 is continuous at $c$.** That $\varphi$ agrees with the difference quotient $q$ at every point of $A \setminus \{c\}$ is its definition, so by [L1] the limit $\lim_{x \to c} \varphi(x)$ exists and equals $f'(c)$, which is $\varphi(c)$. Since $c$ is a limit point of $A$, [L3] turns that into continuity of $\varphi$ at $c$. [step 1.1, L1, L3]

2.3 **Under the hypothesis of step 1.2, $\varphi$ extends the difference quotient.** For $x \in A$ with $x \ne c$, dividing the identity by $x - c \ne 0$ gives $q(x) = \varphi(x)(x-c)/(x-c) = \varphi(x)$. So $\varphi$ agrees with $q$ at every point of $A \setminus \{c\}$. [step 1.2]

2.4 **Under the hypothesis of step 1.2, $\varphi$ has a limit at $c$.** Continuity of $\varphi$ at the limit point $c$ gives, by [L3], that $\lim_{x \to c} \varphi(x)$ exists and equals $\varphi(c)$. [step 1.2, L3]

3.1 **Claim 2 implies claim 1.** By step 2.3 the function $\varphi$ agrees with $q$ off $c$, so the last clause of [L1] applies with $Q := \varphi$ and $L := \varphi(c)$: from $\lim_{x \to c} \varphi(x) = \varphi(c)$, given by step 2.4, it follows that $\lim_{x \to c} q(x) = \varphi(c)$. By [L1] again, $f$ is differentiable at $c$ and $f'(c) = \varphi(c)$. [step 2.3, step 2.4, L1, L2]

4.1 Both implications and both supplementary claims are proved: claim 1 gives claim 2 by steps 1.1, 2.1 and 2.2, with $\varphi(c) = f'(c)$ by construction; claim 2 gives claim 1 by step 3.1, with $\varphi(c) = f'(c)$ established there; and the factor is unique by step 1.3. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The identity at $x = c$ is empty, and that is the point.** Both sides vanish there whatever $\varphi(c)$ is, so the identity alone determines $\varphi$ only off $c$; it is the *continuity* hypothesis that pins the remaining value, and it pins it to $f'(c)$. Drop continuity and claim 2 becomes true for every $f$ whatsoever, with $\varphi(c)$ arbitrary.

- **Why this is not circular.** The proof of claim 2 from claim 1 builds $\varphi$ out of the very quotient whose limit is $f'(c)$, so nothing new is asserted in that direction. The content is the other direction: a factorisation with a factor merely continuous at one point already forces the quotient to converge. That is the direction every rule on this page uses.

- **The factor is a genuinely useful object, not a device.** For $f(x) = x^{n}$ it can be written down in closed form, as the polynomial $\varphi(x) = \sum_{k < n} c^{k} x^{\,n-1-k}$ supplied by [[lem-power-difference-factorisation]]; the companion page writes that factor out and differentiates a composite with it.
