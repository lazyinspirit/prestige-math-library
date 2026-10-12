---
id: thm-normal-node-composition-multiplicities-under-residue-restriction
kind: theorem
title: "Normal-node composition multiplicities under residue restriction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jucys-murphy-elements-of-the-symmetric-group-algebra,
       lem-transposition-class-sum-acts-on-a-specht-module-by-total-content,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-kleshchev-first-level-branching-multiplicity,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads,
       thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 14
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.6(ii), printed pp. 53-54 (the count of normal i-nodes weakly below A). Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Alexander Kleshchev, Branching rules for modular representations of symmetric groups II, J. reine angew. Math. 459 (1995) 163-212, Theorems 0.4 and 0.5 (the normal-node and socle theorems); read through the statement recorded in the survey above (the GDZ scan has no text layer)"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, Theorems 2.5-2.6, Remark 2.7 and §5.5-5.7, printed pp. 4-5 and 30-32 (the proof-bearing treatment), and Remark 2.4(II) (the transposed-node dictionary)"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Statement

Let $k$ be a field of characteristic $p>0$, $\mu$ a $p$-restricted partition
of $d$ and $A$ a removable $i$-node of $\mu$ such that $\nu=\mu\setminus A$
is again $p$-restricted; let $D(\mu)$ be the simple $kS_d$-module labelled by
$\mu$ in the dual-Specht (cellular) convention, so that
$D(\mu)\cong D^{\mu'}\otimes\operatorname{sgn}$
([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]],
[[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]), and let
$E_i$ be the residue-summand functor of
[[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]. Then
$$[\,E_iD(\mu):D(\nu)\,]=0$$
if $A$ is not a normal $i$-node of $\mu$, and
$$[\,E_iD(\mu):D(\nu)\,]=\#\{B:\ B\ \text{normal }i\text{-node of }\mu\text{ weakly below }A\}$$
(counting $A$ itself) if $A$ is normal. The corresponding
Specht-to-restriction Hom criterion (Brundan 1998 Theorem 2.5, equivalently
Kleshchev II Theorem 0.4) is a distinct statement and is not asserted here.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a $p$-restricted partition
$\mu$ of $d$, a removable $i$-node $A=(r,\mu_r)$ with $\nu=\mu\setminus A$
$p$-restricted, and the residue-summand functor $E_i$.

[F1] $\operatorname{Res}^{S_d}_{S_{d-1}}M=\bigoplus_jE_jM$, and $E_jM$ is the
sum of the generalized eigenspaces of the last Jucys-Murphy element
$L_d=T_d-T_{d-1}$ with eigenvalue $j$, for every finite-dimensional
$kS_d$-module $M$; here $T_m=\sum_{1\le a<b\le m}(a\ b)$ is the
transposition class sum of $S_m$
([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]],
[[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F2] The central transposition class sum $T_m$ acts on the ordinary integral Specht lattice and every field specialization by the total content $z_\xi=\sum_{(r,c)\in[\xi]}(c-r)$ ([[lem-transposition-class-sum-acts-on-a-specht-module-by-total-content]]). At $m=0,1$, both the class sum and total content are zero directly. The actual same-shape perfect pairing identifies the Murphy cell $C_{\mathrm M}(\xi)$ with the star dual of the ordinary Specht module ([[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]]). Since $T_m^*=T_m$, the same scalar acts on that dual and its nonzero form quotient $D(\xi)$. This uses the ordinary module itself, not a false ordinary/Murphy equality of form radicals.

[F3] For a $p$-restricted $\nu$, the module $D(\nu)$ is nonzero, simple,
self-dual and absolutely irreducible, so every $kS_{d-1}$-endomorphism of
$D(\nu)$ is a scalar ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).

[F4] The complete locally proved piecewise count is [[thm-kleshchev-first-level-branching-multiplicity]]. For the ordinary regular label $\lambda=\mu'$ and the transposed removable node $A'$, its multiplicity is zero off normality and counts the same-residue normal nodes weakly above $A'$ on normality. The group sign/conjugate dictionary and signature order in [F5] transport this exact count; no bibliographic normal-node theorem is a proof premise.

[F5] The dictionary between the two conventions: transposing exchanges
removable nodes of $\lambda$ with removable nodes of $\lambda'$, exchanges
"strictly above" for the dual order of the same residue class, and negates
residues, $c-r\mapsto r-c$; the normal nodes of $\lambda'$ in the signature
sense are exactly the transposes of the normal nodes of $\lambda$ in
Brundan's sense ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).

## Proof

**Proof technique:** direct.

1.1 Localization of an occurring factor. On $D(\mu)$ the class sum $T_d$ acts by $z_\mu$ by [F2], hence it acts by that scalar on the whole restriction. The operator $L_d=T_d-T_{d-1}$ on this restriction is therefore $z_\mu-T_{d-1}$, a central $kS_{d-1}$ operator preserving every submodule. If $D(\nu)$ occurs as a composition factor, [F2] gives its $T_{d-1}$ scalar $z_\nu$. Thus $L_d$ acts on this factor by $z_\mu-z_\nu=c(A)-r(A)=i$. The generalized primary projections are exact by [F1]; every occurrence of this factor lies in $E_iD(\mu)$, and none in another summand. Consequently $[E_iD(\mu):D(\nu)]=[D(\mu)\downarrow_{S_{d-1}}:D(\nu)]$, also when both sides are zero. This does not assert that a factor occurs before its multiplicity is computed. [F1, F2, F3, given]

2.1 Apply the local count [F4] to $\lambda=\mu'$ and the ordinary node $A'$. The group dictionary is $D(\mu)\cong D^{\mu'}\otimes\operatorname{sgn}$ and likewise for $\nu$; sign restricts to sign, so simultaneous twist preserves the restriction multiplicity. Transposing negates residues and reverses the order of corners in a fixed residue class, as [F5] states. The ordinary piecewise formula is therefore zero when $A$ is not normal, and otherwise is the number of normal $i$-nodes weakly below $A$, counting $A$ itself. Combine this with step 1.1. The unconditioned weakly-below count is not used off normality. [F4, F5, step 1.1, algebra]

3.1 For $p=3$ and $\mu=(3,3,2,1,1)$, the normal residue-$2$ nodes are $(3,2)$ and $(5,1)$; the same-residue signature has the two minus signs and no plus sign. The two respective regular removals give multiplicities $2$ and $1$ by step 2.1. At degree one the same argument gives the one-dimensional restriction to $S_0$; degree zero has no removable node. Thus the boundary cases and both displayed cases are included. No Specht-to-restriction Hom criterion is asserted. [F4, F5, step 2.1, algebra] ∎

## Remarks

The complete count proof is the local first-level supplier, built from the integral root-interval basis and finite essential-subset recurrence. The cited Kleshchev and Brundan papers document the historical source of this formula; they are not external proof premises. The new local contribution here is the conditional class-sum localization and the exact transpose/sign transport. No unconditional count or implication from a zero form quotient to a zero actual module head is used.
