---
id: def-ideal-real-arithmetic-interval-code
kind: definition
title: "Ideal-real arithmetic interval coding for a fixed block"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws, thm-logarithm-change-of-base, lem-integer-part]
justified_by: []
strategy: "Define ordered interval refinement and dyadic midpoint output for a known-length block."
axiom_use: "No choice axiom is used; all source blocks are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.2, finite block source probabilities; §4.3, Shannon code construction"
    - title: "Scott D. Roweis, CSC310 Lecture 8x: Arithmetic Coding Without Blocks, version 1.1"
      url: "https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf"
      locator: "slides 4–8, interval refinement, pending bits, and ideal-real coding"
---
## Definition

Fix a finite full-support source $p=(p_1,\ldots,p_m)$, its symbol order $1<\cdots<m$, and a public block length $n\ge1$. The **ideal-real arithmetic interval** of the empty prefix is $[0,1)$. If a prefix has interval $[a,b)$ and the next symbol is $i$, assign the extended prefix the half-open subinterval
$$\left[a+(b-a)\sum_{j<i}p_j,\ a+(b-a)\sum_{j\le i}p_j\right).$$
This subdivision is performed exactly over the real numbers.

Each subdivision multiplies the interval width by the positive probability of the next symbol. Thus a completed block $x^n$ has width $w=\prod_{t=1}^np_{x_t}=p^n(x^n)\in(0,1]$.

Use the base-two logarithm convention of [[def-it-information-units-and-logarithm-base]]. Its positive denominator and the strict increase of $\ln$ from [[thm-natural-logarithm-laws]] make $\log_2$ strictly increasing; [[thm-logarithm-change-of-base]] gives $\log_2(2^u)=u$ and $2^{\log_2x}=x$. Every floor is the integer part specified by [[lem-integer-part]].

For a completed block $x^n$, let $I(x^n)=[a,b)$ be its resulting interval, put $w=b-a$, and define
$$r=\left\lfloor-\log_2w\right\rfloor,\qquad s=r+2,\qquad k=\left\lfloor2^s\frac{a+b}{2}\right\rfloor.$$
The dyadic cell represented by an $s$-bit index $k$ is $J_{s,k}:=[k2^{-s},(k+1)2^{-s})$. The ideal-real codeword is the $s$-bit binary representation of $k$, with leading zeros. Each encoding frame contains exactly one length-$n$ source block; the decoder knows $p$ and $n$. A stream uses an externally known number of such frames. No finite-register or finite-precision implementation is specified by this definition.

Since $0<w\le1$, the logarithm conventions above give $r\ge0$ and hence $s\ge2$. The interval midpoint lies in $[0,1)$, so the integer-part property gives $0\le k<2^s$; the stated $s$-bit representation therefore exists.
