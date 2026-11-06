---
id: ex-cft-rank-one-free-boson-stress-tensor-ward-identity
kind: example
title: Rank-one free-boson stress data and a two-current Ward identity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - def-cft-2d-stress-tensor-data
  - def-cft-2d-primary-field
  - thm-cft-2d-stress-tensor-ward-identity
  - thm-cft-2d-stress-modes-satisfy-virasoro
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-countable-choice
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-stress-tensor-data: mathematical-premise
  def-cft-2d-primary-field: mathematical-premise
  thm-cft-2d-stress-tensor-ward-identity: mathematical-premise
  thm-cft-2d-stress-modes-satisfy-virasoro: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
axiom_use: "Countable Choice is used only for bounded-box measurability and finite area in steps 2.2–3.1 through the cited mathematical suppliers. No full Axiom of Choice is used locally; the primary-field supplier's unrelated compact-genus convention remains a transitive input."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.3, printed pp. 21–24 (PDF pp. 11–14), the normalized free chiral boson and T-current OPE; §3.1, printed pp. 26–29 (PDF pp. 15–16), the TT central term and c=1."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§4.3.3, printed pp. 79–81 (PDF pp. 87–89), free-scalar stress tensor and primary OPE; §4.4, printed pp. 82–84 (PDF pp. 90–92), the TT OPE and central charge."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $U=\mathbb C^\times$ be the punctured Euclidean plane with dimensionless coordinate $z=x+iy$, area form $d^2z=dx\,dy$, and local tests $\mathcal D(U)=C_c^\infty(U;\mathbb C)$ with the compact-support seminorm topology. Let $\mathscr D=\mathbb C[x_1,x_2,\ldots]$ be the polynomial algebra whose elements involve only finitely many variables. For a finite-support multi-index $\alpha=(\alpha_1,\alpha_2,\ldots)$ write $x^\alpha=\prod_{r\ge1}x_r^{\alpha_r}$ and set the symmetric bilinear pairing

$$
B(x^\alpha,x^\beta)=\begin{cases}\prod_{r\ge1}r^{\alpha_r}\alpha_r!,&\alpha=\beta,\\0,&\alpha\ne\beta.\end{cases}
$$

Extend $B$ bilinearly over $\mathbb C$; it is nondegenerate, with $B(1,1)=1$, but it is not a Hermitian or positivity assumption. Put $a_{-r}u=x_ru$, $a_ru=r\,\partial u/\partial x_r$ for $r\ge1$, and $a_0=0$. Define the current $J(z)=\sum_{m\in\mathbb Z}a_mz^{-m-1}$ and the stress component $T(z)=\tfrac12{:}J(z)J(z){:}$, where normal ordering moves every mode $a_{-r}$ ($r\ge1$) to the left of every $a_r$ ($r\ge1$); $a_0$ contributes zero. Its modes are $T(z)=\sum_{m\in\mathbb Z}L_mz^{-m-2}$ with $L_m=\tfrac12\sum_{k\in\mathbb Z}{:}a_ka_{m-k}{:}$, each sum finite on every polynomial. The formal radial expansion is the $|z|>|w|$ Laurent expansion, and no convergence of a general OPE tail is asserted. For each local passive coordinate change $w=f(z)$ define $J_w(w)=(f^{-1})'(w)J_z(z)$, so $J(z)\,dz$ is the local holomorphic one-form coefficient of integer weight $(1,0)$.

Set the complexified symmetric chart components to $T_{zz}=T(z)$ and $T_{z\bar z}=T_{\bar z z}=T_{\bar z\bar z}=0$ on $U$; in real-coordinate components this is $T_{xx}=T$, $T_{xy}=T_{yx}=iT$, and $T_{yy}=-T$. For $u,v\in\mathscr D$ and $\phi\in\mathcal D(U)$ define the weak smearing by

$$(T(\phi)u)(v)=\int_U\phi(z)B(v,T(z)u)\,d^2z,\qquad (J(\phi)u)(v)=\int_U\phi(z)B(v,J(z)u)\,d^2z.$$

Define $\epsilon:\mathscr D\to\mathbb C$ by $\epsilon(x^\alpha)=1$ when $\alpha=0$ and $0$ otherwise. For any finite ordered list of radial variables $q_1,\ldots,q_N$, a formal coefficient series is an array $\sum_{\mathbf k\in\mathbb Z^N}u_{\mathbf k}q_1^{k_1}\cdots q_N^{k_N}$ with $u_{\mathbf k}\in\mathscr D$. The radial product domain consists of series obtained by inserting the displayed mode expansions in the specified radial order and applying them to polynomial states, provided each coefficient is determined by a finite sum of elements of $\mathscr D$. Extend $\epsilon$ coefficientwise by

$$
\widehat\epsilon\!\left(\sum_{\mathbf k}u_{\mathbf k}q_1^{k_1}\cdots q_N^{k_N}\right):=\sum_{\mathbf k}\epsilon(u_{\mathbf k})q_1^{k_1}\cdots q_N^{k_N}.
$$

For a radially ordered product $A$ whose modewise action on $\Omega=1$ belongs to this domain, set $\omega(A):=\widehat\epsilon(A\Omega)$. This extends only the vacuum coefficient functional; the bilinear form $B$ is not extended to infinite series. Each coefficient of a fixed finite product below is defined by finitely many mode actions on a polynomial. In the strict radial regions stated below, the displayed geometric series converge absolutely and their sums are the analytic representatives of these formal correlations.

Interpret the coefficient modes by the contour rule $L_m=\operatorname{Res}_z z^{m+1}T(z)$, where $\operatorname{Res}$ is the coefficient of $z^{-1}$ and the nested residue uses the stress-data radial prescription. On $|z|>|w_1|>|w_2|>0$, the analytic representative of the current correlation is $G(w_1,w_2)=\omega(J(w_1)J(w_2))$, and let $H(z)=\omega(T(z)J(w_1)J(w_2))$ denote its analytic representative. The asserted local principal parts are $J(z)J(w)\sim(z-w)^{-2}I$, $T(z)J(w)\sim J(w)/(z-w)^2+\partial_wJ(w)/(z-w)$, and $T(z)T(w)\sim1/[2(z-w)^4]+2T(w)/(z-w)^2+\partial_wT(w)/(z-w)$. Thus $c=1$, $G=(w_1-w_2)^{-2}$, and $H=((z-w_1)^2(z-w_2)^2)^{-1}$; these are geometric-series sums in the stated radial region, and the two-current Ward sum equals this $H$. The modes satisfy the Virasoro relation with central charge one. This formal chiral oscillator model supplies local mathematical stress data and one conditional Ward calculation only; it is not a nonchiral or physical CFT, a path-integral measure, or an empirical claim.

## Example references

[Paul Ginsparg, *Applied Conformal Field Theory*, §§2.3 and 3.1](https://arxiv.org/pdf/hep-th/9108028)

[David Tong, *String Theory*, §§4.3.3 and 4.4](https://www.damtp.cam.ac.uk/user/tong/string/string.pdf)

## Facts & Assumptions

**Given:** The polynomial domain, pairing, oscillator operators, normal ordering, stress/current fields, weak smearing and residue convention specified in the Example.

[F1] [[def-cft-2d-stress-tensor-data]]: Weak fields have continuous compact-test coefficients; stress data include symmetry, conservation/trace with declared contact support, the TT principal part, primary OPEs, common domains and a radial contour prescription.

[F2] [[def-cft-2d-primary-field]]: In the passive convention $w=f(z)$, an integer-weight primary component transforms by the corresponding inverse derivative; for weight $(1,0)$ it is the coefficient of the local one-form $dz$.

[F3] [[thm-cft-2d-stress-tensor-ward-identity]]: Under the stated primary OPE, holomorphy, separated insertions and zero boundary/contact terms, the T-insertion correlator is the sum of the double-pole weight term and the simple-pole insertion derivative term.

[F4] [[thm-cft-2d-stress-modes-satisfy-virasoro]]: With the TT principal part and nested radial residue rule, $[L_m,L_n]=(m-n)L_{m+n}+c(m^3-m)\delta_{m+n,0}I/12$ on the common domain.

[F5] [[def-integrable-real-and-complex-functions-and-their-integrals]]: A complex Lebesgue integral is defined componentwise from real and imaginary parts, with real integrals determined by positive and negative parts.

[F6] [[def-countable-choice]]: Countable Choice, $\mathrm{AC}_\omega$, selects from a countable family of nonempty sets.

[F7] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: The nonnegative integral is monotone and homogeneous for nonnegative scalars.

[F8] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Assuming $\mathrm{AC}_\omega$, a bounded rectangle in $\mathbb R^2$ has finite Lebesgue measure equal to its area.

[F9] [[cor-continuous-functions-are-borel-measurable]]: Assuming $\mathrm{AC}_\omega$, continuous Euclidean functions are Borel measurable.

[F10] [[thm-borel-sets-are-lebesgue-measurable]]: Assuming $\mathrm{AC}_\omega$, every Borel subset of $\mathbb R^2$ is Lebesgue measurable.

## Verification
**Given:** [F1]–[F10], the displayed polynomial domain and weak-pairing convention, and radial ordering $|z|>|w_1|>|w_2|>0$ where correlation functions are evaluated.

1.1 For $r,s\ge1$, multiplication and differentiation give $[a_r,a_{-s}]=r\delta_{r,s}I$, while two multiplications or two derivatives commute; also $[a_0,a_m]=0$. Hence $[a_m,a_n]=m\delta_{m+n,0}I$ for all integers. Give $x_r$ degree $r$; $a_m$ changes degree by $-m$. In $L_m=\tfrac12\sum_{k\in\mathbb Z}{:}a_ka_{m-k}{:}$, if $k$ is sufficiently large positive then the rightmost positive mode differentiates a variable absent from the fixed polynomial, and if $k$ is sufficiently large negative then normal ordering puts the large positive mode $a_{m-k}$ on the right and it annihilates that polynomial. Thus each $L_m$ sum is finite on each polynomial and changes degree by $-m$. [given, algebra]

2.1 Write $J_+(z)=\sum_{r\ge1}a_rz^{-r-1}$ and $J_-(w)=\sum_{s\ge1}a_{-s}w^{s-1}$. The commutator from step 1.1 is $[J_+(z),J_-(w)]=\sum_{r\ge1}rz^{-r-1}w^{r-1}=z^{-2}\sum_{r\ge1}r(w/z)^{r-1}=(z-w)^{-2}$ as the formal expansion in nonnegative powers of $w/z$. Thus $J(z)J(w)\sim(z-w)^{-2}I$ in the declared radial region. [given, step 1.1, algebra]

2.2 For fixed $u,v\in\mathscr D$, the degree shift in step 1.1 implies that only finitely many coefficients $B(v,L_mu)$ contribute to $B(v,T(z)u)=\sum_mB(v,L_mu)z^{-m-2}$; the analogous current coefficient is also a finite Laurent polynomial. If $\phi$ is supported on $K\Subset U$, choose a bounded rectangle $Q\supset K$. Each product of $\phi$ with either coefficient extends continuously by zero; it is Borel and Lebesgue measurable by [F9]–[F10], with their stated $\mathrm{AC}_\omega$ premise [F6]. [given, F6, F9, F10, step 1.1, algebra]

3.1 For either field $F\in\{T,J\}$, put $h(z)=\phi(z)B(v,F(z)u)$ and $M=p_{K,0}(\phi)\sup_K|B(v,F(z)u)|$. Then $|h|\le M\mathbf1_Q$, so monotonicity and homogeneity [F7] and finite box measure [F8] give $\int|h|\,d^2z\le M\lambda_2(Q)<\infty$. Thus $h$ satisfies the absolute-integrability condition in the complex-integral definition [F5]. Its real and imaginary parts, and their positive and negative parts, are bounded by $M\mathbf1_Q$. By [F7]–[F8], each of the four integrals of these positive or negative parts is at most $M\lambda_2(Q)$, so [F5] gives $|(T(\phi)u)(v)|\le4M\lambda_2(Q)$, with the same bound for $J$. This is a continuous bound on each fixed-support test-function stage, so both fields are weak distributions on $U$. [given, F5, F7, F8, step 2.2, algebra]

3.2 In $T(z)J(w)=\tfrac12{:}J(z)J(z){:}J(w)$, commuting the two annihilation parts of $J(z)$ across $J(w)$ gives two equal contractions from step 2.1. Their factor $2$ cancels $1/2$, leaving $(z-w)^{-2}J(z)$ plus a normally ordered term regular at $z=w$. Expanding $J(z)=J(w)+(z-w)\partial_wJ(w)+O((z-w)^2)$ yields $T(z)J(w)\sim J(w)/(z-w)^2+\partial_wJ(w)/(z-w)$. With the one-form transformation in the Example this is the required weight-$(1,0)$ primary OPE. [F1, F2, step 2.1, algebra]

3.3 In $T(z)T(w)=\tfrac14{:}J(z)^2{:}{:}J(w)^2{:}$, commuting each annihilation part past each creation part gives four single contractions and two distinct double contractions, each contraction being $(z-w)^{-2}$ by step 2.1. The double contractions contribute $2(z-w)^{-4}/4=(z-w)^{-4}/2$; the single contractions contribute $(z-w)^{-2}\mathopen{:}J(z)J(w)\mathclose{:}$, and the no-contraction term is regular. Taylor expansion gives $\mathopen{:}J(z)J(w)\mathclose{:}=\mathopen{:}J(w)^2\mathclose{:}+(z-w)\mathopen{:}\partial J(w)J(w)\mathclose{:}+O((z-w)^2)=2T(w)+(z-w)\partial_wT(w)+O((z-w)^2)$. Hence $T(z)T(w)\sim\tfrac1{2(z-w)^4}+2T(w)/(z-w)^2+\partial_wT(w)/(z-w)$ and $c=1$. [F1, step 2.1, algebra]

3.4 Since $a_r\Omega=0$ for $r>0$ and $[a_r,a_{-s}]=r\delta_{r,s}I$, only the pairs $(a_r,a_{-r})$ contribute to $\omega(J(w_1)J(w_2))$. Their sum is $\sum_{r\ge1}rw_1^{-r-1}w_2^{r-1}=1/(w_1-w_2)^2$ for $|w_1|>|w_2|$, so $G(w_1,w_2)=(w_1-w_2)^{-2}$. [given, step 1.1, step 2.1, algebra]

4.1 To construct the radial prescription, put $N_{r,s}(z,w)={:}J(z)^rJ(w)^s{:}$ for $0\le r,s\le2$, with all creation modes placed left of all annihilation modes, and put $K(z,w)=(z-w)^{-2}$. For fixed $u,v\in\mathscr D$, $B(v,N_{r,s}(z,w)u)$ is a finite Laurent polynomial: the rightmost annihilation modes can only differentiate monomials present in $u$, and the remaining creation modes must produce monomials present in $v$. The same commuting calculation as in steps 2.1, 3.2 and 3.3 gives the full rational weak representatives $Q_{JJ}=N_{1,1}+KI$, $Q_{TJ}=\tfrac12N_{2,1}+KJ(z)$, and $Q_{TT}=\tfrac14N_{2,2}+KN_{1,1}+\tfrac12K^2I$. Define $\iota_{z,w}$ by expanding $(z-w)^{-k}$ as $\sum_{j\ge0}\binom{k+j-1}{j}z^{-k-j}w^j$ for $k\ge1$, leaving Laurent monomials unchanged; define $\iota_{w,z}$ instead by $(-1)^k\sum_{j\ge0}\binom{k+j-1}{j}w^{-k-j}z^j$. Then $A(z)B(w)=\iota_{z,w}Q_{AB}$ and $B(w)A(z)=\iota_{w,z}Q_{AB}$ for $(A,B)=(J,J),(T,J),(T,T)$. Indeed the oscillator commutators are scalar, so commuting through each finite normal product enumerates precisely the contractions already counted, in either order. These scalar series converge locally uniformly to $B(v,Q_{AB}u)$ on their respective strict radial regions. These rational functions, holomorphic off the origin axes and the diagonal, specify the weak products; no weak smearings are composed. [given, step 1.1, step 2.1, step 3.2, step 3.3, algebra]

4.2 In $\omega(T(z)J(w_1)J(w_2))$, normal ordering forbids a contraction between the two $J(z)$ factors. The only nonzero vacuum terms pair each of them with a different external current; there are two such pairings and the prefactor $1/2$ leaves one copy. Step 2.1 therefore gives $H(z)=((z-w_1)^2(z-w_2)^2)^{-1}$. Expanding at $z=w_1$ gives principal part $G/(z-w_1)^2+(\partial_{w_1}G)/(z-w_1)$, and the analogous expansion at $w_2$ gives the other primary principal part. The function is holomorphic away from $w_1,w_2$ and decays as $O(|z|^{-4})$, so the Ward theorem's boundary and contact hypotheses hold. [given, step 2.1, step 3.2, step 3.4, algebra]

5.1 On the linear span of these product arrays multiplied by Laurent polynomials $f(z,w)$, define the diagonal residue by replacing $z$ with $w+t$ in $fQ_{AB}$, expanding each $z$-dependent normal factor and Laurent monomial in nonnegative powers of $t$, and extracting $t^{-1}$; a subsequent $\operatorname{Res}_w$ extracts $w^{-1}$. Thus $\operatorname{Res}_w\operatorname{Res}_{z=w}(fA(z)B(w)):=\operatorname{Res}_w[t^{-1}](f(w+t,w)Q_{AB}(w+t,w))$. The diagonal pole order is at most four, so only Taylor orders zero through three can contribute. Each resulting $w$ coefficient is an endomorphism of $\mathscr D$: annihilation indices are bounded by the input polynomial, and the fixed coefficient fixes the total positive creation degree, which has finitely many partitions. The rule is linear and independent of a presentation, since after pairing with any $u,v$ it is the residue of a rational function uniquely determined by its radial expansion; multiplying a zero expansion by a common Laurent monomial and a power of $z-w$ gives a zero polynomial. Nondegeneracy of $B$ then separates the endomorphism outputs. After applying $j(u)(v)=B(v,u)$, the rule is exactly the local Laurent residue of the specified weak meromorphic product in step 4.1. This supplies an actual operation on the required arrays, with no assumption of an operator-valued analytic sum. [given, step 1.1, step 4.1, algebra]

5.2 Put $a=z-w_1$, $b=z-w_2$, and $d=w_1-w_2=b-a$. Then $\partial_{w_1}G=-2d^{-3}$ and $\partial_{w_2}G=2d^{-3}$. The right side of [F3] is $(a^{-2}+b^{-2})d^{-2}+(-2a^{-1}+2b^{-1})d^{-3}=(a^2+b^2-2ab)/(a^2b^2d^2)=(a-b)^2/(a^2b^2d^2)=1/(a^2b^2)=H(z)$. Thus this concrete two-current correlation satisfies the Ward identity. [F3, step 3.4, step 4.2, algebra]

6.1 For integers $p,q$ and $k\ge1$, the expansion formulas in step 4.1 give $\operatorname{Res}_z(\iota_{z,w}-\iota_{w,z})(z^pw^q(z-w)^{-k})=\binom{p}{k-1}w^{p+q-k+1}$. If $p\ge k-1$, only the first expansion contributes; if $p\le-1$, only the second contributes, with coefficient $(-1)^{k+1}\binom{k-p-2}{k-1}=\binom{p}{k-1}$; for $0\le p<k-1$ both are zero. Here $\binom{p}{r}=p(p-1)\cdots(p-r+1)/r!$ and $\binom{p}{0}=1$. The right side is also $[t^{-1}]((w+t)^pw^qt^{-k})$ by the binomial expansion at $t=0$. Laurent-polynomial terms without diagonal poles have zero difference and zero diagonal residue. Applying these identities to the finite Laurent numerators of every paired $fQ_{AB}$ and then taking $\operatorname{Res}_w$ proves equality of the two radial-origin residue difference and the nested diagonal residue of step 5.1. [step 4.1, step 5.1, algebra]

7.1 In particular take $f=z^{m+1}w^{n+1}$ and $A=B=T$. Extracting the origin residues of the two product arrays in step 4.1 gives $L_mL_n-L_nL_m$, whereas step 6.1 identifies their difference with $\operatorname{Res}_w w^{n+1}\operatorname{Res}_{z=w}z^{m+1}T(z)T(w)$ under the constructed prescription. Equality after every pairing implies equality on $\mathscr D$ by nondegeneracy of $B$. This establishes the contour-product hypothesis of [F1] for all integers $m,n$, rather than adopting the desired mode relation as an extra assumption. There are no added boundary or contact terms in this formal identity. [F1, step 4.1, step 5.1, step 6.1, algebra]

8.1 On $U=\mathbb C^\times$, the weak coefficients of $T$ are holomorphic by step 2.2 and the fields are weak distributions by step 3.1. The complexified symmetric chart components have only $T_{zz}=T$ nonzero, so they are symmetric; $T_{z\bar z}=0$ gives zero trace, and $\partial_{\bar z}T_{zz}=0$ gives conservation. There are no contacts on this punctured chart. The realization map is $(j u)(v)=B(v,u)$; nondegeneracy of $B$ makes it injective. The endomorphism coefficients are the displayed $L_m$. Step 2.2 gives finite scalar Laurent polynomials, so their locally uniform convergence and continuation hold on all of $\mathbb C^\times$, and the Example's smearing formula gives exactly the compatibility required in [F1]. The modes preserve the polynomial domain. Steps 4.1, 5.1, 6.1 and 7.1 supply coefficientwise products, their weak meromorphic representatives, the nested residue operation, and the required contour-product identity. Thus the data satisfy the local interface in [F1] with central scalar $c=1$. [F1, step 1.1, step 2.2, step 3.1, step 3.2, step 3.3, step 4.1, step 5.1, step 6.1, step 7.1, algebra]

9.1 The TT OPE has central coefficient $c/2=1/2$ by step 3.3, and steps 5.1, 6.1 and 7.1 establish the common-domain nested residue prescription and its commutator identity. Applying [F4] to the modes defined in the Example gives $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}I/12$. This is the Virasoro relation with $c=1$ on the polynomial domain. [F4, step 1.1, step 3.3, step 5.1, step 6.1, step 7.1, step 8.1, algebra] ∎

## Remarks

The construction is a formal chiral oscillator model with local weak smearing on $\mathbb C^\times$. The cited sources motivate the normalization, but the oscillator commutators, OPE coefficients, continuity bound, tensor conditions, and displayed Ward calculation are checked above. No positivity, zero-mode completion, full left-right theory, or physical path-integral measure is asserted.
