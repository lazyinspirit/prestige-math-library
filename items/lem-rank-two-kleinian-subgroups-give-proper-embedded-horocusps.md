---
id: lem-rank-two-kleinian-subgroups-give-proper-embedded-horocusps
kind: lemma
title: Rank-two Kleinian subgroups give proper embedded horocusps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-hopf-rinow
proof_strategy: direct
axiom_use: Full AC is retained for the metric and covering interfaces; the matrix and cusp arguments use only finite choices and sequences.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Sections 4.6 and 4.12–4.13, discrete groups and cusp geometry; the rank-two and Shimizu matrix arguments required here are supplied explicitly
dependency_level: 0
---

## Statement

Assume AC. Use the upper half-space model $\mathbb H^3=\{(z,y):z\in\mathbb C,y>0\}$ with metric $(|dz|^2+dy^2)/y^2$. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be discrete and torsion-free, and suppose that it contains a subgroup $A\cong\mathbb Z^2$. Then $A$ fixes a unique ideal point. After conjugating that point to infinity, its full stabilizer $P=\operatorname{Stab}_\Gamma(\infty)$ consists of translations by a lattice $\Lambda\le\mathbb C$ of rank two. It is the unique maximal abelian subgroup containing $A$.

For a sufficiently large $R$, the quotient of the closed horoball $\{y\ge R\}$ by $P$ embeds properly in $M=\Gamma\backslash\mathbb H^3$. Its boundary is a compact torus, its interior is a cusp, and its volume is $\operatorname{area}(\mathbb C/\Lambda)/(2R^2)$. If $M$ has exactly one topological end, the complement of the open cusp has compact closure.

No finite-volume thin decomposition, abstract peripheral recognition, or rigidity theorem is assumed or concluded here. The rank-two subgroup and the quotient presentation of $M$ are hypotheses.

## Facts & Assumptions

**Given:** AC, the displayed model, the discrete torsion-free subgroup and its supplied rank-two abelian subgroup.

[A1] AC is [[def-axiom-of-choice]] and supplies the countable-choice hypothesis of [[thm-hopf-rinow]].

[F1] Hopf–Rinow makes a complete connected finite-dimensional Riemannian manifold proper as a metric space. [[thm-hopf-rinow]]

[L1] In this proof, discreteness means the identity is isolated in the subgroup. A discrete subgroup of a matrix Lie group is closed: if distinct subgroup elements converge to a matrix, their pairwise quotients converge to the identity, contradicting its isolation. Consequently its intersection with any compact set is finite.

## Proof

1.1 A nonidentity element of $\Gamma$ is parabolic or loxodromic. Indeed, represent it by a determinant-one complex matrix and examine its eigenvalues. A repeated eigenvalue gives either the identity in the projective group or a nontrivial unipotent matrix, which is conjugate to a translation. Distinct eigenvalues give a diagonal matrix with entries $\lambda,\lambda^{-1}$. If $|\lambda|\ne1$ it is loxodromic. If $|\lambda|=1$, its powers lie in a compact circle subgroup; either it has finite order, contrary to torsion-freeness, or distinct powers have quotients tending to the identity, contrary to discreteness. This also proves directly that no nontrivial elliptic element occurs. [given, L1, algebra]

2.1 Suppose that an abelian subgroup contains a loxodromic element. Every matrix commuting with it preserves its two distinct eigenlines individually: interchanging them would conjugate its eigenvalue ratio to its inverse, which is different because its modulus is not one. Its centralizer is therefore the diagonal group, identified with $\mathbb C^*$. Every discrete torsion-free subgroup $D$ of this group is cyclic. For each $B>0$, the annulus $e^{-B}\le|z|\le e^B$ is compact, so contains only finitely many elements of $D$ by [L1]. The kernel of $z\mapsto\log|z|$ is a finite subgroup of the unit circle and hence trivial. If $D$ is nontrivial, this map therefore has a smallest positive value $b$: choose one positive value $B$, and minimize among the finitely many in $(0,B]$. Division with remainder by $b$ shows that every value is an integer multiple of $b$, proving the cyclic assertion. Thus $A$ cannot contain a loxodromic element. [given, L1, step 1.1, algebra]

3.1 Choose a nonidentity element of $A$. By steps 1.1–2.1 it is parabolic; conjugate its unique fixed point to infinity. Every element commuting with it fixes that point and, writing the parabolic as $z\mapsto z+\lambda$ with $\lambda\ne0$, commutation forces the affine multiplier to be one. Thus $A$ consists of translations. In fact every element of $P$ is a translation. Write such an element as $z\mapsto az+b$. If $|a|\ne1$, its conjugation action multiplies translation vectors by $a$, so conjugating $z\mapsto z+\lambda$ by positive or negative powers gives nontrivial translations tending to the identity. If $|a|=1$ and $a\ne1$, it fixes both infinity and the finite point $b/(1-a)$ and is elliptic, excluded by step 1.1. Hence $a=1$. The common fixed point is unique, since already the chosen nonidentity parabolic has just one. [given, step 1.1, step 2.1, algebra]

4.1 A discrete additive subgroup $\Lambda$ of $\mathbb C\cong\mathbb R^2$ has rank at most two. Here are the needed elementary details. Choose a shortest nonzero vector $v$, whose existence follows from finiteness in bounded disks. If every vector is collinear with $v$, division with remainder along that line proves $\Lambda=\mathbb Zv$. Otherwise subtract integer multiples of $v$ to put the parallel component of every vector in $[0,|v|)$. Among vectors with positive perpendicular component, a least such component exists: below any fixed positive candidate and with that normalized parallel component, there are finitely many vectors in a compact rectangle. Choose a vector $w$ realizing it. Division with remainder in the perpendicular direction, followed by division along $v$, shows that every vector is in $\mathbb Zv+\mathbb Zw$. Since $A$ has rank two, the collinear case is impossible. Therefore the translation vectors of $P$ form a rank-two lattice $\Lambda$. An element centralizing $A$ must centralize its chosen parabolic and hence belong to $P$ by step 3.1; since $P$ is abelian, it is the unique maximal abelian subgroup containing $A$. [given, L1, step 3.1, algebra]

4.2 Rescale the finite boundary coordinate so that $T:z\mapsto z+1$ belongs to $\Gamma$. If $g=\left[\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right]\in\Gamma$ has $c\ne0$, then $|c|\ge1$. To prove this, suppose $0<|c|<1$ and choose a determinant-one lift $g_0$. Define $g_{n+1}=g_nTg_n^{-1}$ using the lift $T=\left[\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right]$. Matrix multiplication gives $$ g_{n+1}=\begin{pmatrix}1-a_nc_n&a_n^2\\-c_n^2&1+a_nc_n\end{pmatrix},\qquad c_{n+1}=-c_n^2. $$ Put $r=|c_0|<1$. Then $|c_n|=r^{2^n}$ and $|a_{n+1}|\le1+r|a_n|$, so $|a_n|\le\max\{|a_0|,(1-r)^{-1}\}$. Consequently $a_{n+1}\to1$, $a_n^2\to1$ and $g_n\to T$. Their nonzero lower-left entries have distinct absolute values, so these are distinct projective matrices. This contradicts discreteness and proves the bound. [given, L1, step 3.1, algebra]

5.1 The extension of a Möbius matrix to upper half-space has height coordinate $$ y(g(z,y))=\frac{y}{|cz+d|^2+|c|^2y^2}. $$ This follows by composing translations, rotations and dilations with inversion; these generate the determinant-one matrices by Gaussian elimination. For $c\ne0$ and $y\ge R$, step 4.2 therefore gives $y(g(z,y))\le1/R$. Choose $R>1$. Then every translate of the closed horoball by an element outside $P$ is disjoint from that horoball, whereas translations in $P$ preserve it. Thus $\{y\ge R\}$ is precisely invariant under $P$, and its quotient injects into $M$. The strict inequality $1/R<R$ gives an embedded boundary collar as well. [step 3.1, step 4.2, algebra]

6.1 This quotient map is a proper embedding. A closed horoball quotient has the coordinates $(\mathbb C/\Lambda)\times[R,\infty)$. If a sequence escapes every compact subset of this product, its heights tend to infinity after passing to a subsequence, because the horizontal factor is compact. For a fixed nonzero $\lambda\in\Lambda$, the distance between $(z,y)$ and $(z+\lambda,y)$ is $2\operatorname{arsinh}(|\lambda|/(2y))$, as follows by the hyperbolic distance formula in a vertical half-plane. Hence the injectivity radii of their images in $M$ tend to zero. On every compact subset of $M$ the injectivity radius is bounded below by a positive constant: each point has an evenly covered small metric ball, and finitely many smaller such balls cover a compact set. Thus this escaping sequence cannot have its image in a compact set. Sequential compactness in metric spaces proves properness. An injective proper local embedding is an embedding, giving the assertion. [given, step 4.1, step 5.1, algebra]

7.1 The volume density is $y^{-3}\,dx_1dx_2dy$. Integrating over one Euclidean fundamental parallelogram and $y\ge R$ gives $\operatorname{area}(\mathbb C/\Lambda)\int_R^\infty y^{-3}dy=\operatorname{area}(\mathbb C/\Lambda)/(2R^2)$. This also identifies the compact boundary as a torus and the open interior as its product with a half-line. [step 4.1, step 6.1, algebra]

8.1 The quotient $M$ is complete: a geodesic lifts locally to $\mathbb H^3$ and its lifted geodesic is defined for all real time, so it projects to a global extension. Hence [F1] makes $M$ proper. Let $C$ be the embedded closed horocusp and $S=\partial C$. Its interior is a connected component of $M\setminus S$: it is open there, and it is closed there by properness in step 6.1. The other side is connected. Indeed, the outward collar of the connected torus $S$ belongs to a single component; any other component of the complement of $C$ would have no frontier in $M$ and would be both open and closed, contradicting connectedness of $M$. If that other side had noncompact closure, both sides of the compact separator $S$ would be nonrelatively compact components. This contradicts the one-end hypothesis, since in an interior of a compact collared manifold the definition of one end says that exactly one component of the complement of any sufficiently large compact set is nonrelatively compact. More generally this follows from the usual exhaustion definition of one end, applied after adding a compact connected set containing $S$. Thus the other side has compact closure. This proves the last assertion; it does not assert that arbitrary many-ended quotients have compact complement of a single horocusp. [A1, F1, given, step 6.1, construct] ∎
