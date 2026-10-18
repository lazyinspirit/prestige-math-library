---
id: lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1
kind: lemma
title: Hydrostatic HLL face fluxes converge under strong state and velocity convergence
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe05-shallow-water-balance-law
  - def-pe05-hydrostatic-hll-scheme
  - def-countable-choice
  - thm-dominated-convergence
  - thm-l-one-convergence-implies-convergence-in-measure
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-riesz-subsequence-theorem-for-convergence-in-measure
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
justified_by: []
proof_strategy: direct
axiom_use: "Assume only AC_omega, used through the published spatial translation-continuity theorem and the finite-measure property on bounded sets. The L1 subsequence argument is choice-free; no DC or full AC is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Full 143-page PDF; complete Chapter 3, §§3.4.1 and 3.4.3, PDF pp. 94–99. Its scalar Lax–Wendroff statement is not used as a system/source theorem."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume Methods"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "Complete six-page note; pp. 1–2, cell-average states and shared interface fluxes."
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §2.1, equations (2.9)–(2.16), printed pp. 2052–2054."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $d_k,\tau_k>0$ tend to zero, set $I_i^k=[id_k,(i+1)d_k)$, $x_i^k=(i+\tfrac12)d_k$, $t_n^k=n\tau_k$, and $J_n^k=[t_n^k,t_{n+1}^k)$, and let $b\in C^1(\mathbb R)$ be locally Lipschitz. On each cell-time slab let $h_k,u_k$ be piecewise constant, with $h_k\ge0$, $u_k=0$ when $h_k=0$, and $m_k=h_ku_k$. Suppose $h_k\to h$ and $u_k\to u$ strongly in $L^1_{\rm loc}(\mathbb R\times(0,T))$, $u=0$ almost everywhere where $h=0$, and $h_k,|u_k|$ are locally uniformly bounded. Let $\mathcal F_k(x,t)=\widehat F_{i+1/2}^{k,n}$ for $(x,t)\in I_i^k\times J_n^k$, with face flux from [[def-pe05-hydrostatic-hll-scheme]] and bed samples $b(x_i^k)$. Then
$$\mathcal F_k\longrightarrow F(h,hu)\quad\text{strongly in }L^1_{\rm loc}(\mathbb R\times(0,T)).$$
The primitive-velocity convergence and uniform velocity bound are included because the assigned wave-speed formula uses $m/h$ on wet states, which is not continuous at a dry state as a function of $(h,m)$ alone.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the mesh and bed convention, local uniform bounds, strong local $L^1$ convergence of $h_k,u_k$, and the hydrostatic HLL face flux.

[A1] $\mathrm{AC}_\omega$ is countable choice ([[def-countable-choice]]).

[F1] [[def-pe05-hydrostatic-hll-scheme]]: adjacent states are reconstructed by clipping depths against the maximum bed; face velocities are retained when reconstructed depth is positive and set to zero at reconstructed dry states; the HLL speed and flux branches are the displayed ones.

[F2] Under $\mathrm{AC}_\omega$, spatial translations are continuous in $L^1(\mathbb R^2)$ ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]]).

[F3] Under $\mathrm{AC}_\omega$, bounded measurable subsets of $\mathbb R^2$ have finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F4] Strong $L^1$ convergence implies convergence in measure; every sequence converging in measure has a subsequence converging almost everywhere ([[thm-l-one-convergence-implies-convergence-in-measure]], [[thm-riesz-subsequence-theorem-for-convergence-in-measure]]).

[F5] Almost-everywhere convergence under an integrable majorant implies $L^1$ convergence ([[thm-dominated-convergence]]).

## Proof

1.1 Fix a compact space-time rectangle $Q$ and a fixed compact enlargement $Q'$ containing $Q$ and every spatial translate $Q+d_k$ for all sufficiently large $k$. Choose local bounds $H,M$ so that $0\le h_k\le H$ and $|u_k|\le M$ on $Q'$. Strong local $L^1$ convergence implies the same bounds for $h,u$ almost everywhere on $Q'$: the sum $|h_k-h|+|u_k-u|$ tends to zero in $L^1(Q')$, so [F4] gives a subsequence on which both converge almost everywhere and inherit the bounds. By [F3], multiplying $h,u$ by the indicator of $Q'$ therefore gives $L^1(\mathbb R^2)$ functions. The given strong convergence gives $h_k\to h$ and $u_k\to u$ in $L^1(Q)$. Applying [F2] to the cutoffs shows $h(\cdot+d_k,\cdot)\to h$ and $u(\cdot+d_k,\cdot)\to u$ in $L^1(Q)$. Strong local convergence on $Q'$ and the triangle inequality then show $h_k(\cdot+d_k,\cdot)\to h$ and $u_k(\cdot+d_k,\cdot)\to u$ in $L^1(Q)$ as well. [A1, F2, F3, F4, given, algebra]

2.1 Let $L$ be a Lipschitz constant for $b$ on the spatial enlargement, and write $h_k^+(x,t)=h_k(x+d_k,t)$ and $u_k^+(x,t)=u_k(x+d_k,t)$. Hydrostatic clipping changes either adjacent depth by at most $Ld_k$. Take any subsequence of $k$. By step 1.1, the sum of the four errors $|h_k-h|+|u_k-u|+|h_k^+-h|+|u_k^+-u|$ converges to zero in measure on $Q$; [F4] gives a further subsequence on which all four errors tend to zero almost everywhere. At a point where $h>0$, both cell depths are eventually larger than $Ld_k$, so neither reconstructed state is clipped to zero and both reconstructed velocities converge to $u$. At a point where $h=0$, the hypothesis gives $u=0$ and both cell velocities converge to zero; resetting either velocity to zero when its reconstructed depth vanishes therefore still gives convergence to $u$. The reconstructed depths in both states converge to $h$ as well. Thus along this common further subsequence both reconstructed primitive states converge almost everywhere to $(h,u)$. Since the starting subsequence was arbitrary, every subsequence has such a further subsequence. [F1, F4, step 1.1, construct]

3.1 At a wet limit state $h>0$, the two face inputs tend to the same $(h,hu)$; the left, middle and right HLL branches all tend to $F(h,hu)$, and the formulas agree at the branch boundaries. At a dry limit state, $h=0$ and $u=0$, so both reconstructed fluxes and both speeds tend to zero. In the middle branch write $\alpha=a_R$, $\beta=-a_L$; its equivalent formula is $\widehat F=(\alpha F_L^*+\beta F_R^*)/(\alpha+\beta)-[\alpha\beta/(\alpha+\beta)](U_R^*-U_L^*)$. Here $\alpha\beta/(\alpha+\beta)\le\max(\alpha,\beta)$, which tends to zero at the dry state, while $F_L^*,F_R^*,U_L^*,U_R^*$ tend to zero. The outer branches also tend to zero. Thus along the almost-everywhere convergent further subsequence from step 2.1, the HLL flux tends almost everywhere to $F(h,hu)$. The same equivalent formula and $\alpha,\beta\le M+\sqrt{gH}$ give a uniform bound on the fluxes on $Q$. [F1, step 2.1, algebra]

4.1 Starting from any subsequence, step 2.1 supplies a further subsequence with almost-everywhere convergence of both face inputs; step 3.1 gives almost-everywhere convergence of its fluxes and a uniform bound. Since $Q$ has finite measure by [F3], [F5] yields $L^1(Q)$ convergence along that further subsequence. If the full flux sequence failed to converge in $L^1(Q)$, some subsequence would stay a fixed positive distance from $F(h,hu)$, contradicting this property. Therefore $\mathcal F_k\to F(h,hu)$ in $L^1(Q)$. As $Q$ was arbitrary, the convergence is local. [F3, F5, step 2.1, step 3.1, algebra] ∎
