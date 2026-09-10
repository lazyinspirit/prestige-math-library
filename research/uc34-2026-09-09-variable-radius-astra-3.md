# Variable-radius normal-addition repair

Date: 2026-09-09. One-item owner-authorized local repair. No judge, shared plan/ledger/prose, live scaffold, or engine changes.

## lem-variable-radius-injectivity-for-normal-addition

Disposition: locally repaired, retaining a positive **smooth** radius for arbitrary embedded Euclidean submanifolds, now under the explicit inherited countable-choice assumption.

- Before SHA-256: `f5493b204d479928123794ad4c2797795a3d485cfdecb57fc2be3d4a8cbc0cd2`.
- After SHA-256: `edde5393cff7bc3d3305309cbe0f86ab58acc55a57225414b99d288814d768e8`.
- Changed published file: `items/lem-variable-radius-injectivity-for-normal-addition.md` only.
- Former audit stamp replaced with honest delegated local-repair evidence; no independent judge or owner-audit assertion.

### Findings and complete local resolution

The original supremum could be unbounded before the outer cap (a linear Euclidean subspace already demonstrates this), its endpoint injectivity was asserted without proof, and its smooth minorant was an unexpanded invocation of partition/Urysohn existence. Read the exact findings in `research/uc34-2026-09-09-manifold-whitney-followups-astra-1.md` and the root tube strategy in `research/phase-2-catchup-24-local-dg15-tube-dg18-choice.md` before repairing.

1. Define the eligible set using radii in `(0,1]` before taking its supremum r(p). Local invertibility and the normal bundle's induced product topology make this set nonempty. All smaller positive radii below r(p) are eligible: some eligible larger radius exists by the supremum property, and restriction preserves the diffeomorphism.
2. Any two points of the endpoint neighbourhood `V_(r(p))(p)` belong to one smaller eligible neighbourhood, giving injectivity. Each point has a local smooth inverse from such a neighbourhood; the image is open and these inverses agree. Thus the endpoint restriction is actually a diffeomorphism, not merely an unproved supremum assertion.
3. Triangle-inequality inclusion of smaller neighbourhoods gives `r(q)≥r(p)-||p-q||`, with the nonpositive case handled separately. Interchanging points proves the 1-Lipschitz estimate and continuity.
4. Under CC take the earlier repaired nonnegative smooth proper exhaustion rho. Each `K_n={rho≤n+1}` is compact. Set `a_n=min(1,min_(K_n)r)/4` for nonempty K_n and `a_n=1/4` otherwise. Nonempty compact minima are attained and positive; their values are unique, so this is a definition of coefficients, not a countable selection of minimizing points.
5. For `n=0,1,...` use `psi_n(t)=sigma(t-n+1)sigma(n+1-t)`. These explicit smooth bumps have support `[n-1,n+1]`, are positive on its interior, and have locally finite supports on R. Their positive sets cover `(-1,∞)`, including `psi_0(0)=1`. The locally finite sums `B=sum psi_n` and `C=sum a_n psi_n` are smooth, and B,C are positive on that interval. Thus `F=C/B` is a smooth positive one-variable function.
6. Set `delta=F∘rho`. Any active bump at p has `rho(p)<n+1`, hence p belongs to K_n and its coefficient is at most r(p)/4. The normalized weighted average therefore satisfies `0<delta(p)≤r(p)/4<r(p)/2`. Empty sublevels cannot supply an active term; at an interval endpoint another integer-centred bump is positive. Smoothness is proved by one-variable sums/quotient and smooth composition, not by an unstated manifold partition theorem or a later Whitney theorem.
7. Equal normal-addition images satisfy `||p-q||≤||v||+||w||<delta(p)+delta(q)`. Arrange r(q)≤r(p); both points then belong to the same endpoint neighbourhood `V_(r(p))(p)`. Its proven injectivity makes them identical.

The empty manifold has the empty smooth radius and vacuous injectivity. Zero-dimensional S requires no modification: the local inverse and exhaustion arguments remain valid, as do the pointwise bump estimates. For ambient dimension zero the only nonempty embedded submanifold is a point, so all the same formulas are valid. No boundary version beyond the existing embedded-submanifold convention is asserted.

### Choice and actual supplier clauses

The statement, facts, and proof explicitly assume CC and declare `def-countable-choice`. The new smoothing argument inherits CC from `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`. Its actual repaired proof was read: all-coordinate-tuple countable selection, compact nested exhaustion, CC compact cutoffs, neighbourhood-local support finiteness of their complements, and compact sublevel/properness conclusions. There is no partition/Urysohn dependency in that repaired proof.

CC also covers an already existing normal-bundle interface: `def-normal-addition-map-for-a-euclidean-submanifold` depends on `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`, whose statement and proof explicitly assume CC through the tangent-bundle manifold construction. The latter and the full normal-addition local-inverse proof and its manifold IFT supplier were read. It would be inaccurate to claim the entire existing geometric interface is supplied choice-free. The item instead records the valid conditional fact: once the normal-bundle manifold/local-inverse data and a suitable smooth exhaustion are given, the radius construction makes no further choices.

Also read the full standard step definition and flat-function smoothness proof, locally finite smooth-sum theorem, smooth-composition theorem, and derivative algebra used for real products/quotients. The compact minimum supplier is the earlier metric EVT, whose actual open-cover/supremum proof had been read in the immediately preceding finite-dimensional audit: it does not manufacture an adherence sequence. The compact sublevels of rho are compact for S's induced Euclidean metric because S is embedded. No arbitrary metric complete-implies-closed theorem is used.

### Exact final dependency order

Target: A455 `whitney-embedding-tubular-neighbourhoods-and-approximation`, item 16. All nine direct dependencies are published and earlier:

| Dependency | Order / item |
|---|---|
| `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section` | 455 / 15 |
| `def-normal-addition-map-for-a-euclidean-submanifold` | 455 / 14 |
| `def-countable-choice` | 18 / 9 |
| `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` | 445 / 24 |
| `def-the-standard-smooth-step-function` | 445 / 4 |
| `thm-a-locally-finite-sum-of-smooth-functions-is-smooth` | 445 / 10 |
| `thm-extreme-value-metric` | 120 / 17 |
| `thm-algebra-of-derivatives` | 153 / 5 |
| `prop-identity-maps-and-composites-of-smooth-maps-are-smooth` | 443 / 20 |

Removed direct dependencies: `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set`. No Euclidean Whitney edge was added. Source metadata's erroneous Lee Corollary 6.22 locator is corrected to Theorem 6.24.

### Full source and checks

Read Lee, *Introduction to Smooth Manifolds*, second edition, full Theorem 6.24 proof, printed pp. 139–140, and adjacent normal-bundle setup/Proposition 6.25, in `/tmp/batch9-sources/lee-all.txt`. [Full source](https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html). Lee caps the eligible radii before their supremum and explicitly justifies endpoint injectivity. Lee requires only a positive continuous radius there; the positive smooth minorant is the fully written local construction above and is not falsely attributed to the source theorem.

- Explicit-path precheck: PASS, 1 checked, 0 failing.
- Explicit-path rendercheck: PASS, real KaTeX and renderer YAML, no skipped math checks.
- Exact canonical publication/order check: 9 dependencies, 0 errors.
- Every body wikilink declared among those dependencies.
- Scoped `git diff --check`: PASS.

Parent handoff: reconcile this item and canonical dependency row. The direct Euclidean tubular-neighbourhood theorem is an impact-review candidate for explicit CC propagation, not automatically repaired by this receipt; no consumer was edited. The general-ambient tubular theorem's separately recorded existence gap also remains outside this task. This is local repair evidence, not whole-closure certification or a judge acceptance.
