---
id: ex-three-term-progression-fourier-bound
kind: example
title: "A Fourier character saturates the three-term progression $U^2$ bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
aliases: []
deps: [thm-generalized-von-neumann-for-k-term-progressions,
       def-gowers-uniformity-norm-on-finite-cyclic-groups,
       def-integers-modulo-n,
       def-addition-and-multiplication-modulo-n,
       thm-integers-modulo-n-basic-algebra,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-orthogonality-of-characters-on-a-finite-cyclic-group,
       lem-prime-not-dividing-is-coprime,
       cor-extended-euclidean-bezout-coefficients]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references: []
---

## Example

Let $p>6$ be prime and $G=\mathbb Z/p\mathbb Z$. For $b,x\in G$ define the character $\chi_b(x)=\exp(2\pi i bx/p)$ using integer representatives; changing either representative by a multiple of $p$ changes the exponent by an integer multiple of $2\pi i$, so the value is unchanged. Define the normalized Fourier coefficient

$$\widehat f(\xi):=p^{-1}\sum_{x\in G}f(x)\exp(-2\pi i\xi x/p)=p^{-1/2}(\mathcal F_pf)(\xi),$$

where $\mathcal F_p$ is the negative-sign unitary discrete Fourier transform. Put $f_0=\chi_a$, $f_1=\chi_{-2a}$, and $f_2=\chi_a$ for an arbitrary $a\in G$, and let

$$\Lambda_3:=p^{-2}\sum_{x,r\in G}f_0(x)f_1(x+r)f_2(x+2r).$$

For $q=2$, the norm is given by $\|f\|_{U^2(G)}^4=\mathbb E_{x,h_1,h_2\in G}f(x)\overline{f(x+h_1)}\,\overline{f(x+h_2)}f(x+h_1+h_2)$. Then $\widehat f_0$ and $\widehat f_2$ are point masses at $a$, $\widehat f_1$ is a point mass at $-2a$, the Fourier sum $\sum_{\xi\in G}\widehat f_0(\xi)\widehat f_1(-2\xi)\widehat f_2(\xi)$ equals $\Lambda_3=1$, and $\|f_0\|_{U^2}=\|f_1\|_{U^2}=\|f_2\|_{U^2}=1$. Thus this character example attains equality in the three-term progression bound.

## Facts & Assumptions

**Given:** A prime $p>6$, $G=\mathbb Z/p\mathbb Z$, and $a\in G$.

[F1] For $k=3$, prime $p>2k$, and functions bounded in magnitude by $1$, the normalized average $p^{-2}\sum_{x,r\in G}\prod_{j=0}^2f_j(x+jr)$ has absolute value at most $\min_j\|f_j\|_{U^2(G)}$ ([[thm-generalized-von-neumann-for-k-term-progressions]]).

[F2] The $U^2$ norm is the nonnegative fourth root of the normalized alternating $2$-cube average ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F3] The unitary DFT is $(\mathcal F_pf)(\xi)=p^{-1/2}\sum_{x\in G}f(x)\exp(-2\pi i\xi x/p)$; its characters are multiplicative and have modulus $1$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F4] For every integer $b$, $\sum_{x=0}^{p-1}\exp(2\pi i b x/p)$ equals $p$ if $p\mid b$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F5] A prime $p$ not dividing an integer $b$ is coprime to $b$ ([[lem-prime-not-dividing-is-coprime]]).

[F6] If $p>0$, the extended Euclidean descent gives integers $u,v$ with $2u+pv=\gcd(2,p)$ ([[cor-extended-euclidean-bezout-coefficients]]).

## Verification

1.1 The normalized Fourier formula gives $\widehat{\chi_b}(\xi)=p^{-1}\sum_{x\in G}\exp(2\pi i(b-\xi)x/p)$. Character orthogonality makes this coefficient $1$ when $b=\xi$ in $G$ and $0$ otherwise, proving the asserted point-mass Fourier transforms. [given, F3, F4, algebra]

1.2 Since $p>6$ is prime, $p\nmid2$; the coprimality and Bézout suppliers give an inverse to $2$ modulo $p$. Hence $\widehat f_0(\xi)\widehat f_1(-2\xi)\widehat f_2(\xi)$ is nonzero only at $\xi=a$, where it equals $1$, so the stated Fourier sum is $1$. [given, F3, F5, F6, step 1.1, algebra]

1.3 For every $x,r\in G$, multiplicativity of the characters gives $f_0(x)f_1(x+r)f_2(x+2r)=\exp\!\left(\frac{2\pi i}{p}\big(ax-2a(x+r)+a(x+2r)\big)\right)=1$, because the exponent numerator cancels in $G$. Therefore the normalized average is $\Lambda_3=1$. [given, F3, algebra]

1.4 For $b\in G$, the $U^2$ cube product of $\chi_b$ is $\chi_b(x)\overline{\chi_b(x+h_1)}\,\overline{\chi_b(x+h_2)}\chi_b(x+h_1+h_2)=1$, since the four character exponents cancel. Its normalized cube average is $1$, so its nonnegative fourth root is $1$. Applying this to $b=a$ and $b=-2a$ proves all three claimed $U^2$ values. [given, F2, F3, algebra]

2.1 Each $f_j$ has modulus $1$, so the generalized von Neumann theorem gives $|\Lambda_3|\le\min_j\|f_j\|_{U^2}=1$. Step 1.3 shows $\Lambda_3=1$, hence the bound is attained. [given, F1, F3, step 1.3, step 1.4] ∎
