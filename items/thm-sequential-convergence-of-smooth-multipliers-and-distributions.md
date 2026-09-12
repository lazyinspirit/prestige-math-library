---
id: "thm-sequential-convergence-of-smooth-multipliers-and-distributions"
kind: "theorem"
title: "Sequential convergence of smooth multipliers and distributions"
deps: ["thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions", "def-multiplication-of-a-distribution-by-a-smooth-function", "def-dependent-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Razvan Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Dependent Choice. If $u_j\to u$ weakly in $\mathcal D'(\Omega)$ and $a_j,a\in C^\infty(\Omega)$ satisfy uniform convergence of every derivative on every compact set, then $a_j u_j\to au$ weakly. Dependent Choice is used only through the uniform finite-order bound for the sequence of distributions.

## Facts & Assumptions

[F1] Under Dependent Choice, a pointwise bounded family of distributions has a common finite-order estimate on each $\mathcal D_K$; a pointwise convergent sequence has a pointwise bounded range ([[thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions]]).

[F2] Smooth multiplication acts by $(av)(\varphi)=v(a\varphi)$ ([[def-multiplication-of-a-distribution-by-a-smooth-function]]).

[F3] The assumed axiom is [[def-dependent-choice]].

## Proof

**Given:** the sequences and limits in the statement, and Dependent Choice.

1.1 Fix a test $\varphi$ with compact support $K$. By F1 and F3 there are $C,m$ such that $|u_j(\psi)|\le Cp_m(\psi)$ for every $j$ and $\psi\in\mathcal D_K$. Every $(a_j-a)\varphi$ is supported in $K$, and the finite product rule gives $p_m((a_j-a)\varphi)\le2^m q_{K,m}(a_j-a)p_m(\varphi)\to0$, where $q_{K,m}$ is the maximum of derivatives through degree $m$ on $K$. [given, F1, F2, F3, algebra]

2.1 By F2 the difference of pairings is $u_j((a_j-a)\varphi)+(u_j-u)(a\varphi)$. The first term tends to zero by step 1.1 and the second by weak convergence applied to the fixed test $a\varphi$. Therefore $(a_j u_j)(\varphi)\to(au)(\varphi)$. Since the test was arbitrary this is weak convergence. Zero multipliers and the zero test satisfy the same bounds, and on the empty domain all distributions are zero. The finite initial part of the sequence is covered by F1, with no unsupported arbitrary-net uniform bound. $\square$ [step 1.1, given, F1, F2]
