---
id: thm-ip-basis-pursuit-exact-recovery-under-nsp
kind: theorem
title: "Exact basis-pursuit recovery under the strict nullspace property"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - def-norm-and-normed-space
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-finite-sum-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.1, Theorems 4.4–4.5"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Afonso S. Bandeira, Ten Lectures and Forty-Two Open Problems in the Mathematics of Data Science, §6.3"
      url: "https://www.ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/5f0f7205d1cf274e80d77345a7edbf2a_MIT18_S096F15_TenLec.pdf"
---

## Statement

Let $m,n,s\in\mathbb N$ with $m,n\ge1$ and $1\le s\le n$, and let
$A\in\mathbb R^{m\times n}$ satisfy the strict nullspace property of order
$s$. Use one-based coordinate labels $j=1,\ldots,n$, with coordinate $j$
identified with the library's coordinate $j-1$. If $x^\dagger\in\mathbb R^n$
has at most $s$ nonzero coordinates, then
$x^\dagger$ is the unique minimizer of
$$\sum_{j=1}^n|z_j|$$
over all $z\in\mathbb R^n$ satisfying $Az=Ax^\dagger$. This is a noiseless
exact-data result; it makes no exact-recovery or support-recovery assertion for
noisy observations.

## Statement references

[[def-ip-nullspace-property|Strict nullspace property and coordinate conventions]]

[[def-p-norms-on-rn|Finite-dimensional one-norm]]

[[lem-p-norms-are-norms-and-induce-the-published-metrics|Triangle inequality for the finite-dimensional one-norm]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.1, Theorems 4.4–4.5, pp. 79–80](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Bandeira, *Ten Lectures and Forty-Two Open Problems in the Mathematics of Data Science*, §6.3, pp. 106–107](https://www.ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/5f0f7205d1cf274e80d77345a7edbf2a_MIT18_S096F15_TenLec.pdf)

## Facts & Assumptions

**Given:** Integers $m,n\ge1$, an integer $1\le s\le n$, a matrix $A\in\mathbb R^{m\times n}$ satisfying the strict nullspace property of order $s$, and a vector $x^\dagger\in\mathbb R^n$ with at most $s$ nonzero coordinates.

[F1] [[def-ip-nullspace-property]]: for every nonzero $h\in\ker A$ and every $S\subseteq[n]$ with $|S|\le s$, $\|h_S\|_1<\|h_{S^c}\|_1$.

[F2] [[def-p-norms-on-rn]]: $\|u\|_1=\sum_{j=1}^n|u_j|$ for $u\in\mathbb R^n$.

[F3] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: the p=1 formula is a norm on $\mathbb R^n$.

[F4] [[def-norm-and-normed-space]]: every norm $N$ satisfies the triangle inequality $N(u+v)\le N(u)+N(v)$.

[F5] [[def-ip-nullspace-property]]: under its coordinate relabeling, $(Au)_i=\sum_{j=1}^n A_{ij}u_j$ for each row $i$.

[F6] [[lem-finite-sum-laws]]: finite sums are additive, so $\sum_{j=1}^n(b_j-c_j)=\sum_{j=1}^n b_j-\sum_{j=1}^n c_j$ for real lists.

## Proof

1.1 Let $S:=\{j\in[n]:x_j^\dagger\ne0\}$, so $|S|\le s$. For any feasible $z\ne x^\dagger$, put $h:=z-x^\dagger$. For each row $i$, [F5] and [F6] give $(Ah)_i=\sum_{j=1}^n A_{ij}(z_j-x_j^\dagger)=\sum_{j=1}^n A_{ij}z_j-\sum_{j=1}^n A_{ij}x_j^\dagger=(Az)_i-(Ax^\dagger)_i=0$, so $h\in\ker A$ and $h\ne0$. Hence [F1] gives $\|h_S\|_1<\|h_{S^c}\|_1$. [given, F1, F5, F6, construct, algebra]

2.1 By [F3], $\|\cdot\|_1$ is a norm, so [F4] gives its triangle inequality. On $S$, $z_S=x^\dagger_S+h_S$, hence $\|x^\dagger\|_1=\|x^\dagger_S\|_1=\|z_S-h_S\|_1\le\|z_S\|_1+\|h_S\|_1$. On $S^c$, $x^\dagger$ vanishes and $z_{S^c}=h_{S^c}$, so $z=z_S+h_{S^c}$ with disjoint coordinate supports and $\|z\|_1=\|z_S\|_1+\|h_{S^c}\|_1$. By step 1.1, this is strictly greater than $\|z_S\|_1+\|h_S\|_1\ge\|x^\dagger\|_1$. Thus every feasible vector distinct from $x^\dagger$ has strictly larger objective, and $x^\dagger$, which is feasible, is the unique minimizer. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
