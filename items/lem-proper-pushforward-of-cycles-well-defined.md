---
id: lem-proper-pushforward-of-cycles-well-defined
kind: lemma
title: "Proper pushforward of cycles and the norm formula"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - cor-length-is-additive-in-short-exact-sequences
  - cor-quasi-finite-locus-open-finite-type-algebra
  - def-algebraic-cycle-and-cycle-group
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-extension-degree-and-finite-extension
  - def-field-of-fractions
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-proper-morphism
  - def-scheme-theoretic-image
  - def-sheaf-total-quotient-rings
  - lem-order-function-one-dimensional-local-domain
  - lem-relative-algebraic-constants-fg-field-finite
  - thm-affine-domain-dimension-transcendence-degree
  - thm-proper-morphism-closed-image
  - thm-proper-quasi-finite-is-finite
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.18-42.21 (proper pushforward, tag 02R4 ff.)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.18-42.21: proper pushforward of cycles, the norm formula and functoriality"
    - title: "The Stacks Project, Intersection Theory, Sections 43.10-43.12 (proper pushforward and flat pullback)"
      url: "https://stacks.math.columbia.edu/download/intersection.pdf"
      locator: "Chapter 43, Sections 43.10-43.12: compatibility of proper pushforward with rational equivalence"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Let $k$ be a field and let
$f:X\to Y$ be a proper morphism of schemes locally of finite type over $k$
([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]]).
For an integral closed subscheme $V\subseteq X$ with generic point $\eta$, let
$W=\overline{f(V)}\subseteq Y$ with the reduced structure, an integral closed
subscheme ([[def-scheme-theoretic-image]], [[thm-proper-morphism-closed-image]]).
Define
$$f_*[V]:=\begin{cases} [k(V):k(W)]\cdot[W], & \dim W=\dim V,\\ 0, & \dim W<\dim V,\end{cases}$$
where $k(V)$, $k(W)$ are the function fields ([[def-sheaf-total-quotient-rings]])
and $[k(V):k(W)]$ is the extension degree
([[def-extension-degree-and-finite-extension]]), finite because a dominant
morphism $V\to W$ of integral finite-type $k$-schemes with $\dim V=\dim W$ has
algebraic, hence finite, function field extension. Extending $\mathbb Z$-linearly
gives $f_*:Z_d(X)\to Z_d(Y)$ for all $d$. Then:

1. $f_*$ is a homomorphism of graded groups and
   $f_*(\operatorname{Rat}_d(X))\subseteq\operatorname{Rat}_d(Y)$, so it
   descends to $f_*:A_d(X)\to A_d(Y)$
   ([[def-chow-group-of-cycles-mod-rational-equivalence]]).
2. (Functoriality) $\operatorname{id}_*=\operatorname{id}$ and
   $(g\circ f)_*=g_*\circ f_*$ for proper $f,g$; the degree is multiplicative in
   towers of finite function-field extensions.
3. (Base change) For a cartesian square with $g$ flat of pure relative dimension $n$
   and proper $f$, the
   compatibility of lem-pushforward-pullback-compatibility-chow holds.
4. (Normalization) If $f$ is finite flat of constant degree $n$ between integral
   schemes of the same dimension, then $f_*[X]=n[Y]$.

Point (1) is the nontrivial assertion: for $W\subseteq X$ integral of dimension
$d+1$ and $r\in k(W)^*$ one has
$$f_*\bigl(\operatorname{div}_W(r)\bigr)=\operatorname{div}_{f(W)}\bigl(N_{k(W)/k(f(W))}(r)\bigr)$$
when $\dim f(W)=\dim W$, and $f_*(\operatorname{div}_W(r))=0$ when
$\dim f(W)<\dim W$; here $N$ is the field norm.

## Facts & Assumptions

**Given:** the Axiom of Choice; a proper morphism $f:X\to Y$ of schemes locally of finite type over $k$; an integral closed subscheme $V\subseteq X$ with function field $L=k(V)$ and image $W$ with function field $K=k(W)$.

[F1] $V$ is integral and locally of finite type over $k$; each nonempty affine chart is of finite type and has the same function field, $W$ is integral of dimension at most $\dim V$, and $L/K$ is finitely generated; if $\dim W=\dim V$ then $L/K$ is algebraic, hence finite of degree $[L:K]$, by the dimension-transcendence-degree theorem ([[def-integral-scheme]], [[thm-proper-morphism-closed-image]], [[def-scheme-theoretic-image]], [[thm-affine-domain-dimension-transcendence-degree]], [[def-extension-degree-and-finite-extension]]). A dense open subscheme of $V$ has the same function field, and the relative algebraic-constants lemma supplies the finiteness statements for dominant finite-type morphisms of integral schemes ([[lem-relative-algebraic-constants-fg-field-finite]]).

[F2] Cycles and rational equivalence: $Z_d$ and $\operatorname{Rat}_d$ are as in [[def-algebraic-cycle-and-cycle-group]] and [[def-chow-group-of-cycles-mod-rational-equivalence]], with divisor cycles $\operatorname{div}_W(r)=\sum_{Z}\operatorname{ord}_{\mathcal O_{W,Z}}(r)[Z]$ computed by the order function of [[lem-order-function-one-dimensional-local-domain]]; the order function is multiplicative, additive on products and normalized so that $\operatorname{ord}$ is the valuation on a discrete valuation ring.

[F3] Length is additive in short exact sequences and a finitely generated module over a one-dimensional Noetherian local domain has finite length after quotient by a nonzerodivisor ([[cor-length-is-additive-in-short-exact-sequences]], [[lem-order-function-one-dimensional-local-domain]]).

[F4] A proper quasi-finite morphism is finite, and the quasi-finite locus of a finite type morphism is open ([[thm-proper-quasi-finite-is-finite]], [[cor-quasi-finite-locus-open-finite-type-algebra]]).

## Proof

**Proof technique:** direct; define the pushforward of cycles, prove the norm formula by a finite lattice-index computation, and handle the dimension-drop cases by the degree of principal divisors on proper curves.

1.1 The cycle pushforward. The closure $W$ of $f(V)$ is closed by properness and irreducible, and we give it the reduced structure, so $W$ is integral with function field $K$; $\dim W\le\dim V$ and $[L:K]$ is finite when $\dim W=\dim V$ by [F1]. The displayed formula therefore defines a graded homomorphism $f_*:Z_d(X)\to Z_d(Y)$, since integral closed subschemes of a fixed dimension form a basis of $Z_d$ and the coefficient is an integer. For a dense open $U\subseteq V$ one has $\overline{f(U)}=W$ and $k(U)=k(V)$, so the definition is insensitive to replacing $V$ by a dense open. [F1, F2, given]

1.2 The finite norm-order formula. Let $(A,\mathfrak m)$ be a one-dimensional Noetherian local domain with fraction field $K$, and let $B$ be a finite domain over $A$ with fraction field $L$, finite over $K$. The ring $B$ is semilocal; for $r\in L^*$, $$\operatorname{ord}_A(N_{L/K}(r))=\sum_{\mathfrak q\in\operatorname{Max}(B)}[\kappa(\mathfrak q):\kappa(A)]\operatorname{ord}_{B_{\mathfrak q}}(r).$$ To prove this, call a finite torsion-free $A$-submodule of $L$ spanning $L$ a full lattice. Any two full lattices are commensurable, so for such lattices set $$\delta(M,N)=\ell_A(M/(M\cap N))-\ell_A(N/(M\cap N)).$$ Length additivity makes $\delta$ additive in chains of lattices; a $K$-linear isomorphism preserves it. Consequently $g\mapsto\delta(M,gM)$ is a homomorphism $\operatorname{GL}_n(K)\to\mathbb Z$, independent of the chosen full lattice $M$, where $n=[L:K]$. For $M=A^n$, a diagonal matrix has index the sum of the orders of its diagonal entries. For an elementary transvection $E_{ij}(u)$ with $u\in K$, put $I=\{a\in A:ua\in A\}$. The intersection of $A^n$ and $E_{ij}(u)A^n$ has the same coordinates as $A^n$ except for the $j$th coordinate, which is $I$; both quotients by this intersection are isomorphic to $A/I$, so the index is zero. Gaussian elimination therefore gives $\delta(M,gM)=\operatorname{ord}_A(\det g)$ for every $g\in\operatorname{GL}_n(K)$. Apply this to multiplication by $r$ on the lattice $B$: its determinant is $N_{L/K}(r)$. Write $r=a/b$ with nonzero $a,b\in B$. Translation by $b$ and additivity of $\delta$ give $$\operatorname{ord}_A(N_{L/K}(r))=\ell_A(B/aB)-\ell_A(B/bB).$$ For any nonzero $a\in B$, the quotient $B/aB$ is a zero-dimensional Noetherian ring, hence has finite length; as a $B$-module it has a composition series whose simple factors are the residue fields at maximal ideals of $B$. Thus $$\ell_A(B/aB)=\sum_{\mathfrak q}[\kappa(\mathfrak q):\kappa(A)]\ell_{B_{\mathfrak q}}(B_{\mathfrak q}/aB_{\mathfrak q}).$$ Subtracting the analogous equality for $b$ proves the formula by the definition of the order function. [F2, F3, algebra]

2.1 Equal-dimensional images. Suppose $\dim W=\dim V=d+1$. Let $T\subseteq W$ be an integral closed subscheme of dimension $d$, with generic point $\zeta$. The fibre of $V\to W$ over $\zeta$ is zero-dimensional: a positive-dimensional component would have closure of dimension at least $d+1$ in the integral scheme $V$, hence would be all of $V$, contradicting dominance. Thus $V\to W$ is quasi-finite at every point over $\zeta$. Its quasi-finite locus is open, and properness lets us shrink around $\zeta$ so that the restriction is proper quasi-finite, hence finite by [F4]. The resulting finite algebra over $A=\mathcal O_{W,\zeta}$ is a domain finite over $A$, and its maximal ideals correspond to the codimension-one subschemes of $V$ mapping onto $T$. The formula in step 1.2 says that the coefficient of $[T]$ in $\operatorname{div}_W(N_{k(V)/k(W)}(r))$ is $$\sum_{Z\mapsto T}[k(Z):k(T)]\operatorname{ord}_{\mathcal O_{V,Z}}(r),$$ which is exactly the coefficient of $[T]$ in $f_*\operatorname{div}_V(r)$. Codimension-one subschemes of $V$ whose image has dimension less than $d$ push forward to zero and do not contribute to the divisor on $W$. Equality at every such $T$ proves $$f_*\operatorname{div}_V(r)=\operatorname{div}_W(N_{k(V)/k(W)}(r)).$$. [F4, F1, step 1.2, algebra]

2.2 Functoriality. For the identity morphism the formula is $[k(V):k(V)][V]=[V]$. For proper composable $f:X\to Y$, $g:Y\to Z$ and an integral $V\subseteq X$ with closure $W=\overline{f(V)}$ and closure $T=\overline{g(W)}$, the function field degrees multiply in the tower $k(T)\subseteq k(W)\subseteq k(V)$ when all three dimensions agree, both sides give $[k(V):k(T)][T]$, and if either dimension drops then both composites give zero; a proper morphism carries a locally finite family of integral closed subschemes to a locally finite family, so the identity extends to locally finite cycles. [F1, step 1.1, algebra]

3.1 Dimension drop. If $\dim W\le\dim V-2$, every codimension-one subscheme $Z\subset V$ has dimension $\dim V-1$, while $\dim f(Z)\le\dim W\le\dim V-2<\dim Z$; hence its pushforward is zero. Suppose instead that $\dim V=d+1$ and $\dim W=d$. The generic fibre $C=V\times_W\operatorname{Spec}k(W)$ is a proper integral curve over $K=k(W)$. Codimension-one subschemes of $V$ that dominate $W$ correspond to closed points $x$ of $C$, and their contribution to the coefficient of $[W]$ in $f_*\operatorname{div}_V(r)$ is $$\sum_{x\in C\text{ closed}}[k(x):K]\operatorname{ord}_{\mathcal O_{C,x}}(r).$$ This degree is zero. Indeed, if $r$ is constant its divisor is zero. Otherwise let $\Gamma$ be the closure of the graph of the rational map $r:C\dashrightarrow\mathbb P^1_K$. The projections $p:\Gamma\to C$ and $q:\Gamma\to\mathbb P^1_K$ are proper; $p$ is birational, while $q$ is nonconstant, hence quasi-finite and finite. Since the local rings of $\mathbb P^1_K$ are fields or discrete valuation rings and $\Gamma$ is integral, the finite morphism $q$ is flat of some degree $e$. The equal-dimensional formula of step 2.1 gives $p_*\operatorname{div}_\Gamma(r)=\operatorname{div}_C(r)$, and $\operatorname{div}_\Gamma(r)=q^*[0]-q^*[\infty]$. Both fibres have degree $e$ over $K$, so the displayed sum is $e-e=0$. This proves $f_*\operatorname{div}_V(r)=0$ in the remaining case as well. [F1, F2, step 2.1, algebra]

4.1 Base change and finite flat normalization. Consider a cartesian square with $f:X\to Y$ proper and $g:Y'\to Y$ flat of pure relative dimension $n$, and write $f':X'=X\times_Y Y'\to Y'$ and $g':X'\to X$. For an integral $d$-dimensional $V\subseteq X$, put $W=\overline{f(V)}$ and $e=\dim V-\dim W$. If $e>0$, both $g^*f_*[V]$ and $f'_*g'^*[V]$ are zero: every component of the flat pullback of $V$ has dimension $d+n$, while its image has dimension at most $\dim W+n<d+n$. If $e=0$, set $m=[k(V):k(W)]$. For each component $W_i$ of $g^{-1}(W)$, let $C_i$ be the Artinian local ring of $W\times_Y Y'$ at its generic point. Flat pullback gives coefficient $\ell(C_i)$ on $[W_i]$. The generic algebra of $V\times_Y Y'$ over $C_i$ is $C_i\otimes_{k(W)}k(V)$, a free $C_i$-module of rank $m$. Decomposing it into its Artinian local factors shows that the sum of the generic lengths of the components above $W_i$, weighted by their function-field degrees over $k(W_i)$, is $m\ell(C_i)$. These are precisely the coefficients of $[W_i]$ in $f'_*g'^*[V]$ and $g^*f_*[V]$, respectively. Hence the base-change identity holds on cycles and therefore on Chow groups. Finally, if $f$ is finite flat of constant degree $n$ between integral schemes of the same dimension, then $f$ is dominant and $[k(X):k(Y)]=n$, so $f_*[X]=n[Y]$ by step 1.1. [F1, step 1.1, given, algebra] ∎

