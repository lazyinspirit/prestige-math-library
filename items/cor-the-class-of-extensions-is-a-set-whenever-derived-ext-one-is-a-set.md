---
id: cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set
kind: corollary
title: "Extension classes form a set whenever derived Ext one does"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, lem-equivalent-extensions-have-the-same-ext-class, lem-every-ext-one-class-is-represented-by-an-extension, lem-two-extensions-with-the-same-ext-class-are-equivalent]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    - title: "The Stacks Project, Extensions and Ext groups"
      url: https://stacks.math.columbia.edu/tag/06XP
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice and the hypotheses of [[def-balanced-ext-bifunctor]]. If $\operatorname{Ext}^1(M,N)$ is a set, then extensions of $M$ by $N$ have a set of equivalence classes: explicitly, there is a set $S$ and an assignment $c$ from extensions to $S$, every element of $S$ occurs, and $c(e)=c(e')$ exactly when $e$ and $e'$ are equivalent. This is a set realization of the classes; it does not assert that each literal class of isomorphic extension diagrams is itself a set.

## Facts & Assumptions

**Given:** Dependent Choice, the balanced-Ext resolution hypotheses, and the set $S=\operatorname{Ext}^1(M,N)$.

[F1] Equivalent extensions have identical connecting classes: [[lem-equivalent-extensions-have-the-same-ext-class]].

[F2] Every derived Ext-one element is represented by an extension: [[lem-every-ext-one-class-is-represented-by-an-extension]].

[F3] Extensions with the same connecting class are equivalent: [[lem-two-extensions-with-the-same-ext-class-are-equivalent]].

## Proof

**Proof technique:** direct.

1.1 For an extension $e:0\to N\to E\to M\to0$, assign its connecting class $c(e)=\delta_e(1_M)\in S$. By [F1] and [F3], $c(e)=c(e')$ if and only if $e$ and $e'$ are equivalent. These lemmas concern individual extensions and do not assume a set of all extension classes. [given, F1, F3, construct]

2.1 The supplied projective resolution gives the presentation $0\to\ker(P_0(M)\to M)\to P_0(M)\to M\to0$ required by [F2]. Hence every $s\in S$ equals $c(e)$ for some extension $e$. Together with step 1.1 this makes the already given set $S$ a set realization of precisely the extension equivalence classes. No quotient of a proper class or simultaneous choice of representatives is used. [given, F2, step 1.1, algebra] ∎
