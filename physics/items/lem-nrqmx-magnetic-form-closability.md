---
id: lem-nrqmx-magnetic-form-closability
kind: lemma
domain: mathematics
library: physics
title: Closability of smooth magnetic forms with locally integrable potentials
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-magnetic-form-data
  - def-nrqm-magnetic-and-detection-position-and-momentum-operators
  - def-countable-choice
  - def-dependent-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-by-parts-for-absolutely-continuous-functions
  - cor-cauchy-schwarz-inequality-for-l-two
dependency_roles:
  def-nrqmx-magnetic-form-data: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-integration-by-parts-for-absolutely-continuous-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition, §2.3, closed forms and Friedrichs construction"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "David Tong, Applications of Quantum Mechanics, §1.2, constant-field magnetic quadratic expression"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice and Dependent Choice. Let $d,m,\hbar,A,V,v_0$ and
$q_{A,V}$ be the magnetic form on the test core, with $m,\hbar>0$,
$A\in C^\infty(\mathbb R^d;\mathbb R^d)$, $V\in L^1_{\mathrm{loc}}$
real-valued and $V\ge-v_0$ almost everywhere. Then $q_{A,V}$ is closable on
$C_c^\infty(\mathbb R^d;\mathbb C)$ in the shifted form norm
$\|u\|_{q,v_0,\varepsilon_0}^2=q_{A,V}[u]+(v_0+\varepsilon_0)\|u\|_2^2$
for every $\varepsilon_0>0$. Its closure is a densely defined closed
Hermitian form bounded below by $-v_0$.

## Statement references

[[def-nrqmx-magnetic-form-data]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, $d\ge1$, $m,\hbar>0$, real
$q$, smooth real $A$, real $V\in L^1_{\mathrm{loc}}$ with $V\ge-v_0$, and
the core form $q_{A,V}$.

[A1] Countable Choice and Dependent Choice are the assumptions of the
Hilbert-space, Fubini, and compact-interval integration-by-parts inputs
([[def-countable-choice]], [[def-dependent-choice]]).

[F1] The complex $L^2$ pairing is a Hilbert inner product, $C_c^\infty$ is
dense in $L^2$, and Cauchy–Schwarz holds. The weak-derivative convention
uses this same quotient $L^2$ space
([[def-nrqmx-magnetic-form-data]],
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]],
[[cor-cauchy-schwarz-inequality-for-l-two]]).

[F2] Each $\Pi_j^A$ maps the core to itself and is symmetric there. On a
compact rectangle this follows from one-variable integration by parts on
each coordinate slice, Fubini, and the reality of $A_j$
([[thm-integration-by-parts-for-absolutely-continuous-functions]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F3] If $W=V+v_0$, then $W\ge0$, $W\in L^1_{\mathrm{loc}}$, and
$W^{1/2}\phi\in L^2$ for every $\phi\in C_c^\infty$: on a compact support,
$|\phi|$ is bounded and $\int W|\phi|^2<\infty$
([[def-nrqmx-magnetic-form-data]]).

## Proof

1.1 Fix $\varepsilon_0>0$ and put $W=V+v_0$. For every $u\in C_c^\infty$,
$$\|u\|_{q,v_0,\varepsilon_0}^2=\frac1{2m}\sum_{j=1}^d\|\Pi_j^A u\|_2^2+\|W^{1/2}u\|_2^2+\varepsilon_0\|u\|_2^2.$$
This identity shows that if $(u_n)$ is Cauchy in the shifted form norm,
then each sequence $(\Pi_j^A u_n)$ and $(W^{1/2}u_n)$ is Cauchy in $L^2$.
[given, F1, F3, algebra]

2.1 Suppose additionally that $\|u_n\|_2\to0$. Let $w_j$ be the $L^2$
limit of $\Pi_j^A u_n$. For any $\phi\in C_c^\infty$, symmetry [F2]
and Cauchy–Schwarz give
$$\langle w_j,\phi\rangle=\lim_n\langle\Pi_j^A u_n,\phi\rangle=\lim_n\langle u_n,\Pi_j^A\phi\rangle=0.$$
Density in [F1] implies $w_j=0$. If $w_0$ is the $L^2$ limit of
$W^{1/2}u_n$, then [F3] and Cauchy–Schwarz similarly give
$$\langle w_0,\phi\rangle=\lim_n\langle u_n,W^{1/2}\phi\rangle=0$$
for every test function $\phi$, so density gives $w_0=0$. [given, A1, F1, F2, F3, step 1.1]

3.1 Every term on the right side of the norm identity in step 1.1 therefore
tends to zero, including $\varepsilon_0\|u_n\|_2^2$. Thus
$\|u_n\|_{q,v_0,\varepsilon_0}\to0$, which is exactly the closability
criterion in [[def-nrqmx-magnetic-form-data]]. The completion is densely
embedded in $L^2$ because it contains the dense core, and the criterion makes
that embedding injective; its form is closed by construction and retains the
lower bound $-v_0$. [A1, F1, step 1.1, step 2.1, algebra] ∎
