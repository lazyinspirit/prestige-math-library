---
id: pthm-qsm-periodic-ideal-occupation
kind: physics-theorem
title: "Finite spectral periodic Bose/Fermi gas"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-qsm-models-statistics-and-preparation
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-models-diagonal-occupation-trace
  - thm-qsm-models-lattice-riemann-bose-bound
  - def-countable-choice
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  thm-qsm-models-lattice-riemann-bose-bound: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "A finite-volume ideal gas defined spectrally on the integer momentum labels of a periodic box, with dispersion alpha|2pi k/L|^2 and a finite internal degeneracy g. It proves finite grand trace, exact mode means and continuum density/energy limits for fixed mu<0 in the Bose case or finite mu in the Fermi case. It does not identify this spectral definition with a differential operator domain, claim a finite-volume phase transition, or establish an empirical gas model."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.5–3.6, ideal Bose/Fermi gases"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lectures 23–25"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and adopt the model preparation of [[post-qsm-models-statistics-and-preparation]]. Let $d\ge1$, $L>0$ in m, $m>0$ in kg, $\hbar>0$ in J s, $k_B>0$ in J K$^{-1}$, and $T>0$ in K. Put $V=L^d$, $\alpha=\hbar^2/(2m)$, $\beta=(k_BT)^{-1}$, and let $g\in\mathbb N$ count distinct internal modes. Put $\Lambda=\mathbb Z^d\times\{1,\ldots,g\}$, enumerated by increasing $\|k\|_\infty:=\max_{1\le j\le d}|k_j|$, then lexicographically in $k$ and increasingly in $s$. Define the one-particle Hilbert space $\mathfrak h=\ell^2(\Lambda)$ with coordinate basis $e_{k,s}$. Its spectral energy multiplier is $h_1e_{k,s}=\epsilon_ke_{k,s}$ for $\epsilon_k=\alpha|2\pi k/L|^2$, on the maximal domain $D(h_1)=\{c\in\ell^2(\Lambda):\sum_{k,s}\epsilon_k^2|c_{k,s}|^2<\infty\}$; the real diagonal multiplier is self-adjoint on this domain by the coordinate adjoint calculation in Step 2.1 of [[lem-qsm-models-diagonal-occupation-trace]].

Let $\Omega_B$ be the finite-support maps $n:\Lambda\to\mathbb N_0$, and let $\Omega_F$ be the finite-support maps $n:\Lambda\to\{0,1\}$, with occupation bases $|n\rangle$ of the Bose or Fermi Fock space as in [[lem-qsm-fock-occupation-basis-and-car-relations]]. Use $\Omega_\pm=\Omega_B$ for bosons and $\Omega_\pm=\Omega_F$ for fermions. Define the finite sums $E(n):=\sum_{(k,s)\in\Lambda}\epsilon_kn_{k,s}$ and $|n|:=\sum_{(k,s)\in\Lambda}n_{k,s}$, and the mode occupation random variables $N_{k,s}(n):=n_{k,s}$. The diagonal many-body Hamiltonian and total number operators act by $H|n\rangle=E(n)|n\rangle$ and $N|n\rangle=|n||n\rangle$ on their maximal domains
$$D(H)=\left\{c\in\ell^2(\Omega_\pm):\sum_{n\in\Omega_\pm}E(n)^2|c_n|^2<\infty\right\},\qquad D(N)=\left\{c\in\ell^2(\Omega_\pm):\sum_{n\in\Omega_\pm}|n|^2|c_n|^2<\infty\right\},$$
as self-adjoint operators on those domains by [[lem-qsm-models-diagonal-occupation-trace]].

For bosons take $\mu<0$; for fermions take any finite $\mu\in\mathbb R$. In either case the grand trace
$$\Xi_{\beta,\mu,L}:=\sum_{n\in\Omega_\pm}e^{-\beta(E(n)-\mu|n|)}$$
is finite and positive, and its normalized occupation law is $P_{\beta,\mu,L}(n):=\Xi_{\beta,\mu,L}^{-1}e^{-\beta(E(n)-\mu|n|)}$. For a $P_{\beta,\mu,L}$-integrable real random variable $X$, write $\mathbb E_{\beta,\mu,L}X:=\sum_{n\in\Omega_\pm}P_{\beta,\mu,L}(n)X(n)$; if $X$ has finite second moment, set $\operatorname{Var}_{\beta,\mu,L}(X):=\mathbb E_{\beta,\mu,L}[(X-\mathbb E_{\beta,\mu,L}X)^2]$. In particular, $\mathbb E_{\beta,\mu,L}N=\sum_nP_{\beta,\mu,L}(n)|n|$ and $\mathbb E_{\beta,\mu,L}H=\sum_nP_{\beta,\mu,L}(n)E(n)$. Under this additive diagonal Hamiltonian its mode occupations are independent, and
$$\bar n_{k,s}:=\mathbb E_{\beta,\mu,L}N_{k,s}=\frac1{e^{\beta(\epsilon_k-\mu)}\mp1},\qquad \operatorname{Var}_{\beta,\mu,L}(N_{k,s})=\bar n_{k,s}(1\pm\bar n_{k,s}),$$
with the upper sign choice in the denominator interpreted as $-$ for bosons and $+$ for fermions (equivalently the variance is $\bar n(1+\bar n)$ for bosons and $\bar n(1-\bar n)$ for fermions). For fixed $\beta,\mu$ in these regimes, as $L\to\infty$,
$$\frac{\mathbb E_{\beta,\mu,L}N}{V}\to\frac{g}{(2\pi)^d}\int_{\mathbb R^d}\frac{dp}{e^{\beta(\alpha|p|^2-\mu)}\mp1},\qquad \frac{\mathbb E_{\beta,\mu,L}H}{V}\to\frac{g}{(2\pi)^d}\int_{\mathbb R^d}\frac{\alpha|p|^2\,dp}{e^{\beta(\alpha|p|^2-\mu)}\mp1},$$
The continuum limits are conditional model deductions; they assert no thermalization or measured density.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $\alpha>0$ in J m$^2$, $p$ in m$^{-1}$, $\mu$ and $\epsilon_k$ in J, $\beta$ in J$^{-1}$, $T$ in K, $k_B$ in J K$^{-1}$, and $V$ in m$^d$.

[A1] [[post-qsm-models-statistics-and-preparation]]: Bose/Fermi sector selection and the trace-Gibbs preparation are adopted; a finite positive trace is required.

[F1] [[lem-qsm-models-diagonal-occupation-trace]], Statement: the displayed diagonal multiplier has the exact domains, trace products, marginals, independence, and mode mean/variance formulas under its q-summability hypotheses.

[F2] [[thm-qsm-models-lattice-riemann-bose-bound]], Statement: Gaussian lattice sums and polynomially weighted occupation sums are finite, and their scaled Riemann sums converge for $\mu<0$ in the Bose case and finite $\mu$ in the Fermi case.

## Proof



1.1 Set $h=2\pi/L$ and $q_k=e^{\beta\mu}e^{-\beta\alpha h^2|k|^2}$. The Gaussian lattice bound from [F2] gives $\sum_{k,s}q_k<\infty$. For bosons, $q_k\le e^{\beta\mu}<1$, so the uniform gap and summability hypotheses in [F1] hold. For fermions they hold with $q_k>0$; only finitely many modes have $\epsilon_k<\mu$, since that inequality confines $k$ to a bounded ball in the discrete lattice. The one-particle real diagonal multiplier has the stated weighted-square domain by the coefficient and adjoint test in [F1]. [given, F1, F2, algebra]

2.1 Apply [F1] to these exact mode weights. Its finite positive product is the trace of $e^{-\beta(H-\mu N)}$; normalization yields the stated independent geometric or Bernoulli mode laws. The means and variances are those displayed in the Statement. [step 1.1, F1, A1]

3.1 With $p=hk$, one has $V^{-1}=(h/2\pi)^d$. Therefore $V^{-1}\sum_{k,s}\bar n_k=g(2\pi)^{-d}h^d\sum_k f(p)$ and $V^{-1}\sum_{k,s}\epsilon_k\bar n_k=g(2\pi)^{-d}h^d\sum_k\alpha|p|^2f(p)$. Both limits follow from [F2], using weights $s=0$ and $s=2$. The polynomial tail bound also makes these number and energy densities finite. [step 2.1, F2, algebra] ∎
