---
id: thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability
kind: theorem
title: The Solovay inner model satisfies ZF and every real set has a real–ordinal definition
status: published
origin: pipeline
deps: [def-solovay-hereditarily-ordinal-sequence-definable-model, lem-solovay-collapse-localizes-countable-ordinal-data, lem-solovay-absorption-factorization-and-homogeneity, def-solovay-levy-collapse-setup]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: inner-model-verification
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part III, Lemmas 2.4 and 2.8", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
---

## Statement

$M=HOD(S)$ is a transitive ZF inner model with the same ordinals and reals as $V[G]$. Every $A\subseteq\mathbb R$ in $M$ is definable in $V[G]$ from a real and finitely many ordinals, equivalently from one countable ordinal sequence.

## Facts & Assumptions

**Given:** The supplied Solovay extension.

[F1] [[def-solovay-hereditarily-ordinal-sequence-definable-model]]: defines $M$ by hereditary $S$-ordinal definability.

[F2] [[lem-solovay-collapse-localizes-countable-ordinal-data]]: localizes every member of $S$ and every real.

[F3] [[lem-solovay-absorption-factorization-and-homogeneity]]: homogeneous tail truth is independent of its generic.

[F4] [[def-solovay-levy-collapse-setup]]: the forcing ground is $V=L$.

## Proof

1.1 Hereditary definability makes $M$ transitive, contains every ordinal, and contains every real because a real is itself an $S$-parameter; Extensionality, Foundation, Pairing, Union and Infinity are therefore inherited. [F1]

2.1 Separation is obtained by conjoining the defining formula of the separated class with the fixed $OD(S)$ definitions of its set parameters. For Replacement, if $f,x\in M$ and $f$ is functional on $x$, the ambient set $f``x$ is defined from the fixed hereditary codes of $f$ and $x$ by $y\in f``x\Longleftrightarrow(\exists z\in x)\,(z,y)\in f$; every such $y$ is already in the transitive class $M$, so the image is hereditarily $OD(S)$ and belongs to $M$. No per-value codes are selected or combined. For Power Set, the ambient set $\{y\subseteq x:y\in M\}$ is defined from $x$ by the uniform $OD(S)$ predicate, and all members of its transitive closure lie in $M$. Thus every ZF axiom holds in $M$. [F1, step 1.1]

3.1 Let $A\subseteq\mathbb R$ lie in $M$. Heredity gives a definition of $A$ from $s\in S$ and finitely many ordinals $\vec\alpha$. By F2, $s$ lies in a bounded initial extension. The real-capture clause of F3 supplies a real $r$ and ordinal $\beta$ such that $s$ is definable over $V[r]$ from $(r,\beta)$. By F4, $V[r]=L[r]$. The class $L[r]$ is uniformly definable in $V[G]$ from $r$, so syntactically restricting every quantifier in the fixed defining formula to $L[r]$ defines the same unique $s$ in $V[G]$. Substitute that ambient definition of $s$ into the definition of $A$. Thus $A$ is definable in $V[G]$ from $r$ and the finite ordinal tuple $(\beta,\vec\alpha)$. Conversely, interleave the natural-number bits of $r$ and the finite tuple $(\beta,\vec\alpha)$ into one countable ordinal sequence in $S$. Hence the advertised parameter forms are equivalent, without claiming that an arbitrary ordinal is real-coded or that $M=L(\mathbb R)$. [F2, F3, F4, step 2.1] ∎
