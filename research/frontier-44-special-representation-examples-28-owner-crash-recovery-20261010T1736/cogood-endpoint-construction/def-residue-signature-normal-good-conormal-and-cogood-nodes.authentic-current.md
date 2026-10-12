---
id: def-residue-signature-normal-good-conormal-and-cogood-nodes
kind: definition
title: "Residue signatures, normal, good, conormal and cogood nodes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-regular-and-p-restricted-partitions,
       def-removable-and-addable-nodes-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §3.4 with (3.12)-(3.14), printed pp. 18-19, and §11.4 with the normal/good/conormal/cogood naming and the counts epsilon_i, phi_i, printed pp. 53-54. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, §2.2-2.4 and Remark 2.4(II), printed pp. 3-4 (the transposed-node dictionary and the l-residue r-c)"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Definition

Let $p>0$ and let $\mu$ be a $p$-restricted partition, so that
$\mu_i-\mu_{i+1}<p$ for all $i\ge1$
([[def-p-regular-and-p-restricted-partitions]],
[[def-partition-young-diagram-and-conjugate-partition]]). A node $(r,c)$ of
the Young diagram $[\mu]$ is an **$i$-node** if its residue
$$\operatorname{res}(r,c):=c-r\bmod p$$
equals $i\in\mathbb Z/p$; the $i$-nodes of $\mu$ are its addable and removable
nodes of residue $i$
([[def-removable-and-addable-nodes-of-a-partition]]).

**The reduced $i$-signature.** Fix $i\in\mathbb Z/p$ and list the $i$-nodes
of $\mu$ as $A_1,\dots,A_n$ from top to bottom, that is, in increasing row
index and, for equal row index, in increasing column index. Form the word
$\sigma=(\sigma_1,\dots,\sigma_n)$ with $\sigma_m=+$ if $A_m$ is addable and
$\sigma_m=-$ if $A_m$ is removable. Whenever $r<s$, $\sigma_r=-$,
$\sigma_s=+$ and $\sigma_{r+1}=\dots=\sigma_{s-1}=0$, replace $\sigma_r$ and
$\sigma_s$ by $0$; repeat until no $-$ lies to the left of a $+$. The
resulting **reduced $i$-signature** has the form $+\cdots+- \cdots-$ with the
zeros deleted, and the nodes attached to its signs are:

- the **normal $i$-nodes** of $\mu$ are the removable nodes corresponding to
  the $-$ signs of the reduced signature;
- the **good $i$-node** is the topmost (first listed) of the normal $i$-nodes;
- the **conormal $i$-nodes** of $\mu$ are the addable nodes corresponding to
  the $+$ signs of the reduced signature;
- the **cogood $i$-node** is the bottommost (last listed) of the conormal
  $i$-nodes.

Write $\varepsilon_i(\mu)$ and $\varphi_i(\mu)$ for the numbers of normal and
of conormal $i$-nodes of $\mu$; the good $i$-node exists exactly when
$\varepsilon_i(\mu)>0$, and the cogood $i$-node exactly when
$\varphi_i(\mu)>0$. At most one good and at most one cogood $i$-node occur,
for each residue.

**Well-definedness.** Each reduction step deletes two nonzero entries, so any
sequence of steps terminates after at most $\lfloor n/2\rfloor$ steps, and in
the resulting word no $-$ lies to the left of a $+$: otherwise, take two
nonzero entries that are consecutive among the nonzero entries of the current
word and are ordered $-$, $+$; all entries strictly between them are $0$ by
the choice, so the pair would still be reducible. Hence, after deleting the zero entries, a terminal word is
$+^a-^b$ for some $a,b\ge0$; cancelled positions remain in their original
places and need not form a contiguous block. The terminal word does not depend on the
order in which reducible pairs are chosen: two reducible pairs cannot overlap
partially, because an endpoint of one pair lying strictly inside the other
would be a nonzero entry in a position that the other pair requires to be
$0$, and pairs sharing exactly one endpoint would similarly place a nonzero
entry strictly inside the other pair; so any two reducible pairs are either
disjoint (and the corresponding steps commute) or equal, there are no
critical pairs, and the rewriting relation is locally confluent. Uniqueness follows
by induction on the number of nonzero entries. A terminal word admits no
step. Otherwise, two distinct first steps commute and reach a common word
after one further step each. All these successor words have fewer nonzero
entries, so the induction hypothesis identifies their terminal words. Thus
any two reduction sequences have the same terminal word; in it the first surviving $-$ and the last surviving
$+$ are unique positions whenever they exist. Thus the reduced signature,
the sets of normal and conormal nodes, and the good and cogood nodes are well
defined. The empty partition has the unique addable node $(1,1)$, of residue $0$,
and no removable nodes. Its $0$-signature is $(+)$ and its other signatures
are empty. Thus $\varepsilon_i(\varnothing)=0$ for every $i$,
$\varphi_0(\varnothing)=1$, and $\varphi_i(\varnothing)=0$ for $i\ne0$.
It has no good node and its cogood $0$-node is $(1,1)$.

**Convention warning.** The residue $c-r$ used here is the negative of
Brundan's $\ell$-residue $r-c$, and a removable node of $\mu$ is normal here
exactly when its transposed node is normal in Brundan's sense for the
transpose partition $\mu'$; lists of addable and removable nodes, and the
signs of the residues, must never be silently mixed between the two
conventions
([[def-removable-and-addable-nodes-of-a-partition]],
[[def-partition-young-diagram-and-conjugate-partition]]).

## Remarks

- **Zero entries are not nodes.** The zeros of the word record cancelled
  places and carry no node; only the surviving signs are attached to nodes,
  as in the definition of the normal, good, conormal and cogood nodes.
- **Why $p$-restrictedness is assumed.** The nodes and their residues are
  defined for every partition, but the definition is applied on this page to
  the $p$-restricted labels, for which the good-node machinery matches the
  modular branching rules of the dual-Specht convention used throughout.
- **At most one sign of each outer type.** In the zero-suppressed reduced word $+^a-^b$
  the first surviving $-$ (if $b>0$) and the last surviving $+$ (if $a>0$)
  are unique places, which is the content of the final assertion.
- **Choice.** The definition and the well-definedness argument use only
  finite lists and a finite reduction; no choice principle is used.
