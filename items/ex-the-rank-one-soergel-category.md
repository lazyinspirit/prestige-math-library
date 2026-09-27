---
id: ex-the-rank-one-soergel-category
kind: example
title: "The rank-one Soergel category"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-the-rank-one-soergel-bimodule-square-splits, def-type-a-reflection-realization-and-polynomial-ring, def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-type-a-soergel-generators-are-finite-free-on-both-sides, thm-fundamental-theorem-of-symmetric-polynomials]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §1.4 and §§3.4–3.5, PDF pp. 8–9, 24–27"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §4, PDF pp. 21–26"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

Take $n=2$, so that $R=\mathbb Q[x_1,x_2]$, that $S_2=\{e,s\}$ has the simple
reflection $s=s_1$ exchanging $x_1$ and $x_2$, and put $\alpha=\alpha_1=x_1-x_2$
and $\delta=\alpha/2$. Write $B_s=B_1=R\otimes_{R^s}R(1)$ for the Soergel
bimodule of $s$, $u:=1\otimes1$, $w_0:=1\otimes\delta$, and let $R_s$ be the
standard bimodule $R$ with the right action $x\cdot g=x\,s(g)$ of
[[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], so
that $(k)$ denotes the external shift $M(k)=M\{-k\}$ of that item. Then:

1. **The invariant ring and a homogeneous basis of $R$.** The invariant ring is
   $R^s=\mathbb Q[e_1,e_2]$ for the elementary symmetric polynomials
   $e_1=x_1+x_2$ and $e_2=x_1x_2$, of degrees $2$ and $4$, so it is a graded
   polynomial ring in two algebraically independent generators; and $\{1,\alpha\}$
   is a homogeneous $R^s$-basis of $R$, of degrees $0$ and $2$, with
   $$\alpha^2=(x_1-x_2)^2=(x_1+x_2)^2-4x_1x_2=e_1^2-4e_2\ \in\ R^s .$$
2. **The right action and the two sub-bimodules.** $\{u,w_0\}$ is a homogeneous
   left $R$-basis of $B_s$ of degrees $-1$ and $+1$, so $B_s\cong R(1)\oplus R(-1)$
   as a graded left $R$-module and $B_s$ is free of rank two on each side. Writing
   $g=g^++\delta g^-$ with $g^\pm\in R^s$, that is $g^+=\tfrac12(g+s(g))$ and
   $g^-=\partial_s(g)=\dfrac{g-s(g)}{\alpha}$, the right action on this basis is
   $$u\cdot g=g^+u+g^-w_0,\qquad w_0\cdot g=\delta^2g^-u+g^+w_0 ,$$
   and the two degree-one elements $\rho_+:=\delta u+w_0$ and
   $\rho_-:=\delta u-w_0$ satisfy
   $$\rho_+\cdot g=g\,\rho_+,\qquad \rho_-\cdot g=s(g)\,\rho_- ,$$
   so that $R\rho_+\cong R(-1)$ and $R\rho_-\cong R_s(-1)$ are graded
   $(R,R)$-sub-bimodules of $B_s$ generated in degree $1$.
3. **The two rank-one exact sequences.** The two degree-zero surjections
   $$\psi_+:B_s\to R_s(1),\ \ f\otimes g\mapsto f\,s(g),\qquad \psi_-:B_s\to R(1),\ \ f\otimes g\mapsto fg$$
   take the values $\psi_+(u)=1$, $\psi_+(w_0)=-\delta$ and $\psi_-(u)=1$,
   $\psi_-(w_0)=\delta$ on the basis, so that
   $\ker\psi_+=\{\,Au+Bw_0:A=\delta B\,\}=R\rho_+$ and
   $\ker\psi_-=\{\,Au+Bw_0:A=-\delta B\,\}=R\rho_-$; consequently
   $$0\to R(-1)\xrightarrow{\;1\mapsto\rho_+\;}B_s\xrightarrow{\;\psi_+\;}R_s(1)\to0, \qquad 0\to R_s(-1)\xrightarrow{\;1\mapsto\rho_-\;}B_s\xrightarrow{\;\psi_-\;}R(1)\to0$$
   are exact sequences of graded $(R,R)$-bimodules with degree-zero maps.
4. **The square and its explicit splitting.** $B_s\otimes_RB_s$ is canonically
   $R\otimes_{R^s}R\otimes_{R^s}R\{-2\}$, free of rank four on each side, with the
   homogeneous left $R$-basis
   $$\bigl(u\otimes u,\ u\otimes w_0,\ w_0\otimes u,\ w_0\otimes w_0\bigr)$$
   of degrees $(-2,0,0,2)$; the middle-slot maps
   $$e_+:\ p\otimes g\otimes q\mapsto p\otimes g^+\otimes q,\qquad e_-:\ p\otimes g\otimes q\mapsto p\otimes\delta g^-\otimes q$$
   are degree-zero $R$-bimodule endomorphisms with $e_+^2=e_+$, $e_-^2=e_-$,
   $e_+e_-=e_-e_+=0$ and $e_++e_-=\operatorname{id}$, given in the displayed
   basis by the diagonal matrices $\operatorname{diag}(1,1,0,0)$ and
   $\operatorname{diag}(0,0,1,1)$. Hence
   $$B_s\otimes_RB_s=\operatorname{im}(e_+)\oplus\operatorname{im}(e_-) \cong\bigl(R\otimes_{R^s}R^s\otimes_{R^s}R\bigr)\{-2\}\oplus \bigl(R\otimes_{R^s}\delta R^s\otimes_{R^s}R\bigr)\{-2\} \cong B_s\{-1\}\oplus B_s\{1\},$$
   with $\operatorname{im}(e_+)$ free on the basis
   $(u\otimes u,\,u\otimes w_0)$ in degrees $\{-2,0\}$ and
   $\operatorname{im}(e_-)$ free on the basis
   $(w_0\otimes u,\,w_0\otimes w_0)$ in degrees $\{0,2\}$; the two summands have
   different graded ranks as left $R$-modules and are therefore not isomorphic
   as graded bimodules. This realizes the rank-one square
   $B_s\otimes_RB_s\cong B_s(1)\oplus B_s(-1)$ of
   [[lem-the-rank-one-soergel-bimodule-square-splits]] by explicit idempotents.

## Facts & Assumptions
**Given:** The ring $R=\mathbb Q[x_1,x_2]$ graded by $\deg x_i=2$, the simple reflection $s=s_1$ of $S_2$, $\alpha=x_1-x_2$, $\delta=\alpha/2$, the invariant ring $R^s$, and the bimodule $B_s=R\otimes_{R^s}R(1)$ with the elements $u=1\otimes1$ and $w_0=1\otimes\delta$.

[F1] $R$ is a graded commutative $\mathbb Q$-algebra with $S_2$ acting by place permutation, $(w\cdot f)(x_1,x_2)=f(x_{w^{-1}(1)},x_{w^{-1}(2)})$, and for the simple reflection $s$ the Demazure operator $\partial_s(f)=(f-s(f))/\alpha$ is well defined with values in $R^s$; $R$ is free over $R^s$ with basis $\{1,\alpha\}$, every $f\in R$ having a unique expression $f=g+\alpha h$ with $g,h\in R^s$, $g=\tfrac12(f+s(f))$ and $h=\tfrac12\partial_s(f)$ ([[def-type-a-reflection-realization-and-polynomial-ring]]).

[F2] Substitution $T_1\mapsto e_1$, $T_2\mapsto e_2$ is an isomorphism of $\mathbb Q$-algebras $\mathbb Q[T_1,T_2]\to\mathbb Q[x_1,x_2]^{S_2}$ from a polynomial ring onto the symmetric polynomials, so $e_1=x_1+x_2$ and $e_2=x_1x_2$ freely generate $R^s$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[F3] $B_s=R\otimes_{R^s}R(1)$ is the balanced tensor product with left action $r'(r\otimes r'')=r'r\otimes r''$, right action $(r\otimes r'')r'=r\otimes r''r'$ and $(B_s)_d=(R\otimes_{R^s}R)_{d+1}$, and $B_s\cong R(-1)\oplus R(1)$ as a graded left $R$-module ([[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F4] $B_s$ is free of rank two as a left $R$-module with basis $\{1\otimes1,\,1\otimes\alpha\}$ and as a right $R$-module with basis $\{1\otimes1,\,\alpha\otimes1\}$, both of degrees $-1$ and $1$; a tensor product of finite free left modules with homogeneous bases has the tensor products of the basis elements as a homogeneous basis ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F5] The rank-one calculus: $u=1\otimes1$ and $w_0=1\otimes\delta$ form a graded left $R$-basis of $B_s$, the right action is $u\cdot g=g^+u+g^-w_0$ and $w_0\cdot g=\delta^2g^-u+g^+w_0$ for the decomposition $g=g^++\delta g^-$ with $g^\pm\in R^s$ and $g^+=\tfrac12(g+s(g))$, the two elements $\delta u\pm w_0$ generate the sub-bimodules $R(\delta u+w_0)\cong R(-1)$ and $R(\delta u-w_0)\cong R_s(-1)$, both generated in degree $1$, and the two displayed sequences with the maps $f\otimes g\mapsto f\,s(g)$ and $f\otimes g\mapsto fg$ are exact with degree-zero maps ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F6] The rank-one square: there is a degree-zero isomorphism of graded bimodules $B_s\otimes_RB_s\cong B_s(1)\oplus B_s(-1)$, that is $B_s\otimes_RB_s\cong B_s\{-1\}\oplus B_s\{1\}$, whose summands are the idempotent images of $R\otimes_{R^s}R^s\otimes_{R^s}R$ and $R\otimes_{R^s}\alpha R^s\otimes_{R^s}R$; the summands are free of rank two on each side, $B_s\otimes_RB_s$ is free of rank four on each side, and the summands are not isomorphic as graded bimodules ([[lem-the-rank-one-soergel-bimodule-square-splits]]).



## Proof

1.1 The invariant ring: by [F2] the substitution $T_1\mapsto e_1$, $T_2\mapsto e_2$ identifies $\mathbb Q[T_1,T_2]$ with $R^s$, so $R^s=\mathbb Q[e_1,e_2]$ with $e_1,e_2$ algebraically independent of degrees $2$ and $4$; and $\alpha^2=x_1^2-2x_1x_2+x_2^2=e_1^2-4e_2$ lies in $R^s$. [F2, F1]

1.2 The decomposition and the basis: by [F1] every $f\in R$ has the unique expression $f=g+\alpha h$ with $g,h\in R^s$, $g=\tfrac12(f+s(f))$ and $h=\tfrac12\partial_s(f)$; equivalently, in the normalization $f=g+\delta g^-$ of [F5] with $\delta=\alpha/2$, one has the unique $g^-=2h=\partial_s(f)=(f-s(f))/\alpha$ in $R^s$. Applying this to the second tensor factor of $B_s=R\otimes_{R^s}R(1)$, the elements $u=1\otimes1$ of degree $-1$ and $1\otimes\alpha=1\otimes2\delta=2w_0$ of degree $+1$ form a homogeneous left $R$-basis of $B_s$ by [F4], hence so does $(u,w_0)$, and $B_s\cong R(-1)\oplus R(1)$ by [F3]. [F1, F3, F4, F5]

1.3 The right action: by [F3] the right action is $(r\otimes r'')r'=r\otimes r''r'$, so $u\cdot g=1\otimes g=g^+u+g^-w_0$ and $w_0\cdot g=1\otimes\delta g$; since $\delta g=\delta g^++\delta^2g^-$ with $\delta^2g^-$ invariant and $\delta g^+$ anti-invariant, the unique decomposition $\delta g=(\delta g)^++\delta(\delta g)^-$ of [F5] has $(\delta g)^+=\delta^2g^-$ and $(\delta g)^-=g^+$, hence $w_0\cdot g=\delta^2g^-u+g^+w_0$. [F1, F5, F3]

2.1 The two sub-bimodules: expanding with step 1.3, $(\delta u+w_0)\cdot g=\delta(g^+u+g^-w_0)+(\delta^2g^-u+g^+w_0)=(\delta g^++\delta^2g^-)u+(g^++\delta g^-)w_0=\delta g\,u+g\,w_0=g(\delta u+w_0)$, while $(\delta u-w_0)\cdot g=(\delta g^+-\delta^2g^-)u+(\delta g^--g^+)w_0=s(g)(\delta u-w_0)$, because $s(g)=s(g^++\delta g^-)=g^+-\delta g^-$ by [F1] and $\delta g=\delta g^++\delta^2g^-$, $\delta^2g^-\in R^s$; both elements have degree $1$ by step 1.2, so $R\rho_+\cong R(-1)$ and $R\rho_-\cong R_s(-1)$ as graded bimodules generated in degree $1$, as [F5] records. [F1, F5, step 1.2, step 1.3]

2.2 The square and its idempotents: $B_s\otimes_RB_s=(R\otimes_{R^s}R\otimes_{R^s}R)\{-2\}$ by [F3], and by [F4] the four elements $u\otimes u=1\otimes1\otimes1$, $u\otimes w_0=1\otimes1\otimes\delta$, $w_0\otimes u=1\otimes\delta\otimes1$, $w_0\otimes w_0=1\otimes\delta\otimes\delta$ form a homogeneous left $R$-basis of degrees $(-2,0,0,2)$; the middle-slot projections $\operatorname{pr}_+:g\mapsto g^+$ and $\operatorname{pr}_-:g\mapsto\delta g^-$ are $(R^s,R^s)$-bilinear, hence induce well-defined $R$-bimodule endomorphisms $e_+,e_-$ of the balanced tensor, and $g^+$ and $\delta g^-$ are the two components of $g$, so $e_++e_-=\operatorname{id}$, $e_+e_-=e_-e_+=0$ and $e_\pm^2=e_\pm$. [F3, F4, F5, step 1.2]

3.1 The kernels: by step 1.2 every element of $B_s$ is uniquely $Au+Bw_0$ with $A,B\in R$, and the maps displayed in claim 3 are $R$-balanced and degree zero with $\psi_+(u)=1$, $\psi_+(w_0)=s(\delta)=-\delta$, $\psi_-(u)=1$ and $\psi_-(w_0)=\delta$; hence $\psi_+(Au+Bw_0)=A-\delta B$ and $\psi_-(Au+Bw_0)=A+\delta B$, so $\ker\psi_+=R\rho_+$ and $\ker\psi_-=R\rho_-$. The inclusions $1\mapsto\rho_\pm$ are injective because $\rho_\pm\ne0$ in the free left $R$-module $B_s$ by step 1.2, and both maps are surjective because $\psi_\pm(u)=1$ generates the rank-one target; this verifies the two exact sequences of claim 3 and their degree-zero maps. [F1, F4, F5, step 1.2, step 2.1]

3.2 The matrix and the split: on the basis of step 2.2 the map $e_+$ fixes $u\otimes u$ and $u\otimes w_0$, whose middle slot is $1$, and kills $w_0\otimes u$ and $w_0\otimes w_0$, whose middle slot is $\delta$ with $\delta^+=0$; so $e_+=\operatorname{diag}(1,1,0,0)$ and $e_-=\operatorname{diag}(0,0,1,1)$ in that basis, and $B_s\otimes_RB_s=\operatorname{im}(e_+)\oplus\operatorname{im}(e_-)$ with $\operatorname{im}(e_+)$ free on $u\otimes u,u\otimes w_0$ and $\operatorname{im}(e_-)$ free on $w_0\otimes u,w_0\otimes w_0$, the two blocks having different degree sets $\{-2,0\}$ and $\{0,2\}$ and hence different graded ranks. [F5, step 2.2]

4.1 The identification of the summands: the multiplication $p\otimes r\otimes q\mapsto pr\otimes q$ is a degree-zero isomorphism $R\otimes_{R^s}R^s\otimes_{R^s}R\{-2\}\to(R\otimes_{R^s}R)\{-2\}=B_s\{-1\}$ by [F3], and $p\otimes\delta r\otimes q\mapsto p\otimes r\otimes q$ is a degree-zero isomorphism $R\otimes_{R^s}\delta R^s\otimes_{R^s}R\{-2\}\to(R\otimes_{R^s}R)\{0\}=B_s\{1\}$; since $\delta R^s=\alpha R^s$ (as $2$ is invertible in $\mathbb Q$), this realizes the two idempotent images of [F6], and the non-isomorphism of the two summands is their differing graded rank from step 3.2. [F3, F6, step 3.2]

5.1 Conclusion: for $n=2$ the invariant ring is $R^s=\mathbb Q[e_1,e_2]$ with the homogeneous $R^s$-basis $\{1,\alpha\}$ of $R$ and $\alpha^2=e_1^2-4e_2$ (claim 1, step 1.1); the two rank-one exact sequences of claim 3 hold with the explicit maps and kernels of steps 2.1 and 3.1; and the square splits through the explicit middle-slot idempotents $e_\pm$ of steps 2.2 and 3.2 into the summands $B_s\{-1\}\oplus B_s\{1\}$ identified in step 4.1, that is into $B_s(1)\oplus B_s(-1)$ in the external shift, with the two summands of different graded rank. Every object and map used is an explicit finite free module with a displayed homogeneous basis, so no choice principle is used. ∎ [F6, step 1.1, step 3.1, step 4.1]
