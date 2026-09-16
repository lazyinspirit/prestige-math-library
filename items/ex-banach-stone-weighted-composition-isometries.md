---
id: ex-banach-stone-weighted-composition-isometries
kind: example
title: Banach-Stone weighted composition isometries
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-banach-stone, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Orr Shalit, Advanced Analysis Notes 14: the isometric structure of C(K) — Examples before Theorem 2, HTML lines 38–54"
      url: "https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). On $C([0,1],\mathbb C)$
with the supremum norm define

$$(Tf)(t) := e^{it}\,f(1-t).$$

Then $T$ is a surjective linear isometry of the weighted-composition form
$Tf = u\cdot(f\circ h)$ with $h(t) = 1-t$ and $u(t) = e^{it}$
([[thm-banach-stone]]), and $T$ is **neither unital nor multiplicative**: it is
not the identity in disguise. Over the real scalars, $Tf(t) := -f(1-t)$ is a
surjective linear isometry with weight $u \equiv -1$, also neither unital nor
multiplicative.

## Facts & Assumptions

**Given:** The Axiom of Choice, the homeomorphism $h : [0,1] \to [0,1]$, $h(t) = 1-t$, and the continuous unimodular weight $u(t) = e^{it}$.

[L1] For a homeomorphism $h : L \to K$ and continuous $u : L \to \mathbb C$ with $|u| = 1$, the map $Tf := u\cdot(f\circ h)$ is a surjective linear isometry $C(K) \to C(L)$, and every surjective linear isometry arises this way ([[thm-banach-stone]], [[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 $h$ is a homeomorphism with $h^{-1} = h$, since $h(h(t)) = t$, and $|u(t)| = |e^{it}| = 1$ for all $t$; hence by [L1] the map $Tf(t) = u(t)f(h(t))$ is a surjective linear isometry. [L1, algebra]

1.2 $T$ is not unital: $T\mathbf 1 = u$, and $u(t) = e^{it}$ is not the constant function $1$ (for instance $u(\pi/2) = i \ne 1$). [1.1, algebra]

1.3 $T$ is not multiplicative: $(T\mathbf 1)(T\mathbf 1) = u^2$ while $T(\mathbf 1\cdot\mathbf 1) = u$, and $u^2 \ne u$ because $u(t) = e^{it} \ne 0$ and $u(t) \ne 1$ for some $t$; explicitly at $t = \pi/2$ the two values are $-1$ and $i$. [1.1, algebra]

2.1 In the real case $u \equiv -1$ has $|u| = 1$ and $h = h^{-1}$; the same computations give $T\mathbf 1 = -1 \ne 1$ and $T(\mathbf 1\cdot\mathbf 1) = -1 \ne (-1)(-1) = 1$, so $T$ is neither unital nor multiplicative. [L1, algebra] ∎

## Remarks

- **The weight is the obstruction.** By [[thm-banach-stone]] the weight is forced to be $u = T\mathbf 1$; an isometry of this form is unital exactly when $u \equiv 1$, and multiplicative exactly when $u \equiv 1$ (or, in the real case, $u \equiv 1$).
- **No star-property is claimed.** These maps are isometries of Banach algebras, not $\ast$-homomorphisms of C\*-algebras; the commutative Gelfand–Naimark theorem concerns the latter.
