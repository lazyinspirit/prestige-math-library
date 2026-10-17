---
id: def-tgr-future-mass-shell-measure
kind: definition
title: Canonical future massive mass-shell measure
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, thm-gr-local-lorentz-tetrad-existence, def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, def-measure, def-measure-space, def-borel-sigma-algebra, def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, thm-continuous-preimages-of-borel-sets-are-borel, thm-borel-sets-are-lebesgue-measurable, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
justified_by: [lem-tgr-mass-shell-measure-tetrad-invariance]
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§II and III.3"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §§2.3.3 and 4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## Definition

Let $(M,g,N_0)$ be a smooth time-oriented Lorentzian four-manifold of signature
$(-,+,+,+)$ [[def-gr-smooth-lorentzian-objects]], let $x\in M$, and let
$M_*>0$ be a rest-energy parameter in joules. The **future massive shell at
$x$** is the Borel subset
$$\mathcal H^+_{M_*,x}:=\{P\in T_xM:g_x(P,P)=-M_*^2,\ P\text{ future-directed}\}.$$
Use any smooth future orthonormal tetrad near $x$, whose existence is
[[thm-gr-local-lorentz-tetrad-existence]]. At $x$ write its basis as
$(e_0,e_1,e_2,e_3)$ and, for $q=(q_1,q_2,q_3)\in\mathbb R^3$ with energy
coordinates in joules, put
$$E(q):=\sqrt{M_*^2+|q|^2},\qquad P_e(q):=E(q)e_0+\sum_{i=1}^3q_i e_i.$$
Let $\lambda_3$ be Euclidean Lebesgue measure on $\mathbb R^3$
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
[[thm-lebesgue-measure-is-a-complete-measure]]). For every Borel set
$A\subseteq\mathcal H^+_{M_*,x}$, with its subspace Borel sigma-algebra
([[def-borel-sigma-algebra]]), define
$$\mu_{M_*,x,e}(A):=\int_{\mathbb R^3}\mathbf1_A(P_e(q))\,\frac{1}{E(q)}\,d\lambda_3(q).$$
In these tetrad coordinates the shell equation is
$-(P^0)^2+|q|^2=-M_*^2$, and the future sheet has $P^0>0$, hence
$P^0=E(q)$. Thus $P_e$ is a bijection onto the shell with continuous inverse
$q_i=g(P,e_i)$, so it is a homeomorphism. Continuous preimages of Borel sets are Borel
([[thm-continuous-preimages-of-borel-sets-are-borel]]), and
$1/E(q)$ is a positive continuous density. The nonnegative Lebesgue integral
over a measurable set is [[def-integral-over-a-measurable-set]]; the
positive-density measure theorem [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]] makes
$\mu_{M_*,x,e}$ a positive Borel measure. Its coordinate expression is
$d^3q/E(q)$ and its units are $\mathrm{J^2}$.

## Remarks

The coordinate integral uses the measure space
$(\mathbb R^3,\mathcal L(\mathbb R^3),\lambda_3)$: by
[[def-measure-space]] and [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
$\mathcal L(\mathbb R^3)$ is the Lebesgue sigma-algebra and $\lambda_3$ is
Lebesgue measure on it. Under the declared $\mathrm{AC}_\omega$ assumption,
$\mathcal B(\mathbb R^3)\subseteq\mathcal L(\mathbb R^3)$ by
[[thm-borel-sets-are-lebesgue-measurable]]. Thus the continuous pullback of
each Borel shell set in the definition is $\lambda_3$-measurable, as required
for the displayed integral.

Theorem [[lem-tgr-mass-shell-measure-tetrad-invariance]] proves that this
measure is independent of the chosen future orthonormal tetrad. We therefore
write it as $\mu_{M_*,x}$, or $d\mu_{M_*}$ when the fiber is understood. The
underlying Lebesgue and tetrad suppliers use $\mathrm{AC}_\omega$ exactly as
declared by [[def-countable-choice]]; no arbitrary-index choice is asserted.
