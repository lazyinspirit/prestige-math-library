---
id: thm-na-arbitrary-length-fft-correctness-and-cost
kind: theorem
title: "Mixed-radix and Bluestein reductions compute every finite DFT in O(N log N) arithmetic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 15
deps: [alg-na-computed-fast-transforms-and-convolution, alg-na-computed-fft-cyclic-and-linear-convolution, lem-na-mixed-radix-cooley-tukey-factorization, lem-na-bluestein-chirp-convolution-factorization, lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product, thm-finite-fourier-inversion, def-cyclic-convolution-on-z-mod-n, thm-radix-two-fft-correctness, thm-radix-two-fft-arithmetic-complexity, def-unitary-discrete-fourier-transform-on-z-mod-n, def-unnormalised-engineering-dft-and-conversion, def-rational-power, lem-rational-power-laws]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 5 §5.2, Chapter 9 §9.2, and Chapter 11 §11.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, §24.1"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
---

## Statement

For this theorem, define the **formal exact-constant model** by taking the branch schedule of [[alg-na-computed-fast-transforms-and-convolution]], replacing every certified-phase output (including nested calls) by its exact target $e^{\pi iq}$, and interpreting every arithmetic instruction exactly. This is an idealized algebraic cost model, not an exactness claim about the computed routine, whose phase values are enclosures. For every integer $N\ge1$ and $x\in\mathbb C^N$, the formal model returns the unnormalised DFT $X_k=\sum_{j=0}^{N-1}x_je^{-2\pi ijk/N}$. Count complex additions, multiplications, and scalar operations at each butterfly, but exclude integer factor search, exact phase generation, interval evaluation, storage, and bit complexity. If $M$ is the least power of two at least $2N-1$ in a Bluestein prime branch, that branch costs $O(M\log M)$; for $N\ge2$, the full arbitrary-length recursion costs $O(N\log N)$, while $N=1$ takes constant work.

## Facts & Assumptions

**Given:** $N\ge1$, $x\in\mathbb C^N$, and the formal exact-constant model defined in the Statement, with exact arithmetic instructions.

[F1] The formal exact-constant model follows the branch schedule, unnormalised output convention, and exact phase targets of the algorithm; powers of two use the unitary radix-two transform scaled by $\sqrt N$, composites use the fixed mixed-radix schedule, and primes use a length-$M$ chirp convolution ([[alg-na-computed-fast-transforms-and-convolution]], [[def-unnormalised-engineering-dft-and-conversion]]).

[F2] The exact mixed-radix branch equals the DFT by [[lem-na-mixed-radix-cooley-tukey-factorization]], and the exact prime-length branch equals it by [[lem-na-bluestein-chirp-convolution-factorization]].

[F3] The radix-two arithmetic count is at most $2n\log_2n$ for power-of-two length $n$, with twiddle generation excluded ([[thm-radix-two-fft-arithmetic-complexity]]).

[F4] In exact arithmetic, the cyclic convolution algorithm takes two unitary DFTs, pointwise multiplication, the inverse unitary DFT, and the $\sqrt M$ scale; the published DFT convolution identity and inversion theorem identify this with $a*_Mb$ ([[alg-na-computed-fft-cyclic-and-linear-convolution]], [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]], [[thm-finite-fourier-inversion]], [[def-cyclic-convolution-on-z-mod-n]]).

[F5] For $N=2^m$, the exact radix-two recursion computes $X_N=\sqrt N\,\mathcal F_Nx$ ([[thm-radix-two-fft-correctness]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]], [[def-unnormalised-engineering-dft-and-conversion]]).

[F6] For every positive $N$, $X_N=\sqrt N\,\mathcal F_Nx$ by the two transform normalizations; $\sqrt{rs}=\sqrt r\sqrt s$ for positive integers ([[def-unitary-discrete-fourier-transform-on-z-mod-n]], [[def-unnormalised-engineering-dft-and-conversion]], [[def-rational-power]], [[lem-rational-power-laws]]).

## Proof

1.1 We prove correctness by strong induction on $N$. At $N=1$, step 1 of the formal model returns $x_0$, the one-term unnormalised DFT. If $N$ is a power of two, its radix-two branch calls the exact unitary transform and scales by $\sqrt N$; [F5] identifies that result with the unnormalised DFT. [given, F1, F5, algebra, base]

1.2 For the induction step, assume the formal model returns the unnormalised DFT for every positive length smaller than $N$. [ih]

1.3 For a power-of-two size $M\ge2$, [F3] gives $O(M\log M)$; the output normalization uses one square root and $O(M)$ component scalings, which preserve this order. In a Bluestein branch, the least power of two $M\ge2N-1$ satisfies $M<4N$, and three radix-two transforms plus $O(M)$ pointwise products/scalings cost $O(M\log M)$. Hence a prime leaf of size $p$ costs $O(p\log p)$. [F1, F3, algebra]

2.1 If $N$ is composite and not a power of two, the least-divisor branch splits $N=rs$ with $r,s<N$. The hypothesis in step 1.2 makes the recursive unnormalised length-$s$ and length-$r$ transforms exact. By [F6], the length-$s$ output on each strided vector is $\sqrt{s}\,\mathcal F_s x^{(u)}$, and a length-$r$ unnormalised transform is $\sqrt r$ times the unitary length-$r$ DFT. The fixed strided inputs, exact phase factors, and output indexing are those in [F2], so the algorithm combines the recursive outputs as $X_{k_2+sk_1}=\sum_{u=0}^{r-1}U_u(k_2)e^{-2\pi iuk_2/N}e^{-2\pi iuk_1/r}$. This is the unnormalised mixed-radix formula; hence every output is exact. [given, step 1.2, F1, F2, F6, induction, algebra]

2.2 If $N$ is prime, [F2] gives $\mathcal F_Nx=N^{-1/2}\gamma\odot c$ for the exact cyclic convolution $c$ in the Bluestein branch. The formal model computes $c$ exactly by [F4]. Multiplying the unitary output identity by $\sqrt N$ gives $X_N=\gamma\odot c$, which is exactly the unnormalised output of the branch. The base, power-of-two, composite and prime cases exhaust all positive $N$. [given, F1, F2, F4, F6, step 1.1, algebra]

3.1 At a composite factor node $N=rs$, the algorithm's schedule invokes $r$ transforms of size $s$, $s$ transforms of size $r$, and at most $CN$ further arithmetic operations for a fixed $C$. Thus $T(N)\le rT(s)+sT(r)+CN$, so $S(N)=T(N)/N$ satisfies $S(N)\le S(r)+S(s)+C$. The recursion tree is finite because each child is smaller; multiplying the factor labels at each split shows its prime leaves have product $N$. If there are $L$ leaves, then $2^L\le N$, so $L\le\log_2N$. A full binary tree with $L$ leaves has $L-1$ internal nodes: at a root split with subtrees having $L_1,L_2$ leaves, induction gives $1+(L_1-1)+(L_2-1)=L_1+L_2-1$. Also the sum of the leaf logarithms is $\log_2N$. By step 1.3, each prime leaf $p$ contributes $O(\log p)$ to $S$, while each internal node adds only $C$; summing over the tree gives $S(N)=O(\log N)$ and hence $T(N)=O(N\log N)$. [given, F1, step 1.3, algebra, induction, discharge-induction: step 1.2] ∎
