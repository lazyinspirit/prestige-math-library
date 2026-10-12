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
       thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]
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

[F2] For every $m\ge0$ the element $T_m$ acts on the complex Specht module
$S^\nu_{\mathbb C}$ by the scalar $z_\nu=\sum_{x\in[\nu]}(c(x)-r(x))$, the
total node content, and hence on the integral Specht lattice and on every
quotient of its reduction by the reduction of that integer scalar
([[lem-transposition-class-sum-acts-on-a-specht-module-by-total-content]]; the source's separate $m\ge2$ clause on the transposition character value $\chi^\nu((1\ 2))$ is not used here);
the complex result extends to the integral lattice because the operator
$T_m-z_\nu$ is a $\mathbb Z$-linear endomorphism of a torsion-free
$\mathbb Z$-module whose scalar extension to $\mathbb C$ vanishes.

[F3] For a $p$-restricted $\nu$, the module $D(\nu)$ is nonzero, simple,
self-dual and absolutely irreducible, so every $kS_{d-1}$-endomorphism of
$D(\nu)$ is a scalar ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).

[F4] Kleshchev's normal-node multiplicity theorem: with the notation of the
statement, $[E_iD(\mu):D(\nu)]=0$ if $A$ is not a normal $i$-node, and
$[E_iD(\mu):D(\nu)]$ is the number of normal $i$-nodes of $\mu$ weakly below
$A$ (counting $A$) if $A$ is normal. This is Kleshchev II Theorem 0.5 as
recorded in Kleshchev's survey Theorem 11.6(ii) (printed pp. 53-54); the
proof-bearing treatment in the Hecke convention is Brundan (1998),
Theorems 2.5-2.6 with the §5.5-5.7 Schur-functor transfer and the
Remark 2.4(II) dictionary (printed pp. 4-5, 30-32). This item records that
theorem and proves the localization step below; the alternative local route
through [[thm-kleshchev-first-level-branching-multiplicity]] is given in
step 2.1.

[F5] The dictionary between the two conventions: transposing exchanges
removable nodes of $\lambda$ with removable nodes of $\lambda'$, exchanges
"strictly above" for the dual order of the same residue class, and negates
residues, $c-r\mapsto r-c$; the normal nodes of $\lambda'$ in the signature
sense are exactly the transposes of the normal nodes of $\lambda$ in
Brundan's sense ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).

## Proof

**Proof technique:** direct.

1.1 Localization: $D(\nu)$ lies in $E_iD(\mu)$. On the simple module $D(\mu)$ the central element $T_d$ acts by the scalar $z_\mu=\sum_{x\in[\mu]}c(x)$ by [F2] applied to the Specht module whose head is $D(\mu)$, so it acts by that same scalar on every subquotient of $\operatorname{Res}D(\mu)$; in particular on the composition factor $D(\nu)$ it acts by $z_\mu$. The element $T_{d-1}\in kS_{d-1}$ acts on $D(\nu)$ by the scalar $z_\nu$ by [F2], and these are scalar endomorphisms by [F3]. Hence the last Jucys-Murphy element $L_d=T_d-T_{d-1}$ acts on $D(\nu)$ by the scalar $z_\mu-z_\nu$, which is the total content of the single node $\mu\setminus\nu=A$, namely $c-r=\operatorname{res}(A)=i$ for $A=(r,c)$; so $D(\nu)$ is contained in the generalized eigenspace of $L_d$ with eigenvalue $i$, which is the definition of $E_iD(\mu)$ in [F1]. [given, F1, F2, F3]

2.1 The multiplicity. By the recorded normal-node theorem [F4] the multiplicity $[E_iD(\mu):D(\nu)]$ has exactly the two stated values, read from the normal $i$-nodes weakly below $A$. The same values follow from the alternative route that transfers the $p$-regular theorem [[thm-kleshchev-first-level-branching-multiplicity]] through the dictionary [F5]: the restriction multiplicity is unchanged by the sign twist, the transpose exchanges "strictly above $A$" with the dual order in the same residue class and negates the residues, so the $p$-regular count $1+\#\{B\text{ normal above }A,\ \operatorname{res}B=\operatorname{res}A\}$ becomes the count of normal $i$-nodes weakly below $A$, counting $A$; at $p=2$ the sign twist is trivial but the transpose and the order reversal are still required. [step 1.1, F4, F5]

3.1 Calibration. For $p=3$ and $\mu=(3,3,2,1,1)$ the normal $2$-nodes are $(3,2)$ and $(5,1)$: both are removable, their residues are $2-3\equiv2$ and $1-5\equiv2$, and the signature computation of [[def-residue-signature-normal-good-conormal-and-cogood-nodes]] gives the reduced $2$-word $(-,-)$; taking $A=(3,2)$ gives the count $2$ and taking $A=(5,1)$ gives the count $1$, matching the values $2,1$ computed on the $p$-regular side by [[thm-kleshchev-first-level-branching-multiplicity]] for the transposed partition $(5,3,2)$. [step 2.1, F4, F5]

4.1 Conclusion. Step 1.1 is the only new module-theoretic input and is proved locally from the class-sum action on Specht modules; step 2.1 supplies the count from the recorded theorem and its transfer from the $p$-regular side, and step 3.1 checks it on the source's worked example. No complex character theory and no Fock-space input are used; the Specht-to-restriction Hom criterion is deliberately not asserted. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Where the count comes from.** The multiplicity count is the recorded
  content of Kleshchev II Theorem 0.5 / survey Theorem 11.6(ii), with Brundan
  Theorems 2.5-2.6 as the proof-bearing treatment; the local contribution of
  this item is the localization of the factor $D(\nu)$ in the residue summand
  $E_i$, proved from the transposition-class-sum action, together with the
  dictionary calibration.
- **Distinct statement excluded.** Brundan's Hom criterion for Specht
  modules is not asserted; only the composition multiplicity in $E_iD(\mu)$
  is.
