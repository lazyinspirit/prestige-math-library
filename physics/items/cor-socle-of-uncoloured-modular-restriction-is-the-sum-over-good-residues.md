---
id: cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues
kind: corollary
title: "The socle of an uncoloured modular restriction is the multiplicity-free sum over the good residues"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-module-radical-socle-head-and-loewy-series,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads,
       thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction,
       lem-conjugate-specht-sign-duality-over-fields,
       lem-nonzero-maps-between-specht-quotients-force-dominance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 12
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Branching rules for modular representations of symmetric groups II, J. reine angew. Math. 459 (1995) 163-212, Theorem 0.5 (socle and head of the uncoloured restriction as the sum over good nodes) and Theorem 0.6 (the completely reducible case); read through the statement recorded in the survey below (the GDZ scan has no text layer and was not relied on for any assertion here)"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.2-11.4 with Theorem 11.6 and the socle statement of §11.4, printed pp. 52-54. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, Theorem 2.6, Remark 2.7 and Theorems 5.3-5.4 with the §5.5-5.7 transfer, printed pp. 4-5 and 28-32 (the proof-bearing form of the socle statement in the Hecke convention)"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Statement

Let $k$ be a field of characteristic $p>0$ and let $\mu$ be a $p$-restricted
partition of $d\ge1$; write $D(\mu)$ for the simple $kS_d$-module labelled by
$\mu$
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).
Let $A_i$ denote the good $i$-node of $\mu$, for those
$i\in\mathbb Z/p$ with $\varepsilon_i(\mu)>0$
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]). Then
$$\operatorname{soc}_{S_{d-1}}\bigl(D(\mu){\downarrow}_{S_{d-1}}\bigr)=\bigoplus_{i:\,\varepsilon_i(\mu)>0}D(\mu\setminus A_i),$$
a multiplicity-free sum over distinct simple modules: distinct residues give
distinct summands. The sum runs over the residues $i$ with
$\varepsilon_i(\mu)>0$, one good node per such residue; the completely
reducible special case (the restriction is semisimple if and only if every
normal node is good, Kleshchev II Theorem 0.6) is a separate statement and is
not asserted here.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition $\mu$ of $d\ge1$, and the good $i$-nodes $A_i$ of $\mu$.

[F1] $\operatorname{Res}^{S_d}_{S_{d-1}}M=\bigoplus_{i\in\mathbb Z/p}E_iM$ for every finite-dimensional $kS_d$-module $M$, where each $E_iM$ is a $kS_{d-1}$-submodule and $E_i$ is the residue-summand functor attached to the primary Jucys-Murphy idempotents ([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]).

[F2] For a residue $i$ with $\varepsilon_i(\mu)>0$ the good $i$-node $A_i$ is the unique normal $i$-node with no normal $i$-node above it, and the nodes $A_i$ for distinct residues $i$ are distinct nodes of $\mu$, so the partitions $\mu\setminus A_i$ of $d-1$ are distinct ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F3] Steps 1.1–17.1 of
[[thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction]]
prove the restriction endpoint independently of this corollary: the root
interval primitive lines, compensated containment, Schur-corner socle lift
and class-sum localization give
$$\operatorname{soc}_{S_{d-1}}(E_iD(\mu))=\begin{cases}D(\mu\setminus A_i),&\varepsilon_i(\mu)>0,\\0,&\varepsilon_i(\mu)=0.\end{cases}$$
The good-deletion labels are $p$-restricted by that proof's step 11.1.
Only this proved restriction argument is used here; the later induction
endpoint and its conormal multiplicity are not needed.

[F4] Over every field $k$ of characteristic $p$, the conjugate-sign isomorphism of [[lem-conjugate-specht-sign-duality-over-fields]] identifies $S(\nu)=(S^\nu_k)^*$ with $S^{\nu'}_k\otimes\operatorname{sgn}$. Twisting by sign preserves submodules and their radicals, since it multiplies each group operator by a unit scalar. Thus its head is $D(\nu)=D^{\nu'}_k\otimes\operatorname{sgn}$ for $p$-restricted $\nu$. These heads are nonzero and absolutely simple by [[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]]. They are pairwise nonisomorphic: twisting an isomorphism back by sign and applying the separation assertion of [[lem-nonzero-maps-between-specht-quotients-force-dominance]] forces $\nu_1'=\nu_2'$, hence $\nu_1=\nu_2$. No splitting-field descent is assumed.

[F5] The socle of a finite-dimensional module is the sum of its simple submodules, and the socle of a finite direct sum is the direct sum of the socles of the summands. Indeed each projection of a simple submodule is zero or simple, so that submodule lies in the sum of the summand socles; the reverse inclusion holds because each simple submodule of a summand is a submodule of the sum ([[def-module-radical-socle-head-and-loewy-series]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the restriction decomposes as $\operatorname{Res}D(\mu)=\bigoplus_{i\in\mathbb Z/p}E_iD(\mu)$ with each $E_iD(\mu)$ a $kS_{d-1}$-submodule, and by [F5] the socle of the restriction is the direct sum $\bigoplus_i\operatorname{soc}(E_iD(\mu))$. [given, F1, F5]

1.2 By the local restriction argument [F3], for each residue $i$ the module $\operatorname{soc}(E_iD(\mu))$ is $D(\mu\setminus A_i)$ when $\varepsilon_i(\mu)>0$ and is $0$ when $\varepsilon_i(\mu)=0$; by [F3] each $\mu\setminus A_i$ is a $p$-restricted partition of $d-1$, so each displayed $D(\mu\setminus A_i)$ is a simple $kS_{d-1}$-module by [F4]. [given, F3, F4]

2.1 Summing the descriptions of step 1.2 over the finitely many residues $i\in\mathbb Z/p$ and using step 1.1 gives $$\operatorname{soc}_{S_{d-1}}\bigl(D(\mu){\downarrow}_{S_{d-1}}\bigr)=\bigoplus_{i:\,\varepsilon_i(\mu)>0}D(\mu\setminus A_i).$$ [step 1.1, step 1.2, F3]

3.1 The sum is multiplicity-free and its summands are pairwise non-isomorphic: if $i\ne j$ and both $\varepsilon_i(\mu)$ and $\varepsilon_j(\mu)$ are positive, then the good nodes $A_i$ and $A_j$ have different residues and are therefore distinct nodes of $\mu$, so the $p$-restricted partitions $\mu\setminus A_i$ and $\mu\setminus A_j$ of $d-1$ are distinct by [F2]; by [F4] their simple modules $D(\mu\setminus A_i)$ and $D(\mu\setminus A_j)$ are non-isomorphic. Each residue contributes its summand once, so each isomorphism class occurs with multiplicity one in the displayed socle. [step 2.1, F2, F4]

4.1 The displayed decomposition of step 2.1 has the left-hand side $\operatorname{soc}_{S_{d-1}}(D(\mu)\downarrow_{S_{d-1}})$ and, by step 3.1, is a multiplicity-free sum over distinct simple modules with one summand per residue $i$ satisfying $\varepsilon_i(\mu)>0$. No claim is made here about the restriction being semisimple. In the smallest case $d=1$ one has $\mu=(1)$, and the only node of residue $0$ is the removable node $(1,1)$, so $\varepsilon_0(\mu)=1$ and the right-hand side is the single term $D(\varnothing)=k$, while the restriction to the trivial group $S_0$ is $k$ itself, in agreement with the display; this is the smallest instance in which the summands carry the empty partition as a label. [step 2.1, step 3.1, given] ∎

## Remarks

- **Proof input.** The per-residue endpoint is proved in steps 1.1–17.1 of [[thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction]]. That argument does not depend on this corollary or on the later `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`; the latter uses this corollary together with the normal-node count. The cited literature documents the origin of the result.
- **No character theory.** Nothing in the proof uses complex characters or reciprocity; modular multiplicities are not computed from characteristic zero data.
- **Choice.** All index sets are finite and no choice principle is used.
