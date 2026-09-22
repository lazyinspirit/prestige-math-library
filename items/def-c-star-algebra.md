---
id: def-c-star-algebra
kind: definition
title: C star algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-banach-space, rem-real-and-complex-normed-space-convention, def-bounded-bilinear-map, def-bounded-linear-operator, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definitions 2.1.1, 2.1.18 and §3.1, printed pp. 11–13 and 54–61"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Definitions 3.8 and 4.1, printed pp. 8–9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

A **possibly nonunital complex Banach algebra** is a complex vector space $A$
equipped with an associative complex-bilinear multiplication
$A \times A \to A$ ([[def-bounded-bilinear-map]] for the bilinearity convention)
and a norm under which $A$ is a Banach space ([[def-banach-space]],
[[rem-real-and-complex-normed-space-convention]]), such that the norm is
**submultiplicative**:

$$\|ab\| \le \|a\|\,\|b\| \qquad (a,b \in A).$$

No multiplicative identity is assumed, and no real-algebra or unital
convention is imported from elsewhere.

A **complex C\*-algebra** is a possibly nonunital complex Banach algebra $A$
equipped with an **involution** $A \to A$, $a \mapsto a^*$, which is
conjugate-linear ([[def-complex-conjugate-real-imaginary-part-and-modulus]]) and
satisfies

$$(a^*)^* = a, \qquad (ab)^* = b^*a^*, \qquad \|a^*a\| = \|a\|^2 \qquad (a,b \in A).$$

The last identity is the **C\*-identity**. Two immediate consequences are worth
recording, and both are proved from the displayed axioms alone:

- **the involution is isometric**: $\|a^*\| = \|a\|$. Indeed $\|a\|^2 = \|a^*a\| \le \|a^*\|\,\|a\|$ gives $\|a\| \le \|a^*\|$ when $a \ne 0$, and applying this inequality to $a^*$ and using $(a^*)^* = a$ gives $\|a^*\| \le \|a\|$; the case $a = 0$ is trivial;
- **no norm-uniqueness assertion is part of this definition**: such a theorem
  needs additional hypotheses and proof, and does not follow merely by naming
  the displayed C\*-identity.

Let $A$ and $B$ be complex C\*-algebras. A **bounded star-homomorphism**, or
bounded $*$-homomorphism, is a bounded complex-linear map
$\varphi : A \to B$ ([[def-bounded-linear-operator]]) satisfying

$$\varphi(ab) = \varphi(a)\varphi(b), \qquad \varphi(a^*) = \varphi(a)^* \qquad (a,b \in A).$$

A star-homomorphism is **not** required to be unital, and it is not required
that a unit be present or preserved; when $A$ and $B$ both happen to be unital,
$\varphi$ is called **unital** if $\varphi(1_A) = 1_B$. The bounded nonunital
star-homomorphisms are the arrows of the locally compact duality theorem on this
page ([[thm-locally-compact-gelfand-duality]]), with properness imposed there
through [[def-approximate-unit-and-proper-c-star-morphism]].

## Remarks

- **The zero algebra.** $A = \{0\}$ is a C\*-algebra in this sense; it is not unital in the above convention, since its only element equals both candidate identities and the unital definition requires $1 \ne 0$. The zero algebra is treated separately in the representation theorems, where it corresponds to the empty space.
- **Isometry of the involution is a theorem, not an axiom.** It is derived above from the C\*-identity, and is used whenever an estimate for $a^*$ is needed without an inner product or a Hilbert-space adjoint.
- **A bounded star-homomorphism is automatically contractive, and injective one is isometric**; neither statement is used as a definition, and neither is proved here.
