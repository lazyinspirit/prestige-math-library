---
id: lem-fractional-ideal-operations-well-defined
kind: lemma
title: "The basic operations on fractional ideals are well defined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fractional-ideal, def-product-and-colon-of-fractional-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a domain with fraction field $K$. If $I$ and $J$ are fractional ideals of $R$, then $I+J$, $IJ$, $(I:J)$, and $aI$ for $0\neq a\in K$ are again fractional ideals.

## Facts & Assumptions

**Given:** A domain $R$ with fraction field $K$, fractional ideals $I,J\subseteq K$, and a nonzero scalar $a\in K$.

[F1] A fractional ideal is a nonzero $R$-submodule of $K$ bounded by one nonzero denominator ([[def-fractional-ideal]]).

[F2] Product and colon are defined inside the common field $K$ ([[def-product-and-colon-of-fractional-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Choose nonzero $d,e\in R$ with $dI\subseteq R$ and $eJ\subseteq R$ by [F1]. Then $de(I+J)\subseteq R$, $de(IJ)\subseteq R$, and if $a=u/v$ with $u,v\in R$ and $v\neq0$, then $vd(aI)\subseteq R$. The modules $I+J$, $IJ$, and $aI$ are nonzero because they contain any fixed nonzero element of $I$, the product of nonzero elements of $I$ and $J$, and the nonzero element $ax$ for $0\neq x\in I$, respectively. Thus $I+J$, $IJ$, and $aI$ are fractional ideals. [F1, F2, given, choose, algebra]

2.1 Choose $0\neq i\in I$ and $0\neq y\in J$. Since $eJ\subseteq R$, one has $(ei)J\subseteq I$, so $0\neq ei\in(I:J)$. If $x\in(I:J)$, then $xy\in I$, hence $dxy\in R$. Since $ey\in R$ is nonzero, one gets $(dey)x=d x(ey)\in R$. Therefore every $x\in(I:J)$ is bounded by one nonzero denominator, so $(I:J)$ is a fractional ideal. [F1, F2, step 1.1, choose, algebra]

3.1 These constructions are defined by subset conditions and finite sums inside the fixed field $K$, so they do not depend on which denominators were chosen in step 1.1. Hence the operations are well defined. [F2, step 1.1, step 2.1] ∎
