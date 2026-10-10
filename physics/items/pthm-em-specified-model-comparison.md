---
id: pthm-em-specified-model-comparison
kind: physics-theorem
title: "Conditional predictions and qualified experimental comparison"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 20
proof_strategy: direct
deps: [pthm-em-integral-maxwell, pthm-em-wave-energy-average, def-em-fixed-test-geometry, def-em-experiment-record-contract, thm-em-uncertainty-analysis, def-countable-choice]
dependency_roles:
  pthm-em-integral-maxwell: physical-result
  pthm-em-wave-energy-average: physical-result
  def-em-fixed-test-geometry: formulation-prerequisite
  def-em-experiment-record-contract: formulation-prerequisite
  thm-em-uncertainty-analysis: mathematical-premise
  def-countable-choice: mathematical-premise
relations:
  tested_by: [exp-em-induction-report, exp-em-wave-propagation-report, exp-em-inverse-square-report]
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about the smooth branch of the adopted Maxwell equations and about idealised plane-wave intensity: exact framework reference predictions (zero electric flux through an admitted boundary of a charge-free enclosed volume; the exact averaged plane-wave intensity through a plane), and, for any declared comparison family, apparatus-and-calibration dictionary and declared bounds satisfying the stated hypotheses, the deterministic confinement $|\\theta-\\theta_0|\\le(s+\\delta)/m$. Excluded: sampling laws, likelihoods, confidence levels, coverage, $p$-values, rejection error rates, numerical application to the three reports of this page, weak or singular branches of the equations, and any claim that agreement proves or disagreement refutes the framework. Inherits $\\mathrm{AC}_\\omega$ from the cited integral theorem for clause (a)(i)."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (GUM 1995 with minor corrections), Joint Committee for Guides in Metrology, first edition September 2008, 134 PDF pages"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
      locator: "Clause 2.3.1-2.3.6 (standard, Type A/Type B, combined and expanded uncertainty, coverage factor, printed pp. 3-4), clause 3.3.3-3.3.7 (evaluation categories, standard and expanded uncertainty, printed pp. 6-7) and clause 4.1.1 (the measurement model $Y=f(X_1,\\dots,X_N)$, printed pp. 8-9), read in the complete PDF; used as the source of the measurement-model and uncertainty vocabulary that clause (c) keeps separate from the declared bounds"
    - title: "Michael Faraday, Experimental Researches in Electricity, Volume I, First Series (read 24 November 1831), 1849 collected second edition, Project Gutenberg transcription"
      url: "https://www.gutenberg.org/files/14986/14986-h/14986-h.htm"
      locator: "First Series paragraphs 1-33; the report whose record fields supply no calibrated response function, trial-level dataset or sampling law, the fact recorded by clause (c)"
    - title: "Heinrich Hertz, Electric Waves, authorized Jones English translation (Macmillan 1893), Chapter VII, Internet Archive OCR"
      url: "https://archive.org/download/electricwavesbe00hertgoog/electricwavesbe00hertgoog_djvu.txt"
      locator: "Chapter VII printed pp. 107-123; qualitative indicators and order-of-magnitude inferences only, as recorded by clause (c)"
    - title: "Henry Cavendish, The Electrical Researches (ed. J. Clerk Maxwell, Cambridge 1879), Internet Archive OCR"
      url: "https://archive.org/download/electricalresea00cavegoog/electricalresea00cavegoog_djvu.txt"
      locator: "Arts. 217-235 (printed pp. 104-113) and arts. 244-249 (printed pp. 119-121); qualitative nulls with corrupted calibration fractions, as recorded by clause (c)"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$,
[[def-countable-choice]]) exactly as inherited from clause (a) of
[[pthm-em-integral-maxwell]], which is used in clause (a)(i) below with its
piecewise $C^1$ boundary and surface-measure conventions; no other choice
principle is used. Let the laboratory region, its inertial chart, the fields
$E,B$ and the source fields $\rho,J$ be those named in
[[pthm-em-integral-maxwell]], with its constants and units, and let $R$ be a
record of [[def-em-experiment-record-contract]] of dimension $d=1$ (primary
source, apparatus-and-preparation description, recorded data or reported
observations, calibration model, uncertainty record, analysis-assumption list,
interpretation). Write $I_t$ for the laboratory time interval. Let
$I_\theta\subseteq\mathbb R$ be a nonempty open parameter interval,
$\theta_0\in I_\theta$, and $f:I_\theta\to\mathbb R$ a declared comparison map
of class $C^1$ such that $f(\theta_0)=0$ and $f'(\theta)\ge m>0$ for every
$\theta\in I_\theta$. Suppose the record's declared apparatus-and-calibration
dictionary identifies the comparison quantity with the deviation $y=f(\theta)$
of a declared model family from the exact framework reference prediction $y_0$
of clause (a), and declares the recorded deviation $\hat y$ and the bounds
$|\hat y|\le s$ and $|y-\hat y|\le\delta$ with $s,\delta\ge0$.

(a) [Exact framework reference predictions] (i) [Static branch] Assume the
smooth branch of the adopted vacuum Maxwell equations with the regularity
hypotheses of [[pthm-em-integral-maxwell]] (fields jointly $C^1$ on
$\Omega\times I_t$ with the additional derivatives appearing in the displayed
equations existing and continuous there; for instance $E,B$ jointly of class
$C^2$ and $\rho,J$ of class $C^1$). Let $(V,\nu_V)$ be a volume test geometry
of [[def-em-fixed-test-geometry]] and let $t\in I_t$ be such that
$\rho(\cdot,t)$ vanishes identically on $V$. Then clause (a) of
[[pthm-em-integral-maxwell]] gives
$$\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=\frac{1}{\varepsilon_0}\int_V\rho(\cdot,t)\,d\lambda_3=0.$$
On the smooth branch every admitted boundary $\partial V$ whose enclosed volume
$V$ is charge-free has vanishing electric flux; charge-freeness of the surface
alone is insufficient, and the exact framework prediction for the
enclosed-flux observable is the value $y_0=0$.

(ii) [Wave branch] Let $(E,B)$ be the plane-wave solution of
[[pthm-em-wave-energy-average]] with data $(k,\omega,e)$ there, and let
$\langle S\rangle$ be the period average of its Poynting vector. Then that item
gives the signed identity
$$\langle S\rangle\cdot n=\frac{\varepsilon_0c}{2}|e|^2\,(\hat k\cdot n)$$ for
every unit vector $n$; if the declared dictionary fixes the comparison
quantity as the magnitude $|\langle S\rangle\cdot n|$ of the normal
period-averaged flux (a declared intensity convention), then the exact
framework prediction is
$$y_0=\frac{\varepsilon_0c}{2}|e|^2\,|\hat k\cdot n|.$$ The absolute value is
part of that declared magnitude convention and is not a consequence of the
signed identity.

(b) [Conditional confinement] Under the stated identifications, every
parameter value $\theta\in I_\theta$ compatible with the declared model
family, the apparatus-and-calibration dictionary and the two declared bounds
satisfies
$$|\theta-\theta_0|\le\frac{s+\delta}{m}.$$ Equivalently, a proposed $\theta$
violating this bound is incompatible with the conjunction (specified family,
dictionary, calibration bound, recorded bound); the conclusion is a
deterministic statement about the declared bounds.

(c) [Status and qualifications] The conclusion is conditional on the declared
family, dictionary, calibration and recorded bounds and on the declared
monotonicity margin $m$; it is not a sampling law, a likelihood, a confidence
level, a coverage probability, a $p$-value or a probability that any model or
framework is true, and it asserts no rejection error rate. Agreement of a
record with a specified family, like disagreement with it, concerns the
conjunction of that family with the apparatus, calibration and analysis
assumptions; a discrepancy may lie in the family, the dictionary, the
calibration or the analysis, and neither agreement nor disagreement proves or
deductively falsifies the adopted framework. The three primary reports
recorded on this page supply, in their recorded read extents, no calibrated
response transfer function, no trial-level dataset and no declared sampling
law; accordingly this item asserts no numerical bound and performs no
numerical application for any of them, and their own uncertainty records carry
their source limitations. Empirical support and its constraints are nonlogical
relations, not dependencies, and any consumer of this item inherits $s$,
$\delta$, $m$, the declared family, the record's conditions and the source
limitations.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice $\mathrm{AC}_\omega$; the laboratory region, chart, fields, sources, constants and units named in [[pthm-em-integral-maxwell]] with its smooth-branch regularity hypotheses; a volume test geometry $(V,\nu_V)$ of [[def-em-fixed-test-geometry]] and a time $t\in I_t$ with $\rho(\cdot,t)$ vanishing identically on $V$; the plane-wave solution of [[pthm-em-wave-energy-average]] with data $(k,\omega,e)$ and a unit vector $n$; a record $R$ of dimension $d=1$ with the declared apparatus-and-calibration dictionary, comparison map $f$ of class $C^1$ on the nonempty open interval $I_\theta$, centre $\theta_0\in I_\theta$, $f(\theta_0)=0$, $f'\ge m>0$ on $I_\theta$, recorded deviation $\hat y$ and bounds $|\hat y|\le s$, $|y-\hat y|\le\delta$, $s,\delta\ge0$.

[F1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, is the statement that every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] Under $\mathrm{AC}_\omega$, if the smooth branch of the adopted vacuum
Maxwell equations holds pointwise on $\Omega\times I$ for fields jointly $C^1$
with the additional derivatives appearing in the displayed equations existing
and continuous there, then for every volume test geometry $(V,\nu_V)$ and
every $t\in I$ the integral form of the Gauss law reads
$$\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=\frac{1}{\varepsilon_0}\int_V\rho(\cdot,t)\,d\lambda_3$$
([[pthm-em-integral-maxwell]], clause (a) and its regularity hypotheses).

[F3] A volume test geometry in $\Omega$ is a pair $(V,\nu_V)$ with $V\subseteq\Omega$ a nonempty bounded open set, $\overline V\subseteq\Omega$ and a specified finite piecewise $C^1$ boundary presentation with outward unit normal $\nu_V$, and its closed-surface flux is the finite face sum $\oint_{\partial V}F\cdot\nu_V\,dS:=\sum_j\int_{S_j}F\cdot\nu_V\,dS$ ([[def-em-fixed-test-geometry]], clause (a)).

[F4] For the plane-wave solution with data $(k,\omega,e)$ the period average of the Poynting vector is $\langle S\rangle=\frac{\varepsilon_0c}{2}|e|^2\hat k$, so $\langle S\rangle\cdot n=\frac{\varepsilon_0c}{2}|e|^2(\hat k\cdot n)$ for every unit vector $n$ ([[pthm-em-wave-energy-average]], clause (b)).

[F5] A record of [[def-em-experiment-record-contract]] carries a comparison quantity that is a declared map on a declared condition set, with declared units (clause (b)); a calibration model is a tuple $(Z,c,\delta)$ with $Z$ a declared nonempty set of apparatus-output values and $\delta\in[0,\infty)$ a declared calibration-error bound (clause (e)); and the analysis-assumption list contains the declared assumptions used to compare the data with a model (clause (g)).

[F6] Let $n\ge1$, $U\subseteq\mathbb R^n$ open, $\theta_0\in U$ and $u\in\mathbb R^n$ with $\lVert u\rVert_2=1$; let $I\subseteq\mathbb R$ be an open interval with $0\in I$ and $\theta_0+\theta u\in U$ for every $\theta\in I$; let $F:U\to\mathbb R$ be of class $C^1$ with $F(\theta_0)=0$ and $D_uF(\theta_0+\theta u)\ge m>0$ for every $\theta\in I$. If a recorded scalar $\hat y$ satisfies $|\hat y|\le s$, $s\ge0$, and the calibration bound $|y-\hat y|\le\delta$, $\delta\ge0$, holds for $y=F(\theta_0+\theta u)$ at a candidate $\theta\in I$, then $|\theta|\le(s+\delta)/m$ ([[thm-em-uncertainty-analysis]], Statement).

## Proof

1.1 [Static branch] Fix the volume test geometry $(V,\nu_V)$ and the time $t\in I_t$ of the statement, with $\rho(\cdot,t)$ vanishing identically on $V$; under the smooth-branch regularity hypotheses of [F2], clause (a) of [F2] gives $\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=\frac{1}{\varepsilon_0}\int_V\rho(\cdot,t)\,d\lambda_3$, and the integrand $\rho(\cdot,t)$ is the identically zero function on $V$, so its integral is $0$ and the flux vanishes: $\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=0$, the exact framework prediction for the enclosed-flux observable being $y_0=0$; the test-geometry conventions are those of [F3], and $\mathrm{AC}_\omega$ is used here exactly through [F2]. [F1, F2, F3, given, algebra]

1.2 [Wave branch] Let $(E,B)$ be the plane-wave solution with data $(k,\omega,e)$ and let $n$ be a unit vector; clause (b) of [F4] gives the signed identity $\langle S\rangle\cdot n=\frac{\varepsilon_0c}{2}|e|^2(\hat k\cdot n)$, so if the declared dictionary fixes the comparison quantity as the magnitude $|\langle S\rangle\cdot n|$ of the normal period-averaged flux, the exact framework prediction is $y_0=\frac{\varepsilon_0c}{2}|e|^2|\hat k\cdot n|$, the absolute value being the declared magnitude convention and not a consequence of the signed identity. [F4, given, algebra]

1.3 [Displacement interval] Put $J_\theta:=\{\,h\in\mathbb R:\theta_0+h\in I_\theta\,\}$, the translate $I_\theta-\theta_0$ of the nonempty open interval $I_\theta$: $J_\theta$ is a nonempty open interval and contains $0$ because $\theta_0\in I_\theta$, and $f'(\theta_0+h)\ge m>0$ for every $h\in J_\theta$ by the hypothesis $f'\ge m$ on $I_\theta$. [given, algebra]

2.1 [Conditional confinement] Apply [F6] with $n=1$, $U:=I_\theta$, base point $\theta_0$, unit direction $u:=1\in\mathbb R^1$ (so $\lVert u\rVert_2=1$), interval $I:=J_\theta$ and $F:=f$: $U=I_\theta$ is open and contains $\theta_0$; for every $h\in J_\theta$ one has $\gamma(h)=\theta_0+h\cdot1=\theta_0+h\in I_\theta=U$ by the definition of $J_\theta$; $f$ is of class $C^1$ on $U$ with $f(\theta_0)=0$; and the directional derivative of $f$ along $u=1$ is the ordinary derivative, $D_1f(\theta_0+h)=f'(\theta_0+h)\ge m>0$, because in $\mathbb R^1$ the difference quotient defining $D_1f$ is the ordinary difference quotient. Hence, for every candidate $h\in J_\theta$ for which the record declares $y=f(\theta_0+h)$ with $|\hat y|\le s$ and $|y-\hat y|\le\delta$, [F6] yields $|h|\le(s+\delta)/m$; writing $\theta:=\theta_0+h\in I_\theta$ for the candidate parameter value of the record's declared dictionary, this is exactly $|\theta-\theta_0|\le(s+\delta)/m$, which is clause (b). [F5, F6, step 1.3, given, algebra]

3.1 [Status] Clause (c) records the scope of steps 1.1-2.1: the result is conditional on the declared family, dictionary, calibration and recorded bounds and on the margin $m$; it is not a sampling law, likelihood, confidence level, coverage probability or $p$-value, and asserts no rejection error rate; the record vocabulary of [F5] supplies only declared comparison quantities, calibration models and analysis assumptions, so the dictionary identification in step 2.1 is a declaration rather than a consequence of the record structure; a discrepancy may lie in the family, the dictionary, the calibration or the analysis, so neither agreement nor disagreement proves or deductively falsifies the framework; the three primary reports recorded on this page supply no calibrated response transfer function, trial-level dataset or sampling law in their recorded read extents, so no numerical bound and no numerical application is asserted for them; and the empirical support relations are nonlogical. [F5, step 1.1, step 1.2, step 2.1, given] ∎
