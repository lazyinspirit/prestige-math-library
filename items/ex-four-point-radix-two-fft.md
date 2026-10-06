---
id: ex-four-point-radix-two-fft
kind: example
title: "The four-point radix-two FFT executed in full"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       def-complex-exponential,
       def-integers-modulo-n,
       def-logarithm-to-a-base,
       def-natural-logarithm,
       def-recursive-radix-two-fast-fourier-transform,
       def-unnormalised-engineering-dft-and-conversion,
       lem-radix-two-even-odd-dft-factorisation,
       thm-integers-modulo-n-basic-algebra,
       thm-complex-numbers-form-a-field,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-radix-two-fft-arithmetic-complexity,
       thm-radix-two-fft-correctness]
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
generation:
  role: example
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, (12.2)-(12.7): the explicit four-point identities, in the mirror decimation-in-frequency form"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: the worked four-coefficient reduction"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

For $N=4=2^{2}$ and $f=(f_0,f_1,f_2,f_3)\in\mathbb C^{\mathbb Z/4}$, the recursion of [[def-recursive-radix-two-fast-fourier-transform]] takes the even part $e=(f_0,f_2)$ and the odd part $o=(f_1,f_3)$. The two length-two unnormalised transforms are $E=(f_0+f_2,\ f_0-f_2)$ and $O=(f_1+f_3,\ f_1-f_3)$, extended $2$-periodically, and the combine with twiddle factors $e^{-2\pi ik/4}=(-i)^{k}$ gives

$$X_0=f_0+f_1+f_2+f_3,\qquad X_2=f_0-f_1+f_2-f_3,$$

$$X_1=f_0-if_1-f_2+if_3,\qquad X_3=f_0+if_1-f_2-if_3.$$

These agree with direct evaluation of $X_k=\sum_{x=0}^{3}f_xe^{-2\pi ikx/4}$, as [[thm-radix-two-fft-correctness]] requires, and the operation count for this length is $16=2\cdot2\cdot4$ complex additions and multiplications in the model of [[thm-radix-two-fft-arithmetic-complexity]], which is the bound $2N\log_2N$ of that theorem at $N=4$ (here $\log_24=2$ because $4=2^{2}$).

## Facts & Assumptions

**Given:** The function $f\in\mathbb C^{\mathbb Z/4}$ with values $f_0=f([0]),f_1=f([1]),f_2=f([2]),f_3=f([3])$, its even part $e=(f_0,f_2)\in\mathbb C^{\mathbb Z/2}$ and odd part $o=(f_1,f_3)\in\mathbb C^{\mathbb Z/2}$, and the length-two transforms $E=\operatorname{FFT}_1(e)$, $O=\operatorname{FFT}_1(o)$ extended $2$-periodically.

[F1] The recursion of [[def-recursive-radix-two-fast-fourier-transform]]: $\operatorname{FFT}_0=\mathrm{id}$ and, for $m\ge1$, $\operatorname{FFT}_m(f)(k)=E(k)+e^{-2\pi ik/2^{m}}O(k)$ with $E,O$ the recursively computed length-$2^{m-1}$ transforms of the even and odd parts; the even and odd parts of a length-$4$ function are $e=(f_0,f_2)$ and $o=(f_1,f_3)$ ([[lem-radix-two-even-odd-dft-factorisation]]).

[F2] The unnormalised length-$L$ transform is $X_k(u)=\sum_{x=0}^{L-1}u([x]_L)e^{-2\pi ikx/L}$, and at length $2$ it is $X_k(u)=u([0])+u([1])e^{-\pi ik}=u([0])+(-1)^{k}u([1])$; correctness of the recursion is [[thm-radix-two-fft-correctness]] and the operation bound is [[thm-radix-two-fft-arithmetic-complexity]] ([[def-unnormalised-engineering-dft-and-conversion]]).

[L1] Exponential values: $e^{0}=1$, $e^{-\pi i/2}=-i$, $e^{-\pi i}=-1$, $e^{-3\pi i/2}=i$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-complex-exponential]]); hence the twiddles $e^{-2\pi ik/4}$ for $k=0,1,2,3$ are $1,-i,-1,i$.

[L2] Field arithmetic in $\mathbb C$ ([[thm-complex-numbers-form-a-field]]); $\log_24=2$ because $4=2^{2}$ and $\log_2x=\log x/\log2$ with $\log(\exp y)=y$ ([[def-logarithm-to-a-base]], [[def-natural-logarithm]]).

## Verification

**Proof technique:** direct.

1.1 The length-two transforms: by [F2] with $L=2$ and [L1], $E(0)=f_0+f_2$, $E(1)=f_0-f_2$, $O(0)=f_1+f_3$, $O(1)=f_1-f_3$, extended $2$-periodically (so $E(2)=E(0)$, $E(3)=E(1)$, and likewise for $O$). [F1, F2, L1]

2.1 The combine at even $k$: $\operatorname{FFT}_2(f)(0)=E(0)+1\cdot O(0)=f_0+f_1+f_2+f_3$ and $\operatorname{FFT}_2(f)(2)=E(2)-O(2)=f_0+f_2-f_1-f_3$, using $e^{0}=1$ and $e^{-\pi i}=-1$ from [L1]. At odd $k$: $\operatorname{FFT}_2(f)(1)=E(1)+(-i)O(1)=f_0-if_1-f_2+if_3$ and $\operatorname{FFT}_2(f)(3)=E(3)+iO(3)=f_0+if_1-f_2-if_3$, using $e^{-\pi i/2}=-i$ and $e^{-3\pi i/2}=i$ from [L1]. These are the four displayed values. [F1, L1, L2, step 1.1]

3.1 Direct evaluation: $X_k=\sum_{x=0}^{3}f_xe^{-2\pi ikx/4}$ gives, by [L1] and [L2], $X_0=f_0+f_1+f_2+f_3$, $X_1=f_0-if_1-f_2+if_3$, $X_2=f_0-f_1+f_2-f_3$, $X_3=f_0+if_1-f_2-if_3$; these agree with step 2.1, as [[thm-radix-two-fft-correctness]] requires. [F2, L1, L2, step 2.1]

4.1 Operation count: in the model of [[thm-radix-two-fft-arithmetic-complexity]], $T_0=0$, $T_1=2\cdot2=4$ and $T_2=2T_1+2\cdot2^{2}=8+8=16$; the bound of that theorem is $T_2\le2m2^{m}=2\cdot2\cdot4=16$, and it is attained here, so the four-point recursion performs 16 complex multiplications and additions, which is $2N\log_2N$ at $N=4$ by [L2]. All four values of the transform and the count are therefore verified; the merge exercises the base case $m=0$ implicitly through the two length-two transforms. [L2, F2, step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Which level does what.** The two length-two transforms are the calls at level $m=1$; each of them in turn calls the length-one identity at level $0$, so the example exercises both the base case and both branches of the combine. The mirror decimation-in-frequency form of Taylor's (12.2)-(12.7) computes the same four values by splitting the input into halves rather than into even and odd coefficients.

- **No numerical claim.** The computation is exact over $\mathbb C$ and says nothing about floating-point accuracy, the cost of evaluating the twiddle factors, or the cost of the index bookkeeping; those are outside the operation model of the complexity theorem.
