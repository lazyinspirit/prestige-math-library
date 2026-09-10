# Owner topology support: finite inward pushes for boundary targets

Separate complete local construction reducing smooth/continuous HOMOLOGY
comparison for boundary targets to its boundaryless instance. This does not
claim to prove the more demanding prescribed-face smoothing theorem into a
boundary target. Group e owns all relevant canonical files; no item, contract,
manifest, coverage, plan or ledger is edited here.

The exact owned comparison item is `thm-smooth-singular-chains-compute-singular-homology`.
The definition manifest makes a smooth simplex a map extending smoothly INTO
the target on an open neighbourhood in its affine span. The construction below
respects that strong definition. No open-neighbourhood retraction onto a
half-space is used.

## 1. A compact set can be moved into the interior by finitely many chart maps

Let M be a smooth manifold with boundary and K⊂M compact. The boundary is
closed, so K∩boundary(M) is compact. For each boundary point, choose a boundary
chart carrying it to (z0,0) in the half-space. Inside the chart choose a small
closed half-ball of radius 3r. Write x=(z,s), with s>=0, and q=(z0,0). Using
the standard smooth step function sigma define on the chart

chi(x)=1−sigma((||x−q||²−r²)/(3r²)).

It equals one for ||x−q||<=r, is nonnegative, is zero for ||x−q||>=2r, and
is smooth in the local-extension sense on the half-space. Extend chi by zero
outside the chart. Its support is contained in the closed half-ball of radius
2r, a compact subset of the chart, so this extension is smooth. The open
half-balls of radius r obtained from ALL eligible chart/radius data cover
K∩boundary(M); compactness extracts finitely many such data. No selection
indexed by all boundary points is required.

For each one choose 0<epsilon<r/2 and define, for every real t, a global map
P_t:M->M as follows in this chart:

P_t(z,s)=(z, s+epsilon sigma(t) chi(z,s)).

Outside the chart it is the identity. If chi is nonzero then the original
coordinate lies within radius 2r, and the displacement has size at most
epsilon<r/2. Therefore the output lies inside radius 5r/2<3r and remains in
the chart. Its boundary coordinate remains nonnegative. Near every point
outside the compact support it is exactly the identity. These observations
prove that P is well-defined and jointly smooth on M×R, including across the
edge of the chart. Each P_t preserves the interior; for t>0 it sends a
boundary point into the interior exactly when chi at that point is positive.
For t<=0, sigma(t)=0 and P_t is exactly the identity.

Let P^1,...,P^N be the finitely many maps. Define

J_t=P^N_t∘...∘P^1_t,  j=J_1.

It is a jointly smooth map M×R->M, equals the identity for t<=0, and preserves
the interior at every t. Moreover j(K) is contained in the interior. For an
initial boundary point p in K, if some earlier map has already moved it into
the interior, every later map keeps it there. If no earlier map has moved it,
it is still exactly p, because a boundary point on which a chart map does not
move inward has chi=0 and is unchanged. Eventually one of the chosen plateau
functions is positive at p, and that map moves it inward. Interior points of
K remain interior throughout. This proves the claim without needing a
uniform collar or an arbitrary global inward field.

The case K∩boundary(M)=empty uses N=0 and J=id. The empty manifold and empty
compact set have the same identity convention. All choices in this local
construction are finite; no additional choice principle beyond the original
boundaryless comparison is needed.

## 2. The prism homotopy stays inside the strict smooth chain complex

If tau:Delta^k->M is a smooth simplex in the strong local sense, choose its
smooth extension tau_bar:O->M on an open affine neighbourhood O. The map

(x,t) |-> J_t(tau_bar(x))

is smooth on O×R and takes values in M for ALL real t. This last fact is why
the nonnegative smooth step sigma(t), with sigma=0 for t<=0, was used instead
of raw signed time. Each affine simplex in the usual prism triangulation of
Delta^k×I has an affine extension to the whole affine span. The inverse image
of O×R under this extension is an open neighbourhood of that prism simplex.
Its composition with the displayed map is therefore a smooth simplex into M
in the same strict sense, even when the prism touches the boundary at t=0.

Thus the standard finite prism operator P_J sends smooth chains to smooth
chains and satisfies

boundary P_J + P_J boundary = j_*−id.

For continuous chains the same formula holds by the ordinary prism identity.
No choice of a smoothing on the set of all singular simplices is needed.

## 3. Surjectivity and injectivity for boundary targets

Assume the smooth-chain inclusion for every boundaryless manifold is already
proved to induce an isomorphism on homology. This is the existing local
finite-smoothing branch, not a new unproved global theorem.

For surjectivity on a manifold M with boundary, let z be a continuous cycle.
Its finite simplex images form a compact K. Construct j and J above. Then
j_*z is a continuous cycle in the boundaryless manifold interior(M). By the
boundaryless comparison it is homologous THERE to a smooth cycle z'. The
ordinary prism identity makes z and j_*z homologous in M, so z is homologous
in M to the smooth cycle z'. This proves surjectivity.

For injectivity, let z be a smooth cycle and suppose z=boundary b for a
continuous chain b in M. Take K to contain the finitely many simplex images
of b and z, and form j,J. Then j_*b is a continuous chain in interior(M) with
boundary j_*z. The cycle j_*z is smooth as an interior-valued simplex: for
any one smooth extension into M, the inverse image of interior(M) is open
and contains its compact simplex, so restrict the extension to that open
neighbourhood. Boundaryless injectivity gives a smooth chain c in interior(M)
with boundary c=j_*z. The smooth prism identity gives

boundary(c−P_J z)=j_*z−(j_*z−z)=z.

Hence z is already a smooth boundary in M. The construction is valid over
Z and therefore over the real coefficient field used by the owned page.
It proves the isomorphism induced by the actual inclusion, so naturality for
smooth maps follows from the natural inclusion chain-map square, rather than
from any claim that the selected finite pushes are natural.

This reduces the complete useful homology comparison for boundary targets
without modifying prescribed faces during a relative smoothing lemma. If that
lemma itself is required with a boundary target and arbitrary prescribed smooth
face homotopies, it still needs its own proof; this argument must not be passed
off as that stronger result. The cohomology comparison has its independently
commissioned Mayer–Vietoris proof and is not silently replaced by field duality.

## Exact collar audit input for the serial ledger owner

Full file read: `items/thm-collar-neighborhood-theorem.md` and its collar
definition. The theorem's step 2.1 asserts that a locally finite refinement
admits a smooth positive width giving global injectivity, calling it “the usual
locally finite shrinking of local collar domains.” Its three proof steps do
not themselves print the injectivity/shrinking construction.

Audit status: INCOMPLETE SUPPLIER AUDIT / potential gap, NOT a newly confirmed
fatal mathematical defect. The full five declared supplier proofs have not all
been read in this dispatch, and they may contain the required construction.
This item was considered as a possible dependency but is NOT used by the local
finite-push proof above. The serial auditor should deduplicate against the
canonical ledger, inspect exact suppliers and existing collar findings, and
then classify it. No canonical ledger entry or published edit was made here.

## Reading and integration boundaries

Read `def-smooth-map-between-manifolds-with-boundary`,
`thm-relative-whitney-approximation-for-manifold-valued-maps`,
`def-smooth-collar-of-a-manifold-boundary`, the collar theorem just identified,
and `def-the-standard-smooth-step-function` fully. The exact smooth-simplex
manifest and relative-smoothing/homology item placement were examined.
The published relative Whitney theorem is boundaryless under its local smooth-
manifold definition and uses an embedded-target open tubular retraction; it
is not being extrapolated to boundary targets.

A primary-source search located Lee's smooth singular homology treatment at
https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf;
only the indexed smooth-simplex/finite-chain definition was exposed and read,
not its full proof. This is not claimed as a complete backing read. The
finite-chart construction above is supplied directly and leaves all existing
source retry histories unchanged. No request was made against the exhausted
Park/Hatcher/Merry URLs.

Before integration, reread the authored boundaryless comparison and smooth
prism suppliers, the standard-flat-function proof behind sigma, and the exact
boundary-closed/chart interfaces. A local lemma for the finite push may be
added on the existing A page if required, with owner scope reconciliation;
no additional pair is needed. This receipt alone does not approve an item.
