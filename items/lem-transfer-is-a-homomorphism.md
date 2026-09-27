---
id: lem-transfer-is-a-homomorphism
kind: lemma
title: "Transfer is a homomorphism"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-transfer-homomorphism-for-a-finite-index-subgroup, lem-transfer-is-independent-of-the-transversal, lem-group-homomorphism-basic-properties, def-group-homomorphism, def-coset]
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
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group, $H\le G$, $A$ an abelian group written
multiplicatively, $\varphi:H\to A$ a homomorphism, and $V_{\varphi}:G\to A$ the
transfer of [[def-transfer-homomorphism-for-a-finite-index-subgroup]], formed
with a transversal $\{t_{\alpha}\}$ of the right cosets $H\backslash G$ (the
result is independent of the transversal by
[[lem-transfer-is-independent-of-the-transversal]]). Then

$$V_{\varphi}(xy)=V_{\varphi}(x)\,V_{\varphi}(y)\qquad\text{for all }x,y\in G ;$$

that is, the transfer is a group homomorphism $G\to A$.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, an abelian group $A$, a homomorphism $\varphi:H\to A$, a transversal $\{t_{\alpha}\}_{\alpha\in H\backslash G}$ and the transfer $V(x)=\prod_{\alpha\in H\backslash G}\varphi(t_{\alpha}xt_{\alpha x}^{-1})$ of [[def-transfer-homomorphism-for-a-finite-index-subgroup]].

[F1] The assignment $\alpha\mapsto\alpha x=Ht_{\alpha}x$ is a right action of $G$ on the finite set $H\backslash G$, so $\alpha(xy)=(\alpha x)y$ and $\alpha\mapsto\alpha x$ is a permutation of $H\backslash G$ with inverse $\alpha\mapsto\alpha x^{-1}$; furthermore $t_{\alpha}xt_{\alpha x}^{-1}\in H$ ([[def-transfer-homomorphism-for-a-finite-index-subgroup]]).

[F2] The transfer does not depend on the transversal ([[lem-transfer-is-independent-of-the-transversal]]).

[F3] $\varphi(uv)=\varphi(u)\varphi(v)$ for all $u,v\in H$, and $\varphi$ is defined on all of $H$ ([[lem-group-homomorphism-basic-properties]], [[def-group-homomorphism]]).

[F4] The product of finitely many elements of the abelian group $A$ is independent of the order of the factors, and $H\backslash G$ is finite ([[def-transfer-homomorphism-for-a-finite-index-subgroup]], [[def-coset]]).



## Proof

**Proof technique:** direct.

1.1 For $x,y\in G$ and $\alpha\in H\backslash G$, the identity $t_{\alpha}xy\,t_{\alpha xy}^{-1}=(t_{\alpha}xt_{\alpha x}^{-1})(t_{\alpha x}yt_{\alpha xy}^{-1})$ holds: the middle factor $t_{\alpha x}^{-1}t_{\alpha x}$ cancels, and $(\alpha x)y=\alpha(xy)$ by [F1]. [F1, algebra]

2.1 Both bracketed factors of step 1.1 lie in $H$ by [F1], so applying $\varphi$ gives $\varphi(t_{\alpha}xy\,t_{\alpha xy}^{-1})=\varphi(t_{\alpha}xt_{\alpha x}^{-1})\,\varphi(t_{\alpha x}yt_{\alpha xy}^{-1})$ by [F3]. [F3, step 1.1]

3.1 Hence $V(xy)=\prod_{\alpha}\varphi(t_{\alpha}xt_{\alpha x}^{-1})\,\varphi(t_{\alpha x}yt_{\alpha xy}^{-1})$, the product of the two factors over $\alpha$; since $A$ is abelian this equals $\Bigl(\prod_{\alpha}\varphi(t_{\alpha}xt_{\alpha x}^{-1})\Bigr)\Bigl(\prod_{\alpha}\varphi(t_{\alpha x}yt_{\alpha xy}^{-1})\Bigr)$ by [F4]. [F4, step 2.1]

4.1 The reindexing $\beta:=\alpha x$ runs over $H\backslash G$ as $\alpha$ does, by the permutation property in [F1], so $\prod_{\alpha}\varphi(t_{\alpha x}yt_{\alpha xy}^{-1})=\prod_{\beta}\varphi(t_{\beta}yt_{\beta y}^{-1})=V(y)$. [F1, step 3.1]

5.1 Since $V$ does not depend on the chosen transversal by [F2], the value $V(x)$ is well defined for every $x\in G$; combining steps 3.1 and 4.1, $V(xy)=V(x)\,V(y)$ for all $x,y\in G$, so $V$ is a homomorphism. ∎ [F2, step 3.1, step 4.1]
