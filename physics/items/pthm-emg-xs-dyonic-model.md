---
id: pthm-emg-xs-dyonic-model
kind: physics-theorem
title: Dyonic rotating model and gauge obstruction
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-emg-xs-kn-model
  - def-emg-xs-si-parameters
  - thm-emg-xs-kn-verification
  - lem-emg-xs-duality
  - lem-emg-maxwell-current-forms
  - prop-emg-xs-rn-local-gauges
  - def-emg-xs-kn-data
  - def-emg-xs-kn-full-sphere-exterior
  - def-emg-xs-rn-data
  - lem-emg-lorentz-hodge-calculus
  - thm-stokes-theorem-for-smooth-singular-chains
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-kn-model: physical-result
  def-emg-xs-si-parameters: formulation-prerequisite
  thm-emg-xs-kn-verification: mathematical-premise
  lem-emg-xs-duality: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  prop-emg-xs-rn-local-gauges: mathematical-premise
  def-emg-xs-kn-data: mathematical-premise
  def-emg-xs-kn-full-sphere-exterior: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional source-free equation-model solution after a constant dual
  rotation of the electric KN seed, with geometric flux lengths and the
  corresponding SI electric charge and magnetic flux. Nonzero magnetic flux
  obstructs a global real one-form potential on sphere-containing model
  regions; no magnetic-charge quantization or empirical realization is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Sections 2.1-2.2, equations (2.1)-(2.21), printed pp. 4-11 (PDF pp. 5-12): RN seed, charged rotating metric and source-free verification; the duality and SI conversion are supplied by the named local results."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.106)-(7.116), printed pp. 201-209 (PDF pp. 207-215): RN and KN charge-dependent metric forms; source conventions are not imported."
---

## Statement

Take a pure-electric KN seed with SI inputs $m_*>0$, $J\in\mathbb R$ and $Q_0\in\mathbb R$, zero magnetic flux, and parameters
$$M=\frac{G_Nm_*}{c^2},\qquad a=\frac{J}{m_*c},\qquad q_0=\gamma_e Q_0,\qquad \alpha=\sqrt{\frac{4\pi G_N}{\mu_0c^4}},\qquad \gamma_e:=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}.$$
For a fixed real duality angle $\beta$, rotate its geometric field by
$$\mathcal F_\beta:=\cos\beta\,\mathcal F_0+\sin\beta\,\star_g\mathcal F_0,$$
where $\mathcal F_0=\alpha F_0$ is the seed's geometric field. On the seed's
stated Boyer–Lindquist domains, the dual-rotated geometric field is source-free
and has unchanged geometric stress, conditional on [[lem-emg-xs-duality]];
thus $F_\beta:=\mathcal F_\beta/\alpha$ and the same metric solve the same
equation-based SI model, conditional on [[pthm-emg-xs-kn-model]]. On the
full-sphere exterior $\mathcal X:=\mathbb R_{x^0}\times(R_0,\infty)_r\times S^2$ of [[def-emg-xs-kn-full-sphere-exterior]], with $R_0>4|M|$, the
resulting geometric flux parameters and matching SI inputs are
$$q_e=q_0\cos\beta,\qquad q_m=q_0\sin\beta,\qquad Q_e^{\mathrm{out}}=Q_0\cos\beta,\qquad \Phi_B^{\mathrm{out}}=\mu_0cQ_0\sin\beta.$$
In particular $q_e^2+q_m^2=q_0^2$, so the metric is unchanged. On each sphere-containing full-sphere exterior region, $\int_{S_r}\mathcal F_\beta=4\pi q_m$; hence a global smooth real one-form potential for $\mathcal F_\beta$ there is impossible if $q_m\ne0$, by finite-chain Stokes. In the nonrotating case $a=0$, the corresponding dyonic RN field also has the explicit north/south patch potentials and exact global-potential criterion of [[prop-emg-xs-rn-local-gauges]]. No charge quantization, ADM/Komar identification or observed object is asserted.

## Facts & Assumptions

**Given:** $G_N,c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$, the pure-electric seed inputs, a fixed real $\beta$, and the named model domains.

[F1] [[def-emg-xs-si-parameters]]: $q_e=\gamma_eQ_e$, $q_m=\alpha\Phi_B/(4\pi)$, $\gamma_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}$, $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$, and $\varepsilon_0\mu_0c^2=1$.

[F2] [[pthm-emg-xs-kn-model]]: for a pure-electric KN seed, the SI-rescaled data satisfy the adopted $\Lambda=0$, $j=0$, $T^m=0$ equations conditionally on the exact draft verification and current-form interfaces; the mathematical proof is draft and not independently accepted.

[F3] [[thm-emg-xs-kn-verification]]: for the exact pole-free KN datum and its stated full-sphere exterior, $d\mathcal F=d(\star_g\mathcal F)=0$ and $\operatorname{Ric}=2Q(\mathcal F)$; its current proof remains draft and is not independently accepted.

[L1] [[lem-emg-xs-duality]]: for any smooth geometric electrovac field and constant $\beta$, $\mathcal F_\beta=\cos\beta\,\mathcal F+\sin\beta\,\star_g\mathcal F$ has $d\mathcal F_\beta=d(\star_g\mathcal F_\beta)=0$ and $Q(\mathcal F_\beta)=Q(\mathcal F)$; hence the same metric satisfies the same geometric Einstein–Maxwell equation. This mathematical lemma is draft and not independently accepted.

[F4] [[lem-emg-maxwell-current-forms]]: its current Statement assumes the sourced divergence equation before stating the form-equation equivalence. Its Facts [F1]–[F3] specify the smooth oriented Lorentzian geometry, torsion-free metric connection and Hodge conventions. Its Proof 2.1 derives the pointwise identity $d(\star_gF)=-\iota_v\mathrm{vol}_g$, $v^b=\nabla_aF^{ab}$, from smoothness and those geometric conventions; the equivalence clause is not used as a black-box implication here. The supplier proof is draft and not independently accepted.

[L3] [[prop-emg-xs-rn-local-gauges]]: on the nonrotating dyonic RN product the field has the stated smooth north and south patch potentials, and a global smooth real one-form potential exists exactly when $q_m=0$; this draft proposition assumes no bundle normalization or quantization.

[F6] [[def-emg-xs-kn-data]] and [[def-emg-xs-rn-data]]: setting $a=0$ in the electric KN potential gives the static RN electric field $-q_0r^{-2}dx^0\wedge dr$; the dyonic RN datum uses $-q_er^{-2}dx^0\wedge dr+q_m\omega$ with the outward sphere orientation.

[F7] [[lem-emg-lorentz-hodge-calculus]]: the Lorentzian Hodge map on two-forms is determined by the metric and oriented volume form and has components $(\star_gF)_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ in an oriented chart.

[F8] [[def-emg-xs-kn-full-sphere-exterior]]: on $r>R_0>4|M|$ the pure-electric seed has the smooth global potential $\mathcal A_0=-q_0r\Sigma^{-1}(dx^0-a\lambda)$ and $\mathcal F_0=d\mathcal A_0$ on the full-sphere exterior.

[F5] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth singular chain $c$ and smooth form $\eta$, $\int_c d\eta=\int_{\partial c}\eta$.

[A1] $\beta$ is a fixed real number and the duality rotation acts on the geometric two-form, not on the metric. The seed's magnetic flux is zero.

[A2] [[def-countable-choice]]: the geometric flux and metric conventions inherited through [F1] and [F2] use only $\mathrm{AC}_\omega$, meaning every specified countable family of nonempty sets has a choice function. The finite trigonometric and SI-conversion calculation adds no choice and uses no full AC.

## Proof

1.1 By [F1] and the seed's zero magnetic flux, its geometric electric parameter is $q_0=\gamma_eQ_0$ and its geometric magnetic parameter is zero. The exact seed statement [F3] supplies the geometric electrovac hypotheses for [L1]; the conditional physical-model statement [F2] supplies the source-free SI solution on its stated pole-free and full-sphere exterior domains. Each cited carrier is used at its current draft interface only. [given, F1, F2, F3, A1, A2]

2.1 Let $F_0=\mathcal F_0/\alpha$ be the SI seed field. By [L1], the geometric dual-rotated field is closed with closed Hodge dual and has the same quadratic stress as $\mathcal F_0$; since $\alpha>0$ is constant, $dF_\beta=d(\star_gF_\beta)=0$ for $F_\beta=\mathcal F_\beta/\alpha$. Put $V^b:=\nabla_aF_\beta^{ab}$. In an oriented coordinate chart write $\mathrm{vol}_g=w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ with $w=\sqrt{|\det(g_{ab})|}$; this coefficient follows from the defining value of the metric volume form on a positively oriented orthonormal basis and the determinant change-of-basis formula. Differentiating the determinant expansion gives $\partial_cw=\tfrac12w g^{ab}\partial_cg_{ab}$; the Christoffel formula and symmetry of $g$ give $\Gamma^a{}_{ca}=\tfrac12g^{ab}\partial_cg_{ab}$. Hence $(\nabla_c\mathrm{vol}_g)_{0123}=\partial_cw-\Gamma^a{}_{ca}w=0$, so $\nabla\mathrm{vol}_g=0$. At each point $p$, choose a positively oriented orthonormal frame with metric matrix $\eta=\operatorname{diag}(-1,1,1,1)$. Torsion-freeness of the metric-selected connection [F4] gives $(d\star_gF_\beta)_{abc}=3\nabla_{[a}(\star_gF_\beta)_{bc]}$. The Hodge component formula [F7] has $(\star_gF_\beta)_{ij}=-\epsilon_{ijk}(F_\beta)_{0k}$ and $(\star_gF_\beta)_{0i}=\tfrac12\epsilon_{ijk}(F_\beta)_{jk}$, where $\epsilon_{ijk}$ is alternating with $\epsilon_{123}=+1$. In this frame $V^0=\sum_i\nabla_i(F_\beta)_{0i}$ and $V^k=-\nabla_0(F_\beta)_{0k}+\sum_i\nabla_i(F_\beta)_{ik}$. Substituting the displayed Hodge components into $3\nabla_{[a}(\star_gF_\beta)_{bc]}$ gives
$$ (d\star_gF_\beta)_{123}=-V^0,\qquad (d\star_gF_\beta)_{0ij}=\epsilon_{ijk}V^k.$$
In the same oriented frame, $(\iota_V\mathrm{vol}_g)_{123}=V^0$ and $(\iota_V\mathrm{vol}_g)_{0ij}=-\epsilon_{ijk}V^k$, so these components establish $d(\star_gF_\beta)|_p=-\iota_{V(p)}\mathrm{vol}_g|_p$. Its left side is zero. Contraction with the nonzero volume form is an isomorphism $T_pM\to\Lambda^3T_p^*M$, so $V(p)=0$; hence $\nabla_aF_\beta^{ab}=0$ throughout every stated domain. Thus the source-free SI Maxwell equations hold without using the equivalence clause of [F4]. Its electromagnetic stress is unchanged because $Q(F_\beta)=\alpha^{-2}Q(\mathcal F_\beta)=\alpha^{-2}Q(\mathcal F_0)=Q(F_0)$. The Einstein tensor and metric are unchanged, so the same zero-source SI equation-based model equations hold on every base domain of [F2]. [F1, F2, F3, F4, F7, L1, step 1.1, algebra]

2.2 On the full-sphere exterior [F8], let $y=\cos\theta$, $\Sigma=r^2+a^2y^2$, and $R=r^2+a^2$. Differentiating the exact seed potential in [F2] gives $(\mathcal F_0)_{r0}=q_0(r^2-a^2y^2)/\Sigma^2$ and $(\mathcal F_0)_{r\phi}=-a\sin^2\theta(\mathcal F_0)_{r0}$. Raising indices with the KN inverse metric and applying [F7] yields $(\star_g\mathcal F_0)_{\theta\phi}=q_0R(r^2-a^2y^2)\sin\theta/\Sigma^2$. Since $\frac{d}{dy}(y/\Sigma)=(r^2-a^2y^2)/\Sigma^2$, integration over the outward sphere gives
$$\frac1{4\pi}\int_{S_r}\star_g\mathcal F_0=\frac{q_0R}{2}\int_{-1}^1\frac{r^2-a^2y^2}{(r^2+a^2y^2)^2}\,dy=\frac{q_0R}{2}\left[\frac{y}{\Sigma}\right]_{-1}^1=q_0.$$
The global potential in [F8] and Stokes' theorem [F5] give $\int_{S_r}\mathcal F_0=\int_{S_r}d\mathcal A_0=0$. By [F7], $\star_g^2=-1$ on two-forms, so integrating $\mathcal F_\beta=\cos\beta\,\mathcal F_0+\sin\beta\star_g\mathcal F_0$ and its Hodge dual directly yields $q_e=q_0\cos\beta$ and $q_m=q_0\sin\beta$. Therefore $q_e^2+q_m^2=q_0^2(\cos^2\beta+\sin^2\beta)=q_0^2$, and every KN metric coefficient depending on charge through this sum is unchanged. This local integral calculation proves the stated flux values. [F2, F5, F7, F8, step 1.1, algebra]

3.1 The electric conversion in [F1] gives $Q_e^{\mathrm{out}}=q_e/\gamma_e=Q_0\cos\beta$, using the flux parameter from step 2.2. For the magnetic flux, [F1] gives $\Phi_B^{\mathrm{out}}=4\pi q_m/\alpha$, with $q_m$ from step 2.2. From $\varepsilon_0\mu_0c^2=1$,
$$\left(\frac{\alpha\mu_0c}{4\pi}\right)^2=\frac{G_N\mu_0}{4\pi c^2}=\gamma_e^2.$$
Both $\alpha,\mu_0,c,\gamma_e$ are positive, hence $\alpha\mu_0c/(4\pi)=\gamma_e$. Substituting $q_m=\gamma_eQ_0\sin\beta$ gives $\Phi_B^{\mathrm{out}}=\mu_0cQ_0\sin\beta$. These conversions preserve the stated SI flux convention and introduce no magnetic-charge relabeling. [F1, step 2.2, algebra]

3.2 Assume a global smooth real one-form $\mathcal A_\beta$ on a sphere-containing exterior with $d\mathcal A_\beta=\mathcal F_\beta$ and $q_m\ne0$. Represent the fixed sphere $S_r$ by radially projecting the eight oriented triangular faces of the octahedron onto the unit sphere and taking their signed sum. Each face is disjoint from the origin, so its radial projection is smooth; common edges cancel with opposite orientations. This is a finite smooth singular $2$-cycle, so $\partial S_r=0$. By [F5] and step 2.2,
$$4\pi q_m=\int_{S_r}\mathcal F_\beta=\int_{S_r}d\mathcal A_\beta=\int_{\partial S_r}\mathcal A_\beta=0,$$
a contradiction. Thus no such global potential exists on the rotating sphere-containing exterior when its magnetic flux is nonzero. [F5, step 2.2, algebra]

3.3 If $a=0$, the KN potential in [F6] reduces to $-q_0r^{-1}dx^0$, so its exterior derivative is $\mathcal F_0=-q_0r^{-2}dx^0\wedge dr$. On the sphere-containing exterior $f>0$, the positively oriented orthonormal coframe $e^0=\sqrt f\,dx^0$, $e^1=f^{-1/2}dr$, $e^2=r\,d\theta$, $e^3=r\sin\theta\,d\phi$ gives $dx^0\wedge dr=e^0\wedge e^1$ and $\star_g(e^0\wedge e^1)=-e^2\wedge e^3$ by the Hodge component convention [F7]. Hence $\star_g\mathcal F_0=q_0\omega$. Therefore the dual rotation is
$$\mathcal F_\beta=-q_0\cos\beta\,r^{-2}dx^0\wedge dr+q_0\sin\beta\,\omega,$$
which is exactly the dyonic RN field of [F6] with the flux parameters in step 2.2. The exact current interface [L3] supplies the two patch potentials and the criterion for a global real potential in this nonrotating case. [F6, F7, L3, step 2.2, algebra]

4.1 Steps 1.1-3.3 establish the conditional dual-rotated model, full-sphere flux identifications and global-potential obstruction. The conventions use only the inherited $\mathrm{AC}_\omega$ in [A2]; they impose no full AC, flux quantization, or empirical claim. [A2, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, step 3.3] ∎
