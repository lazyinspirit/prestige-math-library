---
id: thm-ordinals-and-omega-are-absolute-in-transitive-models
kind: theorem
title: "Ordinals and omega in transitive models"
status: published
origin: pipeline
deps: [thm-delta-zero-absoluteness-for-transitive-sets, lem-bounded-definitions-of-basic-set-operations, def-ordinal]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — §3.5 final ordinal/omega examples, p55"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Statement

In ambient ZF, ordinalhood is absolute between transitive membership domains containing the parameter. A transitive set model of ZF contains precisely the real finite ordinals as its natural numbers and has $\omega^M=\omega$. Its ordinals form an initial segment of the actual ordinals.

## Facts & Assumptions

[F1] [[thm-delta-zero-absoluteness-for-transitive-sets]]: If $M\subseteq N$ are nonempty transitive sets, every $\Delta_0$ formula is absolute between them on parameter tuples from $M$. No internal set-theory axioms are required. The analogous assertion for definable transitive classes is a formula-by-formula scheme.

[F2] [[def-ordinal]]: A set $\alpha$ is an **ordinal** when both of the following hold.

1. $\alpha$ is a **transitive set**: every element of $\alpha$ is also a subset
   of $\alpha$, that is $x \in \alpha \Rightarrow x \subseteq \alpha$.
2. The membership relation restricted to $\alpha$, namely
   $\{(x, y) \in \alpha \times \alpha : x \in y\}$, is a **strict well-order**
   of $\alpha$ (def-well-order): it is irreflexive, transitive as a
   relation, trichotomous on $\alpha$, and every nonempty subset of $\alpha$ has
   an $\in$-least element.

Ordinals are written with lowercase Greek letters, and for ordinals we set

$$\alpha < \beta :\iff \alpha \in \beta, \qquad \alpha \le \beta :\iff (\alpha \in \beta \text{ or } \alpha = \beta).$$

Write $0 := \emptyset$, which is an ordinal because both clauses hold vacuously,
and write $\alpha^{+} := \alpha \cup \{\alpha\}$ for the **successor** of
$\alpha$.

[F3] [[lem-bounded-definitions-of-basic-set-operations]]: The graphs of empty set, subset, unordered pair, singleton, union, intersection (with $\bigcap\varnothing=\varnothing$), difference, Kuratowski ordered pair, Cartesian product, relation domain/range, functionhood, evaluation and injection have $\Delta_0$ definitions. Thus their values agree between transitive membership structures whenever the input and output sets are in the smaller domain. This is graph agreement, not an assertion that an arbitrary transitive domain is closed under these operations.

## Proof

**Given:** Ambient ZF, transitive domains, and, for the omega assertion, a transitive model $M\models\mathrm{ZF}$.

1.1 Transitivity of $a$ is $\forall x\in a\,\forall y\in x\,(y\in a)$. Add the bounded clauses that membership on $a$ is irreflexive, transitive, and trichotomous. In ambient ZF, every nonempty subset $b\subseteq a$ has by Foundation an element $u$ with $u\cap b=\varnothing$; linearity then makes $u$ the least element of $b$. Hence these bounded clauses are equivalent to ordinalhood as defined in F2. Their truth is absolute by F1. [F1, F2, given]

2.1 In a transitive ZF model $M$, the internal empty set has no actual members and is $0$. If the internal numeral $n$ is the real $n$, its internally formed successor has exactly the actual members of $n\cup\{n\}$, because both parameters and every member of the candidate output lie in $M$. Thus external induction fixes every finite ordinal and puts it in $\omega^M$. [F3, step 1.1]

3.1 The internal $w=\omega^M$ satisfies the bounded description: $w$ is a nonzero ordinal, is not a successor, and each $u\in w$ is zero or a successor ordinal. Successor is expressed by $\exists v\in u\,[u=v\cup\{v\}]$, using the bounded graphs in F3. Thus the description holds externally. By step 2.1, $\omega\subseteq w$. If $w\ne\omega$, ordinal comparison gives $\omega\in w$, contrary to the description since $\omega$ is neither zero nor a successor. Hence $w=\omega$. [F1, F3, step 1.1, step 2.1]

4.1 If $\alpha$ is an ordinal of $M$ and $\beta<\alpha$, transitivity puts $\beta$ in $M$, and step 1.1 makes it an ordinal there. Thus the ordinals of $M$ are downward closed among actual ordinals, as claimed. [step 1.1, given] ∎
