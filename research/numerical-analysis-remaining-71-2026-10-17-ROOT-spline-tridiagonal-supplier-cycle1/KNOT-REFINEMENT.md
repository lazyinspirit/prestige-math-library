# Focused knot-refinement proof completion, same research cycle 1

This addresses the actual batch-5 alert concerning step 2.1 of `lem-b-spline-basis-refinement-under-single-knot-insertion`. Native batch 3 remains live; this file changes no canonical carrier. Root retains acceptance. The complete coefficient calculations below replace the unsupported “substituting ... then cross-multiplying” sentence. The lemma's statement and the insertion algorithm are sound as written; neither needs narrowing or a new hypothesis.

## Inputs and conventions checked

Read the current full carriers for the refinement lemma, knot-preservation theorem, insertion algorithm, canonical B-spline definition, and the linear-curve example. Also read the published B-spline properties proof for context, although the calculation below needs only the defining recurrence, not its basis/regularity theorem. Read the actual batch-5 notes and cross-batch finding. The degree-zero definition is the right-cell indicator convention, all recurrence terms with zero denominator are zero, and the value at b is the left limit for every degree.

Since the old vector is clamped with p+1 copies of each endpoint, a nonempty insertion span has p<=k<=n-1. Thus for every 1<=q<=p the transition indices k-q,...,k are valid old degree-q indices. Inserting u in t_k<u<t_(k+1) leaves the knot vector nondecreasing, clamped with the same degree, and all old nondegenerate-support inequalities valid: an index interval spanning the new u crosses two strictly separated old knot values; all others are an unchanged or shifted old interval. Old repeated interior knots are allowed without alteration. The contract inserts a new knot strictly inside a span; insertion at an already existing knot remains outside scope.

Let L_i=lambda_i^(q), ell_i=lambda_i^(q-1). For a fixed degree-q recurrence define

    A_i=(x-t_i)/(t_(i+q)-t_i),
    D_i=(t_(i+q+1)-x)/(t_(i+q+1)-t_(i+1)),

with the prescribed zero-denominator meaning. Use A'_i,D'_i for the analogous coefficients from t'. After the degree-(q-1) induction hypothesis, the three coefficients of B'_(i,q-1), B'_(i+1,q-1), B'_(i+2,q-1) are

    old:  A_i ell_i,
          A_i(1-ell_(i+1))+D_i ell_(i+1),
          D_i(1-ell_(i+2));

    proposed refined: L_i A'_i,
          L_i D'_i+(1-L_(i+1))A'_(i+1),
          (1-L_(i+1))D'_(i+1).

We prove all three equalities without dividing by a potentially zero old recurrence denominator.

## First coefficient

If i=k-q, both ell_i and L_i are 1, and t'_(i+q)=t_(i+q)=t_k, t'_i=t_i. Hence A'_i=A_i, including the case t_k=t_i where both terms are zero by definition. This proves A_i ell_i=L_i A'_i at that boundary.

If k-q+1<=i<=k, put a=t_i, b=t_(i+q) and v=t'_(i+q). Then a<=t_k<u<b, and v>=u>a. At the lower index i=k-q+1, v=u and ell_i=1=(u-a)/(v-a). At every higher index, v=t_(i+q-1) and the active definition gives the same formula ell_i=(u-a)/(v-a). Consequently

    A_i ell_i
      = [(x-a)/(b-a)] [(u-a)/(v-a)]
      = [(u-a)/(b-a)] [(x-a)/(v-a)]
      = L_i A'_i.

All denominators displayed in this case are strictly positive. This includes q=1,i=k: v=u and ell_i=lambda_k^(0)=1.

## Last coefficient

If k-q<=i<=k-1, put c=t_(i+1), d=t_(i+q+1) and w=t'_(i+2). Then c<=t_k<u<d. If i<=k-2, w=t_(i+2)<=t_k and ell_(i+2)=(u-w)/(d-w). If i=k-1, w=u and ell_(i+2)=lambda_(k+1)^(q-1)=0. In both cases

    1-ell_(i+2)=(d-u)/(d-w),
    1-L_(i+1)=(d-u)/(d-c),
    D'_(i+1)=(d-x)/(d-w).

Every denominator is strictly positive. Thus

    D_i(1-ell_(i+2))
      = [(d-x)/(d-c)] [(d-u)/(d-w)]
      = [(d-u)/(d-c)] [(d-x)/(d-w)]
      = (1-L_(i+1))D'_(i+1).

At i=k, both ell_(i+2) and L_(i+1) are zero. The insertion map gives D'_(k+1)=D_k, since t'_(k+q+2)=t_(k+q+1) and t'_(k+2)=t_(k+1). This remains true when their common denominator t_(k+q+1)-t_(k+1) vanishes; both recurrence terms are then zero by definition. Hence the last coefficient equality holds here as well.

## Middle coefficient: lower boundary i=k-q

Put c=t_(i+1), d=t_(k+1). Then c<=t_k<u<d. Here ell_(i+1)=1, L_i=1 and 1-L_(i+1)=(d-u)/(d-c). The insertion map gives

    D_i=(d-x)/(d-c),
    D'_i=(u-x)/(u-c), A'_(i+1)=(x-c)/(u-c).

The proposed middle coefficient is therefore

    (u-x)/(u-c)+(d-u)(x-c)/[(d-c)(u-c)]
      = [(u-x)(d-c)+(d-u)(x-c)]/[(d-c)(u-c)]
      = [(d-x)(u-c)]/[(d-c)(u-c)]
      = (d-x)/(d-c)=D_i.

This equals the old coefficient A_i(1-ell_(i+1))+D_i ell_(i+1)=D_i. All divided denominators are positive. A_i itself may have zero denominator at repeated old knots, but it is a defined zero coefficient and is multiplied by zero; it has not been cancelled or divided by in this calculation.

## Middle coefficient: upper boundary i=k

Put a=t_k and b=t_(k+q); then a<u<b. Here ell_(i+1)=0, L_i=(u-a)/(b-a), and L_(i+1)=0. The insertion map gives

    A_i=(x-a)/(b-a),
    D'_i=(b-x)/(b-u), A'_(i+1)=(x-u)/(b-u).

Hence the proposed middle coefficient is

    (u-a)(b-x)/[(b-a)(b-u)]+(x-u)/(b-u)
      = [(u-a)(b-x)+(b-a)(x-u)]/[(b-a)(b-u)]
      = [(x-a)(b-u)]/[(b-a)(b-u)]
      = (x-a)/(b-a)=A_i,

which equals the old middle coefficient because ell_(i+1)=0. Every divided denominator is positive. The old D_i may have zero denominator, but its defined zero term is multiplied by zero and never cancelled. When q=1 these lower and upper boundaries are distinct neighboring indices; the strict interior case below is empty.

## Middle coefficient: strict interior k-q+1<=i<=k-1

This case occurs only for q>=2. Put

    a=t_i, c=t_(i+1), b=t_(i+q), d=t_(i+q+1).

Then a<=c<=t_k<u<t_(k+1)<=b<=d, so b-a, d-c and b-c are positive. The insertion map and active weights give

    ell_(i+1)=(u-c)/(b-c),
    L_i=(u-a)/(b-a), 1-L_(i+1)=(d-u)/(d-c),
    D'_i=(b-x)/(b-c), A'_(i+1)=(x-c)/(b-c).

Thus the old middle coefficient is

    { (x-a)(b-u)/(b-a)+(d-x)(u-c)/(d-c) }/(b-c),

and the refined middle coefficient is

    { (u-a)(b-x)/(b-a)+(d-u)(x-c)/(d-c) }/(b-c).

Their first numerator terms differ by x-u, because

    (x-a)(b-u)-(u-a)(b-x)=(b-a)(x-u).

Their second numerator terms differ by u-x, because

    (d-x)(u-c)-(d-u)(x-c)=(d-c)(u-x).

The total difference is zero. This proves the third unexpanded identity in all strict interior cases, with no nonzero-denominator assumption beyond the actual insertion-span inequalities.

## Completing the induction and endpoint proof

For i<k-q, every local knot index through i+q+1 is at most k, so the entire old degree-q recurrence uses the identical knot list in t'. Both weights in the refinement identity are one; therefore the basis function is unchanged. For i>=k+1, the entire old local knot list shifts by one in t'; both weights are zero, and B_(i,q,t)=B_(i+1,q,t'). These identities can be proved directly by induction on q from the defining recurrence, without an unlisted support theorem.

On the transition indices, the preceding three coefficient equalities show that the two Cox–de Boor expansions coincide. The degree-zero induction base is precisely the old interval splitting into [t_k,u) and [u,t_(k+1)); all other indicators are copied or shifted. These indicator equalities hold at every interior old knot and at u using the right-cell convention, including zero-length old knot cells. The recurrence is pointwise on [a,b), and the equalities above are polynomial/rational identities in x valid there. Thus induction proves the refinement formula on [a,b) without assuming continuity at knots. At b each individual basis value is its left limit, so finite linear combination and taking that same left limit extend the identity to b. This handles multiplicity p+1 and lower-degree repeated-knot discontinuities, as well as clamped endpoints. No derivative matching premise is used.

## Preservation theorem and actual consumer follow-through

The current preservation theorem remains valid with exactly its existing statement and deps once this supplier proof is supplied. Its control collection can be made fully explicit by setting missing P_(-1)=P_n=0 only for bookkeeping. The refined coefficient Q_j is L_j P_j+(1-L_j)P_(j-1), with these zero conventions: at j=0, L_0=1; at j=n, L_n=0, since p<=k<=n-1. Reindexing its second finite sum yields

    sum_(j=0)^n Q_j B'_(j,p)
       = sum_(i=0)^(n-1) P_i [L_i B'_(i,p)+(1-L_(i+1))B'_(i+1,p)],

which is the old curve by the now-explicit refinement proof. This also covers p=0, where the blend range is empty and the old control on the split interval is copied twice. All vector-control algebra is componentwise. The clamped endpoints and right-cell/left-limit conventions are already included in the supplier identity.

The actual item chain is

    alg-single-new-b-spline-knot-insertion
      -> lem-b-spline-basis-refinement-under-single-knot-insertion
      -> thm-single-new-knot-insertion-preserves-b-spline-curve
      -> ex-single-new-knot-insertion-preserves-linear-curve.

All three nonalgorithm carriers also directly use `def-b-spline-space-and-basis`; the lemma and final example also directly name the insertion algorithm. The current linear example computes both refined cells explicitly and remains sound. No new logical supplier, new item or Statement/Definition change is needed for this escalation. Replace the lemma's incomplete induction step with several schema-formatted steps carrying the displayed derivations; optionally make the preservation theorem's finite-sum endpoint bookkeeping explicit. The same reviewer retains all chain and page consumers.

Actual batch-5 finding: its notes and cross-batch file explicitly say no APP-SPLINE proof excerpt is used in its local PCHIP/Bernstein arguments. Its natural undershoot example uses `def-natural-cubic-spline` and directly verifies its displayed pieces. Thus the batch-5 page-level prerequisite is held by a supplier-readiness check, rather than a hidden knot-insertion premise in a shape theorem. Root must have the native continuation revisit that exact held edge after the actual supplier proof and computational interface are integrated; research text alone does not close it.

Aggregate these focused knot-proof repairs with the computational supplier construction into one post-drain batch-3 native continuation. Preserve its historical finding and native review requirements; do not rewrite a live note, fabricate a passed edge, or claim the proof has received canonical acceptance.
