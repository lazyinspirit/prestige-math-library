---
id: thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients
aliases:
- nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients
kind: theorem
domain: mathematics
title: Simple-level reduced-resolvent coefficients
status: published
origin: pipeline
dependency_level: 3
deps:
- lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus
- thm-nrqm-controlled-dynamics-contour-perturbation-projection
- def-projection-valued-measure
- def-resolvent-and-spectrum-of-a-closed-unbounded-operator
- def-bounded-linear-operator
- def-operator-norm
- def-symmetric-self-adjoint-and-essentially-self-adjoint
- def-hilbert-space
- def-countable-choice
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Section 6.6 pp. 153-159 (analytic perturbation series for a simple eigenvalue)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Non-Degenerate Perturbation Theory pp. 155-156 (first- and second-order
      energy shifts)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and adopt the
hypotheses of [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]]:
$H_0$ self-adjoint with isolated simple eigenvalue $E$, gap $g>0$, normalized
eigenvector $\psi_0$ with $P_0\psi_0=\psi_0$, $V=V^*\in\mathcal B(H)$ with
$v=\|V\|$, and $q=2|\lambda|v/g<1/2$. Write
$Q=I-P_0$, $H_Q=H_0|_{D(H_0)\cap QH}$ on the reducing space $QH$, and define the reduced inverse
$$S=\iota_Q(H_Q-E)^{-1}Q:H\longrightarrow D(H_0)\cap QH,$$
where $\iota_Q:QH\hookrightarrow H$ is the inclusion (and the zero complementary space gives the zero map). Then $S$ is bounded with $\|S\|\le1/g$; no inverse of $H_0-E$ on all of $H$ is asserted. Let $P_\lambda$, $E_\lambda$ be the perturbed projection and
its unique eigenvalue inside the contour, as in
[[thm-nrqm-controlled-dynamics-contour-perturbation-projection]]. Define the
gauge-normalized eigenvector
$$\psi(\lambda):=\frac{P_\lambda\psi_0}{\langle P_\lambda\psi_0,\psi_0\rangle}.$$
Then $\psi(\lambda)$ is analytic in $\lambda$ with $\|\psi(\lambda)\|\le3$ for
$q<1/2$, $\langle\psi(\lambda),\psi_0\rangle=1$, and $(H_0+\lambda V)\psi(\lambda)=E_\lambda\psi(\lambda)$.
Moreover the first and second coefficients are
$$E'(0)=\langle V\psi_0,\psi_0\rangle,\qquad \psi'(0)=-SV\psi_0,\qquad E''(0)=-2\langle VSV\psi_0,\psi_0\rangle,$$
where all pairings are finite and the second derivative involves the whole
complementary spectral subspace, not only bound states. Equivalently
$E_\lambda=E+\lambda\langle V\psi_0,\psi_0\rangle-\lambda^2\langle VSV\psi_0,\psi_0\rangle+O(\lambda^3)$
for $|\lambda|$ in the disk of the remainder estimate; the $O(\lambda^3)$ is made
explicit in [[thm-nrqm-controlled-dynamics-analytic-perturbation-remainder]].

## Facts & Assumptions

**Given:** CC and the data of the Statement, with arbitrary complex $H$ and inner product linear in the first variable; $q=2|\lambda|v/g<1/2$.

[F1] [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]] gives the PVM, exact bounded/unbounded multiplier domains, support/spectrum characterization and distance resolvent bound on arbitrary Hilbert spaces under CC. The spectral projection $Q$ reduces $H_0$ including its domain. Its restriction $H_Q$ is self-adjoint, by the restricted nonreal inverses and the adjoint-domain argument; equivalently the restricted PVM has the exact self-adjoint multiplication domain. The reduced inverse at $E$ is constructed in step 1.1. No AC spectral theorem or separability assumption is used.

[F2] The current [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]] supplies the holomorphic rank-one Riesz projection $P_\lambda$, unique holomorphic eigenvalue $E_\lambda$ inside $|z-E|=g/2$, $P_\lambda H\subseteq D(H_0)$, and bounded holomorphic $H_\lambda P_\lambda$ throughout $q<1$. It gives $\|P_\lambda-P_0\|\le q/(1-q)<1$ when $q<1/2$; this exact supplied bound, rather than an unsupported inference that it is at most $1/2$, is the bound used below. For complex $\lambda$ it is a Riesz projection, not an orthogonal PVM projection.

[F3] [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-bounded-linear-operator]], [[def-operator-norm]], [[def-projection-valued-measure]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]] and [[def-hilbert-space]] specify inverses, the bounded Neumann series and operator norms, spectral projections and domains. $P_0x=\langle x,\psi_0\rangle\psi_0$ and $H_0\psi_0=E\psi_0$.

## Proof

1.1 [The actual complementary inverse] The restricted PVM of $H_Q$ has zero projection at $E$, and its spectral support is contained in $\sigma(H_0)\setminus\{E\}$. Indeed its representing measures are restrictions to $QH$, and the neighborhood characterization of [F1] shows that no spectral point can occur in the gap $|t-E|<g$. The multiplier $b(t)=1/(t-E)$ on this restricted support has $|b|\le1/g$ and bounded $tb(t)$, so its calculus maps $QH$ into exactly $D(H_Q)$ and gives the two-sided inverse $S_Q=(H_Q-E)^{-1}$ with norm at most $1/g$. Extend it by zero on $P_0H$ to get the stated $S$. It is self-adjoint because its multiplier is real, and $SP_0=P_0S=0$, $(H_0-E)S=Q$ on $H$ and $S(H_0-E)=Q$ on $D(H_0)$. This uses the whole complementary spectral support, including any continuous part. [F1, F3, given, algebra]

2.1 [Spectral inclusion and an exact Q-block inverse] Put $\delta=|\lambda|v$ and $e_\lambda=E_\lambda-E$. Whenever $\operatorname{dist}(z,\sigma(H_0))>\delta$, [F1] makes $\|\lambda V(z-H_0)^{-1}\|<1$ and the correct Neumann factor $(z-H_\lambda)=[I-\lambda V(z-H_0)^{-1}](z-H_0)$ gives a two-sided inverse on the actual domain. Hence every spectral point of $H_\lambda$ has distance at most $\delta$ from $\sigma(H_0)$. Since $E_\lambda$ lies inside the $g/2$ circle and $\delta<g/4$, all spectral points of $H_0$ other than $E$ have distance greater than $g/2$ from it; therefore $|e_\lambda|\le\delta$. On $QH$ consider $T_\lambda=H_Q-E-e_\lambda+\lambda QVQ$, on $D(H_Q)$. The bounded perturbation $D_\lambda=\lambda QVQ-e_\lambda I$ has norm at most $2\delta=qg<g$. The factorization $T_\lambda=(I+D_\lambda S_Q)(H_Q-E)$ yields the two-sided inverse $B_\lambda=S_Q(I+D_\lambda S_Q)^{-1}$, mapping $QH$ into the exact $D(H_Q)$, with $\|B_\lambda\|\le1/[g(1-q)]$. These inverses are holomorphic in $\lambda$ because $e_\lambda$ is and the geometric series converges locally uniformly. [step 1.1, F1, F2, F3, algebra]

3.1 [The gauge denominator and full-radius norm bound] If $u\ne0$ is an eigenvector in $P_\lambda H$ and $P_0u=0$, the projected eigenvalue equation is $T_\lambda u=0$, contradicting step 2.1; thus every nonzero eigenvector has a nonzero $\psi_0$ coefficient. Also $P_\lambda\psi_0\ne0$ because $\|P_\lambda-P_0\|<1$ by [F2]. It is an eigenvector, so its gauge denominator $\langle P_\lambda\psi_0,\psi_0\rangle$ is nonzero throughout the full $q<1/2$ disk. Division gives the holomorphic eigenvector of the Statement, with $\langle\psi(\lambda),\psi_0\rangle=1$. Write $\psi=\psi_0+\chi$, $\chi\in QH$. The Q-block equation is $T_\lambda\chi=-\lambda QV\psi_0$, so $\chi=-\lambda B_\lambda QV\psi_0$ and $\|\chi\|\le q/[2(1-q)]<1/2$, in particular $\|Q\psi\|\le q$. Orthogonality gives $\|\psi\|^2=1+\|\chi\|^2<5/4$, so the original public bound $\|\psi\|\le3$ holds on the entire stated complex disk. Graph analyticity also holds: $H_0P_\lambda=H_\lambda P_\lambda-\lambda VP_\lambda$ is bounded holomorphic by [F2], and division by the same nonzero scalar gives holomorphy of both $\psi$ and $H_0\psi$. Thus differentiating the unbounded eigenvalue equation is justified in the exact graph domain. [step 2.1, F2, F3, algebra]

4.1 [The holomorphic gauge energy identity] Pair the eigenvalue equation with the fixed $\psi_0$ in the second argument. Self-adjointness of $H_0$ and the gauge give $\langle H_0\psi,\psi_0\rangle=\langle\psi,H_0\psi_0\rangle=E$ and $\langle E_\lambda\psi,\psi_0\rangle=E_\lambda$. Consequently $E_\lambda=E+\lambda\langle V\psi(\lambda),\psi_0\rangle$, a holomorphic scalar identity with a fixed second vector. Since $\psi(0)=\psi_0$, its derivative is $E'(0)=\langle V\psi_0,\psi_0\rangle$. The gauge gives $\langle\psi'(0),\psi_0\rangle=0$. No unit-norm claim for the gauge vector, or holomorphic pairing with a moving second vector, is used. [step 3.1, F3, algebra]

5.1 [Vector derivative and second energy coefficient] Differentiate the eigenvalue equation at zero using graph analyticity in step 3.1: $(H_0-E)\psi'(0)=-V\psi_0+E'(0)\psi_0$. Apply the actual $S$ and use the gauge, so $Q\psi'(0)=\psi'(0)$; step 1.1 gives $\psi'(0)=-SV\psi_0$. Differentiating the holomorphic scalar identity of step 4.1 twice gives $E''(0)=2\langle V\psi'(0),\psi_0\rangle=-2\langle VSV\psi_0,\psi_0\rangle$. All quantities are finite because $V,S$ are bounded. The second coefficient is real because $VSV$ is self-adjoint, but no real-part operation is inserted into a complex derivative. Taylor expansion gives exactly the first two terms and $O(\lambda^3)$ of the Statement; the companion remainder item supplies its explicit bound. The public analytic radius and all coefficient claims are retained under CC on arbitrary $H$. [step 1.1, step 3.1, step 4.1, F3, algebra] ∎

## Counterchecks and the projection-bound distinction

A literal inverse $(H_0-E)^{-1}$ on $H$ does not exist: for $H_0=\operatorname{diag}(1,2)$ and $E=1$, its kernel contains the unit eigenvector $(1,0)$. The reduced $QH$ inverse is well-defined and is the intended mathematical object.

For the same $H_0$, take $V=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\lambda=1/10$, so $q=1/5<1/2$. The lower eigenvalue is $E_\lambda=(15-\sqrt{26})/10\ne0$ and the gauge vector is $\psi=(1,5-\sqrt{26})$. Thus $\|\psi\|^2=1+(5-\sqrt{26})^2>1$ and $\langle H_\lambda\psi,\psi\rangle=E_\lambda\|\psi\|^2\ne E_\lambda$. This is an exact counterexample to the replaced moving-vector energy identity; the fixed-vector identity in step 4.1 gives $E_\lambda$ correctly.

The original internal assertion $\|P_\lambda-P_0\|\le1/2$ was stated for $q<1/2$. The repaired contour supplier proves only $\|P_\lambda-P_0\|\le q/(1-q)<1$ on that predicate, which by itself does not imply the asserted half-bound when $q>1/3$. This draft does not call the stronger half-bound false: lack of its proof from that estimate is not a counterexample. The complete gauge/radius/norm argument above uses the actual supplied bound and the exact Q-block equation, so no half-bound premise or radius narrowing is needed.
