---
id: thm-nontrivial-center-of-a-finite-p-group
kind: theorem
title: "Every nontrivial finite $p$-group has nontrivial center, in fact $p$ divides $|Z(P)|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, thm-p-group-fixed-point-congruence, thm-conjugation-homomorphism, thm-group-actions-correspond-to-homomorphisms, def-center-of-a-group, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Corollary 5.4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Statement

If $P$ is a nontrivial finite $p$-group, then

$$p\mid |Z(P)|.$$

In particular, the center $Z(P)$ contains a nonidentity element.

## Facts & Assumptions

**Given:** A nontrivial finite $p$-group $P$.

[L1] Nontriviality means $|P|=p^n$ with $n\ge1$ ([[def-finite-p-group]]).

[L2] For an action of $P$ on a finite set $X$, $|X|\equiv|X^P|\pmod p$ ([[thm-p-group-fixed-point-congruence]]).

[L3] Conjugation gives a homomorphism $P\to\operatorname{Aut}(P)$ ([[thm-conjugation-homomorphism]]).

[L4] A homomorphism into a symmetric group defines an action ([[thm-group-actions-correspond-to-homomorphisms]]).

[L5] The center is the set of elements commuting with every element of $P$ ([[def-center-of-a-group]]).

[L6] Congruence modulo $p$ means divisibility of the difference by $p$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] and [L4], $P$ acts on itself by conjugation. An element is fixed by all conjugations exactly when it lies in $Z(P)$ by [L5]. [L3, L4, L5]

2.1 Applying [L2] to this action gives $|P|\equiv|Z(P)|\pmod p$. [step 1.1, L2]

3.1 By [L1], $p$ divides $|P|$. Hence [L6] and step 2.1 show that $p$ divides $|Z(P)|$. Since $Z(P)$ contains the identity and its cardinality is a positive multiple of $p>1$, it also contains a nonidentity element. [step 2.1, L1, L5, L6, algebra] ∎
