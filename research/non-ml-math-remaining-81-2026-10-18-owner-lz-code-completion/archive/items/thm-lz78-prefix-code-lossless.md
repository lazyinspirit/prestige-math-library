---
id: thm-lz78-prefix-code-lossless
kind: theorem
title: "Losslessness and prefix property of the explicit LZ78 code"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - alg-lz78-incremental-prefix-code
  - def-finite-support-binary-prefix-code
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Proves the specified finite-block LZ78 record stream is prefix-free and decodes the original block exactly, including the explicit terminal symbol.

## Facts & Assumptions

**Given:** The LZ78 parser and terminated record convention of [[alg-lz78-incremental-prefix-code]], over an alphabet of size $q\ge2$.

[F1] [[alg-lz78-incremental-prefix-code]]: each record is (parent dictionary index, next symbol); the final record contains the unique terminator $\#$.

[F2] [[def-finite-support-binary-prefix-code]]: prefix-free component codes are uniquely decodable.

## Proof

**Given:** The algorithm and symbol/record conventions [F1]–[F2].

1.1 For an integer $m=i+1\ge1$, let $b=\lfloor\log_2m\rfloor+1$. Encode $b$ by Elias-gamma (write $b-1$ zeros followed by the $b$-bit binary expansion of $b$), then append the last $b-1$ bits of the binary expansion of $m$. The Elias-gamma words for different $b$ are prefix-free: if $b<b'$, the $b$th bit is $1$ in the code for $b$ and $0$ in the code for $b'$, while equal $b$ gives the same prefix. Thus the gamma prefix determines $b$ and the following $b-1$ bits, proving the Elias-delta words are prefix-free. Append a fixed-width $\lceil\log_2(q+1)\rceil$-bit symbol field. The prefix index code determines exactly where that field ends, so records parse uniquely. [F1, F2, given, construct]

1.2 The decoder lookup and dictionary update of [F1] recover each phrase. Since $\#$ appears exactly once as the final symbol, decoding stops at the first such field, and a valid terminated codeword cannot be a proper prefix of another valid terminated codeword. Thus the concatenated records form a lossless prefix code on finite input words after termination. [F1, F2, step 1.1, algebra]

1.3 For phrase number $j$, the index satisfies $0\le i<j$, so its Elias-delta length is at most $\log_2(j+1)+2\log_2\log_2(j+2)+C$ for an absolute constant $C$; the symbol field costs a fixed number of bits. Summing yields $L_n=O(N\log(N+1))$ for $N$ parsed records, and in particular finite length for every finite input. [F1, step 1.1, algebra] ∎
