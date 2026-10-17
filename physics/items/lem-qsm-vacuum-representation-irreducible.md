---
id: lem-qsm-vacuum-representation-irreducible
kind: lemma
title: Faithful irreducible finite-excitation representation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-local-spin-algebras
  - def-qsm-vacuum-spin-representation
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-vacuum-spin-representation: mathematical-premise
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.1, printed pp. 50–53 (finite-excitation spin-chain representation and irreducibility)
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 2 §5, printed pp. 42–44 (commutant and irreducibility criteria)
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Assume Countable Choice, $\Gamma=\mathbb Z^d$ with $d\ge1$, and finite on-site dimension $q\ge1$. Let $\mathcal H_{\mathrm{vac}}$ and $\pi:\mathcal A\to\mathcal B(\mathcal H_{\mathrm{vac}})$ be the finite-excitation representation of [[def-qsm-vacuum-spin-representation]]. Then $\pi$ is faithful and irreducible:
$$\pi(\mathcal A)'=\mathbb C I,\qquad \pi(\mathcal A)''=\mathcal B(\mathcal H_{\mathrm{vac}}).$$

Here irreducible means precisely that the commutant consists only of scalar multiples of the identity. No classification of other representations is claimed.

## Facts & Assumptions

**Given:** Countable Choice; the local spin algebras of [[def-qsm-local-spin-algebras]]; the configuration basis and isometric representation of [[def-qsm-vacuum-spin-representation]].

[A1] Assume $\mathrm{AC}_\omega$, the exact countable-choice principle used to form the norm completion in the preceding definition; no stronger choice principle is used ([[def-countable-choice]]).

[F1] [[def-qsm-vacuum-spin-representation]]: $\mathcal H_{\mathrm{vac}}=\ell^2(S_{\mathrm{fin}})$ has basis $(e_s)$, and every finite local matrix acts on exactly its finite tensor factors in $\pi$.

[F2] [[def-qsm-local-spin-algebras]]: for each site $x$ and labels $a,b\in\{0,\ldots,q-1\}$ after the fixed basis relabeling, the local matrix unit $E_x^{ab}$ maps a configuration with label $b$ at $x$ to the configuration with label $a$ there and leaves every other site unchanged.

## Proof

**Proof technique:** show that an operator commuting with the local algebra is diagonal in the configuration basis, then use local matrix units to equate its diagonal entries.

**Given:** $T\in\pi(\mathcal A)'$, the basis $(e_s)_{s\in S_{\mathrm{fin}}}$, and [F1]–[F2].

1.1 Let $s\ne t$ in $S_{\mathrm{fin}}$. They differ at some site $x$; set $a=s_x$ and $Q:=\pi(E_x^{aa})$. Then $Qe_s=e_s$ and $Qe_t=0$. Since $TQ=QT$, self-adjointness of $Q$ gives
$$\langle Te_s,e_t\rangle=\langle QTe_s,e_t\rangle=\langle Te_s,Qe_t\rangle=0.$$
Thus every off-diagonal coefficient of $Te_s$ vanishes, so completeness of the specified orthonormal basis implies $Te_s=c_s e_s$ for some scalar $c_s$. The representation and completion are under the exact Countable Choice hypothesis A1. [given, A1, F1, F2, construct]

2.1 If two configurations $s,t$ differ at only one site $x$, choose the matrix unit $E_x^{t_xs_x}$. By [F2], $\pi(E_x^{t_xs_x})e_s=e_t$. Commuting this operator through $T$ gives $c_t e_t=T e_t=T\pi(E_x^{t_xs_x})e_s=\pi(E_x^{t_xs_x})T e_s=c_s e_t$, hence $c_t=c_s$. Any $s,t\in S_{\mathrm{fin}}$ differ on a finite set, and changing those finitely many labels one site at a time connects them; therefore all $c_s$ equal a single scalar $c$. [F1, F2, step 1.1, construct]

3.1 Step 2.1 proves every $T$ in the commutant is $cI$, while scalars commute with all operators, so $\pi(\mathcal A)'=\mathbb C I$. The definition of bicommutant then gives $\pi(\mathcal A)''=(\mathbb C I)'=\mathcal B(\mathcal H_{\mathrm{vac}})$. Faithfulness follows from the isometry established in [[def-qsm-vacuum-spin-representation]]. [step 2.1, F1, algebra] ∎
