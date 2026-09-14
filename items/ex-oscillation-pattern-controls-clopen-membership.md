---
id: ex-oscillation-pattern-controls-clopen-membership
kind: example
title: An oscillation pattern controls clopen membership
status: published
origin: pipeline
deps:
  - thm-moore-oscillation-colouring-pattern
  - def-moore-l-space-topology
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

For $\xi<\omega_1$, form the disjoint blocks

$$a_\xi=\{3\xi,3\xi+1\},\qquad b_\xi=\{3\xi+2\},$$

and let $A=\{a_\xi:\xi<\omega_1\}$ and
$B=\{b_\xi:\xi<\omega_1\}$.  Apply Moore's pattern theorem with
$k=2$, $l=1$, the constant map $\pi(i)=0$, and
$\chi(0)=0$, $\chi(1)=1$.  It returns
$a=\{a(0)<a(1)\}\in A$ and $b=\{b(0)\}\in B$ with $a<b$ and

$$c(a(0),b(0))=1,\qquad c(a(1),b(0))=0.$$

Consequently the single point $b(0)$ has the prescribed simultaneous
membership pattern

$$b(0)\in W_{a(0)}\quad\text{and}\quad b(0)\notin W_{a(1)}.$$

In Moore's topology on $\omega_1$, the finite Boolean combination

$$U=W_{a(0)}\cap(\omega_1\setminus W_{a(1)})$$

is therefore a nonempty clopen basic neighborhood of $b(0)$.  This realizes
two bits on the graph of one function; it does not claim control of an
arbitrary $2\times1$ relation beyond those two graph entries (which in this
case are all its entries), nor of an arbitrary matrix when $l>1$.

## Facts & Assumptions

**Given:** The colouring and topology fixed on the companion page; ordinal
multiplication and addition have their usual meanings.

[F1] [[thm-moore-oscillation-colouring-pattern]] realizes
$o^*(a(i),b(\pi(i)))=\chi(i)$ and hence
$c(a(i),b(\pi(i)))=1-\chi(i)$ for positive finite $k,l$ and uncountable
pairwise-disjoint block families.

[F2] [[def-moore-l-space-topology]] defines
$W_\alpha=\{\alpha\}\cup\{\beta>\alpha:c(\alpha,\beta)=1\}$ and makes every
finite Boolean combination of the $W_\alpha$ clopen.

## Verification

**Proof technique:** direct application and calculation.

1.1 The maps $\xi\mapsto3\xi$, $3\xi+1$, and $3\xi+2$ divide $\omega_1$ into successive three-point blocks: each displayed ordinal is countable, $3\xi<3\xi+1<3\xi+2<3(\xi+1)$, and different blocks are disjoint.  Thus $A$ and $B$ are uncountable pairwise-disjoint families of two- and one-element subsets, respectively. [Given, algebra]

2.1 Use [F1] with $\pi(0)=\pi(1)=0$ and $\chi=(0,1)$.  For the resulting $a<b$, its parity conclusion gives $c(a(0),b(0))=1-0=1$ and $c(a(1),b(0))=1-1=0$. [F1, step 1.1]

3.1 Because $a<b$, both $a(0)$ and $a(1)$ are strictly below $b(0)$.  The defining endpoint clause in [F2] therefore turns the two equalities of step 2.1 into $b(0)\in W_{a(0)}$ and $b(0)\notin W_{a(1)}$. [F2, step 2.1]

4.1 By [F2], $U=W_{a(0)}\cap(\omega_1\setminus W_{a(1)})$ is clopen and basic, and step 3.1 puts $b(0)$ in it.  Hence $U$ is nonempty and is a neighborhood of the stated point.  Both bits, the shared column, the strict order, and the complement bit are explicit; the invocation uses positive $k=2,l=1$ and makes no assertion beyond the functional graph allowed by [F1]. [F1, F2, step 3.1] ∎
