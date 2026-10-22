---
id: lem-bmw-finite-source-normal-form-over-dubrovnik-extension
kind: lemma
title: Finite source normal form over the Dubrovnik coefficient extension
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - thm-bmw-kauffman-tangle-basis
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - lem-bmw-relations-dubrovnik-parameter-dictionary
proof_strategy: direct
axiom_use: "Choice-free: transport of an explicitly indexed finite module basis along inverse coefficient-ring maps."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Goodman and Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§5.4–5.5"
      url: https://arxiv.org/pdf/math/0411155
      locator: "PDF pp. 40–49, Propositions 5.26, 5.28 and 5.40, Theorem 5.41; the complete local reconstruction is in the cited published BMW basis supplier, Proof phases 6–18."
---

## Statement

Let $S=\mathbb Z[a^{\pm1},z,d^{\pm1}]/(z(d-1)-(a-a^{-1}))$ and $T=S[q^{\pm1}]/(q-q^{-1}-z)$. Put $\rho=a$ and $\delta=d$. For every $n\ge0$, the abstract presented algebra $BMW_n(T;q,\rho,\delta)$ has a finite basis indexed by the perfect matchings of $2n$ endpoints. In particular it is spanned by $N_n$ elements, where $N_0=1$ and $N_n=(2n-1)!!$ for $n\ge1$. This is a source-module assertion about the generators-and-relations algebra, independently of any proposed map to a Dubrovnik tangle algebra.

## Statement references

[[thm-bmw-kauffman-tangle-basis|The proved universal BMW basis theorem]]

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|The abstract BMW presentation]]

[[lem-bmw-relations-dubrovnik-parameter-dictionary|The coefficient extension]]

[Goodman and Hauschild, §§5.4–5.5](https://arxiv.org/pdf/math/0411155)

## Facts & Assumptions

**Given:** The abstract BMW presentation over $T$ and the finite matching index set.

[F1] Over $R=\mathbb Z[q^{\pm1},r^{\pm1},\Delta^{\pm1}]/((q-q^{-1})(\Delta-1)-(r-r^{-1}))$, the abstract BMW presentation has a matching-indexed basis. Its local proof establishes tower absorption, nested-cap identities, the through-strand ideal filtration, and shuffle stability before the double-induction injectivity argument ([[thm-bmw-kauffman-tangle-basis]], Proof phases 6–18).

[F2] The BMW presentation uses $g_i-g_i^{-1}=(q-q^{-1})(1-e_i)$, $g_ie_i=e_ig_i=\rho^{-1}e_i$, $e_ig_{i\pm1}e_i=\rho e_i$, and $e_i^2=\delta e_i$, with the displayed braid and cup-slide relations; ranks zero and one are the scalar algebra ([[def-bmw-algebra-with-fixed-kauffman-skein-convention]]).

[F3] In $T$, $q-q^{-1}=z$, $\rho=a$, $\delta=d$, and $z(d-1)=a-a^{-1}$ ([[lem-bmw-relations-dubrovnik-parameter-dictionary]]).

## Proof

1.1 Define $f:R\to T$ by $q\mapsto q$, $r\mapsto a$, $\Delta\mapsto d$. Its defining relation maps to zero by [F3], and its unit generators map to units. Conversely define $h:T\to R$ by $a\mapsto r$, $d\mapsto\Delta$, $q\mapsto q$, and $z\mapsto q-q^{-1}$. The relation of $S$ maps to the relation of $R$, and $q-q^{-1}-z$ maps to zero. On each displayed ring generator, both composites are the identity. Thus $f,h$ are inverse ring isomorphisms, without inverting $z$ or requiring a flatness argument. [F3, construct, algebra]

2.1 Transport the source presentation along $f$. Send each $g_i^{\pm1}$ and $e_i$ to the identically named generator over $T$. The braid, commutation and cup-slide relations are literally identical, while the remaining coefficients become $q-q^{-1}$, $a^{-1}$, $a$, and $d$, exactly as in [F2] and [F3]. The inverse coefficient map $h$ gives an inverse map of presented algebras, because it fixes the generator names and reverses each coefficient substitution. This verifies the source comparison without assuming that either tangle realization is injective. [F1, F2, F3, step 1.1, algebra]

3.1 Transport the basis in [F1] through this algebra isomorphism. If $b_m$ denotes the transported basis element with matching index $m$, every source element has one expression $\sum_m t_m b_m$ with $t_m\in T$, and these expressions are unique. This is the finite source normal form supplied by the already proved local universal theorem, whose ideal/shuffle proof concerns the abstract algebra rather than a dimension inference from a tangle quotient. A perfect matching pairs the first endpoint in $2n-1$ ways and then matches the remaining endpoints; hence there are $N_n=(2n-1)!!$ indices, and one empty index at $n=0$. The scalar definitions give the same rank-one conclusion at $n=1$. [F1, F2, step 2.1, algebra] ∎
