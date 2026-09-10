---
id: thm-continuous-mapping-theorem
kind: theorem
title: Continuous mapping theorem
deps: ["thm-portmanteau-theorem", "lem-laws-commute-with-measurable-maps", "def-metric-continuity"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 3.2; local closed-preimage argument
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let S,T be metric spaces, $g:S\to T$ measurable, and $\mu_n\Rightarrow\mu$. If the discontinuity set $D_g$ is $\mu$-null, then $g_*\mu_n\Rightarrow g_*\mu$. Consequently $X_n\Rightarrow X$ implies $g(X_n)\Rightarrow g(X)$ whenever $P_X(D_g)=0$.

## Facts & Assumptions

[F1] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F2] [[lem-laws-commute-with-measurable-maps]]: Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, and let
$g:(S,\Sigma)\to(T,\Tau)$ be measurable. Then $g\circ X$ is a random element and
for every $B\in\Tau$,
$$\mathbb P_{g\circ X}(B)=\mathbb P_X(g^{-1}(B)).$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 For $r\ge1$ let $U_r$ be the union of all open subsets V of S such that the diameter of g(V) is less than 1/r. The continuity set is $\bigcap_r U_r$: continuity at x supplies such a neighborhood by making all image points within 1/(3r) of g(x); conversely a neighborhood with image diameter below $\varepsilon$ forces $d(g(y),g(x))<\varepsilon$ there. Thus $D_g$ is Borel. [given, algebra]

1.2 If F is closed in T and x lies outside $g^{-1}(F)\cup D_g$, continuity at x and the open complement of F give a neighborhood disjoint from $g^{-1}(F)$. Hence $\overline{g^{-1}(F)}\subseteq g^{-1}(F)\cup D_g$. Applying F1 to this closed preimage closure gives $\limsup_n\mu_n(g^{-1}(F))\le\mu(\overline{g^{-1}(F)})\le\mu(g^{-1}(F))$. [F1]

2.1 The inequality in step 1.2 is the closed-set bound for the pushforward probabilities, so F1 gives their weak convergence. F2 identifies these pushforwards with the laws of g($X_n$) and g(X), proving the random-element formulation. [F1, F2, step 1.2] ∎
