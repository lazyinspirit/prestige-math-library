---
id: lem-transfer-cycle-decomposition-formula
kind: lemma
title: "Transfer cycle decomposition formula"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-transfer-homomorphism-for-a-finite-index-subgroup, lem-transfer-is-independent-of-the-transversal, def-coset, lem-coset-membership-and-equality, lem-group-homomorphism-basic-properties, thm-division-algorithm-in-z, thm-well-ordering-principle, thm-orbits-partition-the-set, def-group-action, def-orbit-and-stabilizer, def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, lem-group-power-laws]
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

Let $G$ be a finite group, $H\le G$, $A$ an abelian group written
multiplicatively, $\varphi:H\to A$ a homomorphism, and $V_{\varphi}:G\to A$ the
transfer of [[def-transfer-homomorphism-for-a-finite-index-subgroup]], which is
independent of the transversal by [[lem-transfer-is-independent-of-the-transversal]].
Let $x\in G$ and let

$$H\backslash G=C_1\sqcup\cdots\sqcup C_r$$

be the decomposition of the finite set of right cosets into the orbits of the
right multiplication action of the cyclic subgroup $\langle x\rangle\le G$
([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]]).
Put $n_i:=|C_i|$ and choose $t_i\in G$ with $Ht_i\in C_i$. Then

$$V_{\varphi}(x)=\prod_{i=1}^{r}\varphi\bigl(t_i\,x^{n_i}\,t_i^{-1}\bigr).$$

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, an abelian group $A$, a homomorphism $\varphi:H\to A$, an element $x\in G$, and the transfer $V=V_{\varphi}$ of [[def-transfer-homomorphism-for-a-finite-index-subgroup]].

[F1] For $\alpha\in H\backslash G$ the coset $\alpha t=Ht_{\alpha}t$ is defined for every $t\in G$, the assignment $\alpha\mapsto\alpha t$ is a right action of $G$ on the finite set $H\backslash G$, each factor $t_{\alpha}st_{\alpha s}^{-1}$ ($s\in G$) lies in $H$, and products of finitely many elements of the abelian group $A$ are independent of the order of the factors ([[def-transfer-homomorphism-for-a-finite-index-subgroup]]).

[F2] The transfer $V(x)=\prod_{\alpha\in H\backslash G}\varphi(t_{\alpha}xt_{\alpha x}^{-1})$ does not depend on the transversal ([[lem-transfer-is-independent-of-the-transversal]]).

[F3] If $u,v\in G$ satisfy $Hu=Hv$ then $uv^{-1}\in H$, and conversely ([[lem-coset-membership-and-equality]]).

[F4] $\varphi(uv)=\varphi(u)\varphi(v)$ and $\varphi(e)=1$ for $u,v\in H$ ([[lem-group-homomorphism-basic-properties]]).

[F5] $\langle x\rangle=\{x^{k}:k\in\mathbb Z\}$ is a subgroup of $G$, and $x^{j}x^{k}=x^{j+k}$ for all $j,k\in\mathbb Z$ ([[lem-cyclic-subgroup-is-the-set-of-powers]], [[lem-group-power-laws]]).

[F6] The orbits of the action of the subgroup $\langle x\rangle$ on $H\backslash G$ partition $H\backslash G$ ([[thm-orbits-partition-the-set]], [[def-orbit-and-stabilizer]], [[def-group-action]]).

[F7] Every nonempty set of positive integers has a least element, and for integers $k$ and $n\ge1$ there are $q,r\in\mathbb Z$ with $k=qn+r$ and $0\le r<n$ ([[thm-well-ordering-principle]], [[thm-division-algorithm-in-z]]).



## Proof

**Proof technique:** direct.

1.1 Fix $\alpha\in H\backslash G$. Since $H\backslash G$ is finite, the elements $\alpha,\alpha x,\alpha x^{2},\dots$ cannot all be distinct, so $\alpha x^{i}=\alpha x^{j}$ for some $0\le i<j$; applying the inverse permutation $\alpha\mapsto\alpha x^{-i}$ (which is the action of $x^{-i}$) gives $\alpha x^{j-i}=\alpha$, an equality of the form $\alpha x^{n}=\alpha$ with $n=j-i\ge1$. By [F7] there is a least positive integer $n(\alpha)$ with $\alpha x^{n(\alpha)}=\alpha$. [F1, F5, F7, algebra]

2.1 For every $k\in\mathbb Z$ one has $\alpha x^{k}=\alpha$ if and only if $n(\alpha)\mid k$: if $k=qn(\alpha)$ then $\alpha x^{k}=\alpha$ by [F5] and step 1.1 (including $q<0$, since $\alpha x^{-n(\alpha)}=\alpha$ as well), while for arbitrary $k$ writing $k=qn(\alpha)+r$ with $0\le r<n(\alpha)$ by [F7] gives $\alpha x^{r}=\alpha$, so minimality forces $r=0$. [F5, F7, step 1.1]

3.1 The orbit of $\alpha$ under $\langle x\rangle$ is $C(\alpha)=\{\alpha x^{k}:k\in\mathbb Z\}$, and by step 2.1 it equals $\{\alpha,\alpha x,\dots,\alpha x^{n(\alpha)-1}\}$, whose $n(\alpha)$ elements are pairwise distinct. In particular $\alpha x^{n(\alpha)}=\alpha$ and $|C(\alpha)|=n(\alpha)$. [step 2.1]

4.1 The orbit decomposition $H\backslash G=C_1\sqcup\cdots\sqcup C_r$ of [F6] is therefore a decomposition into finitely many sets $C_i$ each of the form $C_i=\{\alpha_i,\alpha_ix,\dots,\alpha_ix^{n_i-1}\}$ with $n_i=|C_i|$ and $\alpha_ix^{n_i}=\alpha_i$; write $\alpha_i=Ht_i$. [F6, step 3.1, given]

5.1 The rule $t_{\alpha_ix^{j}}:=t_ix^{j}$ for $0\le j<n_i$ defines a transversal of $H\backslash G$: indeed every coset of $H\backslash G$ lies in exactly one $C_i$ and hence equals exactly one $\alpha_ix^{j}$, and $t_ix^{j}$ represents it, because $Ht_ix^{j}=\alpha_ix^{j}$ by [F1]. [F1, step 4.1]

6.1 Because $V$ is independent of the transversal by [F2], it may be computed with the transversal of step 5.1: $V(x)=\prod_{i=1}^{r}\prod_{j=0}^{n_i-1}\varphi\bigl(t_{\alpha_ix^{j}}\,x\,t_{(\alpha_ix^{j})x}^{-1}\bigr)$, where $\alpha:=\alpha_ix^{j}$ and $\alpha x=\alpha_ix^{j+1}$. [F1, F2, step 5.1]

7.1 For $0\le j<n_i-1$ one has $t_{(\alpha_ix^{j})x}=t_{\alpha_ix^{j+1}}=t_ix^{j+1}=t_ix^{j}x=t_{\alpha_ix^{j}}x$, so the corresponding factor equals $\varphi(t_{\alpha_ix^{j}}x(t_{\alpha_ix^{j}}x)^{-1})=\varphi(e)=1$ by [F4]. [F4, step 6.1, algebra]

7.2 For $j=n_i-1$ one has $\alpha_ix^{j+1}=\alpha_ix^{n_i}=\alpha_i$ by step 4.1, so $t_{(\alpha_ix^{n_i-1})x}=t_{\alpha_i}=t_i$ and the corresponding factor equals $\varphi(t_ix^{n_i-1}xt_i^{-1})=\varphi(t_ix^{n_i}t_i^{-1})$, an element of $H$ because $Ht_ix^{n_i}=Ht_i$ by step 4.1 and [F3]. [F3, step 4.1, step 6.1, algebra]

8.1 Multiplying the contributions of steps 7.1 and 7.2 over all $i$ and $j$, all factors with $j<n_i-1$ are $1$ and the remaining one for each $i$ is $\varphi(t_ix^{n_i}t_i^{-1})$; hence $V(x)=\prod_{i=1}^{r}\varphi(t_ix^{n_i}t_i^{-1})$. ∎ [step 7.1, step 7.2, given]
