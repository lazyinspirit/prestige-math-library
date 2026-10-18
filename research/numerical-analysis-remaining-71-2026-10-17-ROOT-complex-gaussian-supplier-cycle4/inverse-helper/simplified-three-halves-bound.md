# Smaller certificate for the sufficient factor 3/2

Under the model and notation of local-density-recurrence-proof.md,

    E||W^{-1}||op <= (2/3)e^2(k+p)/p^2,   k,p>=2.

Use the fully locally proved Catalan bound there and the finite-q
Holder/Jensen step in findings.md. It suffices to show

    R_q(p)=e^2 D_q(p)^{1/q}/[p^2 C_{q-1}^{1/q}] >= 3/2

for some integer 2<=q<=p. The stronger factor9/5 proof remains valid,
but the factor3/2 needed by the consumer admits a much smaller certificate.

For the entire finite range, only three rows are required:

| Inclusive p range | q |
| --- | --- |
| 2 through 20 | 2 |
| 21 through 100 | 4 |
| 101 through 2499 | 16 |

As shown in findings.md, R_q has no interior minimum on any interval
in p>q-1, because

    qp (log R_q)'=-1+sum_{j=1}^{q-1} 2j^2/(p^2-j^2)

has a strictly decreasing right side. Since e^2>369/50, the six endpoint
inequalities follow from the exact integer comparisons

    D_q(p)123^q >= 25^q p^{2q} C_{q-1}.

These six inequalities were evaluated with exact integers by the final
section of check_integer_endpoints.py; all pass. Thus this finite part
requires only six finite integer certificates, rather than a numerical
scan of the parameter range.

For p>=2500 take q=floor(sqrt(p)). Then q>=sqrt(p)-1 and q/p<=1/50.
The function log(p)/(sqrt(p)-1) decreases for p>=2500: its derivative
has the sign of 2(sqrt(p)-1)-sqrt(p)log(p), which is negative since
log(p)>2. Since log(2500)<8, this gives

    p^{1/q} <= exp(8/49) < exp(1/6) <= 6/5.

The last inequality follows termwise from the exponential and geometric
series, exp(t)<=1/(1-t) for 0<=t<1. Also C_{q-1}<=4^{q-1} and
D_q(p)>=p^{2q-1}(1-q^2/p^2)^{q-1}. Hence

    E||W^{-1}||op
       <= (k+p)/p^2 * [4 p^{1/q}/(1-q^2/p^2)]
       <= (k+p)/p^2 * (24/5)(2500/2499).

Finally

    (369/50)(5/24)(2499/2500) - 3/2 = 7377/200000 > 0,

an immediate rational comparison, so e^2 exceeds three halves of the
displayed coefficient. This completes a local finite-parameter proof
with the smaller certificate.

Elementary logarithm comparisons used above can themselves be avoided
as opaque numerical facts: e<3 follows from 1/n!<=1/2^{n-1} for n>=1,
with strict inequality for n>=3, so exp(2)<9<2500. The exponential
series for exp(8) through order fourteen sums to
124702229549/42567525>2500. The series for exp(2) through order eight
sums to 2327/315>369/50. No floating-point comparison is needed anywhere
in this proof.
