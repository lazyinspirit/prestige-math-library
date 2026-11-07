---
dependency_level: 5
id: thm-yang-2026-ramified-local-period-estimates
kind: theorem
title: "Yang Ramified Local Period Identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-yang-2026-amplified-test-function-data
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - def-standard-and-rankin-selberg-l-functions-on-gln
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Lemma 5.4, §5.3"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Takuya Miyauchi, Whittaker Functions Associated to Newforms for GL(n) over p-adic Fields, Theorem 4.1"
      url: "https://www.jstage.jst.go.jp/article/jmath/66/1/66_17/_pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $n\geq2$, let $p$ be a prime dividing the conductor $M''$ of the central character $\omega'_p$ of a generic representation $\pi'_p$ of $\mathrm{GL}_n(\mathbb Q_p)$, and let $\pi_{\lambda,p}$ be the local component of the normalized induced representation obtained from the pure isobaric data and unitary deformation parameter $\lambda\in i\mathfrak a_Q^*/i\mathfrak a_G^*$. Let $W_{\lambda,p}$ be an essential Whittaker function for $\pi_{\lambda,p}$ and let $W'_p$ be the normalized local newvector Whittaker function for $\pi'_p$. Write $\widetilde f_p$ for the ramified test function defined at primes $p\mid M'$ in the amplified test-function data, and define

$$\Psi_p(s,W,W')=Z_0(s+1/2,W,W')=\int_{N_n(\mathbb Q_p)\backslash\mathrm{GL}_n(\mathbb Q_p)}W\!\left(\begin{pmatrix}x&0\\0&1\end{pmatrix}\right)W'(x)|\det x|_p^s\,dx,$$

where $N_n$ is upper-unitriangular and the measure is the one used for the local Rankin–Selberg integral. As meromorphic functions of $s$,

$$\Psi_p\bigl(s,\pi_{\lambda,p}(\widetilde f_p)W_{\lambda,p},W'_p\bigr)=W_{\lambda,p}(I_{n+1})W'_p(I_n)L_p(s+1/2,\pi_{\lambda,p}\times\pi'_p).$$

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Lemma 5.4, §5.3](https://arxiv.org/pdf/2309.07534v2)

[Takuya Miyauchi, *Whittaker functions associated to newforms for GL(n) over p-adic fields*, Theorem 4.1, pp. 21–22](https://www.jstage.jst.go.jp/article/jmath/66/1/66_17/_pdf)

## Proof status

Yang's source proof unfolds the finite sum, uses additive-character orthogonality to force the last Cartan coordinate to be zero, and then identifies the remaining toral sum with the local Rankin–Selberg integral by citing Miyauchi's Theorem 4.1. I inspected that theorem and its proof: it gives the diagonal Whittaker values of a single GL(n) newform in terms of its local L-factor, but does not itself establish the full GL(n+1)×GL(n) local integral identity or the essential-vector support condition used here. Those steps have not been reconstructed as a complete proof. Step 1 is escalated; the exact unresolved supplier is the ramified local period identity in the normalization above.
