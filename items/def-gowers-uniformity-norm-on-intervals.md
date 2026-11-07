---
id: def-gowers-uniformity-norm-on-intervals
kind: definition
title: "Gowers uniformity norm on intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
aliases: []
deps:
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-standard-representatives-modulo-n
  - thm-integers-modulo-n-basic-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Section 1, printed pp. 1233–1234: finite-group and interval Gowers norm definitions, including the ambient modulus condition."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142, author PDF"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf"
      locator: "Sections 1.3 and 1.6, printed pp. 55–60 and 127–129: interval normalization and inverse theorem context."
---

## Definition

For an integer \(N\ge1\), write \([N]=\{1,\ldots,N\}\). Let \(d\ge1\), and let \(M\) be any integer with \(M\ge2^dN\). Put \(G_M=\mathbb Z/M\mathbb Z\) and \(I_{N,M}=\{[1]_M,\ldots,[N]_M\}\). For \(f:[N]\to\mathbb C\), define its zero extension \(\widetilde f:G_M\to\mathbb C\) by \(\widetilde f([n]_M)=f(n)\) for \(1\le n\le N\) and \(\widetilde f(x)=0\) for \(x\notin I_{N,M}\). Let \(1_{I_{N,M}}\) be the indicator of \(I_{N,M}\). Define

$$
\|f\|_{U^d[N]}:=\frac{\|\widetilde f\|_{U^d(G_M)}}{\|1_{I_{N,M}}\|_{U^d(G_M)}}.
$$

This ratio is defined and independent of the choice of \(M\ge2^dN\).

## Definition references

[[def-gowers-uniformity-norm-on-finite-cyclic-groups]]

[[def-integers-modulo-n]]

[[def-addition-and-multiplication-modulo-n]]

[[thm-standard-representatives-modulo-n]]

[[thm-integers-modulo-n-basic-algebra]]

[Green, Tao, and Ziegler, Section 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Tao, Higher Order Fourier Analysis, Sections 1.3 and 1.6](https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf)

## Facts & Assumptions

**Given:** Integers \(d,N\ge1\), an integer \(M\ge2^dN\), the cyclic group \(G_M=\mathbb Z/M\mathbb Z\), and \(f:[N]\to\mathbb C\).

[F1] On a finite cyclic group, the normalized alternating \(d\)-cube average is nonnegative, and the \(U^d\) norm is its unique nonnegative \(2^d\)-th root ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F2] The integers modulo \(M\) are the quotient classes \([a]_M\) ([[def-integers-modulo-n]]).

[F3] Modular addition is \([a]_M+[b]_M=[a+b]_M\), independent of representatives ([[def-addition-and-multiplication-modulo-n]]).

[F4] The classes \([0]_M,\ldots,[M-1]_M\) are distinct and exhaust \(G_M\) ([[thm-standard-representatives-modulo-n]]).

[F5] Modular addition makes \(G_M\) an abelian group ([[thm-integers-modulo-n-basic-algebra]]).

## Proof

1.1 Fix a modular \(d\)-cube all of whose vertices lie in \(I_{N,M}\). By [F4], its base vertex has a unique representative \(n\in[N]\). Each one-coordinate vertex determines a unique integer increment \(k_i\in[-(N-1),N-1]\) with \([n]_M+[k_i]_M\in I_{N,M}\), so the modular increment is \([k_i]_M\) by [F2], [F3], and [F5]. Every lifted integer vertex \(q=n+\sum_i\omega_i k_i\) lies between \(1-d(N-1)\) and \(N+d(N-1)\). The inequality \(2^d\ge d+1\) follows by induction: it is equality at \(d=1\), and \(2^{d+1}\ge2(d+1)\ge d+2\) if \(2^d\ge d+1\). Hence \(M\ge(d+1)N\), so \(q\le(d+1)N-d<M\). If \(q<1\), then \(q\le0\) and \(q+M\ge N+d+1>N\); if \(q>N\), then \(q<M\). Thus no lift wraps modulo \(M\) to a different point of \([N]\). Conversely, every integer cube whose vertices lie in \([N]\) reduces to a supported modular cube. The base representative and the increments \(k_i\) are unique, so this is a bijection, independent of \(M\). [given, F2, F3, F4, F5, choose, induction, algebra]

1.2 The zero extension makes every cube product vanish unless all vertices lie in \(I_{N,M}\). On the supported cubes its factors are exactly the values of \(f\) on the corresponding integer cube from step 1.1. Therefore the unnormalized cube sum for \(\widetilde f\) is a fixed integer-cube sum \(S_d(f)\), independent of \(M\); the same holds for \(1_{I_{N,M}}\), with sum \(S_d(1_{[N]})\). The normalized averages are \(M^{-(d+1)}S_d(f)\) and \(M^{-(d+1)}S_d(1_{[N]})\). [given, F1, step 1.1, algebra]

2.1 The integer cube with base \(n=1\) and all increments zero contributes \(1\) to \(S_d(1_{[N]})\), so this denominator sum is positive. [given, step 1.2, construct]

2.2 By [F1], the two finite-group norms are the nonnegative \(2^d\)-th roots of their normalized cube averages. Their ratio is therefore \(\bigl(S_d(f)/S_d(1_{[N]})\bigr)^{1/2^d}\), whose denominator is positive by step 2.1 and which is independent of \(M\). This proves the definition is well-defined. [F1, step 1.2, step 2.1, algebra] ∎
