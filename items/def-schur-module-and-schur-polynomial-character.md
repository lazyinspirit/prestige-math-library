---
id: def-schur-module-and-schur-polynomial-character
kind: definition
title: Schur modules and their characters
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
deps:
  - def-axiom-of-choice
  - def-polynomial-glr-highest-weights-as-partitions
  - thm-schur-weyl-decomposition-with-length-cutoff
  - def-commuting-symmetric-and-linear-actions-on-tensor-power
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-partition-young-diagram-and-conjugate-partition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 11 Definition 11.1, Theorems 11.6--11.8, printed pp. 54--56 (Schur modules, their characters as Schur polynomials, and irreducibility); Ch. 9 Definition 9.1 and Remarks 9.4--9.6, printed pp. 51--52 (polynomial representations and their weights)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.3--27.4 Schur--Weyl duality and polynomial representations of $GL_n$, printed pp. 145--150; §29.1 Schur polynomials, printed pp. 155--157."
---

## Definition

Assume the Axiom of Choice. Let $V=\mathbb C^r$ with $r\ge1$, and let
$\lambda$ be a partition with at most $r$ parts
([[def-partition-young-diagram-and-conjugate-partition]]). Put
$n=|\lambda|$ and define the **Schur module**
$$S_\lambda(V):=\operatorname{Hom}_{S_n}\bigl(S^\lambda,V^{\otimes n}\bigr),$$
where $S^\lambda$ is the complex Specht module
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]) and $S_n$ acts
on $V^{\otimes n}$ by place permutations
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]); the
$\operatorname{GL}(V)$-action is by postcomposition,
$(g\cdot\varphi)(s)=g^{\otimes n}\varphi(s)$. By
[[thm-schur-weyl-decomposition-with-length-cutoff]] the space
$S_\lambda(V)$ is a nonzero irreducible polynomial
$\operatorname{GL}(V)$-module of highest weight $\lambda$ in the sense of
[[def-polynomial-glr-highest-weights-as-partitions]]; for a partition with
$\ell(\lambda)>r$ we define $S_\lambda(V):=0$.

Let $T=\{\operatorname{diag}(t_1,\dots,t_r)\}\subseteq\operatorname{GL}(V)$ be
the diagonal torus as in
[[def-polynomial-glr-highest-weights-as-partitions]]. The **character** of a
finite-dimensional polynomial $\operatorname{GL}(V)$-module $W$ is the
polynomial
$$\operatorname{ch}W=\sum_{\alpha\in\mathbb Z^r}\dim W_\alpha\,x^\alpha \in\mathbb Z[x_1,\dots,x_r],\qquad x^\alpha=x_1^{\alpha_1}\cdots x_r^{\alpha_r},$$
where $W_\alpha$ is the weight space of $T$. Characters are additive over
direct sums, and
$$\operatorname{ch}(W\otimes W')=\operatorname{ch}W\cdot\operatorname{ch}W'$$
for finite-dimensional polynomial modules, because
$(W\otimes W')_\alpha=\bigoplus_{\beta+\gamma=\alpha}W_\beta\otimes W'_\gamma$.
The character of a polynomial module is a symmetric polynomial: conjugation by
a permutation matrix $g_\sigma$ carries
$\operatorname{diag}(t_1,\dots,t_r)$ to
$\operatorname{diag}(t_{\sigma(1)},\dots,t_{\sigma(r)})$, and characters of
representations of a group are class functions, so $\operatorname{ch}W$ is
invariant under permuting $x_1,\dots,x_r$. In particular
$\operatorname{ch}S_\lambda(V)$ is a symmetric polynomial for
$\ell(\lambda)\le r$, homogeneous of degree $n$ because the Schur--Weyl
decomposition of [[thm-schur-weyl-decomposition-with-length-cutoff]] exhibits
$S_\lambda(V)$ as a direct summand of $V^{\otimes n}$, all of whose weights
have total degree $n$; it is $0$ for $\ell(\lambda)>r$.

**Remarks.** The module $S_\lambda(V)$ is the multiplicity space
$M_\lambda$ of [[thm-schur-weyl-decomposition-with-length-cutoff]]; the two
notations denote the same object. The character $\operatorname{ch}S_\lambda(V)$
is computed explicitly in
[[prop-semistandard-tableaux-expand-schur-characters]] as the sum over
semistandard tableaux of shape $\lambda$ with entries in $\{1,\dots,r\}$, and
it is the rank-$r$ Schur polynomial $s_\lambda(x_1,\dots,x_r)$ of
[[def-stable-schur-function-by-bialternants]].
