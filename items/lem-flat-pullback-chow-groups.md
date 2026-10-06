---
id: lem-flat-pullback-chow-groups
kind: lemma
title: "Flat pullback of cycles and of rational equivalence"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - cor-length-is-additive-in-short-exact-sequences
  - cor-transcendence-degree-tower-additivity
  - def-algebraic-cycle-and-cycle-group
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-dimension-noetherian-topological-space
  - def-flat-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-scheme-theoretic-fibre
  - def-smooth-morphism-schemes
  - lem-cycle-of-a-closed-subscheme
  - lem-order-function-one-dimensional-local-domain
  - lem-proper-pushforward-of-cycles-well-defined
  - lem-smooth-fibres-smooth
  - thm-affine-domain-dimension-transcendence-degree
  - thm-flat-going-down
  - thm-prime-filtration-of-a-finite-module
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.13-42.14 and 42.20 (flat pullback, tags 02R6 ff.)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.13-42.14 and 42.20: flat pullback of cycles and of rational equivalence, with generic fibre lengths"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 4"
      url: "https://math.stanford.edu/~vakil/245/245class4.pdf"
      locator: "Class 4: flat pullback of cycles and the localization sequence"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Let $k$ be a field and let
$f:X\to Y$ be a flat morphism of schemes locally of finite type over $k$
([[def-flat-morphism-schemes]]) all of whose nonempty fibres have pure dimension
$n$ ([[def-scheme-theoretic-fibre]],
[[def-dimension-noetherian-topological-space]]); for instance $f$ smooth of
relative dimension $n$ ([[def-smooth-morphism-schemes]],
[[def-relative-dimension-smooth-morphism]], [[lem-smooth-fibres-smooth]]) or an
open immersion with $n=0$. For an integral closed subscheme $V\subseteq Y$ let
$f^{-1}(V)=V\times_Y X$ be the scheme-theoretic preimage and let $[f^{-1}(V)]$
be its cycle ([[lem-cycle-of-a-closed-subscheme]]). Extending linearly gives
$f^*:Z_d(Y)\to Z_{d+n}(X)$. Then:

1. If $f^{-1}(V)$ is nonempty, it is equidimensional of dimension
   $\dim V+n$; if it is empty, $f^*[V]=0$. In both cases $f^*[V]$ is a
   pure $(d+n)$-cycle; this is the only place the pure-fibre-dimension
   hypothesis is used.
2. $f^*(\operatorname{Rat}_d(Y))\subseteq\operatorname{Rat}_{d+n}(X)$: for an
   integral closed subscheme $W\subseteq Y$ of dimension $d+1$ and
   $r\in k(W)^*$, if $W_j$ are the reduced irreducible components of
   $f^{-1}(W)$ with generic lengths $n_j$, then
   $f^*(\operatorname{div}_W(r))=\sum_j n_j\operatorname{div}_{W_j}(r|_{W_j})$,
   pushed to $X$, and the right-hand side lies in
   $\operatorname{Rat}_{d+n}(X)$.
3. Consequently $f^*$ descends to a graded homomorphism
   $f^*:A_d(Y)\to A_{d+n}(X)$
   ([[def-chow-group-of-cycles-mod-rational-equivalence]]).
4. (Functoriality) $\operatorname{id}^*=\operatorname{id}$ and
   $(g\circ f)^*=f^*\circ g^*$ for composable flat morphisms of the stated kind;
   if $f$ is an open immersion then $f^*$ is the restriction of cycles.
5. (Localization) If $j:U\hookrightarrow X$ is an open immersion and
   $i:Z=X\setminus U\hookrightarrow X$ the complementary reduced closed
   subscheme, the sequence
   $A_*(Z)\xrightarrow{i_*}A_*(X)\xrightarrow{j^*}A_*(U)\to0$ is exact (using
   [[lem-proper-pushforward-of-cycles-well-defined]] for $i_*$).

## Facts & Assumptions

**Given:** the Axiom of Choice; a flat morphism $f:X\to Y$ of schemes locally of finite type over $k$ whose nonempty fibres have pure dimension $n$; an integral closed subscheme $W\subseteq Y$ with function field $k(W)$ and a rational function $r\in k(W)^*$.

[L1] Under flat ring maps, minimal primes contract to minimal primes by going down. A finite-type domain over a field has dimension equal to the transcendence degree of its fraction field, and transcendence degree is additive in finite field towers. Thus if a component of a flat preimage dominates an integral base $V$, its generic-fibre component of dimension $n$ gives total dimension $\dim V+n$. In the smooth example, relative dimension means that every geometric fibre has the indicated local dimension and smoothness is preserved on fibres ([[def-flat-morphism-schemes]], [[def-scheme-theoretic-fibre]], [[def-dimension-noetherian-topological-space]], [[thm-flat-going-down]], [[thm-affine-domain-dimension-transcendence-degree]], [[cor-transcendence-degree-tower-additivity]], [[def-relative-dimension-smooth-morphism]], [[lem-smooth-fibres-smooth]]).

[L2] $[f^{-1}(W)]$ is the fundamental cycle of the scheme-theoretic preimage, with coefficients the generic lengths; on the reduced components $W_j$ with generic points $\eta_j$ the coefficient is $\ell_{\mathcal O_{X,\eta_j}}(\mathcal O_{f^{-1}(W),\eta_j})$, and flat pullback of cycles is the linear extension of $[V]\mapsto[f^{-1}(V)]$ ([[lem-cycle-of-a-closed-subscheme]], [[def-algebraic-cycle-and-cycle-group]]).

[L3] The order function on a one-dimensional Noetherian local domain is additive, multiplicative and computed by lengths of quotients, and rational equivalence is generated by principal divisor cycles ([[lem-order-function-one-dimensional-local-domain]], [[def-chow-group-of-cycles-mod-rational-equivalence]]).

[L4] For a flat local map $A\to B$ and a finite-length $A$-module $M$, a composition series of $M$ tensored with $B$ over $A$ is a filtration of $B\otimes_AM$ with factors $\kappa(\mathfrak p_i)\otimes_AB$, and length is additive; if the residue-field fibre $B/\mathfrak m_AB$ has finite length $\ell$, the total length is $\ell_A(M)\cdot\ell_B(B/\mathfrak m_AB)$ when both are finite ([[cor-length-is-additive-in-short-exact-sequences]], [[def-flat-morphism-schemes]]). Finite modules over Noetherian rings have prime filtrations ([[thm-prime-filtration-of-a-finite-module]]); localizing such a filtration counts minimal-prime factors by generic length, as used in step 2.1.

[L5] Proper pushforward of cycles descends to Chow groups and if $i:Z\to X$ is a closed immersion then $i_*$ is the induced map on cycles ([[lem-proper-pushforward-of-cycles-well-defined]]).

## Proof

**Proof technique:** compute generic fibre dimensions and generic lengths for the cycle-level pullback, then descend through divisor generators and close with localization.

1.1 Pure dimension. Let $V\subseteq Y$ be integral of dimension $d$ and put $S=f^{-1}(V)$. The base change $S\to V$ is flat and locally of finite type. Each generic point of an irreducible component of $S$ lies over the generic point of $V$: on affine charts, going down makes the contraction of a minimal prime minimal, and $V$ is integral. Choose finite-type affine charts $\operatorname{Spec}A\subseteq V$ and $\operatorname{Spec}B\subseteq S$ meeting such a generic point, with corresponding minimal prime $\mathfrak p\subset B$. Then $\mathfrak p\cap A=(0)$, and $(B/\mathfrak p)\otimes_A\operatorname{Frac}(A)$ is an integral component of the generic fibre. It has dimension $n$ by the pure-fibre hypothesis, so its function field has transcendence degree $n$ over $\operatorname{Frac}(A)$. The affine-domain dimension theorem and transcendence-degree additivity now give $$\dim(B/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(B/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A)+n=\dim A+n=d+n.$$ Every nonempty affine open of an integral locally finite-type $k$-scheme has the same function field and, by the affine-domain dimension theorem, the same dimension. The chain definition of dimension then shows the whole scheme has that dimension: any chain meets an affine neighbourhood of a point in its smallest member, where the intersections remain strict. Applying this to $V$ and to each component of $S$ identifies their global dimensions with the affine calculation above. Thus all components of $f^{-1}(V)$ have dimension $d+n$. If the preimage is empty its fundamental cycle is zero, which belongs to $Z_{d+n}(X)$; otherwise the dimension is $d+n$. In either case its fundamental cycle is a pure $(d+n)$-cycle. [L1, L2, given, algebra]

2.1 Local rings over a divisor. Let $W\subseteq Y$ be integral of dimension $d+1$, let $r=x/y\in k(W)^*$ with nonzero $x,y$ in the one-dimensional local domain $A=\mathcal O_{W,\zeta}$ at a codimension-one point $\zeta$, and put $S=W\times_YX$. For a codimension-one point $\xi$ of $S$ over $\zeta$, set $C=\mathcal O_{S,\xi}$. The local map $A\to C$ is flat, $C$ is one-dimensional, and $x,y$ are nonzerodivisors in $C$. Every minimal prime $\mathfrak p$ of $C$ contracts to $(0)$ in $A$, so $C/\mathfrak p$ is a one-dimensional domain and $r$ maps to its fraction field. The generic length of the corresponding component of $S$ is $n_{\mathfrak p}=\ell_{C_{\mathfrak p}}(C_{\mathfrak p})$. A prime filtration of $C$ has $n_{\mathfrak p}$ factors $C/\mathfrak p$ for each minimal prime and only finite-length factors in addition. [L1, L2, L4, step 1.1, algebra]

3.1 Order calculation on the components. For a nonzerodivisor $x$, let $\chi_x(M)=\ell_C(\operatorname{coker}x)-\ell_C(\ker x)$. This invariant is additive on short exact sequences, vanishes on finite-length factors, and on a one-dimensional domain factor $C/\mathfrak p$ equals $\ell_{C/\mathfrak p}((C/\mathfrak p)/x(C/\mathfrak p))$. Since $x,y$ are injective on $C$, the prime filtration from step 2.1 gives $$\ell_C(C/xC)-\ell_C(C/yC)=\sum_{\mathfrak p}n_{\mathfrak p}\operatorname{ord}_{C/\mathfrak p}(r).$$. [L3, step 2.1, algebra]

4.1 Flat length and divisor identity. The flat local length formula [L4], applied to $A/xA$ and $A/yA$, gives $$\ell_C(C/xC)-\ell_C(C/yC)=\operatorname{ord}_A(r)\,\ell_C(C/\mathfrak m_A C).$$ The last factor is the generic length in the flat pullback of the codimension-one cycle at $\xi$. Thus the coefficient of $f^*(\operatorname{div}_W(r))$ at $\xi$ equals the coefficient of $\sum_j n_j\operatorname{div}_{W_j}(r|_{W_j})$. At the generic point of $W$, $r$ is a unit and both coefficients vanish. Summing over codimension-one points and components proves $$f^*(\operatorname{div}_W(r))=\sum_j n_j\operatorname{div}_{W_j}(r|_{W_j}),$$ with each component pushed to $X$. [L4, L1, L2, L3, step 2.1, step 3.1, algebra]

5.1 Descent to Chow groups. By definition $\operatorname{Rat}_d(Y)$ is generated by the cycles $(i_W)_*\operatorname{div}_W(r)$ for integral $W\subseteq Y$ of dimension $d+1$ and $r\in k(W)^*$. The cycle-level pullback is additive, and step 4.1, applied to the closed immersion of $W$ into $Y$ and its flat base change, sends each generator to a sum of principal divisor cycles on the components of $f^{-1}(W)$. That sum lies in $\operatorname{Rat}_{d+n}(X)$, so $f^*$ descends to $A_d(Y)\to A_{d+n}(X)$. [L2, L3, step 4.1, algebra]

5.2 Functoriality. For the identity morphism the preimage of an integral subscheme is itself. Let $f:X\to Y$ and $g:Y\to T$ be composable flat morphisms of the stated kind. The two scheme-theoretic preimages of an integral $V\subseteq T$ agree, and the fibre dimensions add: $n_{g\circ f}=n_g+n_f$. At a generic point of each top-dimensional component, the pullback coefficient is the length of the corresponding local tensor product; associativity of tensor products and length additivity give the same coefficient for the composite and the two successive pullbacks. Thus $(g\circ f)^*[V]=f^*g^*[V]$ on cycles and on Chow groups. For an open immersion $U\hookrightarrow T$, the intersection of an integral $V\subseteq T$ with $U$ is either empty or a dense open integral subscheme of the same dimension, so pullback is restriction of cycles. [L1, L2, step 4.1, algebra]

6.1 Localization. Let $j:U\hookrightarrow X$ be an open immersion and $i:Z=X\setminus U\hookrightarrow X$ the complementary reduced closed subscheme. A cycle supported on $Z$ restricts to zero. Every integral closed $V\subseteq U$ is a dense open subscheme of its closure $\overline V\subseteq X$, with the same function field, so $j^*[\overline V]=[V]$ and restriction is surjective. If a cycle $\alpha$ represents a class restricting to zero, then as cycles on $U$ it is a finite (or locally finite) sum $\sum_a(i_{V_a})_*\operatorname{div}_{V_a}(r_a)$. The functions extend to the same function fields on the closures $\overline V_a$, and their divisors restrict to the stated divisors on $U$. Hence $$\gamma=\alpha-\sum_a(i_{\overline V_a})_*\operatorname{div}_{\overline V_a}(r_a)$$ restricts to the zero cycle on $U$ and is supported on $Z$. The family of closures is locally finite: for every affine open $N\subseteq X$, the open $N\cap U$ is quasi-compact because $N$ is noetherian. A locally finite family meets a quasi-compact open in only finitely many members, and if $N$ meets $\overline V_a$, then the open set $N$ meets $V_a$. Thus only finitely many closures meet each such $N$. Hence $\gamma=i_*\gamma_Z$ for a (locally finite) cycle on $Z$, proving exactness in the middle. [L1, L2, L5, algebra] ∎

