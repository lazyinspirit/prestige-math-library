---
id: cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank
kind: counterexample
title: A partition with too many rows vanishes at fixed rank
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - prop-semistandard-tableaux-expand-schur-characters
  - cor-the-top-exterior-power-acts-by-the-determinant
  - def-axiom-of-choice
  - def-schur-module-and-schur-polynomial-character
  - thm-littlewood-richardson-tensor-product-rule
  - cor-vertical-pieri-rule
  - prop-littlewood-richardson-coefficients-stabilize-with-rank
  - cor-the-kth-exterior-power-vanishes-above-dimension
  - def-stable-schur-function-by-bialternants
  - def-partition-young-diagram-and-conjugate-partition
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 9 Definition 9.1 and Remarks 9.4--9.6, printed pp. 51--52 (a polynomial representation has only nonnegative torus weights, so a partition with more rows than $\\dim V$ cannot occur); §12.1, printed pp. 59--60."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.3--27.4, printed pp. 145--150 (polynomial representations of $GL_n$ and the bound on the number of rows)."
---

## Statement refuted

In the Littlewood--Richardson tensor-product rule
$S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_\nu S_\nu(V)^{\oplus c^\nu_{\lambda\mu}}$
the row bound $\ell(\nu)\le r=\dim V$ on the summands may be suppressed: every
partition $\nu$ with $c^\nu_{\lambda\mu}\ne0$ contributes a nonzero summand
$S_\nu(V)$ of the tensor product
([[thm-littlewood-richardson-tensor-product-rule]],
[[def-schur-module-and-schur-polynomial-character]]).

## Facts & Assumptions

**Given:** AC, $V=\mathbb C^2$ and the partitions $\lambda=(1,1)$, $\mu=(1)$, $\nu=(1,1,1)$.

[F1] For a partition $\eta$, the Schur module $S_\eta(V)=\operatorname{Hom}_{S_{|\eta|}}(S^\eta,V^{\otimes|\eta|})$ is the zero module when $\ell(\eta)>\dim V$, and for $\ell(\eta)\le\dim V$ it is a nonzero irreducible polynomial module with character $s_\eta(x_1,\dots,x_r)$; the Schur polynomial $s_\eta(x_1,\dots,x_r)$ is defined to be $0$ when $\ell(\eta)>\dim V$ ([[def-schur-module-and-schur-polynomial-character]], [[def-stable-schur-function-by-bialternants]], [[prop-littlewood-richardson-coefficients-stabilize-with-rank]]).

[F2] $\Lambda^3\mathbb C^2=0$ and $\Lambda^3\mathbb C^3\cong\mathbb C$; in each case the exterior power is the Schur module of the column $(1,1,1)$ ([[cor-the-kth-exterior-power-vanishes-above-dimension]], [[cor-the-top-exterior-power-acts-by-the-determinant]], [[cor-vertical-pieri-rule]]).

[F3] Vertical Pieri gives LR coefficient one for each of the two partitions $(2,1)$ and $(1,1,1)$ containing $(1,1)$ whose skew complement is a vertical strip. At rank $2$, $S_{(1,1,1)}(V)=0$, so only $S_{(2,1)}(V)$ is a nonzero summand; at rank $3$ both terms are nonzero ([[cor-vertical-pieri-rule]], [[def-schur-module-and-schur-polynomial-character]]).

## Counterexample

**Given:** $V=\mathbb C^2$, $\lambda=(1,1)$, $\mu=(1)$ and $\nu=(1,1,1)$ ([[def-partition-young-diagram-and-conjugate-partition]]).

1.1 $S_{(1,1,1)}(\mathbb C^2)=0$, because $\ell((1,1,1))=3>2=\dim V$ [F1]. In rank $3$ the same module is nonzero, since $S_{(1,1,1)}(\mathbb C^3)=\Lambda^3\mathbb C^3\cong\mathbb C$ [F2]; so the vanishing is a fixed-rank phenomenon, not a vanishing of the coefficient. [F1, F2, given]

1.2 The coefficient is nonzero: $c^{(1,1,1)}_{(1,1),(1)}=1$, because the skew diagram $(1,1,1)/(1,1)$ is the single box $(3,1)$, the unique semistandard tableau of that shape and content $(1)$ carries the letter $1$, and its reading word $1$ is a lattice word. Equivalently, vertical Pieri [F3] assigns coefficient one to this shape; at rank $2$ its Schur module is zero, while at rank $3$ it is a nonzero summand. [F3, given, algebra]

2.1 At rank $r=2$ the honest decomposition is $S_{(1,1)}(\mathbb C^2)\otimes\mathbb C^2\cong S_{(2,1)}(\mathbb C^2)$ without the summand $S_{(1,1,1)}(\mathbb C^2)=0$ of step 1.1; its dimensions follow directly from tableaux: shape $(1,1)$ on two letters has its unique column $1,2$, while shape $(2,1)$ has that forced first column and a top-right entry $1$ or $2$ ([[prop-semistandard-tableaux-expand-schur-characters]]). Hence $\dim S_{(1,1)}(\mathbb C^2)\cdot\dim\mathbb C^2=1\cdot2=2=\dim S_{(2,1)}(\mathbb C^2)$, so no room remains for a second nonzero summand. Hence the term with $\ell(\nu)>r$ is a zero module: suppressing the bound $\ell(\nu)\le r$ and claiming that every $\nu$ with $c^\nu_{\lambda\mu}\ne0$ contributes a nonzero summand of the tensor product is false, although the coefficient itself is $1$ and the corresponding stable statement at large rank is true. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Consistently, the rank-$2$ Schur polynomial vanishes, $s_{(1,1,1)}(x_1,x_2)=0$, whereas $s_{(1,1)}s_{(1)}=s_{(2,1)}+s_{(1,1,1)}$ holds as an identity of symmetric functions; the specialization to two variables drops the second term by definition, and at rank $3$ it is a genuine summand. [F1, F2, step 2.1, algebra] ∎
