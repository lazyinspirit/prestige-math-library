---
id: prop-semistandard-tableaux-expand-schur-characters
kind: proposition
title: Semistandard tableaux expand Schur characters
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-schur-module-and-schur-polynomial-character
  - def-polynomial-glr-highest-weights-as-partitions
  - thm-schur-weyl-decomposition-with-length-cutoff
  - thm-youngs-rule-for-permutation-modules
  - def-young-subgroup-tabloid-and-permutation-module
  - def-semistandard-tableau-and-kostka-number
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - cor-schurs-lemma-for-irreducible-representations
  - def-partition-young-diagram-and-conjugate-partition
  - def-stable-schur-function-by-bialternants
  - thm-skew-jacobi-trudi-and-tableau-expansion
  - lem-bender-knuth-involutions-on-semistandard-tableaux
  - def-commuting-symmetric-and-linear-actions-on-tensor-power
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
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 8 §8.1.2 Corollary 8.1.7, printed pp. 380--381 (the irreducible $GL_n$ module $F^\\lambda_n$ has a basis $\\{u_A\\}$ indexed by semistandard tableaux $A$ of shape $\\lambda$ and weight $\\nu$, with $u_A$ of weight $\\nu$); Ch. 5 §5.5.4 Theorem 5.5.22, printed pp. 273--275."
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 11 Theorems 11.6--11.8, printed pp. 54--56 (character of the Schur module is the Schur polynomial in the displayed variables; weight multiplicities from semistandard tableaux)."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §5"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§I.5 Example 5, printed pp. 74--76 (Schur functions as generating functions of semistandard tableaux)."
---

## Statement

Assume the Axiom of Choice. Let $V=\mathbb C^r$, $r\ge1$
([[def-schur-module-and-schur-polynomial-character]]), and let $\lambda$ be a
partition with $\ell(\lambda)\le r$
([[def-partition-young-diagram-and-conjugate-partition]]). Then
$$\operatorname{ch}S_\lambda(V)=\sum_T x^{\operatorname{wt}(T)},$$
the sum over all semistandard tableaux $T$ of shape $\lambda$ with entries in
$\{1,\dots,r\}$, where $\operatorname{wt}(T)=(a_1,\dots,a_r)$ records the
multiplicity of each entry
([[def-semistandard-tableau-and-kostka-number]],
[[def-skew-diagram-and-semistandard-skew-tableau]]). Moreover this polynomial
is the rank-$r$ Schur polynomial $s_\lambda(x_1,\dots,x_r)$ of
[[def-stable-schur-function-by-bialternants]], i.e.
$$s_\lambda(x_1,\dots,x_r)=\frac{a_{\lambda+\delta_r}(x_1,\dots,x_r)}{a_{\delta_r}(x_1,\dots,x_r)}=\sum_Tx^{\operatorname{wt}(T)}$$
for $\ell(\lambda)\le r$, while $s_\lambda(x_1,\dots,x_r):=0$ and
$\operatorname{ch}S_\lambda(V)=0$ when $\ell(\lambda)>r$. In particular
$S_\lambda(V)\ne0$ if and only if $\ell(\lambda)\le r$, and the multiplicity of
the weight $\alpha$ in $S_\lambda(V)$ equals the number of semistandard
tableaux of shape $\lambda$ and weight $\alpha$; by
[[lem-bender-knuth-involutions-on-semistandard-tableaux]] this polynomial is
symmetric in $x_1,\dots,x_r$.

## Facts & Assumptions

**Given:** AC, $V=\mathbb C^r$ with basis $e_1,\dots,e_r$, a partition $\lambda$ with $n=|\lambda|$ and $\ell(\lambda)\le r$, and the module $S_\lambda(V)=\operatorname{Hom}_{S_n}(S^\lambda,V^{\otimes n})$ of [[def-schur-module-and-schur-polynomial-character]].

[F1] Schur--Weyl decomposition: $V^{\otimes n}\cong\bigoplus_{\mu\vdash n,\ \ell(\mu)\le r}S^\mu\otimes S_\mu(V)$ as $(S_n\times\operatorname{GL}(V))$-modules, and for every $\mu$ with $\ell(\mu)\le r$ the module $S_\mu(V)$ is a nonzero irreducible polynomial $\operatorname{GL}(V)$-module, while $S_\mu(V)=0$ for $\ell(\mu)>r$ ([[thm-schur-weyl-decomposition-with-length-cutoff]] parts (1) and (2), [[def-polynomial-glr-highest-weights-as-partitions]]).

[F2] Young's rule: for partitions $\lambda,\nu\vdash n$ the multiplicity of the Specht module $S^\lambda$ in the Young permutation module $M^\nu$ equals the Kostka number $K_{\lambda\nu}$, the number of semistandard tableaux of shape $\lambda$ and weight $\nu$ ([[thm-youngs-rule-for-permutation-modules]], [[def-young-subgroup-tabloid-and-permutation-module]], [[def-semistandard-tableau-and-kostka-number]]); the Specht modules $S^\lambda$, $\lambda\vdash n$, form a complete set of pairwise non-isomorphic simple $\mathbb C S_n$-modules ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] $V^{\otimes n}$ has the basis of elementary tensors $e_{i_1}\otimes\cdots\otimes e_{i_n}$ on which $S_n$ acts by place permutations; the diagonal torus of $\operatorname{GL}(V)$ acts on $e_{i_1}\otimes\cdots\otimes e_{i_n}$ by the weight whose $j$-th component is the number of indices $i_k$ equal to $j$ ([[def-commuting-symmetric-and-linear-actions-on-tensor-power]], [[def-schur-module-and-schur-polynomial-character]]).

[F4] At rank $r$ the tableau expansion $s_\lambda(x_1,\dots,x_r)=\sum_Tx^{\operatorname{wt}(T)}$ holds over semistandard tableaux of shape $\lambda$ with entries in $\{1,\dots,r\}$ when $\ell(\lambda)\le r$, and $s_\lambda(x_1,\dots,x_r)=0$ when $\ell(\lambda)>r$; the left-hand side is the bialternant quotient of [[def-stable-schur-function-by-bialternants]] ([[thm-skew-jacobi-trudi-and-tableau-expansion]] with $\mu=\varnothing$).

[F5] A homomorphism between non-isomorphic irreducible $\mathbb C S_n$-modules is zero. Also $\operatorname{End}_{S_n}(S^\lambda)=\mathbb C$: any endomorphism has an eigenvalue $z$ over $\mathbb C$, and its difference from $zI$ has a nonzero kernel, so irreducibility makes that difference zero. Consequently the multiplicity of $S^\lambda$ in a direct sum of simples equals the dimension of its Hom-space into that sum ([[cor-schurs-lemma-for-irreducible-representations]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

## Proof

1.1 First fix a partition $\nu\vdash n$ with at most $r$ parts, padded by zeros to length $r$. By [F3] the weight-$\nu$ subspace $E_\nu$ of $V^{\otimes n}$ has as its basis the elementary tensors whose index word has content $\nu$. The group $S_n$ permutes these basis vectors by place permutations, and the action on the basis is transitive (any word with content $\nu$ is a rearrangement of $1^{\nu_1}\cdots r^{\nu_r}$), with the stabilizer of a word of content $\nu$ being the subgroup of permutations preserving the letter classes, a conjugate of the Young subgroup $S_\nu$; hence $E_\nu$ is isomorphic to the Young permutation module $M^\nu$ ([[def-young-subgroup-tabloid-and-permutation-module]]). [F3, given, construct]

2.1 By Young's rule [F2] the multiplicity of the simple module $S^\lambda$ in $E_\nu\cong M^\nu$ is the Kostka number $K_{\lambda\nu}$, which by [[def-semistandard-tableau-and-kostka-number]] is the number of semistandard tableaux of shape $\lambda$ and weight $\nu$. [F1, F2, step 1.1, algebra]

3.1 Compare the $S_n$-isotypic $S^\lambda$-component of $V^{\otimes n}$. By the Schur--Weyl decomposition [F1] and non-isomorphism of distinct Specht modules [F2], the $S^\lambda$-isotypic component of $V^{\otimes n}$ is $S^\lambda\otimes S_\lambda(V)$, on which $S_n$ acts on the first factor alone; therefore the $S^\lambda$-multiplicity in $E_\nu$ equals $\dim S_\lambda(V)_\nu$, the dimension of the weight-$\nu$ space of the $\operatorname{GL}(V)$-module $S_\lambda(V)$. Combined with step 2.1 this gives $$\dim S_\lambda(V)_\nu=K_{\lambda\nu}=\#\{T:\ T\text{ semistandard of shape }\lambda\text{ and weight }\nu\}.$$ [F1, F2, F5, step 1.1, step 2.1, algebra]

4.1 For an arbitrary weight $\alpha\in\mathbb Z_{\ge0}^r$ of total $n$, sort its entries into a partition $\nu$. A permutation matrix carries the weight-$\alpha$ space of $S_\lambda(V)$ isomorphically onto its weight-$\nu$ space, by conjugating the diagonal torus. The Bender--Knuth involutions of [[lem-bender-knuth-involutions-on-semistandard-tableaux]] likewise give a bijection between tableaux of weights $\alpha$ and $\nu$; use a product of adjacent transpositions sorting $\alpha$. Thus step 3.1 holds for every composition weight $\alpha$, with $K_{\lambda\alpha}$ denoting this tableau count. Summing these weight dimensions over all $\alpha$ and using the definition of the character of [[def-schur-module-and-schur-polynomial-character]] gives $\operatorname{ch}S_\lambda(V)=\sum_\alpha K_{\lambda\alpha}x^\alpha=\sum_Tx^{\operatorname{wt}(T)}$, summed over semistandard tableaux of shape $\lambda$ with entries in $\{1,\dots,r\}$. By the tableau expansion of [F4] this equals $s_\lambda(x_1,\dots,x_r)$; the case $\ell(\lambda)>r$ is the vanishing definition $S_\lambda(V)=0$, matched by $s_\lambda(x_1,\dots,x_r)=0$ in [F4]. In particular $\operatorname{ch}S_\lambda(V)=0$ exactly when $\ell(\lambda)>r$ or $\lambda$ has no semistandard tableau with entries in $\{1,\dots,r\}$; the latter never happens for $\ell(\lambda)\le r$ (fill row $i$ with the letter $i$), so $S_\lambda(V)\ne0$ if and only if $\ell(\lambda)\le r$, and the multiplicity of each weight $\alpha$ in $S_\lambda(V)$ is the number of semistandard tableaux of shape $\lambda$ and weight $\alpha$. [F1, F4, F5, step 3.1, algebra]

5.1 The polynomial $\sum_Tx^{\operatorname{wt}(T)}$ is symmetric in $x_1,\dots,x_r$ by [[lem-bender-knuth-involutions-on-semistandard-tableaux]], consistently with $s_\lambda$ being the bialternant quotient, whose numerator and denominator are alternating and whose quotient is therefore a symmetric polynomial. [F4, step 4.1, algebra] ∎
