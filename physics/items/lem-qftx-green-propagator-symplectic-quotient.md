---
id: lem-qftx-green-propagator-symplectic-quotient
kind: lemma
title: Causal propagator induces the free scalar symplectic quotient
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-qftx-green-hyperbolic-interface
  - lem-qftx-compact-green-support-overlap
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-green-hyperbolic-interface: mathematical-premise
  lem-qftx-compact-green-support-overlap: mathematical-premise
  lem-manifold-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 3 §3.4, Corollary 3.4.3 and Lemma 3.4.4, printed pp. 89–90; Chapter 4 §4.3, equations (4.5)–(4.6), printed pp. 127–129.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.2, equations (24)–(29), causal propagator pairing and the quotient by the field equation, printed pp. 14–16.
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $(M,g,N,P,E_+,E_-)$ be a Green-data interface. Put $\mathcal D_g(M)=C_c^\infty(M;\mathbb R)$, $V(M):=\mathcal D_g(M)/P\mathcal D_g(M)$, and, for $[f],[h]\in V(M)$, define

$$\sigma_M([f],[h]):=\int_M f(Eh)\,\mu_g,$$

with $E=E_--E_+$. Then $E\mathcal D_g(M)\subseteq\operatorname{Sol}_{\mathrm{sc}}(M)$, $\ker E=P\mathcal D_g(M)$, and $\sigma_M$ is a well-defined nondegenerate real alternating bilinear form on $V(M)$. Thus $V(M)$ is a real symplectic vector space. This statement does not assert that $E\mathcal D_g(M)=\operatorname{Sol}_{\mathrm{sc}}(M)$.

## Statement references

[[def-qftx-green-hyperbolic-interface]]

[[lem-qftx-compact-green-support-overlap]]

[[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]

## Facts & Assumptions

**Given:** Countable Choice, a Green-data interface $(M,g,N,P,E_+,E_-)$, and $f,h\in\mathcal D_g(M)$.

[A1] Assume $\mathrm{AC}_\omega$, with the exact principle of [[def-countable-choice]].

[F1] [[def-qftx-green-hyperbolic-interface]]: $E=E_--E_+$, $PE_\pm f=f$, $E_\pm Pf=f$, $\operatorname{supp}E_+f\subseteq J^+(\operatorname{supp}f)$, $\operatorname{supp}E_-f\subseteq J^-(\operatorname{supp}f)$, and $P$ is formally self-adjoint for $\mu_g$.

[F2] [[lem-qftx-compact-green-support-overlap]]: every closed subset of $J^+(K_1)\cap J^-(K_2)$, for compact $K_1,K_2$, is compact, using only finite compact-diamond enclosures under Countable Choice.

[F3] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: if $C$ is compact and $O$ is open with $C\subset O$, there is a smooth $\eta:M\to[0,1]$ equal to $1$ on a neighborhood of $C$ and with compact support in $O$.

## Proof

**Proof technique:** direct.

1.1 Since $PE_+f=PE_-f=f$, $P(Ef)=0$. Its support is contained in $J^+(\operatorname{supp}f)\cup J^-(\operatorname{supp}f)$ by [F1], so $Ef\in\operatorname{Sol}_{\mathrm{sc}}(M)$. Also $E(Pf)=E_-Pf-E_+Pf=f-f=0$. Hence $P\mathcal D_g(M)\subseteq\ker E$. [F1, given, algebra]

1.2 Let $f,h\in\mathcal D_g(M)$, $u=E_-f$ and $v=E_+h$. Their supports meet in the closed set $C:=\operatorname{supp}u\cap\operatorname{supp}v$, contained in $J^-(\operatorname{supp}f)\cap J^+(\operatorname{supp}h)$ and compact by [F2]. If $C=\varnothing$, both $fv$ and $uh$ vanish; otherwise choose by [F3] a compactly supported smooth cutoff $\eta$ equal to $1$ on a neighborhood of $C$. Since $f=Pu$ and $h=Pv$, formal self-adjointness applied to the compactly supported functions $\eta u$ and $\eta v$ gives $\int_M f v\,\mu_g=\int_M u h\,\mu_g$: after expanding $P(\eta u)$ and $P(\eta v)$, each commutator term is supported where a derivative of $\eta$ meets $\operatorname{supp}u\cap\operatorname{supp}v\subseteq C$, so it vanishes because $\eta=1$ near $C$; the remaining integrands $fv$ and $uh$ are supported in $C$. Applying the same calculation with $u=E_+f$ and $v=E_-h$ gives $\int_M f(E_-h)\,\mu_g=\int_M (E_+f)h\,\mu_g$. Subtracting these two Green adjoint identities yields $E^*=-E$ under the compact test-density pairing. [A1, F1, F2, F3, given, algebra]

2.1 Conversely suppose $Ef=0$, so $u:=E_-f=E_+f$. Then $Pu=f$ by [F1] and $\operatorname{supp}u\subseteq J^-(K)\cap J^+(K)$, where $K=\operatorname{supp}f$ is compact. Its closed support is compact by [F2], so the smooth function $u$ is compactly supported. Thus $u\in\mathcal D_g(M)$ and $f=Pu\in P\mathcal D_g(M)$. Together with step 1.1, $\ker E=P\mathcal D_g(M)$. [F1, F2, step 1.1, given, algebra]

3.1 If $f$ is replaced by $f+Pk$, then $\int_M(Pk)(Eh)\,\mu_g=\int_M kP(Eh)\,\mu_g=0$ by the formal adjoint identity in [F1] and step 1.1; if $h$ is replaced by $h+Pk$, then $E(Pk)=0$ by step 1.1. Thus $\sigma_M$ is well-defined on $V(M)$. Bilinearity follows from linearity of $E$ and the integral. From step 1.2, $\sigma_M([h],[f])=\int hEf\,\mu_g=-\int fEh\,\mu_g=-\sigma_M([f],[h])$, so it is alternating. If $\sigma_M([f],[h])=0$ for every $[h]$, step 1.2 gives $\int_M (Ef)h\,\mu_g=0$ for every compact smooth real $h$. If $Ef$ were nonzero at a point, continuity would give a relatively compact coordinate neighborhood on which it has one strict sign; choose a smaller compact coordinate ball there and use [F3] to obtain a nonnegative test bump equal to $1$ on that ball. Its integral against $Ef\mu_g$ is then nonzero because $\mu_g$ is a positive smooth density and the ball has positive volume, a contradiction. Hence $Ef=0$, and step 2.1 gives $[f]=0$. This proves nondegeneracy and completes the proof. [F1, F3, step 1.1, step 1.2, step 2.1, given, algebra] ∎
