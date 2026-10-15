---
id: lem-rpm-flat-centroid-shift
kind: lemma
title: Exact flat centroid translation and disk
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-cross-product-in-r3
  - def-inertial-frame-and-inertial-chart
  - def-sr-affine-minkowski-model
  - thm-sr-proper-time-and-observer-decomposition
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2, observer-dependent centroid shift, the centroid disk and the Møller radius; the result below restores SI units and treats timelike observers only.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Let $(A,V,\eta,C^+)$ be an oriented, time-oriented affine Minkowski space, with signature $(-+++)$, and fix $c>0$. Let $p$ be any future timelike vector and define $M:=\sqrt{-\eta(p,p)}/c>0$. Choose an inertial frame $(o;e_0,e_1,e_2,e_3)$ of [[def-inertial-frame-and-inertial-chart]] with $e_0=p/(Mc)$, so its ordered orthonormal basis is future and positively oriented and $p$ has components $(Mc,\mathbf 0)$ in this frame. Its positive-definite rest space is $e_0^\perp=\operatorname{span}(e_1,e_2,e_3)$; use $(e_1,e_2,e_3)$ for spatial components and the induced right-handed symbol $\epsilon_{ijk}$. Let $S^{ab}=-S^{ba}$ satisfy the momentum supplementary condition $S^{ab}p_b=0$, and set $s_*^k:=\tfrac12\epsilon_{kij}S^{ij}$ in this oriented orthonormal rest-space basis. Every future unit observer has the components
$$n=\gamma\left(e_0+\sum_{i=1}^3\frac{v^i}{c}e_i\right),\qquad \gamma=(1-|\mathbf v|^2/c^2)^{-1/2},\qquad |\mathbf v|<c,$$
by [[thm-sr-proper-time-and-observer-decomposition]]. For every such observer, define
$$\delta^a:=\frac{S^{ab}n_b}{p\cdot n},\qquad S'^{ab}:=S^{ab}-(\delta^ap^b-\delta^bp^a).$$
Then $p\cdot n\ne0$, $\delta\cdot p=\delta\cdot n=0$, and $S'^{ab}n_b=0$. Let $z\in A$ be the representative event. For $u,v\in V$, define $(u\wedge v)^{ab}:=u^av^b-u^bv^a$. If the representative point changes by $z\mapsto z+\delta$, the total angular momentum about the frame origin $o$,
$$J_o:=(z-o)\wedge p+S,$$
is unchanged by this stipulated spin-shift rule. In the rest space,
$$\boldsymbol\delta=\frac{\mathbf s_*\times\mathbf v}{Mc^2},$$
If $\mathbf s_*\ne0$, the shifts of all future timelike observers fill the open disk in $\mathbf s_*^\perp$ of radius $|\mathbf s_*|/(Mc)$; the boundary is a supremum and is not attained. If $\mathbf s_*=0$, only the zero shift occurs. This is an exact affine-flat algebraic result.

## Facts & Assumptions

**Given:** The oriented, time-oriented affine Minkowski model, a fixed $c>0$, a future timelike momentum $p=(Mc,\mathbf0)$ with $M>0$, an antisymmetric $S$, the stated supplementary condition, and a future unit observer with $|\mathbf v|<c$.

[A1] The momentum supplementary condition $S^{ab}p_b=0$ and the displayed spin-shift rule for the representative point are algebraic hypotheses of this flat model.

[F1] Minkowski spacetime is an oriented time-oriented affine space with Lorentz form of signature $(-+++)$; an inertial frame is a future, positively oriented orthonormal frame with its affine chart. [[def-sr-affine-minkowski-model]]; [[def-inertial-frame-and-inertial-chart]]

[F2] Relative to the inertial observer $e_0$, a future unit observer has spatial velocity $\mathbf v\in e_0^\perp$, $|\mathbf v|<c$, and components $\gamma(1,\mathbf v/c)$ with $\gamma=(1-|\mathbf v|^2/c^2)^{-1/2}$; $e_0^\perp$ is positive definite. [[thm-sr-proper-time-and-observer-decomposition]]

[F3] The spatial cross product is $(u\times v)_i=\epsilon_{ijk}u_jv_k$. [[def-cross-product-in-r3]]

## Proof

**Proof technique:** direct.

1.1 Since $S^{ab}p_b=0$ and $p=(Mc,\mathbf0)$, antisymmetry gives $S^{0i}=0$. The observer decomposition [F2] gives $p\cdot n=-Mc\gamma\ne0$, while $n_an_bS^{ab}=0$ and $p_aS^{ab}=0$ give $\delta\cdot n=\delta\cdot p=0$. The definition $s_*^k=\tfrac12\epsilon_{kij}S^{ij}$ inverts to $S^{ij}=\epsilon_{ijk}s_*^k$: contracting the right-hand side with $\tfrac12\epsilon_{\ell ij}$ gives $s_*^\ell$ by $\tfrac12\epsilon_{\ell ij}\epsilon_{ijk}=\delta_{\ell k}$. [given, A1, F1, F2, algebra]

2.1 Contracting the spin-shift rule with $n_b$ yields $$S'^{ab}n_b=S^{ab}n_b-\delta^a(p\cdot n)+p^a(\delta\cdot n)=0,$$ because $\delta^a(p\cdot n)=S^{ab}n_b$ by definition and step 1.1 gives $\delta\cdot n=0$. Also $(z+\delta-o)\wedge p+S'=(z-o)\wedge p+S$, which proves the asserted invariance of $J_o$. [given, A1, step 1.1, algebra]

2.2 In rest coordinates, $n_j=\gamma v_j/c$, $p\cdot n=-Mc\gamma$, and step 1.1 gives $S^{ij}=\epsilon_{ijk}s_*^k$. Therefore $$\delta^i=\frac{\epsilon_{ijk}s_*^k\gamma v_j/c}{-Mc\gamma}=\frac{\epsilon_{ijk}s_*^jv_k}{Mc^2}=\frac{(\mathbf s_*\times\mathbf v)_i}{Mc^2},\qquad \delta^0=0.$$ The second equality uses antisymmetry of $\epsilon_{ijk}$ when interchanging $j,k$. [given, A1, step 1.1, F3, algebra]

3.1 Expanding the coordinate definition [F3] gives $|u\times v|^2=\sum_{i<j}(u_iv_j-u_jv_i)^2=|u|^2|v|^2-(u\cdot v)^2$ and $u\times(v\times w)=v(u\cdot w)-w(u\cdot v)$. Hence $|\boldsymbol\delta|\le|\mathbf s_*||\mathbf v|/(Mc^2)<|\mathbf s_*|/(Mc)$ for $\mathbf s_*\ne0$. Conversely, for any $\boldsymbol\delta\perp\mathbf s_*$ with $|\boldsymbol\delta|<|\mathbf s_*|/(Mc)$, choose $\mathbf v=(Mc^2/|\mathbf s_*|^2)(\boldsymbol\delta\times\mathbf s_*)$. The expanded triple-product identity gives $\mathbf s_*\times\mathbf v=Mc^2\boldsymbol\delta$, and the norm identity gives $|\mathbf v|=Mc^2|\boldsymbol\delta|/|\mathbf s_*|<c$. Thus every interior point occurs; equality in the radius would require $|\mathbf v|=c$, excluded for a timelike observer. When $\mathbf s_*=0$, the formula of step 2.2 gives only $\boldsymbol\delta=0$. [given, A1, step 2.2, F3, algebra] ∎

## Remarks

The spin-shift rule is part of the algebraic hypotheses. This item does not assert a curved-spacetime translation law, a stress-integral theorem, or a material-body model.
