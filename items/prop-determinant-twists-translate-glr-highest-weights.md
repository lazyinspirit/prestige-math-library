---
id: prop-determinant-twists-translate-glr-highest-weights
kind: proposition
title: Determinant twists translate GL_r highest weights
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-schur-module-and-schur-polynomial-character
  - def-polynomial-glr-highest-weights-as-partitions
  - prop-semistandard-tableaux-expand-schur-characters
  - def-stable-schur-function-by-bialternants
  - cor-the-top-exterior-power-acts-by-the-determinant
  - cor-determinant-multiplicativity-from-the-top-exterior-power
  - def-partition-young-diagram-and-conjugate-partition
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "§12.1 Proposition 12.1, printed pp. 59--60 (irreducible rational representations of $GL(V)$ are $S_\\lambda(V)\\otimes\\det^k$, and the highest weight is translated by $k(1^r)$); Ch. 9 Remarks 9.4--9.6, printed pp. 51--52."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 5 §5.5.4 Theorem 5.5.22, printed pp. 273--275 (classification of irreducible rational representations of $GL_n$ by dominant integral weights and central character, including the determinant twist)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§29.1, printed pp. 155--157 (Schur polynomials in $r$ variables), §27.4, pp. 147--150 (Schur--Weyl modules)."
---

## Statement

Assume the Axiom of Choice. Let $V=\mathbb C^r$ as in
[[def-schur-module-and-schur-polynomial-character]], and let
$\det\colon\operatorname{GL}(V)\to\mathbb C^\times$ be the determinant
character. Write $\lambda_j=0$ for $j>\ell(\lambda)$ when using
row-length coordinates; these zeros are not parts.

(i) For every partition $\lambda$ with $\ell(\lambda)\le r$ and every integer
$k\ge-\lambda_r$, let $\lambda+(k^r)$ denote the partition obtained from
$(\lambda_1+k,\dots,\lambda_r+k)$ by deleting all trailing zeros; the
all-zero tuple gives $\varnothing$
([[def-partition-young-diagram-and-conjugate-partition]]). Then one has
$$S_{\lambda+(k^r)}(V)\cong S_\lambda(V)\otimes\det{}^k$$
as rational $\operatorname{GL}(V)$-modules, where $\det^k$ for $k<0$ is the
$|k|$-fold tensor power of the dual of the one-dimensional module
$\det=\Lambda^rV$ ([[cor-the-top-exterior-power-acts-by-the-determinant]],
[[cor-determinant-multiplicativity-from-the-top-exterior-power]]).

(ii) Consequently the irreducible rational representations of
$\operatorname{GL}(V)$ are, up to isomorphism, exactly the twists
$S_\lambda(V)\otimes\det{}^k$ with $\lambda$ a partition of at most $r$ parts
and $k\in\mathbb Z$; the irreducible rational representation of highest weight
$\eta=(\eta_1\ge\dots\ge\eta_r)\in\mathbb Z^r$ is
$S_{\bar\eta}(V)\otimes\det{}^{\eta_r}$, where $\bar\eta$ is obtained from
$(\eta_1-\eta_r,\dots,\eta_r-\eta_r)$ by deleting all trailing zeros,
again giving $\varnothing$ if every coordinate is zero.

## Facts & Assumptions

**Given:** AC, $V=\mathbb C^r$, the diagonal torus and its characters $x^\alpha$, the one-dimensional determinant module $\det=\Lambda^rV$ with character $x_1\cdots x_r$, the Laurent character ring $\mathbb Z[x_1^{\pm1},\dots,x_r^{\pm1}]$ in which characters of rational $\operatorname{GL}(V)$-modules are expanded, and the Schur modules $S_\lambda(V)$ ([[def-schur-module-and-schur-polynomial-character]], [[cor-the-top-exterior-power-acts-by-the-determinant]]).

[F1] $\operatorname{ch}S_\lambda(V)=s_\lambda(x_1,\dots,x_r)$ for $\ell(\lambda)\le r$ and $S_\lambda(V)=0$ for $\ell(\lambda)>r$; characters of finite-dimensional rational modules are additive over direct sums and multiplicative over tensor products, and the character of $\det^k$ is $(x_1\cdots x_r)^k$ for every $k\in\mathbb Z$ ([[prop-semistandard-tableaux-expand-schur-characters]], [[def-schur-module-and-schur-polynomial-character]], [[cor-the-top-exterior-power-acts-by-the-determinant]], [[cor-determinant-multiplicativity-from-the-top-exterior-power]]).

[F2] Bialternant description: for a partition $\eta$ with $\ell(\eta)\le r$, $s_\eta(x_1,\dots,x_r)=a_{\eta+\rho_r}/a_{\rho_r}$ with $\rho_r=(r-1,\dots,0)$ and $a_\zeta=\det(x_i^{\zeta_j})$ ([[def-stable-schur-function-by-bialternants]]).

[F3] Classification of irreducible rational representations: the irreducible rational $\operatorname{GL}(V)$-modules are exactly the modules $S_\lambda(V)\otimes\det^k$ with $\ell(\lambda)\le r$, $k\in\mathbb Z$, and the highest weight of $S_\lambda(V)\otimes\det^k$ is $\lambda+k(1^r)$; two irreducible rational modules with the same highest weight are isomorphic (Goodman--Wallach Theorem 5.5.22; Seynnaeve §12.1 Proposition 12.1). Every $S_\lambda(V)$ is a polynomial irreducible of highest weight $\lambda$ ([[def-polynomial-glr-highest-weights-as-partitions]]).

## Proof

1.1 Determinant scaling of the alternant. Put $\tau=\lambda+(k^r)$ with the zero-removal convention in (i). Since $k\ge-\lambda_r$, the shifted coordinates are weakly decreasing and nonnegative, so $\tau$ is a partition with at most $r$ parts. After padding its coordinates back to length $r$, $\tau_j=\lambda_j+k$. Thus every entry in row $i$ of the alternant matrix for $\lambda+\rho_r$ is multiplied by $x_i^k$ to obtain the matrix for $\tau+\rho_r$, giving $$a_{\tau+\rho_r}=(x_1\cdots x_r)^k a_{\lambda+\rho_r}.$$ Dividing by $a_{\rho_r}$ in the Laurent rational function field and applying [F2] yields $$s_\tau(x_1,\dots,x_r)=(x_1\cdots x_r)^k s_\lambda(x_1,\dots,x_r).$$ This identity is valid also for negative $k$; the left side is a polynomial because the shifted coordinates are nonnegative. [F2, given, algebra]

2.1 By [F1] and step 1.1, $\operatorname{ch}(S_\lambda(V)\otimes\det^k)=s_\lambda(x)(x_1\cdots x_r)^k=s_\tau(x)=\operatorname{ch}S_\tau(V)$. Tensoring with the one-dimensional character $\det^k$ preserves invariant subspaces: each representing operator is multiplied by a nonzero scalar. Hence $S_\lambda(V)\otimes\det^k$ is irreducible, and its highest weight is $(\lambda_1+k,\dots,\lambda_r+k)$, since a highest weight vector is multiplied on the diagonal torus by $(x_1\cdots x_r)^k$ and $\det^k$ is trivial on the upper unipotent subgroup. The polynomial irreducible $S_\tau(V)$ has the same padded highest weight by [F3]. Highest-weight uniqueness in [F3] gives the isomorphism in (i). [F1, F3, step 1.1, algebra]

3.1 By [F3] every irreducible rational module is $S_\lambda(V)\otimes\det^k$ for a partition $\lambda$ of at most $r$ parts and $k\in\mathbb Z$, and conversely each such twist is irreducible of highest weight $(\lambda_1+k,\dots,\lambda_r+k)$. For a dominant integral highest weight $\eta$, take $k=\eta_r$ and form $\bar\eta$ by deleting the trailing zeros of $(\eta_1-\eta_r,\dots,\eta_r-\eta_r)$. This is a partition, including $\varnothing$ when all coordinates vanish, and its padded coordinates satisfy $\bar\eta_j+k=\eta_j$. Thus $S_{\bar\eta}(V)\otimes\det^{\eta_r}$ has highest weight $\eta$ and is the required irreducible by [F3]. The parametrisation with padded last coordinate $\lambda_r=0$ is unique: then $k=\eta_r$ and the remaining positive coordinates determine $\lambda$. Arbitrary pairs $(\lambda,k)$ need not be unique. [F3, step 2.1, algebra] ∎
