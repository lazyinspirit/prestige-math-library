---
id: lem-nrqm-controlled-dynamics-dyson-truncation-bound
aliases: [nrqm-controlled-dynamics-dyson-truncation-bound]
kind: lemma
domain: mathematics
title: "Dyson truncation bound"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-linearity-of-the-bochner-integral, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, def-countable-choice]
dependency_roles:
  lem-linearity-of-the-bochner-integral: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (quantum dynamics; existence, uniqueness and norm bounds for time-ordered evolution)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Perturbation Expansion pp. 180-182 (the Dyson-type expansion and its truncation as an approximation scheme)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) and adopt the hypotheses and corrected latest-time-left notation of [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]: $H$ is an arbitrary complex Hilbert space, $I=[a,b]$ a nonempty compact interval, $\hbar>0$, and $\mathcal H:I\to\mathcal B(H)$ is norm-continuous with bounded self-adjoint values. Write $A(r)=-i\mathcal H(r)/\hbar$, $K=\sup_{r\in I}\|A(r)\|$, $U_0=I_H$, and $U_{n+1}(t,s)=\int_s^tA(r)U_n(r,s)dr$ with oriented integrals. The norm-convergent sum $U=\sum_{n\ge0}U_n$ is the unitary propagator of that supplier. For $N\in\mathbb N_0$, put $R_N(t,s)=U(t,s)-\sum_{n=0}^NU_n(t,s)$. Then for all $s,t\in I$:

(a) *Exact oriented remainder.*
$$R_N(t,s)=\int_s^t dr_1\int_s^{r_1}dr_2\cdots\int_s^{r_N}dr_{N+1}\,A(r_1)\cdots A(r_{N+1})U(r_{N+1},s).$$
For $N=0$ this means the single integral $\int_s^tA(r_1)U(r_1,s)dr_1$. For $s\le t$, relabeling $t_j=r_{N+2-j}$ gives the corrected ordered-simplex identity
$$R_N(t,s)=\Bigl(\frac{-i}{\hbar}\Bigr)^{N+1}\int_{s<t_1<\cdots<t_{N+1}<t}\mathcal H(t_{N+1})\cdots\mathcal H(t_1)U(t_1,s)\,dt_1\cdots dt_{N+1},$$
where $t_{N+1}$ is outermost, $t_1$ innermost, and the residual propagator is evaluated at the **earliest** integration time on the right. The universal nested formula specifies signs and operator order for $t<s$ as well.

(b) *Truncation bound.* With $\tau=|t-s|$,
$$\|R_N(t,s)\|\le e^{K\tau}\frac{(K\tau)^{N+1}}{(N+1)!}.$$
In fact unitarity under the actual stated self-adjoint hypotheses also gives the stronger bound $\|R_N(t,s)\|\le(K\tau)^{N+1}/(N+1)!$. The original exponential estimate is retained for every $s\le t$.

In particular $\|U(t,s)-I_H-U_1(t,s)\|\le e^{K\tau}(K\tau)^2/2$. If the family is scaled to $\lambda\mathcal H(t)$ with a real coupling $\lambda$, the same conclusion holds with $K$ replaced by $|\lambda|K$, so the first-order error is $O(|\lambda|^2\tau^2)$ uniformly when $|\lambda|K\tau$ remains bounded, with explicit multiplier $e^{|\lambda|K\tau}/2$. The stronger bound has multiplier $1/2$. Both time orientations, negative absolute times, $t=s$, $K=0$, the zero Hilbert space and a singleton $I$ are included.

## Facts & Assumptions

**Given:** CC, the arbitrary Hilbert space and bounded norm-continuous self-adjoint family of the Statement, $A=-i\mathcal H/\hbar$, its finite bound $K$, $N\in\mathbb N_0$, and $s,t\in I$.

[F1] The actual corrected supplier [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] supplies $U_n(t,s)$ for every $s,t\in I$, its oriented recursion, $\|U_n(t,s)\|\le(K|t-s|)^n/n!$, uniformly norm-convergent $U$, joint norm continuity, and $U(t,s)=I_H+\int_s^tA(r)U(r,s)dr$. It proves unitarity for this self-adjoint family on arbitrary $H$ under CC, without a Stone or spectral theorem premise. In particular $\|U(r,s)\|\le1$ (equality when $H\ne\{0\}$) and also $\|U(r,s)\|\le e^{K|r-s|}$.

[F2] The Bochner integrability criterion and norm inequality are [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], and integral linearity is [[lem-linearity-of-the-bochner-integral]]. Continuous operator-valued curves on compact intervals have explicit uniform grid-step approximants and are integrable even if $H$ is nonseparable. Bounded left/right multiplication commutes with their integral by the simple-approximation definition.

[F3] $\|BC\|\le\|B\|\|C\|$, the operator triangle inequality, and $\|A(r)\|\le K$ are [[def-bounded-linear-operator]], [[def-operator-norm]].

## Proof

1.1 [The first remainder and recursive reduction] The supplier's Volterra identity gives $R_0(t,s)=U(t,s)-I_H=\int_s^tA(r)U(r,s)dr$. For $N\ge1$, subtract the finite sum of recursions $\sum_{n=1}^{N}U_n(t,s)=\int_s^tA(r)\sum_{n=0}^{N-1}U_n(r,s)dr$ from that identity. Integral linearity yields $R_N(t,s)=\int_s^tA(r)R_{N-1}(r,s)dr$, for both $t\ge s$ and $t<s$. This does not interchange an infinite sum with an integral. Each integrand is norm-continuous by [F1] and [F3], so the integrals exist by [F2]. [F1, F2, F3, given, algebra]

2.1 [Exact nesting and the residual endpoint] Apply the recursive identity in step 1.1 successively $N$ times and then insert its formula for $R_0$. Bounded left multiplication passes through each integral by [F2], giving the universal nested expression in (a). At its last variable $r_{N+1}$, the remaining factor is exactly $U(r_{N+1},s)$, because the inserted equation is $R_0(r_N,s)=\int_s^{r_N}A(r_{N+1})U(r_{N+1},s)dr_{N+1}$. For $s\le t$, $s\le r_{N+1}\le\cdots\le r_1\le t$, so renaming $t_j=r_{N+2-j}$ puts the product in latest-time-left order and the residual factor at $t_1$. The asserted simplex means precisely these nested integrals, so no unproved Banach-valued product-measure Fubini theorem is needed. This proves the whole identity (a), including $N=0$. [step 1.1, F2, F3, given, construct, algebra]

3.1 [Sign and factorial volume for either time direction] Put $m=N+1$ and $D=t-s$. In step 2.1 substitute $r_j=s+D\xi_j$ successively. The remainder becomes $D^m\int_0^1d\xi_1\int_0^{\xi_1}d\xi_2\cdots\int_0^{\xi_{m-1}}d\xi_m\,A(s+D\xi_1)\cdots A(s+D\xi_m)U(s+D\xi_m,s)$. This is valid for $D<0$: every integral is oriented and contributes its signed $D$, so the overall sign is $D^m$. For $D>0$ the outermost $r_1$ is the latest physical time and the innermost $r_m$ is earliest; for $D<0$ these physical inequalities reverse, while the recursive operator order stays unchanged. Norm estimates take $|D|^m$. The repeated integral of the constant $1$ over $0\le\xi_m\le\cdots\le\xi_1\le1$ is $1/m!$, by integrating one power at each step. At $D=0$ every nested integral and every $R_N$ vanish. [step 2.1, F1, F2, F3, given, construct, algebra]

4.1 [Both explicit remainder estimates] For every variable in step 3.1, $r_m$ lies between $s$ and $t$, so $|r_m-s|\le\tau$. Using [F1], [F2], [F3] and the volume calculation there gives $\|R_N(t,s)\|\le\tau^m K^m e^{K\tau}/m!$. This is (b)'s retained exponential estimate. Using instead the actual supplier's unitarity bound $\|U(r_m,s)\|\le1$ gives $\|R_N(t,s)\|\le(K\tau)^m/m!$. Self-adjointness and unitarity are not new assumptions: they are exactly the family and conclusion in [F1]. The first estimate can also be derived from its factorial series bounds alone, so no sharper norm hypothesis is needed to retain the original bound. [step 3.1, F1, F2, F3, given, algebra]

5.1 [Scaling and boundary cases] Choose $N=1$ in step 4.1 for the first-order error estimate. A real multiple $\lambda\mathcal H$ has the same self-adjoint/norm-continuous class, and its norm bound is $K_\lambda=|\lambda|K$. Substituting that bound gives the displayed scaling estimates; when $|\lambda|K\tau\le M$, the original estimate is at most $e^M|\lambda|^2K^2\tau^2/2$, proving the qualified quadratic assertion with its explicit constant. The $t=s$ case was proved in step 3.1; if $K=0$ the coefficient vanishes identically and all positive-order terms and remainders vanish; if $H=\{0\}$ all operators are zero; and if $a=b$ the sole time pair is diagonal. No construction distinguished positive from negative absolute time. The proof uses only the actual CC bounded Dyson supplier, finite nesting and the Bochner interfaces, with no choice of a Hilbert basis or new AC/spectral/Stone assumption. This completes all the stated claims. [step 1.1, step 2.1, step 3.1, step 4.1, F1, F2, F3, given, algebra] ∎
