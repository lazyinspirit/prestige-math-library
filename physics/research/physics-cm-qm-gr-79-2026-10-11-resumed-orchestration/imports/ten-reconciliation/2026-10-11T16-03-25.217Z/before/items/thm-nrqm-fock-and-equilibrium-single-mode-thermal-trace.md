---
id: thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace
aliases: [nrqm-fock-and-equilibrium-single-mode-thermal-trace]
kind: theorem
domain: mathematics
title: "Single-mode thermal trace"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, thm-nrqm-fock-and-equilibrium-number-operator-domain, thm-nrqm-fock-and-equilibrium-fixed-mode-number-law, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, lem-diagonal-trace-class-operator-on-ell-two, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-geometric-series, thm-tonelli-for-nonnegative-double-series, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set: mathematical-premise
  lem-diagonal-trace-class-operator-on-ell-two: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-tonelli-for-nonnegative-double-series: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, 2023), Sections 1.1.2-1.1.4 pp. 13-14 (Gibbs distribution, partition function, entropy) and 1.4.2 p. 34 (Bose canonical partition function)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 4.1 p. 25 (ideal Bose gas and geometric occupation sums)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\omega>0$ and
$\beta>0$ be real parameters, let $F(\mathbb C)$ be the one-mode Fock space
with its complete orthonormal family $(e_n)_{n\in\mathbb N}$ and number
operator $N$ as in [[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]
and [[thm-nrqm-fock-and-equilibrium-number-operator-domain]], and define the
operator $G_\beta\in\mathcal B(F(\mathbb C))$ by
$$G_\beta e_n:=e^{-\beta\omega n}e_n\qquad(n\in\mathbb N)$$
together with bounded linear extension. Then:

(a) $G_\beta$ is a bounded self-adjoint positive operator with $\|G_\beta\|=1$,
and $G_\beta=\bigoplus_{n\in\mathbb N}e^{-\beta\omega n}\,\mathrm{id}$ on the
Fock sectors ([[def-bounded-linear-operator]], [[def-operator-norm]]);

(b) the series of weights converge,
$$Z(\beta):=\sum_{n\in\mathbb N}e^{-\beta\omega n}=\frac1{1-e^{-\beta\omega}},\qquad \sum_{n\in\mathbb N}n\,e^{-\beta\omega n}=\frac{e^{-\beta\omega}}{(1-e^{-\beta\omega})^2};$$

(c) $G_\beta$ is trace class with
$\|G_\beta\|_1=\operatorname{tr}G_\beta=Z(\beta)$
([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]]);

(d) $\rho_\beta:=G_\beta/Z(\beta)$ is a density operator on $F(\mathbb C)$
([[lem-nrqm-composites-density-and-scalar-spectral-probability]]), and its
number expectation, defined by the absolutely convergent spectral sum
$\langle N\rangle_\beta:=\sum_{n}n\,e^{-\beta\omega n}/Z(\beta)$, equals
$$\langle N\rangle_\beta=\frac{e^{-\beta\omega}}{1-e^{-\beta\omega}}=\frac1{e^{\beta\omega}-1};$$
more generally $\sum_nn^k e^{-\beta\omega n}<\infty$ for every $k\ge1$.

The parameter $\beta$ is a positive real parameter of the model; its
identification with an inverse temperature, and the interpretation of
$\rho_\beta$ as a physical thermal state, are additional physical assumptions
not asserted here.

## Facts & Assumptions

**Given:** the real parameters $\omega>0$, $\beta>0$, the one-mode Fock space $F(\mathbb C)$ with complete orthonormal family $(e_n)_{n\in\mathbb N}$ and number operator $N$, and the bounded operator $G_\beta$ defined on the orthonormal family by $G_\beta e_n=e^{-\beta\omega n}e_n$.

[F1] $(e_n)_{n\in\mathbb N}$ is a complete orthonormal family of the Hilbert space $F(\mathbb C)$; $N$ is self-adjoint with $Ne_n=ne_n$ ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]], [[thm-nrqm-fock-and-equilibrium-number-operator-domain]]).

[F2] A bounded linear operator is determined by its values on a complete orthonormal family if those values are bounded and orthogonal; in particular a diagonal operator $\bigoplus_nc_n\mathrm{id}$ with $\sup_n|c_n|<\infty$ is bounded with norm $\sup_n|c_n|$, self-adjoint when all $c_n$ are real, positive when all $c_n\ge0$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] (f), [[def-bounded-linear-operator]], [[def-operator-norm]]).

[F3] Geometric series: $\sum_{n\ge0}q^n=1/(1-q)$ for $|q|<1$ ([[thm-geometric-series]]); Tonelli for nonnegative double series permits the interchange of the summation order, even for the extended value $+\infty$ ([[thm-tonelli-for-nonnegative-double-series]]).

[F4] The Fourier-coefficient map $\Phi:F(\mathbb C)\to\ell^2(\mathbb N,\mathbb C)$, $\Phi(\psi)=(\langle\psi,e_n\rangle)_n$, is a linear bijection with $\|\Phi(\psi)\|_2=\|\psi\|$ ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]]).

[F5] The diagonal operator on $\ell^2(\mathbb N,\mathbb C)$ with bounded real diagonal $(c_n)$ is trace class exactly when $\sum_n|c_n|<\infty$, and then its trace is $\sum_nc_n$ ([[lem-diagonal-trace-class-operator-on-ell-two]], [[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]]).

[F6] If $(u_n)$ is a countable orthonormal family and $w_n\ge0$ with $\sum_nw_n=1$, then $\rho:=\sum_nw_nT_{u_n,u_n}$ converges in trace norm to a density operator with $\operatorname{tr}\rho=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] (a)).

## Proof

1.1 [The diagonal weights] For every $n$ the operator $c_n\mathrm{id}$ on the nonzero complex Hilbert space $\operatorname{ran}P_+^{(n)}=\mathbb C$ has the single real eigenvalue $e^{-\beta\omega n}\in(0,1]$, so the direct sum $\bigoplus_n e^{-\beta\omega n}\mathrm{id}$ is bounded self-adjoint positive with norm $\sup_n e^{-\beta\omega n}=1$ by [F2]; by [F1] this direct sum agrees with $G_\beta$ on the complete orthonormal family $(e_n)$ and therefore equals $G_\beta$: a bounded operator vanishing on all $e_n$ is zero. This proves (a). [F1, F2, algebra]

1.2 [The weight sums] Put $q:=e^{-\beta\omega}\in(0,1)$. The geometric series [F3] gives $Z(\beta)=\sum_{n\ge0}q^n=1/(1-q)$. For the first moment, $\sum_{n\ge1}nq^n=\sum_{n\ge1}\sum_{m=1}^{n}q^n=\sum_{m\ge1}\sum_{n\ge m}q^n$, where the interchange of the nonnegative double series is licensed by [F3]; the inner sum is $\sum_{n\ge m}q^n=q^m/(1-q)$ by the geometric series, so the total is $\frac1{1-q}\sum_{m\ge1}q^m=\frac{q}{(1-q)^2}<\infty$. This proves (b). [F3, algebra]

2.1 [Trace class] Under the Fourier-coefficient unitary $\Phi$ of [F4], the operator $G_\beta$ corresponds to the diagonal operator $D_c$ on $\ell^2(\mathbb N,\mathbb C)$ with $c_n=e^{-\beta\omega n}$, because $\Phi(G_\beta e_m)=e^{-\beta\omega m}\Phi(e_m)$ and $\Phi(e_m)$ is the $m$-th standard unit vector. Since $\sum_n|c_n|=Z(\beta)<\infty$ by step 1.2, [F5] shows that $G_\beta$ is trace class with $\|G_\beta\|_1=\sum_n|c_n|=Z(\beta)$ and $\operatorname{tr}G_\beta=\sum_nc_n=Z(\beta)$. This proves (c). [F4, F5, step 1.2, algebra]

2.2 [The density operator and its number expectation] With $w_n:=e^{-\beta\omega n}/Z(\beta)\ge0$ and $\sum_nw_n=1$ by step 1.2, [F6] gives that $\rho_\beta=\sum_nw_nT_{e_n,e_n}$ is a density operator; since $T_{e_n,e_n}$ is the rank-one projection onto $\mathbb C e_n$ and $G_\beta=\sum_ne^{-\beta\omega n}T_{e_n,e_n}$ (agreement on the complete orthonormal family, step 1.1), one has $\rho_\beta=G_\beta/Z(\beta)$. The display defines $\langle N\rangle_\beta$ as the absolutely convergent sum $\sum_nnw_n$; by step 1.2, $\langle N\rangle_\beta=\frac{e^{-\beta\omega}}{(1-e^{-\beta\omega})^2}\big/\frac{1}{1-e^{-\beta\omega}}=\frac{e^{-\beta\omega}}{1-e^{-\beta\omega}}=\frac1{e^{\beta\omega}-1}$. For the higher moments, $n^ke^{-\beta\omega n}\le C_\varepsilon e^{-(\beta\omega-\varepsilon)n}$ for each $\varepsilon>0$ (finitely many initial terms are estimated separately), and the geometric comparison with ratio $e^{-(\beta\omega-\varepsilon)}<1$ gives $\sum_nn^ke^{-\beta\omega n}<\infty$. [F3, F6, step 1.1, step 1.2, algebra]

3.1 [Conclusion and scope] Steps 1.1-2.2 prove (a)-(d); the displayed series are ordinary absolutely convergent real series and the trace statements use only the supplied spectral data. The closing paragraph of the statement records that the physical reading of $\beta$ and $\rho_\beta$ requires additional assumptions, so no physical interpretation is asserted here. [step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
