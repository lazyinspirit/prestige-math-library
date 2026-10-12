# Complete leading-term calculation for the remaining endpoint normal form

First-pass construction by `/root/repair_klr_global_basis/cyclotomic_action_construction`. This proves the polynomial triangular ingredient of Rouquier Lem4.12; it does not claim the full normal-form map is invertible.

Use ∂_i f=(s_if−f)/(X_i−X_{i+1}). Then ∂_iX_{i+1}−X_i∂_i=1 and ∂_iX_i−X_{i+1}∂_i=−1. For a polynomial f let deg_*f be its maximum exponent of any single variable. All calculations are integral, so survive arbitrary base-field characteristic. Let m_μ be the sum of distinct monomials with exponent multiset μ, including zero parts.

## Full antisymmetrizer degree bound

For monomials in r variables,

$$\deg_*\partial_{w_0}(X_1^{a_1}\cdots X_r^{a_r})\le\max_j a_j-r+1.$$

Indeed ∂_{w_0}f is (up to the fixed sign of the chosen Vandermonde) the alternating sum of all permutations of f divided by ∏_{j<k}(X_j−X_k). The alternating sum has degree in each variable ≤max a_j. If it is nonzero, its degree in X_j equals the degree in X_j of the quotient plus r−1, because the Vandermonde is monic up to sign as a polynomial in X_j and the polynomial ring over Z has no zero divisors. This proves the bound; if max a_j<r−1 it forces the result to be zero. Extend to sums by the maximum bound.

For P symmetric in its first a variables, Q symmetric in the last b variables, and ∂_par=∂_{w_{[1,a+b]}w_{[1,a]}w_{[a+1,a+b]}}, one gets

$$\deg_*\partial_{\mathrm{par}}(PQ)\le\max(\deg_*P-b,\deg_*Q-a).$$

To see this, let z_a=X_1^{a−1}X_2^{a−2}…X_{a−1} and z_b=X_{a+1}^{b−1}…X_{a+b−1}. The block divided differences give ∂_{w_a}(Pz_a)=(−1)^{a(a−1)/2}P and the analogous b identity. The reduced-length parabolic factorization therefore gives

$$\partial_{w_{a+b}}(Pz_aQz_b)=(-1)^{a(a-1)/2+b(b-1)/2}\partial_{\mathrm{par}}(PQ).$$

Apply the previous bound: the maximum exponent in the dividend is at most max(deg_*P+a−1,deg_*Q+b−1). The signs have no effect on the degree bound. Empty blocks cause no difficulty.

## Partition leading term with coefficient one

If μ has at most a parts, each ≤d, and l≥d+a, then

$$\partial_1\partial_2\cdots\partial_a\bigl(X_{a+1}^l m_\mu(X_1,\ldots,X_a)\bigr)=m_{\mu\cup\{l-a\}}(X_1,\ldots,X_{a+1})+R,$$

where R is symmetric and deg_*R<l−a. In the operator product the rightmost ∂_a acts first. This is exact for the mixed-relation sign above.

Prove it by induction on a. At a=0 it is trivial. Expand

$$m_\mu(X_1,\ldots,X_a)=\sum_{k\text{ a distinct part of }\mu}X_1^k m_{\mu\setminus k}(X_2,\ldots,X_a).$$

Zero is included as a part when a exceeds the number of positive parts. The induction hypothesis applied to ∂_2…∂_a shows that the coefficient with maximum X_2 exponent in the inner result is X_2^{l−a+1}m_{μ\setminus k}(X_3,…,X_{a+1}); every other term has X_2 exponent <l−a+1, and its exponent of X_1 is the fixed k≤d≤l−a. For L>k, the explicit formula

$$\partial_1(X_1^kX_2^L)=\sum_{r=0}^{L-k-1}X_1^{L-1-r}X_2^{k+r}$$

shows that the maximum X_1 exponent after applying ∂_1 to that leading term is l−a, and its coefficient is X_2^k m_{μ\setminus k}(X_3,…,X_{a+1}). Inner remainder terms have both X_1 and X_2 exponents ≤l−a before ∂_1; their resulting exponents are <l−a. Sum over distinct k to see the coefficient of X_1^{l−a} is exactly m_μ(X_2,…,X_{a+1}). The whole result is symmetric, because the successive divided differences are the parabolic symmetrizer on the last variable against the first symmetric block. It follows that its terms of maximum variable exponent l−a are exactly m_{μ∪{l−a}}, with coefficient one; subtracting leaves a symmetric remainder having smaller maximum exponent. This also covers repeated parts, since the sum defining m_μ uses each distinct monomial once.

These two identities prove the partition degree bound and leading coefficient required to compare the iterative canonical rho spanning modules with the rectangular-partition modules in the endpoint normal-form proof. They do **not** by themselves prove that the spanning module map is an isomorphism; the finite filtered comparison after nil-Hecke projectors is still the indispensable remaining step.
