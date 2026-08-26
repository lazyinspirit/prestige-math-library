---
id: thm-harnack-convergence-principle-for-plane-harmonic-functions
kind: theorem
title: "An increasing harmonic sequence converges locally uniformly to a harmonic limit or diverges to +infinity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-harnack-inequality-on-a-disc, thm-mean-value-property-for-plane-harmonic-functions,
       thm-converse-mean-value-property-for-plane-functions,
       thm-open-connected-subsets-of-rn-are-polygonally-connected,
       thm-monotone-convergence, thm-reals-cauchy-complete]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Harnack theorem"
      url: "https://web.archive.org/web/20230331225855if_/https://encyclopediaofmath.org/wiki/Harnack_theorem"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $(u_n)$ be an increasing sequence of harmonic functions on a complex domain
$\Omega$. Then exactly one of the following holds:

1. $u_n(z)\to+\infty$ for every $z\in\Omega$;
2. there is a harmonic function $u$ on $\Omega$ such that $u_n\to u$ locally
   uniformly on $\Omega$.

## Facts & Assumptions

**Given:** An increasing sequence $(u_n)$ of harmonic functions on a complex domain $\Omega$.

[L1] Positive harmonic functions on a disc satisfy the Harnack inequality ([[thm-harnack-inequality-on-a-disc]]).

[L2] Harmonic functions satisfy the mean-value property, and continuous functions with the local mean-value property are harmonic ([[thm-mean-value-property-for-plane-harmonic-functions]], [[thm-converse-mean-value-property-for-plane-functions]]).

[L3] Open connected subsets of $\mathbb R^2$ are polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

[L4] Every increasing real sequence bounded above converges, and every real Cauchy sequence converges ([[thm-monotone-convergence]], [[thm-reals-cauchy-complete]]).

## Proof

**Proof technique:** direct.

1.1 If $u_n(z)\to+\infty$ for every $z\in\Omega$, then the first alternative holds and there is nothing to prove. Assume from now on that some $a\in\Omega$ has $(u_n(a))$ bounded above; since the sequence is increasing, [L4] says that $u_n(a)$ converges to a finite real $L$. [given, L4]

2.1 Let $K\subseteq\Omega$ be compact. By [L3], every point of $K$ can be joined to $a$ by a polygonal path in $\Omega$; compactness yields finitely many discs with compact closure in $\Omega$ whose overlaps form a chain from $a$ to a neighbourhood of each point of $K$. Applying [L1] to the positive harmonic differences $u_m-u_n$ on each disc, one after another along the chain, bounds $\sup_K(u_m-u_n)$ by a constant multiple of $(u_m(a)-u_n(a))$. Since the latter tends to $0$, the sequence is uniformly Cauchy on $K$. [step 1.1, L1, L3]

3.1 By step 2.1, $(u_n(z))$ is Cauchy for every $z$, so [L4] defines $u(z):=\lim_nu_n(z)$. The same uniform-Cauchy estimate makes the convergence locally uniform, hence $u$ is continuous. Passing the circle mean-value identity of [L2] to the limit on every closed disc inside $\Omega$ shows that $u$ still has the local mean-value property, and [L2] makes $u$ harmonic. [step 2.1, L2, L4]

4.1 Thus, if the first alternative fails, the second holds. The two alternatives are exclusive because a locally uniform limit on any disc is finite there. [step 1.1, step 3.1] ∎
