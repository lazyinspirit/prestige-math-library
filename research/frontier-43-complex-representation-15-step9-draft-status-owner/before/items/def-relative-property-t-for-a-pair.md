---
id: def-relative-property-t-for-a-pair
kind: definition
title: Relative property (T) for a pair and relative Kazhdan pairs
deps:
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-subgroup
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_audit: "No choice principle is used."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definition 1.4.3 and Remark 1.4.4(i)–(ii), printed p. 47/PDF p. 53. The source states the pair definition for a closed subgroup; this item retains the scaffold's broader subgroup scope, which requires no closedness for the definition itself."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2, I.4 and III, printed pp. 2–4/PDF pp. 32–34: relative property (T) for discrete group pairs as supplementary examples."
---

## Statement

Let $G$ be a topological group and let $H\le G$ be any subgroup
([[def-subgroup]]), not assumed normal or closed. The pair $(G,H)$ has
**relative property (T)** if every strongly continuous unitary representation
of $G$ ([[def-strongly-continuous-unitary-representation]]) with almost
invariant vectors ([[def-almost-invariant-vectors-for-a-unitary-representation]])
has a nonzero vector fixed by every $\pi(h)$ for $h\in H$.

A pair $(Q,\varepsilon)$ with $Q\subseteq G$ and $\varepsilon>0$ is a
**relative Kazhdan pair** for $(G,H)$ if every strongly continuous unitary
representation of $G$ having a $(Q,\varepsilon)$-invariant unit vector has a
nonzero $H$-invariant vector. A subset $Q\subseteq G$ is a **relative Kazhdan
set** if $(Q,\varepsilon)$ is a relative Kazhdan pair for some
$\varepsilon>0$.

When $H=G$, these are respectively Kazhdan's property (T), Kazhdan pairs, and
Kazhdan sets ([[def-kazhdans-property-t]],
[[def-kazhdan-pair-and-kazhdan-constant]]).

## Remarks

- The zero-space representation has no unit vectors and no almost invariant vectors, so it creates no exception to either implication.
- If $H=\{e\}$, every vector is $H$-invariant; hence $(G,\{e\})$ has relative property (T), and every $(Q,\varepsilon)$ is a relative Kazhdan pair.
- The subgroup need not be normal for $H$-invariant vectors or for the relative pair definition to make sense. Closedness is a hypothesis in the cited KHV formulation, but the definitions stated here also make sense for a nonclosed subgroup.
- No local compactness, Hausdorffness, countability, or choice assumption is part of these definitions.
