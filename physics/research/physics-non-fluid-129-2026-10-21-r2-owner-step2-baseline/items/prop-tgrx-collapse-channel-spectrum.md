---
id: prop-tgrx-collapse-channel-spectrum
kind: proposition
title: Exponential channel thermality and greybody filtered occupations
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-tgrx-exponential-ray-channel
  - lem-tgr-exponential-current
  - lem-tgr-thermal-contour-spectrum
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-derivative-of-exponential
  - cor-exponential-reciprocal-and-positivity
  - lem-mean-value-theorem-on-closed-interval
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgrx-exponential-ray-channel: mathematical-premise
  lem-tgr-exponential-current: mathematical-premise
  lem-tgr-thermal-contour-spectrum: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  lem-mean-value-theorem-on-closed-interval: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes
      url: https://arxiv.org/pdf/gr-qc/0308048
      locator: Sections 6.2.1–6.2.2, printed pp. 32–38, equations (6.2)–(6.26); the 3+1 packet result is context, not a proof of this channel identity.
    - title: Stefan Hollands and Robert M. Wald, Quantum Fields in Curved Spacetime, complete review
      url: https://arxiv.org/pdf/1401.2026
      locator: Section 2.3(c), PDF pp. 26–31, equations (52)–(60); the collapse result is context, not a proof of this one-dimensional distribution calculation.
verification:
  precheck: pass
---

## Statement

In the channel defined above, let $s=u-v$ and let $\omega$ be angular frequency in seconds$^{-1}$. Its two-point distribution in centered time is
$$C_k(s)=-\frac{k^2}{16\pi}\operatorname{csch}^2\left(\frac{k}{2}(s-i0)\right).$$
Its Fourier spectrum, using $\widehat C_k(\omega)=\int_{\mathbb R}C_k(s)e^{-i\omega s}\,ds$ in the distributional sense, is
$$S_k(\omega)=\frac{\omega}{2(e^{2\pi\omega/k}-1)}\quad(\omega\ne0),\qquad S_k(0)=\frac{k}{4\pi}.$$
Thus the precise detailed-balance relation at strip width $\theta=2\pi/k$ seconds is $S_k(-\omega)=e^{\theta\omega}S_k(\omega)$ for every $\omega>0$. No measured temperature is assigned.

Separately, for each fixed $\omega>0$, take $\mathcal F_s(\mathbb C)\widehat\otimes\mathcal F_s(\mathbb C)$ with the normalized one-particle vector $1\in\mathbb C$ in each factor, and let $a=a_{\mathbb C}(1)\otimes I$ and $e=I\otimes a_{\mathbb C}(1)$ be the signal and environment annihilation operators. Let $\psi_\omega$ be a normalized signal vector in the domain of $a_{\mathbb C}(1)$ and put the environment in its unit vacuum vector $\Omega_e$. Let $\Gamma:(0,\infty)\to[0,1]$ be any pointwise transmissivity function; no measurability is needed because all claims are mode-by-mode. For each $\omega$, define the passive mode mixing
$$b_\omega=\sqrt{\Gamma(\omega)}\,a+\sqrt{1-\Gamma(\omega)}\,e.$$
The complementary output is $d_\omega=-\sqrt{1-\Gamma(\omega)}\,a+\sqrt{\Gamma(\omega)}\,e$.
Write $\Psi_\omega=\psi_\omega\otimes\Omega_e$ and $n_\omega=\|a\psi_\omega\|^2<\infty$. Define the output occupation as the quadratic-form expectation $\mathfrak n_{\rm out}(\omega):=\|b_\omega\Psi_\omega\|^2$ of the number operator $b_\omega^\dagger b_\omega$. Then $\mathfrak n_{\rm out}(\omega)=\Gamma(\omega)n_\omega$. For the Planck occupation function $n_\theta(\omega)=(\exp(\theta\omega)-1)^{-1}$ with width $\theta>0$ measured in seconds, one has $n_\theta(\omega)>0$ for every $\omega>0$. Consequently, a filter preserving this same width at every positive frequency must satisfy $\Gamma(\omega)n_\theta(\omega)=n_\theta(\omega)$ and hence $\Gamma(\omega)=1$ at every $\omega$. Frequency-dependent filtering can nevertheless preserve Planck form at another width: $\Gamma_*(\omega)=(\exp(\theta\omega)+1)^{-1}$ lies in $(0,1)$ and varies with $\omega$, while $\Gamma_*(\omega)n_\theta(\omega)=n_{2\theta}(\omega)$. This is an algebraic channel statement; it does not identify $\Gamma$ with a four-dimensional black-hole scattering coefficient.

## Statement references

[[def-tgrx-exponential-ray-channel]]

[[lem-tgr-exponential-current]]

[[lem-tgr-thermal-contour-spectrum]]

[[def-countable-choice]]

[[def-qft-fock-and-test-spaces]]

[[lem-qft-fock-ccr-car]]

[[def-real-exponential-function-and-e]]

[[thm-exponential-addition-formula]]

[[thm-derivative-of-exponential]]

[[cor-exponential-reciprocal-and-positivity]]

[[lem-mean-value-theorem-on-closed-interval]]

## Channel diagram

The diagram represents the two input annihilation modes and the real orthogonal transformation to the output modes. Its matrix entries and the vacuum-environment condition are fixed by the Statement; the occupation and commutator claims are proved algebraically below.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[->] (0,1.4) node[left] {$a_\omega$} -- (2,1.4);
  \draw[->] (0,0.6) node[left] {$e_\omega$} -- (2,0.6);
  \draw (2,0.25) rectangle (3.5,1.75);
  \node at (2.75,1.0) {$R_{\Gamma(\omega)}$};
  \draw[->] (3.5,1.4) -- (5,1.4) node[right] {$b_\omega$};
  \draw[->] (3.5,0.6) -- (5,0.6) node[right] {$d_\omega$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $k>0$ seconds$^{-1}$, the positive coordinate conversion $\chi$, Countable Choice, and the mode hypotheses in the Statement.

[A1] Assume Countable Choice for the supplied Fock and contour constructions; no stronger choice principle is used. [[def-countable-choice]]

[F1] [[def-tgrx-exponential-ray-channel]] defines the exponential-coordinate current, its lower-boundary convention, and its positive-type vacuum pairing.

[F2] [[lem-tgr-exponential-current]] fixes the $i0$ occurrence of $\operatorname{csch}^2$ as a smooth-pullback distribution, not a pointwise value, and gives the canonical length-coordinate channel covariance $-\frac{\kappa^2}{16\pi}\operatorname{csch}^2(\kappa(s-i0)/2)$ for $\kappa>0$.

[F3] [[lem-tgr-thermal-contour-spectrum]] gives the spectrum $S_{A,b}(\Omega)=2\pi(A/b^2)\Omega/(e^{\pi\Omega/b}-1)$, its removable value at zero, and $S_{A,b}(-\Omega)=e^{(\pi/b)\Omega}S_{A,b}(\Omega)$ for $\Omega>0$.

[F4] [[def-qft-fock-and-test-spaces]] defines the bosonic creation and annihilation operators, vacuum, and finite-particle domain.

[F5] [[lem-qft-fock-ccr-car]] gives the canonical commutation relation on the finite-particle domain.

[F6] [[def-real-exponential-function-and-e]] defines the real exponential and gives $\exp(0)=1$.

[F7] [[cor-exponential-reciprocal-and-positivity]] gives $\exp(x)>0$ for every real $x$.

[F8] [[thm-derivative-of-exponential]] gives $(\exp)'=\exp$.

[F9] [[lem-mean-value-theorem-on-closed-interval]] gives the mean-value equality on every nondegenerate closed real interval.

[F10] [[thm-exponential-addition-formula]] gives $\exp(x+y)=\exp(x)\exp(y)$.

## Proof

1.1 Put $\tau=\chi u$, $x(\tau)=\chi U(\tau/\chi)$, and $\kappa=k/\chi$. Then
$$x(\tau)=\chi U_H+Ak\left(-\kappa^{-1}e^{-\kappa\tau}\right).$$
The coefficient $\lambda=Ak$ is positive. For $C_\epsilon(s)=-(4\pi)^{-1}(s-i\epsilon)^{-2}$, the exact identity $\lambda^2C_\epsilon(\lambda s)=C_{\epsilon/\lambda}(s)$ shows that a positive affine rescaling and translation leave the lower-boundary covariance unchanged. By [F1]–[F2], the canonical length-coordinate covariance is $C_\kappa$. Returning to seconds multiplies its kernel by $\chi^2$, so
$$C_k(s)=\chi^2C_\kappa(\chi s)=-\frac{k^2}{16\pi}\operatorname{csch}^2\left(\frac{k}{2}(s-i0)\right).$$
[A1, F1, F2, algebra]

1.2 Fix $\omega$ and write $\Gamma=\Gamma(\omega)$. The matrix
$$\begin{pmatrix}\sqrt{\Gamma}&\sqrt{1-\Gamma}\\-\sqrt{1-\Gamma}&\sqrt{\Gamma}\end{pmatrix}$$
is real orthogonal. The operators on the two tensor factors commute with one another; expanding the commutators and applying [F5] gives $[b,b^\dagger]=[d,d^\dagger]=I$ and $[b,d^\dagger]=[b,d]=0$ on the finite-particle core. On the product vector,
$$b\Psi_\omega=\sqrt{\Gamma}(a\psi_\omega)\otimes\Omega_e+\sqrt{1-\Gamma}\,\psi_\omega\otimes(e\Omega_e).$$
Expanding its squared norm, the environment summand and the cross term vanish because $e\Omega_e=0$. Therefore $\mathfrak n_{\rm out}(\omega)=\|b\Psi_\omega\|^2=\Gamma\|a\psi_\omega\|^2=\Gamma n_\omega$ by the quadratic-form definition in the Statement. [A1, given, F4, F5, algebra]

2.1 In [F3] take $A=\kappa^2/(16\pi)$ and $b=\kappa/2$. For the seconds-frequency variable, Fourier change of variables gives $S_k(\omega)=\chi S_\kappa(\omega/\chi)$, hence $S_k(\omega)=\omega/[2(e^{2\pi\omega/k}-1)]$ away from zero and $S_k(0)=\chi\kappa/(4\pi)=k/(4\pi)$. Substitution of $-\omega$ and cancellation of the common factor gives $S_k(-\omega)=e^{2\pi\omega/k}S_k(\omega)$ for $\omega>0$. [A1, F3, step 1.1, algebra]

3.1 Put $x=\theta\omega>0$. By the mean-value theorem [F9] on $[0,x]$, for some $c\in(0,x)$, $\exp(x)-\exp(0)=x\exp'(c)=x\exp(c)>0$, using [F8] and [F7]; [F6] gives $\exp(0)=1$. Hence $n_\theta(\omega)>0$ and $0<\Gamma_*(\omega)<1$. If any filter has $\Gamma(\omega)n_\theta(\omega)=n_\theta(\omega)$ at every positive frequency, division by this positive value gives $\Gamma(\omega)=1$ everywhere, so no nonconstant filter preserves the same width. If $0<\omega_1<\omega_2$, applying [F9] on $[\theta\omega_1,\theta\omega_2]$ gives $\exp(\theta\omega_2)-\exp(\theta\omega_1)=\theta(\omega_2-\omega_1)\exp'(c)>0$ for some intermediate $c$, by [F8] and [F7]. Thus $\Gamma_*$ is nonconstant. By [F10], $\exp(2x)-1=(\exp(x)-1)(\exp(x)+1)$; therefore $\Gamma_*(\omega)n_\theta(\omega)=1/(\exp(2x)-1)=n_{2\theta}(\omega)$. The varying filter can thus produce a Planck occupation at a different width. [F6, F7, F8, F9, F10, step 1.2, algebra] ∎
