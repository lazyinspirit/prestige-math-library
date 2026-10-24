---
id: cor-dmc-is-not-provable-in-zf
kind: corollary
title: "A failure of Urysohn separation forces failure of DMC"
status: published
origin: pipeline
deps: [thm-dmc-implies-urysohn-lemma, def-dependent-multiple-choice-finite-level-tree, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Eleftherios Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14590"
      locator: "Main relative-consistency theorem, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
    - title: "Eleftherios Tachtsis, Erratum to The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14848"
      locator: "Published erratum to the cited theorem"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/cor-dmc-is-not-provable-in-zf.json
---


## Statement

Over ZF, failure of Urysohn's lemma implies failure of DMC
([[def-dependent-multiple-choice-finite-level-tree]]). In particular, if any
consistent theory $T$ extends ZF and includes $\neg\mathrm{URY}$, then ZF does
not prove DMC. No existence or consistency of such a $T$ is asserted.

## Facts & Assumptions

**Given:** ZF, with $\neg\mathrm{URY}$ for the first claim; and a consistent
extending theory $T$ containing $\neg\mathrm{URY}$ for the second claim.

[F1] Over ZF, DMC implies Urysohn's lemma
([[thm-dmc-implies-urysohn-lemma]]).

## Proof
 1.1 Under $\neg\mathrm{URY}$, DMC would give $\mathrm{URY}$ by F1, a contradiction. Therefore $\neg\mathrm{DMC}$ holds. This proves the internal implication over ZF. [given, F1]

2.1 If ZF proved DMC, the same finite derivation would hold in the extending $T$, and the finite ZF proof F1 would give $\mathrm{URY}$ in $T$. Together with its axiom $\neg\mathrm{URY}$ this contradicts consistency of $T$. Thus ZF cannot prove DMC under the stated additional consistency hypothesis. [given, F1, step 1.1] ∎