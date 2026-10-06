---
id: cor-brunner-models-also-refute-tietze-extension
kind: corollary
title: "A Urysohn separation obstruction also obstructs bounded Tietze extension"
status: published
origin: pipeline
deps: [def-continuous-map-top, def-subspace-topology-top, def-interval, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
    - title: "Eleftherios Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14590"
      locator: "Main relative-consistency theorem, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
    - title: "Eleftherios Tachtsis, Erratum to The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14848"
      locator: "Published erratum to the cited theorem"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/cor-brunner-models-also-refute-tietze-extension.json
---


## Statement

Let $X$ be a normal space ([[def-normal-and-t4-spaces]]) and let $A,B$ be
disjoint closed subsets admitting no continuous map $X\to[0,1]$ that is zero
on $A$ and one on $B$. Then the map $g:A\cup B\to[0,1]$ equal to zero on $A$
and one on $B$ is continuous and has no continuous extension to $X$.

Consequently, over ZF, failure of Urysohn's lemma implies failure of bounded
Tietze extension. This is an implication between existence assertions; it
constructs neither a counterexample space nor a model of ZF.

## Facts & Assumptions

**Given:** The normal space $X$ and disjoint closed $A,B$ with the stated
separation obstruction.

[F1] Closed sets in a subspace are traces of ambient closed sets
([[def-subspace-topology-top]]).

[F2] Continuity means that preimages of open sets are open
([[def-continuous-map-top]]); the target is $[0,1]$ ([[def-interval]]).

## Proof
 1.1 In the subspace $A\cup B$, the sets $A$ and $B$ are closed by F1 and are each other's complements. Thus both are open. Define $g=0$ on $A$ and $g=1$ on $B$, well-defined since the sets are disjoint. The preimage under $g$ of any open subset of $[0,1]$ is one of $\varnothing,A,B,A\cup B$, all open in the subspace. Hence $g$ is continuous by F2. [given, F1, F2, construct]

2.1 A continuous extension $G:X\to[0,1]$ of $g$ would vanish on $A$ and be one on $B$, contradicting the given obstruction. Therefore no such extension exists. Since $A\cup B$ is closed in $X$, this is exactly a failure of bounded Tietze extension. Applying this construction to any normal-space witness of $\neg\mathrm{URY}$ proves the final implication. [given, step 1.1] ∎