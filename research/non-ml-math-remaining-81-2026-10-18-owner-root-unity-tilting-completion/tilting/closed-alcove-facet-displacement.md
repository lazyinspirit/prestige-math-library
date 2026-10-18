# Integral facet displacement in a simply-laced alcove

This is a complete geometric construction for the displacement part of the pending translation helper. It does not assert that its target tilting is a tensor summand; that remaining order/translation implication belongs to the parent's independent helper.

Let the root system be irreducible simply laced with roots of squared length two, full weight lattice P, highest root theta=sum_i a_i alpha_i, rho=sum_i omega_i, and Coxeter number h=1+sum_i a_i. Let ell>h be odd and k=ell-h. Let mu be an integral dominant point in the open shifted bottom alcove, so m_i=(mu,alpha_i)>=0 and sum_i a_i m_i<=k. For EACH facet of that alcove there is an integral point lambda in its relative interior such that the ordinary Weyl-dominant representative gamma of mu-lambda is dominant in the CLOSED shifted bottom alcove, meaning (gamma,theta)<=k+1.

For A,D,E6,E7 choose a nonzero minuscule fundamental weight omega. Its existence follows directly from a highest-root mark one in these diagrams: pairing its fundamental weight with any positive root is at most its pairing with theta, hence at most one. The usual diagrams have such a mark (all A nodes, the D endpoint nodes, and the endpoint minuscule nodes of E6 and E7). All weights in W omega pair with every root in {-1,0,1}.

For the finite facet i, form the finite full-rank root subsystem with simple roots {-theta} union {alpha_j:j!=i}. They are independent, their off-diagonal pairings are nonpositive, and the subgroup they generate is a finite reflection subgroup of W. Move omega into its antidominant chamber and call the resulting W-orbit weight eta_i. Then (eta_i,alpha_j)<=0 for j!=i and (eta_i,theta)>=0. Since theta=sum a_j alpha_j, the pairing with alpha_i must be positive: if it were zero, the displayed sign conditions would force every simple pairing zero and hence eta_i=0, impossible. Minuscule boundedness makes that positive pairing exactly one. Put r=m_i+1 and lambda=mu-r eta_i. Its i-th coordinate is -1, every other finite Dynkin coordinate is nonnegative, and its theta pairing has not increased. Thus lambda+rho lies on exactly the i-th finite facet and no other facet. The dominant representative of mu-lambda is r omega, whose theta pairing is r<=k+1. For the upper facet, put r=k+1-(mu,theta)>0 and lambda=mu+r omega. It is dominant, lies on exactly the upper facet, and its displacement again has dominant representative r omega in the closed bottom alcove.

The remaining type E8 has h=30, marks (2,3,4,6,5,4,3,2), and k=ell-30 positive odd. Use the orthonormal coordinate realization with roots +/-e_i+/-e_j and half-sums (1/2)(+/-e_1+...+/-e_8) having an even number of minus signs. Choose simple roots

    alpha1=(e1-e2-e3-e4-e5-e6-e7+e8)/2,
    alpha2=e1+e2,
    alpha3=e2-e1,
    alpha4=e3-e2, alpha5=e4-e3,
    alpha6=e5-e4, alpha7=e6-e5, alpha8=e7-e6.

Then theta=e7+e8 has Dynkin coordinate vector (0,0,0,0,0,0,0,1). For finite facet i use the following actual roots eta_i; the middle column gives their full Dynkin pairings and verifies every sign used in the argument.

| i | Dynkin pairings of eta_i | Coordinate vector eta_i |
|---|---|---|
| 1 | (1,0,0,0,0,0,0,-1) | -e7+e8 |
| 2 | (0,1,0,0,0,0,-1,0) | (e1+e2+e3+e4+e5-e6-e7+e8)/2 |
| 3 | (0,0,1,0,0,-1,0,0) | (-e1+e2+e3+e4-e5-e6-e7+e8)/2 |
| 4 | (0,-2,0,1,0,0,0,0) | -e1-e2 |
| 5 | (0,0,0,0,1,-1,0,0) | e4+e8 |
| 6 | (0,0,0,0,0,1,-1,0) | e5+e8 |
| 7 | (0,0,0,0,0,0,1,-1) | e6+e8 |
| 8 | (0,0,0,0,0,0,0,1) | e7+e8 |

Each vector is visibly in the displayed root set. Its theta pairing is nonnegative (respectively 0,0,0,0,1,1,1,2), its i-th pairing is one, and all other finite pairings are nonpositive. Set r=m_i+1 and lambda=mu-r eta_i as before. It is in the relative interior of finite facet i. The dominant representative of the root eta_i is theta, so gamma=r theta and (gamma,theta)=2r. Since every mark a_i>=2 and k is odd, m_i<=floor(k/2), hence 2r<=k+1. Thus gamma is in the closed bottom alcove.

For the E8 upper facet put r=k+1-(mu,theta). If r is even, set lambda=mu+(r/2)theta. The dominant displacement is (r/2)theta and its theta pairing is r<=k+1. If r is odd, then (mu,theta) is odd because k+1 is even, so m_j>0 for one of the odd-mark nodes j=2,5,7. Select respectively

    beta2=-e1+e8,   with Dynkin pairings (0,-1,1,0,0,0,0,0),
    beta5= e3+e8,   with Dynkin pairings (0,0,0,1,-1,0,0,0),
    beta7= e5+e8,   with Dynkin pairings (0,0,0,0,0,1,-1,0).

These are roots with theta pairing one, and their only negative Dynkin coordinate is -1 at the selected j. Put u=(r-1)/2 and lambda=mu+u theta+beta_j. Every finite Dynkin coordinate remains nonnegative because m_j>=1, and its theta pairing increases by 2u+1=r, so lambda is in the relative interior of the upper facet. For any root alpha, |(u theta+beta_j,alpha)|<=2u+2=r+1, using the length-two root pairings. The theta pairing of the dominant Weyl representative of the displacement is the maximum of these root pairings, hence at most r+1. Because r is odd and k+1 is even, r<=k, so this maximum is at most k+1 as required.

Finally this construction transports to any affine alcove: if mu=w dot mu0 and F=w(F_i), take lambda=w dot lambda0. The difference mu-lambda is the finite linear Weyl part of w applied to mu0-lambda0, so its ordinary dominant representative is unchanged. A facet inside the shifted dominant chamber and away from its boundary has integral relative-interior labels which are dominant: every shifted finite simple pairing is then a positive integer. This establishes the exact displacement hypothesis needed in the translation-helper request, including E8 ell31 and all finite facets; it does not rely on an arbitrary fixed facet point.
