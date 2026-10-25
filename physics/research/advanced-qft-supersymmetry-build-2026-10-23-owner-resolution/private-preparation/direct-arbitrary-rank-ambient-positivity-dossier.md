# Conditional direct arbitrary-rank ambient positivity calculation

Research only, 2026-10-24. Independent verification of the proposed local calculation, not a public theorem, native review, readiness decision, or source-reading claim. No active batch69 carrier is changed. This supplements, rather than rewrites, the earlier sigma-Hermitian lift and flat-splitting dossiers.

## Precise hypotheses retained

Let S and U be finite-dimensional complex spaces, dim U=k, and let H=H† be an invertible Hermitian matrix on S. It is not assumed positive. Let alpha be the linear map in the already lifted sigma-Hermitian monad, in the exact homogeneous coordinate and quaternionic convention for which, on the finite stereographic chart z1=x1+i x2, z2=x3+i x4,

    a=a0+z1 M1+z2 M2,
    b=b0-conjugate(z2) M1+conjugate(z1) M2.

These are maps U→S. Assume the monad/reality identities give, at every x∈R4,

    a†Ha=b†Hb=A(x),       a†Hb=0,
    M1†HM1=M2†HM2=C,      M1†HM2=0.

Assume the previous real-line Gram argument has actually established that A(x) and the infinity-line Gram matrix C are invertible. In particular these are Hermitian, and their inverses exist without a positivity assumption. Assume also that the form induced by H on the real-line monad cohomology is positive definite and that its identification with the given positive line-section pairing has been proved. This last identification is a genuine retained hypothesis, not obtained merely from monad exactness.

Equivalently for the following calculation, if K=A^-1 and

    Q=1-a K a†H-b K b†H,

then H restricted to range Q is positive definite. Indeed the displayed Gram identities show that im a and im b are nondegenerate orthogonal subspaces; Q is their H-orthogonal complementary projection. In the monad convention beta=alpha# H this complement represents ker beta / im alpha on the real line. That convention, its involutive signs, and the equality of the induced forms must be justified upstream. They are not new conclusions of this dossier.

No surjectivity of the full coefficient span, exclusion of a flat summand, rank-two-only reality assertion, or positive definiteness of H is assumed.

## Verification of the projection and derivative identities

Since K=K†, the operators Pa=a K a†H and Pb=b K b†H satisfy Pa²=Pa, Pb²=Pb, Pa Pb=Pb Pa=0, and Pa†H=H Pa, Pb†H=H Pb. Thus Q²=Q, Q†H=HQ. In particular

    y†H Q y=(Qy)†H(Qy)≥0

for every vector y, by the retained real-line positivity hypothesis. This remains valid when H is indefinite on the other summands.

Put P=a†HM1 and R=a†HM2. Differentiating a†Hb=0 in x1 and x3 gives respectively

    M1†Hb+a†HM2=0,
    M2†Hb-a†HM1=0.

Consequently b†HM1=-R† and b†HM2=P†. The signs agree with the stated b: its real derivative list is (M2,-i M2,-M1,i M1), while the derivative list of a is

    a_mu=(M1,i M1,M2,i M2).

The four derivatives of A are

    A_1=P+P†,       A_2=iP-iP†,
    A_3=R+R†,       A_4=iR-iR†.

Pairing real and imaginary terms, without commuting any matrices, gives

    sum A_mu K A_mu
      =2(P K P†+P† K P+R K R†+R† K R).

On the other hand, using 1-Q=Pa+Pb and the formulas for b†HMj,

    sum a_mu† H(1-Q) a_mu
      =2(P† K P+R† K R+R K R†+P K P†).

These expressions are identical term by term. Also sum a_mu†H a_mu=4C. Thus, with

    D=sum a_mu†H Q a_mu
      =sum (Q a_mu)†H(Q a_mu),

one has

    sum A_mu K A_mu=4C-D,       D≥0.

The positivity statement is a matrix inequality on U: for v∈U, v†Dv is the sum of the nonnegative real numbers (Q a_mu v)†H(Q a_mu v). It does not rely on a sign for K.

Since a is affine in the four real coordinates, A_mu,mu=2 a_mu†H a_mu and therefore Delta A=8C. Differentiating A K=1 twice gives, in the displayed order,

    K_mu=-K A_mu K,
    Delta K=2 K (sum A_mu K A_mu) K-K(Delta A)K
           =-2 K D K.

All factors and signs therefore check. For every fixed v, the real smooth function f_v(x)=v†K(x)v satisfies

    Delta f_v=-2(Kv)†D(Kv)≤0.

Neither K nor C has been assumed positive in obtaining this inequality. Smoothness on all of R4 follows from polynomial A and its everywhere nonzero determinant.

## Uniform decay and the minimum-principle direction

Expanding A=a†Ha and using M1†HM2=0 gives

    A(x)=|x|² C+L(x)+A0,

where L is real-linear and A0 is constant Hermitian. For r=|x|, E_r(x)=r^-2 L(x)+r^-2 A0 has norm O(r^-1), uniformly on the sphere of radius r. Because C is invertible, for sufficiently large r, ||C^-1 E_r||<1/2. The elementary Neumann-series inverse then gives

    K(x)=r^-2 (C+E_r(x))^-1,       ||K(x)||≤2||C^-1|| r^-2.

This proves uniform decay to zero, with no a priori sign assumption about C and no hidden compactness assertion on a noncompact chart.

For completeness the required weak minimum principle follows directly on each closed Euclidean ball B_R. For delta>0, Delta(f_v-delta |x|²)<0. An interior minimum would have a positive-semidefinite real Hessian and hence nonnegative Laplacian, a contradiction. Thus

    f_v(x)≥min_boundary f_v-delta R²

for x∈B_R; let delta decrease to zero. Uniform decay gives min_boundary f_v≥-c_v R^-2 for all sufficiently large R. Holding x fixed and letting R tend to infinity proves f_v(x)≥0. This is the minimum principle for a superharmonic function, with the correct inequality direction.

It follows that K(x) is positive semidefinite. Since it is invertible and Hermitian, it is positive definite; hence A(x)=K(x)^-1 is positive definite. No strict or strong maximum principle, scalar Green kernel, integral representation, or differential inequality for eigenvalues is needed.

## Ambient conclusion and rank-zero case

At any fixed x the decomposition

    S=im a ⊕ im b ⊕ range Q

is H-orthogonal and direct. Nondegeneracy of A gives injectivity of a and b and the direct decomposition; the explicit projections above show it spans S. The first two summands have Gram matrix A>0, and the third has the retained positive real-line form. Therefore H>0 on S.

If k=0 there are no a,b variables and Q=1, so the real-line positivity hypothesis already says H>0. The proof handles flat constant summands without requiring the span of alpha's coefficients to equal S. It neither uses nor proves such surjectivity.

## Scope and remaining duties

Under exactly the hypotheses stated above, this is a complete finite-matrix plus elementary real-variable proof of ambient positivity in arbitrary framing rank. There is no discovered sign, factor, decay, or minimum-principle obstruction. The method would remove the need for the proposed doubling/Verdier finite-positivity step in a proof that establishes these precise hypotheses independently.

It does not prove the sigma-Hermitian lift, the canonical form or the induced-pairing identification. It does not replace the upstream analytic negative-twist cohomology, minimal-monad full faithfulness, inverse-line rigidity/Gram-invertibility argument, or the existence of a compatible real monad. It does not perform full raw coefficient extraction, prove residual U(k) uniqueness, extend choices smoothly in the exact first-order family range, or check framing and compact rotation/flavor weights. Those remain separate actual duties of the native normal-form author and its exact suppliers. A constant Hermitian ambient form H is essential; extra derivative terms would invalidate the displayed Laplacian identity if H varied with x. Likewise, omission of infinity-line invertibility or of positivity of the real-line quotient would leave a genuine gap.

No external fulltext was retrieved or read for this calculation. No new claim about the scope of Verdier, Barth–Hulek, Rawnsley, or another source is made. This is an independently checked conditional derivation supplied to the owner; native proof acceptance remains entirely separate.
