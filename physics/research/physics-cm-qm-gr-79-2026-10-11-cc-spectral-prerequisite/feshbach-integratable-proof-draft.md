---
id: thm-nrqm-controlled-dynamics-degenerate-feshbach-error
aliases: [nrqm-controlled-dynamics-degenerate-feshbach-error]
kind: theorem
domain: mathematics
title: "Degenerate Feshbach error"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-projection-valued-measure, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
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
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 pp. 153-159 (analytic perturbation and resolvent identities)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th edition, finite-dimensional orthonormal bases"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be an arbitrary complex Hilbert space ([[def-hilbert-space]]) and let $H_0$ be self-adjoint on its exact dense domain $D(H_0)$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Let $E\in\mathbb R$ be an isolated eigenvalue of finite multiplicity $r\ge1$, with $\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$ ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]). Write $P=E_{H_0}(\{E\})$ for its orthogonal spectral projection and $Q=I-P$, using the CC arbitrary-H calculus of [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]]. Let $V=V^*\in\mathcal B(H)$ with $v=\|V\|>0$, and let $\lambda\in\mathbb R$ satisfy $|\lambda|v<g/4$ ([[def-bounded-linear-operator]], [[def-operator-norm]]). Put $H_\lambda=H_0+\lambda V$ on $D(H_0)$ and assume it is self-adjoint there. Then:

(a) For every real $z$ with $|z-E|+|\lambda|v\le g/2$, the operator $T_\lambda(z)=Q(H_\lambda-z)Q$ **on $QH$**, with domain $QD(H_0)=D(H_0)\cap QH$, has a bounded two-sided inverse $B(z):QH\to QD(H_0)$ with $\|B(z)\|\le4/g$. This includes $z=E$ and the case $QH=\{0\}$, with its unique zero-space inverse.

(b) If such $z$ is an eigenvalue of $H_\lambda$ with eigenvector $\psi\ne0$, then $\varphi=P\psi\ne0$, $\chi=Q\psi=-\lambda B(z)QVP\varphi$, and

$$[EP+\lambda PVP-\lambda^2PVQB(z)QVP]\varphi=z\varphi.$$

(c) Every such eigenvalue satisfies

$$\operatorname{dist}(z,E+\lambda\operatorname{spec}_{PH}(PVP))\le\frac{4\lambda^2v^2}{g},$$

where $\operatorname{spec}_{PH}(PVP)$ is the spectrum of the Hermitian operator $(PVP)|_{PH}$ on the finite-dimensional space $PH$. The statement retains all finite multiplicities $r$ and does not identify any eigenvector of $PVP$ with an exact eigenvector of $V$.

## Facts & Assumptions

**Given:** CC, arbitrary complex $H$ with first-variable-linear inner product, $H_0,E,g,r,P,Q,V,v,\lambda,H_\lambda$ as above, and real $z$ with $|z-E|+|\lambda|v\le g/2$.

[F1] [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]] proves under CC alone on arbitrary complex Hilbert spaces the unique representing PVM, concentration on the spectrum, the nonzero-neighborhood characterization of spectral points, bounded Borel product and adjoint laws, and the exact unbounded square-integrability domain. In particular bounded Borel $b$ has $\|b(H_0)\|\le\sup|b|$, and if $t b(t)$ is bounded then $b(H_0)H\subset D(H_0)$ with the corresponding multiplier identity. [[def-projection-valued-measure]] specifies the projections and strong countable additivity.

[F2] [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-bounded-linear-operator]] and [[def-operator-norm]] specify the inverse domains and operator norm products. For a bounded operator $K$ with $\|K\|<1$, the norm-convergent series $\sum_{j\ge0}(-K)^j$ is the inverse of $I+K$: multiplying its finite sums by $I+K$ leaves a remainder of norm at most $\|K\|^{N+1}$, which tends to zero. Its norm is at most $(1-\|K\|)^{-1}$.

[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] supplies an orthonormal basis in each finite-dimensional real or complex inner product space, by finite Gram–Schmidt; no arbitrary-index choice is involved. Finite sums in such a basis satisfy the Pythagorean norm identity. The spectral decomposition of the finite Hermitian matrix used below is derived in the proof from [F1], rather than imported from an AC or Weyl theorem.

## Proof

1.1 [The atom and domain projections] By [F1], the projection on $\{E\}$ has range $\ker(H_0-E)$: a vector on that atom has finite second moment and operator value $E$ times itself, while the identity $\|(H_0-E)u\|^2=\int|t-E|^2d\langle E_{H_0}(t)u,u\rangle$ forces every eigenvector's scalar measure onto the atom. Thus $PH\subset D(H_0)$, $H_0P=EP$, and $P$ and $Q$ preserve $D(H_0)$ and commute with $H_0$ there by the multiplier product and exact-domain identities. In particular $QD(H_0)=D(H_0)\cap QH$. The gap and spectral concentration show $E_{H_0}((E-g,E+g))=P$, so every vector in $QH$ has its scalar measure supported where $|t-E|\ge g$. [F1, given, algebra]

1.2 [Finite Hermitian diagonalization under the actual CC supplier] Apply [F1] to the bounded Hermitian operator $(PVP)|_{PH}$ on the $r$-dimensional Hilbert space $PH$. Its spectrum has at most $r$ points: if there were $r+1$ distinct spectral points, choose disjoint bounded neighborhoods around this finite list. Each neighborhood projection is nonzero by the supplied spectral characterization; choosing and normalizing one vector in each range gives $r+1$ mutually orthogonal nonzero vectors in $PH$, impossible. These are finitely many choices. The spectrum is nonempty, since otherwise concentration on the spectrum would contradict the total projection $I_{PH}$ with $r\ge1$. Concentration and finite additivity now give $I_{PH}$ as the finite sum of its atom projections. By the exact-domain residual formula each atom range is the eigenspace for that spectral value. Choose an orthonormal basis in each of these finitely many orthogonal eigenspaces using [F3], and combine them into an orthonormal eigenbasis $(e_j)_{j=1}^r$, with eigenvalues $\mu_j$. This proves precisely the finite diagonalization needed here using CC, without an AC spectral theorem or a Weyl perturbation inequality. [F1, F3, given, construct, algebra]

2.1 [The actual reduced resolvent, including the unperturbed eigenvalue] Put $A_Q=H_0|_{D(H_0)\cap QH}$ on $QH$ and $T_0(z)=A_Q-z$. Define $b_z(t)=(t-z)^{-1}$ when $|t-E|\ge g$ and $b_z(t)=0$ otherwise. Since $|z-E|\le g/2$, $|t-z|\ge g-|z-E|\ge g/2$ on the first region. Thus $b_z$ is bounded by $2/g$, and $t b_z(t)$ is bounded. By [F1], $R_Q(z)=b_z(H_0)|_{QH}$ maps $QH$ into $QD(H_0)$, with norm at most $2/g$. The multiplier products equal one on the $Q$-spectral support, giving $T_0(z)R_Q(z)=I_{QH}$ and $R_Q(z)T_0(z)=I$ on $QD(H_0)$. Hence this is the genuine reduced inverse, also at $z=E$; no full inverse of $H_0-E$ is used. If $QH=0$, all these identities concern the unique map of the zero space, whose identity equals its zero map. [step 1.1, F1, F2, algebra]

3.1 [The correctly ordered Neumann factors] Let $W=(QVQ)|_{QH}$, a bounded Hermitian operator with $\|W\|\le v$. On exactly $QD(H_0)$ one has $T_\lambda(z)=T_0(z)+\lambda W=(I_{QH}+\lambda W R_Q(z))T_0(z)$, because $R_Q(z)T_0(z)$ is the domain identity. The rightmost unbounded factor acts first. Set $S_z=I_{QH}+\lambda W R_Q(z)$; then $\|\lambda W R_Q(z)\|\le2|\lambda|v/g<1/2$, so [F2] gives its norm-convergent inverse. Define $B(z)=R_Q(z)S_z^{-1}$. This maps into $QD(H_0)$, and $T_\lambda(z)B(z)=S_zT_0(z)R_Q(z)S_z^{-1}=I_{QH}$; on the domain, $B(z)T_\lambda(z)=R_Q(z)S_z^{-1}S_zT_0(z)=I$. Its norm is at most $(2/g)/(1-2|\lambda|v/g)\le4/g$. This proves (a) with both inverse equations and the exact restricted domain. [step 2.1, F2, given, algebra]

4.1 [Self-adjointness of the inverse] For real $z,\lambda$, $T_\lambda(z)$ is symmetric on its restricted domain, since $H_0,V$ are symmetric and $Q$ is orthogonal. For arbitrary $f,h\in QH$ put $u=B(z)f$, $w=B(z)h$, which belong to that domain. Then $\langle B(z)f,h\rangle=\langle u,T_\lambda(z)w\rangle=\langle T_\lambda(z)u,w\rangle=\langle f,B(z)h\rangle$. Thus the bounded everywhere-defined inverse is self-adjoint. The same assertion is valid on the zero complement. [step 3.1, given, algebra]

4.2 [The exact eigenvector reduction] Let $\psi\in D(H_0)$ be a nonzero eigenvector at the specified $z$, and set $\varphi=P\psi$, $\chi=Q\psi$. Step 1.1 places $\varphi\in PH\subset D(H_0)$ and $\chi\in QD(H_0)$. Applying $Q$ to $H_\lambda\psi=z\psi$ gives $T_\lambda(z)\chi=-\lambda QVP\varphi$, hence $\chi=-\lambda B(z)QVP\varphi$ by step 3.1. If $\varphi=0$, this forces $\chi=0$ and contradicts $\psi\ne0$. Applying $P$ gives $EP\varphi+\lambda PVP\varphi+\lambda PVQ\chi=z\varphi$. Substitution proves the matrix equation in (b); each use of $B(z)$ has an input in $QH$. [step 1.1, step 3.1, given, algebra]

5.1 [The Hermitian correction with its retained constant] On $PH$ define $M_0=E I_{PH}+\lambda(PVP)|_{PH}$ and $K_z=-\lambda^2(PVQ)B(z)(QVP)|_{PH}$. The adjoint identity $(QVP)^*=PVQ$, step 4.1 and real $\lambda$ make both $M_0$ and $K_z$ Hermitian. Operator norm products give $\|K_z\|\le\lambda^2v^2\|B(z)\|\le4\lambda^2v^2/g$. Step 4.2 says $(M_0+K_z)\varphi=z\varphi$ with $\varphi\ne0$. [step 3.1, step 4.1, step 4.2, F2, algebra]

6.1 [The residual estimate and conclusion] Write $\varphi=\sum_{j=1}^r\langle\varphi,e_j\rangle e_j$ in the eigenbasis of step 1.2. Then $M_0e_j=(E+\lambda\mu_j)e_j$, so the finite Pythagorean identity gives $\|(M_0-z)\varphi\|^2=\sum_{j=1}^r|E+\lambda\mu_j-z|^2|\langle\varphi,e_j\rangle|^2\ge\operatorname{dist}(z,E+\lambda\operatorname{spec}_{PH}(PVP))^2\|\varphi\|^2$. Step 5.1 gives $(M_0-z)\varphi=-K_z\varphi$ and bounds its norm by $4\lambda^2v^2\|\varphi\|/g$. Since $\varphi\ne0$, division proves (c). Together with steps 2.1 and 3.1 this proves all parts for arbitrary $H$, every finite $r\ge1$, including $\lambda=0$, $z=E$ and $QH=0$. [step 4.2, step 5.1, step 1.2, F3, algebra] ∎

## Research integration note

Carrier-shaped proposal only. The real-coupling condition was already implied by the original assumption that $H_0+\lambda V$ is self-adjoint on $D(H_0)$ with $V=V^*$ and $v>0$: symmetry yields $(\lambda-\overline\lambda)V=0$ on the dense domain and hence on $H$, so $\lambda$ is real. This explicit formulation does not narrow the original admissible data. The exact supplier change is the actual CC arbitrary-H calculus in place of the generic AC spectral theorem; the rank-one contour and norm-Dyson suppliers are unnecessary. Current dependency level 2 is computed from the registered arbitrary-H lemma at level 1, subject to the owning manifest join. No acceptance or metadata/readiness mutation is made here. The sole reviewer/integrator remains `physics_spectral_review_continuation`, using the same inherited cycle 1/cap 2. Source links document provenance; no new external full-text reading is claimed.
