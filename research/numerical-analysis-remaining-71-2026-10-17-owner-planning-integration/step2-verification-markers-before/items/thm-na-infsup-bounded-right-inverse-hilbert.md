---
id: thm-na-infsup-bounded-right-inverse-hilbert
kind: theorem
title: "Hilbert inf-sup gives a bounded constraint right inverse"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: ["thm-lax-milgram", "def-hilbert-space", "thm-riesz-representation-for-hilbert-space", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and 8.7.1."
---

## Statement

Assume Countable Choice. Let $V,Q$ be real Hilbert spaces and let $b:V\times Q\to\mathbb R$ be bounded. Define $B:V\to Q$ by $(Bv,q)_Q=b(v,q)$. If $Q=\{0\}$, the unique zero map is a bounded right inverse. If $Q\ne\{0\}$, assume $V\ne\{0\}$ and define
$$\beta:=\inf_{q\ne0}\sup_{v\ne0}\frac{b(v,q)}{\|v\|_V\|q\|_Q}.$$
When $\beta>0$, $B$ is onto and has a bounded linear right inverse $R:Q\to V$ with $BR=I_Q$ and $\|R\|\le\beta^{-1}$.
## Facts & Assumptions

**Given:** Real Hilbert spaces $V,Q$, a bounded bilinear form, and $\beta>0$ as displayed.

[A1] Countable Choice is used by the Lax–Milgram theorem applied to the coercive form (B* q,B* r). ([[def-countable-choice]])

[F1] In a real Hilbert space every bounded linear functional is inner product with a unique vector of the same norm. ([[thm-riesz-representation-for-hilbert-space]])

[F2] Lax–Milgram under Countable Choice solves every bounded coercive real bilinear form on a Hilbert space, with solution norm at most the functional norm divided by the coercivity constant. ([[thm-lax-milgram]], [[def-countable-choice]])

[F3] Riesz representation applied to $v\mapsto b(v,q)$ defines $B^*q$ by $(Bv,q)_Q=(v,B^*q)_V$ and gives $\|B^*q\|_V=\sup_{v\ne0}|b(v,q)|/\|v\|_V$. ([[thm-riesz-representation-for-hilbert-space]], [[def-hilbert-space]])

## Proof

1.1 If $Q=\{0\}$, the unique map $R:Q\to V$ is a bounded right inverse and the claim is complete. Otherwise, since the scalar field is real, replacing $v$ by $-v$ changes the sign of $b(v,q)$; hence the displayed supremum equals the supremum of $|b(v,q)|/(\|v\|\|q\|)$. By [F3], $\|B^*q\|_V\ge\beta\|q\|_Q$. [given, F3, algebra]

2.1 On $Q$, define $c(q,r):=(B^*q,B^*r)_V$. It is bounded by $\|B\|^2\|q\|\|r\|$ and coercive with constant $\beta^2$ by step 1.1. For arbitrary $g\in Q$, the functional $r\mapsto(g,r)_Q$ is bounded, so [F2] gives a unique $q\in Q$ with $(B^*q,B^*r)_V=(g,r)_Q$ for all $r$. The adjoint identity implies $BB^*q=g$. [A1, F1, F2, F3, step 1.1]

3.1 Set $Rg:=B^*q$, with $q$ from step 2.1. Uniqueness in Lax–Milgram makes this assignment linear, and the adjoint identity in [F3] gives $BRg=g$. Also $\|Rg\|^2=(g,q)\le\|g\|\|q\|$ while step 2.1 gives $\beta\|q\|\le\|Rg\|$. If $Rg=0$ the desired bound is immediate; otherwise combine and divide to obtain $\|Rg\|\le\beta^{-1}\|g\|$. Thus $R$ is the claimed bounded right inverse. [A1, F2, F3, algebra, step 1.1, step 2.1] ∎
