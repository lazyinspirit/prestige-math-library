---
id: thm-cartan-matrix-is-d-transpose-d
kind: theorem
title: "The Cartan matrix is D^T D"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-indecomposable-characters-and-cartan-invariants, thm-brauer-reciprocity]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
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

**Given:** The decomposition matrix $D$ and the Cartan matrix $C$ of $G$ at
$p$.

[F1] The Cartan invariants record composition multiplicities in projective
covers
([[def-projective-indecomposable-characters-and-cartan-invariants]]).

[L1] Brauer reciprocity identifies $d_{\chi\varphi}$ with the multiplicity of
$\chi$ in the projective indecomposable character $\Phi_\varphi$
([[thm-brauer-reciprocity]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varphi$. Decompose the projective indecomposable character as $$\Phi_\varphi=\sum_\chi d_{\chi\varphi}\chi$$ by [L1]. [L1, given]

2.1 The Cartan entry $c_{\varphi\psi}$ is the multiplicity of $S_\psi$ in the projective cover $P_\varphi$ by [F1]. Reducing the expansion from step 1.1 modulo $p$ and using [L1] again, each copy of $\chi$ contributes $d_{\chi\psi}$ copies of $S_\psi$. Hence $$c_{\varphi\psi}=\sum_\chi d_{\chi\varphi}d_{\chi\psi}.$$ [F1, L1, step 1.1, algebra]

3.1 This is exactly the $(\varphi,\psi)$ entry of $D^{\mathsf T}D$, so $C=D^{\mathsf T}D$. [step 2.1, algebra] ∎
