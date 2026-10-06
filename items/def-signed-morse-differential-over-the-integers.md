---
id: def-signed-morse-differential-over-the-integers
kind: definition
title: "The signed Morse differential over the integers"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-countable-choice, def-orientation-line-of-a-morse-critical-point, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-unparametrized-morse-trajectory-moduli-space, cor-index-one-trajectory-moduli-spaces-are-finite, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-mod-two-morse-differential, def-integers, def-left-and-right-modules]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3, printed pp. 70-71 (integer coefficients $N_X(a,b)$ from oriented moduli spaces)"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.5, Proposition 2.5.1 and Remark 2.5.3(a), printed pp. 63-66 ($\\partial\\langle p|=\\epsilon_k\\sum_q\\langle p|q\\rangle\\langle q|$; the geometric signed count $n(p,q)$)"
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Theorem 2.11 and Sec. 2.8, printed pp. 69-73 ($\\partial x=\\sum_y n(x,y)y$)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 8, Definition 8.2, printed pp. 69-70 (the integral Morse complex and characteristic signs)"
dependency_level: 6
---

## Definition

Let $(f,X)$ be Morse--Smale on a closed manifold, fix an orientation $or_s$ of $W^u(s)$ for every critical point $s$ ([[def-orientation-line-of-a-morse-critical-point]]), and let $\epsilon(\gamma)\in\{\pm1\}$ be the comparison sign of [[lem-unstable-orientations-induce-trajectory-moduli-orientations]]. The **integral Morse chain group** $CM_k(f,X;\mathbb Z)$ is the free $\mathbb Z$-module with basis $\operatorname{Crit}_k(f)$ ([[def-integers]], [[def-left-and-right-modules]]; the basis is finite by [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]), and the **signed Morse differential** is the $\mathbb Z$-linear map $\partial_k:CM_k(f,X;\mathbb Z)\to CM_{k-1}(f,X;\mathbb Z)$ defined on basis elements by
$$\partial_k p:=\sum_{q\in\operatorname{Crit}_{k-1}(f)}\Bigl(\sum_{\gamma\in\mathcal M(p,q)}\epsilon(\gamma)\Bigr)q.$$
Both sums are finite — the outer one because the critical set is finite and the inner one by [[cor-index-one-trajectory-moduli-spaces-are-finite]] — and $\partial_k$ depends on the orientation choices $or_s$. Reducing all coefficients modulo two recovers [[def-mod-two-morse-differential]].

**Choice hypotheses.** The inner sums are indexed by the zero-dimensional
moduli spaces $\mathcal M(p,q)$ with $\lambda(p)-\lambda(q)=1$
([[def-unparametrized-morse-trajectory-moduli-space]]), whose finiteness
[[cor-index-one-trajectory-moduli-spaces-are-finite]] is established under the
Axiom of Choice ([[def-axiom-of-choice]]), and the comparison signs are supplied
under $\mathrm{AC}_\omega$ by
[[lem-unstable-orientations-induce-trajectory-moduli-orientations]]
([[def-countable-choice]]). The bridge
[[thm-choice-implies-dependent-implies-countable-choice]] is therefore part of
the hypothesis package: assuming AC, as the finiteness corollary does, also
supplies the $\mathrm{AC}_\omega$ used by the orientation lemma. For a fixed
$p$ the definition counts only index-$k-1$ critical points; larger positive index drops may carry trajectories but are not counted; the outer sum is over the finite
critical set, and each inner sum is finite, so the displayed coefficient of $q$
is an integer. The free-module property determines the linear extension
uniquely. Replacing an orientation $or_s$ by its opposite changes the signs by
the reversal clause of the orientation lemma, so the integral differential is
not canonical without the orientation data; reducing modulo two makes all signs
$+1$ and recovers the mod-two differential of
[[def-mod-two-morse-differential]], which independently of orientations counts
the same finite sets.
