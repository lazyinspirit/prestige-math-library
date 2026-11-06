---
id: post-f4-codimension-two-matter-and-yukawa-dictionary
kind: postulate
title: "Codimension-two matter and codimension-three Yukawa dictionary"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
category: string-theory
deps:
  - def-f4-crepant-resolution-and-matter-surface
  - post-f4-sevenbrane-monodromy-and-codimension-one-gauge
  - def-m2-brane-worldvolume-action
dependency_roles:
  def-f4-crepant-resolution-and-matter-surface: formulation-prerequisite
  post-f4-sevenbrane-monodromy-and-codimension-one-gauge: formulation-prerequisite
  def-m2-brane-worldvolume-action: formulation-prerequisite
physical_scope: "Adopted local F-theory matter and interaction dictionary for a specified resolved model with a stated complex threefold base, codimension-one gauge divisor, resolution chamber, selected fibral curves, and effective-field-theory regime. It does not count the full vectorlike spectrum, assert resolution existence, or establish nonzero interactions. The wrapped-M2 physical interpretation remains conditional on the present draft classical M2 action interface and its draft CJS superspace prerequisites; their draft status supplies no independent acceptance."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sheldon Katz and Cumrun Vafa, Matter From Geometry, arXiv:hep-th/9606086v1"
      url: "https://arxiv.org/pdf/hep-th/9606086v1"
      locator: "§§1–2, printed pp. 1–3, and §5, p. 10; local enhancement examples and limits of localized-mode completeness."
    - title: "Sven Krause, Christoph Mayrhofer, and Timo Weigand, G4 flux, chiral matter and singularity resolution in F-theory compactifications, arXiv:1109.3454v2"
      url: "https://arxiv.org/pdf/1109.3454v2"
      locator: "§§3.1–3.3 and Appendix A.2–A.3; the stated U(1)-restricted SU(5) model, resolved fibral curves, matter surfaces, and candidate enhancement-point couplings."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§5.2, printed pp. 41–42, especially equation (5.8), which identifies the Cartan weight components with the intersections E_i·C for the selected oriented curve; §§5.3–5.6, pp. 45–51; §6.1, pp. 53–57, on chamber-dependent codimension-three candidate interactions and their limitations."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-10-27
    scope: Compared the adopted matter-surface and candidate-Yukawa formulation with the cited local enhancement sections; checked explicit model, chamber, spectrum, and nonzero-coupling limitations.
    by: batch-72 beta author; not independent approval
---

## Postulate

Adopt the following conditional dictionary for a specified resolved F-theory model over a smooth complex threefold $B_3$. Fix one resolution chamber $(\rho,\mathcal C)$ as in [[def-f4-crepant-resolution-and-matter-surface]], where $\rho$ is a specified smooth projective crepant resolution and $\mathcal C$ is a specified collection of irreducible fiber-curve components. Let $D\subset B_3$ be the model's specified codimension-one gauge divisor. A **matter curve** $\Sigma_R\subset D$ is the exact fiber-change datum of the same supplier: a specified reduced irreducible closed curve of complex dimension one for which the geometric generic resolved fibers over the generic points of $\Sigma_R$ and $D$, after base change along any chosen pair of $\mathbb C$-embeddings of their residue-field algebraic closures into a common algebraically closed field, are nonisomorphic. A selected curve family supplies a **matter surface** $S_R$ only as the supplier's specified reduced irreducible surface with a proper flat map $q_R:S_R\to\Sigma_R$, nonempty pure one-dimensional geometric fibers, and geometric generic fiber isomorphic to $\mathbb P^1$; these are hypotheses in an application, not consequences of this postulate. Codimension here is complex codimension, so $\Sigma_R$ has codimension two in $B_3$.

The codimension-one gauge divisor and complex Lie algebra must be fixed in the same model under the restricted transverse-slice and local-minimal-Weierstrass conditions of [[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]. A selected fibral curve is a specified irreducible rational component in the resolved fiber over the generic point of a matter curve. For a chosen orientation of its wrapped-M2 state, write $[C_{\mathrm{or}}]$ for the resulting oriented curve class. With the source convention of Weigand, §5.2, equation (5.8), its candidate Cartan weight vector is
$$
\beta(C_{\mathrm{or}})=\bigl(E_i\cdot[C_{\mathrm{or}}]\bigr)_i,
$$
where $E_i$ are the specified resolution divisors associated with the simple Cartan generators. Reversing the M2 orientation replaces $[C_{\mathrm{or}}]$ and $\beta$ by their negatives. These are candidate weights for the selected modes; the geometry and the action interface do not derive which oriented states occur in the effective theory. Distinct resolution chambers or selected curve components are distinct data.

A **codimension-three enhancement point** is an isolated point of $B_3$ where specified enhancement loci meet and the resolved fiber further splits or degenerates. A finite-dimensional complex representation of the supplied complex gauge Lie algebra $\mathfrak g_{\mathbb C}$ is a pair $(V,\rho)$, where $V$ is a finite-dimensional complex vector space and $\rho:\mathfrak g_{\mathbb C}\to\operatorname{End}_{\mathbb C}(V)$ is a Lie-algebra homomorphism. A gauge-invariant trilinear in this convention is a nonzero $\mathfrak g_{\mathbb C}$-equivariant map $V_1\otimes V_2\otimes V_3\to\mathbb C$, with the trivial action on $\mathbb C$; the actual global gauge group and the descent of representations to it remain separate model data. Where the chosen four-dimensional theory is $\mathcal N=1$, let $\mathcal U$ be a complex coordinate patch of chiral field and moduli values and let $W:\mathcal U\to\mathbb C$ be its holomorphic superpotential. A **holomorphic Yukawa coupling** is the coefficient $y(m)$ of a cubic Taylor term $y(m)\Phi_1\Phi_2\Phi_3$ in $W$, where $\Phi_j$ are chiral fields and $m$ are chiral moduli. A codimension-three point with an allowed trilinear is only a candidate locus: it does not establish localized modes, a nonzero coefficient, a numerical Yukawa value, or a complete zero-mode spectrum.

The physical wrapped-M2 interpretation is conditional on the classical action interface in [L1]. That current carrier is present as a draft with a local format precheck pass, which is not independent acceptance, and its two direct CJS postulate prerequisites are also drafts; the component-action precheck is pending and the superspace-constraints precheck passes. The action definition supplies no derivation of oriented membrane states, a complete spectrum, or nonzero couplings.

## Postulate references

[[def-f4-crepant-resolution-and-matter-surface]]

[[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]

[[def-m2-brane-worldvolume-action]]

[Katz–Vafa, §§1–2 and §5](https://arxiv.org/pdf/hep-th/9606086v1)

[Krause–Mayrhofer–Weigand, §§3.1–3.3 and Appendix A.2–A.3](https://arxiv.org/pdf/1109.3454v2)

[Weigand, §§5.1–6.1](https://arxiv.org/pdf/1806.01854v1)

## Facts & Assumptions

**Given:** One explicitly specified resolved elliptic fourfold over a smooth complex threefold, a chosen resolution chamber, the generic codimension-one fiber data, and the candidate fibral curves and effective-theory fields under discussion.

[A1] A smooth projective crepant resolution, flatness of each selected curve family, and existence of a matter surface are hypotheses in each application. [[def-f4-crepant-resolution-and-matter-surface]] does not prove resolution existence or uniqueness.

[F1] [[def-f4-crepant-resolution-and-matter-surface]]: “A **matter curve** is one such specified $\Sigma_R$; $D$ is typically a chosen discriminant component.” The preceding supplier clause requires a reduced irreducible curve in the chosen divisor where the geometric generic fiber changes. Its selected fibral-curve family must be proper flat of relative dimension one with geometric generic fiber $\mathbb P^1$.

[F2] [[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]: “The geometric Kodaira-type clause is used only when the transverse complex-curve pullback $\pi_S:S\to C$ satisfies the exact carrier hypotheses.” The supplier's dictionary identifies a Lie algebra only after the stated local-model and splitness/monodromy data; it supplies no universal local-minimal-model existence result.

[F3] Weigand, §5.2, equation (5.8), defines the Cartan weight components of a selected oriented split-fiber curve by $[E_i]\cdot[C_{\mathrm{or}}]=\beta_i^a(R)$; equation (5.12) keeps the same sign for the completed weight vector. Reversing the curve orientation gives the negative weight and the conjugate representation (equations (5.13)–(5.14)). This postulate adopts that intersection convention.

[L1] The current item [[def-m2-brane-worldvolume-action]] is placed on the st-m-theory-foundations page and has status draft with a local format precheck pass, which is not independent acceptance. For a smooth embedding $X:\Sigma_3\to Y^{11}$ of a closed oriented three-manifold with nondegenerate Lorentzian induced metric $g_{ij}=\partial_iX^m\partial_jX^nG_{mn}(X)$, it defines the classical bosonic action
$$
S_{\mathrm{M2}}[X]=-T_{\mathrm{M2}}\int_{\Sigma_3}d^3\xi\,\sqrt{-\det g}+T_{\mathrm{M2}}\int_{\Sigma_3}X^*C_3,
$$
with independent positive tension $T_{\mathrm{M2}}$ and the source convention $C_3=-6B_3$. In $\hbar=c=1$ units, $\xi^i$ are dimensionless, target coordinates are length-valued with dimensionless metric components, $T_{\mathrm{M2}}$ has units of $\mathrm{length}^{-3}$, and the normalization gives $\int C_3$ units of $\mathrm{length}^3$. Its Green–Schwarz completion uses a smooth superembedding into an on-shell $11|32$ CJS superspace and the pulled-back supervielbein. Its direct prerequisites, post-eleven-dimensional-cjs-supergravity-action and post-m2-cjs-superspace-constraints, are both draft postulates; the component-action precheck is pending and the superspace-constraints precheck passes. This is a current source definition, not an accepted premise or a derivation of oriented localized states, a complete spectrum, or nonzero couplings.

## Status

This is an adopted physical postulate, not a theorem that experiments or the cited papers prove for every compactification. The local source treatments support the conditional enhancement dictionary and the chamber-specific example on the companion page; source statements do not establish resolution-independent matter, total vectorlike multiplicities, or nonzero Yukawa coefficients. The M2 action item is present as a draft with a local format precheck pass, which is not independent acceptance, and its two direct CJS postulate prerequisites are drafts; presence does not establish acceptance. The wrapped-M2 interpretation remains conditional and does not derive oriented states from the action alone.
