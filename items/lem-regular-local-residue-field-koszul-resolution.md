---
id: "lem-regular-local-residue-field-koszul-resolution"
kind: "lemma"
title: "regular local residue field koszul resolution"
deps: ["thm-regular-local-rings-are-domains-and-cohen-macaulay", "cor-koszul-complex-resolves-a-regular-quotient", "lem-minimal-free-resolution-differentials-land-in-maximal-ideal"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.33 forward proof, p.123"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, the Koszul complex on any regular system of parameters is a minimal free resolution of $k$ of length $d$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F2] [[cor-koszul-complex-resolves-a-regular-quotient]]: If $M$ is finite free and $\mathbf x$ is $M$-regular, then $K(\mathbf x;M)$ is a finite free resolution of $M/(\mathbf x)M$.

[F3] [[lem-minimal-free-resolution-differentials-land-in-maximal-ideal]]: For an augmented degreewise finite free resolution over a nonzero Noetherian local ring $(R,\mathfrak m)$, minimality means that every positive differential matrix has entries in $\mathfrak m$. Equivalently no positive differential admits a unit pivot, or a nonzero two-term identity direct summand. A unit pivot can be cancelled without changing the resolved module.

## Proof

1.1 The parameters form an $R$-regular sequence and generate $\mathfrak m$. Koszul acyclicity for a finite free coefficient module gives a free resolution of $R/\mathfrak m=k$. [F1, F2]

2.1 Every differential entry is a parameter up to sign and hence lies in $\mathfrak m$, so the resolution is minimal. Its degree-$i$ module is $\bigwedge^iR^d$, zero for $i>d$ and rank one in degree $d$. When $d=0$, it is just $R=k$ in degree zero, the Koszul complex on the empty tuple. [F3, step 1.1, algebra] ∎
