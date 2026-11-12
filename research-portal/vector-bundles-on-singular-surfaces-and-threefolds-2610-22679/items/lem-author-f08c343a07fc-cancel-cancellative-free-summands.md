---
id: lem-author-f08c343a07fc-cancel-cancellative-free-summands
kind: lemma
title: Common projective complements and cancellation by free modules
status: published
domain: mathematics
deps:
  - lem-finite-projective-complements
  - math:def-commutative-ring
  - math:def-left-and-right-modules
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-direct-sum-of-a-family-of-modules
dependency_roles:
  lem-finite-projective-complements: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-direct-sum-of-a-family-of-modules: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement
Let $A$ be a commutative ring with unit. Call a finite projective $A$-module $P$ cancellative if, for every finite projective $Q$ and every integer $N\geq0$, $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$. This is equivalent to cancellation of an arbitrary common finite projective summand: for every finite projective $Q,T$, $P\oplus T\cong Q\oplus T$ implies $P\cong Q$.

All modules are unital left $A$-modules. A module is finitely generated if a finite list of its elements generates it by $A$-linear combinations. A finite projective module is a finitely generated module $M$ such that, for every surjective module homomorphism $h:U\to V$ and every module homomorphism $f:M\to V$, there is a module homomorphism $g:M\to U$ with $hg=f$. The module $A^N$ consists of $N$-tuples with coordinatewise operations, and $A^0=0$. The binary direct sum $M\oplus L$ is the module of pairs with coordinatewise operations; $\cong$ means a bijective module homomorphism.

## Facts & Assumptions

**Given:** A commutative unital ring $A$ and a finite projective $A$-module $P$, with the two cancellation conditions formulated in the statement.

**Goal:** Prove that the two conditions are equivalent, without assuming the Axiom of Choice.

[F1] The choice-free module clause states that every finite projective $T$ has a finite projective complement $T'$ with $T\oplus T'\cong A^N$ for some integer $N\geq0$. The finite-projective lifting convention is the one stated there. [[lem-finite-projective-complements]]

[F2] We use commutative unital rings, unital left modules, and module homomorphisms and isomorphisms with the definitions in [[math:def-commutative-ring]], [[math:def-left-and-right-modules]] and [[math:def-module-homomorphism-kernel-image-and-cokernel]].

[F3] The binary direct sum in the statement is the two-index case of the finite-support construction in [[math:def-direct-sum-of-a-family-of-modules]]. The tuple module $A^N$ has standard coordinate vectors $e_1,\ldots,e_N$; every tuple $(a_1,\ldots,a_N)$ equals $\sum_{i=1}^N a_i e_i$ uniquely, with the empty sum interpreted as zero.

## Proof

1.1 Suppose $P$ satisfies free-summand cancellation and $\alpha:P\oplus T\to Q\oplus T$ is an isomorphism for finite projective $Q,T$. By [F1], choose $T'$ and an isomorphism $\beta:T\oplus T'\to A^N$. Rebracketing by $((m,t),t')\mapsto(m,(t,t'))$ is a module isomorphism, with inverse $(m,(t,t'))\mapsto((m,t),t')$. Also, adjoining the identity of $T'$ to $\alpha$ gives the isomorphism $(x,t')\mapsto(\alpha(x),t')$, whose inverse uses $\alpha^{-1}$. Rebracket its domain and codomain and apply $\beta$ to their second factors to obtain $P\oplus A^N\cong Q\oplus A^N$. The assumed free-summand cancellation therefore yields $P\cong Q$. [F1, F2, F3, given, construct]

2.1 Conversely suppose $P$ cancels every common finite projective summand. The coordinate vectors generate $A^N$. For any surjective module homomorphism $h:U\to V$ and homomorphism $f:A^N\to V$, choose in finitely many successive steps elements $u_i\in U$ with $h(u_i)=f(e_i)$. The formula $g(a_1,\ldots,a_N)=\sum_{i=1}^N a_i u_i$ defines a homomorphism by the module axioms, and $hg=f$ by the coordinate expansion in [F3]. If $N=0$, the generating list is empty and the unique map from $0$ is the required lift. Thus $A^N$ is finite projective for every $N\geq0$, using no arbitrary choice. Taking $T=A^N$ in the assumed common-summand cancellation proves free-summand cancellation. Together with step 1.1 this establishes the asserted equivalence and the stated meaning of cancellative. [F2, F3, given, construct, step 1.1] ∎
