---
id: op-toroidal-u-duality
kind: open-problem
title: Toroidal U Duality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - pthm-exact-closed-string-circle-t-duality
  - post-m-theory-type-iia-circle-limit-dictionary
dependency_roles:
  pthm-exact-closed-string-circle-t-duality: physical-result
  post-m-theory-type-iia-circle-limit-dictionary: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The conjectured exact quantum U-duality equivalence of complete type-II/M-theory state spaces across a family of toroidal scalar backgrounds, including their charge lattices and nonperturbative observables. A generic duality element transforms the moduli; only its stabilizer can act at one fixed background. The E7(7)(Z) example is four-dimensional type II on T6 in a specified integral charge-lattice convention."
sources:
  references:
    - title: "C. M. Hull and P. K. Townsend, Unity of Superstring Dualities, arXiv:hep-th/9410167v2"
      url: "https://arxiv.org/pdf/hep-th/9410167v2"
      locator: "§1, PDF p. 2 (global scalar coset SU(8)/Z2); §2, equations (2.9)–(2.11); Abstract, §§3, 5, 7–8: the integral E7(Z) charge-lattice proposal for type II on T6, its S/T subgroups, and evidence from supergravity and protected states."
    - title: "A. Giveon, M. Porrati, and E. Rabinovici, Target Space Duality in String Theory, arXiv:hep-th/9401139v1"
      url: "https://arxiv.org/pdf/hep-th/9401139v1"
      locator: "§2.2, equations (2.2.1)–(2.2.13), PDF pp. 13–15: the free-circle momentum/winding transformation and its one-loop free-spectrum scope; the source makes extension to interacting higher-genus theory conditional."
    - title: "Angel M. Uranga, Introduction to String Theory, full lecture notes"
      url: "https://members.ift.uam-csic.es/auranga/Lect.pdf"
      locator: "§14.3.2, printed pp. 291–293: type-II compactification on T6, the classical E7 sector, its 56-charge representation, and the proposed discrete charge-lattice symmetry."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

Choose a real basis $v_1,\ldots,v_6$ of $\mathbb R^6$ and set $\Gamma:=\sum_{i=1}^6\mathbb Z v_i$ and $T^6:=\mathbb R^6/\Gamma$. Use $\hbar=c=1$ and work in four-dimensional Einstein frame: use a metric $g^{(E)}_{\mu\nu}$ for which the gravitational action has a fixed Einstein--Hilbert coefficient $(2\kappa_4^2)^{-1}\int R[g^{(E)}]\operatorname{vol}_{g^{(E)}}$, with $\kappa_4>0$ of length dimension. Use the Type IIB presentation for the toroidal scalar coordinates. Use $E_{7(7)}(\mathbb R)$ for the connected split real group of type $E_7$ in its faithful real 56-dimensional charge representation. Adopt the source's classical scalar model with maximal compact subgroup $K\cong SU(8)/\{\pm I_8\}$, where $SU(8):=\{A\in\operatorname{Mat}_8(\mathbb C):A^\dagger A=I_8,\det A=1\}$. The compact action on the charge space is the action on $\bigwedge^2\mathbb C^8$ viewed as a real vector space; its kernel is $\{\pm I_8\}$, so $SU(8)$ itself is a double cover of $K$, not the subgroup used for the global coset. Define the classical 70-scalar space by $\mathcal M_{\mathrm{cl}}:=E_{7(7)}(\mathbb R)/K$, the set of right cosets $hK$; a point $m=hK$ represents one constant scalar background, and the classical duality action is $g\cdot(hK):=(gh)K$. In toroidal variables, these 70 real scalars comprise a positive-definite inner product on $\mathbb R^6$ descending to the flat torus metric (21 independent components), 15 internal NS--NS two-form components, the constant ten-dimensional RR axion and dilaton, 15 internal RR two-form components, 15 internal RR four-form potential components (whose five-form field strength obeys the type-IIB self-duality condition), and two scalars dual to the four-dimensional NS--NS and RR two-form fields.

Let $V_{56}$ be the real 56-dimensional electric/magnetic charge representation of $E_{7(7)}(\mathbb R)$, with representation map $\rho_{56}$, and fix a rank-56 integral lattice $\Lambda_{56}\subset V_{56}$ (a free abelian subgroup spanning $V_{56}$ over $\mathbb R$). Define the candidate discrete group
$$G:=\{g\in E_{7(7)}(\mathbb R):\rho_{56}(g)\Lambda_{56}=\Lambda_{56}\},$$
denoted $E_{7(7)}(\mathbb Z)$ for this lattice convention. A Hilbert-space formulation at $m$ must supply a complex Hilbert space $\mathcal H_m$, a unital complex observable *-algebra $\mathcal A_m$ (an associative algebra with conjugate-linear involution $A\mapsto A^*$ satisfying $(AB)^*=B^*A^*$), and a unital *-representation $\pi_m:\mathcal A_m\to\mathcal B(\mathcal H_m)$, where $\mathcal B(\mathcal H_m)$ denotes the bounded linear operators with Hilbert adjoint. Any additional unbounded observables require specified dense domains and intertwining on those domains. An equivalence from $m$ to $g\cdot m$ consists of isomorphisms $U_{g,m}:\mathcal H_m\to\mathcal H_{g\cdot m}$ and a *-isomorphism $V_{g,m}:\mathcal A_m\to\mathcal A_{g\cdot m}$ satisfying
$$U_{g,m}\pi_m(A)U_{g,m}^{-1}=\pi_{g\cdot m}(V_{g,m}(A))\qquad(A\in\mathcal A_m);$$
require $U_{g,m}$ to be unitary in this Hilbert-space formulation. The maps must send each charge label $Q$ to $\rho_{56}(g)Q$ in $\Lambda_{56}$, brane sectors (state sectors labelled by charges under the corresponding p-form gauge potentials), and amplitudes/partition functions. Here nonperturbative observables are observables not determined by the perturbative expansion in the string coupling. An anomaly means a quantum obstruction, if any, to the duality maps forming a strict group action; the exact composition law and its anomaly data are part of the problem.

Construct such complete nonperturbative quantum formulations and establish the equivalences for every $m\in\mathcal M_{\mathrm{cl}}$ and $g\in G$. Include the proposed eleven-dimensional M-theory-on-$T^7$ description of the same four-dimensional scalar family, where $T^7:=\mathbb R^7/\Gamma_7$ and $\Gamma_7:=\sum_{i=1}^7\mathbb Z w_i$ for a real basis $w_1,\ldots,w_7$ of $\mathbb R^7$. This description is part of the conjectured duality web. Use of the separately adopted IIA circle dictionary remains conditional and does not itself establish an exact M/IIA equivalence or construct M-theory. At a fixed background $m$, only the stabilizer $G_m:=\{g\in G:g\cdot m=m\}$ acts within that fixed-background theory; a general $g$ relates different scalar backgrounds.

Classical supergravity symmetry and protected charge/BPS matching do not prove these full equivalences. “U-duality” here means the conjectured exact action combining the relevant S- and T-duality subgroups on the compactified quantum-theory family, with identifying those subgroup embeddings for the chosen charge lattice included in the problem, not merely an automorphism of the low-energy equations. The relation to the M-theory description uses the separately adopted circle dictionary below and remains part of the proposed nonperturbative duality web, not a construction of M-theory or a proved M/IIA equivalence.

## Open problem references

[[pthm-exact-closed-string-circle-t-duality]]

Hull and Townsend use $E_7(\mathbb Z)$ for the subgroup preserving the integral charge lattice; their four-dimensional type-II-on-$T^6$ discussion identifies the 56 charge representation.

[Hull and Townsend, Abstract, §§1–3, 5, 7–8](https://arxiv.org/pdf/hep-th/9410167v2)

[Giveon, Porrati, and Rabinovici, §2.2](https://arxiv.org/pdf/hep-th/9401139v1)

[Uranga, §14.3.2](https://members.ift.uam-csic.es/auranga/Lect.pdf)

## Status

Status reviewed 2026-10-30: the cited treatments distinguish classical continuous supergravity groups, charge-lattice-preserving discrete candidates, and conjectured exact quantum equivalences. The current [[pthm-exact-closed-string-circle-t-duality]] establishes only the flat free-circle oscillator-weight and level-matching calculation in its stated scope; it does not establish full quantum U-duality. [[post-m-theory-type-iia-circle-limit-dictionary]] is an adopted physical-assumption supplier: its string-frame metric ansatz, positive length/coupling domains, and D0/first-KK mass match are conditional on the stated sector identification. It claims neither tower completeness nor exact M/IIA equivalence.

The earlier missing-readiness note is superseded: the retained run's canonical historical-authoring projection authenticates that supplier's original ready Step 1 record, and the present supplier source matches the projection's bound target artifact. There is no newly authored successor readiness row; absence of that new row is not absence of the authenticated historical record. This reconciles authoring provenance only, not independent proof acceptance or a new Step 2 judgment. The full quantum U-duality question remains open, and neither the adopted circle dictionary nor protected classical calculations settle it.
