---
id: lem-rank-one-projective-embedded-as-a-fractional-ideal
kind: lemma
title: "A finite rank-one projective module embeds as a fractional ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, thm-projective-module-characterizations]
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
    - title: "The Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
pipeline_run: null
---

## Statement

Let $R$ be a domain with fraction field $K$. If $P$ is a finite projective $R$-module such that $P\otimes_RK\cong K$, then there is an injective $R$-linear map $P\hookrightarrow K$ whose image is a fractional ideal of $R$. In particular, $P$ is isomorphic to a fractional ideal.

## Facts & Assumptions

**Given:** A domain $R$ with fraction field $K$, and a finite projective $R$-module $P$ with $P\otimes_RK\cong K$.

[F1] The fraction field $K$ is the localisation obtained by inverting the nonzero elements of $R$ ([[def-field-of-fractions]]).

[L1] A projective module splits off a free cover ([[thm-projective-module-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a finite free module $F$ and maps $i:P\to F$, $p:F\to P$ with $pi=\operatorname{id}_P$. Since $R$ is a domain, the free module $F$ is torsion-free, and therefore its direct summand $P$ is torsion-free. The canonical map $F\to F\otimes_RK$ is injective, so if $x\in P$ maps to $0$ in $P\otimes_RK$, then $i(x)$ maps to $0$ in $F\otimes_RK$ and hence $i(x)=0$. Because $i$ is injective, this forces $x=0$. Thus the canonical map $P\to P\otimes_RK$ is injective. [F1, L1, given, algebra]

2.1 Choose an isomorphism $\varphi:P\otimes_RK\to K$. Composing the canonical injection from step 1.1 with $\varphi$ gives an injective map $P\hookrightarrow K$. If $p_1,\ldots,p_n$ generate the finite module $P$, write their images as $a_j/b_j\in K$ and choose $d=b_1\cdots b_n$. Then $dP\subseteq R$, so the image is a fractional ideal of $R$. [F1, step 1.1, given, choose]

3.1 The image of the injective map in step 2.1 is a fractional ideal isomorphic to $P$ as an $R$-module. [step 2.1] ∎
