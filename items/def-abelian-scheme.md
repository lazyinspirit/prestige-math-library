---
id: def-abelian-scheme
kind: definition
title: "Abelian schemes over a base"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-group-scheme-over-a-scheme
  - def-abelian-variety-over-a-field
  - def-smooth-morphism-schemes
  - def-proper-morphism
  - def-locally-finite-presentation-morphism
  - def-geometrically-reduced-integral-connected-fibre
  - def-relative-dimension-smooth-morphism
  - def-scheme-theoretic-fibre
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (preliminary version 2012), Chapter 6 sections 1-3"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "D. Lombardo, Abelian varieties, Luxembourg Summer School on Galois representations lecture notes (2018), Chapter 1 sections 1-7 and Chapter 2 sections 4-5"
      url: "https://people.dm.unipi.it/lombardo/Teaching/VarietaAbeliane1718/Notes.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models, Ergebnisse der Mathematik und ihrer Grenzgebiete (3) 21, Springer 1990, 1.2/8 and Chapter 7"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Definition

Let $S$ be a scheme. An **abelian scheme** over $S$ of relative dimension $g$ is an $S$-group scheme $f:A\to S$ in the sense of [[def-group-scheme-over-a-scheme]] such that:

1. $f$ is smooth ([[def-smooth-morphism-schemes]]);
2. $f$ is proper ([[def-proper-morphism]]);
3. $f$ is locally of finite presentation ([[def-locally-finite-presentation-morphism]]);
4. every geometric fibre $A_{\bar s}=A\times_S\operatorname{Spec}\bar\kappa(s)$ is connected of dimension $g$ ([[def-geometrically-reduced-integral-connected-fibre]], [[def-scheme-theoretic-fibre]]); equivalently, the relative dimension is constant equal to $g$ ([[def-relative-dimension-smooth-morphism]]) and every geometric fibre is nonempty and connected.

Equivalently, an abelian scheme over $S$ is a smooth proper $S$-group scheme whose geometric fibres are abelian varieties of dimension $g$ in the sense of [[def-abelian-variety-over-a-field]]; smoothness and properness make the fibres smooth proper connected group schemes, and conversely a family of abelian varieties of constant dimension which is a smooth proper $S$-group scheme is an abelian scheme. The condition on geometric fibres makes $g$ locally constant on $S$ and equal to $g$ on each connected component of $S$. Since $f$ is proper, it is separated, and the unit section $e:S\to A$ is a closed immersion, being a section of a separated morphism. The group law, inverse and unit are those of the $S$-group scheme structure; they are automatically $S$-morphisms of finite presentation.

No projectivity of $A$ over $S$ is asserted: an abelian scheme over a general base need not be projective over that base, and none of the results on this page assumes it. The base $S$ is not required to be Noetherian.
