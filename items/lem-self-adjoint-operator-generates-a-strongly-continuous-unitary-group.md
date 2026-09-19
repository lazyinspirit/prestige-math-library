---
id: lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
kind: lemma
title: "A self-adjoint operator generates a strongly continuous unitary group"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-unbounded-borel-functional-calculus, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-unbounded-integral-against-a-pvm, def-infinitesimal-generator-of-a-unitary-group, thm-dominated-convergence, thm-fatou-lemma, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 5.1 with complete proof, pp.145-146"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Theorem 7.37, pp.38-39"
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Proposition 1.10 and its proof, pp.6-7"
---

## Statement

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator on $H$ with
spectral projection valued measure $E$, and set
$U(t):=e^{itT}=\int_{\mathbb R}e^{it\lambda}\,dE(\lambda)$ for $t\in\mathbb R$.
Then $U$ is a strongly continuous one-parameter unitary group,
$U(t)D(T)=D(T)$ and $TU(t)=U(t)T$ on $D(T)$, and the derivative
$\lim_{t\to0}\frac1t(U(t)x-x)$ exists exactly for $x\in D(T)$, where it equals
$iTx$. Thus the generator of $U$ is $G=iT$, with $D(G)=D(T)$.

## Facts & Assumptions

[A1] For bounded Borel $h$ the operator $h(T)$ is bounded with $\|h(T)x\|^2=\int|h|^2dE_x$, $h(T)^*=\overline h(T)$, and $h_1(T)h_2(T)=(h_1h_2)(T)$; the truncation definition gives $g(T)x=\lim_m g_m(T)x$ for $x\in D_g$ ([[thm-unbounded-borel-functional-calculus]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[def-unbounded-integral-against-a-pvm]]).

[A2] $D(T)=\{x:\int\lambda^2dE_x<\infty\}$, and for $x\in D(T)$ one has $\|(T-a)x\|^2=\int(\lambda-a)^2dE_x$ for real $a$; also $U(t)D(T)=D(T)$ and $TU(t)=U(t)T$ on $D(T)$, since $U(t)=e^{it\lambda}(T)$ commutes with $E(B)$ and products of functions multiply ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]]).

[A3] Scalar dominated convergence and Fatou's lemma apply to the finite measures $E_x$ ([[thm-dominated-convergence]], [[thm-fatou-lemma]]).

[A4] The generator is defined by the difference quotients of the statement, and $D(G)$ is a linear subspace ([[def-infinitesimal-generator-of-a-unitary-group]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint $T$ with spectral PVM $E$, and $U(t)=e^{itT}$.

1.1 Unit and group law: $U(t)$ is bounded, $U(t)U(s)=(e^{it\lambda}e^{is\lambda})(T)=U(t+s)$ and $U(0)=I$ by [A1], and $U(t)$ is unitary because $\|U(t)x\|^2=\int|e^{it\lambda}|^2dE_x=\int dE_x=\|x\|^2$ and $U(t)^*=U(-t)=U(t)^{-1}$. [A1]

1.2 Strong continuity: for $x\in H$ and $t\to t_0$, $\|U(t)x-U(t_0)x\|^2=\int|e^{it\lambda}-e^{it_0\lambda}|^2dE_x\to0$ by [A3], the integrand being bounded by $4$ and tending to $0$ pointwise. [A1, A3]

1.3 Derivative at $0$ for $x\in D(T)$: $\|\frac1t(U(t)x-x)-iTx\|^2=\int|\frac1t(e^{it\lambda}-1)-i\lambda|^2dE_x\to0$ by [A3], since $|\frac1t(e^{it\lambda}-1)-i\lambda|\le2|\lambda|$ and $|\lambda|^2$ is $E_x$-integrable exactly because $x\in D(T)$ by [A2]. [A2, A3]

2.1 Converse: if $z=\lim_n\frac1{t_n}(U(t_n)x-x)$ for some sequence $t_n\to0$, then by [A2] and Fatou's lemma $\int\lambda^2dE_x\le\liminf_n\int|\frac1{t_n}(e^{it_n\lambda}-1)|^2dE_x=\liminf_n\|\frac1{t_n}(U(t_n)x-x)\|^2=\|z\|^2<\infty$, so $x\in D(T)$; step 1.3 then identifies the full limit as $iTx$. [A2, A3, step 1.3]

3.1 By steps 1.1, 1.2, 1.3 and 2.1 the family $U$ is a strongly continuous one-parameter unitary group whose generator satisfies $D(G)=D(T)$ and $G=iT$; the invariance and commutativity claims for $U(t)$ on $D(T)$ are [A2]. [A2, A4, step 1.1, step 1.2, step 2.1] ∎
