---
id: cor-zf-does-not-prove-urysohn-lemma
kind: corollary
title: "ZF does not prove Urysohn's lemma"
status: draft
origin: pipeline
deps: [thm-relative-consistency-countable-choice-without-urysohn, def-countable-choice, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§3.4(a)-(b), printed pp. 72-73"
---

## Statement

If $\mathrm{ZF}$ is consistent then $\mathrm{ZF}$ does not prove Urysohn's
lemma: there is a model of $\mathrm{ZF}$ in which some normal space has two
disjoint closed sets that admit no continuous separation
([[def-normal-and-t4-spaces]]).

The statement is conditional on $\operatorname{Con}(\mathrm{ZF})$ and is stated
in the metatheory; no model of $\mathrm{ZF}$ is exhibited in the library and no
unconditional nonprovability is asserted.

## Facts & Assumptions

**Given:** A proof of Urysohn's lemma in $\mathrm{ZF}$ and the consistency of $\mathrm{ZF}$.

[F1] Relative to $\operatorname{Con}(\mathrm{ZF})$, the theory $\mathrm{ZF} + \mathrm{AC}_{\omega} + \neg\mathrm{URY}$ is consistent ([[thm-relative-consistency-countable-choice-without-urysohn]], [[def-countable-choice]]).

[L1] If $T'\supseteq T$ and $T$ proves a sentence $\sigma$, then $T'$ also
proves $\sigma$; consequently $T'+\neg\sigma$ is inconsistent. Equivalently,
if $T'+\neg\sigma$ is consistent, then $T$ does not prove $\sigma$. In
particular, if $\mathrm{ZF}$ proves $\sigma$, then so does
$\mathrm{ZF}+\mathrm{AC}_\omega$ (elementary consequences of the definition of
derivability).

## Proof

**Proof technique:** contradiction.

1.1 Assume, for the sake of contradiction, that $\mathrm{ZF}$ proves Urysohn's lemma, and assume $\operatorname{Con}(\mathrm{ZF})$. [assume-contra]

2.1 Then $\mathrm{ZF} + \mathrm{AC}_{\omega}$ proves Urysohn's lemma, since it extends $\mathrm{ZF}$; but Urysohn's lemma is the sentence $\mathrm{URY}$ whose negation is consistent with $\mathrm{ZF} + \mathrm{AC}_{\omega}$ by [F1]. [step 1.1, F1, L1]

3.1 The theory $\mathrm{ZF} + \mathrm{AC}_{\omega} + \neg\mathrm{URY}$ is therefore inconsistent, contradicting its consistency given by [F1] under the assumption $\operatorname{Con}(\mathrm{ZF})$; hence $\mathrm{ZF}$ does not prove Urysohn's lemma. [step 2.1, F1, discharge-contradiction] ∎

## Remarks

- **Why the conditional is not weakened to a ZF theorem.** The nonprovability is relative to the consistency of $\mathrm{ZF}$; this library proves no independence result unconditionally, and the cited relative-consistency theorem carries the same qualification.

- **The stronger statements this corollary is drawn from.** The cited theorem gives a model of $\mathrm{ZF}$ with countable choice in which Urysohn's lemma fails; the same failure occurs in the BPI model of this page, and either witness would serve. The corollary records the catalogue clause that Urysohn's lemma is not a theorem of $\mathrm{ZF}$ alone, using the countable-choice witness, and it is generated directly from the published relative-consistency statement.
