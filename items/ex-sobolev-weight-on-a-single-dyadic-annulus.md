---
id: ex-sobolev-weight-on-a-single-dyadic-annulus
kind: example
title: "The Sobolev weight on a single dyadic annulus"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-the-standard-smooth-step-function, def-inhomogeneous-dyadic-frequency-partition, thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-plancherel, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 6.5 and Theorem 6.6, where the weight $2^{js}$ multiplies the $j$-th dyadic piece, printed pp. 24-26"
generation:
  role: example
---

## Example

Assume Countable Choice ([[def-countable-choice]]).
Let $0<\varepsilon<1$ and let $(\varphi_j)$ be an admissible partition, in the
sense of [[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]],
whose cutoff satisfies $\psi=1$ on $\{|\xi|\le1\}$ and
$\operatorname{supp}\psi\subset\{|\xi|\le1+\varepsilon\}$. Set
$$A_0:=\{|\xi|\le1\},\qquad A_j:=\{2^{j-1}(1+\varepsilon)<|\xi|\le2^j\}\quad(j\ge1).$$
Then $A_0$ is the nonempty unit ball and each $A_j$, $j\ge1$, is a nonempty
annulus (because
$(1+\varepsilon)/2<1$, so $2^{j-1}(1+\varepsilon)<2^j$), on which
$\varphi_j=1$ and $\varphi_i=0$ for all $i\ne j$. For $f\in\mathcal S(\mathbb R^n)$
with $\operatorname{supp}\widehat f\subset A_j$ one has $\Delta_jf=f$ and
$\Delta_if=0$ for $i\ne j$, and for every real $s$
$$\|f\|_{H^s}\asymp_s2^{js}\|f\|_{L^2},$$
the comparison constants depending only on $n,s$ and the fixed partition. For
$j=0$ the same formula reads $\|f\|_{H^s}\asymp_s\|f\|_2$, the correct
low-frequency weight and not an exception to be excluded.

## Verification

**Given:** Countable Choice and $0<\varepsilon<1$, the admissible partition $(\varphi_j)$ with
$\psi=1$ on $\{|\xi|\le1\}$ and $\psi=0$ for $|\xi|\ge1+\varepsilon$; a real
$s$; $j\ge0$; $f\in\mathcal S$ with $\operatorname{supp}\widehat f\subset A_j$.

[L1] The pieces are $\varphi_0=\psi$ and
$\varphi_j(\xi)=\psi(2^{-j}\xi)-\psi(2^{-(j-1)}\xi)$ for $j\ge1$, with
$\psi=1$ on $\{|\xi|\le1\}$ and $\psi=0$ on $\{|\xi|\ge1+\varepsilon\}$
([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]).

[L2] For every $U$ in the image of the canonical embedding $E_s$ the
Littlewood-Paley characterisation gives
$\|U\|_{H^s}^2\asymp\sum_{i\ge0}2^{2is}\|\Delta_iU\|_{L^2}^2$, with constants
depending only on $n,s$ and the partition; Schwartz functions lie in that
image and $\Delta_i u_f=u_{\Delta_if}$ for $f\in\mathcal S$
([[thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces]],
[[def-inhomogeneous-dyadic-frequency-partition]],
[[def-real-order-bessel-potential-sobolev-space]],
[[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[L3] Plancherel: $\|f\|_{L^2}=\|\widehat f\|_{L^2}$ for Schwartz $f$
([[thm-plancherel]]).

1.1 The values of the pieces on $A_j$. Let $\xi\in A_j$. If $j=0$ then $|\xi|\le1$ and $\varphi_0(\xi)=\psi(\xi)=1$; if $j\ge1$ then $|\xi|\le2^j$ gives $\psi(2^{-j}\xi)=1$, while $|\xi|>2^{j-1}(1+\varepsilon)$ gives $|2^{-(j-1)}\xi|>1+\varepsilon$, hence $\psi(2^{-(j-1)}\xi)=0$ and $\varphi_j(\xi)=1$. For $i\ne j$: if $1\le i\le j-1$ then the smaller argument has $|2^{-i}\xi|\ge|2^{-(j-1)}\xi|>1+\varepsilon$, and so does the larger argument, so both $\psi$ values vanish and $\varphi_i(\xi)=0$; for $i=0<j$, $|\xi|>1+\varepsilon$ gives $\varphi_0(\xi)=\psi(\xi)=0$; if $i\ge j+1$ then the larger argument has $|2^{-(i-1)}\xi|\le2^{-j}|\xi|\le1$, so both $\psi$ values are $1$ and again $\varphi_i(\xi)=0$. [L1, given, algebra]

2.1 The pieces of $f$. By step 1.1, $\widehat{\Delta_jf}=\varphi_j\widehat f=\widehat f$ and $\widehat{\Delta_if}=\varphi_i\widehat f=0$ for $i\ne j$; since the Fourier transform is injective on tempered distributions, $\Delta_jf=f$ and $\Delta_if=0$ for $i\ne j$. [L1, step 1.1, algebra]

3.1 The Sobolev comparison. Applying the characterisation [L2] to the regular distribution $u_f$ of $f$, whose $\Delta_i$-images are $u_{\Delta_if}$ by [L2], and using step 2.1, gives $\|f\|_{H^s}^2\asymp\sum_{i\ge0}2^{2is}\|\Delta_if\|_2^2=2^{2js}\|f\|_2^2$; moreover on $A_j$ the Japanese bracket satisfies $\langle\xi\rangle\asymp2^j$ for $j\ge1$ (as $2^{j-1}(1+\varepsilon)<|\xi|\le2^j$) and $\langle\xi\rangle\asymp1=2^{0}$ for $j=0$, so the weight implicit in the comparison is exactly the dyadic weight $2^{js}$. Taking square roots gives $\|f\|_{H^s}\asymp_s2^{js}\|f\|_2$ with constants depending only on $n,s$ and the fixed partition (through $\varepsilon$). [L2, L3, step 1.1, step 2.1, algebra]

4.1 Conclusion. Steps 1.1 to 3.1 verify the asserted values of the pieces, the identities $\Delta_jf=f$, $\Delta_if=0$ ($i\ne j$), and the two-sided Sobolev comparison, including the low-frequency case $j=0$ where the weight $2^{0}=1$ is the correct one. [step 1.1, step 2.1, step 3.1] ∎

**Existence of the partition.** For completeness, such a cutoff exists for every $0<\varepsilon<1$: putting $q(\xi):=\bigl((1+\varepsilon)^2-|\xi|^2\bigr)/\bigl((1+\varepsilon)^2-1\bigr)$ and $\psi:=\sigma\circ q$ with the standard smooth step $\sigma$ gives a radial smooth cutoff with $\psi=1$ exactly on $\{|\xi|\le1\}$ and $\psi=0$ for $|\xi|\ge1+\varepsilon$ ([[def-the-standard-smooth-step-function]]); the conclusions above hold for the resulting partition.
