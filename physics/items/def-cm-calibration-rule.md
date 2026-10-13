---
id: def-cm-calibration-rule
kind: definition
title: "Calibration data and calibration rules"
status: draft
origin: pipeline
domain: mathematics
deps: [def-euclidean-inner-product, def-cm-measurement-model, def-random-element-and-real-random-variable]
dependency_roles:
  def-euclidean-inner-product: mathematical-premise
  def-cm-measurement-model: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "JCGM 200:2012, International Vocabulary of Metrology — Basic and General Concepts and Associated Terms (VIM), definition 2.39 'calibration' and Note 1"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf"
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 4.1.3 and Annex B.2.13–B.2.14"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(\Omega,\mathfrak F,\mathbb P)$ be a probability space and let
$p,d\ge1$ be integers. A **calibration
family** is a family
$$\bigl(h_c\bigr)_{c\in C},\qquad h_c:\Theta\longrightarrow\mathbb R^d,$$
of prediction maps on a nonempty parameter set $\Theta\subseteq\mathbb R^p$,
in fixed numerical coordinates, indexed by a
nonempty set $C$ of **apparatus settings** ([[def-cm-measurement-model]]).

A **calibration datum** for this family consists of

1. a finite family $(\theta^{(r)})_{1\le r\le n}$, $n\ge1$, of **reference inputs**,
   either fixed values $\theta^{(r)}\in\Theta$ or maps
   $\theta^{(r)}:\Omega\to\Theta$, according to the branch specified in clause 4,
   representing values supplied by a reference standard under stated conditions;
2. a set $Y\subseteq(\mathbb R^d)^n$ of admissible **reference observations**
   and the observed vector $y=(y_1,\dots,y_n)\in Y$;
3. a **calibration rule**, that is, a map
   $$\Gamma:D\longrightarrow C,\qquad (y,\theta_{\mathrm{ref}})\longmapsto c,\qquad D\subseteq Y\times\Theta^n;$$
   the nominal reference tuple $\theta_{\mathrm{ref}}=(\theta^{(r)}_{\mathrm{ref}})_{r=1}^n$
   belongs to $\Theta^n$ and $(y,\theta_{\mathrm{ref}})\in D$;
4. either, in the fixed-value branch, a stated bound
   $|\theta^{(r)}-\theta^{(r)}_{\mathrm{ref}}|\le\delta_r$ with $\delta_r\ge0$
   for each $r$, or, in the random-input branch, a Borel random element
   $\eta:\Omega\to(\mathbb R^p)^n$ of deviations with a stated joint law
   ([[def-random-element-and-real-random-variable]]), where
   $\eta_r:\Omega\to\mathbb R^p$ is its $r$th component and
   $\theta^{(r)}(\omega):=\theta^{(r)}_{\mathrm{ref}}+\eta_r(\omega)\in\Theta$
   for every $r$ and every $\omega\in\Omega$.
   The bound uses the Euclidean norm of [[def-euclidean-inner-product]]
   on the fixed coordinates; deviations
   need not themselves belong to $\Theta$.

Given the datum, the **calibrated setting** is $c:=\Gamma(y,\theta_{\mathrm{ref}})$ and the
**calibrated prediction map** is $h_c$.

### Well-definedness and conventions

The rule $\Gamma$ and the sets $C$, $\Theta$, $Y$ are data: nothing in the
definition requires $\Gamma$ to be injective, continuous, measurable, or to
return an apparatus setting for which the calibrated prediction is accurate.
The reference inputs are values of a physical standard; their uncertainty is
recorded in clause 4 and must be carried into any quantitative conclusion
about $h_c$ by the argument that uses it. The definition states the structure
of a calibration only; properties such as consistency, unbiasedness or
attainment of a stated accuracy require separate hypotheses and proofs, and
no such property is asserted here.

Reference inputs are explicit arguments of the rule: a fixed-reference rule
$\Gamma_{\theta_{\mathrm{ref}}}(y)$ is only a slice of $\Gamma$. This
mathematical definition attaches no units to the coordinates. A physical
consumer must specify one unit and, when a norm compares different
coordinates, one positive reference scale per coordinate; subtraction and
addition then operate on numerical coordinates in those fixed units.
