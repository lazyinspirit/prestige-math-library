---
id: lem-eberlein-smulian-separable-reduction
kind: lemma
title: Eberlein–Šmulian separable reduction
status: published
origin: pipeline
deps: ["def-weak-topology-on-a-normed-space", "def-separable-space", "thm-rationals-countable", "lem-rat-embeds-dense", "thm-product-of-countable", "lem-countable-iff-surjection-from-n", "thm-relative-hahn-banach-norm-preserving-extension", "thm-relative-hahn-banach-geometric-separation", "lem-closed-subspace-of-a-banach-space-is-banach", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "Proof of Theorem 3.42, reduction to the smallest closed span, printed p. 145"
    - title: "Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Hahn–Banach extension and geometric separation, §§1.1–1.2, pp. 1–7"
---

## Statement

Assume HB.  Let $X$ be a real or complex Banach space and let
$(x_n)_{n\in\mathbb N}$ be a sequence in $X$.  Put

$$Y=\overline{\operatorname{span}_{\mathbb K}\{x_n:n\in\mathbb N\}}^{\|\cdot\|}.$$

Then $Y$, with the restricted norm, is a separable Banach space.  Its intrinsic
weak topology $\sigma(Y,Y^*)$ is exactly the relative topology induced by
$\sigma(X,X^*)$, and $Y$ is weakly closed in $X$.

## Facts & Assumptions

**Given:** HB, a real or complex Banach space $X$, and one supplied sequence
$(x_n)$ in $X$.

[F1] A topological space is separable when it has an at most countable dense
subset ([[def-separable-space]]).

[F2] The rationals are countably infinite, products of two at most countable
sets are at most countable, and every nonempty image of a surjection from
$\mathbb N$ is at most countable
([[thm-rationals-countable]], [[thm-product-of-countable]],
[[lem-countable-iff-surjection-from-n]]).

[F3] The embedded rationals are dense in $\mathbb R$
([[lem-rat-embeds-dense]]).

[F4] Under HB, each bounded scalar-linear functional on a subspace extends to
the ambient normed space with the same norm
([[thm-relative-hahn-banach-norm-preserving-extension]]).

[F5] Under HB, a point outside a nonempty closed convex set is uniformly
strictly separated from that set by the real part of a member of the ambient
dual ([[thm-relative-hahn-banach-geometric-separation]]).

[F6] A closed linear subspace of a Banach space is Banach with the restricted
norm ([[lem-closed-subspace-of-a-banach-space-is-banach]]).

[F7] The weak topology is the initial topology of all bounded scalar-linear
functionals ([[def-weak-topology-on-a-normed-space]]), and HB denotes the real
dominated-extension principle
([[def-hahn-banach-extension-principle-relative]]).

## Proof

**Proof technique:** explicit countable dense set, followed by Hahn–Banach
extension and separation.

1.1 Let $\mathbb Q_{\mathbb K}=\mathbb Q$ in the real case and $\mathbb Q+i\mathbb Q$ in the complex case, with the canonical embeddings into the scalar field understood. By [F2], $\mathbb Q_{\mathbb K}$ is at most countable: in the complex case it is the image of the countable product $\mathbb Q\times\mathbb Q$. It is nonempty, so fix one surjection $q:\mathbb N\to\mathbb Q_{\mathbb K}$. This is one instantiation of the countability theorem, not a countable family of choices. [F2]

1.2 The scalar set $\mathbb Q_{\mathbb K}$ is dense in $\mathbb K$. This is [F3] over $\mathbb R$. Over $\mathbb C$, approximate the real and imaginary parts separately and use $|(a+ib)-(r+is)|\le |a-r|+|b-s|$. [F3, algebra]

1.3 Every $F\in X^*$ restricts to a member of $Y^*$, so every ambient weak subbasic set has an intrinsically weak-open trace on $Y$. Conversely, given one $g\in Y^*$, [F4] supplies $F\in X^*$ with $F|_Y=g$. Therefore the inverse image under $g$ of any scalar-open set is the trace on $Y$ of the corresponding ambient weak-open inverse image under $F$. Finite intersections behave the same way. The two topologies on $Y$ are equal. [F4, F7]

2.1 The set $\mathbb N^{<\mathbb N}$ of finite strings of naturals has a choice-free enumeration: order strings first by $|s|+\sum_{j<|s|}s(j)$, then by length, and then lexicographically. Each fixed-value block is finite, and the displayed order lists every finite string. Map $s=(s(0),\ldots,s(m-1))$ to $d_s=\sum_{j=0}^{m-1}q(s(j))x_j$, with empty sum $0$. Its image $D=\{d_s:s\in\mathbb N^{<\mathbb N}\}$ is nonempty and at most countable by [F2]. [step 1.1, F2, construct]

3.1 The set $D$ is norm dense in $\operatorname{span}_{\mathbb K}\{x_n:n\in\mathbb N\}$. Indeed, write a given vector there as $u=\sum_{j=0}^{m-1}\alpha_jx_j$, padding with zero coefficients when necessary. If $m=0$, then $u=0=d_\varnothing$. If $m>0$ and $\varepsilon>0$, put $S=\sum_{j<m}(1+\|x_j\|)>0$. By step 1.2, make the finitely many choices $r_j\in\mathbb Q_{\mathbb K}$ with $|\alpha_j-r_j|<\varepsilon/S$. Choose indices $k_j$ with $q(k_j)=r_j$; only finitely many choices are involved. For $s=(k_0,\ldots,k_{m-1})$, the triangle inequality gives $\|u-d_s\|\le\sum_{j<m}|\alpha_j-r_j|\|x_j\|<(\varepsilon/S)\sum_{j<m}\|x_j\|<\varepsilon$. Thus $\overline D^{\|\cdot\|}=Y$. [step 1.1, step 2.1, step 1.2, algebra]

4.1 By [F1] and step 3.1, $Y$ is separable. The norm closure of a linear subspace is again linear: approximating two vectors and using the triangle inequality proves closure under addition, and multiplying an approximating net by one fixed scalar proves closure under scalar multiplication, including the scalar zero. Hence $Y$ is a closed linear subspace of the Banach space $X$, so [F6] makes $Y$ Banach. [F1, F6, step 3.1]

5.1 Finally take $z\in X\setminus Y$. The set $Y$ is nonempty, closed and convex, while $\{z\}$ is compact and disjoint from it. By [F5], there are $f\in X^*$, $a\in\mathbb R$ and $\delta>0$ such that $\operatorname{Re}f(y)\le a-\delta<a+\delta\le\operatorname{Re}f(z)$ for every $y\in Y$. The weakly open set $\{w\in X:\operatorname{Re}f(w)>a\}$ contains $z$ and misses $Y$. Every point of $X\setminus Y$ therefore has a weak neighborhood in the complement, so $Y$ is weakly closed. This uses HB only through [F4] and [F5]: the proof never selects extensions or separators simultaneously for a family. [F4, F5, F7, step 4.1] ∎

## Source notes

Bühler–Salamon, proof of Theorem 3.42, printed p. 145, uses the smallest closed
span of a sequence as the separable reduction.  The intrinsic/relative weak
topology and weak-closedness details are supplied here from the exact
HB-relative extension and separation results cited above.
