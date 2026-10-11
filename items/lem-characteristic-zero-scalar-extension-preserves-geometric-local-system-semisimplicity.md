---
id: lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity
kind: lemma
title: "Characteristic-zero scalar extension of geometric semisimplicity"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-local-system-of-r-modules-and-its-pullback, def-semisimple-module,
       def-semisimple-ring,
       lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras,
       thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple,
       thm-finite-length-semisimple-module-characterizations,
       thm-nilpotent-endomorphism-characterisations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; SS4.2.3 and 4.2.6, printed pp. 44-46 (semisimplicity and its coefficient-field independence)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
---

## Statement

Let $S$ be connected and let $\mathcal V_{\mathbb Q}$ be a finite-rank rational
local system ([[def-local-system-of-r-modules-and-its-pullback]]). If
$\mathcal V_{\mathbb Q}\otimes\mathbb C$ is semisimple, then
$\mathcal V_{\mathbb Q}\otimes k$ is semisimple for every characteristic-zero
field $k$ ([[def-semisimple-module]]). In particular this applies to rational
Gauss-Manin local systems after complex geometric semisimplicity has been
proved. The field $k$ need not embed in $\mathbb C$. Semisimplicity means that
every monodromy-invariant subspace has an invariant complement, equivalently
that the monodromy module is a finite direct sum of simple modules.

## Facts & Assumptions

**Given:** A connected base $S$. Work on each path component separately, fixing a point $s$ in that component and the finite-dimensional $\mathbb Q$-vector space $V=\mathcal V_{\mathbb Q,s}$ with its monodromy action, so that invariant subspaces of $V$ are exactly the submodules of the monodromy module and semisimplicity on this path component is semisimplicity of that module ([[def-local-system-of-r-modules-and-its-pullback]]).

[F1] For a finite-dimensional algebra over a field the Jacobson radical $J$ is a nilpotent two-sided ideal and the quotient algebra is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]); a unital ring is semisimple exactly when its left regular module is a direct sum of simple modules ([[def-semisimple-ring]]).

[F2] Over $\mathbb C$ the regular trace form $(b,c)=\operatorname{tr}(L_{bc})$ is nondegenerate if and only if $B$ is semisimple; if $B$ is semisimple then $B\cong\prod_iM_{d_i}(\mathbb C)$ and the trace form is the sum of the nondegenerate matrix trace pairings ([[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]]).

[F3] A nilpotent endomorphism of a finite-dimensional vector space has a strictly upper-triangular matrix in some ordered basis, hence trace zero ([[thm-nilpotent-endomorphism-characterisations]]).

[F4] For a finite-length module, sum-of-simples, direct-sum and invariant-complement characterizations of semisimplicity are equivalent ([[thm-finite-length-semisimple-module-characterizations]]), and semisimple means an internal direct sum of simple submodules, the empty sum included ([[def-semisimple-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $A\subseteq\operatorname{End}_{\mathbb Q}(V)$ be the $\mathbb Q$-span of the monodromy matrices. It contains the identity and is closed under multiplication, because a product of monodromy matrices is a monodromy matrix, so it is a finite-dimensional unital $\mathbb Q$-algebra. For every field $E$ over $\mathbb Q$ the canonical map $A\otimes_{\mathbb Q}E\to\operatorname{End}_E(V\otimes_{\mathbb Q}E)$ is injective: rationally independent matrices stay independent after extending scalars, as one sees by comparing coordinates in a rational basis of $V$. Its image is the $E$-span of the monodromy matrices, so submodules for this image are exactly the monodromy-invariant subspaces of $V\otimes_{\mathbb Q}E$; in particular the action of $A_{\mathbb C}=A\otimes_{\mathbb Q}\mathbb C$ on $V_{\mathbb C}$ is faithful. [given, algebra]

2.1 Assume $V_{\mathbb C}$ is semisimple. Let $J=J(A_{\mathbb C})$. If $T\subseteq V_{\mathbb C}$ is a simple submodule, then $JT$ is a submodule equal to $0$ or $T$, and $JT=T$ would give $J^kT=T$ for every $k\ge1$, contradicting the nilpotence of $J$ from [F1]. Hence $J$ kills every simple summand of $V_{\mathbb C}$ and therefore kills all of $V_{\mathbb C}$, since a semisimple module is a direct sum of simple submodules by [F4]. Faithfulness of the action, established in step 1.1, then forces $J=0$: an element of $J$ acts as zero on $V_{\mathbb C}$. Therefore $A_{\mathbb C}$ is semisimple. [F1, F4, step 1.1, algebra]

3.1 Choose the rational basis $a_1,\dots,a_d$ of $A$ and let $T=(\operatorname{tr}(L_{a_ia_j}))_{i,j}$ be the Gram matrix of the regular trace form of $A$ in this basis. Its entries are rational: passing from $A$ to $A_{\mathbb C}$ extends the rational matrix of left multiplication by $a_ia_j$ to a complex matrix with the same trace. By step 2.1 and [F2] the regular trace form of $A_{\mathbb C}$ is nondegenerate, so $\det T\ne0$ as a complex number, and since $\det T\in\mathbb Q$ it is a nonzero rational number. For every field $k$ the scalar extension $\mathbb Q\hookrightarrow k$ therefore makes $T$, viewed over $k$, a nondegenerate matrix. No embedding of $k$ into $\mathbb C$ is used. [F2, step 2.1, algebra]

4.1 Let $k$ be any characteristic-zero field and put $A_k=A\otimes_{\mathbb Q}k$. For $x\in J(A_k)$ and $b\in A_k$ the product $xb$ lies in the nilpotent ideal $J(A_k)$ by [F1], so $(xb)^n=0$ for some $n$ and the endomorphism $L_{xb}$ of $A_k$ is nilpotent; by [F3] its trace vanishes. Nondegeneracy of the extended matrix $T$ from step 3.1 then forces $x=0$, so $J(A_k)=0$. By [F1] the quotient $A_k/J(A_k)=A_k$ is a semisimple ring. [F1, F3, step 3.1, algebra]

5.1 Finally $V_k=V\otimes_{\mathbb Q}k$ is semisimple over $A_k$. Choose a $\mathbb Q$-basis $v_1,\dots,v_d$ of $V$. The map $(A_k)^d\to V_k$, $(x_1,\dots,x_d)\mapsto\sum_ix_iv_i$, is a surjective $A_k$-module homomorphism, and the regular module of the semisimple ring $A_k$ is a direct sum of simple modules by [F1]. Hence $V_k$ is a sum of images of simple modules, each of which is simple or zero, and $V_k$ has finite length over $k$; by [F4] it is a finite direct sum of simple modules, that is, semisimple. By step 1.1 this is exactly semisimplicity of the monodromy module, equivalently every invariant subspace has an invariant complement by [F4], which is semisimplicity of the local system $\mathcal V_{\mathbb Q}\otimes k$. The zero fiber is the empty direct sum and is included. [F1, F4, step 1.1, step 4.1, algebra] ∎

## Source notes

The scalar-extension argument is supplied locally from the complex regular-trace criterion of [F2]; it does not appeal to an unproved separable-algebra theorem and it never embeds the coefficient field $k$ into $\mathbb C$. The reduction is the one used in Deligne II 4.2.6 to pass from complex to rational coefficients.
