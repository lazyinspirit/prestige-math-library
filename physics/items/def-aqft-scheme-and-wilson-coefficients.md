---
id: def-aqft-scheme-and-wilson-coefficients
kind: definition
title: Finite renormalization schemes and Wilson coefficient vectors
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-aqft-local-operator-and-dimension
  - def-aqft-operator-basis-quotient
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
  def-aqft-operator-basis-quotient: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Aneesh V. Manohar, Introduction to Effective Field Theories (2018 Les Houches full lecture notes)
      url: https://arxiv.org/pdf/1804.05863
      locator: Chapter 3, §3.2 “Renormalization,” equations (3.6)–(3.11) and scale-dependence discussion; Chapter 5, §5.10 “RG Improved Perturbation Theory,” equations (5.49)–(5.52).
    - title: C. P. Burgess, Introduction to Effective Field Theory (full review)
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §§2.2.1–2.2.2 on the Wilson scale and renormalization; §4.1.3, equations (73)–(79), for physical and MS scheme conventions and running.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Work in four spacetime dimensions and natural units $c=\hbar=1$. Fix an
engineering weight $d\in\mathbb Q$ and take as input a finite-dimensional
complex quotient $V=\mathcal Q_d$ of local operators at that fixed weight, with
an ordered basis of representatives $O_1,\ldots,O_N$ and $N=\dim_{\mathbb C}V\ge1$.
The quotient and its declared relations are supplied data; this definition does
not assert that every relation relevant to an EFT, observable, or infinite
operator tower has been included. Each $O_i$ has the same engineering weight
$d$. For a fixed cutoff $\Lambda>0$ of mass dimension one, a coefficient vector
$C=(C_1,\ldots,C_N)\in\mathbb C^N$ determines the formal coefficient
expression in $V$
$$\sum_{i=1}^N\frac{C_i O_i}{\Lambda^{d-4}}.$$
Each $C_i$ is dimensionless, and each summand has mass dimension four. This is
a formal expression in the supplied quotient, not a constructed action. No
Hermiticity or reality condition is imposed; a real-action condition is
additional conjugation data.

A finite scheme record consists of a nonempty set $B$ of input labels, an open
interval $J\subset(0,\infty)$ of renormalization scales, and supplied
coefficient-coordinate maps
$$\mathcal R_\mu:B\longrightarrow\mathbb C^N\qquad(\mu\in J).$$
The maps encode the chosen subtraction and normalization convention and are
not constructed here. For $b\in B$, the scale-dependent Wilson coefficient
vector is $C_{\mathcal R}(\mu;b):=\mathcal R_\mu(b)$. The scale $\mu$ and
cutoff $\Lambda$ are distinct inputs. Choose a reference scale $\mu_0\in J$
and set
$$t:=\log(\mu/\mu_0),\qquad I:=\{\log(\mu/\mu_0):\mu\in J\};$$
then $t$ is dimensionless and $I$ is an open interval containing $0$.

Use the Euclidean norm $\|C\|_2^2=\sum_{i=1}^N|C_i|^2$ on $\mathbb C^N$.
Define the realification $\rho_N:\mathbb C^N\to\mathbb R^{2N}$ by
$$\rho_N(C_1,\ldots,C_N)=(\operatorname{Re}C_1,\operatorname{Im}C_1,\ldots,\operatorname{Re}C_N,\operatorname{Im}C_N).$$
With the Euclidean norm on $\mathbb R^{2N}$, $\rho_N$ is a real-linear
isometry. A supplied finite-dimensional truncated RG datum for this scheme
is an open set $\Omega\subset I\times\mathbb R^{2N}$ and a supplied
continuous map $\beta:\Omega\to\mathbb R^{2N}$. A truncated RG trajectory is
a continuously differentiable curve $C:I'\to\mathbb C^N$, on an interval
$I'\subset I$ for which $(t,\rho_N(C(t)))\in\Omega$, satisfying
$$\frac{d}{dt}\rho_N(C(t))=\beta(t,\rho_N(C(t))).$$
The components of $\beta$ are the beta functions under this logarithmic-scale
convention. If the supplied flow is complex-linear, with a supplied matrix
function $\Gamma:I'\to\mathbb C^{N\times N}$, its equation can be written
$C'=\Gamma(t)C$, where the real-coordinate vector field is
$\beta(t,\rho_N(C))=\rho_N(\Gamma(t)C)$. In this column-vector convention,
$\Gamma$ is called the anomalous-dimension matrix. A scheme record does not
assert that its coefficient-coordinate maps solve a supplied RG equation; that
relation, the entries of $\beta$, and any matching map are separate inputs.
This definition calculates no QFT beta function and supplies no bound on
omitted perturbative or higher-dimension terms.

## Definition references

[[def-aqft-local-operator-and-dimension]]

[[def-aqft-operator-basis-quotient]]

[Manohar, full EFT lecture notes](https://arxiv.org/pdf/1804.05863)

[Burgess, full EFT review](https://arxiv.org/pdf/hep-th/0701053)

## Remarks

The current batch-16 item carriers define the finite jet operator space and a
quotient by an explicitly specified invariant relation subspace. They are
listed in the current batch-16 page manifest. This definition uses only their
fixed-weight finite complex quotient and basis interface. It does not claim that the relation space captures every physical
integration-by-parts, equation-of-motion, or field-redefinition equivalence.
