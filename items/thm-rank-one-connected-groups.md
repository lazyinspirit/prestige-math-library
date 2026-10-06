---
id: thm-rank-one-connected-groups
kind: theorem
title: Rank-one connected groups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 22
deps: [def-radical-and-unipotent-radical-of-an-algebraic-group, def-split-reductive-algebraic-group, lem-homogeneous-curves-and-automorphisms-of-p1, lem-sl2-structure-and-root-coordinates, lem-connected-groups-of-rank-zero-are-unipotent, def-borel-subgroup-and-maximal-torus, thm-quotient-by-a-borel-subgroup-is-complete, lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate, lem-reductive-center-radical-and-semisimple-quotient, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.20); Ch. 20 (20.12), (20.15)-(20.22), and (20.31)-(20.32), printed pp. 355-421"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.2, Proposition 171"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a connected nonsolvable affine group variety over $k$ and $T$ a maximal torus. For the equivalence and its geometric conclusions, base change $G$ and $T$ to an algebraic closure and form all radicals, Borels and quotients there. The following are equivalent: (a) the semisimple rank of $G$ is $1$; (b) over an algebraic closure, $T$ lies in exactly two Borel subgroups; (c) $\dim G/B=1$ for a Borel subgroup $B$ containing $T$; (d) there is an isogeny $G/R(G)\to\mathrm{PGL}_2$. In this case, over an algebraic closure, $S=G/R(G)$ is semisimple of rank $1$ and dimension $3$. If $\bar T$ is the image of $T$ in $S$, then
$$
\operatorname{Lie}(S)=\operatorname{Lie}(\bar T)\oplus\mathfrak s_\alpha\oplus\mathfrak s_{-\alpha},\qquad \dim\mathfrak s_\alpha=\dim\mathfrak s_{-\alpha}=1.
$$
For a Borel subgroup $B$ containing $T$, after base change to an algebraic closure $G/B\cong\mathbf P^1$ and the action map $G\to\operatorname{Aut}(G/B)=\mathrm{PGL}_2$ is surjective with kernel $q^{-1}(Z(S))$, where $q:G\to S$ is the quotient map. In the semisimple quotient, the rank-one Bruhat decomposition is $S=\bar B\sqcup\bar U\bar n\bar B$, where $\bar B$ is the image of $B$, $\bar U$ its unipotent radical, and $\bar n$ represents the nontrivial Weyl element. Every connected nonsolvable split reductive group of total rank $1$ (and hence semisimple rank $1$) is isomorphic to $\mathrm{SL}_2$ or $\mathrm{PGL}_2$.

## Facts & Assumptions

**Given:** AC, a connected nonsolvable affine group variety $G$ over $k$ with a maximal torus $T$.

[F1] Over an algebraically closed field the quotient by the radical of a smooth connected affine group is semisimple ([[def-radical-and-unipotent-radical-of-an-algebraic-group]]). There, $R(G)$ lies in every Borel subgroup, and passage to $S=G/R(G)$ identifies the Borel variety of $G$ with that of $S$; maximal tori map to maximal tori. Thus Borel subgroups of $G$ containing $T$ correspond to Borel subgroups of $S$ containing its image. In the semisimple quotient the Weyl group acts faithfully and transitively on these Borel subgroups ([[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]], [[thm-quotient-by-a-borel-subgroup-is-complete]], [[def-borel-subgroup-and-maximal-torus]]; Milne, Proposition 17.20 and Theorem 20.16).

[F2] For a smooth complete homogeneous curve over an algebraically closed field under a smooth connected affine group, the curve is $\mathbf P^1$, and $\operatorname{Aut}(\mathbf P^1)=\mathrm{PGL}_2$ ([[lem-homogeneous-curves-and-automorphisms-of-p1]]). In semisimple rank $1$, the root system is $\{\alpha,-\alpha\}$ and the two root spaces in the Lie algebra are one-dimensional; the split adjoint rank-one group is $\mathrm{PGL}_2$ (Milne, Theorem 20.22), and the standard central cover $\mathrm{SL}_2\to\mathrm{PGL}_2$ is universal, so every smooth connected central cover of $\mathrm{PGL}_2$ is dominated by $\mathrm{SL}_2$ ([[lem-sl2-structure-and-root-coordinates]]; Milne, Proposition 20.31).

[F3] The Borel variety is complete, its points fixed by $T$ correspond to Borel subgroups containing $T$, and if $H$ is a smooth connected affine group and $H/Q$ is a complete homogeneous variety of dimension $d$, every torus in $H$ has at least $d+1$ geometric fixed points on $H/Q$ (Milne, Corollary 20.12). In the equivalent rank-one cases, the quotient $G/B\simeq S/\bar B$ is the flag curve. The action of $S$ on that curve has kernel $Z(S)$; equivalently, its map to $\mathrm{PGL}_2$ is a central isogeny (Milne, Theorems 20.16 and 20.22, and Proposition 20.7).

[F4] A reductive group is the almost product of its largest central torus and its semisimple derived group; the central torus has rank equal to total rank minus semisimple rank. ([[lem-reductive-center-radical-and-semisimple-quotient]])

## Proof

1.1 Work over an algebraic closure. Set $S=G/R(G)$. By the radical-quotient theorem cited in [F1], $S$ is semisimple and its Borel variety identifies with that of $G$. The rank-one theorem cited in [F1] then gives the equivalence: in rank $1$ the Weyl group of $S$ acts faithfully and transitively on the Borel subgroups containing $\bar T$, while the Borel-opposition lemma cited in [F1] distinguishes the positive and negative Borels; conversely, the two $T$-fixed points of the Borel variety and the fixed-point bound in [F3] give dimension at most $1$, while nonsolvability excludes dimension zero; and a one-dimensional complete homogeneous curve is $\mathbf P^1$, whose action gives the isogeny to $\mathrm{PGL}_2$. An isogeny to $\mathrm{PGL}_2$ forces rank $1$. [F1, F2, F3, given, algebra]

2.1 Since $S$ is isogenous to $\mathrm{PGL}_2$, it has dimension $3$, semisimple rank $1$, and root system $\{\alpha,-\alpha\}$. The root decomposition is taken in $\operatorname{Lie}(S)$, not in $\operatorname{Lie}(G)$: over the algebraic closure it is $\operatorname{Lie}(\bar T)\oplus\mathfrak s_\alpha\oplus\mathfrak s_{-\alpha}$, with each root space one-dimensional. [F2, step 1.1, algebra]

2.2 The quotient map identifies $G/B$ with $S/\bar B$, so this is $\mathbf P^1$ by step 1.1. The action of $G$ on $G/B$ factors through $S$; it is transitive on $\mathbf P^1$, whereas a connected solvable affine group has a fixed point on a complete variety. Thus its image is nonsolvable, and every proper connected subgroup of $\mathrm{PGL}_2$ is solvable, so the action map is surjective. Its kernel in $S$ is $Z(S)$ by [F3], so its kernel in $G$ is exactly $q^{-1}(Z(S))$. [F1, F2, F3, step 1.1, algebra]

3.1 The universal central cover in [F2] lifts the central isogeny of step 2.2 to a central isogeny $\mathrm{SL}_2\to S$, carrying the diagonal Borel, upper root group and nontrivial Weyl representative to $\bar B,\bar U,\bar n$. The elementary matrix decomposition $\mathrm{SL}_2=B_2\sqcup U_2^+n_2B_2$ separates matrices by whether their lower-left entry is zero. Its images give $S=\bar B\sqcup\bar U\bar n\bar B$; disjointness follows from the two orbits on $S/\bar B=\mathbf P^1$. [F1, F2, step 2.2, algebra]

4.1 Finally let $G$ be split reductive of total rank $1$ and semisimple rank $1$. Its largest central torus has dimension zero, hence is trivial; by the centre structure supplier $G$ is semisimple. Milne's split rank-one adjoint result in [F2] gives a central isogeny $q:G\to\mathrm{PGL}_2$ with kernel $Z(G)$. Universality of the standard $\mathrm{SL}_2$ cover in [F2] supplies a central isogeny $f:\mathrm{SL}_2\to G$ over $k$ lifting it. Its kernel is a subgroup scheme of $\ker(qf)=\mu_2$, hence is either $1$ or $\mu_2$ (including characteristic $2$). Consequently $G$ is $\mathrm{SL}_2$ or $\mathrm{SL}_2/\mu_2=\mathrm{PGL}_2$, respectively. This proves the final classification without a later general root-datum classification theorem. [F2, F4, step 2.1, algebra] ∎
