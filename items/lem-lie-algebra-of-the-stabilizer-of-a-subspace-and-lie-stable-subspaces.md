---
id: lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces
kind: lemma
title: "Lie algebras of subspace stabilizers and Lie-stable subspaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [cor-every-vector-space-has-a-basis, def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-fibre-product-schemes-universal-property, def-axiom-of-choice, def-lie-algebra-of-a-group-scheme, def-rational-representation-and-comodule-of-an-affine-group-scheme, lem-lie-algebra-of-the-general-linear-group, lem-lie-algebra-tangent-space-and-functoriality, lem-lie-functor-exactness-fixed-points-and-generation, thm-cartier-smoothness-for-affine-groups-in-characteristic-zero, lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 10, Definition 10.30 and Proposition 10.31, printed pp. 195-196; Ch. 3 (3.23)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "none (this step is not used in the Chevalley-group proof route)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be an
affine group scheme of finite type over a field $k$ with Lie algebra
$\mathfrak g=\operatorname{Lie}(G)$
([[def-lie-algebra-of-a-group-scheme]]), let $(V,r)$ be a rational
representation ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]),
and let $W\subseteq V$ be a subspace with scheme-theoretic stabilizer
$\operatorname{Stab}_G(W)$
([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]). Then:
(a) $\operatorname{Lie}(\operatorname{Stab}_G(W))=\{x\in\mathfrak g:xW\subseteq W\}$
(Milne 10.31); (b) if moreover $k$ has characteristic $0$, $G$ is connected and
smooth, and $\mathfrak gW\subseteq W$, then $W$ is $G$-stable. In particular a
subspace of a finite-dimensional representation of a connected semisimple group
in characteristic zero is $G$-stable if and only if it is stable under
$\mathfrak g$.

## Facts & Assumptions

**Given:** An affine group scheme $G$ of finite type over $k$ with Lie algebra $\mathfrak g$ ([[def-lie-algebra-of-a-group-scheme]]), a rational representation $(V,r)$ with differential $\mathrm dr:\mathfrak g\to\mathfrak{gl}_V$, a subspace $W\subseteq V$, and the scheme-theoretic stabilizer $\operatorname{Stab}_G(W)$ with $R$-points $\{g\in G(R):r(g)W_R=W_R\}$ ([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]).

[F1] *The universal stabilizer equations.* Put $A=O(G)$ and $Q=V/W$. The representation coaction and its inverse coaction are $\rho:V\to V\otimes A$ and $(\operatorname{id}\otimes S)\rho$. Under AC, $Q$ has a basis by [[cor-every-vector-space-has-a-basis]], so its coordinate functionals detect zero in $Q\otimes_k R$ for every $k$-algebra $R$. Applying these functionals to the images of $w\in W$ under both coactions gives coefficient equations in $A$ for $r_R(g)W_R\subseteq W_R$ and $r_R(g)^{-1}W_R\subseteq W_R$. Together they express equality and cut out a closed subgroup scheme of $G$. Its coordinate algebra is a quotient of $A$, hence finitely generated over $k$ by [[lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]]; thus the stabilizer is of finite type, even when $V$ is infinite-dimensional. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[def-algebraic-group-action-and-scheme-theoretic-stabilizer]], [[def-fibre-product-schemes-universal-property]])

[F2] *The differential action.* A dual-number point $e^{\varepsilon X}$ acts on $V[\varepsilon]$ by $1+\varepsilon\,\mathrm dr(X)$, with inverse $1-\varepsilon\,\mathrm dr(X)$. This follows directly by evaluating the representation coaction at a point reducing to the identity. For finite-dimensional $V$, it is the matrix calculation $\operatorname{Lie}(\operatorname{GL}_n)=M_n(k)$ of [[lem-lie-algebra-of-the-general-linear-group]]; the same coaction calculation works for arbitrary $V$ without treating its automorphism functor as a finite-type scheme. ([[def-lie-algebra-of-a-group-scheme]], [[lem-lie-algebra-tangent-space-and-functoriality]])

[F3] *Left exactness of $\operatorname{Lie}$.* For algebraic subgroups $H_1,H_2\subseteq G$ with fibre product over a morphism, $\operatorname{Lie}$ commutes with the fibre product: in particular the Lie algebra of the pullback of a closed subgroup under a morphism is the fibre product of the Lie algebras, and $\operatorname{Lie}(H_1\cap H_2)=\operatorname{Lie}(H_1)\cap\operatorname{Lie}(H_2)$ (see (a)); moreover if $\operatorname{Lie}(H)=\operatorname{Lie}(G)$, $H$ is smooth and $G$ is connected, then $H=G$ (see (b)) ([[lem-lie-functor-exactness-fixed-points-and-generation]], [[lem-lie-algebra-tangent-space-and-functoriality]]).

[F4] *Cartier's theorem.* In characteristic $0$ every affine group scheme of finite type over $k$ is smooth ([[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]]; AC is used here and is inherited by this item).

## Proof

**Proof technique:** direct.

1.1 The subgroup $H=\operatorname{Stab}_G(W)$ is represented by the closed coefficient equations of [F1]. A point $e^{\varepsilon X}\in G(k[\varepsilon])$ acts by $1+\varepsilon\,\mathrm dr(X)$ by [F2], so it carries $w_0+\varepsilon w_1$ to $w_0+\varepsilon(w_1+\mathrm dr(X)w_0)$. This belongs to $W[\varepsilon]$ for every $w_0,w_1\in W$ exactly when $\mathrm dr(X)W\subseteq W$. In that case the inverse $1-\varepsilon\,\mathrm dr(X)$ also preserves $W[\varepsilon]$, so the condition is equality of submodules, as required by the stabilizer functor. This proves the criterion without any dimensional restriction on $V$. [F1, F2, given]

2.1 *Part (a).* The Lie algebra of the closed subgroup $H$ consists of its dual-number points reducing to the identity. The inclusion $H\hookrightarrow G$ injects those points into $\mathfrak g$ by [F3]; step 1.1 identifies its image with $\{X\in\mathfrak g:\mathrm dr(X)W\subseteq W\}$. Hence $\operatorname{Lie}(H)=\{X\in\mathfrak g:XW\subseteq W\}$, with the differential action understood as in the Statement. [F2, F3, step 1.1]

3.1 *Part (b).* Assume $\operatorname{char}k=0$, $G$ connected and smooth, and $\mathfrak gW\subseteq W$. By step 2.1, $\operatorname{Lie}(\operatorname{Stab}_G(W))=\mathfrak g$; the stabilizer is an affine group scheme of finite type, so it is smooth by Cartier's theorem; and the Lie-exactness criterion for connected groups now gives $\operatorname{Stab}_G(W)=G$, that is, $W$ is $G$-stable. [F3, F4, step 2.1]

4.1 *The particular case.* If $G$ is connected semisimple in characteristic $0$, then $G$ is smooth by Cartier's theorem, and step 3.1 applies: $\mathfrak gW\subseteq W$ implies that $W$ is $G$-stable. Conversely, if $W$ is $G$-stable then $\operatorname{Stab}_G(W)=G$ and step 2.1 gives $\mathfrak gW=\operatorname{Lie}(\operatorname{Stab}_G(W))W\subseteq W$. Hence $W$ is $G$-stable if and only if $\mathfrak gW\subseteq W$. [F4, step 2.1, step 3.1] ∎

## Remarks

- In positive characteristic the implication (b) can fail: $G$ need not be smooth, and $\operatorname{Lie}(\operatorname{Stab}_G(W))=\mathfrak g$ does not force $\operatorname{Stab}_G(W)=G$; this is why both characteristic $0$ and Cartier's theorem appear in the statement.
- The equality of part (a) is Milne 10.31; the extra hypothesis $\mathfrak gW\subseteq W$ in part (b) is exactly $\operatorname{Lie}(\operatorname{Stab}_G(W))=\operatorname{Lie}(G)$ by part (a).
