# Finite-range integral comparison for the Thom detection support pair

Owner-authorized proof draft, 2026-10-05. This file proposes mathematical
suppliers only. It changes no item, manifest, plan, readiness or run state.
The parent orchestrator owns integration into the single additional AT pair.

## Exact existing suppliers and source reading

The following published interfaces were read locally:

- `thm-relative-hurewicz-theorem`: for an $(m-1)$-connected CW pair
  $(Z,A)$ with nonempty simply connected $A$ and $m\ge2$, the actual
  relative Hurewicz map $\pi_m(Z,A)\to H_m(Z,A;\mathbb Z)$ is an
  isomorphism. Its general CW formulation assumes AC.
- `lem-relative-hurewicz-comparison-through-a-choice-free-weak-model`
  supplies the same comparison without AC on supplied CW data. Either
  interface suffices; this draft uses the first and propagates AC.
- `thm-long-exact-sequence-of-relative-homotopy-groups`: exactness in
  group degrees and the pointed-set tail.
- `thm-cellular-approximation-for-maps-of-cw-pairs` and
  `lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes`:
  cellular replacement and a genuine ordinary CW mapping cylinder with
  source subcomplex and strong deformation onto its target.
- `thm-singular-homology-satisfies-homotopy-exactness-and-excision`:
  the relative homology exact sequence and homotopy invariance.
- `thm-cw-approximation-of-an-arbitrary-space`: a map $q:A\to Y$ from
  a CW complex extends to $Q:Z\to Y$, with $A$ a CW subcomplex of $Z$
  and $Q$ a weak equivalence.
- `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice`
  compares integral homology under that weak approximation.
- `thm-universal-coefficient-theorem-for-homology-over-a-pid`:
  the natural tensor/Tor exact sequence for a free integral chain complex.
- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`:
  natural algebraic duality, without a finite-dimensional hypothesis.
- `thm-product-universal-property` and
  `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant`
  supply the coordinatewise proof of product homotopy groups below;
  no example-page item is a prerequisite.
  `thm-eilenberg-maclane-spaces-represent-singular-cohomology` and
  `def-eilenberg-maclane-space` supply the fundamental classes,
  evaluation normalization and the individual factor groups.
- `def-stable-homotopy-groups-of-a-sequential-prespectrum` and
  `lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail`
  give the eventual-equality criterion for stable classes.

Authoritative full text actually fetched and extracted: Hatcher,
*Algebraic Topology*, Chapter 4,
<https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf>, Theorem 4.32 and
Corollary 4.33, printed pp. 366–368. The theorem states the relative
simple-connectivity hypothesis explicitly; the corollary uses exactly the
mapping-cylinder/first-nonzero-relative-group argument below. The finite
range and coefficient upgrades below are proved here rather than
attributed to that corollary. This is an interface review, not an
independent audit of every transitive published proof.

## Proposed lemma: finite-range integral homology comparison

**Statement.** Assume AC. Let $N\ge2$, let $X,Y$ be nonempty path-connected
simply connected CW complexes, and let $f:X\to Y$ be a based continuous
map. Suppose

$$f_*:H_i(X;\mathbb Z)\longrightarrow H_i(Y;\mathbb Z)$$

is an isomorphism for $0\le i<N$ and a surjection for $i=N$.
Then $f_*:\pi_i(X)\to\pi_i(Y)$ is an isomorphism for $1\le i<N$
and a surjection for $i=N$. No conclusion about $\pi_{N+1}$, and no
homotopy equivalence of the spaces, is asserted.

**Proof.** Use cellular approximation to replace $f$ by a cellular map
$g$ through a homotopy. If the homotopy moves the basepoint, its track
gives the canonical target basepoint-transport isomorphism, so both the
hypotheses and conclusions transfer between $f$ and $g$. Form the CW
mapping cylinder $M_g$, with source inclusion $j:X\hookrightarrow M_g$
and target deformation retraction $r:M_g\to Y$, so $rj=g$. The homology
exact sequence contains

$$H_i(X)\xrightarrow{j_*}H_i(M_g)\longrightarrow
H_i(M_g,X)\longrightarrow H_{i-1}(X)\xrightarrow{j_*}H_{i-1}(M_g).$$

For $1\le i\le N$, the first arrow is surjective and the last injective.
Exactness therefore forces $H_i(M_g,X)=0$. The component condition gives
$H_0(M_g,X)=0$ as well.

Both $X$ and $M_g$ are path connected and simply connected. The relative
homotopy exact sequence consequently gives $\pi_1(M_g,X)=*$: every
relative path has its initial endpoint connected to the basepoint inside
$X$, and the resulting based loop is null in $M_g$. Induct on
$m=2,\ldots,N$. If the relative groups below $m$ vanish, the CW pair
$(M_g,X)$ is $(m-1)$-connected, and $X$ is nonempty simply connected.
Relative Hurewicz identifies $\pi_m(M_g,X)$ with
$H_m(M_g,X)=0$. This proves all relative groups through $N$ vanish.

For $2\le i<N$, the two adjacent relative groups in

$$\pi_{i+1}(M_g,X)\longrightarrow\pi_i(X)\xrightarrow{j_*}
\pi_i(M_g)\longrightarrow\pi_i(M_g,X)$$

vanish, so $j_*$ is injective and surjective. At $i=N$, vanishing of
the last term gives surjectivity. At $i=1$ both absolute groups are
trivial. Composition with $r_*$ and the basepoint-transport isomorphism
proves the claims for $f$. Every Hurewicz invocation is within its stated
simple-connectivity range. ∎

**Endpoint justification.** Homology isomorphisms through degree $L$
imply homotopy isomorphisms only through degree $L-1$ by this argument:
apply the lemma with $N=L$. To deduce an isomorphism at $L$, one also
needs homology surjectivity at $L+1$. This loss of one degree is essential
to this proof, since injectivity at $L$ uses $\pi_{L+1}(M_g,X)$.

## Proposed lemma: the target need not itself have CW topology

**Statement.** The preceding comparison remains valid for an arbitrary
nonempty path-connected simply connected target space $Y$ if the source
$X$ is CW and the same integral homology conditions on $f$ hold.

**Proof.** Apply the relative clause of
`thm-cw-approximation-of-an-arbitrary-space` directly to $f:X\to Y$.
It gives a CW complex $Z$ containing $X$ as a subcomplex and a weak
equivalence $Q:Z\to Y$ whose restriction to $X$ is exactly $f$.
The weak-equivalence homology supplier makes $Q_*$ an integral homology
isomorphism, while the definition of weak equivalence makes it an
isomorphism on all based homotopy groups and a bijection on components.
Thus $Z$ is path connected and simply connected, and the inclusion
$j:X\to Z$ has precisely the required homology hypotheses, since
$Q_*j_*=f_*$. Apply the preceding lemma to $j$ and compose with $Q_*$.
This avoids assuming that an ordinary finite product of arbitrary CW
complexes has its naive product topology as a CW topology. No lift of
$f$ through an unrelated CW approximation is asserted. ∎

## Proposed lemmas: what upgrades field computations to integral input

For a based map $f$ with CW source, use its ordinary mapping cylinder
pair $(M_f,X)$, or the CW extension pair $(Z,X)$ just constructed. Write
$C=C_*(Z,X;\mathbb Z)$ in the latter case. It is free: singular chains
are free on singular simplices, and the subspace chain group is the free
subgroup on exactly the simplices landing in $X$, so the quotient is free
on the remaining simplices. This justifies applying the integral UCT
to the relative complex rather than treating a quotient as automatically
free. Write $A_i=H_i(C)$.

**Lemma A (finite generation, no extra degree).** Assume AC, and assume
$A_i$ is finitely generated for $0\le i\le N$. If
$H_i(C\otimes\mathbb Q)=0$ and $H_i(C\otimes\mathbb F_p)=0$ for every
prime $p$ and $0\le i\le N$, then $A_i=0$ for $0\le i\le N$.

**Proof.** The UCT injection gives $A_i\otimes\mathbb Q=0$ and
$A_i\otimes\mathbb F_p=0$ for every prime. The existing
`cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`
writes $A_i$ as a finite direct sum of copies of $\mathbb Z$ and finite
cyclic groups. A nonzero free summand survives tensoring with
$\mathbb Q$. If there are no free summands but a nonzero cyclic summand
$\mathbb Z/d$ remains, choose a prime $p\mid d$; tensoring that summand
with $\mathbb F_p$ gives $\mathbb F_p$, since tensoring its presentation
$\mathbb Z\xrightarrow{d}\mathbb Z\to\mathbb Z/d\to0$ gives the
cokernel of the zero map on $\mathbb F_p$. This contradicts the UCT
injection. Hence no summands remain. ∎

**Lemma B (no finite generation, one extra field degree).** Assume AC.
If the same field homology groups vanish for $0\le i\le N+1$, then
$A_i=0$ for $0\le i\le N$, without any finite-generation assumption.

**Proof.** For each $i\le N$, UCT in degree $i$ gives
$A_i\otimes\mathbb Q=0$, and UCT in degree $i+1$ gives
$\operatorname{Tor}^{\mathbb Z}_1(A_i,\mathbb F_p)=0$ for every prime.
Localization identifies $A_i\otimes\mathbb Q$ with fractions $a/s$,
where $a/1=0$ exactly when some nonzero integer annihilates $a$.
Thus every element of $A_i$ has finite order. The two-term free
resolution $0\to\mathbb Z\xrightarrow{p}\mathbb Z\to\mathbb F_p\to0$
computes $\operatorname{Tor}_1(A_i,\mathbb F_p)=\ker(p:A_i\to A_i)$.
If $a\ne0$ has order $d>1$, choose $p\mid d$; $(d/p)a$ is nonzero
and killed by $p$, contradicting that kernel's vanishing. Thus $A_i=0$.
The fraction description and the Tor computation are the displayed
explicit computations, not an appeal to an unproved finiteness theorem. ∎

**Lemma C (bounded exponent, one field suffices).** If $2^sA_i=0$ for
some positive integer $s$ for every $i\le N$, and
$H_i(C\otimes\mathbb F_2)=0$ for those degrees, then $A_i=0$ there.

**Proof.** UCT injects $A_i\otimes\mathbb F_2=A_i/2A_i$ into the zero
field homology group. Thus $A_i=2A_i$, and iteration gives
$A_i=2^sA_i=0$. ∎

These are conditional alternatives. The current library field
computations alone do not prove the relative finite generation in
Lemma A or the relative bounded exponent in Lemma C. Exponent two of
*stable geometric unoriented bordism* does not automatically give
bounded exponent for the unstable relative integral homology groups of
a detecting map. Such a transfer needs an additional proof.

An integral homology isomorphism under the weak CW approximation also
induces an isomorphism with each field coefficient: naturality of UCT
gives an isomorphism on both outer terms of its short exact sequences,
and the elementary injectivity/surjectivity chase gives an isomorphism
on the middle term. Thus all field comparisons below can be transferred
to the CW extension pair without an extra approximation assumption.

For each field, isomorphisms $f_*:H_i(X;k)\to H_i(Y;k)$ for $i<N$
and surjectivity for $i=N$ imply relative field homology vanishing
through $N$ by the same five-term exact-sequence argument used above.
In particular, a field cohomology isomorphism in a degree implies a
field homology isomorphism there: natural field duality identifies the
former with the algebraic dual of the latter. The dual functor reflects
isomorphisms under AC. Indeed, a nonzero kernel vector admits a
functional nonzero on it after extending it to a basis, contradicting
surjectivity of the dual map; a proper image admits a nonzero functional
on the quotient, contradicting injectivity of the dual map. This
argument does not identify any vector space with its double dual.

## Proposed application: finite product of Eilenberg–MacLane detectors

Let $r\ge2$ and let $T_r$ be a nonempty $(r-1)$-connected based CW
Thom-space model. Let $J$ be a finite index set and $q_j\ge r$ for
$j\in J$. Put

$$P_r=\prod_{j\in J}K(\mathbb F_2,q_j).$$

Choose cohomology classes $u_j\in\widetilde H^{q_j}(T_r;\mathbb F_2)$,
let $f_j:T_r\to K(\mathbb F_2,q_j)$ represent them, and let
$f=(f_j):T_r\to P_r$. The representability supplier proves the
existence of these maps and their fundamental-class normalization; the
finite product universal property proves continuity of $f$.

The coordinate map
$$\pi_i(P_r)\longrightarrow\prod_{j\in J}\pi_i(K(\mathbb F_2,q_j))$$
is an isomorphism for every $i\ge1$: project a based cube and its
boundary-fixed homotopies to get the coordinate classes; conversely,
pair coordinate cube representatives and coordinate homotopies using
the product universal property. These operations are inverse on
classes. The cubical concatenation formulas are coordinatewise, so
the inverse bijections are homomorphisms. Since $J$ is finite, the
representative and homotopy choices require only finite choice.
Likewise coordinate paths join any two product points, so $P_r$ is
path connected. Each factor has trivial fundamental group because
$q_j\ge r\ge2$, hence the displayed degree-one comparison makes
$P_r$ simply connected. If $J$ is empty, $P_r$ is a point and the
same statements hold with trivial products.
Use the arbitrary-target comparison above; no CW topology on $P_r$ is
presupposed.

**Conditional detection statement.** If $f$ induces integral homology
isomorphisms in degrees $0\le i<2r-1$ and a surjection in degree
$i=2r-1$, then

$$\pi_i(T_r)\xrightarrow{\cong}\pi_i(P_r)
=\prod_{j:q_j=i}\mathbb F_2\qquad(1\le i\le2r-2).$$

**Proof.** Apply the comparison with $N=2r-1$. The stated hypotheses
give exactly the required homology isomorphisms below $N$ and
surjectivity at $N$; injectivity of homology at that endpoint is
not assumed or needed.
Each factor has its unique nonzero homotopy group in degree $q_j$.
The local coordinatewise proof computes the displayed product; factors
whose $q_j\ne i$ contribute zero. ∎

For $\alpha:S^i\to T_r$, its $j$th coordinate for $q_j=i$ is exactly

$$\langle \alpha^*u_j,[S^i]\rangle\in\mathbb F_2.$$

Indeed, $u_j=f_j^*\iota_j$ by representability, and the normalization
of $\iota_j$ says its evaluation on the Hurewicz image of the sphere
class in $K(\mathbb F_2,i)$ is that homotopy element itself. Thus
vanishing of these evaluations implies $\alpha=0$ in the stated range.
This identifies detection with actual evaluations, not a dimension
comparison or an unspecified abstract group isomorphism.

The missing input to this application is still the **integral**
homology comparison. A mod-two cohomology isomorphism proves only its
mod-two counterpart. Put $N=2r-1$. Lemma A supplies the required
integral relative homology vanishing through $N$ if the relative
integral groups are finitely generated through $N$ and the rational
and every prime-field relative homology vanish through $N$.
The relative exact sequence then gives integral homology
isomorphisms for $i<N$ and surjectivity at $N$, which are exactly
the application hypotheses, not integral isomorphisms at $N$.

Lemma B remains a distinct conditional alternative: to obtain
integral relative vanishing through $N=2r-1$ without finite
generation, it requires field relative vanishing through $N+1=2r$.
Field comparisons only in degrees $i<2r$ yield relative field
vanishing only through $2r-1$ and cannot discharge that stronger
input. They would instead give integral relative vanishing only
through $2r-2$ by Lemma B, and homotopy isomorphisms only through
$2r-3$ by the finite-range comparison. That weaker route does not
establish the application at its retained cutoff $r\ge n+2$.
Lemma C needs independently proved bounded relative exponent.
The support pair must choose and prove one route. This draft does not
assert the away-from-two Thom or EM computations have been completed.

## Stabilization: valid conclusion and remaining compatibility

Fix a stable degree $n\ge0$. The unstable group used at rank $r$ is
$\pi_{r+n}(T_r)$. The proved range $r+n\le2r-2$ is equivalent to
$r\ge n+2$. The strict bound cannot be replaced by $r\ge n$ or by
an endpoint $i=2r$; no endpoint integral comparison is supplied.

One need not prove that every stabilization bonding map is an
isomorphism to prove stable **injective detection**. The following
elementary colimit lemma isolates exactly the required condition.

**Lemma.** Let $(G_r,b_r)$ be a sequential group system. For all
$r\ge R$, let $d_r:G_r\to V_r$ be injective homomorphisms and let
$c_r:V_r\to V_{r+1}$ satisfy $d_{r+1}b_r=c_rd_r$. Then the induced map
$\operatorname{colim}G_r\to\operatorname{colim}V_r$ is injective.
If instead all $V_r$ are identified with one group $V$ and each $c_r$
is its identity, the induced map to $V$ is injective without a separate
argument about stabilization maps.

**Proof.** Represent a stable class by $x\in G_r$ with $r\ge R$
using cofinal-tail independence. If its detected colimit class is zero,
there is $s\ge r$ where $c_{s-1}\cdots c_r d_r(x)=0$, by the
eventual-equality definition of the colimit. This is also
$d_s(b_{s-1}\cdots b_r x)$. Injectivity of $d_s$ implies that the
advanced source representative is zero, hence the stable source class
is zero. In the
fixed-$V$ formulation, zero detection means directly $d_r(x)=0$.
Injectivity of $d_r$ gives the conclusion. ∎

Compatible injective detection on a cofinal tail suffices for
injectivity on colimits. No injectivity of the target bonding maps is
needed; eventual zero detection at a later stage is enough.

For characteristic-number detection, the support pair must prove that
the evaluated classes at rank $r$ correspond under Thom stabilization
to the same stable characteristic monomials at rank $r+1$. The existing
Thom suspension/Whitney-sum suppliers are appropriate ingredients, but
this is a distinct identity to be checked in the chosen detector basis.
An injective detector at each sufficiently large rank together with
that identity proves stable detection by the preceding lemma. Equal
cardinalities of detector bases across ranks alone prove neither
compatibility nor injectivity of the bonding maps. A stable
surjectivity statement or a bordism ring calculation requires further
arguments and is not a consequence of this finite-range lemma.

## Resolution assessment

The finite-range homology-to-homotopy step has a complete local proof
from existing published suppliers and needs no new relative Hurewicz
theorem. The product-topology issue can be eliminated by the existing
relative CW approximation extension, rather than assumed away.
The off-by-one endpoint and integral coefficient upgrade are genuine
conditions for the Thom route. They must remain explicit in every
consumer. This draft leaves the substantial away-from-two computations
and stable-class compatibility to their assigned suppliers; it cannot
honestly certify Thom detection until those proofs are supplied.
