---
id: ex-qft-mode-occupations
kind: example
title: "Boson occupation ladder and fermion one-mode exclusion"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - pthm-qft-free-fock-statistics
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-qft-free-fock-statistics: physical-result
physical_scope: "A conditional algebraic example in the selected free scalar bosonic and Dirac CAR Fock models. It includes a bosonic Fock vector outside one annihilation-operator domain and a one-mode fermion occupation calculation; it reports no experimental outcome."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 2, §§2.2–2.4, Free Fields, Vacuum, and Particles"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"
      locator: "Complete Chapter 2 HTML; bosonic oscillator ladder, Fock modes, and occupation number."
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 5, §§5.2–5.4, Quantizing the Dirac Field"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S5.html"
      locator: "Complete Chapter 5 HTML; fermionic vacuum and particle/antiparticle modes."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page draft; §3 scalar occupation modes and §39 Dirac CAR creation/annihilation modes."
---

## Example

Choose a unit scalar wave-packet mode $h$ and a unit Dirac particle or
antiparticle mode $u$. The states and operators below are those of the
conditional model theorem [[pthm-qft-free-fock-statistics]].

For the bosonic mode, let $|n\rangle_h$ be the normalized $n$-occupation
vector. We also construct a normalized Fock vector whose annihilation image
is not square-summable, so the maximal annihilation operator is not defined
on every Fock vector.

For the fermionic mode, the one-particle vector
$c^\dagger(u)\Omega_D$ has unit norm, while two creations in that same mode
vanish. This calculation concerns one normalized CAR mode in the adopted
representation; it is not a general spin-statistics argument.

## Facts & Assumptions

**Given:** The model assignment [A1], Countable Choice [A2], and the exact
mode and domain conclusions in [F1].

[A1] [[post-qft-free-field-model]] assigns the scalar and Dirac species to
the chosen bosonic and CAR Fock representations; this is a postulate.

[A2] [[def-countable-choice]] states $\mathrm{AC}_\omega$, carried through
[[pthm-qft-free-fock-statistics]] from the Fock construction.

[F1] [[pthm-qft-free-fock-statistics]] proves that for each unit scalar mode
$h$, $|n\rangle_h=(a^\dagger(h))^n\Omega_s/\sqrt{n!}$ is normalized and
satisfies the bosonic ladder, and that for each unit CAR mode $u$,
$c^\dagger(u)\Omega_D$ is normalized, $c^\dagger(u)^2=0$, and
$N_u=c^\dagger(u)c(u)$ is a projection. Its stated maximal domain is
$D(a(h))=\{\Psi=(\Psi_n):\sum_{n\ge1}\|a_n(h)\Psi_n\|^2<\infty\}$.

## Verification

**Given:** [A1], [A2], [F1], and the chosen normalized modes $h$ and $u$.

1.1 Let $S_2=\sum_{k=1}^\infty k^{-2}$. For each $j\ge0$, the block
$2^j\le k<2^{j+1}$ contains $2^j$ terms, each at most $2^{-2j}$, so its
sum is at most $2^{-j}$. Summing these geometric bounds proves
$1\le S_2<\infty$. Therefore $C=S_2^{-1/2}$ is a positive finite constant,
and the orthonormal bosonic mode states from [F1] give
$\Psi=\sum_{n=0}^\infty C(n+1)^{-1}|n\rangle_h$ with
$\|\Psi\|^2=C^2S_2=1$. [A2, F1, construct, algebra]

1.2 By the ladder in [F1], the squared norm of the annihilation-sector
sequence for this vector is
$C^2\sum_{n=1}^\infty n/(n+1)^2$. Since $n+1\le2n$ for $n\ge1$,
$n/(n+1)^2\ge1/(4n)$. Each dyadic block
$2^j\le n<2^{j+1}$ contributes at least $1/2$ to the harmonic series, so
$\sum_{n\ge1}1/n$ diverges and therefore
$\sum_{n\ge1}n/(n+1)^2=\infty$. By [F1], the annihilation images of the
different particle sectors lie in orthogonal sectors, so this is exactly
$\sum_{n\ge1}\|a_n(h)\Psi_n\|^2$. The exact domain in [F1] now gives
$\Psi\notin D(a(h))$, despite $\Psi$ being a normalized Fock vector.
[A2, F1, step 1.1, algebra]

2.1 By [F1], $c(u)c^\dagger(u)+c^\dagger(u)c(u)=I$,
$c(u)\Omega_D=0$, and $c^\dagger(u)^2=0$. The adjoint identity gives
$\|c^\dagger(u)\Omega_D\|^2
=\langle\Omega_D,c(u)c^\dagger(u)\Omega_D\rangle_2
=\langle\Omega_D,(I-c^\dagger(u)c(u))\Omega_D\rangle_2=1$.
Thus the one-mode state is normalized and a second creation in that mode is
zero. [A2, F1, algebra]

2.2 From the CAR, $N_u=c^\dagger(u)c(u)$ is self-adjoint and
$N_u^2=N_u$; it is a projection, with eigenvalue $0$ on the vacuum and $1$
on the one-mode state. These are conditional model-state calculations, not
measured outcomes. [A1, F1, step 2.1, algebra] ∎
