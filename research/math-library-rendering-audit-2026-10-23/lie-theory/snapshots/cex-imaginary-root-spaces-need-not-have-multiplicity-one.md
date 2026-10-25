---
id: cex-imaginary-root-spaces-need-not-have-multiplicity-one
kind: counterexample
title: "Imaginary root spaces need not have multiplicity one"
status: published
origin: pipeline
deps: ["thm-serre-presentation-of-a-kac-moody-algebra", "def-kac-moody-algebra-associated-to-a-gcm", "def-real-and-imaginary-kac-moody-roots", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Proposition 1.5.1, Lemma 1.5.3 and Example 1.5.4, pp.20–25; fully computed loop-sl3 adaptation"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement refuted

False claim: every root space of a Kac–Moody algebra has dimension one. For the affine matrix $A=\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}$, each $m\delta$, $m\in\mathbb Z\setminus\{0\}$, is an imaginary root of multiplicity two, where $\delta=\alpha_0+\alpha_1+\alpha_2$.

## Facts & Assumptions

**Given:** The symmetric affine A2 matrix, with indices 0,1,2 and D=I.

[F1] The full Cartan–Serre presentation specifies g(A). ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

[F2] Imaginary roots are those outside W Pi. ([[def-real-and-imaginary-kac-moody-roots]]).

[F3] The simple-root form equals A for D=I. ([[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]).

[F4] Every nonzero ideal of $\mathfrak g(A)$ meets its Cartan subalgebra. ([[def-kac-moody-algebra-associated-to-a-gcm]]).

## Counterexample

1.1 Let $\mathfrak s$ be the traceless $3\times3$ complex matrices and put $L=(\mathbb C[t,t^{-1}]\otimes\mathfrak s)\oplus\mathbb Cc\oplus\mathbb Cd$. Define $c$ central, $[d,t^mx]=m t^mx$ and $[t^mx,t^ny]=t^{m+n}[x,y]+m\delta_{m,-n}\operatorname{tr}(xy)c$. The central term is antisymmetric since $m=-n$ on its support. Matrix trace satisfies $\operatorname{tr}([x,y]z)=\operatorname{tr}(x[y,z])$ by cyclic multiplication. In the Jacobi sum for three loop terms, the central coefficient is zero unless $m+n+k=0$; in that case it is $((m+n)+(n+k)+(k+m))\operatorname{tr}([x,y]z)=0$. The ordinary matrix part satisfies Jacobi by associativity. The Jacobi identity involving $d$ is the derivation rule: the central term on the right has factor $m+n=0$ on its support, and the loop terms have degree $m+n$. Thus L is a Lie algebra. [given]

2.1 Let $H_1=E_{11}-E_{22}$ and $H_2=E_{22}-E_{33}$ and take $\mathfrak h=\mathbb CH_1\oplus\mathbb CH_2\oplus\mathbb Cc\oplus\mathbb Cd$. Put $h_1=H_1$, $h_2=H_2$, $h_0=c-H_1-H_2$. On a diagonal $H=\operatorname{diag}(z_1,z_2,z_3)$ set $\alpha_1(H)=z_1-z_2$, $\alpha_2(H)=z_2-z_3$, and $\alpha_0(H)=z_3-z_1$; all vanish on $c$, while $\alpha_0(d)=1$ and $\alpha_1(d)=\alpha_2(d)=0$. Direct evaluation gives diagonal Cartan entries 2 and off-diagonal entries −1. The coroots are independent because $h_0$ has nonzero c-coordinate; the roots are independent because the d-coordinate separates $\alpha_0$ and the two finite diagonal differences are independent. The matrix has rank two: its row sum is zero and its upper 2×2 minor is 3. Thus $\dim\mathfrak h=4=2\cdot3-2$ is minimal. [given, step 1.1]

3.1 Take $e_0=tE_{31}$, $e_1=E_{12}$, $e_2=E_{23}$ and $f_0=t^{-1}E_{13}$, $f_1=E_{21}$, $f_2=E_{32}$. The matrix-unit bracket formula gives $[e_0,f_0]=E_{33}-E_{11}+c=h_0$ and $[e_i,f_j]=\delta_{ij}h_i$ for every other pair. The diagonal and d-actions give the stated simple weights and their negatives. The positive pair brackets are $[e_0,e_1]=tE_{32}$, $[e_0,e_2]=-tE_{21}$, $[e_1,e_2]=E_{13}$; bracketing each again with either of its two participating e-generators gives zero by the matrix-unit formula. The negative pair brackets are $[f_0,f_1]=-t^{-1}E_{23}$, $[f_0,f_2]=t^{-1}E_{12}$ and $[f_1,f_2]=-E_{31}$, with the same double-bracket zeros. No central term occurs in these repeated brackets since the relevant matrix products have trace zero. Thus all Serre relations with exponent two hold, and F1 gives a homomorphism $\phi:\mathfrak g(A)\to L$ preserving the Cartan. [F1, step 1.1, step 2.1]

4.1 The degree-zero generators produce all of $\mathfrak s$: their brackets yield $E_{13},E_{31}$ and $H_1,H_2$. From $tE_{31}$, brackets with $E_{23},E_{12}$ produce $tE_{21},-tE_{32}$, then brackets with $E_{12},E_{23}$ produce $tH_1,tH_2$. Bracketing these diagonals with the degree-zero matrix units produces every $tE_{ij}$, since for each $i\ne j$ at least one of $H_1,H_2$ has distinct i,j entries. The same argument from $t^{-1}E_{13}$ starts with $[E_{21},t^{-1}E_{13}]=t^{-1}E_{23}$ and $[E_{32},t^{-1}E_{13}]=-t^{-1}E_{12}$ and gives all of $t^{-1}\mathfrak s$. Now $[\mathfrak s,\mathfrak s]=\mathfrak s$, since diagonal differences are opposite-unit brackets and each off-diagonal unit is a nonzero scalar multiple of its bracket with a diagonal. Induction using $[t\mathfrak s,t^{m-1}\mathfrak s]=t^m\mathfrak s$ for $m\ge2$, and the negative counterpart, supplies every loop degree. The supplied Cartan contains $c,d$, so $\phi$ is onto. [step 1.1, step 3.1]

5.1 The map $\phi$ is injective on the Cartan by step 2.1. Its kernel is an ideal of $\mathfrak g(A)$ disjoint from that Cartan, hence zero by [F4]. Thus $\phi$ is an isomorphism. One can also check recognition directly in L. Its nonzero Cartan weight spaces are $\mathbb Ct^mE_{ij}$, of weight $\varepsilon_i-\varepsilon_j+m\delta$, and $t^m\mathfrak d_0$, of weight $m\delta$ for $m\ne0$, where $\mathfrak d_0$ is the traceless diagonal space and $\delta(d)=1$, $\delta(\mathfrak d_0\oplus\mathbb Cc)=0$. Distinct listed weights are distinct functionals. Finite interpolation extracts a nonzero weight vector from any nonzero Cartan-disjoint ideal. A vector $t^mE_{ij}$ brackets with $t^{-m}E_{ji}$ to $E_{ii}-E_{jj}+mc\ne0$ in the Cartan. A vector $t^mH$ in the diagonal space has $m\ne0$; choose a traceless diagonal $K$ with $\operatorname{tr}(HK)\ne0$. Such K exists since the trace matrix on $H_1,H_2$ is $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ of determinant 3. Its bracket with $t^{-m}K$ is the nonzero Cartan vector $m\operatorname{tr}(HK)c$. Both contradict disjointness. [F4, step 1.1, step 2.1, step 4.1]

6.1 The root coordinates give $\delta=\alpha_0+\alpha_1+\alpha_2$. By step 5.1 the space at $m\delta$, $m\ne0$, has basis $t^mH_1,t^mH_2$, and so dimension two. F3 gives $(\delta,\delta)=6-6=0$. A simple reflection preserves this root form by direct expansion using $(\alpha_i,\lambda)=\lambda(h_i)$ and $(\alpha_i,\alpha_i)=2$; hence every root in $W\Pi$ has squared length 2. The nonzero root $m\delta$ has squared length zero, so is imaginary by F2. This proves the counterexample for every positive or negative nonzero integer m. At m=0 the four-dimensional space is the Cartan and is not a root space. [F2, F3, step 2.1, step 5.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Proposition 1.5.1, Lemma 1.5.3 and Example 1.5.4, pp.20–25; fully computed loop-sl3 adaptation.
