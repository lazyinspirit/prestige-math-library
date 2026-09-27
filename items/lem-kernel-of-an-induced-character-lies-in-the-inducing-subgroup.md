---
id: lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup
kind: lemma
title: Kernel of an induced representation is the intersection of the conjugates of the kernel of the inducing representation
status: draft
origin: pipeline
deps: [def-induced-r-linear-g-module-by-h-covariant-functions, prop-induced-module-decomposes-over-a-left-transversal, thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel, def-kernel-of-a-complex-character, thm-image-subgroup-and-kernel-normal, thm-left-coset-action-and-its-kernel, def-core-of-a-subgroup, thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets, def-kernel-and-image-of-group-homomorphism]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "SLMath, Character Theory of Finite Groups, Chapter 9 — slides 387–390 (induced-character kernel lemma $\\ker(\\alpha^G)\\subseteq H$ with proof)"
      url: "https://www.slmath.org/ckeditor_assets/attachments/500/characters.pdf"
    - title: "I. M. Isaacs, Character Theory of Finite Groups — Chapter 5, kernel of an induced character, p. 67 (standard sharp form, located through the book's index)"
      url: "https://www.fairyland.org/3Y0253Y/7Y9687424Y/CHAPTER/character__theory_of-finite__groups-i_martin_isaacs-ggda.pdf"
---

## Statement

Let $G$ be a finite group, let $H\le G$, and let $W\ne0$ be a
finite-dimensional complex representation of $H$ with kernel
$\ker W=\{\,h\in H:h\cdot w=w\text{ for all }w\in W\,\}$. Then the kernel of
the induced representation $\operatorname{Ind}_H^GW$ is

$$ \ker\bigl(\operatorname{Ind}_H^GW\bigr) =\bigcap_{g\in G}g(\ker W)g^{-1} \subseteq\operatorname{Core}_G(H)=\bigcap_{g\in G}gHg^{-1}\le H . $$

In particular, if $W=\mathbf 1_H$ is the trivial representation, then
$\ker(\operatorname{Ind}_H^G\mathbf 1_H)=\operatorname{Core}_G(H)$, which is the
kernel of the permutation action of $G$ on the left cosets $G/H$. By
[[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]
the same formula computes the kernel $\ker\chi$ of the induced character
$\chi=\operatorname{Ind}_H^G\chi_W$.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, a nonzero finite-dimensional complex $H$-representation $W$ with kernel $\ker W$ and character $\chi_W$, a left transversal $T$ for the left cosets $G/H$, and $V=\operatorname{Ind}_H^GW$.

[F1] $V=\operatorname{Ind}_H^GW=\{\,f:G\to W:f(gh)=h^{-1}\cdot f(g)\text{ for all }g\in G,h\in H\,\}$, with $(x\cdot f)(g)=f(x^{-1}g)$. ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] Evaluation on $T$ is a linear isomorphism $\operatorname{ev}_T:V\to\bigoplus_{t\in T}W$, $f\mapsto(f(t))_{t\in T}$; hence the tuples $(f(t))_{t\in T}$ run through all of $\bigoplus_{t\in T}W$, independently in each coordinate. ([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F3] $\ker W$ is the kernel of the homomorphism $H\to\operatorname{GL}(W)$ defining $W$, hence a normal subgroup of $H$; and the kernel $\ker\chi_W$ of the character equals $\ker W$. ([[def-kernel-and-image-of-group-homomorphism]], [[thm-image-subgroup-and-kernel-normal]], [[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]], [[def-kernel-of-a-complex-character]]).

[F4] Left multiplication on $G/H$ is a permutation action whose kernel is $\operatorname{Core}_G(H)=\bigcap_{g\in G}gHg^{-1}$. ([[thm-left-coset-action-and-its-kernel]], [[def-core-of-a-subgroup]]).

[F5] Inducing the trivial representation $\mathbf 1_H$ gives the permutation representation of $G$ on $G/H$. ([[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]).

## Proof

1.1 Conjugation by any $x\in G$ permutes the set $\{\,g(\ker W)g^{-1}:g\in G\,\}$, so $N:=\bigcap_{g\in G}g(\ker W)g^{-1}$ satisfies $xNx^{-1}=N$; hence $N\trianglelefteq G$. Since $\ker W\le H$ by [F3], each conjugate $g(\ker W)g^{-1}$ lies in $gHg^{-1}$, so $N\subseteq\bigcap_{g\in G}gHg^{-1}=\operatorname{Core}_G(H)\le H$. [F3, F4, given]

1.2 If $t'=th$ with $t\in T$ and $h\in H$, then $t'(\ker W)t'^{-1}=t\bigl(h(\ker W)h^{-1}\bigr)t^{-1}=t(\ker W)t^{-1}$ by normality of $\ker W$ in $H$, so the conjugate depends only on the coset. As $T$ meets every left coset exactly once, $\bigcap_{t\in T}t(\ker W)t^{-1}=\bigcap_{g\in G}g(\ker W)g^{-1}=N$. [F3, given]

1.3 By [F2] the map $\operatorname{ev}_T$ is injective, so $x\in G$ acts as the identity on $V$ exactly when $(x\cdot f)(t)=f(t)$ for all $f\in V$ and all $t\in T$. Fix $t\in T$ and write $x^{-1}t=t_*k$ with $t_*\in T$ and $k\in H$. Then $f(x^{-1}t)=f(t_*k)=k^{-1}\cdot f(t_*)$ by the covariance rule of [F1], so $x$ acts as the identity exactly when $k^{-1}\cdot f(t_*)=f(t)$ for every $f\in V$ and every $t\in T$. [F1, F2, given]

2.1 If $t_*\ne t$ for some $t\in T$, choose by [F2] an element $f\in V$ with $f(t_*)=w\ne0$ and $f(t)=0$; then $k^{-1}\cdot w\ne0=f(t)$, so the condition of step 1.3 fails. Hence an element $x\in G$ acts as the identity on $V$ only if $x^{-1}t\in tH$ for every $t\in T$, that is, $t_*=t$ for every $t\in T$. [F2, step 1.3]

3.1 Suppose then that $x^{-1}t=tk_t$ with $k_t\in H$ for every $t\in T$. By step 1.3 the element $x$ acts as the identity if and only if $k_t^{-1}\cdot w=w$ for all $w\in W$, that is, if and only if $k_t\in\ker W$ for every $t\in T$; equivalently $t^{-1}x^{-1}t\in\ker W$ for every $t\in T$, which says $x\in t(\ker W)t^{-1}$ for every $t\in T$. [F3, step 1.3, step 2.1]

4.1 Steps 2.1 and 3.1 together characterise the kernel: $\ker(\operatorname{Ind}_H^GW)=\bigcap_{t\in T}t(\ker W)t^{-1}=N$, which by step 1.1 lies in $\operatorname{Core}_G(H)\le H$. [step 1.1, step 1.2, step 3.1]

5.1 For $W=\mathbf 1_H$ one has $\ker W=H$, so step 4.1 gives $\ker(\operatorname{Ind}_H^G\mathbf 1_H)=\bigcap_{g\in G}gHg^{-1}=\operatorname{Core}_G(H)$, which by [F4] and [F5] is the kernel of the permutation action on $G/H$; and by [F3] the same formula computes the kernel of the induced character $\operatorname{Ind}_H^G\chi_W$ in general. ∎ [F3, F4, F5, step 4.1]
