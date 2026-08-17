---
id: ex-matrix-ring-decomposition-into-minimal-left-ideals
kind: example
title: "$M_n(F)$ as a direct sum of minimal left ideals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-matrix-rings-over-division-rings-are-semisimple, thm-simple-modules-over-semisimple-rings, def-matrix-units]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

For every field $F$ and $n\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $$M_n(F)=\bigoplus_{j=1}^n M_n(F)e_{jj}$$ of simple left ideals. See [[thm-matrix-rings-over-division-rings-are-semisimple]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a division ring $D$ and $n\ge1$, the left regular module of $M_n(D)$ is the direct sum of its simple column ideals $M_n(D)e_{jj}\cong D^n$. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. ([[thm-simple-modules-over-semisimple-rings]]).

[L3] The matrix unit $E_{ij}\in M_{m\times n}(F)$ has entries $$(E_{ij})_{rs}=\delta_{ri}\delta_{sj},$$ so it has entry $1$ in position $(i,j)$ and $0$ everywhere else. ([[def-matrix-units]]).

## Verification

**Proof technique:** direct.

1.1 The left ideal $M_n(F)e_{jj}$ consists of matrices supported in column $j$. Reading that column identifies it with the natural column module $F^n$. If a nonzero vector lies in a submodule of $F^n$, matrix units send it to every standard basis vector, so the submodule is all of $F^n$; each column ideal is therefore simple. [L1, L2, L3, given, algebra]

2.1 Every matrix is the sum of its column matrices, and matrices supported in distinct columns have zero intersection. Hence $M_n(F)=\bigoplus_{j=1}^nM_n(F)e_{jj}$ as a left module. [step 1.1, given, algebra]

3.1 For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim. [step 2.1, given, algebra] ∎
