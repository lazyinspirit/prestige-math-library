---
id: lem-easton-head-cc-and-tail-closure
kind: lemma
title: Easton head chain condition and tail closure
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-easton-support-product, def-kappa-closure-distributivity-and-chain-condition, lem-generalized-delta-system-for-small-supports, def-finite-delta-system, thm-cofinality-basics, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, def-aleph-and-beth-hierarchies, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, the head/tail factorization (15.11)-(15.12), printed p.234"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Lemma 54, PDF p.11"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Work in ZFC and assume the Generalized Continuum Hypothesis, that is $2^{\aleph_{\alpha}}=\aleph_{\alpha+1}$
for every ordinal $\alpha$ ([[def-aleph-and-beth-hierarchies]]). Let $F$ be an
Easton function and let $\lambda$ be an infinite regular cardinal. Write
$P(F)$, $P^{\le\lambda}$ and $P^{>\lambda}$ as in [[def-easton-support-product]].
Then:

**(a)** $2^{<\lambda}=\lambda$;

**(b)** $P^{\le\lambda}$ has the $\lambda^{+}$-chain condition, that is, every
antichain of $P^{\le\lambda}$ has cardinality below $\lambda^{+}$
([[def-kappa-closure-distributivity-and-chain-condition]]);

**(c)** $P^{>\lambda}$ is $\lambda^{+}$-closed: every descending sequence
$\langle p_{\xi}:\xi<\delta\rangle$ of conditions of $P^{>\lambda}$ with
$\delta<\lambda^{+}$ has a common lower bound in $P^{>\lambda}$; indeed every
set of at most $\lambda$ pairwise compatible conditions of $P^{>\lambda}$ has a
common lower bound in $P^{>\lambda}$;

**(d)** the factorization $P(F)\cong P^{\le\lambda}\times P^{>\lambda}$ holds:
for a set-sized $F$ it is an isomorphism of the whole orders, and for a class
Easton function it holds for every set-sized condition, with $P^{\le\lambda}$ a
set.

## Facts & Assumptions
**Given:** ZFC + GCH, an Easton function $F$, an infinite regular cardinal $\lambda$, and the Easton product $P(F)$ with its head $P^{\le\lambda}$ and tail $P^{>\lambda}$.

[F1] Every $\theta$-sized family of sets of cardinality below $\kappa$ has a $\theta$-sized delta subsystem, provided $\kappa$ is infinite, $\theta>\kappa$ is regular and $|\alpha|^{<\kappa}<\theta$ for every $\alpha<\theta$; in particular, for regular $\kappa$ and $\rho=2^{<\kappa}$, every family of $\rho^{+}$ many below-$\kappa$ subsets has a $\rho^{+}$-sized delta subsystem. ([[lem-generalized-delta-system-for-small-supports]])

[F2] A delta system with root $r$ is a family whose pairwise intersections are exactly $r$. ([[def-finite-delta-system]])

[F3] $P$ is $\kappa$-cc when every antichain of $P$ has cardinality below $\kappa$, and $\kappa$-closed when every descending sequence of length below $\kappa$ has a common lower bound, $\kappa$ an infinite regular cardinal. ([[def-kappa-closure-distributivity-and-chain-condition]])

[F4] $\mu^{+}$ is the least cardinal above $\mu$, and $2^{<\lambda}$ is the supremum of the $2^{\mu}$ with $\mu<\lambda$; each infinite cardinal is an $\aleph$. ([[def-aleph-and-beth-hierarchies]])

[F5] For a regular infinite $\lambda$ one has $\operatorname{cf}(\lambda)=\lambda$, so the supremum of fewer than $\lambda$ ordinals below $\lambda$ is again below $\lambda$. ([[thm-cofinality-basics]])

[F6] For cardinals $\nu\le\mu$ with $\mu$ infinite, $\mu\oplus\nu=\mu$; also $\mu\otimes\nu=\mu$ when $\nu\ne0$, whereas $\mu\otimes0=0$. ([[cor-cardinal-absorption]])

[F7] Cardinal exponentiation satisfies $\kappa^{\mu\oplus\nu}=\kappa^{\mu}\otimes\kappa^{\nu}$ and $(\kappa^{\mu})^{\nu}=\kappa^{\mu\otimes\nu}$, and is monotone in the base, and in the exponent when the base is nonzero. ([[lem-cardinal-arithmetic-basic-laws]])

[F8] A condition of $P(F)$ is a partial function on triples $(\kappa,\alpha,\beta)$ with $\kappa\in\operatorname{dom}(F)$, $\alpha<\kappa$, $\beta<F(\kappa)$, values in $\{0,1\}$, with fewer than $\gamma$ triples having first coordinate $\le\gamma$ for every infinite regular $\gamma$; stronger conditions extend functions, and $p\mapsto(p^{\le\lambda},p^{>\lambda})$ splits conditions by first coordinate. ([[def-easton-support-product]])

[F9] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

**Proof technique:** direct.

## Proof

1.1 Under GCH every infinite cardinal $\mu$ satisfies $2^{\mu}=\mu^{+}$, by [F4]. If $\lambda=\aleph_0$, then $2^{<\lambda}=\sup_{n<\omega}2^n=\aleph_0=\lambda$. If $\lambda=\nu^{+}$ for an infinite cardinal $\nu$, then GCH gives $2^{\nu}=\lambda$ and monotonicity gives $2^{\mu}\le\lambda$ for every $\mu<\lambda$, so again $2^{<\lambda}=\lambda$. If $\lambda$ is a limit cardinal above $\aleph_0$, the successor cardinals $\mu^{+}$ for infinite $\mu<\lambda$ are cofinal in $\lambda$, while each is at most $\lambda$; thus $2^{<\lambda}=\sup_{\mu<\lambda}\mu^{+}=\lambda$. These cases prove clause (a) for every infinite regular $\lambda$. [F4, F7, given]

1.2 Now let $\langle p_{\xi}:\xi<\delta\rangle$ be a descending sequence in $P^{>\lambda}$ with $\delta<\lambda^{+}$, and put $p=\bigcup_{\xi<\delta}p_{\xi}$. The conditions form a $\subseteq$-chain of functions, so $p$ is a function with values in $\{0,1\}$, and every triple in its domain has first coordinate $>\lambda$. Fix an infinite regular $\gamma>\lambda$ and let $A_{\xi}=\{(\kappa,\alpha,\beta)\in\operatorname{dom}(p_{\xi}):\kappa\le\gamma\}$. Each $|A_{\xi}|<\gamma$ by [F8], and $|\delta|\le\lambda<\gamma$. Regularity of $\gamma$ gives $\sigma:=\sup_{\xi<\delta}|A_{\xi}|<\gamma$, so $|\bigcup_{\xi<\delta}A_{\xi}|\le|\delta|\cdot\sigma<\gamma$ (with the finite or empty cases immediate). For $\gamma\le\lambda$ the set in question is empty. Hence $p\in P^{>\lambda}$ and $p$ extends every $p_{\xi}$, so $P^{>\lambda}$ is $\lambda^{+}$-closed, clause (c), in the sense of [F3]; the same cardinal bound applies to a pairwise compatible family of at most $\lambda$ conditions, whose union is a function because the members agree on overlaps. [F3, F5, F6, F8]

2.1 Consequently $2^{|r|}\le 2^{<\lambda}=\lambda$ for every set $r$ with $|r|<\lambda$, and $\lambda\otimes\lambda=\lambda$ by [F6]; with Choice [F9], this bounds a union of $\lambda$ many sets each of size at most $\lambda$ by $\lambda$. [F6, F9, step 1.1]

2.2 We prove clause (b) by contraposition. Suppose $W\subseteq P^{\le\lambda}$ is an antichain with $|W|=\lambda^{+}$. By the support condition of [F8] at the regular cardinal $\lambda$, every $p\in W$ has $|\operatorname{dom}(p)|<\lambda$. For any fixed domain there are at most $2^{<\lambda}=\lambda$ bit assignments. Thus there are $\lambda^+$ distinct domains, since otherwise Choice [F9] and $\lambda\otimes\lambda=\lambda$ would bound $|W|$ by $\lambda$. Select one condition for each distinct domain. Now [F1] applies with $\kappa=\lambda$, $\rho=2^{<\lambda}=\lambda$ of step 1.1 and yields $W'\subseteq W$ of size $\lambda^{+}$ and a root $r$ with $\operatorname{dom}(p)\cap\operatorname{dom}(q)=r$ for distinct $p,q\in W'$, in the sense of [F2]. [F1, F2, F8, F9, step 1.1]

3.1 The map $p\mapsto p\restriction r$ takes at most $2^{|r|}\le\lambda$ values on $W'$ by step 2.1, and a union of $\lambda$ many classes each of size at most $\lambda$ has size at most $\lambda$; since $|W'|=\lambda^{+}>\lambda$, two distinct $p,q\in W'$ have $p\restriction r=q\restriction r$. [step 2.1, step 2.2]

4.1 For such $p,q$ the union $p\cup q$ is a function, because the domains meet exactly in $r$ and the two agree on $r$; all its triples still have first coordinate $\le\lambda$. Let $\gamma$ be an infinite regular cardinal with $\gamma\le\lambda$ and let $A_{p}=\{(\kappa,\alpha,\beta)\in\operatorname{dom}(p):\kappa\le\gamma\}$ and similarly $A_{q}$. By [F8] both have cardinality below $\gamma$, and $|A_{p}\cup A_{q}|\le|A_{p}|\oplus|A_{q}|<\gamma$ by [F6], the case of finite cardinalities being immediate since $\gamma$ is infinite. Hence $p\cup q$ satisfies the support condition at every regular $\gamma\le\lambda$, and the bound at $\lambda$ also implies the bound at every regular $\gamma>\lambda$. Thus it is a condition of $P^{\le\lambda}$ extending both $p$ and $q$. This contradicts the antichain property of $W$, so no antichain of $P^{\le\lambda}$ has cardinality $\lambda^{+}$: every antichain has cardinality below $\lambda^{+}$, which is clause (b) by [F3]. [F3, F6, F8, step 2.1, step 3.1]

5.1 Every condition of $P(F)$ splits uniquely as $p=p^{\le\lambda}\cup p^{>\lambda}$ with each restriction supported on its respective side of $\lambda$; since the support condition at a regular $\gamma$ refers only to triples with $\kappa\le\gamma$, the two parts are conditions of $P^{\le\lambda}$ and $P^{>\lambda}$ respectively, every head-tail pair has disjoint domains and its union satisfies each support bound because the union of two sets of size below an infinite regular $\gamma$ still has size below $\gamma$, and the extension order is preserved in both directions. Hence $p\mapsto(p^{\le\lambda},p^{>\lambda})$ is an isomorphism $P(F)\cong P^{\le\lambda}\times P^{>\lambda}$ when $\operatorname{dom}(F)$ is a set, and for a class Easton function the same computation applies to each set-sized condition; $P^{\le\lambda}$ is then a set, since its conditions are partial functions on the set of triples with $\kappa\le\lambda$ of size below $\lambda$. This is clause (d) and completes the proof. [F8, given] ∎ [step 1.1, step 2.2, step 4.1, step 1.2]
