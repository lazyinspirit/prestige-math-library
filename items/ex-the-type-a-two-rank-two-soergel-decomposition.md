---
id: ex-the-type-a-two-rank-two-soergel-decomposition
kind: example
title: "The type $A_2$ rank-two Soergel decomposition"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-rank-two-type-a-soergel-bimodule-decompositions, def-the-rank-two-longest-type-a-soergel-bimodule, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-type-a-reflection-realization-and-polynomial-ring, thm-fundamental-theorem-of-symmetric-polynomials, def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Khovanov, Triply-graded Link Homology and Hochschild Homology of Soergel Bimodules, Proposition 4"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Elias–Williamson, Soergel Calculus, §1.4 and §§3.4–3.5, PDF pp. 8–9, 24–27"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
---

## Example

Take $n=3$ and $i=1$, so that $R=\mathbb Q[x_1,x_2,x_3]$, that $s=s_1$ and
$t=s_2$ are the two adjacent simple reflections, and that
$W_{1,2}=\langle s,t\rangle=S_3$ acts by permuting $x_1,x_2,x_3$. Put
$\alpha_s=x_1-x_2$, $\alpha_t=x_2-x_3$, $\delta_s=\alpha_s/2$,
$\delta_t=\alpha_t/2$, and let $u_s=1\otimes1$, $w_s=1\otimes\delta_s$ be the
rank-one basis of $B_s$, with $u_t,w_t$ the corresponding basis of $B_t$. Then:

1. **The two Demazure values that carry the rank-two calculus.** For the
   adjacent pair, $s(\alpha_t)=x_1-x_3=\alpha_t+\alpha_s$ and
   $t(\alpha_s)=x_1-x_3=\alpha_s+\alpha_t$, so
   $$\partial_s^\beta(\alpha_t)=\frac{\alpha_t-s(\alpha_t)}{\alpha_s}=-1,\qquad \partial_t^\beta(\alpha_s)=\frac{\alpha_s-t(\alpha_s)}{\alpha_t}=-1,$$
   while
   $\partial_s^\beta(\alpha_s)=2$, $\partial_t^\beta(\alpha_t)=2$ and
   $\partial_s^\beta(\delta_s)=1$, $\partial_t^\beta(\delta_t)=1$. All roots and Demazure
   operators in this example are in the coordinate normalization
   $\alpha_s=\beta_s=x_1-x_2$, $\alpha_t=\beta_t=x_2-x_3$ of
   [[def-type-a-reflection-realization-and-polynomial-ring]], so the off-diagonal
   values just computed are $\partial_s^\beta(\beta_t)=\partial_t^\beta(\beta_s)=-1$;
   in the balanced normalization $\partial_r^{\mathrm{bal}}=\varepsilon_r\partial_r^\beta$
   and each root insertion and Demazure contraction of color $r$ gains the
   factor $\varepsilon_r$, while multiplication and unit insertion are unchanged.
   As $\varepsilon_s\varepsilon_t=-1$, the zig-zag changes from $-\operatorname{id}$
   to $+\operatorname{id}$; the balanced idempotent uses the corresponding positive
   composite and equals the coordinate idempotent. The two graphs
   $Gr(s),Gr(t)$ of the adjacent reflections meet in codimension two: $s^{-1}t=st$
   is a 3-cycle whose fixed space is the line $x_1=x_2=x_3$, of dimension one in
   the ambient space of dimension three.
2. **The four maps on the rank-one bases.** With $\mu_s:B_s\to R$,
   $\mu_s^a:R\to B_s$, $\kappa_s:B_s\otimes_RB_s\to B_s$ and
   $\kappa_s^a:B_s\to B_s\otimes_RB_s$ the maps
   $$\mu_s(p\otimes q)=pq,\qquad \mu_s^a(1)=\alpha_s\otimes1+1\otimes\alpha_s,\qquad \kappa_s\text{ contracts the middle slot by }\tfrac12\partial_s^\beta,\qquad \kappa_s^a(p\otimes q)=p\otimes1\otimes q ,$$
   and $\mu_t,\mu_t^a$ the same constructions for $t$; that is, $\kappa_s$ sends
   $p\otimes q\otimes h$ to $\tfrac12p\,\partial_s^\beta(q)\otimes h$ and
   $\kappa_s^a$ inserts the unit $1\in R^s$ in the middle slot
   $\bigl(\kappa_s^a(1\otimes1)=1\otimes1\otimes1\bigr)$.   Under $(a\otimes b)\otimes(c\otimes d)\mapsto a\otimes bc\otimes d$,
   the evaluations on the four left-$R$ basis tensors of $B_s\otimes_RB_s$ are
   $$\kappa_s(u_s\otimes u_s)=0,\quad \kappa_s(u_s\otimes w_s)=0,\quad \kappa_s(w_s\otimes u_s)=\tfrac12u_s,\quad \kappa_s(w_s\otimes w_s)=\tfrac12w_s.$$
   Moreover $\kappa_s^a(u_s)=u_s\otimes u_s$ and
   $\kappa_s^a(w_s)=u_s\otimes w_s$. The dot evaluations are
   $\mu_t(u_t)=1$, $\mu_t(w_t)=\delta_t$ and
   $\mu_t^a(1)=\alpha_tu_t+2w_t$, so
   $\mu_t\mu_t^a(1)=2\alpha_t$.
3. **The zig-zag identity.** Evaluating the composite
   $\kappa_s\circ\mu_t\circ\mu_t^a\circ\kappa_s^a$ on a general element
   $p\otimes q\in B_s$ gives, step by step,
   $$p\otimes1\otimes q\ \longmapsto\ p\otimes\alpha_t\otimes1\otimes q+p\otimes1\otimes\alpha_t\otimes q \ \longmapsto\ 2p\otimes\alpha_t\otimes q\ \longmapsto\ \tfrac12\cdot2\,p\,\partial_s^\beta(\alpha_t)\otimes q=-(p\otimes q),$$
   so $\kappa_s\circ\mu_t\circ\mu_t^a\circ\kappa_s^a=-\operatorname{id}_{B_s}$;
   this is the first of the two matrix identities, verified here on the basis
   $(u_s,w_s)$ by claim 1 and claim 2.
4. **The idempotent and the second identity.** With
   $e:=-\mu_t^a\circ\kappa_s^a\circ\kappa_s\circ\mu_t\in\operatorname{End}_{R\text{-}R}(B_s\otimes_RB_t\otimes_RB_s)$
   the identity of claim 3 gives
   $e^2=\mu_t^a\kappa_s^a\bigl(\kappa_s\mu_t\mu_t^a\kappa_s^a\bigr)\kappa_s\mu_t=e$,
   so $e$ is a degree-zero idempotent endomorphism; consequently
   $1-e$ is an idempotent orthogonal to $e$ and
   $$B_1\otimes_RB_2\otimes_RB_1=\operatorname{im}(e)\oplus\operatorname{im}(1-e),$$
   which is the second matrix identity together with the splitting it produces.
5. **The two decompositions and their rank count.** For $n=3$ the rank-two
   decomposition theorem applies to the pair $s,t$: the summand
   $\operatorname{im}(1-e)$ is isomorphic to $B_{1,2,1}=R\otimes_{R^{S_3}}R(3)$
   and $\operatorname{im}(e)$ to $B_1$, so
   $$B_1B_2B_1\cong B_{1,2,1}\oplus B_1,\qquad B_2B_1B_2\cong B_{1,2,1}\oplus B_2 ,$$
   the second decomposition being the $s\leftrightarrow t$ instance. The ranks
   match: $R$ is a free $R^{S_3}$-module on six generators of degrees
   $0,2,2,4,4,6$, so $B_{1,2,1}$ is free of graded dimension
   $d_{-3}+2d_{-1}+2d_1+d_3$ and $B_1$ of graded dimension $d_{-1}+d_1$ in the
   notation $R(a)_e=R_{e+a}$, while $B_1B_2B_1$ is free of graded dimension
   $(d_{-1}+d_1)^3$; and indeed
   $$(d_{-1}+d_1)^3-(d_{-1}+d_1)=d_{-3}+3d_{-1}+3d_1+d_3-(d_{-1}+d_1)=d_{-3}+2d_{-1}+2d_1+d_3 .$$

## Facts & Assumptions

**Given:** The ring $R=\mathbb Q[x_1,x_2,x_3]$ graded by $\deg x_i=2$, the adjacent simple reflections $s=s_1$, $t=s_2$ with coordinate roots $\alpha_s=x_1-x_2$, $\alpha_t=x_2-x_3$ and halves $\delta_s,\delta_t$, the coordinate Demazure operators $\partial_s^\beta,\partial_t^\beta$, the invariant rings $R^s,R^t,R^{S_3}$, and the bimodules $B_s,B_t,B_{1,2,1}$.

[F1] $R$ is a graded commutative $\mathbb Q$-algebra with $S_3$ acting by place permutation, $\alpha_s^\vee=\alpha_s$, $s(v)=v-\langle v,\alpha_s\rangle\alpha_s^\vee$ gives the transposition of $x_1,x_2$, and the Demazure operator $\partial_s^\beta(f)=(f-s(f))/\alpha_s$ is well defined with values in $R^s$, is $R^s$-linear and is surjective onto $R^s$ with $\partial_s^\beta(\alpha_s h)=2h$ for $h\in R^s$; moreover $R$ is free over $R^s$ with basis $\{1,\alpha_s\}$, every $f$ having the unique expression $f=g+\alpha_s h$, $g=\tfrac12(f+s(f))$, $h=\tfrac12\partial_s^\beta(f)$ ([[def-type-a-reflection-realization-and-polynomial-ring]]).

[F2] Substitution $T_k\mapsto e_k$ for $k=1,2,3$ is an isomorphism of $\mathbb Q$-algebras $\mathbb Q[T_1,T_2,T_3]\to\mathbb Q[x_1,x_2,x_3]^{S_3}$ onto the symmetric polynomials, so $R^{S_3}$ is a polynomial ring in the elementary symmetric polynomials of degrees $2,4,6$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[F3] $B_s=R\otimes_{R^s}R(1)$ is the balanced tensor product with left action $r'(r\otimes r'')=r'r\otimes r''$, right action $(r\otimes r'')r'=r\otimes r''r'$, shift $(B_s)_d=(R\otimes_{R^s}R)_{d+1}$ and $B_s\cong R(-1)\oplus R(1)$; the images $u_s=1\otimes1$ and $w_s=1\otimes\delta_s$ of degrees $-1$ and $+1$ form a graded left $R$-basis of $B_s$ ([[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F4] The rank-one calculus: $u_s=1\otimes1$ and $w_s=1\otimes\delta_s$ form a graded left $R$-basis of $B_s$ with right action $u_s\cdot g=g^+u_s+g^-w_s$ and $w_s\cdot g=\delta_s^2g^-u_s+g^+w_s$ for the decomposition $g=g^++\delta_sg^-$ with $g^\pm\in R^s$ and $g^+=\tfrac12(g+s(g))$, and the sub-bimodules $R(\delta_su_s\pm w_s)$ are $R(-1)$ and $R_s(-1)$; the analogous statements hold with $s$ replaced by $t$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F5] $B_s$ and $B_t$ are free of rank two on each side, and every Bott–Samelson product $B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ is finite free on each side, with left basis obtained by tensoring the two-element left bases of the factors and with degrees the sums of the factor degrees ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F6] $B_{1,2,1}=R\otimes_{R^{S_3}}R(3)$ for the parabolic $S_3=\langle s_1,s_2\rangle$ of the three coordinates $x_1,x_2,x_3$; it is a free graded $R$-module of rank six on each side with homogeneous basis degrees $2\ell(w)-3$, $w\in S_3$, and $R$ is free over $R^{S_3}$ with $R\cong\bigoplus_{w\in S_3}R^{S_3}(-2\ell(w))$, so that as a graded left $R$-module $B_{1,2,1}\cong R(-3)\oplus R(-1)^{\oplus2}\oplus R(1)^{\oplus2}\oplus R(3)$ ([[def-the-rank-two-longest-type-a-soergel-bimodule]]).

[F7] For adjacent $i,i+1$ and the bimodules $B_iB_{i+1}B_i=B_i\otimes_RB_{i+1}\otimes_RB_i$ there are degree-zero isomorphisms $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$ and $B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$ with no additional grading shift on any summand, and the proof produces an idempotent $e\in\operatorname{End}_{R\text{-}R}(B_iB_{i+1}B_i)$ with $\operatorname{im}(e)\cong B_i$ and $\operatorname{im}(1-e)\cong B_{i,i+1,i}$ through the four maps $\mu_t,\mu_t^a,\kappa_s,\kappa_s^a$ ([[thm-rank-two-type-a-soergel-bimodule-decompositions]]).

## Proof

1.1 The adjacent Demazure values: $s$ exchanges $x_1$ and $x_2$ and fixes $x_3$, so $s(\alpha_t)=s(x_2-x_3)=x_1-x_3=\alpha_t+\alpha_s$ and $\partial_s^\beta(\alpha_t)=(\alpha_t-\alpha_t-\alpha_s)/\alpha_s=-1$ by [F1]; symmetrically $t$ exchanges $x_2$ and $x_3$ and fixes $x_1$, so $t(\alpha_s)=t(x_1-x_2)=x_1-x_3=\alpha_s+\alpha_t$ and $\partial_t^\beta(\alpha_s)=(\alpha_s-\alpha_s-\alpha_t)/\alpha_t=-1$, while $\partial_s^\beta(\alpha_s)=2$ and $\partial_t^\beta(\alpha_t)=2$ by [F1] with $h=1$, so $\partial_s^\beta(\delta_s)=\partial_t^\beta(\delta_t)=1$. [F1, F3]

2.1 The evaluations of the four maps: the four tensors $u_s\otimes u_s$, $u_s\otimes w_s$, $w_s\otimes u_s$, $w_s\otimes w_s$ correspond respectively to $1\otimes1\otimes1$, $1\otimes1\otimes\delta_s$, $1\otimes\delta_s\otimes1$, $1\otimes\delta_s\otimes\delta_s$. Contracting their middle polynomial by $\tfrac12\partial_s^\beta$ gives $0,0,\tfrac12u_s,\tfrac12w_s$, using step 1.1. Unit insertion sends $u_s,w_s$ to $u_s\otimes u_s,u_s\otimes w_s$. Multiplication gives $\mu_t(u_t)=1$, $\mu_t(w_t)=\delta_t$, so $\mu_t(\alpha_tu_t+2w_t)=2\alpha_t$. These are exactly the well-typed evaluations of claim 2. [F3, F4, F7, step 1.1]

3.1 The zig-zag: applying the four maps in the order $\kappa_s^a,\mu_t^a,\mu_t,\kappa_s$ to $p\otimes q\in B_s$ produces $p\otimes1\otimes q$, then $p\otimes\alpha_t\otimes1\otimes q+p\otimes1\otimes\alpha_t\otimes q$, then $2p\otimes\alpha_t\otimes q$ by the middle-slot multiplication $\mu_t$, and finally, applying $\kappa_s$ with its factor $\tfrac12$, the element $2\cdot\tfrac12\,p\,\partial_s^\beta(\alpha_t)\otimes q=p\,\partial_s^\beta(\alpha_t)\otimes q=-(p\otimes q)$ by step 1.1; since $p\otimes q$ was arbitrary in the free left $R$-module $B_s$, $\kappa_s\circ\mu_t\circ\mu_t^a\circ\kappa_s^a=-\operatorname{id}_{B_s}$. This is the first matrix identity, checked on the basis $(u_s,w_s)$ through the evaluations of step 2.1. [F3, F5, step 1.1, step 2.1]

4.1 The idempotent: following the construction of [F7], put $e:=-\mu_t^a\circ\kappa_s^a\circ\kappa_s\circ\mu_t$ on $B_s\otimes_RB_t\otimes_RB_s$; then $e^2=\mu_t^a\kappa_s^a(\kappa_s\mu_t\mu_t^a\kappa_s^a)\kappa_s\mu_t=\mu_t^a\kappa_s^a(-\operatorname{id})\kappa_s\mu_t=e$ by step 3.1, so $e$ is an idempotent, and it has degree zero because the four maps, ordered as $\mu_t,\mu_t^a,\kappa_s,\kappa_s^a$, are homogeneous of degrees $+1,+1,-1,-1$: the $\mu$ maps have degree $+1$ and the $\kappa$ maps have degree $-1$ of [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]], so their degrees sum to zero by step 2.1; hence $1-e$ is an idempotent orthogonal to $e$ and the graded bimodule of endomorphisms splits $B_sB_tB_s=\operatorname{im}(e)\oplus\operatorname{im}(1-e)$. This is the second matrix identity and the splitting it produces. [F4, F5, F7, step 3.1]

5.1 The summands: by [F7] applied to the adjacent pair $s,t$ the summand $\operatorname{im}(1-e)$ is isomorphic to $B_{1,2,1}=R\otimes_{R^{S_3}}R(3)$ and $\operatorname{im}(e)$ to $B_s$, with degree-zero identifications and no extra shift, because the comparison maps of that theorem are the composites of the four maps used here; hence $B_1B_2B_1\cong B_{1,2,1}\oplus B_1$, and applying the same statement with $s$ and $t$ interchanged gives $B_2B_1B_2\cong B_{1,2,1}\oplus B_2$, the parabolic $W_{1,2}$ being symmetric in $s$ and $t$. [F6, F7, step 4.1]

6.1 The rank count: by [F5] $B_1B_2B_1$ is free as a left $R$-module with the tensor basis of the left bases $(u_s,w_s)$, $(u_t,w_t)$, $(u_s,w_s)$, so its graded dimension is $(d_{-1}+d_1)^3$ in the notation $R(a)_e=R_{e+a}$ for the graded dimension of a shift of $R$; by [F2] the invariant ring is the polynomial ring $\mathbb Q[e_1,e_2,e_3]$ on generators of degrees $2,4,6$, and by [F6] $B_{1,2,1}$ is free of graded dimension $d_{-3}+2d_{-1}+2d_1+d_3$, using the six generators of $R$ over $R^{S_3}$ in degrees $0,2,2,4,4,6$ shifted by $-3$; and $B_1$ is free of graded dimension $d_{-1}+d_1$; the identity $(d_{-1}+d_1)^3-(d_{-1}+d_1)=d_{-3}+2d_{-1}+2d_1+d_3$ holds by expanding $(d_{-1}+d_1)^3=d_{-3}+3d_{-1}+3d_1+d_3$, so the ranks of the two sides of step 5.1 agree in every degree, as in the dimension count of [F7]. [F2, F5, F6, F7, step 5.1]

7.1 Conclusion: for $n=3$ the adjacent pair $s=s_1$, $t=s_2$ has $\partial_s^\beta(\alpha_t)=\partial_t^\beta(\alpha_s)=-1$, the four rank-two maps take the explicit values of step 2.1 on the tensor basis, the two matrix identities hold by steps 3.1 and 4.1, and the rank-two decomposition theorem gives $B_1B_2B_1\cong B_{1,2,1}\oplus B_1$ and $B_2B_1B_2\cong B_{1,2,1}\oplus B_2$ with matching graded ranks as computed in step 6.1. All objects involved are finite free graded $R$-modules with displayed homogeneous bases, so no choice principle is used. ∎ [F6, F7, step 1.1, step 6.1]
