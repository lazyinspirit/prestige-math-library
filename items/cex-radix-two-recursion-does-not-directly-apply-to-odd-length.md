---
id: cex-radix-two-recursion-does-not-directly-apply-to-odd-length
kind: counterexample
title: "The radix-two split fails for odd $N$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       def-addition-and-multiplication-modulo-n,
       def-integers-modulo-n,
       def-recursive-radix-two-fast-fourier-transform,
       lem-radix-two-even-odd-dft-factorisation,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential]
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
generation:
  role: counterexample
sources:
  references:
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: the reduction explicitly assumes $n=2s$"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12: the recursion is stated 'in case $n$ is a power of 2'"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**False claim:** for every integer $N\ge2$, the even/odd split of the classes of $\mathbb Z/N\mathbb Z$ into the images of $r\mapsto2r$ and $r\mapsto2r+1$ partitions the group into two disjoint sets of size $N/2$, so that the radix-two factorisation of [[lem-radix-two-even-odd-dft-factorisation]] reduces the $N$-point transform to two transforms of length $N/2$; equivalently, that reduction applies to every length $N\ge2$.

The claim fails for $N=3$: doubling permutes the three classes of $\mathbb Z/3\mathbb Z$, so the "even" classes are all of $\mathbb Z/3\mathbb Z$ and the "odd" classes are all of $\mathbb Z/3\mathbb Z$ as well; the two attempted index sets are not disjoint and have no length $M=N/2=3/2$ behind them. This says nothing against direct evaluation of the three-point transform, which is a finite sum like any other.

## Facts & Assumptions

**Given:** The classes of $\mathbb Z/3\mathbb Z$ and the maps $\delta,\varepsilon:\mathbb Z/3\mathbb Z\to\mathbb Z/3\mathbb Z$ defined by $\delta(r):=[2r]_3$ and $\varepsilon(r):=[2r+1]_3$; the false claim of the Statement refuted section; and the reduction hypothesis $N=2M$ of the radix-two step.

[F1] In $\mathbb Z/3\mathbb Z$ addition and multiplication are the operations of [[def-addition-and-multiplication-modulo-n]]: $[u]+[v]=[u+v]$ and $[u]\cdot[v]=[uv]$, and classes are equal exactly when the representatives are congruent modulo $3$ ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

[F2] The radix-two step of [[lem-radix-two-even-odd-dft-factorisation]] is stated for $M\ge1$ and $N=2M$: its even and odd parts have domain $\mathbb Z/M\mathbb Z$, and the second identity uses the twiddle factor $e^{-2\pi i(k+M)/N}=-e^{-2\pi ik/N}$ because $2\pi iM/N=\pi i$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F3] The recursion of [[def-recursive-radix-two-fast-fourier-transform]] is defined only for $N=2^{m}$, $m\in\mathbb N$, and each level halves the length.

[L1] In $\mathbb Z/3\mathbb Z$ the class $[2]$ satisfies $[2]\cdot[2]=[4]=[1]$, so multiplication by $[2]$ is its own inverse and hence a bijection of the three-element group. [F1]

[L2] The claim being refuted is the universal statement of the Statement refuted section, applied at $N=3$.

## Counterexample

**Proof technique:** direct.

1.1 The doubling map on $\mathbb Z/3\mathbb Z$: $\delta([0])=[2\cdot0]=[0]$, $\delta([1])=[2]$, $\delta([2])=[4]=[1]$, so $\delta$ is the transposition of the classes $[1]$ and $[2]$ fixing $[0]$; in particular $\delta$ is a bijection of $\mathbb Z/3\mathbb Z$ onto itself, with inverse $\delta$ itself, as multiplication by $[2]$ is involutive by [L1]. The image of $\delta$ is therefore all of $\mathbb Z/3\mathbb Z$, not a subset of size $3/2$. [F1, L1]

1.2 The second branch of the radix-two combine uses $e^{-2\pi i(k+M)/N}=-e^{-2\pi ik/N}$, where $M/N=1/2$; at $N=3$ the quantity $M=3/2$ is not an integer, so the factor $e^{-\pi i}=-1$ has no interpretation as a twiddle factor of an integer-length subproblem, and the recursion of [F3] has no level corresponding to length $3/2$. [F2, F3]

2.1 The translate $\varepsilon$: since $\varepsilon(r)=[2r+1]=\delta(r)+[1]$ and translation by $[1]$ is a bijection of $\mathbb Z/3\mathbb Z$, $\varepsilon$ is a bijection as well; explicitly $\varepsilon([0])=[1]$, $\varepsilon([1])=[0]$, $\varepsilon([2])=[2]$, so its image is again all of $\mathbb Z/3\mathbb Z$. [F1, step 1.1]

3.1 Thus the two attempted index sets are each the whole group: they intersect in every class and their union is $\mathbb Z/3\mathbb Z$, not the disjoint union of two $3/2$-element sets. No two-coset decomposition with parts of size $M=3/2$ exists, and no integer $M$ satisfies $2M=3$. [F1, step 1.1, step 2.1]

4.1 The false claim [L2] asserted a partition into two disjoint sets of size $N/2$ and a reduction to two length-$N/2$ transforms for every $N\ge2$. At $N=3$ both attempted index sets are all of $\mathbb Z/3\mathbb Z$ by steps 1.1, 2.1 and 3.1, and $N/2$ is not an integer by step 1.2; the claim therefore fails. This is a statement only about the algorithm's length hypothesis: direct evaluation of the three-point transform remains well defined and unaffected. [step 1.1, step 1.2, step 2.1, step 3.1, L2] ∎

## Remarks

- **Scope of the witness.** It shows that the radix-two reduction needs $N$ even: for odd $N$, the attempted even and odd images do not form a partition. Other algorithms for odd lengths are outside this counterexample.

- **Domains of doubling.** For $N=2M$, doubling from $\mathbb Z/M\mathbb Z$ into $\mathbb Z/N\mathbb Z$ is injective, as the factorisation lemma proves. For odd $N=2q+1$, $2(q+1)=N+1$, so $[q+1]_N$ is the multiplicative inverse of $[2]_N$. Thus doubling on $\mathbb Z/N\mathbb Z$ is a permutation of the whole group; it cannot give one half of a partition.
