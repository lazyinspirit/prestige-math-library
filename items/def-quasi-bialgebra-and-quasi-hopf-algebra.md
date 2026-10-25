---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-quasi-bialgebra-and-quasi-hopf-algebra.json
  precheck: n/a
id: def-quasi-bialgebra-and-quasi-hopf-algebra
kind: definition
title: "Quasi-bialgebras, quasi-antipodes, and quasi-Hopf algebras"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-hh-scalar-and-tensor-conventions, def-hh-bialgebra-and-bialgebra-map]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Sections 5.12–5.13, printed pp. 110–114: quasi-bialgebra, quasi-antipode, and quasi-Hopf conventions."
    - title: "F. Haußer and F. Nill, Doubles of Quasi-Quantum Groups"
      url: "https://arxiv.org/pdf/q-alg/9708023"
      locator: "Section 2.1, PDF pp. 5–7: Drinfeld's quasi-bialgebra and quasi-Hopf axioms and the module associator."

---

## Definition

Fix a field $k$ and use algebraic tensor products over $k$ as in [[def-hh-scalar-and-tensor-conventions]]. A **quasi-bialgebra** is an associative unital $k$-algebra $H$ (in the sense of [[def-algebra-over-a-commutative-ring]]) with unital algebra maps $\Delta:H\to H\otimes H$ and $\varepsilon:H\to k$, and an invertible element $\Phi\in H^{\otimes 3}$, satisfying the counit identities $(\varepsilon\otimes\mathrm{id})\Delta=\mathrm{id}=(\mathrm{id}\otimes\varepsilon)\Delta$, the quasi-coassociativity identity
$$(\mathrm{id}\otimes\Delta)\Delta(h)=\Phi\,(\Delta\otimes\mathrm{id})\Delta(h)\,\Phi^{-1}\qquad(h\in H),$$
the pentagon identity
$$(1\otimes\Phi)(\mathrm{id}\otimes\Delta\otimes\mathrm{id})(\Phi)(\Phi\otimes1)=(\mathrm{id}\otimes\mathrm{id}\otimes\Delta)(\Phi)(\Delta\otimes\mathrm{id}\otimes\mathrm{id})(\Phi),$$
and the normalization $(\mathrm{id}\otimes\varepsilon\otimes\mathrm{id})(\Phi)=1\otimes1$. Here $\Phi$ is the **reassociator**. With this convention, $\Phi$ acts from the left-parenthesized tensor product to the right-parenthesized one. When $\Phi=1$, these conditions give the ordinary bialgebra axioms of [[def-hh-bialgebra-and-bialgebra-map]].

A **quasi-antipode** for a quasi-bialgebra is a triple $(S,\alpha,\beta)$ where $S:H\to H$ is a unital algebra antihomomorphism and $\alpha,\beta\in H$ satisfy
$$\sum S(h_{(1)})\alpha h_{(2)}=\varepsilon(h)\alpha,\qquad \sum h_{(1)}\beta S(h_{(2)})=\varepsilon(h)\beta,$$
$$\sum X^1\beta S(X^2)\alpha X^3=1,\qquad \sum S(x^1)\alpha x^2\beta S(x^3)=1,$$
where $\Delta(h)=\sum h_{(1)}\otimes h_{(2)}$, $\Phi=\sum X^1\otimes X^2\otimes X^3$, and $\Phi^{-1}=\sum x^1\otimes x^2\otimes x^3$. A **quasi-Hopf algebra** is a quasi-bialgebra with a quasi-antipode whose map $S$ is bijective. A quasi-bialgebra need not have a quasi-antipode, and a quasi-antipode is additional data rather than part of the quasi-bialgebra structure.


## Remarks

The pentagon can be pictured on four unital left $H$-modules $U,V,W,X$, with tensor-product action $h\cdot(u\otimes v)=\sum h_{(1)}u\otimes h_{(2)}v$. Write
$$A=((U\otimes V)\otimes W)\otimes X,\qquad B=(U\otimes(V\otimes W))\otimes X,$$
$$C=(U\otimes V)\otimes(W\otimes X),\qquad D=U\otimes((V\otimes W)\otimes X),\qquad E=U\otimes(V\otimes(W\otimes X)).$$
Each arrow below reassociates from left to right by the action of $\Phi$ on the indicated three blocks. Under the canonical vector-space rebracketings, its operator on the four tensor factors is the displayed label.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,every node/.style={font=\large}]
\node (A) at (0,3) {$A$};
\node (B) at (-2,0) {$B$};
\node (C) at (6,3) {$C$};
\node (D) at (2,-2) {$D$};
\node (E) at (8,0) {$E$};
\draw[->] (A) -- node[above] {$(\Delta\otimes\mathrm{id}\otimes\mathrm{id})(\Phi)$} (C);
\draw[->] (C) -- node[above right] {$(\mathrm{id}\otimes\mathrm{id}\otimes\Delta)(\Phi)$} (E);
\draw[->] (A) -- node[above left] {$\Phi\otimes1$} (B);
\draw[->] (B) -- node[below left] {$(\mathrm{id}\otimes\Delta\otimes\mathrm{id})(\Phi)$} (D);
\draw[->] (D) -- node[below right] {$1\otimes\Phi$} (E);
\end{tikzpicture}
```

The long path $A\to B\to D\to E$ gives the left side of the pentagon identity, and the short path $A\to C\to E$ gives its right side: later operators multiply on the left. A coproduct in an arrow label occurs precisely where a component of $\Phi$ acts on a two-factor block. Thus the displayed identity equates the two composites. The diagram illustrates the axiom; it does not replace it or require a quasi-antipode.
