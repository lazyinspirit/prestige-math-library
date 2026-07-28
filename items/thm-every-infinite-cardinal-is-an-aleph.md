---
id: thm-every-infinite-cardinal-is-an-aleph
kind: theorem
title: "Every infinite cardinal is $\\aleph_\\alpha$ for exactly one ordinal $\\alpha$, in ZF; and, assuming the Axiom of Choice, every infinite set is equinumerous with exactly one aleph"
status: draft
origin: session
deps: [def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, lem-successor-cardinal-exists, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, lem-omega-least-limit-ordinal, def-limit-ordinal, thm-well-ordering-theorem, def-axiom-of-choice, lem-cardinality-of-a-well-orderable-set, def-countable, def-equinumerous]
justified_by: []
aliases: []
landmark: true
short: "the alephs exhaust the infinite cardinals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Aleph number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

**(a) In ZF.** Every infinite cardinal $\kappa$ ([[def-cardinal]]) equals
$\aleph_\alpha$ ([[def-aleph-and-beth-hierarchies]]) for **exactly one** ordinal
$\alpha$. So the alephs are not merely a supply of infinite cardinals: they are
all of them, and the operation $\alpha \mapsto \aleph_\alpha$ is a bijective
enumeration of the infinite cardinals by the ordinals.

**(b) Assuming the Axiom of Choice** ([[def-axiom-of-choice]]). Every infinite
set is equinumerous ([[def-equinumerous]]) with exactly one aleph.

The two clauses say different things, and the difference is the whole content of
the choice hypothesis. Clause (a) classifies **cardinals**, which are ordinals;
clause (b) classifies **sets**, and needs to know first that an arbitrary set has
a cardinality at all.

## Facts & Assumptions

**Given:** ZF; the Axiom of Choice only in clause (b).

[L1] The operation $\alpha \mapsto \aleph_\alpha$ is defined at every ordinal, takes infinite cardinal values, is strictly increasing, satisfies $\aleph_0 = \omega$, $\aleph_{\alpha+1} = \aleph_\alpha^{+}$, $\aleph_\lambda = \bigcup\{\aleph_\beta : \beta \in \lambda\}$ at limits, and satisfies $\alpha \le \aleph_\alpha$ ([[cor-the-aleph-and-beth-hierarchies-are-well-defined]], [[def-aleph-and-beth-hierarchies]]).

[L2] $\kappa^{+}$ is the least cardinal strictly above the cardinal $\kappa$ ([[lem-successor-cardinal-exists]]).

[L3] Every nonempty set of ordinals has an $\in$-least element; ordinals satisfy trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$; an ordinal is a transitive set ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L4] Every ordinal is exactly one of $0$, a successor, or a limit ([[def-limit-ordinal]]); $\omega$ is the least limit ordinal ([[lem-omega-least-limit-ordinal]]).

[L5] A cardinal $\kappa$ is infinite exactly when $\omega \le \kappa$, and $\omega$ is a cardinal ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-cardinal]]).

[L6] For a well-orderable $X$, $\lvert X\rvert$ is the least ordinal equinumerous with $X$, $X \approx \lvert X \rvert$, it is a cardinal, and $\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L7] Assuming the Axiom of Choice, every set carries a well-order ([[thm-well-ordering-theorem]], [[def-axiom-of-choice]]).

[L8] A set is finite when it is equinumerous with a natural number ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 Let $\kappa$ be an infinite cardinal and put $S = \{\alpha \in \kappa \cup \{\kappa\} : \kappa \le \aleph_\alpha\}$; then $\kappa \in S$, since $\kappa \in \kappa \cup \{\kappa\}$ and $\kappa \le \aleph_\kappa$ by [L1], so $S$ is a nonempty set of ordinals. [L1, L3]

1.2 The enumeration is injective: if $\aleph_\alpha = \aleph_\beta$ with $\alpha \ne \beta$ then one of $\alpha \in \beta$, $\beta \in \alpha$ holds by [L3], and strict increase in [L1] makes the two values distinct; so no infinite cardinal is an aleph at two different indices. [L1, L3]

2.1 Let $\alpha$ be the $\in$-least element of $S$, which exists by [L3]; then $\kappa \le \aleph_\alpha$, and $\aleph_\beta < \kappa$ for every $\beta \in \alpha$, because $\beta \in \alpha \in \kappa \cup \{\kappa\}$ puts $\beta$ in $\kappa \cup \{\kappa\}$ by transitivity, so $\beta \notin S$ and trichotomy leaves $\aleph_\beta < \kappa$. [step 1.1, L3]

3.1 In each of the three cases of [L4] this forces $\kappa = \aleph_\alpha$: if $\alpha = 0$ then $\omega = \aleph_0 \le \kappa \le \aleph_0$ by [L5], so $\kappa = \aleph_0$; if $\alpha = \beta + 1$ then $\aleph_\beta < \kappa$ by step 2.1 and $\kappa$ is a cardinal, so $\aleph_{\beta+1} = \aleph_\beta^{+} \le \kappa$ by [L2], while $\kappa \le \aleph_\alpha$ gives the reverse; and if $\alpha$ is a limit then $\aleph_\beta \subseteq \kappa$ for every $\beta \in \alpha$ by step 2.1, so $\aleph_\alpha = \bigcup\{\aleph_\beta : \beta \in \alpha\} \subseteq \kappa$ by [L1], again with the reverse inequality already in hand. [step 2.1, L1, L2, L3, L4, L5]

4.1 Claim (a) is step 3.1 with the uniqueness of step 1.2; and claim (b) follows: assuming the Axiom of Choice an infinite set $X$ is well-orderable by [L7], so $\lvert X \rvert$ exists by [L6] and is not a natural number, since $X \approx \lvert X \rvert$ would then make $X$ finite by [L8], whence $\lvert X \rvert$ is an infinite cardinal by [L5] and $X \approx \lvert X \rvert = \aleph_\alpha$ for exactly one $\alpha$, uniqueness holding because $X \approx \aleph_\alpha$ forces $\aleph_\alpha = \lvert X \rvert$ by [L6]. [step 1.2, step 3.1, L5, L6, L7, L8] ∎

## Remarks

**What makes the enumeration exhaustive.** Not the recursion, which only produces alephs, but the fact that $\alpha \le \aleph_\alpha$: it guarantees that the alephs eventually overtake any given cardinal, so a least index with $\kappa \le \aleph_\alpha$ exists, and the three-case analysis then shows that "least" forces equality. Without the inequality the search would have no place to start.

**Clause (b) is exactly as strong as the well-ordering theorem.** If every infinite set were equinumerous with an aleph then every set would be well-orderable, since an aleph is an ordinal, and that is equivalent to the Axiom of Choice ([[cor-ac-iff-well-ordering]]). So clause (b) is not a theorem of ZF, and it is stated with its hypothesis rather than proved.

**What is enumerated and what is not.** The alephs enumerate the infinite cardinals in increasing order. They do **not** enumerate the values of the power operation: $2^{\aleph_0}$ is an aleph by clause (a), but which one is not settled by the axioms in use here, and nothing on this page or its companion asserts a value.
