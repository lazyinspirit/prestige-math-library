---
id: thm-behnke-stein-increasing-union
kind: theorem
title: "Behnke-Stein: increasing unions of pseudoconvex domains"
status: draft
origin: pipeline
deps:
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-polydisc-boundary-radius
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - thm-heine-borel-rn
  - rem-complex-euclidean-space-dictionary
  - thm-decreasing-limits-of-plurisubharmonic-functions
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 2 §2.5, the nested-union discussion, and the remark that the union statement needs no Levi theory."
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.2.4, pseudoconvexity conventions and the boundary-distance function."
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§4.2, statement of the Behnke-Stein theorem for increasing unions."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let
$\Omega_1\subseteq\Omega_2\subseteq\cdots$ be an increasing sequence of
Hartogs pseudoconvex domains in $\mathbb C^n$, $n\ge1$, whose union
$\Omega:=\bigcup_{j\ge1}\Omega_j$ is a domain. Then $\Omega$ is Hartogs
pseudoconvex: when $\Omega=\mathbb C^n$ this is the whole-space convention, and
otherwise, for every $J\ge1$, the decreasing tail
$(-\log\delta_{\Omega_j}|_{\Omega_J})_{j\ge J}$ consists of
plurisubharmonic functions on $\Omega_J$ and converges pointwise there to
$-\log\delta_\Omega|_{\Omega_J}$.

## Facts & Assumptions

**Given:** The Axiom of Choice; an increasing sequence of domains $\Omega_1\subseteq\Omega_2\subseteq\cdots$ in $\mathbb C^n$, $n\ge1$, each Hartogs pseudoconvex, with union $\Omega=\bigcup_{j\ge1}\Omega_j$ a domain.

[F1] A domain $\Omega$ is **Hartogs pseudoconvex** when the function $z\mapsto-\log\delta_\Omega(z)$ is plurisubharmonic on $\Omega$, where $\delta_\Omega$ is the equal-radius polydisc boundary function ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F2] When $\Omega=\mathbb C^m$ one has $\delta_\Omega\equiv+\infty$ and the boundary function is by convention the constant function $0$; thus the whole space is Hartogs pseudoconvex ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F3] The equal-radius polydisc boundary function is $$\delta_\Omega(a):=\sup\{r>0:\Delta_r(a)\subseteq\Omega\}\in(0,+\infty],$$ for $a\in\Omega$, where $\Delta_r(a)$ is the open polydisc of constant polyradius $r$ ([[def-polydisc-boundary-radius]]).

[F4] The closed polydisc is $$\overline\Delta_r(a):=\{z:|z_k-a_k|\le r_k\ \text{for every }k<m\},$$ and the open polydisc $\Delta_r(a)$ is defined by the strict inequalities $|z_k-a_k|<r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F5] A subset of $\mathbb R^N$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[F6] Under the identification of $\mathbb C^m$ with $\mathbb R^{2m}$ the metric, the balls, the open sets, the convergent sequences and the continuous maps of $\mathbb C^m$ are **verbatim** those of $\mathbb R^{2m}$ ([[rem-complex-euclidean-space-dictionary]]).

[F7] If $u_1\ge u_2\ge\cdots$ is a decreasing sequence of plurisubharmonic functions on a domain and $u=\lim_nu_n$ pointwise, then either $u\equiv-\infty$ on a connected component, or $u$ is plurisubharmonic ([[thm-decreasing-limits-of-plurisubharmonic-functions]]).

[F8] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement. The proof selects nothing: the indices $J$ attached to a compact set or to a radius are produced by a finite subcover argument and then taken to be maximal in the increasing family, and the functions $\delta_{\Omega_j}$ are given. No family of nonempty sets is chosen from.



**Proof technique:** direct.

## Proof

1.1 If $\Omega=\mathbb C^n$, then [F2] is exactly the conclusion, so assume from now on that $\Omega\ne\mathbb C^n$; then $F:=\mathbb C^n\setminus\Omega$ is nonempty, and writing $\delta_j:=\delta_{\Omega_j}$ and $\delta:=\delta_\Omega$ in the sense of [F3] one has $0<\delta_j(a)<+\infty$ for every $a\in\Omega_j$ (positivity because $\Omega_j$ is open, finiteness because $F\subseteq\mathbb C^n\setminus\Omega_j\ne\varnothing$) and $0<\delta(a)<+\infty$ for every $a\in\Omega$. [F1, F2, F3, F8, given]

2.1 For $a\in\Omega_j$ the inclusion $\Omega_j\subseteq\Omega_{j+1}\subseteq\Omega$ implies $\Delta_r(a)\subseteq\Omega_j\Rightarrow\Delta_r(a)\subseteq\Omega_{j+1}\Rightarrow\Delta_r(a)\subseteq\Omega$ for every $r>0$, hence $\delta_j(a)\le\delta_{j+1}(a)\le\delta(a)$ and, if $a\in\Omega_{J_0}$, the eventual-tail limit $\gamma(a):=\lim_{j\to\infty,\ j\ge J_0}\delta_j(a)=\sup_{j\ge J_0}\delta_j(a)$ exists and is independent of $J_0$; moreover $\gamma(a)=\delta(a)$, because for every $r$ with $0<r<\delta(a)$ and every $r'$ with $r<r'<\delta(a)$ the definition [F3] gives $\Delta_{r'}(a)\subseteq\Omega$, so the closed polydisc $\overline\Delta_r(a)\subseteq\Delta_{r'}(a)\subseteq\Omega$ of [F4] is closed and bounded in $\mathbb C^n$, hence compact by [F5] read through [F6], and is therefore covered by finitely many members of the increasing open cover $(\Omega_j)_{j\ge1}$ of $\Omega$, whose largest index, increased to $J\ge J_0$ if necessary, satisfies $\overline\Delta_r(a)\subseteq\Omega_J$ and hence $\gamma(a)\ge\delta_J(a)\ge r$; letting $r\uparrow\delta(a)$ gives $\gamma(a)=\delta(a)$. [F3, F4, F5, F6, step 1.1, given]

3.1 Let $K\subseteq\Omega$ be compact and choose $J$ with $K\subseteq\Omega_J$ (the same finite-subcover argument applied to the increasing cover $(\Omega_j)$ of $K$); then for every $j\ge J$ the function $-\log\delta_j$ is plurisubharmonic on $\Omega_j$ by the hypothesis that $\Omega_j$ is Hartogs pseudoconvex and [F1], hence on the smaller domain $\Omega_J$, the sequence $(-\log\delta_j)_{j\ge J}$ is decreasing on $\Omega_J$ by step 2.1, and it converges pointwise on $\Omega_J$ to $-\log\delta$ by the identity $\gamma=\delta$ of step 2.1; the limit is real-valued on $\Omega_J$ because $0<\delta<+\infty$ there by step 1.1, so it is not identically $-\infty$ on any component and [F7] makes $-\log\delta$ plurisubharmonic on $\Omega_J$. [F1, F7, step 1.1, step 2.1]

4.1 Every point $a\in\Omega$ lies in some $\Omega_J$, an open neighbourhood of $a$ on which $-\log\delta$ is plurisubharmonic by step 3.1 applied with $K=\{a\}$; plurisubharmonicity is a local condition, so $-\log\delta$ is plurisubharmonic on $\Omega$ and [F1] makes $\Omega$ Hartogs pseudoconvex; together with the whole-space case of step 1.1 this proves the statement in both cases. [F1, step 1.1, step 3.1] ∎
