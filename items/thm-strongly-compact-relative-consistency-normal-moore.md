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

[F3] If an arithmetic base $B$ verifies a total code map $r$ and
$\forall p(\operatorname{Prf}_U(p,\ulcorner\bot\urcorner)\to
\operatorname{Prf}_T(r(p),\ulcorner\bot\urcorner))$, then
$B\vdash\operatorname{Con}(T)\to\operatorname{Con}(U)$
([[thm-formal-relative-consistency-from-verified-proof-reduction]]).

[F4] Both theories are formulated over $\mathrm{ZFC}$ with $\mathrm{AC}$ explicit ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZFC} + \text{a strongly compact cardinal})$. [given]

1.2 Put $T_0:=\mathrm{ZFC}+\mathrm{PMEA}$ and $U:=\mathrm{ZFC}+\mathrm{NMSC}$. By [F2], fix a finite $T_0$-proof $q$ of NMSC. Define $r$ on codes of $U$-proofs by scanning the finite proof, copying logical and ZFC axiom lines and inference steps, and replacing every use of the added NMSC axiom by the fixed proof $q$, with line references renumbered. This is a total primitive-recursive code map. The chosen arithmetic proof checker verifies by induction on the length of the input proof that every copied line remains valid and every replaced line is the conclusion of $q$; hence it verifies $\operatorname{Prf}_U(p,\ulcorner\bot\urcorner)\to\operatorname{Prf}_{T_0}(r(p),\ulcorner\bot\urcorner)$ for every $p$. [F2, F3, F4, construct]

2.1 By [F1] the theory $\mathrm{ZFC} + \mathrm{PMEA}$ is consistent. [step 1.1, F1]

2.2 Apply [F3] to the verified map $r$ of [step 1.2]. It gives $\operatorname{Con}(T_0)\to\operatorname{Con}(U)$, that is, $\operatorname{Con}(\mathrm{ZFC}+\mathrm{PMEA})\to\operatorname{Con}(\mathrm{ZFC}+\mathrm{NMSC})$. [step 1.2, F3]

3.1 Chaining steps 1.1, 2.1 and 2.2 gives the displayed implication, under the metatheoretic consistency assumption only. [step 2.1, step 2.2] ∎

## Remarks

- **Three distinct claims are kept apart.** "PMEA implies NMSC" is a theorem of $\mathrm{ZFC}$; the consistency transfer is metatheoretic; and the strongly compact cardinal is assumed only inside the consistency hypothesis.

- **AC is used in the supplier**, in the random-real construction and in the cardinal arithmetic; it is declared as a dependency and no choice-free reading is claimed.
