---
id: "def-betti-numbers-of-a-finite-local-module"
kind: "definition"
title: "betti numbers of a finite local module"
deps: ["def-balanced-tor-bifunctor", "lem-finite-local-modules-admit-minimal-free-resolutions", "def-koszul-betti-numbers-over-a-local-ring", "def-axiom-of-choice", "def-dependent-choice"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Unnumbered Betti-number definition after Lemma 1.50, p.24"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
    - title: "Mircea Mustață, Introduction to Commutative Algebra, Proposition 12.27 and Remark 12.28, pp.120–121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Assume the Axiom of Choice. Let $M$ be a finite module over a nonzero
Noetherian local ring $(R,\mathfrak m,k)$, and choose a minimal degreewise
finite free resolution $F_\bullet\to M$, which exists under this assumption.
For $i\ge0$, its **Betti number** is
$$\beta_i^R(M):=\dim_k H_i(k\otimes_R F_\bullet)=\dim_k\operatorname{Tor}_i^R(k,M).$$
The first dimension is finite because each $k\otimes_R F_i$ is a
finite-dimensional $k$-vector space. The value does not depend on the chosen
resolution: choice supplies dependent choice by selecting a successor from
each nonempty successor set and recursively iterating that selection, and the
Tor comparison for supplied resolutions then identifies their homology.
Whenever a minimal Koszul resolution exists, the rank formula identifies
these numbers with its Koszul Betti numbers. For $M=0$ all Betti numbers are
zero.
