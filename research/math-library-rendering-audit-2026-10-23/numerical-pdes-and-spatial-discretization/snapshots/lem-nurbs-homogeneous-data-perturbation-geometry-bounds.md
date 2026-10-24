---
id: lem-nurbs-homogeneous-data-perturbation-geometry-bounds
kind: lemma
title: Homogeneous NURBS data errors generate geometry and metric error bounds
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-countable-choice
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-positive-nurbs-basis-and-quotient-derivative
  - lem-nurbs-laplace-tensor-gap-under-map-error
  - thm-euclidean-inverse-function-theorem
  - thm-banach-fixed-point
  - thm-euclidean-space-complete
  - thm-heine-borel-rn
  - cor-bolzano-weierstrass-in-rn
  - lem-integer-part
  - lem-geometric-sequence-null
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Guermond, Finite Element Interpolation, Chapter 8, Meshes, complete 12-page chapter"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Takacs, Numerical Analysis of Isogeometric Methods, geometry and rational-spline conventions"
      url: https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf
---

## Statement

Assume Countable Choice. Let $Q=(0,1)^d$, $d\in\{2,3\}$. Use a common finite tensor-product B-spline basis $N_\alpha$ of coordinate degrees $p_r\ge1$, clamped endpoint multiplicities $p_r+1$, and interior multiplicities at most $p_r$. Only positive-length knot spans are cells. Exact homogeneous re-representation on this common basis must be established before comparing data on originally different grids; it is not inferred from a common geometric image. Let
$$A=\sum_\alpha a_\alpha N_\alpha,\quad W=\sum_\alpha w_\alpha N_\alpha,\quad F=A/W,\qquad A'=\sum_\alpha a'_\alpha N_\alpha,\quad W'=\sum_\alpha w'_\alpha N_\alpha,\quad G=A'/W'.$$
Here $a_\alpha=w_\alpha P_\alpha\in\mathbb R^d$ and $a'_\alpha=w'_\alpha P'_\alpha$. Suppose $F$ is admissible in [[def-nurbs-patch-map-and-rational-spline-space]], $w_-\le w_\alpha\le w_+$, $\|DF\|,\|(DF)^{-1}\|\le L$, $\det DF\ge j_->0$, and the global lower Lipschitz bound is explicitly $|F(x)-F(y)|\ge c|x-y|$ on $\overline Q$, $c>0$. The latter is the reciprocal of a global inverse Lipschitz bound and need not equal $1/L$.

Define finite data quantities
$$\epsilon_A=\max_\alpha|a'_\alpha-a_\alpha|,\quad \epsilon_W=\max_\alpha|w'_\alpha-w_\alpha|<w_-,\quad m=w_--\epsilon_W>0,\quad R=\max_\alpha|P_\alpha|,$$
$$H=\sum_\alpha\max_C\|\nabla N_\alpha\|_{L^\infty(C)},\quad T=\epsilon_A+R\epsilon_W,\qquad E_0=T/m,$$
$$E_1=\frac{H\epsilon_A+L\epsilon_W+RH\epsilon_W}{m}+\frac{T(w_++\epsilon_W)H}{m^2}.$$
All vector norms are Euclidean and all derivative norms are operator norms. $H$ is defined by the actual cell polynomials, so retains every degree, knot-spacing and multiplicity dependence. It is finite on each fixed finite nondegenerate grid; no uniform bound over degenerating grids is asserted. Then $w'_\alpha\ge m$, $G$ is continuous on $\overline Q$, and
$$e_0:=\|F-G\|_\infty\le E_0,\qquad e_1:=\|DF-DG\|_{L^\infty(\text{cells};op)}\le E_1.$$
If $E_1<\min(c,1/L)$, then $G$ is globally injective and bi-Lipschitz onto its image, and
$$|G(x)-G(y)|\ge(c-E_1)|x-y|,\quad \|DG\|\le L+E_1,\quad \|(DG)^{-1}\|\le\frac{L}{1-LE_1},\quad \det DG\ge j_-(1-LE_1)^d>0.$$
The image $G(Q)$ is open. For the admissible-patch conclusion, retain the explicit boundary hypothesis that $G(Q)$ is a Lipschitz domain with its finite piecewise $C^1$ knot-cell presentation. A sufficient verifiable alternative is that $G$ extends $C^1$ to a neighborhood of $\overline Q$ with nonsingular derivative there; this alternative holds when every interior multiplicity is at most $p_r-1$. With either boundary condition $G$ is admissible. No equality of the physical boundaries of $F(Q)$ and $G(Q)$ is asserted; their correspondence is $G\circ F^{-1}$.

For these admissible maps put
$$M=\max\left(1,L,L+E_1,\frac{L}{1-LE_1}\right),\qquad C_M=dM^{d+1}+2M^{d+3}.$$
Their unit-Laplace tensors satisfy $\|K_F-K_G\|_\infty\le C_ME_1$, and their bilinear-form difference is at most $C_ME_1\|\nabla v\|_2\|\nabla w\|_2$. For any family with uniformly bounded $L,c^{-1},R,w_+,m^{-1}$ and $H\epsilon_A+H\epsilon_W+\epsilon_W=O(h^s)$, $s>0$, the geometry form defect is $O(h^s)$. The bound is generated from homogeneous data; convergence of those data remains a separate approximation or certification obligation. Loads, quadrature and boundary-lift defects remain separate.

A concrete geometry generator is scalar rounding of every component of $a_\alpha$ and every $w_\alpha$ to the nearest multiple of $2^{-b}$ (ties go to the smaller integer), followed by $P'_\alpha=a'_\alpha/w'_\alpha$. Put $\eta_b=2^{-b-1}$ and
$$D=\frac{2H\sqrt d+2L+2RH}{w_-}+\frac{4(\sqrt d+R)(w_++w_-/2)H}{w_-^2}.$$
Choose an integer $b\ge0$ such that $\eta_b<\min(w_-/2,c/(2D),1/(2LD))$. Then this generator has $\epsilon_A\le\sqrt d\,\eta_b$, $\epsilon_W\le\eta_b$, $e_0\le2(\sqrt d+R)\eta_b/w_-$, and $e_1\le D\eta_b$; in particular it generates the positive denominator, Jacobian, and global injectivity bounds above. In the $C^1$ knot branch ($\mu_r\le p_r-1$) it generates admissible approximate domains without an independent boundary certificate. Taking $b$ so that $D\eta_b\le h^s$ produces a stated geometry derivative rate for any supplied grid family, with its actual $D$, rather than claiming a rate from positive weights or knot refinement alone.

## Facts & Assumptions

**Given:** The finite common basis, original admissible map, homogeneous coefficient errors, positive denominator margin and constants in the Statement; the strict smallness and boundary conditions only where their conclusions are invoked.

[F1] [[lem-positive-nurbs-basis-and-quotient-derivative]] gives nonnegative partition of unity, denominator bounds and the cellwise quotient derivative; [[def-nurbs-patch-map-and-rational-spline-space]] gives admissibility and global bi-Lipschitz conventions.

[F2] [[lem-nurbs-laplace-tensor-gap-under-map-error]] gives the displayed tensor and form estimate for two admissible maps once their derivative errors and map bounds are supplied.

[F3] [[thm-banach-fixed-point]] and [[thm-euclidean-space-complete]] give the unique limit of a specified contraction iteration in a closed Euclidean ball.

[F4] [[thm-euclidean-inverse-function-theorem]] gives local inverses for $C^1$ extensions with nonsingular derivative; [[thm-heine-borel-rn]] and [[cor-bolzano-weierstrass-in-rn]] supply compactness and the bounded-sequence subsequence argument at the boundary.

[F5] [[lem-integer-part]] supplies the adjacent integers bracketing a scaled scalar, so the specified nearest rounding exists; [[lem-geometric-sequence-null]] gives $2^{-b}\to0$.

[F6] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable on its interior, its endpoint difference is its derivative at an interior point times the interval length.

[A1] [[def-countable-choice]] is used to select hypothetical counterexample pairs or remote preimages in the sequential compactness arguments. All coefficient bounds, specified rounding and contraction iterations are explicit.

## Proof

1.1 Put $E=A'-A$ and $e=W'-W$. By [F1], $|E|\le\epsilon_A$, $|e|\le\epsilon_W$, $W'\ge m$ and $|F|\le R$. Direct differentiation of the finite polynomial pieces gives $\|DE\|\le H\epsilon_A$, $|De|\le H\epsilon_W$ and $|DW'|\le(w_++\epsilon_W)H$. These inequalities use $\|z\otimes q\|=|z||q|$ for each numerator term. Interior multiplicity at most degree makes every $N_\alpha$ continuous; thus $F,G,E,e$ have matching traces. Positive denominator makes each rational cell piece smooth through that cell's closure. [F1, given, algebra]

1.2 The exact identity $G-F=(E-Fe)/W'$ yields $|G-F|\le T/m=E_0$. Differentiating on a cell yields
$$DG-DF=\frac{DE-eDF-F\otimes De}{W'}-\frac{(E-Fe)\otimes DW'}{(W')^2}.$$
Using step 1.1 and $\|DF\|\le L$ proves $\|DG-DF\|\le E_1$. No derivative error is assumed in this argument. [step 1.1, given, algebra]

2.1 The continuous piecewise smooth function $q=G-F$ is $E_1$-Lipschitz on the convex box. The finitely many knot hyperplanes have dense complement in $Q$; by [A1], approximate any $x,y\in\overline Q$ by sequences $x_n,y_n\in Q$ whose coordinates avoid all knot values. The segment $[x_n,y_n]$ is not contained in any knot hyperplane and meets each such hyperplane in at most one point, so it splits into finitely many subsegments, each in one closed cell. For endpoints $a,b$ of one subsegment, if $q(a)=q(b)$ the desired bound is immediate; otherwise set $e=(q(b)-q(a))/|q(b)-q(a)|$ and apply [F6] to $t\mapsto e\cdot q(a+t(b-a))$. This function is continuous on $[0,1]$ and differentiable on $(0,1)$ using the cell expression, so $|q(b)-q(a)|=|e\cdot(Dq(\zeta)(b-a))|\le E_1|b-a|$ for some $\zeta$ in the subsegment. Summing subsegment lengths proves $|q(x_n)-q(y_n)|\le E_1|x_n-y_n|$. Continuity of $q$ gives $|q(x)-q(y)|\le E_1|x-y|$ in the limit. Applying the same scalar mean-value argument to $F$, whose cell derivative norm is at most $L$, gives $|F(x)-F(y)|\le L|x-y|$ on $\overline Q$. Consequently $|G(x)-G(y)|\ge(c-E_1)|x-y|$ and $|G(x)-G(y)|\le(L+E_1)|x-y|$. The first inequality proves global injectivity and the inverse Lipschitz bound. [A1, F6, step 1.1, step 1.2, given, algebra]

2.2 At every cell point, $DG=DF(I+(DF)^{-1}(DG-DF))$ and the second term in parentheses has norm at most $LE_1<1$. Its smallest singular value is at least $1-LE_1$, so the inverse bound is $L/(1-LE_1)$. Along the straight matrix homotopy from $DF$ to $DG$, the same bound prevents a singular matrix; the determinant therefore keeps its positive sign. The determinant's absolute value is the product of singular values, giving $\det DG\ge j_-(1-LE_1)^d$. The derivative upper bound is the triangle inequality. These inequalities extend to each closed cell by continuity of that cell's polynomial-rational expression. [step 1.2, given, algebra]

3.1 Openness needs no topological or choice assumption. On the original open image $\Omega=F(Q)$ define $r=q\circ F^{-1}$; step 2.1 and the global lower bound give $\operatorname{Lip}(r)\le E_1/c=:t<1$. Fix $z_0\in\Omega$ and a closed ball of radius $\rho$ centered there contained in $\Omega$. For $y$ within $(1-t)\rho/2$ of $z_0+r(z_0)$, $T_y(z)=y-r(z)$ maps this closed ball into itself and contracts by $t$: indeed $|T_y(z)-z_0|\le(1-t)\rho/2+t\rho<\rho$. [F3] supplies a unique fixed point, and its equation $z+r(z)=y$ puts this neighborhood inside $G(Q)$. Hence $G(Q)$ is open. [F3, step 2.1, given, algebra]

4.1 The explicitly assumed Lipschitz boundary presentation, step 2.1, step 2.2 and the cellwise smooth local inverse [F4] give exactly admissibility [F1]. For the sufficient $C^1$ extension alternative, local inverses [F4] map boundary coordinate halfspaces near a box point to finitely many $C^1$ inequalities with independent inward gradients. Choose the image of the sum of the active inward coordinate vectors as vertical direction; every active inequality has positive vertical derivative. The one-variable inverse furnished by [F4] expresses each as $t>g_i(y)$, with $g_i$ locally $C^1$. Their intersection is $t>\max_i g_i(y)$, a Lipschitz graph. Shrink this neighborhood so local coordinates describe the image of a neighborhood of the chosen preimage. If remote preimages still entered every such shrinking image neighborhood, choose points $y_n$ in those neighborhoods with preimages $x_n$ outside that fixed preimage neighborhood. Compactness [F4] gives a convergent subsequence with limit $x\in\overline Q$ and continuity gives $G(x)=G(x_0)$, contradicting injectivity from step 2.1. Thus no remote image component changes the local graph. The finitely many smooth rational faces give the required boundary presentation. If all interior multiplicities are at most $p_r-1$, the polynomial pieces match through first derivatives, hence the rational pieces give a $C^1$ extension across internal faces. At exterior box faces extend the outermost polynomial pieces with the same matching identities. Positive denominator and nonsingular derivatives persist in a sufficiently small neighborhood of the compact box by continuity, establishing the alternative. [A1, F1, F4, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 Step 2.2 gives the map bounds $M$, and step 1.2 gives $e_1\le E_1$. Apply [F2] without repeating its determinant/inverse calculation to obtain the tensor and form bounds. In a family with the specified uniform constants, $E_1=O(h^s)$, so the smallness holds eventually, $M$ remains bounded and the geometry form defect is $O(h^s)$. This statement does not bound a changed load or quadrature rule. [F2, step 1.2, step 2.2, step 4.1, given, algebra]

6.1 By [F5], bracket $2^b x$ between adjacent integers, select the closer endpoint with the prescribed tie rule, and rescale. A real scalar therefore differs from its specified nearest grid multiple by at most $\eta_b$. Componentwise rounding therefore gives the stated $\sqrt d\,\eta_b$ homogeneous numerator error and $\eta_b$ weight error. Since $\eta_b<w_-/2$, $m\ge w_-/2$, $T\le(\sqrt d+R)\eta_b$, and $w_++\epsilon_W\le w_++w_-/2$. Substitute these bounds in $E_0,E_1$ to obtain $E_0\le2(\sqrt d+R)\eta_b/w_-$ and $E_1\le D\eta_b<\min(c/2,1/(2L))$. The denominator, value, derivative, determinant, injectivity and openness conclusions follow from steps 1.1–3.1. A sufficiently large integer $b$ exists because $2^{-b}$ tends to zero; this is a specified integer rounding construction, with no arbitrary choice. The $C^1$ knot branch of step 4.1 gives its boundary admissibility. Step 5.1 then gives the geometry form rate when $D\eta_b\le h^s$. [F5, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, algebra] ∎

