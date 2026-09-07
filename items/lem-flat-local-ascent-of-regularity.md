---
id: "lem-flat-local-ascent-of-regularity"
kind: "lemma"
title: "flat local ascent of regularity"
deps: ["thm-regular-local-rings-are-domains-and-cohen-macaulay", "thm-quotient-and-lifting-regularity-across-a-regular-element", "def-flat-and-faithfully-flat-modules-and-ring-maps", "thm-auslander-buchsbaum-serre-regularity-criterion", "lem-finite-local-modules-admit-minimal-free-resolutions", "lem-projective-dimension-from-last-nonzero-betti-number"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Exercise 12.40(i), p.124"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Lemma 10.110.9 full proof (minimal-resolution version of its syzygy argument)"
      url: "https://stacks.math.columbia.edu/tag/00OF"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a flat local map $(R,\mathfrak m)\to(S,\mathfrak n)$ of nonzero Noetherian local rings: if $R$ and $S/\mathfrak mS$ are regular, then $S$ is regular. Conversely, regularity of $S$ implies regularity of $R$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F2] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

[F3] [[def-flat-and-faithfully-flat-modules-and-ring-maps]]: Let $R$ be a commutative ring and let $M$ be an $R$-module. The module $M$ is **flat** if the functor $-\otimes_RM$ preserves exact sequences: whenever $A\to B\to C$ is exact, so is $$A\otimes_RM\longrightarrow B\otimes_RM\longrightarrow C\otimes_RM.$$ Since tensoring is always right exact (thm-right-exactness-of-tensor-products, def-exact-and-short-exact-sequences-of-modules), the definition asks for the remaining left-hand exactness. Its equivalent formulation as preservation of injections is proved separately rather than built into the definition. The module $M$ is **faithfully flat** if a sequence of $R$-modules is exact exactly when its tensor with $M$ is exact. For a unital ring homomorphism $f:R\to S$ (def-ring-homomorphism) between commutative rings, $S$ is an $R$-module by $r\cdot s=f(r)s$. The map $f$ is **flat**, respectively **faithfully flat**, when this $R$-module is flat, respectively faithfully flat.

[F4] [[thm-auslander-buchsbaum-serre-regularity-criterion]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$ the following are equivalent: $R$ is regular; $\operatorname{pd}_Rk<\infty$; $\operatorname{gldim}R<\infty$; and every finite $R$-module has finite projective dimension. When these hold, $\operatorname{gldim}R=\operatorname{pd}_Rk=\dim R$. A nonzero finite module over regular local $R$ is maximal Cohen–Macaulay (depth $\dim R$) if and only if it is free.

[F5] [[lem-finite-local-modules-admit-minimal-free-resolutions]]: Every finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has an augmented resolution $\cdots\to F_1\to F_0\to M\to0$ by finite-rank free modules, with $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for $i>0$. Such a resolution is called minimal; it need not be bounded. This extends the bounded terminology without changing it.

[F6] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

## Proof

1.1 Suppose the base and closed fibre are regular. A regular system $x_1,\ldots,x_d$ of $R$ is a regular sequence generating $\mathfrak m$. Tensor the successive injective multiplication maps on $R/(x_1,\ldots,x_{i-1})$ with the flat module $S$. This gives injective multiplication by each image $x_i$ on the corresponding quotient of $S$. These quotients are nonzero because their defining ideals lie in $\mathfrak n$. [F1, F3]

2.1 The terminal quotient is the regular closed fibre. Repeatedly lift regularity across those nonzerodivisors to get regularity of $S$. If $d=0$, the fibre is $S$ and the implication is immediate. [F2, step 1.1]

3.1 For descent, choose a degreewise finite minimal resolution of $k_R$ and tensor it with $S$. Flatness preserves its exactness, locality puts all differential entries in $\mathfrak n$, and $S/\mathfrak mS$ is a nonzero finite $S$-module. If $S$ is regular, its finite global dimension forces this minimal resolution to terminate by the Betti criterion. A term $S^r$ is zero only if $r=0$, so the original resolution over $R$ terminates as well. Finite $\operatorname{pd}_Rk_R$ gives regularity of $R$. This argument also covers global dimension zero. [F5, F3, F4, F6] ∎
