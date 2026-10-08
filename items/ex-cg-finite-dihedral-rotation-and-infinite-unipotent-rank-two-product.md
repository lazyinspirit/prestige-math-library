---
id: ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product
kind: example
title: "The finite dihedral rotation and the infinite unipotent rank-two product"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [def-cg-real-coxeter-form-and-reflection, def-hh-coxeter-matrix-word-group-and-length, lem-cg-reflection-form-invariance-and-rank-two-orders, def-coordinate-column-and-matrix-of-a-linear-map, def-matrix-product-and-identity-matrix, thm-sine-and-cosine-addition-formulas, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period, def-function-space, lem-standard-basis-of-f-n, thm-reals-ordered-field, cor-trigonometric-parity-and-pythagorean-identity, thm-matrix-of-a-composite-is-the-product]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "\u00a76.12, printed p. 117: Lemma 6.12.3, with $u=e_i+e_j$ and $(\\rho_i\\rho_j)^n(e_i)=2nu+e_i$ for $m=\\infty$, and the rotation through $2\\pi/m$ for finite $m$"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a71.2, printed p. 6: Example 1.2.7, $r_1r_2$ as a rotation through $2\\pi/m$ with $(r_1r_2)^m=e$; \u00a74.2, printed p. 93, equation (4.14) and Proposition 4.2.1"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "\u00a71.3, printed p. 11: $\\Phi(e_s)=(4\\cos^2\\frac{\\pi}{m}-1)e_s+2\\cos\\frac{\\pi}{m}e_{s'}$ and $(\\varphi-1)^2=0$ for $m=\\infty$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t\}$, $m=m(s,t)$, $V=\mathbb R^S$, $B$ the Coxeter form, $P=\mathbb Re_s+\mathbb Re_t$ and $c$ as in [[def-cg-real-coxeter-form-and-reflection]] ($c=1$ for $m=\infty$). By [[lem-cg-reflection-form-invariance-and-rank-two-orders]] the product $A:=r_sr_t$ acts on $P$ with matrix $$A=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$$ in the basis $(e_s,e_t)$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

**(i) Finite dihedral rotation.** For $m=3$ one has $c=\cos(\pi/3)=\frac12$ and $$A=\begin{pmatrix}0&-1\\1&-1\end{pmatrix},\qquad A^2=\begin{pmatrix}-1&1\\-1&0\end{pmatrix},\qquad A^3=I_2,$$ so $A$ has order $3=m$; its trace is $-1=2\cos(2\pi/3)$, consistent with a rotation through $2\pi/3$ of the positive definite plane $(P,B|_P)$, and $A\ne I_2\ne A^2$. For $m=2$ the same formula gives $c=0$ and $A=-I_2$, of order $2=m$.

**(ii) Infinite unipotent product.** For $m=\infty$ one has $c=1$ and $$A=\begin{pmatrix}3&-2\\2&-1\end{pmatrix}=I_2+N,\qquad N=\begin{pmatrix}2&-2\\2&-2\end{pmatrix}\ne0,\qquad N^2=0 .$$ Hence $A^k=I_2+kN$ for every $k\in\mathbb Z$, so $A^k(e_s)=e_s+2k(e_s+e_t)$ and no nonzero power of $A$ is the identity: the product $r_sr_t$ has infinite order, in contrast to the finite cases where $A$ has order $m$. In the abstract group $W$ of [[def-hh-coxeter-matrix-word-group-and-length]], the element $st$ likewise has infinite order when $m=\infty$, and has order $m$ in the displayed finite cases $m=2,3$.

## Facts & Assumptions

**Given:** $S=\{s,t\}$ with $s\ne t$, a Coxeter matrix value $m=m(s,t)\in\{2,3,\dots\}\cup\{\infty\}$, the space $V=\mathbb R^S$, the Coxeter form $B$, the plane $P=\mathbb Re_s+\mathbb Re_t$ and the number $c$ of [[def-cg-real-coxeter-form-and-reflection]] ($c=\cos(\pi/m)$ for finite $m$, and $c=1$ for $m=\infty$).

[F1] In the ordered basis $(e_s,e_t)$ of $P$ the product $A=r_sr_t$ has matrix $[A]=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$ of determinant $1$, and $A$ acts on $P$ by that matrix ([[lem-cg-reflection-form-invariance-and-rank-two-orders]], clause (3)(iii)); the same item's clause (3)(iv) records the order conclusions for finite $m$ and the unipotent shape for $m=\infty$, which the computations below verify directly.

[F2] $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-c$; $r_s$ and $r_t$ are $B$-preserving involutions ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]], clause (2)).

[F3] Trigonometric facts: the addition formulas and the resulting triple-angle identity $\cos 3x=4\cos^3x-3\cos x$; $\sin^2x+\cos^2x=1$; $\cos\pi=-1$ and $\cos(\pi/2)=0$; $\sin x=0$ if and only if $x\in\pi\mathbb Z$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F4] Matrices of linear maps in an ordered basis, products of matrices and the identity matrix are as defined entrywise; $[T^2]=[T]^2$ for a linear endomorphism $T$ and an ordered basis ($S$ finite, $V$ finite-dimensional) ([[def-coordinate-column-and-matrix-of-a-linear-map]], [[thm-matrix-of-a-composite-is-the-product]], [[def-matrix-product-and-identity-matrix]]).

[F5] The group $W$ is presented by $s^2=t^2=1$ and, when $m<\infty$, $(st)^m=1$. Any assignment of $s,t$ to involutions in a group satisfying the finite relator extends to a homomorphism from $W$ ([[def-hh-coxeter-matrix-word-group-and-length]], Universal property).

## Verification

1.1 The case $m=3$. Here $c=\cos(\pi/3)$. The triple-angle identity of [F3] at $x=\pi/3$ gives $\cos\pi=4c^3-3c$; with $\cos\pi=-1$ this is $4c^3-3c+1=0$, that is $(c+1)(2c-1)^2=0$. The factor $c+1$ is nonzero: $\cos x=-1$ forces $\sin^2x=1-\cos^2x=0$, hence $\sin x=0$ and $x\in\pi\mathbb Z$, whereas $\pi/3$ is not an integer multiple of $\pi$. Hence $2c-1=0$ and $c=\frac12$. Substituting into [F1], $$[A]=\begin{pmatrix}0&-1\\1&-1\end{pmatrix},\qquad [A]^2=\begin{pmatrix}-1&1\\-1&0\end{pmatrix},\qquad [A]^3=[A]^2[A]=I_2,$$ and $[A]\ne I_2\ne[A]^2$, so $A$ has order exactly $3=m$. Its trace is $-1$, and $2\cos(2\pi/3)=2(2c^2-1)=2(\tfrac12-1)=-1$, consistent with the rotation through $2\pi/3$ of the positive definite plane: $A$ preserves $B|_P$ and has determinant $1$. [given, F1, F2, F3, F4, algebra]

1.2 The case $m=2$. Here $c=\cos(\pi/2)=0$, so [F1] gives $[A]=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I_2$, and $A^2=\mathrm{id}_P$ while $A\ne\mathrm{id}_P$; thus $A$ has order $2=m$, again a rotation through $2\pi/2=\pi$ of the positive definite plane. [given, F1, F3, F4, algebra]

1.3 The case $m=\infty$. Here $c=1$, so [F1] gives $[A]=\begin{pmatrix}3&-2\\2&-1\end{pmatrix}=I_2+N$ with $N=\begin{pmatrix}2&-2\\2&-2\end{pmatrix}\ne0$, and direct multiplication gives $N^2=0$. The binomial theorem in a ring with $N^2=0$ gives $(I_2+N)^k=I_2+kN$ for every $k\ge0$, and $A^{-1}=I_2-N$ because $(I_2+N)(I_2-N)=I_2-N^2=I_2$, so $(I_2-N)^j=I_2+(-j)N$ for $j\ge0$ and $$A^k=I_2+kN\qquad\text{for every }k\in\mathbb Z.$$ Therefore $A^k(e_s)=e_s+kN e_s=e_s+2k(e_s+e_t)$, and since $kN$ has first entry $2k$, which is nonzero for $k\ne0$, no nonzero power of $A$ is the identity: the product $r_sr_t$ has infinite order in $\mathrm{GL}(V)$. [given, F1, F2, F4, algebra]

2.1 Conclusion in the abstract group. By [F2], $r_s,r_t$ are invertible involutions. If $m<\infty$, [F1] gives $(r_sr_t)^m=\mathrm{id}_V$; the reversed finite relator holds too, since $r_tr_s=(r_sr_t)^{-1}$. If $m=\infty$, there is no finite pair relator to check. Thus [F5] supplies a homomorphism $\rho:W\to\mathrm{GL}(V)$ with $\rho(s)=r_s$, $\rho(t)=r_t$, and $\rho(st)=A$. For $m=2,3$, the relator gives $(st)^m=1$, and steps 1.1–1.2 show that no smaller positive power can be $1$: it would map to the corresponding nonidentity power of $A$. Hence $st$ has order exactly $m$ in these finite cases. For $m=\infty$, if $(st)^k=1$ for any nonzero integer $k$, applying $\rho$ would give $A^k=\mathrm{id}_V$, contradicting step 1.3. Hence $st$ has infinite order. This conclusion uses the homomorphism and the computed nonidentity powers, rather than inferring element order from the absence of a relator. [given, F1, F2, F5, step 1.1, step 1.2, step 1.3] ∎
