---
id: thm-siegel-walfisz-prime-distribution
kind: theorem
title: "Siegel–Walfisz theorem for primes in arithmetic progressions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-prime-progression-discrepancy
  - thm-classical-zero-free-region-dirichlet-l
  - thm-landau-page-exceptional-zero-uniqueness
  - thm-siegel-ineffective-lower-bound-dirichlet-zero
  - thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums
  - lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-dirichlet-character-orthogonality
  - thm-dirichlet-character-primitive-induction
  - def-induced-dirichlet-character
  - lem-dirichlet-character-values
  - thm-fundamental-theorem-of-arithmetic
  - def-von-mangoldt-function
  - thm-logarithm-slower-than-every-positive-power
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 10, Theorem 10.11"
      url: "https://kskedlaya.org/18.785/errorbounds2.pdf"
    - title: "Analytic Number Theory lecture notes, Chapter 11, Proposition 11.1 and Theorem 11.2"
      url: "https://metaphor.ethz.ch/x/2018/hs/401-3100-68L/IANTnotes2018.pdf"
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 12, Theorems 12.10 and Corollary 12.11"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 10, Theorem 10.2 and equation (10.2.1)"
      url: "https://kskedlaya.org/ant/chap-errorbounds2.html"
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. For every
fixed pair of real numbers $A,B>0$, there is a constant $C_{A,B}>0$ such that,
for every real $x\ge3$, every integer $q$ with
$1\le q\le(\log x)^A$, and every reduced residue class $a\pmod q$,

$$
|E_\psi(x;q,a)|\le C_{A,B}\,x(\log x)^{-B}.
$$

The implied constant is ineffective in this theorem's standard proof route.
The modulus and error exponents are fixed before $x$ varies; the statement
includes $q=1$ and has no maximum over endpoints $y\le x$.

## Statement references

[Kedlaya, Chapter 10, Theorem 10.11](https://kskedlaya.org/18.785/errorbounds2.pdf)

[The lecture-notes proof, Chapter 11, Theorem 11.2](https://metaphor.ethz.ch/x/2018/hs/401-3100-68L/IANTnotes2018.pdf)

## Facts & Assumptions

**Given:** The original Axiom of Choice, Countable Choice and Dependent Choice assumptions; fixed $A,B>0$, $x\ge3$, $q\le(\log x)^A$, and a reduced class $a\pmod q$.

[A1] The original three choice hypotheses are retained; no conclusion at a weaker axiom scope is asserted ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] Under [A1], primitive Dirichlet functions have the classical strip apart from at most one real simple zero of a real nonprincipal character; for each $\epsilon>0$ that real zero satisfies $1-\beta\ge c_\epsilon r^{-\epsilon}$ ([[thm-classical-zero-free-region-dirichlet-l]], [[thm-landau-page-exceptional-zero-uniqueness]], [[thm-siegel-ineffective-lower-bound-dirichlet-zero]]).

[F2] For primitive $\xi$ of conductor $r\ge1$, the full residue formula holds for every $x,T\ge2$, with starred endpoints, the pole main term $\delta_\xi x$, finite part $-b_\xi$, logarithmic residue and full trivial tail ([[thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums]]). Its contour supplier proves reflection of all nontrivial zeros and $b_\xi=-\sum_{|\gamma|\le1}\rho^{-1}+O(\log r)$ for $r>1$, while $b_\xi=\log(2\pi)$ for $r=1$. All zeros in any unit ordinate window number $O(\log(r(|u|+3)))$, by the right-half window bound and reflection ([[lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds]], [[lem-primitive-dirichlet-l-zero-count-in-unit-window]]).

[F3] Every character has a unique primitive ancestor with conductor dividing its modulus; the two agree on units of that modulus. Orthogonality on reduced classes holds, all character values have modulus at most one, and there are $\varphi(q)$ characters ([[thm-dirichlet-character-primitive-induction]], [[def-induced-dirichlet-character]], [[thm-dirichlet-character-orthogonality]], [[lem-dirichlet-character-values]]).

[F4] The weight $\Lambda(n)$ is $\log p$ on prime powers $p^k$ and zero otherwise; prime factorization is unique ([[def-von-mangoldt-function]], [[thm-fundamental-theorem-of-arithmetic]]). The full-weight discrepancy is $E_\psi(x;q,a)=\psi(x;q,a)-x/\varphi(q)$ ([[def-prime-progression-discrepancy]]).

[F5] Every fixed logarithmic power is dominated by every fixed positive power; equivalently $e^{-c\sqrt L}L^D$ tends to zero faster than $L^{-K}$ for fixed $c,D,K>0$, by applying the logarithm estimate to $\sqrt L$ ([[thm-logarithm-slower-than-every-positive-power]]).

## Proof

**Proof technique:** bound every zero and every residue in the full primitive formula, then induce characters and use orthogonality.

1.1 It suffices first to take $x$ sufficiently large depending on $A$. Put $L=\log x$, $T=e^{\sqrt L}$ and $\epsilon=1/(2A)$. For every primitive $\xi$ of conductor $r\le L^A$ and every zero $\rho=\beta+i\gamma$ with $|\gamma|\le T$, [F1] gives $1-\beta\ge c_A L^{-1/2}$: the ordinary strip uses $\log(r(T+3))\ll_A\sqrt L$, and a possible real exceptional zero uses $r^{-\epsilon}\ge L^{-1/2}$. Reflecting the zero to $1-\rho$ for the conjugate primitive character, as in [F2], gives also $\beta\ge c_A L^{-1/2}$. The conductor-one branch has no exceptional zero in [F1]. Decrease $c_A>0$ if needed to cover all these cases. Its possible ineffectivity comes from the Siegel constant. [A1, F1, F2, given, construct, algebra]

2.1 In $|\gamma|\le1$, step 1.1 gives $|\rho|^{-1}\le C_A\sqrt L$; [F2] bounds their number by $C\log(3r)$. For $1<|\gamma|\le T$, split into unit bands: their reciprocal sum is at most $C\sum_{j\le T+1}\log(r(j+3))/j\ll\log(r(T+4))\log(T+3)\ll_A L$. Consequently $\sum_{|\gamma|\le T}|\rho|^{-1}\ll_A L^2$, and the finite-part relation in [F2] yields $|b_\xi|\ll_A L^2$ for $r>1$; for $r=1$ use its explicit constant. Empty zero sums contribute zero. [F2, step 1.1, algebra]

3.1 Apply [F2] at this $T$, without selecting a zero-separated height: its general starred scope includes zero ordinates exactly at $T$. Step 1.1 and step 2.1 bound the entire nontrivial zero sum by $C_A x e^{-c_A\sqrt L}L^2$. The $b_\xi$ and logarithmic-residue terms are $O_A(L^2+L)$; either trivial tail is bounded for $x\ge3$. The formula's error is $O_A(xe^{-\sqrt L}L^2+L)$, since its nearest-integer factor is at most one. Passing from the starred to the full endpoint adds at most $\tfrac12\log x$ by [F4]. Absorb the polynomial terms and decrease the positive exponent constant to obtain, uniformly for these primitive characters, $\psi(x,\xi)=\delta_\xi x+O_A(xe^{-c'_A\sqrt L}L^2)$. This includes the primitive principal character of conductor one and retains every residue. [F2, F4, F5, step 1.1, step 2.1, algebra]

4.1 If $\chi$ modulo $q$ is induced by $\xi$, the only removed nonzero $\Lambda$ terms are powers of primes dividing $q$. For each such prime, their total absolute weight is at most $\log x$. Unique factorization [F4] gives $\omega(q)\le\log(2q)/\log2$, so $|\psi(x,\chi)-\psi(x,\xi)|\ll\log(2q)\log x$. This is absorbed in the error in step 3.1 for sufficiently large $x$. The main term $x$ occurs exactly for the principal character modulo $q$, since the primitive principal ancestor has conductor one. [F3, F4, F5, step 3.1, algebra]

5.1 For $(a,q)=1$, [F3] gives $\psi(x;q,a)=\varphi(q)^{-1}\sum_{\chi\bmod q}\overline{\chi(a)}\psi(x,\chi)$. The principal term is $x/\varphi(q)$. There are $\varphi(q)$ terms, so the same uniform error as in step 4.1 bounds $E_\psi(x;q,a)$. By [F5], it is $O_{A,B}(x(\log x)^{-B})$ for any fixed $B>0$. For the remaining bounded interval $3\le x\le x_0(A,B)$, the elementary $\psi(x;q,a)\le x\log x$ and $x/\varphi(q)\le x$ give a uniform enlargement of $C_{A,B}$. This proves the original full-weighted Statement for all $x\ge3$, including $q=1$. [F3, F4, F5, step 4.1, given, algebra] ∎

## Source notes

The classical119 and Siegel125 supplier proofs and this SW deduction now have independent local reviews, and root has integrated their exact acceptances. The proof retains its original AC/CC/DC scope; this status update asserts no acceptance of downstream consumers. The full-residue127 formula is independently accepted; the previous omitted-residue status is obsolete. No new endpoint maximum, choice weakening, or external theorem import occurs. The ineffectivity records this proof route, not impossibility of a different effective argument.
