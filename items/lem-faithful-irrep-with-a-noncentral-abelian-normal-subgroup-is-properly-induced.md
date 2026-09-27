---
id: lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced
kind: lemma
title: "A faithful irreducible with a noncentral abelian normal subgroup is induced from a proper inertia group"
status: published
origin: pipeline
deps: [thm-clifford-correspondence, thm-clifford-homogeneous-restriction-formula, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, cor-cyclotomic-field-splits-a-finite-group, def-conjugate-representation-and-inertia-group, def-intertwiner-equivalent-and-faithful-representations, def-center-of-a-group, def-normal-subgroup]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Proposition 4.3.2, printed pp. 57–58"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — Lemma 12.5.2 and Lemma 12.5.3, printed pp. 146–147"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
---

## Statement

Let $G$ be a finite group, let $A\trianglelefteq G$ be an abelian normal
subgroup ([[def-normal-subgroup]]) that is not contained in the center $Z(G)$,
and let $V$ be a faithful
irreducible finite-dimensional complex representation of $G$.

Then for every irreducible constituent $\lambda$ of the restriction of $V$ to
$A$ the inertia group $I_G(\lambda)$ is a proper subgroup of $G$, and there is
an irreducible representation $W$ of $I_G(\lambda)$ lying over $\lambda$ with
$$ V\cong\operatorname{Ind}_{I_G(\lambda)}^G W .$$

## Facts & Assumptions

**Given:** A finite group $G$, an abelian normal subgroup $A\trianglelefteq G$ with $A\nsubseteq Z(G)$, a faithful irreducible finite-dimensional complex representation $\rho:G\to\operatorname{GL}(V)$, and an irreducible constituent $\lambda$ of the restriction of $V$ to $A$.

[F1] Every irreducible representation of a finite abelian group over a splitting field is one-dimensional, and $\mathbb C$ is a splitting field for every finite group. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]], [[cor-cyclotomic-field-splits-a-finite-group]]).

[F2] For finite $G$, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$ and $\chi\in\operatorname{Irr}(G\mid\theta)$ with $I=I_G(\theta)$ there is a positive integer $e$ with $\operatorname{Res}_N^G\chi=e\sum_{gI\in G/I}{}^g\theta$, so the constituents of the restriction are exactly the distinct conjugates of $\theta$, each with multiplicity $e$; the restriction is isotypical precisely when $I=G$. ([[thm-clifford-homogeneous-restriction-formula]]).

[F3] ${}^g\theta(n)=\theta(g^{-1}ng)$ and $I_G(\theta)=\{g\in G:{}^g\theta=\theta\}$ is a subgroup with $N\le I_G(\theta)\le G$; $\operatorname{Irr}(H\mid\theta)$ consists of the irreducible characters of $H$ whose restriction to $N$ contains $\theta$. ([[def-conjugate-representation-and-inertia-group]]).

[F4] Induction gives a bijection $\operatorname{Irr}(I_G(\theta)\mid\theta)\to\operatorname{Irr}(G\mid\theta)$, whose inverse takes the $\theta$-isotypical component; in particular every irreducible $G$-module lying over $\theta$ is induced from its $\theta$-isotypical component. ([[thm-clifford-correspondence]]).

[F5] The representation $\rho$, and with it $V$, is faithful: $\rho(g)=\operatorname{id}_V$ implies $g=1$. ([[def-intertwiner-equivalent-and-faithful-representations]]).

[F6] $Z(G)=\{z\in G:zg=gz\text{ for all }g\in G\}$. ([[def-center-of-a-group]]).

[A1] $\rho$ is a homomorphism into $\operatorname{GL}(V)$, so $\rho(g^{-1}ag)=\rho(g)^{-1}\rho(a)\rho(g)$.

## Proof

**Proof technique:** direct.

1.1 Restricting $\rho$ to the abelian normal subgroup $A$ gives a representation of $A$ whose irreducible constituents are one-dimensional by [F1], because $\mathbb C$ is a splitting field for $A$; thus the constituent $\lambda$ of the restriction is a group homomorphism $\lambda:A\to\mathbb C^\times$. [F1, given]

2.1 Apply [F2] with $N=A$ and $\chi=\chi_V$: the constituents of the restriction of $V$ to $A$ are exactly the distinct conjugates ${}^g\lambda$ with $g\in G$, each occurring with one positive multiplicity $e$, and by [F3] the conjugate ${}^g\lambda$ equals $\lambda$ precisely when $g\in I_G(\lambda)$. Hence the restriction of $V$ to $A$ is $\lambda$-isotypical, that is all its constituents equal $\lambda$, precisely when $I_G(\lambda)=G$. [F2, F3, step 1.1]

3.1 Suppose now, for the sake of a contradiction, that $I_G(\lambda)=G$. By step 2.1 the only constituent of the restriction of $V$ to $A$ is $\lambda$, so its character is a positive multiple of $\lambda$; equivalently $\rho(a)=\lambda(a)\operatorname{id}_V$ for every $a\in A$. [step 2.1, given]

4.1 Let $a\in A$ and $g\in G$. Using step 3.1 and [A1], $\rho(g^{-1}ag)=\rho(g)^{-1}\rho(a)\rho(g)=\lambda(a)\operatorname{id}_V=\rho(a)$. Since $\rho$ is faithful by [F5], this gives $g^{-1}ag=a$; as $g$ was arbitrary, $a$ commutes with every element of $G$, so $a\in Z(G)$ by [F6]. Hence $A\subseteq Z(G)$, contradicting the hypothesis $A\nsubseteq Z(G)$. Therefore $I_G(\lambda)\ne G$, and since $A\le I_G(\lambda)\le G$ by [F3], the inertia group $I_G(\lambda)$ is a proper subgroup of $G$. [F3, F5, F6, step 3.1, given]

5.1 Since $V$ is irreducible and $\lambda$ is a constituent of its restriction to $A$, the module $V$ lies over $\lambda$. By [F4] the $\lambda$-isotypical component $W=V_\lambda$ is an irreducible $I_G(\lambda)$-module lying over $\lambda$ and induction gives $V\cong\operatorname{Ind}_{I_G(\lambda)}^G W$. As $\lambda$ was an arbitrary constituent of the restriction to $A$, both assertions hold for every such constituent. [F4, step 1.1, step 4.1] ∎
