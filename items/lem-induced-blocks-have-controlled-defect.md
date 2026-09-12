---
id: lem-induced-blocks-have-controlled-defect
kind: lemma
title: Induced blocks have controlled defect
deps: ["def-induced-block-from-a-subgroup", "thm-block-bimodule-has-a-diagonal-vertex", "lem-relative-projectivity-mackey-intersections-for-finite-modules", "def-defect-group-and-numerical-defect-of-a-block"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemma 5.14(i)
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Proposition
        40.3(i), §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

If a block $b$ of $kH$ has defect group $D$ and $b^G$ is defined, then $D$ is contained in a $G$-conjugate of a defect group of $b^G$. No equality of defect groups is asserted.

## Facts & Assumptions

**Given:** $H\le G$ finite, a splitting residue field $k$, and the stated induced block $B=b^G$.

[F1] [[def-induced-block-from-a-subgroup]] gives $b\mid\operatorname{Res}_{H\times H}^{G\times G}B$.

[F2] [[thm-block-bimodule-has-a-diagonal-vertex]] supplies a diagonal vertex of $B$.

[F3] Mackey, summand extraction and vertex containment are [[lem-relative-projectivity-mackey-intersections-for-finite-modules]].

[F4] [[def-defect-group-and-numerical-defect-of-a-block]] identifies a defect group $D$ precisely by vertex $\Delta D$.

## Proof

1.1 Choose a defect group $E$ of $B$ by F2 and F4. Relative $\Delta E$-projectivity writes $B$ as a summand of a module induced from $\Delta E$. Restrict it to $H\times H$ and apply F3. By F1 and finite summand extraction, $b$ is relatively $(H\times H)\cap x\Delta E x^{-1}$-projective for some $x\in G\times G$. Since $\Delta D$ is a vertex by F4, F3 places it in an $(H\times H)$-conjugate of that intersection, hence in a $(G\times G)$-conjugate of $\Delta E$. [F1, F2, F3, F4, algebra]

2.1 Write that conjugating element as $(g_1,g_2)$. Projecting $\Delta D\le(g_1,g_2)\Delta E(g_1,g_2)^{-1}$ onto the first coordinate gives $D\le g_1Eg_1^{-1}$. Conjugating a diagonal vertex simultaneously by $(g_1,g_1)$ shows this conjugate of $E$ is again a defect group of $B$. This proves the required containment. If $D=1$ the conclusion is automatic; if $H=G$, F1 gives $B=b$ and equality is possible. Neither argument infers equality in general. All selections involve finite subgroup sets and finite decompositions, with no additional AC. [F1, F3, F4, step 1.1, algebra] ∎
