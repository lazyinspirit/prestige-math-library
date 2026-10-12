---
id: def-cm-measurement-model
kind: definition
title: "Measurement models and additive-error observation models"
status: draft
origin: pipeline
domain: mathematics
deps: [def-borel-sigma-algebra, def-ck-euclidean-maps-and-diffeomorphisms, def-measurable-function-between-measurable-spaces, def-probability-measure, def-random-element-and-real-random-variable, def-total-derivative-in-euclidean-space, thm-continuous-preimages-of-borel-sets-are-borel]
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clauses 4.1.1–4.1.4, equation (1), and clauses C.3.4–C.3.5"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "B. N. Taylor and C. E. Kuyatt, Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results, NIST Technical Note 1297 (1994), section 2 and Appendix A"
      url: "https://physics.nist.gov/cuu/pdf/tn1297.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(\Omega,\mathfrak F,\mathbb P)$ be a probability space
([[def-probability-measure]]), and fix integers $m,d\ge1$.

**Measurement model.** A **measurement model** with input dimension $m$ and
output dimension $d$ consists of

1. an open set $U\subseteq\mathbb R^m$, the **input domain**, and a map
   $f:U\to\mathbb R^d$, the **model function**, which is Borel measurable as a
   map of measurable spaces
   $$f:(U,\mathcal B(U))\longrightarrow(\mathbb R^d,\mathcal B(\mathbb R^d))$$
   ([[def-measurable-function-between-measurable-spaces]],
   [[def-borel-sigma-algebra]]);
2. a random element $X:\Omega\to\mathbb R^m$, the **input vector**, whose
   values lie in $U$, that is, $X(\omega)\in U$ for every $\omega\in\Omega$
   ([[def-random-element-and-real-random-variable]], with target
   $(\mathbb R^m,\mathcal B(\mathbb R^m))$);
3. the **output quantity** $Y:=f\circ X:\Omega\to\mathbb R^d$.

A point $\mu\in U$ is a **nominal input** of the model. The model function is
**continuous**, of class $C^k$, or **totally differentiable at $\mu$** when
$f$ has the corresponding property as a map on the open set $U$
([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-total-derivative-in-euclidean-space]]); such a regularity hypothesis
must be stated whenever a derivative of $f$ is used. The *linearization of
$f$ at $\mu$* is the affine map
$$T_\mu(x):=f(\mu)+Df(\mu)(x-\mu)$$
when $Df(\mu)$ exists.

**Additive-error observation model.** Let $\Theta$ be a set, the **parameter
set**; let $Z$ be a set, the **apparatus and preparation settings**; let
$V\subseteq\mathbb R^d$ be an open set with $0\in V$, the **error domain**;
let $h:\Theta\times Z\to\mathbb R^d$ be a map, the **prediction map**; and let
$\varepsilon:\Omega\to\mathbb R^d$ be a random element with
$\varepsilon(\omega)\in V$ for every $\omega$, the **error**. For each
$(\theta,z)\in\Theta\times Z$ the **observation** is the random element
$$Y_{\theta,z}:=h(\theta,z)+\varepsilon:\Omega\longrightarrow\mathbb R^d .$$
Well-definedness: for fixed $\theta$ and $z$ the map
$\tau_{\theta,z}(x):=h(\theta,z)+x$ is a translate of $\mathbb R^d$, hence
continuous, so $\tau_{\theta,z}^{-1}(B)$ is Borel for every Borel
$B\subseteq\mathbb R^d$ ([[thm-continuous-preimages-of-borel-sets-are-borel]]);
therefore
$Y_{\theta,z}^{-1}(B)=\varepsilon^{-1}\bigl(\tau_{\theta,z}^{-1}(B)\bigr)\in\mathfrak F$
by the measurability of $\varepsilon$, so $Y_{\theta,z}$ is a random element
in the sense of [[def-random-element-and-real-random-variable]].

### Conventions, hypotheses and scope

The following are **additional hypotheses** and are not part of either
definition: that the error has mean zero, $E[\varepsilon]=0$; that
$\varepsilon$ is square-integrable, $E|\varepsilon|^2<+\infty$; that the
error is bounded; that a stated probability law for $\varepsilon$ is
specified; or that the input vector is of the additive form
$X=\mu+\varepsilon$ with a deterministic nominal input $\mu$. Any of these
must be stated, with its exact quantifiers, at each use.

When a model function is merely continuous, continuity and
[[thm-continuous-preimages-of-borel-sets-are-borel]] show that its preimages
of Borel sets are Borel, so clause 1 holds automatically for such $f$; the
explicit measurability in clause 1 keeps the definition meaningful for
discontinuous model functions as well, where required.

The model is an input–output relation between random quantities and their
images. It contains no unit assignment, no physical identification of
$\Theta$, $Z$ or $U$ with measured quantities, no sampling protocol and no
distributional assumption beyond the stated probability space. A physical
consumer must supply the units of the coordinates, the preparation and
apparatus protocol, and the empirical status of every distributional or
moment hypothesis that it invokes.
