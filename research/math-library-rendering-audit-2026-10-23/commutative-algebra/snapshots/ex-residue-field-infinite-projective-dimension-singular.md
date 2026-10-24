---
id: "ex-residue-field-infinite-projective-dimension-singular"
kind: "example"
title: "residue field infinite projective dimension singular"
deps: ["def-axiom-of-choice", "lem-projective-dimension-from-last-nonzero-betti-number", "cor-betti-number-is-rank-in-minimal-resolution"]
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (ex-residue-field-infinite-projective-dimension-singular). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Proposition 12.27 and Corollary 12.29, p.121"
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

Assume the Axiom of Choice. Let $k$ be a field. For $R=k[\varepsilon]/(\varepsilon^2)$, its residue field $k$ has an infinite minimal free resolution with one copy of $R$ in every degree and every positive differential multiplication by $\varepsilon$. Consequently $\beta_i^R(k)=1$ for all $i\ge0$ and $\operatorname{pd}_Rk=\infty$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

[F2] [[cor-betti-number-is-rank-in-minimal-resolution]]: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

## Verification

1.1 The ring is local with maximal ideal $(\varepsilon)$. For multiplication by $\varepsilon$, the image and kernel both equal $(\varepsilon)$: $\varepsilon(a+b\varepsilon)=a\varepsilon$. The augmentation $R\to k$ has that same kernel. Thus the infinite augmented complex is exact in every degree and all positive matrix entries are in the maximal ideal. [given, algebra]

2.1 Under the stated AC premise, the rank formula gives $\beta_i(k)=1$ in every degree. These nonzero Betti numbers are unbounded in degree, so the projective-dimension criterion gives infinity. A finite initial truncation would have a nonzero left kernel and is not a finite resolution. [given, F2, F1, step 1.1] ∎
