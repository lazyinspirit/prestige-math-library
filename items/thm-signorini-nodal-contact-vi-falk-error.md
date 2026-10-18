---
id: thm-signorini-nodal-contact-vi-falk-error
kind: theorem
title: "Falk error bound for nodal Signorini contact"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  [
    thm-signorini-continuous-contact-vi-wellposed,
    def-signorini-nodal-p1-contact-scheme,
    lem-signorini-nodal-contact-set-conforming,
    lem-signorini-elasticity-form-bounded,
    lem-signorini-partial-dirichlet-korn-coercivity,
    thm-local-finite-element-interpolation-estimates,
    def-matching-affine-simplicial-meshes,
    def-reference-finite-element-and-unisolvent-dofs,
    def-broken-and-conforming-polynomial-spaces,
    thm-stampacchia-variational-inequality,
    cor-finite-dimensional-normed-spaces-are-banach,
    def-countable-choice,
    def-axiom-of-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of
        Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§2, Theorem 1, printed pp. 964–965, and §3, Lemma 3, printed pp.
        969–970: feasible-set defects and nodal comparisons."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11: Local interpolation
        on affine meshes"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf"
      locator: "§§11.2, 11.4 and 11.5.1, printed pp. 120–128: affine scaling, the
        complete local interpolation theorem, and its Lagrange-element
        application."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the contact model and nodal scheme above, with $K_h\subseteq K$, the exact restrictions of $a,F$ to $V_h$, and shape-regular boundary-conforming meshes. Let $u\in K$ and $u_h\in K_h$ solve their continuous and discrete variational inequalities, respectively. Put $\alpha=2\mu/c_K^2$, $M=2\mu+2\lambda$, and
$$\eta_{\rm feas}(v_h):=a(u,v_h-u)-F(v_h-u)\quad(v_h\in K_h).$$
Then $\eta_{\rm feas}(v_h)\ge0$ and
$$\|u-u_h\|_V^2\le\inf_{v_h\in K_h}\left\{\frac{M^2}{\alpha^2}\|u-v_h\|_V^2+\frac{2}{\alpha}\eta_{\rm feas}(v_h)\right\}.$$
The term $\eta_{\rm feas}$ is the explicit feasible-comparison defect; the form and load have no quadrature or geometry perturbation here. If additionally $u\in H^2(\Omega;\mathbb R^2)\cap C(\overline\Omega;\mathbb R^2)$, the obstacle is convex as required by [[def-signorini-nodal-p1-contact-scheme]], the meshes are uniformly shape regular with $h\to0$, then $I_hu\in K_h$, $\|u-I_hu\|_V\to0$, $\eta_{\rm feas}(I_hu)\to0$, and consequently $u_h\to u$ in $V$.

## Facts & Assumptions

**Given:** The continuous solution $u\in K$, a conforming P1 mesh family, the nodal feasible set $K_h\subset K$, and the restricted discrete problem on $V_h$.

[A1] Countable Choice is used by the continuous and finite-dimensional Stampacchia existence theorems. ([[def-countable-choice]])

[A2] The Axiom of Choice is used by the Lagrange nodal boundedness branch of the local P1 interpolation theorem. ([[def-axiom-of-choice]], [[thm-local-finite-element-interpolation-estimates]])

[F1] The continuous solution satisfies $a(u,z-u)\ge F(z-u)$ for every $z\in K$. ([[thm-signorini-continuous-contact-vi-wellposed]])

[F2] $V_h$ is finite dimensional, hence Hilbert with the inherited $H^1$ inner product; $K_h$ is nonempty, closed and convex. ([[def-signorini-nodal-p1-contact-scheme]], [[lem-signorini-nodal-contact-set-conforming]], [[cor-finite-dimensional-normed-spaces-are-banach]])

[F3] The restrictions of $a$ and $F$ are bounded on $V_h$, and $a(v_h,v_h)\ge\alpha\|v_h\|_V^2$. ([[lem-signorini-elasticity-form-bounded]], [[lem-signorini-partial-dirichlet-korn-coercivity]])

[F4] A bounded coercive bilinear form on a Hilbert space and a nonempty closed convex set have a unique variational-inequality solution under Countable Choice. ([[thm-stampacchia-variational-inequality]])

[F5] On the reference triangle $\widehat S_2$ with vertices $0,e_1,e_2$, the affine barycentric functions $\widehat\phi_0=1-\widehat x_1-\widehat x_2$, $\widehat\phi_1=\widehat x_1$, and $\widehat\phi_2=\widehat x_2$ satisfy $p=\sum_{i=0}^2p(\widehat a_i)\widehat\phi_i$ for every $p\in\mathbb P_1$, so the three vertex evaluations are unisolvent and define the P1 Lagrange interpolant. The local interpolation theorem, applied with $d=2$, $p=2$, $k=1$, $r=\ell=2$, and $m\in\{0,1\}$, gives $|v-I_Kv|_{W^{m,2}(K)}\le C h_K^{2-m}|v|_{H^2(K)}$: its Axiom of Choice branch supplies boundedness of the vertex evaluations because $2>d/p=1$. Apply the scalar estimate componentwise to vector fields, absorbing the fixed two-component norm factor into $C$; the local and global nodal interpolants agree because affine polynomials are determined by their three vertex values. ([[thm-local-finite-element-interpolation-estimates]], [[def-matching-affine-simplicial-meshes]], [[def-reference-finite-element-and-unisolvent-dofs]], [[def-axiom-of-choice]])

[F6] On a matching mesh, cell interiors are disjoint and the mesh fills the polygon; the finite union of straight edges has planar measure zero. ([[def-matching-affine-simplicial-meshes]])

## Proof

**Proof technique:** direct.

**Given:** The continuous VI solution $u$, the exact-form discrete VI solution $u_h$, $K_h\subseteq K$, coercivity constant $\alpha>0$, and form bound $M$.

1.1 By [F2]–[F4], the discrete VI on $V_h$ has a unique solution $u_h$. Fix any $v_h\in K_h$. Since $K_h\subseteq K$, [F1] applies at $z=u_h$ and gives $a(u,u_h-u)\ge F(u_h-u)$; equivalently $a(u,e)\le F(e)$ for $e:=u-u_h$. The discrete inequality tested at $v_h$ gives $a(u_h,e-\delta)\ge F(e-\delta)$ for $\delta:=u-v_h$. Rearranging these two inequalities yields $a(e,e)\le F(\delta)-a(u_h,\delta)=\eta_{\rm feas}(v_h)+a(e,\delta)$; [F1] also gives $\eta_{\rm feas}(v_h)\ge0$. [A1, F1, F2, F3, F4, given, algebra]

1.2 For the convergence clause, let $v_h=I_hu$. By [F2] the nodal interpolant belongs to $K_h$. Apply [F5] on each cell for $m=0,1$. The cell interiors partition $\Omega$ up to the finite edge union [F6]; summing the squared local estimates gives $\|u-I_hu\|_V\le C(h+h^2)|u|_{H^2(\Omega)}\to0$. [A2, F2, F5, F6, given, construct]

2.1 By [F3], $\alpha\|e\|_V^2\le a(e,e)$ and $|a(e,\delta)|\le M\|e\|_V\|\delta\|_V$. The inequality of step 1.1 and $M\|e\|\|\delta\|\le(\alpha/2)\|e\|^2+(M^2/(2\alpha))\|\delta\|^2$ imply $\|e\|_V^2\le(2/\alpha)\eta_{\rm feas}(v_h)+(M^2/\alpha^2)\|u-v_h\|_V^2$. Since $v_h$ was arbitrary, take the infimum to obtain the displayed Falk bound. [F3, step 1.1, algebra]

3.1 The functional $R(v):=a(u,v)-F(v)$ is bounded on $V$, with $\|R\|_{V^*}\le M\|u\|_V+\|F\|_{V^*}$ by [F3]. Thus $0\le\eta_{\rm feas}(I_hu)=R(I_hu-u)\le(M\|u\|+\|F\|)\|I_hu-u\|_V\to0$. Substitute $v_h=I_hu$ in step 2.1 and use step 1.2 to conclude $\|u-u_h\|_V\to0$. [F1, F3, step 1.2, step 2.1, algebra] ∎
