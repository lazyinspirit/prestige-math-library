---
id: lem-reductive-center-radical-and-semisimple-quotient
kind: lemma
title: Centre, radical and semisimple quotient of a reductive group
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 20
deps: [def-axiom-of-choice, def-split-reductive-algebraic-group, def-radical-and-unipotent-radical-of-an-algebraic-group, thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate, lem-derived-subgroup-properties, def-derived-subgroup-and-solvable-algebraic-group, thm-nonaffine-affine-normal-group-quotient-affine, lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties, lem-nonaffine-group-image-exact-quotient-properties, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, lem-maximal-tori-extension-conjugacy-and-derived-group, thm-chevalley-centralizer-radical-and-reductive-centralizers, thm-multiplicative-type-groups-and-galois-character-modules, lem-diagonalizable-character-antiequivalence, def-group-of-multiplicative-type-and-torus, lem-nonaffine-affine-group-faithful-representation, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 12 (12.22), (12.29), (12.37)-(12.38), (12.46); Ch. 17 (17.61)-(17.62); Ch. 19 (19.10)-(19.12) and (19.21)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.1, Proposition 153 and Corollary 158, pp. 66-68"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a reductive algebraic group over $k$ ([[def-split-reductive-algebraic-group]]) and let $T$ be a maximal torus of $G$. Then: (a) $Z(G)\subseteq T$ for every maximal torus $T$, and $Z(G)$ is of multiplicative type ([[def-group-of-multiplicative-type-and-torus]]); (b) $R(G)=Z(G)_t$ is the largest subtorus of $Z(G)$ (not the full possibly nonreduced neutral component), its formation commutes with every extension of the base field, and the quotient $G/R(G)$ is semisimple; (c) $G/Z(G)$ has trivial centre; (d) the semisimple rank of $G$ equals $\operatorname{rk}G-\dim Z(G)$; (e) with $G'$ the derived subgroup ([[def-derived-subgroup-and-solvable-algebraic-group]]), $Z(G)_t\cap G'$ is finite, $G=Z(G)_t\cdot G'$ and the multiplication map $Z(G)_t\times G'\to G$ is surjective with finite kernel, and $G'$ is semisimple; (f) $G$ is semisimple iff $R(G)=1$ iff $Z(G)$ is finite. The quotient $G/R(G)$ is the represented normal affine quotient ([[thm-nonaffine-affine-normal-group-quotient-affine]]); it is smooth and connected by [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]].

## Facts & Assumptions

**Given:** AC, reductive $G$ over arbitrary $k$, and a maximal torus $T$; $Z(G)_t$ denotes the largest torus subgroup of the scheme-theoretic centre.

[F1] Reductive means smooth connected affine with trivial geometric unipotent radical. The radical and unipotent radical are the largest smooth connected normal solvable and unipotent subgroup varieties. Smooth connected solvable groups over an algebraically closed field have a decomposition $B_u\rtimes T$. ([[def-radical-and-unipotent-radical-of-an-algebraic-group]], [[def-split-reductive-algebraic-group]], [[thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate]])

[F2] Derived subgroups of smooth connected groups are smooth connected and characteristic, and their quotients are commutative. Normal affine quotients are represented affine fppf quotients; quotients and homomorphic images of smooth connected groups are smooth connected. Reductions of normal subgroups in a smooth group over a perfect field are subgroup varieties, with normal reduced neutral component. ([[lem-derived-subgroup-properties]], [[def-derived-subgroup-and-solvable-algebraic-group]], [[thm-nonaffine-affine-normal-group-quotient-affine]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]])

[F3] Maximal tori remain maximal under any field extension. In a reductive group the centralizer of a maximal torus is that torus, and centralizers commute with field extension. ([[lem-maximal-tori-extension-conjugacy-and-derived-group]], [[thm-chevalley-centralizer-radical-and-reductive-centralizers]])

[F4] A closed subgroup of a torus is of multiplicative type. The largest subtorus of a multiplicative-type group with geometric character module $M$ corresponds to $M/M_{\mathrm{tors}}$; it commutes with every field extension, and its quotient has finite character group. Diagonalizable character duality and the Galois character-module correspondence give these assertions also for nonsplit groups. ([[thm-multiplicative-type-groups-and-galois-character-modules]], [[lem-diagonalizable-character-antiequivalence]], [[def-group-of-multiplicative-type-and-torus]])

[F5] Multiplicative-type rigidity: a connected group acts trivially by group automorphisms on a torus. More generally if $N$ is central in $H$ and $N,H/N$ are of multiplicative type, every action of a connected group on $H$ preserving $N$ is trivial (Milne12.36–12.41). The proof first fixes both factors; $h^{-1}(g\cdot h)$ then descends to a homomorphism $H/N\to N$, whose family is constant in $g$ by rigidity, hence the identity. A commutative extension of multiplicative-type groups is of multiplicative type (Milne12.22).

[F6] The precise extra source input for the product assertion is semisimple perfectness (Milne21.49–21.50), used as in12.46(b). Over algebraically closed $k$, the source root groups generate a semisimple group: the rank-one identities express coroot torus elements as products of root-group elements, and the roots span the rational character space. Each root subgroup lies in a perfect rank-one subgroup (source20.24), so their generated group equals its derived subgroup. Perfectness descends by field extension and is equivalent to having no nontrivial commutative quotient. This source-backed input preserves the full product statement without a cycle through its later local semisimple-perfectness consumer.

[F7] Under AC affine finite-type groups have faithful finite-dimensional representations. A split torus decomposes such a representation into finitely many character-weight spaces, each with arbitrary finite multiplicity; for a nonsplit torus this decomposition is used only after passage to an algebraic closure. A character of a group kills its derived subgroup, because its commutator morphism is trivial. ([[lem-nonaffine-affine-group-faithful-representation]], [[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[def-derived-subgroup-and-solvable-algebraic-group]])

## Proof

**Given:** AC and reductive $G$ over $k$.

1.1 By [F3], $C_G(T)=T$ for every maximal torus, and the scheme centre lies in each such centralizer. Hence $Z(G)\subseteq T$. By [F4] the centre is of multiplicative type, proving (a). Its largest torus $Z(G)_t$ is central, smooth connected normal and solvable, so lies in $R(G)$. Conversely pass to algebraic closure. The unipotent radical of the smooth connected solvable group $R(G)_{k^{\mathrm a}}$ is characteristic there and normal in $G_{k^{\mathrm a}}$: conjugation preserves it on points by uniqueness, and smoothness makes this pointwise inclusion scheme-theoretic. Reductivity forces it to be trivial. Solvable splitting [F1] therefore makes $R(G)_{k^{\mathrm a}}$ a torus, so $R(G)$ is a torus. Rigidity [F5] makes it central, hence $R(G)\subseteq Z(G)_t$. Thus $R(G)=Z(G)_t$. [F3, F4, F1, F5]

1.2 Put $G'=DG$. We prove $R(G)\cap G'$ finite without asserting smoothness of this intersection. Over algebraic closure take a faithful representation $W$ of $G$ and its central-torus weight decomposition $W=\bigoplus_\chi W_\chi$. Since $R(G)$ is central, each weight block is $G$-stable. Its determinant is a character of $G$, hence trivial on $G'$; on $R(G)$ it is $\chi^{d_\chi}$, where $d_\chi=\dim W_\chi>0$. Faithfulness makes the finitely many $\chi$ generate the character lattice of $R(G)$ by [F4]. The subgroup generated by their multiples $d_\chi\chi$ has finite index: a common positive multiple of all $d_\chi$ times the full lattice lies in it. Hence the subgroup killed by all these determinant characters is finite, and contains $R(G)\cap G'$. This proves finiteness over $k$, including infinitesimal kernels. [F4, F7, choose, algebra]

2.1 The centre is defined by commuting equations and commutes with field extension. By [F4], so does its largest torus, and therefore so does $R(G)$ by step1.1. For $Q=G/R(G)$, a smooth connected normal solvable subgroup in $Q_{k^{\mathrm a}}$ pulls back to a smooth connected normal solvable subgroup of $G_{k^{\mathrm a}}$: its kernel is the smooth central torus $R(G)_{k^{\mathrm a}}$, and solvability is closed under extensions by pulling back derived series. Radical maximality forces the inverse image to equal $R(G)_{k^{\mathrm a}}$, so the subgroup in $Q_{k^{\mathrm a}}$ is trivial. Thus $Q$ is semisimple. Existence, affineness, smoothness and connectedness of this quotient follow from [F2]. This proves (b). [F4, F2, F1, step 1.1]

3.1 A finite central quotient of a smooth connected semisimple group is semisimple. Indeed over algebraic closure, the inverse image of its radical is an extension of a solvable group by a finite central commutative group, hence solvable. Its smooth connected reduced neutral component is normal in the semisimple source by [F2] and is therefore trivial. The finite quotient morphism preserves dimension, so the radical in the quotient has dimension zero and is trivial because smooth connected. Apply this to $G/R(G)\to G/Z(G)$, whose kernel $Z(G)/R(G)$ is finite by [F4]. Thus $G/Z(G)$ is semisimple, in particular reductive, and its centre is of multiplicative type by step1.1 applied to this quotient. [F2, F4, F1, step 1.1, step 2.1]

3.2 Since $R(G)\subseteq T$, its quotient $T/R(G)$ is a torus in $G/R(G)$. If a larger torus existed, its inverse image would be a smooth connected extension of tori with central kernel $R(G)$. Rigidity [F5] makes this extension commutative and of multiplicative type, hence a torus properly containing $T$, a contradiction. Thus $T/R(G)$ is maximal. Consequently the semisimple rank is $\dim T-\dim R(G)=\operatorname{rk}G-\dim Z(G)$, since $Z(G)/R(G)$ is finite. This proves (d). [F5, F3, F4, step 1.1, step 2.1]

3.3 Over algebraic closure the radical $R(G')$ is preserved by conjugation from $G$ by uniqueness, and this gives scheme normality because $G$ and $R(G')$ are smooth. Thus it lies in $R(G)\cap G'$, finite by step 1.2. Smooth connectedness then forces $R(G')=1$. The derived subgroup is smooth connected by [F2], so it is semisimple over $k$. Now $G/R(G)$ is semisimple and perfect by [F6]. The closed normal image of $G'$ in this quotient has commutative quotient, because commutators lift fppf-locally to $G$ and land in $G'$. Perfectness makes that image the entire quotient. Therefore $G=R(G)G'$ and multiplication $R(G)\times G'\to G$ is a surjective homomorphism with kernel $\{(z,z^{-1}):z\in R(G)\cap G'\}$, finite by step 1.2. This proves all of (e). [F2, F6, F1, step 2.1, step 1.2]

4.1 Let $Z'$ be the inverse image in $G$ of $Z(G/Z(G))$. It is normal, with central kernel $Z(G)$ and multiplicative-type quotient by step 3.1. The conjugation action of connected $G$ on $Z'$ is trivial by [F5], so $Z'\subseteq Z(G)$. Its quotient is therefore trivial: $G/Z(G)$ has trivial scheme centre, proving (c). [F5, step 1.1, step 3.1]

5.1 By definition, semisimplicity means the geometric radical is trivial. Step2.1 identifies it with $R(G)_{k^{\mathrm a}}$, so this is equivalent to $R(G)=1$. By step1.1 and [F4] this occurs exactly when $Z(G)$ has dimension zero, equivalently is finite. Thus (f) holds. The distinction from the full neutral centre is essential: in characteristic $p$, $\mathrm{SL}_p$ is semisimple with centre $\mu_p$, connected and nonreduced, while its largest central torus and radical are trivial. [F4, F1, step 1.1, step 2.1] ∎
