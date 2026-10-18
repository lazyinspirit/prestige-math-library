---
{
  "id": "lem-hp-simplex-p-explicit-conforming-interpolant",
  "kind": "lemma",
  "title": "Constructive varying-degree triangle interpolation in unweighted H1",
  "status": "draft",
  "origin": "pipeline",
  "pipeline_run": "numerical-analysis-remaining-71-2026-10-17",
  "deps": [
    "def-hp-variable-degree-spaces-on-matching-meshes",
    "def-hp-integrated-legendre-projector",
    "lem-hp-triangle-degree-uniform-strong-edge-lift",
    "thm-hp-triangle-unweighted-smooth-approximation",
    "lem-variable-degree-polynomial-spaces-are-h1-conforming",
    "thm-reference-simplex-trace-and-gauss-green",
    "thm-lagrange-point-evaluation-threshold-on-reference-simplex",
    "lem-smooth-density-on-reference-simplex",
    "lem-shape-regular-affine-simplex-scaling",
    "thm-cauchy-schwarz-in-an-inner-product-space",
    "thm-first-fundamental-theorem-of-calculus-for-l-one",
    "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives",
    "def-axiom-of-choice"
  ],
  "justified_by": [],
  "proof_strategy": "direct",
  "provenance": {
    "statement": "ai-altered",
    "proof": "ai-altered"
  },
  "sources": {
    "references": [
      {
        "title": "Sch\u00f6berl, p-version FEM, \u00a730.4.2",
        "url": "https://jschoeberl.github.io/iFEM/pversion/hpfem.html"
      }
    ]
  }
}
---

## Statement

Assume the Axiom of Choice. Let $\mathcal T$ be a finite matching shape-regular affine triangulation in two dimensions, $p_K\ge1$ arbitrary finite integer degrees, and $u$ a continuous function on its closure with $u|_K\in H^2(K)$. For each interior edge let $p_E=\min(p_K,p_{K'})$; on boundary edges let $p_E=p_K$. Set $m_K=\min_{E\subset\partial K}p_E$. There is a constructive linear interpolant $I_{\mathcal T,p}u$ in the conforming space of [[def-hp-variable-degree-spaces-on-matching-meshes]]. It preserves zero boundary traces, and for every $q\in\mathbb P_{m_K}(K)$,
$$|u-I_{\mathcal T,p}u|_{H^1(K)}\le |u-q|_{H^1(K)}+C_\gamma\sum_{E\subset\partial K}\left(\ell_E^{-1/2}\|u-q\|_{L^2(E)}+\ell_E^{1/2}\|\partial_\tau(u-q)\|_{L^2(E)}\right).$$
The same right side, augmented by $h_K^{-1}\|u-q\|_{L^2(K)}$ and multiplied by $C_\gamma$, controls the scaled full norm $h_K^{-1}\|u-I_{\mathcal T,p}u\|_{L^2(K)}+|u-I_{\mathcal T,p}u|_{H^1(K)}$. In particular if integer $r\ge5$, $m_K\ge2r-4$, $n_K=\lfloor m_K/2\rfloor$, and $u|_K\in H^r(K)$, then
$$|u-I_{\mathcal T,p}u|_{H^1(K)}\le C_{r,\gamma}h_K^{r-1}\left(\frac{(n_K-r+3)!}{(n_K+r-5)!}\right)^{1/2}|u|_{H^r(K)}.$$
For $m_K\ge4(r-2)$ the factorial factor is at most $(4/m_K)^{r-4}$. The constants are independent of every degree and of degree ratios; the effective degree $m_K$ records low neighboring trace degrees. This is the selected smooth-data two-dimensional branch. No optimal fractional-trace lift, arbitrary-dimensional result, or optimal Sobolev rate is asserted.

## Facts & Assumptions

**Given:** The triangle mesh, continuous piecewise $H^2$ input, finite degrees $p_K\ge1$, full Choice, and the optional $r$-regularity hypotheses.

[F1] [[def-hp-integrated-legendre-projector]] defines the one-dimensional endpoint-preserving integrated $L^2$ derivative projection. Orthogonal projection is a contraction by Pythagoras and [[thm-cauchy-schwarz-in-an-inner-product-space]]. [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]] and [[thm-first-fundamental-theorem-of-calculus-for-l-one]] give its endpoint identity for ordinary $H^1$ edge data.

[F2] [[lem-hp-triangle-degree-uniform-strong-edge-lift]] constructs endpoint-zero edge lifts of exactly the required degree and proves their strong edge-norm stability.

[F3] [[thm-hp-triangle-unweighted-smooth-approximation]] proves the scaled ordinary $H^2$ approximation bound with its factorial factor.

[F4] [[thm-reference-simplex-trace-and-gauss-green]] applied to $v$ and its two first derivatives gives the continuous trace map $H^2(K)\to H^1(E)$, with $\partial_\tau(\gamma_Ev)=\gamma_E(\partial_\tau v)$: prove this first for smooth functions and pass to the limit using [[lem-smooth-density-on-reference-simplex]]. [[thm-lagrange-point-evaluation-threshold-on-reference-simplex]] gives unique continuous point values for $H^2$ inputs in dimension two. [[lem-shape-regular-affine-simplex-scaling]] transports all these bounds.

[F5] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]] turns matching polynomial traces into an $H^1$ function in the space of [[def-hp-variable-degree-spaces-on-matching-meshes]].

## Proof

1.1 Orient each geometric edge once and set $g_E=I_{p_E}(u|_E)$ by affine transport of [F1]. Its endpoints equal those of $u$, since derivative projection preserves the constant moment. Thus the three boundary polynomials of a cell meet at its vertices and have degrees at most $p_K$. Choose their polynomial extension by the explicit vertex-plus-three-lifts formula of [F2]. In its affine class modulo $Z_K=\{z\in\mathbb P_{p_K}(K):z|_{\partial K}=0\}$, define $Iu|_K$ by $\int_K\nabla(Iu-u)\cdot\nabla z=0$ for all $z\in Z_K$. This is a finite positive-definite linear system: if the gradient energy of $z$ is zero, $z$ is constant and its zero trace makes it zero. Hence it has a unique solution, including $Z_K=\{0\}$. No infinite basis choice or unproved lifting theorem is used. [F1, F2, given, construct, algebra]

2.1 Both cells meeting an edge use the same polynomial $g_E$, independently of orientation: reversal transports the same derivative-orthogonality characterization with the same two endpoint values. Their traces therefore agree and lie in degree $p_E$. By [F5] the assembled polynomial is conforming. If $u$ has zero trace on a boundary edge, both its endpoint value and derivative are zero, so $g_E=0$ and the interpolant preserves that boundary trace. [F1, F5, step 1.1, algebra]

3.1 For ordinary $H^1(0,1)$ data $f$, $I_jf=f(0)+\int_0^t\Pi_{j-1}f'$ gives $\|(I_jf)'\|_2\le\|f'\|_2$ and $|I_jf(0)|=|f(0)|\le C\|f\|_{H^1}$ by the integrated endpoint estimate. Thus $\|I_jf\|_{H^1}\le C\|f\|_{H^1}$ uniformly for $j\ge1$. If $q\in\mathbb P_{m_K}(K)$, each edge projector reproduces $q|_E$ because $m_K\le p_E$. Write $w=u-q$. The continuous boundary datum $g-q$ is therefore $I_{p_E}(w|_E)$. Subtract its affine vertex interpolant and apply [F2]. The affine piece has gradient norm bounded by the sum of its three vertex magnitudes; the endpoint estimate on any incident edge controls each such magnitude by the strong edge norm of $w$. Combining the three lifts, their endpoint-zero residuals, and the uniform stability just proved produces $c_K\in\mathbb P_{p_K}(K)$ with trace $g-q$ and $|c_K|_{H^1(K)}\le C_\gamma\sum_E(\ell_E^{-1/2}\|w\|_{L^2(E)}+\ell_E^{1/2}\|\partial_\tau w\|_{L^2(E)})$. [F1, F2, F4, step 1.1, algebra]

4.1 The polynomial $q+c_K$ has the prescribed trace, so $q+c_K-Iu\in Z_K$. The energy orthogonality of step 1.1 and Pythagoras give $|u-Iu|_{H^1(K)}\le|u-q-c_K|_{H^1(K)}\le|u-q|_{H^1(K)}+|c_K|_{H^1(K)}$. Insert step 3.1 to get the first estimate. For the second, use $q=A_{K,m_K,r}u$ from [F3]. The trace estimate [F4] bounds the entire right side by $C_\gamma$ times its scaled $H^2$ error. Inserting the factorial bound and its stated power simplification gives the asserted local $h,p,r$ estimate. The scaled full-norm assertion follows as well: put $z=Iu-q-c_K\in Z_K$. On the reference triangle $z(x,y)=\int_0^x\partial_xz(t,y)\,dt$ because its $x=0$ trace vanishes, so Fubini and Cauchy–Schwarz give $\|z\|_2\le C|z|_{H^1}$, and affine scaling gives $\|z\|_{L^2(K)}\le C_\gamma h_K|z|_{H^1(K)}$. Furthermore $|z|_{H^1}\le|Iu-u|_{H^1}+|u-q-c_K|_{H^1}\le2(|u-q|_{H^1}+|c_K|_{H^1})$. The construction in step 3.1 and the full-norm lift bound [F2] also bound $h_K^{-1}\|c_K\|_2$ by the same edge terms. Applying the triangle inequality to $u-Iu=(u-q)-c_K-z$ proves the full-norm assertion; [F3] then bounds it by the same factorial expression in the smooth-data branch. Full Choice enters through [F3] and point-evaluation [F4], rather than through the finite linear system. [F3, F4, step 1.1, step 3.1, algebra] ∎
