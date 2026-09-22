---
id: cor-unitary-groups-converge-under-strong-resolvent-convergence
kind: corollary
title: "Unitary groups converge under strong resolvent convergence"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-under-resolvent-convergence, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-infinitesimal-generator-of-a-unitary-group, def-strongly-continuous-one-parameter-unitary-group, thm-self-adjoint-resolvent-estimate, def-axiom-of-choice, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-unbounded-borel-functional-calculus, thm-spectral-theorem-for-unbounded-self-adjoint-operators, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Corollary 6.33 and (6.50)-(6.51), p.180"
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Section 1.1 and Chapter 4, resolvent convergence orientation"
---

## Statement

Assume the Axiom of Choice. Let $A_n,A$ be self-adjoint operators on a complex Hilbert space $H$ with
$A_n\to A$ in the strong resolvent sense. Then
$$e^{itA_n}x\longrightarrow e^{itA}x\qquad\text{for every }t\in\mathbb R\text{ and every }x\in H.$$
If, in addition, $A$ and all $A_n$ are bounded below by a common real constant
$\gamma$ (meaning $\langle Sx,x\rangle\ge\gamma\|x\|^2$ for $x\in D(S)$ and $S=A,A_n$), then $e^{-tA_n}\to e^{-tA}$ strongly for every $t\ge0$.

## Facts & Assumptions

[A1] For a self-adjoint $S$ with spectral PVM, $e^{itS}$ is the Borel calculus of $\lambda\mapsto e^{it\lambda}$ and is a strongly continuous unitary group, with infinitesimal generator $iS$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-infinitesimal-generator-of-a-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]]).

[A2] Under AC, strong resolvent convergence gives $g(A_n)x\to g(A)x$ for every bounded continuous $g:\mathbb R\to\mathbb C$ and every $x$ ([[thm-continuous-functional-calculus-under-resolvent-convergence]], [[def-axiom-of-choice]]).

[A3] On nonzero $H$, each self-adjoint $S$ has a spectral PVM $E^S$ with $D(S)=\{x:\int\lambda^2dE^S_x<\infty\}$ and $S=\int\lambda\,dE^S$. For domain vectors, $\langle Sx,x\rangle=\int\lambda\,dE^S_x$, using the quadratic pairing identity and the reality of $\lambda$ in the first-variable-linear convention. Functions agreeing off a measurable $E^S$-null set have the same integral operator and domain; the zero-space calculus is defined directly ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[def-unbounded-integral-against-a-pvm]]).

[A4] PVM projections satisfy $E(B)E(C)=E(B\cap C)$ and $E(\mathbb R)=I$; the scalar measures are positive of mass $\|x\|^2$, and scalar monotone convergence holds ([[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

**Given:** AC and the self-adjoint operators with strong resolvent convergence in the statement.

1.1 If $H=\{0\}$, all operators in either conclusion are its unique operator, so both conclusions hold. Otherwise the spectral PVMs exist by [A3]. Fix any $t\in\mathbb R$, including negative times. The function $\lambda\mapsto e^{it\lambda}$ is continuous and has absolute value one everywhere. Thus [A2] gives $e^{itA_n}x\to e^{itA}x$ for every $x$; [A1] identifies these as the stated unitary groups. At $t=0$ each operator is $I$. [A1, A2, A3, given]

1.2 For the second claim suppose $S$ is one of $A,A_n$ and satisfies the common lower bound. Let $B_m=[-m,\gamma-1/m]$ for integers $m\ge1$, with an empty interval interpreted as empty. If $E^S(B_m)\ne0$, choose $x=E^S(B_m)y\ne0$ for some $y$. The projection identities give $E^S(\mathbb R\setminus B_m)x=0$, so the scalar measure of $x$ is supported on $B_m$. As $B_m$ is bounded, [A3] gives $x\in D(S)$ and $\langle Sx,x\rangle=\int\lambda\,dE^S_x\le(\gamma-1/m)\|x\|^2<\gamma\|x\|^2$, a contradiction. Hence each $E^S(B_m)=0$. The sets $B_m$ increase to $(-\infty,\gamma)$; monotone convergence gives $E^S_x(( -\infty,\gamma))=0$ for every $x$. Since $\|E^S(B)x\|^2=\langle E^S(B)x,x\rangle$, the projection $E^S(( -\infty,\gamma))$ itself is zero. [A3, A4, given]

2.1 Now fix $t\ge0$ and define $g_t(\lambda)=e^{-t\max(\lambda,\gamma)}$. It is continuous and bounded by $e^{-t\gamma}$, and it agrees with $e^{-t\lambda}$ on $[\gamma,\infty)$. Step 1.2 and null-set invariance in [A3] give equality of the integral operators $g_t(S)=e^{-tS}$, including domains, for $S=A,A_n$. In particular each exponential here has full domain and is bounded: its defining squared integral is at most $e^{-2t\gamma}\|x\|^2$, and its quadratic norm identity gives the same operator bound. Applying [A2] to $g_t$ proves $e^{-tA_n}x\to e^{-tA}x$ for every $x$. [A2, A3, A4, step 1.2]

3.1 The first conclusion holds for every real time by step 1.1, and the second for every nonnegative time by step 2.1. At time zero both reduce to the identity. The lower bound is assumed for the limit and every approximant; no preservation-of-lower-bound theorem is assumed. AC supplies the spectral and calculus hypotheses, including their Countable Choice assumptions. [A1, A2, A3, step 1.1, step 2.1] ∎
