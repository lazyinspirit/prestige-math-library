---
id: "ex-regular-flat-local-map-with-singular-closed-fibre"
kind: "example"
title: "regular flat local map with singular closed fibre"
deps: ["thm-localisation-and-polynomial-extension-of-regular-rings", "def-embedding-dimension-and-regular-local-ring"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Exercise 12.40(iii), pp.124–125"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

For every field $k$, the local map $k[s]_{(s)}\to k[t]_{(t)}$, $s\mapsto t^2$, is finite free of rank two between regular DVRs. Its closed fibre is $k[t]/(t^2)$ and is not regular.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. More generally, for a finite module over any commutative Noetherian ring, projective dimension is the supremum of its prime-local projective dimensions. Dedekind domains and their finite polynomial extensions are regular.

[F2] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

## Verification

1.1 Before localization every polynomial in $t$ has a unique expression $a(t^2)+tb(t^2)$, so $k[t]$ is free on $1,t$ over $k[s]$. After localizing the base at $(s)$, call the resulting rank-two free algebra $C$. If $h(t)$ has nonzero constant term, write $h=a(s)+tb(s)$. Then $(a+tb)(a-tb)=a(s)^2-sb(s)^2$ is a unit of the base, since its constant term is $a(0)^2\ne0$. Thus every such $h$ is a unit of $C$, proving $C=k[t]_{(t)}$, also in characteristic two. [given, algebra]

2.1 The source and target are regular one-dimensional coordinate local rings (their elements are units times powers of their variable, giving DVRs). The maximal ideal contracts correctly, and freeness makes the map flat. Modulo the source maximal ideal the fibre is $k[t]/(t^2)$, whose only prime is $(t)$, with zero square and one-dimensional cotangent space. Its Krull dimension is zero, so it is singular by the regularity definition. [F1, F2, step 1.1, algebra] ∎
