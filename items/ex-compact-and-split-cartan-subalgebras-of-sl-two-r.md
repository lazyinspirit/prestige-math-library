---
id: ex-compact-and-split-cartan-subalgebras-of-sl-two-r
kind: example
title: Compact and split cartan subalgebras of sl two r
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cartan-subalgebra-of-a-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, ex-cartan-involution-and-k-plus-p-for-sl-n-r, ex-general-and-special-linear-lie-groups, ex-orthogonal-and-special-orthogonal-lie-groups, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, the sl(2,R) example with h_B and (6.58a), printed pp. 384-386"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
proof_strategy: direct
---

## Example

Let $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ with the Cartan involution
$\theta(X)=-X^{\mathsf T}$
([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]]) and
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ its Cartan decomposition, so
that $\mathfrak k_0=\mathfrak{so}(2)$ and $\mathfrak p_0$ is the space of
symmetric traceless matrices. Put

$$K_0=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

Then $\mathfrak h_0:=\mathbb RK_0$ and $\mathfrak h_0':=\mathbb RH$ are
$\theta$-stable Cartan subalgebras of $\mathfrak g_0$, and
$\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ with
$\mathfrak t_0=\mathfrak h_0$, $\mathfrak a_0=0$ is the compact (maximally
compact) one, while $\mathfrak h_0'$ has
$\mathfrak t_0=0$, $\mathfrak a_0=\mathfrak h_0'$ and is the split
(maximally noncompact) one, in the sense of
[[def-theta-stable-cartan-subalgebra-and-compact-split-parts]].

## Facts & Assumptions

**Given:** $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ with the basis
$e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$,
$H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ satisfying $[H,e]=2e$, $[H,f]=-2f$, $[e,f]=H$, and the matrices $K_0=f-e=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and $\theta$.

[L1] $\mathfrak{sl}_2(\mathbb R)$ consists of the real traceless $2\times2$ matrices, with basis $e,f,H$ and the displayed bracket relations ([[def-special-linear-lie-algebra-sl-two]], [[ex-general-and-special-linear-lie-groups]]).

[L2] The Cartan involution $\theta(X)=-X^{\mathsf T}$ of $\mathfrak{sl}_2(\mathbb R)$ has $\mathfrak k_0=\{X:X^{\mathsf T}+X=0\}=\mathfrak{so}(2)$ and $\mathfrak p_0=\{X\in\mathfrak{sl}_2(\mathbb R):X^{\mathsf T}=X\}$ ([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[ex-orthogonal-and-special-orthogonal-lie-groups]]).

[L3] A Cartan subalgebra of a Lie algebra is a nilpotent self-normalizing subalgebra, and a $\theta$-stable Cartan subalgebra $\mathfrak h_0$ decomposes as $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ with $\mathfrak t_0=\mathfrak h_0\cap\mathfrak k_0$ the compact part and $\mathfrak a_0=\mathfrak h_0\cap\mathfrak p_0$ the split part; it is maximally compact when $\dim\mathfrak t_0$ is maximal and maximally noncompact when $\dim\mathfrak a_0$ is maximal ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]).





**Proof technique:** direct matrix computation.

1.1 The elements $K_0$ and $H$ lie where claimed: $K_0^{\mathsf T}=-K_0$, so $\theta K_0=K_0$ and $K_0\in\mathfrak k_0$, while $H^{\mathsf T}=H$ and $\operatorname{tr}H=0$, so $\theta H=-H$ and $H\in\mathfrak p_0$. In particular both lines $\mathbb RK_0$ and $\mathbb RH$ are $\theta$-stable. [given, L2, algebra]

1.2 The normalizer of $\mathbb RK_0$ in $\mathfrak g_0$ is $\mathbb RK_0$: for $X=\begin{pmatrix}a&b\\ c&-a\end{pmatrix}$ one computes $[K_0,X]=\begin{pmatrix}-b-c&2a\\ 2a&b+c\end{pmatrix}$, which vanishes exactly when $a=0$ and $c=-b$, that is $X\in\mathbb RK_0$. Hence $\mathbb RK_0$ is abelian, nilpotent and self-normalizing, so it is a Cartan subalgebra by [L3]. [given, L1, L3, algebra]

1.3 The normalizer of $\mathbb RH$ in $\mathfrak g_0$ is $\mathbb RH$: for $X=\begin{pmatrix}a&b\\ c&-a\end{pmatrix}$ one computes $[H,X]=\begin{pmatrix}0&2b\\ -2c&0\end{pmatrix}$, which vanishes exactly when $b=c=0$, that is $X=\operatorname{diag}(a,-a)\in\mathbb RH$. Hence $\mathbb RH$ is abelian, nilpotent and self-normalizing, so it is a Cartan subalgebra by [L3]. [given, L1, L3, algebra]

1.4 The adjoint spectra distinguish the two: by [L1], $[K_0,H]=[f-e,H]=[f,H]-[e,H]=2f+2e=2(e+f)$ and $[K_0,e+f]=[f,e]+[f,f]-[e,e]-[e,f]=[f,e]-[e,f]=-2H$, so $\operatorname{ad}_{K_0}$ is zero on $K_0$ and has the matrix $\begin{pmatrix}0&-2\\ 2&0\end{pmatrix}$ in the basis $(H,e+f)$ of $\mathfrak p_0$, with eigenvalues $0,\pm2i$; whereas $\operatorname{ad}_H$ is diagonal on $e,f,H$ with real eigenvalues $2,-2,0$. [given, L1, algebra]

2.1 Both Cartan subalgebras are $\theta$-stable by step 1.1, so the decomposition of [L3] applies. For $\mathfrak h_0=\mathbb RK_0$ one has $\mathfrak h_0\cap\mathfrak k_0=\mathbb RK_0$ and $\mathfrak h_0\cap\mathfrak p_0=0$, so $\mathfrak t_0=\mathfrak h_0$ and $\mathfrak a_0=0$: every element of $\mathfrak h_0$ is compact, and the compact dimension $1$ equals $\dim\mathfrak k_0$, so $\mathfrak h_0$ is maximally compact. For $\mathfrak h_0'=\mathbb RH$ one has $\mathfrak h_0'\cap\mathfrak k_0=0$ and $\mathfrak h_0'\cap\mathfrak p_0=\mathbb RH$, so $\mathfrak t_0=0$ and $\mathfrak a_0=\mathfrak h_0'$: $\mathfrak h_0'$ is a split Cartan subalgebra, and since $[H,e+f]=2(e-f)=-2K_0\ne0$ shows that $\mathfrak p_0$ is not abelian, $\mathbb RH$ is maximal abelian in $\mathfrak p_0$ and the noncompact dimension $1$ is maximal. [step 1.1, step 1.2, step 1.3, L2, L3, algebra]

3.1 Consistency of brackets and signs with the general theory: $[\mathfrak h_0,\mathfrak h_0]=0$ lies in both $\mathfrak t_0$ and $\mathfrak a_0$ cases because the Cartan subalgebras are abelian, and the compact line lies in $\mathfrak k_0$ where the Killing form is negative definite while the split line lies in $\mathfrak p_0$ where it is positive definite, so the Killing form is negative definite on $\mathfrak t_0=\mathfrak h_0$ in the first case and positive definite on $\mathfrak a_0=\mathfrak h_0'$ in the second. Both subalgebras are one-dimensional, and the two eigenvalue computations of step 1.4 match the compact/purely imaginary and split/real terminology. [step 1.1, step 1.4, step 2.1, L2, algebra]

4.1 Endpoints and scope: the algebra is three-dimensional and both Cartan subalgebras are one-dimensional, which equals its rank; $\mathfrak h_0\ne\mathfrak h_0'$, and the compact one is the compact line $\mathbb R K_0=i\,\mathbb Rh_B$ in the notation of the source and the split one is the diagonal line $\mathbb RH$. No choice principle enters, and the computations are finite. [given, step 1.2, step 1.3, step 2.1, algebra] ∎
