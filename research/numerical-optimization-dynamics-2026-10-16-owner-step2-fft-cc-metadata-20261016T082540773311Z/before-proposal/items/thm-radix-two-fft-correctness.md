---
id: thm-radix-two-fft-correctness
kind: theorem
title: "Correctness of the recursive radix-two FFT"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
deps: [def-integers-modulo-n,
       def-natural-numbers,
       def-rational-power,
       def-recursive-radix-two-fast-fourier-transform,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       def-unnormalised-engineering-dft-and-conversion,
       lem-power-laws,
       lem-radix-two-even-odd-dft-factorisation,
       lem-rational-power-laws,
       thm-induction-principle,
       thm-integers-modulo-n-basic-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  references:
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 4: the Cooley-Tukey reduction is exact at every level and is iterated until degree zero, so it returns the evaluations (in the mirrored coefficient-halves form; the identity proved here is its transposed even/odd-coefficient statement)"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, Proposition 12.1 with (12.11)-(12.23): the inductive identities, for the mirror decimation-in-frequency form"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $m\in\mathbb N$, $N=2^{m}$ and $f\in\mathbb C^{\mathbb Z/N}$. Then

$$\operatorname{FFT}_m(f)(k)=X_k(f)\qquad\text{for every }k\in\mathbb Z,$$

where $X$ is the unnormalised $N$-point discrete Fourier transform of [[def-unnormalised-engineering-dft-and-conversion]]. Equivalently $\operatorname{FFT}_m(f)=2^{m/2}\,\mathcal F_Nf$ for the unitary transform of [[def-unitary-discrete-fourier-transform-on-z-mod-n]]; consequently the algorithm returns the unitary transform after the single rescaling $2^{-m/2}$, and it does so for every input of length $2^{m}$. Correctness is separate from speed: the operation count is the subject of a different theorem, and no floating-point or stability claim is made here.

## Facts & Assumptions

**Given:** The family $\operatorname{FFT}_m$ of [[def-recursive-radix-two-fast-fourier-transform]], the unnormalised transform $X$ and the unitary transform $\mathcal F_N$, and the statement $P(m)$: for every $f\in\mathbb C^{\mathbb Z/2^{m}}$ and every $k\in\mathbb Z$, $\operatorname{FFT}_m(f)(k)=X_k(f)$.

[F1] Definition of the recursion: $\operatorname{FFT}_0=\mathrm{id}$ on $\mathbb C^{\mathbb Z/1}$, and for $m\ge1$, with $M=2^{m-1}$, $f\in\mathbb C^{\mathbb Z/2^{m}}$ and even/odd parts $e,o\in\mathbb C^{\mathbb Z/M}$, one has $\operatorname{FFT}_m(f)(k)=\operatorname{FFT}_{m-1}(e)(k)+e^{-2\pi ik/2^{m}}\operatorname{FFT}_{m-1}(o)(k)$ for every $k\in\mathbb Z$, the subproblem outputs being extended $M$-periodically ([[def-recursive-radix-two-fast-fourier-transform]]).

[F2] Radix-two factorisation: with $M\ge1$, $2M$ in place of $N$, and even/odd parts $e,o$ of $f$, $X_k(f)=X_k(e)+e^{-2\pi ik/(2M)}X_k(o)$ and $X_{k+M}(f)=X_k(e)-e^{-2\pi ik/(2M)}X_k(o)$ for every $k\in\mathbb Z$ ([[lem-radix-two-even-odd-dft-factorisation]]).

[F3] The unnormalised transform at length $L$ is $X_k(u)=\sum_{x=0}^{L-1}u([x]_L)e^{-2\pi ikx/L}$ and satisfies $X_k(u)=L^{1/2}(\mathcal F_Lu)(k)$; at $L=1$, $X_0(u)=u([0]_1)$ because $e^{0}=1$ ([[def-unnormalised-engineering-dft-and-conversion]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[L1] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]); $2^{0}=1$ and $2^{m}=2\cdot2^{m-1}$ for $m\ge1$ ([[lem-power-laws]], [[def-natural-numbers]]).

[L2] Rational powers: $2^{m}>0$, $(2^{m})^{1/2}=2^{m/2}$ and $2^{m/2}\cdot2^{-m/2}=1$ ([[def-rational-power]], [[lem-rational-power-laws]], claims 1, 2 and 5).

## Proof

**Proof technique:** induction on $m$.

1.1 Base case $m=0$: the group $\mathbb Z/1\mathbb Z$ has the single class $[0]_1$, $\operatorname{FFT}_0=\mathrm{id}$, and $X_0(f)=f([0]_1)e^{0}=f([0]_1)$ while $X_k(f)=X_{k\bmod1}(f)=X_0(f)$ for every integer $k$ because the length-one transform is $1$-periodic; hence $\operatorname{FFT}_0(f)(k)=f([0]_1)=X_k(f)$ for every $k$. [base, F1, F3, L1]

1.2 Inductive hypothesis: fix $m\ge0$ and assume $P(m)$, that is $\operatorname{FFT}_m(g)(k)=X_k(g)$ for every $g\in\mathbb C^{\mathbb Z/2^{m}}$ and every integer $k$. [ih]

1.3 Successor data: for the induction step from $m$ to $m+1$, put $N:=2^{m+1}$ and $M:=2^m$, and let $f\in\mathbb C^{\mathbb Z/N}$ have even and odd parts $e,o\in\mathbb C^{\mathbb Z/M}$, so $N=2M$ and $M\ge1$. [given, F1, L1]

2.1 Successor case: by [F1], $\operatorname{FFT}_{m+1}(f)(k)=\operatorname{FFT}_{m}(e)(k)+e^{-2\pi ik/2^{m+1}}\operatorname{FFT}_{m}(o)(k)$; the induction hypothesis of step 1.2 applies to $e,o\in\mathbb C^{\mathbb Z/2^m}$ and every integer $k$, giving $\operatorname{FFT}_{m}(e)(k)=X_k(e)$ and $\operatorname{FFT}_{m}(o)(k)=X_k(o)$. Substituting these equalities and applying the first radix-two factorisation [F2] with $N=2^{m+1}=2M$ yields $\operatorname{FFT}_{m+1}(f)(k)=X_k(f)$ for every $k\in\mathbb Z$, which is $P(m+1)$. [step 1.2, step 1.3, F1, F2, L1]

3.1 By induction [L1], $P(m)$ holds for every $m\in\mathbb N$, which is the first display. For the equivalent form, [F3] gives $X_k(f)=2^{m/2}(\mathcal F_{2^{m}}f)(k)$ since $\sqrt{2^{m}}=2^{m/2}$ by [L2]; hence $\operatorname{FFT}_m(f)=2^{m/2}\mathcal F_Nf$, and multiplying both sides by $2^{-m/2}$ recovers the unitary transform from the output, so the rescaling $2^{-m/2}$ is the only normalisation step needed. [discharge-induction: step 2.1, F1, F3, L1, L2, step 1.1, step 2.1] ∎

## Remarks

- **Use of the induction hypothesis.** In the step from $m$ to $m+1$, the hypothesis is applied at level $m$ to the even and odd parts. The combine is the radix-two factorisation, and the base case is the identity transform at length $1$.

- **Correctness and the operation model are independent.** Nothing in this proof counts operations or inspects the resources used by the recursion; conversely the complexity theorem does not reprove the identity. The two statements share only the definition of the algorithm and the factorisation lemma.
