---
id: ex-cft-primary-one-form-passive-coordinate-change
kind: example
title: Local weight-(1,0) one-form coefficient on the sphere
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-2d-primary-field
  - def-cft-pointed-analytic-worldsheet
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-holomorphic-map-and-complex-jacobian
  - def-complex-differentiability-holomorphic-and-entire
  - thm-chain-rule-for-holomorphic-maps-in-several-variables
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
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
  def-cft-2d-primary-field: mathematical-premise
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-holomorphic-map-and-complex-jacobian: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  thm-chain-rule-for-holomorphic-maps-in-several-variables: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
axiom_use: "Countable Choice is used for compact-box measure and continuous/Borel measurability in steps 1.2 and 2.1, and for the coordinate Lebesgue change-of-variables theorem in step 3.1, through def-countable-choice and its exact mathematical suppliers. The primary-field supplier also carries its recorded transitive full-AC genus convention; this example makes no additional use of full AC."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.1, Eq. (2.1), printed pp. 12–14 (PDF pp. 8–10): the primary-weight coordinate transformation and tensor interpretation; the example uses the passive weight-(1,0) specialization."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://davidtong.org/pdfs/teaching/string-theory/string4.pdf
      locator: "§4.2.3, Eq. (4.18), printed p. 76 (chapter PDF p. 16): displayed forward-derivative primary-operator law, distinguished here from passive tensor coefficients."
---

## Example

Let $C=\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ be the standard compact Riemann sphere with marked point $p=0$. On the local patch $U=\{z\in\mathbb C:|z|<1\}$ use the standard coordinate $z$, with $z(p)=0$. All complex coordinates are dimensionless. For every open coordinate subdomain $U_z\subseteq U$ and every local biholomorphic passive coordinate change $w=f(z)$ onto an open image $U_w$, use, on each coordinate image $U_q$, the test-function space $\mathcal D(U_q)=C_c^\infty(U_q;\mathbb C)$ with its usual locally convex inductive-limit topology from compact-support seminorms $p_{K,m}(\phi)=\max_{|\alpha|\le m}\sup_K|\partial^\alpha\phi|$. Write $d^2z=dx\,dy$ and $d^2w=d(\operatorname{Re}w)\,d(\operatorname{Im}w)$ for coordinate Lebesgue measure.

Take the smearing domain $\mathscr D=\mathbb C$ and its algebraic dual $\mathscr D^*=\operatorname{Hom}_{\mathbb C}(\mathscr D,\mathbb C)$. Use the bilinear identification $\iota_{\mathrm{bil}}:\mathbb C\to\mathbb C^*$ defined by $\iota_{\mathrm{bil}}(a)(b)=ab$, without complex conjugation. Set the pointwise weak coefficient to $\mathcal O_z(z)=\iota_{\mathrm{bil}}$ and define its smearing by

$$
(\mathcal O_z(\phi)a)(b)=ab\int_{U_z}\phi(z)\,d^2z,\qquad \phi\in\mathcal D(U_z),\quad a,b\in\mathbb C.
$$

For each passive change $w=f(z)$ define the coefficient and its smearing by

$$
\mathcal O_w(w)=(f^{-1})'(w)\,\iota_{\mathrm{bil}},\qquad (\mathcal O_w(\psi)a)(b)=ab\int_{U_w}\psi(w)(f^{-1})'(w)\,d^2w.
$$

This is a local weak field coefficient of weight $(1,0)$, corresponding to the local one-form $dz$ on this patch. For a second local change $\xi=g(w)$, use $\xi$ for the coordinate and $a,b$ for the two scalar inputs, and for $\chi\in\mathcal D(U_\xi)$ define $\mathcal O_\xi(\chi)$ by the same smearing formula with coefficient $((g\circ f)^{-1})'(\xi)\,\iota_{\mathrm{bil}}$. The example asserts no global holomorphic one-form on the sphere and no full dynamical CFT.

## Example references

[Paul Ginsparg, *Applied Conformal Field Theory*, §2.1](https://arxiv.org/pdf/hep-th/9108028)

[David Tong, *String Theory*, §4.2.3](https://davidtong.org/pdfs/teaching/string-theory/string4.pdf)

## Facts & Assumptions

**Given:** The standard pointed sphere and local coordinate above; open coordinate images $U_z,U_w,U_\xi$ with biholomorphic maps $f:U_z\to U_w$ and $g:U_w\to U_\xi$; the coordinate Lebesgue smearing formulas in the Example; and scalar inputs $a,b\in\mathbb C$.

[F1] [[def-cft-2d-primary-field]]: In the passive convention $w=f(z)$, a primary coefficient of weights $(h,\bar h)$ obeys $\mathcal O_w(w,\bar w)=(f'(z))^{-h}(\overline{f'(z)})^{-\bar h}\mathcal O_z(z,\bar z)$.

[F2] [[def-cft-2d-primary-field]]: For weak distributions the primary law is the test-function identity with multiplier $|f'|^2m_f$ applied to $\psi\circ f$, using the locally convex inductive-limit test-function topology; $|f'|^2$ is the real Jacobian in $d^2w=|f'|^2d^2z$.

[F3] [[def-cft-pointed-analytic-worldsheet]]: A pointed compact analytic worldsheet has a compact Riemann surface, finitely many distinct marks, and a centered local biholomorphic disk chart at each mark where coordinates are required.

[F4] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: A holomorphic atlas gives the smooth structure, and holomorphic maps in its charts are smooth.

[F5] [[def-holomorphic-map-and-complex-jacobian]]: A holomorphic map has a unique complex-linear differential $DF(a)$ given by its linear approximation.

[F6] [[thm-chain-rule-for-holomorphic-maps-in-several-variables]]: For holomorphic maps $F$ and $G$ at the relevant points, $D(G\circ F)(a)=DG(F(a))\circ DF(a)$.

[F7] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: Assuming $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism between open subsets of $\mathbb R^2$ transforms every nonnegative Lebesgue integral by the absolute real Jacobian.

[F8] [[def-integrable-real-and-complex-functions-and-their-integrals]]: A complex Lebesgue integral is defined componentwise from the real and imaginary parts; real integrals use positive and negative parts.

[F9] [[def-countable-choice]]: $\mathrm{AC}_\omega$ states that every countable family of nonempty sets has a choice function.

[F10] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: The nonnegative integral is monotone and homogeneous for nonnegative scalars.

[F11] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Under $\mathrm{AC}_\omega$, a bounded rectangle in $\mathbb R^2$ has finite Lebesgue measure equal to the product of its side lengths.

[F12] [[cor-continuous-functions-are-borel-measurable]]: Under $\mathrm{AC}_\omega$, continuous functions on Euclidean spaces are Borel measurable.

[F13] [[thm-borel-sets-are-lebesgue-measurable]]: Under $\mathrm{AC}_\omega$, every Borel subset of $\mathbb R^2$ is Lebesgue measurable.

[F14] [[def-cft-2d-primary-field]]: For integer weights the local canonical and conjugate-canonical frames glue by $dw=f'(z)\,dz$ and $d\bar w=\overline{f'(z)}\,d\bar z$; no branch is needed.

[F15] [[def-complex-differentiability-holomorphic-and-entire]]: For a complex differentiable function on an open subset of $\mathbb C$, its complex derivative $f'(a)$ is the limit of $(f(a+h)-f(a))/h$ as nonzero admissible $h$ tends to zero.

## Verification

**Given:** The data in the Example, the current primary-field Definition [F1]–[F2], [F14], and the mathematical suppliers [F3]–[F13]. All coefficient pairings are bilinear.

1.1 Give $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ the one-point compactification topology: finite points have their usual neighborhoods, and a neighborhood of $\infty$ has compact complement in $\mathbb C$. Any open cover has a member containing $\infty$; its compact complement is covered by finitely many other members, so $\widehat{\mathbb C}$ is compact. Two finite points have disjoint Euclidean disk neighborhoods, while a finite point and $\infty$ are separated by a disk with compact closure and the complement of that closure. Hence it is Hausdorff. A countable base consists of disks with rational centers and radii together with $N_m=\{\infty\}\cup\{z\in\mathbb C:|z|>m\}$ for positive integers $m$: every compact subset of $\mathbb C$ is bounded, so some $N_m$ lies in any prescribed neighborhood of $\infty$. The plane is path-connected and dense in its one-point compactification; if the compactification had a separation, density would make both separating open sets meet the plane, contradicting its connectedness. Thus $\widehat{\mathbb C}$ is connected. Since it is Hausdorff, the chart domains $U_z=\widehat{\mathbb C}\setminus\{\infty\}=\mathbb C$ and $U_\zeta=\widehat{\mathbb C}\setminus\{0\}$ are open. They map to $\mathbb C$ by $z\mapsto z$ and by $\zeta(z)=1/z$ for finite $z\ne0$, $\zeta(\infty)=0$. The first is the identity homeomorphism. The second is bijective with inverse $\zeta\mapsto1/\zeta$ for $\zeta\ne0$ and $0\mapsto\infty$. For $r>0$, $\zeta^{-1}(D(0,r))=\{\infty\}\cup\{z:|z|>1/r\}$ is an open neighborhood of $\infty$. Conversely, if $O$ is a neighborhood of $\infty$ with compact complement $K\subset\mathbb C$, choose $M$ with $K\subset\{|z|\le M\}$; the inverse chart maps $D(0,1/(M+1))$ into $O$. Thus the chart map and inverse are continuous at $\infty$ and $0$, respectively, and are continuous elsewhere by the ordinary reciprocal map. On the overlap $\mathbb C\setminus\{0\}$ the transition maps $\zeta=1/z$ and $z=1/\zeta$ are holomorphic, so these charts give a holomorphic atlas. Therefore this is a compact connected Hausdorff second-countable Riemann surface, and the centered disk $U$ at $p=0$ is the chart required by [F3]. [given, F3, F4, construct, algebra]

1.2 For $\phi\ne0$ supported in a compact $K\Subset U_z$, choose a bounded rectangle $Q\subset\mathbb R^2$ containing $K$. Since $K$ is compactly contained in $U_z$, the zero extension of $\phi$ vanishes near the boundary of $U_z$ and is continuous on $\mathbb R^2$, hence Borel and Lebesgue measurable by [F12] and [F13]. The assignment $\phi\mapsto\mathcal O_z(\phi)$ is complex-linear and each weak coefficient is complex-linear in $a,b$. Since $|\phi|\le p_{K,0}(\phi)\mathbf1_Q$, [F10] and [F11] make $|\phi|$ integrable, so [F8] defines the complex integral. Writing $\phi=u+iv$, each of the four positive and negative parts of $u,v$ is bounded by $p_{K,0}(\phi)\mathbf1_Q$; the triangle inequality and the real positive/negative-part definition then give $|(\mathcal O_z(\phi)a)(b)|\le4\,|a|\,|b|\,\lambda_2(Q)\,p_{K,0}(\phi)$. This is a continuous bound on every fixed-support test-function stage, hence every weak coefficient is continuous in the inductive-limit topology specified in [F2]. [given, F2, F8, F9, F10, F11, F12, F13, algebra]

1.3 By [F5], $Df(z):\mathbb C\to\mathbb C$ is complex-linear, so $Df(z)(h)=hDf(z)(1)$. Its defining linear approximation gives $\frac{f(z+h)-f(z)}h=Df(z)(1)+\frac{r(h)}h$; because $|r(h)|/|h|\to0$, [F15] identifies $Df(z)(1)=f'(z)$. Thus the real differential is multiplication by $f'(z)=\alpha+i\beta$, with matrix $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ and determinant $\alpha^2+\beta^2=|f'(z)|^2>0$. Both $f$ and its inverse are smooth by [F4], so $f$ is a $C^1$ diffeomorphism. By [F6] applied to $f^{-1}\circ f=\operatorname{id}$, $(f^{-1})'(f(z))f'(z)=1$, hence $(f^{-1})'(f(z))=1/f'(z)$. [given, F4, F5, F6, F15, algebra]

2.1 For $\psi\ne0$ supported in a compact $L\Subset U_w$, the function $(f^{-1})'$ is smooth by [F4] and bounded on $L$. The product $\psi(f^{-1})'$ has compact support in $U_w$, so its zero extension vanishes near the boundary and is continuous, hence Lebesgue measurable by [F12] and [F13]. Choose a bounded rectangle $Q_L$ containing $L$. Applying the same four-positive-part estimate as in step 1.2 gives $|(\mathcal O_w(\psi)a)(b)|\le4\,|a|\,|b|\,\lambda_2(Q_L)\sup_L|(f^{-1})'|\,p_{L,0}(\psi)$, so the transformed weak coefficient is also a distribution on $U_w$. [given, F4, F8, F9, F10, F11, F12, F13, step 1.2, algebra]

2.2 Under $\xi=g(w)$ the inverse-derivative multiplier is $(g^{-1})'(\xi)(f^{-1})'(g^{-1}(\xi))$. By [F6] this is $(f^{-1}\circ g^{-1})'(\xi)=((g\circ f)^{-1})'(\xi)$, so the pointwise coefficient composes with the exact weight-$(1,0)$ law [F1]. [given, F1, F6, step 1.3, algebra]

3.1 For $\psi\in\mathcal D(U_w)$, the function $H(w)=\psi(w)(f^{-1})'(w)$ is smooth and compactly supported in $U_w$, so its zero extension and the real and imaginary parts and their positive and negative parts are continuous and Lebesgue measurable by [F12] and [F13]. Apply [F7] to the positive and negative parts of $\operatorname{Re}H$ and $\operatorname{Im}H$; [F8] then gives $\int_{U_w}\psi(w)(f^{-1})'(w)\,d^2w=\int_{U_z}\psi(f(z))(f^{-1})'(f(z))\,|f'(z)|^2\,d^2z=\int_{U_z}\frac{|f'(z)|^2}{f'(z)}\,\psi(f(z))\,d^2z$. The pulled-back test function is smooth because $|f'|^2/f'=\overline{f'}$ and compactly supported because $f^{-1}$ is continuous. Multiplying by $ab$ proves the exact weak primary test-function identity from [F2]; pointwise, $(f^{-1})'(f(z))\iota_{\mathrm{bil}}=(f'(z))^{-1}\mathcal O_z(z)$, the weight-$(1,0)$ primary law [F1]. [given, F1, F2, F7, F8, F9, F12, F13, step 2.1, step 1.3, algebra]

4.1 Applying the weak identity of step 3.1 first to $g$ and then to $f$ gives the test multiplier $\frac{|f'(z)|^2}{f'(z)}\,\frac{|g'(f(z))|^2}{g'(f(z))}\,\chi(g(f(z)))=\frac{|(g\circ f)'(z)|^2}{(g\circ f)'(z)}\,\chi((g\circ f)(z))$. The equality follows from [F6] and $|(g\circ f)'|^2=|f'|^2|g'\circ f|^2$. Each successively transformed function remains a test function by the compact-support and smoothness argument in step 3.1. Hence the weak smearing law for the composite coordinate is exactly the law assigned directly to $((g\circ f)^{-1})'(\xi)\iota_{\mathrm{bil}}$. [given, F2, F6, step 3.1, step 2.2, algebra]

5.1 Since $dw=f'(z)\,dz$, the local one-form coefficient satisfies $\mathcal O_w(w)\,dw=(f^{-1})'(w)\iota_{\mathrm{bil}}\,f'(z)\,dz=\iota_{\mathrm{bil}}\,dz=\mathcal O_z(z)\,dz$. The weight is the integer $1$, so no branch is required [F14]. These coefficients are defined only on the chosen patch; no global extension across $\infty$ or full CFT structure is asserted. [given, F1, F14, step 1.3, step 2.2, step 4.1, algebra] ∎

## Remarks

Ginsparg's §2.1 gives the tensor-style primary transformation in an active field convention; reversing the coordinate relabeling yields the passive coefficient convention used here. Tong's displayed Eq. (4.18) instead uses positive powers of the forward derivatives; it does not directly state the inverse-derivative passive coefficient law used here. The inverse factor here follows from keeping the one-form fixed while changing coordinate frames, as verified in step 5.1. Both sources use real weights, and this example uses the integer real weight $(1,0)$. They support the transformation convention only; the smearing bounds, Jacobian calculation, and composition verification above are local arguments. This is not a claim that $dz$ extends as a global holomorphic one-form on the sphere or that a full dynamical CFT exists.
