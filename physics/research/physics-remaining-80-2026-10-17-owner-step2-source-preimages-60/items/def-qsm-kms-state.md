---
id: def-qsm-kms-state
kind: definition
title: Physical-time KMS strip equilibrium condition
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-c-star-algebra
  - def-qsm-infinite-algebraic-state
  - def-qsm-quasilocal-spin-algebra
  - thm-qsm-finite-range-spin-dynamics
dependency_roles:
  def-c-star-algebra: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
dependency_level: 7
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Definition 3.4.4, pp. 74–75
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, pp. 13–14
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Definition

Here a complex C$^*$-algebra is a complex Banach algebra with associative bilinear multiplication, submultiplicative norm, and a conjugate-linear involution satisfying $\|A^*A\|=\|A\|^2$; **unital** means that it has a nonzero identity $I$ ([[def-c-star-algebra]]). A $*$-automorphism is a bijective complex-linear map preserving multiplication and involution. Let $t\mapsto\alpha_t$ be a one-parameter group of such automorphisms, so $\alpha_0$ is the identity and $\alpha_s\alpha_t=\alpha_{s+t}$. It is **strongly continuous** when $t\mapsto\alpha_t(A)$ is norm-continuous for each fixed $A\in\mathcal A$. A **state** is a bounded complex-linear functional $\omega:\mathcal A\to\mathbb C$ with $\omega(I)=1$ and $\omega(A^*A)\ge0$ for every $A\in\mathcal A$; this is the state convention of [[def-qsm-infinite-algebraic-state]].

Fix absolute temperature $T>0$ in kelvins and Boltzmann's constant $k_B>0$ in J K$^{-1}$; the inverse-temperature parameter is $\beta:=(k_BT)^{-1}>0$, measured in J$^{-1}$. Let the reduced Planck constant $\hbar>0$ have units J s. Write $b:=\beta\hbar$, measured in seconds, and

$$S_b:=\{z\in\mathbb C:0\le\operatorname{Im}z\le b\},\qquad S_b^\circ:=\{z\in\mathbb C:0<\operatorname{Im}z<b\}.$$

A state $\omega$ is a **$\beta$-KMS state for $\alpha$ in physical time** when for every $A,B\in\mathcal A$ there is a bounded function $F_{A,B}:S_b\to\mathbb C$ (that is, $\sup_{z\in S_b}|F_{A,B}(z)|<\infty$) that is continuous on $S_b$, complex-differentiable at every point of $S_b^\circ$, and satisfies

$$F_{A,B}(t)=\omega\!\left(A\alpha_t(B)\right),\qquad F_{A,B}(t+ib)=\omega\!\left(\alpha_t(B)A\right)\quad(t\in\mathbb R).$$

For the assigned quantum spin model, $\mathcal A$ is the norm-completed quasi-local algebra of [[def-qsm-quasilocal-spin-algebra]] and $\alpha$ is the thermodynamic dynamics of [[thm-qsm-finite-range-spin-dynamics]], under that theorem's stated hypotheses. The strip width is $\beta\hbar$ in physical seconds; setting $\hbar=1$ is a separate natural-unit convention. This is a mathematical equilibrium criterion for the specified algebra and dynamics. It does not assert that a model describes a material, that a system has dynamically relaxed, or that all stationary states are KMS.

## Remarks

This definition takes the C$^*$-algebra and strongly continuous dynamics as its inputs. Its quantum-spin application is conditional on the exact algebra-completion and dynamics hypotheses in the linked suppliers; it does not prove those hypotheses or upgrade their draft proof status.

