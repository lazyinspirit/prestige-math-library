---
id: lem-nilpotent-group-structure-and-maximal-torus-criterion
kind: lemma
title: Structure of connected nilpotent groups and the maximal-torus criterion
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps: [def-axiom-of-choice, def-unipotent-algebraic-group, thm-unipotent-group-triangular-criterion, lem-upper-unitriangular-central-series, lem-unipotent-and-diagonalizable-intersection-is-trivial, def-group-of-multiplicative-type-and-torus, thm-lie-kolchin-for-smooth-connected-solvable-groups, def-trigonalizable-algebraic-group, thm-nonaffine-affine-normal-group-quotient-affine]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 16 (16.13), (16.43)-(16.48), printed pp. 341-342; Ch. 17 (17.82)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S5.3, Propositions 125-127, pp. 53-58"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. (a) Let $G$ be a connected nilpotent affine algebraic group over $k$; then $Z(G)_s$, the largest subgroup of the centre of multiplicative type, is the largest algebraic subgroup of $G$ of multiplicative type ([[def-group-of-multiplicative-type-and-torus]]), it is central and characteristic, and $G/Z(G)_s$ is unipotent ([[def-unipotent-algebraic-group]]); if $G$ is smooth then $Z(G)_s$ is a torus, and over a perfect field the smooth connected nilpotent groups are exactly the products $U\times T$ with $U$ smooth connected unipotent and $T$ a torus. (b) For a smooth connected affine group variety $G$ and a torus $S\subseteq G$, the torus $S$ is maximal among the tori of $G$ if and only if $C_G(S)/S$ contains no nontrivial torus.

## Facts & Assumptions

**Given:** AC, a connected nilpotent affine algebraic group $G$ over $k$, and for (b) a smooth connected affine group $G$ with a torus $S\subseteq G$.

[F1] Subgroups, quotients and extensions of unipotent groups are unipotent. A subgroup of multiplicative type in a unipotent group is trivial, also after field extension. Unipotent groups admit faithful upper-unitriangular representations and hence finite normal series whose quotients embed into $\mathbf G_a$. ([[def-unipotent-algebraic-group]], [[thm-unipotent-group-triangular-criterion]], [[lem-upper-unitriangular-central-series]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]], [[def-group-of-multiplicative-type-and-torus]])

[F2] For a commutative affine algebraic group $H$, the largest subgroup $H_s$ of multiplicative type exists, its formation commutes with field extension, and $H/H_s$ is unipotent. Over a perfect field $H$ is the product of its unipotent and multiplicative-type factors. These are the commutative decomposition statements of Milne 16.13, proved there by the characteristic factors in a trigonalizable embedding and descent; they apply to nonsmooth groups.

[F3] Multiplicative-type rigidity: an action of a connected algebraic group on a multiplicative-type group by group homomorphisms is trivial. If $H'\subseteq H$ are normal subgroups of a connected group $K$, with $H'$ central in $H$ and both $H'$ and $H/H'$ of multiplicative type, the action of $K$ on $H$ is trivial: it is trivial on these two factors, and $h^{-1}(g\cdot h)$ descends to a family of homomorphisms $H/H'\to H'$, which rigidity makes constant in $g$ and therefore trivial. Consequently $H$ is central and commutative, and is of multiplicative type, since commutative extensions of multiplicative-type groups are of multiplicative type. (Milne 12.36–12.42 and 16.43.)

[F4] A smooth connected solvable group becomes trigonalizable over a separable extension of a perfect field. For a group which becomes trigonalizable over a separable extension, its largest normal unipotent subgroup $G_u$ is defined over the ground field and $G/G_u$ is of multiplicative type. Uniqueness of $G_u$ gives its Galois descent. ([[thm-lie-kolchin-for-smooth-connected-solvable-groups]], [[def-trigonalizable-algebraic-group]]; Milne 16.6.)

[F5] A quotient by a closed normal subgroup scheme of an affine algebraic group is affine and represents the fppf quotient. Every affine algebraic-group homomorphism factors through its closed scheme-theoretic image by a faithfully flat morphism; a trivial kernel makes it a closed immersion (Milne3.34–3.35, whose Hopf-algebra proof uses faithful flatness of an inclusion of Hopf algebras). Nilpotence means the existence of a finite central normal series; passage to the quotient by the centre lowers the nilpotence class of a noncommutative nilpotent group (Milne6.34). ([[thm-nonaffine-affine-normal-group-quotient-affine]])

## Proof

**Given:** AC and the affine groups in the Statement, with no smoothness imposed in (a) unless explicitly stated.

1.1 We first establish the rigidity input $\operatorname{Hom}_{R\text{-groups}}(M_R,U_R)=0$ for every $k$-algebra $R$, every multiplicative-type group $M$, and every unipotent group $U$. Faithfully flat base change splits $M$, so a homomorphism $M_R\to\mathbf G_{a,R}$ corresponds to a primitive element in $R[X(M)]$. Comparing the coefficients in $\Delta(\sum a_me_m)=\sum a_me_m\otimes e_m$ and $\sum a_me_m\otimes1+1\otimes\sum a_me_m$ forces every coefficient, including $a_0$, to vanish. For a general $U$, choose a minimal closed $k$-subgroup $H\subseteq U$ through which a proposed morphism factors; such a minimal subgroup exists by the descending chain condition on closed subschemes of $U$. If $H\ne1$, the first nontrivial coordinate in an upper-unitriangular normal series gives a nonzero homomorphism $\beta:H\to\mathbf G_a$ with proper kernel. The composite $\beta_Rf$ is zero by the primitive-element calculation, so $f$ factors through this proper kernel, contradicting minimality. Thus $f=0$. This argument includes arbitrary nonreduced $R$. [F1, algebra, choose]

1.2 Put $S=Z(G)_s$ as supplied by [F2]. It is characteristic in $Z(G)$, hence normal in $G$, and central. Let $N$ be the inverse image in $G$ of $Z(G/S)_s$. The two normal subgroups $S\subseteq N$ have $S$ central and both $S$ and $N/S$ of multiplicative type. By [F3], $N$ is central and of multiplicative type. Maximality in $Z(G)$ then gives $N=S$, so $Z(G/S)_s=1$. By [F2] the centre of $G/S$ is unipotent. [F2, F3, F5]. [F2, F3, F5]

2.1 A nilpotent affine group with unipotent centre is unipotent, as we now prove by induction on its finite nilpotence class. In the commutative case it is its own centre. Otherwise write $Z=Z(G)$ and $Q=G/Z$, and let $N$ be the inverse image of $M=Z(Q)_s$. For every $R$ and $g\in G(R)$, the commutator $n\mapsto[g,n]$ has values in the central group $Z_R$, since $N/Z$ is central in $Q$. It is a group homomorphism, is trivial on $Z_R$, and therefore descends to a homomorphism $M_R\to Z_R$. Step 1.1 makes it zero. Thus $N$ is central in $G$, so $N\subseteq Z$ and $M=1$. By [F2] the centre of $Q$ is unipotent; its nilpotence class is smaller, so induction makes $Q$ unipotent. As $Z$ is unipotent, the extension $G$ is unipotent by [F1]. Applying this conclusion to $G/S$ from step 1.2 proves that $G/S$ is unipotent. The induction is on class, so it also covers finite and infinitesimal groups whose centres need not lower dimension. [F1, F2, F5, step 1.1, step 1.2]. [F2, F1, F5, step 1.1, step 1.2]

3.1 Every multiplicative-type subgroup $M\subseteq G$ maps trivially to the unipotent group $G/S$ by step 1.1, and therefore lies in $S$. This proves the asserted largest-subgroup property. It also proves characteristicity as a group-scheme property: for any $R$ and any group automorphism of $G_R$, its composite $S_R\to(G/S)_R$ is zero by step 1.1; the inverse automorphism supplies the reverse inclusion. Thus $S$ is preserved over every base algebra. [step 1.1, step 2.1]. [step 1.1, step 2.1]

4.1 Suppose $G$ becomes trigonalizable over a separable extension. By [F4] there is a normal unipotent subgroup $U=G_u$ with $G/U$ of multiplicative type. Since $S\cap U=1$, normality implies that $S$ and $U$ commute. The product map $S\times U\to G$ is a homomorphism with trivial kernel; its image is normal, and its quotient is both a quotient of the unipotent group $G/S$ and a quotient of the multiplicative-type group $G/U$. This quotient is trivial by step 1.1. Hence the product map is an isomorphism. For smooth connected $G$ over a perfect field, [F4] applies, and the two product factors are smooth and connected, so $S$ is a torus. [F1, F4, F5, step 2.1, step 3.1]. [F4, F1, F5, step 2.1, step 3.1]

5.1 For smooth $G$ over arbitrary $k$, pass to an algebraic closure. The formation of the centre commutes with field extension, as does its multiplicative-type factor by [F2]. Step 4.1 over this perfect field shows that $S_{k^{\mathrm a}}$ is a torus. Thus $S$ is a torus over $k$. Over a perfect field step 4.1 gives the stated decomposition $G=U\times T$ with $U$ smooth connected unipotent and $T$ a torus. Conversely, when $U$ is smooth and connected, such a product is smooth connected nilpotent: a central normal series for $U$, obtained from its upper-unitriangular representation, together with the central factor $T$ gives a central series for the product. [F1, F2, step 4.1]. [F2, F1, step 4.1]

6.1 If a torus $T$ properly contains $S$, its commutativity gives $T\subseteq C_G(S)$ and its nontrivial torus quotient $T/S\subseteq C_G(S)/S$. Conversely let a nontrivial torus $D$ lie in this quotient and let $P$ be its inverse image. The exact sequence $1\to S\to P\to D\to1$ has smooth connected kernel and quotient, so $P$ is smooth and connected. The subgroup $S$ is central in $P$, since $P\subseteq C_G(S)$; apply [F3] to the action of connected $P$ on itself to see that $P$ is commutative and of multiplicative type. Smoothness and connectedness then make $P$ a torus. Since $D\ne1$, it properly contains $S$, proving both directions of (b). No commutativity of the whole centralizer is required. [F3, F5, algebra] ∎

