---
id: lem-smooth-regularization-of-psh-exhaustion
kind: lemma
title: Smooth strict plurisubharmonic regularization of a psh exhaustion
status: draft
origin: pipeline
deps:
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-levi-form-and-strict-plurisubharmonicity
  - cor-regular-values-have-null-complement-and-are-dense
  - def-regular-and-critical-points-and-values
  - cor-regular-level-set-local-graph-theorem
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. I §5.E, Theorem 5.21 (Richberg 1968), printed pp. 43-44: smooth approximation from above of continuous strictly plurisubharmonic functions with a positive Hessian lower bound."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC) and the Axiom of Countable Choice. Let
$\Omega\subseteq\mathbb C^n$, $n\ge1$, be a domain and let $u:\Omega\to\mathbb R$
be a continuous plurisubharmonic exhaustion, that is, $u$ is continuous and
plurisubharmonic and every sublevel set $\{z\in\Omega:u(z)\le c\}$,
$c\in\mathbb R$, is a compact subset of $\Omega$.

Then there exist a function $S\in C^\infty(\Omega)$ and a strictly increasing
sequence $c_1<c_2<\cdots$ with $c_k\to+\infty$ such that, writing
$\Omega_k:=\{z\in\Omega:S(z)<c_k\}$:

1. $S$ is strictly plurisubharmonic on $\Omega$, $S>u$ on $\Omega$, and $S$ is
   again an exhaustion of $\Omega$, that is, $\{z\in\Omega:S(z)\le c\}$ is a
   compact subset of $\Omega$ for every real $c$;
2. every $c_k$ is a regular value of $S$, and
   $\partial\Omega_k=\{z\in\Omega:S(z)=c_k\}$ is a nonempty $C^\infty$
   hypersurface of $\Omega$;
3. $\overline{\Omega_k}\subseteq\Omega_{k+1}$ and
   $\bigcup_{k\ge1}\Omega_k=\Omega$, so every $\overline{\Omega_k}$ is a compact
   subset of $\Omega$;
4. (strong pseudoconvexity) for every $k$, every $p\in\partial\Omega_k$ and
   every $v\in\mathbb C^n\setminus\{0\}$ with
   $$\sum_{j<n}\frac{\partial S}{\partial z_j}(p)\,v_j=0$$
   one has $\mathcal L_S(p;v)>0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a domain $\Omega\subseteq\mathbb C^n$ with $n\ge1$; and a continuous plurisubharmonic exhaustion $u:\Omega\to\mathbb R$.

[F1] A function $u:\Omega\to\mathbb R$ is a continuous plurisubharmonic exhaustion when it is continuous, plurisubharmonic, and every sublevel $\{u\le c\}$ is compact in $\Omega$ ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F2] (Richberg's approximation theorem.) If $v\in\operatorname{Psh}(X)$ is continuous and strictly plurisubharmonic on an open set $V\subseteq X$, with $H_v>\gamma$ for a continuous positive Hermitian form $\gamma$, then for every continuous $0<\lambda<1$ there is $\widetilde v\in C^0(X)\cap C^\infty(V)$ such that $v\le\widetilde v\le v+\lambda$ on $V$ and $H_{\widetilde v}>(1-\lambda)\gamma$; if $v$ is strictly plurisubharmonic on all of $X$, $\widetilde v$ can be chosen strictly plurisubharmonic on all of $X$ (Demailly, *Complex Analytic and Differential Geometry*, Ch. I §5.E, Theorem 5.21, printed pp. 43-44).

[F3] For a smooth map from a finite-dimensional manifold to $\mathbb R$, the regular values are dense; in particular every nonempty open interval contains a regular value when the Axiom of Countable Choice holds ([[cor-regular-values-have-null-complement-and-are-dense]]).

[F4] A value $c$ is regular for $S$ if every point of $S^{-1}(c)$ is a regular point; an empty fibre is regular by convention ([[def-regular-and-critical-points-and-values]]).

[F5] A regular level of a smooth real-valued function on an open subset of $\mathbb R^N$ is locally a smooth graph of dimension $N-1$ ([[cor-regular-level-set-local-graph-theorem]]).

[F6] In ZF, AC implies AC$_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]; [[def-countable-choice]]), and AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC and AC$_\omega$ are the ambient hypotheses. The proof uses AC$_\omega$ only to choose a sequence of regular values from nonempty open intervals; each such interval contains regular values by [F3].

## Proof

**Proof technique:** Richberg approximation, followed by Sard's theorem.

1.1 Put $u_0:=u+|z|^2+1$ and $\gamma:=\tfrac12H_{|z|^2}$. Then $u_0$ is continuous and plurisubharmonic, and $H_{u_0}\ge H_{|z|^2}>\gamma$ because $u$ is plurisubharmonic. It is an exhaustion: if $u_0(z)\le c$, then $u(z)\le c-1$, and $\{u_0\le c\}$ is closed in $\Omega$; thus it is a closed subset of the compact set $\{u\le c-1\}$. Moreover $u_0>u$ everywhere. [F1, algebra]

2.1 Apply [F2] to $u_0$ on $X=V=\Omega$ with the constant error $\lambda=1/2$. This gives $S\in C^\infty(\Omega)$ satisfying $u_0\le S\le u_0+1/2$ and $H_S>\tfrac12\gamma$. Hence $S$ is strictly plurisubharmonic, $S>u$, and $S$ is an exhaustion because each sublevel $\{S\le c\}$ is closed in $\Omega$ and contained in the compact sublevel $\{u_0\le c\}$. [F2, step 1.1, algebra]

3.1 Fix $z_0\in\Omega$. The exhaustion $S$ is unbounded above: otherwise $\Omega=\{S\le c\}$ for some $c$, making the noncompact open set $\Omega$ compact. Choose an integer $M>S(z_0)$. For each $k\ge1$, [F3] supplies a regular value in the fixed nonempty interval $(M+2k,M+2k+1)$; AC$_\omega$ selects one such $c_k$ for each $k$. Then $c_1<c_2<\cdots$, $c_k\to+\infty$, and every level $\{S=c_k\}$ is nonempty: the continuous image $S(\Omega)$ is an interval because $\Omega$ is connected, it contains $S(z_0)$, and it is unbounded above. [F3, F6, step 2.1, given]

4.1 Set $\Omega_k:=\{S<c_k\}$. Each $\overline{\Omega_k}$ is contained in the compact set $\{S\le c_k\}$, and $$\overline{\Omega_k}\subseteq\{S\le c_k\}\subseteq\{S<c_{k+1}\}=\Omega_{k+1}.$$ The sublevels cover $\Omega$ because $c_k\to+\infty$. Continuity gives $\partial\Omega_k\subseteq\{S=c_k\}$; conversely, every point of the regular level $S=c_k$ is a boundary point by the implicit function theorem. Thus $\partial\Omega_k=\{S=c_k\}$ is a nonempty smooth hypersurface, by [F4] and [F5]. [F1, F4, F5, step 2.1, step 3.1]

5.1 At every $p\in\partial\Omega_k$ the function $S-c_k$ defines $\Omega_k$ near $p$. Since $S$ is strictly plurisubharmonic, every nonzero complex tangent vector $v$ satisfies $\mathcal L_S(p;v)>0$. Steps 2.1–4.1 establish the remaining assertions in the Statement. [F1, F2, step 2.1, step 4.1] $\square$
