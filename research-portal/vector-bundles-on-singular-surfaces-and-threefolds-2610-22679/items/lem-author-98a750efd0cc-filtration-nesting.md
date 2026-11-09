---
id: lem-author-98a750efd0cc-filtration-nesting
kind: lemma
title: Nesting of image filtration groups
status: draft
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - lem-author-98a750efd0cc-filtration-image
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-98a750efd0cc-filtration-image: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
For a decreasing filtration $F$ on a spectrum $E$ and integers $i$ and $a\geq b$, the image of $\pi_iF^a\to\pi_iE$ is contained in the image of $\pi_iF^b\to\pi_iE$.

## Facts & Assumptions
**Given:** $F$, $E$, $i$, and $a\geq b$ as stated.

**Goal:** Prove the containment.

[F1] [[def-decreasing-filtered-spectrum]] gives a transition $F^a\to F^b$ compatible with the maps to $E$.

[F2] [[lem-author-98a750efd0cc-filtration-image]] identifies these images as subgroups.

## Proof
1.1 Applying $\pi_i$ to the compatible maps in [F1] shows that $\pi_iF^a\to\pi_iE$ factors through $\pi_iF^b\to\pi_iE$. [F1, F2, given]

2.1 Thus the image of the former lies in the image of the latter, as subgroups by [F2]. This is the desired containment. [F1, F2, given, step 1.1] ∎
