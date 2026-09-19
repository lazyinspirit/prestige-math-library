---
id: thm-banach-stone
kind: theorem
title: Banach-Stone
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-extreme-points-of-the-dual-ball-of-c-of-k, lem-characters-of-continuous-functions-are-evaluations, def-transpose-of-a-bounded-operator, lem-transpose-is-bounded-and-has-the-same-norm, lem-transpose-reverses-composition, lem-evaluation-map-of-separating-family-is-an-embedding, thm-urysohn-lemma, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Orr Shalit, Advanced Analysis Notes 14: the isometric structure of C(K) — Theorem 2 and Exercises B–C, HTML lines 38–54; the adjoint and extreme-point inputs are supplied locally"
      url: "https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathbb K$ be
$\mathbb R$ or $\mathbb C$, let $K$ and $L$ be nonempty compact Hausdorff
spaces, and let $T : C(K,\mathbb K) \to C(L,\mathbb K)$ be a surjective linear
isometry, where both spaces carry the supremum norm. Then there are a
homeomorphism $h : L \to K$ and a continuous function $u : L \to \mathbb K$
with $|u(y)| = 1$ for all $y$, such that

$$Tf(y) \;=\; u(y)\,f(h(y)) \qquad (f \in C(K,\mathbb K),\ y \in L).$$

Conversely, for every homeomorphism $h : L \to K$ and every continuous
$u : L \to \mathbb K$ with $|u| = 1$, the formula $Tf := u\cdot(f \circ h)$
defines a surjective linear isometry $C(K) \to C(L)$. The representation is by
a pair $(h,u)$ that is unique: $h$ is determined by $T$ and $u = T(1)$. The
conclusion does **not** say that a general linear isometry is multiplicative or
unital.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, nonempty compact Hausdorff spaces $K,L$, and a surjective linear isometry $T : C(K) \to C(L)$ over $\mathbb K \in \{\mathbb R,\mathbb C\}$.

[L1] The extreme points of the dual unit ball of $C(K)$ are exactly the normalized evaluations: $\operatorname{ext}B_{C(K)^*} = \{c\,\delta_x : x \in K,\ |c|=1\}$ ([[lem-extreme-points-of-the-dual-ball-of-c-of-k]], [[def-axiom-of-choice]]).

[L2] The transpose $T^* : C(L)^* \to C(K)^*$ is bounded linear with $(T^*g)(f) = g(Tf)$, $\|T^*\| = \|T\|$, and $(ST)^* = T^*S^*$; consequently for a bijective isometry $T$ one has $(T^*)^{-1} = (T^{-1})^*$ ([[def-transpose-of-a-bounded-operator]], [[lem-transpose-is-bounded-and-has-the-same-norm]], [[lem-transpose-reverses-composition]]).

[L3] A surjective linear isometry maps the unit ball onto the unit ball and preserves extreme points: if $e$ is extreme and $Ve = (1-t)y + tz$ with $y,z$ in the target unit ball, applying $V^{-1}$ writes $e$ as the corresponding convex combination of $V^{-1}y$ and $V^{-1}z$.

[L4] For a nonempty compact Hausdorff space $M$, the evaluation map $M \to \Delta(C(M))$ is a homeomorphism, and the family $C(M)$ separates points from closed sets, so the evaluation map into the product over $C(M,[0,1])$ is an embedding ([[lem-characters-of-continuous-functions-are-evaluations]], [[lem-evaluation-map-of-separating-family-is-an-embedding]]).

[L5] Under Dependent Choice — which follows from the Axiom of Choice — the Urysohn lemma holds in normal spaces, so in a compact Hausdorff space two distinct points are separated by a continuous function into $[0,1]$ ([[thm-urysohn-lemma]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 $T^{-1}$ is linear and isometric, because $\|T^{-1}g\| = \|T(T^{-1}g)\| = \|g\|$ for all $g$; hence by [L2] the transpose $T^*$ is a bounded linear bijection with $(T^*)^{-1} = (T^{-1})^*$, and $\|T^*\| = \|(T^*)^{-1}\| = 1$. [L2, algebra]

1.2 For every $y \in L$ the point evaluation $\delta_y$ is an extreme point of $B_{C(L)^*}$ of the form $1\cdot\delta_y$, so by [L1] and [L3] its image $T^*\delta_y$ is an extreme point of $B_{C(K)^*}$; by [L1] there are unique $h(y) \in K$ and $u(y) \in \mathbb K$ with $|u(y)| = 1$ and $T^*\delta_y = u(y)\delta_{h(y)}$. This defines functions $h : L \to K$ and $u : L \to \mathbb K$. [1.1, L1, L3]

1.3 Conversely, let $h : L \to K$ be a homeomorphism and $u : L \to \mathbb K$ continuous with $|u| = 1$, and set $Tf := u\cdot(f\circ h)$. Then $T$ is $\mathbb K$-linear, $\|Tf\|_\infty = \sup_y|u(y)f(h(y))| = \sup_x|f(x)| = \|f\|_\infty$ because $h$ is surjective, and $T$ is surjective with inverse $Sg := (g\circ h^{-1})/u(h^{-1})$. [algebra]

2.1 Evaluating $T^*\delta_y = u(y)\delta_{h(y)}$ at the constant function $\mathbf 1$ gives $u(y) = (T^*\delta_y)(\mathbf 1) = \delta_y(T\mathbf 1) = (T\mathbf 1)(y)$, so $u = T\mathbf 1$ is continuous, and $|u(y)| = 1$ for all $y$ by [step 1.2]. [step 1.2, L2, algebra]

2.2 For $f \in C(K)$ and $y \in L$: $Tf(y) = \delta_y(Tf) = (T^*\delta_y)(f) = u(y)f(h(y))$, using the definition of the transpose in [L2] and [step 1.2]. [step 1.2, L2, algebra]

3.1 The map $h$ is continuous: for every $f \in C(K)$ the function $y \mapsto f(h(y)) = Tf(y)/u(y)$ is continuous, since $Tf$ is continuous and $u$ is continuous with $|u|=1$ so $1/u = \overline u$ is continuous; the family $\{f \circ h : f \in C(K)\}$ therefore consists of continuous functions and the evaluation embedding $e_K$ of $K$ into the product over $C(K,[0,1])$ has continuous composition $e_K \circ h$, whence $h$ is continuous because $e_K$ is an embedding by [L4]. [step 2.1, step 2.2, L4]

3.2 Applying [step 1.2] and [step 2.2] to the surjective isometry $T^{-1} : C(L) \to C(K)$ (which is a surjective linear isometry by [step 1.1]) produces $h' : K \to L$ continuous and $v : K \to \mathbb K$ with $|v| = 1$ such that $T^{-1}g(x) = v(x)g(h'(x))$ for all $g, x$. [step 1.1, step 2.2]

4.1 From $T T^{-1} = \mathrm{id}_{C(L)}$: for $g \in C(L)$ and $y \in L$ one computes $g(y) = T(T^{-1}g)(y) = u(y)(T^{-1}g)(h(y)) = u(y)v(h(y))\,g(h'(h(y)))$ by [step 2.2] and [step 3.2], with $|u(y)v(h(y))| = 1$; if $h'(h(y)) \ne y$ then [L5] gives $g$ with $g(y) \ne g(h'(h(y)))$, contradicting the displayed identity; so $h' \circ h = \mathrm{id}_L$, and the same argument with the roles reversed gives $h \circ h' = \mathrm{id}_K$. Hence $h$ is a bijection with continuous inverse $h' = h^{-1}$, that is, a homeomorphism. [step 2.2, step 3.2, L5, algebra]

5.1 By [step 2.2] and [step 4.1] every surjective linear isometry has the asserted form with $h$ a homeomorphism and $|u| = 1$; by [step 1.3] every pair $(h,u)$ of that form defines a surjective linear isometry; and the pair is unique since $u = T\mathbf 1$ by [step 2.1] and then $h$ is recovered from $T$ by the formula. [step 1.3, step 2.1, step 2.2, step 4.1] ∎

## Remarks

- **Nonemptiness is a hypothesis.** For $K = \varnothing$ or $L = \varnothing$ the space $C(K)$ is the zero algebra and the conclusion is vacuous; the argument above uses nonemptiness to have a point evaluation to transpose.
- **The weight $u$ is forced.** Step 2.1 identifies $u$ with $T\mathbf 1$, so the isometry is unital precisely when $u \equiv 1$; nothing in the theorem requires this.
