---
id: lem-regular-trace-kernel-descends-the-complex-socle
kind: lemma
title: "Rational descent of a complex monodromy socle"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-socle-of-a-module, def-semisimple-module,
       thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple,
       thm-wedderburn-artin-theorem, thm-simple-modules-over-semisimple-rings,
       thm-finite-length-semisimple-module-characterizations,
       lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; SS4.2.6-4.2.7, printed pp. 45-46 (the rational-descent step abbreviated there and supplied here)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
---

## Statement

Let $A\subseteq\operatorname{End}_{\mathbb Q}(V)$ be a finite-dimensional
rational algebra. The socle ([[def-socle-of-a-module]]) of the
$A_{\mathbb C}$-module $V_{\mathbb C}$ is defined over $\mathbb Q$: it is
$W\otimes\mathbb C$ for a rational $A$-submodule $W\subseteq V$. If $V\ne0$,
then $W\ne0$.

## Facts & Assumptions

**Given:** A finite-dimensional unital rational algebra $A$ acting on a $\mathbb Q$-vector space $V$, with $B=A_{\mathbb C}$ and $J=J(B)$ its Jacobson radical; here $A_{\mathbb C}=A\otimes_{\mathbb Q}\mathbb C$ acts on $V_{\mathbb C}$, and left multiplication $L_b$ of $B$ is the $\mathbb C$-linear endomorphism $x\mapsto bx$ of $B$.

[F1] For a finite-dimensional algebra over a field the Jacobson radical is a nilpotent two-sided ideal and the quotient by it is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[F2] Over $\mathbb C$ the regular trace form $(b,c)=\operatorname{tr}(L_{bc})$ is nondegenerate if and only if the finite-dimensional unital $\mathbb C$-algebra is semisimple; for a semisimple algebra $B\cong\prod_iM_{d_i}(\mathbb C)$ the simple left modules are the column modules and the trace form is the sum of the nondegenerate matrix trace pairings [[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]]. More generally a nonzero unital semisimple ring is a product of matrix rings over division rings ([[thm-wedderburn-artin-theorem]]) whose simple left modules are the column modules, one isomorphism class per factor ([[thm-simple-modules-over-semisimple-rings]]).

[F3] For a finite-length module the sum-of-simples, direct-sum and complement characterizations of semisimplicity are equivalent ([[thm-finite-length-semisimple-module-characterizations]]); a module is semisimple when it is an internal direct sum of simple submodules, the empty sum included ([[def-semisimple-module]]); the socle is the sum of all simple submodules ([[def-socle-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Identify the radical of the regular trace form with $J$. The ideal $J$ is nilpotent and $B/J$ is semisimple, by [F1]. Choose a composition series of the left regular $B$-module; the simple factors are killed by $J$, since $JS=S$ for a simple factor would give $J^kS=S$ for every $k$, contradicting nilpotence. Each simple type of $B/J$ occurs among these factors: $B/J$ is a quotient of $B$, so its left regular module is a quotient of the regular module and its composition factors, namely $d_i\ge1$ copies of each column module, occur in the series. In a basis adapted to the series the diagonal blocks of $L_b$ are the factor actions, so $\operatorname{tr}(L_b)=\sum_im_i\operatorname{tr}(\overline b_i)$ with multiplicities $m_i\ge1$. Therefore the radical $\{b:(b,c)=0\text{ for all }c\}$ of the trace form is exactly $J$: it contains $J$, and on $B/J$ the induced form is the sum over $i$ of $m_i$ times the nondegenerate matrix trace pairing of the factor $M_{d_i}(\mathbb C)$, which is nondegenerate because $m_i\ne0$ and $\mathbb C$ has characteristic zero, by [F2]. [F1, F2, algebra]

2.1 Descend the kernel to a rational subspace. Evaluate the trace form in the rational basis $a_1,\dots,a_d$ of $A$: the Gram matrix $T=(\operatorname{tr}(L_{a_ia_j}))_{i,j}$ has rational entries, because each $L_{a_ia_j}$ is the extension to $\mathbb C$ of the rational endomorphism of $A$ given by left multiplication by $a_ia_j$, and the trace of such an extension is the trace of a rational matrix. By step 1.1 its kernel in $B$ is $J$. Let $J_0=\{a\in A:Ta=0\}\subseteq A$ be the kernel computed in $\mathbb Q$-coordinates, a rational subspace; then $J_0\otimes\mathbb C=J$, since a rational linear system has the same solutions after extension of scalars and its solution space over $\mathbb C$ is the complexification of its rational solution space. Since $J$ is a two-sided ideal of $B$, the intersection $J_0=J\cap A$ is a two-sided ideal of $A$, and $W=\{v\in V:J_0v=0\}$ is a rational $A$-submodule of $V$. [step 1.1, given, algebra]

3.1 Identify $W_{\mathbb C}$ with the socle. Because $J_0\otimes\mathbb C=J$, one has $W_{\mathbb C}=\{v\in V_{\mathbb C}:Jv=0\}$: choose a finite rational basis $j_1,\ldots,j_a$ of $J_0$, so $W$ is the kernel of $V\to V^a$, $v\mapsto(j_1v,\ldots,j_av)$. Write an element of $V_{\mathbb C}$ as $\sum_{i=1}^k v_i\otimes\lambda_i$ with the finitely many $\lambda_i$ rationally independent, obtained by reducing the span of its original coefficients. The equations $j_a\sum_i v_i\otimes\lambda_i=0$ imply $j_av_i=0$ for each $a,i$, by comparing coordinates in a finite rational basis of the span of the vectors $j_av_i$. Thus it lies in $W\otimes\mathbb C$; the reverse inclusion is immediate. No basis of an infinite-dimensional space is selected. Every simple $B$-submodule $S\subseteq V_{\mathbb C}$ is killed by $J$: otherwise $JS=S$, and then $J^kS=S$ for all $k$, contradicting nilpotence of $J$. Hence the socle of $V_{\mathbb C}$ is contained in $\{v:Jv=0\}$. Conversely $\{v:Jv=0\}$ is a module over the semisimple algebra $B/J$, and it is a sum of simple modules: for each of its vectors $v$, the cyclic module $(B/J)v$ is a quotient of the regular $B/J$-module, and that regular module is a finite direct sum of the column modules of [F2], so its image is a sum of simple modules. Each cyclic module is finite-dimensional, so [F3] makes its sum of simple images a finite direct sum. Every vector of $\{v:Jv=0\}$ therefore belongs to a sum of simple $B$-submodules, and this annihilator, containing every simple submodule, is exactly the socle. This argument does not require $V$ to be finite-dimensional. Thus the socle of $V_{\mathbb C}$ equals $W_{\mathbb C}=W\otimes\mathbb C$, a rational $A$-submodule complexified. [F2, F3, step 2.1, algebra]

4.1 Nonvanishing for nonzero $V$. If $V\ne0$ then $V_{\mathbb C}\ne0$. Let $n$ be an exponent with $J^n=0$, which exists by nilpotence, and let $r\ge1$ be least with $J^rV_{\mathbb C}=0$; such an $r$ exists since $J^n=0$. Then $J^{r-1}V_{\mathbb C}\ne0$ by minimality of $r$, and $J\cdot J^{r-1}V_{\mathbb C}=J^rV_{\mathbb C}=0$, so the nonzero subspace $J^{r-1}V_{\mathbb C}$ is contained in the socle, which is therefore nonzero. By step 3.1 the socle is $W\otimes\mathbb C$, so $W\ne0$. [F1, F3, step 3.1, algebra] ∎

## Source notes

This explicit regular-trace argument descends the full complex socle, used here in place of Deligne II 4.2.7’s sum of minimal-dimensional complex subsystems. It does not identify these two sums. It is separate from the characteristic-zero scalar-extension lemma and does not assume that $V_{\mathbb C}$ is semisimple; no choice principle is used.
