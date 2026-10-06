# Independent compact-section / Poincaré–Bendixson audit

## Finding

I did not find a complete local proof of
`lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier` under
the current hypotheses, and I found no counterexample to its stated planar
classification. The precise remaining gap is the saddle-containing limit-set
case. The existing monotone-crossing argument is sufficient once a single
compact return section and a bounded return-time subsequence are already in
hand. Neither the relative-genericity lemma nor a finite cover by flow boxes
constructs those data or proves that every unbounded return sequence is
eventually controlled by a saddle separatrix. A locally proved *generalized*
Poincaré–Bendixson theorem for finite center/saddle sets would close this seam;
the familiar no-equilibrium version does not.

## Setup and elementary conclusions

Let $D$ be the characteristic disk, let $X$ be its $C^1$ characteristic
line field after choosing an orientation, and let $A$ be the connected open
annulus swept out by the closed trajectories around one center. Work in a
neighborhood of $D$ where the flow exists for the finite times under
consideration. Put $\Gamma=\partial_D A$, the relative frontier of $A$.

The following facts do follow directly.

1. $\Gamma$ is compact. It is invariant under the local flow: approximate
   $p\in\Gamma$ by $p_n\in A$; for any fixed time for which the flow is
   defined, $\Phi_t(p_n)\in A$, so $\Phi_t(p)\in\overline A$. If
   $\Phi_t(p)\in A$, applying the inverse flow would put $p\in A$, a
   contradiction. Compactness gives a uniform short time on $\Gamma$, and
   iteration gives invariance for every finite time for which the ambient flow
   is defined.
2. Every $p\in\Gamma$ is nonwandering. Given a neighborhood $U\ni p$, take
   $q\in U\cap A$. The orbit of $q$ is periodic, so for its period $T>0$,
   $q\in\Phi_T(U)\cap U$.
3. A transverse disk boundary cannot contain a point of $\Gamma$. If $X$ is
   transverse to $\partial D$ at such a point, the ambient flow immediately
   moves that point outside $D$, contradicting invariance of
   $\Gamma\subseteq D$. A leafwise characteristic boundary is instead an
   invariant periodic orbit and can be a frontier component.

These facts establish recurrence in the *nonwandering-set* sense, but they do
not establish that a point of $\Gamma$ lies on a periodic orbit. In particular,
nonwandering does not mean recurrent for an arbitrary flow: a saddle connection
in a closed saddle circuit is nonwandering and is not periodic.

## What the compact-section calculation proves

Let $I$ be a compact transverse interval in a flow box. If a nonperiodic
trajectory meets $I$ at successive points $x_k=\psi(r_ke_1)$, the
coordinates $r_k$ are strictly monotone. Otherwise, the orbit arc between two
successive crossings together with the intervening subarc of $I$ would form
a Jordan curve; uniqueness of integral curves and Jordan separation force the
next crossing to lie on the same side, contradicting the alleged reversal.
Thus $r_k$ converges to an endpoint or an interior point of $I$.

If the return times for a subsequence of these returns are bounded, a further
subsequence converges to $T>0$. The flow-box lower bound excludes $T=0$,
and continuous dependence gives $\Phi_T(x_*)=x_*$ at the limiting section
point. This produces a regular periodic orbit. This part of the batch23
strategy is valid once the fixed section, returns, and bounded subsequence have
been established.

There is a complete classical section argument for a different, narrower
hypothesis: the omega-limit set of one precompact trajectory contains no
critical point. Sideris, *Ordinary Differential Equations and Dynamical
Systems*, §8.6, Theorem 8.8 and its proof (printed pp. 149–153), constructs a
transversal at a point of the omega-limit set, proves monotonicity of all
crossings by Jordan separation, and concludes that the omega-limit set is one
periodic orbit. The proof handles unbounded crossing times; it does not need a
bounded-return subsequence. The theorem is explicitly conditional on the
omega-limit set avoiding critical points.

That theorem is not yet the needed carrier here. The frontier \(\Gamma\) is a
limit of periodic trajectories, not given as the omega-limit set of one
trajectory. Moreover, when \(\Gamma\) contains a saddle, the Sideris theorem
does not apply. The missing inference is precisely to turn the finite saddle
set and local saddle charts into a global finite itinerary: every regular
frontier trajectory must either lie on a periodic orbit or be a separatrix
connection, and the connections in \(\Gamma\) must close into the finite
circuit bounding the given annulus.

## Exact obstruction in the current hypotheses

The finite-flow-box argument is local. It gives a uniform bound on the time a
trajectory can remain in one smaller flow box, but it gives no bound on the
number or order of box transitions. A trajectory can spend arbitrarily long
near a hyperbolic saddle, and after leaving its saddle neighborhood can enter
any of the finitely many regular boxes. The facts “the singular set is finite”
and “each saddle has four local separatrix branches” bound the number of
branches only *after* one proves that all frontier accumulation outside saddle
neighborhoods is on those branches or on a periodic orbit. They do not prove
that exhaustiveness statement themselves.

In particular, the following proposed shortcut is invalid without an added
lemma: select one of finitely many boxes met by an unbounded return segment, then
infer repeated crossings of one fixed compact section. Repeated visits to a
box need not be crossings of its chosen section; overlaps can change the
section, and the return times can diverge while the orbit passes successively
through regular boxes and increasingly close to saddle neighborhoods. No
single-section first-return map is defined across a saddle without additional
transition maps. The local four-branch saddle normal form does not control the
global itinerary.

The appropriate missing local statement is a finite-singularity limit-set
lemma with hypotheses at least as strong as these:

> If a $C^1$ vector field is defined near a compact planar disk, has finitely
> many zeros, each a center or a hyperbolic saddle, and $K$ is the frontier
> limit set of a connected annulus of nested periodic Jordan orbits, then
> $K$ is either a regular periodic orbit or a finite saddle-separatrix
> circuit (with the allowed invariant disk-boundary orbit treated separately).

Its proof must include (i) a section/exhaustion argument for regular compact
pieces, (ii) the unbounded-return alternative at a saddle, and (iii) the
argument that the resulting finite separatrix graph contains the boundary
circuit of this annulus. Only after that lemma is proved do finiteness of the
critical set and the four local branches give a finite graph. The current
genericity assumption does not supply a Morse–Smale condition or a global
cross-section.

## Source check and local-library consequence

Haefliger, “Variétés feuilletées,” §4.2, Proposition 4.2, printed pp. 390–392,
uses exactly the characteristic vector field with centers and saddles and
states that a boundary-cutting trajectory has a regular limit cycle or a
saddle polycycle. The proof invokes the classical Poincaré–Bendixson theorem;
it does not prove the finite-singularity recurrence/exhaustion step. The
article therefore supports the target statement but is not a local proof
carrier for this item.

The library currently has a smooth flow-box theorem and compactness results,
but no local general Poincaré–Bendixson theorem for a limit set containing
saddles. Its published gradient-trajectory limit lemmas are inapplicable to
this arbitrary characteristic vector field. The general Jordan–Brouwer item
also inherits full AC; if the batch is to retain only its stated
\(\mathrm{AC}_\omega\), a local proof must either justify that added choice cost
or use a choice-free smooth-curve separation lemma built from the existing
library.

Thus this independent attempt closes the no-critical compact-section
subargument and verifies the boundary distinction, but does not close the
saddle-containing exhaustion required by the current statement. It found no
mathematical counterexample to that statement; the obstruction is a missing
local theorem and proof, not evidence that the conclusion is false.

Sources checked:

- T. C. Sideris, *Ordinary Differential Equations and Dynamical Systems*,
  §8.6, Theorem 8.8, printed pp. 149–153, author-hosted complete PDF:
  https://web.math.ucsb.edu/~sideris/pdffiles/BookPublishedComplete.pdf
- A. Haefliger, “Variétés feuilletées,” *Annali della Scuola Normale Superiore
  di Pisa*, 3e série, 16 (1962), no. 4, 367–397, §4.2, Proposition 4.2,
  printed pp. 390–392, complete Numdam scan:
  https://www.numdam.org/item/ASNSP_1962_3_16_4_367_0.pdf
