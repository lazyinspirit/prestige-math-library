---
id: lem-na-rational-perturbation-space
kind: lemma
title: "The rational first-variation space has dimension set by defect"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-weighted-rational-minimax-family
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-bezout-identity-for-polynomials
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-rank-nullity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, Lemma 6.2"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed p. 44, dimension and T-space property of P_m+rP_n."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 199–201, rational defect and numerator degree count."
---

## Statement

Let $r=p/q\in\mathcal R_{m,n}^+(I)$ be nonzero, with its reduced pair and
defect $d=d_{m,n}(r)$, and put $N=m+n-d$. Then
$$\{u q-p v:u\in\mathcal P_m,\ v\in\mathcal P_n\}=\mathcal P_N.$$
For $r=0$ with the convention $p=0,q=1,d=n,N=m$, the same equality holds.

## Facts & Assumptions

**Given:** A nondegenerate interval $I$, nonnegative degrees $m,n$, and a
normalized admissible rational function $r=p/q$ with the reduced convention
of [[def-na-weighted-rational-minimax-family]].

[F1] [[def-na-weighted-rational-minimax-family]]: for $r\ne0$, $p,q$ are coprime, $\deg p\le m$, $\deg q\le n$, and $d=\min(m-\deg p,n-\deg q)$; for $r=0$, $(p,q,d)=(0,1,n)$.

[F2] [[thm-bezout-identity-for-polynomials]]: if $p,q$ are coprime, there are polynomials $A,B$ with $Ap+Bq=1$.

[F3] [[thm-rank-nullity]]: domain dimension is kernel dimension plus image dimension for a linear map of finite-dimensional vector spaces.

[F4] [[thm-polynomial-degree-of-a-product-over-a-domain]]: for nonzero polynomials over $\mathbb R$, product degrees add.

[F5] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: $\mathcal P_k$ has basis $1,x,\ldots,x^k$ and dimension $k+1$.

## Proof

1.1 Define $\Phi:\mathcal P_m\times\mathcal P_n\to\mathbb R[x]$ by $\Phi(u,v)=uq-pv$. It is linear. If $r=0$, [F1] gives $p=0,q=1,d=n,N=m$, so $\Phi(u,v)=u$ and its image is exactly $\mathcal P_m=\mathcal P_N$. [F1, F5, construct]

2.1 Suppose $r\ne0$. If $(u,v)\in\ker\Phi$, then $uq=pv$. Multiply the Bézout identity in [F2] by $u$: $u=Apu+Bqu=Apu+Bpv=p(Au+Bv)$, so $u=hp$ for $h:=Au+Bv$. Substitution into $uq=pv$ and cancellation of the nonzero polynomial $p$ give $v=hq$. Conversely, every $(hp,hq)$ lies in the kernel. [F1, F2, F4, step 1.1, algebra]

3.1 The degree bounds on $u=hp$ and $v=hq$, together with [F4], are equivalent to $\deg h\le\min(m-\deg p,n-\deg q)=d$; the zero polynomial $h$ is included. Thus the kernel has basis $(p,q),(xp,xq),\ldots,(x^dp,x^dq)$ and dimension $d+1$. By [F3] and [F5], the image dimension is $(m+n+2)-(d+1)=m+n+1-d=N+1$. [F1, F3, F4, F5, step 2.1, algebra]

4.1 For all $u,v$, the degree of $uq-pv$ is at most $\max(m+\deg q,n+\deg p)=m+n-d=N$ by [F1] and [F4]. Hence the image is a subspace of $\mathcal P_N$, whose dimension is $N+1$ by [F5]. Its dimension from step 3.1 is also $N+1$, so the two spaces are equal. [F1, F4, F5, step 3.1, algebra] ∎