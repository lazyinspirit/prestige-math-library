---
id: thm-invariance-for-prefix-complexity
kind: theorem
title: "Invariance theorem for prefix complexity"
status: published
origin: session
deps: [def-prefix-free-machine-and-prefix-complexity, def-universal-and-acceptable-numbering]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §36"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement
An optimal prefix-free machine exists. After fixing one $U$, write $K(x)=K_U(x)$.
## Facts & Assumptions

**Given:** an acceptable enumeration $(M_e)$ of all partial computable description machines.

## Proof

1.1 Dovetail the computations of $M_e$ on all inputs. Whenever a convergence $M_e(p)=x$ first appears, retain it only if $p$ is prefix-comparable with no previously retained input for that same $e$. The retained graph defines a partial computable machine $\widehat M_e$ with prefix-free domain. If $M_e$ already has prefix-free domain, no convergence is discarded, so $\widehat M_e=M_e$. [given, construct]

2.1 Choose a computable prefix-free self-delimiting code $a_e$ (for example $1^e0$) and set $U(a_ep)=\widehat M_e(p)$. The universal simulation supplied by [[def-universal-and-acceptable-numbering]], together with the effective filter in step 1.1, makes $U$ partial computable. [step 1.1, construct]

3.1 Distinct $a_e$ are prefix-free and each $\widehat M_e$ has prefix-free domain, so the domain of $U$ is prefix-free. For every prefix-free machine $M=M_e$, step 1.1 gives $\widehat M_e=M_e$, and therefore $K_U(x)\le K_M(x)+|a_e|$. Thus $U$ is optimal by [[def-prefix-free-machine-and-prefix-complexity]]. [step 1.1, step 2.1] ∎
