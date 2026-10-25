---
id: def-simple-and-semisimple-representations
kind: definition
title: "Simple and semisimple rational representations"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [def-rational-representation-and-comodule-of-an-affine-group-scheme]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 4, Definition 4.15 and Proposition 4.17, printed pp. 90-91"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the discussion of completely reducible modules before Theorem 39"
---

## Definition

Let $k$ be a field, let $G$ be an affine group scheme of finite type over $k$,
and let $(V,r)$ be a rational representation of $G$, with subrepresentations
the subcomodules of $V$
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). The
representation $(V,r)$ is **simple** (or **irreducible**) if $V\ne0$ and the
only subrepresentations of $V$ are $0$ and $V$. It is **semisimple** (or
**completely reducible**) if $V$ is an internal direct sum of simple
subrepresentations,
$$V=\bigoplus_{i\in I}S_i,\qquad S_i\subseteq V\text{ simple};$$
the zero representation is semisimple, being the empty direct sum.

## Remarks

- **Terminology.** Simple and semisimple representations are traditionally
  called irreducible and completely reducible when regarded as representations;
  the two pairs of words are synonyms here, as in the source.
- **Finite dimensionality.** Every simple rational representation of an affine
  finite-type group scheme is finite-dimensional; this is proved on the same
  page and is not part of the definition.
- **Subrepresentations.** Under the correspondence of the cited definition,
  subrepresentations are exactly the subcomodules, so simplicity and
  semisimplicity can be checked on comodules; no smoothness of $G$ is required,
  and no choice principle is used in the definition.
