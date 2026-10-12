---
id: "def-forcing-name-valuation-and-generic-extension"
kind: "definition"
title: "Valuation of names and M[G]"
deps: ["lem-forcing-names-and-name-ranks-are-absolute", "thm-recursion-on-well-founded-setlike-relations"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Definitions 2.5,2.8 pp6–7; Marks Definition 24.2 p97
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

In ZF, for any $G\subseteq P$ and P-name tau define

$$\operatorname{val}_G(\tau)=\{\operatorname{val}_G(\sigma):\exists p\in G\ (\langle\sigma,p\rangle\in\tau)\}.$$

The subname relation is well-founded and setlike, as in [[lem-forcing-names-and-name-ranks-are-absolute]] and its name definition. For a supplied set function on the predecessors, Separation selects those with a coefficient in G and Replacement takes their values. This is a uniquely valued set rule, so [[thm-recursion-on-well-founded-setlike-relations]] gives a unique definable valuation and all its set restrictions. The empty name evaluates to empty. Even G empty is permitted here; then every name evaluates to empty.

For a transitive set ground model M containing P, write

$$M[G]=\{\operatorname{val}_G(\tau):\tau\in M\text{ is a P-name}\}.$$

Separation on M and Replacement make this an external set. If M satisfies ZF, namehood in this display agrees with its internal namehood by [[lem-forcing-names-and-name-ranks-are-absolute]]. The notation asserts neither genericity of G nor that M[G] is a model of ZF. For a definable class ground model the same display is interpreted as a definable class.
