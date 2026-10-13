---
id: ex-nrqm-intervals-contacts-attractive-contact-energy
aliases: [nrqm-intervals-and-contacts-example-attractive-contact-energy]
kind: example
domain: mathematics
title: "Attractive contact energy"
status: published
origin: pipeline
dependency_level: 7
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, thm-nrqm-intervals-delta-interface-operator, thm-nrqm-intervals-delta-unique-bound-state, def-complex-exponential, thm-derivative-of-exponential, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  thm-nrqm-intervals-delta-interface-operator: mathematical-premise
  thm-nrqm-intervals-delta-unique-bound-state: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sarang Gopalakrishnan, Self-Adjointness and the Renormalization of Singular Potentials (2006), Section 1.2 pp. 16-18 and Section 8.2.5 pp. 129-130 (one-dimensional derivative jump, attractive bound-state calculation and extension background; rigorous operator and resolvent proofs are supplied locally)"
      url: "https://math.ucr.edu/home/baez/gopalkrishnan.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics (2009), Section 2.6, Lemma 2.29 pp. 83-84 (differences of extension resolvents; point-interface results are proved locally)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $A_{-1}$ be the delta interface operator of
[[thm-nrqm-intervals-delta-interface-operator]] with $\alpha=-1$:
$D(A_{-1})=\{u\in H^1(\mathbb R):\ u|_{(0,\infty)},u|_{(-\infty,0)}\in H^2,\
u'^*(0+)-u'^*(0-)=-u^*(0)\},$
and put
$\psi(x):=\frac{1}{\sqrt2}e^{-|x|/2},\qquad |\psi(x)|^2=\tfrac12e^{-|x|}.$
Then:

(a) $\psi\in D(A_{-1})$, $\|\psi\|_{L^2(\mathbb R)}=1$, and
$A_{-1}\psi=-\tfrac14\psi$; the negative eigenvalue $-\tfrac14$ is the only
negative eigenvalue of $A_{-1}$ and its eigenspace is $\mathbb C\psi$;

(b) more generally, for every $\alpha<0$ the operator $A_\alpha$ has the
single negative eigenvalue $-\alpha^2/4$ with normalized eigenvector
$\sqrt{-\alpha/2}\,e^{\alpha|x|/2}$, and for $\alpha\ge0$ there is none
([[thm-nrqm-intervals-delta-unique-bound-state]]);

(c) if $\alpha<0$, with the scaling of part (c) of
[[thm-nrqm-intervals-delta-unique-bound-state]], if one assigns positive
constants $\hbar,m$ and sets $H:=(\hbar^2/2m)A_\alpha$ and
$g:=\hbar^2\alpha/(2m)$, then the bound energy is $-mg^2/(2\hbar^2)$; for the
case $\alpha=-1$ this is $E_H=-\hbar^2/(8m)$.

## Verification

**Given:** the delta interface operator $A_{-1}$ with $\alpha=-1$ and the function $\psi(x)=2^{-1/2}e^{-|x|/2}$.

**Proof technique:** direct verification of the interface conditions and the eigenvalue equation for the explicit function.

[F1] $u\in D(A_\alpha)$ means $u\in H^1(\mathbb R)$ with $H^2$ restrictions to the half-lines, the interface condition $u'^*(0+)-u'^*(0-)=\alpha u^*(0)$, and $A_\alpha u=-D^2u$ on each half-line ([[thm-nrqm-intervals-delta-interface-operator]]).

[F2] The representative of $\psi$ is $C^\infty$ on each open half-line with $\psi''(x)=\frac14\psi(x)$ there, and $\psi'^*(0+)=-\frac12\psi(0)$, $\psi'^*(0-)=+\frac12\psi(0)$; these are direct computations from the exponential ([[def-complex-exponential]], [[thm-derivative-of-exponential]]), and the traces exist by [[lem-nrqm-intervals-weak-derivative-ac-representative]].

1.1 [Normalisation] $\int_{\mathbb R}|\psi|^2 =\tfrac12\int_{\mathbb R}e^{-|x|}dx=\int_0^\infty e^{-x}dx=1$. [F2, algebra]

2.1 [Membership and eigenvalue] By [F2], $\psi$ is $H^1$ with $H^2$ half-line restrictions, and its derivative jump is $\psi'^*(0+)-\psi'^*(0-)=-\psi^*(0)$, so $\psi\in D(A_{-1})$ by [F1] with $\alpha=-1$. On each half-line, $A_{-1}\psi=-D^2\psi=-\tfrac14\psi$, so $A_{-1}\psi=-\tfrac14\psi$. This is the verification of (a) for the explicit function; uniqueness of the negative eigenvalue and of its eigenspace is part (b) of [[thm-nrqm-intervals-delta-unique-bound-state]], specialised to $\alpha=-1$: $-\alpha^2/4=-1/4$ and $\sqrt{-\alpha/2}=\sqrt{1/2}$. [step 1.1, F1, F2, algebra]

3.1 [The general and scaled statements] Part (b) is exactly [[thm-nrqm-intervals-delta-unique-bound-state]] (b), and part (c) is its (c): for $\alpha<0$, $E_H=-\hbar^2\alpha^2/(8m)=-mg^2/(2\hbar^2)$ with $g=\hbar^2\alpha/(2m)$, and at $\alpha=-1$ this equals $-\hbar^2/(8m)$. [step 2.1] ∎
