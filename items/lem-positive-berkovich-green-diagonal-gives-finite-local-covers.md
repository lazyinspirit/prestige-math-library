---
dependency_level: 5
id: lem-positive-berkovich-green-diagonal-gives-finite-local-covers
kind: lemma
title: "A positive Berkovich Green diagonal gives a finite local cover"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-berkovich-projective-line-compactness-and-classical-density
  - lem-berkovich-dynamical-green-kernel-continuous-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, proof of Theorem1.11 in §3.4"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be a complete algebraically closed nontrivially nonarchimedean valued field, let $\phi$ have degree at least two, and suppose its extended Green kernel satisfies $g_\phi(x,x)>0$ for every nonclassical point $x$ of $X=\mathbb P^{1,\mathrm{an}}_L$. Then there are $\beta>0$ and a finite open cover $V_1,\ldots,V_s$ of $\mathbb P^1(L)$ in its absolute-value topology such that $g_\phi(P,Q)>\beta$ for every $P,Q\in V_i$. The strict positive-diagonal condition is an explicit hypothesis; its equivalence with genuinely bad reduction is not proved or assumed implicitly here.

## Statement references

[[def-axiom-of-choice]]

[[lem-berkovich-dynamical-green-kernel-continuous-extension]]

## Facts & Assumptions

**Given:** The field, map, and strict positive-diagonal hypothesis in the statement.

[F1] $X$ is nonempty and compact; its classical subspace has the usual absolute-value topology. ([[lem-berkovich-projective-line-compactness-and-classical-density]])

[F2] The kernel is jointly lower semicontinuous and equals $+\infty$ on each classical diagonal point. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[A1] Full Choice is inherited from the Berkovich compactification. ([[def-axiom-of-choice]])

## Proof

1.1 By [F2] and the hypothesis, $g_\phi(x,x)>0$ for all $x\in X$. The open sets $W_n=\{x:g_\phi(x,x)>1/n\}$, for integers $n\ge1$, cover $X$: the diagonal map is continuous and [F2] gives openness. Compactness in [F1] gives a finite subcover. Since the $W_n$ increase with $n$, some $N\ge1$ has $W_N=X$. Set $\beta=1/(2N)$; then $g_\phi(x,x)>2\beta$ for every $x$. [F1, F2, given, algebra]

1.2 Lower semicontinuity makes $\{(z,w):g_\phi(z,w)>\beta\}$ an open neighborhood of every $(x,x)$. The product topology provides open neighborhoods $A,B$ of $x$ with $A\times B$ in that set; put $U=A\cap B$, so $U\times U$ is in it. Take the family of all open $U\subset X$ with this property. It covers $X$, so [F1] gives a finite subcover $U_1,\ldots,U_s$. Setting $V_i=U_i\cap\mathbb P^1(L)$ yields the claimed finite cover and its inequalities. [F1, F2, step 1.1, construct] ∎
