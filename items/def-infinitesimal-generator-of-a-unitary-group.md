---
id: def-infinitesimal-generator-of-a-unitary-group
kind: definition
title: "Infinitesimal generator of a unitary group"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-strongly-continuous-one-parameter-unitary-group, def-hilbert-space, def-linear-subspace, def-metric-convergence, def-linear-map]
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
      locator: "Section 1.1, generator definition before Proposition 1.10, pp.5-6"
---

## Definition

Let $U$ be a strongly continuous one-parameter unitary group on $H$
([[def-strongly-continuous-one-parameter-unitary-group]]). Its
**infinitesimal generator** is the linear operator $G$ with domain
$$D(G):=\Bigl\{x\in H:\ \lim_{t\to0}\frac1t\bigl(U(t)x-x\bigr)\ \text{exists in }H\Bigr\},\qquad Gx:=\lim_{t\to0}\frac1t\bigl(U(t)x-x\bigr),$$
the limit being taken in the norm of $H$ ([[def-metric-convergence]]).

$D(G)$ is a linear subspace and $G$ is linear: if $x,y\in D(G)$ and $a,b$ are
scalars, then $\frac1t(U(t)(ax+by)-(ax+by))=a\frac1t(U(t)x-x)+b\frac1t(U(t)y-y)$
converges with limit $aGx+bGy$, because the operations of $H$ are continuous
and the limit is taken over the same net of $t$'s; the restriction to $D(G)$
is therefore well defined and linear ([[def-linear-subspace]],
[[def-linear-map]]).

**Sign convention.** This page writes $T=-iG$ for the generator, so that
Stone's theorem reads $U(t)=e^{itT}$ with $T$ self-adjoint; equivalently
$G=iT$. In the convention of Teschl's book one has $U(t)=e^{-itA}$ with $A$
self-adjoint, and $A=-G=iT$; every formula below is written in the
$U(t)=e^{itT}$ convention and the translation is recorded where a source is
cited.
