---
id: prop-gauge-transformations-act-on-principal-connections
kind: proposition
title: Gauge transformations act on principal connections and carry curvature
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
axiom_base: "ZF + AC_omega, inherited through the smooth tangent-bundle and vector-field conventions used for principal connections; the transport proof adds no choice."
deps:
  - def-principal-connection-and-vertical-curvature
  - def-gauge-group-of-a-smooth-principal-bundle
  - def-countable-choice
  - thm-chain-rule-for-differentials-of-smooth-maps
  - cor-diffeomorphism-pushforward-preserves-lie-brackets
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/pdf/2110.06334"
      locator: "Chapter 1, §1.3, printed pp. 32–36 (PDF pp. 31–35), principal connections and curvature; Chapter 2, §2.1, printed pp. 53–54 (PDF pp. 52–53), gauge transformations."
    - title: "Jack Smith, Differential Geometry, Cambridge Part III Michaelmas 2022 lecture notes taken by Leonard Tomczak"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
      locator: "Chapter 9, §9.4, printed p. 44 (PDF p. 43), principal connection and curvature conventions."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $P\to M$ be a smooth right principal
$G$-bundle with a principal connection $H$, and let
$\Phi\in\mathcal G(P)$. Then
$$\Phi_*H:=d\Phi(H)$$
is a principal connection. If $K_H$ and $K_{\Phi_*H}$ are the vertical-valued
curvatures from
[[def-principal-connection-and-vertical-curvature]], then for
$X,Y\in T_pP$,
$$K_{\Phi_*H}(d\Phi_pX,d\Phi_pY)=d\Phi_p(K_H(X,Y)).$$
Composition makes this a left action of $\mathcal G(P)$ on the set of
principal connections.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth right principal $G$-bundle
$\pi:P\to M$, a principal connection $H$, and a smooth gauge transformation
$\Phi:P\to P$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every
countable family of nonempty sets has a choice function; it supplies the
declared smooth tangent-bundle convention used by the connection definition.

[F1] [[def-principal-connection-and-vertical-curvature]]: a principal
connection is a smooth right-invariant complement $TP=VP\oplus H$, and its
curvature is $K_H(X,Y)=-v([hX,hY])$.

[F2] [[def-gauge-group-of-a-smooth-principal-bundle]]: a gauge transformation
is a smooth diffeomorphism $\Phi$ satisfying $\pi\circ\Phi=\pi$ and
$\Phi(pg)=\Phi(p)g$.

[L1] [[thm-chain-rule-for-differentials-of-smooth-maps]]: for smooth $F,G$,
$d(G\circ F)_p=dG_{F(p)}\circ dF_p$.

[L2] [[cor-diffeomorphism-pushforward-preserves-lie-brackets]]: a
diffeomorphism satisfies $F_*[X,Y]=[F_*X,F_*Y]$.

## Proof

1.1 Under [A1], the smooth tangent-bundle convention used by [F1] is in force. Since $\pi\circ\Phi=\pi$, [L1] gives $d\pi_{\Phi(p)}\circ d\Phi_p=d\pi_p$; thus $d\Phi_p(V_pP)\subseteq V_{\Phi(p)}P$, and applying the same identity to $\Phi^{-1}$ gives equality. [A1, F1, F2, L1]

2.1 Set $H'=d\Phi(H)$. The isomorphism $d\Phi_p$ maps vertical and horizontal complements to complements, and differentiating $\Phi\circ R_g=R_g\circ\Phi$ by [L1] shows right invariance; hence [F1] makes $H'$ a principal connection. [F1, F2, L1, step 1.1]

3.1 At $q=\Phi(p)$, the projections satisfy $h'\circ d\Phi=d\Phi\circ h$ and $v'\circ d\Phi=d\Phi\circ v$. By [L2] pushforward preserves brackets, so the curvature formula [F1] gives $K_{H'}(d\Phi X,d\Phi Y)=-v'([d\Phi(hX),d\Phi(hY)])=-d\Phi(v([hX,hY]))=d\Phi(K_H(X,Y))$. [F1, L2, step 2.1]

4.1 Pushforward composition gives $(\Phi\circ\Psi)_*H=\Phi_*(\Psi_*H)$ and the identity pushes $H$ to itself, so $\Phi\cdot H:=\Phi_*H$ is a left group action. [F2, step 2.1, algebra] ∎
