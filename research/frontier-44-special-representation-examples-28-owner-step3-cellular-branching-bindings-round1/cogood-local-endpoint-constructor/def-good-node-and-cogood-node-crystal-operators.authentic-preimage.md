---
id: def-good-node-and-cogood-node-crystal-operators
kind: definition
title: "Good-node deletion and cogood-node addition operators"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-removable-and-addable-nodes-of-a-partition,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-p-regular-and-p-restricted-partitions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 1
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §3.4 with (3.13)-(3.14), printed pp. 18-19 (the good node of mu is the cogood node of mu-minus-A and the restricted multipartitions). Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Alexander Kleshchev, Branching rules for modular representations of symmetric groups II, J. reine angew. Math. 459 (1995) 163-212, §5 (the removal and addition operators and their inverse property); read through the formulation recorded in the survey above (the GDZ scan has no text layer)"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Definition

On the set of $p$-restricted partitions
([[def-p-regular-and-p-restricted-partitions]]) define partial operators
$\tilde e_i,\tilde f_i$ for $i\in\mathbb Z/p$ by
$$\tilde e_i\mu:=\mu\setminus A\quad\text{if }\varepsilon_i(\mu)>0,$$
where $A$ is the good $i$-node of $\mu$
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]), the
operator being undefined on $\mu$ when $\varepsilon_i(\mu)=0$; and
$$\tilde f_i\mu:=\mu\cup B\quad\text{if }\varphi_i(\mu)>0,$$
where $B$ is the cogood $i$-node of $\mu$, the operator being undefined on
$\mu$ when $\varphi_i(\mu)=0$. Then
$$\mu=\tilde f_i\nu\qquad\Longleftrightarrow\qquad\nu=\tilde e_i\mu$$
for all $p$-restricted $\mu,\nu$; in particular $\tilde e_i$ and $\tilde f_i$
are mutual inverses on their domains, each $\tilde e_i$ lowers the rank by one
and each $\tilde f_i$ raises the rank by one, and at most one good and at most
one cogood node exist in each residue. No module-theoretic statement is made
here: this item is pure combinatorics, and the identification of these
operators with the crystal operators of the level-one Fock space is a theorem
of the later Fock-space page, not an input here.

## Facts & Assumptions

**Given:** A prime $p$, a residue $i\in\mathbb Z/p$, and $p$-restricted
partitions $\mu,\nu\subseteq$ of ranks $d$ and $d-1$.

[F1] For a $p$-restricted partition $\lambda$ the $i$-signature is the word
in $\{+,-\}$ read off the addable and removable $i$-nodes ordered top to
bottom, and its reduced form, after deleting zero entries, $+^a-^b$ is well defined; the good $i$-node
of $\lambda$ is the removable node of the first surviving $-$, the cogood
$i$-node is the addable node of the last surviving $+$, and
$\varepsilon_i(\lambda),\varphi_i(\lambda)$ are the numbers of surviving $-$
and $+$ signs ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F2] For a partition $\lambda$ with a removable node $X=(r,\lambda_r)$ the
removable nodes of $\lambda\setminus X$ are the removable nodes of $\lambda$
other than $X$ together with the nodes $(r-1,\lambda_{r-1})$ and
$(r,\lambda_r-1)$ when these become removable, and its addable nodes are the
addable nodes of $\lambda$ together with $X$, with the nodes
$(r,\lambda_r+1)$, $(r+1,\lambda_{r+1}+1)$ replaced as follows: the addable
nodes in rows other than $r$ and $r+1$ are unchanged, the addable node of row
$r$ is $X$, and the addable node of row $r+1$ is
$(r+1,\lambda_{r+1}+1)$ if it was addable before. Moreover the residues of
$(r-1,\lambda_{r-1})$ and $(r,\lambda_r-1)$ are $\operatorname{res}(X)\pm1$
and the residue of the row-$(r+1)$ addable node is
$\lambda_{r+1}-r\ne\operatorname{res}(X)$; consequently
$\operatorname{Rem}_i(\lambda\setminus X)=\operatorname{Rem}_i(\lambda)
\setminus\{X\}$ and $\operatorname{Add}_i(\lambda\setminus X)=
\operatorname{Add}_i(\lambda)\cup\{X\}$
([[def-removable-and-addable-nodes-of-a-partition]],
[[def-p-regular-and-p-restricted-partitions]]).

[F3] The reduction of a signature word is confluent, and the zero-suppressed normal form
$+^a-^b$ can be computed by scanning the word from left to right, pushing
each non-cancelled $-$ on a stack and letting each $+$ cancel the top
$-$ of the stack if the stack is nonempty, and surviving otherwise; the
surviving signs in their original order are exactly the normal form
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F4] If $\lambda$ is a partition and $X$ a removable node of $\lambda$, then
$\lambda\setminus X$ is a partition, and $\lambda\cup Y$ is a partition for
every addable node $Y$ of $\lambda$; the restricted condition compares the
consecutive differences $\lambda_a-\lambda_{a+1}$ with $p$
([[def-p-regular-and-p-restricted-partitions]],
[[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** direct.

1.1 *The stack algorithm computes the normal form.* The stack algorithm of [F3] terminates with a word containing no $-$ before a $+$ (a surviving $-$ stays on the stack and blocks the stack from being empty, so no later $+$ survives after it), and the reduction relation is confluent by [F3], so the surviving signs read in order are the reduced signature with zero entries deleted, $+^a-^b$; in particular the good node corresponds to the first surviving $-$ and the cogood node to the last surviving $+$. [given, F3]

1.2 *Comparison of the $i$-words.* Let $\mu$ be a partition and $X$ a removable $i$-node of $\mu$; put $\nu:=\mu\setminus X$. By [F2] the $i$-nodes of $\nu$ are obtained from those of $\mu$ by removing $X$ from the removable list and inserting $X$ into the addable list, all other $i$-nodes and their top-to-bottom order being unchanged; hence the $i$-signature words of $\mu$ and $\nu$ have the same length and the same entries except at the position $p$ of $X$, where the word of $\mu$ has $-$ and the word of $\nu$ has $+$. [given, F2]

2.1 *First surviving $-$ versus last surviving $+$.* Let $w$ be a signature word with $w_p=-$, let $w'$ be $w$ with the entry at $p$ changed to $+$, let $u$ be the prefix of $w$ strictly before $p$, and let $s$ be the suffix strictly after $p$. We prove that $p$ is the position of the first surviving $-$ of $w$ if and only if $p$ is the position of the last surviving $+$ of $w'$. Let $S$ be the stack of [F3] after scanning $u$; the prefix of $w'$ before $p$ is the same word $u$, so the same stack $S$ is present there. If $S$ is nonempty, let $q$ be its bottom entry; scanning $w$ further, $q$ can leave the stack only by being cancelled by a $+$ that has first cancelled every entry above it, in particular the entry at $p$, so either $q$ survives, giving a surviving $-$ before $p$, or the entry $p$ is cancelled before $q$ and does not survive; in both cases $p$ is not the first surviving $-$ of $w$. Similarly, scanning $w'$ the entry at $p$ is a $+$, which survives only if the stack just before it is empty, so if $S$ is nonempty then $p$ does not survive and is not the last surviving $+$ of $w'$. Hence both events force $S$ to be empty, and we may assume this. With $S$ empty, push the $-$ at $p$ in the scan of $w$; while this entry is alive, the pending entries above it after scanning a prefix $q$ of $s$ are the $-$ signs of $q$ not yet cancelled, and since no $+$ has yet occurred at height $0$, that number is $\#-(q)-\#+(q)$. Consequently $p$ is cancelled at the first $+$ of $s$ whose preceding prefix $q$ has $\#+(q)=\#-(q)$, and such a $+$ exists if and only if some prefix $q$ of $s$ has $\#+(q)>\#-(q)$: counts change by one at each symbol, so a strict surplus arises only across a step of equality, and conversely a prefix with equality followed by a $+$ would create a strict surplus. Thus, with $S$ empty, the entry at $p$ survives in $w$ if and only if $$(C)\quad \#+(q)\le\#-(q)\quad\text{for every prefix }q\text{ of }s.$$ In $w'$, the $+$ at $p$ arrives at the empty stack $S$ and survives; after it, a later $+$ of $s$ survives exactly when the stack is empty at its arrival. If (C) holds and a $+$ of $s$ survived, with preceding prefix $q$, then all $-$ of $q$ were cancelled, so $\#-(q)\le\#+(q)$, while (C) applied to the prefix $q$ extended by that $+$ gives $\#+(q)+1\le\#-(q)$, a contradiction; hence no later $+$ survives. Conversely, if (C) fails then some $+$ of $s$ survives: the stack height after a prefix $q$ of $s$ equals $\#-(q)-\#+(q)+c(q)$, where $c(q)$ is the number of $+$ signs of $q$ that survived, as one checks by induction on the length of $q$ (a $-$ raises the height, and a $+$ raises $c$ by one and lowers the height by one exactly when it cancels); if no $+$ of $s$ survived then $c(q)=0$ for every prefix $q$, so $\#+(q)\le\#-(q)$ for every prefix, contradicting the failure of (C). Therefore (C) holds if and only if, in $w'$, the entry at $p$ is the last surviving $+$, and the claim follows. [step 1.1, F3]

3.1 *Good versus cogood for a removable node.* Let $X$ be a removable $i$-node of $\mu$ and $\nu=\mu\setminus X$. By step 1.2 the words of $\mu$ and $\nu$ differ exactly by the flip at the position of $X$, so step 2.1 gives: $X$ is the good $i$-node of $\mu$ if and only if $X$ is the cogood $i$-node of $\nu$. Consequently, if $\varepsilon_i(\mu)>0$ and $X$ is the good $i$-node, then $\varphi_i(\nu)>0$ with cogood node $X$, and $\tilde f_i(\nu)=\nu\cup X=\mu$. [step 1.2, step 2.1, F1]

3.2 *Removing the good node preserves restrictedness.* Let $\mu$ be $p$-restricted and let $A=(r,\mu_r)$ be its good $i$-node; we show that $\nu=\mu\setminus A$ is $p$-restricted. If $r\ge2$ and $\mu_{r-1}-\mu_r=p-1$, then $B:=(r-1,\mu_{r-1})$ is a removable node of $\mu$ (as $\mu_{r-1}>\mu_r$) with $\operatorname{res}(B)=\mu_{r-1}-(r-1)=\mu_r-r+p\equiv\mu_r-r=\operatorname{res}(A)$, so $B$ is a removable $i$-node above $A$ and hence occurs before $A$ in the $i$-word. Either some $-$ before $A$ survives, and then $A$ is not the first surviving $-$, or every $-$ before $A$ is eventually cancelled, in particular $B$; but a $+$ cancels $B$ only after cancelling every entry pushed after $B$, in particular the entry at $A$, so in that case $A$ is cancelled and does not survive; both alternatives contradict that $A$ is good. Hence $\mu_{r-1}-\mu_r\le p-2$, and then $\nu$ is $p$-restricted: deleting the last node of row $r$ leaves $(\mu_r-1)-\mu_{r+1}\le p-2<p$ and, if $r\ge2$, $\mu_{r-1}-(\mu_r-1)=(\mu_{r-1}-\mu_r)+1\le p-1<p$, while all other consecutive differences are unchanged. [step 1.2, step 2.1, F4, given]

3.3 *Adding the cogood node preserves restrictedness.* Let $\mu$ be $p$-restricted and let $B=(r,\mu_r+1)$ be its cogood $i$-node; we show that $\nu=\mu\cup B$ is $p$-restricted. Suppose first that $\mu_r-\mu_{r+1}=p-1$; then $D:=(r+1,\mu_{r+1}+1)$ is an addable $i$-node of $\mu$, because $\mu_r>\mu_{r+1}$ and $\operatorname{res}(D)=\mu_{r+1}-r\equiv\mu_r+1-r=\operatorname{res}(B)$; between $B$ and $D$ in the top-to-bottom order there is no $i$-node: the entries after $B$ in row $r$ do not exist, and the remaining $i$-node of row $r$ is the removable node $(r,\mu_r)$, whose residue is $\operatorname{res}(B)-1$, while the addable node of row $r+1$ is $D$ itself. Hence $B$ and $D$ are consecutive in the $i$-word, both with sign $+$. If the $+$ at $B$ survives, it leaves the stack empty, so the next entry, the $+$ at $D$, also survives and is later than $B$; if the $+$ at $B$ does not survive, then $B$ is not the cogood node. In both cases $B$ is not the last surviving $+$, contradicting that $B$ is cogood. Hence $\mu_r-\mu_{r+1}\le p-2$, and then $(\mu_r+1)-\mu_{r+1}\le p-1<p$, while $\mu_{r-1}-(\mu_r+1)=(\mu_{r-1}-\mu_r)-1<p$ for $r\ge2$ (no row above change is needed when $r=1$), and all other differences are unchanged; so $\nu$ is $p$-restricted. [step 1.2, step 2.1, F4, given]

4.1 *Good versus cogood for an addable node.* Let $Y$ be an addable $i$-node of $\mu$ and $\nu:=\mu\cup Y$. The node $Y$ is removable in $\nu$, and $\mu=\nu\setminus Y$; applying step 3.1 to the pair $(\nu,Y)$ gives: $Y$ is the good $i$-node of $\nu$ if and only if $Y$ is the cogood $i$-node of $\mu$. Consequently, if $\varphi_i(\mu)>0$ and $Y$ is the cogood $i$-node, then $\varepsilon_i(\nu)>0$ with good node $Y$, and $\tilde e_i(\nu)=\nu\setminus Y=\mu$. [step 3.1, F1]

5.1 *The inverse property.* Let $\mu,\nu$ be $p$-restricted partitions. If $\nu=\tilde e_i\mu$, then $\varepsilon_i(\mu)>0$, $\nu=\mu\setminus A$ for the good $i$-node $A$ of $\mu$, and step 3.1 gives that $A$ is the cogood $i$-node of $\nu$, so that $\tilde f_i\nu=\nu\cup A=\mu$. Conversely, if $\mu=\tilde f_i\nu$, then $\varphi_i(\nu)>0$, $\mu=\nu\cup B$ for the cogood $i$-node $B$ of $\nu$, and step 4.1 gives that $B$ is the good $i$-node of $\mu$, so that $\tilde e_i\mu=\mu\setminus B=\nu$. Hence $\mu=\tilde f_i\nu\iff\nu=\tilde e_i\mu$ for all $p$-restricted $\mu,\nu$, both sides being false when the relevant node does not exist; and by steps 3.2 and 3.3 the operators map $p$-restricted partitions to $p$-restricted partitions. [step 3.1, step 3.2, step 3.3, step 4.1]

6.1 *Conclusion.* By [F1] at most one good and at most one cogood $i$-node exist in each residue, so the partial operators are well defined; removing a node lowers the rank by one and adding a node raises it by one, so $\tilde e_i$ lowers and $\tilde f_i$ raises the rank by one; and by step 5.1 each operator is defined at exactly the images of the other, so they are mutual inverses on their domains. No module theory and no choice principle are used. [step 5.1, F1] ∎
## Remarks

- **The word comparison is where the geometry enters.** Step 1.2 is the only
  place where the partition structure is used; the reduction of a *general*
  word does not behave this way, so the inverse property is a theorem about
  the $i$-words of partitions, not a formal property of the cancellation
  procedure.
- **One-sided cancellation.** The reduction cancels only $-+$ pairs, so a
  reduced word may contain both a surviving $+$ before a surviving $-$, as in
  the reduced signatures $(+,-)$ appearing on the companion page.
- **Choice.** Everything is finite and explicit; no choice principle is used.
