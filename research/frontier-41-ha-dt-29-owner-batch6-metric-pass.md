# Batch 6 metric-end targeted audit and constructive pass

Date: 2026-10-06. Scope: the four native IDs below. This is an owner-local audit, not independent certification. Final disposition belongs to root adjudication. Original claims are preserved.

## Source audit

Complete available PDFs accessed: Ritter `combined.pdf` (cached `/tmp/alpha-batch-6-sources/ritter.pdf` and text), Fowdar `Fowdar.pdf` (same cache), Audin–Damian English book (same cache), downloaded Nicolaescu `Morse2nd.pdf` and Hutchings lecture21 PDF (`/tmp/metric-end-source-audit/`). I read the relevant full-text sections, not entire books.

- Ritter Lecture 20 pp. 92–96: middle-window convergence, energy and index bound are provided; boundary conclusion explicitly says “after reproving the gluing theorem”. Composition is a distinct gluing of two homotopies. The finite exceptional-parameter assertion requires extra genericity beyond augmented surjectivity.
- Fowdar printed pp. 43–54: fixed slices, normal complement, coercivity and right-inverse bound appear as separate Lemmas 6.3–6.4, rather than compact-perturbation consequences. Lemma 6.3 and embedding Theorem 6.8 refer to Schwarz [11]. The relevant fixed-data continuation collar is Theorem **6.10** (p. 53), composition is **6.11** (p. 53), and augmented gluing is **6.12** (p. 54). The existing collar locator misidentifies 6.11 as its theorem.
- Fowdar printed pp. 64–66: Theorem 7.6 uses the exact sequence relating vertical and augmented kernel/cokernel; its detailed proof is referred to [11]. Printed pp. 76–79 contain Lemmas 8.2–8.3 and signed count formulas. These signs cannot simply be imported without matching local orientation conventions.
- Audin–Damian printed pp. 60–69: Proposition 3.2.10 passage is proved in Proposition 3.2.11 and Lemma 3.2.12 using explicitly Euclidean local gradient. It supports the normalized local supplier, not an arbitrary smooth metric-gradient passage theorem automatically. Printed pp. 75–78 use an extended-manifold square complex for composition, a different proof route.
- Nicolaescu actual PDF pp. 193–202: Section 4.4 begins on p. 193; Proposition 4.4.2 is on PDF **195** (printed 185), and its proof is left as an exercise. Thus the existing compactness locator “PDF pp. 193–194” is wrong. It concerns autonomous height-parametrized tunnelings.
- Hutchings lecture21 read all four pages: autonomous compactness is Exercise 1, continuation compactification and parametrized chain homotopy are sketches, composition is stated on p. 4 without gluing proof.

## Actual supplier limitations

The native `thm-morse-trajectory-compactness-up-to-breaking` and `lem-gluing-broken-index-two-trajectories-gives-collar-ends` now require a normalized gradient-like field. The actual continuation definition permits arbitrary smooth metrics; Morse coordinates for a function do not normalize its metric gradient. `thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points` does supply the actual disks and tangent decay. `lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse` supplies a fixed operator with free endpoint matching, not a uniform glued inverse. The whole-line operator supplier explicitly identifies the cokernel as the matching quotient; compact perturbation does not force it to vanish.

## Partial constructions and proposed smallest prerequisites

The following were prepared as honest partial proof attempts. Root steering arrived after their temporary insertion; originals were restored and these constructions retained here pending adjudication. No mathematical impossibility is claimed.

### thm-continuation-trajectories-are-compact-up-to-breaking

#### Facts & Assumptions

**Given:** AC, the closed manifold, the regular continuation datum with common tail threshold $S$, and critical endpoints $p,q$ in the statement.

[F1] The continuation energy is uniformly bounded by [[lem-continuation-energy-identity]]. Smooth evolution across finite time intervals exists on the compact manifold, and evaluation at $-S$ identifies the unbroken moduli space with the transverse endpoint fibre product in [[def-regular-continuation-datum-between-morse-smale-pairs]].

[F2] A global continuation solution has critical limits on its two autonomous ends ([[lem-continuation-solutions-have-critical-limits]]). Regularity makes a nonempty middle moduli space have nonnegative index difference. The telescoping identity in [[def-broken-continuation-trajectory]] bounds the number of autonomous pieces of an already identified broken configuration.

[F3] The local stable/unstable theorem for an arbitrary metric gradient supplies disks, tangent spaces and exponential decay ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]]). The current complete-end compactness theorem [[thm-morse-trajectory-compactness-up-to-breaking]] assumes a normalized gradient-like field; it does not assert compactness for half-trajectories with moving noncritical endpoints.

#### Proof

**Proof status:** Not supplied. The following local construction establishes convergence of the unshifted middle and identifies the additional results needed for the full statement.

1.1 From any sequence $u_n$ choose a subsequence for which $u_n(-S)$ converges in the compact manifold to $x$. Smooth finite-time evolution gives a global solution $v$ with $v(-S)=x$ and convergence $u_n\to v$ in $C^\infty$ on every compact time interval. To justify global evolution, cover the compact manifold over each compact time interval by finitely many coordinate neighbourhoods with a common positive local existence time and iterate; smooth dependence holds on the resulting finite composition. No translation of the middle solution is taken. By [F2], $v$ has critical limits $a$ and $b$ of the two end functions, and therefore lies in $\mathcal C(a,b)$. This does not yet identify autonomous chains from $p$ to $a$ or from $b$ to $q$. [F1, F2, given, construct]

1.2 If those chains are extracted with the ordered divergent shifts required by the geometric-convergence definition, their index drops telescope with the nonnegative index difference of $v$. Every nonconstant autonomous piece drops index by at least one, so their total number is at most $\operatorname{ind}(p)-\operatorname{ind}(q)$. At drop zero no tail piece can occur; at drop one the only possible configurations are the two once-broken products in the statement. These are classifications conditional on the extraction, rather than proofs of compactness or density. [F2, step 1.1, algebra]

#### Remaining proof requirements

The first missing supplier is **pointed half-trajectory compactness for arbitrary metric Morse--Smale ends**, including the topology at moving finite-time endpoints and convergence of sequences of broken half-trajectories. Its two compactified endpoint spaces must be combined with the finite-window evolution relation to prove compactness and metrizability of the specified topology. The current normalized full-trajectory theorem [F3] cannot be applied directly to these truncated tails. A single height parametrization across the middle is unavailable: $s\mapsto f_s(v(s))$ need not be monotone, and $f^-$ and $f^+$ have different height coordinates.

The separate missing supplier for density is **simultaneous finite-tail gluing for an arbitrary metric regular continuation datum**, allowing multiple breaks. Compactly supported perturbation of a surjective operator preserves its Fredholm index, but does not preserve surjectivity. Individual half-line right inverses do not imply a uniform right inverse for a neck family; the matching and slice estimates must be proved. Thus the Banach implicit function theorem alone does not finish this argument. Parts 2--4 remain unproved here together with the outstanding part of part 1.
### lem-gluing-continuation-solutions-gives-collar-ends

#### Facts & Assumptions

**Given:** AC, the regular datum on a closed manifold, index drop one, and a once-broken configuration $\beta$ of either kind in the statement.

[F1] Evaluation at a fixed finite time identifies continuation solutions with a transverse fibre product of the actual end stable/unstable manifolds transported by finite-window evolution ([[def-regular-continuation-datum-between-morse-smale-pairs]]). The stable/unstable disks exist for arbitrary metric gradients ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]]).

[F2] Half-line linearized operators have bounded right inverses ([[lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse]]). This is an assertion about one fixed operator with its endpoint matching left free, not a uniform assertion for long-neck whole-line operators.

[F3] The normalized autonomous collar theorem [[lem-gluing-broken-index-two-trajectories-gives-collar-ends]] assumes the explicit local flow $(u,z)\mapsto(e^{2t}u,e^{-2t}z)$. A Morse coordinate chart for the function alone does not put an arbitrary metric gradient in this form.

#### Proof

**Proof status:** Not supplied. The finite-dimensional construction below isolates the unresolved passage estimate.

1.1 Consider $\beta=(\gamma^-,v)$ at $a$; the other case reverses the roles of the two ends. Choose small transverse incoming and outgoing sections to the actual autonomous negative-end flow along $\gamma^-$ and the negative tail of $v$. The incoming sheet of $W^u_-(p)$ is transverse to $W^s_-(a)$ by the Morse--Smale condition. Transport the positive stable manifold $W^s_+(q)$ backwards through the continuation window to a sheet near the outgoing section. Regularity at $v$ means that this transported sheet is transverse to $W^u_-(a)$, by the endpoint fibre-product description. These are the two transverse sheets to which a local hyperbolic passage construction would have to be applied. [F1, given, construct]

1.2 The unbroken solutions near $\beta$ would be obtained by intersecting the image of the incoming sheet under long-time passage near $a$ with the transported outgoing sheet. To obtain the claimed collar, that passage must give a family of sheets with controlled first derivatives converging to the unstable sheet, a unique transverse intersection for each sufficiently large passage time, and a continuous inverse passage-time coordinate for every nearby solution. Neither the stable-disk existence theorem nor the half-line right-inverse theorem supplies these assertions. The normalized formula used by [F3] supplies them only under its extra local-field hypothesis. [F1, F2, F3, step 1.1]

#### Remaining proof requirements

The exact missing local supplier is **an arbitrary-metric hyperbolic passage/collar theorem for two transverse sheets, with fixed slices and eventual coverage**. An analytic alternative must prove a uniformly bounded inverse on a specified complement of the glued kernel, a uniform nonlinear remainder estimate, and the inverse gluing construction. The implicit function theorem gives uniqueness on that complement; without choosing it, uniqueness does not compare different neck lengths or cover every nearby solution. No such estimate or inverse construction is supplied here. Consequently the asserted injective collar and manifold-with-boundary conclusion remain open; the compactness theorem cited in the statement is also currently not supplied.
### thm-homotopic-continuation-data-give-chain-homotopic-maps

#### Facts & Assumptions

**Given:** AC, the two endpoint regular data, a regular two-parameter datum, and the coefficient ring $\Lambda=\mathbb Z/2$ or $\mathbb Z$.

[F1] The augmented operator, rather than every fixed-parameter operator, is surjective. The parametrized endpoint fibre product has dimension $\operatorname{ind}(p)-\operatorname{ind}(q)+1$, with the two parameter-end fibres as boundary ([[def-two-parameter-continuation-homotopy]]).

[F2] A compact one-manifold has even boundary cardinality, and an oriented compact one-manifold has zero signed boundary count ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F3] Once a chain homotopy is established, its maps induce the same map on homology ([[def-chain-homotopy]], [[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

#### Proof

**Proof status:** Not supplied. The boundary-count computation is conditional on the missing parametrized compactification and, over the integers, its orientation comparison.

1.1 For $p,q$ of equal index $k$, [F1] makes $\mathcal P(p,q)$ one-dimensional, with parameter-end copies $\mathcal C^0(p,q)$ and $\mathcal C^1(p,q)$. For a broken configuration, the augmented middle dimension is $\operatorname{ind}(a)-\operatorname{ind}(b)+1\ge0$; adding the positive index drops of its autonomous tails gives the total dimension. A total dimension of one permits only a single index-one autonomous tail with a zero-dimensional augmented middle, besides the parameter endpoints. For $p$ of index $k$ and $q$ of index $k+1$, total dimension is zero and no tail is possible. This classifies possible strata but does not prove their compactness or their collar charts. [F1, given, algebra]

1.2 Suppose the zero-dimensional parametrized spaces are finite and the one-dimensional spaces have compactifications with exactly the classified boundary. Over $\mathbb Z/2$, [F2] then identifies the three boundary contributions at $p,q$ as the coefficients of $\Phi^0+\Phi^1$, $\partial^+K$, and $K\partial^-$. Their sum is zero, which is the stated chain-homotopy equation in characteristic two. Over $\mathbb Z$, the same computation requires orientations of the augmented operators with boundary signs giving $\Phi^0-\Phi^1-\partial^+K-K\partial^-$. These signs have to be established before applying the signed version of [F2]. If these geometric and orientation prerequisites hold, [F3] gives equality on homology. [F2, F3, step 1.1, algebra]

#### Remaining proof requirements

The missing geometric supplier is **compactification and collar gluing for a compact family of augmented continuation operators in dimensions zero and one**. The fixed-datum compactness and collar statements cannot be applied at a rogue trajectory: its vertical operator has index $-1$ and is not surjective. Uniform compactness must also allow $\lambda_n\to\lambda$, and gluing must permit the parameter to change.

The separate integral supplier is **orientation of the augmented determinant line and its two boundary comparisons**, using the exact sequence relating $\ker D_u^\lambda$, $\ker\widehat D_{(\lambda,u)}$, $T_\lambda[0,1]$, and $\operatorname{coker}D_u^\lambda$. At a rogue trajectory the vertical cokernel is essential. Fixed-datum orientation rays do not establish this sequence's gluing signs. Finiteness of the exceptional parameter set is not assumed or proved: regularity of the augmented family and Sard's theorem alone do not imply it. Until these suppliers are proved, the finite count defining $K$ and both coefficient branches remain not supplied.
### thm-continuation-composition-law-on-homology

#### Facts & Assumptions

**Given:** AC, the three Morse--Smale pairs, and the two specified regular continuation data.

[F1] Allowing both functions and metrics to vary, regular continuation data exist by the endpoint-map transversality construction in [[def-regular-continuation-datum-between-morse-smale-pairs]].

[F2] If the requisite continuation compactification and orientation comparisons have been established, the trajectory count is a chain map ([[thm-continuation-count-is-a-chain-map]]). Homotopy independence is the claim of [[thm-homotopic-continuation-data-give-chain-homotopic-maps]], whose parametrized compactification is currently not supplied.

#### Proof

**Proof status:** Not supplied. The construction of spliced data and the algebraic consequence of a suitable gluing theorem are separated below.

1.1 Choose $R$ larger than the tail thresholds and define the spliced datum to equal the first datum at time $s+R$ for $s\le0$, and the second at time $s-R$ for $s\ge0$. On a neighbourhood of $s=0$ both equal the common middle pair, so the splice is smooth and has the required two ends. By [F1], an arbitrarily small interior perturbation makes it regular. This proves existence of regular spliced data, but neither guarantees that the exact splice is regular nor identifies the counts of its perturbation. [F1, given, construct]

1.2 If for all sufficiently large $R$ the exact splice were regular and its rigid solutions were in bijection with pairs of rigid continuation solutions through a common intermediate critical point, with product signs in the integral branch, then the coefficient of $r$ in its count applied to $p$ would be the finite sum over intermediate $q$ of the two count coefficients multiplied. Thus its chain map would equal $\Phi^{21}\Phi^{10}$. Homotopy independence would transfer this equality on homology to regular perturbations and to other splicing choices. The bijection, its signs, and homotopy independence are prerequisites for this implication, not consequences of existence in step 1.1. [F2, step 1.1, algebra]

#### Remaining proof requirements

The exact missing supplier is **uniform stretched-neck gluing of two rigid continuation solutions, with converse compactness, regularity for large neck, and determinant product signs**. It must apply simultaneously to all equal-index critical triples, or provide a common large-neck threshold after using finiteness of the critical set. The collar lemma [[lem-gluing-continuation-solutions-gives-collar-ends]] glues one autonomous Morse trajectory to a continuation solution at fixed data; it does not glue two time-dependent continuation solutions while changing the datum. Generic perturbation by itself does not preserve a trajectory-count bijection. In addition to this separate composition supplier, the parametrized compactification and orientation prerequisites of [F2] remain open. The homological composition law is therefore not proved here.

## Constructive arbitrary-metric passage route

A finite-dimensional route remains viable. Straighten the actual local stable and unstable disks. In a small chart, write `x_s'=A_s x_s+R_s(x_s,x_u)` and `x_u'=A_u x_u+R_u(x_s,x_u)`, where both diagonal blocks are hyperbolic and the straightened invariant axes make `R_s(0,x_u)=0`, `R_u(x_s,0)=0`. For mixed boundary data `x_s(0)=a`, `x_u(T)=b`, the two variation-of-constants integrals have uniform contraction constant when the chart is sufficiently small, independent of `T`. Their fixed point gives a local passage map. To finish an item-level collar proof one must prove its endpoint maps and first derivatives converge uniformly as `T→∞`, solve the incoming-sheet and outgoing-sheet equations by an implicit-function theorem uniform in `T`, and show every nearby geometric sequence corresponds to this fixed local sheet. This is a constructive proof route, not yet a proved supplier: merely writing the contraction equation without the derivative bounds and inverse coverage would repeat the current gap.

## Verification

Temporary partial carriers passed `node tools/proof-layout.mjs` on exactly four item paths: 4 items, 8 steps, 0 defects. Scoped `node tools/rendercheck.mjs` on those same four paths passed. Those results do not certify the original proofs. An accidental `rendercheck --help` started its default corpus traversal; stopped without using any output as frontier evidence. No engine or gate commands run.

## Constructive pass result and restoration

The four native carriers were restored by reconstructing their original Facts from the actual initial file reads and their numbered Proof from the exact claim strings and input tags in the owning proof contracts. Provenance is back to literature-derived, and their statements are unchanged. This is an honest reconstruction, not a retained byte-exact preimage. Their reconstructed proof layout passes: 4 items, 24 steps, 0 defects. No mathematical acceptance or not-supplied disposition has been imposed; root adjudication owns those decisions.

A genuine new local helper was proved: `lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds`. In invariant-axis smooth coordinates it proves, uniformly for all positive passage times, unique mixed-boundary solutions, smooth finite-time parameter dependence, exponentially small endpoint maps and exponentially small first derivatives. The proof supplies the contraction, axis-based off-diagonal estimates, weighted derivative inequalities, and uniqueness within the fixed coordinate ball. It does not invoke a Euclidean normal form for an arbitrary metric. Its explicit proof layout passes: 1 item, 4 steps, 0 defects; its scoped rendercheck passes. This is local verification, not independent review.

To use this helper for a continuation collar, first straighten the actual smooth stable/unstable disks. For a negative-end break at a critical point of index k, take an incoming section along the Morse trajectory and an outgoing section along the negative tail of the middle solution. The incoming sheet is a graph over the unstable coordinates by Morse–Smale transversality. The correct target outgoing sheet is not merely the stable manifold pulled backwards through the fixed window: saturate that pulled-back sheet by a small autonomous flow-time parameter, then intersect with the outgoing section. Regularity of the rigid middle solution says the original pulled-back stable sheet and the unstable disk meet transversely in dimension zero, so the flow saturation adds exactly one independent direction and its outgoing-section intersection is transverse to the unstable sphere with the required codimension k−1. The helper's endpoint maps converge in C1 to zero. The incoming graph equation and target equations therefore have an invertible limiting block derivative and, by a uniform finite-dimensional implicit-function argument, a unique solution for each sufficiently large passage time. Recover the additional flow-time parameter of the saturation uniquely to anchor the continuation middle. This resolves a substantive local estimate; completing a native collar repair still requires presenting the disk-straightening and sheet-equation argument in full, treating the k=0 degenerate unstable case separately, and proving inverse coverage for the specified geometric topology.

The same helper can support two-continuation composition: the two endpoint sheets are transported through the two separate windows, and regularity of each rigid solution makes their intersection with the middle stable/unstable disks transverse in dimension zero. The mixed-boundary endpoint equations then have an invertible limiting derivative. Compactness of all stretched solutions is still needed for converse coverage and a common threshold; signed counts still need the determinant comparison. This branch is not blocked by a claimed impossibility; the required global and signed constructions remain uncompleted in this bounded pass.

New helper source check: retrieved complete Abbondandolo–Majer `montreal.pdf` (74 PDF pages), read Theorem 1.12 and full proof at PDF pp. 11–12 / printed pp. 47–48. It proves smooth invariant graphs for Ck hyperbolic fields. The finite-interval mixed-boundary estimate is an explicit local adaptation proved independently in the new helper, not a quotation of Theorem 1.12. Also read its actual metric endpoint matching Lemma 2.21 at printed pp. 80–81.
