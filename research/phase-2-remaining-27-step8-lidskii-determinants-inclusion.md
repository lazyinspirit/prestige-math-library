# Minimal inclusion proposal under the owner's external-result authorization

Date: 2026-09-22. This supersedes the earlier report's recommendation to defer
the two topics: the mathematical gap remains, but the owner now authorizes
including results whose proofs visibly depend on recorded external results.
Only this proposal was written; no items, shared metadata or engine state were
changed by this investigator.

## Proposed existing-page inventory

Append the following four carriers, in this order, to the existing
`compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` A page:

1. `rem-external-separable-trace-class-fredholm-determinant-theorem`.
2. `def-fredholm-determinant`.
3. `prop-fredholm-determinant-properties-for-trace-class-operators`.
4. `thm-lidskii-for-trace-class-operators`.

This includes both requested topics with one recorded external prerequisite.
It does not purport to implement the future fourteen-item module. Existing
positive trace remains unchanged. Replace the page's final assertion that
general Lidskii is not claimed with a precise explanation that the new
determinant and Lidskii results use the recorded external determinant theorem.
The former deferral evidence must be reconciled by the scope lead.

Every new definition/proof carrier must contain the exact visible sentence:

> proof uses external results not yet established in this library

Put the external remark in `deps` for all three consumers (directly or through
the genuine prerequisite chain), with a body wikilink at its actual use.
Do not use `external_refs` for this load-bearing relationship: SCHEMA and
`tools/extcheck.mjs` derive the unproved dependency marker from `deps` reaching
`proved_here: false`. Never mark the proof-bearing consumers themselves
`proved_here: false`; that flag requires a remark with no Proof section.

## External record: exact contract

Use `kind: remark`, `status: draft`, `origin: pipeline`,
`pipeline_run: phase-2-remaining-27`, `proved_here: false`,
`provenance.statement: literature-derived`, `provenance.proof: not-supplied`,
and `verification.precheck: n/a`. Do not attach a judge stamp or Proof section.
Source reference URL and `external_dependency.source_url` must both be
`https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf`.

**Exact statement to record, with full AC explicitly assumed:** Let K be a
separable complex Hilbert space, including the zero space. For A in S1(K),
there is an entire function D_A with the following properties. Nonzero
eigenvalues lambda_j(A) are listed with algebraic multiplicity, where the
multiplicity of lambda is the dimension of the stabilized generalized kernel
union over m>=1 of ker(A-lambda I)^m. This dimension is finite. A finite list
is permitted; the empty product is 1 and the empty sum is 0.

- `sum_j |lambda_j(A)| <= ||A||_1` and
  `D_A(z) = product_j (1+z lambda_j(A))`, locally uniformly in z.
- For every sequence of finite-rank A_n with `||A_n-A||_1 -> 0`,
  `det(I+z A_n) -> D_A(z)` locally uniformly. For a finite-rank F the
  determinant means the ordinary determinant of `(I+zF)|E` for any
  finite-dimensional subspace E containing ran F; it is independent of E.
- `D_A(0)=1`, `D_A'(0)=tr_K(A)`, and
  `|D_A(z)| <= product_j(1+|z|s_j(A)) <= exp(|z| ||A||_1)`.
  For every epsilon>0 there is C_epsilon with
  `|D_A(z)| <= C_epsilon exp(epsilon |z|)`.
- `|D_A(z)-D_B(z)| <= |z| ||A-B||_1
  exp(1+|z| ||A||_1+|z| ||B||_1)` for A,B in S1(K).
- `D_(A+B+AB)(1)=D_A(1)D_B(1)`.
- `D_A(z)=0` iff I+zA is not boundedly invertible; if lambda is nonzero,
  `-1/lambda` is a zero of order its algebraic multiplicity.

The record includes all of these as **external results**, not locally proved
assertions. Reference locators: Kostenko §3.4, Theorems 3.4.2 and 3.4.4,
equation (3.4.14), Proposition 3.4.3, Corollaries 3.4.1–3.4.2,
Theorems 3.4.6–3.4.7, printed pp.36–41; the coefficient at zero is equation
(3.4.16). The finite-rank limit follows from Theorem 3.4.4, uniformly on
bounded z; finite-dimensional determinant compatibility is the opening of
§3.4.3. The finite-dimensional enlargement independence follows by a block
triangular matrix with identity block on E/ran F. Zero-space conventions are
immediate finite-dimensional conventions, not a nonexistent normalized
Banach-algebra spectrum on the zero space.

Suggested `external_dependency` prose:

- `exact_statement`: reproduce the entire preceding contract, including
  algebraic multiplicities, norm topology and derivative at zero.
- `local_proof_attempt`: "Current SVD, nuclear trace, trace-ideal and Riesz
  suppliers establish finite-rank approximation and separable support, but
  do not establish the exterior-power determinant estimates, nonnormal Weyl
  eigenvalue summability, determinant zero multiplicities or minimal-type
  factorization. A full local construction was investigated and would require
  the separate prescribed determinant module; these precise separable
  determinant assertions are recorded externally under owner authorization."
- `necessity`: "Supplies the determinant's approximation-independent
  construction and spectral product for the local arbitrary-Hilbert-space
  extension and Lidskii trace formula; positive/self-adjoint trace is
  insufficient for nonnormal operators."

## Definition and its complete well-definedness argument

**Definition statement.** Assume AC. For a complex Hilbert space H and
T in S1(H), choose a nuclear representation
`Tx=sum_j <x,u_j>v_j`, with `sum_j ||u_j||||v_j||<infinity`.
Let `M=closure span{u_j,v_j:j>=1}` and S=T restricted to M. Define
`det_H(I+zT)=D_S(z)`, where D is the recorded separable determinant. This
definition is independent of the representation and of the separable closed
reducing support M with T zero on M-perp. For H={0}, define it to be 1.

**Well-definedness argument.** Nuclear series exist by
`lem-nuclear-series-characterizes-trace-norm`. Finite rational-complex linear
combinations of the listed u_j,v_j give a countable dense set in M. For x in
M-perp all coefficients vanish, so Tx=0, and the series places ran T in M.
Thus relative to H=M orthogonal-sum M-perp one has T=S direct-sum 0. The
orthogonal decomposition follows from
`thm-orthogonal-decomposition-by-a-closed-subspace`. S is compact: a bounded
sequence in M is bounded in H, compactness of T yields a convergent image
subsequence, and the limit lies in closed M. S is nuclear with the same data
in M, hence trace class by the nuclear characterization. A Hilbert basis of
M plus one of M-perp (AC) gives the block matrix, or equivalently the compact
positive-square-root uniqueness identifies `|T|=|S| direct-sum 0`.
Consequently the nonzero singular values and their multiplicities agree;
`||S||_1=||T||_1`. Nuclear trace sums give `tr_M(S)=tr_H(T)`.

For lambda nonzero,
`(T-lambda I)^m=(S-lambda I_M)^m direct-sum (-lambda)^m I_(M-perp)`.
Hence all generalized lambda-eigenvectors lie in M and the generalized
kernels, their stabilization and dimensions agree. The external theorem
therefore lists exactly the nonzero eigenvalues of T with their algebraic
multiplicities. Its product formula shows that D_S is independent of M and
of the nuclear representation. No assertion that an arbitrary invariant
subspace reduces T is used; reduction here follows from the explicit nuclear
input-and-output support.

This also defines compact-operator algebraic multiplicity locally in the
definition's prose; a new separate multiplicity item is unnecessary for this
minimal inclusion. The external theorem supplies stabilization/finite
multiplicity after reduction. Do not claim this definition locally constructs
the separable determinant from scratch.

## Properties proposition and complete derivation

**Statement.** Assume AC. For any complex Hilbert space H and trace-class
T, the above determinant is entire, equals
`product_j(1+z lambda_j(T))` locally uniformly, has the stated singular-value
growth, minimal-type growth, continuity bound, derivative at zero `tr_H(T)`,
and the same invertibility/zero-multiplicity criterion as the record. For
trace-class A,B on H,
`det_H(I+A+B+AB)=det_H(I+A)det_H(I+B)`. It is the locally uniform limit of
ordinary finite-rank determinants under trace-norm approximation. Where
I+zT is invertible,
`D_T'(z)=D_T(z) tr_H(T(I+zT)^(-1))`.

**Derivation.** The definition's reduction identifies trace, trace norm,
singular values and algebraic eigenvalue data of T and S, so the external
single-operator formulas transfer term by term. Also
`I+zT=(I_M+zS) direct-sum I_(M-perp)`, proving equivalence of bounded
invertibility, including when one summand is zero.

For A,B choose nuclear representations for both and close the span of their
combined input/output vectors. This one separable M reduces both and
A+B+AB; each operator is zero on M-perp. Products and sums restrict to the
corresponding products and sums on M. The ideal theorem establishes all
trace-class hypotheses. Apply the external multiplicativity and continuity
there and the already proved invariance of definition to obtain the formulas
on H.

For finite-rank T_n converging to T in trace norm, AC chooses their countably
many nuclear representations. The closed span of all their nuclear vectors
and those for T is separable and reduces every operator, with each zero on
its orthogonal complement. The same is true of every difference T_n-T, so
their trace norms are preserved. The external limit theorem on this common
support proves locally uniform convergence on H. Finite-rank approximants
exist: for nuclear partial sums R_n, the tail is a nuclear representation of
T-R_n and `||T-R_n||_1 <= sum_(j>n)||u_j||||v_j|| -> 0`; compactness of the
difference follows from existing compact-operator closure results.

For the logarithmic derivative, fix z0 with I+z0T invertible and put
`B=(I+z0T)^(-1)T`. It is trace class by the ideal theorem, and
`I+(z0+h)T=(I+z0T)(I+hB)`. Multiplicativity gives
`D_T(z0+h)=D_T(z0)D_B(h)`. The external derivative-at-zero assertion,
already transported to H, gives `D_B(h)=1+h tr(B)+o(h)`; division by h and
the limit yield `D_T'(z0)=D_T(z0)tr(B)`. T commutes with I+z0T and its
inverse: multiply `T(I+z0T)=(I+z0T)T` on both sides by that inverse.
Thus B=T(I+z0T)^(-1), as asserted. D_T(z0) is nonzero by the established
invertibility criterion, so the corresponding logarithmic quotient is valid.

## Lidskii theorem and complete local argument relative to the record

**Statement.** Assume AC. Let H be any complex Hilbert space and T in S1(H).
List all nonzero eigenvalues lambda_j of T with their finite algebraic
multiplicities (stabilized generalized-kernel dimension). Then
`sum_j |lambda_j| <= ||T||_1` and
`tr_H(T)=sum_j lambda_j`. The sum is finite or countable and may be empty.
No normality, self-adjointness or separability of H is assumed.

**Proof.** The definition's separable-support argument and recorded theorem
give absolute summability with bound, and
`D_T(z)=product_j(1+z lambda_j)` and `D_T'(0)=tr_H(T)`.
Put `L=sum_j |lambda_j|`. For a finite initial product P_N, expansion gives

`|P_N(z)-1-z sum_(j<=N)lambda_j|
 <= sum_(k=2)^N (|z|L)^k/k!
 <= (|z|L)^2 exp(|z|L)/2`.

Indeed, each unordered k-fold product of distinct absolute eigenvalues occurs
k! times among all ordered k-fold products in L^k; all terms are nonnegative.
Let N tend to infinity, using product convergence and absolute convergence
of the eigenvalue sum. The same bound holds for D_T. Therefore
`lim_(z->0)(D_T(z)-1)/z=sum_j lambda_j`. The left side is tr_H(T) by the
recorded derivative property. This proves the identity; finite and empty
lists obey the same argument. This is a full local derivation **relative to
the explicitly recorded external determinant theorem**, not a local proof of
that determinant theorem.

## Supplier and source accounting

Minimum existing supplier interfaces include `def-axiom-of-choice`,
`def-hilbert-space`, `def-trace-class-operator`,
`lem-nuclear-series-characterizes-trace-norm`,
`thm-trace-is-absolutely-convergent-and-basis-independent`,
`thm-trace-class-is-a-two-sided-banach-operator-ideal`,
`thm-orthogonal-decomposition-by-a-closed-subspace`, compact positive square
root/SVD and singular-value definitions, operator norm/composition,
finite-dimensional determinant and block-triangular determinant interfaces,
and elementary scalar series/derivative conventions. The implementing author
must declare exact suppliers for the written proof, not just this abbreviated
family list. Full AC is deliberately stated to cover countable selections and
all imported Hilbert/Riesz suppliers; do not claim a sharper choice bound.

Fresh source reading and SHA-256 are in
`research/phase-2-remaining-27-step8-lidskii-determinants-investigation.md`:
Kostenko printed pp.34–45, including exact determinant continuity, product,
zeros/multiplicities and coefficient-at-zero assertions. This proposal uses
that successful retrieval and does not invent a second retrieval. The source
states the needed Hadamard specialization with a reference; that analytic
gap is inside the explicitly external record. Known source typographical
slips are not copied. The finite-dimensional and zero-space conventions and
arbitrary-Hilbert-space support extension above are explicit local arguments.

The implementing agent should run scoped schema/precheck and external-marker
checks. This proposal provides mathematics and metadata design, not a receipt,
judge certification, or claim that those checks already passed.
