# Independent invariant-degree and Poincaré comparison route

Root adjudication, 2026-10-07. This supplies a complete finite-type proof-design seam and exact exceptional certificates; it does not author or certify library item proofs. The root read the full current bodies of `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension` and `thm-chevalley-shephard-todd-for-finite-weyl-groups`. The former's proof already derives the full Molien identity; it is not merely a dimension statement. Its explicit AC premise remains attached to the inherited invariant-theory suppliers.

## Uniform degree determination without group enumeration

Work componentwise with the essential irreducible finite real reflection representation, then complexify. Its basic homogeneous degrees are d_1,...,d_n. Essentiality implies no invariant linear form, so d_i≥2. Let N be the number of reflections; the root/reflecting-hyperplane correspondence gives N=|Phi_+|. The reflection set exhausts the orthogonal operators whose fixed space has codimension one: such an operator is a reflection, and the chamber stabilizer of a generic real vector in its fixed hyperplane is a rank-one conjugate parabolic. This last statement must use the earlier proved chamber-stabilizer theorem, not an assumption about arbitrary finite orthogonal groups.

Set delta=1−t. The existing Molien identity gives

    prod_i(1−t^d_i)^−1 = (1/|W|) sum_w det(1−t w|V*)^−1.

The identity contributes delta^−n. Each reflection contributes delta^−(n−1)/(1+t), whose first coefficient is 1/2. Every other element has at most n−2 fixed eigenvalues and contributes O(delta^−(n−2)); the finite-order diagonalization and its nonunit eigenvalues were proved in the existing supplier. Expanding the polynomial-invariant side gives

    delta^−n/(prod_i d_i) [1 + (delta/2) sum_i(d_i−1) + O(delta^2)].

Matching leading and next coefficients yields prod_i d_i=|W| and sum_i(d_i−1)=N. This is a rational-function comparison at t=1, with only a finite group sum; no analytic interchange of infinite limits is needed.

Let p_i be the basic invariants and J their differential determinant. J is nonzero in characteristic zero. One direct proof: the monic orbit polynomial prod_(w in W)(T−w(x_j)) has invariant coefficients in C[p_1,...,p_n], so each x_j is algebraic over C(p_1,...,p_n). The resulting finitely generated algebraic field extension is finite and separable in characteristic zero. Differentiate each coordinate's minimal polynomial; its nonzero derivative solves dx_j as a linear combination of dp_i, so the matrix (dp_i) has full rank over the rational function field. Ordinary formal rational differentiation and separability must be named local suppliers if not already imported.

Chain-rule invariance gives J(w x) det(w)=J(x), hence J is anti-invariant. Restriction to each reflection hyperplane makes J vanish, so its linear equation divides J. Distinct equations are prime and nonassociate; repeated division gives Delta divides J, where Delta is the product over the N distinct hyperplanes. Since deg J=sum_i(d_i−1)=N, J is a nonzero constant times Delta. This proves differential independence at every complex point outside those hyperplanes; it does not assume a general étale-quotient theorem.

The independently closed bipartite Coxeter-plane construction gives a Coxeter element c of order h, a plane meeting the interior real chamber, and a nonreal eigenvector x with c x=zeta_h^−1 x. No real root hyperplane contains that plane. Its real and imaginary eigenvector parts span the plane, so x is outside every complexified reflection hyperplane and J(x)≠0. Handle A_1 directly: invariants are C[x^2], h=2 and d=2.

At this regular x, homogeneity and invariance give

    dp_i(x) composed with c = zeta_h^(d_i−1) dp_i(x).

The dp_i(x) form a basis of the dual vector space, so the eigenvalue residues of c equal d_i−1 modulo h. Covariance uses the zeta_h^−1 eigenvector; choosing zeta_h instead reverses the residues.

There is no eigenvalue one. For c=s_1...s_n, set beta_i=s_1...s_(i−1) alpha_i. Each beta_i is alpha_i plus a combination of earlier simple roots, so the beta_i are a basis. The telescoping identity is

    (c−1)v = −2 sum_i B(v,alpha_i) beta_i

for the unit-root convention. Thus cv=v forces B(v,alpha_i)=0 for every i and hence v=0. The finite real orthogonal spectrum is inverse-paired. Choose all residues r_i in {1,...,h−1}; each inverse pair sums to h and a self-inverse −1 contributes h/2. Therefore sum_i r_i=n h/2. Independent ordered-root enumeration gives N=n h/2. Each positive d_i−1 differs from its corresponding r_i by a nonnegative multiple of h, and their total differences vanish. Consequently d_i−1=r_i. This proves the degree/exponent identification and its bound, rather than presupposing the traditional degree table.

The bipartite plane/root enumeration is independent of invariant degrees and length generating functions. Place its proof page before invariant degree determination; moving previously unregistered draft rows is permitted. The finite reflection-length/bipartite pages have no invariant or Poincaré dependency, so this reordering introduces no cycle.

## Explicit spectra

For A_n, the standard adjacent-transposition product is an (n+1)-cycle on the sum-zero subspace: residues 1,...,n at h=n+1. For B_n it is a signed n-cycle: characteristic polynomial X^n+1, residues 1,3,...,2n−1 at h=2n. For D_n, the two final commuting fork reflections negate the final two coordinates; the product gives a signed (n−1)-cycle and a separate −1, so residues 1,3,...,2n−3 and n−1 at h=2n−2. For I_2(m), the rank-two rotation gives residues 1,m−1. These concrete models must be identified with the already proved canonical finite representations and diagram conventions.

The exact script `finite-degree-poincare.py` constructs all six exceptional reflection matrices in dual simple-root coordinates. It uses 2cos(pi/3)=1, 2cos(pi/4)=sqrt(2), and 2cos(pi/5)=phi with phi^2=phi+1. A bipartite reflection product is recorded as an applied-reflection sequence. Faddeev–LeVerrier/Newton traces compute the rank-at-most-eight characteristic polynomial in characteristic zero. Exact multiplication in Q[z]/Phi_h verifies its factors with these residues:

| Type | h | Residues / exponents |
|---|---:|---|
| E6 | 12 | 1,4,5,7,8,11 |
| E7 | 18 | 1,5,7,9,11,13,17 |
| E8 | 30 | 1,7,11,13,17,19,23,29 |
| F4 | 12 | 1,5,7,11 |
| H3 | 10 | 1,5,9 |
| H4 | 30 | 1,11,19,29 |

For H3/H4, the positive embedding is phi=1+z^(h/5)+z^(−h/5). The F4 characteristic polynomial is rational, so no sqrt(2) embedding in Q(zeta_12) is assumed. This is exact arithmetic; no floating approximations or unproved invariant-degree labels are used to identify spectra.

## Poincaré products by small parabolic quotient certificates

If T=S\{s} and lambda is the dual fundamental vector with B(lambda,alpha_j)=delta_sj, the earlier chamber-stabilizer theorem gives Stab_W(lambda)=W_T. Its orbit is W/W_T. A generator moves an orbit vertex by one Schreier edge; graph distance from lambda equals minimum Coxeter word length of its coset. The already proved parabolic decomposition identifies this with the unique minimal coset-representative length. Thus

    P_W(t)=P_WT(t) sum_orbit t^distance.

Each exceptional certificate includes all exact orbit coordinates, every generator edge, an applied word reaching each vertex, and a distance. Closure plus the explicit words give all reachable orbit points and length upper bounds. Checking every edge changes the distance by at most one gives matching lower bounds. The finite BFS is independently reproducible without enumerating the full group. Certificate sizes are:

| Pair | Orbit size |
|---|---:|
| E6/D5 | 27 |
| E7/E6 | 56 |
| E8/E7 | 240 |
| F4/B3 | 24 |
| H3/I2(5) | 12 |
| H4/H3 | 120 |

The script verifies coefficientwise that each quotient-length polynomial times the independently established parabolic degree product equals prod_i[degree_i]_t, with [d]_t=1+...+t^(d−1). The largest complete group, E8, has nearly seven hundred million elements; only its 240-vertex quotient is enumerated here.

Classical quotient recurrences have direct uniform proofs. A_n/A_(n−1) gives one representative at each length 0,...,n. B_n/B_(n−1) has the signed-coordinate orbit ±e_i: move e_1 along the chain, flip the final sign, then move back, giving one point at each length 0,...,2n−1. D_n/D_(n−1) gives one point at each length 0,...,n−2 and n,...,2n−2, and two at length n−1, so its polynomial is [n]_t(1+t^(n−1)). Explicit coordinate distances change by at most one under every simple reflection and the stated paths attain them, proving minimality. Include D2=A1×A1 and D3=A3 as bases. The dihedral quotient by one simple reflection has its alternating path of m vertices, giving [m]_t; the rank-two normal forms establish minimality. Products of diagram components add lengths and multiply both generating and invariant Hilbert series.

These recurrences prove the A/B/D/I length products. The six exact certificates prove every exceptional step. Their degree tables were obtained independently by the gradient/spectrum argument above, so length enumeration is not used to define or infer invariant degrees.

## Actual verification

Command: `python3 research/coxeter-scaffold/math-checks/finite-degree-poincare.py`.

Completed successfully on 2026-10-07. Every one of the six orbit closure, inverse-edge, word, distance, characteristic-polynomial and cyclotomic-spectrum checks passed; every coefficientwise Poincaré product identity passed. Full exact data is in `finite-degree-poincare-certificates.json`. These are finite mathematical certificates plus a proof of their interpretation, not a claim that all future library items have been authored or certified.
