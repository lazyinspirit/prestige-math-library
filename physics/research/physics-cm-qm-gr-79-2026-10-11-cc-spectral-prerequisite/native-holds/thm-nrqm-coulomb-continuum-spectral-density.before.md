---
id: thm-nrqm-coulomb-continuum-spectral-density
aliases: [nrqm-coulomb-coulomb-continuum-spectral-density]
kind: theorem
domain: mathematics
title: "Coulomb continuum spectral density"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-coulomb-angular-radial-unitary-reduction, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-projection-valued-measure, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, lem-compositions-with-a-compact-operator-are-compact, thm-self-adjoint-resolvent-estimate, thm-dominated-convergence, thm-tonelli-and-fubini-for-completed-product-measures, thm-complex-lp-completeness-and-almost-everywhere-subsequences, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-jost-volterra-solution: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-complex-lp-completeness-and-almost-everywhere-subsequences: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.6 pp. 209-214 (spectral transformations II: boundary values of the Weyl-Titchmarsh m-function and the absolutely continuous spectrum) and Section 3.2 pp. 99-104 (Borel measures and the spectral measure of a self-adjoint operator)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §13.7 (asymptotic expansions of Kummer solutions for large argument)"
      url: "https://dlmf.nist.gov/13.7"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma\ge0$, $l\ge0$,
let $A_l$ be the radial operator of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] with spectral
measure $E_{A_l}$, and for $k>0$ let $\varphi_l(k,\cdot)$ and $f_l(k,\cdot)$
be the solutions of [[thm-nrqm-coulomb-jost-volterra-solution]], with
$W_l(k):=W(\varphi_l(k,\cdot),f_l(k,\cdot))\ne0$. Write
$$\rho_l(E):=\frac{\sqrt E}{\pi\,|W_l(\sqrt E)|^2}\qquad(E>0).$$
Then:

(a) *resolvent kernel.* For $z=k^2$ with $\operatorname{Im}k>0$ and $k$ in the domain of the Jost construction, and for every $g\in L^2(0,\infty)$ with compact support, the resolvent is given by
$$((A_l-z)^{-1}g)(r)=\int_0^\infty G_l(r,s)g(s)\,ds,\qquad G_l(r,s):=-\frac{\varphi_l(k,\min(r,s))\,f_l(k,\max(r,s))}{W_l(k)},$$
and $G_l$ solves $(A_l-z)G_l=\delta$ in the sense that $-G''+(l(l+1)/r^2-\gamma/r)G-zG=0$ away from $r=s$ and the derivative of $G$ has the jump $-1$ at $r=s$; moreover $\|(A_l-z)^{-1}\|\le1/|\operatorname{Im}z|$;

(b) *boundary value.* For real $k>0$ one has $\varphi_l(k,\cdot)$ real and, for all $r,s>0$,
$$\operatorname{Im}G_l(k^2+i0;r,s)=\frac{k\,\varphi_l(k,r)\varphi_l(k,s)}{|W_l(k)|^2};$$

(c) *spectral density.* For every $g\in L^2(0,\infty)$ and every $0<a<b$,
$$\langle E_{A_l}((a,b))g,g\rangle=\lim_{\varepsilon\downarrow0}\frac1\pi\int_a^b\operatorname{Im}\bigl\langle(A_l-E-i\varepsilon)^{-1}g,g\bigr\rangle dE,$$
and if $g$ has compact support then
$$\langle E_{A_l}((a,b))g,g\rangle=\int_a^b\rho_l(E)\Bigl|\int_0^\infty\varphi_l(\sqrt E,r)g(r)\,dr\Bigr|^2dE;$$
consequently for compactly supported $g$ the measure $E_{A_l,g}(B):=\langle E_{A_l}(B)g,g\rangle$ restricted to $(0,\infty)$ is absolutely continuous with density $\rho_l(E)|\int\varphi_l g|^2$;

(d) *absolutely continuous spectrum; no zero eigenvalue.* For every $g\in L^2(0,\infty)$ the measure $E_{A_l,g}$ has no atom in $(0,\infty)$; the absolutely continuous subspace of $A_l$ contains the closed span of the compactly supported functions, hence equals the whole positive spectral subspace, and $A_l$ has no singular continuous spectrum on $(0,\infty)$; moreover $0$ is not an eigenvalue of $A_l$.

No scattering phase, normalization of the continuum functions as a unitary
transform, or physical cross-section is asserted; the transform itself is the
subject of the companion item [[thm-nrqm-coulomb-onto-radial-continuum-transform]].

## Facts & Assumptions

**Given:** $\gamma\ge0$, $l\ge0$, the operator $A_l$ with form domain $V_l$ and spectral measure $E_{A_l}$; for real $k>0$ the solutions $\varphi_l,f_l$ and $W_l\ne0$; the density $\rho_l$.

[F1] $A_l$ is self-adjoint with $D(A_l)\subseteq V_l$, and $C_c^\infty((0,\infty))\subseteq V_l$; for nonreal $z$, $\|(A_l-z)^{-1}\|\le1/|\operatorname{Im}z|$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]], [[thm-self-adjoint-resolvent-estimate]]).

[F2] The two solutions $\varphi_l(k,\cdot)$ (real for real $k$) and $f_l(k,\cdot)$ solve the radial equation at $z=k^2$, with $\varphi_l/r^{l+1}\to1$ at $0$, $f_l$ decaying for $\operatorname{Im}k>0$ and $W(\overline{f_l},f_l)=2ik$, $W_l(k)\ne0$ for real $k$; every solution is $Af_l+B\overline{f_l}$ ([[thm-nrqm-coulomb-jost-volterra-solution]]).

[F3] Spectral theorem and functional calculus: $D(A_l)=\{x:\int\lambda^2dE_x<\infty\}$ and for bounded Borel $h$ the pairing is $\langle h(A_l)x,y\rangle=\int h\,dE_{x,y}$; $(A_l-z)^{-1}$ corresponds to $(\lambda-z)^{-1}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]], [[def-projection-valued-measure]]).

[F4] For every $g\in L^2(0,\infty)$ and every bounded continuous $h$: $\int h\,dE_{A_l,g}=\lim_{\varepsilon\downarrow0}\int h(\lambda)\operatorname{Im}\bigl[\text{the resolvent pairing}\bigr]$ in the sense of the Poisson approximation $\frac1\pi\frac{\varepsilon}{(\lambda-E)^2+\varepsilon^2}\to\delta_E$; and the scalar set function $E_{A_l,g}(B)=\|E_{A_l}(B)g\|^2$ is a finite positive measure ([[thm-dominated-convergence]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[F5] $W(\overline{f_l},f_l)=2ik$ implies $\operatorname{Im}(\overline{f_l}f_l')=k$, and $\varphi_l$ real ([[thm-nrqm-coulomb-jost-volterra-solution]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F6] Cauchy-Schwarz and Fubini for the iterated integrals ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-hilbert-space]]).

## Proof

1.1 [The Green kernel solves the resolvent equation] Let $z=k^2$, $\operatorname{Im}k>0$, and for compactly supported $g\in L^2$ define $u(r):=\int_0^\infty G_l(r,s)g(s)ds=f_l(r)\int_0^r\frac{\varphi_l(s)g(s)}{W_l}ds+\varphi_l(r)\int_r^\infty\frac{f_l(s)g(s)}{W_l}ds$. Since $\varphi_l$ is bounded at $0$ and $f_l$ decays at $\infty$ while $\varphi_l$ may grow at most polynomially (it is entire in $r$), the two integrals are finite and $u\in L^2$ because the second term decays with $f_l$ for large $r$ and the first term is $\varphi_l(r)\int_0^r(\varphi_lg/W)$ with $r$ restricted to the compact support of $g$; differentiating twice under the integrals as in the standard variation-of-constants computation gives $u''=\bigl(l(l+1)/r^2-\gamma/r-z\bigr)u-g$, i.e. $(A_l-z)u=g$ in the distributional and hence the form sense; uniqueness of the resolvent ([F1]) identifies $u=(A_l-z)^{-1}g$ and proves the kernel formula and the jump $-1$ of $G'$ at $r=s$ (equivalently $(\partial_r^2+q-z)G=\delta$ with the sign convention checked by the explicit free case). This is (a). [F1, F2, F6, given, algebra]

2.1 [The imaginary part of the boundary value] For real $k>0$, $\varphi_l$ is real by [F2], and $W_l=\varphi_lf_l'-\varphi_l'f_l$. Writing $f$ for $f_l$ and $W$ for $W_l$, one computes $\overline fW=\varphi_l\overline f f'-\varphi_l'|f|^2$, so $\operatorname{Im}(\overline fW)=\varphi_l\operatorname{Im}(\overline ff')=\varphi_l\,k$ by [F5]; since $\operatorname{Im}(-f/W)=-\operatorname{Im}(f\overline W)/|W|^2$ and $f\overline W=\overline{\overline fW}$, this gives $\operatorname{Im}G_l(k^2+i0;r,s)=\varphi_l(k,r)\varphi_l(k,s)\operatorname{Im}(-f(k,r_>)/W_l(k))=\frac{k\varphi_l(k,r)\varphi_l(k,s)}{|W_l(k)|^2}$; the boundary value from below is the complex conjugate and the jump $G(+)-G(-)=2i\operatorname{Im}G(+)$ is the displayed formula times $2i$. This is (b). [step 1.1, F2, F5, algebra]

3.1 [The explicit density for compact sources] If $g$ has compact support, then for every compact energy interval $[a,b]\subset(0,\infty)$ the kernel of step 1.1 and the formula of step 2.1 are uniform in $r,s$ on the (compact) support of $g$ and in $E\in[a,b]$; dominated convergence in the resolvent representation of step 1.1 therefore gives $\langle E_{A_l}((a,b))g,g\rangle=\int_a^b\frac{k}{\pi|W_l(k)|^2}\bigl|\int_0^\infty\varphi_l(k,r)g(r)dr\bigr|^2dE$ with $k=\sqrt E$, that is the displayed density with $\rho_l(E)$. In particular $E_{A_l,g}$ is absolutely continuous on $(0,\infty)$ with no atoms there, and $\rho_l(E)>0$ because $W_l(\sqrt E)\ne0$. This is (c) and the first assertion of (d) for compactly supported $g$. [step 2.1, F2, F6, algebra]

4.1 [The Poisson limit for general vectors] For $g\in L^2$ and $\varepsilon>0$, [F3] gives $\operatorname{Im}\langle(A_l-E-i\varepsilon)^{-1}g,g\rangle=\int\frac{\varepsilon}{(\lambda-E)^2+\varepsilon^2}dE_{A_l,g}(\lambda)$; integrating over $(a,b)$, dividing by $\pi$ and using the Poisson approximation [F4] together with dominated convergence ($\frac1\pi\int_a^b\frac{\varepsilon}{(\lambda-E)^2+\varepsilon^2}dE\le1$, and the pointwise limit is $\mathbf 1_{(a,b)}(\lambda)$ plus $\frac12\mathbf 1_{\{a,b\}}(\lambda)$) yields $\langle E_{A_l}((a,b))g,g\rangle$ up to half the possible atoms at the endpoints $a,b$; by step 3.1 the endpoint atoms vanish for compactly supported vectors, and the following step removes them for all $g$, so the displayed identity of (c) holds. [step 2.1, F3, F4, algebra]

5.1 [Absence of atoms for general vectors and absolute continuity] Let $g\in L^2$ be arbitrary and choose compactly supported $g_n\to g$ in $L^2$; since $E_{A_l}(B)$ is an orthogonal projection, $|\langle E_{A_l}(B)g,g\rangle-\langle E_{A_l}(B)g_n,g_n\rangle|\le2\|g-g_n\|\|g\|+\|g-g_n\|^2\to0$ uniformly in $B$. Hence for every open interval $(a,b)\subset(0,\infty)$ the value of $E_{A_l,g}$ on $(a,b)$ is the limit of the absolutely continuous values of the $g_n$, so taking $b\downarrow a$ along a countable sequence shows $E_{A_l,g}(\{a\})=0$ for every $a>0$: there are no atoms in $(0,\infty)$. The set $\mathcal H_{ac}$ of vectors whose spectral measure on $(0,\infty)$ is absolutely continuous is a closed subspace (if $g_n\to g$ then $E_{A_l,g_n}(B)\to E_{A_l,g}(B)$ uniformly in $B$, and absolute continuity passes to the limit); it contains the dense set of compactly supported functions by step 4.1, hence equals $L^2(0,\infty)$; therefore $A_l$ has purely absolutely continuous spectrum on $(0,\infty)$ with no singular continuous part there. This is the second assertion of (d). [step 4.1, F4, F6, algebra]

6.1 [No eigenvalue at zero] It remains to exclude the eigenvalue $0$. Let $\psi\in D(C)=H^2(\mathbb R^3)$ with $C\psi=0$, $\psi\ne0$, and consider the unitary scaling $D(s)\psi(x):=e^{3s/2}\psi(e^sx)$ for $s\in\mathbb R$; the change of variables gives $\|D(s)\psi\|=\|\psi\|$ and $H^2$-invariance, and the conjugation identity $D(s)^*CD(s)=e^{2s}H_0+e^{s}V$ with $H_0=-\Delta$, $V=-\gamma/|\cdot|$ holds on $H^2$. For $s\ne0$ the exact pairing $0=\langle D(s)^*\psi,(D(s)^*CD(s)-C)\psi\rangle/s$ holds because both $\psi$ and $D(s)^*\psi$ lie in $D(C)$ and $C$ is self-adjoint; expanding the right side as $\langle D(s)^*\psi,[\frac{e^{2s}-1}{s}H_0+\frac{e^s-1}{s}V]\psi\rangle$ and letting $s\to0$ (strong continuity $D(s)^*\psi\to\psi$ and the bounded convergence of the coefficients) gives $\langle\psi,(2H_0+V)\psi\rangle=0$, i.e. $2\langle H_0\psi,\psi\rangle+\langle V\psi,\psi\rangle=0$. Then $0=\langle C\psi,\psi\rangle=\langle H_0\psi,\psi\rangle+\langle V\psi,\psi\rangle=\tfrac12\langle V\psi,\psi\rangle$. If $\gamma>0$, this contradicts $\langle V\psi,\psi\rangle=-\gamma\int_{\mathbb R^3}|\psi|^2|x|^{-1}dx<0$, because $\psi\ne0$ makes the integrand positive on a set of positive measure. If $\gamma=0$, then $V=0$ and the pairing $2\langle H_0\psi,\psi\rangle+\langle V\psi,\psi\rangle=0$ reads $\langle H_0\psi,\psi\rangle=0$; as $H_0\ge0$ this forces $H_0\psi=0$ and then $\psi=0$ by the Fourier multiplier form of $H_0$, again a contradiction. Hence $0$ is not an eigenvalue of $C$, and consequently not an eigenvalue of $A_l$ by the block identity of [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (d). This completes (d). [step 5.1, F1, F3, given, algebra]

7.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 1.1, 2.1, 3.1 and 4.1, and 5.1 and 6.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
