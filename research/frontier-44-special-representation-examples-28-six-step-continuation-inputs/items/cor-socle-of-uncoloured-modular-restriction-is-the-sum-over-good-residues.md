---
id: cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues
kind: corollary
title: "The socle of an uncoloured modular restriction is the multiplicity-free sum over the good residues"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-module-radical-socle-head-and-loewy-series,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads,
       thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]
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

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition
$\mu$ of $d\ge1$, and the good $i$-nodes $A_i$ of $\mu$.

[F1] $\operatorname{Res}^{S_d}_{S_{d-1}}M=\bigoplus_{i\in\mathbb Z/p}E_iM$
for every finite-dimensional $kS_d$-module $M$, where each $E_iM$ is a
$kS_{d-1}$-submodule and $E_i$ is the residue-summand functor attached to the
primary Jucys-Murphy idempotents
([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]).

[F2] For a residue $i$ with $\varepsilon_i(\mu)>0$ the good $i$-node $A_i$ is the
unique normal $i$-node with no normal $i$-node above it, and the nodes $A_i$
for distinct residues $i$ are distinct nodes of $\mu$, so the partitions
$\mu\setminus A_i$ of $d-1$ are distinct
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F3] Kleshchev's socle theorem, in its residue-refined form: for every
$p$-restricted $\mu$ and every $i\in\mathbb Z/p$,
$$\operatorname{soc}_{S_{d-1}}\bigl(E_iD(\mu)\bigr)=\begin{cases}D(\mu\setminus A_i),&\varepsilon_i(\mu)>0,\\ 0,&\varepsilon_i(\mu)=0,\end{cases}$$
with $D(\mu\setminus A_i)$ simple and $\mu\setminus A_i$ again $p$-restricted;
equivalently, the socle of the uncoloured restriction is the sum over the
good nodes, and the good $i$-node contributes in the $i$-th residue summand.
The restrictedness of the removed label is recorded in the survey's discussion
of the presentations $\mu=\tilde f_{i_1}\cdots\tilde f_{i_d}\varnothing$
by consecutive removal of good nodes (§11.5, the discussion of (11.3)-(11.4)
after Theorem 11.8, printed p. 54), which states that iterated good-node
removal stays inside the $e$-restricted partitions. This is Kleshchev II
(1995) Theorem 0.5 as recorded in Kleshchev's survey §11.4 (printed pp. 53-54); the proof-bearing
treatment in this page's convention is Brundan (1998), Theorem 2.6 with the
§5.5-5.7 Schur-functor transfer and the Remark 2.4(II) dictionary
(printed pp. 4-5 and 30-32). This item records the theorem and does not
re-prove it; the per-residue refinement of the socle by local arguments is
the subject of the later same-page item
`thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`.

[F4] Distinct $p$-restricted partitions of $d-1$ give non-isomorphic simple
$kS_{d-1}$-modules, and $\nu\mapsto D(\nu)$ is a bijection from the
$p$-restricted partitions of $d-1$ to the isomorphism classes of simple
$kS_{d-1}$-modules. Over a splitting field this is
[[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]] and
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]];
over an arbitrary field $k$ of characteristic $p$ the modules $D(\nu)$ are
nonzero, self-dual and absolutely irreducible by
[[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]],
and because the absolutely irreducible simple modules of the symmetric groups
are defined over the prime field (James, *The Representation Theory of the
Symmetric Groups*, SLN 682, Theorem 11.5), the classification over a splitting
field descends to $k$, so no splitting hypothesis is needed.

[F5] The socle of a finite-dimensional module is the sum of its simple
submodules, and the socle of a direct sum is the direct sum of the socles of
the summands; a simple module is contained in exactly one direct summand of a
direct-sum decomposition in which every summand is a submodule
([[def-module-radical-socle-head-and-loewy-series]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the restriction decomposes as $\operatorname{Res}D(\mu)=\bigoplus_{i\in\mathbb Z/p}E_iD(\mu)$ with each $E_iD(\mu)$ a $kS_{d-1}$-submodule, and by [F5] the socle of the restriction is the direct sum $\bigoplus_i\operatorname{soc}(E_iD(\mu))$. [given, F1, F5]

1.2 By the recorded socle theorem [F3], for each residue $i$ the module $\operatorname{soc}(E_iD(\mu))$ is $D(\mu\setminus A_i)$ when $\varepsilon_i(\mu)>0$ and is $0$ when $\varepsilon_i(\mu)=0$; by [F3] each $\mu\setminus A_i$ is a $p$-restricted partition of $d-1$, so each displayed $D(\mu\setminus A_i)$ is a simple $kS_{d-1}$-module in the sense of [F4]. [given, F3, F4]

2.1 Summing the descriptions of step 1.2 over the finitely many residues $i\in\mathbb Z/p$ and using step 1.1 gives $$\operatorname{soc}_{S_{d-1}}\bigl(D(\mu){\downarrow}_{S_{d-1}}\bigr)=\bigoplus_{i:\,\varepsilon_i(\mu)>0}D(\mu\setminus A_i).$$ [step 1.1, step 1.2, F3]

3.1 The sum is multiplicity-free and its summands are pairwise non-isomorphic: if $i\ne j$ and both $\varepsilon_i(\mu)$ and $\varepsilon_j(\mu)$ are positive, then the good nodes $A_i$ and $A_j$ have different residues and are therefore distinct nodes of $\mu$, so the $p$-restricted partitions $\mu\setminus A_i$ and $\mu\setminus A_j$ of $d-1$ are distinct by [F2]; by [F4] their simple modules $D(\mu\setminus A_i)$ and $D(\mu\setminus A_j)$ are non-isomorphic. Each residue contributes its summand once, so each isomorphism class occurs with multiplicity one in the displayed socle. [step 2.1, F2, F4]

4.1 The displayed decomposition of step 2.1 has the left-hand side $\operatorname{soc}_{S_{d-1}}(D(\mu)\downarrow_{S_{d-1}})$ and, by step 3.1, is a multiplicity-free sum over distinct simple modules with one summand per residue $i$ satisfying $\varepsilon_i(\mu)>0$. No claim is made here about the restriction being semisimple. In the smallest case $d=1$ one has $\mu=(1)$, and the only node of residue $0$ is the removable node $(1,1)$, so $\varepsilon_0(\mu)=1$ and the right-hand side is the single term $D(\varnothing)=k$, while the restriction to the trivial group $S_0$ is $k$ itself, in agreement with the display; this is the smallest instance in which the summands carry the empty partition as a label. [step 2.1, step 3.1, given] ∎

## Remarks

- **Recorded source input.** The identification of the socle with the sum over
  the good nodes, in the residue-refined form used in [F3], is the content of
  Kleshchev II Theorem 0.5 (as recorded in the survey §11.4) and of Brundan
  Theorems 2.6 and 5.4; the present item derives from it the uncoloured
  multiplicity-free residue form used on this page. The local per-residue
  refinement is the subject of
  `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`.
- **No character theory.** Nothing in the proof uses complex characters or
  reciprocity; modular multiplicities are not computed from characteristic
  zero data.
- **Choice.** All index sets are finite and no choice principle is used.
