---
id: alg-finite-register-rational-arithmetic-coder
kind: algorithm
title: "Exact finite-register arithmetic coding for rational block sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-binary-prefix-code, def-ideal-real-arithmetic-interval-code]
justified_by: [thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless]
strategy: "Specify exact frequency updates, fixed frame model, bounded registers, and trie decoding."
axiom_use: "No choice axiom is used; all arithmetic is exact integer arithmetic on bounded registers."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Scott D. Roweis, CSC310 Lecture 8x: Arithmetic Coding Without Blocks, version 1.1"
      url: "https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf"
      locator: "slides 10–15, positive integer frequencies, fixed-point interval arithmetic, and decoder"
---
## Definition

**Configuration and frame model.** The shared model consists of positive integers $q_1,\ldots,q_m$, their total $Q=\sum_iq_i$, the rational source $p_i=q_i/Q$, and a maximum frame length $N\ge1$. Fix a frame length $n$ with $1\le n\le N$. At configuration time compute $P=Q^N$ by $N$ successive multiplications, then initialize $B=0$ and $T=1$ and repeat $B\leftarrow B+1$, $T\leftarrow2T$ while $T<P$. The resulting $B$ is the least integer $b\ge0$ with $Q^N\le2^b$; it is fixed for every frame using this configuration. Every frame is exactly one $n$-symbol block; the decoder knows $q_1,\ldots,q_m,Q,N,n$. A complete stream contains a specified finite number $R$ of such frames, supplied by an outer frame count. The arithmetic coder adds no end marker.

**Register size.** With $B$ fixed by the configuration above, Endpoint, width, frequency, and cumulative-frequency registers have $B+1$ bits; the output index has at most $B+2$ bits. One $2B+4$-bit temporary register stores intermediate products, numerators, denominators, and sums. The symbol-position counter uses $\lceil\log_2(N+1)\rceil$ bits and the range/output-length counter uses $\lceil\log_2(B+3)\rceil$ bits. All arithmetic is exact integer addition, multiplication, comparison, and floor division; no floating-point rounding or register growth during a frame is allowed.

**Encoder.** Put $c_i=\sum_{j<i}q_j$ and $D=Q^n$. For an input block $x^n=(x_1,\ldots,x_n)$, initialize $L=0$ and $W=1$. For $t=1,\ldots,n$, set $r=n-t$ and update
$$L\leftarrow L+Wc_{x_t}Q^r,\qquad W\leftarrow Wq_{x_t}.$$
After the $n$ updates, search the finite list $j=0,\ldots,B$ and retain the largest $u$ satisfying $2^uW\le D$. Set $s=u+2$ and
$$k=\left\lfloor\frac{2^s(2L+W)}{2D}\right\rfloor.$$
Emit the $s$-bit binary representation of $k$, padded on the left with zeros; its dyadic cell is $J_{s,k}$ from [[def-ideal-real-arithmetic-interval-code]].

**Decoder.** For fixed $n$, generate the finite codebook by applying the encoder to every block in $[m]^n$ and build its binary trie. For one frame, read payload bits along this trie until a leaf is reached and return its block; reject an invalid path or a path not reaching a leaf within $B+2$ bits. For a stream, repeat this operation exactly $R$ times and then stop. The next theorem proves that the generated codebook is prefix-free and that every encoded frame reaches exactly one leaf.

The configured register widths are finite for each fixed rational model and cap $N$. They grow when a new configuration with a larger $N$ or $Q$ is installed; no constant-word-width streaming guarantee is claimed.
