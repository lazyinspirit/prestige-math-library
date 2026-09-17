---
id: lem-shelah-sweet-density-transfer-along-complete-suborders
kind: lemma
title: Sweet density transfers along complete suborders
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, lem-iteration-restrictions-and-complete-embeddings, thm-forcing-theorem, def-two-step-forcing-iteration, thm-forcing-equivalence-and-boolean-completion, def-complete-boolean-algebra-and-regular-open-sets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.4, p. 35"}
---

## Statement

Let $P$ be a complete suborder of $BA(Q)$, let $(Q,D,(E_n))$ be a sweetness
model, and let $(A_j)_{j<\omega}$ be subsets of $P$ whose union is dense in $P$.
Suppose $q\in D$ and $p\in P$ forces $q\in Q/P$. Then some $j,k<\omega$ have the
following uniform property: for every $q'\mathrel{E_k}q$ there is $p'\in A_j$
with $p'\le p$ which forces $q'\in Q/P$. Moreover, the union of all $A_j$ for
which such a $k$ exists is dense below $p$. This is the full two-part conclusion
of Claim 7.4 of the source, in the library order.

## Facts & Assumptions

**Given:** A complete suborder $P$ of $BA(Q)$, a sweetness model $(Q,D,(E_n))$, sets $A_j\subseteq P$ with dense union, $q\in D$, and $p\in P$ forcing $q\in Q/P$.

[F1] [[def-shelah-sweetness-model]]: $(Q,D,(E_n))$ satisfies the sequential clause and the transfer clause, and its $E_n$-classes are downward directed.

[F2] [[thm-forcing-equivalence-and-boolean-completion]] with [[def-complete-boolean-algebra-and-regular-open-sets]]: $Q$ is order-densely embedded in $BA(Q)$, so every nonzero element of $BA(Q)$ lies above a condition of $Q$; $P\subseteq BA(Q)$ is a complete suborder, so every element of $BA(Q)$ lies above a condition of $P$.

[F3] [[def-two-step-forcing-iteration]] with the quotient convention recorded on this page: the assertion $p\Vdash q\in Q/P$ is the quotient assertion of the pair $P\le BA(Q)$ from Shelah's Section 7.1; it implies that $p$ and $q$ are compatible in $BA(Q)$, and if $p'\in P$ satisfies $p'\le q$ for a condition $q\in Q$, then $p'\Vdash q\in Q/P$.

[F4] [[thm-forcing-theorem]] with [[lem-iteration-restrictions-and-complete-embeddings]]: forcing is monotone and definable, and the complete embeddings of iteration stages locate $P$ inside $BA(Q)$.

## Proof

1.1 Fix the canonical surjection $n(i)=m$ where $i=2^m(2r+1)$, so that every $m<\omega$ occurs as $n(i)$ for infinitely many $i$. [F4]

1.2 The conditions $p$ and $q$ are compatible in $BA(Q)$: if they were incompatible, then the Boolean equation $p\wedge q=0$ would hold and persist in every extension, so no condition below $p$ could force $q$ into the quotient $Q/P$; this contradicts the hypothesis, which is monotone under strengthening. [F3, F4]

2.1 Recursively choose $q_i\in D$ with $q_i\mathrel{E_i}q$ for $i<\omega$ so that, whenever there exists $q'\mathrel{E_i}q$ for which no $p'\in A_{n(i)}$ satisfies $p'\le p$ and $p'\Vdash q'\in Q/P$, the chosen $q_i$ has that property. The admissible set at each stage is nonempty: either a bad witness exists, or $q$ itself is admissible because no bad witness exists. This is a dependent recursion through nonempty sets, so DC produces the sequence. [F1, step 1.1]

2.2 There is $r\in D$ with $r\le p$ and $r\le q$: by step 1.2 the conditions have a common lower bound $u$ in $BA(Q)$; by order-density of the completion there is $q_0\in Q$ with $q_0\le u$, and by density of $D$ there is $r\in D$ with $r\le q_0$, hence $r\le p,q$. [F2, F3, step 1.2]

3.1 There is $k<\omega$ such that every $q'\mathrel{E_k}q$ is compatible with $p$: apply the transfer clause to the pair $(q,r)$ at $n=0$, where $r\mathrel{E_0}r$ witnesses that some member of the $E_0$-class of $r$ lies below $q$; the clause supplies $k$ such that every $q'\mathrel{E_k}q$ has a member of the class of $r$ below it, and any two members of one class have a common lower bound, which is then also below $p$ because $r\le p$. [F1, step 2.2]

3.2 The sequence $(q_i)$ extends to the diagonal witness: since $q_i\mathrel{E_i}q$ and $E_i$ refines $E_k$ for all $i\ge k$, the sequential clause applied to the sequence with last term $q$ gives $q^*\in D$ with $q^*\mathrel{E_k}q$ and $q^*\le q_i$ for every $i\ge k$. [F1, step 2.1]

4.1 Since $q^*\mathrel{E_k}q$, step 3.1 makes $q^*$ compatible with $p$; let $u\le p,q^*$ in $BA(Q)$, let $p''\in P$ satisfy $p''\le u$, so $p''\le p$ and $p''\Vdash q^*\in Q/P$, and let $p'\in A_j$ satisfy $p'\le p''$, which exists because the union of the $A_j$ is dense in $P$; then $p'\le p$ and $p'\Vdash q^*\in Q/P$ and $p'\Vdash q'\in Q/P$ for every $q'\in Q$ with $q^*\le q'$. [F2, F3, step 3.1, step 3.2]

5.1 Choose $i\ge k$ with $n(i)=j$, possible by step 1.1. Then $p'\in A_{n(i)}$ satisfies $p'\le p$ and, since $q^*\le q_i$, forces $q_i\in Q/P$; so $q_i$ is not bad at level $i$. By step 2.1 the existence of a bad witness at level $i$ would have forced $q_i$ to be bad, hence no $q'\mathrel{E_i}q$ is bad for $A_{n(i)}$: for every $q'\mathrel{E_i}q$ there is $p'\in A_j$ with $p'\le p$ and $p'\Vdash q'\in Q/P$. Thus the pair $(A_j,i)$ has the uniform property required in part (1) of the Statement. [step 1.1, step 2.1, step 4.1]

6.1 Let $A^*=\bigcup\{A_j:\text{for some }k,\ A_j\text{ has the uniform property for }k\}$. Given $p_0\le p$, the hypothesis $p_0\Vdash q\in Q/P$ holds by monotonicity, so the argument of steps 1.2 through 4.1 with $p_0$ in place of $p$ produces $j,k$ such that every $q'\mathrel{E_k}q$, in particular $q'=q$, has a condition $p'\in A_j$ below $p_0$ forcing $q'\in Q/P$; hence $A^*$ meets every strengthening of $p$ and is dense below $p$. [F4, step 5.1]

7.1 The steps above establish both conclusions of the Statement. [step 5.1, step 6.1] ∎
