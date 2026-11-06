---
id: thm-gts-virtual-classes-and-deformation-compatible-gw-invariants
kind: theorem
title: Pardon GW pushforward and J-independence
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 14
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-gts-a-named-virtual-cycle-construction-and-invariance
- thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism
- lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing
- thm-gts-pardon-stable-map-moduli-compactness
- lem-gts-compact-parametric-pardon-atlas-with-endpoint-collars
- thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure
- def-gts-pardon-gromov-topology-on-stable-map-moduli
- def-gts-pardon-implicit-atlas-and-vfc-package
- def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-gts-a-named-virtual-cycle-construction-and-invariance: mathematical-premise
  thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism: mathematical-premise
  lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing: mathematical-premise
  thm-gts-pardon-stable-map-moduli-compactness: mathematical-premise
  lem-gts-compact-parametric-pardon-atlas-with-endpoint-collars: mathematical-premise
  thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure: mathematical-premise
  def-gts-pardon-gromov-topology-on-stable-map-moduli: mathematical-premise
  def-gts-pardon-implicit-atlas-and-vfc-package: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
justified_by: []
axiom_use: Full AC is inherited from the actual local analytic, domain and virtual-cochain suppliers; no weaker choice assertion is made.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves, arXiv:1309.2370v6
    url: https://arxiv.org/pdf/1309.2370v6
    locator: §9.3 Definition 9.3.1 and Lemma 9.3.2 with complete proof; §§5.2–5.3, especially Lemmas 5.2.3–5.2.5.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For smooth closed symplectic $(X,\omega)$, smooth $\omega$-tame $J$, $\beta\in H_2(X;\mathbb Z)$, and $g,n\ge0$ with $2g-2+n>0$, use Pardon's implicit atlas on $\overline{\mathcal M}^{\beta}_{g,n}(X,J)$. The source's virtual orientation yields $[\overline{\mathcal M}^{\beta}_{g,n}(X,J)]^{\mathrm{vir}}$ in its Čech-cohomology-dual theory; push it forward under the stabilization/evaluation map to define $GW^P_{g,n,\beta}(X,J)$. The class is independent of $J$. This does not assert descendants, localization, degeneration, or all Kontsevich–Manin axioms.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[thm-gts-a-named-virtual-cycle-construction-and-invariance]] supplies the actual oriented endpoint atlas and [[thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism]] its constructed rational cohomology-dual virtual functional, pushforward and bordism connector.

[F2] [[lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing]] supplies the actual domain stabilization; [[thm-gts-pardon-stable-map-moduli-compactness]] and [[def-gts-pardon-gromov-topology-on-stable-map-moduli]] supply graph convergence and continuity of marked evaluations.

[F3] [[lem-gts-compact-parametric-pardon-atlas-with-endpoint-collars]] gives the actual compact oriented parameterized atlas with boundary and canonical endpoint comparison.

[F4] [[thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure]] gives a smooth compatible reference structure by its proved polar construction. The positive-graph tame-path argument is proved below, for all tame endpoint structures.

[F5] [[def-gts-pardon-implicit-atlas-and-vfc-package]] fixes the virtual orientation and covariant functional convention; [[def-gts-symplectic-and-almost-complex-curve-data]] fixes smooth closed symplectic and tame hypotheses.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 The domain stabilization and original marked evaluations define a continuous map $\tau$ to $\overline{\mathcal M}_{g,n}\times X^n$: forgetting/stabilizing is the actual domain morphism in [F2], while the marked values converge in its graph topology, including labels migrating to bubbles or transferred through a contracted ghost. By [F1] the constructed virtual functional exists. Define its pushforward by $GW^P(J)(a)=[\overline{\mathcal M}(X,J)]^{\mathrm{vir}}(\tau^*a)$, exactly the cohomological pullback convention of [F5]. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Choose the compatible reference $J_*$ from [F4]. Its eigenspace decomposition is $T_{\mathbb C}X=E_*^+\oplus E_*^-$. The Hermitian form $H(u,v)=-i\omega(u,\bar v)$ has signature $(m,m)$, positive on $E_*^+$ and negative on $E_*^-$. For any tame $J$, its $i$-eigenspace $E_J^+$ is positive: writing $u=v-iJv$ gives $H(u,u)=2\omega(v,Jv)>0$. Projection to $E_*^+$ is therefore injective and, by equal dimension, an isomorphism. Thus $E_J^+$ is the graph of a smooth bundle map $A:E_*^+\to E_*^-$ with operator norm $\|A\|<1$. Conversely any such graph is positive, its conjugate is negative and complementary, and the two eigenspaces define a smooth real tame $J$. [F1, F2, F3, F4, F5, given, construct, algebra, step 1.1]

3.1 Interpolate the graph maps of any two endpoints by $A_t=(1-t)A_0+tA_1$. The open unit operator-norm ball is convex, and compactness of $X$ gives a uniform bound below one. Hence the graph construction of step 2.1 gives a smooth tame joining path. Composing $t$ with a smooth cutoff constant near zero and one makes it constant in both endpoint collars, without altering the endpoints. This proves the required tame-path input rather than assuming compatible endpoints. [F1, F2, F3, F4, F5, given, construct, algebra, step 2.1]

4.1 Apply [F3] to this path. Its base is compact by the uniform varying-domain result [F2]; its boundary orientations give endpoint $1$ minus endpoint $0$, and its endpoint atlas comparisons are the actual collar/common-refinement comparisons. Stabilization and evaluation give one continuous map $F$ on this entire bordism to the same target $\overline{\mathcal M}_{g,n}\times X^n$, restricting to the two $\tau$ maps. [F1, F2, F3, F4, F5, given, construct, algebra, step 3.1]

5.1 For any closed degree-$d$ target cohomology class $a$, the boundary connector in [F1] gives $[\partial W]^{\mathrm{vir}}(F|_{\partial W}^*a)=[W]^{\mathrm{vir}}(\delta F|_{\partial W}^*a)=0$, because restriction followed by the coefficient-sequence connector is zero. The signed boundary in step 4.1 is exactly $GW^P(J_1)(a)-GW^P(J_0)(a)$. This proves equality as rational Čech-cohomology-dual functionals for all inputs of the original Statement. The atlas and virtual cochains were constructed before this bordism argument; no additional descendant or degeneration formula is inferred. [F1, F2, F3, F4, F5, given, construct, algebra, step 4.1] ∎

## Remarks

The original Statement is retained exactly. The former path, parameterized-atlas and virtual-bordism assumptions are all discharged by the actual constructions.
