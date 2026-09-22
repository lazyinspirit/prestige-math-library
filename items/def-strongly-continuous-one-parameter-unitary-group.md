---
id: def-strongly-continuous-one-parameter-unitary-group
kind: definition
title: "Strongly continuous one-parameter unitary group"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-orthogonality-and-orthogonal-complement, def-metric-continuity]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 5.1, pp.145-146"
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Section 1.1, Definitions and Remark 1.2, pp.4-6"
---

## Definition

A **strongly continuous one-parameter unitary group** on the complex Hilbert
space $H$ is a map $U:\mathbb R\to\mathcal B(H)$ such that
$U(0)=I$, $U(s+t)=U(s)U(t)$ for all $s,t\in\mathbb R$, each $U(t)$ is unitary
(that is, onto and norm preserving, equivalently $U(t)^*U(t)=U(t)U(t)^*=I$,
[[def-bounded-linear-operator]], [[def-operator-norm]]), and the orbit maps
$t\mapsto U(t)x$ are continuous at every $t$ for every $x\in H$, from the
usual metric on $\mathbb R$ to the norm metric of $H$
([[def-metric-continuity]]).

**Continuity at the origin suffices, and weak continuity is equivalent to
strong continuity.** These two clauses are part of the definition's content
and are proved here. If $t\mapsto U(t)x$ is continuous at $t=0$ and $t_0\in
\mathbb R$, then $U(t)x-U(t_0)x=U(t_0)\bigl(U(t-t_0)x-x\bigr)$ and $U(t_0)$ is
isometric, so $\|U(t)x-U(t_0)x\|=\|U(t-t_0)x-x\|\to0$ as $t\to t_0$; the group
law and isometry turn continuity at one point into continuity everywhere.
Likewise, if $t\mapsto U(t)x$ is merely weakly continuous at $0$, then for
$x\in H$ the expansion $\|U(t)x-x\|^2=2\|x\|^2-2\operatorname{Re}\langle
U(t)x,x\rangle$ shows that norm convergence at $t=0$ follows from
$\langle U(t)x,x\rangle\to\langle x,x\rangle$; and at an arbitrary $t_0$ one has
$U(t)y-U(t_0)y=U(t_0)\bigl(U(t-t_0)y-y\bigr)$, so weak continuity at $t_0$ for
every $y$ follows from the case $t=0$. Conversely, norm continuity of an orbit
implies its weak continuity, since for each fixed $y\in H$, Cauchy--Schwarz
gives
$$|\langle U(t)x-U(t_0)x,y\rangle|\le \|U(t)x-U(t_0)x\|\,\|y\|\longrightarrow0.$$
Finally, a group with
$U(0)=I$ is automatically invertible with $U(t)^{-1}=U(-t)$, so the unitarity
and group clauses are symmetric in $t$.
