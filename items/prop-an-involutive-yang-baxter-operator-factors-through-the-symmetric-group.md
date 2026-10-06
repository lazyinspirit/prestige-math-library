---
id: prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group
kind: proposition
title: "An involutive Yang–Baxter operator factors through the symmetric group"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [thm-a-yang-baxter-operator-gives-braid-group-representations, thm-the-symmetric-group-has-the-coxeter-presentation, thm-the-braid-group-surjects-onto-the-symmetric-group, thm-von-dyck, lem-local-yang-baxter-operators-satisfy-the-artin-relations, def-braid-group-by-the-artin-presentation]
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
      locator: "§8.1 Definition 8.1.12 (symmetric categories) and §8.2 Remark 8.2.5, printed pp. 197--198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a monoidal category, let $X\in\mathcal C$, and let $R$ be a
Yang–Baxter operator on $X$ with $R^2=1_{X\otimes X}$. Then for every $n\ge2$
the homomorphism
$\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ of
[[thm-a-yang-baxter-operator-gives-braid-group-representations]] factors
through the canonical surjection
$\pi_n\colon B_n\to S_n$ of
[[thm-the-braid-group-surjects-onto-the-symmetric-group]]: there is a unique
homomorphism $\psi_n\colon S_n\to\operatorname{Aut}(X^{\otimes n})$ with
$\rho_n=\psi_n\circ\pi_n$.

Conversely, if $\rho_n$ factors through $\pi_n$ for some $n\ge2$, then
$R_i^2=1_{X^{\otimes n}}$ for every local operator $R_i$, because
$\sigma_i^2$ lies in the kernel of $\pi_n$; and since $\rho_2(\sigma_1)=R$,
if $\rho_2$ factors through $\pi_2$ then $R^2=1_{X\otimes X}$. Consequently an
involutive Yang–Baxter operator is exactly one whose two-strand braid action
factors through $S_2$, and an involutive Yang–Baxter operator has its braid
actions factoring through $S_n$ for every $n$.

## Facts & Assumptions

**Given:** a monoidal category $\mathcal C$, an object $X$, a Yang–Baxter
operator $R$ on $X$, the homomorphisms $\rho_n$ of
[[thm-a-yang-baxter-operator-gives-braid-group-representations]] with
$\rho_n(\sigma_i)=R_i$ the local operator of $R$ at position $i$, and the
surjection $\pi_n\colon B_n\to S_n$.

[L1] The local operators satisfy the Artin relations of [L3] ([[lem-local-yang-baxter-operators-satisfy-the-artin-relations]]).

[L2] The symmetric group $S_n$ has the Coxeter presentation with generators $s_1,\dots,s_{n-1}$ and relations $s_i^2=1$, the braid relations and the distant-commutativity relations ([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

[L3] The braid group has the Artin presentation ([[def-braid-group-by-the-artin-presentation]] as used in [[thm-a-yang-baxter-operator-gives-braid-group-representations]]), and the canonical surjection $\pi_n$ sends $\sigma_i$ to $s_i$ ([[thm-the-braid-group-surjects-onto-the-symmetric-group]]).

[L4] A generator assignment that respects the relators of a presented group extends uniquely to a homomorphism; precomposition with a surjection is injective on homomorphisms ([[thm-von-dyck]]).

[L5] The local operator at position $i$ is $1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i-1)}$ in a strict model and its bracket-corrected conjugate in general ([[thm-a-yang-baxter-operator-gives-braid-group-representations]], [[lem-local-yang-baxter-operators-satisfy-the-artin-relations]]).

## Proof

**Proof technique:** direct.

1.1 **The direct implication.** Assume $R^2=1_{X\otimes X}$. By [L5] the local operator satisfies $R_i^2=1_{X^{\otimes n}}$: in the strict model $R_i^2$ is the tensor product of identities with $R^2$, and the bracket correction of [L5] is by a common canonical isomorphism, so it preserves the identity. By [L1] the operators $R_i$ also satisfy the braid relations and the distant-commutativity relations. Hence the assignment $s_i\mapsto R_i$ from the Coxeter generators of $S_n$ satisfies all relators of [L2], and [L4] gives a homomorphism $\psi_n\colon S_n\to\operatorname{Aut}(X^{\otimes n})$ with $\psi_n(s_i)=R_i$. [L1, L2, L4, L5, given, construct]

1.2 **The converse.** Suppose $\rho_n=\psi\circ\pi_n$ for some homomorphism $\psi$ and some $n\ge2$. Then for every $i$, $R_i^2=\rho_n(\sigma_i)^2=\psi(\pi_n(\sigma_i))^2=\psi(\pi_n(\sigma_i)^2)=\psi(\pi_n(\sigma_i^2))=\psi(1)=1_{X^{\otimes n}}$, using that $s_i^2=1$ in $S_n$ by [L2] and that $\pi_n$ is a homomorphism [L3]. [L2, L3, given, algebra]

2.1 **Factorization.** Both $\rho_n$ and $\psi_n\circ\pi_n$ are homomorphisms $B_n\to\operatorname{Aut}(X^{\otimes n})$, and on every Artin generator $\sigma_i$ they agree: $\rho_n(\sigma_i)=R_i=\psi_n(s_i)=\psi_n(\pi_n(\sigma_i))$ by [L3] and step 1.1. By the uniqueness clause of [L4] applied to the Artin presentation, $\rho_n=\psi_n\circ\pi_n$. Since $\pi_n$ is surjective, $\psi_n$ is unique with this property: two such homomorphisms agree on the image of $\pi_n$, which is all of $S_n$. [L3, L4, step 1.1, algebra]

3.1 **The two-strand converse.** For $n=2$ the only local operator is $R_1=R$, so step 1.2 gives $R^2=1_{X\otimes X}$ as soon as $\rho_2$ factors through $\pi_2$. Hence an involutive Yang–Baxter operator is exactly one whose two-strand braid action factors through $S_2$: one direction is step 1.1 with $n=2$ together with step 2.1, the other is the present step. For $n\ge3$, step 1.2 gives the weaker identity $(R^2)\otimes1_{X^{\otimes(n-2)}}=1_{X^{\otimes n}}$; in a general monoidal category this whiskering does not by itself imply $R^2=1$, which is why the criterion is stated at $n=2$. [L5, step 1.2, step 2.1, algebra]

4.1 **Conclusion.** Step 1.1 with step 2.1 shows that an involutive Yang–Baxter operator has all its braid actions factoring through the symmetric groups, and steps 1.2 and 3.1 give the converse at the level of the two-strand action: $\rho_2$ factors through $\pi_2$ exactly when $R^2=1$. This proves the proposition. The argument uses only the Coxeter and Artin presentations and von Dyck's theorem, so no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1] ∎ 