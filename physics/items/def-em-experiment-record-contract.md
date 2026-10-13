---
id: def-em-experiment-record-contract
kind: definition
title: "Report-backed operational evidence with uncertainty"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 13
deps: [def-em-lab-geometry, def-em-si-conventions, def-em-fields, def-em-sources, def-em-fixed-test-geometry, def-em-vacuum-energy-flux, thm-continuous-implies-integrable]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-fixed-test-geometry: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  thm-continuous-implies-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Framework-local vocabulary for report-backed operational evidence in classical electromagnetism: comparison quantities built from the fields and sources of the framework at declared events or regions in the SI units of the laboratory frame; apparatus-and-preparation descriptions; finite recorded data or reported qualitative observations with condition annotations; calibration models with a declared error bound; uncertainty records with declared source labels; analysis-assumption lists; and qualified interpretations. The definition asserts no measurement, no apparatus behaviour, no sampling law, no precision, no independence, no coverage, no calibration correctness, no empirical support and no value of any physical constant; it selects no experiment and missing report detail stays missing."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (GUM 1995 with minor corrections), Joint Committee for Guides in Metrology, first edition September 2008, 134 PDF pages"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
      locator: 'Clause 2 (2.1-2.3.6, printed pp. 2-4), Clause 3 (3.1-3.4, printed pp. 4-8) and Clause 4.1 (printed pp. 8-9), read in the complete 134-page PDF: metrological vocabulary, the definition of uncertainty of measurement and its notes (2.2.3), standard, Type A/Type B, combined and expanded uncertainty and coverage factor (2.3.1-2.3.6), the specification of the measurand and the incompleteness caveat (3.1.1-3.1.3), errors, effects and corrections (3.2), the enumerated sources of uncertainty (3.3.2) and the measurement model $Y=f(X_1,\dots,X_N)$ (4.1.1); used for the record vocabulary only, with no numerical evaluation'
    - title: "Michael Faraday, Experimental Researches in Electricity, Volume I, First Series (read 24 November 1831), 1849 collected second edition, Project Gutenberg transcription"
      url: "https://www.gutenberg.org/files/14986/14986-h/14986-h.htm"
      locator: "First Series paragraphs 1-33 (induction experiments); used as the report whose record fields (apparatus, preparation, reported observations, missing calibration and analysis detail) the definition formalises"
    - title: "Heinrich Hertz, Electric Waves, authorized Jones English translation (Macmillan 1893), Chapter VII (Berlin Academy 2 February 1888; Wiedemann's Annalen 34 p. 661), Internet Archive OCR"
      url: "https://archive.org/download/electricwavesbe00hertgoog/electricwavesbe00hertgoog_djvu.txt"
      locator: "Chapter VII printed pp. 107-123; used as the report whose record fields the definition formalises"
    - title: "Henry Cavendish, The Electrical Researches (ed. J. Clerk Maxwell, Cambridge 1879), Internet Archive OCR"
      url: "https://archive.org/download/electricalresea00cavegoog/electricalresea00cavegoog_djvu.txt"
      locator: "Arts. 217-235 (printed pp. 104-113) and arts. 244-249 (printed pp. 119-121); used as the report whose record fields the definition formalises"
---

## Definition

Adopt the laboratory region with its inertial chart and fixed-time reading of
[[def-em-lab-geometry]], the electric and magnetic fields of [[def-em-fields]],
the charge parameter, frame charge and current densities and charge integrals
of [[def-em-sources]], and the SI units and constants of
[[def-em-si-conventions]]. This definition fixes the framework's report-record
vocabulary; it selects no experiment, records no value, evaluates no indicator
and asserts no measurement.

(a) [Primary source] A *primary source* is a declared bibliographic
identification of a report (author, title, date, publication, and the
identification of the passages actually inspected) together with the declared
limits of the reading: which parts of the report were read, which were not, and
any carrier defects (for instance corrupted optical-character-recognition text
of formulae or tables).

(b) [Comparison quantity and measurand] Let $d\ge1$ be an integer. A
*comparison quantity* of dimension $d$ is a declared map from a declared
condition set to $\mathbb R^d$, with declared units, whose components are
finite expressions in specified framework quantities. These may include the
values of $E,B,\rho,J$ at declared events, the charge parameter $q$, and the
declared charge or current integrals of [[def-em-sources]]; declared field
circulations and surface fluxes on the admitted fixed geometries of
[[def-em-fixed-test-geometry]]; and declared finite-time or period averages of
specified derived field quantities, including $u$ and $S$ of
[[def-em-vacuum-energy-flux]]. An integral or average is admitted only with its
domain, orientation where needed, integration convention and actual
well-definedness hypotheses declared. For example, a component $Q(t)$
continuous on a declared compact interval $[a,b]$ inside the laboratory time
domain, with $a<b$, has the finite Riemann average
$(b-a)^{-1}\int_a^b Q(t)\,dt$ by [[thm-continuous-implies-integrable]]; a
period average additionally declares the period and interval. Field fluxes
inherit the regularity, compactness, boundary presentation and measure/choice
conventions of their fixed-test supplier. A declared detector-response
integral may be used only when its declared model and integral suppliers
establish a finite real value. An extended nonnegative integral with value
$+\infty$ is not a component of this real-valued comparison map or a recorded
finite rate. No existence or finiteness of an arbitrary field integral,
distributional product or detector response is asserted. A *measurand* is a
comparison quantity together with a declared condition description under which
it is to be read. All quantities carry the SI conventions of
[[def-em-si-conventions]].

(c) [Apparatus and preparation description] An *apparatus-and-preparation
description* is a declared finite record of the apparatus, the preparation,
the controls and the environment in the report's own terms, with the
identification of the passage of the primary source of (a) from which each
item of the description is taken. The definition asserts only that the
description is declared and finite; it asserts nothing about its correctness
or completeness.

(d) [Recorded data and reported observations] For an integer $d\ge1$, a
*recorded datum* is a vector $z_k\in\mathbb R^{d}$ with declared units
together with a *condition annotation* $a_k$, a declared finite text
identifying the declared run condition of the datum and, when the datum is
taken from a report, its locator in the primary source. A *reported
observation* is a declared finite text recording a qualitative observation of
the report. A *record* is a finite tuple of recorded data and reported
observations together with the declared condition annotations. The record
contains no probability space, random variable, distribution, sampling law,
independence assumption, likelihood or coverage statement.

(e) [Calibration model] A *calibration model* is a tuple $(Z,c,\delta)$ in
which $Z$ is a declared nonempty set of *apparatus-output values*,
$c:Z\to\mathbb R^d$ is a declared *calibration map* and
$\delta\in[0,\infty)$ is a declared *calibration-error bound*: it declares
that for every output $o\in Z$ obtained under the declared conditions, the
value of the comparison quantity of (b) lies in the closed box
$\prod_{j=1}^d[c_j(o)-\delta,\,c_j(o)+\delta]$ in the declared units. A
calibration model is a declaration; the definition asserts no accuracy beyond
the bound $\delta$ and no statistical property of $c$ or $\delta$. A declared
*missing* calibration is recorded as missing, and no value or bound is then
available from this clause.

(f) [Uncertainty record] An *uncertainty record* is a finite tuple of declared
bounds, each carrying a declared *source label* from the finite list
$\{calibration,\ resolution,\ systematic,\ sampling-variability,\ rounding,\ other\}$
and a declared value in the declared units; each entry is a declared
constraint of the form of (e), and the record may state that a bound is
unavailable. No entry is a standard-deviation convention, a coverage
probability, a confidence level, a $p$-value, a posterior or a probability
law.

(g) [Analysis assumptions] An *analysis-assumption list* is a finite tuple of
declared assumptions used to obtain the recorded data or to compare them with
a model (binning, background model, selection rules, corrections, fitting or
estimation procedure, independence or dependence of entries, and the
treatment of the sources of uncertainty); declared omissions are recorded as
omissions and are not filled in by the definition.

(h) [Interpretation] An *interpretation* is a declared statement that
identifies a specified model prediction and declares the result of comparing
the record with it (support, constraint, failure to distinguish, or no
conclusion), conditional on (a)-(g). The interpretation is part of the report
account and not of the data; it asserts no probability, no significance level
and no truth of any framework, and it records a comparison of a specified
model, not of a whole theory.

(i) [Well-definedness and scope] All components of (a)-(h) are finite tuples,
real numbers, declared maps on declared sets and finite text labels; forming
this finite vocabulary uses no choice principle. Evaluating a comparison
quantity inherits every hypothesis and axiom of its actual suppliers,
including countable choice when the selected fixed-test surface or
Lebesgue-measure interface requires it; no measurability, integrability,
completeness or differentiability is inferred merely from the record. A
comparison quantity is evaluated only where the cited items supply its
ingredients and a finite value. Missing source detail stays missing: no
universal sampling law, precision, independence, coverage or calibration
correctness is part of the definition, and none may be inferred from it. The
definition is the framework-local vocabulary for the reports of this page; it
does not assert that any laboratory realises a measurand or that any reported
observation is correct.

## Source notes

The vocabulary above formalises the record fields of the three primary reports
recorded on this page: a declared primary source with its reading limits, an
apparatus-and-preparation description, finite recorded data or reported
qualitative observations with condition annotations, a calibration model that
may be declared missing, an uncertainty record of declared bounds with source
labels, an analysis-assumption list with recorded omissions, and an
interpretation separated from the data. The GUM clauses cited in the frontmatter
supply the metrological vocabulary of measurand, measurement model, error
correction and uncertainty source; the definition keeps every declared bound
distinct from any coverage, confidence or probability statement, and it
performs no numerical evaluation. No measurement, apparatus behaviour, sampling
law, precision or calibration correctness is asserted, and no experiment is
selected.
