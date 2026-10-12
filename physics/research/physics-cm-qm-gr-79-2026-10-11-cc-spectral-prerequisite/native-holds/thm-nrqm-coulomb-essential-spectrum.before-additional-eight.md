---
id: thm-nrqm-coulomb-essential-spectrum
aliases: [nrqm-coulomb-coulomb-essential-spectrum]
kind: theorem
domain: mathematics
title: "Coulomb essential spectrum"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-relative-compactness, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-weyl-essential-spectrum-invariance, def-relative-compactness-with-respect-to-an-operator, def-compact-linear-operator, lem-compositions-with-a-compact-operator-are-compact, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-projection-valued-measure, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, thm-self-adjoint-resolvent-estimate, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-relative-compactness: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  thm-weyl-essential-spectrum-invariance: mathematical-premise
  def-relative-compactness-with-respect-to-an-operator: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.4 pp. 145-149 (Weyl's theorem: invariance of the essential spectrum under relatively compact perturbations) and Section 10.1 pp. 221-222 (sigma_ess(-Laplacian - gamma/|x|) = [0,infinity))"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Chapter 5 pp. 209-246 (spectral theory of bounded operators; compact and self-adjoint operators) and Chapter 6 pp. 305-333 (the spectrum of unbounded operators on Hilbert spaces)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$H_0=-\Delta$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$ be the free operator
of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]],
let $M$ be the multiplier $Mu=u/|\cdot|$ of
[[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], and let
$$C:=H_0-\gamma M,\qquad D(C)=W^{2,2}(\mathbb R^3;\mathbb C),$$
be the self-adjoint operator of [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] (c).
Write $\sigma_{\mathrm d}$, $\sigma_{\mathrm{ess}}$, $E$ for the discrete
spectrum, essential spectrum and spectral projection valued measure of
[[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]] and
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]. Then:

(a) $C$ is bounded below and $\sigma_{\mathrm{ess}}(C)=[0,+\infty)$;

(b) every point of $\sigma(C)\cap(-\infty,0)$ lies in $\sigma_{\mathrm d}(C)$: it is an eigenvalue of $C$ of finite multiplicity isolated in $\mathbb R$, and the set of such eigenvalues is at most countable;

(c) the negative spectral subspace $E((-\infty,0))L^2(\mathbb R^3;\mathbb C)$ is the closed linear span of the eigenspaces of $C$ for its negative eigenvalues.

No claim is made about the multiplicity or the number of the negative
eigenvalues, about the nonnegative part of the spectrum beyond
$\sigma_{\mathrm{ess}}(C)=[0,\infty)$, or about any physical interpretation.

## Facts & Assumptions

**Given:** the operators $H_0$, $M$, $C$; a nonreal number is used only inside the proof; $\gamma>0$.

[F1] $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ is self-adjoint with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$ and $H_0\ge0$; for $u\in D(H_0)$ one has $\mathcal F_2(H_0u)(\xi)=4\pi^2|\xi|^2\mathcal F_2u(\xi)$ a.e. ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F2] $C=H_0-\gamma M$ is self-adjoint on $D(C)=D(H_0)$ and bounded below; $M$ is $H_0$-bounded with bound zero and $MR_0(z)$ is compact for every nonreal $z$, where $R_0(z)=(H_0-z)^{-1}$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], [[thm-nrqm-coulomb-relative-compactness]], [[def-relative-compactness-with-respect-to-an-operator]], [[thm-self-adjoint-resolvent-estimate]]).

[F3] Weyl's theorem: if $A,C$ are self-adjoint and $R_A(z)-R_C(z)$ is compact for one nonreal $z$, then $\sigma_{\mathrm{ess}}(A)=\sigma_{\mathrm{ess}}(C)$ ([[thm-weyl-essential-spectrum-invariance]]).

[F4] For a self-adjoint operator $A$ with PVM $E$: $\lambda\in\sigma_{\mathrm{ess}}(A)$ if and only if $\operatorname{rank}E((\lambda-\varepsilon,\lambda+\varepsilon))=\infty$ for every $\varepsilon>0$; for every Borel set $B$ and vector $f$ the scalar set function $E_f(B):=\langle E(B)f,f\rangle$ is a finite positive measure of mass $\|f\|^2$; and $E(\{\lambda\})$ is the orthogonal projection onto $\ker(A-\lambda)$ ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], [[def-projection-valued-measure]], [[thm-unbounded-borel-functional-calculus]]).

[F5] If $T$ is compact and $B$ is bounded, then $BT$ and $TB$ are compact ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-compact-linear-operator]]).

[F6] Normalized indicator functions of pairwise disjoint measurable sets of finite positive measure form an orthonormal family; a nonempty open ball in $\mathbb R^3$ has positive measure and contains infinitely many pairwise disjoint nonempty open balls ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

1.1 [Essential spectrum of the free operator] Fix $\lambda\ge0$ and $\varepsilon>0$ and put $S_\varepsilon:=\{\xi\in\mathbb R^3:4\pi^2|\xi|^2\in(\lambda-\varepsilon,\lambda+\varepsilon)\}$. If $\lambda>0$ choose $\xi_0$ with $4\pi^2|\xi_0|^2=\lambda$; continuity of $\xi\mapsto4\pi^2|\xi|^2$ gives a nonempty open ball around $\xi_0$ contained in $S_\varepsilon$. If $\lambda=0$ take the ball $\{|\xi|<\sqrt{\varepsilon}/(2\pi)\}$. In either case $S_\varepsilon$ contains a nonempty open ball, hence by [F6] contains infinitely many pairwise disjoint nonempty open balls and has infinite-dimensional $L^2$ space; by [F1] the projection $E_{H_0}((\lambda-\varepsilon,\lambda+\varepsilon))=\mathcal F_2^*M_{\mathbf 1_{S_\varepsilon}}\mathcal F_2$ has range $\mathcal F_2^*M_{\mathbf 1_{S_\varepsilon}}L^2$, which is infinite dimensional. By [F4] applied to $H_0$ we get $\lambda\in\sigma_{\mathrm{ess}}(H_0)$. Conversely, if $\lambda<0$ and $0<\varepsilon<|\lambda|$, then $(\lambda-\varepsilon,\lambda+\varepsilon)\cap[0,\infty)=\varnothing$, so $S_\varepsilon=\varnothing$ and $E_{H_0}((\lambda-\varepsilon,\lambda+\varepsilon))=0$; since the projection vanishes on an open interval around $\lambda$, [F4] shows $\lambda\notin\sigma(H_0)$. Hence $\sigma_{\mathrm{ess}}(H_0)=[0,\infty)$. [F1, F4, F6, algebra]

2.1 [The resolvent difference is compact] Fix a nonreal $z$; since $D(C)=D(H_0)$, both resolvents are defined and bounded by [F2]. For $f\in L^2$ put $g:=R_{H_0}(z)f\in D(H_0)$; then $(H_0-z)g=f$ and $(C-z)g=(H_0-z)g-\gamma Mg=f-\gamma Mg$, so $R_C(z)f-R_{H_0}(z)f=R_C(z)(f-(C-z)g)+R_C(z)(C-z)g-g=R_C(z)\gamma Mg=\gamma R_C(z)MR_{H_0}(z)f$, using $(C-z)R_C(z)f=f$ and the definition of $g$. By [F2] the operator $MR_{H_0}(z)$ is compact, and $R_C(z)$ is bounded, so $R_C(z)-R_{H_0}(z)=\gamma R_C(z)MR_{H_0}(z)$ is compact by [F5]. [step 1.1, F2, F5, algebra]

3.1 [Weyl's theorem and the essential spectrum] By step 2.1 the resolvent difference of $C$ and $H_0$ is compact at every nonreal $z$, so [F3] gives $\sigma_{\mathrm{ess}}(C)=\sigma_{\mathrm{ess}}(H_0)=[0,\infty)$ by step 1.1. The boundedness below of $C$ is [F2]. This is (a). [step 2.1, step 1.1, F2, F3]

4.1 [Negative spectrum is discrete] The spectrum of the self-adjoint operator $C$ is the disjoint union of $\sigma_{\mathrm d}(C)$ and $\sigma_{\mathrm{ess}}(C)=[0,\infty)$ by [F4]; hence every $\lambda\in\sigma(C)\cap(-\infty,0)$ lies in $\sigma_{\mathrm d}(C)$, which by definition means that $\lambda$ is an eigenvalue of $C$, is isolated in $\mathbb R$ and has finite-dimensional eigenspace. Each such $\lambda$ admits an isolating open interval $(\lambda-\delta_\lambda,\lambda+\delta_\lambda)$ with $\delta_\lambda>0$ containing no other spectral point; choosing a rational $q_\lambda$ in $(\lambda,\lambda+\delta_\lambda)$ gives an injective map from the set of negative eigenvalues into $\mathbb Q$, so that set is at most countable. This is (b). [step 3.1, F4, algebra]

5.1 [Completeness of the negative eigenspaces] Let $S$ be the closed linear span of the eigenspaces of $C$ for negative eigenvalues and let $P_-:=E((-\infty,0))$. Every eigenvector of $C$ with negative eigenvalue $\lambda$ satisfies $E(\{\lambda\})u=u$ by [F4], hence lies in $P_-L^2$ because $\{\lambda\}\subseteq(-\infty,0)$; therefore $S\subseteq P_-L^2$. For the reverse inclusion let $f\in P_-L^2$ be orthogonal to $S$ and put $\mu:=E_f$. Since $f=P_-f$ and $E_f(B)=\|E(B)f\|^2$, the measure $\mu$ is concentrated on $(-\infty,0)$, i.e. $\mu(\mathbb R)=\mu((-\infty,0))$, and by step 4.1 the set $\{\lambda_1,\lambda_2,\dots\}=\sigma(C)\cap(-\infty,0)$ is at most countable and consists of eigenvalues. By [F4] the support of $\mu$ is contained in $\sigma(C)$: if $B\cap\sigma(C)=\varnothing$ then $E(B)=0$. Hence $\mu(\mathbb R)=\mu(\{\lambda_n\})=\sum_n\mu(\{\lambda_n\})=\sum_n\|E(\{\lambda_n\})f\|^2$, and each term vanishes because $E(\{\lambda_n\})f$ is an eigenvector with negative eigenvalue and $f\perp S$. Therefore $\mu=0$, so $\|f\|^2=0$ and $f=0$; thus $P_-L^2\subseteq S$ and (c) holds. [step 4.1, F4, algebra] ∎
