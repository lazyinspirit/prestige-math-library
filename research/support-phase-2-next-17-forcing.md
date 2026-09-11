# Authoring support: dense forcing maps and Boolean completion

Date: 2026-09-12 (Australia/Sydney).

This is an isolated mathematical support package for the reopened batch-11
item `thm-forcing-equivalence-and-boolean-completion` and its proposed local
supplier `lem-dense-forcing-name-translations-preserve-forcing`. It is not an
item decision, certification, acceptance, manifest registration, or workflow
transition. No claim below depends on a generic filter existing through every
condition. The proofs are local derivations from the current forcing clauses.

## 1. Scope and dependency placement

At inspection, the theorem's item file and the proposed supplier's item file
were absent. The original theorem contract remains in
`research/phase-2-next-17-batch-11.pages.json`: every forcing preorder is
forcing-equivalent to its separative quotient and its regular-open Boolean
completion; dense maps translate generics, names, valuations, and forced
formulas in ZF, without BPI or AC. The owner direction requires the new supplier
before that theorem on the existing
`the-forcing-theorem-and-formal-consistency-transfer` A page.

Suitable direct dependencies for the new lemma are:

- `def-forcing-names-and-name-rank` and
  `thm-recursion-on-well-founded-setlike-relations`, for the two name maps;
- `def-dense-open-sets-and-model-generic-filters` and
  `def-forcing-name-valuation-and-generic-extension`, for generics and valuation;
- `def-forcing-relation-for-atomic-formulas`,
  `lem-atomic-forcing-relation-is-well-founded-and-definable`, and
  `def-forcing-relation-for-formulas`, for the internal forcing recursions;
- `lem-forcing-monotonicity-density-and-decision`, for persistence, density
  closure, and meeting dense sets below a condition in a generic filter.

The equality/substitution argument below is supplied locally, not assumed from
the truth lemma. The new lemma does not need `thm-forcing-theorem` to establish
syntactic transfer. The consumer theorem can retain its declared forcing-theorem
dependency when explaining the semantic consequences.

The completion application additionally uses
`lem-separative-quotient-of-a-forcing-preorder`,
`thm-forcing-preorders-have-regular-open-completions`,
`def-boolean-valued-name-semantics`, and
`lem-boolean-valued-semantics-is-well-defined`. Section 8 supplies the actual
Boolean-value comparison that those last two items do not themselves assert.
An author may keep that comparison inside the theorem or fully author an
additional local lemma before it, following the owner's registration rules.

## 2. Item-ready statement

Work in ZF. Let P and Q be nonempty set preorders, with smaller conditions
stronger. Let e:P→Q satisfy:

1. p≤r implies e(p)≤e(r);
2. e(p),e(r) are compatible if and only if p,r are compatible;
3. for every q∈Q there is p∈P with e(p)≤q.

Call these the dense-map hypotheses within this lemma. They deliberately allow
e to be noninjective and not to reflect the original order: the separative
quotient map must qualify. An order embedding with dense range satisfies these
hypotheses, but a merely complete embedding need not have dense range and is
outside this lemma.

Define the forward translation T and inverse translation S recursively, with
the repository's name-first pair convention:

\[
 T\tau=\{\langle Tu,e(p)\rangle:\langle u,p\rangle\in\tau\},
 \qquad
 S\sigma=\{\langle Sv,p\rangle:
       \exists q\ (\langle v,q\rangle\in\sigma\land e(p)\le q)\}.
\]

The quantifiers in the second display range over entries of σ and the set P;
no representative or refinement function is chosen. Then:

- Every condition of Q forces TSσ=σ, and every condition of P forces STτ=τ.
- For each fixed membership formula φ, each tuple of P-names τ, and each p∈P,
  \[
  p\Vdash_P\varphi(\vec\tau)
    \quad\Longleftrightarrow\quad
  e(p)\Vdash_Q\varphi(T\vec\tau).
  \tag{F}
  \]
- For each tuple of Q-names σ,
  \[
  p\Vdash_P\varphi(S\vec\sigma)
    \quad\Longleftrightarrow\quad
  e(p)\Vdash_Q\varphi(\vec\sigma).
  \tag{I}
  \]
  More generally, for every q∈Q,
  \[
  q\Vdash_Q\varphi(\vec\sigma)
   \quad\Longleftrightarrow\quad
  \forall p\in P\ [e(p)\le q\Rightarrow
                  p\Vdash_P\varphi(S\vec\sigma)].
  \tag{I-all}
  \]

All assertions can be carried out internally in any transitive ZF ground M
containing P,Q,e and their orders. In that version all names and quantified
forcing predicates are M's; no external completeness, countability, or
existence of generics is required.

For supplied M-generic filters the following maps are inverse bijections:

\[
 G\longmapsto e_*G=\{q\in Q:\exists p\in G\ e(p)\le q\},
 \qquad H\longmapsto e^*H=e^{-1}[H].
\]

For corresponding G,H,

\[
 (T\tau)_H=\tau_G,\qquad (S\sigma)_G=\sigma_H,
 \qquad M[G]=M[H].
\]

The final display is conditional on the supplied generic. No assertion that
such filters exist is part of the lemma.

## 3. Refinement and generic-filter proofs

### 3.1 Finite lifting property

If q≤e(p₁),…,e(pₙ), there is r≤p₁,…,pₙ with e(r)≤q. For n=0 use density.
For n>0 first take s with e(s)≤q. Then e(s) is compatible with e(p₁), so s
is compatible with p₁; take s₁≤s,p₁. Its image remains below q and hence
below every e(pᵢ). Repeating finitely many times gives r. This constructs one
finite chain of existential witnesses for the conditions under discussion,
not a function choosing lifts for all q.

In particular, {e(r):r≤p} is dense below e(p). Also, for every dense D⊆P,
e[D] is dense in Q: first refine an arbitrary q to e(p), then take d≤p in D.
For every dense E⊆Q the set

\[
 D_E=\{p\in P:\exists q\in E\ e(p)\le q\}
\]

is dense in P. Given p, first take q≤e(p) in E and lift below p.
All displayed sets belong to M when their parameters do, by Separation and
Replacement. Dense sets need not be open in these arguments.

### 3.2 Pullback

Let H be M-generic on Q and G=e⁻¹[H]. For every ground dense D⊆P, H meets
the ground dense set e[D], so G meets D. Taking D=P proves nonemptiness.
Order preservation proves upward closure.

For p₀,p₁∈G consider the ground set

\[
 D=\{r:r\perp p_0\text{ or }r\perp p_1\text{ or }r\le p_0,p_1\}.
\]

It is dense: given r, either it is incompatible with p₀, or refine below p₀;
then either that refinement is incompatible with p₁, or refine once more below
p₁. G meets D because H meets e[D]. The incompatible alternatives would put
incompatible image conditions together in H, impossible for a filter. Thus
G contains a common refinement of p₀,p₁. G is a filter and is M-generic.

### 3.3 Pushforward

Let G be M-generic on P. Its image-generated upward closure H=e_*G is a
nonempty filter: take a common refinement in G of the two witnesses used for
two members of H and apply order preservation. For ground dense E⊆Q, G meets
D_E from 3.1. The associated q∈E belongs to H, so H is M-generic.

We have e_*e^*H=H. The forward inclusion uses upward closure. For the reverse
inclusion, if q∈H, the ground set {e(p):e(p)≤q} is dense below q. The generic
H meets it, giving p∈e^*H and e(p)≤q.

We also have e^*e_*G=G. Only the inclusion into G needs proof. Suppose r∈G
and e(r)≤e(p). Every s≤r has image compatible with e(p), hence s is
compatible with p. Thus r≤*p, with ≤* the separative preorder. G meets
the ground dense set {s:s≤p or s⊥p}. It cannot meet the incompatible part:
a common refinement in G with r would contradict r≤*p. Therefore p∈G.
This is the necessary generic saturation argument when e fails to reflect ≤.

## 4. Name recursion and valuation

The descendants of any given name form a set by iterating first-coordinate
extraction through ω. Define T on the P-descendant cone and S on the
Q-descendant cone by well-founded recursion. T's step is a Replacement image
of the current name; S's step is a Replacement image of a definable subset of
the product of its entry set with P. Each step produces a set of pairs whose
first coordinates are already names. The name construction in
`def-forcing-names-and-name-rank` makes it a name, and induction gives
rk(Tτ)≤rk(τ) and rk(Sσ)≤rk(σ).

Uniqueness makes these recursions agree on overlapping descendant cones, so
they define class functions by first-order formulas, with each value a set.
Inside transitive M the same constructions yield values in M. The cones,
coefficients, and order tests agree, so the internally constructed translated
names agree with the external ones. This assertion does not compare the
quantified forcing relations of different ground models.

For corresponding generics, e(p)∈H iff p∈G by Section 3. Recursion on τ
in the valuation equation immediately gives (Tτ)_H=τ_G. For S, use

\[
 q\in H\quad\Longleftrightarrow\quad
 \exists p\in G\ e(p)\le q.
\]

This replaces exactly the active coefficients in σ by the active pairs in
Sσ. Induction on σ gives (Sσ)_G=σ_H. Both translations stay in M, so every
valuation on either side has a name on the other, proving M[G]=M[H].

## 5. Equality and substitution, proved from the clauses

This section applies to either forcing preorder R. It must precede any appeal
to substitution in the transfer proof.

### 5.1 Equivalence properties of forced equality

Every r forces a=a. Induct on the rank of a. For each entry (u,s) of a and
q≤r,s use the same entry as the subset witness; the induction hypothesis gives
q⊩u=u. Symmetry is part of the equality definition.

Transitivity follows by induction on the decreasingly sorted triple of name
ranks of (a,b,c), ordered lexicographically. This is well-founded on the set
of descendant triples: first minimize the largest ordinal, then the second,
then the third. Suppose r⊩a=b and r⊩b=c. For an entry (u,s)∈a and q≤r,s,
the first subset clause gives q₁≤q, an entry (v,t)∈b, q₁≤t, and q₁⊩u=v.
The second subset clause, tested at q₁, gives q₂≤q₁, (w,h)∈c, q₂≤h, and
q₂⊩v=w. Persistence gives q₂⊩u=v. The smaller triple (u,v,w) has all
three respective ranks strictly decreased, so induction gives q₂⊩u=w.
This proves r⊩a⊆c. Using c⊆b⊆a in precisely the same construction proves
r⊩c⊆a. Thus r⊩a=c.

### 5.2 Atomic substitution

Suppose r⊩a=a′ and r⊩b=b′. Forced a=b transfers to a′=b′ by symmetry
and transitivity; the converse interchanges primes.

If additionally r⊩a∈b, then for any q≤r obtain q₁≤q and (u,s)∈b with
q₁≤s and q₁⊩a=u. Apply r⊩b⊆b′ to this entry at q₁, obtaining q₂≤q₁
and (v,t)∈b′ with q₂≤t and q₂⊩u=v. Persistence, symmetry, and
transitivity give q₂⊩a′=v. This is the membership witness required for
r⊩a′∈b′. Again, reversing primes proves the converse. Repeated variables
and replacement in either coordinate are covered by these two arguments.

### 5.3 All fixed formulas

For any fixed φ and equalities r⊩aᵢ=bᵢ for its finitely many free parameters,

\[
 r\Vdash\varphi(\vec a)\quad\Longleftrightarrow\quad
 r\Vdash\varphi(\vec b).
 \tag{Sub}
\]

Induct on formula complexity. At conjunction use the induction hypothesis
twice. At negation, a counterexample q≤r forcing the matrix with b-parameters
also forces all parameter equalities by persistence, so the matrix induction
converts it to a counterexample with a-parameters; reverse the roles for the
other implication. At an existential, each q≤r has a stronger matrix-witness
condition. Keep that same witnessing name, use its reflexive equality together
with the parameter equalities at that stronger condition, and apply the matrix
induction. This preserves dense witnesses in both directions. Bound variables
are renamed before substitution as in the current formula definition.

This proof invokes no semantic characterization, generic existence, maximum
principle, antichain, or simultaneous choice of witnesses.

## 6. Atomic transfer and the actual round trips

### 6.1 Atomic transfer for T

Prove first, by induction on the sorted pair of ranks of P-names a,b,

\[
 p\Vdash_P a=b\quad\Longleftrightarrow\quad
 e(p)\Vdash_Q Ta=Tb.
 \tag{A=}
\]

For the forward subset direction, fix an entry (Tu,e(s))∈Ta with origin
(u,s)∈a, and let q≤e(p),e(s). The finite lifting property gives r≤p,s
with e(r)≤q. Apply p⊩a⊆b at r: obtain t≤r and (v,h)∈b with t≤h
and t⊩u=v. The smaller-pair induction gives e(t)⊩Tu=Tv, while
e(t)≤q,e(h). This is the required Q-subset witness. Exchange a,b for
the other subset direction.

Conversely, fix (u,s)∈a and r≤p,s. Apply e(p)⊩Ta⊆Tb at e(r).
It gives q≤e(r), (Tv,e(h))∈Tb with originating (v,h)∈b, q≤e(h),
and q⊩Tu=Tv. Lift q below r and h, obtaining t≤r,h with e(t)≤q.
Persistence and the smaller-pair induction give t⊩u=v. This proves the
P-subset clause; exchanging a,b gives equality. Every induction call uses
proper subnames of both input names. Taking an origin for one displayed pair
is one existential instantiation, even when translations identify entries.

Having proved (A=) for every pair, prove the analogous membership equivalence.
Forwards, given q≤e(p), lift to r≤p with e(r)≤q; a P-membership witness
t≤r with t≤h and t⊩a=v becomes the Q-witness e(t). Backwards, given
r≤p, take a Q-membership witness q≤e(r),e(h) forcing Ta=Tv, and lift
it to t≤r,h. Persistence and (A=) give t⊩a=v. These witnesses establish
both directions of the membership clause.

### 6.2 The Q round trip

Put Cσ=TSσ. Its literal defining expansion is

\[
 C\sigma=\{\langle Cv,e(p)\rangle:
       \langle v,q\rangle\in\sigma,\ e(p)\le q\}.
 \tag{C}
\]

Thus a coefficient q is replaced by **all** image coefficients below q,
which form a dense family below q. It is not in general retained as the
same coefficient, and Cσ is not asserted to equal σ as a set.

Induct on rk(σ) to prove that every a∈Q forces Cσ=σ. For Cσ⊆σ, an
entry (Cv,e(p)) has an origin (v,q)∈σ with e(p)≤q. At any
b≤a,e(p), use (v,q) and b itself as witness: the rank induction gives
b⊩Cv=v, and b≤q. For σ⊆Cσ, take (v,q)∈σ and b≤a,q.
Density gives p with e(p)≤b; then (Cv,e(p))∈Cσ. The rank induction
and symmetry give e(p)⊩v=Cv, so e(p) is the required witness. Both
subset clauses are now proved at a, with no global choices of p.

### 6.3 The P round trip

Apply 6.2 to the Q-name Tτ. Every e(p) forces
T(STτ)=TS(Tτ)=Tτ. Applying (A=) to the P-names STτ and τ gives
p⊩STτ=τ. There is no need to assume this round trip is literal either:
its expansion is

\[
 ST\tau=\{\langle STu,r\rangle:
        \langle u,p\rangle\in\tau,\ e(r)\le e(p)\}.
\]

For an order-reflecting embedding this includes all stronger coefficients
r≤p; for the quotient map it includes all r≤*p. In either situation the
proved conclusion is forced equality. Referring to ST as an actual inverse
on raw names would be a mathematical error.

## 7. Formula preservation with unrestricted ground-name witnesses

Induct on each fixed finite formula to prove (F). The atomic cases are 6.1;
conjunction is immediate.

For negation, suppose p⊩P¬ψ(τ). If q≤e(p) forced ψ(Tτ), lift q to
r≤p with e(r)≤q. Persistence and matrix transfer would give r⊩Pψ(τ),
a contradiction. Conversely, if e(p)⊩Q¬ψ(Tτ), any r≤p forcing ψ(τ)
would yield e(r)≤e(p) forcing ψ(Tτ), again a contradiction.

For the forward existential direction, suppose p⊩P∃xψ(x,τ). Given
q≤e(p), lift to r≤p with e(r)≤q. Obtain t≤r and a P-name u such that
t⊩Pψ(u,τ). Matrix transfer gives e(t)⊩Qψ(Tu,Tτ), providing a dense
witness below q.

For the reverse existential direction, suppose
e(p)⊩Q∃xψ(x,Tτ). Given r≤p, obtain q≤e(r) and a **Q-name** σ with
q⊩Qψ(σ,Tτ). Lift q to t≤r with e(t)≤q. At e(t), Section 6.2 forces
TSσ=σ. Substitution for the matrix from Section 5 therefore gives

\[
 e(t)\Vdash_Q\psi(T(S\sigma),T\vec\tau).
\]

The matrix instance of (F), which holds for every tuple of P-names, now
gives t⊩Pψ(Sσ,τ). Hence P-witnesses are dense below p. The source of
the inverse witnessing name is the explicitly defined Sσ; neither a single
maximum-principle witness nor selected representatives are needed.

This closes the formula induction without any circular use of the desired
existential theorem. The substitution induction in Section 5 was already
completed independently of transfer.

For (I), apply (F) to Sσ and then replace TSσ by σ using 6.2 and (Sub).
For (I-all), the forward implication uses persistence and (I). For the
reverse implication, the hypothesis and (I) make the conditions forcing
φ(σ) dense below q, since the image of P is dense there. Density closure
gives q⊩φ(σ).

Everything up to this point is a theorem of ZF about the internally defined
relations. Interpreting the argument in an arbitrary transitive ZF M proves
the requested ground-relative assertions. All existential name quantifiers
then range over M's names, and Sσ belongs to M. Truth in all existing generic
extensions was never used to infer a forcing assertion, so no hidden
generic-existence premise enters.

## 8. Application and Boolean-value comparison for the consumer theorem

### 8.1 The two concrete maps

The map π:P→P/∼ from
`lem-separative-quotient-of-a-forcing-preorder` preserves order and preserves
and reflects compatibility. It is surjective and therefore has dense range.
Apply Sections 2–7 directly. Its inverse name translation uses all p with
[p]≤[q], not a choice of one representative of each quotient condition.

Inside M, let B be the regular-open Boolean completion constructed in
`thm-forcing-preorders-have-regular-open-completions`, and put Q=B⁺=B∖{0}.
The map e(p)=int(cl(↓p)) has dense image, preserves order, and preserves and
reflects compatibility by that theorem. Apply the same lemma, either directly
to P or after π. For an arbitrary preorder e need not be an order embedding;
the lemma's weaker dense-map hypotheses are exactly what is required.

If the completion is constructed internally, B consists of M's regular-open
sets and is complete for M's subsets. The proof below is internal to M and
does not claim B is externally complete.

### 8.2 A Boolean density calculation

In a complete Boolean algebra, for a set A⊆B and b>0,

\[
 \{c>0:\exists a\in A\ c\le a\}
 \text{ is dense below }b
 \quad\Longleftrightarrow\quad b\le\bigvee A.
 \tag{BD}
\]

If b is not below the join, c=b∧¬∨A is a nonzero condition below b
with no such refinement. Conversely, if 0<c≤b≤∨A, some a∈A has
c∧a>0: otherwise each a≤¬c, hence ∨A≤¬c, contradicting 0<c≤∨A.
Then c∧a is the required refinement. The same calculation applies when
b=0 by taking density below zero to be vacuous solely in this algebraic
calculation; zero is never a forcing condition. This proof uses no choice
and only completeness for the one set A.

### 8.3 Comparing B⁺-forcing with restricted Boolean semantics

Temporarily define Boolean values using only B⁺-names, with existential
values the join of the attained matrix values on these names. The same
well-definedness proof as the existing Boolean semantics lemma applies:
Separation on B forms the attained-value set.

For B⁺-names a,b, sorted-pair rank induction gives

\[
 c\Vdash_{B^+}a=b\iff c\le E(a,b),\qquad
 c\Vdash_{B^+}a\in b\iff c\le I(a,b).
 \tag{BV-atom}
\]

For membership, the recursively available equality comparison and (BD)
identify the dense witness clause with
c≤∨{d∧E(a,u):(u,d)∈b}=I(a,b).
For a subset clause, each entry (u,d)∈a requires equality/coefficient
witnesses densely below c∧d, equivalently c∧d≤I(u,b), or
c≤¬d∨I(u,b). Taking the meet over entries gives its Boolean subset
factor. Interchanging a,b gives the other factor and hence equality.
The calls to I(u,b), I(u,a), or E(a,u) lower the sorted pair of ranks;
thus these comparisons can be proved together by that induction.

Formula induction now gives

\[
 c\Vdash_{B^+}\varphi(\vec a)
 \quad\Longleftrightarrow\quad
 c\le\|\varphi(\vec a)\|_+.
 \tag{BV+}
\]

Conjunction is meet. The negation clause says that no nonzero d≤c is
below the matrix value v, equivalently c∧v=0, or c≤¬v. For an
existential, take A to be the set of matrix values attained by B⁺-names;
the matrix induction and (BD) give exactly c≤∨A. This last step uses
dense individual name witnesses and never asserts an attained maximum.

### 8.4 Removing the zero-coefficient discrepancy

The existing `def-boolean-valued-name-semantics` allows zero coefficients, so
its names must not silently be identified with B⁺-names. Define recursively

\[
 Z\sigma=\{\langle Zu,b\rangle:(u,b)\in\sigma,\ b\ne0\}.
\]

Zσ is a B⁺-name, and Zτ=τ literally for a B⁺-name τ, by rank
induction. Sorted-pair induction in the two atomic Boolean equations shows

\[
 E_B(\sigma,\rho)=E_+(Z\sigma,Z\rho),\qquad
 I_B(\sigma,\rho)=I_+(Z\sigma,Z\rho).
\]

For membership, zero-coefficient summands vanish; the remaining summands
agree by equality induction. For equality, zero-coefficient meet factors
are 1, while the remaining factors agree by membership induction. Possible
duplicate translated entries only duplicate equal meet/join terms.

Induct on formulas to obtain

\[
 \|\varphi(\vec\sigma)\|_B
   =\|\varphi(Z\vec\sigma)\|_+.
\]

At the existential step, the matrix induction identifies the value attained
by any B-name σ with the value attained by Zσ; conversely every B⁺-name
is itself a B-name and is fixed by Z. Thus the two sets of attained values
are equal, so their joins agree. Together with (BV+) this proves

\[
 c\Vdash_{B^+}\varphi(Z\vec\sigma)
   \quad\Longleftrightarrow\quad
 c\le\|\varphi(\vec\sigma)\|_B.
 \tag{BV}
\]

Tτ has no zero coefficients, so (F) and (BV) give the theorem's full
comparison for every p∈P:

\[
 p\Vdash_P^M\varphi(\vec\tau)
 \quad\Longleftrightarrow\quad
 e(p)\le_B\|\varphi(T\vec\tau)\|_B^M.
\]

For an arbitrary Boolean name σ with zero coefficients, the representative-
free P-name corresponding to it is S(Zσ). If H⊆B⁺ is generic, zero entries
never contribute to valuation; induction gives (Zσ)_H=σ_H. This completes
both the syntactic and valuation comparison with the existing Boolean-name
convention.

## 9. Axiom and dependency boundaries

Only ZF recursion, Separation, Replacement, and elementary preorder/Boolean
arguments occur. The generic-filter assertions take generic filters as
parameters. They do not extend arbitrary filters, invoke BPI, choose maximal
antichains, or apply a maximum principle. Dense witnesses are instantiated
one condition at a time. An existential witness class is handled by its
definable set of witnessing conditions or attained Boolean values; no set of
all names is formed.

No full-transitive-ground assumption is weakened: the ground is any transitive
model of ZF, as in the existing forcing definitions. Formula assertions are
schemes for fixed finite formulas. They are not a uniform truth predicate for
the universe and do not assert forcing absoluteness between different models.
No item from the recorded-results catalogue is used.

Local mathematical self-checks performed while preparing this package:

- Checked both direction arrows in the common-refinement lifting argument.
- Checked that generic pullback is directed, not merely upward closed and
  dense-set meeting, and that inverse pushforward uses generic saturation.
- Expanded both raw name round trips and replaced literal inverse claims
  by the proved forced equalities.
- Ordered the proofs as substitution → atomic transfer → round-trip equality
  → formula transfer, so the reverse existential uses only already proved
  facts and the matrix induction.
- Checked the Boolean zero/name convention and the attained-value argument.

These are authoring checks, not an independent mathematical review or a build
gate. The parent/operator still has to author/register actual items, reconcile
contracts and dependencies, and run the current workflow's required gates.

## 10. Primary-source reading and its limits

Read the live [Karagila forcing notes](https://karagila.org/files/Forcing-2023.pdf),
Definitions 2.28–2.33, Propositions 2.30 and 2.32, and Theorem 2.34, printed
pp.11–13. These establish the standard map interfaces and regular-open
completion. The live PDF now identifies its last update as August 24, 2026,
despite the `Forcing-2023.pdf` filename; the relevant numbering was checked.
The manifest's phrase “Theorems 2.31 and 2.34” should be corrected when the
author updates its sources: 2.31 is a definition in the retrieved text.

Read [Neeman's 2011 forcing notes](https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf),
the proof of Theorem 1.16 through its equality, membership, negation,
conjunction, and existential cases, printed pp.4–8. Those passages support
the recursive forcing/dense-witness approach. The present package uses the
repository's precise common-extension clauses, not an unexamined transfer of
source notation.

Neither source reading is represented as a source proof of this entire
choice-free name-translation package. Sections 3–8 contain the local
derivations needed to close that gap. The source text's standing countable-
ground conventions are not used to justify preservation over arbitrary
transitive ZF grounds.
