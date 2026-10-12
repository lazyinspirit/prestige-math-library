---
id: thm-nakayama-block-classification-for-symmetric-groups
kind: theorem
title: "Nakayama block classification for symmetric groups"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [def-e-core-e-quotient-and-e-weight, def-p-blocks-by-primitive-central-idempotents, prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one, cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core, prop-core-quotient-size-and-weight-formula, def-splitting-p-modular-system-for-a-finite-group, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents, lem-central-idempotent-decompositions-of-one-are-unique, thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core, thm-e-core-is-independent-of-the-rim-hook-removal-order]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Corollary 5.37 (Dipper-James, James-Mathas) with its printed proof, printed pp. 61-63, specialised at $q=1$ using the $q=1$ identifications of Chapters 1, 3 and 4 (the group algebra $FS_n$ and the classical Specht modules)"
    - title: "Joseph O'Donovan, On the blocks of the symmetric group, arXiv:1708.04365 (complete preprint)"
      url: "https://arxiv.org/abs/1708.04365"
      locator: "Theorem 1, printed p. 1: the classification of the blocks of $kS_n$ by $p$-cores; recorded in this page's coverage as an independent confirmation of the statement (independent Young-module and Brauer-quotient route), not as the proof route of this page"
---

## Statement

Let $k$ be a splitting field of characteristic $p>0$ (equivalently the residue
field of the fixed splitting $p$-modular system,
[[def-splitting-p-modular-system-for-a-finite-group]],
[[def-p-blocks-by-primitive-central-idempotents]]) and let $n\ge0$. Two Specht
modules $S^{\lambda}_k,S^{\mu}_k$ of $k[S_n]$ lie in the same block of
$k[S_n]$ if and only if $\lambda,\mu\vdash n$ have the same $p$-core
([[def-e-core-e-quotient-and-e-weight]]). Consequently the blocks of $k[S_n]$
are indexed by the pairs $(\gamma,w)$ with $\gamma$ a $p$-core, $w\in\mathbb
N_0$ and $n=|\gamma|+pw$, and the block of $S^{\lambda}_k$ is the pair
$(C_p(\lambda),w_p(\lambda))$ with $w_p(\lambda)=(n-|C_p(\lambda)|)/p$
([[prop-core-quotient-size-and-weight-formula]]).

No choice principle is used.

## Facts & Assumptions

**Given:** A splitting field $k$ of characteristic $p>0$ with the fixed
splitting $p$-modular system, an integer $n\ge0$, and the group algebra
$k[S_n]$ with group Specht modules $S^{\lambda}_k$ for $\lambda\vdash n$.

[F1] The algebra isomorphism $H_{k,1}(S_n)\cong k[S_n]$ sends each ordinary Dipper-James Specht module to the classical group Specht module of the same shape, and the quantum characteristic at $q=1$ in characteristic $p$ equals $p$ ([[prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one]], [[def-quantum-characteristic-of-an-invertible-hecke-parameter]]). The module comparison uses the accepted signed conjugate Murphy/ordinary dictionary before specialising; it does not identify the same-shape Murphy cell module with the ordinary Specht module.

[F2] The Hecke block criterion, in the Dipper-James normalisation of the same
Specht modules as [F1]:
[[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]]
states that for a field $k$ and $q\in k^{\times}$ of quantum characteristic
$e\ge2$, two Specht modules $S^{\lambda},S^{\mu}$ of $H_{k,q}(S_n)$ lie in the
same block if and only if $C_e(\lambda)=C_e(\mu)$, and that the blocks are
indexed by the $e$-cores $\gamma$ with $|\gamma|\le n$ and
$|\gamma|\equiv n\pmod e$.

[F4] The core-quotient size formula
[[prop-core-quotient-size-and-weight-formula]]: for every $e\ge2$ and
$\lambda\vdash n$ one has $n=|C_e(\lambda)|+e\,w_e(\lambda)$ with
$w_e(\lambda)=|Q_e(\lambda)|\in\mathbb N_0$, and for an $e$-core $\gamma$ the
condition $|\gamma|\le n$, $|\gamma|\equiv n\pmod e$ is exactly the condition
that $n-|\gamma|$ be an admissible $e$-weight; conversely every such $\gamma$
occurs as the core of a partition of $n$
([[thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]],
[[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

[F5] An algebra isomorphism $\varphi:A\to B$ preserves blocks: it maps a central
idempotent $z$ to the central idempotent $\varphi(z)$, preserves primitivity,
and hence induces a bijection between the block sets
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]],
[[lem-central-idempotent-decompositions-of-one-are-unique]]).

## Proof


**Proof technique:** direct.

1.1 Specialisation. Take $q=1\in k^{\times}$ and $e$ the quantum characteristic of $(k,q)$; since $q=1$ and $\operatorname{char}k=p>0$, [F1] gives $e=p$. By [F1] there is an algebra isomorphism $H_{k,1}(S_n)\cong k[S_n]$ carrying the Hecke Specht modules of $H_{k,1}(S_n)$ to the group Specht modules $S^{\lambda}_k$, so by [F5] this isomorphism induces a bijection between the blocks of the two algebras that matches $S^{\lambda}$ with $S^{\lambda}_k$; in particular $S^{\lambda}_k$ and $S^{\mu}_k$ lie in the same block of $k[S_n]$ if and only if the corresponding Hecke Specht modules lie in the same block of $H_{k,1}(S_n)$. [F1, F5, algebra]

2.1 The core criterion. Applying the Hecke block criterion [F2] with $q=1$ and $e=p$, the Hecke Specht modules of $H_{k,1}(S_n)$ lie in the same block if and only if the labels $\lambda,\mu$ have the same $p$-core. Together with step 1.1 this gives: $S^{\lambda}_k$ and $S^{\mu}_k$ lie in the same block of $k[S_n]$ if and only if $C_p(\lambda)=C_p(\mu)$. [F2, step 1.1]

3.1 The parametrisation by cores and weights. By [F2] the blocks of $H_{k,1}(S_n)$, hence by step 1.1 the blocks of $k[S_n]$, are indexed by the $p$-cores $\gamma$ with $|\gamma|\le n$ and $|\gamma|\equiv n\pmod p$; the block of $S^{\lambda}_k$ corresponds to $C_p(\lambda)$. For $n\ge0$ and such a $\gamma$ put $w:=(n-|\gamma|)/p\in\mathbb N_0$; by [F4] this is exactly the $p$-weight $w_p(\lambda)$ of any Specht label with core $\gamma$, and $n=|\gamma|+pw$. Since $w$ is determined by $n$ and $\gamma$, the map $\gamma\mapsto(\gamma,w)$ is a bijection onto the displayed set of pairs, and the block of $S^{\lambda}_k$ is the pair $(C_p(\lambda),w_p(\lambda))$. [F4, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 establish both assertions: the same-block criterion by the $p$-core, and the indexing of the blocks by the pairs $(\gamma,w)$ with $n=|\gamma|+pw$ together with the identification of the block of $S^{\lambda}_k$ as $(C_p(\lambda),w_p(\lambda))$. [step 2.1, step 3.1] ∎

The classification is stated independently, by a Young-module and
Brauer-quotient route, as Theorem 1 of O'Donovan's preprint recorded in the
sources; that reference is an independent confirmation of the statement and is
not used in the proof above. No choice principle is used anywhere in this
item.
