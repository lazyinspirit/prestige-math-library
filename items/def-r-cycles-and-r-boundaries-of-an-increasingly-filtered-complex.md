---
id: def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex
kind: definition
title: R cycles and r boundaries of an increasingly filtered complex
deps: ["def-filtered-chain-complex", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

For a filtered chain complex as in [[def-filtered-chain-complex]], put $n=p+q$ and, for $r\ge0$,
$$A^r_{p,n}=F_pC_n\cap d_n^{-1}(F_{p-r}C_{n-1}).$$
Inverse images and intersections are the pullbacks of [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]. Since $d$ preserves $F$, $A^0_{p,n}=F_pC_n$. For $r\ge1$ define the subobjects
$$Z^r_{p,q}=A^r_{p,n},\qquad B^r_{p,q}=A^{r-1}_{p-1,n}+d_{n+1}(A^{r-1}_{p+r-1,n+1}).$$
The image in the second summand lies in $F_pC_n$ since $(p+r-1)-(r-1)=p$. Separately set $Z^0_{p,q}=F_pC_n$, $B^0_{p,q}=F_{p-1}C_n$. The symbols $B^r$ include lower-filtration approximate cycles, not just actual boundaries.

For comparison with projected conventions, let $\bar Z^r_{p,q}$ and $\bar B^r_{p,q}$ be the images of $A^r_{p,n}$ and $d(A^{r-1}_{p+r-1,n+1})$ in $\operatorname{gr}_pC_n$ for $r\ge1$; set $\bar Z^0=\operatorname{gr}_pC_n$ and $\bar B^0=0$.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
