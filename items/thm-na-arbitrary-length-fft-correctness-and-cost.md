---
id: thm-na-arbitrary-length-fft-correctness-and-cost
kind: theorem
title: "Mixed-radix and Bluestein reductions compute every finite DFT in O(N log N) arithmetic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 15
deps: [alg-na-computed-fast-transforms-and-convolution, alg-na-computed-fft-cyclic-and-linear-convolution, lem-na-mixed-radix-cooley-tukey-factorization, lem-na-bluestein-chirp-convolution-factorization, lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product, thm-finite-fourier-inversion, def-cyclic-convolution-on-z-mod-n, thm-radix-two-fft-correctness, thm-radix-two-fft-arithmetic-complexity, def-unitary-discrete-fourier-transform-on-z-mod-n, def-unnormalised-engineering-dft-and-conversion, def-rational-power, lem-rational-power-laws, def-natural-logarithm, def-logarithm-to-a-base, thm-natural-logarithm-laws, thm-induction-principle, thm-well-ordering-principle]
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

For this theorem, define the **formal exact-constant model** as the complete finite branch schedule of [[alg-na-computed-fast-transforms-and-convolution]], with its radix-two subdivision cap sufficient to finish every call, every certified-phase output (including nested calls) replaced by its exact target $e^{\pi iq}$, and every arithmetic instruction interpreted exactly. Phase-evaluation and arithmetic-failure statuses are suppressed in this idealized model; it is not an exactness claim about the computed routine, whose phase values are enclosures. For every integer $N\ge1$ and $x\in\mathbb C^N$, the formal model returns the unnormalised DFT $X_k=\sum_{j=0}^{N-1}x_je^{-2\pi ijk/N}$. Count complex additions, multiplications, and scalar operations at each butterfly, but exclude integer factor search, exact phase generation, interval evaluation, storage, and bit complexity. If $M$ is the least power of two at least $2N-1$ in a Bluestein prime branch, that branch costs $O(M\log M)$; for $N\ge2$, the full arbitrary-length recursion costs $O(N\log N)$, while $N=1$ takes constant work.

## Facts & Assumptions

**Given:** $N\ge1$, $x\in\mathbb C^N$, and the formal exact-constant model defined in the Statement, with exact arithmetic instructions.

[F1] The formal exact-constant model follows the branch schedule, unnormalised output convention, and exact phase targets of the algorithm; powers of two use the unitary radix-two transform scaled by $\sqrt N$, composites use the fixed mixed-radix schedule, and primes use a length-$M$ chirp convolution ([[alg-na-computed-fast-transforms-and-convolution]], [[def-unnormalised-engineering-dft-and-conversion]]).

[F2] The exact mixed-radix branch equals the DFT by [[lem-na-mixed-radix-cooley-tukey-factorization]], and the exact prime-length branch equals it by [[lem-na-bluestein-chirp-convolution-factorization]].

[F3] The radix-two arithmetic count is at most $2n\log_2n$ for power-of-two length $n$, with twiddle generation excluded ([[thm-radix-two-fft-arithmetic-complexity]]).

[F4] In exact arithmetic, the cyclic convolution algorithm takes two unitary DFTs, pointwise multiplication, the inverse unitary DFT, and the $\sqrt M$ scale; the published DFT convolution identity and inversion theorem identify this with $a*_Mb$ ([[alg-na-computed-fft-cyclic-and-linear-convolution]], [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]], [[thm-finite-fourier-inversion]], [[def-cyclic-convolution-on-z-mod-n]]).

[F5] For $N=2^m$, the exact radix-two recursion computes $X_N=\sqrt N\,\mathcal F_Nx$ ([[thm-radix-two-fft-correctness]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]], [[def-unnormalised-engineering-dft-and-conversion]]).

[F6] For every positive $N$, $X_N=\sqrt N\,\mathcal F_Nx$ by the two transform normalizations; $\sqrt{rs}=\sqrt r\sqrt s$ for positive integers ([[def-unitary-discrete-fourier-transform-on-z-mod-n]], [[def-unnormalised-engineering-dft-and-conversion]], [[def-rational-power]], [[lem-rational-power-laws]]).

[F7] The natural logarithm is strictly increasing, satisfies $\log(xy)=\log x+\log y$ for positive $x,y$, and $\log_2 x=\log x/\log2$; since $2>1$, strict increase and $\log1=0$ give $\log2>0$, so $\log_2$ is strictly increasing. Repeated application of the product law gives $\log_2(2^L)=L$ and $\log_2(\prod_i n_i)=\sum_i\log_2n_i$ for each finite list of positive integers ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-logarithm-to-a-base]], [[thm-induction-principle]]).

[F8] Strong induction on positive integer lengths follows by choosing the least counterexample using the well-ordering principle; ordinary induction on a finite binary-tree height is the induction principle ([[thm-well-ordering-principle]], [[thm-induction-principle]]).

## Proof

1.1 We prove correctness by strong induction on $N$, justified by [F8]. At $N=1$, step 1 of the formal model returns $x_0$, the one-term unnormalised DFT. If $N$ is a power of two, its radix-two branch calls the exact unitary transform and scales by $\sqrt N$; [F5] identifies that result with the unnormalised DFT. [given, F1, F5, F8, algebra, base]

1.2 For the induction step, assume the formal model returns the unnormalised DFT for every positive length smaller than $N$. [ih]

1.3 For a power-of-two size $M\ge2$, [F3] gives $O(M\log_2M)$; the output normalization uses one square root and $O(M)$ component scalings, which preserve this order. In a Bluestein branch, the least power of two $M\ge2N-1$ satisfies $M<4N$, and three radix-two transforms plus $O(M)$ pointwise products/scalings cost $O(M\log_2M)$. Since $\log_2M\le\log_2(4N)=2+\log_2N\le3\log_2N$ for $N\ge2$, this is $O(N\log_2N)$ for a prime input $N$. [F1, F3, F7, algebra]

2.1 If $N$ is composite and not a power of two, the least-divisor branch splits $N=rs$ with $r,s<N$. The hypothesis in step 1.2 makes the recursive unnormalised length-$s$ and length-$r$ transforms exact. By [F6], the length-$s$ output on each strided vector is $\sqrt{s}\,\mathcal F_s x^{(u)}$, and a length-$r$ unnormalised transform is $\sqrt r$ times the unitary length-$r$ DFT. The fixed strided inputs, exact phase factors, and output indexing are those in [F2], so the algorithm combines the recursive outputs as $X_{k_2+sk_1}=\sum_{u=0}^{r-1}U_u(k_2)e^{-2\pi iuk_2/N}e^{-2\pi iuk_1/r}$. This is the unnormalised mixed-radix formula; hence every output is exact. [given, step 1.2, F1, F2, F6, induction, algebra]

2.2 If $N$ is prime, [F2] gives $\mathcal F_Nx=N^{-1/2}\gamma\odot c$ for the exact cyclic convolution $c$ in the Bluestein branch. The formal model computes $c$ exactly by [F4]. Multiplying the unitary output identity by $\sqrt N$ gives $X_N=\gamma\odot c$, which is exactly the unnormalised output of the branch. The base, power-of-two, composite and prime cases exhaust all positive $N$. [given, F1, F2, F4, F6, step 1.1, algebra]

3.1 At a composite non-power-of-two node $N=rs$, the algorithm's actual call schedule invokes $r$ transforms of size $s$ and $s$ transforms of size $r$, plus at most $CN$ arithmetic operations for a fixed $C$. Thus $T(N)\le rT(s)+sT(r)+CN$, so the normalized count $S(N):=T(N)/N$ satisfies $S(N)\le S(r)+S(s)+C$. For the bound, build a separate binary comparison tree by expanding this normalized recurrence at each composite non-power-of-two size; stop at prime or power-of-two sizes. This tree is finite because every child size is smaller than its parent, and its terminal sizes $n_1,\ldots,n_L$ multiply to $N$ because each split replaces $n$ by factors $r,s$ with $n=rs$. Every terminal size is at least $2$, so $2^L\le N$ and [F7] gives $L\le\log_2N$. A full binary tree with $L$ leaves has $L-1$ internal nodes: a leaf has zero internal nodes, while a root with subtrees having $L_1,L_2$ leaves has $1+(L_1-1)+(L_2-1)=L_1+L_2-1$ internal nodes, by induction on height [F8]. The product law in [F7] gives $\sum_{i=1}^L\log_2 n_i=\log_2N$. By steps 1.1 and 1.3, each terminal size $n_i$, whether prime or a power of two, contributes $O(\log_2 n_i)$ to $S$, with one uniform constant. Summing the terminal contributions and the at most $C$ contribution at each internal node yields $S(N)=O(\log_2N)$ and hence $T(N)=O(N\log_2N)$. The comparison tree bounds the normalized recurrence; it is not the algorithm's actual call tree. [given, F1, F7, F8, step 1.1, step 1.3, algebra, induction, discharge-induction: step 1.2] ∎
