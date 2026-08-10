---
id: thm-lhopital-zero-over-zero
kind: theorem
title: "L'Hôpital's rule for the $0/0$ form at finite or infinite, one-sided endpoints"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-cauchy-mean-value-quotient-form, cor-differentiable-implies-continuous, def-one-sided-limits, def-limits-at-infinity, def-extended-reals, thm-algebra-of-function-limits, def-function-limit, thm-chain-rule, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "UC Davis, L'Hopital's rule"
      url: "https://www.math.ucdavis.edu/~kouba/CalcOneDIRECTORY/lhopitaldirectory/LHopital.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

Let $c\in\mathbb R$ and let $f,g$ be differentiable on a deleted one-sided or two-sided neighbourhood of $c$, with $g'\ne0$ there. Suppose $f(x)\to0$, $g(x)\to0$ as $x\to c$ in the chosen mode. If $f'(x)/g'(x)\to L\in\overline{\mathbb R}$, then $f(x)/g(x)\to L$ in the same mode. The analogous statement at $+\infty$ or $-\infty$ follows after the substitution $t=1/x$, wherever the transformed functions are defined.

## Facts & Assumptions

**Given:** The hypotheses and one fixed approach mode.

[L1] Differentiability implies continuity, and the Cauchy quotient lemma gives a point between two arguments at which a secant quotient equals a derivative quotient ([[cor-differentiable-implies-continuous]], [[lem-cauchy-mean-value-quotient-form]]).

[L2] Finite and infinite function limits have the quantified meanings in [[def-function-limit]], [[def-one-sided-limits]], [[def-limits-at-infinity]], and [[def-extended-reals]].

[L3] Composition with $t=1/x$ is licensed by the chain rule, and ordinary finite limits obey their algebra laws ([[thm-chain-rule]], [[thm-algebra-of-function-limits]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Extend $f,g$ to $c$ by $f(c)=g(c)=0$. Their continuity at $c$ follows from the assumed zero limits, while differentiability gives continuity at every other point of the segment. For $x\ne c$ sufficiently close, the quotient lemma on the segment with endpoints $c,x$ gives $\frac{f(x)}{g(x)}=\frac{f'(\xi_x)}{g'(\xi_x)}$, where $\xi_x$ lies strictly between $c$ and $x$.  [given, L1, L2]

2.1 As $x\to c$ in the chosen mode, $\xi_x\to c$ in that mode. Applying the defining finite or infinite limit inequality to the derivative quotient therefore gives $f(x)/g(x)\to L$.  [step 1.1, L2]

3.1 At infinity, put $F(t)=f(1/t)$, $G(t)=g(1/t)$. Then $F'/G'=f'(1/t)/g'(1/t)$, since the common factor $-1/t^2$ cancels. Apply steps 1.1 and 2.1 as $t\to0^+$ or $0^-$, and translate back.  [L3, step 2.1, algebra] ∎
