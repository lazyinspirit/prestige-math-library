---
id: fs-every-primitive-group-has-a-unique-minimal-normal-subgroup
kind: false-statement
title: "FALSE: every primitive group has a unique minimal normal subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups, lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

**False claim:** every finite primitive permutation group has a unique minimal
normal subgroup.

## Facts & Assumptions

**Given:** A nonabelian finite simple group $T$ and the action of $T \times T$ on the right cosets of the diagonal subgroup $\Delta(T)=\{(t,t):t \in T\}$.

[L1] Any two distinct minimal normal subgroups of a finite faithful primitive group are regular
([[lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]]).

[L2] A finite primitive group has at most two minimal normal subgroups
([[cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups]]).

## Refutation

**Proof technique:** direct.

1.1 The diagonal subgroup is maximal in $T\times T$: if $\Delta(T)<L$, an element $(a,b)\in L\setminus\Delta(T)$ yields the nontrivial element $(1,ba^{-1})\in L$ after multiplication by $(a^{-1},a^{-1})$; its diagonal conjugates generate $1\times T$ by simplicity, and then $L=T\times T$. Hence the coset action is primitive. Its kernel is the core of $\Delta(T)$. If $(t,t)$ lies in that core, conjugation by every $(x,1)$ gives $(xtx^{-1},t)\in\Delta(T)$, so $t\in Z(T)=1$ because $T$ is nonabelian simple. Thus the action is faithful. Its two factors $T \times 1$ and $1 \times T$ are distinct minimal normal subgroups. [given, choose, algebra]

2.1 By [L1], those two minimal normal subgroups are regular. So this primitive action has two distinct minimal normal subgroups, contradicting uniqueness. The corollary [L2] shows that this exceptional size is the largest possible. [L1, L2, step 1.1] ∎
