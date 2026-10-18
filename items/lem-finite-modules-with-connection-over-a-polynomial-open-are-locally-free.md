---
id: lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free
kind: lemma
title: "Finite modules with a connection on a complex polynomial open are vector bundles"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-determinant-trick-for-nakayama
  - cor-finite-variable-polynomial-ring-noetherian
  - lem-finite-modules-over-noetherian-rings-are-noetherian
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ginzburg, Guay, Opdam and Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "Section 5.2.3, Lemma 5.8; complete local coherent-connection argument below."
---

## Statement

Let $R=\mathbb C[x_1,\ldots,x_n][f^{-1}]$ with $0\ne f$, and let $N$ be a finite $R$-module with operators $\nabla_i$ satisfying $\nabla_i(a v)=(\partial_i a)v+a\nabla_i(v)$. At every complex point $p$ with $f(p)\ne0$, $N_p$ is free over $R_{\mathfrak m_p}$, and this basis extends to an algebraic open neighborhood of $p$. Thus its coherent sheaf on the complex principal open is an algebraic vector bundle. A finite submodule stable under these operators, and its quotient, have the same property. Integrability is unnecessary for local freeness; if the operators commute, these bundles carry the induced integrable connections. Short exact sequences of such bundles give exact fiber sequences.

## Facts & Assumptions

**Given:** The ring, finite module and Leibniz operators in the Statement.

[F1] [[lem-determinant-trick-for-nakayama]]: for a finite module $Q$ with $I Q=Q$, some $a\in I$ satisfies $(1-a)Q=0$.

[F2] [[cor-finite-variable-polynomial-ring-noetherian]] and [[lem-finite-modules-over-noetherian-rings-are-noetherian]]: polynomial rings are Noetherian and submodules of finite modules are finite. Localizing generators proves the same for their localizations.

## Proof

1.1 Fix $p$ and write $A=R_{\mathfrak m_p}$, $\mathfrak m=\mathfrak m_p A$, $V=N_p$. Choose lifts $v_1,\ldots,v_r$ of a basis of $V/\mathfrak m V$. The quotient $Q=V/\sum A v_i$ is finite and satisfies $\mathfrak m Q=Q$. By [F1], $(1-a)Q=0$ for some $a\in\mathfrak m$. Since $1-a$ is a unit, $Q=0$, so the lifts generate $V$. For $r=0$ this proves $V=0$. [F1, given, choose, algebra]

2.1 Suppose $\sum_i a_i v_i=0$ is a nonzero relation. Fiber independence gives $a_i\in\mathfrak m$. Let $k$ be the least order of vanishing at $p$ of a nonzero $a_i$. This is finite: a nonzero rational regular germ is a quotient of polynomials with nonzero denominator at $p$, so its convergent Taylor series has a first nonzero coefficient. Choose a multi-index $\beta$ of order $k$ with some $\partial^\beta a_i(p)\ne0$. Apply the ordered connection derivatives prescribed by $\beta$ to the relation. By repeated Leibniz, every term in which a derivative hits $v_i$ has fewer than $k$ derivatives on its coefficient and vanishes modulo $\mathfrak m$. Reduction therefore gives $\sum_i\partial^\beta a_i(p)\overline v_i=0$, contradicting the fiber basis. Hence there are no relations, and $V$ is free. [given, step 1.1, choose, algebra]

3.1 The local basis extends to a principal algebraic neighborhood. Lift its finitely many elements through denominators to sections on some neighborhood of $p$. Their cokernel and the kernel of the resulting finite free presentation are finite by [F2]. Since their localizations at $p$ vanish, each finite generating set is killed after inverting a single element nonzero at $p$; multiply these finitely many elements. On the resulting smaller principal neighborhood the map is an isomorphism. The case $n=0$ is the finite-dimensional vector-space assertion over $\mathbb C$ and the same proof is valid. [F2, step 1.1, step 2.1, algebra]

4.1 A stable submodule and its quotient are finite by [F2] and inherit Leibniz operators; the proof just given applies to both without a category-O assumption. Commutators descend if initially zero. A surjection onto a locally free module splits locally by lifting a finite basis, so a short exact sequence gives an exact fiber sequence. This proves every assertion. [F2, step 3.1, algebra] ∎
