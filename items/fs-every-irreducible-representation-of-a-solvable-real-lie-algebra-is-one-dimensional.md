---
id: fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional
kind: false-statement
title: Every irreducible real representation of a solvable Lie algebra is one-dimensional
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional, def-derived-series-and-solvable-lie-algebra, def-representation-of-a-lie-algebra, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
landmark: false
proof_strategy: direct
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
      locator: "Theorem 1.25 and surrounding field convention, printed pp. 26–28"
---

## Statement

Every finite-dimensional irreducible real representation of a
finite-dimensional solvable real Lie algebra is one-dimensional.

## Facts & Assumptions

**Given:** The one-dimensional abelian real Lie algebra
$\mathfrak a=\mathbb Rt$ and $V=\mathbb R^2$.

[L1] The one-dimensional conclusion is proved over $\mathbb C$, under the
complex form of Lie's theorem
([[cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional]]).

[L2] Solvability is termination of the derived series
([[def-derived-series-and-solvable-lie-algebra]]).

[L3] A Lie-algebra representation is a bracket-preserving linear map into the
endomorphism algebra ([[def-representation-of-a-lie-algebra]]).

[L4] A nonzero Lie-algebra representation is irreducible when it has no stable
subspace other than zero and the whole module
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Refutation

**Proof technique:** direct.

1.1 Define $\rho(t)=R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Since $\mathfrak a$ is abelian and $[R,R]=0$, this is a representation by [L3]. Also $\mathfrak a^{(1)}=0$, so $\mathfrak a$ is solvable by [L2]. [given, L2, L3, algebra]

2.1 Any nonzero proper subspace of $V$ is a real line. If such a line were $R$-stable, a nonzero vector on it would be a real eigenvector of $R$. But the characteristic polynomial of $R$ is $T^2+1$, which has no real root. Thus no nonzero proper stable subspace exists, so $V$ is irreducible by [L4]. [L4, step 1.1, algebra]

3.1 The representation in steps 1.1–2.1 is irreducible and two-dimensional, contradicting the proposed one-dimensional conclusion. It does not contradict [L1], whose scalar field is $\mathbb C$; after complexification, $R$ has the two eigenlines with eigenvalues $i$ and $-i$. The witness and all calculations are explicit and choice-free. [L1, step 1.1, step 2.1, algebra] ∎
