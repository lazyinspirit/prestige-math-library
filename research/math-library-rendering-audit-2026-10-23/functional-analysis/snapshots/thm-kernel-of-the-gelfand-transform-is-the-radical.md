---
id: thm-kernel-of-the-gelfand-transform-is-the-radical
kind: theorem
title: Kernel of the Gelfand transform is the radical
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-jacobson-radical-and-semisimple-commutative-banach-algebra, def-gelfand-transform, thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra, def-axiom-of-choice, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 3.1.23 and Remark 3.1.24, printed pp. 62–63"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.63, printed pp. 262–266"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Remark 3.7, printed p. 9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
commutative unital complex Banach algebra
([[def-unital-banach-algebra]]) with Gelfand transform
$\Gamma = \Gamma_A : A \to C(\Delta(A))$ ([[def-gelfand-transform]]) and
Jacobson radical $\operatorname{rad}(A)$
([[def-jacobson-radical-and-semisimple-commutative-banach-algebra]]). Then

$$\ker\Gamma \;=\; \bigcap_{\chi \in \Delta(A)} \ker\chi \;=\; \operatorname{rad}(A).$$

Consequently $\Gamma$ is injective if and only if $A$ is semisimple. No claim
about $\Gamma$ being isometric or surjective is made; injectivity of $\Gamma$ is
a statement about the radical only.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero commutative unital complex Banach algebra $A$, its Gelfand transform $\Gamma$, and its Jacobson radical $\operatorname{rad}(A)$.

[L1] $\Gamma(a) = \hat a$ with $\hat a(\chi) = \chi(a)$ for all $\chi \in \Delta(A)$; thus $\Gamma(a) = 0$ exactly when $\chi(a) = 0$ for every character $\chi$ ([[def-gelfand-transform]]).

[L2] The maximal ideals of $A$ are exactly the kernels of its characters, and $\chi \mapsto \ker\chi$ is a bijection onto the set of maximal ideals ([[thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra]], [[def-axiom-of-choice]]).

[L3] $\operatorname{rad}(A) = \bigcap\{M : M \text{ maximal ideal of } A\}$ and $A$ is semisimple exactly when $\operatorname{rad}(A) = \{0\}$ ([[def-jacobson-radical-and-semisimple-commutative-banach-algebra]]).

## Proof

**Proof technique:** direct.

1.1 For $a \in A$: $\Gamma(a) = 0$ if and only if $\hat a(\chi) = \chi(a) = 0$ for every $\chi \in \Delta(A)$, that is, if and only if $a \in \bigcap_{\chi}\ker\chi$. [L1, algebra]

1.2 Since $\chi \mapsto \ker\chi$ is a bijection from $\Delta(A)$ onto the set of maximal ideals of $A$, the family $\{\ker\chi : \chi \in \Delta(A)\}$ is exactly the family of maximal ideals of $A$, so $\bigcap_{\chi}\ker\chi = \bigcap\{M : M \text{ maximal}\} = \operatorname{rad}(A)$. [L2, L3]

2.1 Combining [step 1.1] and [step 1.2]: $\ker\Gamma = \bigcap_\chi \ker\chi = \operatorname{rad}(A)$. [step 1.1, step 1.2]

3.1 A complex-linear map is injective exactly when its kernel is $\{0\}$, so by [step 2.1] $\Gamma$ is injective if and only if $\operatorname{rad}(A) = \{0\}$, that is, if and only if $A$ is semisimple by [L3]. [step 2.1, L3, algebra] ∎

## Remarks

- **The two intersections in the statement are the same set for two different reasons.** The first is the definition of $\Gamma$ evaluated at zero, the second is the maximal ideal theorem; the theorem is the equality of the two descriptions.
- **Semisimplicity still does not give isometry.** By
  [[thm-gelfand-transform-is-a-contractive-unital-homomorphism]] one always has
  $\|\hat a\|_\infty = r(a) \le \|a\|$, and semisimplicity upgrades injectivity
  of $\Gamma$, not the norm equality $\|\hat a\|_\infty = \|a\|$.
