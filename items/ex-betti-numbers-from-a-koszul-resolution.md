---
id: "ex-betti-numbers-from-a-koszul-resolution"
kind: "example"
title: "betti numbers from a koszul resolution"
deps: ["lem-regular-local-residue-field-koszul-resolution", "cor-betti-number-is-rank-in-minimal-resolution", "thm-localisation-and-polynomial-extension-of-regular-rings"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.33 proof, p.123"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: "draft"
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

For $R=k[x,y]_{(x,y)}$, the augmented complex $0\to R\xrightarrow{c\mapsto(-yc,xc)}R^2\xrightarrow{(a,b)\mapsto xa+yb}R\to k\to0$ is a minimal free resolution. Thus $\beta(k)=(1,2,1)$, with all higher Betti numbers zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-residue-field-koszul-resolution]]: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, the Koszul complex on any regular system of parameters is a minimal free resolution of $k$ of length $d$.

[F2] [[cor-betti-number-is-rank-in-minimal-resolution]]: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

[F3] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. More generally, for a finite module over any commutative Noetherian ring, projective dimension is the supremum of its prime-local projective dimensions. Dedekind domains and their finite polynomial extensions are regular.

## Verification

1.1 The coordinate local ring is regular of dimension two: the coordinate chain and two generators give the dimension. Its variables are regular parameters. The displayed maps are exactly its two-variable Koszul maps; their composition is $-xyc+yxc=0$ and the Koszul theorem gives exactness. [F3, F1, algebra]

2.1 Every entry is in $(x,y)$, so the resolution is minimal. Its ranks in degrees zero, one, two are $1,2,1$ and it is zero above two. The rank formula gives the asserted Betti numbers, independently of the characteristic. [F2, step 1.1] ∎
