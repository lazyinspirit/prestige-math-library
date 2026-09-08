---
id: lem-diagonal-bar-coinvariants-compute-group-homology
kind: lemma
title: "Diagonal bar coinvariants compute group homology"
status: draft
origin: pipeline
deps: [def-group-homology-as-a-derived-functor, thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module, thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent, def-projective-object, def-dependent-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Assume DC and the supplied projective-resolution convention for derived group homology. For every left $G$-module $M$, $H_n(G;M)$ is naturally the homology of $C_n(G;M)=(\overline B_n(G)\otimes_{\mathbb Z}M)_G$, with diagonal left action and alternating vertex-deletion differential. Equivalently it is computed by $\overline B^{\rm right}(G)\otimes_{\mathbb ZG}M$, where $b\cdot g=g^{-1}b$.

## Facts & Assumptions

**Given:** DC, a group G, a left module M, and supplied left projective resolution P of M.

[F1] The derived convention computes homology of $\mathbb Z\otimes_{\mathbb ZG}P$ ([[def-group-homology-as-a-derived-functor]]).

[F2] The homogeneous bar complex is an augmented free resolution ([[thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module]]).

[F3] Normalization is a chain-homotopy equivalence ([[thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent]]).

[F4] Projectivity lifts the identity through any epimorphism onto the object ([[def-projective-object]]).

[F5] DC is the axiom retained in the supplied derived-resolution convention ([[def-dependent-choice]]).

## Proof

1.1 Turning a left module into a right module by $b\cdot g=g^{-1}b$ preserves exactness and takes the regular free left module to a free right module (send the basis coordinate g to $g^{-1}$). Thus the normalized bar complex $B=\overline B^{\rm right}(G)\to\mathbb Z$ is a free right resolution: normalization preserves exactness, and its nondegenerate orbits supply a free basis. [F2, F3, given]

2.1 Put $R=\mathbb ZG$ and $D_{pq}=B_p\otimes_RP_q$ with differential $h=d_B\otimes1$ and $v=(-1)^p1\otimes d_P$. Then $hv+vh=0$. Tensor with $B_p$, a free right module, preserves exactness: each finite-support cycle has a primitive by lifting only its finitely many nonzero coordinates. Each projective $P_q$ is a retract of the free module on its underlying set: lift its identity through the canonical surjection. Tensor with $P_q$ is therefore a retract of tensor with a free left module and preserves exact sequences of right modules. The augmented columns of D are exact with bottom $B_p\otimes_RM$, and augmented rows are exact with left edge $\mathbb Z\otimes_RP_q$. [F4, step 1.1, algebra]

2.2 The map $B\otimes_RM\to(\overline B\otimes_{\mathbb Z}M)_G$ sending $b\otimes m$ to its diagonal orbit class is well-defined: $g^{-1}b\otimes m$ and $b\otimes gm$ are in the same orbit. Conversely $(gb)\otimes(gm)=b\otimes m$ in the balanced tensor product since $gb=b\cdot g^{-1}$. The same formula therefore defines an inverse, and both composites fix every pure tensor. Each vertex deletion commutes with these formulas, including the first and last deletions, giving a chain isomorphism. [step 1.1, algebra]

3.1 Here is the finite comparison argument for either augmentation. For exact augmented columns, place the augmentation in vertical degree -1. In the resulting augmented total complex, a total n-cycle has finitely many components, with $0\le p\le n+1$. At its largest remaining p, the cycle equation says $v z_p=0$, because the component from p+1 is zero. Exactness supplies $w_p$ with $vw_p=z_p$. Subtract $(h+v)w_p$; the p-component vanishes and the only new component is at p-1. Repeat down to p=0, where h is zero. The cycle has become zero after finitely many boundary subtractions. Thus the augmented total complex is acyclic. The same proof with p and q interchanged works for exact augmented rows, using the largest remaining q. Signs of the primitive are absorbed into w. [step 2.1, algebra]

4.1 The augmented total complex is the cone of the total-to-edge augmentation up to a shift and sign. Acyclicity implies that augmentation induces a homology isomorphism: a cycle on the edge lifts to a total cycle because the corresponding cone cycle bounds; if a total cycle maps to an edge boundary, pairing it with that boundary primitive makes a cone cycle, whose being a boundary says the original cycle bounds. Hence $H_*(B\otimes_RM)\cong H_*(\operatorname{Tot}D)\cong H_*(\mathbb Z\otimes_RP)=H_*^P(G;M)$. DC is the inherited resolution-comparison assumption; the finite elimination in step 3.1 adds no arbitrary family of choices. [F1, F5, step 3.1, algebra]

5.1 The augmentations and tensor formulas commute with coefficient maps and with the bar maps induced by group homomorphisms. Maps between supplied resolutions give the same maps on homology by the supplied-resolution convention. Since inverses of isomorphisms are unique, the composite identification is natural. Degree zero gives the usual coinvariants; for $M=0$ all complexes are zero, and for $G=1$ normalized bars vanish in positive degrees. [F1, step 4.1, step 2.2, algebra] ∎
