---
id: alg-lz78-incremental-prefix-code
kind: algorithm
title: "Finite-block LZ78 incremental prefix code"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-support-binary-prefix-code
justified_by:
  - thm-lz78-prefix-code-lossless
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Stanford EE376C, Lempel-Ziv Compression lecture notes"
      url: "https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf"
      locator: "§1.3, PDF pp.4–6: incremental LZ78 phrase parsing and code construction. The terminating-record convention is specified locally."
---
## Definition

**Input:** A finite alphabet $\mathcal A$ of size $q\ge2$, an integer $n\ge0$, a word $x_0^{n-1}\in\mathcal A^n$ (with $x_0^{-1}$ denoting the empty word when $n=0$), and a terminator $\#$ not in $\mathcal A$. Fix an injective $s_q:=\lceil\log_2(q+1)\rceil$-bit symbol field for $\mathcal A\cup\{\#\}$. The alphabet convention is that of [[def-finite-alphabet-stationary-source]]. **Output, when the procedure terminates:** a finite terminated binary record stream; prefix codes use [[def-finite-support-binary-prefix-code]].

1. Start with dictionary $D[0]=\epsilon$ and unread text $x_0^{n-1}\#$. While text remains, let $w$ be the longest dictionary word prefixing the unread text, let $i$ be its dictionary index, and let $c$ be the next symbol. Output the record $(i,c)$ and remove the prefix $wc$ from the unread text. If $c\ne\#$, append $wc$ as the next dictionary entry; if $c=\#$, stop without inserting the terminal phrase.

2. Serialize each parent index $i\ge0$ by the Elias-delta code of $m=i+1$. Put $b=\lfloor\log_2m\rfloor+1$ and $d=\lfloor\log_2b\rfloor+1$. Emit $d-1$ zeros, then the $d$-bit binary expansion of $b$, then the final $b-1$ bits of the $b$-bit binary expansion of $m$. Append the fixed-width symbol field for $c$. Concatenate these records in parser order, including the final marker record.

3. To decode an encoded block, start with dictionary $D[0]=\epsilon$. Count the leading zeros before the first $1$ of an index header as $z$ and set $d=z+1$. Read the following $d-1$ bits; together with that first $1$, these are the $d$-bit binary expansion of $b$. Read the next $b-1$ bits and prepend $1$ to recover $m$; put $i=m-1$. Read the next $s_q$ bits as $c$, and emit $D[i]c$. Append that phrase to the dictionary when $c\ne\#$, then read the next record. At the first $c=\#$, stop without insertion and remove the terminal marker from the decoded text. The decoder is specified on valid encoded streams and is not supplied the source length or record count.

Ordinary inserted phrases are dictionary entries; the final phrase containing $\#$ is an output record but is not a dictionary entry. Termination, distinctness of ordinary complete phrases, losslessness, the prefix property and the exact index-length bound are proved in [[thm-lz78-prefix-code-lossless]].

