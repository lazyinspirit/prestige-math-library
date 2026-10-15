---
id: def-qft-finite-bounded-kraus-instrument
kind: definition
domain: mathematics
title: Finite bounded Kraus instrument
status: published
origin: pipeline
dependency_level: 0
deps: [def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-hilbert-space-adjoint, def-operator-norm, def-real-and-complex-inner-product-space, def-space-of-bounded-linear-operators, thm-hilbert-adjoint-properties]
dependency_roles:
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-operator-norm: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. Watrous, The Theory of Quantum Information (Cambridge University Press, 2018; author-hosted pre-publication manuscript), §2.3.1 pp. 100–102 and §2.3.2 pp. 111–113"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "R. B. Griffiths, Notes on Quantum Information Theory, version 30 Jan. 2004, §7 pp. 1–3, equations (7.2)–(7.9)"
      url: "https://www.andrew.cmu.edu/course/33-658/qit7.pdf"
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

## Definition

Assume the Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space with inner product linear in its first argument ([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]). Write $\mathcal B(H)$ for the bounded linear operators on $H$ ([[def-space-of-bounded-linear-operators]]); for $M\in\mathcal B(H)$, $M^*$ is its Hilbert adjoint, characterized by $\langle Mx,y\rangle=\langle x,M^*y\rangle$ ([[def-hilbert-space-adjoint]]).

Under this same $\mathrm{AC}_\omega$ hypothesis, [[thm-hilbert-adjoint-properties]] gives $M^*\in\mathcal B(H)$ and $\|M^*\|=\|M\|$.

A **finite bounded Kraus instrument datum** on $H$ consists of an integer $m\ge1$, integers $q_a\ge0$ for $a=1,\ldots,m$, and bounded operators $M_{a,r}\in\mathcal B(H)$ for $r=1,\ldots,q_a$. It is **normalized** when

$$\sum_{a=1}^{m}\sum_{r=1}^{q_a}M_{a,r}^*M_{a,r}=I_H.$$

Empty inner sums are zero. For each outcome $a$, define its outcome operator and operation by

$$E_a:=\sum_{r=1}^{q_a}M_{a,r}^*M_{a,r},\qquad \mathcal J_a(X):=\sum_{r=1}^{q_a}M_{a,r}XM_{a,r}^*\quad(X\in\mathcal B(H)).$$

These formulas take values in $\mathcal B(H)$: the adjoint theorem above makes each $M_{a,r}^*$ bounded, and $\|M_{a,r}XM_{a,r}^*x\|\le\|M_{a,r}\|\,\|X\|\,\|M_{a,r}^*\|\,\|x\|=\|M_{a,r}\|^2\,\|X\|\,\|x\|$; the sums are finite. This definition specifies only the displayed finite Kraus form; it is not a representation theorem for arbitrary instruments and does not assert that an apparatus realizes these data.
