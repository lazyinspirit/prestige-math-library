---
id: op-m2-m5-giant-graviton-index-relation-2026
kind: open-problem
title: M2 M5 Giant Graviton Index Relation 2026
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
aliases: []
physical_scope: "Open conjecture about a specified relation between the M2 ABJM and M5 (2,0) superconformal indices; the checked limits do not establish equivalence of the underlying theories."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Heng-Yu Chen, Nick Dorey, Sanefumi Moriyama, Rishi Mouland, and Canberk Şanlı, An M2/M5 Duality from the Giant Graviton Expansion, arXiv:2601.17114v1"
      url: "https://arxiv.org/pdf/2601.17114v1"
      locator: "Abstract, Introduction, equations (1.4)–(1.5), (2.7), §1.1, §2 (gauge group and level), §3.2 and §4, PDF pp. 1–9 and 14–18: index traces, fugacity map, graviton index, proposed residue relation, exact Higgs-branch check, and combined large-N/Cardy comparison."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Open problem

For rank $\widetilde N\in\mathbb Z_{>0}$, fix the three-dimensional $U(\widetilde N)_{+1}\times U(\widetilde N)_{-1}$ ABJM theory: the subscripts are the two Chern–Simons levels, so $k=1$. Use its cylinder Hilbert space on $S^2$, including the source’s full $U(\widetilde N)$ factors. For dimensionless complex chemical potentials $\widetilde\omega,\widetilde\Delta_A\in\mathbb C$, choose a Poincaré supercharge $\widetilde{\mathcal Q}$ of the three-dimensional ABJM theory, let $\widetilde{\mathcal S}=\widetilde{\mathcal Q}^{\dagger}$, and choose spin and $SO(8)$ Cartan charges $\widetilde J,\widetilde Q_A$ so that
$$\{\widetilde{\mathcal Q},\widetilde{\mathcal S}\}=\widetilde H-\widetilde J-\tfrac12\sum_{A=1}^{4}\widetilde Q_A.$$
Its source-defined index is the Hilbert-space trace
$$\mathcal I_{M2}(\widetilde N;\widetilde\omega;\widetilde\Delta_A)=\operatorname{Tr}_{\mathcal H_{M2,\widetilde N}}\!\left(e^{-\widetilde\beta\{\widetilde{\mathcal Q},\widetilde{\mathcal S}\}}e^{-\widetilde\omega\widetilde J-\sum_{A=1}^{4}\widetilde\Delta_A\widetilde Q_A}\right),$$
with $\widetilde\omega-\sum_A\widetilde\Delta_A=2\pi i$; under this constraint the trace is independent of $\widetilde\beta$ and receives only the $\widetilde{\mathcal Q}$-cohomology contribution. Here $\mathcal H_{M2,\widetilde N}$ is the ABJM cylinder Hilbert space on $S^2$, and the source’s $(-1)^F$ sign is encoded in this fugacity convention rather than written as a separate trace factor. For the six-dimensional $U(N)$ $(2,0)$ index, take dimensionless $\omega_i,\Delta_I\in\mathbb C$, choose $\mathcal S=\mathcal Q^\dagger$ with $\{\mathcal Q,\mathcal S\}=H-J_1-J_2-J_3-2(Q_1+Q_2)$, and define
$$\mathcal I_{M5}(N;\omega_i;\Delta_I)=\operatorname{Tr}_{\mathcal H_{M5,N}}\!\left(e^{-\beta\{\mathcal Q,\mathcal S\}}e^{-\sum_{i=1}^{3}\omega_iJ_i-\sum_{I=1}^{2}\Delta_IQ_I}\right),$$
where $N\in\mathbb Z_{>0}$, $\mathcal H_{M5,N}$ is the cylinder Hilbert space on $S^5$, $J_i$ are the three $SO(6)$ spin Cartan charges, $Q_I$ the two $SO(5)$ R-symmetry Cartan charges, and $\Delta_1+\Delta_2-\omega_1-\omega_2-\omega_3=2\pi i$ makes this trace independent of $\beta$.

For the grand-canonical series, set the rank-zero coefficient $\mathcal I_{M2}(0)=1$ (the empty theory). The source grand-canonical generating function is $\Xi_{M2}(\mu;\widetilde\omega;\widetilde\Delta_A)=\sum_{\widetilde N\ge0}\Lambda^{\widetilde N}\mathcal I_{M2}(\widetilde N;\widetilde\omega;\widetilde\Delta_A)$ with fugacity $\Lambda=e^\mu$. Set $q=e^{-\widetilde\omega}$ and $u_A=e^{-\widetilde\Delta_A}$. The $N$-independent BPS-graviton index in $AdS_4\times S^7$ is
$$\mathcal I_\infty(\widetilde\omega;\widetilde\Delta_A)=\operatorname{Pexp}\!\left[\frac{\prod_{A=1}^{4}(1-q/u_A)}{(1-q)^2\prod_{A=1}^{4}(1-u_A)}-\frac{1-q+q^2}{(1-q)^2}\right],\qquad \operatorname{Pexp}f:=\exp\!\left(\sum_{m=1}^{\infty}\frac{f(q^m,u_1^m,\ldots,u_4^m)}{m}\right).$$
Here $\operatorname{Res}_{\Lambda=\Lambda_0}F$ denotes the complex residue of the meromorphic function $F(\Lambda)$, namely the coefficient of $(\Lambda-\Lambda_0)^{-1}$ in its Laurent expansion; it is a residue in $\Lambda$, not in $\mu$. The proposed relation is
$$\mathcal I_{M5}(N;\omega_i;\Delta_I)=-\frac{e^{\Delta_2N}}{\mathcal I_\infty(\Delta_1;\omega_1,\omega_2,\omega_3,-\Delta_2)}\underset{\Lambda=e^{-\Delta_2N}}{\operatorname{Res}}\Xi_{M2}(\mu;\Delta_1;\omega_1,\omega_2,\omega_3,-\Delta_2),\qquad \Lambda=e^\mu.$$

This formula uses $\widetilde\omega=\Delta_1$ and $(\widetilde\Delta_1,\widetilde\Delta_2,\widetilde\Delta_3,\widetilde\Delta_4)=(\omega_1,\omega_2,\omega_3,-\Delta_2)$, which maps the M2 chemical-potential constraint to the M5 constraint. The source’s giant-graviton expansion proposes a meromorphic continuation of $\Xi_{M2}$ in $\Lambda$ and identifies its poles with brane contributions; the meromorphy and residue extraction used in the displayed relation are part of this conjectural framework, not a theorem about the index series on its full chemical-potential domain. The source first uses the convergent-trace region $\operatorname{Re}(\widetilde\Delta_A)\ge0$, in particular $\operatorname{Re}(\widetilde\Delta_4)=\operatorname{Re}(-\Delta_2)>0$, and analytically continues to $\operatorname{Re}(\Delta_2)>0$ for the M5 trace.

Establish this relation beyond the source’s exact Higgs-branch limit and its first three terms in the combined large-$N$ and six-dimensional Cardy regime. It relates protected indices only; it does not assert equivalence of the complete M2 and M5 quantum field theories.

## Open problem references

[Chen et al., Abstract, Introduction, equations (1.4)–(1.5), (2.7), §1.1, §2, §3.2 and §4](https://arxiv.org/pdf/2601.17114v1)

## Status

The source-status review dated 2026-10-30 confirms that Chen et al. label the residue formula a conjecture. They verify it exactly in the stated Higgs-branch limit and show agreement through the first three orders in a combined large-$N$/Cardy comparison: the M2-side large-$N$ prediction is compared with the M5 Cardy expansion. Later Cardy orders, the full chemical-potential domain, and an operator or theory-level M2/M5 equivalence are not established by those checks. Review is limited to the cited version and sections and makes no exhaustive literature claim.
