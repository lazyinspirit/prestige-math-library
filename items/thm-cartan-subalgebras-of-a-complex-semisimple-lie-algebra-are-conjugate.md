---
id: thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate
kind: theorem
title: Conjugacy of Cartan subalgebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra, def-derivation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra, thm-additive-jordan-chevalley-decomposition, thm-engels-theorem, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion, cor-semisimple-lie-algebras-are-centerless-and-perfect, thm-lie-third-fundamental-theorem, thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup, def-conjugation-and-the-adjoint-representation-of-a-lie-group, def-smooth-left-action-of-a-lie-group, def-orbit-stabilizer-and-orbit-map-of-a-smooth-action, def-immersion-submersion-and-constant-rank-map, cor-local-normal-form-for-submersions, cor-every-submersion-is-an-open-map, def-countable-choice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §3; Theorem 2.15"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20, Theorem 20.10"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Any two Cartan subalgebras
([[def-cartan-subalgebra-of-a-lie-algebra]]) of a finite-dimensional complex
semisimple Lie algebra are carried to one another by an inner automorphism in
the connected adjoint group, that is, by an element of the image of the adjoint
map of a connected Lie group with Lie algebra $\mathfrak g$. In particular all
Cartan subalgebras have the same dimension.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, and two Cartan subalgebras $\mathfrak h_1,\mathfrak h_2$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; a countable family of nonempty sets is a family of nonempty sets, so AC supplies the countable-choice hypothesis of [L6] and [L7], whose statement is [[def-countable-choice]].

[L1] In $\mathfrak g$ the Cartan subalgebras are exactly the maximal toral subalgebras; hence a Cartan subalgebra $\mathfrak h$ is abelian with every $\operatorname{ad}_h$ semisimple, satisfies $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$, and therefore $C_{\mathfrak g}(\mathfrak h)=\mathfrak h$ ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]], [[def-toral-and-maximal-toral-subalgebra]]).

[L2] Every element $x$ has an abstract Jordan decomposition $x=x_s+x_n$, and $\operatorname{ad}_{x_s}$ is the additive Jordan–Chevalley part of $\operatorname{ad}_x$; by the operator theorem these parts are polynomials in $\operatorname{ad}_x$ with zero constant term ([[thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra]], [[thm-additive-jordan-chevalley-decomposition]]).

[L3] A pairwise commuting family of semisimple endomorphisms is simultaneously diagonalisable, so for a Cartan subalgebra $\mathfrak h$ there is a weight decomposition $\mathfrak g=\bigoplus_{\lambda\in\mathfrak h^*}\mathfrak g_\lambda$ with $\mathfrak g_0=C_{\mathfrak g}(\mathfrak h)=\mathfrak h$ ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]) by [L1].

[L4] The Killing form $B$ is symmetric, invariant, and nondegenerate, and $\mathfrak g$ is centerless with $\operatorname{ad}_{[u,v]}=[\operatorname{ad}_u,\operatorname{ad}_v]$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]], [[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

[L5] A finite-dimensional Lie algebra on which every adjoint operator is nilpotent is nilpotent ([[thm-engels-theorem]]), and $\operatorname{ad}_x(y)=[x,y]$ ([[def-derivation-of-a-lie-algebra]]).

[L6] Under countable choice there is a connected simply connected real Lie group $G$ with Lie algebra $\mathfrak g$, viewed as a real Lie algebra ([[thm-lie-third-fundamental-theorem]], [[def-countable-choice]]).

[L7] Under countable choice the image of a smooth Lie-group homomorphism is an immersed Lie subgroup with Lie algebra the image of its differential ([[thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup]], [[def-countable-choice]]); for $G$ from [L6] the adjoint map $\operatorname{Ad}:G\to\operatorname{GL}(\mathfrak g)$ is a smooth homomorphism whose values are Lie-algebra automorphisms of $\mathfrak g$ ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]).

[L8] The action of a Lie group on a manifold is smooth, its orbit maps are smooth, and a smooth map that is a submersion at a point carries neighbourhoods of that point onto neighbourhoods of its image ([[def-smooth-left-action-of-a-lie-group]], [[def-orbit-stabilizer-and-orbit-map-of-a-smooth-action]], [[def-immersion-submersion-and-constant-rank-map]], [[cor-local-normal-form-for-submersions]], [[cor-every-submersion-is-an-open-map]]).

## Proof

**Proof technique:** orbit openness on the strongly regular locus.

1.1 For $x\in\mathfrak g$ let $n(x)$ be the multiplicity of $0$ as an eigenvalue of $\operatorname{ad}_x$, i.e. the dimension of its generalized kernel, and let $\rho=\min_{x\in\mathfrak g}n(x)$. Writing $\det(t\cdot1-\operatorname{ad}_x)=\sum_jd_j(x)t^j$, the coefficients $d_j$ are polynomial functions of $x$ and $n(x)=\min\{j:d_j(x)\ne0\}$, so $\rho=\min\{j:d_j\not\equiv0\}$ and the strongly regular locus $\mathfrak g^{\mathrm{sr}}=\{x:n(x)=\rho\}$ equals $\{x:d_\rho(x)\ne0\}$, the complement of the zero set of the nonzero polynomial $d_\rho$. [L4, algebra]

1.2 Let $\mathfrak h$ be a Cartan subalgebra. By [L3] there are finitely many nonzero weights $\lambda$ with $\mathfrak g_\lambda\ne0$ and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\lambda\ne0}\mathfrak g_\lambda$, and for $y\in\mathfrak h$ one has $\ker(\operatorname{ad}_y)=\mathfrak h\oplus\bigoplus_{\lambda\ne0,\lambda(y)=0}\mathfrak g_\lambda$. Hence the set $\mathfrak h_{\mathrm{reg}}=\{y\in\mathfrak h:\ker(\operatorname{ad}_y)=\mathfrak h\}$ is the complement in $\mathfrak h$ of the finitely many proper subspaces $\ker(\lambda|_{\mathfrak h})$, which cannot exhaust $\mathfrak h$: a line through a point of $\mathfrak h$ and a point outside a given proper subspace meets that subspace in at most one point, so finitely many such subspaces miss some point of the line. Thus $\mathfrak h_{\mathrm{reg}}\ne\emptyset$. [L1, L3, algebra]

1.3 Define $x\sim y$ on $\mathfrak g^{\mathrm{sr}}$ when some $a\in\operatorname{Ad}(G)$ satisfies $a\bigl(C_{\mathfrak g}(x)\bigr)=C_{\mathfrak g}(y)$. This is an equivalence relation because $\operatorname{Ad}(G)$ is a group: reflexivity uses $a=1$, symmetry uses $a^{-1}$, and transitivity uses the product of the two group elements. [L7, algebra]

2.1 The complement of the zero set of a nonzero complex polynomial $P$ on a finite-dimensional complex vector space $V$ is path-connected and dense: density holds because a polynomial vanishing on a nonempty open set vanishes identically, and for $P(x)\ne0\ne P(y)$ the one-variable polynomial $t\mapsto P(x+t(y-x))$ has finitely many zeros, so the line through $x$ and $y$ with finitely many points removed is path-connected and avoids the zero set of $P$. Applying this to $V=\mathfrak g$ and $P=d_\rho$, the locus $\mathfrak g^{\mathrm{sr}}$ of step 1.1 is nonempty, dense and path-connected, hence connected. [step 1.1, algebra]

2.2 For $y\in\mathfrak h_{\mathrm{reg}}$ the orbit $\operatorname{Ad}(G)y$ has $\mathfrak g$ as the direct sum $\ker(\operatorname{ad}_y)\oplus\operatorname{im}(\operatorname{ad}_y)=\mathfrak h\oplus[\mathfrak g,y]$, because $\operatorname{ad}_y$ is semisimple. Consider the smooth map $\sigma:G\times\mathfrak h_{\mathrm{reg}}\to\mathfrak g$, $\sigma(a,z)=\operatorname{Ad}(a)z$, for the group $G$ and its immersed image $\operatorname{Ad}(G)$ of [L6], [L7]. Its differential at $(1,y)$ is $(D,v)\mapsto D(y)+v$ for $D$ in the Lie algebra $\operatorname{ad}(\mathfrak g)$ of $\operatorname{Ad}(G)$, because the action is the restriction of the bilinear evaluation map of linear maps; its image is $[\mathfrak g,y]+\mathfrak h=\mathfrak g$. Hence by [L8] the image of $\sigma$ contains a neighbourhood of $y$, and by [L7] it equals the set $U_{\mathfrak h}:=\operatorname{Ad}(G)\cdot\mathfrak h_{\mathrm{reg}}$, which is therefore open in $\mathfrak g$ and nonempty. [L7, L8, step 1.2, algebra]

3.1 Every element of $U_{\mathfrak h}$ is semisimple, and has $n$-value $\dim\mathfrak h$: automorphisms preserve the adjoint action, so $\operatorname{ad}_{\operatorname{Ad}(a)z}=\operatorname{Ad}(a)\operatorname{ad}_z\operatorname{Ad}(a)^{-1}$ has the same generalized nullity as $\operatorname{ad}_z$, and $n(z)=\dim\ker(\operatorname{ad}_z)=\dim\mathfrak h$ for $z\in\mathfrak h_{\mathrm{reg}}$ by step 1.2; semisimplicity is preserved because the operator is conjugate to a semisimple one. Since $U_{\mathfrak h}$ is nonempty open and $\mathfrak g^{\mathrm{sr}}$ is dense by step 2.1, $U_{\mathfrak h}$ meets $\mathfrak g^{\mathrm{sr}}$; at such a point $n=\rho$, so $\rho=\dim\mathfrak h$. Consequently $U_{\mathfrak h}\subseteq\mathfrak g^{\mathrm{sr}}$, and this holds for every Cartan subalgebra. [L7, step 2.1, step 2.2, algebra]

4.1 Let $x\in\mathfrak g^{\mathrm{sr}}$ and write $x=x_s+x_n$ as in [L2]. Because $\operatorname{ad}_{x_s}=(\operatorname{ad}_x)\circ q(\operatorname{ad}_x)$ for a polynomial $q$, every generalized kernel vector of $\operatorname{ad}_x$ is a generalized kernel vector of $\operatorname{ad}_{x_s}$; hence $n(x_s)\ge n(x)=\rho$, and minimality gives $n(x_s)=\rho$, that is, $x_s\in\mathfrak g^{\mathrm{sr}}$. Being semisimple, $x_s$ lies in a Cartan subalgebra $\mathfrak h$ by [L1] and step 1.2, so $C_{\mathfrak g}(x_s)$ has dimension $n(x_s)=\rho=\dim\mathfrak h$. [L2, L3, step 3.1, algebra]

5.1 The centralizer $\mathfrak l=C_{\mathfrak g}(x_s)$ of step 4.1 is a Cartan subalgebra. Since $\operatorname{ad}_{x_s}$ is invertible on $\mathfrak g/\mathfrak l$, openness of invertibility gives $t\ne0$ arbitrarily small for which $\operatorname{ad}_{x_s+t y}$ is invertible on $\mathfrak g/\mathfrak l$ for every fixed $y\in\mathfrak l$; its generalized kernel is therefore contained in $\mathfrak l$, has dimension at least $\rho$ by minimality of $\rho$, and equals $\mathfrak l$ because $\dim\mathfrak l=\rho$. Hence $\operatorname{ad}_{x_s+t y}|_{\mathfrak l}=t\operatorname{ad}_y|_{\mathfrak l}$ is nilpotent, so by [L5] every $\operatorname{ad}_y|_{\mathfrak l}$ is nilpotent and $\mathfrak l$ is nilpotent. Moreover $N_{\mathfrak g}(\mathfrak l)=\mathfrak l$: for $X\in N_{\mathfrak g}(\mathfrak l)$ one has $[x_s,X]\in\mathfrak l$, so $\operatorname{ad}_{x_s}^2X=0$; expanding $X=\sum_\lambda X_\lambda$ in the weight spaces of [L3] for a Cartan containing $x_s$ gives $\lambda(x_s)^2X_\lambda=0$ for all $\lambda$, so $X$ lies in $\bigoplus_{\lambda(x_s)=0}\mathfrak g_\lambda=C_{\mathfrak g}(x_s)=\mathfrak l$. By [L1] and the definitions, a nilpotent subalgebra equal to its normalizer is a Cartan subalgebra. [L1, L3, L4, L5, step 4.1, algebra]

6.1 Every $x\in\mathfrak g^{\mathrm{sr}}$ is semisimple and $C_{\mathfrak g}(x)$ is a Cartan subalgebra: by step 5.1 applied to $x_s$ we get that $\mathfrak l=C_{\mathfrak g}(x_s)$ is a Cartan subalgebra, and by [L1] it is maximal toral, hence consists of semisimple elements; since $[x,x_s]=0$, we have $x\in\mathfrak l$, so $x$ is semisimple. Applying step 5.1 verbatim with $x$ in place of $x_s$ shows that $C_{\mathfrak g}(x)$ is a Cartan subalgebra (and $C_{\mathfrak g}(x)=\ker(\operatorname{ad}_x)$ because $x$ is semisimple). [L1, step 5.1, algebra]

7.1 Each class of the relation of step 1.3 is open in $\mathfrak g^{\mathrm{sr}}$. Let $x\in\mathfrak g^{\mathrm{sr}}$ and put $\mathfrak h_x=C_{\mathfrak g}(x)$. By step 6.1 the subalgebra $\mathfrak h_x$ is a Cartan subalgebra and $x$ is semisimple, so $\ker(\operatorname{ad}_x)=\mathfrak h_x$; hence $x$ is a regular element of $\mathfrak h_x$ in the sense of step 1.2, and $\mathfrak h_x$ satisfies the hypotheses of step 2.2. Therefore $U_{\mathfrak h_x}:=\operatorname{Ad}(G)\cdot(\mathfrak h_x)_{\mathrm{reg}}$ is open in $\mathfrak g$ by step 2.2. Moreover $U_{\mathfrak h_x}$ is exactly the class of $x$: every $\operatorname{Ad}(a)z$ with $z\in(\mathfrak h_x)_{\mathrm{reg}}$ has centralizer $\operatorname{Ad}(a)C_{\mathfrak g}(z)=\operatorname{Ad}(a)\mathfrak h_x$, which is conjugate to $\mathfrak h_x=C_{\mathfrak g}(x)$; conversely if $x'\in\mathfrak g^{\mathrm{sr}}$ has $C_{\mathfrak g}(x')=\operatorname{Ad}(a)\mathfrak h_x$, then $z:=\operatorname{Ad}(a^{-1})x'$ has centralizer $\mathfrak h_x$, so $z\in(\mathfrak h_x)_{\mathrm{reg}}$ and $x'=\operatorname{Ad}(a)z\in U_{\mathfrak h_x}$. As classes of an equivalence relation are pairwise disjoint and $\mathfrak g^{\mathrm{sr}}\ne\emptyset$ by step 2.1, every class is a nonempty open subset of $\mathfrak g^{\mathrm{sr}}$. [L7, step 1.2, step 2.1, step 2.2, step 6.1, algebra]

8.1 The classes of step 1.3 are pairwise disjoint nonempty open subsets of the connected set $\mathfrak g^{\mathrm{sr}}$ of step 2.1, so there is exactly one class by step 7.1. Hence $C_{\mathfrak g}(x_1)$ and $C_{\mathfrak g}(x_2)$ are conjugate for all $x_1,x_2\in\mathfrak g^{\mathrm{sr}}$; by step 6.1 they are Cartan subalgebras, and every Cartan subalgebra $\mathfrak h$ arises in this way, since for $y\in\mathfrak h_{\mathrm{reg}}$ (nonempty by step 1.2) step 3.1 gives $n(y)=\dim\mathfrak h=\rho$, so $y\in\mathfrak g^{\mathrm{sr}}$ and $C_{\mathfrak g}(y)=\ker(\operatorname{ad}_y)=\mathfrak h$. Therefore $\mathfrak h_1$ and $\mathfrak h_2$ are conjugate by an element of $\operatorname{Ad}(G)$, an inner automorphism in the connected adjoint group, and conjugate subalgebras have the same dimension. If $\mathfrak g=0$ both Cartan subalgebras are zero and the identity conjugates them. The Axiom of Choice enters only through [L2] and, via [A1], through the countable-choice supplies [L6] and [L7]. [A1, L2, L6, L7, step 2.1, step 3.1, step 6.1, step 1.3, step 7.1] ∎
