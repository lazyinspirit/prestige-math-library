---
id: lem-relative-projectivity-mackey-intersections-for-finite-modules
kind: lemma
title: Relative projectivity mackey intersections for finite modules
deps: [def-relative-projectivity, thm-higman-criterion-for-relative-projectivity, thm-green-vertex-source-existence-and-conjugacy, thm-krull-schmidt-for-finite-dimensional-kg-modules]
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
    - title: Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

For subgroups $A,B\le H$ of a finite group and a finite-dimensional $kB$-module $V$ over any field, with $L_x=A\cap xBx^{-1}$,
$$\operatorname{Res}_A^H\operatorname{Ind}_B^H V\cong\bigoplus_{x\in A\backslash H/B}\operatorname{Ind}_{L_x}^A({}^x\operatorname{Res}_{B\cap x^{-1}Ax}^B V).$$
Induction is transitive, induction and restriction preserve direct summands, and relative projectivity is transitive up a subgroup chain. In characteristic $p$, if a nonzero indecomposable finite-dimensional $kH$-module $M$ is relatively $B$-projective, any vertex $Q$ is contained in an $H$-conjugate of $B$. An indecomposable direct summand of a finite sum of modules is a summand of one of its terms.

## Facts & Assumptions

**Given:** The finite groups and finite-dimensional modules specified above.

[F1] Relative projectivity is the direct-summand property for an induced module. ([[def-relative-projectivity]])

[F2] Higman characterizes relative projectivity by a relative trace of an endomorphism. ([[thm-higman-criterion-for-relative-projectivity]])

[F3] Nonzero indecomposable modules in characteristic $p$ have vertices and sources; vertices are conjugate. ([[thm-green-vertex-source-existence-and-conjugacy]])

[F4] Finite-dimensional modules decompose uniquely into finitely many indecomposables. ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]])

## Proof

**Proof technique:** direct.

1.1 For a double-coset representative $x$, send $a\otimes v$ to $ax\otimes v$. For $t\in L_x$, $atx\otimes v=ax\otimes(x^{-1}tx)v$, so this is balanced. The basis of $kH$ partitions into the disjoint double cosets $AxB$. Representatives $a$ of $A/L_x$ give a right $kB$-basis $ax$ of $k[AxB]$, because $a_1xB=a_2xB$ holds exactly when $a_2^{-1}a_1\in L_x$. Thus the component map is a bijection between the same copies of $V$, and the direct sum is the claimed module isomorphism. [given]

1.2 Transitivity is $a\otimes(b\otimes v)\mapsto ab\otimes v$, inverse $a\otimes v\mapsto a\otimes(1\otimes v)$; tensor relations make both maps well-defined. Applying either induction or restriction to split inclusion and projection maps preserves their composite identity, hence summands. Higman supplies a finite inducing witness: if $\mathrm{id}_M=\operatorname{Tr}_B^H\alpha$, then $m\mapsto\sum_{t\in H/B}t\otimes\alpha(t^{-1}m)$ splits the counit $h\otimes m\mapsto hm$. This map is $H$-linear by reindexing cosets. [F1, F2]

1.3 Decompose each term of a finite direct sum into indecomposables by [F4]. If an indecomposable $M$ is a summand of that sum, uniqueness of indecomposable decompositions forces it to be isomorphic to a summand of one term. [F4]

2.1 Let $Q$ be a vertex of $M$ and suppose $M$ is relatively $B$-projective. Combining the two counit splittings gives $M\mid\operatorname{Ind}_Q^H\operatorname{Res}_Q^H\operatorname{Ind}_B^H\operatorname{Res}_B^H M$. Steps 1.1–1.2 express the right side as a finite sum induced from $Q\cap xBx^{-1}$. Step 1.3 puts $M$ in one term. This intersection is a $p$-subgroup of $Q$; minimality in the definition of vertex forces it to equal $Q$. Hence $Q\le xBx^{-1}$, as claimed. [F1, F3, step 1.1, step 1.2, step 1.3] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241. Local argument and conventions as displayed above.
