---
id: thm-coadjoint-orbits-are-symplectic-manifolds
kind: theorem
title: Coadjoint orbits are symplectic manifolds
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit, lem-kks-form-is-independent-of-lie-algebra-representatives, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, thm-every-orbit-is-an-injectively-immersed-homogeneous-space, def-coadjoint-representation-of-a-lie-group, prop-adjoint-intertwines-the-exponential-map, prop-adjoint-is-a-smooth-lie-group-representation, thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism, prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes, thm-cartans-magic-formula, def-lie-algebra-over-a-field, def-countable-choice, def-fundamental-vector-field-of-a-left-action]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.5, Theorem 7.25 and its complete proof, printed pages 91--92
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Homework 17 and Lecture 22, §22.4, printed pages 137--140
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\mathcal O\subseteq\mathfrak g^*$ be a
coadjoint orbit with its canonical immersed homogeneous-space structure and let
$\omega$ be the KKS form of
[[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]]. Then $\omega$ is a
smooth, closed, nondegenerate two-form on $\mathcal O$, so $(\mathcal O,\omega)$
is a symplectic manifold. It is $G$-invariant, and the inclusion
$\Phi:\mathcal O\hookrightarrow\mathfrak g^*$ satisfies the component moment
equations $d\langle\Phi,\xi\rangle=-\iota_{\xi_{\mathcal O}}\omega$ for the
coadjoint action. It is the unique two-form on $\mathcal O$ for which the
inclusion is an infinitesimal moment map, hence in particular the unique
$G$-invariant symplectic form with that property.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a coadjoint orbit $\mathcal O$ with its canonical structure, and the KKS form $\omega$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the orbit and fundamental-field suppliers cited below.

[F1] The KKS form is defined by $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$ and is independent of representatives. [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]], [[lem-kks-form-is-independent-of-lie-algebra-representatives]].

[F2] The infinitesimal orbit map $\xi\mapsto\xi_{\mathcal O}(\beta)$ has image all of $T_\beta\mathcal O$ and kernel $\mathfrak g_\beta$, and $\xi_{\mathcal O}$ is smooth. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]], [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]].

[F3] The fundamental field of the coadjoint action satisfies $\xi_{\mathfrak g^*}(\beta)(\eta)=\beta([\xi,\eta])$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] Fundamental fields are equivariant: $d(a_h)_\beta\xi_{\mathcal O}(\beta)=(\operatorname{Ad}_h\xi)_{\mathcal O}(h\cdot\beta)$, and $\operatorname{Ad}_h=d(C_h)_e$ preserves brackets because the differential of a Lie-group homomorphism is a Lie-algebra homomorphism. [[prop-adjoint-intertwines-the-exponential-map]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]], [[def-fundamental-vector-field-of-a-left-action]].

[F5] Cartan's magic formula $\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega)$ holds, and $\mathcal L_X\omega=0$ whenever the flow of $X$ preserves $\omega$. [[thm-cartans-magic-formula]], [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]].

[F6] The inclusion $\Phi(\beta)=\beta$ is smooth, and its components $\Phi^\xi(\beta)=\langle\beta,\xi\rangle$ are linear on the vector space $\mathfrak g^*$, so $d\Phi^\xi_\beta(v)=v(\xi)$ for $v\in T_\beta\mathfrak g^*\simeq\mathfrak g^*$. [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]].

## Proof

**Proof technique:** direct.

1.1 By [F1] the KKS prescription gives, at every $\beta\in\mathcal O$, an alternating bilinear form on $T_\beta\mathcal O$, because the bracket is bilinear and alternating. [F1, F2, given]

2.1 Smoothness: fix $\beta_0\in\mathcal O$ and, using [F2], choose finitely many $\xi_1,\dots,\xi_k\in\mathfrak g$ whose fields $\xi_{i\mathcal O}(\beta_0)$ form a basis of $T_{\beta_0}\mathcal O$. By continuity the same fields are linearly independent on a neighbourhood $U$ of $\beta_0$, and they are smooth by [F2], so they form a smooth frame of $T\mathcal O|_U$. On $U$ the frame values $\omega(\xi_{i\mathcal O},\xi_{j\mathcal O})=\Phi^{[\xi_i,\xi_j]}$ are smooth functions, and expanding two smooth fields in the frame with smooth coefficients shows that $\omega$ is smooth on $U$; such neighbourhoods cover $\mathcal O$. [step 1.1, F2, F3]

2.2 Nondegeneracy: let $\beta\in\mathcal O$ and suppose $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=0$ for all $\eta\in\mathfrak g$. Then $\beta([\xi,\eta])=0$ for all $\eta$, so $\xi_{\mathfrak g^*}(\beta)=0$ by [F3], so $\xi\in\mathfrak g_\beta$ and $\xi_{\mathcal O}(\beta)=0$ by [F2]. Hence the radical of $\omega_\beta$ is zero. [step 1.1, F2, F3]

2.3 $G$-invariance: for $h\in G$ and $\beta\in\mathcal O$, step 1.1 and [F4] give $$\omega_{h\cdot\beta}\bigl(d(a_h)_\beta\xi_{\mathcal O}(\beta),d(a_h)_\beta\eta_{\mathcal O}(\beta)\bigr)=\omega_{h\cdot\beta}\bigl((\operatorname{Ad}_h\xi)_{\mathcal O}(h\cdot\beta),(\operatorname{Ad}_h\eta)_{\mathcal O}(h\cdot\beta)\bigr)=(h\cdot\beta)\bigl([\operatorname{Ad}_h\xi,\operatorname{Ad}_h\eta]\bigr)=\beta([\xi,\eta])=\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta)).$$ [step 1.1, F1, F3, F4]

2.4 The inclusion satisfies the moment equation: for $\zeta\in\mathfrak g$ and $\beta\in\mathcal O$, [F6] and [F3] give $$d\Phi^\zeta_\beta\bigl(\eta_{\mathcal O}(\beta)\bigr)=\eta_{\mathcal O}(\beta)(\zeta)=\beta([\eta,\zeta])=-\beta([\zeta,\eta])=-\omega_\beta\bigl(\zeta_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta)\bigr).$$ Since the vectors $\eta_{\mathcal O}(\beta)$ span $T_\beta\mathcal O$ by [F2], this is exactly $\iota_{\zeta_{\mathcal O}}\omega=-d\Phi^\zeta$. [step 1.1, F2, F3, F6]

3.1 Closedness: the flow of $\xi_{\mathcal O}$ is the action of the one-parameter group $\exp_G(-t\xi)$, which preserves $\omega$ by step 2.3, so $\mathcal L_{\xi_{\mathcal O}}\omega=0$ by [F5]. By step 2.4 the one-form $\iota_{\xi_{\mathcal O}}\omega=-d\Phi^\xi$ is exact, hence closed. Cartan's formula [F5] gives $\iota_{\xi_{\mathcal O}}d\omega=\mathcal L_{\xi_{\mathcal O}}\omega-d\iota_{\xi_{\mathcal O}}\omega=0$; since the fields $\xi_{\mathcal O}$ span each tangent space by [F2], $d\omega=0$. [step 2.3, step 2.4, F2, F5]

4.1 Uniqueness: let $\omega'$ be any two-form on $\mathcal O$ for which the inclusion satisfies the same component moment equations. Then for all $\beta,\xi,\eta$, $$\omega'_\beta\bigl(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta)\bigr)=-\omega'_\beta\bigl(\eta_{\mathcal O}(\beta),\xi_{\mathcal O}(\beta)\bigr)=d\Phi^\eta_\beta\bigl(\xi_{\mathcal O}(\beta)\bigr)=\xi_{\mathcal O}(\beta)(\eta)=\beta([\xi,\eta])=\omega_\beta\bigl(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta)\bigr),$$ and the fundamental fields span each tangent space by [F2], so $\omega'=\omega$. [step 2.4, F2, F3, F6, A1] ∎
