---
id: cex-sr-kinetic-energy-is-observer-dependent
kind: counterexample
title: "Kinetic energy depends on the observer even though the invariant mass does not"
status: published
origin: pipeline
domain: mathematics
deps:
  - ex-sr-four-momentum-at-beta-three-fifths
  - ex-sr-four-momentum-boost-to-rest
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-lorentz-form-and-inertia
dependency_roles:
  ex-sr-four-momentum-at-beta-three-fifths: mathematical-premise
  ex-sr-four-momentum-boost-to-rest: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
dependency_level: 17
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.1 pp. 88-89 (energy is frame-dependent; the mass m^2 = E^2 - p^2 is a scalar and the same in all frames)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27 (the energy is not invariant under Lorentz transformations; the mass is fixed and independent of inertial frame)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement refuted

The kinetic energy $T_n(P)=E_n(P)-mc^2$ of a massive particle is a property of
the particle alone, independent of the observer $n$.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; $m>0$;
$w=(3c/5,0,0)$; $U=\gamma(c,w)$ with $\gamma=5/4$; $P=mU$; the observers
$n_1=e_0$ of the displayed inertial frame and $n_2=U/c$.

[F1] ([[ex-sr-four-momentum-at-beta-three-fifths]], Example): with
$w=(3c/5,0,0)$ and $\gamma=5/4$ the four-momentum $P=mU$ has
$E_{e_0}(P)=5mc^2/4$, spatial momentum $(3mc/4,0,0)$ and kinetic energy
$T_{e_0}(P)=mc^2/4$.

[F2] ([[ex-sr-four-momentum-boost-to-rest]], Example): in the frame obtained by
the passive boost with parameter $3/5$ along $e_1$ one has $E'=mc^2$,
$\mathbf p'=0$, the mass shell $E'^2-c^2|\mathbf p'|^2=m^2c^4$, and that frame
is the particle's rest frame, its four-velocity being $c\,e'_0$.

[F3] ([[lem-sr-energy-momentum-observer-identities]], Statement (b)): for
$P=mU$ with $m>0$, $U$ future timelike with $\eta(U,U)=-c^2$, and $n$ future
unit, $T_n(P)=mc^2(\gamma-1)$ with $\gamma=-\eta(U/c,n)\ge1$, and
$T_n(P)=0$ if and only if $U=cn$.

[F4] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition):
$T_n(P)=E_n(P)-mc^2$ and $E_n(P)=-c\,\eta(P,n)$; the invariant mass
$m(P)$ depends on the scalar $\eta(P,P)$ alone and hence on no observer.

[F5] ([[def-sr-four-velocity-and-four-acceleration]], clause (c)): a point
observer of the model at an event is a future unit timelike vector $n$ with
$\eta(n,n)=-1$, and the four-velocity of the observer's own worldline is $cn$;
the four-velocity $U$ of the particle satisfies $\eta(U,U)=-c^2$
([[thm-sr-proper-time-and-observer-decomposition]]\,(a)).

[F6] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is bilinear, so
$\eta(n_2,n_2)=c^{-2}\eta(U,U)=-1$ for $n_2=U/c$.

## Counterexample

1.1 Two observers: $n_1=e_0$ is future unit by definition of an inertial frame, and $n_2=U/c$ satisfies $\eta(n_2,n_2)=c^{-2}\eta(U,U)=-1$ by [F5] and [F6] and is future timelike; both are point observers of the particle in the sense of [F5], and $n_1\ne n_2$ because $U=\gamma(c,w)\ne c\,e_0$ has nonzero spatial part. [F5, F6]

1.2 Kinetic energies: in the frame of $n_1=e_0$, [F1] gives $T_{n_1}(P)=mc^2/4\ne0$; for $n_2=U/c$ one has $U=cn_2$, so [F3] gives $\gamma=-\eta(n_2,n_2)=1$ and $T_{n_2}(P)=mc^2(\gamma-1)=0$. [F1, F3]

1.3 Energies and mass: $E_{n_1}(P)=5mc^2/4$ by [F1] and $E_{n_2}(P)=mc^2$ by [F2]; the invariant mass is $m(P)=m$ in both cases, depending on the scalar $\eta(P,P)$ alone by [F4]. [F2, F4]

2.1 The same particle and the same vector $P$ therefore have kinetic energy $mc^2/4$ for the observer $n_1$ and kinetic energy $0$ for the observer $n_2$, while $P$ and the invariant mass $m$ are unchanged; hence the displayed statement is false: $T_n(P)$ depends on the observer $n$, and so does $E_n(P)$ ($5mc^2/4$ versus $mc^2$), whereas the invariant mass does not. [step 1.2, step 1.3]

3.1 The refutation is complete: two future unit observers of the same massive particle give different values of $T_n(P)$ and of $E_n(P)$, so neither quantity is a property of the particle alone, while the invariant mass $m(P)=m$ is the same in both frames. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
