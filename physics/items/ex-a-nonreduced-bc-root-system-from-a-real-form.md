---
id: ex-a-nonreduced-bc-root-system-from-a-real-form
kind: example
title: A nonreduced bc root system from a real form
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-restricted-root-and-restricted-root-space, def-maximal-split-abelian-subspace-and-real-rank, def-axiom-of-choice, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-reduced-crystallographic-euclidean-root-system, ex-classical-simple-lie-algebras-and-their-killing-forms, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Example 2 (su(p,q)) with the explicit restricted-root spaces, printed pp. 371-372; Chapter VI, §11, the Cayley-transform computation of the restricted roots of su(p,n-p) and table (6.107), printed pp. 422-424"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §§43.5-43.6, printed pp. 220-222"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Fix integers $1\le p<q$ and put $m=p+q$. Let

$$\mathfrak g_0=\mathfrak{su}(p,q)=\{X\in M_m(\mathbb C):X^{*}I+IX=0,\ \operatorname{tr}X=0\},\qquad I=\operatorname{diag}(I_p,-I_q),$$

written in block form as $X=\begin{pmatrix}A&C\\ C^{*}&E\end{pmatrix}$ with $A\in\mathfrak u(p)$, $E\in\mathfrak u(q)$, $\operatorname{tr}A+\operatorname{tr}E=0$ and $C\in\mathbb C^{p\times q}$, with Cartan involution $\theta(X)=-X^{*}$ and Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, $\mathfrak k_0=\{X:C=0\}$, $\mathfrak p_0=\{X:A=E=0\}$. Let

$$\mathfrak a=\{H_D:D=\operatorname{diag}(d_1,\dots,d_p)\in M_p(\mathbb R)\},\qquad H_D=\begin{pmatrix}0&[D\ \ 0]\\ [D\ \ 0]^{*}&0\end{pmatrix},$$

where $[D\ \ 0]$ is the $p\times q$ matrix whose first $p$ columns are $D$, and let $f_i(H_D)=d_i$. Then $\mathfrak a$ is a maximal abelian subspace of $\mathfrak p_0$ and the restricted root system of $(\mathfrak g_0,\mathfrak a)$ is

$$\Sigma=\{\pm f_i\pm f_j:\ i\ne j\}\cup\{\pm f_i\}\cup\{\pm 2f_i\},$$

the classical nonreduced system of type $BC_p$, with multiplicities $2$ for
$\pm f_i\pm f_j$ ($i\ne j$), $2(q-p)$ for $\pm f_i$ and $1$ for $\pm 2f_i$
([[def-restricted-root-and-restricted-root-space]],
[[def-maximal-split-abelian-subspace-and-real-rank]]).

## Facts & Assumptions

**Given:** AC; integers $1\le p<q$, $r=q-p>0$, $m=p+q$; the displayed trace-zero matrix algebra and the matrices $H_D$. All vector spaces and dimensions below are real unless explicitly described as complex.

[A1] AC is [[def-axiom-of-choice]]. It is retained as a standing assumption of the example; the finite matrix argument below needs no additional choices and does not invoke a general classification theorem.

[L1] On $\mathfrak{sl}_m(\mathbb C)$, the Killing form is $2m\operatorname{tr}(XY)$ for $m\ge2$ ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], special-linear formula). A Killing form is the trace of the product of adjoint maps, and nondegeneracy is equivalent to semisimplicity in characteristic zero ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[thm-cartans-semisimplicity-criterion]]).

[L2] A Cartan involution is an involutive automorphism with $B_\theta(X,Y)=-B(X,\theta Y)$ positive definite; its fixed and anti-fixed spaces give the Cartan decomposition ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L3] The restricted root spaces are the simultaneous real adjoint eigenspaces for nonzero real functionals on a maximal abelian subspace of $\mathfrak p_0$; multiplicity means real dimension. The dimension of that maximal split subspace is the real rank ([[def-restricted-root-and-restricted-root-space]], [[def-maximal-split-abelian-subspace-and-real-rank]]).

[L4] Reducedness means that a root line meets the root set in exactly the two signs of that root ([[def-reduced-crystallographic-euclidean-root-system]]). Here $BC_p$ denotes the standard set $\{\pm e_i,\pm2e_i,\pm e_i\pm e_j:i<j\}$; its reflection and integrality properties will be checked directly.

## Verification

**Proof technique:** direct matrix computation and simultaneous weights.

1.1 On $\mathfrak{sl}_m(\mathbb C)$ define $\sigma(Z)=-IZ^*I$. It is a conjugate-linear involutive Lie automorphism: adjoint reverses products, so the minus sign preserves the commutator, and $I^2=1$. Its fixed space is exactly the trace-zero algebra in the statement. Every $Z$ decomposes uniquely as $X+iY$, where $X=(Z+\sigma Z)/2$ and $Y=(Z-\sigma Z)/(2i)$ are fixed by $\sigma$. Thus this fixed real algebra has complexification $\mathfrak{sl}_m(\mathbb C)$ and real dimension $m^2-1$. A real basis of it is a complex basis of the complexification; the adjoint matrices of real elements in that basis have the same real and complex traces. Consequently its real Killing form is the restriction $B(X,Y)=2m\operatorname{tr}(XY)$ by [L1]. This establishes the real-form assertion rather than attributing it to the compact unitary-group example. [L1, algebra]

2.1 Solving $X^*I+IX=0$ gives the stated skew-Hermitian blocks $A,E$ and the off-diagonal pair $C,C^*$, with the single imaginary trace constraint. The map $\theta(X)=-X^*$ preserves this algebra, squares to the identity, and preserves brackets by the same adjoint calculation as in step 1.1. Moreover $B_\theta(X,Y)=2m\operatorname{tr}(XY^*)$ on this real space, and $B_\theta(X,X)=2m\sum_{i,j}|X_{ij}|^2>0$ for $X\ne0$. The form is real by step 1.1 and symmetric by conjugate symmetry of the displayed trace. Hence $B$ is nondegenerate: if $B(X,Y)=0$ for all $Y$, take $Y=\theta X$. By [L1] the algebra is semisimple, and by [L2] $\theta$ is a Cartan involution with exactly the displayed $\mathfrak k_0,\mathfrak p_0$. [L1, L2, step 1.1, algebra]

2.2 Simultaneously diagonalize the matrices $H_D$ on $\mathbb C^m$ using the basis $v_i^+=e_i+e_{p+i}$, $v_i^-=e_i-e_{p+i}$ for $1\le i\le p$, and $z_k=e_{2p+k}$ for $1\le k\le r$. These have respective weights $f_i,-f_i,0$. Their independence follows separately on each two-dimensional plane and on the remaining coordinates. In the corresponding matrix-unit basis of $\operatorname{End}(\mathbb C^m)$, the operator taking a basis vector of weight $\nu$ to one of weight $\mu$ has adjoint weight $\mu-\nu$. These units form a simultaneous eigenbasis. Every nonzero-weight unit is traceless, while the zero-weight space in $\mathfrak{sl}_m$ is the trace-zero part of its zero-weight endomorphism space. [step 1.1, algebra]

3.1 The $H_D$ commute, since both products have diagonal blocks $DD'$ and $\operatorname{diag}(DD',0_r)$. To compute their centralizer in $\mathfrak p_0$, put $C=[C_1\ C_2]$. Vanishing of $[H_D,Y]$ for all real diagonal $D$ gives $DC_1^*=C_1D$, $DC_1=C_1^*D$, and $DC_2=0$. Taking $D=1$ in the last equation gives $C_2=0$. In the first equation the $(i,j)$ entry reads $d_i\overline{(C_1)_{ji}}=(C_1)_{ij}d_j$. Independent $d_i,d_j$ force off-diagonal entries to vanish, and the diagonal entries are real. Conversely every real diagonal $C_1$ satisfies all equations. Thus this centralizer is exactly $\mathfrak a$, proving maximality: any abelian subspace containing it lies in that centralizer. Its dimension is $p$, so the real rank is $p$. [L3, step 2.1, algebra]

3.2 Counting the units in step 2.2 gives the complete nonzero weight list and complex dimensions. For distinct $i,j$, the weight $f_i-f_j$ has the two ordered pairs $(f_i,f_j)$ and $(-f_j,-f_i)$; $f_i+f_j$ has $(f_i,-f_j)$ and $(f_j,-f_i)$. Reversing pairs gives the negatives, each also of dimension two. Weight $f_i$ has $r$ pairs $(f_i,0)$ and $r$ pairs $(0,-f_i)$, giving dimension $2r$; its negative has the same dimension. Weight $2f_i$ has only the pair $(f_i,-f_i)$, giving dimension one, and similarly for its negative. No other differences occur. The zero-weight endomorphisms have dimension $2p+r^2$, from the $2p$ separate nonzero-weight lines and the full endomorphisms of the $r$-dimensional zero space; trace zero imposes one independent condition, giving $2p+r^2-1$. [step 2.2, algebra]

4.1 These complex dimensions equal the required real multiplicities. Indeed $\sigma$ fixes every $H_D$ and commutes with their adjoint action on a weight space of real weight $\lambda$. That complex weight space is therefore $\sigma$-stable. Its real fixed space is precisely $\mathfrak g_0^\lambda$, and every vector decomposes as $X+iY$ with both $X,Y$ in that fixed space by the formulas of step 1.1. A real basis of the fixed space is a complex basis of the weight space, so the dimensions agree. This applies also to weight zero, and proves a complete real simultaneous decomposition without dividing by $\lambda(H_D)$, which may vanish at particular $D$. [L3, step 1.1, step 3.1, step 3.2, algebra]

4.2 For clarity, the zero space in the original blocks has $C_1$ real diagonal, $C_2=0$, $E_{12}=E_{21}=0$, and $A=E_{11}$ diagonal and purely imaginary, while $E_{22}$ is an arbitrary skew-Hermitian $r$-by-$r$ matrix subject to $2\operatorname{tr}A+\operatorname{tr}E_{22}=0$. The $C$ equations follow as in step 3.1; the other equations are $DE_{11}=AD$, $DE_{12}=0$ and $E_{21}D=0$ for every $D$, which give exactly these conditions. The $C_1$ part is $\mathfrak a$ of dimension $p$; the other part is $Z_{\mathfrak k_0}(\mathfrak a)$ of dimension $p+r^2-1$. In particular the zero space contains every $H_D$, as it must. [step 2.1, step 3.1, algebra]

5.1 The real dimensions sum to $(2p+r^2-1)+4p(p-1)+4pr+2p=(2p+r)^2-1=m^2-1$, agreeing with step 1.1. Also $B(H_D,H_{D'})=4m\sum_i d_id'_i$, so the dual inner product gives the $f_i$ equal lengths and mutual orthogonality. Reflections in $f_i$ or $2f_i$ negate one coordinate and reflections in $f_i\pm f_j$ are signed coordinate swaps; all preserve the displayed set. For denominator root $f_i$, $2f_i$, or $f_i\pm f_j$, the Cartan integer is respectively $2\beta_i$, $\beta_i$, or $\beta_i\pm\beta_j$ in these coordinates, always integral. The set is finite and spans, and it is exactly the standard $BC_p$ set in [L4]. It is nonreduced because both $f_i$ and $2f_i$ occur with positive multiplicities. [L4, step 1.1, step 3.2, step 4.1, step 4.2, algebra]

6.1 At $p=1<q$ the mixed-root family is empty and the roots are $\pm f_1,\pm2f_1$ of multiplicities $2(q-1)$ and one. The zero space has dimension $(q-1)^2+1$, so the same count gives $q^2+2q$. The hypotheses exclude $p=0$ and $p=q$; in particular $q-p>0$ guarantees that the short roots counted above actually occur. This proves all assertions, retaining the standing AC assumption [A1] but using only finite matrix calculations. [A1, step 3.1, step 4.1, step 5.1, algebra] ∎
