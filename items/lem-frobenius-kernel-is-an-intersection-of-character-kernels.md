---
id: lem-frobenius-kernel-is-an-intersection-of-character-kernels
kind: lemma
title: "Frobenius kernel is an intersection of character kernels"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-kernel-set, lem-frobenius-character-extension-is-irreducible, lem-frobenius-character-extension-construction, thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel, thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters, lem-intersection-of-normal-subgroups, def-normal-subgroup, def-frobenius-complement-and-frobenius-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$ and kernel set
$N=\big(G\setminus\bigcup_{x\in G}xHx^{-1}\big)\cup\{1\}$. For every nontrivial
irreducible complex character $\varphi$ of $H$ let $\widetilde\varphi$ be its
extension, and put
$$\mathcal I:=\{\varphi\in\operatorname{Irr}(H):\varphi\ne1_H\},\qquad M:=\bigcap_{\varphi\in\mathcal I}\ker\widetilde\varphi,$$
where $\ker\widetilde\varphi=\{g\in G:\widetilde\varphi(g)=\widetilde\varphi(1)\}$.
Then $\mathcal I$ is nonempty and $N=M$.

## Facts & Assumptions

**Given:** A finite group $G$ with Frobenius complement $\{1\}<H<G$, the kernel set $N$ of [[def-frobenius-kernel-set]], and the family $\mathcal I$ of nontrivial irreducible complex characters of $H$ with extensions $\widetilde\varphi$.

[F1] $N$ consists of $1$ and the elements of $G$ that lie in no conjugate $xHx^{-1}$ of $H$ ([[def-frobenius-kernel-set]]).

[F2] For each $\varphi\in\mathcal I$ the class function $\widetilde\varphi$ satisfies $\widetilde\varphi|_H=\varphi$, $\widetilde\varphi(1)=\varphi(1)$ and $\widetilde\varphi(g)=\varphi(1)$ for every $g\in G$ lying in no conjugate of $H$ ([[lem-frobenius-character-extension-construction]]).

[F3] For each $\varphi\in\mathcal I$ the class function $\widetilde\varphi$ is an irreducible complex character of $G$ ([[lem-frobenius-character-extension-is-irreducible]]).

[F4] For a finite-dimensional complex representation $\rho$ with character $\chi$ one has $\ker\chi=\ker\rho$, and $\ker\rho$ is a normal subgroup of $G$; in particular $\ker\widetilde\varphi$ is a normal subgroup of $G$ for each $\varphi\in\mathcal I$ ([[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]).

[F5] The intersection of a nonempty family of normal subgroups of $G$ is a normal subgroup of $G$ ([[lem-intersection-of-normal-subgroups]]).

[F6] For a finite group $H$, a subgroup $N_0\le H$ is normal if and only if it is an intersection of kernels of irreducible complex characters of $H$; applying this to $N_0=\{1\}$ gives $\bigcap_{\psi\in\operatorname{Irr}(H)}\ker\psi=\{1\}$, since the intersection over all irreducible characters is contained in any such sub-intersection ([[thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters]]).

[F7] If $M'\mathrel{\trianglelefteq}G$ then $xM'x^{-1}=M'$ for every $x\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The family $\mathcal I$ is nonempty: if $\operatorname{Irr}(H)=\{1_H\}$ were a singleton, then [F6] would give $\{1\}=\bigcap_{\psi\in\operatorname{Irr}(H)}\ker\psi=\ker1_H=H$, contradicting $\{1\}<H$; hence there is an irreducible character of $H$ different from $1_H$. [F6, given]

1.2 $N\subseteq M$: let $g\in N$. If $g=1$ then $\widetilde\varphi(1)=\widetilde\varphi(1)$ for every $\varphi$, so $g\in\ker\widetilde\varphi$ for all $\varphi\in\mathcal I$. If $g\ne1$ then by [F1] the element $g$ lies in no conjugate of $H$, so [F2] gives $\widetilde\varphi(g)=\varphi(1)=\widetilde\varphi(1)$ for every $\varphi\in\mathcal I$, that is $g\in\ker\widetilde\varphi$ for every such $\varphi$. [F1, F2, cases]

1.3 $M\cap H=\{1\}$: if $h\in M\cap H$ then for every $\varphi\in\mathcal I$ one has $\varphi(h)=\widetilde\varphi(h)=\widetilde\varphi(1)=\varphi(1)$ by [F2], so $h\in\ker\varphi$, and $h\in\ker1_H$ holds trivially as well; hence $h\in\bigcap_{\psi\in\operatorname{Irr}(H)}\ker\psi=\{1\}$ by [F6]. [F2, F6, algebra]

1.4 Every normal subgroup $M'$ of $G$ with $M'\cap H=\{1\}$ satisfies $M'\subseteq N$: for $x\in G$ one has $M'\cap xHx^{-1}=x\bigl(x^{-1}M'x\cap H\bigr)x^{-1}=x(M'\cap H)x^{-1}=\{1\}$ by [F7], so each nonidentity element of $M'$ lies in no conjugate of $H$ and therefore belongs to $N$ by [F1]. [F1, F7, algebra]

2.1 By [F3] each $\widetilde\varphi$ with $\varphi\in\mathcal I$ is an irreducible character, so by [F4] each $\ker\widetilde\varphi$ is a normal subgroup of $G$; since $\mathcal I$ is nonempty by step 1.1, [F5] makes $M$ a normal subgroup of $G$. [F3, F4, F5, step 1.1]

3.1 Applying step 1.4 to the normal subgroup $M$ of step 2.1, whose intersection with $H$ is trivial by step 1.3, yields $M\subseteq N$; together with step 1.2 this gives $N=M$, as claimed. ∎ [step 1.2, step 2.1, step 1.3, step 1.4]
