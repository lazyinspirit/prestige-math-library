---
id: thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless
kind: theorem
title: "The rational finite-register arithmetic code is prefix-free and lossless"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-binary-prefix-code, def-ideal-real-arithmetic-interval-code, alg-finite-register-rational-arithmetic-coder, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws, thm-logarithm-change-of-base, lem-integer-part, lem-ceiling-and-least-positive-integer-threshold]
justified_by: []
proof_strategy: direct
strategy: "Track the exact integer interval under each frequency split, place a dyadic cell around its midpoint, and bound every loop and register."
axiom_use: "No choice axiom is used; all source blocks, interval updates, counters, and registers are finite."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Scott D. Roweis, CSC310 Lecture 8x: Arithmetic Coding Without Blocks, version 1.1"
      url: "https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf"
      locator: "slides 10–15, finite-register integer arithmetic and decoding conditions"
---
## Statement

For every configured rational model and fixed frame length in [[alg-finite-register-rational-arithmetic-coder]], let $C(x^n)$ be the codeword assigned to $x^n$ by the encoder and put $\ell(x^n):=|C(x^n)|$. The codebook on the lexicographically ordered block alphabet $[m]^n$ assigns each block a distinct binary word with $\ell(x^n)\le B+2$ and $\ell(x^n)\le-\log_2p^n(x^n)+2$. The codebook on $[m]^n$ is prefix-free, and the decoder returns exactly $x^n$. The configuration-time computation of $B$ terminates. The encoder uses exactly $n$ symbol updates, its bounded integer search terminates, and the decoder reads at most $B+2$ payload bits per frame without overflow.

## Facts & Assumptions

**Given:** Positive integer frequencies $q_i$, total $Q=\sum_iq_i$, maximum frame length $N$, fixed frame length $1\le n\le N$, and the encoder/decoder in [[alg-finite-register-rational-arithmetic-coder]].

[F1] [[def-finite-discrete-source-and-blocks]]: A block probability is $p^n(x^n)=\prod_{t=1}^np_{x_t}$.

[F2] [[def-binary-prefix-code]]: A binary code is prefix-free when it is nonsingular and no codeword is a proper prefix of another.

[F3] [[alg-finite-register-rational-arithmetic-coder]]: The integer endpoint update is $L\leftarrow L+Wc_{x_t}Q^{n-t}$ and $W\leftarrow Wq_{x_t}$; the codeword uses $u=\max\{j\le B:2^jW\le Q^n\}$, $s=u+2$, and $k=\lfloor 2^s(2L+W)/(2Q^n)\rfloor$.

[F4] [[def-it-information-units-and-logarithm-base]]: $\log_2x=\ln x/\ln2$, with $\ln2>0$.

[F5] [[thm-natural-logarithm-laws]]: The natural logarithm is strictly increasing.

[F6] [[thm-logarithm-change-of-base]]: $\log_2(2^v)=v$ for every real $v$.

[F7] [[lem-integer-part]]: For every real $y$, $\lfloor y\rfloor\le y<\lfloor y\rfloor+1$.

[F8] [[thm-natural-logarithm-laws]]: $\ln(x/y)=\ln x-\ln y$ for positive $x,y$.

[F9] [[lem-ceiling-and-least-positive-integer-threshold]]: For every real $x$, $\lceil x\rceil$ is an integer with $x\le\lceil x\rceil$.

[F10] [[alg-finite-register-rational-arithmetic-coder]]: The endpoint, width, frequency, and cumulative-frequency registers have $B+1$ bits; the output index has at most $B+2$ bits; the temporary register has $2B+4$ bits; the counters have the stated ceiling-logarithm widths.

## Proof

1.1 After $t$ symbols, the scaled interval for the prefix is $[L,L+WQ^{n-t})$. At $t=0$ it is $[0,Q^n)$, so the claim holds. If it holds at $t-1$, symbol $i$ occupies the subinterval beginning $Wc_iQ^{n-t}$ after the parent lower endpoint and of width $Wq_iQ^{n-t}$; the widths sum to the parent width because $\sum_iq_i=Q$. Thus the update [F3] gives the claimed child interval. At $t=n$ it is $[L,L+W)$ with $W=\prod_{t=1}^nq_{x_t}$, so after division by $D=Q^n$ its width is $W/D=p^n(x^n)>0$ by [F1]. [F1, F3, given, induction]

2.1 The search in [F3] finds $u$ with $2^uW\le D<2^{u+1}W$: $j=0$ is admissible since $W\le Q^n$, and $D/W\le Q^n\le2^B$, so the largest admissible $u$ is at most $B$. Hence $2^{-(u+1)}<W/D\le2^{-u}$. The selected dyadic cell has width $\delta=2^{-(u+2)}<W/(2D)$. Its index $k$ is the floor of $2^s$ times the interval midpoint $(2L+W)/(2D)$; therefore the cell contains that midpoint and extends by at most $\delta$ to either side. Since $\delta$ is smaller than half the source-interval width, the cell lies inside the source interval. Also the midpoint is in $[0,1)$, so [F7] gives $0\le k<2^s$ and its $s$-bit representation exists. [F1, F3, F7, step 1.1, given, algebra]

3.1 Length-$n$ source intervals partition $[0,1)$ by step 1.1, and step 2.1 places each nonempty emitted dyadic cell inside its own interval. Thus cells for distinct blocks are disjoint. A proper-prefix relation between emitted words would make one dyadic cell contain the other, which contradicts disjointness. The codewords are distinct and prefix-free by [F2]. A trie leaf therefore identifies one block, so the decoder returns exactly the encoded block. [F2, step 1.1, step 2.1, given]

4.1 Since $2^u\le D/W$, [F4], [F5], and [F6] give $u=\log_2(2^u)\le\log_2(D/W)$; [F4] and [F8] give $\log_2(D/W)=-\log_2(W/D)=-\log_2p^n(x^n)$ by step 1.1. Thus the payload length $s=u+2$ is at most $-\log_2p^n(x^n)+2$. Also $W\ge1$ and $D\le Q^N\le2^B$, so $u\le B$ and $s\le B+2$. At configuration, computing $P=Q^N$ takes $N$ multiplications. The doubling loop for $B$ terminates because $2^P\ge P$ for every positive integer $P$ (by induction), and its first $B$ with $2^B\ge P$ is least. The encoder performs $n$ updates, tests at most $B+1$ values of $j$, and emits at most $B+2$ bits; the decoder's trie traversal reads at most that many bits and outputs $n$ symbols. Since $N\ge1$, $Q\le Q^N\le2^B$, so each $q_i$ and $c_i$ fits its $B+1$-bit register; also $L,W,D\le2^B$, so their $B+1$-bit registers suffice. By [F9], if $b_N=\lceil\log_2(N+1)\rceil$ and $b_B=\lceil\log_2(B+3)\rceil$, then $b_N\ge\log_2(N+1)$ and $b_B\ge\log_2(B+3)$. Applying the increasing logarithm facts [F4]–[F6] gives $2^{b_N}\ge N+1$ and $2^{b_B}\ge B+3$, so the counters hold counts up to $N$ and output lengths up to $B+2$. By [F10], the numerator $2^s(2L+W)$ is at most $2^{B+2}\cdot3\cdot2^B<2^{2B+4}$, so the temporary register suffices; the denominator $2D$ and scale $2^s$ also fit it. All other products in the interval update are at most $D$. Hence every loop terminates and no configured per-frame register overflows. [F3, F4, F5, F6, F8, F9, F10, step 1.1, step 2.1, given, algebra] ∎

