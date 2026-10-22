---
id: lem-reciprocal-riley-eigenvalue-branches-have-the-same-character
kind: lemma
title: Reciprocal eigenvalue branches in the figure-eight presentation are conjugate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-holomorphic-implicit-function-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Kathleen L. Petersen, A-polynomials of a family of two-bridge knots
      url: https://nyjm.albany.edu/j/2015/21-39v.pdf
      locator: Section 4.2, printed pp. 853–854, triangular two-generator representation form; all matrices and conjugacies used here are independently multiplied below
    - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, Chapter 5
      url: https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf
      locator: Lemma 5.8.1 and Theorem 5.8.2 proof, printed pp. 103–105, expressly retain the reciprocal-eigenvalue sign ambiguity
---

## Statement

Consider the group presentation $G=\langle a,b\mid bw=wa\rangle$ with $w=ab^{-1}a^{-1}b$. Put $d_0=(-1+i\sqrt3)/2$. For sufficiently small $t\in\mathbb C$ there is a holomorphic even function $d(t)$, with $d(0)=d_0$, such that
$$A_t=\begin{pmatrix}e^{t/2}&1\\0&e^{-t/2}\end{pmatrix},\qquad B_t=\begin{pmatrix}e^{t/2}&0\\-d(t)&e^{-t/2}\end{pmatrix}$$
define irreducible representations $\rho_t:G\to SL_2(\mathbb C)$ by $\rho_t(a)=A_t$, $\rho_t(b)=B_t$. For every such $t$, the representations $\rho_t$ and $\rho_{-t}$ are conjugate. Nevertheless the ordered eigenvalue ratio of $A_t$ on its first coordinate eigenline is $e^t$, and
$$\operatorname{tr}A_t=2+\frac{t^2}{4}+O(t^4),\qquad d(t)=d_0+\left(\frac12-\frac{i}{2\sqrt3}\right)t^2+O(t^4).$$
In particular, no holomorphic function on the ordinary local conjugacy or character quotient near $\rho_0$, whose pullback to representation matrices is holomorphic, can vanish at $\rho_0$ and give a logarithm of either eigenvalue ratio of $\rho(a)$ at every nearby representation. Such an eigenvalue logarithm requires additional branch or eigenline data.

## Statement references

[[thm-holomorphic-implicit-function-theorem]]

[Petersen, §4.2](https://nyjm.albany.edu/j/2015/21-39v.pdf)

[Thurston, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

## Facts & Assumptions

**Given:** The displayed abstract presentation, the matrix families to be constructed and the specified root $d_0$.

[F1] A holomorphic equation $F(z,d)=0$ with $F_d\ne0$ at a solution has a unique nearby holomorphic solution $d=d(z)$. [[thm-holomorphic-implicit-function-theorem]]

## Proof

1.1 Write $m=e^{t/2}$, $s=m^2+m^{-2}$, $A=\left(\begin{smallmatrix}m&1\\0&m^{-1}\end{smallmatrix}\right)$ and $B=\left(\begin{smallmatrix}m&0\\-d&m^{-1}\end{smallmatrix}\right)$. Direct multiplication gives $W=AB^{-1}A^{-1}B$ with entries $W_{11}=(1+d)^2-dm^2$, $W_{12}=m-(1+d)/m$, $W_{21}=-dW_{12}$ and $W_{22}=1-d/m^2$. A second multiplication gives $BW-WA=\left(\begin{smallmatrix}0&-F\\-dF&0\end{smallmatrix}\right)$, where $F(d,s)=d^2+(3-s)d+3-s$. Hence $BW=WA$ whenever $F(d,s)=0$. At $t=0$, $s=2$ and $F(d,2)=d^2+d+1$, so $F(d_0,2)=0$ and $F_d(d_0,2)=2d_0+1=i\sqrt3\ne0$. [given, algebra]

2.1 By [F1], $F(d,s)=0$ has a unique holomorphic solution $d=d(s)$ near $(d_0,2)$. Since $s(t)=2\cosh t$ is even, the composition $d(t)=d(s(t))$ is holomorphic and even, and step 1.1 makes the resulting matrices a representation. Expanding $s=2+t^2+O(t^4)$ and writing $d=d_0+ct^2+O(t^4)$ in $F=0$ gives $(2d_0+1)c=d_0+1$. Thus $c=(d_0+1)/(2d_0+1)=1/2-i/(2\sqrt3)$, as claimed. The exponential series gives $\operatorname{tr}A_t=m+m^{-1}=2+t^2/4+O(t^4)$. [F1, step 1.1, algebra]

3.1 Put $r=m-m^{-1}$ and $P=\left(\begin{smallmatrix}d&r\\dr&d\end{smallmatrix}\right)$. Multiplication gives $PA(m,d)=A(m^{-1},d)P$ and $PB(m,d)=B(m^{-1},d)P$. Its determinant is $d(d-r^2)$, which tends to $d_0^2\ne0$. Hence $P$ is invertible for all sufficiently small $t$. Since $d(-t)=d(t)$ and $m(-t)=m(t)^{-1}$, it conjugates $\rho_t$ to $\rho_{-t}$. This is also conjugacy by an $SL_2$ matrix after multiplying $P$ by a scalar of square equal to its inverse determinant; such a scalar exists for each nonzero complex determinant and has no effect on conjugation. [step 2.1, construct, algebra]

4.1 At $t=0$, $A_0$ has just the eigenline $\mathbb Ce_1$, whereas $B_0$ does not preserve that line because $d_0\ne0$. For small nonzero $t$, the two eigenlines of $A_t$ are $\mathbb Ce_1$ and $\mathbb C(1,-r)$. The first is again not preserved by $B_t$; the second is preserved exactly when $d=r^2$, as substitution of $(1,-r)$ in $B_t$ shows. That equality is excluded by the nonzero determinant in step 3.1. Thus the entire small family is irreducible. Its first-coordinate eigenvalue ratio is $m/m^{-1}=e^t$, and the unordered eigenvalue ratios are $e^t,e^{-t}$. [step 2.1, step 3.1, algebra]

5.1 Suppose a quotient function as in the last assertion existed, and write $q(t)$ for its holomorphic pullback along $\rho_t$. Conjugacy in step 3.1 gives $q(t)=q(-t)$, while $q(0)=0$ gives $q(t)=O(t^2)$. The eigenvalue-ratio condition implies $e^{q(t)}\in\{e^t,e^{-t}\}$, hence $\cosh q(t)=\cosh t$. But the left side is $1+O(t^4)$ and the right side is $1+t^2/2+O(t^4)$, a contradiction. This proves the quotient-logarithm obstruction without presuming any coordinate classification of characters. [step 3.1, step 4.1, algebra] ∎

## Scope and source convention

The proof uses the displayed abstract presentation as given. It does not claim a new identification of its central representation with the geometric complete figure-eight holonomy; that topological and geometric identification is a separate prerequisite if this lemma is applied to the complete knot structure. Its exact matrix calculation explains the reciprocal branch issue without borrowing the currently unproved local figure-eight character-curve carrier.

The entire Petronio–Porti text was read separately (all 23 PDF pages); it works on a shape-parameter space retaining peripheral affine holonomy and does not prove smoothness of that space at the complete point. The actual cited Thurston §5.8, printed pp. 102–105, was read: Lemma 5.8.1 gives filling coefficients only up to sign, and p. 105 expressly relates the sign to choosing an eigenvalue or its inverse. The actual cited Calegari §§2.3.2–2.4.1, PDF pp. 15–18, was read: its peripheral logarithm convention chooses a first common eigenvector before naming the eigenvalues. Those conventions do not establish a single-valued eigenvalue logarithm on an ordinary conjugacy quotient.
