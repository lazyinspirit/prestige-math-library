---
id: thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
kind: theorem
title: External sequential simplicial Omega replacement
status: published
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Mark Hovey, Spectra and symmetric spectra in general model categories
      url: https://arxiv.org/pdf/math/0004051
      locator: §4, Definition 4.2, Lemma 4.3, Proposition 4.4, Corollary 4.8 and
        Theorem 4.9, PDF pp. 17–20
      statement: For level-fibrant sequential spectra in pointed simplicial sets, R=sU
        and Q=colim R^m give a level-fibrant Omega-spectrum; X→QX is a stable
        equivalence, and (QX)_n=colim_m Ω^m X_{n+m}.
      hypotheses: The general result assumes an almost finitely generated model
        category, sequential colimits preserving finite products, and a right
        adjoint U preserving sequential colimits. In pointed simplicial sets
        these conditions hold for U=Map_*(Δ¹/∂Δ¹,−); level fibrancy means each
        level is Kan.
      reading_limits: The current author inspected Definition 4.2, Lemma 4.3,
        Proposition 4.4, Corollary 4.8 and Theorem 4.9, including the proof of
        Lemma 4.3 and the displayed proposition statement. The supplied
        authoring assistance reports a broader reading of §§3–4. Model-category
        foundations and verification of all general hypotheses are not
        reconstructed here.
dependency_level: 0
---

## Statement
Let K=Δ¹/∂Δ¹ and let X be a sequential pointed simplicial prespectrum, meaning pointed simplicial sets $X_n$ and maps K∧$X_n$→$X_{n+1}$, with each $X_n$ a Kan complex. A Kan complex has fillers for all simplicial horns. Write ΩZ=Map_*(K,Z), let s denote the level tail, and put $R=s\Omega$. The adjoints of the structure maps form a natural map ι:X→RX. Define QX=colim_m $R^m X$ using the maps $R^m\iota$. Then QX is level Kan, its adjoint structure maps are weak equivalences, X→QX is a stable equivalence, and (QX)_n=colim_m Ω^mX_{n+m}. A stable equivalence here is a weak equivalence in Hovey's sequential stable model structure.

## Source contract
**Given:** K and a level-Kan sequential pointed simplicial prespectrum X.

**Goal:** Import the functorial Omega replacement and its precise sequential formula.

[F1] Hovey's Definition 4.2, Lemma 4.3, Proposition 4.4 and Corollary 4.8 give the construction and conclusions under the cited hypotheses.

## External input
Import [F1] specialized to pointed simplicial sets and the adjunction K∧(−) ⊣ Map_*(K,−). The finite simplicial circle makes Ω preserve filtered colimits, and filtered colimits of sets commute with finite limits. Hovey's Lemma 4.3 identifies ι_{RX} with Rι_X. The formula is not applied directly to topological spaces, and no symmetric-spectrum or model-category equivalence is asserted.
