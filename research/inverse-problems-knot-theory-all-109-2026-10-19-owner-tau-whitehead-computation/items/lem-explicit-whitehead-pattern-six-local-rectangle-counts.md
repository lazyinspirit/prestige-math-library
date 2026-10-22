---
id: lem-explicit-whitehead-pattern-six-local-rectangle-counts
kind: lemma
title: "Six local Whitehead-pattern rectangles have actual count one"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-positive-whitehead-pattern-has-the-explicit-five-handle-ribbon-model
  - thm-integrable-flat-grid-rectangle-counts-equal-the-full-filtered-grid-differential
  - lem-a-flat-rectangle-has-an-explicit-alternating-side-strip-cover
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-countable-choice
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the supplied geometric and strip operators. Matching, elimination and all periodic-domain bounds are finite rational computations."
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Assume Countable Choice. Use the positive signed template of the explicit five-handle pattern model and omit the distinguished curve gamma. Keep its alpha system $(\lambda,\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ and beta system $(N,\beta_1,\ldots,\beta_4)$. Put $w$ in the face containing the outgoing germ $(h,N,-)$ and $z$ in the face containing $(g,N,+)$. The unmarked quadrilateral with boundary germs $(g,\alpha_2,-),(l,\beta_1,-),(k,\alpha_4,-),(h,N,+)$ is denoted $R$.

There are exactly sixteen matchings of these two systems. Among distinct matchings with the SAME selected lambda intersection, the only nonnegative domains with $n_w=n_z=0$ are six copies of $R$, with source containing $h,l$ and target containing $g,k$. There is a smooth complex structure, flat on a neighborhood of this quadrilateral and its four transverse corners, for which each of these domains has exactly one actual integrable holomorphic strip orbit. Its actual fixed-end index is one and its actual operator is onto. After actual admissible closed three-sphere companion gluing, the same count holds for a domain supported in this quadrilateral, with every companion coordinate inactive, and persists under sufficiently small coherent regular perturbations.

No assertion is made here about domains changing the lambda coordinate, the full satellite differential, its absolute Alexander origin, or identification of this independently constructed template with the paper's marked diagram.

## Facts & Assumptions

**Given:** The actual positive ribbon surface and its cap disks, the indicated marked faces, and any additional inactive companion coordinates outside this local quadrilateral.

[F1] The signed template and its actual positive-band compressionbody realization are supplied. [[lem-positive-whitehead-pattern-has-the-explicit-five-handle-ribbon-model]]

[F2] The alternating-side rectangle has an explicit degree-two holomorphic strip cover with a single simple branch. Its actual integrable symmetric-product strip construction, uniqueness and bounded-kernel operator calculation are proved for the Euclidean rectangle. Only these LOCAL calculations, not the grid-classification Statement, are reused below. [[lem-a-flat-rectangle-has-an-explicit-alternating-side-strip-cover]] [[thm-integrable-flat-grid-rectangle-counts-equal-the-full-filtered-grid-differential]]

[F3] Actual positive-mark compactness and exhaustive gluing charts hold for the chosen genuine path. [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]

## Proof

1.1 Enumerate a matching by choosing one point on each alpha circle and retaining it only when its five beta labels are distinct. The sixteen resulting sets, in order, are $$\begin{gathered}be gkq,\ be hlq,\ bf gkr,\ bf hlr,\ bf hmp,\\ad gkq,\ ad hlq,\ acgmq,\ a'dgkq,\ a'dhlq,\ a'cgmq,\\b'egkq,\ b'ehlq,\ b'fgkr,\ b'fhlr,\ b'fhmp.\end{gathered}$$ Spaces only separate readable groups; each displayed set contains five intersection points. Number the complementary disk faces by following positive ribbon germs, starting in order with $(b,\lambda,+),(b,\lambda,-),(a,\lambda,+),(a,\lambda,-),(a',\lambda,+),(b',\lambda,+),(b',\lambda,-),(g,\alpha_2,-)$. Their boundary lengths are $(14,10,10,4,8,10,4,4)$. Thus $w\in F_4,z\in F_1$ and $R=F_7$. In particular $R$ has no inactive matching point in its closure: its four vertices use only alpha2, alpha4, N and beta1, and the other three selected coordinates lie on different curves. [F1, given, construct, algebra]

2.1 At each vertex, in its positive quadrant order starting at the positive alpha germ, take the alternating sum of the four face coefficients. For a domain from $x$ to $y$ this equals $1_y-1_x$ at that vertex. The ribbon face traversal follows the edge and then the next positive outgoing germ, and hence keeps the face on its RIGHT; its listed boundary is clockwise. Reversing it gives the actual oriented alpha boundary, which goes from source to target. Add the two equations $D_4=D_1=0$. Exact elimination on these eight face coefficients has rank seven and homogeneous kernel $$P=(0,0,-1,1,0,-1,1,0).$$ This elimination is reproducible directly from the eight face boundaries in step 1.1 and the supplied ribbon cycles: there is one alternating equation at each of the sixteen vertices. Enumerating the ordered pairs of step 1.1 with the same lambda point leaves precisely the six nonnegative solutions $D=(0,0,0,0,0,0,0,1)$ on matching pairs $(1,0),(3,2),(6,5),(9,8),(12,11),(14,13)$, with the list indexed from zero. Completeness includes ALL kernel shifts: if $D^0$ is the Gaussian solution with free coefficient $D^0_6=0$, every integral solution is $D^0+mP$ with integral $m$, and positivity requires $$\max(-D^0_3,-D^0_6)\le m\le\min(D^0_2,D^0_5).$$ Substitution for each ordered pair gives exactly the six displayed solutions and no others. This proves the domain assertion; it does not suppress the additional positive domains which occur when the lambda coordinate changes. [step 1.1, construct, algebra]

3.1 Give a closed neighborhood of $R$ Euclidean rectangle coordinates with its two alpha and two beta sides straight and its corners transverse. This is a choice of complex structure on a disk neighborhood, not a claim that the entire genus-five surface is a flat grid; extend it smoothly over the remaining surface by positive local metric interpolation. The two changing coordinates are the opposite corner pairs of this rectangle. Every inactive coordinate is separated from its closure. For an actual integrable strip with this domain, its ordered incidence cover has root degree zero outside $R$ and degree one in its interior. Positivity and the holomorphic identity principle therefore factor out every inactive coordinate. The active root map is proper of degree one onto $R$: a second preimage, interior branch or boundary fold would give degree at least two or cross to a forbidden neighboring face. Thus it identifies its incidence surface with $R$. Its base projection has the alternating boundary values zero and one, and is [F2]'s degree-two strip cover up to real translation. Conversely that cover's inverse fibers, in elementary symmetric coordinates at its simple branch, construct the actual strip. Its finite energy is bounded by the rectangle area. To check the actual operator, the inactive constant transverse factors have zero kernel. An active kernel section induces a holomorphic infinitesimal base variation $\dot p$ on $R$; at its branch $z^2=b$, varying the monic equation gives $\dot p=A(z^2)+zB(z^2)$, so it extends there. Its boundary values are real and its end expansions make it bounded at all four corners. The bounded harmonic maximum principle makes it a real constant. Translation supplies exactly that one-dimensional kernel. The local end/branch clutch index is one, exactly the Euclidean calculation in [F2], unaffected by the inactive zero-index transverse factors. Hence the actual cokernel is zero. This proves orbit uniqueness, count one and actual regularity by the local calculation, with no use of a grid-to-knot comparison. [F2, step 1.1, step 2.1, construct, algebra]

4.1 After the stated actual admissible three-sphere gluing, these isolated representatives persist for sufficiently small regular paths by their onto inverse charts. No additional representative with the same domain can enter along a sequence of such paths: [F3] gives a limit, and every component's nonnegative domain is supported in $R$. A nonconstant boundary bubble would have boundary an entire compression curve, which the four proper rectangle sides cannot contain. A sphere supported in this disk has degree zero and is constant. A broken nonconstant strip would give a proper nonzero positive subdomain of $R$ between matching states, excluded by step 2.1; constant levels are removed by translation. Thus the limit is the unique orbit of step 3.1, and its inverse chart accounts for the whole sequence. After gluing, zero degree outside $R$ factors out all additional companion roots by the same argument. The proof therefore establishes precisely the local counts stated, while keeping the other domain classes and the absolute grading separate. [F3, step 2.1, step 3.1, construct, algebra] ∎
