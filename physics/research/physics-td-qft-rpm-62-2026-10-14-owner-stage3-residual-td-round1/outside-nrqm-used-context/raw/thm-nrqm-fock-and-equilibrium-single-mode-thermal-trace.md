---
id: thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace
aliases: [ nrqm-fock-and-equilibrium-single-mode-thermal-trace ]
kind: theorem
domain: mathematics
title: "Single-mode thermal trace"
status: published
origin: pipeline
dependency_level: 8
deps:
  [
    thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction,
    lem-nrqm-fock-and-equilibrium-fock-sector-projections,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    thm-nrqm-fock-and-equilibrium-fixed-mode-number-law,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set,
    def-trace-class-operator,
    def-trace-of-a-trace-class-operator,
    thm-geometric-series,
    thm-tonelli-for-nonnegative-double-series,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-countable-choice,
    def-axiom-of-choice,
    thm-complex-exponential-addition-and-real-extension,
    lem-finite-rank-operators-are-compact,
    lem-nuclear-series-characterizes-trace-norm,
    thm-norm-limit-of-compact-operators-is-compact,
    thm-trace-is-absolutely-convergent-and-basis-independent
  ]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-tonelli-for-nonnegative-double-series: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics
        (HSE, 2023), Sections 1.1.2-1.1.4 pp. 13-14 (Gibbs distribution,
        partition function, entropy) and 1.4.2 p. 34 (Bose canonical partition
        function)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Section 4.1 p. 25 (ideal Bose gas and geometric occupation
        sums)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
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

[F2] For real scalars $c_n$ on every sector $\operatorname{ran}P_+^{(n)}$, including $c_0$ on $\mathbb C$, the direct-sum theorem makes $\bigoplus_nc_n\mathrm{id}$ bounded and self-adjoint when $\sup_n|c_n|<\infty$, with norm $\sup_n|c_n|$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] (f)); when $c_n\ge0$, positivity follows from $\langle(\bigoplus_nc_n\mathrm{id})\psi,\psi\rangle=\sum_nc_n\|\psi_n\|^2\ge0$. A bounded operator agreeing with another bounded operator on a complete orthonormal family agrees everywhere ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[F3] Geometric series: $\sum_{n\ge0}q^n=1/(1-q)$ for $|q|<1$ ([[thm-geometric-series]]); Tonelli for nonnegative double series permits the interchange of the summation order, even for the extended value $+\infty$ ([[thm-tonelli-for-nonnegative-double-series]]).

[F4] The Fourier-coefficient map $\Phi:F(\mathbb C)\to\ell^2(\mathbb N,\mathbb C)$, $\Phi(\psi)=(\langle\psi,e_n\rangle)_n$, is a linear bijection with $\|\Phi(\psi)\|_2=\|\psi\|$ ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]]).

[F5] Bounded finite-rank operators are compact, norm limits of compact operators into a Hilbert space are compact, and a compact operator with a nuclear representation of summable rank-one norms is trace class with trace norm no greater than that sum ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[lem-nuclear-series-characterizes-trace-norm]]).

[F6] If $(u_n)$ is a countable orthonormal family and $w_n\ge0$ with $\sum_nw_n=1$, then $\rho:=\sum_nw_nT_{u_n,u_n}$ converges in trace norm to a density operator with $\operatorname{tr}\rho=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] (a)).

[F7] The complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ for all complex $z,w$ and agrees with the real exponential on real inputs ([[thm-complex-exponential-addition-and-real-extension]]).

[F8] For a trace-class operator $T$ and a supplied Hilbert basis $(e_n)$, $\operatorname{tr}T=\sum_n\langle Te_n,e_n\rangle$ and $|\operatorname{tr}T|\le\|T\|_1$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).


## Proof

1.1 [The diagonal weights] For every $n$ the operator $c_n\mathrm{id}$ on the nonzero complex Hilbert space $\operatorname{ran}P_+^{(n)}=\mathbb C$ has the single real eigenvalue $e^{-\beta\omega n}\in(0,1]$, so the direct sum $\bigoplus_n e^{-\beta\omega n}\mathrm{id}$ is bounded and self-adjoint with norm $\sup_n e^{-\beta\omega n}=1$ by [F2]; its quadratic form is $\sum_ne^{-\beta\omega n}\|\psi_n\|^2\ge0$, so it is positive. By [F1] this direct sum agrees with $G_\beta$ on the complete orthonormal family $(e_n)$ and therefore equals $G_\beta$: a bounded operator vanishing on all $e_n$ is zero. This proves (a). [F1, F2, algebra]

1.2 [The weight sums] Put $q:=e^{-\beta\omega}\in(0,1)$. The geometric series [F3] gives $Z(\beta)=\sum_{n\ge0}q^n=1/(1-q)$. For the first moment, $\sum_{n\ge1}nq^n=\sum_{n\ge1}\sum_{m=1}^{n}q^n=\sum_{m\ge1}\sum_{n\ge m}q^n$, where the interchange of the nonnegative double series is licensed by [F3]; the inner sum is $\sum_{n\ge m}q^n=q^m/(1-q)$ by the geometric series, so the total is $\frac1{1-q}\sum_{m\ge1}q^m=\frac{q}{(1-q)^2}<\infty$. The identity $q/(1-q)=1/(e^{\beta\omega}-1)$ follows from $e^{\beta\omega}e^{-\beta\omega}=e^0=1$ by [F7]. This proves (b). [F3, F7, algebra]

2.1 [Trace class and its trace] Put $q_n:=e^{-\beta\omega n}$ and $R_N:=\sum_{n=0}^Nq_nT_{e_n,e_n}$. Each $R_N$ is finite rank and compact by [F5]. Parseval [F4] gives $\|(G_\beta-R_N)\psi\|^2=\sum_{n>N}q_n^2|\langle\psi,e_n\rangle|^2\le q_{N+1}^2\|\psi\|^2$, so $R_N\to G_\beta$ in operator norm and [F5] makes $G_\beta$ compact. The expansion $G_\beta\psi=\sum_{n\ge0}\langle\psi,e_n\rangle(q_ne_n)$ is a nuclear representation with sum $\sum_n\|e_n\|\|q_ne_n\|=\sum_nq_n=Z(\beta)$; [F5] therefore gives $\|G_\beta\|_1\le Z(\beta)$ and trace class. By [F8], $\operatorname{tr}G_\beta=\sum_n\langle G_\beta e_n,e_n\rangle=\sum_nq_n=Z(\beta)$ and $Z(\beta)=|\operatorname{tr}G_\beta|\le\|G_\beta\|_1$. Thus $\|G_\beta\|_1=\operatorname{tr}G_\beta=Z(\beta)$, proving (c). [F4, F5, F8, step 1.2, algebra]

2.2 [The density operator and its number expectation] With $w_n:=e^{-\beta\omega n}/Z(\beta)\ge0$ and $\sum_nw_n=1$ by step 1.2, [F6] gives that $\rho_\beta=\sum_nw_nT_{e_n,e_n}$ is a density operator; since $T_{e_n,e_n}$ is the rank-one projection onto $\mathbb C e_n$ and $G_\beta=\sum_ne^{-\beta\omega n}T_{e_n,e_n}$ (agreement on the complete orthonormal family, step 1.1), one has $\rho_\beta=G_\beta/Z(\beta)$. The display defines $\langle N\rangle_\beta$ as the absolutely convergent sum $\sum_nnw_n$; by step 1.2, $\langle N\rangle_\beta=\frac{e^{-\beta\omega}}{(1-e^{-\beta\omega})^2}\big/\frac{1}{1-e^{-\beta\omega}}=\frac{e^{-\beta\omega}}{1-e^{-\beta\omega}}=\frac1{e^{\beta\omega}-1}$. For each integer $k\ge1$, put $a:=\beta\omega/2>0$ and $b_n:=n^ke^{-an}$ for $n\ge1$. Then $b_{n+1}/b_n=(1+1/n)^ke^{-a}\to e^{-a}<1$, so for some $N$ and $r<1$ this ratio is at most $r$ for all $n\ge N$; hence $(b_n)$ is bounded. Thus $n^ke^{-\beta\omega n}=b_ne^{-an}\le C_ke^{-an}$ for a finite $C_k$, and the geometric series with ratio $e^{-a}<1$ gives $\sum_nn^ke^{-\beta\omega n}<\infty$. [F3, F6, step 1.1, step 1.2, algebra]

3.1 [Conclusion and scope] Steps 1.1-2.2 prove (a)-(d); the displayed series are ordinary absolutely convergent real series and the trace statements use only the supplied spectral data. The closing paragraph of the statement records that the physical reading of $\beta$ and $\rho_\beta$ requires additional assumptions, so no physical interpretation is asserted here. [step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
