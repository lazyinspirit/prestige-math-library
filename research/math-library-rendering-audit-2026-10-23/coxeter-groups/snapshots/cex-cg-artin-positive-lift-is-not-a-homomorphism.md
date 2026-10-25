---
id: cex-cg-artin-positive-lift-is-not-a-homomorphism
kind: counterexample
title: "The positive lift b_w is not a monoid homomorphism"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 6
deps: [def-cg-artin-monoid-and-group-presentations, lem-cg-artin-presentation-universal-properties-and-coxeter-surjection, thm-cg-reduced-positive-section-and-length-additive-products, def-hh-coxeter-matrix-word-group-and-length, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-group-homomorphism, def-semigroup-and-monoid]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rachael Boyd, Homology of Coxeter and Artin groups (PhD thesis, University of Aberdeen 2018, corrected version)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement refuted

> For every finite Coxeter matrix $(S,m)$ with $S\ne\emptyset$, the positive lift
> $b:W\to A^{+}$, $w\mapsto b_w$, is a monoid homomorphism; that is,
> $b_ub_v=b_{uv}$ for all $u,v\in W$ (and dually, $\gamma\circ b:W\to A$ is a
> group homomorphism).

## Facts & Assumptions

**Given:** The rank-one Coxeter matrix with $S=\{s\}$ and $m(s,s)=1$, the presented group $W$ with its length function $\ell$, and the constructions $S^{*}$, $A^{+}$, $A$, $\gamma$, $\sigma_s$ and the lift $b$ of [[def-cg-artin-monoid-and-group-presentations]], [[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]] and [[thm-cg-reduced-positive-section-and-length-additive-products]].

[F1] A braid pair requires two distinct letters $s\ne t$, and $A^{+}$ is the quotient of $S^{*}$ by the smallest congruence containing the braid pairs, with $[u][v]=[uv]$ and $\sigma_s=[s]$. ([[def-cg-artin-monoid-and-group-presentations]])

[F2] $b_w$ depends only on $w$ and not on the chosen reduced expression, $b_1=1_{A^{+}}=[\varepsilon]$, and $\pi^{+}(b_w)=w$. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F3] The monoid homomorphism $L:A^{+}\to(\mathbb N,+,0)$ satisfies $L([s_1\cdots s_k])=k$, hence is additive with $L(1_{A^{+}})=0$ and $L(b_w)=\ell(w)$. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F4] The same assignment defines a group homomorphism $\deg:A\to\mathbb Z$ with $\deg(\sigma_s)=1$ and $\deg(\gamma(x))=L(x)$ for all $x\in A^{+}$. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F5] $b_ub_v=b_{uv}$ holds if and only if $\ell(uv)=\ell(u)+\ell(v)$. ([[thm-cg-reduced-positive-section-and-length-additive-products]])

[F6] A monoid homomorphism satisfies $f(xy)=f(x)f(y)$ and $f(e)=e'$; a group homomorphism satisfies $f(xy)=f(x)f(y)$ and preserves the identity. ([[def-group-homomorphism]])

## Counterexample

1.1 The rank-one data: since a braid pair requires two distinct letters, the braid-pair set of $(\{s\},m)$ is empty by [F1], so $\equiv^{+}$ is the diagonal and $A^{+}=S^{*}$ is the free monoid on the single generator $s$, with elements $[s^{k}]$ for $k\ge0$ and $[s^{i}]=[s^{j}]$ exactly when $i=j$, because $L([s^{k}])=k$ by [F3]. The relator set of $W$ is $\{s^{2}\}$, so $W=\langle s\mid s^{2}=1\rangle=\{1,s\}$ with $\ell(1)=0$ and $\ell(s)=1$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[thm-hh-coxeter-exchange-deletion-and-faithfulness]]). [F1, F3]

2.1 The positive lifts are $b_1=[\varepsilon]$ (the empty word is a reduced expression of $1$ because $\ell(1)=0$) and $b_s=[s]=\sigma_s$ (the one-letter word is a reduced expression of $s$ because $\ell(s)=1$), by the definition of $b$ and step 1.1. [F2, step 1.1]

3.1 But $b_sb_s=[s][s]=[ss]$ by the product rule of [F1], while $b_{s\cdot s}=b_{s^{2}}=b_1=[\varepsilon]$ since $s^{2}=1$ in $W$; the two are different elements of $A^{+}$, because $L([ss])=2\ne0=L([\varepsilon])$ by [F3]. Hence $b_sb_s\ne b_{s\cdot s}$, so the assignment $b$ is not a monoid homomorphism: it fails to preserve the product $s\cdot s=1$. [F1, F2, F3, F6, step 2.1]

4.1 The same defect appears at the group level: $(\gamma\circ b)(s)^{2}=\gamma([ss])=\sigma_s^{2}$ while $(\gamma\circ b)(s^{2})=\gamma([\varepsilon])=1_A$, and $\sigma_s^{2}\ne1_A$ because $\deg(\sigma_s^{2})=2\ne0=\deg(1_A)$ by [F3] and [F4], a group homomorphism preserving the identity. Thus $\gamma\circ b$ is not a group homomorphism $W\to A$. [F3, F4, F6, step 3.1]

4.2 The failure is not an artefact of the rank-one computation: for every finite Coxeter matrix with $S\ne\emptyset$ and every $s\in S$, $[ss]$ is the class of the word $ss$ in $A^{+}(S,m)$, and its length satisfies $L([ss])=2\ne0=L([\varepsilon])$ by [F3]; combined with $s^{2}=1$ in $W$ and $\ell(s)=1$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]]) this gives $b_sb_s\ne b_{s^{2}}$ for the ambient monoid, and no parabolic reduction is needed. The general theorem records that $b_ub_v=b_{uv}$ holds exactly on the pairs with $\ell(uv)=\ell(u)+\ell(v)$ by [F5], so the refuted statement is obtained by dropping that length hypothesis. [F1, F3, F5, step 3.1]

5.1 Scope and choice: this counterexample is a finite computation in the rank-one system plus the stated supplier clauses; it constructs no topological model, claims nothing about embeddings of $A^{+}$ into $A$, and uses no choice. [given] ∎
