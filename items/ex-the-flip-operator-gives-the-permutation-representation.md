---
id: ex-the-flip-operator-gives-the-permutation-representation
kind: example
title: "The flip operator gives the permutation representation"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group, thm-a-yang-baxter-operator-gives-braid-group-representations, def-yang-baxter-operator-on-an-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Example 8.2.1 (the categories $\\mathbf{Set}$, $\\mathbf{Vec}$, $\\mathbf{Rep}(G)$ with the transposition braiding), printed p. 197; §8.2 Remark 8.2.5, printed p. 198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Take $\mathcal C=\mathbf{Vect}_k$, $X=k^n$ for $n\ge0$, with standard basis
$e_1,\dots,e_n$, and $R(e_i\otimes e_j)=e_j\otimes e_i$. Then $R^2=1$ and $R$
is a Yang–Baxter operator on $X$: both sides of the cubic relation act on
$e_i\otimes e_j\otimes e_l$ by the permutation of the three basis vectors
reversing the order. By
[[prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group]]
the action
$\rho_m\colon B_m\to\operatorname{Aut}(X^{\otimes m})$ of
[[thm-a-yang-baxter-operator-gives-braid-group-representations]] factors
through $S_m$, and on the basis $e_{i_1}\otimes\cdots\otimes e_{i_m}$ the
generator $\sigma_j$ acts by exchanging the entries in positions $j$ and
$j+1$. Thus $\rho_m$ is the place-permutation representation of $B_m$
through $S_m$: for $m=2$ and $n\ge2$, $R$ swaps $e_1\otimes e_2$ with $e_2\otimes e_1$ and
fixes $e_1\otimes e_1$ and $e_2\otimes e_2$.

For $m=0,1$, use the trivial action on $X^{\otimes m}$, with
$X^{\otimes0}=k$; it is also the place-permutation action of the trivial
group $S_m$. If $n=0$ and $m\ge1$, the tensor power is the zero space and
its unique automorphism is its identity, so the same conclusion holds.

## Facts & Assumptions

**Given:** the field $k$, the vector space $X=k^n$ with basis $e_1,\dots,e_n$, and the linear flip $R(e_i\otimes e_j)=e_j\otimes e_i$ on $X\otimes X$.

[L1] A Yang–Baxter operator on $X$ is an invertible $R\colon X\otimes X\to X\otimes X$ satisfying the cubic equation ([[def-yang-baxter-operator-on-an-object]]), and it gives homomorphisms $\rho_m\colon B_m\to\operatorname{Aut}(X^{\otimes m})$ with $\rho_m(\sigma_j)$ the local operator at position $j$ ([[thm-a-yang-baxter-operator-gives-braid-group-representations]]).

[L2] If $R^2=1_{X\otimes X}$, then for every $m\ge2$ the homomorphism $\rho_m$ factors through $\pi_m\colon B_m\to S_m$, and $\psi_m(s_j)=\rho_m(\sigma_j)$ ([[prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group]]).

## Verification

1.1 **The flip is an involutive Yang–Baxter operator.** On the basis, $R^2(e_i\otimes e_j)=R(e_j\otimes e_i)=e_i\otimes e_j$, so $R^2=1_{X\otimes X}$. For the cubic relation, the left-hand composite applied to $e_i\otimes e_j\otimes e_l$ reverses the order of the three factors: $R\otimes1$ exchanges the first two, then $1\otimes R$ exchanges the last two, then $R\otimes1$ the first two, giving $e_l\otimes e_j\otimes e_i$; the right-hand composite produces the same by the mirror computation. Since the pure tensors span $X^{\otimes3}$, the cubic equation holds and $R$ is a Yang–Baxter operator on $X$. [L1, given, algebra]

2.1 **The action on pure tensors.** For $m\ge2$, by [L1] the local operator at position $j$ is $1^{\otimes(j-1)}\otimes R\otimes1^{\otimes(m-j-1)}$, which on the basis vector $e_{i_1}\otimes\cdots\otimes e_{i_m}$ exchanges the entries in positions $j$ and $j+1$; thus each $\rho_m(\sigma_j)$ is the corresponding place permutation. [L1, step 1.1]

3.1 **Factorization and identification of the representation.** By [L2] and $R^2=1$ the action $\rho_m$ factors as $\psi_m\circ\pi_m$ with $\psi_m(s_j)=\rho_m(\sigma_j)$; by step 2.1 the value $\psi_m(s_j)$ is the place permutation exchanging positions $j$ and $j+1$. Since the $s_j$ generate $S_m$, $\psi_m$ is the place-permutation representation of $S_m$ on $X^{\otimes m}$, and $\rho_m$ is that representation composed with $\pi_m$. [L2, step 1.1, step 2.1]

4.1 **The two-strand case.** For $m=2$ and $n\ge2$ the operator $R$ swaps $e_1\otimes e_2$ with $e_2\otimes e_1$ and fixes $e_i\otimes e_i$ for $i=1,2$; this is the place-permutation representation of $S_2$, in agreement with step 3.1. [step 1.1, step 3.1, given]

5.1 **Conclusion and small strand counts.** For $m=0,1$, the braid and symmetric groups are trivial and their actions send the sole element to the identity, the place permutation on $X^{\otimes m}$. If $n=0$ and $m\ge1$, the tensor power is zero and its unique endomorphism is its identity. The flip operator is an involutive Yang–Baxter operator, and its braid actions are exactly the place-permutation representations of the symmetric groups, pulled back along the canonical surjections $B_m\to S_m$. All computations are finite and linear and use no choice principle. [step 1.1, step 3.1, step 4.1] ∎ 