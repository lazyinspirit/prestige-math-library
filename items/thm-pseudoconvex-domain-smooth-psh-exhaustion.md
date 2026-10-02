---
id: thm-pseudoconvex-domain-smooth-psh-exhaustion
kind: theorem
title: Smooth strictly plurisubharmonic exhaustion of a pseudoconvex domain
status: draft
origin: pipeline
deps:
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity
  - lem-smooth-regularization-of-psh-exhaustion
  - def-levi-form-and-strict-plurisubharmonicity
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
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.2.4, Theorem 19 and its proof, printed pp. 69-70"
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 2 §2.5, Theorem 2.5.6 and the exhaustion characterization"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $\Omega\subseteq\mathbb C^n$ be a domain, $n\ge1$, that is Hartogs pseudoconvex ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]). Then there exist a function $S\in C^\infty(\Omega)$ that is strictly plurisubharmonic on $\Omega$ ([[def-levi-form-and-strict-plurisubharmonicity]]) and a strictly increasing sequence $c_1<c_2<\cdots$ with $c_k\to+\infty$ such that, writing $\Omega_k:=\{z\in\Omega:S(z)<c_k\}$:

1. every $c_k$ is a regular value of $S$, each $\partial\Omega_k=\{z\in\Omega:S(z)=c_k\}$ is a nonempty $C^\infty$ hypersurface of $\Omega$, and $\overline{\Omega_k}\subseteq\Omega_{k+1}$ with $\bigcup_{k\ge1}\Omega_k=\Omega$, so every $\overline{\Omega_k}$ is a compact subset of $\Omega$;
2. each sublevel is strongly pseudoconvex along its boundary: for every $k$, every $p\in\partial\Omega_k$ and every $v\in\mathbb C^n\setminus\{0\}$ with $\sum_{j<n}(\partial S/\partial z_j)(p)\,v_j=0$ one has $\mathcal L_S(p;v)>0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a domain $\Omega\subseteq\mathbb C^n$ with $n\ge1$ that is Hartogs pseudoconvex.

[F1] A function $u:\Omega\to\mathbb R$ is a continuous plurisubharmonic exhaustion when $u$ is continuous, plurisubharmonic, and every sublevel set $\{z\in\Omega:u(z)\le c\}$ is compact in $\Omega$ for every real number $c$ ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F2] The domain $\Omega$ is Hartogs pseudoconvex when $-\log\delta_\Omega$ is plurisubharmonic on $\Omega$, and the whole space is Hartogs pseudoconvex by the empty-complement convention ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F3] If a domain $\Omega\subseteq\mathbb C^m$ is Hartogs pseudoconvex, then it admits a continuous plurisubharmonic exhaustion function ([[thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity]]).

[F4] Assume AC and AC$_\omega$; for every continuous plurisubharmonic exhaustion $u$ on a domain there are $S\in C^\infty(\Omega)$ strictly plurisubharmonic and a strictly increasing sequence $c_k\to+\infty$ such that each $c_k$ is a regular value of $S$, each $\partial\Omega_k$ with $\Omega_k=\{S<c_k\}$ is a nonempty $C^\infty$ hypersurface, $\overline{\Omega_k}\subseteq\Omega_{k+1}$ and $\bigcup_k\Omega_k=\Omega$, and $\mathcal L_S(p;v)>0$ for all $p\in\partial\Omega_k$ and all $v\ne0$ with $\sum_j(\partial S/\partial z_j)(p)v_j=0$ ([[lem-smooth-regularization-of-psh-exhaustion]]).

[F5] $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$ in ZF ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F6] The Axiom of Countable Choice selects from every at most countable family of nonempty sets ([[def-countable-choice]]).

[F7] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F7]; the regularization lemma [F4] is stated under AC and AC$_\omega$, and the countable instance [F6] is obtained from the ambient AC by the exact implication [F5] in step 2.1. The proof selects no family of nonempty sets.

## Proof

**Proof technique:** direct.

1.1 By the defining property [F2] the Hartogs pseudoconvexity of $\Omega$ says that $-\log\delta_\Omega$ is plurisubharmonic on $\Omega$, so the equivalence theorem [F3] supplies a continuous plurisubharmonic exhaustion $u:\Omega\to\mathbb R$, that is, $u$ is continuous, plurisubharmonic, and every sublevel set $\{u\le c\}$ is compact in $\Omega$ by [F1]. [F1, F2, F3, given]

2.1 The regularization lemma [F4], whose hypotheses are assumed AC together with AC$_\omega$ here, applies to the continuous plurisubharmonic exhaustion $u$ produced in step 1.1 and yields $S\in C^\infty(\Omega)$ strictly plurisubharmonic together with a strictly increasing sequence $c_k\to+\infty$ such that each $c_k$ is a regular value of $S$, each $\partial\Omega_k$ is a nonempty $C^\infty$ hypersurface of $\Omega$, $\overline{\Omega_k}\subseteq\Omega_{k+1}$ and $\bigcup_k\Omega_k=\Omega$, and $\mathcal L_S(p;v)>0$ whenever $p\in\partial\Omega_k$ and $v\ne0$ satisfies $\sum_j(\partial S/\partial z_j)(p)v_j=0$; the countable instance required by that lemma is supplied from the ambient AC by the implication [F5] and its content [F6]. [F4, F5, F6, step 1.1, given]

3.1 The function $S$ and the sequence $c_k$ produced in step 2.1 have exactly the properties listed as claims 1 and 2 of the Statement: strictly plurisubharmonic and smooth on $\Omega$, increasing regular values tending to infinity, sublevels with nonempty smooth boundary, increasing relatively compact closures exhausting $\Omega$, and strong pseudoconvexity along each boundary. The ambient hypothesis is the AC cited as [F7]. [F7, step 2.1] ∎
