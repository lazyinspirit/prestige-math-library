# General ambient tubular neighbourhood: local repair

## thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold

Disposition: A-R, owner-authorized local repair completed 2026-09-10.
No independent judge or terminal acceptance. Only this published item and
this report were edited; no supplier, live scaffold, engine control, prose,
canonical plan or ledger was changed.

Before SHA256: `a31e920668980e407585c87ac65b6ecb1a7b550a17af7d12360a25481f55278d`.
After SHA256: `1d9b8615054bf9d272d4e74a8f91121c399f7ad311c103ce9e250396921b3285`.

The old fact F1 was precisely the theorem being proved, followed by its
invocation; it did not provide a local proof. The replacement preserves
the closed-embedded-submanifold hypothesis and the entire normal-bundle
neighbourhood/diffeomorphism conclusion, explicitly assumes countable
choice, and proves the result using only adequate earlier published
suppliers and the complete local argument below. No new pair or unpublished
Phase2 supplier is required for this item.

## Exact proof and supplier interfaces

The repaired finite-dimensional proper embedding embeds the AMBIENT M as
P in R^k. The repaired Euclidean tube of P supplies its normal-addition
diffeomorphism; projection after its inverse gives a smooth retraction
R:W->P fixing P. This is not an invocation of the general ambient theorem.

The metric g(v,w)=<dj(v),dj(w)> is constructed explicitly: immersion makes
it positive definite and its coordinate coefficients are sums of products
of derivatives of j, hence smooth. The earlier order451 quotient/orthogonal
normal proposition applies to this supplied metric and gives a smooth
complement C of TS in TM|S and an isomorphism Q:C->nu(S). No metric-existence
theorem, geodesics, exponential map, completeness, or later Riemannian
machinery is used.

The local construction retains original M and its original quotient bundle,
so there is no unproved transport of normal bundles under a new ambient
identification. Put b(p)=j(i(p)) and lambda_p(v)=dj(v). The bundle C has the
subspace topology under (p,v)->(b(p),lambda_p(v)): in a local frame the inverse
coefficient map is the inverse Gram matrix applied to inner products. The
cofactor formula proves its continuity. This legitimizes the neighbourhood
basis V_a(p) defined by ||b(q)-b(p)||<a and ||lambda_q(v)||<a.

On the open domain D where b(p)+lambda_p(v) lies in W, set
F(p,v)=j^-1 R(b(p)+lambda_p(v)). Its zero-section differential is
(u,w)->di(u)+w, an isomorphism. The proof differentiates in local bundle
coordinates and uses that R fixes P; derivatives of frame vectors multiply
zero fibre coordinates. Thus the earlier smooth inverse theorem supplies
local inverses at all zero vectors.

The crucial global step is written out, not left to an assertion that a
local diffeomorphism can be shrunk. Define A_p subset (0,1] by requiring
V_a(p) subset D and F a diffeomorphism on V_a(p). It is nonempty and bounded,
so r(p)=sup A_p is defined. Every smaller radius is eligible; every pair of
points in V_r(p)(p) lies in one common smaller eligible domain. Hence F is
injective and locally invertible on the endpoint domain; its local inverses
glue. Triangle inclusion of the V_a domains then gives
|r(p)-r(q)|<=||b(p)-b(q)||, proving continuity without radius selections.

Shrink to the OPEN zero-section neighbourhood where both
||lambda_p(v)||<r(p)/4 and ||j(F(p,v))-b(p)||<r(p)/4 hold. If two F-images
coincide and r(q)<=r(p), their common Euclidean image z gives
||b(p)-b(q)||<=||b(p)-z||+||z-b(q)||<(r(p)+r(q))/4<r(p).
The two vector lengths are also <r(p). Both pairs therefore lie in the
single injective V_r(p)(p). This proves global injectivity. The displacement
condition is essential: equality after R does NOT imply equality before R,
so the simple normal-addition collision identity is not silently reused.
Local inverses make the image open and give the global smooth inverse.
Transporting this open set by Q gives precisely the requested quotient
normal-bundle tube, fixed on the zero section. Empty S and rank-zero normal
bundles are covered. No compactness of S or smooth minorant is used.

Countable choice covers the embedding, Euclidean tube and bundle existence
suppliers. The new shrinking step uses only uniquely defined suprema and
pointwise local arguments, not an additional uncountable family of choices.

## Exact dependencies and checks

- def-countable-choice
- def-tubular-neighbourhood-of-an-embedded-submanifold
- thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space
- prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold
- thm-euclidean-tubular-neighbourhood-theorem
- def-normal-addition-map-for-a-euclidean-submanifold
- def-smooth-bundle-metric
- prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle
- def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
- prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding
- thm-smooth-inverse-function-theorem-on-manifolds
- thm-chain-rule-for-differentials-of-smooth-maps
- prop-identity-maps-and-composites-of-smooth-maps-are-smooth
- prop-smooth-maps-are-continuous
- prop-smoothness-is-local-on-the-source
- def-complete-ordered-field

All sixteen direct dependency files are published and earlier than the
target at canonical page455 index19. Same-page indices are: embedding3,
tube definition12, normal addition13, Euclidean tube16. Bundle interfaces
are page451, image/inclusion/inverse theorem page449, chain rule page447,
smooth-map facts page443, CC page18. The complete-ordered-field definition
is actually composed on foundations-of-the-real-numbers, canonical order9;
the old canonical page has only a partial item inventory, so checking only
plan item rows would miss that existing earlier home.

Used repaired embedding SHA256:
`7d7473480212c0ba988d9305211565ec9c87530ec8d68cd87795f838135cafa8`.
Used repaired Euclidean tube SHA256:
`5032416cc70b0e32d7d9cdfa3c9f3dcbb33a515f77cd7270c8027f3fb0c36d89`.
Read the actual tube, definition, quotient/orthogonal identification,
orthogonal-complement, bundle-metric, vector-bundle, inclusion and chain-rule
texts completely for this task. The embedding was authored and fully checked
in the preceding delegated task; image, smooth inverse, continuity,
composition, local smoothness and completeness suppliers were fully read
during the immediate preceding smoothing work. No assertion is made about
an independently judged transitive closure.

Targeted precheck PASS, real renderer PASS (KaTeX and frontmatter YAML),
and exact published/earlier direct-dependency check PASS. Final manual
reread checked bundle topology, original quotient-bundle identification,
zero-section differential, cap-before-supremum, endpoint inverse, Lipschitz
radius, displacement-controlled collision and final inverse gluing. Removed
the stale prior judge record and replaced it with the honest delegated local
repair record. No remaining local mathematical obstruction identified.
Parent owns exact ledger/dependency/page-requirement reconciliation.

## Authoritative source receipts and their limits

Read Cohen, Bundles, Manifolds, and Homotopy, Chapter8 section1 in full,
Theorems8.1-8.3 and proofs, printed pp237-239 (PDF pages248-250 zero-based),
at https://math.stanford.edu/~ralph/bookR4.pdf . Recovered the complete PDF
as /tmp/uc34-cohen-bookR4.pdf, SHA256
`3bd16984e16b22e881a8a8331b216d4495f253b49ba29d2fc7caf0831eb1f2fe`.
Its ambient reduction uses Euclidean embedding and retraction. Its final
verification is compressed; it is NOT used as proof that the entire
unshrunk domain is injective. The explicit displacement-controlled shrinking
above supplies that missing local-to-global verification.

Lee, Introduction to Smooth Manifolds, second edition, Theorem6.24 and
Proposition6.25, printed pp139-141, were read completely in the recovered
full text during the preceding task. Their Euclidean tube and retraction
proofs motivate the supplied interfaces, not a claim that Lee there proves
the present general ambient statement. Full text SHA256:
`8191cfaf351090fce4085f0d89a21b594c903ff1f027c19818b24b20f58034c7`.
The exact Lee source URL is retained in the item. Search also located TIFR
notes stating a compact version, but their full relevant proof was not
recovered/read here; they are neither a supplier nor a full-read receipt.
