---
id: lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square
kind: lemma
title: Reduction of the integral Bockstein is the first Steenrod square
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bockstein-connecting-operation, lem-the-bockstein-is-independent-of-lift-and-cocycle-representative, prop-first-steenrod-square-is-the-mod-two-bockstein]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §3.E, printed pp. 303–305"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "§3.E, Bockstein homomorphisms, printed pp. 303–305"
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

[F1] For a cocycle $x$ in $C^n(X;\mathbb F_2)$ choose a lift $b\in C^n(X;\mathbb Z)$; if $\delta b=2a$ then $\beta_{\mathbb Z}[x]=[a]$. The definition gives this cochain formula, while independence of the lift and cocycle representative—and hence descent to cohomology—is proved by [[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]]. For the cyclic coefficient sequences least nonnegative residues give the lift without AC, and the integral Bockstein is the Bockstein of $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$ ([[def-bockstein-connecting-operation]]).

[F2] The mod-two Bockstein $\beta$ of $0\to\mathbb F_2\xrightarrow{2}\mathbb Z/4\to\mathbb F_2\to0$ satisfies $Sq^1(x)=\beta(x)$ for every $x\in H^n(X;\mathbb F_2)$, and the identification requires no AC ([[prop-first-steenrod-square-is-the-mod-two-bockstein]]).

## Proof

**Proof technique:** direct.

**Given:** An integer $n\geq0$, a class $x\in H^n(X;\mathbb F_2)$, and a mod-two cocycle $c$ representing $x$.

1.1 Lift $c$ coefficientwise to the integral cochain $\widetilde c$ given by the least nonnegative residues, and put $\widetilde b=2\widetilde c$ in the coefficient group $\mathbb Z/4$; then $\delta\widetilde c$ is divisible by $2$ because $\delta c=0$ modulo two, so there is a unique integral cochain $a$ with $\delta\widetilde c=2a$, and $\beta_{\mathbb Z}(x)=[a]$. [F1, given]

1.2 Reducing $\widetilde c$ modulo four gives a $\mathbb Z/4$-cochain whose image modulo two is $c$ and whose coboundary is the reduction of $2a$, namely $2a$ modulo four; hence the mod-two Bockstein of the sequence $0\to\mathbb F_2\to\mathbb Z/4\to\mathbb F_2\to0$ assigns to $x$ the class of $\delta(\widetilde c)/2=a$ modulo two. [F1, given]

2.1 Reducing the integral representative $a$ modulo two therefore gives exactly the mod-two Bockstein class, so $\rho_2\beta_{\mathbb Z}(x)=\beta(x)=Sq^1(x)$ by [F2]; a change of the integral lift changes $a$ by a coboundary, and a change of the mod-two cocycle changes both sides equally, so the identity descends to cohomology. [F1, F2, step 1.1, step 1.2]

3.1 Steps 1.1, 1.2 and 2.1 prove the stated identity for every space and every degree; the residue lift is canonical, so no choice principle is used. [step 2.1] ∎

## Source notes

Compare [Hatcher](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), §3.E, printed pp. 303–305, for the integral Bockstein $\widetilde\beta$, the reduction identity $\beta=\rho\circ\widetilde\beta$ and the derivation property.
