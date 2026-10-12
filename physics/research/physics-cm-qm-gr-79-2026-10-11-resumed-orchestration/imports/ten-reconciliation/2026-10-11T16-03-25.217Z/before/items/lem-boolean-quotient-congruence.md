---
id: lem-boolean-quotient-congruence
kind: lemma
title: Quotient operations are well defined
status: published
origin: pipeline
deps: [def-boolean-homomorphism-and-quotient]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.1.1 and 2.3.1 (Boolean laws); local quotient calculation"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

For every ideal $I$ in a Boolean algebra $B$, the relation $\sim_I$ is an equivalence and a congruence. The stated operations make $B/I$ Boolean. The quotient map $q(a)=[a]$ is a surjective homomorphism with kernel $I$. For every Boolean homomorphism $h:B\to C$ with $h[I]=\{0\}$ there is exactly one Boolean homomorphism $\bar h:B/I\to C$ satisfying $\bar hq=h$. All assertions hold in ZF, including $I=B$.

## Facts & Assumptions

[F1] [[def-boolean-homomorphism-and-quotient]] defines $\triangle$, $\sim_I$, the class operations and bound-preserving homomorphisms.

## Proof

**Given:** A Boolean algebra $B$, an ideal $I\subseteq B$, and the definitions in F1.

1.1 For $a,b,c\in B$, split $a\wedge\neg c$ by $b\vee\neg b=1$. Its two pieces lie respectively below $b\wedge\neg c$ and $a\wedge\neg b$. Split $c\wedge\neg a$ the same way. Joining these four inequalities gives $a\triangle c\le(a\triangle b)\vee(b\triangle c)$. Also $a\triangle a=0$ and $a\triangle b=b\triangle a$. Since an ideal contains $0$, is downward closed and is closed under joins, these identities prove reflexivity, symmetry and transitivity of $\sim_I$. [F1, algebra]

1.2 For $a,b,c,d\in B$, expand $(a\wedge c)\wedge\neg(b\wedge d)$ using $\neg(b\wedge d)=\neg b\vee\neg d$. The resulting pieces lie below $a\wedge\neg b$ and $c\wedge\neg d$. The reverse difference has pieces below $b\wedge\neg a$ and $d\wedge\neg c$. Hence $(a\wedge c)\triangle(b\wedge d)\le(a\triangle b)\vee(c\triangle d)$. Moreover $(\neg a)\triangle(\neg b)=a\triangle b$. Thus equivalent inputs give equivalent meets and complements; the identity $a\vee c=\neg(\neg a\wedge\neg c)$ gives the same for joins. [F1, algebra]

2.1 Steps 1.1 and 1.2 make every proposed operation a function on classes. Each Boolean identity in the quotient is the class of that identity in $B$, so the quotient is Boolean. The map $q$ preserves each operation by its definition and is onto because every class has the form $[a]$. Finally $[a]=[0]$ if and only if $a\triangle0=a\in I$, proving the kernel assertion. If $I=B$, every pair is equivalent and the quotient has one element. [F1, step 1.1, step 1.2, algebra]

3.1 Let $h$ be as in the statement. If $a\sim_I b$, preservation of the operations gives $h(a)\triangle h(b)=h(a\triangle b)=0$. For any Boolean elements $u,v$, $u\triangle v=0$ implies $u\wedge\neg v=v\wedge\neg u=0$, hence $u\le v\le u$ and $u=v$. Therefore $\bar h([a])=h(a)$ is well defined. Substituting this formula into each quotient operation proves preservation of both bounds, meet, join and complement, and $\bar hq=h$. Any factorization must take $[a]$ to $h(a)$ because $q$ is onto, proving uniqueness without a choice of representatives. QED. [F1, step 2.1, algebra]
