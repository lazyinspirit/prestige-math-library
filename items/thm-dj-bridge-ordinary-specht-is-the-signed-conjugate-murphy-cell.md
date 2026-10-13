---
id: thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell
kind: theorem
title: "Ordinary Specht modules are the signed conjugate Murphy cells"
status: published
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
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 24-33): the row and Specht modules, the Murphy cellular basis and its form, and the historical Warning after Corollary 3.19 (printed p. 25). That Warning is not a proof premise for the sign position: the precise theta twist and unit below come from the universal local construction. No correctness of its untwisted historical formulation is assumed."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1 (survey), 66 PDF pages"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, Remark 5.5 (PDF p. 24): the conjugate-sign dictionary for simple modules, used only to confirm the position of the sign twist; no graded statement is imported."
    - title: "R. Dipper, G. D. James, Representations of Hecke algebras of general linear groups, Proc. London Math. Soc. (3) 52 (1986) 20-52, DOI 10.1112/plms/s3-52.1.20"
      url: "https://doi.org/10.1112/plms/s3-52.1.20"
      locator: "Historical target of the conjugate comparison. The article was not accessible (Wiley 403, recorded in the batch-50 coverage), so no clause rests on its text."
---

## Statement

Let $R$ be a commutative ring, $q\in R^\times$ and $\lambda\vdash n$, and write $\mu=\lambda'$, $L=\ell(w_\lambda)$ and $N=\ell(w_0(S_{\lambda'}))$. Let $P(\lambda)=z_\lambda H$ with its DJ form $\beta_{P(\lambda)}$, the cell module $C_{\mathrm M}(\lambda')$ with its Murphy form $G_{\lambda'}$, and the sign automorphism $\theta$ be as in [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] and [[lem-dj-bridge-sign-automorphism-and-star-dual]], and let $C_{\mathrm M}(\lambda')^\theta$ be the $\theta$-twisted cell module of [[lem-dj-bridge-theta-transport-of-the-cellular-structure]]. Then:

1. There is a base-change compatible isomorphism of right $H$-modules $$\Phi_\lambda\colon P(\lambda)\longrightarrow C_{\mathrm M}(\lambda')^\theta,\qquad \Phi_\lambda(z_\lambda)=m_0,\quad \Phi_\lambda(z_\lambda h)=m_0\theta(h)\ \ (h\in H),$$ where $m_0$ is the class of $x_{\lambda'}$ in $C_{\mathrm M}(\lambda')$ and the right side is computed with the ordinary action on $C_{\mathrm M}(\lambda')$ and read in the twist; in particular $\Phi_\lambda(e_t)=m_0\theta(T_{d_{\lambda'}(t)})$ for $t\in\operatorname{Std}(\lambda')$. For a class $m\in C_{\mathrm M}(\lambda')$ and any lift $\widetilde m\in M(\lambda')$, the inverse is $\Phi_\lambda^{-1}(m)=q^{-N}x_\lambda T_{w_\lambda}\theta(\widetilde m)$, independently of the chosen lift.

2. With $G_{\lambda'}^\theta$ the transported form of [[lem-dj-bridge-theta-transport-of-the-cellular-structure]] and $u_\lambda(q):=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}\in A^\times$, $$G_{\lambda'}^\theta(\Phi_\lambda x,\Phi_\lambda y)=u_\lambda(q)\,\beta_{P(\lambda)}(x,y)\qquad(x,y\in P(\lambda)),$$ over every commutative $R$ with $q\in R^\times$. No unnamed scalar and no potentially vanishing scalar occurs: $u_\lambda$ is the explicit unit $q^{N-L}$ in the fixed normalizations of this page.

3. Consequently $\Phi_\lambda$ maps the radical of $\beta_{P(\lambda)}$ onto the radical of $G_{\lambda'}^\theta$, the induced map between the quotients is an isomorphism, with the corresponding cell-form quotients $D^{\lambda}_{\mathrm{DJ}}\cong(D^{\lambda'}_{\mathrm M})^\theta$, including the zero-quotient case. Over a field, when the quotients are nonzero they are the simple heads; when the forms are identically zero, the displayed quotients are zero and no assertion about the actual module heads is made. Over a PID with a chosen prime, the unit-scaled form identity preserves all divisibility submodules and their reductions. One also obtains $P(\lambda')\cong P(\lambda)^{\circ,\theta}$ with the exact position of the dual and the twist, separating same-shape duality from conjugate-sign transport. No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, a partition $\lambda\vdash n$ with conjugate $\mu=\lambda'$, the Hecke algebra $H=H_{R,q}(S_n)$, the modules $M(\lambda)\supseteq P(\lambda)=z_\lambda H$ with the distinguished and polytabloid bases, the permutation form $\beta$ and its restriction $\beta_{P(\lambda)}$, the cell module $C_{\mathrm M}(\lambda')$ with basis $\{m_t\}$ and Murphy form $G_{\lambda'}$, and the sign automorphism $\theta$.

[F1] $\theta$ is an involutive automorphism commuting with $*$, with $\theta(x_\rho)=q^{\ell(w_0(S_\rho))}y_\rho$, $\theta(T_i)=(q-1)-T_i$, and for a right $H$-module $M$ the twist $M^\theta$ has action $m\cdot h=m\theta(h)$; $(M^\theta)^\circ=(M^\circ)^\theta$ and $(-)^\theta$ is exact and preserves composition multiplicities ([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F2] Using a row-module lift $\widetilde m$ of the cell class $m$, the map $m\mapsto q^{-N}x_\lambda T_{w_\lambda}\theta(\widetilde m)$ on $C_{\mathrm M}(\lambda')^\theta$ is a well-defined, surjective $H$-module map onto $P(\lambda)$ with value $z_\lambda$ at $m_0$; this is proved inside [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]], where $P(\lambda)$ is also shown to be free on $\{e_t=z_\lambda T_{d_{\lambda'}(t)}:t\in\operatorname{Std}(\lambda')\}$ and a split direct summand of $M(\lambda)$; moreover $z_\lambda=\sum_{u\in S_{\lambda'}}(-q)^{-\ell(u)}b_{t_\lambda\cdot u}$ with $b_{r}=x_\lambda T_{d_\lambda(r)}$ and $\ell(w_\lambda u)=\ell(w_\lambda)+\ell(u)$ for $u\in S_{\lambda'}$.

[F3] $\beta(b_r,b_v)=\delta_{r,v}q^{\ell(d_\lambda(r))}$, $\beta$ is $H$-contravariant ([[lem-dj-bridge-permutation-form-invariance-and-restriction]], [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] $C_{\mathrm M}(\lambda')$ is free of rank $f^{\lambda'}$ with basis $\{m_t\}$, its form $G_{\lambda'}$ satisfies $G_{\lambda'}(m_0,m_0)=P_{\lambda'}(q)=\sum_{u\in S_{\lambda'}}q^{\ell(u)}$ and the cell law, and $I^{\rhd\lambda'}$ is spanned by the Murphy elements of shapes $\rhd\lambda'$ ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F5] The transported form $G^\theta_{\lambda'}$ of [[lem-dj-bridge-theta-transport-of-the-cellular-structure]] is defined on the transported basis by $G^\theta_{\lambda'}(\theta x,\theta y)=G_{\lambda'}(x,y)$; read on the underlying module of the twist it is $G^\theta_{\lambda'}(x,y)=G_{\lambda'}(x,y)$, it is symmetric and associative for the twisted action, and $\theta$ is an isometry onto the transported cell.

[F6] $J(A)$ is nilpotent and $A/J(A)$ is semisimple for a finite-dimensional algebra over a field ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[F7] The kernel of the quotient $M(\lambda')\to C_{\mathrm M}(\lambda')$ is $P(\lambda')^\perp$, and $C_{\mathrm M}(\lambda')\cong P(\lambda')^\circ$ under the same-shape pairing ([[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]]).

[F8] Base change: all structure constants lie in $A=\mathbb Z[v^{\pm1}]$ and specialize along $v\mapsto q$ ([[def-generic-type-a-hecke-algebra]], [[lem-dj-bridge-sign-automorphism-and-star-dual]]).





## Proof

**Proof technique:** direct.

1.1 **The integral map.** Identify $C_{\mathrm M}(\mu)^\theta$ with $\theta(M(\mu))/\theta(K_\mu)$, where $K_\mu=M(\mu)\cap I^{\rhd\mu}$. By [F2], literal left multiplication by $q^{-N}x_\lambda T_{w_\lambda}$ kills $\theta(K_\mu)$ and induces the surjection $F:C_{\mathrm M}(\mu)^\theta\to P(\lambda)$ sending the class of $x_\mu$ to $z_\lambda$. In particular $F(m)=q^{-N}x_\lambda T_{w_\lambda}\theta(\widetilde m)$ for any row-module lift, independently of that lift. Both modules are free of rank $f^\mu=f^\lambda$; finite basis preimages give a right inverse of the square matrix of $F$, so its determinant is a unit and $F$ is an isomorphism. Set $\Phi_\lambda=F^{-1}$. Its $H$-linearity with the twisted target action gives $\Phi_\lambda(z_\lambda h)=m_0\theta(h)$, where this expression uses the ordinary action on the underlying Murphy module. All these matrices and their inverses lie in the universal Laurent ring and specialize by [F8]. [F1, F2, F4, F8, algebra]

2.1 **Generic uniqueness of the forms, after the integral isomorphism.** Work over $A=\mathbb Z[v^{\pm1}]$ with formal $q=v$ and $K=\mathbb Q(v)$. The matrix of the regular trace form $(a,b)\mapsto\operatorname{Tr}_K(L_{ab})$ has Laurent-polynomial entries. At $v=1$ its matrix is $n!$ times the permutation matrix $u\leftrightarrow u^{-1}$: in the regular group basis left multiplication by a nonidentity group element has trace zero, whereas the identity has trace $n!$. Its determinant is therefore nonzero, so the regular trace form is nonsingular over $K$. If $a\in J(H_K)$, every $ab$ is nilpotent by [F6], and $L_{ab}$ has trace zero; nondegeneracy forces $a=0$, so $H_K$ is semisimple. To justify the consequence used next, any quotient algebra of a finite-dimensional semisimple algebra has semisimple regular module: the images of its finitely many simple summands are simple or zero and span the quotient; selecting successively images not contained in their predecessors expresses it as a direct sum of simples. A square-zero two-sided ideal $J$ of such an algebra acts trivially on every simple module, since $JS$ is either $0$ or $S$ and the latter would force $J^2S=S$; it therefore annihilates the semisimple regular module and is zero. Each cellular layer is an ideal in a quotient of this semisimple algebra, with multiplication $(a\otimes b)(c\otimes d)=G_\mu(b,c)a\otimes d$. If $G_\mu$ had a nonzero radical, $(\operatorname{rad}G_\mu)\otimes C_{\mathrm M}(\mu)$ would be a nonzero square-zero ideal of that quotient, stable under its surrounding algebra by the cell law and contravariance, a contradiction. Thus $G_\mu$ is nonsingular, and the cellular rank-one operators realize the full matrix algebra on $C_{\mathrm M}(\mu)_K$. Every module endomorphism is scalar because it commutes with all matrix units; this conclusion also holds on the $\theta$-twist, since $\theta(H_K)=H_K$. On that twist, any contravariant form $B'$ defines an operator $U$ by $G_\mu^\theta(Ux,y)=B'(x,y)$. Contravariance and nonsingularity imply that $U$ commutes with the module action, so $B'$ is a scalar multiple of $G_\mu^\theta$. No generic argument was used to establish the integral map or basis. [F1, F4, F5, F6, step 1.1, algebra]

2.2 **The exact generator computation.** The expansion in [F2] has distinct distinguished row-module vectors and length $L+\ell(u)$, so [F3] gives $$\beta(z_\lambda,z_\lambda)=\sum_{u\in S_\mu}q^{-2\ell(u)}q^{L+\ell(u)}=q^L\sum_{u\in S_\mu}q^{-\ell(u)}=q^{L-N}P_\mu(q).$$ The last equality pairs $u$ with $w_0(S_\mu)u$. The row identity $x_\mu T_u=q^{\ell(u)}x_\mu$ gives $x_\mu^2=P_\mu(q)x_\mu$, so the defining cell product in [F4] gives $G_\mu(m_0,m_0)=P_\mu(q)$. Therefore, with the specified normalization $\Phi_\lambda(z_\lambda)=m_0$, the only possible comparison unit is $u_\lambda(q)=q^{N-L}$. This computation uses the distinguished-basis definition of $\beta$, not any incorrectly unscaled trace identity. [F2, F3, F4, F5, step 1.1, algebra]

3.1 **Universal form identity.** Transfer the DJ form to $C_{\mathrm M}(\mu)^\theta$ using $F=\Phi_\lambda^{-1}$: set $B'(c,d)=\beta(Fc,Fd)$. This is contravariant for the twisted action, as is $G_\mu^\theta$. Both are nonzero over $K$, since their respective generator values are $q^{L-N}P_\mu(q)$ and $P_\mu(q)$, nonzero in that field. Step 2.1 makes them proportional, and step 2.2 determines the scalar as $q^{N-L}$, proving $G_\mu^\theta(\Phi_\lambda x,\Phi_\lambda y)=q^{N-L}\beta(x,y)$ over $K$. Both sides have matrices in $A$; the injection $A\to K$ proves their equality already in $A$, and then [F8] specializes it to every commutative $R$ with unit parameter. No cancellation of $P_\mu(q)$ takes place after specialization. [F3, F4, F5, F8, step 1.1, step 2.1, step 2.2, algebra]

4.1 **Radicals, divisibility, quotients and duality.** The unit form identity and the isomorphism $\Phi_\lambda$ identify the form radicals and yield $D^{\lambda}_{\mathrm{DJ}}\cong(D^{\lambda'}_{\mathrm M})^\theta$, including zero quotients. Over a field, a vector outside a nonzero cell-form radical generates its whole cell module: choose a vector pairing to $1$ and use its finite basis expansion in the cell rank-one action $x m_{uv}=G_\mu(x,m_u)m_v$. Thus every proper submodule lies in that radical, making it the unique maximal submodule and the nonzero form quotient the simple head; transfer this conclusion through $\Phi_\lambda$. If the form is identically zero only the zero form quotient is asserted, not a zero actual head. Over a PID with chosen prime $\pi$, the submodules $\{x:\beta(x,P(\lambda))\subseteq\pi^iR\}$ for every $i\ge0$ are identified with their Murphy counterparts because the forms differ by a unit; their reductions correspond as well. Applying step 1.1 to $\lambda'$ gives $P(\lambda')\cong C_{\mathrm M}(\lambda)^\theta$. Compose with the same-shape perfect pairing [F7] and the commuting of star dual with $\theta$ in [F1] to obtain $P(\lambda')\cong P(\lambda)^{\circ,\theta}$. Empty shapes have $N=L=0$, $\Phi=1$ and unit $1$. This proves all clauses, using generic semisimplicity only for uniqueness of forms on an already integral module. No choice principle is used. [F1, F4, F7, F8, step 1.1, step 3.1, algebra] ∎

