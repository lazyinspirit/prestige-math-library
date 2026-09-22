---
id: lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square
kind: lemma
title: Reduction of the integral Bockstein is the first Steenrod square
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bockstein-connecting-operation, prop-first-steenrod-square-is-the-mod-two-bockstein]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §3.E, printed pp. 303–305"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "§3.E, Bockstein homomorphisms, printed pp. 303–305"
verification:
  audited: 2026-09-22
---

## Statement

For the integral Bockstein
$\beta_{\mathbb Z}:H^n(X;\mathbb F_2)\to H^{n+1}(X;\mathbb Z)$ of the coefficient
sequence $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$, reduction
modulo two satisfies
$$\rho_2\beta_{\mathbb Z}(x)=Sq^1(x)$$
for every space $X$, every $n\geq0$ and every $x\in H^n(X;\mathbb F_2)$. No
choice principle is needed.

## Facts & Assumptions

[F1] For the cyclic coefficient sequences, least nonnegative residues give a specified cochain lift without AC. If $c\in C^n(X;\mathbb F_2)$ is a cocycle, its integral residue lift $\widetilde c$ has $\delta\widetilde c=2a$ for a unique integral cochain $a$, and the resulting class is the integral Bockstein of $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$ once its independence of the cocycle representative is checked ([[def-bockstein-connecting-operation]]).

[F2] The mod-two Bockstein $\beta$ of $0\to\mathbb F_2\xrightarrow{2}\mathbb Z/4\to\mathbb F_2\to0$ satisfies $Sq^1(x)=\beta(x)$ for every $x\in H^n(X;\mathbb F_2)$, and the identification requires no AC ([[prop-first-steenrod-square-is-the-mod-two-bockstein]]).

## Proof

**Proof technique:** direct.

**Given:** An integer $n\geq0$, a class $x\in H^n(X;\mathbb F_2)$, and a mod-two cocycle $c$ representing $x$.

1.1 Lift $c$ coefficientwise to the integral cochain $\widetilde c$ given by the least nonnegative residues. Then $\delta\widetilde c$ is coefficientwise divisible by $2$ because $\delta c=0$ modulo two, so there is a unique integral cochain $a$ with $\delta\widetilde c=2a$. Moreover $\delta a=0$, since $2\delta a=\delta^2\widetilde c=0$ in the torsion-free group of integral cochains. [F1, given]

1.2 Reducing $\widetilde c$ modulo four gives a $\mathbb Z/4$-cochain whose image modulo two is $c$ and whose coboundary is the reduction of $2a$, namely $2a$ modulo four; hence the mod-two Bockstein of the sequence $0\to\mathbb F_2\to\mathbb Z/4\to\mathbb F_2\to0$ assigns to $x$ the class of $\delta(\widetilde c)/2=a$ modulo two. [F1, given]

2.1 The residue construction descends without any choice. If $c'=c+\delta u$ modulo two, let $\widetilde c',\widetilde c,\widetilde u$ be their integral residue lifts. The integral cochain $\widetilde c'-\widetilde c-\delta\widetilde u$ reduces to zero modulo two, so it equals $2h$ for a unique integral cochain $h$. If $\delta\widetilde c'=2a'$, applying $\delta$ gives $2a'=2a+2\delta h$, hence $a'=a+\delta h$. Thus $[a]$ depends only on $x$, using no simultaneous selection from fibres. Reducing $a$ modulo two gives the mod-two Bockstein by step 1.2, so $\rho_2\beta_{\mathbb Z}(x)=\beta(x)=Sq^1(x)$ by [F2]. [F1, F2, step 1.1, step 1.2]

3.1 Steps 1.1, 1.2 and 2.1 prove the stated identity for every space and every degree; both the residue lift and the comparison cochain $h$ are uniquely specified coefficientwise, so no choice principle is used. [step 2.1] ∎

## Source notes

Compare [Hatcher](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), §3.E, printed pp. 303–305, for the integral Bockstein $\widetilde\beta$, the reduction identity $\beta=\rho\circ\widetilde\beta$ and the derivation property.
