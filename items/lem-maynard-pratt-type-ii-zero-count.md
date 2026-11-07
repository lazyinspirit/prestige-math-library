---
id: lem-maynard-pratt-type-ii-zero-count
kind: lemma
title: "Maynard–Pratt Type II Zero Count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-countable-choice
  - def-maynard-pratt-type-ii-detection-integral
  - def-riemann-zeta-zero-counting
  - cor-zeta-zero-count-unit-interval
  - thm-maynard-pratt-twisted-fourth-moment-input
  - def-euler-gamma-function
  - thm-gamma-meromorphic-continuation
  - thm-stirling-formula-gamma
  - thm-riemann-zeta-meromorphic-continuation
  - def-natural-logarithm
  - def-real-power
  - lem-riemann-zeta-linear-growth-on-critical-line
  - def-number-theoretic-mobius-function
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Maynard and Pratt, Half-Isolated Zeros and Zero-Density Estimates, Definition 22 and Lemma 24"
      url: "https://arxiv.org/pdf/2206.11729v2"
    - title: "Guth and Maynard, New Large Value Estimates for Dirichlet Polynomials, §13.1"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
---

## Statement

Let $T$ be sufficiently large and let $1/2\le\sigma\le1$. For each nontrivial zero $\rho=\beta+i\gamma$ with $0<\beta<1$ and $\gamma\in[T,2T]$, put $\alpha=\tfrac12-\beta$ and
$$M_T(w)=\sum_{\substack{m\in\mathbb Z_{>0}\\m\le2T^{1/100}}}\mu(m)m^{-w},\qquad I_T(\rho)=\frac1{2\pi}\int_{-\infty}^{\infty}T^{(\alpha+iu)/2}\Gamma(\alpha+iu)M_T(\rho+\alpha+iu)\zeta(\rho+\alpha+iu)\,du,$$
where $m^{-w}=\exp(-w\log m)$ and $T^{w/2}=\exp((w/2)\log T)$, the integral converges absolutely, and when $\beta=1/2$ the integrand at $u=0$ has its removable value. Let $R_{II}(\sigma,T)$ be the number, counted with multiplicity, of zeros satisfying $\operatorname{Re}\rho\ge\sigma$ for which $|I_T(\rho)|\ge1/3$. Then there are absolute constants $A,C>0$ such that
$$R_{II}(\sigma,T)\le A T^{2(1-\sigma)}(\log T)^C.$$

## Statement references

[Maynard and Pratt, Definition 22, Lemma 24, and Appendix C](https://arxiv.org/pdf/2206.11729v2)

[Guth and Maynard, §13.1, Type II zero estimate](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

## Facts & Assumptions

**Given:** Sufficiently large $T$, $1/2\le\sigma\le1$, and the detection integral and zero count in the Statement. Use the countable-choice convention of the detection-integral and zero-count suppliers.

[F1] [[def-maynard-pratt-type-ii-detection-integral]] defines this same $M_T$ and normalized $I_T$, and verifies absolute convergence, including the removable value when $\beta=1/2$.

[F2] [[cor-zeta-zero-count-unit-interval]] bounds the number of nontrivial zeros, with multiplicity, in every closed unit interval of nonnegative ordinates by $O(\log(t+2))$.

[F3] [[thm-maynard-pratt-twisted-fourth-moment-input]] asserts, for absolute constants $A,B>0$, that $\int_{T/2}^{3T}|M_T(1/2+it)\zeta(1/2+it)|^4\,dt\le AT(\log T)^B$. Its local proof remains unsupplied; the derivation below is relative to this prerequisite.

[F4] [[thm-gamma-meromorphic-continuation]] gives the simple pole of $\Gamma$ at zero and no other pole in $-1/2\le\operatorname{Re}z\le0$; [[thm-stirling-formula-gamma]] supplies its sectorial asymptotic.

[F5] [[lem-riemann-zeta-linear-growth-on-critical-line]] gives $|\zeta(1/2+it)|\le2+2|t|$ for every real $t$.

[F6] [[def-number-theoretic-mobius-function]] gives $|\mu(m)|\le1$.

## Proof

1.1 Write $L=\log T$. By covering $[T,2T]$ with at most $T+2$ closed unit intervals, [F2] bounds its total zero count, with multiplicity, by $O(TL)$. If $1/2\le\sigma\le1/2+1/L$, then $T^{2(1-\sigma)}\ge e^{-2}T$, so this proves the required bound, without estimating the integral near its removable singularity. If $\sigma=1$, the count is zero because the counted zeros have $\beta<1$. Hence it remains to consider $1/2+1/L<\sigma<1$. [given, F2, algebra]

1.2 There is an absolute constant $C$ such that, uniformly for $-1/2\le a\le-1/L$ and real $u$, $|\Gamma(a+iu)|\le CL e^{-|u|}$. Indeed, on the compact rectangle $-1/2\le\operatorname{Re}z\le0$, $|\operatorname{Im}z|\le1$, the function $z\Gamma(z)$ is bounded after removal at zero by [F4], and $|a+iu|\ge1/L$. For $|u|\ge1$, the sectorial asymptotic in [F4], enlarged over a fixed compact set, gives $|\Gamma(a+iu)|\le C|u|^{a-1/2}e^{-\pi|u|/2}\le C e^{-|u|}$. The sector and constants can be fixed throughout $a\in[-1/2,0]$. [F4, algebra]

2.1 Put $f(t)=|M_T(1/2+it)\zeta(1/2+it)|$ and $K(u)=e^{-|u|}$. The finite sum and [F5, F6] give $f(t)\le C T^{1/100}(1+|t|)$, so all integrals against a translate of $K$ below are finite. For a zero counted in the remaining range, $a=1/2-\beta$ lies in $(-1/2,-1/L)$ and $|T^{(a+iu)/2}|=T^{a/2}$. Thus [F1] and step 1.2 imply $1/3\le |I_T(\rho)|\le CL T^{1/4-\sigma/2}\int_{\mathbb R}K(u)f(\gamma+u)\,du$. [given, F1, F5, F6, step 1.1, step 1.2, algebra]

3.1 For any nonnegative $g$ with the following integrals finite, $\left(\int_{\mathbb R}Kg\right)^4\le8\int_{\mathbb R}Kg^4$. To verify this directly, put $m=(\int Kg)/2$, using $\int K=2$. The identity $x^4-4m^3x+3m^4=(x-m)^2(x^2+2mx+3m^2)\ge0$ integrated against $K$ gives $\int Kg^4\ge2m^4$, as required. Apply this with $g(u)=f(\gamma+u)$ in step 2.1, and substitute $t=\gamma+u$, to obtain $1\le C L^4 T^{1-2\sigma}\int_{\mathbb R}e^{-|t-\gamma|}f(t)^4\,dt$ for every counted zero, with an absolute constant. [step 2.1, algebra]

3.2 For each $\gamma\in[T,2T]$ and $t\notin[T/2,3T]$, put $v=t-\gamma$. Then $|v|\ge T/2$, $1+|t|\le1+2T+|v|$, and $e^{-|v|}\le e^{-T/4}e^{-|v|/2}$. The polynomial bound in step 2.1 consequently gives $\int_{\mathbb R\setminus[T/2,3T]}e^{-|t-\gamma|}f(t)^4\,dt\le C T^{4+1/25}e^{-T/4}$, since the integrals of $e^{-|v|/2}(1+|v|)^k$ are finite for $0\le k\le4$. There are at most $CTL$ zeros by step 1.1, so summing these tails contributes $O(T^{5+1/25}L e^{-T/4})=O(1)$. [step 1.1, step 2.1, algebra]

4.1 Sum step 3.1 over the finite multiset $Z$ of counted zeros, repeating ordinates according to multiplicity, and define $S(t)=\sum_{\rho\in Z}e^{-|t-\operatorname{Im}\rho|}$. For any real $t$ and integer $j\ge0$, the zeros with $j\le|t-\gamma|<j+1$ lie in at most two intervals of length one intersected with $[T,2T]$. Each nonempty intersection is contained in a nonnegative closed unit interval with starting point at most $2T$, so [F2] bounds its count by $CL$. Summing $CL e^{-j}$ gives $S(t)\le CL$ uniformly in $t$. Therefore $\int_{T/2}^{3T} S(t)f(t)^4\,dt\le C T L^{B+1}$ by [F3]. [F2, F3, step 3.1, algebra]

5.1 Summing step 3.1 and using steps 4.1 and 3.2 yields $R_{II}(\sigma,T)\le C L^4T^{1-2\sigma}(TL^{B+1}+1)\le C T^{2(1-\sigma)}L^{B+5}$ for sufficiently large $T$. Combine this with the endpoint and near-critical-line cases in step 1.1, enlarging the absolute constant if necessary. This proves the claimed estimate relative to [F3] and the stated prerequisite convention. [step 1.1, step 3.1, step 4.1, step 3.2, algebra] ∎

## Remarks

The argument uses the negative-real-part Gamma factor in the definition of $I_T$ directly. It does not replace it with a positive-real-part factor. Summation over the zero multiset keeps all multiplicities and closed height endpoints, and requires no selection of separated zeros. The local proof of the twisted fourth-moment supplier [F3] remains owed; the derivation here does not establish that input or complete the downstream zero-density theorem. Countable choice is inherited from the existing detection-integral and zero-count suppliers; its explicit exposure in the batch's theorem statements remains a scope obligation.
