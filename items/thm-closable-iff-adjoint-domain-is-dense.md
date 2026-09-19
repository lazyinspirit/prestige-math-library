---
id: thm-closable-iff-adjoint-domain-is-dense
kind: theorem
title: "Closability is equivalent to density of the adjoint domain"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-closure-of-a-closable-operator, lem-unbounded-adjoint-is-well-defined-and-closed, thm-double-orthogonal-complement-is-closure, def-adjoint-of-a-densely-defined-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-orthogonality-and-orthogonal-complement, def-countable-choice, def-hilbert-space, def-unbounded-linear-operator-domain-and-graph]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Proposition 7.20 with proof, pp.31-32"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, pp.66-69"
---

## Statement

Assume Countable Choice. Let $T$ be a densely defined linear operator on $H$.
Then $T$ is closable if and only if $D(T^*)$ is dense in $H$. In that case
$\overline T=T^{**}$ and $T^*=\overline T^{\,*}$; moreover if $T\subseteq T^*$,
then $T$ is closable.

## Facts & Assumptions

[A1] For densely defined $T$ the adjoint is defined by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for $x\in D(T)$, $y\in D(T^*)$, and $\Gamma(T^*)=\{(y,w):\langle Tx,y\rangle=\langle x,w\rangle\text{ for all }x\in D(T)\}$. Putting $W(x,y):=(-y,x)$ defines a bijective isometry of $H\oplus H$ with $W^2=-I$, and $W$ maps orthocomplements to orthocomplements: $W(M^\perp)=(WM)^\perp$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-hilbert-space]], [[def-orthogonality-and-orthogonal-complement]]).

[A2] If $M$ is a linear subspace of the Hilbert space $H\oplus H$, then $M^{\perp\perp}=\overline M$ ([[thm-double-orthogonal-complement-is-closure]]).

[A3] For a densely defined $T$ the operator $T^*$ is closed. If in addition $D(T^*)$ is dense, then $T^{**}$ is defined, is closed, and contains $T$ ([[lem-unbounded-adjoint-is-well-defined-and-closed]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[A4] $T$ is closable when it has a closed extension; if $T$ is closable then $\overline T$ is the least closed extension of $T$ and $T\subseteq\overline T$ ([[thm-closure-of-a-closable-operator]], [[def-densely-defined-closed-and-closable-operator]]).

## Proof

**Proof technique:** direct.

**Given:** A densely defined linear operator $T$ on $H$.

1.1 By [A1] we have $\Gamma(T^*)=W\,\Gamma(T)^\perp$: indeed $(y,w)\in\Gamma(T^*)$ means $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x\in D(T)$, which is exactly $\langle(x,Tx),W(y,w)\rangle=0$ for all $x\in D(T)$, that is $W(y,w)\perp\Gamma(T)$. [A1]

2.1 Assume in addition that $D(T^*)$ is dense, so that $T^{**}$ is defined. Replacing $T$ by $T^*$ in step 1.1 gives $\Gamma(T^{**})=W\,\Gamma(T^*)^\perp$, so by step 1.1 and unitarity of $W$, with $W(M^\perp)=(WM)^\perp$ and $W^2=-I$, one has $\Gamma(T^{**})=W\,\bigl(W\,\Gamma(T)^\perp\bigr)^\perp=W\,W\,\Gamma(T)^{\perp\perp}=-\overline{\Gamma(T)}=\overline{\Gamma(T)}$. [step 1.1, A1, A2]

2.2 Conversely assume $T$ is closable, and let $\overline T$ be its closure, a closed densely defined operator with $\Gamma(T)\subseteq\Gamma(\overline T)$ and $\overline{\Gamma(T)}=\Gamma(\overline T)$ by [A4]. Then $D(\overline T{}^*)$ is dense: if $y\perp D(\overline T{}^*)$ then $(y,0)\perp\Gamma(\overline T{}^*)$, so by step 1.1 applied to $\overline T$ and closedness of $\overline T$ we get $(y,0)\in\Gamma(\overline T{}^*)^\perp=W\,\Gamma(\overline T)^{\perp\perp}=W\,\Gamma(\overline T)$, that is $(y,0)=W(x,\overline Tx)=(-\overline Tx,x)$ for some $x\in D(\overline T)$, forcing $x=0$ and $y=0$. [A1, A2, A4, step 1.1]

3.1 Under the hypothesis of step 2.1 the set $\overline{\Gamma(T)}$ is the graph of the operator $T^{**}$, which is closed by [A3]; hence $T$ has a closed extension and is closable, and its closure is $T^{**}$ by minimality in [A4]. [step 2.1, A3, A4]

3.2 With $T$ closable as in step 2.2, apply step 1.1 to $T$ and to $\overline T$: using $\overline{\Gamma(T)}=\Gamma(\overline T)$ and [A2] one gets $\Gamma(T^*)=W\,\Gamma(T)^\perp=W\,\overline{\Gamma(T)}^\perp=W\,\Gamma(\overline T)^\perp=\Gamma(\overline T{}^*)$, so $T^*=\overline T{}^*$ and $D(T^*)=D(\overline T{}^*)$ is dense by step 2.2. [A1, A2, step 1.1, step 2.2]

4.1 The two implications are steps 3.1 (density of $D(T^*)$ gives closability, with closure $T^{**}$) and 3.2 (closability gives density of $D(T^*)$, and $T^*=\overline T{}^*$). If $T\subseteq T^*$, then $T^*$ is a closed extension of $T$ by [A3], so $T$ is closable. [step 3.1, step 3.2] ∎
