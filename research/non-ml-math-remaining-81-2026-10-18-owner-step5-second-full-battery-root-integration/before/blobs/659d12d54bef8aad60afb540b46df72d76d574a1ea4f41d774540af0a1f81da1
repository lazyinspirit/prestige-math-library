---
id: thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless
kind: theorem
title: "Ideal-real interval coding is prefix-free and lossless"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-binary-prefix-code, def-ideal-real-arithmetic-interval-code, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws, thm-logarithm-change-of-base, lem-integer-part]
justified_by: []
proof_strategy: direct
strategy: "Show source intervals partition the unit interval, then place a dyadic cell around each midpoint; disjoint cells give a prefix-free code and the width gives a two-bit pointwise bound."
axiom_use: "No choice axiom is used; each block interval and codeword is explicitly determined."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.2, product probabilities; §4.3, finite block Shannon coding"
    - title: "Scott D. Roweis, CSC310 Lecture 8x: Arithmetic Coding Without Blocks, version 1.1"
      url: "https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf"
      locator: "slides 4–8, ideal-real interval refinement and termination"
---
## Statement

For fixed $p$ and $n$, the code in [[def-ideal-real-arithmetic-interval-code]] is injective and prefix-free on the lexicographically ordered block alphabet $\mathcal X^n$. Its codeword length for $x^n$ is at most $-\log_2p^n(x^n)+2$. Thus an $n$-block is recovered uniquely, and concatenated frames of this fixed block length are uniquely parsed.

## Facts & Assumptions

**Given:** A finite full-support source $p$, a fixed block length $n\ge1$, and the ideal-real interval and codeword construction.

[F1] [[def-finite-discrete-source-and-blocks]]: $p^n(x^n)=\prod_{t=1}^np_{x_t}>0$ for every $x^n\in\mathcal X^n$.

[F2] [[def-ideal-real-arithmetic-interval-code]]: If a prefix has interval $[a,b)$ and the next symbol is $i$, the extended prefix receives the half-open interval determined by the cumulative sums of $p_1,\ldots,p_m$.

[F3] [[def-binary-prefix-code]]: A binary code is prefix-free when it is nonsingular and no codeword is a proper prefix of another.

[F4] [[def-it-information-units-and-logarithm-base]]: For $b>1$, $\log_bx=\ln x/\ln b$ and the denominator is positive.

[F5] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing.

[F6] [[thm-logarithm-change-of-base]]: For $b>0$, $b\ne1$, $\log_b(b^u)=u$ and $b^{\log_bx}=x$ for $x>0$.

[F7] [[lem-integer-part]]: For every real $y$, $\lfloor y\rfloor\le y<\lfloor y\rfloor+1$.

[F8] [[def-ideal-real-arithmetic-interval-code]]: For a final interval width $w$, the code uses $r=\lfloor-\log_2w\rfloor$, $s=r+2$, and the dyadic cell with index $k=\lfloor2^s(a+b)/2\rfloor$.

## Proof

1.1 At every prefix, the $m$ child intervals are disjoint half-open intervals whose union is the parent interval, because the cumulative probabilities increase from $0$ to $1$. Induction on prefix length therefore shows that the length-$n$ intervals partition $[0,1)$, and multiplying the successive width factors gives $|I(x^n)|=p^n(x^n)>0$ by [F1]. [F1, F2, given, induction]

2.1 By [F8], put $w=|I(x^n)|$ and $r=\lfloor-\log_2w\rfloor$. Since $0<w\le1$, [F4] and [F5] give $-\log_2w\ge0$, so [F7] gives $r\ge0$ and $r\le-\log_2w<r+1$. The same facts show that $\log_2$ is strictly increasing, and [F6] gives $\log_2(2^u)=u$; therefore $2^{-(r+1)}<w\le2^{-r}$. Thus the cell width $\delta:=2^{-(r+2)}$ satisfies $\delta<w/2$. If $c$ is the midpoint of $I(x^n)$, then $0\le c<1$ by step 1.1. By [F7], $k=\lfloor2^sc\rfloor$ is an integer; since $0\le c<1$, it satisfies $0\le k<2^s$ and has an $s$-bit representation. Its cell $[k\delta,(k+1)\delta)$ contains $c$ and lies within distance $\delta$ of it; hence it is contained in the interior of $I(x^n)$. [F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 Distinct blocks have disjoint source intervals by step 1.1. Their nonempty dyadic cells from step 2.1 are therefore disjoint. If one emitted bit word were a prefix of another, its dyadic cell would contain the other's cell, contradicting disjointness. Thus the codewords are distinct and prefix-free by [F3]; the unique interval containing a received code cell identifies its block, and prefix-freeness parses concatenated fixed-$n$ frames. [F3, F8, step 1.1, step 2.1]

4.1 By [F7] and [F8], $r\le-\log_2w$, so the emitted length is $s=r+2\le-\log_2w+2=-\log_2p^n(x^n)+2$ by step 1.1 and [F1]. This proves the pointwise bound without converting ideal-real interval arithmetic into a finite-register procedure. [F1, F7, F8, step 1.1, algebra] ∎

