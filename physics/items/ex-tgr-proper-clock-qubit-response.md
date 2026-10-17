---
id: ex-tgr-proper-clock-qubit-response
kind: example
title: Proper clock two-level response
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - thm-tgr-finite-response-redshift
  - def-countable-choice
dependency_roles:
  thm-tgr-finite-response-redshift: mathematical-premise
  def-countable-choice: mathematical-premise
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.5"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Example

Take a cell label $i$ from [[thm-tgr-finite-cell-gibbs-factorization]], with assigned location $x_i=\chi(i)$ and lapse $N:=N_i=N(x_i)>0$. For this neutral two-level example, take Hilbert space $\mathbb C^2$, number operator $Q=0$, and proper Hamiltonian
$$H_{\mathrm{loc}}=\frac{\Delta}{2}Z,\qquad \Delta>0\ \mathrm J.$$
Here
$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$
are dimensionless Hermitian Pauli matrices. Let $\beta_{\mathrm{loc}}=N\beta_K>0$ in joules$^{-1}$ and prepare
$$\sigma=\frac{e^{-\beta_{\mathrm{loc}}H_{\mathrm{loc}}}}{\operatorname{Tr}(e^{-\beta_{\mathrm{loc}}H_{\mathrm{loc}}})}.$$
For the dimensionless observable and control $A=B=X$, the proper-time Kubo kernel, its Killing-time version, and the spectral measure are
$$R_{\mathrm{loc}}(\tau)=\frac{2}{\hbar}\tanh\!\left(\frac{\beta_{\mathrm{loc}}\Delta}{2}\right)\sin\!\left(\frac{\Delta\tau}{\hbar}\right),\qquad R_K(t)=\frac{2}{\hbar}\tanh\!\left(\frac{\beta_{\mathrm{loc}}\Delta}{2}\right)\sin\!\left(\frac{N\Delta t}{\hbar}\right),$$
$$S_{\mathrm{loc}}=2\pi\left(p_+\delta_{-\Delta/\hbar}+p_-\delta_{\Delta/\hbar}\right),\qquad p_+=\frac{e^{-\beta_{\mathrm{loc}}\Delta/2}}{2\cosh(\beta_{\mathrm{loc}}\Delta/2)},\quad p_-=\frac{e^{\beta_{\mathrm{loc}}\Delta/2}}{2\cosh(\beta_{\mathrm{loc}}\Delta/2)}.$$
The Killing-time spectral measure is the pushforward of $S_{\mathrm{loc}}$ under $\omega\mapsto N\omega$, so its two lines are at $\pm N\Delta/\hbar$ with the same respective weights. The oscillation period is $2\pi\hbar/\Delta$ in proper time and $2\pi\hbar/(N\Delta)$ in Killing time.

For the separately re-prepared static family
$$\sigma_\lambda:=\frac{e^{-\beta_{\mathrm{loc}}(H_{\mathrm{loc}}-\lambda X)}}{\operatorname{Tr}(e^{-\beta_{\mathrm{loc}}(H_{\mathrm{loc}}-\lambda X)})},\qquad \lambda\ \mathrm J,$$
the static Gibbs susceptibility is
$$\left.\frac{d}{d\lambda}\operatorname{Tr}(\sigma_\lambda X)\right|_{\lambda=0}=\frac{2}{\Delta}\tanh\!\left(\frac{\beta_{\mathrm{loc}}\Delta}{2}\right).$$
This finite model has persistent spectral lines and an oscillatory response. Its static Gibbs derivative is not a dc transport coefficient, and no infinite-time decay is asserted.

## Facts & Assumptions

**Given:** A neutral two-level finite cell, $\Delta>0$, $N>0$, $\beta_{\mathrm{loc}}=N\beta_K>0$, and the matrices and preparations in the Example.

[F1] [[thm-tgr-finite-response-redshift]]: for a chosen cell label $i$ in the construction, with $N=N_i=N(x_i)$, neutral observables, and a proper-time control, the finite-time response and spectral measures rescale by $N$; the re-prepared static susceptibility is the Kubo–Mori covariance and is an ordinary variance only in the commuting case. The current A-page theorem is draft with a current ready Step 1 record, not independent proof approval.

[F2] [[def-countable-choice]] states that every countable family of nonempty sets has a choice function. The geometric cell construction used for this model example is conditional on this inherited $\mathrm{AC}_\omega$ assumption; no stronger choice principle is used.

[L1] Direct multiplication of the displayed matrices gives $X^2=Y^2=Z^2=I$, $[Y,X]=-2iZ$, $ZX=iY$, and $XZ=-iY$. The displayed $Z$ is diagonal with eigenvalues $+1,-1$ on the standard basis; $\operatorname{Tr}X=\operatorname{Tr}Z=0$, $\operatorname{Tr}I=2$, and $\operatorname{Tr}(ZX)=0$.

## Verification

1.1 The eigenvectors of $Z$ have energies $+\Delta/2$ and $-\Delta/2$. Therefore $\operatorname{Tr}(e^{-\beta_{\mathrm{loc}}H_{\mathrm{loc}}})=e^{-\beta_{\mathrm{loc}}\Delta/2}+e^{\beta_{\mathrm{loc}}\Delta/2}=2\cosh(\beta_{\mathrm{loc}}\Delta/2)$, and $\operatorname{Tr}(\sigma Z)=p_+-p_-=-\tanh(\beta_{\mathrm{loc}}\Delta/2)$. [given, L1, algebra]

2.1 With $\theta=\Delta\tau/\hbar$, direct multiplication using [L1] gives $e^{iH_{\mathrm{loc}}\tau/\hbar}Xe^{-iH_{\mathrm{loc}}\tau/\hbar}=X\cos\theta-Y\sin\theta$. Thus $[\alpha^{\mathrm{loc}}_\tau(X),X]=-\sin\theta[Y,X]=2iZ\sin\theta$, so the Kubo definition gives $R_{\mathrm{loc}}(\tau)=\frac{i}{\hbar}\operatorname{Tr}(\sigma[\alpha^{\mathrm{loc}}_\tau(X),X])=\frac{2}{\hbar}\tanh(\beta_{\mathrm{loc}}\Delta/2)\sin\theta$. [given, F1, L1, step 1.1, algebra]

2.2 The only nonzero matrix elements of $X$ in the $Z$ eigenbasis exchange the two energy eigenvectors, so the two transition frequencies are $-\Delta/\hbar$ from the $+$ state and $+\Delta/\hbar$ from the $-$ state. Their Gibbs weights are $p_+$ and $p_-$ from step 1.1; hence the stated two-line spectral measure follows from the finite spectral expansion. The cell theorem, invoked for the assigned geometric cell under its inherited assumption [F2], sends each frequency $\omega$ to $N\omega$ without changing its weight, giving the Killing-time lines and periods in the Example. [given, F1, F2, L1, step 1.1, algebra]

3.1 Put $R(\lambda)=\sqrt{(\Delta/2)^2+\lambda^2}$. Since $H_{\mathrm{loc}}-\lambda X=(\Delta Z/2-\lambda X)$ and $ZX+XZ=0$ by [L1], its square is $R(\lambda)^2I$, so
$$e^{-\beta_{\mathrm{loc}}(H_{\mathrm{loc}}-\lambda X)}=\cosh(\beta_{\mathrm{loc}}R(\lambda))I-\frac{\sinh(\beta_{\mathrm{loc}}R(\lambda))}{R(\lambda)}(H_{\mathrm{loc}}-\lambda X).$$
Taking traces and using $\operatorname{Tr}(H_{\mathrm{loc}}X)=0$ and $\operatorname{Tr}(X^2)=2$ from [L1] gives
$$\operatorname{Tr}(\sigma_\lambda X)=\lambda\frac{\tanh(\beta_{\mathrm{loc}}R(\lambda))}{R(\lambda)}.$$
Differentiating this explicit scalar expression at $\lambda=0$ yields the displayed static susceptibility. It is a derivative of a newly normalized Gibbs family, whereas the finite-time Kubo response in step 2.1 keeps $\sigma$ fixed. [given, L1, step 1.1, step 2.1, algebra]

4.1 Since $R_K(t)$ is a nonzero sinusoid when $\beta_{\mathrm{loc}}>0$ and $\Delta>0$, it is periodic and does not decay as $t\to\infty$. The theorem supplies no absolute-integrability hypothesis for a Green–Kubo limit, so the oscillatory finite response cannot be relabelled as a dc transport coefficient. [given, F1, step 2.1, algebra] ∎

## Remarks

This is an exact finite-dimensional calculation. It contains no apparatus, measured observation, or empirical precision and makes no claim about a physical thermometer or a general curved-spacetime field.
