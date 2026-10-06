---
id: lem-chow-localization-and-vector-bundle-homotopy
kind: lemma
title: "Localization sequence for Chow groups and homotopy invariance of affine space"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-algebraic-cycle-and-cycle-group
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - lem-flat-pullback-chow-groups
  - lem-order-function-one-dimensional-local-domain
  - lem-proper-pushforward-of-cycles-well-defined
  - lem-two-dimensional-tame-symbol-reciprocity
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
    - title: "The Stacks Project, Chow Homology and Chern Classes, Lemma 42.19.3 (tag 02RX), Section 42.32 (affine bundles, tag 02TS) and Section 42.36 (tag 02TW)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Lemma 42.19.3 (localization), Section 42.32 (homotopy invariance for affine bundles) and Section 42.36"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 4 and Class 6"
      url: "https://math.stanford.edu/~vakil/245/245class4.pdf"
      locator: "Class 4: the localization sequence; Class 6 (§2): homotopy invariance"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. For a closed immersion
$j:Z\hookrightarrow T$ with complement $u:U\hookrightarrow T$,
$A_m(Z)\xrightarrow{j_*}A_m(T)\xrightarrow{u^*}A_m(U)\to0$ is exact. Projection
$T\times\mathbb A^r\to T$ gives an isomorphism
$A_m(T)\cong A_{m+r}(T\times\mathbb A^r)$. These statements hold for finite type
schemes over a field and locally finite cycles on locally finite type schemes.

## Facts & Assumptions

**Given:** the Axiom of Choice; a closed immersion $j:Z\hookrightarrow T$ with open complement $u:U\hookrightarrow T$; a field $k$ over which $T$ is locally of finite type; the projection $\pi:T\times\mathbb A^r\to T$.

[L1] Cycles, rational equivalence and the Chow group are as in [[def-chow-group-of-cycles-mod-rational-equivalence]] and [[def-algebraic-cycle-and-cycle-group]]; the order function defines divisors of rational functions on integral subschemes ([[lem-order-function-one-dimensional-local-domain]]).

[L2] The closed immersion $j$ is proper, so $j_*$ is defined on cycles and descends to Chow groups; the open immersion $u$ is flat of relative dimension $0$, so $u^*$ is restriction of cycles ([[lem-proper-pushforward-of-cycles-well-defined]], [[lem-flat-pullback-chow-groups]]).

[L3] The projection $\pi$ is flat of relative dimension $r$ with fibres $\mathbb A^r$, so $\pi^*:A_m(T)\to A_{m+r}(T\times\mathbb A^r)$ is defined ([[lem-flat-pullback-chow-groups]]).

[L4] The two-dimensional tame-symbol reciprocity identity makes Cartier Gysin along a regular Cartier divisor well defined on Chow groups; in particular, intersection with $t=0$ annihilates rational-equivalence generators ([[lem-two-dimensional-tame-symbol-reciprocity]]).

## Proof

**Proof technique:** lift cycles by closure for localization; for affine-space homotopy, use minimal polynomials for surjectivity and Cartier Gysin of the zero section for a left inverse.

1.1 Localization. The composite $u^*j_*$ is zero because a cycle supported on $Z$ restricts to zero on $U$. Every integral closed $V\subseteq U$ is a dense open subscheme of its closure $\overline V\subseteq T$, with the same function field, so $u^*[\overline V]=[V]$ and $u^*$ is surjective. If a cycle $\alpha$ represents a class whose restriction to $A_*(U)$ is zero, then as cycles on $U$ it is a finite (or locally finite) sum $$u^*\alpha=\sum_a(i_{V_a})_*\operatorname{div}_{V_a}(r_a).$$ The functions extend to the same function fields on the closures $\overline V_a$, and their divisors restrict to the displayed divisors on $U$. Hence $$\gamma=\alpha-\sum_a(i_{\overline V_a})_*\operatorname{div}_{\overline V_a}(r_a)$$ restricts to the zero cycle on $U$ and is supported on $Z$. The family of closures is locally finite: for every affine open $N\subseteq T$, the open $N\cap U$ is quasi-compact because $N$ is noetherian; a locally finite family meets a quasi-compact open in only finitely many members, and if $N$ meets $\overline V_a$, then openness of $N$ implies it meets $V_a$. Thus only finitely many closures meet each such $N$, and $\gamma=j_*\gamma_Z$ for a (locally finite) cycle $\gamma_Z$ on $Z$. This proves exactness in the middle, also for locally finite cycles. [L1, L2, given, algebra]

2.1 Surjectivity for $\mathbb A^1$. Let $V\subseteq T\times\mathbb A^1$ be integral of dimension $m+1$, let $W=\overline{\pi(V)}$, and write $t$ for the coordinate. Since the fibres of $\pi$ have dimension one, $\dim W$ is either $m$ or $m+1$. If $\dim W=m$, the generic fibre of $V\to W$ is a closed integral subscheme of dimension one in $\mathbb A^1_{k(W)}$, hence is the whole affine line; because $V$ is closed and has the same dimension as $W\times\mathbb A^1$, it follows that $V=W\times\mathbb A^1$ and $[V]=\pi^*[W]$. If $\dim W=m+1$, the generic fibre is a closed point of $\mathbb A^1_{k(W)}$, cut out by its monic irreducible polynomial $P(t)\in k(W)[t]$. After shrinking to a dense open $W^\circ\subseteq W$, the coefficients of $P$ are regular and the ideal of $V\cap(W^\circ\times\mathbb A^1)$ is generated by $P$: equality with this principal ideal holds over the generic point and spreads after shrinking because the ideals are finitely generated. The monic equation makes this zero scheme finite flat over $W^\circ$, so it has no vertical codimension-one components; its generic fiber is integral, hence its only component is $V|_{W^\circ}$ with multiplicity one. Thus $[V|_{W^\circ}]$ is the principal divisor of $P$ and is rationally equivalent to zero on $W^\circ\times\mathbb A^1$. By localization, $[V]$ is rationally equivalent to a cycle supported over $W\setminus W^\circ$. Each integral component $C$ of that cycle has dimension $m+1$ and image closure $W'\subseteq W\setminus W^\circ$ of dimension at most $m$. The fibres of $C\to W'$ have dimension at most one, so $\dim W'=m$ and the generic fibre is the whole affine line; since $C$ is closed in the integral scheme $W'\times\mathbb A^1$ and has its full dimension, $C=W'\times\mathbb A^1$. Each resulting cycle is therefore a pullback $\pi^*[W']$. For a locally finite family of input components $V$, the closures $W$ are locally finite: if a quasi-compact open $N\subseteq T$ meets $W=\overline{\pi(V)}$, then $V$ meets $\pi^{-1}(N)$, a quasi-compact open, so only finitely many input components contribute. Each individual divisor and closure construction is locally finite, so the resulting pullback and residual cycles are locally finite. For the residual components $C=W'\times\mathbb A^1$, local finiteness also follows because $W'$ meets $N$ exactly when $C$ meets the zero-section copy of $N$. Iterating over the $r$ coordinates gives surjectivity for $\mathbb A^r$. [L1, L3, step 1.1, algebra]

3.1 Injectivity for $\mathbb A^1$. Let $\sigma:T\to T\times\mathbb A^1$ be the zero section and $D=T\times\{0\}$. For an integral $(m+1)$-dimensional $V\subseteq T\times\mathbb A^1$ not contained in $D$, define $\sigma^![V]$ to be the pushforward to $T$ of $\operatorname{div}_V(t)$; this divisor is supported on $V\cap D$. If $V\subseteq D$, set $\sigma^![V]=0$: this is the Cartier Gysin value because the normal line of $D$ is trivial and the first Chern class of the trivial line bundle is zero. Extend additively to cycles. The two-dimensional tame-symbol reciprocity in [L4] says that Cartier Gysin along $D$ sends each principal-divisor relation on an integral $(m+2)$-dimensional subscheme to a rationally trivial $m$-cycle: its local terms are divisors of the tame symbols on the curve components of the intersection with $D$. Thus $\sigma^!$ annihilates rational equivalence and descends to Chow groups. For an integral $V\subseteq T$, the coordinate is a nonzerodivisor on $V\times\mathbb A^1$ and $$\operatorname{div}_{V\times\mathbb A^1}(t)=[V\times\{0\}],$$ so $\sigma^!\pi^*[V]=[V]$. Therefore $\sigma^!$ is a left inverse of $\pi^*$ and $\pi^*$ is injective. Together with step 2.1, this proves $A_m(T)\cong A_{m+1}(T\times\mathbb A^1)$; iteration over the $r$ coordinates gives $A_m(T)\cong A_{m+r}(T\times\mathbb A^r)$. [L1, L3, L4, step 2.1, algebra] ∎

