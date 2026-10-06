---
id: def-unitary-equivalence-of-systems-of-imprimitivity
kind: definition
title: Unitary equivalence of systems of imprimitivity and of the induced representations
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Definition

Two systems of imprimitivity $(U,P)$ on $H$ and $(U',P')$ on $H'$ for the same
Borel $G$-space $X$ ([[def-system-of-imprimitivity]]) are **unitarily
equivalent** when there is a unitary $W:H\to H'$
([[def-hilbert-space]]) with
$$WU_gW^{-1}=U'_g,\qquad WP(E)W^{-1}=P'(E)$$
for every $g\in G$ and every Borel $E\subseteq X$; if both are transitive on
$X=G/H$ ([[def-transitive-system-of-imprimitivity]]), such a $W$ is called an
equivalence of transitive systems. Two strongly continuous unitary
representations $\sigma,\sigma'$ of a common group
([[def-strongly-continuous-unitary-representation]]) are unitarily equivalent
when there is a unitary intertwiner between them.

**Well-definedness.** For a fixed base $X=G/H$ the relation is the natural
isomorphism of pairs (strongly continuous unitary representation,
projection-valued measure): it is reflexive with $W=I$, symmetric with
$W^{-1}$, and transitive with a composite, because conjugation by a unitary
preserves the defining identities; the base isomorphism is suppressed from the
notation exactly because transitivity fixes the identification $X=G/H$. The
definition introduces no choice and no new existence assertion.
