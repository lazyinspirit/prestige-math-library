---
id: lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology
kind: lemma
title: Relative homology over one base cell is shifted fiber homology
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-serre-filtration-of-the-total-space-over-base-skeleta, lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid, prop-pullbacks-of-fibrations-are-fibrations, prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace, lem-serre-fibration-replacement-preserves-fiber-homology-transport, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-excision-for-singular-homology, thm-singular-homology-satisfies-dimension-and-arbitrary-additivity, thm-cellular-chains-compute-homology-with-local-coefficients]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, proof of Theorem 5.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 529–530"
---

## Statement

Let $p:E\to B$ be a Serre fibration over a CW complex, let
$E_a=p^{-1}(B^a)$, and let $R$ be a commutative unital ring. For every
oriented $p$-cell $e$, choose its standard characteristic map
$$\phi_e:(D^p,S^{p-1})\longrightarrow(B^p,B^{p-1}),$$
write $c_e$ for the center of $D^p$, $b_e=\phi_e(c_e)$, and
$F_{b_e}=p^{-1}(b_e)$. There are choice-free orientation-compatible
isomorphisms
$$H_{p+q}(E_p,E_{p-1};R) \cong \bigoplus_{e\in\mathcal E_p}H_q(F_{b_e};R) \cong C_p^{\mathrm{cell}}\bigl(B;\mathcal H_q(p;R)\bigr).$$
for every integer $q$. Consequently
$$E^1_{p,q}=H_{p+q}(E_p,E_{p-1};R)$$
is the cellular $p$-chain group with coefficients in the fiber-homology
local system.

Precisely at chain level, the **oriented cellular contribution** of $e$ is
the model
$$K_e(R)=R\{o_e\}[p]\otimes_R C_*(F_{b_e};R),$$
where $R\{o_e\}[p]$ is concentrated in degree $p$ and the tensor
differential on $o_e\otimes c$ is $(-1)^p o_e\otimes\partial c$.
Thus $K_e(R)$ is chain-isomorphic, and hence chain-homotopy equivalent, to
the signed shift $C_{*-p}(F_{b_e};R)$. Its homology is the displayed
cellwise summand. This statement does not identify the raw singular quotient
$C_*(E_p,E_{p-1};R)$ with $\bigoplus_eK_e(R)$ by a chain-homotopy
equivalence: ordinary excision supplies the asserted homology comparison,
not such a chain-level comparison.

## Facts & Assumptions

**Given:** The fibration, CW structure, cell orientations, coefficient ring, and the Serre filtration.

[F1] [[def-serre-filtration-of-the-total-space-over-base-skeleta]] identifies the first page with $H_{p+q}(E_p,E_{p-1};R)$ and fixes the bidegree convention.

[F2] Pullbacks of Serre fibrations are Serre fibrations ([[prop-pullbacks-of-fibrations-are-fibrations]]), and finite CW pairs have the relative lifting property without AC ([[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]).

[F3] The coefficientwise finite-chain argument in the proof of [[lem-serre-fibration-replacement-preserves-fiber-homology-transport]] proves that every weak homotopy equivalence induces homology isomorphisms for every abelian coefficient group, without AC.

[F4] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies pair exactness and the connecting map represented by the boundary of a relative chain. [[thm-excision-for-singular-homology]] supplies excision for arbitrary abelian coefficients.

[F5] [[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]] identifies the homology of a set-indexed disjoint union of pairs with the direct sum of their relative homology groups.

[F6] [[lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid]] supplies the strict-fiber homology local system. The intrinsic cellular group and its direct-sum description by oriented cells and coefficient fibers are given by [[thm-cellular-chains-compute-homology-with-local-coefficients]].

## Proof

**Proof technique:** hemisphere connecting maps and cell excision.

1.1 We first record the finite lifting calculation used repeatedly. Let $q:Y\to X$ be a Serre fibration and let $A\subseteq X$ be a specified strong deformation retract. Then $Y_A=q^{-1}(A)\hookrightarrow Y$ is a weak homotopy equivalence. Indeed, for a based cube in $Y$, lift the deformation of its projected cube, keeping its boundary at the chosen point in $Y_A$; the endpoint lies in $Y_A$. This proves surjectivity on positive homotopy groups. Apply the same relative lift to a cubical nullhomotopy, fixing its whole boundary, to prove injectivity. With a point and an interval as the finite parameter spaces, the same argument gives respectively surjectivity and injectivity on components. By [F3], the inclusion therefore induces an isomorphism on homology with the underlying additive group of $R$ as coefficients. [F2, F3]

2.1 Pull $p$ back along $\phi_e$ and denote by $\widetilde D^p_e$ and $\widetilde S^{p-1}_e$ the inverse images of the disk and its boundary. Fix, once for the standard disk, the usual positive and negative closed hemispheres, orient the positive hemisphere by the boundary-first convention, and iterate this convention down to a point $x_e\in S^{p-1}$. For the first stage put $$X=\widetilde D^p_e,\quad A=\widetilde S^{p-1}_e,\quad N=\widetilde D^{p-1}_{e,-}.$$ The disk strongly deformation retracts onto its negative hemisphere, so Step 1.1 gives $H_*(X,N;R)=0$. The degreewise short exact sequence $$0\to C_*(A,N;R)\to C_*(X,N;R)\to C_*(X,A;R)\to0$$ and its elementary cycle-boundary exact sequence therefore make the connecting map $$H_n(X,A;R)\xrightarrow{\cong}H_{n-1}(A,N;R)$$ an isomorphism. Excision of a slightly shrunken negative hemisphere identifies the target with the relative homology over the positive hemisphere and its equator. Iterating $p$ times gives $$ \epsilon_e:H_{p+q}(\widetilde D^p_e,\widetilde S^{p-1}_e;R) \xrightarrow{\cong}H_q(F_{\phi_e(x_e)};R). $$ The connecting maps use the displayed boundary convention, so reversing the orientation of $e$ multiplies $\epsilon_e$ by $-1$. For $p=0$ there are no connecting maps and $\epsilon_e$ is the identity on the fiber. [F2, F4, Step 1.1]

2.2 We now separate the cells. In each characteristic disk use the same radial coordinate. The union of $B^{p-1}$ with the outer radial collars of all $p$-cells is open by the weak topology and strongly deformation retracts onto $B^{p-1}$ by one cellwise radial formula. Step 1.1 applied to its inverse image shows that enlarging $E_{p-1}$ to this collar does not change the relative homology of $E_p$. Excise a smaller closed outer collar. What remains is the disjoint union, over the open $p$-cells, of pulled-back concentric disk pairs. Radial rescaling and another application of Step 1.1 identify each with $(\widetilde D^p_e,\widetilde S^{p-1}_e)$. Excision and arbitrary additivity therefore give $$ H_{p+q}(E_p,E_{p-1};R) \cong\bigoplus_{e\in\mathcal E_p} H_{p+q}(\widetilde D^p_e,\widetilde S^{p-1}_e;R). $$ Every singular chain has finite support, so the target is a direct sum even when there are infinitely many $p$-cells. [F4, F5, Step 1.1]

3.1 Let $\rho_e$ be the straight segment in $D^p$ from $x_e$ to $c_e$. Transport along $\phi_e\rho_e$ followed by $\epsilon_e$ identifies the last group in Step 2.1 with $H_q(F_{b_e};R)$. All hemisphere retractions, thickenings, and paths were fixed in the one standard disk. Naturality of connecting maps, excision, and transport shows that the result respects the characteristic map and its orientation; no family of unspecified lifts or paths is chosen. [F4, F6, Step 2.1]

4.1 Compose Step 2.2 with the maps of Step 3.1. By [F6], the resulting direct sum of the stalks $H_q(F_{b_e};R)$, indexed by the oriented $p$-cells, is exactly $C_p^{\mathrm{cell}}(B;\mathcal H_q(p;R))$. By [F1] the source is $E^1_{p,q}$. This proves both displayed homology identifications. [F1, F6, Step 3.1, Step 2.2]

5.1 Finally, $R\{o_e\}[p]\otimes C_*(F_{b_e};R)$ has degree-$n$ term $C_{n-p}(F_{b_e};R)$ and differential $(-1)^p\partial$, exactly the declared signed shift. The identity on the underlying modules is therefore a chain isomorphism. Its homology in total degree $p+q$ is $H_q(F_{b_e};R)$, the $e$-summand in Step 4.1. This verifies the stated chain-model claim without upgrading the excision map beyond what [F4] proves. [Step 4.1, algebra]

6.1 If $p=0$, the relative pair is the disjoint union of the fibers over the zero-cells and Step 2.1 has no suspension stage. If $q<0$, all fiber chain groups and both sides vanish; $q=0$ is included in the component argument of Step 1.1. An empty fiber contributes zero, as does the zero ring; no $p$-cells give the empty direct sum. One cell, $p=1$, constant or degenerate singular simplices, both collar endpoints, and either cell orientation are retained by the same relative complexes and signs. Each lift tests one finite cube, and every chain has finite support, so the construction uses no form of AC. [F2, F4, F5, Step 1.1, Step 2.1, Step 3.1, Step 5.1] ∎
