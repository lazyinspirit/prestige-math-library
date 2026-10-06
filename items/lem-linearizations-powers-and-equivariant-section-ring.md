---
id: lem-linearizations-powers-and-equivariant-section-ring
kind: lemma
title: Linearizations of tensor powers and the equivariant section ring
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
justified_by: []
aliases: []
deps: [thm-global-regular-functions-projective-variety, def-axiom-of-choice, def-g-linearization-of-an-invertible-sheaf, def-rational-action-on-affine-variety, def-invertible-sheaf, lem-invertible-sheaf-dual-tensor-inverse, def-quasi-coherent-module-scheme, lem-section-nonvanishing-affine-intersection, lem-classical-affine-algebraic-set-product-coordinate-ring, def-classical-algebraic-prevariety-regular-maps-and-varieties]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Lemma 1.34 and the preceding definitions, printed p. 12 (PDF p. 13)"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Lemma 5.19 with proof, Remark 5.20"
---

## Statement

For the projective constant-function conclusions in (ii) and (iii), assume AC inherited from [[thm-global-regular-functions-projective-variety]]; the remaining conclusions use no choice principle. Let $L$ be a $G$-linearized invertible sheaf on a classical complex $G$-variety $X$ ([[def-g-linearization-of-an-invertible-sheaf]]). Then:

(i) for every $n\ge0$ the tensor power $L^{\otimes n}$ (with $L^{\otimes0}=\mathcal O_X$) carries an induced $G$-linearization, functorial in $L$, and the canonical multiplication isomorphisms $L^{\otimes r}\otimes L^{\otimes s}\to L^{\otimes(r+s)}$ are $G$-equivariant;

(ii) each space of global sections $\Gamma(X,L^{\otimes n})$ carries the linear action $(g\cdot\sigma)(x)=g\,\sigma(g^{-1}x)$, is a rational $G$-module ([[def-rational-action-on-affine-variety]]), and restriction to a $G$-stable open subset is $G$-equivariant; the constant functions in $\Gamma(X,\mathcal O_X)$ are fixed by $G$, and if $X$ is projective and irreducible then $\Gamma(X,\mathcal O_X)=\mathbb C$;

(iii) the direct sum $R(X,L)=\bigoplus_{n\ge0}\Gamma(X,L^{\otimes n})$ is a graded commutative $\mathbb C$-algebra with $G$ acting by graded algebra automorphisms, so that $R(X,L)$ is a graded rational $G$-algebra with degree-zero part $\Gamma(X,\mathcal O_X)$; if $X$ is projective and irreducible this part is $\mathbb C$;

(iv) for global sections $\sigma\in\Gamma(X,L^{\otimes r})$ and $\tau\in\Gamma(X,L^{\otimes s})$ one has $X_{\sigma\otimes\tau}=X_\sigma\cap X_\tau$, and for a $G$-invariant section $\sigma$ and every $k\ge1$ one has $X_{\sigma^{\otimes k}}=X_\sigma$, where $\sigma^{\otimes k}\in\Gamma(X,L^{\otimes kr})$.

## Facts & Assumptions

**Given:** A complex affine algebraic group $G$, a classical complex $G$-variety $X$ (a quasi-compact prevariety over $\mathbb C$ with an algebraic action), an invertible sheaf $L$ on $X$ with a $G$-linearization $m:G\times L\to L$.

[F1] *Linearization.* The action $m$ covers the action map $\sigma:G\times X\to X$, is $\mathbb C$-linear on fibres, and is equivalently encoded by an isomorphism $\varphi:\sigma^*L\to\mathrm{pr}_2^*L$ over $G\times X$ whose pullbacks satisfy the cocycle identity; for $g\in G$ the assignment $\ell\mapsto g\ell$ is an isomorphism $L_x\to L_{gx}$ of lines. ([[def-g-linearization-of-an-invertible-sheaf]])

[F2] *Rational modules.* A rational $G$-module is a complex vector space with a linear left action in which every vector lies in a finite-dimensional $G$-stable subspace $W$ on which $G\to GL(W)$ is a morphism of varieties. A map from a variety into a finite-dimensional vector space is a morphism exactly when its compositions with a spanning set of linear functionals are regular. ([[def-rational-action-on-affine-variety]])

[F3] *Tensor powers of invertible sheaves.* For invertible $L$ each $L^{\otimes n}$ is invertible, $\mathcal O_X\otimes L\cong L$, and there are canonical multiplication isomorphisms $L^{\otimes r}\otimes L^{\otimes s}\to L^{\otimes(r+s)}$ compatible with restriction; these are used to define the graded algebra $R(X,L)$. ([[lem-invertible-sheaf-dual-tensor-inverse]], [[def-quasi-coherent-module-scheme]])

[F4] *Nonvanishing loci.* For global sections $s,t$ of invertible sheaves one has $X_s\cap X_t=X_{s\otimes t}$, and for an affine open $U$ the set $U\cap X_s$ is affine; a nonzero section of a line bundle has nonempty nonvanishing locus. ([[lem-section-nonvanishing-affine-intersection]])

[F5] *Affine products.* For affine algebraic sets $Y,Z$ the coordinate ring of $Y\times Z$ is $\mathbb C[Y]\otimes_{\mathbb C}\mathbb C[Z]$, so every regular function on a product of affine models is a finite sum of products of regular functions of the factors. ([[lem-classical-affine-algebraic-set-product-coordinate-ring]])

[F6] *Quasi-compactness.* A classical algebraic prevariety is quasi-compact with a finite affine cover, and affine models form a basis of its topology; hence any open cover can be refined to a finite affine cover, and a section of the structure sheaf that restricts to $0$ on such a cover is $0$. ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]])

[F7] *Projective functions.* Under AC, every global regular function on a nonempty irreducible classical projective variety is constant. ([[thm-global-regular-functions-projective-variety]], [[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 *Tensor powers.* By [F1] the linearization is an isomorphism $\varphi:\sigma^*L\to\mathrm{pr}_2^*L$ whose two pullbacks to $G\times G\times X$ satisfy the cocycle identity. Taking $n$-th tensor powers and using [F3] gives an isomorphism $\varphi^{\otimes n}:\sigma^*(L^{\otimes n})\to\mathrm{pr}_2^*(L^{\otimes n})$ satisfying the same cocycle identity, and the corresponding fibre maps are $\mathbb C$-linear isomorphisms of lines; hence $L^{\otimes n}$ carries an induced $G$-linearization $m^{\otimes n}$, and a $G$-equivariant isomorphism $L\to L'$ of linearized invertible sheaves induces $G$-equivariant isomorphisms $L^{\otimes n}\to L'^{\otimes n}$, which is functoriality. The canonical multiplication $L^{\otimes r}\otimes L^{\otimes s}\to L^{\otimes(r+s)}$ is the associativity identification of the same tensor power constructed in two ways, so it intertwines $m^{\otimes r}\otimes m^{\otimes s}$ with $m^{\otimes(r+s)}$: on a fibre at $x$ both sides send $(g\ell_1,g\ell_2)$ to $g(\ell_1\ell_2)$. [F1, F3]

1.2 *The action on sections.* For $\sigma\in\Gamma(X,L^{\otimes n})$ define $(g\cdot\sigma)(x):=m^{\otimes n}(g,\sigma(g^{-1}x))$, an element of $(L^{\otimes n})_{g\,g^{-1}x}=(L^{\otimes n})_x$. The assignment $(g,x)\mapsto(g\cdot\sigma)(x)$ is the composition of the morphisms $(g,x)\mapsto(g,g^{-1}x)$, $\mathrm{id}\times\sigma$, and $m^{\otimes n}$, so it is a regular section of $\mathrm{pr}_2^*(L^{\otimes n})$ over $G\times X$; in particular $g\cdot\sigma$ is a global section for each $g$. The action is linear in $\sigma$, satisfies $e\cdot\sigma=\sigma$, and $g\cdot(h\cdot\sigma)=(gh)\cdot\sigma$ by the group law of the action on the total space; restricting to a $G$-stable open subset $U\subseteq X$ commutes with the formula, so the restriction map is $G$-equivariant. [F1, F5, algebra]

1.3 *Finite dimensionality of orbits.* Fix $\sigma\in\Gamma(X,L^{\otimes n})$ and choose, using [F6], a finite affine cover $X=U_1\cup\dots\cup U_\ell$ such that $L^{\otimes n}|_{U_j}$ is trivial, with trivializations $\tau_j$. On the affine product $G\times U_j$ the section $(g,x)\mapsto g\cdot\sigma(g^{-1}x)$ corresponds under $\tau_j$ to a regular function, hence by [F5] to a finite sum $\sum_{r}h_{j,r}(g)\varphi_{j,r}(x)$ with $h_{j,r}\in\mathbb C[G]$ and $\varphi_{j,r}\in\mathcal O(U_j)$; write $s_{j,r}\in\Gamma(U_j,L^{\otimes n})$ for the local section corresponding to $\varphi_{j,r}$ and $V_j=\mathrm{span}_{\mathbb C}\{s_{j,r}\}_r$, a finite-dimensional subspace. For every $g\in G$ the restricted section $(g\cdot\sigma)|_{U_j}$ lies in $V_j$, so the orbit $G\cdot\sigma$ is contained in the subspace $W_\sigma=\{s\in\Gamma(X,L^{\otimes n}):s|_{U_j}\in V_j\text{ for all }j\}$, which is finite-dimensional because restriction $\Gamma(X,L^{\otimes n})\to\bigoplus_j\Gamma(U_j,L^{\otimes n})$ is injective by [F6]. [F4, F5, F6, choose, algebra]

1.4 *Nonvanishing loci.* For $\sigma\in\Gamma(X,L^{\otimes r})$ and $\tau\in\Gamma(X,L^{\otimes s})$ the identification $\sigma\otimes\tau\in\Gamma(X,L^{\otimes r}\otimes L^{\otimes s})$ with its image $\sigma\tau\in\Gamma(X,L^{\otimes(r+s)})$ is the canonical one, so [F4] gives $X_{\sigma\otimes\tau}=X_\sigma\cap X_\tau$. For a $G$-invariant $\sigma$ and $k\ge1$, write $\sigma^{\otimes k}$ for the $k$-fold product inside $\Gamma(X,L^{\otimes kr})$; trivializing $L$ near a point $x$, the section $\sigma$ corresponds to a regular function $f$ and $\sigma^{\otimes k}$ to $f^{k}$, so $f^{k}$ is nonzero at $x$ exactly when $f$ is; hence $X_{\sigma^{\otimes k}}=X_\sigma$. [F4, algebra]

2.1 *Rationality.* Let $V_\sigma\subseteq W_\sigma$ be the span of the orbit $G\cdot\sigma$; it is $G$-stable by step 1.2 and finite-dimensional by step 1.3. The orbit map $G\to V_\sigma$, $g\mapsto g\cdot\sigma$, is a morphism: after choosing a frame of the line fibre at $x$, each evaluation $g\mapsto(g\cdot\sigma)(x)$ is a regular scalar function by step 1.2. These scalar evaluation functionals span $V_\sigma^*$: a section annihilated by all of them is zero, since in a local frame its coefficient is a regular function on a reduced classical variety vanishing at every point. Hence for every $\sigma'\in V_\sigma$ the map $g\mapsto g\cdot\sigma'$ is a morphism, being a linear combination of orbit maps of spanning elements, and choosing a basis of $V_\sigma$ exhibits the action of $G$ on $V_\sigma$ through matrices with regular entries; thus $V_\sigma$ is a finite-dimensional rational $G$-module on which $G$ acts by an algebraic action, containing $\sigma$. As $\sigma$ was arbitrary, $\Gamma(X,L^{\otimes n})$ is a rational $G$-module. For $n=0$ the formula reads $(g\cdot f)(x)=f(g^{-1}x)$, so constant functions are fixed; if $X$ is projective and irreducible, [F7] gives $\Gamma(X,\mathcal O_X)=\mathbb C$ under its stated AC assumption. [F2, F4, F7, step 1.2, step 1.3]

3.1 *Graded algebra.* Define the product of homogeneous elements $\sigma\in\Gamma(X,L^{\otimes r})$, $\tau\in\Gamma(X,L^{\otimes s})$ by $\sigma\tau\in\Gamma(X,L^{\otimes(r+s)})$ obtained from $\sigma\otimes\tau$ under the canonical isomorphism of [F3], extended bilinearly. This makes $R(X,L)$ a commutative graded $\mathbb C$-algebra with unit $1\in\Gamma(X,\mathcal O_X)$ and degree-zero part $\Gamma(X,\mathcal O_X)$, because the multiplication maps are the canonical associativity isomorphisms of tensor powers and are $\mathbb C$-bilinear and compatible with restriction. By step 1.1 the multiplication is $G$-equivariant, so each $g$ acts by a graded algebra automorphism, and each graded piece is a rational $G$-module by step 2.1: $R(X,L)$ is a graded rational $G$-algebra. If $X$ is projective and irreducible the degree-zero part is $\mathbb C$ by step 2.1. [F3, step 1.1, step 2.1]

4.1 Finally (i)-(iv) have been established: (i) in step 1.1, (ii) in steps 1.2, 1.3 and 2.1, (iii) in step 3.1, and (iv) in step 1.4. In particular every space of sections of a tensor power of a linearized invertible sheaf is a rational $G$-module and $R(X,L)$ is a graded rational $G$-algebra, as asserted. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 3.1] ∎

## Remarks

- **Correction at degree zero.** The scaffold wrote $\Gamma(X,\mathcal O_X)=\mathbb C$; this holds for projective irreducible $X$ (as used on this page) but fails for affine $X$, where $\Gamma(X,\mathcal O_X)=\mathcal O(X)$ is the whole coordinate ring. The statement above records the constants and the projective case separately.
- **Restriction to projective $X$ used downstream.** Every consumer of this item on the page works with a projective variety $X$, where also the degree-zero part of the section ring is $\mathbb C$.
