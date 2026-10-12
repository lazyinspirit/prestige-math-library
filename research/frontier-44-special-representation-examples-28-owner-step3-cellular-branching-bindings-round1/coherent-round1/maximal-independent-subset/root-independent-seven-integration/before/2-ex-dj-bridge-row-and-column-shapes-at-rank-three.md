---
id: ex-dj-bridge-row-and-column-shapes-at-rank-three
kind: example
title: "The row and column Specht conventions in rank three"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 27-36): the rank-one row modules and the exact normalizations of the one-dimensional cells for the shapes (3) and (1,1,1) at n=3."
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978; author-hosted scan"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "Ordinary trivial and sign modules for S_3, the q=1 specialization of this computation."
---

## Example

Let $H=H_{A,q}(S_3)$, $A=\mathbb Z[q^{\pm1}]$, and put
$p_3(q)=(1+q)(1+q+q^2)$. All four modules
$P((3)),P((1^3)),C_{\mathrm M}((3)),C_{\mathrm M}((1^3))$ have rank $1$. On
$P((3))$ and $C_{\mathrm M}((3))$ both generators act by $q$; on $P((1^3))$
and $C_{\mathrm M}((1^3))$ both act by $-1$. In the canonical generators
$x_{(3)}$, $y_{(3)}$, $c_{(3)}$, $c_{(1^3)}$ the respective self-form values
are $1$, $q^{-3}p_3(q)$, $p_3(q)$, $1$. Thus
$\Phi_{(3)}(x_{(3)})=c_{(1^3)}$ has exact form multiplier $u_{(3)}=1$, whereas
$\Phi_{(1^3)}(y_{(3)})=c_{(3)}$ has $u_{(1^3)}=q^3$. In both targets the action
is twisted by $\theta$, so the two module identities match. At $q=1$ over
$\mathbb Q$ the respective form values are $1,6,6,1$, and $\theta$ exchanges
trivial and sign. These identities specialize over every commutative ring with
a unit parameter. No choice principle is used.

## Facts & Assumptions

**Given:** The type-$A$ Hecke algebra $H$ of $S_3$ over $A=\mathbb Z[q^{\pm1}]$
with generators $T_1,T_2$, the shapes $(3)$ and $(1^3)=(3)'$, their row and
polytabloid modules and Murphy cells, the sign automorphism $\theta$ with
$\theta(T_i)=(q-1)-T_i$, and the comparison theorem and its corollary
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]],
[[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]].

[F1] $x_{(3)}=\sum_{w\in S_3}T_w$ spans $P((3))=x_{(3)}H$ and
$x_{(3)}T_i=q\,x_{(3)}$ for $i=1,2$; the distinguished basis of $M((3))$ is
$\{x_{(3)}\}$ with $\beta(x_{(3)},x_{(3)})=1$; the Murphy cell
$C_{\mathrm M}((3))$ has one basis class $c_{(3)}=x_{(3)}+I^{\rhd(3)}$ and
$G_{(3)}(c_{(3)},c_{(3)})=P_{(3)}(q)=p_3(q)$
([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).

[F2] $x_{(1^3)}=1$, $y_{(3)}=\sum_{w\in S_3}(-q)^{-\ell(w)}T_w$ spans
$P((1^3))=y_{(3)}H$ and $y_{(3)}T_i=-y_{(3)}$ for $i=1,2$; the distinguished
basis of $M((1^3))$ is the standard basis $\{T_w\}$ and
$\beta(y_{(3)},y_{(3)})=q^{-3}p_3(q)$; the Murphy cell
$C_{\mathrm M}((1^3))$ has one basis class $c_{(1^3)}=1+I^{\rhd(1^3)}$ with
$G_{(1^3)}(c_{(1^3)},c_{(1^3)})=1$ and $T_i$ acting by $-1$
([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]],
[[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]).

[F3] The comparison theorem gives base-change compatible isomorphisms
$\Phi_\lambda\colon P(\lambda)\to C_{\mathrm M}(\lambda')^\theta$ with
$G_{\lambda'}^\theta(\Phi_\lambda x,\Phi_\lambda y)=u_\lambda(q)\beta_{P(\lambda)}(x,y)$
and $u_\lambda(q)=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}$, where the
twisted action is $m\cdot h=m\theta(h)$
([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).

[F4] For a right $H$-module $M$ and a unit $u$, a form identity
$G(Mx,My)=u\beta(x,y)$ implies that the module actions of $H$ are intertwined
along the same isomorphism; at $q=1$ over $\mathbb Q$ the specialization is
the group algebra $\mathbb Q[S_3]$ and $\theta$ is the sign automorphism
([[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]).



## Verification

**Proof technique:** direct.

1.1 **Shape (3).** For the one-row shape, $x_{(3)}=\sum_{w\in S_3}T_w$ and right multiplication by $T_i$ permutes the sum, with the scalar rule $x_{(3)}T_i=q\,x_{(3)}$ because every $T_wT_i$ recombines into $q$ times the full sum; since $z_{(3)}=x_{(3)}T_{w_{(3)}}y_{(1^3)}=x_{(3)}$ (here $w_{(3)}=1$ and $y_{(1^3)}=1$) the module $P((3))$ is the free rank-one module on $x_{(3)}$ with action $q$. Squaring gives $x_{(3)}^2=\sum_{v,w}T_vT_w=\sum_vT_vx_{(3)}=\bigl(\sum_vq^{\ell(v)}\bigr)x_{(3)}=p_3(q)x_{(3)}$, because the length distribution in $S_3$ is $(1,2,2,1)$ and $1+2q+2q^2+q^3=(1+q)(1+q+q^2)$; hence the Murphy cell has form value $G_{(3)}(c_{(3)},c_{(3)})=p_3(q)$ and action $q$, and $\beta(x_{(3)},x_{(3)})=1$ by [F1]. [F1, algebra]

1.2 **Shape (1^3).** For the one-column shape, $x_{(1^3)}=1$ and $P((1^3))=y_{(3)}H$ with $y_{(3)}=\sum_{w\in S_3}(-q)^{-\ell(w)}T_w$. The pair argument $y_{(3)}T_i=\sum_{u}(-q)^{-\ell(u)}T_{us_i}$ over the two cosets of $\langle s_i\rangle$ gives $y_{(3)}T_i=-y_{(3)}$ for $i=1,2$, the sign representation of the rank-one module. The distinguished basis of $M((1^3))$ is the standard basis and $\beta$ is diagonal with entries $q^{\ell(w)}$, so $\beta(y_{(3)},y_{(3)})=\sum_wq^{-2\ell(w)}q^{\ell(w)}=\sum_wq^{-\ell(w)}=q^{-3}p_3(q)$, the last equality by $w\mapsto w_0w$. Modulo the higher ideal $I^{\rhd(1^3)}$, which contains $1+T_i$ because $1+T_i=x_{(2,1)}$ is a Murphy element of shape $(2,1)$, the class $c_{(1^3)}$ satisfies $T_i=-1$ and $G_{(1^3)}(c_{(1^3)},c_{(1^3)})=P_{(1^3)}(q)=1$ by [F2]. [F2, algebra]

2.1 **The comparison maps.** By [F3] applied to $\lambda=(3)$, where $\lambda'=(1^3)$ and $\ell(w_0(S_{(1^3)}))=\ell(w_{(3)})=0$, the isomorphism $\Phi_{(3)}$ has unit $u_{(3)}=1$ and the identity $G^\theta_{(1^3)}(\Phi_{(3)}x_{(3)},\Phi_{(3)}x_{(3)})=\beta(x_{(3)},x_{(3)})=1$ is consistent because both sides are the value of the respective rank-one forms; explicitly $\Phi_{(3)}(x_{(3)})=c_{(1^3)}$ by [F3]. Applying it to $\lambda=(1^3)$, where $\lambda'=(3)$ and $\ell(w_0(S_{(3)}))=3$, $\ell(w_{(1^3)})=0$, gives $u_{(1^3)}=q^3$, and the identity $G_{(3)}(c_{(3)},c_{(3)})=q^3\,q^{-3}p_3(q)=p_3(q)$ is consistent; explicitly $\Phi_{(1^3)}(y_{(3)})=c_{(3)}$. In the target $C_{\mathrm M}((1^3))^\theta$ the generator acts by the ordinary action of $\theta(T_i)=(q-1)-T_i=-T_i$, hence by $+1=q$ at $q=1$; in the target $C_{\mathrm M}((3))^\theta$ it acts by the ordinary action of $(q-1)-T_i$ on the class acting by $q$, hence by $(q-1)-q=-1$; these match the source actions $q$ on $P((3))$ and $-1$ on $P((1^3))$ computed in steps 1.1 and 1.2. [step 1.1, step 1.2, F3, algebra]

3.1 **Specialization and conclusion.** At $q=1$ over $\mathbb Q$ the four form values become $1$, $1^{-3}p_3(1)=6$, $6$ and $1$, and $\theta$ is the sign automorphism exchanging the trivial and sign modules, in agreement with [F4]; the module actions match as in step 2.1. Every displayed identity is an identity in $A=\mathbb Z[q^{\pm1}]$ between Laurent polynomials, so all of them specialize along any ring map $A\to R$ with $q\mapsto q\in R^\times$. Only the rank-one computations, the trace-free form evaluations and the comparison theorem were used; no choice principle is used. [step 1.1, step 1.2, step 2.1, F1, F2, F3, F4] ∎

