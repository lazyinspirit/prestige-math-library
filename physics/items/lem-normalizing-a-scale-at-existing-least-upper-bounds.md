---
id: lem-normalizing-a-scale-at-existing-least-upper-bounds
kind: lemma
title: Normalizing a scale at existing least upper bounds
status: published
origin: pipeline
deps: [def-reduced-ordinal-products-and-scales, thm-pcf-aleph-omega-plus-one-scale, thm-transfinite-recursion, def-axiom-of-choice, thm-regularity-of-the-alephs, thm-cofinality-basics]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kojman and Shelah, A ZFC Dowker space in aleph omega plus one, 1995 manuscript, Claim 3 and its proof, pp. 4–5"
      url: https://shelah.logic.at/files/180666/609.pdf
---

## Statement

Assume AC. Let $B\subseteq\omega\setminus\{0,1\}$ be infinite and suppose $P=\prod_{n\in B}\aleph_n$ carries a scale $(g_\alpha)_{\alpha<\lambda}$ for $\lambda=\aleph_{\omega+1}$. There is a scale $(f_\alpha)_{\alpha<\lambda}$ on the same $B$ such that, whenever $\delta<\lambda$ has uncountable cofinality and $(f_\alpha)_{\alpha<\delta}$ has a least upper bound in $P$ modulo finite sets, $f_\delta$ is such a least upper bound.

Such a $B$ and input scale exist by the preceding scale theorem. The normalization is conditional on existence of each least upper bound; it does not assert that every uncountable-cofinality initial segment has one. Here an upper bound $u\in P$ means $f_\alpha\le^*u$ for every earlier $\alpha$, and leastness means $u\le^*v$ for every such upper bound $v\in P$.

## Facts & Assumptions

**Given:** AC, $B$, $P$, the scale $g$ and its length $\lambda$ as in the statement.

[F1] A scale is a strict cofinal sequence modulo its ideal ([[def-reduced-ordinal-products-and-scales]]).

[F2] There is an infinite coordinate subset carrying an $\aleph_{\omega+1}$ scale ([[thm-pcf-aleph-omega-plus-one-scale]]).

[F3] $\lambda$ is regular under AC ([[thm-regularity-of-the-alephs]], (b)).

[F4] Fewer than $\lambda$ ordinals below regular $\lambda$ have bounded supremum; successor ordinals have cofinality one ([[thm-cofinality-basics]], (b)–(d)).

[F5] A specified recursion on an ordinal produces its sequence ([[thm-transfinite-recursion]]).

[A1] AC gives a choice function on the nonempty subsets of $P$ ([[def-axiom-of-choice]]).

## Proof

1.1 Fix the choice function of A1. For every $u\in P$ there is an index $\xi<\lambda$ with $u<^*g_\xi$: by F1 first weakly dominate $u$ by a scale term and then use its successor term, which exists below infinite $\lambda$. Choose the least such index when needed. Given fewer than $\lambda$ product functions and a stage $\alpha<\lambda$, the least dominating indices have supremum below $\lambda$ by F3–F4. Thus there is $\beta>\alpha$ below $\lambda$ whose scale term strictly dominates every function in that family, by taking $\beta$ above those indices as well. For the empty family the least eligible index is simply the least $\beta>\alpha$. [F1, F3, F4, A1]

2.1 Define $f$ by the following rule at each $\alpha<\lambda$. The preceding values form a family of size at most $|\alpha|<\lambda$. If $\operatorname{cf}(\alpha)>\omega$ and that family has a least upper bound in $P$, let $f_\alpha$ be the fixed choice from its nonempty set of least-bound representatives. Otherwise set $f_\alpha=g_\beta$ for the least $\beta>\alpha$ strictly dominating all preceding $f$ values, which exists by step 1.1. The sets of representatives are subsets of the set $P$, and the least eligible index is uniquely specified, so F5 implements the rule. Each output belongs to $P$ by construction; in particular at $\alpha=0$ the fallback applies and gives $f_0=g_1$. [step 1.1, F4, F5, A1]

3.1 At a fallback stage, strict domination of all predecessors is part of the rule. At a least-bound stage $\alpha$, F4 implies $\alpha$ is a limit. For every $\gamma<\alpha$ we have $\gamma+1<\alpha$. Once strictness holds for earlier stages, $f_\gamma<^*f_{\gamma+1}\le^*f_\alpha$, and composing outside the union of the two finite exceptional sets gives $f_\gamma<^*f_\alpha$. This proves strictness at each stage by induction: if a first failure existed, the appropriate fallback or least-bound calculation just given would rule it out using only earlier stages. At every successor stage $\alpha=\xi+1$, the fallback applies because its cofinality is one. It gives $f_{\xi+1}=g_\beta$ for some $\beta>\xi+1$, so $g_\xi<^*f_{\xi+1}$. Given $u\in P$, choose $\xi$ with $u\le^*g_\xi$ by F1; then $u<^*f_{\xi+1}$. Hence $f$ is cofinal as well as strict. [step 1.1, step 2.1, F1, F4]

4.1 Whenever the stated uncountable-cofinality initial segment has a least bound in $P$, the first branch of step 2.1 selected a representative of exactly that set of least bounds. Thus the normalization clause holds, without any assertion that the first branch always applies at such limits. Step 3.1 proves that the selected representatives still form a scale on the original $B$. Finally F2 supplies at least one such $B$ and input scale, so the unconditional existence consequence also follows. QED. [step 2.1, step 3.1, F1, F2]
