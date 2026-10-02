# Batch 8 canonical-map and hyperelliptic audit

**Scope and writes.** Independent proof audit of `def-hyperelliptic-curve`,
`thm-canonical-map-nonhyperelliptic-curve`,
`cex-canonical-map-hyperelliptic-not-embedding`, and its direct consumer
`ex-plane-quartic-canonical-hyperplane`. The released repairs are now in those
four item files and are summarized below. No manifest, contract, coverage row,
plan, ledger, receipt, certification, or gate was changed.

## `def-hyperelliptic-curve`

The unrestricted degree-two-map predicate is retained. Two genus-zero
equivalences are now limited to \(g\ge1\): a degree-two map iff gonality is two,
and a degree-two map iff there is a degree-two base-point-free line bundle with
exactly two sections. The split curve \(\mathbf P^1\) has degree-two
self-maps but gonality one, and the pullback of \(\mathcal O(1)\) under such a
map is \(\mathcal O(2)\), with three sections. The item now distinguishes
hyperellipticity over \(k\), which requires a map to split \(\mathbf P^1_k\),
from geometric hyperellipticity, which is defined after base change to
\(\bar k\). A geometric quotient need not descend to the split line.

The line-bundle section count is proved in the item rather than assumed:
for a degree-two map \(\phi\), its finite pushforward \(E=\phi_*\mathcal O_C\)
is rank two and torsion-free over each target DVR, hence locally free. The
unit is a subbundle and the quotient is \(\mathcal O(a)\). A two-chart
calculation and \(\chi(E)=\chi(C,\mathcal O_C)=1-g\) give \(a=-g-1\).
Twisting by \(\mathcal O(1)\) then gives \(h^0(C,\phi^*\mathcal O(1))=2\)
when \(g\ge1\). The converse uses the two generating sections and the degree
of the fiber. The uniqueness proof for \(g\ge2\) is retained and expanded:
Riemann--Roch and Serre duality prove
\(L^{\otimes(g-1)}\cong\omega_C\); the pulled-back monomials give the full
canonical basis; the two Veronese embeddings identify their copies of
\(\mathbf P^1_k\) with the same canonical image. This proves uniqueness for
maps to split \(\mathbf P^1_k\), without inferring a split map from a
geometric quotient.

The definition item keeps both definitions unconditional and now states AC
for all its proved assertions, including the map-finiteness and
function-to-map claims as well as the equivalence, section-count and
uniqueness proofs. The actual map, global-section, projective-space, Čech,
long-exact-sequence, Riemann--Roch, Serre-duality and birational-curve
suppliers cited there require AC. Its dependency list includes the published affine-cover
Čech comparison and long-exact sheaf-cohomology interfaces. In the rank-two
finite flat algebra, the unit is a subbundle because its fiber is nonzero; in a
local basis of the algebra one of its two coordinates is therefore a unit, so
replacing the corresponding basis vector by the unit gives a basis. For the
quotient line bundle, the two standard affine charts give finite rank-one
projective modules over PIDs, hence free modules by the cited torsion-free PID
result. The finite inverse images of the chart cover and their intersection
are affine by the published finite-morphism-affine result. The Čech complexes
for the pushforward algebra and the structure sheaf have the same terms, and
the cited Čech theorem applies to these quasi-compact separated schemes.
Euler-characteristic additivity is taken from the cited long exact sequence.

## `thm-canonical-map-nonhyperelliptic-curve`

Statement (2) now uses geometric nonhyperellipticity over arbitrary \(k\).
The proof retains the point and tangent tests: failure of either gives a
two-dimensional \(H^0(\mathcal O_C(D))\) for an effective degree-two
divisor; a nonconstant function then yields a degree-two map. Conversely, a
geometric degree-two map gives the full canonical Veronese factorization.

The finite-map step now covers both generic and closed target points. For the
scheme-theoretic image \(Y\), a nonconstant affine coordinate ratio \(h\) is
chosen on a standard projective chart containing the generic point. The map
\(C\to Y\) is dominant, so its generic stalk map embeds \(k(Y)\) in \(k(C)\).
Geometric integrality makes \(h\) transcendental over the base field.
Since \(k(C)\) has transcendence degree one, \(k(Y)\) has transcendence degree
one and \(Y\) is an integral curve. The finitely generated algebraic
extension \(k(C)/k(h)\) is finite, hence \(k(C)/k(Y)\) is finite. The generic
fiber has only the source generic point: a closed source singleton cannot map
to the generic point of \(Y\), because properness sends it to a closed subset
of the projective target. Thus the generic point is isolated with finite
residue extension. Each closed fiber is a proper closed subset of \(C\), has
finite support, and has finite point-residue extensions. The published
pointwise fiber criterion now gives quasi-finiteness; properness gives
finiteness. This explicitly repairs the earlier proof's gap, which had only
handled closed target fibers.

For the closed-immersion direction, the finite local Nakayama argument and
faithfully flat descent are inline; no degree-threshold very-ampleness result
is used. The proof uses point separation for the unique point over each
closed point of the image, tangent separation for the cotangent surjection,
and two applications of the published AC-qualified Nakayama lemma to identify
the local rings and then the affine coordinate rings. The genus-two
converse no longer claims an unsupported degree for the canonical map: a
closed immersion into \(\mathbf P^1\) would have one-dimensional closed image,
hence would identify the curve with \(\mathbf P^1\), contradicting genus two.

The characteristic-two separability proof is elementary and inline. If a
degree-two function-field extension over \(\bar k(t)\) were purely
inseparable, write it as \(\bar k(t)(\alpha)\), \(\alpha^2=P(t)/Q(t)\).
Perfectness supplies \(P_0,Q_0\) with \(P(z^2)=P_0(z)^2\) and
\(Q(z^2)=Q_0(z)^2\). The assignment \(t\mapsto z^2\),
\(\alpha\mapsto P_0(z)/Q_0(z)\) embeds the degree-two extension into
\(\bar k(z)\); equality of the degrees forces equality of fields. The curve
would be birational, hence isomorphic, to \(\mathbf P^1_{\bar k}\), contrary
to \(g\ge2\). Thus the geometric generic fiber has two distinct points.
This is a generic-fiber assertion only; ramified special fibers need not
have two distinct points.

## `cex-canonical-map-hyperelliptic-not-embedding`

The false squarefree equation \(y^2=h(x)\) and its differential argument have
been removed. The example now covers geometric hyperellipticity, including a
quotient that is not defined over \(k\). The canonical Veronese factorization
has generic degree two; if its composite were a closed immersion, the
degree-two map would itself be a closed immersion into the reduced target
\(\mathbf P^1_{\bar k}\). A closed immersion that is surjective on points
into this reduced target is an isomorphism: its defining ideal on each
standard affine chart lies in every prime, hence vanishes. This contradicts
degree two and proves non-embedding even before using
separability. The inline characteristic-two field argument above is also
included here so the stated two distinct points of the geometric generic
fiber have a complete proof. The text explicitly avoids claiming two distinct
points in every closed fiber.

## `ex-plane-quartic-canonical-hyperplane`

The example now distinguishes the three-dimensional vector space of canonical
sections from the projective dimension two of its complete linear system. It
states the hypersurface structure sequence, its exact tensor by the invertible
twist, and the low-degree long-exact-sequence segment used to prove the
restriction map is an isomorphism. Since the canonical
map is the plane inclusion, it remains a closed embedding after base change;
the curve is therefore geometrically nonhyperelliptic. The hyperplane-bundle
and canonical-model conclusions are preserved. The example states AC
explicitly because it applies the canonical-map theorem.

## Supplier and source status

The generic-image and finiteness route uses the actual interfaces of the
published scheme-theoretic-image, integral finite-type function-field,
affine-domain dimension, finite algebraic extension, closed-subset-of-a-curve,
closed-point residue-field, quasi-finite-fiber, proper-quasi-finite, and
Nakayama suppliers. `lem-closed-immersion-local-on-target` and
`lem-veronese-map-well-defined-closed-immersion` are published and are now
listed where used. The Nakayama proof is AC-qualified, matching the items'
stated choice assumption.

The characteristic-two route uses
`cor-birational-smooth-proper-curves-isomorphic`, which remains a draft
supplier; the revised item cites it explicitly rather than hiding the
dependence. The hyperelliptic section-count route also relies on the existing
draft Riemann--Roch/genus chain, including
`thm-full-riemann-roch-divisor`, `thm-serre-duality-curves-line-bundles`,
`def-genus-euler-characteristic-curve`, and the structure-sheaf global-section
supplier. The canonical theorem's point/tangent calculations likewise use
draft Riemann--Roch and Serre-duality items. These are outstanding supplier
acceptance dependencies, not unproved substitutions in the repaired local
arguments. No acceptance or gate retry was performed.

I read the full relevant sections of Vakil, *The Rising Sea* (Oct. 21, 2025),
§§19.5.5–19.5.7 and §19.7.A. Those sections support the Veronese and
uniqueness route in their stated algebraically closed, characteristic
assumptions; they do not support the arbitrary-field or characteristic-two
repairs. I also read the full Stacks Project *Algebraic Curves* text, including
§13 and Lemma 13.3 (tag `0CCY`). Its relative-Frobenius result was an earlier candidate
route, but the final proof does not rely on it; the degree-two field embedding
argument is proved inline. This report records item repairs, not a new
certification.

## Focused follow-up repairs

The canonical theorem now explains why the finite algebra at a closed image
point remains finite after base change to the local base: if \(B\) is finite
over \(A\), then \(B_y=B\otimes_A A_y\) is generated by the localized finite
generating set over \(A_y\). It is integral over the local ring \(A_y\).
Maximal ideals contract to its maximal ideal; conversely, primes over that
maximal ideal are maximal because their quotients are integral domains
integral over the residue field. Thus maximal ideals of \(B_y\) are exactly
points of the fiber over \(y\); point separation gives one, so \(B_y\) is
local and equals its localization at the unique point. This uses the published
finite-integral and maximal-contraction suppliers plus the inline
integral-domain-over-a-field argument, rather than assuming an arbitrary
stalk localization remains a finite algebra.

The canonical theorem, the counterexample, and the plane-quartic consumer now
state the AC premise inherited from their canonical and duality suppliers.
The counterexample and canonical factorization use reducedness of the actual
target \(\mathbf P^1\): its standard charts are polynomial domains, and a
closed immersion surjective on points has chartwise defining ideals in every
prime, hence zero. No claim that a surjective closed immersion into an
arbitrary nonreduced scheme is an isomorphism is used. The theorem's proof
steps now put all input tags on each heading's first line and present the
sufficient direction before the converse, so each referenced proof step has
already been established. All item math uses the supported `$...$` inline and
single-line `$$...$$` display delimiters.

## Final two-item follow-up

The hyperelliptic definition now keeps its two definitions unconditional and
places AC over all proved claims, including the map-finiteness,
function-to-map, section-count and uniqueness arguments. Its text names the
actual choice-requiring map, global-section, projective-space, Čech,
long-exact-sequence, Riemann--Roch, Serre-duality and birational-curve
suppliers, with the missing direct nonconstant-map finiteness dependency
added.

The plane-quartic example now distinguishes the three-dimensional vector
space of canonical sections from the projective-dimension-two complete
linear system. Its facts give the actual twisted hypersurface sequence and
the exact low-degree long-exact-sequence segment that identifies the
restriction map. Direct dependencies for the hypersurface sequence, exact
twisting, long exact sequence and closed-immersion cohomology comparison were
added. The focused precheck passed its one direct-proof item; the definition
item is not part of that direct-proof precheck set. Rendercheck passed both
items, including KaTeX, YAML and display-block validation. No receipts or gates
were run.
