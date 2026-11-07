---
id: lem-balanced-hermitian-domain-carries-analytic-torus-family
kind: lemma
title: "Balanced Hermitian domains carry analytic torus families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [lem-balanced-hermitian-period-domain-is-connected]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 4, proof of Theorem 4.8, printed pages 32–34; the analytic family is constructed explicitly below, without importing its algebraization."
verification: {}
---

## Statement

Let $H_j,h_j,\psi_j,\mathcal D_j$ be as in [[lem-balanced-hermitian-period-domain-is-connected]], with $1\le j\le r$. Put $V=\bigoplus_j(H_j)_{\mathbb R}$, $\psi=\sum_j\psi_j$, and $\mathcal D=\prod_j\mathcal D_j$. Let $\Lambda\subset V$ be a full lattice with $\psi(\Lambda,\Lambda)\subseteq\mathbb Z$. Give $\mathcal D$ the conjugate of the complex structure supplied by the cited matrix-ball coordinates.

There is a proper smooth holomorphic map of complex manifolds $\pi:\mathcal T\to\mathcal D$ with a holomorphic fibrewise group law and a zero section, whose fibre at $J=(J_j)$ is the complex torus $(V,J)/\Lambda$. On every fibre the fixed lattice form $\psi$ is an integral positive Riemann form. The local system $R^1\pi_*\mathbb Z$ is the constant local system $\Lambda^*$, and the fixed action on $V$ of the product algebra $\prod_j\mathbb C$ restricts to holomorphic endomorphisms on each fibre whenever it preserves $\Lambda$.

The base is nonempty and connected. This asserts an analytic family only: it does not assert that $\mathcal D$, $\mathcal T$, a quotient, or a connecting family is algebraic.

## Facts & Assumptions

**Given:** The Hermitian spaces and a full integral lattice as in the Statement.

[F1] Compatible complex structures are parameterized by a finite product of convex open matrix balls, with positive and negative eigenspaces of the asserted dimensions ([[lem-balanced-hermitian-period-domain-is-connected]]).

## Proof

**Proof technique:** quotient a holomorphic vector bundle by its locally uniformly discrete lattice of sections.

1.1 By [F1], choose orthogonal decompositions $H_j=H_j^+\oplus H_j^-$ and write the positive eigenspace as $P_j(Z_j)=\operatorname{graph}(Z_j)$ with $\|Z_j\|<1$. Its negative orthogonal complement is $N_j(Z_j)=\operatorname{graph}(Z_j^*)$ over $H_j^-$, because $h((u,Z_ju),(Z_j^*v,v))=u^*Z_j^*v-u^*Z_j^*v=0$. The matrices of $Z_j^*$ depend holomorphically on $\overline{Z_j}$, the coordinates of the conjugate base. [F1, given, choose, algebra]

2.1 Complexification of the underlying real space is canonically $(H_j)_{\mathbb R}\otimes_{\mathbb R}\mathbb C\simeq H_j\oplus\overline{H_j}$, with the conjugate summand carrying complex conjugation on coefficients. Since $J_j$ is $+i$ on $P_j$ and $-i$ on $N_j$, its $-i$ eigenspace in this complexification is $N_j(Z_j)\oplus\overline{P_j(Z_j)}$. By step 1.1 both graph components vary holomorphically in $\overline{Z_j}$. Their direct sum over $j$ is therefore a holomorphic subbundle $F$ of the trivial vector bundle $\mathcal D\times V_{\mathbb C}$. The quotient $\mathcal E=(\mathcal D\times V_{\mathbb C})/F$ is a holomorphic vector bundle. [given, step 1.1, construct, algebra]

3.1 A real vector $v\in V$ defines a constant holomorphic section of the trivial bundle, hence a holomorphic section of $\mathcal E$. At each $J$, the map $v\mapsto v\bmod F_J$ is a real-linear isomorphism $V\to\mathcal E_J$: the $+i$ and $-i$ eigenspaces are conjugate and complementary, so a real vector in $F_J$ is zero and the dimensions agree. It identifies $J$ with multiplication by $i$ on the quotient, since $Jv-iv$ lies in the $-i$ eigenspace. In local vector-bundle coordinates these isomorphisms depend continuously on the base and are uniformly invertible on a sufficiently small neighbourhood. Thus the images of the fixed full lattice $\Lambda$ form a locally uniformly discrete subgroup of holomorphic translations. Their action on $\mathcal E$ is free and properly discontinuous locally on the base: choose a lattice basis and a neighbourhood on which the corresponding real-linear maps have a common lower norm bound. Quotienting by these translations gives a complex manifold $\mathcal T$ and a holomorphic submersion $\pi$ locally modeled on $\mathcal E$, with the asserted torus fibres, group law and zero section. [given, step 2.1, choose, construct, algebra]

4.1 On a sufficiently small open set in the base, the quotient is also topologically a product with the fixed real torus $V/\Lambda$, via the isomorphisms of step 3.1. It follows that $R^1\pi_*\mathbb Z$ is the constant local system $\Lambda^*$, with the chosen global lattice identification. Properness follows locally on the base: a closed lattice parallelepiped $P\subset V$ is compact and surjects onto every fibre, and over a compact set $K$ the continuous image of $K\times P$ is the full inverse image of $K$. The form $\psi$ is integral on $\Lambda$ by hypothesis, alternating, preserved by $J$, and positive in the sense $\psi(x,Jx)>0$ for $x\ne0$ by [F1]; it is therefore a positive integral Riemann form on every fibre. An element of $\prod_j\mathbb C$ commutes with every $J_j$ and hence gives a holomorphic fibre endomorphism whenever it carries $\Lambda$ into itself. Connectedness and nonemptiness of the base follow from [F1]; the zero-dimensional and empty-product cases reduce to a point and the corresponding constant torus. [F1, given, step 3.1, construct, algebra] ∎

## Source-reading boundary

Only the analytic-domain part of the cited proof is reconstructed. In particular, no algebraization of the total space or quotient, no existence of an algebraic connecting base, and no relative Betti–étale comparison are asserted.
