---
id: ex-all-finite-dimensional-irreducible-sl-two-modules
kind: example
title: All irreducible finite-dimensional sl2 modules
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-special-linear-lie-algebra-sl-two, thm-finite-dimensional-representations-of-sl-two, def-representation-of-a-lie-algebra, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, def-weight-and-weight-space-of-a-lie-algebra-representation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.3 and §4.8"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter I §3 and Chapter V §1"
proof_strategy: direct
---

## Example

Let $\mathfrak{sl}_2=\mathfrak{sl}_2(\mathbb C)$ have its standard basis
$e,f,h$ with $[e,f]=h$, $[h,e]=2e$, $[h,f]=-2f$
([[def-special-linear-lie-algebra-sl-two]]). For every integer $n\ge0$ let
$V(n)$ be the vector space with basis $v_0,v_1,\dots,v_n$ and let
$$h\cdot v_k=(n-2k)v_k,\qquad f\cdot v_k=v_{k+1},\qquad e\cdot v_k=k(n-k+1)v_{k-1},$$
where $v_{-1}=v_{n+1}=0$. Then:

(i) these formulas define a representation of $\mathfrak{sl}_2$ on $V(n)$;

(ii) $V(n)$ is irreducible of dimension $n+1$;

(iii) every finite-dimensional irreducible $\mathfrak{sl}_2$-module is
isomorphic to exactly one $V(n)$.

## Facts & Assumptions

**Given:** The Lie algebra $\mathfrak{sl}_2$ with basis $e,f,h$ ([[def-special-linear-lie-algebra-sl-two]]), the displayed operators $E,F,H$ on the basis $v_0,\dots,v_n$ of $V(n)$, and the defining relations $[e,f]=h$, $[h,e]=2e$, $[h,f]=-2f$. Weights are taken with respect to the Cartan subalgebra $\mathbb Ch$, so a vector of $H$-eigenvalue $\mu\in\mathbb C$ has weight the functional $h\mapsto\mu$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[L1] A finite-dimensional $\mathfrak{sl}_2$-module is a direct sum of irreducible submodules; an irreducible submodule has a top weight $m\ge0$ and $h$-eigenvalues $m,m-2,\dots,-m$, each on a one-dimensional subspace ([[thm-finite-dimensional-representations-of-sl-two]]).

[L2] A nonzero submodule of an irreducible module is the whole module, and irreducibility means the absence of nonzero proper submodules ([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]], [[def-representation-of-a-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The operators define a representation: on each basis vector, $H F v_k-F H v_k=(n-2k-2)v_{k+1}-(n-2k)v_{k+1}=-2v_{k+1}=-2Fv_k$, and similarly $HEv_k-EHv_k=2Ev_k$; moreover $EFv_k-FEv_k=(k+1)(n-k)v_k-k(n-k+1)v_k=(n-2k)v_k=Hv_k$, with both sides zero for $k=n$ and $k=0$ respectively. This verifies the three bracket relations on every basis vector, hence (i). [L2, given]

2.1 The eigenvalues $n-2k$, $k=0,\dots,n$, of $H$ are pairwise distinct, so every $H$-eigenspace of $V(n)$ is one-dimensional, spanned by the corresponding $v_k$. [given, step 1.1]

3.1 $V(n)$ is irreducible: if $0\ne W\subseteq V(n)$ is a submodule, then $W$ is $H$-stable and contains a nonzero $H$-eigenvector, hence some $v_k$; applying $E$ exactly $k$ times gives $E^kv_k=k!(n-k+1)(n-k+2)\cdots n\,v_0\ne0$ because each coefficient $j(n-j+1)$ with $1\le j\le n$ is nonzero, so $v_0\in W$; applying $F$ repeatedly then gives $v_1,\dots,v_n\in W$; hence $W=V(n)$ by [L2]. [given, L2, step 2.1]

4.1 Every finite-dimensional irreducible $\mathfrak{sl}_2$-module $W$ is isomorphic to some $V(n)$: by [L1] its top weight is an integer $n\ge0$, and it has a highest weight vector $w_n$ with $Ew_n=0$ and $Hw_n=nw_n$; the commutation identity $[E,F^j]=jF^{j-1}(H-(j-1))$, proved by induction, gives $EF^jw_n=j(n-j+1)F^{j-1}w_n$ and $HF^jw_n=(n-2j)F^jw_n$; the span of $F^jw_n$, $j=0,\dots,n$, is nonzero and stable under $E,F,H$, hence equals $W$ by irreducibility, and the assignment $F^jw_n\mapsto v_j$ is an isomorphism $W\to V(n)$. [L1, L2, step 1.1, step 3.1]

5.1 Steps 1.1, 3.1 and 4.1 establish (i), (ii) and (iii), and the modules $V(n)$ for distinct $n$ are non-isomorphic because $H$ has different eigenvalue sets. [step 1.1, step 3.1, step 4.1] ∎
