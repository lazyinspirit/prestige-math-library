---
id: lem-normal-closure-of-a-radical-extension-is-radical
kind: lemma
title: "The normal closure of a radical extension is again radical"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radical-extension, prop-splitting-field-of-x-n-minus-a, def-roots-of-unity-in-a-field, thm-finite-galois-extension-characterizations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Ash, Basic Abstract Algebra, Proposition 6.8.2"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $L/F$ be a finite radical extension. Then the normal closure of $L/F$ is
again a radical extension of $F$.

## Facts & Assumptions
**Given:** A radical tower $F=F_0\subseteq F_1\subseteq\cdots\subseteq F_r=L$.

[F1] A radical extension is built by adjoining one root of one equation $x^{m_i}=a_i$ at each step ([[def-radical-extension]]).

[L1] After adjoining one nonzero root of $x^m-a$, all the remaining roots are obtained by multiplying by $m$-th roots of unity ([[prop-splitting-field-of-x-n-minus-a]], [[def-roots-of-unity-in-a-field]]).

## Proof

**Proof technique:** direct.

1.1 We induct on the length $r$ of the radical tower. For $r=0$, the extension is $F/F$, whose normal closure is itself. [F1]

1.2 Assume $r>0$, let $N/F$ be the normal closure of $F_{r-1}/F$, and write $$F_r=F_{r-1}(\alpha),\qquad \alpha^m=a\in F_{r-1}.$$ [F1]

2.1 If $\alpha=0$, then $F_r=F_{r-1}$, so the normal closure of $F_r/F$ is just $N$. [step 1.2, algebra]

2.2 Assume instead that $\alpha\ne0$. Because $N/F$ is normal and contains $F_{r-1}$, every $F$-conjugate of $a$ lies in $N$. Let $a_1,\dots,a_s\in N$ be the distinct conjugates of $a$ over $F$, and choose roots $\alpha_j$ with $\alpha_j^m=a_j$. Every $F$-conjugate of $\alpha$ is then a nonzero root of some polynomial $x^m-a_j$, so [L1] says it has the form $\zeta\alpha_j$ for some $\zeta\in\mu_m$. Therefore the normal closure $M$ of $F_r/F$ is exactly $$M=N(\alpha_1,\dots,\alpha_s,\mu_m).$$ [L1, step 1.2, algebra]

2.3 By the induction hypothesis, $N/F$ is radical. [step 1.1, F1]

3.1 In the case of step 2.2, the field $M$ is radical over $N$: adjoin the finitely many $\alpha_j$ one at a time, each by one equation $x^m-a_j$, and then adjoin generators of $\mu_m$ by roots of $x^m-1$. Concatenating that tower with the radical tower for $N/F$ from step 2.3 shows that $M/F$ is radical. [step 2.2, step 2.3, F1, algebra]

4.1 Step 2.1 handles the case $\alpha=0$. Otherwise step 2.2 identifies the normal closure as $M$, and step 3.1 shows that $M/F$ is radical. Thus the induction closes, so the normal closure of every finite radical extension is radical. [step 2.1, step 2.2, step 3.1] ∎
