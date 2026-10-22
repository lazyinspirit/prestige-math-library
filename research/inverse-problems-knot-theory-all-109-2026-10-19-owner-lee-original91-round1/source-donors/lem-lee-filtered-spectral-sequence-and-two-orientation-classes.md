---
id: lem-lee-filtered-spectral-sequence-and-two-orientation-classes
kind: lemma
title: Lee filtration, spectral sequence, and orientation classes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-lee-deformed-khovanov-complex
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - def-cochain-complex-in-an-abelian-category
  - def-increasing-and-decreasing-filtration-of-an-object
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §§2.3–2.4 and 3.1, printed pp. 4–7
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §§5.5–5.6, printed pp. 94–99
    - title: Eun Soo Lee, On Khovanov invariant for alternating links,
        arXiv:math/0210213v2
      url: https://arxiv.org/pdf/math/0210213v2
      locator: §§2–4.2, Lee deformation, spectral sequence and Reidemeister maps
---

## Statement

Let $D$ be a finite regular oriented diagram of a link with $c$ components, and form its rational Lee cochain complex using the normalized crossing cube and decreasing quantum filtration. The associated bounded spectral sequence has the rational Khovanov cohomology of $D$ on its homology page and converges to the associated graded of Lee homology with its induced filtration. For each of the $2^c$ orientations $o$ of the link, the oriented resolution and the parity-of-nesting label rule define a canonical Lee cycle $s_o$; these cycles represent a basis of Lee homology. In that rule, a Seifert circle contributes $1$ when counterclockwise and $0$ when clockwise. For a knot, the two canonical classes $s_o,s_{\bar o}$ have equal least filtration level, while $s_o+s_{\bar o}$ and $s_o-s_{\bar o}$ are nonzero classes in the two distinct quantum-degree congruence summands modulo $4$.


### Local crossing convention

For the proof’s local convention, the four segment ends are numbered clockwise, and sectors $(1,2)$ and $(3,4)$ are black. The textual endpoint and arrow rules in step 2.1 determine all labels; the drawing is illustrative and is not used in the proof.

```tikz
\begin{tikzpicture}[scale=1.1]
  \fill[black!18] (0,0) -- (0.72,0) arc (0:90:0.72) -- cycle;
  \fill[black!18] (0,0) -- (-0.72,0) arc (180:270:0.72) -- cycle;
  \node at (0.48,0.48) {$B$};
  \node at (-0.48,-0.48) {$B$};
  \draw[line width=5pt] (-0.8,0) -- (0.8,0);
  \draw[white,line width=5pt] (-0.2,0) -- (0.2,0);
  \draw[line width=1pt] (-0.8,0) -- (-0.2,0);
  \draw[line width=1pt] (0.2,0) -- (0.8,0);
  \draw[line width=1pt] (0,0.8) -- (0,-0.8);
  \node[above] at (0,0.82) {$1$};
  \node[right] at (0.82,0) {$2$};
  \node[below] at (0,-0.82) {$3$};
  \node[left] at (-0.82,0) {$4$};
\end{tikzpicture}
```

## Statement references

[[def-lee-deformed-khovanov-complex|Rational Lee cochain complex and decreasing quantum filtration]]

[[alg-khovanov-chain-complex-from-diagram|Normalized even Khovanov state cube]]

[[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology|Bounded filtered-complex abutment]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§2.3–2.4 and 3.1](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §§5.5–5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

[Lee, *On Khovanov invariant for alternating links* (2002), §§2–4.2](https://arxiv.org/pdf/math/0210213v2)

## Facts & Assumptions

**Given:** A finite regular oriented link diagram, its oriented resolution cube, and the rational Lee operations.

[F1] The Lee complex has the finite signed state cube, quantum degree, and decreasing filtration specified in [[def-lee-deformed-khovanov-complex]].

[F2] The even Khovanov procedure assigns the integral Frobenius algebra to each state and the signed saddle maps to its edges ([[alg-khovanov-chain-complex-from-diagram]]).

[F3] The integral cube differential squares to zero, and it is the degree-preserving part of the Lee differential ([[lem-khovanov-cube-differential-squares-to-zero]]).

[F4] A finite filtration on each chain object yields a spectral sequence whose limiting page is the associated graded of homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F5] The cochain-to-chain reindexing $C^\sharp_n=C^{-n}$ and the translation $G_p=F^{-p}$ convert a decreasing filtered cochain complex to an increasing filtered chain complex without changing its differential or finite filtration ([[def-cochain-complex-in-an-abelian-category]], [[def-increasing-and-decreasing-filtration-of-an-object]]).

## Proof

**Given:** $D$, the finite cube and its crossing signs and order.


1.1 Put $a=1+X$ and $b=X-1$ in $A_L=\mathbb Q[X]/(X^2-1)$. The relation $X^2=1$ gives $m_L(a\otimes a)=2a,\quad m_L(b\otimes b)=-2b,\quad m_L(a\otimes b)=m_L(b\otimes a)=0, \qquad \Delta_L(a)=a\otimes a,\quad\Delta_L(b)=b\otimes b.$ The counit takes value $1$ on each of $a,b$. In the basis $1,X$, the degree-preserving part of each saddle is the integral Khovanov saddle, and the only remaining terms replace $X\otimes X$ by $1$ under multiplication or replace $X$ by $1\otimes1$ under comultiplication. Each replacement raises the quantum degree by $4$, including the state shift, so the associated-graded differential is precisely the even Khovanov differential. [F1, F2, F3, algebra]

1.2 The projection of $D$ is a finite four-valent plane graph (with crossingless components as disjoint Jordan curves), so checkerboard-color its regions with the unbounded region white. Define the color of a region by the parity of intersections of a path from infinity to it with the projection; this is path-independent because every closed curve in the plane has even mod-$2$ intersection with the closed diagram. For each segment between crossing disks, assign label $a$ and direct it so that the black region is on its right, or assign label $b$ and direct it so that black is on its left. At a crossing, list the four incident segment ends clockwise as $1,2,3,4$, choosing the convention that sectors $(1,2)$ and $(3,4)$ are black, as in the local drawing. The arrows point outward/inward at ends $1,3$ according as their labels are $a/b$, and inward/outward at ends $2,4$ according as their labels are $a/b$. Thus the four patterns $aabb,abba,bbaa,baab$ are exactly those for which opposite ends have opposite arrows; in each case exactly one adjacent pairing connects equal labels and an incoming to an outgoing arrow. It is the oriented smoothing. All-equal patterns have two equal-label smoothings but do not orient the original crossing, while alternating and three-to-one patterns have no compatible smoothing. Thus, among segment labelings compatible with a smoothing at every crossing, having no all-equal crossing is equivalent to determining exactly one oriented state and an orientation of the link. For an oriented state, each circle has one label. Let $\delta(C)$ be the parity of the number of other Seifert circles separating it from infinity. The outside region of $C$ is black exactly when $\delta(C)=1$; its inside has the opposite color. As the interior is left of a counterclockwise circle and right of a clockwise circle, the black-right rule labels $C$ by $a$ exactly when $\delta(C)+\kappa(C)$ is even, where $\kappa(C)=1$ for counterclockwise and $0$ for clockwise. This is the parity rule in the Statement. [given, construct]

2.1 The cube has finitely many states and each state module is finite-dimensional, hence only finitely many quantum filtration levels occur. Reindex the cochain degrees and filtration by [F5], then apply [F4] to obtain a convergent spectral sequence with abutment $\operatorname{gr}H(C_L(D))$; reversing the filtration index changes only the page's filtration label. Index its first page as the associated-graded chain complex and its next as its cohomology. By step 1.1 and [F2], this cohomology is rational Khovanov cohomology. This is the convention in which the homology page is denoted $E_2$; changing page names does not change the limiting filtered homology. [F1, F2, F4, F5, step 1.1, algebra]

2.2 Restrict an enhanced state to the diagram segments between crossing disks; its circle labels determine one segment labeling. From the operations in step 1.1, an edge map is nonzero exactly when the four labels at its crossing agree. Every nonzero edge preserves all segment labels, so the complex is a direct sum over segment labelings. For a fixed labeling, each all-equal crossing is a free coordinate with both smoothings and an invertible saddle; each other crossing has at most one compatible smoothing. If any crossing has no compatible smoothing the summand is zero; otherwise its compatible states form a Boolean cube on precisely the all-equal crossings. [F1, step 1.1, step 1.2, algebra]

3.1 On any nonempty cube from step 2.2, every edge coefficient is nonzero in $\mathbb Q$. Let $u(e)$ be the coefficient of a directed edge and let $s(e)=(-1)^{\sum_{i<j}v_i}$ be the standard cube sign on the edge changing coordinate $j$. The equation $d^2=0$ gives $u(e_1)u(e_2)=-u(e_3)u(e_4)$ around each square, and the standard signs satisfy the same equation. Hence $u(e)/s(e)$ has product $1$ around every square. Rescale each vertex basis by the product of these ratios along a path from a fixed vertex; square faces generate all path changes in a Boolean cube, so the rescaling is path-independent and identifies its differential with the standard tensor differential. If there is a free coordinate, its factor is $\mathbb Q\xrightarrow{\mathrm{id}}\mathbb Q$; contracting that factor with the tensor-product Koszul sign contracts the whole cube. If there is no free coordinate, the cube is a single zero-differential line. By step 1.2 its segment labeling corresponds bijectively to one orientation of the link, so the $2^c$ singleton lines, and only these, form a basis of Lee homology. [F1, step 1.2, step 2.2, algebra, construct]

4.1 For a knot, reversing orientation leaves the oriented resolution fixed and interchanges $a$ and $b$ on each of its $k\ge1$ Seifert circles. Write the two singleton representatives as $u=\bigotimes_{i=1}^k c_i$ and $\bar u=\bigotimes_{i=1}^k\bar c_i$, where $c_i\in\{a,b\}$ and $\bar c_i$ is the other basis vector. Their state shift is $r=|v|+n_+-2n_-$. A tensor term with exactly $j$ labels equal to $1$ has quantum degree $r-k+2j$. In the expansions of $u$ and $\bar u$, its coefficients differ by $(-1)^j$: each selected $1$ contributes opposite signs from $a=1+X$ and $b=X-1$, while every $X$ contributes coefficient $1$. Thus $u+\bar u$ contains exactly the even-$j$ terms and $u-\bar u$ exactly the odd-$j$ terms. Their least chain degrees are $r-k$ and $r-k+2$, which give lower bounds for their induced homology filtration levels; boundary changes may improve those levels. The differential changes quantum degree by $0$ or $4$, so the whole filtered complex splits into its quantum congruence summands modulo $4$. The two nonzero homology classes $[u+\bar u]$ and $[u-\bar u]$ lie in distinct such summands and span homology by step 3.1. Each summand therefore contributes one filtered homology line, with level in its own congruence class. [F1, step 1.1, step 3.1, algebra]

5.1 Choose a point $p$ away from the crossings. Let $X_p$ multiply the circle containing $p$ by $X$ in each state. It commutes with each edge: the identities $m(Xz,w)=Xm(z,w)=m(z,Xw)$ and $\Delta(Xz)=(X\otimes1)\Delta(z)=(1\otimes X)\Delta(z)$ hold for $z,w=1,X$, hence for all inputs. It is a chain map with $X_p^2=1$. Its terms have quantum degrees $-2$ (sending $1$ to $X$) and $+2$ (sending $X$ to $1$), so it has filtered degree $-2$. At the mark the labels of $u,\bar u$ are opposite, with $Xa=a$ and $Xb=-b$. Hence $X_p$ interchanges the two homology lines of step 4.1, up to an overall sign. If their filtration levels are $\ell_+,\ell_-$, its filtered degree in both directions gives $\ell_-\ge\ell_+-2$ and $\ell_+\ge\ell_--2$. They lie in congruence classes differing by two modulo four, so $|\ell_+-\ell_-|=2$. Every knot-state quantum grading is odd: at the oriented state its parity is $n+k$, and the connected Seifert disk-band surface has $k-n=1-2g$; a cube edge changes $|v|+k(v)$ by an even integer. Finally $[u]$ and $[\bar u]$ are half the sum and difference of these two lines, so both have the smaller level, by the filtered direct sum into congruence summands. Thus their common level is $s_{\min}$, the larger line has level $s_{\max}=s_{\min}+2$, and the asserted equal-level and congruence properties hold. This argument concerns induced homology filtrations and makes no assertion that a fixed canonical cycle is already a maximal-filtration representative. [F1, step 4.1, algebra, construct] ∎
