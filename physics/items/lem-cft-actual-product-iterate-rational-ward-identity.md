---
id: lem-cft-actual-product-iterate-rational-ward-identity
kind: lemma
title: Rational Ward identities for actual convergent products and iterates
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 5
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-logarithmic-intertwining-operator
  - def-cft-pz-intertwining-map
  - thm-cft-strongly-graded-contragredient-duality
  - lem-cft-rational-current-actions-and-partial-evaluation
dependency_roles:
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  def-cft-pz-intertwining-map: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
  lem-cft-rational-current-actions-and-partial-evaluation: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part VI, Theorems 9.17 and 9.23; reconstructed local proof, no external theorem premise"
      url: https://arxiv.org/pdf/1012.4202v3
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a strongly graded Möbius or conformal vertex algebra, and let the modules be strongly graded generalized modules with real weights and objectwise uniform nilpotence. Assume scalar coefficients of actual composable products or iterates of two logarithmic intertwiners converge absolutely and define analytic branches on their sewing domains. For a product at positions $z_1,z_2,0$, or an iterate with leaf positions $a+b,b,0$, the scalar current obtained by inserting $Y(v,T)$ has one rational function in $T$ whose expansions at infinity and every marked point equal the corresponding current actions on the actual output dual and actual leaves. Its possible poles are only the marked points. Consequently the rational-current Ward residue equality holds for every rational current multiplier with those poles. The construction and its coefficient exchanges remain valid on a sufficiently small deformation neighborhood with fixed distinct marked points. No C1-cofiniteness, dual-C1 condition, finite weight cosets, or analytic associativity theorem is assumed.

## Facts & Assumptions

**Given:** Exactly the hypotheses in the Statement.

[F1] [[def-cft-logarithmic-intertwining-operator]] and [[def-cft-pz-intertwining-map]] supply the actual two Jacobi identities, derivative, truncation and Möbius identities.

[F2] [[thm-cft-strongly-graded-contragredient-duality]] supplies actual strongly graded opposite-field duals with truncation in fixed degree/weight strings.

[F3] [[lem-cft-rational-current-actions-and-partial-evaluation]] gives the finite algebraic residue maps and delta expansions. The present proof establishes that the Ward identity of these maps applies to the actual convergent composites; it does not assume that application.

## Proof

1.1 Take an actual product $G=<f,Y1(w1,z1)Y2(w2,z2)w3>$ with |z1|>|z2|>0.
Fix v in V. The module-current commutator with an intertwiner is
$$v_n\mathcal Y(w,z)-\mathcal Y(w,z)v_n=\sum_{j\geq0}\binom nj z^{n-j}\mathcal Y(v_jw,z).$$
To prove it, multiply its intertwiner Jacobi identity by the current variable
to the integer power n, take its residue, and expand (z+x0)^n in nonnegative
x0 powers. The x0 residue selects $v_jw$; $j\ge 0$ truncates at one bound depending
on v,w, so the displayed sum is finite even for $n<0$.
A term in the intermediate-weight sum containing the fixed current mode $v_n$
on the intermediate completed vector is thus equal to a term with the
transposed current mode on the actual restricted-dual f minus finitely many
terms with actual input $v_jw1$. The mode shifts intermediate generalized
weight by the fixed integer wt(v)-n-1 and auxiliary degree by deg(v).
Changing that summation index is bijective on the corresponding actual
homogeneous components; absent components are zero. Taking absolute values
bounds the entire intermediate-mode series by the finite sum of absolute
binary product series for those actual modified exterior/input states.
Those series converge by the given convergence hypothesis. This proves
absolute legitimacy for every fixed current mode. For an iterate, a commutator on the completed inner value is not asserted
to be a finite formula: even a fixed negative mode can involve an unbounded
family of composite-state modes. The singular nonnegative-mode family
needed for denominator clearing is instead treated by the explicit
geometric resummation in part 4 of this proof. Current coefficients applied directly
to the original exterior or an actual leaf are actual modified-state
iterate pairings and are absolutely convergent by hypothesis.
This argument is stronger than asserting cancellation in a merely formal
completion: it supplies a finite absolute majorant before the cancellation.
It does NOT yet interchange an infinite family of different current modes.
The next step uses only finite polynomial operations before that issue arises. [given, F1, F2, F3, algebra]

2.1 Treat the current position T as a separate formal variable. Let $Q_\infty (T)$
be the Laurent expansion of the outer-current expression
$$\langle f,Y_4(v,T)\mathcal Y_1(w_1,z_1)\mathcal Y_2(w_2,z_2)w_3\rangle.$$
Every coefficient is an actual binary scalar pairing with a modified strong
restricted-dual vector, as in part 1 of this proof. By the opposite-field formula on
that dual, $Q_\infty $ has a finite HIGHEST T power. This uses the finite
state family $e^{xL1}v$ and lower truncation of the actual strong dual field;
it does not assume the dual is C1-cofinite.
Let $Q_{\mathrm{zero}}(T)$ be the expression with Y3(v,T) acting on w3 instead. It has a
finite LOWEST T power by ordinary input truncation. Choose integers N1,N2
so that $v_jw_i=0$ for all $j\ge Ni$. The current commutator distribution, multiplied
by $(T-z_i)^{Ni}$, is zero: its finitely many delta derivatives have orders below
Ni, and multiplication by that factor kills them. Hence two successive
applications of this weak commutativity give
$$P(T)Q_{\infty}(T)=P(T)Q_0(T),\qquad P(T)=(T-z_1)^{N_1}(T-z_2)^{N_2}.$$
This equality is coefficientwise meaningful at the fixed z values. Multiplying
by P takes only finitely many T coefficients and finite scalar combinations;
part 1 of this proof justifies every intermediate-mode operation used in the two
commutations. There is no infinite binomial inversion at this stage.
The left side has finite highest T power, and the right side finite lowest
T power. Their common value is therefore a Laurent POLYNOMIAL N(T).
Consequently
$$Q(T)=\frac{N(T)}{(T-z_1)^{N_1}(T-z_2)^{N_2}}$$
is a rational function of T, with possible finite poles only at 0,z1,z2.
The two originally constructed coefficient series are its expansions in
the outside and inside annuli, respectively. Indeed multiplication by P
is invertible in either Laurent expansion ring: outside use powers $z_i/T$,
inside use $T/z_i$. Their inverse coefficients are the ordinary integer-binomial
series, and their absolute convergence on smaller annuli follows from
$\sum_k(1+k)^M\rho^k<\infty$ for $\rho <1$. N is finite, so no unproved sum over
intermediate module weights is hidden in this inversion.
For a current between the two intertwiners, the same polynomial locality
identifies its product with P with N(T), coefficientwise by part 1 of this proof.
It is thus the mixed expansion of the SAME rational Q on |z1|>|T|>|z2|.
The inverse factors now use T/z1 and z2/T; both geometric bounds hold on
that nonempty annulus. This specifies the formal expansions, not just an
unspecified meromorphic continuation. [given, F1, F2, F3, step 1.1, algebra]

3.1 At the point zi, let $q_i(t)$ be the scalar series with module current
$Y_i(v,t)$ acting on the actual input wi, all other insertions fixed. Each
coefficient is an actual convergent binary product with a modified wi,
so it is defined and absolutely convergent; input truncation gives one
finite lowest t power.
The binary intertwiner Jacobi identity at that vertex identifies $q_i(t)$
with the expansion of Q(zi+t) in powers of t. Here are the coefficient
operations making this usual scalar-duality implication precise. First
multiply Jacobi by the finite polynomial P(T) and take its current-variable
coefficients. The two current-order expressions, after part 2 of this proof, become
the appropriate outside/inside expansions of the one Laurent polynomial
N(T). Its delta substitution sends T to zi+t. The resulting identity says
$$P(z_i+t)q_i(t)=N(z_i+t).$$
The power $t^{Ni}$ in P(zi+t) is explicit; the other factors have nonzero
constant term because the insertion points are distinct. Their formal
inverses are ordinary binomial power series. Dividing in the local Laurent
ring is legitimate coefficientwise: $q_i$ has finite lowest power and an
inverse unit with nonnegative powers, so every coefficient is a finite
sum. This yields $q_i(t)=\iota _{T=zi}Q(T)$, INCLUDING every nonnegative t
coefficient, not only the principal part.
The delta substitution just used can be checked without an analytic duality
theorem: verify it for each Laurent monomial $T^{m}(T-zi)^{n}$ by the integer
binomial expansion in the three prescribed regions; then use linearity,
clear the finite powers of T and T-zi, and divide by the local units.
All of those steps involve finite Laurent-polynomial coefficients before
local unit inversion, whose coefficient finiteness was just verified.
The same argument handles the input at zero and the current at infinity.
Therefore for any rational test f(T) with poles at the marked points,
$$\sum_{i=1}^3\operatorname{Res}_{t=0}f(z_i+t)\,G(\ldots,Y_i(v,t)w_i,\ldots)=\operatorname{Res}_T\iota_{\infty}f(T)\,Q(T),\qquad z_3=0.$$
This is the rational Ward identity (W). To prove the scalar residue rule,
partial-fraction-expand the rational function fQ. A pole term
$c(T-zi)^{-k}$ has the same total finite residue and coefficient of $T^{-1}$
at infinity (both zero for $k>1$, both c for $k=1$); a polynomial contributes
zero to both. Add the finitely many terms. Thus the residue equality uses
no contour deformation or unproved interchange.
Each local residue on the left is FINITE on the actual input: f has a
finite principal part and the input field has a finite singular part.
The right residue is the finite output-dual rational-current action by
strong dual truncation. This recovers precisely the rational action and
sign convention in the local formal-action supplier. [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 For the iterate $G=<f,Y^{1}(Y^{2}(w1,a)w2,b)w3>$ use absolute convergence on
|b|>|a|>0 and global leaf positions $c=a+b,b,0$. Fix the first input w1
for the $P^{(1)}(b)$ passage. Here the current on the completed inner value needs one extra estimate;
it cannot be treated as a uniformly truncated algebraic state. For $k\ge 0$ the
actual inner commutator is
$$v_k\mathcal Y^2(w_1,a)w_2=\mathcal Y^2(w_1,a)v_kw_2+\sum_{j=0}^{k}\binom kj a^{k-j}\mathcal Y^2(v_jw_1,a)w_2.$$
The first term truncates at one k bound on w2, and j in the second term
truncates at one j bound on w1. In the outer current OPE, this is multiplied
by (T-b)^(-k-1). For |T-b|>|a|, each surviving j has the exact absolutely
convergent sum
$$\sum_{k\geq j}\binom kj a^{k-j}(T-b)^{-k-1}=(T-b-a)^{-j-1}.$$
Its absolute majorant is $|T-b|^{-j-1}\sum_{r\ge0}\binom\{r+j\}\{j\}$
|a/(T-b)|^r. The binomial is a fixed-degree polynomial in r, so the
series is finite uniformly on smaller overlap regions. Multiplying this
geometric-polynomial bound by the ABSOLUTE iterate projection sum for
$Y^{1}(Y^{2}(v_jw1,a)w2,b)w3$ bounds the full joint k/intermediate-weight sum.
There are only finitely many j. Hence the current on the composite inner
value has precisely the finite principal parts at $T=c$ and $T=b$, rather
than a falsely asserted uniform truncation in T-b.
Multiply those rational principal parts by
(T-c)^N1(T-b)^N2 before collecting current coefficients. Their denominators
cancel. Each coefficient is now a finite combination of actual iterates
with modified leaf/exterior vectors; its projection sums are absolutely
convergent by hypothesis. The full inner Jacobi gives the local delta
identities after this same finite cancellation. Thus the same two binary
Jacobi identities give polynomial current locality at the THREE leaf positions: first apply it
inside $Y^{2}$ for w1,w2, and then at $Y^{1}$ for its output and w3. Each fixed
mode operation is absolutely legitimate by part 1 of this proof. On the selected
nonempty overlap |c|>|b|>|a|, outside and intermediate annuli are available.
Equivalently, the finite-clearing step can be checked directly at the
outer Jacobi residue. In its local variable $y=T-b$, the cleared inner
current is
$$(y-a)^{N_1}y^{N_2}Y_M(v,y)I^2(w_1,w_2).$$
The factor (y-a)^N1 allows inner weak locality to move the current through
$I^{2}$. The factor $y^{N2}$ then kills all negative y powers of the resulting
current on w2. The whole cleared local term is regular in y. Its residue
against the outer commutator delta, expanded in nonnegative y, is zero.
This proves $P Q_\infty=P Q_{\mathrm{zero}}$ without invoking associativity or a
uniform truncation bound for $I^{2}$'s completed value. The geometric estimate
above supplies absolute legitimacy for the singular-family resummation.
The same denominator clearing proves a rational Q(T) with possible poles
at c,b,0, and the same local Jacobi substitution identifies ALL its local
coefficients with the currents on the corresponding leaf.
The resulting Ward equality is therefore the actual iterate Ward identity,
not an assumed consequence of a product-to-iterate factorization. Subtracting
the finite first-input residue leaves the pair at b,0, exactly the reverse
partial identity in the formal supplier §7. For the deformation c→uc with
b fixed, take $a_s=uc-b$ and restrict to the common geometric neighborhood;
the same proof applies for each s. All field-truncation bounds involve fixed
input states or their finite nilpotent families, so one common finite set
of denominators and state cutoffs works there. [given, F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra] ∎
