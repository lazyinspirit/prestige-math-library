---
id: thm-invariant-factor-decomposition-over-a-pid
kind: theorem
title: "Invariant-factor decomposition of a finitely generated module over a PID"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-factors-and-elementary-divisors-of-a-pid-module, thm-simultaneous-basis-theorem-for-pid-submodules, thm-first-isomorphism-theorem-modules, def-quotient-module]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 3"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

Every finitely generated PID module is a finite free module direct-summed with cyclic torsion quotients. Precisely, if $M$ is finitely generated over a PID $R$, then

$$M\cong R^s\oplus R/(a_1)\oplus\cdots\oplus R/(a_t),$$

where each $a_i$ is a nonzero nonunit and $a_1\mid\cdots\mid a_t$. Every finitely generated PID module has an invariant-factor decomposition. This assertion is existence; uniqueness is proved separately.

## Facts & Assumptions

**Given:** A finitely generated module $M$, quotient modules ([[def-quotient-module]]), and the first isomorphism theorem for modules ([[thm-first-isomorphism-theorem-modules]]).

[L1] For a submodule $N$ of a free PID module $M$ of finite rank $n$, there are a basis $e_1,\ldots,e_n$ of $M$ and nonzero elements $a_1\mid\cdots\mid a_r$ with $r\le n$ such that $a_1e_1,\ldots,a_re_r$ is a basis of $N$ ([[thm-simultaneous-basis-theorem-for-pid-submodules]]).

## Proof

**Proof technique:** constructive.

1.1 Choose generators $m_1,\ldots,m_n$ of $M$ and define the surjection $\pi:R^n\to M$ by sending the standard basis to them; put $N=\ker\pi$. For the zero module one may take $n=0$. [given, construct]

2.1 Apply [L1] to $N\le R^n$. There is a basis $e_1,\ldots,e_n$ of $R^n$ and a basis $a_1e_1,\ldots,a_re_r$ of $N$, with nonzero $a_1\mid\cdots\mid a_r$. [step 1.1, L1]

3.1 The first isomorphism theorem and coordinatewise quotient give $M\cong R^n/N\cong R/(a_1)\oplus\cdots\oplus R/(a_r)\oplus R^{n-r}$. Any unit $a_i$ contributes the zero quotient and is removed; the remaining nonunit factors preserve the divisibility chain. This constructs the stated decomposition, including purely free, purely torsion, cyclic, and empty cases. [step 2.1, given, algebra, discharge-construct] ∎
