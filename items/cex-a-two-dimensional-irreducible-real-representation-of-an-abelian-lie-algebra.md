---
id: cex-a-two-dimensional-irreducible-real-representation-of-an-abelian-lie-algebra
kind: counterexample
title: A two-dimensional irreducible real representation of an abelian Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-representation-of-a-lie-algebra, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
landmark: false
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, field hypothesis in Lie's theorem"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "representation convention and Theorem 1.25, printed pp. 41–42"
---

## Counterexample

Let $\mathfrak g=\mathbb Rt$ be the one-dimensional abelian real Lie algebra.
On $V=\mathbb R^2$, let $t$ act by

$$J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$

This is an irreducible two-dimensional real representation of the abelian Lie
algebra $\mathfrak g$.

## Facts & Assumptions

**Given:** The displayed real vector spaces and the linear map
$\rho(at)=aJ$.

[L1] A representation is a linear map satisfying
$\rho([x,y])=[\rho(x),\rho(y)]$
([[def-representation-of-a-lie-algebra]]).

[L2] A nonzero representation is irreducible when its only stable subspaces
are $0$ and the whole space
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Refutation

**Proof technique:** counterexample.

1.1 The map $\rho$ is real-linear. Since $\mathfrak g$ is abelian, $[at,bt]=0$, and since scalar multiples of $J$ commute, $[aJ,bJ]=0$. Hence $\rho([at,bt])=[\rho(at),\rho(bt)]$ for all $a,b\in\mathbb R$, so [L1] makes $V$ a representation. [L1, given, algebra]

1.2 Suppose $W$ were a nonzero proper $\mathfrak g$-stable subspace of $V$. As $V$ has dimension two, $W=\mathbb Rv$ for some $v\neq0$. Stability gives $Jv=\lambda v$ for a real scalar $\lambda$. But $J^2=-I$, so $-v=J^2v=\lambda^2v$, forcing $\lambda^2=-1$, impossible over $\mathbb R$. Thus no such $W$ exists, and [L2] shows that $V$ is irreducible. [L2, given, algebra]

2.1 The acting Lie algebra is abelian and the verified irreducible module has real dimension two, so it is the required counterexample to any one-dimensional conclusion over $\mathbb R$. Over $\mathbb C$, the same matrix acquires eigenlines for the eigenvalues $i$ and $-i$, pinpointing the missing field hypothesis. The finite calculation uses no choice principle. [step 1.1, step 1.2, algebra] ∎
