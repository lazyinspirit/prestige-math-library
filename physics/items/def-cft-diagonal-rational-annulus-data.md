---
id: def-cft-diagonal-rational-annulus-data
kind: definition
title: Diagonal rational annulus and Cardy-state conventions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-conformal-boundary-and-defect-data
  - def-cft-ordinary-character
  - def-cft-contragredient-module
  - thm-cft-contragredient-module-well-defined
  - def-cft-intertwining-operator-space
dependency_roles:
  def-cft-conformal-boundary-and-defect-data: mathematical-premise
  def-cft-ordinary-character: mathematical-premise
  def-cft-contragredient-module: mathematical-premise
  thm-cft-contragredient-module-well-defined: mathematical-premise
  def-cft-intertwining-operator-space: mathematical-premise
justified_by: []
domain: mathematics
library: mathematics
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Cardy, Boundary Conformal Field Theory, arXiv:hep-th/0411189v2"
      url: https://arxiv.org/pdf/hep-th/0411189v2
      locator: "§3, PDF pp. 10–13, especially equations (27)–(41)."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a conformal VOA $V$ of CFT type and central charge $c$ whose vacuum module is irreducible, and set $M_0=V$. Here CFT type means $V=\bigoplus_{n\ge0}V_n$, with finite-dimensional $L(0)$-eigenspaces $V_n$ and $V_0=\mathbb C\mathbf1$; it is part of the conformal VOA convention used by the ordinary-module and contragredient suppliers, not a consequence of vacuum irreducibility. Choose a finite label set $I$ with vacuum label $0$ and, for each $i\in I\setminus\{0\}$, a chosen irreducible ordinary module $M_i$. The labels select the finite channels of this annulus datum; they need not exhaust all irreducibles of a module category. The word “rational” in this datum names the finite-channel conventions below, not an assertion that the entire ordinary-module category is semisimple or finite. Such stronger category hypotheses, when needed in a consuming theorem, must be supplied there. For each label choose an involution $i\mapsto i^*$ and a module isomorphism $J_i:M_i^\vee\to M_{i^*}$, where $M_i^\vee=\bigoplus_h(M_i)_h^*$ is the restricted contragredient. The candidate restricted-dual action is defined in [[def-cft-contragredient-module]]; [[thm-cft-contragredient-module-well-defined]] supplies its actual module axioms. Thus the dual label is an actual module isomorphic to the restricted contragredient, not merely a formal label or candidate action. Write $\overline{M_{i^*}}$ for a right-moving copy of $M_{i^*}$ on which the modes are denoted $\bar L_n$; the overline specifies the right-moving action and does not conjugate scalar coefficients.

Let $\chi_i(\tau):=\chi_{M_i}(\tau)$ be the ordinary character of [[def-cft-ordinary-character]], with its parameter $\tau\in\mathbb H$ and nome $q(\tau)=e^{2\pi i\tau}$. Assume these character series converge locally uniformly on $\mathbb H$, so they define analytic functions there; convergence is an input to this definition, not supplied by the formal character definition. Let $S=(S_{ij})_{i,j\in I}$ be a specified matrix in the convention $\chi_i(-1/\tau)=\sum_jS_{ij}\chi_j(\tau)$ wherever this transformation is assumed. The **diagonal closed sector data** are
$$\mathcal H_{\mathrm{cl}}=\bigoplus_{i\in I}M_i\otimes\overline{M_{i^*}}.$$

For each $i$, choose bases $e_{i,h,\alpha}$ of the finite-dimensional weight spaces $(M_i)_h$ and let $e^{i,h,\alpha}\in(M_i)_h^*$ be the dual bases. Use the module isomorphism $J_i$ to define the formal Ishibashi vector in the product weight completion $\prod_h (M_i)_h\otimes\overline{(M_{i^*})_h}$ of its sector by
$$|i\rangle\rangle:=\sum_{h,\alpha}e_{i,h,\alpha}\otimes\overline{J_i(e^{i,h,\alpha})}.$$
The vector is independent of the chosen weight bases. The actual contragredient action has $L_{M_i^\vee}(m)$ equal to the transpose of $L_{M_i}(-m)$, so the canonical coevaluation tensor is annihilated by $L_n\otimes1-1\otimes L_{M_i^\vee}(-n)$; transporting the right factor by $J_i$ proves the Virasoro gluing equations
$$\bigl(L_n\otimes1-1\otimes\bar L_{-n}\bigr)|i\rangle\rangle=0\qquad(n\in\mathbb Z).$$
Its formal bra is normalized by
$$\langle\langle i|q(\tau_c)^{(L_0+\bar L_0-c/12)/2}|j\rangle\rangle=\delta_{ij}\chi_i(\tau_c).$$
Here $\langle\langle i|$ is the algebraic dual under the weight-block evaluation pairings, with distinct sectors orthogonal and the pairing on each displayed basis tensor normalized by $\langle\langle i|e_{i,h,\alpha}\otimes\overline{J_i(e^{i,h,\beta})}\rangle=\delta_{\alpha\beta}$. The overlap then sums $\dim(M_i)_h q^{h-c/24}$ over the weight blocks, which is $\chi_i(\tau_c)$. The completion and pairing are formal weight-block operations; no Hilbert-space norm or infinite-dimensional trace is asserted.

A **diagonal rational annulus datum** additionally specifies $\delta>0$, a width-one cylinder $[0,1]\times(\mathbb R/\delta\mathbb Z)$, boundary labels $a,b\in I$, finite-dimensional multiplicity spaces $U_{ab}^j$ with $n_{ab}^{\,j}=\dim U_{ab}^j\in\mathbb Z_{\geq0}$, and the open state space $\mathcal H_{ab}=\bigoplus_{j\in I}U_{ab}^j\otimes M_j$. Set
$$\tau_o=i\delta/2,\qquad \tau_c=2i/\delta=-1/\tau_o,\qquad q_o=q(\tau_o)=e^{-\pi\delta},\qquad q_c=q(\tau_c)=e^{-4\pi/\delta}.$$
The notation $\chi_i(q_o)$ and $\chi_i(q_c)$ is shorthand for $\chi_i(\tau_o)$ and $\chi_i(\tau_c)$, respectively. The open-channel trace and normalized closed-channel overlap are
$$Z^{\mathrm{open}}_{ab}(q_o)=\sum_{j\in I}n_{ab}^{\,j}\chi_j(\tau_o),\qquad Z^{\mathrm{closed}}_{ab}(q_c)=\sum_{i\in I}\langle a|i\rangle\rangle\,\langle\langle i|b\rangle\rangle\,\chi_i(\tau_c).$$

For a Cardy-state construction, require $S$ to be symmetric and $S_{0i}\ne0$ for every $i$, choose one square root $d_i$ with $d_i^2=S_{0i}$, and set
$$B_b^i=S_{bi}/d_i,\qquad \langle a|i\rangle\rangle=S_{a^*i}/d_i,\qquad |b\rangle=\sum_iB_b^i|i\rangle\rangle,\qquad \langle a|=\sum_i\langle a|i\rangle\rangle\langle\langle i|.$$
The corresponding boundary states are required to satisfy $$(L_n-\bar L_{-n})|b\rangle=0,\qquad \langle a|(L_n-\bar L_{-n})=0\qquad(n\in\mathbb Z),$$
which follows coefficientwise from the Ishibashi gluing equations. The **Cardy annulus condition** is the equality $Z^{\mathrm{open}}_{ab}(q_o)=Z^{\mathrm{closed}}_{ab}(q_c)$ under $\tau_c=-1/\tau_o$. The definitions above specify its two channel expressions; the equality and nonnegative integral multiplicities are separate properties to prove or assume for a particular datum. No arbitrary Virasoro-gluing state is asserted to satisfy this condition, and no existence of a full local boundary CFT follows from it.
## Definition references

[[def-cft-conformal-boundary-and-defect-data]]

[[def-cft-ordinary-character]]

[[def-cft-contragredient-module]]

[[thm-cft-contragredient-module-well-defined]]

[[def-cft-intertwining-operator-space]]

## Remarks

The nome normalization follows Cardy's unit-width strip convention. The selected orientation makes the Cardy open multiplicity with labels $(a,b)$ equal to $\dim\mathcal I\binom{M_a}{M_b\ M_j}$ when the rational fusion-space identification is supplied. The character matrix $S$ is kept distinct from any categorical Hopf-link matrix. Symmetry, nonzero vacuum row, analytic convergence, and the existence of these data are inputs to the Cardy construction; only the separate consuming theorem can prove them from stronger rationality hypotheses.
