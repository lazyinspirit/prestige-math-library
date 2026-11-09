---
id: lem-author-1437578267d2-boundary-norm
kind: lemma
title: Endpoint boundaries are norm divisors
status: published
domain: mathematics
deps:
  - lem-author-1437578267d2-supported-degrees
  - lem-author-1437578267d2-length-orders
  - thm-author-1437578267d2-curve-norm-input
  - math:thm-projective-morphism-proper
  - math:thm-dimension-formula-for-affine-domains
  - math:def-axiom-of-choice
  - lem-algebraically-closed-residue-fields
dependency_roles:
  lem-author-1437578267d2-supported-degrees: mathematical-premise
  lem-author-1437578267d2-length-orders: mathematical-premise
  thm-author-1437578267d2-curve-norm-input: mathematical-premise
  math:thm-projective-morphism-proper: mathematical-premise
  math:thm-dimension-formula-for-affine-domains: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-algebraically-closed-residue-fields: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 9
---

## Statement
Assume AC. Let $T$ be an integral finite-type curve over an algebraically closed field and let $B_1(T)$ and $b$ have the endpoint conventions of [[lem-author-1437578267d2-supported-degrees]]. For a generator $W$, if $W\to T$ is not dominant then $b[W]=0$. Otherwise, with $K=k(T)$ and $L=k(W)$, the extension $L/K$ is finite and
$$b[W]=\operatorname{div}_T\!\left(\operatorname{Nm}_{L/K}((s-1)/s)\right).$$
In particular every boundary is a principal zero-cycle, including at singular points of $T$.

## Facts & Assumptions
**Given:** AC, $T$ and a generator $W$ as stated.

**Goal:** Calculate its boundary as a principal divisor.

[F1] The boundary is the difference of endpoint cycles with local quotient-length coefficients. [[lem-author-1437578267d2-supported-degrees]]

[F2] Length orders are additive, agree with quotient lengths for regular functions, and vanish on units. [[lem-author-1437578267d2-length-orders]]

[F3] Proper dominant morphisms of integral finite-type curves satisfy pushforward of principal divisors equals the divisor of the field norm, with residue-degree weights. [[thm-author-1437578267d2-curve-norm-input]]

[F4] A closed subscheme of $\mathbb P^1_T$ is proper over $T$; a dominant morphism of integral finite-type curves induces a finite function-field extension. [[math:thm-projective-morphism-proper]], [[math:thm-dimension-formula-for-affine-domains]], [[math:def-axiom-of-choice]]

[F5] Closed points of finite-type schemes over the algebraically closed field have residue field $k$. [[lem-algebraically-closed-residue-fields]]

## Proof
1.1 If the projection is not dominant, the image closure is a closed point $x$. Reducedness makes $W$ factor through $\{x\}\times\mathbb A^1$; since $\kappa(x)=k$, the only integral closed one-dimensional subscheme there is the whole affine line. Both endpoint lengths are one, so its boundary is zero. [F1, F4, F5, given]

1.2 Otherwise let $C$ be the reduced closure of $W$ in $T\times\mathbb P^1$. It is an integral curve, proper and dominant over $T$, with function field $L$ finite over $K$. Its intersection with $T\times\mathbb A^1$ is $W$. Admissibility implies $s\ne0,1$ in $L$, so $g=(s-1)/s\in L^\times$. [F1, F4, given, construct]

2.1 At $s=1$, $s$ is a unit and the order of $g$ is the length of the quotient by $s-1$; at $s=0$ it is minus the length of the quotient by $s$. Away from the endpoints in $W$, $g$ is a unit. At infinity, with $u=1/s$, it equals $1-u$ and is a unit. Endpoint projection is an isomorphism onto $T$, so the residue-degree weights there are one. Consequently $p_*\operatorname{div}_C(g)=b[W]$ coefficient by coefficient. [F1, F2, step 1.2, algebra]

3.1 Apply [F3] to $C\to T$ and $g$. Together with steps 1.1 and 2.1, and additivity of the divisor map, this proves both assertions. [F2, F3, step 1.1, step 1.2, step 2.1] ∎
