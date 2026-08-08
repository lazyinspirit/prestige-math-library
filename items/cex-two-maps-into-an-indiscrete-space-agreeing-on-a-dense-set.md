---
id: cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set
kind: counterexample
title: "Refuted: the agreement set of two continuous maps is closed, with no hypothesis on the codomain. Two continuous maps $\\mathbb{R} \\to \\{a,b\\}$ into the indiscrete two-point space have agreement set $\\mathbb{Q}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal,
       cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal,
       def-standard-topologies, def-dense-top, def-continuous-map-top,
       thm-continuity-characterisations-top, def-hausdorff-space,
       thm-closure-characterisation-top, lem-rat-embeds-dense, cor-irrationals-uncountable,
       def-countable, lem-real-line-is-a-metric-space, def-metrizable-space, def-interval]
justified_by: []
aliases: []
landmark: true
short: "an agreement set that is dense and not closed"
proof_strategy: constructive
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
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
pipeline_run: null
---

## Statement refuted

**False claim:** for continuous maps $f, g : Z \to Y$ between topological spaces
the agreement set $E(f,g) = \{\, z \in Z : f(z) = g(z) \,\}$ is closed in $Z$,
with no hypothesis on the codomain $Y$.

The witness is the pair of maps of
[[fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal]]: take
$Z = \mathbb{R}$ with its usual topology, $Y_0 = \{a,b\}$ with $a \ne b$ and the
indiscrete topology ([[def-standard-topologies]]), $f \equiv a$, and $g$ equal to
$a$ at every rational and to $b$ at every irrational. Both are continuous, and

$$E(f,g) \;=\; \mathbb{Q}_{\mathbb{R}} ,$$

which is **dense** in $\mathbb{R}$ ([[def-dense-top]]) and is **not** all of
$\mathbb{R}$, hence is not closed.

So the hypothesis dropped is the Hausdorff condition on the codomain, which is
what [[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]]
assumes; and the failure is the worst possible one, the agreement set being dense
rather than merely non-closed.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology; the set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$; the two-point set $Y_0 = \{a,b\}$ with $a \ne b$ and the indiscrete topology; and the maps $f \equiv a$ and $g$ equal to $a$ on $\mathbb{Q}_{\mathbb{R}}$ and to $b$ off it.

[A1] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when for every $x \in U$ there is a real $r > 0$ with $(x - r, x + r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The indiscrete topology on $Y_0$ is $\{\varnothing, Y_0\}$, and the two-point indiscrete space is not Hausdorff ([[def-standard-topologies]], [[def-hausdorff-space]]).

[A3] $A \subseteq \mathbb{R}$ is dense exactly when $U \cap A \ne \varnothing$ for every nonempty open $U$, equivalently when $\overline{A} = \mathbb{R}$ ([[def-dense-top]], forms 1 and 2).

[L1] A function between topological spaces is continuous exactly when the preimage of every open set is open ([[thm-continuity-characterisations-top]], clauses (a) and (b), [[def-continuous-map-top]]).

[L2] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L3] The set of irrationals is uncountable, hence not finite, hence nonempty ([[cor-irrationals-uncountable]], [[def-countable]]).

[L4] A set is closed exactly when it equals its own closure ([[thm-closure-characterisation-top]], claim 2).

[L5] If the codomain is Hausdorff then the agreement set of two continuous maps is closed, and two such maps agreeing on a dense subset are equal ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

## Counterexample

**Proof technique:** constructive.

1.1 Give $Y_0 = \{a,b\}$ the indiscrete topology and take $f, g : \mathbb{R} \to Y_0$ with $f(x) = a$ for every $x$, $g(x) = a$ for $x \in \mathbb{Q}_{\mathbb{R}}$ and $g(x) = b$ otherwise. [A2, construct]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$: given a nonempty open $U$, pick $x \in U$ and by [A1] a real $r > 0$ with $(x - r, x + r) \subseteq U$; by [L2] some rational lies strictly between $x - r$ and $x + r$, hence in $U$. [A1, A3, L2]

1.3 There is a real $t \notin \mathbb{Q}_{\mathbb{R}}$. [L3, choose]

2.1 Both maps are continuous: the only open subsets of $Y_0$ are $\varnothing$ and $Y_0$, whose preimages are $\varnothing$ and $\mathbb{R}$, both open. [step 1.1, A2, L1]

2.2 $E(f,g) = \mathbb{Q}_{\mathbb{R}}$: for $x \in \mathbb{Q}_{\mathbb{R}}$ both maps take the value $a$, and for $x \notin \mathbb{Q}_{\mathbb{R}}$ they take the values $a$ and $b$, which differ. [step 1.1]

3.1 $\overline{E(f,g)} = \mathbb{R}$ by steps 1.2 and 2.2, while $E(f,g) \ne \mathbb{R}$ since $t \notin \mathbb{Q}_{\mathbb{R}}$ by step 1.3; so $E(f,g)$ is not closed by [L4]. [step 1.2, step 1.3, step 2.2, A3, L4]

4.1 Steps 2.1 and 3.1 exhibit two continuous maps whose agreement set is not closed, so the claim is false; by [A2] the codomain is not Hausdorff, which is exactly the hypothesis [L5] carries. [step 2.1, step 3.1, A2, L5, discharge-construct] ∎

## Remarks

- **This is the sharp form of the failure recorded by [[fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal]].** That item refutes the equality of two maps agreeing on a dense set; the present one locates the reason, namely that without a separation hypothesis on the codomain the agreement set need not be closed, so a dense agreement set need not be all of the domain. Both failures come from the same pair of maps.

- **Any subset of $\mathbb{R}$ can be an agreement set here.** Replacing $\mathbb{Q}_{\mathbb{R}}$ by an arbitrary $S \subseteq \mathbb{R}$ in the definition of $g$ gives $E(f,g) = S$ by the computation of step 2.2, and $g$ is still continuous by step 2.1. So into a two-point indiscrete codomain the agreement set carries no topological information whatsoever, which is the strongest way the claim can fail.

- **Why a two-point indiscrete codomain is the natural witness.** A space with at most one point is Hausdorff vacuously ([[def-hausdorff-space]]), so a witness needs at least two points; and the indiscrete topology is the coarsest topology on a two-point set, which is what makes *every* map into it continuous and so removes any need to verify continuity. Other non-Hausdorff topologies on two points exist — Sierpinski space is one ([[def-standard-topologies]]) — and would require that verification instead.
