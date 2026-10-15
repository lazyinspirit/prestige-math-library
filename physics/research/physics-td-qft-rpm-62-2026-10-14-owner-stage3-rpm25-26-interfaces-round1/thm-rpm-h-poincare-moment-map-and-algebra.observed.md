---
id: thm-rpm-h-poincare-moment-map-and-algebra
kind: theorem
title: "Poincare cotangent moment map and full generator algebra"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 6
deps: ["def-rpm-h-poincare-charge-space", "thm-rpm-h-canonical-poisson-and-flow", "prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map", "thm-rpm-h-flat-shell-global-reduction", "thm-rpm-h-inertial-time-reduced-hamiltonian", "def-countable-choice"]
dependency_roles: {"def-rpm-h-poincare-charge-space": "mathematical-premise", "thm-rpm-h-canonical-poisson-and-flow": "mathematical-premise", "prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map": "mathematical-premise", "thm-rpm-h-flat-shell-global-reduction": "mathematical-premise", "thm-rpm-h-inertial-time-reduced-hamiltonian": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
    - title: "Nesta van der Schaaf, Classical and Quantum Particles in Galilean and Poincaré Spacetime, complete 2017 monograph PDF; §9.3 PDF pp. 77–79; §10.2.2 PDF pp. 81–82."
      url: https://www.math.ru.nl/~landsman/Nesta.pdf
      locator: "Complete 85-page monograph; full relevant sections inspected. Source uses natural units and signature (+---), translated explicitly in local statements."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$. For the group and cotangent conventions of [[def-rpm-h-poincare-charge-space]], the map $\mu:T^*\mathbb R^4\to\mathfrak g^*$ defined by $\langle\mu(x,p),(a,A)\rangle=\ell_{(a,A)}(x,p)$ is a smooth equivariant moment map and obeys

$$\{\ell_\xi,\ell_\eta\}=\ell_{[\xi,\eta]},\quad \{P^a,P^b\}=0,\quad \{J^{ab},P^c\}=\eta^{ac}P^b-\eta^{bc}P^a,$$

$$\{J^{ab},J^{cd}\}=\eta^{ac}J^{bd}-\eta^{ad}J^{bc}-\eta^{bc}J^{ad}+\eta^{bd}J^{ac}.$$

For shell coordinates write $\mathbf p=(p_1,p_2,p_3)$ and $|\mathbf p|^2:=p_1^2+p_2^2+p_3^2$. For each future massive shell with $m>0$ in kg, $c>0$ in m/s, $p_0=-E/c$, and $E=\sqrt{m^2c^4+c^2|\mathbf p|^2}$, or nonzero future null shell with $m=0$ and $|\mathbf p|>0$, its Poincare charges descend to the global quotient by complete characteristic lines of the shell constraint. For vectors $u,v\in\mathbb R^4$, define $(u\wedge v)^{ab}:=u^av^b-u^bv^a$. The induced dual action is $(P,J)\mapsto(\Lambda P,\Lambda J\Lambda^T+a\wedge\Lambda P)$. On the fixed-time slice $x^0=ct$, with physical position $q^i=x^i$, the boost component $B_i=J^{0i}=ct p_i-q^iE/c$ is explicitly time dependent and satisfies $\partial_tB_i+\{B_i,E\}=0$. These are mathematical identities; conservation is conditional on the stated free-shell evolution.

## Facts & Assumptions

**Given:** The affine Poincaré action, cotangent phase space, and Poisson sign convention of [[def-rpm-h-poincare-charge-space]] and the exact conditional suppliers below.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

[F1] [[def-rpm-h-poincare-charge-space]]: $Y_{(a,A)}=a+Ax$, $\ell_{(a,A)}=p_b(a^b+A^b{}_cx^c)$, $P^a=\eta^{ab}p_b$, and $J^{ab}=x^aP^b-x^bP^a$.

[L1] [[thm-rpm-h-canonical-poisson-and-flow]]: the current H0 draft states $\{F,G\}=F_xG_p-F_pG_x$, $\iota_{X_H}\omega=dH$, and local flow only on the open solution domain. Its H25 Step 1 record is ready and hash-current, but the draft carrier has no pipeline_run binding and its ai-altered proof has no independent proof approval. Its coordinate convention matches the proof.

[F2] [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]]: for the cotangent lift and the library $\exp(-s\xi)$ convention, $\mu^\xi=-p(\xi_Q)$ satisfies $d\mu^\xi=-\iota_{\xi_{T^*Q}}\omega$ and the cotangent-lift map is coadjoint equivariant.

[L2] [[thm-rpm-h-flat-shell-global-reduction]]: the current H8 draft states the future-shell equation $-p_0=P^0=\sqrt{m^2c^2+|p|^2}$, complete affine-line flow, global $(a,p)$ quotient, reduced form $da^i\wedge dp_i$, and nonzero-null restriction. Its statement and dependencies match the H25 manifest. Its Step 1 record is ready/hash-current, but the carrier is still draft and unbound to pipeline_run, so this is not independent proof approval.

[L3] [[thm-rpm-h-inertial-time-reduced-hamiltonian]]: the current H8 draft states $p_0=-E/c$, $E=\sqrt{m^2c^4+c^2|p|^2}$, $q=a+tE_p$, and $\dot q=c^2p/E$, $\dot p=0$ on $x^0=ct$. The supplier is a mathematical deduction within its stated chart, positive-root and nonzero-null hypotheses; it introduces no physical action adoption.

## Proof

**Proof technique:** direct cotangent moment map and canonical differentiation.

**Given:** The library sign conventions, [F1], and the exact conditional shell statements [L1]–[L3].

1.1 For $\xi=(a,A)$ the cotangent lift has positive infinitesimal field $(a+Ax,-A^Tp)=-\xi_{T^*Q}$ because the library fundamental vector is generated by $\exp(-s\xi)$. With $\omega=dx^a\wedge dp_a$, $\iota_{X_{\ell_\xi}}\omega=d\ell_\xi$ by [L1], as $\partial_p\ell=a+Ax$ and $-\partial_x\ell=-A^Tp$. Therefore $d\ell_\xi=-\iota_{\xi_{T^*Q}}\omega$. The cotangent lift is symplectic and equivariant by [F2], so $\mu$ is the claimed equivariant moment map. [F1, F2, L1, A1, algebra]

1.2 Substituting $P^a=\eta^{ab}p_b$ and $J^{ab}=x^aP^b-x^bP^a$ into [L1]'s canonical bracket, Leibniz gives $\{P^a,P^b\}=0$ and $\{J^{ab},P^c\}=\eta^{ac}P^b-\eta^{bc}P^a$. Applying Leibniz to the four products in $\{J^{ab},J^{cd}\}$ gives the four displayed metric terms, with signs fixed by $\{x^a,p_b\}=\delta^a_b$. [F1, L1, algebra]

1.3 The full dual action follows directly from the semidirect group law, without restricting to the cotangent moment-map image. For $g=(a,\Lambda)$, multiplication and inversion give $\operatorname{Ad}_g(b,B)=(\Lambda b-\Lambda B\Lambda^{-1}a,\Lambda B\Lambda^{-1})$, hence $\operatorname{Ad}_{g^{-1}}(b,B)=(\Lambda^{-1}(b+Ba),\Lambda^{-1}B\Lambda)$. For an arbitrary dual charge $(P,J)$ use the pairing in [F1], $\langle(P,J),(b,B)\rangle=P_b b^b-\tfrac12J_{bc}B^{bc}$, and define $g\cdot(P,J)$ by pairing with $\operatorname{Ad}_{g^{-1}}(b,B)$. Lorentz invariance of $\eta$ transforms the first term to $P'_b b^b+P'_bB^b{}_ca^c$, where $P'=\Lambda P$, and the second term to $-\tfrac12(\Lambda J\Lambda^T)_{bc}B^{bc}$. Antisymmetry gives $P'_bB^b{}_ca^c=-\tfrac12(a\wedge P')_{bc}B^{bc}$. Thus for every $(b,B)$ the pairing equals that of $(\Lambda P,\Lambda J\Lambda^T+a\wedge\Lambda P)$; uniqueness of the dual coordinates proves the formula on all of $\mathfrak g^*$. For cotangent-image charges it also agrees with $x'=\Lambda x+a$, $p'=\Lambda^{-T}p$, and $J'=x'\wedge P'$, as required by equivariance. [F1, algebra]

1.4 On either future shell, the characteristic shift changes $J$ by $\alpha P\wedge P=0$ and leaves $P$ fixed, so each charge is constant on quotient fibres. In H8 coordinates $(a,p)$ the descended $P$ and $J$ are explicit smooth functions, so they descend smoothly through the quotient of [L2]. Lorentz invariance of $p^2$ gives $\{\ell_\xi,C_m\}=0$ for Lorentz generators; translations are constants in flat spacetime, so their brackets with $C_m$ also vanish. [F1, L2, L1, algebra]

2.1 For $\eta=(b,B)$, the canonical bracket gives $\{\ell_\xi,\ell_\eta\}=p\cdot A(b+Bx)-p\cdot B(a+Ax)=p\cdot(Ab-Ba+[A,B]x)=\ell_{[(a,A),(b,B)]},$ using the semidirect Lie bracket from [F1]. This proves the full dual generator identity. [F1, L1, step 1.1, algebra]

3.1 At $x^0=ct$, $P^0=E/c$, hence $B_i=J^{0i}=ct p_i-q^iE/c$. With the reduced canonical bracket from [L2]–[L3], $\{B_i,E\}=-cp_i$ and $\partial_tB_i=cp_i$. Their sum is zero, so $B_i$ is conserved along the free reduced motion, with the partial-time term essential. [F1, L2, L3, algebra] ∎
