---
id: lem-restriction-to-a-containing-p-subgroup-retains-a-vertex
kind: lemma
title: Restriction to a containing p subgroup retains a vertex
deps: [def-vertex-and-source-of-an-indecomposable-module, thm-green-vertex-source-existence-and-conjugacy, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-higman-criterion-for-relative-projectivity]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
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

Let $H$ be finite, $k$ a field of characteristic $p$, and $M$ a nonzero indecomposable finite-dimensional $kH$-module with vertex $Q$ and source $S$ at $Q$. If $Q\le R\le H$ and $R$ is a $p$-subgroup, then $\operatorname{Res}_R^H M$ has a nonzero indecomposable direct summand $U$ for which $Q$ itself is a vertex.

## Facts & Assumptions

**Given:** The group, field, module, vertex, source and containing $p$-subgroup in the statement.

[F1] A source is an indecomposable summand on restriction which induces a module containing $M$; vertices are minimal relative-projectivity subgroups. ([[def-vertex-and-source-of-an-indecomposable-module]])

[F2] Vertices of an indecomposable module are conjugate in its ambient group. ([[thm-green-vertex-source-existence-and-conjugacy]])

[F3] Mackey restriction has intersection subgroups; indecomposable extraction and induction transitivity preserve the stated relative-projectivity witnesses. ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]])

[F4] Indecomposable finite-dimensional summands can be extracted from a finite decomposition. ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]])

[F5] Relative projectivity supplies a split induction counit from the restriction to that subgroup. ([[thm-higman-criterion-for-relative-projectivity]])

## Proof

**Proof technique:** direct.

1.1 Write $X\mid Y$ to mean that $X$ is a direct summand of $Y$. The source $S$ cannot be relatively $E$-projective for any $E<Q$: otherwise transitivity of induction and $M\mid\operatorname{Ind}_Q^H S$ make $M$ relatively $E$-projective, contrary to minimality of its vertex $Q$. Hence $S$, as a $kQ$-module, has full vertex $Q$. [F1, F3]

1.2 Decompose $\operatorname{Res}_R^H M=\bigoplus U_j$ into nonzero indecomposables. Since $S\mid\operatorname{Res}_Q^H M=\bigoplus\operatorname{Res}_Q^R U_j$, [F4] gives one $U=U_j$ with $S\mid\operatorname{Res}_Q^R U$. This uses finite decomposition after further restricting each $U_j$, not an assertion that its restriction is indecomposable. [F1, F4]

2.1 Restrict the split inclusion $M\mid\operatorname{Ind}_Q^H S$ to $R$. The selected $U$ is a summand of its right side. Mackey and indecomposable extraction in [F3] supply an $h\in H$ for which $U$ is relatively $L_h=R\cap hQh^{-1}$-projective. In particular $|L_h|\le|Q|$. [F3, step 1.2]

3.1 Choose an inclusion-minimal subgroup $T$ of $L_h$ relative to which $U$ is projective. The set is finite and nonempty since it includes $L_h$. Any proper subgroup of $T$ would also be a subgroup of $L_h$, so this minimality makes $T$ a vertex of $U$. Thus $|T|\le|Q|$. Put $W=\operatorname{Res}_T^R U$; [F5] gives $U\mid\operatorname{Ind}_T^R W$. [F1, F5, step 2.1]

4.1 Restrict this last splitting to $Q$ and use step 1.2. Then $S\mid\operatorname{Res}_Q^R\operatorname{Ind}_T^R W$. A second Mackey decomposition and indecomposable extraction give $r\in R$ such that $S$ is relatively $E=Q\cap rTr^{-1}$-projective as a $kQ$-module. Step 1.1 forces $E=Q$, so $Q\le rTr^{-1}$. [F3, step 1.1, step 1.2, step 3.1]

5.1 Now $|Q|\le|T|\le|Q|$ implies $Q=rTr^{-1}$. Conjugating a split induction witness inside $R$ preserves its splitting and minimality, and the inner conjugate of a $kR$-module is isomorphic to itself by multiplication by $r$. Thus this conjugate of the vertex $T$ is itself a vertex of the same $U$, consistently with [F2]. This is the claimed literal subgroup $Q$, without changing $U$ by an outside conjugation. [F2, step 3.1, step 4.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
