---
id: def-solovay-hereditarily-ordinal-sequence-definable-model
kind: definition
title: The hereditarily ordinal-sequence-definable Solovay model
status: draft
origin: pipeline
deps:
  - def-solovay-levy-collapse-setup
  - def-ordinal-definability-and-hod
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay 1970, Part III §2; Unger 2015, Claim 4"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
---

## Definition

In $V[G]$ let
$S=\bigcup_{\alpha\in\mathrm{Ord}}{}^\omega\alpha$, the class of countable
ordinal sequences. A set $x$ is $OD(S)$ when, for some $s\in S$, finite tuple
of ordinals $\vec\alpha$, formula $\varphi$ and rank $V_\theta^{V[G]}$, it is
the unique $y\in V_\theta$ satisfying
$\varphi(y,s,\vec\alpha)$ in that rank. Define

$$M=HOD(S)=\{x:\operatorname{tc}(\{x\})\subseteq OD(S)\}.$$

Rank bounds and satisfaction codes make this a uniform first-order class:
“$s\in S$” means that $s$ is a function with domain $\omega$ and ordinal
range. Finite and countable tuples of members of $S$ are interleaved using a
fixed pairing function on $\omega$, so the convention “one member of $S$” loses
no parameters. Reals are themselves members of $S$ after identifying natural
numbers with finite ordinals. This definition asserts no equality with
$L(\mathbb R)$ or $HOD(\mathbb R)$.

