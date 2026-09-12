---
id: def-r-page-of-the-spectral-sequence-of-a-filtered-complex
kind: definition
title: R page of the spectral sequence of a filtered complex
deps: ["def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex", "lem-r-boundaries-embed-in-r-cycles", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

The **$r$-page** of a filtered complex is the family
$$E^r_{p,q}=Z^r_{p,q}/B^r_{p,q}\quad(r\ge0),$$
with the conventions of [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]]. The quotient is licensed by [[lem-r-boundaries-embed-in-r-cycles]]. In particular $E^0_{p,q}=F_pC_{p+q}/F_{p-1}C_{p+q}$.

For $r\ge1$ this is canonically $\bar Z^r_{p,q}/\bar B^r_{p,q}$: the kernel of $A^r_{p,n}\to\operatorname{gr}_pC_n$ is
$$A^r_{p,n}\cap F_{p-1}C_n=A^{r-1}_{p-1,n},$$
since $(p-1)-(r-1)=p-r$. The image of the remaining denominator summand is exactly $\bar B^r$; nested quotients in [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] give the comparison.

The formula uses only a finite filtration window at each position. More precisely, fix $k\ge0$ and $0\le r\le k$. The filtered complex $F_{p+k}C/F_{p-k-1}C$, with the induced filtration, gives canonically the same $E^r_{p,q}$. Indeed the numerator test uses levels $p,p-r\ge p-k$, and the denominator uses levels $p-1,p+r-1\le p+k$. The removed subcomplex has level $p-k-1$ below every test level, and its contribution in degree $n$ lies in $A^{r-1}_{p-1,n}$ when $r\ge1$, because its differential stays at level $p-k-1\le p-r$. Thus inverse-image tests and the final quotient are unchanged; for $r=0$ this is directly the nested quotient $F_p/F_{p-1}$.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
