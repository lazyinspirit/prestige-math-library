---
id: thm-basic-fraenkel-model
kind: theorem
title: The basic Fraenkel model
status: draft
origin: pipeline
deps: [thm-fraenkel-mostowski-permutation-model, thm-dedekind-infinite-iff-countable-subset, def-axiom-of-choice, thm-well-ordering-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, §4.3 and Problems 4.3–4.4, pp. 47–52", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

With countably infinite atoms, the full permutation group and finite supports yield a ZFA model in which every atom subset is finite or cofinite. The atom set is infinite, admits no injection from $\omega$, is not well-orderable, and AC fails.

## Facts & Assumptions

**Given:** An ambient ZFA+AC model with countably infinite atom set $A$, full permutation group, and finite-support filter.

[F1] [[thm-fraenkel-mostowski-permutation-model]] gives the ZFA submodel.

[F2] [[thm-dedekind-infinite-iff-countable-subset]] relates injections from $\omega$ to Dedekind infinitude without AC.

[F3] [[thm-well-ordering-theorem]] gives AC implies well-orderability.

## Proof

1.1 Let $B\subseteq A$ in the model and let finite $E$ support it. If two atoms $a,b\notin E$ had different membership in $B$, their transposition would fix $E$ but move $B$. Thus either no atom outside $E$ lies in $B$, making $B$ finite, or every atom outside $E$ lies in $B$, making it cofinite. [F1]

2.1 The set $A$ is infinite because every ground finite subset omits an atom. If $f:\omega\to A$ were injective in the model, the even-indexed range would be infinite and its complement would contain the infinite odd-indexed range, contradicting step 1.1. Hence there is no such injection, in agreement with F2. [F2, step 1.1]

3.1 If a well-order $<$ of $A$ had finite support $E$, the nonempty invariant set $A\setminus E$ would have a least member $a$. Choose $b\notin E\cup\{a\}$ and transpose $a,b$. The transposition fixes $<$ and $E$, so must send its uniquely least outside-$E$ member to itself, but sends $a$ to $b$, contradiction. Thus $A$ is not well-orderable. F3 now shows by contraposition that AC fails in the permutation model. This reductive use of AC is the only choice dependence of the conclusion. [F3] ∎