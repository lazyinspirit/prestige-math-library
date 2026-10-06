---
id: lem-radix-two-even-odd-dft-factorisation
kind: lemma
title: "The radix-two even/odd factorisation of the DFT"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
deps: [def-complex-exponential,
       def-divides-in-z,
       def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-integers-modulo-n,
       def-unnormalised-engineering-dft-and-conversion,
       lem-finite-sum-reindexing-and-fubini,
       lem-int-cancellation,
       lem-units-of-z,
       thm-complex-exponential-addition-and-real-extension,
       thm-division-algorithm-in-z,
       thm-integers-modulo-n-basic-algebra,
       thm-int-ordered-ring,
       cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: the Cooley-Tukey reduction for $n=2s$, which splits the coefficient list into its two halves and combines them with a $z^j$ twiddle to produce the even- and odd-power evaluations (the decimation-in-frequency mirror of the display above; the even/odd-coefficient form is its transposed statement)"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, (12.8)-(12.11) and Proposition 12.1: the mirror-image decimation-in-frequency form, which the proof absorbs as the equivalent formulation"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $M\ge1$, $N=2M$ and $f\in\mathbb C^{\mathbb Z/N}$. Define the even and odd parts $e,o\in\mathbb C^{\mathbb Z/M}$ by

$$e(r):=f(2r),\qquad o(r):=f(2r+1),\qquad r\in\mathbb Z/M\mathbb Z,$$

where $2r$ and $2r+1$ denote the classes in $\mathbb Z/N\mathbb Z$ of the corresponding integers; the maps $r\mapsto2r$ and $r\mapsto2r+1$ from $\mathbb Z/M\mathbb Z$ to $\mathbb Z/N\mathbb Z$ are well defined and injective with disjoint images, which together exhaust $\mathbb Z/N\mathbb Z$. Let $X(f)$, $X(e)$, $X(o)$ be the unnormalised transforms of [[def-unnormalised-engineering-dft-and-conversion]], the latter two extended periodically to $\mathbb Z$. Then for every $k\in\mathbb Z$

$$X_k(f)=X_k(e)+e^{-2\pi ik/N}X_k(o),\qquad X_{k+M}(f)=X_k(e)-e^{-2\pi ik/N}X_k(o).$$

Thus an $N$-point transform is computed from the two $M$-point transforms of its even and odd parts together with the twiddle factors $e^{-2\pi ik/N}$; this is the radix-two (decimation-in-time) step of the fast Fourier transform, and it holds for every input class list, with no hypothesis beyond $N=2M$.

## Facts & Assumptions

**Given:** Natural numbers $M\ge1$ and $N=2M$, a function $f\in\mathbb C^{\mathbb Z/N}$, and integers $k,r,r'$; the classes are those of [[def-integers-modulo-n]].

[F1] $X_k(u)=\sum_{x=0}^{L-1}u([x]_L)e^{-2\pi ikx/L}$ for a function $u$ on $\mathbb Z/L\mathbb Z$, and $X_k(u)$ depends on $k$ only modulo $L$ ([[def-unnormalised-engineering-dft-and-conversion]]).

[F2] $[u]_n=[v]_n$ exactly when $n\mid(u-v)$ ([[def-integers-modulo-n]], [[def-divides-in-z]]); if $r-r'=Mt$ then $2r-2r'=Nt$ and $2r+1-(2r'+1)=Nt$, and conversely $2M\mid 2s$ forces $M\mid s$ by cancellation in $\mathbb Z$ ([[lem-int-cancellation]]). The divisors of $1$ in $\mathbb Z$ are exactly $1$ and $-1$, and $0<1<2$, $-1<0$ in the ordered ring $\mathbb Z$ ([[lem-units-of-z]], [[thm-int-ordered-ring]]).

[F3] Division with remainder: for every integer $x$ and the positive divisor $2$ there are unique integers $q,r$ with $x=2q+r$ and $0\le r<2$, hence $r\in\{0,1\}$ ([[thm-division-algorithm-in-z]]); and the classes $[0]_L,\dots,[L-1]_L$ enumerate $\mathbb Z/L\mathbb Z$ without repetition ([[thm-standard-representatives-modulo-n]]).

[F4] Finite sums over $\mathbb Z/L\mathbb Z$: computed from any enumeration, invariant under reindexing along a bijection, and additive over disjoint splittings ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[L1] $\exp(u+v)=\exp u\,\exp v$, $\exp w=1$ exactly when $w\in2\pi i\mathbb Z$, and $e^{-\pi i}=-1$, so $e^{-2\pi i(k+M)/N}=e^{-2\pi ik/N}e^{-\pi i}=-e^{-2\pi ik/N}$ because $2\pi iM/N=\pi i$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-complex-exponential]]).

[L2] Since $N=2M$ with $M>0$, division in the embedded real field gives $2r/N=r/M$ and $(2r+1)/N=r/M+1/N$. The frequency $k+M$ differs from $k$ by the period $M$ of each shorter transform in [F1].

## Proof

**Proof technique:** direct.

1.1 The index maps are well defined with the stated images. If $r\equiv r'\pmod M$, then $r-r'=Mt$ and [F2] gives $2r\equiv2r'\pmod N$ and $2r+1\equiv2r'+1\pmod N$, so $e$ and $o$ are well-defined functions on $\mathbb Z/M\mathbb Z$. If $2r\equiv2r'\pmod N$, then $N\mid2(r-r')$, that is $2M\mid2(r-r')$, so $M\mid(r-r')$ by cancellation [F2], hence $r=r'$ in $\mathbb Z/M\mathbb Z$: the doubling map is injective, and likewise $r\mapsto2r+1$. If $2r\equiv2r'+1\pmod N$ then $N\mid(2r-2r'-1)$, say $2(r-r')-1=2Mt$, so $1=2(r-r'-Mt)$ and $2\mid1$; by [F2] this forces $2\in\{1,-1\}$, contradicting $0<1<2$ and $-1<0$. Hence the two images are disjoint. Finally, every class of $\mathbb Z/N\mathbb Z$ is $[x]_N$ for a unique $0\le x<N=2M$ [F3]; writing $x=2q+r$ with $r\in\{0,1\}$ [F3] gives $x=2q$ or $x=2q+1$, and $x<2M$ forces $q<M$ (if $q\ge M$ then $x\ge2q\ge2M$), so the class is in one of the two images; the images therefore exhaust $\mathbb Z/N\mathbb Z$. [F2, F3, L2]

1.2 Splitting the defining sum: with $x$ running over $0,\dots,2M-1$, the list is the disjoint union of the even numbers $2r$ and the odd numbers $2r+1$, $0\le r<M$; hence by the splitting and reindexing rules [F4] $X_k(f)=\sum_{x=0}^{2M-1}f([x]_N)e^{-2\pi ikx/N}=\sum_{r=0}^{M-1}f([2r]_N)e^{-2\pi ik(2r)/N}+\sum_{r=0}^{M-1}f([2r+1]_N)e^{-2\pi ik(2r+1)/N}$. [F1, F4]

1.3 Evaluating the two pieces: by $2r/N=r/M$ and the addition law [L1], $\sum_{r=0}^{M-1}f([2r]_N)e^{-2\pi ik(2r)/N}=\sum_{r=0}^{M-1}e([r]_M)e^{-2\pi ikr/M}=X_k(e)$; and $\sum_{r=0}^{M-1}f([2r+1]_N)e^{-2\pi ik(2r+1)/N}=e^{-2\pi ik/N}\sum_{r=0}^{M-1}o([r]_M)e^{-2\pi ikr/M}=e^{-2\pi ik/N}X_k(o)$, where the exponents combine by [L1] using $(2r+1)/N=r/M+1/N$. [F1, L1, L2]

2.1 Adding the two evaluations of step 1.3 gives $X_k(f)=X_k(e)+e^{-2\pi ik/N}X_k(o)$ for every $k\in\mathbb Z$, which is the first displayed identity. [step 1.2, step 1.3]

3.1 For the second identity, replace $k$ by $k+M$ in step 2.1: $X_{k+M}(e)=X_k(e)$ and $X_{k+M}(o)=X_k(o)$ because the transforms of the $M$-point functions depend on $k$ only modulo $M$ [F1], while $e^{-2\pi i(k+M)/N}=-e^{-2\pi ik/N}$ by [L1]; hence $X_{k+M}(f)=X_k(e)-e^{-2\pi ik/N}X_k(o)$. [F1, L1, step 2.1] ∎

## Remarks

- **This is the declared decimation-in-time form; Taylor's Proposition 12.1 and the MIT lecture's heading 4 are its mirror.** Taylor splits the input into the halves $f(\omega^j)\pm f(\omega^{j+n/2})$ and reads off the output parities, and the MIT lecture's heading 4 likewise splits the coefficient list into its two halves and combines them with a twiddle; both are the decimation-in-frequency description of the same pair of identities, the transposed statement of the even/odd-coefficient form proved here. No second independent result is being recorded.

- **Sign caveat in Taylor.** Formula (12.1) uses $\omega^{-j\ell}$, but (12.9) prints $\omega^j$ in the odd-frequency branch. With $\omega=e^{2\pi i/N}$, the negative-sign odd-frequency sum instead factors as $\sum_j\omega^{-j}(f(\omega^j)-f(\omega^{j+N/2}))(\omega^2)^{-jk}$. Thus that branch needs $\omega^{-j}$, consistent with Taylor's four-point factor $-i$ in (12.6). The local proof above derives its signs directly rather than importing the inconsistent printed general twiddle.

- **The twiddle factor is the price of the odd subproblem.** The even half reuses the $M$-point transform unchanged; the odd half carries the factor $e^{-2\pi ik/N}$, and at $k+M$ that factor changes sign, which is exactly what produces the second displayed identity. Both identities are used in the recursion definition later on this page.
