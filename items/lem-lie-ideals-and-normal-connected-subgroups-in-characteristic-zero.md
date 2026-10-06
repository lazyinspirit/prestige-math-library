---
id: lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero
kind: lemma
title: "Lie ideals and normal connected subgroups in characteristic zero"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-axiom-of-choice, lem-adjoint-representation-of-an-affine-group-scheme, lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces, lem-lie-functor-exactness-fixed-points-and-generation, thm-cartier-smoothness-for-affine-groups-in-characteristic-zero, thm-lie-bracket-and-adjoint-action-from-infinitesimals]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
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
      locator: "Ch. 10 (10.30)-(10.34), printed pp. 195-198; Ch. 3 (3.23)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "none (characteristic-zero group/Lie interface)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
smooth connected affine algebraic group over a field $k$ of characteristic $0$,
let $H\subseteq G$ be a smooth closed subgroup scheme with identity component
$H^\circ$, and let
$\mathfrak h=\operatorname{Lie}(H)\subseteq\mathfrak g=\operatorname{Lie}(G)$
([[lem-adjoint-representation-of-an-affine-group-scheme]],
[[thm-lie-bracket-and-adjoint-action-from-infinitesimals]]). Then:
(a) $[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$ if and only if $H^\circ$ is
normal in $G$; (b) if $H$ is normal in $G$, then
$[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$. In particular, if $H$ is
connected, then $H$ is normal in $G$ if and only if $\mathfrak h$ is an ideal of
$\mathfrak g$.

## Facts & Assumptions

**Given:** A smooth connected affine group scheme $G$ over a
characteristic-zero field $k$ with $\mathfrak g=\operatorname{Lie}(G)$, a smooth
closed subgroup scheme $H\subseteq G$ with $\mathfrak h=\operatorname{Lie}(H)$,
and the adjoint representation $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$.

[F1] *Adjoint action and its differential.* For every $R$-point $x\in G(R)$
the conjugation automorphism $c_x:G_R\to G_R$ satisfies
$\operatorname{Lie}(c_x)=\operatorname{Ad}(x)$ on $\mathfrak g_R$, and
$x\,e^{\varepsilon X}x^{-1}=e^{\varepsilon\operatorname{Ad}(x)X}$; the
differential $\operatorname{ad}=\operatorname{Lie}(\operatorname{Ad})$ is the
bracket, $[X,Y]=\operatorname{ad}(X)Y$, so that
$\operatorname{Ad}(e^{\varepsilon Y})=\operatorname{id}+\varepsilon\,\operatorname{ad}(Y)$
on $\mathfrak g\otimes k[\varepsilon]$
([[lem-adjoint-representation-of-an-affine-group-scheme]],
[[thm-lie-bracket-and-adjoint-action-from-infinitesimals]]).

[F2] *Lie-stable subspaces are stable.* If $k$ has characteristic $0$, $G$ is
connected and smooth, $(V,r)$ is a rational representation and
$W\subseteq V$ satisfies $\mathfrak gW\subseteq W$, then $W$ is $G$-stable
([[lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces]]).

[F3] *Connected subgroups with equal Lie algebras.* If $H_1\subseteq H_2$ are
closed subgroup schemes of a connected algebraic group, $H_1$ and $H_2$ are
smooth, $H_2$ is connected and
$\operatorname{Lie}(H_1)=\operatorname{Lie}(H_2)$, then $H_1=H_2$
([[lem-lie-functor-exactness-fixed-points-and-generation]]).

The same supplier, part (c), identifies $\operatorname{Lie}(N_G(H^\circ))$ with the inverse image of $(\mathfrak g/\mathfrak h)^{H^\circ}$ in $\mathfrak g$; this is a statement about the normalizer Lie algebra, not the Lie algebra of a quotient group. [[lem-lie-functor-exactness-fixed-points-and-generation]]

[F4] *Cartier.* Every affine group scheme of finite type over a
characteristic-zero field is smooth
([[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]]; AC is used
here and is inherited by this item).

## Proof

**Proof technique:** direct.

1.1 For every $k$-algebra $R$ and $x\in G(R)$, $\operatorname{Lie}(c_x)=\operatorname{Ad}(x)$ on $\mathfrak g_R$, and for $Y\in\mathfrak g$ the dual-number point $e^{\varepsilon Y}\in G(k[\varepsilon])$ acts by $\operatorname{Ad}(e^{\varepsilon Y})=\operatorname{id}+\varepsilon\operatorname{ad}(Y)$ on $\mathfrak g\otimes_kk[\varepsilon]$. [F1, given]

1.2 *The identity component.* $H^\circ$ is a smooth closed connected subgroup scheme of $G$ with $\operatorname{Lie}(H^\circ)=\mathfrak h$: it is smooth by Cartier's theorem, and the identity component of the smooth group scheme $H$ has the same Lie algebra as $H$. [F4, given]

2.1 *Part (b).* Assume that $H$ is normal in $G$. For $Y\in\mathfrak g$ the point $e^{\varepsilon Y}\in G(k[\varepsilon])$ normalizes $H_{k[\varepsilon]}$, so by step 1.1 the automorphism $\operatorname{Lie}(c_{e^{\varepsilon Y}})=\operatorname{id}+\varepsilon\operatorname{ad}(Y)$ of $\mathfrak g\otimes k[\varepsilon]$ preserves $\mathfrak h\otimes k[\varepsilon]$. Writing $X\in\mathfrak h$ as $X$, this says $X+\varepsilon[Y,X]\in\mathfrak h\otimes k[\varepsilon]$, hence $[Y,X]\in\mathfrak h$; as $Y\in\mathfrak g$ was arbitrary, $[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$. [F1, step 1.1]

2.2 *Part (a), reverse.* Assume $[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$. By [F2] applied to $(\mathfrak g,\operatorname{Ad})$, the subspace $\mathfrak h$ is $G$-stable. Put $N=N_G(H^\circ)$, a closed affine subgroup scheme of $G$. The normalizer formula in [[lem-lie-functor-exactness-fixed-points-and-generation]], part (c), identifies $\operatorname{Lie}(N)$ with the inverse image of $(\mathfrak g/\mathfrak h)^{H^\circ}$. Since $\mathfrak h$ is a Lie ideal, the differential action of $\operatorname{Lie}(H^\circ)=\mathfrak h$ on $Q=\mathfrak g/\mathfrak h$ is zero. Equip $Q\oplus k$ with the quotient representation and a trivial last summand. For each $v\in Q$, the line $k(v,1)$ is Lie-stable, hence $H^\circ$-stable by [F2] applied to the smooth connected characteristic-zero group $H^\circ$. For every $R$ and $h\in H^\circ(R)$, its last coordinate forces the scalar by which $h$ preserves this line to be $1$, so $h(v,1)=(v,1)$. Thus every $v$ is fixed and the quotient representation is trivial. Consequently $(\mathfrak g/\mathfrak h)^{H^\circ}=\mathfrak g/\mathfrak h$, and $\operatorname{Lie}(N)=\mathfrak g$. Cartier [F4] makes $N$ smooth; [F3] for the nested inclusion $N\subseteq G$ now gives $N=G$. Therefore $H^\circ$ is normal in $G$. [F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 *Part (a), forward.* If $H^\circ$ is normal in $G$, then step 2.1 applied to the normal smooth closed subgroup $H^\circ$ with Lie algebra $\mathfrak h$ gives $[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$. [step 2.1, step 1.2]

4.1 If $H$ is connected then $H=H^\circ$ and steps 3.1 and 2.2 give the equivalence of normality with $\mathfrak h$ being an ideal of $\mathfrak g$; steps 2.1, 3.1 and 2.2 together prove all three assertions. [step 2.1, step 3.1, step 2.2] ∎

## Remarks

- The connectedness of $H$ is essential in the equivalence: a finite non-normal
  subgroup $H$ of a connected group in characteristic $0$ has
  $\mathfrak h=0$, so $[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$ holds while
  $H$ is not normal (for instance a subgroup of order $2$ in
  $\operatorname{PGL}_2$). Only $H^\circ$ is detected by the Lie algebra, and
  the statement is worded accordingly.
- The hypothesis that $k$ has characteristic $0$ enters through Cartier's
  theorem and through the Lie-stable-subspace lemma; both are used to pass from
  the infinitesimal condition to the group.
