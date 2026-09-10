# Local AD + DC measure closure — supplementary proof research

2026-09-09. Root read the complete mathematical text of Donald A. Martin,
*A Simple Proof That Determinacy Implies Lebesgue Measurability*, printed
pp393–396 (references p397), at
https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf.
This note supplies the missing measure construction, rational legality,
selection and real-line transfer. It is a proposed local expansion, not an
independent Step-3 verdict. Do not overlap the active reconciliation writer.

Work in **ZF + DC**, adding **AD** only for the final determinacy inference.
Do not use AC in this branch, or claim that AD implies unrestricted DC.
The conclusion here is explicitly the selected AD + DC conditional theorem;
this note alone does not prove the stronger bare-AD statement in the source.

## Published interfaces read

Read full statements and proofs of
`thm-choice-implies-dependent-implies-countable-choice` (use only DC→CC),
`thm-lebesgue-measure-is-a-complete-measure`,
`thm-borel-sets-are-lebesgue-measurable`,
`thm-lebesgue-measure-of-a-box-of-every-kind`,
`thm-continuity-from-above-for-measures`,
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
`thm-monotone-convergence`, `lem-q-and-irrationals-dense-r`, and
`thm-recursion`, and the complete Lebesgue-measure definition.
Use the local `def-cantor-sequence-space-for-descriptive-set-theory` and
`def-axiom-of-determinacy-for-natural-number-games`. Their earlier local
contracts remain subject to independent review.

## 1. Construct precisely the finite measure needed

For t in [0,1), set r_0=t; recursively put e_n=0 if r_n<1/2 and e_n=1
otherwise, and r_{n+1}=2r_n−e_n. The recursion theorem on [0,1) supplies
this unique sequence. Let b(t)=(e_n). Induction gives
0≤r_n<1 and t=Σ_{j<n}e_j2^{−j−1}+2^{−n}r_n. Therefore the inverse image
of a cylinder [s], |s|=n, is the dyadic interval [k/2^n,(k+1)/2^n), where
k is the value of s in binary. This proves both directions of the cylinder
formula, including dyadic endpoints with terminating expansions.

Define M={E⊂2^ω: b^{-1}(E) is Lebesgue measurable}, and for E∈M define
μ(E)=λ(b^{-1}(E)). Preimages commute with complements, countable unions
and disjoint unions. The published complete Lebesgue measure under CC
therefore makes (2^ω,M,μ) a complete probability space, with μ([s])=2^{−n}.
Its Borel sets are in M: every open subset is the union of the cylinders
it contains, indexed by the fixed countable set of finite binary words;
their inverse images are measurable. This is not an appeal to a product
measure theorem, Borel/cylinder equality in arbitrary products, or measure
regularity. Completeness follows directly from Lebesgue completeness.

For arbitrary A⊂2^ω define μ_*(A)=sup{μ(C):C∈M,C⊂A} and
μ^*(A)=inf{μ(D):D∈M,A⊂D}. They exist in [0,1] and μ_*≤μ^* by monotonicity.
Under CC, equality implies A∈M: for each n choose C_n⊂A⊂D_n in M with
μ(D_n)−μ(C_n)<2^{−n}. Put C=⋃C_n and D=⋂D_n. Then C⊂A⊂D and
μ(D\C)≤μ(D_n\C_n)<2^{−n} for all n, so D\C is null and completeness
applies. Here the countable selection is licensed by DC→CC, not silently
by an AD choice claim.

## 2. Rational comparison game and the two estimates

For a rational v∈(0,1], start with v_empty=v. At a legal history with
current value w>0, I plays rationals h_0,h_1∈[0,1] with
(h_0+h_1)/2≥w. II chooses e∈{0,1} with h_e>0; the next value is h_e.
The first illegal move loses; on an infinite legal play I wins iff the
sequence of II's bits belongs to A. Enumerate rational pairs using integer
numerators and positive denominators, choosing canonical reduced codes.
Encode each pair by one natural and II's bit by one natural. This is an
ordinary natural-number game. There are always legal moves: I may play
(1,1), and II may take the least index with positive value. Thus AD applies
without a real-move determinacy assumption.

If I has a winning strategy, its acceptable bit strings form a tree T.
At an acceptable node p let f(p)=v_p, and put f(p)=0 off T. The strategy
dictates the unique preceding history and move at each acceptable p; keep
exactly its positive children. Then
(f(p0)+f(p1))/2≥f(p). Finite induction gives
Σ_{|p|=n}2^{−n}f(p)≥v. The union U_n of acceptable n-cylinders consequently
has μ(U_n)≥v. These are decreasing clopen sets; measure continuity gives
μ([T])≥v. Every branch determines a legal strategy play, so [T]⊂A and
μ_*(A)≥v. All assignments are specified recursions, not arbitrary choices.

Suppose instead II has winning strategy τ. Fix rational δ>0. At each
acceptable p with its assigned τ-compatible history, let u_e be the
infimum of h_e over legal rational pairs to which τ responds e; set
inf(empty)=1. Then (u_0+u_1)/2≤v_p. To prove this without negative illegal
moves, suppose the reverse. For each positive u_e choose a rational
0≤h_e<u_e sufficiently close to u_e; if u_e=0 put h_e=0. The total can
still be made greater than 2v_p. This is a legal pair. A legal response
cannot select an index with h_e=0; at any selected index h_e<u_e contradicts
the defining infimum. This also handles empty response sets (u_e=1).

Keep child pe iff u_e<1. For each kept child select the **least coded**
legal rational pair with τ response e and
h_e<u_e+δ·2^{−|p|−1}, which exists by the infimum property. Its response
is positive and gives that child's assigned history/value. Set f(p)=v_p
on the resulting acceptable tree and f(p)=1 outside it. At level n,
(f(p0)+f(p1))/2≤f(p)+δ·2^{−n−1}; an omitted child contributes 1=u_e,
so it satisfies the same bound. Finite induction yields the level-average
bound v+δ(1−2^{−n}). The union of unacceptable n-cylinders has measure
at most that average, because f=1 there and f≥0 elsewhere. Consequently
the closed branch set C has μ(C)≥1−v−δ, by continuity from above applied
to the acceptable cylinders. Every such branch is a τ-winning play, hence
C⊂2^ω\A. The measurable superset 2^ω\C of A has measure ≤v+δ.
Letting rational δ tend to zero gives μ^*(A)≤v. No unrestricted choice
of near-infimum moves is used: the rational coding gives least witnesses.

## 3. Determinacy and transfer to the actual real line

Assume AD. If μ_*(A)<μ^*(A), take a rational v strictly between them.
AD determines the coded game. I winning contradicts the inner bound;
II winning contradicts the outer bound. Hence the two bounds coincide,
and §1 gives A∈M for **every** subset of 2^ω.

For x∈2^ω define r(x)=sup_n Σ_{j<n}x_j2^{−j−1}∈[0,1]. Boundedness and
monotonicity give existence. The residual estimate in §1 proves
r(b(t))=t for t∈[0,1). For any E⊂[0,1), apply the conclusion to
A=r^{-1}(E). Then E=b^{-1}(A) is Lebesgue measurable by the definition
of M. No assertion that continuous images preserve Lebesgue measurability
is made, and no injective binary expansion choice or exceptional-set
transfer is needed. For arbitrary E⊂R, each
((E∩[k,k+1))−k)⊂[0,1) is measurable. Translation invariance and the
countable union over integers finish. DC supplied CC for the measure and
the approximation selection; AC is never assumed.

## Proposed integration

Fit four ordered contracts into the current A56 inventory (A60 total):
one definition for the pullback family and rational game, one lemma for
the complete coin measure and approximation criterion, one lemma for
the two strategy estimates, and the AD+DC real-line theorem. Preserve the
exact original conditional scope; if a separate bare-AD conclusion is a
binding requirement, keep that stronger obligation explicit rather than
silently weaken it. Record source locators and all published/local deps.
This note establishes no new published defect or published-proof repair.
