# Batch 23: Haefliger local proof route and remaining obstruction

Research support only, 2026-10-05. This memo does not adjudicate a gate or
change a canonical supplier. The approved regime remains a C² cooriented
codimension-one foliation of a smooth 3-manifold and countable choice ACω.
The current minimal-cycle carrier remains **not supplied**: there is a
sound regular-limit repair and a conditional ACω selection lemma, but the
saddle-limit and filled-interior interfaces below have not been proved.

## Primary text actually inspected

I downloaded the complete Numdam original of André Haefliger,
*Variétés feuilletées*, Annali della Scuola Normale Superiore di Pisa,
series 3, 16 (1962), 367–397:
<https://www.numdam.org/item/ASNSP_1962_3_16_4_367_0.pdf>.
The downloaded file `/tmp/haefliger-route-primary.pdf` has SHA-256
`c535a72d73321ffbb25ad21c64a9e94544358727f6bf6553612f434ce61a3871`.
I read the extracted full-text sections §2.4–2.5, printed pp. 379–381,
and §4.1–4.2, printed pp. 390–392. This is original-source reading, not an
inference from a secondary citation; OCR omits some displayed formulas.

Proposition 4.2 has these hypotheses: a class-2 codimension-one foliation
on a manifold V and a closed transversal homotopic to a constant. Its
conclusion is a loop in one leaf whose holonomy germ is nonidentity but
has a representative equal to the identity on one of the two half-intervals
at 0. Neither coorientation, compactness of V, dimension three, nor a
leafwise-null inward family is part of that proposition's statement.
Coorientation and dimension three are available in this batch.

The proof makes a C² spanning disk generic, with finitely many Morse
centers and saddles. It additionally says distinct singular points have
images not lying on the same leaf in a neighborhood of the image of the
disk (p. 391). Accordingly distinct saddles are not joined by a
characteristic trajectory. Its limiting singular cycle is a homoclinic
saddle loop or a figure eight with one saddle, not an arbitrary
multi-saddle graph. This extra genericity is **not** a conclusion of the
current `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`,
which explicitly disclaims distinct-leaf separation and allows saddle
connections. One cannot silently apply the source's simpler graph cases
to this supplier.

On p. 392 the source orders nonidentity-holonomy cycles by containment,
asserts lower bounds for chains, and uses Zorn. The crucial assertion is
that the holonomy of the *limiting* loop is nonidentity near a sequence of
points tending to 0 corresponding to the approaching cycles, referring
to §2.5. It does not merely assert convergence of nonidentity germs.
The source then says trajectories inside a minimal cycle are closed and
concludes identity holonomy on that side. The batch's additional
one-center/no-saddle description requires its own argument.

I also read Novikov's original complete English translation,
*The Topology of Foliations*, §6, Theorem 6.1 and its proof, printed
pp. 16–18, from the already available full text
`/tmp/frontier41-novikov-current.txt`; its primary URL is
<https://homepage.mi-ras.ru/~snovikov/23.pdf>.
Novikov explicitly replaces null separatrix-bounded center regions with
leafwise disks before invoking an innermost Haefliger cycle. Thus his
claim that the inside then has only regular adjacent curves uses a prior
cap/surgery step. It is not a proof of the same assertion for the original
uncancelled disk.

## A rigorous repair at a regular limiting orbit

Here is the precise local lemma that avoids the invalid limit-of-germs
argument.

Let C be a regular simple closed characteristic orbit of a C¹ planar
field, and suppose h(C) is a loop in one leaf of the C² ambient foliation.
Fix a small source transversal T at a regular point and its coordinate t,
with C meeting T at t=0. Suppose simple closed characteristic orbits C_n
converge to C and eventually lie in its regular annular flow collar,
meeting T at t_n→0 and making one traversal of the collar. Suppose each
h(C_n) has nonidentity ambient holonomy germ. Then h(C) has nonidentity
holonomy germ.

Proof. Choose a finite cyclic flow-box subdivision of C and shrink the
source transversal. By uniqueness and continuous dependence for the
flow, the finite concatenation of passage maps defines one return map R
on an interval about 0; R(0)=0. The annular collar is chosen so that every
C_n under consideration follows this same finite itinerary once. Hence
R(t_n)=t_n, and the germ of R at t_n is its characteristic return germ.
On T, h is ambient-transverse: its pulled-back characteristic covector
is nonzero on the tangent to T. The ambient finite plaque transports
along the images of the same segments therefore define one holonomy
representative H. Expressing both in the same transverse coordinate gives
R=H on a smaller interval. More generally changing source/ambient
transversal coordinates conjugates them by a local coordinate
isomorphism. The germ of H at t_n is consequently the ambient holonomy
of h(C_n), up to that conjugacy. If H were identity on an interval about
0, its germ would be identity at every sufficiently late t_n, a
contradiction. Thus its germ at 0 is nonidentity. ∎

The collar and one-traversal hypotheses matter. Hausdorff convergence
alone at a singular graph does not supply them. The proof uses one fixed
finite plaque word, not a convergent sequence of independently chosen
return maps. No choice principle is needed for this finite local lemma.
For a chain of simple periodic curves approaching a regular orbit, the
usual regular annulus/crossing-order argument must still verify that the
curves make one traversal; this is an explicit interface to the local
planar dynamics supplier.

This argument explains the correct interpretation of Haefliger's witness
sentence. Nonidentity germs can converge to identity, for example the
germs at 0 of t↦t+t³/n. Therefore compactness or convergence of maps alone
cannot replace the fixed-map identification just proved.

## A conditional ACω replacement for Zorn

The following order lemma is rigorous, but its geometric hypotheses remain
supplier obligations.

Let L be a nonempty family of embedded cycle domains D_l in a fixed
bounded planar disk. Assume:

1. L is a union of finitely many subfamilies, each linearly ordered by
   inclusion of domains.
2. Every decreasing sequence l_n in one such subfamily has a member k of
   L with D_k⊆D_{l_n} for every n.
3. Strict domain inclusion has positive area difference, and every domain
   has a well-defined finite area A(l).

Under ACω, L has an inclusion-minimal member. Put a=inf{A(l):l∈L}.
For each positive integer n choose l_n with A(l_n)<a+1/n; this is one
application of countable choice to a specified countable family of
nonempty sets. Some one of the finitely many linearly ordered subfamilies
contains l_n for infinitely many indices. Take that subsequence in
increasing-index order, and take successive finite minima in the inclusion
order. These minima form a decreasing sequence; their areas tend to a.
There is no recursive arbitrary choice here: a finite minimum in a fixed
chain is determined, with equal-domain ties resolved by the earliest
index. Hypothesis 2 gives a lower bound k. Monotonicity gives A(k)≤a,
whereas k∈L gives A(k)≥a. Thus A(k)=a. A strictly smaller member would
have strictly smaller area by hypothesis 3, contradicting the definition
of a. ∎

This lemma does **not** preserve nonidentity by itself. Membership of the
lower bound in L in hypothesis 2 already includes nonidentity holonomy.
That is exactly the point the failed area-minimizer did not establish.
A candidate geometric derivation of hypothesis 1 is: every cycle domain
contains one of finitely many centers, and cycles containing a specified
center are nested. Both statements require proof for the allowed saddle
graphs; index and uniqueness slogans are insufficient. The lemma does
not require a positive lower bound on the infimum, but hypothesis 2 must
exclude degeneration to a center or to a noncyclic graph. Near a fixed
center, plaque-contained circles have trivial ambient holonomy, which is
useful in proving that exclusion.

Do not replace this countable selection by “choose a smaller cycle at
every step” without a canonical rule. Such recursive dependent selections
would invoke dependent choice, which is not justified by ACω alone.
Likewise the printed Zorn step does not establish an ACω proof.

## Exact obstruction at a saddle limit

To turn the two lemmas above into a full local carrier, the singular lower
bound needs the following stronger statement, not just a Hausdorff limit:

* For a nested sequence of nonidentity cycles converging to a finite
  separatrix graph G, extract a closed edge itinerary w, a regular base
  section, and a **single ambient plaque-continuation map H_w on an open
  interval at 0**. For a sequence t_n→0, the approximating cycles' ambient
  holonomy germs at t_n must be identified with the germ of H_w at t_n.
  The itinerary must have bounded multiplicities and the chosen cycles
  must actually follow it. Then the fixed-map contradiction above proves
  H_w is nonidentity.
* If w is a concatenation of simpler circuit words, prove its ambient
  holonomy is the corresponding composition. Nonidentity of the product
  implies at least one factor is nonidentity. Show that factor bounds a
  genuine embedded cycle domain inside every domain of the chain. A
  repeated-vertex directed closed walk alone need not provide this.

Ambient holonomy around a piecewise leaf loop is defined on both sides
by finite plaque transport, even at the image of a characteristic saddle.
The source characteristic saddle-passage map may exist only on a
half-section and need not be a local diffeomorphism through the saddle.
One therefore needs to replace each characteristic passage by a specified
ambient plaque arc in one foliation box and prove the finite words agree
for all sufficiently nearby cycles. The ambient loop itself has ordinary
holonomy; that fact does not identify the approximating cycles' germs
without the itinerary proof.

I have not established this statement for the multi-saddle graphs allowed
by the current disk supplier. The local generalized Poincaré–Bendixson
and strongly-connected finite saddle graph carriers identify a finite
limit set; they do not yet prove this word stabilization or the embedded
lower-bound circuit. They cannot presently discharge hypothesis 2 of
the ACω selection lemma. This is a precise proof obstruction rather than
a claim that Proposition 4.2 is false.

## Filled interior, vanishing family, and integration

Minimality among **nonidentity-holonomy** cycles does not rule out smaller
identity-holonomy separatrix circuits. Accordingly the inference “minimal
nonidentity cycle ⇒ one center and no interior saddle” needs an additional
argument. A locally integrable Morse disk can have several center lobes
and a saddle while all regular closed leaves have identity holonomy. Such
regions are exactly why Novikov first performs leafwise cap replacements.
This observation alone is not a counterexample to the ambient proposition;
it identifies a missing inference in the stronger batch statement.

Even a completed one-sided holonomy cycle supplies identity holonomy on
the approached side, not leafwise nullity there. The center plaque cap,
transport of one compact filling along the actual prescribed transverse
family, and the first-essential-parameter argument remain separate.
A singular endpoint also needs the finite saddle rounding/fence gluing
with the regularity required by the vanishing-cycle definition. A C²
foliation does not automatically provide a C∞ leafwise family.

Sound alternatives retaining the approved main claims are:

1. Complete the fixed-word singular lower-bound theorem for finite saddle
   graphs, establish the finite-chain cover, and apply the ACω selection
   lemma. Supply the filled-side/cap and endpoint-family interfaces
   separately before using the vanishing-cycle consumer.
2. Prove an additional relative genericity lemma eliminating connections
   between distinct saddles, then complete the source's homoclinic and
   figure-eight fixed-word cases. This simplifies the graph obligation;
   it does not prove the lower-bound or cap assertions automatically.
3. Complete the existing finite center–saddle cap/cancellation route,
   including its fixed collar, seam, and exact cap hypotheses. This tracks
   Novikov's preprocessing and can avoid the present Zorn selection, but
   it is substantial local proof work and is not supplied by a citation.

Merely raising the choice premise to full AC would allow Zorn **after**
the chain-lower-bound theorem is proved; it does not fix its missing
geometric and fixed-germ interfaces and is outside the approved regime.

Integration recommendation: preserve the full theorem claims and current
not-supplied statuses. The regular fixed-germ lemma and the conditional
order lemma are usable research components. Do not certify the Haefliger,
rounding, or null-transversal carriers from this memo: the singular
lower-bound, finite-chain cover, filled-side topology, and endpoint fence
remain independent explicit obligations.

## Addendum: selector topology and a concrete obstruction (follow-up)

I re-read the complete relevant argument in §2.5 (printed p. 380,
paragraph beginning “Pour construire”, through the finite composition)
and §4.2 (pp. 390–392). The exact source locations for selection are
p. 391's final paragraph (“Soit L l'ensemble…”), defining regular and
single-saddle homoclinic loops with nontrivial holonomy, and p. 392's
middle paragraph (“L'ensemble L est partiellement ordonné…”), asserting
chain limits and their nontriviality, followed by the paragraph beginning
“Soit donc l un élément minimal…” invoking Zorn. The source has no
printed line numbering; these paragraph anchors specify the passages.
§2.5 proves the finite plaque composition associated with a chosen loop.
It does not prove that a sequence of source cycles has a bounded itinerary
or that one lobe of a limiting figure eight is contained in every chain
domain. Those assertions remain geometric inputs to the selector.

The current batch23 scaffold has since added a rel-collar singular-image
separation supplier and its hypothesis to the Haefliger carrier. Thus the
earlier genericity mismatch is now explicitly addressed in the statement;
this memo does not independently certify the new separation proof.

The actual ordering is inclusion of **bounded simple-cycle domains**, not
an arbitrary order on holonomy germs. Distinct regular trajectories are
disjoint by uniqueness; a homoclinic loop can meet another cycle only at
its saddle, and there are only finitely many separatrix branches. Once the
finite-corner planar separation and “each cycle surrounds a center” lemmas
are proved, domains containing a fixed center form a chain: their boundary
curves cannot cross, and disjoint bounded interiors cannot both contain
that center. This gives the finite-chain cover needed by the ACω order
lemma above. A finite number of saddles does not itself prove the chain
lower-bound theorem. The limit must remain an actual simple cycle or
provide a simple lobe in L; a compact invariant separator alone is not
that conclusion.

A marked displacement witness cannot supply this missing compactness.
For example f_n(t)=t+t³/n is an increasing smooth germ with nontriviality
witnessed at every nonzero t, but every displacement tends to zero.
Recording the witness points does not make the nonidentity condition
closed. The sound invariant is instead identification with **one fixed
limiting plaque word H** at nearby basepoints. If that identification is
proved, nonidentity of H at those basepoints forces nonidentity at 0 as
above; the size of each displacement need not have a positive lower
bound. For separated homoclinic/figure-eight limits the proposed source
saddle replacement by ambient plaque arcs is appropriate, but the finite
word and embedded-lobe assertions must be proved before applying it.
Neither ACω nor Zorn provides those assertions.

There is additionally a concrete counterexample to what the current
minimal-cycle carrier asks the selector to imply. It satisfies even smooth
regularity and separation of all singular images, and shows that minimal
nonidentity holonomy cannot force a one-center/no-saddle interior.

Choose a small ε>0 and the smooth planar function

    v(x,y) = (x²−1)² + y² + εx.

For sufficiently small ε it has exactly three nondegenerate critical
points: two minima and one saddle. Their critical values are distinct
(the linear perturbation separates the minima). Choose a regular value
c above all three critical values, for example c=10 for small ε. The
sublevel Ω={v≤c} is a smooth closed disk: its vertical sections are
−sqrt(c−((x²−1)²+εx))≤y≤sqrt(c−((x²−1)²+εx)), with x in one interval
whose endpoints are the two outer simple roots. Its boundary C is a
smooth simple regular level. Set u=v−c on Ω. All critical values of u
are negative. A regular collar of C has coordinates (θ,s), θ modulo 2π,
s=u, with s<0 on the inner side. Extend this collar a short distance to
s>0 and put u=s there. The enlarged source is again a smooth disk D.

Let A be this open planar collar and O a planar neighborhood of D. Use
ambient coordinates (p,z), p∈O, on the open oriented smooth 3-manifold

    M = (O × (−∞,0)) ∪ (A × R).

Define α(z)=0 for z≤0 and α(z)=exp(−1/z²) for z>0. On the first open
set give M the foliation dz=0. On A×R give it the cooriented foliation

    ω = dz − α(z)dθ = 0.

These definitions agree on their overlap, where z<0. On A×R the form is
nonzero and integrable: dω=−α'(z)dz∧dθ, hence ω∧dω=0. Thus they give a
smooth cooriented codimension-one foliation on M. Consider the smooth
embedded graph disk h(p)=(p,u(p)). Its inner image lies in z<0 and its
collar image lies in A×R, so h is everywhere defined. Its characteristic
covector is du in the inner region and

    ds − α(s)dθ

in the collar. It has exactly the original two centers and saddle. Their
images lie in three distinct ambient leaves: on z<0 the leaves have
constant z, and uniqueness for dz/dθ=α(z) prevents crossing z=0.
The outer boundary s=s₀>0 is a closed transversal since its covector on
∂θ is −α(s₀)≠0; it is nullhomotopic in M by the graph disk itself.

At C, s=0, the characteristic orbit is regular. Its ambient holonomy on
a z-transversal is the time-2π map of dz/dθ=α(z). It equals the identity
for z≤0 and is strictly larger than z for sufficiently small z>0. Thus
C has precisely the one-sided nonidentity required by Proposition 4.2.
Every characteristic closed loop strictly inside C lies in some leaf
z=t<0 with foliation dz=0 and has identity holonomy. This includes the
saddle separatrix lobes. In the outer collar ds/dθ=α(s)>0, so no
characteristic closed orbit lies outside C. Consequently C is the sole
nonidentity-holonomy cycle and is certainly inclusion-minimal, yet its
interior contains **two centers and a saddle**, and nonclosed saddle
separatrix trajectories. Distinct-singular-leaf separation does not remove
this example.

This counterexample does not refute Haefliger's proposition or existence
of a minimal one-sided nonidentity cycle. It refutes the stronger
filled-interior conclusion for an arbitrary separated spanning disk.
Accordingly no marked-witness selector can close the **current entire
carrier statement**, even if its chain compactness and ACω selection are
completed. One must either perform the promised cap/cancellation
preprocessing and state the resulting disk hypotheses, or replace that
auxiliary interior clause by a correctly proved family/cap interface
while retaining the approved terminal Novikov conclusions. Raising the
choice axiom would not cure this obstruction.

The selector alone remains a conditional viable route: ACω selection is
settled by the order lemma once the finite-chain cover and fixed-word
singular lower-bound theorem are established. I have not proved the
latter theorem here and do not promote the selector to supplied status.
