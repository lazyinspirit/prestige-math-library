---
id: pthm-sr-specified-model-comparison
kind: physics-theorem
domain: physics
title: "Specified-model comparison with calibrated bounds and reported uncertainty scales"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
deps:
  - def-sr-experiment-interface-vocabulary
  - exp-sr-stored-lithium-ion-doppler-time-dilation-2014
  - pthm-sr-null-wave-doppler-and-aberration
  - def-sr-null-wave-covector-and-observer-frequency
  - post-sr-ideal-plane-wave-model
  - lem-rational-power-laws
  - lem-rational-power-monotone
  - lem-of-sign-rules
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-boost
  - lem-boost-is-proper-orthochronous-with-inverse
  - lem-sr-null-covector-frame-data
  - def-sr-affine-phase-and-wave-covector
dependency_roles:
  def-sr-experiment-interface-vocabulary: formulation-prerequisite
  exp-sr-stored-lithium-ion-doppler-time-dilation-2014: empirical-premise
  pthm-sr-null-wave-doppler-and-aberration: physical-result
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-plane-wave-model: physical-assumption
  lem-rational-power-laws: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-sr-null-covector-frame-data: mathematical-premise
  def-sr-affine-phase-and-wave-covector: mathematical-premise
physical_scope: "General finite calibrated/nuisance model comparison and exact positive-frequency bound propagation, with separate source-reported-estimate/standard-uncertainty score analysis. Instantiates the actual 2014 stored 7Li+ optical-optical double resonance report under explicit atomic, optical, resonance and beam-calibration auxiliaries. Hard-bound declarations are conditional; reported 1-sigma scales imply no guaranteed bounds or coverage. No p-values, confidence levels, raw-data reanalysis or unique validation of SR are asserted. The comparator Gamma=1 is explicitly specified and evaluated at the nominal beta; all source empirical conditions and uncertainties are inherited."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages; the author's lightandmatter.com page links this Archive upload); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Sections 1.3 'Measurement' and 1.4 'The Lorentz transformation', pp. 23-31 and Sections 3.2-3.3 pp. 55-59 (the stretch factor as Doppler shift)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III course notes, 2019), author-hosted copy of the official Cambridge full PDF; Chapter 1 Sections 1.2.1-1.2.2 printed pp. 12-16 (proper time on p. 14): proper time along a particle's worldline and the aging comparison"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "B. Botermann et al., Test of Time Dilation Using Stored Li+ Ions as Clocks at Relativistic Speed, arXiv:1409.7951v1 (2014), full five-page primary report; equations (1)-(4), Figures 1-2, Table I. Published Phys. Rev. Lett. 113, 120405 (2014)."
      url: "https://arxiv.org/pdf/1409.7951v1"
empirical_premises:
  - experiment: exp-sr-stored-lithium-ion-doppler-time-dilation-2014
    conditions: "Stored 7Li+ ESR optical-optical double resonance experiment at nominal beta = 0.338; Table I laser and rest-frequency inputs, same-velocity Lambda resonance, source correction and calibration models and active-invariance auxiliary assumptions."
    uncertainty: "Reported u_epsilon = 2.3 x 10^-9; includes fitting, calibration, background, Gouy-phase, alignment and divergence uncertainty scales; no probability or coverage guaranteed."
    use: "Reported epsilon estimate and standard scale only, under the stated apparatus and atomic auxiliaries; used for a deterministic descriptive scale score, never as hard truth bounds or a coverage/rejection rate."
proof_strategy: direct
dependency_level: 18
---

## Statement

Adopt [[def-sr-experiment-interface-vocabulary]]. Comparison labels below range over explicitly specified prediction hypotheses, each with its own apparatus and calibration assumptions. When a label is an operational model of the SR framework, its prediction map must satisfy clause (b), condition $(*)$, of that vocabulary using the specified SR suppliers. A competing prediction hypothesis need not be an SR operational model and is not represented as satisfying $(*)$. Reported standard uncertainties are a separate record type, not the vocabulary's declared hard-bound records.

**(a) General finite comparison.** An apparatus/calibration nuisance parameter means an additional declared model input constrained together with the physical parameter; its domain is part of the admissible set below, and no probability law is implicit. Flatten a finite $d$-dimensional record with $N$ entries to $m=Nd$ real coordinates. For each label $\ell$, let $A_\ell$ be a declared set of admissible tuples $a=(\theta,\eta,b)$, where $\theta$ is a physical parameter, $\eta$ an apparatus or calibration nuisance parameter, and $b\in\mathbb R^m$ an additive calibration correction. Let $P_\ell:A_\ell\to\mathbb R^m$ be its corrected prediction, $P_\ell(a)=F_\ell(\theta,\eta)+b$; every correction and admissibility constraint is explicitly stated. For a declared hard-bound record $(z,e)$ put $B(z,e)=\prod_{j=1}^m[z_j-e_j,z_j+e_j]$ and $C_\ell=\{a\in A_\ell:P_\ell(a)\in B(z,e)\}$. Then $C_\ell\neq\varnothing$ if and only if $P_\ell(A_\ell)\cap B(z,e)\neq\varnothing$. If the true calibrated vector satisfies the declared bounds and a candidate with its auxiliaries assigns that vector the value $P_\ell(a)$ for some $a\in A_\ell$, then $a\in C_\ell$. Thus $C_\ell=\varnothing$ excludes that conjunction of candidate, parameter, calibration and hard-bound assumptions, rather than proving another model. If every prediction in $P_\ell(A_\ell)$ has coordinate $j$ in $[L_j,U_j]$ disjoint from $[z_j-e_j,z_j+e_j]$, then $C_\ell=\varnothing$. This criterion is sufficient; overlap of marginal intervals alone does not establish joint feasibility.

**(b) Exact finite uncertainty propagation.** For positive frequencies $\nu_a,\nu_p,\nu_1,\nu_2$ define $Q=\sqrt{\nu_a\nu_p/(\nu_1\nu_2)}-1$. If separately declared hard bounds place these frequencies in positive closed intervals $[\nu_{a,-},\nu_{a,+}]$, $[\nu_{p,-},\nu_{p,+}]$, $[\nu_{1,-},\nu_{1,+}]$ and $[\nu_{2,-},\nu_{2,+}]$, then

$$Q\in\left[\sqrt{\frac{\nu_{a,-}\nu_{p,-}}{\nu_{1,+}\nu_{2,+}}}-1,\ \sqrt{\frac{\nu_{a,+}\nu_{p,+}}{\nu_{1,-}\nu_{2,-}}}-1\right].$$

Both endpoints are attained on this rectangular input domain. This is conditional on the hard-bound event; standard-uncertainty entries alone assert neither that event nor probabilistic independence.

**(c) Reported-estimate comparison.** A reported-estimate record $H=(\widehat z,u,\alpha,\mathcal M)$ consists of a finite real estimate vector, strictly positive reported scale entries $u_j$, bibliographic and run annotations $\alpha$, and a source description $\mathcal M$ of estimation and uncertainty construction. It asserts no hard bound or coverage. Here $|t|=t$ for $t\ge0$ and $|t|=-t$ for $t<0$; a nonempty finite maximum is obtained by recursively comparing pairs. For a declared multiplier $k\ge0$ define

$$D_\ell(a)=\max_{1\le j\le m}\frac{|\widehat z_j-P_{\ell,j}(a)|}{u_j},\qquad S_\ell(k)=\{a\in A_\ell:D_\ell(a)\le k\}.$$

Then $S_\ell(k)=P_\ell^{-1}(\prod_j[\widehat z_j-ku_j,\widehat z_j+ku_j])$. This is a deterministic comparison of estimates and reported scales. No probability, $p$-value, confidence level or rejection error rate follows without a separately justified sampling and error model.

**(d) Primary-report instantiation.** Under the qualified conditions of `exp-sr-stored-lithium-ion-doppler-time-dilation-2014`, additionally stipulate that resonance identifies each laser frequency in the ions' instantaneous rest frame with its stated rest transition frequency, that those transition frequencies are unchanged under active boosts, and that the ideal vacuum phase and frequency law applies in the interaction section after the report's beam, Gouy-phase and line-shape corrections. These atomic, optical and apparatus premises are not derived by [[pthm-sr-null-wave-doppler-and-aberration]]. At each selected reception event, additionally represent the ion by an inertial rest observer with velocity $c\beta e_1$, $|\beta|<1$, in a laboratory inertial frame $(o;e_0,e_1,e_2,e_3)$. This is a stipulated reception idealization in the interaction section, not an application of the supplier to an accelerating storage-ring worldline. For oppositely propagating laboratory waves, that theorem gives

$$\nu_1=\gamma(1-\beta)\nu_p,\qquad \nu_2=\gamma(1+\beta)\nu_a,\qquad \gamma=(1-\beta^2)^{-1/2}.$$

Hence $Q_{\mathrm{SR}}=0$. To make that interpretation explicit, fix arbitrary positive model transition frequencies $\nu_1,\nu_2$ in hertz. For each $\beta\in(-1,1)$ take the chart $x_\beta=B(\beta e_1)x$, its rest vector $n_\beta=B(-\beta e_1)e_0$, and laboratory frequencies $\nu_p=\nu_1/[\gamma(1-\beta)]$, $\nu_a=\nu_2/[\gamma(1+\beta)]$. Take covectors with laboratory components $k_p=(2\pi\nu_p/c)(-1,1,0,0)$ and $k_a=(2\pi\nu_a/c)(-1,-1,0,0)$ and phases $p\mapsto k_p(p-o)$, $p\mapsto k_a(p-o)$. Let $D(\beta)$ contain these waves, $n_\beta$, reception event $o$ and the declared scalar parameters, with the two frames attached to the readings. Then $S=\Theta=(-1,1)$, parameter map $\mathrm{id}$, and prediction $F(\beta)=Q_{\mathrm{SR}}=0$ give an operational model for $Q$ under the stipulated resonance identification. The transition frequencies here are model parameters; this construction does not assert exact knowledge of the report's uncertain frequency values. Define the alternative prediction hypothesis by replacing the common factor $\gamma$ in those resonance equations by $\Gamma(\beta)=1$, retaining the same directional factors and apparatus assumptions. It predicts $Q_1(\beta)=(1-\beta^2)^{-1/2}-1$. This deliberately alternative hypothesis is not an SR operational model and makes no claim to satisfy $(*)$; it is not identified with all classical physics.

For the source-reported dimensionless estimate $\widehat z=1.5\times10^{-9}$ and scale $u=2.3\times10^{-9}$, the declared $k=1$ criterion gives $D_{\mathrm{SR}}=15/23<1$, with descriptive scale band $[-0.8,3.8]\times10^{-9}$. At the report's nominal $\beta=0.338$, one has $0.062<Q_1(0.338)<0.063$, hence $D_1>10^7$: that nominal alternative prediction fails this scale criterion. This is not a statistical significance claim. The speed is nominal, no calibrated speed uncertainty is supplied for this evaluation, and no distribution or coverage is inferred. The SR product prediction is independent of $\beta$; the alternative prediction depends on its declared value. Agreement of SR with the descriptive scale band tests the physical and apparatus conjunction within the report's uncertainty treatment; it neither proves SR nor uniquely identifies its auxiliary assumptions. All conclusions inherit the primary report's conditions, calibration dependence and statistical and systematic limitations.

## Facts & Assumptions

**Given:** A finite-dimensional hard-bound record $(z,e)$ with nonnegative entries $e_j$, a label $\ell$ with declared admissible set $A_\ell$ and corrected prediction $P_\ell$, a reported-estimate record $H=(\widehat z,u,\alpha,\mathcal M)$ with $u_j>0$, a declared multiplier $k\ge0$, and the reported stored-lithium-ion experiment of [[exp-sr-stored-lithium-ion-doppler-time-dilation-2014]] with its nominal speed, frequencies, corrections and uncertainty budget.

[F1] The experimental-interface vocabulary: an operational model $M=(S,\Theta,\theta,D,F)$ has $F$ subject to the declared interpretation $(*)$; a data record declares that each value lies in its closed box $\prod_j[z_j-\varepsilon_j,z_j+\varepsilon_j]$ in the declared units and contains no probability space, sampling law, independence assumption, likelihood or coverage statement; and clause (f) makes a consistency or comparison claim a separate claim requiring an explicitly declared comparison rule ([[def-sr-experiment-interface-vocabulary]]).

[F2] The reported primary experiment: equation (4) reports $\epsilon=\sqrt{\nu_a\nu_p/(\nu_1\nu_2)}-1=(1.5\pm2.3)\times10^{-9}$ at nominal $\beta=0.338$; Table I gives $\nu_1=546455143.0$, $\nu_2=546474960.7$, $\nu_a=384225534.98$ and $\nu_p=777210326.98$ in MHz with source-labelled $1\sigma$ scales; the reported scales include fitting, reference, stabilization, background, Gouy-phase, alignment and divergence entries; the raw data, fit weights and covariance are not published; the observable tests the combined Doppler, atomic-transition and apparatus assumptions ([[exp-sr-stored-lithium-ion-doppler-time-dilation-2014]]).

[F3] Doppler theorem: for inertial charts whose transition is $x'=B(\beta)x+b$ with $|\beta|<1$, the same future null wave covector with frame-$x$ data $(\omega,s)$ has frame-$x'$ data $(\omega',s')$ with $\omega'=\gamma(1-\beta\cdot s)\omega$, $\gamma=(1-|\beta|^2)^{-1/2}$, and the rest observers of the two charts read $\omega=-c k(e_0)$ and $\omega'=-c k(e'_0)$; in the axis case $s=e_1$ this is the longitudinal factor $\gamma(1-\beta)$ ([[pthm-sr-null-wave-doppler-and-aberration]]).

[F4] Frequency conventions: the observer of four-velocity $U_o=c n$ reads $\omega_n=-c k(n)=-k(U_o)$; a future null wave covector has frame components $k_a=(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3)$ with $\omega>0$, $|s|=1$ ([[def-sr-null-wave-covector-and-observer-frequency]]).

[A1] Adopted ideal plane-wave model: an ideal monochromatic vacuum wave is modeled by a dimensionless affine phase with future null wave covector, and an ideal observer receiving it reads $\omega_n=-c k(n)$ ([[post-sr-ideal-plane-wave-model]]).

[F6] The boost and inverse preserve the Lorentz form, orientation and future cone ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]]); therefore the inverse-boosted basis gives the inertial chart $x_\beta$ by [[def-inertial-frame-and-inertial-chart]]. Covectors with components $(-\varpi,\varpi s)$, $\varpi>0$, $|s|=1$, are future null by [[lem-sr-null-covector-frame-data]] (e), and $p\mapsto k(p-o)$ is their affine phase by [[def-sr-affine-phase-and-wave-covector]] (a).

[F5] Rational power laws: $(ab)^r=a^r b^r$ and $a^{r+s}=a^r a^s$ for $a,b>0$ and rational $r,s$; for rational $r>0$ the map $a\mapsto a^r$ is strictly increasing on the positive reals; and if $c>0$ then $a<b$ if and only if $ac<bc$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]] claim 2, [[lem-of-sign-rules]] claim 4).

## Proof

**Proof technique:** direct.

1.1 By definition $C_\ell=\{a\in A_\ell:P_\ell(a)\in B(z,e)\}$ is the preimage under $P_\ell$ of the box $B(z,e)$, restricted to $A_\ell$; hence $C_\ell$ is nonempty exactly when some admissible tuple has corrected prediction inside the box, that is exactly when $P_\ell(A_\ell)\cap B(z,e)\neq\varnothing$; and if the declared true calibrated vector lies in $B(z,e)$ and an admissible tuple reproduces it, that tuple lies in $C_\ell$ by the same membership. Thus an empty $C_\ell$ rules out the conjunction of the candidate, its parameter and calibration auxiliaries and the declared bounds, and says nothing about which conjunct failed, so it does not by itself establish a competing hypothesis; the box $B(z,e)$ is well defined and nonempty because $e_j\ge0$, and it is a singleton exactly when $e=0$. [given, F1]

1.2 On the positive rectangle the function $\nu_a\nu_p/(\nu_1\nu_2)$ is increasing in $\nu_a,\nu_p$ and decreasing in $\nu_1,\nu_2$, because multiplying an inequality by a positive number and dividing it by a positive number preserve it by [F5]; the numerator product is positive and the denominator product is positive, so the quotient is positive, and the strictly increasing positive square root $u\mapsto u^{1/2}$ of [F5] preserves the two resulting inequalities, which are exactly the displayed lower and upper bounds; the corner $(\nu_{a,-},\nu_{p,-},\nu_{1,+},\nu_{2,+})$ lies in the rectangle by the interval hypotheses and attains the lower endpoint, and the opposite corner attains the upper endpoint. [F5, algebra]

1.3 The scale score is a finite maximum over the coordinates, so $D_\ell(a)\le k$ holds exactly when $|\widehat z_j-P_{\ell,j}(a)|\le ku_j$ for every $j$; because every $u_j$ is strictly positive, this is exactly $\widehat z_j-ku_j\le P_{\ell,j}(a)\le \widehat z_j+ku_j$ for every $j$ by the order rules of [F5], which is exactly the statement that $P_\ell(a)$ lies in the product of the closed intervals. Taking preimages gives $S_\ell(k)=P_\ell^{-1}(\prod_j[\widehat z_j-ku_j,\widehat z_j+ku_j])$, an identity of sets of admissible tuples; at $k=0$ it reduces to the preimage of the point $\widehat z$, and no random variable, measure or probability model is involved. [given, F1, F5]

1.4 For each admissible ion velocity $c\beta e_1$ with $|\beta|<1$ the two laser frequencies are read in the moving ion's instantaneous rest frame; the parallel and antiparallel waves propagate along $\pm e_1$, so the Doppler factor of [F3] is $\gamma(1-\beta)$ and $\gamma(1+\beta)$ respectively, and assigning the rest-frame readings the rest transition frequencies as stipulated gives $\nu_1=\gamma(1-\beta)\nu_p$ and $\nu_2=\gamma(1+\beta)\nu_a$ with $\gamma=(1-\beta^2)^{-1/2}$; multiplying, $\nu_a\nu_p/(\nu_1\nu_2)=1/[\gamma^2(1-\beta)(1+\beta)]=1/[\gamma^2(1-\beta^2)]=1$, because $(1-\beta)(1+\beta)=1-\beta^2$ and $\gamma^2(1-\beta^2)=1$ by the definition of $\gamma$, so $Q_{\mathrm{SR}}=0$. For the operational model displayed in (d), [F6] makes the inverse-boosted basis an inertial frame and $n_\beta$ future unit timelike. The laboratory frequencies are positive since $\nu_i>0$, $\gamma>0$ and $1\pm\beta>0$; [F6] makes both covectors future null with the displayed affine phases. At event $o$ the two readings assigned by [F3] and [A1] equal $\nu_1$ and $\nu_2$ by construction. The sets $S=\Theta=(-1,1)$ are nonempty and the identity parameter map is surjective; $D(\beta)$ is a run description of [F1], and its computed product gives $F(\beta)=0$, proving $(*)$. The alternative hypothesis that keeps the same directional factors and replaces $\gamma$ by one gives $\nu_1=(1-\beta)\nu_p$, $\nu_2=(1+\beta)\nu_a$ and hence $Q_1(\beta)=(1-\beta^2)^{-1/2}-1$. [A1, F1, F2, F3, F4, F5, F6]

2.1 If for some coordinate $j$ every value of $P_\ell$ lies in an interval $[L_j,U_j]$ disjoint from $[z_j-e_j,z_j+e_j]$, then no admissible tuple has prediction in $B(z,e)$, so $C_\ell=\varnothing$ by step 1.1; this disjointness criterion is sufficient and not necessary, since for instance the two-point prediction set $\{(0,1),(1,0)\}$ has both coordinate projections meeting $[0,0]\times[0,0]$ at $0$ while no point of it lies in that box, so overlap of the marginal projections alone does not establish the joint feasibility that $C_\ell$ requires, and nuisance and calibration constraints inside $A_\ell$ cannot be replaced by their coordinatewise projections. [F1, step 1.1]

2.2 For the reported dimensionless estimate and scale, $\widehat z=15/10^{10}$ and $u=23/10^{10}$ in the units of the report's record; the SR prediction $Q_{\mathrm{SR}}=0$ has score $D_{\mathrm{SR}}=(15/10^{10})/(23/10^{10})=15/23<1$ by step 1.3, so zero lies inside the descriptive scale band $[\widehat z-u,\widehat z+u]=[-8/10^{10},38/10^{10}]$. For the nominal $\beta=169/500$ we compute $1-\beta^2=221439/250000$ and the two exact positive comparisons $(531/500)^2\cdot(221439/250000)<1<(1063/1000)^2\cdot(221439/250000)$; taking positive square roots and reciprocals by [F5] gives $531/500<1/\sqrt{1-\beta^2}<1063/1000$, that is $31/500<Q_1(169/500)<63/1000$, so the alternative prediction exceeds the estimate and its score is $D_1\ge(31/500-15/10^{10})/(23/10^{10})=(619999985/10^{10})\cdot(10^{10}/23)>10^7$, again by step 1.3 and the order rules of [F5]. Hence at the nominal speed the SR prediction meets the declared $k=1$ scale criterion while the explicitly specified alternative prediction fails it by a wide margin. [F2, F5, step 1.3, step 1.4, algebra]

3.1 Collecting the steps: (a) is steps 1.1 and 2.1, (b) is step 1.2, (c) is step 1.3 and the identity $S_\ell(k)=P_\ell^{-1}(\prod_j[\widehat z_j-ku_j,\widehat z_j+ku_j])$, and (d) is steps 1.4 and 2.2 with the auxiliaries and qualifications displayed in the Statement. The comparison rules are exact conditional statements about declared hard bounds, declared admissible tuples and declared reported scales; they are not instantiated as hard bounds by the experiment's $1\sigma$ entries, they establish no $p$-value, confidence level or rejection error rate, and they establish neither the truth of SR nor the uniqueness of its auxiliary assumptions; all conclusions inherit the experiment's apparatus, calibration, finite-sampling, correction, borrowed-rest-frequency and unpublished-covariance qualifications, and the speed used in the numerical evaluation is the report's nominal value without a calibrated speed uncertainty. [F1, F2, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2] ∎
