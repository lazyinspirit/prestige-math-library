---
id: pthm-qftx-mode-g-two
kind: physics-theorem
domain: physics
library: physics
title: "Ideal one-mode intensity correlations separate model states"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-factorial-and-falling-factorial
  - def-real-exponential-function-and-e
  - lem-nrqm-composites-density-and-scalar-spectral-probability
  - lem-qftx-mode-number-pvm
  - post-qftx-ideal-wavepacket-counting
  - thm-geometric-series
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-factorial-and-falling-factorial: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-qftx-mode-number-pvm: mathematical-premise
  post-qftx-ideal-wavepacket-counting: physical-assumption
  thm-geometric-series: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
physical_scope: "Exact model predictions for coherent-mode, fixed-number and geometric one-mode preparations under ideal wavepacket number counting. The geometric distribution is the specified single-mode thermal occupation law; no universal classification of radiation or empirical outcome is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Roy J. Glauber, The Quantum Theory of Optical Coherence, Physical Review 130, 2529–2539 (1963)"
      url: "https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529"
      locator: "§II equations (2.15)–(2.18), §III equations (3.6)–(3.14), and §IV equations (4.8)–(4.10), printed pp. 2531–2536, for normal-ordered photodetection correlations and coherent-field context. Number-state and geometric-law calculations are proved locally."
    - title: "Daniel A. Steck, Quantum and Atom Optics, revision 0.16.10 (27 June 2026)"
      url: "https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf"
      locator: "Author-hosted complete course text, Chapter 2 §§2.6.1–2.6.2, PDF pp. 74–76, for second-order coherence, the explicit Gaussian thermal-field assumption and its g^(2)(0)=2 consequence; Chapter 16 §16.1, PDF pp. 685–686, for normal ordering. The local theorem separately proves the quantum geometric-mode calculation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the ideal wavepacket counting postulate for a normalized mode $v$, and let $p_n$ be the resulting count law of a prepared state. Write
$$\mu:=\sum_{n=0}^{\infty}np_n,\qquad F_2:=\sum_{n=0}^{\infty}n(n-1)p_n,\qquad g_v^{(2)}(0):=F_2/\mu^2$$
when $0<\mu<\infty$ and $F_2<\infty$. Let $J_v:\mathcal F_s(\mathbb C v)\widehat\otimes\mathcal F_s(v^\perp)\to\mathcal F_s(\mathcal H_T)$ be the one-mode Fock unitary, let $|n\rangle_v=v^{\otimes n}$ with $|0\rangle_v=1$, and let $\Omega_{v^\perp}$ be the vacuum in $\mathcal F_s(v^\perp)$. Put $\psi_n:=J_v(|n\rangle_v\otimes\Omega_{v^\perp})$. For a unit vector $\psi$, $g_v^{(2)}(0;\psi)$ denotes the postulate's value for the pure density operator $|\psi\rangle\langle\psi|$. For $\alpha\in\mathbb C\setminus\{0\}$ put $\lambda=|\alpha|^2$, $Z_\lambda=\sum_{n=0}^{\infty}\lambda^n/n!$, and define the coherent-mode vector
$$\psi_\alpha:=Z_\lambda^{-1/2}\sum_{n=0}^{\infty}\frac{\alpha^n}{\sqrt{n!}}\psi_n.$$
For $m\ge1$, the number preparation is $\psi_m$. For $0<r<1$, the geometric one-mode state is
$$\rho_r:=(1-r)\sum_{n=0}^{\infty}r^n|\psi_n\rangle\langle\psi_n|.$$
Then the ideal model predictions are
$$g_v^{(2)}(0;\psi_\alpha)=1,\qquad g_v^{(2)}(0;\psi_m)=1-\frac1m,\qquad g_v^{(2)}(0;\rho_r)=2.$$
The final state has the specified single-mode geometric occupation law; these conclusions do not classify all radiation as coherent, number, or thermal.

## Statement references

[[post-qftx-ideal-wavepacket-counting]]

[[lem-qftx-mode-number-pvm]]

[[lem-nrqm-composites-density-and-scalar-spectral-probability]]

[[def-factorial-and-falling-factorial]]

[[def-real-exponential-function-and-e]]

[[thm-geometric-series]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[Glauber (1963)](https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529)

[Steck, Quantum and Atom Optics](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)

## Facts & Assumptions

**Given:** The ideal count law $(p_n)$ of the postulate, a normalized selected mode $v$, and the stated finite-moment hypotheses.

[A1] The ideal wavepacket postulate assigns $p_n=\operatorname{tr}(\rho P_n(v))$, defines $g_v^{(2)}(0)=F_2/\mu^2$, and identifies $F_2$ with the spectral sum for the normally ordered factorial correlation. [[post-qftx-ideal-wavepacket-counting]]

[F1] The one-mode number projections are $P_n(v)$, the unit occupation vector $\psi_n$ has $P_j(v)\psi_n=\mathbf1_{j=n}\psi_n$, and $N_v(N_v-I)=a^\dagger(v)^2a(v)^2$ on the finite-particle core. [[lem-qftx-mode-number-pvm]]

[F2] For real $\lambda$, $\exp(\lambda)=\sum_{n=0}^{\infty}\lambda^n/n!$; for $\lambda>0$ this positive series is finite and at least $1$. [[def-real-exponential-function-and-e]]

[F3] Factorials satisfy $n!=n(n-1)!$ for $n\ge1$ and $n(n-1)/n!=1/(n-2)!$ for $n\ge2$. [[def-factorial-and-falling-factorial]]

[F4] For $0<r<1$, $\sum_{n=0}^{\infty}r^n=1/(1-r)$. [[thm-geometric-series]]

[F5] Nonnegative sums on countable product sets may be regrouped by Tonelli's theorem. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] A unit vector defines a pure density operator, and a countable weighted sum of orthogonal rank-one states with nonnegative weights summing to one is a density operator; its PVM probabilities are the corresponding count law. We use only the supplier's density and scalar-probability clauses, which require Countable Choice. [[lem-nrqm-composites-density-and-scalar-spectral-probability]]

## Proof

1.1 The coefficients of $\psi_\alpha$ are square-summable because their squared norms sum to $Z_\lambda^{-1}\sum_n\lambda^n/n!=1$ by [F2]; the orthogonal one-mode sectors therefore make $\psi_\alpha$ a unit vector and [F6] makes its rank-one state a density operator. Its count probabilities are $p_n=Z_\lambda^{-1}\lambda^n/n!$ by [A1] and [F1]. Shifting indices in the nonnegative exponential series gives
$$\mu=Z_\lambda^{-1}\sum_{n\ge1}\frac{n\lambda^n}{n!}=\lambda,\qquad F_2=Z_\lambda^{-1}\sum_{n\ge2}\frac{n(n-1)\lambda^n}{n!}=\lambda^2,$$
so $g_v^{(2)}(0)=1$. The same calculation shows both required moments are finite. [A1, F1, F2, F3, F6, algebra]

1.2 For $\psi_m$, [F1] gives $p_n=\mathbf1_{n=m}$, hence $\mu=m$ and $F_2=m(m-1)$. Since $m\ge1$, the denominator is positive, and substitution into [A1] gives $g_v^{(2)}(0)=m(m-1)/m^2=1-1/m$. [A1, F1, algebra]

2.1 The weights $(1-r)r^n$ are nonnegative and sum to one by [F4], so [F6] makes $\rho_r$ a density operator and [A1] gives the geometric count law $p_n=(1-r)r^n$. By Tonelli [F5],
$$\left(\sum_{j\ge0}r^j\right)^2=\sum_{i,j\ge0}r^{i+j}=\sum_{n\ge0}(n+1)r^n.$$
Therefore $\sum_{n\ge0}nr^n=(1-r)^{-2}-(1-r)^{-1}=r/(1-r)^2$. Applying Tonelli to the triple product and counting the $(i,j,k)\in\mathbb N_0^3$ with $i+j+k=n-2$ gives
$$r^2\left(\sum_{j\ge0}r^j\right)^3=\sum_{n\ge2}\frac{n(n-1)}2r^n,$$
because that finite set has $\sum_{i=0}^{n-2}(n-1-i)=n(n-1)/2$ elements. Hence $\sum_{n\ge0}n(n-1)r^n=2r^2/(1-r)^3$. Multiplying by $1-r$ gives $\mu=r/(1-r)>0$ and $F_2=2r^2/(1-r)^2<\infty$, so [A1] yields $g_v^{(2)}(0)=2$. [A1, F4, F5, F6, algebra] ∎
