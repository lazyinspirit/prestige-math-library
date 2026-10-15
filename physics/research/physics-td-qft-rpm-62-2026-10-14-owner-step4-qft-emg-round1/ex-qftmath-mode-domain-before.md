---
id: ex-qftmath-mode-domain
kind: example
title: One-mode CCR/CAR and a vector outside the number-operator domain
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - lem-qft-fock-ccr-car
  - lem-qft-second-quantized-spectrum
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, §§5.4–5.5
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; creation, annihilation and Fock sectors, PDF pp. 35–37.
    - title: David Tong, Quantum Field Theory, §2.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; number operator and multiparticle Fock states, printed pp. 29–30.
---

## Example

Let $H=\mathbb Ce$ with $\|e\|=1$, and write $|n\rangle=e^{\otimes n}$
for its normalized bosonic $n$-particle vector, including $|0\rangle=\Omega$.
On the one-mode fermionic Fock space write $|1\rangle=c^\dagger(e)\Omega$.
The one-mode bosonic and fermionic operators satisfy the CCR and CAR on their
stated domains. The bosonic number operator from
[[lem-qft-second-quantized-spectrum]] is
$N|n\rangle=n|n\rangle$ with
$$D(N)=\left\{(c_n)_{n\ge0}:\sum_{n\ge0}n^2|c_n|^2<\infty\right\}.$$
The Fock vector
$$\Psi=\sum_{n=0}^{\infty}(n+1)^{-3/2}|n\rangle$$
belongs to $D(a(e))\cap D(a^\dagger(e))$ but not to $D(N)$.

## Facts & Assumptions

**Given:** Countable Choice [[def-countable-choice]], a unit vector $e$, the one-mode bosonic and fermionic Fock
constructions, and the maximal bosonic creation/annihilation domains.

[A1] For the number-operator calculation take
$X=\{*\}$, $\mathcal A=\{\varnothing,\{*\}\}$,
$\mu(\{*\})=1$, and $\omega:X\to\mathbb R$ with $\omega(*)=1$.
Then $L^2(X,\mu;\mathbb C)$ is one-dimensional, with unit vector
$e=\mathbf1_{\{*\}}$, and its one-particle multiplier is exactly $1$.

[F1] On one-mode bosonic sectors,
$a(e)|n\rangle=\sqrt n|n-1\rangle$ for $n\ge1$,
$a(e)\Omega=0$, and $a^\dagger(e)|n\rangle=\sqrt{n+1}|n+1\rangle$.
The fermionic one-mode maps are bounded and satisfy the CAR.
[[lem-qft-fock-ccr-car]]

[F2] The maximal domains are
$D(a(e))=\{(c_n):\sum_{n\ge1}n|c_n|^2<\infty\}$ and
$D(a^\dagger(e))=\{(c_n):\sum_{n\ge0}(n+1)|c_n|^2<\infty\}$.
[[lem-qft-fock-ccr-car]]

[F3] For the one-point measure space specified in [A1], the
second-quantized multiplier is the number operator, acts by $n$ on sector
$n$, and has the exact square-summability domain stated above.
[[lem-qft-second-quantized-spectrum]]

## Verification

1.1 For bosons, the ladder formulas [F1] give $a(e)a^\dagger(e)|n\rangle=(n+1)|n\rangle$ and $a^\dagger(e)a(e)|n\rangle=n|n\rangle$ for every $n\ge0$, where the second identity at $n=0$ uses $a(e)\Omega=0$. Their difference is $|n\rangle$; linear extension proves $[a(e),a^\dagger(e)]=I$ on the finite-particle core. For fermions, $c(e)\Omega=0$, $c^\dagger(e)\Omega=|1\rangle$, $c(e)|1\rangle=\Omega$, and $c^\dagger(e)|1\rangle=0$. Hence $\{c(e),c^\dagger(e)\}$ fixes both basis vectors, while $c(e)^2=(c^\dagger(e))^2=0$; these identities hold on the whole two-dimensional fermionic Fock space. [F1, given, algebra]

1.2 The squared norm of $\Psi$ is $\sum_{n\ge0}(n+1)^{-3}$, which is finite: on each block $2^k\le n+1<2^{k+1}$ there are $2^k$ terms, each at most $2^{-3k}$, so the block sum is at most $2^{-2k}$ and the geometric series of these bounds converges. By [F3], $\Psi\in D(N)$ would require $\sum_{n\ge1}n^2/(n+1)^3<\infty$. Since $n+1\le2n$ for $n\ge1$, $n^2/(n+1)^3\ge1/(8n)$. The harmonic series diverges because each block $2^k\le n<2^{k+1}$ has $2^k$ terms at least $2^{-(k+1)}$, so every block sum is at least $1/2$. Therefore $\Psi\notin D(N)$. [F3, given, algebra]

2.1 By [F2], the annihilation-domain sum for $\Psi$ is $\sum_{n\ge1}n/(n+1)^3\le\sum_{n\ge1}n^{-2}$, and the creation-domain sum is $\sum_{n\ge0}(n+1)^{-2}$. Each is finite: the $k$th dyadic block of $\sum_{n\ge1}n^{-2}$ has at most $2^k$ terms each at most $2^{-2k}$, so its block sum is at most $2^{-k}$; the shifted series has the same convergence. Thus $\Psi\in D(a(e))\cap D(a^\dagger(e))$ while step 1.2 proves $\Psi\notin D(N)$. This is a domain distinction for the stated operators, not a physical or empirical claim. [F2, step 1.2, algebra] ∎
