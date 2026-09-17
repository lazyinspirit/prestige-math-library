---
id: thm-stone-one-parameter-unitary-groups
kind: theorem
title: "Stone's theorem: unitary groups and self-adjoint generators"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-generator-of-a-unitary-group-is-skew-adjoint, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-infinitesimal-generator-of-a-unitary-group, def-strongly-continuous-one-parameter-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-axiom-of-choice, def-countable-choice, def-hilbert-space, lem-laplace-resolvents-of-a-unitary-group, thm-unbounded-borel-functional-calculus]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 5.3 with complete proof, pp.147-148"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Theorem 7.37, pp.38-39"
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Section 1.1, generator theory, pp.5-13"
---

## Statement

Assume the Axiom of Choice. The map $T\mapsto U(t)=e^{itT}$, computed by the
Borel functional calculus of $T$
([[thm-unbounded-borel-functional-calculus]]), is a bijection from the set of
self-adjoint operators on $H$ onto the set of strongly continuous
one-parameter unitary groups on $H$. Its inverse assigns to $U$ its generator
$G$ and the self-adjoint operator $T=-iG$; here $D(T)=D(G)$ is exactly the set
of vectors at which $t\mapsto U(t)x$ is differentiable at $0$, and
$\frac1t(U(t)x-x)\to iTx$ for $x\in D(T)$.

## Facts & Assumptions

[A1] For every self-adjoint $T$, $U(t)=e^{itT}$ is a strongly continuous one-parameter unitary group with generator $G=iT$ and $D(G)=D(T)$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

[A2] The generator $G$ of a strongly continuous unitary group is densely defined and skew-adjoint, so $S:=-iG$ is self-adjoint with $D(S)=D(G)$ ([[lem-generator-of-a-unitary-group-is-skew-adjoint]], [[def-infinitesimal-generator-of-a-unitary-group]]).

[A3] If $x\in D(G)$ then $U(t)x\in D(G)$, $GU(t)x=U(t)Gx$, and $t\mapsto U(t)x$ is differentiable with derivative $U(t)Gx$ ([[lem-laplace-resolvents-of-a-unitary-group]], [[def-infinitesimal-generator-of-a-unitary-group]]).

[A4] A symmetric operator $H$ satisfies $\operatorname{Re}\langle Hw,w\rangle=0$ for $w\in D(H)$, because $\langle Hw,w\rangle=-\langle w,Hw\rangle=-\overline{\langle Hw,w\rangle}$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint $T$, and a strongly continuous unitary group $U$ with generator $G$.

1.1 Applying [A1] to $T$ produces a strongly continuous unitary group with generator $iT$, so the map $T\mapsto e^{itT}$ is well defined, and its derivative at $0$ exists exactly on $D(T)$ where it equals $iTx$. [A1]

1.2 Applying [A2] to $U$ produces the self-adjoint operator $S=-iG$ with $D(S)=D(G)$; applying [A1] to $S$ gives the strongly continuous unitary group $V(t)=e^{itS}$, whose generator is $iS=G$. [A1, A2]

2.1 Uniqueness for a fixed generator: if $U,V$ are strongly continuous unitary groups with the same generator $G$ and $x\in D(G)$, then $w(t):=U(t)x-V(t)x$ is differentiable with $w'(t)=Gw(t)$ by [A3], so $\frac{d}{dt}\|w(t)\|^2=2\operatorname{Re}\langle w(t),Gw(t)\rangle=0$ by [A4], and $w(0)=0$ gives $w\equiv0$ on $D(G)$; since $D(G)$ is dense by [A2] and $U(t),V(t)$ are isometries, $U(t)=V(t)$ for every $t$. [A2, A3, A4, step 1.2]

3.1 Hence $U=V$ in step 1.2, that is $U(t)=e^{itT}$ for the self-adjoint $T=S=-iG$; combined with step 1.1 this makes $T\mapsto e^{itT}$ a bijection with the stated inverse. [step 1.1, step 1.2, step 2.1]

4.1 The derivative characterisation is the one from [A1] applied to the self-adjoint $T=-iG$: the limit exists exactly on $D(T)=D(G)$ and equals $iTx$. [A1, step 3.1] ∎
