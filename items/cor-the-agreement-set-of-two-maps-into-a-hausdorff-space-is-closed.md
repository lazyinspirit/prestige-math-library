---
id: cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed
kind: corollary
title: "For continuous $f, g : Z \\to Y$ with $Y$ Hausdorff the agreement set $\\{ z \\in Z : f(z) = g(z) \\}$ is closed in $Z$"
status: published
origin: session
deps: [thm-hausdorff-iff-the-diagonal-is-closed, lem-the-diagonal-map-is-an-embedding,
       def-the-diagonal-of-a-space, def-hausdorff-space, def-continuous-map-top,
       thm-continuity-characterisations-top, def-standard-topologies]
justified_by: []
aliases: [cor-equaliser-is-closed-top]
landmark: true
short: "the agreement set of two maps into a Hausdorff space is closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $Z$ be a topological space, let $Y$ be a Hausdorff space
([[def-hausdorff-space]]) and let $f, g : Z \to Y$ be continuous
([[def-continuous-map-top]]). Then the **agreement set**

$$E(f,g) \;:=\; \{\, z \in Z : f(z) = g(z) \,\}$$

is closed in $Z$.

No hypothesis is placed on $Z$: the separation hypothesis is on the **codomain**
alone, and it is not decoration. Let $Y_0 = \{a,b\}$ with $a \ne b$ carry the
indiscrete topology ([[def-standard-topologies]]), which is not Hausdorff. Every
function $Z \to Y_0$ is continuous, the only preimages to check being those of
$\varnothing$ and $Y_0$, namely $\varnothing$ and $Z$. So for **any** subset
$S \subseteq Z$ the constant map $f_0 \equiv a$ and the map $g_0$ taking the
value $a$ on $S$ and $b$ off $S$ are continuous with $E(f_0,g_0) = S$, closed or
not.

## Facts & Assumptions

**Given:** Topological spaces $Z$ and $Y$ with $Y$ Hausdorff, continuous maps $f, g : Z \to Y$, and the product $Y \times Y$ with the product topology.

[A1] $E(f,g) = \langle f, g \rangle^{-1}[\Delta_Y]$, where $\langle f, g \rangle : Z \to Y \times Y$ is the pairing and $\Delta_Y$ the diagonal ([[def-the-diagonal-of-a-space]]).

[L1] The pairing $\langle f, g \rangle$ is continuous whenever $f$ and $g$ are ([[lem-the-diagonal-map-is-an-embedding]], claim 1).

[L2] $\Delta_Y$ is closed in $Y \times Y$, since $Y$ is Hausdorff ([[thm-hausdorff-iff-the-diagonal-is-closed]], [[def-hausdorff-space]]).

[L3] A map is continuous if and only if the preimage of every closed set is closed ([[thm-continuity-characterisations-top]], clauses (a) and (c), [[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 $\langle f, g \rangle : Z \to Y \times Y$ is continuous. [L1]

1.2 $\Delta_Y$ is closed in $Y \times Y$. [L2]

2.1 $E(f,g) = \langle f, g \rangle^{-1}[\Delta_Y]$ is the preimage of a closed set under a continuous map, hence closed in $Z$. [step 1.1, step 1.2, A1, L3] ∎

## Remarks

- **Why the diagonal criterion is the right tool here.** The condition "$f(z) = g(z)$" is a condition on the *pair* of values, so it becomes a membership condition once the two maps are packaged into one map into the square; the criterion then converts the separation hypothesis on $Y$ into the closedness of the set that condition names. Nothing is proved twice: the whole content is [[thm-hausdorff-iff-the-diagonal-is-closed]] together with the preimage identity of [[def-the-diagonal-of-a-space]].

- **Both hypotheses are used, and only these.** Continuity of $f$ and $g$ enters only through [L1], and the Hausdorff condition only through [L2]. In particular no countability, compactness or separation hypothesis on $Z$ appears anywhere in the argument.

- **The complement is what the statement is often used for.** $Z \setminus E(f,g)$ is open, so if $f$ and $g$ differ at a point they differ throughout some open neighbourhood of it. Equivalently, $E(f,g)$ contains the closure of every subset of $Z$ on which $f$ and $g$ agree, which is the form in which a statement about a dense set is obtained from this one.
