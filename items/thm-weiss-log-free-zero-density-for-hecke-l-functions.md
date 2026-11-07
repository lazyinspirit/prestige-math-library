---
id: thm-weiss-log-free-zero-density-for-hecke-l-functions
kind: theorem
title: Weiss field-uniform log-free zero-density theorem for Hecke L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
- def-hecke-l-zero-counting-function
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives
- thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions
- thm-deuring-heilbronn-phenomenon-for-hecke-l-functions
- lem-primitive-hecke-analytic-landau-page-family-core
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-natural-logarithm-laws
- thm-exponential-beats-every-polynomial
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
proof_strategy: unweighted field-uniform density and direct Deuring–Heilbronn multiplication
  with the exact endpoint logarithm ledger
axiom_use: Original AC, CC and DC scope retained. Actual primitive Hecke/zero-product
  inputs use AC+CC; no class-field realization or Stark exceptional-zero lower bound
  is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: A. R. Weiss, the least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Theorem 4.3 and complete proof, printed pp. 76–84; Theorem 1.9, zero
      detector, and Theorem 3.7 are used in the proof.
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §§5–6, especially the zero-detection argument and Theorem 3.2 proof,
      printed pp. 1160–1170.
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field of degree $n_K$, absolute discriminant $D_K$, and let $Q\ge2$, $T\gg1$, and $\mathcal L=\log(QT^{n_K})$. Let $H$ be a congruence class group of $K$, with $h_H$ the order of its ideal-class quotient and $d(H)$ the maximum conductor discriminant $D_KN\mathfrak f_\chi$ among characters trivial on $H$. Assume $d(H)\le Q$, put $q(H)=n_K^{2n_K}h_Hd(H)$ and $Q_H=\max\{q(H)^{1/2},Q\}$. Let $N_H^*(\alpha,Q,T)$ count with multiplicity zeros $\rho$ of primitive Hecke $L$-functions of conductor discriminant at most $Q$, for characters trivial on $H$, satisfying $\operatorname{Re}\rho\ge\alpha$ and $|\operatorname{Im}\rho|\le T$, with the possible unique exceptional real simple zero $\rho_*=\beta_*$ omitted. For fixed absolute constants $c_6,c_7>0$ and $c_6\le\alpha\le1-c_7/\mathcal L$, one has
$$N_H^*(\alpha,Q,T)\ll \Delta_*\,(Q_HT^{n_K})^{c_8(1-\alpha)},$$
where $c_8>0$ is absolute and effective, and $\Delta_*=(1-\beta_*)\mathcal L$ when the exceptional zero exists and $\Delta_*=1$ when it does not.

## Statement references

[[def-hecke-l-zero-counting-function|Hecke zero-counting convention]]

[[thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions|Full explicit field-uniform density estimate]]

[[thm-deuring-heilbronn-phenomenon-for-hecke-l-functions|Direct Hecke zero repulsion]]

## Facts & Assumptions

**Given:** The original field, conductor cutoff $Q$, height $T$, group $H$, fixed absolute constants $c_6,c_7>0$, zero convention, possible exceptional occurrence and $\alpha$ in the Statement, with $q(H)$ corrected to its exact primary-source definition. Put $n=n_K$, $D=D_K$, $h=h_H$, $X=Q_HT^n$, $L=\log(QT^n)$ and $\Delta=1-\alpha$.

[F1] The zero count uses function-theoretic multiplicities. Primitive reduction preserves $h$, the conductor maximum and positive-critical zeros and their multiplicities. [[def-hecke-l-zero-counting-function]] [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]]

[F2] The full explicit density theorem gives $\sum_\chi N(\sigma,U,\chi)\le C\{e^{Cn}D^2Q_0U^{n+2}\}^{81(1-\sigma)}$ for $1/2\le\sigma<1$ and $U\ge\max\{n^{5/6}(D^{4/3}Q_0^{4/9})^{-1/n},1\}$, with absolute effective constants. [[thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions]]

[F3] Uniform local occurrence counts in discs of radius at most $3/4$ centred at $1+it$ are at most $2u\mathcal L_0+4$, where $\mathcal L_0=\log D+\frac12\log Q_0+(\frac12n+1)\log(U+3)+100n$. [[lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives]]

[F4] Primitive Hecke functional equations reflect nontrivial zero occurrences across $1/2$, preserving multiplicity and height magnitude, in the conjugate family, which is the same finite character family. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F5] The proved Hecke Deuring–Heilbronn theorem applies to any retained target zero of real part at least $1/2$, excluding only the designated occurrence in the same primitive function, with both coefficient triples and effective constants stated there. [[thm-deuring-heilbronn-phenomenon-for-hecke-l-functions]]

[F6] For conductor discriminant at most $Q'$, height $T'$ and $\log(Q'T'^n)\ge n$, the strip $\beta\ge1-c_1/\log(Q'T'^n)$ contains at most one occurrence; it is real/simple and its primitive character is real, with $c_1=1/4{,}000{,}000$. [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F7] Positive logarithms have their product laws, and fixed logarithmic factors are bounded by effective fixed powers. [[thm-natural-logarithm-laws]] [[thm-exponential-beats-every-polynomial]]

[A1] Retain AC, CC and DC from the original public Statement. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Reduce $H$ primitively using [F1], without changing the count or parameters. Its distinct primitive ancestors form a finite character family with maximum finite conductor norm $Q_0\le Q/D\le Q$. Let $Q_H=\max\{(n^{2n}hd(H))^{1/2},Q\}$. Then $Q_H\ge2$, $D\le Q_H$, $h\le Q_H^2$ and $Q_H\ge n^n$. Hence $n\le C\log Q_H$ with an absolute effective $C$: use $n\log2\le n\log n$ for $n\ge2$, and $\log Q_H\ge\log2$ for $n=1$. In particular $L\le\log X$, $\log D+\log Q_0+n\log(T+3)+n\le C\log X$, and $\Delta\ge c_7/L$. These are the precise size comparisons used below; the factor $n^{2n}$ is not discarded. [A1, F1, F7, given, construct, algebra]

2.1 We prove an unweighted bound $N_H^*(\alpha,Q,T)\le C X^{a\Delta}$ with an absolute effective $a$. If $\alpha>1/2$, put $T'=\max\{T,n^{5/6}(D^{4/3}Q_0^{4/9})^{-1/n},1\}\le T n^{5/6}$. Apply [F2] at $T'$. Since $D^2Q_0\le Q_H^3$, $n^{5(n+2)/6}\le(n^n)^{5/2}\le Q_H^{5/2}$, $T^{n+2}\le T^{3n}$ and $e^{Cn}\le Q_H^{C'}$ by step 1.1, the base is at most $X^A$ for an absolute effective $A$. To include the closed condition $\beta\ge\alpha$, apply the bound with $\sigma<\alpha$ tending up to $\alpha$: a finite occurrence list on the bounded rectangle stabilizes to this closed count, and its scalar upper bound converges continuously. For $\alpha\le1/2$, count the whole critical rectangle instead. Reflect zeros left of $1/2$ by [F4] into the right half of the conjugate family. Cover the right-half rectangle by $CT$ discs of radius $3/4$ centred at $1+it_j$ with $|t_j|\le T+1$. Each contains every zero with ordinate in its unit interval and real part at least $1/2$, since the squared horizontal and vertical distances total at most $1/2<9/16$. By [F3] and step 1.1 the whole count is at most $ChT\log X\le CX^4$. Here $\Delta\ge1/2$, so increasing $a$ gives the same $CX^{a\Delta}$ bound. Omitting the exceptional occurrence only decreases it. [F1, F2, F3, F4, F7, step 1.1, construct, algebra]

3.1 If no exceptional zero exists, the required factor is one and step 2.1 completes the proof. Otherwise write $\delta=1-\beta_*>0$ and $r=(\log X)/L\ge1$. The endpoint hypothesis gives $\Delta\log X\ge c_7r$, so $r\le e^r\le X^{\Delta/c_7}$. Fix a small absolute $\kappa>0$ below. If $\delta\log X\ge\kappa$, then $\delta L\ge\kappa/r\ge\kappa X^{-\Delta/c_7}$. Multiplication with step 2.1 already proves the required result after increasing the absolute exponent. Thus only $\delta\log X<\kappa$ remains. Choose $\kappa$ small enough that $\delta<c_6/2$ and that [F6] applies to $\beta_*$ at $Q'=e^nQ$, $T'=T+3$. This is possible uniformly: step 1.1 gives $n\le\log(Q'T'^n)\le C\log X$, so take $\kappa<c_1/C$, as well as $\kappa<c_6\log2/2$. The exceptional occurrence is consequently simple and its primitive character real. No quadratic class field or Stark bound has been used. [F1, F6, F7, step 1.1, step 2.1, algebra]

4.1 Suppose now that the nonexceptional count is positive. Choose one occurrence in its finite list. If its real part $\beta$ is at least $1/2$, retain it as a target. Otherwise use its reflected occurrence from [F4], of real part $\beta'=1-\beta>1/2$. In either case its distance $\Delta'=1-\beta'$ from one is at most $\Delta$: in the reflected case $\Delta'=\beta<1/2\le\Delta$. The retained target is not the excluded exceptional occurrence of [F5]. This is given by the $N_H^*$ omission in the unreflected case; in the reflected case equality to $\beta_*$ would imply that the original real part was $\delta<c_6\le\alpha$, contradicting its inclusion. Any equal-valued zero of a different function is retained under the precise occurrence convention, and also excluded by [F6] at the present closeness. Thus [F5] applies literally. [F1, F4, F5, F6, step 1.1, step 3.1, construct, algebra]

5.1 Fix $\epsilon=1$ in [F5]. Its denominator is at most $C\log X$ and its positive logarithmic numerator scale $L_D=\log(DQ_0T^ne^{C'n})$ is at most $C\log X$, by step 1.1. Its bound implies $\log(c/(\delta L_D))\le C\Delta\log X$, whence $\delta L_D\ge cX^{-b\Delta}$ for absolute effective $b,c>0$. This algebra is valid also when the logarithm is nonpositive. It follows that $\delta L\ge c'(L/\log X)X^{-b\Delta}\ge c'X^{-(b+1/c_7)\Delta}$, using step 3.1's ratio bound. Multiply this inequality with step 2.1 to obtain $N_H^*(\alpha,Q,T)\le C\delta L X^{(a+b+1/c_7)\Delta}$. If the count is zero the same conclusion is immediate. The alternative branch of step 3.1 has the same form with a smaller exponent, and the no-exceptional-zero case uses factor one. Take an absolute effective $c_8$ at least all these exponents. This proves the full original exceptional factor $\Delta_*$ and all original ranges with no extra logarithmic loss. [F2, F5, F7, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source correction

Fresh visual reading of Weiss Corollary3.8 on printed75 and Theorem4.3 on printed82 gives $q(H)=n^{2n}h_Hd(H)$, not the former transcription $n^2h_Hd(H)$. This successor restores exactly that source formula. Every other public Statement token, including the nonexceptional count, factor $\Delta_*$, both endpoints and effective absolute exponent, is unchanged. The proof above is a direct reconstruction from the now-proved density and zero-repulsion bounds; it bypasses the source's class-field step on printed84 and does not adopt that step as an external input.
