---
id: thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space
kind: theorem
title: "Every smooth manifold embeds in some finite-dimensional Euclidean space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, lem-compactness-of-a-subspace-is-ambient, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, prop-smoothness-is-local-on-the-source, prop-smooth-maps-are-continuous, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-n-cross-n-countable, def-multidimensional-rectangle-and-volume, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, thm-heine-borel-rn, thm-extreme-value-metric, lem-compact-null-iff-content-zero-in-rn, thm-continuous-partial-derivatives-imply-total-differentiability, thm-mean-value-inequality-for-total-derivatives, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables, def-smooth-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized full compact-band projection and gluing proof under countable choice; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 6.13 and Theorem 6.15, pp.132-135"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Every smooth manifold embeds smoothly in some finite-dimensional Euclidean space. More precisely, for a smooth $n$-manifold $M$ there are a bounded smooth map $G:M\to\mathbb R^{4(2n+1)}$ and a smooth nonnegative proper exhaustion $\rho:M\to\mathbb R$ such that
$$J:M\longrightarrow\mathbb R^{4(2n+1)}\times\mathbb R,\qquad J(p)=(G(p),\rho(p))$$
is a proper smooth embedding. In particular the bounded-plus-proper form is available when $M$ is noncompact.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ and countable choice.

[A1] Countable choice selects countably many nonempty sets of complete witnesses ([[def-countable-choice]]). Below these are chart witnesses, finite band data and finite projection certificates. No dependent choice or uncountable simultaneous selection is used.

[F1] Smooth manifolds are Hausdorff and second countable, with smooth coordinate charts and relatively compact small coordinate balls ([[def-smooth-manifold]], [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]). Smoothness of Euclidean-valued maps is componentwise in charts, including dimension zero ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L1] Under [A1], $M$ has a smooth nonnegative function $\rho$ with compact closed sublevel sets ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[L2] Compact sets in Hausdorff spaces are closed, closed subsets and finite unions of compact sets are compact, and compact subsets admit finite ambient open subcovers ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]]).

[L3] A compact set in an open set admits a smooth $[0,1]$-valued bump equal to one near it and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). Locally finite smooth sums are smooth; smoothness is local and smooth maps are continuous ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]], [[prop-smoothness-is-local-on-the-source]], [[prop-smooth-maps-are-continuous]]).

[L4] Rational coordinates are countable and dense, and finite products of their enumerations are countable by repeated pairing ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[thm-n-cross-n-countable]]).

[L5] A cube of side $\ell$ in $\mathbb R^b$ has volume $\ell^b$, with finite additivity on rectangular grid subdivisions. Nullity means countable closed-cube covers of arbitrarily small total volume; content zero allows finite covers ([[def-multidimensional-rectangle-and-volume]], [[def-null-and-content-zero-in-rn]]). Under [A1], subsets and countable unions of Euclidean null sets are null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[L6] Closed Euclidean boxes are compact, continuous functions on them are bounded, and a compact Euclidean null set has content zero ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[lem-compact-null-iff-content-zero-in-rn]]).

[L7] Continuous partial derivatives give the total derivative; on a convex open set a uniform derivative bound gives a Lipschitz bound ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-mean-value-inequality-for-total-derivatives]]). Coordinate sums, products and quotients with nonzero denominator satisfy the usual derivative rules, so smooth algebraic combinations and their derivative matrices are smooth ([[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] A smooth embedding is an injective immersion that is a homeomorphism onto its image ([[def-smooth-embedding]]).

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, take the empty maps; all conclusions hold. Otherwise choose a countable smooth atlas as follows. Fix a countable topological basis and form all smooth chart tuples. For each nonempty basis member contained in a chart domain, [A1] selects one such tuple. These chart domains cover $M$ because every point lies in a basis member inside some chart. Enumerate them as $(U_j,x_j)$, repeating one if the family is finite. This construction records chart witnesses rather than assuming a countable-atlas theorem with missing choices. [A1, F1, given, construct]

1.2 We first prove a Euclidean estimate for later use. Let $f:D\to\mathbb R^b$ be $C^1$, where $D\subseteq\mathbb R^a$ is open and $0<a<b$. Its domain is covered by the countable family of positive-side rational closed cubes $Q\subseteq D$, by [L4]. For a fixed such cube choose a slightly larger closed cube $Q'$ with $Q\subseteq\operatorname{int}Q'\subseteq Q'\subseteq D$. Compactness and continuity of the finitely many derivative entries bound the derivative norm on $Q'$ by some finite $L\ge1$. Apply [L7] on the convex OPEN set $\operatorname{int}Q'$ to see that $f|_Q$ is $L$-Lipschitz. If $Q$ has side $\ell$, subdividing into $s^a$ cubes gives an image cover by $s^a$ closed $b$-cubes of side $2L\sqrt a\,\ell/s$, centred at images of the prescribed lower corners. Its total volume is $$(2L\sqrt a\,\ell)^b s^{a-b},$$ which tends to zero. Thus $f(Q)$ has content zero. [L4, L5, L6, L7, construct, algebra]

1.3 A nonempty open subset of $\mathbb R^b$, $b\ge1$, is not null. Indeed it contains a positive-side closed cube $Q_0$. If this cube were null, [L6] would give finite cube covers with arbitrarily small total volume. Every finite cube cover of $Q_0$ has total volume at least $\operatorname{vol}(Q_0)$: subdivide a bounding rectangle at all cover-cube and $Q_0$ endpoint coordinates. Each positive-volume cell in $Q_0$ lies in some covering cube, as is seen at its midpoint, and can be assigned to the least such index. By the finite volume additivity in [L5], the sum of volumes assigned to one covering cube is at most its volume, while all cells of $Q_0$ have total volume $\operatorname{vol}(Q_0)>0$. This contradicts content zero. [L5, L6, algebra]

1.4 Choose $\rho\ge0$ from [L1]. For each integer $m\ge1$ set $$K_m=\rho^{-1}([m-1,m+2]),\qquad O_m=\rho^{-1}((m-5/4,m+9/4)).$$ The sets $K_m$ are compact by [L1] and [L2], they cover $M$, and $K_m\subseteq O_m$. The open sets $O_m$ and $O_{m'}$ are disjoint when $m\ne m'$ and $m\equiv m'\pmod4$. The entire family $(O_m)$ is locally finite: the open neighbourhood $\rho^{-1}((\rho(p)-1,\rho(p)+1))$ can meet $O_m$ only for integers $m$ in a bounded real interval, hence only finitely many $m$. [L1, L2, L3, construct, algebra]

2.1 Taking the countable union over those rational cubes and using [L5] shows that $f(D)$ is null. If $a=0<b$, $D$ is empty or a singleton and the same conclusion follows from a degenerate zero-volume cube. In particular this estimate applies to any $C^1$ map on an open subset of $\mathbb R^{2n}$ with values in $\mathbb R^{d-1}$ when $d>2n+1$. It uses only Euclidean cube nullity, not atlas invariance of manifold null sets or an equidimensional Lipschitz theorem on the wrong domain. [L5, step 1.2]

2.2 For a fixed nonempty $K_m$, take all tuples $(U,x,\chi,V)$ in which $(U,x)$ is a relatively compact smooth coordinate ball with $\overline U\subseteq O_m$, $\chi:M\to[0,1]$ is smooth with support in $U$, and $V\subseteq U$ is open with $\chi=1$ on $V$. Their $V$-sets cover $K_m$: at a fixed point choose a small chart and apply [L3] to the compact singleton in its domain. By [L2] there is a finite ordered list of such tuples whose $V$-sets cover $K_m$. This is a finite subcover of the set of ALL eligible data, not a choice of data at every point. [F1, L2, L3, step 1.4]

3.1 We now prove the required projection assertion locally. Let $K\subseteq M$ and let $h:M\to\mathbb R^d$ be smooth, injective on $K$, with $dh_p$ injective for every $p\in K$, where $d>2n+1$. Write $h=(h',h_d)$ with $h'$ taking values in $\mathbb R^{d-1}$. For a parameter $v\in\mathbb R^{d-1}$ define $L_v(z',z_d)=z'-v z_d$. Bad secant parameters are values of $$\frac{h'(q)-h'(p)}{h_d(q)-h_d(p)}$$ wherever the denominator is nonzero. In every chart pair from step 1.1 this is a smooth map on an open subset of $\mathbb R^{2n}$. By steps 2.1 and [L5], its image, united over countably many chart pairs, is null. [L4, L5, L7, step 1.1, step 2.1, construct]

3.2 In a source chart with coordinates $x$, write $h_j=h\circ x_j^{-1}$. Bad tangent parameters are values of $$\frac{Dh'_j(x)w}{Dh_{d,j}(x)w}$$ on the open subset of $(x_j(U_j))\times\mathbb R^n$ where the denominator is nonzero. This is smooth because $h$ is smooth, and its domain has dimension $2n$. Steps 2.1 and [L5] make the union of these images over all chart indices null. Thus the union of bad secant and tangent parameters is null in $\mathbb R^{d-1}$ and cannot be all of it by step 1.3. Choose $v$ outside that union. [L5, L7, step 1.1, step 2.1, step 1.3, choose]

3.3 For one such finite list, define each coordinate-bump block on $U$ by $(\chi,\chi x^1,\ldots,\chi x^n)$ and by zero outside $U$. It is smooth: on the open cover $U$ and $M\setminus\operatorname{supp}\chi$ the formulas are smooth and agree; continuity follows by the same open-cover argument. Concatenate the finitely many blocks into $B_m:M\to\mathbb R^{q_m}$. Its support is contained in a finite union of compact supports inside $O_m$. If $B_m(p)=B_m(q)$ with $p,q\in K_m$, a block whose $\chi$ equals one near $p$ also has $\chi(q)=1$, and equality of its chart coordinates gives $p=q$. At $p\in K_m$ that block's differential includes the invertible chart differential, so $dB_{m,p}$ is injective. [F1, L2, L3, L7, step 2.2, construct]

4.1 The map $L_vh$ is injective on $K$. For if its values at $p,q\in K$ agree and $h_d(p)\ne h_d(q)$, the quotient in step 3.1 equals $v$, a contradiction. If $h_d(p)=h_d(q)$, the equality also gives $h'(p)=h'(q)$, hence $p=q$. Similarly, if $d(L_vh)_p(w)=0$ for $p\in K$ and a tangent vector $w$, a nonzero last component of $dh_p(w)$ would make $v$ a bad tangent parameter. A zero last component forces all of $dh_p(w)$ to be zero, so $w=0$. This proves the immersion property on $K$. Notice that $h$ was never assumed to be a global embedding. [step 3.1, step 3.2, algebra]

4.2 The continuous map $B_m$ is bounded. To see this without assuming a metric on $M$, its compact support is covered by the increasing open sets $\{p:\|B_m(p)\|<r\}$, $r\ge1$ an integer; a finite subcover gives one bound, and $B_m=0$ off the support. Choose the least integer $c_m\ge1$ strictly bounding its norm and set $H_m=2^{-m}c_m^{-1}B_m$. Then $\|H_m\|\le2^{-m}$, its support lies in $O_m$, and it retains both separation properties on $K_m$. If $K_m$ is empty take $H_m=0$ into $\mathbb R$, with the properties vacuous. [L2, L3, step 3.3, construct, algebra]

5.1 Replace $L_v$ by $T_v=(1+\|v\|)^{-1}L_v$. This nonzero rescaling preserves both properties and is a contraction, since $$\|L_v(z',z_d)\|\le\|z'\|+\|v\||z_d|\le(1+\|v\|)\|(z',z_d)\|.$$ Repeat the proved assertion a finite number of times until the target dimension is $D=2n+1$; if the initial dimension is smaller, pad by zero coordinates. Thus every such $h$ has a linear contraction $T$ into $\mathbb R^D$ preserving injectivity and injective differential on $K$. Each finite list of admissible parameters exists by finite induction; no countably dependent selection has been used. [step 3.1, step 3.2, step 4.1, algebra]

6.1 Use [A1] on the countable family of nonempty sets of finite covering lists from step 2.2 to obtain the maps $H_m$ simultaneously. For each resulting $H_m$, step 5.1 supplies a nonempty set of finite projection certificates; a second application of [A1] selects one certificate for each $m$. Let $T_m$ be its contraction into the fixed $\mathbb R^D$, and put $C_m=T_mH_m$. Then $C_m$ is smooth, supported in $O_m$, bounded by $2^{-m}$, injective on $K_m$, and has injective differential there. This explicitly accounts for the countably many variable-length finite projection constructions. [A1, step 5.1, step 2.2, step 3.3, step 4.2, choose]

7.1 For $r=0,1,2,3$ put $$G_r=\sum_{\substack{m\ge1\\m\equiv r\ (4)}}C_m,\qquad G=(G_0,G_1,G_2,G_3).$$ Local finiteness from step 1.4 and [L3] make these maps smooth componentwise. In each colour at most one term is nonzero at any point, by the disjointness of the $O_m$. Thus $\|G_r\|\le1$ and $\|G\|\le2$ on all of $M$. Define $J=(G,\rho)$. [L3, step 1.4, step 6.1, construct, algebra]

8.1 If $J(p)=J(q)$, the equality $\rho(p)=\rho(q)$ puts both points in some common $K_m$, since the intervals defining the $K_m$ cover $[0,\infty)$. On $O_m$ the colour $m\bmod4$ component of $G$ is exactly $C_m$, all other terms of that colour vanishing there. Hence $C_m(p)=C_m(q)$ and step 6.1 gives $p=q$. At a point $p\in K_m$, the same component agrees with $C_m$ on the open neighbourhood $O_m$, so its differential is injective. Therefore $dJ_p$ is injective. This proves that $J$ is an injective immersion. [step 1.4, step 6.1, step 7.1, algebra]

8.2 The map $J$ is proper. For a compact subset $B$ of its Euclidean target, compactness bounds the last coordinate above by some $R$ and makes $B$ closed. Thus $J^{-1}(B)$ is a closed subset of the compact sublevel set $\{\rho\le R\}$, hence compact by [L1] and [L2]. [L1, L2, L3, step 7.1]

9.1 Finally $J$ is a homeomorphism onto its image. Indeed, for a closed subset $A\subseteq M$ and a point $z\notin J(A)$, take the closed Euclidean unit ball $B$ about $z$. By step 8.2 the set $A\cap J^{-1}(B)$ is compact. Its continuous image $C$ is compact: pull back any ambient open cover, take a finite subcover, and map it forward. Thus $C$ is closed by [L2]. The open neighbourhood $\operatorname{int}B\setminus C$ of $z$ misses $J(A)$, showing that $J(A)$ is closed in the ambient Euclidean space. Hence the continuous bijection $J:M\to J(M)$ is closed and has continuous inverse. Together with step 8.1, [F2] makes $J$ a smooth embedding. The bounds in step 7.1 and the exhaustion from step 1.4 give all the claimed bounded-plus-proper conclusions, including the empty case. [F2, L1, L2, L6, step 1.1, step 1.4, step 7.1, step 8.1, step 8.2] ∎
