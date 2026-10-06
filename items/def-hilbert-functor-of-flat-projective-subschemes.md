---
id: def-hilbert-functor-of-flat-projective-subschemes
kind: definition
title: "Hilbert functor of flat finitely presented projective families"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-euler-polynomial-for-ample-polarization
  - def-projective-morphism-coherent-bundle-convention
  - def-dependent-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step5-hash-29-post-5a.json"
    content_sha256: "dd428ae8a8d0c5625336847fe917d3749ee06edb7533e18aa44d77f8e3c2e926"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Section 1, Stratification by Hilbert Polynomials, page 4"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Definition

Work with AC and DC. Fix a locally Noetherian scheme $S$, possibly non-quasi-compact, a projective morphism of finite presentation $X\to S$ in the convention of [[def-projective-morphism-coherent-bundle-convention]], and a relatively ample invertible sheaf $L$ on $X$. The test category is **all $S$-schemes**, with arbitrary $S$-morphisms. Set $X_T=X\times_ST$. The set $\operatorname{Hilb}_{X/S}(T)$ consists of closed subschemes $Z\hookrightarrow X_T$ whose inclusion is of finite presentation and whose structure sheaf is flat over $T$. They are taken as embedded subschemes, so equality means equality of their ideal sheaves. Such $Z\to T$ is projective of finite presentation. For a numerical polynomial $P$, its subfunctor $\operatorname{Hilb}^{P,L}_{X/S}$ consists of these families satisfying the following fibrewise eventual condition: for every geometric point $t:\operatorname{Spec}\Omega\to T$, there is an integer $r_t$ such that $\chi(Z_t,L_t^{\otimes r}|_{Z_t})=P(r)$ for all integers $r\ge r_t$. Equivalently, the eventual Hilbert function $h^0(Z_t,L_t^{\otimes r}|_{Z_t})$ is $P(r)$ in a sufficiently large tail. The cutoff in this membership definition may depend on the fibre; no uniform cutoff over an arbitrary test scheme is assumed. This says exactly that every fibre Hilbert polynomial for the pulled-back polarization is $P$. By [[lem-hilbert-euler-polynomial-for-ample-polarization]], it is also equivalent here to the all-integer Euler-characteristic characterization; the later regularity suppliers establish uniform cutoffs where their hypotheses apply. Pullback is scheme theoretic inverse image. The complete functor allows varying fibre polynomial on different open and closed loci of $T$; it is not required to have one polynomial globally. Empty families and $P=0$ are allowed. AC/DC are the inherited conventions for the scheme/cohomology/approximation suppliers, not restrictions on test schemes.

Source locator: Nitsure, Section 1, “Stratification by Hilbert Polynomials,” page 4, defines the fibre polynomial through Euler characteristic; the proved ample-polarization supplier above supplies its equivalence with the eventual Hilbert-function condition.
