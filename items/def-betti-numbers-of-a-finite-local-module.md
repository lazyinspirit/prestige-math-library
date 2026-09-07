---
id: "def-betti-numbers-of-a-finite-local-module"
kind: "definition"
title: "betti numbers of a finite local module"
deps: ["def-balanced-tor-bifunctor", "lem-finite-local-modules-admit-minimal-free-resolutions", "def-koszul-betti-numbers-over-a-local-ring"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Unnumbered Betti-number definition after Lemma 1.50, p.24"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

For a finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ and an integer $i\ge0$, its **Betti number** is $\beta_i^R(M)=\dim_k\operatorname{Tor}_i^R(k,M)$. The action factors through $k$, and a degreewise finite free resolution makes this dimension finite. Tor is resolution-independent. This extends the Koszul rank notation: whenever a minimal Koszul resolution exists, the rank formula identifies these numbers with its Koszul Betti numbers. For $M=0$ all Betti numbers are zero.
