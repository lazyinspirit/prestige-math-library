# Relative-cap construction: exact noncircular interface

This is a research derivation, not an installed supplier or acceptance. The
remaining premise is a locally constructed perfect parabolic nil-Hecke form
and its actual relative cap. Defining only the residue notation does not remove
that premise. Preserve the generic admissible Q and arbitrary characteristic
scope.

Let the monic polynomial p have degree N over a coefficient ring C. For r<=N,
the rank-one cyclotomic nil-Hecke algebra H_r(p) is the Artin matrix algebra
over the monic factor ring T_r(p). Fix the Artin matrix units, so Tr_r is the
ordinary finite matrix trace, independent of a choice of roots. Put
Delta_r=product_{s<t}(X_s-X_t) and b_r=X_1^(r-1) X_2^(r-2)...X_(r-1).
For a polynomial numerator, Res at infinity is the coefficient of
X_1^-1 ... X_r^-1 in the formal expansions of 1/p(X_s). Monicity makes
each required coefficient a finite integral polynomial in the coefficients
of p. No analytic residue, chosen root, or 1/r! occurs.

The target form is

    t_r^p(z)=(-1)^(r(N-r)) Res(Delta_r b_r Tr_r(z) / product_s p(X_s)).

To identify it with a locally proved parabolic divided-difference form,
work first with universal coefficients over Z, then its rational generic-root
fraction field. Ordered tuples with repeated roots have zero Vandermonde.
For each r-subset of distinct roots xi, summing the orderings of Delta_r b_r
gives Delta_r(xi)^2 by the alternating determinant. Their internal denominator
is (-1)^(r(r-1)/2) Delta_r(xi)^2. Cancellation leaves precisely the
cross-subset difference denominator. The longest parabolic divided difference
has that expression: expanding the product of source operators
(s-1)/(X_s-X_(s+1)) and restricting to block-symmetric inputs groups the
terms by those subsets. The sign is fixed by the staircase input, rather than
by a division by factorials. Both sides preserve the integral polynomial ring;
equality over the generic fraction field therefore specializes over Z and
every coefficient ring. This establishes the residue formula *once* the
parabolic trace construction and its normalization have been installed.

Let p'=pq, deg q=A, and Q=tq with t invertible. Put
U_r=product_{s=1}^r Q(X_s,y). The symmetric multiplier is central for the
nil-Hecke action. It defines j_r:H_r(p)->H_r(p') because U_r p(X_1)
contains the factor p(X_1)q(X_1), and hence kills the entire two-sided ideal.
The quotient pi_r:H_r(p')->H_r(p) exists because (pq(X_1)) is contained
in (p(X_1)). Cancelling the q factors in the residue gives

    t_r^(p')(j_r z)=(-1)^(rA) t^r t_r^p(z).

If the two forms are perfect, this proves j_r injective and gives its adjoint
as the indicated unit times pi_r. Perfectness is indispensable here; it is
not supplied by formal residue notation.

Suppose the actual relative caps epsilon_r^p satisfy
t_r^p epsilon_r^p=t_(r+1)^p and are H_r-bilinear. For z in H_(r+1)(p),
choose any lift to H_(r+1)(p'). Test the proposed relative-cap equality
against an arbitrary a in H_r(p), using j_r(a) in the larger algebra.
Bilinearity and the full-form identity at r+1 give

    t_r^(p')(j_r(a) epsilon_r^(p')(Q(X_(r+1),y) lift(z)))
      = (-1)^((r+1)A) t^(r+1) t_(r+1)^p(a z)
      = (-1)^((r+1)A) t^(r+1) t_r^p(a epsilon_r^p(z)).

The full-form adjoint identity at r turns the left side into
(-1)^(rA)t^r t_r^p(a pi_r epsilon_r^(p')(Q lift(z))).
Cancel the unit and use perfectness of t_r^p. The exact result is

    pi_r epsilon_r^(p')(Q(X_(r+1),y) lift(z))
       = (-1)^A t epsilon_r^p(z).

This simultaneously proves independence from the lift and applies to every
nil-Hecke matrix/coset element, rather than only polynomial dot monomials.
Normalizing epsilon_r^p by (-1)^(N+1), and its dual unit by the inverse
scalar, changes the p' normalization by (-1)^A; the relative-cap constant
becomes t. The one-variable coefficient identity
tau_(pq)(Q f)=t tau_p(f) independently checks this at r=0. Source crossings
kappa=-tau_native appear twice in a sideways cancellation, so they do not
change this scalar. Reversing the ordered colors gives t_ji separately.

The canonical model carrier must still prove: T_r(p)/C has the perfect form
used here; H_r(p) has the declared Artin matrix realization over T_r(p);
the concrete flag cap agrees with this unique relative form; and its native
grading/normalization matches the formal presentation. The retained original
rank-one-universal-model provides a possible route using monic splitting,
parabolic divided differences and matrix units. Its rho paragraph invokes
the independent canonical categorical commutator and then graded Nakayama,
so using it requires a checked supplier dependency and canonical-map bridge,
not an assertion that the current five deps already prove it.
