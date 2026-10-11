---
id: cex-direct-q-one-substitution-in-quantum-denominators
kind: counterexample
title: "Direct q=1 substitution in quantum denominators"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lusztig-divided-power-integral-form, def-quantum-integers-factorials-and-divided-powers-at-q-i, ex-quantum-verma-and-simple-modules-for-sl-two, ex-specializing-a-quantum-highest-weight-lattice-at-q-one, lem-q-one-toral-specialization-identifies-the-classical-cartan-generators, prop-specialization-at-q-one-recovers-the-classical-enveloping-relations, thm-quantized-sl-two-string-formulas]
justified_by: []
aliases: []
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 316-317: the displayed indeterminate quotient for the $[K_i;0]$-coefficient and its evaluation by factoring or L'Hospital's rule, i.e. the requirement to evaluate through the integral expression rather than by separate substitution."
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "Slides 'Certain important elements' and its proof slide: $[K_i;c,t]$ as an element of the restricted $A$-form, showing the specialization is defined on the integral element, not by substituting into the rational expression."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 33, §33.1: the specialization at $q=1$ is a base change of the integral form (read via the owner's recorded OCR pass)."
---

## Statement refuted

False claim: if $x\in U_A$ is written as a rational expression in $q$ (with
numerator and denominator in $U_A$), then the operator induced by $x$ on the
$q=1$ specialization of a $U_A$-stable lattice is computed by substituting
$q=1$ into the numerator and denominator separately.

The rule fails already for the first toral element: both
$T_{0,1}=(K-K^{-1})/(q-q^{-1})$ and its numerator and denominator vanish or
become undefined under separate substitution, while the actual specialized
operator is the classical coroot action on the weight lattice.

## Facts & Assumptions

**Given:** The rank-one quantum group $U_q(\mathfrak{sl}_2)$, the integral form
$U_A$ over $A=\mathbb Z[q,q^{-1}]$, and the rank-one simple modules.

[F1] $T_{0,1}=\frac{K-K^{-1}}{q-q^{-1}}$ is a generator of the integral form
$U_A$; on a weight vector of weight $\mu$ it acts by the Gaussian value
$[\mu(h_1)]_q=\frac{q^{\mu(h_1)}-q^{-\mu(h_1)}}{q-q^{-1}}$, and at $q=1$ this
value is the integer $\mu(h_1)$
([[def-lusztig-divided-power-integral-form]],
[[lem-q-one-toral-specialization-identifies-the-classical-cartan-generators]] (b),
[[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] In the two-dimensional simple module $L(1)$ with basis $v_0,v_1$ one has
$Kv_0=qv_0$, $Kv_1=q^{-1}v_1$, $Fv_0=v_1$, $Fv_1=0$, $Ev_0=0$, $Ev_1=v_0$; in
particular $T_{0,1}$ acts as $\operatorname{diag}(1,-1)$
([[ex-quantum-verma-and-simple-modules-for-sl-two]] (a) at $m=1$).

[F3] The string formula
$E_iF_i^{(b)}=F_i^{(b)}E_i+\frac{F_i^{(b-1)}}{q^b-q^{-b}}\sum_{s=0}^{b-1}(q^{-2s}K-q^{2s}K^{-1})$,
and on a weight vector $w$ of weight $\mu$ with $E_iw=0$ it gives
$E_iF_i^{(b)}w=[\mu(h_i)-b+1]_qF_i^{(b-1)}w$, while separate substitution into
the displayed fraction gives $0/0$
([[thm-quantized-sl-two-string-formulas]] (ii),
[[def-lusztig-divided-power-integral-form]]).

[F4] The correct specialization is the base change $U_A\otimes_Ak$ with
$q\mapsto1$ (equivalently the operator form on graded lattices), under which
integral elements have well-defined images and the classical Cartan and Serre
relations hold
([[prop-specialization-at-q-one-recovers-the-classical-enveloping-relations]] (b),(c),(d),
[[ex-specializing-a-quantum-highest-weight-lattice-at-q-one]]).



## Counterexample

1.1 The element and its two evaluations. Let $x=T_{0,1}=\frac{K-K^{-1}}{q-q^{-1}}$. By [F1], $x\in U_A$ and on a weight vector of weight $\mu$ it acts by the scalar $[\mu(h_1)]_q$, whose value at $q=1$ is the integer $\mu(h_1)$. The separate substitution $K\mapsto1$, $q\mapsto1$ into the written expression gives $0/0$: the numerator $K-K^{-1}$ and the denominator $q-q^{-1}$ both specialize to $0$ and no value is defined. This already refutes the displayed rule. [F1, algebra]

1.2 Explicit witness on $L(1)$. By [F2], in the two-dimensional module $L(1)$ the element $K$ acts as $\operatorname{diag}(q,q^{-1})$ and $x=T_{0,1}$ acts as $\operatorname{diag}([1]_q,[-1]_q)=\operatorname{diag}(1,-1)$, a nonzero operator. Substituting $q=1$ into the matrix of $K$ gives the identity operator $\operatorname{diag}(1,1)$, so the operator induced by $x$ is not obtained by substituting $q=1$ into the numerator and denominator of the rational expression: the naive substitution loses the entire Cartan action. [F1, F2, algebra]

1.3 Further witnesses. (i) The Gaussian integers: $[m]_q=\frac{q^m-q^{-m}}{q-q^{-1}}$ has numerator and denominator vanishing at $q=1$ for every $m\ne0$, while the correct specialization is the integer $m$; the same applies to the coefficient $\binom{m}{r}_q$ of the divided-power multiplication, whose naive $q=1$ value is $0/0$ whereas the correct value is the ordinary binomial. (ii) The divided-power commutation coefficient $\frac{1}{q^b-q^{-b}}\sum_{s=0}^{b-1}(q^{-2s}K-q^{2s}K^{-1})$ of [F3]: its numerator and denominator both vanish at $q=1$, yet on a weight vector $w$ of weight $\mu$ with $E_iw=0$ its action is the finite value $[\mu(h_i)-b+1]_q\mapsto\mu(h_i)-b+1$ given by the string formula. Each of these elements lies in $U_A$ and has a well-defined specialized operator through the integral form. [F1, F3, algebra]

2.1 The correct statement. By [F4], specialization is the base change $U_A\otimes_Ak$ with $q\mapsto1$: it is defined on elements of the integral form (and on operator matrices on graded lattices, whose entries are Laurent polynomials), and the cancellations in Steps 1.1-1.3 are performed inside $U_A$ before any reduction. In particular $T_{0,1}$ specializes to the coroot generator $\bar T_{0,1}$ acting by the weight labels, as exhibited in [F4] and in the lattice example. No choice is used; every witness is an explicit finite matrix computation. [F1, F2, F3, F4, algebra] ∎
