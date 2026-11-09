---
title: External sequential simplicial Omega replacement
status: published
research_item: thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
dependency_level: 0
---

PDF p. 3: Filtered S1 spectra: stable enhancement prerequisites

## Prerequisites

None.

## Statement
Let K=Δ¹/∂Δ¹ and let X be a sequential pointed simplicial prespectrum, meaning pointed simplicial sets $X_n$ and maps K∧$X_n$→$X_{n+1}$, with each $X_n$ a Kan complex. A Kan complex has fillers for all simplicial horns. Write ΩZ=Map_*(K,Z), let s denote the level tail, and put $R=s\Omega$. The adjoints of the structure maps form a natural map ι:X→RX. Define QX=colim_m $R^m X$ using the maps $R^m\iota$. Then QX is level Kan, its adjoint structure maps are weak equivalences, X→QX is a stable equivalence, and (QX)_n=colim_m Ω^mX_{n+m}. A stable equivalence here is a weak equivalence in Hovey's sequential stable model structure.

## Source contract
**Given:** K and a level-Kan sequential pointed simplicial prespectrum X.

**Goal:** Import the functorial Omega replacement and its precise sequential formula.

[F1] Hovey's Definition 4.2, Lemma 4.3, Proposition 4.4 and Corollary 4.8 give the construction and conclusions under the cited hypotheses.

## External input
Import [F1] specialized to pointed simplicial sets and the adjunction K∧(−) ⊣ Map_*(K,−). The finite simplicial circle makes Ω preserve filtered colimits, and filtered colimits of sets commute with finite limits. Hovey's Lemma 4.3 identifies ι_{RX} with Rι_X. The formula is not applied directly to topological spaces, and no symmetric-spectrum or model-category equivalence is asserted.
