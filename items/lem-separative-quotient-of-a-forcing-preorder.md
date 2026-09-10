---
id: lem-separative-quotient-of-a-forcing-preorder
kind: lemma
title: Separative quotient and compatibility
status: draft
origin: pipeline
deps: [def-forcing-preorder-compatibility-and-filter, def-equivalence-relation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Karagila, Forcing lecture notes (2023), Proposition 1.5, printed p. 3 (PDF p. 6)"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

For a forcing preorder $(P,\le)$ define $p\le^*q$ if every $r\le p$ is compatible with $q$, and define $p\sim q$ by $p\le^*q$ and $q\le^*p$. Then $\sim$ is an equivalence relation, and $[p]\preceq[q]$ iff $p\le^*q$ gives a well-defined partial order on $P/{\sim}$. It is separative: if $a\npreceq b$, some $c\preceq a$ is incompatible with $b$. The quotient map preserves the original order and preserves and reflects compatibility. For a separative partial order, $\le^*=\le$ and its quotient map is an order isomorphism.

## Facts & Assumptions

[F1] [[def-forcing-preorder-compatibility-and-filter]] defines a nonempty forcing preorder and compatibility by a common stronger condition.

[F2] [[def-equivalence-relation]] defines equivalence relations and their set quotients.

## Proof

**Given:** A nonempty forcing preorder $P$, with smaller conditions stronger.

1.1 If $p\le q$, every $r\le p$ itself witnesses compatibility with $q$; hence $p\le^*q$. In particular $\le^*$ is reflexive. If $p\le^*q\le^*s$ and $r\le p$, take $t\le r,q$ using the first relation. Since $t\le q$, the second relation gives $u\le t,s$. Then $u\le r,s$, proving $r$ compatible with $s$. As $r$ was arbitrary, $p\le^*s$, proving transitivity. Mutual $\le^*$ is therefore reflexive, symmetric and transitive. By F2 its classes form a set. If $p'\sim p$, $q'\sim q$ and $p\le^*q$, transitivity gives $p'\le^*p\le^*q\le^*q'$; the reverse replacement follows by reversing the equivalences. Thus the quotient order is well-defined. Reflexivity and transitivity descend, and mutual quotient inequalities give equal classes by the definition of $\sim$, proving antisymmetry. [F1, F2, algebra]

2.1 If $p,q$ have an original common extension $r$, step 1.1 gives $[r]\preceq[p],[q]$. Conversely, suppose $[r]\preceq[p],[q]$. Since $r\le r$ and $r\le^*p$, take $s\le r,p$. The relation $r\le^*q$ applied to $s\le r$ gives $t\le s,q$, so $t\le p,q$. Thus quotient compatibility is equivalent to original compatibility. In particular incompatibility is also preserved and reflected; no representatives of all classes were selected, only a representative of the one class under discussion. [F1, step 1.1, algebra]

3.1 If $[p]\npreceq[q]$, negating the defining universal statement supplies $r\le p$ incompatible with $q$. Then $[r]\preceq[p]$ by step 1.1 and $[r]$ is incompatible with $[q]$ by step 2.1. This proves separativity. If the original partial order is separative and $p\nleq q$, its separating extension witnesses $p\nleq^*q$; combined with step 1.1 this gives $\le^*=\le$. Antisymmetry then makes each equivalence class a singleton, so the quotient map is an order isomorphism. The quotient is nonempty because $P$ is nonempty. A singleton preorder gives a singleton quotient; no greatest or least condition was used. QED. [F1, F2, step 1.1, step 2.1, algebra]
