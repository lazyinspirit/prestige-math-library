---
id: lem-string-link-exterior-homology-and-meridian-maps
kind: lemma
title: String-link exterior homology and end-meridian maps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-excision-for-singular-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - cor-homology-of-spheres
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-singular-chain-complex-and-singular-homology
  - thm-cellular-homology-computes-singular-homology
  - thm-fundamental-group-of-finite-wedge-of-circles
  - lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §2 and Lemma 2, PDF pp. 2–3
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: §2.5, printed pp. 16–18 (PDF pp. 24–26)
---

## Statement

Use integral homology. Let $L=K_1\cup\cdots\cup K_r$ be a nonempty labeled oriented smooth link in $S^3$ with chosen pairwise disjoint product tubes and exterior $E_L$. Then $H_1(E_L;\mathbb Z)\cong\mathbb Z^r$, with the positive meridians as its ordered basis. Each boundary torus $T_i$ has a product basis consisting of its positive meridian and a degree-one section. There is a unique degree-one class on $T_i$ whose image has zero $i$th meridian coordinate; this class is primitive and has a simple closed representative.

Let $\tau$ be an $r$-component string link with chosen disjoint product tubes in $D^2\times[0,1]$, exterior $X_\tau$, and bottom and top punctured disks $P_-$ and $P_+$. Then each $\pi_1(P_\pm)$ is free of rank $r$. Positive endpoint meridians with the compatible accesses transported from a point-punctured-disk spine form an ordered free basis. For arbitrary independently chosen access paths, the corresponding meridian is $c_i m_i c_i^{-1}$, where $m_i$ is the compatible-stem meridian and $c_i$ is the recorded access-path difference; these conjugates need not be a free basis. In particular $H_1(P_\pm;\mathbb Z)\cong\mathbb Z^r$, and $H_2(P_\pm;\mathbb Z)=0$. The exterior satisfies $H_1(X_\tau;\mathbb Z)\cong\mathbb Z^r$ and $H_2(X_\tau;\mathbb Z)=0$. Each end inclusion sends its ordered positive meridian basis to the ordered positive meridian basis of $H_1(X_\tau;\mathbb Z)$. Consequently both induced homomorphisms on $H_1$ are isomorphisms and both induced homomorphisms on $H_2$ are surjective.

## Statement references

[[def-based-string-link-and-labeled-link-peripheral-system|Chosen string-link tubes, ends, and meridian orientations]]

[[thm-excision-for-singular-homology|Relative homology excision]]

[[thm-long-exact-sequence-of-a-pair-in-singular-homology|Long exact sequence of a pair]]

## Facts & Assumptions

**Given:** The link and string-link tube data specified in the statement.

[F1] Excision identifies relative homology after removing a subset whose closure lies in the interior of the subspace. [[thm-excision-for-singular-homology]]

[F2] Each pair of spaces has its long exact singular-homology sequence, natural for maps of pairs. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F3] A circle has $H_1(S^1;\mathbb Z)\cong\mathbb Z$; $S^3$ has $H_1(S^3;\mathbb Z)=H_2(S^3;\mathbb Z)=0$. [[cor-homology-of-spheres]]

[F4] The tube and positive-meridian orientations are those in the based peripheral definition. [[def-based-string-link-and-labeled-link-peripheral-system]], [[def-knot-meridian-and-preferred-longitude]]

[F5] The fundamental group of a wedge of $r$ circles is free on the $r$ once-around loops. [[thm-fundamental-group-of-finite-wedge-of-circles]]

[F6] Homotopic maps induce the same singular-homology map, and a point has homology $\mathbb Z$ in degree zero and zero in higher degrees. [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], [[def-singular-chain-complex-and-singular-homology]]

[F7] The cellular chain complex computes singular homology for CW complexes and cellular maps. [[thm-cellular-homology-computes-singular-homology]]

[F8] A disk with finitely many point punctures has the homotopy type of a wedge of circles, with a compatible positive meridian free basis, by the explicit rotation, shear, radial and vertical retractions. No choice axiom is assumed. [[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]

[F9] The degree-one Hurewicz map is the abelianization map; in particular loop concatenation adds homology classes and conjugation leaves them unchanged, without any choice axiom. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

## Proof

**Given:** The chosen tubes and oriented meridian conventions.

1.1 Let $P=D^2\setminus\bigcup_i\operatorname{int}D_i$ be either endpoint surface. The supplied product tubes parametrize the pairwise disjoint endpoint disks by $\phi_i:D^2\to D_i$, with $\phi_i(0)=p_i$. Put $Q=D^2\setminus\{p_1,\ldots,p_r\}$. On $D_i\setminus\{p_i\}$ write a point as $\phi_i(ru)$ with $0<r\le1$, $|u|=1$, and set $$R_t(\phi_i(ru))=\phi_i(((1-t)r+t)u).$$ Put $R_t=\mathrm{id}$ outside the interiors of these disks. At $r=1$ the formulas agree, so finite pasting gives a deformation retraction $Q\to P$. This uses the supplied disk coordinates, not a triangulation of an arbitrary smooth planar region. A collar of the outer unit circle misses all $p_i$. In its radial coordinate a continuous inward push, equal to the identity off that collar, gives a homotopy inverse to $\operatorname{int}D^2\setminus\{p_i\}\hookrightarrow Q$; throughout the homotopy no puncture is crossed. By [F8] the open punctured disk has a finite circle-wedge model and a positive meridian free basis. Transfer it across these displayed equivalences, changing basepoint along the recorded collar path when needed. Small loops about $p_i$ become the positive endpoint meridians: the annulus $\phi_i(ru)$ carries their orientation to the tube boundary. The accesses are the jointly transported stem paths of that finite spine; their images need not be arbitrary preselected accesses. If $a_i$ and $a_i'$ are compatible and arbitrary accesses to the same meridian circle, then $c_i=a_i'a_i^{-1}$ is a based loop and $a_i'\mu_i(a_i')^{-1}=c_i(a_i\mu_i a_i^{-1})c_i^{-1}$. Thus independent basings conjugate generators, without asserting they remain a free basis. Conjugation leaves their homology classes unchanged by [F9]. The homotopy type and abstract free rank are unchanged. [F4, F5, F8, F9, given, construct, algebra]

1.2 For a closed link, enlarge each solid torus tube by a small radial collar and apply [F1] to the pair $(S^3,E_L)$; the collar deformation retracts the enlarged-tube pair to $(S^1\times D^2,S^1\times S^1)$. The product torus has a CW structure with one vertex, two edges, and one face attached by a commutator, so [F7] gives $H_1(S^1\times S^1)\cong\mathbb Z^2$ with meridian and section basis. The solid torus retracts to its core circle, so [F3, F6] give $H_2(S^1\times D^2)=0$ and $H_1(S^1\times D^2)\cong\mathbb Z$, with the meridian mapping to zero and the section to a generator. The pair sequence [F2] therefore identifies $H_2(S^1\times D^2,S^1\times S^1)$ with the kernel generated by the meridian. Excision gives $H_2(S^3,E_L)\cong\mathbb Z^r$. By [F2] and [F3], the boundary homomorphism $H_2(S^3,E_L)\to H_1(E_L)$ is an isomorphism. Each relative generator is a normal disk and its boundary is the positive meridian by [F4]. Hence the positive meridians form the ordered basis of $H_1(E_L)$. [F1, F2, F3, F4, F6, F7, construct]

2.1 Let $D_i^+$ be disjoint disks slightly larger than the removed endpoint tube disks. The closed complement of their interiors lies in the interior of $P$ relative to $D^2$. By [F1], $H_*(D^2,P)$ is the direct sum of the relative groups of the $r$ disk pairs $(D_i^+,D_i^+\setminus\operatorname{int}D_i)$. Radial collars identify each pair with $(D^2,S^1)$. By [F2], [F3], and [F6], the relative group of this disk pair is $\mathbb Z$ in degree $2$ and zero in every other degree. Its boundary map sends the relative disk to the positive endpoint meridian. Applying [F2] to $(D^2,P)$, with $D^2$ contractible by radial contraction, therefore gives $H_1(P)\cong\mathbb Z^r$ with that basis and $H_2(P)=0$. [F1, F2, F3, F4, F6, step 1.1]

3.1 For each string component, enlarge its chosen product tube by a small radial collar. The complement of these enlarged tubes has closure in the interior of $X_\tau$; excising it by [F1] reduces $(D^2\times[0,1],X_\tau)$ to the disjoint union of tube pairs. In each pair, the radial collar deformation retracts the pair to $([0,1]\times D^2,[0,1]\times S^1)$: the endpoint cap annuli retract to their boundary circles and the lateral shell retracts to the original tube boundary. Contracting the interval factor identifies this pair with $(D^2,S^1)$. By [F2], [F3], and [F6], each pair has relative homology $\mathbb Z$ in degree $2$ and zero in every other degree. Therefore $H_2(D^2\times[0,1],X_\tau)\cong\mathbb Z^r$ and its relative homology vanishes in degrees $1$ and $3$. [F1, F2, F3, F6, given, step 2.1, construct]

4.1 The ambient cylinder is contractible, so its positive-degree homology vanishes by [F6]. Its pair long exact sequence from [F2], together with step 3.1, gives $H_2(X_\tau)=0$ from the segment $H_3(B,X_\tau)\to H_2(X_\tau)\to H_2(B)$, and gives an isomorphism $\partial:H_2(B,X_\tau)\to H_1(X_\tau)$ from the segment $H_2(B)\to H_2(B,X_\tau)\xrightarrow{\partial}H_1(X_\tau)\to H_1(B)$. Thus $H_1(X_\tau)\cong\mathbb Z^r$. [F2, F6, step 3.1, algebra]

5.1 For each endpoint, map the pair $(D^2,P)$ into $(B,X_\tau)$ using the endpoint disk and its product tube. Naturality of the connecting map in [F2] sends the relative class of the $i$th endpoint disk to the relative cross-sectional disk class of the $i$th tube. By step 4.1 those classes map to the ordered basis of $H_1(X_\tau)$. By step 2.1 their boundaries are the positive meridian basis of $H_1(P_\pm)$. Each end inclusion therefore induces the asserted $H_1$ isomorphism. Since $H_2(P_\pm)=H_2(X_\tau)=0$, it also induces the asserted $H_2$ epimorphism. [F2, F4, step 2.1, step 4.1, construct]

6.1 The product torus $T_i$ has $H_1(T_i)\cong\mathbb Z^2$ with basis the positive meridian and the chosen degree-one section. Write the image of the section in the basis from step 1.2 and let $k_i$ be its $i$th coordinate. Subtracting $k_i$ times the meridian gives the unique degree-one class with zero $i$th coordinate. Its coordinates in the product basis are $(-k_i,1)$, so it is primitive; the curve $t\mapsto(e^{2\pi it},e^{-2\pi i k_i t})$ in product coordinates is an embedded representative. [F3, F4, step 1.2, algebra, construct] ∎

## Remarks

The diagram illustrates compatible access paths for $r=3$. Step 1.1 uses the supplied disk-coordinate retraction and the explicit finite punctured-disk spine, not this drawing or an unproved smooth triangulation.

~~~tikz
\begin{tikzpicture}[scale=1.0]
\draw[thick] (0,0) circle (2);
\draw[thick] (-0.85,0.55) circle (0.28);
\draw[thick] (0.85,0.55) circle (0.28);
\draw[thick] (0,-0.75) circle (0.28);
\draw[dashed,->] (0,-2) -- (-0.4,-1.76) -- (-1.2,-1.55) -- (-1.45,-1.0) -- (-1.35,-0.5) -- (-1.1,0) -- (-0.85,0.27);
\draw[dashed,->] (0,-2) -- (0.4,-1.76) -- (1.2,-1.55) -- (1.45,-1.0) -- (1.35,-0.5) -- (1.1,0) -- (0.85,0.27);
\draw[dashed,->] (0,-2) -- (0,-1.03);
\fill (0,-2) circle (1.5pt);
\node[below] at (0,-2.05) {$*$};
\node at (-0.85,0.55) {$p_1$};
\node at (0.85,0.55) {$p_2$};
\node at (0,-0.75) {$p_3$};
\end{tikzpicture}
~~~
