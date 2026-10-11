---
id: ex-good-node-path-from-empty-to-a-p-restricted-partition
kind: example
title: "A full cogood-addition path from the empty partition to (3,1,1) at p = 3"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-good-node-and-cogood-node-crystal-operators,
       prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §3.4 with the reduced signature (3.12)-(3.14), printed pp. 18-19 (the method of the computation). Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Example

At $p=3$ the $p$-restricted partition $(3,1,1)$ is reached from the empty
partition by the five cogood additions
$$\varnothing\xrightarrow{\,0\,}(1)\xrightarrow{\,2\,}(1,1)\xrightarrow{\,1\,}(1,1,1)\xrightarrow{\,1\,}(2,1,1)\xrightarrow{\,2\,}(3,1,1),$$
that is, $(1)=\tilde f_0\varnothing$, $(1,1)=\tilde f_2(1)$,
$(1,1,1)=\tilde f_1(1,1)$, $(2,1,1)=\tilde f_1(1,1,1)$,
$(3,1,1)=\tilde f_2(2,1,1)$, where the labels record the residues of the
added nodes
([[def-good-node-and-cogood-node-crystal-operators]]). Reversing the path
gives the good deletions
$$(3,1,1)\xrightarrow{\,2\,}(2,1,1)\xrightarrow{\,1\,}(1,1,1)\xrightarrow{\,1\,}(1,1)\xrightarrow{\,2\,}(1)\xrightarrow{\,0\,}\varnothing.$$
The relevant reduced signatures are: $(1)$ at $i=0$: $(-)$; $(1,1)$ at
$i=2$: $(-)$; $(1,1,1)$ at $i=1$: $(+,-)$; $(2,1,1)$ at $i=1$: $(-,-)$;
$(3,1,1)$ at $i=2$: $(-)$; and $(1,1)$ at $i=1$: $(+,+)$,
$(2,1,1)$ at $i=2$: $(+)$. This is a case in which the reduced signatures are
not multiplicity-free: the signature $(+,-)$ occurs at $i=1$ for $(1,1,1)$.

## Facts & Assumptions

**Given:** The prime $p=3$, the residues of a node computed as $c-r\bmod 3$,
and the partitions $\varnothing$, $(1)$, $(1,1)$, $(1,1,1)$, $(2,1,1)$,
$(3,1,1)$.

[F1] The reduced $i$-signature of a partition is obtained by listing the
addable and removable $i$-nodes top to bottom, marking them $+$ and $-$, and
cancelling $-+$ pairs; the good $i$-node is the removable node of the first
surviving $-$, the cogood $i$-node is the addable node of the last surviving
$+$, and $\tilde e_i,\tilde f_i$ delete the good node and add the cogood node
([[def-good-node-and-cogood-node-crystal-operators]],
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F2] For $p$-restricted $\mu,\nu$ one has $\mu=\tilde f_i\nu$ if and only if
$\nu=\tilde e_i\mu$, with both sides defined simultaneously
([[def-good-node-and-cogood-node-crystal-operators]]).

[F3] The reachability proposition guarantees that a path of cogood additions
from $\varnothing$ to every $p$-restricted partition exists; the present
example exhibits one explicitly and checks it node by node
([[prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]]).

## Verification

**Proof technique:** direct.

1.1 The $0$-nodes of $\varnothing$ and $(1)$. The empty partition has the single addable node $(1,1)$ of residue $c-r=0$, so its residue-$0$ word is $(+)$ and the cogood node is $(1,1)$, whence $\tilde f_0\varnothing=(1)$; the partition $(1)$ has the single removable node $(1,1)$ of residue $0$, so its residue-$0$ word is $(-)$ with good node $(1,1)$ and $\tilde e_0(1)=\varnothing$. [given, F1]

1.2 The $1$-nodes of $(1,1)$ and $(1,1,1)$. In $(1,1)$ the residue-$1$ nodes are the addable nodes $(1,2)$ (residue $2-1=1$) and $(3,1)$ (residue $1-3=-2\equiv1$), ordered $(1,2),(3,1)$ top to bottom; the word is $(+,+)$, the cogood node is the last surviving $+$, namely $(3,1)$, and $\tilde f_1(1,1)=(1,1,1)$, while adding $(1,2)$ would lead to $(2,1)$. In $(1,1,1)$ the residue-$1$ nodes are the addable node $(1,2)$ and the removable node $(3,1)$; the word $(+,-)$ is already reduced, so the surviving $+$ is $(1,2)$ and the surviving $-$ is $(3,1)$: the cogood node is $(1,2)$ with $\tilde f_1(1,1,1)=(2,1,1)$, and the good node is $(3,1)$ with $\tilde e_1(1,1,1)=(1,1)$, in agreement with the inverse property of [F2]. [F1, F2]

2.1 The $2$-nodes of $(1)$ and $(1,1)$. The residue-$2$ nodes of $(1)$: the addable node $(2,1)$ has residue $1-2=-1\equiv2$, and there is no other, so the word is $(+)$ with cogood node $(2,1)$ and $\tilde f_2(1)=(1,1)$. For $(1,1)$ the residue-$2$ node is the removable node $(2,1)$ (residue $1-2\equiv2$), the word is $(-)$, the good node is $(2,1)$ and $\tilde e_2(1,1)=(1)$. [step 1.1, F1]

2.2 The $1$-nodes of $(2,1,1)$ and the $2$-nodes of $(2,1,1)$ and $(3,1,1)$. In $(2,1,1)$ the residue-$1$ nodes are the removable nodes $(1,2)$ (residue $2-1=1$) and $(3,1)$ (residue $1-3\equiv1$), listed $(1,2),(3,1)$: the word $(-,-)$ is reduced, so the good node is the first surviving $-$, namely $(1,2)$, and $\tilde e_1(2,1,1)=(1,1,1)$. The residue-$2$ nodes of $(2,1,1)$ are the single addable node $(1,3)$ (residue $3-1=2$): the word is $(+)$ with cogood node $(1,3)$ and $\tilde f_2(2,1,1)=(3,1,1)$. In $(3,1,1)$ the residue-$2$ nodes are the removable node $(1,3)$ (residue $2$) and the interior node $(2,1)$, which is neither addable nor removable; the word is $(-)$ with good node $(1,3)$ and $\tilde e_2(3,1,1)=(2,1,1)$. [step 1.2, F1, F2]

3.1 The path and its reverse. Step 1.1, step 2.1, step 1.2 and step 2.2 exhibit, successively, $\varnothing\to(1)\to(1,1)\to(1,1,1)\to(2,1,1)\to(3,1,1)$ as cogood additions with residues $0,2,1,1,2$, and each reverse step as the deletion of the good node of the same residue; by [F2] this is exactly the assertion that each forward step is a cogood addition and each reverse step a good deletion, and the five residue labels match the displayed path. [step 1.1, step 2.1, step 1.2, step 2.2, F2]

4.1 All reduced signatures claimed in the example are the ones computed: $(-)$ for $(1)$ at $i=0$ in step 1.1, $(-)$ for $(1,1)$ at $i=2$ in step 2.1, $(+,+)$ for $(1,1)$ and $(+,-)$ for $(1,1,1)$ at $i=1$ in step 1.2, and $(-,-)$ for $(2,1,1)$ at $i=1$, $(+)$ for $(2,1,1)$ at $i=2$ and $(-)$ for $(3,1,1)$ at $i=2$ in step 2.2; in particular the signature $(+,-)$ shows that reduced signatures need not be multiplicity-free, and the path still exists as [F3] predicts. [step 1.1, step 2.1, step 1.2, step 2.2, F3] ∎
