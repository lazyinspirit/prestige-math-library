---
id: ex-zorn-poset-of-chains
kind: example
title: "The chains of a poset, ordered by inclusion, form a chain-complete poset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-chain-complete-poset, thm-zorn, def-axiom-of-choice, def-chain, def-upper-bound, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bourbaki-Witt Principle (Menemui Matematik 39(1), 2017)"
      url: "https://persama.org.my/images/Menemui_Matematik/2017/MMv391_8_21.pdf"
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Complete partial order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_partial_order"
pipeline_run: null
---

## Example

Let $(P, \le)$ be any poset and let

$$\mathcal{C} = \{\, C \subseteq P : C \text{ is a chain of } P \,\}$$

be the set of its chains ([[def-chain]]), ordered by inclusion. Then
$\mathcal{C}$ is chain-complete ([[def-chain-complete-poset]]): an inclusion
chain $\mathcal{D} \subseteq \mathcal{C}$ has least upper bound
$\bigcup \mathcal{D}$, which is again a chain of $P$ because any two of its
elements lie in a common member of $\mathcal{D}$. Its bottom element is
$\bot = \sup \emptyset = \emptyset$.

This is the poset that [[thm-zorn]] builds at its step 1.2 and declares
chain-complete at its step 2.1, so what follows is that step worked out in full:
the engine of Zorn's lemma, running on its own.

## Facts & Assumptions

**Given:** A poset $(P, \le)$ and the set $\mathcal{C}$ of chains of $P$, ordered by inclusion; note $\mathcal{C} \subseteq \mathcal{P}(P)$.

[L1] A subset $C \subseteq P$ is a chain when any two of its elements are comparable, and the empty set is a chain ([[def-chain]]).

[L2] Inclusion partially orders $\mathcal P(P)$. For any $\mathcal D\subseteq\mathcal P(P)$, every $C\in\mathcal D$ satisfies $C\subseteq\bigcup\mathcal D$, while any $V$ containing every $C\in\mathcal D$ also contains every element of $\bigcup\mathcal D$; hence $\bigcup\mathcal D$ is the least upper bound of $\mathcal D$ ([[def-partial-order]], [[def-upper-bound]]).

[L3] $u$ is an upper bound of $S$ when $s \le u$ for every $s \in S$, and a least upper bound when in addition $u \le v$ for every upper bound $v$ of $S$ ([[def-upper-bound]]).

[L4] A poset is chain-complete when every chain has a least upper bound, and then $\bot = \sup \emptyset$ is its least element ([[def-chain-complete-poset]]).

[L5] A partial order on a set $X$ is a relation on $X$ that is reflexive, antisymmetric and transitive, each of the three being a condition required of all elements of $X$ ([[def-partial-order]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal{C}$ is a subset of $\mathcal{P}(P)$, and inclusion partially orders $\mathcal{P}(P)$; reflexivity, antisymmetry and transitivity are required of all elements of $\mathcal{P}(P)$, so they hold in particular for all elements of $\mathcal{C}$, and the restriction of inclusion to $\mathcal{C}$ partially orders $\mathcal{C}$. [given, L2, L5]

1.2 Let $\mathcal{D} \subseteq \mathcal{C}$ be a chain for inclusion and put $U = \bigcup \mathcal{D}$. [given, construct]

2.1 $U$ is a chain of $P$: let $x, y \in U$, say $x \in C_1$ and $y \in C_2$ with $C_1, C_2 \in \mathcal{D}$; as $\mathcal{D}$ is a chain for inclusion, $C_1 \subseteq C_2$ or $C_2 \subseteq C_1$, so $x$ and $y$ both lie in whichever of the two is the larger, and that set is a chain of $P$, hence $x$ and $y$ are comparable in $P$. So $U \in \mathcal{C}$, the case $\mathcal{D} = \emptyset$ reading $U = \emptyset \in \mathcal{C}$ with the condition on $x, y$ vacuous. [step 1.2, L1]

2.2 $U$ is an upper bound of $\mathcal{D}$ for inclusion: $C \subseteq \bigcup \mathcal{D} = U$ for every $C \in \mathcal{D}$. [step 1.2, L3]

3.1 $U$ is least among the upper bounds of $\mathcal{D}$ lying in $\mathcal{C}$: such a $V$ is in particular an upper bound of $\mathcal{D}$ in $\mathcal{P}(P)$, where $\bigcup \mathcal{D}$ is least, so $U \subseteq V$. [step 2.2, L2, L3]

4.1 So every inclusion chain $\mathcal{D} \subseteq \mathcal{C}$ has least upper bound $\bigcup \mathcal{D}$ in $\mathcal{C}$, that is $\mathcal{C}$ is chain-complete, with $\bot = \sup \emptyset = \emptyset$. [step 2.1, step 3.1, L4] ∎

## Remarks

- **This is the whole of Zorn's engine.** Given a nonempty $P$ in which every chain has an upper bound and assuming no maximal element exists, every chain $C$ admits a *strict* upper bound; choosing one for each chain at once turns $C \mapsto C \cup \{\text{chosen strict upper bound}\}$ into a progressive map on $\mathcal{C}$, and Bourbaki-Witt applied to the chain-completeness proved here returns a chain equal to its own extension, which is absurd. That is [[thm-zorn]], and the Axiom of Choice is used at exactly one point of it, the simultaneous choice of strict upper bounds, and nowhere in this example.

- **$\mathcal{C}$ is chain-complete but usually not a complete lattice.** An arbitrary union of chains need not be a chain: if $x, y \in P$ are incomparable then $\{x\}$ and $\{y\}$ are chains and $\{x, y\}$ is not, so the family $\{\{x\}, \{y\}\}$ has no supremum given by union. This is exactly the gap between this example and [[ex-powerset-is-chain-complete]], and it is why chain-completeness rather than completeness is the right hypothesis for [[thm-bourbaki-witt]].

- **An immediate consequence, at the price of the Axiom of Choice.** $\mathcal{C}$ is nonempty, since $\emptyset \in \mathcal{C}$, and every chain of $\mathcal{C}$ has an upper bound by the verification above. Assume in addition the Axiom of Choice ([[def-axiom-of-choice]]), which [[thm-zorn]] assumes outright: Zorn's lemma then applies to $\mathcal{C}$ and yields a maximal element, so every poset has a maximal chain. This is the Hausdorff maximal principle, and it costs exactly one application of Zorn, hence the Axiom of Choice. The chain-completeness verified above costs nothing.

- The verification never used any property of $P$ beyond its being a poset. In particular $P$ may be empty, in which case $\mathcal{C} = \{\emptyset\}$ is the one-element poset.
