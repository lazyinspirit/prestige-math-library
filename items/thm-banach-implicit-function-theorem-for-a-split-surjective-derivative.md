---
id: "thm-banach-implicit-function-theorem-for-a-split-surjective-derivative"
kind: "theorem"
title: "A split surjective derivative parametrises its level set"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "cor-finite-dimensional-normed-spaces-are-banach"
  - "cor-finite-dimensional-subspaces-are-closed"
  - "cor-linear-maps-with-finite-dimensional-domain-are-bounded"
  - "def-axiom-of-choice"
  - "def-banach-space"
  - "def-bounded-linear-operator"
  - "def-c-k-map-between-banach-spaces"
  - "def-complemented-subspace"
  - "def-frechet-derivative-between-banach-spaces"
  - "def-linear-basis"
  - "def-linear-combination-and-span"
  - "def-product-norms-on-finitely-many-normed-spaces"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "lem-finite-choice"
  - "lem-standard-basis-of-f-n"
  - "thm-chain-sum-product-and-composition-rules-for-banach-derivatives"
  - "thm-complemented-subspace-iff-range-of-a-bounded-projection"
  - "thm-continuity-characterisations-top"
  - "thm-finite-products-of-banach-spaces-are-banach"
  - "thm-implicit-function-theorem-for-banach-spaces"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Thomas C. Sideris, Ordinary Differential Equations and Dynamical Systems (complete author-hosted book text)"
      url: "https://web.math.ucsb.edu/~sideris/pdffiles/BookPublishedComplete.pdf"
      locator: "Chapter 5 Section 5.4, Theorem 5.7 and its proof, printed pp. 82-85 (Banach-space implicit function theorem by the contraction argument)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (the constrained variational principle and its multiplier identity, the application of this parametrisation)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a real Banach space ([[def-banach-space]]), let $U\subseteq X$ be open, let $G:U\to\mathbb R^m$ with $m\ge1$ be of class $C^1$ ([[def-c-k-map-between-banach-spaces]], [[def-frechet-derivative-between-banach-spaces]]), let $u\in U$, and suppose $DG(u):X\to\mathbb R^m$ is surjective. Then there is a finite-dimensional subspace $Y\subseteq X$ such that $X=\ker DG(u)\oplus Y$ is a topological direct sum with $DG(u)|_Y:Y\to\mathbb R^m$ a bounded linear isomorphism and the coordinate projection onto $Y$ along $\ker DG(u)$ bounded ([[def-complemented-subspace]], [[thm-complemented-subspace-iff-range-of-a-bounded-projection]]). Moreover there are an open $A\subseteq\ker DG(u)$ with $0\in A$, an open $B\subseteq Y$ with $0\in B$, and a unique $C^1$ map $\varphi:A\to B$ with $\varphi(0)=0$ and $D\varphi(0)=0$ such that
$$\{\,z\in u+(A+B):G(z)=G(u)\,\}=\{\,u+a+\varphi(a):a\in A\,\}.$$

## Facts & Assumptions

**Given:** A real Banach space $X$, an open set $U\subseteq X$, a $C^1$ map $G:U\to\mathbb R^m$ with surjective derivative $DG(u)$ at a point $u\in U$, and the standard unit vectors $e_0,\dots,e_{m-1}$ of $\mathbb R^m$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice, consumed through the published implicit function theorem, which assumes it; the selections made here itself are finite.

[F1] [[thm-implicit-function-theorem-for-banach-spaces]]: for real Banach spaces $X_0,Y,Z$, an open $W\subseteq X_0\times Y$, a $C^k$ map $F:W\to Z$ with $k\ge1$, a point $(a_0,b_0)\in W$ with $F(a_0,b_0)=0$ whose partial derivative $D_YF(a_0,b_0):Y\to Z$ is a bounded linear isomorphism, there are open $A\subseteq X_0$ with $a_0\in A$, $B\subseteq Y$ with $b_0\in B$, and a unique $C^k$ map $g:A\to B$ with $g(a_0)=b_0$ and $\{F=0\}\cap(A\times B)=\{(a,g(a)):a\in A\}$; along the graph $Dg(x)=-D_YF(x,g(x))^{-1}D_XF(x,g(x))$.

[F2] [[def-frechet-derivative-between-banach-spaces]], [[def-c-k-map-between-banach-spaces]], [[def-bounded-linear-operator]]: the Fréchet derivative $DG(u)$ is a bounded linear operator $X\to\mathbb R^m$, bounded linear operators are continuous, and restrictions of bounded linear operators to subspaces are bounded and linear.

[F3] [[lem-standard-basis-of-f-n]], [[def-linear-basis]], [[def-linear-combination-and-span]]: the standard unit vectors $e_0,\dots,e_{m-1}$ form an ordered basis of the function space $\mathbb R^m$, so every vector of $\mathbb R^m$ is a unique linear combination $\sum_{i<m} a_ie_i$, and $\mathbb R^m$ is finite dimensional; the span of a finite list is the set of its linear combinations.

[F4] [[lem-finite-choice]]: a finite family of nonempty sets indexed by a natural number has a choice function.

[F5] [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]: a linear map whose domain admits an ordered basis of finite length is bounded.

[F6] [[cor-finite-dimensional-subspaces-are-closed]], [[cor-finite-dimensional-normed-spaces-are-banach]]: a finite-dimensional subspace of a normed space is closed, and a finite-dimensional normed space is complete.

[F7] [[lem-closed-subspace-of-a-banach-space-is-banach]], [[thm-continuity-characterisations-top]]: a closed subspace of a Banach space is a Banach space, and a continuous map pulls closed sets back to closed sets.

[F8] [[def-complemented-subspace]], [[thm-complemented-subspace-iff-range-of-a-bounded-projection]]: a closed subspace $M$ is complemented when there is a closed subspace $N$ with unique decomposition $x=m+n$ and both coordinate maps bounded; equivalently there is a bounded linear projection $P$ with $P^2=P$ and $\operatorname{ran}(P)=M$.

[F9] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: sums, scalar multiples, compositions of $C^1$ maps and derivatives of affine maps are computed by the chain and sum rules, the derivative of a bounded linear map being the map itself.

[F10] [[thm-finite-products-of-banach-spaces-are-banach]], [[def-product-norms-on-finitely-many-normed-spaces]]: a finite product of Banach spaces, with a product norm, is a Banach space.

## Proof

**Proof technique:** direct.

**Given:** A real Banach space $X$, open $U\subseteq X$, a $C^1$ map $G:U\to\mathbb R^m$ with $DG(u)$ surjective at $u\in U$.

1.1 (Construction of the complement) For each $i<m$ the set $DG(u)^{-1}(\{e_i\})$ is nonempty by surjectivity, so finite choice [F4] selects $u_0,\dots,u_{m-1}\in X$ with $DG(u)u_i=e_i$; put $Y:=\operatorname{span}\{u_0,\dots,u_{m-1}\}$ [F3]. The $u_i$ are linearly independent: if $\sum_{i<m}c_iu_i=0$, then $\sum_{i<m}c_ie_i=DG(u)0=0$ and the uniqueness of coordinates in the standard basis forces every $c_i=0$ [F3]. Hence $\dim Y=m$ and $DG(u)|_Y:Y\to\mathbb R^m$ is a linear bijection, bounded as a restriction of the bounded operator $DG(u)$ [F2]; its inverse is a linear map on the finite-dimensional space $\mathbb R^m$ and is bounded by [F5]. Moreover $Y$ is closed in $X$ and complete by [F6]. [given, F2, F3, F4, F5, F6, choose, algebra]

2.1 (Topological splitting and the bounded projection) Since $DG(u)|_Y$ is injective, $\ker DG(u)\cap Y=\{0\}$; since $\mathbb R^m$ is spanned by the $e_i$ [F3], every $x\in X$ has $DG(u)x=\sum_{i<m}a_ie_i$ for unique $a_i$, and with $y:=\sum_{i<m}a_iu_i\in Y$ one has $DG(u)(x-y)=0$, so $x=(x-y)+y\in\ker DG(u)+Y$; the sum is therefore direct. The kernel $\ker DG(u)$ is closed, being the preimage of the closed set $\{0\}$ under the continuous operator $DG(u)$ [F2, F7], hence is a Banach space by [F7]. Define $P:=(DG(u)|_Y)^{-1}\circ DG(u):X\to X$; it is linear and bounded by step 1.1, it takes values in $Y$, restricts to the identity on $Y$, and $\ker P=\ker DG(u)$, so $P^2=P$ and $\operatorname{ran}(P)=Y$. By [F8], $Y$ is complemented by $\ker DG(u)$ with both coordinate projections bounded, so $X=\ker DG(u)\oplus Y$ is a topological direct sum and the coordinate projection onto $Y$ along $\ker DG(u)$ is bounded. [step 1.1, F2, F3, F7, F8, algebra]

2.2 (The auxiliary map) The set $W:=\{(a,y)\in\ker DG(u)\times Y:u+a+y\in U\}$ is open in the Banach space $\ker DG(u)\times Y$ by [F7, F10] and contains $(0,0)$ because $u\in U$. Define $F:W\to\mathbb R^m$, $F(a,y):=G(u+a+y)-G(u)$; the map $(a,y)\mapsto u+a+y$ is affine and $C^1$ with derivative $(h,k)\mapsto h+k$, so $F$ is $C^1$ with $F(0,0)=0$ and $DF(0,0)(h,k)=DG(u)(h+k)$ by the chain and sum rules [F9, F2]; the partial derivative in the $y$-variable is therefore $D_YF(0,0)=DG(u)|_Y$, a bounded linear isomorphism by step 1.1. [step 1.1, F2, F9, F10, construct]

3.1 (Applying the implicit function theorem) Apply [F1] with $X_0=\ker DG(u)$, $Y$, $Z=\mathbb R^m$, the map $F$, and the point $(0,0)$: by step 2.2 its hypotheses hold, and it provides open $A\subseteq\ker DG(u)$ with $0\in A$, open $B\subseteq Y$ with $0\in B$, and a unique $C^1$ map $\varphi:A\to B$ with $\varphi(0)=0$ and $\{F=0\}\cap(A\times B)=\{(a,\varphi(a)):a\in A\}$. Since $F(a,y)=0$ means exactly $G(u+a+y)=G(u)$, the graph identity reads $\{\,z\in u+(A+B):G(z)=G(u)\,\}=\{\,u+a+\varphi(a):a\in A\,\}$. [step 2.1, step 2.2, F1, algebra]

4.1 (The derivative at zero vanishes) The graph identity gives $G(u+a+\varphi(a))=G(u)$ for every $a\in A$. The map $h(a):=u+a+\varphi(a)$ is $C^1$ with $Dh(0)=\mathrm{id}_{\ker DG(u)}+D\varphi(0)$ [F9], so the chain rule [F9] gives $DG(u)\circ(\mathrm{id}+D\varphi(0))=D(G\circ h)(0)=0$ as a map $\ker DG(u)\to\mathbb R^m$. For $a\in\ker DG(u)$ this reads $D\varphi(0)a\in\ker DG(u)$ because $DG(u)a=0$; as $D\varphi(0)$ takes values in $Y$ and $\ker DG(u)\cap Y=\{0\}$ by step 2.1, $D\varphi(0)a=0$ for every $a$, that is $D\varphi(0)=0$. [step 2.1, step 3.1, F9, algebra]

5.1 (Conclusion) Step 1.1 and step 2.1 supply the finite-dimensional subspace $Y$ with $X=\ker DG(u)\oplus Y$ a topological direct sum, $DG(u)|_Y$ a bounded linear isomorphism and the coordinate projection onto $Y$ bounded; step 3.1 supplies the open sets $A$ and $B$ and the map $\varphi$ together with the parametrisation identity; step 4.1 supplies $D\varphi(0)=0$; and the uniqueness assertion follows because any other $C^1$ map with the same set identity satisfies $F(a,\psi(a))=0$ on $A$ and hence equals the unique map $\varphi$ of [F1]. This proves the statement, the Axiom of Choice having been used only through [F1] [A1]. [step 2.1, step 3.1, step 4.1, F1, A1] ∎

