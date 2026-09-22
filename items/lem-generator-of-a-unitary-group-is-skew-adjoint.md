---
id: lem-generator-of-a-unitary-group-is-skew-adjoint
kind: lemma
title: "The generator of a unitary group is closed and skew-adjoint"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-laplace-resolvents-of-a-unitary-group, thm-self-adjointness-range-criterion, thm-self-adjoint-resolvent-estimate, def-infinitesimal-generator-of-a-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, def-strongly-continuous-one-parameter-unitary-group, def-hilbert-space, def-countable-choice, def-dependent-choice, def-densely-defined-closed-and-closable-operator, def-adjoint-of-a-densely-defined-unbounded-operator, thm-cauchy-schwarz-in-an-inner-product-space, lem-bochner-integral-norm-inequality, def-bochner-integrable-function, thm-newton-leibniz-with-interior-derivative, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Proposition 1.19, printed pp.11-12 (closedness and density of generators)"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 5.3 with proof, pp.147-148"
---

## Statement

Assume Countable Choice and Dependent Choice. The generator $G$ of a strongly continuous
one-parameter unitary group $U$ is densely defined, closed, and
skew-adjoint: $G^*=-G$. Consequently $T=-iG$ is self-adjoint with $D(T)=D(G)$.

## Facts & Assumptions

[A1] Both $Q_\pm(\lambda)$ have range $D(G)$ and satisfy $Q_\pm(\lambda)y=\int_0^\infty e^{-\lambda t}U(\pm t)y\,dt$ with $\|Q_\pm(\lambda)\|\le1/\lambda$; also $(\lambda\mp G)Q_\pm(\lambda)=I$ and $Q_\pm(\lambda)(\lambda\mp G)=I$ on $D(G)$ ([[lem-laplace-resolvents-of-a-unitary-group]]).

[A2] $\langle U(t)x,U(t)y\rangle=\langle x,y\rangle$ and $t\mapsto\langle U(t)x,U(t)y\rangle$ is differentiable at $0$ with derivative $\langle Gx,y\rangle+\langle x,Gy\rangle$ when $x,y\in D(G)$, by the definition of $G$ and sesquilinearity and continuity of the inner product ([[def-infinitesimal-generator-of-a-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]], [[def-hilbert-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] A densely defined symmetric operator $S$ with $\operatorname{ran}(S\pm i)=H$ is self-adjoint ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[A4] A bounded everywhere-defined inverse to $1-G$ puts $1$ in the resolvent of $G$ and forces its graph closed, with convention $R_G(1)=(I-G)^{-1}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-densely-defined-closed-and-closable-operator]]). The exact limit argument is also given below.

[A5] The Bochner integral is linear by passage from simple integral approximations, and its norm is bounded by the integral of the norm ([[def-bochner-integrable-function]], [[lem-bochner-integral-norm-inequality]]). Compact Newton--Leibniz, the Countable Choice Riemann/Lebesgue bridge and monotone convergence compute $\int_a^\infty\lambda e^{-\lambda t}dt=e^{-\lambda a}$ for $a\ge0$, $\lambda>0$, by the primitive $-e^{-\lambda t}$ on $[a,N]$ followed by $N\to\infty$ ([[thm-newton-leibniz-with-interior-derivative]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-monotone-convergence-for-the-integral]]).

[A6] The adjoint domain consists of vectors making $x\mapsto\langle Sx,y\rangle$ bounded on $D(S)$, with $\langle Sx,y\rangle=\langle x,S^*y\rangle$ in the first-variable-linear convention ([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, Dependent Choice, and a strongly continuous unitary group $U$ with generator $G$.

1.1 $D(G)$ is dense: for $y\in H$ and $\lambda>0$, [A1] gives $\lambda Q_+(\lambda)y\in D(G)$ and $$\lambda Q_+(\lambda)y-y=\int_0^\infty \lambda e^{-\lambda t}(U(t)y-y)\,dt.$$ Given $\varepsilon>0$, strong continuity supplies $\delta>0$ such that $\|U(t)y-y\|<\varepsilon$ for $0\le t\le\delta$; the integral norm is then at most $\varepsilon+2\|y\|e^{-\lambda\delta}$. Letting $\lambda\to\infty$ and then $\varepsilon\downarrow0$ proves $\lambda Q_+(\lambda)y\to y$. Taking positive integer $\lambda\to\infty$ supplies an approximating sequence in $D(G)$ for every $y$. Thus $D(G)$ is dense. [A1, A5, given]


1.2 $G$ is skew-symmetric: the function $t\mapsto\langle U(t)x,U(t)y\rangle$ is constant with value $\langle x,y\rangle$ for $x,y\in D(G)$, so its derivative at $0$ vanishes, that is $\langle Gx,y\rangle+\langle x,Gy\rangle=0$; equivalently $\langle Gx,y\rangle=-\langle x,Gy\rangle$. [A2]

1.3 $G$ is closed: with $R=Q_+(1)$, [A1] and [A4] already imply closedness. Explicitly, if $x_n\in D(G)$, $x_n\to x$ and $Gx_n\to y$, then $x_n=R(x_n-Gx_n)\to R(x-y)$ since $R$ is bounded. Uniqueness of limits gives $x=R(x-y)\in D(G)$ and $(I-G)x=(I-G)R(x-y)=x-y$, hence $Gx=y$. The sequential graph criterion is valid in the norm metric under the assumed Countable Choice. [A1, A4]


2.1 On $D(T)=D(G)$ set $T=-iG$. For $x,y$ in this domain, step 1.2 gives $\langle Tx,y\rangle=-i\langle Gx,y\rangle=i\langle x,Gy\rangle=\langle x,Ty\rangle$, so $T$ is symmetric. It is densely defined by step 1.1. It is closed: convergence of $x_n$ and $Tx_n$ implies convergence of $Gx_n=iTx_n$, so step 1.3 applies. The correct signed formulas are $T+iI=i(I-G)$ and $T-iI=-i(I+G)$. Both ranges equal $H$ by the two signs of [A1] at $\lambda=1$; multiplication by a nonzero scalar preserves surjectivity. Hence [A3] makes $T$ self-adjoint. [A1, A3, step 1.1, step 1.2, step 1.3]

3.1 The adjoint domain of $T=-iG$ equals that of $G$: multiplication of the scalar functional in [A6] by $-i$ preserves boundedness in both directions. For $y$ in this domain, $\langle Tx,y\rangle=-i\langle Gx,y\rangle=-i\langle x,G^*y\rangle=\langle x,iG^*y\rangle$; uniqueness of the representing vector gives $T^*=iG^*$. Step 2.1 gives $T^*=T=-iG$ including domains, hence $D(G^*)=D(G)$ and $G^*=-G$. [A6, step 2.1]

4.1 The conclusions are density, closedness and skew-adjointness from steps 1.1, 1.3 and 3.1, and self-adjointness of $-iG$ from step 2.1. The zero space and constant identity group satisfy the same identities directly. The declared Countable Choice and Dependent Choice match the Laplace supplier; Countable Choice also licenses the range/adjoint and integration interfaces. Only strictly positive Laplace parameters are used. [A1, A3, A5, A6, step 1.1, step 1.3, step 2.1, step 3.1] ∎
