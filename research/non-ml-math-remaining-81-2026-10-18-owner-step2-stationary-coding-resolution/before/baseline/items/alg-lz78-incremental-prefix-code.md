---
id: alg-lz78-incremental-prefix-code
kind: algorithm
title: "Finite-block LZ78 incremental prefix code"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-support-binary-prefix-code
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
    - title: "Stanford EE376C, Lempel-Ziv Compression lecture notes"
      url: "https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf"
      locator: "§1.3, PDF pp.4–6: incremental LZ78 phrase parsing and code construction. The terminating-record convention is specified locally."
---
## Definition

**Input:** A finite alphabet $\mathcal A$ of size $q\ge2$, a finite word $x_0^{n-1}\in\mathcal A^n$, and a terminator $\#$ not in $\mathcal A$. Fix an injective $s_q:=\lceil\log_2(q+1)\rceil$-bit symbol field for $\mathcal A\cup\{\#\}$. The alphabet convention is that of [[def-finite-alphabet-stationary-source]]. The output is a terminated binary record stream; prefix codes use [[def-finite-support-binary-prefix-code]].

1. Start with dictionary $D[0]=\epsilon$ and unread text $x_0^{n-1}\#$. While text remains, let $w$ be the longest dictionary word prefixing the unread text, let $i$ be its dictionary index, and let $c$ be the next symbol. Output the record $(i,c)$ and remove the prefix $wc$ from the unread text. If $c\ne\#$, append $wc$ as the next dictionary entry; if $c=\#$, stop without inserting the terminal phrase.

2. Serialize each parent index $i\ge0$ by the Elias-delta code of $m=i+1$. Put $b=\lfloor\log_2m\rfloor+1$ and $d=\lfloor\log_2b\rfloor+1$. Emit $d-1$ zeros, then the $d$-bit binary expansion of $b$, then the final $b-1$ bits of the $b$-bit binary expansion of $m$. Append the fixed-width symbol field for $c$. Concatenate these records in parser order, including the final marker record.

3. To decode an encoded block, start with dictionary $D[0]=\epsilon$. Read zeros until the first $1$ of an index header; if there are $d-1$ zeros, read that $1$ and the following $d-1$ bits as $b$. Read the next $b-1$ bits and prepend $1$ to recover $m$; put $i=m-1$. Read the next $s_q$ bits as $c$, and emit $D[i]c$. Append that phrase to the dictionary when $c\ne\#$, then read the next record. At the first $c=\#$, stop without insertion and remove the terminal marker from the decoded text. The decoder is specified on valid encoded streams and is not supplied the source length or record count.

Ordinary inserted phrases are dictionary entries; the final phrase containing $\#$ is an output record but is not a dictionary entry. Losslessness, the prefix property and the exact index-length bound are proved in [[thm-lz78-prefix-code-lossless]].

## Facts & Assumptions

**Given:** The finite input, terminator, dictionary and parser rules in the Definition.

[F1] [[def-finite-alphabet-stationary-source]] fixes a finite source alphabet.

## Proof

1.1 Every dictionary entry is an ordinary word over $\mathcal A$. As long as unread text remains it ends in $\#$, so no dictionary word can consume the entire unread text. The root is always a prefix, and there are finitely many entries; hence a longest match and a following symbol exist. Every iteration removes at least one symbol from a finite string, so the parser terminates at its final marker record. [F1, given, algebra]

2.1 If an ordinary phrase $wc$ were already a dictionary entry, it would be a longer prefix of the unread text than the selected $w$, contradicting the longest-prefix rule. Thus each ordinary phrase is new, and ordinary inserted phrases are distinct. The terminal phrase contains the new symbol $\#$ and is different from every ordinary phrase. [given, step 1.1, algebra] ∎
