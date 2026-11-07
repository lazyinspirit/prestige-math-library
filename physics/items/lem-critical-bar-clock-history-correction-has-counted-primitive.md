---
id: lem-critical-bar-clock-history-correction-has-counted-primitive
kind: lemma
title: The critical-bar clock history correction has a counted primitive
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 5
deps:
  - def-stopped-fukaya-category-algebraic-conventions
  - def-differential-graded-algebra
  - def-differential-graded-module
  - lem-finite-exact-stopped-floer-history-and-localization-model
  - lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse
dependency_roles:
  def-stopped-fukaya-category-algebraic-conventions: mathematical-premise
  def-differential-graded-algebra: mathematical-premise
  def-differential-graded-module: mathematical-premise
  lem-finite-exact-stopped-floer-history-and-localization-model: mathematical-premise
  lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lectures 7 and 10, finite twisted and module conventions; the specific four-block history count is not supplied by these notes.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §1.5, localization terminology only; no four-block primitive is imported.
verification:
  precheck: pending
---

## Statement

For the generation subclass, let $E_N=\operatorname{Cone}(P_N\to U_N)$ be the actual finite critical-bar cones and $F_N=(a_N,\beta_N)$ their counted continuation square. Construct the compatible mixed-clock upper contraction $Q_U^0\rightleftarrows T_U$, with $T_U^0=0$, and the actual lower contraction $h_P$ from the outgoing pairing. In one common history model
$$Q_U^H=Q_U^0\oplus W,\qquad d_U^H=\begin{pmatrix}d_0&B\\0&d_W\end{pmatrix},$$
prove by an actual marked evaluation/suffix-cap count that
$$w_N=-\pi_W J h_P\beta_N$$
has a degree-minus-one primitive $z_N$ with $d_Wz_N=w_N$. The primitive must retain the full upper correction and all inverse/refinement letters. Equivalently, construct the ordinary co-unit maps and the complete four-block nullhomotopy. The algebraic transfers below identify the exact residual cycle and prove the conditional nullhomotopy formula, but the required marked geometric count is absent, so this item is escalated.

## Statement references

[[def-stopped-fukaya-category-algebraic-conventions]]

[[def-differential-graded-algebra]]

[[def-differential-graded-module]]

[[lem-finite-exact-stopped-floer-history-and-localization-model]]

[[lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse]]

## Facts & Assumptions

**Given:** A fixed finite clock stage $N$, actual cone maps $P_N\to U_N$, $P_0\to U_0$, and their counted continuation square in one DG bar/history enhancement.

[F1] [[def-stopped-fukaya-category-algebraic-conventions]] fixes the cohomological cone, twisted differential, and full module/bar operations.

[F2] [[lem-finite-exact-stopped-floer-history-and-localization-model]] supplies the four-dimensional regular finite operation/history counts, their compactification, geometric homological units and derived module-localization model. Its general history counts do not construct the specific marked suffix-cap primitive $z_N$ or identify the required upper/lower contractions in one common critical-bar model.

[F3] [[lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse]] gives the exact conditional outgoing interface and common-stage geometry, but its actual pairing count and forward finite membership are absent.

[F4] [[def-differential-graded-algebra]] fixes the cohomological differential, degree-zero composition, and signed Leibniz rule used in the chain calculations.

[F5] [[def-differential-graded-module]] fixes the right-module action/differential identity used by the cone and bar enhancement.

[A1] The common history enhancement contains closed $d_U^H,d_P^H$, a degree-one chain map $J:Q_P^H\to Q_U^H[1]$, a closed counted arrow $F_N=(a_N,\beta_N)$ satisfying $d_P^H\beta_N=0$ and $d_U^Ha_N+J\beta_N=0$, and an actual lower contraction $h_P$ with $d_Ph_P+h_Pd_P=1$.

[A2] The ordinary upper complex has an actual contraction $Q_U^0\rightleftarrows T_U$ with maps $i,p,h_U$, $d_0h_U+h_Ud_0=1-ip$, $pi=1$, $h_U^2=ph_U=h_Ui=0$, and the mixed-clock degree bound $T_U^0=0$. The full history complex has a specified graded splitting $Q_U^H=Q_U^0\oplus W$ with differential as displayed and $d_0B+Bd_W=0$.

[A3] The counted representative $a_N$ lies in the ordinary subcomplex $Q_U^0$. If a chosen model does not have this inclusion, its actual mapping-cylinder replacement and contractible cylinder terms must be specified before this proof applies.

[A4] A geometric marked evaluation/suffix-cap count must produce the specific degree-minus-one $z_N$ for the $W$-component below. No algebraic splitting in [A1], [A2], or [A3] is assumed to produce it.

## Proof

1.1 On $Q_U^H\oplus Q_P^H$ use the full differential $ D(a,b)=(d_U^Ha+Jb,d_P^Hb). $ Define $ I(a)=(a,0),\quad R(a,b)=a-Jh_Pb,\quad H(a,b)=(0,h_Pb). $ The chain-map relation $d_U^HJ+Jd_P^H=0$ and [A1] give $DI=Id_U^H$, $RD=d_U^HR$, and $RI=1$. Directly, $ DH(a,b)+HD(a,b) =(Jh_Pb,(d_Ph_P+h_Pd_P)b) =(Jh_Pb,b) =(1-IR)(a,b). $ Thus this is a contraction of the whole lower block, including its off-diagonal $J$; it is not a contraction of only the ordinary U-row. [A1, F1, F4, F5, construct, algebra]

1.2 Write a full upper element as $(a,w)\in Q_U^0\oplus W$, with differential $d_U^H(a,w)=(d_0a+Bw,d_Ww)$. Define $ I_1(t,w)=(it-h_UBw,w),\quad R_1(a,w)=(pa,w),\quad H_1(a,w)=(h_Ua,0). $ On $T_U\oplus W$ define $D_1(t,w)=(d_Tt+pBw,d_Ww)$. The relation $d_0B+Bd_W=0$, the ordinary contraction identities in [A2], and $ph_U=0=h_Ui$ give $D_UI_1=I_1D_1$, $R_1D_U=D_1R_1$, $R_1I_1=1$, and $ D_UH_1+H_1D_U=1-I_1R_1. $ Thus the actual history complex retracts to $T_U\oplus W$, not to $T_U$ alone. [A2, F1, construct, algebra]

2.1 The transferred counted arrow is $ \widetilde a_N=a_N-Jh_P\beta_N. $ Indeed $d_P h_P\beta_N=\beta_N$ by [A1] and $d_P\beta_N=0$; hence $ d_U\widetilde a_N =d_Ua_N-d_UJh_P\beta_N =-J\beta_N+Jd_Ph_P\beta_N =0. $ The lower contraction has therefore produced an upper closed cycle, but it has not made that cycle a boundary. [A1, step 1.1, construct, algebra]

3.1 Since $\widetilde a_N$ is closed and degree zero, its transferred representative is $R_1\widetilde a_N=(p\widetilde a_N^0,w_N)$. The first component has degree zero in $T_U$ and vanishes because $T_U^0=0$. By [A3], the ordinary part of $a_N$ has no W component, so $ w_N=-\pi_WJh_P\beta_N. $ Closedness in $T_U\oplus W$ gives $d_Ww_N=0$ and $pBw_N=0$. If [A3] fails, the exact residual instead is $\pi_W(a_N-Jh_P\beta_N)$, and that extra term must be retained. [A1, A2, A3, step 2.1, step 1.2, construct, algebra]

4.1 A primitive of the transferred cycle $(0,w_N)$ must have a W component $z_N$ satisfying $d_Wz_N=w_N$. Conversely, if such a $z_N$ exists, then $ D_1(0,z_N)=(pBz_N,w_N). $ The first component has degree zero in $T_U$, so it is zero by $T_U^0=0$. Therefore $(0,w_N)=D_1(0,z_N)$. This proves the exact necessary-and-sufficient chain target; an acyclic ordinary $T_U$ test does not prove that $w_N$ is a boundary in $W$. [A2, step 1.2, step 3.1, construct, algebra]

5.1 If [A4] supplies $z_N$, the primitive of the original full arrow is $ G_N=(0,h_P\beta_N)+I\bigl(H_1\widetilde a_N+I_1(0,z_N)\bigr). $ The first term differentiates to $(Jh_P\beta_N,\beta_N)$. In the upper complex, $D_UH_1\widetilde a_N=\widetilde a_N-I_1(0,w_N)$ because $R_1\widetilde a_N=(0,w_N)$; also $D_UI_1(0,z_N)=I_1(0,w_N)$ by step 4.1. These sum to $\widetilde a_N$, and adding $Jh_P\beta_N$ recovers $a_N$. Thus $DG_N=F_N$, with both cone twists, the entire off-diagonal map, and the upper correction retained. [A1, A2, A4, step 2.1, step 1.2, step 4.1, construct, algebra]

6.1 In the finite cone $Q_P=\operatorname{Cone}[\operatorname{Hom}(U_N,P_0)\xrightarrow{\varepsilon_N^*}\operatorname{Hom}(P_N,P_0)]$, write a degree-minus-one primitive $h_P\beta_N=(s_N,r_N)$. The cone differential equation $d_Q(s_N,r_N)=\beta_N=(C_P,0)$ expands to $dr_N=0$ and $C_P-r_N\varepsilon_N=ds_N$. This is the lower co-unit certificate; step 5.1 shows why it alone does not remove the W-cycle. [A1, F1, F5, step 5.1, construct, algebra]

7.1 The current outgoing carrier [F3] does not provide the actual common-model $h_P$ because its two-cusp count and forward membership remain absent; even if those lower inputs are later supplied, the residual computed in step 3.1 has the exact primitive target isolated in step 4.1. The missing object is a marked evaluation/suffix-cap count for this exact $w_N$, or an actual chain comparison proving it lies in a preserved ordinary subcomplex before the clock is fixed. The finite DG model in the B page shows that right-bar acyclicity and finite inverse words do not force such a co-unit. Neither the coefficient-free upper contraction nor a localized inverse is a replacement for $z_N$. This item remains escalated precisely at [A4]. [F2, F3, A1, A2, A3, A4, step 3.1, step 4.1, construct, algebra] ∎

## Remarks

The block contractions and residual formula are algebraic and conditional on the displayed actual chain data. The assigned theorem additionally requires the missing geometric count. A degree-window argument cannot erase the W block because its closed class has degree zero in the full history model.
