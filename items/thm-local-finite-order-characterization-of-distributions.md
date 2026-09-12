---
id: "thm-local-finite-order-characterization-of-distributions"
kind: "theorem"
title: "Local finite order characterization of distributions"
deps: ["def-distribution", "lem-test-function-lf-topology-universal-property"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A complex-linear functional $u:\mathcal D(\Omega)\to\mathbb C$ is a distribution if and only if, for every compact $K\subseteq\Omega$, there are an integer $m_K\ge0$ and a finite constant $C_K\ge0$ such that
$$|u(\varphi)|\le C_K p_{m_K}(\varphi)\qquad(\varphi\in\mathcal D_K).$$
The quantifiers are $\forall K\,\exists(m_K,C_K)$; no simultaneous selection of witnesses is asserted or needed. The equivalence holds in ZF.

## Facts & Assumptions

[F1] A distribution is a continuous complex-linear functional on the LF test space ([[def-distribution]]).

[F2] The LF universal property tests continuity of linear maps on every fixed-support space, whose topology is the derivative-seminorm topology ([[lem-test-function-lf-topology-universal-property]]).

## Proof

**Given:** a complex-linear functional $u$.

1.1 Suppose $u$ is continuous, and fix $K$. By F2 its restriction is continuous at zero. Thus there are $m\ge0$ and $\varepsilon>0$ such that $p_m(\psi)<\varepsilon$ implies $|u(\psi)|<1$: take the largest order and the smallest positive radius in a finite basic neighborhood contained in the inverse image of the open unit disk. If that intersection has no constraints, the whole space maps into the disk; linearity then makes $u$ zero on this stage, and $m=0,\varepsilon=1$ works. [given, F1, F2]

2.1 For $p_m(\varphi)>0$, apply step 1.1 to $\varepsilon\varphi/(2p_m(\varphi))$ to get $|u(\varphi)|\le(2/\varepsilon)p_m(\varphi)$. If $p_m(\varphi)=0$, every positive real multiple of $\varphi$ satisfies the same strict neighborhood inequality, so $t|u(\varphi)|<1$ for every $t>0$, forcing $u(\varphi)=0$. This proves the estimate for the fixed $K$, and the argument applies to every $K$ without selecting a family of pairs. [step 1.1, algebra]

3.1 Conversely suppose the stated estimates hold. Fix $K$ and one witnessing pair. If $C_K=0$, the restriction is zero. Otherwise, for any $\delta>0$, the neighborhood $p_{m_K}<\delta/C_K$ maps into $|z|<\delta$. Hence every restriction is continuous; F2 implies $u$ is continuous on $\mathcal D(\Omega)$, and F1 makes it a distribution. For empty $K$ the space is zero and $C_K=m_K=0$ suffice. $\square$ [step 2.1, given, F1, F2]
