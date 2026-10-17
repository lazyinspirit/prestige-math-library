---
id: lem-emg-maxwell-observer-stress
kind: lemma
title: "Maxwell stress tensor in an observer frame"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-emg-local-potentials-and-circle-data
  - def-emg-lorentzian-forms
  - lem-emg-circle-connection-gluing
  - lem-emg-maxwell-action-variation
  - lem-emg-observer-field-decomposition
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 4.5.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "Section 4.5.3, Maxwell metric variation and stress tensor (equations 4.191 and 4.198), followed by the flat-frame energy density."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 1, electromagnetic stress tensor (1.111) and its energy density, printed pp. 30–31 (PDF pp. 36–37); chapter 7, Einstein–Maxwell stress and source-free field equations (7.107)–(7.109), printed pp. 201–202 (PDF pp. 207–208)."
---

## Statement

Let $(M,g,N,o)$ be the smooth, boundaryless, oriented and time-oriented
Lorentzian four-manifold of [[def-emg-lorentzian-forms]]. Let $U\subseteq M$
be open, let $n$ be a smooth observer congruence on $U$, and let $F$ be a
smooth real two-form. Fix $c,\mu_0>0$ and
$\epsilon_0:=(\mu_0c^2)^{-1}$. Assume the fixed-sector variational hypotheses
and tensor formula supplied conditionally by
[[lem-emg-maxwell-action-variation]], namely

$$T_{\mathrm{EM},ab}:=\frac{1}{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$

For the smooth observer covectors $E,B$ of
[[lem-emg-observer-field-decomposition]], define the rest projector
$h^a{}_b:=\delta^a_b+n^an_b$ and the observer energy flux
$S_n^a:=-c\,h^a{}_bT_{\mathrm{EM}}^{bc}n_c$. Then:

**(a) Tensor symmetries.** $T_{\mathrm{EM},ab}$ is symmetric and
$g^{ab}T_{\mathrm{EM},ab}=0$.

**(b) Orthonormal observer components.** In any positively oriented
orthonormal tetrad with $E_0=n$ and spatial orientation
$\epsilon_{123}=+1$, the components are

$$T_{\mathrm{EM}}^{00}=\frac12\left(\epsilon_0\sum_iE_i^2+\frac1{\mu_0}\sum_iB_i^2\right),\qquad T_{\mathrm{EM}}^{0i}=\frac{(\mathbf E\times\mathbf B)_i}{\mu_0c},$$

$$T_{\mathrm{EM}}^{ij}=-\left[\epsilon_0\left(E_iE_j-\frac12\delta_{ij}\sum_kE_k^2\right)+\frac1{\mu_0}\left(B_iB_j-\frac12\delta_{ij}\sum_kB_k^2\right)\right].$$

Here $(\mathbf E\times\mathbf B)_i:=\epsilon_{ijk}E_jB_k$. In particular,
$T_{\mathrm{EM},0i}=-T_{\mathrm{EM}}^{0i}$ in this tetrad.

**(c) Observer energy and flux.** The measured energy density
$u_n:=T_{\mathrm{EM},ab}n^an^b$ equals the nonnegative value in part (b), and
the spatial vector $S_n$ has components
$S_n^i=(\mathbf E\times\mathbf B)_i/\mu_0$ and $S_n^0=0$.

These are conditional mathematical tensor identities. The variational
supplier in [A1] remains conditional on the missing batch-2 connection
interface; no independent proof acceptance is claimed here.

## Facts & Assumptions

**Given:** The geometry, smooth observer congruence and smooth two-form in the
Statement.

[F1] [[lem-emg-observer-field-decomposition]] defines
$E_a=cF_{ab}n^b$ and $B_a=-(\star_gF)_{ab}n^b$, proves that they annihilate
$n$, and gives, in a positively oriented tetrad with $E_0=n$,
$F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$, together with
$F_{ab}F^{ab}=2(B^2-E^2/c^2)$.

[F2] The ambient tangent-bundle convention inherited through
[[lem-emg-observer-field-decomposition]] uses $\mathrm{AC}_\omega$ with the
exact statement in [[def-countable-choice]]. The finite component calculation
uses no additional choice.

[A1] The displayed formula for $T_{\mathrm{EM}}$ is the conclusion of
[[lem-emg-maxwell-action-variation]] under its compact metric variation
hypotheses and fixed bundle sector. That item has a complete conditional proof;
its actual batch-2 bundle-definition and gluing carriers are present and their
interface matches its use, but both carriers remain draft and the gluing proof
now uses actual typed prerequisites authored on emg-mg02. Its fixed-sector variation interface is unchanged. A separate inherited Lorentzian geometry-to-remark closure remains an external owner obligation. The tensor is retained as a conditional mathematical premise here without asserting independent proof acceptance or current readiness.


[F3] In an oriented orthonormal tetrad the metric matrix and inverse are
$\eta=\operatorname{diag}(-1,1,1,1)$, and $n^a=(1,0,0,0)$,
$n_a=(-1,0,0,0)$. The formula $h^a{}_b=\delta^a_b+n^an_b$ gives
$h(n)=0$ and fixes every spatial component while annihilating the temporal
component by direct multiplication.

## Proof

**Given:** [F1]–[F3] and the conditional variational tensor premise [A1].

1.1 Rewrite the first quadratic term as
$F_{ac}F_b{}^c=g^{cd}F_{ac}F_{bd}$. Since $g^{cd}=g^{dc}$ and scalar
component products commute, this expression is symmetric in $a,b$. The term
$g_{ab}F_{cd}F^{cd}$ is also symmetric, so $T_{\mathrm{EM},ab}$ is symmetric.
[given, A1, F1, algebra]

1.2 The component calculation is finite and makes no additional choice,
consistent with the ambient convention [F2]. Fix a point and use the tetrad
components of [F1]. Raising the time index
with $\eta^{00}=-1$ gives $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, and spatial raising
leaves $F^{ij}=\epsilon_{ijk}B_k$. The invariant in [F1] and the formula in
[A1] then give
$T_{\mathrm{EM}}^{00}=\mu_0^{-1}\bigl(\sum_i E_i^2/c^2+
\frac12\sum_i(B_i^2-E_i^2/c^2)\bigr)
=\frac12(\epsilon_0\sum_iE_i^2+\mu_0^{-1}\sum_iB_i^2)$.
[given, A1, F1, F2, F3, algebra]

1.3 Because $\eta^{0i}=0$, the trace term contributes nothing to
$T_{\mathrm{EM}}^{0i}$. The remaining contraction is
$\mu_0^{-1}\sum_jF^{0j}F^i{}_j
=\frac1{\mu_0c}\sum_j\epsilon_{ijk}E_jB_k$, which is the stated cross-product
component. [given, A1, F1, algebra]

1.4 For spatial components, the time-index contraction is
$F^{i0}F^j{}_0=-E_iE_j/c^2$, and
$\sum_kF^{ik}F^j{}_k=\delta_{ij}\sum_\ell B_\ell^2-B_iB_j$ by the
three-dimensional alternating-symbol identity
$\sum_k\epsilon_{ik\ell}\epsilon_{jkm}
=\delta_{ij}\delta_{\ell m}-\delta_{im}\delta_{\ell j}$.
Subtracting $\frac14\delta_{ij}F_{cd}F^{cd}$ and using
$\epsilon_0=(\mu_0c^2)^{-1}$ yields exactly the formula for
$T_{\mathrm{EM}}^{ij}$ in (b). Lowering the first time index multiplies the
$0i$ component by $\eta_{00}=-1$, so
$T_{\mathrm{EM},0i}=-T_{\mathrm{EM}}^{0i}$. [given, A1, F1, F3, algebra]

2.1 Contract with $g^{ab}$. The first term gives
$g^{ab}F_{ac}F_b{}^c=F_{ac}F^{ac}$, while
$g^{ab}g_{ab}=4$ in four dimensions. Hence
$g^{ab}T_{\mathrm{EM},ab}=\mu_0^{-1}(F_{cd}F^{cd}-\frac44F_{cd}F^{cd})=0$.
[given, A1, step 1.1, algebra]

3.1 In the tetrad, $u_n=T_{\mathrm{EM},00}=T_{\mathrm{EM}}^{00}$ because
$n^a=\delta^a_0$ and both lowered time indices contribute the same diagonal
metric factor. The projector in [F3] keeps exactly the spatial components,
and $n_c=(-1,0,0,0)$ gives
$S_n^i=-c\,T_{\mathrm{EM}}^{i0}n_0=cT_{\mathrm{EM}}^{i0}
=(\mathbf E\times\mathbf B)_i/\mu_0$, while $S_n^0=0$. Positivity of
$\epsilon_0$ and $\mu_0$ makes the stated $u_n$ nonnegative. [given, F3,
step 1.2, step 1.3, algebra] ∎

## Remarks

The sign $T_{\mathrm{EM}}^{0i}>0$ is for the conventions
$F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, and signature $(-,+,+,+)$.
The covariant component $T_{\mathrm{EM},0i}$ has the opposite sign because
lowering the time index multiplies it by $-1$. The formula is not a claim
about the source or matter stress tensor.
