---
id: lem-invariant-horizontal-form-on-a-free-proper-quotient-descends-uniquely
kind: lemma
title: An invariant horizontal form on a free proper quotient descends uniquely
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-free-proper-action-quotient-manifold, prop-tangent-space-of-a-free-proper-quotient, lem-local-slice-for-a-free-proper-action, thm-constant-rank-theorem-for-manifolds, thm-quotient-universal-property, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 21.10 and the basic-form discussion, printed pages 545--549
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.3, reduction of constant-rank submanifolds, printed page 101
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let a Lie group $G$ act smoothly, freely and
properly on a smooth manifold $M$ with quotient map
$\pi:M\to M/G$. A smooth $k$-form $\sigma$ on $M$ is the pullback
$\sigma=\pi^*\bar\sigma$ of a smooth $k$-form on $M/G$ if and only if

* $\sigma$ is **$G$-invariant**: $a_g^*\sigma=\sigma$ for all $g\in G$, where
  $a_g(x)=g\cdot x$; and
* $\sigma$ is **horizontal**: $\sigma_x(v_1,\dots,v_k)=0$ whenever some $v_i$
  is tangent to the orbit $G\cdot x$; equivalently
  $\iota_{\xi_M}\sigma=0$ for every fundamental field $\xi_M$.

The form $\bar\sigma$ is then unique.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth free proper action of $G$ on $M$, the quotient map $\pi$, and a smooth $k$-form $\sigma$ on $M$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the quotient and slice suppliers cited below.

[F1] $M/G$ is a smooth manifold and $\pi$ is a smooth surjective submersion. [[thm-free-proper-action-quotient-manifold]].

[F2] $\ker d\pi_x=T_x(G\cdot x)$, and $\pi\circ a_g=\pi$ for all $g$. [[prop-tangent-space-of-a-free-proper-quotient]], [[thm-free-proper-action-quotient-manifold]].

[F3] Every $x$ has a slice $S$ such that $G\times S\to G\cdot S$ is a diffeomorphism onto an open saturated neighbourhood and $q|_S$ is a diffeomorphism onto its image. [[lem-local-slice-for-a-free-proper-action]], [[thm-free-proper-action-quotient-manifold]].

[F4] A submersion admits smooth local sections, and a surjective submersion is a quotient map; a form on the base that pulls back to zero is zero because $d\pi$ is pointwise onto. [[thm-constant-rank-theorem-for-manifolds]], [[thm-quotient-universal-property]].

## Proof

**Proof technique:** direct.

1.1 The conditions are necessary. If $\sigma=\pi^*\bar\sigma$, then $a_g^*\sigma=a_g^*\pi^*\bar\sigma=(\pi\circ a_g)^*\bar\sigma=\pi^*\bar\sigma=\sigma$ by [F2], so $\sigma$ is $G$-invariant. If $v=\xi_M(x)$ is vertical, then $d\pi_xv=0$ by [F2] and therefore $\sigma_x(v,w_2,\dots,w_k)=\bar\sigma_{\pi(x)}(0,d\pi w_2,\dots,d\pi w_k)=0$, so $\sigma$ is horizontal. [F1, F2]

1.2 For the converse, fix $x_0\in M$ and let $V:=\pi(G\cdot S)$ for a slice $S$ through $x_0$ from [F3]; $V$ is open in $M/G$. For $\pi(x)\in V$ and $v_1,\dots,v_k\in T_{\pi(x)}(M/G)$, choose lifts $\tilde v_i\in T_xM$ with $d\pi_x\tilde v_i=v_i$ and set $$\bar\sigma_{\pi(x)}(v_1,\dots,v_k):=\sigma_x(\tilde v_1,\dots,\tilde v_k).$$ [F1, F3, given]

2.1 The prescription of step 1.2 does not depend on the lifts: two lifts of the same $v_i$ differ by an element of $\ker d\pi_x=T_x(G\cdot x)$ by [F2], and expanding multilinearly every resulting difference term contains a vertical entry, hence vanishes by horizontality. [step 1.2, F2]

2.2 It does not depend on the chosen point in the fibre: if $x'=h\cdot x$ and $\tilde v_i$ are lifts at $x$, then $d(a_h)\tilde v_i$ are lifts of the same $v_i$ at $x'$ by [F2], and $G$-invariance of $\sigma$ gives $\sigma_{x'}(d(a_h)\tilde v_1,\dots)=\sigma_x(\tilde v_1,\dots)$. [step 1.2, F2]

3.1 Hence $\bar\sigma$ is well defined on all of $M/G$. It is smooth: near any point of $M/G$ the submersion $\pi$ admits a smooth local section $s$ by [F4], and there $\bar\sigma=s^*\sigma$ because $ds$ provides the lifts; the local definitions agree on overlaps since both pull back to $\sigma$, and forms on the base with equal pullback are equal by [F4]. [step 2.1, step 2.2, F4]

4.1 By construction $\pi^*\bar\sigma=\sigma$. If $\bar\sigma'$ is another such form, then $\pi^*(\bar\sigma-\bar\sigma')=0$, so $\bar\sigma-\bar\sigma'=0$ by [F4]; the descended form is therefore unique. [step 3.1, F4, A1] ∎
