---
id: lem-kernel-matching-and-index-additivity-for-unbubbled-strip-breaking
kind: lemma
title: "Actual kernel matching and index additivity along unbubbled strip breaking"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation, lem-product-integrable-transverse-strip-end-exponential-asymptotics, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert Lipshitz, A cylindrical reformulation of Heegaard Floer homology"
      url: "https://arxiv.org/abs/math/0502404"
      locator: "Appendix A linear gluing; actual nearby-solution kernel matching is proved below"
---

## Statement

Assume Countable Choice and the actual bounded-energy zero-marked sequence and regular limiting geometry of the bounded-energy collar-openness lemma. Pass to the actual unbubbled breaking subsequence there, with its finitely many nonconstant regular levels $v_1,\ldots,v_M$ and translations $q_{j,n}$. Let $D_n$ be the actual $H^1\to L^2$ strip linearization at $u_n$, and $D_j$ that at $v_j$. For all sufficiently large $n$ there are actual real linear isomorphisms
$$\Gamma_n:\bigoplus_{j=1}^M\ker D_j\longrightarrow\ker D_n,$$
with uniformly bounded norms and inverse norms. They are obtained by cutting off and translating component kernel sections, followed by the actual projection $I-Q_nD_n$ using the constructed nearby-solution right inverse. Their difference in operator norm from that cutoff-and-translation map tends to zero. Hence
$$\operatorname{ind}_{\mathbb R}D_n=\sum_{j=1}^M\operatorname{ind}_{\mathbb R}D_j.$$
These are actual operator indices, before longitudinal translation quotient. No identification with a Whitney-class, domain, Euler-measure or relative-grading index is used.

Each level has positive actual index. Thus a sequence of actual index-one strips can have only one level. A sequence of actual index-two strips has at most two levels, and if it has two, each has index one. This assertion does not by itself prove finiteness of the translation quotients or identify the smooth compactification collars.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual breaking sequence, common exact product charts, all-strip regular limiting path, fixed energy bound and zero marked degrees in the statement. Norms and identifications are those constructed in the bounded-energy collar-openness lemma.

[F1] [[lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation]] constructs fixed component right inverses $Q_j$, uniformly bounded actual $Q_n$, bundle identifications $T_{j,n}$, and real cutoffs $\eta_{j,n}$ with $\sum_j\eta_{j,n}^2=1$. They have transition derivatives tending to zero, fixed-core operator-comparison errors tending to zero, exact matching outside those cores, and overlap regions receding along both adjacent component tails.

[F2] [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] gives finite-dimensional component and nearby kernels and their actual smooth higher-regularity agreement. [[lem-product-integrable-transverse-strip-end-exponential-asymptotics]] gives all-order exponential decay for each actual component map, hence its longitudinal derivative is an $H^1$ section.

## Proof

1.1 Let $K=\bigoplus_j\ker D_j$, with its sum $H^1$ norm, and let $\Pi_j=I-Q_jD_j$, a bounded projection onto the $j$th kernel. Let $P_n=I-Q_nD_n$. By [F1], $D_nQ_n=I$ and the right-inverse norms are uniformly bounded. The norms of $D_n:H^1\to L^2$ are also uniformly bounded: on the finitely many translated fixed cores all actual map and coefficient derivatives converge smoothly; elsewhere the maps lie in exact generator charts and the operator is exactly $D_0$. Thus $P_n$ are uniformly bounded projections onto the closed spaces $\ker D_n$. Define $A_n:K\to H^1(u_n^*TX)$ by $A_nk=\sum_j\eta_{j,n}T_{j,n}k_j$, with the translations in [F1]. Define $S_n:H^1(u_n^*TX)\to K$ by cutting a section with $\eta_{j,n}$, identifying and translating it to level $j$, extending by zero, and applying $\Pi_j$. The cut sections are in the component $H^1$ boundary domains, since the cutoffs vanish smoothly before each finite supporting-region endpoint; the unbounded outer tails need no zero extension there. All these maps have uniform bounds by the weak product rule and the bounded identifications in [F1]. [F1, F2, given, construct, algebra]

2.1 Put $\kappa_n=\epsilon_n+R_n^{-1}\to0$ with the notation of [F1]. The component kernel equation and product rule give $\|D_nA_n\|_{K\to L^2}\le C\kappa_n$. Set $\Gamma_n=P_nA_n$. Then $D_n\Gamma_n=0$ and $\|\Gamma_n-A_n\|\le C\kappa_n$. We also have $S_nA_n\to I_K$ in operator norm. For its diagonal term, cutting twice gives $\Pi_j(\eta_{j,n}^2k_j)$ in level coordinates. Its difference from $k_j$ tends to zero in $H^1$, because the omitted part recedes to infinity along that component's ends and every $k_j$ is $H^1$; the derivative of the cutoff is bounded and tends to zero. Uniformity on the component kernel unit ball follows from its finite dimension: apply this tail convergence to a fixed finite basis and bound the coefficients by the finite-dimensional norm equivalence. Every off-diagonal term is supported in a neighboring cutoff overlap and is the corresponding other component kernel tail, with the canonical identity identification in the common generator chart. Its $H^1$ norm tends to zero by the same finite-basis tail argument. Nonadjacent cutoffs do not overlap. Applying the bounded $\Pi_j$ preserves convergence. Hence $S_n\Gamma_n\to I_K$ as well. For large $n$ its Neumann inverse exists, so $\Gamma_n$ is injective and has a uniform lower norm bound. [F1, F2, step 1.1, construct, algebra]

3.1 To prove onto, let $\xi\in\ker D_n$ and cut it into component sections $\xi_j$ by the same operations defining $S_n$. The actual intertwining error and cutoff commutator in [F1] give $$\|D_j\xi_j\|_{L^2}\le C\kappa_n\|\xi\|_{H^1}.$$ Therefore $\|\xi_j-\Pi_j\xi_j\|_{H^1}=\|Q_jD_j\xi_j\|_{H^1}\le C\kappa_n\|\xi\|_{H^1}$. Reconstructing with the outer cutoffs and identifications uses their exact squared partition of unity, and gives $\|\xi-A_nS_n\xi\|\le C\kappa_n\|\xi\|$. Apply the uniformly bounded $P_n$, using $P_n\xi=\xi$, to get $\|\xi-\Gamma_nS_n\xi\|\le C\kappa_n\|\xi\|$. The closed Hilbert space $\ker D_n$ is complete, so $\Gamma_nS_n$ on it is invertible by its Neumann series for large $n$. Its image lies in the image of $\Gamma_n$, proving onto. Together with step 2.1 this proves the asserted isomorphism and uniform bounds. The component and nearby operators are onto by [F1], so their real indices are their kernel dimensions. This proves the displayed index sum. No abstract index-excision or homotopy-class identity was assumed. [F1, step 1.1, step 2.1, construct, algebra]

4.1 The autonomous longitudinal translation of each level differentiates to a kernel section $\partial_sv_j$, since the strip equation coefficients depend on $t,x$ and not on $s$. It lies in $H^1$ by [F2] and the smooth compact core. It is nonzero: if $v_{j,s}=0$, the equation forces $v_{j,t}=0$, contradicting that the level is nonconstant. Each regular Fredholm $D_j$ consequently has $\operatorname{ind}D_j=\dim\ker D_j\ge1$. The index sum in step 3.1 now gives $M\le\operatorname{ind}D_n$. If that index is one, $M=1$; if it is two, $M\le2$ and two levels must each have index one. Higher Sobolev kernels have the same dimensions by [F2]. These are linear matching and actual breaking restrictions, without a claimed domain-index formula, count or nonlinear collar. [F1, F2, step 3.1, construct, algebra] ∎
