---
id: pthm-st-nonzero-momentum-pplus-chart
kind: physics-theorem
title: "Nonzero Momentum Pplus Chart"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 11
deps:
  - def-st-flat-bosonic-string-model
  - def-st-bosonic-covariant-state-space
  - def-st-bosonic-brst-complex
  - pthm-st-critical-dimension-flat-bosonic-string
  - pthm-st-bosonic-brst-nilpotence
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-bosonic-covariant-state-space: formulation-prerequisite
  def-st-bosonic-brst-complex: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-bosonic-brst-nilpotence: physical-result
physical_scope: "Spatial-rotation charts and induced BRST/covariant-form transport for nonzero momenta in the 26-dimensional flat Minkowski target; it excludes p=0."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§2.2.1 (PDF file pp.40–42; printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); light-cone chart requires p^+ nonzero; the spatial-rotation proof is local."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In $D=26$ Minkowski target space, write $X^+=(X^0+X^{25})/\sqrt2$ and $p^+=(p^0+p^{25})/\sqrt2$. Every nonzero momentum $p=(p^0,\vec p)\in\mathbb R^{1,25}$ can be carried by a spatial rotation $R\in SO(25)$ to a frame with $p^+=(p^0+(R\vec p)^{25})/\sqrt2\ne0$: if $p^0\ne0$, choose $R$ so $(R\vec p)^{25}=0$; if $p^0=0$, then $\vec p\ne0$ and choose $R$ to align it with the $25$ direction. The nonzero-momentum chart argument does not cover $p=0$.

At $D=26,a=1$, let $L_n^m=\frac12\sum_{r\in\mathbb Z}:\alpha_{n-r}\cdot\alpha_r:$ with $[\alpha_m^\mu,\alpha_n^\nu]=m\eta^{\mu\nu}\delta_{m+n,0}$ and $\{b_m,c_n\}=\delta_{m+n,0}$, and define the single-chiral BRST operator on the algebraic matter--ghost Fock space by $Q_B=\sum_n c_{-n}(L_n^m-a\delta_{n0})-\frac12\sum_{m,n}(m-n):c_{-m}c_{-n}b_{m+n}:$. The ghost-number grading has $\operatorname{gh}(c_n)=1$ and $\operatorname{gh}(b_n)=-1$, and $L_0^{\rm tot}=\{Q_B,b_0\}$. Its relative spaces are $\mathcal C_{\rm rel}^q(p)=\{\psi:\operatorname{gh}(\psi)=q,\ b_0\psi=0,\ L_0^{\rm tot}\psi=0\}$, with cohomology
$$
H_{\rm rel}^q(p)=\ker\bigl(Q_B:\mathcal C_{\rm rel}^q(p)\to\mathcal C_{\rm rel}^{q+1}(p)\bigr)/\operatorname{im}\bigl(Q_B:\mathcal C_{\rm rel}^{q-1}(p)\to\mathcal C_{\rm rel}^{q}(p)\bigr).
$$
The representative pairing at ghost number one is $\langle\psi|c_0|\phi\rangle_K$. The covariant weighted level is the eigenvalue of $N_{\rm lev}=\sum_{n>0}\alpha_{-n}\cdot\alpha_n$; in the covariant Fock space at level $N$ the physical subspace is $P_N(p)=\{\psi:L_n\psi=0\ (n>0),\ (L_0-a)\psi=0\}$ and its radical is $\operatorname{Rad}(P_N(p))=P_N(p)\cap P_N(p)^\perp$, with orthogonality in the ambient indefinite form.

For $R\in SO(25)$ let $\Lambda_R=\operatorname{diag}(1,R)$. Define $U_R$ on the algebraic matter--ghost Fock basis by sending $|0;p\rangle$ to $|0;\Lambda_Rp\rangle$, each matter oscillator $\alpha_n^\mu$ to $(\Lambda_R^{-1})^\mu{}_{\nu}\alpha_n^\nu$ (and each tilded oscillator by the same rule in a closed sector), and every $b_n,c_n$ mode to itself, and extend linearly to finite mode monomials. This map intertwines $Q_B$ between momentum fibers $p$ and $\Lambda_Rp$, sends each relative complex onto the corresponding relative complex, and is a Krein isometry. It preserves the representative pairing $\langle\psi|c_0|\phi\rangle_K$ and therefore every induced $c_0$ pairing on cohomology on which that pairing descends. It also maps each $P_N(p)$ isometrically onto $P_N(\Lambda_Rp)$, carries its radical to the corresponding radical, and induces an isometry of the radical quotients. Thus results proved in a $p^+\ne0$ chart transport to every nonzero momentum.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §2.2.1 (PDF file pp.40–42; printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); printed pp.33–35); light-cone chart requires $p^+$ nonzero; the spatial-rotation proof is local.

## Facts & Assumptions

[F1] [[def-st-flat-bosonic-string-model]] fixes the 26-dimensional target metric $\eta=\operatorname{diag}(-,+,\ldots,+)$.

[F2] The draft physics theorem [[pthm-st-critical-dimension-flat-bosonic-string]] locally proves $D=26$ and $a=1$ for the standard flat tensile model under its stated Weyl and finite-part conventions.

**Given:** Let $p=(p^0,\vec p)\in\mathbb R^{1,25}$ be nonzero. Define $X^+=(X^0+X^{25})/\sqrt2$ and $p^+=(p^0+p^{25})/\sqrt2$.

[F3] The draft definition [[def-st-bosonic-brst-complex]] fixes $Q_B$, the matter--ghost Krein form, the relative constraints, and the representative pairing with $c_0$.

[F4] The draft definition [[def-st-bosonic-covariant-state-space]] defines $P_N(p)$, its ambient form, and its radical quotient.

[F5] [[pthm-st-bosonic-brst-nilpotence]] proves $Q_B^2=0$ at $D=26,a=1$ for the charge and ordering in [F3]. The same identity applies to a single closed chiral copy because it uses only the common zero-mode parameter $k$, not its conversion to target momentum.

## Proof

1.1 The criticality input [F2] sets $D=26$, so the spatial rotation group is $SO(25)$. If $p^0\ne0$, choose a unit spatial vector orthogonal to $\vec p$ when $\vec p\ne0$ and an orientation-preserving rotation $R\in SO(25)$ sending that vector to the 25-axis; then $(R\vec p)^{25}=0$. If $\vec p=0$, take $R=I$. In either case the rotated momentum has $p^+=p^0/\sqrt2\ne0$. [given, F1, F2, choose, algebra]

1.2 If $p^0=0$, nonzero $p$ implies $\vec p\ne0$. Choose $R\in SO(25)$ carrying $\vec p/|\vec p|$ to the 25-axis; then $(R\vec p)^{25}=|\vec p|$ and $p^+=|\vec p|/\sqrt2\ne0$. [given, F1, F2, choose, algebra]

2.1 By [F5], $Q_B^2=0$ at the stated critical parameters; [F3] then gives actual relative subcomplexes and cohomologies. Fix any $R\in SO(25)$ and put $\Lambda_R=\operatorname{diag}(1,R)$. On each finite-particle state define $U_R$ by the rule in the Statement. Since $\Lambda_R^T\eta\Lambda_R=\eta$, the oscillator commutators, adjoints, and the Minkowski contractions in every $L_n^m$ are preserved, and the same calculation holds for the commuting tilded copy. For the zero mode this convention gives $(\Lambda_R^{-1})^\mu{}_{\nu}k^\nu(\Lambda_Rp)=k^\mu(p)$; for every nonzero mode, contraction with $k(\Lambda_Rp)$ gives the original contraction with $k(p)$. Thus the zero-mode terms in every $L_n^m$ intertwine as well as the quadratic nonzero-mode terms. The scalar momentum-fibre vacuum pairing is preserved because both vacua have norm one and the oscillator contraction metric is invariant; the ghost pairing is unchanged because ghost modes are fixed. Hence $U_R$ is a Krein isometry. The BRST formula is built from the invariant matter $L_n^m$, the scalar intercept, and unchanged ghost modes, so $Q_B(\Lambda_Rp)U_R=U_RQ_B(p)$; likewise $b_0$ and $L_0^{\rm tot}$ intertwine. Thus $U_R$ maps the relative complexes and their cycles and boundaries bijectively. Since it fixes $c_0$, $\langle U_R\psi|c_0|U_R\phi\rangle_K=\langle\psi|c_0|\phi\rangle_K$. Finally, the same invariance of $L_n$ and of the ambient matter form maps $P_N(p)$ onto $P_N(\Lambda_Rp)$, maps $P_N(p)\cap P_N(p)^\perp$ onto the corresponding radical, and preserves the quotient form. Applying this to the rotations in steps 1.1--1.2 proves all stated transports. No such rotation makes $p=0$ have nonzero $p^+$, so zero momentum is excluded. [F1, F3, F4, F5, step 1.1, step 1.2, algebra] ∎
