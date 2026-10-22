---
id: lem-finite-energy-punctured-euclidean-asd-connections-have-l-four-gauges
kind: lemma
title: "L4 gauges for finite-energy punctured Euclidean ASD connections"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-euclidean-asd-small-energy-curvature-bound
  - lem-small-uniform-curvature-gauges-on-four-dimensional-annuli
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-holder-inequality-for-integrals
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, full §§5–8, pp.20–36"
      url: "https://arxiv.org/pdf/math/0209352"
---

## Statement

Assume full AC. There exist universal $\epsilon,C>0$ such that every smooth $\mathfrak{su}(2)$ connection form $A$ on $B_2(0)\setminus\{0\}\subset\mathbb R^4$ with Euclidean $F_A^+=0$ and $\|F_A\|_{L^2(B_2\setminus\{0\})}\le\epsilon$ admits a smooth gauge $g:B_{1/2}\setminus\{0\}\to SU(2)$ for which
$$B=A^g\in L^4(B_{1/2}),\qquad \|B\|_{L^4(B_{1/2})}\le C\|F_A\|_{L^2(B_2)},\qquad \|F_B\|_{L^2(B_{1/2})}\le\|F_A\|_{L^2(B_2)}.$$
The singleton has measure zero in these norms; no value of $B$ at zero is prescribed. The input includes only finite small curvature energy and the punctured ASD equation, not an assumed small potential gauge. No Coulomb condition or smooth extension across zero is asserted by this lemma.

## Statement references

[[lem-euclidean-asd-small-energy-curvature-bound|Actual small-energy curvature estimate]]

[[lem-small-uniform-curvature-gauges-on-four-dimensional-annuli|Actual angularly controlled annular gauges]]

## Facts & Assumptions

[F1] The proved Euclidean ASD small-energy estimate bounds $\|F\|_{L^\infty(B_{r/2})}$ by $Cr^{-2}\|F\|_{L^2(B_r)}$ below a universal energy threshold ([[lem-euclidean-asd-small-energy-curvature-bound]]).

[F2] If $r^2\|F_A\|_{L^\infty(\{r/2<|x|<2r\})}$ is sufficiently small, the constructed annular gauge has potential at most $Cr\|F_A\|_\infty$. Its full proof supplies the angular holonomy control and quaternionic normalization, not a radial $L^2$ estimate ([[lem-small-uniform-curvature-gauges-on-four-dimensional-annuli]]).

[F3] Smooth nonnegative cutoffs with prescribed concentric inner and outer intervals exist. Holder supplies the product bounds, and monotone convergence justifies the sums of nonnegative annular integrals ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[thm-holder-inequality-for-integrals]], [[thm-monotone-convergence-for-the-integral]]). Full AC is inherited through the actual analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The punctured smooth Euclidean ASD connection, and write $E=\int_{B_2}|F_A|^2$.

1.1 **Finite-overlap annular energies control the curvature pointwise.** Put $r_k=2^{-k}$ for $k\ge1$, $U_k=\{r_k/2<|x|<2r_k\}$, $V_k=\{r_k/4<|x|<4r_k\}$, and $E_k=\int_{V_k}|F_A|^2$. Each point of $B_2\setminus\{0\}$ lies in at most five of the $V_k$, since the eligible dyadic radii lie in an interval with ratio sixteen. Hence $\sum_kE_k\le5E$. For $x\in U_k$, the closed ball of radius $r_k/8$ centered at $x$ lies in $V_k$. If $\epsilon$ is below the threshold of [F1], that estimate gives $|F_A(x)|\le Cr_k^{-2}\sqrt{E_k}$. The same argument works near $\overline U_k$, which is compactly contained in the original punctured domain. Thus [F2] applies uniformly whenever $C\epsilon$ is below its threshold. It constructs a smooth $q_k:U_k\to SU(2)$ with $B_k=A^{q_k}$ and $\|B_k\|_\infty\le Cr_k^{-1}\sqrt{E_k}$. [F1, F2, given, choose, construct, algebra]

2.1 **Aligning adjacent gauges by constants.** On $U_k\cap U_{k+1}=\{r_k/2<|x|<r_k\}$ set $h_k=q_k^{-1}q_{k+1}$. The gauge formula gives $dh_k=h_kB_{k+1}-B_kh_k$, so $|dh_k|\le Cr_k^{-1}(\sqrt{E_k}+\sqrt{E_{k+1}})$. Fix a unit vector $N$ and $p_k=3r_kN/4$. Every point of this overlap can be joined to $p_k$ within the overlap by a radial segment followed by a spherical arc of total length at most $Cr_k$. The fundamental theorem along this path gives $|h_k(x)-h_k(p_k)|\le C(\sqrt{E_k}+\sqrt{E_{k+1}})$. Define constants $\gamma_1=I$ and $\gamma_{k+1}=h_k(p_k)^{-1}\gamma_k$, and put $Q_k=q_k\gamma_k$. The relative maps $H_k=Q_k^{-1}Q_{k+1}=\gamma_k^{-1}h_kh_k(p_k)^{-1}\gamma_k$ therefore satisfy $|H_k-I|\le C(\sqrt{E_k}+\sqrt{E_{k+1}})$ everywhere on the overlap. Constant conjugation preserves the bounds on the potentials $b_k=A^{Q_k}=\gamma_k^{-1}B_k\gamma_k$. [step 1.1, choose, construct, algebra]

2.2 **A locally finite dyadic partition with only adjacent overlaps.** Choose a smooth nonnegative $\psi$ supported in $(1/2,2)$ and equal to one on $[3/4,3/2]$, using [F3]. For $0<\rho<1/2$ set $\psi_k(\rho)=\psi(\rho/r_k)$, $H(\rho)=\sum_{k\ge1}\psi_k(\rho)$, and $\phi_k=\psi_k/H$. The sums are locally finite. At every such radius, a dyadic scale has $\rho/r_k\in[3/4,3/2]$, so $H\ge1$. Only two adjacent $U_k$ can meet at a point, so at most two weights are nonzero, they sum to one, and $|d\phi_k|\le C/\rho$ wherever active. On the band $D_k=\{r_k/2\le|x|\le r_k\}$, only indices $k,k+1$ can be active. The one-frame cases at band endpoints cause no change to these bounds. [F3, step 1.1, construct, algebra]

3.1 **Normalization gives one actual punctured-ball gauge.** Define $T=\sum_k\phi_kQ_k$ on $B_{1/2}\setminus\{0\}$. Each weighted summand is smoothly extended by zero outside its annulus; the support of $\psi$ has a collar inside its defining interval. At a point with active indices $k,k+1$, $Q_k^{-1}T$ is a convex combination of $I,H_k$. By step 2.1, its distance to $I$ is at most $C(\sqrt{E_k}+\sqrt{E_{k+1}})\le C\sqrt E$. Choose the universal $\epsilon$ still smaller so this is less than $1/2$. The same quaternionic matrix computation as in the full proof [F2] gives $T^*T=\lambda^2I$, $\det T=\lambda^2$ and $\lambda>1/2$. Thus $g=T/\lambda$ is a single smooth $SU(2)$ gauge on the entire punctured half-ball. This construction does not require the sequence of constants $\gamma_k$ to converge. [F2, step 2.1, step 2.2, choose, construct, algebra]

4.1 **The patched potential has summable critical norm.** Write $D_AT=dT+AT=\sum_j(d\phi_j)Q_j+\sum_j\phi_jQ_jb_j$. On $D_k$, subtract $Q_k\sum_jd\phi_j=0$ from the first sum. Steps 1.1–2.2 then give $|D_AT|\le Cr_k^{-1}(\sqrt{E_k}+\sqrt{E_{k+1}})$. As in the explicit normalization argument of [F2], skew-Hermitian $A$ cancels from the derivative of the scalar norm, giving $|d\lambda|\le C|D_AT|$. Hence $B=g^{-1}D_Ag$ obeys $|B|\le Cr_k^{-1}(\sqrt{E_k}+\sqrt{E_{k+1}})$ on $D_k$. Since $|D_k|\le Cr_k^4$, $\int_{D_k}|B|^4\le C(E_k^2+E_{k+1}^2)$. The bands cover the punctured half-ball up to measure-zero spheres. Sum and use nonnegativity to obtain $\int_{B_{1/2}}|B|^4\le C\sum_kE_k^2\le C(\sum_kE_k)^2\le CE^2$. This proves the asserted $L^4$ estimate from curvature energy alone. [F2, F3, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 **Curvature and scope.** Differentiating $g^{-1}$ gives $d(g^{-1})=-g^{-1}(dg)g^{-1}$. Substitution in $dB+B\wedge B$ cancels all derivative-of-gauge terms and gives $F_B=g^{-1}F_Ag$ on the punctured ball. Unitarity yields the claimed $L^2$ curvature bound. Assigning an arbitrary value to $B$ at the singleton changes neither norm. All angular control came from the actual uniform-curvature annular theorem and the proved ASD small-energy estimate; no small potential was assumed. This constructs a finite critical potential gauge, while a Coulomb approximation and extension argument remains a separate step. Full AC is inherited through [F1]–[F3]. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source notes

The full Tao–Tian §§5–8, PDF pp.20–36, were read. The proof here is a point-singularity specialization using the newly proved annular angular-control theorem and dyadic constant alignment. It explicitly proves summability of the potential's fourth power, rather than asserting a false general radial curvature-to-potential bound. It does not use the suppressed quadratic cutoff term or nonsmooth supremum cutoff in the external truncation argument. Those terms must be retained in the next approximation and removal step.
