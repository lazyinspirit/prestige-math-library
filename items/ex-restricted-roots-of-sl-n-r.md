---
id: ex-restricted-roots-of-sl-n-r
kind: example
title: Restricted roots of sl n r
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-restricted-root-and-restricted-root-space, def-maximal-split-abelian-subspace-and-real-rank, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, ex-cartan-involution-and-k-plus-p-for-sl-n-r, ex-general-and-special-linear-lie-groups, ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, def-lie-algebra-over-a-field]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, restricted-root spaces and Example 1 (SL(n,K), K=R) following Proposition 6.40, printed pp. 370-371; Chapter VI, §11, table (6.107) for sl(n,R), printed p. 424"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.6, printed pp. 221-222"
landmark: false
proof_strategy: direct
---

## Example

Let $n\ge2$ and let $\mathfrak g_0=\mathfrak{sl}_n(\mathbb R)$ with the
Cartan involution $\theta(X)=-X^{\mathsf T}$, so that
$\mathfrak p_0=\{X\in\mathfrak{sl}_n(\mathbb R):X^{\mathsf T}=X\}$
([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]]). Let

$$\mathfrak a=\{\operatorname{diag}(h_1,\dots,h_n):h_1+\cdots+h_n=0\}$$

be the space of real diagonal traceless matrices, and let
$f_i\in\mathfrak a^{*}$ be the coordinate functional $f_i(H)=h_i$. Then
$\mathfrak a$ is a maximal abelian subspace of $\mathfrak p_0$ and the
restricted roots of $(\mathfrak g_0,\mathfrak a)$ are exactly the functionals
$f_i-f_j$ with $i\ne j$, each of them with one-dimensional restricted root
space

$$\mathfrak g_0^{f_i-f_j}=\mathbb RE_{ij},$$

where $E_{ij}$ is the matrix unit; in particular the restricted root system is
of type $A_{n-1}$ and is reduced
([[def-restricted-root-and-restricted-root-space]],
[[def-maximal-split-abelian-subspace-and-real-rank]]).

## Facts & Assumptions

**Given:** An integer $n\ge2$, the real Lie algebra $\mathfrak g_0=\mathfrak{sl}_n(\mathbb R)$ of real traceless matrices, the Cartan involution $\theta(X)=-X^{\mathsf T}$ with $\mathfrak p_0$ the symmetric traceless matrices, the diagonal subspace $\mathfrak a$, and the matrix units $E_{ij}$, $i\ne j$.

[L1] $\mathfrak{sl}_n(\mathbb R)$ is a real Lie algebra under $[X,Y]=XY-YX$, with $\operatorname{tr}X=0$ for every element and $[H,E_{ij}]=(h_i-h_j)E_{ij}$ for $H=\operatorname{diag}(h_1,\dots,h_n)$ ([[ex-general-and-special-linear-lie-groups]], [[def-lie-algebra-over-a-field]]).

[L2] $\mathfrak a$ consists of diagonal symmetric traceless matrices, hence is a subspace of $\mathfrak p_0$; the Cartan decomposition of $\mathfrak g_0$ is $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ with $\mathfrak k_0=\mathfrak{so}(n)$ ([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L3] A restricted root of $(\mathfrak g_0,\mathfrak a)$ for a maximal abelian $\mathfrak a\subseteq\mathfrak p_0$ is a nonzero real functional $\lambda$ on $\mathfrak a$ whose restricted root space $\mathfrak g_0^{\lambda}=\{X\in\mathfrak g_0:[H,X]=\lambda(H)X\text{ for all }H\in\mathfrak a\}$ is nonzero, and its multiplicity is $\dim_{\mathbb R}\mathfrak g_0^{\lambda}$; a maximal abelian subspace of $\mathfrak p_0$ has dimension equal to the real rank ([[def-restricted-root-and-restricted-root-space]], [[def-maximal-split-abelian-subspace-and-real-rank]]).

[L4] In the complex analogue, the diagonal traceless subalgebra of $\mathfrak{sl}_n(\mathbb C)$ is a Cartan subalgebra with roots $\varepsilon_i-\varepsilon_j$ and one-dimensional root spaces $\mathbb CE_{ij}$ ([[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]]).





**Proof technique:** direct matrix computation.

1.1 The subspace $\mathfrak a$ is a maximal abelian subspace of $\mathfrak p_0$. It is abelian because its elements are diagonal, and it lies in $\mathfrak p_0$ by [L2]. Conversely, let $X\in\mathfrak p_0$ satisfy $[H,X]=0$ for every $H\in\mathfrak a$. Choosing $H=\operatorname{diag}(h_1,\dots,h_n)$ with pairwise distinct entries $h_i$ (possible with $\sum_ih_i=0$ in dimension $n\ge2$), the identity $[H,X]=\sum_{i,j}(h_i-h_j)X_{ij}E_{ij}$ of [L1] shows $(h_i-h_j)X_{ij}=0$ for all $i,j$, so $X_{ij}=0$ whenever $i\ne j$: the centralizer of $\mathfrak a$ in $\mathfrak p_0$ is $\mathfrak a$ itself, which is therefore maximal abelian. [given, L1, L2, algebra]

1.2 Every functional $f_i-f_j$ with $i\ne j$ is a restricted root with $\mathbb RE_{ij}\subseteq\mathfrak g_0^{f_i-f_j}$: for $H=\operatorname{diag}(h)\in\mathfrak a$, [L1] gives $[H,E_{ij}]=(h_i-h_j)E_{ij}=(f_i-f_j)(H)E_{ij}$, and $E_{ij}$ is a nonzero real matrix of trace zero, while $f_i-f_j\ne0$ since $i\ne j$. [given, L1, L3, algebra]

2.1 There are no further restricted roots. Let $X=\sum_{i,j}x_{ij}E_{ij}\in\mathfrak g_0$ and let $\lambda$ be a functional on $\mathfrak a$ with $[H,X]=\lambda(H)X$ for all $H\in\mathfrak a$. Comparing the $(i,j)$-entry on both sides using [L1] gives $x_{ij}(h_i-h_j)=x_{ij}\lambda(H)$ for every $H\in\mathfrak a$; taking $H$ with pairwise distinct entries, every off-diagonal entry $x_{ij}$ with $i\ne j$ must vanish unless $\lambda=f_i-f_j$, and the diagonal entries span the kernel $\lambda=0$ with $\mathfrak g_0^{0}=\{X:[H,X]=0\ \forall H\in\mathfrak a\}=\mathfrak a$ by the computation of step 1.1. Hence the nonzero restricted roots are exactly the $f_i-f_j$, $i\ne j$, each with one-dimensional space $\mathbb RE_{ij}$. [step 1.1, step 1.2, L1, L3, algebra]

3.1 The decomposition is consistent dimensionally: $\dim\mathfrak a=n-1$ and there are $n(n-1)$ roots each of multiplicity $1$, so $\dim\mathfrak g_0=(n-1)+n(n-1)=n^2-1$, which is the dimension of $\mathfrak{sl}_n(\mathbb R)$; the restricted root system $\{f_i-f_j:i\ne j\}$ is the standard realization of $A_{n-1}$ and is reduced, since for every root $f_i-f_j$ its double $2(f_i-f_j)$ is not of the form $f_k-f_l$. [step 1.1, step 2.1, L3, algebra]

3.2 The computation matches the complex root computation of [L4]: the functionals $f_i-f_j$ are the restrictions to the real diagonal traceless subspace of the root functionals $\varepsilon_i-\varepsilon_j$ of the complexification, and the real root space $\mathbb RE_{ij}$ is the real form of $\mathbb CE_{ij}$ fixed by complex conjugation, which is why each multiplicity is $1$. [step 2.1, L4, algebra]

4.1 Endpoints and scope: for $n=2$ there is a single pair of opposite roots $\pm(f_1-f_2)$ with one-dimensional spaces $\mathbb RE_{12}$ and $\mathbb RE_{21}$, and $\dim\mathfrak a=1$; the case $n=1$ is excluded because $\mathfrak{sl}_1(\mathbb R)=0$ has no nonzero diagonal traceless element. The computation uses no choice principle, and the diagonal element with pairwise distinct entries exists by an explicit choice of coordinates. [given, step 2.1, step 3.1, algebra] ∎
