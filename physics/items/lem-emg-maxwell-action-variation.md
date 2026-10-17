---
id: lem-emg-maxwell-action-variation
kind: lemma
title: "Compact potential and metric variation of the Maxwell action"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-countable-choice
  - def-emg-lorentzian-forms
  - def-emg-local-potentials-and-circle-data
  - def-multidimensional-darboux-integral
  - def-multidimensional-darboux-sums
  - lem-emg-circle-connection-gluing
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-maxwell-current-forms
  - lem-gr-metric-divergence-and-density-formula
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-gr-compact-metric-and-timelike-curve-variation
  - thm-ftc-second-part
  - thm-riemann-fubini-on-product-rectangles
dependency_roles:
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 3.2.5 and section 4.5.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.2.5, equations (3.114)–(3.115), Maxwell action, source variation and charge flux; §4.5.3, metric variation of the Maxwell action and its stress tensor."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 1, field-strength and stress conventions, equations (1.73)–(1.78) and (1.111), printed pp. 20–24 and 30 (PDF pp. 26–30 and 36); chapter 7, Einstein–Maxwell stress and source-free equations (7.107)–(7.109), printed pp. 201–202 (PDF pp. 207–208)."
---

## Statement

Let $(M,g,N,o)$ be the smooth, boundaryless, oriented and time-oriented
Lorentzian four-manifold of [[def-emg-lorentzian-forms]], with the metric
volume form $\mathrm{vol}_g$ and metric-selected connection $\nabla$. Let
$F\in\Omega^2(M)$ be a smooth real two-form and let $c,\mu_0>0$ be fixed
real coefficients. The action density is

$$\mathcal L_{\mathrm{EM}}\,\mathrm{vol}_g=-\frac{1}{4\mu_0c}F_{ab}F^{ab}\,\mathrm{vol}_g=-\frac{1}{2\mu_0c}F\wedge\star_gF.$$

When this density has a global integral, denote it by $S_{\mathrm{EM}}[g,F]$.
On a noncompact domain, every displayed variation below means the finite
action difference supported by the compactly supported variation.

Assume the fixed smooth bundle sector and connection-variation interface in
[A1] below. Then:

**(a) Connection variation.** For every smooth compactly supported global
one-form $\alpha$ allowed by that fixed-sector interface, holding $g$ fixed gives $\delta F=d\alpha$ and

$$\delta_A S_{\mathrm{EM}}[\alpha]=\frac{1}{\mu_0c}\int_M(\nabla_aF^{ab})\alpha_b\,\mathrm{vol}_g.$$

If a differentiable source-sector functional on the same variations satisfies
$\delta_A S_{\mathrm{m}}[\alpha]=c^{-1}\int_Mj^b\alpha_b\,\mathrm{vol}_g$ for a
smooth vector field $j$, then stationarity of
$S_{\mathrm{EM}}+S_{\mathrm m}$ under every such $\alpha$ is equivalent on $M$ to

$$\nabla_aF^{ab}=-\mu_0j^b,$$

and hence to $d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$ by
[[lem-emg-maxwell-current-forms]]. This is a conditional variational
calculation; it asserts no matter-action existence or physical adoption.

**(b) Metric variation.** For a smooth compactly supported symmetric inverse
metric variation $q^{ab}:=\delta g^{ab}$, holding the lower components
$F_{ab}$ fixed and preserving Lorentz signature for sufficiently small
parameter, define $T_{\mathrm{EM},ab}$ by

$$\delta_gS_{\mathrm{EM}}[q]=-\frac{1}{2c}\int_M T_{\mathrm{EM},ab}q^{ab}\,\mathrm{vol}_g.$$

Then

$$T_{\mathrm{EM},ab}=\frac{1}{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$

This is the tensor obtained by varying the free electromagnetic action; it
contains no stress contribution from a source or matter functional.

## Facts & Assumptions

**Given:** The smooth oriented Lorentzian geometry, the smooth two-form $F$, the positive constants $c,\mu_0$, compactly supported variation directions, and the explicit conditional source-variation hypothesis in the Statement.

[F1] [[def-emg-lorentzian-forms]] fixes the boundaryless oriented, time-oriented Lorentzian four-manifold, metric volume form, metric-selected connection and length-coordinate scale $c$. The orientation is independent of the metric and time orientation.

[F2] [[lem-emg-lorentz-hodge-calculus]] gives $F\wedge\star_gF=\frac12F_{ab}F^{ab}\mathrm{vol}_g$ for a two-form in the stated signature and orientation.

[F3] For a smooth Lorentzian metric family supported in one chart, inverse-metric directions are realizable by [[thm-gr-compact-metric-and-timelike-curve-variation]], part (a). The pointwise identity $\delta\mathrm{vol}_g=-\frac12g_{ab}q^{ab}\mathrm{vol}_g$ is recorded in that supplier's Facts & Assumptions [L4] and used in its proof step 3.1. Its determinant calculation is pointwise and has no support or boundary requirement, so the same formula applies in each chart to the global family constructed in step 1.1 below. The supplier's chart-integral argument in its Facts & Assumptions [L8] uses uniform difference quotients on a fixed compact rectangle to differentiate under the integral, and FTC/Fubini to integrate a compactly supported coordinate divergence to zero.

[F4] In any chart, $\nabla_aW^a=w^{-1}\partial_a(wW^a)$ for a smooth vector field $W$, where $w=\sqrt{|\det g|}$ ([[lem-gr-metric-divergence-and-density-formula]], clause (c)). The chart calculation applies to chart-supported fields; its globalization is proved in the localization argument below.

[F5] The geometric suppliers inherit $\mathrm{AC}_\omega$, whose exact statement is that every countable family of nonempty sets has a choice function ([[def-countable-choice]]). The local variational calculation uses no additional choice.

[F6] [[lem-emg-maxwell-current-forms]] proves the exact sign equivalence $\nabla_aF^{ab}=-\mu_0j^b\Longleftrightarrow d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$ for smooth $F,j$ and $\mu_0>0$.

[F7] A bounded function on a closed nondegenerate rectangle is Riemann integrable when its lower and upper Darboux integrals agree; the integral is their common value. The lower and upper sums are the cell infima/suprema multiplied by cell volumes ([[def-multidimensional-darboux-integral]], [[def-multidimensional-darboux-sums]]).

[F8] Every continuous real function on a closed nondegenerate rectangle in $\mathbb R^m$ is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F9] For a Riemann-integrable function on a product rectangle, its iterated integrals in either coordinate order exist and equal its multiple integral, provided the sections in that order are integrable; for continuous coefficients they are integrable ([[thm-riemann-fubini-on-product-rectangles]]).

[F10] If $G$ is differentiable at every point of a closed interval and $f=G'$ is integrable there, then $\int_a^b f=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F11] A lower Darboux sum on a rectangle is the finite sum of the infimum on each cell multiplied by that cell's nonnegative volume ([[def-multidimensional-darboux-sums]]). In particular, if a continuous function is at least $\eta>0$ on a nondegenerate rectangle $R$, its one-cell lower sum is at least $\eta\operatorname{vol}(R)>0$, so its integral is positive by [F7]–[F8].

[F12] Under $\mathrm{AC}_\omega$, a smooth chart cover admits a smooth subordinate partition of unity ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]). The integral of a compactly supported top form is its finite sum of chart integrals ([[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]), independent of cover and partition ([[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]). In a positive chart the metric volume coefficient is $w$.

[A1] The current batch-2 carriers [[def-emg-local-potentials-and-circle-data]] and [[lem-emg-circle-connection-gluing]] exist, and their inspected interface matches the use here: $F=\kappa_0 f$ is the physical curvature two-form of a normalized connection on a fixed principal $U(1)$ bundle, given by a supplied countable open cover, smooth transition cocycle and compatible local forms; the gluing lemma states that two connections with the same transitions differ by a global smooth base one-form, so a compactly supported global physical one-form $\alpha$ is an allowed variation and $\delta F=d\alpha$. The normalization $\kappa_0>0$ rescales the circle connection and is not identified with $\hbar$ or an electric charge. Both carriers are currently draft; the gluing construction now uses the actual set-size definition authored on emg-mg02, together with the other six typed foundational conventions on that page. The fixed-sector variation interface is unchanged. These authored drafts do not assert independent acceptance.


[A2] For the matter-coupled Euler–Lagrange clause, the smooth source $j$ is hypothesized to satisfy $\delta_A S_{\mathrm m}[\alpha]=c^{-1}\int_Mj^b\alpha_b\,\mathrm{vol}_g$ for every admissible compactly supported $\alpha$. This is a conditional first-variation premise, not a claim that a global source functional exists.

[A3] Stationarity means that the first variation of the total action vanishes for every admissible compactly supported connection variation. No matter equation, empirical premise or adopted physical field postulate is assumed.

## Proof

**Given:** Facts [F1]–[F12], the conditional fixed-sector interface [A1], the source-variation hypothesis [A2] when used, and compactly supported metric directions.

1.1 Interpret a compactly supported variation as a smooth family equal to its background off one fixed compact set $K$ for all sufficiently small parameters. Connection variations $A+s\alpha$ have $K=\operatorname{supp}\alpha$ and $F(s)=F+s\,d\alpha$ in the fixed sector. For a prescribed metric direction $q$, put $h_{ab}=-g_{ac}g_{bd}q^{cd}$ and $g(s)=g+sh$. If $K=\varnothing$, then $h=0$ and the metric is unchanged. Otherwise, to choose one parameter interval valid on all of $K$, fix $p\in K$ and make a constant linear coordinate change so that $g(p)$ has matrix $\eta=\operatorname{diag}(-1,1,1,1)$. By continuity choose a relatively compact chart neighborhood on which $\|g(x)-\eta\|_{\mathrm{op}}<1/2$ and $\|h(x)\|_{\mathrm{op}}$ is bounded. Choose $\delta_p>0$ so $|s|\|h(x)\|_{\mathrm{op}}<1/2$ there for $|s|<\delta_p$. Then $A(x,s):=g(x)+sh(x)$ is positive on the fixed three-dimensional spatial coordinate subspace and negative on the time coordinate line. It is nondegenerate: if $A(x,s)v=0$, then $v=-\eta^{-1}(A(x,s)-\eta)v$, contradicting $\|\eta^{-1}\|_{\mathrm{op}}=1$ and $\|A(x,s)-\eta\|_{\mathrm{op}}<1$. Thus its inertia has three positive and one negative directions, exactly $(-,+,+,+)$. Such neighborhoods cover $K$; compactness gives a finite subcover and the minimum of their parameter bounds works on all of $K$. Outside $K$, $h=0$ and the metric is unchanged. Thus the action-density difference $\omega(s)-\omega(0)$ is a smooth top form supported in a common $K$, even when neither background action is finite. Its integral in [F12] is the relative action; additivity of integrals makes successive relative differences consistent. No subtraction of infinite action values is involved. [given, A1, F3, F12, construct]

2.1 Fix the chart cover and partition $(\rho_i)$ of [F12] independently of $s$. Local finiteness gives a neighborhood of each point meeting only finitely many supports; a finite such neighborhood cover of $K$ shows that only finitely many $\rho_i$ meet $K$. Each $\rho_i(\omega(s)-\omega(0))$ has compact support inside its chart. Extend its coefficient by zero and enclose that support in a coordinate rectangle. On a closed parameter interval about zero the coefficient derivative is uniformly continuous on the product rectangle; the mean-value argument in [F3] makes its difference quotients converge uniformly. The estimate $|\int_Q u|\le\operatorname{vol}(Q)\sup_Q|u|$ from [F7] permits differentiation inside this chart integral. Summing finitely many terms proves $\delta\int_M(\omega(s)-\omega(0))=\int_M\delta\omega$. Choice independence is exactly [F12]. [given, F3, F7, F8, F12, step 1.1, algebra]

3.1 For any smooth compactly supported vector field $W$, the same partition has only finitely many terms meeting its support. Each $\rho_iW$ is compactly supported inside one chart. In that chart its density divergence is $\partial_a(w\rho_iW^a)$ by [F4]. Zero extension is smooth, and FTC/Fubini on a containing rectangle gives zero integral, because its coefficients vanish near every rectangle face. The global integral agrees with this chart integral by [F12]. On a neighborhood of $\operatorname{supp}W$, $\sum_i\rho_i=1$ and $\sum_i d\rho_i=0$, so $\sum_i\nabla_a(\rho_iW^a)=\nabla_aW^a$; off the support both sides vanish. Finite additivity therefore gives $\int_M\nabla_aW^a\,\mathrm{vol}_g=0$. This proves the compact divergence rule without requiring the support to fit one chart. [F4, F7, F8, F9, F10, F12, step 2.1, algebra]

3.2 For a connection variation in [A1], $\delta F=d\alpha$; in components $\delta F_{ab}=2\nabla_{[a}\alpha_{b]}$ because the Levi-Civita Christoffel symbols are symmetric in their lower indices. Holding $g$ fixed gives $\delta(F_{ab}F^{ab})=2F^{ab}\delta F_{ab} =4F^{ab}\nabla_a\alpha_b$. Differentiating the coefficient in the action therefore yields $\delta_A S_{\mathrm{EM}}=-(\mu_0c)^{-1}\int_MF^{ab}\nabla_a\alpha_b\,\mathrm{vol}_g$. [given, A1, F1, step 2.1, algebra]

3.3 Let $q^{ab}=\delta g^{ab}$ and hold $F_{ab}$ fixed. From
$F_{cd}F^{cd}=g^{ca}g^{db}F_{cd}F_{ab}$, symmetry of $q$ and antisymmetry
of $F$ give
$\delta(F_{cd}F^{cd})=2F_{ac}F_b{}^c q^{ab}$. The volume variation in [F3]
then gives
$$\delta_g(F_{cd}F^{cd}\mathrm{vol}_g)=\left(2F_{ac}F_b{}^c-\frac12g_{ab}F_{cd}F^{cd}\right)q^{ab}\mathrm{vol}_g.$$
By [F2], this is the variation of the same action density as its wedge-form
representative.
Multiplying by $-1/(4\mu_0c)$ and comparing with the definition in part (b)
gives the displayed $T_{\mathrm{EM},ab}$. The variation is local and
compactly supported, so no boundary term is discarded. [given, F1, F2, F3, step 2.1, algebra]

4.1 Set $W^a:=F^{ab}\alpha_b$. The product rule gives $\nabla_aW^a=(\nabla_aF^{ab})\alpha_b+F^{ab}\nabla_a\alpha_b$. By step 3.1, $\int_M\nabla_aW^a\,\mathrm{vol}_g=0$, for arbitrary compact support of $\alpha$. Substitution into step 3.2 gives $\delta_A S_{\mathrm{EM}}=(\mu_0c)^{-1}\int_M(\nabla_aF^{ab})\alpha_b\,\mathrm{vol}_g$, proving the connection-variation formula. [given, F4, step 3.1, step 3.2, algebra]

5.1 Adding [A2] to step 4.1 gives $\delta_A(S_{\mathrm{EM}}+S_{\mathrm m})[\alpha] =(\mu_0c)^{-1}\int_M(\nabla_aF^{ab}+\mu_0j^b)\alpha_b\,\mathrm{vol}_g$. If $\nabla_aF^{ab}+\mu_0j^b=0$, this integral vanishes for every allowed $\alpha$. Conversely, if it vanishes for every smooth compactly supported one-form supported in one chart rectangle, fix a point and suppose a component $K^{b_0}:=\nabla_aF^{ab_0}+\mu_0j^{b_0}$ is nonzero there. By continuity, shrink to a coordinate ball with compact closure where $K^{b_0}$ has one strict sign and $w>0$. In coordinates centered at that point define $\phi(x)=\exp(-1/(r^2-|x|^2))$ for $|x|<r$ and $\phi(x)=0$ for $|x|\ge r$. Every derivative approaching $|x|=r$ is a finite sum of a polynomial in $1/(r^2-|x|^2)$ times the same exponential, and $s^{-m}e^{-1/s}\to0$ as $s\downarrow0$ for every $m\ge0$; hence $\phi$ is a smooth nonnegative compactly supported function, positive inside the ball. Set $\alpha=\phi\,dx^{b_0}$ in the chart and extend it by zero outside the compact support; this gives an admissible global one-form in [A1]. The bump and rectangle are explicitly constructed, so the ambient convention [F5] introduces no arbitrary choice. The product $K^{b_0}\phi w$ is continuous and supported in a compact rectangle containing the bump support, so [F8] makes its full integral well-defined. At the center, $|K^{b_0}\phi w|>0$; continuity gives a smaller closed nondegenerate rectangle $R$ on which this coefficient has one strict sign and absolute value at least some $\eta>0$. By [F8] it is Riemann integrable there. Applying [F11] to its sign-adjusted coefficient shows that the absolute value of the integral over $R$ is at least $\eta\operatorname{vol}(R)>0$. On the entire bump support the product has the same sign, since $K^{b_0}$ has one sign on the ball and $\phi,w$ are nonnegative; therefore its full integral over the support cannot vanish. This contradicts the assumed stationarity integral. Thus every component $K^b$ vanishes at every point. Conversely its pointwise vanishing makes the variation zero for every compactly supported global one-form by step 4.1. This proves the stated global stationarity equivalence under [A2]–[A3]. [given, A1, A2, A3, F1, F5, F8, F11, step 4.1, construct, algebra]

6.1 When the Euler–Lagrange equation in step 5.1 holds, apply [F6] to obtain $d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$. This uses the conditional current interface of [A1] and the exact current-sign identity proved in the earlier item; it adds no global potential or matter-action claim. [given, A1, F6, step 5.1] ∎

## Remarks

The fixed-bundle variation is the exact conditional scope of [A1]. A globally defined potential is not assumed; only the difference of connections in one fixed sector is used. The source action and its variation are also conditional. The free-field metric variation does not include the stress tensor of any source or matter sector.
