# B10 local Brauer idempotent and six-criteria proof contract

2026-09-09. Research and proposed local repair, not an acceptance stamp.
The two retained IDs below need no new A/B pair or additional item. All six
commissioned criteria and the normal-chain definition are preserved.

## Exact defect and assumptions

Alpha-e's Step-3 recheck correctly identifies the missing lift in
`lem-brauer-images-of-primitive-idempotent-decompositions`. Park Proposition
1.18 cites lifting; Corollary 1.37 uses it. Neither is a proof of the claimed
relative-trace correction. In addition, the old order strategy's sentence
“unique descent makes every surviving j meet f” does not follow just from
normal-chain uniqueness. Park Theorem 1.36 and BKY Theorem 2.1 supply the
stronger arbitrary-subgroup association theorem by reference. The complete
local proof of that missing interface is given below.

The page inherits a splitting p-modular system, with residue field k of
characteristic p. The lifting and corner arguments work over **any field**;
the group arguments require only char(k)=p and finite G and p-subgroups.
No algebraic closure, nilpotent Brauer kernel, choice principle, or new
splitting hypothesis is used. All decompositions and selections are finite.
Put A_R=(kG)^R, B_R=kC_G(R), and write b_R for Br_R.

## lem-brauer-images-of-primitive-idempotent-decompositions

First prove the following general fact inside this item, not by a later
commutative-algebra supplier. If phi:A onto B is a unital homomorphism of
finite-dimensional k-algebras, every idempotent y of B lifts to an idempotent
of A. The cases y=0,1 use 0,1. Otherwise choose x above y. Linear dependence
of 1,x,...,x^dim(A) gives a nonzero polynomial m with m(x)=0. Since
m(y)=m(0)(1-y)+m(1)y=0 and both y and 1-y are nonzero, multiplication by
these two idempotents gives m(0)=m(1)=0. Write
m(T)=g(T)(T-1)^s, where s>=1 is maximal; then g(1) is nonzero and g(0)=0.
Polynomial Bezout gives u*g+v*(T-1)^s=1. For q=u*g,
q(q-1)=-u*v*m, q(0)=0, q(1)=1. Consequently q(x) is an idempotent lifting
q(y)=y. Evaluation is legitimate in a noncommutative algebra because
powers of one element commute and k is central. No division by 2 occurs.

For an idempotent e of A, the restriction eAe onto phi(e)Bphi(e) is
surjective: phi(eae)=phi(e)phi(a)phi(e). Its identity is e and its kernel is
e(ker phi)e. Apply the same polynomial proof in this finite-dimensional
corner, interpreting scalar constants as multiples of e. If e is primitive
and its nonzero image were not primitive, a nontrivial idempotent in the
image corner would lift to u in eAe, with u neither 0 nor e. But
e=u+(e-u) is a nontrivial orthogonal decomposition, contradiction. Thus
primitive idempotents have zero or primitive images under every such
surjection. Conversely, lifting and then finitely decomposing any primitive
target idempotent gives a primitive lift: exactly one summand survives.

Orthogonality and sums are preserved by phi; deleting zero summands thus
gives a primitive decomposition of the image. The coefficient Brauer map
A_R onto B_R is surjective since it fixes B_R, and is multiplicative by
the preceding theorem. Apply the general fact first to a decomposition of
1 in A_R, then to a primitive decomposition of i in A_Q. Primitivity of
a summand j<=i in iA_Qi equals primitivity in A_Q, since jA_Qj is the same
corner in either algebra. Empty surviving families represent zero. This
proves both retained clauses without asserting that b_Q(i) itself is
primitive when i was only primitive in A_P.

Exact dependencies: retain the existing Brauer definition, multiplicativity,
and finite primitive-decomposition lemma; add
`thm-bezout-identity-for-polynomials`, an earlier published result on
polynomial-rings-and-roots. Finite linear dependence and the displayed
polynomial calculation are proved here, not imported from the field-extension
minimal-polynomial theorem (whose irreducibility hypothesis is inapplicable).

## thm-brauer-pair-order-is-independent-of-the-normal-chain

### Elementary interfaces, proved locally

If h is primitive and f central idempotent, h=fh+(1-f)h implies fh=0 or h.
Distinct blocks are orthogonal: a nonzero product is a central idempotent
below both and hence equals both. A primitive decomposition of 1 in A_P
provides at least one i with b_P(i)e nonzero, since the corresponding sum
is e. Such i has b_P(i)e=b_P(i). For Q<=P, b_P(i) nonzero implies b_Q(i)
nonzero by C_G(P) subset C_G(Q); this does not assert a relative map on
all of B_Q when Q is not normal.

The needed primitive-corner nilpotence assertion also has a direct proof
over arbitrary k. Let C=iA_Pi with i primitive, and c in C. For sufficiently
large n the kernels and images of left multiplication L_c^n stabilize.
Their intersection is zero: c^n x in the kernel implies c^(2n)x=0,
so x is in ker L_c^n and c^n x=0. Rank-nullity gives
C=ker L_c^n direct-sum im L_c^n. Both are right C-submodules, so the
projection onto either is left multiplication by its value at i, an
idempotent. Primitivity forces one summand zero. Hence c is nilpotent or
L_c is bijective. In the latter case cx=i for some x; injectivity applied
to c(xc-i)=0 gives xc=i, so c is a unit. Every element of any proper
two-sided ideal of C is therefore nilpotent. We need no radical theorem
and make no claim that an arbitrary Brauer kernel is nilpotent.

For Q<=P and N=N_P(Q), coefficient counting gives the exact identity

    b_Q(Tr_Q^P(a)) = Tr_Q^N(b_Q(a))  (a in A_Q).

Indeed Q acts on the cosets P/Q indexing the trace. At a basis element
of C_G(Q), coefficients of summands indexed by one Q-orbit are equal.
Non-singleton orbit sizes are divisible by p; fixed cosets are exactly
N/Q. Those remaining summands give the displayed identity, using
conjugation equivariance of b_Q. In particular the two image spaces are
equal because b_Q is onto B_Q. For x,y in A_P the finite sum also gives
x Tr_Q^P(a)y=Tr_Q^P(xay), including the corner case x=y=i.

### Strong association and its compatibility, without assuming transitivity

Define an auxiliary relation (Q,f) preceq (P,e) to mean Q<=P and that
every primitive i of A_P with b_P(i)e nonzero satisfies
b_Q(i)f=b_Q(i) nonzero. This is not a redefinition of the commissioned
chain order; equality with that order will be proved.

There is at most one such f: choose an associated i; orthogonal blocks
cannot both support its nonzero b_Q(i). More generally, if
(Q,f) preceq (P,e), (S,d) preceq (P,e), and
(S,d') preceq (Q,f), then d=d'. Choose associated i of A_P and decompose
i into primitive j's in A_Q. Some j has b_Q(j)f nonzero, and consequently
b_S(j)d'=b_S(j) nonzero. Since j<=i, multiplication by b_S(j) shows
b_S(i)d' nonzero. But b_S(i) is supported on d, forcing d'=d. This
compatibility argument uses no transitivity or arbitrary-subgroup existence.

### Normal inclusions

If Q is normal in P, the earlier normal-subpair theorem supplies the
unique P-stable block f with Br_(P/Q)(f)e=e. The restriction
b_Q:A_P onto (B_Q)^P is surjective: every element of (B_Q)^P already lies
in A_P and is fixed by b_Q. Hence, by the preceding general finite-algebra
image proof, b_Q(i) is primitive in (B_Q)^P for primitive i in A_P whenever
nonzero. The block f is central in this fixed algebra. Applying the relative
Brauer map to b_Q(i)f gives b_P(i)Br_(P/Q)(f)=b_P(i), which is nonzero for
associated i. Thus b_Q(i)f=b_Q(i). This proves strong association in the
normal case. Its uniqueness proves the converse normal characterization.
It is essential here to use primitivity in the **fixed target algebra**;
b_Q(i) need not be primitive in B_Q.

### Arbitrary subgroup existence: the missing normalizer/trace argument

Induct on [P:Q]. The equality and normal cases are settled. For a proper
nonnormal Q let N=N_P(Q). One has Q<N<P: Q acting on P/Q has [N:Q]
fixed cosets, and fixed-point congruence modulo p gives p dividing [N:Q].
For every Q<R<=P induction supplies a unique e_R with
(R,e_R) preceq (P,e), including e_P=e. Compatibility proved above, with
the induction hypothesis at the smaller interval [T:R], shows
(R,e_R) preceq (T,e_T) whenever Q<R<=T<=P. Normal descent from N gives
f with (Q,f) preceq (N,e_N). For Q<R<=N, induction at [R:Q] and the
same compatibility argument show (Q,f) preceq (R,e_R). In particular f
is N-stable and Br_(R/Q)(f)e_R=e_R for all these R.

Fix any primitive i associated to (P,e), and put z=b_Q(i)(1-f).
This is an N-fixed idempotent of B_Q. For Q<R<=N, compatibility at R
gives b_R(i)e_R=b_R(i), hence Br_(R/Q)(z)=0. The space of all such z is

    (B_Q)^N intersect intersection_(Q<R<=N) ker Br_(R/Q)
      = Tr_Q^N(B_Q) = b_Q(Tr_Q^P(A_Q)).

For the first equality use the N-permuted basis C_G(Q). An N-orbit
with stabilizer S>Q contributes a nonzero coefficient at an S-fixed
basis element, and is detected by Br_(S/Q); different basis orbits cannot
cancel that coordinate. Orbits with stabilizer exactly Q have no R-fixed
elements for any R>Q and are killed by every displayed map. Their orbit
sums are precisely Tr_Q^N of basis elements: the multiplicity for any
larger stabilizer is [S:Q], zero in k. This proves the equality in both
directions. The second equality is the coset trace identity already proved.

Since z=b_Q(i)z b_Q(i), the corner trace identity puts z in b_Q(J), where
J=Tr_Q^P(iA_Qi). This is a two-sided ideal of C=iA_Pi, by the finite trace
identity. It is proper: b_P kills Tr_Q^P(A_Q) for Q<P, whereas b_P(i)
is nonzero. Every element of J is nilpotent by the explicit Fitting
argument, so every element of b_Q(J) is nilpotent. Thus the idempotent z
is zero. This proves strong association for every top-associated i,
completing existence and uniqueness without a chain-association assumption.

Transitivity now follows from compatibility: for (S,d) preceq (Q,f)
preceq (P,e), take the unique strong lower block d' at S beneath (P,e);
compatibility gives d=d'. Reflexivity follows from primitive-image support,
and antisymmetry from subgroup equality and uniqueness. Conjugation
equivariance transports primitive decompositions and all displayed equations.

### Chain identification and all six retained criteria

Every normal pair inclusion is strong by the normal case, hence every
normal chain is strong by transitivity. Conversely, iterate strict
normalizers inside P to refine Q<=P to a finite chain of normal subgroup
inclusions. Take the unique strong lower block under (P,e) at each group.
Compatibility and the normal characterization make adjacent pairs normal;
the bottom block is f precisely when (Q,f) is strong. This proves the
chain order well-defined and equal to the auxiliary relation; for normal
endpoints any chain collapses to the unique direct normal inclusion.

Consequently (i) iff (iii), and (i) implies (iv) and (v); the latter uses
existence of an associated top primitive. Both (iv) and (v) imply (vi).
For (vi), let f' be the unique strong lower block, and use its defining
equation on the witnessing i. Nonzero b_Q(i)f then gives a nonzero product
ff', so f=f', proving (i). To prove (vi) implies (ii), decompose its i
in A_Q; some primitive summand j has b_Q(j)f nonzero, and ij=j=ji.
Conversely (ii) implies (vi), since multiplying b_Q(i)f by b_Q(j)
gives b_Q(j)f nonzero. Thus all six, including the universal criterion,
are proved, with no dropped conclusion.

Exact dependency additions to the existing order theorem:
`lem-brauer-kernel-and-relative-trace-support`,
`lem-brauer-homomorphism-is-conjugation-equivariant`, and
`def-relative-brauer-homomorphism`. Retain existing normal-subpair,
relative-transitivity, finite-decomposition, primitive-image and p-group
fixed-point dependencies. All are earlier locally or published earlier;
corner nilpotence and the trace image identity are expanded inside this
proof. No later commutative lifting lemma or global-block theorem is used.

## Full-text source receipts and actual scope

- Aschbacher–Kessar–Oliver, [Fusion systems in algebra and topology](https://www.math.ku.dk/english/research/conferences/2013/groups2013/AschbacherKessarOliver.pdf),
  240-page author-hosted PDF, SHA256
  `417c1a21f8fa059c4fb4861614b5423d66b86ca6cb94e6e57f1eaf8f1a273734`.
  Read IV §1 pp.169–176 relevant conventions, Proposition 1.7, full
  Lemma 1.18 proof and trace identities; IV §2 pp.178–183, including the
  entire Theorem 2.10 proof, Lemmas 2.11–2.12 and Proposition 2.14 proof.
  The book assumes algebraic closure in this part. The local group-algebra
  proof above expands every actually used algebra fact over arbitrary k;
  in particular it does not import Proposition 1.7(f), residue field=k.
  The normal-case shortcut on p.182 is expanded using the fixed-algebra
  surjection, not by assuming b_Q(i) primitive in B_Q.
- Park, [The Weighted Fusion Category Algebra](https://maths.nuigalway.ie/~park/papers/Thesis.pdf),
  73 pages, SHA256 `3d9f7755cc5a010545316483043c896d668d122cf0015bd74aff9ba652e72dbe`.
  Canonical direct request returned 403; recovery with `?download=1` and
  Mozilla User-Agent succeeded. Read printed pp.7–9 and17–19 in full.
  Proposition 1.18 cites lifting, Theorem 1.36 cites arbitrary descent;
  Corollary 1.37 proves its equivalences using those suppliers. Statement
  corroboration, not a substitute for either local proof above.
- Boltje–Karaguzel–Yilmaz, [Fusion systems of blocks over arbitrary fields](https://yilmazdeniz.bilkent.edu.tr/papers/fusion-systems-pjm.pdf),
  11 pages, SHA256 `a6c9dab6350b9747017446c48aa0e941945167f212c0533dd6731093c83d5912`.
  Full §2 pp.2–3 read, including Theorems 2.1–2.2 and all six conditions.
  Confirms arbitrary-field scope; the main descent result refers to AKO.
- Jacobsen, [Block fusion systems and the center of the group ring](https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf),
  47 pages, SHA256 `154272b1510c5f59efccb64469f37c5bce2780fa70b2efb7fdfc0165a3a07987`.
  Printed pp.14–16 fully read. Normal-chain collapse and intersection
  induction are proved there; they alone do not prove universal association.
- Brešar, [Finite dimensional zero product determined algebras are generated by idempotents](https://users.fmf.uni-lj.si/bresar/documents/zpdidemp.pdf),
  all13 pages read, SHA256 `4486066421640a97289aa95b661cfb21e10a99be5c1b8894a60b4e36b9f6603c`.
  Lemma3.3 corroborates lifting for arbitrary ideals but cites exchange
  theory. The displayed Bezout proof above replaces that reference.
- Etingof et al., [Introduction to Representation Theory](https://math.mit.edu/~etingof/reprbook.pdf),
  235 pages, SHA256 `ff004d17471bbd344f6c33e6fb9964d49affbf5f111d65167935d7087ece1443`.
  Entire §9.1 pp.213–214 read. Its nilpotent-ideal lifting proof is not
  sufficient for an arbitrary Brauer kernel and is not used as a supplier.

All hashes are of actual downloaded full bodies; reading claims refer only
to listed ranges, except the explicitly stated full13-page paper. No source
is dropped, no unexpanded exercise is used, and no fabricated recovery time
is attached. The primitive-image and six-criteria mathematical interfaces
now have complete local contracts. Independent review, live dependency
validation and the distinct vertex-retention repair remain separate tasks;
this research does not declare B10 accepted.

## Authorized live handoff and bounded checks

After research, root explicitly authorized narrow live integration of both
contracts and their source rows plus RG-14 prose. Updated only the two
existing strategy/dependency fields in batch-10.pages.json; their coverage
argument/dependency/status rows and a new actually fetched AKO source record
in batch-10.coverage.json; and the corresponding RG-14 proof text, order
statement and H4 harvest description in plan-representation-theory-groups-track.md.
The latest vertex-retention/core edits and other pages were preserved.
Inventory remains blocks A37/B4, batch A51/B8=59, no new items or pairs.
The AKO full-body receipt was refreshed at
2026-09-09T13:16:50.657776+00:00, 1,622,621 bytes, with the hash recorded above.

Bounded validators passed: whole-run manifest-deps, 732 items, zero errors;
batch manifest-only content-policy, 59 items, zero errors/warnings; batch
coverage-checklist with required destinations, 146 harvested rows on two A
pages, zero errors/warnings. These are structural checks, not mathematical
acceptance. No engine, canonical ledger, verdict, or live draft was changed.

Final rerun after concurrent out-of-scope work: whole-run manifest-deps
735 items, zero errors; the same 59-item content-policy and 146-row coverage
checks still pass. Source-fetch gate passes: 9/10 fetched, 10/10 resolved
including one pre-existing documented drop. This task added no source drop.
