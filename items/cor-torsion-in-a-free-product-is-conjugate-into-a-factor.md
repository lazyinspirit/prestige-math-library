---
id: cor-torsion-in-a-free-product-is-conjugate-into-a-factor
kind: corollary
title: "Finite-order elements of a free product are conjugate into factors"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-reduced-syllable-word-in-a-family-of-groups, thm-normal-form-for-free-products, def-order-in-a-group, lem-group-power-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, §1.2, Exercise 1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---
## Statement

Every nonidentity finite-order element of a free product is conjugate to a nonidentity finite-order element of one factor. For the empty family the statement is vacuous.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For groups as in def-group, a **syllable** is a tagged pair $(i,g)$ with $i\in I$ and $g\in G_i\setminus\{e_i\}$. A **reduced syllable word** is a finite list of syllables, indexed by a natural length as in def-natural-numbers, in which adjacent tags differ. The empty list is allowed. At a concatenation seam, adjacent syllables from the same factor are multiplied and an identity result is deleted; this elementary reduction is repeated until the seam is reduced. ([[def-reduced-syllable-word-in-a-family-of-groups]]).

[L2] Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity. ([[thm-normal-form-for-free-products]]).

[L3] **The order of a finite group.** Let $G$ be a group (def-group) whose underlying set is finite (def-countable), so that $G \approx n$ for some $n \in \mathbb{N}$ (def-equinumerous). That natural number is unique: if $G \approx n$ and $G \approx n'$ then $n \approx n'$, since $\approx$ is symmetric and transitive, and then $n = n'$ by claim 3 of lem-pigeonhole. The **order of $G$** is that unique natural number, written $|G|$. A group is **infinite** when its underlying set is not finite, and $|G|$ is then not defined. **The order of an element.** Let $G$ be any group and $g \in G$, with natural powers as in def-group-power. Put $$S_g \;:=\; \{\, k \in \mathbb{N} \;:\; k \ge 1 \text{ and } g^{k} = e \,\} \;\subseteq\; \mathbb{N}.$$ - If $S_g \ne \varnothing$, the **order of $g$** is its least element, $$\operatorname{ord}(g) \;:=\; \min S_g \;\in\; \mathbb{N},$$ which exists by the well-ordering principle (thm-well-ordering-principle): every nonempty subset of $\mathbb{N}$ has a least element, and that element is unique, being $\le$ every element of $S_g$ and a member of it. We then say $g$ has **finite order**. - If $S_g = \varnothing$ we say $g$ has **infinite order** and write $\operatorname{ord}(g) = \infty$, where $\infty$ is a symbol reserved for this case and is not a natural number. No arithmetic is performed with it here. By construction $\operatorname{ord}(g) \ge 1$ whenever it is finite, and $\operatorname{ord}(g) = 1$ exactly when $g = e$, since $g^{1} = g$. **Every element of a finite group has finite order.** If $G$ is finite then $S_g \ne \varnothing$ for every $g \in G$, by lem-order-of-element-exists, so $\operatorname{ord}(g)$ is a natural number. ([[def-order-in-a-group]]).

[L4] Let $G$ be a group (def-group) with identity $e$, let $g, h \in G$, and let powers be as in def-group-power. For all $m, n \in \mathbb{Z}$: 1. $g^{m+n} = g^{m} g^{n}$; 2. $g^{-m} = (g^{m})^{-1}$; 3. $(g^{m})^{n} = g^{mn}$; 4. $g^{m} g^{n} = g^{n} g^{m}$: any two powers of one element commute; 5. **if $gh = hg$** then $(gh)^{n} = g^{n} h^{n}$. Claim 5 is **false in general without its hypothesis**: in a group in which $g$ and $h$ do not commute the equation can fail already at $n = 2$, and a witness is recorded on the companion page. Claims 1 and 3 hold in any monoid (def-semigroup-and-monoid) for exponents in $\mathbb{N}$, and so does claim 5 for exponents in $\mathbb{N}$ under the same commuting hypothesis; only the extension to negative exponents needs inverses. ([[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 Write the element as a nonempty reduced word. If its first and last syllables lie in the same factor and its length exceeds one, conjugating by the first syllable shortens the reduced length. Repetition ends with a conjugate of length one or a cyclically reduced word. [given, L1, L2, L3, L4]

2.1 A cyclically reduced word of length at least two has each positive power represented by the unreduced concatenation of that many copies, since the terminal and initial factors differ. Normal form makes every such power nonidentity. [step 1.1]

3.1 Thus a finite-order element cannot end in the second case, and is conjugate to a one-syllable element of a factor. Conjugacy preserves order. [step 2.1] ∎
