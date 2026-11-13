---
id: lem-author-c73ab6d940e2-braid-congruence
kind: lemma
title: Braid congruence preserves word length and support
status: draft
domain: mathematics
origin: pipeline
deps:
  - math:def-alphabet-words-and-reduction
  - math:def-equivalence-relation
  - math:def-semigroup-and-monoid
  - math:def-cg-artin-monoid-and-group-presentations
  - thm-spherical-artin-garside-input-artin-tits-prerequisites
dependency_roles:
  math:def-alphabet-words-and-reduction: mathematical-premise
  math:def-equivalence-relation: mathematical-premise
  math:def-semigroup-and-monoid: mathematical-premise
  math:def-cg-artin-monoid-and-group-presentations: mathematical-premise
  thm-spherical-artin-garside-input-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
formulation_deps:
  - math:def-alphabet-words-and-reduction
  - math:def-equivalence-relation
  - math:def-semigroup-and-monoid
  - math:def-cg-artin-monoid-and-group-presentations
  - thm-spherical-artin-garside-input-artin-tits-prerequisites
argument_deps:
  - math:def-alphabet-words-and-reduction
  - math:def-equivalence-relation
  - math:def-semigroup-and-monoid
  - math:def-cg-artin-monoid-and-group-presentations
  - thm-spherical-artin-garside-input-artin-tits-prerequisites
---

## Statement

Let $S$ be any set and let $(m_{st})_{s,t\in S}$ be a symmetric matrix with $m_{ss}=1$ and $m_{st}\in\{2,3,\ldots\}\cup\{\infty\}$ for $s\ne t$. Let $S^*$ consist of finite words using only letters of $S$, with concatenation and empty word $\varepsilon$. For distinct $s,t$ with $m_{st}<\infty$, the braid pair consists of the two alternating words of length $m_{st}$ starting with $s$ and $t$; an infinite parameter contributes no pair. A congruence is an equivalence relation on $S^*$ stable under adding arbitrary left and right word contexts. Let $\equiv$ be the intersection of all congruences containing the braid pairs. Put $M=S^*/{\equiv}$, write $[w]$ for the class of $w$, and use multiplication $[x][y]=[xy]$ and identity $[\varepsilon]$. These operations are well defined and make $M$ a monoid, the presented positive Artin monoid. The length $|w|$ is the number of letters of $w$, and its support is the set of letters occurring in it.

Two words represent the same element of $M$ if and only if one is obtained from the other by a finite sequence of braid substitutions in word contexts. Every substitution preserves length and support. For finite $S$, this construction is the standard presented Artin monoid. For a spherical Artin system it therefore also gives the original conclusion for the positive submonoid of its Artin group, under the canonical identification with $M$.

## Statement references

[[math:def-alphabet-words-and-reduction]]

[[math:def-equivalence-relation]]

[[math:def-semigroup-and-monoid]]

[[math:def-cg-artin-monoid-and-group-presentations]]

[[thm-spherical-artin-garside-input-artin-tits-prerequisites]]

## Facts & Assumptions

[F1] Finite words on an arbitrary set are defined in [[math:def-alphabet-words-and-reduction]]; here only letters of $S$, with no formal inverses, are used. Equivalence relations, classes and quotient sets are defined in [[math:def-equivalence-relation]], and monoids in [[math:def-semigroup-and-monoid]]. The congruence and quotient operations for the present arbitrary $S$ are constructed explicitly in the Statement and checked below.

[F2] When $S$ is finite, [[math:def-cg-artin-monoid-and-group-presentations]], Definition (1)–(3), defines the standard positive Artin monoid by precisely these finite words, braid pairs and least congruence. This finite-set definition is used only in that specialization.

[F3] For a spherical Artin system, [[thm-spherical-artin-garside-input-artin-tits-prerequisites]] identifies the standard presented monoid with the positive submonoid of its Artin group. This identification is used only for the final spherical specialization.

## Proof

**Given:** The data and constructions in the Statement.

**Goal:** Establish the quotient monoid, the equality criterion, the invariants and the stated specializations.

1.1 The total relation on $S^*$ is a congruence containing every braid pair, so the family defining $\equiv$ is nonempty. Its intersection is reflexive, symmetric, transitive and stable under contexts because each member has those properties. It is contained in every congruence containing the braid pairs and contains each pair, so it is the least such congruence. [F1, given]

2.1 If $x\equiv x'$ and $y\equiv y'$, stability under contexts gives $xy\equiv x'y\equiv x'y'$. Thus $[x][y]=[xy]$ is independent of representatives. Concatenation of finite strings is associative and has identity $\varepsilon$, so these laws descend to the quotient and make $M$ a monoid. [F1, step 1.1]

3.1 Let $R$ relate two words precisely when a finite sequence of contextual braid substitutions connects them, allowing a sequence of length zero. Zero sequences, reversal and concatenation of sequences make $R$ reflexive, symmetric and transitive. Applying the same contexts to every word in a sequence makes $R$ a congruence. It contains every braid pair, hence $\equiv\,\subseteq R$. Conversely every congruence containing the braid pairs contains each contextual substitution and every finite sequence of them, hence $R\subseteq\,\equiv$. Thus $R=\,\equiv$, proving the equality criterion. [F1, step 1.1, step 2.1]

4.1 Each braid pair on distinct $s,t$ has the same length $m_{st}\geq2$ on both sides and support $\{s,t\}$ on both sides. Adding left and right contexts adds their lengths and unions their supports with $\{s,t\}$. Consequently a substitution, and then every finite sequence, preserves both length and support. This proves the general claim without a finiteness or spherical assumption. [given, step 3.1]

5.1 For finite $S$, the construction agrees term by term with the definition in F2. For a spherical Artin system, F3 identifies that presented monoid with the positive submonoid in its Artin group, so the same equality criterion and invariants hold there as well. This retains the spherical conclusion. [F2, F3, step 2.1, step 3.1, step 4.1] ∎
