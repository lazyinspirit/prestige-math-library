---
id: thm-nrqm-coulomb-continuum-spectral-density
aliases: [nrqm-coulomb-coulomb-continuum-spectral-density]
kind: theorem
domain: mathematics
title: "Coulomb continuum spectral density"
status: published
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

For $g\in L^2(0,\infty)$ write $\mu_g(B):=\langle E_{A_l}(B)g,g\rangle$
for its finite positive scalar spectral measure, where $B\subseteq\mathbb R$
is Borel ([[def-projection-valued-measure]],
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). A finite
positive Borel measure $\mu$ is *absolutely continuous* with respect to
Lebesgue measure $dE$ if $\mu(N)=0$ for every Borel set $N$ of Lebesgue measure
zero; it is *singular continuous* if it is carried by a Borel Lebesgue-null
set and has no atoms, meaning $\mu(\{E\})=0$ for every $E\in\mathbb R$.
Define the absolutely continuous subspace
$$\mathcal H_{\mathrm{ac}}(A_l):=\{g\in L^2(0,\infty):\mu_g\text{ is absolutely continuous with respect to }dE\}.$$
It is a closed linear subspace because it equals
$\bigcap_{N:\,|N|=0}\ker E_{A_l}(N)$, where the intersection is over Borel
Lebesgue-null sets and $\mu_g(N)=\|E_{A_l}(N)g\|^2$.
For $I=(0,\infty)$, put
$$\mathcal H_{\mathrm{sc}}(A_l;I):=\{g\in E_{A_l}(I)L^2(0,\infty):\mu_g\text{ is singular continuous}\}.$$
The set $\mathcal H_{\mathrm{sc}}(A_l;I)$ is a closed linear subspace:
linear combinations of such vectors have scalar measures supported on the
union of their null carriers and have no atoms, and these two properties pass
to limits of vectors by continuity of the PVM projections. Here $E_{A_l}(I)L^2$ is
*purely absolutely continuous* when it is contained in $\mathcal H_{\mathrm{ac}}(A_l)$,
and “$A_l$ has no singular-continuous spectrum on $I$” means
$\mathcal H_{\mathrm{sc}}(A_l;I)=\{0\}$. Thus each operator spectral-type
phrase in (d) is a statement about the scalar PVM measures, not an additional
pointwise classification of energies.

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

(d) *absolutely continuous spectrum; no zero eigenvalue.* For every $g\in L^2(0,\infty)$ the measure $E_{A_l,g}$ has no atom in $(0,\infty)$; the positive spectral subspace $E_{A_l}((0,\infty))L^2(0,\infty)$ is purely absolutely continuous and is the closed span of the positive spectral projections of compactly supported functions; it equals the absolutely continuous subspace of $A_l$, and $A_l$ has no singular continuous spectrum on $(0,\infty)$; moreover $0$ is not an eigenvalue of $A_l$.

No scattering phase, normalization of the continuum functions as a unitary
transform, or physical cross-section is asserted; the transform itself is the
subject of the companion item [[thm-nrqm-coulomb-onto-radial-continuum-transform]].

## Facts & Assumptions

**Given:** the current AC+CC contract, $\gamma\ge0$, $l\ge0$, $q_l(r)=l(l+1)/r^2-\gamma/r$, the radial form realization $A_l$, $\varphi_l/r^{l+1}\to1$, $f_l$ with the stated Coulomb logarithmic phase, $W(u,v)=uv'-u'v$, and $\langle u,v\rangle=\int u\overline v$ (linear in the first slot). Compact support means containment in a compact subset of the open half-line.

[F1] The endpoint realization supplies $V_l=H_0^1(0,\infty)$ with equivalent norm, $u/r\in L^2$ for $u\in V_l$, the continuous closed form $a_l$, and the exact operator-domain criterion: $u\in D(A_l)$ if and only if $u\in V_l$ and $a_l(u,v)=\langle h,v\rangle$ for every $v\in V_l$ and some $h\in L^2$. It also supplies self-adjointness and $UCU^*=\bigoplus A_l$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]]). The nonreal resolvent bound is [[thm-self-adjoint-resolvent-estimate]].

[F2] The regular series and its derivatives converge uniformly on compact parameter and radial sets and have $\varphi_l=r^{l+1}(1+O(r))$, $\varphi_l'=O(r^l)$ at zero. The Jost solution and its radial derivative are jointly continuous up to the real positive $k$ axis and decay exponentially times a power when $\operatorname{Im}k>0$ in its first-quadrant construction domain. For real $k>0$, $\varphi_l$ is real, $W(\overline f_l,f_l)=2ik$, and $W_l(k)\ne0$ ([[thm-nrqm-coulomb-jost-volterra-solution]], especially its actual compact-parameter Volterra/IVP proof).

[F3] The self-adjoint spectral theorem gives the finite positive scalar measure $\mu_g(B)=\|E_{A_l}(B)g\|^2$, total mass $\|g\|^2$, and $\langle(A_l-z)^{-1}g,g\rangle=\int(\lambda-z)^{-1}d\mu_g(\lambda)$. The projection at $\lambda$ is the projection onto $\ker(A_l-\lambda)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]], [[def-projection-valued-measure]]).

[F4] Cauchy–Schwarz, Fubini, dominated convergence, and continuity from below for finite measures are used in their scalar forms ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-dominated-convergence]]). No Stone interval formula, positive-energy absence of atoms, or onto continuum transform is an input.

[F5] The form-core identity $\|u'-u/r\|_2=\|u'\|_2$ and Hardy inequality $\|u/r\|_2\le2\|u'\|_2$ extend to $V_l$. Young's inequality yields $a_l(u,u)\ge\frac12\|u'\|_2^2+l(l+1)\|u/r\|_2^2-2\gamma^2\|u\|_2^2$. This bound is uniform over $l\ge0$ and follows from [F1]; no essential-spectrum theorem or negative bound-energy exhaustion is assumed below.

## Proof

1.1 [Endpoint and form membership] Fix $z=k^2$ with $\operatorname{Im}k>0$ in the Jost construction domain; its positive real part makes $z$ nonreal. A function agreeing with a constant multiple of $\varphi_l$ near zero and a constant multiple of $f_l$ near infinity and lying in $H^2$ on intervening compact intervals has $u,u',u/r\in L^2$ and trace zero at zero by [F2]. It belongs to $V_l$: a cutoff vanishing below $\delta$ and equal to one above $2\delta$ adds derivative squared norm at most $C\int_0^{2\delta}|u|^2/r^2\to0$; a cutoff at infinity adds derivative squared norm at most $CR^{-2}\int_R^{2R}|u|^2\to0$. The tails of all other norm terms vanish by integrability, and the resulting compact $H^1$ functions can be smoothed within the open half-line. This verifies actual form membership including $l=0$ and $\gamma=0$. [F1, F2, F4, given, algebra]

1.2 [Radial form proof of zero exclusion] Define $S_su(r)=e^{s/2}u(e^sr)$ for real $s$. Change of variables gives unitarity on $L^2$, preservation of $V_l$, and on the smooth form core the exact identity $a_l(S_su,v)=e^{2s}a_l(u,S_{-s}v)+\gamma(e^{2s}-e^s)\langle S_s(u/r),v\rangle$. Kinetic and angular terms scale by $e^{2s}$ and the Coulomb term by $e^s$. Continuity extends the identity to all $u,v\in V_l$, since $u/r\in L^2$. If $u\in D(A_l)$ and $A_lu=0$, the form criterion gives $S_su\in D(A_l)$ and $A_lS_su=\gamma(e^{2s}-e^s)S_s(u/r)$. Self-adjointness yields $0=\langle A_lS_su,u\rangle=\gamma(e^{2s}-e^s)\langle S_s(u/r),u\rangle$. For $\gamma>0$ and $s\ne0$ divide by the nonzero coefficient. Strong continuity $S_sh\to h$ follows first for compact continuous $h$ by dominated convergence and then by density and unitarity for all $h\in L^2$. Letting $s\to0$ gives $\int|u|^2/r=0$, hence $u=0$. For $\gamma=0$, $0=\langle A_lu,u\rangle=\|u'-u/r\|_2^2+l(l+1)\|u/r\|_2^2$; the identity $\|u'-u/r\|_2=\|u'\|_2$ extends from the form core to $V_l$, so $u'=0$ and its $L^2$ constant representative is zero. No unbounded dilation generator is differentiated. [F1, F3, F4, given, algebra]

1.3 [Compact weighted form embedding] The map $K:V_l\to L^2(0,\infty)$, $Ku=u/\sqrt r$, is compact on bounded $H_0^1$ sets. To prove this directly, for $\|u\|_2,\|u'\|_2\le C$ use $\int_0^\delta|u|^2/r\le\delta\|u/r\|_2^2\le4\delta C^2$ and $\int_R^\infty|u|^2/r\le C^2/R$. On $[\delta,R]$, partition into finitely many equal cells of length at most $h$ and replace $u$ by its average on each cell. The absolute continuity formula and Cauchy–Schwarz give $\int_I|u-u_I|^2\le h^2\int_I|u'|^2$ on each cell $I$, so multiplication by $1/\sqrt r$ gives total middle error at most $h^2C^2/\delta$. The resulting functions lie in a fixed finite-dimensional span of cell indicators divided by $\sqrt r$, with bounded coefficients. Choosing $\delta,R,h$ makes the error arbitrarily small, so the image has finite nets of every radius and is relatively compact in complete $L^2$. This explicit finite-rank approximation works for real $l\ge0$ as well as the angular integer labels. [F1, F4, F5, given, algebra]

2.1 [Nonreal Wronskian] If $W_l(k)=0$, regular-IVP uniqueness makes $\varphi_l$ and $f_l$ proportional, giving a nonzero common solution $u$. Step 1.1 puts $u$ in $V_l$. Integration by parts against compact smooth $v$ gives $a_l(u,v)=z\langle u,v\rangle$, since the derivative form equals $\int u'\overline{v'}$ by cancellation of the derivative of $u\overline v/r$. Form continuity extends this to every $v\in V_l$. The exact criterion [F1] gives $u\in D(A_l)$ and $A_lu=zu$, contradicting self-adjointness. Thus the nonreal Wronskian is nonzero. [step 1.1, F1, F2, algebra]

2.2 [Finite negative spectral bands] Assume $\gamma>0$, put $M=2\gamma^2+1$, and fix $\varepsilon>0$. The range $H_\varepsilon=E_{A_l}([-M,-\varepsilon])L^2$ lies in $D(A_l)$ by bounded energy support; for $u\in H_\varepsilon$ the PVM gives $a_l(u,u)\le-\varepsilon\|u\|^2$. The lower bound [F5] gives $\|u'\|_2^2\le4\gamma^2\|u\|_2^2$, so the unit ball of $H_\varepsilon$ is $H_0^1$-bounded. If this spectral range were infinite-dimensional, AC allows choosing an orthonormal sequence $u_j$ in it (successively choose a unit vector orthogonal to the preceding finite span). For $v=u_j-u_i$, nonnegativity of the kinetic and angular terms and the negative-band bound give $\gamma\|Kv\|_2^2\ge\varepsilon\|v\|_2^2=2\varepsilon$. Thus the images $Ku_j$ are separated by a fixed positive distance, contradicting the finite nets in step 1.3. Hence every negative band has finite-dimensional spectral range. This orthonormal-sequence selection uses the retained AC assumption; the proof does not claim a CC-only recursive choice argument. [step 1.3, F1, F3, F5, algebra]

3.1 [Green sign, derivative jump and actual inverse] Write $\varphi=\varphi_l(k,\cdot)$, $f=f_l(k,\cdot)$, $W=W_l(k)$. For $g$ supported in $[r_1,r_2]\subset(0,\infty)$ let $I(r)=\int_0^r\varphi(s)g(s)ds$, $J(r)=\int_r^\infty f(s)g(s)ds$, and $u=-(fI+\varphi J)/W$. The integrals are absolutely continuous; cross terms cancel in $u'=-(f'I+\varphi'J)/W$, and $u''=-(f''I+\varphi''J)/W-g$. Therefore $-u''+(q_l-z)u=g$ almost everywhere. Below $r_1$ and above $r_2$, $u$ is respectively a constant multiple of $\varphi$ and of $f$, so step 1.1 gives $u\in V_l$. Integration by parts against compact tests and form continuity give $a_l(u,v)=\langle zu+g,v\rangle$ for every $v\in V_l$. Thus $u\in D(A_l)$ and $u=(A_l-z)^{-1}g$. The kernel $G=-\varphi(r_<)f(r_>)/W$ is continuous and its derivative jump is $-[\varphi(s)f'(s)-\varphi'(s)f(s)]/W=-1$, giving $(L_l-z)G=\delta_s$ distributionally. The stated inverse norm estimate is [F1]. [step 1.1, step 2.1, F1, F2, F4, algebra]

3.2 [Negative scalar measures are countably atomic] Each band projection in step 2.2 has finite rank $N$. Choose a finite orthonormal basis $e_1,\ldots,e_N$ for its range and define $\nu=\sum_j\mu_{e_j}$, supported in the band. Its support has at most $N$ points: otherwise $N+1$ distinct support points admit disjoint open neighborhoods of positive $\nu$ mass, hence $N+1$ nonzero mutually orthogonal spectral projection ranges inside this $N$-dimensional space. The complement of this support is the union of the rational open intervals of zero $\nu$ mass, so it has zero $\nu$ mass by countable subadditivity. Every scalar measure of a vector in the band is likewise supported on this finite set, since $\nu(B)=0$ makes $E(B)$ annihilate the basis and hence the entire band range. Exhausting negative energies by $[-M,-1/n]$ shows every radial negative scalar measure is supported on one countable union of finite sets. The lower bound [F5] excludes energies below $-M$. For $\gamma=0$, the form is nonnegative and the negative projection is zero. This proves the negative pure-point fact locally for the whole stated real $l\ge0$ range. [step 2.2, F1, F3, F5, algebra]

4.1 [Boundary algebra for complex sources] For real $k>0$, $\operatorname{Im}(\overline fW)=\varphi\operatorname{Im}(\overline ff')=k\varphi$. Since $-f/W=-f\overline W/|W|^2$, conjugating $\overline fW$ gives $\operatorname{Im}(-f/W)=k\varphi/|W|^2$, proving (b). For a complex source the kernel symmetry $G(r,s)=G(s,r)$ matters: the adjoint kernel on the compact support is $\overline{G(s,r)}=\overline{G(r,s)}$, so $(R-R^*)/(2i)$ has kernel $\operatorname{Im}G$. Consequently Fubini gives $\operatorname{Im}\langle R(k^2+i0)g,g\rangle=k|\int\varphi_l(k,r)g(r)dr|^2/|W_l(k)|^2$. This does not incorrectly distribute imaginary parts across complex source products. [step 3.1, F2, F4, algebra]

5.1 [Uniform compact-source limit] Fix $0<a<b$ and compact source support $J\subset(0,\infty)$. Choose $k_{\min}<\sqrt a$. The set of first-quadrant roots $\{\sqrt{E+i\varepsilon}:E\in[a,b],0\le\varepsilon\le\varepsilon_0\}$ is compact inside the Jost parameter domain. The jointly continuous $\varphi,f,\varphi',f'$ give continuous $W$ computed at any fixed radial point. Its real-axis modulus has a positive minimum on $[\sqrt a,\sqrt b]$, hence a common positive lower bound for sufficiently small $\varepsilon_0$. Uniform continuity therefore gives uniform convergence of $G(E+i\varepsilon;r,s)$ to its boundary value for $E\in[a,b]$ and $r,s\in J$. Since $\|g\|_1\le |J|^{1/2}\|g\|_2$, the paired error is at most the supremum kernel error times $\|g\|_1^2$. Pairings converge uniformly and step 4.1 gives their imaginary parts. No global limiting-absorption norm is assumed. [step 3.1, step 4.1, F2, F4, algebra]

6.1 [Poisson approximation from the PVM] For continuous $h$ compactly supported in $(0,\infty)$, extended by zero to $\mathbb R$, [F3] and Fubini give $\pi^{-1}\int h(E)\operatorname{Im}\langle(A_l-E-i\varepsilon)^{-1}g,g\rangle dE=\int(P_\varepsilon*h)(\lambda)d\mu_g(\lambda)$, where $P_\varepsilon(t)=\varepsilon/[\pi(t^2+\varepsilon^2)]$. Absolute integrability follows from $\int P_\varepsilon=1$ and finite mass $\|g\|^2$. Uniform continuity bounds $|h(x-t)-h(x)|$ by any prescribed $\eta>0$ for $|t|\le\delta$; the remainder is at most $2\|h\|_\infty\int_{|t|>\delta}P_\varepsilon\le4\|h\|_\infty\varepsilon/(\pi\delta)$. Hence $P_\varepsilon*h\to h$ uniformly. For compact-source $g$, step 5.1 computes the other limit, yielding $\int h\,d\mu_g=\int_0^\infty h(E)d_g(E)dE$, with continuous nonnegative $d_g(E)=\rho_l(E)|\int\varphi_l(\sqrt E,r)g(r)dr|^2$. [step 5.1, F3, F4, algebra]

7.1 [Borel density without a regularity prerequisite] For $0<a<b$, continuous $h_n(E)=\min(1,n(E-a)_+,n(b-E)_+)$ increase to $\mathbf1_{(a,b)}$ and vanish outside $[a,b]$. Step 6.1 and dominated convergence give $\mu_g((a,b))=\int_a^b d_g(E)dE$. Every positive singleton has zero mass by shrinking intervals around it and local boundedness of $d_g$. On a fixed compact interval $[c,d]\subset(0,\infty)$, the two finite measures agree on all subintervals, including endpoints. Agreement on every relative Borel set follows by the elementary measure uniqueness argument: agreement sets form a Dynkin class (equal total mass, relative complements, disjoint countable unions), and intervals form an intersection-stable generator. For completeness, let $\mathcal D$ be the smallest Dynkin class containing these intervals and the full compact interval; for a fixed generating interval $I$, the sets $B$ with $I\cap B\in\mathcal D$ form a Dynkin class containing the generators, hence contain $\mathcal D$. Repeating this with any fixed $B\in\mathcal D$ shows that $\mathcal D$ is closed under intersections of its members. A Dynkin class closed under intersections is a sigma algebra by disjointifying countable unions, so it contains the generated Borel sigma algebra. Exhaustion by $[1/n,n]$ proves equality on every positive Borel set. The same exhaustion bounds the total density integral by $\|g\|^2$. This proves density before either Stone's interval formula or an onto transform, without a separate finite-measure regularity assumption. [step 6.1, F3, F4, algebra]

8.1 [Arbitrary vectors] For arbitrary $g\in L^2$, take explicit $g_n=\mathbf1_{[1/n,n]}g\to g$. Projection contraction gives $|\mu_g(B)-\mu_{g_n}(B)|\le(\|g\|+\|g_n\|)\|g-g_n\|$ uniformly over Borel $B$. Every positive Lebesgue-null Borel set has zero $\mu_{g_n}$ mass by step 7.1 and hence zero $\mu_g$ mass. Thus every scalar spectral measure restricted to $(0,\infty)$ is absolutely continuous and every positive atom vanishes. These explicit cutoffs require no additional choice. [step 7.1, F3, F4, algebra]

9.1 [Exact interval Stone formula] PVM representation and Fubini give $\pi^{-1}\int_a^b\operatorname{Im}\langle(A_l-E-i\varepsilon)^{-1}g,g\rangle dE=\int F_\varepsilon(\lambda)d\mu_g(\lambda)$, with $F_\varepsilon(\lambda)=\pi^{-1}[\arctan((b-\lambda)/\varepsilon)-\arctan((a-\lambda)/\varepsilon)]$. It lies in $[0,1]$ and tends to $\mathbf1_{(a,b)}+\tfrac12\mathbf1_{\{a,b\}}$. Dominated convergence and the already proved zero endpoint atoms yield the exact interval formula for every $g$. Step 7.1 gives its compact-source density integral. [step 8.1, step 7.1, F3, F4, algebra]

9.2 [Positive subspace] Put $P_+=E_{A_l}((0,\infty))$. If $g=P_+g$, its entire scalar measure is positive-energy supported and absolutely continuous by step 8.1. Thus this subspace has neither pure-point nor singular-continuous part. Also $P_+g_n\to P_+g$, so positive spectral projections of compact-source vectors span it densely. This permits unprojected compact-source vectors to have negative-energy components. [step 8.1, F3, algebra]

10.1 [Full AC subspace and conclusion] An absolutely continuous scalar measure gives zero mass to the countable negative support from step 3.2 and to $\{0\}$. Hence its vector lies in $P_+L^2$. Step 9.2 proves the reverse inclusion, so the full absolutely continuous subspace equals the positive spectral subspace, establishing corrected clause (d), whose zero exclusion is step 1.2. Clauses (a), (b), (c) follow from the Green inverse, boundary algebra, and PVM Poisson arguments above. The regular normalization and density $\sqrt E/(\pi|W_l(\sqrt E)|^2)$ are unchanged, and neither the onto transform nor any angular transport at noninteger $l$ was assumed. [step 3.1, step 4.1, step 7.1, step 9.1, step 9.2, step 1.2, step 3.2, F3] ∎
