---
id: def-unital-banach-algebra
kind: definition
title: Unital Banach algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-banach-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1 (Banach algebras), printed pp. 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 2 §2.1, printed pp. 19–24"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Definition

A **unital complex Banach algebra** is a nonzero complex vector space $A$
equipped with

* an associative bilinear multiplication $A \times A \to A$,
  $(a,b) \mapsto ab$, and
* a norm $\|\cdot\|$ under which $A$ is a Banach space
  ([[def-banach-space]]),

such that

* the norm is **submultiplicative**: $\|ab\| \le \|a\|\,\|b\|$ for all
  $a,b \in A$, and
* there is a **unit** $1 \in A$ with $1a = a1 = a$ for every $a \in A$,
  normalized by $\|1\| = 1$.

The phrase *nonzero* is part of the definition: the identity is required to
exist, and the zero algebra $\{0\}$ has no element satisfying $1 \ne 0$. In
every unital Banach algebra the unit is unique, because if $1'$ is a second
element acting as an identity then $1' = 1'1 = 1$; from now on $1$ denotes that
element. The norm condition $\|1\| = 1$ is a normalization rather than a
consequence of submultiplicativity, which would give only $\|1\| \ge 1$ for a
nonzero unit; the two conventions $\|1\| = 1$ and $\|1\| \le 1$ agree on every
nonzero unital algebra, since submultiplicativity turns the latter into an
equality.

## Remarks

- **The scalar field is complex and fixed.** Every spectrum, resolvent and
  holomorphic-calculus statement on this page is about complex unital Banach
  algebras. Real Banach algebras are not silently complexified: the one place
  where a real structure enters, the spectrum of a real operator, is defined
  through a specified complexification in
  [[def-complexification-and-spectrum-of-a-real-operator]].

- **Multiplication is bilinear and associative, and nothing more.** No
  commutativity, involution, or approximate unit is assumed. The algebra
  $\mathcal B(X)$ of bounded operators on a nonzero complex Banach space
  (`ex-bounded-operators-form-a-noncommutative-banach-algebra`) is the
  motivating noncommutative example, and $C(K,\mathbb C)$ for compact Hausdorff
  $K$ (`ex-continuous-functions-form-a-commutative-banach-algebra`) the
  motivating commutative one.

- **Completeness is with respect to the submultiplicative norm.** A complete
  normed algebra whose norm is merely equivalent to a submultiplicative one is
  not thereby a unital Banach algebra in this sense; rescaling a norm to
  $\lambda\|\cdot\|$ with $\lambda > 1$ preserves completeness and
  submultiplicativity but destroys the normalization $\|1\| = 1$.

- **The unit is not a separate structure.** It is determined by the
  multiplication, so an algebra homomorphism between unital Banach algebras
  that preserves multiplication and the unit is exactly a multiplicative
  linear map sending $1$ to $1$; this is the convention used for characters on
  the following page of this track.

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.
