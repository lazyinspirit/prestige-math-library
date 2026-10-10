---
id: ex-sr-phase-level-sets-and-null-generators
kind: example
title: 'Worked geometry of the phase level sets of a future null wave covector'
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-affine-phase-and-wave-covector,
       lem-sr-null-covector-frame-data,
       lem-sr-metric-duality-on-lorentz-vector-space,
       thm-cauchy-schwarz-finite,
       def-euclidean-inner-product,
       def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       lem-timelike-cone-has-two-convex-components]
dependency_roles:
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  lem-sr-null-covector-frame-data: mathematical-premise
  lem-sr-metric-duality-on-lorentz-vector-space: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 6.4 Duality pp. 134-137; signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Example

This worked example computes the geometry of the phase level sets of a future null wave covector. Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space, let $k$ be a future null wave covector with frame data $(\varpi,s)$ in an inertial frame $(o;e_0,e_1,e_2,e_3)$ ([[lem-sr-null-covector-frame-data]]), so that $\varpi>0$, $|s|=1$ and $k$ has components $k_a=(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$ in this frame, and let $\theta$ be an affine phase function with wave covector $k$ ([[def-sr-affine-phase-and-wave-covector]]). Then:

**(a)** $k(k^\sharp)=\eta(k^\sharp,k^\sharp)=0$, since the raised vector is $k^\sharp=\varpi(e_0+s_1e_1+s_2e_2+s_3e_3)$; hence $\theta$ is constant on every line $p+\mathbb Rk^\sharp$.

**(b)** The direction subspace $\ker k=\{v:k(v)=0\}=\{v:v^0=s\cdot v_{\mathrm{vec}}\}$ is $3$-dimensional; for $v\in\ker k$ one has $\eta(v,v)=|v_{\mathrm{vec}}|^2-(s\cdot v_{\mathrm{vec}})^2\ge0$ by the finite Cauchy-Schwarz inequality, with equality exactly when $v_{\mathrm{vec}}$ is a real multiple of $s$, that is exactly when $v$ lies in the line $\operatorname{span}(k^\sharp)$; hence the restriction of $\eta$ to $\ker k$ is positive semidefinite with radical the line $\operatorname{span}(k^\sharp)$, and the only null direction contained in $\ker k$ is the line through $k^\sharp$, with future ray $k^\sharp$ and past ray $-k^\sharp$.

**(c)** Every nonempty level set $\Sigma=\{p:\theta(p)=\theta(p_0)\}$ is the affine hyperplane $p_0+\ker k$ through $p_0$, whose normal covector is the null covector $k$; it contains the two null rays $p_0+\mathbb R_{\ge0}k^\sharp$ and $p_0+\mathbb R_{\le0}k^\sharp$, and all its other direction vectors are spacelike.

The verification is exact algebra; no choice principle is used.

## Facts & Assumptions

**Given:** An oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$, a future null wave covector $k$ with frame data $(\varpi,s)$ in an inertial frame $(o;e_0,e_1,e_2,e_3)$, and an affine phase function $\theta$ with $\mathrm d\theta=k$.

[L1] $\varpi>0$, $|s|=1$, $k_a=(-\varpi,\varpi s_1,\varpi s_2,\varpi s_3)$, $k^\sharp=\varpi(e_0+s_1e_1+s_2e_2+s_3e_3)$, and $k^\sharp$ is nonzero future null with $k(k^\sharp)=\eta(k^\sharp,k^\sharp)=0$ ([[lem-sr-null-covector-frame-data]], clauses (a)-(d)).

[L2] $k(v)=\varpi(-v^0+s_1v^1+s_2v^2+s_3v^3)$ for every $v=v^0e_0+v_{\mathrm{vec}}$, and $k(v)=0$ if and only if $\theta$ is constant on every line $p+\mathbb Rv$ ([[def-sr-affine-phase-and-wave-covector]], clauses (b)-(c)); $\ker k$ is a $3$-dimensional linear subspace when $k\neq0$.

[L3] For the frame, $\eta(v,w)=-v^0w^0+\delta(v_{\mathrm{vec}},w_{\mathrm{vec}})$ with $\delta(v_{\mathrm{vec}},w_{\mathrm{vec}})=\sum_iv^iw^i$ and $|v_{\mathrm{vec}}|^2=\delta(v_{\mathrm{vec}},v_{\mathrm{vec}})$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L4] Cauchy-Schwarz in root form: $|\sum_{k<n}a_kb_k|\le\sqrt{\sum_{k<n}a_k^2}\sqrt{\sum_{k<n}b_k^2}$, with equality in the squared form exactly when the two lists are proportional in the sense that some $(\lambda,\mu)\ne(0,0)$ has $\lambda a_k=\mu b_k$ for all $k$; in the frame this gives $|s\cdot v_{\mathrm{vec}}|\le|s|\,|v_{\mathrm{vec}}|$ with equality exactly when $s$ and $v_{\mathrm{vec}}$ are proportional ([[thm-cauchy-schwarz-finite]], [[def-euclidean-inner-product]]).

[L5] A vector is spacelike when $\eta(v,v)>0$, null when nonzero with $\eta(v,v)=0$, and the zero vector has no causal character ([[def-causal-classification-of-lorentz-vectors]]).

[L6] $k^\sharp$ is future null and $-k^\sharp$ is past null, and every nonzero vector in $\operatorname{cl}(C^+)$ is future causal ([[def-time-orientation-and-future-causal-sets]], [[lem-timelike-cone-has-two-convex-components]]).

## Verification

**Proof technique:** direct.

1.1 Clause (a). By [L1], $k^\sharp=\varpi(e_0+\sum_is_ie_i)$ with $\varpi>0$ and $|s|=1$, so $\eta(k^\sharp,k^\sharp)=\varpi^2\bigl(-1+\sum_is_i^2\bigr)=\varpi^2(|s|^2-1)=0$ by [L1, L3], and $k(k^\sharp)=\eta(k^\sharp,k^\sharp)$ by [L1]. For every $p\in A$ and $\lambda\in\mathbb R$ the defining identity of the phase gives $\theta(p+\lambda k^\sharp)=\theta(p)+\lambda k(k^\sharp)=\theta(p)$, so $\theta$ is constant on the lines $p+\mathbb Rk^\sharp$. [L1, L2, L3]

2.1 Clause (b), kernel and sign. By [L2] and $\varpi>0$, $v\in\ker k$ is equivalent to $v^0=s\cdot v_{\mathrm{vec}}$, and $\ker k$ is a $3$-dimensional subspace [L2]. For $v\in\ker k$, substituting $v^0=s\cdot v_{\mathrm{vec}}$ into [L3] gives $\eta(v,v)=-(s\cdot v_{\mathrm{vec}})^2+|v_{\mathrm{vec}}|^2$; by [L4] with $|s|=1$ this is $\ge0$, and it is $0$ exactly when $|s\cdot v_{\mathrm{vec}}|=|v_{\mathrm{vec}}|$, which by the equality clause of [L4] holds exactly when $v_{\mathrm{vec}}=\lambda s$ for some real $\lambda$. For such a $v$, $v^0=s\cdot v_{\mathrm{vec}}=\lambda$, so $v=\lambda(e_0+\sum_is_ie_i)=\lambda\varpi^{-1}k^\sharp$ lies in $\operatorname{span}(k^\sharp)$; conversely every multiple of $k^\sharp$ lies in $\ker k$ because $k(k^\sharp)=0$ by step 1.1. For every $w\in\ker k$ one has $\eta(k^\sharp,w)=k(w)=0$, so this line lies in the radical; conversely a radical vector has zero self-pairing and thus lies in this line by the equality calculation. Hence $\eta|_{\ker k}$ is positive semidefinite, its radical is $\operatorname{span}(k^\sharp)$, and its only null elements are the nonzero multiples of $k^\sharp$. [step 1.1, L2, L3, L4]

3.1 Clause (b), null directions. By [L1] and [L6] the vector $k^\sharp$ is future null and $-k^\sharp$ is past null, so the nonzero multiples of $k^\sharp$ are exactly the two rays $\mathbb R_{>0}k^\sharp$ (future null) and $\mathbb R_{>0}(-k^\sharp)$ (past null) of the line $\operatorname{span}(k^\sharp)$; combined with step 2.1 and [L5], the line through $k^\sharp$ is the only null direction contained in $\ker k$. [step 2.1, L1, L5, L6]

4.1 Clause (c). By [L2] and step 2.1 the kernel of the nonzero functional $k$ is the $3$-dimensional subspace $\ker k$, and the level set $\Sigma=\{p:\theta(p)=\theta(p_0)\}$ is the affine hyperplane $p_0+\ker k$ through $p_0$; its direction subspace is $\ker k$, whose normal covector is $k$ (the linear functional defining the direction subspace), and $k$ is null by hypothesis. Since $k^\sharp\in\ker k$ by step 1.1, both rays $p_0+\mathbb R_{\ge0}k^\sharp$ and $p_0+\mathbb R_{\le0}k^\sharp$ lie in $\Sigma$; every other direction vector of $\Sigma$ lies in $\ker k$ outside $\operatorname{span}(k^\sharp)$ and is spacelike by steps 2.1 and 3.1 and [L5]. This proves (a), (b) and (c). The computation is exact algebra and no choice principle was used. [step 1.1, step 2.1, step 3.1, L2, L5] ∎
