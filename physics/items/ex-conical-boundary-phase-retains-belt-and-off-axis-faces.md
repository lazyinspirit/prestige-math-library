---
id: ex-conical-boundary-phase-retains-belt-and-off-axis-faces
kind: example
title: A conical attachment phase has real belt and tail faces
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
dependency_roles:
  def-stopped-four-dimensional-lefschetz-and-brane-data: mathematical-premise
  lem-stopped-entry-submersion-disk-whole-completion: mathematical-premise
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
      locator: Lecture 6, exact conical conventions; all critical equations are derived directly.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §3.3, linking-disk terminology; no boundary-attachment theorem is used.
verification:
  precheck: pending
---

## Statement

For the actual auxiliary phase $G_t=b u_1+t/[b\gamma(u)]$, with $\gamma=g(|\Phi^{-1}(u)|)$, and the proper unit phase $\delta u_1+\epsilon h(u)$, derive the local fold and all homogeneous-tail axial/off-axis events. Retain the $b\to0$ belt and the two half-cocore seam. Explain why critical-point equations alone do not construct the required embedded boundary-attachment movie.

## Statement references

[[def-stopped-four-dimensional-lefschetz-and-brane-data]]

[[lem-stopped-entry-submersion-disk-whole-completion]]

## Facts & Assumptions

**Given:** $0<\epsilon<\delta$, $h(u)=|u|^2$ near zero and $h(u)=|u|$ on the tail, and $\gamma(u)=g(|\Phi^{-1}(u)|)>0$. Use $\gamma=1$ in the identity chart and $\gamma=C^2/|u|$ on the homogeneous exterior, as follows from the cutoff range in [F2]. Put $P_1(u)=(\Phi^{-1}(u))_1$. The normal entry family used in this calculation is the explicitly parametrized family $q_1=a>0$, $q_2=0$, $p_1=t/a^2$, with $p_2$ free. This is a family in the given handle, not an assumed boundary-attachment theorem.

[A1] Adopt $0<\epsilon<\delta$ and the stated radial $h,\gamma$ profiles throughout the phase calculation.

[F1] [[def-stopped-four-dimensional-lefschetz-and-brane-data]] fixes the actual handle primitive, symplectic sign, and grading conventions. The entry family is parametrized explicitly in the Given data.

[F2] [[lem-stopped-entry-submersion-disk-whole-completion]] proves $\Phi$ is a global body coordinate, $f(p)=u_1$, and the whole disk has phase $\delta u_1$.

## Proof

1.1 The explicitly parametrized entry family has $\xi=a\nabla_uP_1(u)$ in the body coordinates of [F2]. Its generating phase is $aP_1(u)+t/a$: the auxiliary critical equation is $P_1=t/a^2$, and its $u$ derivative is the displayed covector. Thus its use does not require an attachment or path-slide theorem. The auxiliary substitution $a=b\gamma(u)$ is a diffeomorphism for $a,b>0$ at every $u$. Since $u_1=\gamma P_1(u)$, it transforms the actual crossing phase $aP_1(u)+t/a$ exactly into
$$G_t(u,b)=bu_1+\frac{t}{b\gamma(u)}.$$
Because the change depends on $u$, its extra $u$-derivative is a multiple of the old auxiliary critical equation and vanishes on the critical set; hence it preserves the generated Lagrangian. At $t=0,b=\delta$ it gives $\delta u_1$, the full disk phase, and on the tail it is degree one in $u$. This repairs the coefficient mismatch without identifying any endpoint movie. [F1, F2, given, construct, algebra]

2.1 In the identity/quadratic chart, subtract $F(u)=\delta u_1+\epsilon|u|^2$. The difference is
$$S=(b-\delta)u_1+\frac{t}{b}-\epsilon|u|^2.$$
Its critical equations in $u_1,u_2,b$ give $u_2=0$, $u_1=(b-\delta)/(2\epsilon)$, and $b^2(b-\delta)=2\epsilon t$. Differentiating $t(b)=b^2(b-\delta)/(2\epsilon)$ gives $t'(b)=b(3b-2\delta)/(2\epsilon)$; its positive fold is $b=2\delta/3$, $t=-2\delta^3/(27\epsilon)$, $u_1=-\delta/(6\epsilon)$. This event belongs to the local chart only if that coordinate lies in the chart. As $b\to0^+$, $t\to0^-$ and $u_1\to-\delta/(2\epsilon)$, when the limit remains in the chart; this is the belt end of the auxiliary family. [A1, step 1.1, construct, algebra]

2.2 On the homogeneous tail put $r=|u|>0$, $u_1=r\cos\theta$. Then
$$S_{\rm tail}=r\left((b-\delta)\cos\theta-\epsilon+\frac{t}{bC^2}\right).$$
Its angular equation is $(b-\delta)\sin\theta=0$; its radial equation sets the parenthesis to zero; and its $b$-equation is $\cos\theta=t/(b^2C^2)$. For $\cos\theta=1$, solving these equations gives $b=(\delta+\epsilon)/2$ and $t=C^2(\delta+\epsilon)^2/4$. For $\cos\theta=-1$, they give $b=(\delta-\epsilon)/2$ and $t=-C^2(\delta-\epsilon)^2/4$, which is an event with $b>0$ because $\delta>\epsilon$. [A1, step 1.1, construct, algebra]

3.1 If $\sin\theta\ne0$, the angular equation forces $b=\delta$. The radial equation then gives $t=\epsilon\delta C^2$, and the $b$-equation gives $\cos\theta=\epsilon/\delta$. Since $0<\epsilon/\delta<1$, there are two distinct off-axis angles. This case is lost if one divides by $b-\delta$, so both directions must be retained. For the actual crossing trace $q_1=a>0,\ p_1=t/a^2$, the sign of $p_1$ is the sign of $t$; letting $t\to0^+$ or $t\to0^-$ with $p_1$ fixed gives respectively the half-cocores $q=0,p_1\ge0$ and $q=0,p_1\le0$. Their common boundary is the seam $q=0,p_1=0,p_2$ free. The two sides are distinct, and neither deletes the seam. [F1, step 2.2, construct, algebra]

4.1 These equations describe critical points of a difference function for already specified Lagrangians. They do not specify an embedded boundary attachment, the count of boundary components, its collars, grading and relative-Spin transport, primitive constants, or all sheets in the interpolation region. In particular, the repaired global phase in step 1.1 removes one false mismatch but does not prove endpoint agreement. No third boundary-attachment brane, its embedding, or a map identifying its endpoint is defined by those critical-point equations. A boundary movie must still construct that whole family and retain its belt and seam faces. This limitation follows directly from the objects the equations specify; no boundary-attachment or path-slide theorem is used as a mathematical premise. [F2, step 1.1, step 3.1, construct, algebra] ∎
