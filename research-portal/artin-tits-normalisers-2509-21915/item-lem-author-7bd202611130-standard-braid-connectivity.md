---
title: Standard expressions are connected by atomic braid moves
status: published
research_item: lem-author-7bd202611130-standard-braid-connectivity
dependency_level: 21
sources:
  references: []
---

## Prerequisites

- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [lem-author-7bd202611130-common-prefix-finiteness](item-lem-author-7bd202611130-common-prefix-finiteness)
- [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count)


## Statement

Any two standard expressions of the same article morphism are related by finitely many atomic braid moves, with endpoints preserved and every intermediate expression standard.

## Facts & Assumptions

[F1] Use the arbitrary-rank Coxeter system, elementary arrows, standard expressions and left-to-right groupoid conventions of [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). All paths are finite.

[F2] Any two standard expressions of one morphism have the same number of factors, by [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers).

[F3] Every article morphism has a standard expression, by [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count).

[F4] Two distinct elementary arrows with a common source that length-additively left-divide a morphism force a finite relative root difference and have the length-additive common prefix supplied by [lem-author-7bd202611130-common-prefix-finiteness](item-lem-author-7bd202611130-common-prefix-finiteness).

[F5] Under that finiteness hypothesis, [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers) supplies exactly two standard expressions of the common prefix, one starting with each specified generator. Their equality is the atomic braid relation of [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers).

## Proof

**Given:** The arbitrary-rank Coxeter and groupoid data of [F1], with the mathematical inputs [F2], [F3], [F4] and [F5].

**Goal:** Establish the assertion in the Statement.

**Proof technique:** direct.

1.1 Each elementary arrow has positive Coxeter length: its one-factor expression is standard by definition, whereas the identity has an empty standard expression, so [F2] rules out an elementary arrow being the identity. Concatenating shortest simple-generator words proves Coxeter-length subadditivity. For any contiguous block of a standard expression, subadditivity gives $\ell(w)\leq\sum_{\mathrm{outside}}\ell(v_i)+\ell(\mathrm{block})\leq\sum_i\ell(v_i)=\ell(w)$; hence the block is standard. In particular, prefixes and suffixes are standard. Induct on the Coxeter length of the common product $w$. At length zero both expressions are empty; removing a first factor from a nonempty standard expression strictly reduces product length. [F1, F2]

2.1 Let the two nonempty standard words be $U,V$ for $w:I\to K$, and let their first arrows be $e:I\to H$ and $f:I\to H^{\prime}$. If $e=f$, their remaining words are standard expressions for the same morphism $e^{-1}w:H\to K$ of smaller Coxeter length. Induction connects these tails by finitely many atomic braid moves through standard expressions. Prepending $e$ preserves endpoints and standardness, because every tail has product $e^{-1}w$ and length sum $\ell(w)-\ell(e)$. [F1, step 1.1]

2.2 Otherwise $e\ne f$. Write $e=v_{a,I}$ and $f=v_{b,I}$. The same source and index determine the same elementary arrow by [F1], so $a\ne b$. Step 1.1 shows that these distinct arrows are length-additive prefixes of $w$, so [F4] gives the finite relative root difference and a common prefix $q=v_{a,b,I}:I\to L$ with $\ell(w)=\ell(q)+\ell(q^{-1}w)$. By [F5], its two standard words are $A=eA^{\prime}$ and $B=fB^{\prime}$. The remainder $z=q^{-1}w:L\to K$ is a groupoid morphism, so choose a standard word $Z$ for it using [F3]. The words $AZ$ and $BZ$ have the required endpoints, product $w$, and length sum $\ell(q)+\ell(z)=\ell(w)$, so both are standard. [F1, F3, F4, F5, step 1.1]

3.1 The tails of $U$ and $AZ$ after their common first arrow $e$ are standard words for $e^{-1}w:H\to K$ of strictly smaller Coxeter length. Induction connects them, and prepending $e$ gives a standard chain from $U$ to $AZ$. The same argument with $f$ gives a standard chain from $V$ to $BZ$. Replace $A$ by $B$ in $AZ$ using the atomic braid relation of [F5], keeping $Z$ fixed. This preserves endpoints and standardness, since $A$ and $B$ have the same product $q$ and both have length sum $\ell(q)$. Concatenate the first chain, this one move, and the reversed second chain. The resulting finite chain connects $U$ to $V$ with every intermediate expression standard, completing the induction. [F1, F5, step 1.1, step 2.1, step 2.2] ∎
