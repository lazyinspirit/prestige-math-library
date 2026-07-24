---
page: construction-of-the-natural-numbers
title: "Construction of the Natural Numbers"
status: published
items: [def-peano-system, def-inductive-set, lem-omega-smallest-inductive,
        def-natural-numbers, thm-induction-principle,
        lem-nat-transitive-irreflexive, thm-omega-is-peano-system,
        thm-recursion, cor-nat-addition-well-defined, def-nat-addition,
        cor-nat-multiplication-well-defined, def-nat-multiplication,
        lem-nat-successor-neq-self, lem-nat-nonzero-is-successor,
        lem-nat-add-identity, lem-nat-add-successor-left,
        lem-nat-add-associative, lem-nat-add-commutative,
        lem-nat-add-cancellative, lem-nat-mult-identity,
        lem-nat-mult-distributive, lem-nat-mult-associative,
        lem-nat-mult-commutative, lem-nat-no-zero-divisors,
        def-nat-order, lem-nat-trichotomy, thm-nat-linear-order,
        lem-nat-order-add-compatible, lem-nat-order-mult-compatible,
        lem-nat-discrete, lem-nat-mult-cancellative,
        thm-well-ordering-principle, thm-strong-induction,
        thm-peano-categoricity]
examples: [ex-one-plus-one, ex-two-plus-two, cex-induction-axiom-necessary,
           cex-successor-injective-necessary, fs-induction-without-base]
---

**Objective.** This page builds the natural numbers $\mathbb{N}$ from the ground
and proves the facts that every later construction silently assumes. It is the
prerequisite that sits beneath the two constructions of $\mathbb{R}$, the
[[construction-of-r-via-cauchy-sequences|Cauchy-sequence construction]] and the
[[construction-of-r-via-dedekind-cuts|Dedekind-cut construction]]: both begin
"the natural numbers, with their arithmetic and order, are the assumed starting
point", and this page discharges exactly that assumption. The headline is the
**principle of mathematical induction** ([[thm-induction-principle]]), the proof
technique used everywhere in mathematics, obtained here from its set-theoretic
source.

**Two starting points, reconciled.** There are two standard ways to say what the
natural numbers are, and we use both. The **Peano axioms** ([[def-peano-system]])
describe $\mathbb{N}$ abstractly as a triple $(N, 0, \sigma)$ with a zero, a
successor, and an induction axiom. **ZFC set theory** instead builds a concrete
model: the Axiom of Infinity yields an **inductive set**
([[def-inductive-set]]), and the smallest one ([[lem-omega-smallest-inductive]])
is the set $\omega$ of **von Neumann naturals** ([[def-natural-numbers]]), where
$0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so each number is the set of its
predecessors. The bridge between the two views is
[[thm-omega-is-peano-system]]: the von Neumann model satisfies the Peano axioms,
so a Peano system provably exists. Everything after the bridge is proved from the
Peano axioms alone, so it holds in any model.

**Induction, and definition by recursion.** Minimality of $\omega$ is exactly the
induction principle: a set of naturals that contains $0$ and is closed under the
successor is everything ([[thm-induction-principle]]). Its indispensable
companion is the **recursion theorem** ([[thm-recursion]]), which licenses
defining a function on $\mathbb{N}$ by specifying its value at $0$ and at each
successor. Without it the recursive definitions of addition and multiplication
would be unjustified; with it they are genuine total functions
([[cor-nat-addition-well-defined]], [[cor-nat-multiplication-well-defined]]).

**Arithmetic, proved.** Addition ([[def-nat-addition]]) and multiplication
([[def-nat-multiplication]]) are defined by recursion, and their laws are then
theorems, each proved by induction: addition is associative, commutative, and
cancellative ([[lem-nat-add-associative]], [[lem-nat-add-commutative]],
[[lem-nat-add-cancellative]]); multiplication distributes over addition and is
associative and commutative ([[lem-nat-mult-distributive]],
[[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]); and there are no zero
divisors ([[lem-nat-no-zero-divisors]]). The archetype of the method is the
one-line unfolding $1 + 1 = 2$ ([[ex-one-plus-one]]), with $2 + 2 = 4$
([[ex-two-plus-two]]) right behind it.

**Order and its consequences.** The order $m \le n \iff \exists k\ (m + k = n)$
([[def-nat-order]]) is a linear order ([[thm-nat-linear-order]]) satisfying
trichotomy ([[lem-nat-trichotomy]]), compatible with addition and multiplication
([[lem-nat-order-add-compatible]], [[lem-nat-order-mult-compatible]]) and discrete
in that $\sigma(n)$ is the immediate successor of $n$ ([[lem-nat-discrete]]). Its
deepest consequence is the **well-ordering principle** ([[thm-well-ordering-principle]]):
every nonempty set of naturals has a least element. From it comes **strong
induction** ([[thm-strong-induction]]), and ordinary induction, strong induction,
and well-ordering are three faces of one property.

**Uniqueness.** Finally, the natural numbers are pinned down: any two Peano
systems are isomorphic by a unique isomorphism ([[thm-peano-categoricity]]),
proved from the recursion theorem exactly as the uniqueness of $\mathbb{R}$ is
proved one level up. So the set-theoretic encoding chosen at the start is
immaterial, and it is legitimate to speak of *the* natural numbers.

**Why the axioms are sharp.** The optional items show the Peano axioms are
independent. Dropping induction leaves room for extra elements a proof by
induction would never reach ([[cex-induction-axiom-necessary]]); dropping
injectivity of the successor allows a finite model in which distinct numbers
collapse ([[cex-successor-injective-necessary]]); and induction genuinely needs
its base case, since successor-closure alone does not force a set to be all of
$\mathbb{N}$ ([[fs-induction-without-base]]).
