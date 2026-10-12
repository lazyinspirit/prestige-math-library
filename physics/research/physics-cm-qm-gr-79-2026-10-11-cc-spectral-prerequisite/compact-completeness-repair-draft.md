---
id: thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness
aliases: [nrqm-controlled-dynamics-compact-support-asymptotic-completeness]
kind: theorem
domain: mathematics
title: "Compact-support asymptotic completeness"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-controlled-dynamics-compact-scattering-defects, thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation, thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence, thm-riemann-lebesgue, def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces, thm-norm-limit-of-compact-operators-is-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-compact-scattering-defects: mathematical-premise
  thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation: mathematical-premise
  thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence: mathematical-premise
  thm-riemann-lebesgue: mathematical-premise
  def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 (positive-energy short-range completeness argument)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $V\in L^\infty(\mathbb R^3;\mathbb R)$ be real with $\operatorname{supp}V\subseteq B_R$, let $\mathcal H=L^2(\mathbb R^3;\mathbb C)$, let $H_0=-\Delta$ and $H=H_0+M_V$ on $D(H)=H^2(\mathbb R^3)$, and define

$$\Omega_\pm=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_0}.$$

These wave operators exist by the concrete Cook construction. Write $\mathcal H_{\mathrm{pp}}(H)$ for the closed span of the eigenspaces, $\mathcal H_{\mathrm c}(H)=\mathcal H_{\mathrm{pp}}(H)^\perp$, and $\mathcal H_{\mathrm{ac}}(H),\mathcal H_{\mathrm{sc}}(H)$ for the absolutely continuous and singular continuous spectral subspaces. Then:

(a) $\operatorname{ran}\Omega_\pm\subseteq\mathcal H_{\mathrm{ac}}(H)$ and $\mathcal H_{\mathrm{sc}}(H)=\{0\}$;

(b) each wave operator individually is asymptotically complete:

$$\operatorname{ran}\Omega_+=\operatorname{ran}\Omega_-=\mathcal H_{\mathrm{ac}}(H)=\mathcal H_{\mathrm c}(H);$$

(c) $S=\Omega_+^*\Omega_-$ is unitary on $\mathcal H$ and commutes with $e^{-itH_0}$ for every real $t$.

## Facts & Assumptions

**Given:** Countable choice, the generic real bounded compactly supported $V$, the concrete self-adjoint realizations $H_0,H$ and their separable spectral PVMs, the Cook wave operators, and $P_\pm=\mathbf 1_{(0,\infty)}(\pm D)$ for the position dilation generator $D=-i(x\cdot\nabla+3/2)$.

[F1] Concrete Cook existence gives isometries $\Omega_\pm$ with $\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$, and $H_0$ is purely absolutely continuous ([[thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]]). The concrete CC group/PVM construction and uniqueness identify $E_H(B)\Omega_\pm=\Omega_\pm E_{H_0}(B)$ for Borel $B$: the closed wave range reduces the group, its generator is the transported free generator, and uniqueness of its PVM supplies this identity. No stationary spectral transform or interacting completeness is used in this identification.

[F2] The necessary part of the repaired compact-defect supplier is precisely this positive-energy statement: for every $f\in C_c^\infty((0,\infty))$, the operators $C_\pm=(\Omega_\pm-I)f(H_0)P_\pm$ are compact. Also $f(H)-f(H_0)$ is compact for every $f\in C_0(\mathbb R)$, and $(H-i)^{-1}-(H_0-i)^{-1}$ is compact. These are obtained from the actual positive-energy Mellin kernel and the concrete compact free-resolvent factor in the owning repair of [[thm-nrqm-controlled-dynamics-compact-scattering-defects]]. Nothing in this proof invokes compactness for a cutoff with $f(0)\ne0$.

[F3] The corrected Mellin result gives $P_++P_-=I$ and, for every smooth positive-energy cutoff $g$ and every fixed $u\in\mathcal H$,

$$\|P_-g(H_0)e^{-itH_0}u\|\longrightarrow0\quad(t\to+\infty),\qquad \|P_+g(H_0)e^{-itH_0}u\|\longrightarrow0\quad(t\to-\infty).$$

These are strong limits, obtained by taking adjoints of localized norm estimates with the conjugate cutoff and splitting a fixed vector into an expanding ball and its $L^2$ tail ([[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]]). The projections $P_\pm$ need not commute with $g(H_0)$.

[F4] In the concrete separable CC PVM model, $\mathcal H_{\mathrm{ac}}$ is a closed linear reducing subspace: $E_H(B)u=0$ for every Lebesgue-null Borel $B$ is preserved under finite linear combinations and norm limits. It is orthogonal to every eigenspace. The closed eigenvector span and its orthogonal complement also reduce the PVM. A compact orthogonal projection has finite-dimensional range. A compact operator sends a bounded weakly null sequence to a norm-null sequence: otherwise a subsequence bounded away from zero has a norm-convergent image subsequence by compactness, whose weak limit must nevertheless be zero. This sequential argument suffices here under CC.

[F5] If $u\in\mathcal H_{\mathrm{ac}}(H)$, then $e^{-itH}u\rightharpoonup0$ as $t\to\pm\infty$. Indeed, for each fixed test vector $v$, the cyclic PVM representation of $u$ writes the pairing as the Fourier transform of $\overline{h(E)}\rho_u(E)$, where $\rho_u\in L^1(\mathbb R)$ is the nonnegative density of $u$ and $h\in L^2(\rho_u\,dE)$ represents the projection of $v$ onto that cyclic space. This product belongs to $L^1$ by Cauchy–Schwarz, so [[thm-riemann-lebesgue]] applies. This is a weak limit against each fixed test, not a uniform assertion over test vectors.

## Proof

**Proof technique:** direct; separate the nonpositive pure-point spectral part, eliminate the continuous complement of the joint wave span on positive compact intervals, and then prove completeness of each individual wave operator with the opposite-time strong limit.

1.1 Let $\mathcal R_\pm=\operatorname{ran}\Omega_\pm$. These ranges are closed because $\Omega_\pm$ are isometries. Intertwining with both positive and negative group times makes each range reducing. By [F1], the scalar spectral measure of $\Omega_\pm u$ equals the free scalar measure of $u$, which is absolutely continuous. Thus $\mathcal R_\pm\subseteq\mathcal H_{\mathrm{ac}}(H)$. Their closed linear span $\mathcal R=\overline{\mathcal R_++\mathcal R_-}$ is also reducing and lies in the closed absolutely continuous subspace. Let $Q$ be the orthogonal projection onto $\mathcal R^\perp$; it commutes with $E_H(B)$ and $f(H)$. Since $\mathcal H_{\mathrm{pp}}\perp\mathcal R$, $Q$ is the identity on $\mathcal H_{\mathrm{pp}}$ and preserves $\mathcal H_{\mathrm c}$. [F1, F4, algebra]

1.2 The negative spectral subspace is pure point, by the following concrete compact-resolvent argument. For a self-adjoint operator with the present separable PVM, a spectral point $\lambda$ has an infinite-rank spectral neighborhood at every radius exactly when there is a weakly null unit sequence $u_n\in D(A)$ with $\|(A-\lambda)u_n\|\to0$. In the forward direction choose an orthonormal vector in $E_A((\lambda-1/n,\lambda+1/n))\mathcal H$ perpendicular to the previous ones: project the fixed countable dense sequence into that closed subspace and select its first nonzero member, then normalize. In the reverse direction, a finite-rank $E_\varepsilon$ would imply $E_\varepsilon u_n\to0$ and $\|(I-E_\varepsilon)u_n\|\le\|(A-\lambda)u_n\|/\varepsilon\to0$, contradicting unit norm. With $K=(H-i)^{-1}-(H_0-i)^{-1}$ compact, transfer such a sequence for $A=H_0$ to $v_n=(H-i)^{-1}(H_0-i)u_n=u_n+K(H_0-i)u_n$: the compact term tends to zero, and $(H-\lambda)v_n=(H_0-\lambda)u_n+(i-\lambda)(v_n-u_n)\to0$. The same transfer in reverse gives equality of the sets of spectral points having only infinite-rank neighborhoods. Free momentum multiplication has this set $[0,\infty)$, since every positive shell or ball near zero contains infinitely many disjoint positive-measure momentum subsets, and its projections vanish below zero. Hence every negative spectral point of $H$ has a finite-rank neighborhood. The restriction of $H$ to such a bounded neighborhood is a finite-dimensional self-adjoint matrix and its spectral support is a finite set of eigenvalues. Negative spectral points are therefore isolated eigenvalues of finite multiplicity, countable by assigning a distinct least rational isolating interval. Outside their union below zero, every point has a zero-projection neighborhood; rational subintervals provide a countable cover. Countable PVM additivity consequently shows that $E_H(( -\infty,0))\mathcal H$ is the closed span of these negative eigenspaces. [F2, F4, algebra]

2.1 The singleton spectral projection $E_H(\{0\})$ has range exactly $\ker H$: its vectors belong to $D(H)$ because their spectral measures are supported at zero, and the PVM integral defining $H$ vanishes there; conversely an eigenvector at zero is supported on that singleton. Thus this whole threshold atom, which may be nonzero, is pure point; no absence of a zero eigenvalue or zero resonance is assumed. Together with step 1.2, this gives $\mathcal H_{\mathrm c}(H)\subseteq E_H((0,\infty))\mathcal H$. Positive compact intervals $J_n=[1/n,n]$ exhaust every vector in that continuous subspace by PVM countable continuity. [step 1.2, F4, algebra]

3.1 Fix a compact interval $J\subset(0,\infty)$ and choose a real $f\in C_c^\infty((0,\infty))$ equal to one on $J$. Put $f_0=f(H_0)$. By [F2], $C_++C_-=(\Omega_+f_0P_++\Omega_-f_0P_-)-f_0$, using $P_++P_-=I$ from [F3]; no commutation of $P_\pm$ with $f_0$ is needed. Step 1.1 gives $Q\Omega_\pm=0$, hence $Qf_0=-Q(C_++C_-)$ is compact. Adding the compact $Q(f(H)-f_0)$ gives compact $Qf(H)$. Consequently $QE_H(J)=Qf(H)E_H(J)$ is compact; since its two projection factors commute, it is an orthogonal projection. Its range is finite-dimensional, reduces $H$, and has spectrum in the bounded interval $J$, so it is spanned by eigenvectors of $H$ and lies in $\mathcal H_{\mathrm{pp}}$. For $u\in\mathcal H_{\mathrm c}$, its vector $QE_H(J)u$ also lies in $\mathcal H_{\mathrm c}$ by step 1.1 and [F4], and therefore is zero. It follows that $E_H(J)u\in\ker Q=\mathcal R\subseteq\mathcal H_{\mathrm{ac}}$. Exhaustion by step 2.1 and closedness of $\mathcal H_{\mathrm{ac}}$ give $\mathcal H_{\mathrm c}\subseteq\mathcal H_{\mathrm{ac}}$; the reverse inclusion follows from orthogonality to eigenspaces. Thus $\mathcal H_{\mathrm c}=\mathcal H_{\mathrm{ac}}$, An atomless singular vector is orthogonal to every eigenspace, hence belongs to $\mathcal H_{\mathrm c}$, and its null carrier makes it orthogonal to $\mathcal H_{\mathrm{ac}}$; it must therefore be zero. Thus $\mathcal H_{\mathrm{sc}}=\{0\}$. This step establishes spectral type and joint coverage only; it does not yet establish either individual range equality. [step 1.1, step 2.1, F2, F3, F4, algebra]

4.1 To prove outgoing completeness individually, let $u\in\mathcal H_{\mathrm{ac}}\cap\mathcal R_+^\perp$. Both subspaces reduce the PVM, so $u_J=E_H(J)u$ still belongs to this intersection for every compact positive interval $J$. Choose the same real smooth $f=1$ on $J$ and first work with $\psi=u_J$, so $f(H)\psi=\psi$. Let $\psi_t=e^{-itH}\psi$; then $f(H)\psi_t=\psi_t$, $\psi_t\perp\mathcal R_+$, and $\|\psi_t\|=\|\psi\|$. By [F5], $\psi_t$ is weakly null as $t\to+\infty$. Compactness [F2] and [F4] imply $\|\psi_t-f_0\psi_t\|=\|(f(H)-f_0)\psi_t\|\to0$ and $\|C_\pm\psi_t\|\to0$. Thus, using the exact identity of step 3.1,
$$\|\psi\|^2=\lim_{t\to+\infty}\langle\psi_t,\Omega_+f_0P_+\psi_t+\Omega_-f_0P_-\psi_t\rangle.$$
The first summand is zero by $\psi_t\perp\mathcal R_+$. For the second, adjoints give the bound $|\langle\psi_t,\Omega_-f_0P_-\psi_t\rangle|\le\|P_-f_0^*\Omega_-^*\psi_t\|\|\psi\|$. The adjoint intertwining identity is $\Omega_-^*e^{-itH}=e^{-itH_0}\Omega_-^*$, obtained by taking adjoints of [F1] at time $-t$. Hence the norm in this bound is $\|P_-\overline f(H_0)e^{-itH_0}\Omega_-^*\psi\|$, which tends to zero by the incoming opposite-time strong limit in [F3], applied to the fixed vector $\Omega_-^*\psi$. Therefore $\psi=0$. Taking $J=J_n$ and using step 2.1 proves $u=0$. Since the closed range $\mathcal R_+$ lies in $\mathcal H_{\mathrm{ac}}$, its orthogonal complement there being zero proves $\mathcal R_+=\mathcal H_{\mathrm{ac}}$. [step 2.1, step 3.1, F1, F2, F3, F4, F5, algebra]

5.1 For incoming completeness take $u\in\mathcal H_{\mathrm{ac}}\cap\mathcal R_-^\perp$, localize exactly as in step 4.1, and let $t\to-\infty$. The $\Omega_-$ summand is now zero by orthogonality. Moving the adjoint in the remaining $\Omega_+$ term bounds it by $\|P_+\overline f(H_0)e^{-itH_0}\Omega_+^*\psi\|\|\psi\|$, which tends to zero by the outgoing opposite-time strong limit in [F3] for the fixed vector $\Omega_+^*\psi$. The weak-null and compact-error arguments hold at negative time by [F5]. Therefore $\psi=0$ on every positive compact spectral interval, exhaustion gives $u=0$, and $\mathcal R_-=\mathcal H_{\mathrm{ac}}=\mathcal H_{\mathrm c}$. This proves (a) and (b) without a stationary-transform argument or an inference of individual completeness from joint coverage. [step 2.1, step 3.1, step 4.1, F1, F2, F3, F4, F5, algebra]

6.1 By steps 4.1–5.1 the isometries $\Omega_\pm$ have the same range $\mathcal H_{\mathrm{ac}}$. Let $P_{\mathrm{ac}}$ be its orthogonal projection. Then $\Omega_\pm^*\Omega_\pm=I$ and $\Omega_\pm\Omega_\pm^*=P_{\mathrm{ac}}$, so $S^*S=\Omega_-^*P_{\mathrm{ac}}\Omega_-=I$ and $SS^*=\Omega_+^*P_{\mathrm{ac}}\Omega_+=I$. Finally [F1] and its adjoint identity give $Se^{-itH_0}=\Omega_+^*e^{-itH}\Omega_-=e^{-itH_0}S$ for every real $t$. This proves (c). [step 4.1, step 5.1, F1, algebra] ∎

## Research integration boundary

This is a research-only author-support draft, not a production repair, independent review, source-reading attestation or readiness receipt. Its mathematical interface retains generic real bounded compact $V$, CC, the full spectral-type conclusion, each individual wave range and unitary $S$.

Facts F1–F2 must be integrated through the owning reviewer's actual corrected concrete CC supplier construction. The current production compact-defect clause claiming every $C_c$ cutoff is false at threshold; this draft does not use it. Only the genuine smooth positive-energy intermediate and compact functional-calculus/resolvent differences are used. The stronger sound continuous class $f(0)=0$ proposed in `threshold-owning-review.md` is also unnecessary for this proof.

The concrete negative-spectrum argument of step 1.2 is the bounded-compact-potential specialization of `cc-local-modules.md`, section 3. F1's group/PVM uniqueness and F5's cyclic representation are the concrete separable CC constructions of that packet; they are not assertions that its research draft has native acceptance. The general imported `thm-weyl-essential-spectrum-invariance` and `thm-canonical-spectral-type-decomposition` explicitly assume AC, so they are not used as undeclared CC suppliers here. The owning reviewer must reconcile the eventual owned manifest, contracts and dependency labels when integrating these local arguments. Existing authorship, review rounds and consumer ownership remain with that reviewer and its honest successor.
