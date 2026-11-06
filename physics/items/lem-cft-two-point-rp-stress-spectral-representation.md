---
id: lem-cft-two-point-rp-stress-spectral-representation
kind: lemma
title: Positive stress spectral measure from two-point reflection positivity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - thm-spectral-theorem-for-bounded-normal-operators-pvm-form
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-identity-theorem-holomorphic-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-spectral-theorem-for-bounded-normal-operators-pvm-form: mathematical-premise
  thm-borel-functional-calculus-for-bounded-normal-operators: mathematical-premise
  lem-spectral-measure-of-a-representation-of-an-abelian-lch-group: mathematical-premise
  thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Cappelli, Friedan and Latorre, c-Theorem and Spectral Representation
      url: https://www.physics.rutgers.edu/~friedan/papers/Nucl_Phys_B352_616-670_1991.pdf
      locator: 'Section2.1 Eq2.3 and AppendixA, printed657–660: spectral normalization and positive intermediate-state measure. The two-point OS contraction, transport argument and zero-atom classification are proved here; finite conformal endpoints are not assumed.'
    - title: Stephen Summers, A Perspective on Constructive Quantum Field Theory
      url: https://arxiv.org/pdf/1203.3991
      locator: 'Section3, PDFp10: reflection positivity, clustering and regularity are distinct conditions. No full OS reconstruction theorem is imported.'
dependency_level: 0
---

## Statement

Assume AC. Let $S_{AB}$, for $A,B\in\{T,\bar T,\Theta\}$, be a matrix of tempered distributions on the Euclidean plane $\mathbb R^2$, with coordinates $y=(t,x)$. For physical interpretation, the labels denote components of a symmetric stress tensor in conventions $z=t+ix$, $\bar z=t-ix$, $T=T_{zz}$, $\bar T=T_{\bar z\bar z}$, and $\Theta=-T_{z\bar z}$. Let $R_\alpha$ be counterclockwise rotation by angle $\alpha$ on $\mathbb R^2$, and define $\partial=\tfrac12(\partial_t-i\partial_x)$ and $\bar\partial=\tfrac12(\partial_t+i\partial_x)$. The kernels are translation invariant and satisfy bosonic exchange symmetry $S_{AB}(y)=S_{BA}(-y)$. They are rotation covariant with weights $w=(2,-2,0)$:
$$S_{AB}(R_\alpha y)=e^{-i(w_A+w_B)\alpha}S_{AB}(y).$$
Assume two-point reflection positivity in this reflected-adjoint spin basis: for every three-component test $f=(f_A)$ with $f_A\in C_c^\infty(\mathbb H_+)$ and $\mathbb H_+=\{(t,x)\in\mathbb R^2:t>0\}$, the form
$$ (f|g)_{OS}=\sum_{A,B}\int\overline{f_A(t,x)}S_{AB}(t+s,y-x)g_B(s,y)\,dt\,dx\,ds\,dy,$$
is nonnegative, meaning $(f|f)_{OS}\in[0,\infty)$. The integrals mean distribution pairings. For every pair of distinct points, assume the point correlator is the finite joint limit of reflected mollifications, so the corresponding point-state limits exist in this form. Conservation is imposed away from coincident contact terms:
$$\bar\partial S_{TB}-\partial S_{\Theta B}=0,\qquad \partial S_{\bar T B}-\bar\partial S_{\Theta B}=0.$$
No mass measure or positive-energy Hilbert representation is assumed.

Then there are $c_L,c_R,\kappa\ge0$ and a positive Borel measure $\nu$ on $(0,\infty)$ such that, for $r>0$, $u=\mu r$,
$$F(r):=r^4S_{TT}(r,0)=\frac{c_L}{2}+\frac1{96}\int u^4K_4(u)\,d\nu(\mu),$$
$$\bar F(r):=r^4S_{\bar T\bar T}(r,0)=\frac{c_R}{2}+\frac1{96}\int u^4K_4(u)\,d\nu(\mu),$$
$$B(r):=r^4S_{T\Theta}(r,0)=\frac1{96}\int u^4K_2(u)\,d\nu(\mu),\qquad H(r):=r^4S_{\Theta\Theta}(r,0)=\kappa r^4+\frac1{96}\int u^4K_0(u)\,d\nu(\mu).$$
Here $K_j(u)=\int_0^\infty e^{-u\cosh v}\cosh(jv)\,dv$. All displayed integrals are finite; $\nu((0,M])<\infty$ for every $M<\infty$. The constants $c_L,c_R$ are the two positive null-branch coefficients; $\kappa$ is the zero-energy, zero-momentum trace atom. In particular
$$\lim_{r\to\infty}S_{\Theta\Theta}(r,0)=\kappa.$$
Thus the separate trace-clustering assumption $S_{\Theta\Theta}(r,0)\to0$ removes this atom, without requiring conformal endpoints, a mass gap, uniqueness of the whole vacuum space, or clustering of every field. Correlators are smooth at separated points; contact counterterms are not classified or used.

## Facts & Assumptions

**Given:** The tempered, covariant, conserved two-point matrix, its reflection-positive form and joint finite separated-point limits in the Statement. Write $(u|v)=\overline{\langle u,v\rangle}$ to use a second-variable-linear pairing while the library Hilbert pairing is first-variable-linear.

[F1] [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]] and [[thm-borel-functional-calculus-for-bounded-normal-operators]] give the spectral PVM, positive roots, bounded Borel functions and commutant calculus of a positive self-adjoint contraction.

[F2] [[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]] gives the joint PVM of a strongly continuous unitary representation of $\mathbb R^2$ on a separable Hilbert space. We use its existence and uniqueness, not its additional irreducibility conclusion.

[F3] [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] gives Fourier injectivity. [[thm-identity-theorem-holomorphic-functions]] gives uniqueness from a real interval inside a complex half-plane. Together they give the Fourier–Laplace uniqueness argument in step 4.1.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-dominated-convergence]] justify the nonnegative integrals and finite exponentially weighted measure limits below. AC carries their weaker choice assumptions.

## Proof

1.1 Quotient the positive test form by its zero-norm space and complete to a Hilbert space. Polarization makes the nonnegative sesquilinear form Hermitian, and positivity gives its Cauchy–Schwarz inequality. Spatial translation $U_x$ preserves the form. Forward time translation $P_a$ is initially symmetric on the test space, since the kernel depends on the sum of the two positive times. Thus $\|P_a f\|^2=(f|P_{2a}f)\le\|f\|\,\|P_{2a}f\|.$ If $f$ is null the same identity shows $P_a f$ is null, so time translation is well-defined on the quotient. Temperateness bounds $\|P_s f\|\le C_f(1+s)^{N_f}$: the test convolution paired with $S$ is a translate by $2s$ of a fixed compactly supported smooth function, and its finitely many Schwartz seminorms grow polynomially. Iterating the inequality gives $\|P_a f\|\le\|f\|^{1-2^{-n}}\|P_{2^na}f\|^{2^{-n}}$. The last factor has limit at most1 by that polynomial bound; hence $\|P_a f\|\le\|f\|$. Therefore $P_a$ extends to a self-adjoint contraction on the completion, is positive because $P_a=P_{a/2}^2$, and obeys the semigroup law. Translation continuity of test functions in Schwartz seminorms gives strong continuity of $P_a$ and $U_x$. For separability, place each compact positive-time support inside a rational rectangle, periodize a smooth extension with a fixed cutoff, truncate its Fourier series and approximate its finitely many coefficients by rational complex numbers. Integration by parts gives convergence with every derivative; a countable family of rectangles, cutoffs and rational truncations is dense in the test topology and hence in the Hilbert norm. If this completion is zero, every test vector is null; positivity and polarization make all mixed pairings zero, so all separated point limits and formulas vanish. We may therefore assume it is nonzero. [given, algebra]

2.1 The operator $P_1$ has zero kernel: $P_1v=0$ gives $\|P_{1/2}v\|^2=(v|P_1v)=0$, and then $P_{2^{-n}}v=0$ for every $n$, contradicting strong continuity at $0$ unless $v=0$. Thus the spectral projection $E_{P_1}(\{0\})$ has range $\ker P_1=\{0\}$, so the spectral measure has no atom at $0$. If $Q$ is a bounded positive operator and $Q^n=A$, the spectral PVM of $A$ is the pushforward of that of $Q$ under $q\mapsto q^n$, by the Borel functional calculus and uniqueness of the spectral PVM. Since $q\mapsto q^n$ is injective on $[0,\infty)$, $A^{1/n}=\int (q^n)^{1/n}\,dE_Q(q)=Q$. The semigroup law gives $P_{m/n}^n=P_m=P_1^m$, so uniqueness of the positive root gives $P_{m/n}=P_1^{m/n}$. The spectral integral and dominated convergence give strong continuity of $a\mapsto P_1^a$ on $a\ge0$, so strong continuity of the semigroup extends this equality from rational to real $a\ge0$. The bounded Borel functions $\lambda^{-is}$, assigned any unit-modulus value at $\lambda=0$, give unitaries $V_s$; dominated convergence in each scalar spectral measure and the absence of an atom at $0$ give strong continuity in $s$. They commute with $U_x$. Apply [F2] to $V_sU_x$. Its energy marginal is the pushforward of the spectral measure of $P_1$ by $E=-\log\lambda$, so its joint PVM $\mathsf E(dE,dp)$ is supported on $E\ge0$ and $P_a=\int e^{-aE}\,d\mathsf E$. This constructs positive energy rather than importing OS reconstruction. [given, F1, F2, F4, step 1.1]

3.1 For $\tau>0$, reflected mollifiers centered at $(\tau,0)$ converge to vectors $v_A(\tau)$: the norm squared of the difference of two mollifications is the sum of their two diagonal pairings minus their two mixed pairings, and the assumed joint point limit makes it tend to0. They satisfy $v_A(\tau+a)=P_av_A(\tau)$. Set $M^\tau_{AB}(D)=(v_A(\tau)|\mathsf E(D)v_B(\tau))$. This is a finite positive matrix measure, and $M^{\tau+a}=e^{-2aE}M^\tau$. Thus $M=e^{2\tau E}M^\tau$ is independent of $\tau$, is a locally finite positive matrix measure, and for $t>0$ $S_{AB}(t,x)=\int_{E\ge0}e^{-tE+ipx}\,dM_{AB}(E,p).$ Indeed take $0<2\tau<t$ and use the semigroup and spatial translations between the two point vectors. For each $\epsilon>0$, $e^{-\epsilon E}M$ is finite in total variation; the same holds for cross entries by matrix Cauchy–Schwarz. All such weighted transforms are therefore genuine measure integrals. The equality with $S$ is distributional as well: on a strip $t\ge t_0>0$, OS Cauchy–Schwarz and contraction from a fixed $\tau_0<t_0/2$ uniformly bound the mollified pairings in the spatial shift and mollifier index. Their joint point limits therefore converge against compact tests by dominated convergence, while mollification converges to $S$ as a distribution. This identifies the represented kernel with the original distribution on $t>0$. [given, F1, F2, step 2.1]

4.1 The Fourier–Laplace uniqueness needed below follows directly. Any distribution obtained by differentiating polynomial multiples of $M$ becomes tempered after multiplication by $e^{-\epsilon E}$, since an extra positive energy exponential controls all powers of $E$ and a finite measure times a polynomial in $p$ is tempered. After testing against a Schwartz function in $p$, pair with $\chi(E)e^{-zE}$, where $\chi=1$ near $E\ge0$ and $\chi=0$ for $E\le-1$. A smaller positive exponential bounds every $z$ derivative, so this Laplace transform is holomorphic for $\operatorname{Re}z>0$. If its Fourier–Laplace transform vanishes for real positive time and every spatial coordinate, Fourier injectivity in $p$ and the identity theorem make it vanish throughout that half-plane. On $z=\epsilon+is$ this is the Fourier transform in $E$ of its exponentially weighted distribution. A second application of Fourier injectivity gives zero. This proves the required injectivity, including distributions supported at $E=0$. [given, F3, step 3.1]

5.1 Rotation covariance differentiated distributionally gives $(t\partial_x-x\partial_t)S_{AB}=-i(w_A+w_B)S_{AB}$. Inserting the representation from step 3.1 and integrating derivatives against tests yields $(p\partial_E+E\partial_p)M_{AB}=-(w_A+w_B)M_{AB},$ where $M$ is extended by zero to $E<0$. Derivatives at $E=0$ are retained as distribution derivatives; no boundary atom is discarded. Step 4.1 justifies the Fourier–Laplace uniqueness needed for this passage. The vector field $(p,E)$ has zero divergence. For compactly supported tests, differentiate their pullbacks by its flow, the Lorentz boosts $\Lambda_\eta(E,p)=(E\cosh\eta+p\sinh\eta,p\cosh\eta+E\sinh\eta)$. The displayed equation gives $M(\Lambda_\eta D)=D_\eta M(D)D_\eta,\qquad D_\eta=\operatorname{diag}(e^{-2\eta},e^{2\eta},1).$ This follows by differentiating $D_\eta^{-1}M(\Lambda_\eta D)D_\eta^{-1}$ against smooth tests and obtaining zero; uniform smooth approximation on compact sets gives equality of the locally finite matrix Radon measures; positive quadratic measures extend to arbitrary Borel sets by exhaustion, and polarization gives the cross entries wherever finite. [given, step 3.1, step 4.1, F3, algebra]

6.1 There is no spectral support in $0\le E<|p|$. A spacelike point there has a boost taking it into $E<0$. By continuity this holds on a neighborhood. The matrix congruence in step 5.1 is invertible and hence preserves zero measure; since the boosted neighborhood has zero measure by positive energy, the original one does as well. A countable cover removes the entire spacelike region. Thus $M$ is supported on the closed future light cone. Polynomial momentum factors are now controlled by energy, so all derivatives of the representation from step 3.1 at $t>0$ converge under a smaller positive exponential. This proves smoothness there; rotations give smoothness at all separated Euclidean points. [given, step 2.1, step 4.1, step 5.1]

6.2 At the origin, boost covariance makes the $TT$ and $\bar T\bar T$ diagonal atom zero, since their weights are respectively $4$ and $-4$. Positivity and Cauchy–Schwarz then kill every entry involving $T$ or $\bar T$. Only the atom $M_{\Theta\Theta}(\{0\})=\kappa\ge0$ remains. This is precisely the invariant trace fluctuation which ordinary subtraction of the one-point mean need not remove. [given, step 5.1, algebra]

7.1 The conservation equations give, as equalities of matrix-measure rows, $(E+p)M_{TB}=(E-p)M_{\Theta B},\qquad (E-p)M_{\bar T B}=(E+p)M_{\Theta B}.$ This follows by applying their differential operators to the representation from step 3.1 and using the Fourier–Laplace uniqueness in step 4.1. On the open timelike cone write $E=\mu\cosh\eta$, $p=\mu\sinh\eta$, $\mu>0$. Conservation says every column is proportional to $v(\eta)=(e^{-2\eta},e^{2\eta},1)^T$. Positivity makes the matrix measure Hermitian, so the row relations give $dM=v(\eta)v(\eta)^T\,d\sigma(\mu,\eta),\qquad \sigma=M_{\Theta\Theta}\ge0.$ There is no division by a possibly zero momentum here: the denominators $E\pm p$ are strictly positive on this open cone. [given, step 4.1, step 6.1, algebra]

8.1 The scalar measure $\sigma$ is invariant under translation of $\eta$, by step 5.1. Define $\zeta(A)=\sigma(A\times[0,1))$ for every Borel $A\subseteq(0,\infty)$; it is a measure, and local finiteness of $\sigma$ makes $\zeta$ locally finite. Translation invariance, finite additivity on adjacent intervals and monotone approximation give $\sigma(A\times[a,b))=(b-a)\zeta(A)$ first for rational endpoints and then for all real endpoints. Let $\lambda=\zeta\times\mathcal L^1$ be the product measure; both factors are $\sigma$-finite, so $\lambda$ exists and has these same rectangle values. To prove equality on all Borel sets, restrict $\sigma$ and $\lambda$ to each finite strip $Q_n=[1/n,n)\times[-n,n)$. They are finite there and agree on the $\pi$-system of half-open rectangles cut by $Q_n$, which generates its Borel $\sigma$-algebra. The agreement class is a $\lambda$-system: it contains $Q_n$, is closed under relative complements because the total masses agree, and is closed under disjoint countable unions by countable additivity. For completeness, the $\pi$-$\lambda$ step follows by taking the smallest $\lambda$-system containing the rectangles: for each rectangle $P$, the sets $B$ for which $P\cap B$ belongs to that system form a $\lambda$-system containing the rectangles; repeating with fixed $B$ shows closure under intersections, and disjointification then gives closure under countable unions. Thus this system is the generated Borel $\sigma$-algebra, so the two restricted measures agree. The strips exhaust $(0,\infty)\times\mathbb R$, proving the product formula. Define $d\nu=192\mu^{-4}d\zeta$. This is a derived positive measure, not an assumption about the QFT. [given, F4, step 5.1, step 7.1]

9.1 On $p=-E<0$, $E>0$, conservation forces the $\bar T$ and $\Theta$ rows to vanish; positivity kills their columns too. The boost covariance in step 5.1 gives $m_L(e^{-\eta}A)=e^{-4\eta}m_L(A)$ for the remaining $TT$ measure $m_L$, so weighting by $E^{-4}$ and pushing forward by $\xi=\log E$ gives a locally finite translation-invariant measure $\rho_L$ on $\mathbb R$. For any such measure $\rho$, let $q(h)=\rho([0,h))$; translation invariance makes the measure of every interval of length $h$ equal to $q(h)$. Additivity gives $q(h+k)=q(h)+q(k)$, and monotonicity gives $q(h)=ah$ first for rational $h>0$ and then for every $h>0$, where $a=q(1)\ge0$. Thus $\rho$ agrees with $a\mathcal L^1$ on half-open intervals; the one-dimensional finite-measure uniqueness argument in step 8.1 gives equality on all Borel sets. Undoing the weighting and logarithmic change of variable gives $dm_L=a_LE^3dE$ with $a_L\ge0$. On $p=E>0$, conservation and positivity leave only the $\bar T$ row; the boost law $m_R(e^\eta A)=e^{4\eta}m_R(A)$ gives the same argument and $dm_R=a_RE^3dE$ with $a_R\ge0$. Their transforms are $6a_L/(t+ix)^4$ and $6a_R/(t-ix)^4$. Put $c_L=12a_L$, $c_R=12a_R$. No equality of the two chiral coefficients or parity symmetry is assumed. [given, step 5.1, step 7.1, step 8.1, algebra]

10.1 Evaluate the representation from step 3.1 on $(r,0)$. The timelike part contributes $\int e^{-\mu r\cosh\eta}v_A(\eta)v_B(\eta)\,d\eta\,d\zeta(\mu)$. The even rapidity integrals are $2K_4$, $2K_2$ and $2K_0$ for $TT,T\Theta,\Theta\Theta$ respectively. Since $d\zeta=\mu^4d\nu/192$, these give exactly the factors $1/96$ in the Statement. Add the null-branch terms from step 9.1 and the trace atom from step 6.2. Finiteness follows from the finite point norms in step 3.1 and positivity; mixed terms are bounded by Cauchy–Schwarz. Also $u^4K_4(u)\to48$ as $u\downarrow0$: successive integrations by parts give $K_{j+1}=K_{j-1}+2jK_j/u$, $uK_1\to1$ by dominated convergence after $v=\sinh\eta$, and $u^2K_0\to0$ since $K_0\le K_1$. Thus the finite $TT$ integral forces $\nu((0,M])<\infty$ near $0$, and away from $0$ this follows from local finiteness. [given, F4, step 3.1, step 8.1, step 9.1, step 6.2, algebra]

11.1 At a fixed positive time $r_0$, $e^{-r_0E}M_{\Theta\Theta}$ is finite. In the transform at $r\ge r_0$, dominated convergence as $r\to\infty$ leaves only the part with $E=0$. By cone support this is exactly the origin atom, so the limit is $\kappa$. Trace clustering is therefore exactly the additional exclusion asserted, not a consequence silently obtained from reflection positivity. All formulas were obtained at separated points, so coincident contact counterterms play no role. [given, F4, step 6.1, step 6.2, step 10.1] ∎
