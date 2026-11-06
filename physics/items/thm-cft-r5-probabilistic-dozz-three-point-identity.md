---
id: thm-cft-r5-probabilistic-dozz-three-point-identity
kind: theorem
title: Probabilistic Liouville three-point identity and its primary boundary value
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: conformal-field-theory
library: mathematics
domain: mathematics
dependency_level: 7
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
  - def-cft-r5-liouville-dozz-constant
  - lem-cft-r5-circle-gmc-positive-and-inverse-moments
  - lem-cft-r5-local-disk-gmc-uniform-inverse-moments
  - lem-cft-r5-liouville-charged-ward-and-radial-overlaps
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
  def-cft-r5-liouville-dozz-constant: mathematical-premise
  lem-cft-r5-circle-gmc-positive-and-inverse-moments: mathematical-premise
  lem-cft-r5-local-disk-gmc-uniform-inverse-moments: mathematical-premise
  lem-cft-r5-liouville-charged-ward-and-radial-overlaps: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Integrability of Liouville theory: proof of the DOZZ formula"
      url: https://arxiv.org/abs/1707.08785
      locator: "GMC definitions, reflection and BPZ proof architecture; the complete local construction is supplied below rather than imported as a theorem."
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory"
      url: https://arxiv.org/abs/2005.11530v1
      locator: "Sphere convention (1.3)-(1.4), footnote 5, and the primary overlap normalization; all needed local proof inputs are declared."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $0<\gamma<\sqrt2$, $\mu>0$, $b=\gamma/2$ and $Q=b+b^{-1}$. Use the probabilistic sphere model with Gaussian covariance $K(z,w)=\log(1/|z-w|)+\log|z|_++\log|w|_+$, Wick-normalized chaos, vertex convention $V_\alpha=e^{\alpha\phi}$ and zero-mode measure $dc$. For every real charge triple with $\alpha_i<Q$ and $\alpha_1+\alpha_2+\alpha_3>2Q$, its three-point coefficient satisfies

$$C^{\mathrm{sph}}_{\gamma,\mu}(\alpha_1,\alpha_2,\alpha_3)=\frac12 C^{\mathrm{DOZZ}}_{\gamma,\mu}(\alpha_1,\alpha_2,\alpha_3).$$

The equality identifies the meromorphic charge continuation; in particular its Gamma-normalized version agrees on the real extended moment domain $\alpha_i<Q$ and $t=(2Q-\sum_i\alpha_i)/\gamma<\min\{4/\gamma^2,\min_i2(Q-\alpha_i)/\gamma\}$. All rational values of $b^2$ in this interval are included. For the radial Poisson primary family normalized by incoming amplitude one, and real $a,b_0<Q$ with $a+b_0>Q$, the actual primary overlap coefficient in the stated bra/ket orientation is, for almost every $P>0$,

$$p_{a,b_0}(P)=\frac12 C^{\mathrm{DOZZ}}_{\gamma,\mu}(a,b_0,Q-iP).$$

## Statement references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

[[def-cft-r5-liouville-dozz-constant]]

[[lem-cft-r5-liouville-charged-ward-and-radial-overlaps]]

## Facts & Assumptions

**Given:** The parameters, real charge conditions, sphere convention and incoming-amplitude-one radial primary family in the Statement. The symbols $C$ and $C_{\mathrm{KRV}}$ in the proof denote twice $C^{\mathrm{sph}}$, while $\bar C=\mu^s C/\Gamma(s)$ removes its zero-mode Gamma factor. Local phase boundary notes describe the output of that component; subsequent phases supply the listed later obligations.

[F1] [[def-cft-r5-liouville-probabilistic-sphere-model]] fixes the covariance, Wick normalization, constant mode, Seiberg domain and zero-mode integral used below.

[F2] [[lem-cft-r5-circle-gmc-positive-and-inverse-moments]] supplies the actual circle Fourier chaos, a positive moment and all inverse moments on the original bootstrap interval.

[F3] [[lem-cft-r5-local-disk-gmc-uniform-inverse-moments]] supplies actual local two-dimensional GMC, fractional local scaling, mollifier convergence and uniform anchored inverse moments. Higher positive moments and the precise singular extensions are constructed below.

[F4] [[lem-cft-r5-liouville-charged-ward-and-radial-overlaps]] supplies the actual charged Ward identities, their finite-hole boundary bounds, Möbius covariance, corrected disk/FK factorization, Hilbert-valued charge continuation and the normalized Poisson/semigroup interfaces used in the last phase. No numerical primary value or DOZZ identity is assumed from it.

[F5] [[def-cft-r5-liouville-dozz-constant]] specifies the candidate special function by its displayed Upsilon integral. Its shifts, entire product, zero divisor and the two candidate ratios are reconstructed below; the definition alone is not a probabilistic identity.

## Proof

1.1 **First DOZZ supplier: exact GMC three-point normalization.** Research theorem with a complete reduction, not an assumed DOZZ identity. Use the actual spherical covariance $K(z,w)=\operatorname{log}(1/|z−w|)+\operatorname{log}|z|_++\operatorname{log}|w|_+$, background $dA0=|z|_+^{(−4)}d²z$, variance-normalized GMC Mγ, $Vα=e^{(αφ)}$, and zero-mode measure dc. Here $0<γ<\operatorname{sqrt}(2)$, $μ>0$, $Q=2/γ+γ/2$. This is the full γ interval of the current bootstrap target. The same argument applies at any $0<γ<2$ once the stated local GMC moment interface is supplied there; it does not assert the missing construction outside its currently proved range. [F1, F3, algebra]

2.1 The actual local GMC input is the coordinate owner's completed disk-gmc-local-moments-and-uniform-inverse-moments.md in ../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-liouville-spectral/: for $0<q<1$ and small disks, $E[Mγ(B_r)^q]≤C_q r^ξ(q)$, $ξ(q)=(2+γ²/2)q−γ²q²/2$, uniformly for centers in a fixed chart; every fixed positive-area anchor disk has all inverse moments. These two properties, together with the admitted mollifier-independent measure convergence, are the ONLY GMC estimates used below. They have an explicit local covariance/comparison proof in that supplier, not a DOZZ input. [F1, F3, step 1.1, algebra]

3.1 **Statement.** For real $α1,α2,α3<Q$ and $A=α1+α2+α3>2Q$, set $s=(A−2Q)/γ$ and [F1, F3, step 2.1, algebra]

4.1 $$\begin{gathered}\text{}\rho\text{(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3)=}\int\text{\_C |x|\_+\textasciicircum{}(}\gamma\text{A)}\\\text{|x|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{1)|x}-\text{1|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{2) M}\gamma\text{(d}{}^{2}\text{x).}\end{gathered}$$ [F1, F3, step 3.1, algebra]

5.1 Then $0<ρ<∞$ almost surely, $E[ρ^{(−s)}]<∞$, and the three-point coefficient of the sphere model with zero-mode measure dc is [F1, F3, step 4.1, algebra]

6.1 $$\begin{gathered}\text{C\_sph(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3)=(1/}\gamma\text{) }\mu\text{\textasciicircum{}(}-\text{s) }\Gamma\text{(s) E[}\rho\text{\textasciicircum{}(}-\text{s)].       (1)}\end{gathered}$$ [F1, F3, step 5.1, algebra]

7.1 Here $C_{sph}$ is the limit $|z3|^{(4Δα3)}\langle Vα1(0)Vα2(1)Vα3(z3)\rangle $ as $z3→∞$, with $Δα=α(Q−α/2)/2$. The same correlation definition with 2dc instead has $C_{KRV}=2C_{sph}$. This factor is mathematical normalization, not a change of μ or a renormalization of individual vertex operators. [F1, F3, step 6.1, algebra]

8.1 **1. Singular integrability and uniform insertion cutoff.** Near an insertion zi with positive charge αi, divide a fixed small disk into annuli $r/2<|x−zi|≤r$. Its singular integral has qth moment bounded by C $r^{[ξ(q)−γαi q]}$, since (sum $a_j)^q≤\sum a_j^q$ for $q≤1$. Choose [F1, F3, step 7.1, algebra]

9.1 $$\begin{gathered}\text{0<q<min(1,2(Q}-\text{}\alpha\text{i)/}\gamma\text{).}\end{gathered}$$ [F1, F3, step 8.1, algebra]

10.1 Then ξ(q)−γαi $q=q[γ(Q−αi)−γ²q/2]>0$, so the dyadic sum converges. The integral is finite almost surely and its mass in radius r tends to zero in probability with a strictly positive power of r. Negative charges only improve the local singularity and can be replaced by zero for this upper bound. The same bound holds for weights truncated at ε: the innermost disk gives $ε^{(−γαi q)}E[Mγ(B_ε)^q]$, with the identical exponent. All other smooth weight factors are bounded above and below on the chosen disk. [F1, F3, step 9.1, algebra]

11.1 At infinity use $w=1/x$. The covariance and dA0 are invariant under this inversion, so the transformed GMC has the same law. The integrand in ρ behaves as $|x|^{(γα3)}$; thus in w it is a bounded positive factor times $|w|^{(−γα3)}$. The preceding proof with $α3<Q$ handles infinity. Away from the three singularities the weight is bounded and Mγ is finite. Therefore $ρ<∞$ almost surely. [F1, F3, step 10.1, algebra]

12.1 Choose an anchor disk avoiding $0,1,∞$. Its weight has a positive lower bound c, so $ρ≥cMγ(anchor)>0$ and every inverse moment of ρ is finite. In particular $E[ρ^{(−s)}]<∞$. These estimates also give uniform inverse-moment bounds when the three weights are replaced by their covariance-smoothed versions, because they remain uniformly bounded below on the same anchor disk. [F1, F3, step 11.1, algebra]

13.1 **2. Finite-cutoff Cameron–Martin identity, including every background factor.** First take n distinct finite insertion points zi, real $αi<Q$, and $A=\sum αi>2Q$. At a fixed insertion smoothing ε, the zero-mode lemma applies pathwise. It gives [F1, F3, step 12.1, algebra]

14.1 $$\begin{gathered}\text{(1/}\gamma\text{)}\mu\text{\textasciicircum{}(}-\text{s)}\Gamma\text{(s) }\prod\text{|zi|\_+\textasciicircum{}(}-\text{4}\Delta\text{i)}\\\text{E[}\prod\text{exp(}\alpha\text{iX}\varepsilon\text{(zi)}-\text{}\alpha\text{i}{}^{2}\text{Var(X}\varepsilon\text{(zi))/2) M}\gamma\text{(S)\textasciicircum{}(}-\text{s)].}\end{gathered}$$ [F1, F3, step 13.1, algebra]

15.1 For clarity, the Gaussian tilt used here needs no imported infinite-dimensional formula. For a finite Gaussian vector its identity follows by completing the square in its density. Apply it to finitely many Gaussian coordinates and the finite insertion vector, approximate bounded measurable functionals by cylinder functions in L1, and truncate the nonnegative functional before monotone convergence. This proves the same identity for a measurable functional of the Gaussian field. [F1, F3, step 14.1, algebra]

16.1 Let $hε(x)=\sum_i$ αi Cov(Xε(zi),X(x)). This is a deterministic continuous bounded function for fixed ε (the $\operatorname{log}|x|_+$ gauge term need not be smooth across the unit circle). The GMC shift law is exactly $Mγ(X+hε)=e^{(γhε)}Mγ(X)$: it holds first for the normalized exponential regularizations, and then follows from their measure convergence and uniform convergence of the regularized continuous deterministic shifts. Completing the square therefore gives the preceding expression as [F1, F3, step 15.1, algebra]

17.1 $$\begin{gathered}\text{(1/}\gamma\text{)}\mu\text{\textasciicircum{}(}-\text{s)}\Gamma\text{(s)}\\\text{exp(sum\_(i<j) }\alpha\text{i}\alpha\text{j K}\varepsilon\text{}\varepsilon\text{(zi,zj))}\\\text{}\prod\text{|zi|\_+\textasciicircum{}(}-\text{4}\Delta\text{i)}\\\text{E[(}\int\text{exp(}\gamma\text{h}\varepsilon\text{(x))M}\gamma\text{(dx))\textasciicircum{}(}-\text{s)].                   (2)}\end{gathered}$$ [F1, F3, step 16.1, algebra]

18.1 As $ε→0$, exp(γhε(x)) converges uniformly away from the insertion disks to [F1, F3, step 17.1, algebra]

19.1 $$\begin{gathered}\text{}\prod\text{|zi|\_+\textasciicircum{}(}\gamma\text{}\alpha\text{i) }\cdot\text{ |x|\_+\textasciicircum{}(}\gamma\text{A) }\prod\text{|x}-\text{zi|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{i).}\end{gathered}$$ [F1, F3, step 18.1, algebra]

20.1 The uniform cutoff/annular estimate in step 1 makes the omitted disks uniformly negligible in probability. Thus the integrals in (2) converge in probability. Their negative powers are dominated by a constant times $Mγ(anchor)^{(−s)}$, which is integrable. Every subsequence has an almost-surely convergent further subsequence, so dominated convergence on those subsequences proves convergence of the full expectations. [F1, F3, step 19.1, algebra]

21.1 Now compute the deterministic factors, rather than suppressing them. The off-diagonal Gaussian prefactor is [F1, F3, step 20.1, algebra]

22.1 $$\begin{gathered}\text{}\prod\text{\_(i<j)|zi}-\text{zj|\textasciicircum{}(}-\text{}\alpha\text{i}\alpha\text{j)}\\\text{}\prod\text{\_i |zi|\_+\textasciicircum{}[}\alpha\text{i(A}-\text{}\alpha\text{i)].}\end{gathered}$$ [F1, F3, step 21.1, algebra]

23.1 Multiplying by the vertex backgrounds gives $\prod |zi|_+^{[αi(A−2Q)]}$, because $−4Δi=−2Qαi+αi²$. The constant $\prod |zi|_+^{(γαi)}$ in the interaction integral, raised to −s, gives $\prod |zi|_+^{(−γsαi)}$. These cancel exactly since $γs=A−2Q$. Hence the actual sphere-model n-point function is [F1, F3, step 22.1, algebra]

24.1 $$\begin{gathered}\text{}\langle\text{}\prod\text{V}\alpha\text{i(zi)}\rangle\text{=(1/}\gamma\text{)}\mu\text{\textasciicircum{}(}-\text{s)}\Gamma\text{(s)}\\\text{}\prod\text{\_(i<j)|zi}-\text{zj|\textasciicircum{}(}-\text{}\alpha\text{i}\alpha\text{j)}\\\text{E[(}\int\text{ |x|\_+\textasciicircum{}(}\gamma\text{A)}\prod\text{|x}-\text{zi|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{i) M}\gamma\text{(dx))\textasciicircum{}(}-\text{s)].  (3)}\end{gathered}$$ [F1, F3, step 23.1, algebra]

25.1 It is finite and strictly positive under the displayed strict Seiberg conditions. Necessity at the boundary is not claimed by this lemma; only the domain needed here has been proved. [F1, F3, step 24.1, algebra]

26.1 **3. The insertion at infinity.** Put $z1=0,z2=1$ and let $z3→∞$. Multiply the interaction integral in (3) by $|z3|^{(γα3)}$. On compact sets away from 0,1 its weight converges to the weight in ρ. The same annular estimate proves uniform negligibility at 0 and 1. For the infinity chart the exact transformed scaled weight is $|w|_+^{(γA)}|1−w|^{(−γα2)}|w−w3|^{(−γα3)}$, where $w3=1/z3→0$. Thus it has one singularity of charge α3 at w3 times uniformly bounded factors near $w=0$, while the limiting singularity is at 0. Annuli centered at w3 and the uniform local mass estimate give a bound C $r^{[ξ(q)−γα3 q]}$ on the integral near $w=0$, uniformly for $|w3|≤r/4$, after increasing the radius by a fixed factor. Thus those tails also tend to zero uniformly in probability. An anchor disk again dominates negative powers. This proves convergence of the scaled negative moments to $E[ρ^{(−s)}]$. [F1, F3, step 25.1, algebra]

27.1 The remaining deterministic power of |z3| is [F1, F3, step 26.1, algebra]

28.1 $$\begin{gathered}\text{4}\Delta\text{}\alpha\text{3}-\text{}\alpha\text{3(}\alpha\text{1+}\alpha\text{2)+}\gamma\text{}\alpha\text{3s}\\\text{=2Q}\alpha\text{3}-\text{}\alpha\text{3}{}^{2}\text{}-\text{}\alpha\text{3(A}-\text{}\alpha\text{3)+}\alpha\text{3(A}-\text{2Q)=0.}\end{gathered}$$ [F1, F3, step 27.1, algebra]

29.1 Therefore the limit is exactly (1), with no additional constant. [F1, F3, step 28.1, algebra]

30.1 **4. Normalization crosswalk and actual source limit.** Kupiainen–Rhodes–Vargas, arXiv:1707.08785, saved krv-dozz.tex, label liouvlaw1 and its footnote, defines the correlation functional with an explicit overall factor 2, “included to match with the physics literature normalization which is based on the DOZZ formula.” Its labels Z00, Z1 and expression3pointstruct consequently have 2/γ. Guillarmou–Kupiainen–Rhodes–Vargas, arXiv:2005.11530v1, (1.3)–(1.4), uses dc without this factor; footnote 5 explicitly records KRV's factor 2. The current production sphere definition uses the latter normalization. Hence once the independent DOZZ proof establishes $C_{KRV}=C_{DOZZ}$, our coefficient will be $C_{sph}=(1/2)C_{DOZZ}$. That equality has NOT been assumed to prove (1). [F1, F3, step 29.1, algebra]

31.1 This supplier establishes the exact probabilistic quantity that the next reflection/tail and BPZ/shift suppliers must evaluate. It does not evaluate its fractional GMC moment, assume a reflection amplitude, assume self-duality, or claim analytic continuation to complex charges. [F1, F3, step 30.1, algebra]

32.1 **Second DOZZ supplier: radial reflection tail and its Mellin normalization.** Research theorem. No DOZZ formula, reflection relation, duality, or BPZ equation is assumed. Use the same actual spherical covariance and variance-normalized GMC as in three-point-gmc-normalization.md, with $0<γ<\operatorname{sqrt}(2)$. The argument is on the full bootstrap interval. Put $α∈(γ/2,Q)$, $ν=Q−α>0$ and $p=2ν/γ<4/γ²$. [F1, F3, F2, step 31.1, algebra]

33.1 **Statement.** Let $Iα=\int _{(|z|<1)}|z|^{(−γα)}Mγ(d²z)$. There is a specifically constructed positive random variable Sν below, independent of an exponential random variable M of rate 2ν, such that [F1, F3, F2, step 32.1, algebra]

34.1 $$\begin{gathered}\text{P(I}\alpha\text{>t)=Rbar}\gamma\text{(}\alpha\text{)t\textasciicircum{}(}-\text{p)+O(t\textasciicircum{}(}-\text{p}-\text{}\delta\text{)),}\\\text{Rbar}\gamma\text{(}\alpha\text{)=E[S}\nu\text{\textasciicircum{}p]}\in\text{(0,}\infty\text{),                           (1)}\end{gathered}$$ [F1, F3, F2, step 33.1, algebra]

35.1 for some $δ>0$ depending on the strict parameters. Every positive moment of Sν below 4/γ² is finite. The Mellin transform $E[Iα^z]$ is holomorphic for Re $z<p$ and extends meromorphically to Re $z<p+δ$, with its only pole in that added strip at $z=p$ and [F1, F3, F2, step 34.1, algebra]

36.1 $$\begin{gathered}\text{lim\_(z}\to\text{p)(p}-\text{z)E[I}\alpha\text{\textasciicircum{}z]=p Rbar}\gamma\text{(}\alpha\text{).                  (2)}\end{gathered}$$ [F1, F3, F2, step 35.1, algebra]

37.1 Define the full reflection normalization, away from $p∈N$, by [F1, F3, F2, step 36.1, algebra]

38.1 $$\begin{gathered}\text{R}\gamma\text{,}\mu\text{(}\alpha\text{)=}\mu\text{\textasciicircum{}p }\Gamma\text{(}-\text{p) p Rbar}\gamma\text{(}\alpha\text{).                     (3)}\end{gathered}$$ [F1, F3, F2, step 37.1, algebra]

39.1 Then $\operatorname{lim}_{(α↑Q)} Rγ,μ(α)=−1$. This fixes a probabilistic normalization at Q; it does not identify (3) with the explicit DOZZ reflection function or prove the reflection relation for vertex operators. [F1, F3, F2, step 38.1, algebra]

40.1 **1. Positive local GMC moments beyond L².** The existing local GMC supplier proves construction, fractional scaling and all anchored inverse moments for $γ²<2$. Its positive moments can be upgraded to every $r<4/γ²$ without assuming an integrable formula. Here are the steps used later. [F1, F3, F2, step 39.1, algebra]

41.1 For a bounded planar chart and its regularized mass Tε, Gaussian square completion gives [F1, F3, F2, step 40.1, algebra]

42.1 $$\begin{gathered}\text{E[T}\varepsilon\text{\textasciicircum{}r]=}\int\text{ E[(}\int\text{exp(}\gamma\text{}{}^{2}\text{K}\varepsilon\text{(x,y))M}\varepsilon\text{(dy))\textasciicircum{}(r}-\text{1)]dx.}\end{gathered}$$ [F1, F3, F2, step 41.1, algebra]

43.1 All harmless bounded area densities are inserted in the integrals. Set $q=r−1$. Induct on successive intervals $r∈(k,k+1]$, starting with $q∈(0,1]$. The covariance comparison under rescaling gives [F1, F3, F2, step 42.1, algebra]

44.1 $$\begin{gathered}\text{E[M}\varepsilon\text{(B\_a)\textasciicircum{}q]}\le\text{C a\textasciicircum{}}\xi\text{(q),}\\\text{}\xi\text{(q)=(2+}\gamma\text{}{}^{2}\text{/2)q}-\text{}\gamma\text{}{}^{2}\text{q}{}^{2}\text{/2,  }\varepsilon\text{}\le\text{a,}\end{gathered}$$ [F1, F3, F2, step 43.1, algebra]

45.1 once the qth moment on the unit chart is uniformly bounded. For $q≤1$ the bound follows from concave comparison and Jensen, as in the actual local supplier. For $q>1$, convex comparison with an independent common Gaussian of variance log(1/a)+C and a fresh unit-chart field gives the same scaling bound, now using the previously proved uniform qth moment. Thus this inductive step does not invoke an unproved higher moment. [F1, F3, F2, step 44.1, algebra]

46.1 Decompose the inner tilted mass into dyadic shells about x, down to the ε ball. Its tilt is bounded by C $a^{(−γ²)}$. If $q≤1$, use (sum $b_j)^q≤\sum b_j^q$. The shell sum converges because [F1, F3, F2, step 45.1, algebra]

47.1 $$\begin{gathered}\text{}\xi\text{(q)}-\text{}\gamma\text{}{}^{2}\text{q=q(2}-\text{}\gamma\text{}{}^{2}\text{r/2)>0.}\end{gathered}$$ [F1, F3, F2, step 46.1, algebra]

48.1 If $q>1$, use the Lq triangle inequality; the shell norms sum because $ξ(q)/q−γ²=2−γ²r/2>0$. The innermost ε ball has the same bound. This gives supε $E[Tε^r]<∞$ whenever $r<4/γ²$. Fatou gives the limit moment. The same comparison proves local scaling at every such r. A finite chart cover handles compact cylinders and seams. This proof uses only Gaussian square completion, the covariance bound, and lower moments. [F1, F3, F2, step 47.1, algebra]

49.1 **2. Exact radial decomposition and stationary cylinder chaos.** For $z=e^{(−s+iθ)}$, $s≥0$, the spherical covariance inside the unit disk decomposes as [F1, F3, F2, step 48.1, algebra]

50.1 $$\begin{gathered}\text{K(z,w)=min(s,t)+C\_Y(s}-\text{t,}\theta\text{}-\text{}\theta\text{}{}^{\prime}\text{),}\\\text{C\_Y(u,v)=}-\text{log|1}-\text{e\textasciicircum{}(}-\text{|u|+iv)|.}\end{gathered}$$ [F1, F3, F2, step 49.1, algebra]

51.1 The circular average is therefore a standard Brownian motion $B_s$ starting at zero. Its Gaussian orthogonal complement Y is independent. A concrete stationary extension of Y to all $s∈R$ is obtained from independent stationary Ornstein–Uhlenbeck modes with covariance $e^{(−n|s−t|)}$, multiplied by cos(nθ)/sqrt(n), sin(nθ)/sqrt(n), and summed over $n≥1$. The resulting covariance is the displayed $C_Y$. Finite spectral cutoffs followed by the local GMC limit construct its cylinder chaos Nγ(ds dθ). It is stationary in s and independent of B. Write $Z_s ds=\int Nγ(ds dθ)$; this notation denotes the integrated chaos, not a new independence assertion between different s. [F1, F3, F2, step 50.1, algebra]

52.1 Its mass on a unit strip has all positive moments below 4/γ² by step 1, uniformly in the strip location, and all anchored inverse moments by the same cone comparison in the local GMC supplier: $C_Y$ is log(1/distance)+a bounded remainder in every fixed cylinder chart. That proof depends only on these covariance bounds and hence applies to Y as well. [F1, F3, F2, step 51.1, algebra]

53.1 The polar area Jacobian is $e^{(−2s)}$, and Brownian variance normalization contributes $e^{(−γ²s/2)}$. Consequently the radial formula is EXACTLY [F1, F3, F2, step 52.1, algebra]

54.1 $$\begin{gathered}\text{I}\alpha\text{ law=}\int\text{\_0\textasciicircum{}}\infty\text{ e\textasciicircum{}[}\gamma\text{(B\_s}-\text{}\nu\text{s)] Z\_s ds,                (4)}\end{gathered}$$ [F1, F3, F2, step 53.1, algebra]

55.1 since $γα−2−γ²/2=−γ(Q−α)$. There is no extra radial constant or cosmological factor in (4). [F1, F3, F2, step 54.1, algebra]

56.1 **3. Conditioned Brownian motion, constructed from its kernel.** Let $hν(x)=1−e^{(2νx)}$, $x<0$. A Brownian motion of drift −ν killed at zero has transition kernel [F1, F3, F2, step 55.1, algebra]

57.1 $$\begin{gathered}\text{k\_t(x,y)=e\textasciicircum{}[}-\text{}\nu\text{(y}-\text{x)}-\text{}\nu\text{}{}^{2}\text{t/2]}\\\text{[g\_t(y}-\text{x)}-\text{g\_t(y+x)],}\\\text{g\_t(u)=(2}\pi\text{t)\textasciicircum{}(}-\text{1/2)e\textasciicircum{}(}-\text{u}{}^{2}\text{/(2t)).}\end{gathered}$$ [F1, F3, F2, step 56.1, algebra]

58.1 Reflection at zero proves this formula. The positive harmonic function hν is precisely the probability of never hitting zero, from the elementary exponential martingale. Conditioning on that event gives kernel $k_t(x,y)hν(y)/hν(x)$. Taking x↑0 gives the entrance density, in $r=−y>0$, [F1, F3, F2, step 57.1, algebra]

59.1 $$\begin{gathered}\text{q\_t}\nu\text{(r)=[2r sinh(}\nu\text{r)/(}\nu\text{t)]e\textasciicircum{}(}-\text{}\nu\text{}{}^{2}\text{t/2)g\_t(r).       (5)}\end{gathered}$$ [F1, F3, F2, step 58.1, algebra]

60.1 This defines the negative conditioned path Yν starting at zero. Existence and continuity at that entrance can be constructed without a conditioning-on-probability-zero assertion: start with the norm $R_t$ of three independent standard Brownian motions and tilt its law up to time t by [F1, F3, F2, step 59.1, algebra]

61.1 $$\begin{gathered}\text{e\textasciicircum{}(}-\text{}\nu\text{}{}^{2}\text{t/2) sinh(}\nu\text{R\_t)/(}\nu\text{R\_t).}\end{gathered}$$ [F1, F3, F2, step 60.1, algebra]

62.1 The numerator divided by νR is the spherical average of $e^{(νu·B_t)}$, so this is a positive mean-one martingale. Its consistent path laws have density (5), continuous paths, and generator for $Rν=−Yν$ equal to (1/2)∂rr+νcoth(νr)∂r. Thus Yν has generator (1/2)∂xx−ν∂x+(hν′/hν)∂x and stays negative after time zero. [F1, F3, F2, step 61.1, algebra]

63.1 For every $a>0$, (5), by completing the square in r, implies [F1, F3, F2, step 62.1, algebra]

64.1 $$\begin{gathered}\text{E[e\textasciicircum{}(aY}\nu\text{\_t)]}\le\text{C\_a e\textasciicircum{}(}-\text{c\_a t),  t}\ge\text{1, c\_a>0.         (6)}\end{gathered}$$ [F1, F3, F2, step 63.1, algebra]

65.1 Indeed its integral is bounded by $t^{(−3/2)}e^{(−ν²t/2)}$ times a polynomially weighted integral of exp[(ν−a)r−r²/(2t)]. If $a<ν$ the exponent gains (ν−a)²t/2, leaving decay $νa−a²/2>0$; if $a≥ν$ the remaining integral grows at most polynomially. Absorb that polynomial into a smaller positive exponential rate. On a unit future interval the drift of Yν is at most −ν. Coupling its SDE to a Brownian motion of drift −ν and localizing away from zero gives [F1, F3, F2, step 64.1, algebra]

66.1 $$\begin{gathered}\text{E[e\textasciicircum{}(a sup\_(n}\le\text{t}\le\text{n+1)Y}\nu\text{\_t)]}\le\text{C\_a e\textasciicircum{}(}-\text{c\_a n).        (7)}\end{gathered}$$ [F1, F3, F2, step 65.1, algebra]

67.1 The independent Brownian increment supremum has all exponential moments; this proves (7) from (6). The localization limit is allowed because the conditioned process never returns to zero. [F1, F3, F2, step 66.1, algebra]

68.1 Take two independent copies of Yν, one for each half of R, forming a continuous two-sided path $Bν_s$ with maximum zero. Independently take the stationary cylinder chaos above, and define [F1, F3, F2, step 67.1, algebra]

69.1 $$\begin{gathered}\text{S}\nu\text{=}\int\text{\_R e\textasciicircum{}(}\gamma\text{B}\nu\text{\_s) Z\_s ds.                          (8)}\end{gathered}$$ [F1, F3, F2, step 68.1, algebra]

70.1 On each unit strip the integrand mass is bounded by exp(γ sup Bν) times the chaos mass. Their factors are independent. Equations (7) and step 1 give summable exponentially decaying rth moments for every $r<4/γ²$. For $r≤1$ sum those moments; for $r>1$ sum Lr norms. Therefore Sν has every positive moment claimed and is finite. It is strictly positive because a fixed strip has positive chaos mass and the Brownian weight there has a positive minimum. [F1, F3, F2, step 69.1, algebra]

71.1 **4. Maximum decomposition and its time reversal, with the kernel calculation.** For $X_t=B_t−νt$, the exponential martingale stopped between −a and m, followed by $a→∞$, gives [F1, F3, F2, step 70.1, algebra]

72.1 $$\begin{gathered}\text{P(sup X}\ge\text{m)=e\textasciicircum{}(}-\text{2}\nu\text{m), m}\ge\text{0.}\end{gathered}$$ [F1, F3, F2, step 71.1, algebra]

73.1 Conditional on hitting m, the pre-hit process is Brownian motion of drift +ν stopped at its hit of m: the Doob factor $e^{(2νx)}$ changes drift −ν to +ν. Condition the maximum to lie in [m,m+ε]. By the strong Markov property at the hit of m, the post-hit process is an independent drift −ν process conditioned not to hit ε. Its transition kernels converge, as ε↓0, to m+Yν. The band probability is $e^{(−2νm)}(1−e^{(−2νε)})$; dividing by ε gives the exponential density. These kernel limits determine bounded cylinder functionals and then path laws by continuity. This proves the pre/post maximum decomposition with a maximum M of rate 2ν. [F1, F3, F2, step 72.1, algebra]

74.1 The needed reverse pre-hit law also has a direct density proof. Translate the drift +ν process to start at −m and stop at zero. Its killed Green kernel from −m is [F1, F3, F2, step 73.1, algebra]

75.1 $$\begin{gathered}\text{u\_m(x)=h}\nu\text{(x)/}\nu\text{                         for }-\text{m}\le\text{x<0,}\\\text{u\_m(x)=e\textasciicircum{}(2}\nu\text{x)(e\textasciicircum{}(2}\nu\text{m)}-\text{1)/}\nu\text{            for x<}-\text{m.}\end{gathered}$$ [F1, F3, F2, step 74.1, algebra]

76.1 This follows by integrating the reflected Gaussian kernel; use $\int _0^∞e^{(−ν²t/2)}g_t(a)dt=e^{(−ν|a|)}/ν$. The factor [F1, F3, F2, step 75.1, algebra]

77.1 $$\begin{gathered}\text{}\pi\text{\_m(x)=}\nu\text{u\_m(x)/h}\nu\text{(x)}\end{gathered}$$ [F1, F3, F2, step 76.1, algebra]

78.1 is exactly the probability that Yν started at x will visit −m in the future: it is one above −m, and below −m it follows from the exponential hit probability and the h transform. Let $L_−m$ be Yν's last visit to −m. [F1, F3, F2, step 77.1, algebra]

79.1 For reverse observation times $0<t1<...<tk$, integrate the original pre-hit segment length beyond tk. Its density is $u_m(xk)$ times the reversed killed transition kernels and the final first-hit-zero density. Lebesgue duality changes the reversed +ν kernels to −ν kernels. The first-hit density at time t1 equals ν/hν(x1) times the entrance density of Yν. Telescoping the h factors therefore gives exactly [F1, F3, F2, step 78.1, algebra]

80.1 $$\begin{gathered}\text{entrance\_(t1)(x1) }\cdot\text{ product\_j k\textasciicircum{}h\_(t[j+1]}-\text{t[j])(xj,x[j+1]) }\cdot\text{}\pi\text{\_m(xk).}\end{gathered}$$ [F1, F3, F2, step 79.1, algebra]

81.1 This is the density of Yν observed before its last visit to −m: $π_m$ is the probability of a later visit. Hence the time-reversed pre-maximum segment is Yν stopped at $L_−m$. This establishes the specific reversal used here rather than citing a decomposition as an unproved input. [F1, F3, F2, step 80.1, algebra]

82.1 We may therefore construct independent M, two-sided Bν, and cylinder noise so that (4) has the law [F1, F3, F2, step 81.1, algebra]

83.1 $$\begin{gathered}\text{I}\alpha\text{=e\textasciicircum{}(}\gamma\text{M)}\int\text{\_(-L\_}-\text{M)\textasciicircum{}}\infty\text{ e\textasciicircum{}(}\gamma\text{B}\nu\text{\_s)Z\_s ds.             (9)}\end{gathered}$$ [F1, F3, F2, step 82.1, algebra]

84.1 The random time translation of Z used to center the maximum changes no law: Z is stationary and independent of the whole Brownian path, so even a Brownian-measurable random translation has the same conditional law. This is not independence of disjoint cylinder strips. [F1, F3, F2, step 83.1, algebra]

85.1 **5. The omitted past has a higher moment.** Define $J=e^{(γM)}Sν$ and $D=J−Iα$ in the coupling (9). Conditional on $M=m$, D is the weighted chaos AFTER the last passage of −m on the negative branch, shifted upward by m. This shifted path has the same law as Yν. [F1, F3, F2, step 84.1, algebra]

86.1 Here is the last-passage conditioning that justifies that assertion. For $x<−m$, the probability under the original hν-process of never returning to −m is [F1, F3, F2, step 85.1, algebra]

87.1 $$\begin{gathered}\text{1}-\text{h}\nu\text{(}-\text{m)e\textasciicircum{}[2}\nu\text{(x+m)]/h}\nu\text{(x)=h}\nu\text{(x+m)/h}\nu\text{(x).}\end{gathered}$$ [F1, F3, F2, step 86.1, algebra]

88.1 Applying this further Doob transform makes the combined harmonic factor hν(x+m); its generator after translating x by m is precisely the original Yν generator. To obtain the post-last-visit entrance, approximate the successful final departure by a downcrossing from −m to −m−ε followed by no return. Strong Markov at successive such downcrossings gives this same conditional future kernel, independently of the earlier failed excursions. Let ε↓0. Continuity and transience of Yν make the final departure times tend to $L_−m$, and the kernels tend to the same zero entrance constructed in step 3. This proves the asserted post-last-passage law. Stationarity of the independent cylinder field handles its random translation as above. [F1, F3, F2, step 87.1, algebra]

89.1 Consequently, for every $r<4/γ²$, [F1, F3, F2, step 88.1, algebra]

90.1 $$\begin{gathered}\text{sup\_(m}\ge\text{0) E[D\textasciicircum{}r | M=m] <}\infty\text{.                        (10)}\end{gathered}$$ [F1, F3, F2, step 89.1, algebra]

91.1 The bound is the one-sided version of (8). In particular choose $p<r<4/γ²$; this is possible exactly because $α>γ/2$. Thus $ED^r<∞$. No moment of the heavy Pareto factor $e^{(γM)}$ has been incorrectly assumed here: it is cancelled by translating the path after its last visit to −M. [F1, F3, F2, step 90.1, algebra]

92.1 **6. Tail comparison, coefficient, and Mellin pole.** Since M is independent of Sν and $P(e^{(γM)}>u)=u^{(−p)}$ for $u≥1$, [F1, F3, F2, step 91.1, algebra]

93.1 $$\begin{gathered}\text{P(J>t)=t\textasciicircum{}(}-\text{p)E[S}\nu\text{\textasciicircum{}p;S}\nu\text{}\le\text{t]+P(S}\nu\text{>t).}\end{gathered}$$ [F1, F3, F2, step 92.1, algebra]

94.1 Using $E[Sν^r]<∞$ for $r>p$ shows [F1, F3, F2, step 93.1, algebra]

95.1 $$\begin{gathered}\text{P(J>t)=E[S}\nu\text{\textasciicircum{}p]t\textasciicircum{}(}-\text{p)+O(t\textasciicircum{}(}-\text{r)).}\end{gathered}$$ [F1, F3, F2, step 94.1, algebra]

96.1 Its conditional density at $t>Sν$ is $pSν^p t^{(−p−1)}$, so for $0<a<1$, [F1, F3, F2, step 95.1, algebra]

97.1 $$\begin{gathered}\text{P(t<J}\le\text{t+t\textasciicircum{}a)}\le\text{pE[S}\nu\text{\textasciicircum{}p]t\textasciicircum{}(}-\text{p}-\text{1+a).}\end{gathered}$$ [F1, F3, F2, step 96.1, algebra]

98.1 Choose $p/r<a<1$. Since $Iα≤J$ and $J−Iα=D$, [F1, F3, F2, step 97.1, algebra]

99.1 $$\begin{gathered}\text{0}\le\text{P(J>t)}-\text{P(I}\alpha\text{>t)}\\\text{}\le\text{P(D>t\textasciicircum{}a)+P(t<J}\le\text{t+t\textasciicircum{}a)}\\\text{}\le\text{C t\textasciicircum{}(}-\text{ar)+C t\textasciicircum{}(}-\text{p}-\text{1+a).}\end{gathered}$$ [F1, F3, F2, step 98.1, algebra]

100.1 Together these prove (1), for any δ below min(r−p,ar−p,1−a). All quantities are strictly positive and finite by step 3. [F1, F3, F2, step 99.1, algebra]

101.1 Iα has all inverse moments: on a fixed annulus away from zero its weight is bounded below and the local anchored inverse GMC moments apply. Hence its Mellin transform is holomorphic for Re $z<p$, by dominated difference quotients using slightly larger positive/negative powers to control logarithms. Split at $Iα=1$ and integrate its upper tail: [F1, F3, F2, step 100.1, algebra]

102.1 $$\begin{gathered}\text{E[I}\alpha\text{\textasciicircum{}z]=E[I}\alpha\text{\textasciicircum{}z;I}\alpha\text{}\le\text{1]+P(I}\alpha\text{>1)}\\\text{+ z Rbar}\gamma\text{(}\alpha\text{)/(p}-\text{z)}\\\text{+ z}\int\text{\_1\textasciicircum{}}\infty\text{t\textasciicircum{}(z}-\text{1)[P(I}\alpha\text{>t)}-\text{Rbar}\gamma\text{(}\alpha\text{)t\textasciicircum{}(}-\text{p)]dt.}\end{gathered}$$ [F1, F3, F2, step 101.1, algebra]

103.1 The first term is entire because all negative moments exist. The last integral is holomorphic for Re $z<p+δ$, locally uniformly by the error in (1). This proves the meromorphic continuation and (2), with no DOZZ value supplied for Rbar. [F1, F3, F2, step 102.1, algebra]

104.1 **7. Normalization at $α=Q.**$ It remains to prove $Rbarγ(α)→1$ as ν↓0, rather than substitute an assumed reflection constant. At $ν=0$ the negative conditioned path is minus a three-dimensional Bessel process. Its entrance density is $2r²g_t(r)/t$, so $E[e^{(aY0_t)}]≤C_a(1+t)^{(−3/2)}$. The unit-strip supremum version follows by the same Brownian comparison. Since $νcoth(νr)≥1/r$, couple Rν and R0 so $Rν≥R0$. Thus these polynomial bounds dominate all $ν∈[0,ν0]$. Choosing any fixed $0<q<\operatorname{min}(1,4/γ²)$, summing strip qth moments gives $sup_{(0≤ν≤ν0)}E[Sν^q]<∞$. [F1, F3, F2, step 103.1, algebra]

105.1 There is also a uniform negative moment. On one fixed strip, $Sν≥e^{[−γ sup_{(0≤t≤1)}Rν_t]}$ Nγ(strip). The inequality $νcoth(νr)≤ν+1/r$ and one-dimensional comparison give $Rν_t≤R0_t+νt$ under a suitable common Brownian coupling: the latter has drift $ν+1/R0_t$, which is at least $ν+1/(R0_t+νt)$. The supremum of R0 over a unit interval has Gaussian tails, since it is the norm of three Brownian motions. All its exponential moments are finite. Independence of radial path and cylinder chaos, and the anchored inverse moments from step 2, therefore give $sup_{(0≤ν≤ν0)}E[Sν^{(−q)}]<∞$. [F1, F3, F2, step 104.1, algebra]

106.1 With $p=2ν/γ→0$, for $p≤q/2$ the elementary inequality $|x^p−1|≤C_q p(x^q+x^{(−q)})$ yields $E[Sν^p]→1$. Finally $μ^p→1$ and $pΓ(−p)→−1$ by the elementary Gamma pole at zero. Equation (3) therefore tends to −1. This is the actual probabilistic reflection normalization used by the later shift argument, not its closed-form evaluation. [F1, F3, F2, step 105.1, algebra]

107.1 **Remaining use boundary.** This supplier proves a one-singularity tail with a power error, its exact radial coefficient, the associated Mellin pole, and $R(Q)=−1$. It does not yet prove the multi-singularity $3→2$ residue bridge, analyticity in the charge parameters, degenerate fusion/BPZ shifts, inversion $R(α)R(2Q−α)=1$, the dual shift, or the DOZZ expression. Those are subsequent obligations; the present theorem does not assume any of them. The source KRV paper motivates the decomposition, but its tail/reflection theorems are not used as black-box premises in the proof above. [F1, F3, F2, step 106.1, algebra]

108.1 **Ninth DOZZ supplier: a smooth weighted local tail with uniform power error.** Research lemma needed for the two-pole reflection continuation. Fix $0<γ<\operatorname{sqrt}(2)$. Let $|z0|>2$ and let F be strictly positive C1 on the closed disk B(z0,1). Define, with the ACTUAL sphere-normalized chaos including dA0, [F1, F3, F2, step 107.1, algebra]

109.1 $$\begin{gathered}\text{X\_F,}\alpha\text{=}\int\text{\_(B(z0,1)) |x}-\text{z0|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{)F(x)M}\gamma\text{(dx),}\\\text{}\gamma\text{/2<}\alpha\text{<Q, }\nu\text{=Q}-\text{}\alpha\text{, p=2}\nu\text{/}\gamma\text{.}\end{gathered}$$ [F1, F3, F2, step 108.1, algebra]

110.1 Then [F1, F3, F2, step 109.1, algebra]

111.1 $$\begin{gathered}\text{P(X\_F,}\alpha\text{>t)=c\_F,}\alpha\text{ t\textasciicircum{}(}-\text{p)+O(t\textasciicircum{}(}-\text{p}-\text{}\delta\text{)),}\\\text{c\_F,}\alpha\text{=F(z0)\textasciicircum{}p |z0|\textasciicircum{}[4}\alpha\text{(}\alpha\text{}-\text{Q)]Rbar}\gamma\text{(}\alpha\text{),           (1)}\end{gathered}$$ [F1, F3, F2, step 110.1, algebra]

112.1 for some $δ>0$. If α varies in a compact subinterval of (γ/2,Q), and F and its inverse and C1 norm vary in fixed compact bounds, there is a uniform positive δ and uniform error constant. In particular there is a $δ*>0$ valid for α near 2/γ BEFORE choosing the small two-pole parameter η. This lemma is derived from the centered tail supplier and an explicit Gaussian/OU coupling; it is not an assumed general GMC tail theorem. [F1, F3, F2, step 111.1, algebra]

113.1 **1. The constant circle average and its exact correlations.** Write $u=x−z0$ and $g(x)=\operatorname{log}|x|$, harmonic on B(z0,1). The covariance of X(z0+u) is log(1/|u−v|)+g(z0+u)+g(z0+v). Let S be its average over $|u|=1$ and subtract S. The remaining field has the PURE-LOG covariance log(1/|u−v|) inside the unit disk. Thus it is $B_s+Y(s,θ)$, with $s=\operatorname{log}(1/|u|)$, B standard Brownian, and the same stationary lateral OU field as in the centered tail supplier. Direct covariance averaging gives [F1, F3, F2, step 112.1, algebra]

114.1 $$\begin{gathered}\text{Var S=2g(z0),   Cov(B\_s,S)=0,}\\\text{Cov(Y(s,}\theta\text{),S)=g(z0+e\textasciicircum{}(}-\text{s+i}\theta\text{))}-\text{g(z0).             (2)}\end{gathered}$$ [F1, F3, F2, step 113.1, algebra]

115.1 The second equality uses harmonic mean value and implies independence of B from (S,Y). More explicitly, expand $\operatorname{log}(1+u/z0)=\sum _{(n≥1)}(−1)^{(n+1)}u^n/(n z0^n)$. The right side of (2) is its real part. In the OU mode representation of Y, S is therefore a linear combination of the modes at time zero plus an independent Gaussian. The variance of that projection is $\sum _{(n≥1)}|z0|^{(−2n)}/n=−\operatorname{log}(1−|z0|^{(−2)})$; the independent Gaussian has variance $\operatorname{log}(|z0|²−1)>0$. In particular S is independent of every OU innovation after time zero. [F1, F3, F2, step 114.1, algebra]

116.1 Wick normalization and the actual background area density must both be kept. In polar coordinates the exact local mass is [F1, F3, F2, step 115.1, algebra]

117.1 $$\begin{gathered}\text{X\_F,}\alpha\text{=e\textasciicircum{}(}\gamma\text{S)}\int\text{\_0\textasciicircum{}}\infty\text{ e\textasciicircum{}[}\gamma\text{(B\_s}-\text{}\nu\text{s)]a(s,}\theta\text{)N}\gamma\text{(ds d}\theta\text{),}\\\text{a(s,}\theta\text{)=F(z0+e\textasciicircum{}(}-\text{s+i}\theta\text{))}\\\text{}\cdot\text{exp[}-\text{(4+}\gamma\text{}{}^{2}\text{)g(z0+e\textasciicircum{}(}-\text{s+i}\theta\text{))].       (3)}\end{gathered}$$ [F1, F3, F2, step 116.1, algebra]

118.1 Here the factor −γ²g comes from the difference of Wick variances, and −4g is dA0. Thus $a(s,θ)=a0(1+O(e^{(−s)}))$ uniformly in θ, with $a0=F(z0)e^{[−(4+γ²)g(z0)]}$. These factors cannot be omitted when computing the tail constant. [F1, F3, F2, step 117.1, algebra]

119.1 **2. Early scales have a sufficiently high moment.** Fix a compact α range, hence p in [pmin,pmax] with $pmax<4/γ²$. Choose $R>\operatorname{max}(1,pmax)$ and $R<4/γ²$. The higher local chaos moments proved in the centered tail supplier allow a Hölder exponent $q>1$ with $Rq<4/γ²$. Gaussian exponential moments of S and Hölder give a uniform bound on $E[e^{(γRS)}Nγ([n,n+1]×T)^R]$, despite their correlation. Brownian motion is independent of those variables. [F1, F3, F2, step 118.1, algebra]

120.1 Let $E_L$ be the integral in (3) over $0≤s≤L$. Brownian supremum on the nth unit interval has exponential moment bounded by C $\operatorname{exp}[A_R n]$, where [F1, F3, F2, step 119.1, algebra]

121.1 $$\begin{gathered}\text{A\_r=}\gamma\text{}{}^{2}\text{r(r}-\text{p)/2.}\end{gathered}$$ [F1, F3, F2, step 120.1, algebra]

122.1 This is just the Gaussian exponential moment for $B_n−νn$ followed by the bounded-time Brownian supremum. The LR triangle inequality therefore gives [F1, F3, F2, step 121.1, algebra]

123.1 $$\begin{gathered}\text{E[E\_L\textasciicircum{}R]}\le\text{C(1+L)\textasciicircum{}R exp[A\_R L].                   (4)}\end{gathered}$$ [F1, F3, F2, step 122.1, algebra]

124.1 For a fixed α the same statement applies to every $r∈(p,4/γ²)$. All constants in (4) can be chosen uniformly on the stated compact parameter set. [F1, F3, F2, step 123.1, algebra]

125.1 **3. Late scales couple to an independent centered singular mass.** For $s≥L$, replace the initial OU values of Y at time zero by independent stationary Gaussian copies, keeping the innovations after zero. This gives a stationary Y′ independent of S. The explicit OU solution gives [F1, F3, F2, step 124.1, algebra]

126.1 $$\begin{gathered}\text{sup\_(s}\ge\text{L,}\theta\text{)|Y(s,}\theta\text{)}-\text{Y}{}^{\prime}\text{(s,}\theta\text{)|}\le\text{e\textasciicircum{}(}-\text{L)W,            (5)}\end{gathered}$$ [F1, F3, F2, step 125.1, algebra]

127.1 where W is a sum of absolute Gaussian coordinates with weights bounded by C $e^(−(n−1))/\operatorname{sqrt}(n)$. It has E $\operatorname{exp}(cW²)<∞$ for some $c>0$. To verify this directly use weighted Cauchy–Schwarz and the product of the one-dimensional Gaussian square moment-generating functions; the weights and their sum are finite. No independence of the actual early and late field is asserted. [F1, F3, F2, step 126.1, algebra]

128.1 The variance normalization of Y and Y′ is the same. Equations (3), (5) and the C1 bound on a therefore sandwich the late mass $T_L$ by [F1, F3, F2, step 127.1, algebra]

129.1 $$\begin{gathered}\text{A\_L I}\alpha\text{}{}^{\prime}\text{ }\cdot\text{exp[}\pm\text{C e\textasciicircum{}(}-\text{L)(1+W)],}\\\text{A\_L=a0 exp[}\gamma\text{S+}\gamma\text{(B\_L}-\text{}\nu\text{L)],                       (6)}\end{gathered}$$ [F1, F3, F2, step 128.1, algebra]

130.1 where Iα′ is an independent copy of the centered singular mass. It is independent of $A_L$: the replaced stationary OU process is independent of S, and the fresh Brownian increments after L are independent of $B_L$ and of all lateral variables. The possible correlation between W and Iα′ is retained in (6). [F1, F3, F2, step 129.1, algebra]

131.1 By the proved centered tail there is a uniform $δc>0$ such that $P(Iα'>u)=Rbarγ(α)u^{(−p)}+O(u^{(−p−δc)})$. Decrease δc so $p+δc<4/γ²$ uniformly. Extending the error bound to $u<1$ by increasing its constant permits averaging over all $A_L>0$. Therefore [F1, F3, F2, step 130.1, algebra]

132.1 $$\begin{gathered}\text{P(A\_L I}\alpha\text{}{}^{\prime}\text{>t)=Rbar}\gamma\text{(}\alpha\text{)t\textasciicircum{}(}-\text{p)E[A\_L\textasciicircum{}p]}\\\text{+O(t\textasciicircum{}(}-\text{p}-\text{}\delta\text{c)E[A\_L\textasciicircum{}(p+}\delta\text{c)]).}\end{gathered}$$ [F1, F3, F2, step 131.1, algebra]

133.1 Gaussian calculation, using the independence of S and B, gives [F1, F3, F2, step 132.1, algebra]

134.1 $$\begin{gathered}\text{E[A\_L\textasciicircum{}p]=a0\textasciicircum{}p exp[}\gamma\text{}{}^{2}\text{p}{}^{2}\text{g(z0)],}\\\text{E[A\_L\textasciicircum{}r]=a0\textasciicircum{}r exp[}\gamma\text{}{}^{2}\text{r}{}^{2}\text{g(z0)]exp[A\_r L].         (7)}\end{gathered}$$ [F1, F3, F2, step 133.1, algebra]

135.1 The first equality has no L factor: $p=2ν/γ$ is exactly the Brownian exponential-martingale exponent. No arbitrary volume normalization is involved. [F1, F3, F2, step 134.1, algebra]

136.1 **4. Choose $L=c$ log t and keep every error below the leading tail.** Choose $c>0$ sufficiently small that c sup $A_{(p+δc)}<δc/2$ and c sup $A_R<(R−pmax)/4$. Set $L=c$ log t, and choose $d=(pmax+R)/(2R)<1$. Markov and (4) give [F1, F3, F2, step 135.1, algebra]

137.1 $$\begin{gathered}\text{P(E\_L>t\textasciicircum{}d)}\le\text{C(log t)\textasciicircum{}R t\textasciicircum{}[}-\text{dR+cA\_R]}\\\text{=O(t\textasciicircum{}(}-\text{pmax}-\text{}\delta\text{E))}\end{gathered}$$ [F1, F3, F2, step 136.1, algebra]

138.1 for some $δE>0$, after a harmless reduction of δE. The model tail from (7) has a uniform power error at least δc/2. [F1, F3, F2, step 137.1, algebra]

139.1 On $W≤t^{(c/2)}$, the multiplicative error in (6) is $1+O(t^{(−c/2)})$. Its complement has probability $≤Cexp(−ct^c)$, which is smaller than every inverse power. Thus the late tail has the same coefficient as its model and a power error at least min(c/2,δc/2). Finally [F1, F3, F2, step 138.1, algebra]

140.1 $$\begin{gathered}\text{P(T\_L>t)}\le\text{P(X\_F,}\alpha\text{>t)}\\\text{}\le\text{P(T\_L>t}-\text{t\textasciicircum{}d)+P(E\_L>t\textasciicircum{}d).}\end{gathered}$$ [F1, F3, F2, step 139.1, algebra]

141.1 Replacing t by $t−t^d$ changes the leading model power by $O(t^{(−p−1+d)})$. Combining these estimates proves a uniform positive error exponent, for example any number strictly below min(δE,c/2,δc/2,1−d). This supplies an ACTUAL uniform δ*, not a limit comparison without a rate. [F1, F3, F2, step 140.1, algebra]

142.1 **5. Compute the coefficient and the two-pole margin.** From (7), the coefficient is [F1, F3, F2, step 141.1, algebra]

143.1 $$\begin{gathered}\text{a0\textasciicircum{}p exp[}\gamma\text{}{}^{2}\text{p}{}^{2}\text{g(z0)]Rbar}\gamma\text{(}\alpha\text{)}\\\text{=F(z0)\textasciicircum{}p exp\{[}\gamma\text{}{}^{2}\text{(p}{}^{2}\text{}-\text{p)}-\text{4p]g(z0)\}Rbar}\gamma\text{(}\alpha\text{).}\end{gathered}$$ [F1, F3, F2, step 142.1, algebra]

144.1 Since $γp=2(Q−α)$ and $2γQ=4+γ²$, the exponent in braces is 4α(α−Q). This proves exactly (1), including the background-density contribution. [F1, F3, F2, step 143.1, algebra]

145.1 Apply the compact-parameter version near $α=2/γ$, whose p value is one and remains strictly below 4/γ². First fix a small compact neighborhood there and obtain $δ*>0$ from step 4. Then choose η smaller if necessary so $4η/γ<δ*/2$. The two local exponents 1−2η/γ and 1+2η/γ are closer than the available uniform local power error. Together with the already-proved separated mixed moments, this is the strict margin needed for the two-term sum tail in the analytic two-pole helper. [F1, F3, F2, step 144.1, algebra]

146.1 No reflection formula or special-function value of Rbar is assumed. This extends the centered radial tail precisely to the smooth weighted outside-circle disks used in the two-pole argument; it does not assert an unrelated arbitrary-covariance tail theorem. [F1, F3, F2, step 145.1, algebra]

147.1 **Third DOZZ supplier: the real three-to-two residue bridge.** Research theorem using the two preceding constructed suppliers, not a reflection axiom. Fix $0<γ<\operatorname{sqrt}(2)$, $μ>0$ and $γ/2<α2≤α3<Q$. Put $p=2(Q−α3)/γ$ and assume p is not a positive integer. For $ε>0$ small set $α1=α3−α2+ε$, $A=2α3+ε$, and $q=p−ε/γ$. Let ρε be the EXACT three-point random integral of three-point-gmc-normalization.md with these charges. Its qth moment is finite. Define the Mellin-form auxiliary three-point expression [F1, F3, step 146.1, algebra]

148.1 $$\begin{gathered}\text{C\_aux,KRV(}\varepsilon\text{)= (2/}\gamma\text{) }\mu\text{\textasciicircum{}q }\Gamma\text{(}-\text{q) E[}\rho\text{}\varepsilon\text{\textasciicircum{}q].}\end{gathered}$$ [F1, F3, step 147.1, algebra]

149.1 Then [F1, F3, step 148.1, algebra]

150.1 $$\begin{gathered}\text{lim\_(}\varepsilon\text{}\downarrow\text{0) }\varepsilon\text{ C\_aux,KRV(}\varepsilon\text{)}\\\text{=2R}\gamma\text{,}\mu\text{(}\alpha\text{3)   if }\alpha\text{2<}\alpha\text{3,}\\\text{=4R}\gamma\text{,}\mu\text{(}\alpha\text{3)   if }\alpha\text{2=}\alpha\text{3.                         (1)}\end{gathered}$$ [F1, F3, step 149.1, algebra]

151.1 For the sphere model normalized by dc, the auxiliary expression and both residues are divided by two. This theorem does NOT yet assert charge analyticity or identify $C_{aux}$ with analytic continuation of the convergent zero-mode correlation; that is the next separate prerequisite. It proves the actual positive-moment boundary limit needed for that identification. [F1, F3, step 150.1, algebra]

152.1 **1. Singular positive moments with a strict margin.** For a local charge $a<Q$, annular scaling and the positive moments established in reflection-tail-and-mellin-normalization.md give [F1, F3, step 151.1, algebra]

153.1 $$\begin{gathered}\text{E[(}\int\text{\_(|x}-\text{z|<r)|x}-\text{z|\textasciicircum{}(}-\text{}\gamma\text{a)M}\gamma\text{(dx))\textasciicircum{}t]<}\infty\text{}\end{gathered}$$ [F1, F3, step 152.1, algebra]

154.1 whenever $0<t<\operatorname{min}(4/γ²,2(Q−a)/γ)$. For $t≤1$ use the subadditivity of the tth power on annuli; for $t>1$ use its Lt triangle inequality. The summability exponent is ξ(t)−γat, or divided by t, respectively; it is positive exactly in the stated range. Constants are uniform when the parameters stay inside strict inequalities. Consequently ρε has a finite qth moment: its three charges are all $<Q$ and q is strictly below each singular threshold. All regions away from these singularities have moments up to 4/γ². [F1, F3, step 153.1, algebra]

155.1 **2. A mixed-moment estimate for separated singularities.** Let X1,X2 be the weighted masses of two disjoint small disks, each with its own insertion singularity. Suppose $ti>0$ lies strictly below that disk's singular moment threshold. Then $E[X1^t1 X2^t2]<∞$, uniformly in strict compact parameter ranges. [F1, F3, step 154.1, algebra]

156.1 Here is the Gaussian argument, which avoids assuming actual independence of the disk fields. First truncate each deterministic singular weight at a fixed insertion cutoff, and at finite FIELD cutoff compare the actual Gaussian field on the two disks with independent copies of its two restrictions. Covariances WITHIN each disk are identical in the two models. The only interpolation derivative is the cross covariance, bounded in absolute value by a fixed C because the disks are separated. Gaussian square completion/differentiation for $F(x,y)=x^t1 y^t2$ gives [F1, F3, step 155.1, algebra]

157.1 $$\begin{gathered}\text{|d/du E[F(M1,u,M2,u)]|}\\\text{}\le\text{}\gamma\text{}{}^{2}\text{ C t1t2 E[F(M1,u,M2,u)].}\end{gathered}$$ [F1, F3, step 156.1, algebra]

158.1 Indeed $F_{xy}=t1t2 x^{(t1−1)}y^{(t2−1)}$, and the two weighted integration sums in the cross term equal xy. There are no within-disk $F_{xx}$ or $F_{yy}$ terms to control. One may first use x+δ,y+δ and bounded truncations; finite-cutoff masses have all moments. Gronwall gives an upper bound $e^{(γ²Ct1t2)}$ times the product of the marginal moments of the independent model. First pass to the field limit with the bounded truncated weights. Then remove the insertion truncation, using the strict singular-mass moment bounds of step 1 and Fatou. No uniform bound is claimed when a smooth field cutoff is kept fixed while an unintegrable deterministic insertion weight is untruncated. This ordered limit gives the assertion for the actual singular masses. Thus correlation between disks is retained and bounded, not replaced by an independence identity. [F1, F3, step 157.1, algebra]

159.1 **3. Moment residues add over the heaviest singularities.** For $x,y≥0$, q in a small fixed neighborhood of $p>0$, and a sufficiently small fixed $η>0$, elementary integration of $(x+y)^q$ along one variable gives [F1, F3, step 158.1, algebra]

160.1 $$\begin{gathered}\text{|(x+y)\textasciicircum{}q}-\text{x\textasciicircum{}q}-\text{y\textasciicircum{}q|}\\\text{}\le\text{C[x\textasciicircum{}(q}-\text{}\eta\text{)y\textasciicircum{}}\eta\text{+x\textasciicircum{}}\eta\text{ y\textasciicircum{}(q}-\text{}\eta\text{)].                    (2)}\end{gathered}$$ [F1, F3, step 159.1, algebra]

161.1 Choose $η<\operatorname{min}(p/4,1/2)$ and restrict q sufficiently close to p that all displayed powers are positive. If x,y are masses of separated singularities with threshold p, each mixed expectation on the right is uniformly finite by step 2: both powers lie a fixed distance below p. The same assertion holds if one mass has a strictly larger moment threshold, using Hölder with strict margins. Therefore the difference in (2) is bounded uniformly as q↑p. Multiplication by p−q makes it vanish. [F1, F3, step 160.1, algebra]

162.1 Partition ρε into small neighborhoods of its heaviest singularities and the remaining pieces. When $α2<α3$ the unique heaviest singularity is at infinity. When $α2=α3$ the two heaviest singularities are at 1 and infinity. The charge $α1=α3−α2+ε$ stays strictly below α3, uniformly as $ε→0$; its neighborhood and the bounded rest have a moment of order p+δ for a fixed $δ>0$. To avoid touching-support issues, the mixed terms between a heaviest mass and its remaining bounded annulus can alternatively be bounded by Hölder: $(q−η)/p+η/(p+δ)<1$ uniformly near $q=p$. Hence every non-heaviest contribution and every cross term is bounded after subtracting the heaviest qth powers. It suffices to compute one local moment residue at each heaviest point. [F1, F3, step 161.1, algebra]

163.1 **4. A local residue at infinity and at 1.** Under $w=1/x$ the exact ρε weight is [F1, F3, step 162.1, algebra]

164.1 $$\begin{gathered}\text{|w|\_+\textasciicircum{}(}\gamma\text{A)|w|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{3)|1}-\text{w|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{2).}\end{gathered}$$ [F1, F3, step 163.1, algebra]

165.1 Thus near $w=0$ it is $|w|^{(−γα3)}$ times a positive factor tending to one, uniformly in ε. The covariance there is exactly log(1/|w−w′|). Let Iα,r denote the pure-log singular integral in a disk of radius r. Exact Gaussian scaling gives [F1, F3, step 164.1, algebra]

166.1 $$\begin{gathered}\text{I}\alpha\text{,r law= r\textasciicircum{}[}\gamma\text{(Q}-\text{}\alpha\text{)] e\textasciicircum{}(}\gamma\text{Z\_r) I}\alpha\text{,1,}\\\text{Var(Z\_r)=log(1/r), Z\_r independent of I}\alpha\text{,1.}\end{gathered}$$ [F1, F3, step 165.1, algebra]

167.1 Therefore, with $pα=2(Q−α)/γ$, [F1, F3, step 166.1, algebra]

168.1 $$\begin{gathered}\text{E[I}\alpha\text{,r\textasciicircum{}q]=r\textasciicircum{}[}\gamma\text{}{}^{2}\text{q(p}\alpha\text{}-\text{q)/2]E[I}\alpha\text{,1\textasciicircum{}q],}\\\text{lim\_(q}\uparrow\text{p}\alpha\text{)(p}\alpha\text{}-\text{q)E[I}\alpha\text{,r\textasciicircum{}q]=p}\alpha\text{ Rbar}\gamma\text{(}\alpha\text{),           (3)}\end{gathered}$$ [F1, F3, step 167.1, algebra]

169.1 using the proved Mellin pole. The smooth positive factor differs from one by O(r), so its qth moment is squeezed between $e^{(−Crq)}$ and $e^{(Crq)}$ times this expression. Letting q↑p and then r↓0 gives the same local residue pRbarγ(α3). [F1, F3, step 168.1, algebra]

170.1 At $x=1$, write $x=1+u$. The deterministic weight other than $|u|^{(−γα2)}$, including the background area density, tends to one uniformly as r↓0 and ε↓0. The covariance is [F1, F3, step 169.1, algebra]

171.1 $$\begin{gathered}\text{log(1/|u}-\text{v|)+g(1+u)+g(1+v),  g(x)=log|x|\_+,}\end{gathered}$$ [F1, F3, step 170.1, algebra]

172.1 whose remainder is bounded by Cr on this disk. Gaussian moment comparison in BOTH directions bounds the weighted qth moment by the pure-log counterpart times $e^{(±C_r)}$, with $C_r→0$, uniformly for q near p. To see this for every $q>0$, add a common Gaussian of variance Cr to either field and use the interpolation identity with $F(t)=t^q$. Its sign is q(q−1); the common Gaussian moment is exp[γ²Cr(q²−q)/2]. Reverse the covariance comparison for the second inequality. For $q=1$ both expectations are the deterministic mean. Thus the two-sided multiplicative bounds hold even when $q<1$. Combining with (3) and then sending r↓0 again gives pRbarγ(α2). No unjustified smoothness of g across the unit circle is used; its continuity and O(r) bound suffice. [F1, F3, step 171.1, algebra]

173.1 It follows from steps 3–4, with $p−q=ε/γ$, that [F1, F3, step 172.1, algebra]

174.1 $$\begin{gathered}\text{lim\_(}\varepsilon\text{}\downarrow\text{0) (}\varepsilon\text{/}\gamma\text{)E[}\rho\text{}\varepsilon\text{\textasciicircum{}(p}-\text{}\varepsilon\text{/}\gamma\text{)]}\\\text{=pRbar}\gamma\text{(}\alpha\text{3)    if }\alpha\text{2<}\alpha\text{3,}\\\text{=2pRbar}\gamma\text{(}\alpha\text{3)   if }\alpha\text{2=}\alpha\text{3.                     (4)}\end{gathered}$$ [F1, F3, step 173.1, algebra]

175.1 The estimates are uniform as $ε→0$ because all non-heaviest charges retain strict moment margins, and the local deterministic weights are uniformly controlled. This proves a boundary limit for the actual moving-charge integral, not only for a fixed distribution with fixed exponent. [F1, F3, step 174.1, algebra]

176.1 **5. Gamma and zero-mode factors.** Since p is not an integer, $Γ(−q)→Γ(−p)$, and $μ^q→μ^p$. Multiply (4) by $2μ^qΓ(−q)/γ$. The result is exactly (1), by the probabilistically DEFINED $Rγ,μ(α3)=μ^pΓ(−p)pRbarγ(α3)$. The factor two for equal heaviest charges is the number of actual divergent local moment residues; it is not a reflection-operator multiplicity inserted by convention. [F1, F3, step 175.1, algebra]

177.1 At integer p, the Gamma factor has an additional pole and this simple-residue statement is not asserted. Its meromorphic treatment requires the charge-analyticity supplier. Likewise the use of $C_{aux}$ in later crossing/BPZ identities requires a proved continuation from the Seiberg domain; the divergent zero-mode integral is not falsely treated as a convergent correlation here. [F1, F3, step 176.1, algebra]

178.1 **Fourth DOZZ supplier: extended-charge holomorphy from unshifted hole cutoffs.** Research theorem. Fix $0<γ<\operatorname{sqrt}(2)$ and $N≥3$. Use the actual dc sphere normalization and define the real open set [F1, F3, F4, step 177.1, algebra]

179.1 $$\begin{gathered}\text{U\_N=\{a\_i<Q,  t=(2Q}-\text{}\Sigma\text{a\_i)/}\gamma\text{}\\\text{<min(4/}\gamma\text{}{}^{2}\text{,min\_i 2(Q}-\text{a\_i)/}\gamma\text{)\}.}\end{gathered}$$ [F1, F3, F4, step 178.1, algebra]

180.1 Equivalently $a_i<Q$, $\sum a_i>2Q−4/γ$, and $\sum a_i>2a_i$ for each i. Thus $U_N$ is convex, and contains the nonempty real Seiberg region. The unit-volume n-point function, initially $Γ(s)^{(−1)}μ^s$ times the convergent correlation, has a holomorphic extension to a complex neighborhood of $U_N$. On real $U_N$ it equals the exact GMC moment formula [F1, F3, F4, step 179.1, algebra]

181.1 $$\begin{gathered}\text{U(a,z)=(1/}\gamma\text{)}\prod\text{\_(i<j)|zi}-\text{zj|\textasciicircum{}(}-\text{aiaj) E[R(a,z)\textasciicircum{}t],}\\\text{R(a,z)=}\int\text{|x|\_+\textasciicircum{}(}\gamma\text{}\Sigma\text{a\_i)}\prod\text{|x}-\text{zi|\textasciicircum{}(}-\text{}\gamma\text{a\_i)M}\gamma\text{(dx).      (1)}\end{gathered}$$ [F1, F3, F4, step 180.1, algebra]

182.1 Multiplying by $μ^{(−s)}Γ(s)$ gives a meromorphic extension of the actual correlation. This identifies the real auxiliary expression used in the preceding three-to-two bridge with that continuation, away from the indicated Gamma poles. Complex interaction masses or complex powers of such masses are never used. [F1, F3, F4, step 181.1, algebra]

183.1 Inputs actually constructed: local GMC fractional/inverse moments from the coordinate supplier, all positive moments below 4/γ² and singular moment thresholds from the preceding DOZZ suppliers. The Gaussian recentering construction of a Möbius transformed field Y,S is the explicit one in the Ward owner's charged-contact-and-ward-identities.md §6; its algebra on the Mellin formula is given in step 4 below, so no divergent c integral is invoked outside the Seiberg region. [F1, F3, F4, step 182.1, algebra]

184.1 **1. Holomorphic finite-hole approximants.** First arrange $|zi|>2$ and $|zi−zj|>2$. For integers r sufficiently large put $C_r=C\setminus\bigcup_i B(zi,e^{(−r)})$, and let $X_r(zi)$ be the circular average at that radius. Put $s=(\sum α_i−2Q)/γ$ and [F1, F3, F4, step 183.1, algebra]

185.1 $$\begin{gathered}\text{F\_r(}\alpha\text{)=E[}\prod\text{exp(}\alpha\text{\_iX\_r(zi)}-\text{}\alpha\text{\_i}{}^{2}\text{Var(X\_r(zi))/2)}\\\text{}\cdot\text{M}\gamma\text{(C\_r)\textasciicircum{}(}-\text{s)].}\end{gathered}$$ [F1, F3, F4, step 184.1, algebra]

186.1 Here $Mγ(C_r)>0$ and is REAL. The complex power uses its ordinary positive-real logarithm. For each fixed r, $F_r$ is holomorphic on the tube −Re $s<4/γ²$: the positive moments of M on the bounded-away-from-holes region are available up to 4/γ², all inverse moments follow from an anchor disk, and the finite Gaussian insertion vector has every exponential moment. Hölder and a slightly larger/smaller mass exponent dominate derivatives, including powers of log M. Thus differentiation under expectation is legitimate on compact subsets of this tube. $F_r$ need not be entire for arbitrarily large negative Re s; no such assertion is needed. [F1, F3, F4, step 185.1, algebra]

187.1 Each increment $X_{(r+1)}(zi)−X_r(zi)$ has variance one and is independent of the Gaussian field outside $B(zi,e^{(−r)})$, and the increments for distinct holes are independent. Verify this directly: averages of log|x−zi| agree at the two radii whenever x is outside the larger disk, and $\operatorname{log}|x|_+$ is harmonic on these disks because $|zi|>2$. The covariance of the increment with every exterior test is therefore zero, and Gaussian orthogonality proves independence. Its complex Wick exponential has conditional mean one. [F1, F3, F4, step 186.1, algebra]

188.1 Consequently $F_{(r+1)}−F_r$ is the expectation with insertion cutoff r+1 of the change from $M(C_r)^{(−s)}$ to $M(C_{(r+1)})^{(−s)}$. The old exterior term cancels exactly, even for complex α. [F1, F3, F4, step 187.1, algebra]

189.1 **2. Uniform summability in a genuine complex neighborhood.** Write $α_i=a_i+ib_i$ and apply real Gaussian square completion to $a_i$. Taking the modulus of the imaginary Wick factors costs at most C $\operatorname{exp}[(r+1)\sum b_i²/2]$. After the real tilt, write the exterior mass as $Z_r$ and the newly included annular mass as $Y_r$. These are nonnegative. Their weights are $e^{[γ\sum a_i \operatorname{Cov}(X_{(r+1)}(zi),X(x))]}$. An anchor gives all negative moments uniformly in r. The singular moment proof gives all needed positive moments below [F1, F3, F4, step 188.1, algebra]

190.1 $$\begin{gathered}\text{H(a)=min(4/}\gamma\text{}{}^{2}\text{,min\_i 2(Q}-\text{a\_i)/}\gamma\text{).}\end{gathered}$$ [F1, F3, F4, step 189.1, algebra]

191.1 Fix a compact small real neighborhood inside $U_N$. Choose a Hölder exponent $q>1$ with q max(−Re $s,0)<H(a$), uniformly there, and let $p=q/(q−1)$. Choose $m>0$ so small that [F1, F3, F4, step 190.1, algebra]

192.1 $$\begin{gathered}\text{}\theta\text{=min\_i[}\gamma\text{(Q}-\text{a\_i)m}-\text{}\gamma\text{}{}^{2}\text{m}{}^{2}\text{/2]>0}\end{gathered}$$ [F1, F3, F4, step 191.1, algebra]

193.1 uniformly. Annular scaling gives $E[Y_r^m]≤Ce^{(−θr)}$. [F1, F3, F4, step 192.1, algebra]

194.1 For $η>0$ split on $Y_r<η$. On that event the integral mean-value formula for positive real bases bounds [F1, F3, F4, step 193.1, algebra]

195.1 $$\begin{gathered}\text{|(Z\_r+Y\_r)\textasciicircum{}(}-\text{s)}-\text{Z\_r\textasciicircum{}(}-\text{s)|}\\\text{}\le\text{C}\eta\text{}\int\text{\_0\textasciicircum{}1(Z\_r+uY\_r)\textasciicircum{}(}-\text{Re s}-\text{1)du.}\end{gathered}$$ [F1, F3, F4, step 194.1, algebra]

196.1 Its expectation is uniformly bounded after removing η: a positive exponent −Re s−1 is strictly smaller than the available positive moment bound, and a negative exponent is dominated by the anchor inverse moment. On $Y_r≥η$ use Hölder and Markov. The available qth mass powers give [F1, F3, F4, step 195.1, algebra]

197.1 $$\begin{gathered}\text{E[1\_(Y\_r}\ge\text{}\eta\text{)|(Z\_r+Y\_r)\textasciicircum{}(}-\text{s)}-\text{Z\_r\textasciicircum{}(}-\text{s)|]}\\\text{}\le\text{C}\eta\text{\textasciicircum{}(}-\text{m/p)e\textasciicircum{}(}-\text{}\theta\text{r/p).}\end{gathered}$$ [F1, F3, F4, step 196.1, algebra]

198.1 Therefore [F1, F3, F4, step 197.1, algebra]

199.1 $$\begin{gathered}\text{|F\_(r+1)}-\text{F\_r|}\\\text{}\le\text{C exp[(r+1)}\Sigma\text{b\_i}{}^{2}\text{/2]}\\\text{[}\eta\text{+}\eta\text{\textasciicircum{}(}-\text{m/p)e\textasciicircum{}(}-\text{}\theta\text{r/p)].                 (2)}\end{gathered}$$ [F1, F3, F4, step 198.1, algebra]

200.1 Take $η=e^{(−κr)}$, $κ=θ/(p+m)$. First choose the real neighborhood and these strict constants, then choose the imaginary widths so $\sum b_i²/2<κ/2$. Equation (2) is a uniformly summable geometric bound. Hence $F_r$ converges locally uniformly on a complex polydisk around every point of $U_N$. Its limit is holomorphic: integrate $F_r$ over any small coordinate circle, use uniform convergence to pass Cauchy's formula, and differentiate there. This is a direct proof, not an appeal to formal analyticity of a complex charged chaos. [F1, F3, F4, step 199.1, algebra]

201.1 **3. Identification with the real extended moment.** For real $a∈U_N$, Gaussian tilting outside the holes gives the exact weight from (1). Circular mean value makes the circle covariance equal to the point covariance outside every hole. The only remaining deterministic vertex/background factors cancel exactly as in the first normalization supplier. For $t>0$, the restricted weighted masses increase to R and their tth moments converge by monotone convergence, with finiteness supplied by the strict singular thresholds. For $t≤0$, an anchor inverse moment gives dominated convergence. Thus the real $F_r$ limit is exactly (1), with its appropriate deterministic factor. [F1, F3, F4, step 200.1, algebra]

202.1 The unit-volume function (1) agrees with $Γ(s)^{(−1)}μ^s$ times the actual zero-mode correlation on the real Seiberg region by the first supplier. This proves it is the desired analytic continuation, once the neighborhoods are glued. On overlapping polydisks the limits agree on a real open set. Uniqueness follows by successively applying the one-variable identity theorem in each variable to that real polydisk. Since $U_N$ is convex, these germs give one analytic continuation near the entire real domain. Gamma contributes its actual poles; they are not silently removed. [F1, F3, F4, step 201.1, algebra]

203.1 **4. General configurations without assuming a divergent zero-mode identity.** A Möbius transformation can put any distinct finite configuration, or a configuration with one point at infinity, into the separated region used above. The required covariance transfer holds on the whole real moment domain, not only where the c integral converges. Here is its Gaussian proof. [F1, F3, F4, step 202.1, algebra]

204.1 For ψ set $h(z)=\operatorname{log}|ψz|_+−\operatorname{log}|z|_+−(1/2)\operatorname{log}|ψ'(z)|$. Then $K(ψz,ψw)=K(z,w)+h(z)+h(w)$. Subtract the unit-circle average S of X∘ψ to obtain Y. The Ward construction directly gives Cov $Y=K$, $\operatorname{Cov}(Y(z),S)=h(z)−hbar$, Var $S=2hbar$. In the unit-volume expression BEFORE Gaussian tilting of the vertices, the vertex factors transform as [F1, F3, F4, step 203.1, algebra]

205.1 $$\begin{gathered}\text{:e\textasciicircum{}[a\_i X(}\psi\text{zi)]: =e\textasciicircum{}(a\_iS}-\text{a\_i}{}^{2}\text{h(zi)):e\textasciicircum{}[a\_iY(zi)]:,}\end{gathered}$$ [F1, F3, F4, step 204.1, algebra]

206.1 and the interaction measure pulled back by ψ is [F1, F3, F4, step 205.1, algebra]

207.1 $$\begin{gathered}\text{M\_X(}\psi\text{ dz)=e\textasciicircum{}(}\gamma\text{S)e\textasciicircum{}[}-\text{2}\gamma\text{Qh(z)]M\_Y(dz).}\end{gathered}$$ [F1, F3, F4, step 206.1, algebra]

208.1 The latter identity uses its Jacobian: $dA0(ψz)|ψ'|²=e^{(−4h)}dA0(z)$, together with the Wick covariance correction $e^{(−γ²h)}$; $4+γ²=2γQ$. [F1, F3, F4, step 207.1, algebra]

209.1 The total S exponent in the unit-volume moment is $A−γs=2Q$. Gaussian tilt by $e^{(2QS)}$ shifts Y by 2Q(h−hbar). Its Gaussian normalization contributes $e^{(4Q²hbar)}$. The vertices contribute $\prod_i e^{[2Qa_i(h(zi)−hbar)]}$, and the weighted interaction moment contributes the constant $e^{(2γQs hbar)}$. The net CONSTANT exponent is 4Q²hbar−2QA hbar+2γQs $hbar=0$. The remaining insertion factor is $e^{[(2Qa_i−a_i²)h(zi)]}=e^{[4Δ_i h(zi)]}$, which, combined with the background factor at ψzi, gives [F1, F3, F4, step 208.1, algebra]

210.1 $$\begin{gathered}\text{U(a,}\psi\text{z)=}\prod\text{|}\psi\text{}{}^{\prime}\text{(zi)|\textasciicircum{}(}-\text{2}\Delta\text{\_i) U(a,z).                (3)}\end{gathered}$$ [F1, F3, F4, step 209.1, algebra]

211.1 All operations can first be done with bounded insertion/interaction cutoffs and Gaussian exponentials. The strict positive/negative moment margins proved above justify their limits. There is no integration of $e^{[(A−2Q)c]}$ at $A≤2Q$ in this argument. Thus (3) holds for the actual real Mellin expression on $U_N$. Its deterministic factors are entire functions of the charges with fixed real logarithms of the nonzero coordinate distances. Transporting the holomorphic germs by (3) proves the claim for every distinct configuration. [F1, F3, F4, step 210.1, algebra]

212.1 **Exact scope supplied to the next step.** The real three-to-two residue in the preceding file is now a residue of the meromorphic continuation of the actual correlation, not merely an unrelated auxiliary moment formula. This proves charge analyticity near $U_N$ and keeps both the strict Seiberg region and the extended moment inequalities explicit. It supplies no BPZ null-field identity, degenerate fusion coefficient, inversion, or dual shift. Those remain to be constructed before DOZZ can be asserted. [F1, F3, F4, step 211.1, algebra]

213.1 **Fifth DOZZ supplier: both degenerate BPZ equations from the actual Gaussian vertex.** Research theorem; no null-field or irreducible-module axiom is assumed. Use $0<γ<\operatorname{sqrt}(2)$, $b=γ/2$, $Q=b+b^{(−1)}$, $V_a=e^{(aφ)}$, and the actual sphere dc normalization. The completed Ward supplier is ../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-liouville-ward/charged-contact-and-ward-identities.md, §§2–6. It derives the effective current contraction $J(u)J(v)=−1/[2(u−v)²]$, $J(u)V_a(z)=−aV_a(z)/[2(u−z)]$, $T=Q∂J−:J²$:, and the descendant contour Ward identity with its actual interaction-hole error $Cρ^{[2−γa−N]}$. Those results, not the DOZZ theorem, are the inputs here. [F1, F3, F4, step 212.1, algebra]

214.1 **Statement.** Let $a0=−b$ or $a0=−b^{(−1)}$, let $a1,a2,a3<Q$ be real, and require $a0+a1+a2+a3>2Q$ at distinct sphere points. Then the actual probabilistic four-point function $G(z,z1,z2,z3)=\langle V_a0(z)\prod_i V_{ai}(zi)\rangle $ obeys [F1, F3, F4, step 213.1, algebra]

215.1 $$\begin{gathered}\text{[}\partial\text{z}{}^{2}\text{+a0}{}^{2}\text{ sum\_i( }\Delta\text{\_ai/(z}-\text{zi)}{}^{2}\text{}\\\text{+(z}-\text{zi)\textasciicircum{}(}-\text{1)}\partial\text{zi)]G=0,    (1)}\end{gathered}$$ [F1, F3, F4, step 214.1, algebra]

216.1 and its antiholomorphic counterpart, in distributions on the distinct-point configuration space. The same identity holds after the proved charge-holomorphic continuation whenever both sides are defined in the extended moment domain. Thus the second-order BPZ coefficient is b² for $a0=−b$ and $b^{(−2)}$ for $a0=−b^{(−1)}$, with the corresponding inverse coefficient if (1) is divided by a0². [F1, F3, F4, step 215.1, algebra]

217.1 **1. Compute the two descendants instead of assuming a null vector.** Keep the interaction outside a hole of radius ρ around z, and put both stress contours strictly inside that hole with nested radii. In the common Gaussian regularization, all contractions at the primary are the effective free contractions proved by the Ward supplier. The derivative rule is $∂V_a=a:JV_a$: there; metric/c-zero-mode terms have already been canceled in that actual integration-by-parts construction. [F1, F3, F4, step 216.1, algebra]

218.1 Consequently the $L_−1$ descendant is $∂V_a$ and [F1, F3, F4, step 217.1, algebra]

219.1 $$\begin{gathered}\text{L\_}-\text{1}{}^{2}\text{V\_a=a:}\partial\text{J V\_a:+a}{}^{2}\text{:J}{}^{2}\text{V\_a:.                    (2)}\end{gathered}$$ [F1, F3, F4, step 218.1, algebra]

220.1 For completeness compute the REGULAR coefficient of $T(u)V_a(z)$. The Q∂J term contributes Q:∂J $V_a$: to that coefficient. In $−:J(u)²:V_a$, the single contraction is $+a:J(u)V_a:/(u−z)$. Expanding $J(u)=J(z)+(u−z)∂J(z)+…$ gives regular contribution +a:∂J $V_a$:. Its uncontracted regular part is $−:J²V_a$:. The double contraction gives only the weight pole $Δ_a/(u−z)²$, not another regular term. Hence [F1, F3, F4, step 219.1, algebra]

221.1 $$\begin{gathered}\text{L\_}-\text{2V\_a=(Q+a):}\partial\text{J V\_a:}-\text{:J}{}^{2}\text{V\_a:.                   (3)}\end{gathered}$$ [F1, F3, F4, step 220.1, algebra]

222.1 All factors here are fixed by the current contraction −1/2. No screening or stress insertion lies between the primary and these contours. Thus equations (2)–(3) are identities of the explicit Gaussian polynomials under every remaining exterior-field expectation, not merely identities inferred from an abstract singular vector. [F1, F3, F4, step 221.1, algebra]

223.1 Combining them gives [F1, F3, F4, step 222.1, algebra]

224.1 $$\begin{gathered}\text{(L\_}-\text{1}{}^{2}\text{+a}{}^{2}\text{L\_}-\text{2)V\_a}\\\text{=a[1+aQ+a}{}^{2}\text{]:}\partial\text{J V\_a:.}\end{gathered}$$ [F1, F3, F4, step 223.1, algebra]

225.1 For $a=−b$, $1−bQ+b²=0$. For $a=−b^{(−1)}$, $1−Q/b+b^{(−2)}=0$. Therefore this particular descendant polynomial is exactly zero in both cases. Its antiholomorphic polynomial is zero by the identical right-current contraction; no assumed equality of unrelated fields is used. [F1, F3, F4, step 224.1, algebra]

226.1 **2. Remove the interaction hole and use the proved Ward identity.** The actual Ward construction bounds the level-two boundary remainder by $Cρ^{[2−γa0−2]}=Cρ^{(−γa0)}$. This tends to zero for both negative a0: its exponents are γ²/2 and 2, respectively. Its initial technical condition $a0<Q−γ$ is also satisfied: for −b this is $−b<1/b−b$, and for −1/b it follows from $b²<1$ (indeed the bootstrap range has $b²<1/2$). The strict four-point total-charge condition gives the required c-integrability; it has a nonempty open solution set with all $ai<Q$ because $Q>\operatorname{max}(b,1/b)$. [F1, F3, F4, step 225.1, algebra]

227.1 Thus the Ward supplier's contour-to-external differential identity applies at this very degenerate charge, without extrapolating from a different charge or assuming the boundary term vanishes formally. It sends $L_−1²V_a0$ to ∂z²G and $L_−2V_a0$ to $\sum_i[Δ_{ai}/(z−zi)²+(z−zi)^{(−1)}∂zi]G$. Applying it to the zero polynomial above proves (1), in the same distributional sense in which the actual Ward identity was established. The antiholomorphic equation follows in the same way. Möbius covariance from that supplier extends the calculation across the sphere charts, keeping insertions distinct. [F1, F3, F4, step 226.1, algebra]

228.1 **3. Charge continuation is an actual analytic identity.** At separated points the unshifted hole-cutoff construction in extended-charge-holomorphy.md supplies locally uniform holomorphic charge families. The finite-order position derivatives in (1) are defined distributionally, so testing against a compact smooth configuration test function commutes with those charge limits. The BPZ differential coefficients are polynomial in the charges and rational in distinct positions. Both sides are therefore holomorphic charge families of distributions. Their equality on the real open Seiberg set extends by one-variable uniqueness successively in the spectator charges throughout its connected continued domain. The degenerate a0 itself is fixed at one of the two displayed values; no assumption of a BPZ identity at generic a0 is made. [F1, F3, F4, step 227.1, algebra]

229.1 **Use boundary.** This supplies the ACTUAL probabilistic degenerate PDE for each of the two weights. It does not identify the two hypergeometric connection coefficients, prove a degenerate fusion asymptotic, assume a reflection relation, or derive either shift constant. Those require the next analytic/fusion arguments. In particular the existence of a formal Virasoro singular vector alone was not used as a substitute for this Gaussian polynomial and hole-removal calculation. [F1, F3, F4, step 228.1, algebra]

230.1 **Sixth DOZZ supplier: the actual BPZ solution and its connection ratio.** Research continuation of degenerate-bpz-from-actual-ward.md. Fix the two degenerate choices $a0=−γ/2$ or −2/γ, real spectator charges $a1,a2,a3<Q$, and strict four-point Seiberg total. Work first away from the integer/resonant hyperplanes specified below. All correlations here have the actual dc normalization; multiplying every correlation by two gives the KRV convention and changes neither ratio. [F1, F3, F4, step 229.1, algebra]

231.1 Put $G(z)=\langle V_a0(z)V_a1(0)V_a2(1)V_a3(∞)\rangle $ and define T(z) by [F1, F3, F4, step 230.1, algebra]

232.1 $$\begin{gathered}\text{G(z)=|z|\textasciicircum{}(}-\text{a0a1)|1}-\text{z|\textasciicircum{}(}-\text{a0a2)T(z).}\end{gathered}$$ [F1, F3, F4, step 231.1, algebra]

233.1 Define hypergeometric parameters (capital letters distinguish them from γ/2): [F1, F3, F4, step 232.1, algebra]

234.1 $$\begin{gathered}\text{A=(a0/2)(Q}-\text{2a0}-\text{a1}-\text{a2}-\text{a3)}-\text{1/2,}\\\text{B=(a0/2)(Q}-\text{a1}-\text{a2+a3)+1/2,}\\\text{C=1+a0(Q}-\text{a1).}\end{gathered}$$ [F1, F3, F4, step 233.1, algebra]

235.1 Then on the slit plane [F1, F3, F4, step 234.1, algebra]

236.1 $$\begin{gathered}\text{T(z)=}\lambda\text{[|F\_}-\text{(z)|}{}^{2}\text{+}\mathcal{A}\text{(a0,a1,a2,a3)|F\_+(z)|}{}^{2}\text{],      (1)}\\\text{F\_}-\text{=}{}_{2}\text{F}{}_{1}\text{(A,B;C;z),}\\\text{F\_+=z\textasciicircum{}(1}-\text{C)}{}_{2}\text{F}{}_{1}\text{(1+A}-\text{C,1+B}-\text{C;2}-\text{C;z),}\end{gathered}$$ [F1, F3, F4, step 235.1, algebra]

237.1 where $λ=C_{sph}(a1+a0,a2,a3)$, and [F1, F3, F4, step 236.1, algebra]

238.1 $$\begin{gathered}\text{}\mathcal{A}\text{=}-\text{ }\Gamma\text{(C)}{}^{2}\text{ }\Gamma\text{(1}-\text{A)}\Gamma\text{(1}-\text{B)}\Gamma\text{(A}-\text{C+1)}\Gamma\text{(B}-\text{C+1)}\\\text{/[}\Gamma\text{(2}-\text{C)}{}^{2}\text{}\Gamma\text{(C}-\text{A)}\Gamma\text{(C}-\text{B)}\Gamma\text{(A)}\Gamma\text{(B)].             (2)}\end{gathered}$$ [F1, F3, F4, step 237.1, algebra]

239.1 These are derived from the constructed BPZ identity and single-valuedness of the actual GMC correlation, not an assumed bootstrap ansatz. Equation (1) is not yet a determination of its second channel as another probabilistic three-point constant. [F1, F3, F4, step 238.1, algebra]

240.1 **1. Reduction of the actual PDE.** Translation and scaling Ward identities, with the third spectator at infinity, give $∂1G=−zG'−DG$ and $∂0G=(z−1)G'+DG$, $D=Δ0+Δ1+Δ2−Δ3$. Substitute these in the constructed BPZ equation. It becomes [F1, F3, F4, step 239.1, algebra]

241.1 $$\begin{gathered}\text{G}{}^{\prime\prime}\text{+a0}{}^{2}\text{[(2z}-\text{1)/(z(1}-\text{z))G}{}^{\prime}\text{}\\\text{+(}\Delta\text{1/z}{}^{2}\text{+}\Delta\text{2/(1}-\text{z)}{}^{2}\text{+D/[z(1}-\text{z)])G]=0.}\end{gathered}$$ [F1, F3, F4, step 240.1, algebra]

242.1 Write the holomorphic prefactor as $f=z^r1(1−z)^r2$, $r1=−a0a1/2,r2=−a0a2/2$. Its substitution gives [F1, F3, F4, step 241.1, algebra]

243.1 $$\begin{gathered}\text{T}{}^{\prime\prime}\text{+[C}-\text{(A+B+1)z]/[z(1}-\text{z)]T}{}^{\prime}\text{}-\text{AB/[z(1}-\text{z)]T=0.     (3)}\end{gathered}$$ [F1, F3, F4, step 242.1, algebra]

244.1 To check every coefficient, $1+a0Q+a0²=0$ cancels both double poles, since $r1(r1−1)−a0²r1+a0²Δ1=0$ and similarly for r2. The remaining derivative coefficient has constant $2r1−a0²=C$ and linear coefficient $−2r1−2r2+2a0²=−(A+B+1)$. The remaining zeroth coefficient is $−2r1r2+a0²(r1+r2+D)=−AB$. The antiholomorphic BPZ equation gives the conjugate equation as well. [F1, F3, F4, step 243.1, algebra]

245.1 **2. Distributional solutions really have the claimed local form.** On a disk avoiding 0 and 1 take two independent holomorphic solutions F1,F2 of (3) and invert their Wronskian matrix to write, for distributions, [F1, F3, F4, step 244.1, algebra]

246.1 $$\begin{gathered}\text{T=F1 H1+F2 H2,   }\partial\text{T=F1}{}^{\prime}\text{H1+F2}{}^{\prime}\text{H2.}\end{gathered}$$ [F1, F3, F4, step 245.1, algebra]

247.1 Differentiating these formulas and using (3) gives $∂H1=∂H2=0$. A distribution killed by ∂ is antiholomorphic: convolution with a smooth approximate identity gives antiholomorphic functions on smaller disks; their distributional bounds and the mean-value identity bound them uniformly on compact subdisks, so their locally uniform limits represent the original distribution. Applying the conjugate ODE to H1,H2 now shows each is a constant linear combination of the two antiholomorphic solutions. Thus $T=\sum H_{ij}$ Fi(z)overline(Fj(z)), with constant matrix H. In particular it is smooth and real analytic away from the insertions. Its reality makes H Hermitian. This proves the regularity needed for monodromy rather than assuming it from a formal ODE. [F1, F3, F4, step 246.1, algebra]

248.1 At zero the Frobenius recurrence gives exactly $F_−$ and $F_+$ above when C is not an integer. Since C is real and the actual correlation is single-valued, monodromy $diag(1,e^{[2πi(1−C)]})$ forces $H_−+=H_+−=0$. Hence $T=λ|F_−|²+η|F_+|²$ with real λ,η. [F1, F3, F4, step 247.1, algebra]

249.1 **3. Connection coefficients, derived by the beta integral.** The power series definition $_{2}F₁(A,B;C;z)=\sum (A)_n(B)_n z^n/[(C)_n n!]$ solves (3) with $F(0)=1$; its coefficient recurrence proves uniqueness. In the domain Re $B>0$, $\operatorname{Re}(C−B)>0$, expand $(1−zt)^{(−A)}$ and integrate termwise in Euler's beta integral. This gives [F1, F3, F4, step 248.1, algebra]

250.1 $$\begin{gathered}\text{}{}_{2}\text{F}{}_{1}\text{(A,B;C;z)=}\Gamma\text{(C)/[}\Gamma\text{(B)}\Gamma\text{(C}-\text{B)]}\\\text{}\cdot\text{}\int\text{\_0\textasciicircum{}1t\textasciicircum{}(B}-\text{1)(1}-\text{t)\textasciicircum{}(C}-\text{B}-\text{1)(1}-\text{zt)\textasciicircum{}(}-\text{A)dt.}\end{gathered}$$ [F1, F3, F4, step 249.1, algebra]

251.1 The beta identity follows directly from the double Gamma integral under $x=rs,y=r(1−s)$. Setting $z=1$ where $\operatorname{Re}(C−A−B)>0$ gives the first connection coefficient. Euler's transformation follows by substituting $(1−z)^{(C−A−B)}_{2}F₁(C−A,C−B;C;z)$ in (3) and comparing its value and analytic series at zero. Applying the same beta evaluation to that transform gives the other coefficient in the domain $\operatorname{Re}(A+B−C)>0$. The coefficients and solutions extend meromorphically in parameters: on a fixed path avoiding 0,1 the Picard integral series for the first-order ODE system converges locally uniformly in parameters, and the Frobenius coefficients are rational functions. Thus the identities from these nonempty parameter domains continue to every nonresonant point. [F1, F3, F4, step 250.1, algebra]

252.1 In the basis $G_−$ analytic at 1 and $G_+=(1−z)^{(C−A−B)}$ times its analytic Frobenius series, the resulting coefficients are [F1, F3, F4, step 251.1, algebra]

253.1 $$\begin{gathered}\text{F\_}-\text{=u G\_}-\text{+v G\_+,}\\\text{F\_+=w G\_}-\text{+x G\_+,}\\\text{u=}\Gamma\text{(C)}\Gamma\text{(C}-\text{A}-\text{B)/[}\Gamma\text{(C}-\text{A)}\Gamma\text{(C}-\text{B)],}\\\text{v=}\Gamma\text{(C)}\Gamma\text{(A+B}-\text{C)/[}\Gamma\text{(A)}\Gamma\text{(B)],}\\\text{w=}\Gamma\text{(2}-\text{C)}\Gamma\text{(C}-\text{A}-\text{B)/[}\Gamma\text{(1}-\text{A)}\Gamma\text{(1}-\text{B)],}\\\text{x=}\Gamma\text{(2}-\text{C)}\Gamma\text{(A+B}-\text{C)/[}\Gamma\text{(A}-\text{C+1)}\Gamma\text{(B}-\text{C+1)].}\end{gathered}$$ [F1, F3, F4, step 252.1, algebra]

254.1 Assume also C−A−B is a real noninteger and these coefficients are finite and nonzero; the remaining excluded Gamma hyperplanes are treated later by continuation. Single-valuedness at 1 forces $λuv+ηwx=0$. Thus $η/λ=−uv/(wx)$, which is exactly (2). The two common factors Γ(C−A−B),Γ(A+B−C) cancel. This accounts for every Gamma factor and sign. [F1, F3, F4, step 253.1, algebra]

255.1 **4. Determine λ by an actual fusion limit.** Since $a0<0$ and $a1<Q$, $1−C=−a0(Q−a1)>0$. The positive three-point charge a1+a0 is below Q, and its total equals the strict four-point total. In the probabilistic reduced integral the factor $|x−z|^{(−γa0)}|x|^{(−γa1)}$ tends to $|x|^(−γ(a1+a0))$. Off a small disk this is uniform. On outer annuli it obeys that fused singularity estimate; inside radius O(|z|), rescaling and the fractional moment bound give $C|z|^{[ξ(q)−γ(a1+a0)q]}$, with q small enough also for the individual a1 singularity. The exponent is strictly positive. An anchor disk controls all inverse moments, so the expectation of the negative power converges. Hence $T(z)→C_{sph}(a1+a0,a2,a3)$. Since $F_−→1$ and $F_+→0$, this is λ. [F1, F3, F4, step 254.1, algebra]

256.1 Every excluded nonresonant restriction is on a proper analytic hyperplane. Identities between continued correlators that are obtained from (1) extend across those restrictions after multiplying out the displayed Gamma denominators. One must not impose a nonresonance restriction on the final physical charge domain. [F1, F3, F4, step 255.1, algebra]

257.1 **Seventh DOZZ supplier: first probabilistic fusion coefficient and γ shift.** Research construction, using the actual GMC normalization, charge holomorphy, BPZ and hypergeometric suppliers already written. Fix $0<γ<\operatorname{sqrt}(2)$, $b=γ/2$, $β=γ²/2$, $Q=b+b^{(−1)}$. Work first in the nonempty real region [F1, F3, step 256.1, algebra]

258.1 $$\begin{gathered}\text{1/}\gamma\text{+b<}\alpha\text{1<2/}\gamma\text{,}\\\text{}\alpha\text{2,}\alpha\text{3<Q,}\\\text{}\alpha\text{1+}\alpha\text{2+}\alpha\text{3}-\text{b>2Q.}\end{gathered}$$ [F1, F3, step 257.1, algebra]

259.1 The spectator charges can for example be sufficiently close to Q. Put $κ=γ(Q−α1)∈(0,1)$, $s=(α1+α2+α3−b−2Q)/γ>0$. The reduced four-point function with the ACTUAL Gaussian vertex $V_−b$ satisfies [F1, F3, step 258.1, algebra]

260.1 $$\begin{gathered}\text{T\_}-\text{b(z)=C\_sph(}\alpha\text{1}-\text{b,}\alpha\text{2,}\alpha\text{3)}\\\text{+B\_b(}\alpha\text{1)C\_sph(}\alpha\text{1+b,}\alpha\text{2,}\alpha\text{3)|z|\textasciicircum{}}\kappa\text{+o(|z|\textasciicircum{}}\kappa\text{),    (1)}\\\text{B\_b(}\alpha\text{)=}-\text{}\mu\text{}\pi\text{/[}\ell\text{(}-\text{b}{}^{2}\text{)}\ell\text{(b}\alpha\text{)}\ell\text{(2+b}{}^{2}\text{}-\text{b}\alpha\text{)].             (2)}\end{gathered}$$ [F1, F3, step 259.1, algebra]

261.1 The generic connection coefficient $H=-uv/(wx)$ was derived from the Euler-beta connection matrix and single-valuedness in steps 252.1–254.1. Substituting the BPZ parameters for $a_0=-b$ gives the coefficient $H_b$ in (2), and consequently [F1, F3, step 260.1, algebra]

262.1 $$\begin{gathered}\text{B\_b(}\alpha\text{1)C\_sph(}\alpha\text{1+b,}\alpha\text{2,}\alpha\text{3)}\\\text{=H\_b(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3)C\_sph(}\alpha\text{1}-\text{b,}\alpha\text{2,}\alpha\text{3).             (3)}\end{gathered}$$ [F1, F3, step 261.1, algebra]

263.1 The identical ratio holds with $C_{KRV}=2C_{sph}$. No second screening potential or reflection formula is used. [F1, F3, step 262.1, algebra]

264.1 **1. Work with the exact positive random masses.** Put $A0=α1+α2+α3−b$ and [F1, F3, step 263.1, algebra]

265.1 $$\begin{gathered}\text{S\_z=}\int\text{|y|\_+\textasciicircum{}(}\gamma\text{A0)|y|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{1)|1}-\text{y|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{2)|y}-\text{z|\textasciicircum{}}\beta\text{ M}\gamma\text{(dy).}\end{gathered}$$ [F1, F3, step 264.1, algebra]

266.1 The first normalization supplier gives $T_−b(z)=γ^{(−1)}μ^{(−s)}Γ(s)E[S_z^{(−s)}]$. Let S0 be its value at $z=0$. Both masses are finite and positive. A fixed anchor disk away from 0,1 gives every inverse moment uniformly for |z| small. The leading fusion limit $T(0)=C_{sph}(α1−b,α2,α3)$ was already proved in the hypergeometric supplier. [F1, F3, step 265.1, algebra]

267.1 Write $S_t=(1−t)S0+tS_z$, $0≤t≤1$. The ordinary mean-value integral is exact: [F1, F3, step 266.1, algebra]

268.1 $$\begin{gathered}\text{E[S\_z\textasciicircum{}(}-\text{s)}-\text{S0\textasciicircum{}(}-\text{s)]}\\\text{=}-\text{s}\int\text{\_0\textasciicircum{}1E[S\_t\textasciicircum{}(}-\text{s}-\text{1)(S\_z}-\text{S0)]dt.             (4)}\end{gathered}$$ [F1, F3, step 267.1, algebra]

269.1 It can first be used with interaction cutoffs; the absolute bounds below justify its limit. [F1, F3, step 268.1, algebra]

270.1 **2. The part away from the fusion point is lower order.** Fix $δ∈(0,1/4)$. For $|y|≥δ$ and $|z|≤δ/4$, [F1, F3, step 269.1, algebra]

271.1 $$\begin{gathered}\text{||y}-\text{z|\textasciicircum{}}\beta\text{}-\text{|y|\textasciicircum{}}\beta\text{|}\le\text{C}\delta\text{ |z| |y|\textasciicircum{}}\beta\text{,}\end{gathered}$$ [F1, F3, step 270.1, algebra]

272.1 and on that region $S_t's$ integrand is uniformly comparable to S0's. Thus the absolute contribution of this region to the expectation in (4) is $≤Cδ|z| E[S_t^{(−s)}]$, uniformly in t, and hence Oδ(|z|) by the anchor inverse moments. Since $κ<1$, this is $o(|z|^κ)$. This argument avoids an unjustified Lebesgue bound on a screening singularity at the OTHER insertion $y=1$. [F1, F3, step 271.1, algebra]

273.1 **3. Local Gaussian tilt and the genuine fused charge.** On $|x|<δ$, the difference in (4) is integrable after one Gaussian tilt of Mγ(dx). The finite-cutoff square-completion identity reads [F1, F3, step 272.1, algebra]

274.1 $$\begin{gathered}\text{E[M}\gamma\text{(dx)F(M}\gamma\text{)]=dA0(x)E[F(e\textasciicircum{}[}\gamma\text{}{}^{2}\text{K(x,}\cdot\text{)]M}\gamma\text{)].}\end{gathered}$$ [F1, F3, step 273.1, algebra]

275.1 Removing cutoffs here is justified by the local integrable bounds below; it is not an assumed screening OPE. Let $S_t^{(x)}$ denote the tilted positive mass. For $x=zu$, with fixed $u≠0$, [F1, F3, step 274.1, algebra]

276.1 $$\begin{gathered}\text{S\_t\textasciicircum{}(zu) }\to\text{ }\rho\text{(}\alpha\text{1+b,}\alpha\text{2,}\alpha\text{3) in probability,}\end{gathered}$$ [F1, F3, step 275.1, algebra]

277.1 uniformly for $t∈[0,1]$. Indeed outside the cluster {0,z,zu} all weights converge uniformly. Inside a disk of size O(|z|), rescaling gives the fractional-moment factor [F1, F3, step 276.1, algebra]

278.1 $$\begin{gathered}\text{|z|\textasciicircum{}[}\xi\text{(q)}-\text{}\gamma\text{(}\alpha\text{1+b)q],}\end{gathered}$$ [F1, F3, step 277.1, algebra]

279.1 because the negative degenerate insertion contributes +β and the screening insertion contributes −γ², leaving total positive charge α1+b. This exponent is positive for sufficiently small q, since $α1+b<Q$. The individual positive singularities α1 and γ are also below Q; for fixed $u≠0$ their unit-scale annular estimates bound the rescaled integral. The interpolated factor $(1−t)|y|^β+t|y−z|^β$ is bounded by the sum of its endpoints, so the same estimate is uniform in t. Fixed outer cluster annuli have the fused-charge bound. These estimates prove the asserted probability convergence. The measure-zero value $u=0$ is irrelevant to the upcoming integral. [F1, F3, step 278.1, algebra]

280.1 The tilted mass is bounded below by a constant times the SAME anchor mass for every $x∈Bδ$, $t∈[0,1]$ and sufficiently small z. Hence [F1, F3, step 279.1, algebra]

281.1 $$\begin{gathered}\text{E[(S\_t\textasciicircum{}(zu))\textasciicircum{}(}-\text{s}-\text{1)]}\to\text{E[}\rho\text{(}\alpha\text{1+b,}\alpha\text{2,}\alpha\text{3)\textasciicircum{}(}-\text{s}-\text{1)],}\end{gathered}$$ [F1, F3, step 280.1, algebra]

282.1 with a uniform finite upper bound for all $x∈Bδ$ and t. The tilt adds $|y|_+^{(γ²)}$; the total background exponent becomes γ(A0+γ), exactly the sum of the new charges α1+b,α2,α3. No sphere-background factor has been suppressed. [F1, F3, step 281.1, algebra]

283.1 Changing variables $x=zu$ in the local tilted integral in (4) gives the power $|z|^{[2+β−γα1]}=|z|^κ$. The remaining absolute integrable kernel is [F1, F3, step 282.1, algebra]

284.1 $$\begin{gathered}\text{|u|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{1) ||u}-\text{1|\textasciicircum{}}\beta\text{}-\text{|u|\textasciicircum{}}\beta\text{|.}\end{gathered}$$ [F1, F3, step 283.1, algebra]

285.1 It is integrable at zero since $γα1<2$. At infinity the difference is $O(|u|^{(β−1)})$, and the absolute integral converges since $γα1>β+1$. These are exactly the two working inequalities above. The bounded tilted inverse expectation and $|1−zu|^{(−γα2)}$ on the local region give an integrable domination. Dominated convergence in (u,t) therefore proves that the coefficient of $|z|^κ$ in (4) is [F1, F3, step 284.1, algebra]

286.1 $$\begin{gathered}\text{}-\text{s E[}\rho\text{(}\alpha\text{1+b,}\alpha\text{2,}\alpha\text{3)\textasciicircum{}(}-\text{s}-\text{1)] }\cdot\text{ I,}\\\text{I=}\int\text{\_C |u|\textasciicircum{}(}-\text{}\gamma\text{}\alpha\text{1)(|u}-\text{1|\textasciicircum{}}\beta\text{}-\text{|u|\textasciicircum{}}\beta\text{)d}{}^{2}\text{u.            (5)}\end{gathered}$$ [F1, F3, step 285.1, algebra]

287.1 All signed Fubini operations are legitimate here: the last kernel is absolutely integrable, and the tilted inverse expectation is uniformly bounded. The outer region was already bounded without signed screening integration. [F1, F3, step 286.1, algebra]

288.1 **4. Evaluate I by elementary Gaussian integrals.** Put $a=γα1/2$, $v=β/2=b²$. Thus $(1+2v)/2<a<1$ and $0<v<1/2$. Use [F1, F3, step 287.1, algebra]

289.1 $$\begin{gathered}\text{|u|\textasciicircum{}(}-\text{2a)=}\Gamma\text{(a)\textasciicircum{}(}-\text{1)}\int\text{\_0\textasciicircum{}}\infty\text{r\textasciicircum{}(a}-\text{1)e\textasciicircum{}(}-\text{r|u|}{}^{2}\text{)dr,}\\\text{|u}-\text{1|\textasciicircum{}(2v)}-\text{|u|\textasciicircum{}(2v)}\\\text{=}\Gamma\text{(}-\text{v)\textasciicircum{}(}-\text{1)}\int\text{\_0\textasciicircum{}}\infty\text{t\textasciicircum{}(}-\text{v}-\text{1)}\\\text{[e\textasciicircum{}(}-\text{t|u}-\text{1|}{}^{2}\text{)}-\text{e\textasciicircum{}(}-\text{t|u|}{}^{2}\text{)]dt.}\end{gathered}$$ [F1, F3, step 288.1, algebra]

290.1 The second identity follows by integration by parts in t; $−1<−v<0$. Its integrand has a constant sign in t for each fixed u. Thus the absolute integrability of the kernel in (5) justifies inserting both representations and using Fubini. The u Gaussian integral is [F1, F3, step 289.1, algebra]

291.1 $$\begin{gathered}\text{}\pi\text{/(r+t)[e\textasciicircum{}(}-\text{rt/(r+t))}-\text{1].}\end{gathered}$$ [F1, F3, step 290.1, algebra]

292.1 Set $R=r+t$ and $w=r/(r+t)$. The R integral is [F1, F3, step 291.1, algebra]

293.1 $$\begin{gathered}\text{}\int\text{\_0\textasciicircum{}}\infty\text{R\textasciicircum{}(a}-\text{v}-\text{2)[e\textasciicircum{}(}-\text{Rw(1}-\text{w))}-\text{1]dR}\\\text{=}\Gamma\text{(a}-\text{v}-\text{1)[w(1}-\text{w)]\textasciicircum{}(}-\text{a+v+1),}\end{gathered}$$ [F1, F3, step 292.1, algebra]

294.1 valid since $−1<a−v−1<0$. The remaining beta integral is $\int _0^{1}w^v(1−w)^{(−a)}dw=Γ(1+v)Γ(1−a)/Γ(2+v−a)$. Consequently [F1, F3, step 293.1, algebra]

295.1 $$\begin{gathered}\text{I=}\pi\text{ }\Gamma\text{(1}-\text{a)}\Gamma\text{(1+v)}\Gamma\text{(a}-\text{v}-\text{1)}\\\text{/[}\Gamma\text{(a)}\Gamma\text{(}-\text{v)}\Gamma\text{(2+v}-\text{a)]}\\\text{=}\pi\text{/[}\ell\text{(a)}\ell\text{(}-\text{v)}\ell\text{(2+v}-\text{a)].                     (6)}\end{gathered}$$ [F1, F3, step 294.1, algebra]

296.1 Every integral in this computation is convergent in the actual working range; an assumed Coulomb-gas integral continuation was not used. [F1, F3, step 295.1, algebra]

297.1 **5. Match normalization and the actual monodromy coefficient.** The new three-point s parameter is s+1. Multiplying (5) by $γ^{(−1)}μ^{(−s)}Γ(s)$ and using $sΓ(s)=Γ(s+1)$ therefore gives exactly −μ I $C_{sph}(α1+b,α2,α3)$, not a freely chosen multiple. Equations (2) and (6) prove (1). [F1, F3, step 296.1, algebra]

298.1 In the proved hypergeometric solution, $2(1−C)=κ$ and $F_−(z)=1+O(z)$, $F_+(z)=z^{(1−C)}(1+O(z))$. Since $κ<1$, the O(|z|) analytic term is lower order than $|z|^κ$. Comparing the two actual expansions gives (3). This uses no assumed second fusion channel. [F1, F3, step 297.1, algebra]

299.1 By extended-charge-holomorphy.md both three-point factors are meromorphic in their charges. The identity (3), after multiplying out its displayed Gamma denominators, extends from this real open working region to the connected common continuation domain of the two triples. Resonant hypergeometric parameters are thus treated by meromorphic identity, not excluded from the conclusion. For α2,α3 close to Q this identity extends C in the α1 variable by successive γ shifts to a meromorphic strip around R: its original real interval has width greater than γ, and the proved identity on overlaps makes successive definitions agree. This supplies the first γ-shift continuation needed later. [F1, F3, step 298.1, algebra]

300.1 The reflection relation, reflection shift/inversion, and the dual 4/γ three-point shift are not consequences of this lemma alone. They remain subsequent obligations. [F1, F3, step 299.1, algebra]

301.1 **Eighth DOZZ supplier: reflected degenerate fusion near Q.** Research construction using the actual radial tail and GMC moments, not an assumed reflection axiom. Fix $0<γ<\operatorname{sqrt}(2)$, $b=γ/2$, $β=γ²/2<1$, and $α∈(Q−b,Q)$. Put $ν=Q−α∈(0,b)$, $p=2ν/γ∈(0,1)$, $κ=γν<1$. Let $α2,α3<Q$ and require $α+α2+α3−b>2Q$. Set $s=(α+α2+α3−b−2Q)/γ>0$ and $αr=2Q−α−b=Q+ν−b<Q$. The actual reduced four-point function with $V_−b$ has [F1, F3, F2, step 300.1, algebra]

302.1 $$\begin{gathered}\text{T\_}-\text{b(z)=C\_sph(}\alpha\text{}-\text{b,}\alpha\text{2,}\alpha\text{3)}\\\text{+R}\gamma\text{,}\mu\text{(}\alpha\text{)C\_sph(}\alpha\text{r,}\alpha\text{2,}\alpha\text{3)|z|\textasciicircum{}}\kappa\text{+o(|z|\textasciicircum{}}\kappa\text{).       (1)}\end{gathered}$$ [F1, F3, F2, step 301.1, algebra]

303.1 Here Rγ,μ is the probabilistically CONSTRUCTED $μ^pΓ(−p)pRbarγ(α)$, not an explicit special-function value. Both three-point constants in (1) are in their actual strict Seiberg domain: their parameters s and s+p are positive and their individual charges are below Q. [F1, F3, F2, step 302.1, algebra]

304.1 **1. A quantitative heavy-tail Laplace lemma.** Let $I≥0$ have $P(I>u)=c u^{(−p)}+O(u^{(−p−δ)})$, $0<p<1$, as in the radial tail supplier. For $s>0$ define $g(x)=E[(1+xI)^{(−s)}−1]$. Integrating the tail of I against the derivative of $(1+xu)^{(−s)}$ gives [F1, F3, F2, step 303.1, algebra]

305.1 $$\begin{gathered}\text{g(x)=c p }\Gamma\text{(}-\text{p)}\Gamma\text{(s+p)/}\Gamma\text{(s) }\cdot\text{x\textasciicircum{}p+O(x\textasciicircum{}(p+}\delta\text{}{}^{\prime}\text{)),    (2)}\end{gathered}$$ [F1, F3, F2, step 304.1, algebra]

306.1 where $0<δ'<\operatorname{min}(δ,1−p)$. The bound holds for $x≤1$ by splitting the u integral at $u=1$, using the tail error and changing variables $v=xu$. The omitted bounded interval contributes O(x), which is smaller than $x^{(p+δ')}$. For $x≥1$ the same remainder bound holds after increasing its constant, since $|g|≤1$ and $x^p≤x^{(p+δ')}$. The beta integral used here is [F1, F3, F2, step 305.1, algebra]

307.1 $$\begin{gathered}\text{}\int\text{\_0\textasciicircum{}}\infty\text{[(1+v)\textasciicircum{}(}-\text{s)}-\text{1]v\textasciicircum{}(}-\text{p}-\text{1)dv}\\\text{=}\Gamma\text{(}-\text{p)}\Gamma\text{(s+p)/}\Gamma\text{(s),}\end{gathered}$$ [F1, F3, F2, step 306.1, algebra]

308.1 proved by integration by parts followed by the ordinary beta integral; its endpoint convergence uses $0<p<1$. Thus, for any $A,λ>0$ independent of I, [F1, F3, F2, step 307.1, algebra]

309.1 $$\begin{gathered}\text{E[(A+}\lambda\text{I)\textasciicircum{}(}-\text{s)}-\text{A\textasciicircum{}(}-\text{s)|A,}\lambda\text{]}\\\text{=K\_s }\lambda\text{\textasciicircum{}p A\textasciicircum{}(}-\text{s}-\text{p)+O(}\lambda\text{\textasciicircum{}(p+}\delta\text{}{}^{\prime}\text{)A\textasciicircum{}(}-\text{s}-\text{p}-\text{}\delta\text{}{}^{\prime}\text{)),    (3)}\\\text{K\_s=c p }\Gamma\text{(}-\text{p)}\Gamma\text{(s+p)/}\Gamma\text{(s).}\end{gathered}$$ [F1, F3, F2, step 308.1, algebra]

310.1 This is a global bound, not only an asymptotic valid for deterministic A bounded away from zero. [F1, F3, F2, step 309.1, algebra]

311.1 **2. Split the exact GMC mass into coarse, middle and fine scales.** Write $|z|=e^{(−t)}$, and first fix $h≥1$. Let $S_z$ be the positive mass in the preceding first-fusion supplier. Let [F1, F3, F2, step 310.1, algebra]

312.1 $$\begin{gathered}\text{A\_t,h = S\_0 restricted to |y|>e\textasciicircum{}(}-\text{(t}-\text{h)),}\\\text{}\lambda\text{\_t,h = exp[}\gamma\text{B\_(t+h)}-\text{}\gamma\text{}\nu\text{(t+h)}-\text{}\beta\text{t].}\end{gathered}$$ [F1, F3, F2, step 311.1, algebra]

313.1 The fine region $|y|<e^(−(t+h))$ has $|y−z|^β=e^{(−βt)}(1+O(e^{(−h)}))$ and $|1−y|^{(−γα2)}=1+O(e^{(−t−h)})$. Radial decomposition therefore sandwiches its mass between $(1±Ce^{(−h)})λ_t,h$ Iα,fine, with the same stationary lateral noise beyond t+h. The fresh radial Brownian motion after t+h is independent of all coarse radial data. [F1, F3, F2, step 312.1, algebra]

314.1 We record the error rates rather than dropping the middle annulus. Define [F1, F3, F2, step 313.1, algebra]

315.1 $$\begin{gathered}\text{f(r)=}\gamma\text{(}\nu\text{+b)r}-\text{}\gamma\text{}{}^{2}\text{r}{}^{2}\text{/2.}\end{gathered}$$ [F1, F3, F2, step 314.1, algebra]

316.1 Then $f(p)=κ$ and $f'(p)=γ(b−ν)>0$. Choose $p<r<1$ sufficiently close to p, and a Hölder exponent $q>1$ sufficiently close to one, so $rq<1$ and both r and f(rq)/q exceed κ. All choices have strict margins. [F1, F3, F2, step 315.1, algebra]

317.1 The S0 mass omitted below radius $e^(−(t−h))$ is a radial integral with effective charge α−b and drift ν+b. Its rq moment is bounded by $C_h$ exp[−f(rq)t], since $rq<p+1$ is below its singular threshold. The middle-annulus $S_z$ mass has the same rate: after radial rescaling its Brownian factor has moment exp[−f(rq)t], and the remaining bounded-width cylinder mass has a finite rq moment. On the local coarse annuli $e^(−(t−h))<|y|<δ$, the kernel difference has the bound $C|z||y|^{(β−1)}$. The annular rq moments therefore sum as [F1, F3, F2, step 316.1, algebra]

318.1 $$\begin{gathered}\text{E|coarse difference|\textasciicircum{}(rq)}\\\text{}\le\text{C\_h exp[}-\text{min(rq,f(rq))t]}\end{gathered}$$ [F1, F3, F2, step 317.1, algebra]

319.1 (up to a harmless polynomial factor in the equality case, absorbed in the strict rate margin). Outside a fixed δ disk, relative kernel comparison bounds its negative-power contribution by Oδ(|z|), as in the first-fusion proof. [F1, F3, F2, step 318.1, algebra]

320.1 To pass from these mass errors to negative powers, use, for $0<r<1$, [F1, F3, F2, step 319.1, algebra]

321.1 $$\begin{gathered}\text{|x\textasciicircum{}(}-\text{s)}-\text{y\textasciicircum{}(}-\text{s)|}\le\text{C\_(s,r)|x}-\text{y|\textasciicircum{}r min(x,y)\textasciicircum{}(}-\text{s}-\text{r).}\end{gathered}$$ [F1, F3, F2, step 320.1, algebra]

322.1 All compared masses contain the same fixed anchor region. Its inverse moments of every order, followed by Hölder with the selected q, give an expectation error $o(e^{(−κt)})$ for fixed h. No raw high moment near the other insertion α2 is required: that region was handled by relative comparison. Consequently the desired difference reduces to [F1, F3, F2, step 321.1, algebra]

323.1 $$\begin{gathered}\text{E[(A\_t,h+}\lambda\text{\_t,h I}\alpha\text{,fine)\textasciicircum{}(}-\text{s)}-\text{A\_t,h\textasciicircum{}(}-\text{s)]}\end{gathered}$$ [F1, F3, F2, step 322.1, algebra]

324.1 with fine prefactors $1±Ce^{(−h)}$, up to $o(e^{(−κt)})$. The remaining dependence through lateral noise is handled next. [F1, F3, F2, step 323.1, algebra]

325.1 **3. Remove the lateral dependence with an explicit OU coupling.** The nth lateral mode is stationary OU with covariance $e^{(−n|s−s'|)}$. Its value after t+h+s is the propagated value at t−h plus independent innovations. Replace that value at t−h by an independent stationary Gaussian copy, keeping the future innovations. This constructs a stationary fine field Y′ independent of the coarse field up to t−h. Their difference at every $s≥0$ and θ is bounded by [F1, F3, F2, step 324.1, algebra]

326.1 $$\begin{gathered}\text{sup|Y(t+h+s,}\theta\text{)}-\text{Y}{}^{\prime}\text{(t+h+s,}\theta\text{)|}\\\text{}\le\text{e\textasciicircum{}(}-\text{2h)(W\_coarse+W\_fine),                   (4)}\end{gathered}$$ [F1, F3, F2, step 325.1, algebra]

327.1 where W is a sum of absolute Gaussian coordinates with summable weights C $e^(−2(n−1))/\operatorname{sqrt}(n)$. It has every linear exponential moment, uniformly in t and $h≥1$. This follows term by term from the OU solution; the sum bound also controls all future s because its propagation decays further by $e^{(−ns)}$. Wick variance is unchanged because both fields are stationary with the same covariance. Thus their fine chaos masses are bounded multiplicatively by $\operatorname{exp}[±γe^{(−2h)}(W_{coarse}+W_{fine})]$. The field Y′ and the fresh radial Brownian motion give an Iα′ with exactly the law of the radial singular mass Iα, independent of $A_t,h$ and $λ_t,h$. [F1, F3, F2, step 326.1, algebra]

328.1 Here is the quantitative control for that multiplicative replacement, including its correlation with Iα′. In the maximum decomposition $Iα'≤e^{(γM)}Sν$, M is exponential of rate γp. Conditional on M, Sν has all moments below 4/γ² uniformly; the lateral field is stationary even after the Brownian-measurable time shift. $W_{fine}$ is Gaussian independently of M. For a small ε and $Hε=ε W_{fine} e^{(CεW_{fine})}$, Hölder with a moment strictly above p therefore gives [F1, F3, F2, step 327.1, algebra]

329.1 $$\begin{gathered}\text{E[H}\varepsilon\text{ 1\_(I}\alpha\text{}{}^{\prime}\text{>u)]}\le\text{C}\varepsilon\text{ min(1,u\textasciicircum{}(}-\text{p)).                (5)}\end{gathered}$$ [F1, F3, F2, step 328.1, algebra]

330.1 For precision, condition on $M=m$, use E[Hε]+E[Hε $Sν^a]≤Cε$ for some $p<a<4/γ²$, bound the conditional indicator by $\operatorname{min}(1,e^{(γam)}u^{(−a)})$, then integrate the exponential density of M. This gives (5). All Hölder exponents fit inside the strict positive-moment margin. The coarse W factor is held fixed in this calculation. [F1, F3, F2, step 329.1, algebra]

331.1 For $x≥0$, [F1, F3, F2, step 330.1, algebra]

332.1 $$\begin{gathered}\text{|(1+e\textasciicircum{}v x)\textasciicircum{}(}-\text{s)}-\text{(1+x)\textasciicircum{}(}-\text{s)|}\\\text{}\le\text{C\_s |v|e\textasciicircum{}(C\_s|v|)min(x,1).}\end{gathered}$$ [F1, F3, F2, step 331.1, algebra]

333.1 Integrating (5) from 0 to 1/x gives E[Hε $\operatorname{min}(xIα',1)]≤Cε x^p$, since $p<1$. With $x=λ/A$ this bounds the fine-field replacement by [F1, F3, F2, step 332.1, algebra]

334.1 $$\begin{gathered}\text{C}\varepsilon\text{ }\lambda\text{\textasciicircum{}p A\textasciicircum{}(}-\text{s}-\text{p)}\end{gathered}$$ [F1, F3, F2, step 333.1, algebra]

335.1 times $(1+W_{coarse})e^{(CεW_{coarse})}$. Apply the Brownian tilt of step 4 and then the anchor inverse moments and Gaussian exponential moments of $W_{coarse}$; its expectation is $≤Cε e^{(−κt)}$. Taking $ε=e^{(−2h)}$ proves that the OU replacement costs $O(e^{(−2h)}e^{(−κt)})$. The deterministic $1±Ce^{(−h)}$ fine factors have the same bound with $ε=O(e^{(−h)})$. Thus no unproved independence of the actual fine and coarse chaos is used. [F1, F3, F2, step 334.1, algebra]

336.1 **4. Apply the tail lemma and identify the reflected charge by Gaussian tilt.** Now Iα′ is independent of $A=A_t,h$ and $λ=λ_t,h$, so (3) applies with $c=Rbarγ(α)$. Decrease δ′ if necessary so $f(p+δ')>κ$. Its remainder has expectation $O_h(e^{[−f(p+δ')t]})$: write the corresponding lognormal power as its mean times a Brownian exponential martingale. That tilt changes only bounded weights on the fixed anchor disk, uniformly in t, so all needed inverse moments remain bounded. Hence this error is $o(e^{(−κt)})$. [F1, F3, F2, step 335.1, algebra]

337.1 For the main term the cancellation is exact: [F1, F3, F2, step 336.1, algebra]

338.1 $$\begin{gathered}\text{}\lambda\text{\_t,h\textasciicircum{}p=e\textasciicircum{}(}-\text{}\kappa\text{t)}\\\text{exp[2}\nu\text{B\_(t+h)}-\text{2}\nu\text{}{}^{2}\text{(t+h)].                     (6)}\end{gathered}$$ [F1, F3, F2, step 337.1, algebra]

339.1 Tilting by this Brownian martingale adds 2νs to the radial field at every coarse time $s≤t−h$. It therefore changes the coarse charge α−b to $α−b+2ν=αr$. In full sphere notation it multiplies the interaction by $e^{[2γνK(0,y)]}=|y|^{(−2γν)}|y|_+^{(2γν)}$, so it changes the background sum as well, not just the local power. Outside the unit disk this factor is one, exactly as required. Since $αr<Q$, charged mass convergence and anchor domination give [F1, F3, F2, step 338.1, algebra]

340.1 $$\begin{gathered}\text{e\textasciicircum{}(}\kappa\text{t)E[}\lambda\text{\_t,h\textasciicircum{}p A\_t,h\textasciicircum{}(}-\text{s}-\text{p)]}\\\text{}\to\text{E[}\rho\text{(}\alpha\text{r,}\alpha\text{2,}\alpha\text{3)\textasciicircum{}(}-\text{s}-\text{p)].                    (7)}\end{gathered}$$ [F1, F3, F2, step 339.1, algebra]

341.1 Equations (3), (6), (7) and the preceding error bounds show that, for fixed h, the scaled fusion coefficient differs from [F1, F3, F2, step 340.1, algebra]

342.1 $$\begin{gathered}\text{Rbar}\gamma\text{(}\alpha\text{) p}\Gamma\text{(}-\text{p)}\Gamma\text{(s+p)/}\Gamma\text{(s)}\\\text{}\cdot\text{E[}\rho\text{(}\alpha\text{r,}\alpha\text{2,}\alpha\text{3)\textasciicircum{}(}-\text{s}-\text{p)]}\end{gathered}$$ [F1, F3, F2, step 341.1, algebra]

343.1 by at most $C(e^{(−h)}+e^{(−2h)})$. Let $t→∞$ and then $h→∞$. Multiplication by the actual common factor $γ^{(−1)}μ^{(−s)}Γ(s)$ gives precisely [F1, F3, F2, step 342.1, algebra]

344.1 $$\begin{gathered}\text{[}\mu\text{\textasciicircum{}p}\Gamma\text{(}-\text{p)pRbar}\gamma\text{(}\alpha\text{)]}\\\text{}\cdot\text{[}\gamma\text{\textasciicircum{}(}-\text{1)}\mu\text{\textasciicircum{}(}-\text{s}-\text{p)}\Gamma\text{(s+p)E}\rho\text{\_ref\textasciicircum{}(}-\text{s}-\text{p)],}\end{gathered}$$ [F1, F3, F2, step 343.1, algebra]

345.1 which is $Rγ,μ(α)C_{sph}(αr,α2,α3)$. This proves (1). The estimates are uniform in arg z: the fine comparison uses |y/z|, the radial covariance is rotationally invariant, and the other insertion weights converge uniformly near zero. Thus the asymptotic is genuinely in |z| and not only along the positive axis. [F1, F3, F2, step 344.1, algebra]

346.1 **5. What this supplies, and what it does not.** Comparing (1) with the independently constructed hypergeometric solution, where the analytic O(z) terms are lower order than $|z|^κ$, gives the actual identity [F1, F3, F2, step 345.1, algebra]

347.1 $$\begin{gathered}\text{H\_b(}\alpha\text{,}\alpha\text{2,}\alpha\text{3)C\_sph(}\alpha\text{}-\text{b,}\alpha\text{2,}\alpha\text{3)}\\\text{=R}\gamma\text{,}\mu\text{(}\alpha\text{)C\_sph(2Q}-\text{}\alpha\text{}-\text{b,}\alpha\text{2,}\alpha\text{3).                (8)}\end{gathered}$$ [F1, F3, F2, step 346.1, algebra]

348.1 Both C factors are analytic in the real strict domain, and the denominator is positive there. Thus (8) also gives a charge-analytic representation of R in this near-Q interval; it must not be replaced by an assumed reflection amplitude. With the first γ shift it supplies data for the gluing step, but it does not yet prove the reflection b-shift, global inversion, dual shift or full DOZZ formula. Those remain separate obligations. [F1, F3, F2, step 347.1, algebra]

349.1 **Upsilon shifts, full zero divisor, and the two exact DOZZ shift ratios.** Complementary research authoring agreed with the DOZZ owner. No probabilistic fusion coefficient, shift equation for an actual correlation, or DOZZ identification is assumed or proved here. The input special function is exactly the actual Definition's integral, with $b=γ/2>0$, $Q=b+b^{-1}$. For the bootstrap $0<b²<1/2$; the Upsilon construction below itself holds for every $b>0$. All powers of b, h, and K use the real logarithm when their base is positive. The Gamma-ratio identities are identities of meromorphic functions; an intermediate quotient at a simultaneous zero/pole is never evaluated separately. [F1, F5, step 348.1, algebra]

350.1 **1. Both shifts directly from the defining integral.** For $0<\operatorname{Re} x<Q$ let [F1, F5, step 349.1, algebra]

351.1 $f_b(x)=\operatorname{log} \Upsilon_b(x) =\int _{0}^∞ [(Q/2−x)²e^{-t}−\operatorname{sinh}²((Q/2−x)t/2)/(\operatorname{sinh}(bt/2)\operatorname{sinh}(t/(2b)))]dt/t$. [F1, F5, step 350.1, algebra]

352.1 Absolute locally uniform convergence on this strip is the actual defining-integral supplier. The integral is unchanged under $x↦Q−x$ and $b↦1/b$. Thus $\Upsilon_b(Q−x)=\Upsilon_b(x)$, $\Upsilon_b=\Upsilon_{1/b}$ on the strip and $\Upsilon_b(Q/2)=1$. [F1, F5, step 351.1, algebra]

353.1 First suppose $0<\operatorname{Re} x<Q−b=1/b$, so both x and x+b lie in the strip. Put $y=bx$. Subtract their integrands. The difference of the quadratic terms is 2bx−1. The elementary identity [F1, F5, step 352.1, algebra]

354.1 sinh²((Q/2−x−b)t/2)−sinh²((Q/2−x)t/2) $=−\operatorname{sinh}((1/(2b)−x)t)\operatorname{sinh}(bt/2)$ [F1, F5, step 353.1, algebra]

355.1 gives, after $t=bu$, [F1, F5, step 354.1, algebra]

356.1 $f_b(x+b)−f_b(x) =\int _{0}^∞ [(2y−1)e^{-bu}+(e^{-yu}−e^{-(1−y)u})/(1−e^{-u})]du/u$.                  (25) [F1, F5, step 355.1, algebra]

357.1 For $0<\operatorname{Re} y<1$, the Gamma integral/product gives Malmsten's difference formula [F1, F5, step 356.1, algebra]

358.1 log Γ(y)−log Γ(1−y) $=\int _{0}^∞ [(2y−1)e^{-u}+(e^{-yu}−e^{-(1−y)u})/(1−e^{-u})]du/u$.                  (26) [F1, F5, step 357.1, algebra]

359.1 Here is a derivation sufficient to fix its constant. Integration by parts in the beta integral gives $B(y,N+1)=N!/[y(y+1)…(y+N)]$. The substitution $v=Nt$ and dominated convergence yield $N^yB(y,N+1)→Γ(y)$, locally uniformly in Re $y>0$. Taking the ratio for y and 1−y, writing each logarithmic factor as the integral of an exponential difference, and summing the finite geometric series gives (26); the cancellations at $u=0$ are uniform on compact substrips, and at infinity they decay exponentially. Alternatively differentiating the same finite products gives (26)'s derivative, and its value zero at $y=1/2$ fixes the constant. Use the branch real on (0,1); analyticity then fixes it on the strip. [F1, F5, step 358.1, algebra]

360.1 Subtracting (26) from (25), Frullani's elementary integral $\int (e^{-bu}−e^{-u})du/u=−\operatorname{log}$ b gives [F1, F5, step 359.1, algebra]

361.1 $\Upsilon_b(x+b)=ℓ(bx)b^{1−2bx}\Upsilon_b(x)$,   $ℓ(t)=Γ(t)/Γ(1−t)$.                            (27) [F1, F5, step 360.1, algebra]

362.1 To verify Frullani without a separate supplier, differentiate the left side in $b>0$ to get −1/b and evaluate at $b=1$. The exponential integral bounds justify differentiation. Applying the already proved formula with b replaced by 1/b and using $\Upsilon_b=\Upsilon_{1/b}$ gives [F1, F5, step 361.1, algebra]

363.1 $\Upsilon_b(x+1/b)=ℓ(x/b)b^{2x/b−1}\Upsilon_b(x)$.                                          (28) [F1, F5, step 362.1, algebra]

364.1 Thus neither shift is imported as a characterization or inferred from the other at irrational parameters. In unified form, for $h=b$ or 1/b, [F1, F5, step 363.1, algebra]

365.1 $S_h(x):=\Upsilon_b(x+h)/\Upsilon_b(x)=ℓ(hx)h^{1−2hx}$.                                    (29) [F1, F5, step 364.1, algebra]

366.1 **2. Entire continuation and every multiplicity, including rational b².** The integral also constructs the full entire function directly; this avoids any rational-period uniqueness assumption. Set $t=x−Q/2$ and $a_{mn}=Q/2+mb+n/b$, $m,n≥0$. Define the finite real constant [F1, F5, step 365.1, algebra]

367.1 $κ_b=\int _{0}^∞ [e^{-u}−u²\sum _{m,n≥0}e^{-a_{mn}u}]du/u$. [F1, F5, step 366.1, algebra]

368.1 Indeed $\sum e^{-a_{mn}u}=1/[4\operatorname{sinh}(bu/2)\operatorname{sinh}(u/(2b))]=u^{-2}+O(1)$ near zero, so the numerator is O(u); at infinity it decays exponentially. The product [F1, F5, step 367.1, algebra]

369.1 $F_b(x)=\operatorname{exp}(κ_b t²) \prod _{m,n≥0}(1−t²/a_{mn}²) \operatorname{exp}(t²/a_{mn}²)$                     (30) [F1, F5, step 368.1, algebra]

370.1 converges locally uniformly to an entire function. On every fixed b, $a_{mn}≥c_b(1+m+n)$, and $\sum a_{mn}^{−4}<∞$. The logarithm of each factor after its linear-in-t² subtraction is $O_K(a_{mn}^{−4})$, so the tail converges uniformly on every compact set. No ordering of the double product affects it. [F1, F5, step 369.1, algebra]

371.1 For |Re $t|<Q/2$ expand the denominator in the integral as $4\sum e^{-a_{mn}u}$. The identity [F1, F5, step 370.1, algebra]

372.1 log(1−t²/a²)+t²/a² $=\int _{0}^∞ [−2e^{-au}(\operatorname{cosh}(tu)−1)+t²u²e^{-au}]du/u$ [F1, F5, step 371.1, algebra]

373.1 follows by integrating the differences of the three exponentials (or differentiating in t and evaluating at $t=0$). Summing this formula is legitimate: near zero its canceled numerator is bounded by $C_Ku⁴\sum e^{-a_{mn}u}=O_K(u²)$, and at infinity |Re $t|<Q/2$ gives exponential decay. Adding $κ_bt²$ gives exactly the defining log integral. Thus $F_b=\Upsilon_b$ on its original strip. Formula (30) is its unique entire continuation. Equations (27)–(29) and reflection therefore hold globally as meromorphic identities; both shifts are compatible because they agree with this same entire function. [F1, F5, step 372.1, algebra]

374.1 There are no hidden zeros from the exponential or convergent product tail. Its zeros are exactly [F1, F5, step 373.1, algebra]

375.1 $x=−mb−n/b$   and   $x=Q+mb+n/b$,   $m,n≥0$,                                      (31) [F1, F5, step 374.1, algebra]

376.1 with multiplicity equal to the number of ordered pairs (m,n) producing that value. Each individual factor in (30) has a simple zero at its two distinct roots, and only finitely many factors vanish at any fixed root. If b² is irrational these multiplicities are one. If $b²=u/v$ with coprime positive integers u,v, write $mb+n/b=(mu+nv)/\sqrt{uv}$; the multiplicity at $−k/\sqrt{uv}$, or its reflected point $Q+k/\sqrt{uv}$, is exactly [F1, F5, step 375.1, algebra]

377.1 $\#\{(m,n)\in\mathbb N_0^2: mu+nv=k\}$.                                                       (32) [F1, F5, step 376.1, algebra]

378.1 Only represented k occur. This formula includes all collisions for rational b²; no limit through irrational parameters is required to prove it. In particular $x=0$ is simple and $\Upsilon_b'(0)≠0$. More exactly (27) near $x=0$ gives $\Upsilon_b(x)∼x\Upsilon_b(b)$, so $\Upsilon_b'(0)=\Upsilon_b(b)>0$. The positivity follows from the original real strip integral. [F1, F5, step 377.1, algebra]

379.1 Formula (30) and the integral for $κ_b$ are locally uniform also in b on compact subsets of $(0,∞)$, by the same bounds. Thus real-b continuity and all rational-parameter limits used below are controlled by an explicit entire product, not by an assertion of two incommensurable periods. [F1, F5, step 378.1, algebra]

380.1 **3. Exact candidate ratio with no Gamma simplification omitted.** Use the actual candidate [F1, F5, step 379.1, algebra]

381.1 $D(α₁,α_{2},α₃)=K^{(2Q−α₁−α_{2}−α₃)/(2b)} \Upsilon_b'(0)\prod _{i=1}^{3}\Upsilon_b(α_i)$ / $[\Upsilon_b(s−Q)\prod _{i=1}^{3}\Upsilon_b(s−α_i)]$, [F1, F5, step 380.1, algebra]

382.1 $s=(α₁+α_{2}+α₃)/2$,  $K=πμℓ(b²)b^{2−2b²}$. [F1, F5, step 381.1, algebra]

383.1 In the bootstrap range $K>0$. Fix $h=b$ or 1/b and put $x=α₁$, [F1, F5, step 382.1, algebra]

384.1 $u_{0}=s−Q$,  $u₁=s−x$,  $u_{2}=s−α_{2}$,  $u₃=s−α₃$. [F1, F5, step 383.1, algebra]

385.1 Shift x by ±h. The numerator Υ(x) changes by two h steps; the denominator arguments u₀,u₂,u₃ increase with x, whereas u₁ decreases. Therefore directly from (29), [F1, F5, step 384.1, algebra]

386.1 D(x+h,α₂,α₃)/D(x−h,α₂,α₃) $=K^{-h/b} S_h(x)S_h(x−h)S_h(u₁−h/2) /[S_h(u_{0}−h/2)S_h(u_{2}−h/2)S_h(u₃−h/2)]$.                               (33) [F1, F5, step 385.1, algebra]

387.1 The total exponent of h in this quotient is [F1, F5, step 386.1, algebra]

388.1 (1−2hx)+(1−2h(x−h))+(1−2h(u₁−h/2)) $−\sum _{j=0,2,3}(1−2h(u_j−h/2)) =2h(u_{0}+u_{2}+u₃−u₁−2x)=−2hQ$. [F1, F5, step 387.1, algebra]

389.1 Consequently the exact simplified ratio is [F1, F5, step 388.1, algebra]

390.1 $R_h=K^{-h/b}h^{-2hQ}$ ℓ(hx)ℓ(hx−h²)ℓ(h(u₁−h/2)) /[ℓ(h(u₀−h/2))ℓ(h(u₂−h/2))ℓ(h(u₃−h/2))].                           (34) [F1, F5, step 389.1, algebra]

391.1 This calculation fixes the often important h-power; it is independent of the external charges. [F1, F5, step 390.1, algebra]

392.1 **4. Comparison with the BPZ connection coefficient.** The connection matrix and its single-valuedness constraint were derived in steps 249.1–254.1. Specialize them to degenerate charge $a_0=-h$; the hypergeometric parameters are [F1, F5, step 391.1, algebra]

393.1 $A=(a_{0}/2)(Q−2a_{0}−x−α_{2}−α₃)−1/2$, $B=(a_{0}/2)(Q−x−α_{2}+α₃)+1/2$, $C=1+a_{0}(Q−x)$, [F1, F5, step 392.1, algebra]

394.1 $H=−Γ(C)²Γ(1−A)Γ(1−B)Γ(A−C+1)Γ(B−C+1)$ /[Γ(2−C)²Γ(C−A)Γ(C−B)Γ(A)Γ(B)].                                     (35) [F1, F5, step 393.1, algebra]

395.1 No connection proof is duplicated here. Since $hQ=h²+1$, direct substitution gives [F1, F5, step 394.1, algebra]

396.1 $A=h(u_{0}−h/2)$,   $B=h(u₃−h/2)$,   $C=hx−h²$, $A−C+1=h(u₁−h/2)$,   $C−B=h(u_{2}−h/2)$. [F1, F5, step 395.1, algebra]

397.1 Put $D₁=A−C+1$ and $E=C−B$. The Gamma factors in (35) group exactly into [F1, F5, step 396.1, algebra]

398.1 $H=−[Γ(C)²/Γ(2−C)²]$ ℓ(D₁)/[ℓ(A)ℓ(B)ℓ(E)].                                  (36) [F1, F5, step 397.1, algebra]

399.1 Indeed $C−A=1−D₁$ and $B−C+1=1−E$. The ratio (34) is [F1, F5, step 398.1, algebra]

400.1 $R_h=K^{-h/b}h^{-2hQ}ℓ(hx)ℓ(C)ℓ(D₁)/[ℓ(A)ℓ(E)ℓ(B)]$.                         (37) [F1, F5, step 399.1, algebra]

401.1 Gamma recurrence gives [F1, F5, step 400.1, algebra]

402.1 $Γ(C)²/Γ(2−C)²=ℓ(C)²/(1−C)²$, $ℓ(2−C)=−(1−C)²/ℓ(C)$,   $ℓ(t)ℓ(−t)=−1/t²$.                                  (38) [F1, F5, step 401.1, algebra]

403.1 Combining (36)–(38), [F1, F5, step 402.1, algebra]

404.1 $H/R_h=−K^{h/b}h^{2hQ}ℓ(C)/[(1−C)²ℓ(hx)]$.                                   (39) [F1, F5, step 403.1, algebra]

405.1 Let $μ_b=μ$ and define the dual normalization by [F1, F5, step 404.1, algebra]

406.1 $πμ_{1/b}ℓ(1/b²)=(πμℓ(b²))^{1/b²}$.                                          (40) [F1, F5, step 405.1, algebra]

407.1 For $h=b$ one has $K^{h/b}h^{2hQ}=πμℓ(b²)b⁴$. For $h=1/b$ it equals $(πμℓ(b²))^{1/b²}b^{-4}=πμ_{1/b}ℓ(1/b²)h⁴$. Thus in both cases, using the last identity in (38), [F1, F5, step 406.1, algebra]

408.1 $πμ_h/ℓ(−h²)=−K^{h/b}h^{2hQ}$.                                                (41) [F1, F5, step 407.1, algebra]

409.1 For the probabilistic fusion coefficient requested by the DOZZ owner, [F1, F5, step 408.1, algebra]

410.1 $B_h(x)=−πμ_h/[ℓ(−h²)ℓ(hx)ℓ(2+h²−hx)]$,                                     (42) [F1, F5, step 409.1, algebra]

411.1 equations (38) and $C=hx−h²$ transform it into [F1, F5, step 410.1, algebra]

412.1 $B_h(x)=πμ_h$ ℓ(C)/[ℓ(−h²)(1−C)²ℓ(hx)]. [F1, F5, step 411.1, algebra]

413.1 By (41) this is exactly (39). Therefore, with every normalization retained, [F1, F5, step 412.1, algebra]

414.1 $D(x+h,α_{2},α₃)/D(x−h,α_{2},α₃)=H/B_h(x)$,   $h=b$ and $h=1/b$.                         (43) [F1, F5, step 413.1, algebra]

415.1 **5. Resonances and limits are part of the identity.** The derivation first takes generic charge parameters so no displayed Gamma factor has a pole; multiplication clears denominators and extends the identities meromorphically to all charge parameters. At rational b² the zero multiplicities are exactly (32), not generically simple. At, for example, 1/b² an integer, $μ_{1/b}$ as a separately written quotient in (40) need not be finite. It is a *meromorphic dual normalization*, not the assertion of a new positive finite cosmological coupling. Always combine $πμ_h/ℓ(−h²)$ as in (41) **before** taking the parameter value. The right side of (41) is finite and nonzero for every b in the bootstrap range, so the complete ratio identity has its well-defined meromorphic limit. The formula for $R_h$ in (33), in terms of entire Υ, also gives the direct continuation at such parameters. Neither rational b² nor a coincident zero is excluded from the eventual probabilistic theorem by this algebra. [F1, F5, step 414.1, algebra]

416.1 **Scope and reading limits.** The construction starts from the actual $\Upsilon$ defining integral and the exact actual DOZZ Definition. The Gamma formulas used above are derived from its Euler/beta product. The hypergeometric connection coefficient and branch are fixed by the locally derived Euler-beta connection matrix and single-valuedness calculation in steps 249.1–254.1, then specialized in steps 392.1–404.1. No probabilistic interpretation of $H$, $B_h$, reflection, a tail constant, or a correlation shift was supplied as an external premise. This proves the special-function identities required once the separate fusion calculation actually yields (42). [F1, F5, step 415.1, algebra]

417.1 **Two-pole holomorphic subtraction beyond the first moment boundary.** Research analytic supplier for the probabilistic reflection shift, not a reflection/fusion assumption. It uses the actual unshifted Gaussian hole construction, the already proved local positive/inverse/mixed moments, and the DOZZ owner's smooth-weight strict-tail extension of its centered reflection tail. The latter is the now-authored ../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-liouville-dozz/smooth-weighted-local-tail.md, SHA256 aa7e8db06672238129cc8ee08995ed706b6656d08d12f3fe0953fec0a2f35d74; the separated mixed-moment input is reflection-three-to-two-residue-bridge.md §2, SHA256 152c7cd0ee679e16aaecff6958c20dcd2c6c444d30752f19b856270d623a2459. These are exact research suppliers, not a claim of production admission. No DOZZ formula is used. [F1, F3, step 416.1, algebra]

418.1 Fix $0<γ<\sqrt{2}$, $Q=2/γ+γ/2$. Choose $η>0$ sufficiently small and set [F1, F3, step 417.1, algebra]

419.1 $a_{2}=2/γ+η$, $a₃=2/γ−η$, $p_{2}=2(Q−a_{2})/γ=1−2η/γ$, $p₃=2(Q−a₃)/γ=1+2η/γ$. [F1, F3, step 418.1, algebra]

420.1 Choose finite distinct z₂,z₃ with $|z_i|>4$ and $|z_{2}−z₃|>4$; affine covariance permits this. The third point is 0. Let Mγ be the actual spherical GMC, including $dA_{0}=|x|_+^{-4}d²x$, and define for real ε [F1, F3, step 419.1, algebra]

421.1 $Z_A(ε)=\int _A |x|_+^{γ(ε+a_{2}+a₃)} |x|^{-γε} |x−z_{2}|^{-γa_{2}}|x−z₃|^{-γa₃}Mγ(dx)$. [F1, F3, step 420.1, algebra]

422.1 On $D_i=B₁(z_i)$, $|x|_+=|x|$, so $X_i:=Z_{D_i}(ε)$ is independent of ε. Put $Y=X_{2}+X₃$ and $q(ε)=1−ε/γ$. Neither $E[Y^{q(ε)}]$ nor $E[Z_C(ε)^{q(ε)}]$ is presumed finite below $ε=2η$. Their difference will be defined inside one expectation before any subtraction of infinite quantities. [F1, F3, step 421.1, algebra]

423.1 **1. Exact local inputs and a proved two-term sum tail.** The smooth-weight tail interface delivered by the DOZZ owner is: on each $D_i$, [F1, F3, step 422.1, algebra]

424.1 $P(X_i>t)=c_i t^{-p_i}+O(t^{-p_i−δ_*})$, $c_i=|z_i|^{4a_i(a_i−Q)}F_i(z_i)^{p_i} Rbarγ(a_i)$, $F_i(x)=|x|⁴ |x−z_j|^{-γa_j}$, $j≠i$.                              (1) [F1, F3, step 423.1, algebra]

425.1 The exponent $δ_*>0$ and constants are uniform as $a_i$ vary in a compact sufficiently small neighborhood of 2/γ. It is obtained from the actual centered Brownian/OU tail by cutting at $L=c$ log t and estimating the smooth-weight and covariance remainder, not by a DOZZ identity. The separated mixed-moment supplier gives $E[X_{2}^r X₃^s]<∞$ for every $r<p_{2},s<p₃$, with strict uniform margins. [F1, F3, step 424.1, algebra]

426.1 Here is the full sum-tail derivation; independence is unnecessary. Take $η<γ/40$, so $p_{2}>0.95$ and $p₃<1.05$, and further require $4η/γ<δ_*/2$. Choose $r=s=0.9$ and $a=3/4$. If both $X_i≤t−t^a$ but their sum exceeds t, both $X_i>t^a$. Thus [F1, F3, step 425.1, algebra]

427.1 $P(X_{2}+X₃>t)≤\sum _i P(X_i>t−t^a)+P(X_{2}>t^a,X₃>t^a)$, $P(X_{2}+X₃>t)≥\sum _i P(X_i>t)−P(X_{2}>t,X₃>t)$. [F1, F3, step 426.1, algebra]

428.1 The mixed Markov bound gives the two joint terms $O(t^{-a(r+s)})$ and $O(t^{-(r+s)})$. Equation (1) gives [F1, F3, step 427.1, algebra]

429.1 $P(X_i>t−t^a)−P(X_i>t)=O(t^{-p_i−1+a})+O(t^{-p_i−δ_*})$. [F1, F3, step 428.1, algebra]

430.1 Consequently [F1, F3, step 429.1, algebra]

431.1 $P(Y>t)=c_{2}t^{-p_{2}}+c₃t^{-p₃}+O(t^{-p_*})$                       (2) [F1, F3, step 430.1, algebra]

432.1 for any $p_*$ not larger than $\operatorname{min}(p_{2}+δ_*,p₃+δ_*,p_{2}+1/4,p₃+1/4,1.35)$, decreased slightly if desired. Every entry in this minimum is strictly greater than p₃ by the stated choices; hence $p_*>p₃$. This proves the strict second-pole margin from actual one-point tails and actual correlated mixed moments. [F1, F3, step 431.1, algebra]

433.1 **2. Mellin subtraction for the fixed positive mass Y.** All inverse moments of Y exist by an anchor subdisk of D₂ away from its center. For Re $q<p_{2}$ its Mellin transform is therefore holomorphic. Splitting at $Y=1$ and integrating the upper tail gives [F1, F3, step 432.1, algebra]

434.1 $E[Y^q]=E[Y^q;Y≤1]+P(Y>1)$ +q c₂/(p₂−q)+q c₃/(p₃−q) $+q\int ₁^∞ t^{q−1}[P(Y>t)−c_{2}t^{-p_{2}}−c₃t^{-p₃}]dt$.          (3) [F1, F3, step 433.1, algebra]

435.1 The first term is entire: at zero use arbitrarily high inverse moments to bound |log $Y|^kY^{\operatorname{Re} q}$. The last term is holomorphic for Re $q<p_*$ by (2), locally uniformly with derivatives. Formula (3) is thus an actual meromorphic continuation, not a definition using a complex random mass. Its only new poles before $p_*$ are $q=p_{2},p₃$, with the displayed coefficients. Under $q=1−ε/γ$, the polar terms become [F1, F3, step 434.1, algebra]

436.1 c₂(γ−ε)/(ε−2η) + c₃(γ−ε)/(ε+2η).                         (4) [F1, F3, step 435.1, algebra]

437.1 **3. Finite-hole subtraction is holomorphic even where the separate moments diverge.** Let $C_t=C\setminus B_{e^{-t}}(0)$, t a sufficiently large integer, and let $X_t(0)$ be the circular GFF average. Define **uncharged-at-zero** masses $R_t=Z_{C_t}(0)$ and the actual random difference [F1, F3, step 436.1, algebra]

438.1 $F_t(ε)=E[e^{εX_t(0)−tε²/2}(R_t^{q(ε)}−Y^{q(ε)})]$.           (5) [F1, F3, step 437.1, algebra]

439.1 The bases $R_t,Y$ are positive real masses; their complex powers use the real logarithm. The interaction is never tilted to a complex mass. Write $R_t=Y+B_t$. At fixed t, $B_t$ is a mass whose singularities at z₂,z₃ have been removed by the unit holes; its only remaining origin singularity is cut off, so it has all positive moments below 4/γ². If $a=\operatorname{Re} ε≥0$, differentiation in the positive real base bounds [F1, F3, step 438.1, algebra]

440.1 $|(Y+B_t)^q−Y^q|≤C B_t A_{0}^{-a/γ}$,                          (6) [F1, F3, step 439.1, algebra]

441.1 where $A_{0}>0$ is a fixed anchor submass of Y. For $a<0$ put $k=−a/γ$. Then [F1, F3, step 440.1, algebra]

442.1 $|(Y+B_t)^q−Y^q|≤C B_t(Y^k+B_t^k)$.                        (7) [F1, F3, step 441.1, algebra]

443.1 Choose $A>2η$ with $A<γ−2η$; on $a>−A$ we have $k<A/γ<p_{2}<1$. The mixed expectation $E[B_tY^k]$ is finite: split each heavy $X_i$ into its half-radius central disk and its outer annulus. Central disks are separated from $B_t$, so use the proved separated mixed moments; the annuli have ordinary mass moments up to 4/γ², and Cauchy–Schwarz uses exponents 2 and $2k<2<4/γ²$. Also $E[B_t^{1+k}]$ is finite. The finite Gaussian factor at fixed t is treated by real Gaussian tilting at 0, which leaves the heavy masses unchanged, and by strict slightly enlarged moment exponents for derivatives. Factors $X_t(0)$ and log $R_t,\operatorname{log}$ Y arising on differentiating in ε are bounded by those enlarged positive/negative powers and finite Gaussian exponential moments. Equations (6)–(7), with strict parameter margins, therefore prove that (5) is holomorphic on a complex neighborhood of every compact real subinterval of (−A,1/γ). They do not assert holomorphy of either divergent moment separately. [F1, F3, step 442.1, algebra]

444.1 **4. The cancellation is made before expectation.** The increment $Δ_t=X_{t+1}(0)−X_t(0)$ has variance one and is independent of the field outside $B_{e^{-t}}(0)$; this follows by harmonic circle averaging. Thus it is independent of both $R_t$ and Y and its Wick exponential has conditional expectation one. The integrable difference in (5), rather than $Y^q$ alone, can consequently be multiplied by that increment and averaged. Subtract the two resulting integrable random differences to obtain [F1, F3, step 443.1, algebra]

445.1 $F_{t+1}−F_t =E[e^{εX_{t+1}(0)−(t+1)ε²/2}(R_{t+1}^{q}−R_t^{q})]$.        (8) [F1, F3, step 444.1, algebra]

446.1 This is valid beyond the first pole because no expectation of $Y^q$ was taken in isolation. In particular it is not an illicit cancellation of two infinite analytic functions. [F1, F3, step 445.1, algebra]

447.1 Put $ε=a+ib$. Real Gaussian tilting of (8) produces positive masses $Z_t(a)$ and their newly included annulus $T_t(a)$; the imaginary Wick factor costs at most exp((t+1)b²/2). The heavy Y is unchanged, because $\operatorname{Cov}(X_t(0),X(x))=0$ for $|x|>1$. Inside the small origin disk the other deterministic weights are smooth bounded functions. The actual L² covariance estimate therefore gives, uniformly $a≤1/γ$, [F1, F3, step 446.1, algebra]

448.1 $E[T_t(a)²]≤C$ exp(−[4−γ²−2γa]t), $E[T_t(a)]≤C$ exp(−[2−γa]t).                               (9) [F1, F3, step 447.1, algebra]

449.1 The first exponent is $≥2−γ²>0$. These follow either by scaling $ξ(2)=4−γ²$ or by integrating $|x−y|^{-γ²}$ against the two annular charge weights. The innermost circular cutoff only changes the bounded coefficient. [F1, F3, step 448.1, algebra]

450.1 **5. A direct summable increment bound throughout the required interval.** No optimization over probabilities of rare annuli is needed in the bootstrap range. If $a≥0$, the base derivative in (8) has negative exponent −a/γ. A fixed anchor in the exterior gives all inverse moments. By Cauchy–Schwarz and (9), [F1, F3, step 449.1, algebra]

451.1 $E|Z_{t+1}(a)^q−Z_t(a)^q| ≤C E[T_t(a) A_{0}^{-a/γ}] ≤C$ exp(−[2−γ²/2−γa]t) $≤C$ exp(−[1−γ²/2]t).                                   (10) [F1, F3, step 450.1, algebra]

452.1 If $−A<a<0$, put $k=−a/γ<p_{2}<1$ and write $Z_t(a)=Y+B_t(a)$. Subadditivity of the k-power and the base derivative give [F1, F3, step 451.1, algebra]

453.1 $E|Z_{t+1}(a)^q−Z_t(a)^q| ≤C E[T_t(a)(Y^k+B_t(a)^k+T_t(a)^k)]$.                    (11) [F1, F3, step 452.1, algebra]

454.1 $T_t$ is separated from both heavy disks, so the first expectation is at most C $E[T_t]E[Y^k]$ by the actual separated Gaussian mixed-moment inequality. For the second use Cauchy–Schwarz with $E[T_t²]$ and $E[B_t(a)^{2k}]$. The latter is uniformly finite: for negative a the origin weight vanishes, and the heavy centers were removed; $2k<2<4/γ²$. Finally $E[T_t^{1+k}]$ is at most $(E[T_t²])^{(1+k)/2}$. Hence (11) decays at a strictly positive exponential rate, uniformly on the chosen real interval. Combining with (8), there exists $κ>0$ such that [F1, F3, step 453.1, algebra]

455.1 $|F_{t+1}(a+ib)−F_t(a+ib)|≤C$ exp((t+1)b²/2−κt).            (12) [F1, F3, step 454.1, algebra]

456.1 Take $|b|²<κ$. The series of increments is uniformly summable on compact subsets of this genuine complex neighborhood of (−A,1/γ). Thus $F=\operatorname{lim} F_t$ is holomorphic there by Cauchy's integral formula and uniform convergence. This proves the actual complex extension of the *subtracted* quantity, not merely a real-tail meromorphic moment. [F1, F3, step 455.1, algebra]

457.1 For real $ε>2η$ within this interval both original moments are finite. Circle averaging/Girsanov gives exactly [F1, F3, step 456.1, algebra]

458.1 $F(ε)=E[Z_C(ε)^{1−ε/γ}−Y^{1−ε/γ}]$.                       (13) [F1, F3, step 457.1, algebra]

459.1 Charged mass convergence and the strict moment margins justify the real cutoff limit. This is the nonempty overlap where the continuation is identified with the original unit-volume correlation. [F1, F3, step 458.1, algebra]

460.1 **6. Put the pieces together and compute both residues exactly.** Let $d_i=Δ_{α_i}$, $α=(ε,a_{2},a₃)$, $z₁=0$, and define the entire geometric prefactor [F1, F3, step 459.1, algebra]

461.1 $G_{KRV}(ε)=(2/γ)\prod _{i<j}|z_i−z_j|^{−α_iα_j−2(d_k−d_i−d_j)}$, [F1, F3, step 460.1, algebra]

462.1 where k is the index different from i,j. It converts the finite-coordinate correlation to the normalized three-point coefficient. With dc instead of KRV's 2dc use $G_{sph}=G_{KRV}/2$. On the initial real interval $ε>2η$, [F1, F3, step 461.1, algebra]

463.1 $Cbar_{KRV}(a₃,ε,a_{2})=G_{KRV}(ε)[F(ε)+E[Y^{1−ε/γ}]]$.             (14) [F1, F3, step 462.1, algebra]

464.1 Choose $δ>0$ with $2η+δ<A$, $4η+δ<γ$ and $δ<γ(p_*−p₃)$. Equations (3), (12) and (14) meromorphically continue this function to a complex neighborhood of (−2η−δ,1/γ), and its only poles there are $ε=2η$ and $ε=−2η$. Since G is holomorphic, subtracting the *constant* residues rather than the variable numerators leaves holomorphic difference quotients. [F1, F3, step 463.1, algebra]

465.1 Explicitly the residues are [F1, F3, step 464.1, algebra]

466.1 $A_{2}=G_{KRV}(2η)(γ−2η)c_{2}=2p_{2}$ Rbarγ(a₂), $A₃=G_{KRV}(−2η)(γ+2η)c₃=2p₃$ Rbarγ(a₃).                     (15) [F1, F3, step 465.1, algebra]

467.1 Here is the coordinate cancellation. The exponent of $|z_i−z_j|$ in G is [F1, F3, step 466.1, algebra]

468.1 $(α_i+α_j−α_k)(Q−(α₁+α_{2}+α₃)/2)$. [F1, F3, step 467.1, algebra]

469.1 At $ε=2η$, $α₁+α₃=α_{2}$; the exponents for |z₂| and |z₂−z₃| are 4η(Q−a₂) and 2a₃(Q−a₂), while |z₃| has exponent zero. The tail coefficient c₂ has exactly their negatives: its |z₂| exponent is $4a_{2}(a_{2}−Q)+4p_{2}=−4η(Q−a_{2})$ and its |z₂−z₃| exponent is $−γa₃p_{2}=−2a₃(Q−a_{2})$. Thus $G_{KRV}(2η)c_{2}=(2/γ)Rbarγ(a_{2})$. The calculation at −2η interchanges 2 and 3 and gives the second equality. This retains the full actual spherical area/Wick factors; no coordinate-dependent residue is hidden. [F1, F3, step 468.1, algebra]

470.1 Therefore [F1, F3, step 469.1, algebra]

471.1 $Cbar_{KRV}(a₃,ε,a_{2})$ −[4(Q−a₂)/γ] Rbarγ(a₂)/(ε−2η) −[4(Q−a₃)/γ] Rbarγ(a₃)/(ε+2η)                           (16) [F1, F3, step 470.1, algebra]

472.1 is holomorphic on a complex neighborhood of that entire interval. With the actual repository dc normalization both polar coefficients and the entire correlation are divided by two. Setting $α'=Q−η$ and $α=a_{2}$ gives $a₃=α'−γ/2$, so (16) is exactly the two-pole analytic supplier needed to continue the crossing relation across its first pole and extract its second residue. [F1, F3, step 471.1, algebra]

473.1 **Scope and reading limits.** Read actual KRV arXiv:1707.08785 cached full text at §10.2, including the postponed Proposition 10.1 and Lemmas 10.3–10.4 (PDF pp. 42–46), and its local/two-insertion tail formulations in §7. The proof above reconstructs its analytic subtraction with an explicit integrable cancellation and a simpler L² annular bound valid on the exact bootstrap range $γ²<2$. It consumes the separate smooth-weight tail/mixed-moment suppliers at their real parameter interfaces; it does not infer a complex-charge tail expansion. Reflection shifts, inversion and probabilistic reflected fusion remain with their author. This file supplies the missing holomorphic subtraction, not a numerical verification or an asserted DOZZ theorem. [F1, F3, step 472.1, algebra]

474.1 **Tenth DOZZ supplier: reflection analyticity, first shift, inversion and gluing.** Research continuation using the constructed GMC/BPZ/fusion suppliers. Put $b=γ/2$, $h=1/b$, $Q=b+h$, with $0<γ<\operatorname{sqrt}(2)$. Write C for the KRV-normalized three-point constant $2C_{sph}$ and $Cbar=μ^sC/Γ(s)$, so $Cbar=(2/γ)Eρ^{(−s)}$. Rbar and R are the actual radial coefficients constructed earlier. No explicit reflection formula is assumed. [F1, F3, step 473.1, algebra]

475.1 Additional completed authoring inputs in ../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-liouville-ward/ are two-pole-holomorphic-subtraction.md (the actual complex two-pole remainder, binding smooth-weighted-local-tail.md and the separated mixed moments) and reflection-analyticity-crossing-residue.md (Gamma residue algebra). These are authoring suppliers, not claimed results of a new scientific review. [F1, F3, step 474.1, algebra]

476.1 **1. The actual crossing identity and its coefficient.** Use the proved hypergeometric connection matrix $F_−=uG_−+vG_+$, $F_+=wG_−+xG_+$. Its Wronskians at 0 and 1 give $D=ux−vw=(C−1)/(C−A−B)$. In this paragraph capital A,B,C are hypergeometric parameters. If the coefficient vector at 0 is (λ,Hλ), the coefficient of $|G_+|²$ is $(v²+Hx²)λ=−vDλ/w$. The first probabilistic fusion at the insertion ε at 1 identifies that coefficient as $B_b(ε)C(α',ε+b,α)$; the coefficient at 0 is C(α′−b,ε,α). Thus [F1, F3, step 475.1, algebra]

477.1 $$\begin{gathered}\text{C(}\alpha\text{}{}^{\prime}\text{}-\text{b,}\varepsilon\text{,}\alpha\text{)=T(}\alpha\text{}{}^{\prime}\text{,}\varepsilon\text{,}\alpha\text{)C(}\alpha\text{}{}^{\prime}\text{,}\varepsilon\text{+b,}\alpha\text{),}\\\text{T=B\_b(}\varepsilon\text{) }\ell\text{(A)}\ell\text{(B)/[}\ell\text{(C)}\ell\text{(A+B}-\text{C)],              (1)}\end{gathered}$$ [F1, F3, step 476.1, algebra]

478.1 where [F1, F3, step 477.1, algebra]

479.1 $$\begin{gathered}\text{A=(b/2)(}\alpha\text{}{}^{\prime}\text{+}\alpha\text{+}\varepsilon\text{}-\text{Q}-\text{2b)}-\text{1/2,}\\\text{B=(b/2)(}\alpha\text{}{}^{\prime}\text{}-\text{}\alpha\text{+}\varepsilon\text{}-\text{Q)+1/2,}\\\text{C=1+b(}\alpha\text{}{}^{\prime}\text{}-\text{Q).}\end{gathered}$$ [F1, F3, step 478.1, algebra]

480.1 To check the simplification, $−w/[vD]=ℓ(A)ℓ(B)/[ℓ(C)ℓ(A+B−C)]$ follows from $Γ(t+1)=tΓ(t)$ and $ℓ(t)ℓ(−t)=−1/t²$. This accounts for the orientation and sign of T. It holds first in the common real nonresonant fusion domain. Both sides are meromorphic charge families, so it extends to the connected intersection of their extended moment domains. The corresponding unit-volume coefficient is [F1, F3, step 479.1, algebra]

481.1 $$\begin{gathered}\text{Tbar=(sL/}\mu\text{)T,}\\\text{sL=(}\alpha\text{}{}^{\prime}\text{+}\alpha\text{+}\varepsilon\text{}-\text{b}-\text{2Q)/(2b).                         (2)}\end{gathered}$$ [F1, F3, step 480.1, algebra]

482.1 The factor sL, including its sign when negative, cannot be dropped. [F1, F3, step 481.1, algebra]

483.1 **2. Actual reflection analyticity and the corrected residue constant.** Set $α'=α∈(b,Q)$ and $ε=b+δ$, δ↓0. The real three-to-two residue supplier gives [F1, F3, step 482.1, algebra]

484.1 $$\begin{gathered}\text{lim }\delta\text{ Cbar(}\alpha\text{}-\text{b,b+}\delta\text{,}\alpha\text{)=2p Rbar(}\alpha\text{),}\\\text{p=(Q}-\text{}\alpha\text{)/b.}\end{gathered}$$ [F1, F3, step 483.1, algebra]

485.1 The other triple tends to (α,2b,α), strictly inside U3. With $ν=Q−α$ and $x=b(α−Q)$, the parameters in (1) are $A=x+bδ/2$, $B=bδ/2$, $C=1+x$, $A+B−C=−1+bδ$. Hence $ℓ(B)/ℓ(A+B−C)→−2$, $ℓ(A)/ℓ(C)→−1/x²$, and $δB_b(b+δ)→−πμb³$. Equations (1)–(2) therefore give [F1, F3, step 484.1, algebra]

486.1 $$\begin{gathered}\text{lim }\delta\text{ Tbar(}\alpha\text{,b+}\delta\text{,}\alpha\text{)=2}\pi\text{/}\nu\text{,}\\\text{Rbar(}\alpha\text{)=}\pi\text{b Cbar(}\alpha\text{,2b,}\alpha\text{)/}\nu\text{}{}^{2}\text{.                      (3)}\end{gathered}$$ [F1, F3, step 485.1, algebra]

487.1 Every factor is fixed by the actual 2dc normalization; for the repository dc normalization replace the right side by 2πb $Cbar_{sph}/ν²$. Since the continued Cbar is holomorphic near the entire real triple curve (α,2b,α), $α∈(b,Q)$, equation (3) proves charge analyticity of the actual Rbar on that interval. Consequently $R=μ^pΓ(−p)pRbar$ is meromorphic there, with the actual Gamma poles. [F1, F3, step 486.1, algebra]

488.1 The negative half coefficient displayed in the cached KRV Step1 formula is incompatible with (3) and even with positivity of Rbar. The complementary exact Gamma/Υ construction confirms (3), including the dc/KRV factor. This proof uses the derived residue, not that printed coefficient. [F1, F3, step 487.1, algebra]

489.1 **3. Extract the second pole and obtain the exact b shift.** Take $α'=Q−η$, $α=h+η$ and $η>0$ sufficiently small. The crossing identity is initially defined on the common real moment domain $ε>2η$. This domain is connected to a genuine Seiberg/fusion region: ε can first be chosen between 2b and h, a nonempty interval because $b²<1/2$. Charge holomorphy then gives (1) throughout its common U3 overlap. [F1, F3, step 488.1, algebra]

490.1 The two-pole helper continues the LEFT unit-volume factor across $ε=2η$ to a neighborhood beyond $ε=−2η$. Its second residue is 2pL Rbar(α′−b), $pL=1+η/b$. The RIGHT unit-volume triple has at $ε=−2η$ the actual three-to-two residue 2pR Rbar(α′), $pR=η/b$. Thus equating the two residues gives [F1, F3, step 489.1, algebra]

491.1 $$\begin{gathered}\text{pL Rbar(}\alpha\text{}{}^{\prime}\text{}-\text{b)=Tbar(}\alpha\text{}{}^{\prime}\text{,}-\text{2}\eta\text{,h+}\eta\text{) pR Rbar(}\alpha\text{}{}^{\prime}\text{).}\end{gathered}$$ [F1, F3, step 490.1, algebra]

492.1 At this value $sL=−pL$, so $Tbar=−pL$ T/μ. Converting back to R by $Γ(−pR−1)=Γ(−pR)/(−pR−1)$ therefore gives exactly [F1, F3, step 491.1, algebra]

493.1 $$\begin{gathered}\text{R(}\alpha\text{}{}^{\prime}\text{}-\text{b)=T(}\alpha\text{}{}^{\prime}\text{,}-\text{2}\eta\text{,h+}\eta\text{)R(}\alpha\text{}{}^{\prime}\text{).}\end{gathered}$$ [F1, F3, step 492.1, algebra]

494.1 The Gamma arguments are $A=−b²−bη$, $B=−2bη$, $C=1−bη$, $A+B−C=−1−b²−2bη$. In (1), the ℓ(B) factor cancels ℓ(bε), and $ℓ(A+B−C)ℓ(2+b²−bε)=1$. Hence [F1, F3, step 493.1, algebra]

495.1 $$\begin{gathered}\text{T(}\alpha\text{}{}^{\prime}\text{,}-\text{2}\eta\text{,h+}\eta\text{)=B\_b(}\alpha\text{}{}^{\prime}\text{}-\text{b),}\\\text{R(a}-\text{b)=B\_b(a}-\text{b)R(a).                             (4)}\end{gathered}$$ [F1, F3, step 494.1, algebra]

496.1 In particular its last denominator is ℓ(2+2b²−ba), NOT ℓ(2+b²−ba). The appendix version of the source has this correct argument; the main-text sketch drops a b². Equation (4) has been independently derived here. [F1, F3, step 495.1, algebra]

497.1 Analyticity from (3) extends (4) meromorphically throughout $2b<a<Q$. Since the original interval (b,Q) has width $h>b$, overlapping b-shifts extend R to a meromorphic strip around the whole real line. Compact fundamental subintervals provide a fixed positive strip width; the coefficients in (4) are meromorphic entire functions. The identity on overlaps makes this continuation unambiguous. [F1, F3, step 496.1, algebra]

498.1 **4. Inversion from the actual reflected channel.** Choose fixed generic spectators α2,α3 sufficiently close to Q. The reflected fusion supplier gives, for $Q−b<a<Q$, [F1, F3, step 497.1, algebra]

499.1 $$\begin{gathered}\text{R(a)=H\_b(a,}\alpha\text{2,}\alpha\text{3)}\\\text{C(a}-\text{b,}\alpha\text{2,}\alpha\text{3)/C(2Q}-\text{a}-\text{b,}\alpha\text{2,}\alpha\text{3).           (5)}\end{gathered}$$ [F1, F3, step 498.1, algebra]

500.1 Both C arguments lie below Q on the larger interval $Q−b<a<Q+b$; they are positive and in the Seiberg domain for these spectators. Thus the right side gives a meromorphic continuation through Q, analytic at Q. In the hypergeometric parameters, $a↦2Q−a$ sends (A,B,C) to (A+1−C,B+1−C,2−C). The displayed Gamma formula for H then has numerator and denominator interchanged, so $H_b(a)H_b(2Q−a)=1$. The C ratios in (5) cancel as well. Therefore [F1, F3, step 499.1, algebra]

501.1 $$\begin{gathered}\text{R(a)R(2Q}-\text{a)=1                                   (6)}\end{gathered}$$ [F1, F3, step 500.1, algebra]

502.1 near Q. The b-shift continuation agrees with (5) below Q and hence through Q by uniqueness. Meromorphic identity extends (6) along the full strip. At $a=Q$, $H_b=−1$ and the two C arguments coincide; hence $R(Q)=−1$, consistently with the independently proved probabilistic normalization. No inversion axiom or dual potential has entered this proof. [F1, F3, step 501.1, algebra]

503.1 **5. Holomorphic gluing of the actual three-point function.** For the same spectators close to Q, extend $F(u)=C(u,α2,α3)$ meromorphically by its first $γ=2b$ shift. Near $u=Q$ that shift reads [F1, F3, step 502.1, algebra]

504.1 $$\begin{gathered}\text{F(u)=[H\_b(u}-\text{b)/B\_b(u}-\text{b)]F(u}-\text{2b).}\end{gathered}$$ [F1, F3, step 503.1, algebra]

505.1 The last C argument u−2b is strictly inside U3. At $u=Q$, $B_b(u−b)$ has a simple pole from $ℓ(b(u−b))=ℓ(1+b(u−Q))$, whereas $H_b(u−b)$ and the other Gamma factors are finite and nonzero for these generic spectators. Thus F is actually holomorphic near Q with a simple zero there, rather than an unproved critical-charge limit. [F1, F3, step 504.1, algebra]

506.1 For $u>Q$ close to Q, the ACTUAL reflected fusion with center $a=u−b$ gives $H_b(u−b)F(u−2b)=R(u−b)F(2Q−u)$. Combine it with (4) to obtain [F1, F3, step 505.1, algebra]

507.1 $$\begin{gathered}\text{F(u)=R(u)F(2Q}-\text{u).                                (7)}\end{gathered}$$ [F1, F3, step 506.1, algebra]

508.1 Both sides are meromorphic continuations of the defined functions, so this identity extends across Q. It is the desired gluing, with its normalization fixed by the actual probabilistic R. It also extends to other spectators whenever the relevant shifted triples lie in their connected U3 domains: all continuation inequalities are strict linear inequalities, and the reflected fusion identity is continued as an identity of the already constructed charge families, not asserted for a divergent c integral. [F1, F3, step 507.1, algebra]

509.1 Equations (3)–(7) provide reflection analyticity, the first b shift, global meromorphic inversion and three-point gluing. The explicit special-function value of R and the dual probabilistic shift have not yet been assumed or concluded. [F1, F3, step 508.1, algebra]

510.1 **The crossing residue fixing reflection analyticity: exact positive coefficient.** Research algebra requested by the DOZZ author. This reconstructs a residue rather than copying the coefficient in the cached source. Write $b=γ/2$, $Q=b+1/b$, $ℓ(u)=Γ(u)/Γ(1−u)$. Use the previously derived actual-candidate Upsilon shifts and reflection. All equalities below are meromorphic and initially computed at nonresonant parameters. [F1, F5, step 509.1, algebra]

511.1 **1. Crossing coefficient at the first residue.** The separately derived probabilistic crossing relation is [F1, F5, step 510.1, algebra]

512.1 $C(α'−b,ε,α)=T(α',ε,α)C(α',ε+b,α)$, $T=B_b(ε)ℓ(A)ℓ(B)/[ℓ(C)ℓ(A+B−C)]$, $B_b(ε)=−πμ/[ℓ(−b²)ℓ(bε)ℓ(2+b²−bε)]$. [F1, F5, step 511.1, algebra]

513.1 Set $α'=α$, $ε=b+δ$ and $x=b(α−Q)$. The hypergeometric parameters become exactly [F1, F5, step 512.1, algebra]

514.1 $A=x+bδ/2$, $B=bδ/2$, $C=1+x$, $A+B−C=−1+bδ$. [F1, F5, step 513.1, algebra]

515.1 Since ℓ(u)∼1/u at zero and ℓ(−1+u)∼−1/u, [F1, F5, step 514.1, algebra]

516.1 $ℓ(B)/ℓ(A+B−C)→−2$. [F1, F5, step 515.1, algebra]

517.1 Gamma recurrence gives $ℓ(1+x)=−x²ℓ(x)$, hence $ℓ(A)/ℓ(C)→−1/x²$. Also ℓ(2−bδ)∼−bδ and $ℓ(−b²)ℓ(b²)=−b^{-4}$. Therefore [F1, F5, step 516.1, algebra]

518.1 $δB_b(b+δ)→−πμb³$, $δT(α,b+δ,α)→−2πμb³/x²=−2πμb/(Q−α)²$.                     (1) [F1, F5, step 517.1, algebra]

519.1 The source unit-volume convention is $Cbar=μ^sΓ(s)^{-1}C$. The right crossing total charge exceeds the left total by 2b, so $s_R=s_L+1$ and [F1, F5, step 518.1, algebra]

520.1 $Tbar=(s_L/μ)T$. [F1, F5, step 519.1, algebra]

521.1 At these parameters $s_L=(α−Q)/b+δ/(2b)$. With $ν=Q−α>0$, (1) gives [F1, F5, step 520.1, algebra]

522.1 $\operatorname{lim}_{δ→0} δTbar(α,b+δ,α)=2π/ν$.                           (2) [F1, F5, step 521.1, algebra]

523.1 Thus the pole has positive coefficient. No choice of hypergeometric basis is changed in obtaining it. [F1, F5, step 522.1, algebra]

524.1 **2. The corresponding reflection relation.** The proved real three-to-two moment boundary gives, in KRV's 2dc convention, [F1, F5, step 523.1, algebra]

525.1 $\operatorname{lim}_{δ↓0}δ Cbar(α−b,b+δ,α)=2ν$ Rbar(α)/b. [F1, F5, step 524.1, algebra]

526.1 The right crossing factor is regular at $δ=0$ and becomes Cbar(α,2b,α). Equating this residue with (2) yields [F1, F5, step 525.1, algebra]

527.1 $Rbar(α)=πb/(Q−α)²$ Cbar(α,2b,α).                          (3) [F1, F5, step 526.1, algebra]

528.1 This is the coefficient needed to deduce analyticity of Rbar from the previously constructed extended-charge holomorphy. In the actual repository dc convention $Cbar_{sph}=Cbar_{KRV}/2$, while Rbar is the same random local-tail constant. Consequently (3) becomes $Rbar=2πb Cbar_{sph}/(Q−α)²$. One must not divide Rbar itself by two. The physical three-point coefficient, unlike the local-tail constant, is divided by two. [F1, F5, step 527.1, algebra]

529.1 **3. Independent exact check against the defined special functions.** Let D be the explicitly defined DOZZ candidate, $L=πμℓ(b²)$, $K=Lb^{2−2b²}$. Define only for this algebraic comparison [F1, F5, step 528.1, algebra]

530.1 $R_D(α)=−L^{ν/b}$ Γ(−bν)Γ(−ν/b)/[Γ(bν)Γ(ν/b)]. [F1, F5, step 529.1, algebra]

531.1 No equality with a probabilistic reflection coefficient is assumed. Substituting (α,2b,α) in the actual candidate and using $\Upsilon_b(Q−u)=\Upsilon_b(u)$, $\Upsilon_b'(0)=\Upsilon_b(b)$, $\Upsilon_b(2b)=ℓ(b²)b^{1−2b²}\Upsilon_b(b)$, gives [F1, F5, step 530.1, algebra]

532.1 $D(α,2b,α)=K^{ν/b−1}ℓ(b²)b^{1−2b²} \Upsilon_b(ν)²/[\Upsilon_b(b−ν)\Upsilon_b(b+ν)]$. [F1, F5, step 531.1, algebra]

533.1 The two shifts derived from the defining integral give [F1, F5, step 532.1, algebra]

534.1 $\Upsilon_b(b+ν)=ℓ(bν)b^{1−2bν}\Upsilon_b(ν)$, $\Upsilon_b(b−ν)=b^{−1+2ν/b}\Upsilon_b(ν)/ℓ(1−ν/b)$. [F1, F5, step 533.1, algebra]

535.1 For the latter identity, shift −ν first by b and then by 1/b to Q−ν and apply reflection; it is not an extra functional relation. Substituting and collecting the b-powers yields exactly [F1, F5, step 534.1, algebra]

536.1 $D(α,2b,α)=L^{ν/b}/(πμb)$ Γ(1−ν/b)Γ(1−bν)/[Γ(ν/b)Γ(bν)] $=−ν² R_D(α)/(πμb)$.                            (4) [F1, F5, step 535.1, algebra]

537.1 The last equality uses $Γ(1−u)=−uΓ(−u)$. Here $s=(2α+2b−2Q)/(2b)=1−ν/b$. Thus its candidate unit-volume version is [F1, F5, step 536.1, algebra]

538.1 $Dbar=μ^{1−ν/b}D/Γ(1−ν/b) =ν²/(πb) Rbar_D$, $Rbar_D:=−μ^{−ν/b}R_D/Γ(1−ν/b)$. [F1, F5, step 537.1, algebra]

539.1 This $Rbar_D$ is precisely the algebraic counterpart of the actual probabilistic normalization $R=μ^p pΓ(−p)Rbar=−μ^pΓ(1−p)Rbar$, $p=ν/b$. Therefore the candidate satisfies the same **positive** formula (3). It does not satisfy a negative multiple of that positive formula. [F1, F5, step 538.1, algebra]

540.1 **4. Source discrepancy and scope.** The cached KRV §10 Step 1 expression proportional to −π/γ times its displayed ell-ratio simplifies, with these stated conventions, to −πb/[2(Q−α)²] Cbar(α,2b,α). That has both the wrong sign and a factor-of-two discrepancy compared with the actual crossing residue (2) and the independent candidate computation (4). In an open real Seiberg interval $Cbar(α,2b,α)>0$ and $Rbar>0$, so that negative expression cannot be used as a local supplier. The repaired calculation is (1)–(4), with the exact coordinate/normalization conventions stated above. This file asserts neither a probabilistic DOZZ identity nor reflection inversion: it supplies the requested residue and its correct normalization for the separate probabilistic proof. [F1, F5, step 539.1, algebra]

541.1 **Eleventh DOZZ supplier: dual fusion and the dual reflection shift from the same GMC.** Research construction. Fix $0<γ<\operatorname{sqrt}(2)$, $b=γ/2$, $h=1/b$, $Q=b+h$. There is only the original positive $μe^{(γφ)}$ interaction. No dual interaction or self-duality is assumed. C below has KRV normalization $2C_{sph}$. All Gamma identities are meromorphic identities; begin at nonresonant irrational b² and pass to all parameters by the separately constructed real-γ continuity at the end of the complete proof. [F1, F3, F2, step 540.1, algebra]

542.1 **1. The actual dual reflected fusion coefficient.** Take $α=Q−ν$ with $0<ν<b/4$, and spectators α2,α3 sufficiently close to Q that $α+α2+α3−h>2Q$. Then the actual four-point function with $V_−h$ obeys [F1, F3, F2, step 541.1, algebra]

543.1 $$\begin{gathered}\text{T\_}-\text{h(z)=C(}\alpha\text{}-\text{h,}\alpha\text{2,}\alpha\text{3)}\\\text{+R(}\alpha\text{)C(2Q}-\text{}\alpha\text{}-\text{h,}\alpha\text{2,}\alpha\text{3)|z|\textasciicircum{}(2h}\nu\text{)}\\\text{+o(|z|\textasciicircum{}(2h}\nu\text{)).                                (1)}\end{gathered}$$ [F1, F3, F2, step 542.1, algebra]

544.1 Here the same probabilistic R(α) occurs, not a newly normalized dual coefficient. [F1, F3, F2, step 543.1, algebra]

545.1 We give the precise changes in the proved three-scale reflected-fusion construction, so no “dual theory” or uncomputed coefficient is inserted. The exact positive mass now has kernel $|y−z|^{(γh)}=|y−z|²$. Its s parameter is (α+α2+α3−h−2Q)/γ. Its coarse fused charge is $α−h=b−ν>0$, and Brownian drift is ν+h. Its fine multiplier is [F1, F3, F2, step 544.1, algebra]

546.1 $$\begin{gathered}\text{}\lambda\text{\_t,H=exp[}\gamma\text{B\_(t+H)}-\text{}\gamma\text{}\nu\text{(t+H)}-\text{}\gamma\text{h t],}\\\text{p=2}\nu\text{/}\gamma\text{, }\kappa\text{=2h}\nu\text{,}\\\text{f\_h(r)=}\gamma\text{(}\nu\text{+h)r}-\text{}\gamma\text{}{}^{2}\text{r}{}^{2}\text{/2.}\end{gathered}$$ [F1, F3, F2, step 545.1, algebra]

547.1 All elementary inequalities in the reflected-fusion proof apply to this positive kernel: on the fine disk its ratio to |z|² is $1+O(e^{(−H)})$; on a coarse annulus its difference from |y|² is bounded by C|z||y|. Middle and omitted S0 masses have rth moments with exponent $f_h(r)$, while the coarse difference has exponent $\operatorname{min}(r,f_h(r))$. Choose $r=3p<3/4$. Since $κ=2p$, $r>κ$, and [F1, F3, F2, step 546.1, algebra]

548.1 $$\begin{gathered}\text{f\_h(3p)=3}\kappa\text{}-\text{12}\nu\text{}{}^{2}\text{>}\kappa\text{}\end{gathered}$$ [F1, F3, F2, step 547.1, algebra]

549.1 because $ν<h/3$. A Hölder exponent sufficiently close to one preserves these strict inequalities and keeps $rq<1$. The same anchor inequality for negative powers therefore makes all middle/coarse/S0 errors $o(|z|^κ)$. No divergent first moment at a spectator is used. [F1, F3, F2, step 548.1, algebra]

550.1 The OU decoupling is unchanged as an actual field coupling: the lateral Gaussian field has the SAME γ and the SAME covariance; replacing initial OU modes across the gap H gives sup difference $e^{(−2H)}W$ and the weighted-tail bound already proved. The centered fine mass has tail exponent p, with $p<1$. Its quantitative negative-power expansion therefore applies. Finally [F1, F3, F2, step 549.1, algebra]

551.1 $$\begin{gathered}\text{}\lambda\text{\_t,H\textasciicircum{}p=e\textasciicircum{}(}-\text{}\kappa\text{t)exp[2}\nu\text{B\_(t+H)}-\text{2}\nu\text{}{}^{2}\text{(t+H)].}\end{gathered}$$ [F1, F3, F2, step 550.1, algebra]

552.1 The Brownian tilt adds 2ν to the coarse charge, turning α−h into $2Q−α−h=b+ν<Q$. The new s parameter is s+p. Thus the Gamma/μ factors are exactly [F1, F3, F2, step 551.1, algebra]

553.1 $$\begin{gathered}\text{}\mu\text{\textasciicircum{}p}\Gamma\text{(}-\text{p)pRbar(}\alpha\text{) }\cdot\text{ C(2Q}-\text{}\alpha\text{}-\text{h,}\alpha\text{2,}\alpha\text{3)=R(}\alpha\text{)C\_ref.}\end{gathered}$$ [F1, F3, F2, step 552.1, algebra]

554.1 These statements check every exponent and normalization used in the reflected-fusion proof, including the stronger requirement $r>κ$ (which differs from the $h=b$ case). Its explicit tail integration, OU error estimate and order of limits $t→∞$ then $H→∞$ now prove (1). Both β exponent two and the reflected charge b+ν came from the original γ chaos. The actual dual BPZ equation was proved earlier by the Gaussian null polynomial with $a0=−h$. [F1, F3, F2, step 553.1, algebra]

555.1 **2. A crossing identity involving two ACTUAL reflected channels.** Apply the constructed hypergeometric connection matrix with $a0=−h$, external weights ε at 0, α at 1 and α′ at infinity. Its parameters are [F1, F3, F2, step 554.1, algebra]

556.1 $$\begin{gathered}\text{A=(h/2)(}\varepsilon\text{+}\alpha\text{+}\alpha\text{}{}^{\prime}\text{}-\text{Q}-\text{2h)}-\text{1/2,}\\\text{B=(h/2)(}\varepsilon\text{+}\alpha\text{}-\text{}\alpha\text{}{}^{\prime}\text{}-\text{Q)+1/2,}\\\text{C=1+h(}\varepsilon\text{}-\text{Q).}\end{gathered}$$ [F1, F3, F2, step 555.1, algebra]

557.1 If η0 is the coefficient of $|F_+|²$ at 0 and η1 that of $|G_+|²$ at 1, the same real connection matrix gives $η0/η1=u/[x(ux−vw)]$. The Wronskian determinant is (C−1)/(C−A−B). Substituting the already derived Gamma coefficients and Γ recurrence gives [F1, F3, F2, step 556.1, algebra]

558.1 $$\begin{gathered}\text{}\eta\text{0/}\eta\text{1=L(}\varepsilon\text{,}\alpha\text{,}\alpha\text{}{}^{\prime}\text{),}\\\text{L=}\ell\text{(C}-\text{1)}\ell\text{(C}-\text{A}-\text{B+1)/[}\ell\text{(C}-\text{A)}\ell\text{(C}-\text{B)].             (2)}\end{gathered}$$ [F1, F3, F2, step 557.1, algebra]

559.1 The ACTUAL fusion (1), at 0 and 1, therefore gives near $ε,α,α'=Q$ [F1, F3, F2, step 558.1, algebra]

560.1 $$\begin{gathered}\text{R(}\varepsilon\text{)C(2Q}-\text{}\varepsilon\text{}-\text{h,}\alpha\text{,}\alpha\text{}{}^{\prime}\text{)}\\\text{=L(}\varepsilon\text{,}\alpha\text{,}\alpha\text{}{}^{\prime}\text{)R(}\alpha\text{)C(}\varepsilon\text{,2Q}-\text{}\alpha\text{}-\text{h,}\alpha\text{}{}^{\prime}\text{).                (3)}\end{gathered}$$ [F1, F3, F2, step 559.1, algebra]

561.1 This identity compares constructed probabilistic channel coefficients. It is not an assumed crossing axiom or an assumed second interaction constant. [F1, F3, F2, step 560.1, algebra]

562.1 **3. Continue (3) only through explicitly valid moment/gluing domains.** Set $ε=b+η'$, $α=b+η''$ and $α'=h+η$, initially $η',η'',η>0$ small. The left reflected charge is Q−η′, the right one Q−η″. Both triples lie in U3: their only near-boundary triangle condition is $η+η'+η''>0$. The intersection of these strict linear inequalities with $b<ε,α<Q$ is convex and connects this region to the near-Q region where (3) was proved. Meromorphic Gamma normalization does not obstruct continuation of the unit-volume identities. Hence (3) holds there. [F1, F3, F2, step 561.1, algebra]

563.1 Next allow $η'<0$. The first charge Q−η′ crosses Q. The proved gluing applies: the shifted lower charge $Q−η'−2b=h−b−η'$ remains positive and its triple lies in U3 exactly when $η''>η+η'$ (the other inequalities have fixed positive margins). The reflected triple with Q+η′ is in U3 as well. Therefore replace the left C by R(Q−η′)C(Q+η′,α,α′). Inversion gives $R(Q−η')=1/R(ε+h)$. We obtain [F1, F3, F2, step 562.1, algebra]

564.1 $$\begin{gathered}\text{[R(}\varepsilon\text{)/R(}\varepsilon\text{+h)]C(}\varepsilon\text{+h,}\alpha\text{,}\alpha\text{}{}^{\prime}\text{)}\\\text{=L(}\varepsilon\text{,}\alpha\text{,}\alpha\text{}{}^{\prime}\text{)R(}\alpha\text{)C(}\varepsilon\text{,2Q}-\text{}\alpha\text{}-\text{h,}\alpha\text{}{}^{\prime}\text{).               (4)}\end{gathered}$$ [F1, F3, F2, step 563.1, algebra]

565.1 Both continued triples are valid if $η+η''>−η'$ and $η''>η+η'$. Fix $ε=b−θ$ with small $θ>0$, take $η=θ$ and $η''=δ>0$ small. These inequalities are strict. Thus (4) specializes to [F1, F3, F2, step 564.1, algebra]

566.1 $$\begin{gathered}\text{[R(}\varepsilon\text{)/R(}\varepsilon\text{+h)]C(}\varepsilon\text{+h,b+}\delta\text{,Q}-\text{}\varepsilon\text{)}\\\text{=L(}\varepsilon\text{,b+}\delta\text{,Q}-\text{}\varepsilon\text{)R(b+}\delta\text{)C(}\varepsilon\text{,Q}-\text{}\delta\text{,Q}-\text{}\varepsilon\text{).            (5)}\end{gathered}$$ [F1, F3, F2, step 565.1, algebra]

567.1 The first triple is Seiberg with $s=δ/γ$. The second lies in the extended moment region with $s=−δ/γ$; it is not treated as a convergent zero-mode integral. [F1, F3, F2, step 566.1, algebra]

568.1 **4. The two required small-δ residues, proved probabilistically.** The first triple tends to strict subcritical charges at total 2Q. Its mass has fixed positive and negative moment margins, so $Eρ^{(−δ/γ)}→1$. Since $δΓ(δ/γ)→γ$, [F1, F3, F2, step 567.1, algebra]

569.1 $$\begin{gathered}\text{lim }\delta\text{ C(}\varepsilon\text{+h,b+}\delta\text{,Q}-\text{}\varepsilon\text{)=2.                          (6)}\end{gathered}$$ [F1, F3, F2, step 568.1, algebra]

570.1 For the second triple we prove [F1, F3, F2, step 569.1, algebra]

571.1 $$\begin{gathered}\text{lim }\delta\text{ C(}\varepsilon\text{,Q}-\text{}\delta\text{,Q}-\text{}\varepsilon\text{)=}-\text{4.                           (7)}\end{gathered}$$ [F1, F3, F2, step 570.1, algebra]

572.1 By symmetry put the Q−δ insertion at zero. Split its moment mass ρδ into Aδ in a fixed small disk and Bδ outside. The outside has a uniform strictly positive moment, since the other charges ε and Q−ε remain below Q. The inside deterministic weight is bounded above and below by factors tending to one at zero; its $q=δ/γ$ small moment has the same limit as $I_{(Q−δ)}^q$. Exact radial scaling of a fixed radius changes that moment by a factor tending to one. [F1, F3, F2, step 571.1, algebra]

573.1 In the proved maximum coupling, $I_{(Q−δ)}=e^{(γM)}S_M$ with M exponential of rate 2δ. It is squeezed between $e^{(γM)}Jδ$ and $e^{(γM)}Sδ$, where Jδ is a fixed future-strip mass and Sδ is the full conditioned two-sided mass. Both are independent of M. The uniform positive/negative small moments proved in the reflection normalization show $E[Jδ^q],E[Sδ^q]→1$, while $E[e^{(δM)}]=2$ exactly. Hence $E[I_{(Q−δ)}^q]→2$ and $E[Aδ^q]→2$. [F1, F3, F2, step 572.1, algebra]

574.1 The outside part does not add one to that limit. Choose a fixed small $r>0$ below its moment threshold. For $0<q≤r/2$, [F1, F3, F2, step 573.1, algebra]

575.1 $$\begin{gathered}\text{0}\le\text{(A+B)\textasciicircum{}q}-\text{A\textasciicircum{}q}\le\text{C\_r q B\textasciicircum{}r A\textasciicircum{}(q}-\text{r).}\end{gathered}$$ [F1, F3, F2, step 574.1, algebra]

576.1 This follows by differentiating in q and bounding $\operatorname{log}(1+B/A)(1+B/A)^q$ separately on $B/A≤1$ and $≥1$. Hölder with the outside r-moment and an anchored inverse moment of A bounds the expectation on the right uniformly in δ, after decreasing r to keep a strict margin. Thus $E[ρδ^q]−E[Aδ^q]=O(q)→0$. This supplies the missing domination that bare subadditivity would not give. Finally $δΓ(−δ/γ)→−γ$, $μ^{(δ/γ)}→1$, and the prefactor 2/γ turns the moment limit two into (7). [F1, F3, F2, step 575.1, algebra]

577.1 **5. Gamma factors in (5) and the dual shift constant.** Let $v=b²$. The proved first reflection shift gives [F1, F3, F2, step 576.1, algebra]

578.1 $$\begin{gathered}\text{}\delta\text{R(b+}\delta\text{)}\to\text{}-\text{}\pi\text{}\mu\text{b}{}^{3}\text{R(2b),                              (8)}\end{gathered}$$ [F1, F3, F2, step 577.1, algebra]

579.1 because $δB_b(b+δ)→−πμb³$. For the parameters in (5), [F1, F3, F2, step 578.1, algebra]

580.1 $$\begin{gathered}\text{A=}-\text{h}{}^{2}\text{+h}\delta\text{/2,}\\\text{B=h}\varepsilon\text{}-\text{h}{}^{2}\text{+h}\delta\text{/2,}\\\text{C=h}\varepsilon\text{}-\text{h}{}^{2}\text{,}\\\text{C}-\text{A=h}\varepsilon\text{}-\text{h}\delta\text{/2,}\\\text{C}-\text{B=}-\text{h}\delta\text{/2,}\\\text{C}-\text{A}-\text{B+1=1+h}{}^{2}\text{}-\text{h}\delta\text{.}\end{gathered}$$ [F1, F3, F2, step 579.1, algebra]

581.1 Thus (2) gives [F1, F3, F2, step 580.1, algebra]

582.1 $$\begin{gathered}\text{L/}\delta\text{}\to\text{}-\text{(h/2)}\ell\text{(h(}\varepsilon\text{}-\text{Q))}\ell\text{(1+h}{}^{2}\text{)/}\ell\text{(h}\varepsilon\text{).}\end{gathered}$$ [F1, F3, F2, step 581.1, algebra]

583.1 Multiplying by (8) yields [F1, F3, F2, step 582.1, algebra]

584.1 $$\begin{gathered}\text{L R(b+}\delta\text{)}\to\text{(c}\gamma\text{/2)}\ell\text{(h(}\varepsilon\text{}-\text{Q))}\ell\text{(1+h}{}^{2}\text{)/}\ell\text{(h}\varepsilon\text{),}\\\text{c}\gamma\text{=b}{}^{2}\text{}\pi\text{}\mu\text{R(}\gamma\text{),  }\gamma\text{=2b.                              (9)}\end{gathered}$$ [F1, F3, F2, step 583.1, algebra]

585.1 Now multiply (5) by δ and use (6)–(7). The actual result is [F1, F3, F2, step 584.1, algebra]

586.1 $$\begin{gathered}\text{R(}\varepsilon\text{)/R(}\varepsilon\text{+h)}\\\text{=}-\text{c}\gamma\text{ }\ell\text{(h(}\varepsilon\text{}-\text{Q))}\ell\text{(1+h}{}^{2}\text{)/}\ell\text{(h}\varepsilon\text{)}\\\text{=}-\text{c}\gamma\text{/[}\ell\text{(}-\text{h}{}^{2}\text{)}\ell\text{(h}\varepsilon\text{)}\ell\text{(2+h}{}^{2}\text{}-\text{h}\varepsilon\text{)].                (10)}\end{gathered}$$ [F1, F3, F2, step 585.1, algebra]

587.1 The last equality uses $ℓ(1−x)=1/ℓ(x)$. This holds first for ε just below b and generic nonresonant b. Since R already has a meromorphic strip continuation, (10) extends by one-variable identity to that strip. The constant cγ is fixed by an ACTUAL probabilistic R(γ); it was not postulated to equal π times a dual cosmological constant. Its explicit value will follow from uniqueness, not from introducing a dual potential. [F1, F3, F2, step 586.1, algebra]

588.1 At resonant values where R(γ) or a displayed ℓ factor is singular, keep the meromorphic combination and use the final real-γ continuity argument. No new physical parameter range is excluded. [F1, F3, F2, step 587.1, algebra]

589.1 **Real gamma continuity for the actual GMC correlations and unit-volume reflection.** Complementary research construction requested by the DOZZ author for the rational-parameter passage. Fix $μ>0$. No analyticity in γ is claimed. All GMC measures are coupled by the **same actual sphere GFF** with the same mollifier/circle-average family. The raw measure includes $dA_{0}=|z|_+^{-4}d²z$ and the sphere correlation has dc, not 2dc. The inputs used are the already constructed local Gaussian covariance bounds, positive moments below 4/γ², anchored inverse moments, charged annular moments, and the proved positive reflection-analyticity identity. No reflection closed form or DOZZ equality is an input. [F1, F3, F2, step 588.1, algebra]

590.1 **1. Joint same-field L² convergence, uniform on compact gamma intervals.** Let $I⊂(0,\sqrt{2})$ be compact and $γ_{\operatorname{max}}=\operatorname{max} I<\sqrt{2}$. For bounded compactly supported test functions f,g in a finite chart, joint Gaussian completion of squares gives [F1, F3, F2, step 589.1, algebra]

591.1 $E[M_{γ,ε}(f)M_{γ',η}(g)] =\int f(z)g(w) \operatorname{exp}(γγ'K_{ε,η}(z,w))dA_{0}(z)dA_{0}(w)$.                 (1) [F1, F3, F2, step 590.1, algebra]

592.1 For $γ,γ'∈I$ the integrand is bounded in absolute value by [F1, F3, F2, step 591.1, algebra]

593.1 $C|f(z)g(w)|(1+|z−w|^{-γ_{\operatorname{max}}²})$. [F1, F3, F2, step 592.1, algebra]

594.1 This is locally integrable because $γ_{\operatorname{max}}²<2$. The mixed covariance tends off the diagonal to K. On a compact gamma square the convergence of its exponential is uniform at every separated pair (z,w); the same dominator applies. Thus (1) converges uniformly for $γ,γ'∈I$ as $ε,η→0$, and each $M_{γ,ε}(f)$ has a limit $M_γ(f)$ in L² uniformly in γ. The same formula then gives [F1, F3, F2, step 593.1, algebra]

595.1 $||M_{γ_n}(f)−M_γ(f)||_{L²}→0$ whenever $γ_n→γ∈I$.              (2) [F1, F3, F2, step 594.1, algebra]

596.1 Indeed expand the squared norm into its three mixed moments and use dominated convergence in (1). More generally $(γ_n,ε_n)→(γ,0)$ yields the same limit. A finite two-chart cover and partition of unity give the statement for all bounded sphere tests, including total mass. The limiting measures are constructed simultaneously using a countable dense family of continuous tests and positive linear-functional limits; (2) identifies all versions in probability. No independent field is selected separately for each γ. [F1, F3, F2, step 595.1, algebra]

597.1 The same proof works for Dirichlet fields on compact interior charts. On compact regions away from named insertion points, bounded deterministic test weights varying uniformly with γ and charges are also permitted, by the uniform L² bound and uniform approximation. [F1, F3, F2, step 596.1, algebra]

598.1 **2. Uniform raw positive moments with a strict margin.** For γ in a compact I and exponents r in a compact strict region $0<r<4/γ²$, the raw positive-moment proof has constants uniform in those parameters. Here are the actual reasons, rather than an inference from pointwise moment finiteness. For $0<r≤1$ the common-Gaussian covariance comparison and Jensen yield [F1, F3, F2, step 597.1, algebra]

599.1 $E[M_{γ,ε}(B_a)^r]≤C a^{ξ_γ(r)}$, $ξ_γ(r)=(2+γ²/2)r−γ²r²/2$, [F1, F3, F2, step 598.1, algebra]

600.1 uniformly $ε≤a$. For $r>1$ the Gaussian tilt identity expresses its rth moment as an integral of a singularly weighted (r−1)st moment. Decompose into dyadic shells; use subadditivity when $r−1≤1$ and its $L^{r−1}$ triangle inequality otherwise. The shell exponent divided by r−1 is 2−γ²r/2, strictly positive when $r<4/γ²$. On any compact parameter region this exponent has a positive lower bound wherever the induction uses it. The covariance comparison constants are bounded by $\operatorname{exp}(Cγ_{\operatorname{max}}²r_{\operatorname{max}}²)$. Induction through finitely many consecutive exponent intervals therefore proves the uniform estimate, including all regularized masses. For variable r near an interval endpoint use a slightly larger fixed exponent with a strict margin and Jensen. A finite parameter cover gives the asserted compact uniformity. [F1, F3, F2, step 599.1, algebra]

601.1 In particular every fixed compact gamma interval admits some raw moment $>2$ uniformly; the L² construction is not incorrectly used to assert moments at the critical exponent 4/γ². [F1, F3, F2, step 600.1, algebra]

602.1 **3. Uniform anchored inverse moments.** The existing inverse-moment construction is also uniform on compact I. To make this explicit, use the *same* independent-scale white-noise cone field $Y_ε$ for every γ and form $\operatorname{exp}(γY_ε−γ²\operatorname{Var}/2)$. Its covariance does not depend on γ. Its mean anchor mass is the fixed anchor area $m>0$, and its second moment is uniformly bounded by §1. Cauchy–Schwarz gives [F1, F3, F2, step 601.1, algebra]

603.1 $P(Z_γ≥m/2)≥m²/(4 sup_{γ∈I}E[Z_γ²])>0$. [F1, F3, F2, step 602.1, algebra]

604.1 Thus at one fixed Laplace argument t₀ the functions $φ_γ(t)=E[e^{-tZ_γ}]$ have a common upper bound $<1$. The two-separated-subdisk comparison gives [F1, F3, F2, step 603.1, algebra]

605.1 $φ_γ(e^s)≤φ_γ(e^{(1−a)s})²+C e^{-c s²}$,                    (3) [F1, F3, F2, step 604.1, algebra]

606.1 with $a>0$ fixed small and $C,c>0$ uniform in $γ∈I$. Indeed the only random scaling factor is a lognormal with log-variance bounded above and below on I and a fixed geometric scale; its lower-tail Gaussian estimate is uniform. Iterate (3) on geometric s intervals starting from the common strict bound. Choosing $δ∈(1,2)$ and a with $2(1−a)^δ>1$ yields a common bound C exp(−c(log $t)^δ$). Integrating $t^{p−1}φ_γ(t)$ proves $sup_{γ∈I}E[Z_γ^{-p}]<∞$ for every fixed $p>0$. [F1, F3, F2, step 605.1, algebra]

607.1 Cone cutoffs are conditional expectations of their limits, so inverse Jensen gives the same bound before removing ε. The actual field's covariance is dominated by the cone covariance plus a fixed common Gaussian variance on a fixed anchor disk. Convex Gaussian comparison transfers inverse moments with factor exp(Cγ²p(p+1)/2), uniformly bounded on I. Hence [F1, F3, F2, step 606.1, algebra]

608.1 $sup_{γ∈I,ε≤ε_{0}}E[M_{γ,ε}(anchor)^{-p}] +sup_{γ∈I}E[M_γ(anchor)^{-p}]<∞$.                         (4) [F1, F3, F2, step 607.1, algebra]

609.1 This verifies the parameter uniformity of the inverse moments rather than assuming it from their existence for each γ. [F1, F3, F2, step 608.1, algebra]

610.1 **4. Joint charged masses and their strict uniform moment domains.** Fix a compact set of distinct insertion configurations and real charges, with $γ∈I$. Define the actual charged mass in the three-point or N-point GMC formula by its positive deterministic singular weights; use the compatible regularized weights from Gaussian tilting, bounded by powers of $(|x−z_i|∨ε)$. Never leave an untruncated nonintegrable insertion weight at fixed field cutoff. [F1, F3, F2, step 609.1, algebra]

611.1 At insertion i the annular rth moment has exponent [F1, F3, F2, step 610.1, algebra]

612.1 $ξ_γ(r)−γa_i$ r $= γ(Q_γ−a_i)r−γ²r²/2$, $Q_γ=2/γ+γ/2$.                                              (5) [F1, F3, F2, step 611.1, algebra]

613.1 For a compact subset with $a_i<Q_γ$, choose a small fixed $r>0$ making (5) uniformly positive for every i. Subadditivity for $r≤1$ sums the annuli and bounds the discarded radius-δ neighborhood by $Cδ^κ$, uniformly in γ, charges and ε. The innermost ε disk satisfies the same bound by covariance rescaling. Away from those neighborhoods, joint same-field convergence (2) applies to the uniformly varying bounded weights. First remove ε, then let δ↓0. It follows that the charged masses $Z_{γ,a}$ vary continuously in probability with (γ,a,z), with a simultaneous locally uniform cutoff construction. [F1, F3, F2, step 612.1, algebra]

614.1 For any positive exponent t strictly below [F1, F3, F2, step 613.1, algebra]

615.1 $H(γ,a)=\operatorname{min}(4/γ²,\operatorname{min}_i 2(Q_γ−a_i)/γ)$,                      (6) [F1, F3, F2, step 614.1, algebra]

616.1 the same shell proof with tth powers gives a finite moment, uniformly on compact subsets of these strict inequalities; use subadditivity if $t≤1$ and the $L^t$ triangle inequality if $t>1$. Formula (5) is then uniformly positive. Every negative moment follows from a fixed anchor away from all insertions, whose charged weight has a uniformly positive lower bound, and (4). These bounds apply jointly to compatible field/insertion regularizations as well as to their actual limits. [F1, F3, F2, step 615.1, algebra]

617.1 To pass expectations with a varying exponent t, work locally in parameter space. If $t_{0}≥0$ and $t_{0}<H$ at the chosen point, pick a *fixed* $r>t_{0}$ still below the nearby H, with a strict margin. The preceding bounds uniformly control $E[Z^r]$. If $t_{0}<0$ use a fixed larger inverse power instead; around $t_{0}=0$ use both. Thus $Z^{t(γ,a)}$ is uniformly integrable on a neighborhood, while continuity in probability of $Z>0$ and continuity of t imply convergence in probability of the powered variables. Truncating to an interval $[L^{-1},L]$ and bounding its two tails by those higher positive/negative moments proves continuity of $E[Z^t]$. A finite parameter cover gives locally uniform continuity on compact strict domains. Log powers, if needed for charge derivatives, are controlled by the same strict moment margins; this file requires no derivative in γ. [F1, F3, F2, step 616.1, algebra]

618.1 **5. Actual correlations and the extended unit-volume expression.** For finite points the exact already derived unit-volume expression is [F1, F3, F2, step 617.1, algebra]

619.1 $Cbar_{sph}(γ,a,z)=(1/γ)\prod _{i<j}|z_i−z_j|^{-a_i a_j} E[Z_{γ,a,z}^{t}]$, $t=(2Q_γ−\sum _i a_i)/γ$, $Z_{γ,a,z}=\int |x|_+^{γ\sum a_i}\prod _i|x−z_i|^{-γa_i}M_γ(dx)$. [F1, F3, F2, step 618.1, algebra]

620.1 Use a fixed second coordinate chart when needed at infinity. Equations (2)–(6) prove joint real continuity on [F1, F3, F2, step 619.1, algebra]

621.1 $a_i<Q_γ$,   $t<\operatorname{min}(4/γ²,\operatorname{min}_i 2(Q_γ−a_i)/γ)$.                (7) [F1, F3, F2, step 620.1, algebra]

622.1 If a compact parameter set cannot be controlled by a single fixed positive exponent r, use the local finite cover in §4; no global comparison of max t with min H at different points is assumed. The displayed deterministic factors and 1/γ are continuous. Möbius coordinate transfer uses the already derived explicit background Gaussian transformation and continuous real factors depending on $Q_γ$; it does not use a divergent zero-mode integral outside Seiberg bounds. [F1, F3, F2, step 621.1, algebra]

623.1 On the strict real Seiberg domain $s=−t>0$ the actual sphere correlation is $μ^{-s}Γ(s) Cbar_{sph}$. All its factors are continuous on compact subsets, so $C_{sph}$ is jointly continuous in γ and real charges there. Away from Gamma poles the same conclusion holds for the meromorphic-normalized auxiliary expression on (7). At a Gamma pole do not assert a finite value of that expression; its unit-volume factor remains continuous. [F1, F3, F2, step 622.1, algebra]

624.1 **6. Unit-volume reflection is continuous at every strict real point.** Use the positive crossing-residue identity actually derived in reflection-analyticity-crossing-residue.md, not the inconsistent negative coefficient in the cached source: [F1, F3, F2, step 623.1, algebra]

625.1 $Rbar_γ(α)=πb/(Q_γ−α)² Cbar_{KRV}(γ;α,2b,α)$,  $b=γ/2$, $Cbar_{KRV}=2 Cbar_{sph}$.                                     (8) [F1, F3, F2, step 624.1, algebra]

626.1 This is a proved probabilistic relation whose right side has no Gamma factor. It does not assume a DOZZ formula. For every fixed pair (γ,α) with $γ/2<α<Q_γ$, the three charges (α,γ,α) lie in the strict extended domain (7). Indeed if $p=2(Q_γ−α)/γ$, their moment exponent is $t=p−1$. It is strictly below the two α thresholds p; it is below the γ threshold 4/γ²−1 exactly when $α>γ/2$; and it is below the raw 4/γ² threshold. Therefore §5 applies in a full real neighborhood of that pair. Equation (8) shows that $Rbar_γ(α)$ is jointly continuous there, in particular when γ varies and α is held fixed. This remains true if p is an integer, since neither Cbar nor (8) contains Γ(−p). [F1, F3, F2, step 625.1, algebra]

627.1 The full reflection normalization $R=μ^p$ pΓ(−p)Rbar has its actual Gamma poles at positive integers; finite continuity of R at those poles is not asserted. Its Gamma-normalized factor and all meromorphic identities can be compared by clearing that explicit Gamma factor. Finally the already constructed special-function product gives continuity of the candidate on the same compact real gamma sets. Consequently an equality proved first at irrational b² passes to rational b² through real sequences at every strict parameter point, with no removal of rational parameters from the original bootstrap claim. This passage uses continuity only and supplies no missing probabilistic shift or inversion identity. [F1, F3, F2, step 626.1, algebra]

628.1 **Reading and use boundary.** This proof reconstructs parameter uniformity from the actual Gaussian covariance identities and the local moment arguments already authored in the spectral/DOZZ suppliers; it is not a citation of a general GMC parameter theorem. The positive reflection formula consumed in (8) was derived separately from the actual crossing residue. The fixed-sphere measure convention is dc throughout, while the explicit KRV multiplier in (8) is retained. No analyticity in γ, critical-γ limit, or result at $γ≥\sqrt{2}$ is claimed. [F1, F3, F2, step 627.1, algebra]

629.1 **Twelfth DOZZ supplier: exact reflection, two-shift uniqueness, and the three-point identity.** This completes the probabilistic three-point identification on the full original bootstrap interval $0<γ<\operatorname{sqrt}(2)$. It uses the actual constructions in the preceding eleven DOZZ suppliers. The complementary mathematical inputs in ../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-liouville-ward/ are the explicit Υ integral/product/ratio proof, the two-pole holomorphic subtraction, the corrected crossing-residue algebra, and the actual same-GFF real-γ continuity proof. No DOZZ identity is an input to those suppliers. [F1, F5, step 628.1, algebra]

630.1 Put $b=γ/2,h=1/b,Q=b+h,L=πμℓ(b²)>0,K=L b^{(2−2b²)}$. Write D for the actual explicitly DEFINED DOZZ special function, not yet identified with a correlation. Write $C=2C_{sph}$ for the KRV probabilistic normalization. The result is [F1, F5, step 629.1, algebra]

631.1 $$\begin{gathered}\text{C(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3)=D(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3),}\\\text{C\_sph(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3)=(1/2)D(}\alpha\text{1,}\alpha\text{2,}\alpha\text{3)                (1)}\end{gathered}$$ [F1, F5, step 630.1, algebra]

632.1 for all real $α_i<Q$ with $\sum α_i>2Q$. The equality also identifies their meromorphic charge continuation. Rational b² and resonant Gamma factors are included by the proved continuity argument below; there is no irrationality restriction in (1). [F1, F5, step 631.1, algebra]

633.1 **1. Construct the candidate reflection function from the actual Υ function.** The separately proved Υ construction gives entire continuation, reflection $\Upsilon(Q−x)=\Upsilon(x)$, the b and h shifts directly from its defining integral, $\Upsilon'(0)=\Upsilon(b)>0$, and every zero with its actual multiplicity. Its double product is locally uniform in $b>0$. In particular it is positive on the real strip (0,Q). [F1, F5, step 632.1, algebra]

634.1 Directly in the displayed candidate D, let its middle charge $ε→0$ with the other two equal to α. The two denominator factors Υ(ε/2) and the numerator Υ(ε) give [F1, F5, step 633.1, algebra]

635.1 $$\begin{gathered}\text{lim }\varepsilon\text{D(}\alpha\text{,}\varepsilon\text{,}\alpha\text{)=4K\textasciicircum{}[(Q}-\text{}\alpha\text{)/b] Υ(}\alpha\text{)/Υ(}\alpha\text{}-\text{Q).}\end{gathered}$$ [F1, F5, step 634.1, algebra]

636.1 The factor four is from Υ(ε)/Υ(ε/2)²∼4/[εΥ′(0)]; no probabilistic normalization is used. Set $ν=Q−α,p=ν/b$ and define [F1, F5, step 635.1, algebra]

637.1 $$\begin{gathered}\text{R\_D(}\alpha\text{)=K\textasciicircum{}p Υ(}\alpha\text{)/Υ(}\alpha\text{}-\text{Q)}\\\text{=}-\text{L\textasciicircum{}p }\Gamma\text{(}-\text{b}\nu\text{)/}\Gamma\text{(b}\nu\text{) }\cdot\text{}\Gamma\text{(}-\text{p)/}\Gamma\text{(p).              (2)}\end{gathered}$$ [F1, F5, step 636.1, algebra]

638.1 To verify the second equality, apply the h shift then the b shift to $x=α−Q=−ν$. Their ℓ factors are ℓ(−hν) and ℓ(1−bν); their b power is $b^{(−2+2bν−2hν)}$. Gamma recurrence gives the product −b² times the two Gamma quotients in (2). Multiplication by $K^p$ cancels the remaining b powers. Thus every sign and power in (2) follows from the constructed Υ, rather than an assumed reflection amplitude. [F1, F5, step 637.1, algebra]

639.1 The Gamma-normalized candidate is [F1, F5, step 638.1, algebra]

640.1 $$\begin{gathered}\text{Rbar\_D(}\alpha\text{)=R\_D/[}\mu\text{\textasciicircum{}p p}\Gamma\text{(}-\text{p)]}\\\text{=}-\text{[}\pi\text{}\ell\text{(b}{}^{2}\text{)]\textasciicircum{}p }\Gamma\text{(}-\text{b}\nu\text{)/[p}\Gamma\text{(b}\nu\text{)}\Gamma\text{(p)].             (3)}\end{gathered}$$ [F1, F5, step 639.1, algebra]

641.1 For $b<α<Q$ one has $0<bν<1$. Therefore $Γ(−bν)<0$ and all other factors in (3) are positive; $Rbar_D$ is strictly positive and finite. Also $R_D(Q)=−1$ by the two elementary Gamma ratios at zero. [F1, F5, step 640.1, algebra]

642.1 **2. Verify the candidate shifts and determine the unknown dual constant.** Gamma recurrence in (2) gives [F1, F5, step 641.1, algebra]

643.1 $$\begin{gathered}\text{R\_D(a}-\text{b)=B\_b(a}-\text{b)R\_D(a),}\\\text{R\_D(a)/R\_D(a+h)}\\\text{=}-\text{c\_D/[}\ell\text{(}-\text{h}{}^{2}\text{)}\ell\text{(ha)}\ell\text{(2+h}{}^{2}\text{}-\text{ha)],}\\\text{c\_D=L\textasciicircum{}(h}{}^{2}\text{)/}\ell\text{(h}{}^{2}\text{)=b}{}^{2}\text{}\pi\text{}\mu\text{R\_D(2b).                    (4)}\end{gathered}$$ [F1, F5, step 642.1, algebra]

644.1 For an explicit algebra check put $F(x)=Γ(−x)/Γ(x)=−1/[xℓ(x)]$. Its ratio F(x)/F(x−b²) supplies the first recurrence, while $F(x)/F(x−1)=−1/[x(x−1)]$ and the h² shift of the other factor supply the second. At $a=2b$, $bν=1−b²$ and $p=h²−1$; substituting these in (2) gives the last equality in (4). No “dual potential” is used to set $c_D$. [F1, F5, step 643.1, algebra]

645.1 The ACTUAL reflection coefficient was proved to satisfy the same b recurrence and the second recurrence with $cγ=b²πμR(2b)$, in the tenth and eleventh suppliers. First take irrational b², so all these quantities can be evaluated off their isolated Gamma poles. Put $ψ=R/R_D$. On $b<a<Q$ the common Gamma factor cancels, so $ψ=Rbar/Rbar_D$ is strictly positive and analytic, including the removable ratios at integer p. Its b recurrence makes it b-periodic on the meromorphic strip. Since the original interval has width $h>b$, every real point has a b-translate inside that strictly positive interval. Hence ψ has no real zero or pole and is bounded above and below by positive constants on the real line. [F1, F5, step 644.1, algebra]

646.1 The dual recurrence gives [F1, F5, step 645.1, algebra]

647.1 $$\begin{gathered}\text{}\psi\text{(a)/}\psi\text{(a+h)=c}\gamma\text{/c\_D=}\psi\text{(2b)>0.}\end{gathered}$$ [F1, F5, step 646.1, algebra]

648.1 Iterating this identity along a+nh, $n∈Z$, and using those uniform positive bounds forces $cγ/c_D=1$. Thus h is also a period. If $h/b=1/b²$ is irrational, integer combinations of b and h are dense in R. For completeness pigeonhole the fractional parts of nh/b to obtain nonzero periods tending to zero; their integer multiples approximate any real displacement. Continuity then makes ψ constant on R, and meromorphic uniqueness makes it constant throughout its strip. Its value at Q is one, since both R(Q) and $R_D(Q)$ equal −1. Therefore [F1, F5, step 647.1, algebra]

649.1 $$\begin{gathered}\text{R=R\_D,   c}\gamma\text{=c\_D,                                 (5)}\end{gathered}$$ [F1, F5, step 648.1, algebra]

650.1 at irrational b². This proves the actual reflection normalization and the dual constant from the constructed probabilistic coefficient. Positivity, not an unproved bounded entire-function assertion, was used to eliminate the possible quasiperiod multiplier. [F1, F5, step 649.1, algebra]

651.1 **3. Derive the SECOND three-point shift from the actual dual channel.** Fix real spectators α2,α3 sufficiently close to Q and let $F(a)=C(a,α2,α3)$. The proved first probabilistic $γ=2b$ shift extends F meromorphically to a strip around R: the original interval (2η,Q), for sufficiently small spectator margin η, has width greater than 2b; the first shift holds on overlaps and fixes the continuation. The proved gluing gives $F(u)=R(u)F(2Q−u)$ near Q and hence throughout that strip by meromorphic uniqueness. [F1, F5, step 650.1, algebra]

652.1 The ACTUAL dual reflected fusion and its constructed BPZ monodromy give, for a close to Q, [F1, F5, step 651.1, algebra]

653.1 $$\begin{gathered}\text{H\_h(a)F(a}-\text{h)=R(a)F(2Q}-\text{a}-\text{h)}\\\text{=[R(a)/R(a+h)]F(a+h).}\end{gathered}$$ [F1, F5, step 652.1, algebra]

654.1 Using (5), the coefficient on the right is exactly [F1, F5, step 653.1, algebra]

655.1 $$\begin{gathered}\text{B\_h(a)=}-\text{c\_D/[}\ell\text{(}-\text{h}{}^{2}\text{)}\ell\text{(ha)}\ell\text{(2+h}{}^{2}\text{}-\text{ha)].}\end{gathered}$$ [F1, F5, step 654.1, algebra]

656.1 Thus the second three-point shift is PROVED: [F1, F5, step 655.1, algebra]

657.1 $$\begin{gathered}\text{F(a+h)/F(a}-\text{h)=H\_h(a)/B\_h(a).                     (6)}\end{gathered}$$ [F1, F5, step 656.1, algebra]

658.1 It extends along the same strip by the identity theorem. The original first shift is $F(a+b)/F(a−b)=H_b(a)/B_b(a)$. Both were derived from the same positive γ GMC; no action containing an $e^{(2φ/γ)}$ screening was introduced. [F1, F5, step 657.1, algebra]

659.1 **4. Two-period uniqueness identifies the full three-point function.** The complementary special-function proof, starting from the actual Υ integral/product, gives the EXACT candidate identities [F1, F5, step 658.1, algebra]

660.1 $$\begin{gathered}\text{D(a+j)/D(a}-\text{j)=H\_j(a)/B\_j(a),   j=b,h.}\end{gathered}$$ [F1, F5, step 659.1, algebra]

661.1 Its proof retains the external-charge independent factor $j^{(−2jQ)}$ and every Gamma recurrence. Thus $Ψ(a)=F(a)/D(a,α2,α3)$ is a meromorphic function with periods 2b and 2h. On the original real Seiberg interval (2η,Q), both F and D are finite and strictly positive: every Υ argument in numerator and denominator lies in (0,Q), $\Upsilon'(0)>0$, $K>0$, and the actual GMC correlation is positive. Choose η with $Q−2η>2b$. Periodicity therefore removes all real zeros/poles of the quotient and gives real continuity. For irrational b² the two periods are incommensurable. The elementary density argument of step 2 implies Ψ is constant; meromorphic uniqueness makes it constant on the strip. [F1, F5, step 660.1, algebra]

662.1 The resulting constant can at first depend on α2,α3. Both the actual three-point coefficient and D are symmetric in the three charges: for the actual coefficient this follows from permutation of the probabilistic insertions and the proved Möbius covariance. On a cube of charges sufficiently close to Q, applying the one-variable result in each coordinate therefore makes the constant depend only on γ. By charge analyticity on the connected real extended domain U3, with Gamma poles treated meromorphically, we have [F1, F5, step 661.1, algebra]

663.1 $$\begin{gathered}\text{C=a}\gamma\text{ D                                             (7)}\end{gathered}$$ [F1, F5, step 662.1, algebra]

664.1 throughout that domain. [F1, F5, step 663.1, algebra]

665.1 Take a generic $b<α<Q$ with p not an integer and use the actual equal-charge three-to-two bridge. Its residue is $\operatorname{lim}_{(ε↓0)}εC(α,ε,α)=4R(α)$. The candidate residue was computed in step 1 and is $4R_D(α)$. Equations (5) and (7) force $aγ=1$. This proves (1) first at irrational b², with its correct dc/KRV factor and the full real Seiberg charge domain, not only near-Q spectators. [F1, F5, step 664.1, algebra]

666.1 **5. Rational and resonant parameters are not excluded.** The completed gamma-continuity-of-gmc-correlations-and-reflection.md proves joint real-γ continuity of the actual $C_{sph}$ on every compact strict Seiberg domain, by the same-field mixed L² GMC identity, uniform charged annular bounds and uniform positive/inverse moments. It separately proves continuity of Rbar across integer p using the positive relation $Rbar=πb Cbar_{KRV}(α,2b,α)/(Q−α)²$; it does not falsely assert finite continuity of R at its Gamma poles. The constructed Υ double product is locally uniform in b and gives the exact rational multiplicities of its zeros. [F1, F5, step 665.1, algebra]

667.1 At any rational b0² in the bootstrap interval and any fixed strict real Seiberg charge triple, choose irrational $b_n²→b0²$ retaining all strict inequalities. Both sides of (1) converge by these actual continuity results. This proves (1) at b0. The real Seiberg open set then fixes the same meromorphic charge continuation by holomorphic uniqueness. Likewise the normalized reflection equality passes through all strict (γ,α) by continuity; restore the explicit Gamma factor only as a meromorphic identity. [F1, F5, step 666.1, algebra]

668.1 Intermediate formal notation $μ_h=c_D/π$ may have a sign or a pole when h² is an integer. It is not a new positive coupling. The complete coefficient uses [F1, F5, step 667.1, algebra]

669.1 $$\begin{gathered}\text{}\pi\text{}\mu\text{\_h/}\ell\text{(}-\text{h}{}^{2}\text{)=}-\text{K\textasciicircum{}(h/b)h\textasciicircum{}(2hQ),}\end{gathered}$$ [F1, F5, step 668.1, algebra]

670.1 proved in the special-function supplier and finite in the bootstrap interval. Combine this expression BEFORE evaluating a resonance. The final equality (1) itself involves only the positive original μ and entire Υ functions, so it excludes no rational b² or physical charge on account of an intermediate divided Gamma expression. [F1, F5, step 669.1, algebra]

671.1 **Exact theorem interface and continuation limit.** The proven interface is the actual sphere-model three-point identity $C_{sph}=D/2$ for $γ<\operatorname{sqrt}(2)$, all real individual $charges<Q$ and $total>2Q$, together with the uniquely identified meromorphic continuation. The proof includes the original GMC normalization, both actual degenerate BPZ equations, first fusion, reflected fusion, charge analyticity, reflection-tail normalization, two-pole continuation, inversion/gluing, dual fusion/shift and irrational/rational uniqueness. No generic literature theorem is substituted for any of those steps. [F1, F5, step 670.1, algebra]

672.1 For physical continuum charges $α3=Q±iP$, the displayed DOZZ expression is the resulting meromorphic function. For real $a,b∈(0,Q)$, $a+b>Q$ and $P>0$, its four denominator arguments all have real parts strictly between 0 and Q, so none is a zero of Υ. The numerator Υ(Q±iP) is also nonzero for $P>0$; the only real-endpoint zero occurs at $P=0$. Identification with the ACTUAL radial Poisson primary overlap still uses the separate FK/Poisson analytic-boundary supplier. That last Hilbert-space boundary passage is not implied merely by writing a meromorphic expression, and no gate/readiness/native acceptance is claimed by this research file. [F1, F5, step 671.1, algebra]

673.1 **The primary Poisson overlap is the continued actual three-point function.** Research completion of the Ward/FK bridge, supplying the exact last primary interface for the fixed-radius bootstrap assembly. The analytic/FK identification is proved below from the already constructed interfaces. The explicit DOZZ substitution now consumes the completed research theorem ../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-liouville-dozz/dozz-identification-and-uniqueness.md, SHA256 2a171e282af3ce5a3020ff90daf4ea5189fda51d727b52214851903e5b591a57. This binds an actually authored theorem, not a previously pending premise. [F1, F3, F4, step 672.1, algebra]

674.1 Fix $0<γ<\sqrt{2}$, $μ>0$, $Q=2/γ+γ/2$ and real $a,b<Q$ with $a+b>Q$. Then $0<a,b<Q$. Set $δ=a+b−Q>0$. Use the actual corrected disk vector $U_{a,b}$, the incoming-amplitude-one Poisson family, and the actual sphere measure dc. [F1, F3, F4, step 673.1, algebra]

675.1 **1. The holomorphic scalar is bilinear, not a parameter-dependent bra.** Fix the Hilbert convention $<f,g>_H=\int$ f conjugate(g). For complex internal u let $\Psi_u$ be the actual analytic primary Poisson family with seed exp((u-Q)c) times the empty oscillator polynomial 1. Define $B_z(u)=\int U_{a,b}(0,z) \Psi_u$ dc $dP_T$, without conjugating $\Psi_u$. This is a bilinear dual pairing. Dividing by $\operatorname{exp}(2(\Delta_u-\Delta_a-\Delta_b)\operatorname{log}|z|)$ defines its scalar coefficient $s_z(u)$. The logarithm is the real logarithm of |z|, so this coordinate factor is holomorphic in u. For $u=Q-\kappa$ with $\kappa>0$, choose the pairing growth weight B so that [F1, F3, F4, step 674.1, algebra]

676.1 $κ<B<δ$.                                                                  (1) [F1, F3, F4, step 675.1, algebra]

677.1 The charged-disk construction gives $e^{-B \rho}U$ in H, where $\rho=c$ far left and $\rho=0$ on the right. The seed lies in the dual growing space: $e^{B \rho}\operatorname{exp}(-\kappa c)$ is square integrable at the left end because $B>\kappa$. The Poisson correction belongs to the same growing space by the supplied weighted resolvent construction. Hence $|B_z(u)|\le ||e^{-B \rho}U|| ||e^{B \rho}\Psi_u||$, locally uniformly with one B on each compact continuation neighborhood. $B_z$ is holomorphic there, since this fixed continuous bilinear pairing of the two Hilbert-valued holomorphic families is holomorphic. This is distinct from the correction-resolvent weight beta in (S8), chosen between max(0,kappa-gamma/2) and kappa; it does not incorrectly place the growing incoming seed in that smaller correction space. The embeddings are compatible because $\beta<\kappa<B$. [F1, F3, F4, step 676.1, algebra]

678.1 The level-zero family has $k=−i(u−Q)$, $p=k$. Thus the supplied connected analytic region (S8) contains every $u<Q$ on the real axis: Im $k=κ>0$ and $κ>\operatorname{max}(0,κ−γ/2)$. It continues from sufficiently negative real u to the physical line $u=Q+iP$. Local uniqueness of the Poisson/resolvent construction identifies all overlaps when the auxiliary weights change. [F1, F3, F4, step 677.1, algebra]

679.1 **2. Actual correlation identification by adding and removing genuine spectators.** The semigroup limit (S9) and the exact annular FK construction identify the level-zero Poisson pairing with a genuine sphere correlation for sufficiently negative real u **provided enough external insertions are present**. They do not by themselves assert that a two-external Seiberg correlation exists there. [F1, F3, F4, step 678.1, algebra]

680.1 Here is the explicit continuation avoiding that mistake. Choose one sufficiently negative u₀ for (S9), and add finitely many spectator insertions with charges $c_j∈(0,Q)$, at distinct fixed exterior points. Their number may be arbitrarily large. Choose their total so that [F1, F3, F4, step 679.1, algebra]

681.1 $a+b+\sum _j c_j>2Q−u_{0}$. [F1, F3, F4, step 680.1, algebra]

682.1 This is exactly the strict total-charge Seiberg inequality for every real u between u₀ and any prescribed $u<Q$ closer to Q. It also gives an exterior-vector zero-mode decay exponent greater than Q−u₀, so a single growth weight larger than max(Q−u) on that compact interval is allowed. The incoming family is holomorphic in u by (S8), and the external disk vector is Hilbert-valued holomorphic in its charges by the unshifted hole construction. The actual many-point correlation is holomorphic near this strict real Seiberg set by the same already proved construction. They agree on an open real interval near u₀ by (S9)+FK, including the empty-descendant normalization one. The identity theorem continues that equality along the entire indicated real interval; the extra weights affect only the topology used to pair, not the scalar function. [F1, F3, F4, step 681.1, algebra]

683.1 Now choose κ with $0<κ<δ$ and set $u=Q−κ$. Decrease all spectator charges to zero along their real straight paths, keeping a,b fixed. Throughout this second path [F1, F3, F4, step 682.1, algebra]

684.1 $u+a+b+\sum _j c_j(t) ≥ 2Q+δ−κ>2Q$, [F1, F3, F4, step 683.1, algebra]

685.1 and all individual charges remain $<Q$. Hence every correlation on the path is a genuine convergent Seiberg correlation. A fixed growth weight B with $κ<B<δ$ is available throughout. Holomorphic charge uniqueness along overlapping polydisks transports the preceding equality to the endpoint with $c_j=0$. At finite cutoffs the vertex of charge zero is exactly one, so the spectator removal introduces no constant or contact factor; its charged convergence removes it in the limit as well. [F1, F3, F4, step 684.1, algebra]

686.1 It follows that the very same bilinear scalar $s_z(u)$, rather than the anti-holomorphic map u to $<U,\Psi_u>$, is precisely the actual three-point coefficient [F1, F3, F4, step 685.1, algebra]

687.1 $C_{sph}(a,b,u)$,   $2Q−a−b<u<Q$.                                                (2) [F1, F3, F4, step 686.1, algebra]

688.1 Use a real disk insertion radius first to avoid irrelevant conjugation of its coordinate; the already proved Möbius covariance normalizes the three points to $(0,1,∞)$. Equality at every other disk coordinate follows by that covariance and the pointwise Hilbert-continuity upgrade in the Ward bridge. No three-point value has been postulated in obtaining (2). [F1, F3, F4, step 687.1, algebra]

689.1 **3. Continue the same scalar to the physical Poisson boundary.** Choose a fixed small $B_{0}<\operatorname{min}(δ/2,γ/4)$ and restrict $0<κ<B_{0}/2$. Then all primary states $u=Q−κ+iP$ in a fixed compact positive-P interval are in the common growing weighted space for B₀, while U is in its dual. The supplied finite-channel continuation (S4) and (S8) make their scalar pairing holomorphic in u to the left of Re $u=Q$ and meromorphic through its physical boundary away from discrete oscillator thresholds. The source's absence-of-real-poles argument removes nonthreshold physical poles. The incoming cutoff residual belongs to the required weighted source: its left potential exponent is $γ−κ>B_{0}$. Thus the same weights control the actual boundary pairing; it is not a formal boundary evaluation of an unrelated analytic function. [F1, F3, F4, step 688.1, algebra]

690.1 The connected continuation of $B_z$ from the real interval in (2) gives its actual physical boundary scalar. Its real structure is fixed independently: H, the real cutoff and the empty incoming polynomial commute with complex conjugation, and conjugation sends the physical resolvent to its conjugate physical resolvent. The cutoff Poisson construction therefore gives $conjugate(\Psi_u)=\Psi_conjugate(u)$ on conjugate weighted domains, first at negative real u and then by holomorphic uniqueness and boundary continuation. At the positive spectral boundary, $conjugate(\Psi_{Q+iP})$ is the conjugate boundary family $\Psi_{Q-iP}$; this statement does not renormalize either incoming coefficient. The actual target coefficient occurs in $<U,\Psi_{Q+iP}>$, with U real for the real external charges. Consequently it is $B_z(Q-iP)$, after division by its primary coordinate power, and hence $s_z(Q-iP)$. In terms of the actual continued sphere coefficient, this proves [F1, F3, F4, step 689.1, algebra]

691.1 $p_{a,b}(P)=C_{sph}(a,b,Q−iP)$                                                  (3) [F1, F3, F4, step 690.1, algebra]

692.1 for almost every $P>0$. To obtain the negative imaginary label one may equivalently conjugate the proved bilinear positive-boundary identity, since the sphere coefficient is real on its real Seiberg interval and obeys Schwarz conjugation under its continued Gaussian formula. Thresholds and finite-Gram exceptions are countable, and the actual boundary pairing agrees outside their null set. The coefficient of the incoming wave in $\Psi_{Q+iP}$ is one because its cutoff seed is exp(iPc) times 1; the negative-real semigroup limit identifies that same family before continuation. Conjugating the existing state is precisely what the Hilbert bra does. A scattering reflection coefficient is already encoded in its outgoing wave and is not an additional multiplier of (3). No factor 1/sqrt(2pi) is inserted: dP/(2pi) belongs to the separate completeness formula. [F1, F3, F4, step 691.1, algebra]

693.1 **4. Final substitution of the completed probabilistic DOZZ theorem.** The completed probabilistic DOZZ theorem proves on the real three-point Seiberg domain, in these exact conventions, [F1, F3, F4, step 692.1, algebra]

694.1 $C_{sph}(a,b,u)=\tfrac12D_{γ,μ}(a,b,u)$.                                              (4) [F1, F3, F4, step 693.1, algebra]

695.1 Its factor 1/2 compares the actual dc measure with KRV's 2dc. Its full rational-parameter and resonant continuation are included in that constructed theorem. Equations (2) and (4) agree on a nonempty open real interval. The explicit candidate D is holomorphic in an open vertical strip containing Re $u=Q$ and a subinterval immediately to its left. To verify rather than assume this, at $u=Q+iP$ its denominator Upsilon arguments have real parts [F1, F3, F4, step 694.1, algebra]

696.1 (a+b−Q)/2,  (Q+b−a)/2,  (Q+a−b)/2,  (a+b−Q)/2, [F1, F3, F4, step 695.1, algebra]

697.1 all strictly between 0 and Q. They remain there in a common small strip about Re $u=Q$. The defining-strip Upsilon is an exponential of a holomorphic integral and has no zeros there. The numerator is entire by the already constructed product, and its positive-base power is holomorphic. Thus no physical candidate pole is crossed. [F1, F3, F4, step 696.1, algebra]

698.1 Holomorphic uniqueness on the overlap in (2), followed by the actual Poisson boundary limit in §3 and the real conjugation of the candidate, gives [F1, F3, F4, step 697.1, algebra]

699.1 $p_{a,b}(P)=\tfrac12D_{γ,μ}(a,b,Q−iP)$                                               (5) [F1, F3, F4, step 698.1, algebra]

700.1 for almost every $P>0$. This is the full primary interface required by fixed-radius-bootstrap-assembly.md. Combining (5) for the two pairs with its already proved Parseval domination gives the unchanged four-point Statement and exactly 1/(8π); no n-point DOZZ theorem, uniform large-P candidate estimate, or r↑1 disk limit is needed. [F1, F3, F4, step 699.1, algebra]

701.1 **Scope.** The FK/Poisson/GMC identification (2)–(3) is an actual derived interface. The explicit-candidate replacement (5) consumes the completed separate probabilistic identity (4); it adds no assumption to the public theorem. The spectral and charge-holomorphy constructions were consumed at their precise authored interfaces; this file is the missing identification, not another review of their proofs. Production remains untouched until the full assembled supplier packet is offered and authorized. [F1, F3, F4, step 700.1, algebra]

702.1 The constructed probabilistic three-point identity has the actual sphere normalization $C^{\mathrm{sph}}=C^{\mathrm{DOZZ}}/2$ on the complete strict Seiberg domain and its identified meromorphic continuation, including rational $b^2$. The actual normalized Poisson boundary identification gives $p_{a,b_0}(P)=C^{\mathrm{DOZZ}}(a,b_0,Q-iP)/2$ for almost every $P>0$. These are precisely the two conclusions of the Statement. [step 672.1, step 701.1, F1, F4, F5] ∎
