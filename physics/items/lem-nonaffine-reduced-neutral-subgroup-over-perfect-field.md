---
id: lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
kind: lemma
title: "Reduced identity components over perfect fields"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, thm-ag-separating-transcendence-basis-perfect-field, lem-nonaffine-connected-group-geometrically-connected, thm-nonempty-regular-locus-reduced-variety-perfect-field, thm-regular-equals-smooth-over-perfect-field, thm-smooth-locus-open, thm-primitive-element-theorem-for-finite-separable-extensions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "fb46342bb988cf533d6307595cc4d39aef0ceb74f93583fb0a17b5dabe680066"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), 1.39 and Theorems 8.24-8.26, pp.153-154"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Sections 4.2-4.3"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume AC. Let $k$ be perfect and $H$ a separated finite-type $k$-group scheme. Then $H_{\mathrm{red}}$ is a smooth closed subgroup and $R=(H_{\mathrm{red}})^0$ is a smooth geometrically integral connected closed subgroup with $\dim R=\dim H$. If $H$ is normal in a smooth finite-type group $G$, then $H_{\mathrm{red}}$ and $R$ are normal in $G$. If $H$ is affine or proper, respectively, so are these subgroups. No smoothness or connectedness of $H$ is assumed.

## Facts & Assumptions

[F1] Finitely generated extensions of a perfect field have separating transcendence bases, and finite separable extensions have primitive elements. ([[thm-ag-separating-transcendence-basis-perfect-field]], [[thm-primitive-element-theorem-for-finite-separable-extensions]])

[F2] Connected finite-type groups are geometrically connected; smooth connected groups are geometrically integral. A reduced finite-type scheme over a perfect field has a nonempty regular locus on each component, regularity is smoothness, and the smooth locus is open. ([[lem-nonaffine-connected-group-geometrically-connected]], [[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-smooth-locus-open]], [[thm-primitive-element-theorem-for-finite-separable-extensions]])

## Proof

**Given:** AC, perfect $k$, and $H$ as stated.

1.1 A reduced finite-type $k$-algebra $B$ remains reduced after every field extension $K/k$. Indeed $B$ injects into the finite product of fraction fields of its minimal-prime quotients, and this injection survives tensoring with $K$. Each such field $F$ is finite separable over $k(t_1,\ldots,t_r)$ by [F1]. The ring $k(t)\otimes_kK$ is a localization of the domain $K[t]$; $F\otimes_kK$ is free over it and injects into its localization over $K(t)$. That localization is a finite separable algebra, hence reduced: a primitive-element separable polynomial remains coprime to its derivative after extension. Therefore $F\otimes_kK$, and then $B\otimes_kK$, are reduced. Products of reduced finite-type $k$-schemes are consequently reduced: inject one factor's chart into its component fraction fields and apply the preceding argument to the other factor. Nilpotent ideal sections defining $H_{\mathrm{red}}$ pull back to zero on $H_{\mathrm{red}}\times H_{\mathrm{red}}$ and on $H_{\mathrm{red}}$ under multiplication and inverse. The rational identity also factors through the reduction. Thus the group law restricts to $H_{\mathrm{red}}$. [F1, given, algebra, construct]

2.1 The reduced group is geometrically reduced by step 1.1 and hence smooth by [F2]. Its identity component $R$ is open and closed: a Noetherian space has finitely many connected components. It is a subgroup, since after algebraic closure the product of its connected component with itself is connected and contains the identity, and inversion preserves that component. These factorizations descend by faithful scalar extension. By [F2], $R$ is geometrically connected and integral. Over the algebraic closure every component of the smooth reduced group is a translate of $R$: translate any rational point in that component to the identity, and use the inverse translation. Thus all components have dimension $\dim R$; reduction and field extension do not alter dimension, giving $\dim H=\dim R$. If $H$ is normal in smooth $G$, conjugation on $G\times H_{\mathrm{red}}$ factors through $H_{\mathrm{red}}$ because this product is reduced. Over algebraic closure conjugation by every group point preserves the identity component; the reduced source $G\times R$ then makes this a scheme-theoretic factorization, since defining ideal sections vanishing at all closed points are zero. It descends to $k$, proving normality of $R$. Finally both subgroups are closed in $H$, so inherit affineness or properness. AC enters through [F1]–[F2]. [F1, F2, step 1.1, algebra] ∎
