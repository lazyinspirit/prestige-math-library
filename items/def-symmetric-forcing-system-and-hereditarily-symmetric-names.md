---
id: def-symmetric-forcing-system-and-hereditarily-symmetric-names
kind: definition
title: Symmetric forcing systems, supports, and hereditarily symmetric names
status: draft
origin: pipeline
deps: [def-forcing-name-automorphism-action, def-permutation-support-system-and-normal-filter]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Definitions 10.13–10.16", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

A **symmetric system** $(P,G,\mathcal F)$ consists of a forcing preorder, a group $G$ of its automorphisms, and a normal filter $\mathcal F$ of subgroups of $G$. Put
$\operatorname{sym}(\dot x)=\{\pi\in G:\pi\dot x=\dot x\}$. A name is symmetric if its stabilizer lies in $\mathcal F$, and **hereditarily symmetric** if it is symmetric and every subname occurring in it is hereditarily symmetric. Write $\mathrm{HS}_{\mathcal F}$ for these names. A subgroup $H$ **supports** $\dot x$ when $H\in\mathcal F$ and $H\subseteq\operatorname{sym}(\dot x)$. In a coordinate presentation with pointwise stabilizers, a finite coordinate set $E$ supports $\dot x$ when $\operatorname{fix}_G(E)\in\mathcal F$ and
$\operatorname{fix}_G(E)\subseteq\operatorname{sym}(\dot x)$.

Normality and $\operatorname{sym}(\pi\dot x)=\pi\operatorname{sym}(\dot x)\pi^{-1}$ give $\pi``\mathrm{HS}=\mathrm{HS}$. If $G_0$ is a ground-model generic filter—distinct from the automorphism group $G$—the **symmetric interpretation** is
$\mathrm{HS}_{\mathcal F}^{G_0}=\{\dot x_{G_0}:\dot x\in\mathrm{HS}_{\mathcal F}\}$. The hereditary clause makes this class transitive after evaluation. No AC is assumed.
