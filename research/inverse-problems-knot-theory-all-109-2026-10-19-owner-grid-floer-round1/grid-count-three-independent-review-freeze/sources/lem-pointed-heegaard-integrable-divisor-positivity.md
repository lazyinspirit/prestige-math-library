---
id: lem-pointed-heegaard-integrable-divisor-positivity
kind: lemma
title: "Marked-divisor positivity for strips with an integrable neighborhood"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-admissible-pointed-heegaard-floer-data, thm-zero-order-factorization-holomorphic-function]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, Lemma 3.2"
      url: "https://arxiv.org/pdf/math/0101206"
---

## Statement

Let $\Sigma$ be a closed Riemann surface, $m\ge1$, and $p\in\Sigma$. In the complex symmetric product $X=\operatorname{Sym}^m(\Sigma)$ let $E_p=\{p\}+\operatorname{Sym}^{m-1}(\Sigma)$. Let $L_0,L_1\subset X$ be compact submanifolds disjoint from $E_p$. Suppose $J_t$ agrees with the fixed complex structure of $X$ on one neighborhood of $E_p$ for every $t\in[0,1]$. Let $u:\mathbb R\times[0,1]\to X$ be a smooth solution of $\partial_\tau u+J_t(u)\partial_tu=0$, with boundary on $L_0,L_1$ and uniform limits as $\tau\to\pm\infty$ at points of $L_0\cap L_1$.

The intersections of $u$ with $E_p$ are a finite collection of interior points, each with positive integral local intersection multiplicity. Their sum is nonnegative, and it is zero exactly when $u$ avoids $E_p$. In pointed Heegaard data, with $L_0,L_1$ the product tori and $p$ any marked point, this proves nonnegativity of the domain multiplicity $n_p(u)$ whenever it is defined by intersection with $E_p$.

## Statement references

[[def-admissible-pointed-heegaard-floer-data]]

## Facts & Assumptions

**Given:** The surface, symmetric product, divisor, boundary submanifolds, path, and strip in the statement.

[F1] A scalar holomorphic function at a zero either vanishes on a neighborhood or has a factorization $f(z)=(z-a)^r g(z)$ with $r\ge1$ and $g(a)\ne0$, by [[thm-zero-order-factorization-holomorphic-function]].

## Proof

1.1 The divisor $E_p$ is a smooth complex hypersurface, including at tuples with repeated entries. To check this, choose pairwise disjoint coordinate disks about the distinct entries of a tuple, and use in each cluster the elementary symmetric functions of its local coordinates as coordinates on the corresponding symmetric power. This coordinate description follows directly by associating an unordered tuple to the coefficients of its monic polynomial; conversely its roots, counted with multiplicity, recover the tuple. In the cluster containing $p$, choose its coordinate to put $p$ at zero. The condition that a root be zero is the vanishing of the constant coefficient, which is one of these complex coordinates. Thus near every point of $E_p$ there is a holomorphic coordinate function $h$ with nonvanishing differential such that $E_p=\{h=0\}$. [given, construct, algebra]

2.1 On a small interior disk mapped into such a neighborhood, $f=h\circ u$ is scalar holomorphic. In fact the equation there is $u_t=J_0u_\tau$; holomorphicity of $h$ gives $f_t=i f_\tau$, the ordinary Cauchy–Riemann equation for the coordinate $\tau+it$. The set of interior points having a neighborhood mapped entirely into $E_p$ is open and closed in the connected strip interior. For closedness, at a limit point use one defining coordinate $h$ on a small disk. If the limit point is not already in that set, [F1] makes its zero isolated, contradicting the presence of nearby open zero neighborhoods. The entire interior cannot map into $E_p$, since continuity would put the boundary in the closed set $E_p$, whereas $L_0,L_1$ avoid it. Thus the set is empty, and [F1] makes every intersection isolated with a positive finite zero order. [step 1.1, F1, given]

3.1 All intersections lie in a compact subset of the strip interior. Uniform convergence at both ends, and the fact that both limit points avoid the closed divisor, exclude sufficiently long ends. On the remaining compact rectangle, its two boundary edges have compact image disjoint from $E_p$, so continuity excludes a neighborhood of those edges. The remaining preimage of $E_p$ is closed in a compact interior rectangle. An infinite subset would have an accumulation point there, contradicting isolation in step 2.1. Hence there are finitely many intersections. [step 2.1, given]

4.1 At one such intersection, write $h\circ u=(z-a)^r g(z)$ as in [F1], with $g$ nonzero on a small closed disk. The local intersection number is the winding number of $h\circ u$ on its positively oriented boundary in the oriented complex normal line to $E_p$. This is $r$: the factor $(z-a)^r$ winds $r$ times, while $g$ has winding zero because its nonvanishing extension over the disk contracts its boundary loop. Replacing $h$ by another holomorphic defining function multiplies it by a nowhere-zero holomorphic function, which has winding zero by the same argument. Thus the intersection multiplicity is intrinsic and positive. The finite sum is zero exactly when the intersection set is empty. The marked-point domain coefficient defined by this intersection number is that sum. [step 2.1, step 3.1, F1, algebra] ∎
