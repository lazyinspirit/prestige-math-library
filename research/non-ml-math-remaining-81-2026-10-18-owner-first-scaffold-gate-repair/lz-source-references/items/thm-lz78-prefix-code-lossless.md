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
sources:
  references:
    - title: "Stanford EE376C, Lempel-Ziv Compression lecture notes"
      url: "https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf"
      locator: "§1.3, PDF pp.4–6: incremental LZ78 parsing and coding. The local proof supplies the explicit terminator and prefix-decoding convention."
---
## Statement

Proves the specified finite-block LZ78 record stream is prefix-free and decodes the original block exactly, including the explicit terminal symbol.

## Facts & Assumptions

**Given:** The LZ78 parser and terminated record convention of [[alg-lz78-incremental-prefix-code]], over an alphabet of size $q\ge2$.

[F1] [[alg-lz78-incremental-prefix-code]]: each record is (parent dictionary index, next symbol); the final record contains the unique terminator $\#$.

[F2] [[def-finite-support-binary-prefix-code]]: nonempty prefix-free component codewords can be parsed in a concatenation without knowing the message count; the empty singleton exception applies only with a known count or one known block.

## Proof

**Given:** The algorithm and symbol/record conventions [F1]–[F2].

1.1 For a parent index $i\ge0$, put $m=i+1$, $b=\lfloor\log_2m\rfloor+1$ and $d=\lfloor\log_2b\rfloor+1$. The Elias-gamma code of $b$ consists of $d-1$ zeros followed by the $d$-bit binary expansion of $b$. Its first $1$ reveals $d$, after which exactly $d-1$ more bits complete $b$. Append the final $b-1$ bits of the binary expansion of $m$ to form its Elias-delta code; the decoder restores the leading $1$ of $m$ and then returns $i=m-1$. Thus the gamma header determines exactly how many suffix bits to read. No codeword can be a proper prefix of another, because identical headers determine the same suffix length. For $m=1,2,4$ the codes are respectively $1$, $0100$, and $01100$, so the case $b=1$ has an empty suffix but still a nonempty header. Appending a fixed-width $\lceil\log_2(q+1)\rceil$-bit symbol field gives an unambiguously delimited nonempty record. [F1, F2, given, construct]

2.1 The decoder lookup and dictionary update of [F1] recover each phrase. Since $\#$ appears exactly once as the final symbol, decoding stops at the first such field, and a valid terminated codeword cannot be a proper prefix of another valid terminated codeword. Thus the concatenated records form a lossless prefix code on finite input words after termination. [F1, F2, step 1.1, algebra]

3.1 The exact index length is $2d-1+(b-1)=b+2d-2=b+2\lfloor\log_2b\rfloor$. At phrase number $j\ge1$, the parent satisfies $0\le i<j$, hence $m\le j$ and $b\le\log_2(j+1)+1$. Since $b\le2\log_2(j+2)$, its length is at most $\log_2(j+1)+2\log_2\log_2(j+2)+3$. Thus, writing $s_q=\lceil\log_2(q+1)\rceil$, the $N$ output records, including the final marker record, have total bit length at most $N[\log_2(N+1)+2\log_2\log_2(N+2)+3+s_q]$. This is $O(N\log(N+1))$, with the same bound valid for every small index including $i=0$. The final record is encoded and counted even though its phrase is not inserted into the dictionary. [F1, step 1.1, algebra] ∎
