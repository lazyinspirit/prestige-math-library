---
id: def-logspace-many-one-reduction
kind: definition
title: "Logspace many-one reduction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-read-only-input-logspace-machine]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 3.14"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

For languages $A,B\subseteq\Sigma^*$, write $A\leq_{\log}B$ if a deterministic
read-only-input logspace transducer computes a total function $f$ with
$$ x\in A\quad\Longleftrightarrow\quad f(x)\in B. $$
The transducer writes $f(x)$ once on a write-only output stream. Equivalently,
there is a fixed polynomial $p$ with $|f(x)|\le p(|x|)$ and a deterministic
procedure which, on read-only input $(x,j)$ with $j$ in binary, uses
$O(\log(|x|+2))$ work cells for **every** $j$. It returns $f(x)_j$ when
$0\le j<|f(x)|$ and a distinct end-of-output marker exactly when
$j\ge|f(x)|$; thus the first marker occurs at position $|f(x)|$. A streaming
transducer can count through positions up to $p(|x|)$, emitting bits and
stopping at the first marker. Conversely, a streaming transducer can be rerun
while counting output bits up to a requested position; a binary position
larger than the polynomial bound can be recognized by a logspace comparison
and answered with the marker. The stream's output length is polynomially
bounded: since the write-only output cannot affect its future behavior and it
has only polynomially many internal configurations, repeating one before
halting would force an infinite run.
