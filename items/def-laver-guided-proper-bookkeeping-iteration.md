---
id: def-laver-guided-proper-bookkeeping-iteration
kind: definition
title: "Laver-guided proper bookkeeping iteration"
status: draft
origin: pipeline
deps: [def-countable-support-forcing-iteration, def-lc-laver-anticipation-function, thm-lc-laver-function-existence, def-cohen-collapse-and-levy-collapse-forcings, def-countable-model-generic-master-condition-and-proper-poset]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, proof of Theorem 24.11, pp.99-101"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Definition

Let $\kappa$ be supercompact and let $\ell:\kappa\to V_\kappa$ be a Laver
anticipation function. The **Laver-guided proper bookkeeping iteration** is the
countable-support iteration

$$\langle P_\alpha,\dot Q_\alpha:\alpha<\kappa\rangle$$

defined recursively as follows. Start with the trivial $P_0$. Once $P_\alpha$
has been defined, inspect $\ell(\alpha)$. If it is a $P_\alpha$-name and

$$P_\alpha\Vdash\text{“the interpretation of }\ell(\alpha)\text{ is a nonempty proper partial order,”}$$

put $\dot Q_\alpha=\operatorname{Top}(\ell(\alpha))$, where
$\operatorname{Top}$ is the canonical name normalization that leaves a
partial order with a greatest condition unchanged and otherwise adjoins one
new greatest condition. Otherwise put
$\dot Q_\alpha=\check{\mathbf1}$, the canonical name for the one-condition
forcing. Successors use the usual two-step iteration and limits use the
countable-support inverse limit. Thus every iterand is forced proper, including
every fallback, and all coordinate top names required by the iteration
interface are supplied. Adjoining a greatest condition preserves properness
and gives a dense copy of the original order below the new top, so this
normalization changes no generic extension.

The test is internal to the preceding forcing extension: “is a name” is a
syntactic property and the assertion of properness is evaluated by the forcing
relation for $P_\alpha$. No guess that fails either test is used. The construction
therefore never assumes that an arbitrary element of $V_\kappa$ denotes a
forcing.

For each $\omega_1\leq\alpha<\kappa$, the collapse
$\operatorname{Col}(\omega_1,\alpha)$ as computed after stage $\alpha$ is
countably closed and hence proper. The Laver reflection argument in the next
lemma shows that names for these collapses occur at unboundedly many valid
guessing stages; this is a theorem about the defined iteration, not an extra
clause silently built into a malformed guess. The same factor mechanism says
that whenever an embedding is chosen with $j(\ell)(\kappa)=\dot Q$ and
$P_\kappa$ forces $\dot Q$ nonempty and proper, stage $\kappa$ of
$j(P_\kappa)$ is $\operatorname{Top}(\dot Q)$. Hence the image iteration
factors, up to the canonical forcing equivalence, through $\dot Q$ itself; if
$\dot Q$ already has a greatest condition, the stage is literally $\dot Q$.

The recursive construction from the supplied $\kappa$ and $\ell$ is
definition-level data and makes no fresh choice. Existence of $\ell$ retains
the ZFC plus supercompact hypothesis of
[[thm-lc-laver-function-existence]]; no Laver preparation or indestructibility
assumption is part of this definition.
