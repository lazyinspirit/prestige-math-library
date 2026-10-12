---
id: lem-gr-tetrad-change-of-basis-is-lorentz
kind: lemma
title: "The change between two future-directed tetrads is a Lorentz matrix"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-tensor-fields-and-components, def-gr-local-frame-and-tetrad-fields, def-gr-smooth-lorentzian-objects, lem-lorentz-form-has-orthonormal-basis, lem-timelike-cone-has-two-convex-components, lem-gr-future-causal-classification-by-a-timelike-field, thm-unique-coordinates-with-respect-to-an-ordered-basis]
dependency_roles:
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'tetrads and non-coordinate bases', printed pp. 88-91 (PDF pp. 95-98)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2: different orthonormal bases are related by Lorentz transformations, eta_mu nu = (A^-1)^rho_mu (A^-1)^sigma_nu eta_rho sigma (2.9)-(2.10), printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$, and let $E=(E_0,E_1,E_2,E_3)$ and $F=(F_0,F_1,F_2,F_3)$ be two
future-directed tetrads at $p$ ([[def-gr-local-frame-and-tetrad-fields]]).
Write $\eta=\operatorname{diag}(-1,1,1,1)$. Then there is a unique real
$4\times4$ matrix $\Lambda=(\Lambda^B{}_A)$ such that
$F_A=\sum_B\Lambda^B{}_AE_B$ for all $A$, and:

1. $\sum_{C,D}\Lambda^C{}_A\,\eta_{CD}\,\Lambda^D{}_B=\eta_{AB}$ for all
   $A,B$; equivalently $\Lambda^{\mathsf T}\eta\Lambda=\eta$.
2. $\Lambda$ is invertible and $\det\Lambda=\pm1$.
3. $\Lambda^0{}_0>0$.
4. For every covariant $2$-tensor $T$ at $p$, its components in the two
   tetrads satisfy
   $T(F_A,F_B)=\sum_{C,D}\Lambda^C{}_A\Lambda^D{}_BT(E_C,E_D)$.
   More generally, for a type $(r,s)$ tensor at $p$ each contravariant slot
   contributes a factor $(\Lambda^{-1})^A{}_B$ and each covariant slot a
   factor $\Lambda^A{}_B$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p\in M$, and two future-directed tetrads $E=(E_0,\dots,E_3)$, $F=(F_0,\dots,F_3)$ at $p$.

[L1] A tetrad at $p$ is an ordered basis $(E_A)$ of $T_pM$ with $g_p(E_A,E_B)=\eta_{AB}$; a future-directed tetrad has $E_0$ future-directed ([[def-gr-local-frame-and-tetrad-fields]]).

[L2] A nonzero timelike vector has $g_p(v,N_p)\neq0$, and $C_p^+=\{v:g_p(v,v)<0,\ g_p(v,N_p)<0\}$ is the future timelike component ([[lem-gr-future-causal-classification-by-a-timelike-field]]).

[L3] In an orthonormal ordered basis of a Lorentz vector space, the timelike set splits as $T=T_+\cup T_-$ with $T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and $T_-=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}$ the two components, in some order, in every orthonormal basis ([[lem-timelike-cone-has-two-convex-components]]).

[L4] Every vector of $T_pM$ has a unique coordinate list in the ordered basis $E$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L5] Orthonormal bases of a Lorentz vector space exist, and the timelike vector $E_0$ of a tetrad is future-directed exactly when $g_p(E_0,N_p)<0$ ([[lem-lorentz-form-has-orthonormal-basis]], [[def-gr-smooth-lorentzian-objects]]).

[L6] A type $(r,s)$ tensor at $p$ is a multilinear map $(T_p^*M)^r\times(T_pM)^s\to\mathbb R$: its first $r$ slots are covectors and its last $s$ slots are vectors; components in a basis are its evaluations on the corresponding dual covectors and basis vectors ([[def-gr-tensor-fields-and-components]]).

## Proof

**Proof technique:** direct.

1.1 Since $E$ is a basis, [L4] gives unique coefficients $\Lambda^B{}_A$ with $F_A=\sum_B\Lambda^B{}_AE_B$, which is the uniqueness assertion. [L1, L4, given]

2.1 Evaluating $g_p$ and using bilinearity together with the tetrad property $g_p(E_C,E_D)=\eta_{CD}$ gives $\eta_{AB}=g_p(F_A,F_B)=\sum_{C,D}\Lambda^C{}_A\Lambda^D{}_Bg_p(E_C,E_D)$, which is claim 1. [step 1.1, L1, algebra]

2.2 In the orthonormal ordered basis $E$, [L3] describes the two timelike components as $T_\pm$; the vector $E_0$ has coordinates $(1,0,0,0)\in T_+$, and $E_0$ is future-directed by hypothesis, so $C_p^+=T_+$ and a vector is future timelike exactly when its $E$-coordinates satisfy $v^0>\lvert v_{\mathrm{vec}}\rvert$. The vector $F_0$ has coordinates $(\Lambda^0{}_0,\Lambda^1{}_0,\Lambda^2{}_0,\Lambda^3{}_0)$ by step 1.1 and is future-directed by hypothesis, so $\Lambda^0{}_0>\lvert(\Lambda^1{}_0,\Lambda^2{}_0,\Lambda^3{}_0)\rvert\ge0$; this proves claim 3. [step 1.1, L1, L2, L3, L5, given]

2.3 For a covariant $2$-tensor $T$, bilinearity of $T$ at $p$ and $F_A=\sum_C\Lambda^C{}_AE_C$, $F_B=\sum_D\Lambda^D{}_BE_D$ give $T(F_A,F_B)=\sum_{C,D}\Lambda^C{}_A\Lambda^D{}_BT(E_C,E_D)$, the first part of claim 4. [step 1.1, L1, L6, algebra]

3.1 Taking determinants in the matrix identity $\Lambda^{\mathsf T}\eta\Lambda=\eta$ of claim 1 gives $(\det\Lambda)^2\det\eta=\det\eta$; since $\det\eta=-1\neq0$, we get $(\det\Lambda)^2=1$, so $\det\Lambda=\pm1$ and $\Lambda$ is invertible. This proves claim 2. [step 2.1, L1, algebra]

4.1 For the general type $(r,s)$ statement, let $(\varepsilon^A)$ and $(\theta^A)$ be the dual bases of $(E_A)$ and $(F_A)$. From $\theta^A(F_B)=\delta^A{}_B$ and the expansion of step 1.1 one gets $\theta^A=\sum_B(\Lambda^{-1})^A{}_B\varepsilon^B$, where $\Lambda^{-1}$ exists by claim 2; substituting this on each contravariant slot and the expansion of step 1.1 on each covariant slot into the multilinear evaluation gives the stated products of $(\Lambda^{-1})^A{}_B$ and $\Lambda^A{}_B$. [step 1.1, step 3.1, L1, L6, algebra]

5.1 Claims 1-4 are steps 2.1, 3.1, 2.2, 2.3 and 4.1. [step 2.1, step 3.1, step 2.2, step 2.3, step 4.1] ∎
