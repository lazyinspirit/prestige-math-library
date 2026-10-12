---
id: thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
aliases: [nrqm-fock-and-equilibrium-fixed-mode-number-law]
kind: theorem
domain: mathematics
title: "Fixed-mode number law"
status: draft
origin: pipeline
dependency_level: 7
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, thm-nrqm-fock-and-equilibrium-number-operator-domain, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-ratio-test, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-ratio-test: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.2 and Question 3 p. 7 (single-mode creation and annihilation operators, oscillator coefficients)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Section 14.2 pp. 220-222 (coherent states and their number distribution)"
      url: "http://web.archive.org/web/20240421090356/http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathbb H:=\mathbb C$ with its standard inner product (linear in the first
argument), let $F(\mathbb C)$ be its Fock space as in
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]], let
$e_n\in F(\mathbb C)$ be the unit vector supported in coordinate $n$ (so
$(e_n)_{n\in\mathbb N}$ is a complete orthonormal family of $F(\mathbb C)$),
let $N$ be the number operator and let $A_\pm(1)$ be the maximal creation and
annihilation operators of
[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] for the vector
$1\in\mathbb C$. Then:

(a) *oscillator coefficients*: for every $n\in\mathbb N$,
$$A_+(1)e_n=\sqrt{n+1}\,e_{n+1},\qquad A_-(1)e_n=\sqrt n\,e_{n-1}\ (n\ge1),\qquad A_-(1)e_0=0;$$

(b) *coherent vectors*: for every $z\in\mathbb C$ the series
$$\psi_z:=e^{-|z|^2/2}\sum_{n\in\mathbb N}\frac{z^n}{\sqrt{n!}}\,e_n$$
converges absolutely in $F(\mathbb C)$
([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]),
$\|\psi_z\|=1$, $\psi_z\in D(A_-(1))$ with
$$A_-(1)\psi_z=z\,\psi_z,$$
and for all $z,w\in\mathbb C$,
$$\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2+\overline z w};$$

(c) *number law*: for every $n\in\mathbb N$,
$$\bigl|\langle e_n,\psi_z\rangle\bigr|^2=e^{-|z|^2}\frac{|z|^{2n}}{n!},$$
and $\sum_{n\in\mathbb N}|\langle e_n,\psi_z\rangle|^2=1$.

The numbers in (c) are squared moduli of overlaps of unit vectors; identifying
them with outcome probabilities of a number measurement requires a separately
adopted measurement postulate, and no such physical claim is made here.

## Facts & Assumptions

**Given:** the one-dimensional Hilbert space $\mathbb C$ with its standard inner product, the Fock space $F(\mathbb C)$ with complete orthonormal family $(e_n)_{n\in\mathbb N}$, the maximal operators $A_\pm(1)$ and the number operator $N$ on $F(\mathbb C)$, and $z,w\in\mathbb C$, $n\in\mathbb N$.

[F1] $F(\mathbb C)$ is a Hilbert space with $\langle e_m,e_n\rangle=\delta_{mn}$ and $\|\psi\|^2=\sum_n|\langle e_n,\psi\rangle|^2$, and it is complete so that every absolutely convergent series converges ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F2] For $\mathbb H=\mathbb C$ one has $\mathbb C^{\otimes m}=\mathbb C$, $P_+^{(m)}=\mathrm{id}$ and $\operatorname{ran}P_+^{(m)}=\mathbb C$ for every $m$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]]).

[F3] $A_\pm(1)$ are closed operators with $A_+(1)e_m=\sqrt mP_+^{(m)}(1\otimes e_{m-1})$ and $A_-(1)e_m=\sqrt{m+1}\Psi_1^{(m)}(e_{m+1})$ for the elementary unit vectors ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]).

[F4] For every $z\in\mathbb C$ the series $\sum_n z^n/n!$ converges absolutely, so its value $\exp z$ is defined and the partial sums of $\sum_n|z|^{2n}/n!$ converge to $\exp(|z|^2)$ ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]).

## Proof

1.1 [Oscillator coefficients] By [F2], $1\otimes e_{m-1}$ is the unit vector of the $m$-th tensor power and $P_+^{(m)}=\mathrm{id}$, so [F3] gives that the coordinate-$m+1$ entry of $A_+(1)e_m$ is $\sqrt{m+1}$ and all other coordinates vanish, that is $A_+(1)e_m=\sqrt{m+1}e_{m+1}$; here $e_m$ denotes the unit vector of the tensor power $\mathbb C^{\otimes m}$ and of the Fock sector simultaneously. Similarly, since $\Psi_1^{(m)}:\mathbb C\to\mathbb C$ is multiplication by $\langle1,1\rangle=1$, $A_-(1)e_m=\sqrt{m+1}e_{m-1}$ for $m\ge1$ and $A_-(1)e_0=0$. This is (a). [F2, F3, algebra]

1.2 [Convergence and normalization] Let $z\in\mathbb C$ and $S_N:=e^{-|z|^2/2}\sum_{n\le N}z^n/\sqrt{n!}\,e_n$. Orthogonality of the $e_n$ gives $\|S_N-S_M\|^2=e^{-|z|^2}\sum_{M<n\le N}|z|^{2n}/n!$, and $\sum_n|z|^{2n}/n!=\exp(|z|^2)$ by [F4], so $(S_N)$ is Cauchy and converges in the complete space $F(\mathbb C)$ to a vector $\psi_z$; moreover $\|\psi_z\|^2=\lim_N\|S_N\|^2=e^{-|z|^2}\exp(|z|^2)=1$, so $\|\psi_z\|=1$. Convergence is absolute because the ratio of consecutive moduli of $\sum_n|z|^n/\sqrt{n!}$ is $|z|/\sqrt{n+1}\to0$, so that series converges by the ratio test ([[thm-ratio-test]]); and $\sum_n|z|^{2n}/n!=\exp(|z|^2)$ is the exponential series of the real number $|z|^2\ge0$ ([F4]). [F1, F4, algebra]

2.1 [Annihilation eigenvalue] Every finite combination $S_N\in F_0$ lies in the domain of the closed operator $A_-(1)$, and $A_-(1)S_N=e^{-|z|^2/2}\sum_{1\le n\le N}z^n/\sqrt{n!}\sqrt n\,e_{n-1}=z\,e^{-|z|^2/2}\sum_{0\le m\le N-1}z^m/\sqrt{m!}\,e_m\to z\psi_z$ by step 1.2. Since $S_N\to\psi_z$ and $A_-(1)$ is closed, $\psi_z\in D(A_-(1))$ and $A_-(1)\psi_z=z\psi_z$. [F3, step 1.1, step 1.2, algebra]

2.2 [Overlaps and the number law] For $z,w\in\mathbb C$, the series $\psi_z$ and $\psi_w$ have absolutely convergent coordinate expansions, so the inner product may be computed termwise: $\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2}\sum_n\overline{(z^n)}w^n/n!=e^{-(|z|^2+|w|^2)/2+\overline zw}$, the last equality by the product formula for the exponential series of $\overline zw$. In particular $\|\psi_z\|^2=\langle\psi_z,\psi_z\rangle=e^{-|z|^2+|z|^2}=1$. Since $|\langle e_n,\psi_z\rangle|^2=\bigl|e^{-|z|^2/2}\overline{z}^n/\sqrt{n!}\bigr|^2=e^{-|z|^2}|z|^{2n}/n!$ and $\sum_n|z|^{2n}/n!=\exp(|z|^2)$, the weights in (c) sum to $1$. [F1, F4, step 1.2, algebra]

3.1 [Conclusion and scope] Steps 1.1-2.2 prove (a), (b) and (c); the square roots $\sqrt{n!}$ and $\sqrt{n}$ are the positive real roots. The final statement records that no measurement postulate, and hence no probability interpretation of the displayed weights, is asserted; the Fock vectors and the eigenvalue relation are purely mathematical. [step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
