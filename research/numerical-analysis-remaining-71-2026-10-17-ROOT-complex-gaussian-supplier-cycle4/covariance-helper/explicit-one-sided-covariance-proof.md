# Explicit one-sided weighted complex Gaussian covariance bound

This is a complete mathematical argument using the established real Gaussian increment comparison and real Gaussian product inequality. No complex Gaussian comparison is invoked.

For normalized circular complex iid G, fixed Hermitian M>=0 and arbitrary compatible complex S,

E lambda_max[S(GMG* - tr(M)I)S*]
 <= (5/2+sqrt(2)) ||M||F ||S||op ||S||F
    +(3/2) ||M||op ||S||F^2.                                      (C)

Only a one-sided largest-eigenvalue assertion is made. It suffices for

E||S G M^{1/2}||op^2 <= tr(M)||S||op^2 + RHS(C).

The zero cases are immediate; all expectations below are finite polynomials of Gaussian norms.

## 1. Real one-sided covariance lemma

Let X be iid real standard Gaussian, M real symmetric nonnegative, and S real. Then

E lambda_max[S(XMX^T-tr(M)I)S^T]
 <= (2+1/sqrt(2)) ||M||F ||S||op ||S||F
    +||M||op ||S||F^2.                                         (R)

Proof. For unit u in the output space and arbitrary v in the column space of X, put s=S^T u, a=||s|| and t=M^{1/2}v. Introduce independent real standard Gaussian z,g,h and define real centered Gaussian processes

U_{u,v}=s^T X t+z a||t||,

V_{u,v}=||t|| g^T s+a h^T t.

For a second index let s',a',t' denote the analogous values. Both variances equal 2a^2||t||^2, and

Cov(U,U')-Cov(V,V')=(aa'-s^T s')(||t||||t'||-t^T t')>=0.

Thus U has smaller increment variances than V. Real Gaussian increment comparison remains valid with an arbitrary common deterministic additive penalty at each index: in its finite soft-max interpolation proof the penalty changes only the soft-max weights, which remain nonnegative. Apply it to the processes 2U,2V with penalty -||v||^2-tr(M)a^2. For full detail, restrict v to the ball of radius R and u to the unit sphere, choose increasing finite dense nets including a fixed u and v=0, and pass to their closures by continuity. Then let integer R increase. All resulting maxima are bounded below by -tr(M)||S||op^2 because the indices include v=0. They are bounded above uniformly in R by integrable envelopes: for 2U minus the penalty use ||S||op^2||M||op (||X||op+|z|)^2, and for 2V minus the penalty use ||S||op^2||M||op (||g||+||h||)^2. These follow by bounding the linear-in-v coefficient and using sup_{r>=0}(2cr-r^2)=c^2; the remaining trace penalty is nonpositive. Gaussian finite-dimensional norms have finite second moments. Dominated convergence therefore justifies both the dense-net limit and removal of R. The same argument with z=0 justifies the unaugmented supremum.

Conditional Jensen in z, followed by the variational identity sup_v(2s^T X M^{1/2}v-||v||^2)=s^T XMX^T s, gives

E lambda_max[S(XMX^T-tr(M)I)S^T]
 <= E sup_{||u||=1,v} [2||M^{1/2}v|| g^T s+2a h^T M^{1/2}v-||v||^2-tr(M)a^2].

Write b=|g^T s| and increase the expression by replacing g^T s with b. Since

b||M^{1/2}v||=sup_{||w||<=b} w^T M^{1/2}v,

optimizing over v gives

sup_v [2b||M^{1/2}v||+2a h^T M^{1/2}v-||v||^2]
 =sup_{||w||<=b} ||M^{1/2}(ah+w)||^2
 <=a^2 h^T Mh+2ab||Mh||+b^2||M||op.

Now a<=||S||op and b<=||Sg||. Therefore the entire supremum is bounded above by

||S||op^2(h^T Mh-tr M)_+
 +2||S||op||Sg||||Mh||+||M||op||Sg||^2.

The centered real quadratic form H=h^T Mh-tr M has variance 2||M||F^2. Since EH=0,

E H_+ = (1/2)E|H| <= ||M||F/sqrt(2).

Also E||Sg||<=||S||F, E||Mh||<=||M||F, E||Sg||^2=||S||F^2, and g,h are independent. Finally ||S||op^2<=||S||op||S||F. Taking expectations proves (R).

## 2. Complex covariance from its real and imaginary parts

By singular-value decomposition of S and unitary diagonalization of M, together with left/right unitary invariance of G, it suffices to take S=D diagonal nonnegative (rectangular zero padding causes no issue) and M diagonal nonnegative. Write G=(X+iY)/sqrt(2) with independent real iid standard Gaussian X,Y. Then

H=D(GMG*-tr(M)I)D=A+iB,

A=D[(XMX^T+YMY^T)/2-tr(M)I]D,

B=D(YMX^T-XMY^T)D/2.

A is real symmetric and iB is Hermitian. Consequently lambda_max(H)<=lambda_max(A)+||iB||op.

Apply (R) to the iid real matrix [X Y] and weight diag(M/2,M/2). This weight has Frobenius norm ||M||F/sqrt(2), operator norm ||M||op/2, and trace tr M. Hence

E lambda_max(A) <= (sqrt(2)+1/2)||M||F||D||op||D||F
                    +(1/2)||M||op||D||F^2.

For the imaginary part, transpose invariance of the operator norm and the triangle inequality give

||iB||op=||B||op<=||D X M Y^T D||op.

Condition on Y and use the established real Gaussian product bound E||U X V||op <=||U||op||V||F+||U||F||V||op. The exact second moment gives E||M Y^T D||F<=||M||F||D||F. Apply the same real product bound once more to M Y^T D, obtaining

E||M Y^T D||op<=||M||op||D||F+||M||F||D||op.

Together these yield

E||iB||op<=2||M||F||D||op||D||F+||M||op||D||F^2.

Adding proves (C), with explicit constants C1=5/2+sqrt(2)<3.915 and C2=3/2.

The passage from (C) to the displayed squared norm bound uses the deterministic inequality lambda_max(tr(M)SS*+H)<=tr(M)||S||op^2+lambda_max(H). Conditional versions hold when M is random independent of G, by first applying the complete fixed-M argument.
