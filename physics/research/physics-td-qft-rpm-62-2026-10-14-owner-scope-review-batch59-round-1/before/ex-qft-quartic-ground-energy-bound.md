---
id: ex-qft-quartic-ground-energy-bound
kind: example
domain: mathematics
title: One-mode quartic ground-energy increment bound
status: draft
origin: pipeline
dependency_level: 6
deps: [def-qft-regulated-polynomial-hamiltonian, thm-qft-self-adjoint-regulated-interaction, lem-qft-hermite-oscillator-research-supplier, lem-qft-regulated-ground-variational-bound, lem-qft-coercive-polynomial-form-domain, thm-dominated-convergence, thm-hilbert-space-fourier-expansion, def-countable-choice]
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  lem-qft-regulated-ground-variational-bound: mathematical-premise
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §8.3, pp.212–214"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§8.3, printed pp.212–214: the Hermite ground state and oscillator eigenvalue."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 3, pp.21–24"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 3, printed pp.21–24: the normalized Gaussian ground state of the one-dimensional oscillator."
---

## Example

Assume $a>0$, $m>0$, and $\lambda\ge0$, all real mathematical parameters.
For $N=1$ take the polynomial
$$V_\lambda(q)=\frac{m^2}{2}q^2+\lambda q^4$$
and the differential expression $h_\lambda=-a\,d^2/dq^2+V_\lambda(q)$ with
the form realization of [[thm-qft-self-adjoint-regulated-interaction]]. Write
$E_g(\lambda)$ for its least eigenvalue. Then
$$0\le E_g(\lambda)-E_g(0)\le\frac{3a\lambda}{2m^2}.$$
The parameters are mathematical and dimensionless here; no physical mass,
unit, measurement, or continuum claim is made.

## Facts & Assumptions

**Given:** $a,m>0$, $\lambda\ge0$, and the finite-mode form realization for $V_\lambda$.

[A1] [[def-countable-choice]]: the spectral and form suppliers used here are invoked under Countable Choice.

[F1] [[def-qft-regulated-polynomial-hamiltonian]]: $V_\lambda(q)\ge(m^2/2)q^2$, so $C_0=0$ and the common quadratic coercivity constant is $c=m^2/2$.

[F2] [[lem-qft-hermite-oscillator-research-supplier]]: with $c=m^2/2$, the oscillator form domain $Q_{\mathrm{osc}}$ is the $\lambda=0$ form domain $Q_0$, the completion for the shifted norm $a\|u'\|_2^2+\int((m^2/2)q^2+2)|u|^2\,dq$. Its complete orthonormal Hermite basis has energies $\epsilon_n=(2n+1)m\sqrt{a/2}$ and, for every $u\in Q_0$, the exact form expansion
$$q_0(u)=a\|u'\|_2^2+\frac{m^2}{2}\|qu\|_2^2=\sum_{n=0}^{\infty}\epsilon_n|\langle u,\psi_n\rangle|^2.$$
The normalized ground function $\psi_0(q)=\phi_b(q)=(b/\pi)^{1/4}e^{-bq^2/2}$, with $b=m/\sqrt{2a}$, belongs to $Q_0$.

[F3] [[lem-qft-regulated-ground-variational-bound]]: the least eigenvalue equals the infimum of the normalized form over its form domain.

[F4] [[lem-qft-coercive-polynomial-form-domain]]: the form domain is the completion of $C_c^\infty$ for the displayed gradient-plus-weight norm and injects into $L^2$.

[F5] [[thm-dominated-convergence]]: if measurable functions $f_n$ converge almost everywhere to $f$ and satisfy $|f_n|\le g$ almost everywhere for one nonnegative $g$ with finite integral, then $\int f_n\to\int f$. The proof below supplies this pointwise convergence and an integrable majorant for the Gaussian difference quotients.

[F6] [[thm-hilbert-space-fourier-expansion]]: under Countable Choice, a complete orthonormal family in a Hilbert space gives norm-convergent coefficient expansions and Parseval's identity.

## Verification

**Proof technique:** direct.

**Given:** $a,m>0$, $\lambda\ge0$, and the forms $q_0,q_\lambda$.

1.1 Write $a_\lambda=q_\lambda+2\|\cdot\|_2^2$ for the shifted form inner product of the $\lambda$ completion. On $C_c^\infty$, $V_\lambda\ge V_0$ gives $a_\lambda(u,u)\ge a_0(u,u)$, so a $Q_\lambda$-Cauchy sequence is $Q_0$-Cauchy and the identity extends continuously to $Q_\lambda\to Q_0$ with the same $L^2$ representative. The unshifted forms $q_\lambda=a_\lambda-2\|\cdot\|_2^2$ and $q_0=a_0-2\|\cdot\|_2^2$ are continuous on their respective form spaces. For any $u\in Q_\lambda$, approximate it in $Q_\lambda$ by $u_r\in C_c^\infty$; then $q_\lambda(u_r)\ge q_0(u_r)$ for every $r$, and continuity of both forms gives $q_\lambda(u)\ge q_0(u)$ in the limit. For normalized $u\in Q_\lambda$, [F3] then gives $q_\lambda(u)\ge q_0(u)\ge E_g(0)$. Taking the infimum yields $E_g(\lambda)\ge E_g(0)$. [A1, F1, F3, F4, algebra]

1.2 The Gaussian $\phi_b$ from [F2] and its derivative are polynomial times a Gaussian. For cutoffs $\chi_R$ as in the cutoff construction of
[[lem-qft-hermite-oscillator-research-supplier]], $\chi_R\phi_b\in C_c^\infty$
converges to $\phi_b$ in the $\lambda$ form norm: the derivative error is
$(1-\chi_R)\phi_b'-(\chi_R')\phi_b$, whose first term has vanishing Gaussian
tail and whose second has norm at most $C\|\phi_b\|_2/R$; the weighted error
has squared magnitude bounded by $(m^2q^2/2+\lambda q^4+2)|\phi_b|^2$, an
integrable polynomial-Gaussian tail. Thus $\phi_b\in Q_\lambda$. [A1, F2, F4, algebra]

2.1 Write $p_b(q):=\sqrt{b/\pi}e^{-bq^2}$ and $\mathbb E_b[g]:=\int g(q)p_b(q)\,dq$. For $g\in\{1,q^2\}$, the real-valued integrand has derivative in $b$
$$\partial_b(g(q)p_b(q))=g(q)\left(\frac1{2b}-q^2\right)p_b(q).$$
Fix $b_0>0$ and choose a compact interval $K=[b_0-\delta,b_0+\delta]\subset(0,\infty)$; put $b_*:=b_0-\delta$. There is a constant $C_K$ such that, for both choices of $g$ and every $s\in K$,
$$|\partial_s(g(q)p_s(q))|\le C_K(1+|q|^4)e^{-b_*q^2},$$
and the right side is integrable on $\mathbb R$. For any sequence of nonzero $h_r\to0$ with $b_0+h_r\in K$, the mean-value theorem bounds the difference quotients
$$\left|\frac{g(q)p_{b_0+h_r}(q)-g(q)p_{b_0}(q)}{h_r}\right|\le C_K(1+|q|^4)e^{-b_*q^2};$$
they converge pointwise to $\partial_b(g(q)p_b(q))|_{b=b_0}$. Applying [F5] to these quotients gives convergence of their integrals to the integral of that derivative. Since this holds for every such sequence, it proves for each $b_0>0$ that
$$\frac{d}{db}\mathbb E_b[g]\bigg|_{b=b_0}=\int_{\mathbb R}\partial_b(g(q)p_b(q))\big|_{b=b_0}\,dq.$$
Thus [F5] is used only after the local difference-quotient convergence and majorant have been established. Since $\mathbb E_b[1]=1$, differentiating gives
$$0=\mathbb E_b\!\left[\frac1{2b}-q^2\right],\qquad \mathbb E_b[q^2]=\frac1{2b}.$$
Differentiating this identity for $\mathbb E_b[q^2]$ gives
$$-\frac1{2b^2}=\mathbb E_b\!\left[q^2\left(\frac1{2b}-q^2\right)\right] =\frac1{4b^2}-\mathbb E_b[q^4],$$
so $\mathbb E_b[q^4]=3/(4b^2)$. Since $\phi_b'=-bq\phi_b$, it follows that
$$\|\phi_b\|_2^2=1,\quad \|\phi_b'\|_2^2=b/2,\quad \int q^2|\phi_b|^2=1/(2b),\quad\int q^4|\phi_b|^2=3/(4b^2).$$
[F2, F5, algebra]

2.2 Put $\epsilon_0:=m\sqrt{a/2}$. For every $u\in Q_0$, the exact expansion in [F2], together with $\epsilon_n\ge\epsilon_0$ and Parseval from [F6] for its complete orthonormal basis, gives
$$q_0(u)-\epsilon_0\|u\|_2^2=\sum_{n=0}^{\infty}(\epsilon_n-\epsilon_0)|\langle u,\psi_n\rangle|^2\ge0.$$
The normalized $\phi_b=\psi_0\in Q_0$ has only its ground coefficient nonzero, so [F2] also gives $q_0(\phi_b)=\epsilon_0$. In particular the moment calculation of step 2.1 yields
$$a\|\phi_b'\|_2^2+\frac{m^2}{2}\|q\phi_b\|_2^2=\frac{ab}{2}+\frac{m^2}{4b}=m\sqrt{\frac a2}=\epsilon_0,$$
where $b=m/\sqrt{2a}$. Hence the normalized form infimum for $q_0$ is $\epsilon_0$, and the variational-bound lemma [F3] identifies this infimum with $E_g(0)$; therefore $E_g(0)=\epsilon_0$. [F2, F3, F6, step 2.1, algebra]

2.3 By step 1.2, $\phi_b$ is a normalized vector in $Q_\lambda$. Its quartic form contribution is
$$\lambda\int q^4|\phi_b|^2\,dq=\frac{3\lambda}{4b^2}=\frac{3a\lambda}{2m^2}.$$
The variational bound [F3], now for $q_\lambda$, gives
$$E_g(\lambda)\le q_\lambda(\phi_b)=E_g(0)+\frac{3a\lambda}{2m^2}.$$
Combining this with step 1.1 proves both inequalities, including $\lambda=0$. [F2, F3, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎

