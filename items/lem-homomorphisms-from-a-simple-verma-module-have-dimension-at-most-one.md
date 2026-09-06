---
id: lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one
kind: lemma
title: "Homomorphisms from a simple Verma module have dimension at most one"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-nonzero-verma-homomorphism-is-injective, prop-formal-character-of-a-verma-module]
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.14(iii)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

If $M(\mu)$ is simple, then $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),M(\lambda))\leq1$.

## Facts & Assumptions

**Given:** Injectivity [[lem-a-nonzero-verma-homomorphism-is-injective]] and the formal character [[prop-formal-character-of-a-verma-module]].

## Proof

**Proof technique:** contradiction.

1.1 Suppose that $f,g:M(\mu)\to M(\lambda)$ are linearly independent. They are injective. Every endomorphism of $M(\mu)$ is scalar: it preserves the one-dimensional highest-weight space (visible in the character formula), and that highest vector generates the module. If the two simple images meet nontrivially, their intersection equals both images, so $f^{-1}g$ is such an endomorphism, contradicting independence. Thus $f(M(\mu))\oplus g(M(\mu))$ embeds in $M(\lambda)$. [given, assume-contra]

2.1 Write $\delta=\lambda-\mu\in Q^+$, since a nonzero map sends the highest vector to a target weight vector, and put $d=\operatorname{ht}(\delta)$. List the positive roots as $\alpha_1,\ldots,\alpha_m$ and set $h_j=\operatorname{ht}(\alpha_j)>0$. By the character formula, the sum of weight-space dimensions at heights at most $N$ below any Verma highest weight is $$D(N)=\#\{(k_1,\ldots,k_m)\in\mathbb Z_{\ge0}^m:\textstyle\sum_j h_jk_j\le N\}.$$ Both copies of the source's height-at-most-$N$ subspace map into the target's height-at-most-$N+d$ subspace, giving $2D(N)\le D(N+d)$. To compare these counts, let $S_t=\{x\in\mathbb R_{\ge0}^m:\sum_jh_jx_j\le t\}$ and $H=\sum_jh_j$. The union of unit cubes based at the integer points counted by $D(N)$ contains $S_N$ and is contained in $S_{N+H}$, up to boundaries of volume zero. Since $\operatorname{vol}(S_t)=t^m/(m!\prod_jh_j)$, this yields $D(N)\sim N^m/(m!\prod_jh_j)$ and hence $D(N+d)/D(N)\to1$. If $m=0$, both counts are instead exactly $1$. In either case $2D(N)\le D(N+d)$ is impossible for large $N$. [step 1.1, algebra, discharge-contradiction] ∎
