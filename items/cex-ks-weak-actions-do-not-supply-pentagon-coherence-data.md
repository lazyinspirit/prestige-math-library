---
id: cex-ks-weak-actions-do-not-supply-pentagon-coherence-data
kind: counterexample
title: "Weak actions do not supply pentagon coherence data"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-weak-action-of-a-group-on-a-category
  - def-natural-isomorphism
  - def-functor-and-contravariant-functor
  - def-category
  - prop-modules-and-homomorphisms-form-category-rmod
  - def-left-and-right-modules
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Definition 2.6 and the discussion after Proposition 2.7"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Definition 2.6 and the remarks following it, printed p. 14"
    - title: "Mikhail Khovanov and Richard Thomas, Braid cobordisms, triangulated categories, and flag varieties, Homology Homotopy Appl. 9 (2007) 19-94 (arXiv:math/0609335v2), Section 1 (weak action versus genuine action)"
      url: "https://arxiv.org/pdf/math/0609335"
      locator: "Section 1 (Introduction), arXiv PDF pp. 2-8 (the table of contents is p. 1); associativity constraint (1.1) for a genuine action on arXiv PDF p. 2"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

The pairwise invertible comparisons of a weak action of a group on a category,
in the sense of [[def-weak-action-of-a-group-on-a-category]], automatically
satisfy the pentagon (associativity) coherence condition, so that every weak
action can be used as a genuine coherent $2$-action without further argument.

## Facts & Assumptions
**Given:** The group $G=\mathbb Z/2\times\mathbb Z/2$ presented as $\langle a,b\mid a^2=b^2=1,\ ab=ba\rangle$, the category $Q$ of complex vector spaces, the constant functor assignment $F_g=\operatorname{Id}_Q$ for every $g\in G$, and the weak-action definition and its pentagon of [[def-weak-action-of-a-group-on-a-category]].

[L1] Complex vector spaces and complex-linear maps form a category $Q$, namely the category of left modules over the field $\mathbb C$ with module homomorphisms ([[prop-modules-and-homomorphisms-form-category-rmod]], [[def-left-and-right-modules]]), and functors between categories and natural transformations between them are as in [[def-functor-and-contravariant-functor]] and [[def-natural-isomorphism]].

[L2] A weak action of $G$ on $Q$ is a functor assignment $g\mapsto F_g$ with $F_1=\operatorname{Id}_Q$ and isomorphisms $F_{fg}\cong F_fF_g$ for all $f,g$; a coherent action additionally requires chosen isomorphisms $\mu_{f,g}\colon F_fF_g\to F_{fg}$ whose two pentagon composites at every triple $(f,g,h)$ agree ([[def-weak-action-of-a-group-on-a-category]]).

[L3] A natural endomorphism $\eta\colon\operatorname{Id}_Q\to\operatorname{Id}_Q$ is multiplication by a scalar: evaluating at $\mathbb C$ gives $\lambda:=\eta_{\mathbb C}(1)$, and naturality of $\eta$ with respect to the linear maps $\mathbb C\to V$, $1\mapsto v$, for $v\in V$ gives $\eta_V(v)=\lambda v$ for every complex vector space $V$ and every $v\in V$. Consequently every natural isomorphism $\operatorname{Id}_Q\to\operatorname{Id}_Q$ is multiplication by a nonzero scalar $\lambda\in\mathbb C^\times$, and composition of such natural transformations is multiplication of scalars.



## Counterexample

**Proof technique:** direct.

1.1 *The data.* Since $F_g=\operatorname{Id}_Q$ for all $g\in G$, the composite functors satisfy $F_fF_g=F_{fg}=\operatorname{Id}_Q$ on the nose for every pair $(f,g)\in G\times G$, and $F_1=\operatorname{Id}_Q$; in particular the functor assignment is a weak action of $G$ on $Q$ in the sense of [L2] whenever the pairwise isomorphisms exist. [L1, L2]

2.1 *The scalar comparisons.* By [L3] a natural isomorphism $F_fF_g\to F_{fg}$ between identity functors is uniquely a nonzero scalar, so the following choices are well-defined natural isomorphisms: $\mu_{a,b}:=(-1)\cdot\operatorname{id}$, that is, multiplication by $-1$ on every complex vector space, and $\mu_{f,g}:=\operatorname{id}$ (multiplication by $1$) for every other pair $(f,g)\in G\times G$, including the pairs $(a,a)$, $(a,ab)$ and $(1,b)$. [step 1.1, L3]

3.1 *The pentagon at $(a,a,b)$.* The two composites of the pentagon for the triple $(a,a,b)$ map $F_aF_aF_b=\operatorname{Id}_Q$ to $F_{a^2b}=F_b=\operatorname{Id}_Q$ and are, by [L3], multiplication by the scalars $\mu_{1,b}\,\mu_{a,a}=1\cdot1=1$ and $\mu_{a,ab}\,\mu_{a,b}=1\cdot(-1)=-1$ respectively; the first composite uses $\mu_{a,a}\colon F_aF_a\to F_{a^2}=F_1$ followed by $\mu_{1,b}$, and the second uses $F_a\mu_{a,b}\colon F_aF_aF_b\to F_aF_{ab}$ followed by $\mu_{a,ab}$, and composition of scalar natural transformations is multiplication. Since $1\ne-1$ in $\mathbb C^\times$, the two composites are distinct natural transformations, so the pentagon diagram does not commute. [step 2.1, L2, L3]

4.1 *Conclusion.* The functor assignment $F_g=\operatorname{Id}_Q$ together with the chosen pairwise isomorphisms of step 2.1 satisfies the letter of the weak-action definition of [L2] but not the pentagon of a coherent action, by step 3.1. Hence pairwise invertible comparisons do not automatically supply coherence data, the refuted statement is false, and the weak Khovanov–Seidel action of this page must not be assumed coherent without further argument. [step 2.1, step 3.1] ∎ 