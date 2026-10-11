---
id: thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction
kind: theorem
title: "The good node gives the simple socle and head of the residue restriction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-normal-node-composition-multiplicities-under-residue-restriction,
       cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues,
       def-module-radical-socle-head-and-loewy-series,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 10
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.6(ii) and the socle statement, printed pp. 53-54, and Theorem 7.4 with §11.3 for the epsilon_i-multiplicity. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, Theorems 2.6 and 5.4 with §5.5-5.7, printed pp. 4-5 and 28-32 (the proof-bearing treatment of the good-node socle in the Hecke convention)"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Statement

Let $k$ be a field of characteristic $p>0$, $\mu$ a $p$-restricted partition
of $d$ and $i\in\mathbb Z/p$ with $\varepsilon_i(\mu)>0$; let $A$ be the good
$i$-node and $\nu=\mu\setminus A$
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]). For the
residue-summand functor $E_i$ of
[[def-generalized-jm-primary-idempotents-and-residue-summand-functors]] the
module $E_iD(\mu)$ has simple socle and simple head, both isomorphic to
$D(\nu)$, and the total (ungraded) multiplicity of $D(\nu)$ in $E_iD(\mu)$ is
$\varepsilon_i(\mu)$. Thus the Loewy endpoints are simple even though the
formal character of $E_iD(\mu)$ may contain the additional normal-node
factors of
[[thm-normal-node-composition-multiplicities-under-residue-restriction]].

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition
$\mu$ of $d$, a residue $i$ with $\varepsilon_i(\mu)>0$, the good $i$-node
$A$ and $\nu=\mu\setminus A$.

[F1] Kleshchev's uncoloured socle theorem in its residue-refined form
([[cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues]]):
$$\operatorname{soc}_{S_{d-1}}\bigl(D(\mu){\downarrow}_{S_{d-1}}\bigr) =\bigoplus_{j:\varepsilon_j(\mu)>0}D(\mu\setminus A_j),$$ a
multiplicity-free sum over the good nodes, one per residue with
$\varepsilon_j(\mu)>0$.

[F2] $\operatorname{Res}D(\mu)=\bigoplus_jE_jD(\mu)$ is a direct sum of
$kS_{d-1}$-submodules. If $X$ is a removable $i$-node of $\mu$,
$\mu\setminus X$ is $p$-restricted, and $D(\mu\setminus X)$ occurs as a
composition factor of the restriction, then every occurrence belongs to the
summand $E_iD(\mu)$ with $\operatorname{res}(X)=i$
([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]); the
localization is proved in
[[thm-normal-node-composition-multiplicities-under-residue-restriction]].

[F3] The normal-node multiplicity theorem
([[thm-normal-node-composition-multiplicities-under-residue-restriction]]):
if $X$ is a removable $i$-node of $\mu$ with $\mu\setminus X$
$p$-restricted, then $[E_iD(\mu):D(\mu\setminus X)]$ is the number of normal
$i$-nodes of $\mu$ weakly below $X$ (counting $X$) when $X$ is normal, and
$0$ otherwise.

[F4] $D(\mu)$ is self-dual for $p$-restricted $\mu$, and the functor $E_i$
commutes with contragredient duality, so $E_iD(\mu)$ is self-dual; and
$D(\nu)$ is simple, self-dual and absolutely irreducible
([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]],
[[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]).

[F5] For a finite-dimensional module $M$: $\operatorname{soc}M$ is the sum of
its simple submodules, the socle of a direct sum is the direct sum of the
socles of its summands, and the head of a self-dual module is the dual of its
socle, $\operatorname{hd}M\cong(\operatorname{soc}M)^*$
([[def-module-radical-socle-head-and-loewy-series]]).

[F6] The good $i$-node is the topmost normal $i$-node, so the normal
$i$-nodes weakly below it are exactly all normal $i$-nodes of $\mu$, and
there are $\varepsilon_i(\mu)$ of them
([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

## Proof

**Proof technique:** direct.

1.1 Socle. By [F5] the socle of $\operatorname{Res}D(\mu)=\bigoplus_jE_jD(\mu)$ is $\bigoplus_j\operatorname{soc}(E_jD(\mu))$. By [F1] the socle of the restriction is the multiplicity-free sum of the $D(\mu\setminus A_j)$ over the good nodes, and by [F2] each summand $D(\mu\setminus A_j)$ lies in $E_jD(\mu)$ with its residue $j$; since a nonzero submodule of $E_jD(\mu)$ cannot lie in $\bigoplus_{l\ne j}E_lD(\mu)$ by the directness of the sum, the $j$-summand of the socle is exactly the single simple module $D(\mu\setminus A_j)$ and $\operatorname{soc}(E_jD(\mu))=D(\mu\setminus A_j)$ is simple. For $j=i$ this gives $\operatorname{soc}(E_iD(\mu))=D(\mu\setminus A)=D(\nu)$. [given, F1, F2, F5]

2.1 Multiplicity. Applying the normal-node theorem [F3] with $X=A$: since $A$ is a normal $i$-node, $[E_iD(\mu):D(\nu)]$ is the number of normal $i$-nodes of $\mu$ weakly below $A$ counting $A$; by [F6] this is $\varepsilon_i(\mu)$. [step 1.1, F3, F6]

2.2 Head. By [F4] the module $E_iD(\mu)$ is self-dual; by [F5] its head is the dual of its socle, $\operatorname{hd}(E_iD(\mu))\cong(\operatorname{soc}(E_iD(\mu)))^*$, which by step 1.1 is $D(\nu)^*\cong D(\nu)$ because $D(\nu)$ is self-dual by [F4]. Hence the head is simple and isomorphic to $D(\nu)$. [step 1.1, F4, F5]

3.1 Conclusion. Step 1.1 gives simple socle $D(\nu)$, step 2.1 the total multiplicity $\varepsilon_i(\mu)$ of $D(\nu)$ in $E_iD(\mu)$, and step 2.2 simple head $D(\nu)$. The additional normal-node composition factors of [F3] may occur in the middle Loewy layers; the statement asserts only the endpoints and the total multiplicity, and no graded shift is displayed before the Hecke/KLR bridge. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Where each input is used.** The simple socle and the identification of
  its label come from the recorded uncoloured socle theorem and the
  localization of the factor in its residue summand; the multiplicity
  $\varepsilon_i(\mu)$ is the normal-node count at the good node, and
  self-duality produces the head. No complex character theory is used.
- **Distinct statements.** The Hom criterion for Specht modules and the
  socle theorem beyond the good-node summands are not asserted here.
