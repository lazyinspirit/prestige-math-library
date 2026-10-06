---
id: thm-direct-method-in-a-reflexive-banach-space
kind: theorem
title: "The direct method in a reflexive Banach space"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-proper-coercive-and-weakly-lower-semicontinuous-functional, lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous, lem-coercivity-makes-every-finite-level-minimising-sequence-bounded, lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence, lem-weak-closedness-keeps-the-direct-method-limit-admissible, lem-liminf-passage-makes-the-weak-limit-a-minimiser, def-reflexive-banach-space, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, thm-norm-closed-convex-iff-weakly-closed, def-infimum, def-weak-convergence-of-nets-and-sequences, lem-dependent-choice-implies-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Theorem 13.1 (variational principle), printed pp. 296-297"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 1, Theorems 2.2 and 2.4, printed pp. 31-32"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Sections 4.1-4.2, printed pp. 26-28"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the ultrafilter lemma, DC and HB. Let $X$ be a real reflexive Banach space ([[def-reflexive-banach-space]]), let $A\subseteq X$ be nonempty and weakly sequentially closed ([[def-weak-convergence-of-nets-and-sequences]]), and let $I:A\to(-\infty,+\infty]$ be proper, coercive on $A$ and weakly sequentially lower semicontinuous on $A$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). Then $I$ attains its infimum on $A$: there exists $u_0\in A$ with $I(u_0)=\inf_A I$. The admissible set may be taken convex and norm closed in $X$, by [[thm-norm-closed-convex-iff-weakly-closed]].

## Facts & Assumptions

**Given:** The ultrafilter lemma ([[def-ultrafilter-extension-principle]]), the principle of dependent choice ([[def-dependent-choice]]) and HB ([[def-hahn-banach-extension-principle-relative]]); a real reflexive Banach space $X$ ([[def-reflexive-banach-space]]); a nonempty set $A\subseteq X$ that is weakly sequentially closed; and a proper extended-real functional $I:A\to(-\infty,+\infty]$, coercive on $A$ and weakly sequentially lower semicontinuous on $A$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). Write $\alpha:=\inf_AI$ in the complete extended order specified by [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]].

[F1] Properness gives $\alpha<+\infty$; moreover for every real $\varepsilon>0$ there is $u\in A$ with $I(u)<\alpha+\varepsilon$ when $\alpha\in\mathbb R$, and when $\alpha=-\infty$ there is for every $M\in\mathbb R$ a point $u\in A$ with $I(u)\le M$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]], [[def-infimum]]).

[F2] Coercivity bounds finite-level sequences: every sequence $(u_j)\subseteq A$ with $\sup_jI(u_j)<+\infty$ is norm bounded, and in particular every minimising sequence with $I(u_j)\to\inf_AI<+\infty$ is norm bounded ([[lem-coercivity-makes-every-finite-level-minimising-sequence-bounded]]).

[F3] Under the ultrafilter lemma, DC and HB, every norm-bounded sequence in a real reflexive Banach space has a subsequence converging weakly to a point of $X$ ([[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]).

[F4] If $A$ is weakly sequentially closed, $(u_j)\subseteq A$ and $u_j\rightharpoonup u$, then $u\in A$ ([[lem-weak-closedness-keeps-the-direct-method-limit-admissible]]).

[F5] If $(u_j)\subseteq A$ is minimising, $u_j\rightharpoonup u\in A$ and $I$ is weakly sequentially lower semicontinuous at $u$, then $I(u)=\inf_AI$ ([[lem-liminf-passage-makes-the-weak-limit-a-minimiser]]).

[F6] Dependent choice implies countable choice, so a countable sequence of independent nonempty selections can be made along $\mathbb N$ ([[lem-dependent-choice-implies-countable-choice]]).

[F7] Under HB, which is assumed here, a convex subset of a real or complex normed space is norm closed if and only if it is weakly closed ([[thm-norm-closed-convex-iff-weakly-closed]]). A weakly closed set is weakly sequentially closed, so an admissible set that is convex and norm closed satisfies the theorem hypothesis under the stated choice principles.

[F8] Under HB and Countable Choice (supplied here by DC), in the convex case the weak-lower-semicontinuity hypothesis of the theorem is verified by convexity plus norm lower semicontinuity: a convex norm-lower-semicontinuous functional on a convex set is weakly sequentially lower semicontinuous ([[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]]). This is the role of that lemma for the present theorem and for its convex applications.

## Proof

**Proof technique:** direct, by selecting a minimising sequence, extracting a weakly convergent subsequence and passing to the limit.

1.1 A minimising sequence. If $\alpha\in\mathbb R$, [F1] supplies for each $j\in\mathbb N$ a point $u_j\in A$ with $I(u_j)<\alpha+2^{-j}$; if $\alpha=-\infty$, [F1] supplies $u_j\in A$ with $I(u_j)\le-j$. In both cases $(u_j)\subseteq A$ satisfies $I(u_j)\to\alpha$, so it is a minimising sequence. The countably many selections are licensed by [F6]. [F1, F6, given]

2.1 Boundedness. In the finite case $I(u_j)<\alpha+1<+\infty$ for all $j$; in the case $\alpha=-\infty$ one has $I(u_j)\le0$ for all $j$. Hence $\sup_jI(u_j)<+\infty$, and [F2] makes $(u_j)$ norm bounded. [F2, step 1.1]

3.1 A weakly convergent subsequence with admissible limit. By [F3] there are a strictly increasing sequence $j_k$ and a point $u_0\in X$ with $u_{j_k}\rightharpoonup u_0$; the subsequence lies in $A$, which is weakly sequentially closed, so [F4] gives $u_0\in A$. [F3, F4, step 2.1]

4.1 The limit is a minimiser, and the convex special case. The subsequence $(u_{j_k})$ is still minimising, $I(u_{j_k})\to\alpha$, and $u_{j_k}\rightharpoonup u_0\in A$, so the weak lower semicontinuity hypothesis and [F5] give $I(u_0)=\inf_AI$: the infimum is attained on $A$. If in addition $A$ is convex and closed in the norm topology, the HB-form of [F7] and the weak-closed-to-weakly-sequentially-closed passage make $A$ weakly sequentially closed, so the theorem applies to that admissible set; and in the convex case the weak lower semicontinuity hypothesis itself is supplied by [F8] whenever $I$ is convex and norm lower semicontinuous. No stronger choice principle than the HB assumed here is needed for these clauses. [F5, F7, F8, step 3.1] ∎ 