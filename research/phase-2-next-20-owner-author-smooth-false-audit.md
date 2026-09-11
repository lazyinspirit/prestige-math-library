# Smooth author: three axiom-sensitive inventory holds

Read-only mathematical support for the smooth author, 2026-09-11. No item,
manifest, coverage, decision, independent record or engine state is changed.
This note does not resolve an owner-held escalation.

## Materials actually read

Read CLAUDE.md and README.md in full; DG-16 design at
`research/plan-differential-geometry-track.md:4108–4305`; the three exact
entries in `research/phase-2-next-20-owner-author-smooth.pages.json`; all of
`research/phase-2-next-20-batch-9.notes.md`; and their three Step 1 decision
JSON records. No canonical item files for these IDs existed at inspection.
The design specifies real vector spaces and explicitly avoids using universal
coefficients for the smooth comparison. Its first two false statements cannot
silently become integer-coefficient examples. The third is explicitly called
“counterexample/reminder,” which is the unresolved design/kind conflict.

Primary source newly retrieved: Robert M. Solovay, *A model of set-theory in
which every set of reals is Lebesgue measurable*, Annals of Mathematics 92
(1970), 1–56, https://people.math.ethz.ch/~fdalio/ZKmodel.pdf . One successful
browser open, no failed fetch/recovery retry for this new source. Read the
extracted introduction through printed p. 4, including Theorem 1 and its
qualifications. This is NOT a full reading or verification of its forcing
proof. The exact useful excerpt is Theorem 1(3), printed p. 1: “Every set of
reals has the property of Baire.” Its actual hypothesis is a transitive
s-model of ZFC plus an inaccessible cardinal; its conclusion also includes
DC. No unqualified ZF consistency claim follows from this inspection. No
existing Hatcher/Park fetch histories were reset or reclassified.

## 1. Exactness of real dualization

ID: `fs-dualizing-every-short-exact-sequence-is-automatically-exact-in-zf`.

**Disposition: retain escalation.** Here is a complete conditional local
witness in the promised real-vector-space domain, with the substantial
metamathematical supplier separated from its elementary algebra. This is a
candidate owner remedy, not a finished nonprovability proof.

Work under ZF + DC and the explicit additional hypothesis (BP): every subset
of the product topological vector space P = R^N has the Baire property.
Using BP on R^N directly avoids silently relying on an unproved transfer
from subsets of R. Let E be the subspace of finitely supported sequences.
Set l(x) = sum_n x_n on E. The finite sum is well-defined and real-linear.

1. P is completely metrizable by
   d(x,y) = sum_{n>=0} 2^(-n-1) min(1,|x_n-y_n|).
   A d-Cauchy sequence is coordinatewise Cauchy; its coordinate limits define
   a sequence in P. Given epsilon, make the geometric tail less than
   epsilon/2, and use convergence in the finitely many remaining coordinates
   for the head. This proves d-convergence and completeness. Under DC the
   Baire category argument applies: inside a nonempty open set and for a
   sequence of open dense sets, choose nested closed balls with positive
   radii tending to zero, each inside the preceding ball's interior and the
   next dense open set. Completeness yields a point in all of them. DC is
   the exact consecutive-choice use. Thus nonempty open subsets of P are
   not meager in P.
2. Let L:P->R be any algebraic real-linear functional. Put
   A_m = {x: |L(x)| <= m} for positive integers m. These cover P. Some A_m
   is nonmeager, because otherwise their countable union would be meager.
   DC supplies the countable choice needed to assemble meager witnesses
   if they were all meager. By BP, A_m differs from an open set O by a
   meager set N. O is nonempty, since A_m is not meager.
3. Choose a in O and a symmetric open neighborhood V of zero such that
   a+V+V is contained in O. For t in V, a+V is contained in both O and
   O-t. The union N union (N-t) is meager. Hence there is b in a+V outside
   that union. Both b and b+t lie in A_m, and linearity gives
   |L(t)| <= 2m. Thus L is bounded on a neighborhood of zero. Scaling that
   neighborhood proves continuity at zero, hence everywhere: for epsilon>0
   choose a positive integer k with 2m/k<epsilon and use (1/k)V.
4. Continuity gives a basic product neighborhood W of zero on which
   |L|<1. There is a finite set F of coordinates such that W restricts
   only those coordinates. If y vanishes on F, then ty lies in W for all
   real t. Therefore |tL(y)|<1 for every t, forcing L(y)=0. In particular
   L(e_n)=0 whenever n is outside F. Such an n exists; it can be the least
   one outside F, with no choice.
5. If L extended l, it would instead satisfy L(e_n)=1 for every n. This
   contradiction proves that l has no extension to P. Consequently the
   algebraically exact sequence
   0 -> E -> P -> P/E -> 0
   has non-surjective dual restriction P* -> E*: its image omits l. The
   quotient, injection, quotient map and l are all explicitly defined.
   No basis of P or P/E is selected.

This proves the conditional counterexample, not its consistency with ZF.
For a genuine “not provable in ZF” statement the owner must provide a
permitted proved model-construction supplier, plus the transfer of the Baire
property from R to P, or authorize a precise conditional BP formulation.
The Solovay theorem's mere statement/citation and the library's Recorded
Solovay entry cannot supply those proofs. The model construction is a
substantial unmet prerequisite, not an LL local lemma to invent here.
There is no claim that ZF proves the negation: ZFC proves dual exactness.

Under AC the positive proof is short and eliminates any prospect of an
ordinary ZFC real-vector-space witness. For A subset B and a functional
f on A, choose a basis of A, extend it to a basis of B, assign the given
values on the first basis and zero on the complement, and extend linearly.
This is precisely the noncanonical basis-extension choice absent from the
simplex-basis extension-by-zero lemma.

## 2. Dualizing a quasi-isomorphism

ID: `fs-a-homology-isomorphism-of-chain-complexes-automatically-gives-a-cohomology-isomorphism-after-dualizing-without-further-machinery`.

**Disposition: retain escalation.** Under the exact conditional assumptions
of Section 1 there is a full witness. In homological degrees 2,1,0 put
C_2=E, C_1=P, C_0=P/E, with differentials the inclusion and quotient;
all other groups and differentials are zero. The composite is zero,
the inclusion has zero kernel, the quotient's kernel is E, and the quotient
is surjective. Thus every homology group of C is zero. The zero chain map
C->0 is therefore a quasi-isomorphism in all degrees.

The real dual cochain complex in degrees 0,1,2 is
(P/E)* -> P* -> E*, with its second arrow restriction. Its differential
out of E* is zero. Section 1 gives the explicit nonzero class
[l] in H^2(C*) = E*/im(P*->E*). The dual map 0->C* therefore fails to
induce a cohomology isomorphism in degree 2. This uses no integer
coefficients, no unverified field change, and no infinite choice of vectors.
It has the same unresolved model/axiom prerequisite as Section 1.

For comparison, the following proof establishes why the unqualified
real-vector-space assertion is TRUE under AC. For a chain complex C, set
Z_n=ker d_n and B_n=im d_(n+1). A cocycle f:C_n->R vanishes on B_n, so
restriction to Z_n gives a functional on H_n=Z_n/B_n. Coboundaries vanish
on Z_n, so this defines a canonical map
H^n(C*) -> Hom_R(H_n(C),R).

Surjectivity: given h:H_n->R, compose with Z_n->H_n and extend from
Z_n to C_n using basis extension under AC. The extension vanishes on B_n
and hence is a cocycle. Injectivity: if a cocycle f vanishes on Z_n,
define b:B_(n-1)->R by b(d_n c)=f(c). This is well-defined because two
choices of c differ by an element of Z_n. Extend b to C_(n-1) under AC.
Then f=b composed with d_n, so f is a coboundary. In degree zero of a
nonnegative complex, Z_0=C_0 and the kernel case already gives f=0,
requiring no negative-degree extension. Naturality follows directly from
restriction and precomposition. A homology isomorphism therefore induces
an isomorphism of these Hom spaces and hence of dual cohomology groups.

“Without further machinery” is a warning about an unjustified proof step,
not a mathematical predicate with an ordinary counterexample. The owner
must select a precise axiom-sensitive claim before authoring this as false.
If the intended domain is all modules and arbitrary dual coefficients,
the familiar integer complex Z --2--> Z -> Z/2 is acyclic but its
Hom_Z(-,Z) dual has H^2=Z/2. That calculation is sound but is a domain
change; it is explicitly NOT proposed as a silent repair here.

## 3. Hom of homology as a definition

ID: `cex-hom-of-homology-is-not-used-as-the-definition-of-singular-cohomology`.

**Disposition: retain design-kind escalation.** The design's real singular
cohomology is by definition ker(delta)/im(delta). The claim that this
definition was not replaced by a different construction is a true statement
about the chosen definition, not a mathematical assertion refuted by a
witness. Conversely, a claim that real cohomology is not naturally
isomorphic to Hom of real homology under AC is false, by the full proof in
Section 2. A literal distinction between quotient sets and function sets
does not constitute the intended mathematical counterexample.

Owner remedies preserving the identity's educational purpose: reconcile
the kind to a remark explaining the actual definition and the theorem
needed for identification; or supply an explicit owner-approved mathematical
target and domain for a real counterexample. No such change is authorized
by this note. The BP chain complex is not a singular chain complex of a
space, so it cannot be represented as a counterexample about singular
cohomology merely by reusing its cohomology calculation.

## Handoff and checks

No assigned ID is marked authored or complete by this support audit. The
two real-vector-space conditional witnesses are fully derived above; the
model theorem, Baire-property transfer and precise owner wording remain
open. The third ID still needs owner kind/claim reconciliation. No published
defect is certified; no ledger edit is requested from this limited audit.
No precheck, rendering or proof-contract checks were run because this task
created only this research note and no publication candidate/contract.
