---
id: lem-the-induced-homology-map-is-independent-of-the-comparison-lift
kind: lemma
title: "The induced homology map is independent of the chosen comparison lift"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-object-relative-to-projective-resolution-data, lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, def-chain-homotopy, def-additive-functor, prop-an-additive-functor-preserves-zero-morphisms, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum and
$F:\mathcal A\to\mathcal B$ an additive functor. If
$u:A\to B$ is a morphism and
$$\widetilde u_\bullet,\widehat u_\bullet:P_\bullet(A)\to P_\bullet(B)$$
are two comparison lifts of $u$, then for every $n\in\mathbb Z$ the induced
maps on homology
$$H_n\!\bigl(F(\widetilde u_\bullet)\bigr),\,H_n\!\bigl(F(\widehat u_\bullet)\bigr):L_n^PF(A)\to L_n^PF(B)$$
are equal.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ and two comparison lifts $\widetilde u_\bullet,\widehat u_\bullet$ of $u$.

[L1] Two comparison maps lifting the same morphism are chain-homotopic ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[L2] A chain homotopy is given by equations of the form $f_n-g_n=d_{n+1}s_n+s_{n-1}d_n$ ([[def-chain-homotopy]]).

[L3] Additive functors preserve sums and zero morphisms ([[def-additive-functor]], [[prop-an-additive-functor-preserves-zero-morphisms]]).

[L4] Chain-homotopic maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L5] The objects $L_n^PF(A)$ and $L_n^PF(B)$ are the homology objects of the deleted resolutions after applying $F$ ([[def-left-derived-object-relative-to-projective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the two lifts $\widetilde u_\bullet$ and $\widehat u_\bullet$ are chain-homotopic. Let $s$ be such a homotopy. [L1, given, construct]

2.1 The equations in [L2] become $$F(\widetilde u_n)-F(\widehat u_n) =F(d_{n+1})F(s_n)+F(s_{n-1})F(d_n)$$ after applying $F$, because [L3] lets $F$ preserve sums and zero morphisms. Hence $F(s)$ is a chain homotopy from $F(\widetilde u_\bullet)$ to $F(\widehat u_\bullet)$. [L2, L3, step 1.1, algebra]

3.1 By [L4], chain-homotopic maps induce the same map on homology. Using [L5] to identify those homology objects with the displayed left derived objects gives $$H_n\!\bigl(F(\widetilde u_\bullet)\bigr)=H_n\!\bigl(F(\widehat u_\bullet)\bigr)$$ for every $n$. [L4, L5, step 2.1] ∎
