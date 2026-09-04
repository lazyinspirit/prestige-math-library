---
id: def-bounded-computation-tableau
kind: definition
title: "A bounded computation tableau for a nondeterministic Turing-machine run"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-dtime-ntime-dspace-and-nspace, def-turing-machine-configuration, def-tape-finite-support-convention]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Definition

Fix a nondeterministic one-tape Turing machine $N$ and an input word $w$.
Suppose $T\ge |w|$, every branch of $N$ on $w$ halts within $T$ steps, and no
branch visits a tape cell beyond position $T$. A **bounded computation
tableau** for $N$ on $w$ is a
$(T+1)\times(T+1)$ array whose rows encode one computation branch of $N$ on
$w$, padded after halting if necessary:

- row $0$ is the initial configuration on input $w$,
- each later row is obtained from the previous row by one legal transition of
  $N$, or else repeats the previous row unchanged when that previous row is
  already halting,
- and each row contains exactly one distinguished state-tagged tape symbol,
  marking the head position and current state.

The tableau is **accepting** when some row is an accepting configuration.

## Remarks

- The one-tape hypothesis is what makes one state-tagged symbol sufficient to
  record the unique head position in each row.

- The bound $T\ge |w|$ ensures that row $0$ has room for the entire input;
  the width and height are both polynomial in $|w|$ once $T$ is polynomial.

- The repeated-row convention is the standard way to fit an accepting or
  rejecting branch of length at most $T$ into a fixed $(T+1)\times(T+1)$
  tableau.

- The tableau records one branch, not the whole nondeterministic tree.
