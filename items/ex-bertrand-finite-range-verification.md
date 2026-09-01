---
id: ex-bertrand-finite-range-verification
kind: example
title: "The residual finite-range check for Bertrand's postulate"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-bertrands-postulate]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

The proof of [[thm-bertrands-postulate]] above isolates a finite residual range:
its asymptotic inequality closes all cases $n\ge468$, so only $2\le n\le467$
must be checked directly.

## Facts & Assumptions

**Given:** The residual range $2\le n\le467$ from [[thm-bertrands-postulate]].

[L1] Bertrand's postulate is already proved abstractly, with the only explicit
finite remainder being the interval $2\le n\le467$
([[thm-bertrands-postulate]]).

## Verification

**Proof technique:** direct.

1.1 The following short certificate covers the entire residual range. Each displayed number is prime, and a prime $p$ is a witness for every integer $n$ with $p/2<n<p$: $$\begin{array}{c|c}p&\text{integers }n\text{ covered}\ \\ \hline 3&2\\5&3\text{--}4\\7&4\text{--}6\\13&7\text{--}12\\23&12\text{--}22\\43&22\text{--}42\\83&42\text{--}82\\163&82\text{--}162\\317&159\text{--}316\\631&316\text{--}630\end{array}$$ Consecutive ranges in the second column overlap or meet consecutively, and their union contains every integer from $2$ through $467$. For each covered $n$, the corresponding prime satisfies $n<p<2n$. [given, algebra]

2.1 Therefore the finite residual range required by [L1] is closed. This check is evidence for the remaining finitely many cases only; it does not replace the asymptotic part of the theorem. [L1, step 1.1] ∎
