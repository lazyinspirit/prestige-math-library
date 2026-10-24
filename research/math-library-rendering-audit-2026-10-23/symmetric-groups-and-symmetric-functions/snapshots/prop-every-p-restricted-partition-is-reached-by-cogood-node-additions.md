---
id: prop-every-p-restricted-partition-is-reached-by-cogood-node-additions
kind: proposition
title: "Every $p$-restricted partition is reached from the empty partition by cogood additions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-good-node-and-cogood-node-crystal-operators,
       cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues,
       thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions,
       lem-conjugate-specht-sign-duality-over-fields,
       def-restriction-induction-and-coinduction-for-group-modules,
       lem-the-group-ring-is-free-over-a-subgroup-ring,
       def-module-radical-socle-head-and-loewy-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §3.4 with (3.13)-(3.14) and Example 3.2(i), printed pp. 18-20, and §11.4 with Theorem 11.6, printed pp. 53-54 (connectivity of the restricted-partition graph and the identification with p-restricted partitions). Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Alexander Kleshchev, Branching rules for modular representations of symmetric groups II, J. reine angew. Math. 459 (1995) 163-212, historical origin of modular branching; the reachability statement used here is the 2010 survey, §3.4, (3.14), Example 3.2(i), cited above"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Statement

Let $k$ be a field of characteristic $p>0$. Every $p$-restricted partition
$\mu$ of $d$ is obtained from the empty partition by $d$ successive cogood
additions: there are residues $i_1,\dots,i_d$ with
$$\mu=\tilde f_{i_d}\cdots\tilde f_{i_1}\varnothing;$$
equivalently, every $p$-restricted $\mu\ne\varnothing$ has at least one good
node, and successive good deletions carry $\mu$ to $\varnothing$
([[def-good-node-and-cogood-node-crystal-operators]],
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]). Hence, in
the graph whose vertices are the $p$-restricted partitions and whose edges
join $\nu$ to $\tilde f_i\nu$ for every $i$ for which the operator is
defined, the empty partition is the unique vertex of rank $0$ and every
vertex is reached from it; dually every vertex reaches the empty partition by
successive good deletions. The argument is choice-free.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition
$\mu$ of $d$, and the simple $kS_d$-module $D(\mu)$.

[F1] For a finite-dimensional $kS_d$-module $M$ the multiplication
$kS_d\otimes_{kS_d}M\to M$ is the identity, and the counit
$kS_d\otimes_{kS_{d-1}}M\to M$, $g\otimes m\mapsto gm$, of the
induction-restriction adjunction is a surjective $kS_d$-module map; the
group ring $kS_d$ is free of rank $d$ as a right $kS_{d-1}$-module
([[def-restriction-induction-and-coinduction-for-group-modules]],
[[lem-the-group-ring-is-free-over-a-subgroup-ring]]).

[F2] If $M\ne0$ is a finite-dimensional module over a finite-dimensional
$k$-algebra, then $M$ has a nonzero simple submodule: a nonzero submodule of
least positive dimension exists and has no proper nonzero submodule; the
socle $\operatorname{soc}(M)$ is the sum of the simple submodules of $M$
([[def-module-radical-socle-head-and-loewy-series]]).

[F3] For every field $k$ of characteristic $p$, the ordinary Specht
module $S^{\mu'}_k$ has nonzero absolutely simple head $D^{\mu'}_k$
when $\mu$ is $p$-restricted, since $\mu'$ is $p$-regular
([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]]).
The arbitrary-field isomorphism $(S^\mu_k)^*\cong
S^{\mu'}_k\otimes\operatorname{sgn}$ identifies its dual-Specht head
with $D(\mu)=D^{\mu'}_k\otimes\operatorname{sgn}$
([[lem-conjugate-specht-sign-duality-over-fields]]). Tensoring by sign
is an exact equivalence, so this head is nonzero and simple over the original
field. Only existence of this head is needed here, not completeness of a
simple-label classification or a splitting modular system.

[F4] Kleshchev's residue-refined socle theorem: for $p$-restricted $\mu$,
$$\operatorname{soc}_{S_{d-1}}\bigl(D(\mu){\downarrow}_{S_{d-1}}\bigr)=\bigoplus_{i:\,\varepsilon_i(\mu)>0}D(\mu\setminus A_i),$$
a multiplicity-free sum over the good nodes $A_i$, one for each residue with
$\varepsilon_i(\mu)>0$
([[cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues]]).

[F5] For a $p$-restricted $\mu$ and a residue $i$: the good $i$-node $A_i$
exists exactly when $\varepsilon_i(\mu)>0$; deleting it returns a
$p$-restricted partition $\mu\setminus A_i$ of $d-1$; adding the cogood
$i$-node returns a $p$-restricted partition; and
$\mu=\tilde f_i\nu\iff\nu=\tilde e_i\mu$ for $p$-restricted $\mu,\nu$
([[def-good-node-and-cogood-node-crystal-operators]]).

## Proof

**Proof technique:** direct.

1.1 Restriction is faithful on nonzero modules. Let $M\ne0$ be a finite-dimensional $kS_d$-module and consider the multiplication map $\varphi:kS_d\otimes_{kS_{d-1}}M\to M$, $\varphi(g\otimes m)=gm$, where $M$ is regarded as a $kS_{d-1}$-module by restriction. It is $kS_d$-linear and surjective, since the image of $1\otimes m$ is $m$ and the elements $m$ span $M$; hence if the restriction of $M$ to $kS_{d-1}$ were zero, the tensor product would be zero and $M=0$, a contradiction. Therefore restriction sends no nonzero module to zero. [given, F1]

1.2 Nonzero finite-dimensional modules have nonzero socle: choosing a nonzero submodule of least positive dimension gives a simple submodule, so the socle, which is the sum of all simple submodules, is nonzero. [given, F2]

1.3 $D(\mu)$ is a nonzero simple $kS_d$-module by [F3], because $\mu$ is $p$-restricted. [given, F3]

2.1 Applying step 1.1 to $M=D(\mu)$ with $d\ge1$: since $D(\mu)\ne0$ by step 1.3, its restriction to $S_{d-1}$ is nonzero. [step 1.1, step 1.3]

3.1 By step 1.2 applied to the nonzero finite-dimensional $kS_{d-1}$-module $\operatorname{Res}D(\mu)$ from step 2.1, the socle $\operatorname{soc}_{S_{d-1}}(D(\mu)\downarrow_{S_{d-1}})$ is nonzero. [step 1.2, step 2.1]

4.1 By the residue-refined socle theorem [F4], the socle is the multiplicity-free sum of the simple modules $D(\mu\setminus A_i)$ over the residues $i$ with $\varepsilon_i(\mu)>0$. Since this socle is nonzero by step 3.1, at least one residue satisfies $\varepsilon_i(\mu)>0$. [step 3.1, F4]

5.1 Fix such a residue $i$. By [F5] the good $i$-node $A_i$ exists, $\nu:=\mu\setminus A_i$ is a $p$-restricted partition of $d-1$, and $\mu=\tilde f_i\nu$ with $\tilde f_i\nu=\nu\cup A_i$. [step 4.1, F5]

6.1 Induction on $d$. We prove that every $p$-restricted partition of $d$ is reachable from $\varnothing$ by $d$ cogood additions. For $d=0$ the empty partition is the only partition and it is reached by the empty sequence. For $d\ge1$ and a $p$-restricted partition $\mu$ of $d$, if $\mu=\varnothing$ there is nothing to prove, and otherwise step 5.1 supplies a residue $i$ and a $p$-restricted partition $\nu$ of $d-1$ with $\mu=\tilde f_i\nu$; by the inductive hypothesis $\nu=\tilde f_{i_{d-1}}\cdots\tilde f_{i_1}\varnothing$ for suitable residues, whence $\mu=\tilde f_i\tilde f_{i_{d-1}}\cdots\tilde f_{i_1}\varnothing$. The residue $i$ is selected as, say, the least residue with $\varepsilon_i(\mu)>0$, so no choice principle is used. [step 5.1, induction]

7.1 Good deletions carry every $p$-restricted partition to $\varnothing$. At each nonempty stage step 5.1 produces a good node and, by [F5], the partition obtained by deleting it is again $p$-restricted of rank one less; iterating $d$ times reaches the only partition of rank $0$, which is $\varnothing$; equivalently, by the inverse property in [F5], the two procedures are mutually inverse step by step. [step 6.1, F5]

8.1 Consequences for the graph. By definition the edges of the graph are the partial operations $\nu\mapsto\tilde f_i\nu$, so step 6.1 says exactly that every $p$-restricted partition is reached from $\varnothing$; step 7.1 says every vertex reaches $\varnothing$ by good deletions $\tilde e_i$. The empty partition is the unique partition of $0$, so it is the unique rank-$0$ vertex, and it has no incoming edge from a $p$-restricted partition because no partition of $-1$ exists; all ranks are finite. No step used the characteristic of $k$ beyond the existence of the socle theorem [F4], and no choice principle was used. [step 6.1, step 7.1] ∎

## Remarks

- **Where the mathematics sits.** The two inputs are the residue-refined socle
  theorem [F4] and the combinatorial inverse property [F5]; the present item
  is the induction that turns them into the connectivity of the
  restricted-partition graph. This is the level-one case of Kleshchev's
  statement that the restricted multipartitions are exactly the vertices
  reachable from $\varnothing$ (survey (3.14) with Example 3.2(i)).
- **No circularity.** The induction removes a good node and reduces the rank;
  the operator item's closure statements (proved there) keep the reduced
  partition in the class, so no restrictedness is assumed silently.
