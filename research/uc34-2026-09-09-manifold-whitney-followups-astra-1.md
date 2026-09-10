# Manifold-valued Whitney follow-ups — 2026-09-09

Bounded owner-authorized published audit. No judges, shared metadata, scaffold,
or engine writes. A source proof is not a published proof repair. Statements
are retained, including arbitrary noncompact target manifolds.

## Sources and exact checked interfaces

Read current absolute/relative Euclidean Whitney, smooth Urysohn, and the
root-repaired fine-radius item completely. Euclidean/Urysohn now explicitly
assume AC_omega and supply complete local constructions; the given-radius
lemma is choice-free and handles an empty complement. Read the actual proper
embedding, finite-dimensional embedding, general ambient tubular, Euclidean
tubular, variable-radius injectivity, normal-addition local-diffeomorphism,
chart-band, compact coordinate-bump embedding, generic projection, proper
exhaustion, lower-dimensional-null-image and dense-complement proofs.

Authoritative text: Lee, Introduction to Smooth Manifolds, second edition,
full Theorem6.15 pp134–135, Theorem6.24 pp139–140, Proposition6.25 pp140–141,
Theorem6.26 p141, and the previously fully read Theorem6.21 pp136–137.
Read in the complete recovered /tmp/batch9-sources/lee-all.txt, SHA256
8191cfaf351090fce4085f0d89a21b594c903ff1f027c19818b24b20f58034c7.
Source URL:
https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
No exercise or unexpanded source reference is treated as a completed proof.

## thm-whitney-approximation-for-manifold-valued-maps

Disposition: A-P, confirmed missing inherited choice and actual supplier
proof gaps; no speculative repair or weakening. Home:
whitney-embedding-tubular-neighbourhoods-and-approximation, A455.
Before and after SHA256 (unchanged):
97db6dc6f5a4a2035c05691c3ffd8be1eb4ee170874315a32a6a2fd5373614bf.

Actual load-bearing paths:

1. Target L2/step2.1 -> thm-whitney-approximation-for-euclidean-valued-maps:
   supplier now explicitly needs AC_omega, while target has no such
   hypothesis or dependency. Merely propagating choice is insufficient for
   the following independent defects.
2. Target L3/step1.1 ->
   thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold:
   supplier F1 is precisely its own claimed theorem, and step1.1 invokes
   F1. Its only declared dependency is the tubular definition. This is an
   unproved load-bearing assertion, not a proof of tubular existence.
3. Target L1/step1.1 -> thm-weak-whitney-proper-embedding-theorem ->
   thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space:
   the last item's F1 and step1.2 assert the entire noncompact embedding
   (bounded coordinate map, proper coordinate) by source reference. Its only
   dependency proves compact-manifold embedding. The proper-embedding
   theorem's finite projections do not fill that missing noncompact start.

Every named item is currently published; these are published proof repairs,
not a need for a new Phase2 supplier or late665 page. All three embedding/
tubular suppliers are on existing A455, before the target. Neither adding
AC nor citing Lee cures the missing proof text. Old publication stamps do
not certify these currently observed interfaces.

### Local route investigated; exact remaining work

The general ambient tubular theorem can be avoided entirely: the target
only needs a Euclidean tube for j(N). The following complete local geometric
argument is available from Lee6.24 and the published local normal-addition
lemma; it should replace the general-ambient citation when repairing.

For a Euclidean embedded S, put
V_a(p)={(q,v):||q-p||<a, ||v||<a} in its normal bundle, and let r(p) be the
supremum of the a in (0,1] on which normal addition E is a diffeomorphism
onto its image. Local invertibility at (p,0) makes this a nonempty bounded
set. The property is downward closed. E is a diffeomorphism on V_r(p)(p):
any finite collection of its points lies in V_a(p) for some a<r(p), where
injectivity and local smooth inverses are known. For p,q, every
0<a<r(p)-||p-q|| has V_a(q) contained in V_r(p)(p), so r(q)>=a.
Taking suprema gives r(q)>=r(p)-||p-q||; the nonpositive case is trivial.
Reverse p,q to prove r is 1-Lipschitz. Thus r>0 is continuous without any
simultaneous choices of local radii or a partition of unity.

On Omega={(p,v):||v||<r(p)/2}, E is a local diffeomorphism: each such point
lies in V_r(p)(p). If E(p,v)=E(q,w), arrange r(q)<=r(p); then
||p-q||<=||v||+||w||<(r(p)+r(q))/2<=r(p). Both pairs belong to
V_r(p)(p), so they coincide. Hence E is an injective local diffeomorphism
on the open Omega, has open image, and its local inverses give a smooth
inverse. Compose this inverse with the smooth normal-bundle projection
to obtain a retraction. Smoothness of r is not needed for this open tube;
if the stronger smooth-radius theorem is itself being repaired, repaired
Euclidean Whitney applied to r/4 with error r/8 gives a smooth positive
minorant below r/2, under explicit CC. This also fills the existing
variable-radius lemma's unproved smooth-minorant assertion and its omitted
supremum-endpoint justification without importing a partition theorem.

The remaining substantial interface is a proved noncompact proper embedding.
The existing chart-band lemma gives finite-dimensional maps H_m that separate
points and tangent vectors on compact bands K_m, with disjoint same-colour
supports and bounds2^-m, but their dimensions Q_m vary. They cannot simply
be concatenated into a fixed finite-dimensional target. The current generic
projection theorem assumes a global embedding; H_m is zero off its support
and is not such an embedding. The precise needed generalization is:

For a smooth map h:X^n->R^d which is injective on K and whose differential
is injective at points of K, finite generic projections into R^(2n+1)
preserve those two properties on K. To prove it, define secant directions
only on the open subset of X×X where h(p)!=h(q), and tangent directions
only on the open subset of TX where dh_p(v)!=0. Both domains have dimension
2n, so for d>2n+1 their images on S^(d-1) are null by
prop-the-image-of-a-lower-dimensional-c1-manifold-is-null. Avoid their
union using prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold.
The elementary equal-projection equations then preserve the two properties
on K even though h is not globally an embedding. Repeat finitely; for
countably many bands CC selects the finite complete projection certificates.
The exact null-image/atlas choice closure of these two suppliers still needs
reconciliation before this is an accepted local replacement.

After that generalization, contractively project each H_m to fixed dimension
2n+1 (pad with zeros when smaller), sum in four colour blocks, and append
rho. Equality of rho-values places both points in a common K_m; the matching
colour block has only H_m active there, proving injectivity. Its differential
has an injective H_m component, proving immersion. Local finiteness follows
from the proper-function bands; boundedness follows from the2^-m bounds.
The rho-coordinate makes the combined map proper. Then use the existing
proper-injective-immersion embedding criterion. The proper exhaustion and
countable band choices also need explicit CC and a local-finiteness proof on
neighbourhoods, not merely pointwise finite nonzero terms. The current
proper-exhaustion proof has only the latter calculation in step2.1; its
repair is to use an interior K_t neighbourhood which excludes all sufficiently
late bands. These exact additions belong inside the existing A445/A455
published items or locally inside this consumer, not a new pair.

This bounded audit does not claim the whole noncompact embedding/measure
prerequisite repair completed. Therefore the target stays unchanged A-P.
Once that supplier closure is repaired, add explicit def-countable-choice,
use the Euclidean tube construction above, declare the smooth-composition
and embedding-identification interfaces, take the capped finite radius from
the repaired radius lemma, approximate jF, and use the displayed straight
segment retraction homotopy. Prove the whole ball lies in U from the explicit
radius construction, rather than inferring segment containment solely from
the lemma's weaker image-only statement. No dimension-optimal embedding is
needed by this consumer.

Checks: full target and relevant exact supplier text read; source proof read;
no item write, no new verification stamp, and no repair precheck/render claim.
Only this report is changed for this disposition. Parent should move the
single target index row to A-P and reconcile the exact actual supplier debts.

## thm-relative-whitney-approximation-for-manifold-valued-maps

Disposition: A-P, bounded audit complete; inherited choice and actual
embedding/tubular construction remain unresolved. Home:
whitney-embedding-tubular-neighbourhoods-and-approximation, A455, immediately
after the absolute manifold-valued theorem. Before and after SHA256
(unchanged): 6b6786902b38c4b334440c758c8a79cc2f700d6b64c1a9e3e1eae9f75ed4047c.

Read the full current item independently after the absolute disposition.
Its step2.1 uses the repaired relative Euclidean theorem, so the target
must explicitly inherit AC_omega. Its step1.1 explicitly imports the
embedding, tube and retraction from the absolute theorem's proof, not just
the abstract conclusion that a smooth representative exists. Thus its exact
load-bearing path reaches both the noncompact embedding assertion and the
general ambient tubular assertion identified above. Setting A empty already
includes arbitrary absolute approximation; restricting A or making N compact
would weaken the commissioned statement and is not a repair.

Once the embedding/tube interfaces are repaired, the remaining relative
construction is fully specified: use a positive finite epsilon whose ball
about jF(p) lies in U. Under CC the repaired relative Euclidean theorem
supplies H with ||H-jF||<epsilon and H=jF on an open neighbourhood W of A.
Let R=j^-1 composed with the smooth tubular retraction, and define
Ftilde=R composed with H. For (p,t) in M×[0,1], set
K(p,t)=R((1-t)jF(p)+tH(p)). The displacement from jF(p) is
t||H(p)-jF(p)||<epsilon(p) for t>0 and is zero at t=0, so the whole
segment lies in U. The formula is jointly continuous, has endpoints F and
Ftilde, and on W is constantly F(p) for every t. Therefore it preserves the
stated open-neighbourhood equality and even gives a homotopy relative to W.
No merely image-contained approximation is enough: the pointwise ball bound
must be retained when applying the relative Euclidean result.

Exact eventual dependencies: def-countable-choice;
thm-relative-whitney-approximation-for-euclidean-valued-maps (published A-R,
adequate under CC); repaired proper embedding/finite-dimensional embedding
interface on A455; repaired Euclidean tubular interface on A455 (or the
complete local tube proof above); the repaired fine-radius lemma (published
A-R); def-homotopy-relative-and-path-homotopy; smooth-composition and
embedded-image identification. Read the homotopy definition, smooth-embedding
definition and smooth-composition proof in full. No unpublished supplier,
later665 theorem, arbitrary-ambient tubular theorem, or new pair is necessary
for the recommended route. The exact remaining work is the same published
embedding proof closure, not a defect in the now-repaired relative Euclidean
neighbourhood statement.

No item edit or stamp was made. No precheck/render claimed for a nonexistent
repair. Parent should classify this exact item A-P separately from the
absolute theorem and synchronize its actual supplier mappings. This is not
a blanket verdict on other items sharing their pages.

## Exact live DG15 consumer impact (read-only)

Read the entire current batch9 contract for
cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds.
Its opening instruction is “embed N properly by j into R^k,” and it directly
declares thm-weak-whitney-proper-embedding-theorem. Thus it actually consumes
the unproved noncompact finite-dimensional start via that theorem. Its
local smoothing, cutoff and endpoint-collar expansions do not construct an
embedding and do not bypass this gap. This is an actual clause path, not
page co-residence or dependence on manifold-valued Whitney.

The corollary DOES avoid the tautological general-ambient tubular theorem:
its declared supplier is thm-euclidean-tubular-neighbourhood-theorem and its
strategy says “The Euclidean tubular diffeomorphism E gives an open U ...”.
It expands the retraction r=pi composed with E^-1, but does not prove existence
or injectivity of E. That supplier reaches
lem-variable-radius-injectivity-for-normal-addition. The latter has three
specific missing details: its r=min(1,sup{epsilon>0:...}) takes the supremum
of a potentially unbounded set (for a Euclidean linear subspace, normal
addition is a global diffeomorphism and all positive epsilon are eligible);
its endpoint V_r injectivity requires the increasing-union argument; and its
step3.1 asserts a positive smooth minorant merely from partition/Urysohn
existence, without constructing it. The live corollary's final CC explanation
does repair the countable selections in the partition construction, but
does not address that unbounded supremum or supply the tube-injectivity proof.
The complete capped-inside-the-set continuous-radius tube proof above avoids
all three issues and could be inserted locally or used to repair the existing
Euclidean tube supplier. No arbitrary-ambient tubular theorem is needed.

What the live route already avoids: neither manifold-valued Whitney theorem,
relative Euclidean Whitney, nor the radius lemma is a dependency. Its explicit
bounded distance radius, grouped cutoff and smaller closed endpoint collars
stand independently of their old defects. Absolute Euclidean Whitney is
an actual declared supplier and is now repaired under CC, already assumed
by the corollary. These observations do not waive the remaining embedding
and Euclidean-tube existence clauses. No live file was edited.

## thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function

Root separately authorized this one published supplier repair after the
two manifold-Whitney dispositions and DG15 trace. The requested wording
“has-a-smooth-proper-exhaustion-function” resolves to this existing “admits”
ID; no new ID or pair was created.

Disposition: A-R, bounded explicit-choice and neighbourhood-local-finiteness
repair. Home smooth-partitions-of-unity-and-exhaustions, A445.
Before SHA256: ce41004edf7a6e61694f41f9dddeb63d96b39c845d61427bb2440d8d3ea68774.
After SHA256: fb6e53719692958117d407f9498d7f235e26e0bfb64108ab1bfd2e8f66724a52.

The former step2.1 established only finitely many nonzero values at each
point, not the neighbourhood-local-finiteness needed for smooth sums. Its
countable cutoff selections also inherited unlicensed choices. Read the
compact-exhaustion supplier completely: it reaches the old countable-cover
choice gap. Thus the repair constructs its compact exhaustion locally from
all smooth coordinate tuples and countable basis witnesses under AC_omega,
with least-integer nesting indices. No unrepaired cover/exhaustion supplier
is imported. CC chooses compact-set cutoffs chi_n=1 near K_n supported in
int K_(n+1), using the earlier repaired compact-bump lemma, not Urysohn.

Set g_n=1-chi_n and h=sum g_n. On the single neighbourhood int K_t, every
g_n with n>=t vanishes identically, so their supports miss that neighbourhood.
This proves genuine locally finite support and smoothness. Outside K_(N+1)
the first N summands equal1, so h>=N; hence every sublevel set is a closed
subset of a compact K_(N+1). The proof also checks compact-preimage properness
using boundedness/closedness of compact subsets of [0,infinity), and handles
the empty manifold. Nonnegativity and the original full conclusion remain.

Exact published deps: def-countable-choice; def-smooth-manifold;
lem-coordinate-balls-form-a-basis-of-a-topological-manifold;
thm-compact-subset-of-a-hausdorff-space-is-closed;
thm-closed-subspace-of-a-compact-space-is-compact;
lem-compactness-of-a-subspace-is-ambient;
lem-manifold-bump-for-a-compact-set-inside-an-open-set;
thm-a-locally-finite-sum-of-smooth-functions-is-smooth;
prop-smooth-maps-are-continuous; thm-algebra-of-derivatives;
def-ck-and-multi-index-notation-in-several-variables.
All eleven supplier files are published and their canonical positions are
earlier pages or earlier same-page items. Their actual relevant proofs were
read during this smoothing audit and its immediately preceding task.

Additional source read: Lee Proposition2.28, complete proof in the same full
recovered text. Its locally finite weighted-partition exhaustion motivates
the construction; the displayed complement-cutoff version proves the exact
locality and properness directly. No source assertion is substituted for
the proof. Targeted precheck and real renderer/KaTeX PASS. Replaced obsolete
audit evidence with an honest owner-delegated local repair record, no judge.
Changed only this newly authorized item and this report. Parent should
synchronize its exact dependencies and explicit CC assumption. The two
manifold-Whitney items remain unchanged A-P: this repairs the exhaustion
interface, not the still-missing finite-dimensional noncompact embedding.

## Read-only null-image/atlas follow-up for the projection route

After the exhaustion receipt, read in full:
prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets;
prop-a-countable-chart-cover-detects-manifold-null-sets;
prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains;
prop-countable-unions-and-subsets-of-manifold-null-sets-are-null;
def-null-subset-of-a-smooth-manifold;
prop-the-null-set-definition-is-independent-of-the-smooth-atlas;
lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets;
thm-lipschitz-images-of-null-sets-in-rn-are-null.
All are published; none was edited or newly certified.

Exact assumption accounting: countable-union closure already explicitly
assumes CC. Atlas existence reaches the unrepaired countable-coordinate-cover
selection; atlas-independence selects countably many overlap tuples and
unites countably many null images without declaring CC. Under CC these
selections can use the all-admissible-tuples construction already implemented
above. This does not establish their current unqualified statements.

Additional typed supplier mismatch: the equidimensional C1-image proof
step2.1 applies the Lipschitz-null theorem to local compact coordinate pieces,
whereas that theorem is stated only for maps on all R^m. A map merely
Lipschitz on a subset is not within that stated contract. A concrete local
repair is to cover the coordinate domain by rational closed cubes Q contained
in it; derivative bounds and the mean-value inequality give Lipschitzness
on each Q. Coordinatewise clamping c_Q:R^m->Q is 1-Lipschitz, since each
coordinate difference decreases in absolute value. The globally defined
map f composed with c_Q is therefore Lipschitz and agrees with f on Q,
so the published global theorem applies to each null subset of Q. Then
unite the countably many images under explicit CC. Also choose coordinate
pieces with closures inside the selected target-chart inverse image; mere
relative compactness of a chart domain does not guarantee that containment.

An alternate local lower-dimensional image proof avoids this equidimensional
detour entirely: on a closed a-cube where f is L-Lipschitz into R^b with
a<b, subdividing into n^a cubes and enclosing each image in a b-cube gives
total volume at most C*n^(a-b), tending to zero. Centres can be images of
the prescribed grid corners, so this finite construction spends no choice.
Cover open coordinate domains by enumerated rational closed cubes, then
use CC for the countable chart witnesses and null-cover budgets. For a=0,
each chart image is a singleton and the same positive-dimensional null
conclusion is immediate. This is a proposed local proof contract for the
compact-band projection route, not a published repair or a verification of
the entire measure/atlas ancestor closure. No generic projection theorem
has been silently generalized or imported into an item by this research.

## thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space

Disposition: A-R, owner-authorized local repair on 2026-09-09; no independent
judge or acceptance stamp. This receipt supersedes the unresolved noncompact
finite-dimensional embedding interface above, for this item only. The two
manifold-valued Whitney consumers are not thereby recertified.

Before SHA256: `ddb7f3cd19a93aefa7fac8f147bcbd0e5e5779fdee21b7d42001920b6626a5ff`.
After SHA256: `7d7473480212c0ba988d9305211565ec9c87530ec8d68cd87795f838135cafa8`.
Changed only this item and this report. Original existence and bounded-G plus
proper-rho conclusions are retained, with explicit countable choice. In fact
the proof supplies J=(G,rho) into R^{4(2n+1)+1}, ||G||<=2, for every smooth
n-manifold. Empty manifolds and n=0 are included.

The complete local proof, not an imported projection assertion, now contains:

1. A countable atlas selected from all chart witnesses indexed by an existing
   countable topological basis. No choice of a chart at every point occurs.
2. For C1 maps from open subsets of R^a into R^b, a<b, a rational closed-cube
   covering and the explicit bound C*s^(a-b) from subdividing each cube.
   Derivative bounds are taken on a slightly larger closed cube, so the
   published mean-value inequality is applied on its OPEN convex interior,
   not on a domain outside its statement. Image-cover centres are images of
   fixed grid corners. Countable Euclidean null unions use explicit CC. A
   finite coordinate-grid volume proof shows that an open set is not null;
   there is no appeal to a measure invariant or an unexpanded exercise.
3. For a smooth h:M->R^d injective and immersive only on K, d>2n+1, secant
   quotients and derivative quotients give smooth bad-parameter maps from
   open subsets of R^{2n} into R^{d-1}. Their countable union is null. Outside
   it, L_v(z',z_d)=z'-v*z_d preserves both properties on K. Normalizing by
   1+||v|| gives a contraction. Finite iteration reaches 2n+1 coordinates.
   Thus this argument legitimately applies to compactly supported band maps,
   unlike the existing global-embedding projection contract.
4. The repaired exhaustion defines compact K_m=rho^-1[m-1,m+2] inside
   O_m=rho^-1(m-5/4,m+9/4). The O_m are locally finite and same-colour sets
   for m modulo four are disjoint. Finite coordinate-bump lists covering
   K_m give globally smooth compactly supported maps B_m, injective and
   immersive on K_m. Least integer norm bounds give ||H_m||<=2^-m.
5. CC selects the countably many finite covering lists and then the countably
   many whole finite projection certificates. It does not perform an
   unlicensed dependent recursive choice. The resulting C_m are supported
   inside O_m and retain the two separation properties. Four colour sums
   produce bounded smooth G. Equality of rho puts two points in a common
   K_m, where that colour equals C_m on a whole open neighbourhood. This
   proves both injectivity and the differential assertion for J=(G,rho).
6. Compact sublevels prove properness. A closed-unit-ball argument proves J
   is closed and hence a homeomorphism onto its image, without the later
   same-page proper-injective-immersion criterion. Compact continuous images
   are justified directly by open-cover pullback, not a metric-only theorem
   applied to an arbitrary manifold.

Exact direct dependencies (all 26 published; canonical orders strictly below
the target page 455, item index3, checked on the current plan):

- def-countable-choice
- def-smooth-manifold
- lem-coordinate-balls-form-a-basis-of-a-topological-manifold
- def-c-r-and-smooth-maps-between-smooth-manifolds
- thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function
- thm-compact-subset-of-a-hausdorff-space-is-closed
- thm-closed-subspace-of-a-compact-space-is-compact
- lem-compactness-of-a-subspace-is-ambient
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-a-locally-finite-sum-of-smooth-functions-is-smooth
- prop-smoothness-is-local-on-the-source
- prop-smooth-maps-are-continuous
- thm-rationals-countable
- lem-q-and-irrationals-dense-r
- thm-n-cross-n-countable
- def-multidimensional-rectangle-and-volume
- def-null-and-content-zero-in-rn
- lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
- thm-heine-borel-rn
- thm-extreme-value-metric
- lem-compact-null-iff-content-zero-in-rn
- thm-continuous-partial-derivatives-imply-total-differentiability
- thm-mean-value-inequality-for-total-derivatives
- thm-algebra-of-derivatives
- def-ck-and-multi-index-notation-in-several-variables
- def-smooth-embedding

The exhaustion supplier is the repaired CC-qualified item with SHA256
`fb6e53719692958117d407f9498d7f235e26e0bfb64108ab1bfd2e8f66724a52`.
No manifold-null, atlas-invariance, equidimensional-null, generic-projection,
partition-of-unity or late665 supplier is used. The exact equidimensional
domain mismatch recorded above remains an unedited separate issue; this
repair avoids it and does not pronounce that supplier repaired.

Authoritative full-text comparison: read Lee, Introduction to Smooth
Manifolds, second edition, Lemmas6.13-6.14 and Theorem6.15 including the
noncompact proof, pp132-135, in the recovered full text at
`/tmp/batch9-sources/lee-all.txt`, SHA256
`8191cfaf351090fce4085f0d89a21b594c903ff1f027c19818b24b20f58034c7`.
Source URL is retained in the item. Lee's low-dimensional image discussion
does not replace the local grid proof: the relevant exercise is fully
expanded here. Earlier actual local suppliers were read for their typed
clauses, particularly the open-domain mean-value inequality, Euclidean null
union and compact-null/content-zero results, compact bump, local smooth
sums, and proper exhaustion. The existing Gualtieri reference is preserved,
but no fresh full-read receipt is claimed for it in this repair.

Checks: targeted precheck PASS after adopting its canonical dependency-phase
ordering; targeted renderer PASS including real KaTeX and renderer YAML;
all direct dependency files published and canonical-backward. Manual reread
checked the open convex domain, zero-dimensional case, finite support and
finite selection, variable-length projection certificates, colour intervals,
local smoothness, properness and inverse continuity. No remaining local
mathematical obstruction was identified for this item. Parent must sync the
exact dependency inventory/page requirements and explicit CC interface.
Downstream consumers still require their own assumption/interface repair;
in particular this receipt alone does not license unqualified manifold
Whitney statements or certify the other tubular/projection ancestors.
