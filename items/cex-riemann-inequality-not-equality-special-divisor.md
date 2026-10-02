---
id: cex-riemann-inequality-not-equality-special-divisor
kind: counterexample
title: "The Riemann inequality is not an equality for special divisors"
status: draft
origin: pipeline
deps:
  - cor-projective-plane-bezout-length-form
  - cor-smooth-variety-classical-scheme-conventions-agree
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-chain-dimension-open-cover
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-projective-hypersurface-affine-pieces
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - thm-affine-domain-dimension-transcendence-degree
  - thm-dimension-formula-for-affine-domains
  - thm-h0-structure-sheaf-proper-curve
  - thm-jacobian-criterion-affine-variety
  - thm-jacobian-criterion-smooth-morphism
  - thm-krull-principal-ideal-theorem
  - thm-projective-space-proper-over-base
  - thm-riemann-roch-as-l-minus-index
  - thm-plane-curve-arithmetic-genus
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Ch. 18.5 and Ch. 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Counterexample

Assume the Axiom of Choice as inherited from the Riemann--Roch, curve-divisor,
Jacobian, weighted-Bezout, and projective-properness suppliers. Let $k$ be any
field and let $C$ be a smooth proper geometrically integral
curve over $k$ of genus $g\ge1$
([[def-genus-euler-characteristic-curve]]). The zero divisor $D=0$ satisfies
$$l(0)=1,\qquad i(0)=h^1(C,\mathcal O_C)=g\ge1,$$
whereas the Riemann inequality gives only
$$l(0)\ge\deg_k(0)+1-g=1-g.$$
Thus the inequality is strict, with excess
$$l(0)-\bigl(\deg_k(0)+1-g\bigr)=g=i(0).$$
More generally, Riemann--Roch gives
$$l(D)=\deg_k(D)+1-g+i(D)$$
for every divisor $D$, so equality with the lower bound holds exactly when
$i(D)=0$, that is, exactly when $D$ is nonspecial
([[def-nonspecial-divisor]]). In particular, every special divisor gives a
strict inequality.

A concrete instance is the Fermat quartic
$$X=V_+(x_0^4+x_1^4+x_2^4)\subseteq\mathbb P^2_k$$
over an algebraically closed field $k$ of characteristic zero. Steps 1.2, 1.3,
2.3, and 3.1 verify scheme-theoretically that it is smooth, pure of dimension
one, geometrically integral, and of genus three. Its zero divisor therefore has
$l(0)=1$, $i(0)=3$, and the strict inequality $1>-2$.

**Supplier status.** The Fermat geometry is proved below without using the
generic complete-intersection existence claim. The genus formula and the
Riemann--Roch, degree, and divisor interfaces cited below are draft suppliers
in this run; this repair does not certify their separate proofs.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the Riemann--Roch, curve-divisor,
Jacobian, weighted-Bezout, and projective-properness suppliers; a field $k$,
a smooth proper geometrically integral curve $C$ over
$k$ of genus $g\ge1$, and the zero divisor $D=0$ on $C$.

[F1] Riemann--Roch as $l$ minus the index of speciality gives, for every
divisor $D$,
$$l(D)-i(D)=\deg_k(D)+1-g,\qquad i(D)=h^1(C,\mathcal O_C(D))\ge0.$$
Thus equality in the Riemann inequality holds exactly when $i(D)=0$, which is
the definition of nonspeciality.
([[thm-riemann-roch-as-l-minus-index]], [[def-nonspecial-divisor]])

[F2] The zero divisor has $l(0)=\dim_kH^0(C,\mathcal O_C)=1$, since the
global sections of the structure sheaf on a proper integral curve are
canonically $k$. ([[def-little-l-divisor]],
[[thm-h0-structure-sheaf-proper-curve]])

[F3] The index of speciality of the zero divisor is
$i(0)=h^1(C,\mathcal O_C)=g(C)$. ([[def-index-speciality-divisor]],
[[def-genus-euler-characteristic-curve]])

[F4] The zero divisor has degree zero, and divisor degree is the additive
weighted sum of closed-point coefficients.
([[def-degree-divisor-proper-curve]])

[F5] In an affine plane chart, the smoothness criterion for a scheme presented
by the actual equation $f$ is given by an invertible $1\times1$ Jacobian
minor. At a rational closed point, regularity of its local ring is equivalent
to Jacobian rank $2-\dim A_{\mathfrak m}$, even if the actual ideal $(f)$ is
not radical.
([[thm-jacobian-criterion-smooth-morphism]],
[[thm-jacobian-criterion-affine-variety]])

[F6] In the Fermat calculation, $k$ is algebraically closed. For a nonzero
nonunit equation $f$ in a chart ring $k[u,v]$, all irreducible components of
the hypersurface have dimension one: each minimal
prime over $(f)$ has height one by the principal ideal theorem, and the
affine-domain dimension formula gives quotient dimension one. At a closed
point with maximal ideal $\mathfrak m$, its residue field is finite over $k$
and hence equals $k$; the dimension formula gives
$\dim k[u,v]_{\mathfrak m}=2$. A minimal prime over $f$ in this local ring is
nonzero and has height one by the principal ideal theorem. No prime can lie
strictly between it and $\mathfrak m$, since that would give a chain of
length at least three in a ring of dimension two. Therefore the hypersurface
local ring has dimension one. The polynomial ring is Noetherian. The same
minimal-prime calculation gives dimension one for every nonempty affine chart
component. Every projective irreducible component meets a standard chart, and
its intersection is a chart component, so every projective component has
dimension one; the open-cover dimension lemma gives scheme dimension one as
well.
([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]],
[[thm-dimension-formula-for-affine-domains]],
[[thm-affine-domain-dimension-transcendence-degree]],
[[thm-krull-principal-ideal-theorem]],
[[lem-chain-dimension-open-cover]],
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]])

[F7] The scheme-theoretic projective Bezout formula gives a nonempty finite
intersection for coprime positive-degree forms and computes its local lengths;
over an algebraically closed field the residue-degree weights are all one.
([[cor-projective-plane-bezout-length-form]])

[F8] A smooth finite-type scheme over an algebraically closed field has
regular local rings. ([[cor-smooth-variety-classical-scheme-conventions-agree]])

[F9] The published arithmetic-genus theorem gives
$p_a(X)=(d-1)(d-2)/2$ for an integral plane curve cut out by a homogeneous
form of degree $d$ ([[thm-plane-curve-arithmetic-genus]]). For the smooth
proper geometrically integral curve established in steps 1.2, 1.3, and 2.3,
the current genus definition identifies $g(X)=p_a(X)=1-\chi(\mathcal O_X)$
([[def-genus-euler-characteristic-curve]]).

[F10] The Axiom of Choice is inherited from the Riemann--Roch, curve and
divisor, dimension and Jacobian, weighted-Bezout, and projective-properness
suppliers used here. ([[def-axiom-of-choice]])

[F11] A finite-variable polynomial ring over a field is a UFD, so every
irreducible polynomial in it is prime.
([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]])

[F12] Projective space over a field is proper; closed immersions and
compositions of proper morphisms are proper. Hence a closed subscheme of
$\mathbf P^2_k$ is proper over $k$.
([[thm-projective-space-proper-over-base]],
[[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

## Proof

**Proof technique:** compute the zero-divisor terms, prove the general
strictness statement by rearranging Riemann--Roch, and realize the genus-three
case by an explicit Fermat quartic.

1.1 The zero divisor is special. By [F3], $i(0)=g\ge1$, so it is nonzero; hence [F1] says that $D=0$ is special. By [F2], $l(0)=1$. [F1, F2, F3]
1.2 (Smoothness of the Fermat quartic.) Let $k$ be algebraically closed of characteristic zero, set $F=x_0^4+x_1^4+x_2^4$, and let $X=V_+(F)\subseteq\mathbb P^2_k$. In the chart $x_i\ne0$, set $x_i=1$ and write the other coordinates as $u,v$; the equation is $f=1+u^4+v^4$. The opens $D(u)$ and $D(v)$ cover this affine hypersurface, since no prime containing both $u$ and $v$ can contain $f=1+u^4+v^4$. On $D(u)$, the derivative $\partial f/\partial u=4u^3$ is a unit; on $D(v)$, $\partial f/\partial v=4v^3$ is a unit. Each is therefore a standard smooth presentation by [F5], so the three projective charts show that $X$ is smooth over $k$. The scheme is nonempty: choose $a\in k$ with $a^4=-1$; then $[1:a:0]\in X$. [F5, given]
1.3 (Scheme dimension.) In each of the three standard charts, identified by [[lem-projective-hypersurface-affine-pieces]], the coordinate ring is $k[u,v]/(f)$ with $f=1+u^4+v^4$, a nonzero nonunit. The polynomial ring $k[u,v]$ is Noetherian. Every minimal prime $\mathfrak q$ over $(f)$ is nonzero and has height one by [F6] and the principal ideal theorem. The dimension formula gives $\operatorname{trdeg}_k\operatorname{Frac}(k[u,v]/\mathfrak q)=1$, and affine-domain dimension equals this transcendence degree. Thus every irreducible component in every nonempty chart has dimension one. Since the standard charts cover $X$, it is pure of dimension one; the same calculation at a closed point gives local dimension one. The scheme $X$ is proper because it is the closed subscheme $V_+(F)\hookrightarrow\mathbf P^2_k$: projective space is proper over $k$, and the closed immersion and composite are proper by [F12]. [F6, F12, given]
2.1 The inequality at $D=0$ is strict. By [F1] and [F4], $l(0)-i(0)=\deg_k(0)+1-g=1-g.$ Using step 1.1 gives $l(0)=1>1-g=\deg_k(0)+1-g$ because $g\ge1$, and the excess is $1-(1-g)=g=i(0).$ [F1, F4, step 1.1]
2.2 For any divisor $D$, rearranging [F1] gives $l(D)=\deg_k(D)+1-g+i(D).$ Since $i(D)\ge0$, the Riemann inequality is strict exactly when $i(D)>0$, which is exactly when $D$ is special; equality holds exactly for nonspecial divisors. This proves the general claim independently of the concrete example. [F1, step 1.1]
2.3 (Integrality.) We show that $F$ is square-free and irreducible. Suppose an irreducible homogeneous factor $G$ occurs at least twice. Choose a line $\ell=0$ not containing $G$; [F7] gives a closed point $p\in V_+(G,\ell)$. On a chart through $p$, the actual equation $f$ of $X$ lies in the square of the maximal ideal, so its Jacobian row is zero. The local ring has dimension one by step 1.3, and [F5] says it is not regular, contradicting smoothness from step 1.2 and [F8]. Hence $F$ is square-free. If the square-free $F$ were reducible, choose a nonconstant irreducible factor $G$ and let $H$ be the product of the remaining factors. Then $G,H$ are coprime and have positive degree. By [F7], they meet at a closed point $p$. There $f=gh$ lies in the square of the maximal ideal, so the Jacobian row again vanishes. The local ring has dimension one, contradicting regularity exactly as above. Thus $F$ is irreducible. Since $k[x_0,x_1,x_2]$ is a UFD by [F11], $(F)$ is prime, and $X$ is integral. As $k$ is algebraically closed, this proves geometric integrality. [F5, F6, F7, F8, step 1.2, step 1.3]
3.1 (Genus three.) Steps 1.2, 1.3, and 2.3 show that $X$ is a smooth proper geometrically integral plane curve cut out by a homogeneous quartic. The arithmetic-genus theorem in [F9] gives $p_a(X)=\frac{(4-1)(4-2)}{2}=3$, and the genus definition in [F9] identifies $g(X)=p_a(X)$ for this smooth curve. Hence $g(X)=3$, as needed for the concrete instance in the Counterexample section. [F9, step 1.2, step 1.3, step 2.3]
4.1 (Conclusion and choice accounting.) Steps 1.1 and 2.1 show that the zero divisor on any curve of genus at least one gives a strict Riemann inequality with excess exactly $i(0)$. Step 2.2 proves the stated criterion for all divisors. Steps 1.2, 1.3, 2.3, and 3.1 give the promised characteristic-zero genus-three example, where the inequality is $1>-2$. The Axiom of Choice [F10] is inherited through the Riemann--Roch, affine-dimension, Jacobian, and Bezout suppliers; no additional choice is made. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 2.2, step 3.1] ∎
