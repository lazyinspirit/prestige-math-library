---
id: rem-tits-isomorphism-is-noncanonical
kind: remark
title: "The Tits isomorphism is noncanonical"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn
  - cor-constituents-of-general-principal-series-for-finite-gl-n
  - thm-tits-deformation-for-the-type-a-hecke-algebra
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Corollary 5.19 and Remark 5.23, printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Corollary 2.7 and the closing Remark on the natural bijection with $\\operatorname{Irr}(S_n)$, PDF p. 5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Remark 11.6 and Theorem 11.14 (compatibility, not canonicity), printed pp. 47 and 51"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Remark

Assume the Axiom of Choice, used through Tits deformation
([[thm-tits-deformation-for-the-type-a-hecke-algebra]],
[[def-axiom-of-choice]]). The isomorphism
$H=e_B\mathbb C[G]e_B\cong\mathbb C[S_n]$ supplied by Tits deformation, and the
consequent parametrisation of the constituents of a principal series by tuples
of partitions, are **not canonical**: the deformation argument produces an
isomorphism by deforming through the generic algebra, using an open subset of
the parameter line, lifting idempotents, determinant inversion and a
constructible incidence locus, and it does not canonically identify the standard
basis $(T_w)$ with the group elements $(w)$ nor the simple $H$-modules with the
Specht modules
([[cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn]]).
Indeed there is generally no algebra isomorphism sending every standard $T_w$ to
$w$ when $q\ne1$, since the quadratic relations
$T_{s_i}^2=(q-1)T_{s_i}+q\,1$ and $s_i^2=1$ differ
([[cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn]]).
Different choices in the deformation (or different specialisations of the
generic algebra) can produce different isomorphisms, and downstream arguments
must not treat the partition labelling of a single constituent as if it were
canonical or compatible with every natural operation. What is canonical is the
resulting numerical data: the number of simple constituents and the multiset of
their multiplicities as dimensions of simple $\mathbb C[W_\chi]$-modules, as
recorded in
[[cor-constituents-of-general-principal-series-for-finite-gl-n]].
