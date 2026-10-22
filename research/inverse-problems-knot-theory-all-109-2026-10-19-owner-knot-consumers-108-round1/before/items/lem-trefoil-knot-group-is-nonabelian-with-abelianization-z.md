---
id: lem-trefoil-knot-group-is-nonabelian-with-abelianization-z
kind: lemma
title: "The trefoil group is nonabelian with abelianization Z"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - thm-knot-wirtinger-presentation-correctness
  - lem-wirtinger-local-meridian-conjugacy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.2"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§3–4.1"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
---

## Statement

Let $T$ be the trefoil represented by the standard oriented three-crossing diagram below. Its under-arcs are labelled $a,b,c$ so that the ordered triples $(o,L,R)$ of over-arc, upper target under-arc and lower source under-arc are $(b,c,a)$, $(c,a,b)$, and $(a,b,c)$ at the three crossings. The knot group $G_T=\pi_1(S^3\setminus T)$, where $\pi_1$ is based loops modulo endpoint-fixed homotopy with multiplication by concatenation, has presentation $\langle a,b\mid aba=bab\rangle$. This presentation denotes the free group on $a,b$ modulo the normal closure of the displayed relation. Its abelianization, the quotient by its commutator subgroup, is isomorphic to $\mathbb Z$, but $G_T$ is nonabelian.

The drawing shows two oriented strands crossing three times; the two bottom endpoints join to the corresponding top endpoints by the outside arcs. The white gaps mark underpasses, and each redrawn strand is over. The crossing triples in the statement fix the generator labels and local chart convention.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
\foreach \j in {0,1,2} {
\draw[->] (-1,3-\j)--(-0.14,2.57-\j);
\draw[->] (0.14,2.43-\j)--(1,2-\j);
\draw[->,line width=1.2pt] (1,3-\j)--(-1,2-\j);
}
\draw[->] (-1,0)..controls(-1.7,0)and(-1.7,3)..(-1,3);
\draw[->] (1,0)..controls(1.7,0)and(1.7,3)..(1,3);
\node[above] at (-1,3) {$a$};
\node[above] at (1,3) {$b$};
\node[right] at (1,2) {$c$};
\end{tikzpicture}
```

## Statement references

[[thm-knot-wirtinger-presentation-correctness|Wirtinger presentation theorem]]

[[lem-wirtinger-local-meridian-conjugacy|Local crossing conjugacy convention]]

[Cattabriga and Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.2](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Charbonneau, *Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram*, §§3–4.1](https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf)

## Facts & Assumptions

**Given:** The standard oriented trefoil diagram and crossing labels specified in the Statement.

[F1] For a valid finite knot diagram, the Wirtinger presentation with one positive-meridian generator for each under-arc and one crossing conjugacy relator for each crossing presents $\pi_1(S^3\setminus T)$. [[thm-knot-wirtinger-presentation-correctness]]

[F2] With a rightward over-strand, the upper target meridian $m_L$ and lower source meridian $m_R$ satisfy $m_R=m_o m_Lm_o^{-1}$. [[lem-wirtinger-local-meridian-conjugacy]]

[F3] A group presentation $\langle a,b\mid r\rangle$ denotes the free group on $a,b$ modulo the normal closure of $r$.

## Proof

1.1 Applying [F2] to the three crossing triples gives $a=bcb^{-1}$, $b=cac^{-1}$, and $c=aba^{-1}$. Substitute the third equation into the first to obtain $a=baba^{-1}b^{-1}$; right multiplication by $ba$ gives $aba=bab$. Under this relation, $cac^{-1}=aba^{-1}aab^{-1}a^{-1}=abab^{-1}a^{-1}=bab b^{-1}a^{-1}=b$, so the second crossing equation follows. Therefore eliminating $c$ from the presentation in [F1] yields exactly $\langle a,b\mid aba=bab\rangle$. [F1, F2, F3, given, algebra]

2.1 In the abelianization, the relation becomes $2[a]+[b]=[a]+2[b]$, hence $[a]=[b]$. The abelianization is the free abelian group on $[a],[b]$ modulo this single relation, so it is $\mathbb Z$. [F3, step 1.1, algebra]

3.1 Map $a\mapsto(12)$ and $b\mapsto(23)$ in $S_3$. Both $aba$ and $bab$ map to $(13)$, so the relation is satisfied. These two transpositions generate $S_3$, making the homomorphism surjective. Since $S_3$ is nonabelian, its surjective preimage $G_T$ is nonabelian. [step 1.1, algebra] ∎
