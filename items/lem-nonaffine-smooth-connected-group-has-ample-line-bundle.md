---
id: lem-nonaffine-smooth-connected-group-has-ample-line-bundle
kind: lemma
title: "A smooth geometrically integral algebraic group has an ample line bundle"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-smooth-affine-open-cartier-boundary, lem-nonaffine-line-bundle-affine-space-parameter-constancy, lem-nonaffine-ample-line-bundle-field-descent, thm-smooth-local-standard-form, thm-nonaffine-regular-local-ring-is-ufd, thm-cartier-weil-isomorphism-locally-factorial, cor-finite-flat-noetherian-modules-are-projective, thm-existence-of-algebraic-closures, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, def-ample-invertible-sheaf]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 39.8.7, smooth connected case and etale divisor family construction"
      url: https://stacks.math.columbia.edu/tag/0BF7
    - title: "Stacks Project, Lemma 33.30.5"
      url: https://stacks.math.columbia.edu/tag/0BEH
---

## Statement

Assume the Axiom of Choice. A smooth geometrically integral separated finite-type group scheme $G$ over any field $k$ has an ample invertible sheaf.

## Facts & Assumptions

[F1] A nonempty affine open in a smooth integral separated variety is the complement of an effective Cartier divisor. ([[lem-nonaffine-smooth-affine-open-cartier-boundary]])

[F2] Smooth maps have étale local affine-space charts, and finite flat modules over Noetherian rings are projective. ([[thm-smooth-local-standard-form]], [[cor-finite-flat-noetherian-modules-are-projective]])

[F3] Smooth schemes are locally factorial and their Weil divisors are Cartier. Every line bundle on a product of a smooth geometrically integral variety and a nonempty open of affine space comes from that variety. ([[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-cartier-weil-isomorphism-locally-factorial]], [[lem-nonaffine-line-bundle-affine-space-parameter-constancy]])

[F4] Ampleness of a given invertible sheaf descends from a field extension. Algebraic closures exist under AC, and nonempty opens of finite-type schemes over an algebraically closed field have rational closed points. ([[lem-nonaffine-ample-line-bundle-field-descent]], [[thm-existence-of-algebraic-closures]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

[F5] An invertible sheaf is ample when positive-power section nonvanishing loci which are affine cover the scheme. ([[def-ample-invertible-sheaf]])

## Proof

**Given:** AC and $G/k$ as in the statement.

1.1 Choose a nonempty affine open $U_0\subset G$ and let $D$ be the effective Cartier boundary supplied by [F1]. Products in the group show that multiplication $m:G\times G\to G$ is smooth: the isomorphism $(g,h)\mapsto(gh,h)$ changes it into the smooth first projection. Put $d=\dim G$. Choose by [F2] a nonempty affine open $U\subset G$ with an étale map $U\to\mathbf A^d_k$. The map is dominant because an étale map is open. If $B$ is its coordinate ring and $A=k[t_1,\ldots,t_d]$, then $B\otimes_A k(t_1,\ldots,t_d)$ is a finite-dimensional algebra over this function field: it is finite type and étale of dimension zero. Its finitely many algebra generators satisfy monic polynomial equations over that field. Clear the finitely many coefficient denominators, obtaining a nonempty principal open $V\subset\mathbf A^d$ such that $W=U\times_{\mathbf A^d}V\to V$ is finite étale. It is surjective after further shrinking to its nonempty image. Its degree is a positive constant $r$, because it is finite flat over the integral $V$ and [F2] makes the finite module locally free. Denote this map by $\pi$ and the open immersion into $G$ by $j:W\to G$. [F1, F2, given, construct]

2.1 Pull $D$ back by $(g,w)\mapsto gj(w)$ on $G\times W$ and let $T$ be its image under the finite étale map $1\times\pi:G\times W\to G\times V$. This image is closed. Every component of the pulled-back divisor has codimension one, since multiplication is smooth; a finite locally free map between these equidimensional smooth varieties preserves the dimension of each component, so every component of $T$ has codimension one. Take the sum of these prime divisors with coefficient one; by [F3] it is an effective Cartier divisor $E$ with support $T$. For every geometric $v\in V$, its support in the fibre $G\times\{v\}$ is $\bigcup_{w\in\pi^{-1}(v)}D j(w)^{-1}$, by the definition of the image under a finite map. This finite union of proper closed subsets does not equal the geometrically integral $G$. Consequently restriction of $E$ to that fibre is an effective Cartier divisor (its local equation is nonzero in the integral fibre), with precisely that support. [F2, F3, step 1.1, construct]

3.1 Apply [F3] to $\mathcal O(E)$ on $G\times V$, obtaining an invertible sheaf $L$ on $G$ and an isomorphism $\mathcal O(E)\cong\operatorname{pr}_G^*L$. Extend to an algebraic closure $\bar k$ using [F4]. For each $v\in V(\bar k)$, the canonical section of the effective divisor $E_v$ therefore gives a section of $L_{\bar k}$, with nonvanishing locus $G_{\bar k}\setminus\bigcup_{w\in\pi^{-1}(v)}D_{\bar k}j(w)^{-1}$. This is affine: it is the intersection of the finitely many affine opens $(G\setminus D)j(w)^{-1}$ in the separated scheme $G_{\bar k}$. Such intersections are affine by the closed-diagonal argument. [F3, F4, step 1.1, step 2.1, algebra]

4.1 Fix $g\in G(\bar k)$. The open subset $W'\subset W_{\bar k}$ of $w$ for which $gj(w)\notin D_{\bar k}$ is nonempty: $j(W)$ is a nonempty open of the irreducible group, and intersects $g^{-1}(G\setminus D)$. Its complement has dimension at most $d-1$, so its image under the finite map $\pi$ is closed of dimension at most $d-1$ in the $d$-dimensional $V_{\bar k}$. A rational point $v$ outside that image exists by [F4]. Its entire fibre lies in $W'$, so $g\notin E_v$. Thus the affine section nonvanishing loci of step 3.1 contain every closed point of $G_{\bar k}$ and hence cover it: a nonempty closed complement would contain a closed point by [F4]. By [F5], $L_{\bar k}$ is ample, and [F4] then gives ampleness of $L$. For $d=0$, geometric integrality and the rational identity imply $G=\operatorname{Spec}k$ and $\mathcal O_G$ is ample directly; this also covers the zero-divisor-boundary case. AC is carried through [F1]–[F4]. [F1, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
