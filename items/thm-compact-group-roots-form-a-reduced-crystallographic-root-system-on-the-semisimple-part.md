---
id: thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part
kind: theorem
title: Compact roots form a reduced crystallographic root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-roots-of-a-compact-connected-lie-group, def-axiom-of-choice, prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, prop-adjoint-is-a-smooth-lie-group-representation, thm-the-differential-of-adjoint-is-ad, thm-equivalent-characterizations-of-reductive-lie-algebras, cor-semisimple-lie-algebras-are-centerless-and-perfect, thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, prop-exponential-map-is-natural-for-lie-group-homomorphisms, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, prop-exponential-scales-one-parameter-subgroups, thm-cartans-closed-subgroup-theorem, thm-closure-of-a-connected-set, thm-closed-subspace-of-a-compact-space-is-compact, def-torus-and-maximal-torus-in-a-compact-lie-group, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, def-cartan-subalgebra-of-a-lie-algebra, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, def-coroot-of-a-lie-algebra-root]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6, Φ(g,t) as a reduced root system in the orthogonal complement of the central directions"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§§20–21 and Appendix R §R.2"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$ and root set $\Phi=\Phi(G,T)$
([[def-roots-of-a-compact-connected-lie-group]]). Then the roots vanish on the
central torus $Z(G)^0$ and on the centre $\mathfrak z(\mathfrak g)$ of the Lie
algebra, and their differentials, restricted to the semisimple part of
$\mathfrak t$ and taken in the dual of the real form $i\mathfrak t$, form a
reduced crystallographic root system: the root set is finite and reduced, every
root is an integral functional on the coroots, reflections in the roots
preserve the root set, and the roots span the orthogonal complement of the
central directions. On $i(\mathfrak t\cap[\mathfrak g,\mathfrak g])$ use the positive complexified Killing form of $[\mathfrak g,\mathfrak g]$ and its dual metric on roots; the central summand is orthogonal and may be given any positive inner product.

## Facts & Assumptions

**Given:** AC, $G,T,\mathfrak g,\mathfrak t$ as in the Statement; put $\mathfrak s=[\mathfrak g,\mathfrak g]$ and $\mathfrak z=Z(\mathfrak g)$.

[A1] AC is [[def-axiom-of-choice]] and supplies all countable-choice Lie interfaces below.

[L1] A compact Lie group admits a bi-invariant metric ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]). Its identity inner product is invariant under the differential of conjugation; the adjoint map is smooth and its differential is $\operatorname{ad}$ ([[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-the-differential-of-adjoint-is-ad]]).

[L2] A finite-dimensional characteristic-zero Lie algebra whose adjoint representation is completely reducible is $Z(\mathfrak g)\oplus[\mathfrak g,\mathfrak g]$ with semisimple derived algebra ([[thm-equivalent-characterizations-of-reductive-lie-algebras]]). Semisimple algebras are centerless ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]). Nondegeneracy of the Killing form is equivalent to semisimplicity ([[thm-cartans-semisimplicity-criterion]]), with $B(U,V)=\operatorname{tr}(\operatorname{ad}_U\operatorname{ad}_V)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] Commuting elements have multiplicative exponentials ([[prop-commuting-lie-algebra-elements-have-multiplicative-exponentials]]). Exponentials are natural for homomorphisms and locally invertible at zero ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]). Their one-parameter curves have the specified initial velocity ([[prop-exponential-scales-one-parameter-subgroups]]). Closed subgroups are embedded ([[thm-cartans-closed-subgroup-theorem]]); closure preserves connectedness and a closed subset of a compact space is compact ([[thm-closure-of-a-connected-set]], [[thm-closed-subspace-of-a-compact-space-is-compact]]). Tori and their maximality have the meaning of [[def-torus-and-maximal-torus-in-a-compact-lie-group]].

[L4] Commuting normal operators on a finite-dimensional complex inner product space admit a simultaneous eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]). A Cartan subalgebra means nilpotent and self-normalizing ([[def-cartan-subalgebra-of-a-lie-algebra]]).

[L5] For a complex semisimple algebra with Cartan subalgebra, roots span its dual, have one-dimensional root spaces, are reduced, are stable under root reflections and have integral Cartan numbers ([[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]]). The real span of the coroots is a real form of the Cartan algebra and its Killing form is positive definite; the roots form a reduced crystallographic Euclidean system for the dual Killing metric ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]). Its coroot is $h_\alpha=2H_\alpha/\alpha(H_\alpha)$, where $B(H_\alpha,H)=\alpha(H)$ ([[def-coroot-of-a-lie-algebra-root]]).

[L6] Roots of $(G,T)$ are the nontrivial multiplicative complex-circle characters occurring in $\mathfrak g_{\mathbb C}$. Their differentials are imaginary on $\mathfrak t$, real on $i\mathfrak t$, determine the characters, and give their infinitesimal eigenvalues; the character decomposition exists under AC ([[def-roots-of-a-compact-connected-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 Fix the invariant inner product of [L1]. Differentiation gives $\langle[X,U],V\rangle=-\langle U,[X,V]\rangle$. Thus for every ideal $I$, its orthogonal complement is again an ideal: if $U\perp I$, then $\langle[X,U],V\rangle=-\langle U,[X,V]\rangle=0$ for $V\in I$. Repeatedly splitting proper invariant subspaces in finite dimension proves complete reducibility of the adjoint module. Now, with its premise verified, [L2] gives $\mathfrak g=\mathfrak z\oplus\mathfrak s$ with $\mathfrak s$ semisimple. Also $\langle Z,[U,V]\rangle=-\langle[U,Z],V\rangle=0$ for $Z\in\mathfrak z$, so this direct sum is orthogonal. [L1, L2]

1.2 The toral algebra $\mathfrak t$ is maximal abelian. Indeed, for any abelian $\mathfrak a\supseteq\mathfrak t$, [L3] makes $A=\exp_G(\mathfrak a)$ a connected abelian subgroup. Its closure is a connected compact subgroup; continuity of division and commutators extends the subgroup and abelian identities to the closure. The closed-subgroup theorem makes it an embedded torus. It contains $T$ because naturality and local invertibility of $\exp_T$ show that $A$ contains an identity neighborhood in $T$, whose generated subgroup is open and closed in connected $T$. Its tangent algebra contains $\mathfrak a$, by differentiating the curves $\exp_G(tV)$ inside that embedded subgroup. Maximality of $T$ therefore gives $\mathfrak a=\mathfrak t$. In particular $\mathfrak z\subseteq\mathfrak t$. [L3]

2.1 Let $\mathfrak t'=\mathfrak t\cap\mathfrak s$. Steps 1.1 and 1.2 give the orthogonal splitting $\mathfrak t=\mathfrak z\oplus\mathfrak t'$; any element of $\mathfrak s$ centralizing $\mathfrak t'$ centralizes $\mathfrak t$, so lies in $\mathfrak t'$. The Killing form $B_{\mathfrak s}$ is negative definite: in a real orthonormal basis the skew-adjoint matrix $A=\operatorname{ad}_U|_{\mathfrak s}$ satisfies $\operatorname{tr}A^2=-\sum_{a,b}A_{ab}^2$, which is negative for $U\ne0$ because $\mathfrak s$ is centerless. In the same real basis the complexified Killing form is its complex-bilinear extension, hence nondegenerate. By [L2], $\mathfrak s_{\mathbb C}$ is complex semisimple. [L1, L2, step 1.1, step 1.2, algebra]

2.2 The group center is closed, since it is the intersection of the closed sets on which conjugation by each fixed element is the identity. Thus $Z(G)^0$ is a compact connected abelian Lie subgroup by [L3]. The product $Z(G)^0T$ is a subgroup because the first factor is central; it is compact and connected as a continuous image of the compact connected product, and is abelian. It is closed in Hausdorff $G$, hence an embedded torus containing $T$. Maximality forces $Z(G)^0\subseteq T$. Its conjugation action is trivial, so each root character takes value $1$ on it. Infinitesimally every root vanishes on $\mathfrak z$ by step 1.2 and the bracket formula of [L6]. [L3, L6, step 1.2]

3.1 Put $\mathfrak h=\mathfrak t'_{\mathbb C}$. The commuting skew-adjoint operators $\operatorname{ad}_H$, $H\in\mathfrak t'$, become normal operators for the Hermitian extension of the real inner product, hence simultaneously diagonalize by [L4]. Their common zero eigenspace in $\mathfrak s_{\mathbb C}$ is $\mathfrak h$, since real and imaginary parts of a commuting vector lie in $\mathfrak t'$ by step 2.1. The eigenvalue functions extend complex-linearly to $\mathfrak h$. If $U$ normalizes $\mathfrak h$, decompose it into the simultaneous eigenspaces. In $[H,U]$, each nonzero-weight component is its component of $U$ times its nonzero functional evaluated at $H$. The condition $[H,U]\in\mathfrak h$ for every $H$ forces each such component to vanish. Thus the normalizer is $\mathfrak h$. It is abelian, hence nilpotent, so is a Cartan subalgebra by [L4]. The hypotheses of [L5] have now all been established. [L4, step 2.1, algebra]

4.1 Apply [L5] to $(\mathfrak s_{\mathbb C},\mathfrak h)$. Adding the central summand gives a decomposition of $\mathfrak g_{\mathbb C}$ with zero space $\mathfrak t_{\mathbb C}$ and the nonzero root spaces of $\mathfrak s_{\mathbb C}$. The $T$-operators preserve these spaces: $T$ fixes $\mathfrak t$ and its adjoint action commutes with their infinitesimal operators. Equivalently, use the character decomposition [L6]; differentiating it and comparing with this infinitesimal decomposition shows that its nontrivial characters correspond bijectively to the Lie-algebra roots, extended by zero on $\mathfrak z_{\mathbb C}$. The correspondence is injective because differentials determine characters, and surjective because a nonzero infinitesimal root space contains a nonzero character eigenspace. [L1, L5, L6, step 1.1, step 3.1]

5.1 On $i\mathfrak t'$, the extended Killing form is positive definite by step 2.1. The roots are real-valued there by [L6]. For each root, real linear algebra therefore gives a unique $H_\alpha\in i\mathfrak t'$ with $B(H_\alpha,H)=\alpha(H)$ on $i\mathfrak t'$; complex linearity extends the equation to $\mathfrak h$, so this is the Killing-dual vector in [L5]. Its nonzero real norm shows that $h_\alpha$ also lies in $i\mathfrak t'$. By [L5] the real coroot span is a real form of $\mathfrak h$, of the same dimension as $i\mathfrak t'$, and thus equals $i\mathfrak t'$. Consequently [L5] supplies precisely the reduced crystallographic Euclidean root system on $(i\mathfrak t')^*$ for the dual of this positive Killing metric. Reflection invariance, integrality and spanning follow with no change of scale or character convention. Extend its functionals by zero on $i\mathfrak z$; since the decomposition of $i\mathfrak t$ is orthogonal, their span is the dual subspace annihilating the central directions, identified with their orthogonal complement. [L5, L6, step 2.1, step 4.1, algebra]

6.1 Steps 2.2 and 5.1 prove the claims. Here vanishing on the central torus means being the trivial character, or value zero in the additive $\mathbb R/\mathbb Z$ convention. If $\mathfrak s=0$, then $\mathfrak g=\mathfrak z=\mathfrak t$ and there are no nonzero weights; the empty root set is the rank-zero root system in the zero vector space. All zero-dimensional cases are included. AC is used as stated in [A1], not inferred from compactness alone. [A1, step 2.1, step 2.2, step 4.1, step 5.1] ∎
