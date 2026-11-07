---
id: thm-prismatic-f-crystals-over-ok-classify-crystalline-galois-lattices
kind: theorem
title: "Prismatic F-crystals over O_K classify crystalline Galois lattices"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-prismatic-f-crystal-over-a-p-adic-formal-scheme
  - def-integral-perfectoid-ring-via-ainf-and-tilt
  - lem-completion-of-an-algebraic-closure-of-a-p-adic-field-is-perfectoid
  - lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed
  - def-p-adic-period-rings
  - def-de-rham-p-adic-galois-representation
  - def-crystalline-p-adic-galois-representation
  - thm-colmez-fontaine-weakly-admissible-is-admissible
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bhatt and Scholze, Prismatic F-crystals and Crystalline Galois Representations, Theorems 1.2 and 5.6, §§5–6.4"
      url: "https://arxiv.org/pdf/2106.14735v2.pdf"
    - title: "Du and Liu, A prismatic approach to (phi, G-hat)-modules and F-crystals, Theorem 4.1.10 and §§4.1–4.3"
      url: "https://arxiv.org/pdf/2107.12240v3.pdf"
---

## Statement

Let $K$ be a complete discretely valued nonarchimedean extension of $\mathbb Q_p$ with mixed characteristic $(0,p)$ and perfect residue field $k$, let $O_K$ be its valuation ring, and let $G_K=\operatorname{Gal}(\overline K/K)$ for an algebraic closure $\overline K$. Put $Y=\operatorname{Spf}(O_K)$ and let $Y_\eta$ be its rigid analytic generic fibre. The étale realization functor from prismatic F-crystals of vector bundles on the bounded absolute prismatic ringed site $(Y_\Delta,\mathcal O_\Delta)$ to finite free $\mathbb Z_p$-modules with continuous $G_K$-action is an equivalence onto the full subcategory of pairs $(T,\rho)$ for which $T[1/p]$ is a crystalline $\mathbb Q_p$-representation of $G_K$.

For this statement, a finite-dimensional continuous $\mathbb Q_p$-representation $V$ of $G_K$ is crystalline when $D_{\mathrm{crys}}(V)=(B_{\mathrm{crys}}\otimes_{\mathbb Q_p}V)^{G_K}$ has dimension $\dim_{\mathbb Q_p}V$ over $K_0=W(k)[1/p]$, where $B_{\mathrm{crys}}$ is the crystalline period ring with its $G_K$-action.

This is an equivalence for finite-free $\mathbb Z_p$-lattices and vector-bundle prismatic F-crystals. It makes no assertion for arbitrary torsion coefficient modules or for prismatic F-crystals over general relative bases.

## Statement references

[Bhargav Bhatt and Peter Scholze, *Prismatic F-crystals and Crystalline Galois Representations*, Theorems 1.2 and 5.6, §§5–6.4](https://arxiv.org/pdf/2106.14735v2.pdf)

[Heng Du and Tong Liu, *A prismatic approach to (phi, G-hat)-modules and F-crystals*, Theorem 4.1.10 and §§4.1–4.3](https://arxiv.org/pdf/2107.12240v3.pdf)

## Remaining local proof obligations

The equivalence is kept at the source's full scope, but no local proof is supplied. Full faithfulness uses the prismatic/étale realization comparison and its descent along $\operatorname{Spf}(O_C)\to\operatorname{Spf}(O_K)$; essential surjectivity in Bhatt–Scholze §6.4 constructs a prismatic F-crystal from a crystalline lattice using filtered $\varphi$-modules, period sheaves, boundedness, and descent/gluing. Imported steps include SW18 Theorem 14.2.1, FF19 Proposition 10.5.6, BMS18 Lemmas 4.6 and 4.26, and the integral descent arguments in §§6.3–6.4. The actual batch 82 period-ring, de Rham, and crystalline definitions and the Colmez–Fontaine statement were inspected; their Step 1 records are escalated. These definitions/theorem are scoped to finite $K/\mathbb Q_p$, whereas the source classification theorem permits possibly non-finite complete discretely valued $K$. The crystalline definition depends on [[lem-p-adic-period-ring-comparison-embedding-is-injective]], which now contains a local proof for finite $K/\mathbb Q_p$ with a given valued closure and compatible primitive cyclotomic system. This does not supply the general-$K$ interface. The Colmez–Fontaine theorem and period invariants/regularity still have no supplied proofs. The completed algebraic closure's algebraic closedness is supplied by [[lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed]], whose proof assumes Choice and uses Countable Choice for completion; reconcile this axiom use with the source theorem before proof acceptance. No theorem is accepted by citation alone.

