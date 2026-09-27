---
id: thm-cartan-matrix-is-d-transpose-d
kind: theorem
title: "The Cartan matrix is D^T D"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-indecomposable-characters-and-cartan-invariants, def-decomposition-numbers-and-decomposition-matrix, thm-brauer-reciprocity]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

If $D=(d_{\chi\varphi})$ is the decomposition matrix and
$C=(c_{\varphi\psi})$ is the Cartan matrix, then

$$C=D^{\mathsf T}D.$$

Equivalently,

$$c_{\varphi\psi}=\sum_\chi d_{\chi\varphi}d_{\chi\psi}.$$

## Facts & Assumptions

**Given:** The decomposition matrix $D$ and the Cartan matrix $C$ of $G$ at $p$.

[F1] The Cartan invariants record composition multiplicities in projective covers ([[def-projective-indecomposable-characters-and-cartan-invariants]]).

[L1] Brauer reciprocity identifies $d_{\chi\varphi}$ with the multiplicity of $\chi$ in the projective indecomposable character $\Phi_\varphi$ ([[thm-brauer-reciprocity]]).

[F2] The decomposition map is additive on ordinary representation classes, sends the class afforded by $\chi$ to $\sum_\psi d_{\chi\psi}[S_\psi]$, and sends the projective lattice lift affording $\Phi_\varphi$ to $[P_\varphi]$ ([[def-decomposition-numbers-and-decomposition-matrix]], [[def-projective-indecomposable-characters-and-cartan-invariants]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varphi$. Decompose the projective indecomposable character as $$\Phi_\varphi=\sum_\chi d_{\chi\varphi}\chi$$ by [L1]. [L1, given]

2.1 The Cartan entry $c_{\varphi\psi}$ is the multiplicity of $S_\psi$ in the projective cover $P_\varphi$ by [F1]. Apply the decomposition map [F2] to the ordinary-character expansion in step 1.1. Its left side becomes $[P_\varphi]$, while the right side becomes $\sum_\chi d_{\chi\varphi}\sum_\psi d_{\chi\psi}[S_\psi]$. Comparing coefficients of $[S_\psi]$ gives $$c_{\varphi\psi}=\sum_\chi d_{\chi\varphi}d_{\chi\psi}.$$ [F1, F2, step 1.1, algebra]

3.1 This is exactly the $(\varphi,\psi)$ entry of $D^{\mathsf T}D$, so $C=D^{\mathsf T}D$. [step 2.1, algebra] ∎
