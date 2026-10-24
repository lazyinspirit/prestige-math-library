---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-knot-kt-17-worked-cases.json
  precheck: pass
id: ex-knot-kt-17-worked-cases
kind: example
title: "A (2,1)-cable of the right trefoil"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - lem-satellite-torus-is-essential
  - lem-knot-exterior-is-irreducible
  - lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - thm-jsj-decomposition-of-knot-exteriors
  - cor-satellite-companion-is-detected-by-jsj
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-classification-of-compact-connected-surfaces
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is used through the torus-knot group/peripheral, satellite-companion, Seifert normal-form, finite-surface, and JSJ suppliers. Its countable-choice consequence is used by the knot-exterior irreducibility supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§4, cable knots, JSJ companions, and companionship graphs, PDF pp.18–21"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§§5.1–5.2, torus knots, Seifert fibers, and peripheral words"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, essential annuli and tori in Seifert pieces, printed pp.16–23"

---

## Example

Assume full AC. In the standard solid torus $V=S^1\times D^2$, let $P_{2,1}$ be the oriented curve $s\mapsto(e^{4\pi i s},r e^{2\pi i s})$ on an interior parallel torus, where $0<r<1$. Let $K=T(2,3)$ be the right trefoil and use the companion embedding that matches the product meridian and longitude of $V$ to the positive meridian and preferred longitude of $K$. The outer torus of $X_{P_{2,1}}$ is incompressible, and $X_{P_{2,1}}$ is not a product $T^2\times[0,1]$ with its outer and inner tori as ends. The companion torus $T_c$ is essential; both pieces of $E_{P_{2,1}(K)}$ cut along $T_c$ are Seifert-fibered, while the whole satellite exterior is neither atoroidal nor Seifert-fibered. Every inclusion-minimal JSJ system has one torus ambient isotopic to $T_c$, and cutting along $T_c$ has the trefoil exterior as its outside component.

The first panel shows a lift of the pattern to the universal cover of the parallel torus: horizontal and vertical unit translations correspond to longitude and meridian, so the segment from $(0,0)$ to $(2,1)$ projects to the closed slope $2\lambda_V+\mu_V$. The second panel shows the exterior cut along the companion torus; its boxes are pieces, and the labels are the two regular-fiber slopes induced on their common torus. Both panels are schematic, not planar knot projections, and no proof step depends on them.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center)]
  % Lift: one coordinate unit is three drawing units horizontally,
  % and two drawing units vertically. The endpoint remains (2,1).
  \node at (4,8.9) {Lift of the pattern};
  \draw (1,6) rectangle (7,8);
  \draw[densely dashed] (4,6) -- (4,8);
  \draw[->,very thick] (1,6) -- (7,8);
  \node[below] at (1,5.9) {start};
  \node[above] at (7,8.1) {same point in $T^2$};
  \node[rotate=90] at (.45,7) {one meridian period};
  \node[align=center] at (2.5,5.15) {one longitude\\period};
  \node[align=center] at (5.5,5.15) {one longitude\\period};
  \node at (4,4.35) {slope $2\lambda_V+\mu_V$};

  % The shared vertical edge represents only the companion torus;
  % the satellite boundary belongs to the cable piece.
  \node at (4,3.5) {Exterior cut along the companion torus};
  \draw (0,0) rectangle (4,2.2);
  \draw (4,0) rectangle (8,2.2);
  \node at (2,1.65) {$E_K$};
  \node at (2,.75) {$f_K=\lambda+6\mu$};
  \node at (6,1.65) {$X_{P_{2,1}}$};
  \node at (6,.75) {$f_P=2\lambda+\mu$};
  \node[above] at (4,2.35) {$T_c$};
  \node[below] at (6,-.15) {$\partial E_{P_{2,1}(K)}$};
  \node at (4,-1.15) {cut and glue along $T_c$};
\end{tikzpicture}
```

## Example references

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

[Alessia Cattabriga and Stefano Francaviglia, *Knot Theory and Applications: Lecture Notes*](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** Full AC, the standard solid torus $V$, the pattern $P_{2,1}$, the right trefoil $K=T(2,3)$, and the specified companion embedding.

[F1] The pattern and satellite exteriors, winding number, and companion torus have the conventions of [[def-satellite-pattern-companion-and-winding-number]].

[F2] The torus-knot supplier gives $\pi_1(E_{T(p,q)})=\langle x,y\mid x^p=y^q\rangle$, identifies $h=x^p=y^q$ as the regular fiber, and gives $\lambda=h\mu^{-pq}$ ([[thm-torus-knot-group-presentation]], Statement).

[F3] Seifert–van Kampen computes the group of a union from the open collar covers used below ([[thm-seifert-van-kampen]], Statement).

[F4] The normal form theorem gives reduced-word uniqueness in the free products $\mathbb Z*C_2$ and $C_2*C_3$ ([[thm-normal-form-for-free-products-with-amalgamation]], Statement, with trivial amalgam).

[F5] The closed compact connected surface classification identifies their polygonal models, orientability and Euler characteristic ([[thm-classification-of-compact-connected-surfaces]], Statement).

[F6] A two-sided essential torus in an irreducible Seifert-fibered manifold is isotopic to a vertical or horizontal torus; horizontal tori cut the manifold into interval bundles ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F7] Under the stated pattern and nontrivial-companion hypotheses, the companion torus is incompressible and non-boundary-parallel ([[lem-satellite-torus-is-essential]], Statement).

[F8] An irreducible satellite exterior with this torus, Seifert or atoroidal sides, and no global Seifert or atoroidal structure has that torus in its unique minimal JSJ system ([[cor-satellite-companion-is-detected-by-jsj]], Statement, using the full smooth uniqueness proof in [[thm-jsj-decomposition-of-knot-exteriors]]).

[F9] If a Seifert piece has an injective boundary torus and its quotient by the cyclic regular-fiber subgroup is a nonexceptional finite free product, every Seifert fibration has the same regular-fiber slope on that torus ([[lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients]], Statement).

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[A2] Full AC implies countable choice in ZF ([[thm-choice-implies-dependent-implies-countable-choice]], Statement; [[def-countable-choice]], Definition).

[F10] Compact smooth surfaces with boundary have finite compatible triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement, dimension two).

[F11] A free product of two infinite cyclic groups has no nontrivial cyclic normal subgroup, hence has trivial center ([[lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup]], Statement).

[F13] Under countable choice every smooth knot exterior is irreducible ([[lem-knot-exterior-is-irreducible]], Statement).

## Proof

1.1 The circle action $t\cdot(z,w)=(e^{4\pi i t}z,e^{2\pi i t}w)$ on $S^1\times D^2$ has generic orbit slope $2\lambda_V+\mu_V$. The given pattern is one such orbit. The core $S^1\times\{0\}$ has stabilizer of order $2$, while generic points have trivial stabilizer. Removing a tube about the regular orbit $P_{2,1}$ therefore gives a Seifert fibration of $X_{P_{2,1}}$ over an annulus with one exceptional point of multiplicity $2$. On the outer torus its regular-fiber slope is $2\lambda_V+\mu_V$. [F1, given, construct]

1.2 Remove a small neighborhood of the exceptional point from the annulus base. The remaining pair of pants has fundamental group freely generated by a loop $a$ around the outer boundary and a loop $c$ around the removed cone point; its third boundary loop is $(ac)^{-1}$. The circle bundle over this pair of pants has a section: it retracts to a graph, and a section over that graph is obtained by choosing one point in the fiber at the vertex and extending over each edge. Thus its group has generators $a,c,h$, with $h$ the fiber and $[a,h]=[c,h]=1$. The order-two local model $(z,w)\mapsto(-z,-w)$ around the exceptional core identifies the filled meridian with $c^2h$ after replacing $c$ by $ch^k$ if necessary: one circuit of the cone-point boundary lifts from $(z,w)$ to $(-z,-w)$, so two circuits equal one inverse fiber turn, and the twisting coefficient is odd. Filling that neighborhood kills this meridian. By [F3],
$$
\pi_1(X_{P_{2,1}})=\langle a,c,h\mid [a,h]=[c,h]=1,\ c^2h=1\rangle.
$$
Its quotient by $\langle h\rangle$ is $\mathbb Z*C_2$, which is nonabelian by reduced normal forms [F4]; hence $X_{P_{2,1}}$ is not $T^2\times I$. Its outer boundary subgroup is generated by $a,h$. The abelianization is free on $[a],[c]$ with $[h]=-2[c]$, so $a^m h^n=1$ implies $m=0$ and $n=0$. Thus the outer torus group injects into $\pi_1(X_{P_{2,1}})$ and has no compressing disk. [F1, F3, F4, step 1.1, algebra, construct]

1.3 For the trefoil, [F2] gives $\pi_1(E_K)=\langle x,y\mid x^2=y^3\rangle$ and regular fiber $h_K=x^2=y^3$. Its quotient by $\langle h_K\rangle$ is $C_2*C_3$, nonabelian by [F4], and $h_K$ is infinite because its abelianization is $6$ times the generator of $H_1(E_K)\cong\mathbb Z$. The group maps onto $S_3$ by $x\mapsto(12)$ and $y\mapsto(123)$, so it is nonabelian and $K$ is not the unknot, whose exterior group is $\mathbb Z$. [F2, F4, A1, algebra]

2.1 The peripheral formula in [F2] gives $h_K=\lambda_K+6\mu_K$. The companion embedding identifies $(\mu_V,\lambda_V)$ with $(\mu_K,\lambda_K)$. Therefore the two Seifert fibrations on the cut sides induce slopes $2\lambda+\mu$ and $\lambda+6\mu$ on the companion torus. Their determinant in the ordered basis $(\mu,\lambda)$ is $\det\begin{pmatrix}1&6\\2&1\end{pmatrix}=-11$, so the slopes are not parallel. [A1, F1, F2, step 1.1, algebra]

2.2 By [F7], the companion torus $T_c$ is essential. Hence the whole exterior $M=E_{P_{2,1}(K)}$ is not atoroidal. Both pieces cut along $T_c$ are Seifert-fibered by steps 1.1 and 1.3. [A1, F1, F2, F7, step 1.1, step 1.3]

2.3 The horizontal case is impossible. The interval-bundle bases inherit smooth transverse charts from the horizontal surface and the fiber charts. For any such compact connected surface with nonempty boundary, [F10] gives a finite triangulation. Root a spanning tree of its triangle-adjacency graph at a boundary edge. Delete each triangle across its exposed parent edge, starting at the root; this collapses the surface to a finite connected graph. Its group is therefore free, with rank equal to the rank of its abelianization, by collapsing a graph spanning tree. For a closed surface, the polygon models of [F5] give abelianization $\mathbb Z^{2g}$ in the orientable genus $g$ case and $\mathbb Z^{k-1}\oplus\mathbb Z/2$ in the nonorientable genus $k$ case, by adding the signed edge occurrences in its single face word. Hence a compact surface group with torsion-free rank-two abelianization is either the torus group $\mathbb Z^2$ or the free group of rank two; with torsion-free rank-one abelianization it is infinite cyclic. The cable group has abelianization $\mathbb Z^2$, is nonabelian because its quotient is $\mathbb Z*C_2$, and has the nonidentity central element $h$ since $[h]=-2[c]$ in its abelianization. It is neither $\mathbb Z^2$ nor the free group of rank two, whose center is trivial by [F11]. The trefoil group has abelianization $\mathbb Z$ and is nonabelian by step 1.3, so it too is not a surface group with that abelianization. Thus neither cut piece can be an interval bundle over a surface. [A1, F2, F4, F5, F10, F11, step 1.2, step 1.3, algebra, contradiction]

3.1 Suppose $M$ had a Seifert fibration. By [A2], countable choice holds, so [F13] makes $M$ irreducible. Then [F6] makes $T_c$ ambient isotopic to a vertical or horizontal torus. Isotopy preserves the homeomorphism types of the cut pieces. In the horizontal case, cutting along $T_c$ gives interval bundles over compact connected surfaces, so each side group is a surface group. [A1, A2, F6, F13, step 1.2, step 1.3, step 2.1, construct]

4.1 Suppose instead that $T_c$ is vertical after isotopy. Pull the hypothetical fibration back by that ambient isotopy, so the original $T_c$ is vertical and the original cut-piece markings are retained. Restriction gives a Seifert fibration on each cut piece with one common regular-fiber slope on $T_c$. Their boundary groups inject independently of any general knot-boundary incompressibility theorem. For the cable side this was proved in step 1.2. For the trefoil side, the peripheral formula of [F2], with $2(-1)+3(1)=1$, gives $\mu=y^{-1}x$ and $\lambda=h_K\mu^{-6}$. Thus $(\mu,h_K)$ is also a basis for its boundary-torus group. In the quotient $C_2*C_3$ the word $y^{-1}x$ is cyclically reduced of length two, so all its nonzero powers are nonidentity by [F4]. If $\mu^a h_K^b=1$, quotienting forces $a=0$, and the infinite order of $h_K$ from step 1.3 forces $b=0$. This proves injectivity of that boundary group. The two original fiber quotients are $\mathbb Z*C_2$ and $C_2*C_3$, respectively, by steps 1.2 and 1.3; neither is the two-order-two exception. Apply [F9] separately to the restricted hypothetical fibration on each side. Its common boundary-fiber slope must equal both original slopes, contradicting their determinant $-11$ in step 2.1. This rules out the vertical case; together with step 2.3 it proves that $M$ is not Seifert-fibered. [A1, F2, F4, F9, step 1.2, step 1.3, step 2.1, step 3.1, step 2.3, algebra, contradiction]

5.1 Steps 2.2 and 4.1 verify the nonamalgamation hypotheses of [F8], so the companion torus is a JSJ torus and the component outside the companion solid torus is $E_K$. The smooth ambient uniqueness in [F8] carries the original marked outside component to the outside component for any isotopic minimal JSJ torus. [A1, F1, F8, step 2.2, step 4.1] ∎
