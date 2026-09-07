---
id: "thm-auslander-buchsbaum-serre-regularity-criterion"
kind: "theorem"
title: "auslander buchsbaum serre regularity criterion"
deps: ["lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension", "cor-regular-local-residue-field-projective-dimension-dimension", "lem-local-global-dimension-equals-residue-field-projective-dimension", "thm-auslander-buchsbaum-formula", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "thm-nakayama-lemma"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.33 and Corollary 12.30, pp.121–123"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero Noetherian local ring $(R,\mathfrak m,k)$ the following are equivalent: $R$ is regular; $\operatorname{pd}_Rk<\infty$; $\operatorname{gldim}R<\infty$; and every finite $R$-module has finite projective dimension. When these hold, $\operatorname{gldim}R=\operatorname{pd}_Rk=\dim R$. A nonzero finite module over regular local $R$ is maximal Cohen–Macaulay (depth $\dim R$) if and only if it is free.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension]]: If the residue field of a nonzero Noetherian local ring $R$ has finite projective dimension, then $R$ is regular and $\operatorname{depth}R=\dim R=\operatorname{edim}R$.

[F2] [[cor-regular-local-residue-field-projective-dimension-dimension]]: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, $\operatorname{pd}_Rk=d$ and $\beta_i^R(k)=\binom di$ for $0\le i\le d$, with $\beta_i^R(k)=0$ for $i>d$.

[F3] [[lem-local-global-dimension-equals-residue-field-projective-dimension]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{gldim}R=\operatorname{pd}_Rk$, allowing infinity. If this common value is $n<\infty$, every $R$-module has projective dimension at most $n$.

[F4] [[thm-auslander-buchsbaum-formula]]: For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free.

[F5] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F6] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Proof

1.1 Regularity gives $\operatorname{pd}k=\dim R$ through the Koszul computation. Residue-field projective dimension equals global dimension, so this also bounds every module. Conversely finite projective dimension for every finite module applies to $k$, and finite projective dimension for $k$ forces regularity. These implications prove the four-way equivalence and the numerical equalities, also for dimension zero. [F2, F3, F1]

2.1 Over a regular local ring every finite module has finite projective dimension and $\operatorname{depth}R=\dim R$. Auslander–Buchsbaum therefore makes depth $\dim R$ equivalent to projective dimension zero for a nonzero finite module, hence equivalent to freeness. Conversely a nonzero finite free module has the ring depth. [F4, F5, step 1.1]

3.1 The useful freeness-lifting argument can also be seen directly. If $x\in\mathfrak m$ is injective on a finite $M$ and $M/xM$ is free over $R/(x)$, lift a basis to a surjection $F\to M$ by Nakayama, with finite kernel $K$. A relation has coefficients divisible by $x$, so it is $xv$; injectivity on $M$ implies $v\in K$. Thus $K=xK$, and Nakayama gives $K=0$. This includes a zero quotient basis, when $M=0$. [F6, algebra] ∎
