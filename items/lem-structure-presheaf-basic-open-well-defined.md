---
id: lem-structure-presheaf-basic-open-well-defined
kind: lemma
title: "Localization sections are independent of a distinguished-open presentation"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-structure-presheaf-on-basic-opens, lem-distinguished-opens-cover-every-open, lem-distinguished-open-refinement-at-a-point, lem-spectrum-compactness-open-cover-to-unit-ideal, cor-nilradical-as-intersection-of-primes, thm-universal-property-of-localisation]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.1"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

Assume the Axiom of Choice. The assignment $D(f)\mapsto A_f$, with the localization restrictions, is
independent of the representation of a distinguished open and is a sheaf on
the distinguished-open basis.

## Facts & Assumptions

**Given:** The Axiom of Choice, a ring $A$, and an arbitrary cover $D(f)=\bigcup_{i\in I}D(g_i)$ by distinguished opens contained in $D(f)$.

## Proof

**Proof technique:** direct.

1.1 If $D(g)\subseteq D(f)$, localization universality gives the canonical restriction $A_f\to A_g$; for equal opens the two restrictions are inverse. [given]

2.1 Under $D(f)\cong\operatorname{Spec}(A_f)$, the cover becomes the distinguished cover by the images of the $g_i$. The spectrum-cover lemma makes those images generate the unit ideal in $A_f$, so a finite subfamily already generates $1$. The standard localization calculation for a finite unit-ideal cover then glues every compatible family in the $(A_f)_{g_i}\cong A_{g_i}$ uniquely to an element of $A_f$. [step 1.1, algebra]

2.2 This includes the empty case: if $D(f)=\varnothing$, then $f$ lies in every prime ideal, so it is nilpotent; hence $A_f$ is the zero ring, and the empty compatible family glues uniquely to its sole element. [step 1.1, algebra]

3.1 Thus gluing and uniqueness hold for every cover of a distinguished open by distinguished opens, not only for finite covers. This is precisely the sheaf axiom for the localization presheaf on the distinguished-open basis, so steps 2.1 and 2.2 prove the claim. [step 2.1, step 2.2] ∎
