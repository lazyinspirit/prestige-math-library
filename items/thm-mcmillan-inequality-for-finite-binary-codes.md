---
id: thm-mcmillan-inequality-for-finite-binary-codes
kind: theorem
title: "McMillan inequality for finite binary uniquely decodable codes"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-binary-source-code-and-extension, lem-integer-part]
justified_by: []
proof_strategy: direct
strategy: "Raise the Kraft sum to the k-th power, group tuples by total code length, and use binomial growth to force the sum to be at most one."
axiom_use: "No choice axiom is used; the proof uses finite counting and a real limit."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.4, proof of the uniquely decodable direction of Kraft–McMillan"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slide 23, uniquely decodable Kraft inequality"
---
## Statement

Let $C$ be a finite binary uniquely decodable code with lengths $\ell_i$. Then
$$\sum_{i=1}^m2^{-\ell_i}\le1.$$

## Facts & Assumptions

**Given:** A finite source alphabet $[m]$, a binary code $C$, and injectivity of its concatenation extension $C^*$.

[F1] [[def-binary-source-code-and-extension]]: Unique decodability means that the concatenation extension $C^*$ is injective on all finite source words, and every codeword is nonempty.

[F2] [[lem-integer-part]]: For every real $x$, the integer part $\lfloor x\rfloor$ satisfies $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$.

## Proof

1.1 Put $K:=\sum_{i=1}^m2^{-\ell_i}$ and $\lambda:=\max_i\ell_i$. For each integer $k\ge1$, expand $K^k=\sum_{(i_1,\ldots,i_k)\in[m]^k}2^{-(\ell_{i_1}+\cdots+\ell_{i_k})}$. For each total length $s$, let $N_{k,s}$ count the tuples with $\ell_{i_1}+\cdots+\ell_{i_k}=s$. Their concatenated codewords are distinct by [F1] and each is a binary word of length $s$, of which there are exactly $2^s$ because each of the $s$ positions has two choices; hence $N_{k,s}\le2^s$. [F1, given, algebra]

2.1 Since every $\ell_i\ge1$, the only possible totals satisfy $k\le s\le k\lambda$, so there are $k(\lambda-1)+1$ possible integer values of $s$. Grouping step 1.1 by $s$ gives $K^k=\sum_{s=k}^{k\lambda}N_{k,s}2^{-s}\le k(\lambda-1)+1$. Therefore $K\le(k(\lambda-1)+1)^{1/k}$ for every $k$. [step 1.1, algebra]

3.1 Suppose $K>1$, set $\epsilon=K-1>0$, and put $a=\lambda-1\ge0$. By [F2], the integer $k:=\lfloor1+2a/\epsilon^2\rfloor+1$ satisfies $k>1+2a/\epsilon^2$ and $k\ge2$, so $k(k-1)\epsilon^2/2>ak$. The binomial theorem gives $K^k=(1+\epsilon)^k\ge1+k\epsilon+\binom{k}{2}\epsilon^2>1+ak$, contradicting step 2.1, which gives $K^k\le ak+1$. Hence $K\le1$. [F2, step 2.1, assume-contra, choose, algebra, discharge-contradiction] ∎

