---
id: def-restricted-weyl-group
kind: definition
title: Restricted weyl group
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-maximal-split-abelian-subspace-and-real-rank, def-restricted-root-and-restricted-root-space, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §5, definition of W(G,A) = N_K(a)/Z_K(a), printed p. 381"
landmark: false
verification:
  audited: 2026-09-22
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, let $G$
be a connected semisimple Lie group with finite center and Lie algebra
$\mathfrak g_0$, let $\Theta$ be a global Cartan involution of $G$ with
$d\Theta_e=\theta$, and put $K=G^\Theta$
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]);
then $K$ is a closed compact subgroup of $G$ with Lie algebra
$\mathfrak k_0$, and we write $\operatorname{Ad}$ for the adjoint
representation of $G$. Let
$\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace
([[def-maximal-split-abelian-subspace-and-real-rank]]). The **normalizer** and
**centralizer** of $\mathfrak a$ in $K$ are
$$N_K(\mathfrak a)=\{k\in K:\operatorname{Ad}(k)\mathfrak a=\mathfrak a\},\qquad Z_K(\mathfrak a)=\{k\in K:\operatorname{Ad}(k)H=H\text{ for every }H\in\mathfrak a\}.$$
Both are subgroups of $K$: they contain the identity, and for
$k,l\in K$ the identities $\operatorname{Ad}(kl)=\operatorname{Ad}(k)\operatorname{Ad}(l)$
and $\operatorname{Ad}(k^{-1})=\operatorname{Ad}(k)^{-1}$ show stability under
products and inverses. They are closed in $K$, being the preimages of the
closed conditions $\operatorname{Ad}(k)\mathfrak a=\mathfrak a$ and
$\operatorname{Ad}(k)|_{\mathfrak a}=\mathrm{id}$ under the continuous
homomorphism $\operatorname{Ad}$; and $Z_K(\mathfrak a)$ is a normal subgroup
of $N_K(\mathfrak a)$, because it is the kernel of the restriction
$$N_K(\mathfrak a)\longrightarrow\operatorname{GL}(\mathfrak a),\qquad k\longmapsto\operatorname{Ad}(k)|_{\mathfrak a}.$$

The **restricted Weyl group** of the pair $(\mathfrak g_0,\mathfrak a)$ is the
quotient group
$$W(\mathfrak g_0,\mathfrak a)=N_K(\mathfrak a)/Z_K(\mathfrak a).$$
For $k\in N_K(\mathfrak a)$ the restriction
$\operatorname{Ad}(k)|_{\mathfrak a}$ is a linear automorphism of
$\mathfrak a$, since $\operatorname{Ad}(k)$ is invertible and preserves
$\mathfrak a$; the assignment $k\mapsto\operatorname{Ad}(k)|_{\mathfrak a}$ is
a homomorphism by the identities above, so it descends to a well-defined
injective homomorphism
$$W(\mathfrak g_0,\mathfrak a)\longrightarrow\operatorname{GL}(\mathfrak a),$$
whose injectivity is exactly the definition of $Z_K(\mathfrak a)$ as kernel.
Thus $W(\mathfrak g_0,\mathfrak a)$ is a group of linear transformations of
$\mathfrak a$, and it acts faithfully on $\mathfrak a$; since
$\operatorname{Ad}(k)$ is invertible, the transpose action
$$(\lambda,k)\longmapsto \lambda\circ\operatorname{Ad}(k)^{-1},\qquad\mathfrak a^*\times W(\mathfrak g_0,\mathfrak a)\longrightarrow\mathfrak a^*,$$
gives a faithful dual action on the dual space $\mathfrak a^*$. The notation
$W(\mathfrak g_0,\mathfrak a)$ is the one used in
[[thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system]]:
its elements act on the restricted roots $\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$
([[def-restricted-root-and-restricted-root-space]]) by permuting them, and the
restricted Weyl group is the reflection group of $\Sigma$, so it is a finite
group; the reflection group structure is the subject of that item.
