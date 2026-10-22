---
id: ex-ip-gaussian-series-at-besov-threshold
kind: example
title: "A Gaussian wavelet series at the Besov threshold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-forward-map-and-solution-classes
  - lem-ip-gaussian-series-prior-regularity
  - lem-ip-weighted-coefficient-spaces-are-hilbert
  - def-ip-prior-on-a-forward-domain
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-countable-choice
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-standard-normal-fourth-moment
  - cor-iid-finite-variance-strong-law
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - cor-continuous-functions-are-borel-measurable
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-separable-space
justified_by: []
forward_refs: []
aliases: []
generation:
  role: example
proof_strategy: direct
axiom_use: "AC is required by the library's standard-normal and Borel Gaussian interfaces. Countable choice is used through the L² and weighted-coefficient Hilbert-space results, the Gaussian-series law, and Borel measurability of the square map. The IID strong-law threshold divergence uses no further choice."
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§2.3, Theorem 2.2 and complete proof of Besov-prior regularity threshold; §2.4, Gaussian series convergence."
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models (Cambridge University Press, 2016)"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§4.2, periodic orthonormal wavelet bases; §§4.3.4–4.3.5, Besov coefficient conventions; §4.4.1, random Gaussian wavelet series."
---

## Example

Assume AC and countable choice. Fix $s>0$ and a periodic $S$-regular orthonormal wavelet basis of $L^2([0,1])$ consisting of a finite family of coarsest scaling functions $(\varphi_i)_{i\in I_*}$ and detail wavelets $(\psi_{\ell k})_{\ell\ge0,\,0\le k<2^\ell}$, where $I_*$ is finite and $S>s$. Let $\xi_i$ and $\xi_{\ell k}$, over all these indices, be independent $N(0,1)$ variables. For $0\le r\le s$, define $B^r_{2,2}([0,1])$ to be the set of $f\in L^2([0,1])$ with finite coefficient norm
$$\|f\|_{B^r_{2,2}}^2=\sum_{i\in I_*}|\langle f,\varphi_i\rangle|^2+\sum_{\ell\ge0}2^{2\ell r}\sum_{k<2^\ell}|\langle f,\psi_{\ell k}\rangle|^2.$$
Take parameter and data spaces $X=Y=L^2([0,1])$ with their Borel sigma-algebras, the admissible truth set and forward domain $U=D=X$, and the forward map $F=\mathrm{id}_X$. Set the coarsest scaling coefficients to zero and define
$$W=\sum_{\ell\ge0}\sum_{k<2^\ell}2^{-\ell(s+1/2)}\xi_{\ell k}\psi_{\ell k}.$$
The law of $W$ is a centered Borel Gaussian prior on $D$. For each fixed $0\le r<s$, $W$ belongs to $B^r_{2,2}([0,1])$ almost surely, but $W$ does not belong to the threshold space $B^s_{2,2}([0,1])$ almost surely.

## Example references

[[lem-ip-gaussian-series-prior-regularity|summable weighted Gaussian series converge in the selected Hilbert norm]]

[[lem-ip-weighted-coefficient-spaces-are-hilbert|the wavelet coefficient spaces are separable Hilbert spaces continuously included in $L^2$]]

[[def-ip-prior-on-a-forward-domain|a prior requires full measure on its forward-map domain]]

[[def-ip-forward-map-and-solution-classes|the parameter and data spaces, admissible truth set, and forward map]]

[[def-borel-gaussian-random-element-on-a-separable-banach-space|Borel Gaussian random elements are Borel measurable and have centered normal continuous-linear projections]]

[[def-standard-normal-and-normal-laws|the standard normal law]]

[[def-axiom-of-choice|the Axiom of Choice]]

[[def-countable-choice|the Axiom of Countable Choice]]

[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space|$L^2(\lbrack0,1\rbrack)$ is a real Hilbert space under countable choice]]

[[lem-standard-normal-fourth-moment|a standard normal has second moment 1 and fourth moment 3]]

[[def-identically-distributed-and-iid-random-variables|independent identically distributed variables]]

[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis|an orthonormal basis has dense linear span]]

[[def-separable-space|separability means an at most countable dense subset]]

[[cor-continuous-functions-are-borel-measurable|continuous real-valued maps on Euclidean space are Borel measurable under countable choice]]

[[cor-iid-finite-variance-strong-law|the strong law for IID square-integrable variables]]

[Dashti and Stuart, §2.3, Theorem 2.2 and proof, full text](https://arxiv.org/pdf/1302.6989)

[Giné and Nickl, §§4.2–4.4.1, full book](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** AC and countable choice; the stated periodic S-regular orthonormal wavelet basis of $L^2([0,1])$; independent standard normal coefficients; and $s>0$.

[A1] AC is required by the library's standard-normal and Borel Gaussian interfaces. [[def-axiom-of-choice]]

[A2] Countable choice is used through the $L^2$ Hilbert-space, weighted coefficient-space, Gaussian-series, and continuous-map measurability results. [[def-countable-choice]]

[F1] Under countable choice, real $L^2([0,1])$ with its integral pairing is a Hilbert space. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F2] Under countable choice, the weighted wavelet coefficient space is a separable Hilbert space continuously included in $L^2$, with basis weights $1$ on the finite scaling family and $2^{2r\ell}$ on detail level $\ell$. [[lem-ip-weighted-coefficient-spaces-are-hilbert]]

[F3] If $\sum_j\lambda_jw_j<\infty$, the independent standard-normal series converges in the weighted Hilbert norm and, under AC and countable choice, defines a centered Borel Gaussian whose covariance eigenvalues are $\lambda_jw_j$. [[lem-ip-gaussian-series-prior-regularity]]

[F4] A Borel probability is a prior on a forward domain only when it assigns that domain probability one. [[def-ip-prior-on-a-forward-domain]]

[F5] Under AC, a standard normal has second moment $1$ and fourth moment $3$, so its square has mean $1$ and variance $2$. [[lem-standard-normal-fourth-moment]]

[F6] Applying a measurable map separately to an independent family preserves independence. [[lem-measurable-functions-preserve-independence]]

[F7] A family is IID when its variables are mutually independent and have a common law. [[def-identically-distributed-and-iid-random-variables]]

[F8] For IID square-integrable real variables $(Z_n)$, $n^{-1}\sum_{i=1}^n Z_i\to\mathbb E Z_1$ almost surely. [[cor-iid-finite-variance-strong-law]]

[F9] Every continuous real function is Borel measurable under countable choice; in particular, $x\mapsto x^2$ is measurable. [[cor-continuous-functions-are-borel-measurable]]

[F10] A complete orthonormal basis has dense linear span. [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]

[F11] A topological space is separable when it has an at most countable dense subset. [[def-separable-space]]

## Verification

**Given:** The coefficient family, basis, parameter space, smoothness index, and axioms in the Example.

1.1 Let $H_0=L^2([0,1])$. By [F1] under countable choice [A2], it is a real Hilbert space. The complete basis [F10] has a countable index set, so its finite rational linear combinations form a countable set. Its finite real linear span is dense by [F10], and approximating each finite list of real coefficients by rationals makes the rational span dense as well. Hence $H_0$ is separable by [F11]. Enumerate the finite scaling family first and the detail wavelets by increasing $\ell$ and then $k$, set $\lambda_i=0$ on the scaling family, and set $\lambda_{\ell k}=2^{-2\ell(s+1/2)}$ and $w_j=1$ on detail levels. Then $\sum_j\lambda_jw_j=\sum_{\ell\ge0}2^\ell2^{-2\ell(s+1/2)}=\sum_{\ell\ge0}2^{-2s\ell}<\infty$ because $s>0$. Apply [F3] under AC and countable choice [A1]–[A2] to obtain the Borel centered Gaussian limit $W$ in $H_0$. The identity on $D=H_0$ is measurable and $\mathbb P(W\in D)=1$, so [F4] makes its law a prior on $D$. [A1, A2, F1, F3, F4, F10, F11, given, construct, algebra]

2.1 Enumerate the detail coefficients by increasing level and then by $k$, write the corresponding standard normals as $(\eta_n)_{n\ge1}$, and set $Z_n=\eta_n^2$. By [F9] under countable choice [A2], the square map is measurable. Since each $\eta_n$ has the same standard normal law, the $Z_n$ have the same pushforward law under this map; [F6] preserves independence, so [F7] makes $(Z_n)$ IID. By [F5] under AC [A1], their mean is $1$ and their variance is finite; [F8] gives $R_N/N\to1$ almost surely for $R_N=\sum_{n=1}^NZ_n$. For every $\ell\ge0$, set $A_\ell=2^{-\ell}\sum_{k<2^\ell}\xi_{\ell k}^2$. For $\ell\ge1$, put $N_\ell=2^\ell-1$, so $A_\ell=(R_{N_{\ell+1}}-R_{N_\ell})/2^\ell$. Since $N_{\ell+1}/2^\ell\to2$ and $N_\ell/2^\ell\to1$ as $\ell\to\infty$, the strong-law limits give $A_\ell\to2-1=1$ almost surely for the same variables used in step 1.1. [A1, A2, F5, F6, F7, F8, F9, step 1.1, given, algebra]

2.2 Fix $0\le r<s$ and take $H_1=B^r_{2,2}([0,1])$. By [F2], it is a separable Hilbert space continuously included in $H_0$, with basis weights $1$ on the finite scaling family and $w_{\ell k}=2^{2r\ell}$ on detail levels. The weighted eigenvalue sum is $\sum_{\ell\ge0}2^\ell2^{-2\ell(s+1/2)}2^{2r\ell}=\sum_{\ell\ge0}2^{-2(s-r)\ell}<\infty$. Apply [F3] under AC and countable choice [A1]–[A2] to the same coefficients as in step 1.1; the partial wavelet sums converge almost surely in $H_1$. Their $H_0$ limit is $W$ by step 1.1, and continuity of the inclusion makes the $H_1$ limit the same element. Hence $W\in B^r_{2,2}([0,1])$ almost surely for this fixed $r$. [A1, A2, F2, F3, step 1.1, given, construct, algebra]

3.1 For each detail wavelet, its coordinate functional is continuous on $H_0$; after the term enters the partial sums, the coefficient is $2^{-\ell(s+1/2)}\xi_{\ell k}$, so convergence in step 1.1 gives the same coefficient for $W$. The scaling coefficients vanish by construction. Therefore $\|W\|_{B^s_{2,2}}^2=\sum_{\ell\ge0}2^{2\ell s}\sum_{k<2^\ell}2^{-2\ell(s+1/2)}\xi_{\ell k}^2=\sum_{\ell\ge0}A_\ell$. By step 2.1, $A_\ell\to1$ almost surely, so the nonnegative series diverges and $W\notin B^s_{2,2}([0,1])$ almost surely. [step 1.1, step 2.1, given, algebra] ∎
