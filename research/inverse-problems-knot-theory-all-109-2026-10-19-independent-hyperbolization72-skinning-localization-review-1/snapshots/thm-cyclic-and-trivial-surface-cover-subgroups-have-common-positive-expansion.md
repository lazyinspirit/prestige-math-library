---
id: thm-cyclic-and-trivial-surface-cover-subgroups-have-common-positive-expansion
kind: theorem
title: Cyclic and trivial surface-cover subgroups have common positive expansion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-labeled-schreier-coset-graph
  - thm-reduced-words-form-the-free-group
  - thm-riemannian-divergence-theorem
  - prop-coordinate-formula-for-riemannian-divergence
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curt McMullen, Amenability, Poincaré series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Entire34-page paper previously read; the common-expansion argument for the supplied free or compact Fuchsian surface models is proved locally
---

## Statement

Assume AC. There is a common positive vertex-expansion bound for all cyclic and trivial subgroup covers in each of the following two supplied surface-group models.

First let $F_r$, $r\ge2$, have a specified free basis. For every cyclic or trivial subgroup $H$, the labeled Schreier graph on right cosets $H\backslash F_r$, using that basis and its inverses, satisfies
$$|b(V)|\ge\frac{r-1}{r}|V|$$
for every finite vertex set $V$. Loops and multiple edges are retained in the degree count, and $b(V)$ counts outside vertices, not edges. For any other fixed finite symmetric generating set there is also a common positive bound independent of $H$.

Second let $\Gamma\le\mathrm{PSL}_2(\mathbb R)$ be a supplied discrete torsion-free group with compact quotient $\mathbb H^2/\Gamma$, and let $\mathcal S$ be any fixed finite symmetric generating set. There is $\gamma(\Gamma,\mathcal S)>0$ such that for every cyclic or trivial $H\le\Gamma$ the same expansion inequality holds with $\gamma(\Gamma,\mathcal S)$ for its $\mathcal S$ Schreier graph.

In either case the bound transfers to any actual covering whose monodromy is that coset action after a supplied fundamental-group identification. Thus it can be used simultaneously for arbitrarily many such covers of one marked surface. No theorem asserting that every boundary intersection subgroup is cyclic or trivial is implicit; that topological identification remains an application obligation. No uniformity over varying compact quotient metrics is asserted.

## Facts & Assumptions

**Given:** AC and either the specified finite free basis or the supplied compact torsion-free Fuchsian surface model and fixed generating set, together with a cyclic or trivial subgroup.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] The Schreier graph has arrows $Hg\xrightarrow{s}Hgs$. A freely reduced nonempty word in a free basis is nonidentity. [[def-labeled-schreier-coset-graph]], [[thm-reduced-words-form-the-free-group]]

[F2] The Riemannian divergence theorem holds, and in coordinates $\operatorname{div}X=(\det g)^{-1/2}\partial_i((\det g)^{1/2}X^i)$. [[thm-riemannian-divergence-theorem]], [[prop-coordinate-formula-for-riemannian-divergence]]

[F3] The model upper half-plane has metric $Y^{-2}(dx^2+dY^2)$. The group action is proper, model balls are compact, and nonidentity elements in a discrete torsion-free Möbius group are parabolic or loxodromic. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-local-thin-components-of-torsion-free-kleinian-quotients]]

## Proof

1.1 In the free case a path without immediate reversal has a freely reduced label: the uniqueness of an outgoing edge of each signed label makes consecutive inverse labels exactly an immediate reversal, including at loops and multiple edges. Thus the homomorphism reading a based closed path's label is injective into $F_r$, by [F1]; its image consists precisely of $H$, since a word labels a loop at the coset $H$ exactly when it belongs to $H$. No finite connected subgraph can have two independent cycles. Otherwise choose a spanning tree in that finite subgraph and two distinct edges outside it. The two based loops obtained by joining their endpoints through the tree have a commutator which remains a nonempty reduced path: cancellation of tree segments cannot remove an outside edge unless it meets its own inverse, and the commutator's four outside-edge occurrences alternate between the two different edges. Its label is nonidentity by the preceding injectivity, whereas both loop labels belong to cyclic $H$ and commute, a contradiction. Base paths from this subgraph to $H$ merely conjugate the two labels and do not change that conclusion. Therefore every finite subgraph component with $v$ vertices has at most $v$ edges, counting a loop as one edge and retaining parallel edges. [F1, given, construct, algebra]

1.2 For the compact Fuchsian model choose $o\in\mathbb H^2$. The function $z\mapsto d(z,\Gamma o)$ is continuous, invariant and bounded on the compact quotient, say by $R$. The closed Dirichlet domain $D$ centered at $o$ is contained in the compact ball $\overline B(o,R)$: on $D$ that distance equals $d(z,o)$. It is a finite convex geodesic polygon. Indeed the comparisons are geodesic half-planes. Consider the finite set of elements with $d(o,\gamma o)\le2R+2$, finite by properness [F3]. Their half-planes already exclude the entire sphere of radius $R+1$: at any point there a nearest orbit point has distance at most $R$, violates the comparison with $o$, and has $d(o,\gamma o)\le2R+1$. By convexity their intersection cannot extend outside that sphere. On its contained ball of radius $R+1$, all other comparisons are strict by the triangle inequality. Hence this finite intersection is exactly $D$, proving the bounded polygon assertion without presuming finite sidedness. A small ball about $o$ lies in $D$ by discreteness and freeness, so its area $A$ is positive. The translates of $D$ tile the plane with disjoint interiors: nearest orbit points exist by properness, and an interior equality of two different nearest-point cells would contradict the strict half-plane comparisons. Their boundaries have area zero. Let $\mathcal T$ be the finite symmetric side-neighbor set and let $M$ bound the side lengths, with $M>0$. This set generates $\Gamma$: a path from an interior point of $D$ to an interior point of any translate can be perturbed past the locally finite polygon vertices to cross finitely many sides, expressing that translate as successive neighbors. Local finiteness follows from compactness of $D$ and properness. [A1, F3, given, construct, algebra]

1.3 The cover $Y=\mathbb H^2/H$ has a globally defined smooth unit vector field of divergence one. If $H$ is trivial, choose the upper half-plane field $X=-Y\partial_Y$. If $H$ is nontrivial cyclic, its generator is parabolic or loxodromic by [F3]. Put its fixed point at infinity and, in the loxodromic case, its other fixed point at zero. Its action is respectively a real translation or a positive real dilation. Both preserve $X=-Y\partial_Y$, so this field descends to the cover. Its norm is one, and its divergence is $Y^2\partial_Y(-1/Y)=1$ by [F2]. The calculation is intrinsic and remains true on the quotient. [F2, F3, given, construct, algebra]

2.1 For finite $V$ in the Schreier graph let $e(V)$ count its internal undirected labeled edges. Step 1.1 gives $e(V)\le|V|$. Every vertex has incidence degree $2r$, with a loop contributing two. Thus the number of crossing edges, counted with multiplicity, is $2r|V|-2e(V)\ge(2r-2)|V|$. Each outside border vertex has at most $2r$ incidences, so it can account for at most $2r$ of those crossing edges. Division proves $|b(V)|\ge(r-1)|V|/r$, uniformly in $H$. This also proves that no finite coset graph occurs in these cases; it is not assumed in advance. [F1, step 1.1, algebra]

3.1 We give a generating-set comparison for both parts. Suppose a finite symmetric generating set $\mathcal T$ has expansion $\gamma_0$, and write each of its elements as a word of length at most $L$ in another fixed symmetric generating set $\mathcal S$, of size $d$. A point in $b_{\mathcal T}(V)$ is reached from $V$ by one such word. Following that word, its path has a first exit through $b_{\mathcal S}(V)$ and then at most $L$ further edges. A degree-$d$ graph has at most $(d+1)^{L+1}$ vertices within that distance of one vertex. Consequently $|b_{\mathcal T}(V)|\le(d+1)^{L+1}|b_{\mathcal S}(V)|$, so $\gamma_0/(d+1)^{L+1}$ is an expansion bound for $\mathcal S$, independent of the subgroup. This proves the last free-group assertion and will transfer the geometric bound below. [given, step 2.1, construct, algebra]

4.1 The tiles of $Y$ are indexed by $H\backslash\Gamma$, each with area $A$. For a finite coset set $V$, integrate the divergence-one field over each of its tiles and sum. The divergence formula gives $A|V|$ as total outward flux. Paired internal sides cancel, including self-identifications and repeated side neighbors, since they have opposite normals for the same descended field. For clarity the theorem [F2] applies to a polygon by rounding its finitely many corners inside a compact coordinate neighborhood: removed areas tend to zero, the inserted arc lengths tend to zero, and the field is smooth and bounded there, so the rounded smooth-boundary identity passes to the polygon. Thus the summation is valid even when the finite tile union has corners or nonmanifold corner contacts. Each remaining side has flux at most its length $M$. If $k$ is the number of sides of $D$, an outside neighboring tile can meet at most $k$ such remaining sides, counted with multiplicity. Therefore $$A|V|\le Mk\,|b_{\mathcal T}(V)|.$$ This gives the common bound $A/(Mk)>0$ for the side-neighbor graph, uniformly over all cyclic or trivial $H$. Use step 3.1 to pass to the given $\mathcal S$. All constants are fixed by $\Gamma,o,D,\mathcal S$ and do not depend on $H$. [F2, step 3.1, step 1.2, step 1.3, algebra]

5.1 Finally, an actual connected cover with a supplied fundamental-group and fiber identification has exactly this coset monodromy: lift the generating loops from each fiber point and label the resulting endpoints. Changing the chosen base lift conjugates $H$ and relabels the vertices; it changes no border count. Applying the respective common bound proves the covering assertion for every such member of a countable or arbitrary family. The proof establishes uniform expansion once the trivial or cyclic subgroup identification is given; it does not supply that identification from a three-manifold boundary argument. [F1, step 2.1, step 3.1, step 4.1, given, algebra] ∎

## Actual reading and scope

The actual complete Schreier graph definition, reduced-word free-group proof, Riemannian divergence theorem and its coordinate-formula proof were read in full for this argument. The actual model and arbitrary-quotient local-classifier proofs were read in full earlier. No incorrect orientation shortcut about a positive tree edge pointing away from the root is used: reduced labeled path injectivity is proved directly. McMullen's full amenability article was previously read; no source citation substitutes for the explicit free-graph edge count or the compact hyperbolic polygon/flux argument above.

The closed compact Fuchsian model is explicitly included, rather than silently substituting the free fundamental group of a punctured surface for a closed surface group. In applications the actual surface model and cyclic/trivial intersection subgroup must still be supplied. This theorem gives no claim about a general noncompact Fuchsian group without a free-group identification, and no uniform bound during degeneration of its fixed base surface.
