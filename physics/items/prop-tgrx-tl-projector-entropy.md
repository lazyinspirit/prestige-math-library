---
id: prop-tgrx-tl-projector-entropy
kind: proposition
title: Jones-Wenzl image gives a finite maximally mixed sector
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-tgrx-tl-boundary-representation
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - def-tgrx-sector-code
  - prop-tgrx-code-area-entropy
  - def-trace-of-an-endomorphism
  - thm-natural-logarithm-laws
  - def-kernel-and-image-of-a-linear-map
  - def-temperley-lieb-closure-trace-and-partial-trace
dependency_roles:
  def-tgrx-tl-boundary-representation: mathematical-premise
  lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness: mathematical-premise
  def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators: mathematical-premise
  def-tgrx-sector-code: mathematical-premise
  prop-tgrx-code-area-entropy: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-kernel-and-image-of-a-linear-map: mathematical-premise
  def-temperley-lieb-closure-trace-and-partial-trace: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Joshua Chen, The Temperley-Lieb Categories and Skein Modules, complete thesis, Section 2.3
      url: https://arxiv.org/pdf/1502.06845
      locator: Complete 74-page thesis; Section 2.3, Theorem 2.3.2 and Proposition 2.3.6, PDF pp. 20-24, recursive projectors, uniqueness, reflection, and closure trace.
    - title: Zhenghan Wang, Topological Quantum Computation, CBMS Regional Conference Series in Mathematics 112, complete book
      url: https://web.math.ucsb.edu/~zhenghwa/data/course/cbms.pdf
      locator: Complete 129-page book; Chapter 1, Section 1.1.4, Theorem 1.12, PDF pp. 18-20, generic Jones-Wenzl projectors.
    - title: K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras
      url: https://arxiv.org/pdf/1702.08128
      locator: Complete 22-page paper; Sections 1.2 and 2.1, PDF pp. 1-2, root-of-unity parameter and trace-radical boundary.
    - title: John Watrous, The Theory of Quantum Information, complete author-hosted book manuscript
      url: https://jhwatrous.github.io/TQI.pdf
      locator: Complete 598-page book manuscript; Section 5.2, finite-dimensional density matrices and entropy.
---

## Statement

Under the finite Hilbert representation data, let $r:=\operatorname{rank}P>0$ and $\rho:=P/r$. An **orthogonal projection** on $H$ means a complex-linear endomorphism $Q$ satisfying $Q^2=Q$ and $\langle Qx,y\rangle=\langle x,Qy\rangle$ for all $x,y\in H$. Then $P$ is an orthogonal projection, $\rho$ is a density matrix with eigenvalue $1/r$ of multiplicity $r$ and eigenvalue $0$ on $\ker P$, and its entropy is $s(\rho)=\log r$ in nats. Under the published closure convention, the unnormalized diagrammatic closure trace of the algebraic Jones-Wenzl element is $\operatorname{Tr}_n(p_n)=[n+1]_\delta$. The proposition records this separately from the ordinary Hilbert-space trace $\operatorname{tr}_H(P)=r$ and does not assert the two values agree. A sufficient additional hypothesis for equality on this element is that the representation preserve these traces, $\operatorname{tr}_H(\pi(\Phi_n^{-1}(X)))=\operatorname{Tr}_n(X)$ for every $X\in\mathrm{TL}_n(\mathbb C,\delta)$.

## Statement references

[[def-tgrx-tl-boundary-representation]]

[[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]

[[def-tgrx-sector-code]]

[[prop-tgrx-code-area-entropy]]

[[def-trace-of-an-endomorphism]]

[[thm-natural-logarithm-laws]]

[[def-kernel-and-image-of-a-linear-map]]

[[def-temperley-lieb-closure-trace-and-partial-trace]]

[[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]]

[Joshua Chen, The Temperley-Lieb Categories and Skein Modules](https://arxiv.org/pdf/1502.06845)

[Zhenghan Wang, Topological Quantum Computation](https://web.math.ucsb.edu/~zhenghwa/data/course/cbms.pdf)

[K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras](https://arxiv.org/pdf/1702.08128)

[John Watrous, The Theory of Quantum Information](https://jhwatrous.github.io/TQI.pdf)

## Facts & Assumptions

**Given:** The data of the finite Hilbert representation definition, including $n\geq1$, $\delta\in\mathbb R$, nonzero denominators $[2]_\delta,\ldots,[n]_\delta$, a unital representation with self-adjoint generator images, and $r=\operatorname{rank}P>0$.

[L1] [[def-tgrx-tl-boundary-representation]]: $\widehat p_n$ is the presentation image of the recursively defined diagram projector, $P=\pi(\widehat p_n)$, every $\pi(u_i)$ is self-adjoint, and $r=\dim_{\mathbb C}\operatorname{im}P>0$.

[F1] [[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]]: $p_1=1_1$ and $p_{k+1}=(p_k\otimes1_1)-([k]_\delta/[k+1]_\delta)(p_k\otimes1_1)d_k(p_k\otimes1_1)$.

[F2] [[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]: if $[2]_\delta,\ldots,[n]_\delta$ are units, then $p_n^2=p_n$ and its unnormalized diagram closure trace is $[n+1]_\delta$.

[F3] [[def-temperley-lieb-closure-trace-and-partial-trace]]: $\operatorname{Tr}_n$ is the linear functional obtained by closing each top point to the corresponding bottom point and assigning a factor $\delta$ to each resulting loop.

[F4] [[def-tgrx-sector-code]]: a finite density matrix is self-adjoint, has nonnegative eigenvalues, and has trace one.

[F5] [[def-trace-of-an-endomorphism]]: the trace is the basis-independent sum of diagonal entries in any basis.

[F6] [[prop-tgrx-code-area-entropy]]: for a density matrix $\tau$, $s(\tau)=-\sum_{\lambda_j(\tau)>0}\lambda_j(\tau)\log\lambda_j(\tau)$, with $0\log0=0$ and natural logarithms.

[F7] [[thm-natural-logarithm-laws]]: $\log(1/x)=-\log x$ for $x>0$.

[F8] [[def-kernel-and-image-of-a-linear-map]]: $\ker T=\{x:T(x)=0\}$ and $\operatorname{im}T=\{T(x):x\in H\}$ for a linear endomorphism $T$ of $H$.

## Proof

**Proof technique:** Induct along the Jones-Wenzl recursion index to prove self-adjointness, then use the range-kernel decomposition of an idempotent.

1.1 By [F2], $p_n^2=p_n$. The map $\Phi_n$ and the representation $\pi$ are algebra homomorphisms, so $P^2=\pi(\widehat p_n^2)=\pi(\widehat p_n)=P$. [L1, F2, algebra]

1.2 The imported projector result [F2] gives the unnormalized closure value $\operatorname{Tr}_n(p_n)=[n+1]_\delta$, where [F3] defines $\operatorname{Tr}_n$ by closing the corresponding diagram endpoints and weighting each resulting loop by $\delta$. This is the diagram-algebra functional recorded separately from the Hilbert-space trace. [F2, F3]

1.3 At recursion index $1$, $Q_1:=\pi(\iota_{1,n}(\widehat p_1))=I_H$ is self-adjoint because $\widehat p_1=1$ and $\langle I_Hx,y\rangle=\langle x,I_Hy\rangle$ for all $x,y\in H$. [L1, F1, base]

1.4 Suppose $1\leq k<n$ and $Q_k:=\pi(\iota_{k,n}(\widehat p_k))$ is self-adjoint. By the commuting tower identity in [L1], the diagram recursion [F1] transfers under $\Phi_n^{-1}$ and $\pi$ to $Q_{k+1}=Q_k-c_kQ_k\pi(u_k)Q_k$, where $c_k=[k]_\delta/[k+1]_\delta\in\mathbb R$ because $\delta$ is real and the recurrence defines real quantum integers. For all $x,y\in H$, self-adjointness of $Q_k$ and $\pi(u_k)$, together with $c_k\in\mathbb R$, gives $\langle Q_{k+1}x,y\rangle=\langle Q_kx,y\rangle-c_k\langle Q_k\pi(u_k)Q_kx,y\rangle=\langle x,Q_ky\rangle-c_k\langle x,Q_k\pi(u_k)Q_ky\rangle=\langle x,Q_{k+1}y\rangle$. Thus $Q_{k+1}$ is self-adjoint. [L1, F1, ih, algebra]

2.1 Applying the finite step 1.4 from base step 1.3 through $k=n-1$ gives $Q_n=P$, with $P$ self-adjoint in the stated inner-product sense; when $n=1$, step 1.3 already gives the conclusion. [step 1.3, step 1.4, induction, discharge-induction]

3.1 For every $x\in H$, $x=Px+(I_H-P)x$, with $Px\in\operatorname{im}P$ and $P(I_H-P)x=0$, so $(I_H-P)x\in\ker P$ by [F8]. If $y=Pu\in\operatorname{im}P$ and $z\in\ker P$, then $\langle y,z\rangle=\langle Pu,z\rangle=\langle u,Pz\rangle=0$ by step 2.1 and $Pz=0$. Thus the two subspaces are orthogonal and sum to $H$, so their intersection is zero and $H=\operatorname{im}P\oplus\ker P$. The idempotent $P$ acts as the identity on $\operatorname{im}P$ and as zero on $\ker P$, so it is an orthogonal projection with eigenvalues $1$ on its $r$-dimensional image and $0$ on the kernel. [F8, step 1.1, step 2.1, algebra]

4.1 By step 3.1 and [F5], the ordinary Hilbert-space trace is $\operatorname{tr}_H(P)=r$, while step 1.2 gives the separate diagrammatic closure value. The operator $\rho=P/r$ is self-adjoint and has eigenvalues $1/r$ on $\operatorname{im}P$ and $0$ on $\ker P$. In a basis formed from bases of these subspaces its trace is $r(1/r)=1$, so it is a density matrix by [F4,F5]. Its entropy is $-r(1/r)\log(1/r)=\log r$ by [F6,F7]. This concludes the proof using the self-adjointness established by induction in step 2.1. [F4, F5, F6, F7, step 1.2, step 3.1, step 2.1, algebra, discharge-induction] ∎
