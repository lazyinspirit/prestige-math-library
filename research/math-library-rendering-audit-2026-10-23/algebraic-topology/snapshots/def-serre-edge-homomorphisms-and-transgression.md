---
id: def-serre-edge-homomorphisms-and-transgression
kind: definition
title: Serre edge homomorphisms and transgression
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-homological-serre-spectral-sequence, def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-spectral-sequence-subquotient-and-local-lifting-calculus]
proof_strategy: definition
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lecture 26"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 26, printed pp. 88–91"
    - title: "Hatcher, Algebraic Topology, Proposition 5.14"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 539–541"
---

## Definition

Let $p:E\to B$ and $R$ satisfy [[thm-homological-serre-spectral-sequence]].
The **fiber-axis Serre edge homomorphism** in total degree $n\geq0$ is
$$\epsilon_F:E^2_{0,n}=H_0\bigl(B;\mathcal H_n(p;R)\bigr)\twoheadrightarrow E^\infty_{0,n}\cong F_0H_n(E;R)\hookrightarrow H_n(E;R).$$
The **base-axis Serre edge homomorphism** is
$$\epsilon_B:H_n(E;R)\twoheadrightarrow H_n(E;R)/F_{n-1}H_n(E;R)\cong E^\infty_{n,0}\hookrightarrow E^2_{n,0}=H_n\bigl(B;\mathcal H_0(p;R)\bigr).$$
The surjection and inclusion are the finite normalized axis maps of
[[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]]. In particular,
the fiber-axis source is the local-coefficient group of coinvariant type
$H_0(B;\mathcal H_n)$, not an invariant subgroup of one fiber stalk. The
base-axis target has coefficients $\mathcal H_0$ and is not identified with
ordinary $H_n(B;R)$ unless a specified coefficient identification permits it.

For $n\geq2$, no differential before $d_n$ can enter $(n,0)$, while no
differential can leave $(0,n-1)$. Consequently the transition maps canonically
realize
$$D_n:=E^n_{n,0}\hookrightarrow E^2_{n,0},\qquad Q_{n-1}:=E^n_{0,n-1}\twoheadleftarrow E^2_{0,n-1}.$$
Thus $D_n$ is exactly the subgroup of base-axis classes surviving
$d_2,\ldots,d_{n-1}$, and $Q_{n-1}$ is the fiber-axis group modulo the images
of the differentials arriving before page $n$. The **homological Serre
transgression** is the partial homomorphism
$$\tau_n=d_n:D_n\longrightarrow Q_{n-1},$$
where $d_n$ has source $(n,0)$ and target $(0,n-1)$. This equality fixes the
sign: there is no additional sign beyond the convention
$d_r:E^r_{a,b}\to E^r_{a-r,b+r-1}$. For $n=2$, the empty list of earlier
differentials gives $D_2=E^2_{2,0}$ and $Q_1=E^2_{0,1}$.

Dually, whenever a first-quadrant cohomological Serre spectral sequence with
$d_r:E_r^{a,b}\to E_r^{a+r,b-r+1}$ has been supplied, its transgressive
**fiber** classes in degree $n-1$ are the classes in
$D^{n-1}:=E_n^{0,n-1}\hookrightarrow E_2^{0,n-1}$ that survive the earlier
outgoing differentials. Their cohomological transgression is
$$\tau^n=d_n:D^{n-1}\longrightarrow E_n^{n,0},$$
whose target is the base-axis quotient by earlier incoming images. This dual
clause is conditional on the cohomological sequence; it does not use one as a
prerequisite for the homological definition.

These definitions include zero groups, the zero ring, empty axis terms, and
classes killed by an earlier differential (which are outside $D_n$ or
$D^{n-1}$). They do not define a value for a nonsurviving class, do not select
representatives of any quotient, and use no choice principle. Neither
definition states a biconditional.
