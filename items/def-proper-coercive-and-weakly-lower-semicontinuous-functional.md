---
id: def-proper-coercive-and-weakly-lower-semicontinuous-functional
kind: definition
title: "Proper, coercive and weakly lower semicontinuous extended-real functionals"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-banach-space, def-weak-topology-on-a-normed-space, def-weak-convergence-of-nets-and-sequences, def-extended-reals, def-limsup-liminf, def-infimum, lem-extended-reals-complete]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, printed pp. 296-298 (variational principle and weak forcing)"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 1, printed pp. 31-33 (Theorem 2.2, Definition 2.3, Theorem 2.4)"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Section 4.1, printed pp. 26-27 (Definitions 4.1 and 4.4)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

**Setting.** Let $X$ be a real normed space (in particular, a Banach space as in [[def-banach-space]]) and let $A\subseteq X$ be a nonempty subset, the **admissible set**. An **extended-real functional on $A$** is a map $I:A\to(-\infty,+\infty]$; its **effective domain** is $\operatorname{dom}I=\{u\in A: I(u)<+\infty\}$.
**Properness.** $I$ is **proper** if $\operatorname{dom}I\ne\varnothing$, equivalently if $\inf_A I<+\infty$; a point of $\operatorname{dom}I$ is a **finite competitor**.
**Coercivity.** $I$ is **coercive on $A$** if for every $M\in\mathbb R$ there is $R\ge0$ such that $I(u)>M$ whenever $u\in A$ and $\|u\|\ge R$; equivalently (the form used below) every sublevel set $\{u\in A:I(u)\le\Lambda\}$, $\Lambda\in\mathbb R$, is bounded.
**Weak lower semicontinuity.** $I$ is **weakly sequentially lower semicontinuous at $u\in A$** if $I(u)\le\liminf_j I(u_j)$ for every sequence $(u_j)_{j\in\mathbb N}\subseteq A$ with $u_j\rightharpoonup u$ ([[def-weak-convergence-of-nets-and-sequences]]), and **weakly sequentially lower semicontinuous on $A$** if this holds at every $u\in A$. Analogously $I$ is **sequentially lower semicontinuous** on $A$ if $I(u)\le\liminf_j I(u_j)$ whenever $u_j\to u$ in norm; all infima and limits inferior are taken in $\overline{\mathbb R}=[-\infty,+\infty]$, using the complete extended order of [[lem-extended-reals-complete]]. For an extended-real sequence $(a_j)$, set $\liminf_j a_j:=\sup_N\inf_{j\ge N}a_j$; this extends the tail formula of [[def-limsup-liminf]] to sequences that may contain $+\infty$ ([[def-extended-reals]]). In particular, the infimum or limit inferior may equal $-\infty$.
**Convention.** Only the values on $A$ enter these notions, and $I$ is identified with its restriction to $A$; a point of $X\setminus A$ is inadmissible, not a point where $I$ equals $+\infty$.

## Remarks

- **The two forms of coercivity agree.** If $I$ is coercive in the divergence form and $\Lambda\in\mathbb R$, applying the definition with $M=\Lambda$ gives $R\ge0$ with $I(u)>\Lambda$ whenever $u\in A$ and $\|u\|\ge R$, so the sublevel set $\{u\in A:I(u)\le\Lambda\}$ is contained in the bounded set $\{u\in X:\|u\|<R\}$. Conversely, suppose every sublevel set is bounded and let $M\in\mathbb R$ be given; the sublevel set $S=\{u\in A:I(u)\le M\}$ is bounded, so there is $R\ge0$ with $\|u\|\le R$ for all $u\in S$, and every $u\in A$ with $\|u\|\ge R+1$ lies outside $S$, that is, $I(u)>M$ (a value in $(-\infty,+\infty]$ fails $I(u)\le M$ exactly when it exceeds $M$). This is the sense in which the equivalence is asserted.

- **Properness and a finite infimum.** If $u\in\operatorname{dom}I$ then $\inf_AI\le I(u)<+\infty$, and conversely if $\inf_AI<+\infty$ then not every value of $I$ on the nonempty set $A$ is $+\infty$, so some $u\in A$ satisfies $I(u)<+\infty$, that is, $u\in\operatorname{dom}I$.

- The sublevel-set form is the one used in the compactness step of the direct method, and the divergence form is the one recorded in the sources ([MA] Definition 2.3, [G] Definition 4.1, [T] Section 13.2). No convexity, continuity or topology on $A$ is assumed by these definitions.
