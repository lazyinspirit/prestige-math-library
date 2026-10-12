---
id: thm-conormal-node-composition-multiplicities-under-residue-induction
kind: theorem
title: "Conormal-node composition multiplicities under residue induction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-normal-node-composition-multiplicities-under-residue-restriction,
       lem-finite-group-induction-is-coinduction-and-thus-biadjoint,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 15
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.7(ii), printed pp. 53-54 (the count of conormal i-nodes weakly above B), attributed there to [29]. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "J. Brundan and A. Kleshchev, On translation functors for general linear and symmetric groups, Proc. London Math. Soc. (3) 80 (2000) 75-106 (the dually stated induction theorem; recorded here from the survey's Theorem 11.7)"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Statement

In the notation of
[[thm-normal-node-composition-multiplicities-under-residue-restriction]], let
$B$ be an addable $i$-node of the $p$-restricted partition $\mu$ such that
$\nu=\mu\cup B$ is again $p$-restricted, and let $F_i$ be the residue-summand
induction functor of
[[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]. Then
$$[\,F_iD(\mu):D(\nu)\,]=0$$
if $B$ is not a conormal $i$-node of $\mu$, and
$$[\,F_iD(\mu):D(\nu)\,]=\#\{B':\ B'\ \text{conormal }i\text{-node of }\mu\text{ weakly above }B\}$$
(counting $B$ itself) if $B$ is conormal. The dual Specht-to-induction Hom
criterion (Kleshchev survey Theorem 11.7(i), Brundan 1998 Theorem 2.5 dual
form) is a distinct statement and is not asserted here.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition
$\mu$ of $d$, an addable $i$-node $B$ with $\nu=\mu\cup B$ $p$-restricted,
and the residue-summand functor $F_i$.

[F1] $F_iM=kS_{d+1}e_{\alpha,\alpha_i}\otimes_{kS_d}M$ for content-$\alpha$
modules and $\operatorname{Ind}^{S_{d+1}}_{S_d}M=\bigoplus_iF_iM$; the
projectors $e_{\alpha,\alpha_i}$ are antipode-invariant idempotents
commuting with $kS_d$, so $F_i$ commutes with contragredient duality and is
exact ([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]).

[F2] For finite groups induction is both a left and a right adjoint of
restriction, and induction is naturally isomorphic to coinduction
([[lem-finite-group-induction-is-coinduction-and-thus-biadjoint]]); the
residue projections are antipode-invariant, so the summands $F_i$ and $E_i$
correspond under this biadjunction up to the contragredient duality of
finite-dimensional modules.

[F3] The normal-node theorem
([[thm-normal-node-composition-multiplicities-under-residue-restriction]]):
for a removable $i$-node $A$ of a $p$-restricted partition with
$\mu\setminus A$ $p$-restricted, $[E_iD(\mu):D(\mu\setminus A)]$ is $0$ if $A$
is not normal and the number of normal $i$-nodes weakly below $A$ (counting
$A$) if $A$ is normal.

[F4] Kleshchev's conormal-node theorem: with the notation of the statement,
$[F_iD(\mu):D(\nu)]=0$ if $B$ is not conormal, and equals the number of
conormal $i$-nodes weakly above $B$ (counting $B$) if $B$ is conormal. This
is Kleshchev's survey Theorem 11.7(ii) (printed pp. 53-54), attributed to
Brundan-Kleshchev, *On translation functors for general linear and symmetric
groups*; the proof uses the translation functors between the corresponding
blocks and their adjunction with the restriction functors. The statement is
recorded here with that source; the present item verifies it against the
normal-node theorem and the worked example below.

[F5] The dictionary between the two conventions: the transpose exchanges
addable and removable nodes and reverses the order in a residue class;
conormal nodes of $\mu$ correspond to conormal nodes of $\mu'$ in Brundan's
convention, and residues negate, $c-r\mapsto r-c$
([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]],
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

## Proof

**Proof technique:** direct.

1.1 The functor $F_i$ and duality. By [F1] each $F_i$ is a direct summand of induction with idempotent projection $e_{\alpha,\alpha_i}$ invariant under the antipode; by [F2] induction is both a left and a right adjoint of restriction, hence $F_i$ is, up to the contragredient duality, both a left and a right adjoint of the corresponding residue restriction $E_i$. This is the mechanism behind the dual statement: the normal-node theorem [F3] computes the multiplicities of the restrictions, and the translation adjunction transfers the count to the induced side with the roles of "weakly below" and "weakly above" exchanged and the roles of removable and addable nodes exchanged. [given, F1, F2, F3]

2.1 The multiplicity. By the recorded conormal-node theorem [F4] the multiplicity $[F_iD(\mu):D(\nu)]$ has exactly the two stated values, read from the conormal $i$-nodes weakly above $B$. The dually stated transfer of step 1.1 identifies the relevant adjoint multiplicity with the normal-node count of [F3] applied to the pair $(\mu\cup B,B)$, in which $B$ is removable; the dictionary [F5] turns the count of normal $i$-nodes weakly below $B$ in $\mu\cup B$ into the count of conormal $i$-nodes weakly above $B$ in $\mu$, and the inverse property of the crystal operators accounts for the node $B$ itself. [step 1.1, F3, F4, F5]

2.2 Calibration. Take $p=2$, $\mu=(1)$ and $B=(2,1)$, so that $\nu=(1,1)$. The $1$-nodes of $\mu$ are the addable nodes $(1,2)$ and $(2,1)$, ordered top to bottom, so the reduced $1$-signature is $(+,+)$ and both nodes are conormal; the count of conormal $1$-nodes weakly above $B$ is $2$. The functor computation gives $F_1D(1)=kS_2e\otimes_{kS_1}k$ with $e=e((0,1))=P_{1,0}P_{2,1}=1$ in characteristic $2$, so $F_1D(1)\cong kS_2$ is the regular module, whose composition multiplicity of the trivial simple module $D(1,1)$ is $2$; this matches the count. The example also shows that the naive unshifted identity $[F_iD(\mu):D(\nu)]=[E_iD(\nu):D(\mu)]$ is *false* in general in positive characteristic: here $[E_1D(1,1):D(1)]=1\ne2$, so the dually stated transfer of step 1.1, and not that identity, is what the proof uses. [step 1.1, F4, F5]

3.1 Conclusion. Step 2.1 gives the two stated values of the multiplicity from the recorded theorem and its dual transfer; step 2.2 checks it in the smallest nontrivial characteristic-$2$ case and records the failure of the naive transfer identity. No complex-character reciprocity and no Fock-space input are used, and the dual Hom criterion is not asserted. [step 2.1, step 2.2] ∎

## Remarks

- **Recorded source input.** The conormal count is Kleshchev's survey
  Theorem 11.7(ii), due to Brundan-Kleshchev's translation-functor paper; the
  present item records it and supplies the dual-transfer discussion and the
  calibration, but does not re-derive the translation-functor machinery.
- **A false scaffold route, recorded.** The scaffold strategy for this item
  proposed the unshifted identity $[F_iD(\mu):D(\nu)]=[E_iD(\nu):D(\mu)]$;
  the characteristic-$2$ example of step 2.2 ($2\ne1$) shows that identity is
  false, and the proof above uses the dually stated theorem instead. This is
  reported in the pair report.
