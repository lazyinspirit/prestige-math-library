---
id: def-orthogonality-and-orthogonal-complement
kind: definition
title: Orthogonality and the orthogonal complement
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, def-linear-subspace, cor-inner-product-induces-a-norm]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Definition

Let $V$ be a real or complex inner-product space. Vectors $x,y\in V$ are
**orthogonal**, written $x\perp y$, when

$$\langle x,y\rangle=0 .$$

For a subset $S\subseteq V$ the **orthogonal complement** of $S$ is

$$S^\perp:=\{\,v\in V : \langle v,s\rangle=0 \text{ for every } s\in S\,\}.$$

**Orthogonality is symmetric.** If $\langle x,y\rangle=0$, then
$\langle y,x\rangle=\overline{\langle x,y\rangle}=0$, so $x\perp y$ exactly
when $y\perp x$; in particular the condition defining $S^\perp$ is symmetric in
its two arguments.

**$S^\perp$ is a linear subspace.** Let $s\in S$ and scalars $a,b$; then
$\langle 0,s\rangle=0$, and if $u,v\in S^\perp$ then
$\langle au+bv,s\rangle=a\langle u,s\rangle+b\langle v,s\rangle=0$ by linearity
in the first argument, so $au+bv\in S^\perp$. Thus $S^\perp$ is a linear
subspace of $V$ ([[def-linear-subspace]]) for every subset $S$, whether or not
$S$ is a subspace. Moreover $0\in S^\perp$ always, and $v\in V$ lies in
$\{0\}^\perp$ for every $v$, so $\{0\}^\perp=V$.

**Monotonicity.** If $S\subseteq T\subseteq V$, then every vector orthogonal to
all of $T$ is orthogonal to all of $S$, so $T^\perp\subseteq S^\perp$.

**Nontriviality of orthogonality.** By positive definiteness
$\langle v,v\rangle=\|v\|^2=0$ exactly for $v=0$ ([[cor-inner-product-induces-a-norm]]),
so a vector orthogonal to itself is zero, and $\{0\}^\perp=V$, $V^\perp=\{0\}$.
