---
id: ex-knot-kt-08-worked-cases
kind: example
title: "Trefoil and unknot Fox-coloring counts"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ alg-dihedral-fox-colorings, thm-dihedral-fox-colorings-terminate-and-are-correct, thm-quandle-colorings-are-reidemeister-invariant, def-countable-choice ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §1, arXiv:math/0608172, pp. 2–3"
      url: "https://arxiv.org/pdf/math/0608172"
dependency_level: 4
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $D_T$ be the standard three-crossing trefoil diagram with maximal underarcs
$a,b,c$. In cyclic order its crossing data are: overarc $c$ with underarcs
$a,b$; overarc $b$ with underarcs $c,a$; and overarc $a$ with underarcs
$b,c$. Thus its Fox equations are
$2a=b+c$, $2b=c+a$, and $2c=a+b$. Let $D_U$ be the standard one-arc,
zero-crossing unknot diagram. Then $D_T$ has exactly $9$ Fox $3$-colorings,
of which three are constant and six are nonconstant, while $D_U$ has exactly
$3$ colorings. Under the oriented Reidemeister theorem and the quandle-coloring
invariance result, these counts are knot invariants under $\mathrm{AC}_\omega$.

The following diagram is the closure of the three-crossing two-strand braid;
the crossing data in the first paragraph, rather than the drawing, specifies
the equations used in the verification. The left and right exterior arcs close
the two braid strands.

```tikz
\begin{tikzpicture}[scale=0.75]
  \draw[->] (-1,-1.5) .. controls (-1.7,-1.2) and (-1.7,1.2) .. (-1,1.5);
  \draw[->] (1,-1.5) .. controls (1.7,-1.2) and (1.7,1.2) .. (1,1.5);
  \draw[->] (1,1.5) -- (0.16,1.08);
  \draw[->] (-0.16,0.92) -- (-1,0.5);
  \draw[->] (1,-0.5) -- (0.16,-0.92);
  \draw[->] (-0.16,-1.08) -- (-1,-1.5);
  \draw[->] (1,0.5) -- (0.16,0.08);
  \draw[->] (-0.16,-0.08) -- (-1,-0.5);
  \draw[->,line width=1.2pt] (-1,1.5) -- (0,1) -- (1,0.5);
  \draw[->,line width=1.2pt] (-1,0.5) -- (0,0) -- (1,-0.5);
  \draw[->,line width=1.2pt] (-1,-0.5) -- (0,-1) -- (1,-1.5);
  \node at (1.48,0.05) {$a$};
  \node[below] at (0.45,-0.225) {$b$};
  \node at (-1.48,0.05) {$c$};
\end{tikzpicture}
```

## Example references

[[alg-dihedral-fox-colorings]].

[[thm-quandle-colorings-are-reidemeister-invariant]].

[Przytycki, *3-coloring and other elementary invariants of knots*, §1](https://arxiv.org/pdf/math/0608172).

[Manturov, *Knot Theory*, Chapter 5](https://varf.ru/rudn/manturov/book.pdf).

## Facts & Assumptions

**Given:** The diagrams and crossing data in the Example, and $\mathrm{AC}_\omega$.

[F1] [[alg-dihedral-fox-colorings]]: each crossing imposes $2x_o-x_i-x_j=0$ over $\mathbb F_p$.

[F2] [[thm-dihedral-fox-colorings-terminate-and-are-correct]]: the algorithm returns exactly the assignments satisfying the crossing equations.

[F3] [[thm-quandle-colorings-are-reidemeister-invariant]]: under $\mathrm{AC}_\omega$, quandle coloring sets of diagrams of the same oriented link are bijective.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ supplies a choice function for every sequence of nonempty sets.

## Verification

1.1 For $D_T$, [F1] gives the three equations $2a-b-c=0$, $2b-c-a=0$, and $2c-a-b=0$. Modulo $3$, each left-hand side equals $2(a+b+c)$, so the system is equivalent to $a+b+c=0$. Choose $a,b$ freely and set $c=-a-b$; there are $3^2=9$ solutions. Exactly the three choices $a=b=c$ are constant, leaving six nonconstant colorings. [F1, given, algebra]

1.2 On $\mathbb F_3$ set $x*y=2y-x$. This is a finite quandle: $x*x=x$, each right translation $R_y(x)=2y-x$ satisfies $R_y^2=\mathrm{id}$, and $(x*y)*z=x-2y+2z=(x*z)*(y*z)$. At a crossing with source $u$, target $v$, and overarc $o$, its quandle equation $x_v=x_u*x_o=2x_o-x_u$ is equivalent to the Fox equation $2x_o-x_u-x_v=0$ in [F1]. This equation is symmetric in the two underarc colors, so their order does not matter. Thus Fox $3$-colorings are exactly colorings by this three-element quandle on every regular oriented diagram. [F1, F3, algebra]

2.1 By [F2], these nine solutions are exactly the outputs of the Fox algorithm. The one-arc diagram $D_U$ has no crossing equations, so its single arc receives any of the three colors and it has three colorings. [F2, given, step 1.1]

3.1 By step 1.2 the Reidemeister coloring theorem [F3] applies to the Fox coloring sets under [A1], so the counts just computed depend only on the represented knot types. The trefoil and unknot therefore have Fox $3$-coloring counts $9$ and $3$, respectively; the invariant distinguishes them, without making a completeness claim. [A1, F3, step 1.1, step 2.1, step 1.2] ∎

## Sources

[[alg-dihedral-fox-colorings]].

[[thm-dihedral-fox-colorings-terminate-and-are-correct]].

[[thm-quandle-colorings-are-reidemeister-invariant]].

[[def-countable-choice]].
