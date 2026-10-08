---
id: ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes
kind: example
title: "Reflection matrices in a positive plane, a Lorentzian plane, and a plane with radical"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-bilinear-symmetric-skew-and-alternating-forms, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-definiteness-inertia-and-signature-data-over-the-reals, def-function-space, lem-standard-basis-of-f-n, thm-reals-ordered-field]
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
      locator: "\u00a76.12, printed p. 116\u2013117: equation (6.33) for $\\rho_i(x)=x-2B_M(e_i,x)e_i$, and the remark that the form need not be definite; Appendix D.1, printed p. 441, on positive definite versus degenerate rank-two planes"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed pp. 93\u201397: equations (4.10)\u2013(4.14) and the remark that the form is generally not symmetric unless symmetrically weighted; (4.21) for the standard symmetric case"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $B$ be a symmetric bilinear form on a real vector space $V$ and let $a\in V$ with $B(a,a)\ne0$. Define $r_a(v):=v-2B(v,a)a/B(a,a)$, using the same formula as [[def-cg-real-coxeter-form-and-reflection]]. Step 1.1 below proves directly that this is a linear involution preserving $B$ and fixing $\ker B(-,a)$ pointwise for this general $B$. In the three cases take $V=\mathbb R^2$, whose functions have domain $\{0,1\}$ ([[def-function-space]]), and relabel coordinates by $x_1:=x(0)$, $x_2:=x(1)$ and standard unit vectors by $e_1,e_2$, respectively ([[lem-standard-basis-of-f-n]]). Each matrix is taken in the ordered basis $(e_1,e_2)$; inertia is as in [[def-definiteness-inertia-and-signature-data-over-the-reals]].

**(i) Positive plane.** $B$ the dot product, $a=\frac35e_1+\frac45e_2$, so $B(a,a)=1$. Then $r_a(e_1)=\frac7{25}e_1-\frac{24}{25}e_2$, $r_a(e_2)=-\frac{24}{25}e_1-\frac7{25}e_2$, i.e. $$[r_a]=\frac1{25}\begin{pmatrix}7&-24\\-24&-7\end{pmatrix},\qquad [r_a]^2=I_2,\qquad \det[r_a]=-1,$$ and $B$ has inertia $(2,0,0)$: a Euclidean reflection across the line $\mathbb R(-4e_1+3e_2)$.

**(ii) Lorentzian plane.** $B(x,y)=x_1y_1-x_2y_2$, of inertia $(1,1,0)$, and $a=2e_1+e_2$, so $B(a,a)=3$. Then $r_a(e_1)=-\frac53e_1-\frac43e_2$, $r_a(e_2)=\frac43e_1+\frac53e_2$, i.e. $$[r_a]=\frac13\begin{pmatrix}-5&4\\-4&5\end{pmatrix},\qquad [r_a]^2=I_2,\qquad \det[r_a]=-1,$$ and $[r_a]$ preserves $B$: $B(r_ae_1,r_ae_1)=1$, $B(r_ae_2,r_ae_2)=-1$, $B(r_ae_1,r_ae_2)=0$.

**(iii) Plane with radical.** $B(x,y)=x_1y_1$, of inertia $(1,0,1)$ and radical $\operatorname{rad}(B)=\mathbb Re_2$ ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]), and $a=e_1$: then $r_a=\mathrm{diag}(-1,1)$, i.e. $r_a(e_1)=-e_1$ and $r_a(e_2)=e_2$, with fixed hyperplane $\ker B(-,e_1)=\mathbb Re_2=\operatorname{rad}(B)$. The vector $e_2$ is $B$-null, so the displayed formula does not define a reflection with normal $e_2$.

## Facts & Assumptions

**Given:** $V=\mathbb R^2$ with its ordered standard basis $e_1,e_2$, a symmetric bilinear form $B$ on $V$, and $a\in V$ with $B(a,a)\ne0$; $r_a(v):=v-\frac{2B(v,a)}{B(a,a)}a$, using the formula of [[def-cg-real-coxeter-form-and-reflection]], and all matrices below are taken in the basis $(e_1,e_2)$.

[F1] The reflection $r_a$ is defined only for $B(a,a)\ne0$; the radical is the set of $u$ with $B(u,v)=0$ for every $v$, and the inertia of a form presented by a diagonal matrix with $p$ positive, $q$ negative and $r$ zero diagonal entries is $(p,q,r)$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F2] A symmetric bilinear form is linear in each variable and satisfies $B(u,v)=B(v,u)$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F3] $\mathbb R^2$ is the function space on $\{0,1\}$; with the relabelling $x_1=x(0)$, $x_2=x(1)$ and standard unit vectors $e_1,e_2$, one has $x=x_1e_1+x_2e_2$ ([[def-function-space]], [[lem-standard-basis-of-f-n]]).

[F4] $\mathbb R$ is an ordered field, so the elementary arithmetic of the fractions below is the field arithmetic of $\mathbb R$; in particular $2\cdot\frac12=1$ and $\frac{2}{3}\cdot3=2$ ([[thm-reals-ordered-field]]).

## Verification

1.1 General reflection identities. Put $d:=B(a,a)\ne0$. Bilinearity makes $r_a$ linear, gives $B(r_a(v),a)=-B(v,a)$, and hence $r_a^2(v)=v$. The formula gives $r_a(a)=-a$ and fixes every $v$ with $B(v,a)=0$; conversely $r_a(v)=v$ forces $B(v,a)=0$, since $a\ne0$ and $2/d\ne0$. Finally, symmetry and bilinearity give $B(r_a(u),r_a(v))=B(u,v)-4B(u,a)B(v,a)/d+4B(u,a)B(v,a)/d=B(u,v)$. Thus the algebraic identities hold for every symmetric $B$, without requiring it to be a Coxeter form. [given, F1, F2, F4, algebra]

2.1 Positive plane. Take $B$ the dot product, so $B(e_1,e_1)=B(e_2,e_2)=1$ and $B(e_1,e_2)=0$, and take $a=\frac35e_1+\frac45e_2$, for which $B(a,a)=\frac9{25}+\frac{16}{25}=1$. Here $B(e_1,a)=\frac35$ and $B(e_2,a)=\frac45$, so $$r_a(e_1)=e_1-\frac65a=\tfrac7{25}e_1-\tfrac{24}{25}e_2,\qquad r_a(e_2)=e_2-\frac85a=-\tfrac{24}{25}e_1-\tfrac7{25}e_2,$$ giving $[r_a]=\frac1{25}\begin{pmatrix}7&-24\\-24&-7\end{pmatrix}$. Squaring, $[r_a]^2=\frac1{625}\begin{pmatrix}625&0\\0&625\end{pmatrix}=I_2$, and $\det[r_a]=\frac{-49-(-24)(-24)}{625}=\frac{-625}{625}=-1$. The dot product has inertia $(2,0,0)$ and $r_a$ fixes $\ker B(-,a)=\{x:\frac35x_1+\frac45x_2=0\}=\mathbb R(-4e_1+3e_2)$ pointwise, the Euclidean reflection across that line. [given, F1, F2, F3, F4, step 1.1, algebra]

2.2 Lorentzian plane. Take $B(x,y)=x_1y_1-x_2y_2$, of inertia $(1,1,0)$, and $a=2e_1+e_2$, so $B(a,a)=4-1=3$, $B(e_1,a)=2$ and $B(e_2,a)=-1$. Then $$r_a(e_1)=e_1-\frac43a=-\tfrac53e_1-\tfrac43e_2,\qquad r_a(e_2)=e_2+\frac23a=\tfrac43e_1+\tfrac53e_2,$$ so $[r_a]=\frac13\begin{pmatrix}-5&4\\-4&5\end{pmatrix}$, whose square is $\frac19\begin{pmatrix}9&0\\0&9\end{pmatrix}=I_2$ and whose determinant is $\frac{-25+16}{9}=-1$. The invariance identities hold on the basis: $B(r_ae_1,r_ae_1)=\frac{25}9-\frac{16}9=1$, $B(r_ae_2,r_ae_2)=\frac{16}9-\frac{25}9=-1$, and $B(r_ae_1,r_ae_2)=-\frac{20}9+\frac{20}9=0$, so $[r_a]$ preserves $B$ by bilinearity. [given, F1, F2, F3, F4, step 1.1, algebra]

2.3 Plane with radical. Take $B(x,y)=x_1y_1$, whose matrix $\operatorname{diag}(1,0)$ has inertia $(1,0,1)$ and whose radical is $\{u:u_1v_1=0\text{ for all }v\}=\mathbb Re_2$, and take $a=e_1$, so $B(a,a)=1$ and $r_a(v)=v-2v_1e_1$. Hence $r_a(e_1)=-e_1$ and $r_a(e_2)=e_2$, that is $r_a=\operatorname{diag}(-1,1)$, and its fixed hyperplane is $\ker B(-,e_1)=\{v:v_1=0\}=\mathbb Re_2=\operatorname{rad}(B)$. The vector $e_2$ is $B$-null, $B(e_2,e_2)=0$, so the displayed formula assigns it no reflection. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 Conclusion. In each of the three cases $a$ satisfies $B(a,a)\ne0$ and the displayed matrix is $[r_a]$ in the ordered basis $(e_1,e_2)$: an involution with determinant $-1$ in the two nondegenerate cases, with the inertia readings $(2,0,0)$ and $(1,1,0)$ of the form and the fixed hyperplane $\ker B(-,a)$ computed above, and in the degenerate case the fixed hyperplane coincides with the radical $\mathbb Re_2$. These explicit numbers verify the general identities proved in step 1.1 and display why the hypothesis $B(a,a)\ne0$ of [F1] is exactly what the definition of $r_a$ requires: the null vector $e_2$ of the last case is a normal for which no reflection is defined by the displayed formula. [given, F1, F2, step 1.1, step 2.1, step 2.2, step 2.3] ∎
