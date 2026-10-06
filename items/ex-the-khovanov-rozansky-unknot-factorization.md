---
id: ex-the-khovanov-rozansky-unknot-factorization
kind: example
title: "The Khovanov-Rozansky factorization of the unknot"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-factorization-of-a-marked-moy-graph]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, printed p. 4, and section 7, printed p. 36; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Example

Take the closed planar graph consisting of a single circle with one mark,
labelled $x$, and one oriented arc from the mark to itself. Its
Khovanov-Rozansky complex (the factorization of
[[def-factorization-of-a-marked-moy-graph]]) is
$$\mathbb Q[a,x]\xrightarrow{a}\mathbb Q[a,x]\{-1,1\}\xrightarrow{0}\mathbb Q[a,x];$$
the potential is $0$ because the graph is closed, and the differential squares
to zero. Its cohomology is $H(\Gamma)\cong\mathbb Q[x]\{-1,1\}$: the
$a$-multiplication is injective on the first term and has cokernel
$\mathbb Q[x]\{-1,1\}$ on the second, so all cohomology sits in one degree and
$a$ acts trivially. Consequently the Euler characteristic of the one-strand
unknot diagram is
$$\langle D\rangle=t^{-1}/(q^{-1}-q)=\frac{\alpha}{1-q^{-2}},\qquad \alpha=-t^{-1}q^{-1},$$
in the integer grading of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]].

Caveat: this is the factorization attached to the one-mark circle; it is a
rank-one-in-each-parity representative over $\mathbb Q[a,x]$, of infinite rank over the closed graph's ground ring $\mathbb Q[a]$, and it is the
base normalization of the categorification theorem, not an absolute
normalization of the trigrading (Khovanov-Rozansky II, printed p. 4).

## Facts & Assumptions

**Given:** the closed graph $\Gamma$ consisting of one circle with one mark labelled $x$ and the arc from the mark to itself, so that the two endpoint labels of the arc coincide.

[F1] An arc with endpoint labels $x_1,x_2$ has factorization $(a,x_1-x_2)=\mathbb Q[a,x_1,x_2]\xrightarrow{a}\mathbb Q[a,x_1,x_2]\{-1,1\}\xrightarrow{x_1-x_2}\mathbb Q[a,x_1,x_2]$ with potential $a(x_1-x_2)$; a closed graph has potential $0$ and its factorization is a $2$-periodic complex whose cohomology is written $H(\Gamma)$ ([[def-factorization-of-a-marked-moy-graph]]).

[F2] The Euler characteristic of a closed braid diagram is $\langle D\rangle=\sum_{j,k,l}(-1)^jt^kq^l\dim_{\mathbb Q}H^j_{k,l}(D)$ in the integer grading ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).

## Verification

**Proof technique:** direct computation of the two-term complex and of its cohomology.

1.1 *The factorization.* The circle carries one mark and one arc whose two endpoint labels are both $x$, so the arc factors of [F1] specialize to $(a,x-x)=(a,0)$: the differentials are multiplication by $a$ and by $0$, the middle term carries the shift $\{-1,1\}$, and the square of the differential is $0\cdot a=0$, which is the potential $a(x-x)$ of the closed graph. Hence the complex is exactly $\mathbb Q[a,x]\xrightarrow{a}\mathbb Q[a,x]\{-1,1\}\xrightarrow{0}\mathbb Q[a,x]$. [F1, algebra]

1.2 *Cohomology.* In odd inner-factorization parity the cohomology is $\ker(0\colon\mathbb Q[a,x]\{-1,1\}\to\mathbb Q[a,x])/\operatorname{im}(a\colon\mathbb Q[a,x]\to\mathbb Q[a,x]\{-1,1\})=\mathbb Q[a,x]\{-1,1\}/a\mathbb Q[a,x]\{-1,1\}\cong\mathbb Q[x]\{-1,1\}$, since $\mathbb Q[a,x]/a\mathbb Q[a,x]\cong\mathbb Q[x]$ and multiplication by $a$ is injective on $\mathbb Q[a,x]$. In even inner-factorization parity the cohomology is $\ker(a)/\operatorname{im}(0)=0$ because multiplication by the nonzerodivisor $a$ is injective. So $H(\Gamma)\cong\mathbb Q[x]\{-1,1\}$, all of it in odd inner parity and outer cochain degree $0$, and $a$ acts as zero on it. [F1, algebra]

2.1 *Euler characteristic.* The graded pieces of $H(\Gamma)$ have $(k,l)=(-1,1+2m)$ for $m\ge0$, each of dimension $1$ over $\mathbb Q$, all in cohomological degree $0$; substituting into the Euler characteristic of [F2] gives $\langle D\rangle=\sum_{m\ge0}t^{-1}q^{1+2m}=t^{-1}q/(1-q^2)$. Since $q^{-1}-q=(1-q^2)/q$, this is $t^{-1}/(q^{-1}-q)$; and with $\alpha=-t^{-1}q^{-1}$ one has $\alpha/(1-q^{-2})=-t^{-1}q^{-1}\cdot q^2/(q^2-1)=t^{-1}q/(1-q^2)$, the same value. This is the unknot normalization used as the base case of the categorification theorem, and it is read off the displayed representative, finite free over $\mathbb Q[a,x]$ and infinite free over $\mathbb Q[a]$. [F1, F2, step 1.2, algebra] ∎
