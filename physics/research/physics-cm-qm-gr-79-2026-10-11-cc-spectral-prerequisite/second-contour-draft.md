---
id: thm-nrqm-controlled-dynamics-contour-perturbation-projection
aliases: [nrqm-controlled-dynamics-contour-perturbation-projection]
kind: theorem
domain: mathematics
title: "Contour perturbation projection"
status: draft
origin: pipeline
dependency_level: 0
deps: [lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus, thm-circle-integrals-of-integer-monomials, thm-dominated-convergence, def-projection-valued-measure, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, thm-self-adjoint-resolvent-estimate, def-bounded-linear-operator, def-operator-norm, thm-cauchy-integral-formula-circle, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  thm-circle-integrals-of-integer-monomials: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 pp. 153-159 (strong and norm resolvent convergence; analytic perturbation via contour integrals)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II (analytic perturbation theory of isolated eigenvalues, surveyed via Buehler-Salamon, Functional Analysis, ETH lecture notes 2017, Section 5.3)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be an arbitrary complex Hilbert space, let $H_0$ be self-adjoint on its exact dense domain, and use the resolvent convention $R_0(z)=(z-H_0)^{-1}$. Let $E\in\mathbb R$ be an isolated eigenvalue with $\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$, and suppose its orthogonal spectral projection $P_0=E_{H_0}(\{E\})$ has rank one. Let $V\in\mathcal B(H)$ be self-adjoint with $v=\|V\|>0$, put $H_\lambda=H_0+\lambda V$ on $D(H_0)$, and let $\lambda\in\mathbb C$ satisfy $q=2|\lambda|v/g<1$. Write $\Gamma$ for the counterclockwise circle $|z-E|=g/2$. Then:

(a) $H_\lambda$ is closed and densely defined. For every $z\in\Gamma$, $z-H_\lambda$ is a bijection from $D(H_0)$ onto $H$, with
$$R_\lambda(z)=(z-H_\lambda)^{-1}=R_0(z)\sum_{k\ge0}(\lambda VR_0(z))^k,\qquad \|R_\lambda(z)\|\le\frac{2/g}{1-q},\qquad \|R_\lambda(z)-R_0(z)\|\le\frac{2}{g}\frac{q}{1-q}.$$
The series converges in operator norm uniformly on $\Gamma$ and locally uniformly in the complex disk $|\lambda|<g/(2v)$.

(b) The operator
$$P_\lambda=\frac1{2\pi i}\oint_\Gamma R_\lambda(z)dz$$
is an operator-norm holomorphic, rank-one Riesz projection throughout that disk. Its range lies in $D(H_0)$ and is invariant under $H_\lambda$, and it commutes with $H_\lambda$ on $D(H_0)$. There is exactly one spectral value $E_\lambda$ inside $\Gamma$; it is an eigenvalue of algebraic multiplicity one, with $\operatorname{ran}P_\lambda=\ker(H_\lambda-E_\lambda)$. The function $\lambda\mapsto E_\lambda$ is holomorphic.

(c) $\|P_\lambda-P_0\|\le q/(1-q)$. Rank one holds for every $q<1$, including when this bound is at least one. Whenever two projections $P_\lambda,P_\mu$ have distance less than one, the restrictions $P_\mu|_{\operatorname{ran}P_\lambda}$ and $P_\lambda|_{\operatorname{ran}P_\mu}$ are injective; local comparisons along the path $t\lambda$, $0\le t\le1$, preserve the rank throughout the full disk.

(d) For real $\lambda$, $H_\lambda$ is self-adjoint on $D(H_0)$, $E_\lambda$ is real, and $P_\lambda=E_{H_\lambda}(\{E_\lambda\})$ is its orthogonal spectral projection. For complex $\lambda$, $P_\lambda$ is the Riesz projection; self-adjointness or orthogonality is not asserted.

No separability or Axiom of Choice assumption on $H$ is added. Degenerate clusters are outside this rank-one statement.

## Facts & Assumptions

**Given:** CC, $H,H_0,E,g,P_0,V,v$ and $\lambda$ as above. Inner products are linear in the first variable. All contour integrals are norm limits of Riemann sums on a fixed compact circle.

[F1] [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]] gives, under CC on arbitrary $H$, the unique regular representing PVM, bounded Borel calculus and exact square-integrability operator domain, constructed from compatible vector-local Cayley spaces. Its current registered Statement also supplies support-equals-spectrum and the distance resolvent bound, with their local proof in the supplier. This research draft uses those exact premises; whole-cone/native acceptance remains with the sole owning successor.

[F2] [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-bounded-linear-operator]] and [[def-operator-norm]] specify the operator domains, inverse convention, boundedness and norm products. [[thm-self-adjoint-resolvent-estimate]] gives nonreal self-adjoint resolvents under CC. Neumann series converge in the complete space of bounded operators when the operator norm is less than one.

[F3] [[thm-circle-integrals-of-integer-monomials]] and [[thm-cauchy-integral-formula-circle]] provide the scalar circle kernel integrals, extended to operator-valued integrals by testing continuous scalar pairings and uniform norm limits. [[thm-dominated-convergence]] applies to the bounded scalar spectral integrals. The annular contour independence and Riesz projection identities required here are derived explicitly below; a self-adjoint PVM for complex $H_\lambda$ is not presumed.

## Proof

1.1 [The supplied spectral support gives the gap estimate] Apply [F1] to the arbitrary Hilbert space and self-adjoint $H_0$. Its PVM is concentrated on $\sigma(H_0)$, its resolvent multiplier has the exact domain, and its nonzero-neighborhood characterization identifies the spectral support with that spectrum. Its bound applies equally after changing from $(H_0-z)^{-1}$ to $R_0(z)=(z-H_0)^{-1}$, which changes only the sign. For $z\in\Gamma$, the distinguished spectral point $E$ has distance $g/2$ from $z$, while every other $t\in\sigma(H_0)$ satisfies $|t-z|\ge |t-E|-|z-E|\ge g/2$. Therefore $\operatorname{dist}(z,\sigma(H_0))\ge g/2$ and $\|R_0(z)\|\le2/g$ on $\Gamma$. The only spectral point in the open interior is $E$. No separability or arbitrary global spectral decomposition is used. [F1, F2, given, algebra]

2.1 [Correct Neumann factors and exact domains] The bounded perturbation is closed on $D(H_0)$: if $x_n\to x$ and $H_\lambda x_n\to y$, then $H_0x_n=H_\lambda x_n-\lambda Vx_n\to y-\lambda Vx$ and closedness of $H_0$ gives the claim. This domain is dense. On $D(H_0)$ factor $z-H_\lambda=(I-\lambda VR_0(z))(z-H_0)$. Step 1.1 gives $\|\lambda VR_0(z)\|\le q<1$, so the displayed inverse series converges uniformly and maps $H$ into $D(H_0)$. Multiplying in the stated order gives both $(z-H_\lambda)R_\lambda=I_H$ and $R_\lambda(z-H_\lambda)=I_{D(H_0)}$. The geometric-series bounds give (a), with resolvent difference bound $(2/g)q/(1-q)$. Local inverse Neumann series also make $z\mapsto R_\lambda(z)$ norm holomorphic near the circle, and the uniform coupling power series makes $\lambda\mapsto R_\lambda(z)$ norm holomorphic throughout the full disk. A bounded perturbation adjoint test gives $D(H_\lambda^*)=D(H_0)$ and $H_\lambda^*=H_0+\overline\lambda V$: subtract the bounded functional arising from $\lambda V$ in the defining adjoint identity to identify the domain with $D(H_0^*)$. In particular $H_\lambda$ is self-adjoint for real $\lambda$. [step 1.1, F2, algebra]

3.1 [Idempotence without a complex PVM] For each fixed $\lambda$, the inverse norm bound in step 2.1 and another Neumann series give an open annulus around $\Gamma$ consisting of resolvent points. Within this annulus, circle integrals of a holomorphic operator function are independent of radius: differentiating $\int_0^{2\pi}f(E+re^{it})ire^{it}dt$ in $r$ gives the integral of the $t$ derivative of $f(E+re^{it})e^{it}$, which is zero by periodicity. Choose concentric outer and inner circles in the annulus. The inverse equations give $R_\lambda(z)R_\lambda(w)=[R_\lambda(w)-R_\lambda(z)]/(z-w)$ on the two circles. In the double integral of this identity, integrating the first term in the outer variable gives its inner projection integral because $\oint dz/(z-w)=2\pi i$; integrating the second term in the inner variable gives zero because $\oint dw/(z-w)=0$. Interchanging continuous compact integrals is justified by norm Riemann sums. Both circle projections equal $P_\lambda$ by annular independence, so $P_\lambda^2=P_\lambda$. Resolvents commute by the same identity, and thus commute with $P_\lambda$. Also $H_\lambda R_\lambda(z)=zR_\lambda(z)-I$. Integrating in the graph norm of the closed $H_\lambda$ shows $P_\lambda H\subseteq D(H_0)$ and $H_\lambda P_\lambda=(2\pi i)^{-1}\oint zR_\lambda(z)dz$, a bounded operator; the inverse equations on $D(H_0)$ give $P_\lambda H_\lambda=H_\lambda P_\lambda$ there. The uniform series makes $P_\lambda$ and this bounded $H_\lambda P_\lambda$ holomorphic in $\lambda$. [step 2.1, F3, algebra]

4.1 [The initial projection and full-disk rank argument] At $\lambda=0$, [F1] evaluates the scalar contour integrals against the spectral measures of $H_0$: their support misses the circle, and the circle integral of $(z-t)^{-1}$ is one for $|t-E|<g/2$ and zero outside. Hence $P_{\lambda=0}=E_{H_0}(\{E\})=P_0$. The circle length is $\pi g$, so the difference estimate in step 2.1 gives $\|P_\lambda-P_0\|\le q/(1-q)$. For bounded idempotents $P,Q$ with $\|P-Q\|<1$, $Qx=0$, $x\in\operatorname{ran}P$, implies $\|x\|=\|(P-Q)x\|<\|x\|$ unless $x=0$. Thus $Q|_{\operatorname{ran}P}$ is injective, and the reverse restriction is injective by the same argument. For fixed $\lambda$ and $s,t\in[0,1]$, the inverse equations give $R_{s\lambda}(z)-R_{t\lambda}(z)=(s-t)\lambda R_{s\lambda}(z)VR_{t\lambda}(z)$, so $\|P_{s\lambda}-P_{t\lambda}\|\le q|s-t|/(1-q)^2$. Choose an integer $N>q/(1-q)^2$ and compare the finite sequence $P_{j\lambda/N}$, $0\le j\le N$. Consecutive distances are less than one, so the two injections preserve the one-dimensional rank at every step. Therefore $P_\lambda$ has rank one for every $q<1$, even when its distance from $P_0$ is not less than one. [step 2.1, step 3.1, F1, F3, algebra]

5.1 [The entire interior spectrum is one simple eigenvalue] The invariant one-dimensional range of $P_\lambda$ supports a scalar $E_\lambda$ with $H_\lambda P_\lambda=E_\lambda P_\lambda$. Since $R_\lambda(z)P_\lambda=(z-E_\lambda)^{-1}P_\lambda$, the projection integral and $P_\lambda\ne0$ imply that $E_\lambda$ lies strictly inside the circle. For any $w$ inside it define the bounded operator $B(w)=(2\pi i)^{-1}\oint R_\lambda(z)/(z-w)dz$. Its range lies in $D(H_0)$ by graph-norm integration, and the inverse equations give $(w-H_\lambda)B(w)=I-P_\lambda$ on $H$ and $B(w)(w-H_\lambda)=I-P_\lambda$ on $D(H_0)$. It commutes with $P_\lambda$. Its product with $P_\lambda$ is zero: the scalar integral of $[(z-E_\lambda)(z-w)]^{-1}$ is zero, both when the two interior poles are distinct by partial fractions and when equal by the double-pole monomial integral. Thus $B(w)$ is the two-sided inverse of $w-H_\lambda$ on $\ker P_\lambda$, including the exact restricted domain. For $w\ne E_\lambda$, $B(w)+(w-E_\lambda)^{-1}P_\lambda$ is the two-sided inverse on all $H$, proving absence of any other interior spectrum. At $w=E_\lambda$, the complementary inverse excludes complementary eigenvectors and generalized eigenvectors, while the rank-one range has no nontrivial Jordan chain. The eigenspace and algebraic multiplicity are therefore precisely those asserted in (b). [step 3.1, step 4.1, F3, algebra]

6.1 [Holomorphic eigenvalue and the real-coupling interpretation] Around any coupling $\lambda_0$ choose a nonzero $x\in\operatorname{ran}P_{\lambda_0}$ and the continuous complex-linear functional $\ell(y)=\langle y,x\rangle$. Continuity makes $\ell(P_\lambda x)\ne0$ nearby. There $E_\lambda=\ell(H_\lambda P_\lambda x)/\ell(P_\lambda x)$ is holomorphic by step 3.1. The uniqueness of step 5.1 makes these locally defined functions agree, so $E_\lambda$ is holomorphic throughout the disk. For real $\lambda$, self-adjointness from step 2.1 and [F1] imply $E_\lambda\in\mathbb R$; the same scalar contour evaluation as in step 4.1, now applied to $H_\lambda$, identifies $P_\lambda$ with its orthogonal PVM projection on the interior, hence on $\{E_\lambda\}$. For complex coupling the valid construction is the Riesz projection of steps 3.1–5.1. All claims follow on arbitrary $H$ under CC without adding separability or AC. [step 2.1, step 3.1, step 4.1, step 5.1, F1, F3, algebra] ∎

## Counterchecks of the replaced interface

With $H_0=\operatorname{diag}(0,1)$, $V=\operatorname{diag}(1,0)$, $g=1$, $\lambda=1/10$ and $z=1/2$, the corrected resolvent difference has norm $1/2$, while the replaced bound $(2/g)(q/2)/(1-q/2)$ gives $2/9$. Also the replaced sign convention $(H_0-z)^{-1}$ integrated counterclockwise gives $-P_0$ at zero coupling, which is not an idempotent nonzero projection.

For $H_0=\operatorname{diag}(0,1)$, $V=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\lambda=2i/5$, one has $q=4/5$. The interior eigenvalue is $1/5$ (the other is $4/5$), and its Riesz projection is $\begin{pmatrix}4/3&-2i/3\\-2i/3&-1/3\end{pmatrix}$. This projection is nonorthogonal and its distance from $P_0=\operatorname{diag}(1,0)$ is $1$, exceeding the replaced bound $(q/2)/(1-q/2)=2/3$. The full disk rank-one conclusion remains true and is proved by the finite-path argument above.

## Remarks

Research-only replacement. The arbitrary-H CC calculus is now a registered local draft supplier, whose current carrier is hash-bound in the adjacent evidence. Its owning focused review is reported by the sole successor; whole-cone/native acceptance remains held. This draft uses its exact support/spectrum and resolvent-bound premises and proves the reduced-gap use locally. The public interface repairs the sign, constants and complex/self-adjoint distinction while retaining and explicitly proving the full complex disk, analytic rank-one projection, unique analytic eigenvalue and exact invariant-domain claims. The sole spectral successor owns every required old/current/alias consumer review, mirrors, native holds, caps and production integration. No supplier acceptance or full-text source-reading stamp is asserted here.
