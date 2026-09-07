---
id: "ex-betti-numbers-residue-field-regular-ring"
kind: "example"
title: "betti numbers residue field regular ring"
deps: ["lem-regular-local-residue-field-koszul-resolution", "cor-betti-number-is-rank-in-minimal-resolution", "cor-regular-local-residue-field-projective-dimension-dimension", "thm-dimension-at-most-embedding-dimension"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.33, p.123"
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

For $R=k[x,y,z]_{(x,y,z)}$, the residue field has Betti numbers $(1,3,3,1)$ and projective dimension three.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-residue-field-koszul-resolution]]: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, the Koszul complex on any regular system of parameters is a minimal free resolution of $k$ of length $d$.

[F2] [[cor-betti-number-is-rank-in-minimal-resolution]]: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

[F3] [[cor-regular-local-residue-field-projective-dimension-dimension]]: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, $\operatorname{pd}_Rk=d$ and $\beta_i^R(k)=\binom di$ for $0\le i\le d$, with $\beta_i^R(k)=0$ for $i>d$.

[F4] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

## Verification

1.1 The coordinate chain of prime ideals gives dimension at least three, while the three generators of the maximal ideal give embedding dimension at most three and hence dimension at most three. Thus $R$ is regular of dimension three with parameters $x,y,z$. Their Koszul complex is a minimal resolution. [F1, F4, algebra]

2.1 The exterior bases have ranks $1,3,3,1$ in degrees zero through three and zero above. The rank and projective-dimension formulas give these Betti numbers and projective dimension three, since the top rank is one. [F2, F3, step 1.1] ∎
