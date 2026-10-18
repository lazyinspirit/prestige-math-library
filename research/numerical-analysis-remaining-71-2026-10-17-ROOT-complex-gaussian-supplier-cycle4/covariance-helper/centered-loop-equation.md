# Matrix-F centered loop equation (research, incomplete supplier)

This records a usable formal recursion, not a completed bound for the rangefinder. The stated eigenvalue density/Jacobian remains an external prerequisite if used canonically.

Let F=G W^{-1}G*, with G j-by-k normalized circular complex Gaussian, W independent k-by-k complex Wishart with k+p degrees of freedom. For k>=j the usual matrix-F density gives unordered positive eigenvalues with density proportional to

prod_i lambda_i^{k-j}(1+lambda_i)^{-(k+p+j)} prod_{i<l}(lambda_i-lambda_l)^2.

For example its j=1 specialization is beta-prime(k,p+1), whose mean is k/p, matching the scalar reciprocal-Gamma calculation.

Put a_i=lambda_i(1+lambda_i). The divergence-form reversible generator is

L f = sum_i [a_i partial_ii f + b_i partial_i f],

b_i = k-p lambda_i + sum_{l!=i} K_il/(lambda_i-lambda_l),

K_il=lambda_i+lambda_l+2lambda_i lambda_l.

Indeed a_i'+a_i partial_i log rho = k-j+1-(p+2j-2)lambda_i+2a_i sum_{l!=i}1/(lambda_i-lambda_l). The identity

2a_i=K_il+(lambda_i-lambda_l)(1+2lambda_i)

then gives exactly the displayed drift.

For mu=k/p and x_i=lambda_i-mu, applying E L f=0 to f=sum_i x_i^r and pairing i,l yields

p E sum_i x_i^r = (r-1) E sum_i lambda_i(1+lambda_i)x_i^{r-2}
 + E sum_{i<l} K_il (x_i^{r-1}-x_l^{r-1})/(x_i-x_l).

The quotient is the polynomial sum_{h=0}^{r-2}x_i^h x_l^{r-2-h}, including at coincident eigenvalues. Moment integrability requires r<p+1; boundary terms at infinity vanish in this range, at zero the diffusion times density vanishes even when k=j, and at collisions the squared Vandermonde removes the singular boundary term. A full canonical proof must spell out the truncation or integration domain argument.

At r=2 the equation simplifies without inequalities to

p E tr(F-mu I)^2 = j E tr F + E(tr F)^2.

Using the exact inverse-Wishart moments A=E tr W^{-2}=k(k+p)/(p(p^2-1)) and B=Var(tr W^{-1})=k(k+p)/(p^2(p^2-1)), the direct conditional covariance computation gives

E tr(F-mu I)^2 = j^2 A+j B = jk(k+p)(jp+1)/(p^2(p^2-1)),

Var(tr F)=j A+j^2 B = jk(k+p)(p+j)/(p^2(p^2-1)).

These satisfy the r=2 equation exactly.

The possible advantage is cancellation at the level of centered polynomials before inequalities. To turn it into a dimension-sharp high-moment estimate, the mixed-trace terms must be controlled together, retaining a Catalan/noncrossing type recurrence. Bounding every summand separately introduces a factor r and leads to an unwanted sqrt(log j) when r is chosen proportional to log j. No successful all-j estimate is asserted here.
