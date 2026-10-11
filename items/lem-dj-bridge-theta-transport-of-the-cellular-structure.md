---
id: lem-dj-bridge-theta-transport-of-the-cellular-structure
kind: lemma
title: "Theta transports the Murphy cellular structure to the signed cell modules"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form, def-dominance-order-on-partitions,
       def-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 22-27 (PDF pp. 28-33): the dominance ideals, the Murphy cellular basis and its cell form, and the Warning after Corollary 3.19 (printed p. 25) on the sign twist; the transport computation below is the local reconstruction of these statements under theta."
    - title: "Alexander S. Kleshchev, Andrew Mathas, Arun Ram, Universal graded Specht modules for cyclotomic Hecke algebras, author-hosted Sydney preprint, 44 PDF pages"
      url: "https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2011/kleshchev-8.pdf"
      locator: "Section 3.3, equation (3.14), PDF p. 8: the KLR sign isomorphism sends e(i) to e(-i), y_r to -y_r and psi_s to -psi_s. This is an analogy only; it does not state the ordinary Hecke-generator formula. For the latter see Kleshchev, arXiv:0909.4844, Section 11.5, PDF p. 54, T_r mapped to -T_r + xi - 1, also proved locally here."
---

## Statement

Let $R$ be a commutative ring, $q\in R^\times$, $\lambda\vdash n$, and let
$\theta$ be the involutive automorphism of
[[lem-dj-bridge-sign-automorphism-and-star-dual]]. Let $m_{st}$, the ideals
$I^{\unrhd\lambda}$, $I^{\rhd\lambda}$, the cell module
$C_{\mathrm M}(\lambda)$, its basis classes $m_t$ and the Murphy form
$G_\lambda$ be as in
[[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]. Then:

1. For standard $\lambda$-tableaux $s,t$ one has
   $\theta(m_{st})=\theta(T_{d(s)}^*)\,\theta(m_\lambda)\,\theta(T_{d(t)})$
   with $\theta(m_\lambda)=\theta(x_\lambda)=q^{\ell(w_0(S_\lambda))}y_\lambda$;
   the family $\{\theta(m^\mu_{st}):\mu\vdash n,\ s,t\in\operatorname{Std}(\mu)\}$
   is again an $R$-basis of $H$; the spans $\theta(I^{\unrhd\lambda})$ and
   $\theta(I^{\rhd\lambda})$ of the $\theta$-images of the corresponding basis
   elements are two-sided ideals of $H$, and the transported family is again a
   cellular basis with the same dominance poset, whose ideal filtration is the
   $\theta$-image of the original one. The image ideals are in general
   *different* subspaces from the originals: over $A=\mathbb Z[q^{\pm1}]$, already for $n=2$ and
   $\lambda=(2)$ one has $\theta(x_{(2)})=q-T_1\notin R(1+T_1)=I^{\unrhd(2)}$.
   The poset is preserved; the ideal subspaces are not, in general.

2. The assignment $m\mapsto\theta(m)$ on representatives is a well-defined
   isomorphism of right $H$-modules
   $$C_{\mathrm M}(\lambda)^\theta\longrightarrow \theta(M(\lambda))/\bigl(\theta(M(\lambda))\cap\theta(I^{\rhd\lambda})\bigr),$$
   whose target is the cell module of the transported basis; in particular
   $C_{\mathrm M}(\lambda)^\theta$ is free of rank $f^\lambda$ with basis
   $\{\theta(m_t):t\in\operatorname{Std}(\lambda)\}$ and satisfies the
   transported cell law with the same coefficients.

3. The transported form $G_\lambda^\theta$, defined on the transported basis
   by $G_\lambda^\theta(\theta x,\theta y):=G_\lambda(x,y)$ for
   $x,y\in C_{\mathrm M}(\lambda)$, i.e. read on the underlying module of
   $C_{\mathrm M}(\lambda)^\theta$ by $G_\lambda^\theta(x,y)=G_\lambda(x,y)$,
   is symmetric, is associative for the twisted action in the sense
   $G_\lambda^\theta(x\cdot h,y)=G_\lambda^\theta(x,y\cdot h^*)$, and has the
   same radical as $G_\lambda$; the map $x\mapsto\theta(x)$ is an isometry from
   the twisted cell module onto the cell module of the transported basis. All
   identities specialize under every base change.

4. In particular $C_{\mathrm M}(\lambda')^\theta$ is free of rank
   $f^{\lambda'}=f^\lambda$ and carries the transported form
   $G_{\lambda'}^\theta$. No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, $n\ge0$, a partition $\lambda\vdash n$, the Hecke algebra $H=H_{R,q}(S_n)$, the involution $\theta$ with $\theta(T_i)=(q-1)-T_i$, the Murphy basis elements $m_{st}=T_{d(s)}^*x_\lambda T_{d(t)}$, the dominance ideals $I^{\unrhd\lambda}$, $I^{\rhd\lambda}$, the cell module $C_{\mathrm M}(\lambda)=M(\lambda)/(M(\lambda)\cap I^{\rhd\lambda})$ and the Murphy form $G_\lambda$.

[F1] $\theta$ is an involutive $R$-algebra automorphism with $\theta(T_w)=(-q)^{\ell(w)}T_{w^{-1}}^{-1}$ that commutes with the star anti-involution $*$, satisfies $\theta(x_\rho)=q^{\ell(w_0(S_\rho))}y_\rho$ for every partition $\rho$ and is base-change compatible ([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F2] The Murphy basis $\{m^\mu_{st}\}$ is an $R$-basis of $H$ with $m_{st}^*=m_{ts}$, the spans $I^{\unrhd\rho}$ and $I^{\rhd\rho}$ are two-sided ideals, $C_{\mathrm M}(\rho)=M(\rho)/(M(\rho)\cap I^{\rhd\rho})$ is free with basis $m_t=x_\rho T_{d_\rho(t)}+I^{\rhd\rho}$, the cell law $m_{st}h\equiv\sum_v r_v m_{sv}\pmod{I^{\rhd\rho}}$ has coefficients $r_v$ independent of $s$, and the form $G_\rho$ satisfies $m_{us}m_{tv}\equiv G_\rho(m_s,m_t)m_{uv}\pmod{I^{\rhd\rho}}$, is symmetric and associative: $G_\rho(m_sh,m_t)=G_\rho(m_s,m_th^*)$ ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F3] Dominance is a partial order under which $I^{\rhd\rho}$ is spanned by the $m^\mu_{uv}$ with $\mu\rhd\rho$ ([[def-dominance-order-on-partitions]], [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] Base change: all formulas have coefficients in $\mathbb Z[q^{\pm1}]$ and specialize to any commutative $R$ with $q\in R^\times$ ([[def-generic-type-a-hecke-algebra]], [[lem-dj-bridge-sign-automorphism-and-star-dual]]).



## Proof

**Proof technique:** direct.

1.1 **The $\theta$-image of the Murphy basis.** Since $\theta$ is an $R$-algebra automorphism of $H$ and $\{m^\mu_{st}\}$ is an $R$-basis by [F2], the family $\{\theta(m^\mu_{st})\}$ is again an $R$-basis, and $\theta(m_{st})=\theta(T_{d(s)}^*)\theta(x_\lambda)\theta(T_{d(t)})$ by multiplicativity, with $\theta(x_\lambda)=q^{\ell(w_0(S_\lambda))}y_\lambda$ by [F1]; also $\theta(m_{st})^*=\theta(m_{st}^*)=\theta(m_{ts})$ because $\theta$ commutes with $*$. [F1, F2, algebra]

1.2 **The transported ideals and cellular structure.** For a partition $\rho$, the ideal $I^{\unrhd\rho}$ is spanned by the $m^\mu_{uv}$ with $\mu\unrhd\rho$ by [F3], so its image $\theta(I^{\unrhd\rho})$ is spanned by the corresponding $\theta(m^\mu_{uv})$; as the image of a two-sided ideal under an automorphism it is a two-sided ideal, and likewise for $\theta(I^{\rhd\rho})$. Moreover $\theta(I^{\unrhd\rho})\subseteq\theta(I^{\unrhd\rho'})$ whenever $\rho\unrhd\rho'$, and the transported cell law holds: for $h\in H$, $\theta(m_{st})\theta(h)=\theta(m_{st}h)\equiv\sum_v r_v\theta(m_{sv})\pmod{\theta(I^{\rhd\rho})}$ with the same coefficients $r_v$ as in [F2], independent of the first index. Hence $(\{\theta(m_{st})\},\unrhd)$ is a cellular basis with the same dominance poset and the $\theta$-image filtration. [F2, F3, algebra]

2.1 **The ideal subspaces move.** Take $n=2$ and $\lambda=(2)$. Here $x_{(2)}=1+T_1$ spans $I^{\unrhd(2)}=R(1+T_1)$ (the only Murphy shape dominating $(2)$ is $(2)$ itself, with a single standard tableau), while $\theta(x_{(2)})=1+\theta(T_1)=1+(q-1)-T_1=q-T_1$. A relation $q-T_1=c(1+T_1)$ with $c\in R$ would compare the coefficients of $1$ and of $T_1$ in the standard basis and force $c=q$ and $c=-1$, hence $q=-1$, which fails over the generic Laurent ring (and over any $R$ with $q\ne-1$). Conversely, at $q=-1$ one has $q-T_1=-(1+T_1)$, so these ideals coincide. Thus they differ in general, as claimed, without asserting that they differ at every parameter. By step 1.2 both are two-sided ideals with the same shape index, so the poset is preserved but the ideal subspaces are not. [F1, F2, step 1.2, algebra]

2.2 **The module isomorphism.** Put $K:=M(\lambda)\cap I^{\rhd\lambda}$, so that $C_{\mathrm M}(\lambda)=M(\lambda)/K$ by [F2]. The assignment $m+K\mapsto\theta(m)+\theta(K)$ on representatives $m\in M(\lambda)$ is well defined and bijective, since $\theta$ is a bijection carrying $K$ onto $\theta(M(\lambda))\cap\theta(I^{\rhd\lambda})$; it is $H$-linear because for $m\in M(\lambda)$ and $h\in H$ one has $\theta(m\theta(h))=\theta(m)\theta^2(h)=\theta(m)h$ using $\theta^2=\mathrm{id}$ by [F1]. Its target is by construction the quotient of the transported row by the transported higher ideal, i.e. the cell module of the transported basis of step 1.2. Hence $C_{\mathrm M}(\lambda)^\theta$ (the same underlying module with action $m\cdot h=m\theta(h)$) is isomorphic to that transported cell row, is free of rank $f^\lambda$ with basis $\{\theta(m_t)\}$ and satisfies the transported cell law. [step 1.2, F1, F2, algebra]

3.1 **The transported form.** Define $G_\lambda^\theta$ on the underlying module of $C_{\mathrm M}(\lambda)^\theta$ by $G_\lambda^\theta(x,y):=G_\lambda(x,y)$. Symmetry is immediate from [F2], and associativity for the twisted action follows from the ordinary associativity: $G_\lambda^\theta(x\cdot h,y)=G_\lambda(x\theta(h),y)=G_\lambda(x,y\theta(h)^*)=G_\lambda(x,y\theta(h^*))=G_\lambda^\theta(x,y\cdot h^*)$, using that $\theta$ commutes with $*$ and $\theta^2=\mathrm{id}$ by [F1]. Its radical is $\{x:G_\lambda(x,y)=0\ \forall y\}=\operatorname{rad}G_\lambda$, which is a submodule for the twisted action as well. Under the identification $x\mapsto\theta(x)$ of step 2.2 the form becomes $G_\lambda^\theta(\theta u,\theta v)=G_\lambda(u,v)$ for $u,v\in C_{\mathrm M}(\lambda)$, which is exactly the Murphy form of the transported basis, because multiplying two transported basis elements gives $\theta(m_{us})\theta(m_{tv})=\theta(m_{us}m_{tv})\equiv G_\lambda(m_s,m_t)\theta(m_{uv})\pmod{\theta(I^{\rhd\lambda})}$ by [F2]; thus $G_\lambda^\theta$ is the transported form of clause 3 and $x\mapsto\theta(x)$ is an isometry. [step 2.2, F1, F2, algebra]

4.1 **Base change and the conjugate clause.** Every element, ideal, quotient and form above is defined by formulas with coefficients in $\mathbb Z[q^{\pm1}]$ and the identities are identities of such formulas, so they specialize along any ring map $A=\mathbb Z[v^{\pm1}]\to R$, $v\mapsto q$, with $q\in R^\times$, by [F4]; in particular the transported basis stays a basis and the cell law and form identities are preserved. Applying clauses 1-3 to the conjugate partition $\lambda'$, which satisfies $f^{\lambda'}=f^\lambda$ by [F2], gives clause 4. Only the presentation of $H$, the automorphism $\theta$, the Murphy cellular structure and its form are used, so no choice principle is used. [step 1.2, step 2.2, step 3.1, F2, F4] ∎

