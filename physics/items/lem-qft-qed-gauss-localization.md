---
id: lem-qft-qed-gauss-localization
kind: lemma
title: "Gauss law and charged localization obstruction"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - lem-qft-lattice-local-gauss-flux
dependency_roles:
  lem-qft-lattice-local-gauss-flux: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979)"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; relevant Hamiltonian and Gauss-law treatment in §VI.C, printed pp. 694–696. The Rome1 PDF is byte-identical to the previously retrieved full text."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020)"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text arXiv HTML rendition; §§2.1–2.4, printed pp. 3–8. The corresponding complete 32-page PDF was also retrieved and read."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the exact finite-graph model and let $R\subseteq V$. Set $Q_R=\sum_{x\in R}(n_x-b_xI)$ and let $\partial R$ and its orientation signs be as in [[lem-qft-lattice-local-gauss-flux]]. On $\mathcal H_{\rm phys}\cap\bigcap_{e\in\partial R}D(E_e)$, suppose a bounded operator $O$ preserves $\mathcal H_{\rm phys}$ and, for every boundary link $e$, maps $D(E_e)$ into itself and satisfies $E_eO\phi=OE_e\phi$ for every $\phi\in D(E_e)$. Then $[Q_R,O]\psi=0$ for every vector in that physical domain. Consequently, a charge-changing operator with $[Q_R,O]\psi=qO\psi$ for a fixed $q\ne0$ cannot both preserve the physical sector and commute with the boundary electric operators while acting nontrivially on any such physical vector.

There is also the following conditional continuum statement; it does not assert that a continuum representation exists. Let $D$ be a common invariant dense domain in a Hilbert space, and let $\rho(f)$ and $E_k(g_k)$ be linear assignments from real-valued test functions $f,g_k\in C_c^\infty(\mathbb R^3)$ to operators $D\to D$. For a real vector test function $\mathbf g=(g_1,g_2,g_3)\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ set $E(\mathbf g)=\sum_{k=1}^3E_k(g_k)$. Assume the assignments satisfy on $D$
$$\rho(f)=-\varepsilon_0\sum_{k=1}^3E_k(\partial_k f)\quad(f\in C_c^\infty(\mathbb R^3)),$$
for a fixed $\varepsilon_0>0$, and let $K\subset\mathbb R^3$ be compact. Suppose $O$ is bounded, maps $D$ into itself, and satisfies $E(\mathbf g)O\psi=OE(\mathbf g)\psi$ for every $\psi\in D$ whenever $\operatorname{supp}\mathbf g$ is disjoint from $K$. For each integer $R\ge R_0$, choose a real-valued $\chi_R\in C_c^\infty(\mathbb R^3)$ equal to $1$ on a neighborhood of $K$ and with $\operatorname{supp}\nabla\chi_R$ disjoint from $K$, and put $Q_R=\rho(\chi_R)=-\varepsilon_0 E(\nabla\chi_R)$. Assume there is an operator $Q:D\to D$ such that, for every $\psi\in D$, both $Q_R\psi\to Q\psi$ and $Q_RO\psi\to QO\psi$ as integer $R\to\infty$. Then $[Q,O]\psi=0$ on $D$. A bounded charge-changing operator satisfying $[Q,O]\psi=qO\psi$ for $q\ne0$ on $D$ must therefore be the zero operator. These continuum conclusions are conditional on the displayed domain, locality, convergence and commutator-passage assumptions.



## Facts & Assumptions

**Given:** The finite-graph identity in [[lem-qft-lattice-local-gauss-flux]] and, separately for the continuum clause, all conditional operator-distribution, domain, locality and convergence hypotheses stated above.

[F1] [[lem-qft-lattice-local-gauss-flux]]: for the conditional finite-graph model, the region number $N_R=\sum_{x\in R}(n_x-b_xI)$ satisfies $N_R\psi=\sum_{e\in\partial R}\epsilon(e,R)E_e\psi$ for every $\psi\in\mathcal H_{\rm phys}\cap\bigcap_{e\in\partial R}D(E_e)$.

## Proof

**Given:** [F1], the finite-graph hypotheses, and the separate continuum hypotheses in the Statement.

1.1 Write $\mathcal D_R=\mathcal H_{\rm phys}\cap\bigcap_{e\in\partial R}D(E_e)$. The operator $Q_R$ in the Statement is exactly the region number $N_R$ of [F1], so $Q_R\phi=\sum_{e\in\partial R}\epsilon(e,R)E_e\phi$ for every $\phi\in\mathcal D_R$. [F1, given]

1.2 For the continuum clause, $\operatorname{supp}\nabla\chi_R$ is disjoint from $K$, so the assumed locality gives $[E(\nabla\chi_R),O]=0$ on $D$. The smeared Gauss identity therefore yields $Q_RO\psi=OQ_R\psi$ for every $\psi\in D$. [given, construct]

2.1 If $\psi$ is physical and lies in each boundary $E_e$ domain, sector preservation makes $O\psi$ physical, while commutation with each boundary $E_e$ makes $O\psi$ lie in those same domains and gives $$Q_RO\psi=\sum_{e\in\partial R}\epsilon(e,R)E_eO\psi=O\sum_{e\in\partial R}\epsilon(e,R)E_e\psi=OQ_R\psi.$$ Thus $[Q_R,O]\psi=0$. If also $[Q_R,O]\psi=qO\psi$ with $q\ne0$, then $O\psi=0$ for every physical $\psi$ in the stated domain; this is incompatible with a nontrivial charge-changing action there. [F1, step 1.1, algebra]

3.1 For $\psi\in D$, take the stated limits in step 1.2: $QO\psi=\lim_RQ_RO\psi=\lim_ROQ_R\psi=OQ\psi$, where the final equality uses boundedness of $O$ and $Q_R\psi\to Q\psi$. Hence $[Q,O]=0$ on the dense domain. If also $[Q,O]=qO$ with $q\ne0$, then $O\psi=0$ on dense $D$; boundedness extends $O=0$ to the whole Hilbert space. [given, step 1.2, algebra] ∎
