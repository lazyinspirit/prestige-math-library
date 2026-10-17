---
id: lem-na-clenshaw-curtis-dct-i-orthogonality
kind: lemma
title: "Weighted cosine orthogonality on the Lobatto grid"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 1
deps: [def-na-clenshaw-curtis-dct-i, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-subtraction-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-induction-principle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The finite trigonometric sums are choice-free.
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, Chebyshev grid and cosine transform implementation."
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed p. 236, Clenshaw–Curtis on Chebyshev extrema."
---

## Statement

For $n\in\mathbb N$ with $n\ge1$ and $k,\ell\in\mathbb N$ with $0\le k,\ell\le n$, define
$$S_{k\ell}:=\frac12\cos(0)+\sum_{j=1}^{n-1}\cos\!\left(\frac{j k\pi}{n}\right)\cos\!\left(\frac{j \ell\pi}{n}\right)+\frac12(-1)^{k+\ell}.$$
Then $S_{k\ell}=n$ when $k=\ell=0$ or $k=\ell=n$, $S_{k\ell}=n/2$ when $k=\ell$ is strictly between $0$ and $n$, and $S_{k\ell}=0$ when $k\ne\ell$. The half-endpoint convention is the one used by the DCT-I of [[def-na-clenshaw-curtis-dct-i]].

## Facts & Assumptions

**Given:** A natural $n\ge1$ and naturals $0\le k,\ell\le n$.

[A1] The grid size is $n+1$ with $n\ge1$, and $0\le k,\ell\le n$ in the natural-number order.

[F1] [[def-na-clenshaw-curtis-dct-i]] fixes the Lobatto angles $j k\pi/n$, the canonical real-image convention, and the half-weighted endpoint convention.

[F2] [[thm-sine-and-cosine-addition-formulas]] and [[thm-sine-and-cosine-subtraction-formulas]] give the sine-difference telescoping identity and the cosine product-to-sum identity.

[F3] [[thm-quarter-turn-values-and-shift-formulas]] gives the shifts by $\pi/2$ and the quarter-turn values. Iterating its shift identities by induction on the natural $m$ gives $\sin(m\pi/2)=0$ for even $m$, $|\sin(m\pi/2)|=1$ for odd $m$, and $\cos(m\pi/2)=0$ for odd $m$ ([[thm-induction-principle]]).

[F4] [[thm-sine-cosine-signs-monotonicity-and-ranges]] gives strict increase of sine on $[0,\pi/2]$ and strict decrease on $[\pi/2,\pi]$; with $\sin 0=\sin\pi=0$ from [[thm-quarter-turn-values-and-shift-formulas]], this implies $\sin\theta>0$ for $0<\theta<\pi$.

## Proof

1.1 For the $n$ in [A1], and any natural frequency $m$ with $1\le m<2n$, put $\alpha:=m\pi/n$ and $C_m:=\sum_{j=0}^{n-1}\cos(j\alpha)$. Positivity of canonical naturals gives $n>0$, and $1\le m<2n$ gives $0<\alpha/2<\pi$; hence $\sin(\alpha/2)>0$ by [F4]. The half-weighted endpoints are the DCT-I convention fixed by [F1]. By [F2], $2\sin(\alpha/2)C_m=\sum_{j=0}^{n-1}\bigl(\sin((j+\tfrac12)\alpha)-\sin((j-\tfrac12)\alpha)\bigr)=\sin((n-\tfrac12)\alpha)+\sin(\alpha/2)=2\sin(n\alpha/2)\cos((n-1)\alpha/2).$ Since $\sin(\alpha/2)>0$, this gives $C_m=\sin(m\pi/2)\cos((n-1)m\pi/(2n))/\sin(m\pi/(2n))$. [given, A1, F1, F2, F4, algebra]

1.2 If $m$ is even, the numerator factor $\sin(m\pi/2)$ is $0$ by [F3], so $C_m=0$ for $1\le m<2n$. If $m$ is odd, write $(n-1)m\pi/(2n)=m\pi/2-m\pi/(2n)$; the addition formulas and $\cos(m\pi/2)=0$ give $\cos((n-1)m\pi/(2n))=\sin(m\pi/2)\sin(m\pi/(2n))$, hence $C_m=1$. For $m=0$ and $m=2n$, direct evaluation gives $C_m=n$. [given, F2, F3, algebra]

2.1 Define $D_m:=\frac12+\sum_{j=1}^{n-1}\cos(j m\pi/n)+\frac12(-1)^m$. Since $C_m=1+\sum_{j=1}^{n-1}\cos(j m\pi/n)$, step 1.2 gives $D_m=0$ for $1\le m<2n$ and $D_0=D_{2n}=n$. [step 1.2, algebra]

3.1 For $k,\ell$ in [A1], [F2] makes each product in $S_{k\ell}$ one half the sum of the cosine terms with natural frequency indices $|k-\ell|$ and $k+\ell$, so $S_{k\ell}=\frac12(D_{|k-\ell|}+D_{k+\ell})$. If $k\ne\ell$, then $1\le|k-\ell|<2n$ and $1\le k+\ell<2n$ except the impossible distinct-endpoint case $k+\ell=2n$, so both terms vanish by step 2.1. If $k=\ell=0$ or $k=\ell=n$, both indices are $0$ or $2n$, giving $S_{k\ell}=n$. If $k=\ell$ is interior, the indices are $0$ and $2k$ with $1\le2k<2n$, giving $S_{k\ell}=n/2$. These cases prove the statement. [given, A1, F1, F2, step 2.1, algebra] ∎
