---
id: thm-qsm-dt-gibbs-jump
kind: theorem
title: Connected Gibbs jump generators satisfy detailed balance
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-qsm-dt-gns-detailed-balance
  - thm-qsm-dt-gksl-sufficient
  - thm-qsm-dt-detailed-balance-gap
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
dependency_roles:
  def-qsm-dt-gns-detailed-balance: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
  thm-qsm-dt-detailed-balance-gap: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs, Chapters 2–3
      url: https://www.stat.berkeley.edu/~aldous/RWG/book.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §2
      url: https://arxiv.org/pdf/1609.01254
---

## Statement

Let $d\geq2$, let $E=\{1,\ldots,d\}$, let $E_a\in\mathbb R$ be finite energies in joules, and let $\beta>0$ have units joule$^{-1}$. Define

$$Z_\beta:=\sum_{a\in E}e^{-\beta E_a},\qquad \pi_a:=Z_\beta^{-1}e^{-\beta E_a}.$$

For each $a\ne b$, let $w_{ab}\geq0$ be a rate in seconds$^{-1}$ satisfying Gibbs detailed balance $\pi_aw_{ab}=\pi_bw_{ba}$, and assume the undirected graph with edge $\{a,b\}$ whenever $w_{ab}>0$ is connected. On $\mathcal H=\mathbb C^d$, fix an orthonormal energy basis $(|a\rangle)$, set $H_{\rm s}=\sum_aE_a|a\rangle\langle a|$, and define $L_{ab}=\sqrt{w_{ab}}|b\rangle\langle a|$ for $a\ne b$. Fix $\hbar>0$ in joule-seconds. For real functions $f,g:E\to\mathbb R$, define $\langle f,g\rangle_\pi:=\sum_a\pi_af_ag_a$, and define the row-generator action on column observables by $(Wf)_a:=\sum_{b\ne a}w_{ab}(f_b-f_a)$. Let

$$\sigma:=\sum_a\pi_a|a\rangle\langle a|,\qquad r_a:=\sum_{b\ne a}w_{ab}.$$

Use the finite GKSL generator with Hamiltonian $H_{\rm s}$ and the jump matrices $L_{ab}$. Its observable dissipator $D$ is self-adjoint for the $\sigma$-GNS inner product of [[def-qsm-dt-gns-detailed-balance]], $H_{\rm s}$ commutes with $\sigma$, and $\ker D=\mathbb C I$. On diagonal observables, $W$ is self-adjoint on $L^2(E,\pi)$ with constants as its kernel; for $d\geq2$ its restriction to $\pi^\perp:=\{f:E\to\mathbb R:\sum_a\pi_af_a=0\}$ has a positive spectral gap $\gamma_{\rm cl}$. Thus the generator satisfies the specified finite GNS detailed-balance convention and the generic gap conclusion of [[thm-qsm-dt-detailed-balance-gap]] applies. This claim does not assert a microscopic bath limit.

## Facts & Assumptions

**Given:** $d\geq2$, the energy basis, $E_a$, $\beta>0$, and rates $w_{ab}$ satisfying the finite connected Gibbs detailed-balance hypotheses above.

[F1] [[def-qsm-dt-gns-detailed-balance]]: the observable dissipator is $D(A)=\sum_j(L_j^*AL_j-\frac12\{L_j^*L_j,A\})$; GNS detailed balance means $D$ is self-adjoint for $\operatorname{Tr}(\sigma B^*A)$ and the Hamiltonian commutes with $\sigma$.

[F2] [[thm-qsm-dt-gksl-sufficient]]: the finite GKSL generator determined by $H_{\rm s}$ and the finite family $L_{ab}$ generates CPTP maps.

[F3] [[thm-qsm-dt-detailed-balance-gap]]: if a faithful finite GNS detailed-balance model has $\ker D=\mathbb C I$, then $D|_{\mathcal M_0}$ has a strictly positive gap and its semigroup has the stated exponential relaxation and correlation bounds.

[F4] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have an orthonormal eigenbasis and the weighted state form is an inner product when the density is faithful.

[F5] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: finite traces are cyclic.

## Proof

1.1 The finite sum $Z_\beta$ is strictly positive, so each $\pi_a>0$ and $\sum_a\pi_a=1$. Hence $\sigma>0$, $\operatorname{Tr}\sigma=1$, and $[H_{\rm s},\sigma]=0$. The finite GKSL semigroup exists by [F2]. [given, F2, algebra]

1.2 Put $R=\sum_{x\ne y}L_{xy}^*L_{xy}=\sum_a r_a|a\rangle\langle a|$. For a diagonal density $\rho=\sum_a p_a|a\rangle\langle a|$, $L_{xy}\rho L_{xy}^*=w_{xy}p_x|y\rangle\langle y|$, while the anticommutator contributes $-r_ap_a|a\rangle\langle a|$. Summing entries gives the Schrödinger population equation
$$
\dot p_a=\sum_{b\ne a}(p_bw_{ba}-p_aw_{ab}),
$$
For a diagonal observable $f=\sum_a f_a|a\rangle\langle a|$, direct multiplication gives
$$
D(f)=\sum_a\left(\sum_{b\ne a}w_{ab}(f_b-f_a)\right)|a\rangle\langle a|,
$$
so its diagonal action is exactly $W$.
For $a\ne b$, every gain term $L_{xy}|a\rangle\langle b|L_{xy}^*$ vanishes; the $R$ anticommutator contributes $-(r_a+r_b)|a\rangle\langle b|/2$, and the Hamiltonian commutator contributes $-i(E_a-E_b)|a\rangle\langle b|/\hbar$. Thus the coherence equation is
$$
\dot\rho_{ab}=\left(-\frac{i(E_a-E_b)}{\hbar}-\frac{r_a+r_b}{2}\right)\rho_{ab}.
$$
For $c_{ab}:=\pi_aw_{ab}=c_{ba}$ and sums over $a\ne b$, the cross terms satisfy $\sum_{a\ne b}c_{ab}f_bg_a=\sum_{a\ne b}c_{ab}f_ag_b$ after swapping $a,b$, so $\langle Wf,g\rangle_\pi=\langle f,Wg\rangle_\pi$. Symmetrizing the quadratic form gives
$$
-\langle Wf,f\rangle_\pi=\frac12\sum_a\sum_{b\ne a}\pi_aw_{ab}|f_b-f_a|^2,
$$
so $W$ is self-adjoint on the diagonal subspace. [given, F1, F5, algebra]

2.1 For $a\ne b$, direct multiplication with diagonal $\sigma$ gives $\langle |a\rangle\langle b|,|c\rangle\langle d|\rangle_\sigma=0$ unless $(a,b)=(c,d)$, and $\||a\rangle\langle b|\|_\sigma^2=\pi_b$. Also each jump gain $L_{xy}^*|a\rangle\langle b|L_{xy}$ is zero when $a\ne b$, and the anticommutator with $R$ gives $D(|a\rangle\langle b|)=-(r_a+r_b)|a\rangle\langle b|/2$. Diagonal and off-diagonal subspaces are orthogonal. Together with the diagonal self-adjointness from step 1.2, these real eigenvalues prove that $D$ is self-adjoint on all of $M_d(\mathbb C)$. [F1, F4, step 1.2, algebra]

3.1 Connectivity and $d\geq2$ imply $r_a>0$ for each $a$, so every off-diagonal matrix unit has a strictly negative $D$-eigenvalue. The Dirichlet identity in step 1.2 vanishes only when $f_a=f_b$ along every positive-rate edge; connectedness then forces $f$ to be constant. Therefore the diagonal kernel is $\mathbb C I$, the off-diagonal kernel is zero, and $\ker D=\mathbb C I$. Applying the finite spectral theorem [F4] to the self-adjoint $W|_{\pi^\perp}$ shows its finite list of eigenvalues is strictly negative; their minimum absolute value is $\gamma_{\rm cl}>0$. [given, F1, F4, step 1.2, step 2.1, algebra]

4.1 Steps 1.1, 1.2, 2.1, and 3.1 verify every hypothesis of [[def-qsm-dt-gns-detailed-balance]] and [F3]. Applying [F3] yields the positive gap, exponential relaxation, trace-norm bound, and absolutely integrable centered correlations for this Gibbs jump generator. [F1, F3, step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

This is a finite mathematical rate model. Gibbs detailed balance specifies a stationary state and a symmetric generator; it does not derive the rates from a microscopic reservoir or establish that a physical system realizes this model.
