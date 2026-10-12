---
id: thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction
kind: theorem
title: "The cogood node gives the simple socle and head of the residue induction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction,
       thm-conormal-node-composition-multiplicities-under-residue-induction,
       lem-finite-group-induction-is-coinduction-and-thus-biadjoint,
       def-module-radical-socle-head-and-loewy-series,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       def-good-node-and-cogood-node-crystal-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 16
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.7 and the dual socle statement, printed pp. 53-54. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, §5.5 with the statement that the deduction of Theorem 2.6 from Theorem 5.4 is entirely similar, printed pp. 30-32 (the dual socle/head treatment)"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Statement

Let $k$ be a field of characteristic $p>0$, $\mu$ a $p$-restricted partition
of $d$ and $i\in\mathbb Z/p$ with $\varphi_i(\mu)>0$; let $B$ be the cogood
$i$-node and $\nu=\mu\cup B$
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]). Then
$F_iD(\mu)$ has simple socle and simple head, both isomorphic to $D(\nu)$,
and the total (ungraded) multiplicity of $D(\nu)$ in $F_iD(\mu)$ is
$\varphi_i(\mu)$
([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]).

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition
$\mu$ of $d$, a residue $i$ with $\varphi_i(\mu)>0$, the cogood $i$-node $B$
and $\nu=\mu\cup B$.

[F1] The cogood socle/head statement: $F_iD(\mu)$ has simple socle and head
$D(\nu)$ when $\varphi_i(\mu)>0$. This is the dual of the good-node statement
in the Hecke convention (the deduction of Theorem 2.6 from Theorem 5.4 is
"entirely similar", Brundan §5.5, printed p. 32; Kleshchev's survey §11.4
with Theorem 11.7). The statement is recorded here with those locators; the
local content of this item is the multiplicity computation, the duality
identification of the endpoints and the calibration below.

[F2] The conormal-node multiplicity theorem
([[thm-conormal-node-composition-multiplicities-under-residue-induction]]):
if $B$ is a conormal $i$-node then $[F_iD(\mu):D(\mu\cup B)]$ is the number
of conormal $i$-nodes of $\mu$ weakly above $B$ (counting $B$), and $0$
otherwise.

[F3] The cogood $i$-node is the bottommost conormal $i$-node, so the
conormal $i$-nodes weakly above it are exactly all conormal $i$-nodes of
$\mu$, and there are $\varphi_i(\mu)$ of them; and $B$ is the good $i$-node
of $\nu=\mu\cup B$
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]],
[[def-good-node-and-cogood-node-crystal-operators]]).

[F4] $F_i$ commutes with contragredient duality because the projectors are
antipode-invariant, and $D(\mu),D(\nu)$ are simple and self-dual
([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).

[F5] The head of a finite-dimensional self-dual module is the dual of its
socle; $F_iD(\mu)$ is self-dual by [F4]
([[def-module-radical-socle-head-and-loewy-series]]).

## Proof

**Proof technique:** direct.

1.1 Multiplicity. By [F3] the node $B$ is conormal in $\mu$ and the conormal $i$-nodes weakly above $B$ are all conormal $i$-nodes, so by the conormal-node theorem [F2], $[F_iD(\mu):D(\nu)]=\varphi_i(\mu)$. [given, F2, F3]

2.1 Endpoints. The recorded statement [F1] gives that the socle of $F_iD(\mu)$ is the single simple module $D(\nu)$; since $F_iD(\mu)$ is self-dual by [F4], its head is the dual of its socle by [F5], namely $D(\nu)^*\cong D(\nu)$ by the self-duality in [F4]. Hence both endpoints are $D(\nu)$. [step 1.1, F1, F4, F5]

2.2 Calibration. Take $p=2$, $\mu=(1)$, $B=(2,1)$ and $\nu=(1,1)$. The $1$-nodes of $\mu$ are $(1,2)$ and $(2,1)$, both addable and conormal, so $\varphi_1(\mu)=2$, and the cogood node is the bottommost of them, $B=(2,1)$; the functor computation gives $F_1D(1)\cong kS_2$ with the trivial module $D(1,1)$ as its unique simple, of total multiplicity $2$ and with simple socle and head $D(1,1)$, matching the statement. [step 1.1, F1, F3]

3.1 Conclusion. Step 1.1 gives the total multiplicity $\varphi_i(\mu)$, step 2.1 the simple socle and head $D(\nu)$, and step 2.2 checks the smallest nontrivial characteristic-$2$ case. The identification of the socle with $D(\nu)$ is recorded from the dual source statement [F1]; the multiplicity is computed locally from the conormal-node theorem, and no complex-character reciprocity and no graded input are used. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Dual source statement.** The simple-socle identification is the dual of
  the good-node statement and is recorded from Brundan §5.5 / Kleshchev
  survey §11.4; the proof above does not attempt to derive it from the
  (false) unshifted duality of the two functors, which is discussed in
  `thm-conormal-node-composition-multiplicities-under-residue-induction`.
- **Choice.** Nothing here uses a choice principle.
