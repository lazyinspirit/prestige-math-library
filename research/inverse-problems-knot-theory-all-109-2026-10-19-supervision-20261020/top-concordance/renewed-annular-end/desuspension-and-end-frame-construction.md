# New radial-control and annular end-frame constructions

The earlier two completed review/repair cycles remain recorded in `owner-concordance-ribbon-round1/geometry-donors/proper-pair-tube-second-cycle-investigation.md`. This work was explicitly reopened by the user's request to continue TOP proofs until success. It does not retroactively change those verdicts. This file proves the radial-control and frame/strip assembly operations below. It does not claim that the separately assigned stable normal-bundle or controlled-product inputs have already been proved.

## A complete radial reparametrization lemma

Let N be compact metrizable. Suppose a neighborhood of its zero-end has a proper control map p=(p_1,p_2) to N times [0,infinity), with p_2^{-1}(0) the prescribed zero-end. Suppose two end deformations R_j, defined on a smaller neighborhood and for 0<=u<=1, preserve that zero-end, fix its N coordinate there, and carry its complement into its complement. On a still smaller compact collar, uniform continuity and properness provide positive continuous functions a,b,c on (0,r_0], with a(s),b(s),c(s) tending to zero at zero, b(s)<=s<=c(s), and

    d_N(p_1 R_j(x,u),p_1 x) <= a(s),
    b(s) <= p_2 R_j(x,u) <= c(s),     if p_2 x=s.

We can take a,c increasing and b increasing: replace upper bounds by suprema on radial sublevels and lower bounds by infima on radial superlevels in the fixed compact neighborhood, then choose continuous weaker bounds. The lower bound is positive at every positive s, because the deformations preserve the complement and the corresponding compact radial superlevel times [0,1] misses the zero-end. This explains the lower bound; it is not inferred from continuity alone on a noncompact set.

For any positive continuous target control delta on N times (0,1], there is an increasing homeomorphism h of [0,infinity), h(0)=0, such that, for all sufficiently small positive s, the hp-control diameters of both deformation tracks are smaller than delta(p_1 x,h(s)). Here h acts only on the second factor of the control map; it does not modify either actual deformation or a prescribed product germ.

Here is a construction avoiding implicit inverse-function conventions. First choose a positive function d on (0,1], tending to zero at zero, with d(t)<=t/100, d(t)<=delta(n,t) for every n, and Lipschitz constant at most one. Such a d exists: take a continuous positive minorant of min_n delta(n,t), cap it by t/100, extend it by zero at zero, and take the infimum of that function plus |t-u| over u in [0,1]. On every compact subinterval away from zero the infimum stays positive; at t=0 it is zero. This infimum is a one-Lipschitz minorant, still bounded by t/100 and delta.

Set t_0=1 and t_{j+1}=t_j-d(t_j)/100. These numbers decrease to zero. Indeed they remain positive since d(t)<=t/100; if their limit were positive, positivity and continuity of d would give a positive lower bound for every decrement, a contradiction. Moreover

    .99 d(t_j) <= d(t_{j+1}) <= 1.01 d(t_j).

Choose r_j decreasing to zero inductively, with r_j<r_{j-1}/2, so that

    a(r_j)<d(t_{j+1})/100,
    c(r_j)<r_{j-1},
    r_j<b(r_{j-1}).

Each choice is possible: a and c tend to zero, while b(r_{j-1}) is a fixed positive number. Define h(r_j)=t_j, interpolate linearly on each [r_{j+1},r_j], set h(0)=0 and extend increasingly outside r_0. This is an actual homeomorphism.

For r_{j+1}<=s<=r_j, monotonicity gives

    r_{j+2}<b(s)<=c(s)<r_{j-1}.

Consequently the radial displacement of an entire deformation track, after applying h, is bounded by t_{j-1}-t_{j+2}. This is the sum of three successive decrements, and hence less than .031 d(t_{j+1}). On the other hand h(s) lies in [t_{j+1},t_j], so the Lipschitz bound gives

    d(h(s)) >= d(t_{j+1})-(t_j-t_{j+1})
             >= (1-1/(100*.99)) d(t_{j+1}) > .98 d(t_{j+1}).

The N-coordinate displacement is at most a(r_j)<.01 d(t_{j+1}). For the maximum product metric, both displacements, and the distances between any two points on a track after the harmless factor-two weakening of these bounds, are therefore smaller than d(h(s))<=delta(p_1 x,h(s)). Discard finitely many outer radial intervals if necessary. This proves the claimed arbitrarily small end control. Relative data are untouched because only the control coordinate was changed.

## The geometric desuspension to which the lemma applies

The exact stable input is an extendable rank-two vector normal bundle to N times R in M times R, relative a prescribed bundle near a closed K in N. Over a compact longitudinal interval, its vector bundle is isomorphic to the pullback of a bundle E over N: embed the finite-rank bundle in a trivial finite-dimensional bundle using a finite partition of unity, subdivide the longitudinal interval so that neighboring orthogonal fiber projections are invertible, and compose these projections. On the supplied product neighborhood of K use the given identification throughout; the projection construction can be made relative that identification. No rank-two normal bundle in M has been assumed at this stage.

Let f identify the stable neighborhood with E times R. Form the region W between the actual bottom M times {0} and the transported upper face f(E times {1}), restricted to the overlap of their one-sided neighborhoods, as in FQ9.3A. Its zero-set is N times [0,1]. Here are actual end deformations rather than an assumption that the two boundary hypersurfaces are graphs. Write a for the ambient longitudinal coordinate and b for the longitudinal coordinate in the f-chart. They agree on N times R. Shrink a neighborhood of the compact segment N times [0,1] so that |a-b|<1/10 and all longitudinal pushes below lie in the other chart when required. Let P_0(x,u) push the ambient a coordinate linearly to zero, and let Q_1 clip the f-coordinate by b -> min(b,1). Then R_0=Q_1 P_0 maps into W: if clipping is used, b>1 and after clipping a remains close to1, so cannot violate a>=0. Its initial map is the identity on W, and its final map lies on a=0 because there b is close to0 and no clipping is used. Conversely let P_1 push the f-coordinate linearly to1, and let Q_0 clip the ambient coordinate by a -> max(a,0). Then R_1=Q_0 P_1 maps into W: where a<0, b is close to0, so clipping cannot violate b<=1. Its initial map is the identity and its final map lies on b=1. By taking the starting neighborhood still smaller, all these finite compositions are defined on their full tracks. Each push preserves N times R and its complement, so the same holds for the clipping compositions; their N-coordinate on the zero-set is unchanged. This is genuine controlled deformation data from a smaller zero-end neighborhood into a larger one. The final application must use the corresponding germ/shrinking-domain form of the controlled product theorem, with its precise U-enlargements; a global deformation of an arbitrary outer boundary has not been asserted. The radial lemma supplies arbitrarily small control on these tracks.

At this point the following are genuinely required inputs, not conclusions of the radial estimate:

* a suitable DIFF or PL structure and small relative handlebody near this end, compatible with both boundary structures;
* the controlled product theorem with its actual connectivity, handlebody, obstruction and relative hypotheses;
* the relative stable rank-two normal bundle itself.

The stable and controlled inputs are separately being constructed by the fresh owners. In particular, a label "local group Z" does not on its own prove the controlled product theorem or its handle-algebra hypotheses.

Given that controlled product conclusion with errors bounded by one tenth of the radial coordinate and with identity on the supplied product over K, its end homeomorphism extends by the identity over N. The reason is explicit: the control forces the base point displacement and radial coordinate to tend uniformly to zero, and the inverse has the same property. The embeddings of both ends identify their radial-zero compactifications with N, so both extended maps are continuous inverse homeomorphisms. A sufficiently small E-disk neighborhood in the transported upper end then maps to a normal neighborhood of N in M, and equals the given one near K. Restricting a slightly larger disk neighborhood gives radial extendability. This supplies the desuspension step once those named inputs, including compatible smoothing/handlebody data, are actually delivered.

## The proper annular tube from that relative normal neighborhood

Let A be the actual proper locally flat annulus in S^3 times I, with its supplied smooth product germs at both ends. Double the ambient manifold and annulus along those product collars. The result is a locally flat torus N in the oriented double S^3 times S^1. The seam collars give an actual rank-two normal vector bundle embedding near a closed neighborhood K of the two seams. This use of doubling does not assert that a degree-one spanning circle lies in one chart.

Apply the completed relative normal-neighborhood construction, when delivered, to this doubled pair and K; restrict its result to the original annulus. Choose an intrinsic spanning rectangle [-a,a] times I in A, agreeing with the chosen intrinsic endpoint coordinates. Its oriented normal vector bundle is trivial: the rectangle contracts, and finite local trivializations transport a frame along that contraction. Relative to any such frame, the two supplied endpoint frames are functions f_0,f_1 from [-a,a] to GL_2^+(R).

Preserve the supplied frame functions on two whole smaller end collars, even if their coordinates relative the reference frame vary with t. On the middle band use their values at its two interface intervals, denoted f_0(s) and f_1(s), and rescale that band to 0<=t<=1. These two entire interface functions extend, rather than only their values at the core: for t from 0 to 1/3 use f_0((1-3t)s); from 1/3 to 2/3 use any fixed path in GL_2^+(R) from f_0(0) to f_1(0); and from 2/3 to 1 use f_1((3t-2)s). The group is path connected by polar decomposition: positive-definite matrices contract linearly to the identity and rotations are joined by their angle path. Make this construction constant on smaller t-end collars by a continuous collar reparametrization. Thus the extended frame is literally the supplied frame on those collars. Compatibility of normal orientations follows from the ambient and annulus orientations; if an intrinsic endpoint interval is initially reversed, reverse its coordinate simultaneously in the supplied product chart.

In these vector coordinates take a small round ball in the three coordinates (s,z_1,z_2), cross I, and map it by the actual normal neighborhood. Its zero-normal intersection is D^1 times I, so it is a proper pair tube (D^3 times I,D^1 times I). On the two smaller end collars it is exactly the given ambient product chart, because both intrinsic coordinates and the full normal frame agree there. Choose the ball in a smaller rectangle and smaller bundle disk than those on which the embedding is defined; compactness gives a uniform positive margin. The map is therefore defined on a slightly larger radial ball, with the same endpoint product germs. This is precisely the radial-extension input required by the new accepted complement theorem, not merely an arc image or a compact interior pair chart.

With the new `lem-proper-open-ball-tube-has-marked-product-complement` the entire marked complement is then D^3 times I. The complement theorem is consumed at its actual tube-with-radial-extension input; it is not used to infer that tube's existence. Endpoint complementary-ball charts are taken consistently from the same given endpoint charts.

## Actual primary reading

Freedman–Quinn, *Topology of 4-Manifolds*, full265page PDF recovered from the author-hosted Edinburgh URL into `sources/freedman-quinn.pdf`. I visually read printed136–144 (PDF142–150), including the entire displayed9.3A statement and its desuspension/control-function proof through printed141; printed142–144 begin9.3B, whose homology-manifold generalization is not needed for our locally flat surfaces. No full-book reading is claimed. The radial grid proof above is supplied explicitly and does not treat that source's theorem as its local proof.

## Constant meridian group at the actual consumer

The controlled product construction for this application may use a constant Z group, rather than a group system with sign monodromy. This follows from the actual orientations, without assuming a global normal bundle. In an oriented locally flat pair chart, the local ambient degree-four homology generator is the cross product of the oriented surface degree-two generator and a chosen normal degree-two generator. On an overlap, preservation of the ambient and intrinsic surface orientations forces preservation of that normal generator. Its boundary is the positive local meridian, generating the complement fundamental group Z. Transport therefore acts by +1 on that generator; since every automorphism of Z is +1 or -1, all such transport maps are the identity. The same argument applies to the stable N times R pair and to the radial control base N times (0,1).

For the annular and disk doubles, reverse both the second ambient copy's orientation and the second surface copy's orientation in forming the oriented double. Their ratio, hence the local normal orientation, is unchanged at the seams. Thus this trivialization is globally consistent on the doubled torus or sphere and agrees with the supplied positive endpoint normal germ. A trivial local fundamental group has no monodromy issue. None of these local orientation computations constructs a normal tube or proves a controlled disk theorem; they supply only the precise constant-group hypothesis of the new controlled construction.

The concordance compatibility and group original statements assume Countable Choice, not full AC. The new annular construction and all of its inputs must retain that choice scope. The marked hypersurface, metabolizer and Levine original statements separately assume full AC. No stronger choice hypothesis has been inserted into the annular statements.
