---
id: lem-transfer-is-independent-of-the-transversal
kind: lemma
title: "Transfer is independent of the transversal"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-transfer-homomorphism-for-a-finite-index-subgroup, lem-coset-membership-and-equality, def-coset, lem-group-homomorphism-basic-properties, def-group-homomorphism, def-index]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group, let $H\le G$ be a subgroup, let $A$ be an abelian
group written multiplicatively, and let $\varphi:H\to A$ be a homomorphism
([[def-transfer-homomorphism-for-a-finite-index-subgroup]]). Let
$\{t_{\alpha}\}_{\alpha\in H\backslash G}$ and
$\{t'_{\alpha}\}_{\alpha\in H\backslash G}$ be two choices of representatives
of the right cosets of $H$ in $G$, and let

$$V(x):=\prod_{\alpha\in H\backslash G}\varphi\bigl(t_{\alpha}\,x\,t_{\alpha x}^{-1}\bigr), \qquad V'(x):=\prod_{\alpha\in H\backslash G}\varphi\bigl(t'_{\alpha}\,x\,t'_{\alpha x}{}^{-1}\bigr)$$

be the two products formed from them, where $\alpha x:=Ht_{\alpha}x$. Then
$V(x)=V'(x)$ for every $x\in G$. In particular the transfer $V_{\varphi}$ is a
well-defined function $G\to A$ depending only on $\varphi$.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, an abelian group $A$, a homomorphism $\varphi:H\to A$, and two transversals $\{t_{\alpha}\}$, $\{t'_{\alpha}\}$ of the right cosets $\alpha\in H\backslash G$ as in [[def-transfer-homomorphism-for-a-finite-index-subgroup]].

[F1] For every $\alpha$ the coset $\alpha x=Ht_{\alpha}x$ is a right coset of $H$, the assignment $\alpha\mapsto\alpha x$ is a permutation of $H\backslash G$, each $t_{\alpha}xt_{\alpha x}^{-1}$ lies in $H$, and the finite product $\prod_{\alpha\in H\backslash G}a_{\alpha}$ of elements of the abelian group $A$ is independent of the order of its factors ([[def-transfer-homomorphism-for-a-finite-index-subgroup]]).

[F2] If $u,v\in G$ represent the same right coset of $H$, that is $Hu=Hv$, then $uv^{-1}\in H$; conversely $uv^{-1}\in H$ implies $Hu=Hv$ ([[lem-coset-membership-and-equality]], [[def-coset]]).

[F3] For all $u,v\in H$ the homomorphism $\varphi$ satisfies $\varphi(uv)=\varphi(u)\varphi(v)$, $\varphi(e)=1$ and $\varphi(u^{-1})=\varphi(u)^{-1}$ ([[lem-group-homomorphism-basic-properties]], [[def-group-homomorphism]]).

[F4] The map $\alpha\mapsto\alpha x$ is a bijection of the finite set $H\backslash G$, so a product indexed by $H\backslash G$ may be reindexed along it ([[def-index]], [[def-transfer-homomorphism-for-a-finite-index-subgroup]]).



## Proof

**Proof technique:** direct.

1.1 For every $\alpha\in H\backslash G$ one has $t'_{\alpha}=h_{\alpha}t_{\alpha}$ for some $h_{\alpha}\in H$: both $t'_{\alpha}$ and $t_{\alpha}$ represent the coset $\alpha$, so $t'_{\alpha}t_{\alpha}^{-1}\in H$ by [F2], and $h_{\alpha}:=t'_{\alpha}t_{\alpha}^{-1}$ is the desired element. [F2, given]

2.1 For $x\in G$ and $\alpha\in H\backslash G$ the product $t'_{\alpha}xt'_{\alpha x}{}^{-1}$ equals $h_{\alpha}\,t_{\alpha}x\,t_{\alpha x}^{-1}\,h_{\alpha x}^{-1}$, because $t'_{\alpha}=h_{\alpha}t_{\alpha}$ and $t'_{\alpha x}=h_{\alpha x}t_{\alpha x}$ by step 1.1; hence $\varphi(t'_{\alpha}xt'_{\alpha x}{}^{-1})=\varphi(h_{\alpha})\,\varphi(t_{\alpha}xt_{\alpha x}^{-1})\,\varphi(h_{\alpha x})^{-1}$ by [F3]. [F3, step 1.1, algebra]

2.2 The reindexing $\alpha\mapsto\alpha x$ is a bijection of $H\backslash G$ by [F4], so $\prod_{\alpha}\varphi(h_{\alpha x})^{-1}=\prod_{\beta}\varphi(h_{\beta})^{-1}=\Bigl(\prod_{\beta}\varphi(h_{\beta})\Bigr)^{-1}$ by [F3]. [F3, F4, step 1.1]

3.1 Consequently $V'(x)=\Bigl(\prod_{\alpha}\varphi(h_{\alpha})\Bigr)\Bigl(\prod_{\alpha}\varphi(t_{\alpha}xt_{\alpha x}^{-1})\Bigr)\Bigl(\prod_{\alpha}\varphi(h_{\alpha x})^{-1}\Bigr)$: the product over $\alpha$ of the three factors of step 2.1 may be rearranged because $A$ is abelian, by [F1]. [F1, step 2.1]

4.1 Therefore $V'(x)=\Bigl(\prod_{\alpha}\varphi(h_{\alpha})\Bigr)\,V(x)\,\Bigl(\prod_{\alpha}\varphi(h_{\alpha})\Bigr)^{-1}=V(x)$, the two outer factors cancelling because multiplication in the abelian group $A$ commutes. [F1, step 3.1, step 2.2, algebra]

5.1 Since $x\in G$ was arbitrary, $V'=V$; the transfer is therefore independent of the choice of transversal. ∎ [step 4.1, given]
