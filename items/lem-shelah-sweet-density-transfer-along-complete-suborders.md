---
id: lem-shelah-sweet-density-transfer-along-complete-suborders
kind: lemma
title: Sweet density transfers along complete suborders
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, thm-forcing-equivalence-and-boolean-completion, def-complete-boolean-algebra-and-regular-open-sets, def-axiom-of-choice, thm-forcing-preorders-have-regular-open-completions, thm-n-cross-n-countable, thm-zorn]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.4, pp. 34-35"}
---

## Statement

Assume ZFC. Let $P$ be a complete suborder of $B^+=BA(Q)\setminus\{0_B\}$ (write $B=BA(Q)$), let
$(Q,D,(E_n))$ be a sweetness model, and let $(A_j)_{j<\omega}$ be subsets of
$P$ whose union is dense in $P$. Write $e:Q\to B\setminus\{0_B\}$ for the
canonical dense completion map, and use Shelah's quotient convention

$$p\Vdash_P q\in Q/P\quad\Longleftrightarrow\quad \text{every }p_0\in P\text{ with }p_0\le p \text{ is compatible in }B\text{ with }e(q).$$

Suppose $q\in D$ and $p\in P$ forces $q\in Q/P$. Then some $j,k<\omega$ have
the following uniform property: for every $q'\mathrel{E_k}q$ there is
$p'\in A_j$ with $p'\le p$ which forces $q'\in Q/P$. Moreover, the union of
all $A_j$ for which such a $k$ exists is dense below $p$. This is the full
two-part conclusion of Claim 7.4 of the source, in the library order.

## Facts & Assumptions

**Given:** ZFC and the objects and quotient convention in the Statement.

[F1] [[def-shelah-sweetness-model]]: $(Q,D,(E_n))$ satisfies the sequential clause and the transfer clause, and its $E_n$-classes are downward directed. The same definition says that $P$ is a complete suborder of $B$ when its order and incompatibility are inherited from $B^+$ and every maximal antichain of $P$ remains maximal in $B^+$.

[F2] [[thm-forcing-preorders-have-regular-open-completions]] (with forcing equivalence as in [[thm-forcing-equivalence-and-boolean-completion]]) and [[def-complete-boolean-algebra-and-regular-open-sets]]: the canonical map $e:Q\to B\setminus\{0_B\}$ preserves order, preserves and reflects compatibility, and has order-dense image. It need not be injective or reflect the original order.

[F3] By the displayed quotient convention, $p\Vdash_P q\in Q/P$ is monotone in $p$ and upward closed in $q$: if $p'\le p$ and $q'\le q$, then $p\Vdash_P q'\in Q/P$ implies $p'\Vdash_P q\in Q/P$.

[F4] [[def-axiom-of-choice]] supplies choices from nonempty witness sets. Under this assumption [[thm-zorn]] gives a maximal element of any nonempty poset in which every chain has an upper bound.

[F5] [[thm-n-cross-n-countable]] gives the unique decomposition of every positive natural into $2^m(2r+1)$. Thus define $n(i)=m$ from $i+1=2^m(2r+1)$ for every $i\in\mathbb N$.

## Proof

1.1 Fix the canonical surjection $n(i)=m$ where $i+1=2^m(2r+1)$, For fixed $m$, the indices $i=2^m(2r+1)-1$ as $r$ varies are unbounded, so $m$ occurs arbitrarily late; in particular $n(0)=0$. [F5]

1.2 The Boolean conditions $p$ and $e(q)$ are compatible in $B$: the quotient hypothesis applied to $p_0=p$ says exactly that they are compatible. [F3]

2.1 For each $i<\omega$, use [F4] to choose $q_i\in D$ with $q_i\mathrel{E_i}q$ so that, whenever there exists $q'\mathrel{E_i}q$ for which no $p'\in A_{n(i)}$ satisfies $p'\le p$ and $p'\Vdash q'\in Q/P$, the chosen $q_i$ has that property. The admissible set is nonempty: choose a bad witness if one exists, and otherwise use $q$ itself. [F1, F4, step 1.1]

2.2 There is $r\in D$ with $r\le q$ and $e(r)\le p$. Indeed step 1.2 gives a nonzero $b\le p\wedge e(q)$ in $B$. Density of $e[Q]$ supplies $s\in Q$ with $e(s)\le b$. Then $e(s)$ and $e(q)$ are compatible, so compatibility reflection in [F2] supplies a common strengthening $t\le s,q$ in $Q$. Finally density of $D$ supplies $r\in D$ with $r\le t$. Order preservation gives $e(r)\le e(s)\le p$, while $r\le q$. [F1, F2, step 1.2]

3.1 There is $k<\omega$ such that every $q'\mathrel{E_k}q$ has $e(q')$ compatible with $p$. Apply the comparable form of the transfer clause to $r\le q$ at $n=0$. It supplies $k$ such that every $q'\mathrel{E_k}q$ has some $r'\mathrel{E_0}r$ with $r'\le r,q'$. Hence $e(r')\le e(r)\le p$ and $e(r')\le e(q')$, so $e(r')$ witnesses the required Boolean compatibility. [F1, F2, step 2.2]

3.2 The sequence $(q_i)$ extends to the diagonal witness: since $q_i\mathrel{E_i}q$ and $E_i$ refines $E_k$ for all $i\ge k$, the sequential clause applied to the sequence with last term $q$ gives $q^*\in D$ with $q^*\mathrel{E_k}q$ and $q^*\le q_i$ for every $i\ge k$. [F1, step 2.1]

4.1 Since $q^*\mathrel{E_k}q$, step 3.1 makes $e(q^*)$ compatible with $p$. We claim that some $p''\le p$ in $P$ forces $q^*\in Q/P$. Otherwise the quotient convention makes $C=\{s\in P:s\le p\text{ and }s\perp_B e(q^*)\}$ dense below $p$ in $P$. Apply [F4] to the poset of antichains contained in $C$, ordered by inclusion: the empty antichain is present and unions bound chains because any two elements of a chain union occur together in one antichain. Obtain a maximal such $A$. It is predense below $p$: otherwise a condition below $p$ incompatible with all of $A$ has a strengthening in $C$ that could be added. Apply the same argument to antichains of $P$ containing $A$ to obtain a maximal antichain $M$ of $P$. Every member of $M\setminus A$ is incompatible with $p$: if such an $m$ were compatible with $p$, a common strengthening in $P$ would be compatible with some member of the predense antichain $A$ below $p$, contradicting that $M$ is an antichain. By completeness of the suborder [F1], $M$ is maximal in $B$. But a common Boolean strengthening of $p$ and $e(q^*)$ is incompatible with every member of $A$ (by the definition of $C$) and every member of $M\setminus A$ (because they are incompatible with $p$), contradicting maximality in $B$. This proves the claim. Now choose $p'\in A_j$ below $p''$ from the dense union of the $A_j$. Then $p'\le p$ and $p'\Vdash q^*\in Q/P$; by upward closure in [F3], it also forces every $q'\in Q$ with $q^*\le q'$ into the quotient. [F1, F3, F4, step 3.1, step 3.2]

5.1 Choose $i\ge k$ with $n(i)=j$, possible by step 1.1. Then $p'\in A_{n(i)}$ satisfies $p'\le p$ and, since $q^*\le q_i$, forces $q_i\in Q/P$; so $q_i$ is not bad at level $i$. By step 2.1 the existence of a bad witness at level $i$ would have forced $q_i$ to be bad, hence no $q'\mathrel{E_i}q$ is bad for $A_{n(i)}$: for every $q'\mathrel{E_i}q$ there is $p'\in A_j$ with $p'\le p$ and $p'\Vdash q'\in Q/P$. Thus the pair $(A_j,i)$ has the uniform property required in part (1) of the Statement. [step 1.1, step 2.1, step 4.1]

6.1 Let $A^*=\bigcup\{A_j:\text{for some }k,\ A_j\text{ has the uniform property for }k\}$. Given $p_0\le p$, the hypothesis $p_0\Vdash q\in Q/P$ holds by monotonicity [F3], so the argument of steps 1.2 through 5.1 with $p_0$ in place of $p$ produces $j,k$ such that every $q'\mathrel{E_k}q$, in particular $q'=q$, has a condition $p'\in A_j$ below $p_0$ forcing $q'\in Q/P$; The uniform property below $p_0$ implies the one below $p$ since every witness below $p_0$ is below $p$, so this $A_j$ is included in $A^*$. Hence $A^*$ meets every strengthening of $p$ and is dense below $p$. [F3, step 5.1]

7.1 The steps above establish both conclusions of the Statement. [step 5.1, step 6.1] ∎
