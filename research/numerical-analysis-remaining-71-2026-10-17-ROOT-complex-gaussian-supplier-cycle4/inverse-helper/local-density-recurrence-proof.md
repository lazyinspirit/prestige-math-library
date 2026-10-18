# Research proposals: local Wishart density and moment recurrence proofs

These are research proposals, not canonical item files. They remove the
published-recurrence dependency in findings.md. All computations below
are finite; the proof uses no random-matrix asymptotic theorem.

## Proposed prerequisite 1 (lemma)

Suggested ID: lem-normalized-complex-wishart-eigenvalue-density.

Statement. If G is k by ell=k+p, with independent entries of density
pi^{-1}exp(-|z|^2), and p is a nonnegative integer, then W=GG* is positive
definite almost surely. Its density on positive Hermitian matrices is
proportional to exp(-Tr X)det(X)^p. Its unordered eigenvalues have joint
density proportional to

    product_i exp(-x_i)x_i^p product_{i<j}(x_i-x_j)^2,  x_i>0.

With L_n=L_n^{(p)} and h_n=Gamma(n+p+1)/n!, the one-point intensity
(integrating to k, rather than one) is

    rho(x)=exp(-x)x^p sum_{n=0}^{k-1} L_n(x)^2/h_n.

### Full local proof

Use real Lebesgue measure on the diagonal and real/imaginary parts above
the diagonal of Hermitian matrices. The rank-deficient Gaussian matrices
form the zero set of a nonzero real polynomial (for example the squared
absolute value of the first k-column minor), hence have probability zero.

First derive the matrix density without assuming a Wishart formula.
For A positive definite put

    I(A)=integral_{X>0} exp(-Tr AX)det(X)^p dX.

This is finite and nonzero. Indeed, write X=LL*, with L lower triangular
and positive real diagonal t_1,...,t_k. The real Jacobian is

    dX=2^k product_{i=1}^k t_i^{2(k-i)+1} dL.

For completeness, this formula follows by induction: in the block form
L=[[L0,0],[z*,t]], the old block is Y=L0L0*, the new off-diagonal block
is L0 z, and the last diagonal entry is ||z||^2+t^2. At fixed L0 the
first of these maps has real Jacobian |det L0|^2=det Y, while the final
real coordinate has derivative 2t. The block triangular derivative
therefore multiplies the previous Jacobian by det(Y)2t, which gives
the displayed product. Now det(X)=product_i t_i^2 and Tr X is the sum
of the squared absolute values of the entries of L. Thus I(I) factors
into convergent Gaussian integrals and positive gamma integrals.

Under X=A^{-1/2}YA^{-1/2}, Lebesgue measure scales by det(A)^{-k}.
To check this Jacobian, diagonalize A unitarily; unitary conjugation is
orthogonal on the real Hermitian space. For a positive diagonal
congruence S=diag(s_i), diagonal coordinates scale by s_i^2, and each
two-dimensional off-diagonal coordinate scales by (s_i s_j)^2. Their
product is product_i s_i^{2k}=det(S)^{2k}. Consequently

    I(A)=det(A)^{-(k+p)} I(I).

The proposed normalized density f(X)=I(I)^{-1}exp(-Tr X)det(X)^p
therefore has Laplace transform det(I+H)^{-ell}, for H positive
definite. Independently, the ell columns g of G are independent and
unitarily invariant. Diagonalizing H and integrating scalar complex
Gaussians gives E exp(-g*Hg)=det(I+H)^{-1}; multiplication over columns
gives exactly the same transform for GG*. Uniqueness of finite-dimensional
Laplace transforms proves the density assertion. One may reduce this
uniqueness directly to Fourier uniqueness: extend the transforms
holomorphically to Re Z>0, use the identity theorem successively in the
real coordinate variables, then evaluate at Z=tI-iT. This identifies
the Fourier transforms of the finite measures tilted by exp(-t Tr X).
Removing the strictly positive tilt identifies the original measures.

Next derive the eigenvalue Jacobian locally. Away from repeated
eigenvalues write X=U diag(x_i)U*. In the moving frame,

    U* dX U = diag(dx_i)+[K,diag(x_i)],  K=U*dU.

The diagonal entries are dx_i. The ij off-diagonal complex coordinate
is (x_j-x_i)K_ij, so its two-dimensional real Jacobian is
(x_j-x_i)^2. The remaining diagonal phases are the stabilizer and do
not enter X. Thus the Jacobian, relative to invariant volume on the
unitary group modulo phases, is a constant times product_{i<j}(x_i-x_j)^2.
These coordinates cover the simple-spectrum matrices up to the fixed
permutation multiplicity. The exceptional repeated-spectrum set has
Lebesgue measure zero because its discriminant is a nonzero polynomial.
Integrating the unitary coordinates gives the claimed eigenvalue density.
No value of its normalizing constant has been assumed.

For the one-point formula define the polynomials by Rodrigues' formula

    L_n(x)=x^{-p}exp(x)/n! (d/dx)^n[exp(-x)x^{n+p}].

Leibniz' rule gives the explicit finite polynomial

    L_n(x)=sum_{j=0}^n (-1)^j binom(n+p,n-j) x^j/j!.

Its leading coefficient is (-1)^n/n!. Integrating Rodrigues' formula
by parts n times proves orthogonality to every polynomial of degree
less than n and proves its squared norm is h_n=Gamma(n+p+1)/n!.
The boundary terms vanish because exp(-x) dominates all polynomials
at infinity and, at zero, the differentiated powers remaining before
the last integration are of positive degree; p>=0 suffices.

Set psi_n(x)=exp(-x/2)x^{p/2}L_n(x)/sqrt(h_n). A Vandermonde determinant
is a constant times det(L_{i-1}(x_j)), so the normalized eigenvalue
density is exactly

    (1/k!) det(psi_{i-1}(x_j))^2.

To see the normalization and the marginal without invoking a determinantal
process theorem, expand both determinants as sums over permutations.
Integrating every variable leaves only equal permutations by orthonormality,
and hence the full integral is k!. Integrating all variables but one
instead leaves (k-1)! times sum_{n=0}^{k-1}psi_n(x)^2. Multiplication by
k/k! gives exactly the asserted one-point intensity. This proves all
claims of the first proposal.

## Proposed prerequisite 2 (lemma)

Suggested ID: lem-complex-wishart-finite-inverse-trace-moments.

Statement. Under the preceding normalized circular Gaussian model, with
integers k>=1 and p>=1, put M_s=E Tr W^s. For every real s>-p, all
three terms exist and

    (s+2)M_{s+1}=(2s+1)(2k+p)M_s
                        +(s-1)(s^2-p^2)M_{s-1}.

No analytic continuation is needed. In particular, for integers 1<=r<p,

    (r+1)(p^2-r^2)T_{r+1}
       =(2r-1)(2k+p)T_r+(2-r)T_{r-1},
    T_r=E Tr W^{-r}, T_0=k, T_1=k/p.

Moreover, for 2<=q<=p,

    T_q <= C_{q-1} k(k+p)^{q-1}/[p product_{j=1}^{q-1}(p^2-j^2)].

### Full local proof of the density ODE

The elementary Laguerre identities needed here follow by substituting
the displayed finite coefficient formula and comparing coefficients:

    xL_n''+(p+1-x)L_n'+nL_n=0,
    xL_n'=nL_n-(n+p)L_{n-1},
    (n+1)L_{n+1}=(2n+p+1-x)L_n-(n+p)L_{n-1}.

There is no convergence issue in these verifications. The third
identity, applied at x and y, multiplied by the other polynomial and
subtracted, telescopes after division by h_n and summation from n=0
to k-1. It gives the Christoffel–Darboux identity with the exact sign

    sum_{n=0}^{k-1}L_n(x)L_n(y)/h_n
      =[-k!/Gamma(k+p)]
         [L_k(x)L_{k-1}(y)-L_{k-1}(x)L_k(y)]/(x-y).

Take y to x, multiply by exp(-x)x^p, and put

    a=k+p/2, c=p^2/4,
    u=exp(-x/2)x^{p/2}L_k(x),
    v=exp(-x/2)x^{p/2}L_{k-1}(x).

The second Laguerre identity gives

    v=[(a-x/2)u-xu']/(k+p).

The first identity gives

    u''=-u'/x-Q u,
    Q=-1/4+(a+1/2)/x-c/x^2.

Differentiate the formula for v and use this equation. If
B=x/4-a+c/x, the result is

    u'v-uv'=[-x(u')^2+B u^2]/(k+p).

Thus the diagonal Christoffel–Darboux formula is exactly

    rho(x)=[k!/Gamma(k+p+1)] R(x),
    R=x(u')^2-Bu^2.

Here is explicit algebra for the third-order equation, so no unproved
Wronskian or density-ODE assertion is being imported. Put
U=u^2, V=uu', T=(u')^2. They satisfy

    U'=2V,
    V'=T-V/x-QU,
    T'=-2T/x-2QV.

Since xQ+B=1/2, differentiation of R=xT-BU gives

    R'=-T-V-B'U,
    R''=A T+C V+D U,
    A=2/x-1,
    C=2Q+1/x-2B'=-1+(2a+2)/x,
    D=Q-B''.

A further differentiation using the same three-variable system gives

    R'''=E T+F V+J U,
    E=A'-2A/x+C=-1+(2a+4)/x-6/x^2,
    F=-2AQ+C'-C/x+2D
       =-1+(4a+4)/x-(4c+8a+6)/x^2,
    J=-CQ+D'.

Write H=2-4c+4ax-x^2 and K=2a-4c/x. Direct substitution of the stated
expressions for B,Q,A,C,D,E,F,J gives the three identities

    x^2 E+4x A-H+xK=0,
    x^2 F+4x C-H=0,
    x^2 J+4x D-H B'-K B=0.

For the final identity, one can substitute

    D=-1/4+(a+1/2)/x-c/x^2-2c/x^3,
    J=-1/4+(3a/2+1)/x
        -[c+(2a+3)(a+1/2)]/x^2
        +(2a+4)c/x^3+6c/x^4;

then each power of x cancels. Multiplying the equations for R, R',
R'', R''' by K,H,4x,x^2 respectively shows coefficient by coefficient
in U,V,T that

    x^2 rho'''+4x rho''
       +(2-p^2+2(2k+p)x-x^2)rho'
       +(2k+p-p^2/x)rho=0.

This derives the ODE locally rather than citing it.

### Integration and the moment recurrence

The kernel expression proves rho(x)=exp(-x)x^p P(x) for a polynomial P.
Thus M_t=integral_0^infinity x^t rho(x)dx is finite for t>-p-1.
For s>-p multiply the density ODE by x^s and integrate. Repeated
integration by parts is justified: all boundary terms at infinity
are exponentially decaying, and each boundary term at zero is
O(x^{s+p}) (or vanishes faster), hence tends to zero. The terms give

    integral x^{s+2}rho'''=-(s+2)(s+1)s M_{s-1},
    4 integral x^{s+1}rho''=4(s+1)s M_{s-1},
    (2-p^2)integral x^s rho'=-(2-p^2)s M_{s-1},
    2(2k+p)integral x^{s+1}rho'
       =-2(2k+p)(s+1)M_s,
    -integral x^{s+2}rho'=(s+2)M_{s+1}.

The undifferentiated term contributes (2k+p)M_s-p^2 M_{s-1}.
The coefficient of M_{s-1} simplifies to -(s-1)(s^2-p^2), giving
the asserted recurrence. This is an ordinary convergent integration
calculation, valid directly at each negative integer s=-r with r<p.

Finally M0=k and M1=k(k+p), the latter by summing the k(k+p) scalar
second moments of G. At s=0 the recurrence says

    2k(k+p)=(2k+p)k+p^2 T1,

so T1=k/p. At r=1 the inverse recurrence gives
T2=k(k+p)/[p(p^2-1)]. For r>=2 the term (2-r)T_{r-1} is nonpositive
and 2k+p<=2(k+p). Induction with the elementary Catalan ratio
C_r/C_{r-1}=(4r-2)/(r+1) proves the stated all-q bound. Together
with findings.md, this supplies a complete local proof of the uniform
9/5 slack estimate.

## Source reconciliation

The resulting moment recurrence agrees exactly with Eq. (4.15) of
Cunden–Mezzadri–O'Connell–Simm, arXiv:1805.08760v5, Section 4.2.
The density ODE is independently derived above; it has coefficient
(2k+p-p^2/x)rho. This also avoids relying on a potentially confusing
coefficient rendering in that paper's Proposition 6.7. The source was
used to identify and reconcile the target identity, not to replace
any of the local proof steps.
