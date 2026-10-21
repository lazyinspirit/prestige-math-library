---
id: ex-knot-kt-01-worked-cases
kind: example
title: "Worked Wirtinger presentations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps: [alg-knot-wirtinger-presentation-from-code,
       thm-knot-wirtinger-presentation-correctness,
       lem-wirtinger-local-meridian-conjugacy,
       def-group-presentation,
       def-free-group,
       thm-quotient-group-universal-property]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.2, printed pp. 19–21"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §4"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
    - title: "Stefan Friedl, Knot Theory, §§5.2–5.4, printed pp. 68–74"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
verification: {precheck: pass}
---

## Example

The crossing-free unknot code gives the presentation $\langle x\mid\ \rangle$, hence its knot group is $\mathbb Z$. For the standard three-crossing trefoil diagram, label the under-arcs $a,b,c$ so the crossing relations are $c=aba^{-1}$, $a=bcb^{-1}$, and $b=cac^{-1}$. Eliminating $c$ gives $\langle a,b\mid aba=bab\rangle$. The assignment $a\mapsto(12)$ and $b\mapsto(23)$ defines a surjection of this group onto the nonabelian group $S_3$. For the four-crossing figure-eight code with under-arcs $x_1,x_2,x_3,x_4$, the crossing equations are
$$R_1:x_1x_2=x_3x_1,\quad R_2:x_1x_4=x_4x_2,\quad R_3:x_3x_2=x_2x_4,\quad R_4:x_3x_4=x_1x_3.$$
The figure-eight code has over-arc labels $x_1,x_4,x_2,x_3$ at $R_1,R_2,R_3,R_4$, respectively, and its oriented under-arc transitions are $x_1\to x_2$ at $R_2$, $x_2\to x_3$ at $R_1$, $x_3\to x_4$ at $R_3$, and $x_4\to x_1$ at $R_4$; the four displayed local charts give their side orders and orientations. The transition cycle verifies that the code has one component and four under-arcs.
The fourth equation follows from the first three: left-multiply $R_3$ by $x_1$, substitute $R_1$ and then $R_2$, and cancel the common right factor $x_2$.

The first diagram has two oriented strands crossing three times between top and bottom; the two bottom endpoints are joined to the corresponding top endpoints by the outside arcs. Its under-arc labels are chosen so that the triples $(o,L,R)$ of over-arc, left under-arc, and right under-arc are $(b,c,a)$, $(c,a,b)$, and $(a,b,c)$ at crossings $1,2,3$. The white gaps mark underpasses; the redrawn strand is over.

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

The panels below record the local crossing charts for the four figure-eight equations. In every panel the horizontal over-strand points right; the upper-right under-meridian is $x_L$ and the lower-left is $x_R$. The upper side is the target and lower side the source. In each panel the fixed relation is $x_L=x_o^{-1}x_Rx_o$, independently of the under-arrow direction.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth,line width=0.8pt]
  % R1: over x1, left x2, right x3.
  \node at (0,1.05) {$R_1$};
  \draw (-0.5,0.02)--(-0.18,0.34);
  \draw (0.18,0.70)--(0.5,1.02);
  \draw (-0.55,0.52)--(0.55,0.52);
  \draw[->] (-0.55,0.52)--(0.55,0.52) node[right] {$x_1$};
  \draw[->] (0.47,0.99)--(0.2,0.72);
  \node[above right] at (0.35,0.82) {$x_2$};
  \node[below left] at (-0.38,0.2) {$x_3$};
  \node at (0,-0.15) {$x_1x_2=x_3x_1$};
  % R2: over x4, left x1, right x2; reverse under direction.
  \node at (3.4,1.05) {$R_2$};
  \draw (2.9,0.02)--(3.22,0.34);
  \draw (3.58,0.70)--(3.9,1.02);
  \draw (2.85,0.52)--(3.95,0.52);
  \draw[->] (2.85,0.52)--(3.95,0.52) node[right] {$x_4$};
  \draw[->] (2.93,0.05)--(3.2,0.32);
  \node[above right] at (3.75,0.82) {$x_2$};
  \node[below left] at (3.02,0.2) {$x_1$};
  \node at (3.4,-0.15) {$x_1x_4=x_4x_2$};
  % R3: over x2, left x3, right x4; reverse under direction.
  \node at (0,-1.55) {$R_3$};
  \draw (-0.5,-2.58)--(-0.18,-2.26);
  \draw (0.18,-1.90)--(0.5,-1.58);
  \draw (-0.55,-2.08)--(0.55,-2.08);
  \draw[->] (-0.55,-2.08)--(0.55,-2.08) node[right] {$x_2$};
  \draw[->] (-0.47,-2.55)--(-0.2,-2.28);
  \node[above right] at (0.35,-1.78) {$x_4$};
  \node[below left] at (-0.38,-2.4) {$x_3$};
  \node at (0,-2.75) {$x_3x_2=x_2x_4$};
  % R4: over x3, left x4, right x1.
  \node at (3.4,-1.55) {$R_4$};
  \draw (2.9,-2.58)--(3.22,-2.26);
  \draw (3.58,-1.90)--(3.9,-1.58);
  \draw (2.85,-2.08)--(3.95,-2.08);
  \draw[->] (2.85,-2.08)--(3.95,-2.08) node[right] {$x_3$};
  \draw[->] (3.87,-1.61)--(3.6,-1.88);
  \node[above right] at (3.75,-1.78) {$x_4$};
  \node[below left] at (3.02,-2.4) {$x_1$};
  \node at (3.4,-2.75) {$x_3x_4=x_1x_3$};
\end{tikzpicture}
```

## Example references

[[alg-knot-wirtinger-presentation-from-code|Finite scan that outputs one meridian generator per under-arc and one relator per crossing]]

[[thm-knot-wirtinger-presentation-correctness|Identification of the output group with the knot complement group]]

[[lem-wirtinger-local-meridian-conjugacy|Local crossing chart and oriented conjugacy relation]]

[Cattabriga and Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.2](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Charbonneau, “Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram,” §4](https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf)

## Facts & Assumptions

**Given:** The crossing-free unknot, the standard oriented trefoil diagram with the stated under-arc labels, and the stated four-crossing figure-eight code.

[F1] The constructor returns one meridian generator per under-arc and scans every crossing once. [[alg-knot-wirtinger-presentation-from-code]]

[F2] Each crossing's positive meridians satisfy the conjugacy relation determined by its oriented chart. [[lem-wirtinger-local-meridian-conjugacy]]

[F3] The resulting presentation group is isomorphic to the knot complement group, with each generator mapped to its positive meridian. [[thm-knot-wirtinger-presentation-correctness]]

[F4] A group presentation denotes a quotient of the free group on its generators by the normal closure of the listed relators. [[def-group-presentation]]

[F5] The free group on one generator is isomorphic to the additive integers by exponent sum. [[def-free-group]]

[F6] A quotient by a relator normal closure has the presentation's universal property. [[thm-quotient-group-universal-property]]

## Proof

1.1 The crossing-free code has one under-arc and no crossing relators, so [F1] gives $\langle x\mid\ \rangle$. This is the free group on one generator, isomorphic to $(\mathbb Z,+)$ by exponent sum using [F5]; [F3] identifies it with the unknot group. [given, F1, F3, F4, F5, algebra]

1.2 The trefoil panels give the crossing triples $(b,c,a)$, $(c,a,b)$, and $(a,b,c)$. Applying [F2] gives the three crossing relations in the statement. The crossing with overarc $a$ gives $c=aba^{-1}$. Substituting this into $a=bcb^{-1}$ gives $a=bab a^{-1}b^{-1}$. Right multiplication by $ba$ yields $aba=bab$. Under that braid relation, $cac^{-1}=a b a b^{-1}a^{-1}=b$, so the third crossing equation follows from the first two. Thus eliminating $c$ gives exactly $\langle a,b\mid aba=bab\rangle$. [given, F1, F2, F4, algebra]

1.3 Each figure-eight panel is an oriented local crossing chart. In every panel [F2] gives $x_ox_L=x_Rx_o$. The side triples $(o,L,R)$ are $(x_1,x_2,x_3)$, $(x_4,x_2,x_1)$, $(x_2,x_4,x_3)$, and $(x_3,x_4,x_1)$. Substitution, and reversal of the written equality when needed, gives exactly the four equations in the statement. The under-arrow direction does not select a different conjugation rule. [given, F1, F2, algebra]

2.1 In $S_3$, the two words $(12)(23)(12)$ and $(23)(12)(23)$ both equal $(13)$, so the assignment respects the trefoil relation. The transpositions $(12)$ and $(23)$ generate all six permutations $e,(12),(23),(12)(23),(23)(12),(13)$, hence the homomorphism is surjective by [F4] and [F6]. Since $S_3$ is nonabelian, this group is nonabelian. [step 1.2, F4, F6, algebra]

3.1 From $R_3$, left multiplication by $x_1$ gives $x_1x_3x_2=x_1x_2x_4$. Applying $R_1$ to the right side gives $x_3x_1x_4$, and $R_2$ then gives $x_3x_4x_2$. Right cancellation of $x_2$ yields $x_1x_3=x_3x_4$, which is $R_4$. [step 1.3, algebra] ∎
