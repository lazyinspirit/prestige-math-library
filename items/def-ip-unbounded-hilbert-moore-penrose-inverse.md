---
id: def-ip-unbounded-hilbert-moore-penrose-inverse
kind: definition
title: Hilbert-space Moore–Penrose inverse
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-bounded-linear-operator
  - def-countable-choice
  - def-hilbert-space
  - def-orthogonality-and-orthogonal-complement
  - def-real-and-complex-inner-product-space
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - thm-metric-closure-characterisation
  - thm-orthogonal-decomposition-by-a-closed-subspace
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Theorem 3.3"
      url: "https://arxiv.org/pdf/2001.00617"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
---

## Definition

Assume the Axiom of Countable Choice. Let $X$ and $Y$ be real or complex Hilbert
spaces over the same scalar field, and let $K:X\to Y$ be a bounded linear
operator. Write $R(K):=\{Kx:x\in X\}$ for its range,
$N(K):=\{x\in X:Kx=0\}$ for its kernel, and
$M^\perp:=\{z:\langle z,m\rangle=0\text{ for every }m\in M\}$ for the
orthogonal complement of a subspace $M$. The kernel $N(K)$ is closed, so the
restriction
$$\widetilde K:=K|_{N(K)^\perp}:N(K)^\perp\to R(K)$$
is a linear bijection. Define the Hilbert-space Moore–Penrose inverse $K^\dagger$
to have domain
$$D(K^\dagger):=R(K)\oplus R(K)^\perp$$
and, for the unique decomposition $y=r+z$ with $r\in R(K)$ and
$z\in R(K)^\perp$, set
$$K^\dagger y:=\widetilde K^{-1}r.$$
Thus $K^\dagger y$ is the unique minimum-norm solution of $Kx=r$, and the
orthogonal-range component is mapped to zero. Boundedness of $K^\dagger$ on
this domain is not part of the definition.

## Definition references

[[def-bounded-linear-operator|Bounded linear operators and their norm bound]]

[[def-hilbert-space|Real and complex Hilbert spaces]]

[[def-real-and-complex-inner-product-space|Positive-definite inner products and induced norms]]

[[def-orthogonality-and-orthogonal-complement|Orthogonal complements]]

[[thm-orthogonal-decomposition-by-a-closed-subspace|Orthogonal decomposition by a closed subspace]]

[[lem-pythagorean-theorem-and-finite-orthogonal-sums|Pythagoras for orthogonal vectors]]

[[thm-metric-closure-characterisation|Metric closure and approximation by points of a set]]

[[def-countable-choice|The Axiom of Countable Choice used for orthogonal decomposition]]

[[def-moore-penrose-pseudoinverse|Finite-matrix Moore–Penrose definition (context only)]]

## Facts & Assumptions

**Given:** Countable Choice, real or complex Hilbert spaces $X,Y$, and a bounded linear operator $K:X\to Y$.

[F1] A bounded linear operator has a real bound $C\ge0$ such that $\|Kx\|\le C\|x\|$ for every $x$ ([[def-bounded-linear-operator]]).

[F2] For a subspace $M$, $M^\perp$ consists of vectors orthogonal to every element of $M$, and $M\cap M^\perp=\{0\}$ ([[def-orthogonality-and-orthogonal-complement]]).

[F3] Every closed subspace $M$ of a Hilbert space splits the space uniquely as $M\oplus M^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F4] Finite orthogonal sums satisfy Pythagoras ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[F5] For nonempty $A$ in a metric space, $x\in\overline A$ exactly when every ball about $x$ meets $A$, and $\overline A$ is the smallest closed superset ([[thm-metric-closure-characterisation]]).

[F6] The inner-product norm is definite: $\|v\|=0$ implies $v=0$ ([[def-real-and-complex-inner-product-space]]).

[A1] Countable Choice is the hypothesis used by [F3] ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $K=0$, then $N(K)=X$ is closed. Otherwise choose a bound $C>0$ from [F1]. For any $x\in\overline{N(K)}$, [F5] lets us choose, for every $\varepsilon>0$, an $n_\varepsilon\in N(K)$ with $\|x-n_\varepsilon\|<\varepsilon$. Hence $\|Kx\|=\|K(x-n_\varepsilon)\|\le C\varepsilon$ for every $\varepsilon>0$, so $\|Kx\|=0$ and $Kx=0$ by [F6]. Thus $\overline{N(K)}\subseteq N(K)$, and [F5] implies that $N(K)$ is closed. [given, F1, F5, F6, choose, algebra]

2.1 Fix $r_0\in R(K)$ and choose $x_0\in X$ with $Kx_0=r_0$. By [F3] and step 1.1, write $x_0=p+n$ with $p\in N(K)^\perp$ and $n\in N(K)$; then $Kp=Kx_0-Kn=r_0$. The restriction $\widetilde K$ is therefore surjective. If $p,q\in N(K)^\perp$ and $Kp=Kq$, then $p-q\in N(K)\cap N(K)^\perp$, so $p=q$ by [F2]. Thus $\widetilde K$ is bijective. [given, step 1.1, F2, F3, A1, choose, algebra]

3.1 If $x$ is any solution of $Kx=r_0$, then $x-p\in N(K)$. Since $p\perp(x-p)$, [F4] gives $\|x\|^2=\|p\|^2+\|x-p\|^2\ge\|p\|^2$, with equality only when $x=p$. So $p=\widetilde K^{-1}r_0$ is the unique minimum-norm solution. [step 2.1, F2, F4, F6, algebra]

4.1 For $y=r+z\in R(K)\oplus R(K)^\perp$, the decomposition is unique because $R(K)\cap R(K)^\perp=\{0\}$ by [F2], so the definition is single-valued. If $z\in R(K)^\perp$, then $r=0$ and the unique minimum-norm preimage of $0$ is $0$ by step 3.1; hence $K^\dagger z=0$. For $y_i=r_i+z_i$ and scalars $a,b$, the vector $aK^\dagger y_1+bK^\dagger y_2$ lies in $N(K)^\perp$ and maps under $K$ to $ar_1+br_2$, so uniqueness in step 2.1 gives $K^\dagger(ay_1+by_2)=aK^\dagger y_1+bK^\dagger y_2$. The definition is therefore a well-defined linear operator on the stated domain. [step 2.1, step 3.1, F2, algebra] ∎
