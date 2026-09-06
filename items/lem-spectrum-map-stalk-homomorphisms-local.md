---
id: lem-spectrum-map-stalk-homomorphisms-local
kind: lemma
title: "The stalk maps induced by a ring map are local"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-affine-schemes-from-ring-map, thm-stalk-structure-sheaf-prime-localization, thm-localisation-at-a-prime-is-local, def-morphism-locally-ringed-spaces]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.6.4"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Statement

Let $\varphi:A\to B$, let $\mathfrak q\in\operatorname{Spec}B$, and put
$\mathfrak p=\varphi^{-1}(\mathfrak q)$. The induced stalk homomorphism
$A_{\mathfrak p}\to B_{\mathfrak q}$ is local.

## Facts & Assumptions

**Given:** A ring map $\varphi:A\to B$ and a prime $\mathfrak q$ of $B$.

[F1] The induced map of affine spectra has, on stalks, the localization map
at $\mathfrak p=\varphi^{-1}(\mathfrak q)$ ([[def-morphism-affine-schemes-from-ring-map]]).

[F2] The maximal ideals of $A_{\mathfrak p}$ and $B_{\mathfrak q}$ are
$\mathfrak pA_{\mathfrak p}$ and $\mathfrak qB_{\mathfrak q}$, respectively
([[thm-localisation-at-a-prime-is-local]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the stalk map sends $a/s$ to $\varphi(a)/\varphi(s)$, for $s\notin\mathfrak p$. [F1]

1.2 This image lies in $\mathfrak qB_{\mathfrak q}$ exactly when $\varphi(a)\in\mathfrak q$, because its denominator is outside the prime ideal. [given, algebra]

2.1 Thus [F2] identifies the inverse image of $\mathfrak qB_{\mathfrak q}$ with $\mathfrak pA_{\mathfrak p}$, so the map is local. [F2, step 1.2] ∎
 
