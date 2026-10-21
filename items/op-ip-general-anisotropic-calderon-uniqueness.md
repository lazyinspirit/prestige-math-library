---
id: op-ip-general-anisotropic-calderon-uniqueness
kind: open-problem
title: Smooth anisotropic Calderón uniqueness from one boundary patch
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map
  - def-riemannian-metric-and-riemannian-manifold
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-pullback-riemannian-metric
  - def-riemannian-volume-density
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - def-ip-conductivity-dirichlet-to-neumann-map
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mikko Salo, The Calderón problem on Riemannian manifolds (2012)"
      url: "https://library.slmath.org/books/Book60/files/30salo.pdf"
    - title: "Thierry Daudé, Niky Kamran, and François Nicoleau, A survey of non-uniqueness results for the anisotropic Calderón problem with disjoint data (2018)"
      url: "https://arxiv.org/pdf/1803.00910"
    - title: "OpenAI, Smooth anisotropic uniqueness in the Calderón problem from one boundary patch (2026-09-24 preprint)"
      url: "https://raw.githubusercontent.com/openai/math/main/preprints/Smooth-Anisotropic-Uniqueness-in-the-Calderon-Problem-from-One-Boundary-Patch-September-24-2026/paper.pdf"
---

## Open problem

Assume the Axiom of Choice and Countable Choice, and let $n\ge3$. Let $M$ be a compact connected smooth $n$-manifold with nonempty smooth boundary and no orientability assumption, and let $\Gamma\subsetneq\partial M$ be a nonempty relatively open patch. Use a fixed finite smooth atlas and subordinate smooth partition of unity. Define $H^1(M)$ as the completion of $C^\infty(M)$ under the sum of localized Euclidean $W^{1,2}$ norms. For each integer $k\ge0$, $H^k(M)$ uses the same completion convention with localized $W^{k,2}$ norms. Let $H_0^1(M)$ be the closure of $C_c^\infty(M^\circ)$ in $H^1(M)$. Define $H^{1/2}(\partial M)$ by the same fixed boundary atlas and partition, using localized Euclidean $W^{1/2,2}$ Slobodeckij norms. Let $\operatorname{Tr}:H^1(M)\to H^{1/2}(\partial M)$ be the Sobolev trace, the continuous extension of classical boundary restriction. For a smooth Riemannian metric $g$, write $dV_g=\sqrt{\det(g_{ij})}\,|dx^1\cdots dx^n|$ in coordinates and let $dS_g$ be its induced boundary density; $\langle du,dv\rangle_g$ is the cotangent inner product induced by $g^{-1}$. For $f\in C_c^\infty(\Gamma)$ extended by zero on $\partial M\setminus\Gamma$, let $u_{g,f}\in H^1(M)$ be the unique weak solution with $\operatorname{Tr}u_{g,f}=f$ and

$$\int_M\langle du_{g,f},dv\rangle_g\,dV_g=0\qquad(v\in H_0^1(M)).$$

The zero-boundary kernel is trivial by uniqueness of the positive scalar Dirichlet problem, so the nonresonant elliptic regularity interface applies; for smooth $f$, the solution lies in every integer-order Sobolev space. This is the positive scalar conductivity Dirichlet problem at $\gamma\equiv1$. Define its local zero-frequency energy map, with the same patch for inputs and observations, by

$$\mathcal E_{g,\Gamma}(f,h):=\int_M\langle du_{g,f},du_{g,h}\rangle_g\,dV_g\qquad(f,h\in C_c^\infty(\Gamma)).$$

The displayed energy is the weak scalar DN pairing with the second extension chosen as $u_{g,h}$. If two smooth metrics $g_1,g_2$ on this same manifold satisfy $\mathcal E_{g_1,\Gamma}(f,h)=\mathcal E_{g_2,\Gamma}(f,h)$ for every such pair, must there be a smooth diffeomorphism $\Phi:M\to M$ with $\Phi|_\Gamma=\operatorname{id}$ and $g_2=\Phi^*g_1$, where $(\Phi^*g_1)_p(v,w):=(g_1)_{\Phi(p)}(D\Phi_pv,D\Phi_pw)$?

## Open problem references

[[def-riemannian-metric-and-riemannian-manifold|Riemannian metric and Riemannian manifold]]

[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds|Diffeomorphisms of manifolds]]

[[def-riemannian-volume-density|Riemannian volume density]]

[[def-pullback-riemannian-metric|Pullback of a Riemannian metric]]

[[thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map|Boundary-fixing diffeomorphism invariance of the anisotropic DN map]]

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Fixed-atlas Sobolev and trace spaces]]

[[def-ip-conductivity-dirichlet-to-neumann-map|Scalar conductivity and Schrödinger DN maps]]

[[lem-ip-smooth-manifold-elliptic-nonresonant-regularity|Nonresonant smooth-manifold elliptic regularity]]

[[def-axiom-of-choice|Axiom of Choice]]

[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration|Axiom of Choice implies Countable Choice]]

[Salo, §1, Questions 1.1–1.2, printed pp. 170–171](https://library.slmath.org/books/Book60/files/30salo.pdf)

[Daudé, Kamran, and Nicoleau, §1, Q1 and data distinctions, PDF p. 4; historical open-status discussion, PDF p. 6](https://arxiv.org/pdf/1803.00910)

[OpenAI, Abstract and Theorem 1.1, PDF pp. 1–2; Proposition 2.2, p. 8; Proposition 7.2, p. 38 (focused source-status inspection)](https://raw.githubusercontent.com/openai/math/main/preprints/Smooth-Anisotropic-Uniqueness-in-the-Calderon-Problem-from-One-Boundary-Patch-September-24-2026/paper.pdf)

## Status

Source status reconciled 2026-10-21. Salo's 2012 survey states the general smooth anisotropic Calderón problem in dimensions at least three as an open question (§1, Questions 1.1–1.2, printed pp.170–171). Daudé, Kamran and Nicoleau's 2018 survey distinguishes full, local same-patch, and disjoint data (§1, Q1 and the following list, PDF p.4) and explicitly calls the general nonanalytic problem open for full or local data at the time of that survey (PDF p.6). Those dated survey statements do not determine the status of a later claimed solution. The present question concerns same-patch zero-frequency energy data; disjoint-data counterexamples do not answer it.

The OpenAI manuscript dated 2026-09-24, *Smooth anisotropic uniqueness in the Calderón problem from one boundary patch*, explicitly claims this conclusion in its abstract and Theorem 1.1 (PDF pp.1–2). Its hypotheses include compact connected smooth manifolds of dimension at least three, a nonempty proper relatively open boundary patch, smooth metrics and equality of the density-valued local energy maps; nonorientability and disconnected boundary are permitted. Its stated conclusion fixes the measured patch and gives the smooth pullback equivalence asked for here. The claim is not treated as an established theorem or a logical supplier in this library. This source-status reconciliation has not independently validated the manuscript's full argument, and it does not declare the question definitively open or definitively solved as a matter of current community consensus.

The current primary PDF was checked at its abstract, Theorem 1.1 (PDF pp. 1–2), the cap definition in Proposition 2.2 (p. 8), and Proposition 7.2 (p. 38). Visual inspection of page 38 confirms that Proposition 7.2 prints $M_j^\circ=(M_j^e)^\circ\setminus\overline E$, with a closure bar over $E$. Proposition 2.2 defines the open added cap by $E=\{(z,s):-b(z)<s<0\}$ and its attachment patch by $P_0=\{b>0\}$. Removing $\overline E$ removes the seam $P_0$ as well, so this displayed complement identity does not have the seam defect alleged in the earlier reader report. Plain-text extraction omits the overbar and cannot settle the printed formula. This focused check does not independently validate the manuscript's full argument. Only these passages were checked, not all 43 pages or the complete proof. Earlier owner-reported full-reading and technical-critique records remain historical provenance, not independently verified findings. The item remains a status-qualified question, not a proof-bearing supplier.
