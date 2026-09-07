---
id: "ex-auslander-buchsbaum-first-syzygy"
kind: "example"
title: "auslander buchsbaum first syzygy"
deps: ["lem-auslander-buchsbaum-syzygy-projective-dimension", "thm-auslander-buchsbaum-formula", "cor-regular-local-residue-field-projective-dimension-dimension", "thm-localisation-and-polynomial-extension-of-regular-rings"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.31 and Theorem 12.33, pp.121–123"
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

For $R=k[x,y]_{(x,y)}$ with maximal ideal $\mathfrak m$, $\operatorname{pd}_Rk=2$, $\operatorname{depth}_Rk=0$, and its first syzygy satisfies $\operatorname{pd}_R\mathfrak m=1$ and $\operatorname{depth}_R\mathfrak m=1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-auslander-buchsbaum-syzygy-projective-dimension]]: Let $0\to K\to F_0\to M\to0$ be the initial minimal presentation of a nonzero finite module over a nonzero Noetherian local ring. If $0<n=\operatorname{pd}M<\infty$, then $K\ne0$ and $\operatorname{pd}K=n-1$.

[F2] [[thm-auslander-buchsbaum-formula]]: For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free.

[F3] [[cor-regular-local-residue-field-projective-dimension-dimension]]: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, $\operatorname{pd}_Rk=d$ and $\beta_i^R(k)=\binom di$ for $0\le i\le d$, with $\beta_i^R(k)=0$ for $i>d$.

[F4] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. More generally, for a finite module over any commutative Noetherian ring, projective dimension is the supremum of its prime-local projective dimensions. Dedekind domains and their finite polynomial extensions are regular.

## Verification

1.1 The ring is regular local of dimension two, by polynomial regularity and the coordinate chain and generator count. The residue-field computation gives projective dimension two. Its depth is zero because every maximal-ideal element kills the nonzero module $k$. The presentation $0\to\mathfrak m\to R\to k\to0$ is minimal. [F4, F3, algebra]

2.1 The syzygy theorem gives $\operatorname{pd}\mathfrak m=1$. The ring depth is two, since $x,y$ is a regular sequence and depth is bounded by dimension. Auslander–Buchsbaum gives $\operatorname{depth}\mathfrak m=2-1=1$. Concretely its minimal resolution is $0\to R\xrightarrow{c\mapsto(-yc,xc)}R^2\to\mathfrak m\to0$: reducing a relation modulo $x$ shows $b=xc$, and then cancellation gives $a=-yc$. [F1, F2, step 1.1, algebra] ∎
