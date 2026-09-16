---
id: thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent
kind: theorem
title: Derived algebra of a solvable linear Lie algebra is nilpotent
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations, thm-engels-theorem]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 3.8"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Corollary 3.8, printed p. 17"
---

## Statement

Let $k$ be algebraically closed of characteristic zero. If
$\mathfrak g\subseteq\mathfrak{gl}(V)$ is a finite-dimensional solvable Lie
algebra and $V$ is finite-dimensional, then every element of
$[\mathfrak g,\mathfrak g]$ is a nilpotent endomorphism of $V$, and the Lie
algebra $[\mathfrak g,\mathfrak g]$ is nilpotent.

## Facts & Assumptions

**Given:** The field, module, and solvable linear Lie algebra in the statement.

[L1] A solvable representation under these field hypotheses is simultaneously upper triangularizable ([[cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations]]).

[L2] A finite-dimensional Lie algebra is nilpotent when every one of its adjoint endomorphisms is nilpotent ([[thm-engels-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $n=\dim V>0$. By [L1], choose a basis of $V$ in which every element of $\mathfrak g$ is upper triangular. The diagonal of $AB-BA$ is zero for upper triangular $A,B$, so every bracket is strictly upper triangular. Since strictly upper triangular matrices form a linear subspace, every element of $[\mathfrak g,\mathfrak g]$, which is a finite linear combination of brackets, is strictly upper triangular and therefore has its $n$th power zero. [given, L1, algebra]

2.1 Put $\mathfrak h=[\mathfrak g,\mathfrak g]$. It is a finite-dimensional Lie subalgebra of $\mathfrak{gl}(V)$, and step 1.1 says that for each $x\in\mathfrak h$ some $m>0$ satisfies $x^m=0$. On $\operatorname{End}(V)$ one has $\operatorname{ad}_x=L_x-R_x$; the operators $L_x$ and $R_x$ commute, and every term of $(L_x-R_x)^{2m-1}$ contains either $L_x^m$ or $R_x^m$. Hence $\operatorname{ad}_x$ is nilpotent on $\operatorname{End}(V)$ and therefore on its invariant subspace $\mathfrak h$. Engel's theorem [L2] makes $\mathfrak h$ nilpotent. If $V=0$, then $\mathfrak g=0$ and both conclusions are immediate. [L2, step 1.1, algebra] ∎
