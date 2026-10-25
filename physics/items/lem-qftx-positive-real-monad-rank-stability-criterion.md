---
id: lem-qftx-positive-real-monad-rank-stability-criterion
kind: lemma
title: Raw monad full rank and ADHM regularity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 1
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-the-complex-numbers-are-algebraically-closed
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-the-complex-numbers-are-algebraically-closed: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang–Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§§3–4 and 6, printed pp. 4–6, 10–11: twistor monads, matrix equations, and the nondegeneracy condition; the local rank/stability proof is supplied here."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed ADHM data and locally-free instanton locus; their auxiliary sign conventions are not substituted."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Fix integers $N\ge1$ and $k\ge0$. Let $V=\mathbb C^k$, $W=\mathbb C^N$, and let $B_1,B_2\in\operatorname{End}(V)$, $I:W\to V$, $J:V\to W$ satisfy $[B_1,B_2]+IJ=0$. Define for $z=(z_1,z_2)\in\mathbb C^2$
$$a_z=(B_1-z_1,\ B_2-z_2,\ J)^T:V\to V\oplus V\oplus W,\qquad b_z^\dagger=(-B_2+z_2,\ B_1-z_1,\ I):V\oplus V\oplus W\to V.$$
Then $a_z$ is injective for every $z$ if and only if the datum is costable, and $b_z^\dagger$ is surjective for every $z$ if and only if the datum is stable, where stability and costability have their word-span and invariant-subspace meanings. For the homogeneous linear maps
$$
\alpha=(B_1\lambda_1-B_2^\dagger\lambda_2-\mu_1,\ B_2\lambda_1+B_1^\dagger\lambda_2-\mu_2,\ J\lambda_1+I^\dagger\lambda_2)^T,
$$
$$\beta=(-C,\ A,\ I\lambda_1-J^\dagger\lambda_2),\quad A=B_1\lambda_1-B_2^\dagger\lambda_2-\mu_1,\quad C=B_2\lambda_1+B_1^\dagger\lambda_2-\mu_2,$$
fiberwise injectivity of $\alpha$ and surjectivity of $\beta$ on $\mathbb P^3$ imply regularity. Conversely, if the datum is regular and both raw moment maps vanish, then these homogeneous maps are fiberwise injective and surjective and form a linear bundle monad.

## Statement references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-the-complex-numbers-are-algebraically-closed]]

[Donaldson, §§3–4 and 6](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The finite-dimensional ADHM maps and equations in the Statement.

[F1] Stable means that the vectors $B_{i_1}\cdots B_{i_m}I(w)$ span $V$; costable means that no nonzero subspace invariant under both $B_i$ is contained in $\ker J$. The raw moments use $\mu_{\mathbb C}=[B_1,B_2]+IJ$ and $\mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J$. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] If $E$ is a nonzero finite-dimensional complex vector space and $T:E\to E$, then $\det(T-tI)$ is a nonconstant polynomial; the algebraic-closure theorem gives a root $\lambda$, so $T-\lambda I$ is singular and has a nonzero kernel vector. If $T_1,T_2$ commute, the eigenspace of $T_1$ for any eigenvalue is nonzero and invariant under $T_2$; applying the same argument to the restriction of $T_2$ to that eigenspace gives a common eigenvector. [[thm-the-complex-numbers-are-algebraically-closed]]

## Proof

**Given:** The complex moment equation, the raw stability and costability definitions, and the displayed maps.

1.1 The adjoint of $b_z^\dagger$ is the column $b_z=(-B_2^\dagger+\bar z_2,\ B_1^\dagger-\bar z_1,\ I^\dagger)^T$. A covector $v^\dagger$ annihilates the image of $b_z^\dagger$ exactly when $B_i^\dagger v=\bar z_i v$ and $I^\dagger v=0$, equivalently $v^\dagger B_i=z_i v^\dagger$ and $v^\dagger I=0$. Such a nonzero covector annihilates every word vector $B_{i_1}\cdots B_{i_m}I(w)$, so stability implies surjectivity for every $z$. Conversely, if the word span $Q$ is proper, it is invariant under both $B_i$ and contains $I(W)$. The complex moment equation makes the induced pair on $V/Q$ commute, since $IJ(V)\subseteq I(W)\subseteq Q$. By [F2] its dual has a common eigenvector; pulling that covector back to $V^*$ gives $v^\dagger I=0$ and $v^\dagger B_i=z_i v^\dagger$ for some $z$, so $b_z^\dagger$ is not surjective. [F1, F2, algebra]

1.2 A nonzero vector in $\ker a_z$ is a common eigenvector of $B_1,B_2$ contained in $\ker J$, so costability implies injectivity for every $z$. Conversely, if a nonzero common invariant subspace $Q\subseteq\ker J$ exists, then $IJ(Q)=0$ and the complex moment equation gives $[B_1,B_2]|_Q=0$. The restrictions commute and have a common eigenvector by [F2]; this vector lies in $\ker a_z$ for its eigenvalues $z_1,z_2$. Thus the two affine rank criteria are equivalent to stability and costability. [F1, F2, algebra]

2.1 At the point $[\lambda_1:\lambda_2:\mu_1:\mu_2]=[1:0:z_1:z_2]$, the displayed homogeneous maps reduce to $\alpha=a_z$ and $\beta=b_z^\dagger$. If the homogeneous maps have their monad ranks at every projective point, step 1.1 gives stability and step 1.2 gives costability. [given, step 1.1, step 1.2, algebra]

2.2 Now suppose both moments vanish and the datum is regular. Step 1.1–1.2 give surjectivity of $b_z^\dagger$ and injectivity of $a_z$ for every finite $z$. Direct multiplication gives
$$b_z^\dagger a_z=\mu_{\mathbb C}=0,\qquad b_z^\dagger b_z-a_z^\dagger a_z=\mu_{\mathbb R}=0.$$
Hence $f_z=a_z^\dagger a_z=b_z^\dagger b_z$ is positive definite. On the real line over $z$, $\alpha=a_z\lambda_1+b_z\lambda_2$ and $\beta=b_z^\dagger\lambda_1-a_z^\dagger\lambda_2$; the cross Gram terms vanish by $b_z^\dagger a_z=0$, so $\alpha^\dagger\alpha=(|\lambda_1|^2+|\lambda_2|^2)f_z$ and $\beta\beta^\dagger=(|\lambda_1|^2+|\lambda_2|^2)f_z$. Therefore both maps have full rank whenever $(\lambda_1,\lambda_2)\ne(0,0)$. [F1, step 1.1, step 1.2, algebra]

3.1 Every projective point with $(\lambda_1,\lambda_2)\ne(0,0)$ lies on a unique real twistor line: after conjugating the second incidence equation, the system for $(z_1,\bar z_2)$ has matrix $\begin{pmatrix}\lambda_1&-\lambda_2\\\bar\lambda_2&\bar\lambda_1\end{pmatrix}$ and determinant $|\lambda_1|^2+|\lambda_2|^2>0$. On the line at infinity $(\lambda_1=\lambda_2=0)$ the maps are $\alpha=(-\mu_1,-\mu_2,0)^T$ and $\beta=(\mu_2,-\mu_1,0)$, which are injective and surjective respectively whenever $(\mu_1,\mu_2)\ne(0,0)$. Direct expansion gives
$$
\beta\alpha=\lambda_1^2\mu_{\mathbb C}+\lambda_1\lambda_2\mu_{\mathbb R}-\lambda_2^2\mu_{\mathbb C}^\dagger.
$$
Thus the maps have the required ranks everywhere and compose to zero, so they form a bundle monad. [F1, step 2.2, algebra]

4.1 If $k=0$, then $V=0$, every endomorphism and map to or from $V$ is the unique zero map, and the conditions of stability and costability both hold vacuously. The affine map $a_z:0\to W$ is injective and $b_z^\dagger:W\to0$ is surjective; the homogeneous source and target are zero, so their required ranks hold at every projective point. The moments vanish and the monad is $0\to W\otimes\mathcal O\to0$. This verifies the zero-dimensional boundary case without using an eigenvector argument on the zero space. [F1, step 3.1, algebra] ∎
