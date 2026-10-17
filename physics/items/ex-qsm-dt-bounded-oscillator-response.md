---
id: ex-qsm-dt-bounded-oscillator-response
kind: example
title: Projected oscillator transition response
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-qsm-trace-gibbs-variational
  - thm-qsm-dt-strong-domain-response
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
  thm-qsm-dt-strong-domain-response: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Steven H. Simon, Lecture Notes for Quantum Matter, Chapter 8 §8.2, printed pp. 118–122
      url: https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
---

## Example

Let $\mathcal H=\ell^2(\mathbb N_0)$ with standard orthonormal basis $(e_n)_{n\ge0}$. Fix $\omega>0$ in s$^{-1}$ and $\hbar>0$ in J s. Define the diagonal Hamiltonian
$$He_n=\hbar\omega(n+\tfrac12)e_n,\qquad D(H)=\{c\in\ell^2:\sum_{n\ge0}(n+\tfrac12)^2|c_n|^2<\infty\}.$$
For real $b_0\ne0$ in the chosen observable unit, define the bounded transition observable $B=b_0(|e_0\rangle\langle e_1|+|e_1\rangle\langle e_0|)$ and set $A=B$. Let $\beta>0$ in J$^{-1}$, $q=e^{-\beta\hbar\omega}$, and $\Delta=\hbar\omega$. On a finite interval $[0,T]$ with $T>0$ in s, drive with a constant real field $h(t)=h_0$ and dimensionless $\epsilon\in\mathbb R$, where $h_0B$ has unit J. This is a bounded projection between the first two oscillator levels, not the unbounded oscillator position.

## Facts & Assumptions

**Given:** The diagonal operator and domain, $\omega>0$, $\hbar>0$, $\beta>0$, $b_0\ne0$, and the finite control interval and field above.

[A1] [[def-axiom-of-choice]]: the trace-Gibbs supplier uses full Choice for its unbounded spectral calculus.

[F1] [[thm-qsm-trace-gibbs-variational]]: if $H$ is self-adjoint and $e^{-sH}$ is trace class on an open positive interval, then its Gibbs matrix is a faithful normal density.

[F2] [[thm-qsm-dt-strong-domain-response]]: for bounded self-adjoint $B$ preserving $D(H)$ with bounded extension of $[H,B]$, the interaction propagator preserves the graph domain, solves the strong Schrödinger equation, and the bounded-observable response formula holds.

## Verification


**Proof technique:** diagonal spectral calculation followed by the graph-domain response theorem.

**Given:** [A1], [F1], [F2], and the oscillator/control data in the Example.

1.1 Finite-support sequences are dense in $\ell^2$, so $D(H)$ is dense. The diagonal real operator is symmetric. If $y\in D(H^*)$, testing the adjoint relation against each $e_n$ forces $(H^*y)_n=\hbar\omega(n+\tfrac12)y_n$; this vector belongs to $\ell^2$ exactly when $\sum_n(n+\tfrac12)^2|y_n|^2<\infty$. Thus $D(H^*)=D(H)$ and $H^*=H$. [given, construct, algebra]


2.1 The Gibbs eigenvalues are $(1-q)q^n$, since $\sum_{n\ge0}e^{-\beta\hbar\omega(n+1/2)}=e^{-\beta\hbar\omega/2}/(1-q)$; hence $Z_\beta=e^{-\beta\hbar\omega/2}/(1-q)$ is finite for every $\beta>0$ and [F1] applies. The Gibbs matrix is positive trace one and commutes with $U(t)$ because both are functions of $H$. The operator $B$ has norm $|b_0|$; its image lies in $\operatorname{span}\{e_0,e_1\}\subset D(H)$, so it maps $D(H)$ into itself. Its commutator $C=[H,B]$ is the finite-rank bounded operator $Ce_0=\Delta b_0e_1$, $Ce_1=-\Delta b_0e_0$, $Ce_n=0$ for $n\ge2$. [given, A1, F1, step 1.1, algebra]


3.1 Since $B$ only connects $e_0$ and $e_1$, the unperturbed expectation $\operatorname{Tr}(\sigma_\beta\alpha_t(B))$ is zero. Direct multiplication of the two nonzero matrix blocks gives $\operatorname{Tr}(\sigma_\beta[\alpha_t(B),B])=-2i b_0^2(1-q)^2\sin(\omega t)$, so $R_{BB}(t)=2b_0^2(1-q)^2\sin(\omega t)/\hbar$. The constant-field convolution in [F2] is therefore $$\epsilon h_0\int_0^tR_{BB}(u)\,du=\frac{2\epsilon h_0b_0^2(1-q)^2}{\Delta}(1-\cos(\omega t)).$$ Here $C_T=2|h_0||b_0|T/\hbar$; the response theorem also bounds the omitted term by $|b_0|(|\epsilon|C_T)^2e^{|\epsilon|C_T}/2$. [given, F2, step 2.1, algebra]


4.1 The two-dimensional space $V=\operatorname{span}\{e_0,e_1\}$ and its orthogonal complement are invariant under the constant controlled Hamiltonian. Put $d=\Delta/2>0$, $g=\epsilon h_0b_0$, and $R=(d^2+g^2)^{1/2}>0$. On $V$, let $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $Z=\operatorname{diag}(1,-1)$. Then $H-\epsilon h_0B=\Delta I-dZ-gX$ and $(dZ+gX)^2=R^2I$. Its exact propagator on this block is therefore $e^{-it\Delta/\hbar}[\cos(Rt/\hbar)I+i\sin(Rt/\hbar)(dZ+gX)/R]$. The initial diagonal block has entries $p_0=1-q$ and $p_1=(1-q)q$, with $p_0-p_1=(1-q)^2$; the complementary levels contribute zero to the expectation of $B$. Multiplying these two-by-two matrices gives the exact expectation $$\operatorname{Tr}(\rho_\epsilon(t)B)=\frac{b_0gd(1-q)^2}{R^2}\bigl(1-\cos(2Rt/\hbar)\bigr).$$ For $\epsilon=0$ this is zero, and its first derivative at $\epsilon=0$ is the coefficient computed in step 3.1. The formula holds on every stated finite control interval. For the consistent extension using the same constant control for all $t\ge0$, it is nonconstant and periodic whenever $\epsilon h_0b_0\ne0$, so the exact expectation has no infinite-time limit; this conclusion follows from the exact block formula, not from extrapolating the finite-time remainder. This concerns the bounded projected transition observable, not oscillator position or an empirical measurement. [given, step 2.1, step 3.1, algebra] ∎