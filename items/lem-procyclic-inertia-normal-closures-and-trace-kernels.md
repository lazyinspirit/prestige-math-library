---
id: lem-procyclic-inertia-normal-closures-and-trace-kernels
kind: lemma
title: Procyclic inertia normal closures and trace kernels
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- def-pro-p-group
- def-p-adic-integers-as-compatible-residue-classes
- thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
- thm-external-semidirect-product-is-a-group
- thm-finite-products-of-compact-spaces
- thm-compactness-under-continuous-maps
- thm-compact-subset-of-a-hausdorff-space-is-closed
justified_by: []
proof_strategy: direct
axiom_use: AC is retained for the literal inverse-limit compactness supplier. CC
  and DC are explicit ambient hypotheses, with no further uses in this finite-list
  group calculation. No finite-residue classification or arithmetic input occurs.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: R. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Theorem3.2.13, complete proof printed81–82, read from the recovered
      189-page PDF. The inertia-generator computation is isolated here as an
      abstract compact-group lemma, without assuming its arithmetic realization.
verification: {}
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $X$ be an abelian pro-$p$ group and let $\Gamma=\{\gamma^z:z\in\mathbb Z_p\}\cong\mathbb Z_p$ act continuously on $X$ by automorphisms. Give $G=X\rtimes\Gamma$ the product topology, and write $X$ additively. Its canonical continuous $\mathbb Z_p$ scalar structure is defined by the finite abelian $p$-group quotients of $X$. Put $T=\gamma-1$ as an operator on $X$.

Fix a finite list $g_0=0,g_1,\ldots,g_r\in X$, where $r\ge0$, and put $s_i=g_i\gamma\in G$. For $n\ge0$, let $G_n=X\rtimes\Gamma^{p^n}$ and let $H_n$ be the smallest closed normal subgroup of $G_n$ containing every $s_i^{p^n}$. Set $Y_n=H_n\cap X$, and put
$$\omega_n=\gamma^{p^n}-1,\qquad \nu_n=\sum_{j=0}^{p^n-1}\gamma^j.$$
Then $G$ is a pro-$p$ group. Each $s_i$ has canonical continuous powers $s_i^z$ for $z\in\mathbb Z_p$, and projection identifies its closed generated subgroup with $\Gamma$. The normal-closure kernels satisfy
$$Y_0=TX+\sum_{i=1}^r\mathbb Z_pg_i,\qquad Y_n=\omega_nX+\sum_{i=1}^r\mathbb Z_p\nu_ng_i=\nu_nY_0.$$
All displayed sums are already closed finite sums. Replacing $\gamma$ by $\gamma^{p^m}$ gives the corresponding identity at any fixed base index $m$, with trace $\sum_{j=0}^{p^{n-m}-1}\gamma^{j p^m}$ for $n\ge m$. These are abstract group identities; no arithmetic realization of the $s_i$ or any bounded ordinary-coinvariant control map is asserted.

## Facts & Assumptions

**Given:** The group data, continuous action and finite list in the Statement.

[A1] AC, Countable Choice and DC are assumed. AC supplies the compactness clause in [F3]; no other choice step beyond finite selections is added. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] A pro-$p$ group is an inverse limit of finite $p$-groups with its inverse-limit topology. [[def-pro-p-group]]

[F2] The group $\mathbb Z_p$ is the compatible-residue inverse limit of $\mathbb Z/p^a\mathbb Z$. [[def-p-adic-integers-as-compatible-residue-classes]]

[F3] An inverse limit of finite discrete groups is Hausdorff and, under AC, compact. [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]

[F4] The external semidirect-product law is $(x,h)(y,k)=(x+h(y),hk)$ and makes the product a group. [[thm-external-semidirect-product-is-a-group]]

[F5] Finite products of compact topological spaces are compact, including the empty product. [[thm-finite-products-of-compact-spaces]]

[F6] Continuous images of compact topological spaces are compact; a continuous bijection from compact to Hausdorff is a homeomorphism. These clauses apply to general topological spaces, without a metric hypothesis. [[thm-compactness-under-continuous-maps]]

[F7] A compact subset of a Hausdorff space is closed. [[thm-compact-subset-of-a-hausdorff-space-is-closed]]

## Proof

1.1 By [F1]–[F3] and [A1], $X$ and $\Gamma$ are compact Hausdorff; [F5] makes their product compact. The law and inverse from [F4] are continuous by the Given continuous action, so $G$ is a compact Hausdorff topological group. Finite-coordinate kernels give a basis of open subgroups $U$ of $X$ with finite abelian $p$-group quotients. For such a $U$, continuity of the action at each $(h,0)$ gives a neighborhood $V_h$ of $h\in\Gamma$ and an open subgroup $W_h$ of $X$ such that $h'W_h\subseteq U$ for $h'\in V_h$. A finite subcover of the $V_h$ gives an open $W$ contained in all those $W_h$, hence $hW\subseteq U$ for every $h\in\Gamma$. Therefore $U'=\bigcap_{h\in\Gamma}hU$ contains $W$ and is an open $\Gamma$-stable subgroup of $X$, contained in $U$. Its quotient is a finite abelian $p$-group. [A1, F1, F2, F3, F4, F5, given, construct, algebra]

2.1 The action on the finite set $X/U'$ has open kernel in $\Gamma$. To see this directly, choose its finitely many representatives and intersect the open neighborhoods of $1$ on which each representative's image modulo $U'$ is fixed. This intersection fixes the quotient. By [F2] it contains $\Gamma^{p^k}$ for some $k$, and $k$ may be increased. The pairs $(U',k)$ define finite quotient groups $(X/U')\rtimes(\Gamma/\Gamma^{p^k})$, all of $p$-power order. Their kernels form a neighborhood basis in $G$, by step 1.1 and the product topology. They separate points. Every compatible tuple of their quotient cosets is realized in $G$: each finite list of conditions has a common refinement and hence a nonempty coset, and the corresponding closed cosets have the finite-intersection property in compact $G$. Thus $G$ is their inverse limit, with the same topology given by that basis. It is pro-$p$ by [F1]. [F1, F2, step 1.1, construct, algebra]

3.1 For $s\in G$, in each of these finite $p$-group quotients its cyclic subgroup has $p$-power order. The map $z\mapsto s^{z\bmod p^a}$ in that quotient is defined for any $p^a$ killing that cyclic subgroup and is independent of a larger exponent. These compatible coordinates define a unique $s^z\in G$ by step 2.1, continuously in $z\in\mathbb Z_p$ by [F2]. It is a homomorphism because its finite coordinates are, and extends integer powers. Its compact image is closed by [F6]–[F7] and equals the closed subgroup generated by $s$: integers are dense in $\mathbb Z_p$ since every compatible residue cylinder has an integer representative. For $s=s_i$, projection sends $s_i^z$ to $\gamma^z$ in every finite coordinate, hence exactly. Thus this power map is injective, and its image projects continuously bijectively to $\Gamma$, with continuous inverse $\gamma^z\mapsto s_i^z$. For $x\in X$ the same construction is its canonical scalar multiple $zx$; the resulting map $\mathbb Z_p\times X\to X$ is continuous, since every finite abelian quotient uses only a finite residue of $z$. [F2, F6, F7, step 2.1, construct, algebra]

4.1 Multiplication using [F4] gives by finite induction $s_i^{p^n}=\left(\sum_{j=0}^{p^n-1}\gamma^jg_i\right)\gamma^{p^n}=(\nu_ng_i)\gamma^{p^n}.$ Each polynomial operator $\gamma^j$ is continuous, so $\omega_n$ and $\nu_n$ are continuous on $X$. Put $Z_n=\omega_nX+\sum_{i=1}^r\mathbb Z_p\nu_ng_i$. It is the image of compact $X\times\mathbb Z_p^r$ under the continuous map $(x,z_1,\ldots,z_r)\mapsto\omega_nx+\sum_i z_i\nu_ng_i$. By [F5]–[F7] it is compact and closed in $X$, including $r=0$. [F4, F5, F6, F7, step 3.1, construct, algebra]

5.1 The subgroup $Z_n$ is stable under $\Gamma^{p^n}$: the image $\omega_nX$ is stable, and $(\gamma^{p^n}-1)y=\omega_ny\in\omega_nX$ for every $y\in X$, in particular each displayed generator of $Z_n$. This first proves stability under integral powers; closure and continuity prove it under all $p$-adic powers. The same argument shows that the action on $X/Z_n$ is trivial: for any $y$, the set of powers fixing its coset is closed, since $Z_n$ is closed, and contains the dense integral powers. With the quotient topology, the map $G_n\longrightarrow X/Z_n,\qquad (x,\gamma^{p^nz})\longmapsto x\bmod Z_n$ is continuous and is a homomorphism by [F4] and this trivial action. Its kernel is closed: as a subset of the product $X\times\Gamma^{p^n}$ it is exactly $Z_n\times\Gamma^{p^n}$. By step 4.1 it kills all $s_i^{p^n}$, so it contains $H_n$, which is the intersection of the closed normal subgroups containing that finite list. Thus $Y_n\subseteq Z_n$. [F4, step 4.1, given, construct, algebra]

6.1 Since $g_0=0$, $s_0^{p^n}=\gamma^{p^n}$ lies in $H_n$. Its commutator with $x\in X$ is $(\gamma^{p^n}-1)x$, so $\omega_nX\subseteq H_n\cap X$. Step 4.1 also gives $s_i^{p^n}(s_0^{p^n})^{-1}=\nu_ng_i\in H_n\cap X$. This is a closed subgroup, so step 3.1's continuous powers place its whole scalar span $\mathbb Z_p\nu_ng_i$ in it. Hence $Z_n\subseteq Y_n$. Together with step 5.1 this proves equality. At $n=0$, $\nu_0=1$ and $\omega_0=T$, giving $Y_0=TX+\sum_i\mathbb Z_pg_i$. The polynomial identity $\nu_nT=\omega_n$ gives $\nu_nY_0=Y_n$ by these explicit sums. [F4, step 3.1, step 4.1, step 5.1, algebra]

7.1 One can start with $G_m=X\rtimes\Gamma^{p^m}$, where $\Gamma^{p^m}=\{\gamma^{p^mz}:z\in\mathbb Z_p\}$ is the closed procyclic subgroup and repeat the same argument with any finite list of section generators over $\gamma^{p^m}$. Replacing $p^n$ by $p^{n-m}$ in steps 4.1–6.1 gives the trace $\sum_{j=0}^{p^{n-m}-1}\gamma^{j p^m}$. At $n=m$ it is $1$. The case $r=0$ has just the distinguished section and gives $Y_n=\omega_nX$; if $X=0$ all these kernels are zero. No step distinguishes odd $p$ from $2$. AC is used through [F3]'s compactness, while CC and DC remain the declared ambient assumptions. No infinite completion, finite-residue classification, Hilbert class field, arithmetic comparison or counterexample is used or concluded. [A1, F3, step 1.1, step 4.1, step 5.1, step 6.1, algebra] ∎
