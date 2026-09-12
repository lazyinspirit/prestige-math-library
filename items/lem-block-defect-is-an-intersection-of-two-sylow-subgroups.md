---
id: lem-block-defect-is-an-intersection-of-two-sylow-subgroups
kind: lemma
title: Block defect is an intersection of two sylow subgroups
deps: [def-defect-group-and-numerical-defect-of-a-block, lem-relative-projectivity-mackey-intersections-for-finite-modules, lem-restriction-to-a-containing-p-subgroup-retains-a-vertex, lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-green-vertex-source-existence-and-conjugacy]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

If $D$ is a defect group of a block $b$ of $kG$ and $P$ is any Sylow $p$-subgroup containing $D$, there exists $h\in C_G(D)$ such that $D=P\cap hPh^{-1}$.

## Facts & Assumptions

**Given:** A finite group, field of characteristic $p$, block and subgroups as stated.

[F1] By definition, saying that $D$ is a defect group of $b$ means that $\Delta D$ is a vertex of the indecomposable block bimodule $B=kGb$. ([[def-defect-group-and-numerical-defect-of-a-block]])

[F2] Finite restriction and induction splittings respect the double-coset decomposition. ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]])

[F3] Restriction to $P\times P$ retains an indecomposable summand with vertex $\Delta D$. ([[lem-restriction-to-a-containing-p-subgroup-retains-a-vertex]])

[F4] A transitive permutation module for a $p$-group is indecomposable with its stabilizer as a vertex. ([[lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices]])

[F5] An indecomposable direct summand occurs in any finite indecomposable decomposition. ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]])

[F6] Vertices of an indecomposable module are conjugate within the ambient group. ([[thm-green-vertex-source-existence-and-conjugacy]])

## Proof

**Proof technique:** direct.

1.1 Put $R=P\times P$. The source existence in [F6] and the vertex in [F1] allow [F3] with ambient group $G\times G$. Thus $\operatorname{Res}_R B$ has an indecomposable summand $U$ with vertex $\Delta D$. Multiplication by the central idempotent $b$ splits $B$ from $kG$ as a bimodule; restriction preserves this splitting, as in [F2]. Hence $U\mid\operatorname{Res}_R kG$. [F1, F2, F3, F6]

2.1 The action on the basis $G$ is $(a,c)g=agc^{-1}$, so its orbits are $PgP$ and the stabilizer of $g$ is $L_g=\{(a,g^{-1}ag):a\in P\cap gPg^{-1}\}$. Indeed $agc^{-1}=g$ is equivalent to $c=g^{-1}ag\in P$. Mapping a coset in $R/L_g$ to its translate of $g$ gives an equivariant bijection. Thus $\operatorname{Res}_R kG=\bigoplus_{g\in P\backslash G/P} k[R/L_g]$. [step 1.1]

3.1 By [F4] each summand is indecomposable with vertex $L_g$. By [F5], $U$ is isomorphic to one such summand. Vertex conjugacy in the group $R$, using [F6], gives $r,s\in P$ with $\Delta D=(r,s)L_g(r,s)^{-1}$. Projecting to the first coordinate gives $D=r(P\cap gPg^{-1})r^{-1}$. [F4, F5, F6, step 1.1, step 2.1]

4.1 For $d\in D$, membership of $(d,d)$ in this conjugate stabilizer says $r^{-1}dr=g(s^{-1}ds)g^{-1}$. Put $h=rgs^{-1}$. Rearranging gives $d=hdh^{-1}$ for every $d$, so $h\in C_G(D)$. Since $r,s\in P$, step 3.1 yields $D=P\cap rgPg^{-1}r^{-1}=P\cap hPh^{-1}$. This calculation explicitly handles the twisted diagonal stabilizer. [step 3.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
