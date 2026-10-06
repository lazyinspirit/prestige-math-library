---
id: thm-the-alexander-polynomial-is-an-oriented-link-invariant
kind: theorem
title: "The Alexander polynomial is an oriented link invariant"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-alexander-polynomial-from-the-first-elementary-ideal,
       def-one-variable-alexander-module-of-an-oriented-link,
       lem-elementary-ideals-are-independent-of-the-presentation,
       lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain,
       lem-units-and-powers-of-the-laurent-polynomial-ring,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       def-axiom-of-choice, prop-cap-product-naturality-and-projection-formula,
       thm-covering-space-lifting-criterion, thm-uniqueness-of-lifts-from-a-connected-space]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.2 (printed pp. 46-47) and section 4.4 (printed p. 52): invariance of the Alexander polynomial under ambient isotopy"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "R. H. Crowell and R. H. Fox, Introduction to Knot Theory, Ginn and Co. (1963), chapters VIII-IX (the Alexander module and its invariance)"
---

## Statement

Assume the Axiom of Choice. Let $L$ and $L'$ be nonempty oriented links in $S^3$ such
that some ambient isotopy of $S^3$ carries $L$ onto $L'$ and preserves the
orientations of the components
([[def-oriented-link-in-s-three-and-ambient-isotopy]]). Then the Alexander
modules $A_L$ and $A_{L'}$ of
[[def-one-variable-alexander-module-of-an-oriented-link]] are isomorphic as
$\Lambda$-modules over $\Lambda=\mathbb Z[t^{\pm1}]$, their zeroth elementary
ideals agree, $E_0(A_L)=E_0(A_{L'})$, and consequently the one-variable
Alexander polynomials of
[[def-alexander-polynomial-from-the-first-elementary-ideal]] satisfy
$$\Delta_{L'}(t)=\pm t^{k}\,\Delta_L(t)\quad\text{for some }k\in\mathbb Z;$$
so the oriented link type of $L$ determines $\Delta_L$ up to multiplication by
a unit $\pm t^k$ of $\Lambda$ (and, for knots, the Alexander invariant
$D_L=\Delta_L/(1-t)$ up to the same unit).

## Facts & Assumptions

**Given:** AC and oriented links $L$ and $L'$ in $S^3$ with an ambient isotopy carrying $L$ onto $L'$ and preserving orientations.

[A1] The Axiom of Choice, used only through the definition of the Alexander module, which uses Alexander duality to build the total linking homomorphism ([[def-axiom-of-choice]], [[def-one-variable-alexander-module-of-an-oriented-link]]).

[F1] The given ambient isotopy $H:S^3\times I\to S^3$ has $H_0=\mathrm{id}$ and $H_1(L)=L'$. Its time-one map $h:=H_1$ is an orientation-preserving diffeomorphism of $S^3$ carrying $L$ onto $L'$ with component orientations preserved ([[def-oriented-link-in-s-three-and-ambient-isotopy]]).

[F2] For an oriented link $M$ the total linking homomorphism is the composite $H_1(X_M;\mathbb Z)\xrightarrow{\sim}\widetilde H^1(M;\mathbb Z)\cong \bigoplus_iH^1(K_i;\mathbb Z)\cong\mathbb Z^{\,\#\pi_0(M)}\xrightarrow{\sum}\mathbb Z$ induced by Alexander duality and the orientation-induced identifications; the cover $\widetilde{X_M}$ is the connected infinite cyclic cover classified by $K=\ker(\pi_1(X_M)\to H_1(X_M)\xrightarrow{\varphi}\mathbb Z)$, it is regular with deck group $\mathbb Z$, and $A_M=H_1(\widetilde{X_M};\mathbb Z)$ is a $\Lambda$-module with $t$ acting by the positive deck transformation ([[def-one-variable-alexander-module-of-an-oriented-link]]).

[F3] Elementary ideals of a finitely presented module depend only on the isomorphism class of the module, not on its presentation ([[lem-elementary-ideals-are-independent-of-the-presentation]], [[def-one-variable-alexander-module-of-an-oriented-link]]).

[F4] $\Lambda=\mathbb Z[t^{\pm1}]$ is a unique factorisation domain whose units are exactly $\pm t^k$, $k\in\mathbb Z$ ([[lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]]); the polynomial $\Delta_M$ is a gcd of $E_0(A_M)$ and is well defined up to multiplication by such a unit ([[def-alexander-polynomial-from-the-first-elementary-ideal]]).

[F5] Cap naturality holds on chains and therefore on compact-support classes ([[prop-cap-product-naturality-and-projection-formula]]). Pair connectors, restriction and excision commute with a homeomorphism by their chain/cochain definitions. Thus the Alexander-duality construction in its supplier’s Proof 4.1–6.1 commutes with orientation-preserving ambient homeomorphisms: the fundamental class is preserved and the cap-natural diagram, followed by the natural pair connector, gives the duality-natural diagram.

[F6] A based map lifts when it carries the source covering subgroup into the target subgroup ([[thm-covering-space-lifting-criterion]]); two connected-domain lifts agreeing at a point coincide ([[thm-uniqueness-of-lifts-from-a-connected-space]]).

## Proof

1.1 **The ambient homeomorphism.** By [F1] the ambient isotopy carrying $L$ onto $L'$ restricts to a homeomorphism $h:S^3\to S^3$ with $h(L)=L'$; restricting $h$ to the complements gives a homeomorphism $X_L\to X_{L'}$ of the link complements, and it is orientation preserving because it is the time-one map of an isotopy of $S^3$. [F1, given]

2.1 **Transport of the linking homomorphisms.** The homeomorphism carries each component $K_i$ of $L$ onto the corresponding component $K_i'$ of $L'$ and preserves the orientations, hence it carries the orientation-induced generator of $H^1(K_i;\mathbb Z)$ to the corresponding generator of $H^1(K_i';\mathbb Z)$; by the Alexander-duality description [F2] and the naturality justified in [F5], the induced isomorphism $h_*:H_1(X_L;\mathbb Z)\to H_1(X_{L'};\mathbb Z)$ satisfies $\varphi_{L'}\circ h_*=\varphi_L$. Consequently $h_*(\ker\varphi_L)= \ker\varphi_{L'}$, and the $\mathbb Z$-cover classified by $\ker\varphi_{L'}$ pulls back along $h$ to a cover of $X_L$ isomorphic to $\widetilde{X_L}$; by [F6] choose a normalized lift of $h$ and the corresponding lift of $h^{-1}$. Their composites are normalized lifts of the identity and therefore are the identity. For a loop with total linking number $1$, lifting the loop and its $h$-image shows that the lift sends the level-one fibre point to the level-one point. Hence its two composites with the positive deck generators agree there, and [F6] makes them equal everywhere. The lift is therefore a deck-equivariant homeomorphism. [F2, F5, F6, step 1.1]

3.1 **Module isomorphism and elementary ideals.** The deck-equivariant lift of $h$ induces a $\Lambda$-module isomorphism $A_L=H_1(\widetilde{X_L};\mathbb Z)\cong H_1(\widetilde{X_{L'}};\mathbb Z)=A_{L'}$, since it intertwines the deck actions and the identification $t\leftrightarrow$ positive deck transformation [F2]. By [F3] elementary ideals are invariants of the isomorphism class, so $E_0(A_L)=E_0(A_{L'})$ as ideals of $\Lambda$. [A1, F2, F3, step 2.1]

4.1 **The polynomial.** Both $\Delta_L$ and $\Delta_{L'}$ are gcds of the same ideal $E_0(A_L)=E_0(A_{L'})$ by [F4], and in a unique factorisation domain two gcds of the same set of elements differ by a unit; since the units of $\Lambda$ are exactly $\pm t^k$ by [F4], this gives $\Delta_{L'}=\pm t^k\Delta_L$. The same computation applies to the knot normalisation $D_M=\Delta_M/(1-t)$, whose unit ambiguity is that of $\Delta_M$. [F4, step 3.1, algebra] ∎

## Remarks

- The theorem is the reason the Burau determinant of [[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]] computes an oriented link invariant from any braid representative: the right-hand side is computed for one representative and the left-hand side is the invariant supplied here.
- The Axiom of Choice enters only through the Alexander module; no additional choice is made in the proof. The ambient isotopy is already given, so no isotopy-extension theorem is needed.
