---
id: ex-ip-eit-fno-continuum-vs-finite-element-experiment
kind: example
title: Continuum approximation theorem versus finite-element experiments
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - thm-ip-eit-fno-noise-robust-existence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Theorem 4.8, §5 numerical experiments and Appendix C, printed pp. 31–34 and 37–45; Appendix C starts on printed p. 61."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $\mathcal H=L^2(\partial\Omega\times\partial\Omega)$ and $\mathcal Y=L^2(\Omega)$ for a bounded smooth EIT domain. Given any nonempty finite sample set $S=\{x_1,\ldots,x_N\}\subset\mathcal H$, any $x_*\in\mathcal H\setminus S$, and any $y_*\in\mathcal Y\setminus\{0\}$, there are continuous maps $F_0,F_1:\mathcal H\to\mathcal Y$ that agree at every sample input and differ by $y_*$ at $x_*$. Therefore exact fit on finitely many inputs alone cannot identify an arbitrary continuous inverse map. A continuum FNO approximation theorem concerns the full $L^2$ kernel input and $L^2$ conductivity output on a compact set; a finite-element experiment reports a finite discretization and finite train/test sample. Neither finite-data fit nor a discretized operator matrix supplies the continuum theorem's uniform bound or a statistical generalization guarantee.

## Example references

[[thm-ip-eit-fno-noise-robust-existence|The continuum compact-set existence statement and its precise scope.]]

[de Hoop et al., Theorem 4.8 and §5 numerical experiments](https://arxiv.org/pdf/2511.20361)

## Facts & Assumptions

**Given:** a nonempty finite $S\subset\mathcal H$, a point $x_*\notin S$, and $y_*\ne0$ in $\mathcal Y$.

[F1] The continuum theorem takes inputs in $L^2(\partial\Omega\times\partial\Omega)$ and outputs in $L^2(\Omega)$, and bounds the reconstruction error for every $\gamma\in X_d(R)$ and $\eta\in K_\delta$, where $K_\delta=\{\eta\in K:\|\eta\|_2\le\delta\}$ for compact $K$. Step 1.1 of its proof shows that these inputs form the compact sum $\{\kappa_\gamma:\gamma\in X_d(R)\}+K_\delta$. The theorem asserts no training or finite-sample risk guarantee. ([[thm-ip-eit-fno-noise-robust-existence]])

## Proof

**Given:** the finite sample set $S$, the unsampled point $x_*$ and $y_*\ne0$.

1.1 The finite set $S$ is closed in the Hilbert metric and $d(x_*,S)>0$. Define $\varphi(x)=d(x,S)/d(x_*,S)$, $F_0(x)=0$ and $F_1(x)=\varphi(x)y_*$. Distance to a closed set is 1-Lipschitz, so both maps are continuous. For every $x_i\in S$, $\varphi(x_i)=0$, hence $F_0(x_i)=F_1(x_i)=0$; at $x_*$, $F_1(x_*)-F_0(x_*)=y_*$. [given, construct]

2.1 The construction shows that finite exact sample values do not determine an arbitrary continuous map on the ambient Hilbert input space. The distinction in the Example follows from the domains of the two claims: the continuum theorem quantifies over a compact subset of the full kernel $L^2$ space, whereas a finite-element experiment only evaluates finitely many discretized inputs and outputs. The finite-map construction is not asserted to belong to the generalized-FNO class or to contradict the continuum theorem. [F1, step 1.1, given] ∎
