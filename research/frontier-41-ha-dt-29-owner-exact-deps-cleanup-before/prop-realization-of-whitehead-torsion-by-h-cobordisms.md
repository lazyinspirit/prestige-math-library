---
id: prop-realization-of-whitehead-torsion-by-h-cobordisms
kind: proposition
title: Realization of prescribed Whitehead torsion by h-cobordisms
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 11
deps:
- lem-whitehead-classes-are-represented-by-invertible-matrices
- lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence
- def-based-handle-chain-complex-over-the-fundamental-group-ring
- def-whitehead-torsion-of-an-h-cobordism
- def-h-cobordism
- thm-creation-of-a-cancelling-handle-pair
- lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- def-countable-choice
- lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
- lem-embedded-bands-joining-two-framed-spheres-exist
- thm-handle-duality-from-negating-a-morse-function
provenance:
  statement: ai-altered
  proof: ai-altered
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete
      author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1 §1.4, Lemma 1.27(2) and its proof, printed pp. 19--20
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)
    url: https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf
    locator: "Proposition 8.22, printed p. 179; PDF page 187"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a nonempty closed connected oriented smooth
$n$-manifold with $n\ge5$ and $\pi=\pi_1(M)$. For every
$u\in\operatorname{Wh}(\pi)$ there exist a compact smooth h-cobordism
$(W;M,M')$ of dimension $n+1$ and a finite handle presentation of $(W,M)$
relative to $M$ in degrees $2$ and $3$ whose intersection matrix $A$ is
invertible with class $[A]=u$ in $\operatorname{Wh}(\pi)$; in particular the
presentation-indexed class $\tau_H(W,M)$ equals $u$ because the differential is
in degree $3$ and the parity sign is $(-1)^2=1$. The construction attaches $c$
trivially embedded $2$-handles to $M\times[0,1]$ and then $c$ $3$-handles whose
attaching spheres realize the prescribed algebraic intersections, using the
group-labelled realization of prescribed intersection elements. The
construction realizes any prescribed invertible matrix $A$ with $[A]=u$, not just some representative of $u$. It is performed in the oriented category: $M\times[0,1]$ carries the
product orientation and the attached handles inherit orientations from their
framings, so all intersection numbers are the oriented ones.

## Facts & Assumptions

**Given:** The Axiom of Choice and a nonempty closed connected oriented smooth $n$-manifold $M$ with $n\ge5$, its fundamental group $\pi$, and an element $u\in\operatorname{Wh}(\pi)$.

[F1] Every class $u\in\operatorname{Wh}(\pi)$ is represented by an invertible matrix $A\in\mathrm{GL}_c(\mathbb Z[\pi])$ for some $c\ge1$, and stabilization does not change the class ([[lem-whitehead-classes-are-represented-by-invertible-matrices]]).

[F2] A standard cancelling $2/3$-handle pair supplies a framed $2$-sphere meeting the $2$-handle belt once. Parallel copies and embedded framed bands realize signed group-labelled sums of these spheres; attaching isotopies preserve the relative diffeomorphism type. The $2$-handle belt need not bound a disk. [[thm-creation-of-a-cancelling-handle-pair]], [[lem-embedded-bands-joining-two-framed-spheres-exist]], [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]], [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]

[F3] The presentation with handles only in degrees $2$ and $3$ has based relative complex $0\to\mathbb Z[\pi]^c\xrightarrow{A}\mathbb Z[\pi]^c\to0$; when $A$ is invertible this complex is contractible, its contraction torsion has class $A$ in the parity convention of a differential in degree $3$, and the presentation-indexed torsion of an h-cobordism is that contraction torsion ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-whitehead-torsion-of-an-h-cobordism]]).

[F4] Under the Axiom of Choice assumed here, a contractible based relative complex whose $\pi_1$-hypothesis holds makes the corresponding boundary inclusion a homotopy equivalence, and in a realization presentation with relative cells in degrees $2$ and $3$ the dual reading gives the other boundary inclusion as well ([[lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence]], [[def-h-cobordism]]).

[F5] Nullhomotopic attaching circles leave the incoming fundamental group unchanged at a $2$-handle level, whose outgoing boundary and full belt complement have the same fundamental group. Dual handles have complementary indices. [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]], [[thm-handle-duality-from-negating-a-morse-function]]

## Proof

1.1 Choose an invertible matrix $A=(a_{ij})\in\mathrm{GL}_c(\mathbb Z[\pi])$ with class $u$ by [F1]. Attach $c$ pairwise disjoint standard framed $2$-handles along circles bounding disks in $M$, giving $W_2$ and its outgoing level $N$. The circles are nullhomotopic, so [F5] identifies $\pi_1(N)\cong\pi_1(W_2)\cong\pi$. [F1, F2, F5, given]

2.1 For each handle take its standard framed cancelling $2$-sphere from [F2], meeting its belt once and the others not at all. For every monomial $\pm\gamma$ in column $i$ of $A$, take a disjoint parallel copy of the corresponding sphere, reversing its orientation for a negative sign. Join those finitely many copies by framed bands whose core paths represent the prescribed labels. Such paths exist in the full belt complement by [F5] and step 1.1 and can be chosen embedded and away from the copied spheres; $1+2<n$ permits the needed relative general-position avoidance. Their transverse $2$-disk thickenings give the bands of [F2]. The connected sum is a framed embedded $2$-sphere with intersection vector $\sum_j[\varphi_j^2]\cdot a_{ji}$. The framing is the one explicitly glued from the copies and framed bands; no generic unframed sphere is declared to have trivial normal bundle. [F2, F5, step 1.1]

3.1 Construct the finite columns successively. Perturb and route the new copies and bands relative to their fixed end disks so that the column spheres remain pairwise disjoint: two $2$-sphere images have expected intersection dimension $4-n<0$, and band cores avoid previously constructed $2$-spheres since $3-n<0$. Normal parallel copies and their glued frames are retained. Attach the $c$ $3$-handles along these framed column spheres. By construction their algebraic attaching-belt matrix is exactly $A$, so [F3] gives the contractible relative complex with contraction torsion $(-1)^2[A]=u$. This construction realizes arbitrary columns directly; it does not use a homology lemma that only handles unit rows. [F2, F3, step 2.1]

4.1 The incoming inclusion induces a fundamental-group isomorphism because the $2$-handle attaching loops are null and $3$-handles change no fundamental group. In the reverse presentation the handle indices are $n-2$ and $n-1$, both at least three for $n\ge5$, so the outgoing inclusion also induces a fundamental-group isomorphism. Its relative complex is the dual of the two-term complex, with adjoint-transpose differential of $A$, hence invertible as well. Apply the homotopy-equivalence criterion [F4] at both ends. Thus the result is the required oriented h-cobordism with its prescribed presentation and torsion. [F3, F4, F5, step 3.1] ∎
