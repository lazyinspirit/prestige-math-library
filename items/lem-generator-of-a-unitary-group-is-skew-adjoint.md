---
id: lem-generator-of-a-unitary-group-is-skew-adjoint
kind: lemma
title: "The generator of a unitary group is closed and skew-adjoint"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-laplace-resolvents-of-a-unitary-group, thm-self-adjointness-range-criterion, thm-self-adjoint-resolvent-estimate, def-infinitesimal-generator-of-a-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, def-strongly-continuous-one-parameter-unitary-group, def-hilbert-space, def-countable-choice, def-dependent-choice, def-densely-defined-closed-and-closable-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Proposition 1.19 and the proof of Stone's theorem in Section 1.1, pp.11-13"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 5.3 with proof, pp.147-148"
---

## Statement

Assume Countable Choice and Dependent Choice. The generator $G$ of a strongly continuous
one-parameter unitary group $U$ is densely defined, closed, and
skew-adjoint: $G^*=-G$. Consequently $T=-iG$ is self-adjoint with $D(T)=D(G)$.

## Facts & Assumptions

[A1] $Q_+(\lambda)$ has range $D(G)$ and satisfies $Q_+(\lambda)y=\int_0^\infty e^{-\lambda t}U(t)y\,dt$ with $\|Q_+(\lambda)\|\le1/\lambda$; also $(\lambda-G)Q_+(\lambda)=I$ and $Q_+(\lambda)(\lambda-G)=I$ on $D(G)$ ([[lem-laplace-resolvents-of-a-unitary-group]]).

[A2] $\langle U(t)x,U(t)y\rangle=\langle x,y\rangle$ and $t\mapsto\langle U(t)x,U(t)y\rangle$ is differentiable at $0$ with derivative $\langle Gx,y\rangle+\langle x,Gy\rangle$ when $x,y\in D(G)$, by the definition of $G$ and bilinearity of the inner product ([[def-infinitesimal-generator-of-a-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]], [[def-hilbert-space]]).

[A3] A densely defined symmetric operator $S$ with $\operatorname{ran}(S\pm i)=H$ is self-adjoint ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[A4] If $R$ is bounded with $R(1-G)x=x$ for $x\in D(G)$ and $(1-G)Ry=y$ for $y\in H$, then $G$ is closed: from $x_n\in D(G)$, $x_n\to x$, $Gx_n\to y$ one gets $Rx_n-x_n=R Gx_n\to Rx-y$ and also $Rx_n-x_n\to Rx-x$, so $x\in\operatorname{ran}R=D(G)$, and then $(1-G)x=(1-G)R(x-y)=x-y$ gives $Gx=y$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-densely-defined-closed-and-closable-operator]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, Dependent Choice, and a strongly continuous unitary group $U$ with generator $G$.

1.1 $D(G)$ is dense: for $y\in H$ and $\lambda>0$, [A1] gives $\lambda Q_+(\lambda)y\in D(G)$ and
$$\lambda Q_+(\lambda)y-y=\int_0^\infty \lambda e^{-\lambda t}(U(t)y-y)\,dt.$$
Given $\varepsilon>0$, strong continuity supplies $\delta>0$ such that $\|U(t)y-y\|<\varepsilon$ for $0\le t\le\delta$; the integral norm is then at most $\varepsilon+2\|y\|e^{-\lambda\delta}$. Letting $\lambda\to\infty$ and then $\varepsilon\downarrow0$ proves $\lambda Q_+(\lambda)y\to y$. Thus $D(G)$ is dense. [A1, given]

1.2 $G$ is skew-symmetric: the function $t\mapsto\langle U(t)x,U(t)y\rangle$ is constant with value $\langle x,y\rangle$ for $x,y\in D(G)$, so its derivative at $0$ vanishes, that is $\langle Gx,y\rangle+\langle x,Gy\rangle=0$; equivalently $\langle Gx,y\rangle=-\langle x,Gy\rangle$. [A2]

1.3 $G$ is closed: with $R:=Q_+(1)$ one has $(1-G)R=I$ and $R(1-G)x=x$ for $x\in D(G)$ by [A1], so the closed-graph argument of [A4] applies. [A1, A4]

2.1 $T:=-iG$ is symmetric by step 1.2, densely defined by step 1.1 and closed by step 1.3, and its ranges are $\operatorname{ran}(T\pm i)=\operatorname{ran}(\mp i(1\mp G))=\operatorname{ran}(1\mp G)=H$ by [A1]; hence $T$ is self-adjoint by [A3]. [A1, A3, step 1.1, step 1.2, step 1.3]

3.1 Since $T=-iG$ is self-adjoint, $T^*=T$, that is $iG^*=-iG$, so $G^*=-G$: the generator is skew-adjoint, and the remaining conclusions are step 2.1. [step 2.1] ∎
