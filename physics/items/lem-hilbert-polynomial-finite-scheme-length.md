---
id: lem-hilbert-polynomial-finite-scheme-length
kind: lemma
title: "The Hilbert polynomial of a finite scheme is its length"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-dependent-choice
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-nakayama-lemma
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-29.md; immutable carrier: research/frontier-38-owner-30-step5-hash-29-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-29 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. For a finite scheme $Z$ over a field $k$, of length $d=\dim_k\Gamma(Z,\mathcal O_Z)$, and any invertible sheaf $L$ on $Z$, $\chi(Z,L^{\otimes r})=d$ for every integer $r$. Thus its Hilbert polynomial for every polarization is the constant polynomial $d$. Nonreduced schemes, non-rational closed points, and the empty scheme are included.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Affine quasi-coherent higher cohomology vanishes ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]]). Nakayama's lemma is [[thm-nakayama-lemma]].

## Proof

1.1 The algebra $C=\Gamma(Z,\mathcal O_Z)$ is finite-dimensional over $k$, hence Artinian, and decomposes as a finite product of Artinian local rings. On each local factor an invertible module is free of rank one: lift a generator from its residue field, use Nakayama for surjectivity, and use the local rank-one trivialization to see that the map is an isomorphism. Consequently every power $L^{\otimes r}$ has a section module isomorphic, as a $C$-module, to $C$, and therefore of $k$-dimension $d$. [F1, algebra]

2.1 The finite scheme is affine, so [F1] makes all positive cohomology vanish. Euler characteristic is therefore $d$ for each $r$, including negative powers and $r=0$. When $Z$ is empty all modules and dimensions are zero and the same argument gives polynomial zero. [F1, step 1.1, algebra] ∎
