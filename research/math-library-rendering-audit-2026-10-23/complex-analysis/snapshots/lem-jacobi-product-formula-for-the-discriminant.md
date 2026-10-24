---
id: lem-jacobi-product-formula-for-the-discriminant
kind: lemma
title: "The Jacobi product formula for the discriminant"
status: published
origin: pipeline
deps:
  - lem-e2-transformation-law
  - lem-discriminant-is-a-nonvanishing-cusp-form
  - cor-dimension-of-level-one-modular-forms
  - def-level-one-modular-form-and-cusp-form
  - def-level-one-eisenstein-series
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-normal-convergence-of-holomorphic-products
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-zero-complex-derivative-on-a-domain-implies-constant
  - thm-double-series-fubini
  - thm-geometric-series
  - lem-binomial-theorem-over-complex-numbers
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - lem-geometric-sequence-null
  - thm-ratio-test
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post-5a.json"
    content_sha256: "739b2aa1021897b8908e33abf70a68b688cabfa73a4509f35ccf967249b1f58e"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorems 4.21-4.22, printed pp. 57-58; the lattice discriminant is (2pi)^12 times the normalised Delta used here."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "§2.4, Proposition 7 and equations (22)-(24), printed pp. 20-22."
---

## Statement

For $\tau\in\mathfrak H$ and $q=e^{2\pi i\tau}$,
$$\Delta(\tau)=q\prod_{n=1}^{\infty}(1-q^n)^{24},\qquad \Delta=(E_4^3-E_6^2)/1728.$$
The product converges locally uniformly for $|q|<1$; its factor after $q$ is holomorphic and zero-free in the unit disc and equals $1$ at $q=0$. Consequently $\Delta$ has integral Fourier coefficients and a simple zero at the cusp.

## Facts & Assumptions

**Given:** $\Delta=(E_4^3-E_6^2)/1728\in S_{12}$ with $q$-expansion $q-24q^2+O(q^3)$, and $E_2(\tau)=1-24\sum_{n\ge1}\sigma_1(n)q^n$ with its transformation law ([[lem-discriminant-is-a-nonvanishing-cusp-form]], [[def-level-one-eisenstein-series]], [[lem-e2-transformation-law]]).

[F1] A normally convergent product of holomorphic functions on a domain is holomorphic; on compacta all but finitely many factors are zero-free and the zeros come from the finitely many exceptional factors ([[thm-normal-convergence-of-holomorphic-products]]).

[F2] Locally uniform limits of holomorphic functions have locally uniformly convergent derivatives ([[thm-weierstrass-convergence-holomorphic-functions]]).

[F3] If a holomorphic function on a domain has zero derivative it is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[F4] $\sum_{r\ge0}w^r=1/(1-w)$ for $|w|<1$ and the same geometric identity for complex $w$ follows from the finite geometric sum and $|w|^{N+1}\to0$; absolutely convergent complex double families may be regrouped by applying the real double-series theorem to real and imaginary parts ([[thm-geometric-series]], [[thm-double-series-fubini]]); finite products of $(1-q^n)^{24}$ have integer coefficients by the binomial theorem ([[lem-binomial-theorem-over-complex-numbers]]).

[F5] $\dim S_{12}=1$ and $\Delta\ne0$ has leading coefficient $1$ at $q$; $S,T$ generate $SL_2(\mathbb Z)$ ([[cor-dimension-of-level-one-modular-forms]], [[lem-discriminant-is-a-nonvanishing-cusp-form]], [[thm-standard-fundamental-domain-for-the-modular-group]]).

[F6] $F\in S_{12}$ means: $F$ holomorphic on $\mathfrak H$, $F(\gamma\tau)=(c\tau+d)^{12}F(\tau)$ for all $\gamma\in SL_2(\mathbb Z)$, and the associated function of $q$ is holomorphic at $0$ with value $0$ ([[def-level-one-modular-form-and-cusp-form]]).

## Proof

1.1 Put $P_0(q)=1$ for the empty product, $P_N(q)=\prod_{1\le n\le N}(1-q^n)^{24}$ for $N\ge1$, $P(q):=\lim_NP_N(q)$ and $F(\tau):=qP(q)$. For $|q|\le r<1$ we have $|(1-q^n)^{24}-1|\le(2^{24}-1)r^n$, a summable majorant independent of $q$, so the product is normally convergent on the disc and [F1] makes $P$ holomorphic and zero-free there with $P(0)=1$; hence $F$ is holomorphic and zero-free on $\mathfrak H$ and $F(\tau)=q+O(q^2)$ (as a function of $q$). By [F2] the logarithmic derivative of $P$ may be computed from the finite products and the geometric series [F4]: $\frac{1}{2\pi i}\frac{F'}{F}=1-24\sum_{n\ge1}\frac{nq^n}{1-q^n}=1-24\sum_{n\ge1}\sum_{r\ge1}nq^{nr}=1-24\sum_{m\ge1}\sigma_1(m)q^m=E_2(\tau)$, the regrouping being justified by the bound $\sum_{n,r}n|q|^{nr}\le(1-r)^{-1}\sum_n nr^n<\infty$ on $|q|\le r<1$ [F4]; the last series converges by the ratio test. [F1, F2, F4, given, algebra]

2.1 For $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$ put $R_\gamma(\tau):=F(\gamma\tau)/[(c\tau+d)^{12}F(\tau)]$; this is holomorphic and zero-free on $\mathfrak H$. Its logarithmic derivative, divided by $2\pi i$, equals $\frac{E_2(\gamma\tau)}{(c\tau+d)^2}-\frac{12c}{2\pi i(c\tau+d)}-E_2(\tau)$ by 1.1, and by the $E_2$ transformation law this is $\bigl[E_2(\tau)-\frac{6ic}{\pi(c\tau+d)}\bigr]-\bigl[-\frac{6ic}{\pi(c\tau+d)}\bigr]-E_2(\tau)=0$ (using $\frac{12c}{2\pi i(c\tau+d)}=-\frac{6ic}{\pi(c\tau+d)}$). Hence $R_\gamma$ is constant, $C_\gamma$, by [F3], and $C_{\gamma\delta}=C_\gamma C_\delta$ because $(c_{\gamma\delta}\tau+d_{\gamma\delta})=(c_\gamma\delta\tau+d_\gamma)(c_\delta\tau+d_\delta)$. For $T$ we have $F(\tau+1)=F(\tau)$, so $C_T=1$; for $S$ we have $R_S(\tau)=F(-1/\tau)/[\tau^{12}F(\tau)]$ and at $\tau=i$, where $-1/i=i$ and $i^{12}=1$, this gives $C_S=F(i)/F(i)=1$. Since $S,T$ generate $SL_2(\mathbb Z)$ [F5] and $(-I)$ acts with factor $(-1)^{12}=1$, multiplicativity gives $C_\gamma=1$ for every $\gamma$; thus $F(\gamma\tau)=(c\tau+d)^{12}F(\tau)$ for all $\gamma$, and since $F=q+O(q^2)$ it satisfies the cusp condition. Hence $F\in S_{12}$ by [F6]. [F3, F5, F6, step 1.1, given, algebra]

3.1 By [F5], $S_{12}$ is one-dimensional and contains the nonzero $\Delta=q-24q^2+O(q^3)$; so $F=c\Delta$ for some $c\in\mathbb C$. Comparing $q$-coefficients, $1=c\cdot1$, so $F=\Delta$, which is the product formula. [F5, step 2.1, given, algebra]

4.1 Integrality of the coefficients: the coefficient of $q^N$ in $P$ equals the coefficient of $q^N$ in the finite product $\prod_{n\le N}(1-q^n)^{24}$, because all factors with $n>N$ are congruent to $1$ modulo $q^{N+1}$; the finite product has integer coefficients by [F4], and its coefficients agree with those of the analytic expansion of $P$ because the finite products converge locally uniformly, with all derivatives, to $P$ near $0$ by [F1] and [F2]. Hence every Taylor coefficient of $P$ is an integer, and the coefficients of $\Delta=qP$ are integers as well; the simple zero at the cusp is $\operatorname{ord}_\infty(\Delta)=1$ from the expansion $q-24q^2+\cdots$, consistent with [F5]. [F1, F2, F4, step 2.1, given, algebra] ∎
