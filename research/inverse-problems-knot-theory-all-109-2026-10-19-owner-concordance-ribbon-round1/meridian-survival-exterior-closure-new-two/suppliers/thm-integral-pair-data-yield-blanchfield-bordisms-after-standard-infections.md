---
id: thm-integral-pair-data-yield-blanchfield-bordisms-after-standard-infections
kind: theorem
title: Integral pair data persist to Blanchfield bordisms through standard infection
status: draft
origin: session
deps: [lem-standard-infection-cobordisms-have-boundary-generated-second-homology, lem-boundary-homology-cokernels-surject-under-excisive-bordism-gluing, lem-equivariant-intersection-pairings-are-preserved-by-collared-bordism-gluing, lem-relative-unitary-equivariant-intersection-pairing-is-hermitian, thm-ptfa-localized-boundary-intersection-rank-is-no-larger-than-ordinary-rank, lem-ptfa-localization-kills-first-homology-of-betti-one-manifolds, thm-unimodular-intersection-pairs-force-boundary-blanchfield-kernel-isotropy, thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf, lem-ore-localization-is-flat-and-detects-module-torsion, thm-topological-collaring-for-manifold-boundaries]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Lemmas4.8,4.10,4.13,4.14 and Proposition4.11, printed pages16–18
---

## Statement

Let $V$ be a compact connected oriented topological four-manifold with boundary a chosen zero-longitude surgery $M(J)$. Suppose
$$H_1(V;\mathbb Z)\cong\mathbb Z,\qquad H_2(V;\mathbb Z)\cong\mathbb Z^{2r}.$$
Put $\pi=\pi_1(V)$ and $\Pi_s=\pi/\pi^{(s)}$, where $s\ge0$ and the superscript denotes the ordinary derived series. Supply classes $x_1,\ldots,x_r,y_1,\ldots,y_r\in H_2(V;\mathbb Z[\Pi_s])$ satisfying
$$\lambda(x_i,x_j)=0,\qquad\lambda(x_i,y_j)=\delta_{ij}.$$
These are actual integral intersection-pair data; existence of such data is not asserted.

Form $W$ by finitely many oriented attachments of standard connected-sum or infection cobordisms, allowing their orientation reversals, along each piece's marked outgoing surgery component. Use the supplied peripheral models in those constructions. Let $\phi:\pi_1(W)\to G$ be a supplied homomorphism to a PTFA group whose restriction to $\pi_1(V)$ factors through $\Pi_s$. In particular the factorization is automatic if $G^{(s)}=1$. Let $k=\mathbb Q$ or $\mathbb F_p$ for a prime $p$, put $A=k[G]$, and let $K$ be its fraction division ring with standard involution.

Then there are image classes $\ell_i,d_i\in H_2(W;A)$ with
$$\lambda_A(\ell_i,\ell_j)=0,\qquad\lambda_A(\ell_i,d_j)=\lambda_A(d_j,\ell_i)=\delta_{ij},$$
and both cokernel dimensions satisfy
$$\dim_K\operatorname{coker}\{H_2(\partial W;K)\to H_2(W;K)\}\le\dim_k\operatorname{coker}\{H_2(\partial W;k)\to H_2(W;k)\}\le2r.$$
For every boundary component $M_0$ with nontrivial restricted homomorphism, $H_1(M_0;K)=0$ and its Bockstein-duality pairing has
$$B_0(a,b)=0\quad\text{for all }a,b\in\ker\{H_1(M_0;A)\to H_1(W;A)\}.$$
Consequently every boundary class with nonzero self-pairing has nonzero image in $H_1(W;A)$. The theorem applies to locally flat topological bordisms as well as smooth ones and introduces no choice principle.

## Facts & Assumptions

**Given:** The actual integral homology and lifted pairing data, finite framed cobordism attachments, coefficient homomorphism and field in the Statement.

[F1] Standard infection and connected-sum pieces have outgoing injections on ordinary $H_1,H_2$ and incoming degree-two surjectivity. A collared gluing with outgoing $H_1$ injection and remaining-boundary $H_2$ surjection induces a surjection on boundary homology cokernels. [[lem-standard-infection-cobordisms-have-boundary-generated-second-homology]], [[lem-boundary-homology-cokernels-surject-under-excisive-bordism-gluing]]

[F2] Ambient unitary coefficients preserve intersection pairings under collared gluing, and the pairings are Hermitian. [[lem-equivariant-intersection-pairings-are-preserved-by-collared-bordism-gluing]], [[lem-relative-unitary-equivariant-intersection-pairing-is-hermitian]]

[F3] A compact oriented four-manifold with boundary components of ordinary first Betti number one has localized boundary-cokernel dimension at most the ordinary one. A nontrivial PTFA coefficient system on a compact Betti-one manifold kills localized first homology. [[thm-ptfa-localized-boundary-intersection-rank-is-no-larger-than-ordinary-rank]], [[lem-ptfa-localization-kills-first-homology-of-betti-one-manifolds]]

[F4] Integral pairs and the localized cokernel bound force each selected acyclic boundary kernel to be isotropic for the Bockstein-duality form. [[thm-unimodular-intersection-pairs-force-boundary-blanchfield-kernel-isotropy]]

[F5] Relative cap duality holds with arbitrary underlying abelian-group local systems. Constant rational localization is exact; compact manifold boundaries have collars without choice. [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[lem-ore-localization-is-flat-and-detects-module-torsion]], [[thm-topological-collaring-for-manifold-boundaries]]

## Proof

1.1 The factorization supplies an involution-preserving ring homomorphism $\mathbb Z[\Pi_s]\to A$, and hence maps of all actual coefficient chain systems on $V$. Cap, dual-system identification and evaluation commute with this change of coefficients. Explicitly a dual cochain $f$ changes to $c\otimes a\mapsto\rho(f(c))a$; balancing and the finite face formulas show compatibility with coboundaries and cap. Both relative cap maps are isomorphisms by [F5], so their inverse duality maps commute too. Thus the image classes on $V$ retain the displayed zero and unit pairings. The standard base vector $1$ gives compatible transported Hermitian structures before and after change of ring. Hermitian symmetry [F2] supplies the reverse cross-pairing $\lambda_A(d_j,\ell_i)=\delta_{ij}$. [F2, F5, given, construct, algebra]

1.2 The ordinary group $H_2(V;k)$ has dimension $2r$. For $k=\mathbb Q$ this is exact rational localization of the integral singular complex, using [F5]. For $k=\mathbb F_p$ one can check the coefficient sequence directly without an infinite lifting assertion. Lift the finitely many coefficients of an $\mathbb F_p$ two-cycle $z$ to an integral chain $\widetilde z$. Write $\partial\widetilde z=pw$; then $w$ is an integral one-cycle and $p[w]=0$. Since $H_1(V;\mathbb Z)=\mathbb Z$, $w=\partial v$ for some two-chain $v$, so $\widetilde z-pv$ is an integral cycle lifting $z$. Conversely, if an integral two-cycle becomes a boundary mod $p$, lift that one finite bounding three-chain and subtract its boundary; the difference is $p$ times an integral two-cycle, since integral chain groups have no $p$-torsion. Thus $H_2(V;\mathbb F_p)\cong H_2(V;\mathbb Z)/p=\mathbb F_p^{2r}$. Its quotient by the boundary image therefore has dimension at most $2r$. [F5, given, construct, algebra]

2.1 Give $V$ its collar from [F5] and use the actual product collars of the finite standard pieces. At each attachment the outgoing $H_1$ injection and incoming $H_2$ surjection of [F1] give a surjection from the preceding boundary cokernel to the new one. Its dimension cannot increase, so after finitely many attachments the ordinary cokernel is at most $2r$. The single coefficient system on final $W$ restricts to each intermediate manifold, and [F2] preserves every pair identity under inclusion. Thus the images $\ell_i,d_i$ in final $W$ satisfy all pair identities in the Statement. Orientation reversal of a piece does not change its ordinary injection and surjection properties; the orientation on the embedded preceding manifold is unchanged, which is the orientation used in [F2]. All the resulting manifolds are compact and oriented with the actual remaining boundary components. [F1, F2, F5, step 1.1, step 1.2, construct, algebra]

3.1 Every remaining boundary component is a chosen zero-longitude surgery on a knot. Its ordinary first homology over $k$ is $k$: in the exterior/filling Mayer–Vietoris sequence the preferred longitude maps to zero, the filling core identifies with the meridian, and that meridian remains the single free generator, exactly as in the peripheral calculation of [F1]. Hence [F3] applies to final $W$ and gives the first cokernel inequality in the Statement. If the restriction to $M_0$ is nontrivial, the second assertion of [F3] gives $H_1(M_0;K)=0$. Thus the finite pairs of step 2.1 and the localized dimension bound verify every hypothesis of [F4], with $R=A$ and the standard involutive fraction ring $K$. [F1, F3, step 2.1, construct, algebra]

4.1 Apply [F4] to obtain $B_0(a,b)=0$ for all classes in that inclusion kernel. If $B_0(a,a)\ne0$, the class $a$ therefore cannot lie in the kernel, and its image in $H_1(W;A)$ is nonzero. This is the survival implication used for infection axes in the source bordism argument. Every isotropic submodule has zero self-pairings, so such a surviving class lies outside every isotropic submodule. [F3, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 For actual integral $s$-solution data, these hypotheses are precisely its homology and lifted-pairing part; passage to a quotient target of derived length at most $s$ factors because a homomorphism carries the ordinary derived series into the target derived series. Every coefficient lift in step 1.2 involved one finite chain; all other arguments used the supplied finite pair list and actual collared attachments. The proof therefore preserves smooth and topological scopes and introduces no choice axiom beyond none in these data. [F1, F2, F3, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

This theorem supplies the pairing and kernel-isotropy data once the actual initial bordism and attachments are given. Deriving that initial bordism from a topological concordance relation, the mixed-derived-series meridian maps, and the analytic signature constraints are separate requirements for the full Cha–Kim Theorems A and B.
