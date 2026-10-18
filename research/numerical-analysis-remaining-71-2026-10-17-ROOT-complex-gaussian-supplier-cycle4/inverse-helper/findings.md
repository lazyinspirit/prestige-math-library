# Cycle 4 inverse helper: a uniform factor 9/5 of slack

Research only. Let G be k by ell=k+p with independent normalized circular
complex Gaussian entries, W=GG*, and k,p integers at least two. Then

    E ||W^{-1}||op <= (5/9) e^2 ell/p^2.

Consequently a separately proved covariance coefficient C2<=9/5 can be
absorbed in the requested b^2=e^2 ell/p^2. This note proves the inverse
estimate only; it does not establish any covariance comparison.

Follow-up: local-density-recurrence-proof.md now supplies a complete local
derivation of the density and recurrence used here. The published
recurrence is corroborating evidence, rather than a missing local proof.
For the sufficient factor3/2 with only six integer certificates, see
simplified-three-halves-bound.md.

## Source and normalization

Fetched the complete HTML and PDF of Cunden, Mezzadri, O'Connell, Simm,
“Moments of random matrices and hypergeometric orthogonal polynomials,”
Commun. Math. Phys. 369 (2019), 1091–1145,
https://arxiv.org/html/1805.08760v5 and https://arxiv.org/pdf/1805.08760.
Local files are moments.html, moments.pdf, and an HTML text extraction
moments.txt. Inspected the actual definitions in Section 2 and Section 4.2,
Theorem 4.4, Eq. (4.15), and the surrounding proof/explanation. No claim
of reading every other section is made.

Their n is our k, m is our ell, and alpha=m-n is our p. Their LUE density
in Section 2 is proportional to det(X)^alpha exp(-Tr X), hence it is the
Wishart law for entry density pi^{-1} exp(-|z|^2), exactly the normalized
circular convention. Section 4.2 defines Q_s=E Tr X^s, not normalized
trace. Theorem 4.4 gives its representation on Re(s)>-p-1; the following
remark gives the Haagerup–Thorbjornsen recurrence, Eq. (4.15):

    (s+2) Q_{s+1} = (2s+1)(2k+p) Q_s
                       + (s-1)(s^2-p^2) Q_{s-1}.

All moments used below have integer order q<=p and therefore exist.
Section 2 also gives T1=k/p and the inverse/positive moment reciprocity
law (2.3). Thus this proof uses a precisely sourced finite-moment identity,
not an assumed eigenvalue density or an asymptotic law.

## Catalan trace-moment bound

Put T_r=E Tr W^{-r}, T_0=k. Substitution s=-r in (4.15) gives

    (r+1)(p^2-r^2) T_{r+1}
       = (2r-1)(2k+p) T_r + (2-r) T_{r-1}.

For r=1 this and T1=k/p give exactly

    T2 = k ell/[p(p^2-1)].

For 2<=r<p the final summand is nonpositive and 2k+p=k+ell<=2ell.
Since C_r/C_{r-1}=(4r-2)/(r+1), induction proves for 2<=q<=p

    T_q <= C_{q-1} k ell^{q-1}/D_q(p),
    D_q(p) = p product_{j=1}^{q-1}(p^2-j^2),
    C_a = binom(2a,a)/(a+1).

For each such finite q, the pointwise inequality ||W^{-1}||op^q <=
Tr W^{-q} and Holder/Jensen imply

    E||W^{-1}||op <= T_q^{1/q}
       <= ell [C_{q-1}/D_q(p)]^{1/q}.

There is no limit in q and no reversal of Jensen. Define

    R_q(p) = e^2 D_q(p)^{1/q}/[p^2 C_{q-1}^{1/q}].

It suffices to select q<=p for which R_q(p)>=9/5.

## The finite range: 2<=p<10^6

Use the 19 interval/q rows in check_integer_endpoints.py. For each fixed
q, logarithmic differentiation gives

    q p (log R_q)' = -1 + sum_{j=1}^{q-1} 2j^2/(p^2-j^2).

The right side strictly decreases with p>q-1. Therefore R_q has at most
one turning point, a maximum; its minimum on any closed interval is at
an endpoint. Since e^2>369/50=7.38 (already the exponential series
through order eight proves this), it suffices at an endpoint to check

    D_q(p) 41^q >= 10^q p^{2q} C_{q-1}.

The checker evaluates these inequalities as exact Python integers, also
checks q<=the interval's lower endpoint, and checks contiguous coverage.
Executed it successfully: all 38 endpoint inequalities pass and the
intervals cover every integer p from 2 through 999999. These are exact
finite inequalities, not floating-point evidence. The checker itself
and the derivative argument constitute a compact certificate for the
finite part of the proof.

## The infinite range: p>=10^6

Take q=ceil(100 log p). Then q<=101 log p, so monotonicity of log(p)/p
and log(10^6)<14 give q/p<1/500; in particular 2<=q<p.
Use C_{q-1}<=4^{q-1} and

    D_q(p) >= p^{2q-1}(1-q^2/p^2)^{q-1}.

The preceding trace-moment estimate now gives

    E||W^{-1}||op
       <= (ell/p^2) 4 p^{1/q}/(1-q^2/p^2).

Here p^{1/q}<=exp(1/100). Therefore the ratio of b^2 to this upper bound
is at least

    (e^2/4) exp(-1/100) (1-1/250000)
       > (369/200)(99/100)(249999/250000) > 9/5.

The middle inequality uses exp(-x)>=1-x. This completes the uniform
finite-parameter proof.

## Additional exact moments and limitations

The same recurrence gives

    T3 = k ell(2k+p)/[p(p^2-1)(p^2-4)]    (p>=3),
    T4 = k ell(5k ell+p^2+1)/[p product_{j=1}^3(p^2-j^2)] (p>=4).

These are useful checks on the indexing and normalization. The separate
local-density-recurrence-proof.md removes the initially outstanding local
derivation obligation. No canonical item, test, gate, run state, or control
file was changed by this helper.
