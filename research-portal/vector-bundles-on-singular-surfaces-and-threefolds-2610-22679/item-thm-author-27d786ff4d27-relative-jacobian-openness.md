---
title: External relative Jacobian criterion and openness of smooth maps
status: draft
research_item: thm-author-27d786ff4d27-relative-jacobian-openness
dependency_level: 0
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

None.

## Statement
Import the ordinary relative Jacobian criterion in standard smooth presentations and openness of smooth morphisms: adding $r$ equations whose differentials are independent in a smooth relative $d$-fold yields a smooth relative $(d-r)$-fold near that point. In particular its image contains an open neighbourhood of the parameter. The criterion is valid in every characteristic and survives base change.

## Source contract
**Given:** A smooth finite-presentation presentation over the base, and an invertible maximal minor for the original equations together with the additional equations.

**Goal:** Supply the exact scheme-level nonempty-parameter argument.

[F1] Stacks Algebra Definition10.137.5 and Lemma10.137.6 give the standard-smooth Jacobian presentation and its smoothness and relative differential rank; Morphisms Lemma29.35.11 gives such presentations locally for smooth maps.

[F2] Stacks Morphisms Lemma29.35.10 says smooth maps are universally open.

## External input
Import [F1]–[F2]. The augmented minor condition verifies the displayed standard smooth definition after localization. No characteristic-zero generic-smoothness assertion or dominance assumption is imported.
