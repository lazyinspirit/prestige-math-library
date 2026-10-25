---
id: prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights
kind: proposition
title: Differentiation and integration of highest weights
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-highest-weight-classification-for-a-compact-connected-lie-group, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, def-axiom-of-choice, thm-lie-second-fundamental-theorem, thm-continuous-homomorphisms-between-lie-groups-are-smooth, prop-exponential-map-is-natural-for-lie-group-homomorphisms, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, thm-compact-connected-lie-groups-are-classified-by-root-data, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, thm-cartans-closed-subgroup-theorem, thm-compact-group-weyl-group-is-finite]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8, the analytic-integrality passage between group and algebra weights"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group, $T$ a maximal torus with a fixed positive system, and $\mathfrak s=[\mathfrak g,\mathfrak g]$. All representations below are finite-dimensional complex representations, continuous in the group case. Differentiating a compact-group highest weight
gives the same highest weight for the complexified derived Lie algebra: if
$\pi$ is an irreducible finite-dimensional representation of $G$ with highest
weight $\lambda\in X^*(T)$, then the associated $\mathfrak s_{\mathbb C}$-module
has highest weight the restriction of the differential of $\lambda$ to the
derived Cartan algebra. Conversely, in general a module for $\mathfrak g'_{\mathbb C}$
alone contains no action of the connected centre and therefore does not by
itself determine a representation of $G$. After choosing a representation of
$Z(G)^0$ commuting with the integrated $G_{\mathrm{der}}^{\mathrm{sc}}$-action,
the resulting representation of
$Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}$ descends to $G$ exactly when the
finite central covering kernel acts trivially, equivalently when its weights
on the preimage of $T$ descend to characters in $X^*(T)$.

## Facts & Assumptions

**Given:** AC, the data in the Statement, and a fixed positive system.

[A1] The Axiom of Choice [[def-axiom-of-choice]] covers the choice assumptions of the following interfaces, including countable choice.

[L1] Irreducible finite-dimensional continuous complex representations of $G$ have highest weights in the dominant part of $X^*(T)$ ([[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).

[L2] A torus character differentiates to a complex-linear functional on its complexified Lie algebra, with formula $\chi(\exp X)=e^{d\chi(X)}$, and is determined by its differential ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L3] A Lie-algebra homomorphism from the Lie algebra of a connected simply connected real Lie group to that of a real Lie group integrates uniquely to a smooth group homomorphism ([[thm-lie-second-fundamental-theorem]]).

[L4] Continuous Lie-group homomorphisms are smooth, exponentials are natural, and the exponential map is a local diffeomorphism at zero ([[thm-continuous-homomorphisms-between-lie-groups-are-smooth]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]).

[L5] Multiplication gives a finite central covering $p:H=Z(G)^0\times S\to G$, where $S=G_{\mathrm{der}}^{\mathrm{sc}}$ is compact and simply connected with Lie algebra $\mathfrak s$ ([[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

[L6] A finite-dimensional continuous complex representation of a compact Lie group admits an invariant positive-definite Hermitian inner product ([[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]]).

[L7] Closed subgroups of Lie groups are embedded Lie subgroups, and a maximal torus in a compact connected Lie group is its own centralizer ([[thm-cartans-closed-subgroup-theorem]], [[thm-compact-group-weyl-group-is-finite]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], $\pi$ is smooth and $\pi(\exp X)=\exp(d\pi(X))$. An exponential neighborhood generates a connected group: the generated subgroup is open and its other cosets are open, so it is also closed and must be the whole group. Therefore a complex subspace invariant under the differential is group invariant, since the matrix exponential preserves it; the converse follows by differentiating. A commuting endomorphism of a nonzero irreducible complex representation is scalar: choose an eigenvalue, whose nonzero eigenspace is invariant and hence is the entire space. In particular $Z(G)^0$ acts by scalars. Differentiating the covering in [L5] gives $\mathfrak g=\operatorname{Lie}(Z(G)^0)\oplus\mathfrak s$, with the first summand central. A subspace invariant under $\mathfrak s_{\mathbb C}$ is consequently invariant under all of $d\pi$ and under $G$. Thus restriction to $\mathfrak s_{\mathbb C}$ is irreducible. [L4, L5, algebra]

1.2 Let $v$ be a highest vector of $\pi$, of character $\lambda$ from [L1]. Differentiating $\pi(t)v=\lambda(t)v$ for $t\in T$ gives $d\pi(X)v=d\lambda(X)v$ for $X\in\mathfrak t$, and complex-linear extension gives the same identity on $\mathfrak t_{\mathbb C}$. Positive root operators annihilate $v$: such an operator takes a $T$-weight vector of character $\lambda$ to one of character $\lambda\alpha$, by conjugating the differentiated action with $t\in T$, and a nonzero such weight would lie strictly above the highest weight. The derived Cartan weight is therefore the restriction of this complex-linear $d\lambda$ to $(\mathfrak t\cap\mathfrak s)_{\mathbb C}$. [L1, L2, L4, algebra]

1.3 Conversely let $M$ be a finite-dimensional complex $\mathfrak s_{\mathbb C}$-module. Restrict its action to the real algebra $\mathfrak s$ and apply [L3] with source $S$ and target $\operatorname{GL}_{\mathbb C}(M)$ regarded as a real Lie group. This integrates the action uniquely to $\rho:S\to\operatorname{GL}_{\mathbb C}(M)$. Choose a continuous representation $\zeta:Z(G)^0\to\operatorname{GL}_{\mathbb C}(M)$ commuting with $\rho$. Then $R(z,s)=\zeta(z)\rho(s)$ is a representation of $H$. The derived-algebra data contain no prescribed action of the central factor; when that factor is trivial there is of course no extra choice. For $M=0$ every action and the resulting descent are the unique zero-dimensional ones. [L3, L5, given, algebra]

1.4 Write $K=\ker p$. To justify the torus language, let $U$ be the identity component of the closed Lie subgroup $p^{-1}(T)$. The covering charts imply $p(U)$ contains an identity neighborhood of $T$, hence equals connected $T$. For $u,v\in U$, their commutator lies in finite $K$; continuity on connected $U\times U$ makes it identity. Thus $U$ is a compact connected abelian subgroup, hence a torus. It is maximal: a torus containing it maps to a torus containing $T$, so maps into $T$ and lies in $U$. By [L7] central $K$ lies in $C_H(U)=U$. Since $p(U)=T$, every element of $p^{-1}(T)$ differs from an element of $U$ by one in $K$. Consequently $p^{-1}(T)=U$ is a torus and $U/K=T$. [L5, L7, L4, algebra]

2.1 By [L6] the restriction $R|_U$ is unitary. A finite-dimensional commuting family of unitary operators has a common orthonormal eigenbasis: if some operator is not scalar, its mutually orthogonal eigenspaces are preserved by every other operator, and induction on dimension diagonalizes the restrictions; if all are scalar any orthonormal basis suffices. The resulting diagonal entries are continuous characters $\chi\in X^*(U)$. Since $K\subseteq U$, it acts trivially on $M$ exactly when every occurring character is trivial on $K$. Such a character factors uniquely through $U/K=T$, and the factor is continuous because the compact-to-Hausdorff surjection $U\to T$ is a quotient map. Thus this is precisely the condition that all weights lie in $p^*X^*(T)$. Conversely a pulled-back character is trivial on $K$. For the zero module the character family is empty and both conditions hold. [L2, L6, step 1.3, step 1.4, algebra]

3.1 The product representation $R$ descends exactly when $R(hk)=R(h)$ for every $h\in H,k\in K$, equivalently when $R(k)=I$. In that case define $\pi(p(h))=R(h)$; this is well defined and is a homomorphism. Local inverse sheets of the covering show it is continuous and smooth. Necessity follows by pulling back any representation of $G$. Step 2.1 proves the equivalent character-lattice condition. In the forward direction, the irreducibility established in step 1.1 means the nonzero highest vector of step 1.2 generates the whole derived-algebra module, not merely a submodule. If $\mathfrak s=0$, irreducibility forces dimension one, its derived highest weight is zero, and the independent datum is exactly a torus character. These arguments prove the Statement including the central-action qualification. [A1, step 1.1, step 1.2, step 1.3, step 2.1] ∎
