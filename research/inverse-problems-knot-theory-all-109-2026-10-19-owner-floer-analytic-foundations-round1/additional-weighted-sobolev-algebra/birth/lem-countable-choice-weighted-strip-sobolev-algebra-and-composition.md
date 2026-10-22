---
id: lem-countable-choice-weighted-strip-sobolev-algebra-and-composition
kind: lemma
title: "Weighted strip Sobolev algebra and composition under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-sobolev-space-wkp-and-its-norm, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lawrence C. Evans, Partial Differential Equations, Sobolev estimates and composition"
      url: "https://bookstore.ams.org/gsm-19-r/"
---

## Statement

Assume Countable Choice and put $S=\mathbb R\times(0,1)$. For $k=1,2,3$ there is a bounded linear extension $H^k(S)\to H^k(\mathbb R^2)$, using no boundary condition. The spaces have the estimates $H^1(S)\subset L^4(S)$, $H^2(S)\subset C^0(\overline S)\cap L^\infty(S)$, and $H^3(S)\subset C^1(\overline S)$, with bounded supremum norms in the last two assertions. In particular
$$\|fg\|_{H^2}\le C\|f\|_{H^2}\|g\|_{H^2}.$$

Fix smooth $\rho\ge0$ equal to $|s|$ outside a compact interval, with bounded derivatives, and $\delta\ge0$. Set $w=e^{\delta\rho}$ and $\|u\|_{H^k_\delta}=\|wu\|_{H^k}$. The same embeddings hold with $w|u|$, or $w(|u|+|du|)$ for $k=3$, bounded by the weighted norm. Products satisfy
$$\|fg\|_{H^2_\delta}\le C_\delta\|f\|_{H^2_\delta}\|g\|_{H^2_\delta},\qquad \|du\|_{H^2_\delta}\le C_\delta\|u\|_{H^3_\delta}.$$

Let $h(s,t,z)$ be smooth up to the boundary for $z$ in a finite-dimensional ball about zero, with bounded mixed derivatives of source order at most two and every finite target order on smaller target balls, and $h(s,t,0)=0$. Then $u\mapsto h(s,t,u)$ is a smooth map from the open subset of $H^2_\delta$ whose supremum lies in that ball to $H^2_\delta$. Its derivatives are the ordinary pointwise derivatives of $h$. On a sufficiently small bounded norm ball the remainder $Q(u)=h(s,t,u)-h_z(s,t,0)u$ satisfies
$$\|Q(u)-Q(v)\|_{H^2_\delta}\le C\bigl(\|u\|_{H^2_\delta}+\|v\|_{H^2_\delta}\bigr)\|u-v\|_{H^2_\delta}.$$
All statements hold componentwise for finite-dimensional real or complex targets.

## Statement references

[[def-countable-choice]]

[[def-sobolev-space-wkp-and-its-norm]]

## Facts & Assumptions

**Given:** Countable Choice, the strip, the indicated weak Sobolev spaces, smooth weight, and smooth bounded coefficient data in the statement.

[F1] The actual Countable Choice proof in [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] approximates plane $H^k$ functions by smooth compactly supported ones. We construct the boundary extension explicitly below before using this density on the strip.

## Proof

1.1 We first describe weak endpoint values needed for extension. If $g,g_t\in L^2$ on a bounded-height strip and $g_t$ is its weak normal derivative, then on almost every vertical line $g$ is a primitive of $g_t$ plus a constant. Indeed Fubini in the weak derivative identity, using a countable dense family of one-dimensional tests, gives that identity on almost every line. Subtract a primitive; the remaining distribution has derivative zero, hence is constant since every integral-zero compact test is the derivative of a compact test. The primitive has a finite endpoint limit because $g_t$ is integrable on a finite interval. Averaging its fundamental-theorem identity in that interval bounds the $L^2$ norm of the endpoint value by $C(\|g\|_2+\|g_t\|_2)$. Thus for $f\in H^k(S)$ every derivative of order at most $k-1$ has such a weak normal endpoint value. Tangential differentiation under reflected formulas is justified by tests cut off close to the edge; those cutoffs acquire no tangential derivative. [given, construct, algebra]

2.1 For fixed $k\in\{1,2,3\}$ choose the unique real coefficients $a_1,\ldots,a_k$ satisfying $$\sum_{j=1}^k a_j(-j)^\ell=1\qquad(0\le\ell<k).$$ The Vandermonde matrix is invertible since the nodes $-1,\ldots,-k$ are distinct; these are finite deterministic algebraic choices. For $-\epsilon<t<0$ extend by $\sum_j a_jf(s,-jt)$, and for $1<t<1+\epsilon$ extend by $\sum_j a_jf(s,1-j(t-1))$, choosing $k\epsilon<1/2$. Across each edge all weak normal jets through order $k-1$ match by these identities and step 1.1, also after tangential derivatives of admissible total order. Piecewise integration by parts therefore gives the ordinary reflected weak derivatives through order $k$, with no line atom. Their $L^2$ bounds follow by the finite sum and changes of variable, so the extension is bounded in $H^k$ on the larger strip. Multiply by a fixed smooth vertical cutoff equal to one on $[0,1]$ and supported in $(-\epsilon,1+\epsilon)$, and extend by zero to the plane. This gives a bounded linear plane extension $E_k$. No trace or boundary-density theorem was assumed. By [F1] and restriction it also supplies density on the strip of restrictions of smooth plane functions. [F1, step 1.1, construct, algebra]

3.1 The embedding estimates follow from elementary fundamental-theorem identities on the plane. For smooth compactly supported scalar $f$, put $A(t)=2\int|ff_s|(s,t)ds$ and $B(s)=2\int|ff_t|(s,t)dt$. The one-dimensional theorem gives $|f(s,t)|^2\le A(t)$ and $|f(s,t)|^2\le B(s)$. Hence $$\|f\|_4^4\le\left(2\int|ff_s|\right)\left(2\int|ff_t|\right)\le4\|f\|_2^2\|f_s\|_2\|f_t\|_2\le C\|f\|_{H^1}^4.$$ Twice applying that theorem to $|f|^2$ gives $$|f(s,t)|^2\le\int_{\mathbb R^2}|\partial_s\partial_t|f|^2|\le2\bigl(\|f_s\|_2\|f_t\|_2+\|f\|_2\|f_{st}\|_2\bigr)\le C\|f\|_{H^2}^2.$$ By [F1] these inequalities extend to all plane Sobolev classes. In the second case smooth approximations are uniformly Cauchy and give a unique continuous representative; applying the same argument to first derivatives of $H^3$ approximations and passing their fundamental theorem along segments gives a $C^1$ representative. Restricting $E_kf$ to the closed strip gives all unweighted assertions, including boundary values. Vector versions follow componentwise. [F1, step 2.1, construct, algebra]

4.1 For smooth $f,g$, the weak product rule through order two and step 3.1 give the algebra estimate. Zeroth and terms with one or two derivatives on only one factor use $H^2\subset L^\infty$; the remaining second-derivative term is bounded by $\|Df\|_4\|Dg\|_4\le C\|f\|_{H^2}\|g\|_{H^2}$ using $H^1\subset L^4$ on the first derivatives. Density from step 2.1 passes the product and its weak derivatives to general $H^2$ maps; the product's continuous representative is their pointwise product. A smooth coefficient with bounded source derivatives through order two acts as a bounded multiplier by the same product formula. [step 2.1, step 3.1, construct, algebra]

5.1 The extension operators commute with the weight, since they reflect only $t$. Multiplication by $w^{-1}$ is bounded on $H^k$, $k\le3$, since $w^{-1}\le1$ and its derivatives are bounded; logarithmic derivatives of $w$ through these orders are bounded as well. Thus $H^k_\delta$ embeds continuously in $H^k$. Applying step 3.1 to $wu$ gives the claimed weighted value bound; for first derivatives use $wD_su=D_s(wu)-\delta\rho'wu$ and $wD_tu=D_t(wu)$, proving both the weighted $C^1$ bound and the derivative estimate. For products write $wfg=(wf)g$ and apply step 4.1, using the unweighted norm bound for $g$. More generally any finite product has the analogous estimate with one weighted factor and the others unweighted, which will be used for composition. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 We prove the composition bounds first at weak derivative order two. On a norm-bounded set whose images stay in a smaller target ball, the chain rule gives terms $h_zD^2u$, $h_{zz}Du\,Du$, terms with one explicit source derivative and $Du$, and the twice explicit source derivative $h_{ss}$, $h_{st}$ or $h_{tt}$ evaluated at $u$. The last coefficients vanish at $u=0$, because $h(s,t,0)=0$ identically, so are bounded by $C|u|$. The zeroth and first order terms have the same bound or a single derivative of $u$. After multiplying by $w$, all linear terms are bounded in $L^2$ by $C\|u\|_{H^2_\delta}$. In the quadratic derivative term use $\|(wDu)Du\|_2\le\|wDu\|_4\|Du\|_4\le C\|u\|_{H^2_\delta}^2$, from steps 3.1 and 5.1. Hence $$\|h(\cdot,u)\|_{H^2_\delta}\le C\bigl(\|u\|_{H^2_\delta}+\|u\|_{H^2_\delta}^2\bigr).$$ These weak chain formulas are justified by approximating $wu$ smoothly on the plane and dividing by $w$; the approximants converge in weighted $H^2$ and uniformly by step 3.1. On a smaller target ball all coefficient compositions converge uniformly, and the first derivative factors converge in $L^4$, so every displayed term converges in the required weighted $L^2$. Thus the formulas and estimates hold for the weak map itself. [F1, step 2.1, step 3.1, step 5.1, construct, algebra]

7.1 For each target derivative order $r$, write $h_{z^r}(s,t,u)=h_{z^r}(s,t,0)+[h_{z^r}(s,t,u)-h_{z^r}(s,t,0)]$. The first term is a bounded smooth $H^2$ multiplier, even though it need not be an $L^2$ function on this infinite strip. The bracket satisfies step 6.1, since it vanishes at zero. Thus $h_{z^r}(\cdot,u)$ multiplies finite products of $H^2_\delta$ variations with locally bounded operator norm, by steps 4.1 and 5.1. Its dependence on $u$ is continuous: a first target difference is an integral of $h_{z^{r+1}}$ times the difference of the inputs, giving the same norm bound. Taylor's integral formula now proves differentiability with pointwise derivative $h_z(\cdot,u)\xi$, with remainder bounded by $C\|\xi\|_{H^2_\delta}^2$. Repeating with the coefficient derivatives proves $C^\infty$ regularity and the asserted pointwise higher derivative formula. The integrals are limits of Riemann sums of continuous Banach-valued functions on a compact interval, justified by completeness; no arbitrary measurable selection is involved. [step 4.1, step 5.1, step 6.1, construct, algebra]

8.1 Finally $DQ(u)\xi=[h_z(\cdot,u)-h_z(\cdot,0)]\xi$. Step 6.1 applied to the bracket and the product bound give $\|DQ(u)\|\le C\|u\|_{H^2_\delta}$ on a small bounded ball. Integrate this derivative along the segment from $v$ to $u$ to obtain $$\|Q(u)-Q(v)\|_{H^2_\delta}\le C(\|u\|_{H^2_\delta}+\|v\|_{H^2_\delta})\|u-v\|_{H^2_\delta}.$$ The finite extensions, weak primitive arguments, explicit approximations and norm-convergent operations above use only Countable Choice. This completes the weighted algebra, composition and quadratic-remainder statements, with the genuine $H^3$ rather than $H^1$ topology available for $C^1$ nonlinear map charts. [step 5.1, step 6.1, step 7.1, construct, algebra] ∎
