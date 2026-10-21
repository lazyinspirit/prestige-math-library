---
id: lem-seifert-cut-open-cover-alexander-module-presentation
kind: lemma
title: "The cut-open cover presentation of the Alexander module"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - def-oriented-seifert-surface
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - lem-knot-tubular-exterior-and-boundary
  - thm-knot-exterior-homology-and-longitude
  - def-one-variable-alexander-module-of-an-oriented-link
  - def-the-laurent-polynomial-ring
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-mayer-vietoris-sequence-in-singular-homology
  - thm-classification-of-connected-covering-spaces
  - thm-regular-covering-characterizations
  - cor-deck-group-of-a-regular-covering
  - def-deck-transformation-and-deck-group
  - thm-linking-number-equals-signed-intersection
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 7.B"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.B"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot in the oriented standard three-sphere and let $F$ be a connected compact smooth oriented surface with boundary $K$, oriented so that its induced boundary orientation agrees with the given orientation of $K$. Choose a sufficiently small oriented product tubular neighborhood $N(K)$ compatible with the inward conormal of $F$, set $E=S^3\setminus\operatorname{int}N(K)$ and $T=\partial E$, and put $S=F\cap E$. Thus $S$ is a connected properly embedded surface in $E$ and its boundary on $T$ projects to $K$ with degree $+1$. Orient the normal line of $F$ by requiring $(n,u,v)$ to be positively oriented in $S^3$ whenever $(u,v)$ is a positive tangent basis of $F$. Choose a product bicollar of $S$ in $E$, with $S_+$ on the $+n$ side and $S_-$ on the $-n$ side, and let $Y$ be the compact cut-open complement with these boundary copies. The inclusion $j:S\hookrightarrow F$ obtained by removing the boundary collar induces an isomorphism $j_*:H_1(S;\mathbb Z)\xrightarrow{\sim}H_1(F;\mathbb Z)$. Let $\iota_\pm:S\to Y$ be the two collar-face inclusions and define
$$i_\pm:=(\iota_\pm)_*\circ j_*^{-1}:H_1(F;\mathbb Z)\to H_1(Y;\mathbb Z).$$
Form a space $\widetilde E_F$ from copies $Y_n$ ($n\in\mathbb Z$) by gluing $S_-(Y_n)$ to $S_+(Y_{n+1})$ for every $n$, with the remaining boundary faces glued by the inherited product collar. Let $t$ be the deck shift $Y_n\to Y_{n+1}$, which is the shift of the positive meridian, and let $\Lambda=\mathbb Z[t^{\pm1}]$. Then $Y$ is connected, $\partial S$ is the preferred longitude, and the linking-evaluation map
$$H_1(Y;\mathbb Z)\longrightarrow\operatorname{Hom}(H_1(F;\mathbb Z),\mathbb Z),\qquad [\gamma]\longmapsto\bigl([a]\mapsto\operatorname{lk}(\gamma,a)\bigr)$$
is an isomorphism. There is an exact sequence of $\Lambda$-modules
$$
H_1(F;\mathbb Z)\otimes\Lambda\xrightarrow{i_- -t i_+}H_1(Y;\mathbb Z)\otimes\Lambda\longrightarrow H_1(\widetilde E_F;\mathbb Z)\longrightarrow0,
$$
Thus $H_1(\widetilde E_F;\mathbb Z)$ is the cokernel of the displayed map.

## Statement references

[[def-knot-exterior|The compact exterior and boundary torus of a chosen product tube]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and preferred longitude conventions]]

[[thm-knot-exterior-homology-and-longitude|The unique degree-one longitude null in exterior homology]]

[[def-the-laurent-polynomial-ring|The Laurent polynomial coefficient ring]]

[[def-one-variable-alexander-module-of-an-oriented-link|The infinite cyclic cover and positive deck generator]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$, a connected compact oriented spanning surface $F$, an adapted tubular neighborhood, a proper cut surface $S$, and a product bicollar used to form $Y$.

[A1] Full AC supplies Alexander duality, the universal-coefficient theorem, and the countable-choice hypotheses inherited by the surface and tubular-neighborhood suppliers. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The exterior is $E=S^3\setminus\operatorname{int}N(K)$ with boundary torus $T$; the positive meridian is the oriented boundary of a normal disk. [[def-knot-exterior]], [[def-knot-meridian-and-preferred-longitude]]

[F2] The exterior has $H_1(E;\mathbb Z)\cong\mathbb Z$ generated by the positive meridian, and its kernel on the boundary torus has a unique degree-one class, the preferred longitude. [[thm-knot-exterior-homology-and-longitude]]

[F3] The normal-form result gives $H_1(F;\mathbb Z)\cong\mathbb Z^{2g}$, $H_0(F;\mathbb Z)\cong\mathbb Z$, and $H_2(F;\mathbb Z)=0$; deleting a boundary collar does not change homology. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F4] Alexander duality identifies $\widetilde H_1(S^3\setminus F;\mathbb Z)$ with $\widetilde H^1(F;\mathbb Z)$, and the universal-coefficient exact sequence identifies $H^1(F;\mathbb Z)$ with $\operatorname{Hom}(H_1(F;\mathbb Z),\mathbb Z)$ because $H_0(F;\mathbb Z)$ is free. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]

[F5] Under this duality, a positive meridian evaluates as $+1$; for a cycle disjoint from $F$, its associated cohomology class evaluates on a curve of $F$ by their linking number. [[def-one-variable-alexander-module-of-an-oriented-link]], [[thm-linking-number-equals-signed-intersection]]

[F6] The Laurent ring $\Lambda=\mathbb Z[t^{\pm1}]$ is an integral domain, and its element $1-t$ is nonzero. [[def-the-laurent-polynomial-ring]]

[F7] Mayer–Vietoris is exact for an open cover; connected-cover classification identifies covers by their subgroups, and a normal kernel gives the regular deck group. [[thm-mayer-vietoris-sequence-in-singular-homology]], [[thm-classification-of-connected-covering-spaces]], [[thm-regular-covering-characterizations]], [[cor-deck-group-of-a-regular-covering]], [[def-deck-transformation-and-deck-group]]

## Proof

1.1 **The boundary class.** The boundary circle $\partial S$ follows the inward conormal collar of $F$ once around $K$, so its projection to the core has degree $+1$. It bounds the oriented surface $S$ in $E$, hence maps to zero in $H_1(E;\mathbb Z)$. By [F2] it is the unique degree-one class in the boundary kernel, namely the preferred longitude. The collar removed from $F$ is an annulus, so [F3] also identifies $H_1(S;\mathbb Z)$ with $H_1(F;\mathbb Z)$. [F1, F2, F3, given, construct]

2.1 **Homology of the cut complement.** In an interior product chart $F\times(-\delta,\delta)$, the complement has the two half-collars $r<0$ and $r>0$; on either half replace $r$ during the homotopy by $(1-s)r+s\,\operatorname{sign}(r)\delta$ for $0\le s\le1$. At the boundary collar, the adapted tube gives the corresponding punctured half-disk fibers, and radial projection to their outer boundary arcs is the same deformation. These maps agree with the identity off the collar and exhibit the cut-open complement $Y$ as homotopy equivalent to $S^3\setminus F$. Since $H_2(F)=0$ by [F3], Alexander duality in [F4] gives $\widetilde H_0(S^3\setminus F)=0$, hence $Y$ is connected. In degree one, [F4] and the universal-coefficient sequence identify $H_1(Y;\mathbb Z)$ with $\operatorname{Hom}(H_1(F;\mathbb Z),\mathbb Z)$. The natural duality map sends $[\gamma]$ to $([a]\mapsto\operatorname{lk}(\gamma,a))$; the meridian normalization in [F5] fixes its sign. [A1, F3, F4, F5, given, construct]

3.1 **The stacked space is the positive-linking cover.** Product neighborhoods of the cut faces show that the quotient map $\widetilde E_F\to E$ is a covering: away from $S$ it is the identity on a sheet, and at $S$ the two product half-collars of adjacent copies give the two half-neighborhoods of a point in $E$. The stack is connected because each $Y_n$ is connected by step 2.1 and consecutive copies meet along the connected surface $S$. The shift $t$ is a deck transformation with quotient group $\mathbb Z$. To fix the sign, let $k$ be the positive tangent to $K$ and $u$ the inward conormal of $F$ at its boundary. The outward-normal-first boundary convention makes $(k,u)$ positive in $TF$, so $(n,k,u)$ is positive in $TS^3$ for the declared positive normal $n$. The positive meridian disk then has oriented basis $(u,n)$; at its intersection with $F$ its positive boundary tangent is $n$, so it crosses from the negative to the positive side. Under the specified gluing this moves from $Y_n$ to $Y_{n+1}$ and has monodromy $+1$. Every loop's sheet change is its signed intersection with $S$, which equals its total linking with $K$ because $\partial S$ is parallel to $K$ and the omitted boundary collar misses loops in $E$. Therefore the cover subgroup is the kernel of the one-variable total-linking homomorphism, and [F7] identifies this as the cyclic cover with the stated positive deck generator. [A1, F2, F5, F7, step 1.1, step 2.1, given]

4.1 **Mayer–Vietoris presentation.** Cover the stack by open thickenings of the copies $Y_n$; consecutive thickenings overlap in one copy of $S$ and nonconsecutive ones are disjoint. A singular chain has compact image and therefore meets only finitely many sheets, so the finite-chain Mayer–Vietoris sequences pass to the direct limit over finite consecutive stacks. Identifying translates with powers of $t$ gives the exact sequence
$$
H_1(S;\mathbb Z)\otimes\Lambda\xrightarrow{i_- -t i_+}H_1(Y;\mathbb Z)\otimes\Lambda\longrightarrow H_1(\widetilde E_F;\mathbb Z)\longrightarrow H_0(S;\mathbb Z)\otimes\Lambda\xrightarrow{1-t}H_0(Y;\mathbb Z)\otimes\Lambda.
$$
Both $S$ and $Y$ are connected, so the last map is multiplication by $1-t$. If $q\in\Lambda$ and $(1-t)q=0$, a nonzero $q$ has a largest exponent $m$ with nonzero coefficient $q_m$, while the coefficient of $t^{m+1}$ in $(1-t)q$ is $-q_m\ne0$; hence $q=0$. The last map is therefore injective. Exactness makes the preceding map onto $H_1(\widetilde E_F)$ with kernel exactly the image of $i_- -t i_+$; using $H_1(S)\cong H_1(F)$ from step 1.1 gives the asserted cokernel presentation. [F3, F6, F7, step 1.1, step 2.1, step 3.1, given, algebra] ∎

## Remarks

The left-to-right stack direction is chosen so a positive meridian moves from index $n$ to index $n+1$. The seam convention is shown below. The proof verifies the cover and its monodromy in step 3.1 and derives the map from exactness in step 4.1; the drawing supplies no additional premise.

$$
\begin{tikzpicture}[>=stealth, node distance=1.5cm]
  \node[draw,minimum width=1.55cm,minimum height=0.8cm] (yn) {$Y_n$};
  \node[draw,minimum width=1.55cm,minimum height=0.8cm,right=2.6cm of yn] (ynp) {$Y_{n+1}$};
  \draw[thick] (yn.east) -- node[above,align=center] {$S_-(Y_n)$\\$=S_+(Y_{n+1})$} (ynp.west);
  \draw[->,red,thick] ([yshift=-0.35cm]yn.east) -- node[below] {positive meridian: $t$} ([yshift=-0.35cm]ynp.west);
  \node[left=0.3cm of yn] {$\cdots$};
  \node[right=0.3cm of ynp] {$\cdots$};
\end{tikzpicture}
$$

Each rectangle is one cut complement. The seam identifies the negative face of copy $n$ with the positive face of copy $n+1$; the induced Mayer–Vietoris relation is $i_- - t i_+$.
