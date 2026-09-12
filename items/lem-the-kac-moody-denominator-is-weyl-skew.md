---
id: lem-the-kac-moody-denominator-is-weyl-skew
kind: lemma
title: The Kac Moody denominator is Weyl skew
deps: ["def-kac-moody-denominator-product-with-root-multiplicities", "prop-the-weyl-group-preserves-roots-and-root-multiplicities"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lemma 10.1.1 and Section 10.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Section 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For each simple reflection $s_i$, the shifted denominator satisfies $s_i(D)=-D$ as a transformed formal sum/product, and therefore $w(D)=\det(w)D$. No action on all downward-cone series is asserted.

## Facts & Assumptions

**Given:** A finite symmetrizable GCM and the shifted denominator.

[F1] The product and its finite coefficient meaning, including the simple-axis factor of multiplicity one, are [[def-kac-moody-denominator-product-with-root-multiplicities]].

[F2] Weyl transformations preserve roots and multiplicities by [[prop-the-weyl-group-preserves-roots-and-root-multiplicities]].

## Proof

1.1 A positive root other than $\alpha_i$ has a positive simple coordinate at an index different from $i$: the only roots on the $i$th axis are $\pm\alpha_i$ by F1's root conventions. Reflection changes only coordinate $i$, and its image is a root by F2, so the one-sign property makes it positive. Applying the involution twice proves that $s_i$ permutes $\Delta^+\setminus\{\alpha_i\}$, preserving every multiplicity. Also $s_i\rho=\rho-\alpha_i$ since $\rho(h_i)=1$. [F1, F2, algebra]

2.1 Transform all exponents of the defining product. Step 1.1 gives $$s_iD=e^{\rho-\alpha_i}(1-e^{\alpha_i})\prod_{\alpha>0,\,\alpha\ne\alpha_i}(1-e^{-\alpha})^{m_\alpha}=-D.$$ The positive-root product after reindexing is coefficientwise finite by F1; the single exceptional factor is a polynomial with two terms. Thus this manipulation really equals the transformed coefficient array, rather than assuming an action on the entire completion. A finite word of reflections now transforms this particular array repeatedly, producing one minus sign per reflection. Each simple reflection fixes a hyperplane and negates its complementary root line, so has determinant $-1$; the accumulated sign is $\det(w)$ independent of the word. The identity word has sign one. Every transformation used only finite coefficient computations, with no AC. [F1, step 1.1, algebra] ∎
