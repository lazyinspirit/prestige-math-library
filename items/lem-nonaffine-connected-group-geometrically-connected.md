---
id: lem-nonaffine-connected-group-geometrically-connected
kind: lemma
title: "Connected finite-type groups are geometrically connected"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-global-sections-flat-field-base-change, thm-separable-closures-exist-and-are-isomorphic-over-the-base, thm-fundamental-theorem-of-finite-galois-theory, thm-nonempty-regular-locus-reduced-variety-perfect-field, thm-regular-equals-smooth-over-perfect-field, thm-smooth-locus-open, lem-ag-geometric-regularity-field-tests, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3, Expose VIA, Section 2.4, identity components over fields"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp6A-13oct24.pdf
    - title: "Milne, Algebraic Groups (2022), 1.28 and component results; Proposition 8.1"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. A connected separated finite-type $k$-group scheme is geometrically connected. A smooth connected such group is geometrically integral. Every geometrically reduced finite-type $k$-group scheme is smooth.

## Facts & Assumptions

[F1] Global sections commute with field extension; separable closures exist, and a finite Galois extension has the ground field as its fixed field. ([[lem-nonaffine-global-sections-flat-field-base-change]], [[thm-separable-closures-exist-and-are-isomorphic-over-the-base]], [[thm-fundamental-theorem-of-finite-galois-theory]])

[F2] Over a perfect field, reduced finite-type varieties have regular points, regularity equals smoothness, and the smooth locus is open. Geometric regularity descends from field extension, and nonempty finite-type schemes over an algebraically closed field have rational closed points. ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-smooth-locus-open]], [[lem-ag-geometric-regularity-field-tests]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** AC and a connected finite-type group scheme $G/k$.

1.1 In an algebraic closure $\bar k$, the connected component of the identity in $G_{\bar k}$ is nonempty and open and closed: a Noetherian space has finitely many connected components. Its characteristic idempotent $e\in\Gamma(G_{\bar k},\mathcal O)$ belongs to $\Gamma(G,\mathcal O)\otimes_k\bar k$ by [F1]. It is already defined over a separable closure $k_s$. Indeed $\bar k/k_s$ is purely inseparable; its finitely many coefficient elements belong to a finite extension with some $p^r$-powers in $k_s$. Since an idempotent satisfies $e^{p^r}=e$, the expansion of that power puts it in $\Gamma(G,\mathcal O)\otimes_k k_s$. In characteristic zero the assertion is immediate. Choose a finite Galois $K/k$ inside $k_s$ containing its coefficients. Each Galois automorphism fixes the identity and therefore preserves this unique geometric connected component and its idempotent. Writing $e$ in finitely many linearly independent coefficients from $\Gamma(G,\mathcal O)$ shows its $K$-coefficients are Galois fixed and lie in $k$ by [F1]. Hence the idempotent descends to $G$, which is connected, and must be $1$. Thus $G_{\bar k}$ is connected. [F1, given, algebra, choose]

1.2 If a finite-type group is geometrically reduced, over $\bar k$ its reduced group has a smooth point by [F2]. Translate that point to the identity and then to every rational closed point. All closed points are smooth. The nonsmooth locus is closed and, if nonempty, has a closed point by [F2], so it is empty. By geometric-regularity descent in [F2], the group is smooth over $k$. This proof does not assume affineness. For the reduction of an arbitrary group over $\bar k$, multiplication and inverse restrict to it: the pullback of a nilpotent ideal vanishes on a reduced source, and products of reduced finite-type schemes over the perfect field are reduced. Thus its reduction is again a group to which the same argument applies. [F2, construct, algebra]

2.1 If $G$ is smooth and connected, its geometric base extension is smooth, reduced, and connected by step 1.1. At a smooth point the local ring is a regular domain, so two different irreducible components cannot meet. The finitely many components are open and closed, and connectedness leaves one; hence the geometric scheme is integral. This proves geometric integrality. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, step 1.2, algebra] ∎
