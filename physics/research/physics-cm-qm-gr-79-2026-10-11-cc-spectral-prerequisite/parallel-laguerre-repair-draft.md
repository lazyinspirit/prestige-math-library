---
id: thm-nrqm-coulomb-laguerre-bound-energy-exhaustion
aliases: [nrqm-coulomb-laguerre-bound-energy-exhaustion]
kind: theorem
domain: mathematics
title: "Laguerre bound energy exhaustion"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-intervals-regular-ivp-parameter-series, def-continuity-real, def-l-p-space-as-a-quotient-by-null-functions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-projection-valued-measure]
dependency_roles:
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  def-continuity-real: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-projection-valued-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (Theorem 10.9: eigenvalues E_n = -(gamma/(2(n+1)))^2 with the Laguerre eigenfunctions; the non-terminating case is proved not square-integrable on p. 233)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §18.3 'Definitions' (Laguerre polynomials L_n^{(alpha)} and their orthogonality relations)"
      url: "https://dlmf.nist.gov/18.3"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, and for
every $l\ge0$ let $A_l$ be the radial operator of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]]; let
$C=-\Delta-\gamma/|\cdot|$ on $D(C)=H^2(\mathbb R^3;\mathbb C)$ be the
self-adjoint operator of [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] (c),
with essential spectrum $[0,\infty)$
([[thm-nrqm-coulomb-essential-spectrum]]), and let $U$ be the polar unitary of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (d). Then:

(a) if $k>0$ and $j:=\gamma/(2k)-l-1\notin\mathbb N_0$, then the regular solution $u_{\mathrm{reg}}$ of [[thm-nrqm-coulomb-kummer-recurrence-and-termination]] is not square-integrable on $(0,\infty)$, and $-k^2$ is not an eigenvalue of $A_l$;

(b) the negative eigenvalues of $A_l$ are exactly the numbers
$$-\frac{\gamma^2}{4n^2},\qquad n\ge l+1,$$
each with one-dimensional eigenspace spanned by the corresponding regular solution $u_{\mathrm{reg}}$; in particular every negative eigenvalue of $A_l$ is simple;

(c) the negative eigenvalues of $C$ are exactly the numbers $-\gamma^2/(4n^2)$ with $n\ge1$;

(d) every eigenfunction of $C$ with negative eigenvalue lies in the closed span of the transported regular solutions: if $C\psi=E\psi$ with $E<0$ and $U\psi=(u_{lm})$, then $E=-\gamma^2/(4n^2)$ for some $n\ge1$, and each nonzero $u_{lm}$ is a scalar multiple of the regular solution of $A_l$ at that energy.

This exhausts the negative spectrum of $A_l$ and of $C$ by the terminating
Laguerre solutions; no claim is made here about completeness of these
eigenfunctions in the negative spectral subspace, about the multiplicity of
the levels of $C$, or about any physical interpretation.

## Facts & Assumptions

**Given:** the exact hypotheses and operators of the Statement; $j=\gamma/(2k)-l-1$ and the regular solution normalized by $u_{\mathrm{reg}}(r)/r^{l+1}\to1$.

[F1] [[thm-nrqm-coulomb-kummer-recurrence-and-termination]] supplies the convergent series $v(x)=\sum_{i\ge0}v_ix^i$, $v_0=1$, $v_{i+1}=(i-j)v_i/((i+1)(i+2l+2))$, with $u_{\mathrm{reg}}=r^{l+1}e^{-kr}v(2kr)$. It terminates precisely for $j\in\mathbb N_0$ and is then proportional to $L_j^{(2l+1)}$. Its second solution is constructed only on a zero-free neighborhood of zero and continued across nodes by regular initial-value uniqueness. It has $u_2(r)\sim-r^{-l}/(2l+1)$, and every solution is $c_1u_{\mathrm{reg}}+c_2u_2$.

[F2] [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] gives the form $a_l$ on $V_l$, the exact form-identity definition of $D(A_l)$, self-adjointness of $A_l$, the block/domain identity $UCU^*=\bigoplus_{l,m}A_l$, and boundedness of $u(r)/r$ near zero for every radial eigenfunction. Compactly supported smooth tests are dense in $V_l$, and $a_l$ is bounded there.

[F3] [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] gives self-adjointness of $C$ on exactly $H^2(\mathbb R^3)$. [[thm-nrqm-coulomb-essential-spectrum]] gives that every negative spectral point of $C$ is an isolated finite-multiplicity eigenvalue and that its negative spectral subspace is the closed span of its negative eigenspaces.

[F4] The spectral PVM and exact-domain calculus of [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]], [[def-projection-valued-measure]] give: a reducing block carries the restricted PVM; the projection at $\{\lambda\}$ is the projection onto the $\lambda$-eigenspace; and a bounded Borel multiplier $b$ with bounded $\lambda b(\lambda)$ maps into the operator domain and realizes the indicated inverse equations. These AC-bearing suppliers are used explicitly in step 5.1; the current public AC hypothesis is retained.

## Proof

1.1 [The nonterminating tail] Suppose $j\notin\mathbb N_0$. Every $v_i$ is real and nonzero. Choose $\varepsilon\in(0,1/2)$ and an integer $I>\max(j,0)$ large enough that $(i-j)/(i+2l+2)\ge1-\varepsilon$ for all $i\ge I$. All coefficients from $I$ onward have one sign and $|v_{i+1}|\ge(1-\varepsilon)|v_i|/(i+1)$; induction gives $|v_i|\ge c(1-\varepsilon)^i/i!$ for $i\ge I$, where $c=|v_I|I!(1-\varepsilon)^{-I}>0$. Since the series is absolutely convergent, on $x\ge0$ the absolute value of its same-sign tail is its sum of absolute values. The reverse triangle inequality gives $|v(x)|\ge c e^{(1-\varepsilon)x}-P(x)$, where one may take the nonnegative polynomial $P(x)=\sum_{i<I}|v_i|x^i+c\sum_{i<I}(1-\varepsilon)^ix^i/i!$. Thus for sufficiently large $r$, $|u_{\mathrm{reg}}(r)|\ge(c/2)r^{l+1}e^{k(1-2\varepsilon)r}$. Its squared integral diverges, since the exponent is positive; hence $u_{\mathrm{reg}}\notin L^2(0,\infty)$. [F1, given, algebra]

1.2 [Terminating solutions belong to the form domain] Suppose $j\in\mathbb N_0$ and write $u=r^{l+1}e^{-kr}v(2kr)$. Near zero, $u=O(r^{l+1})$, $u'=O(r^l)$ and $u/r=O(r^l)$; at infinity each decays exponentially times a polynomial. Therefore $u,u',u/r\in L^2$, and the trace at zero is zero. To verify $u\in V_l$ directly, choose a smooth cutoff $\chi_\delta$ that vanishes below $\delta$, equals one above $2\delta$ and has $|\chi_\delta'|\le C/\delta$. The additional derivative term obeys $\|\chi_\delta'u\|_2^2\le4C^2\int_\delta^{2\delta}|u/r|^2dr\to0$. The other omitted terms tend to zero by integrability; cutting off the exponential tail and then smoothing on compact subsets of $(0,\infty)$ gives compact smooth approximants in the $V_l$ norm. This is membership in the specified endpoint realization, rather than membership inferred from $L^2$ alone. [F1, F2, given, construct, algebra]

2.1 [The actual origin condition excludes the second solution] If $u\in D(A_l)$ and $A_lu=-k^2u$, then $u$ solves the classical radial equation by [F2]. By [F1] it is $c_1u_{\mathrm{reg}}+c_2u_2$. The regular quotient $u_{\mathrm{reg}}/r=O(r^l)$ is bounded, whereas $u_2/r\sim-r^{-l-1}/(2l+1)$. If $c_2\ne0$, the reverse triangle inequality therefore makes $|u(r)|/r\to\infty$, contrary to [F2]. Consequently $u=c_1u_{\mathrm{reg}}$, and every negative eigenspace has dimension at most one. Together with step 1.1 this proves (a). [F1, F2, step 1.1, algebra]

2.2 [The form identity gives the operator domain and $H^2$ transport] The substitution of [F1] shows that $u$ solves $-u''+(l(l+1)/r^2-\gamma/r)u=-k^2u$ on $(0,\infty)$. Against $w\in C_c^\infty(0,\infty)$, integration by parts gives $a_l(u,w)=\int(u'\overline{w'}+l(l+1)u\overline w/r^2-\gamma u\overline w/r)dr=-k^2\langle u,w\rangle$. The equality between the kinetic forms follows by integrating $(u\overline w/r)'$, with no boundary term because $w$ is compactly supported away from zero. Boundedness of $a_l$ and density in [F2] extend the identity to every $w\in V_l$. The actual definition of $D(A_l)$ now gives $u\in D(A_l)$ and $A_lu=-k^2u$. The vector with this one $(l,m)$ component belongs to the direct-sum graph domain, so the exact block identity gives $\psi=u(r)Y_{lm}(\Omega)/r\in D(C)=H^2(\mathbb R^3)$ and $C\psi=-k^2\psi$ for every $m$. This argument uses no assertion that $e^{-k|x|}$ is smooth at $x=0$. [step 1.2, F1, F2, F3, algebra]

3.1 [All radial negative eigenvalues] Termination means $j=n-l-1\in\mathbb N_0$, so $n\ge l+1$ and $k=\gamma/(2n)$. Step 2.2 supplies a nonzero eigenvector at each $E_n=-\gamma^2/(4n^2)$, and step 2.1 shows its eigenspace is exactly $\mathbb Cu_{\mathrm{reg}}$. All other negative energies are excluded by steps 1.1 and 1.2. This proves (b), including every integer $n\ge l+1$, with no finite truncation of the bound family. [step 1.1, step 2.1, step 2.2, algebra]

4.1 [All negative eigenvalues and eigenvectors of $C$] By the exact block/domain identity, $C\psi=E\psi$ is equivalent to $A_lu_{lm}=Eu_{lm}$ in every component, where $U\psi=(u_{lm})$. If $\psi\ne0$, at least one component is nonzero. Step 3.1 therefore forces $E=E_n$ for some $n\ge1$, and all components with $l\ge n$ vanish; the remaining finitely many components are scalar multiples of the regular solutions at $k=\gamma/(2n)$. Conversely each $E_n$ is a $C$ eigenvalue by taking the $l=m=0$ vector from step 2.2. Thus (c) and (d) hold. In fact every such eigenfunction is a finite linear combination of the transported regular solutions, which implies the asserted closed-span membership. [F2, step 2.2, step 3.1, algebra]

5.1 [Entire negative spectrum, including radial blocks] By [F3], every negative spectral point of $C$ is an eigenvalue, so step 4.1 proves $\sigma(C)\cap(-\infty,0)=\{E_n:n\ge1\}$. Fix $l$ and realize $A_l$ as the reducing $(l,0)$ block of $UCU^*$. If $\lambda<0$ is outside $\sigma(C)$, the restricted inverse of $C-\lambda$ supplies a bounded inverse for $A_l-\lambda$. If $\lambda=E_n$ with $n<l+1$, choose an open interval $J=(\lambda-\delta,\lambda+\delta)$ whose intersection with $\sigma(C)$ is just $\{\lambda\}$, as allowed by [F3]. The restricted projection on $J$ equals the restricted projection on $\{\lambda\}$ by [F4]; this is zero, since step 3.1 excludes a radial eigenvector at this energy. The restricted PVM is consequently supported outside $J$. Define $b(t)=(t-\lambda)^{-1}$ outside $J$ and $b(t)=0$ inside $J$. Both $b$ and $tb$ are bounded. By the exact-domain calculus [F4], its block multiplier maps into $D(A_l)$ and gives both $(A_l-\lambda)b(A_l)=I$ and $b(A_l)(A_l-\lambda)=I$ on the respective exact domains. Thus $\lambda\notin\sigma(A_l)$. The remaining negative points are eigenvalues from step 3.1, proving $\sigma(A_l)\cap(-\infty,0)=\{E_n:n\ge l+1\}$. This establishes the final exhaustion sentence for both operators, including absence of additional continuous negative radial spectrum. [F2, F3, F4, step 3.1, step 4.1, construct, algebra]

6.1 [Conclusion] Step 2.1 proves (a), step 3.1 proves (b), step 4.1 proves (c) and (d), and step 5.1 proves the stated exhaustion of the entire negative spectra. [step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Research appendix: normalization, degeneracy and completeness retained downstream

This appendix is research evidence, not a proposed expansion of this item's public Statement. The existing separate carrier `thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy` owns the $n^2$ multiplicity and negative-subspace completeness claims. Its current interface is preserved by the proof above; the sole spectral successor still owns its full consumer review.

For $n\ge1$, $0\le l<n$, put $j=n-l-1$, $k_n=\gamma/(2n)$ and $p_{nl}(r)=r^{l+1}e^{-k_nr}L_j^{(2l+1)}(2k_nr)$. Then $p_{nl}$ is nonzero because the Laguerre constant coefficient is positive. An explicit normalization that needs no Laguerre-orthogonality supplier is

$$a_i:=\frac{(-1)^i}{i!}\binom{j+2l+1}{j-i},\qquad S_{nl}:=\sum_{i=0}^j\sum_{t=0}^j a_i a_t(2l+2+i+t)!,\qquad N_{nl}:=\frac{(2k_n)^{l+3/2}}{\sqrt{S_{nl}}}.$$

Indeed, finite expansion and the substitution $x=2k_nr$ give

$$\|p_{nl}\|_2^2=(2k_n)^{-2l-3}\int_0^\infty x^{2l+2}e^{-x}\bigl(L_j^{(2l+1)}(x)\bigr)^2dx=(2k_n)^{-2l-3}S_{nl}.$$

The last equality uses only $\int_0^\infty x^q e^{-x}dx=q!$ for integers $q\ge0$, proved by integration by parts starting with $q=0$; the exponential makes every boundary term at infinity zero. The integral is strictly positive because its integrand is continuous and positive on a nonempty interval. Thus $S_{nl}>0$ despite cancellation in its finite sum, and $u_{nl}:=N_{nl}p_{nl}$ has norm one. This is an exact finite formula, without an unproved special-function integral identity. For the supplier's normalization $v_0=1$, $u_{\mathrm{reg}}=p_{nl}/\binom{j+2l+1}{j}$.

The vectors $\Psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$ lie in $H^2$ by step 2.2. At fixed $n$ their polar vectors occupy distinct blocks, so they form an orthonormal family; different $n$ are orthogonal because self-adjointness gives $(E_n-E_q)\langle\Psi_{nlm},\Psi_{qab}\rangle=0$. Step 4.1 identifies the complete eigenspace at $E_n$ with their finite span, hence its dimension is $\sum_{l=0}^{n-1}(2l+1)=n^2$. By [F3], the closed span over every $n\ge1$ is exactly $E_C((-\infty,0))L^2$. Restricting the reducing block gives the corresponding complete normalized radial family $\{u_{nl}:n\ge l+1\}$ in $E_{A_l}((-\infty,0))L^2(0,\infty)$, without claiming it spans all radial $L^2$. The full nonnegative $C$ subspace is infinite dimensional since essential spectrum at $\lambda=1/4$ makes $E_C((0,1/2))$ infinite rank. Thus the bound family remains infinite and remains incomplete in the full three-dimensional Hilbert space.

## Research status and exact limits

The public Statement above is byte-for-byte the current source Statement; no AC/CC weakening, finite-family replacement, operator-domain weakening, or consumer-contract change is proposed. The current Kummer and endpoint proofs were read locally, as were the current essential-spectrum carrier and the CC spectral/radial candidate. Their form-domain route establishes actual $H^2$ membership; at $l=0$ the ground-state profile has a nonzero radial derivative at zero, so calling it globally smooth would be false.

The source Kummer substitution proof uses quotients $u''/u$ and $\varphi'/\varphi$ across potential zeros and has an incorrectly scaled intermediate chain-rule line. Its final substitution equation and coefficient recurrence are correct: direct product differentiation gives $u''=r^{l+1}e^{-kr}[\varphi''+2((l+1)/r-k)\varphi'+(l(l+1)/r^2-2k(l+1)/r+k^2)\varphi]$, with no division by a possibly zero solution; putting $\varphi(r)=v(2kr)$ yields $xv''+(2l+2-x)v'+jv=0$. This proof-only cleanup remains with the sole spectral successor's supplier ownership; this draft does not edit that carrier.

The current essential-spectrum carrier and the exact spectral-calculus suppliers retain their AC assumptions. The CC research candidates describe a possible lower-choice route, but cannot be cited to relabel those current contracts as CC-only. AC is carried here for those load-bearing premises, notably the restricted PVM and calculus in step 5.1; CC is carried through the endpoint/ODE/measure prerequisites. Explicit normalization of a countable polynomial family adds no arbitrary basis-selection choice.

No authoritative external full text was retrieved in this subtask. The bibliography is inherited source provenance, not a claim of fresh full-text verification. Local symbolic finite checks and mechanical formatting checks are evidence only; they are not mathematical acceptance, supplier registration, independent audit, native readiness, owner resolution, or gate closure. Production integration, mirror/contracts consistency, supplier closure, every direct/indirect consumer check, and the existing native review/repair caps belong exclusively to `physics_spectral_repair_successor`.
