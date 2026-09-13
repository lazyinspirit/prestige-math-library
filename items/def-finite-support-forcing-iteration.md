---
id: def-finite-support-forcing-iteration
kind: definition
title: Finite-support forcing iterations
status: published
origin: pipeline
deps: [def-two-step-forcing-iteration, thm-transfinite-recursion]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Definition 6.11 and Exercise 6.12", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

An ordinal-length **finite-support iteration** is defined recursively from
set-indexed data $\langle P_\alpha,\dot Q_\alpha,\dot 1_\alpha:\alpha<\delta\rangle$.
The order $P_0$ is trivial. At each stage let $R_\alpha$ be the set-sized
second-name carrier of [[def-two-step-forcing-iteration]] for the
$P_\alpha$-name $\dot Q_\alpha$, and supply a distinguished
$\dot 1_\alpha\in R_\alpha$ such that
$1_{P_\alpha}\Vdash\dot 1_\alpha$ is a largest condition of the nonempty
preorder $\dot Q_\alpha$. Present $P_{\alpha+1}$ as the functions $p$ on
$\alpha+1$ such that $p\restriction\alpha\in P_\alpha$ and
$p(\alpha)\in R_\alpha$ is forced by $p\restriction\alpha$ to lie in
$\dot Q_\alpha$. The map
$p\mapsto(p\restriction\alpha,p(\alpha))$ is the stipulated identification
with $P_\alpha*\dot Q_\alpha$, and the all-top function is its largest
condition. At a limit $\gamma$, a condition is a coherent function $p$ on
$\gamma$ with each
$p(\alpha)\in R_\alpha$ and
$p\restriction\alpha\Vdash p(\alpha)\in\dot Q_\alpha$, whose support

$$\operatorname{supp}(p)=\{\alpha<\gamma:p\restriction\alpha\not\Vdash p(\alpha)=\dot 1_\alpha\}$$

is finite. The order is coordinatewise in the forcing sense:
$p\le q$ iff for every $\alpha<\gamma$,
$p\restriction\alpha\Vdash p(\alpha)\le q(\alpha)$. The supplied top
names fill all coordinates outside the finite support. The limit carrier
is a definable subset of the set of functions selecting from the set-indexed
carriers $R_\alpha$; its all-top condition exists by Replacement, without
Choice. From the weaker premise that each iterand merely *has* a forced
largest condition, selecting these names uniformly is an additional
operation and is not asserted here in ZF.
