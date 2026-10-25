---
id: lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits
kind: lemma
title: The lattice tree and Iwahori orbits for SL2(Q3)
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - cor-zp-is-the-valuation-ring-of-qp
  - thm-p-adic-digit-expansion
  - thm-smith-normal-form-existence-over-a-pid
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Maarten Solleveld, Affine Hecke algebras and their representations, §1.2
      url: https://arxiv.org/pdf/2009.03007
---

## Statement

Put $F=\mathbb Q_3$, $\mathcal O=\mathbb Z_3$, and $\pi=3$. Vertices are homothety classes $[L]$ of rank-two $\mathcal O$-lattices in $F^2$. Join $[L]$ and $[M]$ when representatives satisfy $\pi L\subsetneq M\subsetneq L$. This graph is a tree of degree $4$. The type of $[g\mathcal O^2]$ is $v_3(\det g)\bmod2$; it is well defined. The group $G=\operatorname{SL}_2(F)$ preserves types and is transitive on edges with type-ordered endpoints. Write $L_j=\mathcal O e_1+\pi^j\mathcal O e_2$ and $E=([L_0],[L_1])$. Its stabilizer is
$$I=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{SL}_2(\mathcal O):c\in\pi\mathcal O\right\}.$$
The $I$-orbits on edges are indexed by finite alternating words in $s_0,s_1$ (including the empty word), where $s_1$ changes an edge through its type-$0$ endpoint and $s_0$ through its type-$1$ endpoint. An orbit of word length $n$ has $3^n$ edges. These are precisely the double cosets $IgI/I$.

## Facts & Assumptions

**Given:** The lattice graph, $F$, $\mathcal O$, $G$, and $E$ as above.

[F1] [[cor-zp-is-the-valuation-ring-of-qp]] identifies $\mathbb Z_3$ with the valuation ring of $\mathbb Q_3$.

[F2] Every nonzero $x\in\mathbb Q_3$ has the unique expansion $x=\sum_{j=r}^{\infty}a_j\pi^j$ with $a_r\in\{1,2\}$ and $a_j\in\{0,1,2\}$ ([[thm-p-adic-digit-expansion]]).

[F3] [[thm-smith-normal-form-existence-over-a-pid]] gives simultaneous diagonal forms for lattices over a principal ideal domain.

## Proof

1.1 First derive the residue and valuation consequences needed below from [F2]. If $0\ne x\in\mathcal O$, its leading exponent $r$ is nonnegative because $|x|_3\le1$; the expansion gives $x=a_0+\pi y$ with $a_0\in\{0,1,2\}$ and $y\in\mathcal O$, since the shifted tail is a limit of partial sums in the closed unit ball. Distinct such digits represent distinct residue classes, since a nonzero difference in $\{\pm1,\pm2\}$ has absolute value $1$, whereas every element of $\pi\mathcal O$ has absolute value at most $1/3$. Thus $\mathcal O/\pi\mathcal O$ has exactly the three classes $0,1,2$ with the operations of $\mathbb F_3$. For a nonzero $x\in\mathcal O$ with leading exponent $r$, the shifted expansion gives $x=\pi^r u$ with $u=a_r+\pi z$, $a_r\in\{1,2\}$ and $z\in\mathcal O$. The leading digit gives $|u|_3=|u^{-1}|_3=1$, so [F1] gives $u,u^{-1}\in\mathcal O$ and $u$ is a unit. Every nonzero ideal of $\mathcal O$ therefore contains $\pi^r$ for the minimum valuation $r$ of its elements, and every element of that ideal is divisible by $\pi^r$ in $\mathcal O$. Thus every ideal is principal and $\mathcal O$ is a PID. After scaling any lattice $M$ into $\mathcal O^2$, [F3] gives an $\mathcal O$-basis $f_1,f_2$ of $\mathcal O^2$ with $M=\mathcal O\pi^a f_1+\mathcal O\pi^b f_2$, where $0\le a\le b$ after absorbing unit factors into the basis. Scaling to $a=0\le b$ gives a primitive representative and an exponent $n=b-a$. This exponent is well defined on the homothety class: a primitive representative has minimum coordinate valuation zero, so any scalar multiple that is also primitive differs by an $\mathcal O$-unit. For a basis matrix of the primitive representative, the determinant valuation is $n$; changing either $\mathcal O$-basis multiplies the determinant by a unit. Neighbors of $[L]$ correspond to the four lines in $L/\pi L\cong\mathbb F_3^2$, because the inverse image of a line is an intermediate lattice. Distinct lines give distinct lattices, and they cannot become homothetic: all four inverse images have the same index $3$ in $L$, so a scalar relating two of them has valuation zero and is a unit, which preserves each lattice. [F1, F2, F3, given, algebra]

2.1 Relative to the base vertex $[\mathcal O^2]$, a vertex with normalized elementary divisors $(0,n)$ has a chain of length $n$ through $\mathcal O f_1+\pi^j\mathcal O f_2$. If $n>0$, exactly one of its four neighbors has distance parameter $n-1$: in the basis $f_1,\pi^n f_2$ of its representative, the line spanned by $\pi^n f_2$ has inverse image $\pi\mathcal O f_1+\pi^n\mathcal O f_2$, whose homothety class normalizes to parameter $n-1$. Every other line has inverse image with a primitive vector $f_1+t\pi^n f_2$ and second elementary divisor $n+1$, hence parameter $n+1$. At $n=0$ all neighbors have parameter $1$. Therefore the parameter changes by one at each step, and the displayed chain is a shortest path. A cycle would have a vertex of maximal parameter and two distinct adjacent vertices of parameter one less, contradicting uniqueness of the decreasing neighbor. Thus the graph is connected and has no cycle. [F2, step 1.1, algebra]

2.2 Replacing a lattice basis multiplies its determinant by an $\mathcal O$-unit; homothety adds twice an integer to its determinant valuation. Hence type is well defined, and determinant-one matrices preserve it. For an edge with the endpoint of type $0$ first, choose a basis $f_1,f_2$ of its first lattice with second lattice $\mathcal O f_1+\pi\mathcal O f_2$. Its determinant has even valuation. Rescale both vectors by a power of $\pi$ to make that determinant a unit and then multiply $f_1$ by its inverse; neither operation changes the edge, and the resulting change-of-basis matrix has determinant one. This proves transitivity. A determinant-one matrix fixes $[L_0]$ exactly when it preserves $L_0$ (homothety would change determinant valuation unless its scalar is a unit). Within $\operatorname{SL}_2(\mathcal O)$, preservation of $L_1$ is exactly $c\in\pi\mathcal O$, proving the stated stabilizer. [F1, F2, step 1.1, algebra]

3.1 The unique shortest edge gallery from $E$ to any other edge changes endpoint types alternately: changing twice at the same endpoint would shorten it. For a gallery proceeding along $L_0,L_1,\ldots,L_n$, the matrices $\begin{pmatrix}1&0\\\pi^n b&1\end{pmatrix}$ for $b\in\mathcal O$ fix every earlier vertex and act transitively on the three possible next edges. In the basis $e_1,\pi^n e_2$, the backward edge corresponds to the line spanned by the second basis vector; the other lines are spanned by $e_1+t\pi^n e_2$ for $t\in\mathbb F_3$, and the displayed matrices send $t$ to $t+b$. For the other initial direction the apartment chain is $L_1,L_0,L_{-1},\ldots,L_{-n}$; use instead $\begin{pmatrix}1&\pi^n b\\0&1\end{pmatrix}$ at $L_{-n}$, which fixes that earlier chain and is transitive on the three forward lines there. Inductively move each gallery onto the corresponding apartment segment while fixing its earlier segment. Hence $I$ is transitive on the edges with each alternating type word. There are three choices at each extension, so the orbit size is $3^n$. Different words have different type sequences or distances and cannot be in the same orbit. By step 2.2 edges identify with $G/I$, so these orbits are exactly the double cosets. [F2, step 2.1, step 2.2, algebra] ∎


## Remarks

The finite neighborhood below shows actual lattice-tree vertices and edges. Filled vertices have type $0$ and hollow vertices type $1$. The horizontal path is part of the apartment $\ldots,[L_{-1}],[L_0],[L_1],[L_2],[L_3],\ldots$; boundary vertices have further neighbors omitted. The bold edge is $E$.

```tikz
\begin{tikzpicture}[scale=0.9, every node/.style={font=\small}]
\coordinate (a) at (0,0);
\coordinate (b) at (3,0);
\coordinate (lm) at (-2,0);
\coordinate (lu) at (-2,1.5);
\coordinate (ld) at (-2,-1.5);
\coordinate (rm) at (5,0);
\coordinate (ru) at (5,1.5);
\coordinate (rd) at (5,-1.5);
\coordinate (fm) at (7,0);
\coordinate (fu) at (7,0.8);
\coordinate (fd) at (7,-0.8);
\draw[very thick] (a) -- (b);
\draw (a) -- (lm) (a) -- (lu) (a) -- (ld);
\draw (b) -- (rm) (b) -- (ru) (b) -- (rd);
\draw (rm) -- (fm) (rm) -- (fu) (rm) -- (fd);
\foreach \v in {a,rm,ru,rd}
  \fill (\v) circle (2.5pt);
\foreach \v in {b,lm,lu,ld,fm,fu,fd}
  \draw[fill=white] (\v) circle (2.5pt);
\node[below] at (a) {$[L_0]$};
\node[below] at (b) {$[L_1]$};
\node[below] at (lm) {$[L_{-1}]$};
\node[below] at (rm) {$[L_2]$};
\node[below] at (fm) {$[L_3]$};
\node[above] at (1.5,0) {$E$};
\node at (-0.8,1.8) {$s_1$: three choices};
\node at (3.9,1.8) {$s_0$: three choices};
\node at (6,1.15) {$s_1$};
\end{tikzpicture}
```

Starting from $E$, the left three edges are its $s_1$-orbit and the right three its $s_0$-orbit: the shared endpoint has type $0$ and type $1$, respectively. Continuing through a new endpoint again leaves one backward edge and three forward choices. Only the continuation through $[L_2]$ is drawn; continuing through all three right endpoints gives the $3^2$ edges of the word obtained by first applying $s_0$ and then $s_1$. Iterating gives $3^n$ edges for each prescribed alternating gallery word, as proved in step 3.1. An orbit is a set of edges in this branching tree, rather than a single apartment segment. The proof above is independent of the illustration.
