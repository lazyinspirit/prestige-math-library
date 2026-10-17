---
id: def-emg-local-potentials-and-circle-data
kind: definition
title: "Local potentials and smooth circle-bundle connection data"
status: draft
origin: pipeline
domain: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-lorentzian-forms
  - lem-emg-lorentz-hodge-calculus
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-de-rham-cohomology
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "Victor Guillemin and Peter Haine, Differential Forms, MIT 18.952 text (2019), sections 2.4 and 2.6"
      url: "https://math.mit.edu/classes/18.952/2019SP/18.952_book_2019.pdf"
      locator: "Section 2.4, exterior-derivative identities, printed pp. 53–57; section 2.6, smooth homotopies and Theorem 2.6.15, printed pp. 61–65."
    - title: "David Tong, Gauge Theory, Cambridge Part III lecture notes (2018), section 1.1.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Section 1.1.2, 'A Patchwork of Gauge Fields,' printed pp. 6–8 (PDF pp. 16–18), north/south local potentials and their transition."
    - title: "Scott Morrison, Connections on Principal Fibre Bundles (2000)"
      url: "https://tqft.net/papers/ConnectionsAndBundles.pdf"
      locator: "Sections 3.1–3.3, 5.1 and 7.1–7.3, printed pp. 3–15 (PDF pp. 3–16), principal-bundle charts, horizontal connections, local connection representatives and curvature."
provenance:
  statement: ai-altered
  proof: not-applicable
---

## Definition

Let $(M,g,N,o)$ be the smooth, Hausdorff, second-countable, boundaryless oriented and time-oriented Lorentzian four-manifold of [[def-emg-lorentzian-forms]]. Its smooth real $k$-forms are sections of $\bigwedge^kT^*M$, written $\Omega^k(M)$, and $d$ is the exterior derivative of [[lem-emg-lorentz-hodge-calculus]]. A smooth two-form $F$ is **closed** when $dF=0$ and **exact** when $F=dA$ for some smooth real one-form $A$ on the whole base.

By [[def-de-rham-cohomology]], $H^2_{\mathrm{dR}}(M)=Z^2(M)/B^2(M)$, where $Z^2(M)$ is the vector space of closed smooth two-forms and $B^2(M)$ is the vector space of exact smooth two-forms. Thus, for closed $F$, the statement $[F]=0$ means exactly that $F=dA$ for a global smooth one-form $A$. This equivalence is the quotient definition; it does not assert that every closed form is exact.

Let $U(1)=\{z\in\mathbb C:|z|=1\}$ with complex multiplication, the subspace topology and the usual smooth circle structure. A **normalized circle-connection datum** on $M$ consists of a supplied countable open cover $(U_i)_{i\in I}$, smooth transition maps $g_{ij}:U_i\cap U_j\to U(1)$, smooth real one-forms $a_i\in\Omega^1(U_i)$, and a fixed constant $\kappa_0>0$. Require $g_{ii}=1$ and $g_{ij}g_{jk}=g_{ik}$ on every triple intersection. Around each point of $U_i\cap U_j$, a smooth real phase lift $f_{ij}$ exists with $g_{ij}=e^{if_{ij}}$; require

$$
a_j=a_i+df_{ij}
$$

on every such phase-lift neighborhood. Different lifts differ locally by an integer multiple of $2\pi$, so their differentials agree and this compatibility condition is independent of the lift. Equivalently, with the globally defined real one-form $\lambda(g)=-i\,g^{-1}dg$ on each overlap, the condition is $a_j=a_i+\lambda(g_{ij})$.

The circle is a smooth Lie group and in particular a topological group: multiplication is the restriction of continuous complex multiplication and inversion is complex conjugation. A right principal $U(1)$-bundle has a continuous right action and locally trivial equivariant product charts; those charts make the action free and transitive on each fibre, as defined in [[def-principal-g-bundle-and-associated-fiber-bundle]]. The compatible transition functions are the gluing data for such a bundle, in the convention that a point with fibre coordinate $z_i$ in chart $i$ has coordinate $z_j=g_{ij}^{-1}z_i$ in chart $j$. No global real-valued angle on $U(1)$ is assumed.

The constant $\kappa_0$ is a chosen normalization with units of webers; it is not Planck's constant and is not a unit of electric charge. On a chart whose coordinates have length units, the normalized connection components $a_i$ have units $\mathrm m^{-1}$; the corresponding local potential $A_i:=\kappa_0a_i$ has components $\mathrm{Wb}\,\mathrm m^{-1}$, and its curvature $F_i:=dA_i=\kappa_0\,da_i$ has components $\mathrm{Wb}\,\mathrm m^{-2}$. This definition imposes no flux or charge quantization.

## Remarks

The typed conventions formerly reserved on EMG-MG01 are authored earlier on this page: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]]. They fix the finite-real, topology, power, choice, geometric-domain and set-size interfaces. The finite chart formulas here make no countable selection; the explicit countable-choice hypothesis of the sequence criterion is spent only in that lemma's reverse implication. Authored carriers and local proofs do not themselves assert independent acceptance or repair an unrelated original supplier.
