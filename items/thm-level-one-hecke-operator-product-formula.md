---
id: thm-level-one-hecke-operator-product-formula
kind: theorem
title: "Product formula for normalized level-one Hecke operators"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-hecke-operator-on-weight-zero-maass-forms
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.2, normalized triangular Hecke operators and Fourier action (4.10), printed pp. 28–29; the product formula is proved locally below."
---

## Statement

For every pair of positive integers $m,n$, the normalized level-one Hecke operators on weight-zero functions satisfy
$$T_mT_n=\sum_{d\mid\gcd(m,n)}T_{mn/d^2}.$$

## Statement references

[A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, §4.2, printed pp. 28–29.](https://arxiv.org/pdf/1202.0189v1)


## Facts & Assumptions

**Given:** For positive integers $n$, use the normalized finite-sum maps
$$T_nf(z)=n^{-1/2}\sum_{ad=n}\ \sum_{b\bmod d}f((az+b)/d),$$
where $a,d$ are positive integers and $b$ runs through $0,\ldots,d-1$. Throughout the proof $f$ is $SL_2(\mathbb Z)$-invariant, so integer translations of evaluation arguments leave its value unchanged. These are the level-one Hecke operators ([[def-hecke-operator-on-weight-zero-maass-forms]]).

[F1] The full-level operator is the normalized all-determinant Hecke operator with factor $n^{-1/2}$ ([[def-hecke-operator-on-weight-zero-maass-forms]]); its upper-triangular representatives $\begin{pmatrix}a&b\\0&d\end{pmatrix}$ with $ad=n$ and $b\bmod d$ give the finite sum in the Given clause (Knightly–Li, §4.2).

[F2] Every positive integer has a prime factorization, unique up to ordering ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

1.1 Suppose $\gcd(M,N)=1$. Expand $T_NT_Mf$ using the finite-sum formula in [F1]. For divisors $v\mid M$ and $s\mid N$, write $u=M/v$ and $r=N/s$. Choose the canonical representatives $0\le c<v$ and $0\le d<s$. The corresponding summand is
$$f\!\left(\frac{ur z+ud+cs}{vs}\right).$$
Because $\gcd(u,s)=\gcd(s,v)=1$, the map $(c\bmod v,d\bmod s)\mapsto ud+cs\bmod vs$ is bijective: reduction modulo $s$ first determines the canonical $d$ uniquely, after which reduction modulo $v$ determines $c$ uniquely. The pairs $(v,s)$ run through every divisor $D=vs$ of $MN$ exactly once, since $\gcd(M,N)=1$. The normalization is $(MN)^{-1/2}$. Hence $T_NT_M=T_{MN}$ when $\gcd(M,N)=1$; interchanging $M,N$ gives $T_MT_N=T_{MN}$ as well. [F1, given, algebra]

2.1 Fix a prime $p$ and an integer $r\ge1$. Expanding $T_pT_{p^r}f$ gives, with $0\le j\le r$ and $b\bmod p^{r-j}$,
$$p^{-(r+1)/2}\left(\sum_{c\bmod p}f\!\left(\frac{p^jz+p^jc+pb}{p^{r-j+1}}\right)+f\!\left(\frac{p^{j+1}z+b}{p^{r-j}}\right)\right).$$
For $j=0$, the first sum runs once over every residue modulo $p^{r+1}$ and gives the divisor-$p^{r+1}$ terms of $T_{p^{r+1}}$; the second term gives its divisor-$p^r$ terms. For $1\le j\le r$, the second term gives the divisor-$p^{r-j}$ terms of $T_{p^{r+1}}$. In the first term for such $j$, cancel a common factor $p$ in numerator and denominator; for each resulting residue modulo $p^{r-j}$, the pair $(b,c)$ has exactly $p$ preimages. As $j$ runs from $1$ to $r$, these are all divisor terms of $T_{p^{r-1}}$, each counted $p$ times. The normalization changes $p^{-(r+1)/2}p$ to $p^{-(r-1)/2}$. Therefore
$$T_pT_{p^r}=T_{p^{r+1}}+T_{p^{r-1}}.$$ [F1, algebra]

2.2 Expanding in the reverse order gives
$$p^{-(r+1)/2}\sum_{j=0}^r\sum_{b\bmod p^{r-j}}\left(\sum_{c\bmod p}f\!\left(\frac{p^jz+b+c\,p^{r-j}}{p^{r-j+1}}\right)+f\!\left(\frac{p^{j+1}z+pb}{p^{r-j}}\right)\right).$$
For each $j$, the first sum ranges once over every residue modulo $p^{r-j+1}$ and gives the corresponding divisor terms of $T_{p^{r+1}}$. The second term for $j=r$ is the remaining divisor-$1$ term of $T_{p^{r+1}}$; for $j<r$, cancel $p$ and each residue modulo $p^{r-j-1}$ occurs $p$ times, giving all terms of $T_{p^{r-1}}$ with its normalization. Hence $T_{p^r}T_p=T_{p^{r+1}}+T_{p^{r-1}}$ as well. [F1, step 2.1, algebra]

2.3 Induction on $s$ using steps 2.1 and 2.2 gives, first for $0\le s\le r$,
$$T_{p^r}T_{p^s}=\sum_{j=0}^{\min(r,s)}T_{p^{r+s-2j}}.$$
For $s=0$ this is $T_{p^r}T_1=T_{p^r}$. For $s=1$, steps 2.1–2.2 give the recurrence directly. Suppose $2\le s\le r$ and the formula holds for $s-1$ and $s-2$. Step 2.1 gives $T_{p^s}=T_pT_{p^{s-1}}-T_{p^{s-2}}$, while steps 2.1–2.2 make $T_p$ commute with each $T_{p^k}$. Thus the induction hypotheses yield
$$T_{p^r}T_{p^s}
=\sum_{j=0}^{s-1}\bigl(T_{p^{r+s-2j}}+T_{p^{r+s-2-2j}}\bigr)
-\sum_{j=0}^{s-2}T_{p^{r+s-2-2j}}.$$
The second sum cancels the low-exponent terms for $j=0,\ldots,s-2$, leaving $T_{p^{r+s-2j}}$ for $0\le j\le s$; the last such term is the low-exponent term at $j=s-1$, with exponent $r-s$. This proves the formula when $s\le r$. The recurrence expresses every $T_{p^k}$ as a polynomial in $T_p$, so these operators commute pairwise. Since the right side is symmetric in $r,s$, the case $s>r$ follows by interchanging the factors. [step 2.1, step 2.2, algebra, induction]

3.1 Factor $m=\prod_p p^{a_p}$ and $n=\prod_p p^{b_p}$ as in [F2]. Repeated application of step 1.1 gives $T_m=\prod_pT_{p^{a_p}}$ and $T_n=\prod_pT_{p^{b_p}}$. Operators belonging to different primes combine by step 1.1, while step 2.3 handles each common prime. Distributing the finite sums yields one term for each choice $0\le j_p\le\min(a_p,b_p)$, namely $T_{\prod_p p^{a_p+b_p-2j_p}}$. The choices are in bijection with divisors $d=\prod_p p^{j_p}$ of $\gcd(m,n)$, and the term is $T_{mn/d^2}$. This proves the formula. [F2, step 1.1, step 2.3, algebra] ∎
