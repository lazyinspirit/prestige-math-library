---
id: ex-banach-stone-weighted-composition-isometries
kind: example
title: Banach-Stone weighted composition isometries
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-banach-stone", "def-axiom-of-choice", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-is-entire-with-derivative-itself", "lem-sine-positive-and-cosine-decreasing-on-zero-two"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

[L1] For nonempty compact Hausdorff spaces $K,L$, a homeomorphism
$h : L \to K$ and continuous $u : L \to \mathbb K$, where $\mathbb K=\mathbb R$ or $\mathbb C$, with $|u| = 1$, the map
$Tf := u\cdot(f\circ h)$ is a surjective linear isometry
$C(K) \to C(L)$, and every surjective linear isometry arises this way
([[thm-banach-stone]], [[def-axiom-of-choice]]).


[L2] For real $t$, $e^{it}=\cos t+i\sin t$ and $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); the exponential is entire and hence continuous ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L3] For $0<t\le2$, $\sin t\ge t-t^3/6>0$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

## Verification

**Proof technique:** direct.

1.1 $h$ is a homeomorphism with $h^{-1} = h$, since $h(h(t)) = t$, and $u$ is continuous with $|u(t)|=1$ by [L2]; hence by [L1] the map $Tf(t) = u(t)f(h(t))$ is a surjective linear isometry. [L1, L2, algebra]

1.2 $T$ is not unital: $T\mathbf 1 = u$, and $u(t) = e^{it}$ is not the constant function $1$ because at the endpoint $t=1$, [L2] and [L3] give $\operatorname{Im}u(1)=\sin 1\ge5/6>0$. [1.1, L2, L3, algebra]

2.1 $T$ is not multiplicative: $(T\mathbf 1)(T\mathbf 1) = u^2$ while $T(\mathbf 1\cdot\mathbf 1) = u$, and $u^2 \ne u$ because $u(t) = e^{it} \ne 0$ and $u(t) \ne 1$ for some $t$; at $t=1$, equality $u(1)^2=u(1)$ would, by division by the nonzero $u(1)$, force $u(1)=1$, contradicting [step 1.2]. [1.1, 1.2, algebra]

3.1 In the real case $u \equiv -1$ has $|u| = 1$ and $h = h^{-1}$; directly, $\|Tf\|_\infty=\sup_{t\in[0,1]}|f(1-t)|=\|f\|_\infty$ and $T^2=I$, so $T$ is a surjective real-linear isometry. Moreover, $T\mathbf 1 = -1 \ne 1$ and $T(\mathbf 1\cdot\mathbf 1) = -1 \ne (-1)(-1) = 1$, so $T$ is neither unital nor multiplicative. [L1, algebra] ∎

## Remarks

- **The weight is the obstruction.** By [[thm-banach-stone]] the weight is forced to be $u = T\mathbf 1$; an isometry of this form is unital exactly when $u \equiv 1$, and multiplicative exactly when $u \equiv 1$ (or, in the real case, $u \equiv 1$).
- **No star-property is claimed.** These maps are isometries of Banach algebras, not $\ast$-homomorphisms of C\*-algebras; the commutative Gelfand–Naimark theorem concerns the latter.
