---
id: ex-cantor-diagonal-misses-every-listed-binary-sequence
kind: example
title: "Cantor diagonal construction misses every prescribed list of binary sequences"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-the-set-of-functions-from-one-set-to-another,
       lem-the-set-of-functions-between-two-sets-is-a-set, def-function,
       def-cartesian-product, def-unordered-pair-and-singleton,
       def-natural-numbers, thm-omega-is-peano-system,
       def-axiom-schema-of-separation, def-countable,
       lem-countable-iff-surjection-from-n, def-injection-surjection-bijection]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§1.6, complete binary-sequence diagonal construction following Corollary 1.48, printed p. 18: complement the diagonal entry of every prescribed row"
---

## Example

Given any function $s : \mathbb{N} \to \{0,1\}^{\mathbb{N}}$, write
$s_n = s(n)$ and define $d : \mathbb{N} \to \{0,1\}$ by $d(n) = 1$ if
$s_n(n) = 0$ and $d(n) = 0$ if $s_n(n) = 1$. Then $d$ differs from $s_n$ at
coordinate $n$ for every $n$, so $d$ is outside the range of $s$. In particular
no prescribed list of binary sequences is onto, and since
$\{0,1\}^{\mathbb{N}}$ is nonempty this gives once more that it is uncountable
([[def-countable]], [[lem-countable-iff-surjection-from-n]]). This is a direct
choice-free diagonal construction, not a decimal expansion argument; no sum,
limit or real digit convention is required.

## Facts & Assumptions

**Given:** The naturals $\mathbb{N}$ with $0 = \varnothing$ and $1 = \sigma(0)$ ([[def-natural-numbers]]), the unordered pair $\{0,1\}$ ([[def-unordered-pair-and-singleton]]), the set of binary sequences $\{0,1\}^{\mathbb{N}}$ ([[def-the-set-of-functions-from-one-set-to-another]], [[lem-the-set-of-functions-between-two-sets-is-a-set]]), and an arbitrary function $s : \mathbb{N} \to \{0,1\}^{\mathbb{N}}$.

[F1] $s(n)$ is a function $\mathbb{N} \to \{0,1\}$, so $s(n)(n) \in \{0,1\}$ and the expression $s_n(n)$ is meaningful; $t \in \{0,1\}$ exactly when $t = 0$ or $t = 1$ ([[def-function]], [[def-unordered-pair-and-singleton]]).

[F2] $0 \ne 1$ ([[thm-omega-is-peano-system]]).

[F3] Separation: for a set $X$ and a property of its elements, $\{\, z \in X : \varphi(z) \,\}$ is a set whose elements are exactly those $z \in X$ with the property ([[def-axiom-schema-of-separation]]); ordered pairs lie in $X \times Y$ ([[def-cartesian-product]]).

[F4] Two functions with the same domain are equal exactly when they take the same value at every point of that domain; and a function $s$ is onto its codomain when every element of the codomain is a value of $s$ ([[def-function]], [[def-injection-surjection-bijection]]).

[F5] A nonempty at most countable set has a surjection from $\mathbb{N}$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]); $\{0,1\}^{\mathbb{N}}$ is nonempty, for instance the constant function $n \mapsto 0$ is an element of it.

## Verification

**Proof technique:** direct.

1.1 The set $D := \{\, (n,v) \in \mathbb{N} \times \{0,1\} : (s(n)(n) = 0 \wedge v = 1) \vee (s(n)(n) = 1 \wedge v = 0) \,\}$ exists by Separation and is a function $d : \mathbb{N} \to \{0,1\}$ with $d(n) = 1$ when $s(n)(n) = 0$ and $d(n) = 0$ when $s(n)(n) = 1$. Indeed, for each $n$ the value $s(n)(n)$ is $0$ or $1$ by [F1], the alternatives $s(n)(n) = 0$ and $s(n)(n) = 1$ are mutually exclusive by [F2], and each branch assigns exactly one value; both values lie in $\{0,1\}$. [F1, F2, F3, given, construct]

2.1 For every $n \in \mathbb{N}$ one has $d(n) \ne s(n)(n)$. If $s(n)(n) = 0$ then $d(n) = 1 \ne 0$ by [F2]; if $s(n)(n) = 1$ then $d(n) = 0 \ne 1$ by [F2]. These are the only two cases by [F1]. [step 1.1, F1, F2]

3.1 For every $n$ the functions $d$ and $s(n)$ differ, because at the point $n$ their values differ by step 2.1; hence $d$ is not a value of $s$, that is, $d$ is outside the range of $s$. So $s$ is not onto $\{0,1\}^{\mathbb{N}}$, and no prescribed list of binary sequences is onto. [step 2.1, F4]

4.1 Consequently $\{0,1\}^{\mathbb{N}}$ is uncountable: it is nonempty by [F5], so if it were at most countable, [F5] would produce a surjection $\mathbb{N} \to \{0,1\}^{\mathbb{N}}$, which step 3.1 forbids. [step 3.1, F5]

5.1 Therefore every list of binary sequences omits at least the complementary diagonal sequence $d$ constructed above, and the set of binary sequences is uncountable. The only set introduced is $D$, separated from $\mathbb{N} \times \{0,1\}$ by a condition that determines each value uniquely; no element is selected from a nonempty family, so no choice principle is used. [step 3.1, step 4.1] ∎

## Remarks

- The construction complements the diagonal entry: at coordinate $n$ it looks at the $n$-th value of the $n$-th listed sequence and writes the other symbol. Every listed sequence is contradicted at its own index, so the resulting sequence cannot be on the list.

- This is the literal diagonal argument that accompanies the characteristic-function bijection of [[ex-binary-sequences-are-uncountable]]; there the uncountability was transferred from $\mathcal{P}(\mathbb{N})$, here it is produced directly from the diagonal sequence, with no appeal to decimal expansions.
