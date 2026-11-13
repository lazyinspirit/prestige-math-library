---
id: lem-author-9b7c42e8f103-restricted-root-traces
kind: lemma
title: The relative root deletion set is the restricted-hyperplane union
status: draft
domain: mathematics
origin: pipeline
deps:
  - prop-relative-linear-interface-artin-tits-prerequisites
  - prop-tits-domain-interface-artin-tits-prerequisites
dependency_roles:
  prop-relative-linear-interface-artin-tits-prerequisites: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. Write $H_\alpha=\{f:f(\alpha)=0\}$, $\Phi^J=\{\alpha\in\Phi:E\not\subseteq H_\alpha\}$ and $\mathcal A=\{E\cap H_\alpha:\alpha\in\Phi^J\}$. Every member of $\mathcal A$ is a hyperplane in $E$, and $T\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha=T\setminus\bigcup_{K\in\mathcal A}K$. The analogous equality holds with $T^\circ$ in place of $T$.

## Statement references

[[prop-relative-linear-interface-artin-tits-prerequisites]]

[[prop-tits-domain-interface-artin-tits-prerequisites]]

## Facts & Assumptions

[F1] The Coxeter representation, root hyperplanes and cone are those of [[prop-tits-domain-interface-artin-tits-prerequisites]].

[F2] Nonzero restricted evaluations have hyperplane kernels by [[prop-relative-linear-interface-artin-tits-prerequisites]].

## Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


1.1 The definition of $\Phi^J$ says exactly that evaluation at $\alpha$ is nonzero on $E$. Its kernel there is $E\cap H_\alpha$, which is a hyperplane by [F2]. [F1, F2, given]

2.1 Both $T$ and $T^\circ$ are subsets of $E$. For any such subset $B$, membership in $B\cap H_\alpha$ equals membership in $B\cap(E\cap H_\alpha)$. Taking unions over $\Phi^J$ proves both equalities; repeated traces do not change a union. If $E=\{0\}$, the index set is empty and the same argument applies. [step 1.1, given, algebra] ∎
