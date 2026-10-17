---
id: lem-finite-hermite-interpolation-for-jordan-data
kind: lemma
title: "Finite Hermite data at distinct eigenvalues have a unique polynomial representative"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Statement

Let $s\ge0$, let $\lambda_1,\ldots,\lambda_s\in\mathbb C$ be distinct, let
$m_1,\ldots,m_s$ be positive integers, and put $N=\sum_{i=1}^s m_i$. Let
$V_N=\operatorname{span}\{1,z,\ldots,z^{N-1}\}$, with the empty span
$V_0=\{0\}$. For arbitrary data
$c_{i,k}\in\mathbb C$ with $1\le i\le s$ and $0\le k<m_i$, there is exactly
one polynomial $p\in V_N$ satisfying
$$p^{(k)}(\lambda_i)=c_{i,k}\qquad(1\le i\le s,\ 0\le k<m_i).$$

## Facts & Assumptions

**Given:** A finite list of distinct nodes (possibly empty), positive
multiplicities when nodes are present, and the derivative data $c_{i,k}$.

[F1] The space $V_N$ and the coordinate space $\mathbb C^N$ both have
dimension $N$; the monomial basis is $1,z,\ldots,z^{N-1}$, empty when $N=0$.

[F2] The map that sends a polynomial to the finite list of its derivatives at
the fixed nodes is linear.

## Proof

1.1 Let $T:V_N\to\mathbb C^N$ be given by $T(p)=(p^{(k)}(\lambda_i))_{i,k}$. By [F2], $T$ is linear, and by [F1] its domain and codomain both have dimension $N$. [given, F1, F2, construct]

2.1 If $N=0$, then $V_N=\{0\}$, so $T$ is injective. If $N>0$ and $T(p)=0$, the exact Taylor expansion of the polynomial at $\lambda_i$ shows $(z-\lambda_i)^{m_i}$ divides $p$ for every $i$. The factors for distinct $\lambda_i$ are pairwise coprime, so their product of degree $N$ divides $p$. Since $p\in V_N$ has degree less than $N$, this forces $p=0$. Thus $T$ is injective in either case. [given, step 1.1, algebra]

3.1 An injective linear map between finite-dimensional spaces of the same dimension is surjective, so the prescribed vector $(c_{i,k})_{i,k}$ has a preimage under $T$ and that preimage is unique. [step 1.1, step 2.1, algebra] ∎
