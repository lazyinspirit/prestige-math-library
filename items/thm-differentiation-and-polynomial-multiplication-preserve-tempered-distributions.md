---
id: thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions
kind: theorem
title: Differentiation and polynomial multiplication preserve tempered distributions
status: draft
origin: pipeline
deps: [def-tempered-distribution, def-weak-and-strong-topologies-on-tempered-distributions, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, lem-smooth-polynomially-bounded-multipliers-on-schwartz-space, def-distributional-derivative, def-multiplication-of-a-distribution-by-a-smooth-function]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.2.1 items (1)–(2), pp. 126–127"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.2, pp. 128–129"
proof_strategy: direct
---

## Statement

For $u\in\mathcal S'(\mathbb R^n)$, a multi-index $\alpha$, and a complex
polynomial $P$, define

$$\langle\partial^\alpha u,\varphi\rangle =(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle, \qquad \langle Pu,\varphi\rangle=\langle u,P\varphi\rangle.$$

Both results lie in $\mathcal S'$.  For fixed $\alpha$ or $P$, these operations
are continuous in both the weak and strong dual topologies, and their
restrictions to $\mathcal D$ agree with the corresponding operations on
$\mathcal D'$.

## Facts & Assumptions

**Given:** A tempered distribution $u$, a multi-index $\alpha$, and a complex
polynomial $P$ ([[def-tempered-distribution]]).

[F1] Differentiation and polynomial multiplication are continuous linear
endomorphisms of Schwartz space
([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]],
[[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

[F2] Weak and strong dual topologies use point tests and bounded test sets
([[def-weak-and-strong-topologies-on-tempered-distributions]]).

[F3] On $\mathcal D'$, distributional differentiation has the same sign and
smooth multiplication has the same transpose formula
([[def-distributional-derivative]],
[[def-multiplication-of-a-distribution-by-a-smooth-function]]).

## Proof

**Proof technique:** transposition and bounded-set transport.

1.1 Each displayed functional is the composition of $u$ with a continuous Schwartz endomorphism, followed in the derivative case by a scalar sign. It is therefore continuous and complex-linear on $\mathcal S$, hence belongs to $\mathcal S'$. [F1, given]

2.1 For a single test $\varphi$, the absolute value after either operation is a source weak seminorm evaluated at the transformed test.  Thus each operation is weakly continuous. [F2, step 1.1]

2.2 A continuous linear Schwartz endomorphism sends bounded sets to bounded sets.  For a bounded $B$, the target strong seminorm is therefore the source strong seminorm on $\partial^\alpha B$ or $PB$ (the derivative sign disappears under absolute values).  This proves strong continuity. [F1, F2, step 1.1]

3.1 If $\psi\in\mathcal D$, then $\partial^\alpha\psi$ and $P\psi$ are again compactly supported tests.  Evaluating the two displayed definitions on $\psi$ gives exactly the formulas in [F3].  Hence restriction to $\mathcal D'$ commutes with both operations.  The cases $\alpha=0$, constant $P$, $P=0$, and $u=0$ follow from the same formulas.  No choice axiom is used. [F3] ∎
