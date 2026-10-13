---
id: def-sr-affine-phase-and-wave-covector
kind: definition
title: 'Affine phase functions and wave covectors on affine Minkowski space'
status: published
origin: pipeline
domain: mathematics
deps: [def-sr-affine-minkowski-model, def-affine-space-and-displacement,
       def-algebraic-dual-and-linear-functional,
       lem-sr-metric-duality-on-lorentz-vector-space,
       def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       def-inertial-frame-and-inertial-chart,
       thm-unique-coordinates-with-respect-to-an-ordered-basis,
       thm-chain-rule, thm-algebra-of-derivatives,
       thm-algebra-of-continuous-functions, def-derivative]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-affine-space-and-displacement: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  lem-sr-metric-duality-on-lorentz-vector-space: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-derivative: mathematical-premise
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 6.4 Duality pp. 134-137 and Section 6.5.1 Doppler shift p. 137; signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, phase matching and the wave four-vector (6.1)-(6.5) pp. 25-26'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 pp. 910-912: transformed wave phase; proofread transcription of the original at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Definition

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space ([[def-sr-affine-minkowski-model]]), with displacements $q-p\in V$ ([[def-affine-space-and-displacement]]).

**(a) Affine phase functions.** A map $\theta:A\to\mathbb R$ is an **affine phase function** when there are $q\in A$ and a covector $k\in V^*$ ([[def-algebraic-dual-and-linear-functional]]) with

$$\theta(p)-\theta(q)=k(p-q)\qquad\text{for all }p\in A .$$

The covector $k$ is then unique: if $k'$ also satisfies the identity, then $(k-k')(p-q)=0$ for all $p\in A$, and as $p$ runs over $A$ the displacements $p-q$ run over all of $V$, so $k-k'=0$ as a functional. This unique covector is the **differential** $\mathrm d\theta$ of $\theta$; when $k\neq0$, it is also called the **wave covector** of $\theta$, as in clause (c). Conversely, for every $q\in A$, every $k\in V^*$ and every $\theta_0\in\mathbb R$, the formula

$$\theta(p):=k(p-q)+\theta_0$$

defines an affine phase function with $\mathrm d\theta=k$ and $\theta(q)=\theta_0$; hence for each fixed $q$ the map $\theta\mapsto(\mathrm d\theta,\theta(q))$ is a bijection from the set of affine phase functions onto $V^*\times\mathbb R$. In the inertial chart $x$ of an inertial frame $(o;e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]), writing $k_a:=k(e_a)$, one has

$$\theta(p)=k_ax^a(p)+\theta(o)$$

because $p-o=\sum_ax^a(p)e_a$ with unique coordinates $x^a(p)$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) and $k$ is linear; for a second origin $o'$ one has $\theta(o')=\theta(o)+k(o'-o)$.

**(b) Constant-phase directions and level sets.** For $v\in V$, $p\in A$ and $s\in\mathbb R$ one has $\theta(p+sv)=\theta(p)+sk(v)$ by the defining identity, so $k(v)=0$ if and only if $\theta$ is constant on the line $p+\mathbb Rv$ for every $p\in A$. If $k\neq 0$, the **direction subspace**

$$\ker k:=\{v\in V:k(v)=0\}$$

is a $3$-dimensional linear subspace of $V$: it is the kernel of the nonzero linear functional $k$, and choosing $v_0$ with $k(v_0)\neq 0$ gives every $v\in V$ the unique decomposition $v=\bigl(k(v)/k(v_0)\bigr)v_0+w$ with $w\in\ker k$, so $V=\ker k\oplus\mathbb Rv_0$ and $\dim\ker k=4-1=3$; every nonempty level set

$$\Sigma_t:=\{p\in A:\theta(p)=t\}$$

is then the affine hyperplane $p_0+\ker k$ through any of its points $p_0$, and the level set is empty when $t$ is not a value of $\theta$. If $k=0$ then $\theta$ is constant and $\Sigma_t$ is either empty or all of $A$. For the derivative assertion, $I\subseteq\mathbb R$ is an order-convex set with at least two points, and a **$C^1$ curve** $\gamma:I\to A$ means a map whose four real components in an inertial chart are differentiable with continuous derivatives, using one-sided derivatives at included endpoints. Its tangent $\gamma'(s)$ is the vector with those component derivatives in the frame basis; equivalently it is the limit in frame coordinates of $(\gamma(s+h)-\gamma(s))/h$. This definition and tangent are independent of the inertial chart: chart transitions are affine with invertible constant linear part, and finite linear combinations preserve derivatives and their continuity by [[thm-algebra-of-derivatives]] and [[thm-algebra-of-continuous-functions]]. Finally, for every such $C^1$ curve $\gamma:I\to A$ one has $(\theta\circ\gamma)'(s)=k\bigl(\gamma'(s)\bigr)$ for all $s\in I$: in the coordinates of any inertial chart this is the identity $\frac{\mathrm d}{\mathrm ds}\bigl(k_ax^a(\gamma(s))+\theta(o)\bigr)=\sum_ak_a\frac{\mathrm d}{\mathrm ds}x^a(\gamma(s))$. The sum and scalar-multiple rules of [[thm-algebra-of-derivatives]], iterated over the four components, and the zero difference quotient of the constant $\theta(o)$ justify this equality, including one-sided endpoints. Its right-hand side is the same linear combination read in the coordinates of $\gamma'(s)$.

**(c) Wave covectors.** A **wave covector** on $(A,V,\eta)$ is a nonzero element $k\in V^*$. With $k^\sharp$ the raised vector of [[lem-sr-metric-duality-on-lorentz-vector-space]] (so that $\eta(k^\sharp,w)=k(w)$ for all $w\in V$, and $k^\sharp=0$ exactly when $k=0$), the covector $k$ is called **null**, **timelike** or **spacelike** when $\eta(k^\sharp,k^\sharp)$ is zero, negative or positive, and **future**, **past**, **future null**, **past null** or **causal** when $k^\sharp$ is respectively future causal, past causal, future null, past null or causal in the sense of [[def-causal-classification-of-lorentz-vectors]] and [[def-time-orientation-and-future-causal-sets]]; a **future null wave covector** is one that is both future and null. These terms are well posed: a wave covector has $k\neq0$, hence $k^\sharp\neq0$, and a nonzero vector has exactly one causal character and is future or past exactly when it is causal.

**(d) Mathematical scope.** This item introduces mathematical objects and terminology only. It excludes the zero covector from the term wave covector, it fixes no units and no physical interpretation, and it does not claim that light or any physical wave is described by such a phase; that identification is adopted in post-sr-ideal-plane-wave-model. No choice principle is used.
