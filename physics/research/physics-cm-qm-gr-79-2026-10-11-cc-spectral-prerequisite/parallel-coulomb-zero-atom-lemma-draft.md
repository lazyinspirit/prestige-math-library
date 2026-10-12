---
id: lem-nrqm-coulomb-no-zero-eigenvalue-cc
kind: lemma
domain: mathematics
title: "Coulomb zero-energy exclusion under Countable Choice"
status: draft
origin: session
deps: [lem-nrqm-coulomb-three-dimensional-hardy-bound, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-linear-change-of-variables-for-lebesgue-measure, thm-dominated-convergence, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
dependency_roles:
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics: Coulomb operator background; the focused zero-energy argument is supplied locally below"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let
$\mathcal H=L^2(\mathbb R^3,dx;\mathbb C)$, with the inner product
$\langle f,g\rangle=\int f\overline g\,dx$ linear in the first argument,
and let $H^2=W^{2,2}(\mathbb R^3;\mathbb C)$ with weak derivatives as in
[[def-sobolev-space-wkp-and-its-norm]] and
[[def-weak-derivative-of-a-locally-integrable-function]]. Define

$$H_0\psi=-\Delta\psi,\qquad D(H_0)=H^2,\qquad M\psi=\psi/|\cdot|,\qquad D(M)=\{\psi\in\mathcal H:\psi/|\cdot|\in\mathcal H\}.$$

The multiplier is assigned the value zero at the origin, which is a
Lebesgue null set. For every real $\gamma\ge0$ set

$$H_\gamma=H_0-\gamma M,\qquad D(H_\gamma)=H^2.$$

Then:

(a) $H_\gamma$ is a well-defined symmetric operator on this domain, and $\ker H_\gamma=\{0\}$ for both $\gamma>0$ and $\gamma=0$.

(b) If $H_\gamma$ has a representing spectral projection-valued Borel measure $E_\gamma$ with the exact spectral domain and norm identities, then $E_\gamma(\{0\})=0$. Explicitly, the required representing data are orthogonal projections with $E_\gamma(\mathbb R)=I$, $E_\gamma(B)E_\gamma(C)=E_\gamma(B\cap C)$ and strong countable additivity, together with

$$\mu_h(B)=\|E_\gamma(B)h\|^2,\qquad D(H_\gamma)=\{h:\int\lambda^2\,d\mu_h<\infty\},\qquad \|H_\gamma h\|^2=\int\lambda^2\,d\mu_h,\qquad \langle H_\gamma h,h\rangle=\int\lambda\,d\mu_h.$$

For the free branch $\gamma=0$, these data also imply $E_0((-\infty,0])=0$.

(c) Suppose a unitary $U:\mathcal H\to\bigoplus_{l\ge0,-l\le m\le l}L^2((0,\infty),dr;\mathbb C)$ identifies $H_\gamma$ exactly, including its domain, with $\bigoplus_{l,m}A_l$, where each $A_l$ is an operator on radial $L^2$ and the sum domain consists precisely of families $u_{lm}\in D(A_l)$ with $\sum_{l,m}(\|u_{lm}\|^2+\|A_lu_{lm}\|^2)<\infty$. Then $\ker A_l=\{0\}$ for every $l$. Any radial representing PVM with the same exact domain/norm identities consequently has zero projection on $\{0\}$.

The no-kernel conclusion uses neither spectral completeness nor a spectral
theorem. Clauses (b) and (c) are conditional consequences of the explicitly
specified spectral and unitary data, so this lemma does not assume their
existence or construct them. In the proposed CC Coulomb closure those data
come from the separately owned CC spectral and angular/radial constructions.

## Facts & Assumptions

**Given:** CC; $\mathcal H$, $H^2$, $H_0$, $M$, $\gamma\ge0$, $H_\gamma$; the spectral data only for (b), and the exact unitary/direct-sum data only for (c).

[F1] [[lem-nrqm-coulomb-three-dimensional-hardy-bound]] assumes CC and gives $\|M\psi\|_2\le2\|\nabla\psi\|_2$ on $H^1$. Thus $H^2\subseteq D(M)$ and the map $M:H^1\to L^2$ is bounded. Cauchy-Schwarz ([[cor-cauchy-schwarz-inequality-for-l-two]]) makes $\int|\psi|^2/|x|$ finite when $\psi\in H^1$.

[F2] [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] assumes CC and gives $C_c^\infty$ density in complex $W^{k,2}$ for $k=0,1,2$. Approximating a fixed input by a sequence with errors below $1/n$ is a countable choice, not arbitrary-index choice.

[F3] [[thm-linear-change-of-variables-for-lebesgue-measure]] assumes CC and gives preservation of Lebesgue measurability and null sets under $x\mapsto e^sx$, with measure scaled by $e^{3s}$. Its integral substitution follows first for indicators, then simple functions and nonnegative increasing approximations; it applies to the integrable functions below. [[thm-dominated-convergence]] permits a single integrable majorant for each convergent sequence.

[F4] [[thm-plancherel]] and [[lem-weak-derivatives-are-polynomial-fourier-multipliers]] assume CC and give the unitary Fourier transform with the negative-sign $2\pi$ convention and $\mathcal F_2(H_0\psi)=4\pi^2|\xi|^2\mathcal F_2\psi$ for $\psi\in H^2$. In particular $\langle H_0\psi,\psi\rangle=\int4\pi^2|\xi|^2|\mathcal F_2\psi|^2\ge0$. No general AC-bearing free-operator, Kato-Rellich, or spectral theorem is used to obtain this formula.

## Proof

1.1 [The bounded dilations on $L^2$] For $s\in\mathbb R$ define $(D_s f)(x)=e^{3s/2}f(e^sx)$ on representatives. By [F3], this preserves equivalence modulo null sets and is measurable; the substitution $y=e^sx$ gives $\|D_sf\|_2=\|f\|_2$ and $\langle D_sf,D_sg\rangle=\langle f,g\rangle$. Its inverse is $D_{-s}$, so $D_s$ is unitary and $D_s^*=D_{-s}$. For $f\in C_c^\infty$ with support in a ball of radius $R$, $D_sf(x)\to f(x)$ pointwise as $s\to0$. For $|s|\le1$, $|D_sf-f|^2\le2(e^3+1)\|f\|_\infty^2\mathbf1_{\{|x|\le eR\}}$, an integrable majorant. Dominated convergence proves $\|D_sf-f\|_2\to0$ along every sequence $s\to0$, hence in the real-variable limit. For an arbitrary $f\in L^2$ and any compact smooth approximation $g$, $\|D_sf-f\|_2\le2\|f-g\|_2+\|D_sg-g\|_2$. Density [F2] therefore proves strong continuity for every fixed $f$, including the nonsmooth vector $M\psi$ used below. [F2, F3, given, construct, algebra]

1.2 [The exact weak-domain scaling identities] If $\psi\in H^2$, $\varphi\in C_c^\infty$ and $i\in\{1,2,3\}$, change variables to get $\int D_s\psi(x)\partial_i\varphi(x)dx=e^{-3s/2}\int\psi(y)\partial_i\varphi(e^{-s}y)dy$. Since $\partial_i\varphi(e^{-s}y)=e^s\partial_{y_i}[\varphi(e^{-s}y)]$, the weak derivative identity gives $\partial_iD_s\psi=e^sD_s(\partial_i\psi)$. Iteration gives $D^\alpha D_s\psi=e^{|\alpha|s}D_s(D^\alpha\psi)$ for $|\alpha|\le2$. Each right-hand side belongs to $L^2$, so $D_sH^2=H^2$, and $H_0D_s\psi=e^{2s}D_sH_0\psi$ in $L^2$. For the potential, the a.e. pointwise identity $|e^sx|=e^s|x|$ gives $MD_s\psi=e^sD_sM\psi$; both sides belong to $L^2$ by [F1]. Consequently, on exactly $H^2$,
$$H_\gamma D_s\psi=e^{2s}D_sH_\gamma\psi+\gamma(e^{2s}-e^s)D_sM\psi.$$
This equality is of actual $L^2$ vectors on the stated operator domain, without an unbounded dilation generator or commutator. [step 1.1, F1, F3, given, algebra]

1.3 [Well-definedness and symmetry on $H^2$] By [F1], $H_\gamma\psi\in L^2$ for every $\psi\in H^2$. For compact smooth $f,g$, integration by parts gives $\langle H_0f,g\rangle=\sum_i\langle\partial_i f,\partial_i g\rangle=\langle f,H_0g\rangle$. For general $f,g\in H^2$ use [F2] to take separate $H^2$-convergent compact smooth sequences. Their functions, first derivatives and Laplacians converge in $L^2$, so Cauchy-Schwarz passes each pairing to the limit and gives the same identity. For the potential, [F1] makes $\langle Mf,g\rangle$ and $\langle f,Mg\rangle$ integrable, and the real multiplier makes them equal. Thus $\langle H_\gamma f,g\rangle=\langle f,H_\gamma g\rangle$ on $H^2$, and $\langle H_0f,f\rangle=\|\nabla f\|_2^2$. No self-adjointness theorem was needed. [F1, F2, given, algebra]

2.1 [Coulomb zero exclusion by an exact finite-dilation pairing] Let $\gamma>0$ and let $\psi\in H^2$ satisfy $H_\gamma\psi=0$. Step 1.2 gives $D_s\psi\in H^2$ and $H_\gamma D_s\psi=\gamma(e^{2s}-e^s)D_sM\psi$. Symmetry from step 1.3 gives $\langle H_\gamma D_s\psi,\psi\rangle=\langle D_s\psi,H_\gamma\psi\rangle=0$. For every real $s\ne0$ the real coefficient $\gamma(e^{2s}-e^s)$ is nonzero, so division gives $\langle D_sM\psi,\psi\rangle=0$. Strong continuity from step 1.1 and Cauchy-Schwarz imply $|\langle D_sM\psi-M\psi,\psi\rangle|\le\|D_sM\psi-M\psi\|_2\|\psi\|_2\to0$. Hence
$$0=\langle M\psi,\psi\rangle=\int_{\mathbb R^3}|\psi(x)|^2/|x|\,dx.$$
The nonnegative integrand is strictly positive wherever $x\ne0$ and $\psi(x)\ne0$, so integral zero forces $\psi=0$ a.e. This proves $\ker H_\gamma=\{0\}$ for every $\gamma>0$, with every origin and infinity issue controlled by the actual $H^2$ domain and Hardy bound. [step 1.1, step 1.2, step 1.3, F1, algebra]

2.2 [The separate free branch] If $\gamma=0$ and $H_0\psi=0$ with $\psi\in H^2$, [F4] gives $4\pi^2|\xi|^2\mathcal F_2\psi(\xi)=0$ a.e. Thus $\mathcal F_2\psi$ vanishes a.e. off $\{0\}$. The singleton is Lebesgue null: it lies in a cube of side $2/n$ for every integer $n\ge1$, whose volume tends to zero. Therefore its $L^2$ class is zero and unitarity gives $\psi=0$. With step 1.3 this completes (a) for $\gamma\ge0$. No positive-$\gamma$ division or artificial level $-\gamma^2/(4n^2)$ is used in the free case. [F4, step 1.3, given, algebra]

3.1 [Zero atom for any exact representing PVM] Assume the spectral data of (b), let $h\in\mathcal H$ and set $u=E_\gamma(\{0\})h$. The intersection identity for projections shows that $\mu_u$ is supported on $\{0\}$. Thus $\int\lambda^2d\mu_u=0$, the exact spectral domain gives $u\in H^2$, and the norm identity gives $H_\gamma u=0$. Steps 2.1 and 2.2 imply $u=0$. Since $h$ was arbitrary, $E_\gamma(\{0\})=0$. For $\gamma=0$ and $B_N=[-N,-1/N]$, set $u=E_0(B_N)h$. Its scalar measure is supported on $B_N$, so it is in $D(H_0)$, and [F4] together with the representing expectation identity gives $0\le\langle H_0u,u\rangle=\int_{B_N}\lambda d\mu_u\le-\|u\|^2/N$. Therefore $E_0(B_N)=0$. As $B_N\uparrow(-\infty,0)$, strong countable additivity gives $E_0((-\infty,0))=0$; combined with the zero-atom result it gives $E_0((-\infty,0])=0$, proving (b). This uses the specified representing data, not desired Coulomb completeness. [step 2.1, step 2.2, F4, given, algebra]

4.1 [Exact radial transport] Assume the data of (c). If $u\in D(A_l)$ satisfies $A_lu=0$, put it in the $(l,0)$ component and set every other component to zero. This family belongs to the exact sum graph domain because its squared graph norm is $\|u\|^2$. Consequently $\psi=U^*(u\delta_{(l,0)})$ lies in $H^2$ and satisfies $H_\gamma\psi=0$. By (a), $\psi=0$, and unitarity gives $u=0$. For a radial representing PVM, the same argument as step 3.1 places every vector in its zero-atom range in $\ker A_l$ via its exact domain/norm identity. Hence every such radial zero projection is zero. This proves (c) on the actual transported domain; neither boundedness of a regular ODE solution nor its $L^2$ membership alone is used as a substitute. [step 2.1, step 2.2, step 3.1, given, construct, algebra]

5.1 [Conclusion] Steps 1.3, 2.1 and 2.2 prove (a), step 3.1 proves (b), and step 4.1 proves (c). The only choices are the countable approximation sequences and the CC hypotheses of the actual Hardy, density, measure and Fourier suppliers. All dilations are explicit and every limit is a norm limit of an identified $L^2$ vector; there is no use of arbitrary-index choice, desired spectral completeness, or a formal virial commutator. [step 1.3, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Research integration and limits

This is a unique research-only proof module for the sole owning spectral successor. The broad `parallel-cc-negative-spectrum-draft.md` independently contains the equivalent exact dilation pairing $\langle D_s^*\psi,(D_s^*H_\gamma D_s-H_\gamma)\psi\rangle=0$ and its norm limit; the proof above expands the weak-domain scaling and instead takes strong continuity of the identified vector $M\psi$. Neither method differentiates $D_s\psi$ or assumes that $\psi$ belongs to the domain of a dilation generator. The real coefficient used in step 2.1 is nonzero for both signs of nonzero $s$; its small-$s$ limit is not needed before division.

The CC claim for the kernel proof is local and does not invoke the AC-bearing Statements of the current `thm-nrqm-coulomb-infinitesimal-kinetic-bound`, free-operator or transported-endpoint carriers. Those current contracts remain unchanged. Their CC replacements, self-adjointness of $H_\gamma$ on exactly $H^2$, spectral existence/uniqueness, and exact angular/form transport must be proved and accepted independently by the successor. Clauses (b) and (c) show precisely which accepted data suffice afterward; they do not silently weaken the current production contracts.

This lemma adds no bound-state normalization, removes no negative level, and changes no angular label or direct-sum domain. Once the independently supplied exact polar/unitary resolution is established, its zero projection is zero in every channel, so there is no extra zero-energy discrete copy in the full normalized radial/angular assembly. The infinite negative family at $-\gamma^2/(4n^2)$ for $\gamma>0$ and its exact normalized transported vectors remain governed by the broad negative-spectrum and Laguerre modules. For $\gamma=0$, the free nonpositive projection is zero and there are no discrete bound copies. No completeness in the full $L^2$ space is inferred from absence of a zero atom.

The quoted repository supplier interfaces and local proofs were read; no external authoritative textbook full text was retrieved in this subtask. The bibliography supplies background provenance, not a claim of fresh full-text verification. Source snapshot hashes and scoped mechanical checks are adjacent evidence only, not independent audit, supplier acceptance, manifest registration, native readiness, owner resolution or gate closure. Production and mirror writes, every affected consumer check and native capped review history remain exclusively with `physics_spectral_repair_successor`.
