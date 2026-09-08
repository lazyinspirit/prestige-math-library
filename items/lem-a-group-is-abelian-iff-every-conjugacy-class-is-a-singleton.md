---
id: lem-a-group-is-abelian-iff-every-conjugacy-class-is-a-singleton
kind: lemma
title: "A group is abelian exactly when its conjugacy classes are singletons"
status: draft
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-conjugacy-class-and-centralizer]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
---

## Statement

A group $G$ is abelian if and only if every conjugacy class in $G$ is a singleton. No finiteness assumption is needed.

## Facts & Assumptions

**Given:** A group $G$, with identity $e$.

[F1] $\operatorname{Cl}_G(h)=\{ghg^{-1}:g\in G\}$ ([[def-conjugacy-class-and-centralizer]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is abelian, then for all $g,h\in G$ one has $ghg^{-1}=hgg^{-1}=h$. Thus every element of $\operatorname{Cl}_G(h)$ is $h$; and $ehe^{-1}=h$ shows that $h$ belongs to the class. Hence $\operatorname{Cl}_G(h)=\{h\}$. [F1, given, algebra]

1.2 Conversely, suppose every class is a singleton. Since $ehe^{-1}=h$, that singleton must be $\{h\}$. For arbitrary $g,h$, F1 then gives $ghg^{-1}=h$. Multiplying on the right by $g$ yields $gh=hg$. Thus every pair commutes and $G$ is abelian. [F1, algebra]

2.1 In the trivial group the sole class is $\{e\}$ and $ee=ee$, so both properties hold. In all groups, the membership $h\in\operatorname{Cl}_G(h)$ used above prevents empty classes. The argument quantifies over arbitrary $g,h$ and makes no cardinality assumption. [F1, step 1.1, step 1.2] ∎

## Sources

[Judson, §14.2 opening](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) identifies fixed points of conjugation with the center. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.3(1), p. 64, uses singleton classes for abelian groups. Both implications are proved above without finiteness.
