---
id: ex-good-reduction-cohomology-lattice-prismatic-realization
kind: example
title: "Good-reduction cohomology lattices and prismatic realization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-p-adic-etale-and-crystalline-cohomology
  - def-crystalline-p-adic-galois-representation
  - thm-bms-ainf-integral-comparison-for-smooth-proper-formal-schemes
  - thm-prismatic-f-crystals-over-ok-classify-crystalline-galois-lattices
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, Theorems 1.1 and 14.6"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
    - title: "Bhatt and Scholze, Prismatic F-crystals and Crystalline Galois Representations, Example 4.6 and Theorem 5.6"
      url: "https://arxiv.org/pdf/2106.14735v2.pdf"
---

## Example

Let $K/\mathbb Q_p$ be a complete discretely valued extension with perfect residue field $k$ and valuation ring $O_K$. Choose an algebraic closure $\overline K$ with an extension of the absolute value, let $C$ be its metric completion, let $\mathfrak X$ be a proper smooth formal $O_K$-scheme, let $X$ be its rigid analytic generic fibre, write $X_k=\mathfrak X\otimes_{O_K}k$ for the special fibre and $X_C=X\times_K C$ for the geometric generic fibre, and put $G_K=\operatorname{Gal}(\overline K/K)$. Let $W(k)$ be the $p$-typical Witt ring, let $K_0=W(k)[1/p]$, and let $B_{\mathrm{crys}}$ be the crystalline period ring with its $G_K$-action. For a finite-dimensional continuous $\mathbb Q_p$-representation $V$, crystalline means $\dim_{K_0}(B_{\mathrm{crys}}\otimes_{\mathbb Q_p}V)^{G_K}=\dim_{\mathbb Q_p}V$. Write $H^i_{\acute et}(X_C,\mathbb Z_p)$ for degree-$i$ $p$-adic étale cohomology of the generic fibre with its natural $G_K$-action, and $H^i_{\mathrm{crys}}(X_k/W(k))$ for degree-$i$ crystalline cohomology of the special fibre over $W(k)$ with its canonical Frobenius. For an integer $i\geq0$, suppose multiplication by $p$ is injective on both $H^i_{\mathrm{crys}}(X_k/W(k))$ and $H^{i+1}_{\mathrm{crys}}(X_k/W(k))$. Then $T_i=H^i_{\acute et}(X_C,\mathbb Z_p)$ is a finite free $\mathbb Z_p$-lattice in the crystalline representation $T_i\otimes_{\mathbb Z_p}\mathbb Q_p$, and the prismatic classification equivalence assigns a prismatic F-crystal of vector bundles on $\operatorname{Spf}(O_K)$ whose étale realization is $T_i$. The BMS reconstruction recovers $H^i_{\mathrm{crys}}(X_k/W(k))$ with its Frobenius from this Galois lattice.

## Example references

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, Theorems 1.1 and 14.6](https://arxiv.org/pdf/1602.03148v3.pdf)

[Bhargav Bhatt and Peter Scholze, *Prismatic F-crystals and Crystalline Galois Representations*, Example 4.6 and Theorem 5.6](https://arxiv.org/pdf/2106.14735v2.pdf)

## Remaining local proof obligations

This is a conditional application of the two main comparison theorems. The actual batch 82 cohomology and crystalline-representation definitions are present and were inspected, but both Step 1 records are escalated: the cohomology interface is limited to finite $K$ and smooth proper algebraic schemes and assumes Choice for its site/cohomology construction; the crystalline definition is finite-$K$ and now contains a filtration well-definedness proof using [[lem-p-adic-period-ring-comparison-embedding-is-injective]], which also now contains a local proof. These finite-$K$ proofs do not extend the interface to the present general-$K$ setup, and the period-ring construction obligations remain separate. The present formal rigid-generic-fibre setup therefore still needs reconciliation with those interfaces. The BMS comparison theorem and the prismatic classification theorem also remain escalated. Proper-smooth cohomology finiteness, the torsion-free lattice conclusion, and existence of the corresponding F-crystal have not been proved locally. No proof is inferred from either source citation.

