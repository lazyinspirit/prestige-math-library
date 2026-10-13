---
id: cex-cm-absolute-convergence-fails-in-h-zero
kind: counterexample
title: "FALSE: every $L^2$ field on $\\mathbb T^3$ has absolutely convergent Fourier coefficients. An explicit $H^0$ family with $\\sum_k|\\widehat u(k)|=\\infty$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-fourier-lattice-sobolev-embedding, def-countable-choice, def-nonnegative-extended-series, thm-integral-test-for-series, thm-fourier-basis-and-parseval-on-the-n-torus]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  thm-integral-test-for-series: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 2.1 (the Fourier characterisation of H^s and the threshold s>3/2 for absolute convergence of the coefficient series)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapters 1-2 (decay of Fourier coefficients versus summability; the failure of absolute convergence for merely L^2 data)"
      url: "https://arxiv.org/pdf/0903.3845"
verification:
  precheck: pass
---

## Statement refuted

**False statement.** Every field $u\in H^0(\mathbb T^3;\mathbb R^3)=L^2(\mathbb T^3;\mathbb R^3)$ has absolutely convergent Fourier coefficients:
$$\sum_{k\in\mathbb Z^3}|\widehat u(k)|_2<+\infty .$$
(By [[lem-fourier-lattice-sobolev-embedding]] the corresponding statement for $H^\sigma$ with $\sigma>3/2$ is true; the false statement drops the hypothesis, and that is exactly what fails.)

## Facts & Assumptions

**Given:** The weights $w_k$, the shell decomposition $\{|k|_\infty=L\}$ for $L\in\mathbb N$, and the coefficient family $\widehat u$.

[F1] If $f:[0,\infty)\to\mathbb R$ is nonincreasing and nonnegative, then $\sum_{k\ge0}f(k)$ converges if and only if the integrals $\int_0^Nf$ are bounded ([[thm-integral-test-for-series]]); in particular $\sum_{L\ge2}L^{-1}(\log L)^{-2}<\infty$ and $\sum_{L\ge2}L^{1/2}(\log L)^{-1}=+\infty$.

[F2] A nonnegative extended sum over an index set is the supremum of its finite partial sums, and it is finite exactly when those partial sums are bounded ([[def-nonnegative-extended-series]]).

[F3] The Fourier coefficient map is a bijection from the real classes of $L^2(\mathbb T^3;\mathbb R^3)$ onto the real-symmetric families in $\ell^2(\mathbb Z^3;\mathbb C^3)$, and $\|u\|_{L^2}^2=\sum_k|\widehat u(k)|_2^2$ ([[thm-fourier-basis-and-parseval-on-the-n-torus]], [[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F4] The statement refuted would, if true, force $\sum_k|\widehat u(k)|_2<\infty$ for every real-symmetric square-summable family ([[lem-fourier-lattice-sobolev-embedding]] records the correct positive result under $\sigma>3/2$).

## Counterexample

Use the conventions of [[def-periodic-vector-sobolev-space-and-leray-projection]]: $w_k=(1+4\pi^2|k|_2^2)^{1/2}$ and $\|u\|_{H^0}^2=\sum_k|\widehat u(k)|_2^2$. Let $v:=\tfrac{1}{\sqrt3}(1,1,1)\in\mathbb R^3$ and define the real vector field $u$ by the coefficient family
$$\widehat u(k):=\begin{cases}0,&|k|_\infty\le1,\\[2pt] \dfrac{w_k^{-3/2}}{\log w_k}\,v,&|k|_\infty\ge2.\end{cases}$$
The family is real-symmetric ($\widehat u(-k)=\widehat u(k)=\overline{\widehat u(k)}$), so it defines a real field $u\in H^0$. Then $\|u\|_{H^0}^2<+\infty$ while $\sum_{k}|\widehat u(k)|_2=+\infty$: the coefficient series of this $L^2$ field is not absolutely convergent.

**Proof technique:** direct; count the shells $|k|_\infty=L$, compare the two series with the integral test, and invoke the Fourier coefficient isometry.

**Given:** The coefficient family $\widehat u$ and the facts [F1]-[F4].

1.1 For $|k|_\infty=L$ the weight satisfies $2\pi L\le w_k\le cL$ with $c:=\sqrt{1+12\pi^2}$, and the shell has exactly $(2L+1)^3-(2L-1)^3=24L^2+2$ points. Hence for $L\ge2$, with $\ell_L:=\log(2\pi L)$ one has two-sided bounds $c^{-3/2}L^{-3/2}/\log(cL)\le|\widehat u(k)|_2\le(2\pi L)^{-3/2}/\ell_L$ on that shell, so shell summation (multiplicity $24L^2+2$) gives $c_1\sum_{L\ge2}L^{1/2}/\log L\le\sum_k|\widehat u(k)|_2\le c_2\sum_{L\ge2}L^{1/2}/\log L$ and $c_3\sum_{L\ge2}1/(L\log^2L)\le\sum_k|\widehat u(k)|_2^2\le c_4\sum_{L\ge2}1/(L\log^2L)$ for positive constants $c_i$. [given, algebra]

2.1 By [F1] the series $\sum_{L\ge2}1/(L\log^2L)$ converges (its integral test function $t^{-1}(\log t)^{-2}$ has finite integral from $2$ to $\infty$, the antiderivative being $-1/\log t$) while $\sum_{L\ge2}L^{1/2}/\log L$ diverges (its summands do not tend to $0$); by [F2] this means $\|u\|_{H^0}^2=\sum_k|\widehat u(k)|_2^2<+\infty$ and $\sum_k|\widehat u(k)|_2=+\infty$. [step 1.1, F1, F2]

3.1 The family is real-symmetric by construction, so by [F3] it is the coefficient family of a real field $u\in H^0$; by step 2.1 the hypothesis of the false statement is satisfied but its conclusion fails. Hence the false statement is refuted. [step 2.1, F3, F4] ∎

## Remarks

- The counterexample isolates the exact role of the hypothesis $\sigma>3/2$ in [[lem-fourier-lattice-sobolev-embedding]]: the proof there bounds $\sum|\widehat u(k)|$ by the Cauchy-Schwarz factor $(\sum_kw_k^{-2\sigma})^{1/2}$, which is finite precisely when $2\sigma>3$. At $\sigma=0$ this mechanism is unavailable and, as shown, the conclusion is false.
- Nothing is asserted here about the continuity of this particular field; the refuted statement concerns absolute convergence of its Fourier coefficients only, and the witness is a coefficient family in $H^0$.
