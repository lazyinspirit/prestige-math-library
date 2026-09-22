---
id: thm-finite-dimensional-representations-of-sl-two
kind: theorem
title: Finite-dimensional representations of sl_2
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-special-linear-lie-algebra-sl-two, def-representation-of-a-lie-algebra, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, thm-weyls-complete-reducibility-theorem, thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra, cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue, lem-commuting-endomorphisms-preserve-eigenspaces]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 11, §11.4"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak{sl}_2$ be the three-dimensional Lie algebra of
[[def-special-linear-lie-algebra-sl-two]] with its basis $(e,f,h)$, and let
$V$ be a finite-dimensional module over it
([[def-representation-of-a-lie-algebra]]).

(i) $V$ is a direct sum of irreducible submodules.
(ii) If $V\ne0$ is irreducible, there is an integer $m\ge0$ with
$\dim V=m+1$ and with $h$ acting diagonalisably with eigenvalues
$m,m-2,\dots,-m$, each on a one-dimensional subspace.
(iii) For arbitrary finite-dimensional $V\ne0$, the operator $h$ acts
diagonalisably on $V$ with integer eigenvalues.

## Facts & Assumptions

**Given:** The Lie algebra $\mathfrak{sl}_2=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$ with $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$, and a finite-dimensional module $V$.

[L1] The bracket relations and the three-dimensionality of $\mathfrak{sl}_2$ are those of [[def-special-linear-lie-algebra-sl-two]]; in particular a module is a bilinear action with $xy\,v-yx\,v=[x,y]v$ ([[def-representation-of-a-lie-algebra]]).

[L2] Every endomorphism of a nonzero finite-dimensional complex vector space has an eigenvalue ([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]); commuting operators preserve each other's eigenspaces ([[lem-commuting-endomorphisms-preserve-eigenspaces]]).

[L3] Every finite-dimensional module of a finite-dimensional semisimple Lie algebra over a characteristic-zero field is completely reducible ([[thm-weyls-complete-reducibility-theorem]], [[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

[L4] A finite-dimensional characteristic-zero Lie algebra is semisimple if and only if its Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The algebra $\mathfrak{sl}_2$ is semisimple: in the basis $(h,e,f)$ one computes $\operatorname{ad}_h=\operatorname{diag}(0,2,-2)$, $\operatorname{ad}_e=\begin{pmatrix}0&0&1\\-2&0&0\\0&0&0\end{pmatrix}$ and $\operatorname{ad}_f=\begin{pmatrix}0&-1&0\\0&0&0\\2&0&0\end{pmatrix}$, whence $B(h,h)=8$, $B(e,f)=B(f,e)=4$ and the remaining pairings vanish; that matrix has nonzero determinant, so the Killing form is nondegenerate and [L4] makes $\mathfrak{sl}_2$ semisimple. Consequently [L3] gives (i): every finite-dimensional $V$ is a direct sum of irreducible submodules. [L1, L3, L4, algebra]

1.2 Let $V\ne0$ be irreducible. Since $h$ is an endomorphism of a nonzero finite-dimensional complex vector space, [L2] gives an eigenvalue $\lambda$ and eigenvector $v\ne0$ with $hv=\lambda v$; because $h(e v)=e(hv)+[h,e]v=(\lambda+2)ev$ and $h(fv)=(\lambda-2)fv$ by [L1], the sum $W$ of all eigenspaces of $h$ in $V$ is a nonzero submodule, so $W=V$; thus $h$ acts diagonalisably on an irreducible module. [L1, L2, algebra]

2.1 Let $V\ne0$ be irreducible, choose among its finitely many eigenvalues of $h$ one with maximal real part, say $\lambda$, and choose $0\ne v\in V$ with $hv=\lambda v$. Then $ev=0$: otherwise $ev$ is an eigenvector of $h$ with eigenvalue $\lambda+2$, contradicting maximality of the real part. Put $v_k=f^kv$ for $k\ge0$; induction on $k$ using $[e,f]=h$ gives $hv_k=(\lambda-2k)v_k$ and $ev_k=k(\lambda-k+1)v_{k-1}$ for $k\ge1$. [L1, step 1.2, algebra]

3.1 The vectors $v_k$ of step 2.1 cannot all be nonzero: nonzero $v_k$ are eigenvectors of $h$ with the distinct eigenvalues $\lambda-2k$, hence linearly independent, and $V$ is finite-dimensional. Let $N+1$ be the least index with $v_{N+1}=0$; then $v_0,\dots,v_N\ne0$. Applying step 2.1's formula for $e$ at $k=N+1$ gives $0=ev_{N+1}=(N+1)(\lambda-N)v_N$, so $\lambda=N\in\mathbb Z_{\ge0}$ because the field has characteristic zero. The span of $v_0,\dots,v_N$ is a nonzero submodule by the same formulas, hence equals $V$ by irreducibility; it has dimension $N+1$ and its $h$-eigenvalues are $N,N-2,\dots,-N$, each with a one-dimensional eigenspace. This proves (ii). [step 1.2, step 2.1, algebra]

4.1 Finally, an arbitrary nonzero finite-dimensional $V$ is a direct sum of irreducibles by (i), and on each summand $h$ is diagonalisable with the integer eigenvalues of (ii); hence $h$ is diagonalisable on all of $V$ with integer eigenvalues, which is (iii). If $V=0$ all three statements are vacuous. [step 1.1, step 3.1, algebra] ∎
