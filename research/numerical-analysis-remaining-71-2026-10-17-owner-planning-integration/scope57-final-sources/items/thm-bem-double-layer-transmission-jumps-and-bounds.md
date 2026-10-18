---
id: thm-bem-double-layer-transmission-jumps-and-bounds
kind: theorem
title: The double-layer potential has the stated jumps and bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [lem-bem-polyhedral-edge-kernel-representation, def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, lem-bem-lipschitz-trace-and-lifting, lem-bem-exterior-energy-trace-bound, def-bem-newtonian-kernel-in-three-dimensions, def-bem-laplace-layer-potentials-and-energy-spaces, def-bem-double-layer-transmission-space, thm-lax-milgram, thm-gagliardo-nirenberg-sobolev-inequality, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is used for the variational minimizer; the Axiom of Choice is inherited through the homogeneous Sobolev inequality in the trace-and-lifting supplier.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "Lemma 4.1 and the proof of Theorem 2, printed pp. 620–622: weak double-layer jumps, common conormal, and energy/Garding identities."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 2 §§2.1–2.2, printed pp. 23–28, and Chapter 3 §§3.1–3.3, printed pp. 40–46: signed double-layer jumps, representation, and transmission/energy formulation."
---

## Statement

Assume the Axiom of Choice and Countable Choice. For every $\phi\in H^{1/2}(\Gamma)$, the affine class $\mathcal A_\phi$ in [[def-bem-double-layer-transmission-space]] has a unique minimum-energy pair $D\phi=(u^-,u^+)$. It is harmonic on both sides, satisfies
$$\gamma^-D\phi-\gamma^+D\phi=-\phi,\qquad \partial_n^-D\phi=\partial_n^+D\phi,$$
and obeys
$$\|\nabla u^-\|_{L^2(\Omega^-)}+\|\nabla u^+\|_{L^2(\Omega^+)}\le C\|\phi\|_{H^{1/2}(\Gamma)}.$$
Consequently the average trace $K\phi=(\gamma^-D\phi+\gamma^+D\phi)/2$ is in $H^{1/2}(\Gamma)$ and the common conormal $q_\phi=\partial_n^-D\phi=\partial_n^+D\phi$ is in $H^{-1/2}(\Gamma)$, with both maps bounded. For every $\phi\in H^{1/2}(\Gamma)$, the weak potential agrees away from $\Gamma$, with smooth representatives, with the absolutely convergent integral $\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)dS_y$. No vanishing condition at polyhedral edges or vertices is required.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the geometry of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]], the trace/lifting result of [[lem-bem-lipschitz-trace-and-lifting]], the exterior energy space and minimization definition of [[def-bem-double-layer-transmission-space]], and $\phi\in H^{1/2}(\Gamma)$.

[A1] The homogeneous Sobolev inequality embeds the completion of $C_c^\infty(\mathbb R^3)$ in gradient norm into $L^6(\mathbb R^3)$ under the Axiom of Choice ([[thm-gagliardo-nirenberg-sobolev-inequality]], [[def-axiom-of-choice]]).

[A2] Lax–Milgram on a real Hilbert space gives a unique solution to a bounded coercive variational equation under Countable Choice ([[thm-lax-milgram]], [[def-countable-choice]]).

[F1] The trace theorem gives a bounded interior trace and a bounded right inverse $H^{1/2}(\Gamma)\to H^1(\mathbb R^3)$ whose support is bounded ([[lem-bem-lipschitz-trace-and-lifting]]).

[F2] Every exterior finite-energy function has its H1/2 trace controlled by its gradient ([[lem-bem-exterior-energy-trace-bound]]).

[F3] The Newton kernel is $G_3(x,y)=(4\pi|x-y|)^{-1}$ ([[def-bem-newtonian-kernel-in-three-dimensions]]).

[F4] The interior and exterior weak conormal pairings use the fixed outward normal convention of the layer-potential definition ([[def-bem-laplace-layer-potentials-and-energy-spaces]]).

[F5] A finite-energy transmission pair with trace jump $-\phi$ and global smooth-test stationarity equals its double-layer kernel integral, including densities reaching polyhedral edges ([[lem-bem-polyhedral-edge-kernel-representation]]).

## Proof


1.1 The affine class is nonempty: choose a bounded interior trace lift $L\phi$ from [F1] and take $(u_0^-,u_0^+)=(-L\phi,0)$. Its trace jump is $-\phi$ and its energy is at most $C\|\phi\|_{H^{1/2}}^2$. Let $Z=\mathcal A_0$, the linear space of matching-trace pairs. [F1, given, choose]

2.1 Equip $Z$ with $a_Z(v,w)=\int_{\Omega^-}\nabla v^-\cdot\nabla w^-+\int_{\Omega^+}\nabla v^+\cdot\nabla w^+$. A matching pair glues to a function $v$ on $\mathbb R^3$. In each Lipschitz graph chart, integration by parts for smooth approximants gives the distributional derivative of the glued function as the two piecewise derivatives plus the interface term $(\gamma^+v^+ -\gamma^-v^-)n_j$; trace continuity from [F1] passes this identity to $H^1$ functions, and the interface term vanishes. The glued function is in $L^6$: the exterior part is by definition in $L^6$, and the bounded interior part has a bounded $H^1(\mathbb R^3)$ extension from [F1], to which [A1] applies after a bounded-support cutoff. Its global weak gradient is the two piecewise gradients. First show that any such $L^6$ function with global gradient in $L^2$ belongs to $\dot H^1$: take cutoffs $\chi_R=1$ on $B_R$, supported in $B_{2R}$, with $|\nabla\chi_R|\le C/R$. The gradient tail tends to zero, and Hölder gives $R^{-1}\|v\|_{L^2(B_{2R}\setminus B_R)}\le C\|v\|_{L^6(B_{2R}\setminus B_R)}\to0$. Thus $\chi_Rv\to v$ in gradient norm; each compactly supported H1 cutoff is approximated in H1 by smooth compactly supported functions. Hence $v\in\dot H^1$, and [A1] gives $\|v\|_6\le C\|\nabla v\|_2$. A Cauchy sequence in $Z$ now glues to a Cauchy sequence in $\dot H^1$; its limit restricts to an interior H1 function and an exterior $E^+$ function, and bounded traces preserve the matching condition. Hence $Z$ is complete in $a_Z$. Also $a_Z(v,v)=0$ forces the glued $L^6$ function to be a constant and therefore zero, so $a_Z$ is a Hilbert inner product. [A1, F1, step 1.1, given, algebra]

3.1 On $Z$, the functional $F(v)=-\int_{\Omega^-}\nabla u_0^-\cdot\nabla v^-$ is bounded by $\|\nabla u_0^-\|_2a_Z(v,v)^{1/2}$. Apply [A2] to obtain a unique $z\in Z$ such that $a_Z(z,v)=F(v)$ for every $v\in Z$. Then $u=u_0+z\in\mathcal A_\phi$ satisfies $\int_{\Omega^-}\nabla u^-\cdot\nabla v^-+\int_{\Omega^+}\nabla u^+\cdot\nabla v^+=0$ for every $v\in Z$. For any $v\in Z$, expansion gives $\mathcal E(u+v)=\mathcal E(u)+\mathcal E(v)$, so $u$ is the unique minimizer and $\mathcal E(u)\le\mathcal E(u_0)$. Taking compactly supported tests inside either side proves weak harmonicity. [A2, step 1.1, step 2.1, given, construct]

4.1 The trace jump is the affine constraint. For any $g\in H^{1/2}(\Gamma)$, restrict the bounded global lift $Lg$ of [F1] to both sides; the resulting matching pair lies in $Z$. Stationarity in step 3.1 and the weak conormal conventions [F4] give $\langle\partial_n^-u^- -\partial_n^+u^+,g\rangle=0$. Thus the conormals agree. The exterior energy trace bound [F2] and energy bound in step 3.1 bound $\gamma^+u^+$; the identity $\gamma^-u^-=\gamma^+u^+-\phi$ then bounds the interior trace and their average. For the common conormal use the interior lift alone: $|\langle q_\phi,g\rangle|=|\int_{\Omega^-}\nabla u^-\cdot\nabla L^-g|\le C\|\nabla u^-\|_2\|g\|_{H^{1/2}}$, so $q_\phi\in H^{-1/2}$ with the asserted bound. [F1, F2, F4, step 3.1, given, algebra]

5.1 Step 3.1 supplies stationarity against every matching-trace finite-energy pair, in particular restrictions of every global smooth compactly supported function. The pair belongs to $H^1(\Omega^-)\times E^+(\Omega^+)$ and has trace jump $-\phi$ by construction. Thus [F5] identifies it, with smooth representatives off $\Gamma$, with the absolutely convergent double-layer kernel integral for every $\phi\in H^{1/2}(\Gamma)$. This includes facewise smooth densities reaching edges whenever they satisfy the global trace-space hypothesis. [F3, F5, step 3.1, step 4.1, given, algebra] ∎

## Remarks

The kernel agreement holds for the full global trace space. Facewise smooth densities agreeing on shared edges are included even when nonzero at those edges; independently prescribed jumps across edges need not belong to $H^{1/2}(\Gamma)$. Boundary jump identities are Sobolev identities, and do not assert a pointwise half-jump coefficient at an edge or vertex.
