---
id: lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity
kind: lemma
title: "Hermitian exterior Lefschetz decomposition and Weil star identity"
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - def-hodge-star-on-an-oriented-inner-product-space
  - thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula
  - cor-hodge-star-is-an-isometry-and-squares-to-a-sign
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 16 'Representations of sl2(C)' (October 24), 8 pp.; Lemma 16.1, Proposition 16.2, Definition 16.3, Proposition 16.4 (Lefschetz decomposition, complete proof)"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class16.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 17 'Proof of the Kähler identities' (October 29), 4 pp.; Lefschetz decomposition, Lemma 17.1, the Weyl element, Proposition 17.3 (Weil's identity with its two-plane proof), Kähler identities"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI (Hodge Theory), §5.1-§5.3 and §6.1, printed pp. 300-306; (5.1)-(5.17) operators of Hermitian geometry, primitive elements and hard Lefschetz; (6.3)-(6.7) Kähler commutation identities"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Let $n\ge0$, let $V$ be a real inner product space of dimension $2n$, and let
$J:V\to V$ be a compatible complex structure ($J^2=-\mathrm{id}$ and
$g(Jv,Jw)=g(v,w)$ for all $v,w$). Let $\omega\in\bigwedge^2V$ satisfy
$\omega(v,w)=-g(Jv,w)$ for all $v,w$, and orient $V$ so that $\omega^n/n!$ is a
positive volume form. These are the form-side conventions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]: $V$ is the
cotangent space at a point, $J$ acts on forms by pullback, and $\omega$ is the
fundamental form. Write $h$ for the Hermitian form on the complexified exterior
algebra $\bigwedge^\bullet V_{\mathbb C}$ that extends $g$ and is conjugate-linear
in the second variable, put $L=\omega\wedge$, let $\Lambda=L^*$ be the adjoint
with respect to $h$, and put $H=[L,\Lambda]$ and
$W=\exp L\exp(-\Lambda)\exp L$. Let $J$ also denote the algebra endomorphism
$J(x\wedge y)=Jx\wedge Jy$ of $\bigwedge^\bullet V_{\mathbb C}$, let
$\bigwedge^{p,q}V_{\mathbb C}$ be the span of $p$-fold wedges of
$V^{1,0}=\ker(J-i)$ with $q$-fold wedges of $V^{0,1}=\ker(J+i)$, and let $*$ be
the complex-linear extension of the Hodge star of $V$ and
$\epsilon(k)=(-1)^{k(k-1)/2}$.

Then the following hold.

1. $H=[L,\Lambda]$ satisfies $[L,\Lambda]=H$, $H=(k-n)\mathrm{id}$ on
   $\bigwedge^kV_{\mathbb C}$, $[H,L]=2L$ and $[H,\Lambda]=-2\Lambda$.
2. Every $\alpha\in\bigwedge^kV_{\mathbb C}$ has a unique decomposition
   $\alpha=\sum_{r\ge\max(0,k-n)}L^ru_r$ with $\Lambda u_r=0$ and
   $u_r\in\bigwedge^{k-2r}V_{\mathbb C}$; all but finitely many terms vanish,
   and the projections $\alpha\mapsto u_r$ are rational polynomials in
   $L,\Lambda$ on each fixed degree.
3. If $u\in\bigwedge^tV_{\mathbb C}$ is primitive ($\Lambda u=0$) of degree $t$,
   then $L^{n-t+1}u=0$ and
   $$\Lambda^sL^ru=\frac{r!}{(r-s)!}\frac{(n-t-r+s)!}{(n-t-r)!}L^{r-s}u\qquad(0\le s\le r\le n-t);$$
   no nonzero primitive element has degree $t>n$; for $k\le n$ an element of
   $\bigwedge^kV_{\mathbb C}$ is primitive exactly when $L^{n-k+1}u=0$; and
   $L^{n-k}:\bigwedge^kV_{\mathbb C}\to\bigwedge^{2n-k}V_{\mathbb C}$ is an
   isomorphism for $k\le n$.
4. $J=i^{p-q}$ on $\bigwedge^{p,q}V_{\mathbb C}$, and
   $W\alpha=\epsilon(k)J*\alpha$ for every $\alpha$ of degree $k$. If $u$ is
   primitive of type $(p,q)$ and $k=p+q$, then
   $$*u=\frac{\epsilon(k)i^{q-p}}{(n-k)!}L^{n-k}u .$$

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The star is characterized by
$\alpha\wedge\star\beta=h(\alpha,\beta)\operatorname{vol}$ and on a positively
oriented orthonormal basis is $\star e_I=\epsilon_Ie_{I^{\mathrm c}}$, where
$\epsilon_I$ is the sign of the permutation listing $I$ followed by its
complement ([[def-hodge-star-on-an-oriented-inner-product-space]],
[[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

[F2] The star is an isometry of the Gram pairing and
$\star\circ\star=(-1)^{k(2n-k)}\mathrm{id}$ on $\bigwedge^kV$
([[cor-hodge-star-is-an-isometry-and-squares-to-a-sign]]).

## Proof

1.1 Suppose $n=1$. Choose a unit vector $e_1$ and put $e_2=-Je_1$; then $g(e_1,e_2)=0$, $g(e_2,e_2)=1$, $Je_1=-e_2$, $Je_2=e_1$, and $\omega(e_1,e_2)=-g(Je_1,e_2)=g(e_2,e_2)=1$, so $\omega=e_1\wedge e_2$ is the positive unit volume form and $(e_1,e_2)$ is positively oriented. The basis $1,e_1,e_2,\omega$ of $\bigwedge^\bullet V_{\mathbb C}$ is orthonormal for $h$, and [F1] gives the star table $\star1=\omega$, $\star e_1=e_2$, $\star e_2=-e_1$, $\star\omega=1$. Hence $L(1)=\omega$ and $L$ kills $e_1,e_2,\omega$, while the adjoint $\Lambda$ satisfies $\Lambda\omega=1$ and kills $1,e_1,e_2$. Therefore $[L,\Lambda]=H$ is $-\mathrm{id}$, $0$, $0$, $\mathrm{id}$ on degrees $0,1,1,2$, that is $H=(k-1)\mathrm{id}$ on $\bigwedge^k$, and evaluating $HL-LH$ and $H\Lambda-\Lambda H$ on the four basis elements gives $[H,L]=2L$ and $[H,\Lambda]=-2\Lambda$. Evaluating the exponentials gives $W(1)=\omega$, $W(e_1)=e_1$, $W(e_2)=e_2$, $W(\omega)=-1$, while $J(1)=1$, $Je_1=-e_2$, $Je_2=e_1$, $J\omega=\omega$ give $\epsilon(0)J\star1=\omega$, $\epsilon(1)J\star e_1=e_1$, $\epsilon(1)J\star e_2=e_2$ and $\epsilon(2)J\star\omega=-1$; since both sides are complex linear, $W=\epsilon(k)J\star$ on $\bigwedge^kV_{\mathbb C}$ for $n=1$. [given, F1, algebra]

2.1 Let $V=V_1\oplus V_2$ with $V_1,V_2$ $g$-orthogonal and $J$-stable, oriented so that the positive volume form is $\operatorname{vol}_1\wedge\operatorname{vol}_2$; write $\omega_i=\omega|_{V_i}$, so $\omega=\omega_1+\omega_2$, and let $L_i,\Lambda_i,W_i,J_i$ be the corresponding operators on the factors. Under the linear isomorphism $\bigwedge^\bullet V_{1,\mathbb C}\otimes\bigwedge^\bullet V_{2,\mathbb C}\to\bigwedge^\bullet V_{\mathbb C}$, $a\otimes b\mapsto a\wedge b$, a check on orthonormal wedge bases gives the tensor rules $h(a\wedge b,a'\wedge b')=h_1(a,a')h_2(b,b')$, $\star(a\wedge b)=(-1)^{\deg a\deg b}(\star_1a)\wedge(\star_2b)$ and $J(a\wedge b)=J_1a\wedge J_2b$ for homogeneous $a,a'$ and $b,b'$, the middle one being forced by the characterizing property [F1] and consistent with the isometry property [F2]. Consequently $L=L_1+L_2$, $\Lambda=\Lambda_1+\Lambda_2$ (the adjoint of a sum of operators acting on the two tensor factors is the sum of the adjoints), $H=H_1+H_2$ where $H_i=(\deg-n_i)\mathrm{id}$ on the $i$-th factor with $n_i=\dim V_i/2$, and $W=W_1W_2$, $J=J_1J_2$, because operators on the two factors commute. If the three commutator relations and the identity $W=\epsilon(k)J\star$ hold on both factors, then they hold on $V$: the commutator relations split termwise, and for homogeneous $a,b$ the identity gives $W(a\wedge b)=\epsilon(\deg a)\epsilon(\deg b)(J_1\star_1a)\wedge(J_2\star_2b)$, which equals $\epsilon(\deg a+\deg b)J\star(a\wedge b)$ because $\epsilon(m+\ell)=(-1)^{m\ell}\epsilon(m)\epsilon(\ell)$ and the sign $(-1)^{\deg a\deg b}$ of the star rule cancels against $(-1)^{m\ell}$. Splitting off a two-plane $W=\mathrm{span}(e_1,-Je_1)$ with $V_2=W^\perp$ and iterating the base case 1.1 proves the three relations of part 1 and the identity of part 4 for every $n\ge0$: the degenerate factor $V_2=0$ has $\bigwedge^\bullet V_2=\mathbb C$ in degree zero, where all operators are the identity or zero and the relations are immediate, and for $n=0$ both sides of $W=\epsilon(k)J\star$ are the identity on this one-dimensional space. [step 1.1, F1, F2, given, algebra, induction]

3.1 Let $u\ne0$ be primitive of degree $t$, so $\Lambda u=0$. From $[L,\Lambda]=H$ and $H=(t+2r-n)\mathrm{id}$ on degree $t+2r$ we get, by induction on $r\ge0$, the recurrence $\Lambda L^ru=r(n-t-r+1)L^{r-1}u$: indeed $\Lambda L^{r}u=L\Lambda L^{r-1}u-(t+2(r-1)-n)L^{r-1}u$ and substituting the induction hypothesis for $r-1$ gives the claim. Iterating gives the displayed factorial formula. Let $N$ be the largest index with $L^Nu\ne0$, which exists because $L^ru=0$ once $t+2r>2n$. Then $L^{N+1}u=0$, so the recurrence with $r=N+1$ gives $0=\Lambda L^{N+1}u=(N+1)(n-t-N)L^Nu$; since $N+1\ne0$ and $L^Nu\ne0$, we get $N=n-t$. Hence $n-t\ge0$, so no nonzero primitive element has degree $t>n$; moreover $L^{n-t}u\ne0$ and $L^{n-t+1}u=0$, and all coefficients in the factorial formula are nonzero for $0\le s\le r\le n-t$. [step 2.1, given, algebra, induction]

4.1 Let $\alpha\in\bigwedge^kV_{\mathbb C}$. Since $\Lambda=L^*$ on the finite-dimensional space $\bigwedge^kV_{\mathbb C}$, the image of $L:\bigwedge^{k-2}V_{\mathbb C}\to\bigwedge^kV_{\mathbb C}$ is the orthogonal complement of $\ker\Lambda$ on $\bigwedge^kV_{\mathbb C}$, so $\alpha=u_0+L\alpha_1$ with $\Lambda u_0=0$ and $\alpha_1\in\bigwedge^{k-2}V_{\mathbb C}$. Inducting on $k$ (the cases $k=0$ and $k=1$ have no $L$-term) writes $\alpha=\sum_{r}L^ru_r$ with each $u_r$ primitive; terms with $\deg u_r>n$ are zero by step 3.1, which gives the stated range $r\ge\max(0,k-n)$. For uniqueness, suppose $\sum_{r=r_0}^{s}L^ru_r=0$ with each $u_r$ primitive and $u_s\ne0$. By the factorial formula $\Lambda^sL^su_s=s!u_s$ (note $L^su_s\ne0$ forces $s\le n-\deg u_s$), while for $r<s$ we get $\Lambda^sL^ru_r=\Lambda^{s-r}(\Lambda^rL^ru_r)=\Lambda^{s-r}(r!u_r)=0$ because $\Lambda u_r=0$; applying $\Lambda^s$ to the sum gives $s!u_s=0$, a contradiction. Finally, applying $\Lambda^s$ to a decomposed $\alpha$ shows $u_s=(s!)^{-1}\Lambda^s\alpha$ for the top index $s$, and subtracting $L^su_s$ and iterating computes each $u_r$ from $\alpha$ by a fixed rational polynomial in $L,\Lambda$; there are no choices at any step. [step 3.1, given, algebra, induction]

5.1 Choose a basis $(u_\alpha)$ of the direct sum $P=\bigoplus_jP^j$ of primitive spaces $P^j=\ker\Lambda\cap\bigwedge^jV_{\mathbb C}$, a finite direct sum of finite-dimensional spaces. By step 4.1 every element of $\bigwedge^\bullet V_{\mathbb C}$ has a unique expression as a finite sum of string elements $L^ru_\alpha$ with $0\le r\le n-\deg u_\alpha$; hence these string elements form a basis, and the string of $u_\alpha$ occupies each degree $t_\alpha,t_\alpha+2,\dots,2n-t_\alpha$. Fix $k\le n$ and let $t_\alpha=\deg u_\alpha$. Multiplication by $L^{n-k}$ sends the string element at position $r$ to position $r+n-k$, which is a valid position of the same string because $r+n-k\le n-t_\alpha$ follows from $k=t_\alpha+2r$; conversely position $r'$ of a degree-$2n-k$ element of the string is the image of $r=r'-(n-k)$ with $k=t_\alpha+2r\ge0$. On the direct sum of strings, $L^{n-k}$ is therefore a bijection from the degree-$k$ part onto the degree-$2n-k$ part, an isomorphism $L^{n-k}:\bigwedge^kV_{\mathbb C}\to\bigwedge^{2n-k}V_{\mathbb C}$. Similarly, $L^{n-k+1}L^ru_\alpha=L^{r+n-k+1}u_\alpha$ is zero exactly when $r=0$, and for $r\ge1$ it is a nonzero string element; expanding $u=\sum_{r\ge0,\alpha}c_{r,\alpha}L^ru_\alpha$ in degree $k$ and using basis independence, $L^{n-k+1}u=0$ forces $c_{r,\alpha}=0$ for every $r\ge1$, so $u=\sum_\alpha c_{0,\alpha}u_\alpha$ is primitive. The converse is step 3.1. [step 3.1, step 4.1, given, algebra]

6.1 Since $J$ acts as $i$ on $V^{1,0}$ and $-i$ on $V^{0,1}$ and is multiplicative, $J=i^{p-q}$ on $\bigwedge^{p,q}V_{\mathbb C}$. Let $u\ne0$ be primitive of degree $k$ and type $(p,q)$, put $m=n-k\ge0$, and apply $W=\exp L\exp(-\Lambda)\exp L$ to $\exp(-L)u$: since $\Lambda u=0$ we get $W\exp(-L)u=\exp(L)\exp(-\Lambda)u=\exp(L)u$. Expanding $\exp(-L)u$ and comparing the components of degree $2n-k$, of which the left side has exactly $Wu$ (all other terms are mapped to lower degrees by $W$, which reverses the $H$-weight) and the right side exactly $L^mu/m!$, gives $Wu=L^mu/m!$. Substituting into the identity $Wu=\epsilon(k)J\star u$ of step 2.1 and applying $J^{-1}$, which acts on $L^mu$ by $i^{-(p-q)}=i^{q-p}$ because $L^mu$ has type $(p+m,q+m)$, gives $\star u=\epsilon(k)i^{q-p}L^mu/m!$, which is the displayed formula. For $n=0$ both sides are the identity and the formula is $*1=1$. [step 2.1, step 3.1, given, algebra] ∎
