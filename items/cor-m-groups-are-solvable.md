---
id: cor-m-groups-are-solvable
kind: corollary
title: M-groups are solvable (Taketa)
status: draft
origin: pipeline
deps: [def-monomial-representation-and-m-group, def-derived-series-solvable-group-and-derived-length, def-kernel-of-a-complex-character, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive, cor-frobenius-reciprocity-for-complex-characters, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions, thm-character-inner-product-computes-intertwiner-dimension, cor-dimension-of-an-induced-finite-dimensional-representation, def-induced-character-of-a-complex-representation, lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup, thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters, def-irreducible-complex-character, def-subrepresentation-and-irreducible-representation, def-induced-r-linear-g-module-by-h-covariant-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "SLMath, Character Theory of Finite Groups, Chapter 9 — slides 391–404 (Taketa's theorem, ordered character-degree induction)"
      url: "https://www.slmath.org/ckeditor_assets/attachments/500/characters.pdf"
---

## Statement

Let $G$ be a finite $M$-group
([[def-monomial-representation-and-m-group]]) and let
$1=f_1<f_2<\cdots<f_r$ be the distinct degrees of its irreducible complex
characters, so that $r=|\mathrm{cd}(G)|$. Then for every $k$ with
$1\le k\le r$ and every irreducible complex character $\chi$ of $G$ with
$\chi(1)=f_k$ the $k$-th derived subgroup of $G$ satisfies
$G^{(k)}\le\ker\chi$
([[def-derived-series-solvable-group-and-derived-length]],
[[def-kernel-of-a-complex-character]]). In particular $G^{(r)}=1$: every
finite $M$-group is solvable, and its derived length satisfies
$\mathrm{dl}(G)\le r=|\mathrm{cd}(G)|$.

## Facts & Assumptions

**Given:** A finite $M$-group $G$ with distinct irreducible character degrees $1=f_1<f_2<\cdots<f_r$, an index $k\in\{1,\dots,r\}$, and an irreducible complex character $\chi$ of $G$ with $\chi(1)=f_k$.

[F1] Every irreducible complex character of an $M$-group is monomial: $\chi=\operatorname{Ind}_H^G\lambda$ for some subgroup $H\le G$ and some linear character $\lambda$ of $H$. ([[def-monomial-representation-and-m-group]]).

[F2] The derived series is $G^{(0)}=G$, $G^{(m+1)}=[G^{(m)},G^{(m)}]$, hence $G^{(m+1)}\le G^{(m)}$; $G$ is solvable when $G^{(n)}=1$ for some $n$, and the derived length is the least such $n$. ([[def-derived-series-solvable-group-and-derived-length]]).

[F3] $G'$ is characteristic, hence normal, in $G$, and every homomorphism from $G$ into an abelian group has $G'$ in its kernel; characteristic subgroups are normal and characteristicness is transitive. ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]], [[lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive]]).

[F4] $\langle\operatorname{Ind}_H^G\psi,\eta\rangle_G=\langle\psi,\operatorname{Res}_H^G\eta\rangle_H$ for complex characters $\psi$ of $H$ and $\eta$ of $G$. ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F5] The irreducible complex characters of a finite group form an orthonormal basis of its class functions, and for an honest character $\pi$ the multiplicities in $\pi=\sum_\theta m_\theta\theta$ satisfy $m_\theta=\langle\pi,\theta\rangle=\dim\operatorname{Hom}_G(V_\pi,V_\theta)\in\mathbb Z_{\ge0}$. ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]], [[thm-character-inner-product-computes-intertwiner-dimension]]).

[F6] $\dim_{\mathbb C}\operatorname{Ind}_H^GW=[G:H]\dim_{\mathbb C}W$ for a finite-dimensional complex $H$-representation $W$, and the character of an induced module is the induced character. ([[cor-dimension-of-an-induced-finite-dimensional-representation]], [[def-induced-character-of-a-complex-representation]], [[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F7] For a nonzero finite-dimensional complex $H$-representation $W$ one has $\ker(\operatorname{Ind}_H^GW)=\bigcap_{g\in G}g(\ker W)g^{-1}$, and for $W=\mathbf 1_H$ this kernel is $\operatorname{Core}_G(H)\le H$. ([[lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup]]).

[F8] The intersection of the kernels of all irreducible complex characters of a finite group $G$ is trivial, and the trivial character $1_G$ is an irreducible character of degree $1$. ([[thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters]], [[def-irreducible-complex-character]], [[def-subrepresentation-and-irreducible-representation]]).

[A1] The kernel of a direct sum of representations is the intersection of the kernels of its summands; hence a subgroup lying in the kernel of every irreducible constituent of an honest character lies in the kernel of that character.

## Proof

**Proof technique:** induction on $k$.

1.1 Base case $k=1$: then $\chi$ is a linear character, that is, a homomorphism $G\to\mathbb C^\times$ into the abelian group $\mathbb C^\times$, so $G^{(1)}=G'\le\ker\chi$ by [F3]. [F3, given, base]

1.2 Induction hypothesis: for every $j$ with $1\le j<k$ and every irreducible character $\chi'$ of $G$ with $\chi'(1)=f_j$, one has $G^{(j)}\le\ker\chi'$. [ih]

1.3 Assume now $k\ge2$. By [F1] the irreducible character $\chi$ of degree $f_k$ is monomial, say $\chi=\operatorname{Ind}_H^G\lambda$ with $H\le G$ and $\lambda$ a linear character of $H$. By [F6], $f_k=\chi(1)=[G:H]\cdot1=[G:H]\ge2$, so $H$ is a proper subgroup. Let $\pi=\operatorname{Ind}_H^G\mathbf 1_H$ be the induced trivial character; again $\pi(1)=[G:H]=f_k$, and by Frobenius reciprocity [F4], $\langle\pi,1_G\rangle_G=\langle\mathbf 1_H,\mathbf 1_H\rangle_H=1$. [F1, F4, F6, given]

2.1 Writing the honest character $\pi$ in the orthonormal basis of irreducible characters as $\pi=\sum_{\theta}m_\theta\theta$ with multiplicities $m_\theta=\langle\pi,\theta\rangle\in\mathbb Z_{\ge0}$ by [F5], step 1.3 gives $m_{1_G}=1$; evaluating at $1\in G$ gives $f_k=\pi(1)=\sum_{\theta}m_\theta\theta(1)$, so $\sum_{\theta\ne1_G}m_\theta\theta(1)=f_k-1$ and every constituent $\theta\ne1_G$ of $\pi$ has degree $\theta(1)\le f_k-1<f_k$, hence $\theta(1)=f_j$ for a unique index $j<k$. [F5, step 1.3]

3.1 For every constituent $\theta\ne1_G$ of $\pi$, step 2.1 gives $\theta(1)=f_j$ with $j\le k-1$, so the induction hypothesis of step 1.2 yields $G^{(j)}\le\ker\theta$, and since $j\le k-1$ the series is descending by [F2], so $G^{(k-1)}\le G^{(j)}\le\ker\theta$. The trivial constituent satisfies $G^{(k-1)}\le G=\ker1_G$. By [A1] the kernel of $\pi$ is the intersection of the kernels of its constituents, so $G^{(k-1)}\le\ker\pi$. [A1, F2, step 1.2, step 2.1]

4.1 The kernel formula [F7] for the induced trivial representation gives $\ker\pi=\operatorname{Core}_G(H)\le H$, so $G^{(k-1)}\le H$ by step 3.1. [F7, step 3.1]

5.1 Therefore $G^{(k)}=[G^{(k-1)},G^{(k-1)}]\le[H,H]=H'$ by [F2], and $H'\le\ker\lambda$ because $\lambda$ is a homomorphism into the abelian group $\mathbb C^\times$, by [F3]. [F2, F3, step 4.1]

6.1 Each term of the derived series is characteristic, hence normal, in $G$ by [F2] and [F3]; so $gG^{(k)}g^{-1}=G^{(k)}\le g(\ker\lambda)g^{-1}$ for every $g\in G$ by step 5.1. Hence $G^{(k)}\le\bigcap_{g\in G}g(\ker\lambda)g^{-1}=\ker\chi$ by the kernel formula [F7] applied to $\chi=\operatorname{Ind}_H^G\lambda$, which completes the induction step. [F3, F7, step 5.1]

7.1 By step 1.1 and step 6.1 the assertion $G^{(k)}\le\ker\chi$ holds for every $k\in\{1,\dots,r\}$ and every irreducible $\chi$ with $\chi(1)=f_k$. Taking $k=r$ and using that the series is descending [F2], $G^{(r)}\le\ker\chi$ for every irreducible character $\chi$ of $G$, so $G^{(r)}\le\bigcap_{\chi\in\operatorname{Irr}(G)}\ker\chi=1$ by [F8]. Thus $G^{(r)}=1$, $G$ is solvable with $\mathrm{dl}(G)\le r=|\mathrm{cd}(G)|$. ∎ [F2, F8, step 1.1, step 6.1, discharge-induction: step 1.2]
