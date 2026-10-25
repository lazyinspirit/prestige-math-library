---
id: "lem-normal-isotypical-components-are-permuted-by-translation"
kind: "lemma"
title: "Translation permutes normal isotypical components"
status: published
origin: "pipeline"
deps: ["def-conjugate-representation-and-inertia-group", "cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order", "thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.2 pp.53–54 before Proposition 4.2.2; Losev Theorem 2.14(2)"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
    - title: "Ivan Losev, Representation Theory, Chapter 0. Basics, Theorem 2.14(2) and Proposition 2.17, pp.10–11"
      url: "https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, and $V$ a finite-dimensional complex $G$-module. For $\theta\in\operatorname{Irr}(N)$ let $V_\theta$ be the sum of all simple $N$-submodules of character $\theta$, with $V_\theta=0$ when that type does not occur. Then
$$ gV_\theta=V_{{}^g\theta}\qquad(g\in G). $$
Every $N$-submodule $U\subseteq V$ satisfies
$$ U=\bigoplus_{\theta\text{ occurring in }V|_N}(U\cap V_\theta). $$

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] The left conjugate is ${}^g\theta(n)=\theta(g^{-1}ng)$ and defines an action on $\operatorname{Irr}(N)$. ([[def-conjugate-representation-and-inertia-group]]).

[F2] A finite-dimensional representation of a finite group over a field whose characteristic does not divide its order is completely reducible. ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F3] A completely reducible module is the direct sum of its isotypical components, independently of a chosen simple decomposition. ([[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 For a simple $N$-submodule $S\subseteq V$, its translate $gS$ is $N$-stable since $n(gs)=g((g^{-1}ng)s)$. The map $s\mapsto gs$ is an isomorphism from ${}^gS$ to $gS$, so $gS$ is simple of the conjugate type. [F1, given, algebra]

2.1 Translating each simple summand in the defining sum gives $gV_\theta\subseteq V_{{}^g\theta}$. Applying the same argument to $g^{-1}$ gives equality, also when a component is zero. [step 1.1, algebra]

3.1 By complete reducibility applied to $N$ over $\mathbb C$, both $V|_N$ and $U$ are direct sums of simple modules. Each simple summand of $U$ belongs to the ambient isotypical component of its own type. The ambient directness therefore gives the displayed intersection decomposition; for $U=0$ or $V=0$ it is the zero direct sum. [F2, F3, given] ∎
