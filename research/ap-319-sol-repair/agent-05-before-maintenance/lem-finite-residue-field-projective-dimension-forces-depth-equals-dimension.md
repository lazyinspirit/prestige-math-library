---
id: "lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension"
kind: "lemma"
title: "finite residue field projective dimension forces depth equals dimension"
deps: ["thm-auslander-buchsbaum-formula", "lem-positive-depth-ring-has-regular-minimal-generator", "lem-residue-field-splits-off-reduced-maximal-ideal", "thm-quotient-and-lifting-regularity-across-a-regular-element", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "lem-depth-quotient-by-regular-element"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.33, p.123"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If the residue field of a nonzero Noetherian local ring $R$ has finite projective dimension, then $R$ is regular and $\operatorname{depth}R=\dim R=\operatorname{edim}R$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-auslander-buchsbaum-formula]]: For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free.

[F2] [[lem-positive-depth-ring-has-regular-minimal-generator]]: If a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has positive depth, then some $x\in\mathfrak m\setminus\mathfrak m^2$ is a nonzerodivisor. The residue field need not be infinite.

[F3] [[lem-residue-field-splits-off-reduced-maximal-ideal]]: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and $x\in\mathfrak m\setminus\mathfrak m^2$ a nonzerodivisor. Over $S=R/(x)$ the sequence $0\to(x)/(x\mathfrak m)\to\mathfrak m/x\mathfrak m\to\mathfrak m/(x)\to0$ splits, and $(x)/(x\mathfrak m)\cong k$. Consequently finite $\operatorname{pd}_Rk$ implies finite $\operatorname{pd}_Sk$.

[F4] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

[F5] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F6] [[lem-depth-quotient-by-regular-element]]: Let $R$ be Noetherian, let $M$ be finite, let $I$ lie in the Jacobson radical, and let $x\in I$ be $M$-regular. Then $$\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1.$$

## Proof

1.1 Induct on the finite integer $r=\operatorname{depth}R$. The residue field has depth zero, since every member of $\mathfrak m$ kills it. If $r=0$, Auslander–Buchsbaum gives $\operatorname{pd}k=0$ and its freeness consequence makes $k$ nonzero free. A nonzero free module has zero annihilator, so $\mathfrak m=0$ and $R=k$ is a field. [F1]

2.1 For $r>0$ choose a nonzerodivisor $x\in\mathfrak m\setminus\mathfrak m^2$. The splitting lemma makes $\operatorname{pd}_{R/(x)}k$ finite, and the regular-element depth formula gives depth $r-1$ for the quotient. Depth of this annihilated module over $R$ equals its depth over $R/(x)$: lift sequences from the quotient or project sequences from $R$; multiplication and all successive quotients are identical. [F2, F3, F6, step 1.1]

3.1 The inductive assertion makes $R/(x)$ regular. Lifting across the nonzerodivisor makes $R$ regular; its regular parameters make it Cohen–Macaulay, so depth equals dimension, and regularity equates that dimension with embedding dimension. This completes the induction. [F4, F5, step 2.1] ∎
