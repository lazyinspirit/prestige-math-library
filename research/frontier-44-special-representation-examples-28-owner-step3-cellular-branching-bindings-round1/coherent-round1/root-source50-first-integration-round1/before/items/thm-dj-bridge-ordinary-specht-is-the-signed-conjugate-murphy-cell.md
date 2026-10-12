---
id: thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell
kind: theorem
title: "Ordinary Specht modules are the signed conjugate Murphy cells"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual, lem-dj-bridge-integral-murphy-and-polytabloid-straightening, lem-dj-bridge-theta-transport-of-the-cellular-structure, lem-dj-bridge-sign-automorphism-and-star-dual, lem-dj-bridge-murphy-cellular-basis-and-cell-form, lem-dj-bridge-permutation-form-invariance-and-restriction, def-dj-bridge-row-column-permutation-modules-and-polytabloids, lem-dj-bridge-parabolic-double-coset-annihilation, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple, def-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 27-36): the row and Specht modules, the Murphy cellular basis and its form, and the Warning after Corollary 3.19 (printed p. 25), which records that the comparison of the ordinary Specht module with the conjugate Murphy cell needs the sign twist; the proof below computes the exact unit."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1 (survey), 66 PDF pages"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, Remark 5.5 (PDF p. 24): the conjugate-sign dictionary for simple modules, used only to confirm the position of the sign twist; no graded statement is imported."
    - title: "R. Dipper, G. D. James, Representations of Hecke algebras of general linear groups, Proc. London Math. Soc. (3) 52 (1986) 20-52, DOI 10.1112/plms/s3-52.1.20"
      url: "https://doi.org/10.1112/plms/s3-52.1.20"
      locator: "Historical target of the conjugate comparison. The article was not accessible (Wiley 403, recorded in the batch-50 coverage), so no clause rests on its text."
---

## Statement

Let $R$ be a commutative ring, $q\in R^\times$ and $\lambda\vdash n$, and write
$\mu=\lambda'$, $L=\ell(w_\lambda)$ and $N=\ell(w_0(S_{\lambda'}))$. Let
$P(\lambda)=z_\lambda H$ with its DJ form $\beta_{P(\lambda)}$, the cell module
$C_{\mathrm M}(\lambda')$ with its Murphy form $G_{\lambda'}$, and the sign
automorphism $\theta$ be as in
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]],
[[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] and
[[lem-dj-bridge-sign-automorphism-and-star-dual]], and let
$C_{\mathrm M}(\lambda')^\theta$ be the $\theta$-twisted cell module of
[[lem-dj-bridge-theta-transport-of-the-cellular-structure]]. Then:

1. There is a base-change compatible isomorphism of right $H$-modules
   $$\Phi_\lambda\colon P(\lambda)\longrightarrow C_{\mathrm M}(\lambda')^\theta,\qquad \Phi_\lambda(z_\lambda)=m_0,\quad \Phi_\lambda(z_\lambda h)=m_0\theta(h)\ \ (h\in H),$$
   where $m_0$ is the class of $x_{\lambda'}$ in $C_{\mathrm M}(\lambda')$ and
   the right side is computed with the ordinary action on $C_{\mathrm M}(\lambda')$
   and read in the twist; in particular
   $\Phi_\lambda(e_t)=m_0\theta(T_{d_{\lambda'}(t)})$ for
   $t\in\operatorname{Std}(\lambda')$. Moreover
   $\Phi_\lambda^{-1}(m)=q^{-N}x_\lambda T_{w_\lambda}\theta(m)$.

2. With $G_{\lambda'}^\theta$ the transported form of
   [[lem-dj-bridge-theta-transport-of-the-cellular-structure]] and
   $u_\lambda(q):=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}\in A^\times$,
   $$G_{\lambda'}^\theta(\Phi_\lambda x,\Phi_\lambda y)=u_\lambda(q)\,\beta_{P(\lambda)}(x,y)\qquad(x,y\in P(\lambda)),$$
   over every commutative $R$ with $q\in R^\times$. No unnamed scalar and no
   potentially vanishing scalar occurs: $u_\lambda$ is the explicit unit
   $q^{N-L}$ in the fixed normalizations of this page.

3. Consequently $\Phi_\lambda$ maps the radical of $\beta_{P(\lambda)}$ onto
   the radical of $G_{\lambda'}^\theta$, the induced map between the quotients
   is an isomorphism, and the DJ head corresponds to the twisted Murphy head,
   $D^{\lambda}_{\mathrm{DJ}}\cong(D^{\lambda'}_{\mathrm M})^\theta$,
   including the zero-quotient case. Over a PID with a chosen prime, the
   unit-scaled form identity preserves all divisibility submodules and their
   reductions. One also obtains
   $P(\lambda')\cong P(\lambda)^{\circ,\theta}$ with the exact position of the
   dual and the twist, separating same-shape duality from conjugate-sign
   transport. No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, a partition $\lambda\vdash n$
with conjugate $\mu=\lambda'$, the Hecke algebra $H=H_{R,q}(S_n)$, the modules
$M(\lambda)\supseteq P(\lambda)=z_\lambda H$ with the distinguished and
polytabloid bases, the permutation form $\beta$ and its restriction
$\beta_{P(\lambda)}$, the cell module $C_{\mathrm M}(\lambda')$ with basis
$\{m_t\}$ and Murphy form $G_{\lambda'}$, and the sign automorphism $\theta$.

[F1] $\theta$ is an involutive automorphism commuting with $*$, with
$\theta(x_\rho)=q^{\ell(w_0(S_\rho))}y_\rho$, $\theta(T_i)=(q-1)-T_i$, and for
a right $H$-module $M$ the twist $M^\theta$ has action $m\cdot h=m\theta(h)$;
$(M^\theta)^\circ=(M^\circ)^\theta$ and $(-)^\theta$ is exact and preserves
composition multiplicities
([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F2] The map $m\mapsto q^{-N}x_\lambda T_{w_\lambda}\theta(m)$ on
$C_{\mathrm M}(\lambda')^\theta$ is a well-defined, surjective $H$-module map
onto $P(\lambda)$ with value $z_\lambda$ at $m_0$; this is proved inside
[[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]], where
$P(\lambda)$ is also shown to be free on
$\{e_t=z_\lambda T_{d_{\lambda'}(t)}:t\in\operatorname{Std}(\lambda')\}$ and a
split direct summand of $M(\lambda)$; moreover
$z_\lambda=\sum_{u\in S_{\lambda'}}(-q)^{-\ell(u)}b_{t_\lambda\cdot u}$ with
$b_{r}=x_\lambda T_{d_\lambda(r)}$ and
$\ell(w_\lambda u)=\ell(w_\lambda)+\ell(u)$ for $u\in S_{\lambda'}$.

[F3] $\beta(b_r,b_v)=\delta_{r,v}q^{\ell(d_\lambda(r))}$, $\beta$ is
$H$-contravariant, and $\tau(a^*b)=\beta(a,b)$ for $a,b\in M(\lambda)$ where
$\tau$ is the coefficient of $T_1$
([[lem-dj-bridge-permutation-form-invariance-and-restriction]],
[[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] $C_{\mathrm M}(\lambda')$ is free of rank $f^{\lambda'}$ with basis
$\{m_t\}$, its form $G_{\lambda'}$ satisfies
$G_{\lambda'}(m_0,m_0)=P_{\lambda'}(q)=\sum_{u\in S_{\lambda'}}q^{\ell(u)}$
and the cell law, and $I^{\rhd\lambda'}$ is spanned by the Murphy elements of
shapes $\rhd\lambda'$
([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F5] The transported form $G^\theta_{\lambda'}$ of
[[lem-dj-bridge-theta-transport-of-the-cellular-structure]] is defined on the
transported basis by $G^\theta_{\lambda'}(\theta x,\theta y)=G_{\lambda'}(x,y)$;
read on the underlying module of the twist it is
$G^\theta_{\lambda'}(x,y)=G_{\lambda'}(x,y)$, it is symmetric and associative
for the twisted action, and $\theta$ is an isometry onto the transported cell.

[F6] $J(A)$ is nilpotent and $A/J(A)$ is semisimple for a finite-dimensional
algebra over a field
([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[F7] The kernel of the quotient $M(\lambda')\to C_{\mathrm M}(\lambda')$ is
$P(\lambda')^\perp$, and $C_{\mathrm M}(\lambda')\cong P(\lambda')^\circ$
under the same-shape pairing
([[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]]).

[F8] Base change: all structure constants lie in $A=\mathbb Z[v^{\pm1}]$ and
specialize along $v\mapsto q$
([[def-generic-type-a-hecke-algebra]],
[[lem-dj-bridge-sign-automorphism-and-star-dual]]).



## Proof

**Proof technique:** direct.

1.1 **The comparison map.** By [F2] the map $F\colon C_{\mathrm M}(\lambda')^\theta\to P(\lambda)$, $F(m):=q^{-N}x_\lambda T_{w_\lambda}\theta(m)$, is a well-defined surjective $H$-module map. Both sides are free of finite rank $f^{\lambda'}=f^\lambda$ by [F2] and [F4], so choosing preimages of the basis $\{e_t\}$ gives a right inverse of the square matrix of $F$; its determinant is a unit of $R$ and $F$ is an isomorphism. Put $\Phi_\lambda:=F^{-1}$. Then $\Phi_\lambda(z_\lambda)=m_0$ and $\Phi_\lambda(z_\lambda h)=m_0\theta(h)$ for all $h\in H$, since $F(m_0\theta(h))=q^{-N}x_\lambda T_{w_\lambda}\theta(m_0\theta(h))=q^{-N}x_\lambda T_{w_\lambda}\theta(m_0)h=z_\lambda h$; in particular $\Phi_\lambda(e_t)=m_0\theta(T_{d_{\lambda'}(t)})$ for $t\in\operatorname{Std}(\lambda')$, and $\Phi_\lambda^{-1}(m)=q^{-N}x_\lambda T_{w_\lambda}\theta(m)$. [F2, F4, algebra]

1.2 **Generic semisimplicity and proportionality.** Work first over the Laurent domain $A=\mathbb Z[v^{\pm1}]$ and its fraction field $K=\mathbb Q(q)$. The regular trace form $(a,b)\mapsto\operatorname{Tr}(L_{ab})$ on $H_K=K\otimes_AH_v(n)$ has Gram matrix in the standard basis $\{\operatorname{Tr}(T_uT_v)\}_{u,v}$; its determinant is a Laurent polynomial whose value at $q=1$ is the determinant of $n!$ times the permutation matrix $u\leftrightarrow u^{-1}$ in the group algebra $\mathbb Q[S_n]$, hence nonzero. Therefore the regular trace form is nondegenerate over $K$; since $L_{ab}$ is nilpotent for $a\in J(H_K)$ and every $b$, every such trace vanishes, so $J(H_K)=0$ and $H_K$ is semisimple by [F6]. In the semisimple algebra $H_K$ the layer $C_{\mathrm M}(\lambda')\otimes C_{\mathrm M}(\lambda')$ with multiplication $(a\otimes b)(c\otimes d)=G_{\lambda'}(b,c)a\otimes d$ is a nonzero subquotient of $H_K$, hence semisimple; if $G_{\lambda'}$ were degenerate over $K$, then $(\operatorname{rad}G_{\lambda'})\otimes C_{\mathrm M}(\lambda')$ would be a nonzero square-zero two-sided ideal of that layer, which is impossible in a semisimple algebra. Thus $G_{\lambda'}$ is nondegenerate over $K$, the same layer identification $C\otimes C\cong\operatorname{End}_K(C)$ shows that $C=C_{\mathrm M}(\lambda')_K$ is a simple $H_K$-module, and $\operatorname{End}_{H_K}(C)=K$ by Schur. Consequently two $H_K$-contravariant $K$-bilinear forms on $C$, one of them nonzero, are proportional: if $G_1=G_{\lambda'}$ is the nonzero one and $G_2$ is any other, the relation $G_1(ux,y)=G_2(x,y)$ defines $u\in\operatorname{End}_K(C)$, and contravariance of both forms gives $G_1(u(xh)-u(x)h,y)=0$ for all $x,h,y$, so $u\in\operatorname{End}_{H_K}(C)=K$ and $G_2=uG_1$. [F4, F6, algebra]

2.1 **The two values at the generator.** By [F2] one has $z_\lambda=\sum_{u\in S_{\lambda'}}(-q)^{-\ell(u)}b_{t_\lambda\cdot u}$, the elements $t_\lambda\cdot u$ are row standard, and $\ell(d_\lambda(t_\lambda\cdot u))=\ell(w_\lambda u)=L+\ell(u)$. Hence by [F3] $\beta(z_\lambda,z_\lambda)=\sum_uq^{-2\ell(u)}q^{L+\ell(u)}=q^L\sum_uq^{-\ell(u)}=q^{L-N}P_{\lambda'}(q)$, using $u\mapsto w_0(S_{\lambda'})u$ for the last equality and [F4] for $G_{\lambda'}(m_0,m_0)=P_{\lambda'}(q)$. So with $u_\lambda(q):=q^{N-L}$ one has $G_{\lambda'}^\theta(\Phi_\lambda z_\lambda,\Phi_\lambda z_\lambda)=G_{\lambda'}(m_0,m_0)=P_{\lambda'}(q)=q^{N-L}\beta(z_\lambda,z_\lambda)=u_\lambda(q)\beta_{P(\lambda)}(z_\lambda,z_\lambda)$ by [F5]. [step 1.1, F2, F3, F4, F5, algebra]

3.1 **The form identity, radicals and the conjugate chain.** The pullback of $\beta_{P(\lambda)}$ along $\Phi_\lambda$ is an $H_K$-contravariant form on $C_{\mathrm M}(\lambda')_K$, and so is $G_{\lambda'}^\theta$ by [F5]; the latter is nonzero because $G_{\lambda'}^\theta(m_0,m_0)=P_{\lambda'}(q)\ne0$. By step 1.2 they are proportional, say $G_{\lambda'}^\theta(\Phi_\lambda x,\Phi_\lambda y)=\lambda\,\beta_{P(\lambda)}(x,y)$; evaluating at $x=y=z_\lambda$ and dividing by the nonzero element $P_{\lambda'}(q)$ in the field $K$ gives $\lambda=u_\lambda(q)=q^{N-L}$ by step 2.1. Both sides of the identity have entries in $A$, and $A\to K$ is injective, so the identity holds in $A$ and, by [F8], after every base change to $R$. Since $\Phi_\lambda$ is an isomorphism and $u_\lambda$ is a unit, $\Phi_\lambda$ carries the radical of $\beta_{P(\lambda)}$ onto the radical of $G_{\lambda'}^\theta$; passing to the quotients gives $D^{\lambda}_{\mathrm{DJ}}\cong(D^{\lambda'}_{\mathrm M})^\theta$, including the case of a zero quotient, and over a PID the submodules defined by the divisibility of the form values correspond because the identifying isomorphism scales the forms by a unit. Applying the identity with $\lambda$ replaced by $\lambda'$ gives $P(\lambda')\cong C_{\mathrm M}(\lambda)^\theta$, and combining with [F7] and $(M^\theta)^\circ=(M^\circ)^\theta$ from [F1] yields $P(\lambda')\cong P(\lambda)^{\circ,\theta}$. For $\lambda=\varnothing$ one has $L=N=0$, $\Phi_\lambda$ is the identity of the free rank-one module and $u_\lambda=1$. Only the presentation of $H$, the trace form, Jacobson nilpotence, the cellular structure of $H_K$, the trace pairing and the annihilation were used; no choice principle is used. [step 1.1, step 2.1, step 1.2, F1, F4, F5, F7, F8, algebra] ∎

