---
id: lem-finite-index-restriction-semisimplicity-descends-by-coset-averaging
kind: lemma
title: Finite-index descent of semisimplicity by coset averaging
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-semisimple-module
  - thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules
  - thm-schurs-lemma-for-modules
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is added; the representation is finite-dimensional and the coset set is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Peter Webb, A Course in Finite Group Representation Theory
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
      locator: Theorem 1.2.1 finite-group averaging background, as cited by the existing local Maschke item. The finite-index variant is proved here; no remote source reading or external theorem input claimed.
---

## Statement

Let $G$ be a group, let $H\le G$ have finite index $m$, let $F$ be a field in which $m1_F\ne0$, and let $V$ be a finite-dimensional $F$-representation of $G$. If the restriction of $V$ to $H$ is semisimple, then $V$ is semisimple as a $G$-representation. More explicitly, every $G$-stable subspace $W\subseteq V$ has a $G$-equivariant $F$-linear retraction $Q:V\to W$. For any $H$-equivariant retraction $P:V\to W$, it is given by the representative-independent finite sum
$$Q=\frac1m\sum_{gH\in G/H}\rho(g)P\rho(g)^{-1}.$$
No normality of $H$ or finiteness of $G$ is required. For a continuous representation on a finite-dimensional vector space over a topological field with its usual finite-dimensional topology, the resulting projection and complementary representation are continuous.

## Facts & Assumptions

**Given:** The group, finite-index subgroup, field and finite-dimensional representation in the Statement.

[F1] A semisimple module is a direct sum of simple modules, including the empty sum for zero. [[def-semisimple-module]]

[F2] A finitely generated semisimple module is a finite direct sum of simple modules. [[thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules]]

[F3] A nonzero homomorphism between simple modules is an isomorphism. [[thm-schurs-lemma-for-modules]]

## Proof

1.1 Regard the restricted representation as a module for the group algebra $F[H]$. A finite $F$-basis generates it over that algebra. By [F2] it has a finite decomposition $V=S_1\oplus\cdots\oplus S_n$ into simple $H$-submodules. Every module map considered below is $F$-linear. [F1, F2, given, algebra]

2.1 Every $H$-submodule $N$ of this finite direct sum has an $H$-stable complement. Prove this by induction on $n$, with $N=0$ immediate. For $N\ne0$, choose a nonzero submodule $T\subseteq N$ of smallest positive $F$-dimension; it is simple. Some coordinate projection $T\to S_j$ is nonzero, hence is an isomorphism by [F3]. Its inverse followed by that coordinate projection is an $H$-linear retraction $q:V\to T$, with kernel $V'=\bigoplus_{i\ne j}S_i$. Thus $V=T\oplus V'$ and $N=T\oplus(N\cap V')$. Induction gives a complement $C$ to $N\cap V'$ inside $V'$, and then $V=N\oplus C$. This induction uses only finitely many choices, each in a finite-dimensional problem. [F1, F3, step 1.1, induction, algebra]

3.1 Apply step 2.1 to the $H$-submodule $W$ to obtain the projection $P:V\to W$ along its $H$-stable complement. It commutes with every $\rho(h)$ for $h\in H$, has image in $W$, and restricts to the identity on $W$. If $g$ is replaced by $gh$, then $\rho(gh)P\rho(gh)^{-1}=\rho(g)P\rho(g)^{-1}$. The displayed coset sum is therefore well-defined independently of representatives, and its denominator is invertible in $F$. [given, step 2.1, construct, algebra]

4.1 Each conjugate projection has image in $W$, because $W$ is $G$-stable, and acts as the identity on $W$. Their average $Q$ is consequently a retraction onto $W$. For $a\in G$, conjugating the coset sum by $\rho(a)$ just permutes its terms through the bijection $gH\mapsto agH$. Hence $Q$ commutes with $G$, and $V=W\oplus\ker Q$ is a direct sum of $G$-submodules. This works for a nonnormal subgroup without passing to a normal core. [given, step 3.1, algebra]

5.1 To obtain a finite simple decomposition of $V$ itself, if $V\ne0$ choose a nonzero $G$-submodule of smallest dimension; it is simple. Step 4.1 splits it off. Every submodule of the remaining complement still has a retraction, by restricting a retraction from $V$ to that complement. Induction on dimension therefore decomposes the complement and then $V$ into finitely many simple $G$-modules. For $V=0$ the empty sum works by [F1]. Thus the semisimplicity conclusion has precisely its stated meaning. [F1, step 4.1, induction, algebra]

6.1 In the topological case all the maps $P$, $Q$ and their restrictions are finite matrices over the given field and are continuous in the usual finite-dimensional topology. The complementary subspace is invariant, and its action is the restriction of the given continuous action. The cases $m=1$, $W=0$ and $W=V$ give respectively the original retraction, the zero projection and the identity projection. No infinite selection or integration has entered the construction. [given, step 3.1, step 4.1, step 5.1, algebra] ∎
