---
id: thm-birkhoff-ergodic-probability-case-for-strong-laws
kind: theorem
title: Birkhoff's theorem for an ergodic probability system
deps: ["lem-finite-probability-maximal-ergodic-inequality", "def-ergodic-measure-preserving-system", "thm-integrals-are-invariant-under-measure-preserving-maps", "thm-arithmetic-and-lattice-operations-preserve-measurability", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "thm-dominated-convergence", "thm-finite-and-countable-subadditivity-of-measures"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, 5th ed., Theorem 6.2.1 and its complete proof, printed pp.335–337; ergodic specialization proved without conditional expectation'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

If $T$ is an ergodic measure-preserving transformation of a probability space and $f$ is an integrable real-valued measurable function, then, for $n\ge1$, the averages $A_nf=n^{-1}\sum_{j=0}^{n-1}f\circ T^j$ satisfy $A_nf\to c=\int f\,dP$ almost surely and in $L^1$. Invertibility is not required.

## Facts & Assumptions

[F1] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The class $L^1(\mu)$ is a complex vector space, and the Lebesgue integral is
complex-linear on it:
$$\int (\alpha f+\beta g)\,d\mu=\alpha\int f\,d\mu+\beta\int g\,d\mu \qquad(\alpha,\beta\in\mathbb C,\ f,g\in L^1(\mu)).$$

[F2] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Let $(X,\mathcal{A})$ be a measurable space and let
$f,g : X \to \overline{\mathbb{R}}$ be measurable. Then:

1. $cf$ is measurable for every real scalar $c$;
2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable;
3. if $f+g$ is pointwise defined, then $f+g$ is measurable;
4. with the convention of
   rem-zero-times-infinity-convention-for-pointwise-products, the pointwise
   product $fg$ is measurable.

[F3] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: Let $(X,\mathcal{A})$ be a measurable space and let
$f_n : X \to \overline{\mathbb{R}}$ be measurable for every $n \in \mathbb{N}$.
Then the functions

$$\sup_n f_n,\qquad \inf_n f_n,\qquad \limsup_n f_n,\qquad \liminf_n f_n$$

are measurable. The set

$$\{\, x : \lim_n f_n(x) \text{ exists in } \overline{\mathbb{R}} \,\}$$

is measurable. In particular, if $f_n \to f$ pointwise, then $f$ is measurable.

[F4] [[lem-finite-probability-maximal-ergodic-inequality]]: Let $T$ preserve a probability measure $P$, and let $f$ be integrable, real-valued and measurable. Put $S_kf=\sum_{j=0}^{k-1}f\circ T^j$, $M_N=\max(0,S_1f,\ldots,S_Nf)$ and $E_N=\{M_N>0\}$ for $N\ge1$. Then $\int_{E_N}f\,dP\ge0$, and also $\int_E f\,dP\ge0$ for $E=\{\sup_{k\ge1}S_kf>0\}$.

[F5] [[def-ergodic-measure-preserving-system]]: A measure-preserving system is **ergodic for $\mu$** if each $E\in\mathcal I$ has $\mu(E)=0$ or $\mu(X\setminus E)=0$, with $\mathcal I$ as in def-strict-and-mod-null-invariant-$\sigma$-algebras. For a probability system this means $\mu(E)\in\{0,1\}$. The definition is relative to the invariant measure; no probability assumption is implicit in the general null/conull formulation.

[F6] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

[F7] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

[F8] [[thm-integral-triangle-inequality]]: If $f\in L^1(\mu)$, then
$$\left|\int f\,d\mu\right|\le\int |f|\,d\mu.$$

[F9] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: If $T$ preserves $\mu$ and $f:X\to[0,\infty]$ is measurable, then $\int f\circ T\,d\mu=\int f\,d\mu$, allowing infinity. If $f$ is integrable real or complex valued, $f\circ T$ is integrable and the same equality holds. Conversely, for a measurable self-map, equality for every measurable indicator implies measure preservation.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Set $h=f-c$ so $\int h\,dP=0$ by F1. For $n\ge1$, the finite averages are measurable by F2, and $L=\limsup_{n\to\infty} A_nh$ is extended-real measurable by F3. [F1, F2, F3]

1.2 At every $x$ and every $n\ge1$, $A_nh(Tx)=((n+1)/n)A_{n+1}h(x)-h(x)/n$. This implies $L(Tx)=L(x)$ even if $L$ is infinite: multiplying a real sequence by positive factors tending to one preserves finite limsup by eventual upper bounds and a subsequence tending to that limsup; if the limsup is positive infinity there is a subsequence tending to positive infinity, and if it is negative infinity all sufficiently late terms lie below every fixed negative bound. Subtraction of $h(x)/n$ tends to zero because $h$ is finite everywhere. Thus for every $\varepsilon>0$ the measurable set $D=\{L>\varepsilon\}$ is strictly invariant. [given, algebra]

2.1 Let $g=(h-\varepsilon)\mathbf1_D$, an integrable function. Strict invariance in step 1.2 gives $S_ng=\mathbf1_D(S_nh-n\varepsilon)$ for $n\ge1$. Outside $D$ all these sums vanish; inside $D$ the defining strict limsup gives some positive sum. Thus $\{\sup_{n\ge1}S_ng>0\}=D$, and F4 gives $\int_D(h-\varepsilon)\,dP\ge0$. [F4, step 1.2]

3.1 By F5, P(D) is zero or one. If it were one, step 1.1 would give $\int_D(h-\varepsilon)=-\varepsilon<0$, contrary to step 2.1. Hence P(D)=0. Apply this conclusion to h and -h and to $\varepsilon$=1/m for every positive integer m. F6 makes the union of the exceptional events null, so $\limsup A_nh\le0\le\liminf A_nh$ almost surely. This proves the almost-sure assertion. [F5, F6, step 1.1, step 2.1]

4.1 For each integer $K\ge1$ put $f_K=f\mathbf1_{\{|f|\le K\}}$ and $c_K=\int f_K$. Step 3.1 applied to f_K gives $A_nf_K\to c_K$ almost surely, and $|A_nf_K-c_K|\le2K$. F7 yields $\|A_nf_K-c_K\|_1\to0$. [F7]

5.1 By F8 and F9, $\|A_n(f-f_K)\|_1\le\|f-f_K\|_1$ and $|c-c_K|\le\|f-f_K\|_1$. Consequently $\|A_nf-c\|_1\le2\|f-f_K\|_1+\|A_nf_K-c_K\|_1$. Dominated convergence makes the first term tend to zero as K increases, uniformly in n; step 4.1 then handles the second term with K fixed. This proves $L^1$ convergence. [F8, F9, step 4.1] ∎
