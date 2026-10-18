# Complete mathematical planning arguments for APP-RATIONAL

These are research proofs, not canonical items or check receipts. All functions and nodes below are real. Sup norms and variation are on [a,b]=[x_0,x_n]. Let n>=1, x_0<...<x_n, 0<=d<n, h=max(x_(j+1)-x_j). Write m=n-d and epsilon=1 if m is even, 0 if m is odd.

## 1. Construction and complete no-real-pole proof

For i=0,...,m let p_i be the degree-at-most-d polynomial interpolating f at x_i,...,x_(i+d), and put lambda_i(x)=(-1)^i/product_(k=i)^(i+d)(x-x_k) off nodes. Define

mu_i(x)=product_(j<i)(x-x_j) product_(k>i+d)(x_k-x), s(x)=sum_i mu_i(x).

Then mu_i=(-1)^(n-d) product_(j=0)^n(x-x_j) lambda_i off nodes. The polynomial quotient r=(sum mu_i p_i)/s therefore equals the blend quotient wherever the lambda_i exist.

At x=x_alpha, mu_i(x_alpha)>0 exactly for max(0,alpha-d)<=i<=min(alpha,m), and all other terms vanish. This index set is nonempty, so s(x_alpha)>0, and all surviving p_i(x_alpha)=f(x_alpha). Thus r interpolates at every node.

For x_alpha<x<x_(alpha+1), split i into I_1={i<=alpha-d}, I_2={alpha-d+1<=i<=alpha}, I_3={i>=alpha+1}, always intersected with {0,...,m}. Every I_2 term is positive. In I_3, starting at alpha+1, the signs alternate starting positive and magnitudes strictly decrease: mu_(i+1)/mu_i=-(x-x_i)/(x_(i+d+1)-x), whose absolute value is (x_i-x)/(x_(i+d+1)-x)<1. Pair consecutive terms from that end, leaving a final positive term if needed. The I_3 sum is strictly positive if nonempty. In I_1, read indices backwards from alpha-d; signs likewise alternate starting positive and magnitudes decrease because |mu_(i-1)/mu_i|=(x-x_(i+d))/(x-x_(i-1))<1. Its sum is strictly positive if nonempty. At least one set is nonempty, so s>0 inside the node interval.

For x<x_0, read all indices forward from 0: mu_0>0, signs alternate, and |mu_(i+1)/mu_i|=(x_i-x)/(x_(i+d+1)-x)<1. For x>x_n, read backwards from m: mu_m>0 and |mu_(i-1)/mu_i|=(x-x_(i+d))/(x-x_(i-1))<1. Pairing gives s>0 also outside [a,b]. Thus s is strictly positive on ALL of R and r has no real pole. Empty products have value 1. This proof even permits d=n (the polynomial case); the approved interface retains d<n.

Expanding each p_i in its Lagrange basis and interchanging finite sums gives numerator sum_j w_j f(x_j)/(x-x_j), denominator sum_j w_j/(x-x_j), where

w_j=(-1)^(j-d) sum_(i=max(0,j-d))^(min(j,m)) product_(k=i,k!=j)^(i+d)|x_j-x_k|^(-1).

Every displayed sum has positive terms, so all w_j are nonzero. To see the denominator identity, apply the same expansion to the constant function 1: its p_i all equal 1. These are exactly the approved weights. This also proves polynomial reproduction through degree d. No assumption on mesh ratio or f's smoothness is required for absence of poles or support interpolation.

## 2. Exact denominator lower bounds

Put D=sum_i lambda_i. For d>=1 and x_alpha<x<x_(alpha+1), choose any j in I_2; this set is nonempty since a window of d+1 consecutive nodes can contain the two neighboring nodes. Positivity in section 1 gives s>=mu_j, hence

|D|>=|lambda_j|=1/product_(k=j)^(j+d)|x-x_k| >=1/(d! h^(d+1)).

Indeed, the left-node distances are at most (alpha+1-k)h and the right-node distances at most (k-alpha)h, so their product is at most (alpha-j+1)! (j+d-alpha)! h^(d+1)<=d!h^(d+1). The last inequality follows from u!v!<=d! for positive integers u+v=d+1 (equivalently binomial(d+1,u)>=d+1).

For d=0 set beta=0 if n<=2, and otherwise

beta=max_(1<=alpha<=n-2) min{(x_(alpha+1)-x_alpha)/(x_alpha-x_(alpha-1)), (x_(alpha+1)-x_alpha)/(x_(alpha+2)-x_(alpha+1))}.

If alpha=0, positivity gives |D|>=1/(x-x_0)>=1/h; if alpha=n-1, |D|>=1/(x_n-x)>=1/h. These also cover n=1,2 without an empty maximum. For 1<=alpha<=n-2, the first pair of I_3 gives

|D| >= 1/(x_(alpha+1)-x)-1/(x_(alpha+2)-x)
      >=1/[h(1+(x_(alpha+1)-x_alpha)/(x_(alpha+2)-x_(alpha+1)))].

The first backward pair of I_1 gives the analogous bound with denominator x_alpha-x_(alpha-1). Take the larger of these two bounds to obtain |D|>=1/[h(1+beta)]. Global h/h_min<=rho implies beta<=rho. No rate conclusion is drawn without controlling beta in a mesh family for d=0.

## 3. Complete source-rate derivation, including constants

For distinct t_0,...,t_q write f[t_0,...,t_q] for the symmetric divided difference. Its value is the coefficient of degree q in the interpolating polynomial on those q+1 nodes, by the Lagrange leading-coefficient formula sum_j f(t_j)/product_(k!=j)(t_j-t_k). Appending x to the d+1-node interpolant therefore gives the exact Newton remainder identity

f(x)-p_i(x)=product_(k=i)^(i+d)(x-x_k) f[x_i,...,x_(i+d),x].

Thus, off nodes,

f(x)-r(x)=N(x)/D(x), N=sum_(i=0)^m(-1)^i f[x_i,...,x_(i+d),x].

The same leading-coefficient formula, or cancellation of its terms over the common d+1 nodes, yields

f[x_i,...,x_(i+d),x]-f[x_(i+1),...,x_(i+d+1),x]
=-(x_(i+d+1)-x_i) f[x_i,...,x_(i+d+1),x].

Pair even i with i+1 in N. If m is even one final unpaired term remains. Repeated Rolle applied to interpolation on q+1 distinct real nodes gives |f[t_0,...,t_q]|<=||f^(q)||/q!; this follows by subtracting its interpolating polynomial and differentiating q times. Also sum_(i even, i<m)(x_(i+d+1)-x_i) <=(d+1)(b-a), because each elementary mesh gap appears in at most d+1 windows. Therefore, for f in C^(d+2),

|N| <= (d+1)(b-a)||f^(d+2)||/(d+2)! + epsilon ||f^(d+1)||/(d+1)!.

Combine with section 2. For d>=1 this gives EXACTLY the source's two parity bounds in unified form:

||f-r_d|| <= h^(d+1)[(b-a)||f^(d+2)||/(d+2) + epsilon ||f^(d+1)||/(d+1)].

For d=0, f in C^2, it gives

||f-r_0|| <=h(1+beta)[(b-a)||f''||/2 + epsilon ||f'||].

These are Theorems 2 and 3 of the author-hosted preprint. They are sup estimates by continuity and the zero error at nodes. Degree fixed as h->0 and the displayed derivative norms controlled give the claimed orders. In the d>=1 branch no quasi-uniformity is needed. In d=0 beta must stay bounded. No derivative or constant is silently omitted when m is even.

## 4. Independently proved preservation of C^(d+1) via bounded variation

Assume only f in C^(d+1), and g=f^(d+1) of finite total variation V. We first prove the integral representation used, rather than citing an unread text.

For any q>=0 and distinct real t_0,...,t_q in [a,b], let Delta_q={u_j>=0, sum_(j=1)^q u_j<=1}, u_0=1-sum_(j=1)^q u_j, and integrate in ordinary q-dimensional Lebesgue/Riemann volume (q=0 means evaluation). Then

f[t_0,...,t_q]=integral_(Delta_q) f^(q)(sum_(j=0)^q u_j t_j) du.

For q=0 this is immediate. To prove induction, integrate the derivative with respect to u_q of f^(q-1)(t_0+sum_(j=1)^q u_j(t_j-t_0)). Its derivative is (t_q-t_0) times the integrand above. The top face u_q=1-sum_(j=1)^(q-1)u_j has argument t_q+sum_(j=1)^(q-1)u_j(t_j-t_q); the bottom face u_q=0 has argument t_0+sum_(j=1)^(q-1)u_j(t_j-t_0). By the induction hypothesis and symmetry of divided differences, these two integrals are f[t_1,...,t_q] and f[t_0,...,t_(q-1)]. Their difference divided by t_q-t_0 is exactly the divided-difference recurrence. All integrands are continuous on compact simplexes, so iterated integration and FTC apply. The simplex volume is 1/q!, either by iterated integration or induction integrating its homothetic cross-sections. Equivalently, with normalized uniform simplex measure, a divided difference equals (1/q!) times an expectation of f^(q) of the convex combination. This establishes the formula fully.

Apply q=d+1 to G_i=f[x_i,...,x_(i+d),x], assigning the SAME simplex coordinate to the fixed query x for every i. For any fixed simplex point u, the argument y_i(u)=u_x x+sum_(k=0)^d u_k x_(i+k) is a nondecreasing sequence in [a,b]. Consequently sum_(i=0)^(m-1)|g(y_(i+1)(u))-g(y_i(u))|<=V by the definition of total variation (repeated points can be removed, and endpoints can be inserted). Integration, the triangle inequality and the simplex volume give

sum_(i=0)^(m-1)|G_(i+1)-G_i| <= V/(d+1)!.

Pair the alternating numerator N as in section 3. Its paired differences are a subcollection of the last variation sum, and the possible leftover satisfies |G_m|<=||g||/(d+1)! by the same integral representation. Hence

|N|<=(V+epsilon ||g||)/(d+1)!.

With section 2 this proves

||f-r_d||<= h^(d+1)(V+epsilon ||g||)/(d+1) for d>=1,

||f-r_0||<=h(1+beta)(V+epsilon ||g||) for d=0.

This proof uses only C^(d+1) and finite variation of that derivative, no derivative of order d+2. It includes C^(d+2), because V<= integral |f^(d+2)| <=(b-a)||f^(d+2)|| by FTC on every partition. For C^(d+2) the section-3 source bounds are sharper, so retain both interfaces. It also includes nonsmooth continuous BV highest derivatives; integrating such a derivative d+1 times yields examples outside C^(d+2). No claim is made that BV is necessary.

## 5. Explicit counterexample to the approved seminorm-only rate for every d

Fix ANY d>=0. For integers n>=2d+2 use [0,1], nodes x_j=jh, h=1/n and query x=h/2. Thus the global mesh ratio is identically 1, and d<n. The approved weights, after multiplication by the harmless positive factor h^d d!, are

w_j=(-1)^(j-d) delta_j, delta_j=sum_(i=max(0,j-d))^(min(j,n-d)) binomial(d,j-i).

Here 1<=delta_j<=2^d, and delta_j=2^d for d<=j<=n-d.

The scaled barycentric denominator is nonzero by section 1 and satisfies

|D_b(x)|<=2^d(4d+4)/h.

To check this bound: for d=0 the j=0 term has magnitude 2/h and the alternating j=1,...,n tail has magnitude at most its first term 2/h. For d>=1 split j=0,...,d-1; j=d,...,n-d; and j=n-d+1,...,n. Each end block has d terms each at most 2^(d+1)/h. The middle block has constant delta=2^d and is alternating with monotonically decreasing magnitudes, so its sum has magnitude at most 2^(d+1)/h. Thus its total is at most 2^d(4d+2)/h, which is less than the stated common bound.

Set phi(t)=(1-16t^2)^(d+2) for |t|<=1/4 and phi(t)=0 otherwise. This is C^(d+1) on R because the polynomial has a zero of multiplicity d+2 at both endpoints of its support. It has phi(0)=1 and a finite derivative bound

M_d=4^(d+1) sum_(ceil((d+1)/2)<=k<=d+2) binomial(d+2,k) (2k)!/(2k-d-1)!,

which bounds ||phi^(d+1)|| by differentiating its polynomial expansion termwise on the support (and bounding |t|<=1/4). Let sigma_j be the sign of w_j/(x-x_j), and define

f_n(t)=h^(d+1) sum_(j=0)^n sigma_j phi((t-x_j)/h), t in [0,1].

The supports are disjoint, including the endpoint restrictions. Therefore f_n is C^(d+1), ||f_n^(d+1)||<=M_d independently of n, f_n(x_j)=h^(d+1)sigma_j, and f_n(x)=0. Its interpolation numerator at x is a sum of positive magnitudes. Hence

|f_n(x)-r_d(f_n)(x)|
= h^(d+1) sum_j |w_j/(x-x_j)| / |D_b(x)|
>= h^(d+1)/(4d+4) sum_(j=d+1)^(n-d) 1/(j-1/2)
>= h^(d+1)/(4d+4) log((n-d+1/2)/(d+1/2)).

The last inequality integrates the decreasing function 1/(t-1/2) over [d+1,n-d+1]. Thus the ratio of the error to h^(d+1)||f_n^(d+1)|| is at least the displayed logarithm divided by (4d+4)M_d and tends to infinity. This contradicts ANY proposed constant C(d,1). It is an exact counterexample family, not a numerical experiment or a failure to find a proof. Even though the test function depends on n, that is sufficient to refute the proposed uniform inequality, whose constant was to depend only on d,rho. It does not establish failure of an order statement for every individually fixed function and no such stronger conclusion is needed here.

## Cycle-1 author-finding correction to section 1 (historical text retained)

The I3 paragraph above contains an extra leading minus in its forward adjacent-weight ratio. This append supersedes that equation only. Directly from the product definition, when x is off all nodes,

mu_(i+1) = mu_i (x-x_i)/(x_(i+d+1)-x),

because the numerator acquires the left factor (x-x_i) and loses the right factor (x_(i+d+1)-x). There is NO additional minus sign. Likewise,

mu_(i-1) = mu_i (x_(i+d)-x)/(x-x_(i-1)).

For I3, i>=alpha+1, so x_i>x and x_(i+d+1)>x_i. The forward ratio is negative, with absolute value (x_i-x)/(x_(i+d+1)-x)<1. The starting term mu_(alpha+1)>0. Pairing terms from that end yields strictly positive pairs, and any unpaired final term is positive. This proves precisely the intended positive I3 partial sum.

For I1, reading backwards from i=alpha-d, x_(i+d)<=x_alpha<x and x_(i-1)<x_(i+d). The backward ratio is negative, with absolute value (x-x_(i+d))/(x-x_(i-1))<1. The starting term mu_(alpha-d)>0. The same positive-pair argument proves the I1 partial sum. Every I2 term is positive as before. Thus the gap sum and all section-2 denominator bounds remain valid with no changed constants.

For x<x_0, the forward ratio just derived is again negative and has absolute value less than one, starting at mu_0>0. For x>x_n, the backward ratio is negative and has absolute value less than one, starting at mu_(n-d)>0. These give the exterior positive sums. At nodes the surviving-term proof is unchanged. Therefore the no-real-pole argument is complete after this explicit correction. The actual draft gap lemma (steps 1.2–1.3), no-pole theorem (step 2.1), and their denominator/rate/nonvanishing consumers already use these correct formulas; this append requests no current canonical repair.
