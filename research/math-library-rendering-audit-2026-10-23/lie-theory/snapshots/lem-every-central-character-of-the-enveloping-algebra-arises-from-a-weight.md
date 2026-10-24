---
id: lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight
kind: lemma
title: "Every central character of a semisimple enveloping algebra arises from a weight"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-axiom-of-choice, def-central-character-of-a-lie-algebra-module, thm-chevalley-shephard-todd-for-finite-weyl-groups, thm-harish-chandra-isomorphism-for-the-center, cor-the-center-is-a-polynomial-algebra-of-rank-many-generators, lem-harish-chandra-projection-computes-highest-weight-scalars, lem-determinant-trick-for-nakayama, thm-proper-ideal-contained-in-maximal-ideal, cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field, cor-central-characters-are-dot-weyl-orbits, def-harish-chandra-projection, thm-quotient-is-field-iff-ideal-maximal, def-prime-and-maximal-ideals, thm-the-complex-numbers-are-algebraically-closed]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 14.1-14.2, printed pp.76-77 (Harish-Chandra isomorphism; parametrisation of characters)"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a fixed positive
system. Then every unital $\mathbb C$-algebra homomorphism
$\chi\colon Z(U(\mathfrak g))\to\mathbb C$ equals $\chi_\lambda$ for some
$\lambda\in\mathfrak h^*$, where $\chi_\lambda(z)=\operatorname{pr}(z)(\lambda)$;
equivalently, the maximal ideals of $Z(U(\mathfrak g))$ are exactly the kernels
$\ker\chi_\lambda$, and $\lambda\mapsto\ker\chi_\lambda$ induces a bijection
$\mathfrak h^*/W\to\operatorname{Max}Z(U(\mathfrak g))$, so that
$\chi_\lambda=\chi_\mu$ if and only if $\mu\in W\cdot\lambda$. Here $w\cdot\lambda=w(\lambda+\rho)-\rho$, and $\mathfrak h^*/W$ denotes the quotient for this dot action.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan $\mathfrak h$ and positive system, and a unital $\mathbb C$-algebra homomorphism $\chi\colon Z(U(\mathfrak g))\to\mathbb C$.

[F1] The shifted Harish-Chandra map $\operatorname{HC}_\rho\colon Z(U(\mathfrak g))\to S(\mathfrak h)^W$, $\operatorname{HC}_\rho(z)(\lambda)=\operatorname{pr}(z)(\lambda-\rho)$, is an algebra isomorphism under AC ([[thm-harish-chandra-isomorphism-for-the-center]]); the projection computes the highest-weight scalars, so $\chi_\lambda(z)=\operatorname{pr}(z)(\lambda)$ is the scalar by which $z$ acts on $M(\lambda)$ ([[lem-harish-chandra-projection-computes-highest-weight-scalars]], [[def-harish-chandra-projection]], [[def-central-character-of-a-lie-algebra-module]]).

[F2] Under AC, $S(\mathfrak h)$ is a free $S(\mathfrak h)^W$-module of rank $|W|$, and $S(\mathfrak h)^W$ is a polynomial algebra on $\operatorname{rank}\mathfrak g$ homogeneous generators; hence $S(\mathfrak h)$ is a finite $S(\mathfrak h)^W$-module and $Z(U(\mathfrak g))\cong S(\mathfrak h)^W$ is a finitely generated $\mathbb C$-algebra ([[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[cor-the-center-is-a-polynomial-algebra-of-rank-many-generators]]).

[F3] Determinant trick (Nakayama): if $R$ is commutative, $I\mathrel{\trianglelefteq}R$ and $M$ a finitely generated $R$-module with $IM=M$, then $(1-a)M=0$ for some $a\in I$ ([[lem-determinant-trick-for-nakayama]]).

[F4] Under AC every proper ideal of a nonzero commutative ring is contained in a maximal ideal; maximal means maximal among proper ideals ([[thm-proper-ideal-contained-in-maximal-ideal]], [[def-prime-and-maximal-ideals]], [[def-axiom-of-choice]]).

[F5] Over the algebraically closed field $\mathbb C$, every maximal ideal of a finitely generated commutative $\mathbb C$-algebra is the kernel of a unital $\mathbb C$-algebra homomorphism to $\mathbb C$ ([[cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]]); an ideal is maximal exactly when the quotient is a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

[F6] $\mathbb C$ is algebraically closed, so it has no nontrivial finite-dimensional field extension ([[thm-the-complex-numbers-are-algebraically-closed]]).

[F7] Under AC, $\chi_\lambda=\chi_\mu$ if and only if $\mu\in W\cdot\lambda$ ([[cor-central-characters-are-dot-weyl-orbits]]).

## Proof

**Proof technique:** direct.

1.1 Define $\psi:=\chi\circ\operatorname{HC}_\rho^{-1}\colon S(\mathfrak h)^W\to\mathbb C$. It is a unital $\mathbb C$-algebra homomorphism by [F1], and $\psi(\operatorname{HC}_\rho(z))=\chi(z)$ for every $z$. Its image contains $1$ and is closed under the $\mathbb C$-scalars, so the image is all of $\mathbb C$; hence $S(\mathfrak h)^W/\ker\psi\cong\mathbb C$ is a field and $\ker\psi$ is a maximal, in particular proper, ideal of $S(\mathfrak h)^W$. [F1, F5, given]

2.1 By [F2], $S(\mathfrak h)$ is a finitely generated $S(\mathfrak h)^W$-module, so [F3] applies with $R=S(\mathfrak h)^W$, $I=\ker\psi$ and $M=S(\mathfrak h)$: if $(\ker\psi)S(\mathfrak h)=S(\mathfrak h)$, then $(1-a)S(\mathfrak h)=0$ for some $a\in\ker\psi$, and evaluating at $1\in S(\mathfrak h)$ gives $1=a$, contradicting $\psi(1)=1$. Therefore $(\ker\psi)S(\mathfrak h)\ne S(\mathfrak h)$, and this ideal is proper. [F2, F3, step 1.1, algebra]

3.1 By [F4] the proper ideal $(\ker\psi)S(\mathfrak h)$ is contained in a maximal ideal $\mathfrak n$ of $S(\mathfrak h)$; in particular $\ker\psi\subseteq\mathfrak n$. The contraction $\mathfrak n\cap S(\mathfrak h)^W$ is proper because $1\notin\mathfrak n$, and contains the maximal ideal $\ker\psi$; hence $\mathfrak n\cap S(\mathfrak h)^W=\ker\psi$. The quotient $S(\mathfrak h)/\mathfrak n$ is a field by [F5] containing the field $S(\mathfrak h)^W/\ker\psi\cong\mathbb C$ of step 1.1, and it is finite-dimensional over it because $S(\mathfrak h)$ is a finite $S(\mathfrak h)^W$-module. [F2, F4, F5, step 1.1, step 2.1]

4.1 A finite-dimensional field extension of the algebraically closed field $\mathbb C$ is $\mathbb C$ itself by [F6], so the quotient map of step 3.1 is a unital $\mathbb C$-algebra homomorphism $\varphi\colon S(\mathfrak h)\to\mathbb C$ extending $\psi$: for $a\in S(\mathfrak h)^W$ the class $a+\mathfrak n$ depends only on $a+\ker\psi$ and equals $\psi(a)$. [F6, step 3.1, algebra]

5.1 The homomorphism $\varphi$ is evaluation at a weight: fix a $\mathbb C$-basis $h_1,\dots,h_r$ of $\mathfrak h$; since $S(\mathfrak h)=\mathbb C[h_1,\dots,h_r]$ with the $h_i$ as coordinate functions, $\varphi$ is determined by the scalars $\varphi(h_i)$, which define a unique $\lambda\in\mathfrak h^*$ by $\lambda(h_i):=\varphi(h_i)$, and $\varphi(p)=p(\lambda)$ for every polynomial $p$. [step 4.1, construct]

6.1 Combining the identities, for every $z\in Z(U(\mathfrak g))$: $\chi(z)=\psi(\operatorname{HC}_\rho(z))=\varphi(\operatorname{HC}_\rho(z))=\operatorname{HC}_\rho(z)(\lambda)=\operatorname{pr}(z)(\lambda-\rho)$ by [F1]; writing $\mu:=\lambda-\rho$ gives $\chi=\chi_\mu$. Thus every unital homomorphism $Z(U(\mathfrak g))\to\mathbb C$ is a $\chi_\mu$. [F1, step 1.1, step 4.1, step 5.1, algebra]

7.1 By [F2], $Z(U(\mathfrak g))\cong S(\mathfrak h)^W$ is a finitely generated commutative $\mathbb C$-algebra, so by [F5] every maximal ideal of $Z(U(\mathfrak g))$ is the kernel of a unital homomorphism to $\mathbb C$, hence by step 6.1 of the form $\ker\chi_\lambda$. Conversely each $\chi_\lambda$ is a surjective unital homomorphism onto the field $\mathbb C$, so $\ker\chi_\lambda$ is maximal by [F5], and $\ker\chi_\lambda=\ker\chi_\mu$ implies $\chi_\lambda=\chi_\mu$ because both factor through the common quotient, which is $\mathbb C$ via the unital structure map. By [F7], $\chi_\lambda=\chi_\mu$ exactly when $\mu\in W\cdot\lambda$; hence $\lambda\mapsto\ker\chi_\lambda$ induces a bijection $\mathfrak h^*/W\to\operatorname{Max}Z(U(\mathfrak g))$, and the stated equivalences follow. [F1, F5, F7, step 6.1] ∎
