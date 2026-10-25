---
id: def-qftx-critical-abelian-higgs-divisor-data
kind: definition
title: Critical Abelian Higgs fields, winding and divisor data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps: [def-axiom-of-choice]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
dependency_level: 0
axiom_base: "ZF + full Axiom of Choice; this definition makes no choice operation."
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons, Lecture 3: Vortices"
      url: "https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf"
      locator: "§3.1, printed pp. 70–71; §§3.2–3.3, printed pp. 72–75. The lecture supplies the critical model, winding/flux, Bogomolny equations and position moduli, not the analytic existence proof."
    - title: "Shouxin Chen and Yisong Yang, Existence of Multiple Vortices in Supersymmetric Gauge Field Theory"
      url: "https://arxiv.org/pdf/1203.3071"
      locator: "§§2–3 and 5–7, PDF pp. 2–20. The U(1) scalar reduction is used only as a normalization cross-check; its exact field normalization is recorded in batch coverage."
---

## Definition

Let $e>0$ and $\xi>0$ be real parameters, set $\kappa=2e^2\xi$, identify the oriented Euclidean plane $\mathbb R^2$ with $\mathbb C$ using coordinates $(x_1,x_2)$, and use the Hodge star convention $*dx_1=dx_2$, $*dx_2=-dx_1$. A field pair is a smooth real one-form $A=A_1dx_1+A_2dx_2$ on the trivial complex line over $\mathbb R^2$ and a smooth function $q:\mathbb R^2\to\mathbb C$. Its unit-charge covariant derivative is $D_Aq=dq-iAq$, its curvature is $F_A=dA=B\,dx_1\wedge dx_2$ with $B=\partial_1A_2-\partial_2A_1$, and its transverse energy is
$$E(A,q)=\int_{\mathbb R^2}\left(\frac{B^2}{2e^2}+|D_{A,1}q|^2+|D_{A,2}q|^2+\frac{e^2}{2}(|q|^2-\xi)^2\right)dx_1dx_2.$$
The pair has finite energy when this nonnegative Lebesgue integral is finite. An admissible boundary sector consists of an integer $n$, a radius $R_0$, and smooth functions $\rho>0$ and real $2\pi$-periodic $\phi$ on $r>R_0$ such that $q(r,\theta)=\rho(r,\theta)e^{i(n\theta+\phi(r,\theta))}$ and $\rho\to\sqrt\xi$, $\phi\to0$ uniformly as $r\to\infty$; $n$ is its winding. A gauge transformation is $(q,A)\mapsto(e^{i\chi}q,A+d\chi)$ for a smooth real-valued function $\chi$ on $\mathbb R^2$.

For $n\ge0$, the positive critical first-order equations are $(D_{A,1}+iD_{A,2})q=0$ and $B=e^2(\xi-|q|^2)$; for $n\le0$ the negative equations are $(D_{A,1}-iD_{A,2})q=0$ and $B=-e^2(\xi-|q|^2)$. The adjective critical refers to the displayed energy normalization and these square-saturating equations. For a positive-winding solution, its divisor is an effective finite divisor $D=\sum_{j=1}^Jm_j[z_j]$, where the $z_j\in\mathbb C$ are distinct, the multiplicities $m_j$ are positive integers, $q$ vanishes exactly at the $z_j$, and near each $z_j$ it has the local form $q(z)=(z-z_j)^{m_j}g_j(z)$ with $g_j$ smooth and nonzero there. The degree is $N=\sum_jm_j$; the empty divisor has degree zero. Negative winding uses the conjugate field and reversed orientation, with $N=|n|$.

On the complement of the divisor, define $h=\log(|q|^2/\xi)$. The associated scalar Taubes datum is a real function smooth away from the divisor such that $h-2m_j\log|z-z_j|$ extends smoothly across every $z_j$, $h\to0$ at infinity, and, as a distribution,
$$\Delta h+\kappa(1-e^h)=4\pi\sum_{j=1}^Jm_j\delta_{z_j},\qquad \langle\delta_z,\psi\rangle=\psi(z)\quad(\psi\in C_c^\infty(\mathbb R^2)).$$
When the limit exists, the magnetic flux is $\Phi(A)=\lim_{R\to\infty}\int_{|x|<R}B(x)\,dx_1dx_2$. These are mathematical configuration and normalization conventions; they make no assertion that a physical model describes nature.

## Definition references

[Critical model, square completion and winding/flux conventions (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent scalar reduction and full-plane existence treatment (Chen–Yang, §§2–7)](https://arxiv.org/pdf/1203.3071)
