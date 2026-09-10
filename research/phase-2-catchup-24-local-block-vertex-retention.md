# B10-VERTEX-RETENTION: complete local proof contracts

2026-09-09; Astra 2; bounded mathematical research for root, followed by the
explicitly authorized scaffold/prose application recorded at the end. No
published item, canonical plan, ledger, engine control, or terminal verdict is
changed. The applied contracts remain proposed recheck inputs, not independent
judgment of the whole blocks pair.

## Disposition

The stated retention lemma is true without weakening. The false assertion
that restriction preserves relative projectivity for the fixed subgroup Q
must be removed. Two Mackey applications give, respectively, the order bound
on a vertex T of the selected summand and containment of Q in an R-conjugate
of T. Equality of orders then establishes the asserted vertex.

The full proof below also preserves the stronger centralizer-qualified
two-Sylow intersection and both normal-core consequences. No later Green
correspondence theorem, new pair, Brauer First theorem, or idempotent-lifting
claim is used. B10-PRIMITIVE-IMAGE is a separate open obligation owned by root;
nothing here settles it.

## Actual sources and scope read

The authoritative full text is Peter Webb, *A Course in Finite Group
Representation Theory*, author-hosted manuscript dated 23 February 2016,
[complete PDF](https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf).
The recovered PDF has 294 PDF pages and SHA-256
`3053d04310d379844d0ccac2ae078124492730a116e63343014d276169fb4c24`.
Cached reading copies are `/tmp/webb-audit/RepBookLatex.pdf` and its `.txt`.

Complete relevant passages, not merely statement/search excerpts, were read:

- Section 5.2, printed pp.76–77, Theorem 5.2.1 and its proof: module Mackey
  decomposition. The tensor maps below spell out the convention used here.
- Section 11.6, printed pp.209–213: both proofs of Theorem 11.6.1,
  Proposition 11.6.2, Corollary 11.6.3, and all four proof steps of
  Theorem 11.6.4. The latter explains the source-retention mechanism but its
  normalizer hypothesis is not silently imposed on the present lemma.
- Section 12.3, printed pp.235–237: Corollary 12.3.2, full Theorem 12.3.3
  and full Corollary 12.3.4. The retained-vertex inference is explicitly
  referred back to the Green-correspondence argument. The local proof below
  expands that inference without importing the full correspondence theorem.

This report's detailed tensor, cardinal-bound and coefficient arguments are
local proof developments checked against those passages, not purported
verbatim source proofs. In the two-Sylow calculation Webb uses a different
representative convention; the direct action calculation below fixes all
inverses instead of mixing the two conventions.

## Checked current interfaces and amendment map

The exact current target and related strategies were read from the root-array
manifest `research/phase-2-catchup-24-batch-10.pages.json`, blocks A page
`blocks-defect-groups-and-the-brauer-homomorphism`. The defect wording was
read in full in `research/phase-2-catchup-24-alpha-e-step3-scaffold-recheck.md`.

Published supplier statements and full proofs read for the used interfaces:

| ID | Actual use |
|---|---|
| `def-relative-projectivity` | A module is a summand of an induced module. Its optional arbitrary free-module/AC discussion is not used. |
| `thm-higman-criterion-for-relative-projectivity` | The counit gives the finite-dimensional inducing module Res M, and relative projectivity is equivalent to identity being a relative trace. |
| `def-vertex-and-source-of-an-indecomposable-module` | Vertex is an inclusion-minimal p-subgroup of relative projectivity; source is indecomposable, a summand of restriction, and induces a module containing M. |
| `thm-green-vertex-source-existence-and-conjugacy` | Existence/conjugacy of vertices and sources for finite-dimensional modules over a characteristic-p field. The full later Green correspondence is not its statement and is not used. |
| `thm-krull-schmidt-for-finite-dimensional-kg-modules` | Finite indecomposable decompositions and extraction of an indecomposable summand from one term of a finite direct sum. |
| `lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent` | Every nonzero module for a finite p-group has a nonzero fixed vector; proof supplied below. Its field contract is arbitrary characteristic-p field. |
| `thm-sylow-second-theorem` | Containment of a p-subgroup in a Sylow subgroup, conjugacy, and the normal-core consequences. |

The published simple-module corollary
`cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p`
was also read. Its statement expressly assumes a splitting field. The current
permutation lemma omits this restriction, and its use on P times P should not
infer the required field interface merely from splitting for subgroups of G.
Use the arbitrary-field augmentation-nilpotence supplier instead; it is
already published on the same earlier prerequisite page
`modular-representations-and-projective-covers`. This needs no extra pair.

The earlier local supplier
`lem-relative-projectivity-mackey-intersections-for-finite-modules` is
scaffolded, not published. Its full proof obligation is given next. The
retention lemma may keep its existing four dependencies; the local Mackey
supplier already exports the finite relative-projectivity machinery and has
Higman as a dependency. If the retention author cites Higman directly, declare
that direct dependency too. The two-Sylow author should directly declare
Krull–Schmidt and vertex conjugacy when citing their extraction/comparison
clauses. All are existing earlier suppliers, not new mathematical results.

## lem-relative-projectivity-mackey-intersections-for-finite-modules

Work with finite groups and finite-dimensional left modules over k. Write
X divides Y to mean X is isomorphic to a direct summand of Y. Restriction and
induction preserve this relation, by applying the functors to split inclusion
and projection maps. A summand of a relatively A-projective module is again
relatively A-projective. Higman's counit criterion ensures that relative
projectivity can always be witnessed using the finite module Res_A X.

For A,B subgroups of H and a kB-module V, choose a finite set of double-coset
representatives x in A\H/B. Set L_x=A intersect xBx^{-1}. Regard V as an
L_x-module by t.v=(x^{-1}tx)v; equivalently this is the conjugate of its
restriction to B intersect x^{-1}Ax. There is an isomorphism

$$\operatorname{Res}_A^H\operatorname{Ind}_B^H V\cong\bigoplus_{x\in A\backslash H/B}\operatorname{Ind}_{L_x}^A({}^x\operatorname{Res}_{B\cap x^{-1}Ax}^B V).$$

On the x-term its map is a tensor v to ax tensor v. It is well-defined since
atx tensor v=ax tensor (x^{-1}tx)v for t in L_x. The group-algebra basis
partitions into disjoint double cosets AxB, giving a direct sum of
(kA,kB)-bimodules. Within AxB, left coset representatives for A/L_x give a
right kB-basis ax: if a_1xB=a_2xB then a_2^{-1}a_1 belongs to L_x. Thus both
sides of this component map are the same direct sum of copies of V and the
map is bijective. This establishes the module isomorphism in arbitrary
characteristic, not merely an equality of ordinary characters.

Induction transitivity is the explicit isomorphism
a tensor (b tensor v) maps to ab tensor v, with inverse a tensor v maps to
a tensor (1 tensor v). All tensor relations are respected. Hence relative
projectivity is transitive up a subgroup chain.

For completeness the vertex-containment consequence does not require an
unsupported restriction inference. Suppose indecomposable M has vertex Q
and is also relatively B-projective. The two counit retractions and their
images under induction/restriction show

$$M\mid\operatorname{Ind}_Q^H\operatorname{Res}_Q^H\operatorname{Ind}_B^H\operatorname{Res}_B^H M.$$

Mackey in the middle and transitivity express the right side as a finite
sum of modules induced to H from Q intersect xBx^{-1}. Krull–Schmidt makes
M a summand of one such term. Since this subgroup is a p-subgroup of Q,
minimality of Q forces Q=Q intersect xBx^{-1}. Thus Q is contained in
xBx^{-1}, as required. The same finite-sum extraction may be justified by
the local endomorphism-ring clause in the published Krull–Schmidt proof:
write identity as the sum of component inclusion/projection composites;
some composite is a unit, giving a split factorization through one term.

## lem-restriction-to-a-containing-p-subgroup-retains-a-vertex

Exact typed contract: H is finite, k is a field of characteristic p, M is a
nonzero indecomposable finite-dimensional kH-module, Q is a vertex of M,
S is a source at Q, and Q is contained in a p-subgroup R of H. Then
Res_R^H M has a nonzero indecomposable direct summand U for which Q itself
is a vertex. No uniqueness of U and no full Green correspondence is claimed.

1. The source S cannot be relatively E-projective for any E properly
   contained in Q. Otherwise induction transitivity and
   M divides Ind_Q^H S make M relatively E-projective, contrary to Q being
   a vertex. In particular S, viewed as a kQ-module, has full vertex Q.

2. Decompose Res_R^H M as a finite direct sum of indecomposables U_j.
   Further restriction to Q contains the indecomposable source S.
   Krull–Schmidt therefore supplies one summand U=U_j with
   S divides Res_Q^R U. This does not assert that all U_j retain Q.

3. Because M divides Ind_Q^H S, the selected U divides
   Res_R^H Ind_Q^H S. The first Mackey application expresses this module
   as a finite sum of modules induced to R from
   L_h=R intersect hQh^{-1}, h in R\H/Q. Extraction gives one h for which
   U is relatively L_h-projective. Each L_h is a p-group and
   its order is at most the order of Q. There is no claim that L_h is
   R-conjugate into Q.

4. Among the finitely many subgroups of L_h relative to which U is
   projective, choose an inclusion-minimal T. This is a vertex of U by
   definition: a proper subgroup of T would also lie in L_h. In particular
   T is a p-subgroup and |T| is at most |L_h|, hence at most |Q|.
   Higman's counit supplies the finite module W=Res_T^R U such that
   U divides Ind_T^R W.

5. Restrict the last split inclusion to Q. By step 2, S divides
   Res_Q^R Ind_T^R W. The second Mackey application and indecomposable
   extraction give an r in Q\R/T such that S is relatively
   E=Q intersect rTr^{-1}-projective as a kQ-module. Step 1 forces E=Q.
   Thus Q is contained in rTr^{-1}.

6. The order inequalities now read |Q| at most |T| at most |Q|.
   Therefore Q=rTr^{-1}. Vertices are conjugate within the ambient group
   R, so Q itself is a vertex of U. Concretely, inner conjugation by r
   identifies a kR-module with its conjugate by v maps to rv; conjugating
   a split induction witness preserves relative projectivity and its
   minimality. No new summand produced by an outside-H conjugation is
   required. This proves exactly the stated conclusion.

All selected representative sets, decompositions, subgroups and witnesses
are finite in number. The argument introduces no infinite-choice premise.
It also works for a general intermediate subgroup R, but there is no need
to broaden the commissioned p-subgroup contract.

## lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices

Let R be a finite p-group, L a subgroup, and k any field of characteristic p.
Put V=k[R/L] with its usual left permutation basis. Here is a full proof
preserving that arbitrary-field contract.

First, if W is any nonzero finite-dimensional kR-module, augmentation-ideal
nilpotence gives a largest j with I_R^j W nonzero. Any nonzero vector there
is killed by I_R, hence fixed by every element of R. On the other hand V^R
has dimension one: invariance means coefficients are constant on the one
transitive R-orbit R/L. A decomposition into two nonzero submodules would
give two nonzero fixed subspaces in direct sum, impossible. Thus V is
indecomposable. It is relatively L-projective since V=Ind_L^R k.

It remains to exclude every proper T<L. Suppose Higman's criterion gave
identity=Tr_T^R(alpha), with alpha a kT-endomorphism of V. Let e be the
basis vector L and let lambda extract its coefficient. For a left coset
rT define c(rT)=lambda(r alpha(r^{-1}e)). This is independent of its
representative: replacing r by rt and using T-linearity of alpha cancels
t and t^{-1}. For l in L, both le=e and lambda(lv)=lambda(v), so
c(lrT)=c(rT). Therefore the identity's diagonal coefficient at e equals
the sum over L-orbits on R/T of the constant orbit value times orbit size.

The orbit of rT has size [L:L intersect rTr^{-1}]. Since |T|<|L|,
this is a positive power of p for every r, hence zero in k. The trace's
diagonal coefficient is consequently zero, while identity has coefficient
one. This contradiction excludes every proper T<L, making L a vertex
by its defining minimality. There is no need to assert that an arbitrary
previously chosen vertex is literally contained in L.

## lem-block-defect-is-an-intersection-of-two-sylow-subgroups

Assume the earlier block-bimodule theorem: B=kGb is an indecomposable
k[G times G]-module with vertex Delta D. Its action on the group basis of
kG is (a,b).g=ag b^{-1}. Let P be any Sylow p-subgroup of G containing D.
Retention, with H=G times G and R=P times P, supplies an indecomposable
summand U of Res_R B with vertex Delta D.

The central idempotent b makes B a direct summand of kG, and restriction
preserves that splitting. The R-orbits of the group basis G are the double
cosets PgP. The stabilizer of g is exactly

$$L_g=\{(a,b)\in P\times P:a=gbg^{-1}\}=\{(a,g^{-1}ag):a\in P\cap gPg^{-1}\}.$$

Thus Res_R kG is the finite direct sum, over g in P\G/P, of the
permutation modules k[R/L_g]. The preceding lemma says each is
indecomposable with vertex L_g. By Krull–Schmidt, U is isomorphic to one
of these summands. Vertex conjugacy inside R gives r,s in P such that

$$\Delta D=(r,s)L_g(r,s)^{-1}.$$

The first projection of this equality is
D=r(P intersect gPg^{-1})r^{-1}. For each d in D, the fact that (d,d)
lies in its right-hand side gives a= r^{-1}dr and b=s^{-1}ds satisfying
a=gbg^{-1}. Consequently
d=(rgs^{-1})d(rgs^{-1})^{-1}. Set h=rgs^{-1}. This proves h belongs to
C_G(D), with no change in the subgroup D. Since r,s belong to P,

$$D=P\cap rgPg^{-1}r^{-1}=P\cap hPh^{-1}.$$

The important correction to loose scaffold wording is that L_g is a
twisted diagonal; the displayed conjugacy and h=rgs^{-1} establish the
centralizer claim directly. No assertion that L_g is already a P-times-P
conjugate of the untwisted diagonal of its first projection is needed.

## cor-normal-p-core-lies-in-every-block-defect-group

For a finite group K, define O_p(K) as the product of its normal
p-subgroups. There are finitely many subgroups; the product of two normal
p-subgroups is normal and has p-power order by the elementary product-order
formula. Hence this finite product is the largest normal p-subgroup.

If N is normal and a p-subgroup of K and P is Sylow, NP is a p-subgroup
containing P, so NP=P. Thus O_p(K) is contained in every Sylow p-subgroup.
Apply this with K=G and intersect the two Sylow subgroups in the preceding
lemma to obtain O_p(G) contained in D.

## cor-block-defect-groups-are-p-radical

Put N=N_G(D). Since D is a p-subgroup of N, choose a Sylow p-subgroup T
of N containing D. Extend T to a Sylow p-subgroup P of G, using Sylow
containment. Then P intersect N=T: it is a p-subgroup of N containing
the Sylow subgroup T. The two-Sylow theorem supplies h in C_G(D), hence
in N, with D=P intersect hPh^{-1}. Intersecting this identity with N gives

$$D=(P\cap N)\cap h(P\cap N)h^{-1}=T\cap hTh^{-1}.$$

Both T and hTh^{-1} are Sylow subgroups of N, so O_p(N) is contained in
D by the preceding elementary normal-core argument. Conversely D is
normal in its normalizer and is a p-group, so D is contained in O_p(N).
This proves equality, without Brauer First or another block of N.

## Remaining work and assurance boundary

No mathematical gap remains identified in this bounded retention-to-core
route. The replacement strategies, explicit field contracts and indicated
supplier bookkeeping have now been applied under root's subsequent bounded
authorization. Root must synchronize the canonical plan and obtain the
workflow's appropriate current checks/disposition.
The diagonal-vertex theorem is used by its specified contract, not newly
certified here; neither its entire ancestor closure nor the whole 37/4
blocks inventory is certified by this report. Primitive-idempotent lifting
and the six later Brauer-pair criteria remain outside this finding.

This is a research Markdown report, not an item: no item precheck/rendercheck
pass or judge stamp is claimed. The source and the exact current scaffold
were read, the direct used published proofs were inspected, and all tensor,
intersection, trace-coefficient and conjugation identities above were checked
locally. The initial research disposition changed only this report; the
subsequent authorized changes are enumerated next.

## Authorized scaffold application receipt

Root subsequently authorized only the blocks A object of batch 10, its affected
source-harvest records, and RG-14 prose. Applied exactly these six A contracts:

- `lem-relative-projectivity-mackey-intersections-for-finite-modules`: full
  tensor Mackey map, counit retractions, transitivity and minimality proof.
- `lem-restriction-to-a-containing-p-subgroup-retains-a-vertex`: explicit
  finite-group/characteristic-p/nonzero contract; both Mackey steps and their
  distinct order/containment conclusions; added direct Higman dependency.
- `lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices`:
  arbitrary-field contract, augmentation-nilpotence dependency replacing the
  splitting-field-only corollary, and complete orbit-coefficient calculation.
- `lem-block-defect-is-an-intersection-of-two-sylow-subgroups`: exact twisted
  stabilizer and centralizing h=rgs^{-1}; direct Krull–Schmidt and vertex
  conjugacy dependencies declared.
- `cor-normal-p-core-lies-in-every-block-defect-group`: finite-product core
  construction and Sylow containment argument.
- `cor-block-defect-groups-are-p-radical`: explicit Sylow extension inside the
  normalizer and intersection argument.

The coverage changes update the affected local-alternative arguments, the
two-Sylow dependency list and Webb's bounded reading evidence; four explicit
inline harvest records link module Mackey, retention, permutation vertices
and normal-core containment to the read passages. Existing fetch stamps and
source-drop decisions are not manufactured or reclassified. No primitive-image
argument, unrelated source row or Haar contract is repaired by association.

RG-14's main table now lists exactly 37 A IDs and 4 B IDs in current manifest
order, retaining all 13 previously missing helpers. Its hard-proof prose
contains the full retention, permutation, two-Sylow and both core arguments.
The five RG-14/H1–H5 harvest rows are aligned to that same inventory order.
Both RG-14 example mentions now use the actual C3-semidirect-D8 ID and group,
not the old C4 label. No other track section was edited. Historical whole-track
count lines outside RG-14 still need root's separate aggregate reconciliation;
they were not silently treated as current counts or edited out of scope.

File SHA-256 receipts, before to after:

| File | Before | After |
|---|---|---|
| `research/phase-2-catchup-24-batch-10.pages.json` | `fd75f6eca617281946e9454e1c6c7ed7bcd07429b78777bf9ea0410523f4487e` | `d52c4084731ab407b201f5f75256dd93bdd60bbc0d3d5d847d999fe1445bd31c` |
| `research/phase-2-catchup-24-batch-10.coverage.json` | `1baabfeb936dbf9feb9c5d6777b9410c89f6ec12b004eeda8a57742c050f9f83` | `05e175df697a1a219a00192d86b17e14aa40559f638bb49b1c5ba7e013a768b1` |
| `research/plan-representation-theory-groups-track.md` | `057c4e8d5dea6d606f699ba8478cd82d350e6d2d3bfaf82a984c65a39c16195a` | `f45376913cd926841468db89bc48aeba7a7a01cf55f2f151a258872ffba524e1` |

Actual checks: `manifest-deps` on the explicit batch: 59 items, zero errors;
`coverage-checklist`: two pages, 144 harvested results, zero errors/warnings;
`content-policy --manifest-only`: 59 scoped items, zero errors/warnings;
`source-fetch-check` without stamping: eight of nine sources verified, all
nine resolved including the existing documented drop; `source-backing` with
the run liveness ledger and `--require-verified`: 24 authored results backed;
`git diff --check` on the three changed carriers: clean. An exact main-table
ID-sequence comparison against both blocks manifest objects confirms 37A/4B
in order. The checks do not constitute mathematical acceptance or a whole-run
plan-gate pass. Initial patch-construction attempts failed matching before
application; corrected exact-line patches succeeded. Help probes of the
coverage/content-policy tools returned usage/errors and are not pass receipts.

Safe handoff: root owns canonical synchronization, aggregate counts, current
recheck disposition and the separate primitive-image investigation. Haar,
the B manifest, primitive-image strategy, canonical plan, ledger and engine
were outside this edit set and were not changed by this application.
