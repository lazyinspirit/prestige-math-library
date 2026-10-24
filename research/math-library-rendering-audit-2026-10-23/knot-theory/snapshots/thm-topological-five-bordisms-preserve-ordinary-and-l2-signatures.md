---
id: thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures
kind: theorem
title: Topological five-dimensional bordisms preserve ordinary and L2 signatures
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
aliases: []
deps:
  - def-axiom-of-choice
  - thm-topological-finite-projective-l2-duality-and-boundary-gluing
  - lem-von-neumann-inertia-and-coisotropic-reduction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Jae Choon Cha, A topological approach to Cheeger-Gromov universal bounds
        for von Neumann rho-invariants
      url: https://arxiv.org/pdf/1405.1805
      locator: Printed pages11–13, bordism invariance used in section2.1; full
        finite-projective TOP proof given locally
dependency_level: 5
---

## Statement

Assume AC. Let $Y$ be a compact oriented Hausdorff topological five-manifold with supplied boundary collar, and let $X=\partial Y$ have its boundary orientation. Supply a based homomorphism $\psi:\pi_1Y\to G$ on each component, where $G$ is an arbitrary discrete group, with the standard unitary regular coefficient systems. Then
$$\operatorname{sign}^{(2)}_G(X,\psi|_X)=0,\qquad \operatorname{sign}(X)=0.$$
In particular, when $X=X_1\sqcup(-X_0)$, the ordinary and $L^2$ signatures of these closed oriented four-manifolds agree across this actual coefficient-extending TOP bordism. The equality is unchanged under embedding the target group in a larger group. This theorem asserts bordism invariance and does not assert existence of a bordism between arbitrary closed coefficient manifolds.

## Statement references

[[thm-topological-finite-projective-l2-duality-and-boundary-gluing]]

[Cha, section2.1](https://arxiv.org/pdf/1405.1805)

## Facts & Assumptions

**Given:** AC, the actual collared oriented $Y$, its boundary $X$, and the compatible regular coefficient maps in the Statement.

[A1] [[def-axiom-of-choice]] is the standing spectral and projective-comparison hypothesis of the finite-projective supplier.

[F1] For compact collared TOP manifolds in every dimension, bounded finite-projective coefficient chain models and their pair diagrams transfer actual cap duality to bounded isomorphisms on completed reduced homology and cohomology. Pair sequences are weakly exact; algebraic harmonic parts are dense. Cap-boundary and restriction identities hold after completion. For a closed oriented four-manifold its middle Hermitian operator is boundedly invertible. Model independence and coefficient-subgroup induction hold by finite matrices and identical coset operator blocks. [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]]

[F2] Restriction of a boundedly invertible Hermitian form on a finite Hilbert von Neumann module to a closed coisotropic submodule preserves its signature; a zero form has zero signature. [[lem-von-neumann-inertia-and-coisotropic-reduction]]

## Proof

1.1 Use [F1] for $Y,X$ and $(Y,X)$ with $R=\mathbb CG$ and $A=\mathcal NG$. Write $V=\mathscr H^2(X)$ for completed reduced cohomology. Transport the middle intersection form of $X$ to $V$ by its bounded cap isomorphism, and denote it by $Q$. It is a bounded Hermitian form with boundedly invertible operator, since $X$ is closed. Let $r:\mathscr H^2(Y)\to V$ be restriction and $\delta:V\to\mathscr H^3(Y,X)$ the completed connecting map of the pair. These are bounded maps of finite Hilbert $A$ modules. Set $U=\overline{\operatorname{im}r}$, an actual closed submodule; no assertion that $\operatorname{im}r$ is closed is made. [A1, F1, given, construct]

2.1 Cap duality on $Y$ and Riesz duality give a bounded nondegenerate scalar sesquilinear pairing $\mathscr H^2(Y)\times\mathscr H^3(Y,X)\to\mathbb C$: take evaluation of the first class on the cap of the second with $[Y,X]$, followed by the canonical trace, initially on algebraic harmonic parts. Riesz and the bounded cap isomorphism extend this pairing to the Hilbert completions and identify either factor boundedly with the Hilbert dual of the other. No $A$-valued pairing is asserted on arbitrary $\ell^2$ vectors. The boundary identity identifies $Q(ra,b)$ with this pairing of $a$ and $\delta b$, up to the fixed conjugation convention, for all $a\in\mathscr H^2(Y)$ and $b\in V$. Concretely, for an actual degree-two boundary cocycle $\beta$ extend it to a cochain $\widetilde\beta$ on $Y$. The relative cocycle $d\widetilde\beta$ represents $\delta\beta$, and the cohomology-first cap formula gives $\partial(\widetilde\beta\cap[Y,X])=\beta\cap[X]-(d\widetilde\beta)\cap[Y,X]$. Thus $i_*\mathrm{PD}_X\beta=\mathrm{PD}_{Y,X}\delta\beta$ in absolute homology. Pairing with $a$ proves the asserted identity on algebraic harmonic parts. Such parts are dense, all displayed maps and pairings are bounded, and [F1] transfers this actual identity to the completed modules. This uses cochains and the finite orientation chain, with no geometric transverse intersections in dimension four or five. [F1, step 1.1, algebra]

3.1 By step 2.1 and nondegeneracy of the perfect pairing, $Q(ra,b)=0$ for every $a$ if and only if $\delta b=0$. Continuity replaces $\operatorname{im}r$ by its closure without changing this annihilator, giving $U^{\perp_Q}=\ker\delta$. Weak exactness of the actual pair sequence in [F1] gives $\ker\delta=\overline{\operatorname{im}r}=U$. Therefore $U$ is a closed self-annihilating, hence coisotropic, submodule, and $Q|_U$ is identically zero. These are equalities of Hilbert-closed submodules; no algebraic exactness has been promoted to closed-range exactness. [F1, step 1.1, step 2.1, algebra]

4.1 Apply [F2] to the invertible closed-boundary form $Q$ and $U$. Its signature is the signature of the zero restriction, namely zero. The bounded cap change of coordinates preserves inertia, so this is precisely $\operatorname{sign}^{(2)}_G(X)$. Apply the same argument to the trivial group: its complex Hermitian intersection form is the complexification of the real symmetric form, with equal positive and negative multiplicities, and hence gives the ordinary signature zero. All arguments allow finite disconnected boundaries and empty boundary; in the latter case the middle module is zero. [F1, F2, step 1.1, step 3.1, algebra]

5.1 A disjoint union is an orthogonal direct sum of the finite-projective complexes and forms; orientation reversal negates cap and the form. Thus $X=X_1\sqcup(-X_0)$ in step 4.1 yields the two asserted bordism-invariance equalities. For an embedded coefficient subgroup $G\hookrightarrow K$, construct the same finite models over $\mathbb CG$ and extend the matrices to $\mathbb CK$. Every left-$G$ matrix decomposes on $\ell^2(K)=\bigoplus_{G\gamma}\ell^2(G\gamma)$ into identical copies of its $\ell^2(G)$ operator. Kernel, harmonic and positive/negative projections have the same identity-coordinate diagonal trace. By [F1] this preserves the signatures on both ends and on $X$, for arbitrary cardinalities of $K$. No equality between ordinary and $L^2$ signatures on arbitrary closed four-manifolds and no TOP bordism realization theorem was assumed. [F1, step 4.1, algebra] ∎
