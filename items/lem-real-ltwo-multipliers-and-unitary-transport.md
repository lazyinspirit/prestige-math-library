---
id: lem-real-ltwo-multipliers-and-unitary-transport
kind: lemma
title: Real L2 multipliers and unitary transport
deps: ["lem-complex-lp-completeness-density-and-inner-product", "thm-dominated-convergence", "thm-fatou-lemma", "thm-nonnegative-integral-zero-iff-zero-almost-everywhere", "thm-the-lebesgue-integral-respects-almost-everywhere-equality", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-addition-and-real-extension", "thm-sine-and-cosine-derivatives", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd edition
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf
      locator: §2.2 multiplication examples (2.15), (2.20), (2.22)–(2.27), pp.66–69; §8.1 (8.1)–(8.4), pp.207–208. Generator/domain and transport proved directly here.
---

## Statement

Assume countable choice. In complex $H=L^2(\mathbb R^n)$ use $\langle f,g\rangle=\int f\overline g$. For finite real measurable $m$, set $D(M)=\{f\in H:mf\in H\}$ and $Mf=mf$. This is well-defined on classes, densely defined and self-adjoint. Here $D(M^*)$ consists of those $g\in H$ for which some $h\in H$ satisfies $\langle Mf,g\rangle=\langle f,h\rangle$ for every $f\in D(M)$, and $M^*g=h$; density makes this value unique.

The operators $V_tf=e^{itm}f$, $t\in\mathbb R$, form a strongly continuous unitary group. The norm derivative $\lim_{t\to0}(V_tf-f)/t$ exists exactly for $f\in D(M)$ and then equals $iMf$.

For a specified unitary $U:H\to H$, the operator $P=U^{-1}MU$ on $D(P)=U^{-1}D(M)$ is self-adjoint. Define $e^{itP}=U^{-1}V_tU$; this group has derivative $iP$ exactly on $D(P)$. Only this explicitly transported exponential is being defined.

## Facts & Assumptions

**Given:** [[def-countable-choice]], the stated $m$ and unitary $U$ (a surjective complex-linear pairing isometry). Almost-everywhere equality preserves integrals ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F1] The complex pairing is definite, continuous and satisfies Cauchy–Schwarz ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F2] Dominated convergence applies with an integrable majorant ([[thm-dominated-convergence]]).

[F3] Fatou bounds the integral of a nonnegative pointwise limit by the lower limit of its integrals ([[thm-fatou-lemma]]).

[F4] A nonnegative function of integral zero vanishes a.e. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F5] The exponential addition and Euler identities give the group law and modulus one ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F6] The sine/cosine derivative formulas and the complex interval FTC give $|e^{its}-1|\le|ts|$ for real $s,t$, and derivative $is$ at $t=0$ ([[thm-sine-and-cosine-derivatives]], [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

## Proof

**Proof technique:** direct.

1.1 Null-equivalent finite representatives give null-equivalent products; this applies to changes of $m$ as well as $f$, so domain and value are well-defined. The domain is a vector subspace. With $E_N=\{|m|\le N\}$ and $f_N=\mathbf1_{E_N}f$, one has $\|mf_N\|_2\le N\|f\|_2$, so $f_N\in D(M)$. Finiteness of $m$ gives $E_N\uparrow\mathbb R^n$, and [F2] applied to $\mathbf1_{E_N^c}|f|^2\le|f|^2$ gives $f_N\to f$ in norm. This proves density. If $h,h'$ both satisfy the adjoint identity for $g$, then $\langle f,h-h'\rangle=0$ on this dense domain; continuity in [F1] extends it to every $f\in H$, including $h-h'$, forcing $h=h'$. [F1, F2, given]


1.2 By [F5], $V_tV_s=V_{t+s}$, $V_0=I$, $V_{-t}=V_t^{-1}$ and $\langle V_tf,V_tg\rangle=\langle f,g\rangle$. For fixed $f$, $|e^{itm}-1|^2|f|^2\to0$ pointwise as $t\to0$, with majorant $4|f|^2$. [F2] gives strong continuity at zero; the isometry and group law give it at every $t$. Countable choice permits the sequential criterion for these real-parameter norm limits. [F1, F2, F5, given]


2.1 Real-valuedness of $m$ and [F1] give $\langle Mf,g\rangle=\langle f,Mg\rangle$ for $f,g\in D(M)$, with both integrals absolutely convergent. Thus $D(M)\subseteq D(M^*)$ with the same value. Conversely let $M^*g=h$. On $E_N$, $w_N=\mathbf1_{E_N}(mg-h)$ is in $H$, and $mw_N\in H$ because $|m|\le N$ there, so $w_N\in D(M)$. Inserting $f=w_N$ into the adjoint identity gives $0=\langle Mw_N,g\rangle-\langle w_N,h\rangle=\int_{E_N}|mg-h|^2$. By [F4], $mg=h$ a.e. on each $E_N$. Their countable union is the whole space, so $mg=h$ a.e. globally; in particular $mg\in H$. Thus $D(M^*)=D(M)$ and the operators agree. [step 1.1, F1, F4, given]


2.2 If $mf\in H$, [F6] gives pointwise $(e^{itm}-1)f/t\to imf$ and the squared error is at most $4|mf|^2$. [F2] proves norm convergence to $iMf$. Conversely, if the norm derivative exists, the quotients at $t=1/(N+1)$ have bounded norms for $N\in\mathbb N$. Their squared moduli tend pointwise to $|mf|^2$ by [F6]. [F3] gives $\int|mf|^2\le\liminf_N\|(V_{1/(N+1)}f-f)/(1/(N+1))\|_2^2<\infty$. Thus $f\in D(M)$, and the forward part identifies the derivative. This proves both directions, including points where $m=0$. [step 1.2, F2, F3, F6]


3.1 Since $U$ and $U^{-1}$ preserve norms and pairings, $U^{-1}D(M)$ is dense. For $g,h\in H$, the assertion $\langle Pf,g\rangle=\langle f,h\rangle$ for every $f\in D(P)$ is equivalent, by writing $v=Uf$, to $\langle Mv,Ug\rangle=\langle v,Uh\rangle$ for every $v\in D(M)$. By step 2.1 this holds exactly when $Ug\in D(M)$ and $Uh=MUg$. Therefore $D(P^*)=D(P)$ and $P^*=P$. Conjugating the group identities and norm limits of steps 1.2 and 2.2 by $U$ proves the asserted unitary group, continuity, and both directions of the transported derivative-domain criterion. No spectral theorem or choice of a basis is used. [step 1.1, step 2.1, step 1.2, step 2.2, given] ∎
