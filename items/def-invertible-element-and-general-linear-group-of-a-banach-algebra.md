---
id: def-invertible-element-and-general-linear-group-of-a-banach-algebra
kind: definition
title: Invertible element and general linear group of a Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1 (invertible elements and the Neumann series), printed pp. 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 2 §2.1, printed pp. 19–24"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Let $A$ be a unital complex Banach algebra ([[def-unital-banach-algebra]]). An
element $a \in A$ is **invertible** when there is $b \in A$ with

$$ab = ba = 1 .$$

Such an element $b$ is then unique: if $b$ and $b'$ both satisfy the two
equations, then

$$b = b1 = b(ab') = (ba)b' = 1b' = b' ,$$

using associativity and the unit law. The unique $b$ is called the **inverse**
of $a$ and is written $a^{-1}$. The set of all invertible elements of $A$ is
denoted

$$A^{\times} := \{\,a \in A : a \text{ is invertible}\,\}$$

and is called the **general linear group** of $A$. It is a group under
multiplication:

* $1 \in A^{\times}$ with $1^{-1} = 1$;
* if $a,b \in A^{\times}$ then $ab \in A^{\times}$ with
  $(ab)^{-1} = b^{-1}a^{-1}$, since
  $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aa^{-1} = 1$ and symmetrically;
* $(a^{-1})^{-1} = a$ by symmetry of the defining equations.

The map $a \mapsto a^{-1}$ is the **inversion map** of $A^{\times}$.

## Remarks

- **Two-sided inverses are required, and one-sided inverses do not suffice.**
  If $ab = 1$ and $ba \ne 1$, then $a$ is not invertible by definition, and
  this situation really occurs in a unital complex Banach algebra: on
  $\ell^2(\mathbb N_0)$ the right shift $Te_n = e_{n-1}$ for $n \ge 1$,
  $Te_0 = 0$, and the left shift $Se_n = e_{n+1}$ satisfy $TS = 1$ while
  $ST = 1 - P$, where $P$ is the orthogonal projection onto $\mathbb C e_0$, so
  $T$ has a right inverse and is not invertible
  (`ex-spectrum-of-the-unilateral-shift`). Thus $ab = 1$ alone does not force
  $ba = 1$ in a general unital Banach algebra; both inverses are always
  verified explicitly below.

- **The group need not be dense, open or connected — but it is open.** In a
  Banach algebra $A^{\times}$ is an open subset of $A$ and inversion is
  continuous there; this is
  [[thm-invertible-group-is-open-and-inversion-is-continuous]]. Openness is what
  makes the resolvent set of an element open and hence makes the spectrum
  closed [[def-spectrum-and-resolvent-set-in-a-banach-algebra]].

- **Nonunital algebras are not covered here.** In a Banach algebra without a
  unit there is no element $1$ to compare with, so invertibility is not defined
  by this definition. The companion examples introduce the unitization
  $A \oplus \mathbb C 1$ and declare that spectra of elements of a nonunital
  algebra are always computed in that named unitization
  (`ex-unitization-of-a-nonunital-banach-algebra`).

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.
