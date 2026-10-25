---
id: prop-holomorph-recognises-regular-normal-subgroups
kind: proposition
title: ' A permutation group with a regular normal subgroup $G$ embeds in $\operatorname{Hol}(G)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-holomorph-as-a-permutation-group, thm-internal-external-semidirect-product-equivalence, def-group-action, def-free-group-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter J. Cameron, The Holomorph of a Group"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf"
pipeline_run: null
---

## Statement

Let a group $K$ act faithfully on a nonempty set $\Omega$, and suppose $R\trianglelefteq K$ acts regularly on $\Omega$, meaning freely and transitively. After choosing $\omega_0\in\Omega$ and identifying $\Omega$ with $R$ by $r\leftrightarrow r\omega_0$, the action embeds $K$ in $\operatorname{Hol}(R)$. Under this embedding, $R$ is the subgroup of left translations.

The hypothesis $\Omega\ne\varnothing$ is needed rather than automatic: transitivity as defined here is vacuous on the empty set, so without it no base point $\omega_0$ exists and the displayed identification cannot be made.

## Facts & Assumptions

**Given:** A faithful action of $K$ on a nonempty set $\Omega$, a regular normal subgroup $R$, and a base point $\omega_0\in\Omega$.

[L1] A transitive action carries any chosen point to any other point ([[def-group-action]]), and in a free action only the identity fixes a point ([[def-free-group-action]]). Hence a free transitive action carries any point to any other by a unique group element.

[L2] An internal semidirect product is recognised by a normal factor, a complement, and trivial intersection ([[thm-internal-external-semidirect-product-equivalence]]).

[L3] The holomorph acts faithfully on $R$ by maps $x\mapsto r\alpha(x)$ ([[prop-holomorph-as-a-permutation-group]]).

## Proof

**Proof technique:** direct.

1.1 Let $S=K_{\omega_0}$. Regularity gives, for each $k\in K$, a unique $r\in R$ with $r\omega_0=k\omega_0$. Then $r^{-1}k\in S$, so $K=RS$ and $R\cap S=\{1\}$. [L1]

1.2 For $s\in S$ and $r\in R$, normality gives $srs^{-1}\in R$ and $s(r\omega_0)=(srs^{-1})\omega_0$. Thus, under the chosen identification, $s$ acts as the automorphism $r\mapsto srs^{-1}$, while $R$ acts by left translations. [L1, algebra]

2.1 Since $R\trianglelefteq K$, [L2] identifies $K$ with $R\rtimes S$, where $S$ acts on $R$ by conjugation. [step 1.1, L2]

3.1 The resulting permutations are precisely of the affine form in [L3], giving a homomorphism $K\to\operatorname{Hol}(R)$. It is injective because the original action is faithful. [step 1.2, step 2.1, L3] ∎
