---
id: lem-shelah-sweet-forcings-are-sigma-directed-ccc
kind: lemma
title: Sweet forcings are countable unions of directed sets and ccc
status: published
origin: pipeline
deps: [def-shelah-sweetness-model, def-kappa-closure-distributivity-and-chain-condition]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.3, pp. 34-35"}
verification:
  audited: 2026-09-22
---

## Statement

If $(P,D,(E_n))$ is a sweetness model, then $D$, and hence $P$, is a countable
union of directed subsets. Consequently every antichain in $P$ is countable, so
$P$ satisfies the countable chain condition.

## Facts & Assumptions

**Given:** A sweetness model $(P,D,(E_n)_{n<\omega})$ as in the Statement.

[F1] [[def-shelah-sweetness-model]]: $D$ is dense in $P$, the relation $E_0$ has countably many classes, and each $E_0$-class is downward directed.

[F2] [[def-kappa-closure-distributivity-and-chain-condition]]: a forcing order is ccc when every antichain has cardinality below $\aleph_1$, and this counts as $\aleph_1$-cc.

## Proof

1.1 The classes of $E_0$ form a countable partition of $D$ into nonempty sets, so fix a surjection $m\mapsto C_m$ from $\omega$ onto the set of classes, which exists because a countable set of nonempty sets is the image of a function on $\omega$; for $m<\omega$ let $A_m=\{p\in P:\text{some }q\in C_m\text{ satisfies }q\le p\}$ be the upward closure of $C_m$ inside $P$. [F1]

2.1 Each $A_m$ is directed: if $p_1,p_2\in A_m$ are witnessed by $q_1,q_2\in C_m$ with $q_j\le p_j$, then downward directedness of the class supplies $q\in C_m$ with $q\le q_1,q_2$, hence $q\le p_1,p_2$ and $q\in A_m$ is the required common lower bound. [F1, step 1.1]

2.2 $P=\bigcup_{m<\omega}A_m$: given $p\in P$, density of $D$ supplies $q\in D$ with $q\le p$, the classes cover $D$, so $q\in C_m$ for some $m$, and then $p\in A_m$ by definition. [F1, step 1.1]

3.1 $D=\bigcup_{m<\omega}C_m$ exhibits $D$ as a countable union of directed sets, since each class $C_m$ is downward directed; combined with step 2.2 this shows that both $D$ and $P$ are countable unions of directed subsets. [F1, step 2.1, step 2.2]

3.2 Let $A\subseteq P$ be an antichain, that is, a set of pairwise incompatible conditions: by step 2.2 each $a\in A$ lies in some $A_m$, so $f(a)=\min\{m<\omega:a\in A_m\}$ is defined on $A$, and it is injective, since $f(a)=f(b)=m$ with $a\ne b$ would put $a,b$ in the directed set $A_m$ and give them a common lower bound; hence $A$ injects into $\omega$ and is countable. [step 2.1, step 2.2]

4.1 Every antichain of $P$ is countable by step 3.2, so $P$ is ccc in the sense of [F2], which is $\aleph_1$-cc. [F2, step 3.2] ∎
