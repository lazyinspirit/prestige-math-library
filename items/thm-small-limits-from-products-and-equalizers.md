---
id: thm-small-limits-from-products-and-equalizers
kind: theorem
title: "Every small limit can be constructed as an equalizer between products over the objects and arrows of the index category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-products-and-coproducts, def-equalizers-and-coequalizers, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.11 and Remark 3.2.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $D:\mathcal J\to\mathcal C$ be small. If the products

$$P=\prod_{j\in\operatorname{Ob}\mathcal J}D(j),\qquad Q=\prod_{u:j\to k}D(k)$$

and the equalizer of the maps $s,t:P\rightrightarrows Q$ defined by
$q_us=D(u)p_j$ and $q_ut=p_k$ exist, then that equalizer is a limit of $D$.

## Facts & Assumptions

**Given:** The displayed products and an equalizer $e:L\to P$ of $s,t$.

[F1] A product represents families of arrows into its factors
([[def-products-and-coproducts]]).

[F2] An equalizer represents arrows on which its parallel pair agrees
([[def-equalizers-and-coequalizers]]).

[F3] A small diagram has sets of objects and arrows
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F4] A limit represents cones by unique mediating arrows
([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** construction.

1.1 By [F3] the two displayed families are set-indexed. By [F1], the stated coordinate equations define unique maps $s,t:P\to Q$. [F1, F3]

2.1 Put $\lambda_j=p_je$. Since $se=te$, equality of the $u$-coordinates says $D(u)\lambda_j=\lambda_k$ for every $u:j\to k$. Thus $\lambda$ is a cone. [F2, step 1.1]

2.2 Given a cone $\xi_j:X\to D(j)$, [F1] supplies a unique $a:X\to P$ with $p_ja=\xi_j$. Its cone equations imply $q_usa=D(u)\xi_j=\xi_k=q_uta$ for all $u$, so product uniqueness gives $sa=ta$. [F1, given, step 1.1]

3.1 By [F2], $a$ factors uniquely as $a=eh$ with $h:X\to L$. Then $\lambda_jh=p_jeh=\xi_j$, so $h$ is a cone morphism. [F2, step 2.1, step 2.2]

4.1 If $h'$ has the same leg equations, product uniqueness gives $eh'=a=eh$; equalizer uniqueness gives $h'=h$. [F1, F2, step 3.1]

5.1 Steps 2.1, 2.2, 3.1, and 4.1 are exactly [F4], so $(L,\lambda)$ is a limit. If $\mathcal J$ is empty, both products are terminal objects, $s=t$, and their equalizer is isomorphic to the terminal object, so the construction still applies. [F1, F2, F4, step 2.1, step 3.1, step 4.1] ∎
