---
id: thm-finite-dimensional-compact-group-representations-are-completely-reducible
kind: theorem
title: "Complete reducibility of finite-dimensional compact-group representations"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, def-subrepresentation-and-irreducible-representation, def-completely-reducible-representation, def-finite-dimensional-representation-of-a-group-over-a-field, def-linear-basis, def-dimension, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-real-and-complex-inner-product-space, def-hilbert-space, def-banach-space, def-linear-subspace, def-topological-group, def-compact-space, def-hausdorff-space, lem-averaging-makes-a-finite-dimensional-representation-unitary, lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements, thm-finite-dimensional-orthogonal-decomposition, cor-finite-dimensional-subspaces-are-closed, thm-dimension-of-a-linear-subspace, cor-dimension-of-a-direct-sum, cor-finite-dimensional-normed-spaces-are-banach, thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent, def-equivalent-norms, def-operator-norm, def-bounded-linear-operator, thm-strong-induction]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: induction
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: https://math.berkeley.edu/~serganov/math252/Bookrep.pdf
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-topological-group]], [[def-compact-space]],
[[def-hausdorff-space]]), let $V$ be a finite-dimensional complex vector space,
and let $\rho:K\to\operatorname{GL}(V)$ be a continuous finite-dimensional
complex representation
([[def-finite-dimensional-representation-of-a-group-over-a-field]],
[[def-dimension]]). Then $\rho$ is completely reducible
([[def-completely-reducible-representation]]): there are finitely many
irreducible subrepresentations $V_1,\dots,V_r\subseteq V$
([[def-subrepresentation-and-irreducible-representation]]) with
$$V=V_1\oplus\cdots\oplus V_r,$$
the empty direct sum being allowed, so the zero representation is completely
reducible.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff group $K$, a finite-dimensional complex
vector space $V$, and a continuous finite-dimensional complex representation
$\rho:K\to\operatorname{GL}(V)$.

[F1] Averaging unitarizes: with a normalized Haar probability measure $\mu$
on $K$, for every Hermitian inner product $h_0$ on $V$
linear in the first variable, the averaged form
$h(v,w)=\int_Kh_0(\rho(k)v,\rho(k)w)\,d\mu(k)$ is a positive-definite
$K$-invariant Hermitian form, and every $\rho(g)$ is a unitary operator for $h$
([[lem-averaging-makes-a-finite-dimensional-representation-unitary]],
[[def-real-and-complex-inner-product-space]]).

[F2] The orthogonal complement of a closed invariant subspace of a strongly
continuous unitary representation on a complex Hilbert space is again a closed
invariant subspace ([[lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements]],
[[def-hilbert-space]]).

[F3] If $W$ is a subspace of a finite-dimensional real or complex inner product
space $V$, then $V=W\oplus W^\perp$
([[thm-finite-dimensional-orthogonal-decomposition]],
[[def-linear-subspace]]).

[F4] A finite-dimensional subspace of a normed space is closed, in ZF
([[cor-finite-dimensional-subspaces-are-closed]]).

[F5] A finite-dimensional vector space admits an ordered basis of finite
length; for a subspace $U$ of a finite-dimensional $V$ one has
$\dim U\le\dim V$, with $\dim U=\dim V$ exactly when $U=V$, and
$\dim U=0$ exactly when $U=\{0\}$
([[thm-dimension-of-a-linear-subspace]], [[def-dimension]],
[[def-linear-basis]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F6] Strong induction: if a property of naturals holds at $n$ whenever it holds
at every $m<n$, then it holds at every $n$
([[thm-strong-induction]]).

[F7] Definitions: a subrepresentation of $\rho$ is a $\rho$-invariant linear
subspace; $\rho$ is irreducible when $V\ne0$ and its only subrepresentations
are $0$ and $V$; $\rho$ is completely reducible when
$V=V_1\oplus\cdots\oplus V_r$ with $V_i$ irreducible subrepresentations, the
empty sum allowed ([[def-subrepresentation-and-irreducible-representation]],
[[def-completely-reducible-representation]],
[[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F8] A finite-dimensional normed space is a Banach space
([[cor-finite-dimensional-normed-spaces-are-banach]], [[def-banach-space]]),
and a complex inner-product space whose induced-length metric is complete is a
complex Hilbert space ([[def-hilbert-space]]).

[F9] Any two norms on a finite-dimensional complex vector space are equivalent
([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]],
[[def-equivalent-norms]]); the operator norm satisfies
$\|Bv\|\le\|B\|\,\|v\|$ for bounded operators, which are continuous
([[def-operator-norm]], [[def-bounded-linear-operator]]).

[F10] For an internal direct sum $V=U_1\oplus\cdots\oplus U_s$ of
finite-dimensional subspaces, $\dim V=\sum_i\dim U_i$
([[cor-dimension-of-a-direct-sum]]).

[F11] Under AC every compact Hausdorff group has a normalized Haar probability
measure. ([[cor-normalized-haar-probability-on-a-compact-group]])

## Proof

**Proof technique:** induction.

1.1 Base case. If $\dim V=0$, then $V=\{0\}$ by [F5], and $V$ is the empty direct sum of irreducible subrepresentations, which [F7] allows; hence the zero representation is completely reducible. [F5, F7, base]

1.2 Induction step setup. Fix a natural number $n\ge1$ and assume the induction hypothesis: every continuous finite-dimensional complex representation of $K$ on a complex vector space of dimension $m<n$ is completely reducible. Let $\rho:K\to\operatorname{GL}(V)$ be a continuous finite-dimensional complex representation with $\dim V=n$; then $V\ne\{0\}$ by [F5]. [F5, F7, ih]

1.3 By [F11], fix a normalized Haar probability measure $\mu$ on $K$. By [F5] fix an ordered basis $(b_1,\dots,b_n)$ of $V$ and let $h_0$ be the Hermitian inner product in these coordinates, $h_0(\sum_ia_ib_i,\sum_ic_ib_i):=\sum_ia_i\overline{c_i}$. By [F1] the averaged form $h$ is a positive-definite $K$-invariant Hermitian form on $V$, so $h$ is an inner product on $V$ and every $\rho(g)$ is a unitary operator for $h$. Since $V$ has the ordered basis $(b_1,\dots,b_n)$ of finite length, [F8] makes $(V,\|\cdot\|_h)$ a Banach space for the norm induced by $h$, so $(V,h)$ is a complex Hilbert space. [F1, F5, F8, F11]

2.1 The representation $\rho$ is strongly continuous for the norm $\|\cdot\|_h$: for fixed $v\in V$ and $g_0\in K$, the operator norm inequality of [F9] gives $\|\rho(g)v-\rho(g_0)v\|_h\le\|\rho(g)-\rho(g_0)\|_h\|v\|_h$, and $g\mapsto\rho(g)$ is continuous at $g_0$ for the operator norm because it is continuous for the topology of some norm on the finite-dimensional complex space $\operatorname{End}(V)$ and all such norms are equivalent by [F9]. Hence $g\mapsto\rho(g)v$ is continuous, and $\rho:K\to U(V,h)$ is a strongly continuous unitary representation of $K$ on the complex Hilbert space $(V,h)$. [F1, F9, step 1.3]

2.2 Irreducible case. If $\rho$ is irreducible, then by [F7] its only subrepresentations are $0$ and $V$; since $V\ne\{0\}$ by step 1.2, the space $V$ is itself an irreducible subrepresentation and $V=V$ is a direct sum with the single summand $V$, so $\rho$ is completely reducible. [F7, step 1.2]

2.3 Non-irreducible case. If $\rho$ is not irreducible, then, since $V\ne\{0\}$, [F7] provides a subrepresentation $M\subseteq V$ with $M\ne\{0\}$ and $M\ne V$. [F7, step 1.2]

3.1 In the situation of step 2.3, $M$ is a finite-dimensional subspace of $V$, hence closed in $(V,\|\cdot\|_h)$ by [F4], and it is invariant by definition; applying the complement lemma [F2] to the strongly continuous unitary representation $\rho$ on the Hilbert space $(V,h)$ from step 2.1, the orthogonal complement $M^\perp$ is a closed invariant subspace. By the orthogonal decomposition [F3], $V=M\oplus M^\perp$; by the dimension formula [F10] and $\dim M\ge1$, one has $\dim M<n$ by [F5], and $\dim M^\perp=\dim V-\dim M<n$. [F2, F3, F4, F5, F10, step 2.1, step 2.3]

4.1 Apply the induction hypothesis of step 1.2 to the restrictions $\rho_M(g):=\rho(g)|_M$ and $\rho_{M^\perp}(g):=\rho(g)|_{M^\perp}$. These are continuous finite-dimensional complex representations: invariance makes $\rho(g)|_M$ a linear self-map of $M$ and injectivity of $\rho(g)$ makes it invertible, the homomorphism property is inherited, and continuity follows from $\|\rho(g)|_M-\rho(g_0)|_M\|\le\|\rho(g)-\rho(g_0)\|$, with the same argument for $M^\perp$. Since $\dim M<n$ and $\dim M^\perp<n$ by step 3.1, the induction hypothesis gives irreducible subrepresentations with $M=M_1\oplus\cdots\oplus M_r$ and $M^\perp=M_{r+1}\oplus\cdots\oplus M_s$; these $M_i$ are also irreducible subrepresentations of $\rho$, and concatenating with $V=M\oplus M^\perp$ gives $V=M_1\oplus\cdots\oplus M_s$, so $\rho$ is completely reducible in this case as well. [F7, step 1.2, step 3.1]

5.1 Discharge. Every continuous finite-dimensional complex representation of $K$ of dimension $n\ge1$ is completely reducible, by the two cases of steps 2.2 and 4.1 together with the induction hypothesis of step 1.2, and the case $n=0$ is step 1.1; strong induction [F6] therefore proves that every continuous finite-dimensional complex representation of $K$ is completely reducible. [F6, step 1.1, step 2.2, step 4.1, discharge-induction] ∎
