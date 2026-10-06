# Batch 23: alternate proof audit for the two Novikov disk inputs

## Scope and finding

This memo audits only the two inputs that feed the vanishing-cycle route:

1. a noninjective inclusion $\pi_1(L)\to\pi_1(M)$ produces a vanishing cycle (and hence a nonzero Novikov subgroup $\Pi^j_1$); and
2. a null-homotopic closed transversal produces a vanishing cycle (and hence a nonzero $\Pi^j_1$).

The approved Novikov claims are mathematically sound and should remain unchanged. Novikov’s Theorem 6.1 states both implications in the broader setting of a foliation on an $n$-manifold; the batch specializes to a closed oriented 3-manifold and $C^2$ codimension-one foliation. Novikov’s proof of condition (3) is only “entirely similar” to condition (1), and its center–saddle reduction is not supplied. The null-transversal route has a better detailed source than the existing brief citation suggests: Haefliger’s full 1962 paper, §4.2, Proposition 4.2, gives a planar Poincaré–Bendixson argument with a precise one-sided holonomy conclusion. That proposition still does not prove leafwise nullity of the displaced loops, so a short local first-essential-loop lemma is needed before one may conclude $\Pi^j_1\ne0$.

The two arguments have different local proof burdens. The null-transversal case can be completed by about five focused local carriers, using Haefliger’s disk argument. The compressible-leaf case needs a fuller relative center–saddle cancellation package, approximately six to eight carriers. Neither requires adding a pair or importing a new global theory, but the latter is substantial same-pair proof work. The correct response is to preserve the full claims and build those carriers; taut-foliation sources alone cannot replace the general Novikov hypotheses.

## Exact source statements and notation

Novikov, *The Topology of Foliations*, §6, Theorem 6.1, printed pp. 16–19, says that each of the listed conditions implies nontriviality of one of the groups $\Pi^j_1(A)$: (3) a leaf inclusion $\pi_1(B)\to\pi_1(M)$ has nontrivial kernel; or (4) the positive closed-transversal semigroup map has nontrivial kernel. The proof of (1) begins with a null-homotopic closed transversal, spans it by a regular disk map, and studies the characteristic foliation on that disk. Near a center, small closed trajectories are null-homotopic in their leaves. If nullity fails, the first nonnull loop supplies the desired element; if all center loops and separatrix frontiers are null, Novikov caps the center regions and invokes Haefliger’s theorem to obtain an innermost noncontractible limit cycle. The proof of (3), in contrast, says only that a regular disk spanning a kernel loop is constructed “in an entirely similar fashion,” noting that saddles may occur on the boundary, and then says the hypothesis supplies the required nonnull leaf loop. It does not provide the analogous frontier, surgery, or relative-boundary argument.

Keep three objects separate. In Novikov §2, the ordinary one-sided limit-cycle quotient is $P_j=\pi_1(L)/N_j$, where $N_j$ is the kernel of the holonomy germ on side $j$. In §3, $\Pi^j_1(L)\subseteq N_j$ consists of classes whose one-sided normal displacements are not only closed but null-homotopic in their displaced leaves. Thus:

- nontrivial holonomy on a side detects a nonidentity class in $P_j$;
- identity holonomy on side $j$ puts a class in $N_j$;
- to put a nontrivial class in $\Pi^j_1$, one must additionally prove leafwise nullhomotopy of all sufficiently small side-$j$ displacements.

A vanishing cycle supplies the third item on its approached side. It does not in general imply nontrivial ordinary holonomy on that same side. This is the correction to the former “vanishing cycle yields a limit cycle” bridge.

## Source-grounded argument for a null-homotopic closed transversal

### What Haefliger proves

Haefliger, *Variétés feuilletées*, §4.2, Proposition 4.2, printed pp. 390–392, states: for a class-2 codimension-one foliation, if a closed transversal is homotopic to a constant, then some loop on a leaf has holonomy germ at $0$ which is not the identity germ, but which is the identity on one of the two half-intervals $[0,\epsilon)$ or $(-\epsilon,0]$. The proof is explicit at the planar-dynamics level:

1. Extend the transverse loop over a disk and put each distinguished transverse coordinate in nondegenerate Morse position. The pullback has finitely many centers and saddles; the disk characteristic foliation is oriented and its boundary is a closed curve transverse to its trajectories.
2. Apply Poincaré–Bendixson to trajectories from the boundary. Their limiting set is a periodic orbit or a saddle polycycle. At least one resulting leaf loop has nontrivial holonomy, so the set of such limit cycles is nonempty.
3. Order these cycles by containment. Haefliger proves that every nested chain has a lower limit cycle still having nontrivial holonomy, then takes a minimal cycle. Every trajectory inside its disk is closed; otherwise Poincaré–Bendixson produces a smaller nontrivial-holonomy cycle. The return germ is the identity on the side filled by the closed trajectories, but is not the identity germ on the other side.

The exact French conclusion is “le germe … n’est pas celui de l’application identique, mais … est l’identité sur [one half-interval].” Therefore Haefliger’s loop is an ordinary nontrivial-holonomy limit cycle on the opposite side and has identity holonomy on the side approached by the interior trajectories. These are different side statements about the same loop. Proposition 4.2 does **not** say that its closed displaced loops are null-homotopic in their leaves, so the proposition alone gives $[\ell]\in N_j$ and a nontrivial opposite-side $P_{-j}$ class, but not $[\ell]\in\Pi^j_1$.

### Local bridge from Haefliger’s cycle to $\Pi^j_1$

The following local argument supplies the missing nullhomotopy condition without invoking a Reeb-component theorem.

1. Inside the minimal Haefliger cycle, choose the disk bounded by the cycle. Haefliger’s argument says every nonsingular characteristic trajectory there is closed. A small orbit about a center lies in one foliation plaque and bounds a disk in its leaf. Planar index, or the orbit-space description of this disk, gives a nested annulus of smooth closed characteristic loops tending to the minimal cycle. If the minimal cycle is a saddle polycycle, first use a leafwise smoothing in a saddle chart; the smoothing is leafwise homotopic to the polycycle and preserves its holonomy germ up to the usual basepoint conjugacy.
2. Let $I$ be the initial interval of this nested family on which the loop is null-homotopic in its leaf. It is nonempty by the plaque model. Nullity is open in the transverse parameter: transport one fixed compact filling disk through finitely many foliation charts, using the simply connected domain to remove chart-path monodromy. This is the local compact-nullhomotopy-persistence lemma.
3. If nullity first fails at a smooth interior orbit, that orbit is nontrivial in its leaf (openness rules out a null endpoint), and every loop on the approaching side is closed and null-homotopic. The family up to that orbit is a vanishing cycle.
4. If nullity persists up to the minimal Haefliger cycle, that endpoint is nontrivial in its leaf because a nullhomotopic loop has trivial holonomy germ, whereas Haefliger’s endpoint has a nonidentity germ on the opposite side. The inward family is already leafwise null, so it is a vanishing cycle. For a polycycle endpoint, the saddle-chart smoothing and side-fence construction must be made explicit to obtain the smooth endpoint family required by the batch definition.
5. On the approached side $j$, the transverse family makes every sufficiently small displacement a closed loop; its nullhomotopy follows from steps 2–4. Since the endpoint class is nonzero, it belongs to $\Pi^j_1$. Its opposite-side nontrivial holonomy is a separate $P_{-j}$ fact and is not used for this membership.

This route is local to the disk plus compactness of the filling maps; it does not require tautness or minimal surfaces. The proof-carrier DAG below isolates what should be recorded locally. Haefliger’s statement and chain argument can be cited as a source locator, but the batch requirement that prerequisites be locally proved means the planar limit-cycle carrier should state the needed reduction rather than use “by Haefliger” as a black box.

## Source-grounded argument for a compressible leaf

### Available proof routes and their limits

- **Novikov §6, condition (3), printed pp. 18–19:** exactly the desired implication, with the kernel loop as boundary of a regular disk map. The entire proof is summarized as “entirely similar” to condition (1); the only stated extra observation is that saddles may meet the boundary. This is a theorem citation, not a complete local proof.
- **Ranz, *Approximately Holomorphic Techniques in Foliations*, §3.2.3, Proposition 3.6, printed pp. 51–54:** proves the contrapositive “no vanishing cycles implies leaf $\pi_1$-injectivity.” It gives a useful center-basin setup: choose an immersed disk with boundary the kernel loop, study its characteristic foliation, and for each center take the maximal region whose leaf loops bound immersed disks. A nonclosed frontier with only one singularity is said to be a vanishing cycle. With several singularities it invokes Poincaré–Hopf and Corollary A.9 to obtain two centers whose frontiers share a saddle, describes two planar configurations, and says the immersion can be replaced with one fewer center. The proof does not establish the required saddle incidence, the embedded/immersed disk bounded by the cut-and-paste contour in the ambient leaf, or a relative smoothing/generic perturbation that preserves the prescribed boundary loop. It also does not spell out a finite complexity measure for the recursion. Ranz is a useful outline, not a complete proof of the critical surgery.
- **Calegari, *Foliations and the Geometry of 3-Manifolds*, §4.6, Theorem 4.35, printed pp. 163–166:** gives a detailed center/saddle disk-surgery proof that leaves of a **taut** foliation are incompressible. It explains how to cut out a disk along a saddle limit, insert a leafwise filling disk, choose a foliated product neighborhood, extend the homotopy over a collar, and cancel one center with one saddle. But the crucial existence/convergence of the limiting leafwise disk is proved using least-area surfaces and tautness. This proof cannot be transplanted to the general Novikov foliation by dropping tautness. Calegari’s historical remark after Corollary 4.36 expressly notes that Novikov’s Reebless result is broader than the taut theorem and points to Candel–Conlon for an exposition; that reference should be independently checked before treating it as the local proof source.

### Locally complete route to build

Start with an essential loop $\gamma\subset L$ in the kernel of $\pi_1(L)\to\pi_1(M)$ and a disk map $h:D^2\to M$ with $h|_{\partial D}=\gamma$. After relative genericity, the induced characteristic foliation has finitely many nondegenerate centers and saddles and is tangent to the boundary. The index equation is $c-s=\chi(D^2)=1$. Small center circles lie in plaques and bound disks in their leaves. Grow the disk-filling center regions. If a frontier loop is not leafwise null, compact nullhomotopy persistence gives an essential endpoint approached through closed nullhomotopic leaf loops, hence a vanishing cycle. If every encountered frontier is leafwise null, use an innermost separatrix-frontier circuit and a relative center–saddle surgery to replace the disk map, preserving $\gamma$ and decreasing the number of center–saddle pairs. The index equation makes the process finite. Once only one center and no saddles remain, take its maximal annulus of closed characteristic orbits whose loops are leafwise null. Its frontier cannot be a regular null loop, since compact-nullity persistence would extend the filled annulus. If the frontier is an essential interior orbit, it gives a vanishing cycle; if the family reaches the boundary orbit $\gamma$, that essential endpoint gives one. This avoids assuming that the one-center characteristic foliation is globally a family of circles all the way to $\partial D$; a regular essential limit orbit may intervene first.

The surgery needs to be proved, not just illustrated. In the saddle chart, identify the incoming/outgoing separatrices and choose an innermost branch segment so the cut-and-paste contour is a simple closed curve in the saddle leaf (or explicitly an immersed loop with a disk map). Prove it bounds the particular leafwise disk used for the replacement from the filling property of the center-basin frontier; do not infer this merely from a figure or from the fact that the two curves share a saddle. Remove the center-side disk, insert the leafwise filling disk, use a product neighborhood of its compact image, extend the homotopy over a collar relative to the outer boundary, smooth the corners, and perturb rel the outer collar to recover finite Morse characteristic singularities. Track the pair-count decrease and the boundary condition at every step. If a frontier loop or separatrix circuit is essential instead, the transverse family on its filled side already gives the vanishing cycle and no surgery is needed.

This route retains the general $C^2$ theorem; it does not assume tautness, Reeblessness, least-area geometry, or an embedded nullhomotopy disk. The disk map may remain immersed, provided the proof carefully tracks the induced foliation on its domain and permits self-intersections away from the fixed boundary.

## Proposed local proof-carrier DAG

The new carriers can be added within the existing Novikov pair. Dependencies are suppliers-first; established differential-topology items for relative transversality, Morse genericity, Poincaré–Hopf, local foliated charts, Reeb stability, and smoothing should be reused where their actual hypotheses match.

```text
Common disk foundations
  C0 relative characteristic-disk genericity
     ├─ preserves the boundary collar (leaf loop or transversal)
     ├─ finite nondegenerate center/saddle singularities
     └─ needed distinct-leaf/separatrix general-position clauses
  C1 characteristic-disk index and boundary conventions: c - s = 1
  C2 compact leafwise-nullhomotopy persistence under a transverse family
  C3 first-loss lemma: initial null loops + open nullity + essential endpoint
     => vanishing cycle => Pi^j_1 nonzero

Compressible-leaf branch
  C0, C1, C2, C3
   └─ C4 center-filling basin is open; frontier dichotomy
      ├─ regular essential frontier => C3
      └─ saddle/separatrix frontier
          └─ C5 innermost separatrix circuit and leafwise filling disk
             └─ C6 relative center-saddle surgery
                ├─ contour/filling disk validity
                ├─ collar homotopy rel outer boundary
                ├─ smoothing and re-genericity
                └─ decreases finite pair count
                   └─ C7 finite reduction to one center/no saddles
                      └─ nested family from center to essential boundary gamma
                         └─ C3

Null-transversal branch
  C0, C1, C2, C3
   └─ H1 Haefliger disk/Poincare-Bendixson minimal (possibly polycycle)
      limit with nonidentity full holonomy and identity on interior side
       └─ H2 interior orbit annulus and polycycle smoothing/fence
          └─ H3 first-essential-loop alternative
             ├─ first loss before Haefliger endpoint => C3
             └─ no loss => endpoint nonnull by nontrivial holonomy => C3
```

Here `C3` should conclude the full local vanishing-cycle family and then invoke the already separated bridge “vanishing cycle determines a nonzero $\Pi^j_1$ class.” The Haefliger carrier’s one-sided statement must label the side explicitly: the approached/interior side has identity holonomy; the opposite side has nontrivial holonomy. Only the first side is used for $\Pi^j_1$.

Estimated authoring load is four common carriers, about four branch-specific carriers for the transversal case, and about four additional frontier/surgery/reduction carriers for the compressible-leaf case. The center–saddle surgery is the mathematically substantial part. It is still a contained disk-topology proof, not a need to add an external prerequisite pair or weaken the theorem. If a checked carrier cannot be completed, preserve the theorem statement and record the proof gap explicitly rather than converting a source citation into a purported local proof.

## Sources inspected

1. S. P. Novikov, “The Topology of Foliations,” English translation by J. A. Zilber, complete scan: <https://homepage.mi-ras.ru/~snovikov/23.pdf>. Inspected §2 (printed pp. 4–6), §3 (pp. 9–10), and §6 (pp. 16–19). Local downloaded copy SHA-256: `9267c190c5a0a0aa3364735a577ccbed1ca1e71cd7b7314c3ec9cf9cded0be35`.
2. A. Haefliger, “Variétés feuilletées,” *Annali della Scuola Normale Superiore di Pisa*, 3e series, 16 (1962), 367–397. Numdam full scan: <https://www.numdam.org/item/ASNSP_1962_3_16_4_367_0.pdf>. Inspected §4.2, Proposition 4.2, printed pp. 390–392. Local copy SHA-256: `c535a72d73321ffbb25ad21c64a9e94544358727f6bf6553612f434ce61a3872`.
3. S. Ranz, *Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov’s Theorem*, 2024 thesis: <https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf>. Inspected §3.2.3, Proposition 3.6, printed pp. 51–54, and its cited Appendix A center/saddle count. Local copy SHA-256: `295eb897b32142651d79f4f3c2ff52e5ae42ffe606989d1a89ef812fde45cc3d`.
4. D. Calegari, *Foliations and the Geometry of 3-Manifolds*, complete author-hosted PDF: <https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf>. Inspected §4.6, Theorem 4.35 and proof, printed pp. 163–166, Corollary 4.36 and historical remark, pp. 166–167. Local copy SHA-256: `4827ccafc1cc5b532529d083e6bd89c0895a34ed50d9411e22aa7404cd7b402a`.

No batch manifest, item, coverage, or receipt was edited for this memo.
