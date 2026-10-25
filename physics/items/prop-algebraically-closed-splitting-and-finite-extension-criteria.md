---
id: prop-algebraically-closed-splitting-and-finite-extension-criteria
kind: proposition
title: "A field is algebraically closed exactly when every nonconstant polynomial splits, equivalently when it has no nontrivial finite extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraically-closed-field, def-polynomials-that-split-and-splitting-fields, cor-factor-theorem-over-a-commutative-ring, cor-element-algebraic-iff-simple-extension-finite, cor-every-nonconstant-polynomial-has-a-root-in-an-extension, thm-finite-field-extensions-are-algebraic, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: frontier-20
---

## Statement

For a field $F$, the following are equivalent:

1. $F$ is algebraically closed.
2. Every nonconstant polynomial in $F[x]$ splits over $F$.
3. $F$ has no nontrivial finite extension.

## Facts & Assumptions

**Given:** A field $F$.

[L1] A field is algebraically closed exactly when every nonconstant polynomial over it has a root in the field ([[def-algebraically-closed-field]]).

[L2] Splitting means factorization into linear factors over the field ([[def-polynomials-that-split-and-splitting-fields]]).

[L3] A polynomial $p$ has $a$ as a root exactly when $x-a$ divides $p$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[L4] An element is algebraic over $F$ if and only if its simple extension over $F$ is finite ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L5] Every nonconstant polynomial over $F$ has a root in some extension of $F$ ([[cor-every-nonconstant-polynomial-has-a-root-in-an-extension]]).

[L6] Every element of a finite extension is algebraic over the base field ([[thm-finite-field-extensions-are-algebraic]]).

[L7] Every algebraic element has a unique monic irreducible minimal polynomial, and a polynomial vanishes at that element exactly when the minimal polynomial divides it ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Assume $F$ is algebraically closed, and let $f \in F[x]$ be nonconstant. By [L1] it has a root $a \in F$, so [L3] gives $f=(x-a)q$ for some $q \in F[x]$. Repeating the same argument on $q$ while it remains nonconstant writes $f$ as a product of linear factors, so $f$ splits over $F$ in the sense of [L2]. [L1, L2, L3, choose]

1.2 Assume every nonconstant polynomial in $F[x]$ splits over $F$, and let $E/F$ be finite. For any $\alpha \in E$, fact [L6] makes $\alpha$ algebraic over $F$. If $\alpha \notin F$, let $m_\alpha$ be its minimal polynomial over $F$. Then [L7] makes $m_\alpha$ a nonconstant irreducible polynomial with $m_\alpha(\alpha)=0$. By the hypothesis, $m_\alpha$ splits over $F$ and therefore has a root $a \in F$. Fact [L3] gives $x-a$ as a linear factor of $m_\alpha$, contradicting irreducibility. Hence every $\alpha \in E$ already lies in $F$, so $E=F$. [L3, L6, L7, algebra]

1.3 Assume $F$ has no nontrivial finite extension, and let $f \in F[x]$ be nonconstant. By [L5] there is an extension $K/F$ and an element $\alpha \in K$ with $f(\alpha)=0$. Then $\alpha$ is algebraic over $F$, so [L4] makes $F(\alpha)/F$ finite. By the hypothesis this finite extension must be trivial, hence $\alpha \in F$. Therefore every nonconstant polynomial over $F$ has a root in $F$, and [L1] says that $F$ is algebraically closed. [L1, L4, L5]

2.1 Steps 1.1, 1.2, and 1.3 prove $(1)\Rightarrow(2)\Rightarrow(3)\Rightarrow(1)$, so the three conditions are equivalent. [step 1.1, step 1.2, step 1.3] ∎
