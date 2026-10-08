---
id: lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation
kind: lemma
title: "Induction is invariant under conjugation of the subgroup and the representation"
status: published
origin: pipeline
pipeline_run: "frontier-43-complex-representation-15"
dependency_level: 0
deps:
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - def-conjugate-representation-and-conjugate-character
  - def-induced-character-of-a-complex-representation
  - def-subgroup
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-virtual-character-and-character-ring-of-a-finite-group
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (complete author-hosted textbook, 294 pp.)"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§5.2, printed pp. 76–77: the conjugate-representation convention and its action on subspaces of induced modules."
---

## Statement

Let $G$ be a finite group, $H\le G$, $s\in G$, and $K:=sHs^{-1}$. Let $W$ be a finite-dimensional complex $H$-module with character $\chi$, and let ${}^sW$ be the conjugate $K$-module with $(shs^{-1})\cdot w:=h\cdot w$ and character ${}^s\chi$ ([[def-conjugate-representation-and-conjugate-character]], [[def-subgroup]], [[def-finite-dimensional-representation-of-a-group-over-a-field]]). Then

$$
\Phi:\operatorname{Ind}_H^GW\longrightarrow\operatorname{Ind}_K^G({}^sW),\qquad\Phi(f)(x):=f(xs)
$$

is an isomorphism of complex $G$-modules with inverse $\Psi(\varphi)(x):=\varphi(xs^{-1})$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]). In particular, $\operatorname{Ind}_K^G({}^s\chi)=\operatorname{Ind}_H^G\chi$ in $R(G)$ ([[def-induced-character-of-a-complex-representation]], [[def-virtual-character-and-character-ring-of-a-finite-group]]). No choice principle is used.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, an element $s\in G$, and a finite-dimensional complex $H$-module $W$ with character $\chi$.

[F1] Induced functions satisfy $f(gh)=h^{-1}\cdot f(g)$ and the left action is $(x\cdot f)(g)=f(x^{-1}g)$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] The conjugate module ${}^sW$ is a representation of $K=sHs^{-1}$ with $(shs^{-1})\cdot w=h\cdot w$; its character satisfies ${}^s\chi(shs^{-1})=\chi(h)$ ([[def-conjugate-representation-and-conjugate-character]]).

[F3] The induced character of a finite-dimensional representation is the character of the induced module ([[def-induced-character-of-a-complex-representation]]).

[F4] $K=sHs^{-1}$ is a subgroup of $G$ ([[def-subgroup]]).

[F5] The character ring $R(G)$ is the integral span of the honest complex characters ([[def-virtual-character-and-character-ring-of-a-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 For $k=shs^{-1}\in K$, covariance gives $\Phi(f)(xk)=f(xks)=f(xsh)=h^{-1}\cdot f(xs)=k^{-1}\cdot\Phi(f)(x)$, where the last action is that of ${}^sW$ by [F2]. Thus $\Phi(f)$ is $K$-covariant and belongs to $\operatorname{Ind}_K^G({}^sW)$. [F1, F2, F4, given]

1.2 Define $\Psi(\varphi)(x):=\varphi(xs^{-1})$. For $h\in H$, $\Psi(\varphi)(xh)=\varphi(xhs^{-1})=\varphi((xs^{-1})(shs^{-1}))=h^{-1}\cdot\varphi(xs^{-1})=h^{-1}\cdot\Psi(\varphi)(x)$ by $K$-covariance and [F2]. Hence $\Psi(\varphi)\in\operatorname{Ind}_H^GW$. [F1, F2, given]

2.1 For $x_0,x\in G$, $\Phi(x_0\cdot f)(x)=f(x_0^{-1}xs)=\Phi(f)(x_0^{-1}x)=(x_0\cdot\Phi(f))(x)$, so $\Phi$ is $G$-equivariant. It is complex-linear by the pointwise module operations. [F1, step 1.1, given, algebra]

2.2 For $x_0,x\in G$, $\Psi(x_0\cdot\varphi)(x)=\varphi(x_0^{-1}xs^{-1})=\Psi(\varphi)(x_0^{-1}x)=(x_0\cdot\Psi(\varphi))(x)$, so $\Psi$ is $G$-equivariant. It is complex-linear by the pointwise operations. [F1, step 1.2, given, algebra]

3.1 Substitution gives $\Psi(\Phi(f))(x)=f(xs^{-1}s)=f(x)$ and $\Phi(\Psi(\varphi))(x)=\varphi(xs s^{-1})=\varphi(x)$ for every $x\in G$. Thus $\Phi$ and $\Psi$ are inverse $G$-module isomorphisms. [step 1.1, step 2.1, step 1.2, step 2.2, algebra]

4.1 The induced modules in step 3.1 are isomorphic, so their characters are equal by [F3]. Both honest characters lie in $R(G)$ by [F5], giving $\operatorname{Ind}_K^G({}^s\chi)=\operatorname{Ind}_H^G\chi$ there. The formulas use no choice principle. [F3, F5, step 3.1] ∎
