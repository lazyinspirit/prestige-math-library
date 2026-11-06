---
id: lem-gts-compact-parametric-pardon-atlas-with-endpoint-collars
kind: lemma
title: Compact parameterized Pardon atlas with endpoint collars
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-gts-a-named-virtual-cycle-construction-and-invariance
- thm-gts-pardon-stable-map-moduli-compactness
- lem-gts-weighted-nodal-cauchy-riemann-gluing-and-linear-kernel-continuity
- lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings
- def-gts-pardon-implicit-atlas-and-vfc-package
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-gts-a-named-virtual-cycle-construction-and-invariance: mathematical-premise
  thm-gts-pardon-stable-map-moduli-compactness: mathematical-premise
  lem-gts-weighted-nodal-cauchy-riemann-gluing-and-linear-kernel-continuity: mathematical-premise
  lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings: mathematical-premise
  def-gts-pardon-implicit-atlas-and-vfc-package: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
    url: https://arxiv.org/pdf/1309.2370v6
    locator: Appendix B, setup B.1 and weighted equation, residual and right-inverse estimates B.5–B.7, printed pp. 136–138 and 144–153, read as fixed-J constructions. The extension to varying target structure is proved locally below.
dependency_level: 13
axiom_use: "Full AC is inherited through the fixed-atlas, compactness, and weighted-gluing suppliers F1–F3; the target-parameter perturbation of the closed weighted operators is proved locally below."
---

## Statement

Let $(X,\omega)$ be smooth closed symplectic, $2g-2+n>0$, $\beta\in H_2(X;\mathbb Z)$, and $J_t$, $0\le t\le1$, a smooth $\omega$-tame path constant in endpoint collars. The full parameterized stable-map moduli has a compact Hausdorff base and an actual oriented Pardon implicit atlas with boundary, of virtual dimension $d+1$ where $d=6g-6+2n+2m(1-g)+2c_1(\beta)$ and $\dim_{\mathbb R}X=2m$. Its boundary is the endpoint-$1$ atlas minus the endpoint-$0$ atlas. The restrictions compare to the full named endpoint atlases through the explicit collar extensions and their common tuple refinements. Relative extra-section projection and freeness hold exactly over the lower regular loci. No transversality of all obstruction sections is imposed.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[thm-gts-a-named-virtual-cycle-construction-and-invariance]] supplies the full fixed-structure tuple atlas and its actual relative identities; its proof describes the local datums.

[F2] C denotes [[thm-gts-pardon-stable-map-moduli-compactness]], including compactness uniform over the path.

[F3] G denotes [[lem-gts-weighted-nodal-cauchy-riemann-gluing-and-linear-kernel-continuity]], used at a fixed target structure. Its closed-branch weighted spaces, fixed core-coordinate complement, residual, right inverse, quadratic and inverse-gluing estimates are the starting data for the target-parameter perturbation proved in steps 1.1–3.1 below; target-parameter uniformity is not part of its stated interface. This application has closed stable-map domains throughout the path and uses the retained closed branch with its original graph topology. No boundary-corner asymptote or spectral-cut parameter is added.

[F4] S denotes [[lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings]], used at each parameter point and smoothly extended with a core-supported time cutoff. [[def-gts-pardon-implicit-atlas-and-vfc-package]] fixes the boundary/orientation convention.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 Fix a parameter $t_0$ and one regular finite thickening tuple over a nodal solution. Write $b=(q,y)$ for its specified domain parameters, and use the closed weighted section and equation spaces $B_b,Y_b$ of G with $k\ge6$, a fixed $0<\delta<1$ below its decay exponent, and the same core incidences and obstruction space $E$. Keep its preglued map $u_b$ and fixed source-dependent exponential charts, and extend the core-supported forcing smoothly in $t$ by the pointwise projection to $(0,1)$-forms. Identify the varying equation bundles with the $t_0$ bundle by the restriction of their $(0,1)$ projections; these restrictions are invertible and have uniformly bounded coefficient derivatives for $t$ near $t_0$. Let $F_{b,t}$ be the resulting equation, $D_{b,t}=D_\xi F_{b,t}(0)$, and $\tau=t-t_0$. On the compact target, the fundamental theorem in $t$ bounds each required coefficient difference and its derivatives by $C|\tau|$. The exact change in the untransported Cauchy–Riemann term is $\tfrac12(J_t-J_{t_0})(u)du\,j_b$. Differentiating in the section variable gives a bounded coefficient times $\nabla\xi$, and coefficients of size $C|\tau|$ times $du_b\,\xi$; the forcing changes only on fixed cores. On each cylindrical unit patch the weight varies by a fixed factor. G's weighted product estimate (G, proof paragraphs fourteen and fifteen) therefore bounds these terms after summing squared patch norms. A section's shared constant is counted once in $B_b$; every undifferentiated constant term is multiplied by $du_b$, whose end derivatives decay as $Ce^{-s}$ and vanish in the constant middle region. Thus its weighted integral is bounded uniformly in neck length, since $\delta<1$. The finite core and incidence terms have ordinary uniform bounds. Consequently $\|F_{b,t}(0)\|\le C(|y|+|\tau|+\sum_e e^{-(1-\delta)S_e})$, $\|D_{b,t}-D_{b,t_0}\|_{B_b\to Y_b}\le C|\tau|$, and $\|D_\xi F_{b,t}(\xi)-D_\xi F_{b,t}(\eta)\|\le C\|\xi-\eta\|$ on one small fixed ball. Here $|q_e|=e^{-6S_e}$, with the term zero for a persistent node. The constants are independent of every $S_e$ and of the partial nodal stratum. No norm differentiation in $q$ is asserted. [F1, F3, F4, given, construct, algebra]

2.1 G gives an exact fixed-$t_0$ right inverse $Q_b:Y_b\to\ker L_b\subset B_b$ with uniform norm $M$, where $L_b$ consists of its fixed core evaluations and obstruction projections. Its image has obstruction component in the prescribed subspace $E'$. Choose $|\tau|$ so that $CM|\tau|<1/2$. Then $D_{b,t}Q_b=1+(D_{b,t}-D_{b,t_0})Q_b$ has inverse given by its norm-convergent Neumann series. Put $Q_{b,t}=Q_b(D_{b,t}Q_b)^{-1}$. It has norm at most $2M$, image exactly $\ker L_b$, and the same $E'$ restriction. Preglue the fixed central kernel $K_0$ as in G. Its coordinate map satisfies $L_b\kappa_b=L_0\kappa$ exactly, and step 1.1 together with G's kernel estimate bounds $\|D_{b,t}\kappa_b\|$ by $C(|y|+|\tau|+\sum_e e^{-(1-\delta)S_e})\|\kappa\|$. Choose one small radius on which the quadratic bound times $2M$ is below $1/2$. The residual is small after shrinking $(q,y,\tau,\kappa)$. Contraction on $\kappa_b+\ker L_b$ then gives one solution with coordinate $L_b\xi=L_0\kappa$. This proves actual existence and uniqueness over the domain AND target parameter. Because corrections have obstruction component in $E'$, the projection to $E/E'$ is still the original surjective linear projection of $K_0$. Its coordinate identity proves the required relative extra-obstruction projection model. [F3, step 1.1, construct, algebra]

3.1 These solutions give the actual graph topology. On every fixed core the coefficient bounds in G's graph-Caccioppoli, interior $\epsilon $ and bootstrap argument (G, proof paragraph eighteen) remain uniform for $J_t$ near $J_{t_0}$: the compact smooth tame family has one lower taming bound and bounded derivatives of each required order. The small-image neck action and derivative-decay argument (G, proof paragraphs seventeen through nineteen) likewise has uniform constants; $J_t$ is independent of the source coordinate on each neck. It therefore sends every graph-convergent solution sequence with $t\to t_0$ into the same small weighted correction ball. The fixed-core coordinates then recover that solution by the uniqueness in step 2.1. Comparing the contraction equations gives continuous dependence on $t$ and the other coordinates, including partial nodal limits, as in G's proof paragraph twenty-one; uniform tail bounds and convergence on each fixed core justify that comparison when the source changes. Thus regularity is open and the charts are products with the real $t$ coordinate. At endpoints choose all data independent of $t$ in the constant collars and restrict these products to the interval, obtaining half-space charts of dimension $d+1+\dim E_I$. The tuple-forgetting identities and relative group freeness of [F1] use the same auxiliary labels and are unchanged at each $t$; no new group acts on $t$. Full AC and compactness [F2] select finitely many covering datums, with these charts verifying regular coverage; arbitrary finite enlargements use the same local argument. The fixed-atlas determinant orientation transports continuously under the operator perturbation, using the kernel complement just constructed and G's determinant cancellation. Place the positively oriented interval factor first. Outward-normal-first boundary orientation is then endpoint $1$ minus endpoint $0$. [F1, F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 The endpoint atlas is compatible with the full canonical endpoint $A_{GW}$, not a new unrelated VFC. Every endpoint datum extends into its constant collar by a time cutoff equal to one there, with its domain charts and transverse slices unchanged. Include all such collar extensions and the interior covering datums in the parameterized index set. At either boundary its restriction contains the full endpoint construction, and the combined finite thickenings are the literal union tuple system in the fixed-atlas construction [F1]. Thus restriction, finite-subatlas and shrinking/refinement compatibility of the virtual package applied in [F1] identify the endpoint functionals with the original named-atlas functionals. This specifies the necessary comparison and does not claim invariance for arbitrary unrelated implicit atlases. [F1, F2, F3, F4, given, construct, algebra, step 1.1, step 2.1, step 3.1] ∎

## Remarks

This is the actually constructed bordism atlas needed by the GW consumer. Existence of a tame joining path is proved in that consumer separately; the present lemma takes the specified smooth path.
