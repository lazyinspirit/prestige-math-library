---
id: def-summability-matrix
kind: definition
title: "A summability (Toeplitz) matrix, the transformed sequence $y_n = \\sum_k c_{n,k} x_k$, and regularity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-limit, def-finite-sum, lem-finite-sum-laws, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field]
forward_refs: [cex-irregular-summability-matrix, ex-cesaro-means-of-alternating]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 3"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Definition

A **summability matrix**, also called a **Toeplitz matrix**, is a function

$$c : \mathbb{N} \times \mathbb{N} \to \mathbb{R}, \qquad (n,k) \mapsto c_{n,k},$$

with **finite row support**: for every $n \in \mathbb{N}$ there is $R \in
\mathbb{N}$ such that $c_{n,k} = 0$ for every $k > R$. Such an $R$ is called an
**admissible bound for row $n$**. Rows are indexed by $n$ and columns by $k$; the
$k$-th **column** of $c$ is the sequence $n \mapsto c_{n,k}$ ([[def-sequence]]).

**The transform.** Let $(x_k)$ be a sequence of reals. The **transform of
$(x_k)$ by $c$** is the sequence $(y_n)$ given by

$$y_n \;:=\; \sum_{k=0}^{R} c_{n,k}\,x_k ,$$

where $R$ is any admissible bound for row $n$ and the sum is the finite sum of
[[def-finite-sum]]. We write $\sum_k c_{n,k} x_k$ for this value.

**This is well defined, and the check is the reason finite row support is part
of the definition.** Suppose $R \le R'$ are both admissible bounds for row $n$.
Splitting the longer sum ([[lem-finite-sum-laws]]) gives

$$\sum_{k=0}^{R'} c_{n,k}x_k \;=\; \sum_{k=0}^{R} c_{n,k}x_k \;+\; \sum_{k=R+1}^{R'} c_{n,k}x_k ,$$

and every term of the second sum has $k > R$, hence $c_{n,k} = 0$ and
$c_{n,k}x_k = 0$; a finite sum all of whose terms are $0$ is $0$, by the scaling
law of [[lem-finite-sum-laws]] with $\lambda = 0$. So the two agree. For two
arbitrary admissible bounds $R_1, R_2$, the order on $\mathbb{N}$ is total
([[thm-nat-linear-order]]), so each may be compared with the larger of the two,
and the three values agree. Hence $y_n$ is a single well-determined real for
each $n$, and $(y_n)$ is a sequence of reals.

Two instances of the transform have their own names. The **row sum** of row $n$
is $\sum_k c_{n,k}$, the transform of the constant sequence $1$; the **row
absolute sum** is $\sum_k |c_{n,k}|$, the transform of the constant sequence $1$
by the matrix $(n,k) \mapsto |c_{n,k}|$, which again has finite row support with
the same admissible bounds.

**Regularity.** The summability matrix $c$ is **regular** when for every
convergent sequence $(x_k)$ of reals the transform $(y_n)$ converges and

$$\lim_n y_n \;=\; \lim_k x_k .$$

Both limits are asserted to exist there: the right-hand one by hypothesis on
$(x_k)$, the left-hand one as part of the condition. Limits of real sequences
are unique ([[lem-limit-unique]], [[def-real-limit]]), so the condition is
unambiguous.

## Remarks

- **Finite row support is not a technical convenience, it is what makes the
  transform mean anything at all at this point of the library.** The classical
  definition allows every row to be an infinite series $\sum_{k=0}^{\infty}
  c_{n,k}x_k$, and asks that each such series converge. Series are not defined
  anywhere in this library yet; they arrive on the next page of this track. Every
  sum above is therefore a *finite* sum in the sense of [[def-finite-sum]], and
  no convergence question arises inside a row.

- **What is lost, and what is not.** The restriction excludes matrices such as
  the Abel and Borel means, whose rows are genuine series. It does not exclude
  anything needed here: the Cesaro matrix has $c_{n,k} = 1/(n+1)$ for $k \le n$
  and $0$ beyond ([[cor-cesaro-matrix-is-regular]]), so row $n$ has admissible
  bound $n$; and the counterexample of
  [[cex-irregular-summability-matrix]] has two nonzero entries per row.
  [[thm-silverman-toeplitz]] characterises regularity within this class.

- **Regularity says the transform is a genuine generalisation of the limit.** It
  is exactly the condition that $c$ never changes the value of a limit that
  already exists. It says nothing at all about sequences that do not converge,
  and the interest of such matrices is precisely that a regular one may still
  assign a value to a divergent sequence: the Cesaro matrix does so for the
  alternating sequence ([[ex-cesaro-means-of-alternating]]).

- **A matrix that fails regularity can fail it in two different ways**, by
  changing a limit or by destroying convergence outright.
  [[cex-irregular-summability-matrix]] does the second, which is the stronger
  failure.
