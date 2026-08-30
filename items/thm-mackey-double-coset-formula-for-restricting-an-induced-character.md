---
id: thm-mackey-double-coset-formula-for-restricting-an-induced-character
kind: theorem
title: "Mackey's double-coset formula for restricting an induced character"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-representation-and-conjugate-character, def-double-cosets-of-two-subgroups, def-induced-character-of-a-complex-representation]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 5.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Theorem 20.6"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $H,K\le G$, let $\chi$ be the character of a
finite-dimensional complex representation $W$ of $H$, and let $S\subseteq G$ be
a set of representatives for $K\backslash G/H$. Then

$$ \operatorname{Res}_K^G\operatorname{Ind}_H^G\chi = \sum_{s\in S} \operatorname{Ind}_{K\cap sHs^{-1}}^K \Bigl(\operatorname{Res}_{K\cap sHs^{-1}}^{sHs^{-1}}\,{}^s\chi\Bigr). $$

## Facts & Assumptions

**Given:** A finite group $G$, subgroups $H,K\le G$, a finite-dimensional complex representation $W$ of $H$ with character $\chi$, and representatives $S$ for $K\backslash G/H$.

[F1] The induced character is the character of the induced representation ([[def-induced-character-of-a-complex-representation]]).

[F2] The sets $KsH$ are the $(K,H)$-double cosets of $G$ ([[def-double-cosets-of-two-subgroups]]).

[F3] The conjugate representation ${}^sW$ of $sHs^{-1}$ has character ${}^s\chi(shs^{-1})=\chi(h)$ in the sense of [[def-conjugate-representation-and-conjugate-character]].

## Proof

**Proof technique:** direct.

1.1 Let $I=\operatorname{Ind}_H^G W$. For each $s\in S$, let $I_s$ be the subspace of functions in $I$ whose support is contained in the double coset $KsH$. Because the double cosets $KsH$ partition $G$, every induced function splits uniquely as the sum of its restrictions to those supports, so $\operatorname{Res}_K^G I=\bigoplus_{s\in S} I_s$ as $K$-modules. [F1, F2, given]

2.1 For $s\in S$, define $\Theta_s:I_s\to \operatorname{Ind}_{K\cap sHs^{-1}}^K(\operatorname{Res}_{K\cap sHs^{-1}}^{sHs^{-1}}\,{}^sW)$ by $\Theta_s(f)(k):=f(ks)$. If $u\in K\cap sHs^{-1}$ and $u=shs^{-1}$, then $\Theta_s(f)(ku)=f(ksh)=h^{-1}\cdot f(ks)=u^{-1}\cdot \Theta_s(f)(k)$, where the last action is that of ${}^sW$ from [F3]. So $\Theta_s(f)$ is well defined in the target induced module. [F1, F3, step 1.1, construct]

3.1 For $\varphi\in \operatorname{Ind}_{K\cap sHs^{-1}}^K(\operatorname{Res}_{K\cap sHs^{-1}}^{sHs^{-1}}\,{}^sW)$, define $f_\varphi:G\to W$ by $f_\varphi(ksh):=h^{-1}\cdot\varphi(k)$ on $KsH$ and $f_\varphi(g):=0$ off $KsH$. If $ksh=k'sh'$, then $k^{-1}k'=shh'^{-1}s^{-1}\in K\cap sHs^{-1}$, and the covariance condition in the target induced module gives $h^{-1}\cdot\varphi(k)=h'^{-1}\cdot\varphi(k')$. Thus $f_\varphi$ is well defined, lies in $I_s$, and inverts $\Theta_s$. [F2, F3, step 2.1, construct]

4.1 Steps 2.1 and 3.1 show that $\Theta_s$ is a $K$-equivariant isomorphism $I_s\cong \operatorname{Ind}_{K\cap sHs^{-1}}^K(\operatorname{Res}_{K\cap sHs^{-1}}^{sHs^{-1}}\,{}^sW)$ for each $s\in S$. Combining these isomorphisms with step 1.1 gives a $K$-module decomposition of $\operatorname{Res}_K^G I$ as the direct sum of the stated induced modules. [step 1.1, step 2.1, step 3.1, discharge-construct]

5.1 Taking characters of the $K$-module decomposition in step 4.1 and using [F1] yields the stated Mackey double-coset formula. [F1, step 4.1, algebra] ∎
