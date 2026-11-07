---
id: thm-global-whittaker-functional-factorizes-for-cuspidal-gln
kind: theorem
title: "Factorization of Global Whittaker Functionals for GL(n)"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-adelic-gln-automorphic-representation
  - def-unitary-cuspidal-generic-gln-representation
  - def-gln-generic-whittaker-model
  - thm-global-whittaker-genericity-localizes-to-every-place
  - thm-local-whittaker-multiplicity-one-for-gln
dependency_level: 4
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 1, §§1.1–1.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0–1"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field, $\mathbb A_F$ its adele ring, $n\geq1$, and $\Pi=\bigotimes'_v\Pi_v$ a globally generic cuspidal automorphic representation of $\mathrm{GL}_n(\mathbb A_F)$. Fix a nontrivial additive character $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$, and let $\Lambda_\psi$ be a nonzero continuous global Whittaker functional in the smooth tensor realization. For a pure tensor $x=\bigotimes_v x_v$ in the restricted tensor product of the local representations, define its global Whittaker function by $W_x(g)=\Lambda_\psi(\Pi(g)x)$. Then there are nonzero local $\psi_v$-Whittaker functionals $\lambda_v$, normalized compatibly with $\Lambda_\psi$, such that

$$W_x((g_v)_v)=\prod_v \lambda_v(\Pi_v(g_v)x_v)$$

for every $g=(g_v)_v\in\mathrm{GL}_n(\mathbb A_F)$; at almost every finite place the local factor is the normalized spherical Whittaker function. The product is therefore a restricted product.

## Statement references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–1](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)


## Facts & Assumptions

**Given:** The representation and functional in the Statement, with the smooth tensor topology, the algebraic finite-place restricted product, and completed archimedean projective tensor product. Prove the restricted-product identity.

[F1] [[def-adelic-gln-automorphic-representation]]: pure tensors span a dense subspace, and partial tensor insertions are continuous; distinguished spherical vectors $e_v$ are fixed at almost all finite places.

[F2] [[def-unitary-cuspidal-generic-gln-representation]]: $\Lambda_\psi$ is nonzero, continuous, and equivariant for $\psi_N$.

[F3] [[thm-global-whittaker-genericity-localizes-to-every-place]]: every local component admits a nonzero Whittaker functional.

[F4] [[thm-local-whittaker-multiplicity-one-for-gln]]: the space of local Whittaker functionals, continuous at archimedean places, has dimension one. This is a separate local proof obligation; the argument below does not prove it.

## Proof

1.1 If $\Lambda_\psi$ vanished on all pure tensors, it would vanish on their linear span and, by continuity and density, everywhere. Choose therefore a pure tensor $a=\bigotimes_v a_v$ with $c=\Lambda_\psi(a)\neq0$. For each place $v$ define $\ell_v(y)=c^{-1}\Lambda_\psi(a_{\ne v}\otimes y)$. Then $\ell_v(a_v)=1$, it is continuous at archimedean places, and equivariance under an element supported at $v$ gives $\ell_v(\Pi_v(u)y)=\psi_{N,v}(u)\ell_v(y)$. [given, F1, F2, construct]

2.1 Let $S$ be any finite set of places, and replace the slots $a_v$ by arbitrary $b_v$ at $v\in S$. Fix $w\in S$ and contract $\Lambda_\psi$ in every slot except $w$, keeping those replacements in the other slots. This contraction is a local equivariant functional, continuous at archimedean places, and by [F4] is a scalar multiple of $\ell_w$. Evaluating it at $a_w$ identifies that scalar with the value with only the $S\setminus\{w\}$ replacements. Induction on $|S|$, starting with the value $c$ at $a$, gives
$$\Lambda_\psi(b_S\otimes a_{S^c})=c\prod_{v\in S}\ell_v(b_v).$$
No division by any $\ell_v(b_v)$ is used, so the identity includes vanishing factors. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Every pure tensor differs from $a$ in finitely many slots. Choose one place $v_0$, put $\lambda_{v_0}=c\ell_{v_0}$ and $\lambda_v=\ell_v$ elsewhere. Step 2.1 gives $\Lambda_\psi(\bigotimes_v x_v)=\prod_v\lambda_v(x_v)$. At almost all finite places $a_v=e_v$ and $v\neq v_0$, hence $\lambda_v(e_v)=1$. The function $g_v\mapsto\lambda_v(\Pi_v(g_v)e_v)$ is right maximal-compact invariant and takes value one at the identity, so is the normalized spherical Whittaker function attached to this vector and model. For adelic $g$, almost every finite component lies in the standard maximal compact and fixes $e_v$. Applying the same pure-tensor identity to $\Pi(g)x$ proves the stated formula with only finitely many non-unit factors. [given, F1, F4, step 1.1, step 2.1, construct] ∎

## Remarks

The tensor argument is local to this item. Its use of local multiplicity one remains dependent on a complete local proof of that supplier; it does not establish that theorem or any Rankin–Selberg integral identity.
