---
dependency_level: 0
id: lem-compact-pro-p-abelian-actions-extend-to-iwasawa-algebra
kind: lemma
title: Continuous compact pro-p actions extend to the Iwasawa algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-pro-p-group
- def-profinite-group-by-inverse-limit
- def-p-adic-integers-as-compatible-residue-classes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: Sections 1–3, completed group algebras, continuous actions and characteristic
      ideals; local reconstruction.
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $G$ be a profinite abelian group and let $A$ be a compact Hausdorff abelian pro-$p$ group with a continuous action of $G$ by group automorphisms. There is a unique continuous module structure on $A$ over $\Lambda(G)=\varprojlim_{U\triangleleft_o G}\mathbb Z_p[G/U]$ extending the action and the canonical $\mathbb Z_p$ action. The open $G$-stable subgroups of $A$ are cofinal among all its open subgroups, and their finite quotients realize this module action by ordinary finite group-ring actions.

If $1\to A\to E\to G\to1$ is an exact sequence of profinite groups with $A$ abelian, the action by conjugation through any lift in $E$ is a continuous action of this kind. This conclusion requires no continuous section of $E\to G$.

## Facts & Assumptions

**Given:** AC, the compact pro-$p$ group $A$, the profinite abelian group $G$, and, for the last assertion, the exact sequence of profinite groups.

[F1] Profinite groups are inverse limits of finite discrete groups, with open normal subgroups forming a neighborhood basis of the identity; pro-$p$ groups have finite $p$-group quotients. ([[def-profinite-group-by-inverse-limit]], [[def-pro-p-group]])

[F2] A $p$-adic integer is a compatible system of residues modulo $p^m$. Its action on a finite abelian $p$-group is therefore defined by any residue modulo an exponent annihilating that group. ([[def-p-adic-integers-as-compatible-residue-classes]])

[A1] AC is retained for the compactness and profinite interfaces; the construction below chooses only finitely many neighborhoods or representatives at a time. ([[def-axiom-of-choice]])

## Proof

1.1 The inverse-limit finite abelian $p$-group presentation gives a canonical $\mathbb Z_p$ action on $A$ by [F2]. Each open subgroup $N$ is closed and is preserved by multiplication by integers, hence also by $\mathbb Z_p$ by continuity. A continuous group automorphism of $A$ commutes with this action, since it commutes with integer multiplication and the integers are dense in $\mathbb Z_p$. [F1, F2, given, construct, algebra]

2.1 Fix an open subgroup $N\subset A$. For every $a\in A$, continuity of $(g,x)\mapsto gx-x$ supplies an identity neighborhood $V_a\subset G$ and a neighborhood $W_a\subset A$ of $a$ such that $gx-x\in N$ on $V_a\times W_a$. Compactness gives finitely many $W_a$ covering $A$. By [F1], choose an open subgroup $U$ of $G$ contained in the intersection of the corresponding finitely many $V_a$. Then $(g-1)A\subset N$ for $g\in U$, and in particular $gN=N$, using the same inclusion for $g^{-1}\in U$. Thus $U$ stabilizes $N$. Since $G/U$ is finite, the intersection $N_G=\bigcap_{g\in G}gN$ is an intersection of only finitely many distinct translates. It is open, $G$-stable and contained in $N$. This proves cofinality. [F1, A1, step 1.1, construct, algebra]

3.1 For a $G$-stable open $N$, let $Q=A/N$. It is a finite abelian $p$-group. Its action factors through $G/U_N$ for an open subgroup $U_N$: for each of its finitely many elements choose a representative in $A$, and continuity makes its stabilizer open; intersect those stabilizers. The finite quotient therefore has an action of $\mathbb Z_p[G/U_N]$, hence of $\Lambda(G)$ by its projection. These actions are compatible when $N$ shrinks, because the integer and $G$ actions are compatible; they are also independent of the choice of $U_N$ by passing to the intersection of two such kernels. [F1, F2, step 2.1, construct, algebra]

4.1 The natural map $A\to\varprojlim_N A/N$ over these stable subgroups is an isomorphism of topological groups. Injectivity follows from the Hausdorff neighborhood basis. For surjectivity, the compatible cosets are nonempty closed subsets of compact $A$ with the finite-intersection property: any finitely many have a common refinement. Compactness gives a point in their intersection, unique by injectivity. This continuous bijection is a homeomorphism since its domain is compact and its target Hausdorff. Taking the inverse limit of the actions in step 3.1 gives a continuous action $\Lambda(G)\times A\to A$: every finite quotient of the output depends only on a finite group-ring quotient modulo a power of $p$ and on a finite quotient of $A$. The ring-module axioms hold in every finite quotient, hence in $A$. Uniqueness holds because finite sums of group elements with integer coefficients are dense in $\Lambda(G)$: at finitely many quotient coordinates, pass to one common refinement and lift its finite group-ring coefficients. [F1, F2, step 3.1, construct, algebra]

5.1 In the exact-sequence situation, two lifts of $g\in G$ differ by an element of $A$, which acts trivially on the abelian group $A$ by conjugation. Thus the action is well defined. The continuous surjection $q:E\to G$ is a quotient map: compactness of $E$ and the Hausdorff property of $G$ make it closed. It is open as well, since $q^{-1}(q(O))=\bigcup_{a\in A}Oa$ is open for every open $O\subset E$. Hence $q\times\operatorname{id}_A$ is an open quotient map. The continuous conjugation $E\times A\to A$ is constant on its fibres, so it descends to a continuous action $G\times A\to A$. Applying steps 1.1–4.1 proves the last assertion without choosing any section. [F1, A1, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
