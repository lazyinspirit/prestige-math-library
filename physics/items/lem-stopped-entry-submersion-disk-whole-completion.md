---
id: lem-stopped-entry-submersion-disk-whole-completion
kind: lemma
title: The submersion critical disk fills the whole positive entry completion
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 1
deps:
  - def-stopped-four-dimensional-lefschetz-and-brane-data
  - def-axiom-of-choice
  - thm-inverse-function-theorem-for-banach-spaces
dependency_roles:
  def-stopped-four-dimensional-lefschetz-and-brane-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §3.3, local linking disks at a mostly Legendrian stop; the full graph, primitive, and contact-end calculation below is proved directly.
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 6, exact Liouville and conical-end conventions; the local chart calculation below is not imported.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. In the quadratic critical chart of the preceding geometric datum, write $p=(p_1,p_2)$, $q=(q_1,q_2)$, $r=|p|$, $\omega_H=\sum_k dp_k\wedge dq_k$, and $\lambda_H=\sum_k(2p_k\,dq_k+q_k\,dp_k)$. Choose a smooth cutoff $\chi:[0,\infty)\to[0,1]$ which is zero on $[0,1]$ and one on $[2,\infty)$, and set
$$g(r)=\exp\!\left(-\frac12\int_0^r\frac{\chi(t)}{t}\,dt\right),\qquad f(p)=p_1g(|p|).$$
For $\delta>0$, let $D_\delta=\{(p,q):q=\delta\nabla f(p)\}$. Then $D_\delta$ is a proper embedded exact Lagrangian graph, its primitive is $F_\delta=\delta(2p\cdot\nabla f-f)$, and $F_\delta$ is identically zero on its homogeneous end. For all sufficiently small $\delta$, every point of $D_\delta$ lies in the positive Liouville completion of the entry hypersurface $Y_-=\{|p|^2-|q|^2=-1\}$, with a unique transverse entry time. Its complete contact end has zero angular winding around the attaching circle. Moreover the global radial map $\Phi(p)=g(|p|)p$, with cotangent lift $u=\Phi(p)$, $\xi=(D\Phi_p)^{-T}q$, sends the entire disk to the flat fibre $\xi=\delta e_1$, and the exact gauge is
$$\lambda_H=u\cdot d\xi+dK,\qquad K=2p\cdot q-u\cdot\xi.$$
On the homogeneous exterior $K=0$. This statement proves the disk and its body coordinates only; it supplies no boundary-attachment movie between prescribed old and clocked branes.

## Statement references

[[def-stopped-four-dimensional-lefschetz-and-brane-data]]

[[def-axiom-of-choice]]

[[thm-inverse-function-theorem-for-banach-spaces]]

## Facts & Assumptions

**Given:** The quadratic chart, primitive, symplectic form, cutoff, and the resulting functions $g$ and $f$ in the Statement. Write $J(a,b)=(-b,a)$, $e(\theta)=(\cos\theta,\sin\theta)$, and $e_1=(1,0)$.

[F1] The earlier definition fixes $\omega_H=dp_1\wedge dq_1+dp_2\wedge dq_2$, $\lambda_H=2p\cdot dq+q\cdot dp$, and the Liouville vector field $Z=2p\cdot\partial_p-q\cdot\partial_q$. [[def-stopped-four-dimensional-lefschetz-and-brane-data]]

[F2] In the finite-dimensional real Banach case, a $C^1$ map with invertible derivative has a smooth local inverse when the map is $C^\infty$. [[thm-inverse-function-theorem-for-banach-spaces]]

## Proof

1.1 For $r>0$, differentiation under the integral gives $rg'(r)=-\chi(r)g(r)/2$. The cutoff vanishes near zero, so $g=1$ there and extends smoothly at $r=0$; for $r\ge2$, $g(r)=C r^{-1/2}$ for a constant $C>0$. Hence $ \partial_{p_1}f=g(r)\left(1-\frac{\chi(r)}2\frac{p_1^2}{r^2}\right)\ge\frac12g(r)>0. $ At zero $\partial_{p_1}f=1$. Therefore $\nabla f$ never vanishes. It is bounded because it is smooth on the compact disk $r\le2$ and has norm $O(r^{-1/2})$ on the end. [given, construct, algebra]

1.2 On $Y_-$, write $q=Rv(Q)$, $p=sv(Q)+\eta Jv(Q)$, where $v(Q)=(\cos Q,\sin Q)$ and $R^2=1+s^2+\eta^2$. Set $z=sR^2$ and $y=\eta R^2$. Since $v,Jv$ are orthonormal, direct substitution into $\lambda_H$ gives $ \lambda_H|_{Y_-}=2s\,dR+R\,ds+\eta R\,dQ=\frac{dz+y\,dQ}{R}. $ The map $(s,\eta)\mapsto(z,y)=(1+s^2+\eta^2)(s,\eta)$ has positive radial and tangential eigenvalues $1+3(s^2+\eta^2)$ and $1+s^2+\eta^2$, respectively; it is a global radial diffeomorphism. Thus $(Q,z,y)$ are contact coordinates with contact form $(dz+y\,dQ)/R$. In the symplectization with Liouville time $\tau$, the primitive is $x(dz+y\,dQ)$, where $x=e^\tau/R$. [F1, construct, algebra]

2.1 The graph map $p\mapsto(p,\delta\nabla f(p))$ is an embedding and is proper because its first coordinate is the identity. Its pullback of $\omega_H$ is $\delta\sum_{i,j}f_{ij}\,dp_i\wedge dp_j=0$, since the Hessian is symmetric. Direct differentiation gives $ \lambda_H|_{D_\delta} =\delta\left(2p\cdot \operatorname{Hess}(f)\,dp+\nabla f\cdot dp\right) =d\!\left[\delta(2p\cdot\nabla f-f)\right]. $ Thus $D_\delta$ is exact with the stated primitive. Since $f$ is homogeneous of degree $1/2$ for $r\ge2$, Euler's identity $p\cdot\nabla f=f/2$ makes $F_\delta=0$ on the entire homogeneous tail. [F1, step 1.1, construct, algebra]

2.2 On the tail put $p=re(\theta)$ and $ w(\theta)=C\left(e_1-\frac12\cos\theta\,e(\theta)\right),\qquad q=\delta r^{-1/2}w(\theta). $ The first component $w_1=C(1-\tfrac12\cos^2\theta)$ is at least $C/2$, so $w\ne0$ and $\arg w$ lies in one open half-circle. In particular the loop $\theta\mapsto\arg w(\theta)$ has winding zero. [step 1.1, algebra]

2.3 Choose $\delta$ so that $\delta\|\nabla f\|_\infty<1$. Then every graph point starts above $Y_-$, because $|p|^2-\delta^2|\nabla f|^2>-1$. Its backward Liouville trajectory, parameterized by $\tau\ge0$, is $(p(\tau),q(\tau))=(e^{-2\tau}p,e^\tau q)$. Along it, $ \frac{d}{d\tau}\bigl(|p(\tau)|^2-|q(\tau)|^2\bigr) =-4|p(\tau)|^2-2|q(\tau)|^2<0 $ since $q\ne0$, and the expression tends to $-\infty$. It therefore reaches $Y_-$ exactly once. The derivative is nonzero at the hit, so the inverse-function theorem in [F2] gives smooth dependence of the hitting time on the graph point. [F1, F2, step 1.1, given, algebra]

2.4 The radial map $\Phi(p)=g(|p|)p$ has tangential derivative eigenvalue $g$ and radial eigenvalue $g+rg'=g(1-\chi/2)>0$. The radial coordinate $r\mapsto rg(r)$ is strictly increasing, starts at zero, and tends to infinity, so $\Phi$ is a smooth global diffeomorphism by [F2]. Set $u=\Phi(p)$ and $\xi=(D\Phi_p)^{-T}q$. The cotangent lift satisfies $q\cdot dp=\xi\cdot du$; hence $ \lambda_H=d(2p\cdot q)-q\cdot dp=u\cdot d\xi+dK,\qquad K=2p\cdot q-u\cdot\xi. $ As $f(p)=u_1$, $q=\delta\nabla_pf$ is equivalent to $\xi=\delta e_1$. Thus the whole graph, including its cap and interpolation region, is the flat fibre in these coordinates. On the homogeneous exterior $D\Phi_p(p)=\Phi(p)/2$, whence $u\cdot\xi=2p\cdot q$ and $K=0$. [step 1.1, F1, F2, construct, algebra]

3.1 At the entry hit of a tail point, write its $p$-radius as $a>0$. Backward flow gives $|q_{\rm entry}|=\delta a^{-1/2}|w(\theta)|$; the equation of $Y_-$ is therefore $a^2-\delta^2|w|^2/a=-1$, or $ a^3+a=\delta^2|w(\theta)|^2. $ The left side is strictly increasing from zero to infinity for $a>0$, so the solution is unique. Substitution into the contact chart gives the entire Legendrian end $ Q(\theta)=\arg w(\theta),\quad z(\theta)=\delta^2|w(\theta)|\,e(\theta)\cdot w(\theta),\quad y(\theta)=\delta^2|w(\theta)|\,e(\theta)\cdot Jw(\theta). $ Writing $\varphi(\theta)=\arg w(\theta)$, these coordinates satisfy $ (z,y)=\delta^2|w(\theta)|^2\bigl(\cos(\theta-\varphi(\theta)),\sin(\theta-\varphi(\theta))\bigr). $ Indeed $e\cdot w=|w|\cos(\varphi-\theta)$ and $e\cdot Jw=|w|\sin(\theta-\varphi)$. Direct differentiation of $w/C=(1-\tfrac12\cos^2\theta,-\tfrac12\sin\theta\cos\theta)$ gives $ \varphi'(\theta)=\frac{3\sin^2\theta-1}{1+3\sin^2\theta}, \qquad \frac{d}{d\theta}(\theta-\varphi(\theta)) =\frac{2}{1+3\sin^2\theta}>0. $ The angle $\theta-\varphi(\theta)$ increases by $2\pi$ over a period. Hence $(z,y)$ is a positive radial graph with strictly increasing polar angle and is embedded and immersed. Its $Q$-winding is zero by step 2.2. Because the graph primitive vanishes on the tail, the symplectization identity in step 1.2 gives $dz+y\,dQ=0$. This is the whole completed end, not only the germ at $p=0$. [step 2.2, step 1.2, construct, algebra]

4.1 Steps 1.1, 1.2, 2.1–2.4, and 3.1 establish the exact graph, its full positive entry completion, its zero-winding contact end, and its global exact fibre coordinates. They prove no endpoint identification with a prescribed path slide and no boundary-attachment family. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 2.4, step 3.1] ∎

## Remarks

The proof reconstructs the local calculations in research/conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-hms-nonfano-closure/log-cy/four-dimensional/thimble-generation/critical-cut-stop-chart/submersion-disk-whole-entry-completion.md and submersion-body-has-a-global-exact-fibre-linearization.md. Those research files are construction evidence, not logical suppliers. This lemma deliberately stops before the actual endpoint boundary movie required by the next A-page item.
