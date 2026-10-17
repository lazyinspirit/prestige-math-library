---
id: ex-qsm-uniform-onsite-pressure
kind: example
title: Uniform onsite energy and exact pressure
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Fix $d\ge1$, a finite site dimension $q\ge1$, and $c\in\mathbb R$. On $\Gamma=\mathbb Z^d$, the Hilbert space of a finite region $\Lambda$ is the tensor product $\mathcal H_\Lambda=\bigotimes_{x\in\Lambda}\mathbb C^q$, with sites ordered lexicographically, dimension $q^{|\Lambda|}$, and identity $I_\Lambda$. Here $\operatorname{Tr}_\Lambda$ is the ordinary finite-dimensional matrix trace. Define a translation-invariant interaction by $\Phi(\{x\})=cI_{\{x\}}$ for each site $x$, and $\Phi(Z)=0$ for every other finite nonempty support $Z$. Its free-boundary Hamiltonian and partition function are $H_\Lambda=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi(Z)$ and $Z_\Lambda(\beta)=\operatorname{Tr}_\Lambda(e^{-\beta H_\Lambda})$ for $\beta>0$. If $c$ is interpreted as an energy, use units of joules for $c$ and inverse joules for $\beta$.

## Facts & Assumptions

**Given:** The self-contained finite tensor-product Hilbert spaces, interaction, Hamiltonian, and partition-function definitions in this Example section.

[A1] The scalar $c$ is real, $d$ and $q$ are positive integers, and every finite region used below is nonempty.

## Verification

**Proof technique:** direct evaluation of the finite-volume trace.

**Given:** [A1] and the definitions in the Example section.

1.1 At each site, the only possibly nonzero interaction term containing it is its singleton term, and that term has operator norm $|c|$. Every possibly nonzero support is a singleton, so this interaction is translation invariant, has support-size bound $M=1$, range $R=0$, and uniform per-site norm bound $\kappa=|c|$. [given, A1, algebra]

2.1 Each term $cI_{\{x\}}$ embeds into $\mathcal A_\Lambda$ as $cI_\Lambda$. Therefore $H_\Lambda=c|\Lambda|I_\Lambda$, and the dimension formula gives $Z_\Lambda(\beta)=q^{|\Lambda|}e^{-\beta c|\Lambda|}$. Thus $|\Lambda|^{-1}\log Z_\Lambda(\beta)=\log q-\beta c$ for every finite nonempty $\Lambda$; this same value is the limit along every van Hove sequence. For $c=0$ it is $\log q$, and for $q=1$ it is $-\beta c$. [given, A1, step 1.1, algebra] ∎
