---
id: lem-critical-handle-entry-disk-and-boundary-attachment
kind: lemma
title: Critical entry disk and primitive-controlled boundary attachment
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 2
deps:
  - def-stopped-four-dimensional-lefschetz-and-brane-data
  - lem-stopped-entry-submersion-disk-whole-completion
  - thm-weinstein-lagrangian-neighborhood-theorem
  - thm-relative-moser-theorem
  - thm-compact-support-moser-stability-on-a-noncompact-manifold
dependency_roles:
  def-stopped-four-dimensional-lefschetz-and-brane-data: mathematical-premise
  lem-stopped-entry-submersion-disk-whole-completion: mathematical-premise
  thm-weinstein-lagrangian-neighborhood-theorem: mathematical-premise
  thm-relative-moser-theorem: mathematical-premise
  thm-compact-support-moser-stability-on-a-noncompact-manifold: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 6, exact Liouville conventions; the global critical-disk computation is proved directly from the actual chart.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §3.3, linking-disk terminology; no uniqueness-of-filling or endpoint-movie theorem is imported.
verification:
  precheck: pending
---

## Statement

In the quadratic critical handle with $\lambda_H=2p\cdot dq+q\cdot dp$, construct the entire exact conical transverse disk $q=\delta\nabla[p_1g(|p|)]$, its unique positive entry completion, its actual contact end, global body/cap coordinates, and its positive-clock comparison. For the auxiliary phase $b u_1+t/[b\gamma(u)]$, retain the $b\to0$ belt, half-cocore seam, negative axial and two off-axis events, every interpolation-region sheet, and the primitive constants at all ends. The required conclusion also asks for an embedded exact boundary-attachment movie whose endpoints are the prescribed old brane and clocked brane. The calculations below prove the disk, unit, and phase interfaces; the endpoint movie is not established, so this item is escalated.

## Statement references

[[def-stopped-four-dimensional-lefschetz-and-brane-data]]

[[lem-stopped-entry-submersion-disk-whole-completion]]

[[thm-weinstein-lagrangian-neighborhood-theorem]]

[[thm-relative-moser-theorem]]

[[thm-compact-support-moser-stability-on-a-noncompact-manifold]]

## Facts & Assumptions

**Given:** The actual quadratic handle and primitive, geometric and brane data of the stated definition, and the exact disk and whole-entry result in the preceding lemma. Let $C>0$ be the tail constant of $g$, let $\Phi(p)=g(|p|)p$, $u=\Phi(p)$, $\xi=(D\Phi_p)^{-T}q$, and $K=2p\cdot q-u\cdot\xi$.

[F1] [[def-stopped-four-dimensional-lefschetz-and-brane-data]] fixes $\lambda_H=2p\cdot dq+q\cdot dp$, $\omega_H=d\lambda_H$, the exact end primitives, and the actual critical path data.

[F2] [[lem-stopped-entry-submersion-disk-whole-completion]] proves that the entire graph is $\xi=\delta e_1$, has primitive $K$, has $K=0$ on its homogeneous exterior, and has the unique zero-winding entry end. Its proof stops before any endpoint boundary movie.

[F3] [[thm-weinstein-lagrangian-neighborhood-theorem]] supplies an exact cotangent model for a Lagrangian neighborhood once the Lagrangian and its embedding are specified.

[F4] [[thm-relative-moser-theorem]] and [[thm-compact-support-moser-stability-on-a-noncompact-manifold]] transport an already constructed local exact family under their stated relative and compact-support hypotheses; neither chooses the missing global endpoints.

[A1] Choose $0<\epsilon<\delta$, a smooth radial $h(u)$ with $h=|u|^2$ near zero, $h=|u|$ on the tail, and $h_r>0$ for $r>0$. Use the exact auxiliary change $\gamma(u)=g(|\Phi^{-1}(u)|)$; then $u_1=\gamma(u)P_1(u)$, $\gamma=1$ near zero, and $\gamma=C^2/|u|$ on the homogeneous tail.

[A2] The old brane $L_{\rm old}$ and clocked brane $L_{\rm clock}$ are the exact, graded, relatively Spin endpoints fixed by the path data of [F1]. Their actual embeddings, collars, primitive constants, and end identifications are not replaced by germs.

## Proof

1.1 Apply [F2] to $f(p)=p_1g(|p|)$. It gives $g>0$, $g+rg'>0$, $q=\delta\nabla f\ne0$, exact primitive $F_\delta=\delta(2p\cdot\nabla f-f)$, and $F_\delta=0$ on the homogeneous end. The radial map $r\mapsto rg(r)$ has derivative $g+rg'>0$, starts at zero, and tends to infinity; its tangential derivative is $g>0$. Thus $\Phi$ is a global diffeomorphism. Its cotangent lift gives $\lambda_H=u\cdot d\xi+dK$, and $f(p)=u_1$ makes the whole disk the flat fibre $\xi=\delta e_1$. [F1, F2, construct, algebra]

1.2 Let $H(u)=\delta u_1+\epsilon h(u)$ and take the positive Hamiltonian graph $\xi=\nabla H=\delta e_1+\epsilon\nabla h(u)$. Since $d(u\cdot\nabla H-H)=u\cdot d(\nabla H)$, its primitive in the original handle is $ u\cdot\xi-H(u)+K=\epsilon(u\cdot\nabla h-h)+K. $ At $u=0$ both terms vanish. On the homogeneous exterior, $h=|u|$ gives $u\cdot\nabla h-h=0$, and [F2] gives $K=0$. Hence the unit and the original disk have their actual common zero normalization, including the cap and tail; no end constant has been reset. [A1, F1, F2, construct, algebra]

1.3 In the actual body chart, before changing its positive auxiliary coordinate, the moving crossing family has phase $ G_t(u,a)=aP_1(u)+t/a,\qquad P_1(u)=(\Phi^{-1}(u))_1,\quad a>0. $ Its critical equation in $a$ is $P_1=t/a^2$ and its covector is $a\nabla P_1$, which are the actual crossing. Make the exact auxiliary diffeomorphism $a=b\gamma(u)$, $b>0$. Since $u_1=\gamma P_1$, the same family becomes $ G_t(u,b)=bu_1+\frac{t}{b\gamma(u)}. $ The extra $u$-derivative from the coordinate change is a multiple of the old auxiliary critical equation, so the generated covector on the critical set is unchanged. At $t=0,b=\delta$ the phase is globally $\delta u_1$, exactly the disk phase; on the homogeneous tail $\gamma=C^2/|u|$, so $G_t=bu_1+t|u|/(bC^2)$ is homogeneous of degree one in $u$. The earlier $P_1$-versus-$u_1$ coefficient difference is therefore resolved by this reparametrization; it is not an obstruction. At an auxiliary critical point, the full primitive is $u\cdot\xi-G_t+K=2p\cdot q-ap_1-t/a=ap_1-t/a=0$. [A1, F1, F2, construct, algebra]

1.4 The difference of the auxiliary phase $b u_1+t/[b\gamma(u)]$ and the unit phase $\delta u_1+\epsilon h(u)$ in the identity/quadratic chart is $(b-\delta)u_1+t/b-\epsilon|u|^2$. Its critical equations are $ u_2=0,\qquad u_1=\frac{b-\delta}{2\epsilon},\qquad b^2(b-\delta)=2\epsilon t. $ The fold of $t(b)=b^2(b-\delta)/(2\epsilon)$ occurs at $b=2\delta/3$, $t=-2\delta^3/(27\epsilon)$, $u_1=-\delta/(6\epsilon)$; it is a local-chart event only when that $u_1$ lies in the identity region. [A1, construct, algebra]

1.5 On the homogeneous tail put $r=|u|$, $\gamma=C^2/r$, $h=r$, and $u_1=r\cos\theta$. The difference phase is $ r\bigl((b-\delta)\cos\theta-\epsilon\bigr)+\frac{tr}{bC^2}. $ Its $r,\theta,b$ critical equations give the positive axial event $\cos\theta=1$, $b=(\delta+\epsilon)/2$, $t=C^2(\delta+\epsilon)^2/4$, and, when $\delta>\epsilon$, the negative axial event $\cos\theta=-1$, $b=(\delta-\epsilon)/2$, $t=-C^2(\delta-\epsilon)^2/4$. In the off-axis case, $\partial_\theta=0$ with $\sin\theta\ne0$ forces $(b-\delta)=0$; the other equations then give $b=\delta$, $t=\epsilon\delta C^2$, and $\cos\theta=\epsilon/\delta$, with two distinct angular solutions because $0<\epsilon/\delta<1$. The limit $b\to0^+$ is a separate belt face and cannot be deleted from the family; the seam where the half-cocore enters and every sheet in the interpolation region must likewise be tracked. [A1, construct, algebra]

2.1 At $t=0$, the actual transported crossing family has $u_1=0,\xi_2=0,\xi_1>0$: in handle coordinates it is $p_1=0,q=a e_1$, $a>0$, and $D\Phi$ is scalar multiplication by $g$ in the $e_1$ direction when $p_1=0$. An intersection with the unit graph has $\epsilon h_r u_2/|u|=0$, so either $u=0$ or $u_2=0$; combining with $u_1=0$ forces $u=0$. There the covector is $\delta e_1$, so an intersection exists. Since $h=|u|^2$ near zero, the unit tangent is $\delta\xi=2\epsilon\,du$; its intersection with the crossing tangent $\{du_1=0,d\xi_2=0\}$ is zero, so the intersection is transverse. On the tail the crossing condition $u_1=0,\xi_2=0$ would force $u_2=0$, contradicting $|u|>0$; the ends are separated. These equations establish the global positive-unit isolation for this pair, not other probe pairs. [A1, F1, step 1.2, construct, algebra]

2.2 The exact reparametrization in step 1.3 removes the old global coefficient mismatch, but the critical-point equations still do not construct an embedded boundary movie with endpoints [A2]. They do not determine the number of boundary components, conical collars, primitive constants, grading transport, or the sheets in the fixed interpolation region. The $b\to0^+$ local branch has $t\to0^-$ and $u_1\to-\delta/(2\epsilon)$, when that limit lies in the local chart; it is an auxiliary belt face, not a point to delete. [A1, A2, F2, step 1.3, step 1.4, step 1.5, construct, algebra]

2.3 The actual crossing trace also retains both half-cocores. In handle coordinates its fixed-$t$ slice is $q_1=a>0,q_2=0,p_1=t/a^2,p_2$ free; direct substitution gives $\lambda_H=0$. As $t\to0^+$ its finite boundary limit adds $q=0,p_1\ge0$, while $t\to0^-$ adds $q=0,p_1\le0$; their common seam is $q=0,p_1=0,p_2$ free. The exact suspension $ \Lambda=\{q_1=-1/\eta,\ q_2=0,\ \sigma=p_1/\eta^2,\ \eta<0,\ p_1,p_2\in\mathbb R\} $ in the handle times $T^*\mathbb R_{\sigma}$, with primitive $\lambda_H+\eta\,d\sigma$, satisfies $(\lambda_H+\eta\,d\sigma)|_\Lambda=0$ by differentiating $\sigma=p_1/\eta^2$. Its belt limit $\eta\to-\infty$ is the full cocore $q=0,\sigma=0$ on compact $p$-sets, so neither one-sided half nor the $p_2$ seam may be discarded. [F1, step 1.3, construct, algebra]

3.1 One explicit one-variable productization $q_1=c(\eta)$, $\sigma=c'(\eta)p_1$ has primitive $p_1(c+\eta c')$. On a horizontal slice, preserving the prescribed invariant $p_1q_1^2=t$ would require $c'=c^2$. If a nonzero $c$ reached zero at a finite $\eta_0$, uniqueness for this scalar ODE with initial value $c(\eta_0)=0$ would force $c\equiv0$, contradicting its nonzero original portion. Thus this particular finite cutoff changes the nonzero-$t$ end; it is a checked mismatch of that productization, not a proof that every possible two-variable movie fails. The exact unresolved input remains a two-parameter embedded exact boundary attachment from the disk cap on the actual $L_{\rm old}$ to the actual $L_{\rm clock}$, retaining the seam, both halves, every interpolation sheet, all conical collars, and the $K$-gauge primitive/brane data. [A2, F1, step 2.3, construct, algebra]

4.1 The Lagrangian-neighborhood and relative-Moser suppliers in [F3,F4] apply only after such a family and its relative endpoint data have been supplied; they do not imply it. Thus this item remains escalated, and no path-slide triangle is inferred. [F3, F4, step 3.1] ∎
