---
id: prop-normal-form-for-an-ascending-hnn-extension
kind: proposition
title: "Ascending HNN extensions admit the one-sided normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ascending-hnn-extension, thm-hnn-normal-form-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Let

$$A\ast_\phi=\langle A,t\mid tat^{-1}=\phi(a)\text{ for every }a\in A\rangle$$

be an ascending HNN extension. Then every element of $A\ast_\phi$ has a unique
expression

$$t^{-m}a\,t^n$$

with $m,n\ge 0$, $a\in A$, and

$$a\notin\phi(A)\qquad\text{whenever }m,n>0.$$

## Facts & Assumptions

**Given:** The ascending HNN extension in the statement.

[L1] In an ascending HNN extension, the negative associated subgroup is all of $A$ and the positive associated subgroup is $\phi(A)$. ([[def-ascending-hnn-extension]])

[L2] An HNN extension has a unique transversal normal form once transversals are fixed. ([[thm-hnn-normal-form-theorem]])

## Proof

**Proof technique:** direct.

1.1 Choose a right-coset transversal $S$ for $\phi(A)\backslash A$ containing $e$, and apply [L2] with the transversal for the negative associated subgroup equal to $\{e\}$. Every coefficient following a letter $t$ is then $e$, so a sign pattern $+,-$ cannot occur: it would create a pin. Thus every transversal normal form has all negative stable letters before all positive stable letters. [L1, L2, given, algebra]

2.1 Such a normal form has the shape $a_0t^{-1}s_1\cdots t^{-1}s_m t^n$, where $s_i\in S$ and the positive-letter coefficients are identities. Repeatedly use $b t^{-1}=t^{-1}\phi(b)$ to move $a_0$ and then the intervening coefficients to the right. This gives one expression $t^{-m}a t^n$. If $m,n>0$, normality gives $s_m\ne e$; the resulting middle coefficient has the form $\phi(b)s_m$, so it lies outside $\phi(A)$. [L1, L2, step 1.1, algebra]

3.1 Conversely, start with $t^{-m}a t^n$ and recursively decompose the coefficient immediately following the last $t^{-1}$ into its unique form $ds$ with $d\in\phi(A)$ and $s\in S$, moving $d$ left by $t^{-1}d=\phi^{-1}(d)t^{-1}$. This recovers a unique transversal normal form. When $m,n>0$, the condition $a\notin\phi(A)$ makes the last representative nonidentity, so no cancellation occurs at the sign change. This reverse construction and the construction of step 2.1 are inverse, and uniqueness in [L2] therefore gives uniqueness of $m,n,a$. [L1, L2, step 2.1, algebra] ∎
