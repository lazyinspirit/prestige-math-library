---
id: def-relative-compactness-with-respect-to-an-operator
kind: definition
title: "Relative compactness with respect to an operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-relative-boundedness-with-respect-to-an-operator, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-compact-linear-operator, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences, thm-self-adjoint-resolvent-estimate, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-schauder-compact-adjoint-theorem, def-axiom-of-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.4, definition before Lemma 6.21, Lemma 6.21 and Lemma 6.22, pp.172-173"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.13 (compact resolvent), Sec. 6.1.2"
---

## Definition

Assume the Axiom of Choice. Let $A$ be a self-adjoint operator and let $B$ be defined on $D(A)$ and bounded
for the graph norm of $A$ ([[def-relative-boundedness-with-respect-to-an-operator]]).
Then $B$ is **$A$-compact**, or **relatively compact with respect to $A$**,
when $BR_A(z)\in\mathcal K(H)$ is a compact operator
([[def-compact-linear-operator]]) for one, equivalently for every,
$z\in\rho(A)$.

**Well-definedness, with proofs.**

1. *$BR_A(z)$ is everywhere defined and bounded.* $R_A(z)$ maps $H$ into
   $D(A)$ and $B$ is graph-norm bounded there, so
 $\|BR_A(z)y\|\le a\|AR_A(z)y\|+b\|R_A(z)y\|\le(a(1+|z|\|R_A(z)\|)+b\|R_A(z)\|)\|y\|$
   using $AR_A(z)=zR_A(z)-I$, so that $\|AR_A(z)\|\le1+|z|\|R_A(z)\|$
   ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).
2. *Independence of $z$.* For $z,w\in\rho(A)$ the resolvent identity
   $R_A(z)=R_A(w)+(w-z)R_A(w)R_A(z)$ of
   [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]] gives
   $BR_A(z)=BR_A(w)+(w-z)BR_A(w)R_A(z)$; if $BR_A(w)$ is compact then so is
   $BR_A(z)$, a sum of a compact operator and a product of a compact operator
   with a bounded one, and if $BR_A(z)$ is compact then
   $BR_A(w)=BR_A(z)-(w-z)BR_A(z)R_A(w)$ is compact for the same reason
   ([[lem-compositions-with-a-compact-operator-are-compact]]).
3. *Vector space.* If $B_1,B_2$ are graph-norm bounded and $A$-compact, then
   $\alpha B_1+\beta B_2$ is graph-norm bounded and
   $(\alpha B_1+\beta B_2)R_A(z)=\alpha B_1R_A(z)+\beta B_2R_A(z)$ is compact,
   being a linear combination of compact operators
   ([[lem-linear-combinations-of-compact-operators-are-compact]]).
4. *An $A$-compact $B$ has $A$-bound zero.* First, if $a=\|BR_A(z)\|$ for any
   $z\in\rho(A)$, then $\|B\psi\|=\|BR_A(z)(A-z)\psi\|\le a\|(A-z)\psi\|\le
   a\|A\psi\|+a|z|\|\psi\|$ for $\psi\in D(A)$, so $a$ is admissible and the
   $A$-bound of $B$ is at most $\inf_{z}\|BR_A(z)\|$
   ([[def-relative-boundedness-with-respect-to-an-operator]]). Second, along
   the imaginary axis $BR_A(i\lambda)=(BR_A(i))\,(i-A)R_A(i\lambda)$, because
   $R_A(i)(i-A)=I$ and $R_A(i\lambda)=(i\lambda-A)^{-1}$; here
   $(i-A)R_A(i\lambda)$ has symbol $(i-\mu)(i\lambda-\mu)^{-1}$, hence is
   normal of norm at most $1$ for $\lambda\ge1$ and converges strongly to $0$
   because that symbol tends to $0$ pointwise and the norm identity of the
   calculus applies. A compact operator followed by such a family converges to
   $0$ in norm: taking adjoints reduces this to the uniform convergence of a
   uniformly bounded strongly convergent family on the compact closure of the
   image of the unit ball of the compact operator (a finite $\varepsilon$-net
   argument), where Schauder's theorem supplies compactness of the adjoint
   ([[thm-schauder-compact-adjoint-theorem]], [[thm-self-adjoint-resolvent-estimate]]).
   Hence $\|BR_A(i\lambda)\|\to0$ and the $A$-bound of $B$ is $0$.
