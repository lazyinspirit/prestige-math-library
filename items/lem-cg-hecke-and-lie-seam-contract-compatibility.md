---
id: lem-cg-hecke-and-lie-seam-contract-compatibility
kind: lemma
title: "Hecke and Lie seam contract compatibility: the Artin-to-Hecke map, normalization conversions, root-length matching, and the reflection-faithfulness boundary"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-artin-monoid-and-group-presentations, lem-cg-artin-presentation-universal-properties-and-coxeter-surjection, thm-cg-reduced-positive-section-and-length-additive-products, def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-reduced-word-independence-and-length-multiplication, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-hecke-anti-involution-bar-and-normalization, def-hh-coxeter-matrix-word-group-and-length, thm-hh-matsumoto-reduced-word-theorem, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-root-length-criterion-and-faithfulness, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-definiteness-inertia-and-signature-data-over-the-reals, def-linear-map, def-linear-subspace, def-kernel-and-image-of-a-linear-map, def-group-homomorphism, def-algebra-over-a-commutative-ring, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
    - title: "Ben Elias and Geordie Williamson, Soergel calculus (arXiv:1309.0865v1)"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2)"
      url: "https://arxiv.org/pdf/1212.0791"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented Coxeter group with
length $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), and let $R$,
$v_s$, $H$ and its generators $T_s$ be the generic Coxeter Hecke algebra of
[[def-hh-universal-coxeter-hecke-parameters-and-presentation]] (so
$R=\mathbb Z[v_1^{\pm1},\dots,v_c^{\pm1}]$ and $v_s=v_{[s]}$), with the standard
basis elements $T_w$ of
[[lem-hh-reduced-word-independence-and-length-multiplication]] and
[[thm-hh-generic-coxeter-hecke-standard-basis]]. Let $A^{+}$, $\gamma$,
$\sigma_s$ be as in [[def-cg-artin-monoid-and-group-presentations]] and $b_w$ as
in [[thm-cg-reduced-positive-section-and-length-additive-products]]. Finally let
$V=\mathbb R^{S}$, $B$ and $\rho:W\to\mathrm{GL}(V)$ be the Coxeter form and
canonical reflection representation of
[[def-cg-real-coxeter-form-and-reflection]],
[[def-cg-canonical-reflection-homomorphism]], with root system $\Phi$
([[lem-cg-reflection-representation-descends-and-root-norms]]).

**(1) Indexing and coefficient compatibility of the Artin and Hecke
interfaces.** Because the generators $T_s$ satisfy the braid relations of $H$,
the universal property of the Artin monoid
([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]] (1))
gives a unique monoid homomorphism

$$\Theta:A^{+}\longrightarrow(H,\cdot,1),\qquad \Theta(\sigma_s)=T_s .$$

It satisfies $\Theta(b_w)=T_w$ for every $w\in W$. Moreover the indexing is
coefficient-compatible: $(T_w)_{w\in W}$ is an $R$-basis of $H$, and for every
commutative ring $R'$ and ring homomorphism $R\to R'$ the specialised elements
$(1\otimes T_w)$ form an $R'$-basis of $R'\otimes_RH$
([[thm-hh-generic-coxeter-hecke-standard-basis]] (2),(4)). Thus the positive
section $b$ and the Hecke standard basis use the same reduced-word indexing, and
$\Theta$ carries the monoid multiplication of $A^{+}$ to the multiplication of
$H$ in that basis: $\Theta(b_ub_v)=T_uT_v$ for all $u,v\in W$.

**(2) Normalization conversions.** In $H$:
(i) $T_s^{2}=(v_s-v_s^{-1})T_s+1$ (the normalized or $T$-normalization);
(ii) the **multiplicative generators** $S_s:=v_sT_s$ satisfy
$(S_s-Q_s)(S_s+1)=0$, i.e. $S_s^{2}=(Q_s-1)S_s+Q_s$, where $Q_s:=v_s^{2}\in R$;
for a single parameter $v_s=v$ and $Q=v^{2}$ this is the "$S=qT$, $Q=q^2$"
convention with $q=v$;
(iii) the **opposite-sign generators** $H_s:=-T_s$ satisfy
$H_s^{2}=(v_s^{-1}-v_s)H_s+1$;
(iv) the **Soergel-calculus generators** $T^{\mathrm{EW}}_s:=-v_s^{-1}T_s$
satisfy $(T^{\mathrm{EW}}_s+1)(T^{\mathrm{EW}}_s-v_s^{-2})=0$, i.e.
$(T^{\mathrm{EW}}_s)^{2}=(v_s^{-2}-1)T^{\mathrm{EW}}_s+v_s^{-2}$.

The assignments $T_s\leftrightarrow S_s=v_sT_s$, $T_s\leftrightarrow H_s=-T_s$
and $T_s\leftrightarrow T^{\mathrm{EW}}_s=-v_s^{-1}T_s$, together with the
identity on $T_s$, extend to $R$-algebra isomorphisms between the four
corresponding presentations, with inverse displayed:
$T_s=v_s^{-1}S_s=-H_s=-v_sT^{\mathrm{EW}}_s$. In every case the braid relations
are preserved: when $m$ is even the two alternating words contain each of
$s,t$ exactly $m/2$ times, and when $m$ is odd the generators $s,t$ are joined
by an odd-labelled edge, so their parameters satisfy $v_s=v_t$
([[def-hh-universal-coxeter-hecke-parameters-and-presentation]]); in both cases
the product of the scaling constants attached to the letters is the same on the
two sides (with a single parameter simply $v_s^{m}$, $(-1)^{m}$ or $(-v_s^{-1})^{m}$).
For the single-parameter specialization, put $H_w:=(-1)^{\ell(w)}T_w$
and $T^{\mathrm{KL}}_w:=v^{-\ell(w)}H_w$, where each basis element is the
product along a reduced expression. Thus $H_s=-T_s$ as in (iii),
$T^{\mathrm{KL}}_s=T^{\mathrm{EW}}_s$ as in (iv), and
$H_w=v^{\ell(w)}T^{\mathrm{KL}}_w$. Here $T^{\mathrm{KL}}$ denotes the
original Kazhdan–Lusztig normalization with parameter $q=v^{-2}$; it is
distinct from the normalized $T$-basis in (i). For any finite family of
polynomials $P_{y,x}(q)$ and an element written in that normalization as

$$C_x=v^{\ell(x)}\sum_y P_{y,x}(v^{-2})T^{\mathrm{KL}}_y,$$

its coefficients in $C_x=\sum_y h_{y,x}H_y$ are exactly
$h_{y,x}=v^{\ell(x)-\ell(y)}P_{y,x}(v^{-2})$. This proves the coefficient
conversion used in Remark 3.2 of the Hodge-theory source whenever such an
expansion is supplied, without constructing a canonical basis or asserting
that the supplied polynomials are Kazhdan–Lusztig polynomials.

**(3) Root-length matching for a supplied root system.** Let $\beta$ be a
symmetric bilinear form on a real vector space $E$ and let $\alpha_s\in E$
($s\in S$) be vectors with $|{\alpha_s}|:=\beta(\alpha_s,\alpha_s)^{1/2}>0$ such
that

$$\frac{\beta(\alpha_s,\alpha_t)}{|\alpha_s||\alpha_t|}=-c(s,t)\qquad(s\ne t),$$

where $c(s,t):=\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $c(s,t):=1$ when
$m(s,t)=\infty$ (the convention of the Coxeter form
[[def-cg-real-coxeter-form-and-reflection]], so that the right-hand side is the
number $B(e_s,e_t)$), that $\{\alpha_s:s\in S\}$ is linearly independent, and that the assignment
$v\mapsto v-\frac{2\beta(v,\alpha_s)}{\beta(\alpha_s,\alpha_s)}\alpha_s$ defines a
representation of $W$ on $E$. Then the linear map

$$\varphi:V\longrightarrow E,\qquad \varphi(e_s):=\frac{\alpha_s}{|\alpha_s|},$$

is an isomorphism of $V$ onto $\operatorname{span}\{\alpha_s:s\in S\}$, it
satisfies $\beta(\varphi u,\varphi w)=B(u,w)$ for all $u,w\in V$, and it
intertwines the canonical representation with the reflection representation
generated by the $\alpha_s$: $\varphi(\rho(s)v)=r_{\alpha_s}(\varphi(v))$ for all
$s\in S$, $v\in V$. Consequently the labelled Coxeter diagram fixes $B$ and the
normalized products $\beta(\alpha_s,\alpha_t)/(|\alpha_s||\alpha_t|)$, but
neither the root lengths $|\alpha_s|$ nor the individual numbers
$\beta(\alpha_s,\alpha_t)$; a supplied root-system treatment with its own
root-length normalization, coroot system and lattice data matches this canonical
form exactly under the displayed normalization, and such a match is a hypothesis
on the supplier, not a consequence of the Coxeter matrix. No root system, coroot
system, Cartan matrix or lattice is constructed or identified here.

**(4) The reflection-faithfulness boundary for Soergel applications.** (a) For a
field $k$, a **realization** of $(W,S)$ in the sense of Elias–Williamson is a
free finite-rank $k$-module $\mathfrak h$ with subsets
$\{\alpha^\vee_s\}\subset\mathfrak h$, $\{\alpha_s\}\subset\mathfrak h^{*}$
satisfying $\langle\alpha^\vee_s,\alpha_s\rangle=2$, the reflection assignment
$v\mapsto v-\langle v,\alpha_s\rangle\alpha^\vee_s$ defining a representation of
$W$, and the following condition on each distinct pair with finite $m=m(s,t)$.
Put $x:=\langle\alpha_s^\vee,\alpha_t\rangle$ and
$y:=\langle\alpha_t^\vee,\alpha_s\rangle$, and define
$p_0=q_0=0$, $p_1=q_1=1$,
$p_{j+1}=xq_j-p_{j-1}$ and $q_{j+1}=yp_j-q_{j-1}$ for $j\ge1$. Require
$p_m=q_m=0$ (the two-colored quantum-number condition (3.3), with the
recursion of Definition 3.5 of the source). An infinite label imposes no
such condition. Such a realization is **faithful** when
the action of $W$ on $\mathfrak h$ is faithful, and **reflection faithful** when
it is faithful and the assignment sending each reflection of $W$ (each conjugate
of a simple reflection) to its full fixed space $\operatorname{Fix}(w):=\{v:w(v)=v\}$ is a
bijection onto $\{\operatorname{Fix}(w):w\in W,
\operatorname{codim}\operatorname{Fix}(w)=1\}$ (the source's Definition 3.8). In the canonical
case $k=\mathbb R$,
$\mathfrak h=\bigoplus_s\mathbb R\alpha^\vee_s$ and
$\langle\alpha^\vee_t,\alpha_s\rangle=-2\cos(\pi/m(s,t))$, with the source's
convention $\pi/\infty:=0$ under which the value for $m(s,t)=\infty$ is $-2$.
(b) Every element of
$W$ fixes the radical
$\operatorname{rad}(B)=\{v\in V:B(v,e_s)=0\ \forall s\in S\}$ pointwise: $\rho$
preserves $B$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (2))
and $r_a(v)=v$ whenever $B(v,a)=0$
([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)), so each
generator $r_{e_s}$ and hence $\rho(W)$ fixes $\operatorname{rad}(B)$ pointwise.
(c) Suppose $\dim\operatorname{rad}(B)=\dim V-1\ge1$. Then
$\operatorname{rad}(B)$ is a hyperplane, and for every root $\alpha\in\Phi$ the
reflection $r_\alpha$ has fixed hyperplane $\ker B(-,\alpha)$
([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2),
[[lem-cg-reflection-representation-descends-and-root-norms]] (4)), which contains
$\operatorname{rad}(B)$ and therefore equals it; moreover the simple reflections
$\rho(s)\ne\rho(t)$ ($s\ne t$) are distinct reflections with the same fixed
hyperplane. Hence the correspondence "reflection $\mapsto$ its fixed hyperplane"
fails to be injective, and the canonical realization is **not reflection
faithful** in the sense of Elias–Williamson even though $\rho$ is faithful
([[thm-cg-root-length-criterion-and-faithfulness]] (3)). (d) Therefore a faithful
canonical representation may not be substituted for a reflection-faithful
realization in an argument that assumes reflection faithfulness. The source
records Soergel's construction of a reflection-faithful representation for
every Coxeter group over $\mathbb R$ (Example 3.2(2) and the discussion after
Definition 3.8). Reflection faithfulness is a sufficient hypothesis for the
classical Soergel theory over an infinite field of characteristic different
from $2$, but is not necessary for every Soergel application: the same
discussion records Libedinsky's extension to the geometric realization and
defines a **Soergel realization** as a faithful realization to which Soergel's
techniques apply. That property is not asserted to be equivalent to
reflection faithfulness. A
concrete rank-two instance is computed on the companion page. (e) No
Kazhdan–Lusztig canonical basis, bar-invariant basis, cell theory, Soergel
bimodule or positivity statement is constructed here; those use the standard
basis and bar involution of [[thm-hh-generic-coxeter-hecke-standard-basis]] and
[[lem-hh-hecke-anti-involution-bar-and-normalization]] together with the
conversions of (2), and remain in their designated proof homes.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the group $W$ with length $\ell$, the generic Hecke algebra $H$ with its generators $T_s$, basis $(T_w)$ and parameters $v_s$, and the canonical data $V=\mathbb R^S$, $B$, $\rho$, $\Phi$ of the items named in the statement; in (3), a symmetric bilinear form $\beta$ on a real vector space $E$ with vectors $\alpha_s$ satisfying the stated hypotheses.

[F1] A bilinear form on $V$ over $F$ is a function $B:V\times V\to F$ that is linear in each variable separately. ([[def-bilinear-symmetric-skew-and-alternating-forms]])

[F2] The left and right radicals of a bilinear form $B$ are $\operatorname{rad}_L(B)=\{u:B(u,v)=0\text{ for every }v\}$ and $\operatorname{rad}_R(B)=\{v:B(u,v)=0\text{ for every }u\}$, and in the symmetric case they coincide. ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]])

[F3] A function $T:V\to W$ between vector spaces over one field is linear when $T(au+bv)=aT(u)+bT(v)$ for all $a,b\in F$, $u,v\in V$; a linear map vanishing on a spanning set vanishes identically, and a linear map sending a basis to linearly independent vectors is injective. ([[def-linear-map]], [[def-linear-subspace]], [[def-kernel-and-image-of-a-linear-map]])

[F4] A linear map has trivial kernel exactly when it is injective. ([[def-kernel-and-image-of-a-linear-map]])

[F5] An $R$-algebra homomorphism $f:A\to B$ is a unital ring homomorphism satisfying $f\circ\eta_A=\eta_B$, and such a map is automatically $R$-linear; two such homomorphisms agreeing on a set of generators agree everywhere. ([[def-algebra-over-a-commutative-ring]])

## Proof

1.1 (1) The Hecke generators $T_s$ satisfy the braid relations $T_sT_tT_s\cdots=T_tT_sT_t\cdots$ of the presentation of $H$ ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]]), and these are exactly the braid-pair identities of the Artin monoid, so the monoid universal property ([[lem-cg-artin-presentation-universal-properties-and-coxeter-surjection]] (1)) applied to $f(s):=T_s$, with target the multiplicative monoid of $H$, gives a unique monoid homomorphism $\Theta:A^{+}\to H$ with $\Theta(\sigma_s)=T_s$. For a reduced expression $w=s_1\cdots s_k$ one has $\Theta(b_w)=\Theta(\sigma_{s_1}\cdots\sigma_{s_k})=\Theta(\sigma_{s_1})\cdots\Theta(\sigma_{s_k})=T_{s_1}\cdots T_{s_k}=T_w$, the last equality and the independence of $T_w$ of the reduced expression being the defining properties of the standard basis ([[lem-hh-reduced-word-independence-and-length-multiplication]] (1)-(2), whose proof consumes [[thm-hh-matsumoto-reduced-word-theorem]]). The $R$-basis property of $(T_w)$ and the base-change compatibility of the specialised elements are clauses (2) and (4) of [[thm-hh-generic-coxeter-hecke-standard-basis]], quoted here as the interface they describe. [given, construct, algebra]

1.2 (2) All four quadratic relations are substitutions in the normalized relation (i), which is part of the presentation of $H$ ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]]). (ii) With $S_s=v_sT_s$ and $Q_s=v_s^{2}$: $S_s^{2}=v_s^{2}T_s^{2}=v_s^{2}\bigl((v_s-v_s^{-1})T_s+1\bigr)=(v_s^{2}-1)v_sT_s+v_s^{2}=(Q_s-1)S_s+Q_s$, which is equivalent to $(S_s-Q_s)(S_s+1)=0$. (iii) With $H_s=-T_s$: $H_s^{2}=T_s^{2}=(v_s-v_s^{-1})T_s+1=-(v_s-v_s^{-1})H_s+1=(v_s^{-1}-v_s)H_s+1$. (iv) With $U=T^{\mathrm{EW}}_s=-v_s^{-1}T_s$: $U^{2}=v_s^{-2}T_s^{2}=v_s^{-2}\bigl((v_s-v_s^{-1})T_s+1\bigr)=v_s^{-2}\bigl(-(v_s-v_s^{-1})v_sU+1\bigr)=(v_s^{-2}-1)U+v_s^{-2}$, which is $(U+1)(U-v_s^{-2})=0$. The relation (ii) is also recorded as part 4 of [[lem-hh-hecke-anti-involution-bar-and-normalization]]. [algebra]

1.3 (3) The map $\varphi$ is linear by construction on the basis $(e_s)$ of $V$ ([[def-cg-real-coxeter-form-and-reflection]]), and it is injective with image $\operatorname{span}\{\alpha_s\}$ because the vectors $\alpha_s$ are linearly independent by hypothesis [F3]. Fix $s$ and $t\ne s$, put $c:=c(s,t)$ (so $c=\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $c=1$ when $m(s,t)=\infty$), and recall $B(e_s,e_t)=-c$ and $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ ([[def-cg-real-coxeter-form-and-reflection]] (2),(3)); then the canonical representation satisfies $\rho(s)e_t=r_{e_s}(e_t)=e_t-2B(e_t,e_s)e_s=e_t+2c\,e_s$ for finite and infinite $m(s,t)$ alike, so $\varphi(\rho(s)e_t)=\frac{\alpha_t}{|\alpha_t|}+2c\frac{\alpha_s}{|\alpha_s|}$, while the reflection $r_{\alpha_s}$ of the hypothesis gives $r_{\alpha_s}(\varphi(e_t))=\frac{\alpha_t}{|\alpha_t|}-\frac{2\beta(\alpha_t,\alpha_s)}{|\alpha_t|\,\beta(\alpha_s,\alpha_s)}\alpha_s=\frac{\alpha_t}{|\alpha_t|}+2c\frac{\alpha_s}{|\alpha_s|}$ by the normalized-product hypothesis; for $t=s$ both sides equal $-\frac{\alpha_s}{|\alpha_s|}$ because $\rho(s)e_s=-e_s$ and $r_{\alpha_s}(\alpha_s)=-\alpha_s$. Since the $e_s$ form a basis and both sides are linear, the intertwining identity $\varphi(\rho(s)v)=r_{\alpha_s}(\varphi(v))$ holds for all $v\in V$ [F3]; the hypothesis that the assignment defines a representation of $W$ is what makes the reflection representation $s\mapsto r_{\alpha_s}$ well defined on $W$. Finally $\beta(\varphi e_s,\varphi e_t)=\frac{\beta(\alpha_s,\alpha_t)}{|\alpha_s||\alpha_t|}=B(e_s,e_t)$ for all $s,t$ — the case $s\ne t$ is the hypothesis and the case $s=t$ gives $1=B(e_s,e_s)$ — so by bilinearity $\beta(\varphi u,\varphi w)=B(u,w)$ for all $u,w\in V$ [F1]. [F1, F3, algebra]

1.4 (4)(b) Let $v\in\operatorname{rad}(B)$, so $B(v,e_s)=0$ for every $s\in S$. The canonical generators are the reflections $\rho(s)=r_{e_s}$, and $r_a(u)=u$ whenever $B(u,a)=0$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)); hence $\rho(s)v=v$ for every generator $s$, so every element of $W$, being a composite of generators and their inverses, fixes $v$; thus $\operatorname{rad}(B)$ is fixed pointwise by $\rho(W)$. [F2, given]

1.5 The canonical data form a realization as defined in (4)(a): take $\mathfrak h=V$, $\alpha_s^\vee=e_s$ and $\alpha_s=2B(-,e_s)$. The pairing on the diagonal is $2$, and the reflection formula is $\rho(s)v=v-\alpha_s(v)e_s$, so it defines the supplied representation of $W$. For a finite label $m=m(s,t)$ put $\theta=\pi/m$; then $x=y=-2\cos\theta$. The recursions defining $p_j,q_j$ give $p_j=q_j=(-1)^{j-1}\sin(j\theta)/\sin\theta$ for $j\ge1$: the cases $j=1,2$ and the induction follow from $2\cos\theta\sin(j\theta)=\sin((j+1)\theta)+\sin((j-1)\theta)$ ([[thm-sine-and-cosine-addition-formulas]]). The denominator is nonzero because $0<\theta\le\pi/2$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]), and $\sin(m\theta)=\sin\pi=0$ ([[thm-quarter-turn-values-and-shift-formulas]]), proving $p_m=q_m=0$. Infinite labels require no check. [given, algebra]

2.1 (2) The four presentations. For each of the three displayed substitutions let $H^{\bullet}$ denote the $R$-algebra presented by generators $X_s$ subject to the braid relations and the $\bullet$-quadratic relation of step 1.2. The assignment $X_s\mapsto$ the corresponding element of $H$ respects the $\bullet$-relation by step 1.2 and the braid relations: for even $m$ the two alternating words contain each of the two letters exactly $m/2$ times, and for odd $m$ the two letters are joined by an odd-labelled edge, so $v_s=v_t$ by the parameter convention of the Hecke presentation; hence the products of the scaling constants $v_{s_i}$, $-1$ or $v_{s_i}^{-1}$ attached to their letters coincide, and the assignment extends to an $R$-algebra homomorphism $H^{\bullet}\to H$ by the presentation's universal property and [F5]. The inverse assignment $T_s\mapsto$ the corresponding element of $H^{\bullet}$ is well defined by the same computation with the roles reversed, since the displayed inverse formulas have the same shape; for instance $T_s=v_s^{-1}S_s$ satisfies $(v_s^{-1}S_s)^{2}=v_s^{-2}\bigl((Q_s-1)S_s+Q_s\bigr)=(v_s-v_s^{-1})(v_s^{-1}S_s)+1$, which is the $T$-relation. The two assignments are inverse on generators, so they are mutually inverse $R$-algebra isomorphisms by the uniqueness clause of [F5].  [F5, step 1.2]

2.2 (4)(c) Assume $\dim\operatorname{rad}(B)=\dim V-1\ge1$. Then $\operatorname{rad}(B)$ is a hyperplane. For a root $\alpha\in\Phi$ the reflection $r_\alpha$ is defined with $B(\alpha,\alpha)=1$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (3)) and its fixed space is the kernel of the nonzero linear functional $B(-,\alpha)$, a hyperplane ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)) [F3]; as $\operatorname{rad}(B)$ is fixed pointwise by step 1.4 and contained in that kernel, the fixed hyperplane of $r_\alpha$ is exactly $\operatorname{rad}(B)$. If $s\ne t$ then $\rho(s)\ne\rho(t)$: otherwise $B(v,e_s)e_s=B(v,e_t)e_t$ for all $v\in V$, and evaluating at $v=e_s$ gives $e_s=B(e_s,e_t)e_t$, contradicting the linear independence of $e_s,e_t$. So two distinct reflections share the same fixed hyperplane and the correspondence "reflection $\mapsto$ its fixed hyperplane" is not injective, although $\rho$ is faithful with trivial kernel ([[thm-cg-root-length-criterion-and-faithfulness]] (3)) [F4]. [F2, F3, F4, step 1.4]

2.3 For the single-parameter coefficient conversion, a reduced word $w=s_1\cdots s_k$ gives $H_w=H_{s_1}\cdots H_{s_k}=(-1)^kT_w$ and $T^{\mathrm{KL}}_w=T^{\mathrm{KL}}_{s_1}\cdots T^{\mathrm{KL}}_{s_k}=v^{-k}H_w$ by the substitutions in step 1.2; their independence of the reduced word follows from that of $T_w$, since $k=\ell(w)$. Their scaling factors are units, so both families are bases by the standard-basis property in step 1.1. Substituting $T^{\mathrm{KL}}_y=v^{-\ell(y)}H_y$ in the given finite expansion gives $C_x=\sum_y v^{\ell(x)-\ell(y)}P_{y,x}(v^{-2})H_y$; uniqueness of coefficients in the $H$-basis proves the stated formula. The original-normalization parameter is $q=v^{-2}$ because the generator $T^{\mathrm{KL}}_s$ satisfies $(T^{\mathrm{KL}}_s+1)(T^{\mathrm{KL}}_s-q)=0$ by step 1.2. This is a change-of-basis computation for any supplied finite expansion, not an existence proof for the canonical basis or its polynomials. [step 1.1, step 1.2, algebra]

3.1 Scope and choice: clauses (4)(d) and (4)(e) record the interface and its boundary — the fact that a reflection-faithful realization is additional data not supplied by the Coxeter matrix, and the abstention from every Kazhdan–Lusztig, cell-theoretic, Soergel-bimodule and positivity construction, which belong to their designated proof homes. No such object is constructed here, and no choice is used: all four normalizations are explicit substitutions with constants in $R$ or $\mathbb R$, and the radical computation uses only the displayed defining formulas. [given] ∎
