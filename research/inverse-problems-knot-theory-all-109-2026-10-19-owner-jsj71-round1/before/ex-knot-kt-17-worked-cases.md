---
id: ex-knot-kt-17-worked-cases
kind: example
title: "A (2,1)-cable of the right trefoil"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - lem-satellite-torus-is-essential
  - lem-knot-exterior-is-irreducible
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - thm-jsj-decomposition-of-knot-exteriors
  - cor-satellite-companion-is-detected-by-jsj
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-classification-of-compact-connected-surfaces
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the torus-knot group/peripheral supplier and the satellite-companion theorem; its countable-choice consequence is used by the knot-exterior irreducibility supplier."
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

Assume full AC. In the standard solid torus $V=S^1\times D^2$, let $P_{2,1}$ be the oriented curve $s\mapsto(e^{4\pi i s},r e^{2\pi i s})$ on an interior parallel torus, where $0<r<1$. Let $K=T(2,3)$ be the right trefoil and use the companion embedding that matches the product meridian and longitude of $V$ to the positive meridian and preferred longitude of $K$. Then the companion torus in the exterior of $P_{2,1}(K)$ is essential and satisfies the nonamalgamation hypotheses of the companion-detection corollary; its outside piece is exactly the trefoil exterior.

The first panel shows a lift of the pattern to the universal cover of the parallel torus: horizontal and vertical unit translations correspond to longitude and meridian, so the segment from $(0,0)$ to $(2,1)$ projects to the closed slope $2\lambda_V+\mu_V$. The second panel shows the exterior cut along the companion torus; its boxes are pieces, and the labels are the two regular-fiber slopes induced on their common torus. Both panels are schematic, not planar knot projections, and no proof step depends on them.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.82]
  % Lift of the pattern to two longitude periods and one meridian period.
  \draw (0,0) rectangle (2.2,1.1);
  \draw[densely dashed] (1.1,0) -- (1.1,1.1);
  \draw[->,very thick] (0,0) -- (2.2,1.1);
  \node[above] at (1.1,1.1) {two longitude periods};
  \node[left] at (0,.55) {one meridian period};
  \node[below] at (1.1,0) {$2\lambda_V$};
  \node[above left] at (0,0) {start};
  \node[above right] at (2.2,1.1) {same point in $T^2$};
  \node at (1.1,-.45) {slope $2\lambda_V+\mu_V$};

  % The JSJ cut: the shared vertical edge represents the companion torus.
  \draw (3.5,0) rectangle (4.9,1.1);
  \draw (4.9,0) rectangle (6.3,1.1);
  \node at (4.2,.72) {$E_K$};
  \node at (4.2,.36) {$f_K=\lambda+6\mu$};
  \node at (5.6,.72) {$X_{P_{2,1}}$};
  \node at (5.6,.36) {$f_P=2\lambda+\mu$};
  \node[above] at (4.9,1.1) {$T_c$};
  \node[below] at (5.6,0) {$\partial E_{P_{2,1}(K)}$};
  \node at (4.9,-.45) {cut and glue along $T_c$};
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

[F5] The compact connected surface classification identifies the possible surface groups from orientability, boundary, and Euler characteristic ([[thm-classification-of-compact-connected-surfaces]], Statement).

[F6] A two-sided essential torus in an irreducible Seifert-fibered manifold is isotopic to a vertical or horizontal torus; horizontal tori cut the manifold into interval bundles ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F7] Under the stated pattern and nontrivial-companion hypotheses, the companion torus is incompressible and non-boundary-parallel ([[lem-satellite-torus-is-essential]], Statement).

[F8] An irreducible satellite exterior with this torus, Seifert or atoroidal sides, and no global Seifert or atoroidal structure has that torus in its unique minimal JSJ system ([[cor-satellite-companion-is-detected-by-jsj]], Statement; uniqueness proof currently escalated in [[thm-jsj-decomposition-of-knot-exteriors]]).

[F9] A noninjective inclusion from a connected boundary torus of a compact orientable finitely triangulated $3$-manifold gives a compressing disk by the Loop Theorem ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement).

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

## Proof

1.1 The circle action $t\cdot(z,w)=(e^{4\pi i t}z,e^{2\pi i t}w)$ on $S^1\times D^2$ has generic orbit slope $2\lambda_V+\mu_V$. The given pattern is one such orbit. The core $S^1\times\{0\}$ has stabilizer of order $2$, while generic points have trivial stabilizer. Removing a tube about the regular orbit $P_{2,1}$ therefore gives a Seifert fibration of $X_{P_{2,1}}$ over an annulus with one exceptional point of multiplicity $2$. On the outer torus its regular-fiber slope is $2\lambda_V+\mu_V$. [A1, F1, given, construct]

1.2 Remove a small neighborhood of the exceptional point from the annulus base. The remaining pair of pants has fundamental group freely generated by a loop $a$ around the outer boundary and a loop $c$ around the removed cone point; its third boundary loop is $(ac)^{-1}$. The circle bundle over this pair of pants has a section: it retracts to a graph, and a section over that graph is obtained by choosing one point in the fiber at the vertex and extending over each edge. Thus its group has generators $a,c,h$, with $h$ the fiber and $[a,h]=[c,h]=1$. The order-two local model $(z,w)\mapsto(-z,-w)$ around the exceptional core identifies the filled meridian with $c^2h$ after replacing $c$ by $ch^k$ if necessary: one circuit of the cone-point boundary lifts from $(z,w)$ to $(-z,-w)$, so two circuits equal one inverse fiber turn, and the twisting coefficient is odd. Filling that neighborhood kills this meridian. By [F3],
$$
\pi_1(X_{P_{2,1}})=\langle a,c,h\mid [a,h]=[c,h]=1,\ c^2h=1\rangle.
$$
Its quotient by $\langle h\rangle$ is $\mathbb Z*C_2$, which is nonabelian by reduced normal forms [F4]; hence $X_{P_{2,1}}$ is not $T^2\times I$. Its outer boundary subgroup is generated by $a,h$. The abelianization is free on $[a],[c]$ with $[h]=-2[c]$, so $a^m h^n=1$ implies $m=0$ and $n=0$. Thus the outer torus group injects into $\pi_1(X_{P_{2,1}})$ and has no compressing disk. [F1, F3, F4, step 1.1, algebra, construct]

2.1 For the trefoil, [F2] gives $\pi_1(E_K)=\langle x,y\mid x^2=y^3\rangle$ and regular fiber $h_K=x^2=y^3$. Its quotient by $\langle h_K\rangle$ is $C_2*C_3$, nonabelian by [F4], and $h_K$ is infinite because its abelianization is $6$ times the generator of $H_1(E_K)\cong\mathbb Z$. The group maps onto $S_3$ by $x\mapsto(12)$ and $y\mapsto(123)$, so it is nonabelian and $K$ is not the unknot, whose exterior group is $\mathbb Z$. [F2, F4, A1, algebra]

2.2 The peripheral formula in [F2] gives $h_K=\lambda_K+6\mu_K$. The companion embedding identifies $(\mu_V,\lambda_V)$ with $(\mu_K,\lambda_K)$. Therefore the two Seifert fibrations on the cut sides induce slopes $2\lambda+\mu$ and $\lambda+6\mu$ on the companion torus. Their determinant in the ordered basis $(\mu,\lambda)$ is $\det\begin{pmatrix}1&6\\2&1\end{pmatrix}=-11$, so the slopes are not parallel. [F1, F2, step 1.1, algebra]

3.1 By [F7], the companion torus $T_c$ is essential. Hence the whole exterior $M=E_{P_{2,1}(K)}$ is not atoroidal. Both pieces cut along $T_c$ are Seifert-fibered by steps 1.1 and 2.1. [F1, F2, F7, step 1.1, step 2.1]

3.2 Suppose $M$ had a Seifert fibration. It is irreducible by [[lem-knot-exterior-is-irreducible]], so [F6] makes $T_c$ ambient isotopic to a vertical or horizontal torus. Isotopy preserves the homeomorphism types of the cut pieces. In the horizontal case, cutting along $T_c$ gives interval bundles over compact connected surfaces, so each side group is a surface group. [F2, F6, step 1.2, step 2.1, step 2.2, construct]

3.3 The horizontal case is impossible. The cable group has torsion-free abelianization $\mathbb Z^2$ and contains the nontrivial central element $h$. By [F5], the only compact connected surface groups with torsion-free rank-two abelianization are $\mathbb Z^2$ and the free group of rank two; their centers are the whole group and trivial, respectively. The cable group is nonabelian (its quotient by $h$ is $\mathbb Z*C_2$), so it is neither. The trefoil group has abelianization $\mathbb Z$ and is nonabelian (it maps onto $S_3$), while by [F5] the only compact connected surface groups with torsion-free rank-one abelianization are infinite cyclic groups. Thus neither cut piece can be an interval bundle over a surface. [F2, F4, F5, step 1.2, step 2.1, algebra, contradiction]

3.4 Suppose instead that $T_c$ is vertical after isotopy. A regular fiber $g$ of the hypothetical fibration is then a primitive curve on $T_c$. Conjugation along any loop preserves or reverses a regular fiber, so $g^2$ is central in $\pi_1(M)$. The two cut-piece groups embed in $\pi_1(M)$: the outer torus map is injective by step 1.2, and the companion boundary map is injective because a kernel would give a compressing disk by [F9], contrary to [[lem-nontrivial-knot-exterior-boundary-incompressible]]; van Kampen and amalgam normal form then embed both side groups. The cable group has center exactly $\langle h\rangle$: $h$ is central, is infinite by its abelianization, and quotienting by it gives $\mathbb Z*C_2$, whose center is trivial by reduced-word normal forms [F4]. Likewise the trefoil group has center exactly $\langle h_K\rangle$, since $h_K$ is central and infinite and the quotient is $C_2*C_3$, whose center is trivial by reduced-word normal forms. In $\mathbb Z*C_2$, a central word lies in both factor centralizers $\langle a\rangle$ and $\langle c\rangle$; in $C_2*C_3$, it lies in both factor centralizers $C_2$ and $C_3$. Reduced normal forms give these centralizers and each intersection is trivial. Thus in each boundary-torus group the class of $g^2$ is a nonzero power of that side's regular fiber. Since $g$ and each side fiber are primitive in $H_1(T_c;\mathbb Z)$, $2[g]=n[f]$ forces $n=\pm2$ and $[g]=\pm[f]$. The global fiber slope must equal each side fiber slope, contradicting the determinant $-11$ in step 2.2. This rules out the vertical case as well, so $M$ is not Seifert-fibered. [F3, F4, F7, F9, step 1.2, step 2.1, step 2.2, step 3.2, step 3.3, algebra, contradiction]

4.1 Steps 3.1 and 3.4 verify the nonamalgamation hypotheses of [F8], so the companion torus is a JSJ torus and the component outside the companion solid torus is $E_K$. The uniqueness proof in [F8] still has unresolved exceptional-piece cases recorded in [[thm-jsj-decomposition-of-knot-exteriors]]; accordingly this example is escalated pending completion of that supplier proof. [F1, F8, step 3.1, step 3.4]
