---
id: def-cft-r5-finite-group-orbifold
kind: definition
title: Anomaly-free finite-group orbifold CFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-full-local-cft-data
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§§8.3–8.5, printed pp. 118–127: invariant projection, commuting torus holonomies, twisted sectors, modular covariance, and phase choices."
    - title: "Chongying Dong, Haisheng Li, and Geoffrey Mason, Modular-invariance of trace functions in orbifold theory, arXiv:q-alg/9703016v2"
      url: https://arxiv.org/pdf/q-alg/9703016
      locator: "Introduction and Theorems 1 and 3: finite-order automorphisms, twisted modules, centralizer actions, and modular covariance under the stated rational-VOA/C2 hypotheses."
    - title: "Eric Sharpe, Discrete Torsion, arXiv:hep-th/0008154v3"
      url: https://arxiv.org/pdf/hep-th/0008154v3
      locator: "§4.2.1, equations (26)–(27), printed pp. 24–26: constant cocycle ratios multiply commuting-pair traces; no general full-local existence theorem is used."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $T$ be a unitary bosonic full-local CFT data package in the state-space/OPE presentation defined by the earlier supplier *Full local two-dimensional CFT data*. For the relevant clauses, this means a Hilbert state space $\mathcal H$, a common dense invariant domain $\mathcal D$, left and right Virasoro actions, weak operator-valued distribution fields on $\mathcal D$, and radially convergent OPEs whose vacuum matrix coefficients obey locality and genus-zero crossed-channel equality. That supplier does not include higher-genus sewing. Let $G$ be a finite group and let $U:G\to U(\mathcal H)$ be a unitary representation preserving $\mathcal D$, the vacuum, both Virasoro actions, field adjoints, and every OPE coefficient. Write $\mathcal F$ for the field-label space and $\sigma:\mathcal F\to\mathcal D$ for the supplied linear state-field bijection. On field labels define $U_ga:=\sigma^{-1}(U_g\sigma(a))$ for $a\in\mathcal F$; this is well-defined because every $U_g$ preserves $\mathcal D$, and the induced label maps obey the same group law. Explicitly, $U_gY(a;z,\bar z)U_g^{-1}=Y(U_ga;z,\bar z)$ on $\mathcal D$, with $U_gU_h=U_{gh}$ and $U_gL_n v=L_nU_gv$, $U_g\bar L_n v=\bar L_nU_gv$ for every $g,h\in G$, $n\in\mathbb Z$, and $v\in\mathcal D$; here $L_n,\bar L_n$ are the two Virasoro mode actions supplied by the full-local data.

A **finite-group orbifold completion** is a conditional data package consisting of the following additional spaces, maps, and conditions. It is not a construction theorem for an arbitrary action.

1. Write $e$ for the identity of $G$. Identify $\mathcal H_e=\mathcal H$ and $\mathcal D_e=\mathcal D$, with precisely the parent vacuum, adjoints, Virasoro actions and finite coordinate transports. Require $Y_e=Y$ and, in clause 3, $V_h^e=U_h$ for every $h\in G$. For each $g\in G$, choose a Hilbert sector $\mathcal H_g$ and a dense linear domain $\mathcal D_g\subseteq\mathcal H_g$, invariant under the stated Virasoro modes and all stated sector-field maps. A field $Y_g(a;z,\bar z)$ of the untwisted label $a$ acts on $\mathcal D_g$. Its matrix coefficients are weak distributions as defined in the full-local supplier. On each declared branch, analytic continuation once around the spatial $g$-twist satisfies $\operatorname{AC}_{z\circlearrowleft0}Y_g(a;z,\bar z)=Y_g(U_ga;z,\bar z)$; this equation is the $g$-monodromy convention.

2. Set $\mathcal F_e=\mathcal F$ and $\sigma_e=\sigma$. For each $g$, choose field-label data $\mathcal F_g$ and a state-field bijection $\sigma_g:\mathcal F_g\to\mathcal D_g$. For every ordered pair $g,h\in G$ and $a\in\mathcal F_g$, specify weak operator-valued distributions $Y_{g,h}(a;z,\bar z):\mathcal D_h\to\mathcal D_{gh}$. Require $Y_{e,h}(a)=Y_h(a)$ for every untwisted label $a$, hence $Y_{e,e}=Y$, as equalities of weak distributions. For each ordered field pair specify a nonempty radial domain, for example $0<|z-w|<R_{a,b}$ with $R_{a,b}>0$, its branches, the common matrix-coefficient domain, and the OPE coefficient maps. Each OPE expansion must converge absolutely and locally uniformly on compact subsets of that domain. For the final rephased data of clause 4 and every triple of sectors, all iterated OPE trees must have equal matrix coefficients on their common domains after the declared analytic continuation, with the field order and branch factors fixed. These are genus-zero local and crossing conditions; higher-genus sewing is not asserted here.

3. For $h\in G$, specify unitary transport maps $V_h^g:\mathcal H_g\to\mathcal H_{hgh^{-1}}$ that preserve the stated domains, intertwine both Virasoro actions, and preserve the sector OPEs after the declared phase lift. Require $V_e^g=I$ and $V_k^{hgh^{-1}}V_h^g=V_{kh}^g$ for every $g,h,k\in G$. In particular, $V_h^g$ preserves $\mathcal H_g$ when $h\in C_G(g):=\{k\in G:kg=gk\}$. If an initial centralizer lift is projective, record its multiplier $\mu_g:C_G(g)^2\to U(1)$ and the rephasing $\lambda_g:C_G(g)\to U(1)$; require $\mu_g(h,k)\mu_g(hk,\ell)=\mu_g(k,\ell)\mu_g(h,k\ell)$ and $\lambda_g(h)\lambda_g(k)\mu_g(h,k)=\lambda_g(hk)$. The rephased maps then form an honest representation. These $V$ maps are the insertion maps before the optional discrete-torsion modification in clause 6; the projected sector is defined there.

4. Record the scalar associator $\omega(g,h,k)\in U(1)$, if the chosen un-rephased twisted OPE products have one. Define its two channels coefficientwise, not by applying a state-field inverse to an unsmeared distribution. For $a\in\mathcal F_g$ and $b\in\mathcal D_h$, supply an index set $I_{a,b}$, labels $u_j\in\mathcal F_{gh}$, and scalar coefficient functions $C_j(z,\bar z)$ on the declared branches such that, for every $\zeta\in\mathcal D_{gh}$, the analytic representative of the weak matrix coefficient is
   $$\langle\zeta,Y_{g,h}(a;z,\bar z)b\rangle=\sum_{j\in I_{a,b}}C_j(z,\bar z)\langle\zeta,\sigma_{gh}(u_j)\rangle.$$
   For $c\in\mathcal D_k$ and $\xi\in\mathcal D_{ghk}$ define
   $$\mathcal A_L:=\sum_{j\in I_{a,b}}C_j(z_1-z_2,\bar z_1-\bar z_2)\langle\xi,Y_{gh,k}(u_j;z_2,\bar z_2)c\rangle.$$
   Require this scalar sum to converge absolutely and locally uniformly on each common radial domain. Define $\mathcal A_R$ as the analytic representative there of the weak product distribution obtained by composing the smeared maps $Y_{g,hk}(a;f_1)Y_{h,k}(\sigma_h^{-1}b;f_2)c$. Supply this product distribution and require both channels, integrated against compactly supported test densities in their domains, to agree with their corresponding smeared OPE expansions. If a direct-integral expansion is used, specify its measure and the corresponding absolutely convergent scalar integrals instead. Thus no unsmeared vector in $\mathcal D_{gh}$ is presumed. Fix the associator orientation on these scalar channels by $\mathcal A_L=\omega(g,h,k)\mathcal A_R$, and require
   $$\omega(h,k,\ell)\omega(g,hk,\ell)\omega(g,h,k)=\omega(gh,k,\ell)\omega(g,h,k\ell).$$
   The phase lift includes a normalized $2$-cochain $\beta:G^2\to U(1)$ with
   $$\omega(g,h,k)=\frac{\beta(gh,k)\beta(g,h)}{\beta(g,hk)\beta(h,k)};$$
   rephasing the $(g,h)$ OPE map by $\beta(g,h)^{-1}$ makes the associativity equations strict. In this definition, **anomaly-free** means precisely that the stated centralizer and OPE phase lifts exist and that the rephased sector data satisfy the group law, associativity, and crossing equations above. No assertion is made that an arbitrary action admits such a lift.

5. For each sector supply self-adjoint closures of $L_0^g,\bar L_0^g$ with a joint spectral resolution and the parent central charges, and specify the torus evolution $Q_g(\tau,\bar\tau)=q^{L_0^g-c_L/24}\bar q^{\bar L_0^g-c_R/24}$, where $q^a=e^{2\pi i\tau a}$ and $\bar q^a=e^{-2\pi i\bar\tau a}$, with the operators defined by the supplied spectral data. For each commuting pair $g,h$, specify $Z_{g,h}(\tau,\bar\tau)=\operatorname{Tr}_{\mathcal H_g}(V_h^gQ_g)$ on $\operatorname{Im}\tau>0$. Either require $Q_g$ to be trace-class there, or give a regularization linear in finite sums of insertions and invariant under the stated unitary sector transports. In both cases require simultaneous conjugation invariance of these traces. For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL(2,\mathbb Z)$ define $\gamma\cdot(g,h):=(g^ah^c,g^bh^d)$. After the chosen anomaly phase lift, require the exact covariance $Z_{g,h}(\gamma\tau,\overline{\gamma\tau})=Z_{\gamma\cdot(g,h)}(\tau,\bar\tau)$ for every commuting pair. Thus $S$ sends $(g,h)$ to $(h,g^{-1})$ and $T$ sends it to $(g,gh)$.

6. Optional discrete torsion is a normalized group $2$-cocycle $\alpha:G^2\to U(1)$, meaning $\alpha(e,g)=\alpha(g,e)=1$ and $\alpha(g,h)\alpha(gh,k)=\alpha(h,k)\alpha(g,hk)$. For commuting $g,h$ put $\epsilon_\alpha(g,h):=\alpha(g,h)/\alpha(h,g)$; require this phase to be invariant under the displayed modular action and simultaneous conjugation. With no discrete torsion set $\alpha=1$. The projection action, distinguished from the trace insertion $V_h^g$, is
   $$W_h^g:=\epsilon_\alpha(g,h)V_h^g\quad(h\in C_G(g)),\qquad P_g^\alpha:=\frac1{|C_G(g)|}\sum_{h\in C_G(g)}W_h^g.$$
   The cocycle identity gives $\epsilon_\alpha(g,hk)=\epsilon_\alpha(g,h)\epsilon_\alpha(g,k)$ for $h,k\in C_G(g)$, so $W^g$ is an honest unitary representation and $P_g^\alpha$ is its orthogonal invariant projector. Explicitly the projected sector is
   $$\mathcal H_g^{C_G(g),\alpha}:=\{v\in\mathcal H_g:W_h^gv=v\text{ for every }h\in C_G(g)\}=\{v\in\mathcal H_g:V_h^gv=\epsilon_\alpha(g,h)^{-1}v\text{ for every }h\in C_G(g)\}.$$
   Supply the compatible torsion-dependent sector OPEs, adjoints and vacuum data and require their induced fields on the projected sum, with dense domain $\bigoplus_{[g]}P_g^\alpha\mathcal D_g$, to satisfy the full-local supplier's unitary bosonic genus-zero conditions. This compatibility is additional completion data, not a consequence of modular covariance. The projected state space and torus amplitude are respectively
   $$\mathcal H_{T/G}:=\bigoplus_{[g]}\mathcal H_g^{C_G(g),\alpha},\qquad Z_{T/G}(\tau,\bar\tau):=\frac1{|G|}\sum_{gh=hg}\epsilon_\alpha(g,h)Z_{g,h}(\tau,\bar\tau).$$
   Here $[g]$ ranges over one representative per conjugacy class. In the trace-class case conjugation invariance and $|[g]|=|G|/|C_G(g)|$ identify this sum with $\sum_{[g]}\operatorname{Tr}_{\mathcal H_g}(P_g^\alpha Q_g)$, the trace on the projected state space. In a regularized case require the analogous identity with the supplied projected-sector regularization. Since $\epsilon_\alpha(e,h)=1$, the projected untwisted sector is exactly the invariant subspace of the supplied parent $T$; for $G=\{e\}$ the genus-zero data reduce to $T$.

The finite coordinate interface is also part of the completion data. Require the group action on field labels to commute with the bulk field-label coordinate transports, and the action on states to intertwine their state-space transports and chart-vacuum data. Supply corresponding coordinate transports on every twisted sector and sector-field test-density space, respecting restrictions, sector OPEs, centralizer projections and the stated phase lifts. Require their induced transports on the projected sum to satisfy the full-local supplier's finite cocycles, test-density Jacobian law, centered-state limits and vacuum equations. These are hypotheses on a completion, not a claim that an arbitrary finite action integrates its Virasoro representations or automatically supplies the missing analytic data.

When these data and equalities hold, $T/G$ denotes the resulting genus-zero full-local orbifold data together with its specified torus traces. A geometric quotient of a target space is not part of the definition and need not exist. Modular invariance of the weighted torus sum follows from the exact pair permutation and phase equality; this genus-one fact alone supplies neither the twisted OPE data nor higher-genus sewing.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[Ginsparg, §§8.3–8.5](https://arxiv.org/pdf/hep-th/9108028v1)

[Sharpe, §4.2.1, equations (26)–(27)](https://arxiv.org/pdf/hep-th/0008154v3)

[Dong–Li–Mason, Introduction and Theorems 1 and 3](https://arxiv.org/pdf/q-alg/9703016)

## Remarks

The Ginsparg construction is used for the finite-group projection and commuting-holonomy trace conventions. Dong–Li–Mason prove related existence and modular-covariance results for rational vertex operator algebras under finiteness hypotheses; those chiral results do not prove the general full-local completion required by this definition. Neither source makes every finite symmetry anomaly-free. The anomaly-free completion and its twisted OPE/sewing data remain explicit hypotheses.
