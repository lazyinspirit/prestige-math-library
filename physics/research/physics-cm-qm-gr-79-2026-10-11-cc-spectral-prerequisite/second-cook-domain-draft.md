---
title: "Research repair: arbitrary-H Cook domain criterion under CC"
status: draft
domain: mathematics
proof_strategy: direct
---

Research-only author support for the exact second-consumer release in
`second-consumer-scope-request.md`. Producer:
`thm-nrqm-controlled-dynamics-cook-domain-criterion`; inspected raw SHA256
`c2fcfdf4338c33daa81898c93553a5772801accc65801f0a794efa8097564284`.
This file and adjacent unique checks are the entire write scope. The sole
spectral repair successor retains owning acceptance, all consumers and caps.

The actual autonomous group dependency assumes AC, while this criterion
assumes only CC. The replacement below constructs both groups on arbitrary
Hilbert spaces from their nonreal resolvents. It also expands the moving-vector
product derivative and establishes its norm-continuous right side using
exactly the given difference continuity and the free graph continuity.
The original Facts' notation $H_0\subseteq H$ must not be interpreted as
operator inclusion: the actual hypothesis is only $D(H_0)\subseteq D(H)$.
No equality of the two operators on their common domain is assumed.

## Statement

Assume CC. To distinguish the Hilbert space from the interacting operator,
write the space as $\mathcal H$, the free operator as $A_0$, and the
interacting operator as $A$. Both are self-adjoint, with
$D(A_0)\subseteq D(A)$. Let $D\subseteq D(A_0)$ be a dense linear
subspace of $\mathcal H$, invariant under $e^{-itA_0}$ for every real $t$.
For every $\psi\in D$, suppose
$b_\psi(t)=(A-A_0)e^{-itA_0}\psi$ is norm-continuous on $\mathbb R$,
and its norm is integrable on both half-lines. Define

$$F(t)=e^{itA}e^{-itA_0}.$$

Then $\Omega_\pm\psi=\lim_{t\to\pm\infty}F(t)\psi$ exist on $D$ and,
for every $s\ge0$, satisfy the full original estimates

$$\|\Omega_+\psi-F(s)\psi\|\le\int_s^\infty\|b_\psi(t)\|dt,\qquad \|\Omega_-\psi-F(-s)\psi\|\le\int_{-\infty}^{-s}\|b_\psi(t)\|dt.$$

They extend uniquely to bounded linear isometries on all $\mathcal H$,
with $\Omega_\pm^*\Omega_\pm=I$, injectivity and closed ranges. The
extensions are the full strong limits of $F(t)$ in the two time directions.
No separability, AC, range equality, spectral-type conclusion or asymptotic
completeness is imposed or inferred.

For the consuming intertwining/domain argument, the same construction also
proves the consequence

$$e^{-i\tau A}\Omega_\pm=\Omega_\pm e^{-i\tau A_0},\qquad D(A)\cap\operatorname{ran}\Omega_\pm=\Omega_\pm D(A_0),\qquad A\Omega_\pm\eta=\Omega_\pm A_0\eta\quad(\eta\in D(A_0)).$$

This last displayed domain equality is restricted to the wave range; it
does not assert that $\Omega_\pm$ is onto $\mathcal H$.

## Facts & Assumptions

**Given:** CC and the exact $\mathcal H,A_0,A,D,b_\psi$ above. Inner
products are linear in the first argument. Only domain inclusion is given.

[F1] The actual `thm-self-adjoint-resolvent-estimate` assumes CC and supplies
$R_z=(C-z)^{-1}$ for a self-adjoint $C$ on arbitrary $\mathcal H$, with
$\|R_z\|\le|\operatorname{Im}z|^{-1}$, exact range $D(C)$, adjoint
$R_z^*=R_{\overline z}$, and the commuting resolvent identities.
Self-adjoint operators are closed. The actual `thm-riesz-representation-for-hilbert-space` explicitly assumes
CC, and gives unique representing vectors and hence adjoints of bounded operators,
with no arbitrary Hilbert-basis selection. The exact bounded-adjoint use
is only $\Omega_\pm^*$ below.

[F2] Continuous Hilbert-valued curves on compact intervals have norm
Riemann integrals by uniform continuity and completeness. Their integral
norm inequality follows from the finite triangle inequality, and the
fundamental theorem follows by averaging on shrinking intervals. The
improper integrals below are limits of such finite-interval integrals,
controlled by the given scalar norm-integrability. These are vector
integrals, not integrals of unbounded operator families.

## Proof

1.1 [Actual arbitrary-H autonomous construction] For either $C=A$ or $C=A_0$, define $J_n=n^2R_{in}R_{-in}$ and the bounded self-adjoint $C_n=CJ_n=(n^2/2)(R_{in}+R_{-in})$. Resolvent algebra gives $\|J_n\|\le1$, $\|C_n\|\le n$ and, for $y\in D(C)$, $(I-J_n)y=\tfrac12(R_{in}+R_{-in})Cy$, so $\|(I-J_n)y\|\le\|Cy\|/n$. Density gives $J_n\to I$ strongly on $\mathcal H$, and $C_ny=J_nCy\to Cy$. The bounded power-series exponentials $E_n(t)=e^{-itC_n}$ are unitary, commute with one another and with resolvents, and satisfy $\|(E_n(t)-E_m(t))y\|\le|t|\|(C_n-C_m)y\|$ by the bounded Duhamel identity and commutation. Thus they converge strongly, uniformly on compact time intervals, first on $D(C)$ and then by density on all $\mathcal H$. The limits $E_C(t)$ are a strongly continuous unitary group: products pass through strong limits of norm-one factors, the opposite-time products are $I$, and each limit preserves norms. Each bounded approximation preserves $D(C)$ and commutes with $C$ there, as follows by graph-norm convergence of its power series and resolvent commutation. Closedness therefore gives $E_C(t)y\in D(C)$ and $CE_C(t)y=E_C(t)Cy$. Passing to the bounded integral identities gives $E_C(t)y=y-i\int_0^tE_C(r)Cy\,dr$, hence $E_C'(t)y=-iCE_C(t)y$. In particular, both $E_C(t)y$ and $CE_C(t)y$ are norm-continuous: this is actual graph continuity, not domain preservation inferred solely from a strong limit. Write $E_C(t)=e^{-itC}$. [given, F1, F2, construct, algebra]

2.1 [Exact generator converse by adjoint testing] If $\lim_{h\to0}(e^{ihC}x-x)/h=g$ exists strongly, then for every $v\in D(C)$, unitarity and step 1.1 give $\langle g,v\rangle=\lim_{h\to0}\langle x,(e^{-ihC}v-v)/h\rangle=i\langle x,Cv\rangle$. Thus $\langle Cv,x\rangle=\langle v,-ig\rangle$ for every $v\in D(C)$. The exact definition of the unbounded adjoint implies $x\in D(C^*)=D(C)$ and $Cx=-ig$. Conversely step 1.1 gives the derivative $iCx$ for every $x\in D(C)$. This proves the precise generator-domain characterization without spectral Fatou arguments, Stone premises or separability. [F1, step 1.1, algebra]

2.2 [Moving-domain vector differentiation] Fix $\psi\in D$ and put $x(t)=e^{-itA_0}\psi$. Step 1.1 gives $x\in C^1(\mathbb R;\mathcal H)$, $x'(t)=-iA_0x(t)$, $x(t)\in D(A_0)\subseteq D(A)$, and norm-continuity of $A_0x(t)$. The given difference curve gives $Ax(t)=A_0x(t)+b_\psi(t)$, hence actual continuity of $x(t)$ in the graph norm of $A$. For the product derivative, use the identity $F(t+h)\psi-F(t)\psi=e^{i(t+h)A}[x(t+h)-x(t)]+e^{itA}[e^{ihA}-I]x(t)$. After division by $h$, the first term tends to $e^{itA}x'(t)$ by strong continuity and the uniform norm-one bound; the second tends to $ie^{itA}Ax(t)$ by the autonomous derivative on the fixed vector $x(t)\in D(A)$. Therefore $F'(t)\psi=ie^{itA}b_\psi(t)$. This is norm-continuous: subtract its value at a fixed $u$, use the norm-continuity of $b_\psi$ for the moving-vector term and strong continuity of the group on the fixed vector $b_\psi(u)$ for the remaining term. No general rule about differentiating an unbounded operator on an unspecified moving domain is invoked. [given, step 1.1, algebra]

3.1 [Both Cook limits and both tail estimates] For every pair of real numbers $r_1<r_2$, step 2.2 and [F2] give $F(r_2)\psi-F(r_1)\psi=i\int_{r_1}^{r_2}e^{irA}b_\psi(r)dr$ and hence $\|F(r_2)\psi-F(r_1)\psi\|\le\int_{r_1}^{r_2}\|b_\psi(r)\|dr$. The positive tail is Cauchy by its assumed integrability; completeness gives its limit, which can be constructed from the integer times and then identified with all real times by this estimate. Fixing $r_1=s\ge0$ and taking $r_2\to+\infty$ yields the stated positive tail bound. On the negative half-line the same displayed identity holds, without changing the free-group sign. Negative-tail integrability makes it Cauchy as both $r_1,r_2\to-\infty$; the integer sequence $-n$ and the same estimate give the full negative limit. Fixing $r_2=-s$ and taking $r_1\to-\infty$ gives exactly the asserted negative tail bound. Linearity of both limits follows from linearity of every $F(t)$, and their norms equal $\|\psi\|$ because $F(t)$ is unitary. [given, F2, step 1.1, step 2.2, algebra]

4.1 [Unique extension and full strong limits without energy-indexed choice] For each fixed $\eta\in\mathcal H$, density of $D$ and unitarity give $\|(F(t)-F(u))\eta\|\le2\|\eta-\psi\|+\|(F(t)-F(u))\psi\|$ for every $\psi\in D$. Given a tolerance, choose a single sufficiently close $\psi$ and then use step 3.1; this proves Cauchyness on both full tails for $\eta$. Integer-time completeness and the same estimate give unique limits $\Omega_\pm\eta$ over all real times. This construction uses uniquely specified limits for each vector, with no simultaneous arbitrary-index choice of approximating sequences. They are linear and norm-preserving by passage from the linear unitary $F(t)$, hence bounded isometries extending their values on $D$. Any bounded extension agreeing on dense $D$ is identical. Polarization gives $\langle\Omega_\pm\eta,\Omega_\pm\zeta\rangle=\langle\eta,\zeta\rangle$, so their actual bounded adjoints satisfy $\Omega_\pm^*\Omega_\pm=I$. They are injective because they preserve norms. If $\Omega_\pm\eta_n$ converges, isometry makes $\eta_n$ Cauchy, and completeness followed by continuity gives its limit in the range; the range is therefore closed. [F1, step 3.1, algebra]

5.1 [Intertwining and exact domain on the wave range] For fixed real $\tau$ and either time direction, the identity $F(t)e^{-i\tau A_0}=e^{-i\tau A}F(t+\tau)$ follows from the two group laws. Step 4.1's full strong limits are unchanged by a fixed time shift, so they give $\Omega_\pm e^{-i\tau A_0}=e^{-i\tau A}\Omega_\pm$. If $\eta\in D(A_0)$, differentiate the group identity on its free side: the derivative of $e^{itA}\Omega_\pm\eta$ exists and is $i\Omega_\pm A_0\eta$. Step 2.1 therefore implies $\Omega_\pm\eta\in D(A)$ and $A\Omega_\pm\eta=\Omega_\pm A_0\eta$. Conversely, if $\Omega_\pm\eta\in D(A)$, multiply the group identity by $\Omega_\pm^*$ to obtain $e^{itA_0}\eta=\Omega_\pm^*e^{itA}\Omega_\pm\eta$. Its derivative exists by boundedness of $\Omega_\pm^*$ and the interacting-domain derivative, so step 2.1 gives $\eta\in D(A_0)$. This proves $D(A)\cap\operatorname{ran}\Omega_\pm=\Omega_\pm D(A_0)$, with no onto or completeness assumption. The original existence, both tails, isometry, extension and closed-range claims and the specified consuming domain argument follow. [step 1.1, step 2.1, step 4.1, algebra] ∎

## Integration and author checks

The original Statement hypotheses and every original conclusion are retained
for arbitrary $\mathcal H$ under CC and for both time directions. The only
producer correction is replacement of the unsupported AC autonomous-group
premise and expansion of its compressed differentiability argument. The
notation in the original Facts must describe domain inclusion, not operator
inclusion. The group/intertwining/domain consequence is proved explicitly
for actual consumers; it is not a substitute for their separate spectral
claims or independent completeness proofs.

The sole successor must bind the actual CC resolvent/orthogonal-projection
and vector-integral inputs and review the producer and complete actual
consumer cone. This draft does not claim source reading, audit, readiness,
native acceptance or a new review round. Local precheck, proof-layout and
render results, when recorded alongside, establish only mechanical format.
