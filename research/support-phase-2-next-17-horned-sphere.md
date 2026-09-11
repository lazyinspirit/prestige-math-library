# Authoring support: the Alexander horned sphere

Date: 2026-09-12 (Australia/Sydney).

Scope: the batch-5 escalation
`cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls`.
This isolated support file supplies proved conditional construction criteria,
the needed group calculations, compactness passage, and the passage from the
Euclidean exterior to the spherical exterior. It does **not** close the actual
geometric horn realization or identify the actual embedded replacement block.
Those two missing topology arguments are stated precisely below. No item
acceptance, certification, workflow transition, or independent review is claimed.

## 1. Current contract and the mathematical issue

The current batch-5 manifest promises an embedding of S² in S³ whose complement
has two components and whose exterior is not simply connected, hence is not an
open 3-ball. It declares `thm-jordan-brouwer-separation` and
`def-axiom-of-choice`. The group-D report records that the witness item remains
absent and proposes two local A-page suppliers:

- `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball`;
- `lem-horn-replacement-block-has-injective-commutator-meridian`.

The contract's strategy says that a finite-stage linking number obstructs
contraction. That needs substantive correction. In the intended construction a
parent meridian becomes a commutator of child meridians, so its image in the
next stage's abelianization is zero. Its survival is a **nonabelian** reduced-word
argument. Indeed Alexander duality gives H₁(S³∖Σ;Z)=H¹(S²;Z)=0, so the final
exterior cannot retain the proposed obstruction as a nonzero homology class.
This does not alter the promised counterexample; it identifies the missing
proof method.

There are two different finite-stage sequences and they must not be confused:

\[
 B_0\subset B_1\subset\cdots,\qquad
 X_0\supset X_1\supset\cdots,\qquad
 B=\bigcap_nX_n.
\]

Each Bₙ is a ball. Each Xₙ has the still-unremoved terminal handles. The
increasing open sets used in the exterior calculation are Eₙ=R³∖Xₙ, not
the complements of Bₙ. Using a decreasing sequence of tame balls for Xₙ would
give simply connected increasing exteriors and cannot support this argument.

## 2. Primary sources actually examined

[Hatcher, Algebraic Topology, Example 2B.2, pp.170–172](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)
was read in full as text. It describes the ball/handle sequences and identifies
the finite-stage groups as free groups, with each parent generator mapping to a
commutator of two children. It asserts the limit's injectivity and the local
block identification in geometric prose. Those assertions do not themselves
supply the requested detailed local geometric proofs.

[Powell–Ray seminar notes, §§5.2.1–5.2.3, pp.34–39](https://www.maths.gla.ac.uk/~mpowell/Topological-manifolds-lecture-notes-after-seminar.pdf)
were read from the already retrieved local full-text copy
`/tmp/phase2-d-ray-top-manifolds.txt`. The existing PDF is
`/tmp/phase2-d-ray-top-manifolds.pdf`. Their discussion supplies a graph-group
presentation, but identifying the pillbox complement with that graph complement
still requires geometry. Their alternative proof uses transversality and the
loop theorem; these are not among the item's available prerequisites.

The group-D record already documents successful full retrieval after three
recoveries. That success was reused; source unavailability is not the blocker.
A fresh web-open of the successful mirror returned an internal error, but no
additional recovery was needed because the complete local copy was readable.
No new claim of visually verifying the diagrams is made in this support pass.

Alexander's original paper was located at
[PNAS/PMC, 1924, pp.8–10](https://pmc.ncbi.nlm.nih.gov/articles/PMC1085500/)
and its [Copenhagen PDF mirror](https://web.math.ku.dk/~moller/f03/algtop/notes/alexander.pdf).
The mirror retrieved successfully as a four-page scan with no extracted text.
Only the search-exposed excerpt was readable in this pass; the original paper
is not counted as a fully read proof source here.

## 3. Proved controlled-limit criterion for the first supplier

The following is an item-ready **conditional** lemma. Proving its hypotheses
for an actual interlocking-horn template remains a separate obligation.

### Statement

Let D be the standard compact closed 3-ball. Suppose the following data are
given:

1. Compact sets Xₙ⊆R³ with Xₙ₊₁⊆Xₙ, and embeddings
   fₙ:D→Xₙ. Put Bₙ=fₙ(D).
2. For each n, a finite family of pairwise disjoint nonempty compact subsets
   Dₙ,s⊆D. Write Uₙ=⋃ₛDₙ,s. Each cell of level n+1 lies in a cell of
   level n; Uₙ₊₁⊆Uₙ; and maxₛ diam(Dₙ,s) tends to zero. Require
   C=⋂ₙUₙ⊆∂D.
3. For each n, pairwise disjoint compact target cells Kₙ,s⊆R³ with
   maxₛ diam(Kₙ,s)=εₙ→0. For every m≥n,
   \[
   f_m(D_{n,s})\subseteq K_{n,s},\qquad
   f_m|_{D\setminus U_n}=f_n|_{D\setminus U_n},
   \]
   and
   \[
   f_n(D\setminus U_n)\cap\bigcup_s K_{n,s}=\varnothing.
   \tag{Separation}
   \]
4. There are ηₙ→0 such that every y∈Xₙ has distance at most ηₙ from Bₙ.

Then fₙ converges uniformly to an embedding f:D→R³, and
f(D)=B=⋂ₙXₙ. Consequently f|∂D embeds S². Assuming the existing
invariance-of-domain theorem, ∂B=f(∂D) and int(B)=f(int(D)).

### Proof

For m≥n and x∉Uₙ, fₘ(x)=fₙ(x). For x∈Uₙ, x lies in one Dₙ,s,
so both values belong to Kₙ,s and have distance at most εₙ. Thus
supₓ|fₘ(x)−fₙ(x)|≤εₙ. Completeness of R³ gives pointwise limits;
the same estimate gives uniform convergence and |f(x)−fₙ(x)|≤εₙ.
For continuity at x, first choose n with 2εₙ below half a prescribed target
tolerance, then use continuity of fₙ at x and the triangle inequality.

To prove injectivity, consider three cases. If x,y∉C, choose n large enough
that both lie outside Uₙ. Their values stabilize at fₙ, which is injective.
If x∉C and y∈C, choose n with x∉Uₙ. The point f(x)=fₙ(x) is outside
all Kₙ,s by (Separation), while f(y) belongs to the closed target cell
containing all fₘ(y), m≥n. Their images differ. Finally, if x,y∈C and
x≠y, choose n with every domain cell's diameter smaller than |x−y|. They
belong to different cells, so their limits lie in disjoint compact target
cells and again differ. This is the inverse-control argument absent from a
bare assertion that the image horns shrink.

For every fixed n and m≥n, fₘ(D)⊆Xₘ⊆Xₙ. Closedness of Xₙ puts every
limit value in Xₙ, hence f(D)⊆B. Conversely, for y∈B⊆Xₙ there exists
x∈D with |y−fₙ(x)|≤ηₙ (compactness of Bₙ attains the distance).
Therefore dist(y,f(D))≤ηₙ+εₙ. This holds for all n, so this distance is
zero. The image f(D) is compact and therefore closed; hence y∈f(D).
No sequence of chosen preimages is needed.

A continuous injection of a compact space into a Hausdorff space is an
embedding: closed subsets of D are compact, their images are compact and
closed, and therefore the inverse map on f(D) is continuous. This proves the
first conclusions.

Invariance of domain applied to f|int(D) makes f(int(D)) open. To exclude
an image of a boundary point from int(B), suppose f(x) has an open Euclidean
neighborhood V⊆B, with x∈∂D. The inverse f⁻¹|V is a continuous injection
from an open subset of R³ to R³. Invariance of domain makes f⁻¹(V) open
in R³, containing x and contained in D, impossible for x∈∂D. Thus
int(B)=f(int(D)), and closedness of B gives ∂B=f(∂D). QED.

### What the horn construction must still prove

For `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball`, the
author must provide a single concrete finite horn template and recursive
placements, and verify the data above or an equally strong criterion.
Necessary checks are the embeddings fₙ, domain and target separation, control
of all later images within each target cell, stabilization off the domain
cells, shrinking of **domain** cells, and approximation of every Xₙ by Bₙ.
Making only the target horns small proves none of the omitted domain facts.

One adequate realization would use explicitly labelled binary terminal cells,
shrinking in both domain and range, with children in disjoint compact parent
cells and with all later replacements supported in those cells. But existence
of placements satisfying this and the interlocking condition is **not proved
here**. In particular, saying that two finite horns do not touch does not
exclude their closures approaching a common limit point. The disjoint closed
target cells and their compatibility with domain cells are load-bearing.

## 4. A complete abstract model for the commutator block

The following pair calculation is fully proved. An identification of the
actual embedded horn block with this pair, or a direct equivalent graph
calculation, remains open.

### Statement and explicit model

Let T² be obtained from the square Q=[−1,1]² by identifying opposite edges
in the usual oriented torus pattern. Fix 0<r<1 and remove the image of
the open square (−r,r)². Call the resulting compact once-punctured torus F.
Set

\[
 Z=F\times(0,1),\qquad A=\partial F\times(0,1)\subset Z.
\]

At a basepoint in A, π₁(Z) is free on two generators a,b, and the inclusion
π₁(A)≅Z→π₁(Z) sends a suitably oriented generator to [a,b]=aba⁻¹b⁻¹.
In particular the inclusion is injective. Reversing orientation or changing
the basepoint path gives the inverse or a conjugate, and preserves injectivity.

### Proof

Before the opposite-edge identifications, the remaining square annulus is
{x∈Q:r≤||x||∞≤1}. The homotopy

\[
 H(x,t)=\left((1-t)+\frac{t}{\|x\|_\infty}\right)x
\]

deformation retracts it to ∂Q and fixes ∂Q pointwise. It therefore descends
through the edge identifications to a deformation retraction of F onto the
quotient of ∂Q, which is a wedge of two circles. Under radial projection,
a positive traversal of the inner boundary becomes a traversal of ∂Q. With
oriented edges labelled a,b,a⁻¹,b⁻¹, its word is [a,b]. A radial basepoint
path identifies the inner-boundary basepoint with the vertex of the wedge.

The explicit homotopy (x,s)↦(x,(1−t)s+t/2) retracts Z onto F×{1/2}
and A onto ∂F×{1/2}, compatibly. The wedge-of-circles calculation now gives
the stated groups and homomorphism. For k>0, [a,b]ᵏ is a reduced word of
length 4k, because no cancellation occurs within one commutator or between
successive copies. For k<0 the inverse word has length 4|k|. The reduced-word
theorem makes every nonzero power nontrivial, proving injectivity. QED.

This proof identifies both the space and the attaching annulus. Merely
showing that some block has group F₂ is insufficient: a specified annulus
could map trivially or to a different conjugacy class.

### Check of the alternative graph presentation

The Powell–Ray text records the presentation

\[
 \langle a,b,c,d,e\mid a=ec,\ cb=dc,\ ab=bc,\ b=ed\rangle.
\]

Its algebraic simplification is valid. The equations force

\[
 c=b^{-1}ab,\qquad
 e=ab^{-1}a^{-1}b,\qquad
 d=b^{-1}aba^{-1}b.
\]

Substitution satisfies all four relations: ec=a, bc=ab, ed=b, and
dc=b⁻¹ab²=cb. Conversely those equations derive the displayed expressions.
Thus maps in both directions identify the presented group with the free
group on a,b, and e is the nontrivial cyclically reduced commutator [a,b⁻¹].
All its nonzero powers survive.

This verifies the algebra **if** the graph-complement presentation and the
identification of e with the attaching annulus are established. It does not
derive that geometric presentation from the diagram. No Wirtinger theorem
for embedded graphs has been silently added as a repository prerequisite.

## 5. Precise remaining geometric statement for the second supplier

To authorize use of
`lem-horn-replacement-block-has-injective-commutator-meridian`, it is enough
to prove the following for the **same concrete template** used in Section 3:

For each replacement X′⊂X inside a terminal pillbox, let E=R³∖X and
E′=R³∖X′. There is an open path-connected cover E′=U∪V and a basepoint
in U∩V, with supplied deformation retractions or homotopy equivalences,
compatible with the inclusion maps, such that:

1. E→U is a homotopy equivalence; the inclusion of E in E′ corresponds to
   inclusion of U after this identification.
2. V has the pair model of Section 4 up to a homotopy equivalence that tracks
   U∩V and the two child meridians. In particular π₁(V)=F(a,b).
3. U∩V retracts to an annulus, and its generator maps to [a,b] (up to
   consistent inversion and conjugation) in V.
4. In U its generator maps to the parent meridian μ, which is a specified
   member of the current exterior's free basis.
5. Distinct terminal replacements have disjoint supports, so they can be
   performed successively with the other basis loops retained, and the
   resulting identifications name the child meridians as the next basis.

The open-cover requirement is essential. Decomposing into a closed piece and
a block attached on its boundary is not by itself an application of the
published open-cover van Kampen theorem. An explicit product collar of the
attaching annulus gives the necessary thickening when it is actually supplied
by the template. No collaring theorem for arbitrary wild boundaries is needed
or permitted at this finite polyhedral stage.

**Unclosed in this package:** an embedded pillbox/handle template, its pair
homeomorphism or deformation retraction proving clauses 1–5, and a proof that
the template admits the compatible shrinking/domain control from Section 3.
The abstract F×(0,1) pair is a proved possible model, not a proved
identification of the geometric block in Hatcher's figure.

## 6. Proved finite-stage group and survival arguments

### One replacement

Assume the open-cover and loop-tracking hypotheses of Section 5, and suppose
π₁(E) is freely generated by R∪{μ}. Van Kampen identifies π₁(E′) with
the presentation

\[
 \langle R,\mu,a,b\mid\mu=[a,b]\rangle.
\]

It is freely generated by R∪{a,b}: eliminate μ by the displayed relation.
More explicitly, the maps sending μ to [a,b] and fixing R,a,b give inverse
homomorphisms with the free group on that latter set. The inclusion-induced
map sends μ to [a,b] and each member of R to itself.

This map is injective. A nontrivial reduced word in R∪{μ} can be grouped as
an alternating word of nonempty words in the R alphabet and nonzero powers
of μ, allowing an end block to be absent. Substituting [a,b] for μ gives
nonempty reduced blocks on the disjoint alphabets R and {a,b}; no cross-block
cancellation is possible. A word consisting of just one block is also
nontrivial by reduced words and Section 4. Thus the original word survives.

This argument avoids invoking the loop theorem or a general normal-form
theorem for amalgams. It does not infer factor injectivity merely from the
pushout property; it proves it for the actual homomorphism.

### All terminal replacements

Starting with π₁(E₀)=Z on a meridian μ∅, successive replacements give

\[
 \pi_1(E_n)=F(\mu_s: s\in\{0,1\}^n),\qquad
 \mu_s\longmapsto[\mu_{s0},\mu_{s1}].
\]

The finite number of replacements at each stage can be ordered and treated
by the one-replacement result. Consequently all maps π₁(Eₙ)→π₁(Eₙ₊₁)
are injective. With compatible orientations and whiskers, the original
meridian is represented at stage n by an iterated commutator Wₙ. Its two
child words use disjoint alphabets; the four blocks in their commutator have
no cancellation. Hence Wₙ has reduced length 4ⁿ and is nontrivial. If
different whiskers were chosen, one must track the resulting conjugations;
one cannot assert this precise word without the loop-tracking clause.

### Compactness passage

Let Xₙ be compact and decreasing with intersection B. Then Eₙ=R³∖Xₙ
are open and increasing, with union E=R³∖B. Any compact subset K⊆E
lies in some Eₙ: the Eₙ cover K, a finite subcover exists, and the greatest
index in it covers K. In particular every loop and every nullhomotopy disk
in E lie in a finite stage. A fixed meridian in E₀ cannot be nullhomotopic
in E, because a nullhomotopy disk would lie in some Eₙ and contradict its
finite-stage nontriviality. This needs only injectivity and a witness; an
abstract direct-limit theorem is unnecessary.

For clarity, a disk contracting an exterior loop is a disk **in E**. A disk
in the full sphere complement must first be known to lie in the exterior
component; its connected image then stays in the component of its boundary.

## 7. Proved passage from the Euclidean exterior to S³

### Puncturing an open 3-manifold does not change π₁

Let W be a connected 3-manifold without boundary and p∈W. Then W∖{p} is
path connected, and inclusion induces an isomorphism
π₁(W∖{p},x₀)→π₁(W,x₀) for any x₀≠p.

First, W is path connected because its coordinate balls are path connected,
so its path components are open; connectedness forces one component. Given a
path between two points different from p, choose a coordinate chart containing
a small closed ball around p and avoiding the endpoints. If the path meets
a smaller concentric closed ball, take the first and last meeting times and
replace the intervening segment by a path on its boundary S². Compactness
of the time interval and closedness of the small ball give these times; their
images lie on the boundary. The boundary is path connected. This produces
a path missing p. Thus W∖{p} is path connected.

Let V be a coordinate open ball around p. The sets U=W∖{p} and V form
an open path-connected cover, and U∩V=V∖{p} is path connected and simply
connected: an open ball is homeomorphic to R³, and its puncture deformation
retracts radially to S². V itself is contractible. Van Kampen therefore
identifies π₁(W) with the pushout of π₁(U) and the trivial group over the
trivial group, and the resulting isomorphism is induced by inclusion of U.
Initially this calculation uses a basepoint in V∖{p}; a path in U changes
basepoint to any prescribed x₀ and intertwines the inclusion maps. QED.

### Initial standard torus

This also supplies the initial group without an unexplained Euclidean
picture. Write

\[
 S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\},\qquad
 X_0=\{|z|\le1/\sqrt2\}.
\]

The parametrization
(z,u)↦(z,u√(1−|z|²)) identifies X₀ with a closed disk times S¹.
Its spherical exterior {|z|>1/√2} is parametrized by
(u,w)↦(u√(1−|w|²),w), identifying it with S¹ times an open disk.
Contracting the disk factor computes π₁ as Z. Choose a point ∞ in this
exterior and use a stereographic chart S³∖{∞}≅R³. The image of X₀ is
compact, and the puncturing result preserves the exterior group Z. Its
generator is the z-phase loop, namely a meridian of the solid torus X₀,
pushed slightly into the exterior. It can be chosen to avoid ∞.

### Identifying the final component

Assume the unclosed construction obligations have produced the embedding
f:D³→R³ of Section 3, let B=f(D³), and set Σ=f(S²)=∂B. The existing
Jordan–Brouwer theorem gives exactly two components of R³∖Σ and of
S³∖Σ, with the stated AC dependency. The decomposition

\[
 \mathbb R^3\setminus\Sigma
 =f(\operatorname{int}D^3)\ \sqcup\ (\mathbb R^3\setminus B)
\]

is a partition into nonempty relatively open sets. The first is connected
and open by the embedding and invariance of domain. The second is nonempty
because B is compact. Since there are exactly two components, each displayed
set is one component; the second, E, is the unbounded exterior.

The spherical exterior is W=S³∖B=E∪{∞}. The spherical Jordan–Brouwer
conclusion identifies it as the component containing ∞. It is an open
3-manifold. Applying the puncturing result at ∞ gives

\[
 \pi_1(E)\xrightarrow{\cong}\pi_1(W).
\]

Thus the nontrivial exterior loop from Section 6 survives after adding ∞.
The simply connected ball about ∞ and its punctured ball are both needed;
adding one point alone is not a general reason that π₁ stays unchanged.
Since an open 3-ball contracts linearly, W is not homeomorphic to one.
The other component is f(int(D³)), which is homeomorphic to an open 3-ball.

## 8. Dependency map and exact remaining work

The existing Jordan–Brouwer/AC pair of dependencies proves the component
count once an embedding has been produced. It cannot prove the embedding or
the exterior group. A completed authoring package should add, directly or
through fully authored local suppliers, the following actual inputs:

| Use | Existing supplier or local proof |
|---|---|
| Compact limit and inverse continuity | Section 3; `thm-compact-subset-of-a-hausdorff-space-is-closed`; elementary compact-ball/completeness facts |
| Identify image interior/boundary | `thm-invariance-of-domain`, with its inherited AC assumption |
| Abstract block π₁ and boundary word | Section 4; `thm-fundamental-group-of-finite-wedge-of-circles`; `prop-retracts-inject-fundamental-groups` |
| Nonzero commutator powers and stage inclusions | Section 6; `thm-reduced-words-form-the-free-group` |
| Open gluing calculation | `thm-seifert-van-kampen` and the supplied finite-template collars |
| Basepoint changes | Explicit path conjugation, or `ex-change-of-basepoint-isomorphism-for-fundamental-groups` |
| Ball and punctured-ball π₁ | `lem-contractibility-implies-trivial-fundamental-group`; `prop-fundamental-groups-of-punctured-euclidean-spaces` |
| R³-to-S³ exterior | Section 7; `cor-van-kampen-one-simply-connected-set` is also sufficient |
| Component count and common boundary | `thm-jordan-brouwer-separation`, `def-axiom-of-choice` |

The relevant current statements/proofs of Jordan–Brouwer, invariance of
domain, compact-Hausdorff closedness, van Kampen and its one-simply-connected-
set corollary, finite wedges, reduced words, and punctured Euclidean spaces
were read. This is not a full audit of their transitive prerequisite closures.
The additional catalogue entries in the table identify uses; they are not
represented as independently reviewed here.

The first proposed supplier remains **open as an existence theorem**:
Section 3 proves what sufficiently controlled horn data imply, not that
the concrete interlocking-horn data exist. The second remains **open as a
geometric identification theorem**: Section 4 computes an explicit pair and
checks the source's algebra, but does not identify the actual embedded
replacement block or supply its collared cover. Both must be proved for one
compatible construction before the witness item can close. The conditional
statements must not be substituted for their existence conclusions in the
manifest or proof contract.

After those two obligations are met, Sections 6–7 give a complete route to
the exact promised S³ counterexample. No loop theorem, transversality, general
Schoenflies theorem, claim about every wild point, or stronger classification
of the exterior group is necessary for that route. AC is retained where the
current Jordan–Brouwer and invariance-of-domain suppliers require it; this
support file does not claim a new choice-free construction theorem.
