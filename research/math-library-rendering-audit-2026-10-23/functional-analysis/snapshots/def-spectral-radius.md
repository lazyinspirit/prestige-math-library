---
id: def-spectral-radius
kind: definition
title: Spectral radius
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectrum-is-nonempty-compact-and-norm-bounded, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Definition 1.50 and §5.2.2, printed pp. 34 and 222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
unital complex Banach algebra and let $a \in A$. By
[[thm-spectrum-is-nonempty-compact-and-norm-bounded]] the spectrum
$\sigma_A(a)$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]) is a
nonempty compact subset of $\mathbb C$ contained in the closed disc of radius
$\|a\|$. The real-valued function $z \mapsto |z|$ is continuous, so its image
$|{\sigma_A(a)}|$ is a nonempty compact subset of $[0,\infty)$ and has a
maximum. The **spectral radius of $a$** is the real number

$$r(a) \;:=\; \max\{\,|z| : z \in \sigma_A(a)\,\}.$$

It satisfies $0 \le r(a) \le \|a\|$. When the ambient algebra must be recorded,
the notation is $r_A(a)$; for a bounded operator $T$ on a nonzero complex Banach
space the convention is that $r(T) = \max\{|z| : z \in \sigma(T)\}$ is computed
in the algebra $\mathcal B(X)$ of bounded operators, whose spectrum convention
is fixed by the spectrum definition above.

## Remarks

- **The maximum is a maximum because the spectrum is compact and nonempty.**
  This is the only place where the Axiom of Choice enters the definition: it is
  inherited from [[thm-spectrum-is-nonempty-compact-and-norm-bounded]], whose
  nonemptiness proof uses Hahn–Banach separation. Selecting the maximum of the
  compact set of moduli uses no further choice, since a nonempty compact subset
  of $\mathbb R$ contains its supremum.

- **Monotonicity under containment.** If $B$ is a closed unital subalgebra of
  $A$ containing $a$ and the same unit, then $B$ is a unital Banach algebra in
  the inherited norm and
  $\sigma_A(a)\subseteq\sigma_B(a)$: invertibility in $B$ implies
  invertibility in $A$. Consequently $r_A(a)\le r_B(a)$.

- **Constancy on scalar multiples.** For $\lambda \in \mathbb C$ one has
  $\sigma(\lambda 1) = \{\lambda\}$ and hence $r(\lambda 1) = |\lambda|$: the
  element $\lambda 1$ is the unit rescaled, and $z1 - \lambda 1 = (z-\lambda)1$
  is invertible exactly when $z \ne \lambda$. This computation is used in the
  counterexample `cex-norm-need-not-equal-spectral-radius`.

- **The radius is not the norm in general.** The inequality $r(a) \le \|a\|$ is
  strict for many elements; the definitive relation
  $r(a) = \lim_n \|a^n\|^{1/n}$ is the theorem
  [[thm-spectral-radius-formula]]. In particular $r(a) = 0$ is possible for
  nonzero $a$, and then $\sigma_A(a) = \{0\}$.

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.
