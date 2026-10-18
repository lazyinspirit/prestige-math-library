---
id: def-lz77-previous-match-phrase-length
kind: definition
title: "LZ77 previous-match length and recurrence time"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ioannis Kontoyiannis, Recurrence and Waiting Times in Stationary Processes and Their Applications in Data Compression, Stanford University dissertation"
      url: "https://www.dpmms.cam.ac.uk/~ik355/PAPERS/thesis.pdf"
      locator: "Chapter 5 §5.1, within PDF pp.49–56: backward recurrence-time definition; local LZ77 match and termination conventions are stated explicitly."
---
## Definition

Consider a finite alphabet $\mathcal A$ and a two-sided sequence $x\in\mathcal A^{\mathbb Z}$.

For positive integers $n,W$, define the backward recurrence time of the current length-$n$ block by
$R_n(x)=\inf\{j\ge1:(x_{-j},\ldots,x_{-j+n-1})=(x_0,\ldots,x_{n-1})\},$
with $R_n=+\infty$ if the set is empty. The start offset is positive, so the current block is not counted as its own match.

Define its previous-match phrase length in a window of width $W$ by
$L_W(x)=\max\bigl(\{0\}\cup\{n\ge1:R_n(x)\le W\}\bigr),$
where the maximum is interpreted as $+\infty$ when the set is unbounded. The empty match of length zero is always allowed. For a periodic sequence, $L_W$ can be infinite; the recurrence-time theorem will only be used to infer the logarithmic inverse relation in probability when $h>0$.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$ and a two-sided sequence $x\in\mathcal A^{\mathbb Z}$.

[F1] [[def-finite-alphabet-stationary-source]]: the source coordinates are indexed over $\mathbb Z$ and shifted by $T(x)_j=x_{j+1}$.

## Proof

**Given:** The sequence and positive integers $n,W$.

1.1 Define the backward recurrence time of the current length-$n$ block by $$R_n(x)=\inf\{j\ge1:(x_{-j},\ldots,x_{-j+n-1})=(x_0,\ldots,x_{n-1})\},$$ with $R_n=+\infty$ if the set is empty. The start offset is positive, so the current block is not counted as its own match. [F1, given, algebra]

2.1 Define its previous-match phrase length in a window of width $W$ by $$L_W(x)=\max\bigl(\{0\}\cup\{n\ge1:R_n(x)\le W\}\bigr),$$ with maximum $+\infty$ when the set is unbounded. The set is nonempty because it contains $0$; if a length-$m$ block matches at offset $j$, every shorter positive prefix also matches at the same offset, so the matched lengths form an initial segment. The empty match of length zero is always allowed. [F1, step 1.1, algebra]

3.1 For a periodic sequence, $L_W$ can be infinite; the recurrence-time theorem will only be used to infer the logarithmic inverse relation in probability when $h>0$. [step 2.1, algebra] ∎

