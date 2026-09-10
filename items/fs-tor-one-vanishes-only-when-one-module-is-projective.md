---
id: fs-tor-one-vanishes-only-when-one-module-is-projective
title: "Vanishing Tor one does not require a projective factor"
kind: false-statement
status: published
origin: pipeline
deps: ["fs-flat-modules-have-projective-dimension-zero", "prop-the-integers-have-weak-and-global-dimension-one", "thm-free-modules-are-projective-with-choice-boundary", "def-tor-by-resolving-the-left-module", "def-tensor-product-of-modules-by-generators-and-relations", "def-balanced-tor-bifunctor", "thm-higher-tor-over-the-integers-vanishes", "def-axiom-of-choice", "def-dependent-choice", "thm-recursion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

False claim: $\operatorname{Tor}_1^R(N,M)=0$ can occur only when $N$ or $M$ is projective.

Under AC, a counterinstance for the usual balanced Tor is $R=\mathbb Z$, $N=\mathbb Q$ and $M=\mathbb Z/2\mathbb Z$. Their nonprojectivity and the zero-homology calculation using the displayed finite resolution of $M$ below are separately choice-free.

## Refutation

**Given:** $R=\mathbb Z$, $N=\mathbb Q$, and $M=\mathbb Z/2\mathbb Z$; AC only for the general balanced-Tor interface.

1.1 The module $\mathbb Q$ is nonprojective by the explicitly choice-free counterinstance in [[fs-flat-modules-have-projective-dimension-zero]]. The module $\mathbb Z/2\mathbb Z$ is nonprojective by the choice-free nonflatness clause of [[prop-the-integers-have-weak-and-global-dimension-one]], with $n=2$. Neither use imports the AC dimension assertion. [given]

1.2 The exact sequence $0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$ is a projective resolution $P_\bullet$ of $M$: its terms are rank-one free and hence projective without AC by the finite-basis clause of [[thm-free-modules-are-projective-with-choice-boundary]]. [given, algebra]

2.1 By [[def-tensor-product-of-modules-by-generators-and-relations]], $\mathbb Q\otimes\mathbb Z\cong\mathbb Q$ via $q\otimes a\mapsto aq$, with inverse $q\mapsto q\otimes1$. Thus $\mathbb Q\otimes P_\bullet$ is $0\to\mathbb Q\xrightarrow{\times2}\mathbb Q\to0$ in degrees one and zero. Its degree-one homology is the kernel of multiplication by $2$, which is zero. This proves the choice-free specified left-resolution calculation of [[def-tor-by-resolving-the-left-module]]. [step 1.2, algebra]

3.1 Under [[def-axiom-of-choice]], [[thm-higher-tor-over-the-integers-vanishes]] supplies a projective resolution of $\mathbb Q$, while step 1.2 supplies one of $M$. To obtain DC locally, given an entire relation $E$ on a nonempty set $X$ and $x_0\in X$, AC chooses $s(x)\in\{y:xEy\}$ for every $x\in X$; [[thm-recursion]] then gives $x_{n+1}=s(x_n)$ from the prescribed $x_0$. This proves the exact DC hypothesis of [[def-dependent-choice]]. Hence [[def-balanced-tor-bifunctor]] identifies the calculated zero group with $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Q,\mathbb Z/2\mathbb Z)$. Together with step 1.1 this refutes the proposed implication. [step 1.1, step 1.2, step 2.1, given, algebra] ∎
