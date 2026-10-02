---
id: ex-compact-group-with-no-faithful-finite-dimensional-representation
kind: example
title: "A compact group with no faithful continuous finite-dimensional representation"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-product-topology, thm-coordinate-map-for-a-finite-dimensional-normed-space, def-operator-norm, def-group, def-group-homomorphism, def-standard-topologies, def-continuous-map-top, def-topological-group, def-compact-space, def-hausdorff-space, def-subspace-topology-top, def-topology-basis-subbasis, def-metric-topology, def-bounded-linear-operator, def-linear-map, thm-product-universal-property, lem-continuity-is-local-and-pastes, def-dimension, def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-norm-and-normed-space, def-normed-vector-space-over-an-absolutely-valued-field, rem-real-and-complex-normed-space-convention, def-finite-sum, lem-complex-conjugation-and-modulus-laws, cor-linear-maps-with-finite-dimensional-domain-are-bounded, lem-operator-norm-is-a-norm, thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent, cor-dimensions-of-matrix-and-linear-map-spaces, thm-rank-nullity, thm-linear-kernel-image-and-injectivity, thm-dimension-of-a-linear-subspace, thm-recursion, thm-induction-principle, lem-subset-of-countable, def-finite-dimensional-representation-of-a-group-over-a-field, def-intertwiner-equivalent-and-faithful-representations, def-linear-isomorphism-and-invertible-linear-map, def-natural-numbers]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: https://math.mit.edu/~dav/compactrev.ps
---

## Example

Write $C_2=\{0,1\}$ for the two-element group whose operation is given by the
table $0+0=0$, $0+1=1$, $1+0=1$, $1+1=0$, so that $0$ is the identity and every
element equals its own inverse. Let

$$K:=\prod_{n\in\mathbb N}C_2$$

carry the coordinatewise operation and the product topology
([[def-product-topology]]), each factor carrying the discrete topology
([[def-standard-topologies]]). Then:

1. $K$ is a compact Hausdorff topological group; and
2. every continuous finite-dimensional complex representation of $K$ has a
   nontrivial kernel: for every finite-dimensional complex vector space $V$ and
   every group homomorphism $\rho:K\to\operatorname{GL}(V)$
   ([[def-finite-dimensional-representation-of-a-group-over-a-field]]) that is
   continuous for the topology on
   $\operatorname{GL}(V)\subseteq\mathcal L(V,V)$ induced by a norm on
   $\mathcal L(V,V)$, there is $g\ne e$ in $K$ with
   $\rho(g)=\operatorname{id}_V$; equivalently
   ([[def-intertwiner-equivalent-and-faithful-representations]]) no continuous
   finite-dimensional complex representation of $K$ is faithful.

Both arguments are choice free: no form of Tychonoff's theorem is used. The
topology in (2) is independent of the choices, because all norms on the
finite-dimensional complex space $\mathcal L(V,V)$ are equivalent
([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]],
[[cor-dimensions-of-matrix-and-linear-map-spaces]]).

## Facts & Assumptions

**Given:** the two-element group $C_2=\{0,1\}$ with the displayed operation; the
product $K=\prod_{n\in\mathbb N}C_2$ with the product topology and coordinatewise
operation, its projections written $\pi_n$, its identity written $e$; a
finite-dimensional complex vector space $V$; a norm $\|\cdot\|$ on $V$; the
operator norm on $\mathcal L(V,V)$; and a group homomorphism
$\rho:K\to\operatorname{GL}(V)$ that is continuous for the subspace topology on
$\operatorname{GL}(V)$.

[F1] A group has an associative operation, an identity $e$ with $ex=xe=x$, and
inverses; a group homomorphism satisfies $\rho(xy)=\rho(x)\rho(y)$
([[def-group]], [[def-group-homomorphism]]).

[F2] In the discrete topology every subset is open, so every map out of a
discrete space is continuous; a space listed as $\{x_0,\dots,x_n\}$, in
particular $C_2$ and $C_2\times C_2$, is compact whatever its topology; and
distinct points of a discrete space are separated by the disjoint open sets
$\{x\}$ and $\{y\}$ ([[def-standard-topologies]],
[[def-continuous-map-top]], [[def-compact-space]], [[def-hausdorff-space]]).

[F3] The product topology on $K$ is the initial topology of the projections
$\pi_n$: the projections are continuous, a map $h:Z\to K$ is continuous exactly
when every component $\pi_n\circ h$ is continuous, and the finite intersections
of the sets $\pi_n^{-1}[V]$, $V$ open in $C_2$, form a basis
([[def-product-topology]], [[thm-product-universal-property]], claims 1 and 2,
[[def-topology-basis-subbasis]]).

[F4] A composite of continuous maps is continuous
([[lem-continuity-is-local-and-pastes]], claim 1).

[F5] A norm satisfies $\|v\|=0\iff v=0$, $\|\lambda v\|=|\lambda|\,\|v\|$ and
$\|v+w\|\le\|v\|+\|w\|$, and its balls $B(x,r)=\{y:\|y-x\|<r\}$ are open
([[def-norm-and-normed-space]],
[[def-normed-vector-space-over-an-absolutely-valued-field]], read over
$\mathbb C$ by [[rem-real-and-complex-normed-space-convention]]; for the
triangle inequality see also [[def-metric-topology]]).

[F6] Norms and operator norms on the spaces at hand: $V$ admits an ordered basis
of finite length and unique coordinates in it
([[def-dimension]], [[def-linear-basis]],
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]]); every linear map
from the finite-dimensional space $V$ to a normed space is bounded
([[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]); the operator
norm is a norm on the space of bounded operators and satisfies
$\|Tx\|\le\|T\|\,\|x\|$ ([[def-operator-norm]], [[lem-operator-norm-is-a-norm]],
[[def-bounded-linear-operator]]); and all norms on the finite-dimensional
complex space $\mathcal L(V,V)$ are equivalent, so they induce the same
topology ([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]],
[[cor-dimensions-of-matrix-and-linear-map-spaces]]).

[F7] For linear $T:V\to W$ the kernel and image are linear subspaces, and $T$ is
injective exactly when $\ker T=\{0\}$
([[def-linear-map]], [[thm-linear-kernel-image-and-injectivity]]); for linear
$T:V\to V$ with $V$ finite dimensional, $\dim V=\dim\ker T+\dim\operatorname{im}T$
([[thm-rank-nullity]]); and a subspace $U\subseteq V$ with $\dim U=\dim V$
satisfies $U=V$ ([[thm-dimension-of-a-linear-subspace]], claim 2).

[F8] For every set $X$, element $x_0\in X$ and function $\Phi:X\to X$ there is
$h:\mathbb N\to X$ with $h(0)=x_0$ and $h(n+1)=\Phi(h(n))$ for all $n$
([[thm-recursion]], [[def-natural-numbers]]); and a property holding at $0$ and
inherited by successors holds at every natural number
([[thm-induction-principle]]).

[F9] A subset $S\subseteq\mathbb N$ is finite if and only if it is bounded
above, and countably infinite if and only if it is unbounded
([[lem-subset-of-countable]]); in particular every finite $F\subseteq\mathbb N$
satisfies $F\subseteq k$ for some $k\in\mathbb N$.

[F10] A topological space is compact when every family of open sets with union
the whole space has a finite subfamily that already covers it, and a family is
finite when it is empty or listed as $\{V_0,\dots,V_n\}$
([[def-compact-space]]).

[F11] A space is Hausdorff when distinct points have disjoint open
neighbourhoods ([[def-hausdorff-space]]).

[F12] $\rho$ is continuous at $e$ in the sense that for every neighbourhood $N$
of $\rho(e)$ there is a neighbourhood $U$ of $e$ with $\rho[U]\subseteq N$, and
$\operatorname{GL}(V)$ carries the subspace topology of $\mathcal L(V,V)$
([[def-continuous-map-top]], [[def-subspace-topology-top]]).

[F13] $\operatorname{GL}(V)$ is the group of invertible linear maps $V\to V$,
and a representation is faithful when $\rho(g)=\operatorname{id}_V$ implies
$g=e$ ([[def-linear-isomorphism-and-invertible-linear-map]],
[[def-finite-dimensional-representation-of-a-group-over-a-field]],
[[def-intertwiner-equivalent-and-faithful-representations]]).

[F14] Modulus laws in $\mathbb C$: $|z|\ge0$, $|z|=0\iff z=0$, $|zw|=|z||w|$
and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); and
finite sums are defined and additive on lists ([[def-finite-sum]]).

## Verification

**Proof technique:** direct.

1.1 The displayed table makes $C_2$ a group: $0$ is an identity by the first and third entries, $0+0=0$ and $1+1=0$ make every element its own inverse, the table is symmetric in its two arguments, and associativity holds because both $(x+y)+z$ and $x+(y+z)$ equal the sum of the three bits modulo $2$, as the eight triples of bits show. It follows that $K$ is a group under the coordinatewise operation: associativity is inherited coordinatewise from $C_2$, the constant function $e=0$ is an identity, and $x^{-1}=x$ because $x_n+x_n=0$ in every coordinate; moreover the function $z$ with $z(0)=1$ and $z(n)=0$ for $n\ge1$ is not $e$, so $K\ne\{e\}$. [F1, algebra]

1.2 Every subset of $C_2$ is open in the discrete topology, so every map with domain $C_2$, and every map with domain $C_2\times C_2$, is continuous; $C_2$ is compact as a finite space, and it is Hausdorff because $\{0\}$ and $\{1\}$ are disjoint open sets. [F2]

1.3 For a finite set $F\subseteq\mathbb N$ and a function $w:F\to C_2$ put $U_{F,w}:=\{y\in K: y_i=w_i \text{ for all } i\in F\}$. Each $U_{F,w}$ is $\bigcap_{i\in F}\pi_i^{-1}[\{w_i\}]$, a finite intersection of preimages of open sets, hence a basic product-open set and in particular open; conversely, if $W$ is open and $x\in W$, then by [F3] there is a basic product-open box $B=\prod_nV_n$ with $x\in B\subseteq W$ and $V_n=C_2$ for all $n$ outside a finite set $F$, and then $x\in U_{F,x|_F}\subseteq B\subseteq W$, because a point of $U_{F,x|_F}$ has $i$-th coordinate $x_i\in V_i$ for $i\in F$ and an arbitrary coordinate of $C_2=V_n$ for $n\notin F$. Also $U_{\varnothing,\varnothing}=K$. [F3, algebra]

1.4 Since $V$ is finite dimensional it admits an ordered basis $e:n\to V$ of finite length, and then every $x\in V$ has exactly one coordinate list $\lambda:n\to\mathbb C$ with $x=\sum_{i<n}\lambda_ie_i$. The assignment $\|x\|:=\sum_{i<n}|\lambda_i|$ is a norm on $V$: definiteness is uniqueness of the coordinates, homogeneity is $|\alpha\lambda_i|=|\alpha|\,|\lambda_i|$ applied termwise, and the triangle inequality follows from $|\lambda_i+\mu_i|\le|\lambda_i|+|\mu_i|$ and additivity of finite sums applied termwise. Since every linear map $V\to V$ is bounded for this norm, the operator norm makes $\mathcal L(V,V)$ a normed space with $\|Tx\|\le\|T\|\,\|x\|$; and because all norms on this finite-dimensional complex space are equivalent, the topology induced on the subset $\operatorname{GL}(V)$ is the same for every choice of norm or of basis. [F5, F6, F14]

1.5 Let $T:V\to V$ be linear with $T^2=\operatorname{id}_V$ and $T\ne\operatorname{id}_V$. If $T+\operatorname{id}_V$ were injective, then it would be surjective, since an injective linear endomorphism of the finite-dimensional space $V$ is surjective; then $T-\operatorname{id}_V=(T-\operatorname{id}_V)(T+\operatorname{id}_V)(T+\operatorname{id}_V)^{-1}=0$ by $T^2=\operatorname{id}_V$, that is $T=\operatorname{id}_V$, contrary to hypothesis. Hence $T+\operatorname{id}_V$ is not injective, so there is $v\ne0$ with $(T+\operatorname{id}_V)v=0$, that is $Tv=-v$. [F7, algebra]

1.6 Since $\rho$ is a group homomorphism, $\rho(e)=\rho(e\cdot e)=\rho(e)^2$, and multiplying by the inverse of the group element $\rho(e)$ gives $\rho(e)=\operatorname{id}_V$; and $\rho(g^2)=\rho(g)^2$ for every $g\in K$. [F1]

2.1 $K$ is Hausdorff: if $x\ne y$ in $K$, there is $n$ with $x_n\ne y_n$, and then $F=\{n\}$ gives two points $w=x|_F$, $w'=y|_F$ of $C_2^F$ with $U_{F,w}\cap U_{F,w'}=\varnothing$, while $x\in U_{F,w}$ and $y\in U_{F,w'}$ by step 1.3; these are disjoint open neighbourhoods. [F11, step 1.3]

2.2 $K$ is a topological group. For multiplication $m(x,y):=xy$ it suffices by [F3] to show that each component $\pi_n\circ m$ is continuous, and $(\pi_n\circ m)(x,y)=x_n+y_n$. The map $K\times K\to C_2\times C_2$, $(x,y)\mapsto(x_n,y_n)$, is continuous because its components are $\pi_n\circ\mathrm{pr}_1$ and $\pi_n\circ\mathrm{pr}_2$, composites of continuous projections; the operation $C_2\times C_2\to C_2$ is continuous by step 1.2; so $\pi_n\circ m$ is a composite of continuous maps, hence continuous. Inversion is the identity map of $K$ by step 1.1 and therefore continuous. [F3, F4, step 1.1, step 1.2]

2.3 The set $B:=\{T\in\mathcal L(V,V):\|T-\operatorname{id}_V\|<1\}$ is open in $\mathcal L(V,V)$ and contains $\operatorname{id}_V$, hence $B\cap\operatorname{GL}(V)$ is a neighbourhood of $\rho(e)=\operatorname{id}_V$ in the subspace topology; by continuity of $\rho$ at $e$ there is an open neighbourhood $W$ of $e$ in $K$ with $\rho[W]\subseteq B$, and by step 1.3 applied to $W\ni e$ there is a finite $F\subseteq\mathbb N$ with $U_{F,0}\subseteq W$, where $0$ here denotes the zero function on $F$. By [F9] there is $k\in\mathbb N$ with $F\subseteq k$, and $U_{k,0}\subseteq U_{F,0}$ because a cylinder constrains more coordinates; hence $\|\rho(g)-\operatorname{id}_V\|<1$ for every $g\in U_{k,0}$. [F5, F9, F12, step 1.3, step 1.4, step 1.6]

2.4 Every $g\in K$ satisfies $g^2=e$ because each coordinate satisfies $x+x=0$ by step 1.1, and therefore $\rho(g)^2=\rho(g^2)=\rho(e)=\operatorname{id}_V$ by step 1.6; consequently, whenever $\rho(g)\ne\operatorname{id}_V$, step 1.5 applied to $T=\rho(g)$ provides $v\ne0$ with $\rho(g)v=-v$. [step 1.1, step 1.5, step 1.6]

2.5 Let $\mathcal U$ be an open cover of $K$ and call a pair $(F,w)$, with $F\subseteq\mathbb N$ finite and $w:F\to C_2$, **bad** when no finite subfamily of $\mathcal U$ covers $U_{F,w}$. If $w:k\to C_2$ is bad, then at least one of the two extensions $w_0,w_1:k+1\to C_2$, defined by $w_j|_k=w$ and $w_j(k)=j$, is bad: indeed every $y\in U_{k,w}$ has $y(k)=0$ or $y(k)=1$, so $U_{k,w}=U_{k+1,w_0}\cup U_{k+1,w_1}$; if both cylinders on the right were covered by finite subfamilies of $\mathcal U$, their union, listed after one another, would be a finite subfamily covering $U_{k,w}$, contradicting badness. [F10, step 1.3]

3.1 Assume for contradiction that $\mathcal U$ is an open cover of $K$ with no finite subcover, so that the empty cylinder $U_{0,\varnothing}=K$ is bad. Let $X$ be the set of all functions $w:D\to C_2$ whose domain $D\subseteq\mathbb N$ is finite, and define $\Phi:X\to X$ by: if $dom(w)=k\in\mathbb N$, let $w_0,w_1$ be the two extensions of $w$ to $k+1$, and put $\Phi(w):=w_0$ if $(k+1,w_0)$ is bad and $\Phi(w):=w_1$ otherwise; if $dom(w)$ is not a natural number, put $\Phi(w):=w$. By [F8] there is $h:\mathbb N\to X$ with $h(0)=\varnothing$ and $h(n+1)=\Phi(h(n))$. Induction on $n$ shows that $h(n)$ has domain $n$ and is bad: this holds at $n=0$ by the assumption, and if it holds at $n$ then step 2.5 produces a bad extension of $h(n)$ with domain $n+1$, which is exactly $\Phi(h(n))=h(n+1)$. Since each $\Phi(w)$ extends $w$, the functions $h(n)$ are coherent, and $x(i):=h(i+1)(i)$ defines a function $x:\mathbb N\to C_2$, that is, a point $x\in K$, with $x|_n=h(n)$ for every $n$. [F8, step 1.3, step 2.5]

3.2 Every $g\in U_{k,0}$, for the $k$ of step 2.3, satisfies $\rho(g)=\operatorname{id}_V$. Suppose $\rho(g)\ne\operatorname{id}_V$; by step 2.4 there is $v\ne0$ with $\rho(g)v=-v$, and then $2\|v\|=\|\rho(g)v-v\|=\|(\rho(g)-\operatorname{id}_V)v\|\le\|\rho(g)-\operatorname{id}_V\|\,\|v\|<\|v\|$, using $\|Tx\|\le\|T\|\,\|x\|$ of step 1.4 and $\|\rho(g)-\operatorname{id}_V\|<1$ of step 2.3; but $2\|v\|<\|v\|$ is impossible because $\|v\|>0$ by the norm axioms of step 1.4. Hence $\rho(g)=\operatorname{id}_V$ for every $g\in U_{k,0}$. [step 1.4, step 2.3, step 2.4]

4.1 $K$ is compact. Let $\mathcal U$ be an open cover of $K$ and suppose it has no finite subcover. Steps 2.5 and 3.1 then produce a point $x\in K$ with $U_{n,x|_n}$ bad for every $n\in\mathbb N$. Since $\mathcal U$ covers $K$ there is $U\in\mathcal U$ with $x\in U$, and since $U$ is open step 1.3 gives a finite $F\subseteq\mathbb N$ with $U_{F,x|_F}\subseteq U$; by [F9] there is $m\in\mathbb N$ with $F\subseteq m$, so $U_{m,x|_m}\subseteq U_{F,x|_F}\subseteq U$, that is, the one-member finite subfamily $\{U\}$ of $\mathcal U$ covers the bad cylinder $U_{m,x|_m}$ — a contradiction. Therefore every open cover of $K$ has a finite subcover, so $K$ is compact. [F9, F10, step 1.3, step 3.1]

4.2 Every continuous finite-dimensional complex representation of $K$ has a nontrivial kernel. With $V,\rho,k$ as above, step 3.2 gives $\rho(g)=\operatorname{id}_V$ for all $g\in U_{k,0}$. The function $z:\mathbb N\to C_2$ with $z(k)=1$ and $z(i)=0$ for $i\ne k$ lies in $U_{k,0}$ because it vanishes on all $i<k$, and $z\ne e$ since $z(k)=1$; thus $\rho(z)=\operatorname{id}_V$ with $z\ne e$, and $\rho$ is not faithful, so the kernel of $\rho$ is nontrivial. [F13, step 1.1, step 3.2]

5.1 By steps 2.1, 2.2 and 4.1 the space $K=\prod_{n\in\mathbb N}C_2$ is a compact Hausdorff topological group, and by step 4.2 every continuous finite-dimensional complex representation of $K$ has a nontrivial kernel, so no such representation is faithful. The entire argument uses only the two-element table, the definitions involved and recursion and induction on $\mathbb N$: no choice principle and in particular no Tychonoff theorem enters, so both claims are choice free. [step 2.1, step 2.2, step 4.1, step 4.2] ∎
