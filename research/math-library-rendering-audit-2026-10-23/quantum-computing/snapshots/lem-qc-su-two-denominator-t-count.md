---
id: lem-qc-su-two-denominator-t-count
kind: lemma
title: Denominator exponent and optimal T count for determinant-one unitaries
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - thm-qc-single-qubit-exact-clifford-t-characterization
  - lem-qc-hadamard-reduced-word-denominators
  - thm-qc-exact-clifford-t-synthesis-optimality
  - lem-qc-squared-entry-denominator-bound
  - lem-qc-dyadic-cyclotomic-unit-circle
  - def-qc-denominator-exponent
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 16
---

## Statement

Let $U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}\in SU(2)$ with $u,t\in D$. Let $k$ be the least nonnegative integer such that $(\sqrt2)^ku,(\sqrt2)^kt\in O$. Count T gates over $G=\{H,T,T^\dagger,S,S^\dagger,X,Y,Z\}$ up to global phase. If $k>0$, each of $U$ and $TUT^\dagger$ has optimal T count in $\{2k-2,2k\}$, and

$$\min\{t(U),t(TUT^\dagger)\}=\max\{0,2k-2\}.$$

If $k=0$, both counts are zero. If $u,t$ are nonzero and $k>0$, their individual least exponents both equal $k$.

## Facts & Assumptions

**Given:** The displayed determinant-one matrix, exact gate matrices, and the stated cost model.

[F1] [[thm-qc-single-qubit-exact-clifford-t-characterization]] supplies an exact Clifford+T word for every unitary over $D$.

[F2] [[lem-qc-hadamard-reduced-word-denominators]] gives an exact reduced word with $h$ H gates and odd interior powers, and squared-entry exponent $h+1$ for $h\ge2$ or $2$ for $h=1$.

[F3] [[thm-qc-exact-clifford-t-synthesis-optimality]] establishes T optimality of every reduced word with $h\ge1$, with count $h-1+p(a)+p(c)$ for endpoint exponents $a,c$.

[F4] [[lem-qc-squared-entry-denominator-bound]] gives $\operatorname{sde}(|z|^2)\in\{2r,2r-1\}$ when $r=\operatorname{sde}(z)$.

[F5] [[lem-qc-dyadic-cyclotomic-unit-circle]] says a unit-modulus element of $D$ is a power of $\omega$.

## Proof


1.1 Reduce an exact word supplied by [F1] as in [F2], retaining its scalar $\omega^q$. When $h=0$, the matrix is monomial with unit-modulus nonzero entries, so [F5] gives $k=0$. Since its determinant is one, its diagonal exponent is even: its determinant is $\omega^{2q+a+4e}$. Hence the matrix uses no T gates, and neither does its conjugate by $T$, which changes its monomial exponent by $0$ or $2$. When $h=1$, every entry has modulus $1/\sqrt2$, and [F4] gives exponent $1$ for every entry; thus $k=1$. [F1, F2, F4, F5, given, algebra]

2.1 For $h\ge2$, set $s=h+1>0$. All four squared moduli have exponent $s$: they are either $|u|^2$ or $1-|u|^2$, and the latter has primitive numerator whenever the former has positive least exponent, since subtracting from $(\sqrt2)^s$ cannot make its primitive numerator divisible by $\sqrt2$. By [F4], every entry therefore has exponent $\lceil s/2\rceil$, so $k=\lceil(h+1)/2\rceil$. Together with step 1.1, every case with $h\ge1$ has $h\in\{2k-2,2k-1\}$, except that $h=0$ was treated separately. [F2, F4, step 1.1, algebra]

3.1 Write $A=p(a)+p(c)\in\{0,1,2\}$. The exact reduced word has determinant $\omega^{2q+a+c+\sum b_i+4(h+e)}=1$, so $A+h-1$ is even. Its optimal T count is $h-1+A$ by [F3]. Conjugating by $T$ changes the endpoint exponents to $a+1$ and $c-(-1)^e$ and leaves every odd interior exponent unchanged; hence both endpoint parities flip. The conjugate is still reduced with the same $h$ and has optimal count $h-1+(2-A)$. If $h=2k-2$ is even, the determinant parity forces $A=1$, giving both counts $2k-2$. If $h=2k-1$ is odd, it forces $A=0$ or $2$, giving the two counts $2k-2$ and $2k$. This includes $h=1,k=1$. Together with the monomial case in step 1.1, all assertions follow. [F3, step 1.1, step 2.1, algebra] ∎

## Remarks

The common nonnegative exponent handles $u=0$ without assigning a negative or infinite matrix exponent. When $u,t$ are nonzero and $k>0$, the proof shows it is also the individual least exponent used in the usual synthesis formula. This provides the denominator/T-count relation locally rather than invoking a normal-form figure as a proof.
