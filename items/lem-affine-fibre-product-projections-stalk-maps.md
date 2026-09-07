---
id: "lem-affine-fibre-product-projections-stalk-maps"
kind: "lemma"
title: "Projections on primes, stalks and residue fields"
status: published
origin: "pipeline"
deps: ["thm-affine-fibre-product-tensor-ring", "thm-stalk-structure-sheaf-prime-localization", "lem-spectrum-map-stalk-homomorphisms-local"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.17.2 and 26.17.5"
      url: "https://stacks.math.columbia.edu/tag/01JO"
proof_strategy: direct
---

## Statement

For $A\to B,A\to C$, put $D=B\otimes_A C$. Given $\mathfrak r\in\operatorname{Spec}D$, its projections are $\mathfrak q=\{b:b\otimes1\in\mathfrak r\}$ and $\mathfrak q'=\{c:1\otimes c\in\mathfrak r\}$. Their contractions to $A$ coincide at $\mathfrak p$. The stalk maps are
$$B_{\mathfrak q}\longrightarrow D_{\mathfrak r},\quad b/s\longmapsto(b\otimes1)/(s\otimes1),\qquad C_{\mathfrak q'}\longrightarrow D_{\mathfrak r},\quad c/t\longmapsto(1\otimes c)/(1\otimes t).$$
They are local and induce embeddings $\kappa(\mathfrak q),\kappa(\mathfrak q')\to\kappa(\mathfrak r)$ agreeing on $\kappa(\mathfrak p)$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes, $$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$$ The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F2] For $\mathfrak p\in\operatorname{Spec}A$, there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$. ([[thm-stalk-structure-sheaf-prime-localization]])

[F3] Let $\varphi:A\to B$, let $\mathfrak q\in\operatorname{Spec}B$, and put $\mathfrak p=\varphi^{-1}(\mathfrak q)$. The induced stalk homomorphism $A_{\mathfrak p}\to B_{\mathfrak q}$ is local. ([[lem-spectrum-map-stalk-homomorphisms-local]])

## Proof

1.1 F1 identifies the projection ring maps with the two tensor inclusions. Contraction therefore gives the stated primes, and their contractions to $A$ agree because $a\otimes1=1\otimes a$. [given, F1]

2.1 Elements outside the contracted primes map outside $\mathfrak r$ and hence become units in $D_{\mathfrak r}$. F2 identifies these localizations as stalks, and F3 shows that the displayed maps are local. [F2, F3, step 1.1]

3.1 Quotient each local map by maximal ideals. The resulting unital maps between fields are injective: their kernels are proper ideals of a field, hence zero. The maps agree on $A$ and then on its residue field after localization and quotient. If $D=0$ there is no prime $\mathfrak r$, so the pointwise assertion is vacuous. [step 1.1, step 2.1, algebra] ∎
