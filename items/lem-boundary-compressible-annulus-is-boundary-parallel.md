---
id: lem-boundary-compressible-annulus-is-boundary-parallel
kind: lemma
title: "Boundary-compressible annuli with torus boundary are boundary-parallel"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. The ball is supplied by irreducibility; its marked windows and the finite smooth torus-curve reductions use explicitly choice-free suppliers."
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
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.10 and its proof, printed pp.15–16"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–3, incompressible annuli and torus-boundary decomposition"
---

## Statement

Let $M$ be a compact connected orientable irreducible $3$-manifold whose boundary components are tori. Let $A\subset M$ be a connected properly embedded incompressible annulus with $\partial A\subset\partial M$. If $A$ is boundary-compressible, then $A$ is boundary-parallel.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** The compact connected orientable irreducible smooth three-manifold with torus boundary, the incompressible proper annulus $A$, and a boundary-compressing disk $D$.

[F1] The disk obstructions, irreducibility and boundary-parallel product have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] Smooth essential torus curves are primitive, finite disjoint families admit smooth affine normalization, and their complementary strips have smooth annulus parameters, without choice ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement).

[F3] A parametrized ball with a parametrized boundary disk window is the standard marked pair; with supplied collars, disk attachment and removal preserve ball type, without choice ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]], Statement).

[F9] Every compact smooth boundary-preimage surface has a boundary-fixed smooth embedding neatification with an explicit topological ambient extension. The actual smooth disk obstructions and boundary-compressing witnesses transport as stated in the endpoint-witness supplier. Products here are the products in the original Definition; on a broad nonneat input their pullbacks are topological products, not newly asserted smooth collars. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]] [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

## Proof

1.1 First apply [F9] to the given surface, fixed pointwise on its boundary. The resulting surface is neat. Incompressibility passes to it, and a boundary-compressing witness passes in either direction; absence of boundary compressions therefore passes as well. Work with this neat representative for the following smooth collar constructions. The boundary-fixing topological ambient extension pulls any resulting boundary-parallel product back to the actual original surface. Thus this preparation does not add a neatness hypothesis to the Statement. Write $\partial D=\alpha\cup\beta$, where $\alpha$ is the essential proper arc in $A$ and $\beta$ lies in a boundary torus $T$. In an annulus every essential proper arc joins its two boundary circles: cut along a radial spanning arc and use a lift to the strip; an arc returning to the same boundary cuts off a disk there. Consequently both boundary circles of $A$ lie on this same $T$. They are essential on $T$: otherwise choose an innermost disk bounded by one of them in $T$, push it inward off the annulus collar, and obtain a compression of $A$. By [F2] the two circles cut $T$ into two parametrized annuli. The interior of $\beta$ misses them and joins them, so it spans one of these annuli, denoted $A_0$. [F1, F2, given, construct]

2.1 Push the interior of $A_0$ a little into its inward collar, keeping its rim on $A$, and round the rim. The union $S=A\cup A_0$ is a torus with a displayed corner before rounding. The curve $\alpha\cup\beta$ on it meets a core of $A$ once algebraically, not merely modulo two: $\alpha$ is a spanning arc of the annulus. It is therefore a nonseparating essential circle. Compress $S$ along $D$, taking two parallel copies of $D$ in its disk neighborhood; the result is a sphere. Irreducibility supplies a parametrized ball bounded by it. The disk neighborhood lies outside this ball: its strip along $\beta$ is joined to $\partial M$ through the gap left when that strip was removed from $A_0$, without crossing the compressed sphere. A ball in the interior cannot contain that boundary collar. Restoring the disk neighborhood therefore attaches one marked $1$-handle to the ball, rather than removing a possibly knotted handle from it. Its two attaching disk windows have the actual parallel-copy parameters of $D$. They can be put in standard positions by [F3]: standardize one window, shrink the other in the connected complement of the first on the boundary sphere, and move it to the opposite standard disk by the finite supported construction in [F3]'s Proof 1.1–2.1, fixing the first. Thus the restored region $U$ is a smooth solid torus with meridian disk the cocore of this handle. Its boundary is the displayed $S$; all corner changes are restored by the original quadrant collars. [F1, F3, step 1.1, construct]

3.1 The marking is essential. In the product coordinates $U=D^2\times S^1$ supplied by that ball and handle, let $(\mu,\lambda)$ denote the meridian-longitude basis of its boundary. Each rim circle of $A$ meets the cocore boundary once algebraically, because it meets $\alpha\cup\beta$ once. Hence its slope is $p\mu+q\lambda$ with $q=\pm1$. By [F2] normalize the two rim circles to affine circles of that slope. The entire boundary isotopy extends into a radial annulus of $D^2\times S^1$: in the boundary radial coordinate use the same formula $(r,x)\mapsto(r,h_{\eta(r)t}(x))$ as [F3], identity near the inner solid torus. The product diffeomorphism $(z,e^{i\theta})\mapsto(e^{ip\theta}z,e^{iq\theta})$, with inverse $(z,e^{i\varphi})\mapsto(e^{-ipq\varphi}z,e^{iq\varphi})$, carries longitudinal circles to that slope, up to replacing $p$ by its negative according to the chosen inverse. Apply its inverse. The two complementary boundary annuli now correspond to the two arcs between two points on $\partial D^2$, times $S^1$. The disk with one of these marked arcs is a rectangle with its bottom edge marked, with the usual rounded-corner interpretation, by [F3] in dimension two. Taking its product with $S^1$ gives a product between the corresponding annuli: the first is $A\times\{0\}$, and $A\times\{1\}\cup\partial A\times[0,1]$ is the second annulus $A_0$. Restore the retained quadrant collars to get this product for the actual original $A$ and boundary annulus in $\partial M$. This proves boundary-parallelity in [F1]'s precise sense. The winding-one condition from $D$ is what justifies this product; complementary annuli in an arbitrary solid torus do not suffice. All selected charts, windows and curve moves were finite, and [F2]–[F3] require no choice. [F1, F2, F3, step 1.1, step 2.1, construct] ∎
