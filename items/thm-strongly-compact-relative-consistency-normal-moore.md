---
id: thm-strongly-compact-relative-consistency-normal-moore
kind: theorem
title: "A strongly compact cardinal gives the NMSC consistency upper bound"
status: draft
origin: pipeline
deps: [thm-lc-strong-compactness-product-measure-extension-interface, thm-pmea-implies-normal-moore-space-conjecture, def-axiom-of-choice, thm-formal-relative-consistency-from-verified-proof-reduction, def-product-measure-extension-axioms-pmea-and-pmea-sigma]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Theorem 8C and Corollary 8G, printed p. 70"
---

## Statement

$\operatorname{Con}(\mathrm{ZFC} + \text{there is a strongly compact cardinal})$
implies $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$, where NMSC is the
normal Moore space conjecture. No ground-model implication and no actual
strongly compact cardinal is asserted
([[thm-lc-strong-compactness-product-measure-extension-interface]]).

## Facts & Assumptions

**Given:** The metatheoretic assumption $\operatorname{Con}(\mathrm{ZFC} + \text{a strongly compact cardinal})$.

[F1] The published product-measure interface: $\operatorname{Con}(\mathrm{ZFC}+\text{a strongly compact cardinal})$ implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{PMEA})$, the PMEA sentence being exactly the full-domain extension axiom of [[def-product-measure-extension-axioms-pmea-and-pmea-sigma]] ([[thm-lc-strong-compactness-product-measure-extension-interface]]).

[F2] $\mathrm{ZFC} + \mathrm{PMEA}$ proves NMSC ([[thm-pmea-implies-normal-moore-space-conjecture]]).

[F3] A verified finite-proof reduction turns a fixed formal proof of a first-order statement into the corresponding consistency implication: if $T$ proves $\varphi$ then $\operatorname{Con}(T)$ implies $\operatorname{Con}(T+\varphi)$ ([[thm-formal-relative-consistency-from-verified-proof-reduction]]).

[F4] Both theories are formulated over $\mathrm{ZFC}$ with $\mathrm{AC}$ explicit ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZFC} + \text{a strongly compact cardinal})$. [given]

2.1 By [F1] the theory $\mathrm{ZFC} + \mathrm{PMEA}$ is consistent. [step 1.1, F1]

2.2 By [F2] the fixed theory $\mathrm{ZFC}+\mathrm{PMEA}$ formally proves that every normal Moore space is metrizable, and this proof is a finite object whose axiom support lies in that theory. [step 1.1, F2, F4]

3.1 By [F3] applied to that fixed proof, $\operatorname{Con}(\mathrm{ZFC}+\mathrm{PMEA})$ implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{PMEA}+\mathrm{NMSC})$, hence in particular $\operatorname{Con}(\mathrm{ZFC}+\mathrm{NMSC})$. [step 2.1, step 2.2, F3]

4.1 Chaining steps 1.1, 2.1 and 3.1 gives the displayed implication, under the metatheoretic consistency assumption only. [step 2.1, step 3.1] ∎

## Remarks

- **Three distinct claims are kept apart.** "PMEA implies NMSC" is a theorem of $\mathrm{ZFC}$; the consistency transfer is metatheoretic; and the strongly compact cardinal is assumed only inside the consistency hypothesis.

- **AC is used in the supplier**, in the random-real construction and in the cardinal arithmetic; it is declared as a dependency and no choice-free reading is claimed.
