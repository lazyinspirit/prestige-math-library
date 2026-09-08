---
id: def-bass-guivarch-dimension
kind: definition
title: Bass–Guivarc’h dimension and nilpotent Hirsch length
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Definition 13.46, printed p.474
status: draft
origin: pipeline
deps: ["lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian", "lem-hall-malcev-integer-abelian-structure-and-rank"]
---
## Definition

For a finitely generated nilpotent group $G$ of class $c$, let $r_i$ be the number of infinite cyclic summands in $\gamma_i(G)/\gamma_{i+1}(G)$. These factors are finitely generated abelian by [[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]], and the number is intrinsic by [[lem-hall-malcev-integer-abelian-structure-and-rank]]. Equivalently $r_i=\dim_{\mathbb Q}\operatorname{Hom}(\gamma_i/\gamma_{i+1},(\mathbb Q,+))$.

Define the **Bass–Guivarc'h dimension** and the **nilpotent Hirsch length** by
$$D(G)=\sum_{i=1}^c i r_i,\qquad h(G)=\sum_{i=1}^c r_i.$$
For $G=1$, use $c=0$ and empty sums equal to zero. Inserting trailing trivial factors does not change either sum. These definitions concern nilpotent groups only.

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Definition 13.46, printed p.474. Revised Definition 13.46 supplies the weighted and unweighted sums; the local integer lemma supplies well-defined ranks.
