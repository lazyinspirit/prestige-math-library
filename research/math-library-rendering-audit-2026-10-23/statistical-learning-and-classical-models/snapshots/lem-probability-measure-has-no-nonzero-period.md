---
id: lem-probability-measure-has-no-nonzero-period
kind: lemma
title: "A probability measure on the line has no nonzero translation period"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-probability-measure
  - def-translation-of-a-set-in-rn
  - def-complete-ordered-real-field
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.5"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
---

## Statement

Let $\mu$ be a Borel probability measure on $\mathbb R$. If a real number
$a$ satisfies $\mu(A+a)=\mu(A)$ for every Borel set $A\subseteq\mathbb R$,
then $a=0$.

## Statement references

[[def-probability-measure|A probability measure has total mass one and is countably additive]]

[[def-translation-of-a-set-in-rn|Translation of a subset of the real line]]

## Facts & Assumptions

**Given:** A Borel probability measure $\mu$ on $\mathbb R$ and an $a\in\mathbb R$ such that $\mu(A+a)=\mu(A)$ for every Borel set $A$.

[F1] A probability measure is countably additive and has total mass one. [[def-probability-measure]]

[F2] $A+a=\{x+a:x\in A\}$ is the translate of $A$. [[def-translation-of-a-set-in-rn]]

[F3] The real line is a complete ordered field, hence its positive reals satisfy the Archimedean property. [[def-complete-ordered-real-field]], [[thm-of-archimedean]]

## Proof
**Given:** The objects and hypotheses in the Statement.

1.1 Suppose $a\ne0$ and put $\ell=|a|>0$. Invariance under translation by $a$ implies invariance under translation by $\ell$: when $a=-\ell$, apply the given identity to $A+\ell$. The half-open intervals $I_k=[k\ell,(k+1)\ell)$, $k\in\mathbb Z$, partition $\mathbb R$ and are translates of $I_0$, so they all have the same measure $c=\mu(I_0)$. [given, F2, construct]

2.1 If $c>0$, choose a natural $n>1/c$ by [F3]. The first $n$ intervals are disjoint, so finite additivity gives $1\ge\mu(\bigcup_{k=0}^{n-1}I_k)=nc>1$, a contradiction. Hence $c=0$. [step 1.1, F1, F3, contradiction]

3.1 Countable additivity over the partition $(I_k)_{k\in\mathbb Z}$ now gives $1=\mu(\mathbb R)=\sum_{k\in\mathbb Z}\mu(I_k)=0$, again a contradiction. Therefore $a=0$. [step 1.1, step 2.1, F1, discharge-contradiction] ∎
## References

[Peters et al., JMLR (2014), Appendix A.5](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

