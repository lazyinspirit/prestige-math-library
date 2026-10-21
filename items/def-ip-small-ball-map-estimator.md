---
id: def-ip-small-ball-map-estimator
kind: definition
title: Small-ball MAP conventions and Cameron–Martin relative modes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-ip-misfit-evidence-and-posterior-law
  - def-ip-prior-on-a-forward-domain
  - def-banach-space
  - def-borel-probability-law-on-a-polish-space
  - def-separable-space
  - thm-finite-and-countable-subadditivity-of-measures
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. Dashti, K. J. H. Law, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§2, Assumption 2.1 and equation (2.1) for the potential conditions and Onsager–Machlup functional; §3, Definition 3.1 for the small-ball MAP convention."
    - title: "H. Kekkonen and Y. Korolev, Inverse Problems, lecture notes"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf"
      locator: "§7.5, the opening MAP discussion and Theorems 7.5.2–7.5.3 for the small-ball and Onsager–Machlup ratio conventions."
axiom_use: "The global strong-mode definition is choice-free; AC is assumed only for the covariance-induced Cameron–Martin notation in the relative-mode branch."
---

## Definition

Let $B$ be a separable Banach space with norm $\|\cdot\|_B$, and let $\Pi$ be a Borel probability measure on $B$. For $z\in B$ and $r>0$, write $\overline B_B(z,r)=\{u\in B:\|u-z\|_B\le r\}$ and $m_r(z)=\Pi(\overline B_B(z,r))$. A **strong small-ball MAP** is a point $z\in B$ for which
$$ \frac{m_r(z)}{\sup_{x\in B}m_r(x)}\longrightarrow1\qquad(r\downarrow0). $$
Assume AC for the covariance-induced Cameron–Martin notation. If $\Pi$ is a posterior law formed by weighting a centered Gaussian prior $\Pi_0$ on $B$, let $C\ell=\int_B\ell(u)u\,\Pi_0(du)$ be its covariance operator and let $E$ be the completion of $B^*/\ker C$ with inner product $\langle[\ell],[m]\rangle_E=m(C\ell)$; the canonical injection $i:E\to B$ extends $[\ell]\mapsto C\ell$. A **Cameron–Martin ratio mode** is a point $ih\in iE$ such that, for every $k\in E$, the denominator is positive for all sufficiently small $r$ and
$$ \lim_{r\downarrow0}\frac{m_r(ih)}{m_r(ik)} $$
exists and is at least $1$. This pairwise comparison over fixed Cameron–Martin centers does not assert the global strong small-ball MAP condition.

For every $r>0$, $\sup_{x\in B}m_r(x)>0$: a countable dense subset gives a countable cover of $B$ by radius-$r$ open balls, each contained in its corresponding closed ball, and countable subadditivity rules out all such closed balls having zero probability.

## Definition references

[[def-ip-misfit-evidence-and-posterior-law|the posterior is the normalized likelihood-potential weighting of a prior]]

[[def-ip-prior-on-a-forward-domain|a Borel prior is concentrated on its declared forward-map domain]]

[[def-banach-gaussian-covariance-operator-and-rkhs|the covariance-dual quotient, Cameron–Martin norm, and canonical injection]]

[[def-separable-space|a separable space has an at most countable dense subset]]

[[thm-finite-and-countable-subadditivity-of-measures|countable subadditivity prevents a probability space from being a countable union of null balls]]

[[def-axiom-of-choice|the Axiom of Choice assumed for the Gaussian covariance/RKHS branch]]

[[def-borel-probability-law-on-a-polish-space|a Borel probability is a probability measure on the Borel sigma-algebra]]

[[def-banach-space|a Banach space is complete in its norm metric]]
