---
id: rem-rnp-is-not-the-scalar-radon-nikodym-theorem
kind: remark
title: "The RNP is not the scalar Radon--Nikodym theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-property, def-banach-valued-vector-measure-and-variation, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://www.math.tamu.edu/~geoffrey.schiebinger/Pisier_Martingales.pdf"
      locator: "Chapter 2, Section 2.1, vector measures and the RNP definition, printed pp. 33--35"
    - title: "Richard F. Bass, Real Analysis for Graduate Students"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
      locator: "Theorem 13.4, scalar Radon--Nikodym theorem"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. The scalar Radon--Nikodym theorem is a theorem
about absolutely continuous signed measures and scalar measurable densities.
The Radon--Nikodym property is instead an additional property of a Banach
target: it requires every norm-countably additive vector measure of bounded
variation, absolutely continuous with respect to a finite scalar measure, to
have a Bochner-integrable density. The scalar theorem proves the real scalar
special case, but it does not prove that an arbitrary Banach space has RNP.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] Under AC, the scalar Radon--Nikodym theorem gives a measurable real
density to an absolutely continuous signed measure under its stated common
finite-exhaustion hypotheses; finite total variation makes that density
integrable
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[L2] For a scalar measure represented by $f$, total variation is represented
by $|f|$
([[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]]).

[L3] RNP quantifies over Banach-valued norm-countably additive measures of
bounded variation and asks for Bochner densities on every measurable set
([[def-radon-nikodym-property]],
[[def-banach-valued-vector-measure-and-variation]]).

## Proof

**Proof technique:** direct.

**Given:** AC and the two stated Radon--Nikodym assertions.

1.1 Isolate what the scalar theorem supplies. For a real signed measure $\nu\ll\mu$ satisfying [L1]'s common finite-exhaustion hypotheses, [L1] supplies a scalar measurable $f$ with $\nu(E)=\int_Ef\,d\mu$ for every measurable $E$. When $\nu$ has finite variation, $f\in L^1$, and [L2] identifies $|\nu|(E)=\int_E|f|\,d\mu$. Thus existence, uniqueness up to almost-everywhere equality, and scalar variation all live inside the ordered scalar theory. [given, A1, L1, L2]

2.1 Compare the vector quantifiers and density notion. For a Banach target $X$, [L3] begins with a norm-countably additive map $\nu:\mathcal A\to X$, not a signed scalar measure. Its bounded variation is the supremum of sums of vector norms over finite partitions. The requested density is an $X$-valued strongly measurable, norm-integrable Bochner function, and its integral must recover $\nu(E)$ for every $E$. None of these target-valued existence assertions follows merely by replacing absolute values with norms in step 1.1. [L3, step 1.1]

3.1 Locate the overlap without overclaiming. When $X=\mathbb R$, a norm-countably additive vector measure is a signed measure, bounded variation is finite scalar total variation, and scalar measurability/integrability is the real Bochner notion. On a finite control measure the constant exhaustion meets [L1], so the scalar theorem supplies this special RNP case, with [L2] supplying its variation formula. For a general $X$, [L3] remains a genuine extra geometric requirement. [A1, L1, L2, L3, step 1.1, step 2.1]

4.1 Audit the boundaries and assumptions. [A1, L1, L3, step 3.1] The empty measurable space and zero scalar measure give zero densities in both settings. The zero Banach target has RNP trivially, but this says nothing about nonzero targets. The cited scalar theorem is real; no complex scalar theorem is silently extracted from it. Its sigma-finite-style common exhaustion is more general than the finite control measures in the RNP definition, while finite variation is what makes its scalar density $L^1$. AC is stated because [L1] requires it. [given, A1, L1, L2, L3, step 1.1, step 2.1, step 3.1] ∎