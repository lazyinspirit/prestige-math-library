---
id: ex-the-peter-weyl-decomposition-of-l-two-su-two
kind: example
title: Peter–Weyl decomposition of L2(SU(2))
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-peter-weyl-for-compact-lie-groups, thm-highest-weight-classification-for-a-compact-connected-lie-group, prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights, def-axiom-of-choice, thm-finite-dimensional-representations-of-sl-two, ex-unitary-and-special-unitary-lie-groups, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, prop-exponential-map-is-natural-for-lie-group-homomorphisms, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3 (the SU(2) Peter–Weyl decomposition)"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Use normalized Haar measure and the action $((a,b)f)(g)=f(a^{-1}gb)$. Let $V(n)$ denote the irreducible representation with highest character $\operatorname{diag}(z,z^{-1})\mapsto z^n$, for the upper-triangular positive root. As an $SU(2)\times SU(2)$-module,
$$L^2(SU(2))\cong\widehat{\bigoplus_{n\ge0}}\ V(n)\otimes V(n)^*,$$
the Hilbert direct sum over $n\ge0$ of the tensor products of the irreducible
representation of highest weight $n$ with its dual; under the left action alone,
$V(n)$ occurs with multiplicity $n+1$.

## Facts & Assumptions

**Given:** AC, $SU(2)$, normalized Haar measure and the action in the Example.

[A1] The Axiom of Choice [[def-axiom-of-choice]] covers the following suppliers and the choice of an invariant inner product and orthonormal basis for each representative.

[L1] For a compact Lie group, normalized matrix coefficients of one representative of each irreducible unitary class form an orthonormal Hilbert basis of $L^2(G)$ ([[thm-peter-weyl-for-compact-lie-groups]]).

[L2] For compact connected $G$, irreducibles are classified by dominant characters of its actual maximal torus; differentiation restricts such a highest weight to the complexified derived Cartan ([[thm-highest-weight-classification-for-a-compact-connected-lie-group]], [[prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights]]). No converse correspondence without central data and descent is asserted here.

[L3] A nonzero irreducible finite-dimensional $\mathfrak{sl}_2$-module has highest $h$-eigenvalue $n\ge0$, weights $n,n-2,\ldots,-n$ each of multiplicity one, and dimension $n+1$ ([[thm-finite-dimensional-representations-of-sl-two]]).

[L4] $SU(2)$ is a real Lie group with Lie algebra the skew-Hermitian traceless matrices ([[ex-unitary-and-special-unitary-lie-groups]]). Characters of a torus are determined by their differential, with $\chi(\exp X)=e^{d\chi(X)}$ and integral values on the exponential lattice in units $2\pi i$ ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L5] The left and right actions are $L_af(g)=f(a^{-1}g)$ and $R_bf(g)=f(gb)$ ([[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]]). Every finite-dimensional continuous representation of a compact Lie group admits an invariant positive-definite Hermitian form ([[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]]).

[L6] Lie-group homomorphisms intertwine exponential maps, and the exponential map is a local diffeomorphism at zero ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $SU(2)$ has the unique form $\begin{pmatrix}a&b\\-\overline b&\overline a\end{pmatrix}$ with $|a|^2+|b|^2=1$. This identifies it homeomorphically with the unit sphere in $\mathbb R^4$, which is compact and path connected: non-antipodal points are joined by normalizing their straight segment, and antipodal ones can be joined in two such segments through a perpendicular unit vector. The diagonal circle $T=\{\operatorname{diag}(z,z^{-1}):|z|=1\}$ is a maximal torus, since a matrix commuting with one of its elements having distinct eigenvalues must be diagonal; thus its centralizer is $T$, excluding any larger torus. Put $h=\operatorname{diag}(1,-1)$, $e=E_{12}$ and $f=E_{21}$. The matrices $ih,e-f,i(e+f)$ are a real basis of $\mathfrak{su}(2)$ and a complex basis of $\mathfrak{sl}_2(\mathbb C)$. Their brackets span the same real space, so the derived algebra is all of $\mathfrak{su}(2)$. The relations $[h,e]=2e,[h,f]=-2f,[e,f]=h$ give the simple coroot $h$ and positive root character $z^2$. By [L4], characters of $T$ are exactly $\chi_n(z)=z^n$ for $n\in\mathbb Z$, since its exponential parameter has kernel $2\pi\mathbb Z$. The complexified differential satisfies $d\chi_n(h)=n$, and dominance is $n\ge0$. [L4, given, algebra]

2.1 By [L2] and step 1.1 there is exactly one irreducible group representation $V(n)$ for each integer $n\ge0$, and its differentiated highest weight is $n$. Its differentiated module is irreducible: if a complex subspace is invariant under $d\pi(\mathfrak{su}(2))$, it is preserved by every $\exp(d\pi(X))=\pi(\exp X)$ by [L6]. The local exponential image generates the connected group $SU(2)$ of step 1.1, so the subspace is group-invariant and hence is either zero or all of $V(n)$. Complex linearity then makes it irreducible for $\mathfrak{sl}_2(\mathbb C)=\mathfrak{su}(2)_{\mathbb C}$. Thus [L3] gives $d_n=\dim V(n)=n+1$. Choose invariant Hermitian forms and orthonormal bases using [L5] and [A1]. The dual of an irreducible finite-dimensional group representation is irreducible: the annihilator of a proper nonzero invariant subspace of the dual would be a proper nonzero invariant subspace of the original representation. Since double dual returns the original representation, duality permutes all irreducible classes bijectively. [A1, L2, L3, L5, L6, step 1.1, algebra]

3.1 For the representation $\pi_n$ on $V(n)$ define the linear coefficient map on the Hilbert tensor product by $C_n(v\otimes\varphi)(g)=\sqrt{d_n}\,\varphi(\pi_n(g^{-1})v)$. Under [L5], $C_n(v\otimes\varphi)(a^{-1}gb)=\sqrt{d_n}\,\varphi(\pi_n(b^{-1})\pi_n(g^{-1})\pi_n(a)v)=C_n(\pi_n(a)v\otimes\pi_n^*(b)\varphi)(g)$. Thus the left factor acts on $V(n)$ and the right factor on its dual, exactly as in the Example. For an orthonormal basis $e_i$ with dual basis $e_j^*$, these are the normalized matrix coefficients of the dual representation: $(\pi_n^*(g)e_j^*)(e_i)=e_j^*(\pi_n(g^{-1})e_i)$. Hence [L1] proves that $C_n$ is an isometry and that its images for different $n$ are orthogonal. [L1, L5, step 2.1, algebra]

4.1 By step 2.1 the dual representations occurring in step 3.1 exhaust the irreducible classes. Therefore [L1] says the union of the displayed orthonormal coefficient families is complete. The isometry on the algebraic direct sum extends to its Hilbert completion; its image is closed by completeness and dense by that orthonormal basis, hence is all of $L^2(SU(2))$. It is equivariant by step 3.1, proving the stated two-sided decomposition. On restriction to the left group each tensor product is $d_n$ copies of $V(n)$, so its multiplicity is $n+1$. At $n=0$ the representation is one-dimensional with trivial differential, hence trivial on the connected group, and its coefficient is the constant function $1$; at $n=1$ the block has dimension $4$ and left multiplicity $2$. [L1, step 2.1, step 3.1] ∎
