---
id: def-recursive-radix-two-fast-fourier-transform
kind: definition
title: "The recursive radix-two fast Fourier transform"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
justified_by: []
aliases: []
deps: [def-complex-exponential,
       def-function-space,
       def-integers-modulo-n,
       def-natural-numbers,
       def-rational-power,
       def-unnormalised-engineering-dft-and-conversion,
       lem-power-laws,
       lem-radix-two-even-odd-dft-factorisation,
       lem-rational-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-induction-principle,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-recursion]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: iterate the even/odd reduction until degree 0, evaluating the two $s$-point transforms in parallel"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, (12.8)-(12.23): the inductive procedure and its iterative implementation, with the base case $G_0=\\{1\\}$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $m\in\mathbb N$ and $N=2^{m}$. The **radix-two fast Fourier transform** $\operatorname{FFT}_m:\mathbb C^{\mathbb Z/N}\to\mathbb C^{\mathbb Z/N}$ is defined by recursion on $m$ as follows. At $m=0$ the group is $\mathbb Z/1\mathbb Z$ and $\operatorname{FFT}_0:=\mathrm{id}_{\mathbb C^{\mathbb Z/1}}$. For $m\ge1$, given $f\in\mathbb C^{\mathbb Z/2^{m}}$ with even and odd parts $e,o\in\mathbb C^{\mathbb Z/2^{m-1}}$ ([[lem-radix-two-even-odd-dft-factorisation]]), and given $E:=\operatorname{FFT}_{m-1}(e)$ and $O:=\operatorname{FFT}_{m-1}(o)$, extend $E$ and $O$ from $\mathbb Z/2^{m-1}\mathbb Z$ to $\mathbb Z$ by $2^{m-1}$-periodicity and set

$$\operatorname{FFT}_m(f)(k):=E(k)+e^{-2\pi ik/2^{m}}O(k),\qquad k\in\mathbb Z.$$

Then $\operatorname{FFT}_m(f)(k+2^{m})=\operatorname{FFT}_m(f)(k)$ for every $k\in\mathbb Z$, because $E$ and $O$ are $2^{m-1}$-periodic and $e^{-2\pi i(k+2^{m})/2^{m}}=e^{-2\pi ik/2^{m}}e^{-2\pi i}=e^{-2\pi ik/2^{m}}$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]); hence $\operatorname{FFT}_m(f)$ factors through $\mathbb Z\to\mathbb Z/2^{m}\mathbb Z$ and $\operatorname{FFT}_m$ is a well-defined map $\mathbb C^{\mathbb Z/2^{m}}\to\mathbb C^{\mathbb Z/2^{m}}$.

**The recursion is legitimate.** Put $\mathcal F_m:=\mathbb C^{\mathbb Z/2^m}$ for each $m\in\mathbb N$, and use the tagged state set $A:=\{(m,g):m\in\mathbb N,\ g:\mathcal F_m\to\mathcal F_m\}$. For a state $(m,g)\in A$ and $f\in\mathcal F_{m+1}$, let $e,o\in\mathcal F_m$ be the even and odd parts supplied by [[lem-radix-two-even-odd-dft-factorisation]], and define $g^+(f)\in\mathcal F_{m+1}$ by $g^+(f)([k]_{2^{m+1}}):=g(e)([k]_{2^m})+e^{-2\pi ik/2^{m+1}}g(o)([k]_{2^m})$ for $k\in\mathbb Z$. This is well defined on $[k]_{2^{m+1}}$: replacing $k$ by $k+2^{m+1}$ leaves the recursive values unchanged modulo $2^m$ and multiplies the twiddle by $e^{-2\pi i}=1$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]). Thus $g^+$ is a total map $\mathcal F_{m+1}\to\mathcal F_{m+1}$, and $T:A\to A$ defined by $T(m,g):=(m+1,g^+)$ is a total step function. Starting from $a:=(0,\mathrm{id}_{\mathcal F_0})$, the recursion theorem [[thm-recursion]] gives a unique $H:\mathbb N\to A$ with $H(0)=a$ and $H(m+1)=T(H(m))$. By induction ([[thm-induction-principle]], [[def-natural-numbers]]) the first coordinate of $H(m)$ is $m$; writing $H(m)=(m,\operatorname{FFT}_m)$ gives $\operatorname{FFT}_m:\mathcal F_m\to\mathcal F_m$ and exactly the base and combine clauses above. Termination is immediate from recursion on $m$: each recursive call uses level $m-1$, and the base case $m=0$ returns the input. The exponent arithmetic uses $2^{m+1}=2\cdot2^m$ and, for the rescaling below, $2^{-m/2}=(2^m)^{-1/2}$ ([[lem-power-laws]], [[def-rational-power]], [[lem-rational-power-laws]]).

**What the algorithm computes.** Correctness is proved separately later on this page: $\operatorname{FFT}_m(f)(k)=X_k(f)$ for every input, where $X$ is the unnormalised transform of [[def-unnormalised-engineering-dft-and-conversion]]; the unitary transform of this page is recovered from the output by the single rescaling $2^{-m/2}$ at length $N=2^{m}$. The operation count is likewise the subject of a later item. At level $m$ the recursion forms the even and odd parts of a length-$2^{m}$ list and performs one combine per output value, reading $E$ and $O$ at their classes and multiplying by the twiddle factors $e^{-2\pi ik/2^{m}}$.

## Remarks

- **The base case is a genuine case, not a convention.** $\mathbb N$ contains $0$ ([[def-natural-numbers]]), so $\operatorname{FFT}_0$ is defined by the same recursion that defines all the other levels, and the length-one transform is the identity. Nothing in the definition excludes $N=1$, and the recursion is total on $\mathbb N$.

- **The two conventions, once more.** The recursion outputs the unnormalised transform: the definition of $\operatorname{FFT}_m$ contains no factor $N^{-1/2}$, and the combine uses the twiddle factors $e^{-2\pi ik/2^{m}}$ with the same sign as $X$ of [[def-unnormalised-engineering-dft-and-conversion]]. Dividing the output by $2^{m/2}$ yields the unitary transform, and no other rescaling is needed.
