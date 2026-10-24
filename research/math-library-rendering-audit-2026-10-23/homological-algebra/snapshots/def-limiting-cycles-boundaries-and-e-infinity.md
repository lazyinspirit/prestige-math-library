---
id: def-limiting-cycles-boundaries-and-e-infinity
kind: definition
title: Limiting cycles boundaries and e infinity
deps: ["def-r-page-of-the-spectral-sequence-of-a-filtered-complex"]
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

Use the projected cycle and boundary subobjects in the $E^0$ model of [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]. They satisfy
$$\bar B^r\subseteq\bar B^{r+1}\subseteq\bar Z^{r+1}\subseteq\bar Z^r\subseteq E^0.$$
Indeed $A^{r+1}_{p,n}\subseteq A^r_{p,n}$; the actual boundary numerator is $F_pC_n\cap d(F_{p+r-1}C_{n+1})$, which increases with r, and every such actual boundary is a cycle for every page. The r=0 values are $\bar B^0=0$, $\bar Z^0=E^0$.

Only when the indicated join and meet exist as subobjects, define
$$\bar Z^\infty=\bigwedge_{r\ge0}\bar Z^r,\qquad \bar B^\infty=\bigvee_{r\ge0}\bar B^r,\qquad E^\infty=\bar Z^\infty/\bar B^\infty.$$
The boundary join lies in each cycle subobject because actual boundaries have differential zero, so the quotient is meaningful. When both families are eventually stationary, their eventual values supply the meet and join. This notation asserts no unbounded abutment. The unprojected denominators $B^r$ are not asserted to be nested.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here. Compare [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), formulas preceding Lemma 12.24.2 and Lemma 12.24.6.
