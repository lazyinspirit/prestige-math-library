---
id: thm-cardinal-comparability-iff-ac
kind: theorem
title: "Comparability of arbitrary sets, that any two sets admit an injection one way or the other, is equivalent to the Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hartogs, thm-well-ordering-theorem, cor-ac-iff-well-ordering, def-axiom-of-choice, def-equinumerous, def-injection-surjection-bijection, def-cardinal, lem-cardinality-of-a-well-orderable-set, lem-ordinal-trichotomy, lem-ordinal-basics, def-ordinal, def-well-order]
justified_by: []
aliases: [thm-cardinal-comparability]
landmark: true
short: "comparability $\\iff$ AC"
proof_strategy: direct
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
    - title: "Encyclopedia of Mathematics, Comparability of cardinals"
      url: "https://encyclopediaofmath.org/wiki/Comparability_of_cardinals"
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
    - title: "Axiom of choice — equivalents (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Over ZF the following two statements are equivalent.

**(1)** The Axiom of Choice ([[def-axiom-of-choice]]).

**(2) Comparability.** For any two sets $A$ and $B$, either $A \preceq B$ or
$B \preceq A$; that is, there is an injection $A \to B$ or an injection
$B \to A$ ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

**So comparability is not a triviality about sizes but a choice principle in
disguise.** Everything on this page that compares two cardinals uses trichotomy
of **ordinals**, which is a theorem of ZF; comparing two arbitrary **sets** is a
different matter, and this theorem says exactly how different.

## Facts & Assumptions

**Given:** ZF. Neither statement is assumed; the theorem asserts their equivalence.

[L1] For every set $A$ there is a least ordinal $\aleph(A)$ admitting no injection into $A$, and its construction is choice free ([[thm-hartogs]]).

[L2] Over ZF the Axiom of Choice is equivalent to the well-ordering theorem, that every set can be well ordered ([[cor-ac-iff-well-ordering]], [[def-well-order]]).

[L3] Assuming the Axiom of Choice, every set carries a well-order ([[thm-well-ordering-theorem]]).

[L4] A set is well-orderable exactly when it is equinumerous with an ordinal, and it then has a least such ordinal $\lvert A \rvert$, with $A \approx \lvert A \rvert$ ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]], [[def-ordinal]]).

[L5] Ordinals satisfy trichotomy and $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

[L6] A subset inclusion is an injection, and a composition of injections and bijections is an injection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Assume (1). Given sets $A$ and $B$, both are well-orderable by [L3], so $\lvert A\rvert$ and $\lvert B\rvert$ exist with $A \approx \lvert A\rvert$ and $B \approx \lvert B\rvert$ by [L4]; trichotomy in [L5] gives $\lvert A\rvert \subseteq \lvert B\rvert$ or $\lvert B\rvert \subseteq \lvert A\rvert$, and composing the corresponding inclusion with the two bijections gives an injection one way or the other by [L6], which is (2). [L3, L4, L5, L6]

1.2 Assume (2), and let $A$ be any set. Put $\kappa = \aleph(A)$, which by [L1] admits no injection into $A$; comparability applied to $A$ and $\kappa$ therefore leaves an injection $j : A \to \kappa$. Defining $a <_A b :\iff j(a) \in j(b)$ transports the well-order of the ordinal $\kappa$ back to $A$: irreflexivity, transitivity and trichotomy are immediate from injectivity, and a nonempty $S \subseteq A$ has the $<_A$-least element $j^{-1}$ of the $\in$-least element of $j[S]$, which exists by [L5]. So every set can be well ordered, and (1) follows by [L2]. [L1, L2, L5, L6]

2.1 Both implications are established, so (1) and (2) are equivalent over ZF. [step 1.1, step 1.2] ∎

## Remarks

**Why Hartogs' theorem is the whole engine of the hard direction.** Comparability by itself says nothing about ordinals; what makes it bite is that ZF alone produces, for each set $A$, an ordinal too long to sit inside $A$. Comparability then has only one way to resolve the pair $(A, \aleph(A))$, and that resolution is precisely a well-ordering of $A$. This is Hartogs' 1915 argument.

**What is not being claimed.** The theorem does not say that two sets are always comparable, nor that they are not. It says that "always comparable" and "the Axiom of Choice" are the same assumption over ZF. Whether ZF alone refutes comparability is a different question, not addressed here.

**Where this sits relative to the rest of the page.** Trichotomy for the alephs is free: they are ordinals, and [[lem-ordinal-trichotomy]] is a theorem of ZF. The step that costs the Axiom of Choice is getting from an arbitrary set to an aleph in the first place, which is clause (b) of [[thm-every-infinite-cardinal-is-an-aleph]]. This theorem is that observation sharpened into an equivalence.
