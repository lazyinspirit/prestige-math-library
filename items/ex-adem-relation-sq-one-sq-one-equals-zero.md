---
id: ex-adem-relation-sq-one-sq-one-equals-zero
kind: example
title: The relation Sq^1Sq^1=0
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-first-steenrod-square-is-the-mod-two-bockstein, def-bockstein-connecting-operation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 3.E, Bockstein square zero, printed page 305
verification:
  audited: 2026-09-14
  precheck: pass
---

## Example

For every space $X$, every integer $n\geq0$, and every
$x\in H^n(X;\mathbb F_2)$,

$$Sq^1Sq^1(x)=0.$$

This is the first positive Adem relation, but the calculation below does not
use the general Adem theorem and assumes no form of choice.

## Facts & Assumptions

**Given:** A space $X$, an integer $n\geq0$, and
$x\in H^n(X;\mathbb F_2)$.

[F1] [[def-bockstein-connecting-operation]] defines the integral Bockstein
$\widetilde\beta$ from
$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$ and the mod-two
Bockstein $\beta$ from
$0\to\mathbb F_2\xrightarrow{2}\mathbb Z/4\to\mathbb F_2\to0$; zero/one
residue lifts make both constructions choice-free.

[F2] [[prop-first-steenrod-square-is-the-mod-two-bockstein]] gives
$Sq^1=\beta$ on every mod-two cohomology group without AC.

## Verification

**Proof technique:** compare the two cyclic Bocksteins on cochains and compose.

1.1 Reduction modulo two satisfies $\beta=\rho\widetilde\beta$. Let $c$ be a mod-two cocycle representing a class $u$, and let $\widehat c$ be its integer zero/one lift. Since $\delta c=0$, every value of $\delta\widehat c$ is even, so there is a unique integer cochain $h$ with [given, F1]

$$\delta\widehat c=2h.$$

Also $\delta h=0$, because $2\delta h=\delta^2\widehat c=0$ and integer
cochains are torsion-free. Thus
$\widetilde\beta(u)=[h]$. Reducing $\widehat c$ modulo four gives a lift of
$c$ for the mod-two coefficient sequence, and its coboundary is
$2(h\bmod2)$ in $\mathbb Z/4$. Hence
$\beta(u)=[h\bmod2]=\rho\widetilde\beta(u)$.

1.2 The integral Bockstein kills reduced integral classes: $\widetilde\beta\rho=0$. If $z$ is an integral cocycle, then $z$ itself is an integer lift of its mod-two reduction. Its coboundary is zero, so the lift/divide definition gives $\widetilde\beta(\rho[z])=0$. [F1]

2.1 The mod-two Bockstein squares to zero. For every mod-two class $u$, [step 1.1, step 1.2]

$$\beta^2(u)=\rho\widetilde\beta\,\rho\widetilde\beta(u)=0.$$

3.1 Substitution of $Sq^1=\beta$ proves the claim. Apply [F2] first to $x$ and then to the class $\beta(x)$: [F2, step 2.1]

$$Sq^1Sq^1(x)=\beta(\beta(x))=\beta^2(x)=0.$$

4.1 The boundary and choice cases introduce no exceptions. For the empty space, a zero class, or a point in degree zero, every displayed positive-degree output is zero. The first allowed degree $n=0$ is included, and there is no upper endpoint. Integer multiplication by two is injective even when a cochain group is zero, so the division argument is unique; ordinary singular cochains include degenerate simplices. Every lift used above is the specified residue lift or the already given cocycle $z$, so no choice principle is spent. The proof establishes an equality, not either direction of a biconditional. [F1, F2, step 1.1, step 1.2, step 2.1, step 3.1] ∎