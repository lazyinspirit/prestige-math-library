---
id: thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex
title: Polynomial Hochschild homology from the diagonal Koszul complex
kind: theorem
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [thm-hochschild-homology-is-tor-over-the-enveloping-algebra, thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring, thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object, def-hochschild-chain-complex-of-a-bimodule, def-balanced-tor-bifunctor, lem-hochschild-chains-are-bar-tensor-chains, def-two-sided-bar-resolution-of-an-associative-algebra, thm-two-sided-bar-complex-is-an-enveloping-projective-resolution, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, def-enveloping-algebra-and-bimodule-module-dictionary, def-graded-ring-module-bimodule-and-internal-shift, def-graded-balanced-tensor-product-and-homogeneous-hom, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1.3 and Exercise 9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field, $R=k[x_1,\ldots,x_n]$
for $n\geq0$, and $M$ a $k$-central $R$-bimodule. Put $S=R^e$. For
$0\leq j\leq n$ set

$$\mathcal K_j(M):=M\otimes_k\Lambda^j_k(\theta_1,\ldots,\theta_n) =\bigoplus_{1\leq i_1<\cdots<i_j\leq n}M\,\theta_{i_1}\wedge\cdots\wedge\theta_{i_j},$$

and put $\mathcal K_j(M)=0$ for $j>n$. The differential is

$$d(m\theta_{i_1}\wedge\cdots\wedge\theta_{i_j})= \sum_{r=1}^j(-1)^{r-1}(x_{i_r}m-mx_{i_r}) \theta_{i_1}\wedge\cdots\wedge\widehat{\theta_{i_r}}\wedge\cdots\wedge\theta_{i_j}.$$

There is an isomorphism
$$HH_j(R,M)\cong H_j(\mathcal K_\bullet(M))\qquad(j\geq0),$$
natural in $M$. For the grading fixed by the diagonal Koszul definition, when
$\deg_{\mathrm{int}}x_i=2$ and $M$ is a graded $k$-central $R$-bimodule,
assign $\deg_{\mathrm{int}}\theta_i=2$; the isomorphism preserves internal
degree.

In top degree,
$$HH_n(R,M)\cong M^R\,\theta_1\wedge\cdots\wedge\theta_n, \qquad M^R:=\{m\in M:rm=mr\text{ for every }r\in R\}.$$
When $n=0$, the centralizer condition is vacuous because $M$ is $k$-central,
and the displayed top wedge is the empty wedge.

## Facts & Assumptions

**Given:** AC, a field $k$, $R=k[x_1,\ldots,x_n]$, $S=R^e$, and a
$k$-central $R$-bimodule $M$. For the graded clause, $M$ is graded and each
$x_i$ has internal degree $2$.

[F1] Under AC, Hochschild homology with coefficients is naturally isomorphic
to $\operatorname{Tor}^{R^e}_j(R,M)$ ([[thm-hochschild-homology-is-tor-over-the-enveloping-algebra]]).

[F2] The $k$-central bimodule $M$ is a left $S$-module by
$(a\otimes b^{\mathrm{op}})m=amb$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F3] The diagonal Koszul complex $K(u_1,\ldots,u_n;S)$, augmented to $R$, is
a finite free projective resolution of $R$ over $S$; its degree-$p$ basis is
the increasing $p$-fold wedge basis ([[thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring]]).

[F4] The two-sided bar term is
$\operatorname{Bar}_q(R)=R\otimes_kR^{\otimes_k q}\otimes_kR$, with its
specified right $S$-action and adjacent-multiplication differential
([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F5] Under AC, $\operatorname{Bar}_\bullet(R)\to R$ is a projective
resolution of the regular right $S$-module $R$
([[thm-two-sided-bar-complex-is-an-enveloping-projective-resolution]]).

[F6] The maps
$(a_0\otimes\cdots\otimes a_{q+1})\otimes m\mapsto
(a_{q+1}ma_0)\otimes a_1\otimes\cdots\otimes a_q$ give a chain isomorphism
$\operatorname{Bar}_\bullet(R)\otimes_S M\cong C_\bullet(R,M)$, natural in
$M$ ([[lem-hochschild-chains-are-bar-tensor-chains]]).

[F7] Any two projective resolutions of the same object are homotopy equivalent
over that object under DC
([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]]).

[F8] Chain-homotopic chain maps induce the same homology map
([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[F9] AC means every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F10] In ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}$
([[thm-choice-implies-dependent-implies-countable-choice]]).

[F11] The diagonal Koszul differential deletes an increasing wedge factor
with sign $(-1)^{r-1}$ and coefficient $u_{i_r}$; when each $x_i$ has
internal degree $2$, each $\theta_i$ has internal degree $2$ and the
differential has internal degree zero
([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F12] A graded bimodule has homogeneous left and right actions, and a graded
$k$-central bimodule has agreeing scalar actions
([[def-graded-ring-module-bimodule-and-internal-shift]]).

[F13] The graded balanced tensor product uses total internal degree and adds
no sign to its balancing relation
([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[F14] Under DC, balanced Tor may be computed from a specified projective
resolution of the right module by $H_j(Q_\bullet\otimes_SM)$
([[def-balanced-tor-bifunctor]]).

[F15] Hochschild homology is the homology of the chain complex
$C_\bullet(R,M)$ for a $k$-central $R$-bimodule $M$
([[def-hochschild-chain-complex-of-a-bimodule]]).

## Proof

**Proof technique:** direct.

1.1 Identify HH with bar-tensor homology through Tor. [F1, F5, F6, F9, F10, F14, F15, given]
AC implies DC by [F9]--[F10]. By [F1], it suffices to compute the
balanced enveloping-algebra Tor group. The right-resolution definition [F14]
and bar resolution [F5] compute it using
$H_j(\operatorname{Bar}_\bullet(R)\otimes_S M)$, and the natural chain
isomorphism [F6] and the definition [F15] identify this homology with
$HH_j(R,M)$. [F1, F5, F6, F9, F10, F14, F15, given]

1.2 The bar and diagonal Koszul complexes resolve the same right $S$-module. [F3, F4, F5, given, algebra]
Let $K_\bullet=K(u_1,\ldots,u_n;S)$. By [F3], $K_\bullet\to R$ is a
projective resolution as a left $S$-module. The ring $S=R\otimes_kR$ is
commutative, so the same modules and maps are a projective resolution of $R$
as a right $S$-module. Thus [F5] and $K_\bullet$ are projective resolutions
of the same right $S$-module. [F3, F4, F5, given, algebra]

1.3 Tensor the diagonal Koszul resolution with $M$ and compute its differential. [F2, F3, F11, given, algebra]
Write $u_i=x_i\otimes1-1\otimes x_i$. The degree-$j$ Koszul term is free
over $S$ on the symbols $\theta_I$ with $|I|=j$. Tensoring over $S$ with $M$
identifies each basis copy $S\otimes_SM$ with $M$, so
$$K_j\otimes_SM\cong\bigoplus_{|I|=j}M\theta_I \cong M\otimes_k\Lambda^j_k(\theta_1,\ldots,\theta_n).$$
By [F2], $u_i$ acts on $m\in M$ as
$(x_i\otimes1)m-(1\otimes x_i^{\mathrm{op}})m=x_im-mx_i$. Applying the
Koszul differential [F11] therefore gives exactly the displayed formula.
The operators $m\mapsto x_im-mx_i$ commute: expand their composites and use
commutativity of the $x_i$ on each side and commutation of the two bimodule
actions. Hence terms deleting a fixed pair of wedge factors cancel in
opposite orders, so $d^2=0$, also directly confirming that these are chain
groups. [F2, F3, F11, given, algebra]

2.1 Compare the projective resolutions and tensor their homotopies with $M$. [F2, F7, F8, step 1.1, step 1.2]
Apply [F7] to obtain comparison maps in both directions over $R$, with
composites homotopic to the respective identity
maps. Tensoring those maps and homotopies over $S$ with the left $S$-module
$M$ preserves the chain-map and homotopy identities. By [F8], the induced
homology maps are inverse. Consequently
$$H_j(\operatorname{Bar}_\bullet(R)\otimes_SM) \cong H_j(K_\bullet\otimes_SM).$$
The maps are independent of $M$, so this comparison is natural in coefficient
bimodule maps. [F2, F7, F8, step 1.1, step 1.2]

2.2 Identify top homology with the centralizer of $R$ in $M$. [F3, F11, step 1.3, algebra]
For $n\geq1$, the degree-$n$ term has the single basis wedge
$\theta_1\wedge\cdots\wedge\theta_n$ and there is no degree-$(n+1)$ term.
Thus $H_n(\mathcal K_\bullet(M))=\ker d_n$. Its differential is
$$d_n(m\theta_1\wedge\cdots\wedge\theta_n)= \sum_{i=1}^n(-1)^{i-1}(x_im-mx_i) \theta_1\wedge\cdots\wedge\widehat{\theta_i}\wedge\cdots\wedge\theta_n.$$
The target has the distinct displayed basis wedges, so this is zero exactly
when $x_im=mx_i$ for each generator $x_i$. Since these generators generate
the polynomial algebra, that is equivalent to $rm=mr$ for every $r\in R$:
the equality extends from generators to their products by induction and then
to polynomial linear combinations by additivity. If $n=0$, the condition is
vacuous because $R=k$ and $M$ is $k$-central; the degree-zero complex is $M$
with zero differential, so $H_0=M$. [F3, F11, step 1.3, algebra]

3.1 Construct degree-zero comparison maps by homogeneous lifts. [F2, F3, F4, F9, F11, step 1.2, step 2.1]
The comparison in step 2.1 can be chosen to preserve internal degree.
Indeed, $R^{\otimes_k q}$ has its homogeneous monomial basis. The map
$$R^{\otimes_k q}\otimes_kS\longrightarrow\operatorname{Bar}_q(R),\qquad (a_1\otimes\cdots\otimes a_q)\otimes(a\otimes b^{\mathrm{op}}) \longmapsto b\otimes a_1\otimes\cdots\otimes a_q\otimes a$$
is an isomorphism of right $S$-modules. Its inverse sends
$b\otimes a_1\otimes\cdots\otimes a_q\otimes a$ to
$(a_1\otimes\cdots\otimes a_q)\otimes(a\otimes b^{\mathrm{op}})$; it is
right $S$-linear because
$(a\otimes b^{\mathrm{op}})(c\otimes d^{\mathrm{op}})=
ac\otimes(db)^{\mathrm{op}}$ and the right bar action sends the outer slots
$(b,a)$ to $(db,ac)$. Thus these monomials give a homogeneous free basis for
every bar term; for $q=0$ the middle tensor is $k$ and the basis is $\{1\}$.
The Koszul terms are free on homogeneous wedge symbols by [F3], and [F11]
makes their differentials and augmentations degree-zero maps. Recursively
construct a comparison map $f:P_\bullet\to Q_\bullet$ in either direction.
At degree zero, for each homogeneous free generator $g\in P_0$, choose a
homogeneous lift in $Q_0$ of its image in $R$ under the augmentation of
$P_0$. At degree $q>0$, after $f_{q-1}$ is defined, the element
$z=f_{q-1}(d_Pg)$ is a cycle because $d_P^2=0$ and the already constructed
maps commute with the differentials. Exactness of $Q_\bullet\to R$ gives a
preimage $y\in Q_q$ with $d_Qy=z$. Since $z$ is homogeneous and $d_Q$ has
internal degree zero, the component of $y$ in the degree of $z$ is also a
preimage. Choose such homogeneous lifts using AC [F9], and extend $S$-linearly
on the free basis. This constructs degree-zero comparison maps in both
directions. [F2, F3, F4, F9, F11, step 1.2]

4.1 Construct degree-zero homotopies between comparison composites and identities. [F7, F8, F9, F11, F12, F13, step 1.1, step 3.1]
The homotopies between the comparison composites and the identity maps can
also be chosen degree-zero. For either composite $u$ and identity $v$ on a
resolution $P_\bullet$, set $s_{-1}=0$. At degree zero, $u_0-v_0$ has zero
augmentation because both maps lift $1_R$, so on each homogeneous generator
choose a homogeneous preimage under $d_P$. At degree $q>0$, after $s_{q-1}$
is defined, put $r_q=(u_q-v_q)-s_{q-1}d_P$. The chain-map identities and the
homotopy equation in degree $q-1$ give $d_Pr_q=0$. Exactness makes $r_q(g)$ a
boundary for each homogeneous generator $g$; taking the required-degree
component of a preimage gives a degree-zero lift $s_q(g)$. AC chooses the
lifts on all homogeneous free generators and $S$-linear extension gives
degree-zero homotopies. [F7, F9, step 1.1, step 3.1]
After tensoring with graded $M$, [F12]--[F13] give the total internal grading
on $K_\bullet\otimes_SM$; the degree-zero comparison maps and homotopies
therefore induce an internal-degree-preserving isomorphism on homology. [F7,
F8, F9, F11, F12, F13, step 1.1, step 3.1]

5.1 Combine the comparisons to obtain the natural graded homology isomorphism. [F6, F11, F12, step 1.1, step 2.1, step 4.1, step 1.3, step 2.2, step 3.1]
Combining steps 1.1, 1.3, and 2.1 gives the asserted homology isomorphism.
For a bimodule map $f:M\to N$, the tensor maps $1\otimes f$ commute with the
fixed comparison maps and with the bar-to-Hochschild chain isomorphism [F6],
so the isomorphism is natural. In the graded case, each $\theta_i$ has degree
two; therefore a summand $M\theta_I$ has the internal degree of $M$ shifted
by $2|I|$, and the isomorphism built in steps 3.1 and 4.1 preserves this degree. Step 2.2
establishes the top-degree centralizer description. [F6, F11, F12, step 1.1,
step 1.1, step 2.1, step 3.1, step 4.1, step 1.3, step 2.2]

5.2 Check zero, one, empty and endpoint cases, and record AC use. [F3, F5, F7, F9, F10, F11, F14, step 2.1, step 3.1, step 4.1, step 1.3, step 2.2]
If $M=0$, all terms and homology groups vanish. If $n=0$, then $R=S=k$,
the exterior algebra has only its empty wedge in degree zero, and the complex
is $M$ in degree zero with zero differential; the diagonal resolution is the
identity resolution and the comparison above gives $HH_0(k,M)=M$ and
$HH_j(k,M)=0$ for $j>0$. If $n=1$, the only nonzero differential is
$m\theta_1\mapsto x_1m-mx_1$, with positive sign, and the formula yields
its kernel and cokernel in degrees one and zero. For every $n$, there are no
terms above degree $n$, so $HH_j(R,M)=0$ for $j>n$. The empty wedge gives
$\mathcal K_0(M)=M$ and the differential out of degree zero is zero. The only
choice principle used is AC: it supplies the bar projectivity through [F5],
implies DC for [F7], and selects homogeneous lifts in steps 3.1 and 4.1; the
monomial basis and the finite Koszul wedge basis are explicit. [F3, F5, F9,
F10, F11, step 2.1, step 1.3] $\square$
## Source comparison

Weibel, *An Introduction to Homological Algebra*, §9.1.3 and Exercise 9.1.3,
printed pp.302–304 (PDF pp.2–4), gives the enveloping-algebra/bar setup and
poses the polynomial diagonal Koszul computation as an exercise; that exercise
is a prompt, not a proof. Khovanov, “Hochschild homology,” PDF p.1, describes
the polynomial algebra's shorter Koszul resolution and the coefficient
contractions $x_i m-mx_i$ with the exterior deletion signs. The local proof
above supplies the resolution comparison, its homotopy inverse, and the
degree-preserving lift argument.
