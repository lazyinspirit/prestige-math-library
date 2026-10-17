---
id: def-csm-phase-space-reference
kind: definition
title: "Classical configuration, cotangent phase and reference measures"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-smooth-manifold
  - thm-topological-manifolds-are-sigma-compact
  - def-tautological-one-form-on-a-cotangent-bundle
  - thm-the-canonical-cotangent-two-form-is-symplectic
  - def-cm-phase-domain-and-standard-symplectic-two-form
  - lem-cm-standard-symplectic-form-is-closed-and-nondegenerate
  - def-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
dependency_roles:
  def-countable-choice: mathematical-premise
  def-smooth-manifold: mathematical-premise
  thm-topological-manifolds-are-sigma-compact: mathematical-premise
  def-tautological-one-form-on-a-cotangent-bundle: mathematical-premise
  thm-the-canonical-cotangent-two-form-is-symplectic: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  def-measure: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted Cambridge lecture notes, Chapters 1–2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete 635-page course text, §4.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Definition

Assume the Axiom of Countable Choice, the exact choice strength required by
[[def-tautological-one-form-on-a-cotangent-bundle]] to construct the smooth
cotangent manifold. Let $d,N\ge1$, let $Q$ be a smooth $d$-manifold, and set
$Q_N:=Q^N$ and $n=dN$ in the convention of [[def-smooth-manifold]]. Its
**configuration space** is $Q_N$. Its **phase space** is the cotangent bundle
$$\Gamma_N:=T^*Q_N,$$
whose points are pairs $(q,p)$ with $p\in T_q^*Q_N$. Let
$\pi_N:T^*Q_N\to Q_N$ be the cotangent-bundle projection. The **tautological
one-form** and **canonical symplectic form** are
$$\lambda_{(q,p)}(\xi):=p(d\pi_N\xi),\qquad \omega_N:=-d\lambda.$$
Thus in an induced cotangent chart $(q^1,\ldots,q^n,p_1,\ldots,p_n)$,
$$\lambda=\sum_{j=1}^n p_j\,dq^j,\qquad \omega_N=\sum_{j=1}^n dq^j\wedge dp_j.$$
The cotangent supplier proves $\omega_N$ closed and nondegenerate under the
same Countable Choice premise. On an open phase chart this is exactly the
standard form of [[def-cm-phase-domain-and-standard-symplectic-two-form]];
[[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]] gives its
closedness, contraction and nondegeneracy coordinate calculations.

The **Liouville density** $d\Lambda_N:=|\omega_N^n|/n!$ is the positive
density associated with the symplectic volume form. In each cotangent chart it
has coordinate density $dq^1\cdots dq^n\,dp_1\cdots dp_n$. Given any finite
constant $c_N>0$, define the **labelled reference measure**
$$m_N:=c_N\Lambda_N$$
on the Borel sigma-algebra of $\Gamma_N$. It is sigma-finite: $Q_N$ is
sigma-compact by [[thm-topological-manifolds-are-sigma-compact]]. Each compact
set in a countable compact exhaustion has a finite subcover by cotangent
charts, so countably many charts cover $\Gamma_N$. Each chart image is a
countable union of bounded coordinate rectangles, each having finite
Euclidean Liouville measure; these rectangles give the required countable
finite-measure cover.
The constant $c_N$ is mathematical normalization data; this definition assigns
no physical unit to it.

For a partition of the particle labels into species classes of sizes
$N_1,\ldots,N_s$, let $G:=S_{N_1}\times\cdots\times S_{N_s}$ act on
$Q_N=Q^N$ by permuting factors within each class and on $T^*Q_N$ by the
cotangent lift. In canonical coordinates each lift permutes corresponding
$q$ and $p$ coordinates, so it preserves $\omega_N$, $\Lambda_N$ and $m_N$.
Let $\Pi_N:\Gamma_N\to\Gamma_N/G$ be
the orbit map, equip the orbit set with the quotient sigma-algebra
$$\mathcal F_{\mathrm{quot}}:=\{B\subseteq\Gamma_N/G:\Pi_N^{-1}(B) \text{ is Borel in }\Gamma_N\},$$
and define the **quotient reference measure** by
$$\bar m_N(B):=\frac{1}{\prod_{a=1}^s N_a!}\,m_N(\Pi_N^{-1}(B)).$$
This is a measure because inverse images preserve complements and countable
disjoint unions and $m_N$ is countably additive. The stated invariance makes
it the normalized quotient pushforward. It is a measurable quotient;
no smooth quotient structure at configurations with stabilizers is asserted.
For one species the factor is $1/N!$.

The quotient factor here is mathematical counting data. A physical postulate
determines when labels are operationally indistinguishable and how the
reference scale is interpreted; neither follows from the cotangent geometry.
