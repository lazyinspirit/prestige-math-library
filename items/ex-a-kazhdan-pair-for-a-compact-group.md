---
status: published
id: ex-a-kazhdan-pair-for-a-compact-group
kind: example
title: A Kazhdan pair for a compact group via Haar averaging
deps:
  - cor-normalized-haar-probability-on-a-compact-group
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-compact-space
  - def-hausdorff-space
  - def-hilbert-space
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - thm-compact-groups-have-property-t
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC as in the normalized Haar probability supplier and the preceding compact-group theorem; this example makes no additional choice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Proposition 1.1.5 and complete proof, printed pp. 34–35/PDF pp. 40–41. The source proves a stronger (G,√2) pair by a closed-convex-hull argument; the explicit Haar-average statement here is supplied by the preceding in-run theorem."
    - title: "Terence Tao, 254B, Notes 2: Cayley graphs and Kazhdan's property (T)"
      url: "https://terrytao.wordpress.com/2011/12/06/254b-notes-2-cayley-graphs-and-kazhdans-property-t/"
      locator: "§1, Exercise 33, asks to show that every compact group has property (T) with a convexity hint; it is a prompt, not a proof, and is not used as proof support."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-compact-space]], [[def-hausdorff-space]],
[[def-topological-group]]) with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]). For every
$0<\varepsilon\le1$, $(K,\varepsilon)$ is a Kazhdan pair
([[def-kazhdan-pair-and-kazhdan-constant]]); in particular, $K$ is a Kazhdan
set and has property (T) ([[def-kazhdans-property-t]]).

Explicitly, if $(\pi,H)$ is a strongly continuous unitary representation
([[def-strongly-continuous-unitary-representation]]) on a Hilbert space $H$
([[def-hilbert-space]]) and $\xi\in H$ is a unit vector with
$$\sup_{x\in K}\lVert\pi(x)\xi-\xi\rVert<\varepsilon\le1,$$
then its Haar average $\eta=\int_K\pi(x)\xi\,d\mu(x)$, as in
[[thm-compact-groups-have-property-t]], is nonzero and $K$-invariant, with
$$\lVert\eta-\xi\rVert\le\sup_{x\in K}\lVert\pi(x)\xi-\xi\rVert.$$
Thus the whole group $K$ is a Kazhdan set with tolerance $1$; the averaging
bound is not claimed to be optimal.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff topological group $K$ with normalized Haar
probability $\mu$, and a strongly continuous unitary representation $(\pi,H)$.

[F1] For every $0<\delta\le1$, the preceding compact-group theorem says
$(K,\delta)$ is a Kazhdan pair. It also gives the Haar average
$\eta=\int_K\pi(x)\xi\,d\mu(x)$ as a nonzero invariant vector with
$\lVert\eta-\xi\rVert\le\sup_K\lVert\pi(x)\xi-\xi\rVert$ whenever $\xi$ is
a unit vector and that supremum is below $1$
([[thm-compact-groups-have-property-t]],
[[cor-normalized-haar-probability-on-a-compact-group]],
[[def-axiom-of-choice]]).

[F2] A pair $(K,\delta)$ is Kazhdan when every strongly continuous unitary
representation with a $(K,\delta)$-invariant unit vector has a nonzero
invariant vector; a compact Kazhdan set with one positive tolerance gives
property (T). Almost invariance supplies such unit vectors for every compact
test and every positive tolerance. ([[def-kazhdan-pair-and-kazhdan-constant]],
[[def-kazhdans-property-t]],
[[def-almost-invariant-vectors-for-a-unitary-representation]]).

## Proof

**Proof technique:** apply the earlier Haar-average theorem and specialize its
uniform estimate to the compact test set $K$.

1.1 If $\xi$ is a unit vector and $M:=\sup_{x\in K}\lVert\pi(x)\xi-\xi\rVert<\varepsilon\le1$, then $M<1$. By [F1], the Haar average $\eta=\int_K\pi(x)\xi\,d\mu(x)$ is nonzero and $K$-invariant, and $\lVert\eta-\xi\rVert\le M$. [F1, given, algebra]

2.1 By [F1], $(K,\varepsilon)$ is a Kazhdan pair for every $0<\varepsilon\le1$. Taking $\varepsilon=1$ makes $K$ a Kazhdan set; its pair property applied to almost invariant unit vectors gives property (T) by [F2]. A representation on the zero Hilbert space has no unit vector, so the pair implication is vacuous there. [F1, F2] ∎
