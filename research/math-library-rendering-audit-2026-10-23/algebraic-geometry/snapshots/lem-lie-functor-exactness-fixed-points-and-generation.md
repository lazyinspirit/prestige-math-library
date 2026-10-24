---
id: lem-lie-functor-exactness-fixed-points-and-generation
kind: lemma
title: "The Lie functor: exactness, fixed points and generation"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [def-lie-algebra-of-a-group-scheme, lem-lie-algebra-tangent-space-and-functoriality, lem-adjoint-representation-of-an-affine-group-scheme, def-closed-immersion-schemes, def-axiom-of-choice, lem-nonaffine-connected-group-geometrically-connected, cor-contravariant-yoneda-lemma, lem-general-linear-group-scheme-and-its-coordinate-ring]
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
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 10 (10.14)-(10.17) and (10.34), printed pp. 191-192 and 197-198; (1.36)-(1.37) and (2.51)"
---

## Statement

Let $G$ be an algebraic group over $k$ with Lie algebra $\mathfrak g$ ([[def-lie-algebra-of-a-group-scheme]]), and let $H,H_1,H_2$ be algebraic subgroups. (a) For a finite inverse system $(G_i)$ of algebraic groups, $\operatorname{Lie}(\varprojlim G_i)\cong\varprojlim\operatorname{Lie}(G_i)$; in particular $\operatorname{Lie}$ is left exact on exact sequences and $\operatorname{Lie}(H_1\times_G H_2)=\operatorname{Lie}(H_1)\times_{\operatorname{Lie}(G)}\operatorname{Lie}(H_2)$, so if $H_1,H_2\subseteq G$ then $\operatorname{Lie}(H_1\cap H_2)=\operatorname{Lie}(H_1)\cap\operatorname{Lie}(H_2)$ ([[lem-lie-algebra-tangent-space-and-functoriality]]). (b) Assume the Axiom of Choice for the geometric subgroup-generation assertions ([[def-axiom-of-choice]]). If $\operatorname{Lie}(H)=\operatorname{Lie}(G)$, $H$ is smooth and $G$ is connected, then $H=G$; if the Lie algebras of smooth subgroups $H_1,\dots,H_n$ generate $\mathfrak g$ as a Lie algebra and $G$ is connected, then the $H_i$ generate $G$. (c) If $H$ acts on $G$ by conjugation, then $\operatorname{Lie}(C_G(H))=\mathfrak g^H$ and $\operatorname{Lie}(N_G(H))/\operatorname{Lie}(H)=(\mathfrak g/\operatorname{Lie}(H))^H$; in particular $\dim C_G(H)\le\dim\mathfrak g^H$, with equality iff $C_G(H)$ is smooth.

## Facts & Assumptions

**Given:** An algebraic group $G$ over $k$ with Lie algebra $\mathfrak g$, algebraic subgroups $H,H_1,H_2\subseteq G$, and the conjugation action of $H$ on $G$; its adjoint action on $\mathfrak g$ is constructed in [F1], without assuming $G$ affine.

[F1] For the Lie algebra as a functor of points, $\operatorname{Lie}(G)(R)=\mathfrak g(R)=\ker(G(R[\varepsilon])\to G(R))$ naturally in $G$ and $R$ ([[def-lie-algebra-of-a-group-scheme]], [[lem-lie-algebra-tangent-space-and-functoriality]]). Conjugation by $h\in H(R)$ preserves this kernel and commutes with $\varepsilon\mapsto a\varepsilon$ for every $a\in R$; it therefore gives an $R$-linear adjoint action on $\mathfrak g\otimes_kR$, natural in $R$. These actions glue on affine charts of test schemes. Since $\mathfrak g$ is finite-dimensional, its automorphism functor is represented by $\operatorname{GL}_{\mathfrak g}$ ([[lem-general-linear-group-scheme-and-its-coordinate-ring]]; if $\mathfrak g=0$, use the trivial group). The contravariant Yoneda lemma ([[cor-contravariant-yoneda-lemma]]) thus makes this a group-scheme representation of $H$. For affine $G$ it agrees with [[lem-adjoint-representation-of-an-affine-group-scheme]].

[F2] For every finite-type group $K$, $\dim\operatorname{Lie}(K)\ge\dim K$, with equality exactly when $K$ is smooth (Milne, Proposition 1.37, printed p.18, proved by the smoothness criterion at the rational identity and translation). A smooth connected group is geometrically integral; therefore a closed smooth subgroup of the same dimension is the whole group. Under AC, a geometrically reduced finite-type group is smooth ([[lem-nonaffine-connected-group-geometrically-connected]]). The generated-subgroup construction from geometrically reduced sources is Milne, Proposition 2.51, printed p.56; its geometric reducedness is also explained in step 2.1.

## Proof


1.1 On every $k$-algebra $R$, the functor of points of a group-scheme limit is the limit of the point functors. The Lie functor is the kernel of the reduction map from $R[\varepsilon]$ to $R$, and kernels commute with limits: a compatible tuple reduces to the identity exactly when each component does. Hence $\operatorname{Lie}(\varprojlim G_i)=\varprojlim\operatorname{Lie}(G_i)$. Applying this to a kernel or a fiber product gives left exactness and the displayed fiber-product equality. For subgroup inclusions their fiber product is their scheme intersection, and the vector-space fiber product is the intersection of the Lie subspaces. [F1, given]

1.2 Put $\mathfrak h=\operatorname{Lie}(H)$. By [F1], $e^{\varepsilon X}$ lies in the centralizer precisely when it commutes with $H(S)$ for every $k[\varepsilon]$-algebra $S$. This is equivalent to $X$ being invariant in the rational adjoint representation: invariance tested on any $k$-algebra $R$ gives $h e^{\varepsilon'X}h^{-1}=e^{\varepsilon'X}$ in $G(R[\varepsilon'])$ for all $h\in H(R)$; taking $R=S$ and specializing $\varepsilon'$ to the given nilpotent $\varepsilon\in S$ proves the centralizer condition. Conversely take $S=R[\varepsilon]$ and $h\in H(R)$ to recover invariance. Thus $\operatorname{Lie}(C_G(H))=\mathfrak g^H$. The tangent dimension criterion [F2] gives the stated dimension inequality and equality case. [F1, F2]

2.1 Assume AC for part (b). Suppose $\operatorname{Lie}(H)=\operatorname{Lie}(G)$ with $H$ smooth. Since $H\subseteq G$ we have $\dim H\le\dim G$, and by [F2] $\dim G\le\dim\operatorname{Lie}(G)=\dim\operatorname{Lie}(H)=\dim H$, so equality holds throughout; thus $G$ is smooth and $\dim G=\dim H$. A closed subgroup of the connected smooth group $G$ of dimension $\dim G$ equals $G$ by [F2], so $H=G$. Now let $H_1,\dots,H_n$ be smooth subgroups whose Lie algebras generate $\mathfrak g$, and let $H$ be the algebraic subgroup they generate, which is the scheme-theoretic closure of the union of finite product maps from the $H_i$. The product maps and their inverses are stable under multiplication and inversion, so their closure is a subgroup. These maps have geometrically reduced sources and are schematically dominant as a family onto that closure, hence the closure is geometrically reduced and therefore smooth as a finite-type group scheme; by functoriality of $\operatorname{Lie}$, $\operatorname{Lie}(H)$ is a Lie subalgebra of $\mathfrak g$ containing each $\operatorname{Lie}(H_i)$, hence containing the subalgebra they generate, which is all of $\mathfrak g$; so $\operatorname{Lie}(H)=\mathfrak g=\operatorname{Lie}(G)$ and the first part gives $H=G$. [F2, F1, step 1.1, algebra]

3.1 For the normalizer, the same calculation gives $$e^{\varepsilon X}h e^{-\varepsilon X}h^{-1}=e^{\varepsilon(X-\operatorname{Ad}(h)X)}.$$ If $e^{\varepsilon X}$ normalizes $H$, then for every $R$ and $h\in H(R)$ this commutator lies in $H(R[\varepsilon])$ and reduces to the identity; by [F1] this means $X-\operatorname{Ad}(h)X\in\mathfrak h_R$. Hence the class of $X$ in $\mathfrak g/\mathfrak h$ is $H$-invariant. Conversely, if that class is invariant, take any $k[\varepsilon]$-algebra $S$ and $h\in H(S)$. The vector $X-\operatorname{Ad}(h)X$ lies in $\mathfrak h_S$, so the corresponding dual-number point of $H(S[\varepsilon'])$ specializes to the displayed commutator in $H(S)$ under $\varepsilon'\mapsto\varepsilon$. This proves conjugation by $e^{\varepsilon X}$ maps $H(S)$ into itself; applying the argument to $-X$ gives equality, so $e^{\varepsilon X}$ normalizes $H$. Thus $\operatorname{Lie}(N_G(H))$ is the inverse image of $(\mathfrak g/\mathfrak h)^H$, and its quotient by $\mathfrak h$ is that invariant space. This is a quotient of Lie algebras; it is not a claim about $\operatorname{Lie}(N_G(H)/H)$ for nonsmooth $H$. These calculations prove all assertions. [F1, step 1.1, step 2.1, step 1.2] ∎
