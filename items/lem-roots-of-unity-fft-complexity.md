---
id: lem-roots-of-unity-fft-complexity
kind: lemma
title: Roots-of-unity orthogonality and radix-two FFT cost
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [alg-radix-two-fft]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Appendix C.2"
      url: "https://arxiv.org/pdf/2111.00396"
    - title: "Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials, §3.3"
      url: "https://arxiv.org/pdf/1506.02285"
---

## Statement

Let $M=2^q$ for an integer $q\ge0$, and let $\omega=e^{-2\pi i/M}$ (with $\omega=1$ when $M=1$). Define the forward DFT matrix $F\in\mathbb C^{M\times M}$ by $F_{kj}=\omega^{jk}$, where $^*$ denotes conjugate transpose. Then $F^*F=MI$, so the inverse DFT is $M^{-1}F^*$. The radix-two procedure defined on this page computes either transform exactly in $O(M\log(2+M))$ complex arithmetic operations and $O(M)$ space. Consequently, for every integer $n\ge1$, two polynomials of degree less than $n$ can be multiplied exactly in $O(n\log(2+n))$ complex arithmetic operations and $O(n)$ space by zero-padding to a radix-two transform length at least $2n-1$.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Appendix C.2](https://arxiv.org/pdf/2111.00396)

[Pan, “Fast Approximate Computations with Cauchy Matrices and Polynomials,” §3.3](https://arxiv.org/pdf/1506.02285)

[[alg-radix-two-fft]]

## Facts & Assumptions

**Given:** An integer $q\ge0$, $M=2^q$, and the root $\omega=e^{-2\pi i/M}$.

[A1] For $M>1$, $\omega^M=1$ and $\omega^{M/2}=-1$; for $M=1$, the DFT is the identity on one coordinate.

[F1] [[alg-radix-two-fft]]: for $M>1$, split the even and odd input subsequences, recursively compute their length-$M/2$ DFTs using $\omega^2$, and combine as $E_k+\omega^kO_k$ and $E_k-\omega^kO_k$ for $0\le k<M/2$.

## Proof

1.1 For $0\le j,\ell<M$, the $(j,\ell)$ entry of $F^*F$ is $\sum_{k=0}^{M-1}\omega^{(\ell-j)k}$. If $j=\ell$, this sum is $M$. Otherwise $\omega^{\ell-j}\ne1$ and the finite geometric-sum identity gives $\sum_{k=0}^{M-1}\omega^{(\ell-j)k}=(1-\omega^{M(\ell-j)})/(1-\omega^{\ell-j})=0$. Thus $F^*F=MI$, which gives the asserted inverse. [A1, algebra]

2.1 Splitting the DFT sum into even and odd indices gives $E_k+\omega^kO_k$ for $0\le k<M/2$. For frequency $k+M/2$, the even factor is unchanged because $\omega^{jM}=1$, while the odd factor changes sign because $\omega^{M/2}=-1$. Therefore the outputs in [F1] are exactly the defining DFT sums. Induction on $q$, starting with $M=1$, proves exactness of the recursion. [A1, F1, step 1.1, algebra]

3.1 At length $M>1$, forming both half-length transforms and combining their $M$ outputs costs at most $cM$ arithmetic operations for an absolute constant $c$. Hence $T(M)\le2T(M/2)+cM$ and $T(1)=O(1)$; expanding this recurrence for $q=\log_2M$ levels gives $T(M)=O(M\log(2+M))$. The input, output, and one level of butterflies require $O(M)$ workspace; the inverse has the same cost plus coordinatewise scaling by $1/M$. [F1, step 2.1, algebra]

4.1 Let $f,g$ have degree less than $n$, and choose $M'=2^{\lceil\log_2(2n-1)\rceil}$. Pad their coefficient lists to length $M'$, apply the forward DFT, multiply corresponding transformed coordinates, and apply the inverse DFT. For coefficient index $s$, the inverse-transform formula expands it as $\sum_{j,\ell} f_jg_\ell\,M'^{-1}\sum_{k=0}^{M'-1}\omega^{(j+\ell-s)k}$; step 1.1 makes the inner sum one exactly when $j+\ell\equiv s\pmod {M'}$ and zero otherwise. Thus the result is cyclic convolution modulo $z^{M'}-1$. The ordinary product has degree at most $2n-2<M'$, so no coefficient wraps around and the result is the exact polynomial product. Since $2n-1\le M'<2(2n-1)$ when $n>1$ (and $M'=1$ when $n=1$), step 3.1 gives $O(n\log(2+n))$ operations and $O(n)$ space. [A1, step 1.1, step 3.1, algebra] ∎

## Remarks

The proofs use only finite sums and arithmetic in $\mathbb C$; no choice principle is needed.
