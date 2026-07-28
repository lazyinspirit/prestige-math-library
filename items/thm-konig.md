---
id: thm-konig
kind: theorem
title: "König's theorem: assuming the Axiom of Choice, if $\\kappa_i < \\lambda_i$ for every $i \\in I$ then $\\sum_{i \\in I} \\kappa_i < \\prod_{i \\in I} \\lambda_i$"
status: published
origin: session
deps: [def-infinite-cardinal-sum-and-product, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinality-of-a-well-orderable-set, def-axiom-of-choice, def-choice-function, thm-well-ordering-theorem, def-cardinal, def-equinumerous, def-injection-surjection-bijection, lem-ordinal-trichotomy, lem-ordinal-basics, def-well-order]
justified_by: []
aliases: [thm-koenig, thm-konig-inequality]
landmark: true
short: "$\\sum_i \\kappa_i < \\prod_i \\lambda_i$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "König's theorem (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K%C3%B6nig%27s_theorem_(set_theory)"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 5 (Cardinal arithmetic)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $I$ be a set and
let $(\kappa_i)_{i \in I}$ and $(\lambda_i)_{i \in I}$ be families of cardinals
([[def-cardinal]]) with

$$\kappa_i < \lambda_i \qquad \text{for every } i \in I .$$

Then

$$\sum_{i \in I} \kappa_i \;<\; \prod_{i \in I} \lambda_i$$

([[def-infinite-cardinal-sum-and-product]]).

**The hypothesis is named in the statement, not only in the facts**, and it is
spent twice: once in the definition of the two sides, which are cardinalities of
sets ZF does not well-order, and once in the diagonal step of the proof, which
selects an omitted value in each coordinate at the same time.

## Facts & Assumptions

**Given:** The Axiom of Choice; a set $I$; families of cardinals $(\kappa_i)_{i \in I}$, $(\lambda_i)_{i \in I}$ with $\kappa_i < \lambda_i$ for every $i$. Write $S = \bigcup_{i \in I}(\{i\} \times \kappa_i)$ and $P$ for the set of functions $f$ on $I$ with $f(i) \in \lambda_i$ for every $i$.

[L1] $\sum_{i \in I}\kappa_i = \lvert S\rvert$ and $\prod_{i \in I}\lambda_i = \lvert P\rvert$, both defined because the Axiom of Choice well-orders every set ([[def-infinite-cardinal-sum-and-product]], [[thm-well-ordering-theorem]], [[def-cardinal-arithmetic]]).

[L2] For cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$, and $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L3] $X \approx \lvert X\rvert$ for well-orderable $X$, and equinumerous sets receive the same cardinality ([[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L4] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, $\alpha \notin \alpha$, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-well-order]]).

[L5] A product of nonempty sets is nonempty: if $X_i \ne \varnothing$ for every $i \in I$ then some function $g$ on $I$ has $g(i) \in X_i$ for all $i$ ([[def-axiom-of-choice]], [[def-choice-function]]).

[L6] A composition of injections is an injection, and a bijection is in particular a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** contradiction.

1.1 The map $h$ sending $(i,\xi) \in S$ to the function on $I$ taking the value $\xi$ at $i$ and the value $\kappa_j$ at each $j \ne i$ takes values in $P$, because $\xi \in \kappa_i \subseteq \lambda_i$ and $\kappa_j \in \lambda_j$ by [L4]; and it is injective, since $h(i,\xi) = h(i',\xi')$ with $i \ne i'$ would give $\xi = \kappa_i$ at the coordinate $i$, impossible as $\xi \in \kappa_i$ and $\kappa_i \notin \kappa_i$, so $i = i'$ and then $\xi = \xi'$. [L4, L6]

2.1 Hence $S \preceq P$ and $\sum_{i \in I}\kappa_i \le \prod_{i \in I}\lambda_i$ by [L1] and [L2]. [step 1.1, L1, L2]

3.1 Suppose, for contradiction, that $\sum_{i \in I}\kappa_i < \prod_{i \in I}\lambda_i$ fails; then trichotomy and step 2.1 force $\sum_{i \in I}\kappa_i = \prod_{i \in I}\lambda_i$. [step 2.1, L4, assume-contra]

4.1 Then $S \approx \lvert S\rvert = \lvert P\rvert \approx P$ by [L1] and [L3], so there is a bijection $F : S \to P$, in particular a surjection. [step 3.1, L1, L3, L6]

5.1 For each $i \in I$ put $B_i = \{\, F(i,\xi)(i) : \xi \in \kappa_i \,\} \subseteq \lambda_i$; the map sending $b \in B_i$ to the $\in$-least $\xi \in \kappa_i$ with $F(i,\xi)(i) = b$ is an injection $B_i \to \kappa_i$ by [L4], so $\lvert B_i\rvert \le \kappa_i < \lambda_i$ by [L2], and therefore $B_i \ne \lambda_i$ and $\lambda_i \setminus B_i \ne \varnothing$. [step 4.1, L2, L3, L4]

6.1 By [L5] there is a function $g$ on $I$ with $g(i) \in \lambda_i \setminus B_i$ for every $i$, and $g \in P$ since $\lambda_i \setminus B_i \subseteq \lambda_i$. [step 5.1, L5]

7.1 But $g \ne F(i,\xi)$ for every $(i,\xi) \in S$, because the two differ at the coordinate $i$, where $F(i,\xi)(i) \in B_i$ and $g(i) \notin B_i$; so $g$ is outside the image of $F$ and $F$ is not surjective, contradicting step 4.1. Therefore the assumption of step 3.1 is false and $\sum_{i \in I}\kappa_i < \prod_{i \in I}\lambda_i$. [step 4.1, step 5.1, step 6.1, discharge-contradiction] ∎

## Remarks

**The set form of the theorem implies the Axiom of Choice outright, in one line.** Suppose it were true that for families of **sets** with $A_i \prec B_i$ for every $i$ one had $\bigsqcup_i A_i \prec \prod_i B_i$. Given nonempty sets $B_i$, take $A_i = \varnothing$: then $A_i \preceq B_i$ and $A_i \not\approx B_i$, so $A_i \prec B_i$; the conclusion gives $\varnothing \prec \prod_i B_i$, hence $\prod_i B_i \not\approx \varnothing$ and $\prod_i B_i \ne \varnothing$, which is exactly the product formulation of [[def-axiom-of-choice]]. So the hypothesis of this theorem is not an artefact of the proof, and the version stated above, for **cardinals**, is the one that can be written down at all without presupposing choice somewhere.

**Where the diagonal is.** Step 5.1 says that the $i$-th block of $S$, which has only $\kappa_i$ members, cannot exhaust the $\lambda_i$ possible values in the $i$-th coordinate. Step 6.1 assembles the omitted values into a single element of the product. This is Cantor's diagonal argument with an arbitrary index set in place of $\mathbb{N}$, and with the two-element set replaced by $\lambda_i$; the one thing it needs beyond Cantor's version is the simultaneous selection, which is where the Axiom of Choice is spent the second time.

**What it is used for on this page.** With $\lambda_i$ constant the product becomes an exponential, and the resulting inequality bounds the cofinality of a power from below; that consequence is [[cor-cofinality-of-a-cardinal-power]], and it is the only ZFC constraint on $2^{\aleph_0}$ established here.
