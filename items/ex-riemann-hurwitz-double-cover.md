---
id: ex-riemann-hurwitz-double-cover
kind: example
title: "Riemann-Hurwitz for a tame double cover with 2r branch points"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-jacobian-presentation-differentials
  - cor-projective-embedding-every-smooth-proper-curve
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-algebraic-closure
  - def-degree-divisor-proper-curve
  - def-dependent-choice
  - def-different-divisor-curve-map
  - def-finite-morphism-schemes
  - def-genus-euler-characteristic-curve
  - def-locally-finite-presentation-morphism
  - def-nonconstant-morphism-curves-degree
  - def-perfect-field
  - def-ramification-and-branch-points
  - def-ramification-index-curve-map
  - def-relative-algebraic-closure
  - lem-composite-finite-proper-morphism-proper
  - lem-curve-different-local-support-and-index-bound
  - lem-degree-pullback-divisor-finite-morphism-curves
  - lem-projective-line-divisors-classified-by-degree
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - thm-affine-domain-dimension-transcendence-degree
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-curves-function-fields-equivalence
  - thm-genus-zero-point-implies-projective-line
  - thm-jacobian-criterion-smooth-morphism
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-local-ring-smooth-curve-dvr
  - thm-riemann-hurwitz-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass

---

## Example

Let $k$ be a field of characteristic not two and let
$f:C\to\mathbb P^1_k$ be a finite surjective morphism of degree $n=2$ between
smooth proper geometrically integral curves over $k$ ([[def-algebraic-curve-over-field]])
that is tamely ramified with branch locus exactly $2r$ distinct $k$-rational
points of $\mathbb P^1_k$, the ramification index being $e_p=2$ at each of the
points $p$ of $C$ lying over the branch points. Because the residue
characteristic is not two, every residue extension of degree at most two is
separable and every ramification index that occurs is invertible, so the
tameness hypothesis is automatic here.

The fibre over a branch point $q_i$ is computed by the pullback-degree
identity $f^*[q_i]=\sum_{p}e_p[p]$: since $\deg_kf^*[q_i]=2$ and some $p$ over
$q_i$ has $e_p=2$, the branch point carries a single point $p_i$ with
$e_{p_i}=2$ and residue degree $1$, so $\kappa(p_i)=k$. Over a non-branch
point every point is unramified, and with the tame different formula
$\ell_p=e_p-1$ the different divisor is
$$R_f=\sum_{i=1}^{2r}[p_i],\qquad \deg_kR_f=2r .$$
With $g(\mathbb P^1_k)=0$ the complete Riemann-Hurwitz formula
$2g(C)-2=n(2g(\mathbb P^1_k)-2)+\deg_kR_f$
([[thm-riemann-hurwitz-complete]]) reads
$2g(C)-2=2(-2)+2r$, that is $g(C)=r-1$.

Such a cover is realized concretely by the smooth projective model $C_h$ of
$y^2=h(x)$ with $h\in k[x]$ monic and squarefree of degree $2r$ over a perfect
field $k$ of characteristic not two ([[def-perfect-field]],
[[thm-curves-function-fields-equivalence]],
[[cor-projective-embedding-every-smooth-proper-curve]]). Its two affine charts
and their overlap are constructed in Verification, step 1.4; this makes the
projection $\pi:C_h\to\mathbb P^1_k$ and the relative differential module
explicit. A point $p$ is ramified exactly when $y$ vanishes at $p$, in which
case $e_p=2$, $\kappa(p)$ is the residue field of the corresponding root, and
$\ell_p=1$. The roots of $h$ number $2r$ counted with their residue degrees,
so $\deg_kR_\pi=\deg h=2r$ and again $g(C_h)=r-1$. The infinity chart has two
$k$-rational points over $\infty$, both unramified. When $h$ splits over $k$
with distinct roots
$c_1,\dots,c_{2r}\in k$, the branch locus is exactly the $2r$ distinct
$k$-rational points $c_1,\dots,c_{2r}$ and the model is an example of the
abstract cover above.

The small cases confirm the formula: $r=1$ gives $g=0$, as for
$y^2=x^2-1$, whose smooth projective conic has a rational point and is a
projective line by [[thm-genus-zero-point-implies-projective-line]];
$r=2$ gives $g=1$, the genus-one quartic family
$y^2=(x^2-1)(x^2-c)$ with $c\in k\setminus\{0,1\}$; and $r=3$ gives $g=2$, as
for a squarefree sextic. In general the genus of the model of $y^2=h(x)$ is
$r-1$.

The proof explicitly assumes the Axiom of Choice. By [F19], it supplies the
Dependent Choice required by the Cartier-to-Weil cycle argument in the divisor
suppliers; the other Choice-bearing uses are through
([[thm-curves-function-fields-equivalence]],
[[lem-degree-pullback-divisor-finite-morphism-curves]],
[[lem-curve-different-local-support-and-index-bound]],
[[lem-projective-line-divisors-classified-by-degree]],
[[thm-cartier-weil-divisors-curves-agree]],
[[thm-riemann-hurwitz-complete]], [[thm-local-ring-smooth-curve-dvr]],
[[thm-jacobian-criterion-smooth-morphism]],
[[lem-composite-finite-proper-morphism-proper]],
[[prop-modules-over-a-field-are-projective-flat-and-injective]],
[[cor-projective-embedding-every-smooth-proper-curve]], and
[[thm-genus-zero-point-implies-projective-line]]. The computations below
make no further choice.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$ of characteristic $\ne2$, an
integer $r\ge1$, and
either (i) a finite surjective degree-two morphism $f:C\to\mathbb P^1_k$ of
smooth proper geometrically integral curves over $k$, tamely ramified with
branch locus exactly $2r$ distinct $k$-rational points and ramification index
$2$ at each point of $C$ over them, or (ii) a perfect such field $k$ together
with a monic squarefree polynomial $h\in k[x]$ of degree $2r$, whose model
$C_h$ with projection $\pi:C_h\to\mathbb P^1_k$ is constructed below.

[F1] A nonconstant morphism $f:C\to D$ of smooth proper geometrically
integral curves over $k$ has degree $\deg(f)=[k(C):k(D)]$, a positive integer;
the field extension $k(C)/k(D)$ has degree two in our setting, and every
extension of degree at most two in characteristic $\ne2$ is separable, since
an irreducible quadratic has nonzero derivative when $2\ne0$.
([[def-nonconstant-morphism-curves-degree]])

[F2] For a nonconstant morphism of smooth proper geometrically integral
curves the index-ramification locus is $\{p:e_p>1\}$ and its image is the
index branch locus; $f$ is unramified at $p$ exactly when
$\Omega_{C/D,p}=0$; a nonconstant morphism of smooth proper curves is finite
and surjective. ([[def-ramification-and-branch-points]])

[F3] The ramification index at $p$ over $q$ is $e_p=\operatorname{ord}_p(f^*t_q)$
for a uniformizer $t_q$ of $\mathcal O_{D,q}$, and it is independent of the
uniformizer. ([[def-ramification-index-curve-map]])

[F4] For a finite surjective morphism of smooth proper geometrically integral
curves with separable function-field extension, the different length
$\ell_p=\operatorname{length}_{\mathcal O_{C,p}}(\Omega_{C/D,p})$ satisfies
$\ell_p\ge e_p-1$; moreover $\ell_p=0$ if and only if $e_p=1$ and
$\kappa(p)/\kappa(q)$ is separable, and $\ell_p=e_p-1$ if and only if
$\kappa(p)/\kappa(q)$ is separable and $e_p$ is invertible in $\kappa(q)$
(tame ramification); in particular $\operatorname{Supp}(\Omega_{C/D})$
consists exactly of the points with $e_p>1$ or inseparable residue extension.
([[lem-curve-different-local-support-and-index-bound]],
[[def-ramification-and-branch-points]])

[F5] The different divisor is the effective divisor
$R_f=\sum_p\ell_p[p]$ on $C$; its support is the differential-ramification
locus. ([[def-different-divisor-curve-map]])

[F6] For a nonconstant morphism $f:C\to D$ of degree $n$ of smooth proper
geometrically integral curves, $f$ is finite and flat, the pullback of Cartier
divisors is defined and additive, $f^*[q]=\sum_{p\in f^{-1}(q)}e_p[p]$ for
closed points, and $\deg_k(f^*E)=n\deg_kE$ for every divisor $E$ on $D$;
consequently $\sum_{p\in f^{-1}(q)}e_pf_p=n$ for every closed point $q$, where
$f_p=[\kappa(p):\kappa(q)]$ is the residue degree.
([[lem-degree-pullback-divisor-finite-morphism-curves]],
[[def-ramification-index-curve-map]], [[def-degree-divisor-proper-curve]])

[F7] For an integral proper curve over $k$, a divisor is a finite integral sum
$D=\sum_xn_x[x]$ of closed points and $\deg_kD=\sum_xn_x[\kappa(x):k]$. The
degree of a principal divisor is zero, so linearly equivalent divisors have
equal degree, and the divisor of a rational function $z$ on a smooth proper
curve has $\deg_k\operatorname{div}(z)=0$.
([[def-degree-divisor-proper-curve]], [[thm-principal-divisor-degree-zero-proper-curve]])

[F8] $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$
of genus $0$, with affine coordinate $t=x_1/x_0$ and the point
$\infty=[0:1]$; every divisor on $\mathbb P^1_k$ is linearly equivalent to
$\deg_k(D)[\infty]$. ([[lem-projective-line-divisors-classified-by-degree]],
[[def-genus-euler-characteristic-curve]])

[F9] At every closed point of a smooth curve the local ring is a DVR, so the
order of a rational function there is defined and additive; the local ring at
the generic point is the function field, hence a field, not a DVR. Every
invertible sheaf on a smooth proper curve is $\mathcal O_C(D)$ for a divisor
$D$ well defined modulo linear equivalence.
([[thm-local-ring-smooth-curve-dvr]], [[thm-cartier-weil-divisors-curves-agree]])

[F10] The genus of a smooth proper geometrically integral curve is
$g(C)=h^1(C,\mathcal O_C)=1-\chi(C,\mathcal O_C)$.
([[def-genus-euler-characteristic-curve]])

[F11] Riemann-Hurwitz: for a finite surjective morphism $f:C\to D$ of smooth
proper geometrically integral curves with separable function-field extension
and different divisor $R_f$, one has
$2g(C)-2=n(2g(D)-2)+\deg_kR_f$ with $n=\deg(f)$, equivalently
$K_C\sim f^*K_D+R_f$.
([[thm-riemann-hurwitz-complete]])

[F12] Let $K/k$ be a finitely generated field extension of transcendence
degree one in which $k$ is relatively algebraically closed and let $k$ be
perfect. Then there is a smooth proper geometrically integral curve $C$ over
$k$ together with a fixed $k$-isomorphism $K\cong k(C)$; any two such identified models are related by a unique $k$-isomorphism inducing the prescribed function-field identification; and for
smooth proper geometrically integral curves $C,D$ over $k$ the assignment
$f\mapsto f^*$ is a bijection from dominant $k$-morphisms $C\to D$ onto
injective $k$-algebra homomorphisms $k(D)\hookrightarrow k(C)$.
([[thm-curves-function-fields-equivalence]])

[F13] A curve over $k$ is a geometrically integral, separated, finite-type
$k$-scheme of chain dimension one; smooth and proper are extra adjectives.
([[def-algebraic-curve-over-field]])

[F14] For a finitely generated extension $K/k$, saying that $k$ is relatively
algebraically closed in $K$ means that every element of $K$ algebraic over $k$
lies in $k$. A perfect field has only separable finite algebraic extensions;
for each finite separable extension $L/k$, $L\otimes_k\bar k$ is a product of
$[L:k]$ copies of $\bar k$. The extension $\bar k/k$ is flat.
([[def-relative-algebraic-closure]], [[def-algebraic-closure]], [[def-perfect-field]],
[[prop-modules-over-a-field-are-projective-flat-and-injective]])

[F15] In case (ii), write
$h(x)=x^{2r}+a_1x^{2r-1}+\cdots+a_{2r}$ and put
$w(s)=s^{2r}h(s^{-1})=1+a_1s+\cdots+a_{2r}s^{2r}$. The two chart rings
$B_0=k[x,y]/(y^2-h(x))$ and $B_\infty=k[s,z]/(z^2-w(s))$ are glued on
$D(x)$ and $D(s)$ by $s=x^{-1}$ and $z=y/x^r$. A morphism is finite when the
inverse images of an affine target cover are affine with module-finite
coordinate algebras; each displayed monic quadratic quotient is free of rank
two over its coordinate polynomial ring. ([[def-finite-morphism-schemes]], algebra)

[F16] If $h$ is squarefree and $2$ is invertible, the hypersurface chart
$y^2=h(x)$ is smooth: at any prime either $y$ or $h'(x)$ is a unit. The same
criterion applies to $z^2=w(s)$ when $w$ is squarefree. For the finite chart
over $k[x]$, the relative differential module is
$\Omega_{B_0/k[x]}\cong(B_0/(2y))\,dy$, and for the infinity chart it is
$\Omega_{B_\infty/k[s]}\cong(B_\infty/(2z))\,dz$.
([[thm-jacobian-criterion-smooth-morphism]],
[[def-locally-finite-presentation-morphism]],
[[cor-jacobian-presentation-differentials]])

[F17] A finite morphism to a proper scheme is proper. Every smooth proper
geometrically integral curve over $k$ admits a closed immersion into some
$\mathbb P^N_k$. ([[lem-composite-finite-proper-morphism-proper]],
[[cor-projective-embedding-every-smooth-proper-curve]])

[F18] If $A$ is a finite-type $k$-domain, then
$\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$.
([[thm-affine-domain-dimension-transcendence-degree]])

[F19] The Axiom of Choice implies Dependent Choice, which is the additional
choice assumption carried by the Cartier-to-Weil supplier used in [F9] and by
the Cartier-to-Weil arguments in the finite-morphism and projective-line
divisor suppliers. ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])

[F20] Under the Axiom of Choice assumed here, if a smooth proper geometrically
integral curve over $k$ has genus zero and admits a divisor of degree one
(equivalently, a $k$-rational closed point), then it is isomorphic to
$\mathbb P^1_k$. ([[thm-genus-zero-point-implies-projective-line]])

## Verification

**Proof technique:** push the degree-two pullback identity through the fibre
of each closed point of $\mathbb P^1_k$ to pin all ramification indices, then
apply the tame different formula and Riemann-Hurwitz; for the concrete model,
glue its two standard affine charts and compute their relative differential
modules.

1.1 For every closed point $q$ of $\mathbb P^1_k$ and every closed point $p$ of $C$ with $f(p)=q$, [F6] gives $\deg_kf^*[q]=2\deg_kq$ and $f^*[q]=\sum_{p\in f^{-1}(q)}e_p[p]$, hence $\sum_{p\in f^{-1}(q)}e_pf_p=2$ with $f_p=[\kappa(p):\kappa(q)]$; consequently $e_pf_p\le2$, so $e_p\in\{1,2\}$, $f_p\le2$, every residue extension is separable by [F1], and all ramification is tame. [F1, F3, F6]

1.2 In case (ii), $h$ has an irreducible factor $g$ of multiplicity one. The $g$-adic valuation of $h$ in $k(x)$ is therefore $1$, so $h$ is not a square in $k(x)$ and $y^2-h(x)$ is irreducible over $k(x)$. Thus $K=k(x)[y]/(y^2-h(x))$ is a field, finitely generated of transcendence degree one over $k$. [F13, algebra]

1.3 The field $k$ is relatively algebraically closed in $K$. Let $A=k[x,y]/(y^2-h(x))$, so $K=\operatorname{Frac}(A)$. Over $\bar k$, $h$ remains squarefree and has a simple root; its valuation there is odd, so it is not a square in $\bar k(x)$. Hence $A\otimes_k\bar k\cong\bar k[x,y]/(y^2-h(x))$ is a domain. Since $\bar k/k$ is flat, $A\hookrightarrow A\otimes_k\bar k$ is injective and
$K\otimes_k\bar k\cong S^{-1}(A\otimes_k\bar k)$, where $S=A\setminus\{0\}$, is a domain. If $\alpha\in K$ is algebraic over $k$ but not in $k$, then $L=k(\alpha)$ is a finite extension of degree greater than one. Since $k$ is perfect, $L/k$ is separable; therefore $L\otimes_k\bar k$ is a product of $[L:k]>1$ copies of $\bar k$, not a domain. Flatness makes $L\otimes_k\bar k\hookrightarrow K\otimes_k\bar k$, a contradiction. Thus $k$ is relatively algebraically closed in $K$. [F14, algebra]

1.4 Construct the model explicitly. Write $h=x^{2r}+a_1x^{2r-1}+\cdots+a_{2r}$ and define $w(s)=s^{2r}h(s^{-1})=1+a_1s+\cdots+a_{2r}s^{2r}$. Glue $U_0=\operatorname{Spec}B_0$, $B_0=k[x,y]/(y^2-h(x))$, to $U_\infty=\operatorname{Spec}B_\infty$, $B_\infty=k[s,z]/(z^2-w(s))$, on $D(x)$ and $D(s)$ by $s=x^{-1}$ and $z=y/x^r$. The equations agree on this overlap. Each chart is a hypersurface, hence finitely presented over $k$; the resulting map $\pi:C_h\to\mathbb P^1_k$ has inverse images $U_0,U_\infty$ over the standard affine charts, and each chart ring is free of rank two over its base coordinate ring, so $\pi$ is finite of degree two. The polynomial $w$ is squarefree: its roots are the reciprocals of the nonzero roots of $h$, and $w(0)=1$; there is at least one nonzero root since $h$ has $2r\ge2$ distinct roots and at most one is zero. On either chart, at a prime containing $y$ (respectively $z$), the derivative $h'(x)$ (respectively $w'(s)$) is a unit because the polynomial is squarefree; away from those primes, $2y$ (respectively $2z$) is a unit. The relative Jacobian criterion therefore makes both charts smooth over $k$. Over $\bar k$, each chart ring is a domain because its squarefree polynomial has a simple root and is not a square in the rational function field. The charts meet in a nonempty open, so their gluing remains integral after base change. Their common function field is $K$, and both chart rings have dimension one by [F18], so this is a curve; it is smooth and geometrically integral. The finite map to the proper curve $\mathbb P^1_k$ makes it proper by [F17]. By [F12] it is the smooth proper geometrically integral model of $K$, unique up to the isomorphism compatible with the specified identification of its function field. The projective-embedding result in [F17] makes this model projective. The Given Axiom of Choice supplies Dependent Choice by [F19] for the Cartier-to-Weil divisor suppliers used below. [F12, F15, F16, F17, F18, F19, algebra]

1.5 For every closed point $p$ of $C_h$ with $q=\pi(p)$, the divisor identity $\pi^*\operatorname{div}(h)=2\operatorname{div}(y)$ and the additivity and closed-point formula of [F6] give $2\operatorname{ord}_p(y)=e_p\operatorname{ord}_q(h)$, where $\operatorname{ord}_q(h)$ is the order of the rational function $h$ at $q$; since $h$ is monic of degree $2r$, its only pole is at $\infty$ and there $\operatorname{ord}_\infty(h)=-2r$, while at a finite point $q=\mathrm V(g)$ one has $\operatorname{ord}_q(h)=1$ if $g\mid h$ (multiplicity of the irreducible factor, $h$ squarefree) and $\operatorname{ord}_q(h)=0$ otherwise. [F6, F7, F9, algebra]

2.1 If $\operatorname{ord}_p(y)=0$, Step 1.5 shows that $q\ne\infty$ and that $h$ has order zero at $q$. Thus $p$ lies on the finite chart, where the actual relative-differentials presentation is $\Omega_{B_0/k[x]}\cong(B_0/(2y))\,dy$ by [F16]. The element $y$ is a unit at $p$, so this localized module is zero; hence $\ell_p=0$ and $p$ is unramified with separable residue extension, that is $e_p=1$ by [F4]. [F2, F4, F16, step 1.4, step 1.5]

2.2 In case (i), the branch locus is exactly $\{q_1,\dots,q_{2r}\}$ and every point $p$ over $q_i$ has $e_p=2$; by Step 1.1 there is exactly one such $p=p_i$, with $f_{p_i}=1$, so $\kappa(p_i)=\kappa(q_i)=k$ and $e_{p_i}=2$, while every point over a non-branch point has $e_p=1$. [F2, F3, step 1.1]

2.3 If $\operatorname{ord}_p(y)=m>0$, then Step 1.5 shows that $q=\mathrm V(g)$ for an irreducible factor $g$ of $h$, with $\operatorname{ord}_q(h)=1$, and $e_p=2m\ge2$. The fibre of the actual finite chart over $q$ is $\kappa(q)[y]/(y^2)$, so it has a unique point with residue field $\kappa(q)$. Locally write $h=gu$ with $u$ a unit. The maximal ideal at that point is $(g,y)$ and $g=y^2/u$, hence it is $(y)$; by [F9], $y$ is a uniformizer. Therefore $e_p=\operatorname{ord}_p(g)=2$ and $m=1$. The point is tame and has $\ell_p=e_p-1=1$ by [F4]. [F3, F4, F9, step 1.4, step 1.5]

2.4 If $\operatorname{ord}_p(y)<0$, then Step 1.5 forces $q=\infty$. On the infinity chart the coordinates are $s=1/x$ and $z=y/x^r$, with $z^2=w(s)$. The fibre over $s=0$ is $k[z]/(z^2-1)\cong k\times k$, so it consists of two distinct $k$-rational points. At each, $z$ is a unit and [F16] gives $\Omega_{B_\infty/k[s]}\cong(B_\infty/(2z))\,dz=0$ locally; each is unramified, hence has $e_p=1$. These are the two rational points at infinity. [F4, F16, step 1.4, step 1.5, algebra]

3.1 In case (i), the ramified points $p_i$ are tame with separable residue extension, so [F4] gives $\ell_{p_i}=e_{p_i}-1=1$, and every unramified point has $\ell_p=0$ by the criterion $\ell_p=0\Leftrightarrow e_p=1$ and separable residue; hence $R_f=\sum_{i=1}^{2r}[p_i]$ with $\deg_kR_f=\sum_i\deg_k(p_i)=2r$. [F4, F5, F7, step 2.2]

3.2 Combining Steps 2.1, 2.3 and 2.4, the ramified points of $\pi$ are exactly the points $p_g$ over the closed points $\mathrm V(g)$ for the irreducible factors $g$ of $h$, each unique with $e_{p_g}=2$, $f_{p_g}=1$, hence $\kappa(p_g)=k[x]/(g)$ and $\ell_{p_g}=1$; every other point is unramified with $\ell_p=0$; therefore $R_\pi=\sum_{g\mid h}[p_g]$ and $\deg_kR_\pi=\sum_{g\mid h}\deg(g)=\deg(h)=2r$. [F4, F5, F7, step 2.1, step 2.3, step 2.4]

4.1 In case (i), $k(C)/k(\mathbb P^1_k)$ has degree $2$ and is separable by [F1], so Riemann-Hurwitz applies: $2g(C)-2=2(2\cdot0-2)+\deg_kR_f=-4+2r$, and therefore $g(C)=r-1$ with $g$ as in [F10]. [F1, F8, F10, F11, step 3.1]

4.2 In case (ii) the extension $k(C_h)/k(\mathbb P^1_k)$ is separable by [F1], so Riemann-Hurwitz gives $2g(C_h)-2=2(2\cdot0-2)+\deg_kR_\pi=-4+2r$, that is $g(C_h)=r-1$, with $g$ as in [F10]; when $h$ splits over $k$ with distinct roots $c_1,\dots,c_{2r}\in k$ the branch locus is exactly those $2r$ distinct $k$-rational points, so $C_h\to\mathbb P^1_k$ is a cover of case (i) and the two computations agree. [F1, F8, F10, F11, step 3.2]

5.1 The small cases: for $r=1$ the model of $y^2=x^2-1$ is the smooth plane conic $Y^2=X^2-Z^2$ with rational point $[1:0:1]$; its partial derivatives $-2X,2Y,2Z$ cannot vanish simultaneously at a projective point. Step 4.2 gives genus zero, and the rational point defines a degree-one divisor, so [F20] gives $C_h\cong\mathbb P^1_k$. The projection identification is explicit:
$$[U:V]\longmapsto[U^2+V^2:U^2-V^2:2UV].$$
On $X+Y\ne0$ its inverse is $[X+Y:Z]$, and on $X-Y\ne0$ it is $[Z:X-Y]$; the formulas agree on the overlap. For $r=2$ and $c\in k\setminus\{0,1\}$ the polynomial $(x^2-1)(x^2-c)$ is monic squarefree of degree $4$, so the model gives a quartic family of genus $1$. For $r=3$ every squarefree sextic gives a model of genus $2$. Each case is consistent with $g(C_h)=r-1$. [F8, F10, F20, step 4.2] ∎
