---
id: pthm-rpm-killing-particle-charge
kind: physics-theorem
title: "Killing particle charge and force balance"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, lem-gr-parallel-transport-and-geodesic-speed, cor-zero-derivative-implies-constant, def-rpm-mechanical-momentum-and-observer-energy, post-rpm-prescribed-force-law, post-rpm-null-test-particle-action, lem-rpm-einbein-variation-and-equivalence]
dependency_roles:
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  post-rpm-prescribed-force-law: physical-assumption
  post-rpm-null-test-particle-action: physical-assumption
  lem-rpm-einbein-variation-and-equivalence: mathematical-premise
physical_scope: "Conditional scalar balance for a test particle and a specified Killing field; energy interpretation only for a future unit time-translation field, with no global symmetry assumption."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 5 Killing vectors and conserved quantities"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §5.3 Killing vectors"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr4.pdf"
---

## Statement

Let $K$ be a smooth Killing field on a region of the prescribed background. For a massive test body obeying the force postulate, with constant $m>0$, $P=mU$ and $D_\tau P=f$, the scalar $g(K,P)$ obeys

$$\frac{d}{d\tau}g(K,P)=g(K,f).$$

Thus it is constant when the body is free ($f=0$). For a free null geodesic with affine tangent momentum $P$, $g(K,P)$ is constant along its affine parameter as well. If $K$ is a future unit timelike observer field along the curve, then $-c\,g(K,P)$ has energy units and is the energy defined by that observer; for a general Killing field it is only a conserved scalar, not automatically an energy.

## Facts & Assumptions

**Given:** The smooth metric-compatible torsion-free connection, Killing field, force law, and null branch in the Statement.

[F1] A Killing field satisfies $\mathcal L_Kg=0$ ([[def-gr-killing-field]]).

[F2] Along a curve, $\frac{d}{d\tau}g(V,W)=g(D_\tau V,W)+g(V,D_\tau W)$ ([[lem-gr-parallel-transport-and-geodesic-speed]]).

[F3] On the massive branch $P=mU$ and $D_\tau P=f$ with $g(U,f)=0$ are the adopted constant-mass force assumptions ([[def-rpm-mechanical-momentum-and-observer-energy]], [[post-rpm-prescribed-force-law]]).

[F4] The null sector adopts independent einbein variation ([[post-rpm-null-test-particle-action]]); its nonzero future-null branch satisfies $P=T/e$ and $D_\lambda P=0$ ([[lem-rpm-einbein-variation-and-equivalence]]).

[F5] For a Killing field, $\mathcal L_Kg=0$ is equivalent to $g(D_XK,Y)+g(D_YK,X)=0$ ([[thm-gr-killing-and-on-shell-matter-identities]]).

[F6] A differentiable scalar function with zero derivative on an interval is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

1.1 Metric compatibility [F2] gives $\frac{d}{d\tau}g(K,P)=g(D_\tau K,P)+g(K,D_\tau P)$. Since $P=mU$, the first term is $m g(D_UK,U)$. By [F5], the Killing equation is $g(D_XK,Y)+g(D_YK,X)=0$; taking $X=Y=U$ makes this term zero. Substituting [F3] proves the forced balance $d g(K,P)/d\tau=g(K,f)$. [given, F1, F2, F3, F5, algebra]

2.1 If $f=0$, step 1.1 gives zero derivative, so [F6] makes the scalar constant on the connected parameter interval. On a free null curve, [F2] and [F4] give $d g(K,P)/d\lambda=g(D_PK,P)$; the same Killing identity with $X=Y=P$ makes this zero, hence the null scalar is constant. [step 1.1, F2, F4, F5, F6, algebra]

3.1 If $K$ is a future unit observer, [F3] gives $E_K(P)=-c g(P,K)=-c g(K,P)$ by symmetry of $g$. With $P$ in kg m s$^{-1}$ and $c$ in m s$^{-1}$, this has units joules. For other Killing fields that observer definition does not apply, so the conserved quantity remains only a scalar. [F3, given] ∎