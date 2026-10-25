---
id: thm-amenability-is-equivalent-to-reiter-p1
kind: theorem
title: Amenability is equivalent to Reiter's condition (P1)
status: published
origin: pipeline
dependency_level: 6
proof_strategy: direct
deps:
  - lem-an-invariant-mean-produces-a-reiter-net
  - lem-a-reiter-net-has-an-invariant-mean-cluster-point
  - def-amenable-locally-compact-group
  - def-reiter-condition-p1
  - def-axiom-of-choice
  - def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - thm-ultrafilter-lemma
  - def-left-haar-integral-and-left-haar-measure
axiom_use: Assume AC. It is used through the amenability-to-Reiter bridge and through the ultrafilter lemma required for the Reiter-net cluster point. No separate dependent-choice assumption is made.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.3, Theorem G.3.1, equivalence of amenability (i), Reiter (P1) (iii), and invariant means (v), printed pp. 452–456; the local proof uses the assigned UCB/Reiter and cluster-point bridges"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property (University of Sydney Honours lecture notes, 11 October 2012)"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "Slides 11–17, PDF pp. 11–17: the amenability/invariant-mean to Reiter (P1) direction; the Reiter-to-amenability direction here uses the local cluster-point lemma"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group. Then $G$ is amenable ([[def-amenable-locally-compact-group]]) if and only if $G$ satisfies Reiter's condition (P1) ([[def-reiter-condition-p1]]): for every compact $Q\subseteq G$ and every $\varepsilon>0$ there is $f\in L^1(G)$ with $f\ge0$, $\lVert f\rVert_1=1$ and $\Delta_Q(f)\le\varepsilon$, with $\Delta_Q$ as defined in
[[def-reiter-condition-p1]] (including $\Delta_\varnothing(f)=0$). The equivalence is proved through invariant means on $L^\infty(G)$, so it is stated for a fixed left Haar measure but does not depend on its normalization.

## Facts & Assumptions

**Given:** AC, a locally compact Hausdorff group $G$, and a fixed left Haar measure $\mu$.

[A1] AC is assumed in the choice-function form ([[def-axiom-of-choice]]).

[F1] The class map embeds actual UCB functions isometrically in $L^\infty(G)$ and intertwines the left translations ([[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]).

[F2] A left-invariant mean on UCB(G) yields Reiter's condition (P1) under AC ([[lem-an-invariant-mean-produces-a-reiter-net]]).

[F3] Reiter's condition (P1) is equivalent to the existence of a net in $\mathcal P$ with compact-uniform translation defects ([[def-reiter-condition-p1]]).

[F4] Amenability is existence of a left-invariant mean on complex $L^\infty(G)$ and is invariant under positive rescaling of Haar measure ([[def-amenable-locally-compact-group]], [[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F5] AC implies the ultrafilter lemma ([[thm-ultrafilter-lemma]]).

[F6] Under the ultrafilter lemma, every Reiter net has a weak-star cluster point which is a left-invariant mean on $L^\infty(G)$ ([[lem-a-reiter-net-has-an-invariant-mean-cluster-point]]).

[F7] Multiplying a left Haar measure by a positive scalar preserves left invariance and the Haar measure convention ([[def-left-haar-integral-and-left-haar-measure]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ is amenable. Let $\nu$ be a left-invariant mean on $L^\infty(G)$ and define $m(\psi):=\nu([\psi])$ for $\psi\in\mathrm{UCB}(G)$. By [F1], the class map is well-defined and injective; positivity, complex linearity, normalization, and left invariance pass from $\nu$ to $m$. Hence [F2] gives Reiter's condition (P1). [F1, F2, F4, construct]

1.2 Suppose $G$ satisfies (P1). By [F3], choose a Reiter net $(f_i)\subseteq\mathcal P$. By [A1] and [F5], the ultrafilter lemma holds. The cluster-point result [F6] gives a left-invariant mean on $L^\infty(G)$, so $G$ is amenable by [F4]. [A1, F3, F4, F5, F6]

1.3 Let $\mu'=c\mu$ for $c>0$. The measures have the same null sets, and $f\mapsto f':=c^{-1}f$ maps $\mathcal P_\mu$ bijectively to $\mathcal P_{\mu'}$. For every compact $Q$, $L_xf'=c^{-1}L_xf$ on the common almost-everywhere classes, so $\Delta_{Q,\mu'}(f')=\Delta_{Q,\mu}(f)$. Thus (P1) is independent of this rescaling. Amenability is likewise normalization-independent by [F4], with $\mu'$ still a left Haar measure by [F7]. [F3, F4, F7, algebra]

2.1 Steps 1.1 and 1.2 prove the two implications for the fixed left Haar measure, and step 1.3 proves normalization independence. Therefore the stated equivalence holds. [step 1.1, step 1.2, step 1.3] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1, gives the amenability, Reiter (P1), and invariant-mean equivalence, printed pp. 452–456. The proof here uses the assigned local UCB-to-Reiter and Reiter-cluster-point lemmas rather than its separate weak-star-density assertion for all $L^1$ probability densities. Thomas, Lecture 20, slides 11–17 (PDF pp. 11–17), provides the amenability/invariant-mean-to-Reiter direction.
