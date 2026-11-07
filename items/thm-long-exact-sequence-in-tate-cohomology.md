---
id: thm-long-exact-sequence-in-tate-cohomology
kind: theorem
title: "Long exact sequence in Tate cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-tate-cohomology-for-finite-groups
  - thm-long-exact-sequence-in-group-cohomology
  - thm-long-exact-sequence-in-group-homology
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter II §3, printed pp.78–80, Tate cohomology and its long exact sequence."
    - title: "Jean-Pierre Serre, Local Fields, English translation"
      url: "https://ebooks.karbust.me/Mathematics/Jean-Pierre%20Serre%20-%20Local%20Fields%20%281979%29%20%5B978-1-4757-5673-9%5D.pdf"
      locator: "Chapter IX §§3–5, printed pp.77–85 and 138–145."
verification:
  precheck: n/a
---

## Statement

Let $G$ be a finite group with supplied complete-resolution data as in the Tate cohomology definition. Every short exact sequence $0\to A\to B\to C\to0$ of left $G$-modules induces natural connecting maps making
$$
\cdots\longrightarrow\widehat H^r(G;A)\longrightarrow\widehat H^r(G;B)\longrightarrow\widehat H^r(G;C)\longrightarrow\widehat H^{r+1}(G;A)\longrightarrow\cdots
$$
exact for every integer $r$.

## Statement references

[[def-tate-cohomology-for-finite-groups]]

[[thm-long-exact-sequence-in-group-cohomology]]

[[thm-long-exact-sequence-in-group-homology]]

[Milne, Class Field Theory, Chapter II §3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Serre, Local Fields, Chapter IX §3](https://ebooks.karbust.me/Mathematics/Jean-Pierre%20Serre%20-%20Local%20Fields%20%281979%29%20%5B978-1-4757-5673-9%5D.pdf)

## Facts & Assumptions

**Given:** A finite group $G$, supplied complete-resolution data, and a short exact sequence of left $G$-modules $0\to A\to B\to C\to0$.

[F1] For each integer $r$, $\widehat H^r(G;M)$ is the cohomology of the cochain complex $\operatorname{Hom}_{\mathbb Z[G]}(P_\bullet,M)$ for the supplied complete resolution $P_\bullet$. [[def-tate-cohomology-for-finite-groups]]

## Proof

**Given:** The data in the Statement.

1.1 Each term of $P_\bullet$ is projective, so applying $\operatorname{Hom}_{\mathbb Z[G]}(P_n,-)$ to $0\to A\to B\to C\to0$ is exact for every $n$. The three resulting cochain complexes therefore form a short exact sequence of complexes. [F1, given]

1.2 For a cocycle $c\in\operatorname{Hom}_{\mathbb Z[G]}(P_r,C)$, choose a lift $b\in\operatorname{Hom}_{\mathbb Z[G]}(P_r,B)$. Its coboundary maps to $dc=0$, so exactness in degree $r+1$ gives a unique $a\in\operatorname{Hom}_{\mathbb Z[G]}(P_{r+1},A)$ with image $db$; because $d^2b=0$ and $A\to B$ is injective, $da=0$. Replacing $b$ by another lift changes $a$ by a coboundary, so $[a]$ is well defined. If a cocycle in the $B$-complex maps to a coboundary in the $C$-complex, lift the cochain giving that coboundary and subtract its differential; the resulting cocycle lies in the $A$-complex. If a cocycle in the $C$-complex has zero connecting class, subtract the differential of a lift of the witnessing $A$-cochain from its $B$-lift; the result is a $B$-cocycle lifting it. These three checks give exactness at each term, in every integer degree. [F1, step 1.1, algebra] ∎
