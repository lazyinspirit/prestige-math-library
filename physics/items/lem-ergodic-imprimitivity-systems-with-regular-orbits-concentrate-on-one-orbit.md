---
id: lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit
kind: lemma
title: Ergodic systems with regular orbits concentrate on one orbit
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
local_addition: true
proof_strategy: direct
deps:
  - def-system-of-imprimitivity
  - lem-pvm-multiplicity-model-over-a-standard-borel-space
  - thm-bounded-borel-pvm-integral
  - lem-scalar-and-complex-measures-from-a-pvm
  - def-standard-borel-space
  - def-group-action
  - def-measurable-function-between-measurable-spaces
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Statement

Assume AC. Let $(U,P)$ be an ergodic system of imprimitivity for a Borel action
of a group $G$ on a standard Borel space $X$, acting on a nonzero separable
Hilbert space, and suppose the orbit equivalence relation of the action is
**regular**: there is a countable family $E_1,E_2,\dots$ of $G$-invariant
Borel subsets of $X$ such that every orbit is the intersection of the sets
$E_n$ that contain it. Equivalently, some countable family of invariant Borel
sets separates distinct orbits, which is the condition that the orbit space is
countably separated. Then there is an orbit $C\subseteq X$ with
$P(X\setminus C)=0$.

## Facts & Assumptions

**Given:** AC, the Borel $G$-space $X$, the ergodic system of imprimitivity $(U,P)$ on a nonzero separable Hilbert space, and a countable family $(E_n)$ of invariant Borel sets as in the statement.

[F1] $(U,P)$ is a strongly continuous unitary representation together with a PVM with $U_gP(E)U_g^{-1}=P(gE)$, and ergodicity means that every Borel $E$ with $U_gP(E)U_g^{-1}=P(E)$ for all $g$ satisfies $P(E)=0$ or $P(E)=I$; for invariant Borel $E$ one has $P(E)$ invariant ([[def-system-of-imprimitivity]], [[def-group-action]], [[def-measurable-function-between-measurable-spaces]]).

[F2] Projections in the range of a PVM satisfy $P(A)P(B)=P(A\cap B)$; a projection $P(A)$ is zero exactly when the scalar measures $E_x(A)=\langle P(A)x,x\rangle$ vanish for all $x$; and $P$ is strongly countably additive ([[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-bounded-borel-pvm-integral]]).

[F3] $X$ is standard Borel, so Borel sets are closed under countable unions and intersections; invariance of a Borel set $E$ means $gE=E$ for all $g$ and implies invariance of its complement ([[def-standard-borel-space]]).

[F4] AC is the standing hypothesis; it is inherited from the ambient system ([[def-axiom-of-choice]], [[lem-pvm-multiplicity-model-over-a-standard-borel-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the ergodic system $(U,P)$ and the countable invariant family $(E_n)$.

1.1 The two regularity formulations are equivalent. If every orbit is the intersection of the invariant Borel sets containing it, the family $(E_n)$ separates distinct orbits: if $x,y$ lie in different orbits and $y$ belonged to every $E_n$ containing $x$, then $y$ would lie in the intersection defining the orbit of $x$. Conversely, adjoin the complements to a countable separating family and reenumerate it as $(E_n)$. Then for every $x$ the intersection $I_x=\bigcap\{E_n:x\in E_n\}$ is contained in the orbit of $x$: a point $y\notin Gx$ is separated from $x$ by some $E_n$, and replacing $E_n$ by its complement if necessary (also invariant Borel by [F3]) gives $E_n\ni x$, $E_n\not\ni y$; the reverse inclusion holds because each $E_n$ is invariant. [F3]

1.2 Each $P(E_n)$ is $0$ or $I$: since $E_n$ is invariant, $U_gP(E_n)U_g^{-1}=P(gE_n)=P(E_n)$ for every $g$, so ergodicity applies. [F1]

2.1 Define $F_n=E_n$ if $P(E_n)=I$ and $F_n=X\setminus E_n$ if $P(E_n)=0$; each $F_n$ is invariant Borel and $P(F_n)=I$. For $C:=\bigcap_nF_n$ one has $X\setminus C=\bigcup_n(X\setminus F_n)$ with $P(X\setminus F_n)=0$; strong countable additivity gives $P(\bigcup_n(X\setminus F_n))=\lim_NP(\bigcup_{n\le N}(X\setminus F_n))$ and the scalar measures of each finite union vanish, so $P(X\setminus C)=0$. [F2, F3, step 1.2]

3.1 $C$ is nonempty because $P(C)=I\ne0$ on the nonzero Hilbert space, and $C$ is invariant. Choose $x\in C$. Its orbit satisfies $Gx\subseteq C$ since $C$ is invariant. Conversely, if $y\in C$ and $E_n\ni x$, then either $F_n=E_n$, in which case $y\in C\subseteq E_n$; or $F_n=X\setminus E_n$ and $x\notin E_n$, a contradiction. Hence $y$ belongs to every $E_n$ containing $x$, so by regularity $y\in Gx$. Therefore $C=Gx$ is a single orbit and is Borel as a countable intersection. [step 1.1, step 2.1, F3]

4.1 Combining [step 2.1] and [step 3.1]: the invariant Borel set $C$ is exactly one orbit and $P(X\setminus C)=0$, which is the concentration claim. [step 2.1, step 3.1, F4] ∎ 