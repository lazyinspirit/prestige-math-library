---
id: def-cft-r5-circle-reflection-orbifold-sectors
kind: definition
title: Reflection-orbifold sectors of the compact boson
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-compact-boson-full-theory
dependency_roles:
  def-cft-r5-compact-boson-full-theory: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "Sections 8.3–8.4, printed pp. 118–124, especially equations (8.21)–(8.24): reflection action, two fixed-point twist fields, the even-oscillator projection, and the circle-orbifold torus amplitude."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the following explicit convention for the half-integer bosonic Fock spaces. For each $j\in\{0,1\}$, let
$$\mathcal H_{\rho,j}^{\mathrm{alg}}=\mathbb C[t_s,\bar t_s:s\in\mathbb Z_{\ge0}+\tfrac12]\lvert j\rangle,$$
where each polynomial uses finitely many variables and $\lvert j\rangle$ is the constant monomial. For $s>0$, set $\alpha_{-s}f=t_sf$, $\alpha_sf=s\,\partial f/\partial t_s$, $\bar\alpha_{-s}f=\bar t_sf$, and $\bar\alpha_sf=s\,\partial f/\partial\bar t_s$. In particular, every positive mode annihilates $\lvert j\rangle$. Give distinct monomials the orthogonal inner product
$$\left\langle\prod_{s>0}t_s^{u_s}\bar t_s^{\bar u_s}\lvert j\rangle,\prod_{s>0}t_s^{v_s}\bar t_s^{\bar v_s}\lvert j\rangle\right\rangle=\mathbf 1_{u=v,\,\bar u=\bar v}\prod_{s>0}s^{u_s+\bar u_s}u_s!\,\bar u_s!.$$
The products are finite on monomials. This positive inner product makes $\alpha_s^*=\alpha_{-s}$ and $\bar\alpha_s^*=\bar\alpha_{-s}$ on the algebraic core; $\mathcal H_{\rho,j}$ is its Hilbert completion.

For a Ginsparg radius $r>0$, the compact target is the circle $S^1_r=\mathbb R/(2\pi r\mathbb Z)$. Let $\rho$ act by $[X]\mapsto[-X]$, $V_{m,n}\mapsto V_{-m,-n}$, and $a_k,\bar a_k\mapsto-a_k,-\bar a_k$ for every integer mode $k$, including $k=0$. The **untwisted invariant sector** is the $+1$ eigenspace of $\rho$ in the Hilbert space $\mathcal H_r$ of [[def-cft-r5-compact-boson-full-theory]].

A spatially $\rho$-twisted lift of the target coordinate obeys $X(\sigma+2\pi)=-X(\sigma)+2\pi rj$, where $j\in\{0,1\}$ represents the two classes modulo $2$. These sectors are localized at the fixed classes $[0]$ and $[\pi r]$. For each $j$, let $\mathcal H_{\rho,j}^{\mathrm{alg}}$ be the bosonic Fock space generated from one ground vector $|j\rangle$ by left and right modes with $s\in\mathbb Z+\frac12$, satisfying $[\alpha_s,\alpha_t]=s\delta_{s+t,0}I$ and $[\bar\alpha_s,\bar\alpha_t]=s\delta_{s+t,0}I$; left and right modes commute. The ground vectors have norm one, and the Fock inner product is fixed by $\alpha_s^*=\alpha_{-s}$, $\bar\alpha_s^*=\bar\alpha_{-s}$; let $\mathcal H_{\rho,j}$ be the Hilbert completion. There are no momentum-winding zero modes. If $n_s,\bar n_s\in\mathbb Z_{\ge0}$ for $s>0$ are the occupation numbers of $\alpha_{-s},\bar\alpha_{-s}$, set $E_L=\sum_s s n_s$, $E_R=\sum_s s\bar n_s$, $N_L=\sum_s n_s$, and $N_R=\sum_s\bar n_s$. The ground weights are $(1/16,1/16)$, and a descendant has weights $(h,\bar h)=(1/16+E_L,1/16+E_R)$. The centralizer lift $\rho_{\mathrm{tw}}$ fixes both $|j\rangle$ and acts on a descendant by $(-1)^{N_L+N_R}$. Thus it has order two; the projection keeps descendants with an even total number of oscillator creation operators, not a parity exponent of the half-integer energy level.

The **reflection-orbifold Hilbert space** is the direct sum of the $\rho$-invariant untwisted subspace and the $+1$ eigenspaces of $\rho_{\mathrm{tw}}$ in $\mathcal H_{\rho,0}\oplus\mathcal H_{\rho,1}$, where $\mathcal H_{\rho,j}$ is the Hilbert completion of $\mathcal H_{\rho,j}^{\mathrm{alg}}$. On each twisted Fock basis, let $L_0$ and $\bar L_0$ act diagonally with the weights $h,\bar h$ specified above. The two twisted ground states are created by fields $\sigma_0,\sigma_{\pi r}$ with the stated reflection monodromy. Put $J(z)=a(z)=\sum_{k\in\mathbb Z}a_kz^{-k-1}$ and $\bar J(\bar z)=\bar a(\bar z)=\sum_{k\in\mathbb Z}\bar a_k\bar z^{-k-1}$. For each insertion pair use the square-root branch $(z-w)^{1/2}=\exp(\frac12\operatorname{Log}(z-w))$ on $z-w\in\mathbb C\setminus(-\infty,0]$, and its conjugate for $\bar z-\bar w$. Normalize the excited twist fields $\tau_j,\bar\tau_j$ so that $J(z)\sigma_j(w,\bar w)\sim\tau_j(w,\bar w)/(z-w)^{1/2}$ and $\bar J(\bar z)\sigma_j(w,\bar w)\sim\bar\tau_j(w,\bar w)/(\bar z-\bar w)^{1/2}$ on these branches.

For $g\in\{1,\rho\}$ let $\mathcal H_1=\mathcal H_r$ and $\mathcal H_\rho=\mathcal H_{\rho,0}\oplus\mathcal H_{\rho,1}$. Define $U_1^{(g)}=I$; define $U_\rho^{(1)}=\rho$ on $\mathcal H_1$ and $U_\rho^{(\rho)}=\rho_{\mathrm{tw}}$ on $\mathcal H_\rho$. The torus trace in spatial sector $g$ with temporal insertion $h$ is
$$Z_{g,h}(r;\tau)=\operatorname{Tr}_{\mathcal H_g}\!\left(U_h^{(g)}q^{L_0-1/24}\bar q^{\bar L_0-1/24}\right),\qquad q=e^{2\pi i\tau},\quad \bar q=e^{-2\pi i\bar\tau},\quad \operatorname{Im}\tau>0.$$
The **reflection-orbifold torus amplitude** is the commuting-holonomy sum
$$Z_{\mathrm{orb}}(r;\tau)=\frac12\sum_{g,h\in\{1,\rho\}}Z_{g,h}(r;\tau).$$
In particular, the Fock definitions give the absolutely convergent products
$$Z_{\rho,1}=2q^{1/48}\bar q^{1/48}\prod_{k\ge1}(1-q^{k-1/2})^{-1}(1-\bar q^{k-1/2})^{-1},\qquad Z_{\rho,\rho}=2q^{1/48}\bar q^{1/48}\prod_{k\ge1}(1+q^{k-1/2})^{-1}(1+\bar q^{k-1/2})^{-1}.$$
On the untwisted space, $Z_{1,1}=Z_{\mathrm{circ}}$ and
$$Z_{1,\rho}=q^{-1/24}\bar q^{-1/24}\prod_{k\ge1}(1+q^k)^{-1}(1+\bar q^k)^{-1},$$
because nonzero charge sectors are exchanged in pairs by $\rho$ and only the zero-charge sector contributes to this trace. The untwisted circle amplitude is $Z_{\mathrm{circ}}(r;\tau)=\operatorname{Tr}_{\mathcal H_r}(q^{L_0-1/24}\bar q^{\bar L_0-1/24})$. For $\operatorname{Im}\tau>0$, define
$$\eta(\tau)=q^{1/24}\prod_{k\ge1}(1-q^k),\quad \theta_3(\tau)=\sum_{j\in\mathbb Z}q^{j^2/2},\quad \theta_4(\tau)=\sum_{j\in\mathbb Z}(-1)^jq^{j^2/2},\quad \theta_2(\tau)=\sum_{j\in\mathbb Z}q^{(j+1/2)^2/2}.$$
Use the convergent trace sums for $\operatorname{Im}\tau>0$; no value at $r=1$ is assumed as part of this definition. This definition does not assert higher-genus sewing or a path-integral construction.

## Definition references

[[def-cft-r5-compact-boson-full-theory]]

[Ginsparg, Sections 8.3–8.4](https://arxiv.org/pdf/hep-th/9108028v1)

## Remarks

The twisted-sector ground-state multiplicity is two because the circle reflection has the two fixed classes $[0]$ and $[\pi r]$. Ginsparg derives the radius-one trace comparison in Section 8.4, equation (8.24); neither that evaluation nor the identity with the independent-Majorana spin sum is assumed here.
