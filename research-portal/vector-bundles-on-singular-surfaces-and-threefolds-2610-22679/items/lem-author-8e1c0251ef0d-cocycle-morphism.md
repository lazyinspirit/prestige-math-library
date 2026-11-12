---
id: lem-author-8e1c0251ef0d-cocycle-morphism
kind: lemma
title: Compatible local torsor sections determine an isomorphism
status: published
domain: mathematics
deps:
  - lem-author-8e1c0251ef0d-torsor-cocycle
  - math:def-pullbacks-and-pushouts
dependency_roles:
  lem-author-8e1c0251ef0d-torsor-cocycle: mathematical-premise
  math:def-pullbacks-and-pushouts: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
Let $(\mathcal C,J)$ be a Grothendieck site with fibre products and a terminal object $T$, meaning that every object $V$ has exactly one arrow $V\to T$. Let $G$ be a sheaf of abelian groups and let $P,Q$ be $G$-torsors, with the site, sheaf and left-action conventions recorded below. Suppose a covering family $\{U_i\to T\}$ and sections $p_i\in P(U_i)$ and $q_i\in Q(U_i)$ are given. On $U_{ij}=U_i\times_T U_j$, suppose their transition sections agree: $p_j=g_{ij}p_i$ and $q_j=g_{ij}q_i$ for the same $g_{ij}\in G(U_{ij})$, with all sections restricted along the canonical projections.

Then there is a unique equivariant sheaf isomorphism $\phi:P\to Q$ carrying every $p_i$ to $q_i$. Here an equivariant sheaf morphism means functions $\phi_V:P(V)\to Q(V)$ commuting with every restriction and satisfying $\phi_V(hx)=h\phi_V(x)$ for $h\in G(V)$; an isomorphism has an inverse with these properties.

## Statement references

[[lem-author-8e1c0251ef0d-torsor-cocycle]]

[[math:def-pullbacks-and-pushouts]]

## Facts & Assumptions

**Given:** The site with the stated fibre products and terminal object, the abelian sheaf, the two torsors, the specified covering family and the specified sections with equal transitions. No choice of local sections is asserted.

**Goal:** Construct the unique equivariant sheaf isomorphism taking $p_i$ to $q_i$.

[F1] A torsor is a sheaf of sets with a restriction-compatible left $G$-action, locally nonempty and simply transitive on each nonempty section set. In particular, relative to a specified section $p\in P(W)$, each $x\in P(W)$ has a unique expression $x=gp$ with $g\in G(W)$. The action, restriction laws and transition convention are those of [[lem-author-8e1c0251ef0d-torsor-cocycle]].

[F2] Use the site and sheaf definitions explicitly given in [[lem-author-8e1c0251ef0d-torsor-cocycle]]: a sieve is closed under precomposition, and a family is covering when its generated sieve (the arrows factoring through its members) covers. Pullbacks of covering sieves cover. A presheaf $F$ assigns restriction maps to arrows, contravariantly and functorially. The sheaf condition says that, for a covering sieve $R$ on $V$, any family $y_f\in F(\operatorname{dom}f)$ indexed by $f\in R$ with $y_{fk}=y_f|_k$ is the restriction family of exactly one $y\in F(V)$.

[F3] Fibre products and their canonical projections satisfy the universal property in [[math:def-pullbacks-and-pushouts]]. Thus two arrows from $W$ to $U_i,U_j$ over $T$ give a unique arrow $W\to U_{ij}$. Likewise, for each $V$, arrows $W\to V$ factoring through $V\times_T U_i\to V$ are exactly those whose composite to $T$ factors through $U_i\to T$; hence this family generates the pullback of the given covering sieve and is covering by [F2].

## Proof

1.1 For each arrow $a:W\to U_i$, define $\phi_{i,a}:P(W)\to Q(W)$ by $\phi_{i,a}(gp_i|_a)=gq_i|_a$. The unique coefficient in [F1] makes this a well-defined bijection; the reverse formula exchanges $p_i$ and $q_i$. The action laws make both maps equivariant, and restriction preserves the unique coefficient, so these local maps commute with every restriction. If $W$ maps to both $U_i$ and $U_j$, use [F3] to restrict $g_{ij}$ to $W$. For $x=rp_i=s p_j$, suppressing restrictions, $p_j=g_{ij}p_i$ gives $r=sg_{ij}$ by simple transitivity. Consequently $rq_i=sg_{ij}q_i=sq_j$. The two local maps therefore agree on every such common test object, and the same argument applies to their inverses. [given, F1, F3, construct]

2.1 Fix $V$ and $x\in P(V)$. By [F3], the family $V\times_T U_i\to V$ generates a covering sieve $R_V$. For $f:W\to V$ in this sieve, use any factorization through a member of this family and apply its local map from step 1.1 to $x|_f$. All factorizations give the same element $y_f\in Q(W)$ by the common-test-object agreement in step 1.1; thus these values are uniquely specified without choosing representatives. Compatibility with further restriction follows from that step as well. The sheaf condition [F2] gives a unique amalgamation $\phi_V(x)\in Q(V)$. Uniqueness of amalgamation shows that these functions commute with restriction and the $G$-action, since both required identities hold on the pulled-back covering sieve by step 1.1. Exchanging $P,Q$ gives morphisms $\psi_V$, and the composites are identities because they are identities on this sieve; hence $\phi$ is an equivariant sheaf isomorphism. Its restriction to each $U_i$ is the local map of step 1.1, so $\phi_{U_i}(p_i)=q_i$. Any equivariant sheaf morphism with these specified values agrees with those local maps by the unique-coefficient formula [F1]; for each test section it therefore agrees with $\phi$ on $R_V$, and sheaf uniqueness makes it equal to $\phi$ globally. [F1, F2, F3, step 1.1, construct] ∎
