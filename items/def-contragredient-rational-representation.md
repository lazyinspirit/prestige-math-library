---
id: def-contragredient-rational-representation
kind: definition
title: "Contragredient (dual) rational representation"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [def-rational-representation-and-comodule-of-an-affine-group-scheme, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, the contragredient before Lemma 22.29 and the highest weight of the contragredient, printed pp. 471-472; Ch. 10 (10.20)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 73 (the dual module V*)"
---

## Definition

Let $(V,r)$ be a finite-dimensional rational representation of an affine group scheme $G$ over $k$
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). The
**contragredient** representation $r^\vee$ is the representation on the algebraic
dual $V^*=\operatorname{Hom}_k(V,k)$
([[def-algebraic-dual-and-linear-functional]]) defined by
$$(r^\vee(g)f)(v)=f(r(g)^{-1}v)$$
for $g\in G(R)$, $f\in V^*_R$ and $v\in V_R$. When $V$ is finite-dimensional,
$r^\vee$ is a rational representation and its comodule is the dual comodule of
$(V,r)$; moreover the weights of $(V^*,r^\vee)$ are the negatives of the weights
of $(V,r)$.

## Remarks

- **Left action.** For $R$-points $g,h$ and $f\in V^*_R$ one has
  $(r^\vee(g)(r^\vee(h)f))(v)=(r^\vee(h)f)(r(g)^{-1}v)=f(r(h)^{-1}r(g)^{-1}v)
  =f(r(gh)^{-1}v)=(r^\vee(gh)f)(v)$ for all $v\in V_R$, since $r$ is a
  representation and $(gh)^{-1}=h^{-1}g^{-1}$; hence $r^\vee$ is a left action
  by $R$-linear automorphisms of $V^*_R$. The inverse in the formula is what
  makes the action a left action, and it is also the reason that the
  contragredient of a contragredient recovers the original representation.
- **Rationality in the finite-dimensional case.** Choose a basis $e_1,\ldots,e_n$ of $V$, its dual basis $e_1^*,\ldots,e_n^*$, and write $\rho(e_j)=\sum_i e_i\otimes a_{ij}$. The dual coaction is
  $$\rho^\vee(e_i^*)=\sum_j e_j^*\otimes S(a_{ij}),$$
  where $S$ is the antipode of $O(G)$. Evaluating at $g\in G(R)$ gives the transpose of $r_R(g)^{-1}$, so its action is the displayed formula. The inverse and transpose matrix identities give the group law naturally in $R$, hence the comodule identities by the representation/comodule dictionary. All matrix entries are regular functions on $G$.
- **Weights.** If $V$ is finite-dimensional and $T$ is a diagonalizable group
  acting on $V$ with weight spaces $V_\chi$, then the dual basis of a basis of
  $V_\chi$ spans the weight space $(V^*)^{-\chi}$: for $f\in(V^*)^{-\chi}$ and
  $v\in V_\chi$ the pairing is compatible with the dual action, so the weights
  of $V^*$ are exactly the $-\chi$ with $V_\chi\ne0$. This is the fact used for
  the contragredient of a simple module.
- **Infinite-dimensional case.** For arbitrary $V$, the formula $f\mapsto f\circ r_k(g)^{-1}$ defines an action of the abstract group $G(k)$ on the full algebraic dual. It need not be rational and need not extend to the module $V^*\otimes_kR$ for every $k$-algebra $R$. For example, let $G=\mathbf G_m$, $V=\bigoplus_{n\ge0}ke_n$ with $e_n$ of weight $n$, and $f(e_n)=1$. Over $R=k[t,t^{-1}]$, precomposition by the universal point gives values $t^{-n}$, which cannot lie in $V^*\otimes_kR$: values of any element of that tensor product span a finite-dimensional $k$-subspace of $R$. Thus the rational contragredient above is stated for finite-dimensional representations, exactly the range used by its consumers.
