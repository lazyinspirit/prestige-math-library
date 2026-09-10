---
id: lem-scale-tail-suprema-have-prescribed-cofinality
kind: lemma
title: Tail suprema and normalized scales
status: draft
origin: pipeline
deps: [lem-normalizing-a-scale-at-existing-least-upper-bounds, thm-cofinality-basics, def-axiom-of-choice, thm-regularity-of-the-alephs]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kojman and Shelah, A ZFC Dowker space in aleph omega plus one, 1995 manuscript, Claim 4 and proof, p. 5"
      url: https://shelah.logic.at/files/180666/609.pdf
---

## Statement

Assume AC. Fix an infinite $B\subseteq\omega\setminus\{0,1\}$ and a normalized scale $(f_\alpha)_{\alpha<\lambda}$ as above, with $\lambda=\aleph_{\omega+1}$. Let $1\le m\le k<\omega$, $\theta=\aleph_m$ and $T=\{n\in B:n>k\}$. Suppose $(\alpha_\zeta)_{\zeta<\theta}$ is a strictly increasing sequence of indices below $\lambda$, and

$$g_\zeta\in\prod_{n\in T}\aleph_n,\qquad g_\zeta=^*f_{\alpha_\zeta}\restriction T,\qquad g_\zeta(n)<g_\eta(n)\quad(\zeta<\eta<\theta,\ n\in T).$$

Set $\delta=\sup_{\zeta<\theta}\alpha_\zeta$ and $g(n)=\sup_{\zeta<\theta}g_\zeta(n)$ for $n\in T$. Then $\delta<\lambda$, $\operatorname{cf}(\delta)=\theta$, $g\in\prod_{n\in T}\aleph_n$ and $\operatorname{cf}(g(n))=\theta$ for every $n\in T$. Extending $g$ by zero on the finite prefix $B\setminus T$ gives a least upper bound of $(f_\alpha)_{\alpha<\delta}$ in the full product modulo finite sets. In particular $g=^*f_\delta\restriction T$.

## Facts & Assumptions

**Given:** The normalized scale, finite $m,k$, index sequence and typed tail-product representatives of the statement.

[F1] For a normalized scale, an initial segment of uncountable cofinality whose least bound exists in the product has $f_\delta$ as such a bound ([[lem-normalizing-a-scale-at-existing-least-upper-bounds]]).

[F2] Cofinality of a limit ordinal is regular, each cofinal subset bounds its cofinality by its size, and fewer than a regular cardinal's many ordinals below it are bounded ([[thm-cofinality-basics]], (c)–(d)).

[F3] Under AC $\theta$, $\lambda$ and every $\aleph_n$ here are regular ([[thm-regularity-of-the-alephs]], (b)).

[A1] AC is assumed as in [[def-axiom-of-choice]], in particular for the cardinal regularity and normalized scale used here.

## Proof

1.1 Since $\theta<\lambda=\operatorname{cf}(\lambda)$, F2–F3 bound the index sequence's supremum below $\lambda$. It has no last index and is strictly increasing, so every $\alpha_\zeta<\delta$, $\delta$ is a limit and the sequence is cofinal there. Thus $\operatorname{cf}(\delta)\le\theta$ by F2. If a cofinal subset $C\subseteq\delta$ had size less than $\theta$, choose for each $c\in C$ the least $\zeta_c$ with $c<\alpha_{\zeta_c}$. Regularity of $\theta$ bounds these indices by some $\zeta^*<\theta$; then $c<\alpha_{\zeta^*}<\delta$ for every $c\in C$, contradicting cofinality. Therefore $\operatorname{cf}(\delta)=\theta>\omega$. A1 supplies the AC hypothesis of F3; the individual choices just used were least ordinals. [F2, F3, A1, given]

1.2 Fix $n\in T$. Since $n>k\ge m$, $\theta=\aleph_m<\aleph_n=\operatorname{cf}(\aleph_n)$. All $g_\zeta(n)$ lie below $\aleph_n$ by their product type, so F2–F3 give $g(n)<\aleph_n$. Strict increase with limit length $\theta$ makes $g(n)$ a positive limit, and its displayed sequence is cofinal, giving $\operatorname{cf}(g(n))\le\theta$. For any purported cofinal subset of $g(n)$ of size less than $\theta$, choose for each member the least sequence index above it. A common bound on those indices exists by regularity of $\theta$; the value at that bound would bound the purported cofinal subset strictly below $g(n)$, a contradiction. Hence $\operatorname{cf}(g(n))=\theta$ at every tail coordinate. Extending by zero on the finite prefix gives $\bar g\in\prod_{n\in B}\aleph_n$. [F2, F3, given]

2.1 For $\alpha<\delta$, step 1.1 gives $\zeta<\theta$ with $\alpha<\alpha_\zeta$. Strictness of the scale gives $f_\alpha<^*f_{\alpha_\zeta}$, and the supplied eventual equality on the tail and $g_\zeta\le g$ imply $f_\alpha\le^*\bar g$, since the prefix is finite. Thus $\bar g$ is an upper bound of the whole initial segment. Let $u$ be any other product upper bound and put $E=\{n\in T:u(n)<g(n)\}$. For each $n\in E$ choose the least $\zeta_n<\theta$ with $u(n)<g_{\zeta_n}(n)$, which exists by the supremum definition. If $E$ is empty then $g\le u$ on the tail already. Otherwise $E$ is countable and $\theta$ is uncountable regular, so F2–F3 give $\zeta^*<\theta$ at least all the $\zeta_n$. Pointwise monotonicity yields $u(n)<g_{\zeta^*}(n)$ for every $n\in E$. But $g_{\zeta^*}=^*f_{\alpha_{\zeta^*}}\restriction T\le^*u\restriction T$, since $\alpha_{\zeta^*}<\delta$ by step 1.1. Therefore $E$ is contained in the union of those two finite failure sets. In either case $E$ is finite, so $\bar g\le^*u$. This proves leastness. [step 1.1, step 1.2, F1, F2, F3]

3.1 By step 1.1 the index $\delta$ has uncountable cofinality, and step 2.1 supplies a least bound inside the full product. Thus F1 applies and makes $f_\delta$ another least bound. Leastness in each direction gives $\bar g\le^*f_\delta$ and $f_\delta\le^*\bar g$. Outside the union of their finite exceptional sets the values are equal, so $g=^*f_\delta\restriction T$. Steps 1.1–1.2 give all remaining index, product and coordinate-cofinality claims. QED. [step 1.1, step 1.2, step 2.1, F1]
