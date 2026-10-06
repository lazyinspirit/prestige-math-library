---
id: cex-undersampling-identifies-two-distinct-pure-frequencies
kind: counterexample
title: "Distinct pure frequencies differing by a reciprocal-lattice shift have identical samples"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
design_row: FR-19
generation:
  role: counterexample
deps: [def-complex-exponential, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 22, Remark 22.4(1)-(2): sampling rate proportional to bandwidth and sinc zeros at the other sampling locations, printed p. 131; the pure-frequency aliasing witness is computed locally"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§2, Exercise 7(1)-(2): characters $e(kx)$ as functions of $x$ tied to the dual lattice; a shift by $\\Lambda^*$ acts trivially on the samples, PDF pp. 2-3"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Distinct pure frequencies produce distinct sample sequences on the lattice
$h\mathbb Z$: if $f_1(x)=e^{2\pi i\xi x}$ and $f_2(x)=e^{2\pi i\eta x}$ with
$\eta\ne\xi$, then $f_1(hk)\ne f_2(hk)$ for some $k\in\mathbb Z$.

## Facts & Assumptions

**Given:** Countable Choice, a sampling spacing $h>0$, a frequency $\xi\in\mathbb R$ and a nonzero integer $m$, with $f_1(x)=e^{2\pi i\xi x}$ and $f_2(x)=e^{2\pi i(\xi+m/h)x}$ for $x\in\mathbb R$ ([[def-complex-exponential]], [[def-countable-choice]]).

[F1] $e^{z+w}=e^ze^w$ for all complex $z,w$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F2] $e^{z}=1$ if and only if $z\in2\pi i\mathbb Z$, and $e^{i\pi}+1=0$ ([[thm-kernel-and-fibres-of-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Counterexample

1.1 For every $k\in\mathbb Z$ the addition law [F1] gives $f_2(hk)=e^{2\pi i\xi hk}e^{2\pi i(m/h)hk}=f_1(hk)e^{2\pi imk}$, and $e^{2\pi imk}=1$ because $mk\in\mathbb Z$ and $2\pi imk\in2\pi i\mathbb Z$ [F2]. Hence $f_2$ and $f_1$ have identical samples on $h\mathbb Z$. [F1, F2, given, algebra]

2.1 The two functions are distinct: at $x=h/(2m)$, which is a real number because $m\ne0$, one has $f_2(x)f_1(x)^{-1}=e^{2\pi i(m/h)(h/(2m))}=e^{i\pi}=-1$ by [F1] and [F2], and $-1\ne1$, so $f_2\ne f_1$. Together with step 1.1 this refutes the displayed statement: the frequencies $\xi$ and $\xi+m/h$ are distinct, yet every procedure reading only the samples on $h\mathbb Z$ sees the same data. The witness consists of pure frequencies of constant modulus one, which are bounded but not square-integrable on $\mathbb R$; it therefore does not contradict the $L^2$ reconstruction theorem of the A page. [step 1.1, F1, F2, given, algebra] ∎ 