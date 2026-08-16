---
id: def-function-algebra-indistinguishability-quotient
kind: definition
title: "The quotient that identifies points indistinguishable by a real function algebra"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-unital-separating-real-function-algebra-general, def-quotient-topology]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.15"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb R)$ be a real function algebra in the sense of [[def-unital-separating-real-function-algebra-general]]. Define a relation on $X$ by
$$x\sim_A y\quad\Longleftrightarrow\quad f(x)=f(y)\text{ for every }f\in A.$$

This is an equivalence relation: equality gives reflexivity, symmetry of equality gives symmetry, and transitivity follows by applying transitivity of equality to $f(x)=f(y)$ and $f(y)=f(z)$ for each $f\in A$. The **indistinguishability quotient** of $X$ by $A$ is
$$Y_A:=X/{\sim_A},$$
equipped with the quotient topology of the canonical surjection
$$q_A:X\longrightarrow Y_A,\qquad q_A(x)=[x]_A,$$
as defined in [[def-quotient-topology]]. Thus two points have the same image under $q_A$ exactly when no member of $A$ distinguishes them.
