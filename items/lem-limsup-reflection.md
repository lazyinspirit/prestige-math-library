---
id: lem-limsup-reflection
kind: lemma
title: "$\\limsup(-x_k) = -\\liminf(x_k)$, with the reflection of $\\overline{\\mathbb{R}}$ exchanging $\\pm\\infty$"
status: draft
origin: session
deps: [def-limsup-liminf, lem-limsup-exists, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence]
justified_by: []
aliases: []
landmark: false
short: "$\\limsup(-x)=-\\liminf x$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Write $-A := \{-a : a \in A\}$ for $A \subseteq \overline{\mathbb{R}}$, with the
reflection of [[def-extended-reals]], which fixes no point of
$\{-\infty, +\infty\}$ but exchanges the two.

1. **Reflection exchanges the extended bounds.** For every
   $A \subseteq \overline{\mathbb{R}}$,
   $$\sup(-A) = -\inf A \qquad \text{and} \qquad \inf(-A) = -\sup A,$$
   with the bounds of [[lem-extended-reals-complete]] and no hypothesis on $A$.
2. **Reflection exchanges $\limsup$ and $\liminf$.** For every sequence $(x_k)$
   of reals ([[def-sequence]]),
   $$\limsup_{k}(-x_k) = -\liminf_{k} x_k \qquad \text{and} \qquad \liminf_{k}(-x_k) = -\limsup_{k} x_k,$$
   with $\limsup$ and $\liminf$ as in [[def-limsup-liminf]].

Claim 2 is what turns every statement about $\limsup$ on this page into its dual
about $\liminf$ without a second proof, exactly as the identity
$\inf S = -\sup(-S)$ does in $\mathbb{R}$. The novelty is only that the reflection
now has to move the two new points, and it does: $-(+\infty) = -\infty$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, the reflected sequence $y_k := -x_k$, and for $A \subseteq \overline{\mathbb{R}}$ the reflected set $-A = \{-a : a \in A\}$.

[L1] Reflection on $\overline{\mathbb{R}}$: the map $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$, for all $a, b \in \overline{\mathbb{R}}$ ([[def-extended-reals]]).

[L2] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L3] Least upper bound and greatest lower bound in a poset, and their uniqueness ([[def-upper-bound]], [[def-partial-order]]).

[L4] Tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L5] All four families exist for every sequence ([[lem-limsup-exists]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq \overline{\mathbb{R}}$ be arbitrary. Since $-(-a) = a$ for every $a$, the map $a \mapsto -a$ carries $A$ onto $-A$ and $-A$ onto $A$, so $-(-A) = A$; and by [L2] each of $\sup A$, $\inf A$, $\sup(-A)$, $\inf(-A)$ exists. [given, L1, L2]

1.2 Let $T_n$ and $T'_n$ be the tail ranges of $(x_k)$ and of $(y_k) = (-x_k)$. Since $y_k = -x_k$, the set $T'_n = \{y_k : k \ge n\}$ is exactly $-T_n$. [given, L4]

2.1 The element $-\inf A$ is an upper bound of $-A$: for $a \in A$ we have $\inf A \le a$, hence $-a \le -\inf A$ by [L1], and every element of $-A$ is such a $-a$. If $v$ is any upper bound of $-A$, then for $a \in A$ we get $-a \le v$, hence $-v \le a$ by [L1], so $-v$ is a lower bound of $A$ and therefore $-v \le \inf A$, which gives $-\inf A \le v$ by [L1] again. So $-\inf A$ is the least upper bound of $-A$, that is $\sup(-A) = -\inf A$. [step 1.1, L1, L2, L3]

3.1 Applying the identity just proved to the set $-A$ in place of $A$, and using $-(-A) = A$, gives $\sup A = -\inf(-A)$; reflecting both sides and using $-(-a) = a$ yields $\inf(-A) = -\sup A$. Claim 1 is proved. [step 2.1, step 1.1, L1]

4.1 By claim 1 applied to $T_n$, the $n$-th tail supremum of $(y_k)$ is $\sup T'_n = \sup(-T_n) = -i_n$, and its $n$-th tail infimum is $\inf(-T_n) = -s_n$. [step 1.2, step 2.1, step 3.1, L4]

5.1 Hence the family of tail suprema of $(y_k)$ is $\{-i_n : n \in \mathbb{N}\} = -\{i_n : n \in \mathbb{N}\}$, so claim 1 applied to $\{i_n\}$ gives $\limsup_k(-x_k) = \inf\big(-\{i_n\}\big) = -\sup\{i_n\} = -\liminf_k x_k$. [step 4.1, step 3.1, L4, L5]

6.1 The same identity applied to the sequence $(y_k)$, whose reflection is $(-y_k) = (x_k)$ by [L1], reads $\limsup_k x_k = -\liminf_k(-x_k)$; reflecting both sides gives $\liminf_k(-x_k) = -\limsup_k x_k$. Both parts of claim 2 are proved. [step 5.1, L1] ∎

## Remarks

- **Claim 1 needs no hypothesis, and that is the whole gain over $\mathbb{R}$.**
  The corresponding real statement, $\inf S = -\sup(-S)$
  ([[thm-infimum-property]]), carries the hypotheses that $S$ be nonempty and
  bounded below, because otherwise neither side denotes anything. Here both sides
  always denote, so the identity is unconditional and can be applied to the family
  $\{i_n\}$ without first checking that it is bounded, which for an unbounded
  sequence it is not.

- **The reflection is an order anti-isomorphism, not merely a bijection.** What
  step 2.1 uses is that $a \mapsto -a$ is a bijection *and* reverses the order,
  both recorded in [[def-extended-reals]]. A bijection alone would not exchange
  bounds, and an order-reversing map that is not injective would not carry least
  upper bounds to greatest lower bounds.

- **Consequences on this page.** [[cor-liminf-is-least-subsequential-limit]] is
  [[thm-limsup-is-greatest-subsequential-limit]] read through this lemma, the
  $\liminf$ half of [[thm-limsup-subadditive]] is its $\limsup$ half read the same
  way, and the $-\infty$ case of
  [[thm-convergence-iff-limsup-equals-liminf]] is its $+\infty$ case.
