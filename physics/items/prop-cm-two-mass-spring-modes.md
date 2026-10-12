---
id: prop-cm-two-mass-spring-modes
kind: proposition
title: "Two equal masses with two outer springs and a coupling spring: eigenmodes, decoupling and the explicit normal frequencies"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, def-cm-oscillator-model-and-phase-system, thm-of-square-roots, thm-sine-and-cosine-addition-formulas, def-matrix-product-and-identity-matrix, def-matrix-space, def-transpose-of-a-matrix, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, thm-algebra-of-derivatives, def-derivative, def-interval]
dependency_roles:
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-matrix-space: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 6 Section 6.1, Eqs. (6.1)-(6.13), printed pages 1-4 of Chapter 6 (PDF pages 125-128): two coupled linear oscillators, the characteristic equation, and the symmetric case with the in-phase soft mode omega_-^2=(k_L)/m and anti-phase hard mode"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.6, printed pages 39-40: normal modes as eigenvectors of the linearised problem, each ringing at a single frequency"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 14.2-14.3, pages 488-490 of the PDF pagination: two identical masses coupled by a middle spring, normal coordinates rotated by 45 degrees and two characteristic frequencies"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement

Let $m>0$, $k\ge0$ and $c\ge0$, and put

$$K:=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix},\qquad u_+:=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},\qquad u_-:=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix},$$

and $\omega_+:=(k/m)^{1/2}$, $\omega_-:=((k+2c)/m)^{1/2}$ (nonnegative square roots,
[[thm-of-square-roots]]). Consider the linear system

$$m\,x''(t)=-Kx(t)$$

for $C^2$ curves $x:J\to\mathbb R^2$ on intervals $J\subseteq\mathbb R$ with nonempty interior
([[def-interval]], [[def-vector-valued-derivative-and-integral]]). Then:

1. $Ku_+=ku_+$ and $Ku_-=(k+2c)u_-$; the vectors $u_+,u_-$ are orthonormal, and every
   $x\in\mathbb R^2$ satisfies $x=\langle u_+,x\rangle u_++\langle u_-,x\rangle u_-$
   ([[def-euclidean-inner-product]]);
2. $x$ is a solution if and only if there are solutions $y_+,y_-:J\to\mathbb R$ of the scalar
   equations

$$m\,y_+''+k\,y_+=0,\qquad m\,y_-''+(k+2c)\,y_-=0$$

   of [[def-cm-oscillator-model-and-phase-system]] with $x=y_+u_++y_-u_-$; the pair
   $(y_+,y_-)$ is unique and is given by $y_\pm=\langle u_\pm,x\rangle$;
3. consequently, for $k>0$ the solutions are exactly the curves

$$x(t)=\bigl(A_+\cos(\omega_+t)+B_+\sin(\omega_+t)\bigr)u_++\bigl(A_-\cos(\omega_-t)+B_-\sin(\omega_-t)\bigr)u_-\qquad(A_\pm,B_\pm\in\mathbb R),$$

   that is, the system is a superposition of an in-phase normal mode with squared frequency
   $k/m$ and an anti-phase normal mode with squared frequency $(k+2c)/m$
   ([[thm-cm-homogeneous-oscillator-solution-classification]]);
4. if $k=0$ and $c\ge0$, then $Ku_+=0$, and the curves $x(t)=(A+Bt)u_+$
   ($A,B\in\mathbb R$) are solutions; for $B\ne0$ such a curve is unbounded on $[0,\infty)$, so
   the zero-frequency mode is affine rather than oscillatory. The bijection of clause 2 remains
   valid with the scalar equations $m\,y_+''=0$ and $m\,y_-''+2c\,y_-=0$, and for $c>0$ the
   $u_-$-component is the trigonometric family with $\omega_-=(2c/m)^{1/2}$
   ([[thm-cm-homogeneous-oscillator-solution-classification]]); if $c=0$, it is affine as well
   ([[prop-cm-oscillator-degenerate-and-repulsive-cases]]).

## Facts & Assumptions

**Given:** The parameters $m>0$, $k\ge0$, $c\ge0$, the matrix $K$ and vectors $u_\pm$, and the
system $m x''=-Kx$ on intervals $J$ with nonempty interior.

[F1] Matrix and vector data ([[def-matrix-product-and-identity-matrix]], [[def-matrix-space]],
[[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]]): $K$ is symmetric, $K_{12}=K_{21}=-c$;
the Euclidean inner product of $\mathbb R^2$ is the componentwise sum
$\langle u,v\rangle=u_1v_1+u_2v_2$; and $\langle u_+,u_+\rangle=\langle u_-,u_-\rangle=1$,
$\langle u_+,u_-\rangle=0$.

[F2] Scalar equations and their solutions ([[def-cm-oscillator-model-and-phase-system]],
[[thm-cm-homogeneous-oscillator-solution-classification]],
[[prop-cm-oscillator-degenerate-and-repulsive-cases]], [[thm-of-square-roots]],
[[thm-sine-and-cosine-addition-formulas]]): for $\mu>0$, put
$\omega=(\mu/m)^{1/2}$. For any scalar solution $y:J\to\mathbb R$ of
$m y''+\mu y=0$, choose $t_0\in J$, put
$J_0:=\{s\in\mathbb R:t_0+s\in J\}$ and define
$\widetilde y(s):=y(t_0+s)$ for $s\in J_0$. Then $0\in J_0$, $J_0$ has nonempty
interior, and autonomy gives $m\widetilde y''+\mu\widetilde y=0$ on $J_0$.
The homogeneous-oscillator classification applies there, so
$\widetilde y(s)=\widetilde A\cos(\omega s)+\widetilde B\sin(\omega s)$.
The addition formulas then give
$y(t)=A\cos(\omega t)+B\sin(\omega t)$ on $J$, where
$A=\widetilde A\cos(\omega t_0)-\widetilde B\sin(\omega t_0)$ and
$B=\widetilde A\sin(\omega t_0)+\widetilde B\cos(\omega t_0)$. Conversely
these unshifted families solve the scalar equation on every interval. For the
zero-stiffness equation $m y''=0$, the same translation and the degenerate
oscillator classification give $\widetilde y(s)=\widetilde A+\widetilde B s$;
restoring the constants gives $y(t)=A+Bt$ with
$A=\widetilde A-\widetilde B t_0$ and $B=\widetilde B$, and every such affine
function solves the equation.

[F3] Vector-valued calculus ([[def-vector-valued-derivative-and-integral]],
[[thm-algebra-of-derivatives]], [[def-derivative]], [[def-interval]]): derivatives of
$\mathbb R^2$-valued curves are computed componentwise; for a $C^2$ curve $x$ and a constant
$u\in\mathbb R^2$ the real function $t\mapsto\langle u,x(t)\rangle$ is $C^2$ with first derivative
$\langle u,x'(t)\rangle$ and second derivative $\langle u,x''(t)\rangle$; and if $y_+,y_-$ are
$C^2$ real functions then $t\mapsto y_+(t)u_++y_-(t)u_-$ is a $C^2$ curve with second derivative
$y_+''u_++y_-''u_-$.

## Proof

**Proof technique:** direct; verify the eigenrelations by matrix multiplication, decouple the
system in the orthonormal eigenbasis, and read the scalar solution families off the classification
theorem.

1.1 Eigenrelations and expansion: direct multiplication gives $$Ku_+=\frac1{\sqrt2}\begin{pmatrix}(k+c)-c\\-c+(k+c)\end{pmatrix}=\frac k{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}=ku_+,\qquad Ku_-=\frac1{\sqrt2}\begin{pmatrix}(k+c)+c\\-c-(k+c)\end{pmatrix}=(k+2c)u_-,$$ and $\langle u_+,u_-\rangle=\tfrac12(1-1)=0$, $\langle u_\pm,u_\pm\rangle=\tfrac12(1+1)=1$; also $\langle u_+,x\rangle=\tfrac1{\sqrt2}(x_1+x_2)$ and $\langle u_-,x\rangle=\tfrac1{\sqrt2}(x_1-x_2)$, so $\langle u_+,x\rangle u_++\langle u_-,x\rangle u_-=x$ for every $x$, and $K$ is symmetric since $K_{12}=K_{21}=-c$. [given, F1, algebra]

2.1 From a solution to scalar solutions: let $x:J\to\mathbb R^2$ be a $C^2$ solution of $m x''=-Kx$ and set $y_\pm(t):=\langle u_\pm,x(t)\rangle$. By [F3] the functions $y_\pm$ are $C^2$ and $m y_\pm''=m\langle u_\pm,x''\rangle=-\langle u_\pm,Kx\rangle$; since $K$ is symmetric, $\langle u_\pm,Kx\rangle=u_\pm^{\mathsf T}Kx=(Ku_\pm)^{\mathsf T}x=\langle Ku_\pm,x\rangle$, and step 1.1 gives $Ku_+=ku_+$, $Ku_-=(k+2c)u_-$; hence $m y_+''+ky_+=0$ and $m y_-''+(k+2c)y_-=0$ on $J$. [given, step 1.1, F3, algebra]

2.2 From scalar solutions to a solution: conversely, let $y_+,y_-:J\to\mathbb R$ be $C^2$ solutions of the two scalar equations and put $x:=y_+u_++y_-u_-$. By [F3] the curve $x$ is $C^2$ and $$m x''=m y_+''u_++m y_-''u_-=-ky_+u_+-(k+2c)y_-u_-=-\bigl(y_+Ku_++y_-Ku_-\bigr)=-Kx$$ by step 1.1, so $x$ solves the system. [given, step 1.1, F3, algebra]

3.1 Bijection: the two constructions are mutually inverse. If $x$ is a solution, then the pair $y_\pm=\langle u_\pm,x\rangle$ of step 2.1 reconstructs $x$ by the expansion identity of step 1.1; if $(y_+,y_-)$ is a pair of scalar solutions, then the coordinates of $x=y_+u_++y_-u_-$ are $\langle u_\pm,x\rangle=\langle u_\pm,u_+\rangle y_++\langle u_\pm,u_-\rangle y_-=y_\pm$ by the orthonormality of step 1.1. Hence clause 2 holds, including uniqueness of the pair. [step 1.1, step 2.1, step 2.2]

4.1 Frequencies on an arbitrary interval: assume $k>0$ and choose $t_0\in J$. For scalar components $y_\pm$ from clause 2, the translated functions $\widetilde y_\pm(s):=y_\pm(t_0+s)$ are defined on $J-t_0$, which contains $0$ and has nonempty interior, and solve the same autonomous scalar equations. Apply [F2] to obtain the trigonometric families in $s$ with frequencies $\omega_+=(k/m)^{1/2}$ and $\omega_-=((k+2c)/m)^{1/2}$. The addition formulas in [F2] restore constants $A_\pm,B_\pm$ and give $y_\pm(t)=A_\pm\cos(\omega_\pm t)+B_\pm\sin(\omega_\pm t)$ on $J$. Conversely each displayed scalar family solves its equation on $J$; the bijection of step 3.1 therefore gives exactly the vector solutions in clause 3, with the $u_+$-mode (both coordinates equal) in phase and the $u_-$-mode (opposite coordinates) anti-phase. [step 3.1, F2, algebra]

5.1 Degenerate case on an arbitrary interval: let $k=0$, $c\ge0$, and choose $t_0\in J$. Step 1.1 gives $Ku_+=0$, so for $x(t)=(A+Bt)u_+$ one has $m x''=0$ and $-Kx=-(A+Bt)Ku_+=0$: the family consists of solutions. If $B\ne0$ then $\lVert x(t)\rVert_2=|A+Bt|$ is unbounded on $[0,\infty)$. The translations $\widetilde y_\pm(s):=y_\pm(t_0+s)$ of the scalar components are defined on $J-t_0$ and satisfy $m\widetilde y_+''=0$, $m\widetilde y_-''+2c\widetilde y_-=0$. By [F2], $\widetilde y_+$ is affine, and restoring constants gives $y_+(t)=A+Bt$; if $c=0$ the same affine classification applies to $\widetilde y_-$, while if $c>0$ the homogeneous-oscillator classification gives the trigonometric family for $\widetilde y_-$ and the addition formulas restore its constants to the stated family with $\omega_-=(2c/m)^{1/2}$. The bijection of step 3.1 remains valid and establishes clause 4. [step 1.1, step 3.1, F2, algebra] ∎

## Remarks

- The system is the Euler-Lagrange equation of the Lagrangian
  $\tfrac12m(\dot x_1^2+\dot x_2^2)-\tfrac12k(x_1^2+x_2^2)-\tfrac12c(x_1-x_2)^2$ for two equal
  masses attached to fixed walls by equal springs of stiffness $k$ and coupled by a middle spring
  of stiffness $c$; the proposition states the mathematics of that model only, and no physical
  identification of $m,k,c$ is asserted.

- The $k=0$ clause is the zero-frequency caution: a vanishing eigenvalue produces affine rather
  than oscillatory motion, so no nonzero frequency can be read off from the eigenrelation
  $Ku_+=ku_+$ in that case.
