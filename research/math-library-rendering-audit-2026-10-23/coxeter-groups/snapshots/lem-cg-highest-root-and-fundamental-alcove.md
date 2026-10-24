---
id: lem-cg-highest-root-and-fundamental-alcove
kind: lemma
title: "Highest-root dominance and the fundamental alcove"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system
  - def-height-of-a-root-and-highest-root
  - def-reducible-and-irreducible-root-system
  - prop-root-systems-decompose-uniquely-into-irreducible-components
  - def-positive-system-and-base-of-simple-roots
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - def-open-and-closed-weyl-chambers
  - def-reduced-crystallographic-euclidean-root-system
  - def-connected-component-and-quasicomponent
  - def-geometric-simplex-spanned-by-affinely-independent-vertices
  - thm-cauchy-schwarz-in-an-inner-product-space
  - prop-distinct-simple-roots-have-nonpositive-inner-product
  - prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram
  - def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention
  - def-cartan-matrix-of-a-based-root-system
  - cor-inner-product-induces-a-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Magyar, Notes on Schubert classes of a loop group (arXiv:0705.3826)"
      url: "https://arxiv.org/pdf/0705.3826"
      locator: "§1.5, PDF p. 5: in the type-A loop-group setting, the closed region given by nonnegative simple-root coordinates and the highest-root bound is stated to be a simplex and a fundamental domain. This is a type-specific comparison; it is not a proof supplier for the general result here. The present proof is local and treats every reduced crystallographic root system."
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., digital edition"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §12, Problem 8, printed p. 204: asks for the nonnegative-pairing dominance property of the largest root. It is an exercise, not a supplied proof; the proof used here is the complete published local argument in [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]] (especially steps 2.1, 3.1, and 6.1)."
verification:
  audited: "2026-10-08"
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive system $\Phi^+$, base $\Delta=\{\alpha_s:s\in S\}$, and fundamental chamber
$$C:=\{x\in E:B(x,\alpha_s)>0\text{ for every }s\in S\}$$
([[def-open-and-closed-weyl-chambers]]). Decompose $\Phi$ into its nonempty irreducible components $\Phi=\bigsqcup_{i\in I}\Phi_i$, and put $E_i:=\operatorname{span}\Phi_i$, $\Delta_i:=\Delta\cap\Phi_i$, and $\Phi_i^+:=\Phi_i\cap\Phi^+$ ([[prop-root-systems-decompose-uniquely-into-irreducible-components]]). For each $i$, let $\theta_i$ be the highest root of $(\Phi_i,\Phi_i^+,\Delta_i)$ ([[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]], [[def-height-of-a-root-and-highest-root]]).

**(1) Highest-root bounds, componentwise.** For each $i$,
$$\theta_i=\sum_{s\in S_i}n_{i,s}\alpha_s\qquad(n_{i,s}\in\mathbb Z_{>0}),\quad S_i:=\{s\in S:\alpha_s\in\Phi_i\},$$
and $B(\theta_i,\gamma)\ge0$ for every $\gamma\in\Phi_i^+$. For every $x\in C$ and $\gamma\in\Phi_i^+$,
$$0<B(x,\gamma)\le B(x,\theta_i);$$
in particular, if $B(x,\theta_i)<1$, then $0<B(x,\gamma)<1$ for every $\gamma\in\Phi_i^+$.

**(2) Fundamental alcove in an irreducible component.** For each $i$ define
$$A_i:=\{x\in E_i:B(x,\alpha_s)>0\text{ for every }s\in S_i,\ B(x,\theta_i)<1\}.$$
Then $A_i$ is nonempty and is the interior of a bounded geometric simplex. It is an open alcove for the affine wall arrangement of $\Phi_i$. Its closure is
$$\overline{A_i}=\{x\in E_i:B(x,\alpha_s)\ge0\text{ for every }s\in S_i,\ B(x,\theta_i)\le1\},$$
and has exactly $|S_i|+1$ facets, on the walls $H_{\alpha_s,0}$ for $s\in S_i$ and $H_{\theta_i,1}$.

**(3) Reducible and degenerate cases.** Under the orthogonal sum $E=\bigoplus_{i\in I}E_i$, the product $A:=\prod_{i\in I}A_i$ is an alcove for the full affine wall arrangement. For $\Phi=\varnothing$, the spanning hypothesis forces $E=0$; set $A=E=\{0\}$, the unique alcove. If a component is of type $A_1$, then $\theta_i=\alpha_s$ and its factor is $A_i=\{x\in E_i:0<B(x,\alpha_s)<1\}$; products of $A_1$ factors are interpreted factorwise. The later `thm-cg-affine-alcove-transitivity-presentation-and-length` proves that every alcove is a $W_a$-translate of $A$, so these open translates cover precisely the wall complement. No choice principle is used.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space $(E,B)$, a reduced crystallographic root system $\Phi$ spanning $E$, a positive system $\Phi^+$ with base $\Delta$, and the affine-wall notation of [[def-cg-affine-root-hyperplane-reflection-and-alcove]].

[F1] The nonempty irreducible components $\Phi_i$ are pairwise orthogonal reduced root systems spanning the orthogonal direct sum $E=\bigoplus_iE_i$; the empty system occurs only when $E=0$ ([[def-reduced-crystallographic-euclidean-root-system]], [[def-reducible-and-irreducible-root-system]], [[prop-root-systems-decompose-uniquely-into-irreducible-components]]).

[F2] Every positive root has a nonzero nonnegative integral expansion in the simple-root basis, and $\Delta$ is a basis of $E$ ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[F3] For every nonempty irreducible component there is a unique highest root and it is dominant against every positive root; the root order is defined by nonnegative integral simple-root differences ([[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]], [[def-height-of-a-root-and-highest-root]]).

[F4] The open Weyl chamber $C$ is given by strict positivity on all simple roots; affine alcoves are connected components of the complement of the walls; all alcoves are open ([[def-open-and-closed-weyl-chambers]], [[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F5] The simplex spanned by finitely many affinely independent vertices is their convex hull, with barycentric coordinates; the inner product is positive definite and satisfies Cauchy–Schwarz ([[def-geometric-simplex-spanned-by-affinely-independent-vertices]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] A connected component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).

[F7] Distinct simple roots pair nonpositively ([[prop-distinct-simple-roots-have-nonpositive-inner-product]]).

[F8] The Dynkin graph on the simple roots is connected for a nonempty irreducible root system, and two vertices are joined exactly when their inner product is nonzero ([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]], [[def-cartan-matrix-of-a-based-root-system]], [[prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram]]).

[F9] The inner-product norm is homogeneous and satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

## Proof

**Proof technique:** direct.

**Given:** The data above and, for each nonempty component, its highest root $\theta_i$.

1.1 Let $v$ be the regular vector defining $\Phi^+$. Its orthogonal projection to $E_i$ has the same nonzero pairings with roots in $\Phi_i$, so $\Phi_i^+=\Phi_i\cap\Phi^+$ is a positive system on $\Phi_i$. Its simple roots are $\Delta_i=\Delta\cap\Phi_i$: if $\gamma\in\Phi_i^+$ is a sum $\gamma=\beta+\delta$ of positive roots of $\Phi$, project the equality to each $E_j$ with $j\ne i$. Each positive root lies in one component; if exactly one summand lies in $E_j$, its projection is nonzero, and if both lie in $E_j$, their sum is nonzero because $B(v,\beta+\delta)>0$. Thus neither summand lies outside $E_i$. Decomposability in $\Phi_i$ is therefore equivalent to decomposability in $\Phi$. Finally, each root in $\Phi_i$ has only $\Delta_i$ coordinates in the basis $\Delta$, so $\Delta_i$ spans $E_i$; it is linearly independent as a subset of $\Delta$. Hence the simple-root basis splits into bases $\Delta_i$ of the $E_i$. [F1, F2, algebra]

1.2 Fix $i$. Write $\theta_i=\sum_{s\in S_i}n_{i,s}\alpha_s$ with $n_{i,s}\in\mathbb Z_{\ge0}$, not all zero, by [F2]. If its support $T=\{s:n_{i,s}>0\}$ were proper, then for every $s\in S_i\setminus T$, dominance from [F3] and nonpositivity [F7] would give
$$0\le B(\theta_i,\alpha_s)=\sum_{t\in T}n_{i,t}B(\alpha_t,\alpha_s)\le0.$$
Thus every simple root in $T$ is orthogonal to every simple root in $S_i\setminus T$, so by [F8] the connected Dynkin graph would be disconnected. Hence $T=S_i$, and every $n_{i,s}>0$. For $\gamma\in\Phi_i^+$, the finite set $P_\gamma:=\{\eta\in\Phi_i^+:\gamma\le\eta\}$ is nonempty. It has a maximal element $\eta$ because it is finite. If $\eta\le\eta'$ for a positive root $\eta'$, then transitivity gives $\gamma\le\eta'$, so $\eta'\in P_\gamma$ and maximality forces $\eta'=\eta$. Thus $\eta$ is maximal among all positive roots, and uniqueness of the highest root in [F3] gives $\eta=\theta_i$. By the root-order definition in [F3], $\theta_i-\gamma=\sum_{s\in S_i}m_s\alpha_s$ with $m_s\in\mathbb Z_{\ge0}$. For $x\in C$, each $B(x,\alpha_s)>0$, so $B(x,\gamma)>0$ by [F2] and
$$B(x,\theta_i)-B(x,\gamma)=\sum_{s\in S_i}m_sB(x,\alpha_s)\ge0.$$
The dominance inequality $B(\theta_i,\gamma)\ge0$ is [F3]. If $B(x,\theta_i)<1$, the displayed bound gives $B(x,\gamma)<1$ as well. [F1, F2, F3, F7, F8, algebra]

1.3 Fix $i$, write $n=|S_i|\ge1$, and define the linear map $T_i:E_i\to\mathbb R^{S_i}$ by $T_i(x)_s=n_{i,s}B(x,\alpha_s)$. Its kernel is zero: if every coordinate vanishes, then $x$ is orthogonal to the basis $\Delta_i$, hence to all of $E_i$, and positive definiteness gives $x=0$. The domain and codomain both have dimension $n$, so $T_i$ is bijective. Its coordinate functionals are continuous by Cauchy–Schwarz, so $A_i=T_i^{-1}(\{u:u_s>0,\ \sum_su_s<1\})$ is open. It is nonempty, since $u_s=1/(2n)$ gives a point of it, and it is convex; it is exactly the interior of the closed coordinate simplex below. Its closure is $T_i^{-1}(\{u:u_s\ge0,\ \sum_su_s\le1\})$: continuity gives one inclusion; for any $u$ in that closed set, put $x=T_i^{-1}(u)$ and $x^*=T_i^{-1}(u^*)$, where $u^*_s=1/(2n)$. Then $x_t=(1-t)x+tx^*$ lies in $A_i$ for $0<t\le1$, and $\|x_t-x\|_B=t\|x^*-x\|_B\to0$, proving the other inclusion. The closed coordinate simplex is the convex hull of $0$ and the standard coordinate vectors $e_s$, which are affinely independent; its inverse image is therefore a geometric simplex. Every point in the closure is $\sum_su_sT_i^{-1}(e_s)$ with $0\le u_s\le1$, so by [F9] its norm is at most $\sum_s\|T_i^{-1}(e_s)\|_B$. Its barycentric coordinates are $u_s$ and $u_0=1-\sum_su_s$. Each of the $n+1$ equalities $u_s=0$ or $u_0=0$ cuts out an $(n-1)$-dimensional face; every boundary point satisfies one of these equalities, so these are exactly the facets. These coordinate facets correspond to $H_{\alpha_s,0}$ and $H_{\theta_i,1}$. [F2, F5, F9, algebra]

2.1 On $A_i$, step 1.2 gives $0<B(x,\gamma)<1$ for every positive root $\gamma\in\Phi_i^+$; for a negative root $-\gamma$ it gives $-1<B(x,-\gamma)<0$. Hence no integer level $H_{\beta,k}$ for $\beta\in\Phi_i$ meets $A_i$. For nonempty $J$ equal to a singleton $\{i\}$ or to all components $I$, the set $A_J:=\prod_{j\in J}A_j$ is nonempty, convex, and avoids every wall of the arrangement on $E_J:=\bigoplus_{j\in J}E_j$. Let $D_J$ be the connected component of that wall complement containing a point $x\in A_J$. For each simple root $\alpha_s$ in these components, the continuous function $y\mapsto B(y,\alpha_s)$ has no zero on $D_J$ and is positive at $x$, so its negative and positive preimages cannot both be nonempty, since they would separate $D_J$; it therefore stays positive throughout $D_J$. For each $j\in J$, the function $y\mapsto B(y,\theta_j)-1$ likewise has no zero on $D_J$ and is negative at $x$, so it stays negative. Thus $D_J\subseteq A_J$. Since $A_J$ is connected and meets $D_J$, maximality of the connected component gives $A_J\subseteq D_J$, hence $A_J=D_J$. Taking singleton $J$ proves that each $A_i$ is an alcove; taking $J=I$ proves that $A$ is an alcove for the full arrangement when $I$ is nonempty. By [F4] these components are open, as claimed. [F4, F6, step 1.2, step 1.3, algebra]

3.1 If $\Phi=\varnothing$, then $E=0$ by [F1], the wall arrangement is empty, and its complement has the single component $\{0\}$. If $\Phi_i=\{\pm\alpha_s\}$ is of type $A_1$, its positive roots contain only its simple root $\alpha_s$, so $\theta_i=\alpha_s$ and the two inequalities defining $A_i$ are exactly $0<B(x,\alpha_s)<1$. The product statement already established applies independently to every component, including any collection of $A_1$ factors. The proof constructs only finite component decompositions, finite coordinate vectors, and finite sums; no axiom of choice is used. [F1, step 1.3, step 2.1, algebra] ∎
