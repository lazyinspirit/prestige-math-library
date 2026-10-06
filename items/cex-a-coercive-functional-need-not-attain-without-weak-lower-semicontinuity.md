---
id: cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity
kind: counterexample
title: "A coercive functional need not attain without weak lower semicontinuity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-proper-coercive-and-weakly-lower-semicontinuous-functional, thm-direct-method-in-a-reflexive-banach-space, def-square-summable-family-on-an-arbitrary-index-set, cor-ell-p-duality-by-counting-measure, def-weak-convergence-of-nets-and-sequences, def-axiom-of-choice, thm-reflexivity-of-lp-for-one-less-p-less-infinity, rem-ell-p-is-l-p-of-counting-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Sections 1 and 4, printed pp. 31-33 and 44-45"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, warning and Example 13.4, printed p. 296"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**Counterexample.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H=\ell^2(\mathbb N,\mathbb R)$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), let $e_k$ be the family that is $1$ at $k$ and $0$ elsewhere, and define $I:H\to\mathbb R$ by
$$I(0):=1,\qquad I(u):=\|u\|^2\ \ (u\ne0).$$
Then $I$ is proper and coercive ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]) and $\inf_HI=0$, but no point of $H$ minimises $I$: the value $0$ is not attained, because only $u=0$ gives $\|u\|^2=0$ and $I(0)=1$. The functional is not weakly sequentially lower semicontinuous at $0$: for $j\ge1$, $e_j/j\rightharpoonup0$ while $I(e_j/j)=1/j^2\to0<1=I(0)$. Hence the weak lower semicontinuity hypothesis in [[thm-direct-method-in-a-reflexive-banach-space]] cannot be replaced by coercivity alone, even in a reflexive space.

## Facts & Assumptions

**Given:** The Axiom of Choice; the real Hilbert space $H=\ell^2(\mathbb N,\mathbb R)$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), its coordinate vectors $e_k$, namely the family that is $1$ at $k$ and $0$ elsewhere, and the functional $I:H\to\mathbb R$ with $I(0):=1$ and $I(u):=\|u\|^2$ for $u\ne0$. The counting-measure dictionary [[rem-ell-p-is-l-p-of-counting-measure]] identifies $H$ with real $L^2(\#)$, which is reflexive (and thus Banach) by [[thm-reflexivity-of-lp-for-one-less-p-less-infinity]] under Countable Choice, supplied here by AC; the series pairing is its inner product.

[F1] Proper, coercive and weakly sequentially lower semicontinuous functionals are defined as in [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]; a functional is proper when its effective domain is nonempty, equivalently when its infimum is less than $+\infty$ (it may be $-\infty$).

[F2] In the direct method, weak sequential lower semicontinuity is a hypothesis alongside coercivity; [[thm-direct-method-in-a-reflexive-banach-space]] states all of its hypotheses explicitly, so a coercive proper functional on a reflexive space need not attain when that hypothesis fails.

[F3] Each coordinate vector satisfies $e_k\in H$ and $\|e_k\|=1$, and $e_k\rightharpoonup0$: by the duality of $\ell^p$ and $\ell^q$ every bounded linear functional on $\ell^2$ is $\Lambda(a)=\sum_ka_kb_k$ for a unique $b\in\ell^2$ ([[cor-ell-p-duality-by-counting-measure]]), so $\Lambda(e_k)=b_k$, and $b_k\to0$ because a square-summable family has small tails, that is, for every $\varepsilon>0$ there is a finite $F$ with $\sum_{k\notin F}|b_k|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), whence $|b_k|^2<\varepsilon$ for every $k$ beyond all elements of $F$; weak convergence means convergence against every bounded linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

## Counterexample

**Proof technique:** direct computation of the values along the sequence $e_j/j$, $j\ge1$.

1.1 $I$ is proper. The effective domain of $I$ is all of $H$, which is nonempty, and $I\ge0$ with $I(e_1/j)=1/j^2\to0$ as $j\to\infty$, so $\inf_HI=0<+\infty$; by [F1] the functional is proper. [F1, algebra]

1.2 $I$ is coercive. For $\|u\|\ge1$ one has $I(u)=\|u\|^2\ge\|u\|$ (and the value $I(0)=1$ does not affect large norms). Given $M\in\mathbb R$, put $R:=\max\{1,M+1\}$; then $\|u\|\ge R$ implies $I(u)\ge\|u\|\ge M+1>M$, so every sublevel set is bounded and $I$ is coercive by [F1]. [F1, algebra]

1.3 None of the values $0$ is attained. If $I(u)=0$ then $u\ne0$ and $\|u\|^2=0$, hence $u=0$, a contradiction; and $I(0)=1\ne0$. Since $\inf_HI=0$, the infimum is not attained. [F1, algebra]

1.4 Failure of weak lower semicontinuity at $0$. Let $u_j:=e_j/j$ for $j\ge1$. Then $\|u_j\|=1/j\to0$ by [F3], and for every bounded linear functional $\Lambda$ on $H$ one has $\Lambda(u_j)=\Lambda(e_j)/j\to0$ by [F3]; hence $u_j\rightharpoonup0$. On the other hand $u_j\ne0$ gives $I(u_j)=\|u_j\|^2=1/j^2\to0<1=I(0)$. Hence $I(0)>\liminf_jI(u_j)$, and $I$ is not weakly sequentially lower semicontinuous at $0$. [F3, algebra]

2.1 Conclusion. The functional is proper and coercive on the reflexive space $H$, yet attains no minimum and fails weak lower semicontinuity; hence the weak lower semicontinuity hypothesis of [F2] cannot be dropped, and coercivity alone does not give attainment even in a reflexive space. [F2, step 1.3, step 1.4] ∎ 
